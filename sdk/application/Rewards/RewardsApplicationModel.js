const Joi = require("joi");

/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */

/**
 * @typedef CatalogueOrderRequest
 * @property {RewardsArticle[]} [articles]
 */

/**
 * @typedef CatalogueOrderResponse
 * @property {RewardsArticle[]} [articles]
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
 * @typedef Error
 * @property {number} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
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
 * @typedef OrderDiscountRequest
 * @property {string} [currency]
 * @property {number} order_amount
 */

/**
 * @typedef OrderDiscountResponse
 * @property {OrderDiscountRuleBucket} [applied_rule_bucket]
 * @property {DiscountProperties} [base_discount]
 * @property {DiscountProperties} [discount]
 * @property {number} [order_amount]
 * @property {number} [points]
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
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
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
 * @typedef PointsHistoryResponse
 * @property {PointsHistory[]} [items] - History is the list of points transaction.
 * @property {Page} [page]
 */

/**
 * @typedef PointsResponse
 * @property {number} [points] - Total points available
 */

/**
 * @typedef RedeemReferralCodeRequest
 * @property {string} [device_id]
 * @property {string} [referral_code]
 */

/**
 * @typedef RedeemReferralCodeResponse
 * @property {string} [message]
 * @property {number} [points]
 * @property {boolean} [redeemed]
 * @property {string} [referrer_id]
 * @property {string} [referrer_info]
 */

/**
 * @typedef ReferralDetailsResponse
 * @property {Offer} [referral]
 * @property {string} [referrer_info]
 * @property {ShareMessages} [share]
 * @property {string} [terms_conditions_link]
 * @property {ReferralDetailsUser} [user]
 */

/**
 * @typedef ReferralDetailsUser
 * @property {boolean} [blocked]
 * @property {number} [points]
 * @property {boolean} [redeemed]
 * @property {string} [referral_code]
 */

/**
 * @typedef RewardsArticle
 * @property {string} [id]
 * @property {number} [points]
 * @property {number} [price]
 */

/**
 * @typedef Schedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
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

class RewardsApplicationModel {
  /** @returns {Asset} */
  static Asset() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      id: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
    });
  }

  /** @returns {CatalogueOrderRequest} */
  static CatalogueOrderRequest() {
    return Joi.object({
      articles: Joi.array().items(RewardsApplicationModel.RewardsArticle()),
    });
  }

  /** @returns {CatalogueOrderResponse} */
  static CatalogueOrderResponse() {
    return Joi.object({
      articles: Joi.array().items(RewardsApplicationModel.RewardsArticle()),
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

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      code: Joi.number(),
      exception: Joi.string().allow(""),
      info: Joi.string().allow(""),
      message: Joi.string().allow(""),
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

  /** @returns {OrderDiscountRequest} */
  static OrderDiscountRequest() {
    return Joi.object({
      currency: Joi.string().allow(""),
      order_amount: Joi.number().required(),
    });
  }

  /** @returns {OrderDiscountResponse} */
  static OrderDiscountResponse() {
    return Joi.object({
      applied_rule_bucket: RewardsApplicationModel.OrderDiscountRuleBucket(),
      base_discount: RewardsApplicationModel.DiscountProperties(),
      discount: RewardsApplicationModel.DiscountProperties(),
      order_amount: Joi.number(),
      points: Joi.number(),
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

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
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

  /** @returns {PointsHistoryResponse} */
  static PointsHistoryResponse() {
    return Joi.object({
      items: Joi.array().items(RewardsApplicationModel.PointsHistory()),
      page: RewardsApplicationModel.Page(),
    });
  }

  /** @returns {PointsResponse} */
  static PointsResponse() {
    return Joi.object({
      points: Joi.number(),
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
      message: Joi.string().allow(""),
      points: Joi.number(),
      redeemed: Joi.boolean(),
      referrer_id: Joi.string().allow(""),
      referrer_info: Joi.string().allow(""),
    });
  }

  /** @returns {ReferralDetailsResponse} */
  static ReferralDetailsResponse() {
    return Joi.object({
      referral: RewardsApplicationModel.Offer(),
      referrer_info: Joi.string().allow(""),
      share: RewardsApplicationModel.ShareMessages(),
      terms_conditions_link: Joi.string().allow(""),
      user: RewardsApplicationModel.ReferralDetailsUser(),
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

  /** @returns {RewardsArticle} */
  static RewardsArticle() {
    return Joi.object({
      id: Joi.string().allow(""),
      points: Joi.number(),
      price: Joi.number(),
    });
  }

  /** @returns {Schedule} */
  static Schedule() {
    return Joi.object({
      cron: Joi.string().allow(""),
      duration: Joi.number(),
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
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
}
module.exports = RewardsApplicationModel;
