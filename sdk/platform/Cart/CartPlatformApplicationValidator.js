const Joi = require("joi");

const CartPlatformModel = require("./CartPlatformModel");

/**
 * @typedef addAddress
 * @property {CartPlatformModel.PlatformAddress} body
 */

/**
 * @typedef addItems
 * @property {string} cartId - Current Cart _id
 * @property {boolean} [b]
 * @property {string} [userId]
 * @property {CartPlatformModel.AddCartRequest} body
 */

/**
 * @typedef applyCoupon
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [p]
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {CartPlatformModel.ApplyCouponRequest} body
 */

/**
 * @typedef checkCartServiceability
 * @property {CartPlatformModel.OpenApiCartServiceabilityRequest} body
 */

/**
 * @typedef checkoutCart
 * @property {CartPlatformModel.OpenApiPlatformCheckoutReq} body
 */

/**
 * @typedef createCartDynamicInjection
 * @property {CartPlatformModel.CartDynamicInjectionAdd} body
 */

/**
 * @typedef createCartMetaConfig
 * @property {CartPlatformModel.CartMetaConfigAdd} body
 */

/**
 * @typedef createCoupon
 * @property {CartPlatformModel.CouponAdd} body
 */

/**
 * @typedef createPromotion
 * @property {CartPlatformModel.PromotionAdd} body
 */

/**
 * @typedef deleteCart
 * @property {string} [id] - The unique identifier of the cart.
 * @property {CartPlatformModel.DeleteCartRequest} body
 */

/**
 * @typedef fetchAndvalidateCartItems
 * @property {CartPlatformModel.OpenapiCartDetailsRequest} body
 */

/** @typedef fetchCartMetaConfig */

/**
 * @typedef getAbandonedCart
 * @property {string} [userId]
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {string} [fromDate]
 * @property {string} [toDate]
 * @property {boolean} [anonymousCart]
 * @property {string} [lastId]
 * @property {string} [sortOn]
 */

/**
 * @typedef getAbandonedCartDetails
 * @property {string} [userId]
 * @property {string} [id]
 * @property {boolean} [i]
 * @property {boolean} [b]
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
 * @property {string} [userId]
 */

/**
 * @typedef getAddresses
 * @property {string} [cartId]
 * @property {boolean} [buyNow]
 * @property {string} [mobileNo]
 * @property {string} [checkoutMode]
 * @property {string} [tags]
 * @property {boolean} [isDefault]
 * @property {string} [userId]
 */

/**
 * @typedef getAppCoupons
 * @property {string} [id]
 * @property {boolean} [buyNow]
 */

/**
 * @typedef getAvailableDeliveryModes
 * @property {string} areaCode
 * @property {string} [id]
 */

/**
 * @typedef getCart
 * @property {string} [id]
 * @property {string} [userId]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {number} [assignCardId]
 * @property {boolean} [buyNow]
 */

/**
 * @typedef getCartList
 * @property {string} [fromDate]
 * @property {string} [toDate]
 * @property {string} [filterOn]
 */

/**
 * @typedef getCartShareLink
 * @property {CartPlatformModel.GetShareCartLinkRequest} body
 */

/**
 * @typedef getCartSharedItems
 * @property {string} token - Token of the shared short link
 */

/**
 * @typedef getCouponById
 * @property {string} id
 */

/**
 * @typedef getCouponCodeExists
 * @property {string} [code]
 */

/** @typedef getCouponOptionValues */

/**
 * @typedef getCoupons
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {boolean} [isArchived]
 * @property {string} [title]
 * @property {boolean} [isPublic]
 * @property {boolean} [isDisplay]
 * @property {string} [typeSlug]
 * @property {string} [code]
 */

/**
 * @typedef getItemCount
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow]
 */

/**
 * @typedef getPromosCouponConfig
 * @property {string} [entityType] - Entity_type as promotion or coupon
 * @property {boolean} [isHidden] - Promo-coupon config shown or not
 */

/**
 * @typedef getPromotionById
 * @property {string} id
 */

/**
 * @typedef getPromotionCodeExists
 * @property {string} [code]
 */

