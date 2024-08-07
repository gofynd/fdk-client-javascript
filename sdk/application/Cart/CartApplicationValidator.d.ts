export = CartApplicationValidator;
/**
 * @typedef AddAddressParam
 * @property {CartApplicationModel.Address} body
 */
/**
 * @typedef AddItemsParam
 * @property {boolean} [i] - Select `true` to retrieve all the items added in the cart.
 * @property {boolean} [b] - Select `true` to retrieve the price breakup of cart items.
 * @property {string} [areaCode] - Customer servicable area_code.
 * @property {boolean} [buyNow] - Select `true` to set/initialize buy now cart.
 * @property {string} [id] - The unique identifier of the cart.
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {CartApplicationModel.AddCartRequest} body
 */
/**
 * @typedef ApplyCouponParam
 * @property {boolean} [i] - Select `true` to retrieve all the items added in the cart.
 * @property {boolean} [b] - Select `true` to retrieve the price breakup of cart items.
 * @property {boolean} [p] - Select `true` for getting a payment option in response.
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart.
 * @property {string} [cartType] - The type of cart.
 * @property {CartApplicationModel.ApplyCouponRequest} body
 */
/**
 * @typedef ApplyRewardPointsParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [i] - Select `true` to retrieve all the items added in the cart.
 * @property {boolean} [b] - Select `true` to retrieve the price breakup of cart items.
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart.
 * @property {CartApplicationModel.RewardPointRequest} body
 */
/**
 * @typedef CheckoutCartParam
 * @property {boolean} [buyNow] - This indicates the type of cart to checkout.
 * @property {string} [cartType] - The type of cart.
 * @property {CartApplicationModel.CartCheckoutDetailRequest} body
 */
/**
 * @typedef CheckoutCartV2Param
 * @property {boolean} [buyNow] - This indicates the type of cart to checkout.
 * @property {string} [cartType] - The type of cart.
 * @property {CartApplicationModel.CartCheckoutDetailV2Request} body
 */
/**
 * @typedef DeleteCartParam
 * @property {string} [id] - The unique identifier of the cart.
 */
/**
 * @typedef GetAddressByIdParam
 * @property {string} id - ID allotted to the selected address.
 * @property {string} [cartId] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart.
 * @property {string} [mobileNo] - Mobile number of the customer.
 * @property {string} [checkoutMode] - Option to checkout for self or for others.
 * @property {string} [tags] - Tag given to an address, e.g. work, home, office, shop.
 * @property {boolean} [isDefault] - This is a boolean value. Select `true` to
 *   fetch the default address.
 */
/**
 * @typedef GetAddressesParam
 * @property {string} [cartId] - The unique identifier of the user cart.
 * @property {boolean} [buyNow] - Whether to get buy_now cart.
 * @property {string} [mobileNo] - Mobile number of the customer.
 * @property {string} [checkoutMode] - Option to checkout for self or for others.
 * @property {string} [tags] - Tag given to an address, e.g. work, home, office, shop.
 * @property {boolean} [isDefault] - Select `true` to fetch the default address.
 */
/**
 * @typedef GetBulkDiscountOffersParam
 * @property {number} [itemId] - The Item ID of the product.
 * @property {string} [articleId] - Article Mongo ID.
 * @property {number} [uid] - UID of the product.
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier
 *   of a product.
 */
/**
 * @typedef GetCartParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [i] - Select `true` to retrieve all the items added in the cart.
 * @property {boolean} [b] - Select `true` to retrieve the price breakup of cart items.
 * @property {boolean} [c] - Select `true` to retrieve the cod charges in
 *   breakup of cart items.
 * @property {number} [assignCardId] - Token of user's debit or credit card.
 * @property {string} [areaCode] - Customer servicable area_code.
 * @property {boolean} [buyNow] - Select `true` to set/initialize buy now cart.
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 */
/**
 * @typedef GetCartLastModifiedParam
 * @property {string} [id] - The unique identifier of the cart.
 */
/**
 * @typedef GetCartShareLinkParam
 * @property {CartApplicationModel.GetShareCartLinkRequest} body
 */
/**
 * @typedef GetCartSharedItemsParam
 * @property {string} token - Token of the shared short link.
 */
/**
 * @typedef GetCouponsParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Whether to get buy_now cart.
 * @property {string} [slug] - Product slug to fetch the available coupons.
 * @property {string} [storeId] - Unique identifier of a store.
 */
/**
 * @typedef GetItemCountParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Boolean value to get buy_now cart.
 */
