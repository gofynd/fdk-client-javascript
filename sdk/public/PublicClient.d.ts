export = PublicClient;
declare class PublicClient {
    constructor(config: any);
    config: any;
    configuration: Configuration;
    webhook: Webhook;
    setExtraHeaders(header: any): void;
}
import Configuration = require("./Configuration/ConfigurationPublicClient");
import Webhook = require("./Webhook/WebhookPublicClient");
