export = Webhook;
declare class Webhook {
    constructor(config: any);
    config: any;
    /**
     * @param {WebhookPlatformValidator.FetchAllEventConfigurationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.EventConfigResult>} - Success response
     * @name fetchAllEventConfigurations
     * @summary: List event configurations
     * @description: Retrieve all configurations for event handling. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/fetchAllEventConfigurations/).
     */
    fetchAllEventConfigurations({ requestHeaders }?: any, { responseHeaders }?: object): Promise<WebhookPlatformModel.EventConfigResult>;
    /**
     * @param {WebhookPlatformValidator.GetSubscriberByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberDetails>} - Success response
     * @name getSubscriberById
     * @summary: Get a subscriber
     * @description: Retrieve a subscriber's details by their unique identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/getSubscriberById/).
     */
    getSubscriberById({ subscriberId, requestHeaders }?: WebhookPlatformValidator.GetSubscriberByIdParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberDetails>;
    /**
     * @param {WebhookPlatformValidator.GetSubscribersByCompanyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfigList>} - Success response
     * @name getSubscribersByCompany
     * @summary: List subscribers by company
     * @description: Retrieve subscribers associated with a company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/getSubscribersByCompany/).
     */
    getSubscribersByCompany({ pageNo, pageSize, extensionId, requestHeaders }?: WebhookPlatformValidator.GetSubscribersByCompanyParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfigList>;
    /**
     * @param {WebhookPlatformValidator.GetSubscribersByExtensionIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfigList>} - Success response
     * @name getSubscribersByExtensionId
     * @summary: List subscribers by extension ID
     * @description: Retrieve subscribers associated with a specific extension. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/getSubscribersByExtensionId/).
     */
    getSubscribersByExtensionId({ extensionId, pageNo, pageSize, requestHeaders }?: WebhookPlatformValidator.GetSubscribersByExtensionIdParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfigList>;
    /**
     * @param {WebhookPlatformValidator.RegisterSubscriberToEventParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfigResult>} - Success response
     * @name registerSubscriberToEvent
     * @summary: Register subscriber to event
     * @description: Add a subscriber to receive events of a specific type. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/registerSubscriberToEvent/).
     */
    registerSubscriberToEvent({ body, requestHeaders }?: WebhookPlatformValidator.RegisterSubscriberToEventParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfigResult>;
    /**
     * @param {WebhookPlatformValidator.RegisterSubscriberToEventV2Param} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfigResult>} - Success response
     * @name registerSubscriberToEventV2
     * @summary: Register Subscriber.
     * @description: Register Subscriber.
     *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/registerSubscriberToEventV2/).
     */
    registerSubscriberToEventV2({ body, requestHeaders }?: WebhookPlatformValidator.RegisterSubscriberToEventV2Param, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfigResult>;
    /**
     * @param {WebhookPlatformValidator.UpdateSubscriberConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfigResult>} - Success response
     * @name updateSubscriberConfig
     * @summary: Update a subscriber config
     * @description: Modify and update subscriber configuration settings. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/updateSubscriberConfig/).
     */
    updateSubscriberConfig({ body, requestHeaders }?: WebhookPlatformValidator.UpdateSubscriberConfigParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfigResult>;
    /**
     * @param {WebhookPlatformValidator.UpdateSubscriberV2Param} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.SubscriberConfigResult>} - Success response
     * @name updateSubscriberV2
     * @summary: Update Subscriber.
     * @description: Update Subscriber.
     *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/updateSubscriberV2/).
     */
    updateSubscriberV2({ body, requestHeaders }?: WebhookPlatformValidator.UpdateSubscriberV2Param, { responseHeaders }?: object): Promise<WebhookPlatformModel.SubscriberConfigResult>;
    /**
     * @param {WebhookPlatformValidator.UpsertSubscriberEventParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<WebhookPlatformModel.UpsertSubscriberConfigResult>} -
     *   Success response
     * @name upsertSubscriberEvent
     * @summary: Register Subscriber.
     * @description: Register Subscriber.
     *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/upsertSubscriberEvent/).
     */
    upsertSubscriberEvent({ body, requestHeaders }?: WebhookPlatformValidator.UpsertSubscriberEventParam, { responseHeaders }?: object): Promise<WebhookPlatformModel.UpsertSubscriberConfigResult>;
}
import WebhookPlatformModel = require("./WebhookPlatformModel");
import WebhookPlatformValidator = require("./WebhookPlatformValidator");
