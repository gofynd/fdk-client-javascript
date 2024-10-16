export = WebhookApplicationModel;
/**
 * @typedef ClickEventBatch
 * @property {string} [event_name] - Name of click event.
 */
/**
 * @typedef ClickEventPayload
 * @property {ClickEventBatch[]} [batch] - List of click events captured.
 * @property {string} [sent_at]
 */
/**
 * @typedef ClickEventDetails
 * @property {number} [success_count] - Count of valid events.
 * @property {number} [failed_count] - Count of events failed in schema validation.
 * @property {ClickEventBatch[]} [failed_events] - List of failed events with error.
 */
declare class WebhookApplicationModel {
}
declare namespace WebhookApplicationModel {
    export { ClickEventBatch, ClickEventPayload, ClickEventDetails };
}
/** @returns {ClickEventBatch} */
declare function ClickEventBatch(): ClickEventBatch;
type ClickEventBatch = {
    /**
     * - Name of click event.
     */
    event_name?: string;
};
/** @returns {ClickEventPayload} */
declare function ClickEventPayload(): ClickEventPayload;
type ClickEventPayload = {
    /**
     * - List of click events captured.
     */
    batch?: ClickEventBatch[];
    sent_at?: string;
};
/** @returns {ClickEventDetails} */
declare function ClickEventDetails(): ClickEventDetails;
type ClickEventDetails = {
    /**
     * - Count of valid events.
     */
    success_count?: number;
    /**
     * - Count of events failed in schema validation.
     */
    failed_count?: number;
    /**
     * - List of failed events with error.
     */
    failed_events?: ClickEventBatch[];
};
