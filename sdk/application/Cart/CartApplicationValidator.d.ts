export = CartApplicationValidator;
/**
 * @typedef AddAddressParam
 * @property {CartApplicationModel.Address} body
 */
/**
 * @typedef AddItemsParam
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
 * @property {CartApplicationModel.AddCartRequest} body
 */
/**
 * @typedef ApplyCouponParam
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [p]
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {CartApplicationModel.ApplyCouponRequest} body
 */
/**
 * @typedef ApplyRewardPointsParam
 * @property {string} [id]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [buyNow]
 * @property {CartApplicationModel.RewardPointRequest} body
 */
/**
 * @typedef CheckoutCartParam
 * @property {boolean} [buyNow] - This indicates the type of cart to checkout
 * @property {CartApplicationModel.CartCheckoutDetailRequest} body
 */
/**
 * @typedef CheckoutCartV2Param
 * @property {boolean} [buyNow] - This indicates the type of cart to checkout
 * @property {CartApplicationModel.CartCheckoutDetailV2Request} body
 */
/**
 * @typedef DeleteCartParam
 * @property {string} [id] - The unique identifier of the cart.
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
 */
/**
 * @typedef GetAddressesParam
 * @property {string} [cartId]
 * @property {boolean} [buyNow]
 * @property {string} [mobileNo]
 * @property {string} [checkoutMode]
 * @property {string} [tags]
 * @property {boolean} [isDefault]
 */
/**
 * @typedef GetBulkDiscountOffersParam
 * @property {number} [itemId] - The Item ID of the product
 * @property {string} [articleId] - Article Mongo ID
 * @property {number} [uid] - UID of the product
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier
 *   of a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 */
/**
 * @typedef GetCartParam
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
 * @typedef GetCartLastModifiedParam
 * @property {string} [id] - The unique identifier of the cart
 */
/**
 * @typedef GetCartShareLinkParam
 * @property {CartApplicationModel.GetShareCartLinkRequest} body
 */
/**
 * @typedef GetCartSharedItemsParam
 * @property {string} token - Token of the shared short link
 */
/**
 * @typedef GetCouponsParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 */
/**
 * @typedef GetItemCountParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Boolean value to get buy_now cart.
 */
/**
 * @typedef GetLadderOffersParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 * @property {string} [storeId] - Store uid of assigned store on PDP page. If
 *   not passed default first created ladder will be returned
 * @property {string} [promotionId] - Get ladder information of given promotion
 *   id explicitely
 * @property {number} [pageSize] - Number of offers to be fetched to show
 */
/**
 * @typedef GetPromotionOffersParam
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier
 *   of a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 * @property {number} [pageSize] - Number of offers to be fetched to show
 * @property {string} [promotionGroup] - Type of promotion groups
 * @property {number} [storeId] - Store id
 */
/**
 * @typedef GetShipmentsParam
 * @property {boolean} [p] - This is a boolean value. Select `true` for getting
 *   a payment option in response.
 * @property {string} [id] - The unique identifier of the cart
 * @property {boolean} [buyNow]
 * @property {string} [addressId] - ID allotted to the selected address
 * @property {string} [areaCode] - The PIN Code of the destination address, e.g. 400059
 */
/**
 * @typedef RemoveAddressParam
 * @property {string} id - ID allotted to the selected address
 */
/**
 * @typedef RemoveCouponParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 */
/**
 * @typedef SelectAddressParam
 * @property {string} [cartId]
 * @property {boolean} [buyNow]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {CartApplicationModel.SelectCartAddressRequest} body
 */
/**
 * @typedef SelectPaymentModeParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {CartApplicationModel.UpdateCartPaymentRequest} body
 */
/**
 * @typedef UpdateAddressParam
 * @property {string} id - ID allotted to the selected address
 * @property {CartApplicationModel.Address} body
 */
/**
 * @typedef UpdateCartParam
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
 * @property {CartApplicationModel.UpdateCartRequest} body
 */
/**
 * @typedef UpdateCartMetaParam
 * @property {string} [id] - The unique identifier of the cart
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart
 * @property {CartApplicationModel.CartMetaRequest} body
 */
/**
 * @typedef UpdateCartWithSharedItemsParam
 * @property {string} token - Token of the shared short link
 * @property {string} action - Operation to perform on the existing cart merge or replace.
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
 * @property {string} [iin]
 * @property {string} [network]
 * @property {string} [type]
 * @property {string} [cardId]
 */
