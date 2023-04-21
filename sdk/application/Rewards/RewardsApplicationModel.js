const Joi = require("joi");

class RewardsModel {
  static Asset() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      id: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
    });
  }
  static CatalogueOrderRequest() {
    return Joi.object({
      articles: Joi.array().items(RewardsModel.RewardsArticle()),
    });
  }
  static CatalogueOrderResponse() {
    return Joi.object({
      articles: Joi.array().items(RewardsModel.RewardsArticle()),
    });
  }
  static DiscountProperties() {
    return Joi.object({
      absolute: Joi.number(),
      currency: Joi.string().allow(""),
      display_absolute: Joi.string().allow(""),
      display_percent: Joi.string().allow(""),
      percent: Joi.number(),
    });
  }
  static Error() {
    return Joi.object({
      code: Joi.number(),
      exception: Joi.string().allow(""),
      info: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }
  static Offer() {
    return Joi.object({
      _schedule: RewardsModel.Schedule(),
      active: Joi.boolean(),
      application_id: Joi.string().allow(""),
      banner_image: RewardsModel.Asset(),
      created_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      rule: Joi.any(),
      share: RewardsModel.ShareMessages(),
      sub_text: Joi.string().allow(""),
      text: Joi.string().allow(""),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static OrderDiscountRequest() {
    return Joi.object({
      currency: Joi.string().allow(""),
      order_amount: Joi.number().required(),
    });
  }
  static OrderDiscountResponse() {
    return Joi.object({
      applied_rule_bucket: RewardsModel.OrderDiscountRuleBucket(),
      base_discount: RewardsModel.DiscountProperties(),
      discount: RewardsModel.DiscountProperties(),
      order_amount: Joi.number(),
      points: Joi.number(),
    });
  }
  static OrderDiscountRuleBucket() {
    return Joi.object({
      high: Joi.number(),
      low: Joi.number(),
      max: Joi.number(),
      value: Joi.number(),
      value_type: Joi.string().allow(""),
    });
  }
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
  static PointsHistoryResponse() {
    return Joi.object({
      items: Joi.array().items(RewardsModel.PointsHistory()),
      page: RewardsModel.Page(),
    });
  }
  static PointsResponse() {
    return Joi.object({
      points: Joi.number(),
    });
  }
  static RedeemReferralCodeRequest() {
    return Joi.object({
      device_id: Joi.string().allow(""),
      referral_code: Joi.string().allow(""),
    });
  }
  static RedeemReferralCodeResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      points: Joi.number(),
      redeemed: Joi.boolean(),
      referrer_id: Joi.string().allow(""),
      referrer_info: Joi.string().allow(""),
    });
  }
  static ReferralDetailsResponse() {
    return Joi.object({
      referral: RewardsModel.Offer(),
      referrer_info: Joi.string().allow(""),
      share: RewardsModel.ShareMessages(),
      terms_conditions_link: Joi.string().allow(""),
      user: RewardsModel.ReferralDetailsUser(),
    });
  }
  static ReferralDetailsUser() {
    return Joi.object({
      blocked: Joi.boolean(),
      points: Joi.number(),
      redeemed: Joi.boolean(),
      referral_code: Joi.string().allow(""),
    });
  }
  static RewardsArticle() {
    return Joi.object({
      id: Joi.string().allow(""),
      points: Joi.number(),
      price: Joi.number(),
    });
  }
  static Schedule() {
    return Joi.object({
      cron: Joi.string().allow(""),
      duration: Joi.number(),
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }
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
module.exports = RewardsModel;
