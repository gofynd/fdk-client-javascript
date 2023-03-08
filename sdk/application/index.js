module.exports = {
  ApplicationConfig: require("./ApplicationConfig"),
  ApplicationClient: require("./ApplicationClient"),
  ApplicationModel: {
    CatalogApplicationModel: require("./Catalog/CatalogApplicationModel"),

    CartApplicationModel: require("./Cart/CartApplicationModel"),

    CommonApplicationModel: require("./Common/CommonApplicationModel"),

    LeadApplicationModel: require("./Lead/LeadApplicationModel"),

    ThemeApplicationModel: require("./Theme/ThemeApplicationModel"),

    UserApplicationModel: require("./User/UserApplicationModel"),

    ContentApplicationModel: require("./Content/ContentApplicationModel"),

    CommunicationApplicationModel: require("./Communication/CommunicationApplicationModel"),

    ShareApplicationModel: require("./Share/ShareApplicationModel"),

    FileStorageApplicationModel: require("./FileStorage/FileStorageApplicationModel"),

    ConfigurationApplicationModel: require("./Configuration/ConfigurationApplicationModel"),

    PaymentApplicationModel: require("./Payment/PaymentApplicationModel"),

    OrderApplicationModel: require("./Order/OrderApplicationModel"),

    RewardsApplicationModel: require("./Rewards/RewardsApplicationModel"),

    PosCartApplicationModel: require("./PosCart/PosCartApplicationModel"),

    LogisticApplicationModel: require("./Logistic/LogisticApplicationModel"),
  },
};
