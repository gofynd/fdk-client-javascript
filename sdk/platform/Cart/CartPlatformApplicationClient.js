const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
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
   * @param {CartPlatformApplicationValidator.addAddress} arg - Arg object
   * @returns {Promise<CartPlatformModel.SaveAddressResponse>} - Success response
   * @name addAddress
   * @summary: Add address to an account
   * @description: Use this API to add an address to an account.
   */
  async addAddress({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.SaveAddressResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > addAddress \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.addItems} arg - Arg object
   * @returns {Promise<CartPlatformModel.AddCartDetailResponse>} - Success response
   * @name addItems
   * @summary: Add items to abandoned cart
   * @description: Use this API to add items to the abandoned cart.
   */
  async addItems({ cartId, body, b, userId } = {}) {
    const { error } = CartPlatformApplicationValidator.addItems().validate(
      {
        cartId,
        body,
        b,
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
    } = CartPlatformApplicationValidator.addItems().validate(
      {
        cartId,
        body,
        b,
        userId,
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
    query_params["user_id"] = userId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/abandoned/carts/${cartId}`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.AddCartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > addItems \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.applyCoupon} arg - Arg object
   * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
   * @name applyCoupon
   * @summary: Apply Coupon for platform pos user
   * @description: Use this API to apply coupons on items in the cart.
   */
  async applyCoupon({ body, i, b, p, id, buyNow } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > applyCoupon \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.checkCartServiceability} arg - Arg object
   * @returns {Promise<CartPlatformModel.OpenApiCartServiceabilityResponse>}
   *   - Success response
   *
   * @name checkCartServiceability
   * @summary: Check Pincode Serviceability
   * @description: Check Pincode serviceability for cart items provided in `cart_items` and address pincode in `shipping_address`
   */
  async checkCartServiceability({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.OpenApiCartServiceabilityResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > checkCartServiceability \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.checkoutCart} arg - Arg object
   * @returns {Promise<CartPlatformModel.OpenApiCheckoutResponse>} - Success response
   * @name checkoutCart
   * @summary: Create Fynd order with cart details
   * @description: Generate Fynd order for cart details send with provided `cart_items`
   */
  async checkoutCart({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.OpenApiCheckoutResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > checkoutCart \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.createCartDynamicInjection} arg
   *   - Arg object
   *
   * @returns {Promise<CartPlatformModel.CartDynamicInjectionResponse>} -
   *   Success response
   * @name createCartDynamicInjection
   * @summary: Create new cart dynamic injection
   * @description: Create new cart dynamic injection
   */
  async createCartDynamicInjection({ body } = {}) {
    const {
      error,
    } = CartPlatformApplicationValidator.createCartDynamicInjection().validate(
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
    } = CartPlatformApplicationValidator.createCartDynamicInjection().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > createCartDynamicInjection \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/additional-charge-discount`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartDynamicInjectionResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > createCartDynamicInjection \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.createCartMetaConfig} arg - Arg object
   * @returns {Promise<CartPlatformModel.CartMetaConfigAdd>} - Success response
   * @name createCartMetaConfig
   * @summary: Create new cart meta configuration
   * @description: Create new cart meta configuration
   */
  async createCartMetaConfig({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartMetaConfigAdd().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > createCartMetaConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.createCoupon} arg - Arg object
   * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
   * @name createCoupon
   * @summary: Create new coupon
   * @description: Create new coupon
   */
  async createCoupon({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.SuccessMessage().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > createCoupon \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.createPromotion} arg - Arg object
   * @returns {Promise<CartPlatformModel.PromotionAdd>} - Success response
   * @name createPromotion
   * @summary: Create new promotion
   * @description: Create new promotion
   */
  async createPromotion({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.PromotionAdd().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > createPromotion \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.deleteCart} arg - Arg object
   * @returns {Promise<CartPlatformModel.DeleteCartDetailResponse>} - Success response
   * @name deleteCart
   * @summary: Delete cart once user made successful checkout
   * @description: Use this API to delete the cart.
   */
  async deleteCart({ body, id } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.DeleteCartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > deleteCart \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.fetchAndvalidateCartItems} arg
   *   - Arg object
   *
   * @returns {Promise<CartPlatformModel.OpenapiCartDetailsResponse>} - Success response
   * @name fetchAndvalidateCartItems
   * @summary: Fetch Cart Details
   * @description: Get all the details of cart for a list of provided `cart_items`
   */
  async fetchAndvalidateCartItems({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.OpenapiCartDetailsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > fetchAndvalidateCartItems \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.fetchCartMetaConfig} arg - Arg object
   * @returns {Promise<CartPlatformModel.CartMetaConfigAdd>} - Success response
   * @name fetchCartMetaConfig
   * @summary: Fetch cart meta configuration
   * @description: Fetch cart meta configuration
   */
  async fetchCartMetaConfig({} = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartMetaConfigAdd().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > fetchCartMetaConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getAbandonedCart} arg - Arg object
   * @returns {Promise<CartPlatformModel.AbandonedCartResponse>} - Success response
   * @name getAbandonedCart
   * @summary: Get with abandoned cart list
   * @description: Get abandoned cart list with pagination
   */
  async getAbandonedCart({
    userId,
    pageNo,
    pageSize,
    fromDate,
    toDate,
    anonymousCart,
    lastId,
    sortOn,
  } = {}) {
    const {
      error,
    } = CartPlatformApplicationValidator.getAbandonedCart().validate(
      {
        userId,
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
        userId,
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
    query_params["user_id"] = userId;
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.AbandonedCartResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getAbandonedCart \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Current company id
   * @param {string} arg.applicationId - Current Application _id
   * @param {string} [arg.userId] -
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @param {boolean} [arg.anonymousCart] -
   * @param {string} [arg.lastId] -
   * @param {string} [arg.sortOn] -
   * @returns {Paginator<CartPlatformModel.AbandonedCartResponse>}
   * @summary: Get with abandoned cart list
   * @description: Get abandoned cart list with pagination
   */
  getAbandonedCartPaginator({
    companyId,
    applicationId,
    userId,
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
        userId: userId,
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
   * @param {CartPlatformApplicationValidator.getAbandonedCartDetails} arg - Arg object
   * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
   * @name getAbandonedCartDetails
   * @summary: Fetch all items added to the cart
   * @description: Use this API to get details of all the items added to a cart.
   */
  async getAbandonedCartDetails({ userId, id, i, b } = {}) {
    const {
      error,
    } = CartPlatformApplicationValidator.getAbandonedCartDetails().validate(
      {
        userId,
        id,
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
    } = CartPlatformApplicationValidator.getAbandonedCartDetails().validate(
      {
        userId,
        id,
        i,
        b,
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
    query_params["user_id"] = userId;
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/abandoned/cart/detail`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getAbandonedCartDetails \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getAddressById} arg - Arg object
   * @returns {Promise<CartPlatformModel.PlatformAddress>} - Success response
   * @name getAddressById
   * @summary: Fetch a single address by its ID
   * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `PlatformAddress`. Attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
   */
  async getAddressById({
    id,
    cartId,
    buyNow,
    mobileNo,
    checkoutMode,
    tags,
    isDefault,
    userId,
  } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.PlatformAddress().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getAddressById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getAddresses} arg - Arg object
   * @returns {Promise<CartPlatformModel.PlatformGetAddressesResponse>} -
   *   Success response
   * @name getAddresses
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
    userId,
  } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.PlatformGetAddressesResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getAddresses \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getAppCoupons} arg - Arg object
   * @returns {Promise<CartPlatformModel.GetCouponResponse>} - Success response
   * @name getAppCoupons
   * @summary: Fetch Coupon
   * @description: Use this API to get a list of available coupons along with their details.
   */
  async getAppCoupons({ id, buyNow } = {}) {
    const { error } = CartPlatformApplicationValidator.getAppCoupons().validate(
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
    } = CartPlatformApplicationValidator.getAppCoupons().validate(
      {
        id,
        buyNow,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform-pos-coupon`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.GetCouponResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getAppCoupons \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getAvailableDeliveryModes} arg
   *   - Arg object
   *
   * @returns {Promise<CartPlatformModel.CartDeliveryModesResponse>} - Success response
   * @name getAvailableDeliveryModes
   * @summary: Get available delivery modes for cart
   * @description: Use this API to get the delivery modes (home-delivery/store-pickup) along with a list of pickup stores available for a given cart at a given PIN Code. User can then view the address of a pickup store with the help of store-address API.
   */
  async getAvailableDeliveryModes({ areaCode, id } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartDeliveryModesResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getAvailableDeliveryModes \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getCart} arg - Arg object
   * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
   * @name getCart
   * @summary: Fetch all items added to the customer cart using cart id
   * @description: Use this API to get details of all the items added to a cart.
   */
  async getCart({ id, userId, i, b, assignCardId, buyNow } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getCart \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getCartList} arg - Arg object
   * @returns {Promise<CartPlatformModel.MultiCartResponse>} - Success response
   * @name getCartList
   * @summary: Get cart list for store os user
   * @description: Get all carts for the store os user which is created for customer
   */
  async getCartList({ fromDate, toDate, filterOn } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.MultiCartResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getCartList \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getCartShareLink} arg - Arg object
   * @returns {Promise<CartPlatformModel.GetShareCartLinkResponse>} - Success response
   * @name getCartShareLink
   * @summary: Generate token for sharing the cart
   * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.
   */
  async getCartShareLink({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.GetShareCartLinkResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getCartShareLink \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getCartSharedItems} arg - Arg object
   * @returns {Promise<CartPlatformModel.SharedCartResponse>} - Success response
   * @name getCartSharedItems
   * @summary: Get details of a shared cart
   * @description: Use this API to get the shared cart details as per the token generated using the share-cart API.
   */
  async getCartSharedItems({ token } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.SharedCartResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getCartSharedItems \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getCouponById} arg - Arg object
   * @returns {Promise<CartPlatformModel.CouponUpdate>} - Success response
   * @name getCouponById
   * @summary: Get with single coupon details or coupon list
   * @description: Get single coupon details with `id` in path param
   */
  async getCouponById({ id } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.CouponUpdate().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getCouponById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getCouponCodeExists} arg - Arg object
   * @returns {Promise<Object>} - Success response
   * @name getCouponCodeExists
   * @summary: Check if coupon is already created with coupon code
   * @description: Check if sent coupon code is already existing coupon code. As coupon code is to be unique.
   */
  async getCouponCodeExists({ code } = {}) {
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
      undefined
    );

    const { error: res_error } = Joi.any().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getCouponCodeExists \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getCouponOptionValues} arg - Arg object
   * @returns {Promise<Object>} - Success response
   * @name getCouponOptionValues
   * @summary: Get coupon options enums with display values
   * @description: Get coupon enum values for fields in valid coupon object. Used for front end to create, update and filter coupon lists via fields
   */
  async getCouponOptionValues({} = {}) {
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
      undefined
    );

    const { error: res_error } = Joi.any().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getCouponOptionValues \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getCoupons} arg - Arg object
   * @returns {Promise<CartPlatformModel.CouponsResponse>} - Success response
   * @name getCoupons
   * @summary: Get with single coupon details or coupon list
   * @description: Get coupon list with pagination
   */
  async getCoupons({
    pageNo,
    pageSize,
    isArchived,
    title,
    isPublic,
    isDisplay,
    typeSlug,
    code,
  } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.CouponsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getCoupons \n ${res_error}`,
      });
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
   * @summary: Get with single coupon details or coupon list
   * @description: Get coupon list with pagination
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
   * @param {CartPlatformApplicationValidator.getItemCount} arg - Arg object
   * @returns {Promise<CartPlatformModel.CartItemCountResponse>} - Success response
   * @name getItemCount
   * @summary: Count items in the customer's cart
   * @description: Use this API to get the total number of items present in cart.
   */
  async getItemCount({ id, buyNow } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartItemCountResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getItemCount \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getPromosCouponConfig} arg - Arg object
   * @returns {Promise<CartPlatformModel.ActivePromosResponse>} - Success response
   * @name getPromosCouponConfig
   * @summary: Fetch all promos that are set as active
   * @description: Use this API to get list of all the active promos/coupons.
   */
  async getPromosCouponConfig({ entityType, isHidden } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.ActivePromosResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getPromosCouponConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getPromotionById} arg - Arg object
   * @returns {Promise<CartPlatformModel.PromotionUpdate>} - Success response
   * @name getPromotionById
   * @summary: Get with single promotion details or promotion list
   * @description: Get single promotion details with `id` in path param
   */
  async getPromotionById({ id } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.PromotionUpdate().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getPromotionById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getPromotionCodeExists} arg - Arg object
   * @returns {Promise<Object>} - Success response
   * @name getPromotionCodeExists
   * @summary: Check if promotion is already created with promotion code
   * @description: Check if sent promotion code is already existing promotion code. As promotion code is to be unique.
   */
  async getPromotionCodeExists({ code } = {}) {
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
      undefined
    );

    const { error: res_error } = Joi.any().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getPromotionCodeExists \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getPromotions} arg - Arg object
   * @returns {Promise<CartPlatformModel.PromotionsResponse>} - Success response
   * @name getPromotions
   * @summary: Get promotion list
   * @description: Get promotion list with pagination
   */
  async getPromotions({
    pageNo,
    pageSize,
    q,
    isActive,
    promoGroup,
    promotionType,
    fpPanel,
    promotionId,
  } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.PromotionsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getPromotions \n ${res_error}`,
      });
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
   * @summary: Get promotion list
   * @description: Get promotion list with pagination
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
   * @param {CartPlatformApplicationValidator.getShipments} arg - Arg object
   * @returns {Promise<CartPlatformModel.PlatformCartShipmentsResponse>} -
   *   Success response
   * @name getShipments
   * @summary: Get delivery date and options before checkout
   * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.
   */
  async getShipments({
    pickAtStoreUid,
    orderingStoreId,
    i,
    p,
    id,
    addressId,
    areaCode,
    orderType,
  } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.PlatformCartShipmentsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getShipments \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.getStoreAddressByUid} arg - Arg object
   * @returns {Promise<CartPlatformModel.StoreDetailsResponse>} - Success response
   * @name getStoreAddressByUid
   * @summary: Get list of stores for give uids
   * @description: Use this API to get the store details by entering the unique identifier of the pickup stores shown in the response of available-delivery-mode API.
   */
  async getStoreAddressByUid({ storeUid } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.StoreDetailsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > getStoreAddressByUid \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.overrideCart} arg - Arg object
   * @returns {Promise<CartPlatformModel.OverrideCheckoutResponse>} - Success response
   * @name overrideCart
   * @summary: Create Fynd order with overriding cart details
   * @description: Generate Fynd order while overriding cart details sent with provided `cart_items`
   */
  async overrideCart({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.OverrideCheckoutResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > overrideCart \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.platformAddItems} arg - Arg object
   * @returns {Promise<CartPlatformModel.AddCartDetailResponse>} - Success response
   * @name platformAddItems
   * @summary: Add items to cart
   * @description: Use this API to add items to the cart.
   */
  async platformAddItems({ body, i, b, buyNow, id } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.AddCartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > platformAddItems \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.platformCheckoutCart} arg - Arg object
   * @returns {Promise<CartPlatformModel.CartCheckoutResponse>} - Success response
   * @name platformCheckoutCart
   * @summary: Checkout all items in the cart
   * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be generated directly, whereas for other checkout modes, user will be redirected to a payment gateway.
   */
  async platformCheckoutCart({ body, id } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartCheckoutResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > platformCheckoutCart \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.platformCheckoutCartV2} arg - Arg object
   * @returns {Promise<CartPlatformModel.CartCheckoutResponse>} - Success response
   * @name platformCheckoutCartV2
   * @summary: Checkout all items in the cart
   * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway.
   */
  async platformCheckoutCartV2({ body, id } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartCheckoutResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > platformCheckoutCartV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.platformUpdateCart} arg - Arg object
   * @returns {Promise<CartPlatformModel.UpdateCartDetailResponse>} - Success response
   * @name platformUpdateCart
   * @summary: Update items in the customer 's cart using cart id
   * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   */
  async platformUpdateCart({ body, id, i, b, buyNow } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.UpdateCartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > platformUpdateCart \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.removeAddress} arg - Arg object
   * @returns {Promise<CartPlatformModel.DeleteAddressResponse>} - Success response
   * @name removeAddress
   * @summary: Remove address associated with an account
   * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.
   */
  async removeAddress({ id, userId } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.DeleteAddressResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > removeAddress \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.removeCartDynamicInjection} arg
   *   - Arg object
   *
   * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
   * @name removeCartDynamicInjection
   * @summary: Remove cart dynamic injection
   * @description: Remove cart dynamic injection
   */
  async removeCartDynamicInjection({ id } = {}) {
    const {
      error,
    } = CartPlatformApplicationValidator.removeCartDynamicInjection().validate(
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
    } = CartPlatformApplicationValidator.removeCartDynamicInjection().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > removeCartDynamicInjection \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/additional-charge-discount/${id}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.SuccessMessage().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > removeCartDynamicInjection \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.removeCoupon} arg - Arg object
   * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
   * @name removeCoupon
   * @summary: Remove Applied Coupon for platform pos user
   * @description: Remove Coupon applied on the cart by passing uid in request body.
   */
  async removeCoupon({ uid, buyNow } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > removeCoupon \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.selectAddress} arg - Arg object
   * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
   * @name selectAddress
   * @summary: Select an address from available addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `PlatformSelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>
   */
  async selectAddress({ body, cartId, buyNow, i, b } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > selectAddress \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.selectPaymentMode} arg - Arg object
   * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
   * @name selectPaymentMode
   * @summary: Update cart payment
   * @description: Use this API to update cart payment.
   */
  async selectPaymentMode({ body, id, buyNow } = {}) {
    const {
      error,
    } = CartPlatformApplicationValidator.selectPaymentMode().validate(
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
    } = CartPlatformApplicationValidator.selectPaymentMode().validate(
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
        message: `Parameter Validation warrnings for platform > Cart > selectPaymentMode \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > selectPaymentMode \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.selectPaymentModeV2} arg - Arg object
   * @returns {Promise<CartPlatformModel.CartDetailResponse>} - Success response
   * @name selectPaymentModeV2
   * @summary: Update cart payment
   * @description: Use this API to update cart payment.
   */
  async selectPaymentModeV2({ body, id, buyNow } = {}) {
    const {
      error,
    } = CartPlatformApplicationValidator.selectPaymentModeV2().validate(
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
    } = CartPlatformApplicationValidator.selectPaymentModeV2().validate(
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
        message: `Parameter Validation warrnings for platform > Cart > selectPaymentModeV2 \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v2.0/company/${this.config.companyId}/application/${this.applicationId}/payment`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > selectPaymentModeV2 \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.updateAddress} arg - Arg object
   * @returns {Promise<CartPlatformModel.UpdateAddressResponse>} - Success response
   * @name updateAddress
   * @summary: Update address added to an account
   * @description: <p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   */
  async updateAddress({ id, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.UpdateAddressResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > updateAddress \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.updateCart} arg - Arg object
   * @returns {Promise<CartPlatformModel.UpdateCartDetailResponse>} - Success response
   * @name updateCart
   * @summary: Update items in the abandoned cart
   * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   */
  async updateCart({ cartId, body, b, userId } = {}) {
    const { error } = CartPlatformApplicationValidator.updateCart().validate(
      {
        cartId,
        body,
        b,
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
    } = CartPlatformApplicationValidator.updateCart().validate(
      {
        cartId,
        body,
        b,
        userId,
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
    query_params["user_id"] = userId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/abandoned/carts/${cartId}`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.UpdateCartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > updateCart \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.updateCartDynamicInjection} arg
   *   - Arg object
   *
   * @returns {Promise<CartPlatformModel.CartDynamicInjectionResponse>} -
   *   Success response
   * @name updateCartDynamicInjection
   * @summary: Update cart injection configuration
   * @description: Update cart injection configuration
   */
  async updateCartDynamicInjection({ id, body } = {}) {
    const {
      error,
    } = CartPlatformApplicationValidator.updateCartDynamicInjection().validate(
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
    } = CartPlatformApplicationValidator.updateCartDynamicInjection().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Cart > updateCartDynamicInjection \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/additional-charge-discount/${id}`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartDynamicInjectionResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > updateCartDynamicInjection \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.updateCartMeta} arg - Arg object
   * @returns {Promise<CartPlatformModel.CartMetaResponse>} - Success response
   * @name updateCartMeta
   * @summary: Update the cart meta for platform pos user
   * @description: Use this API to update cart meta like checkout_mode and gstin.
   */
  async updateCartMeta({ body, id, buyNow } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartMetaResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > updateCartMeta \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.updateCartMetaConfig} arg - Arg object
   * @returns {Promise<CartPlatformModel.CartMetaConfigUpdate>} - Success response
   * @name updateCartMetaConfig
   * @summary: Update cart meta configuration
   * @description: Update cart meta configuration
   */
  async updateCartMetaConfig({ cartMetaId, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.CartMetaConfigUpdate().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > updateCartMetaConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.updateCartUser} arg - Arg object
   * @returns {Promise<CartPlatformModel.UserCartMappingResponse>} - Success response
   * @name updateCartUser
   * @summary: Update user id for store os customer
   * @description: Update user id for store os customer after creating customer
   */
  async updateCartUser({ body, id } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.UserCartMappingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > updateCartUser \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.updateCartWithSharedItems} arg
   *   - Arg object
   *
   * @returns {Promise<CartPlatformModel.SharedCartResponse>} - Success response
   * @name updateCartWithSharedItems
   * @summary: Merge or replace existing cart
   * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.
   */
  async updateCartWithSharedItems({ token, action, cartId } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.SharedCartResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > updateCartWithSharedItems \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.updateCoupon} arg - Arg object
   * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
   * @name updateCoupon
   * @summary: Update existing coupon configuration
   * @description: Update coupon with id sent in `id`
   */
  async updateCoupon({ id, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.SuccessMessage().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > updateCoupon \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.updateCouponPartially} arg - Arg object
   * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
   * @name updateCouponPartially
   * @summary: Update coupon archive state and schedule
   * @description: Update archive/unarchive and change schedule for coupon
   */
  async updateCouponPartially({ id, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.SuccessMessage().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > updateCouponPartially \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.updatePromotion} arg - Arg object
   * @returns {Promise<CartPlatformModel.PromotionUpdate>} - Success response
   * @name updatePromotion
   * @summary: Update existing promotion configuration
   * @description: Update promotion with id sent in `id`
   */
  async updatePromotion({ id, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.PromotionUpdate().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > updatePromotion \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.updatePromotionPartially} arg - Arg object
   * @returns {Promise<CartPlatformModel.SuccessMessage>} - Success response
   * @name updatePromotionPartially
   * @summary: Update promotion publish state and schedule
   * @description: Update publish/unpublish and change schedule for promotion
   */
  async updatePromotionPartially({ id, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.SuccessMessage().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > updatePromotionPartially \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.updateShipments} arg - Arg object
   * @returns {Promise<CartPlatformModel.PlatformCartShipmentsResponse>} -
   *   Success response
   * @name updateShipments
   * @summary: Update shipment delivery type and quantity before checkout
   * @description: Use this API to update the delivery type and quantity as per customer's preference for either store pick-up or home-delivery.
   */
  async updateShipments({
    body,
    i,
    p,
    id,
    addressId,
    areaCode,
    orderType,
  } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CartPlatformModel.PlatformCartShipmentsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > updateShipments \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CartPlatformApplicationValidator.validateCouponForPayment} arg - Arg object
   * @returns {Promise<CartPlatformModel.PaymentCouponValidate>} - Success response
   * @name validateCouponForPayment
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
      undefined
    );

    const {
      error: res_error,
    } = CartPlatformModel.PaymentCouponValidate().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Cart > validateCouponForPayment \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Cart;
