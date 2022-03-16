export = Paginator;
declare class Paginator {
    constructor(pageNo: any);
    pageNo: any;
    callback: any;
    setCallback(callback: any): void;
    hasNext(): any;
    setPaginator({ hasNext, nextId, pageNo }: {
        hasNext: any;
        nextId?: any;
        pageNo?: number;
    }): void;
    isNext: any;
    nextId: any;
    next(): any;
}
