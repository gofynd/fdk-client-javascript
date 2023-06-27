export = Communication;
declare class Communication {
    constructor(config: any);
    config: any;
    /**
     * @param {CommunicationPlatformValidator.getSystemNotifications} arg - Arg object
     * @returns {Promise<CommunicationPlatformModel.SystemNotifications>} -
     *   Success response
     * @name getSystemNotifications
     * @summary: Get system notifications
     * @description: Get system notifications
     */
    getSystemNotifications({ pageNo, pageSize }?: CommunicationPlatformValidator.getSystemNotifications): Promise<CommunicationPlatformModel.SystemNotifications>;
}
import CommunicationPlatformValidator = require("./CommunicationPlatformValidator");
import CommunicationPlatformModel = require("./CommunicationPlatformModel");
