export = WebhookPublicValidator;
/** @typedef FetchAllWebhookEventsParam */
/** @typedef NotifyDepricatedEventParam */
/**
 * @typedef QueryWebhookEventDetailsParam
 * @property {WebhookPublicModel.EventConfigBase[]} body
 */
/**
 * @typedef TestHandlerTransformationParam
 * @property {WebhookPublicModel.TransformEventPayload} body
 */
/**
 * @typedef ValidateSchemaParam
 * @property {WebhookPublicModel.ValidateSchemaPayload} body
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
    body: WebhookPublicModel.TransformEventPayload;
};
type ValidateSchemaParam = {
    body: WebhookPublicModel.ValidateSchemaPayload;
};
type FetchAllWebhookEventsParam = any;
type NotifyDepricatedEventParam = any;
import WebhookPublicModel = require("./WebhookPublicModel");
