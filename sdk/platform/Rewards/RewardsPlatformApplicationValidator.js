const Joi = require("joi");

const RewardsPlatformModel = require("./RewardsPlatformModel");

/**
 * @typedef getGiveawayById
 * @property {string} id - Giveaway ID
 */

/**
 * @typedef getOfferByName
 * @property {string} name - The name given to the offer.
 */

/** @typedef getRewardsConfiguration */

/**
 * @typedef getUserDetails
 * @property {string} userId - User id
 */

/**
 * @typedef getUserPointsHistory
 * @property {string} userId - User id
 * @property {string} [pageId] - PageID is the ID of the requested page. For
 *   first request it should be kept empty.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */

/**
 * @typedef saveGiveAway
 * @property {RewardsPlatformModel.Giveaway} body
 */

/**
 * @typedef setRewardsConfiguration
 * @property {RewardsPlatformModel.ConfigurationRequest} body
 */

/**
 * @typedef showGiveaways
 * @property {string} pageId - Pagination page id
 * @property {number} pageSize - Pagination page size
 */

/** @typedef showOffers */

/**
 * @typedef updateGiveAway
 * @property {string} id - Giveaway ID
 * @property {RewardsPlatformModel.Giveaway} body
 */

/**
 * @typedef updateOfferByName
 * @property {string} name - The name given to the offer.
 * @property {RewardsPlatformModel.Offer} body
 */

/**
 * @typedef updateUserStatus
 * @property {string} userId - User id
 * @property {RewardsPlatformModel.AppUser} body
 */

class RewardsPlatformApplicationValidator {
  /** @returns {getGiveawayById} */
  static getGiveawayById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getOfferByName} */
  static getOfferByName() {
    return Joi.object({
      name: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getRewardsConfiguration} */
  static getRewardsConfiguration() {
    return Joi.object({}).required();
  }

  /** @returns {getUserDetails} */
  static getUserDetails() {
    return Joi.object({
      userId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getUserPointsHistory} */
  static getUserPointsHistory() {
    return Joi.object({
      userId: Joi.string().allow("").required(),

      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {saveGiveAway} */
  static saveGiveAway() {
    return Joi.object({
      body: RewardsPlatformModel.Giveaway().required(),
    }).required();
  }

  /** @returns {setRewardsConfiguration} */
  static setRewardsConfiguration() {
    return Joi.object({
      body: RewardsPlatformModel.ConfigurationRequest().required(),
    }).required();
  }

  /** @returns {showGiveaways} */
  static showGiveaways() {
    return Joi.object({
      pageId: Joi.string().allow("").required(),
      pageSize: Joi.number().required(),
    }).required();
  }

  /** @returns {showOffers} */
  static showOffers() {
    return Joi.object({}).required();
  }

  /** @returns {updateGiveAway} */
  static updateGiveAway() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: RewardsPlatformModel.Giveaway().required(),
    }).required();
  }

  /** @returns {updateOfferByName} */
  static updateOfferByName() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      body: RewardsPlatformModel.Offer().required(),
    }).required();
  }

  /** @returns {updateUserStatus} */
  static updateUserStatus() {
    return Joi.object({
      userId: Joi.string().allow("").required(),

      body: RewardsPlatformModel.AppUser().required(),
    }).required();
  }
}

module.exports = RewardsPlatformApplicationValidator;
