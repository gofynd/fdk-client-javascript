export = Webhook;
declare class Webhook {
    constructor(config: any);
    config: any;
    /**
     * @param {WebhookPlatformValidator.FetchAllEventConfigurationsParam} arg - Arg object
     * @returns {Promise<WebhookPlatformModel.EventConfigResponse>} - Success response
     * @name fetchAllEventConfigurations
     * @summary:
     * @description: Get All Webhook Events
     */
    fetchAllEventConfigurations({}?: any): Promise<WebhookPlatformModel.EventConfigResponse>;
    /**
     * @param {WebhookPlatformValidator.GetSubscriberByIdParam} arg - Arg object
     * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
     * @name getSubscriberById
     * @summary: Get Subscriber By Subscriber ID
     * @description: Get Subscriber By Subscriber ID
     */
    getSubscriberById({ subscriberId }?: WebhookPlatformValidator.GetSubscriberByIdParam): Promise<WebhookPlatformModel.SubscriberResponse>;
    /**
     * @param {WebhookPlatformValidator.GetSubscribersByCompanyParam} arg - Arg object
     * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
     * @name getSubscribersByCompany
     * @summary: Get Subscribers By Company ID
     * @description: Get Subscribers By CompanyId
     */
    getSubscribersByCompany({ pageNo, pageSize, extensionId }?: WebhookPlatformValidator.GetSubscribersByCompanyParam): Promise<WebhookPlatformModel.SubscriberResponse>;
    /**
     * @param {WebhookPlatformValidator.GetSubscribersByExtensionIdParam} arg - Arg object
     * @returns {Promise<WebhookPlatformModel.SubscriberConfigList>} - Success response
     * @name getSubscribersByExtensionId
     * @summary: Get Subscribers By Extension ID
     * @description: Get Subscribers By ExtensionID
     */
    getSubscribersByExtensionId({ extensionId, pageNo, pageSize }?: WebhookPlatformValidator.GetSubscribersByExtensionIdParam): Promise<WebhookPlatformModel.SubscriberConfigList>;
    /**
     * @param {WebhookPlatformValidator.RegisterSubscriberToEventParam} arg - Arg object
     * @returns {Promise<WebhookPlatformModel.SubscriberConfig>} - Success response
     * @name registerSubscriberToEvent
     * @summary: Register Subscriber
     * @description: Register Subscriber
     */
    registerSubscriberToEvent({ body }?: WebhookPlatformValidator.RegisterSubscriberToEventParam): Promise<WebhookPlatformModel.SubscriberConfig>;
    /**
     * @param {WebhookPlatformValidator.UpdateSubscriberConfigParam} arg - Arg object
     * @returns {Promise<WebhookPlatformModel.SubscriberConfig>} - Success response
     * @name updateSubscriberConfig
     * @summary: Update Subscriber
     * @description: Update Subscriber
     */
    updateSubscriberConfig({ body }?: WebhookPlatformValidator.UpdateSubscriberConfigParam): Promise<WebhookPlatformModel.SubscriberConfig>;
}
import WebhookPlatformModel = require("./WebhookPlatformModel");
import WebhookPlatformValidator = require("./WebhookPlatformValidator");
