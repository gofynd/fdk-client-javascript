const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const CartPlatformApplicationValidator = require("./CartPlatformApplicationValidator");
const CartPlatformModel = require("./CartPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Cart {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {CartPlatformApplicationValidator.AddAddressParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.SaveAddressResponse>} - Success response
   * @name addAddress
   * @summary: Add a new user address.
   * @description: Create and add a new user address for cart checkout. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/addAddress/).
   */
  async addAddress(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.addAddress().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.addAddress().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > addAddress \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/address`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.SaveAddressResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > addAddress \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.AddItemsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.AddCartDetailResponse>} - Success response
   * @name addItems
   * @summary: Add items to the cart.
   * @description: Add items to the shopping cart  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/addItems/).
   */
  async addItems(
    { cartId, body, b, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.addItems().validate(
      {
        cartId,
        body,
        b,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.addItems().validate(
      {
        cartId,
        body,
        b,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > addItems \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["b"] = b;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/abandoned/carts/${cartId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.AddCartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > addItems \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.AddPriceAdjustmentParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.PriceAdjustmentResponse>} - Success response
   * @name addPriceAdjustment
   * @summary: Add price adjustments.
   * @description: Apply price adjustments to items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/addPriceAdjustment/).
   */
  async addPriceAdjustment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.addPriceAdjustment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.addPriceAdjustment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > addPriceAdjustment \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/price-adjustment`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.PriceAdjustmentResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > addPriceAdjustment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.ApplyCouponParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
   * @name applyCoupon
   * @summary: Apply a coupon to the cart.
   * @description: Apply a selected coupon to the items in the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/applyCoupon/).
   */
  async applyCoupon(
    { body, i, b, p, id, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.applyCoupon().validate(
      {
        body,
        i,
        b,
        p,
        id,
        buyNow,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.applyCoupon().validate(
      {
        body,
        i,
        b,
        p,
        id,
        buyNow,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > applyCoupon \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["p"] = p;
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform-pos-coupon`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > applyCoupon \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.CheckCartServiceabilityParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.OpenApiCartServiceabilityResponse>}
   *   - Success response
   *
   * @name checkCartServiceability
   * @summary: Check cart serviceability.
   * @description: Verify if the items in the cart are serviceable. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/checkCartServiceability/).
   */
  async checkCartServiceability(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.checkCartServiceability().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.checkCartServiceability().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > checkCartServiceability \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/serviceability`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.OpenApiCartServiceabilityResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > checkCartServiceability \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.CheckoutCartParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.OpenApiCheckoutResponse>} - Success response
   * @name checkoutCart
   * @summary: Proceed to cart checkout.
   * @description: Initiate the checkout process for the items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/checkoutCart/).
   */
  async checkoutCart(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.checkoutCart().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.checkoutCart().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > checkoutCart \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/checkout`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.OpenApiCheckoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > checkoutCart \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.CreateCartMetaConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartMetaConfigAdd>} - Success response
   * @name createCartMetaConfig
   * @summary: Create new cart meta configuration
   * @description: Create new cart meta configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/createCartMetaConfig/).
   */
  async createCartMetaConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.createCartMetaConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.createCartMetaConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > createCartMetaConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart_configuration`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CartMetaConfigAdd().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > createCartMetaConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.CreateCouponParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
   * @name createCoupon
   * @summary: Create a new coupon.
   * @description: Generate and add a new coupon to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/createCoupon/).
   */
  async createCoupon(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.createCoupon().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.createCoupon().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > createCoupon \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.SuccessMessage().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > createCoupon \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.CreatePromotionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.PromotionAdd>} - Success response
   * @name createPromotion
   * @summary: Create a new promotion.
   * @description: Generate and add a new promotion to the cart system  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/createPromotion/).
   */
  async createPromotion(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.createPromotion().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.createPromotion().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > createPromotion \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promotion`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.PromotionAdd().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > createPromotion \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.DeleteCartParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.DeleteCartDetailResponse>} - Success response
   * @name deleteCart
   * @summary: Delete a cart.
   * @description: Delete a specific shopping cart from the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/deleteCart/).
   */
  async deleteCart(
    { body, id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.deleteCart().validate(
      {
        body,
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.deleteCart().validate(
      {
        body,
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > deleteCart \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart_archive`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.DeleteCartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > deleteCart \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.FetchAndvalidateCartItemsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.OpenapiCartDetailsResponse>} - Success response
   * @name fetchAndvalidateCartItems
   * @summary: Fetch and validate cart items.
   * @description: Retrieve and validate items currently in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/fetchAndvalidateCartItems/).
   */
  async fetchAndvalidateCartItems(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.fetchAndvalidateCartItems().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.fetchAndvalidateCartItems().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > fetchAndvalidateCartItems \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/validate`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.OpenapiCartDetailsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > fetchAndvalidateCartItems \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.FetchCartMetaConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartMetaConfigAdd>} - Success response
   * @name fetchCartMetaConfig
   * @summary: Fetch cart meta configuration
   * @description: Fetch cart meta configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/fetchCartMetaConfig/).
   */
  async fetchCartMetaConfig(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.fetchCartMetaConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.fetchCartMetaConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > fetchCartMetaConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart_configuration`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CartMetaConfigAdd().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > fetchCartMetaConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetAbandonedCartParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.AbandonedCartResponse>} - Success response
   * @name getAbandonedCart
   * @summary: Retrieve abandoned carts.
   * @description: Retrieve abandoned carts for analysis and potential recovery. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAbandonedCart/).
   */
  async getAbandonedCart(
    {
      pageNo,
      pageSize,
      fromDate,
      toDate,
      anonymousCart,
      lastId,
      sortOn,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.getAbandonedCart().validate(
      {
        pageNo,
        pageSize,
        fromDate,
        toDate,
        anonymousCart,
        lastId,
        sortOn,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getAbandonedCart().validate(
      {
        pageNo,
        pageSize,
        fromDate,
        toDate,
        anonymousCart,
        lastId,
        sortOn,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getAbandonedCart \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["anonymous_cart"] = anonymousCart;
    query_params["last_id"] = lastId;
    query_params["sort_on"] = sortOn;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/abandoned/carts`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.AbandonedCartResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getAbandonedCart \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetAbandonedCartDetailsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
   * @name getAbandonedCartDetails
   * @summary: Get abandoned cart details.
   * @description: Retrieve detailed information about a specific abandoned cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAbandonedCartDetails/).
   */
  async getAbandonedCartDetails(
    { id, i, b, c, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.getAbandonedCartDetails().validate(
      {
        id,
        i,
        b,
        c,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getAbandonedCartDetails().validate(
      {
        id,
        i,
        b,
        c,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getAbandonedCartDetails \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["c"] = c;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/abandoned/cart/detail`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getAbandonedCartDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetAddressByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.PlatformAddress>} - Success response
   * @name getAddressById
   * @summary: Fetch a single address by its ID
   * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `PlatformAddress`. Attibutes listed below are optional mobile_no checkout_mode tags default - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAddressById/).
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
    const {
      error,
    } = CartPlatformApplicationValidator.getAddressById().validate(
      {
        id,
        cartId,
        buyNow,
        mobileNo,
        checkoutMode,
        tags,
        isDefault,
        userId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getAddressById().validate(
      {
        id,
        cartId,
        buyNow,
        mobileNo,
        checkoutMode,
        tags,
        isDefault,
        userId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getAddressById \n ${warrning}`,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/address/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.PlatformAddress().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getAddressById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetAddressesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.PlatformGetAddressesResponse>} -
   *   Success response
   * @name getAddresses
   * @summary: Fetch address
   * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional uid address_id  mobile_no checkout_mode tags default - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAddresses/).
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
    const { error } = CartPlatformApplicationValidator.getAddresses().validate(
      {
        cartId,
        buyNow,
        mobileNo,
        checkoutMode,
        tags,
        isDefault,
        userId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getAddresses().validate(
      {
        cartId,
        buyNow,
        mobileNo,
        checkoutMode,
        tags,
        isDefault,
        userId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getAddresses \n ${warrning}`,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/address`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.PlatformGetAddressesResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getAddresses \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetAppCouponsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.GetCouponResponse>} - Success response
   * @name getAppCoupons
   * @summary: Get app-specific coupons.
   * @description: Retrieve coupons specific to the mobile app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAppCoupons/).
   */
  async getAppCoupons(
    { id, buyNow, slug, storeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.getAppCoupons().validate(
      {
        id,
        buyNow,
        slug,
        storeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getAppCoupons().validate(
      {
        id,
        buyNow,
        slug,
        storeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getAppCoupons \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;
    query_params["slug"] = slug;
    query_params["store_id"] = storeId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform-pos-coupon`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.GetCouponResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getAppCoupons \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetAvailableDeliveryModesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartDeliveryModesResponse>} - Success response
   * @name getAvailableDeliveryModes
   * @summary: Get available delivery modes.
   * @description: Retrieve a list of available delivery modes for cart checkout. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAvailableDeliveryModes/).
   */
  async getAvailableDeliveryModes(
    { areaCode, id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.getAvailableDeliveryModes().validate(
      {
        areaCode,
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getAvailableDeliveryModes().validate(
      {
        areaCode,
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getAvailableDeliveryModes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["area_code"] = areaCode;
    query_params["id"] = id;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/available-delivery-mode`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CartDeliveryModesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getAvailableDeliveryModes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetCartParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
   * @name getCart
   * @summary: Get cart details.
   * @description: Retrieve detailed information about a shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCart/).
   */
  async getCart(
    { id, userId, i, b, assignCardId, buyNow, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.getCart().validate(
      {
        id,
        userId,
        i,
        b,
        assignCardId,
        buyNow,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getCart().validate(
      {
        id,
        userId,
        i,
        b,
        assignCardId,
        buyNow,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getCart \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["user_id"] = userId;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["assign_card_id"] = assignCardId;
    query_params["buy_now"] = buyNow;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/detail`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getCart \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetCartListParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.MultiCartResponse>} - Success response
   * @name getCartList
   * @summary: Retrieve a list of carts.
   * @description: Retrieve a list of saved shopping carts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartList/).
   */
  async getCartList(
    { fromDate, toDate, filterOn, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.getCartList().validate(
      {
        fromDate,
        toDate,
        filterOn,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getCartList().validate(
      {
        fromDate,
        toDate,
        filterOn,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getCartList \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["filter_on"] = filterOn;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart-list`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.MultiCartResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getCartList \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetCartShareLinkParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.GetShareCartLinkResponse>} - Success response
   * @name getCartShareLink
   * @summary: Generate token for sharing the cart
   * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartShareLink/).
   */
  async getCartShareLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.getCartShareLink().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getCartShareLink().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getCartShareLink \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/share-cart`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.GetShareCartLinkResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getCartShareLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetCartSharedItemsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.SharedCartResponse>} - Success response
   * @name getCartSharedItems
   * @summary: Get items shared via a cart link.
   * @description: Retrieve the items shared with you via a cart link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartSharedItems/).
   */
  async getCartSharedItems(
    { token, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.getCartSharedItems().validate(
      {
        token,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getCartSharedItems().validate(
      {
        token,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getCartSharedItems \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/share-cart/${token}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.SharedCartResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getCartSharedItems \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetCouponByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CouponUpdate>} - Success response
   * @name getCouponById
   * @summary: Get coupon details by ID.
   * @description: Retrieve detailed information about a specific coupon using its unique ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponById/).
   */
  async getCouponById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.getCouponById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getCouponById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getCouponById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CouponUpdate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getCouponById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetCouponCodeExistsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getCouponCodeExists
   * @summary: Check if a coupon code exists.
   * @description: Verify the existence of a specific coupon code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponCodeExists/).
   */
  async getCouponCodeExists(
    { code, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.getCouponCodeExists().validate(
      {
        code,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getCouponCodeExists().validate(
      {
        code,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getCouponCodeExists \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["code"] = code;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon_code_exists`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getCouponCodeExists \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetCouponOptionValuesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getCouponOptionValues
   * @summary: Get coupon option values.
   * @description: Retrieve available values for coupon options. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponOptionValues/).
   */
  async getCouponOptionValues(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.getCouponOptionValues().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getCouponOptionValues().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getCouponOptionValues \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon_options`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getCouponOptionValues \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetCouponsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CouponsResponse>} - Success response
   * @name getCoupons
   * @summary: Retrieve available coupons.
   * @description: Retrieve a list of available coupons for use in the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCoupons/).
   */
  async getCoupons(
    {
      pageNo,
      pageSize,
      isArchived,
      title,
      isPublic,
      isDisplay,
      typeSlug,
      code,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.getCoupons().validate(
      {
        pageNo,
        pageSize,
        isArchived,
        title,
        isPublic,
        isDisplay,
        typeSlug,
        code,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getCoupons().validate(
      {
        pageNo,
        pageSize,
        isArchived,
        title,
        isPublic,
        isDisplay,
        typeSlug,
        code,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getCoupons \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["is_archived"] = isArchived;
    query_params["title"] = title;
    query_params["is_public"] = isPublic;
    query_params["is_display"] = isDisplay;
    query_params["type_slug"] = typeSlug;
    query_params["code"] = code;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CouponsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getCoupons \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetItemCountParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartItemCountResponse>} - Success response
   * @name getItemCount
   * @summary: Get the item count in a cart.
   * @description: Retrieve the total number of items in a shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getItemCount/).
   */
  async getItemCount(
    { id, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.getItemCount().validate(
      {
        id,
        buyNow,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getItemCount().validate(
      {
        id,
        buyNow,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getItemCount \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/basic`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CartItemCountResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getItemCount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetPromosCouponConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.ActivePromosResponse>} - Success response
   * @name getPromosCouponConfig
   * @summary: Get promotion and coupon configuration.
   * @description: Retrieve configuration settings for promotions and coupons. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromosCouponConfig/).
   */
  async getPromosCouponConfig(
    { entityType, isHidden, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.getPromosCouponConfig().validate(
      {
        entityType,
        isHidden,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getPromosCouponConfig().validate(
      {
        entityType,
        isHidden,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getPromosCouponConfig \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["entity_type"] = entityType;
    query_params["is_hidden"] = isHidden;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promo-coupons`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.ActivePromosResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getPromosCouponConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetPromotionByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.PromotionUpdate>} - Success response
   * @name getPromotionById
   * @summary: Get promotion details by ID.
   * @description: Retrieve detailed information about a specific promotion using its unique ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotionById/).
   */
  async getPromotionById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.getPromotionById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getPromotionById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getPromotionById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promotion/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.PromotionUpdate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getPromotionById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetPromotionCodeExistsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getPromotionCodeExists
   * @summary: Check if a promotion code exists.
   * @description: Verify the existence of a specific promotion code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotionCodeExists/).
   */
  async getPromotionCodeExists(
    { code, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.getPromotionCodeExists().validate(
      {
        code,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getPromotionCodeExists().validate(
      {
        code,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getPromotionCodeExists \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["code"] = code;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promotion_code_exists`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getPromotionCodeExists \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetPromotionsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.PromotionsResponse>} - Success response
   * @name getPromotions
   * @summary: Retrieve available promotions.
   * @description: Retrieve a list of available promotions to apply to the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotions/).
   */
  async getPromotions(
    {
      pageNo,
      pageSize,
      q,
      isActive,
      promoGroup,
      promotionType,
      fpPanel,
      promotionId,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.getPromotions().validate(
      {
        pageNo,
        pageSize,
        q,
        isActive,
        promoGroup,
        promotionType,
        fpPanel,
        promotionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getPromotions().validate(
      {
        pageNo,
        pageSize,
        q,
        isActive,
        promoGroup,
        promotionType,
        fpPanel,
        promotionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getPromotions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["is_active"] = isActive;
    query_params["promo_group"] = promoGroup;
    query_params["promotion_type"] = promotionType;
    query_params["fp_panel"] = fpPanel;
    query_params["promotion_id"] = promotionId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promotion`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.PromotionsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getPromotions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetShipmentsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.PlatformCartShipmentsResponse>} -
   *   Success response
   * @name getShipments
   * @summary: Get delivery date and options before checkout
   * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getShipments/).
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
    const { error } = CartPlatformApplicationValidator.getShipments().validate(
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
    } = CartPlatformApplicationValidator.getShipments().validate(
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
        message: `Parameter Validation warrnings for platform > Cart > getShipments \n ${warrning}`,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/shipment`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.PlatformCartShipmentsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getShipments \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetStoreAddressByUidParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.StoreDetailsResponse>} - Success response
   * @name getStoreAddressByUid
   * @summary: Get store address by UID.
   * @description: Retrieve the store address using a unique identifier (UID). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getStoreAddressByUid/).
   */
  async getStoreAddressByUid(
    { storeUid, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.getStoreAddressByUid().validate(
      {
        storeUid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getStoreAddressByUid().validate(
      {
        storeUid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getStoreAddressByUid \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["store_uid"] = storeUid;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/store-address`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.StoreDetailsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getStoreAddressByUid \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.OverrideCartParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.OverrideCheckoutResponse>} - Success response
   * @name overrideCart
   * @summary: Override the cart.
   * @description: Override the current cart with a new configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/overrideCart/).
   */
  async overrideCart(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.overrideCart().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.overrideCart().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > overrideCart \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/checkout/over-ride`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.OverrideCheckoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > overrideCart \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.PlatformAddItemsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.AddCartDetailResponse>} - Success response
   * @name platformAddItems
   * @summary: Add items via platform integration.
   * @description: Add items to the cart through platform integration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformAddItems/).
   */
  async platformAddItems(
    { body, i, b, buyNow, id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.platformAddItems().validate(
      {
        body,
        i,
        b,
        buyNow,
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.platformAddItems().validate(
      {
        body,
        i,
        b,
        buyNow,
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > platformAddItems \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["buy_now"] = buyNow;
    query_params["id"] = id;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/detail`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.AddCartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > platformAddItems \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.PlatformCheckoutCartParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartCheckoutResponse>} - Success response
   * @name platformCheckoutCart
   * @summary: Platform-specific cart checkout.
   * @description: Initiate cart checkout through platform-specific integration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformCheckoutCart/).
   */
  async platformCheckoutCart(
    { body, id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.platformCheckoutCart().validate(
      {
        body,
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.platformCheckoutCart().validate(
      {
        body,
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > platformCheckoutCart \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/checkout`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CartCheckoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > platformCheckoutCart \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.PlatformCheckoutCartV2Param} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartCheckoutResponse>} - Success response
   * @name platformCheckoutCartV2
   * @summary: Platform-specific cart checkout v2.
   * @description: Initiate cart checkout through an updated platform-specific integration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformCheckoutCartV2/).
   */
  async platformCheckoutCartV2(
    { body, id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.platformCheckoutCartV2().validate(
      {
        body,
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.platformCheckoutCartV2().validate(
      {
        body,
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > platformCheckoutCartV2 \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v2.0/company/${this.config.companyId}/application/${this.applicationId}/checkout`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CartCheckoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > platformCheckoutCartV2 \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.PlatformUpdateCartParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.UpdateCartDetailResponse>} - Success response
   * @name platformUpdateCart
   * @summary: Update items in the customer 's cart using cart id
   * @description: Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs operation Operation for current api call. update_item for update items. remove_item for removing items.item_id "/platform/content/v1/products/" item_size "/platform/content/v1/products/:slug/sizes/" quantity  item quantity (must be greater than or equal to 1) article_id "/content​/v1​/products​/:identifier​/sizes​/price​/" item_index item position in the cart (must be greater than or equal to 0) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformUpdateCart/).
   */
  async platformUpdateCart(
    { body, id, i, b, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.platformUpdateCart().validate(
      {
        body,
        id,
        i,
        b,
        buyNow,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.platformUpdateCart().validate(
      {
        body,
        id,
        i,
        b,
        buyNow,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > platformUpdateCart \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["buy_now"] = buyNow;

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/detail`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.UpdateCartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > platformUpdateCart \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.RemoveAddressParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.DeleteAddressResponse>} - Success response
   * @name removeAddress
   * @summary: Remove a user address.
   * @description: Delete an existing user address from the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/removeAddress/).
   */
  async removeAddress(
    { id, userId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.removeAddress().validate(
      {
        id,
        userId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.removeAddress().validate(
      {
        id,
        userId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > removeAddress \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["user_id"] = userId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/address/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.DeleteAddressResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > removeAddress \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.RemoveCouponParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
   * @name removeCoupon
   * @summary: Remove a coupon from the cart.
   * @description: Remove a coupon from the items in the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/removeCoupon/).
   */
  async removeCoupon(
    { uid, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.removeCoupon().validate(
      {
        uid,
        buyNow,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.removeCoupon().validate(
      {
        uid,
        buyNow,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > removeCoupon \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["uid"] = uid;
    query_params["buy_now"] = buyNow;

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform-pos-coupon`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > removeCoupon \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.RemovePriceAdjustmentParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
   * @name removePriceAdjustment
   * @summary: Remove price adjustments.
   * @description: Remove price adjustments applied to items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/removePriceAdjustment/).
   */
  async removePriceAdjustment(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.removePriceAdjustment().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.removePriceAdjustment().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > removePriceAdjustment \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/price-adjustment/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.SuccessMessage().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > removePriceAdjustment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.SelectAddressParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
   * @name selectAddress
   * @summary: Select an address from available addresses
   * @description: Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `PlatformSelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. address_id billing_address_id uid - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/selectAddress/).
   */
  async selectAddress(
    { body, cartId, buyNow, i, b, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.selectAddress().validate(
      {
        body,
        cartId,
        buyNow,
        i,
        b,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.selectAddress().validate(
      {
        body,
        cartId,
        buyNow,
        i,
        b,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > selectAddress \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["cart_id"] = cartId;
    query_params["buy_now"] = buyNow;
    query_params["i"] = i;
    query_params["b"] = b;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/select-address`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > selectAddress \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.SelectPaymentModeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
   * @name selectPaymentMode
   * @summary: Select a payment mode.
   * @description: Choose a payment mode for cart checkout. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/selectPaymentMode/).
   */
  async selectPaymentMode(
    { body, id, buyNow, orderType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.selectPaymentMode().validate(
      {
        body,
        id,
        buyNow,
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
    } = CartPlatformApplicationValidator.selectPaymentMode().validate(
      {
        body,
        id,
        buyNow,
        orderType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > selectPaymentMode \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;
    query_params["order_type"] = orderType;

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > selectPaymentMode \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.SelectPaymentModeV2Param} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
   * @name selectPaymentModeV2
   * @summary: Select a payment mode v2.
   * @description: Choose a payment mode for cart checkout in the updated platform integration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/selectPaymentModeV2/).
   */
  async selectPaymentModeV2(
    { body, id, buyNow, orderType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.selectPaymentModeV2().validate(
      {
        body,
        id,
        buyNow,
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
    } = CartPlatformApplicationValidator.selectPaymentModeV2().validate(
      {
        body,
        id,
        buyNow,
        orderType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > selectPaymentModeV2 \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;
    query_params["order_type"] = orderType;

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v2.0/company/${this.config.companyId}/application/${this.applicationId}/payment`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > selectPaymentModeV2 \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.UpdateAddressParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.UpdateAddressResponse>} - Success response
   * @name updateAddress
   * @summary: Update address.
   * @description: Modify the shipping address for an order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateAddress/).
   */
  async updateAddress(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.updateAddress().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.updateAddress().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > updateAddress \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/address/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.UpdateAddressResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > updateAddress \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.UpdateCartParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.UpdateCartDetailResponse>} - Success response
   * @name updateCart
   * @summary: Update cart items.
   * @description: Modify items and their quantities in the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCart/).
   */
  async updateCart(
    { cartId, body, b, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.updateCart().validate(
      {
        cartId,
        body,
        b,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.updateCart().validate(
      {
        cartId,
        body,
        b,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > updateCart \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["b"] = b;

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/abandoned/carts/${cartId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.UpdateCartDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > updateCart \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.UpdateCartMetaParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartMetaResponse>} - Success response
   * @name updateCartMeta
   * @summary: Update cart metadata.
   * @description: Modify the metadata associated with the shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartMeta/).
   */
  async updateCartMeta(
    { body, id, buyNow, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.updateCartMeta().validate(
      {
        body,
        id,
        buyNow,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.updateCartMeta().validate(
      {
        body,
        id,
        buyNow,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > updateCartMeta \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/meta`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CartMetaResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > updateCartMeta \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.UpdateCartMetaConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartMetaConfigUpdate>} - Success response
   * @name updateCartMetaConfig
   * @summary: Update cart metadata configuration.
   * @description: Modify the configuration settings for cart metadata. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartMetaConfig/).
   */
  async updateCartMetaConfig(
    { cartMetaId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.updateCartMetaConfig().validate(
      {
        cartMetaId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.updateCartMetaConfig().validate(
      {
        cartMetaId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > updateCartMetaConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart_configuration/${cartMetaId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.CartMetaConfigUpdate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > updateCartMetaConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.UpdateCartUserParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.UserCartMappingResponse>} - Success response
   * @name updateCartUser
   * @summary: Update cart user details.
   * @description: Modify user-related details for a shopping cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartUser/).
   */
  async updateCartUser(
    { body, id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.updateCartUser().validate(
      {
        body,
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.updateCartUser().validate(
      {
        body,
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > updateCartUser \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/update-user`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.UserCartMappingResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > updateCartUser \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.UpdateCartWithSharedItemsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.SharedCartResponse>} - Success response
   * @name updateCartWithSharedItems
   * @summary: Update cart with shared items.
   * @description: Modify your cart by adding shared items from a cart link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartWithSharedItems/).
   */
  async updateCartWithSharedItems(
    { token, action, cartId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.updateCartWithSharedItems().validate(
      {
        token,
        action,
        cartId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.updateCartWithSharedItems().validate(
      {
        token,
        action,
        cartId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > updateCartWithSharedItems \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["cart_id"] = cartId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/share-cart/${token}/${action}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.SharedCartResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > updateCartWithSharedItems \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.UpdateCouponParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
   * @name updateCoupon
   * @summary: Update a coupon.
   * @description: Modify the details and settings of an existing coupon in the cart system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCoupon/).
   */
  async updateCoupon(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.updateCoupon().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.updateCoupon().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > updateCoupon \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.SuccessMessage().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > updateCoupon \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.UpdateCouponPartiallyParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
   * @name updateCouponPartially
   * @summary: Partially update a coupon.
   * @description: Make partial modifications to the settings of an existing coupon in the cart system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCouponPartially/).
   */
  async updateCouponPartially(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.updateCouponPartially().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.updateCouponPartially().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > updateCouponPartially \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.SuccessMessage().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > updateCouponPartially \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.UpdatePriceAdjustmentParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.PriceAdjustmentResponse>} - Success response
   * @name updatePriceAdjustment
   * @summary: Update price adjustments.
   * @description: Modify price adjustments for items in the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updatePriceAdjustment/).
   */
  async updatePriceAdjustment(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.updatePriceAdjustment().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.updatePriceAdjustment().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > updatePriceAdjustment \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/price-adjustment/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.PriceAdjustmentResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > updatePriceAdjustment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.UpdatePromotionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.PromotionUpdate>} - Success response
   * @name updatePromotion
   * @summary: Update a promotion.
   * @description: Modify the details and settings of an existing promotion in the cart system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updatePromotion/).
   */
  async updatePromotion(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.updatePromotion().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.updatePromotion().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > updatePromotion \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promotion/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.PromotionUpdate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > updatePromotion \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.UpdatePromotionPartiallyParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
   * @name updatePromotionPartially
   * @summary: Partially update a promotion.
   * @description: Make partial modifications to the settings of an existing promotion in the cart system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updatePromotionPartially/).
   */
  async updatePromotionPartially(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.updatePromotionPartially().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.updatePromotionPartially().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > updatePromotionPartially \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promotion/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.SuccessMessage().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > updatePromotionPartially \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.UpdateShipmentsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.PlatformCartShipmentsResponse>} -
   *   Success response
   * @name updateShipments
   * @summary: Update shipment details.
   * @description: Modify the details and settings of cart shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateShipments/).
   */
  async updateShipments(
    { body, i, p, id, addressId, areaCode, orderType, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.updateShipments().validate(
      {
        body,
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
    } = CartPlatformApplicationValidator.updateShipments().validate(
      {
        body,
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
        message: `Parameter Validation warrnings for platform > Cart > updateShipments \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["i"] = i;
    query_params["p"] = p;
    query_params["id"] = id;
    query_params["address_id"] = addressId;
    query_params["area_code"] = areaCode;
    query_params["order_type"] = orderType;

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/shipment`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.PlatformCartShipmentsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > updateShipments \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.ValidateCouponForPaymentParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.PaymentCouponValidate>} - Success response
   * @name validateCouponForPayment
   * @summary: Validate a coupon for payment.
   * @description: Verify the validity of a coupon code for the payment process. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/validateCouponForPayment/).
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
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.validateCouponForPayment().validate(
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
    } = CartPlatformApplicationValidator.validateCouponForPayment().validate(
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
        message: `Parameter Validation warrnings for platform > Cart > validateCouponForPayment \n ${warrning}`,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/validate/`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CartPlatformModel.PaymentCouponValidate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > validateCouponForPayment \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Cart;
