module.exports = {
  PlatformConfig: require("./PlatformConfig"),
  PlatformClient: require("./PlatformClient"),
  PlatformModel: {
    AuditTrailPlatformModel: require("./AuditTrail/AuditTrailPlatformModel"),

    BillingPlatformModel: require("./Billing/BillingPlatformModel"),

    CartPlatformModel: require("./Cart/CartPlatformModel"),

    CatalogPlatformModel: require("./Catalog/CatalogPlatformModel"),

    CommonPlatformModel: require("./Common/CommonPlatformModel"),

    CommunicationPlatformModel: require("./Communication/CommunicationPlatformModel"),

    CompanyProfilePlatformModel: require("./CompanyProfile/CompanyProfilePlatformModel"),

    ConfigurationPlatformModel: require("./Configuration/ConfigurationPlatformModel"),

    ContentPlatformModel: require("./Content/ContentPlatformModel"),

    DiscountPlatformModel: require("./Discount/DiscountPlatformModel"),

    FileStoragePlatformModel: require("./FileStorage/FileStoragePlatformModel"),

    FinancePlatformModel: require("./Finance/FinancePlatformModel"),

    InventoryPlatformModel: require("./Inventory/InventoryPlatformModel"),

    LeadPlatformModel: require("./Lead/LeadPlatformModel"),

    OrderPlatformModel: require("./Order/OrderPlatformModel"),

    PartnerPlatformModel: require("./Partner/PartnerPlatformModel"),

    PaymentPlatformModel: require("./Payment/PaymentPlatformModel"),

    RewardsPlatformModel: require("./Rewards/RewardsPlatformModel"),

    SharePlatformModel: require("./Share/SharePlatformModel"),

    ThemePlatformModel: require("./Theme/ThemePlatformModel"),

    UserPlatformModel: require("./User/UserPlatformModel"),

    WebhookPlatformModel: require("./Webhook/WebhookPlatformModel"),
  },
};
