export = PublicClient;
declare class PublicClient {
    constructor(config: any);
    config: any;
    configuration: Configuration;
    webhook: Webhook;
    inventory: Inventory;
    setExtraHeaders(header: any): void;
}
import Configuration = require("./client/ConfigurationPublicClient");
import Webhook = require("./client/WebhookPublicClient");
import Inventory = require("./client/InventoryPublicClient");
