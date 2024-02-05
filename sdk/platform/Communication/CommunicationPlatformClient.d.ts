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
     * @summary: Get system notifications
     * @description: Get system notifications - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSystemNotifications/).
     */
    getSystemNotifications({ pageNo, pageSize, requestHeaders }?: CommunicationPlatformValidator.GetSystemNotificationsParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SystemNotifications>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] -
     * @returns {Paginator<CommunicationPlatformModel.SystemNotifications>}
     * @summary: Get system notifications
     * @description: Get system notifications
     */
    getSystemNotificationsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator<CommunicationPlatformModel.SystemNotifications>;
}
import CommunicationPlatformValidator = require("sdk/output/javascript/code/sdk/platform/Communication/CommunicationPlatformValidator");
import CommunicationPlatformModel = require("sdk/output/javascript/code/sdk/platform/Communication/CommunicationPlatformModel");
import Paginator = require("sdk/output/javascript/code/sdk/common/Paginator");
