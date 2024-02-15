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
 * @property {string} [areaCode] - Customer servicable area_code
 * @property {boolean} [buyNow] - This is a boolen value. Select `true` to
 *   set/initialize buy now cart
 * @property {string} [id] - The unique identifier of the cart
 * @property {CartApplicationModel.AddCartRequest} body
 */
/**
 * @typedef ApplyCouponParam
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [p]
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {string} [cartType]
 * @property {CartApplicationModel.ApplyCouponRequest} body
 */
/**
 * @typedef ApplyRewardPointsParam
 * @property {string} [id] - The unique identifier of the cart
 * @property {boolean} [i] - This is a boolean value. Select `true` to retrieve
 *   all the items added in the cart.
 * @property {boolean} [b] - This is a boolean value. Select `true` to retrieve
 *   the price breakup of cart items.
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart
 * @property {CartApplicationModel.RewardPointRequest} body
 */
/**
 * @typedef CheckoutCartParam
 * @property {boolean} [buyNow] - This indicates the type of cart to checkout
 * @property {string} [cartType] - The type of cart
 * @property {CartApplicationModel.CartCheckoutDetailRequest} body
 */
/**
 * @typedef CheckoutCartV2Param
 * @property {boolean} [buyNow] - This indicates the type of cart to checkout
 * @property {string} [cartType] - The type of cart
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
 * @property {boolean} [c] - This is a boolean value. Select `true` to retrieve
 *   the cod charges in breakup of cart items.
 * @property {number} [assignCardId] - Token of user's debit or credit card
 * @property {string} [areaCode] - Customer servicable area_code
 * @property {boolean} [buyNow] - This is a boolen value. Select `true` to
 *   set/initialize buy now cart
 */
/**
 * @typedef GetCartLastModifiedParam
 * @property {string} [id]
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
 * @property {string} [slug]
 * @property {string} [storeId]
 */
/**
 * @typedef GetItemCountParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow]
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
 * @property {string} [cartType] - The type of cart
 */
/**
 * @typedef GetShipmentsParam
 * @property {boolean} [p] - This is a boolean value. Select `true` for getting
 *   a payment option in response.
 * @property {string} [id] - The unique identifier of the cart
 * @property {boolean} [buyNow]
 * @property {string} [addressId] - ID allotted to the selected address
 * @property {string} [areaCode] - The PIN Code of the destination address, e.g. 400059
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself. Digital - If the
 *   customer wants to buy digital voucher ( for jiogames )
 */
/**
 * @typedef RemoveAddressParam
 * @property {string} id - ID allotted to the selected address
 */
/**
 * @typedef RemoveCouponParam
 * @property {string} [id] - The unique identifier of the cart
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart
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
 * @property {string} [areaCode] - Customer servicable area_code
 * @property {boolean} [buyNow] - This is a boolen value. Select `true` to
 *   set/initialize buy now cart
 * @property {string} [cartType] - The type of cart
 * @property {CartApplicationModel.UpdateCartRequest} body
 */
/**
 * @typedef UpdateCartMetaParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {CartApplicationModel.CartMetaRequest} body
 */
/**
 * @typedef UpdateCartWithSharedItemsParam
 * @property {string} token - Token of the shared short link
 * @property {string} action - Operation to perform on the existing cart merge or replace.
 */
/**
 * @typedef ValidateCouponForPaymentParam
 * @property {string} [id] - The unique identifier of the cart
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart
 * @property {string} [addressId] - ID allotted to an address
 * @property {string} [paymentMode] - Payment mode selected by the customer
 * @property {string} [paymentIdentifier] - Identifier of payment like ICIC, PAYTM
 * @property {string} [aggregatorName] - Payment gateway identifier
 * @property {string} [merchantCode] - Identifier used by payment gateway for a
 *   given payment mode, e.g. NB_ICIC, PAYTM
 * @property {string} [iin] - Debit/Credit card prefix (first 6 digit)
 * @property {string} [network] - Credit/Debit card issuer, e.g. VISA, MASTERCARD, RUPAY
 * @property {string} [type] - Card type, e.g. Credit, Debit
 * @property {string} [cardId] - Saved card token reference id
 * @property {string} [cartType] - Type of the cart
 */
