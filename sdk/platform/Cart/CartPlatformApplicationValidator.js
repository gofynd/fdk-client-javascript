const Joi = require("joi");

const CartPlatformModel = require("./CartPlatformModel");

/**
 * @typedef AddAddressParam
 * @property {CartPlatformModel.PlatformAddress} body
 */

/**
 * @typedef AddItemsParam
 * @property {string} cartId - Current Cart _id
 * @property {boolean} [b]
 * @property {CartPlatformModel.AddCartRequest} body
 */

/**
 * @typedef AddPriceAdjustmentParam
 * @property {CartPlatformModel.PriceAdjustmentAdd} body
 */

/**
 * @typedef ApplyCouponParam
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [p]
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {CartPlatformModel.ApplyCouponRequest} body
 */

/**
 * @typedef CheckCartServiceabilityParam
 * @property {CartPlatformModel.OpenApiCartServiceabilityRequest} body
 */

/**
 * @typedef CheckoutCartParam
 * @property {CartPlatformModel.OpenApiPlatformCheckoutReq} body
 */

/**
 * @typedef CreateCartMetaConfigParam
 * @property {CartPlatformModel.CartMetaConfigAdd} body
 */

/**
 * @typedef CreateCouponParam
 * @property {CartPlatformModel.CouponAdd} body
 */

/**
 * @typedef CreatePromotionParam
 * @property {CartPlatformModel.PromotionAdd} body
 */

/**
 * @typedef DeleteCartParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {CartPlatformModel.DeleteCartRequest} body
 */

/**
 * @typedef FetchAndvalidateCartItemsParam
 * @property {CartPlatformModel.OpenapiCartDetailsRequest} body
 */

/** @typedef FetchCartMetaConfigParam */

/**
 * @typedef GetAbandonedCartParam
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {string} [fromDate]
 * @property {string} [toDate]
 * @property {boolean} [anonymousCart]
 * @property {string} [lastId]
 * @property {string} [sortOn]
 */

/**
 * @typedef GetAbandonedCartDetailsParam
 * @property {string} [id]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [c]
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
 * @property {string} [userId]
 */

/**
 * @typedef GetAddressesParam
 * @property {string} [cartId]
 * @property {boolean} [buyNow]
 * @property {string} [mobileNo]
 * @property {string} [checkoutMode]
 * @property {string} [tags]
 * @property {boolean} [isDefault]
 * @property {string} [userId]
 */

/**
 * @typedef GetAppCouponsParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 */

/**
 * @typedef GetAvailableDeliveryModesParam
 * @property {string} areaCode
 * @property {string} [id]
 */

/**
 * @typedef GetCartParam
 * @property {string} [id]
 * @property {string} [userId]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {number} [assignCardId]
 * @property {boolean} [buyNow]
 */

/**
 * @typedef GetCartListParam
 * @property {string} [fromDate]
 * @property {string} [toDate]
 * @property {string} [filterOn]
 */

/**
 * @typedef GetCartShareLinkParam
 * @property {CartPlatformModel.GetShareCartLinkRequest} body
 */

/**
 * @typedef GetCartSharedItemsParam
 * @property {string} token - Token of the shared short link
 */

/**
 * @typedef GetCouponByIdParam
 * @property {string} id
 */

/**
 * @typedef GetCouponCodeExistsParam
 * @property {string} [code]
 */

/** @typedef GetCouponOptionValuesParam */

/**
 * @typedef GetCouponsParam
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
 * @typedef GetItemCountParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow]
 */

/**
 * @typedef GetPromosCouponConfigParam
 * @property {string} [entityType] - Entity_type as promotion or coupon
 * @property {boolean} [isHidden] - Promo-coupon config shown or not
 */

/**
 * @typedef GetPromotionByIdParam
 * @property {string} id
 */

/**
 * @typedef GetPromotionCodeExistsParam
 * @property {string} [code]
 */

