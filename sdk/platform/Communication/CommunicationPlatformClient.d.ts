export = Communication;
declare class Communication {
    constructor(config: any);
    config: any;
    /**
     * @param {CommunicationPlatformValidator.GetSystemNotificationsParam} arg
     *   - Arg object
     *
     * @returns {Promise<CommunicationPlatformModel.SystemNotifications>} -
     *   Success response
     * @name getSystemNotifications
     * @summary: Get system notifications
     * @description: Get system notifications - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSystemNotifications/).
     */
    getSystemNotifications({ pageNo, pageSize }?: CommunicationPlatformValidator.GetSystemNotificationsParam): Promise<CommunicationPlatformModel.SystemNotifications>;
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
import CommunicationPlatformValidator = require("./CommunicationPlatformValidator");
import CommunicationPlatformModel = require("./CommunicationPlatformModel");
import Paginator = require("../../common/Paginator");
