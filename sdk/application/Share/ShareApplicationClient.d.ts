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
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShareApplicationModel.ShortLinkRes>} - Success response
     * @name createShortLink
     * @summary: Create a short link
     * @description: Use this API to create a short link that is easy to write/share/read as compared to long URLs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/createShortLink/).
     */
    createShortLink({ body }?: ShareApplicationValidator.CreateShortLinkParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<ShareApplicationModel.ShortLinkRes>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getApplicationQRCode
     * @summary: Create QR Code of an app
     * @description: Use this API to create a QR code of an app for sharing it with users who want to use the app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getApplicationQRCode/).
     */
    getApplicationQRCode({ headers }?: import("../ApplicationAPIClient").Options): Promise<ShareApplicationModel.QRCodeResp>;
    /**
     * @param {ShareApplicationValidator.GetCollectionQRCodeBySlugParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getCollectionQRCodeBySlug
     * @summary: Create QR Code of a collection
     * @description: Use this API to create a QR code of a collection of products for sharing it with users who want to view/purchase the collection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getCollectionQRCodeBySlug/).
     */
    getCollectionQRCodeBySlug({ slug }?: ShareApplicationValidator.GetCollectionQRCodeBySlugParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<ShareApplicationModel.QRCodeResp>;
    /**
     * @param {ShareApplicationValidator.GetOriginalShortLinkByHashParam} arg -
     *   Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShareApplicationModel.ShortLinkRes>} - Success response
     * @name getOriginalShortLinkByHash
     * @summary: Get original link by hash
     * @description: Use this API to retrieve the original link from a short-link by using a hash value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getOriginalShortLinkByHash/).
     */
    getOriginalShortLinkByHash({ hash }?: ShareApplicationValidator.GetOriginalShortLinkByHashParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<ShareApplicationModel.ShortLinkRes>;
    /**
     * @param {ShareApplicationValidator.GetProductQRCodeBySlugParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getProductQRCodeBySlug
     * @summary: Create QR Code of a product
     * @description: Use this API to create a QR code of a product for sharing it with users who want to view/purchase the product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getProductQRCodeBySlug/).
     */
    getProductQRCodeBySlug({ slug }?: ShareApplicationValidator.GetProductQRCodeBySlugParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<ShareApplicationModel.QRCodeResp>;
    /**
     * @param {ShareApplicationValidator.GetShortLinkByHashParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShareApplicationModel.ShortLinkRes>} - Success response
     * @name getShortLinkByHash
     * @summary: Get short link by hash
     * @description: Use this API to get a short link by using a hash value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getShortLinkByHash/).
     */
    getShortLinkByHash({ hash }?: ShareApplicationValidator.GetShortLinkByHashParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<ShareApplicationModel.ShortLinkRes>;
    /**
     * @param {ShareApplicationValidator.GetUrlQRCodeParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getUrlQRCode
     * @summary: Create QR Code of a URL
     * @description: Use this API to create a QR code of a URL for sharing it with users who want to visit the link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getUrlQRCode/).
     */
    getUrlQRCode({ url }?: ShareApplicationValidator.GetUrlQRCodeParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<ShareApplicationModel.QRCodeResp>;
}
import ShareApplicationValidator = require("./ShareApplicationValidator");
import ShareApplicationModel = require("./ShareApplicationModel");