/**
 * @typedef GetLadderOffersParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product.
 * @property {string} [storeId] - Store uid of assigned store on PDP page. If
 *   not passed default first created ladder will be returned.
 * @property {string} [promotionId] - Get ladder information of given promotion
 *   id explicitely.
 * @property {number} [pageSize] - Number of offers to be fetched to show.
 */
/**
 * @typedef GetPromotionOffersParam
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier
 *   of a product.
 * @property {number} [pageSize] - Number of offers to be fetched to show.
 * @property {string} [promotionGroup] - Type of promotion groups.
 * @property {number} [storeId] - Unique identifier of a store.
 * @property {string} [cartType] - The type of cart.
 */
/**
 * @typedef GetPromotionPaymentOffersParam
 * @property {string} [id] - Cart id of the user cart .
 * @property {number} [uid] - Cart uid of the user cart .
 */
/**
 * @typedef GetShipmentsParam
 * @property {boolean} [p] - Select `true` for getting a payment option in response.
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - This is boolean to get buy_now cart.
 * @property {string} [addressId] - ID allotted to the selected address.
 * @property {string} [areaCode] - The PIN Code of the destination address, e.g. 400059.
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself. Digital - If the
 *   customer wants to buy digital voucher ( for jiogames ).
 */
/**
 * @typedef RemoveAddressParam
 * @property {string} id - ID allotted to the selected address.
 */
/**
 * @typedef RemoveCouponParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Wheter to get buy_now cart.
 */
/**
 * @typedef SelectAddressParam
 * @property {string} [cartId] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Whether to get buy_now cart.
 * @property {boolean} [i] - Select `true` to retrieve all the items added in the cart.
 * @property {boolean} [b] - Select `true` to retrieve the price breakup of cart items.
 * @property {CartApplicationModel.SelectCartAddressRequest} body
 */
/**
 * @typedef SelectPaymentModeParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Whether to get buy_now cart.
 * @property {CartApplicationModel.UpdateCartPaymentRequest} body
 */
/**
 * @typedef UpdateAddressParam
 * @property {string} id - ID allotted to the selected address.
 * @property {CartApplicationModel.Address} body
 */
/**
 * @typedef UpdateCartParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [i] - Select `true` to retrieve all the items added in the cart.
 * @property {boolean} [b] - Select `true` to retrieve the price breakup of cart items.
 * @property {string} [areaCode] - Customer servicable area_code.
 * @property {boolean} [buyNow] - Select `true` to set/initialize buy now cart.
 * @property {string} [cartType] - The type of cart.
 * @property {string} [orderType] - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {CartApplicationModel.UpdateCartRequest} body
 */
/**
 * @typedef UpdateCartMetaParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Whether to get buy_now cart.
 * @property {CartApplicationModel.CartMetaRequest} body
 */
/**
 * @typedef UpdateCartWithSharedItemsParam
 * @property {string} token - Token of the shared short link.
 * @property {string} action - Operation to perform on the existing cart merge or replace.
 */
