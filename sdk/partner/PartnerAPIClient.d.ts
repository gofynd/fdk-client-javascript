export = APIClient;
/**
 * @typedef {Object} Options
 * @property {boolean} responseHeaders - Whether response headers are returned or not.
 */
declare class APIClient {
    /**
     * @param {object} conf
     * @param {string} method
     * @param {string} url
     * @param {object} query
     * @param {object} body
     * @param {object} xHeaders
     * @param {Options} options
     */
    static execute(conf: object, method: string, url: string, query: object, body: object, xHeaders: object, options: Options): Promise<import("axios").AxiosResponse<any, any, {}>>;
    get(url: any, config: any): Promise<any>;
}
declare namespace APIClient {
    export { Options };
}
type Options = {
    /**
     * - Whether response headers are returned or not.
     */
    responseHeaders: boolean;
};
