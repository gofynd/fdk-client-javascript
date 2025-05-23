export = Cart;
declare class Cart {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {CartPlatformApplicationValidator.AddAddressParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SaveAddressDetails>} - Success response
     * @name addAddress
     * @summary: Creates a new address for a customer
     * @description: Customers can add a new address to their cart to save details such as name, email, contact information, and address. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/addAddress/).
     */
    addAddress({ body, requestHeaders }?: CartPlatformApplicationValidator.AddAddressParam, { responseHeaders }?: object): Promise<CartPlatformModel.SaveAddressDetails>;
    /**
     * @param {CartPlatformApplicationValidator.AddItemsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.AddCartDetailResult>} - Success response
     * @name addItems
     * @summary: Add items to cart
     * @description: Add product items to the customer's existing shopping cart. If there is no existing cart associated with the customer, it creates a new one and adds the items to it. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/addItems/).
     */
    addItems({ cartId, body, b, requestHeaders }?: CartPlatformApplicationValidator.AddItemsParam, { responseHeaders }?: object): Promise<CartPlatformModel.AddCartDetailResult>;
    /**
     * @param {CartPlatformApplicationValidator.AddPriceAdjustmentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.GetPriceAdjustmentResult>} - Success response
     * @name addPriceAdjustment
     * @summary: Create price adjustments
     * @description: Create custom price adjustments for items in the cart, facilitating the application of discounts or promotions. Price adjustments can be tailored based on specific sales channel contexts, enhancing flexibility in pricing strategies. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/addPriceAdjustment/).
     */
    addPriceAdjustment({ body, requestHeaders }?: CartPlatformApplicationValidator.AddPriceAdjustmentParam, { responseHeaders }?: object): Promise<CartPlatformModel.GetPriceAdjustmentResult>;
    /**
     * @param {CartPlatformApplicationValidator.ApplyCouponParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResult>} - Success response
     * @name applyCoupon
     * @summary: Apply coupon
     * @description: Apply a coupon code to the customer's cart to trigger discounts on eligible items - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/applyCoupon/).
     */
    applyCoupon({ body, xOrderingSource, i, b, p, id, buyNow, requestHeaders }?: CartPlatformApplicationValidator.ApplyCouponParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResult>;
    /**
     * @param {CartPlatformApplicationValidator.CheckCartServiceabilityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.OpenApiCartServiceabilityResult>} -
     *   Success response
     * @name checkCartServiceability
     * @summary: Check cart serviceability
     * @description: Verify the serviceability of items in the cart at a specific pin code and ensure accurate delivery promises. System checks each item's availability and delivery feasibility, providing real-time information on serviceability and estimated delivery times. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/checkCartServiceability/).
     */
    checkCartServiceability({ body, xOrderingSource, requestHeaders }?: CartPlatformApplicationValidator.CheckCartServiceabilityParam, { responseHeaders }?: object): Promise<CartPlatformModel.OpenApiCartServiceabilityResult>;
    /**
     * @param {CartPlatformApplicationValidator.CheckoutCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.OpenApiCheckoutResult>} - Success response
     * @name checkoutCart
     * @summary: Checkout cart
     * @description: The checkout cart initiates the order creation process based on the selected address and payment method. It revalidates the cart details to ensure safe and seamless order placement. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/checkoutCart/).
     */
    checkoutCart({ body, xOrderingSource, requestHeaders }?: CartPlatformApplicationValidator.CheckoutCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.OpenApiCheckoutResult>;
    /**
     * @param {CartPlatformApplicationValidator.CreateCartMetaConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartMetaConfigAdd>} - Success response
     * @name createCartMetaConfig
     * @summary: Create a new cart meta
     * @description: Create custom meta configurations for carts associated with a specific sales channel. By specifying the company ID and application ID, seller can define unique cart settings, including preferences, rules, and constraints, tailored to their business needs. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/createCartMetaConfig/).
     */
    createCartMetaConfig({ body, requestHeaders }?: CartPlatformApplicationValidator.CreateCartMetaConfigParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartMetaConfigAdd>;
    /**
     * @param {CartPlatformApplicationValidator.CreateCouponParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CouponCreateResult>} - Success response
     * @name createCoupon
     * @summary: Create a coupon
     * @description: Creates a new coupon based on the selected coupon type. Sellers can choose from multiple supported coupon types, including percentage value, fixed amount value, bundled discount, buy X get Y items, and more, along with customizable coupon criteria to meet specific business requirements. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/createCoupon/).
     */
    createCoupon({ body, requestHeaders }?: CartPlatformApplicationValidator.CreateCouponParam, { responseHeaders }?: object): Promise<CartPlatformModel.CouponCreateResult>;
    /**
     * @param {CartPlatformApplicationValidator.CreatePromotionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PromotionAddResult>} - Success response
     * @name createPromotion
     * @summary: Create a promotion
     * @description: Creates a new promotion based on the selected promotion type. Sellers can choose from multiple supported promotion types, including percentage value, fixed amount value, bundled discount, buy X get Y items, and more, along with customizable promotion criteria to meet specific business requirements. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/createPromotion/).
     */
    createPromotion({ body, requestHeaders }?: CartPlatformApplicationValidator.CreatePromotionParam, { responseHeaders }?: object): Promise<CartPlatformModel.PromotionAddResult>;
    /**
     * @param {CartPlatformApplicationValidator.DeleteCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.DeleteCartDetailResult>} - Success response
     * @name deleteCart
     * @summary: Delete a cart
     * @description: Delete all items from the user's cart and resets it to its initial state, providing a clean slate for new selections. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/deleteCart/).
     */
    deleteCart({ body, id, requestHeaders }?: CartPlatformApplicationValidator.DeleteCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.DeleteCartDetailResult>;
    /**
     * @param {CartPlatformApplicationValidator.DeleteCouponParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name deleteCoupon
     * @summary: Delete a coupon which is in draft state
     * @description: Delete details of a draft coupon by providing its unique identifier to delete information such as coupon type, rules, validity period and other related information. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/deleteCoupon/).
     */
    deleteCoupon({ id, requestHeaders }?: CartPlatformApplicationValidator.DeleteCouponParam, { responseHeaders }?: object): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.DeletePromotionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name deletePromotion
     * @summary: Delete a promotion which is in draft state
     * @description: Delete details of a draft promotion by providing its unique identifier to delete information such as promotion type, rules, validity period and other related information. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/deletePromotion/).
     */
    deletePromotion({ id, requestHeaders }?: CartPlatformApplicationValidator.DeletePromotionParam, { responseHeaders }?: object): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.FetchAndvalidateCartItemsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.OpenapiCartDetailsResult>} - Success response
     * @name fetchAndvalidateCartItems
     * @summary: Get and validate cart items
     * @description: Retrieve cart details for a provided list of cart items and validate its contents. This ensures accuracy and completeness in cart information, including item quantities, prices, discounts, and applicable taxes. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/fetchAndvalidateCartItems/).
     */
    fetchAndvalidateCartItems({ body, xOrderingSource, requestHeaders }?: CartPlatformApplicationValidator.FetchAndvalidateCartItemsParam, { responseHeaders }?: object): Promise<CartPlatformModel.OpenapiCartDetailsResult>;
    /**
     * @param {CartPlatformApplicationValidator.FetchCartMetaConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartMetaConfigAdd>} - Success response
     * @name fetchCartMetaConfig
     * @summary: Get cart meta
     * @description: Retrieve meta configuration settings tailored for customizing the cart experience within a specific sales channel. Cart meta includes configuration settings such as allowed maximum cart value, allowed minimum cart value, maximum allowed cart items, delivery charges, etc. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/fetchCartMetaConfig/).
     */
    fetchCartMetaConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CartPlatformModel.CartMetaConfigAdd>;
    /**
     * @param {CartPlatformApplicationValidator.GetAbandonedCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.AbandonedCartResult>} - Success response
     * @name getAbandonedCart
     * @summary: Get abandoned carts
     * @description: Retrieve the list of abandoned carts that have been active for the specified period of time and have not yet been archived for the specific sales channel. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getAbandonedCart/).
     */
    getAbandonedCart({ pageNo, pageSize, fromDate, toDate, anonymousCart, lastId, sortOn, requestHeaders, }?: CartPlatformApplicationValidator.GetAbandonedCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.AbandonedCartResult>;
    /**
     * @param {CartPlatformApplicationValidator.GetAbandonedCartDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResult>} - Success response
     * @name getAbandonedCartDetails
     * @summary: Get abandoned cart details
     * @description: Retrieves abandoned cart details linked to a specific customer using a unique cart ID. It offers an overview of the items, quantities, prices, and other relevant information associated with the cart. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getAbandonedCartDetails/).
     */
    getAbandonedCartDetails({ id, i, b, c, requestHeaders }?: CartPlatformApplicationValidator.GetAbandonedCartDetailsParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResult>;
    /**
     * @param {CartPlatformApplicationValidator.GetAddressByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PlatformAddress>} - Success response
     * @name getAddressById
     * @summary: Get details for a single customer address
     * @description: Retrieve a specific customer address stored in the system by providing its unique identifier. This API provides detailed information about the address, including the recipient's name, address, city, postal code, and other relevant details. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getAddressById/).
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, requestHeaders, }?: CartPlatformApplicationValidator.GetAddressByIdParam, { responseHeaders }?: object): Promise<CartPlatformModel.PlatformAddress>;
    /**
     * @param {CartPlatformApplicationValidator.GetAddressesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PlatformGetAddressesDetails>} -
     *   Success response
     * @name getAddresses
     * @summary: Get a list of addresses for a customer
     * @description: Retrieves a list of all addresses saved by the customer, simplifying the checkout process by offering pre-saved address options for delivery. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getAddresses/).
     */
    getAddresses({ cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, requestHeaders, }?: CartPlatformApplicationValidator.GetAddressesParam, { responseHeaders }?: object): Promise<CartPlatformModel.PlatformGetAddressesDetails>;
    /**
     * @param {CartPlatformApplicationValidator.GetAppCouponsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.GetCouponResult>} - Success response
     * @name getAppCoupons
     * @summary: List of coupons
     * @description: Retrieve a list of all available coupons that customer can apply to their carts. It provides details about each coupon, including its code, discount amount, and applicable conditions. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getAppCoupons/).
     */
    getAppCoupons({ id, buyNow, slug, storeId, requestHeaders }?: CartPlatformApplicationValidator.GetAppCouponsParam, { responseHeaders }?: object): Promise<CartPlatformModel.GetCouponResult>;
    /**
     * @param {CartPlatformApplicationValidator.GetAvailableDeliveryModesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDeliveryModesDetails>} - Success response
     * @name getAvailableDeliveryModes
     * @summary: Get delivery modes
     * @description: Retrieve a list of delivery modes (home delivery/store pickup) along with a list of available pickup stores for a given cart at a specified PIN Code. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getAvailableDeliveryModes/).
     */
    getAvailableDeliveryModes({ areaCode, id, requestHeaders }?: CartPlatformApplicationValidator.GetAvailableDeliveryModesParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDeliveryModesDetails>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResult>} - Success response
     * @name getCart
     * @summary: Get a cart
     * @description: Retrieve details of a cart linked to a specific customer using either the customer's ID or a unique cart ID. It offers an overview of the items, quantities, prices, and other relevant information associated with the cart. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getCart/).
     */
    getCart({ xOrderingSource, id, userId, orderType, i, b, assignCardId, buyNow, requestHeaders, }?: CartPlatformApplicationValidator.GetCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResult>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartListParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.MultiCartResult>} - Success response
     * @name getCartList
     * @summary: List of carts
     * @description: Retrieve the list of active carts associated with a specific customer. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getCartList/).
     */
    getCartList({ fromDate, toDate, filterOn, requestHeaders }?: CartPlatformApplicationValidator.GetCartListParam, { responseHeaders }?: object): Promise<CartPlatformModel.MultiCartResult>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartShareLinkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.GetShareCartLinkResult>} - Success response
     * @name getCartShareLink
     * @summary: Share cart link
     * @description: Generate a unique shareable link for the customer's cart for a specific sales channel. This link enables easy sharing of the cart contents with other users, facilitating collaborative shopping experiences. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getCartShareLink/).
     */
    getCartShareLink({ body, requestHeaders }?: CartPlatformApplicationValidator.GetCartShareLinkParam, { responseHeaders }?: object): Promise<CartPlatformModel.GetShareCartLinkResult>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartSharedItemsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SharedCartResult>} - Success response
     * @name getCartSharedItems
     * @summary: List shared cart items
     * @description: Retrieve the cart items from the shared cart link based on unique token. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getCartSharedItems/).
     */
    getCartSharedItems({ token, requestHeaders }?: CartPlatformApplicationValidator.GetCartSharedItemsParam, { responseHeaders }?: object): Promise<CartPlatformModel.SharedCartResult>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CouponUpdate>} - Success response
     * @name getCouponById
     * @summary: Get a coupon
     * @description: Retrieve details of a specific coupon by providing its unique identifier to obtain information such as coupon type, rules, validity period and other related information. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getCouponById/).
     */
    getCouponById({ id, requestHeaders }?: CartPlatformApplicationValidator.GetCouponByIdParam, { responseHeaders }?: object): Promise<CartPlatformModel.CouponUpdate>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponCodeExistsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getCouponCodeExists
     * @summary: Check coupon code exists
     * @description: Validates the presence of a coupon code for the specified sales channel to verify whether the provided code already exists or not. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getCouponCodeExists/).
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
     * @summary: Get coupon option values
     * @description: Retrieves the available values for coupon options used to create and update coupons. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getCouponOptionValues/).
     */
    getCouponOptionValues({ requestHeaders }?: any, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CouponsResult>} - Success response
     * @name getCoupons
     * @summary: List of coupons
     * @description: Retrieve a list of all created coupons for specific sales channel. It also supports searching based on text search, pagination and other flags to filter coupons. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getCoupons/).
     */
    getCoupons({ pageNo, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, createdBy, reviewedBy, approvedStartTime, approvedEndTime, reviewStartTime, reviewEndTime, status, requestHeaders, }?: CartPlatformApplicationValidator.GetCouponsParam, { responseHeaders }?: object): Promise<CartPlatformModel.CouponsResult>;
    /**
     * @param {CartPlatformApplicationValidator.GetItemCountParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartItemCountResult>} - Success response
     * @name getItemCount
     * @summary: Get a cart items count
     * @description: Retrieve the total count of items currently present in the customer's cart. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getItemCount/).
     */
    getItemCount({ id, buyNow, requestHeaders }?: CartPlatformApplicationValidator.GetItemCountParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartItemCountResult>;
    /**
     * @param {CartPlatformApplicationValidator.GetPriceAdjustmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.GetPriceAdjustmentResult>} - Success response
     * @name getPriceAdjustments
     * @summary: Get a list of all price adjustments associated with a cart
     * @description: This API helps to get price adjustments data associated to a particular cart - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getPriceAdjustments/).
     */
    getPriceAdjustments({ cartId, requestHeaders }?: CartPlatformApplicationValidator.GetPriceAdjustmentsParam, { responseHeaders }?: object): Promise<CartPlatformModel.GetPriceAdjustmentResult>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromosCouponConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.ActivePromosResult>} - Success response
     * @name getPromosCouponConfig
     * @summary: Get promotion and coupon type
     * @description: Retrieve the configuration settings related to promotions and coupons for a specific seller. It provides details of the supported types of coupons and promotions along with their descriptions, examples, and related attributes. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getPromosCouponConfig/).
     */
    getPromosCouponConfig({ entityType, isHidden, requestHeaders }?: CartPlatformApplicationValidator.GetPromosCouponConfigParam, { responseHeaders }?: object): Promise<CartPlatformModel.ActivePromosResult>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromotionByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PromotionUpdateResult>} - Success response
     * @name getPromotionById
     * @summary: Get a specific promotion
     * @description: Retrieve details of a specific promotion by providing its unique identifier to obtain information such as promotion type, rules, validity period and other related information. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getPromotionById/).
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
     * @summary: Check promotion code exists
     * @description: Validates the presence of a promotion code for the specified sales channel to verify whether the provided code already exists or not. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getPromotionCodeExists/).
     */
    getPromotionCodeExists({ code, requestHeaders }?: CartPlatformApplicationValidator.GetPromotionCodeExistsParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromotionOffersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PromotionOffersDetails>} - Success response
     * @name getPromotionOffers
     * @summary: List of all available promotion offers
     * @description: Retrieve a list of all promotional offers available for the items in the cart, including details such as offer text, unique promotion ID, and validity period. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getPromotionOffers/).
     */
    getPromotionOffers({ slug, pageSize, promotionGroup, storeId, cartType, promotionType, cartId, autoApply, requestHeaders, }?: CartPlatformApplicationValidator.GetPromotionOffersParam, { responseHeaders }?: object): Promise<CartPlatformModel.PromotionOffersDetails>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromotionPaymentOffersParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PromotionPaymentOffersDetails>} -
     *   Success response
     * @name getPromotionPaymentOffers
     * @summary: Fetch available promotions payment offers
     * @description: Use this API to get top 5 payment offers available for current product - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getPromotionPaymentOffers/).
     */
    getPromotionPaymentOffers({ id, uid, requestHeaders }?: CartPlatformApplicationValidator.GetPromotionPaymentOffersParam, { responseHeaders }?: object): Promise<CartPlatformModel.PromotionPaymentOffersDetails>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromotionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PromotionsResult>} - Success response
     * @name getPromotions
     * @summary: List of promotions
     * @description: Retrieve a list of all created promotions for specific sales channel. It also supports efficient text search and pagination functionalities, ensuring optimized promotion listing for streamlined navigation and management. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getPromotions/).
     */
    getPromotions({ pageNo, pageSize, q, isActive, promoGroup, promotionType, fpPanel, promotionId, createdBy, reviewedBy, approvedStartTime, approvedEndTime, reviewStartTime, reviewEndTime, status, requestHeaders, }?: CartPlatformApplicationValidator.GetPromotionsParam, { responseHeaders }?: object): Promise<CartPlatformModel.PromotionsResult>;
    /**
     * @param {CartPlatformApplicationValidator.GetShipmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PlatformCartShipmentsResult>} -
     *   Success response
     * @name getShipments
     * @summary: Get shipments details
     * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getShipments/).
     */
    getShipments({ pickAtStoreUid, orderingStoreId, i, p, id, addressId, areaCode, orderType, requestHeaders, }?: CartPlatformApplicationValidator.GetShipmentsParam, { responseHeaders }?: object): Promise<CartPlatformModel.PlatformCartShipmentsResult>;
    /**
     * @param {CartPlatformApplicationValidator.GetStoreAddressByUidParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.StoreDetails>} - Success response
     * @name getStoreAddressByUid
     * @summary: Get Store Address
     * @description: Retrieve store details by entering the unique identifier of the pickup stores. Store details include the seller's name, contact information such as email address or phone number and business address. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/getStoreAddressByUid/).
     */
    getStoreAddressByUid({ storeUid, requestHeaders }?: CartPlatformApplicationValidator.GetStoreAddressByUidParam, { responseHeaders }?: object): Promise<CartPlatformModel.StoreDetails>;
    /**
     * @param {CartPlatformApplicationValidator.OverrideCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.OverrideCheckoutResult>} - Success response
     * @name overrideCart
     * @summary: Update cart checkout
     * @description: Overrides the cart's checkout process with a new provided cart items. It provides flexibility in customizing checkout flows to meet specific business requirements, enhancing the user experience and optimizing order processing workflows. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/overrideCart/).
     */
    overrideCart({ body, xOrderingSource, requestHeaders }?: CartPlatformApplicationValidator.OverrideCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.OverrideCheckoutResult>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformAddItemsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.AddCartDetailResult>} - Success response
     * @name platformAddItems
     * @summary: Add items to cart
     * @description: Add product items to the customer's existing shopping cart. If there is no existing cart associated with the customer, it creates a new one and adds the items to it. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/platformAddItems/).
     */
    platformAddItems({ body, xOrderingSource, i, b, buyNow, orderType, id, requestHeaders }?: CartPlatformApplicationValidator.PlatformAddItemsParam, { responseHeaders }?: object): Promise<CartPlatformModel.AddCartDetailResult>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformCheckoutCartParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartCheckoutResult>} - Success response
     * @name platformCheckoutCart
     * @summary: Checkout cart
     * @description: The checkout cart initiates the order creation process based on the selected address and payment method. It revalidates the cart details to ensure safe and seamless order placement. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/platformCheckoutCart/).
     */
    platformCheckoutCart({ body, xOrderingSource, id, requestHeaders }?: CartPlatformApplicationValidator.PlatformCheckoutCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartCheckoutResult>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformCheckoutCartV2Param} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartCheckoutDetails>} - Success response
     * @name platformCheckoutCartV2
     * @summary: Checkout cart
     * @description: The checkout cart initiates the order creation process based on the items in the user’s cart,  their selected address, and chosen payment methods. It also supports multiple payment method  options and revalidates the cart details to ensure a secure and seamless order placement. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/platformCheckoutCartV2/).
     */
    platformCheckoutCartV2({ body, xOrderingSource, id, requestHeaders }?: CartPlatformApplicationValidator.PlatformCheckoutCartV2Param, { responseHeaders }?: object): Promise<CartPlatformModel.CartCheckoutDetails>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformUpdateCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.UpdateCartDetailResult>} - Success response
     * @name platformUpdateCart
     * @summary: Update cart items
     * @description: Customers can modify added product attributes such as quantity and size, as well as remove items from the cart. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/platformUpdateCart/).
     */
    platformUpdateCart({ body, xOrderingSource, id, i, orderType, b, buyNow, requestHeaders }?: CartPlatformApplicationValidator.PlatformUpdateCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.UpdateCartDetailResult>;
    /**
     * @param {CartPlatformApplicationValidator.RemoveAddressParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.DeleteAddressResult>} - Success response
     * @name removeAddress
     * @summary: Removes an address from a customer's address list
     * @description: Remove an existing customer address from the system. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/removeAddress/).
     */
    removeAddress({ id, userId, requestHeaders }?: CartPlatformApplicationValidator.RemoveAddressParam, { responseHeaders }?: object): Promise<CartPlatformModel.DeleteAddressResult>;
    /**
     * @param {CartPlatformApplicationValidator.RemoveCouponParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResult>} - Success response
     * @name removeCoupon
     * @summary: Remove coupon
     * @description: Remove an applied coupon from the customer's cart, thereby removing the associated discount from the cart total. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/removeCoupon/).
     */
    removeCoupon({ xOrderingSource, uid, buyNow, requestHeaders }?: CartPlatformApplicationValidator.RemoveCouponParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResult>;
    /**
     * @param {CartPlatformApplicationValidator.RemovePriceAdjustmentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name removePriceAdjustment
     * @summary: Remove price adjustments
     * @description: Remove the applied price adjustments for specific items within the cart based on unique price adjustment ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/removePriceAdjustment/).
     */
    removePriceAdjustment({ id, requestHeaders }?: CartPlatformApplicationValidator.RemovePriceAdjustmentParam, { responseHeaders }?: object): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.SelectAddressParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResult>} - Success response
     * @name selectAddress
     * @summary: Select customer address for order processing
     * @description: Select an address from the saved customer addresses and validates the availability of items in the cart. Additionally, it verifies and updates the delivery promise based on the selected address. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/selectAddress/).
     */
    selectAddress({ body, xOrderingSource, cartId, buyNow, i, b, requestHeaders }?: CartPlatformApplicationValidator.SelectAddressParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResult>;
    /**
     * @param {CartPlatformApplicationValidator.SelectPaymentModeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResult>} - Success response
     * @name selectPaymentMode
     * @summary: Select payment mode
     * @description: Customers can select a preferred payment mode from available options during the cart checkout process to securely and efficiently complete their transaction. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/selectPaymentMode/).
     */
    selectPaymentMode({ body, xOrderingSource, id, buyNow, orderType, requestHeaders }?: CartPlatformApplicationValidator.SelectPaymentModeParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResult>;
    /**
     * @param {CartPlatformApplicationValidator.SelectPaymentModeV2Param} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartDetailResult>} - Success response
     * @name selectPaymentModeV2
     * @summary: Select payment mode (latest)
     * @description: Selection of payment mode that supports multiple MOP(mode of payment). - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/selectPaymentModeV2/).
     */
    selectPaymentModeV2({ body, xOrderingSource, id, buyNow, orderType, requestHeaders }?: CartPlatformApplicationValidator.SelectPaymentModeV2Param, { responseHeaders }?: object): Promise<CartPlatformModel.CartDetailResult>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateAddressParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.UpdateAddressDetails>} - Success response
     * @name updateAddress
     * @summary: Updates an existing customer address
     * @description: Update the user address - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/updateAddress/).
     */
    updateAddress({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdateAddressParam, { responseHeaders }?: object): Promise<CartPlatformModel.UpdateAddressDetails>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.UpdateCartDetailResult>} - Success response
     * @name updateCart
     * @summary: Update cart items
     * @description: Customers can modify added product attributes such as quantity and size, as well as remove items from the cart. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/updateCart/).
     */
    updateCart({ cartId, body, b, requestHeaders }?: CartPlatformApplicationValidator.UpdateCartParam, { responseHeaders }?: object): Promise<CartPlatformModel.UpdateCartDetailResult>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartMetaParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartMetaDetails>} - Success response
     * @name updateCartMeta
     * @summary: Update cart metadata
     * @description: Add or modify metadata associated with a cart, which includes customer preferences, delivery instructions, or any special requirements related to the cart items. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/updateCartMeta/).
     */
    updateCartMeta({ body, id, buyNow, requestHeaders }?: CartPlatformApplicationValidator.UpdateCartMetaParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartMetaDetails>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartMetaConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CartMetaConfigUpdate>} - Success response
     * @name updateCartMetaConfig
     * @summary: Update cart meta
     * @description: Modify the configuration settings for cart metadata associated with a specific sales channel. Cart meta includes configuration settings such as allowed maximum cart value, allowed minimum cart value, maximum allowed cart items, delivery charges, etc. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/updateCartMetaConfig/).
     */
    updateCartMetaConfig({ cartMetaId, body, requestHeaders }?: CartPlatformApplicationValidator.UpdateCartMetaConfigParam, { responseHeaders }?: object): Promise<CartPlatformModel.CartMetaConfigUpdate>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartUserParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.UserCartMappingResult>} - Success response
     * @name updateCartUser
     * @summary: Update user of a cart
     * @description: Modify the cart user to a new valid customer for the provided customer ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/updateCartUser/).
     */
    updateCartUser({ body, id, requestHeaders }?: CartPlatformApplicationValidator.UpdateCartUserParam, { responseHeaders }?: object): Promise<CartPlatformModel.UserCartMappingResult>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartWithSharedItemsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SharedCartResult>} - Success response
     * @name updateCartWithSharedItems
     * @summary: Update shared cart items
     * @description: Customer can either merge or replace shared cart items with existing cart. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/updateCartWithSharedItems/).
     */
    updateCartWithSharedItems({ token, action, cartId, requestHeaders }?: CartPlatformApplicationValidator.UpdateCartWithSharedItemsParam, { responseHeaders }?: object): Promise<CartPlatformModel.SharedCartResult>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCouponParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.CouponCreateResult>} - Success response
     * @name updateCoupon
     * @summary: Update a coupon
     * @description: Update the details of an existing coupon by specifying its unique identifier. This includes modifying coupon attributes such as discount percentage, validity period, and associated conditions. Leveraging this functionality allows businesses to quickly adapt their promotional strategies to changing market dynamics. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/updateCoupon/).
     */
    updateCoupon({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdateCouponParam, { responseHeaders }?: object): Promise<CartPlatformModel.CouponCreateResult>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCouponPartiallyParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name updateCouponPartially
     * @summary: Update a coupon partially
     * @description: Seller can make partial adjustments of an existing coupon by specifying its unique identifier. It enables businesses to modify specific attributes of the coupon while preserving other details intact. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/updateCouponPartially/).
     */
    updateCouponPartially({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdateCouponPartiallyParam, { responseHeaders }?: object): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.UpdatePriceAdjustmentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.GetPriceAdjustmentResult>} - Success response
     * @name updatePriceAdjustment
     * @summary: Update price adjustments
     * @description: Modify price adjustments for specific items in the cart. By providing the seller ID, sales channel ID, and price adjustment ID, seller can apply discounts or other adjustments to the prices of cart items, facilitating dynamic pricing strategies. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/updatePriceAdjustment/).
     */
    updatePriceAdjustment({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdatePriceAdjustmentParam, { responseHeaders }?: object): Promise<CartPlatformModel.GetPriceAdjustmentResult>;
    /**
     * @param {CartPlatformApplicationValidator.UpdatePromotionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PromotionUpdateResult>} - Success response
     * @name updatePromotion
     * @summary: Update a promotion
     * @description: Update the details of an existing promotion by specifying its unique identifier. This includes modifying promotion attributes such as discount percentage, validity period, and associated conditions. Leveraging this functionality allows businesses to quickly adapt their promotional strategies to changing market dynamics. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/updatePromotion/).
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
     * @summary: Update a promotion partially
     * @description: Seller can make partial adjustments of an existing promotion by specifying its unique identifier. It enables businesses to modify specific attributes of the promotion while preserving other details intact. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/updatePromotionPartially/).
     */
    updatePromotionPartially({ id, body, requestHeaders }?: CartPlatformApplicationValidator.UpdatePromotionPartiallyParam, { responseHeaders }?: object): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateShipmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PlatformCartShipmentsResult>} -
     *   Success response
     * @name updateShipments
     * @summary: Update shipments
     * @description: Update the quantity or delivery type of the shipments. Customers can switch the order type from Home Delivery to Pick At Store and vice versa. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/updateShipments/).
     */
    updateShipments({ body, i, p, id, addressId, areaCode, orderType, requestHeaders }?: CartPlatformApplicationValidator.UpdateShipmentsParam, { responseHeaders }?: object): Promise<CartPlatformModel.PlatformCartShipmentsResult>;
    /**
     * @param {CartPlatformApplicationValidator.ValidateCouponForPaymentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CartPlatformModel.PaymentCouponValidate>} - Success response
     * @name validateCouponForPayment
     * @summary: Validate applied coupon
     * @description: Validates the applicability of a coupon code for the selected payment mode for the existing cart. This ensures the coupon's validity before proceeding with the payment process, enhancing user experience and preventing potential errors during transactions. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/cart/validateCouponForPayment/).
     */
    validateCouponForPayment({ xOrderingSource, id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, requestHeaders, }?: CartPlatformApplicationValidator.ValidateCouponForPaymentParam, { responseHeaders }?: object): Promise<CartPlatformModel.PaymentCouponValidate>;
}
import CartPlatformApplicationValidator = require("./CartPlatformApplicationValidator");
import CartPlatformModel = require("./CartPlatformModel");
