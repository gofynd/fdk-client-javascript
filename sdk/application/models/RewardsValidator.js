const Joi = require("joi");
const { Validator } = require("../ApplicationModels");
class RewardsValidator {
  static getOfferByName() {
    return Joi.object({
      name: Joi.string().allow("").required(),
    }).required();
  }

  static catalogueOrder() {
    return Joi.object({
      body: Validator.CatalogueOrderRequest().required(),
    }).required();
  }

  static getPointsHistory() {
    return Joi.object({
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    });
  }

  static getPoints() {
    return Joi.object({});
  }

  static referral() {
    return Joi.object({});
  }

  static orderDiscount() {
    return Joi.object({
      body: Validator.OrderDiscountRequest().required(),
    }).required();
  }

  static redeemReferralCode() {
    return Joi.object({
      body: Validator.RedeemReferralCodeRequest().required(),
    }).required();
  }
}
module.exports = RewardsValidator;
