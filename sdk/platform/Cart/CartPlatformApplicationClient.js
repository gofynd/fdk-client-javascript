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
   * @summary: Add address to an account
   * @description: Use this API to add an address to an account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/addAddress/).
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
   * @summary: Add items to abandoned cart
   * @description: Use this API to add items to the abandoned cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/addItems/).
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
   * @returns {Promise<CartPlatformModel.AddPriceAdjustmentResponse>} - Success response
   * @name addPriceAdjustment
   * @summary: Create new price adjustment
   * @description: Create new price adjustment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/addPriceAdjustment/).
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
    } = CartPlatformModel.AddPriceAdjustmentResponse().validate(responseData, {
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
   * @summary: Check cart serviceability
   * @description: Verify the serviceability of items in the cart at a specific pin code and ensure accurate delivery promises. System checks each item's availability and delivery feasibility, providing real-time information on serviceability and estimated delivery times. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/checkCartServiceability/).
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
   * @summary: Checkout cart
   * @description: The checkout cart initiates the order creation process based on the selected address and payment method. It revalidates the cart details to ensure safe and seamless order placement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/checkoutCart/).
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
   * @returns {Promise<CartPlatformModel.CartMetaConfigAddResponse>} - Success response
   * @name createCartMetaConfig
   * @summary: Create new cart meta configuration
   * @description: Create custom meta configurations for carts associated with a specific sales channel. By specifying the company ID and application ID, seller can define unique cart settings, including preferences, rules, and constraints, tailored to their business needs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/createCartMetaConfig/).
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
    } = CartPlatformModel.CartMetaConfigAddResponse().validate(responseData, {
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
   * @returns {Promise<CartPlatformModel.CouponDetailResponse>} - Success response
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
    } = CartPlatformModel.CouponDetailResponse().validate(responseData, {
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
   * @summary: Create a promotion
   * @description: Creates a new promotion based on the selected promotion type. Sellers can choose from multiple supported promotion types, including percentage value, fixed amount value, bundled discount, buy X get Y items, and more, along with customizable promotion criteria to meet specific business requirements. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/createPromotion/).
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
   * @summary: Delete cart once user made successful checkout
   * @description: Use this API to delete the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/deleteCart/).
   */
  async deleteCart(
    { body, id, cartType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.deleteCart().validate(
      {
        body,
        id,
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
    } = CartPlatformApplicationValidator.deleteCart().validate(
      {
        body,
        id,
        cartType,
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
    query_params["cart_type"] = cartType;

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
   * @param {CartPlatformApplicationValidator.DeleteCartMetaConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
   * @name deleteCartMetaConfig
   * @summary: Delete cart meta configuration
   * @description: Delete cart meta configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/deleteCartMetaConfig/).
   */
  async deleteCartMetaConfig(
    { cartMetaId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.deleteCartMetaConfig().validate(
      {
        cartMetaId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.deleteCartMetaConfig().validate(
      {
        cartMetaId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > deleteCartMetaConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart_configuration/${cartMetaId}`,
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
          message: `Response Validation Warnings for platform > Cart > deleteCartMetaConfig \n ${res_error}`,
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
   * @summary: Get and validate cart items
   * @description: Retrieve cart details for a provided list of cart items and validate its contents. This ensures accuracy and completeness in cart information, including item quantities, prices, discounts, and applicable taxes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/fetchAndvalidateCartItems/).
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
   * @param {CartPlatformApplicationValidator.GetAbandonedCartParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.AbandonedCartResponse>} - Success response
   * @name getAbandonedCart
   * @summary: Get abandoned carts
   * @description: Retrieve the list of abandoned carts that have been active for the specified period of time and have not yet been archived for the specific sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAbandonedCart/).
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Current company id
   * @param {string} arg.applicationId - Current Application _id
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @param {boolean} [arg.anonymousCart] -
   * @param {string} [arg.lastId] -
   * @param {string} [arg.sortOn] -
   * @returns {Paginator<CartPlatformModel.AbandonedCartResponse>}
   * @summary: Get abandoned carts
   * @description: Retrieve the list of abandoned carts that have been active for the specified period of time and have not yet been archived for the specific sales channel.
   */
  getAbandonedCartPaginator({
    companyId,
    applicationId,
    pageSize,
    fromDate,
    toDate,
    anonymousCart,
    lastId,
    sortOn,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAbandonedCart({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        fromDate: fromDate,
        toDate: toDate,
        anonymousCart: anonymousCart,
        lastId: lastId,
        sortOn: sortOn,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetAbandonedCartDetailsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
   * @name getAbandonedCartDetails
   * @summary: Get abandoned cart details
   * @description: Retrieves abandoned cart details linked to a specific customer using a unique cart ID. It offers an overview of the items, quantities, prices, and other relevant information associated with the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAbandonedCartDetails/).
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
   * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional uid address_id mobile_no checkout_mode tags default - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAddresses/).
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
   * @summary: List coupons
   * @description: Retrieve a list of all available coupons that customer can apply to their carts. It provides details about each coupon, including its code, discount amount, and applicable conditions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAppCoupons/).
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
   * @summary: Get delivery modes
   * @description: Retrieve a list of delivery modes (home delivery/store pickup) along with a list of available pickup stores for a given cart at a specified PIN Code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getAvailableDeliveryModes/).
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
   * @summary: Fetch all items added to the customer cart using cart id
   * @description: Use this API to get details of all the items added to a cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCart/).
   */
  async getCart(
    { id, userId, i, b, assignCardId, buyNow, cartType, requestHeaders } = {
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
    } = CartPlatformApplicationValidator.getCart().validate(
      {
        id,
        userId,
        i,
        b,
        assignCardId,
        buyNow,
        cartType,
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
    query_params["cart_type"] = cartType;

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
   * @summary: Get cart list for store os user
   * @description: Get all carts for the store os user which is created for customer - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartList/).
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
   * @param {CartPlatformApplicationValidator.GetCartMetaConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartMetaConfigDetailResponse>} -
   *   Success response
   * @name getCartMetaConfig
   * @summary: Get cart meta configuration by id
   * @description: Get cart meta configuration by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartMetaConfig/).
   */
  async getCartMetaConfig(
    { cartMetaId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.getCartMetaConfig().validate(
      {
        cartMetaId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getCartMetaConfig().validate(
      {
        cartMetaId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getCartMetaConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart_configuration/${cartMetaId}`,
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
    } = CartPlatformModel.CartMetaConfigDetailResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getCartMetaConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetCartMetaConfigsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartMetaConfigListResponse>} - Success response
   * @name getCartMetaConfigs
   * @summary: Fetch cart meta configuration
   * @description: Fetch cart meta configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartMetaConfigs/).
   */
  async getCartMetaConfigs(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.getCartMetaConfigs().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getCartMetaConfigs().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getCartMetaConfigs \n ${warrning}`,
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
    } = CartPlatformModel.CartMetaConfigListResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getCartMetaConfigs \n ${res_error}`,
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
   * @summary: Share cart link
   * @description: Generate a unique shareable link for the customer's cart for a specific sales channel. This link enables easy sharing of the cart contents with other users, facilitating collaborative shopping experiences. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartShareLink/).
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
   * @summary: Get details of a shared cart
   * @description: Use this API to get the shared cart details as per the token generated using the share-cart API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCartSharedItems/).
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
   * @summary: Get coupon details by ID
   * @description: Retrieve details of a specific coupon by providing its unique identifier to obtain information such as coupon type, rules, validity period and other related information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponById/).
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
   * @summary: Check if coupon is already created with coupon code
   * @description: Check if sent coupon code is already existing coupon code. As coupon code is to be unique. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponCodeExists/).
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
   * @returns {Promise<CartPlatformModel.CouponOptions>} - Success response
   * @name getCouponOptionValues
   * @summary: Get coupon options enums with display values
   * @description: Get coupon enum values for fields in valid coupon object. Used for front end to create, update and filter coupon lists via fields - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponOptionValues/).
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

    const {
      error: res_error,
    } = CartPlatformModel.CouponOptions().validate(responseData, {
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
   * @param {CartPlatformApplicationValidator.GetCouponTagsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.TagsViewResponse>} - Success response
   * @name getCouponTags
   * @summary: Get a list of all coupon tags associated with a application.
   * @description: This API helps to get coupon tags data associated to a particular application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getCouponTags/).
   */
  async getCouponTags(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.getCouponTags().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getCouponTags().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getCouponTags \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon-tags`,
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
    } = CartPlatformModel.TagsViewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getCouponTags \n ${res_error}`,
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Current company id
   * @param {string} arg.applicationId - Current Application _id
   * @param {number} [arg.pageSize] -
   * @param {boolean} [arg.isArchived] -
   * @param {string} [arg.title] -
   * @param {boolean} [arg.isPublic] -
   * @param {boolean} [arg.isDisplay] -
   * @param {string} [arg.typeSlug] -
   * @param {string} [arg.code] -
   * @returns {Paginator<CartPlatformModel.CouponsResponse>}
   * @summary: Retrieve available coupons.
   * @description: Retrieve a list of available coupons for use in the shopping cart.
   */
  getCouponsPaginator({
    companyId,
    applicationId,
    pageSize,
    isArchived,
    title,
    isPublic,
    isDisplay,
    typeSlug,
    code,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCoupons({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        isArchived: isArchived,
        title: title,
        isPublic: isPublic,
        isDisplay: isDisplay,
        typeSlug: typeSlug,
        code: code,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetItemCountParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.CartItemCountResponse>} - Success response
   * @name getItemCount
   * @summary: Count items in the customer's cart
   * @description: Use this API to get the total number of items present in cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getItemCount/).
   */
  async getItemCount(
    { id, buyNow, cartType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.getItemCount().validate(
      {
        id,
        buyNow,
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
    } = CartPlatformApplicationValidator.getItemCount().validate(
      {
        id,
        buyNow,
        cartType,
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
    query_params["cart_type"] = cartType;

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
   * @param {CartPlatformApplicationValidator.GetPriceAdjustmentsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.PriceAdjustmentResponse>} - Success response
   * @name getPriceAdjustments
   * @summary: Get a list of all price adjustments associated with a cart
   * @description: This API helps to get price adjustments data associated to a particular cart - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPriceAdjustments/).
   */
  async getPriceAdjustments(
    { cartId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.getPriceAdjustments().validate(
      {
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
    } = CartPlatformApplicationValidator.getPriceAdjustments().validate(
      {
        cartId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getPriceAdjustments \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["cart_id"] = cartId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/price-adjustment`,
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
          message: `Response Validation Warnings for platform > Cart > getPriceAdjustments \n ${res_error}`,
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
   * @summary: Get promotion and coupon type
   * @description: Retrieve the configuration settings related to promotions and coupons for a specific seller. It provides details of the supported types of coupons and promotions along with their descriptions, examples, and related attributes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromosCouponConfig/).
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
   * @summary: Get a promotion
   * @description: Retrieve details of a specific promotion by providing its unique identifier to obtain information such as promotion type, rules, validity period and other related information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotionById/).
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
   * @summary: Check if promotion is already created with promotion code
   * @description: Check if sent promotion code is already existing promotion code. As promotion code is to be unique. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotionCodeExists/).
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
   * @param {CartPlatformApplicationValidator.GetPromotionTagsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.TagsViewResponse>} - Success response
   * @name getPromotionTags
   * @summary: Get a list of all Promotion tags associated with a application.
   * @description: This API helps to get Promotion tags data associated to a particular application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotionTags/).
   */
  async getPromotionTags(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.getPromotionTags().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CartPlatformApplicationValidator.getPromotionTags().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > getPromotionTags \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promo-tags`,
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
    } = CartPlatformModel.TagsViewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Cart > getPromotionTags \n ${res_error}`,
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
   * @summary: List promotions
   * @description: Retrieve a list of all created promotions for specific sales channel. It also supports efficient text search and pagination functionalities, ensuring optimized promotion listing for streamlined navigation and management. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getPromotions/).
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Current company id
   * @param {string} arg.applicationId - Current Application _id
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.q] -
   * @param {boolean} [arg.isActive] -
   * @param {string} [arg.promoGroup] -
   * @param {string} [arg.promotionType] -
   * @param {string} [arg.fpPanel] -
   * @param {string} [arg.promotionId] -
   * @returns {Paginator<CartPlatformModel.PromotionsResponse>}
   * @summary: List promotions
   * @description: Retrieve a list of all created promotions for specific sales channel. It also supports efficient text search and pagination functionalities, ensuring optimized promotion listing for streamlined navigation and management.
   */
  getPromotionsPaginator({
    companyId,
    applicationId,
    pageSize,
    q,
    isActive,
    promoGroup,
    promotionType,
    fpPanel,
    promotionId,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getPromotions({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
        isActive: isActive,
        promoGroup: promoGroup,
        promotionType: promotionType,
        fpPanel: fpPanel,
        promotionId: promotionId,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CartPlatformApplicationValidator.GetShipmentsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CartPlatformModel.PlatformCartShipmentsResponse>} -
   *   Success response
   * @name getShipments
   * @summary: Get shipments details
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
   * @summary: Get Store Address
   * @description: Retrieve store details by entering the unique identifier of the pickup stores. Store details include the seller's name, contact information such as email address or phone number and business address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/getStoreAddressByUid/).
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
   * @summary: Create Fynd order with overriding cart details
   * @description: Generate Fynd order while overriding cart details sent with provided `cart_items` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/overrideCart/).
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
   * @summary: Add items to cart
   * @description: Add product items to the customer's existing shopping cart. If there is no existing cart associated with the customer, it creates a new one and adds the items to it. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformAddItems/).
   */
  async platformAddItems(
    { body, i, b, buyNow, id, cartType, requestHeaders } = {
      requestHeaders: {},
    },
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
    } = CartPlatformApplicationValidator.platformAddItems().validate(
      {
        body,
        i,
        b,
        buyNow,
        id,
        cartType,
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
    query_params["cart_type"] = cartType;

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
   * @summary: Checkout cart
   * @description: The checkout cart initiates the order creation process based on the selected address and payment method. It revalidates the cart details to ensure safe and seamless order placement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformCheckoutCart/).
   */
  async platformCheckoutCart(
    { body, id, cartType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.platformCheckoutCart().validate(
      {
        body,
        id,
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
    } = CartPlatformApplicationValidator.platformCheckoutCart().validate(
      {
        body,
        id,
        cartType,
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
    query_params["cart_type"] = cartType;

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
   * @summary: Cart checkout (latest)
   * @description: Checkout process that supports multiple MOP(mode of payment). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformCheckoutCartV2/).
   */
  async platformCheckoutCartV2(
    { body, id, cartType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.platformCheckoutCartV2().validate(
      {
        body,
        id,
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
    } = CartPlatformApplicationValidator.platformCheckoutCartV2().validate(
      {
        body,
        id,
        cartType,
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
    query_params["cart_type"] = cartType;

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
   * @summary: Update cart items
   * @description: Customers can modify added product attributes such as quantity and size, as well as remove items from the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/platformUpdateCart/).
   */
  async platformUpdateCart(
    { body, id, i, orderType, b, buyNow, cartType, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.platformUpdateCart().validate(
      {
        body,
        id,
        i,
        orderType,
        b,
        buyNow,
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
    } = CartPlatformApplicationValidator.platformUpdateCart().validate(
      {
        body,
        id,
        i,
        orderType,
        b,
        buyNow,
        cartType,
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
    query_params["order_type"] = orderType;
    query_params["b"] = b;
    query_params["buy_now"] = buyNow;
    query_params["cart_type"] = cartType;

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
   * @summary: Remove address associated with an account
   * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/removeAddress/).
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
   * @summary: Remove Applied Coupon for platform pos user
   * @description: Remove Coupon applied on the cart by passing uid in request body. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/removeCoupon/).
   */
  async removeCoupon(
    { uid, buyNow, cartType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CartPlatformApplicationValidator.removeCoupon().validate(
      {
        uid,
        buyNow,
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
    } = CartPlatformApplicationValidator.removeCoupon().validate(
      {
        uid,
        buyNow,
        cartType,
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
    query_params["cart_type"] = cartType;

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
   * @summary: Select payment mode
   * @description: Customers can select a preferred payment mode from available options during the cart checkout process to securely and efficiently complete their transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/selectPaymentMode/).
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
   * @summary: Select payment mode (latest)
   * @description: Selection of payment mode that supports multiple MOP(mode of payment). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/selectPaymentModeV2/).
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
   * @summary: Update address added to an account
   * @description: Use this API to update an existing address in the account. Request object should contain attributes mentioned in Address can be updated. These attributes are:is_default_address landmark area pincode email address_type name address_id address - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateAddress/).
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
   * @summary: Update cart items
   * @description: Customers can modify added product attributes such as quantity and size, as well as remove items from the cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCart/).
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
   * @summary: Update cart metadata
   * @description: Add or modify metadata associated with a cart, which includes customer preferences, delivery instructions, or any special requirements related to the cart items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartMeta/).
   */
  async updateCartMeta(
    { body, id, buyNow, userId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CartPlatformApplicationValidator.updateCartMeta().validate(
      {
        body,
        id,
        buyNow,
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
    } = CartPlatformApplicationValidator.updateCartMeta().validate(
      {
        body,
        id,
        buyNow,
        userId,
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
    query_params["user_id"] = userId;

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
   * @summary: Merge or replace existing cart
   * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCartWithSharedItems/).
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
   * @returns {Promise<CartPlatformModel.CouponDetailResponse>} - Success response
   * @name updateCoupon
   * @summary: Update a coupon
   * @description: Update the details of an existing coupon by specifying its unique identifier. This includes modifying coupon attributes such as discount percentage, validity period, and associated conditions. Leveraging this functionality allows businesses to quickly adapt their promotional strategies to changing market dynamics. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCoupon/).
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
    } = CartPlatformModel.CouponDetailResponse().validate(responseData, {
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
   * @summary: Update coupon archive state and schedule
   * @description: Seller can make partial adjustments of an existing coupon by specifying its unique identifier. It enables businesses to modify specific attributes of the coupon while preserving other details intact. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateCouponPartially/).
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
   * @returns {Promise<CartPlatformModel.UpdatePriceAdjustmentResponse>} -
   *   Success response
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
    } = CartPlatformModel.UpdatePriceAdjustmentResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @summary: Update a promotion
   * @description: Update the details of an existing promotion by specifying its unique identifier. This includes modifying promotion attributes such as discount percentage, validity period, and associated conditions. Leveraging this functionality allows businesses to quickly adapt their promotional strategies to changing market dynamics. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updatePromotion/).
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
   * @summary: Update shipments
   * @description: Update the quantity or delivery type of the shipments. Customers can switch the order type from Home Delivery to Pick At Store and vice versa. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/updateShipments/).
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
   * @summary: Validate applied coupon
   * @description: Validates the applicability of a coupon code for the selected payment mode for the existing cart. This ensures the coupon's validity before proceeding with the payment process, enhancing user experience and preventing potential errors during transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/cart/validateCouponForPayment/).
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
    } = CartPlatformApplicationValidator.validateCouponForPayment().validate(
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
    } = CartPlatformApplicationValidator.validateCouponForPayment().validate(
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
    query_params["iin"] = iin;
    query_params["network"] = network;
    query_params["type"] = type;
    query_params["card_id"] = cardId;
    query_params["cart_type"] = cartType;

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
