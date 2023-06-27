export = ShareApplicationValidator;
/**
 * @typedef createShortLink
 * @property {ShareApplicationModel.ShortLinkReq} body
 */
/** @typedef getApplicationQRCode */
/**
 * @typedef getCollectionQRCodeBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a collection. You can get slug value from the endpoint.
 */
/**
 * @typedef getOriginalShortLinkByHash
 * @property {string} hash - A string value used for converting long URL to
 *   short URL and vice-versa.
 */
/**
 * @typedef getProductQRCodeBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint.
 */
/**
 * @typedef getShortLinkByHash
 * @property {string} hash - A string value used for converting long URL to
 *   short URL and vice-versa.
 */
/**
 * @typedef getUrlQRCode
 * @property {string} url - A link or a web address
 */
declare class ShareApplicationValidator {
}
declare namespace ShareApplicationValidator {
    export { createShortLink, getApplicationQRCode, getCollectionQRCodeBySlug, getOriginalShortLinkByHash, getProductQRCodeBySlug, getShortLinkByHash, getUrlQRCode };
}
/** @returns {createShortLink} */
declare function createShortLink(): createShortLink;
type createShortLink = {
    body: ShareApplicationModel.ShortLinkReq;
};
/** @returns {getApplicationQRCode} */
declare function getApplicationQRCode(): any;
type getApplicationQRCode = any;
/** @returns {getCollectionQRCodeBySlug} */
declare function getCollectionQRCodeBySlug(): getCollectionQRCodeBySlug;
type getCollectionQRCodeBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a collection. You can get slug value from the endpoint.
     */
    slug: string;
};
/** @returns {getOriginalShortLinkByHash} */
declare function getOriginalShortLinkByHash(): getOriginalShortLinkByHash;
type getOriginalShortLinkByHash = {
    /**
     * - A string value used for converting long URL to
     * short URL and vice-versa.
     */
    hash: string;
};
/** @returns {getProductQRCodeBySlug} */
declare function getProductQRCodeBySlug(): getProductQRCodeBySlug;
type getProductQRCodeBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a product. You can get slug value from the endpoint.
     */
    slug: string;
};
/** @returns {getShortLinkByHash} */
declare function getShortLinkByHash(): getShortLinkByHash;
type getShortLinkByHash = {
    /**
     * - A string value used for converting long URL to
     * short URL and vice-versa.
     */
    hash: string;
};
/** @returns {getUrlQRCode} */
declare function getUrlQRCode(): getUrlQRCode;
type getUrlQRCode = {
    /**
     * - A link or a web address
     */
    url: string;
};
import ShareApplicationModel = require("./ShareApplicationModel");
