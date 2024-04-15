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
     * @param {ShareApplicationValidator.CreateShortLinkParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShareApplicationModel.ShortLinkRes>} - Success response
     * @name createShortLink
     * @summary: Shorten URL
     * @description: Creates a shortened version of a given URL for easier sharing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/createShortLink/).
     */
    createShortLink({ body, requestHeaders }?: ShareApplicationValidator.CreateShortLinkParam, { responseHeaders }?: object): Promise<ShareApplicationModel.ShortLinkRes>;
    /**
     * @param {ShareApplicationValidator.GetApplicationQRCodeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getApplicationQRCode
     * @summary: App QR code
     * @description: Generates a QR code for the application for easy sharing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getApplicationQRCode/).
     */
    getApplicationQRCode({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ShareApplicationModel.QRCodeResp>;
    /**
     * @param {ShareApplicationValidator.GetCollectionQRCodeBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getCollectionQRCodeBySlug
     * @summary: Collection QR code
     * @description: Generates a QR code for a specific product collection using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getCollectionQRCodeBySlug/).
     */
    getCollectionQRCodeBySlug({ slug, requestHeaders }?: ShareApplicationValidator.GetCollectionQRCodeBySlugParam, { responseHeaders }?: object): Promise<ShareApplicationModel.QRCodeResp>;
    /**
     * @param {ShareApplicationValidator.GetOriginalShortLinkByHashParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShareApplicationModel.ShortLinkRes>} - Success response
     * @name getOriginalShortLinkByHash
     * @summary: Original URL
     * @description: Retrieve the original link from a short-link by using a hash value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getOriginalShortLinkByHash/).
     */
    getOriginalShortLinkByHash({ hash, requestHeaders }?: ShareApplicationValidator.GetOriginalShortLinkByHashParam, { responseHeaders }?: object): Promise<ShareApplicationModel.ShortLinkRes>;
    /**
     * @param {ShareApplicationValidator.GetProductQRCodeBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getProductQRCodeBySlug
     * @summary: Product QR code
     * @description: Creates a QR code for a specific product identified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getProductQRCodeBySlug/).
     */
    getProductQRCodeBySlug({ slug, requestHeaders }?: ShareApplicationValidator.GetProductQRCodeBySlugParam, { responseHeaders }?: object): Promise<ShareApplicationModel.QRCodeResp>;
    /**
     * @param {ShareApplicationValidator.GetShortLinkByHashParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShareApplicationModel.ShortLinkRes>} - Success response
     * @name getShortLinkByHash
     * @summary: Fetch short link
     * @description: Retrieves a previously created short link using its hash identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getShortLinkByHash/).
     */
    getShortLinkByHash({ hash, requestHeaders }?: ShareApplicationValidator.GetShortLinkByHashParam, { responseHeaders }?: object): Promise<ShareApplicationModel.ShortLinkRes>;
    /**
     * @param {ShareApplicationValidator.GetUrlQRCodeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getUrlQRCode
     * @summary: URL to QR code
     * @description: Converts a given URL into a scannable QR code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getUrlQRCode/).
     */
    getUrlQRCode({ url, requestHeaders }?: ShareApplicationValidator.GetUrlQRCodeParam, { responseHeaders }?: object): Promise<ShareApplicationModel.QRCodeResp>;
}
import ShareApplicationValidator = require("./ShareApplicationValidator");
import ShareApplicationModel = require("./ShareApplicationModel");
