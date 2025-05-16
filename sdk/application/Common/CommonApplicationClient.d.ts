export = Common;
declare class Common {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getLocations: string;
        searchApplication: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Locations>} - Success response
     * @name getLocations
     * @summary: Get a location
     * @description: Get countries , state , cities data associated with the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/common/getLocations/).
     */
    getLocations({ locationType, id, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<Locations>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ApplicationResponse>} - Success response
     * @name searchApplication
     * @summary: Get sales channel
     * @description: Get an active sales channel based on a provided query. The query can be a valid sales channel ID or a verified domain name. If the sales channel is found, a success response is returned. If not, a 404 error response is returned. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/common/searchApplication/).
     */
    searchApplication({ authorization, query, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ApplicationResponse>;
}
