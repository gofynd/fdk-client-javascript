export = SharePlatformApplicationValidator;
/**
 * @typedef CreateShortLinkParam
 * @property {SharePlatformModel.ShortLinkReq} body
 */
/**
 * @typedef GetShortLinkByHashParam
 * @property {string} hash
 */
/**
 * @typedef GetShortLinksParam
 * @property {number} [pageNo] - Current page number
 * @property {number} [pageSize] - Number of items displayed per page
 * @property {string} [createdBy] - Short link creator
 * @property {string} [active] - Short link active status
 * @property {string} [shortUrl] - Search for short url
 * @property {string} [originalUrl] - Search for original url
 * @property {string} [title] - Search text for title
 */
/**
 * @typedef UpdateShortLinkByIdParam
 * @property {string} id - Document Id
 * @property {SharePlatformModel.ShortLinkReq} body
 */
declare class SharePlatformApplicationValidator {
    /** @returns {CreateShortLinkParam} */
    static createShortLink(): CreateShortLinkParam;
    /** @returns {GetShortLinkByHashParam} */
    static getShortLinkByHash(): GetShortLinkByHashParam;
    /** @returns {GetShortLinksParam} */
    static getShortLinks(): GetShortLinksParam;
    /** @returns {UpdateShortLinkByIdParam} */
    static updateShortLinkById(): UpdateShortLinkByIdParam;
}
declare namespace SharePlatformApplicationValidator {
    export { CreateShortLinkParam, GetShortLinkByHashParam, GetShortLinksParam, UpdateShortLinkByIdParam };
}
type CreateShortLinkParam = {
    body: SharePlatformModel.ShortLinkReq;
};
type GetShortLinkByHashParam = {
    hash: string;
};
type GetShortLinksParam = {
    /**
     * - Current page number
     */
    pageNo?: number;
    /**
     * - Number of items displayed per page
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
     * - Search for short url
     */
    shortUrl?: string;
    /**
     * - Search for original url
     */
    originalUrl?: string;
    /**
     * - Search text for title
     */
    title?: string;
};
type UpdateShortLinkByIdParam = {
    /**
     * - Document Id
     */
    id: string;
    body: SharePlatformModel.ShortLinkReq;
};
import SharePlatformModel = require("sdk/output/javascript/code/sdk/platform/Share/SharePlatformModel");
