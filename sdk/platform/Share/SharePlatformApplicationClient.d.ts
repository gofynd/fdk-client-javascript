export = Share;
declare class Share {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {SharePlatformApplicationValidator.CreateShortLinkParam} arg - Arg object
     * @returns {Promise<SharePlatformModel.ShortLinkRes>} - Success response
     * @name createShortLink
     * @summary: Create short link
     * @description: Create short link - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/createShortLink/).
     */
    createShortLink({ body }?: SharePlatformApplicationValidator.CreateShortLinkParam): Promise<SharePlatformModel.ShortLinkRes>;
    /**
     * @param {SharePlatformApplicationValidator.GetShortLinkByHashParam} arg - Arg object
     * @returns {Promise<SharePlatformModel.ShortLinkRes>} - Success response
     * @name getShortLinkByHash
     * @summary: Get short link by hash
     * @description: Get short link by hash - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/getShortLinkByHash/).
     */
    getShortLinkByHash({ hash }?: SharePlatformApplicationValidator.GetShortLinkByHashParam): Promise<SharePlatformModel.ShortLinkRes>;
    /**
     * @param {SharePlatformApplicationValidator.GetShortLinkClickStatsParam} arg
     *   - Arg object
     *
     * @returns {Promise<SharePlatformModel.ClickStatsResponse>} - Success response
     * @name getShortLinkClickStats
     * @summary: Get click statistics for a short link
     * @description: Retrieve click statistics for a given short link ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/getShortLinkClickStats/).
     */
    getShortLinkClickStats({ surlId }?: SharePlatformApplicationValidator.GetShortLinkClickStatsParam): Promise<SharePlatformModel.ClickStatsResponse>;
    /**
     * @param {SharePlatformApplicationValidator.GetShortLinksParam} arg - Arg object
     * @returns {Promise<SharePlatformModel.ShortLinkList>} - Success response
     * @name getShortLinks
     * @summary: Get short links
     * @description: Get short links - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/getShortLinks/).
     */
    getShortLinks({ pageNo, pageSize, createdBy, active, q }?: SharePlatformApplicationValidator.GetShortLinksParam): Promise<SharePlatformModel.ShortLinkList>;
    /**
     * @param {SharePlatformApplicationValidator.UpdateShortLinkByIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<SharePlatformModel.ShortLinkRes>} - Success response
     * @name updateShortLinkById
     * @summary: Update short link by id
     * @description: Update short link by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/updateShortLinkById/).
     */
    updateShortLinkById({ id, body }?: SharePlatformApplicationValidator.UpdateShortLinkByIdParam): Promise<SharePlatformModel.ShortLinkRes>;
}
import SharePlatformApplicationValidator = require("./SharePlatformApplicationValidator");
import SharePlatformModel = require("./SharePlatformModel");
