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
     * @param {CartApplicationValidator.addAddress} arg - Arg object.
     * @returns {Promise<CartApplicationModel.SaveAddressResponse>} - Success response
     * @name addAddress
     * @summary: Add address to an account
     * @description: Use this API to add an address to an account.
     */
    addAddress({ body }?: CartApplicationValidator.addAddress): Promise<CartApplicationModel.SaveAddressResponse>;
    /**
     * @param {CartApplicationValidator.addItems} arg - Arg object.
     * @returns {Promise<CartApplicationModel.AddCartDetailResponse>} - Success response
     * @name addItems
     * @summary: Add items to cart
     * @description: Use this API to add items to the cart.
     */
    addItems({ body, i, b, p, areaCode, buyNow, id }?: CartApplicationValidator.addItems): Promise<CartApplicationModel.AddCartDetailResponse>;
    /**
     * @param {CartApplicationValidator.applyCoupon} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name applyCoupon
     * @summary: Apply Coupon
     * @description: Use this API to apply coupons on items in the cart.
     */
    applyCoupon({ body, i, b, p, id, buyNow }?: CartApplicationValidator.applyCoupon): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.applyRewardPoints} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name applyRewardPoints
     * @summary: Apply reward points at cart
     * @description: Use this API to redeem a fixed no. of reward points by applying it to the cart.
     */
    applyRewardPoints({ body, id, i, b, buyNow }?: CartApplicationValidator.applyRewardPoints): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.checkoutCart} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartCheckoutResponse>} - Success response
     * @name checkoutCart
     * @summary: Checkout all items in the cart
     * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway.
     */
    checkoutCart({ body, buyNow }?: CartApplicationValidator.checkoutCart): Promise<CartApplicationModel.CartCheckoutResponse>;
    /**
     * @param {CartApplicationValidator.checkoutCartV2} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartCheckoutResponse>} - Success response
     * @name checkoutCartV2
     * @summary: Checkout all items in the cart
     * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway.
     */
    checkoutCartV2({ body, buyNow }?: CartApplicationValidator.checkoutCartV2): Promise<CartApplicationModel.CartCheckoutResponse>;
    /**
     * @param {CartApplicationValidator.deleteCart} arg - Arg object.
     * @returns {Promise<CartApplicationModel.DeleteCartDetailResponse>} -
     *   Success response
     * @name deleteCart
     * @summary: Delete cart once user made successful checkout
     * @description: Use this API to delete the cart.
     */
    deleteCart({ id }?: CartApplicationValidator.deleteCart): Promise<CartApplicationModel.DeleteCartDetailResponse>;
    /**
     * @param {CartApplicationValidator.getAddressById} arg - Arg object.
     * @returns {Promise<CartApplicationModel.Address>} - Success response
     * @name getAddressById
     * @summary: Fetch a single address by its ID
     * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `Address`. Attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, }?: CartApplicationValidator.getAddressById): Promise<CartApplicationModel.Address>;
    /**
     * @param {CartApplicationValidator.getAddresses} arg - Arg object.
     * @returns {Promise<CartApplicationModel.GetAddressesResponse>} - Success response
     * @name getAddresses
     * @summary: Fetch address
     * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     */
    getAddresses({ cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, }?: CartApplicationValidator.getAddresses): Promise<CartApplicationModel.GetAddressesResponse>;
    /**
     * @param {CartApplicationValidator.getBulkDiscountOffers} arg - Arg object.
     * @returns {Promise<CartApplicationModel.BulkPriceResponse>} - Success response
     * @name getBulkDiscountOffers
     * @summary: Get discount offers based on quantity
     * @description: Use this API to get a list of applicable offers along with current, next and best offer for given product. Either one of uid, item_id, slug should be present.
     */
    getBulkDiscountOffers({ itemId, articleId, uid, slug }?: CartApplicationValidator.getBulkDiscountOffers): Promise<CartApplicationModel.BulkPriceResponse>;
    /**
     * @param {CartApplicationValidator.getCart} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name getCart
     * @summary: Fetch all items added to the cart
     * @description: Use this API to get details of all the items added to a cart.
     */
    getCart({ id, i, b, p, assignCardId, areaCode, buyNow }?: CartApplicationValidator.getCart): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.getCartLastModified} arg - Arg object.
     * @returns {Promise<any>} - Success response
     * @name getCartLastModified
     * @summary: Fetch last-modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata.
     */
    getCartLastModified({ id }?: CartApplicationValidator.getCartLastModified): Promise<any>;
    /**
     * @param {CartApplicationValidator.getCartShareLink} arg - Arg object.
     * @returns {Promise<CartApplicationModel.GetShareCartLinkResponse>} -
     *   Success response
     * @name getCartShareLink
     * @summary: Generate token for sharing the cart
     * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.
     */
    getCartShareLink({ body }?: CartApplicationValidator.getCartShareLink): Promise<CartApplicationModel.GetShareCartLinkResponse>;
    /**
     * @param {CartApplicationValidator.getCartSharedItems} arg - Arg object.
     * @returns {Promise<CartApplicationModel.SharedCartResponse>} - Success response
     * @name getCartSharedItems
     * @summary: Get details of a shared cart
     * @description: Use this API to get the shared cart details as per the token generated using the share-cart API.
     */
    getCartSharedItems({ token }?: CartApplicationValidator.getCartSharedItems): Promise<CartApplicationModel.SharedCartResponse>;
    /**
     * @param {CartApplicationValidator.getCoupons} arg - Arg object.
     * @returns {Promise<CartApplicationModel.GetCouponResponse>} - Success response
     * @name getCoupons
     * @summary: Fetch Coupon
     * @description: Use this API to get a list of available coupons along with their details.
     */
    getCoupons({ id, buyNow }?: CartApplicationValidator.getCoupons): Promise<CartApplicationModel.GetCouponResponse>;
    /**
     * @param {CartApplicationValidator.getItemCount} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartItemCountResponse>} - Success response
     * @name getItemCount
     * @summary: Count items in the cart
     * @description: Use this API to get the total number of items present in cart.
     */
    getItemCount({ id, buyNow }?: CartApplicationValidator.getItemCount): Promise<CartApplicationModel.CartItemCountResponse>;
    /**
     * @param {CartApplicationValidator.getLadderOffers} arg - Arg object.
     * @returns {Promise<CartApplicationModel.LadderPriceOffers>} - Success response
     * @name getLadderOffers
     * @summary: Fetch ladder price promotion
     * @description: Use this API to get applicable ladder price promotion for current product
     */
    getLadderOffers({ slug, storeId, promotionId, pageSize }?: CartApplicationValidator.getLadderOffers): Promise<CartApplicationModel.LadderPriceOffers>;
    /**
     * @param {CartApplicationValidator.getPromotionOffers} arg - Arg object.
     * @returns {Promise<CartApplicationModel.PromotionOffersResponse>} - Success response
     * @name getPromotionOffers
     * @summary: Fetch available promotions
     * @description: Use this API to get top 5 offers available for current product
     */
    getPromotionOffers({ slug, pageSize, promotionGroup, storeId }?: CartApplicationValidator.getPromotionOffers): Promise<CartApplicationModel.PromotionOffersResponse>;
    /**
     * @param {CartApplicationValidator.getShipments} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartShipmentsResponse>} - Success response
     * @name getShipments
     * @summary: Get delivery date and options before checkout
     * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.
     */
    getShipments({ p, id, buyNow, addressId, areaCode }?: CartApplicationValidator.getShipments): Promise<CartApplicationModel.CartShipmentsResponse>;
    /**
     * @param {CartApplicationValidator.removeAddress} arg - Arg object.
     * @returns {Promise<CartApplicationModel.DeleteAddressResponse>} - Success response
     * @name removeAddress
     * @summary: Remove address associated with an account
     * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.
     */
    removeAddress({ id }?: CartApplicationValidator.removeAddress): Promise<CartApplicationModel.DeleteAddressResponse>;
    /**
     * @param {CartApplicationValidator.removeCoupon} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name removeCoupon
     * @summary: Remove Coupon Applied
     * @description: Remove Coupon applied on the cart by passing uid in request body.
     */
    removeCoupon({ id, buyNow }?: CartApplicationValidator.removeCoupon): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.selectAddress} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name selectAddress
     * @summary: Select an address from available addresses
     * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>
     */
    selectAddress({ body, cartId, buyNow, i, b }?: CartApplicationValidator.selectAddress): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.selectPaymentMode} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name selectPaymentMode
     * @summary: Update cart payment
     * @description: Use this API to update cart payment.
     */
    selectPaymentMode({ body, id, buyNow }?: CartApplicationValidator.selectPaymentMode): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.updateAddress} arg - Arg object.
     * @returns {Promise<CartApplicationModel.UpdateAddressResponse>} - Success response
     * @name updateAddress
     * @summary: Update address added to an account
     * @description: <p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
     */
    updateAddress({ id, body }?: CartApplicationValidator.updateAddress): Promise<CartApplicationModel.UpdateAddressResponse>;
    /**
     * @param {CartApplicationValidator.updateCart} arg - Arg object.
     * @returns {Promise<CartApplicationModel.UpdateCartDetailResponse>} -
     *   Success response
     * @name updateCart
     * @summary: Update items in the cart
     * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     */
    updateCart({ body, id, i, b, p, areaCode, buyNow }?: CartApplicationValidator.updateCart): Promise<CartApplicationModel.UpdateCartDetailResponse>;
    /**
     * @param {CartApplicationValidator.updateCartMeta} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartMetaResponse>} - Success response
     * @name updateCartMeta
     * @summary: Update the cart meta
     * @description: Use this API to update cart meta like checkout_mode and gstin.
     */
    updateCartMeta({ body, id, buyNow }?: CartApplicationValidator.updateCartMeta): Promise<CartApplicationModel.CartMetaResponse>;
    /**
     * @param {CartApplicationValidator.updateCartWithSharedItems} arg - Arg object.
     * @returns {Promise<CartApplicationModel.SharedCartResponse>} - Success response
     * @name updateCartWithSharedItems
     * @summary: Merge or replace existing cart
     * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.
     */
    updateCartWithSharedItems({ token, action }?: CartApplicationValidator.updateCartWithSharedItems): Promise<CartApplicationModel.SharedCartResponse>;
    /**
     * @param {CartApplicationValidator.validateCouponForPayment} arg - Arg object.
     * @returns {Promise<CartApplicationModel.PaymentCouponValidate>} - Success response
     * @name validateCouponForPayment
     * @summary: Verify the coupon eligibility against the payment mode
     * @description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc.
     */
    validateCouponForPayment({ id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, iin, network, type, cardId, }?: CartApplicationValidator.validateCouponForPayment): Promise<CartApplicationModel.PaymentCouponValidate>;
}
import CartApplicationValidator = require("./CartApplicationValidator");
import CartApplicationModel = require("./CartApplicationModel");
