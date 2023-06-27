export = Webhook;
declare class Webhook {
    constructor(config: any);
    config: any;
    /**
     * @param {WebhookPlatformValidator.fetchAllEventConfigurations} arg - Arg object
     * @returns {Promise<WebhookPlatformModel.EventConfigResponse>} - Success response
     * @name fetchAllEventConfigurations
     * @summary:
     * @description: Get All Webhook Events
     */
    fetchAllEventConfigurations({}?: any): Promise<WebhookPlatformModel.EventConfigResponse>;
    /**
     * @param {WebhookPlatformValidator.getSubscriberById} arg - Arg object
     * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
     * @name getSubscriberById
     * @summary: Get Subscriber By Subscriber ID
     * @description: Get Subscriber By Subscriber ID
     */
    getSubscriberById({ subscriberId }?: WebhookPlatformValidator.getSubscriberById): Promise<WebhookPlatformModel.SubscriberResponse>;
    /**
     * @param {WebhookPlatformValidator.getSubscribersByCompany} arg - Arg object
     * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
     * @name getSubscribersByCompany
     * @summary: Get Subscribers By Company ID
     * @description: Get Subscribers By CompanyId
     */
    getSubscribersByCompany({ pageNo, pageSize, extensionId }?: WebhookPlatformValidator.getSubscribersByCompany): Promise<WebhookPlatformModel.SubscriberResponse>;
    /**
     * @param {WebhookPlatformValidator.getSubscribersByExtensionId} arg - Arg object
     * @returns {Promise<WebhookPlatformModel.SubscriberConfigList>} - Success response
     * @name getSubscribersByExtensionId
     * @summary: Get Subscribers By Extension ID
     * @description: Get Subscribers By ExtensionID
     */
    getSubscribersByExtensionId({ extensionId, pageNo, pageSize }?: WebhookPlatformValidator.getSubscribersByExtensionId): Promise<WebhookPlatformModel.SubscriberConfigList>;
    /**
     * @param {WebhookPlatformValidator.registerSubscriberToEvent} arg - Arg object
     * @returns {Promise<WebhookPlatformModel.SubscriberConfig>} - Success response
     * @name registerSubscriberToEvent
     * @summary: Register Subscriber
     * @description: Register Subscriber
     */
    registerSubscriberToEvent({ body }?: WebhookPlatformValidator.registerSubscriberToEvent): Promise<WebhookPlatformModel.SubscriberConfig>;
    /**
     * @param {WebhookPlatformValidator.updateSubscriberConfig} arg - Arg object
     * @returns {Promise<WebhookPlatformModel.SubscriberConfig>} - Success response
     * @name updateSubscriberConfig
     * @summary: Update Subscriber
     * @description: Update Subscriber
     */
    updateSubscriberConfig({ body }?: WebhookPlatformValidator.updateSubscriberConfig): Promise<WebhookPlatformModel.SubscriberConfig>;
}
import WebhookPlatformModel = require("./WebhookPlatformModel");
import WebhookPlatformValidator = require("./WebhookPlatformValidator");
