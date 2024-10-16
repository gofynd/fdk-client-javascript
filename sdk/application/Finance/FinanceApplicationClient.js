const ApplicationAPIClient = require("../ApplicationAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const FinanceApplicationValidator = require("./FinanceApplicationValidator");
const FinanceApplicationModel = require("./FinanceApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Finance {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      customerCreditBalance:
        "/service/application/finance/v1.0/customer-credit-balance",
      lockUnlockCreditNote:
        "/service/application/finance/v1.0/lock-unlock-credit-note",
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
   * @param {FinanceApplicationValidator.CustomerCreditBalanceParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<FinanceApplicationModel.CustomerCreditBalanceResponseSchema>}
   *   - Success response
   *
   * @name customerCreditBalance
   * @summary: This API will provide customer's credit balance against phone number or email and seller*affiliate id
   * @description: This API will provide customer's credit balance against phone number or email and seller*affiliate id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/finance/customerCreditBalance/).
   */
  async customerCreditBalance(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FinanceApplicationValidator.customerCreditBalance().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FinanceApplicationValidator.customerCreditBalance().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Finance > customerCreditBalance \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["customerCreditBalance"],
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
    } = FinanceApplicationModel.CustomerCreditBalanceResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Finance > customerCreditBalance \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinanceApplicationValidator.LockUnlockCreditNoteParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<FinanceApplicationModel.LockUnlockResponseSchema>} -
   *   Success response
   * @name lockUnlockCreditNote
   * @summary: Lock or Unlock requested credit note.
   * @description: Used to lock or unlock requested credit note. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/finance/lockUnlockCreditNote/).
   */
  async lockUnlockCreditNote(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FinanceApplicationValidator.lockUnlockCreditNote().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FinanceApplicationValidator.lockUnlockCreditNote().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Finance > lockUnlockCreditNote \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["lockUnlockCreditNote"],
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
    } = FinanceApplicationModel.LockUnlockResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Finance > lockUnlockCreditNote \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Finance;
