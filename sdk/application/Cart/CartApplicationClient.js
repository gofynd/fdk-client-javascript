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
      getCartShareLink: "/service/application/cart/v1.0/share-cart",
      getCartSharedItems: "/service/application/cart/v1.0/share-cart/{token}",
      getCoupons: "/service/application/cart/v1.0/coupon",
      getItemCount: "/service/application/cart/v1.0/basic",
      getLadderOffers: "/service/application/cart/v1.0/available-ladder-prices",
      getPromotionOffers: "/service/application/cart/v1.0/available-promotions",
      getPromotionPaymentOffers:
        "/service/application/cart/v1.0/available-payment-offers",
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
   * @returns {Promise<CartApplicationModel.SaveAddressResult>} - Success response
   * @name addAddress
   * @summary: Creates a new address for a customer
   * @description: Add a new address to their cart to save details such as name, email, contact information, and address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/addAddress/).
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
    } = CartApplicationModel.SaveAddressResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.AddCartDetailResult>} - Success response
   * @name addItems
   * @summary: Add items to a cart
   * @description: Add product items to the customer's existing shopping cart. If there is no existing cart associated with the customer, it creates a new one and adds the items to it. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/addItems/).
   */
  async addItems(
    { body, i, b, areaCode, buyNow, id, orderType, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.addItems().validate(
      { body, i, b, areaCode, buyNow, id, orderType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartApplicationValidator.addItems().validate(
      { body, i, b, areaCode, buyNow, id, orderType },
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
    query_params["order_type"] = orderType;

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
    } = CartApplicationModel.AddCartDetailResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.CartDetailResult>} - Success response
   * @name applyCoupon
   * @summary: Apply coupon
   * @description: Apply a coupon code to the cart to trigger discounts on eligible items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/applyCoupon/).
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
    } = CartApplicationModel.CartDetailResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.CartDetailResult>} - Success response
   * @name applyRewardPoints
   * @summary: Use reward points
   * @description: Users can redeem their accumulated reward points and apply them to the items in their cart, thereby availing discounts on their current purchases. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/applyRewardPoints/).
   */
  async applyRewardPoints(
    { body, id, i, b, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.applyRewardPoints().validate(
      { body, id, i, b, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.applyRewardPoints().validate(
      { body, id, i, b, buyNow },
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
    } = CartApplicationModel.CartDetailResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.CartCheckoutResult>} - Success response
   * @name checkoutCart
   * @summary: Checkout cart
   * @description: The checkout cart initiates the order creation process based on the selected address and payment method. It revalidates the cart details to ensure safe and seamless order placement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/checkoutCart/).
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
    } = CartApplicationModel.CartCheckoutResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.CartCheckoutResult>} - Success response
   * @name checkoutCartV2
   * @summary: Checkout cart
   * @description: The checkout cart initiates the order creation process based on the items in the user’s cart,  their selected address, and chosen payment methods. It also supports multiple payment method  options and revalidates the cart details to ensure a secure and seamless order placement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/checkoutCartV2/).
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
    } = CartApplicationModel.CartCheckoutResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.DeleteCartDetailResult>} - Success response
   * @name deleteCart
   * @summary: Delete a cart
   * @description: Delete all items from the user's cart and resets it to its initial state, providing a clean slate for new selections. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/deleteCart/).
   */
  async deleteCart(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.deleteCart().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartApplicationValidator.deleteCart().validate(
      { id },
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.DeleteCartDetailResult().validate(responseData, {
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
   * @summary: Get details for a single customer address
   * @description: Get a specific customer address stored in the system by providing its unique identifier. This API provides detailed information about the address, including the recipient's name, address, city, postal code, and other relevant details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getAddressById/).
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
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getAddressById().validate(
      { id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getAddressById().validate(
      { id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
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
   * @returns {Promise<CartApplicationModel.GetAddressesResult>} - Success response
   * @name getAddresses
   * @summary: Get a list of addresses for a customer
   * @description: List all addresses saved by the customer, simplifying the checkout process by offering pre-saved address options for delivery. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getAddresses/).
   */
  async getAddresses(
    {
      cartId,
      buyNow,
      mobileNo,
      checkoutMode,
      tags,
      isDefault,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getAddresses().validate(
      { cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getAddresses().validate(
      { cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
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
    } = CartApplicationModel.GetAddressesResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.BulkPriceResult>} - Success response
   * @name getBulkDiscountOffers
   * @summary: List bulk discounts
   * @description: List offer discounts with information about quantity and seller. One offer is marked with a "best" flag, indicating it as the best offer among the list. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getBulkDiscountOffers/).
   */
  async getBulkDiscountOffers(
    { itemId, articleId, uid, slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug },
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
    } = CartApplicationModel.BulkPriceResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.CartDetailResult>} - Success response
   * @name getCart
   * @summary: Get a cart
   * @description: Get details of a cart linked to a specific customer using a unique cart ID. It offers an overview of the items, quantities, prices, and other relevant information associated with the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCart/).
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
      orderType,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getCart().validate(
      { id, i, b, c, assignCardId, areaCode, buyNow, orderType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartApplicationValidator.getCart().validate(
      { id, i, b, c, assignCardId, areaCode, buyNow, orderType },
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
    query_params["order_type"] = orderType;

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
    } = CartApplicationModel.CartDetailResult().validate(responseData, {
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
   * @summary: Get last modified timestamp of a cart
   * @description: Retrieve the last modified timestamp of the cart using unique cart ID. It indicates the most recent update made to the cart's content or properties. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartLastModified/).
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
   * @param {CartApplicationValidator.GetCartShareLinkParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.GetShareCartLinkResult>} - Success response
   * @name getCartShareLink
   * @summary: Create share cart link
   * @description: Generate a unique shareable link for the customer's cart for a specific sales channel. This link enables easy sharing of the cart contents with other users, facilitating collaborative shopping experiences. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartShareLink/).
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
    } = CartApplicationModel.GetShareCartLinkResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.SharedCartResult>} - Success response
   * @name getCartSharedItems
   * @summary: List shared cart items
   * @description: Get cart items from the shared cart link based on unique token. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCartSharedItems/).
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
    } = CartApplicationModel.SharedCartResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.GetCouponResult>} - Success response
   * @name getCoupons
   * @summary: List available coupons
   * @description: List all available coupons that customer can apply to their carts. It provides details about each coupon, including its code, discount amount, and applicable conditions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getCoupons/).
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
    } = CartApplicationModel.GetCouponResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.CartItemCountResult>} - Success response
   * @name getItemCount
   * @summary: Get a cart items count
   * @description: Get total count of items currently present in the customer's cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getItemCount/).
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
    } = CartApplicationModel.CartItemCountResult().validate(responseData, {
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
   * @param {CartApplicationValidator.GetLadderOffersParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.LadderPriceOffers>} - Success response
   * @name getLadderOffers
   * @summary: List ladder offers
   * @description: Get ladder offers associated for the items in the cart. Ladder offers provide discounts or special pricing based on item quantity, allowing users to benefit from bulk purchases or promotional deals. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getLadderOffers/).
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
   * @returns {Promise<CartApplicationModel.PromotionOffersResult>} - Success response
   * @name getPromotionOffers
   * @summary: List available promotion offers
   * @description: List all promotional offers available for the items in the cart, including details such as offer text, unique promotion ID, and validity period. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getPromotionOffers/).
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
    } = CartApplicationModel.PromotionOffersResult().validate(responseData, {
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
   * @param {CartApplicationValidator.GetPromotionPaymentOffersParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.PromotionPaymentOffersResult>} -
   *   Success response
   * @name getPromotionPaymentOffers
   * @summary: Fetch available promotions payment offers
   * @description: Use this API to get top 5 payment offers available for current product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getPromotionPaymentOffers/).
   */
  async getPromotionPaymentOffers(
    { id, uid, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartApplicationValidator.getPromotionPaymentOffers().validate(
      { id, uid },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getPromotionPaymentOffers().validate(
      { id, uid },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getPromotionPaymentOffers \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["uid"] = uid;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPromotionPaymentOffers"],
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
    } = CartApplicationModel.PromotionPaymentOffersResult().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Cart > getPromotionPaymentOffers \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartApplicationValidator.GetShipmentsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CartApplicationModel.CartShipmentsResult>} - Success response
   * @name getShipments
   * @summary: List shipments
   * @description: Get shipment details for the items in a cart, specific to the selected address. Shipment details include delivery promises, seller information, item details, and other relevant information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/getShipments/).
   */
  async getShipments(
    { p, id, buyNow, addressId, areaCode, orderType, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.getShipments().validate(
      { p, id, buyNow, addressId, areaCode, orderType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.getShipments().validate(
      { p, id, buyNow, addressId, areaCode, orderType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > getShipments \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["p"] = p;
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;
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
    } = CartApplicationModel.CartShipmentsResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.DeleteAddressResult>} - Success response
   * @name removeAddress
   * @summary: Removes an address from a customer's address list
   * @description: Delete an existing customer address from the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/removeAddress/).
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
    } = CartApplicationModel.DeleteAddressResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.CartDetailResult>} - Success response
   * @name removeCoupon
   * @summary: Remove coupon
   * @description: Remove an applied coupon from the customer's cart, thereby removing the associated discount from the cart total. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/removeCoupon/).
   */
  async removeCoupon(
    { id, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.removeCoupon().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.removeCoupon().validate(
      { id, buyNow },
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
    } = CartApplicationModel.CartDetailResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.CartDetailResult>} - Success response
   * @name selectAddress
   * @summary: Select customer address for order processing
   * @description: Select an address from the saved customer addresses and validates the availability of items in the cart. Additionally, it verifies and updates the delivery promise based on the selected address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/selectAddress/).
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
    } = CartApplicationModel.CartDetailResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.CartDetailResult>} - Success response
   * @name selectPaymentMode
   * @summary: Select payment mode
   * @description: Select a preferred payment mode from available options during the cart checkout process to securely and efficiently complete their transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/selectPaymentMode/).
   */
  async selectPaymentMode(
    { body, id, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.selectPaymentMode().validate(
      { body, id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.selectPaymentMode().validate(
      { body, id, buyNow },
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
    } = CartApplicationModel.CartDetailResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.UpdateAddressResult>} - Success response
   * @name updateAddress
   * @summary: Updates an existing customer address
   * @description: Customer can modify the details of a previously saved addresses. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateAddress/).
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
    } = CartApplicationModel.UpdateAddressResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.UpdateCartDetailResult>} - Success response
   * @name updateCart
   * @summary: Update cart items
   * @description: Update cart. Customers can modify added product attributes such as quantity and size, as well as remove items from the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCart/).
   */
  async updateCart(
    {
      body,
      id,
      i,
      b,
      areaCode,
      buyNow,
      cartType,
      orderType,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartApplicationValidator.updateCart().validate(
      { body, id, i, b, areaCode, buyNow, cartType, orderType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartApplicationValidator.updateCart().validate(
      { body, id, i, b, areaCode, buyNow, cartType, orderType },
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
    query_params["order_type"] = orderType;

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
    } = CartApplicationModel.UpdateCartDetailResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.CartMetaResult>} - Success response
   * @name updateCartMeta
   * @summary: Update cart metadata
   * @description: Update metadata associated with a cart, which includes customer preferences, delivery instructions, or any special requirements related to the cart items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCartMeta/).
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
    } = CartApplicationModel.CartMetaResult().validate(responseData, {
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
   * @returns {Promise<CartApplicationModel.SharedCartResult>} - Success response
   * @name updateCartWithSharedItems
   * @summary: Update with shared items
   * @description: Merge or replace shared cart items with existing cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/updateCartWithSharedItems/).
   */
  async updateCartWithSharedItems(
    { token, action, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartApplicationValidator.updateCartWithSharedItems().validate(
      { token, action },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartApplicationValidator.updateCartWithSharedItems().validate(
      { token, action },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Cart > updateCartWithSharedItems \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartApplicationModel.SharedCartResult().validate(responseData, {
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
   * @summary: Validate applied coupon
   * @description: Validate the applicability of a coupon code for the selected payment mode for the existing cart. This ensures the coupon's validity before proceeding with the payment process, enhancing user experience and preventing potential errors during transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/cart/validateCouponForPayment/).
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
