import type Counter from "./utils/probes/Counter";

declare module "pmx" {
	export const _pmx_conf: any;
	export function init(opts: any): this;
	export function initModule(opts: any, cb: any): any;
	export function getConf(): any;
	export function getEnv(): any;
	export function probe(): {
		/**
		 * This reflect data to keymetrics
		 * pmx.transpose('prop name', fn)
		 *
		 * or
		 *
		 * pmx.transpose({
		 *   name : 'variable name',
		 *   data : function() { return value }
		 * });
		 */
		transpose: (variable_name: any, reporter: any) => void;
		metric: (opts: any) => void | {
			val: () => any;
			set: (dt: any) => void;
		};
		histogram: (opts: any) => void | Histogram;
		meter: (opts: any) => void | Meter;
		counter: (opts: any) => Counter;
	};
}
