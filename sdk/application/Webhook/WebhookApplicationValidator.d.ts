export = WebhookApplicationValidator;
/**
 * @typedef SaveClickEventParam
 * @property {WebhookApplicationModel.ClickEventPayload} body
 */
declare class WebhookApplicationValidator {
    /** @returns {SaveClickEventParam} */
    static saveClickEvent(): SaveClickEventParam;
}
declare namespace WebhookApplicationValidator {
    export { SaveClickEventParam };
}
type SaveClickEventParam = {
    body: WebhookApplicationModel.ClickEventPayload;
};
import WebhookApplicationModel = require("./WebhookApplicationModel");
