export = Cart;
declare class Cart {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {CartPlatformApplicationValidator.AddAddressParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.SaveAddressResponse>} - Success response
     * @name addAddress
     * @summary: Add address to an account
     * @description: Use this API to add an address to an account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/addAddress/).
     */
    addAddress({ body }?: CartPlatformApplicationValidator.AddAddressParam): Promise<CartPlatformModel.SaveAddressResponse>;
    /**
     * @param {CartPlatformApplicationValidator.AddItemsParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.AddCartDetailResponse>} - Success response
     * @name addItems
     * @summary: Add items to abandoned cart
     * @description: Use this API to add items to the abandoned cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/addItems/).
     */
    addItems({ cartId, body, b }?: CartPlatformApplicationValidator.AddItemsParam): Promise<CartPlatformModel.AddCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.AddPriceAdjustmentParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.PriceAdjustmentResponse>} - Success response
     * @name addPriceAdjustment
     * @summary: Create new price adjustment
     * @description: Create new price adjustment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/addPriceAdjustment/).
     */
    addPriceAdjustment({ body }?: CartPlatformApplicationValidator.AddPriceAdjustmentParam): Promise<CartPlatformModel.PriceAdjustmentResponse>;
    /**
     * @param {CartPlatformApplicationValidator.ApplyCouponParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name applyCoupon
     * @summary: Apply Coupon for platform pos user
     * @description: Use this API to apply coupons on items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/applyCoupon/).
     */
    applyCoupon({ body, i, b, p, id, buyNow }?: CartPlatformApplicationValidator.ApplyCouponParam): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.CheckCartServiceabilityParam} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.OpenApiCartServiceabilityResponse>}
     *   - Success response
     *
     * @name checkCartServiceability
     * @summary: Check Pincode Serviceability
     * @description: Check Pincode serviceability for cart items provided in `cart_items` and address pincode in `shipping_address` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/checkCartServiceability/).
     */
    checkCartServiceability({ body }?: CartPlatformApplicationValidator.CheckCartServiceabilityParam): Promise<CartPlatformModel.OpenApiCartServiceabilityResponse>;
    /**
     * @param {CartPlatformApplicationValidator.CheckoutCartParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.OpenApiCheckoutResponse>} - Success response
     * @name checkoutCart
     * @summary: Create Fynd order with cart details
     * @description: Generate Fynd order for cart details send with provided `cart_items` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/checkoutCart/).
     */
    checkoutCart({ body }?: CartPlatformApplicationValidator.CheckoutCartParam): Promise<CartPlatformModel.OpenApiCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.CreateCartMetaConfigParam} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.CartMetaConfigAdd>} - Success response
     * @name createCartMetaConfig
     * @summary: Create new cart meta configuration
     * @description: Create new cart meta configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/createCartMetaConfig/).
     */
    createCartMetaConfig({ body }?: CartPlatformApplicationValidator.CreateCartMetaConfigParam): Promise<CartPlatformModel.CartMetaConfigAdd>;
    /**
     * @param {CartPlatformApplicationValidator.CreateCouponParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name createCoupon
     * @summary: Create new coupon
     * @description: Create new coupon - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/createCoupon/).
     */
    createCoupon({ body }?: CartPlatformApplicationValidator.CreateCouponParam): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.CreatePromotionParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.PromotionAdd>} - Success response
     * @name createPromotion
     * @summary: Create new promotion
     * @description: Create new promotion - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/createPromotion/).
     */
    createPromotion({ body }?: CartPlatformApplicationValidator.CreatePromotionParam): Promise<CartPlatformModel.PromotionAdd>;
    /**
     * @param {CartPlatformApplicationValidator.DeleteCartParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.DeleteCartDetailResponse>} - Success response
     * @name deleteCart
     * @summary: Delete cart once user made successful checkout
     * @description: Use this API to delete the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/deleteCart/).
     */
    deleteCart({ body, id }?: CartPlatformApplicationValidator.DeleteCartParam): Promise<CartPlatformModel.DeleteCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.FetchAndvalidateCartItemsParam} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.OpenapiCartDetailsResponse>} - Success response
     * @name fetchAndvalidateCartItems
     * @summary: Fetch Cart Details
     * @description: Get all the details of cart for a list of provided `cart_items` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/fetchAndvalidateCartItems/).
     */
    fetchAndvalidateCartItems({ body }?: CartPlatformApplicationValidator.FetchAndvalidateCartItemsParam): Promise<CartPlatformModel.OpenapiCartDetailsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.FetchCartMetaConfigParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartMetaConfigAdd>} - Success response
     * @name fetchCartMetaConfig
     * @summary: Fetch cart meta configuration
     * @description: Fetch cart meta configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/fetchCartMetaConfig/).
     */
    fetchCartMetaConfig({}?: any): Promise<CartPlatformModel.CartMetaConfigAdd>;
    /**
     * @param {CartPlatformApplicationValidator.GetAbandonedCartParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.AbandonedCartResponse>} - Success response
     * @name getAbandonedCart
     * @summary: Get with abandoned cart list
     * @description: Get abandoned cart list with pagination - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAbandonedCart/).
     */
    getAbandonedCart({ pageNo, pageSize, fromDate, toDate, anonymousCart, lastId, sortOn, }?: CartPlatformApplicationValidator.GetAbandonedCartParam): Promise<CartPlatformModel.AbandonedCartResponse>;
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
     * @summary: Get with abandoned cart list
     * @description: Get abandoned cart list with pagination
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
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name getAbandonedCartDetails
     * @summary: Fetch all items added to the cart
     * @description: Use this API to get details of all the items added to a cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAbandonedCartDetails/).
     */
    getAbandonedCartDetails({ id, i, b }?: CartPlatformApplicationValidator.GetAbandonedCartDetailsParam): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetAddressByIdParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.PlatformAddress>} - Success response
     * @name getAddressById
     * @summary: Fetch a single address by its ID
     * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `PlatformAddress`. Attibutes listed below are optional mobile_no checkout_mode tags default - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAddressById/).
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, }?: CartPlatformApplicationValidator.GetAddressByIdParam): Promise<CartPlatformModel.PlatformAddress>;
    /**
     * @param {CartPlatformApplicationValidator.GetAddressesParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.PlatformGetAddressesResponse>} -
     *   Success response
     * @name getAddresses
     * @summary: Fetch address
     * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional uid address_id  mobile_no checkout_mode tags default - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAddresses/).
     */
    getAddresses({ cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, }?: CartPlatformApplicationValidator.GetAddressesParam): Promise<CartPlatformModel.PlatformGetAddressesResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetAppCouponsParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.GetCouponResponse>} - Success response
     * @name getAppCoupons
     * @summary: Fetch Coupon
     * @description: Use this API to get a list of available coupons along with their details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAppCoupons/).
     */
    getAppCoupons({ id, buyNow }?: CartPlatformApplicationValidator.GetAppCouponsParam): Promise<CartPlatformModel.GetCouponResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetAvailableDeliveryModesParam} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.CartDeliveryModesResponse>} - Success response
     * @name getAvailableDeliveryModes
     * @summary: Get available delivery modes for cart
     * @description: Use this API to get the delivery modes (home-delivery/store-pickup) along with a list of pickup stores available for a given cart at a given PIN Code. User can then view the address of a pickup store with the help of store-address API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAvailableDeliveryModes/).
     */
    getAvailableDeliveryModes({ areaCode, id }?: CartPlatformApplicationValidator.GetAvailableDeliveryModesParam): Promise<CartPlatformModel.CartDeliveryModesResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name getCart
     * @summary: Fetch all items added to the customer cart using cart id
     * @description: Use this API to get details of all the items added to a cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCart/).
     */
    getCart({ id, userId, i, b, assignCardId, buyNow }?: CartPlatformApplicationValidator.GetCartParam): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartListParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.MultiCartResponse>} - Success response
     * @name getCartList
     * @summary: Get cart list for store os user
     * @description: Get all carts for the store os user which is created for customer - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartList/).
     */
    getCartList({ fromDate, toDate, filterOn }?: CartPlatformApplicationValidator.GetCartListParam): Promise<CartPlatformModel.MultiCartResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartShareLinkParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.GetShareCartLinkResponse>} - Success response
     * @name getCartShareLink
     * @summary: Generate token for sharing the cart
     * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartShareLink/).
     */
    getCartShareLink({ body }?: CartPlatformApplicationValidator.GetCartShareLinkParam): Promise<CartPlatformModel.GetShareCartLinkResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCartSharedItemsParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.SharedCartResponse>} - Success response
     * @name getCartSharedItems
     * @summary: Get details of a shared cart
     * @description: Use this API to get the shared cart details as per the token generated using the share-cart API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartSharedItems/).
     */
    getCartSharedItems({ token }?: CartPlatformApplicationValidator.GetCartSharedItemsParam): Promise<CartPlatformModel.SharedCartResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponByIdParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.CouponUpdate>} - Success response
     * @name getCouponById
     * @summary: Get with single coupon details or coupon list
     * @description: Get single coupon details with `id` in path param - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponById/).
     */
    getCouponById({ id }?: CartPlatformApplicationValidator.GetCouponByIdParam): Promise<CartPlatformModel.CouponUpdate>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponCodeExistsParam} arg - Arg object
     * @returns {Promise<Object>} - Success response
     * @name getCouponCodeExists
     * @summary: Check if coupon is already created with coupon code
     * @description: Check if sent coupon code is already existing coupon code. As coupon code is to be unique. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponCodeExists/).
     */
    getCouponCodeExists({ code }?: CartPlatformApplicationValidator.GetCouponCodeExistsParam): Promise<any>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponOptionValuesParam} arg
     *   - Arg object
     *
     * @returns {Promise<Object>} - Success response
     * @name getCouponOptionValues
     * @summary: Get coupon options enums with display values
     * @description: Get coupon enum values for fields in valid coupon object. Used for front end to create, update and filter coupon lists via fields - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponOptionValues/).
     */
    getCouponOptionValues({}?: any): Promise<any>;
    /**
     * @param {CartPlatformApplicationValidator.GetCouponsParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.CouponsResponse>} - Success response
     * @name getCoupons
     * @summary: Get with single coupon details or coupon list
     * @description: Get coupon list with pagination - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCoupons/).
     */
    getCoupons({ pageNo, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: CartPlatformApplicationValidator.GetCouponsParam): Promise<CartPlatformModel.CouponsResponse>;
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
     * @summary: Get with single coupon details or coupon list
     * @description: Get coupon list with pagination
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
     * @returns {Promise<CartPlatformModel.CartItemCountResponse>} - Success response
     * @name getItemCount
     * @summary: Count items in the customer's cart
     * @description: Use this API to get the total number of items present in cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getItemCount/).
     */
    getItemCount({ id, buyNow }?: CartPlatformApplicationValidator.GetItemCountParam): Promise<CartPlatformModel.CartItemCountResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromosCouponConfigParam} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.ActivePromosResponse>} - Success response
     * @name getPromosCouponConfig
     * @summary: Fetch all promos that are set as active
     * @description: Use this API to get list of all the active promos/coupons. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromosCouponConfig/).
     */
    getPromosCouponConfig({ entityType, isHidden }?: CartPlatformApplicationValidator.GetPromosCouponConfigParam): Promise<CartPlatformModel.ActivePromosResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromotionByIdParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.PromotionUpdate>} - Success response
     * @name getPromotionById
     * @summary: Get with single promotion details or promotion list
     * @description: Get single promotion details with `id` in path param - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotionById/).
     */
    getPromotionById({ id }?: CartPlatformApplicationValidator.GetPromotionByIdParam): Promise<CartPlatformModel.PromotionUpdate>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromotionCodeExistsParam} arg
     *   - Arg object
     *
     * @returns {Promise<Object>} - Success response
     * @name getPromotionCodeExists
     * @summary: Check if promotion is already created with promotion code
     * @description: Check if sent promotion code is already existing promotion code. As promotion code is to be unique. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotionCodeExists/).
     */
    getPromotionCodeExists({ code }?: CartPlatformApplicationValidator.GetPromotionCodeExistsParam): Promise<any>;
    /**
     * @param {CartPlatformApplicationValidator.GetPromotionsParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.PromotionsResponse>} - Success response
     * @name getPromotions
     * @summary: Get promotion list
     * @description: Get promotion list with pagination - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotions/).
     */
    getPromotions({ pageNo, pageSize, q, isActive, promoGroup, promotionType, fpPanel, promotionId, }?: CartPlatformApplicationValidator.GetPromotionsParam): Promise<CartPlatformModel.PromotionsResponse>;
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
     * @summary: Get promotion list
     * @description: Get promotion list with pagination
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
     * @returns {Promise<CartPlatformModel.PlatformCartShipmentsResponse>} -
     *   Success response
     * @name getShipments
     * @summary: Get delivery date and options before checkout
     * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getShipments/).
     */
    getShipments({ pickAtStoreUid, orderingStoreId, i, p, id, addressId, areaCode, orderType, }?: CartPlatformApplicationValidator.GetShipmentsParam): Promise<CartPlatformModel.PlatformCartShipmentsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.GetStoreAddressByUidParam} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.StoreDetailsResponse>} - Success response
     * @name getStoreAddressByUid
     * @summary: Get list of stores for give uids
     * @description: Use this API to get the store details by entering the unique identifier of the pickup stores shown in the response of available-delivery-mode API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getStoreAddressByUid/).
     */
    getStoreAddressByUid({ storeUid }?: CartPlatformApplicationValidator.GetStoreAddressByUidParam): Promise<CartPlatformModel.StoreDetailsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.OverrideCartParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.OverrideCheckoutResponse>} - Success response
     * @name overrideCart
     * @summary: Create Fynd order with overriding cart details
     * @description: Generate Fynd order while overriding cart details sent with provided `cart_items` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/overrideCart/).
     */
    overrideCart({ body }?: CartPlatformApplicationValidator.OverrideCartParam): Promise<CartPlatformModel.OverrideCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformAddItemsParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.AddCartDetailResponse>} - Success response
     * @name platformAddItems
     * @summary: Add items to cart
     * @description: Use this API to add items to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformAddItems/).
     */
    platformAddItems({ body, i, b, buyNow, id }?: CartPlatformApplicationValidator.PlatformAddItemsParam): Promise<CartPlatformModel.AddCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformCheckoutCartParam} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.CartCheckoutResponse>} - Success response
     * @name platformCheckoutCart
     * @summary: Checkout all items in the cart
     * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be generated directly, whereas for other checkout modes, user will be redirected to a payment gateway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformCheckoutCart/).
     */
    platformCheckoutCart({ body, id }?: CartPlatformApplicationValidator.PlatformCheckoutCartParam): Promise<CartPlatformModel.CartCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformCheckoutCartV2Param} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.CartCheckoutResponse>} - Success response
     * @name platformCheckoutCartV2
     * @summary: Checkout all items in the cart
     * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformCheckoutCartV2/).
     */
    platformCheckoutCartV2({ body, id }?: CartPlatformApplicationValidator.PlatformCheckoutCartV2Param): Promise<CartPlatformModel.CartCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.PlatformUpdateCartParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.UpdateCartDetailResponse>} - Success response
     * @name platformUpdateCart
     * @summary: Update items in the customer 's cart using cart id
     * @description: Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs operation Operation for current api call. update_item for update items. remove_item for removing items.item_id "/platform/content/v1/products/" item_size "/platform/content/v1/products/:slug/sizes/" quantity  item quantity (must be greater than or equal to 1) article_id "/content​/v1​/products​/:identifier​/sizes​/price​/" item_index item position in the cart (must be greater than or equal to 0) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformUpdateCart/).
     */
    platformUpdateCart({ body, id, i, b, buyNow }?: CartPlatformApplicationValidator.PlatformUpdateCartParam): Promise<CartPlatformModel.UpdateCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.RemoveAddressParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.DeleteAddressResponse>} - Success response
     * @name removeAddress
     * @summary: Remove address associated with an account
     * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/removeAddress/).
     */
    removeAddress({ id, userId }?: CartPlatformApplicationValidator.RemoveAddressParam): Promise<CartPlatformModel.DeleteAddressResponse>;
    /**
     * @param {CartPlatformApplicationValidator.RemoveCouponParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name removeCoupon
     * @summary: Remove Applied Coupon for platform pos user
     * @description: Remove Coupon applied on the cart by passing uid in request body. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/removeCoupon/).
     */
    removeCoupon({ uid, buyNow }?: CartPlatformApplicationValidator.RemoveCouponParam): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.RemovePriceAdjustmentParam} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name removePriceAdjustment
     * @summary: Remove price adjustment
     * @description: Remove price adjustment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/removePriceAdjustment/).
     */
    removePriceAdjustment({ id }?: CartPlatformApplicationValidator.RemovePriceAdjustmentParam): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.SelectAddressParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name selectAddress
     * @summary: Select an address from available addresses
     * @description: Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `PlatformSelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. address_id billing_address_id uid - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/selectAddress/).
     */
    selectAddress({ body, cartId, buyNow, i, b }?: CartPlatformApplicationValidator.SelectAddressParam): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.SelectPaymentModeParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name selectPaymentMode
     * @summary: Update cart payment
     * @description: Use this API to update cart payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/selectPaymentMode/).
     */
    selectPaymentMode({ body, id, buyNow, orderType }?: CartPlatformApplicationValidator.SelectPaymentModeParam): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.SelectPaymentModeV2Param} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name selectPaymentModeV2
     * @summary: Update cart payment
     * @description: Use this API to update cart payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/selectPaymentModeV2/).
     */
    selectPaymentModeV2({ body, id, buyNow, orderType }?: CartPlatformApplicationValidator.SelectPaymentModeV2Param): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateAddressParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.UpdateAddressResponse>} - Success response
     * @name updateAddress
     * @summary: Update address added to an account
     * @description: Use this API to update an existing address in the account. Request object should contain attributes mentioned in Address can be updated. These attributes are:is_default_address landmark area pincode email address_type name address_id address - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateAddress/).
     */
    updateAddress({ id, body }?: CartPlatformApplicationValidator.UpdateAddressParam): Promise<CartPlatformModel.UpdateAddressResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.UpdateCartDetailResponse>} - Success response
     * @name updateCart
     * @summary: Update items in the abandoned cart
     * @description: Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs operation Operation for current api call.update_item for update items. remove_item for removing items. item_id "/platform/content/v1/products/" "/platform/content/v1/products/:slug/sizes/" quantity item quantity (must be greater than or equal to 1) article_id "/content​/v1​/products​/:identifier​/sizes​/price​/"  item position in the cart (must be greater than or equal to 0) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCart/).
     */
    updateCart({ cartId, body, b }?: CartPlatformApplicationValidator.UpdateCartParam): Promise<CartPlatformModel.UpdateCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartMetaParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartMetaResponse>} - Success response
     * @name updateCartMeta
     * @summary: Update the cart meta for platform pos user
     * @description: Use this API to update cart meta like checkout_mode and gstin. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartMeta/).
     */
    updateCartMeta({ body, id, buyNow }?: CartPlatformApplicationValidator.UpdateCartMetaParam): Promise<CartPlatformModel.CartMetaResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartMetaConfigParam} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.CartMetaConfigUpdate>} - Success response
     * @name updateCartMetaConfig
     * @summary: Update cart meta configuration
     * @description: Update cart meta configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartMetaConfig/).
     */
    updateCartMetaConfig({ cartMetaId, body }?: CartPlatformApplicationValidator.UpdateCartMetaConfigParam): Promise<CartPlatformModel.CartMetaConfigUpdate>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartUserParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.UserCartMappingResponse>} - Success response
     * @name updateCartUser
     * @summary: Update user id for store os customer
     * @description: Update user id for store os customer after creating customer - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartUser/).
     */
    updateCartUser({ body, id }?: CartPlatformApplicationValidator.UpdateCartUserParam): Promise<CartPlatformModel.UserCartMappingResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCartWithSharedItemsParam} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.SharedCartResponse>} - Success response
     * @name updateCartWithSharedItems
     * @summary: Merge or replace existing cart
     * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartWithSharedItems/).
     */
    updateCartWithSharedItems({ token, action, cartId }?: CartPlatformApplicationValidator.UpdateCartWithSharedItemsParam): Promise<CartPlatformModel.SharedCartResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCouponParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name updateCoupon
     * @summary: Update existing coupon configuration
     * @description: Update coupon with id sent in `id` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCoupon/).
     */
    updateCoupon({ id, body }?: CartPlatformApplicationValidator.UpdateCouponParam): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateCouponPartiallyParam} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name updateCouponPartially
     * @summary: Update coupon archive state and schedule
     * @description: Update archive/unarchive and change schedule for coupon - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCouponPartially/).
     */
    updateCouponPartially({ id, body }?: CartPlatformApplicationValidator.UpdateCouponPartiallyParam): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.UpdatePriceAdjustmentParam} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.PriceAdjustmentResponse>} - Success response
     * @name updatePriceAdjustment
     * @summary: Update price adjustment configuration
     * @description: Update price adjustment configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updatePriceAdjustment/).
     */
    updatePriceAdjustment({ id, body }?: CartPlatformApplicationValidator.UpdatePriceAdjustmentParam): Promise<CartPlatformModel.PriceAdjustmentResponse>;
    /**
     * @param {CartPlatformApplicationValidator.UpdatePromotionParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.PromotionUpdate>} - Success response
     * @name updatePromotion
     * @summary: Update existing promotion configuration
     * @description: Update promotion with id sent in `id` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updatePromotion/).
     */
    updatePromotion({ id, body }?: CartPlatformApplicationValidator.UpdatePromotionParam): Promise<CartPlatformModel.PromotionUpdate>;
    /**
     * @param {CartPlatformApplicationValidator.UpdatePromotionPartiallyParam} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name updatePromotionPartially
     * @summary: Update promotion publish state and schedule
     * @description: Update publish/unpublish and change schedule for promotion - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updatePromotionPartially/).
     */
    updatePromotionPartially({ id, body }?: CartPlatformApplicationValidator.UpdatePromotionPartiallyParam): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.UpdateShipmentsParam} arg - Arg object
     * @returns {Promise<CartPlatformModel.PlatformCartShipmentsResponse>} -
     *   Success response
     * @name updateShipments
     * @summary: Update shipment delivery type and quantity before checkout
     * @description: Use this API to update the delivery type and quantity as per customer's preference for either store pick-up or home-delivery. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateShipments/).
     */
    updateShipments({ body, i, p, id, addressId, areaCode, orderType, }?: CartPlatformApplicationValidator.UpdateShipmentsParam): Promise<CartPlatformModel.PlatformCartShipmentsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.ValidateCouponForPaymentParam} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.PaymentCouponValidate>} - Success response
     * @name validateCouponForPayment
     * @summary: Verify the coupon eligibility against the payment mode
     * @description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/validateCouponForPayment/).
     */
    validateCouponForPayment({ id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, }?: CartPlatformApplicationValidator.ValidateCouponForPaymentParam): Promise<CartPlatformModel.PaymentCouponValidate>;
}
import CartPlatformApplicationValidator = require("./CartPlatformApplicationValidator");
import CartPlatformModel = require("./CartPlatformModel");
import Paginator = require("../../common/Paginator");
