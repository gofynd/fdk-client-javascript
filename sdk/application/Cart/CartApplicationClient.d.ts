export = Cart;
declare class Cart {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        addAddress: string;
        addItems: string;
        applyCoupon: string;
        applyRewardPoints: string;
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
        getPromotionPaymentOffers: string;
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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.SaveAddressResponse>} - Success response
     * @name addAddress
     * @summary: Creates a new address for a customer
     * @description: Add a new address to their cart to save details such as name, email, contact information, and address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/addAddress/).
     */
    addAddress({ body, requestHeaders }?: CartApplicationValidator.AddAddressParam, { responseHeaders }?: object): Promise<CartApplicationModel.SaveAddressResponse>;
    /**
     * @param {CartApplicationValidator.AddItemsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.AddCartDetailResponse>} - Success response
     * @name addItems
     * @summary: Add items to a cart
     * @description: Add product items to the customer's existing shopping cart. If there is no existing cart associated with the customer, it creates a new one and adds the items to it. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/addItems/).
     */
    addItems({ body, i, b, areaCode, buyNow, id, orderType, requestHeaders }?: CartApplicationValidator.AddItemsParam, { responseHeaders }?: object): Promise<CartApplicationModel.AddCartDetailResponse>;
    /**
     * @param {CartApplicationValidator.ApplyCouponParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name applyCoupon
     * @summary: Apply coupon
     * @description: Apply a coupon code to the cart to trigger discounts on eligible items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/applyCoupon/).
     */
    applyCoupon({ body, i, b, p, id, buyNow, cartType, requestHeaders }?: CartApplicationValidator.ApplyCouponParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.ApplyRewardPointsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name applyRewardPoints
     * @summary: Use reward points
     * @description: Users can redeem their accumulated reward points and apply them to the items in their cart, thereby availing discounts on their current purchases. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/applyRewardPoints/).
     */
    applyRewardPoints({ body, id, i, b, buyNow, requestHeaders }?: CartApplicationValidator.ApplyRewardPointsParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.CheckoutCartV2Param} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartCheckoutResponse>} - Success response
     * @name checkoutCartV2
     * @summary: Checkout cart
     * @description: The checkout cart initiates the order creation process based on the items in the user’s cart,  their selected address, and chosen payment methods. It also supports multiple payment method  options and revalidates the cart details to ensure a secure and seamless order placement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/checkoutCartV2/).
     */
    checkoutCartV2({ body, buyNow, cartType, requestHeaders }?: CartApplicationValidator.CheckoutCartV2Param, { responseHeaders }?: object): Promise<CartApplicationModel.CartCheckoutResponse>;
    /**
     * @param {CartApplicationValidator.DeleteCartParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.DeleteCartDetailResponse>} -
     *   Success response
     * @name deleteCart
     * @summary: Delete a cart
     * @description: Delete all items from the user's cart and resets it to its initial state, providing a clean slate for new selections. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/deleteCart/).
     */
    deleteCart({ id, requestHeaders }?: CartApplicationValidator.DeleteCartParam, { responseHeaders }?: object): Promise<CartApplicationModel.DeleteCartDetailResponse>;
    /**
     * @param {CartApplicationValidator.GetAddressByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.Address>} - Success response
     * @name getAddressById
     * @summary: Get details for a single customer address
     * @description: Get a specific customer address stored in the system by providing its unique identifier. This API provides detailed information about the address, including the recipient's name, address, city, postal code, and other relevant details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getAddressById/).
     */
    getAddressById({ id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, requestHeaders, }?: CartApplicationValidator.GetAddressByIdParam, { responseHeaders }?: object): Promise<CartApplicationModel.Address>;
    /**
     * @param {CartApplicationValidator.GetAddressesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.GetAddressesResponse>} - Success response
     * @name getAddresses
     * @summary: Get a list of addresses for a customer
     * @description: List all addresses saved by the customer, simplifying the checkout process by offering pre-saved address options for delivery. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getAddresses/).
     */
    getAddresses({ cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, requestHeaders, }?: CartApplicationValidator.GetAddressesParam, { responseHeaders }?: object): Promise<CartApplicationModel.GetAddressesResponse>;
    /**
     * @param {CartApplicationValidator.GetBulkDiscountOffersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.BulkPriceResponse>} - Success response
     * @name getBulkDiscountOffers
     * @summary: List bulk discounts
     * @description: List offer discounts with information about quantity and seller. One offer is marked with a "best" flag, indicating it as the best offer among the list. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getBulkDiscountOffers/).
     */
    getBulkDiscountOffers({ itemId, articleId, uid, slug, requestHeaders }?: CartApplicationValidator.GetBulkDiscountOffersParam, { responseHeaders }?: object): Promise<CartApplicationModel.BulkPriceResponse>;
    /**
     * @param {CartApplicationValidator.GetCartParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name getCart
     * @summary: Get a cart
     * @description: Get details of a cart linked to a specific customer using a unique cart ID. It offers an overview of the items, quantities, prices, and other relevant information associated with the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCart/).
     */
    getCart({ id, i, b, c, assignCardId, areaCode, buyNow, orderType, requestHeaders, }?: CartApplicationValidator.GetCartParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.GetCartLastModifiedParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<any>} - Success response
     * @name getCartLastModified
     * @summary: Get last modified timestamp of a cart
     * @description: Retrieve the last modified timestamp of the cart using unique cart ID. It indicates the most recent update made to the cart's content or properties. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartLastModified/).
     */
    getCartLastModified({ id, requestHeaders }?: CartApplicationValidator.GetCartLastModifiedParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CartApplicationValidator.GetCartShareLinkParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.GetShareCartLinkResponse>} -
     *   Success response
     * @name getCartShareLink
     * @summary: Create share cart link
     * @description: Generate a unique shareable link for the customer's cart for a specific sales channel. This link enables easy sharing of the cart contents with other users, facilitating collaborative shopping experiences. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartShareLink/).
     */
    getCartShareLink({ body, requestHeaders }?: CartApplicationValidator.GetCartShareLinkParam, { responseHeaders }?: object): Promise<CartApplicationModel.GetShareCartLinkResponse>;
    /**
     * @param {CartApplicationValidator.GetCartSharedItemsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.SharedCartResponse>} - Success response
     * @name getCartSharedItems
     * @summary: List shared cart items
     * @description: Get cart items from the shared cart link based on unique token. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartSharedItems/).
     */
    getCartSharedItems({ token, requestHeaders }?: CartApplicationValidator.GetCartSharedItemsParam, { responseHeaders }?: object): Promise<CartApplicationModel.SharedCartResponse>;
    /**
     * @param {CartApplicationValidator.GetCouponsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.GetCouponResponse>} - Success response
     * @name getCoupons
     * @summary: List available coupons
     * @description: List all available coupons that customer can apply to their carts. It provides details about each coupon, including its code, discount amount, and applicable conditions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCoupons/).
     */
    getCoupons({ id, buyNow, slug, storeId, requestHeaders }?: CartApplicationValidator.GetCouponsParam, { responseHeaders }?: object): Promise<CartApplicationModel.GetCouponResponse>;
    /**
     * @param {CartApplicationValidator.GetItemCountParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartItemCountResponse>} - Success response
     * @name getItemCount
     * @summary: Get a cart items count
     * @description: Get total count of items currently present in the customer's cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getItemCount/).
     */
    getItemCount({ id, buyNow, requestHeaders }?: CartApplicationValidator.GetItemCountParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartItemCountResponse>;
    /**
     * @param {CartApplicationValidator.GetLadderOffersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.LadderPriceOffers>} - Success response
     * @name getLadderOffers
     * @summary: List ladder offers
     * @description: Get ladder offers associated for the items in the cart. Ladder offers provide discounts or special pricing based on item quantity, allowing users to benefit from bulk purchases or promotional deals. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getLadderOffers/).
     */
    getLadderOffers({ slug, storeId, promotionId, pageSize, requestHeaders }?: CartApplicationValidator.GetLadderOffersParam, { responseHeaders }?: object): Promise<CartApplicationModel.LadderPriceOffers>;
    /**
     * @param {CartApplicationValidator.GetPromotionOffersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.PromotionOffersResponse>} - Success response
     * @name getPromotionOffers
     * @summary: List available promotion offers
     * @description: List all promotional offers available for the items in the cart, including details such as offer text, unique promotion ID, and validity period. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getPromotionOffers/).
     */
    getPromotionOffers({ slug, pageSize, promotionGroup, storeId, cartType, requestHeaders }?: CartApplicationValidator.GetPromotionOffersParam, { responseHeaders }?: object): Promise<CartApplicationModel.PromotionOffersResponse>;
    /**
     * @param {CartApplicationValidator.GetPromotionPaymentOffersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.PromotionPaymentOffersResponse>}
     *   - Success response
     *
     * @name getPromotionPaymentOffers
     * @summary: Fetch available promotions payment offers
     * @description: Use this API to get top 5 payment offers available for current product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getPromotionPaymentOffers/).
     */
    getPromotionPaymentOffers({ id, uid, requestHeaders }?: CartApplicationValidator.GetPromotionPaymentOffersParam, { responseHeaders }?: object): Promise<CartApplicationModel.PromotionPaymentOffersResponse>;
    /**
     * @param {CartApplicationValidator.GetShipmentsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartShipmentsResponse>} - Success response
     * @name getShipments
     * @summary: List shipments
     * @description: Get shipment details for the items in a cart, specific to the selected address. Shipment details include delivery promises, seller information, item details, and other relevant information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getShipments/).
     */
    getShipments({ p, id, buyNow, addressId, areaCode, orderType, requestHeaders }?: CartApplicationValidator.GetShipmentsParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartShipmentsResponse>;
    /**
     * @param {CartApplicationValidator.RemoveAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.DeleteAddressResponse>} - Success response
     * @name removeAddress
     * @summary: Removes an address from a customer's address list
     * @description: Delete an existing customer address from the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/removeAddress/).
     */
    removeAddress({ id, requestHeaders }?: CartApplicationValidator.RemoveAddressParam, { responseHeaders }?: object): Promise<CartApplicationModel.DeleteAddressResponse>;
    /**
     * @param {CartApplicationValidator.RemoveCouponParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name removeCoupon
     * @summary: Remove coupon
     * @description: Remove an applied coupon from the customer's cart, thereby removing the associated discount from the cart total. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/removeCoupon/).
     */
    removeCoupon({ id, buyNow, requestHeaders }?: CartApplicationValidator.RemoveCouponParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.SelectAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name selectAddress
     * @summary: Select customer address for order processing
     * @description: Select an address from the saved customer addresses and validates the availability of items in the cart. Additionally, it verifies and updates the delivery promise based on the selected address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/selectAddress/).
     */
    selectAddress({ body, cartId, buyNow, i, b, requestHeaders }?: CartApplicationValidator.SelectAddressParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.SelectPaymentModeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
     * @name selectPaymentMode
     * @summary: Select payment mode
     * @description: Select a preferred payment mode from available options during the cart checkout process to securely and efficiently complete their transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/selectPaymentMode/).
     */
    selectPaymentMode({ body, id, buyNow, requestHeaders }?: CartApplicationValidator.SelectPaymentModeParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartDetailResponse>;
    /**
     * @param {CartApplicationValidator.UpdateAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.UpdateAddressResponse>} - Success response
     * @name updateAddress
     * @summary: Updates an existing customer address
     * @description: Customer can modify the details of a previously saved addresses. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateAddress/).
     */
    updateAddress({ id, body, requestHeaders }?: CartApplicationValidator.UpdateAddressParam, { responseHeaders }?: object): Promise<CartApplicationModel.UpdateAddressResponse>;
    /**
     * @param {CartApplicationValidator.UpdateCartParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.UpdateCartDetailResponse>} -
     *   Success response
     * @name updateCart
     * @summary: Update cart items
     * @description: Update cart. Customers can modify added product attributes such as quantity and size, as well as remove items from the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCart/).
     */
    updateCart({ body, id, i, b, areaCode, buyNow, cartType, orderType, requestHeaders, }?: CartApplicationValidator.UpdateCartParam, { responseHeaders }?: object): Promise<CartApplicationModel.UpdateCartDetailResponse>;
    /**
     * @param {CartApplicationValidator.UpdateCartMetaParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.CartMetaResponse>} - Success response
     * @name updateCartMeta
     * @summary: Update cart metadata
     * @description: Update metadata associated with a cart, which includes customer preferences, delivery instructions, or any special requirements related to the cart items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCartMeta/).
     */
    updateCartMeta({ body, id, buyNow, requestHeaders }?: CartApplicationValidator.UpdateCartMetaParam, { responseHeaders }?: object): Promise<CartApplicationModel.CartMetaResponse>;
    /**
     * @param {CartApplicationValidator.UpdateCartWithSharedItemsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.SharedCartResponse>} - Success response
     * @name updateCartWithSharedItems
     * @summary: Update with shared items
     * @description: Merge or replace shared cart items with existing cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCartWithSharedItems/).
     */
    updateCartWithSharedItems({ token, action, requestHeaders }?: CartApplicationValidator.UpdateCartWithSharedItemsParam, { responseHeaders }?: object): Promise<CartApplicationModel.SharedCartResponse>;
    /**
     * @param {CartApplicationValidator.ValidateCouponForPaymentParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CartApplicationModel.PaymentCouponValidate>} - Success response
     * @name validateCouponForPayment
     * @summary: Validate applied coupon
     * @description: Validate the applicability of a coupon code for the selected payment mode for the existing cart. This ensures the coupon's validity before proceeding with the payment process, enhancing user experience and preventing potential errors during transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/validateCouponForPayment/).
     */
    validateCouponForPayment({ id, buyNow, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, iin, network, type, cardId, cartType, requestHeaders, }?: CartApplicationValidator.ValidateCouponForPaymentParam, { responseHeaders }?: object): Promise<CartApplicationModel.PaymentCouponValidate>;
}
import CartApplicationValidator = require("./CartApplicationValidator");
import CartApplicationModel = require("./CartApplicationModel");
