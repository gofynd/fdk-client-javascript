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
     * @param {PosCartApplicationValidator.addAddress} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.SaveAddressResponse>} - Success response
     * @name addAddress
     * @summary: Add address to an account
     * @description: Use this API to add an address to an account.
     */
    addAddress({ body }?: PosCartApplicationValidator.addAddress): Promise<PosCartApplicationModel.SaveAddressResponse>;
    /**
     * @param {PosCartApplicationValidator.addItems} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.AddCartDetailResponse>} -
     *   Success response
     * @name addItems
     * @summary: Add items to cart
     * @description: Use this API to add items to the cart.
     */
    addItems({ body, i, b, p, areaCode, buyNow, id }?: PosCartApplicationValidator.addItems): Promise<PosCartApplicationModel.AddCartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.applyCoupon} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name applyCoupon
     * @summary: Apply Coupon
     * @description: Use this API to apply coupons on items in the cart.
     */
    applyCoupon({ body, i, b, p, id, buyNow }?: PosCartApplicationValidator.applyCoupon): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.applyRewardPoints} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name applyRewardPoints
     * @summary: Apply reward points at cart
     * @description: Use this API to redeem a fixed no. of reward points by applying it to the cart.
     */
    applyRewardPoints({ body, id, i, b, buyNow }?: PosCartApplicationValidator.applyRewardPoints): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.checkoutCart} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.CartCheckoutResponse>} - Success response
     * @name checkoutCart
     * @summary: Checkout all items in the cart
     * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be generated directly, whereas for other checkout modes, user will be redirected to a payment gateway.
     */
    checkoutCart({ body, id }?: PosCartApplicationValidator.checkoutCart): Promise<PosCartApplicationModel.CartCheckoutResponse>;
    /**
     * @param {PosCartApplicationValidator.getAddressById} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.Address>} - Success response
     * @name getAddressById
     * @summary: Fetch a single address by its ID
     * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `Address`. Attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, }?: PosCartApplicationValidator.getAddressById): Promise<PosCartApplicationModel.Address>;
    /**
     * @param {PosCartApplicationValidator.getAddresses} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.GetAddressesResponse>} - Success response
     * @name getAddresses
     * @summary: Fetch address
     * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     */
    getAddresses({ cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, }?: PosCartApplicationValidator.getAddresses): Promise<PosCartApplicationModel.GetAddressesResponse>;
    /**
     * @param {PosCartApplicationValidator.getAvailableDeliveryModes} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.CartDeliveryModesResponse>} -
     *   Success response
     * @name getAvailableDeliveryModes
     * @summary: Get available delivery modes for cart
     * @description: Use this API to get the delivery modes (home-delivery/store-pickup) along with a list of pickup stores available for a given cart at a given PIN Code. User can then view the address of a pickup store with the help of store-address API.
     */
    getAvailableDeliveryModes({ areaCode, id }?: PosCartApplicationValidator.getAvailableDeliveryModes): Promise<PosCartApplicationModel.CartDeliveryModesResponse>;
    /**
     * @param {PosCartApplicationValidator.getBulkDiscountOffers} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.BulkPriceResponse>} - Success response
     * @name getBulkDiscountOffers
     * @summary: Get discount offers based on quantity
     * @description: Use this API to get a list of applicable offers along with current, next and best offer for given product. Either one of uid, item_id, slug should be present.
     */
    getBulkDiscountOffers({ itemId, articleId, uid, slug }?: PosCartApplicationValidator.getBulkDiscountOffers): Promise<PosCartApplicationModel.BulkPriceResponse>;
    /**
     * @param {PosCartApplicationValidator.getCart} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name getCart
     * @summary: Fetch all items added to the cart
     * @description: Use this API to get details of all the items added to a cart.
     */
    getCart({ id, i, b, p, assignCardId, areaCode, buyNow }?: PosCartApplicationValidator.getCart): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.getCartLastModified} arg - Arg object.
     * @returns {Promise<any>} - Success response
     * @name getCartLastModified
     * @summary: Fetch last-modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata.
     */
    getCartLastModified({ id }?: PosCartApplicationValidator.getCartLastModified): Promise<any>;
    /**
     * @param {PosCartApplicationValidator.getCartShareLink} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.GetShareCartLinkResponse>} -
     *   Success response
     * @name getCartShareLink
     * @summary: Generate token for sharing the cart
     * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.
     */
    getCartShareLink({ body }?: PosCartApplicationValidator.getCartShareLink): Promise<PosCartApplicationModel.GetShareCartLinkResponse>;
    /**
     * @param {PosCartApplicationValidator.getCartSharedItems} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.SharedCartResponse>} - Success response
     * @name getCartSharedItems
     * @summary: Get details of a shared cart
     * @description: Use this API to get the shared cart details as per the token generated using the share-cart API.
     */
    getCartSharedItems({ token }?: PosCartApplicationValidator.getCartSharedItems): Promise<PosCartApplicationModel.SharedCartResponse>;
    /**
     * @param {PosCartApplicationValidator.getCoupons} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.GetCouponResponse>} - Success response
     * @name getCoupons
     * @summary: Fetch Coupon
     * @description: Use this API to get a list of available coupons along with their details.
     */
    getCoupons({ id, buyNow }?: PosCartApplicationValidator.getCoupons): Promise<PosCartApplicationModel.GetCouponResponse>;
    /**
     * @param {PosCartApplicationValidator.getItemCount} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.CartItemCountResponse>} -
     *   Success response
     * @name getItemCount
     * @summary: Count items in the cart
     * @description: Use this API to get the total number of items present in cart.
     */
    getItemCount({ id, buyNow }?: PosCartApplicationValidator.getItemCount): Promise<PosCartApplicationModel.CartItemCountResponse>;
    /**
     * @param {PosCartApplicationValidator.getShipments} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.CartShipmentsResponse>} -
     *   Success response
     * @name getShipments
     * @summary: Get delivery date and options before checkout
     * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.
     */
    getShipments({ pickAtStoreUid, orderingStoreId, p, id, addressId, areaCode, orderType, }?: PosCartApplicationValidator.getShipments): Promise<PosCartApplicationModel.CartShipmentsResponse>;
    /**
     * @param {PosCartApplicationValidator.getStoreAddressByUid} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.StoreDetailsResponse>} - Success response
     * @name getStoreAddressByUid
     * @summary: Get list of stores for give uids
     * @description: Use this API to get the store details by entering the unique identifier of the pickup stores shown in the response of available-delivery-mode API.
     */
    getStoreAddressByUid({ storeUid }?: PosCartApplicationValidator.getStoreAddressByUid): Promise<PosCartApplicationModel.StoreDetailsResponse>;
    /**
     * @param {PosCartApplicationValidator.removeAddress} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.DeleteAddressResponse>} -
     *   Success response
     * @name removeAddress
     * @summary: Remove address associated with an account
     * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.
     */
    removeAddress({ id }?: PosCartApplicationValidator.removeAddress): Promise<PosCartApplicationModel.DeleteAddressResponse>;
    /**
     * @param {PosCartApplicationValidator.removeCoupon} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name removeCoupon
     * @summary: Remove Coupon Applied
     * @description: Remove Coupon applied on the cart by passing uid in request body.
     */
    removeCoupon({ id, buyNow }?: PosCartApplicationValidator.removeCoupon): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.selectAddress} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name selectAddress
     * @summary: Select an address from available addresses
     * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>
     */
    selectAddress({ body, cartId, buyNow, i, b }?: PosCartApplicationValidator.selectAddress): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.selectPaymentMode} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
     * @name selectPaymentMode
     * @summary: Update cart payment
     * @description: Use this API to update cart payment.
     */
    selectPaymentMode({ body, id, buyNow }?: PosCartApplicationValidator.selectPaymentMode): Promise<PosCartApplicationModel.CartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.updateAddress} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.UpdateAddressResponse>} -
     *   Success response
     * @name updateAddress
     * @summary: Update address added to an account
     * @description: <p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
     */
    updateAddress({ id, body }?: PosCartApplicationValidator.updateAddress): Promise<PosCartApplicationModel.UpdateAddressResponse>;
    /**
     * @param {PosCartApplicationValidator.updateCart} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.UpdateCartDetailResponse>} -
     *   Success response
     * @name updateCart
     * @summary: Update items in the cart
     * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     */
    updateCart({ body, id, i, b, p, areaCode, buyNow }?: PosCartApplicationValidator.updateCart): Promise<PosCartApplicationModel.UpdateCartDetailResponse>;
    /**
     * @param {PosCartApplicationValidator.updateCartMeta} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.CartMetaResponse>} - Success response
     * @name updateCartMeta
     * @summary: Update the cart meta
     * @description: Use this API to update cart meta like checkout_mode and gstin.
     */
    updateCartMeta({ body, id, buyNow }?: PosCartApplicationValidator.updateCartMeta): Promise<PosCartApplicationModel.CartMetaResponse>;
    /**
     * @param {PosCartApplicationValidator.updateCartWithSharedItems} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.SharedCartResponse>} - Success response
     * @name updateCartWithSharedItems
     * @summary: Merge or replace existing cart
     * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.
     */
    updateCartWithSharedItems({ token, action }?: PosCartApplicationValidator.updateCartWithSharedItems): Promise<PosCartApplicationModel.SharedCartResponse>;
    /**
     * @param {PosCartApplicationValidator.updateShipments} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.CartShipmentsResponse>} -
     *   Success response
     * @name updateShipments
     * @summary: Update shipment delivery type and quantity before checkout
     * @description: Use this API to update the delivery type and quantity as per customer's preference for either store pick-up or home-delivery.
     */
    updateShipments({ body, i, p, id, addressId, areaCode, orderType, }?: PosCartApplicationValidator.updateShipments): Promise<PosCartApplicationModel.CartShipmentsResponse>;
    /**
     * @param {PosCartApplicationValidator.validateCouponForPayment} arg - Arg object.
     * @returns {Promise<PosCartApplicationModel.PaymentCouponValidate>} -
     *   Success response
     * @name validateCouponForPayment
     * @summary: Verify the coupon eligibility against the payment mode
     * @description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc.
     */
    validateCouponForPayment({ id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, iin, network, type, cardId, }?: PosCartApplicationValidator.validateCouponForPayment): Promise<PosCartApplicationModel.PaymentCouponValidate>;
}
import PosCartApplicationValidator = require("./PosCartApplicationValidator");
import PosCartApplicationModel = require("./PosCartApplicationModel");