/**
 * @typedef GetPromotionsParam
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
 * @typedef GetShipmentsParam
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
 * @typedef GetStoreAddressByUidParam
 * @property {number} storeUid
 */

/**
 * @typedef OverrideCartParam
 * @property {CartPlatformModel.OverrideCheckoutReq} body
 */

/**
 * @typedef PlatformAddItemsParam
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [buyNow]
 * @property {string} [id]
 * @property {CartPlatformModel.PlatformAddCartRequest} body
 */

/**
 * @typedef PlatformCheckoutCartParam
 * @property {string} [id]
 * @property {CartPlatformModel.PlatformCartCheckoutDetailRequest} body
 */

/**
 * @typedef PlatformCheckoutCartV2Param
 * @property {string} [id]
 * @property {CartPlatformModel.PlatformCartCheckoutDetailV2Request} body
 */

/**
 * @typedef PlatformUpdateCartParam
 * @property {string} [id]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [buyNow]
 * @property {CartPlatformModel.PlatformUpdateCartRequest} body
 */

/**
 * @typedef RemoveAddressParam
 * @property {string} id - ID allotted to the selected address
 * @property {string} [userId] - Option to delete address for the provided user_id.
 */

/**
 * @typedef RemoveCouponParam
 * @property {string} [uid]
 * @property {boolean} [buyNow]
 */

/**
 * @typedef RemovePriceAdjustmentParam
 * @property {string} id
 */

/**
 * @typedef SelectAddressParam
 * @property {string} [cartId]
 * @property {boolean} [buyNow]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {CartPlatformModel.PlatformSelectCartAddressRequest} body
 */

/**
 * @typedef SelectPaymentModeParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {CartPlatformModel.UpdateCartPaymentRequest} body
 */

/**
 * @typedef SelectPaymentModeV2Param
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {CartPlatformModel.UpdateCartPaymentRequestV2} body
 */

/**
 * @typedef UpdateAddressParam
 * @property {string} id - ID allotted to the selected address
 * @property {CartPlatformModel.PlatformAddress} body
 */

/**
 * @typedef UpdateCartParam
 * @property {string} cartId - Current Cart _id
 * @property {boolean} [b]
 * @property {CartPlatformModel.UpdateCartRequest} body
 */

/**
 * @typedef UpdateCartMetaParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {CartPlatformModel.PlatformCartMetaRequest} body
 */

/**
 * @typedef UpdateCartMetaConfigParam
 * @property {string} cartMetaId
 * @property {CartPlatformModel.CartMetaConfigUpdate} body
 */

/**
 * @typedef UpdateCartUserParam
 * @property {string} [id]
 * @property {CartPlatformModel.UpdateUserCartMapping} body
 */

/**
 * @typedef UpdateCartWithSharedItemsParam
 * @property {string} token - Token of the shared short link
 * @property {string} action - Operation to perform on the existing cart merge or replace.
 * @property {string} [cartId]
 */

/**
 * @typedef UpdateCouponParam
 * @property {string} id
 * @property {CartPlatformModel.CouponUpdate} body
 */

/**
 * @typedef UpdateCouponPartiallyParam
 * @property {string} id
 * @property {CartPlatformModel.CouponPartialUpdate} body
 */

/**
 * @typedef UpdatePriceAdjustmentParam
 * @property {string} id
 * @property {CartPlatformModel.PriceAdjustmentUpdate} body
 */

/**
 * @typedef UpdatePromotionParam
 * @property {string} id
 * @property {CartPlatformModel.PromotionUpdate} body
 */

/**
 * @typedef UpdatePromotionPartiallyParam
 * @property {string} id
 * @property {CartPlatformModel.PromotionPartialUpdate} body
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
 * @property {CartPlatformModel.UpdateCartShipmentRequest} body
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
 */

class CartPlatformApplicationValidator {
  /** @returns {AddAddressParam} */
  static addAddress() {
    return Joi.object({
      body: CartPlatformModel.PlatformAddress().required(),
    }).required();
  }

