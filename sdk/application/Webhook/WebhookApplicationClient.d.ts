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
     * @returns {Promise<ClickEventResponse>} - Success response
     * @name saveClickEvent
     * @summary: Endpoint to capture click events from sales channels and persist them in database.
     * @description: Send click events from sales channels. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/webhook/saveClickEvent/).
     */
    saveClickEvent({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ClickEventResponse>;
}
