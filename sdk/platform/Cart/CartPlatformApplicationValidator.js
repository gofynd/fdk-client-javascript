const Joi = require("joi");

const CartPlatformModel = require("./CartPlatformModel");

/**
 * @typedef AddAddressParam
 * @property {CartPlatformModel.PlatformAddress} body
 */

/**
 * @typedef AddItemsParam
 * @property {string} cartId - Current Cart id of user cart
 * @property {boolean} [b]
 * @property {CartPlatformModel.AddCartCreation} body
 */

/**
 * @typedef AddPriceAdjustmentParam
 * @property {CartPlatformModel.PriceAdjustmentAdd} body
 */

/**
 * @typedef ApplyCouponParam
 * @property {CartPlatformModel.OrderingSource} [xOrderingSource] - Ordering
 *   source header, to be used to identify source of order creation.
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [p]
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {CartPlatformModel.ApplyCouponDetails} body
 */

/**
 * @typedef CheckCartServiceabilityParam
 * @property {CartPlatformModel.OrderingSource} [xOrderingSource] - Ordering
 *   source header, to be used to identify source of order creation.
 * @property {CartPlatformModel.OpenApiCartServiceabilityCreation} body
 */

/**
 * @typedef CheckoutCartParam
 * @property {CartPlatformModel.OrderingSource} [xOrderingSource] - Ordering
 *   source header, to be used to identify source of order creation.
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
 * @property {CartPlatformModel.DeleteCartDetails} body
 */

/**
 * @typedef DeleteCouponParam
 * @property {string} id
 */

/**
 * @typedef DeletePromotionParam
 * @property {string} id
 */

/**
 * @typedef FetchAndvalidateCartItemsParam
 * @property {CartPlatformModel.OrderingSource} [xOrderingSource] - Ordering
 *   source header, to be used to identify source of order creation.
 * @property {CartPlatformModel.OpenapiCartDetailsCreation} body
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
 * @property {string} [slug]
 * @property {string} [storeId]
 */

/**
 * @typedef GetAvailableDeliveryModesParam
 * @property {string} areaCode
 * @property {string} [id]
 */

/**
 * @typedef GetCartParam
 * @property {CartPlatformModel.OrderingSource} [xOrderingSource] - Ordering
 *   source header, to be used to identify source of order creation.
 * @property {string} [id] - The unique identifier of the cart
 * @property {string} [userId] - Option to fetch cart for the provided user_id.
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {boolean} [i] - This is a boolean value. Select `true` to retrieve
 *   all the items added in the cart.
 * @property {boolean} [b] - This is a boolean value. Select `true` to retrieve
 *   the price breakup of cart items.
 * @property {number} [assignCardId] - Token of user's debit or credit card
 * @property {boolean} [buyNow] - This is a boolen value. Select `true` to
 *   set/initialize buy now cart
 */

/**
 * @typedef GetCartListParam
 * @property {string} [fromDate]
 * @property {string} [toDate]
 * @property {string} [filterOn]
 */

/**
 * @typedef GetCartShareLinkParam
 * @property {CartPlatformModel.GetShareCartLinkCreation} body
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
 * @property {string} [createdBy]
 * @property {string} [reviewedBy]
 * @property {string} [approvedStartTime]
 * @property {string} [approvedEndTime]
 * @property {string} [reviewStartTime]
 * @property {string} [reviewEndTime]
 * @property {string} [status]
 */

/**
 * @typedef GetItemCountParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Boolean value to get buy_now cart.
 */

/**
 * @typedef GetPriceAdjustmentsParam
 * @property {string} cartId - Cart id of user cart
 */

/**
 * @typedef GetPromosCouponConfigParam
 * @property {string} [entityType] - Entity type as promotion or coupon
 * @property {boolean} [isHidden] - Promotion coupon config shown or not
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
 * @typedef GetPromotionOffersParam
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier
 *   of a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 * @property {number} [pageSize] - Number of offers to be fetched to show
 * @property {string} [promotionGroup] - Type of promotion groups
 * @property {number} [storeId] - Unique identifier of a store
 * @property {string} [cartType] - The type of cart
 * @property {string} [promotionType] - Type of promotion to be fetched
 * @property {string} [cartId] - The unique identifier of the user cart.
 * @property {boolean} [autoApply] - Indicates whether to filter promotions
 *   based on their auto_apply status.
 */

/**
 * @typedef GetPromotionPaymentOffersParam
 * @property {string} [id] - Cart id of the user cart
 * @property {number} [uid] - Cart uid of the user cart
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
 * @property {string} [createdBy]
 * @property {string} [reviewedBy]
 * @property {string} [approvedStartTime]
 * @property {string} [approvedEndTime]
 * @property {string} [reviewStartTime]
 * @property {string} [reviewEndTime]
 * @property {string} [status]
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
 * @property {CartPlatformModel.OrderingSource} [xOrderingSource] - Ordering
 *   source header, to be used to identify source of order creation.
 * @property {CartPlatformModel.OverrideCheckoutReq} body
 */

