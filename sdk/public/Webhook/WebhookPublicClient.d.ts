export = Webhook;
declare class Webhook {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        fetchAllWebhookEvents: string;
        notifyDepricatedEvent: string;
        queryWebhookEventDetails: string;
        testHandlerTransformation: string;
        validateSchema: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {WebhookPublicValidator.FetchAllWebhookEventsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<WebhookPublicModel.EventConfigResponse>} - Success response
     * @name fetchAllWebhookEvents
     * @summary: Get All Webhook Events
     * @description: Get All Webhook Events - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/webhook/fetchAllWebhookEvents/).
     */
    fetchAllWebhookEvents({ requestHeaders }?: any, { responseHeaders }?: object): Promise<WebhookPublicModel.EventConfigResponse>;
    /**
     * @param {WebhookPublicValidator.NotifyDepricatedEventParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<WebhookPublicModel.EventNotifier>} - Success response
     * @name notifyDepricatedEvent
     * @summary: Notifies all the events that are going to depricate
     * @description: Notifies all the events that are subscribed and are going to deprecate or new version is available for those events - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/webhook/notifyDepricatedEvent/).
     */
    notifyDepricatedEvent({ requestHeaders }?: any, { responseHeaders }?: object): Promise<WebhookPublicModel.EventNotifier>;
    /**
     * @param {WebhookPublicValidator.QueryWebhookEventDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<WebhookPublicModel.EventConfigResponse>} - Success response
     * @name queryWebhookEventDetails
     * @summary: Send webhook event name, type, version, category in request body to get complete details of event from server
     * @description: Get Webhook Event Details for provided events - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/webhook/queryWebhookEventDetails/).
     */
    queryWebhookEventDetails({ body, requestHeaders }?: WebhookPublicValidator.QueryWebhookEventDetailsParam, { responseHeaders }?: object): Promise<WebhookPublicModel.EventConfigResponse>;
    /**
     * @param {WebhookPublicValidator.TestHandlerTransformationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<WebhookPublicModel.TransformEventResponse>} - Success response
     * @name testHandlerTransformation
     * @summary: Test transformation of handler
     * @description: Test transformation of handler - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/webhook/testHandlerTransformation/).
     */
    testHandlerTransformation({ body, requestHeaders }?: WebhookPublicValidator.TestHandlerTransformationParam, { responseHeaders }?: object): Promise<WebhookPublicModel.TransformEventResponse>;
    /**
     * @param {WebhookPublicValidator.ValidateSchemaParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<WebhookPublicModel.ValidateSchemaResponse>} - Success response
     * @name validateSchema
     * @summary: Validate Schema for an event
     * @description: Validate Schema for an event - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/webhook/validateSchema/).
     */
    validateSchema({ body, requestHeaders }?: WebhookPublicValidator.ValidateSchemaParam, { responseHeaders }?: object): Promise<WebhookPublicModel.ValidateSchemaResponse>;
}
import WebhookPublicModel = require("sdk/output/javascript/code/sdk/public/Webhook/WebhookPublicModel");
import WebhookPublicValidator = require("sdk/output/javascript/code/sdk/public/Webhook/WebhookPublicValidator");
