const Joi = require("joi");

const CartApplicationModel = require("./CartApplicationModel");

/**
 * @typedef AddAddressParam
 * @property {CartApplicationModel.Address} body
 */

/**
 * @typedef AddItemsParam
 * @property {boolean} [i] - Select `true` to retrieve all the items added in the cart.
 * @property {boolean} [b] - Select `true` to retrieve the price breakup of cart items.
 * @property {string} [areaCode] - Customer servicable area_code.
 * @property {boolean} [buyNow] - Select `true` to set/initialize buy now cart.
 * @property {string} [id] - The unique identifier of the cart.
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {CartApplicationModel.AddCartRequest} body
 */

/**
 * @typedef ApplyCouponParam
 * @property {boolean} [i] - Select `true` to retrieve all the items added in the cart.
 * @property {boolean} [b] - Select `true` to retrieve the price breakup of cart items.
 * @property {boolean} [p] - Select `true` for getting a payment option in response.
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart.
 * @property {string} [cartType] - The type of cart.
 * @property {CartApplicationModel.ApplyCouponRequest} body
 */

/**
 * @typedef ApplyRewardPointsParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [i] - Select `true` to retrieve all the items added in the cart.
 * @property {boolean} [b] - Select `true` to retrieve the price breakup of cart items.
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart.
 * @property {CartApplicationModel.RewardPointRequest} body
 */

/**
 * @typedef CheckoutCartParam
 * @property {boolean} [buyNow] - This indicates the type of cart to checkout.
 * @property {string} [cartType] - The type of cart.
 * @property {CartApplicationModel.CartCheckoutDetailRequest} body
 */

/**
 * @typedef CheckoutCartV2Param
 * @property {boolean} [buyNow] - This indicates the type of cart to checkout.
 * @property {string} [cartType] - The type of cart.
 * @property {CartApplicationModel.CartCheckoutDetailV2Request} body
 */

/**
 * @typedef DeleteCartParam
 * @property {string} [id] - The unique identifier of the cart.
 */

/**
 * @typedef GetAddressByIdParam
 * @property {string} id - ID allotted to the selected address.
 * @property {string} [cartId] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart.
 * @property {string} [mobileNo] - Mobile number of the customer.
 * @property {string} [checkoutMode] - Option to checkout for self or for others.
 * @property {string} [tags] - Tag given to an address, e.g. work, home, office, shop.
 * @property {boolean} [isDefault] - This is a boolean value. Select `true` to
 *   fetch the default address.
 */

/**
 * @typedef GetAddressesParam
 * @property {string} [cartId] - The unique identifier of the user cart.
 * @property {boolean} [buyNow] - Whether to get buy_now cart.
 * @property {string} [mobileNo] - Mobile number of the customer.
 * @property {string} [checkoutMode] - Option to checkout for self or for others.
 * @property {string} [tags] - Tag given to an address, e.g. work, home, office, shop.
 * @property {boolean} [isDefault] - Select `true` to fetch the default address.
 */

/**
 * @typedef GetBulkDiscountOffersParam
 * @property {number} [itemId] - The Item ID of the product.
 * @property {string} [articleId] - Article Mongo ID.
 * @property {number} [uid] - UID of the product.
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier
 *   of a product.
 */

/**
 * @typedef GetCartParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [i] - Select `true` to retrieve all the items added in the cart.
 * @property {boolean} [b] - Select `true` to retrieve the price breakup of cart items.
 * @property {boolean} [c] - Select `true` to retrieve the cod charges in
 *   breakup of cart items.
 * @property {number} [assignCardId] - Token of user's debit or credit card.
 * @property {string} [areaCode] - Customer servicable area_code.
 * @property {boolean} [buyNow] - Select `true` to set/initialize buy now cart.
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 */

/**
 * @typedef GetCartLastModifiedParam
 * @property {string} [id] - The unique identifier of the cart.
 */

/**
 * @typedef GetCartShareLinkParam
 * @property {CartApplicationModel.GetShareCartLinkRequest} body
 */

/**
 * @typedef GetCartSharedItemsParam
 * @property {string} token - Token of the shared short link.
 */

/**
 * @typedef GetCouponsParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Whether to get buy_now cart.
 * @property {string} [slug] - Product slug to fetch the available coupons.
 * @property {string} [storeId] - Unique identifier of a store.
 */

/**
 * @typedef GetItemCountParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Boolean value to get buy_now cart.
 */

/**
 * @typedef GetLadderOffersParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product.
 * @property {string} [storeId] - Store uid of assigned store on PDP page. If
 *   not passed default first created ladder will be returned.
 * @property {string} [promotionId] - Get ladder information of given promotion
 *   id explicitely.
 * @property {number} [pageSize] - Number of offers to be fetched to show.
 */

/**
 * @typedef GetPromotionOffersParam
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier
 *   of a product.
 * @property {number} [pageSize] - Number of offers to be fetched to show.
 * @property {string} [promotionGroup] - Type of promotion groups.
 * @property {number} [storeId] - Unique identifier of a store.
 * @property {string} [cartType] - The type of cart.
 */

/**
 * @typedef GetPromotionPaymentOffersParam
 * @property {string} [id] - Cart id of the user cart .
 * @property {number} [uid] - Cart uid of the user cart .
 */

/**
 * @typedef GetShipmentsParam
 * @property {boolean} [p] - Select `true` for getting a payment option in response.
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart.
 * @property {string} [addressId] - ID allotted to the selected address.
 * @property {string} [areaCode] - The PIN Code of the destination address, e.g. 400059.
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself. Digital - If the
 *   customer wants to buy digital voucher ( for jiogames ).
 */

