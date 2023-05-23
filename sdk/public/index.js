module.exports = {
  PublicConfig: require("./PublicConfig"),
  PublicClient: require("./PublicClient"),
  PublicModel: {
    ConfigurationPublicModel: require("./Configuration/ConfigurationPublicModel"),

    WebhookPublicModel: require("./Webhook/WebhookPublicModel"),

    InventoryPublicModel: require("./Inventory/InventoryPublicModel"),
  },
};
