const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const CartValidator = require("./CartApplicationValidator");
const CartModel = require("./CartApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Cart {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      addAddress: "/service/application/cart/v1.0/address",
      addItems: "/service/application/cart/v1.0/detail",
      applyCoupon: "/service/application/cart/v1.0/coupon",
      applyRewardPoints: "/service/application/cart/v1.0/redeem/points/",
      checkoutCart: "/service/application/cart/v1.0/checkout",
      deleteCart: "/service/application/cart/v1.0/cart_archive",
      getAddressById: "/service/application/cart/v1.0/address/{id}",
      getAddresses: "/service/application/cart/v1.0/address",
      getBulkDiscountOffers: "/service/application/cart/v1.0/bulk-price",
      getCart: "/service/application/cart/v1.0/detail",
      getCartLastModified: "/service/application/cart/v1.0/detail",
      getCartShareLink: "/service/application/cart/v1.0/share-cart",
      getCartSharedItems: "/service/application/cart/v1.0/share-cart/{token}",
      getCoupons: "/service/application/cart/v1.0/coupon",
      getItemCount: "/service/application/cart/v1.0/basic",
      getLadderOffers: "/service/application/cart/v1.0/available-ladder-prices",
      getPromotionOffers: "/service/application/cart/v1.0/available-promotions",
      getShipments: "/service/application/cart/v1.0/shipment",
      removeAddress: "/service/application/cart/v1.0/address/{id}",
      removeCoupon: "/service/application/cart/v1.0/coupon",
      selectAddress: "/service/application/cart/v1.0/select-address",
      selectPaymentMode: "/service/application/cart/v1.0/payment",
      updateAddress: "/service/application/cart/v1.0/address/{id}",
      updateCart: "/service/application/cart/v1.0/detail",
      updateCartMeta: "/service/application/cart/v1.0/meta",
      updateCartWithSharedItems:
        "/service/application/cart/v1.0/share-cart/{token}/{action}",
      validateCouponForPayment:
        "/service/application/cart/v1.0/payment/validate/",
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
   * @param {Address} arg.body
   * @returns {Promise<SaveAddressResponse>} - Success response
   * @summary: Add address to an account
   * @description: Use this API to add an address to an account.
   */
  async addAddress({ body } = {}) {
    const { error } = CartValidator.addAddress().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.addAddress().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for addAddress",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["addAddress"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.SaveAddressResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for addAddress",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {string} [arg.areaCode] -
   * @param {boolean} [arg.buyNow] -
   * @param {AddCartRequest} arg.body
   * @returns {Promise<AddCartDetailResponse>} - Success response
   * @summary: Add items to cart
   * @description: Use this API to add items to the cart.
   */
  async addItems({ body, i, b, areaCode, buyNow } = {}) {
    const { error } = CartValidator.addItems().validate(
      { body, i, b, areaCode, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.addItems().validate(
      { body, i, b, areaCode, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for addItems",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["area_code"] = areaCode;
    query_params["buy_now"] = buyNow;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["addItems"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.AddCartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for addItems",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {boolean} [arg.p] -
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @param {ApplyCouponRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Apply Coupon
   * @description: Use this API to apply coupons on items in the cart.
   */
  async applyCoupon({ body, i, b, p, id, buyNow } = {}) {
    const { error } = CartValidator.applyCoupon().validate(
      { body, i, b, p, id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.applyCoupon().validate(
      { body, i, b, p, id, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for applyCoupon",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["p"] = p;
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["applyCoupon"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.CartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for applyCoupon",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {boolean} [arg.buyNow] -
   * @param {RewardPointRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Apply reward points at cart
   * @description: Use this API to redeem a fixed no. of reward points by applying it to the cart.
   */
  async applyRewardPoints({ body, id, i, b, buyNow } = {}) {
    const { error } = CartValidator.applyRewardPoints().validate(
      { body, id, i, b, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.applyRewardPoints().validate(
      { body, id, i, b, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for applyRewardPoints",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["buy_now"] = buyNow;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["applyRewardPoints"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.CartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for applyRewardPoints",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.buyNow] - This indicates the type of cart to checkout
   * @param {CartCheckoutDetailRequest} arg.body
   * @returns {Promise<CartCheckoutResponse>} - Success response
   * @summary: Checkout all items in the cart
   * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway.
   */
  async checkoutCart({ body, buyNow } = {}) {
    const { error } = CartValidator.checkoutCart().validate(
      { body, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.checkoutCart().validate(
      { body, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for checkoutCart",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["buy_now"] = buyNow;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["checkoutCart"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.CartCheckoutResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for checkoutCart",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.id] - The unique identifier of the cart.
   * @returns {Promise<DeleteCartDetailResponse>} - Success response
   * @summary: Delete cart once user made successful checkout
   * @description: Use this API to delete the cart.
   */
  async deleteCart({ id } = {}) {
    const { error } = CartValidator.deleteCart().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.deleteCart().validate(
      { id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for deleteCart",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["id"] = id;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["deleteCart"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.DeleteCartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for deleteCart",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id -
   * @param {string} [arg.cartId] -
   * @param {boolean} [arg.buyNow] -
   * @param {string} [arg.mobileNo] -
   * @param {string} [arg.checkoutMode] -
   * @param {string} [arg.tags] -
   * @param {boolean} [arg.isDefault] -
   * @returns {Promise<Address>} - Success response
   * @summary: Fetch a single address by its ID
   * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `Address`. Attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
   */
  async getAddressById({
    id,
    cartId,
    buyNow,
    mobileNo,
    checkoutMode,
    tags,
    isDefault,
  } = {}) {
    const { error } = CartValidator.getAddressById().validate(
      { id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getAddressById().validate(
      { id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAddressById",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["cart_id"] = cartId;
    query_params["buy_now"] = buyNow;
    query_params["mobile_no"] = mobileNo;
    query_params["checkout_mode"] = checkoutMode;
    query_params["tags"] = tags;
    query_params["is_default"] = isDefault;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAddressById"],
        params: { id },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = CartModel.Address().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAddressById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.cartId] -
   * @param {boolean} [arg.buyNow] -
   * @param {string} [arg.mobileNo] -
   * @param {string} [arg.checkoutMode] -
   * @param {string} [arg.tags] -
   * @param {boolean} [arg.isDefault] -
   * @returns {Promise<GetAddressesResponse>} - Success response
   * @summary: Fetch address
   * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
   */
  async getAddresses({
    cartId,
    buyNow,
    mobileNo,
    checkoutMode,
    tags,
    isDefault,
  } = {}) {
    const { error } = CartValidator.getAddresses().validate(
      { cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getAddresses().validate(
      { cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAddresses",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["cart_id"] = cartId;
    query_params["buy_now"] = buyNow;
    query_params["mobile_no"] = mobileNo;
    query_params["checkout_mode"] = checkoutMode;
    query_params["tags"] = tags;
    query_params["is_default"] = isDefault;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAddresses"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.GetAddressesResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAddresses",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
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
  async getBulkDiscountOffers({ itemId, articleId, uid, slug } = {}) {
    const { error } = CartValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getBulkDiscountOffers",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["item_id"] = itemId;
    query_params["article_id"] = articleId;
    query_params["uid"] = uid;
    query_params["slug"] = slug;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBulkDiscountOffers"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.BulkPriceResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getBulkDiscountOffers",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {number} [arg.assignCardId] -
   * @param {string} [arg.areaCode] -
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Fetch all items added to the cart
   * @description: Use this API to get details of all the items added to a cart.
   */
  async getCart({ id, i, b, assignCardId, areaCode, buyNow } = {}) {
    const { error } = CartValidator.getCart().validate(
      { id, i, b, assignCardId, areaCode, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getCart().validate(
      { id, i, b, assignCardId, areaCode, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCart",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["assign_card_id"] = assignCardId;
    query_params["area_code"] = areaCode;
    query_params["buy_now"] = buyNow;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCart"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.CartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCart",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @returns {Promise<any>} - Success response
   * @summary: Fetch last-modified timestamp
   * @description: Use this API to fetch Last-Modified timestamp in header metadata.
   */
  async getCartLastModified({ id } = {}) {
    const { error } = CartValidator.getCartLastModified().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getCartLastModified().validate(
      { id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCartLastModified",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["id"] = id;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "head",
      constructUrl({
        url: this._urls["getCartLastModified"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = Joi.string()
      .allow("")
      .validate(response, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCartLastModified",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetShareCartLinkRequest} arg.body
   * @returns {Promise<GetShareCartLinkResponse>} - Success response
   * @summary: Generate token for sharing the cart
   * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.
   */
  async getCartShareLink({ body } = {}) {
    const { error } = CartValidator.getCartShareLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getCartShareLink().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCartShareLink",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getCartShareLink"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.GetShareCartLinkResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCartShareLink",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.token - Token of the shared short link
   * @returns {Promise<SharedCartResponse>} - Success response
   * @summary: Get details of a shared cart
   * @description: Use this API to get the shared cart details as per the token generated using the share-cart API.
   */
  async getCartSharedItems({ token } = {}) {
    const { error } = CartValidator.getCartSharedItems().validate(
      { token },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getCartSharedItems().validate(
      { token },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCartSharedItems",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCartSharedItems"],
        params: { token },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.SharedCartResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCartSharedItems",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<GetCouponResponse>} - Success response
   * @summary: Fetch Coupon
   * @description: Use this API to get a list of available coupons along with their details.
   */
  async getCoupons({ id, buyNow } = {}) {
    const { error } = CartValidator.getCoupons().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getCoupons().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCoupons",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCoupons"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.GetCouponResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCoupons",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] - The unique identifier of the cart.
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<CartItemCountResponse>} - Success response
   * @summary: Count items in the cart
   * @description: Use this API to get the total number of items present in cart.
   */
  async getItemCount({ id, buyNow } = {}) {
    const { error } = CartValidator.getItemCount().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getItemCount().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getItemCount",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getItemCount"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.CartItemCountResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getItemCount",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
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
  async getLadderOffers({ slug, storeId, promotionId, pageSize } = {}) {
    const { error } = CartValidator.getLadderOffers().validate(
      { slug, storeId, promotionId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getLadderOffers().validate(
      { slug, storeId, promotionId, pageSize },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getLadderOffers",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["slug"] = slug;
    query_params["store_id"] = storeId;
    query_params["promotion_id"] = promotionId;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLadderOffers"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.LadderPriceOffers().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getLadderOffers",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
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
  async getPromotionOffers({ slug, pageSize, promotionGroup } = {}) {
    const { error } = CartValidator.getPromotionOffers().validate(
      { slug, pageSize, promotionGroup },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getPromotionOffers().validate(
      { slug, pageSize, promotionGroup },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getPromotionOffers",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["slug"] = slug;
    query_params["page_size"] = pageSize;
    query_params["promotion_group"] = promotionGroup;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPromotionOffers"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.PromotionOffersResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPromotionOffers",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.p] - This is a boolean value. Select `true` for
   *   getting a payment option in response.
   * @param {string} [arg.id] - The unique identifier of the cart
   * @param {boolean} [arg.buyNow] -
   * @param {string} [arg.addressId] - ID allotted to the selected address
   * @param {string} [arg.areaCode] - The PIN Code of the destination address,
   *   e.g. 400059
   * @returns {Promise<CartShipmentsResponse>} - Success response
   * @summary: Get delivery date and options before checkout
   * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.
   */
  async getShipments({ p, id, buyNow, addressId, areaCode } = {}) {
    const { error } = CartValidator.getShipments().validate(
      { p, id, buyNow, addressId, areaCode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getShipments().validate(
      { p, id, buyNow, addressId, areaCode },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getShipments",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["p"] = p;
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;
    query_params["address_id"] = addressId;
    query_params["area_code"] = areaCode;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getShipments"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.CartShipmentsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getShipments",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the selected address
   * @returns {Promise<DeleteAddressResponse>} - Success response
   * @summary: Remove address associated with an account
   * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.
   */
  async removeAddress({ id } = {}) {
    const { error } = CartValidator.removeAddress().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.removeAddress().validate(
      { id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for removeAddress",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["removeAddress"],
        params: { id },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.DeleteAddressResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for removeAddress",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Remove Coupon Applied
   * @description: Remove Coupon applied on the cart by passing uid in request body.
   */
  async removeCoupon({ id, buyNow } = {}) {
    const { error } = CartValidator.removeCoupon().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.removeCoupon().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for removeCoupon",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["removeCoupon"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.CartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for removeCoupon",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.cartId] -
   * @param {boolean} [arg.buyNow] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {SelectCartAddressRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Select an address from available addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>
   */
  async selectAddress({ body, cartId, buyNow, i, b } = {}) {
    const { error } = CartValidator.selectAddress().validate(
      { body, cartId, buyNow, i, b },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.selectAddress().validate(
      { body, cartId, buyNow, i, b },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for selectAddress",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["cart_id"] = cartId;
    query_params["buy_now"] = buyNow;
    query_params["i"] = i;
    query_params["b"] = b;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["selectAddress"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.CartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for selectAddress",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @param {UpdateCartPaymentRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Update cart payment
   * @description: Use this API to update cart payment.
   */
  async selectPaymentMode({ body, id, buyNow } = {}) {
    const { error } = CartValidator.selectPaymentMode().validate(
      { body, id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.selectPaymentMode().validate(
      { body, id, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for selectPaymentMode",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["selectPaymentMode"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.CartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for selectPaymentMode",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the selected address
   * @param {Address} arg.body
   * @returns {Promise<UpdateAddressResponse>} - Success response
   * @summary: Update address added to an account
   * @description: <p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   */
  async updateAddress({ id, body } = {}) {
    const { error } = CartValidator.updateAddress().validate(
      { id, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.updateAddress().validate(
      { id, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateAddress",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateAddress"],
        params: { id },
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.UpdateAddressResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateAddress",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {string} [arg.areaCode] -
   * @param {boolean} [arg.buyNow] -
   * @param {UpdateCartRequest} arg.body
   * @returns {Promise<UpdateCartDetailResponse>} - Success response
   * @summary: Update items in the cart
   * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   */
  async updateCart({ body, id, i, b, areaCode, buyNow } = {}) {
    const { error } = CartValidator.updateCart().validate(
      { body, id, i, b, areaCode, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.updateCart().validate(
      { body, id, i, b, areaCode, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateCart",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["area_code"] = areaCode;
    query_params["buy_now"] = buyNow;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateCart"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.UpdateCartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateCart",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @param {CartMetaRequest} arg.body
   * @returns {Promise<CartMetaResponse>} - Success response
   * @summary: Update the cart meta
   * @description: Use this API to update cart meta like checkout_mode and gstin.
   */
  async updateCartMeta({ body, id, buyNow } = {}) {
    const { error } = CartValidator.updateCartMeta().validate(
      { body, id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.updateCartMeta().validate(
      { body, id, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateCartMeta",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateCartMeta"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = CartModel.CartMetaResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateCartMeta",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
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
  async updateCartWithSharedItems({ token, action } = {}) {
    const { error } = CartValidator.updateCartWithSharedItems().validate(
      { token, action },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartValidator.updateCartWithSharedItems().validate(
      { token, action },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateCartWithSharedItems",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["updateCartWithSharedItems"],
        params: { token, action },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.SharedCartResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateCartWithSharedItems",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

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
  async validateCouponForPayment({
    id,
    buyNow,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode,
  } = {}) {
    const { error } = CartValidator.validateCouponForPayment().validate(
      {
        id,
        buyNow,
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

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartValidator.validateCouponForPayment().validate(
      {
        id,
        buyNow,
        addressId,
        paymentMode,
        paymentIdentifier,
        aggregatorName,
        merchantCode,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for validateCouponForPayment",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;
    query_params["address_id"] = addressId;
    query_params["payment_mode"] = paymentMode;
    query_params["payment_identifier"] = paymentIdentifier;
    query_params["aggregator_name"] = aggregatorName;
    query_params["merchant_code"] = merchantCode;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["validateCouponForPayment"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CartModel.PaymentCouponValidate().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for validateCouponForPayment",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Cart;