declare class CartApplicationValidator {
    /** @returns {AddAddressParam} */
    static addAddress(): AddAddressParam;
    /** @returns {AddItemsParam} */
    static addItems(): AddItemsParam;
    /** @returns {ApplyCouponParam} */
    static applyCoupon(): ApplyCouponParam;
    /** @returns {ApplyRewardPointsParam} */
    static applyRewardPoints(): ApplyRewardPointsParam;
    /** @returns {CheckoutCartParam} */
    static checkoutCart(): CheckoutCartParam;
    /** @returns {CheckoutCartV2Param} */
    static checkoutCartV2(): CheckoutCartV2Param;
    /** @returns {DeleteCartParam} */
    static deleteCart(): DeleteCartParam;
    /** @returns {GetAddressByIdParam} */
    static getAddressById(): GetAddressByIdParam;
    /** @returns {GetAddressesParam} */
    static getAddresses(): GetAddressesParam;
    /** @returns {GetBulkDiscountOffersParam} */
    static getBulkDiscountOffers(): GetBulkDiscountOffersParam;
    /** @returns {GetCartParam} */
    static getCart(): GetCartParam;
    /** @returns {GetCartLastModifiedParam} */
    static getCartLastModified(): GetCartLastModifiedParam;
    /** @returns {GetCartShareLinkParam} */
    static getCartShareLink(): GetCartShareLinkParam;
    /** @returns {GetCartSharedItemsParam} */
    static getCartSharedItems(): GetCartSharedItemsParam;
    /** @returns {GetCouponsParam} */
    static getCoupons(): GetCouponsParam;
    /** @returns {GetItemCountParam} */
    static getItemCount(): GetItemCountParam;
    /** @returns {GetLadderOffersParam} */
    static getLadderOffers(): GetLadderOffersParam;
    /** @returns {GetPromotionOffersParam} */
    static getPromotionOffers(): GetPromotionOffersParam;
    /** @returns {GetShipmentsParam} */
    static getShipments(): GetShipmentsParam;
    /** @returns {RemoveAddressParam} */
    static removeAddress(): RemoveAddressParam;
    /** @returns {RemoveCouponParam} */
    static removeCoupon(): RemoveCouponParam;
    /** @returns {SelectAddressParam} */
    static selectAddress(): SelectAddressParam;
    /** @returns {SelectPaymentModeParam} */
    static selectPaymentMode(): SelectPaymentModeParam;
    /** @returns {UpdateAddressParam} */
    static updateAddress(): UpdateAddressParam;
    /** @returns {UpdateCartParam} */
    static updateCart(): UpdateCartParam;
    /** @returns {UpdateCartMetaParam} */
    static updateCartMeta(): UpdateCartMetaParam;
    /** @returns {UpdateCartWithSharedItemsParam} */
    static updateCartWithSharedItems(): UpdateCartWithSharedItemsParam;
    /** @returns {ValidateCouponForPaymentParam} */
    static validateCouponForPayment(): ValidateCouponForPaymentParam;
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
     * - Customer servicable area_code
     */
    areaCode?: string;
    /**
     * - This is a boolen value. Select `true` to
     * set/initialize buy now cart
     */
    buyNow?: boolean;
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    body: CartApplicationModel.AddCartRequest;
};
type ApplyCouponParam = {
    i?: boolean;
    b?: boolean;
    p?: boolean;
    id?: string;
    buyNow?: boolean;
    cartType?: string;
    body: CartApplicationModel.ApplyCouponRequest;
};
type ApplyRewardPointsParam = {
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
     * - This is boolean to get buy_now cart
     */
    buyNow?: boolean;
    body: CartApplicationModel.RewardPointRequest;
};
type CheckoutCartParam = {
    /**
     * - This indicates the type of cart to checkout
     */
    buyNow?: boolean;
    /**
     * - The type of cart
     */
    cartType?: string;
    body: CartApplicationModel.CartCheckoutDetailRequest;
};
type CheckoutCartV2Param = {
    /**
     * - This indicates the type of cart to checkout
     */
    buyNow?: boolean;
    /**
     * - The type of cart
     */
    cartType?: string;
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
     * - This is a boolean value. Select `true` to retrieve
     * the cod charges in breakup of cart items.
     */
    c?: boolean;
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
    slug?: string;
    storeId?: string;
};
type GetItemCountParam = {
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
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
    /**
     * - The type of cart
     */
    cartType?: string;
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
    /**
     * - The order type of shipment HomeDelivery - If
     * the customer wants the order home-delivered PickAtStore - If the customer
     * wants the handover of an order at the store itself. Digital - If the
     * customer wants to buy digital voucher ( for jiogames )
     */
    orderType?: string;
};
type RemoveAddressParam = {
    /**
     * - ID allotted to the selected address
     */
    id: string;
};
type RemoveCouponParam = {
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    /**
     * - This is boolean to get buy_now cart
     */
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
     * - Customer servicable area_code
     */
    areaCode?: string;
    /**
     * - This is a boolen value. Select `true` to
     * set/initialize buy now cart
     */
    buyNow?: boolean;
    /**
     * - The type of cart
     */
    cartType?: string;
    body: CartApplicationModel.UpdateCartRequest;
};
type UpdateCartMetaParam = {
    id?: string;
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
    /**
     * - The unique identifier of the cart
     */
    id?: string;
    /**
     * - This is boolean to get buy_now cart
     */
    buyNow?: boolean;
    /**
     * - ID allotted to an address
     */
    addressId?: string;
    /**
     * - Payment mode selected by the customer
     */
    paymentMode?: string;
    /**
     * - Identifier of payment like ICIC, PAYTM
     */
    paymentIdentifier?: string;
    /**
     * - Payment gateway identifier
     */
    aggregatorName?: string;
    /**
     * - Identifier used by payment gateway for a
     * given payment mode, e.g. NB_ICIC, PAYTM
     */
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
import CartApplicationModel = require("./CartApplicationModel");
