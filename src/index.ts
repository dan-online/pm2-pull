import { SpawnOptionsWithoutStdio, execSync, spawn } from "child_process";
import pm2 from "pm2";
import pmx from "pmx";

const Probe = pmx.probe();

const updates = Probe.counter({
	name: "Updates",
});

const fails = Probe.counter({
	name: "Fails",
});

function autoPull(interval: number) {
	pm2.list(async function (err, procs) {
		if (err) return console.error(err);

		for (const proc of procs) {
			const env = proc.pm2_env;

			if (!env) continue;
			// if (env.status !== "online") continue;
			if (!("versioning" in env)) continue;
			const versioning = (env.versioning as {
				remote: string;
				branch: string;
			}) || { remote: "", branch: "" };

			if (versioning.remote === "" || versioning.branch === "") continue;
			if (proc.pid === process.pid || proc.name === "pm2-pull") continue;

			const { code, output, error } = await new Promise<{
				code: number;
				output: string;
				error: string;
			}>((res) => {
				const options: SpawnOptionsWithoutStdio = {
					cwd: env.pm_cwd,
				};

				if (process.getgid) {
					options["gid"] = process.getgid();
				}

				if (process.getuid) {
					options["uid"] = process.getuid();
				}

				const git = spawn(
					"git",
					["pull", versioning.remote, versioning.branch],
					options,
				);

				let output = "";
				let error = "";

				git.on("exit", (code) => {
					res({ code: code === null ? 0 : code, output, error });
				});

				git.stdout.on("data", (data) => {
					output += data.toString();
				});

				git.stderr.on("data", (data) => {
					error += data.toString();
				});
			});

			if (code === 0) {
				if (output.includes("up to date")) continue;
				// git log -1 --pretty=%B
				const lastCommitMessage = execSync("git log -1 --pretty=%B", {
					cwd: env.pm_cwd,
				})
					.toString()
					.trim()
					.split("\n")[0];

				console.log("Updated", `${proc.name}: ${lastCommitMessage}`);
				updates.inc(1);
			} else {
				console.error(`Failed to update ${proc.name}: ${error}`);
				fails.inc(1);
			}
		}

		setTimeout(autoPull, interval, interval);
	});
}

pmx.initModule(
	{
		widget: {
			type: "generic",
			theme: ["#111111", "#1B2228", "#807C7C", "#807C7C"],

			el: {
				probes: true,
				actions: true,
			},

			block: {
				actions: true,
				issues: true,
				meta: true,
				cpu: true,
				mem: true,
				main_probes: ["Updates", "Fails"],
			},
		},
	},
	function (err: Error, conf: { interval?: number }) {
		if (err) throw err;
		pm2.connect(function () {
			console.log("pm2-pull module connected to pm2");
			autoPull(conf.interval || 30000);
		});
	},
);
