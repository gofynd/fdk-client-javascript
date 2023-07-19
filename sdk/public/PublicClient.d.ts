export = PublicClient;
declare class PublicClient {
    constructor(config: any);
    config: any;
    configuration: Configuration;
    inventory: Inventory;
    webhook: Webhook;
    setExtraHeaders(header: any): void;
}
import Configuration = require("./Configuration/ConfigurationPublicClient");
import Inventory = require("./Inventory/InventoryPublicClient");
import Webhook = require("./Webhook/WebhookPublicClient");
