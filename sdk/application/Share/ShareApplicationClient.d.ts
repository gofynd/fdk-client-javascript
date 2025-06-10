export = Share;
declare class Share {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        createShortLink: string;
        getApplicationQRCode: string;
        getCollectionQRCodeBySlug: string;
        getOriginalShortLinkByHash: string;
        getProductQRCodeBySlug: string;
        getShortLinkByHash: string;
        getUrlQRCode: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShortLinkRes>} - Success response
     * @name createShortLink
     * @summary: Shorten URL
     * @description: Creates a shortened version of a given URL for easier sharing. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/share/createShortLink/).
     */
    createShortLink({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ShortLinkRes>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<QRCodeResp>} - Success response
     * @name getApplicationQRCode
     * @summary: App QR code
     * @description: Generates a QR code for the application for easy sharing. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/share/getApplicationQRCode/).
     */
    getApplicationQRCode({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<QRCodeResp>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<QRCodeResp>} - Success response
     * @name getCollectionQRCodeBySlug
     * @summary: Collection QR code
     * @description: Generates a QR code for a specific product collection using its slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/share/getCollectionQRCodeBySlug/).
     */
    getCollectionQRCodeBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<QRCodeResp>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShortLinkRes>} - Success response
     * @name getOriginalShortLinkByHash
     * @summary: Original URL
     * @description: Retrieve the original link from a short-link by using a hash value. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/share/getOriginalShortLinkByHash/).
     */
    getOriginalShortLinkByHash({ hash, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ShortLinkRes>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<QRCodeResp>} - Success response
     * @name getProductQRCodeBySlug
     * @summary: Product QR code
     * @description: Creates a QR code for a specific product identified by its slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/share/getProductQRCodeBySlug/).
     */
    getProductQRCodeBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<QRCodeResp>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShortLinkRes>} - Success response
     * @name getShortLinkByHash
     * @summary: Get short link
     * @description: Retrieves a previously created short link using its hash identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/share/getShortLinkByHash/).
     */
    getShortLinkByHash({ hash, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ShortLinkRes>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<QRCodeResp>} - Success response
     * @name getUrlQRCode
     * @summary: URL to QR code
     * @description: Converts a given URL into a scannable QR code. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/share/getUrlQRCode/).
     */
    getUrlQRCode({ url, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<QRCodeResp>;
}
