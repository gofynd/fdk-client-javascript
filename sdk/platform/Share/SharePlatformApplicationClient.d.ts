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
     * @summary: Create short link
     * @description: Create short link - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/createShortLink/).
     */
    createShortLink({ body, requestHeaders }?: SharePlatformApplicationValidator.CreateShortLinkParam, { responseHeaders }?: object): Promise<SharePlatformModel.ShortLinkRes>;
    /**
     * @param {SharePlatformApplicationValidator.GetShortLinkByHashParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SharePlatformModel.ShortLinkRes>} - Success response
     * @name getShortLinkByHash
     * @summary: Get short link by hash
     * @description: Get short link by hash - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/getShortLinkByHash/).
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
     * @summary: Get click statistics for a short link
     * @description: Retrieve click statistics for a given short link ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/getShortLinkClickStats/).
     */
    getShortLinkClickStats({ surlId, requestHeaders }?: SharePlatformApplicationValidator.GetShortLinkClickStatsParam, { responseHeaders }?: object): Promise<SharePlatformModel.ClickStatsResponse>;
    /**
     * @param {SharePlatformApplicationValidator.GetShortLinksParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SharePlatformModel.ShortLinkList>} - Success response
     * @name getShortLinks
     * @summary: Get short links
     * @description: Get short links - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/getShortLinks/).
     */
    getShortLinks({ pageNo, pageSize, createdBy, active, q, requestHeaders }?: SharePlatformApplicationValidator.GetShortLinksParam, { responseHeaders }?: object): Promise<SharePlatformModel.ShortLinkList>;
    /**
     * @param {SharePlatformApplicationValidator.UpdateShortLinkByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SharePlatformModel.ShortLinkRes>} - Success response
     * @name updateShortLinkById
     * @summary: Update short link by id
     * @description: Update short link by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/updateShortLinkById/).
     */
    updateShortLinkById({ id, body, requestHeaders }?: SharePlatformApplicationValidator.UpdateShortLinkByIdParam, { responseHeaders }?: object): Promise<SharePlatformModel.ShortLinkRes>;
}
import SharePlatformApplicationValidator = require("./SharePlatformApplicationValidator");
import SharePlatformModel = require("./SharePlatformModel");