/**
 * @typedef getPromotions
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {string} [q]
 * @property {boolean} [isActive]
 * @property {string} [promoGroup]
 * @property {string} [promotionType]
 * @property {string} [fpPanel]
 * @property {string} [promotionId]
 */

/**
 * @typedef getShipments
 * @property {number} [pickAtStoreUid]
 * @property {number} [orderingStoreId]
 * @property {boolean} [i] - This is a boolean value. Select `true` to retrieve
 *   all the items added in the cart.
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
 * @typedef getStoreAddressByUid
 * @property {number} storeUid
 */

/**
 * @typedef overrideCart
 * @property {CartPlatformModel.OverrideCheckoutReq} body
 */

/**
 * @typedef platformAddItems
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [buyNow]
 * @property {string} [id]
 * @property {CartPlatformModel.PlatformAddCartRequest} body
 */

/**
 * @typedef platformCheckoutCart
 * @property {string} [id]
 * @property {CartPlatformModel.PlatformCartCheckoutDetailRequest} body
 */

/**
 * @typedef platformCheckoutCartV2
 * @property {string} [id]
 * @property {CartPlatformModel.PlatformCartCheckoutDetailV2Request} body
 */

/**
 * @typedef platformUpdateCart
 * @property {string} [id]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [buyNow]
 * @property {CartPlatformModel.PlatformUpdateCartRequest} body
 */

/**
 * @typedef removeAddress
 * @property {string} id - ID allotted to the selected address
 * @property {string} [userId] - Option to delete address for the provided user_id.
 */

/**
 * @typedef removeCartDynamicInjection
 * @property {string} id
 */

/**
 * @typedef removeCoupon
 * @property {string} [uid]
 * @property {boolean} [buyNow]
 */

/**
 * @typedef selectAddress
 * @property {string} [cartId]
 * @property {boolean} [buyNow]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {CartPlatformModel.PlatformSelectCartAddressRequest} body
 */

/**
 * @typedef selectPaymentMode
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {CartPlatformModel.UpdateCartPaymentRequest} body
 */

/**
 * @typedef selectPaymentModeV2
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {CartPlatformModel.UpdateCartPaymentRequestV2} body
 */

/**
 * @typedef updateAddress
 * @property {string} id - ID allotted to the selected address
 * @property {CartPlatformModel.PlatformAddress} body
 */

/**
 * @typedef updateCart
 * @property {string} cartId - Current Cart _id
 * @property {boolean} [b]
 * @property {string} [userId]
 * @property {CartPlatformModel.UpdateCartRequest} body
 */

/**
 * @typedef updateCartDynamicInjection
 * @property {string} id
 * @property {CartPlatformModel.CartDynamicInjectionUpdate} body
 */

/**
 * @typedef updateCartMeta
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {CartPlatformModel.PlatformCartMetaRequest} body
 */

/**
 * @typedef updateCartMetaConfig
 * @property {string} cartMetaId
 * @property {CartPlatformModel.CartMetaConfigUpdate} body
 */

/**
 * @typedef updateCartUser
 * @property {string} [id]
 * @property {CartPlatformModel.UpdateUserCartMapping} body
 */

/**
 * @typedef updateCartWithSharedItems
 * @property {string} token - Token of the shared short link
 * @property {string} action - Operation to perform on the existing cart merge or replace.
 * @property {string} [cartId]
 */

/**
 * @typedef updateCoupon
 * @property {string} id
 * @property {CartPlatformModel.CouponUpdate} body
 */

/**
 * @typedef updateCouponPartially
 * @property {string} id
 * @property {CartPlatformModel.CouponPartialUpdate} body
 */

/**
 * @typedef updatePromotion
 * @property {string} id
 * @property {CartPlatformModel.PromotionUpdate} body
 */

/**
 * @typedef updatePromotionPartially
 * @property {string} id
 * @property {CartPlatformModel.PromotionPartialUpdate} body
 */

/**
 * @typedef updateShipments
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
 * @property {CartPlatformModel.UpdateCartShipmentRequest} body
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
 */

