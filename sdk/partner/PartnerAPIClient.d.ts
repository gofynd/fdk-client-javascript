export = APIClient;
/**
 * @typedef {Object} Options
 * @property {boolean} headers - Whether headers are returned or not.
 */
declare class APIClient {
    /**
     * @param {object} conf
     * @param {string} method
     * @param {string} url
     * @param {object} query
     * @param {object} body
     * @param {Options} options
     */
    static execute(conf: object, method: string, url: string, query: object, body: object, options: Options): Promise<any>;
    get(url: any, config: any): Promise<any>;
}
declare namespace APIClient {
    export { Options };
}
type Options = {
    /**
     * - Whether headers are returned or not.
     */
    headers: boolean;
};
