const ApplicationAPIClient = require("../ApplicationAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const CartApplicationValidator = require("./CartApplicationValidator");
const CartApplicationModel = require("./CartApplicationModel");
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
      checkoutCartV2: "/service/application/cart/v2.0/checkout",
      deleteCart: "/service/application/cart/v1.0/cart_archive",
      getAddressById: "/service/application/cart/v1.0/address/{id}",
      getAddresses: "/service/application/cart/v1.0/address",
      getBulkDiscountOffers: "/service/application/cart/v1.0/bulk-price",
      getCart: "/service/application/cart/v1.0/detail",
      getCartLastModified: "/service/application/cart/v1.0/detail",
      getCartMetaConfig:
        "/service/application/cart/v1.0/cart/configuration/{cart_meta_id}",
      getCartMetaConfigs: "/service/application/cart/v1.0/cart/configuration",
      getCartShareLink: "/service/application/cart/v1.0/share-cart",
      getCartSharedItems: "/service/application/cart/v1.0/share-cart/{token}",
      getCoupons: "/service/application/cart/v1.0/coupon",
      getItemCount: "/service/application/cart/v1.0/basic",
      getItemCountV2: "/service/application/cart/v2.0/basic",
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
   * @param {CartApplicationValidator.AddAddressParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.SaveAddressResponse>} - Success response
   * @name addAddress
   * @summary: Add new address.
   * @description: Saves a new address for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/addAddress/).
   */
  async addAddress(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.addAddress().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartApplicationValidator.addAddress().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > addAddress \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.SaveAddressResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > addAddress \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.AddItemsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.AddCartDetailResponse>} - Success response
   * @name addItems
   * @summary: Add to cart.
   * @description: Adds selected items to the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/addItems/).
   */
  async addItems(
    { body, i, b, areaCode, buyNow, id, cartType, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.addItems().validate(
      { body, i, b, areaCode, buyNow, id, cartType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartApplicationValidator.addItems().validate(
      { body, i, b, areaCode, buyNow, id, cartType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > addItems \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["area_code"] = areaCode;
    query_params["buy_now"] = buyNow;
    query_params["id"] = id;
    query_params["cart_type"] = cartType;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.AddCartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > addItems \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.ApplyCouponParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
   * @name applyCoupon
   * @summary: Apply coupon.
   * @description: Applies a coupon code to get discounts on cart items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/applyCoupon/).
   */
  async applyCoupon(
    { body, i, b, p, id, buyNow, cartType, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.applyCoupon().validate(
      { body, i, b, p, id, buyNow, cartType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartApplicationValidator.applyCoupon().validate(
      { body, i, b, p, id, buyNow, cartType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > applyCoupon \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["p"] = p;
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;
    query_params["cart_type"] = cartType;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > applyCoupon \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.ApplyRewardPointsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
   * @name applyRewardPoints
   * @summary: Use reward points.
   * @description: Applies user’s reward points to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/applyRewardPoints/).
   */
  async applyRewardPoints(
    { body, id, i, b, buyNow, cartType, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.applyRewardPoints().validate(
      { body, id, i, b, buyNow, cartType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.applyRewardPoints().validate(
      { body, id, i, b, buyNow, cartType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > applyRewardPoints \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["buy_now"] = buyNow;
    query_params["cart_type"] = cartType;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > applyRewardPoints \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.CheckoutCartParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.CartCheckoutResponse>} - Success response
   * @name checkoutCart
   * @summary: Checkout cart.
   * @description: Initiates the checkout process for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/checkoutCart/).
   */
  async checkoutCart(
    { body, buyNow, cartType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.checkoutCart().validate(
      { body, buyNow, cartType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.checkoutCart().validate(
      { body, buyNow, cartType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > checkoutCart \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["buy_now"] = buyNow;
    query_params["cart_type"] = cartType;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.CartCheckoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > checkoutCart \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.CheckoutCartV2Param} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.CartCheckoutResponse>} - Success response
   * @name checkoutCartV2
   * @summary: Enhanced cart checkout process
   * @description: Initiates a more secure and detailed checkout process. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/checkoutCartV2/).
   */
  async checkoutCartV2(
    { body, buyNow, cartType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.checkoutCartV2().validate(
      { body, buyNow, cartType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.checkoutCartV2().validate(
      { body, buyNow, cartType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > checkoutCartV2 \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["buy_now"] = buyNow;
    query_params["cart_type"] = cartType;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["checkoutCartV2"],
        params: {},
      }),
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.CartCheckoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > checkoutCartV2 \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.DeleteCartParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.DeleteCartDetailResponse>} -
   *   Success response
   * @name deleteCart
   * @summary: Clears the cart
   * @description: Removes all items and resets the user's cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/deleteCart/).
   */
  async deleteCart(
    { body, id, cartType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.deleteCart().validate(
      { body, id, cartType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartApplicationValidator.deleteCart().validate(
      { body, id, cartType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > deleteCart \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["cart_type"] = cartType;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["deleteCart"],
        params: {},
      }),
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.DeleteCartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > deleteCart \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetAddressByIdParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.Address>} - Success response
   * @name getAddressById
   * @summary: Fetch address.
   * @description: Retrieves a saved address using its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getAddressById/).
   */
  async getAddressById(
    {
      id,
      cartId,
      buyNow,
      mobileNo,
      checkoutMode,
      tags,
      isDefault,
      userId,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getAddressById().validate(
      { id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getAddressById().validate(
      { id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getAddressById \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["cart_id"] = cartId;
    query_params["buy_now"] = buyNow;
    query_params["mobile_no"] = mobileNo;
    query_params["checkout_mode"] = checkoutMode;
    query_params["tags"] = tags;
    query_params["is_default"] = isDefault;
    query_params["user_id"] = userId;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.Address().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getAddressById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetAddressesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.GetAddressesResponse>} - Success response
   * @name getAddresses
   * @summary: Get saved addresses.
   * @description: Retrieve all saved addresses for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getAddresses/).
   */
  async getAddresses(
    {
      cartId,
      buyNow,
      mobileNo,
      checkoutMode,
      tags,
      isDefault,
      userId,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getAddresses().validate(
      { cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getAddresses().validate(
      { cartId, buyNow, mobileNo, checkoutMode, tags, isDefault, userId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getAddresses \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["cart_id"] = cartId;
    query_params["buy_now"] = buyNow;
    query_params["mobile_no"] = mobileNo;
    query_params["checkout_mode"] = checkoutMode;
    query_params["tags"] = tags;
    query_params["is_default"] = isDefault;
    query_params["user_id"] = userId;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.GetAddressesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getAddresses \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetBulkDiscountOffersParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.BulkPriceResponse>} - Success response
   * @name getBulkDiscountOffers
   * @summary: Bulk discounts.
   * @description: Lists available bulk discount offers for cart items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getBulkDiscountOffers/).
   */
  async getBulkDiscountOffers(
    { itemId, articleId, uid, slug, cartType, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug, cartType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug, cartType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getBulkDiscountOffers \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["item_id"] = itemId;
    query_params["article_id"] = articleId;
    query_params["uid"] = uid;
    query_params["slug"] = slug;
    query_params["cart_type"] = cartType;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.BulkPriceResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getBulkDiscountOffers \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetCartParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
   * @name getCart
   * @summary: Retrieve cart details.
   * @description: Retrieve the current state and items in the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCart/).
   */
  async getCart(
    {
      id,
      i,
      b,
      c,
      assignCardId,
      areaCode,
      buyNow,
      cartType,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getCart().validate(
      { id, i, b, c, assignCardId, areaCode, buyNow, cartType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartApplicationValidator.getCart().validate(
      { id, i, b, c, assignCardId, areaCode, buyNow, cartType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getCart \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["c"] = c;
    query_params["assign_card_id"] = assignCardId;
    query_params["area_code"] = areaCode;
    query_params["buy_now"] = buyNow;
    query_params["cart_type"] = cartType;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getCart \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetCartLastModifiedParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<any>} - Success response
   * @name getCartLastModified
   * @summary: Cart modification time.
   * @description: Gets the last modified timestamp for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartLastModified/).
   */
  async getCartLastModified(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getCartLastModified().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getCartLastModified().validate(
      { id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getCartLastModified \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.string()
      .allow("")
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getCartLastModified \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetCartMetaConfigParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.CartConfigDetailResponse>} -
   *   Success response
   * @name getCartMetaConfig
   * @summary: Get cart configuration by id
   * @description: Get cart configuration by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartMetaConfig/).
   */
  async getCartMetaConfig(
    { cartMetaId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getCartMetaConfig().validate(
      { cartMetaId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getCartMetaConfig().validate(
      { cartMetaId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getCartMetaConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCartMetaConfig"],
        params: { cartMetaId },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.CartConfigDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getCartMetaConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetCartMetaConfigsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.CartMetaConfigListResponse>} -
   *   Success response
   * @name getCartMetaConfigs
   * @summary: Get cart configuration
   * @description: Get cart configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartMetaConfigs/).
   */
  async getCartMetaConfigs(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getCartMetaConfigs().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getCartMetaConfigs().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getCartMetaConfigs \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCartMetaConfigs"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.CartMetaConfigListResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getCartMetaConfigs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetCartShareLinkParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.GetShareCartLinkResponse>} -
   *   Success response
   * @name getCartShareLink
   * @summary: Share cart link.
   * @description: Generates a shareable link for the current cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartShareLink/).
   */
  async getCartShareLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getCartShareLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getCartShareLink().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getCartShareLink \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.GetShareCartLinkResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getCartShareLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetCartSharedItemsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.SharedCartResponse>} - Success response
   * @name getCartSharedItems
   * @summary: Shared cart items.
   * @description: Retrieves items from a shared cart link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartSharedItems/).
   */
  async getCartSharedItems(
    { token, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getCartSharedItems().validate(
      { token },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getCartSharedItems().validate(
      { token },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getCartSharedItems \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.SharedCartResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getCartSharedItems \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetCouponsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.GetCouponResponse>} - Success response
   * @name getCoupons
   * @summary: List available coupons.
   * @description: Retrieve coupons that can be applied to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCoupons/).
   */
  async getCoupons(
    { id, buyNow, slug, storeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getCoupons().validate(
      { id, buyNow, slug, storeId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartApplicationValidator.getCoupons().validate(
      { id, buyNow, slug, storeId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getCoupons \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;
    query_params["slug"] = slug;
    query_params["store_id"] = storeId;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.GetCouponResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getCoupons \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetItemCountParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.CartItemCountResponse>} - Success response
   * @name getItemCount
   * @summary: Count cart items.
   * @description: Gets the total number of items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getItemCount/).
   */
  async getItemCount(
    { id, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getItemCount().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getItemCount().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getItemCount \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.CartItemCountResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getItemCount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetItemCountV2Param} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.CartItemCountResponseV2>} - Success response
   * @name getItemCountV2
   * @summary: Count items in the cart according to cart_type
   * @description: Use this API to get the total number of items present in cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getItemCountV2/).
   */
  async getItemCountV2(
    { id, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getItemCountV2().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getItemCountV2().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getItemCountV2 \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getItemCountV2"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.CartItemCountResponseV2().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getItemCountV2 \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetLadderOffersParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.LadderPriceOffers>} - Success response
   * @name getLadderOffers
   * @summary: Fetches ladder offers.
   * @description: Gets tiered discounts based on cart value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getLadderOffers/).
   */
  async getLadderOffers(
    { slug, storeId, promotionId, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getLadderOffers().validate(
      { slug, storeId, promotionId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getLadderOffers().validate(
      { slug, storeId, promotionId, pageSize },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getLadderOffers \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.LadderPriceOffers().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getLadderOffers \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetPromotionOffersParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.PromotionOffersResponse>} - Success response
   * @name getPromotionOffers
   * @summary: Retrieves promotional offers
   * @description: Lists all available promotional offers for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getPromotionOffers/).
   */
  async getPromotionOffers(
    { slug, pageSize, promotionGroup, storeId, cartType, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getPromotionOffers().validate(
      { slug, pageSize, promotionGroup, storeId, cartType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getPromotionOffers().validate(
      { slug, pageSize, promotionGroup, storeId, cartType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getPromotionOffers \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["slug"] = slug;
    query_params["page_size"] = pageSize;
    query_params["promotion_group"] = promotionGroup;
    query_params["store_id"] = storeId;
    query_params["cart_type"] = cartType;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.PromotionOffersResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getPromotionOffers \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetShipmentsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.CartShipmentsResponse>} - Success response
   * @name getShipments
   * @summary: List shipments.
   * @description: Retrieve shipment details for items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getShipments/).
   */
  async getShipments(
    {
      pickAtStoreUid,
      orderingStoreId,
      i,
      p,
      id,
      addressId,
      areaCode,
      orderType,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getShipments().validate(
      {
        pickAtStoreUid,
        orderingStoreId,
        i,
        p,
        id,
        addressId,
        areaCode,
        orderType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getShipments().validate(
      {
        pickAtStoreUid,
        orderingStoreId,
        i,
        p,
        id,
        addressId,
        areaCode,
        orderType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getShipments \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["pick_at_store_uid"] = pickAtStoreUid;
    query_params["ordering_store_id"] = orderingStoreId;
    query_params["i"] = i;
    query_params["p"] = p;
    query_params["id"] = id;
    query_params["address_id"] = addressId;
    query_params["area_code"] = areaCode;
    query_params["order_type"] = orderType;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.CartShipmentsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getShipments \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.RemoveAddressParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.DeleteAddressResponse>} - Success response
   * @name removeAddress
   * @summary: Delete address.
   * @description: Removes a saved address from the user's profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/removeAddress/).
   */
  async removeAddress(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.removeAddress().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.removeAddress().validate(
      { id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > removeAddress \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.DeleteAddressResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > removeAddress \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.RemoveCouponParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
   * @name removeCoupon
   * @summary: Remove coupon.
   * @description: Removes an applied coupon from the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/removeCoupon/).
   */
  async removeCoupon(
    { id, buyNow, cartType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.removeCoupon().validate(
      { id, buyNow, cartType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.removeCoupon().validate(
      { id, buyNow, cartType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > removeCoupon \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;
    query_params["cart_type"] = cartType;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > removeCoupon \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.SelectAddressParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
   * @name selectAddress
   * @summary: Choose delivery address.
   * @description: Selects an address for the cart's delivery. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/selectAddress/).
   */
  async selectAddress(
    { body, cartId, buyNow, i, b, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.selectAddress().validate(
      { body, cartId, buyNow, i, b },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.selectAddress().validate(
      { body, cartId, buyNow, i, b },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > selectAddress \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > selectAddress \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.SelectPaymentModeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.CartDetailResponse>} - Success response
   * @name selectPaymentMode
   * @summary: Pick payment method.
   * @description: Chooses a payment mode for the checkout process. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/selectPaymentMode/).
   */
  async selectPaymentMode(
    { body, id, buyNow, orderType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.selectPaymentMode().validate(
      { body, id, buyNow, orderType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.selectPaymentMode().validate(
      { body, id, buyNow, orderType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > selectPaymentMode \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;
    query_params["order_type"] = orderType;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > selectPaymentMode \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.UpdateAddressParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.UpdateAddressResponse>} - Success response
   * @name updateAddress
   * @summary: Update address.
   * @description: Modifies a saved address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateAddress/).
   */
  async updateAddress(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.updateAddress().validate(
      { id, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.updateAddress().validate(
      { id, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > updateAddress \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.UpdateAddressResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > updateAddress \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.UpdateCartParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.UpdateCartDetailResponse>} -
   *   Success response
   * @name updateCart
   * @summary: Update items in the cart
   * @description: Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs operation: Operation for current api call. update_item for update items. remove_item for removing items. item_id "/platform/content/v1/products/" item_size "/platform/content/v1/products/:slug/sizes/" quantity item quantity (must be greater than or equal to 1) article_id "/content​/v1​/products​/:identifier​/sizes​/price​/" item_index item position in the cart (must be greater than or equal to 0) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCart/).
   */
  async updateCart(
    { body, id, i, b, areaCode, buyNow, cartType, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.updateCart().validate(
      { body, id, i, b, areaCode, buyNow, cartType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartApplicationValidator.updateCart().validate(
      { body, id, i, b, areaCode, buyNow, cartType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > updateCart \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["area_code"] = areaCode;
    query_params["buy_now"] = buyNow;
    query_params["cart_type"] = cartType;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.UpdateCartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > updateCart \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.UpdateCartMetaParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.CartMetaResponse>} - Success response
   * @name updateCartMeta
   * @summary: Update cart metadata.
   * @description: Adds or modifies metadata for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCartMeta/).
   */
  async updateCartMeta(
    { body, id, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.updateCartMeta().validate(
      { body, id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.updateCartMeta().validate(
      { body, id, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > updateCartMeta \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.CartMetaResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > updateCartMeta \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.UpdateCartWithSharedItemsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.SharedCartResponse>} - Success response
   * @name updateCartWithSharedItems
   * @summary: Merge or replace existing cart
   * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCartWithSharedItems/).
   */
  async updateCartWithSharedItems(
    { token, action, cartId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartApplicationValidator.updateCartWithSharedItems().validate(
      { token, action, cartId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.updateCartWithSharedItems().validate(
      { token, action, cartId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > updateCartWithSharedItems \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["cart_id"] = cartId;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.SharedCartResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > updateCartWithSharedItems \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.ValidateCouponForPaymentParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.PaymentCouponValidate>} - Success response
   * @name validateCouponForPayment
   * @summary: Validate coupon.
   * @description: Checks if a coupon is valid for the selected payment mode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/validateCouponForPayment/).
   */
  async validateCouponForPayment(
    {
      id,
      buyNow,
      addressId,
      paymentMode,
      paymentIdentifier,
      aggregatorName,
      merchantCode,
      iin,
      network,
      type,
      cardId,
      cartType,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartApplicationValidator.validateCouponForPayment().validate(
      {
        id,
        buyNow,
        addressId,
        paymentMode,
        paymentIdentifier,
        aggregatorName,
        merchantCode,
        iin,
        network,
        type,
        cardId,
        cartType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.validateCouponForPayment().validate(
      {
        id,
        buyNow,
        addressId,
        paymentMode,
        paymentIdentifier,
        aggregatorName,
        merchantCode,
        iin,
        network,
        type,
        cardId,
        cartType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > validateCouponForPayment \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;
    query_params["address_id"] = addressId;
    query_params["payment_mode"] = paymentMode;
    query_params["payment_identifier"] = paymentIdentifier;
    query_params["aggregator_name"] = aggregatorName;
    query_params["merchant_code"] = merchantCode;
    query_params["iin"] = iin;
    query_params["network"] = network;
    query_params["type"] = type;
    query_params["card_id"] = cardId;
    query_params["cart_type"] = cartType;

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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.PaymentCouponValidate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > validateCouponForPayment \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Cart;
