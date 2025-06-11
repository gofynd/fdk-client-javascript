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
     * @summary: Add address to an account
     * @description: Use this API to add an address to an account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/addAddress/).
     */
    addAddress({ body, requestHeaders }?: CartPlatformApplicationValidator.AddAddressParam, { responseHeaders }?: object): Promise<CartPlatformModel.SaveAddressResponse>;
    /**
     * @param {CartPlatformApplicationValidator.AddItemsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.AddCartDetailResponse>} - Success response
     * @name addItems
     * @summary: Add items to abandoned cart
     * @description: Add product items to the customer's existing shopping cart. If there is no existing cart associated with the customer, it creates a new one and adds the items to it. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/addItems/).
     */
    addItems({ cartId, body, b, requestHeaders }?: CartPlatformApplicationValidator.AddItemsParam, { responseHeaders }?: object): Promise<CartPlatformModel.AddCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.AddPriceAdjustmentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.AddPriceAdjustmentResponse>} - Success response
     * @name addPriceAdjustment
     * @summary: Create new price adjustment
     * @description: Create new price adjustment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/addPriceAdjustment/).
     */
    addPriceAdjustment({ body, requestHeaders }?: CartPlatformApplicationValidator.AddPriceAdjustmentParam, { responseHeaders }?: object): Promise<CartPlatformModel.AddPriceAdjustmentResponse>;
    /**
     * @param {CartPlatformApplicationValidator.ApplyCouponParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name applyCoupon
     * @summary: Apply a coupon to the cart.
     * @description: Apply a coupon code to the customer's cart to trigger discounts on eligible items - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/applyCoupon/).
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
     * @summary: Check cart serviceability
     * @description: Verify the serviceability of items in the cart at a specific pin code and ensure accurate delivery promises. System checks each item's availability and delivery feasibility, providing real-time information on serviceability and estimated delivery times. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/checkCartServiceability/).
     */
    checkCartServiceability({ body, requestHeaders }?: CartPlatformApplicationValidator.CheckCartServiceabilityParam, { responseHeaders }?: object): Promise<CartPlatformModel.OpenApiCartServiceabilityResponse>;
    /**
     * @param {CartPlatformApplicationValidator.CheckoutCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.OpenApiCheckoutResponse>} - Success response
     * @name checkoutCart
     * @summary: Checkout cart
     * @description: The checkout cart initiates the order creation process based on the selected address and payment method. It revalidates the cart details to ensure safe and seamless order placement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/checkoutCart/).
     */
    checkoutCart({ body, requestHeaders }?: CartPlatformApplicationValidator.CheckoutCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.OpenApiCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.CreateCartMetaConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartMetaConfigAddResponse>} - Success response
     * @name createCartMetaConfig
     * @summary: Create new cart meta configuration
     * @description: Create custom meta configurations for carts associated with a specific sales channel. By specifying the company ID and application ID, seller can define unique cart settings, including preferences, rules, and constraints, tailored to their business needs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/createCartMetaConfig/).
     */
    createCartMetaConfig({ body, requestHeaders }?: CartPlatformApplicationValidator.CreateCartMetaConfigParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartMetaConfigAddResponse>;
    /**
     * @param {CartPlatformApplicationValidator.CreateCouponParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CouponDetailResponse>} - Success response
     * @name createCoupon
     * @summary: Create a new coupon.
     * @description: Generate and add a new coupon to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/createCoupon/).
     */
    createCoupon({ body, requestHeaders }?: CartPlatformApplicationValidator.CreateCouponParam, { responseHeaders }?: object): Promise<CartPlatformModel.CouponDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.CreatePromotionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PromotionAddResult>} - Success response
     * @name createPromotion
     * @summary: Create a promotion
     * @description: Creates a new promotion based on the selected promotion type. Sellers can choose from multiple supported promotion types, including percentage value, fixed amount value, bundled discount, buy X get Y items, and more, along with customizable promotion criteria to meet specific business requirements. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/createPromotion/).
     */
    createPromotion({ body, requestHeaders }?: CartPlatformApplicationValidator.CreatePromotionParam, { responseHeaders }?: object): Promise<CartPlatformModel.PromotionAddResult>;
    /**
     * @param {CartPlatformApplicationValidator.DeleteCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.DeleteCartDetailResponse>} - Success response
     * @name deleteCart
     * @summary: Delete a cart
     * @description: Delete all items from the user's cart and resets it to its initial state, providing a clean slate for new selections. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/deleteCart/).
     */
    deleteCart({ body, id, cartType, requestHeaders }?: CartPlatformApplicationValidator.DeleteCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.DeleteCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.DeleteCartMetaConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name deleteCartMetaConfig
     * @summary: Delete cart meta configuration
     * @description: Delete cart meta configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/deleteCartMetaConfig/).
     */
    deleteCartMetaConfig({ cartMetaId, requestHeaders }?: CartPlatformApplicationValidator.DeleteCartMetaConfigParam, { responseHeaders }?: object): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.FetchAndvalidateCartItemsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.OpenapiCartDetailsResponse>} - Success response
     * @name fetchAndvalidateCartItems
     * @summary: Get and validate cart items
     * @description: Retrieve cart details for a provided list of cart items and validate its contents. This ensures accuracy and completeness in cart information, including item quantities, prices, discounts, and applicable taxes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/fetchAndvalidateCartItems/).
     */
    fetchAndvalidateCartItems({ body, requestHeaders }?: CartPlatformApplicationValidator.FetchAndvalidateCartItemsParam, { responseHeaders }?: object): Promise<CartPlatformModel.OpenapiCartDetailsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetAbandonedCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.AbandonedCartResponse>} - Success response
     * @name getAbandonedCart
     * @summary: Get abandoned carts
     * @description: Retrieve the list of abandoned carts that have been active for the specified period of time and have not yet been archived for the specific sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAbandonedCart/).
     */
    getAbandonedCart({ pageNo, pageSize, fromDate, toDate, anonymousCart, lastId, sortOn, requestHeaders, }?: CartPlatformApplicationValidator.GetAbandonedCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.AbandonedCartResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {boolean} [arg.anonymousCart] -
     * @param {string} [arg.lastId] -
     * @param {string} [arg.sortOn] -
     * @returns {Paginator<CartPlatformModel.AbandonedCartResponse>}
     * @summary: Get abandoned carts
     * @description: Retrieve the list of abandoned carts that have been active for the specified period of time and have not yet been archived for the specific sales channel.
     */
    getAbandonedCartPaginator({ companyId, applicationId, pageSize, fromDate, toDate, anonymousCart, lastId, sortOn, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
        anonymousCart?: boolean;
        lastId?: string;
        sortOn?: string;
    }): Paginator<CartPlatformModel.AbandonedCartResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetAbandonedCartDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name getAbandonedCartDetails
     * @summary: Get abandoned cart details
     * @description: Retrieves abandoned cart details linked to a specific customer using a unique cart ID. It offers an overview of the items, quantities, prices, and other relevant information associated with the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAbandonedCartDetails/).
     */
    getAbandonedCartDetails({ id, i, b, c, requestHeaders }?: CartPlatformApplicationValidator.GetAbandonedCartDetailsParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetAddressByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PlatformAddress>} - Success response
     * @name getAddressById
     * @summary: Get details for a single customer address
     * @description: Retrieve a specific customer address stored in the system by providing its unique identifier. This API provides detailed information about the address, including the recipient's name, address, city, postal code, and other relevant details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAddressById/).
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, requestHeaders, }?: CartPlatformApplicationValidator.GetAddressByIdParam, { responseHeaders }?: object): Promise<CartPlatformModel.PlatformAddress>;
    /**
     * @param {CartPlatformApplicationValidator.GetAddressesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PlatformGetAddressesResponse>} -
     *   Success response
     * @name getAddresses
     * @summary: Get a list of addresses for a customer
     * @description: Retrieves a list of all addresses saved by the customer, simplifying the checkout process by offering pre-saved address options for delivery. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAddresses/).
     */
    getAddresses({ cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, requestHeaders, }?: CartPlatformApplicationValidator.GetAddressesParam, { responseHeaders }?: object): Promise<CartPlatformModel.PlatformGetAddressesResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetAppCouponsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.GetCouponResponse>} - Success response
     * @name getAppCoupons
     * @summary: List coupons
     * @description: Retrieve a list of all available coupons that customer can apply to their carts. It provides details about each coupon, including its code, discount amount, and applicable conditions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAppCoupons/).
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
     * @summary: Get delivery modes
     * @description: Retrieve a list of delivery modes (home delivery/store pickup) along with a list of available pickup stores for a given cart at a specified PIN Code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAvailableDeliveryModes/).
     */
    getAvailableDeliveryModes({ areaCode, id, requestHeaders }?: CartPlatformApplicationValidator.GetAvailableDeliveryModesParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDeliveryModesResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name getCart
     * @summary: Fetch all items added to the customer cart using cart id
     * @description: Use this API to get details of all the items added to a cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCart/).
     */
    getCart({ id, userId, i, b, assignCardId, buyNow, cartType, requestHeaders }?: CartPlatformApplicationValidator.GetCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartListParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.MultiCartResponse>} - Success response
     * @name getCartList
     * @summary: Get cart list for store os user
     * @description: Retrieve the list of active carts associated with a specific customer - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartList/).
     */
    getCartList({ fromDate, toDate, filterOn, requestHeaders }?: CartPlatformApplicationValidator.GetCartListParam, { responseHeaders }?: object): Promise<CartPlatformModel.MultiCartResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartMetaConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartMetaConfigDetailResponse>} -
     *   Success response
     * @name getCartMetaConfig
     * @summary: Get cart meta configuration by id
     * @description: Get cart meta configuration by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartMetaConfig/).
     */
    getCartMetaConfig({ cartMetaId, requestHeaders }?: CartPlatformApplicationValidator.GetCartMetaConfigParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartMetaConfigDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartMetaConfigsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartMetaConfigListResponse>} - Success response
     * @name getCartMetaConfigs
     * @summary: Fetch cart meta configuration
     * @description: Fetch cart meta configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartMetaConfigs/).
     */
    getCartMetaConfigs({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CartPlatformModel.CartMetaConfigListResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartShareLinkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.GetShareCartLinkResponse>} - Success response
     * @name getCartShareLink
     * @summary: Share cart link
     * @description: Generate a unique shareable link for the customer's cart for a specific sales channel. This link enables easy sharing of the cart contents with other users, facilitating collaborative shopping experiences. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartShareLink/).
     */
    getCartShareLink({ body, requestHeaders }?: CartPlatformApplicationValidator.GetCartShareLinkParam, { responseHeaders }?: object): Promise<CartPlatformModel.GetShareCartLinkResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartSharedItemsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SharedCartResponse>} - Success response
     * @name getCartSharedItems
     * @summary: Get details of a shared cart
     * @description: Use this API to get the shared cart details as per the token generated using the share-cart API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartSharedItems/).
     */
    getCartSharedItems({ token, requestHeaders }?: CartPlatformApplicationValidator.GetCartSharedItemsParam, { responseHeaders }?: object): Promise<CartPlatformModel.SharedCartResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CouponUpdate>} - Success response
     * @name getCouponById
     * @summary: Get coupon details by ID
     * @description: Retrieve details of a specific coupon by providing its unique identifier to obtain information such as coupon type, rules, validity period and other related information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponById/).
     */
    getCouponById({ id, requestHeaders }?: CartPlatformApplicationValidator.GetCouponByIdParam, { responseHeaders }?: object): Promise<CartPlatformModel.CouponUpdate>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponCodeExistsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getCouponCodeExists
     * @summary: Check if coupon is already created with coupon code
     * @description: Validates the presence of a coupon code for the specified sales channel to verify whether the provided code already exists or not. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponCodeExists/).
     */
    getCouponCodeExists({ code, requestHeaders }?: CartPlatformApplicationValidator.GetCouponCodeExistsParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponOptionValuesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CouponOptions>} - Success response
     * @name getCouponOptionValues
     * @summary: Get coupon option values
     * @description: Retrieves the available values for coupon options used to create and update coupons. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponOptionValues/).
     */
    getCouponOptionValues({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CartPlatformModel.CouponOptions>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponTagsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.TagsViewResponse>} - Success response
     * @name getCouponTags
     * @summary: Get a list of all coupon tags associated with a application.
     * @description: This API helps to get coupon tags data associated to a particular application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponTags/).
     */
    getCouponTags({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CartPlatformModel.TagsViewResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CouponsResponse>} - Success response
     * @name getCoupons
     * @summary: Retrieve available coupons.
     * @description: Retrieve a list of all created coupons for specific sales channel. It also supports searching based on text search, pagination and other flags to filter coupons. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCoupons/).
     */
    getCoupons({ pageNo, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, requestHeaders, }?: CartPlatformApplicationValidator.GetCouponsParam, { responseHeaders }?: object): Promise<CartPlatformModel.CouponsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isArchived] -
     * @param {string} [arg.title] -
     * @param {boolean} [arg.isPublic] -
     * @param {boolean} [arg.isDisplay] -
     * @param {string} [arg.typeSlug] -
     * @param {string} [arg.code] -
     * @returns {Paginator<CartPlatformModel.CouponsResponse>}
     * @summary: Retrieve available coupons.
     * @description: Retrieve a list of all created coupons for specific sales channel. It also supports searching based on text search, pagination and other flags to filter coupons.
     */
    getCouponsPaginator({ companyId, applicationId, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): Paginator<CartPlatformModel.CouponsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetItemCountParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartItemCountResponse>} - Success response
     * @name getItemCount
     * @summary: Count items in the customer's cart
     * @description: Use this API to get the total number of items present in cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getItemCount/).
     */
    getItemCount({ id, buyNow, cartType, requestHeaders }?: CartPlatformApplicationValidator.GetItemCountParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartItemCountResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetPriceAdjustmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PriceAdjustmentResponse>} - Success response
     * @name getPriceAdjustments
     * @summary: Get a list of all price adjustments associated with a cart
     * @description: This API helps to get price adjustments data associated to a particular cart - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPriceAdjustments/).
     */
    getPriceAdjustments({ cartId, requestHeaders }?: CartPlatformApplicationValidator.GetPriceAdjustmentsParam, { responseHeaders }?: object): Promise<CartPlatformModel.PriceAdjustmentResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromosCouponConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.ActivePromosResponse>} - Success response
     * @name getPromosCouponConfig
     * @summary: Get promotion and coupon type
     * @description: Retrieve the configuration settings related to promotions and coupons for a specific seller. It provides details of the supported types of coupons and promotions along with their descriptions, examples, and related attributes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromosCouponConfig/).
     */
    getPromosCouponConfig({ entityType, isHidden, requestHeaders }?: CartPlatformApplicationValidator.GetPromosCouponConfigParam, { responseHeaders }?: object): Promise<CartPlatformModel.ActivePromosResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromotionByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PromotionUpdateResult>} - Success response
     * @name getPromotionById
     * @summary: Get a promotion
     * @description: Retrieve details of a specific promotion by providing its unique identifier to obtain information such as promotion type, rules, validity period and other related information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotionById/).
     */
    getPromotionById({ id, requestHeaders }?: CartPlatformApplicationValidator.GetPromotionByIdParam, { responseHeaders }?: object): Promise<CartPlatformModel.PromotionUpdateResult>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromotionCodeExistsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getPromotionCodeExists
     * @summary: Check if promotion is already created with promotion code
     * @description: Validates the presence of a promotion code for the specified sales channel to verify whether the provided code already exists or not. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotionCodeExists/).
     */
    getPromotionCodeExists({ code, requestHeaders }?: CartPlatformApplicationValidator.GetPromotionCodeExistsParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromotionTagsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.TagsViewResponse>} - Success response
     * @name getPromotionTags
     * @summary: Get a list of all Promotion tags associated with a application.
     * @description: This API helps to get Promotion tags data associated to a particular application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotionTags/).
     */
    getPromotionTags({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CartPlatformModel.TagsViewResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromotionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PromotionsResponse>} - Success response
     * @name getPromotions
     * @summary: List promotions
     * @description: Retrieve a list of all created promotions for specific sales channel. It also supports efficient text search and pagination functionalities, ensuring optimized promotion listing for streamlined navigation and management. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotions/).
     */
    getPromotions({ pageNo, pageSize, q, isActive, promoGroup, promotionType, fpPanel, promotionId, requestHeaders, }?: CartPlatformApplicationValidator.GetPromotionsParam, { responseHeaders }?: object): Promise<CartPlatformModel.PromotionsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] -
     * @param {boolean} [arg.isActive] -
     * @param {string} [arg.promoGroup] -
     * @param {string} [arg.promotionType] -
     * @param {string} [arg.fpPanel] -
     * @param {string} [arg.promotionId] -
     * @returns {Paginator<CartPlatformModel.PromotionsResponse>}
     * @summary: List promotions
     * @description: Retrieve a list of all created promotions for specific sales channel. It also supports efficient text search and pagination functionalities, ensuring optimized promotion listing for streamlined navigation and management.
     */
    getPromotionsPaginator({ companyId, applicationId, pageSize, q, isActive, promoGroup, promotionType, fpPanel, promotionId, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
        isActive?: boolean;
        promoGroup?: string;
        promotionType?: string;
        fpPanel?: string;
        promotionId?: string;
    }): Paginator<CartPlatformModel.PromotionsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetShipmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PlatformCartShipmentsResponse>} -
     *   Success response
     * @name getShipments
     * @summary: Get shipments details
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
     * @summary: Get Store Address
     * @description: Retrieve store details by entering the unique identifier of the pickup stores. Store details include the seller's name, contact information such as email address or phone number and business address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getStoreAddressByUid/).
     */
    getStoreAddressByUid({ storeUid, requestHeaders }?: CartPlatformApplicationValidator.GetStoreAddressByUidParam, { responseHeaders }?: object): Promise<CartPlatformModel.StoreDetailsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.OverrideCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.OverrideCheckoutResponse>} - Success response
     * @name overrideCart
     * @summary: Create Fynd order with overriding cart details
     * @description: Overrides the cart's checkout process with a new provided cart items. It provides flexibility in customizing checkout flows to meet specific business requirements, enhancing the user experience and optimizing order processing workflows. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/overrideCart/).
     */
    overrideCart({ body, requestHeaders }?: CartPlatformApplicationValidator.OverrideCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.OverrideCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformAddItemsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.AddCartDetailResponse>} - Success response
     * @name platformAddItems
     * @summary: Add items to cart
     * @description: Add product items to the customer's existing shopping cart. If there is no existing cart associated with the customer, it creates a new one and adds the items to it. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformAddItems/).
     */
    platformAddItems({ body, i, b, buyNow, id, cartType, requestHeaders }?: CartPlatformApplicationValidator.PlatformAddItemsParam, { responseHeaders }?: object): Promise<CartPlatformModel.AddCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformCheckoutCartParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartCheckoutResponse>} - Success response
     * @name platformCheckoutCart
     * @summary: Checkout cart
     * @description: The checkout cart initiates the order creation process based on the selected address and payment method. It revalidates the cart details to ensure safe and seamless order placement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformCheckoutCart/).
     */
    platformCheckoutCart({ body, id, cartType, requestHeaders }?: CartPlatformApplicationValidator.PlatformCheckoutCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformCheckoutCartV2Param} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartCheckoutResponse>} - Success response
     * @name platformCheckoutCartV2
     * @summary: Cart checkout (latest)
     * @description: The checkout cart initiates the order creation process based on the items in the user’s cart, their selected address, and chosen payment methods. It also supports multiple payment method options and revalidates the cart details to ensure a secure and seamless order placement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformCheckoutCartV2/).
     */
    platformCheckoutCartV2({ body, id, cartType, requestHeaders }?: CartPlatformApplicationValidator.PlatformCheckoutCartV2Param, { responseHeaders }?: object): Promise<CartPlatformModel.CartCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformUpdateCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.UpdateCartDetailResponse>} - Success response
     * @name platformUpdateCart
     * @summary: Update cart items
     * @description: Customers can modify added product attributes such as quantity and size, as well as remove items from the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformUpdateCart/).
     */
    platformUpdateCart({ body, id, i, orderType, b, buyNow, cartType, requestHeaders }?: CartPlatformApplicationValidator.PlatformUpdateCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.UpdateCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.RemoveAddressParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.DeleteAddressResponse>} - Success response
     * @name removeAddress
     * @summary: Removes an address from a customer's address list
     * @description: Remove an existing customer address from the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/removeAddress/).
     */
    removeAddress({ id, userId, requestHeaders }?: CartPlatformApplicationValidator.RemoveAddressParam, { responseHeaders }?: object): Promise<CartPlatformModel.DeleteAddressResponse>;
    /**
     * @param {CartPlatformApplicationValidator.RemoveCouponParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name removeCoupon
     * @summary: Remove Applied Coupon for platform pos user
     * @description: Remove an applied coupon from the customer's cart, thereby removing the associated discount from the cart total. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/removeCoupon/).
     */
    removeCoupon({ uid, buyNow, cartType, requestHeaders }?: CartPlatformApplicationValidator.RemoveCouponParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResponse>;
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
     * @summary: Select customer address for order processing
     * @description: Select an address from the saved customer addresses and validates the availability of items in the cart. Additionally, it verifies and updates the delivery promise based on the selected address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/selectAddress/).
     */
    selectAddress({ body, cartId, buyNow, i, b, requestHeaders }?: CartPlatformApplicationValidator.SelectAddressParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.SelectPaymentModeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name selectPaymentMode
     * @summary: Select payment mode
     * @description: Customers can select a preferred payment mode from available options during the cart checkout process to securely and efficiently complete their transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/selectPaymentMode/).
     */
    selectPaymentMode({ body, id, buyNow, orderType, requestHeaders }?: CartPlatformApplicationValidator.SelectPaymentModeParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.SelectPaymentModeV2Param} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name selectPaymentModeV2
     * @summary: Select payment mode (latest)
     * @description: Selection of payment mode that supports multiple MOP(mode of payment). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/selectPaymentModeV2/).
     */
    selectPaymentModeV2({ body, id, buyNow, orderType, requestHeaders }?: CartPlatformApplicationValidator.SelectPaymentModeV2Param, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateAddressParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.UpdateAddressResponse>} - Success response
     * @name updateAddress
     * @summary: Updates an existing customer address
     * @description: Update the user address - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateAddress/).
     */
    updateAddress({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdateAddressParam, { responseHeaders }?: object): Promise<CartPlatformModel.UpdateAddressResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.UpdateCartDetailResponse>} - Success response
     * @name updateCart
     * @summary: Update cart items
     * @description: Customers can modify added product attributes such as quantity and size, as well as remove items from the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCart/).
     */
    updateCart({ cartId, body, b, requestHeaders }?: CartPlatformApplicationValidator.UpdateCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.UpdateCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartMetaParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartMetaResponse>} - Success response
     * @name updateCartMeta
     * @summary: Update cart metadata
     * @description: Add or modify metadata associated with a cart, which includes customer preferences, delivery instructions, or any special requirements related to the cart items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartMeta/).
     */
    updateCartMeta({ body, id, buyNow, userId, requestHeaders }?: CartPlatformApplicationValidator.UpdateCartMetaParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartMetaResponse>;
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
     * @description: Modify the cart user to a new valid customer for the provided customer ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartUser/).
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
     * @summary: Update shared cart items
     * @description: Customer can either merge or replace shared cart items with existing cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartWithSharedItems/).
     */
    updateCartWithSharedItems({ token, action, cartId, requestHeaders }?: CartPlatformApplicationValidator.UpdateCartWithSharedItemsParam, { responseHeaders }?: object): Promise<CartPlatformModel.SharedCartResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCouponParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CouponDetailResponse>} - Success response
     * @name updateCoupon
     * @summary: Update a coupon
     * @description: Update the details of an existing coupon by specifying its unique identifier. This includes modifying coupon attributes such as discount percentage, validity period, and associated conditions. Leveraging this functionality allows businesses to quickly adapt their promotional strategies to changing market dynamics. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCoupon/).
     */
    updateCoupon({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdateCouponParam, { responseHeaders }?: object): Promise<CartPlatformModel.CouponDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCouponPartiallyParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name updateCouponPartially
     * @summary: Update coupon archive state and schedule
     * @description: Seller can make partial adjustments of an existing coupon by specifying its unique identifier. It enables businesses to modify specific attributes of the coupon while preserving other details intact. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCouponPartially/).
     */
    updateCouponPartially({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdateCouponPartiallyParam, { responseHeaders }?: object): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.UpdatePriceAdjustmentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.UpdatePriceAdjustmentResponse>} -
     *   Success response
     * @name updatePriceAdjustment
     * @summary: Update price adjustments.
     * @description: Modify price adjustments for items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updatePriceAdjustment/).
     */
    updatePriceAdjustment({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdatePriceAdjustmentParam, { responseHeaders }?: object): Promise<CartPlatformModel.UpdatePriceAdjustmentResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdatePromotionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PromotionUpdateResult>} - Success response
     * @name updatePromotion
     * @summary: Update a promotion
     * @description: Update the details of an existing promotion by specifying its unique identifier. This includes modifying promotion attributes such as discount percentage, validity period, and associated conditions. Leveraging this functionality allows businesses to quickly adapt their promotional strategies to changing market dynamics. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updatePromotion/).
     */
    updatePromotion({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdatePromotionParam, { responseHeaders }?: object): Promise<CartPlatformModel.PromotionUpdateResult>;
    /**
     * @param {CartPlatformApplicationValidator.UpdatePromotionPartiallyParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name updatePromotionPartially
     * @summary: Partially update a promotion.
     * @description: Seller can make partial adjustments of an existing promotion by specifying its unique identifier. It enables businesses to modify specific attributes of the promotion while preserving other details intact. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updatePromotionPartially/).
     */
    updatePromotionPartially({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdatePromotionPartiallyParam, { responseHeaders }?: object): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateShipmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PlatformCartShipmentsResponse>} -
     *   Success response
     * @name updateShipments
     * @summary: Update shipments
     * @description: Update the quantity or delivery type of the shipments. Customers can switch the order type from Home Delivery to Pick At Store and vice versa. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateShipments/).
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
     * @summary: Validate applied coupon
     * @description: Validates the applicability of a coupon code for the selected payment mode for the existing cart. This ensures the coupon's validity before proceeding with the payment process, enhancing user experience and preventing potential errors during transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/validateCouponForPayment/).
     */
    validateCouponForPayment({ id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, iin, network, type, cardId, cartType, requestHeaders, }?: CartPlatformApplicationValidator.ValidateCouponForPaymentParam, { responseHeaders }?: object): Promise<CartPlatformModel.PaymentCouponValidate>;
}
import CartPlatformApplicationValidator = require("./CartPlatformApplicationValidator");
import CartPlatformModel = require("./CartPlatformModel");
import Paginator = require("../../common/Paginator");
