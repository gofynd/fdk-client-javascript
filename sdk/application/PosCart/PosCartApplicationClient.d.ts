export = PosCart;
declare class PosCart {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        addAddress: string;
        addItems: string;
        applyCoupon: string;
        applyRewardPoints: string;
        checkoutCart: string;
        getAddressById: string;
        getAddresses: string;
        getAvailableDeliveryModes: string;
        getBulkDiscountOffers: string;
        getCart: string;
        getCartLastModified: string;
        getCartShareLink: string;
        getCartSharedItems: string;
        getCoupons: string;
        getItemCount: string;
        getShipments: string;
        getStoreAddressByUid: string;
        removeAddress: string;
        removeCoupon: string;
        selectAddress: string;
        selectPaymentMode: string;
        updateAddress: string;
        updateCart: string;
        updateCartMeta: string;
        updateCartWithSharedItems: string;
        updateShipments: string;
        validateCouponForPayment: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {PosCartApplicationValidator.AddAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.SaveAddressResponse>} - Success response
     * @name addAddress
     * @summary: Add new address
     * @description: Saves a new address for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/addAddress/).
     */
    addAddress({ body, requestHeaders }?: PosCartApplicationValidator.AddAddressParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.SaveAddressResponse>;
    /**
     * @param {PosCartApplicationValidator.AddItemsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.AddCartDetailResponse>} -
     *   Success response
     * @name addItems
     * @summary: Add to cart
     * @description: Adds selected items to the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/addItems/).
     */
    addItems({ body, i, b, areaCode, buyNow, id, requestHeaders }?: PosCartApplicationValidator.AddItemsParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.AddCartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.ApplyCouponParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name applyCoupon
     * @summary: Apply coupon
     * @description: Applies a coupon code to get discounts on cart items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/applyCoupon/).
     */
    applyCoupon({ body, i, b, p, id, buyNow, requestHeaders }?: PosCartApplicationValidator.ApplyCouponParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.ApplyRewardPointsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name applyRewardPoints
     * @summary: Use reward points
     * @description: Applies user’s reward points to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/applyRewardPoints/).
     */
    applyRewardPoints({ body, id, i, b, buyNow, requestHeaders }?: PosCartApplicationValidator.ApplyRewardPointsParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.CheckoutCartParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartCheckoutResponse>} - Success response
     * @name checkoutCart
     * @summary: Checkout cart
     * @description: Initiates the checkout process for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/checkoutCart/).
     */
    checkoutCart({ body, id, requestHeaders }?: PosCartApplicationValidator.CheckoutCartParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartCheckoutResponse>;
    /**
     * @param {PosCartApplicationValidator.GetAddressByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.Address>} - Success response
     * @name getAddressById
     * @summary: Fetch address
     * @description: Retrieves a saved address using its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getAddressById/).
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, requestHeaders, }?: PosCartApplicationValidator.GetAddressByIdParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.Address>;
    /**
     * @param {PosCartApplicationValidator.GetAddressesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.GetAddressesResponse>} - Success response
     * @name getAddresses
     * @summary: Get saved addresses
     * @description: Retrieve all saved addresses for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getAddresses/).
     */
    getAddresses({ cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, requestHeaders, }?: PosCartApplicationValidator.GetAddressesParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.GetAddressesResponse>;
    /**
     * @param {PosCartApplicationValidator.GetAvailableDeliveryModesParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartDeliveryModesResponse>} -
     *   Success response
     * @name getAvailableDeliveryModes
     * @summary: Delivery options
     * @description: Lists available delivery modes for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getAvailableDeliveryModes/).
     */
    getAvailableDeliveryModes({ areaCode, id, requestHeaders }?: PosCartApplicationValidator.GetAvailableDeliveryModesParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartDeliveryModesResponse>;
    /**
     * @param {PosCartApplicationValidator.GetBulkDiscountOffersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.BulkPriceResponse>} - Success response
     * @name getBulkDiscountOffers
     * @summary: Bulk discounts
     * @description: Lists available bulk discount offers for cart items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getBulkDiscountOffers/).
     */
    getBulkDiscountOffers({ itemId, articleId, uid, slug, requestHeaders }?: PosCartApplicationValidator.GetBulkDiscountOffersParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.BulkPriceResponse>;
    /**
     * @param {PosCartApplicationValidator.GetCartParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name getCart
     * @summary: Retrieve cart details
     * @description: Retrieve the current state and items in the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getCart/).
     */
    getCart({ id, i, b, c, assignCardId, areaCode, buyNow, requestHeaders }?: PosCartApplicationValidator.GetCartParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.GetCartLastModifiedParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<any>} - Success response
     * @name getCartLastModified
     * @summary: Cart modification time
     * @description: Gets the last modified timestamp for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getCartLastModified/).
     */
    getCartLastModified({ id, requestHeaders }?: PosCartApplicationValidator.GetCartLastModifiedParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {PosCartApplicationValidator.GetCartShareLinkParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.GetShareCartLinkResponse>} -
     *   Success response
     * @name getCartShareLink
     * @summary: Share cart link
     * @description: Generates a shareable link for the current cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getCartShareLink/).
     */
    getCartShareLink({ body, requestHeaders }?: PosCartApplicationValidator.GetCartShareLinkParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.GetShareCartLinkResponse>;
    /**
     * @param {PosCartApplicationValidator.GetCartSharedItemsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.SharedCartResponse>} - Success response
     * @name getCartSharedItems
     * @summary: Shared cart items
     * @description: Retrieves items from a shared cart link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getCartSharedItems/).
     */
    getCartSharedItems({ token, requestHeaders }?: PosCartApplicationValidator.GetCartSharedItemsParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.SharedCartResponse>;
    /**
     * @param {PosCartApplicationValidator.GetCouponsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.GetCouponResponse>} - Success response
     * @name getCoupons
     * @summary: List available coupons
     * @description: Retrieve coupons that can be applied to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getCoupons/).
     */
    getCoupons({ id, buyNow, requestHeaders }?: PosCartApplicationValidator.GetCouponsParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.GetCouponResponse>;
    /**
     * @param {PosCartApplicationValidator.GetItemCountParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartItemCountResponse>} -
     *   Success response
     * @name getItemCount
     * @summary: Count cart items
     * @description: Gets the total number of items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getItemCount/).
     */
    getItemCount({ id, buyNow, requestHeaders }?: PosCartApplicationValidator.GetItemCountParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartItemCountResponse>;
    /**
     * @param {PosCartApplicationValidator.GetShipmentsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartShipmentsResponse>} -
     *   Success response
     * @name getShipments
     * @summary: List shipments
     * @description: Retrieve shipment details for items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getShipments/).
     */
    getShipments({ pickAtStoreUid, orderingStoreId, p, id, addressId, areaCode, orderType, requestHeaders, }?: PosCartApplicationValidator.GetShipmentsParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartShipmentsResponse>;
    /**
     * @param {PosCartApplicationValidator.GetStoreAddressByUidParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.StoreDetailsResponse>} - Success response
     * @name getStoreAddressByUid
     * @summary: Store address
     * @description: Gets the address of the store by its UID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getStoreAddressByUid/).
     */
    getStoreAddressByUid({ storeUid, requestHeaders }?: PosCartApplicationValidator.GetStoreAddressByUidParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.StoreDetailsResponse>;
    /**
     * @param {PosCartApplicationValidator.RemoveAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.DeleteAddressResponse>} -
     *   Success response
     * @name removeAddress
     * @summary: Delete address
     * @description: Removes a saved address from the user's profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/removeAddress/).
     */
    removeAddress({ id, requestHeaders }?: PosCartApplicationValidator.RemoveAddressParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.DeleteAddressResponse>;
    /**
     * @param {PosCartApplicationValidator.RemoveCouponParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name removeCoupon
     * @summary: Remove coupon
     * @description: Removes an applied coupon from the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/removeCoupon/).
     */
    removeCoupon({ id, buyNow, requestHeaders }?: PosCartApplicationValidator.RemoveCouponParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.SelectAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name selectAddress
     * @summary: Choose delivery address
     * @description: Selects an address for the cart's delivery. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/selectAddress/).
     */
    selectAddress({ body, cartId, buyNow, i, b, requestHeaders }?: PosCartApplicationValidator.SelectAddressParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.SelectPaymentModeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name selectPaymentMode
     * @summary: Pick payment method
     * @description: Chooses a payment mode for the checkout process. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/selectPaymentMode/).
     */
    selectPaymentMode({ body, id, buyNow, requestHeaders }?: PosCartApplicationValidator.SelectPaymentModeParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.UpdateAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.UpdateAddressResponse>} -
     *   Success response
     * @name updateAddress
     * @summary: Update address
     * @description: Modifies a saved address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/updateAddress/).
     */
    updateAddress({ id, body, requestHeaders }?: PosCartApplicationValidator.UpdateAddressParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.UpdateAddressResponse>;
    /**
     * @param {PosCartApplicationValidator.UpdateCartParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.UpdateCartDetailResponse>} -
     *   Success response
     * @name updateCart
     * @summary: Update cart
     * @description: Modifies items and quantities in the existing cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/updateCart/).
     */
    updateCart({ body, id, i, b, areaCode, buyNow, requestHeaders }?: PosCartApplicationValidator.UpdateCartParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.UpdateCartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.UpdateCartMetaParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartMetaResponse>} - Success response
     * @name updateCartMeta
     * @summary: Update cart metadata
     * @description: Adds or modifies metadata for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/updateCartMeta/).
     */
    updateCartMeta({ body, id, buyNow, requestHeaders }?: PosCartApplicationValidator.UpdateCartMetaParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartMetaResponse>;
    /**
     * @param {PosCartApplicationValidator.UpdateCartWithSharedItemsParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.SharedCartResponse>} - Success response
     * @name updateCartWithSharedItems
     * @summary: Update with shared items
     * @description: Updates the cart with items from a shared link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/updateCartWithSharedItems/).
     */
    updateCartWithSharedItems({ token, action, requestHeaders }?: PosCartApplicationValidator.UpdateCartWithSharedItemsParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.SharedCartResponse>;
    /**
     * @param {PosCartApplicationValidator.UpdateShipmentsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartShipmentsResponse>} -
     *   Success response
     * @name updateShipments
     * @summary: Update shipments
     * @description: Modifies shipment details for items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/updateShipments/).
     */
    updateShipments({ body, i, p, id, addressId, areaCode, orderType, requestHeaders }?: PosCartApplicationValidator.UpdateShipmentsParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartShipmentsResponse>;
    /**
     * @param {PosCartApplicationValidator.ValidateCouponForPaymentParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.PaymentCouponValidate>} -
     *   Success response
     * @name validateCouponForPayment
     * @summary: Validate coupon
     * @description: Checks if a coupon is valid for the selected payment mode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/validateCouponForPayment/).
     */
    validateCouponForPayment({ id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, iin, network, type, cardId, requestHeaders, }?: PosCartApplicationValidator.ValidateCouponForPaymentParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.PaymentCouponValidate>;
}
import PosCartApplicationValidator = require("./PosCartApplicationValidator");
import PosCartApplicationModel = require("./PosCartApplicationModel");
