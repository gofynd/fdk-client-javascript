module.exports = {
  PartnerConfig: require("./PartnerConfig"),
  PartnerClient: require("./PartnerClient"),
  PartnerModel: {
    CatalogPartnerModel: require("./Catalog/CatalogPartnerModel"),

    FileStoragePartnerModel: require("./FileStorage/FileStoragePartnerModel"),

    LeadPartnerModel: require("./Lead/LeadPartnerModel"),

    LogisticsPartnerModel: require("./Logistics/LogisticsPartnerModel"),

    PaymentPartnerModel: require("./Payment/PaymentPartnerModel"),

    ThemePartnerModel: require("./Theme/ThemePartnerModel"),

    WebhookPartnerModel: require("./Webhook/WebhookPartnerModel"),
  },
};
