export = PublicClient;
declare class PublicClient {
    constructor(config: any);
    config: any;
    configuration: Configuration;
    inventory: Inventory;
    partner: Partner;
    webhook: Webhook;
    setExtraHeaders(header: any): void;
}
import Configuration = require("./Configuration/ConfigurationPublicClient");
import Inventory = require("./Inventory/InventoryPublicClient");
import Partner = require("./Partner/PartnerPublicClient");
import Webhook = require("./Webhook/WebhookPublicClient");
