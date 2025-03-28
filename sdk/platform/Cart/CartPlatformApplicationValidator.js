const Joi = require("joi");

const CartPlatformModel = require("./CartPlatformModel");

/**
 * @typedef AddAddressParam
 * @property {CartPlatformModel.PlatformAddress} body
 */

/**
 * @typedef AddItemsParam
 * @property {string} cartId - Current Cart _id
 * @property {boolean} [b] - This is a boolean value. Select `true` to retrieve
 *   the price breakup of cart items.
 * @property {CartPlatformModel.AddCartPayload} body
 */

/**
 * @typedef AddPriceAdjustmentParam
 * @property {CartPlatformModel.PriceAdjustmentAdd} body
 */

/**
 * @typedef ApplyCouponParam
 * @property {boolean} [i] - This is a boolean value. Select `true` to retrieve
 *   all the items added in the cart.
 * @property {boolean} [b] - This is a boolean value. Select `true` to retrieve
 *   the price breakup of cart items.
 * @property {boolean} [p] - This is a boolean value. Select `true` for getting
 *   a payment option in response.
 * @property {string} [id] - The unique identifier of the cart
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart
 * @property {CartPlatformModel.ApplyCouponPayload} body
 */

/**
 * @typedef CheckCartServiceabilityParam
 * @property {CartPlatformModel.OpenApiCartServiceabilityPayload} body
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
 * @property {string} [cartType] - The type of cart
 * @property {CartPlatformModel.DeleteCartPayload} body
 */

/**
 * @typedef DeleteCartMetaConfigParam
 * @property {string} cartMetaId - CartMeta mongo _id for fetching single cart
 *   meta data for editing
 */

/**
 * @typedef DeleteCouponParam
 * @property {string} id
 */

/**
 * @typedef DeletePromotionParam
 * @property {string} id - Promotion id for fetching single promotion data for deleting
 */

/**
 * @typedef FetchAndvalidateCartItemsParam
 * @property {CartPlatformModel.OpenapiCartDetailsPayload} body
 */

/**
 * @typedef GetAbandonedCartParam
 * @property {number} [pageNo] - Current page no as per pagination
 * @property {number} [pageSize] - Cart max records fetched in single request
 * @property {string} [fromDate] - Cart which are created on or after from_date
 * @property {string} [toDate] - Cart which are created on or before to_date
 * @property {boolean} [anonymousCart] - Filter by `anonymous_cart`
 * @property {string} [lastId] - Pagination is done based on the last_object_id
 * @property {string} [sortOn] - On which column to sort on i.e created_on or
 *   last_modified
 */

/**
 * @typedef GetAbandonedCartDetailsParam
 * @property {string} [id] - The unique identifier of the cart
 * @property {boolean} [i] - This is a boolean value. Select `true` to retrieve
 *   all the items added in the cart.
 * @property {boolean} [b] - This is a boolean value. Select `true` to retrieve
 *   the price breakup of cart items.
 * @property {boolean} [c] - This is a boolean value. Select `true` to retrieve
 *   the cod charges in breakup of cart items.
 */

/**
 * @typedef GetAddressByIdParam
 * @property {string} id - ID allotted to the selected address
 * @property {string} [cartId] - The unique identifier of the cart
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart
 * @property {string} [mobileNo] - 10-digit mobile number
 * @property {string} [checkoutMode] - Option to checkout for self or for others
 * @property {string} [tags] - Tag given to an address, e.g. work, home, office, shop.
 * @property {boolean} [isDefault] - This is a boolean value. Select `true` to
 *   fetch the default address.
 * @property {string} [userId] - Option to fetch address for the provided user_id.
 */

/**
 * @typedef GetAddressesParam
 * @property {string} [cartId] - The unique identifier of the cart
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart
 * @property {string} [mobileNo] - 10-digit mobile number
 * @property {string} [checkoutMode] - Option to checkout for `self` or for
 *   `others`. By default, it is `self`.
 * @property {string} [tags] - Tag given to an address, e.g. work, home, office, shop.
 * @property {boolean} [isDefault] - This is a boolean value. Select `true` to
 *   fetch the default address.
 * @property {string} [userId] - Option to fetch address for the provided user_id.
 */

/**
 * @typedef GetAppCouponsParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart
 * @property {string} [slug] - Product slug to fetch the available coupons
 * @property {string} [storeId] - Store id
 */

/**
 * @typedef GetAvailableDeliveryModesParam
 * @property {string} areaCode
 * @property {string} [id]
 */

/**
 * @typedef GetCartParam
 * @property {string} [id] - The unique identifier of the cart
 * @property {string} [userId] - Option to fetch cart for the provided user_id.
 * @property {boolean} [i] - This is a boolean value. Select `true` to retrieve
 *   all the items added in the cart.
 * @property {boolean} [b] - This is a boolean value. Select `true` to retrieve
 *   the price breakup of cart items.
 * @property {number} [assignCardId] - Token of user's debit or credit card
 * @property {boolean} [buyNow] - This is a boolen value. Select `true` to
 *   set/initialize buy now cart
 * @property {string} [cartType] - The type of cart
 */

