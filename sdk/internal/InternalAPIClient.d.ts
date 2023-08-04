export = InternalAPIClient;
declare class InternalAPIClient {
    /**
     * @param {object} conf
     * @param {string} method
     * @param {string} url
     * @param {object} query
     * @param {object} body
     */
    static execute(conf: object, method: string, url: string, query: object, body: object, xHeaders: any): any;
}
