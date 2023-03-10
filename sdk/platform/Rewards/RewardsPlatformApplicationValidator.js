const Joi = require("joi");
const RewardsModel = require("./RewardsPlatformModel");

class RewardsValidator {
  static getGiveaways() {
    return Joi.object({
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  static createGiveaway() {
    return Joi.object({
      body: RewardsModel.Giveaway().required(),
    }).required();
  }

  static getGiveawayByID() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateGiveaway() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: RewardsModel.Giveaway().required(),
    }).required();
  }

  static getOffers() {
    return Joi.object({}).required();
  }

  static getOfferByName() {
    return Joi.object({
      cookie: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    }).required();
  }

  static updateOfferByName() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      body: RewardsModel.Offer().required(),
    }).required();
  }

  static getUserAvailablePoints() {
    return Joi.object({
      userId: Joi.string().allow("").required(),
    }).required();
  }

  static updateUserStatus() {
    return Joi.object({
      userId: Joi.string().allow("").required(),
      body: RewardsModel.AppUser().required(),
    }).required();
  }

  static getUserPointsHistory() {
    return Joi.object({
      userId: Joi.string().allow("").required(),
      pageId: Joi.string().allow(""),
      pageLimit: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }
}

module.exports = RewardsValidator;
