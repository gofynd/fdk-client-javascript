export = Share;
declare class Share {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {SharePlatformApplicationValidator.createShortLink} arg - Arg object
     * @returns {Promise<SharePlatformModel.ShortLinkRes>} - Success response
     * @name createShortLink
     * @summary: Create short link
     * @description: Create short link
     */
    createShortLink({ body }?: SharePlatformApplicationValidator.createShortLink): Promise<SharePlatformModel.ShortLinkRes>;
    /**
     * @param {SharePlatformApplicationValidator.getShortLinkByHash} arg - Arg object
     * @returns {Promise<SharePlatformModel.ShortLinkRes>} - Success response
     * @name getShortLinkByHash
     * @summary: Get short link by hash
     * @description: Get short link by hash
     */
    getShortLinkByHash({ hash }?: SharePlatformApplicationValidator.getShortLinkByHash): Promise<SharePlatformModel.ShortLinkRes>;
    /**
     * @param {SharePlatformApplicationValidator.getShortLinkClickStats} arg - Arg object
     * @returns {Promise<SharePlatformModel.ClickStatsResponse>} - Success response
     * @name getShortLinkClickStats
     * @summary: Get click statistics for a short link
     * @description: Retrieve click statistics for a given short link ID.
     */
    getShortLinkClickStats({ surlId }?: SharePlatformApplicationValidator.getShortLinkClickStats): Promise<SharePlatformModel.ClickStatsResponse>;
    /**
     * @param {SharePlatformApplicationValidator.getShortLinks} arg - Arg object
     * @returns {Promise<SharePlatformModel.ShortLinkList>} - Success response
     * @name getShortLinks
     * @summary: Get short links
     * @description: Get short links
     */
    getShortLinks({ pageNo, pageSize, createdBy, active, q }?: SharePlatformApplicationValidator.getShortLinks): Promise<SharePlatformModel.ShortLinkList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company Id
     * @param {string} arg.applicationId - Application Id
     * @param {number} [arg.pageSize] - Current page size
     * @param {string} [arg.createdBy] - Short link creator
     * @param {string} [arg.active] - Short link active status
     * @param {string} [arg.q] - Search text for original and short url
     * @returns {Paginator<SharePlatformModel.ShortLinkList>}
     * @summary: Get short links
     * @description: Get short links
     */
    getShortLinksPaginator({ companyId, applicationId, pageSize, createdBy, active, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        createdBy?: string;
        active?: string;
        q?: string;
    }): Paginator<SharePlatformModel.ShortLinkList>;
    /**
     * @param {SharePlatformApplicationValidator.updateShortLinkById} arg - Arg object
     * @returns {Promise<SharePlatformModel.ShortLinkRes>} - Success response
     * @name updateShortLinkById
     * @summary: Update short link by id
     * @description: Update short link by id
     */
    updateShortLinkById({ id, body }?: SharePlatformApplicationValidator.updateShortLinkById): Promise<SharePlatformModel.ShortLinkRes>;
}
import SharePlatformApplicationValidator = require("./SharePlatformApplicationValidator");
import SharePlatformModel = require("./SharePlatformModel");
import Paginator = require("../../common/Paginator");
