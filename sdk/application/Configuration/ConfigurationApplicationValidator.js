const Joi = require("joi");

const ConfigurationApplicationModel = require("./ConfigurationApplicationModel");

/** @typedef GetAppCurrenciesParam */

/**
 * @typedef GetAppStaffListParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 * @property {boolean} [orderIncent] - Select `true` to retrieve the staff
 *   members eligible for getting incentives on orders.
 * @property {number} [orderingStore] - ID of the ordering store. Helps in
 *   retrieving staff members working at a particular ordering store.
 * @property {string} [user] - ID of the staff. Helps in retrieving the details
 *   of a particular staff member.
 * @property {string} [userName] - Username of the member.
 */

/**
 * @typedef GetAppStaffsParam
 * @property {boolean} [orderIncent] - Select `true` to retrieve the staff
 *   members eligible for getting incentives on orders.
 * @property {number} [orderingStore] - ID of the ordering store. Helps in
 *   retrieving staff members working at a particular ordering store.
 * @property {string} [user] - ID of the staff. Helps in retrieving the details
 *   of a particular staff member.
 */

/** @typedef GetApplicationParam */

/** @typedef GetBasicDetailsParam */

/** @typedef GetContactInfoParam */

/** @typedef GetCurrenciesParam */

/**
 * @typedef GetCurrencyByIdParam
 * @property {string} id - ID assigned to the currency.
 */

/** @typedef GetFeaturesParam */

/** @typedef GetIntegrationTokensParam */

/** @typedef GetLanguagesParam */

/**
 * @typedef GetOrderingStoreCookieParam
 * @property {ConfigurationApplicationModel.OrderingStoreSelectRequest} body
 */

/**
 * @typedef GetOrderingStoresParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {string} [q] - Store code or name of the ordering store.
 */

/** @typedef GetOwnerInfoParam */

/**
 * @typedef GetStoreDetailByIdParam
 * @property {number} storeId - Unique identifier for a store.
 */

/** @typedef RemoveOrderingStoreCookieParam */

class ConfigurationApplicationValidator {
  /** @returns {GetAppCurrenciesParam} */
  static getAppCurrencies() {
    return Joi.object({});
  }

  /** @returns {GetAppStaffListParam} */
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

  /** @returns {GetAppStaffsParam} */
  static getAppStaffs() {
    return Joi.object({
      orderIncent: Joi.boolean(),
      orderingStore: Joi.number(),
      user: Joi.string().allow(""),
    });
  }

  /** @returns {GetApplicationParam} */
  static getApplication() {
    return Joi.object({});
  }

  /** @returns {GetBasicDetailsParam} */
  static getBasicDetails() {
    return Joi.object({});
  }

  /** @returns {GetContactInfoParam} */
  static getContactInfo() {
    return Joi.object({});
  }

  /** @returns {GetCurrenciesParam} */
  static getCurrencies() {
    return Joi.object({});
  }

  /** @returns {GetCurrencyByIdParam} */
  static getCurrencyById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetFeaturesParam} */
  static getFeatures() {
    return Joi.object({});
  }

  /** @returns {GetIntegrationTokensParam} */
  static getIntegrationTokens() {
    return Joi.object({});
  }

  /** @returns {GetLanguagesParam} */
  static getLanguages() {
    return Joi.object({});
  }

  /** @returns {GetOrderingStoreCookieParam} */
  static getOrderingStoreCookie() {
    return Joi.object({
      body: ConfigurationApplicationModel.OrderingStoreSelectRequest().required(),
    }).required();
  }

  /** @returns {GetOrderingStoresParam} */
  static getOrderingStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    });
  }

  /** @returns {GetOwnerInfoParam} */
  static getOwnerInfo() {
    return Joi.object({});
  }

  /** @returns {GetStoreDetailByIdParam} */
  static getStoreDetailById() {
    return Joi.object({
      storeId: Joi.number().required(),
    }).required();
  }

  /** @returns {RemoveOrderingStoreCookieParam} */
  static removeOrderingStoreCookie() {
    return Joi.object({});
  }
}

module.exports = ConfigurationApplicationValidator;
