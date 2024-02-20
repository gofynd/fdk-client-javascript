export = WebhookPublicValidator;
/** @typedef FetchAllWebhookEventsParam */
/** @typedef NotifyDepricatedEventParam */
/**
 * @typedef QueryWebhookEventDetailsParam
 * @property {WebhookPublicModel.EventConfigBase[]} body
 */
/**
 * @typedef TestHandlerTransformationParam
 * @property {WebhookPublicModel.TransformEventRequest} body
 */
/**
 * @typedef ValidateSchemaParam
 * @property {WebhookPublicModel.ValidateSchemaRequest} body
 */
declare class WebhookPublicValidator {
    /** @returns {FetchAllWebhookEventsParam} */
    static fetchAllWebhookEvents(): any;
    /** @returns {NotifyDepricatedEventParam} */
    static notifyDepricatedEvent(): any;
    /** @returns {QueryWebhookEventDetailsParam} */
    static queryWebhookEventDetails(): QueryWebhookEventDetailsParam;
    /** @returns {TestHandlerTransformationParam} */
    static testHandlerTransformation(): TestHandlerTransformationParam;
    /** @returns {ValidateSchemaParam} */
    static validateSchema(): ValidateSchemaParam;
}
declare namespace WebhookPublicValidator {
    export { FetchAllWebhookEventsParam, NotifyDepricatedEventParam, QueryWebhookEventDetailsParam, TestHandlerTransformationParam, ValidateSchemaParam };
}
type QueryWebhookEventDetailsParam = {
    body: WebhookPublicModel.EventConfigBase[];
};
type TestHandlerTransformationParam = {
    body: WebhookPublicModel.TransformEventRequest;
};
type ValidateSchemaParam = {
    body: WebhookPublicModel.ValidateSchemaRequest;
};
type FetchAllWebhookEventsParam = any;
type NotifyDepricatedEventParam = any;
import WebhookPublicModel = require("sdk/output/javascript/code/sdk/public/Webhook/WebhookPublicModel");
