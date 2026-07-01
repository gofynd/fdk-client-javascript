module.exports = {
  PublicConfig: require("./PublicConfig"),
  PublicClient: require("./PublicClient"),
  PublicModel: {
    CatalogPublicModel: require("./Catalog/CatalogPublicModel"),

    ConfigurationPublicModel: require("./Configuration/ConfigurationPublicModel"),

    ContentPublicModel: require("./Content/ContentPublicModel"),

    PartnerPublicModel: require("./Partner/PartnerPublicModel"),

    WebhookPublicModel: require("./Webhook/WebhookPublicModel"),
  },
};
