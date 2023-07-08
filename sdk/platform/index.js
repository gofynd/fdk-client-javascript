module.exports = {
  PlatformConfig: require("./PlatformConfig"),
  PlatformClient: require("./PlatformClient"),
  PlatformModel: {
    CommonPlatformModel: require("./Common/CommonPlatformModel"),

    LeadPlatformModel: require("./Lead/LeadPlatformModel"),

    ThemePlatformModel: require("./Theme/ThemePlatformModel"),

    UserPlatformModel: require("./User/UserPlatformModel"),

    ContentPlatformModel: require("./Content/ContentPlatformModel"),

    BillingPlatformModel: require("./Billing/BillingPlatformModel"),

    CommunicationPlatformModel: require("./Communication/CommunicationPlatformModel"),

    PaymentPlatformModel: require("./Payment/PaymentPlatformModel"),

    CatalogPlatformModel: require("./Catalog/CatalogPlatformModel"),

    CompanyProfilePlatformModel: require("./CompanyProfile/CompanyProfilePlatformModel"),

    FileStoragePlatformModel: require("./FileStorage/FileStoragePlatformModel"),

    SharePlatformModel: require("./Share/SharePlatformModel"),

    ConfigurationPlatformModel: require("./Configuration/ConfigurationPlatformModel"),

    CartPlatformModel: require("./Cart/CartPlatformModel"),

    AnalyticsPlatformModel: require("./Analytics/AnalyticsPlatformModel"),

    DiscountPlatformModel: require("./Discount/DiscountPlatformModel"),

    PartnerPlatformModel: require("./Partner/PartnerPlatformModel"),

    WebhookPlatformModel: require("./Webhook/WebhookPlatformModel"),

    AuditTrailPlatformModel: require("./AuditTrail/AuditTrailPlatformModel"),
  },
};
