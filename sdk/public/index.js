module.exports = {
  PublicConfig: require("./PublicConfig"),
  PublicClient: require("./PublicClient"),
  PublicModel: {
    ConfigurationPublicModel: require("./Configuration/ConfigurationPublicModel"),

    ContentPublicModel: require("./Content/ContentPublicModel"),

    PartnerPublicModel: require("./Partner/PartnerPublicModel"),

    WebhookPublicModel: require("./Webhook/WebhookPublicModel"),
  },
};