/**
 * @typedef GetCartListParam
 * @property {string} [fromDate] - Cart which are created on or after from_date.
 *   Supports ISO date format.
 * @property {string} [toDate] - Cart which are created on or before to_date.
 *   Supports ISO date format.
 * @property {string} [filterOn] - On which column to sort on i.e created_on or
 *   last_modified
 */

/**
 * @typedef GetCartMetaConfigParam
 * @property {string} cartMetaId - CartMeta mongo _id for fetching single cart
 *   meta data for editing
 */

/** @typedef GetCartMetaConfigsParam */

/**
 * @typedef GetCartShareLinkParam
 * @property {CartPlatformModel.GetShareCartLinkPayload} body
 */

/**
 * @typedef GetCartSharedItemsParam
 * @property {string} token - Token of the shared short link
 */

/**
 * @typedef GetCouponByIdParam
 * @property {string} id - Coupon mongo _id for fetching single coupon data for editing
 */

/**
 * @typedef GetCouponCodeExistsParam
 * @property {string} [code] - Coupon code
 */

/** @typedef GetCouponOptionValuesParam */

/** @typedef GetCouponTagsParam */

/**
 * @typedef GetCouponsParam
 * @property {number} [pageNo] - Current page no as per pagination
 * @property {number} [pageSize] - Coupon max records fetched in single request
 * @property {boolean} [isArchived] - Filter by active or inactive coupon
 * @property {string} [title] - Filter coupon by coupon title
 * @property {boolean} [isPublic] - Filter coupons which is public
 * @property {boolean} [isDisplay] - Filter coupons which is visible to sales channel
 * @property {string} [typeSlug] - Filter by coupon type
 * @property {string} [code] - Filter by coupon code
 * @property {string} [createdBy] - Filter by coupon creater user id
 * @property {string} [reviewedBy] - Filter by coupon reviewer user id
 * @property {string} [approvedStartTime] - Filter coupon by start time date
 *   range when status is approved
 * @property {string} [approvedEndTime] - Filter coupon by end time date range
 *   when status is approved
 * @property {string} [reviewStartTime] - Filter coupon by start time date range
 *   when status is in review state
 * @property {string} [reviewEndTime] - Filter coupon by end time date range
 *   when status is in review state
 * @property {string} [status] - Filter your coupons effortlessly by status,
 *   such as draft, review and more.
 */

/**
 * @typedef GetItemCountParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Boolean value to get buy_now cart.
 * @property {string} [cartType] - The type of cart
 */

/**
 * @typedef GetPriceAdjustmentsParam
 * @property {string} cartId - Cart Id
 */

/**
 * @typedef GetPromosCouponConfigParam
 * @property {string} [entityType] - Entity type as promotion or coupon
 * @property {boolean} [isHidden] - Promotion coupon config shown or not
 */

/**
 * @typedef GetPromotionByIdParam
 * @property {string} id - Promotion id for fetching single promotion data for editing
 */

/**
 * @typedef GetPromotionCodeExistsParam
 * @property {string} [code] - Promotion code
 */

/**
 * @typedef GetPromotionPaymentOffersParam
 * @property {string} [id] - Cart id of the user cart
 * @property {number} [uid] - Cart uid of the user cart
 */

/** @typedef GetPromotionTagsParam */

/**
 * @typedef GetPromotionsParam
 * @property {number} [pageNo] - Current page no as per pagination
 * @property {number} [pageSize] - Promotion max records fetched in single request
 * @property {string} [q] - Filter by promotion name or title
 * @property {boolean} [isActive] - Filter by active or inactive promotion
 * @property {string} [promoGroup] - Filter by promotion group
 * @property {string} [promotionType] - Filter promotion type
 * @property {string} [fpPanel] - Filter non extension promotions
 * @property {string} [promotionId] - Filter by promotion id
 * @property {string} [createdBy] - Filter by promotion creater user id
 * @property {string} [reviewedBy] - Filter by promotion reviewer user id
 * @property {string} [approvedStartTime] - Filter promotion by start time date
 *   range when status is in approved state
 * @property {string} [approvedEndTime] - Filter promotion by end time date
 *   range when status is in approved state
 * @property {string} [reviewStartTime] - Filter promotion by start time date
 *   range when status is in review state
 * @property {string} [reviewEndTime] - Filter promotion by end time date range
 *   when status is in review state
 * @property {string} [status] - Filter your promotions effortlessly by status,
 *   such as draft, review and more
 */

