const Joi = require("joi");

const RewardsApplicationModel = require("./RewardsApplicationModel");

/**
 * @typedef CatalogueOrderParam
 * @property {RewardsApplicationModel.CatalogueOrderRequest} body
 */

/**
 * @typedef GetOfferByNameParam
 * @property {string} name - The name given to the offer.
 */

/**
 * @typedef GetOrderDiscountParam
 * @property {RewardsApplicationModel.OrderDiscountRequest} body
 */

/** @typedef GetUserPointsParam */

/**
 * @typedef GetUserPointsHistoryParam
 * @property {string} [pageId] - PageID is the ID of the requested page. For
 *   first request it should be kept empty.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */

/** @typedef GetUserReferralDetailsParam */

/**
 * @typedef RedeemReferralCodeParam
 * @property {RewardsApplicationModel.RedeemReferralCodeRequest} body
 */

class RewardsApplicationValidator {
  /** @returns {CatalogueOrderParam} */
  static catalogueOrder() {
    return Joi.object({
      body: RewardsApplicationModel.CatalogueOrderRequest().required(),
    }).required();
  }

  /** @returns {GetOfferByNameParam} */
  static getOfferByName() {
    return Joi.object({
      name: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetOrderDiscountParam} */
  static getOrderDiscount() {
    return Joi.object({
      body: RewardsApplicationModel.OrderDiscountRequest().required(),
    }).required();
  }

  /** @returns {GetUserPointsParam} */
  static getUserPoints() {
    return Joi.object({});
  }

  /** @returns {GetUserPointsHistoryParam} */
  static getUserPointsHistory() {
    return Joi.object({
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    });
  }

  /** @returns {GetUserReferralDetailsParam} */
  static getUserReferralDetails() {
    return Joi.object({});
  }

  /** @returns {RedeemReferralCodeParam} */
  static redeemReferralCode() {
    return Joi.object({
      body: RewardsApplicationModel.RedeemReferralCodeRequest().required(),
    }).required();
  }
}

module.exports = RewardsApplicationValidator;
