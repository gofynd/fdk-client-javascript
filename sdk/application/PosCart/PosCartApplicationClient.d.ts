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
     * @param {Object} arg - Arg object.
     * @param {Address} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SaveAddressResponse>} - Success response
     * @summary: Add address to an account
     * @description: Use this API to add an address to an account.
     */
    addAddress({ body }?: {
        body: Address;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<SaveAddressResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {string} [arg.areaCode] -
     * @param {boolean} [arg.buyNow] -
     * @param {string} [arg.id] -
     * @param {AddCartRequest} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AddCartDetailResponse>} - Success response
     * @summary: Add items to cart
     * @description: Use this API to add items to the cart.
     */
    addItems({ body, i, b, areaCode, buyNow, id }?: {
        i?: boolean;
        b?: boolean;
        areaCode?: string;
        buyNow?: boolean;
        id?: string;
        body: AddCartRequest;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<AddCartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {boolean} [arg.p] -
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @param {ApplyCouponRequest} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartDetailResponse>} - Success response
     * @summary: Apply Coupon
     * @description: Use this API to apply coupons on items in the cart.
     */
    applyCoupon({ body, i, b, p, id, buyNow }?: {
        i?: boolean;
        b?: boolean;
        p?: boolean;
        id?: string;
        buyNow?: boolean;
        body: ApplyCouponRequest;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<CartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {boolean} [arg.buyNow] -
     * @param {RewardPointRequest} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartDetailResponse>} - Success response
     * @summary: Apply reward points at cart
     * @description: Use this API to redeem a fixed no. of reward points by applying it to the cart.
     */
    applyRewardPoints({ body, id, i, b, buyNow }?: {
        id?: string;
        i?: boolean;
        b?: boolean;
        buyNow?: boolean;
        body: RewardPointRequest;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<CartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {CartPosCheckoutDetailRequest} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartCheckoutResponse>} - Success response
     * @summary: Checkout all items in the cart
     * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be generated directly, whereas for other checkout modes, user will be redirected to a payment gateway.
     */
    checkoutCart({ body, id }?: {
        id?: string;
        body: CartPosCheckoutDetailRequest;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<CartCheckoutResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {string} [arg.cartId] -
     * @param {boolean} [arg.buyNow] -
     * @param {string} [arg.mobileNo] -
     * @param {string} [arg.checkoutMode] -
     * @param {string} [arg.tags] -
     * @param {boolean} [arg.isDefault] -
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Address>} - Success response
     * @summary: Fetch a single address by its ID
     * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `Address`. Attibutes listed below are optional
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault }?: {
        id: string;
        cartId?: string;
        buyNow?: boolean;
        mobileNo?: string;
        checkoutMode?: string;
        tags?: string;
        isDefault?: boolean;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<Address>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.cartId] -
     * @param {boolean} [arg.buyNow] -
     * @param {string} [arg.mobileNo] -
     * @param {string} [arg.checkoutMode] -
     * @param {string} [arg.tags] -
     * @param {boolean} [arg.isDefault] -
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetAddressesResponse>} - Success response
     * @summary: Fetch address
     * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional
     */
    getAddresses({ cartId, buyNow, mobileNo, checkoutMode, tags, isDefault }?: {
        cartId?: string;
        buyNow?: boolean;
        mobileNo?: string;
        checkoutMode?: string;
        tags?: string;
        isDefault?: boolean;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<GetAddressesResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.areaCode -
     * @param {string} [arg.id] -
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartDeliveryModesResponse>} - Success response
     * @summary: Get available delivery modes for cart
     * @description: Use this API to get the delivery modes (home-delivery/store-pickup) along with a list of pickup stores available for a given cart at a given PIN Code. User can then view the address of a pickup store with the help of store-address API.
     */
    getAvailableDeliveryModes({ areaCode, id }?: {
        areaCode: string;
        id?: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<CartDeliveryModesResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.itemId] - The Item ID of the product
     * @param {string} [arg.articleId] - Article Mongo ID
     * @param {number} [arg.uid] - UID of the product
     * @param {string} [arg.slug] - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<BulkPriceResponse>} - Success response
     * @summary: Get discount offers based on quantity
     * @description: Use this API to get a list of applicable offers along with current, next and best offer for given product. Either one of uid, item_id, slug should be present.
     */
    getBulkDiscountOffers({ itemId, articleId, uid, slug }?: {
        itemId?: number;
        articleId?: string;
        uid?: number;
        slug?: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<BulkPriceResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {number} [arg.assignCardId] -
     * @param {string} [arg.areaCode] -
     * @param {boolean} [arg.buyNow] -
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartDetailResponse>} - Success response
     * @summary: Fetch all items added to the cart
     * @description: Use this API to get details of all the items added to a cart.
     */
    getCart({ id, i, b, assignCardId, areaCode, buyNow }?: {
        id?: string;
        i?: boolean;
        b?: boolean;
        assignCardId?: number;
        areaCode?: string;
        buyNow?: boolean;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<CartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<any>} - Success response
     * @summary: Fetch last-modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata.
     */
    getCartLastModified({ id }?: {
        id?: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetShareCartLinkRequest} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetShareCartLinkResponse>} - Success response
     * @summary: Generate token for sharing the cart
     * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.
     */
    getCartShareLink({ body }?: {
        body: GetShareCartLinkRequest;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<GetShareCartLinkResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.token - Token of the shared short link
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SharedCartResponse>} - Success response
     * @summary: Get details of a shared cart
     * @description: Use this API to get the shared cart details as per the token generated using the share-cart API.
     */
    getCartSharedItems({ token }?: {
        token: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<SharedCartResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetCouponResponse>} - Success response
     * @summary: Fetch Coupon
     * @description: Use this API to get a list of available coupons along with their details.
     */
    getCoupons({ id, buyNow }?: {
        id?: string;
        buyNow?: boolean;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<GetCouponResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] - The unique identifier of the cart.
     * @param {boolean} [arg.buyNow] -
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartItemCountResponse>} - Success response
     * @summary: Count items in the cart
     * @description: Use this API to get the total number of items present in cart.
     */
    getItemCount({ id, buyNow }?: {
        id?: string;
        buyNow?: boolean;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<CartItemCountResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pickAtStoreUid] -
     * @param {number} [arg.orderingStoreId] -
     * @param {boolean} [arg.p] - This is a boolean value. Select `true` for
     *   getting a payment option in response.
     * @param {string} [arg.id] - The unique identifier of the cart
     * @param {string} [arg.addressId] - ID allotted to the selected address
     * @param {string} [arg.areaCode] - The PIN Code of the destination address,
     *   e.g. 400059
     * @param {string} [arg.orderType] - The order type of shipment HomeDelivery
     *   - If the customer wants the order home-delivered PickAtStore - If the
     *   customer wants the handover of an order at the store itself.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartShipmentsResponse>} - Success response
     * @summary: Get delivery date and options before checkout
     * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.
     */
    getShipments({ pickAtStoreUid, orderingStoreId, p, id, addressId, areaCode, orderType, }?: {
        pickAtStoreUid?: number;
        orderingStoreId?: number;
        p?: boolean;
        id?: string;
        addressId?: string;
        areaCode?: string;
        orderType?: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<CartShipmentsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.storeUid -
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<StoreDetailsResponse>} - Success response
     * @summary: Get list of stores for give uids
     * @description: Use this API to get the store details by entering the unique identifier of the pickup stores shown in the response of available-delivery-mode API.
     */
    getStoreAddressByUid({ storeUid }?: {
        storeUid: number;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<StoreDetailsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the selected address
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<DeleteAddressResponse>} - Success response
     * @summary: Remove address associated with an account
     * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.
     */
    removeAddress({ id }?: {
        id: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<DeleteAddressResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartDetailResponse>} - Success response
     * @summary: Remove Coupon Applied
     * @description: Remove Coupon applied on the cart by passing uid in request body.
     */
    removeCoupon({ id, buyNow }?: {
        id?: string;
        buyNow?: boolean;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<CartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.cartId] -
     * @param {boolean} [arg.buyNow] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {SelectCartAddressRequest} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartDetailResponse>} - Success response
     * @summary: Select an address from available addresses
     * @description: Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object.
     */
    selectAddress({ body, cartId, buyNow, i, b }?: {
        cartId?: string;
        buyNow?: boolean;
        i?: boolean;
        b?: boolean;
        body: SelectCartAddressRequest;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<CartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @param {UpdateCartPaymentRequest} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartDetailResponse>} - Success response
     * @summary: Update cart payment
     * @description: Use this API to update cart payment.
     */
    selectPaymentMode({ body, id, buyNow }?: {
        id?: string;
        buyNow?: boolean;
        body: UpdateCartPaymentRequest;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<CartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the selected address
     * @param {Address} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UpdateAddressResponse>} - Success response
     * @summary: Update address added to an account
     * @description: Use this API to update an existing address in the account. Request object should contain attributes mentioned in Address  can be updated.
     */
    updateAddress({ id, body }?: {
        id: string;
        body: Address;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<UpdateAddressResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {string} [arg.areaCode] -
     * @param {boolean} [arg.buyNow] -
     * @param {UpdateCartRequest} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UpdateCartDetailResponse>} - Success response
     * @summary: Update items in the cart
     * @description: Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size.
     */
    updateCart({ body, id, i, b, areaCode, buyNow }?: {
        id?: string;
        i?: boolean;
        b?: boolean;
        areaCode?: string;
        buyNow?: boolean;
        body: UpdateCartRequest;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<UpdateCartDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @param {CartMetaRequest} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartMetaResponse>} - Success response
     * @summary: Update the cart meta
     * @description: Use this API to update cart meta like checkout_mode and gstin.
     */
    updateCartMeta({ body, id, buyNow }?: {
        id?: string;
        buyNow?: boolean;
        body: CartMetaRequest;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<CartMetaResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.token - Token of the shared short link
     * @param {string} arg.action - Operation to perform on the existing cart
     *   merge or replace.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SharedCartResponse>} - Success response
     * @summary: Merge or replace existing cart
     * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.
     */
    updateCartWithSharedItems({ token, action }?: {
        token: string;
        action: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<SharedCartResponse>;
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
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartShipmentsResponse>} - Success response
     * @summary: Update shipment delivery type and quantity before checkout
     * @description: Use this API to update the delivery type and quantity as per customer's preference for either store pick-up or home-delivery.
     */
    updateShipments({ body, i, p, id, addressId, areaCode, orderType }?: {
        i?: boolean;
        p?: boolean;
        id?: string;
        addressId?: string;
        areaCode?: string;
        orderType?: string;
        body: UpdateCartShipmentRequest;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<CartShipmentsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.buyNow] -
     * @param {string} [arg.addressId] -
     * @param {string} [arg.paymentMode] -
     * @param {string} [arg.paymentIdentifier] -
     * @param {string} [arg.aggregatorName] -
     * @param {string} [arg.merchantCode] -
     * @param {string} [arg.iin] -
     * @param {string} [arg.network] -
     * @param {string} [arg.type] -
     * @param {string} [arg.cardId] -
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentCouponValidate>} - Success response
     * @summary: Verify the coupon eligibility against the payment mode
     * @description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc.
     */
    validateCouponForPayment({ id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, iin, network, type, cardId, }?: {
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
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<PaymentCouponValidate>;
}
