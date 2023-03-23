const Joi = require("joi");

const ConfigurationModel = require("./ConfigurationApplicationModel");
class ConfigurationValidator {
  static getApplication() {
    return Joi.object({});
  }

  static getOwnerInfo() {
    return Joi.object({});
  }

  static getBasicDetails() {
    return Joi.object({});
  }

  static getIntegrationTokens() {
    return Joi.object({});
  }

  static getOrderingStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    });
  }

  static getStoreDetailById() {
    return Joi.object({
      storeId: Joi.number().required(),
    }).required();
  }

  static getFeatures() {
    return Joi.object({});
  }

  static getContactInfo() {
    return Joi.object({});
  }

  static getCurrencies() {
    return Joi.object({});
  }

  static getCurrencyById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getAppCurrencies() {
    return Joi.object({});
  }

  static getLanguages() {
    return Joi.object({});
  }

  static getOrderingStoreCookie() {
    return Joi.object({
      body: ConfigurationModel.OrderingStoreSelectRequest().required(),
    }).required();
  }

  static removeOrderingStoreCookie() {
    return Joi.object({});
  }

  static getAppStaffList() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      orderIncent: Joi.boolean(),
      orderingStore: Joi.number(),
      user: Joi.string().allow(""),
      userName: Joi.string().allow(""),
    });
  }

  static getAppStaffs() {
    return Joi.object({
      orderIncent: Joi.boolean(),
      orderingStore: Joi.number(),
      user: Joi.string().allow(""),
    });
  }
}

module.exports = ConfigurationValidator;
