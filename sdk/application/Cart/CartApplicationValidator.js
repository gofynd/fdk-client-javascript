const Joi = require("joi");

const CartApplicationModel = require("./CartApplicationModel");

/**
 * @typedef addAddress
 * @property {CartApplicationModel.Address} body
 */

/**
 * @typedef addItems
 * @property {boolean} [i] - This is a boolean value. Select `true` to retrieve
 *   all the items added in the cart.
 * @property {boolean} [b] - This is a boolean value. Select `true` to retrieve
 *   the price breakup of cart items.
 * @property {boolean} [p] - This is a boolean value. Select `true` for getting
 *   a payment option in response.
 * @property {string} [areaCode] - Customer servicable area_code
 * @property {boolean} [buyNow] - This is a boolen value. Select `true` to
 *   set/initialize buy now cart
 * @property {string} [id]
 * @property {CartApplicationModel.AddCartRequest} body
 */

/**
 * @typedef applyCoupon
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [p]
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {CartApplicationModel.ApplyCouponRequest} body
 */

/**
 * @typedef applyRewardPoints
 * @property {string} [id]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [buyNow]
 * @property {CartApplicationModel.RewardPointRequest} body
 */

/**
 * @typedef checkoutCart
 * @property {boolean} [buyNow] - This indicates the type of cart to checkout
 * @property {CartApplicationModel.CartCheckoutDetailRequest} body
 */

/**
 * @typedef checkoutCartV2
 * @property {boolean} [buyNow] - This indicates the type of cart to checkout
 * @property {CartApplicationModel.CartCheckoutDetailV2Request} body
 */

/**
 * @typedef deleteCart
 * @property {string} [id] - The unique identifier of the cart.
 */

/**
 * @typedef getAddressById
 * @property {string} id
 * @property {string} [cartId]
 * @property {boolean} [buyNow]
 * @property {string} [mobileNo]
 * @property {string} [checkoutMode]
 * @property {string} [tags]
 * @property {boolean} [isDefault]
 */

/**
 * @typedef getAddresses
 * @property {string} [cartId]
 * @property {boolean} [buyNow]
 * @property {string} [mobileNo]
 * @property {string} [checkoutMode]
 * @property {string} [tags]
 * @property {boolean} [isDefault]
 */

/**
 * @typedef getBulkDiscountOffers
 * @property {number} [itemId] - The Item ID of the product
 * @property {string} [articleId] - Article Mongo ID
 * @property {number} [uid] - UID of the product
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier
 *   of a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 */

/**
 * @typedef getCart
 * @property {string} [id] - The unique identifier of the cart
 * @property {boolean} [i] - This is a boolean value. Select `true` to retrieve
 *   all the items added in the cart.
 * @property {boolean} [b] - This is a boolean value. Select `true` to retrieve
 *   the price breakup of cart items.
 * @property {boolean} [p] - This is a boolean value. Select `true` for getting
 *   a payment option in response.
 * @property {number} [assignCardId] - Token of user's debit or credit card
 * @property {string} [areaCode] - Customer servicable area_code
 * @property {boolean} [buyNow] - This is a boolen value. Select `true` to
 *   set/initialize buy now cart
 */

/**
 * @typedef getCartLastModified
 * @property {string} [id] - The unique identifier of the cart
 */

/**
 * @typedef getCartShareLink
 * @property {CartApplicationModel.GetShareCartLinkRequest} body
 */

/**
 * @typedef getCartSharedItems
 * @property {string} token - Token of the shared short link
 */

/**
 * @typedef getCoupons
 * @property {string} [id]
 * @property {boolean} [buyNow]
 */

/**
 * @typedef getItemCount
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Boolean value to get buy_now cart.
 */

/**
 * @typedef getLadderOffers
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 * @property {string} [storeId] - Store uid of assigned store on PDP page. If
 *   not passed default first created ladder will be returned
 * @property {string} [promotionId] - Get ladder information of given promotion
 *   id explicitely
 * @property {number} [pageSize] - Number of offers to be fetched to show
 */

/**
 * @typedef getPromotionOffers
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier
 *   of a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 * @property {number} [pageSize] - Number of offers to be fetched to show
 * @property {string} [promotionGroup] - Type of promotion groups
 * @property {number} [storeId] - Store id
 */

/**
 * @typedef getShipments
 * @property {boolean} [p] - This is a boolean value. Select `true` for getting
 *   a payment option in response.
 * @property {string} [id] - The unique identifier of the cart
 * @property {boolean} [buyNow]
 * @property {string} [addressId] - ID allotted to the selected address
 * @property {string} [areaCode] - The PIN Code of the destination address, e.g. 400059
 */

/**
 * @typedef removeAddress
 * @property {string} id - ID allotted to the selected address
 */

/**
 * @typedef removeCoupon
 * @property {string} [id]
 * @property {boolean} [buyNow]
 */

/**
 * @typedef selectAddress
 * @property {string} [cartId]
 * @property {boolean} [buyNow]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {CartApplicationModel.SelectCartAddressRequest} body
 */

