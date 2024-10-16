const Joi = require("joi");

/**
 * @typedef E
 * @property {number} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 */

/**
 * @typedef ListGiveaway
 * @property {Giveaway[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Giveaway
 * @property {string} [_id]
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {RewardsAudience} [audience]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [name]
 * @property {RewardsRule} [rule]
 * @property {string} [title]
 * @property {string} [updated_at]
 */

/**
 * @typedef Schedule
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 * @property {string} [cron]
 */

/**
 * @typedef RewardsAudience
 * @property {string} [header_user_id]
 * @property {string} [id]
 */

/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */

/**
 * @typedef RewardsRule
 * @property {number} [amount]
 */

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 */

/**
 * @typedef Offer
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [name]
 * @property {Object} [rule]
 * @property {ShareMessages} [share]
 * @property {string} [sub_text]
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [url]
 */

/**
 * @typedef ShareMessages
 * @property {number} [email]
 * @property {string} [facebook]
 * @property {string} [fallback]
 * @property {string} [message]
 * @property {string} [messenger]
 * @property {string} [sms]
 * @property {string} [text]
 * @property {string} [twitter]
 * @property {string} [whatsapp]
 */

/**
 * @typedef UserRes
 * @property {Points} [points]
 * @property {RewardUser} [user]
 */

/**
 * @typedef Points
 * @property {number} [available]
 */

/**
 * @typedef RewardUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {Referral} [referral]
 * @property {number} [uid]
 * @property {string} [updated_at]
 * @property {string} [user_block_reason]
 * @property {string} [user_id]
 */

/**
 * @typedef Referral
 * @property {string} [code]
 */

/**
 * @typedef AppUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {string} [block_reason]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [user_id]
 */

/**
 * @typedef HistoryRes
 * @property {PointsHistory[]} [items] - History is the list of points transaction.
 * @property {Page} [page]
 * @property {number} [points]
 */

/**
 * @typedef PointsHistory
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {boolean} [claimed]
 * @property {string} [created_at]
 * @property {string} [expires_on]
 * @property {Object} [meta]
 * @property {number} [points]
 * @property {number} [remaining_points]
 * @property {string} [text_1]
 * @property {string} [text_2]
 * @property {string} [text_3]
 * @property {string} [txn_name]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 */

/**
 * @typedef ConfigurationRes
 * @property {string[]} [valid_android_packages] - Contains array of string
 *   items, Valid android package names.
 * @property {string} [terms_conditions_link] - A URL that redirects to the
 *   referral information suport page link
 * @property {string} [application_id]
 * @property {boolean} [success]
 */

/**
 * @typedef SetConfigurationRes
 * @property {boolean} [success]
 */

/**
 * @typedef SetConfiguration
 * @property {string[]} [valid_android_packages]
 * @property {string} [terms_conditions_link]
 */

class RewardsPlatformModel {
  /** @returns {E} */
  static E() {
    return Joi.object({
      code: Joi.number(),
      exception: Joi.string().allow(""),
      info: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ListGiveaway} */
  static ListGiveaway() {
    return Joi.object({
      items: Joi.array().items(RewardsPlatformModel.Giveaway()),
      page: RewardsPlatformModel.Page(),
    });
  }

  /** @returns {Giveaway} */
  static Giveaway() {
    return Joi.object({
      _id: Joi.string().allow(""),
      _schedule: RewardsPlatformModel.Schedule(),
      active: Joi.boolean(),
      application_id: Joi.string().allow(""),
      audience: RewardsPlatformModel.RewardsAudience(),
      banner_image: RewardsPlatformModel.Asset(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      rule: RewardsPlatformModel.RewardsRule(),
      title: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {Schedule} */
  static Schedule() {
    return Joi.object({
      duration: Joi.number(),
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
      cron: Joi.string().allow(""),
    });
  }

  /** @returns {RewardsAudience} */
  static RewardsAudience() {
    return Joi.object({
      header_user_id: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {Asset} */
  static Asset() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      id: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
    });
  }

  /** @returns {RewardsRule} */
  static RewardsRule() {
    return Joi.object({
      amount: Joi.number(),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
    });
  }

  /** @returns {Offer} */
  static Offer() {
    return Joi.object({
      _schedule: RewardsPlatformModel.Schedule(),
      active: Joi.boolean(),
      application_id: Joi.string().allow(""),
      banner_image: RewardsPlatformModel.Asset(),
      created_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      rule: Joi.object().pattern(/\S/, Joi.any()),
      share: RewardsPlatformModel.ShareMessages(),
      sub_text: Joi.string().allow(""),
      text: Joi.string().allow(""),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {ShareMessages} */
  static ShareMessages() {
    return Joi.object({
      email: Joi.number(),
      facebook: Joi.string().allow(""),
      fallback: Joi.string().allow(""),
      message: Joi.string().allow(""),
      messenger: Joi.string().allow(""),
      sms: Joi.string().allow(""),
      text: Joi.string().allow(""),
      twitter: Joi.string().allow(""),
      whatsapp: Joi.string().allow(""),
    });
  }

  /** @returns {UserRes} */
  static UserRes() {
    return Joi.object({
      points: RewardsPlatformModel.Points(),
      user: RewardsPlatformModel.RewardUser(),
    });
  }

  /** @returns {Points} */
  static Points() {
    return Joi.object({
      available: Joi.number(),
    });
  }

  /** @returns {RewardUser} */
  static RewardUser() {
    return Joi.object({
      _id: Joi.string().allow(""),
      active: Joi.boolean(),
      created_at: Joi.string().allow(""),
      referral: RewardsPlatformModel.Referral(),
      uid: Joi.number(),
      updated_at: Joi.string().allow(""),
      user_block_reason: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {Referral} */
  static Referral() {
    return Joi.object({
      code: Joi.string().allow(""),
    });
  }

  /** @returns {AppUser} */
  static AppUser() {
    return Joi.object({
      _id: Joi.string().allow(""),
      active: Joi.boolean(),
      application_id: Joi.string().allow(""),
      block_reason: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {HistoryRes} */
  static HistoryRes() {
    return Joi.object({
      items: Joi.array().items(RewardsPlatformModel.PointsHistory()),
      page: RewardsPlatformModel.Page(),
      points: Joi.number(),
    });
  }

  /** @returns {PointsHistory} */
  static PointsHistory() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      claimed: Joi.boolean(),
      created_at: Joi.string().allow(""),
      expires_on: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      points: Joi.number(),
      remaining_points: Joi.number(),
      text_1: Joi.string().allow(""),
      text_2: Joi.string().allow(""),
      text_3: Joi.string().allow(""),
      txn_name: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {ConfigurationRes} */
  static ConfigurationRes() {
    return Joi.object({
      valid_android_packages: Joi.array().items(Joi.string().allow("")),
      terms_conditions_link: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {SetConfigurationRes} */
  static SetConfigurationRes() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {SetConfiguration} */
  static SetConfiguration() {
    return Joi.object({
      valid_android_packages: Joi.array().items(Joi.string().allow("")),
      terms_conditions_link: Joi.string().allow(""),
    });
  }
}
module.exports = RewardsPlatformModel;
