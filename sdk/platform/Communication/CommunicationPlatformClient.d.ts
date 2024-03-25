export = Communication;
declare class Communication {
    constructor(config: any);
    config: any;
    /**
     * @param {CommunicationPlatformValidator.GetSystemNotificationsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SystemNotifications>} -
     *   Success response
     * @name getSystemNotifications
     * @summary: Get system notifications.
     * @description: Retrieve system notifications related to communication. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSystemNotifications/).
     */
    getSystemNotifications({ pageNo, pageSize, sort, query, requestHeaders }?: CommunicationPlatformValidator.GetSystemNotificationsParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SystemNotifications>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Current request items count
     * @param {string} [arg.sort] - To sort based on created_at
     * @param {string} [arg.query] - To search based on plain text
     * @returns {Paginator<CommunicationPlatformModel.SystemNotifications>}
     * @summary: Get system notifications.
     * @description: Retrieve system notifications related to communication.
     */
    getSystemNotificationsPaginator({ pageSize, sort, query }?: {
        pageSize?: number;
        sort?: string;
        query?: string;
    }): Paginator<CommunicationPlatformModel.SystemNotifications>;
}
import CommunicationPlatformValidator = require("sdk/output/javascript/code/sdk/platform/Communication/CommunicationPlatformValidator");
import CommunicationPlatformModel = require("sdk/output/javascript/code/sdk/platform/Communication/CommunicationPlatformModel");
import Paginator = require("sdk/output/javascript/code/sdk/common/Paginator");
