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
    /**
     * @param {CommunicationPlatformValidator.SenByCompanyCommunicationAsynchronouslyParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
     * @name senByCompanyCommunicationAsynchronously
     * @summary: Send communication asynchronously.
     * @description: Initiate and send communication with the option for asynchronous processing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/senByCompanyCommunicationAsynchronously/).
     */
    senByCompanyCommunicationAsynchronously({ xApplicationId, body, requestHeaders }?: CommunicationPlatformValidator.SenByCompanyCommunicationAsynchronouslyParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.EngineResponse>;
    /**
     * @param {CommunicationPlatformValidator.SendByCompanyCommunicationInstantlyParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SendInstantResponse>} -
     *   Success response
     * @name sendByCompanyCommunicationInstantly
     * @summary: Send communication synchronously.
     * @description: Initiate and send communication in real-time. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendByCompanyCommunicationInstantly/).
     */
    sendByCompanyCommunicationInstantly({ xApplicationId, body, requestHeaders }?: CommunicationPlatformValidator.SendByCompanyCommunicationInstantlyParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SendInstantResponse>;
    /**
     * @param {CommunicationPlatformValidator.SendByCompanyCommunicationSynchronouslyParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommunicationPlatformModel.SendInstantResponse>} -
     *   Success response
     * @name sendByCompanyCommunicationSynchronously
     * @summary: Send communication asynchronously.
     * @description: Initiate and send communication with the option for asynchronous processing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendByCompanyCommunicationSynchronously/).
     */
    sendByCompanyCommunicationSynchronously({ xApplicationId, body, requestHeaders }?: CommunicationPlatformValidator.SendByCompanyCommunicationSynchronouslyParam, { responseHeaders }?: object): Promise<CommunicationPlatformModel.SendInstantResponse>;
}
import CommunicationPlatformValidator = require("./CommunicationPlatformValidator");
import CommunicationPlatformModel = require("./CommunicationPlatformModel");
import Paginator = require("../../common/Paginator");