/**
 * @typedef GetShipmentsParam
 * @property {number} [pickAtStoreUid] - ID of the store from where the order
 *   will be picked up by the customer, assuming the order_type is
 *   `PickAtStore`. This may or may not be the same as the ID of the ordering store.
 * @property {number} [orderingStoreId] - ID of the store where the customer is
 *   ordering from.
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
 * @property {boolean} [i] - This is a boolean value. Select `true` to retrieve
 *   all the items added in the cart.
 * @property {boolean} [b] - This is a boolean value. Select `true` to retrieve
 *   the price breakup of cart items.
 * @property {boolean} [buyNow] - This is a boolen value. Select `true` to
 *   set/initialize buy now cart
 * @property {string} [id] - The unique identifier of the cart
 * @property {string} [cartType] - The type of cart
 * @property {CartPlatformModel.PlatformAddCartPayload} body
 */

/**
 * @typedef PlatformCheckoutCartParam
 * @property {string} [id] - The unique identifier of the cart
 * @property {string} [cartType] - The type of cart
 * @property {CartPlatformModel.PlatformCartCheckoutDetailPayload} body
 */

/**
 * @typedef PlatformCheckoutCartV2Param
 * @property {string} [id] - The unique identifier of the cart
 * @property {string} [cartType] - The type of cart
 * @property {CartPlatformModel.PlatformCartCheckoutDetailV2Payload} body
 */

/**
 * @typedef PlatformUpdateCartParam
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
 * @property {string} [cartType] - The type of cart
 * @property {CartPlatformModel.PlatformUpdateCartPayload} body
 */

/**
 * @typedef RemoveAddressParam
 * @property {string} id - ID allotted to the selected address
 * @property {string} [userId] - Option to delete address for the provided user_id.
 */

/**
 * @typedef RemoveCouponParam
 * @property {string} [uid] - The unique identifier of the cart
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart
 * @property {string} [cartType] - The type of cart
 */

/**
 * @typedef RemovePriceAdjustmentParam
 * @property {string} id - Price Adjustment id for fetching single price
 *   adjustment data for editing
 */

/**
 * @typedef SelectAddressParam
 * @property {string} [cartId] - The unique identifier of the cart
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart
 * @property {boolean} [i] - This is a boolean value. Select `true` to retrieve
 *   all the items added in the cart.
 * @property {boolean} [b] - This is a boolean value. Select `true` to retrieve
 *   the price breakup of cart items.
 * @property {CartPlatformModel.PlatformSelectCartAddressPayload} body
 */

/**
 * @typedef SelectPaymentModeParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {CartPlatformModel.UpdateCartPaymentPayload} body
 */

/**
 * @typedef SelectPaymentModeV2Param
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {CartPlatformModel.UpdateCartPaymentPayloadV2} body
 */

/**
 * @typedef UpdateAddressParam
 * @property {string} id - ID allotted to the selected address
 * @property {CartPlatformModel.PlatformAddress} body
 */

/**
 * @typedef UpdateCartParam
 * @property {string} cartId - Current Cart id of user cart
 * @property {boolean} [b] - This is a boolean value. Select `true` to retrieve
 *   the price breakup of cart items.
 * @property {CartPlatformModel.UpdateCartPayload} body
 */

/**
 * @typedef UpdateCartMetaParam
 * @property {string} [id] - The unique identifier of the cart
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart
 * @property {string} [userId] - Option to update cart meta for the provided user_id
 * @property {CartPlatformModel.PlatformCartMetaPayload} body
 */

/**
 * @typedef UpdateCartMetaConfigParam
 * @property {string} cartMetaId - CartMeta id for fetching single cart meta
 *   data for editing
 * @property {CartPlatformModel.CartMetaConfigUpdate} body
 */

/**
 * @typedef UpdateCartUserParam
 * @property {string} [id] - Cart id
 * @property {CartPlatformModel.UpdateUserCartMapping} body
 */

/**
 * @typedef UpdateCartWithSharedItemsParam
 * @property {string} token - Token of the shared short link
 * @property {string} action - Operation to perform on the existing cart merge or replace.
 * @property {string} [cartId] - The unique identifier of the cart
 */

/**
 * @typedef UpdateCouponParam
 * @property {string} id - Coupon id for fetching single coupon data for editing
 * @property {CartPlatformModel.CouponUpdate} body
 */

/**
 * @typedef UpdateCouponPartiallyParam
 * @property {string} id - Coupon id for fetching single coupon data for editing
 * @property {CartPlatformModel.CouponPartialUpdate} body
 */

/**
 * @typedef UpdatePriceAdjustmentParam
 * @property {string} id - Price adjustment id for fetching single price
 *   adjustment data for editing
 * @property {CartPlatformModel.PriceAdjustmentUpdate} body
 */

/**
 * @typedef UpdatePromotionParam
 * @property {string} id - Promotion mongo _id for fetching single promotion
 *   data for editing
 * @property {CartPlatformModel.PromotionUpdate} body
 */

