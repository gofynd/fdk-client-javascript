export = CartPlatformApplicationValidator;
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
declare class CartPlatformApplicationValidator {
}
declare namespace CartPlatformApplicationValidator {
    export { addAddress, addItems, applyCoupon, checkCartServiceability, checkoutCart, createCartDynamicInjection, createCartMetaConfig, createCoupon, createPromotion, deleteCart, fetchAndvalidateCartItems, fetchCartMetaConfig, getAbandonedCart, getAbandonedCartDetails, getAddressById, getAddresses, getAppCoupons, getAvailableDeliveryModes, getCart, getCartList, getCartShareLink, getCartSharedItems, getCouponById, getCouponCodeExists, getCouponOptionValues, getCoupons, getItemCount, getPromosCouponConfig, getPromotionById, getPromotionCodeExists, getPromotions, getShipments, getStoreAddressByUid, overrideCart, platformAddItems, platformCheckoutCart, platformCheckoutCartV2, platformUpdateCart, removeAddress, removeCartDynamicInjection, removeCoupon, selectAddress, selectPaymentMode, selectPaymentModeV2, updateAddress, updateCart, updateCartDynamicInjection, updateCartMeta, updateCartMetaConfig, updateCartUser, updateCartWithSharedItems, updateCoupon, updateCouponPartially, updatePromotion, updatePromotionPartially, updateShipments, validateCouponForPayment };
}
/** @returns {addAddress} */
declare function addAddress(): addAddress;
type addAddress = {
    body: CartPlatformModel.PlatformAddress;
};
/** @returns {addItems} */
declare function addItems(): addItems;
type addItems = {
    /**
     * - Current Cart _id
     */
    cartId: string;
    b?: boolean;
    userId?: string;
    body: CartPlatformModel.AddCartRequest;
};
/** @returns {applyCoupon} */
declare function applyCoupon(): applyCoupon;
type applyCoupon = {
    i?: boolean;
    b?: boolean;
    p?: boolean;
    id?: string;
    buyNow?: boolean;
    body: CartPlatformModel.ApplyCouponRequest;
};
/** @returns {checkCartServiceability} */
declare function checkCartServiceability(): checkCartServiceability;
type checkCartServiceability = {
    body: CartPlatformModel.OpenApiCartServiceabilityRequest;
};
/** @returns {checkoutCart} */
declare function checkoutCart(): checkoutCart;
type checkoutCart = {
    body: CartPlatformModel.OpenApiPlatformCheckoutReq;
};
/** @returns {createCartDynamicInjection} */
declare function createCartDynamicInjection(): createCartDynamicInjection;
type createCartDynamicInjection = {
    body: CartPlatformModel.CartDynamicInjectionAdd;
};
/** @returns {createCartMetaConfig} */
declare function createCartMetaConfig(): createCartMetaConfig;
type createCartMetaConfig = {
    body: CartPlatformModel.CartMetaConfigAdd;
};
/** @returns {createCoupon} */
declare function createCoupon(): createCoupon;
type createCoupon = {
    body: CartPlatformModel.CouponAdd;
};
/** @returns {createPromotion} */
declare function createPromotion(): createPromotion;
type createPromotion = {
    body: CartPlatformModel.PromotionAdd;
};
/** @returns {deleteCart} */
declare function deleteCart(): deleteCart;
type deleteCart = {
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
    body: CartPlatformModel.DeleteCartRequest;
};
/** @returns {fetchAndvalidateCartItems} */
declare function fetchAndvalidateCartItems(): fetchAndvalidateCartItems;
type fetchAndvalidateCartItems = {
    body: CartPlatformModel.OpenapiCartDetailsRequest;
};
/** @returns {fetchCartMetaConfig} */
declare function fetchCartMetaConfig(): any;
type fetchCartMetaConfig = any;
/** @returns {getAbandonedCart} */
declare function getAbandonedCart(): getAbandonedCart;
type getAbandonedCart = {
    userId?: string;
    pageNo?: number;
    pageSize?: number;
    fromDate?: string;
    toDate?: string;
    anonymousCart?: boolean;
    lastId?: string;
    sortOn?: string;
};
/** @returns {getAbandonedCartDetails} */
declare function getAbandonedCartDetails(): getAbandonedCartDetails;
type getAbandonedCartDetails = {
    userId?: string;
    id?: string;
    i?: boolean;
    b?: boolean;
};
/** @returns {getAddressById} */
declare function getAddressById(): getAddressById;
type getAddressById = {
    id: string;
    cartId?: string;
    buyNow?: boolean;
    mobileNo?: string;
    checkoutMode?: string;
    tags?: string;
    isDefault?: boolean;
    userId?: string;
};
/** @returns {getAddresses} */
declare function getAddresses(): getAddresses;
type getAddresses = {
    cartId?: string;
    buyNow?: boolean;
    mobileNo?: string;
    checkoutMode?: string;
    tags?: string;
    isDefault?: boolean;
    userId?: string;
};
/** @returns {getAppCoupons} */
declare function getAppCoupons(): getAppCoupons;
type getAppCoupons = {
    id?: string;
    buyNow?: boolean;
};
/** @returns {getAvailableDeliveryModes} */
declare function getAvailableDeliveryModes(): getAvailableDeliveryModes;
type getAvailableDeliveryModes = {
    areaCode: string;
    id?: string;
};
/** @returns {getCart} */
declare function getCart(): getCart;
type getCart = {
    id?: string;
    userId?: string;
    i?: boolean;
    b?: boolean;
    assignCardId?: number;
    buyNow?: boolean;
};
/** @returns {getCartList} */
declare function getCartList(): getCartList;
type getCartList = {
    fromDate?: string;
    toDate?: string;
    filterOn?: string;
};
/** @returns {getCartShareLink} */
declare function getCartShareLink(): getCartShareLink;
type getCartShareLink = {
    body: CartPlatformModel.GetShareCartLinkRequest;
};
/** @returns {getCartSharedItems} */
declare function getCartSharedItems(): getCartSharedItems;
type getCartSharedItems = {
    /**
     * - Token of the shared short link
     */
    token: string;
};
/** @returns {getCouponById} */
declare function getCouponById(): getCouponById;
type getCouponById = {
    id: string;
};
/** @returns {getCouponCodeExists} */
declare function getCouponCodeExists(): getCouponCodeExists;
type getCouponCodeExists = {
    code?: string;
};
/** @returns {getCouponOptionValues} */
declare function getCouponOptionValues(): any;
type getCouponOptionValues = any;
/** @returns {getCoupons} */
declare function getCoupons(): getCoupons;
type getCoupons = {
    pageNo?: number;
    pageSize?: number;
    isArchived?: boolean;
    title?: string;
    isPublic?: boolean;
    isDisplay?: boolean;
    typeSlug?: string;
    code?: string;
};
/** @returns {getItemCount} */
declare function getItemCount(): getItemCount;
type getItemCount = {
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
    buyNow?: boolean;
};
/** @returns {getPromosCouponConfig} */
declare function getPromosCouponConfig(): getPromosCouponConfig;
type getPromosCouponConfig = {
    /**
     * - Entity_type as promotion or coupon
     */
    entityType?: string;
    /**
     * - Promo-coupon config shown or not
     */
    isHidden?: boolean;
};
/** @returns {getPromotionById} */
declare function getPromotionById(): getPromotionById;
type getPromotionById = {
    id: string;
};
/** @returns {getPromotionCodeExists} */
declare function getPromotionCodeExists(): getPromotionCodeExists;
type getPromotionCodeExists = {
    code?: string;
};
/** @returns {getPromotions} */
declare function getPromotions(): getPromotions;
type getPromotions = {
    pageNo?: number;
    pageSize?: number;
    q?: string;
    isActive?: boolean;
    promoGroup?: string;
    promotionType?: string;
    fpPanel?: string;
    promotionId?: string;
};
/** @returns {getShipments} */
declare function getShipments(): getShipments;
type getShipments = {
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
/** @returns {getStoreAddressByUid} */
declare function getStoreAddressByUid(): getStoreAddressByUid;
type getStoreAddressByUid = {
    storeUid: number;
};
/** @returns {overrideCart} */
declare function overrideCart(): overrideCart;
type overrideCart = {
    body: CartPlatformModel.OverrideCheckoutReq;
};
/** @returns {platformAddItems} */
declare function platformAddItems(): platformAddItems;
type platformAddItems = {
    i?: boolean;
    b?: boolean;
    buyNow?: boolean;
    id?: string;
    body: CartPlatformModel.PlatformAddCartRequest;
};
/** @returns {platformCheckoutCart} */
declare function platformCheckoutCart(): platformCheckoutCart;
type platformCheckoutCart = {
    id?: string;
    body: CartPlatformModel.PlatformCartCheckoutDetailRequest;
};
/** @returns {platformCheckoutCartV2} */
declare function platformCheckoutCartV2(): platformCheckoutCartV2;
type platformCheckoutCartV2 = {
    id?: string;
    body: CartPlatformModel.PlatformCartCheckoutDetailV2Request;
};
/** @returns {platformUpdateCart} */
declare function platformUpdateCart(): platformUpdateCart;
type platformUpdateCart = {
    id?: string;
    i?: boolean;
    b?: boolean;
    buyNow?: boolean;
    body: CartPlatformModel.PlatformUpdateCartRequest;
};
/** @returns {removeAddress} */
declare function removeAddress(): removeAddress;
type removeAddress = {
    /**
     * - ID allotted to the selected address
     */
    id: string;
    /**
     * - Option to delete address for the provided user_id.
     */
    userId?: string;
};
/** @returns {removeCartDynamicInjection} */
declare function removeCartDynamicInjection(): removeCartDynamicInjection;
type removeCartDynamicInjection = {
    id: string;
};
/** @returns {removeCoupon} */
declare function removeCoupon(): removeCoupon;
type removeCoupon = {
    uid?: string;
    buyNow?: boolean;
};
/** @returns {selectAddress} */
declare function selectAddress(): selectAddress;
type selectAddress = {
    cartId?: string;
    buyNow?: boolean;
    i?: boolean;
    b?: boolean;
    body: CartPlatformModel.PlatformSelectCartAddressRequest;
};
/** @returns {selectPaymentMode} */
declare function selectPaymentMode(): selectPaymentMode;
type selectPaymentMode = {
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
/** @returns {selectPaymentModeV2} */
declare function selectPaymentModeV2(): selectPaymentModeV2;
type selectPaymentModeV2 = {
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
/** @returns {updateAddress} */
declare function updateAddress(): updateAddress;
type updateAddress = {
    /**
     * - ID allotted to the selected address
     */
    id: string;
    body: CartPlatformModel.PlatformAddress;
};
/** @returns {updateCart} */
declare function updateCart(): updateCart;
type updateCart = {
    /**
     * - Current Cart _id
     */
    cartId: string;
    b?: boolean;
    userId?: string;
    body: CartPlatformModel.UpdateCartRequest;
};
/** @returns {updateCartDynamicInjection} */
declare function updateCartDynamicInjection(): updateCartDynamicInjection;
type updateCartDynamicInjection = {
    id: string;
    body: CartPlatformModel.CartDynamicInjectionUpdate;
};
/** @returns {updateCartMeta} */
declare function updateCartMeta(): updateCartMeta;
type updateCartMeta = {
    id?: string;
    buyNow?: boolean;
    body: CartPlatformModel.PlatformCartMetaRequest;
};
/** @returns {updateCartMetaConfig} */
declare function updateCartMetaConfig(): updateCartMetaConfig;
type updateCartMetaConfig = {
    cartMetaId: string;
    body: CartPlatformModel.CartMetaConfigUpdate;
};
/** @returns {updateCartUser} */
declare function updateCartUser(): updateCartUser;
type updateCartUser = {
    id?: string;
    body: CartPlatformModel.UpdateUserCartMapping;
};
/** @returns {updateCartWithSharedItems} */
declare function updateCartWithSharedItems(): updateCartWithSharedItems;
type updateCartWithSharedItems = {
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
/** @returns {updateCoupon} */
declare function updateCoupon(): updateCoupon;
type updateCoupon = {
    id: string;
    body: CartPlatformModel.CouponUpdate;
};
/** @returns {updateCouponPartially} */
declare function updateCouponPartially(): updateCouponPartially;
type updateCouponPartially = {
    id: string;
    body: CartPlatformModel.CouponPartialUpdate;
};
/** @returns {updatePromotion} */
declare function updatePromotion(): updatePromotion;
type updatePromotion = {
    id: string;
    body: CartPlatformModel.PromotionUpdate;
};
/** @returns {updatePromotionPartially} */
declare function updatePromotionPartially(): updatePromotionPartially;
type updatePromotionPartially = {
    id: string;
    body: CartPlatformModel.PromotionPartialUpdate;
};
/** @returns {updateShipments} */
declare function updateShipments(): updateShipments;
type updateShipments = {
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
/** @returns {validateCouponForPayment} */
declare function validateCouponForPayment(): validateCouponForPayment;
type validateCouponForPayment = {
    id?: string;
    buyNow?: boolean;
    addressId?: string;
    paymentMode?: string;
    paymentIdentifier?: string;
    aggregatorName?: string;
    merchantCode?: string;
};
import CartPlatformModel = require("./CartPlatformModel");
