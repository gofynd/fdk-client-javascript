const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const PaymentValidator = require("./PaymentPlatformApplicationValidator");

class Payment {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get All Brand Payment Gateway Config Secret
   * @description: Get All Brand Payment Gateway Config Secret
   */
  getBrandPaymentGatewayConfig({} = {}) {
    const { error } = PaymentValidator.getBrandPaymentGatewayConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentValidator.getBrandPaymentGatewayConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for getBrandPaymentGatewayConfig"
      );
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentGatewayConfigRequest} arg.body
   * @summary: Save Config Secret For Brand Payment Gateway
   * @description: Save Config Secret For Brand Payment Gateway
   */
  saveBrandPaymentGatewayConfig({ body } = {}) {
    const { error } = PaymentValidator.saveBrandPaymentGatewayConfig().validate(
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
    } = PaymentValidator.saveBrandPaymentGatewayConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for saveBrandPaymentGatewayConfig"
      );
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentGatewayConfigRequest} arg.body
   * @summary: Save Config Secret For Brand Payment Gateway
   * @description: Save Config Secret For Brand Payment Gateway
   */
  updateBrandPaymentGatewayConfig({ body } = {}) {
    const {
      error,
    } = PaymentValidator.updateBrandPaymentGatewayConfig().validate(
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
    } = PaymentValidator.updateBrandPaymentGatewayConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for updateBrandPaymentGatewayConfig"
      );
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} arg.refresh -
   * @param {string} arg.requestType -
   * @summary: Get All Valid Payment Options
   * @description: Use this API to get Get All Valid Payment Options for making payment
   */
  getPaymentModeRoutes({ refresh, requestType } = {}) {
    const { error } = PaymentValidator.getPaymentModeRoutes().validate(
      {
        refresh,
        requestType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentValidator.getPaymentModeRoutes().validate(
      {
        refresh,
        requestType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getPaymentModeRoutes");
      console.log(warrning);
    }

    const query_params = {};
    query_params["refresh"] = refresh;
    query_params["request_type"] = requestType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId -
   * @param {string} [arg.requestHash] -
   * @summary: Get bank details
   * @description: Use this API to get saved bank details for returned/cancelled order using order id.
   */
  getBankAccountDetailsOpenAPI({ orderId, requestHash } = {}) {
    const { error } = PaymentValidator.getBankAccountDetailsOpenAPI().validate(
      {
        orderId,
        requestHash,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentValidator.getBankAccountDetailsOpenAPI().validate(
      {
        orderId,
        requestHash,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for getBankAccountDetailsOpenAPI"
      );
      console.log(warrning);
    }

    const query_params = {};
    query_params["order_id"] = orderId;
    query_params["request_hash"] = requestHash;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund/account`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddBeneficiaryDetailsOTPRequest} arg.body
   * @summary: Save bank details for cancelled/returned order
   * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
   */
  addRefundBankAccountUsingOTP({ body } = {}) {
    const { error } = PaymentValidator.addRefundBankAccountUsingOTP().validate(
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
    } = PaymentValidator.addRefundBankAccountUsingOTP().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for addRefundBankAccountUsingOTP"
      );
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund/account`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId -
   * @summary: List Order Beneficiary
   * @description: Get all active  beneficiary details added by the user for refund
   */
  getUserOrderBeneficiaries({ orderId } = {}) {
    const { error } = PaymentValidator.getUserOrderBeneficiaries().validate(
      {
        orderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentValidator.getUserOrderBeneficiaries().validate(
      {
        orderId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for getUserOrderBeneficiaries"
      );
      console.log(warrning);
    }

    const query_params = {};
    query_params["order_id"] = orderId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund/accounts/order`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId -
   * @summary: List User Beneficiary
   * @description: Get all active  beneficiary details added by the user for refund
   */
  getUserBeneficiaries({ orderId } = {}) {
    const { error } = PaymentValidator.getUserBeneficiaries().validate(
      {
        orderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentValidator.getUserBeneficiaries().validate(
      {
        orderId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getUserBeneficiaries");
      console.log(warrning);
    }

    const query_params = {};
    query_params["order_id"] = orderId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund/accounts/user`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentConfirmationRequest} arg.body
   * @summary: Confirm payment after successful payment from payment gateway
   * @description: Use this API to confirm payment after payment gateway accepted payment.
   */
  confirmPayment({ body } = {}) {
    const { error } = PaymentValidator.confirmPayment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentValidator.confirmPayment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for confirmPayment");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/confirm`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: API to fetch the payment options of the merchant for paltform
   * @description: Use this API to fetch the payment options.
   */
  getPlatformPaymentConfig({} = {}) {
    const { error } = PaymentValidator.getPlatformPaymentConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentValidator.getPlatformPaymentConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for getPlatformPaymentConfig"
      );
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdatePlatformPaymentConfig} arg.body
   * @summary: API to update the payment options of the merchant for paltform
   * @description: Use this API to update the payment options.
   */
  updatePlatformPaymentConfig({ body } = {}) {
    const { error } = PaymentValidator.updatePlatformPaymentConfig().validate(
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
    } = PaymentValidator.updatePlatformPaymentConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for updatePlatformPaymentConfig"
      );
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.merchantUserId -
   * @param {string} arg.mobileNo -
   * @summary: Get COD limit for user
   * @description: Use this API to get user cod limit and reamining limit for the payment
   */
  getUserCODlimitRoutes({ merchantUserId, mobileNo } = {}) {
    const { error } = PaymentValidator.getUserCODlimitRoutes().validate(
      {
        merchantUserId,
        mobileNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentValidator.getUserCODlimitRoutes().validate(
      {
        merchantUserId,
        mobileNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getUserCODlimitRoutes");
      console.log(warrning);
    }

    const query_params = {};
    query_params["merchant_user_id"] = merchantUserId;
    query_params["mobile_no"] = mobileNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/user-cod`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SetCODForUserRequest} arg.body
   * @summary: Set COD option for user for payment
   * @description: Use this API to set cod option as true or false for the payment
   */
  setUserCODlimitRoutes({ body } = {}) {
    const { error } = PaymentValidator.setUserCODlimitRoutes().validate(
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
    } = PaymentValidator.setUserCODlimitRoutes().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for setUserCODlimitRoutes");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/user-cod`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: get some information about the store and edc device
   * @description: Use this API to get info of devices linked to a particular app.
   */
  edcAggregatorsAndModelList({} = {}) {
    const { error } = PaymentValidator.edcAggregatorsAndModelList().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentValidator.edcAggregatorsAndModelList().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for edcAggregatorsAndModelList"
      );
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/edc-aggregator-list`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: get some information about the store and edc device
   * @description: Use this API to get info of devices linked to a particular app.
   */
  edcDeviceStats({} = {}) {
    const { error } = PaymentValidator.edcDeviceStats().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentValidator.edcDeviceStats().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for edcDeviceStats");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/edc-device-stats`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.terminalUniqueIdentifier - Terminal unique identifier
   * @param {EdcAddRequest} arg.body
   * @summary: map new edc device to the terminal
   * @description: Use this API to map new edc device to the terminal
   */
  updateEdcDevice({ terminalUniqueIdentifier, body } = {}) {
    const { error } = PaymentValidator.updateEdcDevice().validate(
      {
        terminalUniqueIdentifier,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentValidator.updateEdcDevice().validate(
      {
        terminalUniqueIdentifier,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for updateEdcDevice");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/edc-device`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.terminalUniqueIdentifier - Terminal unique identifier
   * @summary: get details of a single edc device
   * @description: Use this API to get details of a single edc device
   */
  getEdcDevice({ terminalUniqueIdentifier } = {}) {
    const { error } = PaymentValidator.getEdcDevice().validate(
      {
        terminalUniqueIdentifier,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentValidator.getEdcDevice().validate(
      {
        terminalUniqueIdentifier,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getEdcDevice");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/edc-device/${terminalUniqueIdentifier}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.terminalUniqueIdentifier - Terminal unique identifier
   * @param {EdcUpdateRequest} arg.body
   * @summary: Update store id and device tag of edc device
   * @description: Use this API to Update store id and device tag of edc device
   */
  addEdcDevice({ terminalUniqueIdentifier, body } = {}) {
    const { error } = PaymentValidator.addEdcDevice().validate(
      {
        terminalUniqueIdentifier,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentValidator.addEdcDevice().validate(
      {
        terminalUniqueIdentifier,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for addEdcDevice");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/edc-device/${terminalUniqueIdentifier}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {boolean} [arg.isActive] -
   * @param {number} [arg.storeId] -
   * @param {string} [arg.deviceTag] -
   * @summary: get all the device list of an app
   * @description: Use this API to get all devices linked to a particular app.
   */
  edcDeviceList({ pageNo, pageSize, isActive, storeId, deviceTag } = {}) {
    const { error } = PaymentValidator.edcDeviceList().validate(
      {
        pageNo,
        pageSize,
        isActive,
        storeId,
        deviceTag,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentValidator.edcDeviceList().validate(
      {
        pageNo,
        pageSize,
        isActive,
        storeId,
        deviceTag,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for edcDeviceList");
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["is_active"] = isActive;
    query_params["store_id"] = storeId;
    query_params["device_tag"] = deviceTag;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/edc-device-list`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.amount - Payable amount.
   * @param {string} arg.cartId - Identifier of the cart.
   * @param {string} arg.pincode - The PIN Code of the destination address, e.g. 400059
   * @param {string} arg.checkoutMode - Option to checkout for self or for others.
   * @param {boolean} [arg.refresh] - This is a boolean value. Select `true`
   *   to remove temporary cache files on payment gateway and replace with the
   *   latest one.
   * @param {string} [arg.cardReference] - Card reference id of user's debit
   *   or credit card.
   * @param {string} arg.orderType - The order type of shipment * HomeDelivery
   *   - If the customer wants the order home-delivered * PickAtStore - If the
   *   customer wants the handover of an order at the store itself.
   * @param {string} [arg.userDetails] - URIencoded JSON containing details of
   *   an anonymous user.
   * @summary: Get All Valid Payment Options
   * @description: Use this API to get Get All Valid Payment Options for making payment
   */
  getPosPaymentModeRoutes({
    amount,
    cartId,
    pincode,
    checkoutMode,
    orderType,
    refresh,
    cardReference,
    userDetails,
  } = {}) {
    const { error } = PaymentValidator.getPosPaymentModeRoutes().validate(
      {
        amount,
        cartId,
        pincode,
        checkoutMode,
        orderType,
        refresh,
        cardReference,
        userDetails,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentValidator.getPosPaymentModeRoutes().validate(
      {
        amount,
        cartId,
        pincode,
        checkoutMode,
        orderType,
        refresh,
        cardReference,
        userDetails,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getPosPaymentModeRoutes");
      console.log(warrning);
    }

    const query_params = {};
    query_params["amount"] = amount;
    query_params["cart_id"] = cartId;
    query_params["pincode"] = pincode;
    query_params["checkout_mode"] = checkoutMode;
    query_params["refresh"] = refresh;
    query_params["card_reference"] = cardReference;
    query_params["order_type"] = orderType;
    query_params["user_details"] = userDetails;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/pos`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentInitializationRequest} arg.body
   * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
   * @description: PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
   */
  initialisePayment({ body } = {}) {
    const { error } = PaymentValidator.initialisePayment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentValidator.initialisePayment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for initialisePayment");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/request`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentStatusUpdateRequest} arg.body
   * @summary: Performs continuous polling to check status of payment on the server
   * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
   */
  checkAndUpdatePaymentStatus({ body } = {}) {
    const { error } = PaymentValidator.checkAndUpdatePaymentStatus().validate(
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
    } = PaymentValidator.checkAndUpdatePaymentStatus().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for checkAndUpdatePaymentStatus"
      );
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/confirm/polling`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ResendOrCancelPaymentRequest} arg.body
   * @summary: API to resend and cancel a payment link which was already generated.
   * @description: Use this API to perform resend or cancel a payment link based on request payload.
   */
  resendOrCancelPayment({ body } = {}) {
    const { error } = PaymentValidator.resendOrCancelPayment().validate(
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
    } = PaymentValidator.resendOrCancelPayment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for resendOrCancelPayment");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/cancel`,
      query_params,
      body
    );
  }
}
module.exports = Payment;