/**
 * @typedef RemoveAddressParam
 * @property {string} id - ID allotted to the selected address.
 */

/**
 * @typedef RemoveCouponParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Wheter to get buy_now cart.
 */

/**
 * @typedef SelectAddressParam
 * @property {string} [cartId] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Whether to get buy_now cart.
 * @property {boolean} [i] - Select `true` to retrieve all the items added in the cart.
 * @property {boolean} [b] - Select `true` to retrieve the price breakup of cart items.
 * @property {CartApplicationModel.SelectCartAddressRequest} body
 */

/**
 * @typedef SelectPaymentModeParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Whether to get buy_now cart.
 * @property {CartApplicationModel.UpdateCartPaymentRequest} body
 */

/**
 * @typedef UpdateAddressParam
 * @property {string} id - ID allotted to the selected address.
 * @property {CartApplicationModel.Address} body
 */

/**
 * @typedef UpdateCartParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [i] - Select `true` to retrieve all the items added in the cart.
 * @property {boolean} [b] - Select `true` to retrieve the price breakup of cart items.
 * @property {string} [areaCode] - Customer servicable area_code.
 * @property {boolean} [buyNow] - Select `true` to set/initialize buy now cart.
 * @property {string} [cartType] - The type of cart.
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {CartApplicationModel.UpdateCartRequest} body
 */

/**
 * @typedef UpdateCartMetaParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Whether to get buy_now cart.
 * @property {CartApplicationModel.CartMetaRequest} body
 */

/**
 * @typedef UpdateCartWithSharedItemsParam
 * @property {string} token - Token of the shared short link.
 * @property {string} action - Operation to perform on the existing cart merge or replace.
 */

/**
 * @typedef ValidateCouponForPaymentParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Whether to get buy_now cart.
 * @property {string} [addressId] - ID allotted to an address.
 * @property {string} [paymentMode] - Payment mode selected by the customer.
 * @property {string} [paymentIdentifier] - Identifier of payment like ICIC, PAYTM.
 * @property {string} [aggregatorName] - Payment gateway identifier.
 * @property {string} [merchantCode] - Identifier used by payment gateway for a
 *   given payment mode, e.g. NB_ICIC, PAYTM.
 * @property {string} [iin] - Debit/Credit card prefix (first 6 digit).
 * @property {string} [network] - Credit/Debit card issuer, e.g. VISA, MASTERCARD, RUPAY.
 * @property {string} [type] - Card type, e.g. Credit, Debit.
 * @property {string} [cardId] - Saved card token reference id.
 * @property {string} [cartType] - Type of the cart.
 */

class CartApplicationValidator {
  /** @returns {AddAddressParam} */
  static addAddress() {
    return Joi.object({
      body: CartApplicationModel.Address().required(),
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
      orderType: Joi.string().allow(""),
      body: CartApplicationModel.AddCartRequest().required(),
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
      cartType: Joi.string().allow(""),
      body: CartApplicationModel.ApplyCouponRequest().required(),
    }).required();
  }

  /** @returns {ApplyRewardPointsParam} */
  static applyRewardPoints() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      body: CartApplicationModel.RewardPointRequest().required(),
    }).required();
  }

  /** @returns {CheckoutCartParam} */
  static checkoutCart() {
    return Joi.object({
      buyNow: Joi.boolean(),
      cartType: Joi.string().allow(""),
      body: CartApplicationModel.CartCheckoutDetailRequest().required(),
    }).required();
  }

  /** @returns {CheckoutCartV2Param} */
  static checkoutCartV2() {
    return Joi.object({
      buyNow: Joi.boolean(),
      cartType: Joi.string().allow(""),
      body: CartApplicationModel.CartCheckoutDetailV2Request().required(),
    }).required();
  }

  /** @returns {DeleteCartParam} */
  static deleteCart() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
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
      orderType: Joi.string().allow(""),
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
      body: CartApplicationModel.GetShareCartLinkRequest().required(),
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
      slug: Joi.string().allow(""),
      storeId: Joi.string().allow(""),
    });
  }

  /** @returns {GetItemCountParam} */
  static getItemCount() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    });
  }

  /** @returns {GetLadderOffersParam} */
  static getLadderOffers() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      storeId: Joi.string().allow(""),
      promotionId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetPromotionOffersParam} */
  static getPromotionOffers() {
    return Joi.object({
      slug: Joi.string().allow(""),
      pageSize: Joi.number(),
      promotionGroup: Joi.string().allow(""),
      storeId: Joi.number(),
      cartType: Joi.string().allow(""),
    });
  }

  /** @returns {GetPromotionPaymentOffersParam} */
  static getPromotionPaymentOffers() {
    return Joi.object({
      id: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {GetShipmentsParam} */
  static getShipments() {
    return Joi.object({
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      addressId: Joi.string().allow(""),
      areaCode: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
    });
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
      body: CartApplicationModel.SelectCartAddressRequest().required(),
    }).required();
  }

  /** @returns {SelectPaymentModeParam} */
  static selectPaymentMode() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartApplicationModel.UpdateCartPaymentRequest().required(),
    }).required();
  }

  /** @returns {UpdateAddressParam} */
  static updateAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartApplicationModel.Address().required(),
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
      cartType: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
      body: CartApplicationModel.UpdateCartRequest().required(),
    }).required();
  }

  /** @returns {UpdateCartMetaParam} */
  static updateCartMeta() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartApplicationModel.CartMetaRequest().required(),
    }).required();
  }

  /** @returns {UpdateCartWithSharedItemsParam} */
  static updateCartWithSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
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
      cartType: Joi.string().allow(""),
    });
  }
}

module.exports = CartApplicationValidator;
