module.exports = {
  PublicConfig: require("./PublicConfig"),
  PublicClient: require("./PublicClient"),
  PublicModel: {
    ConfigurationPublicModel: require("./Configuration/ConfigurationPublicModel"),

    InventoryPublicModel: require("./Inventory/InventoryPublicModel"),

    WebhookPublicModel: require("./Webhook/WebhookPublicModel"),
  },
};