/**
 * @typedef ValidateCouponForPaymentParam
 * @property {string} [id] - The unique identifier of the cart.
 * @property {boolean} [buyNow] - Whether to get buy_now cart.
 * @property {string} [addressId] - ID allotted to an address.
 * @property {string} [paymentMode] - Payment mode selected by the customer.
 * @property {string} [paymentIdentifier] - Identifier of payment like ICIC, PAYTM.
 * @property {string} [aggregatorName] - Payment gateway identifier.
 * @property {string} [merchantCode] - Identifier used by payment gateway for a
 *   given payment mode, e.g. NB_ICIC, PAYTM.
 * @property {string} [iin] - Debit/Credit card prefix (first 6 digit).
 * @property {string} [network] - Credit/Debit card issuer, e.g. VISA, MASTERCARD, RUPAY.
 * @property {string} [type] - Card type, e.g. Credit, Debit.
 * @property {string} [cardId] - Saved card token reference id.
 * @property {string} [cartType] - Type of the cart.
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
    /** @returns {GetPromotionPaymentOffersParam} */
    static getPromotionPaymentOffers(): GetPromotionPaymentOffersParam;
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
    export { AddAddressParam, AddItemsParam, ApplyCouponParam, ApplyRewardPointsParam, CheckoutCartParam, CheckoutCartV2Param, DeleteCartParam, GetAddressByIdParam, GetAddressesParam, GetBulkDiscountOffersParam, GetCartParam, GetCartLastModifiedParam, GetCartShareLinkParam, GetCartSharedItemsParam, GetCouponsParam, GetItemCountParam, GetLadderOffersParam, GetPromotionOffersParam, GetPromotionPaymentOffersParam, GetShipmentsParam, RemoveAddressParam, RemoveCouponParam, SelectAddressParam, SelectPaymentModeParam, UpdateAddressParam, UpdateCartParam, UpdateCartMetaParam, UpdateCartWithSharedItemsParam, ValidateCouponForPaymentParam };
}
type AddAddressParam = {
    body: CartApplicationModel.Address;
};
type AddItemsParam = {
    /**
     * - Select `true` to retrieve all the items added in the cart.
     */
    i?: boolean;
    /**
     * - Select `true` to retrieve the price breakup of cart items.
     */
    b?: boolean;
    /**
     * - Customer servicable area_code.
     */
    areaCode?: string;
    /**
     * - Select `true` to set/initialize buy now cart.
     */
    buyNow?: boolean;
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
    /**
     * - The order type of shipment HomeDelivery - If
     * the customer wants the order home-delivered PickAtStore - If the customer
     * wants the handover of an order at the store itself.
     */
    orderType?: string;
    body: CartApplicationModel.AddCartRequest;
};
type ApplyCouponParam = {
    /**
     * - Select `true` to retrieve all the items added in the cart.
     */
    i?: boolean;
    /**
     * - Select `true` to retrieve the price breakup of cart items.
     */
    b?: boolean;
    /**
     * - Select `true` for getting a payment option in response.
     */
    p?: boolean;
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
    /**
     * - This is boolean to get buy_now cart.
     */
    buyNow?: boolean;
    /**
     * - The type of cart.
     */
    cartType?: string;
    body: CartApplicationModel.ApplyCouponRequest;
};
type ApplyRewardPointsParam = {
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
    body: CartApplicationModel.RewardPointRequest;
};
type CheckoutCartParam = {
    /**
     * - This indicates the type of cart to checkout.
     */
    buyNow?: boolean;
    /**
     * - The type of cart.
     */
    cartType?: string;
    body: CartApplicationModel.CartCheckoutDetailRequest;
};
type CheckoutCartV2Param = {
    /**
     * - This indicates the type of cart to checkout.
     */
    buyNow?: boolean;
    /**
     * - The type of cart.
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
    /**
     * - ID allotted to the selected address.
     */
    id: string;
    /**
     * - The unique identifier of the cart.
     */
    cartId?: string;
    /**
     * - This is boolean to get buy_now cart.
     */
    buyNow?: boolean;
    /**
     * - Mobile number of the customer.
     */
    mobileNo?: string;
    /**
     * - Option to checkout for self or for others.
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
};
type GetAddressesParam = {
    /**
     * - The unique identifier of the user cart.
     */
    cartId?: string;
    /**
     * - Whether to get buy_now cart.
     */
    buyNow?: boolean;
    /**
     * - Mobile number of the customer.
     */
    mobileNo?: string;
    /**
     * - Option to checkout for self or for others.
     */
    checkoutMode?: string;
    /**
     * - Tag given to an address, e.g. work, home, office, shop.
     */
    tags?: string;
    /**
     * - Select `true` to fetch the default address.
     */
    isDefault?: boolean;
};
type GetBulkDiscountOffersParam = {
    /**
     * - The Item ID of the product.
     */
    itemId?: number;
    /**
     * - Article Mongo ID.
     */
    articleId?: string;
    /**
     * - UID of the product.
     */
    uid?: number;
    /**
     * - A short, human-readable, URL-friendly identifier
     * of a product.
     */
    slug?: string;
};
type GetCartParam = {
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
     * - Select `true` to retrieve the cod charges in
     * breakup of cart items.
     */
    c?: boolean;
    /**
     * - Token of user's debit or credit card.
     */
    assignCardId?: number;
    /**
     * - Customer servicable area_code.
     */
    areaCode?: string;
    /**
     * - Select `true` to set/initialize buy now cart.
     */
    buyNow?: boolean;
    /**
     * - The order type of shipment HomeDelivery - If
     * the customer wants the order home-delivered PickAtStore - If the customer
     * wants the handover of an order at the store itself.
     */
    orderType?: string;
};
type GetCartLastModifiedParam = {
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
};
type GetCartShareLinkParam = {
    body: CartApplicationModel.GetShareCartLinkRequest;
};
type GetCartSharedItemsParam = {
    /**
     * - Token of the shared short link.
     */
    token: string;
};
type GetCouponsParam = {
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
    /**
     * - Whether to get buy_now cart.
     */
    buyNow?: boolean;
    /**
     * - Product slug to fetch the available coupons.
     */
    slug?: string;
    /**
     * - Unique identifier of a store.
     */
    storeId?: string;
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
     * a product.
     */
    slug: string;
    /**
     * - Store uid of assigned store on PDP page. If
     * not passed default first created ladder will be returned.
     */
    storeId?: string;
    /**
     * - Get ladder information of given promotion
     * id explicitely.
     */
    promotionId?: string;
    /**
     * - Number of offers to be fetched to show.
     */
    pageSize?: number;
};
type GetPromotionOffersParam = {
    /**
     * - A short, human-readable, URL-friendly identifier
     * of a product.
     */
    slug?: string;
    /**
     * - Number of offers to be fetched to show.
     */
    pageSize?: number;
    /**
     * - Type of promotion groups.
     */
    promotionGroup?: string;
    /**
     * - Unique identifier of a store.
     */
    storeId?: number;
    /**
     * - The type of cart.
     */
    cartType?: string;
};
type GetPromotionPaymentOffersParam = {
    /**
     * - Cart id of the user cart .
     */
    id?: string;
    /**
     * - Cart uid of the user cart .
     */
    uid?: number;
};
type GetShipmentsParam = {
    /**
     * - Select `true` for getting a payment option in response.
     */
    p?: boolean;
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
    /**
     * - This is boolean to get buy_now cart.
     */
    buyNow?: boolean;
    /**
     * - ID allotted to the selected address.
     */
    addressId?: string;
    /**
     * - The PIN Code of the destination address, e.g. 400059.
     */
    areaCode?: string;
    /**
     * - The order type of shipment HomeDelivery - If
     * the customer wants the order home-delivered PickAtStore - If the customer
     * wants the handover of an order at the store itself. Digital - If the
     * customer wants to buy digital voucher ( for jiogames ).
     */
    orderType?: string;
};
type RemoveAddressParam = {
    /**
     * - ID allotted to the selected address.
     */
    id: string;
};
type RemoveCouponParam = {
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
    /**
     * - Wheter to get buy_now cart.
     */
    buyNow?: boolean;
};
type SelectAddressParam = {
    /**
     * - The unique identifier of the cart.
     */
    cartId?: string;
    /**
     * - Whether to get buy_now cart.
     */
    buyNow?: boolean;
    /**
     * - Select `true` to retrieve all the items added in the cart.
     */
    i?: boolean;
    /**
     * - Select `true` to retrieve the price breakup of cart items.
     */
    b?: boolean;
    body: CartApplicationModel.SelectCartAddressRequest;
};
type SelectPaymentModeParam = {
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
    /**
     * - Whether to get buy_now cart.
     */
    buyNow?: boolean;
    body: CartApplicationModel.UpdateCartPaymentRequest;
};
type UpdateAddressParam = {
    /**
     * - ID allotted to the selected address.
     */
    id: string;
    body: CartApplicationModel.Address;
};
type UpdateCartParam = {
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
     * - Customer servicable area_code.
     */
    areaCode?: string;
    /**
     * - Select `true` to set/initialize buy now cart.
     */
    buyNow?: boolean;
    /**
     * - The type of cart.
     */
    cartType?: string;
    /**
     * - The order type of shipment HomeDelivery - If
     * the customer wants the order home-delivered PickAtStore - If the customer
     * wants the handover of an order at the store itself.
     */
    orderType?: string;
    body: CartApplicationModel.UpdateCartRequest;
};
type UpdateCartMetaParam = {
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
    /**
     * - Whether to get buy_now cart.
     */
    buyNow?: boolean;
    body: CartApplicationModel.CartMetaRequest;
};
type UpdateCartWithSharedItemsParam = {
    /**
     * - Token of the shared short link.
     */
    token: string;
    /**
     * - Operation to perform on the existing cart merge or replace.
     */
    action: string;
};
type ValidateCouponForPaymentParam = {
    /**
     * - The unique identifier of the cart.
     */
    id?: string;
    /**
     * - Whether to get buy_now cart.
     */
    buyNow?: boolean;
    /**
     * - ID allotted to an address.
     */
    addressId?: string;
    /**
     * - Payment mode selected by the customer.
     */
    paymentMode?: string;
    /**
     * - Identifier of payment like ICIC, PAYTM.
     */
    paymentIdentifier?: string;
    /**
     * - Payment gateway identifier.
     */
    aggregatorName?: string;
    /**
     * - Identifier used by payment gateway for a
     * given payment mode, e.g. NB_ICIC, PAYTM.
     */
    merchantCode?: string;
    /**
     * - Debit/Credit card prefix (first 6 digit).
     */
    iin?: string;
    /**
     * - Credit/Debit card issuer, e.g. VISA, MASTERCARD, RUPAY.
     */
    network?: string;
    /**
     * - Card type, e.g. Credit, Debit.
     */
    type?: string;
    /**
     * - Saved card token reference id.
     */
    cardId?: string;
    /**
     * - Type of the cart.
     */
    cartType?: string;
};
import CartApplicationModel = require("./CartApplicationModel");
