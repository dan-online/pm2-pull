export = Meter;
declare function Meter(opts: any): boolean;
declare class Meter {
    constructor(opts: any);
    _tickInterval: number;
    _samples: any;
    _timeframe: any;
    _rate: EWMA;
    _interval: number;
    mark(n: any): void;
    val(): number;
}
declare namespace Meter {
    const RATE_UNIT: number;
}
import EWMA = require("../EWMA");
