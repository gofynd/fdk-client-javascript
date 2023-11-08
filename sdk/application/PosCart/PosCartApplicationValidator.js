const Joi = require("joi");

const PosCartApplicationModel = require("./PosCartApplicationModel");

/**
 * @typedef AddAddressParam
 * @property {PosCartApplicationModel.Address} body
 */

/**
 * @typedef AddItemsParam
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {string} [areaCode]
 * @property {boolean} [buyNow]
 * @property {string} [id]
 * @property {PosCartApplicationModel.AddCartRequest} body
 */

/**
 * @typedef ApplyCouponParam
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [p]
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {PosCartApplicationModel.ApplyCouponRequest} body
 */

/**
 * @typedef ApplyRewardPointsParam
 * @property {string} [id]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [buyNow]
 * @property {PosCartApplicationModel.RewardPointRequest} body
 */

/**
 * @typedef CheckoutCartParam
 * @property {string} [id]
 * @property {PosCartApplicationModel.CartPosCheckoutDetailRequest} body
 */

/**
 * @typedef GetAddressByIdParam
 * @property {string} id
 * @property {string} [cartId]
 * @property {boolean} [buyNow]
 * @property {string} [mobileNo]
 * @property {string} [checkoutMode]
 * @property {string} [tags]
 * @property {boolean} [isDefault]
 */

/**
 * @typedef GetAddressesParam
 * @property {string} [cartId]
 * @property {boolean} [buyNow]
 * @property {string} [mobileNo]
 * @property {string} [checkoutMode]
 * @property {string} [tags]
 * @property {boolean} [isDefault]
 */

/**
 * @typedef GetAvailableDeliveryModesParam
 * @property {string} areaCode
 * @property {string} [id]
 */

/**
 * @typedef GetBulkDiscountOffersParam
 * @property {number} [itemId] - The Item ID of the product
 * @property {string} [articleId] - Article Mongo ID
 * @property {number} [uid] - UID of the product
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier
 *   of a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 */

/**
 * @typedef GetCartParam
 * @property {string} [id]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [c]
 * @property {number} [assignCardId]
 * @property {string} [areaCode]
 * @property {boolean} [buyNow]
 */

/**
 * @typedef GetCartLastModifiedParam
 * @property {string} [id]
 */

/**
 * @typedef GetCartShareLinkParam
 * @property {PosCartApplicationModel.GetShareCartLinkRequest} body
 */

/**
 * @typedef GetCartSharedItemsParam
 * @property {string} token - Token of the shared short link
 */

/**
 * @typedef GetCouponsParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 */

/**
 * @typedef GetItemCountParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow]
 */

/**
 * @typedef GetShipmentsParam
 * @property {number} [pickAtStoreUid]
 * @property {number} [orderingStoreId]
 * @property {boolean} [p] - This is a boolean value. Select `true` for getting
 *   a payment option in response.
 * @property {string} [id] - The unique identifier of the cart
 * @property {string} [addressId] - ID allotted to the selected address
 * @property {string} [areaCode] - The PIN Code of the destination address, e.g. 400059
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 */

/**
 * @typedef GetStoreAddressByUidParam
 * @property {number} storeUid
 */

/**
 * @typedef RemoveAddressParam
 * @property {string} id - ID allotted to the selected address
 */

/**
 * @typedef RemoveCouponParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 */

/**
 * @typedef SelectAddressParam
 * @property {string} [cartId]
 * @property {boolean} [buyNow]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {PosCartApplicationModel.SelectCartAddressRequest} body
 */

/**
 * @typedef SelectPaymentModeParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {PosCartApplicationModel.UpdateCartPaymentRequest} body
 */

/**
 * @typedef UpdateAddressParam
 * @property {string} id - ID allotted to the selected address
 * @property {PosCartApplicationModel.Address} body
 */

/**
 * @typedef UpdateCartParam
 * @property {string} [id]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {string} [areaCode]
 * @property {boolean} [buyNow]
 * @property {PosCartApplicationModel.UpdateCartRequest} body
 */

/**
 * @typedef UpdateCartMetaParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {PosCartApplicationModel.CartMetaRequest} body
 */

/**
 * @typedef UpdateCartWithSharedItemsParam
 * @property {string} token - Token of the shared short link
 * @property {string} action - Operation to perform on the existing cart merge or replace.
 */

