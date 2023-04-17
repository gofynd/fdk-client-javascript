const Joi = require("joi");

const RewardsModel = require("./RewardsApplicationModel");
class RewardsValidator {
  static catalogueOrder() {
    return Joi.object({
      body: RewardsModel.CatalogueOrderRequest().required(),
    }).required();
  }

  static getOfferByName() {
    return Joi.object({
      name: Joi.string().allow("").required(),
    }).required();
  }

  static getPoints() {
    return Joi.object({});
  }

  static getPointsHistory() {
    return Joi.object({
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    });
  }

  static orderDiscount() {
    return Joi.object({
      body: RewardsModel.OrderDiscountRequest().required(),
    }).required();
  }

  static redeemReferralCode() {
    return Joi.object({
      body: RewardsModel.RedeemReferralCodeRequest().required(),
    }).required();
  }

  static referral() {
    return Joi.object({});
  }
}

module.exports = RewardsValidator;
