module.exports = {
  PartnerConfig: require("./PartnerConfig"),
  PartnerClient: require("./PartnerClient"),
  PartnerModel: {
    FileStoragePartnerModel: require("./FileStorage/FileStoragePartnerModel"),

    ThemePartnerModel: require("./Theme/ThemePartnerModel"),
  },
};
