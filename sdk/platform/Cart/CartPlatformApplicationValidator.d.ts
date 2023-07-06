export = CartPlatformApplicationValidator;
/**
 * @typedef AddAddressParam
 * @property {CartPlatformModel.PlatformAddress} body
 */
/**
 * @typedef AddItemsParam
 * @property {string} cartId - Current Cart _id
 * @property {boolean} [b]
 * @property {string} [userId]
 * @property {CartPlatformModel.AddCartRequest} body
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
 * @typedef CreateCartDynamicInjectionParam
 * @property {CartPlatformModel.CartDynamicInjectionAdd} body
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
 * @typedef GetAbandonedCartDetailsParam
 * @property {string} [userId]
 * @property {string} [id]
 * @property {boolean} [i]
 * @property {boolean} [b]
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
 * @typedef RemoveCartDynamicInjectionParam
 * @property {string} id
 */
/**
 * @typedef RemoveCouponParam
 * @property {string} [uid]
 * @property {boolean} [buyNow]
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
 * @property {string} [userId]
 * @property {CartPlatformModel.UpdateCartRequest} body
 */
/**
 * @typedef UpdateCartDynamicInjectionParam
 * @property {string} id
 * @property {CartPlatformModel.CartDynamicInjectionUpdate} body
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
declare class CartPlatformApplicationValidator {
    /** @returns {addAddress} */
    static addAddress(): addAddress;
    /** @returns {addItems} */
    static addItems(): addItems;
    /** @returns {applyCoupon} */
    static applyCoupon(): applyCoupon;
    /** @returns {checkCartServiceability} */
    static checkCartServiceability(): checkCartServiceability;
    /** @returns {checkoutCart} */
    static checkoutCart(): checkoutCart;
    /** @returns {createCartDynamicInjection} */
    static createCartDynamicInjection(): createCartDynamicInjection;
    /** @returns {createCartMetaConfig} */
    static createCartMetaConfig(): createCartMetaConfig;
    /** @returns {createCoupon} */
    static createCoupon(): createCoupon;
    /** @returns {createPromotion} */
    static createPromotion(): createPromotion;
    /** @returns {deleteCart} */
    static deleteCart(): deleteCart;
    /** @returns {fetchAndvalidateCartItems} */
    static fetchAndvalidateCartItems(): fetchAndvalidateCartItems;
    /** @returns {fetchCartMetaConfig} */
    static fetchCartMetaConfig(): fetchCartMetaConfig;
    /** @returns {getAbandonedCart} */
    static getAbandonedCart(): getAbandonedCart;
    /** @returns {getAbandonedCartDetails} */
    static getAbandonedCartDetails(): getAbandonedCartDetails;
    /** @returns {getAddressById} */
    static getAddressById(): getAddressById;
    /** @returns {getAddresses} */
    static getAddresses(): getAddresses;
    /** @returns {getAppCoupons} */
    static getAppCoupons(): getAppCoupons;
    /** @returns {getAvailableDeliveryModes} */
    static getAvailableDeliveryModes(): getAvailableDeliveryModes;
    /** @returns {getCart} */
    static getCart(): getCart;
    /** @returns {getCartList} */
    static getCartList(): getCartList;
    /** @returns {getCartShareLink} */
    static getCartShareLink(): getCartShareLink;
    /** @returns {getCartSharedItems} */
    static getCartSharedItems(): getCartSharedItems;
    /** @returns {getCouponById} */
    static getCouponById(): getCouponById;
    /** @returns {getCouponCodeExists} */
    static getCouponCodeExists(): getCouponCodeExists;
    /** @returns {getCouponOptionValues} */
    static getCouponOptionValues(): getCouponOptionValues;
    /** @returns {getCoupons} */
    static getCoupons(): getCoupons;
    /** @returns {getItemCount} */
    static getItemCount(): getItemCount;
    /** @returns {getPromosCouponConfig} */
    static getPromosCouponConfig(): getPromosCouponConfig;
    /** @returns {getPromotionById} */
    static getPromotionById(): getPromotionById;
    /** @returns {getPromotionCodeExists} */
    static getPromotionCodeExists(): getPromotionCodeExists;
    /** @returns {getPromotions} */
    static getPromotions(): getPromotions;
    /** @returns {getShipments} */
    static getShipments(): getShipments;
    /** @returns {getStoreAddressByUid} */
    static getStoreAddressByUid(): getStoreAddressByUid;
    /** @returns {overrideCart} */
    static overrideCart(): overrideCart;
    /** @returns {platformAddItems} */
    static platformAddItems(): platformAddItems;
    /** @returns {platformCheckoutCart} */
    static platformCheckoutCart(): platformCheckoutCart;
    /** @returns {platformCheckoutCartV2} */
    static platformCheckoutCartV2(): platformCheckoutCartV2;
    /** @returns {platformUpdateCart} */
    static platformUpdateCart(): platformUpdateCart;
    /** @returns {removeAddress} */
    static removeAddress(): removeAddress;
    /** @returns {removeCartDynamicInjection} */
    static removeCartDynamicInjection(): removeCartDynamicInjection;
    /** @returns {removeCoupon} */
    static removeCoupon(): removeCoupon;
    /** @returns {selectAddress} */
    static selectAddress(): selectAddress;
    /** @returns {selectPaymentMode} */
    static selectPaymentMode(): selectPaymentMode;
    /** @returns {selectPaymentModeV2} */
    static selectPaymentModeV2(): selectPaymentModeV2;
    /** @returns {updateAddress} */
    static updateAddress(): updateAddress;
    /** @returns {updateCart} */
    static updateCart(): updateCart;
    /** @returns {updateCartDynamicInjection} */
    static updateCartDynamicInjection(): updateCartDynamicInjection;
    /** @returns {updateCartMeta} */
    static updateCartMeta(): updateCartMeta;
    /** @returns {updateCartMetaConfig} */
    static updateCartMetaConfig(): updateCartMetaConfig;
    /** @returns {updateCartUser} */
    static updateCartUser(): updateCartUser;
    /** @returns {updateCartWithSharedItems} */
    static updateCartWithSharedItems(): updateCartWithSharedItems;
    /** @returns {updateCoupon} */
    static updateCoupon(): updateCoupon;
    /** @returns {updateCouponPartially} */
    static updateCouponPartially(): updateCouponPartially;
    /** @returns {updatePromotion} */
    static updatePromotion(): updatePromotion;
    /** @returns {updatePromotionPartially} */
    static updatePromotionPartially(): updatePromotionPartially;
    /** @returns {updateShipments} */
    static updateShipments(): updateShipments;
    /** @returns {validateCouponForPayment} */
    static validateCouponForPayment(): validateCouponForPayment;
}
declare namespace CartPlatformApplicationValidator {
    export { AddAddressParam, AddItemsParam, ApplyCouponParam, CheckCartServiceabilityParam, CheckoutCartParam, CreateCartDynamicInjectionParam, CreateCartMetaConfigParam, CreateCouponParam, CreatePromotionParam, DeleteCartParam, FetchAndvalidateCartItemsParam, FetchCartMetaConfigParam, GetAbandonedCartParam, GetAbandonedCartDetailsParam, GetAddressByIdParam, GetAddressesParam, GetAppCouponsParam, GetAvailableDeliveryModesParam, GetCartParam, GetCartListParam, GetCartShareLinkParam, GetCartSharedItemsParam, GetCouponByIdParam, GetCouponCodeExistsParam, GetCouponOptionValuesParam, GetCouponsParam, GetItemCountParam, GetPromosCouponConfigParam, GetPromotionByIdParam, GetPromotionCodeExistsParam, GetPromotionsParam, GetShipmentsParam, GetStoreAddressByUidParam, OverrideCartParam, PlatformAddItemsParam, PlatformCheckoutCartParam, PlatformCheckoutCartV2Param, PlatformUpdateCartParam, RemoveAddressParam, RemoveCartDynamicInjectionParam, RemoveCouponParam, SelectAddressParam, SelectPaymentModeParam, SelectPaymentModeV2Param, UpdateAddressParam, UpdateCartParam, UpdateCartDynamicInjectionParam, UpdateCartMetaParam, UpdateCartMetaConfigParam, UpdateCartUserParam, UpdateCartWithSharedItemsParam, UpdateCouponParam, UpdateCouponPartiallyParam, UpdatePromotionParam, UpdatePromotionPartiallyParam, UpdateShipmentsParam, ValidateCouponForPaymentParam };
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
    userId?: string;
    body: CartPlatformModel.AddCartRequest;
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
type CreateCartDynamicInjectionParam = {
    body: CartPlatformModel.CartDynamicInjectionAdd;
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
    body: CartPlatformModel.DeleteCartRequest;
};
type FetchAndvalidateCartItemsParam = {
    body: CartPlatformModel.OpenapiCartDetailsRequest;
};
type FetchCartMetaConfigParam = any;
type GetAbandonedCartParam = {
    userId?: string;
    pageNo?: number;
    pageSize?: number;
    fromDate?: string;
    toDate?: string;
    anonymousCart?: boolean;
    lastId?: string;
    sortOn?: string;
};
type GetAbandonedCartDetailsParam = {
    userId?: string;
    id?: string;
    i?: boolean;
    b?: boolean;
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
};
type GetAvailableDeliveryModesParam = {
    areaCode: string;
    id?: string;
};
type GetCartParam = {
    id?: string;
    userId?: string;
    i?: boolean;
    b?: boolean;
    assignCardId?: number;
    buyNow?: boolean;
};
type GetCartListParam = {
    fromDate?: string;
    toDate?: string;
    filterOn?: string;
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
type GetCouponOptionValuesParam = any;
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
    buyNow?: boolean;
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
    i?: boolean;
    b?: boolean;
    buyNow?: boolean;
    id?: string;
    body: CartPlatformModel.PlatformAddCartRequest;
};
type PlatformCheckoutCartParam = {
    id?: string;
    body: CartPlatformModel.PlatformCartCheckoutDetailRequest;
};
type PlatformCheckoutCartV2Param = {
    id?: string;
    body: CartPlatformModel.PlatformCartCheckoutDetailV2Request;
};
type PlatformUpdateCartParam = {
    id?: string;
    i?: boolean;
    b?: boolean;
    buyNow?: boolean;
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
type RemoveCartDynamicInjectionParam = {
    id: string;
};
type RemoveCouponParam = {
    uid?: string;
    buyNow?: boolean;
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
    userId?: string;
    body: CartPlatformModel.UpdateCartRequest;
};
type UpdateCartDynamicInjectionParam = {
    id: string;
    body: CartPlatformModel.CartDynamicInjectionUpdate;
};
type UpdateCartMetaParam = {
    id?: string;
    buyNow?: boolean;
    body: CartPlatformModel.PlatformCartMetaRequest;
};
type UpdateCartMetaConfigParam = {
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
};
import CartPlatformModel = require("./CartPlatformModel");
