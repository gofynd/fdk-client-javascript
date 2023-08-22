export = Webhook;
declare class Webhook {
    constructor(config: any);
    config: any;
    /**
     * @param {WebhookPlatformValidator.FetchAllEventConfigurationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.EventConfigResponse>} - Success response
     * @name fetchAllEventConfigurations
     * @summary:
     * @description: Get All Webhook Events - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/fetchAllEventConfigurations/).
     */
    fetchAllEventConfigurations({ requestHeaders }?: any, { responseHeaders }?: object): Promise<WebhookPlatformModel.EventConfigResponse>;
    /**
     * @param {WebhookPlatformValidator.GetSubscriberByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
     * @name getSubscriberById
     * @summary: Get Subscriber By Subscriber ID
     * @description: Get Subscriber By Subscriber ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscriberById/).
     */
    getSubscriberById({ subscriberId, requestHeaders }?: WebhookPlatformValidator.GetSubscriberByIdParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberResponse>;
    /**
     * @param {WebhookPlatformValidator.GetSubscribersByCompanyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
     * @name getSubscribersByCompany
     * @summary: Get Subscribers By Company ID
     * @description: Get Subscribers By CompanyId - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscribersByCompany/).
     */
    getSubscribersByCompany({ pageNo, pageSize, extensionId, requestHeaders }?: WebhookPlatformValidator.GetSubscribersByCompanyParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberResponse>;
    /**
     * @param {WebhookPlatformValidator.GetSubscribersByExtensionIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfigList>} - Success response
     * @name getSubscribersByExtensionId
     * @summary: Get Subscribers By Extension ID
     * @description: Get Subscribers By ExtensionID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscribersByExtensionId/).
     */
    getSubscribersByExtensionId({ extensionId, pageNo, pageSize, requestHeaders }?: WebhookPlatformValidator.GetSubscribersByExtensionIdParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfigList>;
    /**
     * @param {WebhookPlatformValidator.RegisterSubscriberToEventParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfig>} - Success response
     * @name registerSubscriberToEvent
     * @summary: Register Subscriber
     * @description: Register Subscriber - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/registerSubscriberToEvent/).
     */
    registerSubscriberToEvent({ body, requestHeaders }?: WebhookPlatformValidator.RegisterSubscriberToEventParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfig>;
    /**
     * @param {WebhookPlatformValidator.UpdateSubscriberConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfig>} - Success response
     * @name updateSubscriberConfig
     * @summary: Update Subscriber
     * @description: Update Subscriber - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/updateSubscriberConfig/).
     */
    updateSubscriberConfig({ body, requestHeaders }?: WebhookPlatformValidator.UpdateSubscriberConfigParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfig>;
}
import WebhookPlatformModel = require("./WebhookPlatformModel");
import WebhookPlatformValidator = require("./WebhookPlatformValidator");
