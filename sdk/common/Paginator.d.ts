export = Paginator;
/** @template {Object} T */
declare class Paginator<T extends unknown> {
    /** @param {number} pageNo */
    constructor(pageNo: number);
    pageNo: number;
    callback: () => Promise<T>;
    /**
     * @param {() => Promise<T>} callback
     * @returns {void}
     */
    setCallback(callback: () => Promise<T>): void;
    /** @returns {boolean} */
    hasNext(): boolean;
    /**
     * @param {Object} arg
     * @param {boolean} arg.hasNext
     * @param {string} arg.nextId
     * @param {number} arg.pageNo
     * @returns {void}
     */
    setPaginator({ hasNext, nextId, pageNo }: {
        hasNext: boolean;
        nextId: string;
        pageNo: number;
    }): void;
    isNext: boolean;
    nextId: string;
    /** @returns {Promise<T>} */
    next(): Promise<T>;
}
