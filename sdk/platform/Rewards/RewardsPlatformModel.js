const Joi = require("joi");

class RewardsModel {
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
  static Asset() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      id: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
    });
  }
  static ConfigurationRequest() {
    return Joi.object({
      terms_conditions_link: Joi.string().allow(""),
      valid_android_packages: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ConfigurationRes() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      success: Joi.boolean(),
      terms_conditions_link: Joi.string().allow(""),
      valid_android_packages: Joi.array().items(Joi.string().allow("")),
    });
  }
  static E() {
    return Joi.object({
      code: Joi.number(),
      exception: Joi.string().allow(""),
      info: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }
  static Giveaway() {
    return Joi.object({
      _id: Joi.string().allow(""),
      _schedule: RewardsModel.Schedule(),
      active: Joi.boolean(),
      application_id: Joi.string().allow(""),
      audience: RewardsModel.RewardsAudience(),
      banner_image: RewardsModel.Asset(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      rule: RewardsModel.RewardsRule(),
      title: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static GiveawayAudience() {
    return Joi.object({
      audience_id: Joi.string().allow(""),
      current_count: Joi.number(),
    });
  }
  static GiveawayResponse() {
    return Joi.object({
      items: Joi.array().items(RewardsModel.Giveaway()),
      page: RewardsModel.Page(),
    });
  }
  static HistoryRes() {
    return Joi.object({
      items: Joi.array().items(RewardsModel.PointsHistory()),
      page: RewardsModel.Page(),
      points: Joi.number(),
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
  static Points() {
    return Joi.object({
      available: Joi.number(),
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
  static Referral() {
    return Joi.object({
      code: Joi.string().allow(""),
    });
  }
  static RewardsAudience() {
    return Joi.object({
      header_user_id: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }
  static RewardsRule() {
    return Joi.object({
      amount: Joi.number(),
    });
  }
  static RewardUser() {
    return Joi.object({
      _id: Joi.string().allow(""),
      active: Joi.boolean(),
      created_at: Joi.string().allow(""),
      referral: RewardsModel.Referral(),
      uid: Joi.number(),
      updated_at: Joi.string().allow(""),
      user_block_reason: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
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
  static SetConfigurationRes() {
    return Joi.object({
      success: Joi.boolean(),
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
  static UserRes() {
    return Joi.object({
      points: RewardsModel.Points(),
      user: RewardsModel.RewardUser(),
    });
  }
}
module.exports = RewardsModel;
