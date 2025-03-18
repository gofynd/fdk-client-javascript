const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const ApplicationAPIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { validateRequiredParams } = require("../../common/Validator");

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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CustomerCreditBalanceResponseSchema>} - Success response
   * @name customerCreditBalance
   * @summary: This API will provide customer's credit balance against phone number or email and seller*affiliate id
   * @description: This API will provide customer's credit balance against phone number or email and seller*affiliate id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/finance/customerCreditBalance/).
   */
  async customerCreditBalance(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LockUnlockResponseSchema>} - Success response
   * @name lockUnlockCreditNote
   * @summary: Lock or Unlock requested credit note.
   * @description: Used to lock or unlock requested credit note. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/finance/lockUnlockCreditNote/).
   */
  async lockUnlockCreditNote(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }
}

module.exports = Finance;
