const Joi = require("joi");

const RewardsPlatformModel = require("./RewardsPlatformModel");

/**
 * @typedef GetGiveawayByIdParam
 * @property {string} id - Giveaway ID
 */

/**
 * @typedef GetOfferByNameParam
 * @property {string} name - The name given to the offer.
 */

/** @typedef GetRewardsConfigurationParam */

/**
 * @typedef GetUserDetailsParam
 * @property {string} userId - User id
 */

/**
 * @typedef GetUserPointsHistoryParam
 * @property {string} userId - User id
 * @property {string} [pageId] - PageID is the ID of the requested page. For
 *   first request it should be kept empty.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */

/**
 * @typedef SaveGiveAwayParam
 * @property {RewardsPlatformModel.Giveaway} body
 */

/**
 * @typedef SetRewardsConfigurationParam
 * @property {RewardsPlatformModel.ConfigurationRequest} body
 */

/**
 * @typedef ShowGiveawaysParam
 * @property {string} pageId - Pagination page id
 * @property {number} pageSize - Pagination page size
 */

/** @typedef ShowOffersParam */

/**
 * @typedef UpdateGiveAwayParam
 * @property {string} id - Giveaway ID
 * @property {RewardsPlatformModel.Giveaway} body
 */

/**
 * @typedef UpdateOfferByNameParam
 * @property {string} name - The name given to the offer.
 * @property {RewardsPlatformModel.Offer} body
 */

/**
 * @typedef UpdateUserStatusParam
 * @property {string} userId - User id
 * @property {RewardsPlatformModel.AppUser} body
 */

class RewardsPlatformApplicationValidator {
  /** @returns {GetGiveawayByIdParam} */
  static getGiveawayById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetOfferByNameParam} */
  static getOfferByName() {
    return Joi.object({
      name: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetRewardsConfigurationParam} */
  static getRewardsConfiguration() {
    return Joi.object({}).required();
  }

  /** @returns {GetUserDetailsParam} */
  static getUserDetails() {
    return Joi.object({
      userId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetUserPointsHistoryParam} */
  static getUserPointsHistory() {
    return Joi.object({
      userId: Joi.string().allow("").required(),

      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {SaveGiveAwayParam} */
  static saveGiveAway() {
    return Joi.object({
      body: RewardsPlatformModel.Giveaway().required(),
    }).required();
  }

  /** @returns {SetRewardsConfigurationParam} */
  static setRewardsConfiguration() {
    return Joi.object({
      body: RewardsPlatformModel.ConfigurationRequest().required(),
    }).required();
  }

  /** @returns {ShowGiveawaysParam} */
  static showGiveaways() {
    return Joi.object({
      pageId: Joi.string().allow("").required(),
      pageSize: Joi.number().required(),
    }).required();
  }

  /** @returns {ShowOffersParam} */
  static showOffers() {
    return Joi.object({}).required();
  }

  /** @returns {UpdateGiveAwayParam} */
  static updateGiveAway() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: RewardsPlatformModel.Giveaway().required(),
    }).required();
  }

  /** @returns {UpdateOfferByNameParam} */
  static updateOfferByName() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      body: RewardsPlatformModel.Offer().required(),
    }).required();
  }

  /** @returns {UpdateUserStatusParam} */
  static updateUserStatus() {
    return Joi.object({
      userId: Joi.string().allow("").required(),

      body: RewardsPlatformModel.AppUser().required(),
    }).required();
  }
}

module.exports = RewardsPlatformApplicationValidator;