declare class CartApplicationValidator {
    /** @returns {addAddress} */
    static addAddress(): addAddress;
    /** @returns {addItems} */
    static addItems(): addItems;
    /** @returns {applyCoupon} */
    static applyCoupon(): applyCoupon;
    /** @returns {applyRewardPoints} */
    static applyRewardPoints(): applyRewardPoints;
    /** @returns {checkoutCart} */
    static checkoutCart(): checkoutCart;
    /** @returns {checkoutCartV2} */
    static checkoutCartV2(): checkoutCartV2;
    /** @returns {deleteCart} */
    static deleteCart(): deleteCart;
    /** @returns {getAddressById} */
    static getAddressById(): getAddressById;
    /** @returns {getAddresses} */
    static getAddresses(): getAddresses;
    /** @returns {getBulkDiscountOffers} */
    static getBulkDiscountOffers(): getBulkDiscountOffers;
    /** @returns {getCart} */
    static getCart(): getCart;
    /** @returns {getCartLastModified} */
    static getCartLastModified(): getCartLastModified;
    /** @returns {getCartShareLink} */
    static getCartShareLink(): getCartShareLink;
    /** @returns {getCartSharedItems} */
    static getCartSharedItems(): getCartSharedItems;
    /** @returns {getCoupons} */
    static getCoupons(): getCoupons;
    /** @returns {getItemCount} */
    static getItemCount(): getItemCount;
    /** @returns {getLadderOffers} */
    static getLadderOffers(): getLadderOffers;
    /** @returns {getPromotionOffers} */
    static getPromotionOffers(): getPromotionOffers;
    /** @returns {getShipments} */
    static getShipments(): getShipments;
    /** @returns {removeAddress} */
    static removeAddress(): removeAddress;
    /** @returns {removeCoupon} */
    static removeCoupon(): removeCoupon;
    /** @returns {selectAddress} */
    static selectAddress(): selectAddress;
    /** @returns {selectPaymentMode} */
    static selectPaymentMode(): selectPaymentMode;
    /** @returns {updateAddress} */
    static updateAddress(): updateAddress;
    /** @returns {updateCart} */
    static updateCart(): updateCart;
    /** @returns {updateCartMeta} */
    static updateCartMeta(): updateCartMeta;
    /** @returns {updateCartWithSharedItems} */
    static updateCartWithSharedItems(): updateCartWithSharedItems;
    /** @returns {validateCouponForPayment} */
    static validateCouponForPayment(): validateCouponForPayment;
}
declare namespace CartApplicationValidator {
    export { AddAddressParam, AddItemsParam, ApplyCouponParam, ApplyRewardPointsParam, CheckoutCartParam, CheckoutCartV2Param, DeleteCartParam, GetAddressByIdParam, GetAddressesParam, GetBulkDiscountOffersParam, GetCartParam, GetCartLastModifiedParam, GetCartShareLinkParam, GetCartSharedItemsParam, GetCouponsParam, GetItemCountParam, GetLadderOffersParam, GetPromotionOffersParam, GetShipmentsParam, RemoveAddressParam, RemoveCouponParam, SelectAddressParam, SelectPaymentModeParam, UpdateAddressParam, UpdateCartParam, UpdateCartMetaParam, UpdateCartWithSharedItemsParam, ValidateCouponForPaymentParam };
}
type AddAddressParam = {
    body: CartApplicationModel.Address;
};
type AddItemsParam = {
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
    body: CartApplicationModel.AddCartRequest;
};
type ApplyCouponParam = {
    i?: boolean;
    b?: boolean;
    p?: boolean;
    id?: string;
    buyNow?: boolean;
    body: CartApplicationModel.ApplyCouponRequest;
};
type ApplyRewardPointsParam = {
    id?: string;
    i?: boolean;
    b?: boolean;
    buyNow?: boolean;
    body: CartApplicationModel.RewardPointRequest;
};
type CheckoutCartParam = {
    /**
     * - This indicates the type of cart to checkout
     */
    buyNow?: boolean;
    body: CartApplicationModel.CartCheckoutDetailRequest;
};
type CheckoutCartV2Param = {
    /**
     * - This indicates the type of cart to checkout
     */
    buyNow?: boolean;
    body: CartApplicationModel.CartCheckoutDetailV2Request;
};
type DeleteCartParam = {
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
};
type GetAddressByIdParam = {
    id: string;
    cartId?: string;
    buyNow?: boolean;
    mobileNo?: string;
    checkoutMode?: string;
    tags?: string;
    isDefault?: boolean;
};
type GetAddressesParam = {
    cartId?: string;
    buyNow?: boolean;
    mobileNo?: string;
    checkoutMode?: string;
    tags?: string;
    isDefault?: boolean;
};
type GetBulkDiscountOffersParam = {
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
type GetCartParam = {
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
type GetCartLastModifiedParam = {
    /**
     * - The unique identifier of the cart
     */
    id?: string;
};
type GetCartShareLinkParam = {
    body: CartApplicationModel.GetShareCartLinkRequest;
};
type GetCartSharedItemsParam = {
    /**
     * - Token of the shared short link
     */
    token: string;
};
type GetCouponsParam = {
    id?: string;
    buyNow?: boolean;
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
type GetLadderOffersParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/
     */
    slug: string;
    /**
     * - Store uid of assigned store on PDP page. If
     * not passed default first created ladder will be returned
     */
    storeId?: string;
    /**
     * - Get ladder information of given promotion
     * id explicitely
     */
    promotionId?: string;
    /**
     * - Number of offers to be fetched to show
     */
    pageSize?: number;
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
     * - Store id
     */
    storeId?: number;
};
type GetShipmentsParam = {
    /**
     * - This is a boolean value. Select `true` for getting
     * a payment option in response.
     */
    p?: boolean;
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    buyNow?: boolean;
    /**
     * - ID allotted to the selected address
     */
    addressId?: string;
    /**
     * - The PIN Code of the destination address, e.g. 400059
     */
    areaCode?: string;
};
type RemoveAddressParam = {
    /**
     * - ID allotted to the selected address
     */
    id: string;
};
type RemoveCouponParam = {
    id?: string;
    buyNow?: boolean;
};
type SelectAddressParam = {
    cartId?: string;
    buyNow?: boolean;
    i?: boolean;
    b?: boolean;
    body: CartApplicationModel.SelectCartAddressRequest;
};
type SelectPaymentModeParam = {
    id?: string;
    buyNow?: boolean;
    body: CartApplicationModel.UpdateCartPaymentRequest;
};
type UpdateAddressParam = {
    /**
     * - ID allotted to the selected address
     */
    id: string;
    body: CartApplicationModel.Address;
};
type UpdateCartParam = {
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
    body: CartApplicationModel.UpdateCartRequest;
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
    body: CartApplicationModel.CartMetaRequest;
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
};
type ValidateCouponForPaymentParam = {
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
import CartApplicationModel = require("./CartApplicationModel");
