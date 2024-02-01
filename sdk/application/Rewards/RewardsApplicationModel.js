const Joi = require("joi");

/**
 * @typedef RewardsArticle
 * @property {string} [id]
 * @property {number} [points]
 * @property {number} [price]
 */

/**
 * @typedef CatalogueOrderResponse
 * @property {RewardsArticle[]} [articles]
 */

/**
 * @typedef CatalogueOrderRequest
 * @property {RewardsArticle[]} [articles]
 */

/**
 * @typedef PointsResponse
 * @property {number} [points] - Total points available
 */

/**
 * @typedef ReferralDetailsUser
 * @property {boolean} [blocked]
 * @property {number} [points]
 * @property {boolean} [redeemed]
 * @property {string} [referral_code]
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
 * @typedef Schedule
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 * @property {string} [cron]
 */

/**
 * @typedef Error
 * @property {number} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 */

/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
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
 * @typedef ReferralDetailsResponse
 * @property {Offer} [referral]
 * @property {ShareMessages} [share]
 * @property {ReferralDetailsUser} [user]
 * @property {string} [referrer_info]
 * @property {string} [terms_conditions_link]
 */

/**
 * @typedef OrderDiscountRequest
 * @property {number} order_amount
 * @property {string} [currency]
 */

/**
 * @typedef OrderDiscountRuleBucket
 * @property {number} [high]
 * @property {number} [low]
 * @property {number} [max]
 * @property {number} [value]
 * @property {string} [value_type]
 */

/**
 * @typedef DiscountProperties
 * @property {number} [absolute]
 * @property {string} [currency]
 * @property {string} [display_absolute]
 * @property {string} [display_percent]
 * @property {number} [percent]
 */

/**
 * @typedef OrderDiscountResponse
 * @property {number} [order_amount]
 * @property {number} [points]
 * @property {DiscountProperties} [discount]
 * @property {DiscountProperties} [base_discount]
 * @property {OrderDiscountRuleBucket} [applied_rule_bucket]
 */

/**
 * @typedef RedeemReferralCodeRequest
 * @property {string} [device_id]
 * @property {string} [referral_code]
 */

/**
 * @typedef RedeemReferralCodeResponse
 * @property {boolean} [redeemed]
 * @property {string} [message]
 * @property {string} [referrer_info]
 * @property {string} [referrer_id]
 * @property {number} [points]
 */

/**
 * @typedef PointsHistoryResponse
 * @property {PointsHistory[]} [items] - History is the list of points transaction.
 * @property {Page} [page]
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
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

class RewardsApplicationModel {
  /** @returns {RewardsArticle} */
  static RewardsArticle() {
    return Joi.object({
      id: Joi.string().allow(""),
      points: Joi.number(),
      price: Joi.number(),
    });
  }

  /** @returns {CatalogueOrderResponse} */
  static CatalogueOrderResponse() {
    return Joi.object({
      articles: Joi.array().items(RewardsApplicationModel.RewardsArticle()),
    });
  }

  /** @returns {CatalogueOrderRequest} */
  static CatalogueOrderRequest() {
    return Joi.object({
      articles: Joi.array().items(RewardsApplicationModel.RewardsArticle()),
    });
  }

  /** @returns {PointsResponse} */
  static PointsResponse() {
    return Joi.object({
      points: Joi.number(),
    });
  }

  /** @returns {ReferralDetailsUser} */
  static ReferralDetailsUser() {
    return Joi.object({
      blocked: Joi.boolean(),
      points: Joi.number(),
      redeemed: Joi.boolean(),
      referral_code: Joi.string().allow(""),
    });
  }

  /** @returns {Offer} */
  static Offer() {
    return Joi.object({
      _schedule: RewardsApplicationModel.Schedule(),
      active: Joi.boolean(),
      application_id: Joi.string().allow(""),
      banner_image: RewardsApplicationModel.Asset(),
      created_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      rule: Joi.any(),
      share: RewardsApplicationModel.ShareMessages(),
      sub_text: Joi.string().allow(""),
      text: Joi.string().allow(""),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      url: Joi.string().allow(""),
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

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      code: Joi.number(),
      exception: Joi.string().allow(""),
      info: Joi.string().allow(""),
      message: Joi.string().allow(""),
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

  /** @returns {ReferralDetailsResponse} */
  static ReferralDetailsResponse() {
    return Joi.object({
      referral: RewardsApplicationModel.Offer(),
      share: RewardsApplicationModel.ShareMessages(),
      user: RewardsApplicationModel.ReferralDetailsUser(),
      referrer_info: Joi.string().allow(""),
      terms_conditions_link: Joi.string().allow(""),
    });
  }

  /** @returns {OrderDiscountRequest} */
  static OrderDiscountRequest() {
    return Joi.object({
      order_amount: Joi.number().required(),
      currency: Joi.string().allow(""),
    });
  }

  /** @returns {OrderDiscountRuleBucket} */
  static OrderDiscountRuleBucket() {
    return Joi.object({
      high: Joi.number(),
      low: Joi.number(),
      max: Joi.number(),
      value: Joi.number(),
      value_type: Joi.string().allow(""),
    });
  }

  /** @returns {DiscountProperties} */
  static DiscountProperties() {
    return Joi.object({
      absolute: Joi.number(),
      currency: Joi.string().allow(""),
      display_absolute: Joi.string().allow(""),
      display_percent: Joi.string().allow(""),
      percent: Joi.number(),
    });
  }

  /** @returns {OrderDiscountResponse} */
  static OrderDiscountResponse() {
    return Joi.object({
      order_amount: Joi.number(),
      points: Joi.number(),
      discount: RewardsApplicationModel.DiscountProperties(),
      base_discount: RewardsApplicationModel.DiscountProperties(),
      applied_rule_bucket: RewardsApplicationModel.OrderDiscountRuleBucket(),
    });
  }

  /** @returns {RedeemReferralCodeRequest} */
  static RedeemReferralCodeRequest() {
    return Joi.object({
      device_id: Joi.string().allow(""),
      referral_code: Joi.string().allow(""),
    });
  }

  /** @returns {RedeemReferralCodeResponse} */
  static RedeemReferralCodeResponse() {
    return Joi.object({
      redeemed: Joi.boolean(),
      message: Joi.string().allow(""),
      referrer_info: Joi.string().allow(""),
      referrer_id: Joi.string().allow(""),
      points: Joi.number(),
    });
  }

  /** @returns {PointsHistoryResponse} */
  static PointsHistoryResponse() {
    return Joi.object({
      items: Joi.array().items(RewardsApplicationModel.PointsHistory()),
      page: RewardsApplicationModel.Page(),
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
      meta: Joi.any(),
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
}
module.exports = RewardsApplicationModel;
