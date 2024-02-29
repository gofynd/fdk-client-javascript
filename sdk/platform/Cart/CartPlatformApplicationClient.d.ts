export = Cart;
declare class Cart {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {CartPlatformApplicationValidator.AddAddressParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SaveAddressResponse>} - Success response
     * @name addAddress
     * @summary: Add a new user address.
     * @description: Create and add a new user address for cart checkout. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/addAddress/).
     */
    addAddress({ body, requestHeaders }?: CartPlatformApplicationValidator.AddAddressParam, { responseHeaders }?: object): Promise<CartPlatformModel.SaveAddressResponse>;
    /**
     * @param {CartPlatformApplicationValidator.AddItemsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.AddCartDetailResponse>} - Success response
     * @name addItems
     * @summary: Add items to the cart.
     * @description: Add items to the shopping cart  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/addItems/).
     */
    addItems({ cartId, body, b, requestHeaders }?: CartPlatformApplicationValidator.AddItemsParam, { responseHeaders }?: object): Promise<CartPlatformModel.AddCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.AddPriceAdjustmentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PriceAdjustmentResponse>} - Success response
     * @name addPriceAdjustment
     * @summary: Add price adjustments.
     * @description: Apply price adjustments to items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/addPriceAdjustment/).
     */
    addPriceAdjustment({ body, requestHeaders }?: CartPlatformApplicationValidator.AddPriceAdjustmentParam, { responseHeaders }?: object): Promise<CartPlatformModel.PriceAdjustmentResponse>;
    /**
     * @param {CartPlatformApplicationValidator.ApplyCouponParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name applyCoupon
     * @summary: Apply a coupon to the cart.
     * @description: Apply a selected coupon to the items in the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/applyCoupon/).
     */
    applyCoupon({ body, i, b, p, id, buyNow, requestHeaders }?: CartPlatformApplicationValidator.ApplyCouponParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.CheckCartServiceabilityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.OpenApiCartServiceabilityResponse>}
     *   - Success response
     *
     * @name checkCartServiceability
     * @summary: Check cart serviceability.
     * @description: Verify if the items in the cart are serviceable. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/checkCartServiceability/).
     */
    checkCartServiceability({ body, requestHeaders }?: CartPlatformApplicationValidator.CheckCartServiceabilityParam, { responseHeaders }?: object): Promise<CartPlatformModel.OpenApiCartServiceabilityResponse>;
    /**
     * @param {CartPlatformApplicationValidator.CheckoutCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.OpenApiCheckoutResponse>} - Success response
     * @name checkoutCart
     * @summary: Proceed to cart checkout.
     * @description: Initiate the checkout process for the items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/checkoutCart/).
     */
    checkoutCart({ body, requestHeaders }?: CartPlatformApplicationValidator.CheckoutCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.OpenApiCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.CreateCartMetaConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartMetaConfigAdd>} - Success response
     * @name createCartMetaConfig
     * @summary: Create new cart meta configuration
     * @description: Create new cart meta configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/createCartMetaConfig/).
     */
    createCartMetaConfig({ body, requestHeaders }?: CartPlatformApplicationValidator.CreateCartMetaConfigParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartMetaConfigAdd>;
    /**
     * @param {CartPlatformApplicationValidator.CreateCouponParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name createCoupon
     * @summary: Create a new coupon.
     * @description: Generate and add a new coupon to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/createCoupon/).
     */
    createCoupon({ body, requestHeaders }?: CartPlatformApplicationValidator.CreateCouponParam, { responseHeaders }?: object): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.CreatePromotionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PromotionAdd>} - Success response
     * @name createPromotion
     * @summary: Create a new promotion.
     * @description: Generate and add a new promotion to the cart system  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/createPromotion/).
     */
    createPromotion({ body, requestHeaders }?: CartPlatformApplicationValidator.CreatePromotionParam, { responseHeaders }?: object): Promise<CartPlatformModel.PromotionAdd>;
    /**
     * @param {CartPlatformApplicationValidator.DeleteCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.DeleteCartDetailResponse>} - Success response
     * @name deleteCart
     * @summary: Delete a cart.
     * @description: Delete a specific shopping cart from the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/deleteCart/).
     */
    deleteCart({ body, id, requestHeaders }?: CartPlatformApplicationValidator.DeleteCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.DeleteCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.FetchAndvalidateCartItemsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.OpenapiCartDetailsResponse>} - Success response
     * @name fetchAndvalidateCartItems
     * @summary: Fetch and validate cart items.
     * @description: Retrieve and validate items currently in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/fetchAndvalidateCartItems/).
     */
    fetchAndvalidateCartItems({ body, requestHeaders }?: CartPlatformApplicationValidator.FetchAndvalidateCartItemsParam, { responseHeaders }?: object): Promise<CartPlatformModel.OpenapiCartDetailsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.FetchCartMetaConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartMetaConfigAdd>} - Success response
     * @name fetchCartMetaConfig
     * @summary: Fetch cart meta configuration
     * @description: Fetch cart meta configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/fetchCartMetaConfig/).
     */
    fetchCartMetaConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CartPlatformModel.CartMetaConfigAdd>;
    /**
     * @param {CartPlatformApplicationValidator.GetAbandonedCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.AbandonedCartResponse>} - Success response
     * @name getAbandonedCart
     * @summary: Retrieve abandoned carts.
     * @description: Retrieve abandoned carts for analysis and potential recovery. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAbandonedCart/).
     */
    getAbandonedCart({ pageNo, pageSize, fromDate, toDate, anonymousCart, lastId, sortOn, requestHeaders, }?: CartPlatformApplicationValidator.GetAbandonedCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.AbandonedCartResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetAbandonedCartDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name getAbandonedCartDetails
     * @summary: Get abandoned cart details.
     * @description: Retrieve detailed information about a specific abandoned cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAbandonedCartDetails/).
     */
    getAbandonedCartDetails({ id, i, b, c, requestHeaders }?: CartPlatformApplicationValidator.GetAbandonedCartDetailsParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetAddressByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PlatformAddress>} - Success response
     * @name getAddressById
     * @summary: Fetch a single address by its ID
     * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `PlatformAddress`. Attibutes listed below are optional mobile_no checkout_mode tags default - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAddressById/).
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, requestHeaders, }?: CartPlatformApplicationValidator.GetAddressByIdParam, { responseHeaders }?: object): Promise<CartPlatformModel.PlatformAddress>;
    /**
     * @param {CartPlatformApplicationValidator.GetAddressesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PlatformGetAddressesResponse>} -
     *   Success response
     * @name getAddresses
     * @summary: Fetch address
     * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional uid address_id  mobile_no checkout_mode tags default - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAddresses/).
     */
    getAddresses({ cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, requestHeaders, }?: CartPlatformApplicationValidator.GetAddressesParam, { responseHeaders }?: object): Promise<CartPlatformModel.PlatformGetAddressesResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetAppCouponsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.GetCouponResponse>} - Success response
     * @name getAppCoupons
     * @summary: Get app-specific coupons.
     * @description: Retrieve coupons specific to the mobile app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAppCoupons/).
     */
    getAppCoupons({ id, buyNow, slug, storeId, requestHeaders }?: CartPlatformApplicationValidator.GetAppCouponsParam, { responseHeaders }?: object): Promise<CartPlatformModel.GetCouponResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetAvailableDeliveryModesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDeliveryModesResponse>} - Success response
     * @name getAvailableDeliveryModes
     * @summary: Get available delivery modes.
     * @description: Retrieve a list of available delivery modes for cart checkout. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAvailableDeliveryModes/).
     */
    getAvailableDeliveryModes({ areaCode, id, requestHeaders }?: CartPlatformApplicationValidator.GetAvailableDeliveryModesParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDeliveryModesResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name getCart
     * @summary: Get cart details.
     * @description: Retrieve detailed information about a shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCart/).
     */
    getCart({ id, userId, i, b, assignCardId, buyNow, requestHeaders }?: CartPlatformApplicationValidator.GetCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartListParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.MultiCartResponse>} - Success response
     * @name getCartList
     * @summary: Retrieve a list of carts.
     * @description: Retrieve a list of saved shopping carts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartList/).
     */
    getCartList({ fromDate, toDate, filterOn, requestHeaders }?: CartPlatformApplicationValidator.GetCartListParam, { responseHeaders }?: object): Promise<CartPlatformModel.MultiCartResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartShareLinkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.GetShareCartLinkResponse>} - Success response
     * @name getCartShareLink
     * @summary: Generate token for sharing the cart
     * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartShareLink/).
     */
    getCartShareLink({ body, requestHeaders }?: CartPlatformApplicationValidator.GetCartShareLinkParam, { responseHeaders }?: object): Promise<CartPlatformModel.GetShareCartLinkResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartSharedItemsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SharedCartResponse>} - Success response
     * @name getCartSharedItems
     * @summary: Get items shared via a cart link.
     * @description: Retrieve the items shared with you via a cart link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartSharedItems/).
     */
    getCartSharedItems({ token, requestHeaders }?: CartPlatformApplicationValidator.GetCartSharedItemsParam, { responseHeaders }?: object): Promise<CartPlatformModel.SharedCartResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CouponUpdate>} - Success response
     * @name getCouponById
     * @summary: Get coupon details by ID.
     * @description: Retrieve detailed information about a specific coupon using its unique ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponById/).
     */
    getCouponById({ id, requestHeaders }?: CartPlatformApplicationValidator.GetCouponByIdParam, { responseHeaders }?: object): Promise<CartPlatformModel.CouponUpdate>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponCodeExistsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getCouponCodeExists
     * @summary: Check if a coupon code exists.
     * @description: Verify the existence of a specific coupon code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponCodeExists/).
     */
    getCouponCodeExists({ code, requestHeaders }?: CartPlatformApplicationValidator.GetCouponCodeExistsParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponOptionValuesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getCouponOptionValues
     * @summary: Get coupon option values.
     * @description: Retrieve available values for coupon options. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponOptionValues/).
     */
    getCouponOptionValues({ requestHeaders }?: any, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CouponsResponse>} - Success response
     * @name getCoupons
     * @summary: Retrieve available coupons.
     * @description: Retrieve a list of available coupons for use in the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCoupons/).
     */
    getCoupons({ pageNo, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, requestHeaders, }?: CartPlatformApplicationValidator.GetCouponsParam, { responseHeaders }?: object): Promise<CartPlatformModel.CouponsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetItemCountParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartItemCountResponse>} - Success response
     * @name getItemCount
     * @summary: Get the item count in a cart.
     * @description: Retrieve the total number of items in a shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getItemCount/).
     */
    getItemCount({ id, buyNow, requestHeaders }?: CartPlatformApplicationValidator.GetItemCountParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartItemCountResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromosCouponConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.ActivePromosResponse>} - Success response
     * @name getPromosCouponConfig
     * @summary: Get promotion and coupon configuration.
     * @description: Retrieve configuration settings for promotions and coupons. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromosCouponConfig/).
     */
    getPromosCouponConfig({ entityType, isHidden, requestHeaders }?: CartPlatformApplicationValidator.GetPromosCouponConfigParam, { responseHeaders }?: object): Promise<CartPlatformModel.ActivePromosResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromotionByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PromotionUpdate>} - Success response
     * @name getPromotionById
     * @summary: Get promotion details by ID.
     * @description: Retrieve detailed information about a specific promotion using its unique ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotionById/).
     */
    getPromotionById({ id, requestHeaders }?: CartPlatformApplicationValidator.GetPromotionByIdParam, { responseHeaders }?: object): Promise<CartPlatformModel.PromotionUpdate>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromotionCodeExistsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getPromotionCodeExists
     * @summary: Check if a promotion code exists.
     * @description: Verify the existence of a specific promotion code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotionCodeExists/).
     */
    getPromotionCodeExists({ code, requestHeaders }?: CartPlatformApplicationValidator.GetPromotionCodeExistsParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromotionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PromotionsResponse>} - Success response
     * @name getPromotions
     * @summary: Retrieve available promotions.
     * @description: Retrieve a list of available promotions to apply to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotions/).
     */
    getPromotions({ pageNo, pageSize, q, isActive, promoGroup, promotionType, fpPanel, promotionId, requestHeaders, }?: CartPlatformApplicationValidator.GetPromotionsParam, { responseHeaders }?: object): Promise<CartPlatformModel.PromotionsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetShipmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PlatformCartShipmentsResponse>} -
     *   Success response
     * @name getShipments
     * @summary: Get delivery date and options before checkout
     * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getShipments/).
     */
    getShipments({ pickAtStoreUid, orderingStoreId, i, p, id, addressId, areaCode, orderType, requestHeaders, }?: CartPlatformApplicationValidator.GetShipmentsParam, { responseHeaders }?: object): Promise<CartPlatformModel.PlatformCartShipmentsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetStoreAddressByUidParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.StoreDetailsResponse>} - Success response
     * @name getStoreAddressByUid
     * @summary: Get store address by UID.
     * @description: Retrieve the store address using a unique identifier (UID). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getStoreAddressByUid/).
     */
    getStoreAddressByUid({ storeUid, requestHeaders }?: CartPlatformApplicationValidator.GetStoreAddressByUidParam, { responseHeaders }?: object): Promise<CartPlatformModel.StoreDetailsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.OverrideCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.OverrideCheckoutResponse>} - Success response
     * @name overrideCart
     * @summary: Override the cart.
     * @description: Override the current cart with a new configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/overrideCart/).
     */
    overrideCart({ body, requestHeaders }?: CartPlatformApplicationValidator.OverrideCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.OverrideCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformAddItemsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.AddCartDetailResponse>} - Success response
     * @name platformAddItems
     * @summary: Add items via platform integration.
     * @description: Add items to the cart through platform integration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformAddItems/).
     */
    platformAddItems({ body, i, b, buyNow, id, requestHeaders }?: CartPlatformApplicationValidator.PlatformAddItemsParam, { responseHeaders }?: object): Promise<CartPlatformModel.AddCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformCheckoutCartParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartCheckoutResponse>} - Success response
     * @name platformCheckoutCart
     * @summary: Platform-specific cart checkout.
     * @description: Initiate cart checkout through platform-specific integration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformCheckoutCart/).
     */
    platformCheckoutCart({ body, id, requestHeaders }?: CartPlatformApplicationValidator.PlatformCheckoutCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformCheckoutCartV2Param} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartCheckoutResponse>} - Success response
     * @name platformCheckoutCartV2
     * @summary: Platform-specific cart checkout v2.
     * @description: Initiate cart checkout through an updated platform-specific integration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformCheckoutCartV2/).
     */
    platformCheckoutCartV2({ body, id, requestHeaders }?: CartPlatformApplicationValidator.PlatformCheckoutCartV2Param, { responseHeaders }?: object): Promise<CartPlatformModel.CartCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformUpdateCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.UpdateCartDetailResponse>} - Success response
     * @name platformUpdateCart
     * @summary: Update items in the customer 's cart using cart id
     * @description: Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs operation Operation for current api call. update_item for update items. remove_item for removing items.item_id "/platform/content/v1/products/" item_size "/platform/content/v1/products/:slug/sizes/" quantity  item quantity (must be greater than or equal to 1) article_id "/content​/v1​/products​/:identifier​/sizes​/price​/" item_index item position in the cart (must be greater than or equal to 0) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformUpdateCart/).
     */
    platformUpdateCart({ body, id, i, b, buyNow, requestHeaders }?: CartPlatformApplicationValidator.PlatformUpdateCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.UpdateCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.RemoveAddressParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.DeleteAddressResponse>} - Success response
     * @name removeAddress
     * @summary: Remove a user address.
     * @description: Delete an existing user address from the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/removeAddress/).
     */
    removeAddress({ id, userId, requestHeaders }?: CartPlatformApplicationValidator.RemoveAddressParam, { responseHeaders }?: object): Promise<CartPlatformModel.DeleteAddressResponse>;
    /**
     * @param {CartPlatformApplicationValidator.RemoveCouponParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name removeCoupon
     * @summary: Remove a coupon from the cart.
     * @description: Remove a coupon from the items in the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/removeCoupon/).
     */
    removeCoupon({ uid, buyNow, requestHeaders }?: CartPlatformApplicationValidator.RemoveCouponParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.RemovePriceAdjustmentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name removePriceAdjustment
     * @summary: Remove price adjustments.
     * @description: Remove price adjustments applied to items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/removePriceAdjustment/).
     */
    removePriceAdjustment({ id, requestHeaders }?: CartPlatformApplicationValidator.RemovePriceAdjustmentParam, { responseHeaders }?: object): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.SelectAddressParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name selectAddress
     * @summary: Select an address from available addresses
     * @description: Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `PlatformSelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. address_id billing_address_id uid - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/selectAddress/).
     */
    selectAddress({ body, cartId, buyNow, i, b, requestHeaders }?: CartPlatformApplicationValidator.SelectAddressParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.SelectPaymentModeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name selectPaymentMode
     * @summary: Select a payment mode.
     * @description: Choose a payment mode for cart checkout. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/selectPaymentMode/).
     */
    selectPaymentMode({ body, id, buyNow, orderType, requestHeaders }?: CartPlatformApplicationValidator.SelectPaymentModeParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.SelectPaymentModeV2Param} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name selectPaymentModeV2
     * @summary: Select a payment mode v2.
     * @description: Choose a payment mode for cart checkout in the updated platform integration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/selectPaymentModeV2/).
     */
    selectPaymentModeV2({ body, id, buyNow, orderType, requestHeaders }?: CartPlatformApplicationValidator.SelectPaymentModeV2Param, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateAddressParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.UpdateAddressResponse>} - Success response
     * @name updateAddress
     * @summary: Update address.
     * @description: Modify the shipping address for an order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateAddress/).
     */
    updateAddress({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdateAddressParam, { responseHeaders }?: object): Promise<CartPlatformModel.UpdateAddressResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.UpdateCartDetailResponse>} - Success response
     * @name updateCart
     * @summary: Update cart items.
     * @description: Modify items and their quantities in the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCart/).
     */
    updateCart({ cartId, body, b, requestHeaders }?: CartPlatformApplicationValidator.UpdateCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.UpdateCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartMetaParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartMetaResponse>} - Success response
     * @name updateCartMeta
     * @summary: Update cart metadata.
     * @description: Modify the metadata associated with the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartMeta/).
     */
    updateCartMeta({ body, id, buyNow, requestHeaders }?: CartPlatformApplicationValidator.UpdateCartMetaParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartMetaResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartMetaConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartMetaConfigUpdate>} - Success response
     * @name updateCartMetaConfig
     * @summary: Update cart metadata configuration.
     * @description: Modify the configuration settings for cart metadata. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartMetaConfig/).
     */
    updateCartMetaConfig({ cartMetaId, body, requestHeaders }?: CartPlatformApplicationValidator.UpdateCartMetaConfigParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartMetaConfigUpdate>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartUserParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.UserCartMappingResponse>} - Success response
     * @name updateCartUser
     * @summary: Update cart user details.
     * @description: Modify user-related details for a shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartUser/).
     */
    updateCartUser({ body, id, requestHeaders }?: CartPlatformApplicationValidator.UpdateCartUserParam, { responseHeaders }?: object): Promise<CartPlatformModel.UserCartMappingResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartWithSharedItemsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SharedCartResponse>} - Success response
     * @name updateCartWithSharedItems
     * @summary: Update cart with shared items.
     * @description: Modify your cart by adding shared items from a cart link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartWithSharedItems/).
     */
    updateCartWithSharedItems({ token, action, cartId, requestHeaders }?: CartPlatformApplicationValidator.UpdateCartWithSharedItemsParam, { responseHeaders }?: object): Promise<CartPlatformModel.SharedCartResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCouponParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name updateCoupon
     * @summary: Update a coupon.
     * @description: Modify the details and settings of an existing coupon in the cart system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCoupon/).
     */
    updateCoupon({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdateCouponParam, { responseHeaders }?: object): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCouponPartiallyParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name updateCouponPartially
     * @summary: Partially update a coupon.
     * @description: Make partial modifications to the settings of an existing coupon in the cart system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCouponPartially/).
     */
    updateCouponPartially({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdateCouponPartiallyParam, { responseHeaders }?: object): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.UpdatePriceAdjustmentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PriceAdjustmentResponse>} - Success response
     * @name updatePriceAdjustment
     * @summary: Update price adjustments.
     * @description: Modify price adjustments for items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updatePriceAdjustment/).
     */
    updatePriceAdjustment({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdatePriceAdjustmentParam, { responseHeaders }?: object): Promise<CartPlatformModel.PriceAdjustmentResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdatePromotionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PromotionUpdate>} - Success response
     * @name updatePromotion
     * @summary: Update a promotion.
     * @description: Modify the details and settings of an existing promotion in the cart system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updatePromotion/).
     */
    updatePromotion({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdatePromotionParam, { responseHeaders }?: object): Promise<CartPlatformModel.PromotionUpdate>;
    /**
     * @param {CartPlatformApplicationValidator.UpdatePromotionPartiallyParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name updatePromotionPartially
     * @summary: Partially update a promotion.
     * @description: Make partial modifications to the settings of an existing promotion in the cart system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updatePromotionPartially/).
     */
    updatePromotionPartially({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdatePromotionPartiallyParam, { responseHeaders }?: object): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateShipmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PlatformCartShipmentsResponse>} -
     *   Success response
     * @name updateShipments
     * @summary: Update shipment details.
     * @description: Modify the details and settings of cart shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateShipments/).
     */
    updateShipments({ body, i, p, id, addressId, areaCode, orderType, requestHeaders }?: CartPlatformApplicationValidator.UpdateShipmentsParam, { responseHeaders }?: object): Promise<CartPlatformModel.PlatformCartShipmentsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.ValidateCouponForPaymentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PaymentCouponValidate>} - Success response
     * @name validateCouponForPayment
     * @summary: Validate a coupon for payment.
     * @description: Verify the validity of a coupon code for the payment process. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/validateCouponForPayment/).
     */
    validateCouponForPayment({ id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, requestHeaders, }?: CartPlatformApplicationValidator.ValidateCouponForPaymentParam, { responseHeaders }?: object): Promise<CartPlatformModel.PaymentCouponValidate>;
}
import CartPlatformApplicationValidator = require("./CartPlatformApplicationValidator");
import CartPlatformModel = require("./CartPlatformModel");