/**
 * @typedef selectPaymentMode
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {CartApplicationModel.UpdateCartPaymentRequest} body
 */

/**
 * @typedef updateAddress
 * @property {string} id - ID allotted to the selected address
 * @property {CartApplicationModel.Address} body
 */

/**
 * @typedef updateCart
 * @property {string} [id] - The unique identifier of the cart
 * @property {boolean} [i] - This is a boolean value. Select `true` to retrieve
 *   all the items added in the cart.
 * @property {boolean} [b] - This is a boolean value. Select `true` to retrieve
 *   the price breakup of cart items.
 * @property {boolean} [p] - This is a boolean value. Select `true` for getting
 *   a payment option in response.
 * @property {string} [areaCode] - Customer servicable area_code
 * @property {boolean} [buyNow] - This is a boolen value. Select `true` to
 *   set/initialize buy now cart
 * @property {CartApplicationModel.UpdateCartRequest} body
 */

/**
 * @typedef updateCartMeta
 * @property {string} [id] - The unique identifier of the cart
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart
 * @property {CartApplicationModel.CartMetaRequest} body
 */

/**
 * @typedef updateCartWithSharedItems
 * @property {string} token - Token of the shared short link
 * @property {string} action - Operation to perform on the existing cart merge or replace.
 */

/**
 * @typedef validateCouponForPayment
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

class CartApplicationValidator {
  /** @returns {addAddress} */
  static addAddress() {
    return Joi.object({
      body: CartApplicationModel.Address().required(),
    }).required();
  }

  /** @returns {addItems} */
  static addItems() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      p: Joi.boolean(),
      areaCode: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      id: Joi.string().allow(""),
      body: CartApplicationModel.AddCartRequest().required(),
    }).required();
  }

  /** @returns {applyCoupon} */
  static applyCoupon() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartApplicationModel.ApplyCouponRequest().required(),
    }).required();
  }

  /** @returns {applyRewardPoints} */
  static applyRewardPoints() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      body: CartApplicationModel.RewardPointRequest().required(),
    }).required();
  }

  /** @returns {checkoutCart} */
  static checkoutCart() {
    return Joi.object({
      buyNow: Joi.boolean(),
      body: CartApplicationModel.CartCheckoutDetailRequest().required(),
    }).required();
  }

  /** @returns {checkoutCartV2} */
  static checkoutCartV2() {
    return Joi.object({
      buyNow: Joi.boolean(),
      body: CartApplicationModel.CartCheckoutDetailV2Request().required(),
    }).required();
  }

  /** @returns {deleteCart} */
  static deleteCart() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }

  /** @returns {getAddressById} */
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

  /** @returns {getAddresses} */
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

  /** @returns {getBulkDiscountOffers} */
  static getBulkDiscountOffers() {
    return Joi.object({
      itemId: Joi.number(),
      articleId: Joi.string().allow(""),
      uid: Joi.number(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {getCart} */
  static getCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      p: Joi.boolean(),
      assignCardId: Joi.number(),
      areaCode: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    });
  }

  /** @returns {getCartLastModified} */
  static getCartLastModified() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }

  /** @returns {getCartShareLink} */
  static getCartShareLink() {
    return Joi.object({
      body: CartApplicationModel.GetShareCartLinkRequest().required(),
    }).required();
  }

  /** @returns {getCartSharedItems} */
  static getCartSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getCoupons} */
  static getCoupons() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    });
  }

  /** @returns {getItemCount} */
  static getItemCount() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    });
  }

  /** @returns {getLadderOffers} */
  static getLadderOffers() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      storeId: Joi.string().allow(""),
      promotionId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getPromotionOffers} */
  static getPromotionOffers() {
    return Joi.object({
      slug: Joi.string().allow(""),
      pageSize: Joi.number(),
      promotionGroup: Joi.string().allow(""),
      storeId: Joi.number(),
    });
  }

  /** @returns {getShipments} */
  static getShipments() {
    return Joi.object({
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      addressId: Joi.string().allow(""),
      areaCode: Joi.string().allow(""),
    });
  }

  /** @returns {removeAddress} */
  static removeAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {removeCoupon} */
  static removeCoupon() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    });
  }

  /** @returns {selectAddress} */
  static selectAddress() {
    return Joi.object({
      cartId: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: CartApplicationModel.SelectCartAddressRequest().required(),
    }).required();
  }

  /** @returns {selectPaymentMode} */
  static selectPaymentMode() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartApplicationModel.UpdateCartPaymentRequest().required(),
    }).required();
  }

  /** @returns {updateAddress} */
  static updateAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartApplicationModel.Address().required(),
    }).required();
  }

  /** @returns {updateCart} */
  static updateCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      p: Joi.boolean(),
      areaCode: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartApplicationModel.UpdateCartRequest().required(),
    }).required();
  }

  /** @returns {updateCartMeta} */
  static updateCartMeta() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartApplicationModel.CartMetaRequest().required(),
    }).required();
  }

  /** @returns {updateCartWithSharedItems} */
  static updateCartWithSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {validateCouponForPayment} */
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

module.exports = CartApplicationValidator;
