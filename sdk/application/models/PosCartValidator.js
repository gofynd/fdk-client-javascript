const Joi = require("joi");
const { Validator } = require("../ApplicationModels");
class PosCartValidator {
  static getCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      assignCardId: Joi.number(),
      buyNow: Joi.boolean(),
    });
  }

  static getCartLastModified() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }

  static addItems() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      body: Validator.AddCartRequest().required(),
    }).required();
  }

  static updateCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      body: Validator.UpdateCartRequest().required(),
    }).required();
  }

  static getItemCount() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    });
  }

  static getCoupons() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    });
  }

  static applyCoupon() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: Validator.ApplyCouponRequest().required(),
    }).required();
  }

  static removeCoupon() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    });
  }

  static getBulkDiscountOffers() {
    return Joi.object({
      itemId: Joi.number(),
      articleId: Joi.string().allow(""),
      uid: Joi.number(),
      slug: Joi.string().allow(""),
    });
  }

  static applyRewardPoints() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      body: Validator.RewardPointRequest().required(),
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
    });
  }

  static addAddress() {
    return Joi.object({
      body: Validator.Address().required(),
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
    }).required();
  }

  static updateAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.Address().required(),
    }).required();
  }

  static removeAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static selectAddress() {
    return Joi.object({
      cartId: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: Validator.SelectCartAddressRequest().required(),
    }).required();
  }

  static selectPaymentMode() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: Validator.UpdateCartPaymentRequest().required(),
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
    });
  }

  static getShipments() {
    return Joi.object({
      pickAtStoreUid: Joi.number(),
      orderingStoreId: Joi.number(),
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      addressId: Joi.string().allow(""),
      areaCode: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
    });
  }

  static updateShipments() {
    return Joi.object({
      i: Joi.boolean(),
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      addressId: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
      body: Validator.UpdateCartShipmentRequest().required(),
    }).required();
  }

  static checkoutCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: Validator.CartPosCheckoutDetailRequest().required(),
    }).required();
  }

  static updateCartMeta() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: Validator.CartMetaRequest().required(),
    }).required();
  }

  static getAvailableDeliveryModes() {
    return Joi.object({
      areaCode: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
    }).required();
  }

  static getStoreAddressByUid() {
    return Joi.object({
      storeUid: Joi.number().required(),
    }).required();
  }

  static getCartShareLink() {
    return Joi.object({
      body: Validator.GetShareCartLinkRequest().required(),
    }).required();
  }

  static getCartSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
    }).required();
  }

  static updateCartWithSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
    }).required();
  }
}
module.exports = PosCartValidator;
