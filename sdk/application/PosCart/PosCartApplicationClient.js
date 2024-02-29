const ApplicationAPIClient = require("../ApplicationAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const PosCartApplicationValidator = require("./PosCartApplicationValidator");
const PosCartApplicationModel = require("./PosCartApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class PosCart {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      addAddress: "/service/application/pos/cart/v1.0/address",
      addItems: "/service/application/pos/cart/v1.0/detail",
      applyCoupon: "/service/application/pos/cart/v1.0/coupon",
      applyRewardPoints: "/service/application/pos/cart/v1.0/redeem/points/",
      checkoutCart: "/service/application/pos/cart/v1.0/checkout",
      getAddressById: "/service/application/pos/cart/v1.0/address/{id}",
      getAddresses: "/service/application/pos/cart/v1.0/address",
      getAvailableDeliveryModes:
        "/service/application/pos/cart/v1.0/available-delivery-mode",
      getBulkDiscountOffers: "/service/application/pos/cart/v1.0/bulk-price",
      getCart: "/service/application/pos/cart/v1.0/detail",
      getCartLastModified: "/service/application/pos/cart/v1.0/detail",
      getCartShareLink: "/service/application/pos/cart/v1.0/share-cart",
      getCartSharedItems:
        "/service/application/pos/cart/v1.0/share-cart/{token}",
      getCoupons: "/service/application/pos/cart/v1.0/coupon",
      getItemCount: "/service/application/pos/cart/v1.0/basic",
      getShipments: "/service/application/pos/cart/v1.0/shipment",
      getStoreAddressByUid: "/service/application/pos/cart/v1.0/store-address",
      removeAddress: "/service/application/pos/cart/v1.0/address/{id}",
      removeCoupon: "/service/application/pos/cart/v1.0/coupon",
      selectAddress: "/service/application/pos/cart/v1.0/select-address",
      selectPaymentMode: "/service/application/pos/cart/v1.0/payment",
      updateAddress: "/service/application/pos/cart/v1.0/address/{id}",
      updateCart: "/service/application/pos/cart/v1.0/detail",
      updateCartMeta: "/service/application/pos/cart/v1.0/meta",
      updateCartWithSharedItems:
        "/service/application/pos/cart/v1.0/share-cart/{token}/{action}",
      updateShipments: "/service/application/pos/cart/v1.0/shipment",
      validateCouponForPayment:
        "/service/application/pos/cart/v1.0/payment/validate/",
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
   * @param {PosCartApplicationValidator.AddAddressParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.SaveAddressResponse>} - Success response
   * @name addAddress
   * @summary: Add new address.
   * @description: Saves a new address for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/addAddress/).
   */
  async addAddress(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.addAddress().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.addAddress().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > addAddress \n ${warrning}`,
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
    } = PosCartApplicationModel.SaveAddressResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > addAddress \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.AddItemsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.AddCartDetailResponse>} -
   *   Success response
   * @name addItems
   * @summary: Add to cart.
   * @description: Adds selected items to the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/addItems/).
   */
  async addItems(
    { body, i, b, areaCode, buyNow, id, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.addItems().validate(
      { body, i, b, areaCode, buyNow, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PosCartApplicationValidator.addItems().validate(
      { body, i, b, areaCode, buyNow, id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > addItems \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["area_code"] = areaCode;
    query_params["buy_now"] = buyNow;
    query_params["id"] = id;

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
    } = PosCartApplicationModel.AddCartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > addItems \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.ApplyCouponParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
   * @name applyCoupon
   * @summary: Apply coupon.
   * @description: Applies a coupon code to get discounts on cart items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/applyCoupon/).
   */
  async applyCoupon(
    { body, i, b, p, id, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.applyCoupon().validate(
      { body, i, b, p, id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.applyCoupon().validate(
      { body, i, b, p, id, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > applyCoupon \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PosCartApplicationModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > applyCoupon \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.ApplyRewardPointsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
   * @name applyRewardPoints
   * @summary: Use reward points.
   * @description: Applies user’s reward points to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/applyRewardPoints/).
   */
  async applyRewardPoints(
    { body, id, i, b, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.applyRewardPoints().validate(
      { body, id, i, b, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.applyRewardPoints().validate(
      { body, id, i, b, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > applyRewardPoints \n ${warrning}`,
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
    } = PosCartApplicationModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > applyRewardPoints \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.CheckoutCartParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.CartCheckoutResponse>} - Success response
   * @name checkoutCart
   * @summary: Checkout cart.
   * @description: Initiates the checkout process for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/checkoutCart/).
   */
  async checkoutCart(
    { body, id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.checkoutCart().validate(
      { body, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.checkoutCart().validate(
      { body, id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > checkoutCart \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;

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
    } = PosCartApplicationModel.CartCheckoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > checkoutCart \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.GetAddressByIdParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.Address>} - Success response
   * @name getAddressById
   * @summary: Fetch address.
   * @description: Retrieves a saved address using its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getAddressById/).
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
    const { error } = PosCartApplicationValidator.getAddressById().validate(
      { id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.getAddressById().validate(
      { id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > getAddressById \n ${warrning}`,
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
    } = PosCartApplicationModel.Address().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > getAddressById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.GetAddressesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.GetAddressesResponse>} - Success response
   * @name getAddresses
   * @summary: Get saved addresses.
   * @description: Retrieve all saved addresses for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getAddresses/).
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
    const { error } = PosCartApplicationValidator.getAddresses().validate(
      { cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.getAddresses().validate(
      { cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > getAddresses \n ${warrning}`,
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
    } = PosCartApplicationModel.GetAddressesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > getAddresses \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.GetAvailableDeliveryModesParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.CartDeliveryModesResponse>} -
   *   Success response
   * @name getAvailableDeliveryModes
   * @summary: Delivery options.
   * @description: Lists available delivery modes for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getAvailableDeliveryModes/).
   */
  async getAvailableDeliveryModes(
    { areaCode, id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PosCartApplicationValidator.getAvailableDeliveryModes().validate(
      { areaCode, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.getAvailableDeliveryModes().validate(
      { areaCode, id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > getAvailableDeliveryModes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["area_code"] = areaCode;
    query_params["id"] = id;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAvailableDeliveryModes"],
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
    } = PosCartApplicationModel.CartDeliveryModesResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > getAvailableDeliveryModes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.GetBulkDiscountOffersParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.BulkPriceResponse>} - Success response
   * @name getBulkDiscountOffers
   * @summary: Bulk discounts.
   * @description: Lists available bulk discount offers for cart items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getBulkDiscountOffers/).
   */
  async getBulkDiscountOffers(
    { itemId, articleId, uid, slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PosCartApplicationValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > getBulkDiscountOffers \n ${warrning}`,
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
    } = PosCartApplicationModel.BulkPriceResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > getBulkDiscountOffers \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.GetCartParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
   * @name getCart
   * @summary: Retrieve cart details.
   * @description: Retrieve the current state and items in the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getCart/).
   */
  async getCart(
    { id, i, b, c, assignCardId, areaCode, buyNow, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.getCart().validate(
      { id, i, b, c, assignCardId, areaCode, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PosCartApplicationValidator.getCart().validate(
      { id, i, b, c, assignCardId, areaCode, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > getCart \n ${warrning}`,
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
    } = PosCartApplicationModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > getCart \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.GetCartLastModifiedParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<any>} - Success response
   * @name getCartLastModified
   * @summary: Cart modification time.
   * @description: Gets the last modified timestamp for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getCartLastModified/).
   */
  async getCartLastModified(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PosCartApplicationValidator.getCartLastModified().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.getCartLastModified().validate(
      { id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > getCartLastModified \n ${warrning}`,
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
          message: `Response Validation Warnings for application > PosCart > getCartLastModified \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.GetCartShareLinkParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.GetShareCartLinkResponse>} -
   *   Success response
   * @name getCartShareLink
   * @summary: Share cart link.
   * @description: Generates a shareable link for the current cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getCartShareLink/).
   */
  async getCartShareLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.getCartShareLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.getCartShareLink().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > getCartShareLink \n ${warrning}`,
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
    } = PosCartApplicationModel.GetShareCartLinkResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > getCartShareLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.GetCartSharedItemsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.SharedCartResponse>} - Success response
   * @name getCartSharedItems
   * @summary: Shared cart items.
   * @description: Retrieves items from a shared cart link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getCartSharedItems/).
   */
  async getCartSharedItems(
    { token, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.getCartSharedItems().validate(
      { token },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.getCartSharedItems().validate(
      { token },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > getCartSharedItems \n ${warrning}`,
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
    } = PosCartApplicationModel.SharedCartResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > getCartSharedItems \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.GetCouponsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.GetCouponResponse>} - Success response
   * @name getCoupons
   * @summary: List available coupons.
   * @description: Retrieve coupons that can be applied to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getCoupons/).
   */
  async getCoupons(
    { id, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.getCoupons().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.getCoupons().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > getCoupons \n ${warrning}`,
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
    } = PosCartApplicationModel.GetCouponResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > getCoupons \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.GetItemCountParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.CartItemCountResponse>} -
   *   Success response
   * @name getItemCount
   * @summary: Count cart items.
   * @description: Gets the total number of items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getItemCount/).
   */
  async getItemCount(
    { id, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.getItemCount().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.getItemCount().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > getItemCount \n ${warrning}`,
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
    } = PosCartApplicationModel.CartItemCountResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > getItemCount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.GetShipmentsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.CartShipmentsResponse>} -
   *   Success response
   * @name getShipments
   * @summary: List shipments.
   * @description: Retrieve shipment details for items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getShipments/).
   */
  async getShipments(
    {
      pickAtStoreUid,
      orderingStoreId,
      p,
      id,
      addressId,
      areaCode,
      orderType,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.getShipments().validate(
      {
        pickAtStoreUid,
        orderingStoreId,
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
    } = PosCartApplicationValidator.getShipments().validate(
      {
        pickAtStoreUid,
        orderingStoreId,
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
        message: `Parameter Validation warrnings for application > PosCart > getShipments \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["pick_at_store_uid"] = pickAtStoreUid;
    query_params["ordering_store_id"] = orderingStoreId;
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
    } = PosCartApplicationModel.CartShipmentsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > getShipments \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.GetStoreAddressByUidParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.StoreDetailsResponse>} - Success response
   * @name getStoreAddressByUid
   * @summary: Store address.
   * @description: Gets the address of the store by its UID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/getStoreAddressByUid/).
   */
  async getStoreAddressByUid(
    { storeUid, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PosCartApplicationValidator.getStoreAddressByUid().validate(
      { storeUid },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.getStoreAddressByUid().validate(
      { storeUid },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > getStoreAddressByUid \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["store_uid"] = storeUid;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getStoreAddressByUid"],
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
    } = PosCartApplicationModel.StoreDetailsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > getStoreAddressByUid \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.RemoveAddressParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.DeleteAddressResponse>} -
   *   Success response
   * @name removeAddress
   * @summary: Delete address.
   * @description: Removes a saved address from the user's profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/removeAddress/).
   */
  async removeAddress(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.removeAddress().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.removeAddress().validate(
      { id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > removeAddress \n ${warrning}`,
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
    } = PosCartApplicationModel.DeleteAddressResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > removeAddress \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.RemoveCouponParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
   * @name removeCoupon
   * @summary: Remove coupon.
   * @description: Removes an applied coupon from the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/removeCoupon/).
   */
  async removeCoupon(
    { id, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.removeCoupon().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.removeCoupon().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > removeCoupon \n ${warrning}`,
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
    } = PosCartApplicationModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > removeCoupon \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.SelectAddressParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
   * @name selectAddress
   * @summary: Choose delivery address.
   * @description: Selects an address for the cart's delivery. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/selectAddress/).
   */
  async selectAddress(
    { body, cartId, buyNow, i, b, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.selectAddress().validate(
      { body, cartId, buyNow, i, b },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.selectAddress().validate(
      { body, cartId, buyNow, i, b },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > selectAddress \n ${warrning}`,
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
    } = PosCartApplicationModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > selectAddress \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.SelectPaymentModeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.CartDetailResponse>} - Success response
   * @name selectPaymentMode
   * @summary: Pick payment method.
   * @description: Chooses a payment mode for the checkout process. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/selectPaymentMode/).
   */
  async selectPaymentMode(
    { body, id, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.selectPaymentMode().validate(
      { body, id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.selectPaymentMode().validate(
      { body, id, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > selectPaymentMode \n ${warrning}`,
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
    } = PosCartApplicationModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > selectPaymentMode \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.UpdateAddressParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.UpdateAddressResponse>} -
   *   Success response
   * @name updateAddress
   * @summary: Update address.
   * @description: Modifies a saved address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/updateAddress/).
   */
  async updateAddress(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.updateAddress().validate(
      { id, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.updateAddress().validate(
      { id, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > updateAddress \n ${warrning}`,
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
    } = PosCartApplicationModel.UpdateAddressResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > updateAddress \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.UpdateCartParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.UpdateCartDetailResponse>} -
   *   Success response
   * @name updateCart
   * @summary: Update cart.
   * @description: Modifies items and quantities in the existing cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/updateCart/).
   */
  async updateCart(
    { body, id, i, b, areaCode, buyNow, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.updateCart().validate(
      { body, id, i, b, areaCode, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.updateCart().validate(
      { body, id, i, b, areaCode, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > updateCart \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PosCartApplicationModel.UpdateCartDetailResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > updateCart \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.UpdateCartMetaParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.CartMetaResponse>} - Success response
   * @name updateCartMeta
   * @summary: Update cart metadata.
   * @description: Adds or modifies metadata for the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/updateCartMeta/).
   */
  async updateCartMeta(
    { body, id, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.updateCartMeta().validate(
      { body, id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.updateCartMeta().validate(
      { body, id, buyNow },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > updateCartMeta \n ${warrning}`,
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
    } = PosCartApplicationModel.CartMetaResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > updateCartMeta \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.UpdateCartWithSharedItemsParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.SharedCartResponse>} - Success response
   * @name updateCartWithSharedItems
   * @summary: Update with shared items.
   * @description: Updates the cart with items from a shared link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/updateCartWithSharedItems/).
   */
  async updateCartWithSharedItems(
    { token, action, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PosCartApplicationValidator.updateCartWithSharedItems().validate(
      { token, action },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.updateCartWithSharedItems().validate(
      { token, action },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > updateCartWithSharedItems \n ${warrning}`,
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
    } = PosCartApplicationModel.SharedCartResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > updateCartWithSharedItems \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.UpdateShipmentsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.CartShipmentsResponse>} -
   *   Success response
   * @name updateShipments
   * @summary: Update shipments.
   * @description: Modifies shipment details for items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/updateShipments/).
   */
  async updateShipments(
    { body, i, p, id, addressId, areaCode, orderType, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PosCartApplicationValidator.updateShipments().validate(
      { body, i, p, id, addressId, areaCode, orderType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.updateShipments().validate(
      { body, i, p, id, addressId, areaCode, orderType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > updateShipments \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["i"] = i;
    query_params["p"] = p;
    query_params["id"] = id;
    query_params["address_id"] = addressId;
    query_params["area_code"] = areaCode;
    query_params["order_type"] = orderType;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateShipments"],
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
    } = PosCartApplicationModel.CartShipmentsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > updateShipments \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PosCartApplicationValidator.ValidateCouponForPaymentParam} arg -
   *   Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PosCartApplicationModel.PaymentCouponValidate>} -
   *   Success response
   * @name validateCouponForPayment
   * @summary: Validate coupon.
   * @description: Checks if a coupon is valid for the selected payment mode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/poscart/validateCouponForPayment/).
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
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PosCartApplicationValidator.validateCouponForPayment().validate(
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
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PosCartApplicationValidator.validateCouponForPayment().validate(
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
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > PosCart > validateCouponForPayment \n ${warrning}`,
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
    } = PosCartApplicationModel.PaymentCouponValidate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > PosCart > validateCouponForPayment \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = PosCart;
