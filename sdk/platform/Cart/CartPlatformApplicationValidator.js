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

  static applyCoupon() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartModel.ApplyCouponRequest().required(),
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

  static createCartDynamicInjection() {
    return Joi.object({
      body: CartModel.CartDynamicInjectionAdd().required(),
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

  static deleteCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: CartModel.DeleteCartRequest().required(),
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

  static getAppCoupons() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    }).required();
  }

  static getAvailableDeliveryModes() {
    return Joi.object({
      areaCode: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
    }).required();
  }

  static getCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      userId: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      assignCardId: Joi.number(),
      buyNow: Joi.boolean(),
    }).required();
  }

  static getCartList() {
    return Joi.object({
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      filterOn: Joi.string().allow(""),
    }).required();
  }

  static getCartShareLink() {
    return Joi.object({
      body: CartModel.GetShareCartLinkRequest().required(),
    }).required();
  }

  static getCartSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
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

  static getItemCount() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
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

  static getShipments() {
    return Joi.object({
      pickAtStoreUid: Joi.number(),
      orderingStoreId: Joi.number(),
      i: Joi.boolean(),
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      addressId: Joi.string().allow(""),
      areaCode: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
    }).required();
  }

  static getStoreAddressByUid() {
    return Joi.object({
      storeUid: Joi.number().required(),
    }).required();
  }

  static overrideCart() {
    return Joi.object({
      body: CartModel.OverrideCheckoutReq().required(),
    }).required();
  }

  static platformAddItems() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      id: Joi.string().allow(""),
      body: CartModel.PlatformAddCartRequest().required(),
    }).required();
  }

  static platformCheckoutCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: CartModel.PlatformCartCheckoutDetailRequest().required(),
    }).required();
  }

  static platformCheckoutCartV2() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: CartModel.PlatformCartCheckoutDetailV2Request().required(),
    }).required();
  }

  static platformUpdateCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      body: CartModel.PlatformUpdateCartRequest().required(),
    }).required();
  }

  static removeAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      userId: Joi.string().allow(""),
    }).required();
  }

  static removeCartDynamicInjection() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static removeCoupon() {
    return Joi.object({
      uid: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    }).required();
  }

  static selectAddress() {
    return Joi.object({
      cartId: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: CartModel.PlatformSelectCartAddressRequest().required(),
    }).required();
  }

  static selectPaymentMode() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      orderType: Joi.string().allow(""),
      body: CartModel.UpdateCartPaymentRequest().required(),
    }).required();
  }

  static selectPaymentModeV2() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      orderType: Joi.string().allow(""),
      body: CartModel.UpdateCartPaymentRequestV2().required(),
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

  static updateCartDynamicInjection() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartModel.CartDynamicInjectionUpdate().required(),
    }).required();
  }

  static updateCartMeta() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartModel.PlatformCartMetaRequest().required(),
    }).required();
  }

  static updateCartMetaConfig() {
    return Joi.object({
      cartMetaId: Joi.string().allow("").required(),
      body: CartModel.CartMetaConfigUpdate().required(),
    }).required();
  }

  static updateCartUser() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: CartModel.UpdateUserCartMapping().required(),
    }).required();
  }

  static updateCartWithSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
      cartId: Joi.string().allow(""),
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

  static updateShipments() {
    return Joi.object({
      i: Joi.boolean(),
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      addressId: Joi.string().allow(""),
      areaCode: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
      body: CartModel.UpdateCartShipmentRequest().required(),
    }).required();
  }

  static validateCouponForPayment() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      addressId: Joi.string().allow(""),
      paymentMode: Joi.string().allow(""),
      paymentIdentifier: Joi.string().allow(""),
      aggregatorName: Joi.string().allow(""),
      merchantCode: Joi.string().allow(""),
    }).required();
  }
}

module.exports = CartValidator;
