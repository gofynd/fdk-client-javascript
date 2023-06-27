export = SharePlatformApplicationValidator;
/**
 * @typedef createShortLink
 * @property {SharePlatformModel.ShortLinkReq} body
 */
/**
 * @typedef getShortLinkByHash
 * @property {string} hash - Hash of short url
 */
/**
 * @typedef getShortLinkClickStats
 * @property {string} surlId - Short link ID for which click statistics are to
 *   be retrieved.
 */
/**
 * @typedef getShortLinks
 * @property {number} [pageNo] - Current page number
 * @property {number} [pageSize] - Current page size
 * @property {string} [createdBy] - Short link creator
 * @property {string} [active] - Short link active status
 * @property {string} [q] - Search text for original and short url
 */
/**
 * @typedef updateShortLinkById
 * @property {string} id - Short link document identifier
 * @property {SharePlatformModel.ShortLinkReq} body
 */
declare class SharePlatformApplicationValidator {
}
declare namespace SharePlatformApplicationValidator {
    export { createShortLink, getShortLinkByHash, getShortLinkClickStats, getShortLinks, updateShortLinkById };
}
/** @returns {createShortLink} */
declare function createShortLink(): createShortLink;
type createShortLink = {
    body: SharePlatformModel.ShortLinkReq;
};
/** @returns {getShortLinkByHash} */
declare function getShortLinkByHash(): getShortLinkByHash;
type getShortLinkByHash = {
    /**
     * - Hash of short url
     */
    hash: string;
};
/** @returns {getShortLinkClickStats} */
declare function getShortLinkClickStats(): getShortLinkClickStats;
type getShortLinkClickStats = {
    /**
     * - Short link ID for which click statistics are to
     * be retrieved.
     */
    surlId: string;
};
/** @returns {getShortLinks} */
declare function getShortLinks(): getShortLinks;
type getShortLinks = {
    /**
     * - Current page number
     */
    pageNo?: number;
    /**
     * - Current page size
     */
    pageSize?: number;
    /**
     * - Short link creator
     */
    createdBy?: string;
    /**
     * - Short link active status
     */
    active?: string;
    /**
     * - Search text for original and short url
     */
    q?: string;
};
/** @returns {updateShortLinkById} */
declare function updateShortLinkById(): updateShortLinkById;
type updateShortLinkById = {
    /**
     * - Short link document identifier
     */
    id: string;
    body: SharePlatformModel.ShortLinkReq;
};
import SharePlatformModel = require("./SharePlatformModel");
