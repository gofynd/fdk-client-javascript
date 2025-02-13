const PartnerAPIClient = require("../PartnerAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const PaymentPartnerValidator = require("./PaymentPartnerValidator");
const PaymentPartnerModel = require("./PaymentPartnerModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Payment {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {PaymentPartnerValidator.GetPaymentconfigParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<PaymentPartnerModel.PaymentConfigResponse>} - Success response
   * @name getPaymentconfig
   * @summary: Fetch payment configs.
   * @description: Get partner Payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/getPaymentconfig/).
   */
  async getPaymentconfig(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentPartnerValidator.getPaymentconfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPartnerValidator.getPaymentconfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Payment > getPaymentconfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/payment/v1.0/organization/${this.config.organizationId}/payment/methods/configs`,
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
    } = PaymentPartnerModel.PaymentConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Payment > getPaymentconfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPartnerValidator.GetPayoutParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<PaymentPartnerModel.PayoutResponse>} - Success response
   * @name getPayout
   * @summary: Fetch payment gatewats.
   * @description: Get partner Payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/getPayout/).
   */
  async getPayout(
    { uniqueExternalId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentPartnerValidator.getPayout().validate(
      {
        uniqueExternalId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentPartnerValidator.getPayout().validate(
      {
        uniqueExternalId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Payment > getPayout \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["unique_external_id"] = uniqueExternalId;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/payment/v1.0/organization/${this.config.organizationId}/payouts`,
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
    } = PaymentPartnerModel.PayoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Payment > getPayout \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPartnerValidator.PostPayoutParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<PaymentPartnerModel.PostPayoutResponse>} - Success response
   * @name postPayout
   * @summary: save payout details.
   * @description: save payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/postPayout/).
   */
  async postPayout(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentPartnerValidator.postPayout().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentPartnerValidator.postPayout().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Payment > postPayout \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/payment/v1.0/organization/${this.config.organizationId}/payouts`,
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
    } = PaymentPartnerModel.PostPayoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Payment > postPayout \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPartnerValidator.UpdatePayoutParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<PaymentPartnerModel.PostPayoutResponse>} - Success response
   * @name updatePayout
   * @summary: save payout details.
   * @description: save payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/updatePayout/).
   */
  async updatePayout(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentPartnerValidator.updatePayout().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentPartnerValidator.updatePayout().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Payment > updatePayout \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "patch",
      `/service/partner/payment/v1.0/organization/${this.config.organizationId}/payouts`,
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
    } = PaymentPartnerModel.PostPayoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Payment > updatePayout \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPartnerValidator.PutPayoutParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<PaymentPartnerModel.PostPayoutResponse>} - Success response
   * @name putPayout
   * @summary: update payout details.
   * @description: update payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/putPayout/).
   */
  async putPayout(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentPartnerValidator.putPayout().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentPartnerValidator.putPayout().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Payment > putPayout \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/payment/v1.0/organization/${this.config.organizationId}/payouts`,
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
    } = PaymentPartnerModel.PostPayoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Payment > putPayout \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPartnerValidator.DeletePayoutParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<PaymentPartnerModel.PayoutResponse>} - Success response
   * @name deletePayout
   * @summary: Fetch payment gatewats.
   * @description: Get partner Payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/deletePayout/).
   */
  async deletePayout(
    { uniqueExternalId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentPartnerValidator.deletePayout().validate(
      {
        uniqueExternalId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentPartnerValidator.deletePayout().validate(
      {
        uniqueExternalId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Payment > deletePayout \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["unique_external_id"] = uniqueExternalId;

    const response = await PartnerAPIClient.execute(
      this.config,
      "delete",
      `/service/partner/payment/v1.0/organization/${this.config.organizationId}/payouts`,
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
    } = PaymentPartnerModel.PayoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Payment > deletePayout \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPartnerValidator.GetPayoutsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<PaymentPartnerModel.PayoutResponse>} - Success response
   * @name getPayouts
   * @summary: Fetch payment gatewats.
   * @description: Get partner Payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/getPayouts/).
   */
  async getPayouts(
    { uniqueTransferNo, uniqueExternalId, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentPartnerValidator.getPayouts().validate(
      {
        uniqueTransferNo,
        uniqueExternalId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentPartnerValidator.getPayouts().validate(
      {
        uniqueTransferNo,
        uniqueExternalId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Payment > getPayouts \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["unique_external_id"] = uniqueExternalId;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/payment/v1.0/organization/${this.config.organizationId}/payouts/${uniqueTransferNo}`,
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
    } = PaymentPartnerModel.PayoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Payment > getPayouts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPartnerValidator.PostPayoutsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<PaymentPartnerModel.PostPayoutResponse>} - Success response
   * @name postPayouts
   * @summary: save payout details.
   * @description: save payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/postPayouts/).
   */
  async postPayouts(
    { uniqueTransferNo, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentPartnerValidator.postPayouts().validate(
      {
        uniqueTransferNo,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentPartnerValidator.postPayouts().validate(
      {
        uniqueTransferNo,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Payment > postPayouts \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/payment/v1.0/organization/${this.config.organizationId}/payouts/${uniqueTransferNo}`,
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
    } = PaymentPartnerModel.PostPayoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Payment > postPayouts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPartnerValidator.UpdatePayoutsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<PaymentPartnerModel.PostPayoutResponse>} - Success response
   * @name updatePayouts
   * @summary: save payout details.
   * @description: save payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/updatePayouts/).
   */
  async updatePayouts(
    { uniqueTransferNo, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentPartnerValidator.updatePayouts().validate(
      {
        uniqueTransferNo,
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
    } = PaymentPartnerValidator.updatePayouts().validate(
      {
        uniqueTransferNo,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Payment > updatePayouts \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "patch",
      `/service/partner/payment/v1.0/organization/${this.config.organizationId}/payouts/${uniqueTransferNo}`,
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
    } = PaymentPartnerModel.PostPayoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Payment > updatePayouts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPartnerValidator.PutPayoutsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<PaymentPartnerModel.PostPayoutResponse>} - Success response
   * @name putPayouts
   * @summary: update payout details.
   * @description: update payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/putPayouts/).
   */
  async putPayouts(
    { uniqueTransferNo, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentPartnerValidator.putPayouts().validate(
      {
        uniqueTransferNo,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentPartnerValidator.putPayouts().validate(
      {
        uniqueTransferNo,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Payment > putPayouts \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/payment/v1.0/organization/${this.config.organizationId}/payouts/${uniqueTransferNo}`,
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
    } = PaymentPartnerModel.PostPayoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Payment > putPayouts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPartnerValidator.DeletePayoutsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<PaymentPartnerModel.PayoutResponse>} - Success response
   * @name deletePayouts
   * @summary: Fetch payment gatewats.
   * @description: Get partner Payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/deletePayouts/).
   */
  async deletePayouts(
    { uniqueTransferNo, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentPartnerValidator.deletePayouts().validate(
      {
        uniqueTransferNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPartnerValidator.deletePayouts().validate(
      {
        uniqueTransferNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Payment > deletePayouts \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "delete",
      `/service/partner/payment/v1.0/organization/${this.config.organizationId}/payouts/${uniqueTransferNo}`,
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
    } = PaymentPartnerModel.PayoutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Payment > deletePayouts \n ${res_error}`,
        });
      }
    }

    return response;
  }
}
module.exports = Payment;
