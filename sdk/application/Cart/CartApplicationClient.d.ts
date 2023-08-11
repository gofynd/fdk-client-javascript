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
     * @param {CartApplicationValidator.AddAddressParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.SaveAddressResponse>} - Success response
     * @name addAddress
     * @summary: Add address to an account
     * @description: Use this API to add an address to an account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/addAddress/).
     */
    addAddress({ body }?: CartApplicationValidator.AddAddressParam): Promise<CartApplicationModel.SaveAddressResponse>;
    /**
     * @param {CartApplicationValidator.AddItemsParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.AddCartDetailResponse>} - Success response
     * @name addItems
     * @summary: Add items to cart
     * @description: Use this API to add items to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/addItems/).
     */
    addItems({ body, i, b, areaCode, buyNow, id }?: CartApplicationValidator.AddItemsParam): Promise<CartApplicationModel.AddCartDetailResponse>;
    /**
     * @param {CartApplicationValidator.ApplyCouponParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name applyCoupon
     * @summary: Apply Coupon
     * @description: Use this API to apply coupons on items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/applyCoupon/).
     */
    applyCoupon({ body, i, b, p, id, buyNow }?: CartApplicationValidator.ApplyCouponParam): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.ApplyRewardPointsParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name applyRewardPoints
     * @summary: Apply reward points at cart
     * @description: Use this API to redeem a fixed no. of reward points by applying it to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/applyRewardPoints/).
     */
    applyRewardPoints({ body, id, i, b, buyNow }?: CartApplicationValidator.ApplyRewardPointsParam): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.CheckoutCartParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartCheckoutResponse>} - Success response
     * @name checkoutCart
     * @summary: Checkout all items in the cart
     * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/checkoutCart/).
     */
    checkoutCart({ body, buyNow }?: CartApplicationValidator.CheckoutCartParam): Promise<CartApplicationModel.CartCheckoutResponse>;
    /**
     * @param {CartApplicationValidator.CheckoutCartV2Param} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartCheckoutResponse>} - Success response
     * @name checkoutCartV2
     * @summary: Checkout all items in the cart
     * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/checkoutCartV2/).
     */
    checkoutCartV2({ body, buyNow }?: CartApplicationValidator.CheckoutCartV2Param): Promise<CartApplicationModel.CartCheckoutResponse>;
    /**
     * @param {CartApplicationValidator.DeleteCartParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.DeleteCartDetailResponse>} -
     *   Success response
     * @name deleteCart
     * @summary: Delete cart once user made successful checkout
     * @description: Use this API to delete the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/deleteCart/).
     */
    deleteCart({ id }?: CartApplicationValidator.DeleteCartParam): Promise<CartApplicationModel.DeleteCartDetailResponse>;
    /**
     * @param {CartApplicationValidator.GetAddressByIdParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.Address>} - Success response
     * @name getAddressById
     * @summary: Fetch a single address by its ID
     * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `Address`. Attibutes listed below are optional mobile_no checkout_mode tags default - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getAddressById/).
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, }?: CartApplicationValidator.GetAddressByIdParam): Promise<CartApplicationModel.Address>;
    /**
     * @param {CartApplicationValidator.GetAddressesParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.GetAddressesResponse>} - Success response
     * @name getAddresses
     * @summary: Fetch address
     * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional uid address_id mobile_no checkout_mode tags default - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getAddresses/).
     */
    getAddresses({ cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, }?: CartApplicationValidator.GetAddressesParam): Promise<CartApplicationModel.GetAddressesResponse>;
    /**
     * @param {CartApplicationValidator.GetBulkDiscountOffersParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.BulkPriceResponse>} - Success response
     * @name getBulkDiscountOffers
     * @summary: Get discount offers based on quantity
     * @description: Use this API to get a list of applicable offers along with current, next and best offer for given product. Either one of uid, item_id, slug should be present. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getBulkDiscountOffers/).
     */
    getBulkDiscountOffers({ itemId, articleId, uid, slug }?: CartApplicationValidator.GetBulkDiscountOffersParam): Promise<CartApplicationModel.BulkPriceResponse>;
    /**
     * @param {CartApplicationValidator.GetCartParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name getCart
     * @summary: Fetch all items added to the cart
     * @description: Use this API to get details of all the items added to a cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCart/).
     */
    getCart({ id, i, b, assignCardId, areaCode, buyNow }?: CartApplicationValidator.GetCartParam): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.GetCartLastModifiedParam} arg - Arg object.
     * @returns {Promise<any>} - Success response
     * @name getCartLastModified
     * @summary: Fetch last-modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartLastModified/).
     */
    getCartLastModified({ id }?: CartApplicationValidator.GetCartLastModifiedParam): Promise<any>;
    /**
     * @param {CartApplicationValidator.GetCartShareLinkParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.GetShareCartLinkResponse>} -
     *   Success response
     * @name getCartShareLink
     * @summary: Generate token for sharing the cart
     * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartShareLink/).
     */
    getCartShareLink({ body }?: CartApplicationValidator.GetCartShareLinkParam): Promise<CartApplicationModel.GetShareCartLinkResponse>;
    /**
     * @param {CartApplicationValidator.GetCartSharedItemsParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.SharedCartResponse>} - Success response
     * @name getCartSharedItems
     * @summary: Get details of a shared cart
     * @description: Use this API to get the shared cart details as per the token generated using the share-cart API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartSharedItems/).
     */
    getCartSharedItems({ token }?: CartApplicationValidator.GetCartSharedItemsParam): Promise<CartApplicationModel.SharedCartResponse>;
    /**
     * @param {CartApplicationValidator.GetCouponsParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.GetCouponResponse>} - Success response
     * @name getCoupons
     * @summary: Fetch Coupon
     * @description: Use this API to get a list of available coupons along with their details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCoupons/).
     */
    getCoupons({ id, buyNow }?: CartApplicationValidator.GetCouponsParam): Promise<CartApplicationModel.GetCouponResponse>;
    /**
     * @param {CartApplicationValidator.GetItemCountParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartItemCountResponse>} - Success response
     * @name getItemCount
     * @summary: Count items in the cart
     * @description: Use this API to get the total number of items present in cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getItemCount/).
     */
    getItemCount({ id, buyNow }?: CartApplicationValidator.GetItemCountParam): Promise<CartApplicationModel.CartItemCountResponse>;
    /**
     * @param {CartApplicationValidator.GetLadderOffersParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.LadderPriceOffers>} - Success response
     * @name getLadderOffers
     * @summary: Fetch ladder price promotion
     * @description: Use this API to get applicable ladder price promotion for current product - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getLadderOffers/).
     */
    getLadderOffers({ slug, storeId, promotionId, pageSize }?: CartApplicationValidator.GetLadderOffersParam): Promise<CartApplicationModel.LadderPriceOffers>;
    /**
     * @param {CartApplicationValidator.GetPromotionOffersParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.PromotionOffersResponse>} - Success response
     * @name getPromotionOffers
     * @summary: Fetch available promotions
     * @description: Use this API to get top 5 offers available for current product - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getPromotionOffers/).
     */
    getPromotionOffers({ slug, pageSize, promotionGroup, storeId }?: CartApplicationValidator.GetPromotionOffersParam): Promise<CartApplicationModel.PromotionOffersResponse>;
    /**
     * @param {CartApplicationValidator.GetShipmentsParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartShipmentsResponse>} - Success response
     * @name getShipments
     * @summary: Get delivery date and options before checkout
     * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getShipments/).
     */
    getShipments({ p, id, buyNow, addressId, areaCode, orderType }?: CartApplicationValidator.GetShipmentsParam): Promise<CartApplicationModel.CartShipmentsResponse>;
    /**
     * @param {CartApplicationValidator.RemoveAddressParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.DeleteAddressResponse>} - Success response
     * @name removeAddress
     * @summary: Remove address associated with an account
     * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/removeAddress/).
     */
    removeAddress({ id }?: CartApplicationValidator.RemoveAddressParam): Promise<CartApplicationModel.DeleteAddressResponse>;
    /**
     * @param {CartApplicationValidator.RemoveCouponParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name removeCoupon
     * @summary: Remove Coupon Applied
     * @description: Remove Coupon applied on the cart by passing uid in request body. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/removeCoupon/).
     */
    removeCoupon({ id, buyNow }?: CartApplicationValidator.RemoveCouponParam): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.SelectAddressParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name selectAddress
     * @summary: Select an address from available addresses
     * @description: Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. address_id billing_address_id uid - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/selectAddress/).
     */
    selectAddress({ body, cartId, buyNow, i, b }?: CartApplicationValidator.SelectAddressParam): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.SelectPaymentModeParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name selectPaymentMode
     * @summary: Update cart payment
     * @description: Use this API to update cart payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/selectPaymentMode/).
     */
    selectPaymentMode({ body, id, buyNow }?: CartApplicationValidator.SelectPaymentModeParam): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.UpdateAddressParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.UpdateAddressResponse>} - Success response
     * @name updateAddress
     * @summary: Update address added to an account
     * @description: Use this API to update an existing address in the account. Request object should contain attributes mentioned in Address can be updated. These attributes are: is_default_address landmark area pincode email address_type name address_id address - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateAddress/).
     */
    updateAddress({ id, body }?: CartApplicationValidator.UpdateAddressParam): Promise<CartApplicationModel.UpdateAddressResponse>;
    /**
     * @param {CartApplicationValidator.UpdateCartParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.UpdateCartDetailResponse>} -
     *   Success response
     * @name updateCart
     * @summary: Update items in the cart
     * @description: Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs operation:  Operation for current api call. update_item for update items. remove_item for removing items. item_id "/platform/content/v1/products/" item_size "/platform/content/v1/products/:slug/sizes/" quantity item quantity (must be greater than or equal to 1) article_id "/content​/v1​/products​/:identifier​/sizes​/price​/" item_index item position in the cart (must be greater than or equal to 0) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCart/).
     */
    updateCart({ body, id, i, b, areaCode, buyNow }?: CartApplicationValidator.UpdateCartParam): Promise<CartApplicationModel.UpdateCartDetailResponse>;
    /**
     * @param {CartApplicationValidator.UpdateCartMetaParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.CartMetaResponse>} - Success response
     * @name updateCartMeta
     * @summary: Update the cart meta
     * @description: Use this API to update cart meta like checkout_mode and gstin. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCartMeta/).
     */
    updateCartMeta({ body, id, buyNow }?: CartApplicationValidator.UpdateCartMetaParam): Promise<CartApplicationModel.CartMetaResponse>;
    /**
     * @param {CartApplicationValidator.UpdateCartWithSharedItemsParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.SharedCartResponse>} - Success response
     * @name updateCartWithSharedItems
     * @summary: Merge or replace existing cart
     * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCartWithSharedItems/).
     */
    updateCartWithSharedItems({ token, action }?: CartApplicationValidator.UpdateCartWithSharedItemsParam): Promise<CartApplicationModel.SharedCartResponse>;
    /**
     * @param {CartApplicationValidator.ValidateCouponForPaymentParam} arg - Arg object.
     * @returns {Promise<CartApplicationModel.PaymentCouponValidate>} - Success response
     * @name validateCouponForPayment
     * @summary: Verify the coupon eligibility against the payment mode
     * @description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/validateCouponForPayment/).
     */
    validateCouponForPayment({ id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, iin, network, type, cardId, }?: CartApplicationValidator.ValidateCouponForPaymentParam): Promise<CartApplicationModel.PaymentCouponValidate>;
}
import CartApplicationValidator = require("./CartApplicationValidator");
import CartApplicationModel = require("./CartApplicationModel");