  /** @returns {AddItemsParam} */
  static addItems() {
    return Joi.object({
      cartId: Joi.string().allow("").required(),
      b: Joi.boolean(),
      body: CartPlatformModel.AddCartRequest().required(),
    }).required();
  }

  /** @returns {AddPriceAdjustmentParam} */
  static addPriceAdjustment() {
    return Joi.object({
      body: CartPlatformModel.PriceAdjustmentAdd().required(),
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
      body: CartPlatformModel.ApplyCouponRequest().required(),
    }).required();
  }

  /** @returns {CheckCartServiceabilityParam} */
  static checkCartServiceability() {
    return Joi.object({
      body: CartPlatformModel.OpenApiCartServiceabilityRequest().required(),
    }).required();
  }

  /** @returns {CheckoutCartParam} */
  static checkoutCart() {
    return Joi.object({
      body: CartPlatformModel.OpenApiPlatformCheckoutReq().required(),
    }).required();
  }

  /** @returns {CreateCartMetaConfigParam} */
  static createCartMetaConfig() {
    return Joi.object({
      body: CartPlatformModel.CartMetaConfigAdd().required(),
    }).required();
  }

  /** @returns {CreateCouponParam} */
  static createCoupon() {
    return Joi.object({
      body: CartPlatformModel.CouponAdd().required(),
    }).required();
  }

  /** @returns {CreatePromotionParam} */
  static createPromotion() {
    return Joi.object({
      body: CartPlatformModel.PromotionAdd().required(),
    }).required();
  }

