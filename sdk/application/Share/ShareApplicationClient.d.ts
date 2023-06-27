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
     * @param {ShareApplicationValidator.createShortLink} arg - Arg object.
     * @returns {Promise<ShareApplicationModel.ShortLinkRes>} - Success response
     * @name createShortLink
     * @summary: Create a short link
     * @description: Use this API to create a short link that is easy to write/share/read as compared to long URLs.
     */
    createShortLink({ body }?: ShareApplicationValidator.createShortLink): Promise<ShareApplicationModel.ShortLinkRes>;
    /**
     * @param {ShareApplicationValidator.getApplicationQRCode} arg - Arg object.
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getApplicationQRCode
     * @summary: Create QR Code of an app
     * @description: Use this API to create a QR code of an app for sharing it with users who want to use the app.
     */
    getApplicationQRCode({}?: any): Promise<ShareApplicationModel.QRCodeResp>;
    /**
     * @param {ShareApplicationValidator.getCollectionQRCodeBySlug} arg - Arg object.
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getCollectionQRCodeBySlug
     * @summary: Create QR Code of a collection
     * @description: Use this API to create a QR code of a collection of products for sharing it with users who want to view/purchase the collection.
     */
    getCollectionQRCodeBySlug({ slug }?: ShareApplicationValidator.getCollectionQRCodeBySlug): Promise<ShareApplicationModel.QRCodeResp>;
    /**
     * @param {ShareApplicationValidator.getOriginalShortLinkByHash} arg - Arg object.
     * @returns {Promise<ShareApplicationModel.ShortLinkRes>} - Success response
     * @name getOriginalShortLinkByHash
     * @summary: Get original link by hash
     * @description: Use this API to retrieve the original link from a short-link by using a hash value.
     */
    getOriginalShortLinkByHash({ hash }?: ShareApplicationValidator.getOriginalShortLinkByHash): Promise<ShareApplicationModel.ShortLinkRes>;
    /**
     * @param {ShareApplicationValidator.getProductQRCodeBySlug} arg - Arg object.
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getProductQRCodeBySlug
     * @summary: Create QR Code of a product
     * @description: Use this API to create a QR code of a product for sharing it with users who want to view/purchase the product.
     */
    getProductQRCodeBySlug({ slug }?: ShareApplicationValidator.getProductQRCodeBySlug): Promise<ShareApplicationModel.QRCodeResp>;
    /**
     * @param {ShareApplicationValidator.getShortLinkByHash} arg - Arg object.
     * @returns {Promise<ShareApplicationModel.ShortLinkRes>} - Success response
     * @name getShortLinkByHash
     * @summary: Get short link by hash
     * @description: Use this API to get a short link by using a hash value.
     */
    getShortLinkByHash({ hash }?: ShareApplicationValidator.getShortLinkByHash): Promise<ShareApplicationModel.ShortLinkRes>;
    /**
     * @param {ShareApplicationValidator.getUrlQRCode} arg - Arg object.
     * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
     * @name getUrlQRCode
     * @summary: Create QR Code of a URL
     * @description: Use this API to create a QR code of a URL for sharing it with users who want to visit the link.
     */
    getUrlQRCode({ url }?: ShareApplicationValidator.getUrlQRCode): Promise<ShareApplicationModel.QRCodeResp>;
}
import ShareApplicationValidator = require("./ShareApplicationValidator");
import ShareApplicationModel = require("./ShareApplicationModel");