/**
 * @typedef UpdateShipmentsParam
 * @property {boolean} [i] - This is a boolean value. Select `true` to retrieve
 *   all the items added in the cart.
 * @property {boolean} [p] - This is a boolean value. Select `true` for getting
 *   a payment option in response.
 * @property {string} [id] - The unique identifier of the cart
 * @property {string} [addressId] - ID allotted to an address
 * @property {string} [areaCode] - The PIN Code of the destination address, e.g. 400059
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {PosCartApplicationModel.UpdateCartShipmentRequest} body
 */

/**
 * @typedef ValidateCouponForPaymentParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {string} [addressId]
 * @property {string} [paymentMode]
 * @property {string} [paymentIdentifier]
 * @property {string} [aggregatorName]
 * @property {string} [merchantCode]
 * @property {string} [iin]
 * @property {string} [network]
 * @property {string} [type]
 * @property {string} [cardId]
 */

class PosCartApplicationValidator {
  /** @returns {AddAddressParam} */
  static addAddress() {
    return Joi.object({
      body: PosCartApplicationModel.Address().required(),
    }).required();
  }

  /** @returns {AddItemsParam} */
  static addItems() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      areaCode: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      id: Joi.string().allow(""),
      body: PosCartApplicationModel.AddCartRequest().required(),
    }).required();
  }

  /** @returns {ApplyCouponParam} */
  static applyCoupon() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: PosCartApplicationModel.ApplyCouponRequest().required(),
    }).required();
  }

  /** @returns {ApplyRewardPointsParam} */
  static applyRewardPoints() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      body: PosCartApplicationModel.RewardPointRequest().required(),
    }).required();
  }

  /** @returns {CheckoutCartParam} */
  static checkoutCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: PosCartApplicationModel.CartPosCheckoutDetailRequest().required(),
    }).required();
  }

  /** @returns {GetAddressByIdParam} */
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

  /** @returns {GetAddressesParam} */
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

  /** @returns {GetAvailableDeliveryModesParam} */
  static getAvailableDeliveryModes() {
    return Joi.object({
      areaCode: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetBulkDiscountOffersParam} */
  static getBulkDiscountOffers() {
    return Joi.object({
      itemId: Joi.number(),
      articleId: Joi.string().allow(""),
      uid: Joi.number(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {GetCartParam} */
  static getCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      c: Joi.boolean(),
      assignCardId: Joi.number(),
      areaCode: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    });
  }

  /** @returns {GetCartLastModifiedParam} */
  static getCartLastModified() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }

  /** @returns {GetCartShareLinkParam} */
  static getCartShareLink() {
    return Joi.object({
      body: PosCartApplicationModel.GetShareCartLinkRequest().required(),
    }).required();
  }

  /** @returns {GetCartSharedItemsParam} */
  static getCartSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCouponsParam} */
  static getCoupons() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    });
  }

  /** @returns {GetItemCountParam} */
  static getItemCount() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    });
  }

  /** @returns {GetShipmentsParam} */
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

  /** @returns {GetStoreAddressByUidParam} */
  static getStoreAddressByUid() {
    return Joi.object({
      storeUid: Joi.number().required(),
    }).required();
  }

  /** @returns {RemoveAddressParam} */
  static removeAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {RemoveCouponParam} */
  static removeCoupon() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    });
  }

  /** @returns {SelectAddressParam} */
  static selectAddress() {
    return Joi.object({
      cartId: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: PosCartApplicationModel.SelectCartAddressRequest().required(),
    }).required();
  }

  /** @returns {SelectPaymentModeParam} */
  static selectPaymentMode() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: PosCartApplicationModel.UpdateCartPaymentRequest().required(),
    }).required();
  }

  /** @returns {UpdateAddressParam} */
  static updateAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: PosCartApplicationModel.Address().required(),
    }).required();
  }

  /** @returns {UpdateCartParam} */
  static updateCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      areaCode: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: PosCartApplicationModel.UpdateCartRequest().required(),
    }).required();
  }

  /** @returns {UpdateCartMetaParam} */
  static updateCartMeta() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: PosCartApplicationModel.CartMetaRequest().required(),
    }).required();
  }

  /** @returns {UpdateCartWithSharedItemsParam} */
  static updateCartWithSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {UpdateShipmentsParam} */
  static updateShipments() {
    return Joi.object({
      i: Joi.boolean(),
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      addressId: Joi.string().allow(""),
      areaCode: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
      body: PosCartApplicationModel.UpdateCartShipmentRequest().required(),
    }).required();
  }

  /** @returns {ValidateCouponForPaymentParam} */
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
}

module.exports = PosCartApplicationValidator;
