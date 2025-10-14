export = CartPlatformApplicationValidator;
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
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [p]
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {CartPlatformModel.ApplyCouponDetails} body
 */
/**
 * @typedef ApplyLoyaltyPointsParam
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [i] - Select `true` to retrieve all the items added in the cart.
 * @property {boolean} [b] - Select `true` to retrieve the price breakup of cart items.
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart.
 * @property {CartPlatformModel.RedeemLoyaltyPoints} body
 */
/**
 * @typedef CheckCartServiceabilityParam
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
 * @property {CartPlatformModel.OpenApiCartServiceabilityCreation} body
 */
/**
 * @typedef CheckoutCartParam
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
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
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
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
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
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
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
 * @property {CartPlatformModel.OverrideCheckoutReq} body
 */
/**
 * @typedef PlatformAddItemsParam
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
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
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
 * @property {string} [id] - The unique identifier of the cart
 * @property {CartPlatformModel.PlatformCartCheckoutDetailCreation} body
 */
/**
 * @typedef PlatformCheckoutCartV2Param
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
 * @property {string} [id] - The unique identifier of the cart
 * @property {CartPlatformModel.PlatformCartCheckoutDetailV2Creation} body
 */
/**
 * @typedef PlatformUpdateCartParam
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
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
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
 * @property {string} [uid]
 * @property {boolean} [buyNow]
 */
/**
 * @typedef RemovePriceAdjustmentParam
 * @property {string} id
 */
/**
 * @typedef SelectAddressParam
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
 * @property {string} [cartId]
 * @property {boolean} [buyNow]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {CartPlatformModel.PlatformSelectCartAddress} body
 */
/**
 * @typedef SelectPaymentModeParam
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {string} [orderType]
 * @property {CartPlatformModel.CartPaymentUpdate} body
 */
