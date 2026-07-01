const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const ApplicationAPIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { validateRequiredParams } = require("../../common/Validator");

class Communication {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getCommunicationConsent:
        "/service/application/communication/v1.0/consent",
      upsertAppPushtoken: "/service/application/communication/v1.0/pn-token",
      upsertCommunicationConsent:
        "/service/application/communication/v1.0/consent",
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
   * @returns {Promise<CommunicationConsent>} - Success response
   * @name getCommunicationConsent
   * @summary: Retrieve consent status
   * @description: Get the consent provided by the user for receiving communication. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/communication/getCommunicationConsent/).
   */
  async getCommunicationConsent(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCommunicationConsent"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PushtokenRes>} - Success response
   * @name upsertAppPushtoken
   * @summary: Update or adds app push token
   * @description: Update or inserts the push token of the user. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/communication/upsertAppPushtoken/).
   */
  async upsertAppPushtoken(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["upsertAppPushtoken"],
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
   * @returns {Promise<CommunicationConsentRes>} - Success response
   * @name upsertCommunicationConsent
   * @summary: Update or adds consent settings
   * @description: Update or insert the consent provided by the user for receiving communication messages. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/communication/upsertCommunicationConsent/).
   */
  async upsertCommunicationConsent(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["upsertCommunicationConsent"],
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

module.exports = Communication;
