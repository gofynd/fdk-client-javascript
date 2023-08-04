export = WebhookClient;
declare class WebhookClient {
    constructor(config: any);
    config: any;
    setExtraHeaders(header: any): void;
}