class CartPlatformApplicationValidator {
  /** @returns {addAddress} */
  static addAddress() {
    return Joi.object({
      body: CartPlatformModel.PlatformAddress().required(),
    }).required();
  }

  /** @returns {addItems} */
  static addItems() {
    return Joi.object({
      cartId: Joi.string().allow("").required(),
      b: Joi.boolean(),
      userId: Joi.string().allow(""),
      body: CartPlatformModel.AddCartRequest().required(),
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
      body: CartPlatformModel.ApplyCouponRequest().required(),
    }).required();
  }

  /** @returns {checkCartServiceability} */
  static checkCartServiceability() {
    return Joi.object({
      body: CartPlatformModel.OpenApiCartServiceabilityRequest().required(),
    }).required();
  }

  /** @returns {checkoutCart} */
  static checkoutCart() {
    return Joi.object({
      body: CartPlatformModel.OpenApiPlatformCheckoutReq().required(),
    }).required();
  }

  /** @returns {createCartDynamicInjection} */
  static createCartDynamicInjection() {
    return Joi.object({
      body: CartPlatformModel.CartDynamicInjectionAdd().required(),
    }).required();
  }

  /** @returns {createCartMetaConfig} */
  static createCartMetaConfig() {
    return Joi.object({
      body: CartPlatformModel.CartMetaConfigAdd().required(),
    }).required();
  }

  /** @returns {createCoupon} */
  static createCoupon() {
    return Joi.object({
      body: CartPlatformModel.CouponAdd().required(),
    }).required();
  }

  /** @returns {createPromotion} */
  static createPromotion() {
    return Joi.object({
      body: CartPlatformModel.PromotionAdd().required(),
    }).required();
  }

