export = WebhookApplicationModel;
/**
 * @typedef ClickEventBatch
 * @property {string} [event_name]
 */
/**
 * @typedef ClickEventRequest
 * @property {ClickEventBatch[]} [batch]
 */
/**
 * @typedef ClickEventResponse
 * @property {number} [success_count]
 * @property {number} [failed_count]
 * @property {ClickEventBatch[]} [failed_events]
 */
declare class WebhookApplicationModel {
}
declare namespace WebhookApplicationModel {
    export { ClickEventBatch, ClickEventRequest, ClickEventResponse };
}
/** @returns {ClickEventBatch} */
declare function ClickEventBatch(): ClickEventBatch;
type ClickEventBatch = {
    event_name?: string;
};
/** @returns {ClickEventRequest} */
declare function ClickEventRequest(): ClickEventRequest;
type ClickEventRequest = {
    batch?: ClickEventBatch[];
};
/** @returns {ClickEventResponse} */
declare function ClickEventResponse(): ClickEventResponse;
type ClickEventResponse = {
    success_count?: number;
    failed_count?: number;
    failed_events?: ClickEventBatch[];
};
