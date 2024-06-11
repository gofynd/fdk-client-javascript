export = WebhookApplicationValidator;
/**
 * @typedef SaveClickEventParam
 * @property {WebhookApplicationModel.ClickEventRequest} body
 */
declare class WebhookApplicationValidator {
    /** @returns {SaveClickEventParam} */
    static saveClickEvent(): SaveClickEventParam;
}
declare namespace WebhookApplicationValidator {
    export { SaveClickEventParam };
}
type SaveClickEventParam = {
    body: WebhookApplicationModel.ClickEventRequest;
};
import WebhookApplicationModel = require("./WebhookApplicationModel");