  /** @returns {deleteCart} */
  static deleteCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: CartPlatformModel.DeleteCartRequest().required(),
    }).required();
  }

  /** @returns {fetchAndvalidateCartItems} */
  static fetchAndvalidateCartItems() {
    return Joi.object({
      body: CartPlatformModel.OpenapiCartDetailsRequest().required(),
    }).required();
  }

  /** @returns {fetchCartMetaConfig} */
  static fetchCartMetaConfig() {
    return Joi.object({}).required();
  }

  /** @returns {getAbandonedCart} */
  static getAbandonedCart() {
    return Joi.object({
      userId: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      anonymousCart: Joi.boolean(),
      lastId: Joi.string().allow(""),
      sortOn: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getAbandonedCartDetails} */
  static getAbandonedCartDetails() {
    return Joi.object({
      userId: Joi.string().allow(""),
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
    }).required();
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
      userId: Joi.string().allow(""),
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
      userId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getAppCoupons} */
  static getAppCoupons() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    }).required();
  }

  /** @returns {getAvailableDeliveryModes} */
  static getAvailableDeliveryModes() {
    return Joi.object({
      areaCode: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getCart} */
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

  /** @returns {getCartList} */
  static getCartList() {
    return Joi.object({
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      filterOn: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getCartShareLink} */
  static getCartShareLink() {
    return Joi.object({
      body: CartPlatformModel.GetShareCartLinkRequest().required(),
    }).required();
  }

  /** @returns {getCartSharedItems} */
  static getCartSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getCouponById} */
  static getCouponById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getCouponCodeExists} */
  static getCouponCodeExists() {
    return Joi.object({
      code: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getCouponOptionValues} */
  static getCouponOptionValues() {
    return Joi.object({}).required();
  }

  /** @returns {getCoupons} */
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

  /** @returns {getItemCount} */
  static getItemCount() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    }).required();
  }

  /** @returns {getPromosCouponConfig} */
  static getPromosCouponConfig() {
    return Joi.object({
      entityType: Joi.string().allow(""),
      isHidden: Joi.boolean(),
    }).required();
  }

  /** @returns {getPromotionById} */
  static getPromotionById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getPromotionCodeExists} */
  static getPromotionCodeExists() {
    return Joi.object({
      code: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getPromotions} */
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

  /** @returns {getShipments} */
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

  /** @returns {getStoreAddressByUid} */
  static getStoreAddressByUid() {
    return Joi.object({
      storeUid: Joi.number().required(),
    }).required();
  }

  /** @returns {overrideCart} */
  static overrideCart() {
    return Joi.object({
      body: CartPlatformModel.OverrideCheckoutReq().required(),
    }).required();
  }

  /** @returns {platformAddItems} */
  static platformAddItems() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      id: Joi.string().allow(""),
      body: CartPlatformModel.PlatformAddCartRequest().required(),
    }).required();
  }

  /** @returns {platformCheckoutCart} */
  static platformCheckoutCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: CartPlatformModel.PlatformCartCheckoutDetailRequest().required(),
    }).required();
  }

  /** @returns {platformCheckoutCartV2} */
  static platformCheckoutCartV2() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: CartPlatformModel.PlatformCartCheckoutDetailV2Request().required(),
    }).required();
  }

  /** @returns {platformUpdateCart} */
  static platformUpdateCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      body: CartPlatformModel.PlatformUpdateCartRequest().required(),
    }).required();
  }

  /** @returns {removeAddress} */
  static removeAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      userId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {removeCartDynamicInjection} */
  static removeCartDynamicInjection() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {removeCoupon} */
  static removeCoupon() {
    return Joi.object({
      uid: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    }).required();
  }

  /** @returns {selectAddress} */
  static selectAddress() {
    return Joi.object({
      cartId: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: CartPlatformModel.PlatformSelectCartAddressRequest().required(),
    }).required();
  }

  /** @returns {selectPaymentMode} */
  static selectPaymentMode() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      orderType: Joi.string().allow(""),
      body: CartPlatformModel.UpdateCartPaymentRequest().required(),
    }).required();
  }

  /** @returns {selectPaymentModeV2} */
  static selectPaymentModeV2() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      orderType: Joi.string().allow(""),
      body: CartPlatformModel.UpdateCartPaymentRequestV2().required(),
    }).required();
  }

  /** @returns {updateAddress} */
  static updateAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartPlatformModel.PlatformAddress().required(),
    }).required();
  }

  /** @returns {updateCart} */
  static updateCart() {
    return Joi.object({
      cartId: Joi.string().allow("").required(),
      b: Joi.boolean(),
      userId: Joi.string().allow(""),
      body: CartPlatformModel.UpdateCartRequest().required(),
    }).required();
  }

  /** @returns {updateCartDynamicInjection} */
  static updateCartDynamicInjection() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartPlatformModel.CartDynamicInjectionUpdate().required(),
    }).required();
  }

  /** @returns {updateCartMeta} */
  static updateCartMeta() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartPlatformModel.PlatformCartMetaRequest().required(),
    }).required();
  }

  /** @returns {updateCartMetaConfig} */
  static updateCartMetaConfig() {
    return Joi.object({
      cartMetaId: Joi.string().allow("").required(),
      body: CartPlatformModel.CartMetaConfigUpdate().required(),
    }).required();
  }

  /** @returns {updateCartUser} */
  static updateCartUser() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: CartPlatformModel.UpdateUserCartMapping().required(),
    }).required();
  }

  /** @returns {updateCartWithSharedItems} */
  static updateCartWithSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
      cartId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {updateCoupon} */
  static updateCoupon() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartPlatformModel.CouponUpdate().required(),
    }).required();
  }

  /** @returns {updateCouponPartially} */
  static updateCouponPartially() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartPlatformModel.CouponPartialUpdate().required(),
    }).required();
  }

  /** @returns {updatePromotion} */
  static updatePromotion() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartPlatformModel.PromotionUpdate().required(),
    }).required();
  }

  /** @returns {updatePromotionPartially} */
  static updatePromotionPartially() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartPlatformModel.PromotionPartialUpdate().required(),
    }).required();
  }

  /** @returns {updateShipments} */
  static updateShipments() {
    return Joi.object({
      i: Joi.boolean(),
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      addressId: Joi.string().allow(""),
      areaCode: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
      body: CartPlatformModel.UpdateCartShipmentRequest().required(),
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
    }).required();
  }
}

module.exports = CartPlatformApplicationValidator;
