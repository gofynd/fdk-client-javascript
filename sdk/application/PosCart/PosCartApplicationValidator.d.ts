export = PosCartApplicationValidator;
/**
 * @typedef addAddress
 * @property {PosCartApplicationModel.Address} body
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
 * @property {PosCartApplicationModel.AddCartRequest} body
 */
/**
 * @typedef applyCoupon
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [p]
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {PosCartApplicationModel.ApplyCouponRequest} body
 */
/**
 * @typedef applyRewardPoints
 * @property {string} [id]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [buyNow]
 * @property {PosCartApplicationModel.RewardPointRequest} body
 */
/**
 * @typedef checkoutCart
 * @property {string} [id]
 * @property {PosCartApplicationModel.CartPosCheckoutDetailRequest} body
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
 * @typedef getAvailableDeliveryModes
 * @property {string} areaCode
 * @property {string} [id]
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
 * @property {PosCartApplicationModel.GetShareCartLinkRequest} body
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
 * @typedef getShipments
 * @property {number} [pickAtStoreUid]
 * @property {number} [orderingStoreId]
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
 * @property {PosCartApplicationModel.SelectCartAddressRequest} body
 */
/**
 * @typedef selectPaymentMode
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {PosCartApplicationModel.UpdateCartPaymentRequest} body
 */
/**
 * @typedef updateAddress
 * @property {string} id - ID allotted to the selected address
 * @property {PosCartApplicationModel.Address} body
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
 * @property {PosCartApplicationModel.UpdateCartRequest} body
 */
/**
 * @typedef updateCartMeta
 * @property {string} [id] - The unique identifier of the cart
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart
 * @property {PosCartApplicationModel.CartMetaRequest} body
 */
