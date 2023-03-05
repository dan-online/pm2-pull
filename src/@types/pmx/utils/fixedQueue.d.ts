declare function FixedQueue(size: any, initialValues: any): any;
declare namespace FixedQueue {
	function trimHead(): void;
	function trimTail(): void;
	function wrapMethod(
		methodName: any,
		trimMethod: any,
	): (...args: any[]) => any;
	function push(...args: any[]): any;
	function splice(...args: any[]): any;
	function unshift(...args: any[]): any;
}