/**
 * @typedef PlatformAddItemsParam
 * @property {CartPlatformModel.OrderingSource} [xOrderingSource] - Ordering
 *   source header, to be used to identify source of order creation.
 * @property {boolean} [i] - This is a boolean value. Select `true` to retrieve
 *   all the items added in the cart.
 * @property {boolean} [b] - This is a boolean value. Select `true` to retrieve
 *   the price breakup of cart items.
 * @property {boolean} [buyNow] - This is a boolen value. Select `true` to
 *   set/initialize buy now cart
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {string} [id] - The unique identifier of the cart
 * @property {CartPlatformModel.PlatformAddCartDetails} body
 */

/**
 * @typedef PlatformCheckoutCartParam
 * @property {CartPlatformModel.OrderingSource} [xOrderingSource] - Ordering
 *   source header, to be used to identify source of order creation.
 * @property {string} [id] - The unique identifier of the cart
 * @property {CartPlatformModel.PlatformCartCheckoutDetailCreation} body
 */

/**
 * @typedef PlatformCheckoutCartV2Param
 * @property {CartPlatformModel.OrderingSource} [xOrderingSource] - Ordering
 *   source header, to be used to identify source of order creation.
 * @property {string} [id] - The unique identifier of the cart
 * @property {CartPlatformModel.PlatformCartCheckoutDetailV2Creation} body
 */

/**
 * @typedef PlatformUpdateCartParam
 * @property {CartPlatformModel.OrderingSource} [xOrderingSource] - Ordering
 *   source header, to be used to identify source of order creation.
 * @property {string} [id] - The unique identifier of the cart
 * @property {boolean} [i] - This is a boolean value. Select `true` to retrieve
 *   all the items added in the cart.
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {boolean} [b] - This is a boolean value. Select `true` to retrieve
 *   the price breakup of cart items.
 * @property {boolean} [buyNow] - This is a boolen value. Select `true` to
 *   set/initialize buy now cart
 * @property {CartPlatformModel.PlatformUpdateCartDetails} body
 */

/**
 * @typedef RemoveAddressParam
 * @property {string} id - ID allotted to the selected address
 * @property {string} [userId] - Option to delete address for the provided user_id.
 */

/**
 * @typedef RemoveCouponParam
 * @property {CartPlatformModel.OrderingSource} [xOrderingSource] - Ordering
 *   source header, to be used to identify source of order creation.
 * @property {string} [uid]
 * @property {boolean} [buyNow]
 */

/**
 * @typedef RemovePriceAdjustmentParam
 * @property {string} id
 */

/**
 * @typedef SelectAddressParam
 * @property {CartPlatformModel.OrderingSource} [xOrderingSource] - Ordering
 *   source header, to be used to identify source of order creation.
 * @property {string} [cartId]
 * @property {boolean} [buyNow]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {CartPlatformModel.PlatformSelectCartAddress} body
 */

/**
 * @typedef SelectPaymentModeParam
 * @property {CartPlatformModel.OrderingSource} [xOrderingSource] - Ordering
 *   source header, to be used to identify source of order creation.
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {string} [orderType]
 * @property {CartPlatformModel.CartPaymentUpdate} body
 */

/**
 * @typedef SelectPaymentModeV2Param
 * @property {CartPlatformModel.OrderingSource} [xOrderingSource] - Ordering
 *   source header, to be used to identify source of order creation.
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {string} [orderType]
 * @property {CartPlatformModel.UpdateCartPaymentRequestV2} body
 */

/**
 * @typedef UpdateAddressParam
 * @property {string} id - ID allotted to the selected address
 * @property {CartPlatformModel.PlatformAddress} body
 */

/**
 * @typedef UpdateCartParam
 * @property {string} cartId - Current Cart id of user cart
 * @property {boolean} [b]
 * @property {CartPlatformModel.UpdateCartCreation} body
 */

/**
 * @typedef UpdateCartMetaParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {CartPlatformModel.PlatformCartMetaCreation} body
 */

/**
 * @typedef UpdateCartMetaConfigParam
 * @property {string} cartMetaId - CartMeta id for fetching single cart meta
 *   data for editing
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
 * @property {CartPlatformModel.UpdateCartShipmentCreation} body
 */

