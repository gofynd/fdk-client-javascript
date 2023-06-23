const Joi = require("joi");

const CartModel = require("./CartPlatformModel");
class CartValidator {
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

  static createCartMetaConfig() {
    return Joi.object({
      body: CartModel.CartMetaConfigAdd().required(),
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

  static fetchCartMetaConfig() {
    return Joi.object({}).required();
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

  static getAbandonedCartDetails() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
    }).required();
  }

  static getCouponById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getCouponCodeExists() {
    return Joi.object({
      code: Joi.string().allow(""),
    }).required();
  }

  static getCouponOptionValues() {
    return Joi.object({}).required();
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
    return Joi.object({
      entityType: Joi.string().allow(""),
      isHidden: Joi.boolean(),
    }).required();
  }

  static getPromotionById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getPromotionCodeExists() {
    return Joi.object({
      code: Joi.string().allow(""),
    }).required();
  }

  static getPromotions() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      isActive: Joi.boolean(),
      promoGroup: Joi.string().allow(""),
      promotionType: Joi.string().allow(""),
      fpPanel: Joi.string().allow(""),
      promotionId: Joi.string().allow(""),
    }).required();
  }

  static overrideCart() {
    return Joi.object({
      body: CartModel.OverrideCheckoutReq().required(),
    }).required();
  }

  static updateCart() {
    return Joi.object({
      cartId: Joi.string().allow("").required(),
      b: Joi.boolean(),
      body: CartModel.UpdateCartRequest().required(),
    }).required();
  }

  static updateCartMetaConfig() {
    return Joi.object({
      cartMetaId: Joi.string().allow("").required(),
      body: CartModel.CartMetaConfigUpdate().required(),
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
