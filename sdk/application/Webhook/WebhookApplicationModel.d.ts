export = WebhookApplicationModel;
/**
 * @typedef ClickEventBatch
 * @property {string} [event_name] - Name of click event.
 */
/**
 * @typedef ClickEventRequest
 * @property {ClickEventBatch[]} [batch] - List of click events captured.
 */
/**
 * @typedef ClickEventResponse
 * @property {number} [success_count] - Count of valid events.
 * @property {number} [failed_count] - Count of events failed in schema validation.
 * @property {ClickEventBatch[]} [failed_events] - List of failed events with error.
 */
declare class WebhookApplicationModel {
}
declare namespace WebhookApplicationModel {
    export { ClickEventBatch, ClickEventRequest, ClickEventResponse };
}
/** @returns {ClickEventBatch} */
declare function ClickEventBatch(): ClickEventBatch;
type ClickEventBatch = {
    /**
     * - Name of click event.
     */
    event_name?: string;
};
/** @returns {ClickEventRequest} */
declare function ClickEventRequest(): ClickEventRequest;
type ClickEventRequest = {
    /**
     * - List of click events captured.
     */
    batch?: ClickEventBatch[];
};
/** @returns {ClickEventResponse} */
declare function ClickEventResponse(): ClickEventResponse;
type ClickEventResponse = {
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
