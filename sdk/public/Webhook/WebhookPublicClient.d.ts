export = Webhook;
declare class Webhook {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        fetchAllWebhookEvents: string;
        queryWebhookEventDetails: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {WebhookPublicValidator.FetchAllWebhookEventsParam} arg - Arg object.
     * @returns {Promise<WebhookPublicModel.EventConfigResponse>} - Success response
     * @name fetchAllWebhookEvents
     * @summary: Get All Webhook Events
     * @description: Get All Webhook Events
     */
    fetchAllWebhookEvents({}?: any): Promise<WebhookPublicModel.EventConfigResponse>;
    /**
     * @param {WebhookPublicValidator.QueryWebhookEventDetailsParam} arg - Arg object.
     * @returns {Promise<WebhookPublicModel.EventConfigResponse>} - Success response
     * @name queryWebhookEventDetails
     * @summary: Send webhook event name, type, version, category in request body to get complete details of event from server
     * @description: Get Webhook Event Details for provided events
     */
    queryWebhookEventDetails({ body }?: WebhookPublicValidator.QueryWebhookEventDetailsParam): Promise<WebhookPublicModel.EventConfigResponse>;
}
import WebhookPublicModel = require("./WebhookPublicModel");
import WebhookPublicValidator = require("./WebhookPublicValidator");
