export = dataChecker;
/**
 * new smart({
 *   refresh   : function,   Returns monitored value
 *   callback  : function,   Called when error is detected
 *   dev       : 0.2,        Deviation that triggers the error
 *   timer     : 100<ms>,    Value refresh interval
 *   launch    : 10000<ms>,  Timelength after which monitoring begins
 *   ceil      : 5           Number of times an error is detected before triggering callback
 *   calcDEv   : mean        How to compute the deviation
 * });
 */
declare function dataChecker(opts: any): void;
declare class dataChecker {
    /**
     * new smart({
     *   refresh   : function,   Returns monitored value
     *   callback  : function,   Called when error is detected
     *   dev       : 0.2,        Deviation that triggers the error
     *   timer     : 100<ms>,    Value refresh interval
     *   launch    : 10000<ms>,  Timelength after which monitoring begins
     *   ceil      : 5           Number of times an error is detected before triggering callback
     *   calcDEv   : mean        How to compute the deviation
     * });
     */
    constructor(opts: any);
    _counter: number;
    _refresh: any;
    _monitored: boolean;
    _launch: any;
    _ceil: any;
    _timer: any;
    _dev: any;
    _callback: any;
    _histogram: Histogram;
    _calcDev: any;
    computeDev: any;
    _metric2: any;
    _metric3: any;
    normalDev(): boolean;
    medianDev(): boolean;
    stop(): void;
    start(): void;
    _interval_timer: number;
}
import Histogram = require("./probes/Histogram.js");
