export = Cart;
declare class Cart {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        addAddress: string;
        addItems: string;
        applyCoupon: string;
        applyRewardPoints: string;
        checkoutCart: string;
        checkoutCartV2: string;
        deleteCart: string;
        getAddressById: string;
        getAddresses: string;
        getBulkDiscountOffers: string;
        getCart: string;
        getCartLastModified: string;
        getCartShareLink: string;
        getCartSharedItems: string;
        getCoupons: string;
        getItemCount: string;
        getLadderOffers: string;
        getPromotionOffers: string;
        getShipments: string;
        removeAddress: string;
        removeCoupon: string;
        selectAddress: string;
        selectPaymentMode: string;
        updateAddress: string;
        updateCart: string;
        updateCartMeta: string;
        updateCartWithSharedItems: string;
        validateCouponForPayment: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {CartApplicationValidator.AddAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.SaveAddressResponse>} - Success response
     * @name addAddress
     * @summary: Add new address.
     * @description: Saves a new address for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/addAddress/).
     */
    addAddress({ body, requestHeaders }?: CartApplicationValidator.AddAddressParam, { responseHeaders }?: object): Promise<CartApplicationModel.SaveAddressResponse>;
    /**
     * @param {CartApplicationValidator.AddItemsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.AddCartDetailResponse>} - Success response
     * @name addItems
     * @summary: Add to cart.
     * @description: Adds selected items to the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/addItems/).
     */
    addItems({ body, i, b, areaCode, buyNow, id, requestHeaders }?: CartApplicationValidator.AddItemsParam, { responseHeaders }?: object): Promise<CartApplicationModel.AddCartDetailResponse>;
    /**
     * @param {CartApplicationValidator.ApplyCouponParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name applyCoupon
     * @summary: Apply coupon.
     * @description: Applies a coupon code to get discounts on cart items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/applyCoupon/).
     */
    applyCoupon({ body, i, b, p, id, buyNow, cartType, requestHeaders }?: CartApplicationValidator.ApplyCouponParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.ApplyRewardPointsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name applyRewardPoints
     * @summary: Use reward points.
     * @description: Applies user’s reward points to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/applyRewardPoints/).
     */
    applyRewardPoints({ body, id, i, b, buyNow, requestHeaders }?: CartApplicationValidator.ApplyRewardPointsParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.CheckoutCartParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartCheckoutResponse>} - Success response
     * @name checkoutCart
     * @summary: Checkout cart.
     * @description: Initiates the checkout process for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/checkoutCart/).
     */
    checkoutCart({ body, buyNow, cartType, requestHeaders }?: CartApplicationValidator.CheckoutCartParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartCheckoutResponse>;
    /**
     * @param {CartApplicationValidator.CheckoutCartV2Param} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartCheckoutResponse>} - Success response
     * @name checkoutCartV2
     * @summary: Enhanced cart checkout process
     * @description: Initiates a more secure and detailed checkout process. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/checkoutCartV2/).
     */
    checkoutCartV2({ body, buyNow, cartType, requestHeaders }?: CartApplicationValidator.CheckoutCartV2Param, { responseHeaders }?: object): Promise<CartApplicationModel.CartCheckoutResponse>;
    /**
     * @param {CartApplicationValidator.DeleteCartParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.DeleteCartDetailResponse>} -
     *   Success response
     * @name deleteCart
     * @summary: Clears the cart
     * @description: Removes all items and resets the user's cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/deleteCart/).
     */
    deleteCart({ id, requestHeaders }?: CartApplicationValidator.DeleteCartParam, { responseHeaders }?: object): Promise<CartApplicationModel.DeleteCartDetailResponse>;
    /**
     * @param {CartApplicationValidator.GetAddressByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.Address>} - Success response
     * @name getAddressById
     * @summary: Fetch address.
     * @description: Retrieves a saved address using its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getAddressById/).
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, requestHeaders, }?: CartApplicationValidator.GetAddressByIdParam, { responseHeaders }?: object): Promise<CartApplicationModel.Address>;
    /**
     * @param {CartApplicationValidator.GetAddressesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.GetAddressesResponse>} - Success response
     * @name getAddresses
     * @summary: Get saved addresses.
     * @description: Retrieve all saved addresses for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getAddresses/).
     */
    getAddresses({ cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, requestHeaders, }?: CartApplicationValidator.GetAddressesParam, { responseHeaders }?: object): Promise<CartApplicationModel.GetAddressesResponse>;
    /**
     * @param {CartApplicationValidator.GetBulkDiscountOffersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.BulkPriceResponse>} - Success response
     * @name getBulkDiscountOffers
     * @summary: Bulk discounts.
     * @description: Lists available bulk discount offers for cart items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getBulkDiscountOffers/).
     */
    getBulkDiscountOffers({ itemId, articleId, uid, slug, requestHeaders }?: CartApplicationValidator.GetBulkDiscountOffersParam, { responseHeaders }?: object): Promise<CartApplicationModel.BulkPriceResponse>;
    /**
     * @param {CartApplicationValidator.GetCartParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name getCart
     * @summary: Retrieve cart details.
     * @description: Retrieve the current state and items in the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCart/).
     */
    getCart({ id, i, b, c, assignCardId, areaCode, buyNow, requestHeaders }?: CartApplicationValidator.GetCartParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.GetCartLastModifiedParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<any>} - Success response
     * @name getCartLastModified
     * @summary: Cart modification time.
     * @description: Gets the last modified timestamp for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartLastModified/).
     */
    getCartLastModified({ id, requestHeaders }?: CartApplicationValidator.GetCartLastModifiedParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CartApplicationValidator.GetCartShareLinkParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.GetShareCartLinkResponse>} -
     *   Success response
     * @name getCartShareLink
     * @summary: Share cart link.
     * @description: Generates a shareable link for the current cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartShareLink/).
     */
    getCartShareLink({ body, requestHeaders }?: CartApplicationValidator.GetCartShareLinkParam, { responseHeaders }?: object): Promise<CartApplicationModel.GetShareCartLinkResponse>;
    /**
     * @param {CartApplicationValidator.GetCartSharedItemsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.SharedCartResponse>} - Success response
     * @name getCartSharedItems
     * @summary: Shared cart items.
     * @description: Retrieves items from a shared cart link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartSharedItems/).
     */
    getCartSharedItems({ token, requestHeaders }?: CartApplicationValidator.GetCartSharedItemsParam, { responseHeaders }?: object): Promise<CartApplicationModel.SharedCartResponse>;
    /**
     * @param {CartApplicationValidator.GetCouponsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.GetCouponResponse>} - Success response
     * @name getCoupons
     * @summary: List available coupons.
     * @description: Retrieve coupons that can be applied to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCoupons/).
     */
    getCoupons({ id, buyNow, slug, storeId, requestHeaders }?: CartApplicationValidator.GetCouponsParam, { responseHeaders }?: object): Promise<CartApplicationModel.GetCouponResponse>;
    /**
     * @param {CartApplicationValidator.GetItemCountParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartItemCountResponse>} - Success response
     * @name getItemCount
     * @summary: Count cart items.
     * @description: Gets the total number of items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getItemCount/).
     */
    getItemCount({ id, buyNow, requestHeaders }?: CartApplicationValidator.GetItemCountParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartItemCountResponse>;
    /**
     * @param {CartApplicationValidator.GetLadderOffersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.LadderPriceOffers>} - Success response
     * @name getLadderOffers
     * @summary: Fetches ladder offers.
     * @description: Gets tiered discounts based on cart value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getLadderOffers/).
     */
    getLadderOffers({ slug, storeId, promotionId, pageSize, requestHeaders }?: CartApplicationValidator.GetLadderOffersParam, { responseHeaders }?: object): Promise<CartApplicationModel.LadderPriceOffers>;
    /**
     * @param {CartApplicationValidator.GetPromotionOffersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.PromotionOffersResponse>} - Success response
     * @name getPromotionOffers
     * @summary: Retrieves promotional offers
     * @description: Lists all available promotional offers for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getPromotionOffers/).
     */
    getPromotionOffers({ slug, pageSize, promotionGroup, storeId, cartType, requestHeaders }?: CartApplicationValidator.GetPromotionOffersParam, { responseHeaders }?: object): Promise<CartApplicationModel.PromotionOffersResponse>;
    /**
     * @param {CartApplicationValidator.GetShipmentsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartShipmentsResponse>} - Success response
     * @name getShipments
     * @summary: List shipments.
     * @description: Retrieve shipment details for items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getShipments/).
     */
    getShipments({ p, id, buyNow, addressId, areaCode, orderType, requestHeaders }?: CartApplicationValidator.GetShipmentsParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartShipmentsResponse>;
    /**
     * @param {CartApplicationValidator.RemoveAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.DeleteAddressResponse>} - Success response
     * @name removeAddress
     * @summary: Delete address.
     * @description: Removes a saved address from the user's profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/removeAddress/).
     */
    removeAddress({ id, requestHeaders }?: CartApplicationValidator.RemoveAddressParam, { responseHeaders }?: object): Promise<CartApplicationModel.DeleteAddressResponse>;
    /**
     * @param {CartApplicationValidator.RemoveCouponParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name removeCoupon
     * @summary: Remove coupon.
     * @description: Removes an applied coupon from the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/removeCoupon/).
     */
    removeCoupon({ id, buyNow, requestHeaders }?: CartApplicationValidator.RemoveCouponParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.SelectAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name selectAddress
     * @summary: Choose delivery address.
     * @description: Selects an address for the cart's delivery. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/selectAddress/).
     */
    selectAddress({ body, cartId, buyNow, i, b, requestHeaders }?: CartApplicationValidator.SelectAddressParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.SelectPaymentModeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name selectPaymentMode
     * @summary: Pick payment method.
     * @description: Chooses a payment mode for the checkout process. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/selectPaymentMode/).
     */
    selectPaymentMode({ body, id, buyNow, requestHeaders }?: CartApplicationValidator.SelectPaymentModeParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.UpdateAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.UpdateAddressResponse>} - Success response
     * @name updateAddress
     * @summary: Update address.
     * @description: Modifies a saved address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateAddress/).
     */
    updateAddress({ id, body, requestHeaders }?: CartApplicationValidator.UpdateAddressParam, { responseHeaders }?: object): Promise<CartApplicationModel.UpdateAddressResponse>;
    /**
     * @param {CartApplicationValidator.UpdateCartParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.UpdateCartDetailResponse>} -
     *   Success response
     * @name updateCart
     * @summary: Update cart.
     * @description: Modifies items and quantities in the existing cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCart/).
     */
    updateCart({ body, id, i, b, areaCode, buyNow, cartType, requestHeaders }?: CartApplicationValidator.UpdateCartParam, { responseHeaders }?: object): Promise<CartApplicationModel.UpdateCartDetailResponse>;
    /**
     * @param {CartApplicationValidator.UpdateCartMetaParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartMetaResponse>} - Success response
     * @name updateCartMeta
     * @summary: Update cart metadata.
     * @description: Adds or modifies metadata for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCartMeta/).
     */
    updateCartMeta({ body, id, buyNow, requestHeaders }?: CartApplicationValidator.UpdateCartMetaParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartMetaResponse>;
    /**
     * @param {CartApplicationValidator.UpdateCartWithSharedItemsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.SharedCartResponse>} - Success response
     * @name updateCartWithSharedItems
     * @summary: Update with shared items.
     * @description: Updates the cart with items from a shared link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCartWithSharedItems/).
     */
    updateCartWithSharedItems({ token, action, requestHeaders }?: CartApplicationValidator.UpdateCartWithSharedItemsParam, { responseHeaders }?: object): Promise<CartApplicationModel.SharedCartResponse>;
    /**
     * @param {CartApplicationValidator.ValidateCouponForPaymentParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.PaymentCouponValidate>} - Success response
     * @name validateCouponForPayment
     * @summary: Validate coupon.
     * @description: Checks if a coupon is valid for the selected payment mode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/validateCouponForPayment/).
     */
    validateCouponForPayment({ id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, iin, network, type, cardId, cartType, requestHeaders, }?: CartApplicationValidator.ValidateCouponForPaymentParam, { responseHeaders }?: object): Promise<CartApplicationModel.PaymentCouponValidate>;
}
import CartApplicationValidator = require("./CartApplicationValidator");
import CartApplicationModel = require("./CartApplicationModel");
