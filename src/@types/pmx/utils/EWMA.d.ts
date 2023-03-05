export = ExponentiallyWeightedMovingAverage;
declare function ExponentiallyWeightedMovingAverage(
	timePeriod: any,
	tickInterval: any,
): void;
declare class ExponentiallyWeightedMovingAverage {
	constructor(timePeriod: any, tickInterval: any);
	_timePeriod: any;
	_tickInterval: any;
	_alpha: number;
	_count: number;
	_rate: number;
	update(n: any): void;
	tick(): void;
	rate(timeUnit: any): number;
}
declare namespace ExponentiallyWeightedMovingAverage {
	const TICK_INTERVAL: number;
}
