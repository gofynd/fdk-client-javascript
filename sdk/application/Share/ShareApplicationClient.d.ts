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
     * @returns {Promise<ShareApplicationModel.ShortLinkRes>} - Success response
     * @name createShortLink
     * @summary: Create a short link
     * @description: Use this API to create a short link that is easy to write/share/read as compared to long URLs.
     */
    createShortLink({ body }?: ShareApplicationValidator.CreateShortLinkParam): Promise<ShareApplicationModel.ShortLinkRes>;
    /**
     * @param {ShareApplicationValidator.GetApplicationQRCodeParam} arg - Arg object.
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getApplicationQRCode
     * @summary: Create QR Code of an app
     * @description: Use this API to create a QR code of an app for sharing it with users who want to use the app.
     */
    getApplicationQRCode({}?: any): Promise<ShareApplicationModel.QRCodeResp>;
    /**
     * @param {ShareApplicationValidator.GetCollectionQRCodeBySlugParam} arg - Arg object.
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getCollectionQRCodeBySlug
     * @summary: Create QR Code of a collection
     * @description: Use this API to create a QR code of a collection of products for sharing it with users who want to view/purchase the collection.
     */
    getCollectionQRCodeBySlug({ slug }?: ShareApplicationValidator.GetCollectionQRCodeBySlugParam): Promise<ShareApplicationModel.QRCodeResp>;
    /**
     * @param {ShareApplicationValidator.GetOriginalShortLinkByHashParam} arg -
     *   Arg object.
     * @returns {Promise<ShareApplicationModel.ShortLinkRes>} - Success response
     * @name getOriginalShortLinkByHash
     * @summary: Get original link by hash
     * @description: Use this API to retrieve the original link from a short-link by using a hash value.
     */
    getOriginalShortLinkByHash({ hash }?: ShareApplicationValidator.GetOriginalShortLinkByHashParam): Promise<ShareApplicationModel.ShortLinkRes>;
    /**
     * @param {ShareApplicationValidator.GetProductQRCodeBySlugParam} arg - Arg object.
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getProductQRCodeBySlug
     * @summary: Create QR Code of a product
     * @description: Use this API to create a QR code of a product for sharing it with users who want to view/purchase the product.
     */
    getProductQRCodeBySlug({ slug }?: ShareApplicationValidator.GetProductQRCodeBySlugParam): Promise<ShareApplicationModel.QRCodeResp>;
    /**
     * @param {ShareApplicationValidator.GetShortLinkByHashParam} arg - Arg object.
     * @returns {Promise<ShareApplicationModel.ShortLinkRes>} - Success response
     * @name getShortLinkByHash
     * @summary: Get short link by hash
     * @description: Use this API to get a short link by using a hash value.
     */
    getShortLinkByHash({ hash }?: ShareApplicationValidator.GetShortLinkByHashParam): Promise<ShareApplicationModel.ShortLinkRes>;
    /**
     * @param {ShareApplicationValidator.GetUrlQRCodeParam} arg - Arg object.
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getUrlQRCode
     * @summary: Create QR Code of a URL
     * @description: Use this API to create a QR code of a URL for sharing it with users who want to visit the link.
     */
    getUrlQRCode({ url }?: ShareApplicationValidator.GetUrlQRCodeParam): Promise<ShareApplicationModel.QRCodeResp>;
}
import ShareApplicationValidator = require("./ShareApplicationValidator");
import ShareApplicationModel = require("./ShareApplicationModel");
