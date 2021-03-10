export = Paginator;
declare class Paginator {
    constructor(pageNo: any);
    isNext: boolean;
    nextId: any;
    pageNo: number;
    setCallback(callback: any): void;
    callback: any;
    hasNext(): boolean;
    setPaginator({ hasNext, nextId, pageNo }: {
        hasNext: any;
        nextId?: any;
        pageNo?: any;
    }): void;
    next(): any;
    #private;
}