/**
 * @typedef updateCartWithSharedItems
 * @property {string} token - Token of the shared short link
 * @property {string} action - Operation to perform on the existing cart merge or replace.
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
 * @property {PosCartApplicationModel.UpdateCartShipmentRequest} body
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
declare class PosCartApplicationValidator {
}
declare namespace PosCartApplicationValidator {
    export { addAddress, addItems, applyCoupon, applyRewardPoints, checkoutCart, getAddressById, getAddresses, getAvailableDeliveryModes, getBulkDiscountOffers, getCart, getCartLastModified, getCartShareLink, getCartSharedItems, getCoupons, getItemCount, getShipments, getStoreAddressByUid, removeAddress, removeCoupon, selectAddress, selectPaymentMode, updateAddress, updateCart, updateCartMeta, updateCartWithSharedItems, updateShipments, validateCouponForPayment };
}
/** @returns {addAddress} */
declare function addAddress(): addAddress;
type addAddress = {
    body: PosCartApplicationModel.Address;
};
/** @returns {addItems} */
declare function addItems(): addItems;
type addItems = {
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
     * - Customer servicable area_code
     */
    areaCode?: string;
    /**
     * - This is a boolen value. Select `true` to
     * set/initialize buy now cart
     */
    buyNow?: boolean;
    id?: string;
    body: PosCartApplicationModel.AddCartRequest;
};
/** @returns {applyCoupon} */
declare function applyCoupon(): applyCoupon;
type applyCoupon = {
    i?: boolean;
    b?: boolean;
    p?: boolean;
    id?: string;
    buyNow?: boolean;
    body: PosCartApplicationModel.ApplyCouponRequest;
};
/** @returns {applyRewardPoints} */
declare function applyRewardPoints(): applyRewardPoints;
type applyRewardPoints = {
    id?: string;
    i?: boolean;
    b?: boolean;
    buyNow?: boolean;
    body: PosCartApplicationModel.RewardPointRequest;
};
/** @returns {checkoutCart} */
declare function checkoutCart(): checkoutCart;
type checkoutCart = {
    id?: string;
    body: PosCartApplicationModel.CartPosCheckoutDetailRequest;
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
};
/** @returns {getAvailableDeliveryModes} */
declare function getAvailableDeliveryModes(): getAvailableDeliveryModes;
type getAvailableDeliveryModes = {
    areaCode: string;
    id?: string;
};
/** @returns {getBulkDiscountOffers} */
declare function getBulkDiscountOffers(): getBulkDiscountOffers;
type getBulkDiscountOffers = {
    /**
     * - The Item ID of the product
     */
    itemId?: number;
    /**
     * - Article Mongo ID
     */
    articleId?: string;
    /**
     * - UID of the product
     */
    uid?: number;
    /**
     * - A short, human-readable, URL-friendly identifier
     * of a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/
     */
    slug?: string;
};
/** @returns {getCart} */
declare function getCart(): getCart;
type getCart = {
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
     * - This is a boolean value. Select `true` for getting
     * a payment option in response.
     */
    p?: boolean;
    /**
     * - Token of user's debit or credit card
     */
    assignCardId?: number;
    /**
     * - Customer servicable area_code
     */
    areaCode?: string;
    /**
     * - This is a boolen value. Select `true` to
     * set/initialize buy now cart
     */
    buyNow?: boolean;
};
/** @returns {getCartLastModified} */
declare function getCartLastModified(): getCartLastModified;
type getCartLastModified = {
    /**
     * - The unique identifier of the cart
     */
    id?: string;
};
/** @returns {getCartShareLink} */
declare function getCartShareLink(): getCartShareLink;
type getCartShareLink = {
    body: PosCartApplicationModel.GetShareCartLinkRequest;
};
/** @returns {getCartSharedItems} */
declare function getCartSharedItems(): getCartSharedItems;
type getCartSharedItems = {
    /**
     * - Token of the shared short link
     */
    token: string;
};
/** @returns {getCoupons} */
declare function getCoupons(): getCoupons;
type getCoupons = {
    id?: string;
    buyNow?: boolean;
};
/** @returns {getItemCount} */
declare function getItemCount(): getItemCount;
type getItemCount = {
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
    /**
     * - Boolean value to get buy_now cart.
     */
    buyNow?: boolean;
};
/** @returns {getShipments} */
declare function getShipments(): getShipments;
type getShipments = {
    pickAtStoreUid?: number;
    orderingStoreId?: number;
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
/** @returns {removeAddress} */
declare function removeAddress(): removeAddress;
type removeAddress = {
    /**
     * - ID allotted to the selected address
     */
    id: string;
};
/** @returns {removeCoupon} */
declare function removeCoupon(): removeCoupon;
type removeCoupon = {
    id?: string;
    buyNow?: boolean;
};
/** @returns {selectAddress} */
declare function selectAddress(): selectAddress;
type selectAddress = {
    cartId?: string;
    buyNow?: boolean;
    i?: boolean;
    b?: boolean;
    body: PosCartApplicationModel.SelectCartAddressRequest;
};
/** @returns {selectPaymentMode} */
declare function selectPaymentMode(): selectPaymentMode;
type selectPaymentMode = {
    id?: string;
    buyNow?: boolean;
    body: PosCartApplicationModel.UpdateCartPaymentRequest;
};
/** @returns {updateAddress} */
declare function updateAddress(): updateAddress;
type updateAddress = {
    /**
     * - ID allotted to the selected address
     */
    id: string;
    body: PosCartApplicationModel.Address;
};
/** @returns {updateCart} */
declare function updateCart(): updateCart;
type updateCart = {
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
     * - This is a boolean value. Select `true` for getting
     * a payment option in response.
     */
    p?: boolean;
    /**
     * - Customer servicable area_code
     */
    areaCode?: string;
    /**
     * - This is a boolen value. Select `true` to
     * set/initialize buy now cart
     */
    buyNow?: boolean;
    body: PosCartApplicationModel.UpdateCartRequest;
};
/** @returns {updateCartMeta} */
declare function updateCartMeta(): updateCartMeta;
type updateCartMeta = {
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    /**
     * - This is boolean to get buy_now cart
     */
    buyNow?: boolean;
    body: PosCartApplicationModel.CartMetaRequest;
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
    body: PosCartApplicationModel.UpdateCartShipmentRequest;
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
    iin?: string;
    network?: string;
    type?: string;
    cardId?: string;
};
import PosCartApplicationModel = require("./PosCartApplicationModel");
