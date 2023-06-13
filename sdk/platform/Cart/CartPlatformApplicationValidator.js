const Joi = require("joi");

const CartModel = require("./CartPlatformModel");
class CartValidator {
  static addAddress() {
    return Joi.object({
      body: CartModel.PlatformAddress().required(),
    }).required();
  }

  static addItems() {
    return Joi.object({
      cartId: Joi.string().allow("").required(),
      b: Joi.boolean(),
      body: CartModel.AddCartRequest().required(),
    }).required();
  }

  static checkCartServiceability() {
    return Joi.object({
      body: CartModel.OpenApiCartServiceabilityRequest().required(),
    }).required();
  }

  static checkoutCart() {
    return Joi.object({
      body: CartModel.OpenApiPlatformCheckoutReq().required(),
    }).required();
  }

  static createCoupon() {
    return Joi.object({
      body: CartModel.CouponAdd().required(),
    }).required();
  }

  static createPromotion() {
    return Joi.object({
      body: CartModel.PromotionAdd().required(),
    }).required();
  }

  static fetchAndvalidateCartItems() {
    return Joi.object({
      body: CartModel.OpenapiCartDetailsRequest().required(),
    }).required();
  }

  static getAbandonedCart() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      anonymousCart: Joi.boolean(),
      lastId: Joi.string().allow(""),
      sortOn: Joi.string().allow(""),
    }).required();
  }

  static getAddressById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      cartId: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      mobileNo: Joi.string().allow(""),
      checkoutMode: Joi.string().allow(""),
      tags: Joi.string().allow(""),
      isDefault: Joi.boolean(),
      userId: Joi.string().allow(""),
    }).required();
  }

  static getAddresses() {
    return Joi.object({
      cartId: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      mobileNo: Joi.string().allow(""),
      checkoutMode: Joi.string().allow(""),
      tags: Joi.string().allow(""),
      isDefault: Joi.boolean(),
      userId: Joi.string().allow(""),
    }).required();
  }

  static getCouponById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getCoupons() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isArchived: Joi.boolean(),
      title: Joi.string().allow(""),
      isPublic: Joi.boolean(),
      isDisplay: Joi.boolean(),
      typeSlug: Joi.string().allow(""),
      code: Joi.string().allow(""),
    }).required();
  }

  static getPromosCouponConfig() {
    return Joi.object({}).required();
  }

  static getPromotionById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getPromotions() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      status: Joi.string().allow(""),
      promoGroup: Joi.string().allow(""),
      promotionType: Joi.string().allow(""),
      fpPanel: Joi.string().allow(""),
      promotionId: Joi.string().allow(""),
    }).required();
  }

  static removeAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      userId: Joi.string().allow(""),
    }).required();
  }

  static updateAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartModel.PlatformAddress().required(),
    }).required();
  }

  static updateCart() {
    return Joi.object({
      cartId: Joi.string().allow("").required(),
      b: Joi.boolean(),
      body: CartModel.UpdateCartRequest().required(),
    }).required();
  }

  static updateCoupon() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartModel.CouponUpdate().required(),
    }).required();
  }

  static updateCouponPartially() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartModel.CouponPartialUpdate().required(),
    }).required();
  }

  static updatePromotion() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartModel.PromotionUpdate().required(),
    }).required();
  }

  static updatePromotionPartially() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartModel.PromotionPartialUpdate().required(),
    }).required();
  }
}

module.exports = CartValidator;
