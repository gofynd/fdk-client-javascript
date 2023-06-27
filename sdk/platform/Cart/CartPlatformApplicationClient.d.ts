export = Cart;
declare class Cart {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {CartPlatformApplicationValidator.addAddress} arg - Arg object
     * @returns {Promise<CartPlatformModel.SaveAddressResponse>} - Success response
     * @name addAddress
     * @summary: Add address to an account
     * @description: Use this API to add an address to an account.
     */
    addAddress({ body }?: CartPlatformApplicationValidator.addAddress): Promise<CartPlatformModel.SaveAddressResponse>;
    /**
     * @param {CartPlatformApplicationValidator.addItems} arg - Arg object
     * @returns {Promise<CartPlatformModel.AddCartDetailResponse>} - Success response
     * @name addItems
     * @summary: Add items to abandoned cart
     * @description: Use this API to add items to the abandoned cart.
     */
    addItems({ cartId, body, b, userId }?: CartPlatformApplicationValidator.addItems): Promise<CartPlatformModel.AddCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.applyCoupon} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name applyCoupon
     * @summary: Apply Coupon for platform pos user
     * @description: Use this API to apply coupons on items in the cart.
     */
    applyCoupon({ body, i, b, p, id, buyNow }?: CartPlatformApplicationValidator.applyCoupon): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.checkCartServiceability} arg - Arg object
     * @returns {Promise<CartPlatformModel.OpenApiCartServiceabilityResponse>}
     *   - Success response
     *
     * @name checkCartServiceability
     * @summary: Check Pincode Serviceability
     * @description: Check Pincode serviceability for cart items provided in `cart_items` and address pincode in `shipping_address`
     */
    checkCartServiceability({ body }?: CartPlatformApplicationValidator.checkCartServiceability): Promise<CartPlatformModel.OpenApiCartServiceabilityResponse>;
    /**
     * @param {CartPlatformApplicationValidator.checkoutCart} arg - Arg object
     * @returns {Promise<CartPlatformModel.OpenApiCheckoutResponse>} - Success response
     * @name checkoutCart
     * @summary: Create Fynd order with cart details
     * @description: Generate Fynd order for cart details send with provided `cart_items`
     */
    checkoutCart({ body }?: CartPlatformApplicationValidator.checkoutCart): Promise<CartPlatformModel.OpenApiCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.createCartDynamicInjection} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.CartDynamicInjectionResponse>} -
     *   Success response
     * @name createCartDynamicInjection
     * @summary: Create new cart dynamic injection
     * @description: Create new cart dynamic injection
     */
    createCartDynamicInjection({ body }?: CartPlatformApplicationValidator.createCartDynamicInjection): Promise<CartPlatformModel.CartDynamicInjectionResponse>;
    /**
     * @param {CartPlatformApplicationValidator.createCartMetaConfig} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartMetaConfigAdd>} - Success response
     * @name createCartMetaConfig
     * @summary: Create new cart meta configuration
     * @description: Create new cart meta configuration
     */
    createCartMetaConfig({ body }?: CartPlatformApplicationValidator.createCartMetaConfig): Promise<CartPlatformModel.CartMetaConfigAdd>;
    /**
     * @param {CartPlatformApplicationValidator.createCoupon} arg - Arg object
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name createCoupon
     * @summary: Create new coupon
     * @description: Create new coupon
     */
    createCoupon({ body }?: CartPlatformApplicationValidator.createCoupon): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.createPromotion} arg - Arg object
     * @returns {Promise<CartPlatformModel.PromotionAdd>} - Success response
     * @name createPromotion
     * @summary: Create new promotion
     * @description: Create new promotion
     */
    createPromotion({ body }?: CartPlatformApplicationValidator.createPromotion): Promise<CartPlatformModel.PromotionAdd>;
    /**
     * @param {CartPlatformApplicationValidator.deleteCart} arg - Arg object
     * @returns {Promise<CartPlatformModel.DeleteCartDetailResponse>} - Success response
     * @name deleteCart
     * @summary: Delete cart once user made successful checkout
     * @description: Use this API to delete the cart.
     */
    deleteCart({ body, id }?: CartPlatformApplicationValidator.deleteCart): Promise<CartPlatformModel.DeleteCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.fetchAndvalidateCartItems} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.OpenapiCartDetailsResponse>} - Success response
     * @name fetchAndvalidateCartItems
     * @summary: Fetch Cart Details
     * @description: Get all the details of cart for a list of provided `cart_items`
     */
    fetchAndvalidateCartItems({ body }?: CartPlatformApplicationValidator.fetchAndvalidateCartItems): Promise<CartPlatformModel.OpenapiCartDetailsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.fetchCartMetaConfig} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartMetaConfigAdd>} - Success response
     * @name fetchCartMetaConfig
     * @summary: Fetch cart meta configuration
     * @description: Fetch cart meta configuration
     */
    fetchCartMetaConfig({}?: any): Promise<CartPlatformModel.CartMetaConfigAdd>;
    /**
     * @param {CartPlatformApplicationValidator.getAbandonedCart} arg - Arg object
     * @returns {Promise<CartPlatformModel.AbandonedCartResponse>} - Success response
     * @name getAbandonedCart
     * @summary: Get with abandoned cart list
     * @description: Get abandoned cart list with pagination
     */
    getAbandonedCart({ userId, pageNo, pageSize, fromDate, toDate, anonymousCart, lastId, sortOn, }?: CartPlatformApplicationValidator.getAbandonedCart): Promise<CartPlatformModel.AbandonedCartResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {string} [arg.userId] -
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
    getAbandonedCartPaginator({ companyId, applicationId, userId, pageSize, fromDate, toDate, anonymousCart, lastId, sortOn, }?: {
        companyId: string;
        applicationId: string;
        userId?: string;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
        anonymousCart?: boolean;
        lastId?: string;
        sortOn?: string;
    }): Paginator<CartPlatformModel.AbandonedCartResponse>;
    /**
     * @param {CartPlatformApplicationValidator.getAbandonedCartDetails} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name getAbandonedCartDetails
     * @summary: Fetch all items added to the cart
     * @description: Use this API to get details of all the items added to a cart.
     */
    getAbandonedCartDetails({ userId, id, i, b }?: CartPlatformApplicationValidator.getAbandonedCartDetails): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.getAddressById} arg - Arg object
     * @returns {Promise<CartPlatformModel.PlatformAddress>} - Success response
     * @name getAddressById
     * @summary: Fetch a single address by its ID
     * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `PlatformAddress`. Attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, }?: CartPlatformApplicationValidator.getAddressById): Promise<CartPlatformModel.PlatformAddress>;
    /**
     * @param {CartPlatformApplicationValidator.getAddresses} arg - Arg object
     * @returns {Promise<CartPlatformModel.PlatformGetAddressesResponse>} -
     *   Success response
     * @name getAddresses
     * @summary: Fetch address
     * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     */
    getAddresses({ cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, }?: CartPlatformApplicationValidator.getAddresses): Promise<CartPlatformModel.PlatformGetAddressesResponse>;
    /**
     * @param {CartPlatformApplicationValidator.getAppCoupons} arg - Arg object
     * @returns {Promise<CartPlatformModel.GetCouponResponse>} - Success response
     * @name getAppCoupons
     * @summary: Fetch Coupon
     * @description: Use this API to get a list of available coupons along with their details.
     */
    getAppCoupons({ id, buyNow }?: CartPlatformApplicationValidator.getAppCoupons): Promise<CartPlatformModel.GetCouponResponse>;
    /**
     * @param {CartPlatformApplicationValidator.getAvailableDeliveryModes} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.CartDeliveryModesResponse>} - Success response
     * @name getAvailableDeliveryModes
     * @summary: Get available delivery modes for cart
     * @description: Use this API to get the delivery modes (home-delivery/store-pickup) along with a list of pickup stores available for a given cart at a given PIN Code. User can then view the address of a pickup store with the help of store-address API.
     */
    getAvailableDeliveryModes({ areaCode, id }?: CartPlatformApplicationValidator.getAvailableDeliveryModes): Promise<CartPlatformModel.CartDeliveryModesResponse>;
    /**
     * @param {CartPlatformApplicationValidator.getCart} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name getCart
     * @summary: Fetch all items added to the customer cart using cart id
     * @description: Use this API to get details of all the items added to a cart.
     */
    getCart({ id, userId, i, b, assignCardId, buyNow }?: CartPlatformApplicationValidator.getCart): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.getCartList} arg - Arg object
     * @returns {Promise<CartPlatformModel.MultiCartResponse>} - Success response
     * @name getCartList
     * @summary: Get cart list for store os user
     * @description: Get all carts for the store os user which is created for customer
     */
    getCartList({ fromDate, toDate, filterOn }?: CartPlatformApplicationValidator.getCartList): Promise<CartPlatformModel.MultiCartResponse>;
    /**
     * @param {CartPlatformApplicationValidator.getCartShareLink} arg - Arg object
     * @returns {Promise<CartPlatformModel.GetShareCartLinkResponse>} - Success response
     * @name getCartShareLink
     * @summary: Generate token for sharing the cart
     * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.
     */
    getCartShareLink({ body }?: CartPlatformApplicationValidator.getCartShareLink): Promise<CartPlatformModel.GetShareCartLinkResponse>;
    /**
     * @param {CartPlatformApplicationValidator.getCartSharedItems} arg - Arg object
     * @returns {Promise<CartPlatformModel.SharedCartResponse>} - Success response
     * @name getCartSharedItems
     * @summary: Get details of a shared cart
     * @description: Use this API to get the shared cart details as per the token generated using the share-cart API.
     */
    getCartSharedItems({ token }?: CartPlatformApplicationValidator.getCartSharedItems): Promise<CartPlatformModel.SharedCartResponse>;
    /**
     * @param {CartPlatformApplicationValidator.getCouponById} arg - Arg object
     * @returns {Promise<CartPlatformModel.CouponUpdate>} - Success response
     * @name getCouponById
     * @summary: Get with single coupon details or coupon list
     * @description: Get single coupon details with `id` in path param
     */
    getCouponById({ id }?: CartPlatformApplicationValidator.getCouponById): Promise<CartPlatformModel.CouponUpdate>;
    /**
     * @param {CartPlatformApplicationValidator.getCouponCodeExists} arg - Arg object
     * @returns {Promise<Object>} - Success response
     * @name getCouponCodeExists
     * @summary: Check if coupon is already created with coupon code
     * @description: Check if sent coupon code is already existing coupon code. As coupon code is to be unique.
     */
    getCouponCodeExists({ code }?: CartPlatformApplicationValidator.getCouponCodeExists): Promise<any>;
    /**
     * @param {CartPlatformApplicationValidator.getCouponOptionValues} arg - Arg object
     * @returns {Promise<Object>} - Success response
     * @name getCouponOptionValues
     * @summary: Get coupon options enums with display values
     * @description: Get coupon enum values for fields in valid coupon object. Used for front end to create, update and filter coupon lists via fields
     */
    getCouponOptionValues({}?: any): Promise<any>;
    /**
     * @param {CartPlatformApplicationValidator.getCoupons} arg - Arg object
     * @returns {Promise<CartPlatformModel.CouponsResponse>} - Success response
     * @name getCoupons
     * @summary: Get with single coupon details or coupon list
     * @description: Get coupon list with pagination
     */
    getCoupons({ pageNo, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: CartPlatformApplicationValidator.getCoupons): Promise<CartPlatformModel.CouponsResponse>;
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
     * @param {CartPlatformApplicationValidator.getItemCount} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartItemCountResponse>} - Success response
     * @name getItemCount
     * @summary: Count items in the customer's cart
     * @description: Use this API to get the total number of items present in cart.
     */
    getItemCount({ id, buyNow }?: CartPlatformApplicationValidator.getItemCount): Promise<CartPlatformModel.CartItemCountResponse>;
    /**
     * @param {CartPlatformApplicationValidator.getPromosCouponConfig} arg - Arg object
     * @returns {Promise<CartPlatformModel.ActivePromosResponse>} - Success response
     * @name getPromosCouponConfig
     * @summary: Fetch all promos that are set as active
     * @description: Use this API to get list of all the active promos/coupons.
     */
    getPromosCouponConfig({ entityType, isHidden }?: CartPlatformApplicationValidator.getPromosCouponConfig): Promise<CartPlatformModel.ActivePromosResponse>;
    /**
     * @param {CartPlatformApplicationValidator.getPromotionById} arg - Arg object
     * @returns {Promise<CartPlatformModel.PromotionUpdate>} - Success response
     * @name getPromotionById
     * @summary: Get with single promotion details or promotion list
     * @description: Get single promotion details with `id` in path param
     */
    getPromotionById({ id }?: CartPlatformApplicationValidator.getPromotionById): Promise<CartPlatformModel.PromotionUpdate>;
    /**
     * @param {CartPlatformApplicationValidator.getPromotionCodeExists} arg - Arg object
     * @returns {Promise<Object>} - Success response
     * @name getPromotionCodeExists
     * @summary: Check if promotion is already created with promotion code
     * @description: Check if sent promotion code is already existing promotion code. As promotion code is to be unique.
     */
    getPromotionCodeExists({ code }?: CartPlatformApplicationValidator.getPromotionCodeExists): Promise<any>;
    /**
     * @param {CartPlatformApplicationValidator.getPromotions} arg - Arg object
     * @returns {Promise<CartPlatformModel.PromotionsResponse>} - Success response
     * @name getPromotions
     * @summary: Get promotion list
     * @description: Get promotion list with pagination
     */
    getPromotions({ pageNo, pageSize, q, isActive, promoGroup, promotionType, fpPanel, promotionId, }?: CartPlatformApplicationValidator.getPromotions): Promise<CartPlatformModel.PromotionsResponse>;
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
     * @param {CartPlatformApplicationValidator.getShipments} arg - Arg object
     * @returns {Promise<CartPlatformModel.PlatformCartShipmentsResponse>} -
     *   Success response
     * @name getShipments
     * @summary: Get delivery date and options before checkout
     * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.
     */
    getShipments({ pickAtStoreUid, orderingStoreId, i, p, id, addressId, areaCode, orderType, }?: CartPlatformApplicationValidator.getShipments): Promise<CartPlatformModel.PlatformCartShipmentsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.getStoreAddressByUid} arg - Arg object
     * @returns {Promise<CartPlatformModel.StoreDetailsResponse>} - Success response
     * @name getStoreAddressByUid
     * @summary: Get list of stores for give uids
     * @description: Use this API to get the store details by entering the unique identifier of the pickup stores shown in the response of available-delivery-mode API.
     */
    getStoreAddressByUid({ storeUid }?: CartPlatformApplicationValidator.getStoreAddressByUid): Promise<CartPlatformModel.StoreDetailsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.overrideCart} arg - Arg object
     * @returns {Promise<CartPlatformModel.OverrideCheckoutResponse>} - Success response
     * @name overrideCart
     * @summary: Create Fynd order with overriding cart details
     * @description: Generate Fynd order while overriding cart details sent with provided `cart_items`
     */
    overrideCart({ body }?: CartPlatformApplicationValidator.overrideCart): Promise<CartPlatformModel.OverrideCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.platformAddItems} arg - Arg object
     * @returns {Promise<CartPlatformModel.AddCartDetailResponse>} - Success response
     * @name platformAddItems
     * @summary: Add items to cart
     * @description: Use this API to add items to the cart.
     */
    platformAddItems({ body, i, b, buyNow, id }?: CartPlatformApplicationValidator.platformAddItems): Promise<CartPlatformModel.AddCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.platformCheckoutCart} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartCheckoutResponse>} - Success response
     * @name platformCheckoutCart
     * @summary: Checkout all items in the cart
     * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be generated directly, whereas for other checkout modes, user will be redirected to a payment gateway.
     */
    platformCheckoutCart({ body, id }?: CartPlatformApplicationValidator.platformCheckoutCart): Promise<CartPlatformModel.CartCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.platformCheckoutCartV2} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartCheckoutResponse>} - Success response
     * @name platformCheckoutCartV2
     * @summary: Checkout all items in the cart
     * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway.
     */
    platformCheckoutCartV2({ body, id }?: CartPlatformApplicationValidator.platformCheckoutCartV2): Promise<CartPlatformModel.CartCheckoutResponse>;
    /**
     * @param {CartPlatformApplicationValidator.platformUpdateCart} arg - Arg object
     * @returns {Promise<CartPlatformModel.UpdateCartDetailResponse>} - Success response
     * @name platformUpdateCart
     * @summary: Update items in the customer 's cart using cart id
     * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     */
    platformUpdateCart({ body, id, i, b, buyNow }?: CartPlatformApplicationValidator.platformUpdateCart): Promise<CartPlatformModel.UpdateCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.removeAddress} arg - Arg object
     * @returns {Promise<CartPlatformModel.DeleteAddressResponse>} - Success response
     * @name removeAddress
     * @summary: Remove address associated with an account
     * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.
     */
    removeAddress({ id, userId }?: CartPlatformApplicationValidator.removeAddress): Promise<CartPlatformModel.DeleteAddressResponse>;
    /**
     * @param {CartPlatformApplicationValidator.removeCartDynamicInjection} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name removeCartDynamicInjection
     * @summary: Remove cart dynamic injection
     * @description: Remove cart dynamic injection
     */
    removeCartDynamicInjection({ id }?: CartPlatformApplicationValidator.removeCartDynamicInjection): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.removeCoupon} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name removeCoupon
     * @summary: Remove Applied Coupon for platform pos user
     * @description: Remove Coupon applied on the cart by passing uid in request body.
     */
    removeCoupon({ uid, buyNow }?: CartPlatformApplicationValidator.removeCoupon): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.selectAddress} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name selectAddress
     * @summary: Select an address from available addresses
     * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `PlatformSelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>
     */
    selectAddress({ body, cartId, buyNow, i, b }?: CartPlatformApplicationValidator.selectAddress): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.selectPaymentMode} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name selectPaymentMode
     * @summary: Update cart payment
     * @description: Use this API to update cart payment.
     */
    selectPaymentMode({ body, id, buyNow }?: CartPlatformApplicationValidator.selectPaymentMode): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.selectPaymentModeV2} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
     * @name selectPaymentModeV2
     * @summary: Update cart payment
     * @description: Use this API to update cart payment.
     */
    selectPaymentModeV2({ body, id, buyNow }?: CartPlatformApplicationValidator.selectPaymentModeV2): Promise<CartPlatformModel.CartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.updateAddress} arg - Arg object
     * @returns {Promise<CartPlatformModel.UpdateAddressResponse>} - Success response
     * @name updateAddress
     * @summary: Update address added to an account
     * @description: <p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
     */
    updateAddress({ id, body }?: CartPlatformApplicationValidator.updateAddress): Promise<CartPlatformModel.UpdateAddressResponse>;
    /**
     * @param {CartPlatformApplicationValidator.updateCart} arg - Arg object
     * @returns {Promise<CartPlatformModel.UpdateCartDetailResponse>} - Success response
     * @name updateCart
     * @summary: Update items in the abandoned cart
     * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     */
    updateCart({ cartId, body, b, userId }?: CartPlatformApplicationValidator.updateCart): Promise<CartPlatformModel.UpdateCartDetailResponse>;
    /**
     * @param {CartPlatformApplicationValidator.updateCartDynamicInjection} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.CartDynamicInjectionResponse>} -
     *   Success response
     * @name updateCartDynamicInjection
     * @summary: Update cart injection configuration
     * @description: Update cart injection configuration
     */
    updateCartDynamicInjection({ id, body }?: CartPlatformApplicationValidator.updateCartDynamicInjection): Promise<CartPlatformModel.CartDynamicInjectionResponse>;
    /**
     * @param {CartPlatformApplicationValidator.updateCartMeta} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartMetaResponse>} - Success response
     * @name updateCartMeta
     * @summary: Update the cart meta for platform pos user
     * @description: Use this API to update cart meta like checkout_mode and gstin.
     */
    updateCartMeta({ body, id, buyNow }?: CartPlatformApplicationValidator.updateCartMeta): Promise<CartPlatformModel.CartMetaResponse>;
    /**
     * @param {CartPlatformApplicationValidator.updateCartMetaConfig} arg - Arg object
     * @returns {Promise<CartPlatformModel.CartMetaConfigUpdate>} - Success response
     * @name updateCartMetaConfig
     * @summary: Update cart meta configuration
     * @description: Update cart meta configuration
     */
    updateCartMetaConfig({ cartMetaId, body }?: CartPlatformApplicationValidator.updateCartMetaConfig): Promise<CartPlatformModel.CartMetaConfigUpdate>;
    /**
     * @param {CartPlatformApplicationValidator.updateCartUser} arg - Arg object
     * @returns {Promise<CartPlatformModel.UserCartMappingResponse>} - Success response
     * @name updateCartUser
     * @summary: Update user id for store os customer
     * @description: Update user id for store os customer after creating customer
     */
    updateCartUser({ body, id }?: CartPlatformApplicationValidator.updateCartUser): Promise<CartPlatformModel.UserCartMappingResponse>;
    /**
     * @param {CartPlatformApplicationValidator.updateCartWithSharedItems} arg
     *   - Arg object
     *
     * @returns {Promise<CartPlatformModel.SharedCartResponse>} - Success response
     * @name updateCartWithSharedItems
     * @summary: Merge or replace existing cart
     * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.
     */
    updateCartWithSharedItems({ token, action, cartId }?: CartPlatformApplicationValidator.updateCartWithSharedItems): Promise<CartPlatformModel.SharedCartResponse>;
    /**
     * @param {CartPlatformApplicationValidator.updateCoupon} arg - Arg object
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name updateCoupon
     * @summary: Update existing coupon configuration
     * @description: Update coupon with id sent in `id`
     */
    updateCoupon({ id, body }?: CartPlatformApplicationValidator.updateCoupon): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.updateCouponPartially} arg - Arg object
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name updateCouponPartially
     * @summary: Update coupon archive state and schedule
     * @description: Update archive/unarchive and change schedule for coupon
     */
    updateCouponPartially({ id, body }?: CartPlatformApplicationValidator.updateCouponPartially): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.updatePromotion} arg - Arg object
     * @returns {Promise<CartPlatformModel.PromotionUpdate>} - Success response
     * @name updatePromotion
     * @summary: Update existing promotion configuration
     * @description: Update promotion with id sent in `id`
     */
    updatePromotion({ id, body }?: CartPlatformApplicationValidator.updatePromotion): Promise<CartPlatformModel.PromotionUpdate>;
    /**
     * @param {CartPlatformApplicationValidator.updatePromotionPartially} arg - Arg object
     * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
     * @name updatePromotionPartially
     * @summary: Update promotion publish state and schedule
     * @description: Update publish/unpublish and change schedule for promotion
     */
    updatePromotionPartially({ id, body }?: CartPlatformApplicationValidator.updatePromotionPartially): Promise<CartPlatformModel.SuccessMessage>;
    /**
     * @param {CartPlatformApplicationValidator.updateShipments} arg - Arg object
     * @returns {Promise<CartPlatformModel.PlatformCartShipmentsResponse>} -
     *   Success response
     * @name updateShipments
     * @summary: Update shipment delivery type and quantity before checkout
     * @description: Use this API to update the delivery type and quantity as per customer's preference for either store pick-up or home-delivery.
     */
    updateShipments({ body, i, p, id, addressId, areaCode, orderType, }?: CartPlatformApplicationValidator.updateShipments): Promise<CartPlatformModel.PlatformCartShipmentsResponse>;
    /**
     * @param {CartPlatformApplicationValidator.validateCouponForPayment} arg - Arg object
     * @returns {Promise<CartPlatformModel.PaymentCouponValidate>} - Success response
     * @name validateCouponForPayment
     * @summary: Verify the coupon eligibility against the payment mode
     * @description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc.
     */
    validateCouponForPayment({ id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, }?: CartPlatformApplicationValidator.validateCouponForPayment): Promise<CartPlatformModel.PaymentCouponValidate>;
}
import CartPlatformApplicationValidator = require("./CartPlatformApplicationValidator");
import CartPlatformModel = require("./CartPlatformModel");
import Paginator = require("../../common/Paginator");
