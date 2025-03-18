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
     * @returns {Promise<WebhookPublicModel.EventDetails>} - Success response
     * @name fetchAllWebhookEvents
     * @summary: Fetch all webhook events.
     * @description: Retrieve a list of all webhook events in the public server setup. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/webhook/fetchAllWebhookEvents/).
     */
    fetchAllWebhookEvents({ requestHeaders }?: any, { responseHeaders }?: object): Promise<WebhookPublicModel.EventDetails>;
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
     * @returns {Promise<WebhookPublicModel.EventDetails>} - Success response
     * @name queryWebhookEventDetails
     * @summary: Query webhook event details.
     * @description: Query and obtain detailed information about webhook events in the public server configurations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/webhook/queryWebhookEventDetails/).
     */
    queryWebhookEventDetails({ body, requestHeaders }?: WebhookPublicValidator.QueryWebhookEventDetailsParam, { responseHeaders }?: object): Promise<WebhookPublicModel.EventDetails>;
    /**
     * @param {WebhookPublicValidator.TestHandlerTransformationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<WebhookPublicModel.TransformEventResult>} - Success response
     * @name testHandlerTransformation
     * @summary: Test transformation of handler
     * @description: Test transformation of handler - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/webhook/testHandlerTransformation/).
     */
    testHandlerTransformation({ body, requestHeaders }?: WebhookPublicValidator.TestHandlerTransformationParam, { responseHeaders }?: object): Promise<WebhookPublicModel.TransformEventResult>;
    /**
     * @param {WebhookPublicValidator.ValidateSchemaParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<WebhookPublicModel.ValidateSchemaResult>} - Success response
     * @name validateSchema
     * @summary: Validate Schema for an event
     * @description: Validate Schema for an event - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/webhook/validateSchema/).
     */
    validateSchema({ body, requestHeaders }?: WebhookPublicValidator.ValidateSchemaParam, { responseHeaders }?: object): Promise<WebhookPublicModel.ValidateSchemaResult>;
}
import WebhookPublicModel = require("./WebhookPublicModel");
import WebhookPublicValidator = require("./WebhookPublicValidator");
