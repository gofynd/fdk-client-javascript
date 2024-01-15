module.exports = {
  PartnerConfig: require("./PartnerConfig"),
  PartnerClient: require("./PartnerClient"),
  PartnerModel: {
    FileStoragePartnerModel: require("./FileStorage/FileStoragePartnerModel"),

    LeadPartnerModel: require("./Lead/LeadPartnerModel"),

    LogisticsPartnerModel: require("./Logistics/LogisticsPartnerModel"),

    ThemePartnerModel: require("./Theme/ThemePartnerModel"),

    WebhookPartnerModel: require("./Webhook/WebhookPartnerModel"),
  },
};
