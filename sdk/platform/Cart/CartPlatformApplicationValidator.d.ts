export = CartPlatformApplicationValidator;
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
 * @property {string} [cartType] - The type of cart
 * @property {CartPlatformModel.DeleteCartRequest} body
 */
/**
 * @typedef DeleteCartMetaConfigParam
 * @property {string} cartMetaId - CartMeta mongo _id for fetching single cart
 *   meta data for editing
 */
/**
 * @typedef FetchAndvalidateCartItemsParam
 * @property {CartPlatformModel.OpenapiCartDetailsRequest} body
 */
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
 * @property {string} [fromDate]
 * @property {string} [toDate]
 * @property {string} [filterOn]
 */
/**
 * @typedef GetCartMetaConfigParam
 * @property {string} cartMetaId - CartMeta mongo _id for fetching single cart
 *   meta data for editing
 */
/** @typedef GetCartMetaConfigsParam */
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
/** @typedef GetCouponTagsParam */
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
 * @property {boolean} [buyNow] - Boolean value to get buy_now cart.
 * @property {string} [cartType] - The type of cart
 */
/**
 * @typedef GetPriceAdjustmentsParam
 * @property {string} cartId - Cart Id
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
/** @typedef GetPromotionTagsParam */
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
 * @property {boolean} [i] - This is a boolean value. Select `true` to retrieve
 *   all the items added in the cart.
 * @property {boolean} [b] - This is a boolean value. Select `true` to retrieve
 *   the price breakup of cart items.
 * @property {boolean} [buyNow] - This is a boolen value. Select `true` to
 *   set/initialize buy now cart
 * @property {string} [id] - The unique identifier of the cart
 * @property {string} [cartType] - The type of cart
 * @property {CartPlatformModel.PlatformAddCartRequest} body
 */
/**
 * @typedef PlatformCheckoutCartParam
 * @property {string} [id] - The unique identifier of the cart
 * @property {string} [cartType] - The type of cart
 * @property {CartPlatformModel.PlatformCartCheckoutDetailRequest} body
 */
/**
 * @typedef PlatformCheckoutCartV2Param
 * @property {string} [id] - The unique identifier of the cart
 * @property {string} [cartType] - The type of cart
 * @property {CartPlatformModel.PlatformCartCheckoutDetailV2Request} body
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
 * @property {string} [cartType] - The type of cart
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
 * @property {string} [userId]
 * @property {CartPlatformModel.PlatformCartMetaRequest} body
 */
/**
 * @typedef UpdateCartMetaConfigParam
 * @property {string} cartMetaId - CartMeta mongo _id for fetching single cart
 *   meta data for editing
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
    export { AddAddressParam, AddItemsParam, AddPriceAdjustmentParam, ApplyCouponParam, CheckCartServiceabilityParam, CheckoutCartParam, CreateCartMetaConfigParam, CreateCouponParam, CreatePromotionParam, DeleteCartParam, DeleteCartMetaConfigParam, FetchAndvalidateCartItemsParam, GetAbandonedCartParam, GetAbandonedCartDetailsParam, GetAddressByIdParam, GetAddressesParam, GetAppCouponsParam, GetAvailableDeliveryModesParam, GetCartParam, GetCartListParam, GetCartMetaConfigParam, GetCartMetaConfigsParam, GetCartShareLinkParam, GetCartSharedItemsParam, GetCouponByIdParam, GetCouponCodeExistsParam, GetCouponOptionValuesParam, GetCouponTagsParam, GetCouponsParam, GetItemCountParam, GetPriceAdjustmentsParam, GetPromosCouponConfigParam, GetPromotionByIdParam, GetPromotionCodeExistsParam, GetPromotionTagsParam, GetPromotionsParam, GetShipmentsParam, GetStoreAddressByUidParam, OverrideCartParam, PlatformAddItemsParam, PlatformCheckoutCartParam, PlatformCheckoutCartV2Param, PlatformUpdateCartParam, RemoveAddressParam, RemoveCouponParam, RemovePriceAdjustmentParam, SelectAddressParam, SelectPaymentModeParam, SelectPaymentModeV2Param, UpdateAddressParam, UpdateCartParam, UpdateCartMetaParam, UpdateCartMetaConfigParam, UpdateCartUserParam, UpdateCartWithSharedItemsParam, UpdateCouponParam, UpdateCouponPartiallyParam, UpdatePriceAdjustmentParam, UpdatePromotionParam, UpdatePromotionPartiallyParam, UpdateShipmentsParam, ValidateCouponForPaymentParam };
}
type AddAddressParam = {
    body: CartPlatformModel.PlatformAddress;
};
type AddItemsParam = {
    /**
     * - Current Cart _id
     */
    cartId: string;
    b?: boolean;
    body: CartPlatformModel.AddCartRequest;
};
type AddPriceAdjustmentParam = {
    body: CartPlatformModel.PriceAdjustmentAdd;
};
type ApplyCouponParam = {
    i?: boolean;
    b?: boolean;
    p?: boolean;
    id?: string;
    buyNow?: boolean;
    body: CartPlatformModel.ApplyCouponRequest;
};
type CheckCartServiceabilityParam = {
    body: CartPlatformModel.OpenApiCartServiceabilityRequest;
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
    body: CartPlatformModel.DeleteCartRequest;
};
type DeleteCartMetaConfigParam = {
    /**
     * - CartMeta mongo _id for fetching single cart
     * meta data for editing
     */
    cartMetaId: string;
};
type FetchAndvalidateCartItemsParam = {
    body: CartPlatformModel.OpenapiCartDetailsRequest;
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
    fromDate?: string;
    toDate?: string;
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
    body: CartPlatformModel.GetShareCartLinkRequest;
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
     * - Entity_type as promotion or coupon
     */
    entityType?: string;
    /**
     * - Promo-coupon config shown or not
     */
    isHidden?: boolean;
};
type GetPromotionByIdParam = {
    id: string;
};
type GetPromotionCodeExistsParam = {
    code?: string;
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
    body: CartPlatformModel.PlatformAddCartRequest;
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
    body: CartPlatformModel.PlatformCartCheckoutDetailRequest;
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
    body: CartPlatformModel.PlatformCartCheckoutDetailV2Request;
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
    body: CartPlatformModel.PlatformUpdateCartRequest;
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
    uid?: string;
    buyNow?: boolean;
    /**
     * - The type of cart
     */
    cartType?: string;
};
type RemovePriceAdjustmentParam = {
    id: string;
};
type SelectAddressParam = {
    cartId?: string;
    buyNow?: boolean;
    i?: boolean;
    b?: boolean;
    body: CartPlatformModel.PlatformSelectCartAddressRequest;
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
    body: CartPlatformModel.UpdateCartPaymentRequest;
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
     * - Current Cart _id
     */
    cartId: string;
    b?: boolean;
    body: CartPlatformModel.UpdateCartRequest;
};
type UpdateCartMetaParam = {
    id?: string;
    buyNow?: boolean;
    userId?: string;
    body: CartPlatformModel.PlatformCartMetaRequest;
};
type UpdateCartMetaConfigParam = {
    /**
     * - CartMeta mongo _id for fetching single cart
     * meta data for editing
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
    body: CartPlatformModel.UpdateCartShipmentRequest;
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
