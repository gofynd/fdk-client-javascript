const Joi = require("joi");

const CartModel = require("./CartApplicationModel");
class CartValidator {
  static getCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      assignCardId: Joi.number(),
      areaCode: Joi.string().allow(""),
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
      areaCode: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartModel.AddCartRequest().required(),
    }).required();
  }

  static updateCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      areaCode: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartModel.UpdateCartRequest().required(),
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
      body: CartModel.ApplyCouponRequest().required(),
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
      body: CartModel.RewardPointRequest().required(),
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
      body: CartModel.Address().required(),
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
      body: CartModel.Address().required(),
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
      body: CartModel.SelectCartAddressRequest().required(),
    }).required();
  }

  static selectPaymentMode() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartModel.UpdateCartPaymentRequest().required(),
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
      iin: Joi.string().allow(""),
      network: Joi.string().allow(""),
      type: Joi.string().allow(""),
      cardId: Joi.string().allow(""),
    });
  }

  static getShipments() {
    return Joi.object({
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      addressId: Joi.string().allow(""),
      areaCode: Joi.string().allow(""),
    });
  }

  static checkoutCart() {
    return Joi.object({
      buyNow: Joi.boolean(),
      body: CartModel.CartCheckoutDetailRequest().required(),
    }).required();
  }

  static updateCartMeta() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartModel.CartMetaRequest().required(),
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

  static updateCartWithSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
    }).required();
  }

  static getPromotionOffers() {
    return Joi.object({
      slug: Joi.string().allow(""),
      pageSize: Joi.number(),
      promotionGroup: Joi.string().allow(""),
    });
  }

  static getLadderOffers() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      storeId: Joi.string().allow(""),
      promotionId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }
}
module.exports = CartValidator;