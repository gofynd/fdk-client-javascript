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
     * @summary: Add address to an account
     * @description: Use this API to add an address to an account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/addAddress/).
     */
    addAddress({ body, requestHeaders }?: PosCartApplicationValidator.AddAddressParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.SaveAddressResponse>;
    /**
     * @param {PosCartApplicationValidator.AddItemsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.AddCartDetailResponse>} -
     *   Success response
     * @name addItems
     * @summary: Add items to cart
     * @description: Use this API to add items to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/addItems/).
     */
    addItems({ body, i, b, areaCode, buyNow, id, requestHeaders }?: PosCartApplicationValidator.AddItemsParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.AddCartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.ApplyCouponParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name applyCoupon
     * @summary: Apply Coupon
     * @description: Use this API to apply coupons on items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/applyCoupon/).
     */
    applyCoupon({ body, i, b, p, id, buyNow, requestHeaders }?: PosCartApplicationValidator.ApplyCouponParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.ApplyRewardPointsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name applyRewardPoints
     * @summary: Apply reward points at cart
     * @description: Use this API to redeem a fixed no. of reward points by applying it to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/applyRewardPoints/).
     */
    applyRewardPoints({ body, id, i, b, buyNow, requestHeaders }?: PosCartApplicationValidator.ApplyRewardPointsParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.CheckoutCartParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartCheckoutResponse>} - Success response
     * @name checkoutCart
     * @summary: Checkout all items in the cart
     * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be generated directly, whereas for other checkout modes, user will be redirected to a payment gateway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/checkoutCart/).
     */
    checkoutCart({ body, id, requestHeaders }?: PosCartApplicationValidator.CheckoutCartParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartCheckoutResponse>;
    /**
     * @param {PosCartApplicationValidator.GetAddressByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.Address>} - Success response
     * @name getAddressById
     * @summary: Fetch a single address by its ID
     * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `Address`. Attibutes listed below are optional  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getAddressById/).
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, requestHeaders, }?: PosCartApplicationValidator.GetAddressByIdParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.Address>;
    /**
     * @param {PosCartApplicationValidator.GetAddressesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.GetAddressesResponse>} - Success response
     * @name getAddresses
     * @summary: Fetch address
     * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getAddresses/).
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
     * @summary: Get available delivery modes for cart
     * @description: Use this API to get the delivery modes (home-delivery/store-pickup) along with a list of pickup stores available for a given cart at a given PIN Code. User can then view the address of a pickup store with the help of store-address API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getAvailableDeliveryModes/).
     */
    getAvailableDeliveryModes({ areaCode, id, requestHeaders }?: PosCartApplicationValidator.GetAvailableDeliveryModesParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartDeliveryModesResponse>;
    /**
     * @param {PosCartApplicationValidator.GetBulkDiscountOffersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.BulkPriceResponse>} - Success response
     * @name getBulkDiscountOffers
     * @summary: Get discount offers based on quantity
     * @description: Use this API to get a list of applicable offers along with current, next and best offer for given product. Either one of uid, item_id, slug should be present. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getBulkDiscountOffers/).
     */
    getBulkDiscountOffers({ itemId, articleId, uid, slug, requestHeaders }?: PosCartApplicationValidator.GetBulkDiscountOffersParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.BulkPriceResponse>;
    /**
     * @param {PosCartApplicationValidator.GetCartParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name getCart
     * @summary: Fetch all items added to the cart
     * @description: Use this API to get details of all the items added to a cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getCart/).
     */
    getCart({ id, i, b, c, assignCardId, areaCode, buyNow, requestHeaders }?: PosCartApplicationValidator.GetCartParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.GetCartLastModifiedParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<any>} - Success response
     * @name getCartLastModified
     * @summary: Fetch last-modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getCartLastModified/).
     */
    getCartLastModified({ id, requestHeaders }?: PosCartApplicationValidator.GetCartLastModifiedParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {PosCartApplicationValidator.GetCartShareLinkParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.GetShareCartLinkResponse>} -
     *   Success response
     * @name getCartShareLink
     * @summary: Generate token for sharing the cart
     * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getCartShareLink/).
     */
    getCartShareLink({ body, requestHeaders }?: PosCartApplicationValidator.GetCartShareLinkParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.GetShareCartLinkResponse>;
    /**
     * @param {PosCartApplicationValidator.GetCartSharedItemsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.SharedCartResponse>} - Success response
     * @name getCartSharedItems
     * @summary: Get details of a shared cart
     * @description: Use this API to get the shared cart details as per the token generated using the share-cart API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getCartSharedItems/).
     */
    getCartSharedItems({ token, requestHeaders }?: PosCartApplicationValidator.GetCartSharedItemsParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.SharedCartResponse>;
    /**
     * @param {PosCartApplicationValidator.GetCouponsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.GetCouponResponse>} - Success response
     * @name getCoupons
     * @summary: Fetch Coupon
     * @description: Use this API to get a list of available coupons along with their details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getCoupons/).
     */
    getCoupons({ id, buyNow, requestHeaders }?: PosCartApplicationValidator.GetCouponsParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.GetCouponResponse>;
    /**
     * @param {PosCartApplicationValidator.GetItemCountParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartItemCountResponse>} -
     *   Success response
     * @name getItemCount
     * @summary: Count items in the cart
     * @description: Use this API to get the total number of items present in cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getItemCount/).
     */
    getItemCount({ id, buyNow, requestHeaders }?: PosCartApplicationValidator.GetItemCountParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartItemCountResponse>;
    /**
     * @param {PosCartApplicationValidator.GetShipmentsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartShipmentsResponse>} -
     *   Success response
     * @name getShipments
     * @summary: Get delivery date and options before checkout
     * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getShipments/).
     */
    getShipments({ pickAtStoreUid, orderingStoreId, p, id, addressId, areaCode, orderType, requestHeaders, }?: PosCartApplicationValidator.GetShipmentsParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartShipmentsResponse>;
    /**
     * @param {PosCartApplicationValidator.GetStoreAddressByUidParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.StoreDetailsResponse>} - Success response
     * @name getStoreAddressByUid
     * @summary: Get list of stores for give uids
     * @description: Use this API to get the store details by entering the unique identifier of the pickup stores shown in the response of available-delivery-mode API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getStoreAddressByUid/).
     */
    getStoreAddressByUid({ storeUid, requestHeaders }?: PosCartApplicationValidator.GetStoreAddressByUidParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.StoreDetailsResponse>;
    /**
     * @param {PosCartApplicationValidator.RemoveAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.DeleteAddressResponse>} -
     *   Success response
     * @name removeAddress
     * @summary: Remove address associated with an account
     * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/removeAddress/).
     */
    removeAddress({ id, requestHeaders }?: PosCartApplicationValidator.RemoveAddressParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.DeleteAddressResponse>;
    /**
     * @param {PosCartApplicationValidator.RemoveCouponParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name removeCoupon
     * @summary: Remove Coupon Applied
     * @description: Remove Coupon applied on the cart by passing uid in request body. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/removeCoupon/).
     */
    removeCoupon({ id, buyNow, requestHeaders }?: PosCartApplicationValidator.RemoveCouponParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.SelectAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name selectAddress
     * @summary: Select an address from available addresses
     * @description: Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/selectAddress/).
     */
    selectAddress({ body, cartId, buyNow, i, b, requestHeaders }?: PosCartApplicationValidator.SelectAddressParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.SelectPaymentModeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name selectPaymentMode
     * @summary: Update cart payment
     * @description: Use this API to update cart payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/selectPaymentMode/).
     */
    selectPaymentMode({ body, id, buyNow, requestHeaders }?: PosCartApplicationValidator.SelectPaymentModeParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.UpdateAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.UpdateAddressResponse>} -
     *   Success response
     * @name updateAddress
     * @summary: Update address added to an account
     * @description: Use this API to update an existing address in the account. Request object should contain attributes mentioned in Address  can be updated. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/updateAddress/).
     */
    updateAddress({ id, body, requestHeaders }?: PosCartApplicationValidator.UpdateAddressParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.UpdateAddressResponse>;
    /**
     * @param {PosCartApplicationValidator.UpdateCartParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.UpdateCartDetailResponse>} -
     *   Success response
     * @name updateCart
     * @summary: Update items in the cart
     * @description: Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/updateCart/).
     */
    updateCart({ body, id, i, b, areaCode, buyNow, requestHeaders }?: PosCartApplicationValidator.UpdateCartParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.UpdateCartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.UpdateCartMetaParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartMetaResponse>} - Success response
     * @name updateCartMeta
     * @summary: Update the cart meta
     * @description: Use this API to update cart meta like checkout_mode and gstin. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/updateCartMeta/).
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
     * @summary: Merge or replace existing cart
     * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/updateCartWithSharedItems/).
     */
    updateCartWithSharedItems({ token, action, requestHeaders }?: PosCartApplicationValidator.UpdateCartWithSharedItemsParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.SharedCartResponse>;
    /**
     * @param {PosCartApplicationValidator.UpdateShipmentsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PosCartApplicationModel.CartShipmentsResponse>} -
     *   Success response
     * @name updateShipments
     * @summary: Update shipment delivery type and quantity before checkout
     * @description: Use this API to update the delivery type and quantity as per customer's preference for either store pick-up or home-delivery. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/updateShipments/).
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
     * @summary: Verify the coupon eligibility against the payment mode
     * @description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/validateCouponForPayment/).
     */
    validateCouponForPayment({ id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, iin, network, type, cardId, requestHeaders, }?: PosCartApplicationValidator.ValidateCouponForPaymentParam, { responseHeaders }?: object): Promise<PosCartApplicationModel.PaymentCouponValidate>;
}
import PosCartApplicationValidator = require("./PosCartApplicationValidator");
import PosCartApplicationModel = require("./PosCartApplicationModel");
