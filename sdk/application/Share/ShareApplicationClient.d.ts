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
     * @param {Object} arg - Arg object.
     * @param {ShortLinkReq} arg.body
     * @returns {Promise<ShortLinkRes>} - Success response
     * @summary: Create a short link
     * @description: Use this API to create a short link that is easy to write/share/read as compared to long URLs.
     */
    createShortLink({ body }?: {
        body: ShortLinkReq;
    }): Promise<ShortLinkRes>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<QRCodeResp>} - Success response
     * @summary: Create QR Code of an app
     * @description: Use this API to create a QR code of an app for sharing it with users who want to use the app.
     */
    getApplicationQRCode({}?: any): Promise<QRCodeResp>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a collection. You can get slug value from the endpoint.
     * @returns {Promise<QRCodeResp>} - Success response
     * @summary: Create QR Code of a collection
     * @description: Use this API to create a QR code of a collection of products for sharing it with users who want to view/purchase the collection.
     */
    getCollectionQRCodeBySlug({ slug }?: {
        slug: string;
    }): Promise<QRCodeResp>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.hash - A string value used for converting long URL to
     *   short URL and vice-versa.
     * @returns {Promise<ShortLinkRes>} - Success response
     * @summary: Get original link by hash
     * @description: Use this API to retrieve the original link from a short-link by using a hash value.
     */
    getOriginalShortLinkByHash({ hash }?: {
        hash: string;
    }): Promise<ShortLinkRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint.
     * @returns {Promise<QRCodeResp>} - Success response
     * @summary: Create QR Code of a product
     * @description: Use this API to create a QR code of a product for sharing it with users who want to view/purchase the product.
     */
    getProductQRCodeBySlug({ slug }?: {
        slug: string;
    }): Promise<QRCodeResp>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.hash - A string value used for converting long URL to
     *   short URL and vice-versa.
     * @returns {Promise<ShortLinkRes>} - Success response
     * @summary: Get short link by hash
     * @description: Use this API to get a short link by using a hash value.
     */
    getShortLinkByHash({ hash }?: {
        hash: string;
    }): Promise<ShortLinkRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.url - A link or a web address
     * @returns {Promise<QRCodeResp>} - Success response
     * @summary: Create QR Code of a URL
     * @description: Use this API to create a QR code of a URL for sharing it with users who want to visit the link.
     */
    getUrlQRCode({ url }?: {
        url: string;
    }): Promise<QRCodeResp>;
}
