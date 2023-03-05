export = BinaryHeap;
declare function BinaryHeap(options: any): void;
declare class BinaryHeap {
    constructor(options: any);
    _elements: any;
    _score: any;
    add(...args: any[]): void;
    first(): any;
    removeFirst(): any;
    clone(): BinaryHeap;
    toSortedArray(): any[];
    toArray(): any[];
    size(): any;
    _bubble(bubbleIndex: any): void;
    _sink(sinkIndex: any): void;
    _parentIndex(index: any): number;
    _childIndexes(index: any): number[];
}
