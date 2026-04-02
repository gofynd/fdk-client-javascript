export = PublicAPIClient;
/**
 * @typedef {Object} Options
 * @property {boolean} responseHeaders - Whether response headers are returned or not.
 */
declare class PublicAPIClient {
    /**
     * @param {object} conf
     * @param {string} method
     * @param {string} url
     * @param {object} query
     * @param {object} body
     */
    static execute(conf: object, method: string, url: string, query: object, body: object, xHeaders: any, options: any): Promise<import("axios").AxiosResponse<any, any>>;
}
declare namespace PublicAPIClient {
    export { Options };
}
type Options = {
    /**
     * - Whether response headers are returned or not.
     */
    responseHeaders: boolean;
};
