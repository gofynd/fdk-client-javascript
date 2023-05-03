const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const CartValidator = require("./CartPlatformApplicationValidator");
const CartModel = require("./CartPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Cart {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PlatformAddress} arg.body
   * @returns {Promise<SaveAddressResponse>} - Success response
   * @summary: Add address to an account
   * @description: Use this API to add an address to an account.
   */
  async addAddress({ body } = {}) {
    const { error } = CartValidator.addAddress().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.addAddress().validate(
      {
        body,
      },
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/address`,
      query_params,
      body
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
   * @param {string} arg.cartId - Current Cart _id
   * @param {boolean} [arg.b] -
   * @param {AddCartRequest} arg.body
   * @returns {Promise<AddCartDetailResponse>} - Success response
   * @summary: Add items to abandoned cart
   * @description: Use this API to add items to the abandoned cart.
   */
  async addItems({ cartId, body, b } = {}) {
    const { error } = CartValidator.addItems().validate(
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
    const { error: warrning } = CartValidator.addItems().validate(
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
        message: "Parameter Validation warrnings for addItems",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["b"] = b;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/abandoned/carts/${cartId}`,
      query_params,
      body
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
   * @summary: Apply Coupon for platform pos user
   * @description: Use this API to apply coupons on items in the cart.
   */
  async applyCoupon({ body, i, b, p, id, buyNow } = {}) {
    const { error } = CartValidator.applyCoupon().validate(
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
    const { error: warrning } = CartValidator.applyCoupon().validate(
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform-pos-coupon`,
      query_params,
      body
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
   * @param {OpenApiCartServiceabilityRequest} arg.body
   * @returns {Promise<OpenApiCartServiceabilityResponse>} - Success response
   * @summary: Check Pincode Serviceability
   * @description: Check Pincode serviceability for cart items provided in `cart_items` and address pincode in `shipping_address`
   */
  async checkCartServiceability({ body } = {}) {
    const { error } = CartValidator.checkCartServiceability().validate(
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
    } = CartValidator.checkCartServiceability().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for checkCartServiceability",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.OpenApiCartServiceabilityResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for checkCartServiceability",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OpenApiPlatformCheckoutReqSchema} arg.body
   * @returns {Promise<OpenApiCheckoutResponse>} - Success response
   * @summary: Create Fynd order with cart details
   * @description: Generate Fynd order for cart details send with provided `cart_items`
   */
  async checkoutCart({ body } = {}) {
    const { error } = CartValidator.checkoutCart().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.checkoutCart().validate(
      {
        body,
      },
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/checkout`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CartModel.OpenApiCheckoutResponse().validate(response, {
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
   * @param {CouponAddSchema} arg.body
   * @returns {Promise<SuccessMessage>} - Success response
   * @summary: Create new coupon
   * @description: Create new coupon
   */
  async createCoupon({ body } = {}) {
    const { error } = CartValidator.createCoupon().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.createCoupon().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createCoupon",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon`,
      query_params,
      body
    );

    const { error: res_error } = CartModel.SuccessMessage().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createCoupon",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PromotionAddSchema} arg.body
   * @returns {Promise<PromotionAddSchema>} - Success response
   * @summary: Create new promotion
   * @description: Create new promotion
   */
  async createPromotion({ body } = {}) {
    const { error } = CartValidator.createPromotion().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.createPromotion().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createPromotion",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.PromotionAddSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createPromotion",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] - The unique identifier of the cart.
   * @param {DeleteCartRequest} arg.body
   * @returns {Promise<DeleteCartDetailResponse>} - Success response
   * @summary: Delete cart once user made successful checkout
   * @description: Use this API to delete the cart.
   */
  async deleteCart({ body, id } = {}) {
    const { error } = CartValidator.deleteCart().validate(
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
    const { error: warrning } = CartValidator.deleteCart().validate(
      {
        body,
        id,
      },
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart_archive`,
      query_params,
      body
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
   * @param {OpenapiCartDetailsRequest} arg.body
   * @returns {Promise<OpenapiCartDetailsResponse>} - Success response
   * @summary: Fetch Cart Details
   * @description: Get all the details of cart for a list of provided `cart_items`
   */
  async fetchAndvalidateCartItems({ body } = {}) {
    const { error } = CartValidator.fetchAndvalidateCartItems().validate(
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
    } = CartValidator.fetchAndvalidateCartItems().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for fetchAndvalidateCartItems",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.OpenapiCartDetailsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for fetchAndvalidateCartItems",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @param {boolean} [arg.anonymousCart] -
   * @param {string} [arg.lastId] -
   * @param {string} [arg.sortOn] -
   * @returns {Promise<AbandonedCartResponseSchema>} - Success response
   * @summary: Get with abandoned cart list
   * @description: Get abandoned cart list with pagination
   */
  async getAbandonedCart({
    pageNo,
    pageSize,
    fromDate,
    toDate,
    anonymousCart,
    lastId,
    sortOn,
  } = {}) {
    const { error } = CartValidator.getAbandonedCart().validate(
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
    const { error: warrning } = CartValidator.getAbandonedCart().validate(
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
        message: "Parameter Validation warrnings for getAbandonedCart",
      });
      Logger({ level: "WARN", message: warrning });
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
      undefined
    );

    const {
      error: res_error,
    } = CartModel.AbandonedCartResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAbandonedCart",
      });
      Logger({ level: "WARN", message: res_error });
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
   * @summary: Get with abandoned cart list
   * @description: Get abandoned cart list with pagination
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.id -
   * @param {string} [arg.cartId] -
   * @param {boolean} [arg.buyNow] -
   * @param {string} [arg.mobileNo] -
   * @param {string} [arg.checkoutMode] -
   * @param {string} [arg.tags] -
   * @param {boolean} [arg.isDefault] -
   * @param {string} [arg.userId] -
   * @returns {Promise<PlatformAddress>} - Success response
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
    const { error } = CartValidator.getAddressById().validate(
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
    const { error: warrning } = CartValidator.getAddressById().validate(
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
    query_params["user_id"] = userId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/address/${id}`,
      query_params,
      undefined
    );

    const { error: res_error } = CartModel.PlatformAddress().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

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
   * @param {string} [arg.userId] -
   * @returns {Promise<PlatformGetAddressesResponse>} - Success response
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
    const { error } = CartValidator.getAddresses().validate(
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
    const { error: warrning } = CartValidator.getAddresses().validate(
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
    } = CartModel.PlatformGetAddressesResponse().validate(response, {
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
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<GetCouponResponse>} - Success response
   * @summary: Fetch Coupon
   * @description: Use this API to get a list of available coupons along with their details.
   */
  async getAppCoupons({ id, buyNow } = {}) {
    const { error } = CartValidator.getAppCoupons().validate(
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
    const { error: warrning } = CartValidator.getAppCoupons().validate(
      {
        id,
        buyNow,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAppCoupons",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.GetCouponResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAppCoupons",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.areaCode -
   * @param {string} [arg.id] -
   * @returns {Promise<CartDeliveryModesResponse>} - Success response
   * @summary: Get available delivery modes for cart
   * @description: Use this API to get the delivery modes (home-delivery/store-pickup) along with a list of pickup stores available for a given cart at a given PIN Code. User can then view the address of a pickup store with the help of store-address API.
   */
  async getAvailableDeliveryModes({ areaCode, id } = {}) {
    const { error } = CartValidator.getAvailableDeliveryModes().validate(
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
    } = CartValidator.getAvailableDeliveryModes().validate(
      {
        areaCode,
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAvailableDeliveryModes",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.CartDeliveryModesResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAvailableDeliveryModes",
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
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Fetch all items added to the customer cart using cart id
   * @description: Use this API to get details of all the items added to a cart.
   */
  async getCart({ id, i, b, assignCardId, buyNow } = {}) {
    const { error } = CartValidator.getCart().validate(
      {
        id,
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
    const { error: warrning } = CartValidator.getCart().validate(
      {
        id,
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
        message: "Parameter Validation warrnings for getCart",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["id"] = id;
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
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @param {string} [arg.filterOn] -
   * @returns {Promise<MultiCartResponseSchema>} - Success response
   * @summary: Get cart list for store os user
   * @description: Get all carts for the store os user which is created for customer
   */
  async getCartList({ fromDate, toDate, filterOn } = {}) {
    const { error } = CartValidator.getCartList().validate(
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
    const { error: warrning } = CartValidator.getCartList().validate(
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
        message: "Parameter Validation warrnings for getCartList",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.MultiCartResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCartList",
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
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getCartShareLink().validate(
      {
        body,
      },
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/share-cart`,
      query_params,
      body
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
      {
        token,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getCartSharedItems().validate(
      {
        token,
      },
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/share-cart/${token}`,
      query_params,
      undefined
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
   * @param {string} arg.id -
   * @returns {Promise<CouponUpdateSchema>} - Success response
   * @summary: Get with single coupon details or coupon list
   * @description: Get single coupon details with `id` in path param
   */
  async getCouponById({ id } = {}) {
    const { error } = CartValidator.getCouponById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getCouponById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCouponById",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.CouponUpdateSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCouponById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {boolean} [arg.isArchived] -
   * @param {string} [arg.title] -
   * @param {boolean} [arg.isPublic] -
   * @param {boolean} [arg.isDisplay] -
   * @param {string} [arg.typeSlug] -
   * @param {string} [arg.code] -
   * @returns {Promise<CouponsResponse>} - Success response
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
    const { error } = CartValidator.getCoupons().validate(
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
    const { error: warrning } = CartValidator.getCoupons().validate(
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
        message: "Parameter Validation warrnings for getCoupons",
      });
      Logger({ level: "WARN", message: warrning });
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

    const { error: res_error } = CartModel.CouponsResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

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
   * @param {string} arg.companyId - Current company id
   * @param {string} arg.applicationId - Current Application _id
   * @param {number} [arg.pageSize] -
   * @param {boolean} [arg.isArchived] -
   * @param {string} [arg.title] -
   * @param {boolean} [arg.isPublic] -
   * @param {boolean} [arg.isDisplay] -
   * @param {string} [arg.typeSlug] -
   * @param {string} [arg.code] -
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
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] - The unique identifier of the cart.
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<CartItemCountResponse>} - Success response
   * @summary: Count items in the customer's cart
   * @description: Use this API to get the total number of items present in cart.
   */
  async getItemCount({ id, buyNow } = {}) {
    const { error } = CartValidator.getItemCount().validate(
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
    const { error: warrning } = CartValidator.getItemCount().validate(
      {
        id,
        buyNow,
      },
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/basic`,
      query_params,
      undefined
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
   * @returns {Promise<ActivePromosResponse>} - Success response
   * @summary: Fetch all promos that are set as active
   * @description: Use this API to get list of all the active promos/coupons.
   */
  async getPromosCouponConfig({} = {}) {
    const { error } = CartValidator.getPromosCouponConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getPromosCouponConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getPromosCouponConfig",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promo-coupons`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CartModel.ActivePromosResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPromosCouponConfig",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id -
   * @returns {Promise<PromotionUpdateSchema>} - Success response
   * @summary: Get with single promotion details or promotion list
   * @description: Get single promotion details with `id` in path param
   */
  async getPromotionById({ id } = {}) {
    const { error } = CartValidator.getPromotionById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getPromotionById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getPromotionById",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.PromotionUpdateSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPromotionById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.q] -
   * @param {string} [arg.status] -
   * @param {string} [arg.promoGroup] -
   * @param {string} [arg.promotionType] -
   * @param {string} [arg.fpPanel] -
   * @param {string} [arg.promotionId] -
   * @returns {Promise<PromotionsResponse>} - Success response
   * @summary: Get promotion list
   * @description: Get promotion list with pagination
   */
  async getPromotions({
    pageNo,
    pageSize,
    q,
    status,
    promoGroup,
    promotionType,
    fpPanel,
    promotionId,
  } = {}) {
    const { error } = CartValidator.getPromotions().validate(
      {
        pageNo,
        pageSize,
        q,
        status,
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
    const { error: warrning } = CartValidator.getPromotions().validate(
      {
        pageNo,
        pageSize,
        q,
        status,
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
        message: "Parameter Validation warrnings for getPromotions",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["status"] = status;
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
    } = CartModel.PromotionsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPromotions",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Current company id
   * @param {string} arg.applicationId - Current Application _id
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.q] -
   * @param {string} [arg.status] -
   * @param {string} [arg.promoGroup] -
   * @param {string} [arg.promotionType] -
   * @param {string} [arg.fpPanel] -
   * @param {string} [arg.promotionId] -
   * @summary: Get promotion list
   * @description: Get promotion list with pagination
   */
  getPromotionsPaginator({
    companyId,
    applicationId,
    pageSize,
    q,
    status,
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
        status: status,
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
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pickAtStoreUid] -
   * @param {number} [arg.orderingStoreId] -
   * @param {boolean} [arg.i] - This is a boolean value. Select `true` to
   *   retrieve all the items added in the cart.
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
    const { error } = CartValidator.getShipments().validate(
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
    const { error: warrning } = CartValidator.getShipments().validate(
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
        message: "Parameter Validation warrnings for getShipments",
      });
      Logger({ level: "WARN", message: warrning });
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
   * @param {number} arg.storeUid -
   * @returns {Promise<StoreDetailsResponse>} - Success response
   * @summary: Get list of stores for give uids
   * @description: Use this API to get the store details by entering the unique identifier of the pickup stores shown in the response of available-delivery-mode API.
   */
  async getStoreAddressByUid({ storeUid } = {}) {
    const { error } = CartValidator.getStoreAddressByUid().validate(
      {
        storeUid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CartValidator.getStoreAddressByUid().validate(
      {
        storeUid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getStoreAddressByUid",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.StoreDetailsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getStoreAddressByUid",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {boolean} [arg.buyNow] -
   * @param {string} [arg.id] -
   * @param {AddCartRequest} arg.body
   * @returns {Promise<AddCartDetailResponse>} - Success response
   * @summary: Add items to cart
   * @description: Use this API to add items to the cart.
   */
  async platformAddItems({ body, i, b, buyNow, id } = {}) {
    const { error } = CartValidator.platformAddItems().validate(
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
    const { error: warrning } = CartValidator.platformAddItems().validate(
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
        message: "Parameter Validation warrnings for platformAddItems",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.AddCartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for platformAddItems",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {PlatformCartCheckoutDetailRequest} arg.body
   * @returns {Promise<CartCheckoutResponseSchema>} - Success response
   * @summary: Checkout all items in the cart
   * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be generated directly, whereas for other checkout modes, user will be redirected to a payment gateway.
   */
  async platformCheckoutCart({ body, id } = {}) {
    const { error } = CartValidator.platformCheckoutCart().validate(
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
    const { error: warrning } = CartValidator.platformCheckoutCart().validate(
      {
        body,
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for platformCheckoutCart",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.CartCheckoutResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for platformCheckoutCart",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {PlatformCartCheckoutDetailV2Request} arg.body
   * @returns {Promise<CartCheckoutResponseSchema>} - Success response
   * @summary: Checkout all items in the cart
   * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway.
   */
  async platformCheckoutCartV2({ body, id } = {}) {
    const { error } = CartValidator.platformCheckoutCartV2().validate(
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
    const { error: warrning } = CartValidator.platformCheckoutCartV2().validate(
      {
        body,
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for platformCheckoutCartV2",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.CartCheckoutResponseSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for platformCheckoutCartV2",
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
   * @param {UpdateCartRequest} arg.body
   * @returns {Promise<UpdateCartDetailResponse>} - Success response
   * @summary: Update items in the customer 's cart using cart id
   * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   */
  async platformUpdateCart({ body, id, i, b, buyNow } = {}) {
    const { error } = CartValidator.platformUpdateCart().validate(
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
    const { error: warrning } = CartValidator.platformUpdateCart().validate(
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
        message: "Parameter Validation warrnings for platformUpdateCart",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.UpdateCartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for platformUpdateCart",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the selected address
   * @param {string} [arg.userId] - Option to delete address for the provided user_id.
   * @returns {Promise<DeleteAddressResponse>} - Success response
   * @summary: Remove address associated with an account
   * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.
   */
  async removeAddress({ id, userId } = {}) {
    const { error } = CartValidator.removeAddress().validate(
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
    const { error: warrning } = CartValidator.removeAddress().validate(
      {
        id,
        userId,
      },
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
   * @param {string} [arg.uid] -
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Remove Applied Coupon for platform pos user
   * @description: Remove Coupon applied on the cart by passing uid in request body.
   */
  async removeCoupon({ uid, buyNow } = {}) {
    const { error } = CartValidator.removeCoupon().validate(
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
    const { error: warrning } = CartValidator.removeCoupon().validate(
      {
        uid,
        buyNow,
      },
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
   * @param {PlatformSelectCartAddressRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Select an address from available addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `PlatformSelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>
   */
  async selectAddress({ body, cartId, buyNow, i, b } = {}) {
    const { error } = CartValidator.selectAddress().validate(
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
    const { error: warrning } = CartValidator.selectAddress().validate(
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
        message: "Parameter Validation warrnings for selectAddress",
      });
      Logger({ level: "WARN", message: warrning });
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
    const { error: warrning } = CartValidator.selectPaymentMode().validate(
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
        message: "Parameter Validation warrnings for selectPaymentMode",
      });
      Logger({ level: "WARN", message: warrning });
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
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @param {UpdateCartPaymentRequestV2} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Update cart payment
   * @description: Use this API to update cart payment.
   */
  async selectPaymentModeV2({ body, id, buyNow } = {}) {
    const { error } = CartValidator.selectPaymentModeV2().validate(
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
    const { error: warrning } = CartValidator.selectPaymentModeV2().validate(
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
        message: "Parameter Validation warrnings for selectPaymentModeV2",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.CartDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for selectPaymentModeV2",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the selected address
   * @param {PlatformAddress} arg.body
   * @returns {Promise<UpdateAddressResponse>} - Success response
   * @summary: Update address added to an account
   * @description: <p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   */
  async updateAddress({ id, body } = {}) {
    const { error } = CartValidator.updateAddress().validate(
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
    const { error: warrning } = CartValidator.updateAddress().validate(
      {
        id,
        body,
      },
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/address/${id}`,
      query_params,
      body
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
   * @param {string} arg.cartId - Current Cart _id
   * @param {boolean} [arg.b] -
   * @param {UpdateCartRequest} arg.body
   * @returns {Promise<UpdateCartDetailResponse>} - Success response
   * @summary: Update items in the abandoned cart
   * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   */
  async updateCart({ cartId, body, b } = {}) {
    const { error } = CartValidator.updateCart().validate(
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
    const { error: warrning } = CartValidator.updateCart().validate(
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
        message: "Parameter Validation warrnings for updateCart",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["b"] = b;

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/abandoned/carts/${cartId}`,
      query_params,
      body
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
   * @param {PlatformCartMetaRequest} arg.body
   * @returns {Promise<CartMetaResponse>} - Success response
   * @summary: Update the cart meta for platform pos user
   * @description: Use this API to update cart meta like checkout_mode and gstin.
   */
  async updateCartMeta({ body, id, buyNow } = {}) {
    const { error } = CartValidator.updateCartMeta().validate(
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
    const { error: warrning } = CartValidator.updateCartMeta().validate(
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
        message: "Parameter Validation warrnings for updateCartMeta",
      });
      Logger({ level: "WARN", message: warrning });
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
   * @param {string} [arg.id] -
   * @param {UpdateUserCartMapping} arg.body
   * @returns {Promise<UserCartMappingResponse>} - Success response
   * @summary: Update user id for store os customer
   * @description: Update user id for store os customer after creating customer
   */
  async updateCartUser({ body, id } = {}) {
    const { error } = CartValidator.updateCartUser().validate(
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
    const { error: warrning } = CartValidator.updateCartUser().validate(
      {
        body,
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateCartUser",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.UserCartMappingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateCartUser",
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
   * @param {string} [arg.cartId] -
   * @returns {Promise<SharedCartResponse>} - Success response
   * @summary: Merge or replace existing cart
   * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.
   */
  async updateCartWithSharedItems({ token, action, cartId } = {}) {
    const { error } = CartValidator.updateCartWithSharedItems().validate(
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
    } = CartValidator.updateCartWithSharedItems().validate(
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
        message: "Parameter Validation warrnings for updateCartWithSharedItems",
      });
      Logger({ level: "WARN", message: warrning });
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
   * @param {string} arg.id -
   * @param {CouponUpdateSchema} arg.body
   * @returns {Promise<SuccessMessage>} - Success response
   * @summary: Update existing coupon configuration
   * @description: Update coupon with id sent in `id`
   */
  async updateCoupon({ id, body } = {}) {
    const { error } = CartValidator.updateCoupon().validate(
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
    const { error: warrning } = CartValidator.updateCoupon().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateCoupon",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      query_params,
      body
    );

    const { error: res_error } = CartModel.SuccessMessage().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateCoupon",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id -
   * @param {CouponPartialUpdate} arg.body
   * @returns {Promise<SuccessMessage>} - Success response
   * @summary: Update coupon archive state and schedule
   * @description: Update archive/unarchive and change schedule for coupon
   */
  async updateCouponPartially({ id, body } = {}) {
    const { error } = CartValidator.updateCouponPartially().validate(
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
    const { error: warrning } = CartValidator.updateCouponPartially().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateCouponPartially",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      query_params,
      body
    );

    const { error: res_error } = CartModel.SuccessMessage().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateCouponPartially",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id -
   * @param {PromotionUpdateSchema} arg.body
   * @returns {Promise<PromotionUpdateSchema>} - Success response
   * @summary: Update existing promotion configuration
   * @description: Update promotion with id sent in `id`
   */
  async updatePromotion({ id, body } = {}) {
    const { error } = CartValidator.updatePromotion().validate(
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
    const { error: warrning } = CartValidator.updatePromotion().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updatePromotion",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.PromotionUpdateSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updatePromotion",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id -
   * @param {PromotionPartialUpdate} arg.body
   * @returns {Promise<SuccessMessage>} - Success response
   * @summary: Update promotion publish state and schedule
   * @description: Update publish/unpublish and change schedule for promotion
   */
  async updatePromotionPartially({ id, body } = {}) {
    const { error } = CartValidator.updatePromotionPartially().validate(
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
    } = CartValidator.updatePromotionPartially().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updatePromotionPartially",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promotion/${id}`,
      query_params,
      body
    );

    const { error: res_error } = CartModel.SuccessMessage().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updatePromotionPartially",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] - This is a boolean value. Select `true` to
   *   retrieve all the items added in the cart.
   * @param {boolean} [arg.p] - This is a boolean value. Select `true` for
   *   getting a payment option in response.
   * @param {string} [arg.id] - The unique identifier of the cart
   * @param {string} [arg.addressId] - ID allotted to an address
   * @param {string} [arg.areaCode] - The PIN Code of the destination address,
   *   e.g. 400059
   * @param {string} [arg.orderType] - The order type of shipment HomeDelivery
   *   - If the customer wants the order home-delivered PickAtStore - If the
   *   customer wants the handover of an order at the store itself.
   * @param {UpdateCartShipmentRequest} arg.body
   * @returns {Promise<CartShipmentsResponse>} - Success response
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
    const { error } = CartValidator.updateShipments().validate(
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
    const { error: warrning } = CartValidator.updateShipments().validate(
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
        message: "Parameter Validation warrnings for updateShipments",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = CartModel.CartShipmentsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateShipments",
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
   * @returns {Promise<PaymentCouponValidateSchema>} - Success response
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/validate/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CartModel.PaymentCouponValidateSchema().validate(response, {
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
