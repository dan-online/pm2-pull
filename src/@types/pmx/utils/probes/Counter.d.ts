export = Counter;
declare function Counter(opts: any): void;
declare class Counter {
    constructor(opts: any);
    _count: any;
    val(): any;
    inc(n: any): void;
    dec(n: any): void;
    reset(count: any): void;
}
