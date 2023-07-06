export = WebhookPublicValidator;
/** @typedef FetchAllWebhookEventsParam */
/**
 * @typedef QueryWebhookEventDetailsParam
 * @property {WebhookPublicModel.EventConfigBase[]} body
 */
declare class WebhookPublicValidator {
    /** @returns {FetchAllWebhookEventsParam} */
    static fetchAllWebhookEvents(): any;
    /** @returns {QueryWebhookEventDetailsParam} */
    static queryWebhookEventDetails(): QueryWebhookEventDetailsParam;
}
declare namespace WebhookPublicValidator {
    export { FetchAllWebhookEventsParam, QueryWebhookEventDetailsParam };
}
type QueryWebhookEventDetailsParam = {
    body: WebhookPublicModel.EventConfigBase[];
};
type FetchAllWebhookEventsParam = any;
import WebhookPublicModel = require("./WebhookPublicModel");
