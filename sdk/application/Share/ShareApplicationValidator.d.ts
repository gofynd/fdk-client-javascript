export = ShareApplicationValidator;
/**
 * @typedef CreateShortLinkParam
 * @property {ShareApplicationModel.ShortLinkReq} body
 */
/** @typedef GetApplicationQRCodeParam */
/**
 * @typedef GetCollectionQRCodeBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a collection. You can get slug value from the endpoint.
 */
/**
 * @typedef GetOriginalShortLinkByHashParam
 * @property {string} hash - A string value used for converting long URL to
 *   short URL and vice-versa.
 */
/**
 * @typedef GetProductQRCodeBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint.
 */
/**
 * @typedef GetShortLinkByHashParam
 * @property {string} hash - A string value used for converting long URL to
 *   short URL and vice-versa.
 */
/**
 * @typedef GetUrlQRCodeParam
 * @property {string} url - A link or a web address of a given URL transformed
 *   into a scannable QR code.
 */
declare class ShareApplicationValidator {
    /** @returns {CreateShortLinkParam} */
    static createShortLink(): CreateShortLinkParam;
    /** @returns {GetApplicationQRCodeParam} */
    static getApplicationQRCode(): any;
    /** @returns {GetCollectionQRCodeBySlugParam} */
    static getCollectionQRCodeBySlug(): GetCollectionQRCodeBySlugParam;
    /** @returns {GetOriginalShortLinkByHashParam} */
    static getOriginalShortLinkByHash(): GetOriginalShortLinkByHashParam;
    /** @returns {GetProductQRCodeBySlugParam} */
    static getProductQRCodeBySlug(): GetProductQRCodeBySlugParam;
    /** @returns {GetShortLinkByHashParam} */
    static getShortLinkByHash(): GetShortLinkByHashParam;
    /** @returns {GetUrlQRCodeParam} */
    static getUrlQRCode(): GetUrlQRCodeParam;
}
declare namespace ShareApplicationValidator {
    export { CreateShortLinkParam, GetApplicationQRCodeParam, GetCollectionQRCodeBySlugParam, GetOriginalShortLinkByHashParam, GetProductQRCodeBySlugParam, GetShortLinkByHashParam, GetUrlQRCodeParam };
}
type CreateShortLinkParam = {
    body: ShareApplicationModel.ShortLinkReq;
};
type GetCollectionQRCodeBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a collection. You can get slug value from the endpoint.
     */
    slug: string;
};
type GetOriginalShortLinkByHashParam = {
    /**
     * - A string value used for converting long URL to
     * short URL and vice-versa.
     */
    hash: string;
};
type GetProductQRCodeBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a product. You can get slug value from the endpoint.
     */
    slug: string;
};
type GetShortLinkByHashParam = {
    /**
     * - A string value used for converting long URL to
     * short URL and vice-versa.
     */
    hash: string;
};
type GetUrlQRCodeParam = {
    /**
     * - A link or a web address of a given URL transformed
     * into a scannable QR code.
     */
    url: string;
};
type GetApplicationQRCodeParam = any;
import ShareApplicationModel = require("./ShareApplicationModel");
