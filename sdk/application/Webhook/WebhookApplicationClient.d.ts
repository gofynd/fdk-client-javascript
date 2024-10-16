export = Webhook;
declare class Webhook {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        saveClickEvent: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {WebhookApplicationValidator.SaveClickEventParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<WebhookApplicationModel.ClickEventDetails>} - Success response
     * @name saveClickEvent
     * @summary: Capture and save click events from various sales channels
     * @description: Send click events from various sales channels to enable insightful data collection and analysis. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/webhook/saveClickEvent/).
     */
    saveClickEvent({ body, requestHeaders }?: WebhookApplicationValidator.SaveClickEventParam, { responseHeaders }?: object): Promise<WebhookApplicationModel.ClickEventDetails>;
}
import WebhookApplicationValidator = require("./WebhookApplicationValidator");
import WebhookApplicationModel = require("./WebhookApplicationModel");
