export = WebhookPublicValidator;
/** @typedef FetchAllWebhookEventsParam */
/**
 * @typedef QueryWebhookEventDetailsParam
 * @property {WebhookPublicModel.EventConfigBase[]} body
 */
declare class WebhookPublicValidator {
    /** @returns {fetchAllWebhookEvents} */
    static fetchAllWebhookEvents(): fetchAllWebhookEvents;
    /** @returns {queryWebhookEventDetails} */
    static queryWebhookEventDetails(): queryWebhookEventDetails;
}
declare namespace WebhookPublicValidator {
    export { FetchAllWebhookEventsParam, QueryWebhookEventDetailsParam };
}
type FetchAllWebhookEventsParam = any;
type QueryWebhookEventDetailsParam = {
    body: WebhookPublicModel.EventConfigBase[];
};
import WebhookPublicModel = require("./WebhookPublicModel");