  /** @returns {DeleteCartParam} */
  static deleteCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: CartPlatformModel.DeleteCartRequest().required(),
    }).required();
  }

  /** @returns {FetchAndvalidateCartItemsParam} */
  static fetchAndvalidateCartItems() {
    return Joi.object({
      body: CartPlatformModel.OpenapiCartDetailsRequest().required(),
    }).required();
  }

  /** @returns {FetchCartMetaConfigParam} */
  static fetchCartMetaConfig() {
    return Joi.object({}).required();
  }

  /** @returns {GetAbandonedCartParam} */
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

  /** @returns {GetAbandonedCartDetailsParam} */
  static getAbandonedCartDetails() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      c: Joi.boolean(),
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
      userId: Joi.string().allow(""),
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
      userId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetAppCouponsParam} */
  static getAppCoupons() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    }).required();
  }

  /** @returns {GetAvailableDeliveryModesParam} */
  static getAvailableDeliveryModes() {
    return Joi.object({
      areaCode: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCartParam} */
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

  /** @returns {GetCartListParam} */
  static getCartList() {
    return Joi.object({
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      filterOn: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCartShareLinkParam} */
  static getCartShareLink() {
    return Joi.object({
      body: CartPlatformModel.GetShareCartLinkRequest().required(),
    }).required();
  }

  /** @returns {GetCartSharedItemsParam} */
  static getCartSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCouponByIdParam} */
  static getCouponById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCouponCodeExistsParam} */
  static getCouponCodeExists() {
    return Joi.object({
      code: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCouponOptionValuesParam} */
  static getCouponOptionValues() {
    return Joi.object({}).required();
  }

  /** @returns {GetCouponsParam} */
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

  /** @returns {GetItemCountParam} */
  static getItemCount() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    }).required();
  }

  /** @returns {GetPromosCouponConfigParam} */
  static getPromosCouponConfig() {
    return Joi.object({
      entityType: Joi.string().allow(""),
      isHidden: Joi.boolean(),
    }).required();
  }

  /** @returns {GetPromotionByIdParam} */
  static getPromotionById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPromotionCodeExistsParam} */
  static getPromotionCodeExists() {
    return Joi.object({
      code: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetPromotionsParam} */
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

  /** @returns {GetShipmentsParam} */
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

  /** @returns {GetStoreAddressByUidParam} */
  static getStoreAddressByUid() {
    return Joi.object({
      storeUid: Joi.number().required(),
    }).required();
  }

  /** @returns {OverrideCartParam} */
  static overrideCart() {
    return Joi.object({
      body: CartPlatformModel.OverrideCheckoutReq().required(),
    }).required();
  }

  /** @returns {PlatformAddItemsParam} */
  static platformAddItems() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      id: Joi.string().allow(""),
      body: CartPlatformModel.PlatformAddCartRequest().required(),
    }).required();
  }

  /** @returns {PlatformCheckoutCartParam} */
  static platformCheckoutCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: CartPlatformModel.PlatformCartCheckoutDetailRequest().required(),
    }).required();
  }

  /** @returns {PlatformCheckoutCartV2Param} */
  static platformCheckoutCartV2() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: CartPlatformModel.PlatformCartCheckoutDetailV2Request().required(),
    }).required();
  }

  /** @returns {PlatformUpdateCartParam} */
  static platformUpdateCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      body: CartPlatformModel.PlatformUpdateCartRequest().required(),
    }).required();
  }

  /** @returns {RemoveAddressParam} */
  static removeAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      userId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {RemoveCouponParam} */
  static removeCoupon() {
    return Joi.object({
      uid: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    }).required();
  }

  /** @returns {RemovePriceAdjustmentParam} */
  static removePriceAdjustment() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {SelectAddressParam} */
  static selectAddress() {
    return Joi.object({
      cartId: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: CartPlatformModel.PlatformSelectCartAddressRequest().required(),
    }).required();
  }

  /** @returns {SelectPaymentModeParam} */
  static selectPaymentMode() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      orderType: Joi.string().allow(""),
      body: CartPlatformModel.UpdateCartPaymentRequest().required(),
    }).required();
  }

  /** @returns {SelectPaymentModeV2Param} */
  static selectPaymentModeV2() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      orderType: Joi.string().allow(""),
      body: CartPlatformModel.UpdateCartPaymentRequestV2().required(),
    }).required();
  }

  /** @returns {UpdateAddressParam} */
  static updateAddress() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartPlatformModel.PlatformAddress().required(),
    }).required();
  }

  /** @returns {UpdateCartParam} */
  static updateCart() {
    return Joi.object({
      cartId: Joi.string().allow("").required(),
      b: Joi.boolean(),
      body: CartPlatformModel.UpdateCartRequest().required(),
    }).required();
  }

  /** @returns {UpdateCartMetaParam} */
  static updateCartMeta() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartPlatformModel.PlatformCartMetaRequest().required(),
    }).required();
  }

  /** @returns {UpdateCartMetaConfigParam} */
  static updateCartMetaConfig() {
    return Joi.object({
      cartMetaId: Joi.string().allow("").required(),
      body: CartPlatformModel.CartMetaConfigUpdate().required(),
    }).required();
  }

  /** @returns {UpdateCartUserParam} */
  static updateCartUser() {
    return Joi.object({
      id: Joi.string().allow(""),
      body: CartPlatformModel.UpdateUserCartMapping().required(),
    }).required();
  }

  /** @returns {UpdateCartWithSharedItemsParam} */
  static updateCartWithSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
      cartId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {UpdateCouponParam} */
  static updateCoupon() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartPlatformModel.CouponUpdate().required(),
    }).required();
  }

  /** @returns {UpdateCouponPartiallyParam} */
  static updateCouponPartially() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartPlatformModel.CouponPartialUpdate().required(),
    }).required();
  }

  /** @returns {UpdatePriceAdjustmentParam} */
  static updatePriceAdjustment() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartPlatformModel.PriceAdjustmentUpdate().required(),
    }).required();
  }

  /** @returns {UpdatePromotionParam} */
  static updatePromotion() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartPlatformModel.PromotionUpdate().required(),
    }).required();
  }

  /** @returns {UpdatePromotionPartiallyParam} */
  static updatePromotionPartially() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CartPlatformModel.PromotionPartialUpdate().required(),
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
      body: CartPlatformModel.UpdateCartShipmentRequest().required(),
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
    }).required();
  }
}

module.exports = CartPlatformApplicationValidator;