/**
 * @typedef SelectPaymentModeV2Param
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
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
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {string} [addressId]
 * @property {string} [paymentMode]
 * @property {string} [paymentIdentifier]
 * @property {string} [aggregatorName]
 * @property {string} [merchantCode]
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
    /** @returns {ApplyLoyaltyPointsParam} */
    static applyLoyaltyPoints(): ApplyLoyaltyPointsParam;
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
    /** @returns {DeleteCouponParam} */
    static deleteCoupon(): DeleteCouponParam;
    /** @returns {DeletePromotionParam} */
    static deletePromotion(): DeletePromotionParam;
    /** @returns {FetchAndvalidateCartItemsParam} */
    static fetchAndvalidateCartItems(): FetchAndvalidateCartItemsParam;
    /** @returns {FetchCartMetaConfigParam} */
    static fetchCartMetaConfig(): any;
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
    /** @returns {GetPromotionOffersParam} */
    static getPromotionOffers(): GetPromotionOffersParam;
    /** @returns {GetPromotionPaymentOffersParam} */
    static getPromotionPaymentOffers(): GetPromotionPaymentOffersParam;
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
    export { AddAddressParam, AddItemsParam, AddPriceAdjustmentParam, ApplyCouponParam, ApplyLoyaltyPointsParam, CheckCartServiceabilityParam, CheckoutCartParam, CreateCartMetaConfigParam, CreateCouponParam, CreatePromotionParam, DeleteCartParam, DeleteCouponParam, DeletePromotionParam, FetchAndvalidateCartItemsParam, FetchCartMetaConfigParam, GetAbandonedCartParam, GetAbandonedCartDetailsParam, GetAddressByIdParam, GetAddressesParam, GetAppCouponsParam, GetAvailableDeliveryModesParam, GetCartParam, GetCartListParam, GetCartShareLinkParam, GetCartSharedItemsParam, GetCouponByIdParam, GetCouponCodeExistsParam, GetCouponOptionValuesParam, GetCouponsParam, GetItemCountParam, GetPriceAdjustmentsParam, GetPromosCouponConfigParam, GetPromotionByIdParam, GetPromotionCodeExistsParam, GetPromotionOffersParam, GetPromotionPaymentOffersParam, GetPromotionsParam, GetShipmentsParam, GetStoreAddressByUidParam, OverrideCartParam, PlatformAddItemsParam, PlatformCheckoutCartParam, PlatformCheckoutCartV2Param, PlatformUpdateCartParam, RemoveAddressParam, RemoveCouponParam, RemovePriceAdjustmentParam, SelectAddressParam, SelectPaymentModeParam, SelectPaymentModeV2Param, UpdateAddressParam, UpdateCartParam, UpdateCartMetaParam, UpdateCartMetaConfigParam, UpdateCartUserParam, UpdateCartWithSharedItemsParam, UpdateCouponParam, UpdateCouponPartiallyParam, UpdatePriceAdjustmentParam, UpdatePromotionParam, UpdatePromotionPartiallyParam, UpdateShipmentsParam, ValidateCouponForPaymentParam };
}
type AddAddressParam = {
    body: CartPlatformModel.PlatformAddress;
};
type AddItemsParam = {
    /**
     * - Current Cart id of user cart
     */
    cartId: string;
    b?: boolean;
    body: CartPlatformModel.AddCartCreation;
};
type AddPriceAdjustmentParam = {
    body: CartPlatformModel.PriceAdjustmentAdd;
};
type ApplyCouponParam = {
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
    i?: boolean;
    b?: boolean;
    p?: boolean;
    id?: string;
    buyNow?: boolean;
    body: CartPlatformModel.ApplyCouponDetails;
};
type ApplyLoyaltyPointsParam = {
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
    /**
     * - Select `true` to retrieve all the items added in the cart.
     */
    i?: boolean;
    /**
     * - Select `true` to retrieve the price breakup of cart items.
     */
    b?: boolean;
    /**
     * - This is boolean to get buy_now cart.
     */
    buyNow?: boolean;
    body: CartPlatformModel.RedeemLoyaltyPoints;
};
type CheckCartServiceabilityParam = {
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
    body: CartPlatformModel.OpenApiCartServiceabilityCreation;
};
type CheckoutCartParam = {
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
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
    body: CartPlatformModel.DeleteCartDetails;
};
type DeleteCouponParam = {
    id: string;
};
type DeletePromotionParam = {
    id: string;
};
type FetchAndvalidateCartItemsParam = {
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
    body: CartPlatformModel.OpenapiCartDetailsCreation;
};
type GetAbandonedCartParam = {
    pageNo?: number;
    pageSize?: number;
    fromDate?: string;
    toDate?: string;
    anonymousCart?: boolean;
    lastId?: string;
    sortOn?: string;
};
type GetAbandonedCartDetailsParam = {
    id?: string;
    i?: boolean;
    b?: boolean;
    c?: boolean;
};
type GetAddressByIdParam = {
    id: string;
    cartId?: string;
    buyNow?: boolean;
    mobileNo?: string;
    checkoutMode?: string;
    tags?: string;
    isDefault?: boolean;
    userId?: string;
};
type GetAddressesParam = {
    cartId?: string;
    buyNow?: boolean;
    mobileNo?: string;
    checkoutMode?: string;
    tags?: string;
    isDefault?: boolean;
    userId?: string;
};
type GetAppCouponsParam = {
    id?: string;
    buyNow?: boolean;
    slug?: string;
    storeId?: string;
};
type GetAvailableDeliveryModesParam = {
    areaCode: string;
    id?: string;
};
type GetCartParam = {
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    /**
     * - Option to fetch cart for the provided user_id.
     */
    userId?: string;
    /**
     * - The order type of shipment HomeDelivery - If
     * the customer wants the order home-delivered PickAtStore - If the customer
     * wants the handover of an order at the store itself.
     */
    orderType?: string;
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
};
type GetCartListParam = {
    fromDate?: string;
    toDate?: string;
    filterOn?: string;
};
type GetCartShareLinkParam = {
    body: CartPlatformModel.GetShareCartLinkCreation;
};
type GetCartSharedItemsParam = {
    /**
     * - Token of the shared short link
     */
    token: string;
};
type GetCouponByIdParam = {
    id: string;
};
type GetCouponCodeExistsParam = {
    code?: string;
};
type GetCouponsParam = {
    pageNo?: number;
    pageSize?: number;
    isArchived?: boolean;
    title?: string;
    isPublic?: boolean;
    isDisplay?: boolean;
    typeSlug?: string;
    code?: string;
    createdBy?: string;
    reviewedBy?: string;
    approvedStartTime?: string;
    approvedEndTime?: string;
    reviewStartTime?: string;
    reviewEndTime?: string;
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
};
type GetPriceAdjustmentsParam = {
    /**
     * - Cart id of user cart
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
    id: string;
};
type GetPromotionCodeExistsParam = {
    code?: string;
};
type GetPromotionOffersParam = {
    /**
     * - A short, human-readable, URL-friendly identifier
     * of a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/
     */
    slug?: string;
    /**
     * - Number of offers to be fetched to show
     */
    pageSize?: number;
    /**
     * - Type of promotion groups
     */
    promotionGroup?: string;
    /**
     * - Unique identifier of a store
     */
    storeId?: number;
    /**
     * - The type of cart
     */
    cartType?: string;
    /**
     * - Type of promotion to be fetched
     */
    promotionType?: string;
    /**
     * - The unique identifier of the user cart.
     */
    cartId?: string;
    /**
     * - Indicates whether to filter promotions
     * based on their auto_apply status.
     */
    autoApply?: boolean;
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
    pageNo?: number;
    pageSize?: number;
    q?: string;
    isActive?: boolean;
    promoGroup?: string;
    promotionType?: string;
    fpPanel?: string;
    promotionId?: string;
    createdBy?: string;
    reviewedBy?: string;
    approvedStartTime?: string;
    approvedEndTime?: string;
    reviewStartTime?: string;
    reviewEndTime?: string;
    status?: string;
};
type GetShipmentsParam = {
    pickAtStoreUid?: number;
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
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
    body: CartPlatformModel.OverrideCheckoutReq;
};
type PlatformAddItemsParam = {
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
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
     * - The order type of shipment HomeDelivery - If
     * the customer wants the order home-delivered PickAtStore - If the customer
     * wants the handover of an order at the store itself.
     */
    orderType?: string;
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    body: CartPlatformModel.PlatformAddCartDetails;
};
type PlatformCheckoutCartParam = {
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    body: CartPlatformModel.PlatformCartCheckoutDetailCreation;
};
type PlatformCheckoutCartV2Param = {
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    body: CartPlatformModel.PlatformCartCheckoutDetailV2Creation;
};
type PlatformUpdateCartParam = {
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
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
    body: CartPlatformModel.PlatformUpdateCartDetails;
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
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
    uid?: string;
    buyNow?: boolean;
};
type RemovePriceAdjustmentParam = {
    id: string;
};
type SelectAddressParam = {
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
    cartId?: string;
    buyNow?: boolean;
    i?: boolean;
    b?: boolean;
    body: CartPlatformModel.PlatformSelectCartAddress;
};
type SelectPaymentModeParam = {
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
    id?: string;
    buyNow?: boolean;
    orderType?: string;
    body: CartPlatformModel.CartPaymentUpdate;
};
type SelectPaymentModeV2Param = {
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
    id?: string;
    buyNow?: boolean;
    orderType?: string;
    body: CartPlatformModel.UpdateCartPaymentRequestV2;
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
    b?: boolean;
    body: CartPlatformModel.UpdateCartCreation;
};
type UpdateCartMetaParam = {
    id?: string;
    buyNow?: boolean;
    body: CartPlatformModel.PlatformCartMetaCreation;
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
    cartId?: string;
};
type UpdateCouponParam = {
    id: string;
    body: CartPlatformModel.CouponUpdate;
};
type UpdateCouponPartiallyParam = {
    id: string;
    body: CartPlatformModel.CouponPartialUpdate;
};
type UpdatePriceAdjustmentParam = {
    id: string;
    body: CartPlatformModel.PriceAdjustmentUpdate;
};
type UpdatePromotionParam = {
    id: string;
    body: CartPlatformModel.PromotionUpdate;
};
type UpdatePromotionPartiallyParam = {
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
    body: CartPlatformModel.UpdateCartShipmentCreation;
};
type ValidateCouponForPaymentParam = {
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
    id?: string;
    buyNow?: boolean;
    addressId?: string;
    paymentMode?: string;
    paymentIdentifier?: string;
    aggregatorName?: string;
    merchantCode?: string;
};
type FetchCartMetaConfigParam = any;
type GetCouponOptionValuesParam = any;
import CartPlatformModel = require("./CartPlatformModel");
