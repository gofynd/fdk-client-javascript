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
 * @property {string} url - A link or a web address
 */
declare class ShareApplicationValidator {
    /** @returns {createShortLink} */
    static createShortLink(): createShortLink;
    /** @returns {getApplicationQRCode} */
    static getApplicationQRCode(): getApplicationQRCode;
    /** @returns {getCollectionQRCodeBySlug} */
    static getCollectionQRCodeBySlug(): getCollectionQRCodeBySlug;
    /** @returns {getOriginalShortLinkByHash} */
    static getOriginalShortLinkByHash(): getOriginalShortLinkByHash;
    /** @returns {getProductQRCodeBySlug} */
    static getProductQRCodeBySlug(): getProductQRCodeBySlug;
    /** @returns {getShortLinkByHash} */
    static getShortLinkByHash(): getShortLinkByHash;
    /** @returns {getUrlQRCode} */
    static getUrlQRCode(): getUrlQRCode;
}
declare namespace ShareApplicationValidator {
    export { CreateShortLinkParam, GetApplicationQRCodeParam, GetCollectionQRCodeBySlugParam, GetOriginalShortLinkByHashParam, GetProductQRCodeBySlugParam, GetShortLinkByHashParam, GetUrlQRCodeParam };
}
type CreateShortLinkParam = {
    body: ShareApplicationModel.ShortLinkReq;
};
type GetApplicationQRCodeParam = any;
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
     * - A link or a web address
     */
    url: string;
};
import ShareApplicationModel = require("./ShareApplicationModel");