/**
 * @typedef UpdatePromotionPartiallyParam
 * @property {string} id - Promotion mongo _id for fetching single promotion
 *   data for editing
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
 * @property {CartPlatformModel.UpdateCartShipmentPayload} body
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
 * @property {string} [iin] - Debit/Credit card prefix (first 6 digit)
 * @property {string} [network] - Credit/Debit card issuer, e.g. VISA, MASTERCARD, RUPAY
 * @property {string} [type] - Card type, e.g. Credit, Debit
 * @property {string} [cardId] - Saved card token reference id
 * @property {string} [cartType] - Type of the cart
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
      body: CartPlatformModel.AddCartPayload().required(),
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
      body: CartPlatformModel.ApplyCouponPayload().required(),
    }).required();
  }

  /** @returns {CheckCartServiceabilityParam} */
  static checkCartServiceability() {
    return Joi.object({
      body: CartPlatformModel.OpenApiCartServiceabilityPayload().required(),
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
      cartType: Joi.string().allow(""),
      body: CartPlatformModel.DeleteCartPayload().required(),
    }).required();
  }

  /** @returns {DeleteCartMetaConfigParam} */
  static deleteCartMetaConfig() {
    return Joi.object({
      cartMetaId: Joi.string().allow("").required(),
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
      body: CartPlatformModel.OpenapiCartDetailsPayload().required(),
    }).required();
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
      id: Joi.string().allow(""),
      userId: Joi.string().allow(""),
      i: Joi.boolean(),
      b: Joi.boolean(),
      assignCardId: Joi.number(),
      buyNow: Joi.boolean(),
      cartType: Joi.string().allow(""),
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

  /** @returns {GetCartMetaConfigParam} */
  static getCartMetaConfig() {
    return Joi.object({
      cartMetaId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCartMetaConfigsParam} */
  static getCartMetaConfigs() {
    return Joi.object({}).required();
  }

  /** @returns {GetCartShareLinkParam} */
  static getCartShareLink() {
    return Joi.object({
      body: CartPlatformModel.GetShareCartLinkPayload().required(),
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

  /** @returns {GetCouponTagsParam} */
  static getCouponTags() {
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
      cartType: Joi.string().allow(""),
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

  /** @returns {GetPromotionPaymentOffersParam} */
  static getPromotionPaymentOffers() {
    return Joi.object({
      id: Joi.string().allow(""),
      uid: Joi.number(),
    }).required();
  }

  /** @returns {GetPromotionTagsParam} */
  static getPromotionTags() {
    return Joi.object({}).required();
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
      cartType: Joi.string().allow(""),
      body: CartPlatformModel.PlatformAddCartPayload().required(),
    }).required();
  }

  /** @returns {PlatformCheckoutCartParam} */
  static platformCheckoutCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      cartType: Joi.string().allow(""),
      body: CartPlatformModel.PlatformCartCheckoutDetailPayload().required(),
    }).required();
  }

  /** @returns {PlatformCheckoutCartV2Param} */
  static platformCheckoutCartV2() {
    return Joi.object({
      id: Joi.string().allow(""),
      cartType: Joi.string().allow(""),
      body: CartPlatformModel.PlatformCartCheckoutDetailV2Payload().required(),
    }).required();
  }

  /** @returns {PlatformUpdateCartParam} */
  static platformUpdateCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      i: Joi.boolean(),
      orderType: Joi.string().allow(""),
      b: Joi.boolean(),
      buyNow: Joi.boolean(),
      cartType: Joi.string().allow(""),
      body: CartPlatformModel.PlatformUpdateCartPayload().required(),
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
      cartType: Joi.string().allow(""),
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
      body: CartPlatformModel.PlatformSelectCartAddressPayload().required(),
    }).required();
  }

  /** @returns {SelectPaymentModeParam} */
  static selectPaymentMode() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      orderType: Joi.string().allow(""),
      body: CartPlatformModel.UpdateCartPaymentPayload().required(),
    }).required();
  }

  /** @returns {SelectPaymentModeV2Param} */
  static selectPaymentModeV2() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      orderType: Joi.string().allow(""),
      body: CartPlatformModel.UpdateCartPaymentPayloadV2().required(),
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
      body: CartPlatformModel.UpdateCartPayload().required(),
    }).required();
  }

  /** @returns {UpdateCartMetaParam} */
  static updateCartMeta() {
    return Joi.object({
      id: Joi.string().allow(""),
      buyNow: Joi.boolean(),
      userId: Joi.string().allow(""),
      body: CartPlatformModel.PlatformCartMetaPayload().required(),
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
      body: CartPlatformModel.UpdateCartShipmentPayload().required(),
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
    }).required();
  }
}

module.exports = CartPlatformApplicationValidator;
