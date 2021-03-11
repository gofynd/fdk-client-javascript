export = Paginator;
declare class Paginator {
    constructor(pageNo: any);
    setCallback(callback: any): void;
    callback: any;
    hasNext(): any;
    setPaginator({ hasNext, nextId, pageNo }: {
        hasNext: any;
        nextId?: any;
        pageNo?: number;
    }): void;
    isNext: any;
    nextId: any;
    pageNo: any;
    next(): any;
}
