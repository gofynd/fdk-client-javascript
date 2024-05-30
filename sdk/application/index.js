module.exports = {
  ApplicationConfig: require("./ApplicationConfig"),
  ApplicationClient: require("./ApplicationClient"),
  ApplicationModel: {
    CartApplicationModel: require("./Cart/CartApplicationModel"),

    CatalogApplicationModel: require("./Catalog/CatalogApplicationModel"),

    CommonApplicationModel: require("./Common/CommonApplicationModel"),

    CommunicationApplicationModel: require("./Communication/CommunicationApplicationModel"),

    ConfigurationApplicationModel: require("./Configuration/ConfigurationApplicationModel"),

    ContentApplicationModel: require("./Content/ContentApplicationModel"),

    FileStorageApplicationModel: require("./FileStorage/FileStorageApplicationModel"),

    LeadApplicationModel: require("./Lead/LeadApplicationModel"),

    LogisticApplicationModel: require("./Logistic/LogisticApplicationModel"),

    OrderApplicationModel: require("./Order/OrderApplicationModel"),

    PaymentApplicationModel: require("./Payment/PaymentApplicationModel"),

    RewardsApplicationModel: require("./Rewards/RewardsApplicationModel"),

    ShareApplicationModel: require("./Share/ShareApplicationModel"),

    ThemeApplicationModel: require("./Theme/ThemeApplicationModel"),

    UserApplicationModel: require("./User/UserApplicationModel"),
  },
};
