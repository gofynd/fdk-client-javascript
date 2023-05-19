export = Cart;
declare class Cart {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {PlatformAddress} arg.body
     * @returns {Promise<SaveAddressResponse>} - Success response
     * @summary: Add address to an account
     * @description: Use this API to add an address to an account.
     */
    addAddress({ body }?: {
        body: PlatformAddress;
    }): Promise<SaveAddressResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.cartId - Current Cart _id
     * @param {boolean} [arg.b] -
     * @param {AddCartRequest} arg.body
     * @returns {Promise<AddCartDetailResponse>} - Success response
     * @summary: Add items to abandoned cart
     * @description: Use this API to add items to the abandoned cart.
     */
    addItems({ cartId, body, b }?: {
        cartId: string;
        b?: boolean;
        body: AddCartRequest;
    }): Promise<AddCartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {boolean} [arg.p] -
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @param {ApplyCouponRequest} arg.body
     * @returns {Promise<CartDetailResponse>} - Success response
     * @summary: Apply Coupon for platform pos user
     * @description: Use this API to apply coupons on items in the cart.
     */
    applyCoupon({ body, i, b, p, id, buyNow }?: {
        i?: boolean;
        b?: boolean;
        p?: boolean;
        id?: string;
        buyNow?: boolean;
        body: ApplyCouponRequest;
    }): Promise<CartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OpenApiCartServiceabilityRequest} arg.body
     * @returns {Promise<OpenApiCartServiceabilityResponse>} - Success response
     * @summary: Check Pincode Serviceability
     * @description: Check Pincode serviceability for cart items provided in `cart_items` and address pincode in `shipping_address`
     */
    checkCartServiceability({ body }?: {
        body: OpenApiCartServiceabilityRequest;
    }): Promise<OpenApiCartServiceabilityResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OpenApiPlatformCheckoutReq} arg.body
     * @returns {Promise<OpenApiCheckoutResponse>} - Success response
     * @summary: Create Fynd order with cart details
     * @description: Generate Fynd order for cart details send with provided `cart_items`
     */
    checkoutCart({ body }?: {
        body: OpenApiPlatformCheckoutReq;
    }): Promise<OpenApiCheckoutResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CouponAdd} arg.body
     * @returns {Promise<SuccessMessage>} - Success response
     * @summary: Create new coupon
     * @description: Create new coupon
     */
    createCoupon({ body }?: {
        body: CouponAdd;
    }): Promise<SuccessMessage>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PromotionAdd} arg.body
     * @returns {Promise<PromotionAdd>} - Success response
     * @summary: Create new promotion
     * @description: Create new promotion
     */
    createPromotion({ body }?: {
        body: PromotionAdd;
    }): Promise<PromotionAdd>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] - The unique identifier of the cart.
     * @param {DeleteCartRequest} arg.body
     * @returns {Promise<DeleteCartDetailResponse>} - Success response
     * @summary: Delete cart once user made successful checkout
     * @description: Use this API to delete the cart.
     */
    deleteCart({ body, id }?: {
        id?: string;
        body: DeleteCartRequest;
    }): Promise<DeleteCartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OpenapiCartDetailsRequest} arg.body
     * @returns {Promise<OpenapiCartDetailsResponse>} - Success response
     * @summary: Fetch Cart Details
     * @description: Get all the details of cart for a list of provided `cart_items`
     */
    fetchAndvalidateCartItems({ body }?: {
        body: OpenapiCartDetailsRequest;
    }): Promise<OpenapiCartDetailsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {boolean} [arg.anonymousCart] -
     * @param {string} [arg.lastId] -
     * @param {string} [arg.sortOn] -
     * @returns {Promise<AbandonedCartResponse>} - Success response
     * @summary: Get with abandoned cart list
     * @description: Get abandoned cart list with pagination
     */
    getAbandonedCart({ pageNo, pageSize, fromDate, toDate, anonymousCart, lastId, sortOn, }?: {
        pageNo?: number;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
        anonymousCart?: boolean;
        lastId?: string;
        sortOn?: string;
    }): Promise<AbandonedCartResponse>;
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
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @returns {Promise<CartDetailResponse>} - Success response
     * @summary: Fetch all items added to the cart
     * @description: Use this API to get details of all the items added to a cart.
     */
    getAbandonedCartDetails({ id, i, b }?: {
        id?: string;
        i?: boolean;
        b?: boolean;
    }): Promise<CartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {string} [arg.cartId] -
     * @param {boolean} [arg.buyNow] -
     * @param {string} [arg.mobileNo] -
     * @param {string} [arg.checkoutMode] -
     * @param {string} [arg.tags] -
     * @param {boolean} [arg.isDefault] -
     * @param {string} [arg.userId] -
     * @returns {Promise<PlatformAddress>} - Success response
     * @summary: Fetch a single address by its ID
     * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `PlatformAddress`. Attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, }?: {
        id: string;
        cartId?: string;
        buyNow?: boolean;
        mobileNo?: string;
        checkoutMode?: string;
        tags?: string;
        isDefault?: boolean;
        userId?: string;
    }): Promise<PlatformAddress>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.cartId] -
     * @param {boolean} [arg.buyNow] -
     * @param {string} [arg.mobileNo] -
     * @param {string} [arg.checkoutMode] -
     * @param {string} [arg.tags] -
     * @param {boolean} [arg.isDefault] -
     * @param {string} [arg.userId] -
     * @returns {Promise<PlatformGetAddressesResponse>} - Success response
     * @summary: Fetch address
     * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     */
    getAddresses({ cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, }?: {
        cartId?: string;
        buyNow?: boolean;
        mobileNo?: string;
        checkoutMode?: string;
        tags?: string;
        isDefault?: boolean;
        userId?: string;
    }): Promise<PlatformGetAddressesResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @returns {Promise<GetCouponResponse>} - Success response
     * @summary: Fetch Coupon
     * @description: Use this API to get a list of available coupons along with their details.
     */
    getAppCoupons({ id, buyNow }?: {
        id?: string;
        buyNow?: boolean;
    }): Promise<GetCouponResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.areaCode -
     * @param {string} [arg.id] -
     * @returns {Promise<CartDeliveryModesResponse>} - Success response
     * @summary: Get available delivery modes for cart
     * @description: Use this API to get the delivery modes (home-delivery/store-pickup) along with a list of pickup stores available for a given cart at a given PIN Code. User can then view the address of a pickup store with the help of store-address API.
     */
    getAvailableDeliveryModes({ areaCode, id }?: {
        areaCode: string;
        id?: string;
    }): Promise<CartDeliveryModesResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {number} [arg.assignCardId] -
     * @param {boolean} [arg.buyNow] -
     * @returns {Promise<CartDetailResponse>} - Success response
     * @summary: Fetch all items added to the customer cart using cart id
     * @description: Use this API to get details of all the items added to a cart.
     */
    getCart({ id, i, b, assignCardId, buyNow }?: {
        id?: string;
        i?: boolean;
        b?: boolean;
        assignCardId?: number;
        buyNow?: boolean;
    }): Promise<CartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {string} [arg.filterOn] -
     * @returns {Promise<MultiCartResponse>} - Success response
     * @summary: Get cart list for store os user
     * @description: Get all carts for the store os user which is created for customer
     */
    getCartList({ fromDate, toDate, filterOn }?: {
        fromDate?: string;
        toDate?: string;
        filterOn?: string;
    }): Promise<MultiCartResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetShareCartLinkRequest} arg.body
     * @returns {Promise<GetShareCartLinkResponse>} - Success response
     * @summary: Generate token for sharing the cart
     * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.
     */
    getCartShareLink({ body }?: {
        body: GetShareCartLinkRequest;
    }): Promise<GetShareCartLinkResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.token - Token of the shared short link
     * @returns {Promise<SharedCartResponse>} - Success response
     * @summary: Get details of a shared cart
     * @description: Use this API to get the shared cart details as per the token generated using the share-cart API.
     */
    getCartSharedItems({ token }?: {
        token: string;
    }): Promise<SharedCartResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @returns {Promise<CouponUpdate>} - Success response
     * @summary: Get with single coupon details or coupon list
     * @description: Get single coupon details with `id` in path param
     */
    getCouponById({ id }?: {
        id: string;
    }): Promise<CouponUpdate>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.code] -
     * @returns {Promise<Object>} - Success response
     * @summary: Check if coupon is already created with coupon code
     * @description: Check if sent coupon code is already existing coupon code. As coupon code is to be unique.
     */
    getCouponCodeExists({ code }?: {
        code?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<Object>} - Success response
     * @summary: Get coupon options enums with display values
     * @description: Get coupon enum values for fields in valid coupon object. Used for front end to create, update and filter coupon lists via fields
     */
    getCouponOptionValues({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isArchived] -
     * @param {string} [arg.title] -
     * @param {boolean} [arg.isPublic] -
     * @param {boolean} [arg.isDisplay] -
     * @param {string} [arg.typeSlug] -
     * @param {string} [arg.code] -
     * @returns {Promise<CouponsResponse>} - Success response
     * @summary: Get with single coupon details or coupon list
     * @description: Get coupon list with pagination
     */
    getCoupons({ pageNo, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        pageNo?: number;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): Promise<CouponsResponse>;
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
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] - The unique identifier of the cart.
     * @param {boolean} [arg.buyNow] -
     * @returns {Promise<CartItemCountResponse>} - Success response
     * @summary: Count items in the customer's cart
     * @description: Use this API to get the total number of items present in cart.
     */
    getItemCount({ id, buyNow }?: {
        id?: string;
        buyNow?: boolean;
    }): Promise<CartItemCountResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ActivePromosResponse>} - Success response
     * @summary: Fetch all promos that are set as active
     * @description: Use this API to get list of all the active promos/coupons.
     */
    getPromosCouponConfig({}?: any): Promise<ActivePromosResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @returns {Promise<PromotionUpdate>} - Success response
     * @summary: Get with single promotion details or promotion list
     * @description: Get single promotion details with `id` in path param
     */
    getPromotionById({ id }?: {
        id: string;
    }): Promise<PromotionUpdate>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.code] -
     * @returns {Promise<Object>} - Success response
     * @summary: Check if promotion is already created with promotion code
     * @description: Check if sent promotion code is already existing promotion code. As promotion code is to be unique.
     */
    getPromotionCodeExists({ code }?: {
        code?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] -
     * @param {string} [arg.status] -
     * @param {string} [arg.promoGroup] -
     * @param {string} [arg.promotionType] -
     * @param {string} [arg.fpPanel] -
     * @param {string} [arg.promotionId] -
     * @returns {Promise<PromotionsResponse>} - Success response
     * @summary: Get promotion list
     * @description: Get promotion list with pagination
     */
    getPromotions({ pageNo, pageSize, q, status, promoGroup, promotionType, fpPanel, promotionId, }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
        status?: string;
        promoGroup?: string;
        promotionType?: string;
        fpPanel?: string;
        promotionId?: string;
    }): Promise<PromotionsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] -
     * @param {string} [arg.status] -
     * @param {string} [arg.promoGroup] -
     * @param {string} [arg.promotionType] -
     * @param {string} [arg.fpPanel] -
     * @param {string} [arg.promotionId] -
     * @summary: Get promotion list
     * @description: Get promotion list with pagination
     */
    getPromotionsPaginator({ companyId, applicationId, pageSize, q, status, promoGroup, promotionType, fpPanel, promotionId, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
        status?: string;
        promoGroup?: string;
        promotionType?: string;
        fpPanel?: string;
        promotionId?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pickAtStoreUid] -
     * @param {number} [arg.orderingStoreId] -
     * @param {boolean} [arg.i] - This is a boolean value. Select `true` to
     *   retrieve all the items added in the cart.
     * @param {boolean} [arg.p] - This is a boolean value. Select `true` for
     *   getting a payment option in response.
     * @param {string} [arg.id] - The unique identifier of the cart
     * @param {string} [arg.addressId] - ID allotted to the selected address
     * @param {string} [arg.areaCode] - The PIN Code of the destination address,
     *   e.g. 400059
     * @param {string} [arg.orderType] - The order type of shipment HomeDelivery
     *   - If the customer wants the order home-delivered PickAtStore - If the
     *   customer wants the handover of an order at the store itself.
     * @returns {Promise<PlatformCartShipmentsResponse>} - Success response
     * @summary: Get delivery date and options before checkout
     * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.
     */
    getShipments({ pickAtStoreUid, orderingStoreId, i, p, id, addressId, areaCode, orderType, }?: {
        pickAtStoreUid?: number;
        orderingStoreId?: number;
        i?: boolean;
        p?: boolean;
        id?: string;
        addressId?: string;
        areaCode?: string;
        orderType?: string;
    }): Promise<PlatformCartShipmentsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.storeUid -
     * @returns {Promise<StoreDetailsResponse>} - Success response
     * @summary: Get list of stores for give uids
     * @description: Use this API to get the store details by entering the unique identifier of the pickup stores shown in the response of available-delivery-mode API.
     */
    getStoreAddressByUid({ storeUid }?: {
        storeUid: number;
    }): Promise<StoreDetailsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {boolean} [arg.buyNow] -
     * @param {string} [arg.id] -
     * @param {AddCartRequest} arg.body
     * @returns {Promise<AddCartDetailResponse>} - Success response
     * @summary: Add items to cart
     * @description: Use this API to add items to the cart.
     */
    platformAddItems({ body, i, b, buyNow, id }?: {
        i?: boolean;
        b?: boolean;
        buyNow?: boolean;
        id?: string;
        body: AddCartRequest;
    }): Promise<AddCartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {PlatformCartCheckoutDetailRequest} arg.body
     * @returns {Promise<CartCheckoutResponse>} - Success response
     * @summary: Checkout all items in the cart
     * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be generated directly, whereas for other checkout modes, user will be redirected to a payment gateway.
     */
    platformCheckoutCart({ body, id }?: {
        id?: string;
        body: PlatformCartCheckoutDetailRequest;
    }): Promise<CartCheckoutResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {PlatformCartCheckoutDetailV2Request} arg.body
     * @returns {Promise<CartCheckoutResponse>} - Success response
     * @summary: Checkout all items in the cart
     * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway.
     */
    platformCheckoutCartV2({ body, id }?: {
        id?: string;
        body: PlatformCartCheckoutDetailV2Request;
    }): Promise<CartCheckoutResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {boolean} [arg.buyNow] -
     * @param {UpdateCartRequest} arg.body
     * @returns {Promise<UpdateCartDetailResponse>} - Success response
     * @summary: Update items in the customer 's cart using cart id
     * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     */
    platformUpdateCart({ body, id, i, b, buyNow }?: {
        id?: string;
        i?: boolean;
        b?: boolean;
        buyNow?: boolean;
        body: UpdateCartRequest;
    }): Promise<UpdateCartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the selected address
     * @param {string} [arg.userId] - Option to delete address for the provided user_id.
     * @returns {Promise<DeleteAddressResponse>} - Success response
     * @summary: Remove address associated with an account
     * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.
     */
    removeAddress({ id, userId }?: {
        id: string;
        userId?: string;
    }): Promise<DeleteAddressResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.uid] -
     * @param {boolean} [arg.buyNow] -
     * @returns {Promise<CartDetailResponse>} - Success response
     * @summary: Remove Applied Coupon for platform pos user
     * @description: Remove Coupon applied on the cart by passing uid in request body.
     */
    removeCoupon({ uid, buyNow }?: {
        uid?: string;
        buyNow?: boolean;
    }): Promise<CartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.cartId] -
     * @param {boolean} [arg.buyNow] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {PlatformSelectCartAddressRequest} arg.body
     * @returns {Promise<CartDetailResponse>} - Success response
     * @summary: Select an address from available addresses
     * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `PlatformSelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>
     */
    selectAddress({ body, cartId, buyNow, i, b }?: {
        cartId?: string;
        buyNow?: boolean;
        i?: boolean;
        b?: boolean;
        body: PlatformSelectCartAddressRequest;
    }): Promise<CartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @param {UpdateCartPaymentRequest} arg.body
     * @returns {Promise<CartDetailResponse>} - Success response
     * @summary: Update cart payment
     * @description: Use this API to update cart payment.
     */
    selectPaymentMode({ body, id, buyNow }?: {
        id?: string;
        buyNow?: boolean;
        body: UpdateCartPaymentRequest;
    }): Promise<CartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @param {UpdateCartPaymentRequestV2} arg.body
     * @returns {Promise<CartDetailResponse>} - Success response
     * @summary: Update cart payment
     * @description: Use this API to update cart payment.
     */
    selectPaymentModeV2({ body, id, buyNow }?: {
        id?: string;
        buyNow?: boolean;
        body: UpdateCartPaymentRequestV2;
    }): Promise<CartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the selected address
     * @param {PlatformAddress} arg.body
     * @returns {Promise<UpdateAddressResponse>} - Success response
     * @summary: Update address added to an account
     * @description: <p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
     */
    updateAddress({ id, body }?: {
        id: string;
        body: PlatformAddress;
    }): Promise<UpdateAddressResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.cartId - Current Cart _id
     * @param {boolean} [arg.b] -
     * @param {UpdateCartRequest} arg.body
     * @returns {Promise<UpdateCartDetailResponse>} - Success response
     * @summary: Update items in the abandoned cart
     * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     */
    updateCart({ cartId, body, b }?: {
        cartId: string;
        b?: boolean;
        body: UpdateCartRequest;
    }): Promise<UpdateCartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @param {PlatformCartMetaRequest} arg.body
     * @returns {Promise<CartMetaResponse>} - Success response
     * @summary: Update the cart meta for platform pos user
     * @description: Use this API to update cart meta like checkout_mode and gstin.
     */
    updateCartMeta({ body, id, buyNow }?: {
        id?: string;
        buyNow?: boolean;
        body: PlatformCartMetaRequest;
    }): Promise<CartMetaResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {UpdateUserCartMapping} arg.body
     * @returns {Promise<UserCartMappingResponse>} - Success response
     * @summary: Update user id for store os customer
     * @description: Update user id for store os customer after creating customer
     */
    updateCartUser({ body, id }?: {
        id?: string;
        body: UpdateUserCartMapping;
    }): Promise<UserCartMappingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.token - Token of the shared short link
     * @param {string} arg.action - Operation to perform on the existing cart
     *   merge or replace.
     * @param {string} [arg.cartId] -
     * @returns {Promise<SharedCartResponse>} - Success response
     * @summary: Merge or replace existing cart
     * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.
     */
    updateCartWithSharedItems({ token, action, cartId }?: {
        token: string;
        action: string;
        cartId?: string;
    }): Promise<SharedCartResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {CouponUpdate} arg.body
     * @returns {Promise<SuccessMessage>} - Success response
     * @summary: Update existing coupon configuration
     * @description: Update coupon with id sent in `id`
     */
    updateCoupon({ id, body }?: {
        id: string;
        body: CouponUpdate;
    }): Promise<SuccessMessage>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {CouponPartialUpdate} arg.body
     * @returns {Promise<SuccessMessage>} - Success response
     * @summary: Update coupon archive state and schedule
     * @description: Update archive/unarchive and change schedule for coupon
     */
    updateCouponPartially({ id, body }?: {
        id: string;
        body: CouponPartialUpdate;
    }): Promise<SuccessMessage>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {PromotionUpdate} arg.body
     * @returns {Promise<PromotionUpdate>} - Success response
     * @summary: Update existing promotion configuration
     * @description: Update promotion with id sent in `id`
     */
    updatePromotion({ id, body }?: {
        id: string;
        body: PromotionUpdate;
    }): Promise<PromotionUpdate>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {PromotionPartialUpdate} arg.body
     * @returns {Promise<SuccessMessage>} - Success response
     * @summary: Update promotion publish state and schedule
     * @description: Update publish/unpublish and change schedule for promotion
     */
    updatePromotionPartially({ id, body }?: {
        id: string;
        body: PromotionPartialUpdate;
    }): Promise<SuccessMessage>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.i] - This is a boolean value. Select `true` to
     *   retrieve all the items added in the cart.
     * @param {boolean} [arg.p] - This is a boolean value. Select `true` for
     *   getting a payment option in response.
     * @param {string} [arg.id] - The unique identifier of the cart
     * @param {string} [arg.addressId] - ID allotted to an address
     * @param {string} [arg.areaCode] - The PIN Code of the destination address,
     *   e.g. 400059
     * @param {string} [arg.orderType] - The order type of shipment HomeDelivery
     *   - If the customer wants the order home-delivered PickAtStore - If the
     *   customer wants the handover of an order at the store itself.
     * @param {UpdateCartShipmentRequest} arg.body
     * @returns {Promise<PlatformCartShipmentsResponse>} - Success response
     * @summary: Update shipment delivery type and quantity before checkout
     * @description: Use this API to update the delivery type and quantity as per customer's preference for either store pick-up or home-delivery.
     */
    updateShipments({ body, i, p, id, addressId, areaCode, orderType, }?: {
        i?: boolean;
        p?: boolean;
        id?: string;
        addressId?: string;
        areaCode?: string;
        orderType?: string;
        body: UpdateCartShipmentRequest;
    }): Promise<PlatformCartShipmentsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @param {string} [arg.addressId] -
     * @param {string} [arg.paymentMode] -
     * @param {string} [arg.paymentIdentifier] -
     * @param {string} [arg.aggregatorName] -
     * @param {string} [arg.merchantCode] -
     * @returns {Promise<PaymentCouponValidate>} - Success response
     * @summary: Verify the coupon eligibility against the payment mode
     * @description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc.
     */
    validateCouponForPayment({ id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, }?: {
        id?: string;
        buyNow?: boolean;
        addressId?: string;
        paymentMode?: string;
        paymentIdentifier?: string;
        aggregatorName?: string;
        merchantCode?: string;
    }): Promise<PaymentCouponValidate>;
}
import Paginator = require("../../common/Paginator");
