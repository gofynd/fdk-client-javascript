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

    FileStoragePlatformModel: require("./FileStorage/FileStoragePlatformModel"),

    SharePlatformModel: require("./Share/SharePlatformModel"),

    InventoryPlatformModel: require("./Inventory/InventoryPlatformModel"),

    ConfigurationPlatformModel: require("./Configuration/ConfigurationPlatformModel"),

    CartPlatformModel: require("./Cart/CartPlatformModel"),

    RewardsPlatformModel: require("./Rewards/RewardsPlatformModel"),

    AnalyticsPlatformModel: require("./Analytics/AnalyticsPlatformModel"),

    PartnerPlatformModel: require("./Partner/PartnerPlatformModel"),

    WebhookPlatformModel: require("./Webhook/WebhookPlatformModel"),

    AuditTrailPlatformModel: require("./AuditTrail/AuditTrailPlatformModel"),
  },
};