/**
 * @typedef ValidateCouponForPaymentParam
 * @property {CartPlatformModel.OrderingSource} [xOrderingSource] - Ordering
 *   source header, to be used to identify source of order creation.
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
      body: CartPlatformModel.AddCartCreation().required(),
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
      xOrderingSource: CartPlatformModel.OrderingSource(),

      i: Joi.boolean(),
      b: Joi.boolean(),
      p: Joi.boolean(),
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartPlatformModel.ApplyCouponDetails().required(),
    }).required();
  }

  /** @returns {CheckCartServiceabilityParam} */
  static checkCartServiceability() {
    return Joi.object({
      xOrderingSource: CartPlatformModel.OrderingSource(),

      body: CartPlatformModel.OpenApiCartServiceabilityCreation().required(),
    }).required();
  }

  /** @returns {CheckoutCartParam} */
  static checkoutCart() {
    return Joi.object({
      xOrderingSource: CartPlatformModel.OrderingSource(),

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
      body: CartPlatformModel.DeleteCartDetails().required(),
    }).required();
  }

  /** @returns {DeleteCouponParam} */
  static deleteCoupon() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeletePromotionParam} */
  static deletePromotion() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {FetchAndvalidateCartItemsParam} */
  static fetchAndvalidateCartItems() {
    return Joi.object({
      xOrderingSource: CartPlatformModel.OrderingSource(),

      body: CartPlatformModel.OpenapiCartDetailsCreation().required(),
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
      slug: Joi.string().allow(""),
      storeId: Joi.string().allow(""),
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
      xOrderingSource: CartPlatformModel.OrderingSource(),

      id: Joi.string().allow(""),
      userId: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
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
      body: CartPlatformModel.GetShareCartLinkCreation().required(),
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
      createdBy: Joi.string().allow(""),
      reviewedBy: Joi.string().allow(""),
      approvedStartTime: Joi.string().allow(""),
      approvedEndTime: Joi.string().allow(""),
      reviewStartTime: Joi.string().allow(""),
      reviewEndTime: Joi.string().allow(""),
      status: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetItemCountParam} */
  static getItemCount() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
    }).required();
  }

  /** @returns {GetPriceAdjustmentsParam} */
  static getPriceAdjustments() {
    return Joi.object({
      cartId: Joi.string().allow("").required(),
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

  /** @returns {GetPromotionOffersParam} */
  static getPromotionOffers() {
    return Joi.object({
      slug: Joi.string().allow(""),
      pageSize: Joi.number(),
      promotionGroup: Joi.string().allow(""),
      storeId: Joi.number(),
      cartType: Joi.string().allow(""),
      promotionType: Joi.string().allow(""),
      cartId: Joi.string().allow(""),
      autoApply: Joi.boolean(),
    }).required();
  }

  /** @returns {GetPromotionPaymentOffersParam} */
  static getPromotionPaymentOffers() {
    return Joi.object({
      id: Joi.string().allow(""),
      uid: Joi.number(),
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
      createdBy: Joi.string().allow(""),
      reviewedBy: Joi.string().allow(""),
      approvedStartTime: Joi.string().allow(""),
      approvedEndTime: Joi.string().allow(""),
      reviewStartTime: Joi.string().allow(""),
      reviewEndTime: Joi.string().allow(""),
      status: Joi.string().allow(""),
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
      xOrderingSource: CartPlatformModel.OrderingSource(),

      body: CartPlatformModel.OverrideCheckoutReq().required(),
    }).required();
  }

  /** @returns {PlatformAddItemsParam} */
  static platformAddItems() {
    return Joi.object({
      xOrderingSource: CartPlatformModel.OrderingSource(),

      i: Joi.boolean(),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      orderType: Joi.string().allow(""),
      id: Joi.string().allow(""),
      body: CartPlatformModel.PlatformAddCartDetails().required(),
    }).required();
  }

  /** @returns {PlatformCheckoutCartParam} */
  static platformCheckoutCart() {
    return Joi.object({
      xOrderingSource: CartPlatformModel.OrderingSource(),

      id: Joi.string().allow(""),
      body: CartPlatformModel.PlatformCartCheckoutDetailCreation().required(),
    }).required();
  }

  /** @returns {PlatformCheckoutCartV2Param} */
  static platformCheckoutCartV2() {
    return Joi.object({
      xOrderingSource: CartPlatformModel.OrderingSource(),

      id: Joi.string().allow(""),
      body: CartPlatformModel.PlatformCartCheckoutDetailV2Creation().required(),
    }).required();
  }

  /** @returns {PlatformUpdateCartParam} */
  static platformUpdateCart() {
    return Joi.object({
      xOrderingSource: CartPlatformModel.OrderingSource(),

      id: Joi.string().allow(""),
      i: Joi.boolean(),
      orderType: Joi.string().allow(""),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      body: CartPlatformModel.PlatformUpdateCartDetails().required(),
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
      xOrderingSource: CartPlatformModel.OrderingSource(),

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
      xOrderingSource: CartPlatformModel.OrderingSource(),

      cartId: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: CartPlatformModel.PlatformSelectCartAddress().required(),
    }).required();
  }

  /** @returns {SelectPaymentModeParam} */
  static selectPaymentMode() {
    return Joi.object({
      xOrderingSource: CartPlatformModel.OrderingSource(),

      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      orderType: Joi.string().allow(""),
      body: CartPlatformModel.CartPaymentUpdate().required(),
    }).required();
  }

  /** @returns {SelectPaymentModeV2Param} */
  static selectPaymentModeV2() {
    return Joi.object({
      xOrderingSource: CartPlatformModel.OrderingSource(),

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
      body: CartPlatformModel.UpdateCartCreation().required(),
    }).required();
  }

  /** @returns {UpdateCartMetaParam} */
  static updateCartMeta() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      body: CartPlatformModel.PlatformCartMetaCreation().required(),
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
      body: CartPlatformModel.UpdateCartShipmentCreation().required(),
    }).required();
  }

  /** @returns {ValidateCouponForPaymentParam} */
  static validateCouponForPayment() {
    return Joi.object({
      xOrderingSource: CartPlatformModel.OrderingSource(),

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
