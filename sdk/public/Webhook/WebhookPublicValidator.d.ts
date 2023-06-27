export = WebhookPublicValidator;
/** @typedef fetchAllWebhookEvents */
/**
 * @typedef queryWebhookEventDetails
 * @property {WebhookPublicModel.EventConfigBase[]} body
 */
declare class WebhookPublicValidator {
}
declare namespace WebhookPublicValidator {
    export { fetchAllWebhookEvents, queryWebhookEventDetails };
}
/** @returns {fetchAllWebhookEvents} */
declare function fetchAllWebhookEvents(): any;
type fetchAllWebhookEvents = any;
/** @returns {queryWebhookEventDetails} */
declare function queryWebhookEventDetails(): queryWebhookEventDetails;
type queryWebhookEventDetails = {
    body: WebhookPublicModel.EventConfigBase[];
};
import WebhookPublicModel = require("./WebhookPublicModel");
