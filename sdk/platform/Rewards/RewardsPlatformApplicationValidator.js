const Joi = require("joi");

const RewardsModel = require("./RewardsPlatformModel");
class RewardsValidator {
  static getGiveawayById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getOfferByName() {
    return Joi.object({
      name: Joi.string().allow("").required(),
    }).required();
  }

  static getRewardsConfiguration() {
    return Joi.object({}).required();
  }

  static getUserDetails() {
    return Joi.object({
      userId: Joi.string().allow("").required(),
    }).required();
  }

  static getUserPointsHistory() {
    return Joi.object({
      userId: Joi.string().allow("").required(),

      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  static saveGiveAway() {
    return Joi.object({
      body: RewardsModel.Giveaway().required(),
    }).required();
  }

  static setRewardsConfiguration() {
    return Joi.object({
      body: RewardsModel.ConfigurationRequest().required(),
    }).required();
  }

  static showGiveaways() {
    return Joi.object({
      pageId: Joi.string().allow("").required(),
      pageSize: Joi.number().required(),
    }).required();
  }

  static showOffers() {
    return Joi.object({}).required();
  }

  static updateGiveAway() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: RewardsModel.Giveaway().required(),
    }).required();
  }

  static updateOfferByName() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      body: RewardsModel.Offer().required(),
    }).required();
  }

  static updateUserStatus() {
    return Joi.object({
      userId: Joi.string().allow("").required(),

      body: RewardsModel.AppUser().required(),
    }).required();
  }
}

module.exports = RewardsValidator;
