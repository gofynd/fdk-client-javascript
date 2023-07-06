const Joi = require("joi");

const ConfigurationApplicationModel = require("./ConfigurationApplicationModel");

/** @typedef GetAppCurrenciesParam */

/**
 * @typedef GetAppStaffListParam
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {boolean} [orderIncent] - This is a boolean value. Select `true` to
 *   retrieve the staff members eligible for getting incentives on orders.
 * @property {number} [orderingStore] - ID of the ordering store. Helps in
 *   retrieving staff members working at a particular ordering store.
 * @property {string} [user] - Mongo ID of the staff. Helps in retrieving the
 *   details of a particular staff member.
 * @property {string} [userName] - User name of the member
 */

/**
 * @typedef GetAppStaffsParam
 * @property {boolean} [orderIncent] - This is a boolean value. Select `true` to
 *   retrieve the staff members eligible for getting incentives on orders.
 * @property {number} [orderingStore] - ID of the ordering store. Helps in
 *   retrieving staff members working at a particular ordering store.
 * @property {string} [user] - Mongo ID of the staff. Helps in retrieving the
 *   details of a particular staff member.
 */

/** @typedef GetApplicationParam */

/** @typedef GetBasicDetailsParam */

/** @typedef GetContactInfoParam */

/** @typedef GetCurrenciesParam */

/**
 * @typedef GetCurrencyByIdParam
 * @property {string} id - Object ID assigned to the currency
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
 * @property {number} storeId - Store uid
 */

/** @typedef RemoveOrderingStoreCookieParam */

class ConfigurationApplicationValidator {
  /** @returns {getAppCurrencies} */
  static getAppCurrencies() {
    return Joi.object({});
  }

  /** @returns {getAppStaffList} */
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

  /** @returns {getAppStaffs} */
  static getAppStaffs() {
    return Joi.object({
      orderIncent: Joi.boolean(),
      orderingStore: Joi.number(),
      user: Joi.string().allow(""),
    });
  }

  /** @returns {getApplication} */
  static getApplication() {
    return Joi.object({});
  }

  /** @returns {getBasicDetails} */
  static getBasicDetails() {
    return Joi.object({});
  }

  /** @returns {getContactInfo} */
  static getContactInfo() {
    return Joi.object({});
  }

  /** @returns {getCurrencies} */
  static getCurrencies() {
    return Joi.object({});
  }

  /** @returns {getCurrencyById} */
  static getCurrencyById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getFeatures} */
  static getFeatures() {
    return Joi.object({});
  }

  /** @returns {getIntegrationTokens} */
  static getIntegrationTokens() {
    return Joi.object({});
  }

  /** @returns {getLanguages} */
  static getLanguages() {
    return Joi.object({});
  }

  /** @returns {getOrderingStoreCookie} */
  static getOrderingStoreCookie() {
    return Joi.object({
      body: ConfigurationApplicationModel.OrderingStoreSelectRequest().required(),
    }).required();
  }

  /** @returns {getOrderingStores} */
  static getOrderingStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    });
  }

  /** @returns {getOwnerInfo} */
  static getOwnerInfo() {
    return Joi.object({});
  }

  /** @returns {getStoreDetailById} */
  static getStoreDetailById() {
    return Joi.object({
      storeId: Joi.number().required(),
    }).required();
  }

  /** @returns {removeOrderingStoreCookie} */
  static removeOrderingStoreCookie() {
    return Joi.object({});
  }
}

module.exports = ConfigurationApplicationValidator;
