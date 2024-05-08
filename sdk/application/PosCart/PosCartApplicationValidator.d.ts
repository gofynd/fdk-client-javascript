export = PosCartApplicationValidator;
/**
 * @typedef AddAddressParam
 * @property {PosCartApplicationModel.Address} body
 */
/**
 * @typedef AddItemsParam
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {string} [areaCode]
 * @property {boolean} [buyNow]
 * @property {string} [id]
 * @property {PosCartApplicationModel.AddCartRequest} body
 */
/**
 * @typedef ApplyCouponParam
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [p]
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {PosCartApplicationModel.ApplyCouponRequest} body
 */
/**
 * @typedef ApplyRewardPointsParam
 * @property {string} [id]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [buyNow]
 * @property {PosCartApplicationModel.RewardPointRequest} body
 */
/**
 * @typedef CheckoutCartParam
 * @property {string} [id]
 * @property {PosCartApplicationModel.CartPosCheckoutDetailRequest} body
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
 * @typedef GetAvailableDeliveryModesParam
 * @property {string} areaCode
 * @property {string} [id]
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
 * @property {string} [id]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {boolean} [c]
 * @property {number} [assignCardId]
 * @property {string} [areaCode]
 * @property {boolean} [buyNow]
 */
/**
 * @typedef GetCartLastModifiedParam
 * @property {string} [id]
 */
/**
 * @typedef GetCartShareLinkParam
 * @property {PosCartApplicationModel.GetShareCartLinkRequest} body
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
 * @property {boolean} [buyNow]
 */
/**
 * @typedef GetShipmentsParam
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
 * @typedef GetStoreAddressByUidParam
 * @property {number} storeUid
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
 * @property {PosCartApplicationModel.SelectCartAddressRequest} body
 */
/**
 * @typedef SelectPaymentModeParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {PosCartApplicationModel.UpdateCartPaymentRequest} body
 */
/**
 * @typedef UpdateAddressParam
 * @property {string} id - ID allotted to the selected address
 * @property {PosCartApplicationModel.Address} body
 */
/**
 * @typedef UpdateCartParam
 * @property {string} [id]
 * @property {boolean} [i]
 * @property {boolean} [b]
 * @property {string} [areaCode]
 * @property {boolean} [buyNow]
 * @property {PosCartApplicationModel.UpdateCartRequest} body
 */
/**
 * @typedef UpdateCartMetaParam
 * @property {string} [id]
 * @property {boolean} [buyNow]
 * @property {PosCartApplicationModel.CartMetaRequest} body
 */
/**
 * @typedef UpdateCartWithSharedItemsParam
 * @property {string} token - Token of the shared short link
 * @property {string} action - Operation to perform on the existing cart merge or replace.
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
 * @property {PosCartApplicationModel.UpdateCartShipmentRequest} body
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
declare class PosCartApplicationValidator {
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
    /** @returns {GetAddressByIdParam} */
    static getAddressById(): GetAddressByIdParam;
    /** @returns {GetAddressesParam} */
    static getAddresses(): GetAddressesParam;
    /** @returns {GetAvailableDeliveryModesParam} */
    static getAvailableDeliveryModes(): GetAvailableDeliveryModesParam;
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
    /** @returns {GetShipmentsParam} */
    static getShipments(): GetShipmentsParam;
    /** @returns {GetStoreAddressByUidParam} */
    static getStoreAddressByUid(): GetStoreAddressByUidParam;
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
    /** @returns {UpdateShipmentsParam} */
    static updateShipments(): UpdateShipmentsParam;
    /** @returns {ValidateCouponForPaymentParam} */
    static validateCouponForPayment(): ValidateCouponForPaymentParam;
}
declare namespace PosCartApplicationValidator {
    export { AddAddressParam, AddItemsParam, ApplyCouponParam, ApplyRewardPointsParam, CheckoutCartParam, GetAddressByIdParam, GetAddressesParam, GetAvailableDeliveryModesParam, GetBulkDiscountOffersParam, GetCartParam, GetCartLastModifiedParam, GetCartShareLinkParam, GetCartSharedItemsParam, GetCouponsParam, GetItemCountParam, GetShipmentsParam, GetStoreAddressByUidParam, RemoveAddressParam, RemoveCouponParam, SelectAddressParam, SelectPaymentModeParam, UpdateAddressParam, UpdateCartParam, UpdateCartMetaParam, UpdateCartWithSharedItemsParam, UpdateShipmentsParam, ValidateCouponForPaymentParam };
}
type AddAddressParam = {
    body: PosCartApplicationModel.Address;
};
type AddItemsParam = {
    i?: boolean;
    b?: boolean;
    areaCode?: string;
    buyNow?: boolean;
    id?: string;
    body: PosCartApplicationModel.AddCartRequest;
};
type ApplyCouponParam = {
    i?: boolean;
    b?: boolean;
    p?: boolean;
    id?: string;
    buyNow?: boolean;
    body: PosCartApplicationModel.ApplyCouponRequest;
};
type ApplyRewardPointsParam = {
    id?: string;
    i?: boolean;
    b?: boolean;
    buyNow?: boolean;
    body: PosCartApplicationModel.RewardPointRequest;
};
type CheckoutCartParam = {
    id?: string;
    body: PosCartApplicationModel.CartPosCheckoutDetailRequest;
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
type GetAvailableDeliveryModesParam = {
    areaCode: string;
    id?: string;
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
    id?: string;
    i?: boolean;
    b?: boolean;
    c?: boolean;
    assignCardId?: number;
    areaCode?: string;
    buyNow?: boolean;
};
type GetCartLastModifiedParam = {
    id?: string;
};
type GetCartShareLinkParam = {
    body: PosCartApplicationModel.GetShareCartLinkRequest;
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
    buyNow?: boolean;
};
type GetShipmentsParam = {
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
type GetStoreAddressByUidParam = {
    storeUid: number;
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
    body: PosCartApplicationModel.SelectCartAddressRequest;
};
type SelectPaymentModeParam = {
    id?: string;
    buyNow?: boolean;
    body: PosCartApplicationModel.UpdateCartPaymentRequest;
};
type UpdateAddressParam = {
    /**
     * - ID allotted to the selected address
     */
    id: string;
    body: PosCartApplicationModel.Address;
};
type UpdateCartParam = {
    id?: string;
    i?: boolean;
    b?: boolean;
    areaCode?: string;
    buyNow?: boolean;
    body: PosCartApplicationModel.UpdateCartRequest;
};
type UpdateCartMetaParam = {
    id?: string;
    buyNow?: boolean;
    body: PosCartApplicationModel.CartMetaRequest;
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
    body: PosCartApplicationModel.UpdateCartShipmentRequest;
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
import PosCartApplicationModel = require("./PosCartApplicationModel");
