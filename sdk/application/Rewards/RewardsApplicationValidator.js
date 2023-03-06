const Joi = require("joi");

const RewardsModel = require("./RewardsApplicationModel");
class RewardsValidator {
  static getOfferByName() {
    return Joi.object({
      name: Joi.string().allow("").required(),
    }).required();
  }

  static catalogueOrder() {
    return Joi.object({
      body: RewardsModel.CatalogueOrderRequest().required(),
    }).required();
  }

  static getUserPointsHistory() {
    return Joi.object({
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    });
  }

  static getUserPoints() {
    return Joi.object({});
  }

  static getUserReferralDetails() {
    return Joi.object({});
  }

  static getOrderDiscount() {
    return Joi.object({
      body: RewardsModel.OrderDiscountRequest().required(),
    }).required();
  }

  static redeemReferralCode() {
    return Joi.object({
      body: RewardsModel.RedeemReferralCodeRequest().required(),
    }).required();
  }
}
module.exports = RewardsValidator;
