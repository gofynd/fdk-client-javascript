export = PublicAPIClient;
declare class PublicAPIClient {
    /**
     * @param {object} conf
     * @param {string} method
     * @param {string} url
     * @param {object} query
     * @param {object} body
     */
    static execute(conf: object, method: string, url: string, query: object, body: object): any;
}
