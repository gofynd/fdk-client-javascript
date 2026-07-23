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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ClickEventDetails>} - Success response
     * @name saveClickEvent
     * @summary: Capture and save click events from various sales channels
     * @description: Send click events from various sales channels to enable insightful data collection and analysis. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/webhook/saveClickEvent/).
     */
    saveClickEvent({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ClickEventDetails>;
}
