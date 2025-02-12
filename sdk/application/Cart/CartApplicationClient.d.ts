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
        getCartMetaConfig: string;
        getCartMetaConfigs: string;
        getCartShareLink: string;
        getCartSharedItems: string;
        getCoupons: string;
        getItemCount: string;
        getItemCountV2: string;
        getLadderOffers: string;
        getPaymentPromotionOffers: string;
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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SaveAddressResponse>} - Success response
     * @name addAddress
     * @summary: Create a new address
     * @description: Add a new address to their cart to save details such as name, email, contact information, and address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/addAddress/).
     */
    addAddress({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SaveAddressResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AddCartDetailResponse>} - Success response
     * @name addItems
     * @summary: Add items to a cart
     * @description: Add product items to the customer's existing shopping cart. If there is no existing cart associated with the customer, it creates a new one and adds the items to it. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/addItems/).
     */
    addItems({ body, i, b, areaCode, buyNow, id, cartType, orderType, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AddCartDetailResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartDetailResponse>} - Success response
     * @name applyCoupon
     * @summary: Apply coupon.
     * @description: Apply a coupon code to the cart to trigger discounts on eligible items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/applyCoupon/).
     */
    applyCoupon({ body, i, b, p, id, buyNow, cartType, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CartDetailResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartDetailResponse>} - Success response
     * @name applyRewardPoints
     * @summary: Use reward points.
     * @description: Users can redeem their accumulated reward points and apply them to the items in their cart, thereby availing discounts on their current purchases. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/applyRewardPoints/).
     */
    applyRewardPoints({ body, id, i, b, buyNow, cartType, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CartDetailResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartCheckoutResponse>} - Success response
     * @name checkoutCart
     * @summary: Checkout cart
     * @description: The checkout cart initiates the order creation process based on the selected address and payment method. It revalidates the cart details to ensure safe and seamless order placement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/checkoutCart/).
     */
    checkoutCart({ body, buyNow, cartType, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CartCheckoutResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartCheckoutResponse>} - Success response
     * @name checkoutCartV2
     * @summary: Enhanced cart checkout process
     * @description: Enhanced version of checkout process that supports multiple mode of payment(MOP). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/checkoutCartV2/).
     */
    checkoutCartV2({ body, buyNow, cartType, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CartCheckoutResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<DeleteCartDetailResponse>} - Success response
     * @name deleteCart
     * @summary: Clears the cart
     * @description: Delete all items from the user's cart and resets it to its initial state, providing a clean slate for new selections. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/deleteCart/).
     */
    deleteCart({ body, id, cartType, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<DeleteCartDetailResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Address>} - Success response
     * @name getAddressById
     * @summary: Fetch address.
     * @description: Get a specific customer address stored in the system by providing its unique identifier. This API provides detailed information about the address, including the recipient's name, address, city, postal code, and other relevant details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getAddressById/).
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<Address>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetAddressesResponse>} - Success response
     * @name getAddresses
     * @summary: Get saved addresses.
     * @description: List all addresses saved by the customer, simplifying the checkout process by offering pre-saved address options for delivery. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getAddresses/).
     */
    getAddresses({ cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetAddressesResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<BulkPriceResponse>} - Success response
     * @name getBulkDiscountOffers
     * @summary: Bulk discounts.
     * @description: List offer discounts with information about quantity and seller. One offer is marked with a "best" flag, indicating it as the best offer among the list. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getBulkDiscountOffers/).
     */
    getBulkDiscountOffers({ itemId, articleId, uid, slug, cartType, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<BulkPriceResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartDetailResponse>} - Success response
     * @name getCart
     * @summary: Retrieve cart details.
     * @description: Get details of a cart linked to a specific customer using a unique cart ID. It offers an overview of the items, quantities, prices, and other relevant information associated with the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCart/).
     */
    getCart({ id, i, b, c, assignCardId, areaCode, buyNow, cartType, orderType, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CartDetailResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<any>} - Success response
     * @name getCartLastModified
     * @summary: Get last modified timestamp of a cart
     * @description: Retrieve the last modified timestamp of the cart using unique cart ID. It indicates the most recent update made to the cart's content or properties. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartLastModified/).
     */
    getCartLastModified({ id, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<any>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartConfigDetailResponse>} - Success response
     * @name getCartMetaConfig
     * @summary: Get cart configuration by id
     * @description: Get cart configuration by id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartMetaConfig/).
     */
    getCartMetaConfig({ cartMetaId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<CartConfigDetailResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartMetaConfigListResponse>} - Success response
     * @name getCartMetaConfigs
     * @summary: Get cart configuration
     * @description: Get cart configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartMetaConfigs/).
     */
    getCartMetaConfigs({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CartMetaConfigListResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetShareCartLinkResponse>} - Success response
     * @name getCartShareLink
     * @summary: Share cart link.
     * @description: Generate a unique shareable link for the customer's cart for a specific sales channel. This link enables easy sharing of the cart contents with other users, facilitating collaborative shopping experiences. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartShareLink/).
     */
    getCartShareLink({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetShareCartLinkResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SharedCartResponse>} - Success response
     * @name getCartSharedItems
     * @summary: Shared cart items.
     * @description: Get cart items from the shared cart link based on unique token. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartSharedItems/).
     */
    getCartSharedItems({ token, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<SharedCartResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetCouponResponse>} - Success response
     * @name getCoupons
     * @summary: List available coupons.
     * @description: List all available coupons that customer can apply to their carts. It provides details about each coupon, including its code, discount amount, and applicable conditions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCoupons/).
     */
    getCoupons({ id, buyNow, slug, storeId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetCouponResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartItemCountResponse>} - Success response
     * @name getItemCount
     * @summary: Count cart items.
     * @description: Get total count of items currently present in the customer's cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getItemCount/).
     */
    getItemCount({ id, buyNow, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CartItemCountResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartItemCountResponseV2>} - Success response
     * @name getItemCountV2
     * @summary: Count items in the cart according to cart_type
     * @description: Use this API to get the total number of items present in cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getItemCountV2/).
     */
    getItemCountV2({ id, buyNow, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CartItemCountResponseV2>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LadderPriceOffers>} - Success response
     * @name getLadderOffers
     * @summary: Fetches ladder offers.
     * @description: Get ladder offers associated for the items in the cart. Ladder offers provide discounts or special pricing based on item quantity, allowing users to benefit from bulk purchases or promotional deals. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getLadderOffers/).
     */
    getLadderOffers({ slug, storeId, promotionId, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<LadderPriceOffers>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PromotionPaymentOffersResponse>} - Success response
     * @name getPaymentPromotionOffers
     * @summary: Fetch available promotions payment offers
     * @description: Use this API to get top 5 payment offers available for current cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getPaymentPromotionOffers/).
     */
    getPaymentPromotionOffers({ id, uid, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<PromotionPaymentOffersResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PromotionOffersResponse>} - Success response
     * @name getPromotionOffers
     * @summary: Retrieves promotional offers
     * @description: List all promotional offers available for the items in the cart, including details such as offer text, unique promotion ID, and validity period. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getPromotionOffers/).
     */
    getPromotionOffers({ slug, pageSize, promotionGroup, storeId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<PromotionOffersResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartShipmentsResponse>} - Success response
     * @name getShipments
     * @summary: List shipments.
     * @description: Get shipment details for the items in a cart, specific to the selected address. Shipment details include delivery promises, seller information, item details, and other relevant information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getShipments/).
     */
    getShipments({ pickAtStoreUid, orderingStoreId, i, p, id, buyNow, addressId, areaCode, orderType, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CartShipmentsResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<DeleteAddressResponse>} - Success response
     * @name removeAddress
     * @summary: Delete a address
     * @description: Delete an existing customer address from the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/removeAddress/).
     */
    removeAddress({ id, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<DeleteAddressResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartDetailResponse>} - Success response
     * @name removeCoupon
     * @summary: Remove coupon.
     * @description: Remove an applied coupon from the customer's cart, thereby removing the associated discount from the cart total. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/removeCoupon/).
     */
    removeCoupon({ id, buyNow, cartType, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CartDetailResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartDetailResponse>} - Success response
     * @name selectAddress
     * @summary: Select a delivery address
     * @description: Select an address from the saved customer addresses and validates the availability of items in the cart. Additionally, it verifies and updates the delivery promise based on the selected address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/selectAddress/).
     */
    selectAddress({ body, cartId, buyNow, i, b, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CartDetailResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartDetailResponse>} - Success response
     * @name selectPaymentMode
     * @summary: Pick payment method.
     * @description: Select a preferred payment mode from available options during the cart checkout process to securely and efficiently complete their transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/selectPaymentMode/).
     */
    selectPaymentMode({ body, id, buyNow, orderType, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CartDetailResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UpdateAddressResponse>} - Success response
     * @name updateAddress
     * @summary: Update address.
     * @description: Customer can modify the details of a previously saved addresses. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateAddress/).
     */
    updateAddress({ id, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<UpdateAddressResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UpdateCartDetailResponse>} - Success response
     * @name updateCart
     * @summary: Update items in the cart
     * @description: Update cart. Customers can modify added product attributes such as quantity and size, as well as remove items from the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCart/).
     */
    updateCart({ body, id, i, b, areaCode, buyNow, cartType, orderType, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<UpdateCartDetailResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartMetaResponse>} - Success response
     * @name updateCartMeta
     * @summary: Update cart metadata.
     * @description: Update metadata associated with a cart, which includes customer preferences, delivery instructions, or any special requirements related to the cart items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCartMeta/).
     */
    updateCartMeta({ body, id, buyNow, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CartMetaResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SharedCartResponse>} - Success response
     * @name updateCartWithSharedItems
     * @summary: Merge or replace existing cart
     * @description: Merge or replace shared cart items with existing cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCartWithSharedItems/).
     */
    updateCartWithSharedItems({ token, action, cartId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<SharedCartResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PaymentCouponValidate>} - Success response
     * @name validateCouponForPayment
     * @summary: Validate coupon.
     * @description: Validate the applicability of a coupon code for the selected payment mode for the existing cart. This ensures the coupon's validity before proceeding with the payment process, enhancing user experience and preventing potential errors during transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/validateCouponForPayment/).
     */
    validateCouponForPayment({ id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, iin, network, type, cardId, cartType, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<PaymentCouponValidate>;
}
