export = ExponentiallyDecayingSample;
declare function ExponentiallyDecayingSample(options: any): void;
declare class ExponentiallyDecayingSample {
	constructor(options: any);
	_elements: BinaryHeap;
	_rescaleInterval: any;
	_alpha: any;
	_size: any;
	_random: any;
	_landmark: any;
	_nextRescale: any;
	_mean: any;
	update(value: any, timestamp: any): void;
	toSortedArray(): any[];
	toArray(): any[];
	_weight(age: any): number;
	_priority(age: any): number;
	_rescale(now: any): void;
	avg(now: any): number;
}
declare namespace ExponentiallyDecayingSample {
	const RESCALE_INTERVAL: number;
	const ALPHA: number;
	const SIZE: number;
}
import BinaryHeap = require("./BinaryHeap");
