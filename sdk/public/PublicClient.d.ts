export = PublicClient;
declare class PublicClient {
    constructor(config: any);
    config: any;
    configuration: Configuration;
    webhook: Webhook;
    inventory: Inventory;
    setExtraHeaders(header: any): void;
}
import Configuration = require("./Configuration/ConfigurationPublicClient");
import Webhook = require("./Webhook/WebhookPublicClient");
import Inventory = require("./Inventory/InventoryPublicClient");
