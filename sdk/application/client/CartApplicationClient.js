const APIClient = require("../ApplicationAPIClient");
const Paginator = require("../../common/Paginator");
const constructUrl = require("../constructUrl");
const { FDKClientValidationError } = require("../../common/FDKError");
const CartValidator = require("../models/CartValidator");

class Cart {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getCart: "/service/application/cart/v1.0/detail",
      getCartLastModified: "/service/application/cart/v1.0/detail",
      addItems: "/service/application/cart/v1.0/detail",
      updateCart: "/service/application/cart/v1.0/detail",
      getItemCount: "/service/application/cart/v1.0/basic",
      getCoupons: "/service/application/cart/v1.0/coupon",
      applyCoupon: "/service/application/cart/v1.0/coupon",
      removeCoupon: "/service/application/cart/v1.0/coupon",
      getBulkDiscountOffers: "/service/application/cart/v1.0/bulk-price",
      applyRewardPoints: "/service/application/cart/v1.0/redeem/points/",
      getAddresses: "/service/application/cart/v1.0/address",
      addAddress: "/service/application/cart/v1.0/address",
      getAddressById: "/service/application/cart/v1.0/address/{id}",
      updateAddress: "/service/application/cart/v1.0/address/{id}",
      removeAddress: "/service/application/cart/v1.0/address/{id}",
      selectAddress: "/service/application/cart/v1.0/select-address",
      selectPaymentMode: "/service/application/cart/v1.0/payment",
      validateCouponForPayment:
        "/service/application/cart/v1.0/payment/validate/",
      getShipments: "/service/application/cart/v1.0/shipment",
      checkoutCart: "/service/application/cart/v1.0/checkout",
      updateCartMeta: "/service/application/cart/v1.0/meta",
      getCartShareLink: "/service/application/cart/v1.0/share-cart",
      getCartSharedItems: "/service/application/cart/v1.0/share-cart/{token}",
      updateCartWithSharedItems:
        "/service/application/cart/v1.0/share-cart/{token}/{action}",
      getPromotionOffers: "/service/application/cart/v1.0/available-promotions",
      getLadderOffers: "/service/application/cart/v1.0/available-ladder-prices",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {number} [arg.assignCardId] -
   * @param {string} [arg.areaCode] -
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Fetch all items added to the cart
   * @description: Use this API to get details of all the items added to a cart.
   */
  getCart({ id, i, b, assignCardId, areaCode } = {}) {
    const { error } = CartValidator.getCart().validate(
      { id, i, b, assignCardId, areaCode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["assign_card_id"] = assignCardId;
    query_params["area_code"] = areaCode;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCart"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @returns {Promise<any>} - Success response
   * @summary: Fetch last-modified timestamp
   * @description: Use this API to fetch Last-Modified timestamp in header metadata.
   */
  getCartLastModified({ id } = {}) {
    const { error } = CartValidator.getCartLastModified().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;

    return APIClient.execute(
      this._conf,
      "head",
      constructUrl({
        url: this._urls["getCartLastModified"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {string} [arg.areaCode] -
   * @param {AddCartRequest} arg.body
   * @returns {Promise<AddCartDetailResponse>} - Success response
   * @summary: Add items to cart
   * @description: Use this API to add items to the cart.
   */
  addItems({ body, i, b, areaCode } = {}) {
    const { error } = CartValidator.addItems().validate(
      { body, i, b, areaCode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["area_code"] = areaCode;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["addItems"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {string} [arg.areaCode] -
   * @param {UpdateCartRequest} arg.body
   * @returns {Promise<UpdateCartDetailResponse>} - Success response
   * @summary: Update items in the cart
   * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   */
  updateCart({ body, id, i, b, areaCode } = {}) {
    const { error } = CartValidator.updateCart().validate(
      { body, id, i, b, areaCode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["area_code"] = areaCode;

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateCart"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] - The unique identifier of the cart.
   * @returns {Promise<CartItemCountResponse>} - Success response
   * @summary: Count items in the cart
   * @description: Use this API to get the total number of items present in cart.
   */
  getItemCount({ id } = {}) {
    const { error } = CartValidator.getItemCount().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getItemCount"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @returns {Promise<GetCouponResponse>} - Success response
   * @summary: Fetch Coupon
   * @description: Use this API to get a list of available coupons along with their details.
   */
  getCoupons({ id } = {}) {
    const { error } = CartValidator.getCoupons().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCoupons"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {boolean} [arg.p] -
   * @param {string} [arg.id] -
   * @param {ApplyCouponRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Apply Coupon
   * @description: Use this API to apply coupons on items in the cart.
   */
  applyCoupon({ body, i, b, p, id } = {}) {
    const { error } = CartValidator.applyCoupon().validate(
      { body, i, b, p, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["p"] = p;
    query_params["id"] = id;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["applyCoupon"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] - The unique identifier of the cart
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Remove Coupon Applied
   * @description: Remove Coupon applied on the cart by passing uid in request body.
   */
  removeCoupon({ id } = {}) {
    const { error } = CartValidator.removeCoupon().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;

    return APIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["removeCoupon"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.itemId] - The Item ID of the product
   * @param {string} [arg.articleId] - Article Mongo ID
   * @param {number} [arg.uid] - UID of the product
   * @param {string} [arg.slug] - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @returns {Promise<BulkPriceResponse>} - Success response
   * @summary: Get discount offers based on quantity
   * @description: Use this API to get a list of applicable offers along with current, next and best offer for given product. Either one of uid, item_id, slug should be present.
   */
  getBulkDiscountOffers({ itemId, articleId, uid, slug } = {}) {
    const { error } = CartValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["item_id"] = itemId;
    query_params["article_id"] = articleId;
    query_params["uid"] = uid;
    query_params["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBulkDiscountOffers"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {RewardPointRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Apply reward points at cart
   * @description: Use this API to redeem a fixed no. of reward points by applying it to the cart.
   */
  applyRewardPoints({ body, id, i, b } = {}) {
    const { error } = CartValidator.applyRewardPoints().validate(
      { body, id, i, b },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["applyRewardPoints"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.cartId] -
   * @param {string} [arg.mobileNo] -
   * @param {string} [arg.checkoutMode] -
   * @param {string} [arg.tags] -
   * @param {boolean} [arg.isDefault] -
   * @returns {Promise<GetAddressesResponse>} - Success response
   * @summary: Fetch address
   * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
   */
  getAddresses({ cartId, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const { error } = CartValidator.getAddresses().validate(
      { cartId, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["cart_id"] = cartId;
    query_params["mobile_no"] = mobileNo;
    query_params["checkout_mode"] = checkoutMode;
    query_params["tags"] = tags;
    query_params["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAddresses"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {Address} arg.body
   * @returns {Promise<SaveAddressResponse>} - Success response
   * @summary: Add address to an account
   * @description: Use this API to add an address to an account.
   */
  addAddress({ body } = {}) {
    const { error } = CartValidator.addAddress().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["addAddress"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id -
   * @param {string} [arg.cartId] -
   * @param {string} [arg.mobileNo] -
   * @param {string} [arg.checkoutMode] -
   * @param {string} [arg.tags] -
   * @param {boolean} [arg.isDefault] -
   * @returns {Promise<Address>} - Success response
   * @summary: Fetch a single address by its ID
   * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `Address`. Attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
   */
  getAddressById({ id, cartId, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const { error } = CartValidator.getAddressById().validate(
      { id, cartId, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["cart_id"] = cartId;
    query_params["mobile_no"] = mobileNo;
    query_params["checkout_mode"] = checkoutMode;
    query_params["tags"] = tags;
    query_params["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAddressById"],
        params: { id },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the selected address
   * @param {Address} arg.body
   * @returns {Promise<UpdateAddressResponse>} - Success response
   * @summary: Update address added to an account
   * @description: <p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   */
  updateAddress({ id, body } = {}) {
    const { error } = CartValidator.updateAddress().validate(
      { id, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateAddress"],
        params: { id },
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the selected address
   * @returns {Promise<DeleteAddressResponse>} - Success response
   * @summary: Remove address associated with an account
   * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.
   */
  removeAddress({ id } = {}) {
    const { error } = CartValidator.removeAddress().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["removeAddress"],
        params: { id },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.cartId] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {SelectCartAddressRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Select an address from available addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>
   */
  selectAddress({ body, cartId, i, b } = {}) {
    const { error } = CartValidator.selectAddress().validate(
      { body, cartId, i, b },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["cart_id"] = cartId;
    query_params["i"] = i;
    query_params["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["selectAddress"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {UpdateCartPaymentRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Update cart payment
   * @description: Use this API to update cart payment.
   */
  selectPaymentMode({ body, id } = {}) {
    const { error } = CartValidator.selectPaymentMode().validate(
      { body, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["selectPaymentMode"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {string} [arg.addressId] -
   * @param {string} [arg.paymentMode] -
   * @param {string} [arg.paymentIdentifier] -
   * @param {string} [arg.aggregatorName] -
   * @param {string} [arg.merchantCode] -
   * @returns {Promise<PaymentCouponValidate>} - Success response
   * @summary: Verify the coupon eligibility against the payment mode
   * @description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc.
   */
  validateCouponForPayment({
    id,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode,
  } = {}) {
    const { error } = CartValidator.validateCouponForPayment().validate(
      {
        id,
        addressId,
        paymentMode,
        paymentIdentifier,
        aggregatorName,
        merchantCode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["address_id"] = addressId;
    query_params["payment_mode"] = paymentMode;
    query_params["payment_identifier"] = paymentIdentifier;
    query_params["aggregator_name"] = aggregatorName;
    query_params["merchant_code"] = merchantCode;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["validateCouponForPayment"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.p] - This is a boolean value. Select `true` for
   *   getting a payment option in response.
   * @param {string} [arg.id] - The unique identifier of the cart
   * @param {string} [arg.addressId] - ID allotted to the selected address
   * @param {string} [arg.areaCode] - The PIN Code of the destination address,
   *   e.g. 400059
   * @param {string} [arg.orderType] - The order type of shipment HomeDelivery
   *   - If the customer wants the order home-delivered PickAtStore - If the
   *   customer wants the handover of an order at the store itself.
   * @returns {Promise<CartShipmentsResponse>} - Success response
   * @summary: Get delivery date and options before checkout
   * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.
   */
  getShipments({ p, id, addressId, areaCode, orderType } = {}) {
    const { error } = CartValidator.getShipments().validate(
      { p, id, addressId, areaCode, orderType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["p"] = p;
    query_params["id"] = id;
    query_params["address_id"] = addressId;
    query_params["area_code"] = areaCode;
    query_params["order_type"] = orderType;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getShipments"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CartCheckoutDetailRequest} arg.body
   * @returns {Promise<CartCheckoutResponse>} - Success response
   * @summary: Checkout all items in the cart
   * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway.
   */
  checkoutCart({ body } = {}) {
    const { error } = CartValidator.checkoutCart().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["checkoutCart"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] - The unique identifier of the cart
   * @param {CartMetaRequest} arg.body
   * @returns {Promise<CartMetaResponse>} - Success response
   * @summary: Update the cart meta
   * @description: Use this API to update cart meta like checkout_mode and gstin.
   */
  updateCartMeta({ body, id } = {}) {
    const { error } = CartValidator.updateCartMeta().validate(
      { body, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateCartMeta"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetShareCartLinkRequest} arg.body
   * @returns {Promise<GetShareCartLinkResponse>} - Success response
   * @summary: Generate token for sharing the cart
   * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.
   */
  getCartShareLink({ body } = {}) {
    const { error } = CartValidator.getCartShareLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getCartShareLink"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.token - Token of the shared short link
   * @returns {Promise<SharedCartResponse>} - Success response
   * @summary: Get details of a shared cart
   * @description: Use this API to get the shared cart details as per the token generated using the share-cart API.
   */
  getCartSharedItems({ token } = {}) {
    const { error } = CartValidator.getCartSharedItems().validate(
      { token },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCartSharedItems"],
        params: { token },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.token - Token of the shared short link
   * @param {string} arg.action - Operation to perform on the existing cart
   *   merge or replace.
   * @returns {Promise<SharedCartResponse>} - Success response
   * @summary: Merge or replace existing cart
   * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.
   */
  updateCartWithSharedItems({ token, action } = {}) {
    const { error } = CartValidator.updateCartWithSharedItems().validate(
      { token, action },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["updateCartWithSharedItems"],
        params: { token, action },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.slug] - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @param {number} [arg.pageSize] - Number of offers to be fetched to show
   * @param {string} [arg.promotionGroup] - Type of promotion groups
   * @returns {Promise<PromotionOffersResponse>} - Success response
   * @summary: Fetch available promotions
   * @description: Use this API to get top 5 offers available for current product
   */
  getPromotionOffers({ slug, pageSize, promotionGroup } = {}) {
    const { error } = CartValidator.getPromotionOffers().validate(
      { slug, pageSize, promotionGroup },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["slug"] = slug;
    query_params["page_size"] = pageSize;
    query_params["promotion_group"] = promotionGroup;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPromotionOffers"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @param {string} [arg.storeId] - Store uid of assigned store on PDP page.
   *   If not passed default first created ladder will be returned
   * @param {string} [arg.promotionId] - Get ladder information of given
   *   promotion id explicitely
   * @param {number} [arg.pageSize] - Number of offers to be fetched to show
   * @returns {Promise<LadderPriceOffers>} - Success response
   * @summary: Fetch ladder price promotion
   * @description: Use this API to get applicable ladder price promotion for current product
   */
  getLadderOffers({ slug, storeId, promotionId, pageSize } = {}) {
    const { error } = CartValidator.getLadderOffers().validate(
      { slug, storeId, promotionId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["slug"] = slug;
    query_params["store_id"] = storeId;
    query_params["promotion_id"] = promotionId;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLadderOffers"],
        params: {},
      }),
      query_params,
      undefined
    );
  }
}

module.exports = Cart;
