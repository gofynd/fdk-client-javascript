export = Share;
declare class Share {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {SharePlatformApplicationValidator.CreateShortLinkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SharePlatformModel.ShortLinkRes>} - Success response
     * @name createShortLink
     * @summary: Create short link.
     * @description: Generate a shortened URL link for sharing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/createShortLink/).
     */
    createShortLink({ body, requestHeaders }?: SharePlatformApplicationValidator.CreateShortLinkParam, { responseHeaders }?: object): Promise<SharePlatformModel.ShortLinkRes>;
    /**
     * @param {SharePlatformApplicationValidator.GetShortLinkByHashParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SharePlatformModel.ShortLinkRes>} - Success response
     * @name getShortLinkByHash
     * @summary: Get short link by hash.
     * @description: Retrieve a specific short link by its unique hash. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/getShortLinkByHash/).
     */
    getShortLinkByHash({ hash, requestHeaders }?: SharePlatformApplicationValidator.GetShortLinkByHashParam, { responseHeaders }?: object): Promise<SharePlatformModel.ShortLinkRes>;
    /**
     * @param {SharePlatformApplicationValidator.GetShortLinkClickStatsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SharePlatformModel.ClickStatsResponse>} - Success response
     * @name getShortLinkClickStats
     * @summary: Get short link click statistics.
     * @description: Retrieve statistics and analytics for clicks on a short link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/getShortLinkClickStats/).
     */
    getShortLinkClickStats({ surlId, requestHeaders }?: SharePlatformApplicationValidator.GetShortLinkClickStatsParam, { responseHeaders }?: object): Promise<SharePlatformModel.ClickStatsResponse>;
    /**
     * @param {SharePlatformApplicationValidator.GetShortLinksParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SharePlatformModel.ShortLinkList>} - Success response
     * @name getShortLinks
     * @summary: Get short links.
     * @description: Retrieve a list of all generated short links. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/getShortLinks/).
     */
    getShortLinks({ pageNo, pageSize, createdBy, active, shortUrl, originalUrl, title, requestHeaders, }?: SharePlatformApplicationValidator.GetShortLinksParam, { responseHeaders }?: object): Promise<SharePlatformModel.ShortLinkList>;
    /**
     * @param {SharePlatformApplicationValidator.UpdateShortLinkByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SharePlatformModel.ShortLinkRes>} - Success response
     * @name updateShortLinkById
     * @summary: Update short link by ID.
     * @description: Update details of a specific short link by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/updateShortLinkById/).
     */
    updateShortLinkById({ id, body, requestHeaders }?: SharePlatformApplicationValidator.UpdateShortLinkByIdParam, { responseHeaders }?: object): Promise<SharePlatformModel.ShortLinkRes>;
}
import SharePlatformApplicationValidator = require("./SharePlatformApplicationValidator");
import SharePlatformModel = require("./SharePlatformModel");
