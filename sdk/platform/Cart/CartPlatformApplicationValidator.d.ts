export = CartPlatformApplicationValidator;
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
declare class CartPlatformApplicationValidator {
    /** @returns {AddAddressParam} */
    static addAddress(): AddAddressParam;
    /** @returns {AddItemsParam} */
    static addItems(): AddItemsParam;
    /** @returns {AddPriceAdjustmentParam} */
    static addPriceAdjustment(): AddPriceAdjustmentParam;
    /** @returns {ApplyCouponParam} */
    static applyCoupon(): ApplyCouponParam;
    /** @returns {CheckCartServiceabilityParam} */
    static checkCartServiceability(): CheckCartServiceabilityParam;
    /** @returns {CheckoutCartParam} */
    static checkoutCart(): CheckoutCartParam;
    /** @returns {CreateCartMetaConfigParam} */
    static createCartMetaConfig(): CreateCartMetaConfigParam;
    /** @returns {CreateCouponParam} */
    static createCoupon(): CreateCouponParam;
    /** @returns {CreatePromotionParam} */
    static createPromotion(): CreatePromotionParam;
    /** @returns {DeleteCartParam} */
    static deleteCart(): DeleteCartParam;
    /** @returns {DeleteCartMetaConfigParam} */
    static deleteCartMetaConfig(): DeleteCartMetaConfigParam;
    /** @returns {DeleteCouponParam} */
    static deleteCoupon(): DeleteCouponParam;
    /** @returns {DeletePromotionParam} */
    static deletePromotion(): DeletePromotionParam;
    /** @returns {FetchAndvalidateCartItemsParam} */
    static fetchAndvalidateCartItems(): FetchAndvalidateCartItemsParam;
    /** @returns {GetAbandonedCartParam} */
    static getAbandonedCart(): GetAbandonedCartParam;
    /** @returns {GetAbandonedCartDetailsParam} */
    static getAbandonedCartDetails(): GetAbandonedCartDetailsParam;
    /** @returns {GetAddressByIdParam} */
    static getAddressById(): GetAddressByIdParam;
    /** @returns {GetAddressesParam} */
    static getAddresses(): GetAddressesParam;
    /** @returns {GetAppCouponsParam} */
    static getAppCoupons(): GetAppCouponsParam;
    /** @returns {GetAvailableDeliveryModesParam} */
    static getAvailableDeliveryModes(): GetAvailableDeliveryModesParam;
    /** @returns {GetCartParam} */
    static getCart(): GetCartParam;
    /** @returns {GetCartListParam} */
    static getCartList(): GetCartListParam;
    /** @returns {GetCartMetaConfigParam} */
    static getCartMetaConfig(): GetCartMetaConfigParam;
    /** @returns {GetCartMetaConfigsParam} */
    static getCartMetaConfigs(): any;
    /** @returns {GetCartShareLinkParam} */
    static getCartShareLink(): GetCartShareLinkParam;
    /** @returns {GetCartSharedItemsParam} */
    static getCartSharedItems(): GetCartSharedItemsParam;
    /** @returns {GetCouponByIdParam} */
    static getCouponById(): GetCouponByIdParam;
    /** @returns {GetCouponCodeExistsParam} */
    static getCouponCodeExists(): GetCouponCodeExistsParam;
    /** @returns {GetCouponOptionValuesParam} */
    static getCouponOptionValues(): any;
    /** @returns {GetCouponTagsParam} */
    static getCouponTags(): any;
    /** @returns {GetCouponsParam} */
    static getCoupons(): GetCouponsParam;
    /** @returns {GetItemCountParam} */
    static getItemCount(): GetItemCountParam;
    /** @returns {GetPriceAdjustmentsParam} */
    static getPriceAdjustments(): GetPriceAdjustmentsParam;
    /** @returns {GetPromosCouponConfigParam} */
    static getPromosCouponConfig(): GetPromosCouponConfigParam;
    /** @returns {GetPromotionByIdParam} */
    static getPromotionById(): GetPromotionByIdParam;
    /** @returns {GetPromotionCodeExistsParam} */
    static getPromotionCodeExists(): GetPromotionCodeExistsParam;
    /** @returns {GetPromotionPaymentOffersParam} */
    static getPromotionPaymentOffers(): GetPromotionPaymentOffersParam;
    /** @returns {GetPromotionTagsParam} */
    static getPromotionTags(): any;
    /** @returns {GetPromotionsParam} */
    static getPromotions(): GetPromotionsParam;
    /** @returns {GetShipmentsParam} */
    static getShipments(): GetShipmentsParam;
    /** @returns {GetStoreAddressByUidParam} */
    static getStoreAddressByUid(): GetStoreAddressByUidParam;
    /** @returns {OverrideCartParam} */
    static overrideCart(): OverrideCartParam;
    /** @returns {PlatformAddItemsParam} */
    static platformAddItems(): PlatformAddItemsParam;
    /** @returns {PlatformCheckoutCartParam} */
    static platformCheckoutCart(): PlatformCheckoutCartParam;
    /** @returns {PlatformCheckoutCartV2Param} */
    static platformCheckoutCartV2(): PlatformCheckoutCartV2Param;
    /** @returns {PlatformUpdateCartParam} */
    static platformUpdateCart(): PlatformUpdateCartParam;
    /** @returns {RemoveAddressParam} */
    static removeAddress(): RemoveAddressParam;
    /** @returns {RemoveCouponParam} */
    static removeCoupon(): RemoveCouponParam;
    /** @returns {RemovePriceAdjustmentParam} */
    static removePriceAdjustment(): RemovePriceAdjustmentParam;
    /** @returns {SelectAddressParam} */
    static selectAddress(): SelectAddressParam;
    /** @returns {SelectPaymentModeParam} */
    static selectPaymentMode(): SelectPaymentModeParam;
    /** @returns {SelectPaymentModeV2Param} */
    static selectPaymentModeV2(): SelectPaymentModeV2Param;
    /** @returns {UpdateAddressParam} */
    static updateAddress(): UpdateAddressParam;
    /** @returns {UpdateCartParam} */
    static updateCart(): UpdateCartParam;
    /** @returns {UpdateCartMetaParam} */
    static updateCartMeta(): UpdateCartMetaParam;
    /** @returns {UpdateCartMetaConfigParam} */
    static updateCartMetaConfig(): UpdateCartMetaConfigParam;
    /** @returns {UpdateCartUserParam} */
    static updateCartUser(): UpdateCartUserParam;
    /** @returns {UpdateCartWithSharedItemsParam} */
    static updateCartWithSharedItems(): UpdateCartWithSharedItemsParam;
    /** @returns {UpdateCouponParam} */
    static updateCoupon(): UpdateCouponParam;
    /** @returns {UpdateCouponPartiallyParam} */
    static updateCouponPartially(): UpdateCouponPartiallyParam;
    /** @returns {UpdatePriceAdjustmentParam} */
    static updatePriceAdjustment(): UpdatePriceAdjustmentParam;
    /** @returns {UpdatePromotionParam} */
    static updatePromotion(): UpdatePromotionParam;
    /** @returns {UpdatePromotionPartiallyParam} */
    static updatePromotionPartially(): UpdatePromotionPartiallyParam;
    /** @returns {UpdateShipmentsParam} */
    static updateShipments(): UpdateShipmentsParam;
    /** @returns {ValidateCouponForPaymentParam} */
    static validateCouponForPayment(): ValidateCouponForPaymentParam;
}
declare namespace CartPlatformApplicationValidator {
    export { AddAddressParam, AddItemsParam, AddPriceAdjustmentParam, ApplyCouponParam, CheckCartServiceabilityParam, CheckoutCartParam, CreateCartMetaConfigParam, CreateCouponParam, CreatePromotionParam, DeleteCartParam, DeleteCartMetaConfigParam, DeleteCouponParam, DeletePromotionParam, FetchAndvalidateCartItemsParam, GetAbandonedCartParam, GetAbandonedCartDetailsParam, GetAddressByIdParam, GetAddressesParam, GetAppCouponsParam, GetAvailableDeliveryModesParam, GetCartParam, GetCartListParam, GetCartMetaConfigParam, GetCartMetaConfigsParam, GetCartShareLinkParam, GetCartSharedItemsParam, GetCouponByIdParam, GetCouponCodeExistsParam, GetCouponOptionValuesParam, GetCouponTagsParam, GetCouponsParam, GetItemCountParam, GetPriceAdjustmentsParam, GetPromosCouponConfigParam, GetPromotionByIdParam, GetPromotionCodeExistsParam, GetPromotionPaymentOffersParam, GetPromotionTagsParam, GetPromotionsParam, GetShipmentsParam, GetStoreAddressByUidParam, OverrideCartParam, PlatformAddItemsParam, PlatformCheckoutCartParam, PlatformCheckoutCartV2Param, PlatformUpdateCartParam, RemoveAddressParam, RemoveCouponParam, RemovePriceAdjustmentParam, SelectAddressParam, SelectPaymentModeParam, SelectPaymentModeV2Param, UpdateAddressParam, UpdateCartParam, UpdateCartMetaParam, UpdateCartMetaConfigParam, UpdateCartUserParam, UpdateCartWithSharedItemsParam, UpdateCouponParam, UpdateCouponPartiallyParam, UpdatePriceAdjustmentParam, UpdatePromotionParam, UpdatePromotionPartiallyParam, UpdateShipmentsParam, ValidateCouponForPaymentParam };
}
type AddAddressParam = {
    body: CartPlatformModel.PlatformAddress;
};
type AddItemsParam = {
    /**
     * - Current Cart _id
     */
    cartId: string;
    /**
     * - This is a boolean value. Select `true` to retrieve
     * the price breakup of cart items.
     */
    b?: boolean;
    body: CartPlatformModel.AddCartPayload;
};
type AddPriceAdjustmentParam = {
    body: CartPlatformModel.PriceAdjustmentAdd;
};
type ApplyCouponParam = {
    /**
     * - This is a boolean value. Select `true` to retrieve
     * all the items added in the cart.
     */
    i?: boolean;
    /**
     * - This is a boolean value. Select `true` to retrieve
     * the price breakup of cart items.
     */
    b?: boolean;
    /**
     * - This is a boolean value. Select `true` for getting
     * a payment option in response.
     */
    p?: boolean;
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    /**
     * - This is boolean to get buy_now cart
     */
    buyNow?: boolean;
    body: CartPlatformModel.ApplyCouponPayload;
};
type CheckCartServiceabilityParam = {
    body: CartPlatformModel.OpenApiCartServiceabilityPayload;
};
type CheckoutCartParam = {
    body: CartPlatformModel.OpenApiPlatformCheckoutReq;
};
type CreateCartMetaConfigParam = {
    body: CartPlatformModel.CartMetaConfigAdd;
};
type CreateCouponParam = {
    body: CartPlatformModel.CouponAdd;
};
type CreatePromotionParam = {
    body: CartPlatformModel.PromotionAdd;
};
type DeleteCartParam = {
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
    /**
     * - The type of cart
     */
    cartType?: string;
    body: CartPlatformModel.DeleteCartPayload;
};
type DeleteCartMetaConfigParam = {
    /**
     * - CartMeta mongo _id for fetching single cart
     * meta data for editing
     */
    cartMetaId: string;
};
type DeleteCouponParam = {
    id: string;
};
type DeletePromotionParam = {
    /**
     * - Promotion id for fetching single promotion data for deleting
     */
    id: string;
};
type FetchAndvalidateCartItemsParam = {
    body: CartPlatformModel.OpenapiCartDetailsPayload;
};
type GetAbandonedCartParam = {
    /**
     * - Current page no as per pagination
     */
    pageNo?: number;
    /**
     * - Cart max records fetched in single request
     */
    pageSize?: number;
    /**
     * - Cart which are created on or after from_date
     */
    fromDate?: string;
    /**
     * - Cart which are created on or before to_date
     */
    toDate?: string;
    /**
     * - Filter by `anonymous_cart`
     */
    anonymousCart?: boolean;
    /**
     * - Pagination is done based on the last_object_id
     */
    lastId?: string;
    /**
     * - On which column to sort on i.e created_on or
     * last_modified
     */
    sortOn?: string;
};
type GetAbandonedCartDetailsParam = {
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    /**
     * - This is a boolean value. Select `true` to retrieve
     * all the items added in the cart.
     */
    i?: boolean;
    /**
     * - This is a boolean value. Select `true` to retrieve
     * the price breakup of cart items.
     */
    b?: boolean;
    /**
     * - This is a boolean value. Select `true` to retrieve
     * the cod charges in breakup of cart items.
     */
    c?: boolean;
};
type GetAddressByIdParam = {
    /**
     * - ID allotted to the selected address
     */
    id: string;
    /**
     * - The unique identifier of the cart
     */
    cartId?: string;
    /**
     * - This is boolean to get buy_now cart
     */
    buyNow?: boolean;
    /**
     * - 10-digit mobile number
     */
    mobileNo?: string;
    /**
     * - Option to checkout for self or for others
     */
    checkoutMode?: string;
    /**
     * - Tag given to an address, e.g. work, home, office, shop.
     */
    tags?: string;
    /**
     * - This is a boolean value. Select `true` to
     * fetch the default address.
     */
    isDefault?: boolean;
    /**
     * - Option to fetch address for the provided user_id.
     */
    userId?: string;
};
type GetAddressesParam = {
    /**
     * - The unique identifier of the cart
     */
    cartId?: string;
    /**
     * - This is boolean to get buy_now cart
     */
    buyNow?: boolean;
    /**
     * - 10-digit mobile number
     */
    mobileNo?: string;
    /**
     * - Option to checkout for `self` or for
     * `others`. By default, it is `self`.
     */
    checkoutMode?: string;
    /**
     * - Tag given to an address, e.g. work, home, office, shop.
     */
    tags?: string;
    /**
     * - This is a boolean value. Select `true` to
     * fetch the default address.
     */
    isDefault?: boolean;
    /**
     * - Option to fetch address for the provided user_id.
     */
    userId?: string;
};
type GetAppCouponsParam = {
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
    /**
     * - This is boolean to get buy_now cart
     */
    buyNow?: boolean;
    /**
     * - Product slug to fetch the available coupons
     */
    slug?: string;
    /**
     * - Store id
     */
    storeId?: string;
};
type GetAvailableDeliveryModesParam = {
    areaCode: string;
    id?: string;
};
type GetCartParam = {
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    /**
     * - Option to fetch cart for the provided user_id.
     */
    userId?: string;
    /**
     * - This is a boolean value. Select `true` to retrieve
     * all the items added in the cart.
     */
    i?: boolean;
    /**
     * - This is a boolean value. Select `true` to retrieve
     * the price breakup of cart items.
     */
    b?: boolean;
    /**
     * - Token of user's debit or credit card
     */
    assignCardId?: number;
    /**
     * - This is a boolen value. Select `true` to
     * set/initialize buy now cart
     */
    buyNow?: boolean;
    /**
     * - The type of cart
     */
    cartType?: string;
};
type GetCartListParam = {
    /**
     * - Cart which are created on or after from_date.
     * Supports ISO date format.
     */
    fromDate?: string;
    /**
     * - Cart which are created on or before to_date.
     * Supports ISO date format.
     */
    toDate?: string;
    /**
     * - On which column to sort on i.e created_on or
     * last_modified
     */
    filterOn?: string;
};
type GetCartMetaConfigParam = {
    /**
     * - CartMeta mongo _id for fetching single cart
     * meta data for editing
     */
    cartMetaId: string;
};
type GetCartShareLinkParam = {
    body: CartPlatformModel.GetShareCartLinkPayload;
};
type GetCartSharedItemsParam = {
    /**
     * - Token of the shared short link
     */
    token: string;
};
type GetCouponByIdParam = {
    /**
     * - Coupon mongo _id for fetching single coupon data for editing
     */
    id: string;
};
type GetCouponCodeExistsParam = {
    /**
     * - Coupon code
     */
    code?: string;
};
type GetCouponsParam = {
    /**
     * - Current page no as per pagination
     */
    pageNo?: number;
    /**
     * - Coupon max records fetched in single request
     */
    pageSize?: number;
    /**
     * - Filter by active or inactive coupon
     */
    isArchived?: boolean;
    /**
     * - Filter coupon by coupon title
     */
    title?: string;
    /**
     * - Filter coupons which is public
     */
    isPublic?: boolean;
    /**
     * - Filter coupons which is visible to sales channel
     */
    isDisplay?: boolean;
    /**
     * - Filter by coupon type
     */
    typeSlug?: string;
    /**
     * - Filter by coupon code
     */
    code?: string;
    /**
     * - Filter by coupon creater user id
     */
    createdBy?: string;
    /**
     * - Filter by coupon reviewer user id
     */
    reviewedBy?: string;
    /**
     * - Filter coupon by start time date
     * range when status is approved
     */
    approvedStartTime?: string;
    /**
     * - Filter coupon by end time date range
     * when status is approved
     */
    approvedEndTime?: string;
    /**
     * - Filter coupon by start time date range
     * when status is in review state
     */
    reviewStartTime?: string;
    /**
     * - Filter coupon by end time date range
     * when status is in review state
     */
    reviewEndTime?: string;
    /**
     * - Filter your coupons effortlessly by status,
     * such as draft, review and more.
     */
    status?: string;
};
type GetItemCountParam = {
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
    /**
     * - Boolean value to get buy_now cart.
     */
    buyNow?: boolean;
    /**
     * - The type of cart
     */
    cartType?: string;
};
type GetPriceAdjustmentsParam = {
    /**
     * - Cart Id
     */
    cartId: string;
};
type GetPromosCouponConfigParam = {
    /**
     * - Entity type as promotion or coupon
     */
    entityType?: string;
    /**
     * - Promotion coupon config shown or not
     */
    isHidden?: boolean;
};
type GetPromotionByIdParam = {
    /**
     * - Promotion id for fetching single promotion data for editing
     */
    id: string;
};
type GetPromotionCodeExistsParam = {
    /**
     * - Promotion code
     */
    code?: string;
};
type GetPromotionPaymentOffersParam = {
    /**
     * - Cart id of the user cart
     */
    id?: string;
    /**
     * - Cart uid of the user cart
     */
    uid?: number;
};
type GetPromotionsParam = {
    /**
     * - Current page no as per pagination
     */
    pageNo?: number;
    /**
     * - Promotion max records fetched in single request
     */
    pageSize?: number;
    /**
     * - Filter by promotion name or title
     */
    q?: string;
    /**
     * - Filter by active or inactive promotion
     */
    isActive?: boolean;
    /**
     * - Filter by promotion group
     */
    promoGroup?: string;
    /**
     * - Filter promotion type
     */
    promotionType?: string;
    /**
     * - Filter non extension promotions
     */
    fpPanel?: string;
    /**
     * - Filter by promotion id
     */
    promotionId?: string;
    /**
     * - Filter by promotion creater user id
     */
    createdBy?: string;
    /**
     * - Filter by promotion reviewer user id
     */
    reviewedBy?: string;
    /**
     * - Filter promotion by start time date
     * range when status is in approved state
     */
    approvedStartTime?: string;
    /**
     * - Filter promotion by end time date
     * range when status is in approved state
     */
    approvedEndTime?: string;
    /**
     * - Filter promotion by start time date
     * range when status is in review state
     */
    reviewStartTime?: string;
    /**
     * - Filter promotion by end time date range
     * when status is in review state
     */
    reviewEndTime?: string;
    /**
     * - Filter your promotions effortlessly by status,
     * such as draft, review and more
     */
    status?: string;
};
type GetShipmentsParam = {
    /**
     * - ID of the store from where the order
     * will be picked up by the customer, assuming the order_type is
     * `PickAtStore`. This may or may not be the same as the ID of the ordering store.
     */
    pickAtStoreUid?: number;
    /**
     * - ID of the store where the customer is
     * ordering from.
     */
    orderingStoreId?: number;
    /**
     * - This is a boolean value. Select `true` to retrieve
     * all the items added in the cart.
     */
    i?: boolean;
    /**
     * - This is a boolean value. Select `true` for getting
     * a payment option in response.
     */
    p?: boolean;
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    /**
     * - ID allotted to the selected address
     */
    addressId?: string;
    /**
     * - The PIN Code of the destination address, e.g. 400059
     */
    areaCode?: string;
    /**
     * - The order type of shipment HomeDelivery - If
     * the customer wants the order home-delivered PickAtStore - If the customer
     * wants the handover of an order at the store itself.
     */
    orderType?: string;
};
type GetStoreAddressByUidParam = {
    storeUid: number;
};
type OverrideCartParam = {
    body: CartPlatformModel.OverrideCheckoutReq;
};
type PlatformAddItemsParam = {
    /**
     * - This is a boolean value. Select `true` to retrieve
     * all the items added in the cart.
     */
    i?: boolean;
    /**
     * - This is a boolean value. Select `true` to retrieve
     * the price breakup of cart items.
     */
    b?: boolean;
    /**
     * - This is a boolen value. Select `true` to
     * set/initialize buy now cart
     */
    buyNow?: boolean;
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    /**
     * - The type of cart
     */
    cartType?: string;
    body: CartPlatformModel.PlatformAddCartPayload;
};
type PlatformCheckoutCartParam = {
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    /**
     * - The type of cart
     */
    cartType?: string;
    body: CartPlatformModel.PlatformCartCheckoutDetailPayload;
};
type PlatformCheckoutCartV2Param = {
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    /**
     * - The type of cart
     */
    cartType?: string;
    body: CartPlatformModel.PlatformCartCheckoutDetailV2Payload;
};
type PlatformUpdateCartParam = {
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    /**
     * - This is a boolean value. Select `true` to retrieve
     * all the items added in the cart.
     */
    i?: boolean;
    /**
     * - The order type of shipment HomeDelivery - If
     * the customer wants the order home-delivered PickAtStore - If the customer
     * wants the handover of an order at the store itself.
     */
    orderType?: string;
    /**
     * - This is a boolean value. Select `true` to retrieve
     * the price breakup of cart items.
     */
    b?: boolean;
    /**
     * - This is a boolen value. Select `true` to
     * set/initialize buy now cart
     */
    buyNow?: boolean;
    /**
     * - The type of cart
     */
    cartType?: string;
    body: CartPlatformModel.PlatformUpdateCartPayload;
};
type RemoveAddressParam = {
    /**
     * - ID allotted to the selected address
     */
    id: string;
    /**
     * - Option to delete address for the provided user_id.
     */
    userId?: string;
};
type RemoveCouponParam = {
    /**
     * - The unique identifier of the cart
     */
    uid?: string;
    /**
     * - This is boolean to get buy_now cart
     */
    buyNow?: boolean;
    /**
     * - The type of cart
     */
    cartType?: string;
};
type RemovePriceAdjustmentParam = {
    /**
     * - Price Adjustment id for fetching single price
     * adjustment data for editing
     */
    id: string;
};
type SelectAddressParam = {
    /**
     * - The unique identifier of the cart
     */
    cartId?: string;
    /**
     * - This is boolean to get buy_now cart
     */
    buyNow?: boolean;
    /**
     * - This is a boolean value. Select `true` to retrieve
     * all the items added in the cart.
     */
    i?: boolean;
    /**
     * - This is a boolean value. Select `true` to retrieve
     * the price breakup of cart items.
     */
    b?: boolean;
    body: CartPlatformModel.PlatformSelectCartAddressPayload;
};
type SelectPaymentModeParam = {
    id?: string;
    buyNow?: boolean;
    /**
     * - The order type of shipment HomeDelivery - If
     * the customer wants the order home-delivered PickAtStore - If the customer
     * wants the handover of an order at the store itself.
     */
    orderType?: string;
    body: CartPlatformModel.UpdateCartPaymentPayload;
};
type SelectPaymentModeV2Param = {
    id?: string;
    buyNow?: boolean;
    /**
     * - The order type of shipment HomeDelivery - If
     * the customer wants the order home-delivered PickAtStore - If the customer
     * wants the handover of an order at the store itself.
     */
    orderType?: string;
    body: CartPlatformModel.UpdateCartPaymentPayloadV2;
};
type UpdateAddressParam = {
    /**
     * - ID allotted to the selected address
     */
    id: string;
    body: CartPlatformModel.PlatformAddress;
};
type UpdateCartParam = {
    /**
     * - Current Cart id of user cart
     */
    cartId: string;
    /**
     * - This is a boolean value. Select `true` to retrieve
     * the price breakup of cart items.
     */
    b?: boolean;
    body: CartPlatformModel.UpdateCartPayload;
};
type UpdateCartMetaParam = {
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    /**
     * - This is boolean to get buy_now cart
     */
    buyNow?: boolean;
    /**
     * - Option to update cart meta for the provided user_id
     */
    userId?: string;
    body: CartPlatformModel.PlatformCartMetaPayload;
};
type UpdateCartMetaConfigParam = {
    /**
     * - CartMeta id for fetching single cart meta
     * data for editing
     */
    cartMetaId: string;
    body: CartPlatformModel.CartMetaConfigUpdate;
};
type UpdateCartUserParam = {
    /**
     * - Cart id
     */
    id?: string;
    body: CartPlatformModel.UpdateUserCartMapping;
};
type UpdateCartWithSharedItemsParam = {
    /**
     * - Token of the shared short link
     */
    token: string;
    /**
     * - Operation to perform on the existing cart merge or replace.
     */
    action: string;
    /**
     * - The unique identifier of the cart
     */
    cartId?: string;
};
type UpdateCouponParam = {
    /**
     * - Coupon id for fetching single coupon data for editing
     */
    id: string;
    body: CartPlatformModel.CouponUpdate;
};
type UpdateCouponPartiallyParam = {
    /**
     * - Coupon id for fetching single coupon data for editing
     */
    id: string;
    body: CartPlatformModel.CouponPartialUpdate;
};
type UpdatePriceAdjustmentParam = {
    /**
     * - Price adjustment id for fetching single price
     * adjustment data for editing
     */
    id: string;
    body: CartPlatformModel.PriceAdjustmentUpdate;
};
type UpdatePromotionParam = {
    /**
     * - Promotion mongo _id for fetching single promotion
     * data for editing
     */
    id: string;
    body: CartPlatformModel.PromotionUpdate;
};
type UpdatePromotionPartiallyParam = {
    /**
     * - Promotion mongo _id for fetching single promotion
     * data for editing
     */
    id: string;
    body: CartPlatformModel.PromotionPartialUpdate;
};
type UpdateShipmentsParam = {
    /**
     * - This is a boolean value. Select `true` to retrieve
     * all the items added in the cart.
     */
    i?: boolean;
    /**
     * - This is a boolean value. Select `true` for getting
     * a payment option in response.
     */
    p?: boolean;
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    /**
     * - ID allotted to an address
     */
    addressId?: string;
    /**
     * - The PIN Code of the destination address, e.g. 400059
     */
    areaCode?: string;
    /**
     * - The order type of shipment HomeDelivery - If
     * the customer wants the order home-delivered PickAtStore - If the customer
     * wants the handover of an order at the store itself.
     */
    orderType?: string;
    body: CartPlatformModel.UpdateCartShipmentPayload;
};
type ValidateCouponForPaymentParam = {
    id?: string;
    buyNow?: boolean;
    addressId?: string;
    paymentMode?: string;
    paymentIdentifier?: string;
    aggregatorName?: string;
    merchantCode?: string;
    /**
     * - Debit/Credit card prefix (first 6 digit)
     */
    iin?: string;
    /**
     * - Credit/Debit card issuer, e.g. VISA, MASTERCARD, RUPAY
     */
    network?: string;
    /**
     * - Card type, e.g. Credit, Debit
     */
    type?: string;
    /**
     * - Saved card token reference id
     */
    cardId?: string;
    /**
     * - Type of the cart
     */
    cartType?: string;
};
type GetCartMetaConfigsParam = any;
type GetCouponOptionValuesParam = any;
type GetCouponTagsParam = any;
type GetPromotionTagsParam = any;
import CartPlatformModel = require("./CartPlatformModel");
