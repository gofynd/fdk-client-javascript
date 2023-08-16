const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const CommunicationValidator = require("./CommunicationApplicationValidator");
const CommunicationModel = require("./CommunicationApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

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
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CommunicationConsent>} - Success response
   * @summary: Get communication consent
   * @description: Use this API to retrieve the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.
   */
  async getCommunicationConsent({ headers } = { headers: false }) {
    const { error } = CommunicationValidator.getCommunicationConsent().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationValidator.getCommunicationConsent().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCommunicationConsent",
      });
      Logger({ level: "WARN", message: warrning });
    }

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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationModel.CommunicationConsent().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCommunicationConsent",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PushtokenReq} arg.body
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PushtokenRes>} - Success response
   * @summary: Upsert push token of a user
   * @description: Use this API to update and insert the push token of the user.
   */
  async upsertAppPushtoken({ body } = {}, { headers } = { headers: false }) {
    const { error } = CommunicationValidator.upsertAppPushtoken().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationValidator.upsertAppPushtoken().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for upsertAppPushtoken",
      });
      Logger({ level: "WARN", message: warrning });
    }

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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationModel.PushtokenRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for upsertAppPushtoken",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CommunicationConsentReq} arg.body
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CommunicationConsentRes>} - Success response
   * @summary: Upsert communication consent
   * @description: Use this API to update and insert the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.
   */
  async upsertCommunicationConsent(
    { body } = {},
    { headers } = { headers: false }
  ) {
    const {
      error,
    } = CommunicationValidator.upsertCommunicationConsent().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationValidator.upsertCommunicationConsent().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for upsertCommunicationConsent",
      });
      Logger({ level: "WARN", message: warrning });
    }

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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationModel.CommunicationConsentRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for upsertCommunicationConsent",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Communication;
