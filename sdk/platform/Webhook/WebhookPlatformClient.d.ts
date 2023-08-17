export = Webhook;
declare class Webhook {
    constructor(config: any);
    config: any;
    /**
     * @param {WebhookPlatformValidator.FetchAllEventConfigurationsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.EventConfigResponse>} - Success response
     * @name fetchAllEventConfigurations
     * @summary:
     * @description: Get All Webhook Events - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/fetchAllEventConfigurations/).
     */
    fetchAllEventConfigurations({ headers }?: any): Promise<WebhookPlatformModel.EventConfigResponse>;
    /**
     * @param {WebhookPlatformValidator.GetSubscriberByIdParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
     * @name getSubscriberById
     * @summary: Get Subscriber By Subscriber ID
     * @description: Get Subscriber By Subscriber ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscriberById/).
     */
    getSubscriberById({ subscriberId }?: WebhookPlatformValidator.GetSubscriberByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<WebhookPlatformModel.SubscriberResponse>;
    /**
     * @param {WebhookPlatformValidator.GetSubscribersByCompanyParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
     * @name getSubscribersByCompany
     * @summary: Get Subscribers By Company ID
     * @description: Get Subscribers By CompanyId - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscribersByCompany/).
     */
    getSubscribersByCompany({ pageNo, pageSize, extensionId }?: WebhookPlatformValidator.GetSubscribersByCompanyParam, { headers }?: import("../PlatformAPIClient").Options): Promise<WebhookPlatformModel.SubscriberResponse>;
    /**
     * @param {WebhookPlatformValidator.GetSubscribersByExtensionIdParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfigList>} - Success response
     * @name getSubscribersByExtensionId
     * @summary: Get Subscribers By Extension ID
     * @description: Get Subscribers By ExtensionID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscribersByExtensionId/).
     */
    getSubscribersByExtensionId({ extensionId, pageNo, pageSize }?: WebhookPlatformValidator.GetSubscribersByExtensionIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<WebhookPlatformModel.SubscriberConfigList>;
    /**
     * @param {WebhookPlatformValidator.RegisterSubscriberToEventParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfig>} - Success response
     * @name registerSubscriberToEvent
     * @summary: Register Subscriber
     * @description: Register Subscriber - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/registerSubscriberToEvent/).
     */
    registerSubscriberToEvent({ body }?: WebhookPlatformValidator.RegisterSubscriberToEventParam, { headers }?: import("../PlatformAPIClient").Options): Promise<WebhookPlatformModel.SubscriberConfig>;
    /**
     * @param {WebhookPlatformValidator.UpdateSubscriberConfigParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfig>} - Success response
     * @name updateSubscriberConfig
     * @summary: Update Subscriber
     * @description: Update Subscriber - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/updateSubscriberConfig/).
     */
    updateSubscriberConfig({ body }?: WebhookPlatformValidator.UpdateSubscriberConfigParam, { headers }?: import("../PlatformAPIClient").Options): Promise<WebhookPlatformModel.SubscriberConfig>;
}
import WebhookPlatformModel = require("./WebhookPlatformModel");
import WebhookPlatformValidator = require("./WebhookPlatformValidator");
