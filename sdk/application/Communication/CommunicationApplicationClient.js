const ApplicationAPIClient = require("../ApplicationAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const CommunicationApplicationValidator = require("./CommunicationApplicationValidator");
const CommunicationApplicationModel = require("./CommunicationApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Communication {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      createAppPushtoken: "/service/application/communication/v1.0/tokens",
      getCommunicationConsent:
        "/service/application/communication/v1.0/consent",
      getCurrentCommunicationConsent:
        "/service/application/communication/v1.0/current/communication/consent",
      getOtpConfiguration:
        "/service/application/communication/v1.0/otp/otp-configuration",
      upsertAppPushtoken: "/service/application/communication/v1.0/pn-token",
      upsertCommunicationConsent:
        "/service/application/communication/v1.0/consent",
      upsertCurrentCommunicationConsent:
        "/service/application/communication/v1.0/current/communication/consent",
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
   * @param {CommunicationApplicationValidator.CreateAppPushtokenParam} arg -
   *   Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CommunicationApplicationModel.PushtokenRes>} - Success response
   * @name createAppPushtoken
   * @summary: Create app push token.
   * @description: Create the push token of the user.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/createAppPushtoken/).
   */
  async createAppPushtoken(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationApplicationValidator.createAppPushtoken().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationApplicationValidator.createAppPushtoken().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Communication > createAppPushtoken \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createAppPushtoken"],
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
    } = CommunicationApplicationModel.PushtokenRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Communication > createAppPushtoken \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationApplicationValidator.GetCommunicationConsentParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CommunicationApplicationModel.CommunicationConsent>} -
   *   Success response
   * @name getCommunicationConsent
   * @summary: Retrieves communication consent status.
   * @description: Retrieve the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/getCommunicationConsent/).
   */
  async getCommunicationConsent(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationApplicationValidator.getCommunicationConsent().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationApplicationValidator.getCommunicationConsent().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Communication > getCommunicationConsent \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationApplicationModel.CommunicationConsent().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Communication > getCommunicationConsent \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationApplicationValidator.GetCurrentCommunicationConsentParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CommunicationApplicationModel.CommunicationConsent>} -
   *   Success response
   * @name getCurrentCommunicationConsent
   * @summary: Retrieves communication consent status.
   * @description: Retrieve the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/getCurrentCommunicationConsent/).
   */
  async getCurrentCommunicationConsent(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationApplicationValidator.getCurrentCommunicationConsent().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationApplicationValidator.getCurrentCommunicationConsent().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Communication > getCurrentCommunicationConsent \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCurrentCommunicationConsent"],
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

    const {
      error: res_error,
    } = CommunicationApplicationModel.CommunicationConsent().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Communication > getCurrentCommunicationConsent \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationApplicationValidator.GetOtpConfigurationParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CommunicationApplicationModel.OtpConfiguration>} -
   *   Success response
   * @name getOtpConfiguration
   * @summary: Get otp-configuration, if not present in db then return default settings
   * @description: Get otp-configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/getOtpConfiguration/).
   */
  async getOtpConfiguration(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationApplicationValidator.getOtpConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationApplicationValidator.getOtpConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Communication > getOtpConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOtpConfiguration"],
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

    const {
      error: res_error,
    } = CommunicationApplicationModel.OtpConfiguration().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Communication > getOtpConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationApplicationValidator.UpsertAppPushtokenParam} arg -
   *   Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CommunicationApplicationModel.PushtokenRes>} - Success response
   * @name upsertAppPushtoken
   * @summary: Updates or adds app push token.
   * @description: Update the push token of the user.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/upsertAppPushtoken/).
   */
  async upsertAppPushtoken(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationApplicationValidator.upsertAppPushtoken().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationApplicationValidator.upsertAppPushtoken().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Communication > upsertAppPushtoken \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationApplicationModel.PushtokenRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Communication > upsertAppPushtoken \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationApplicationValidator.UpsertCommunicationConsentParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CommunicationApplicationModel.CommunicationConsentRes>}
   *   - Success response
   *
   * @name upsertCommunicationConsent
   * @summary: Updates or inserts consent settings.
   * @description: Update and insert the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/upsertCommunicationConsent/).
   */
  async upsertCommunicationConsent(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationApplicationValidator.upsertCommunicationConsent().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationApplicationValidator.upsertCommunicationConsent().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Communication > upsertCommunicationConsent \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationApplicationModel.CommunicationConsentRes().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Communication > upsertCommunicationConsent \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationApplicationValidator.UpsertCurrentCommunicationConsentParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CommunicationApplicationModel.CommunicationConsentRes>}
   *   - Success response
   *
   * @name upsertCurrentCommunicationConsent
   * @summary: Updates or inserts consent settings.
   * @description: Update and insert the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/upsertCurrentCommunicationConsent/).
   */
  async upsertCurrentCommunicationConsent(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationApplicationValidator.upsertCurrentCommunicationConsent().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationApplicationValidator.upsertCurrentCommunicationConsent().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Communication > upsertCurrentCommunicationConsent \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["upsertCurrentCommunicationConsent"],
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
    } = CommunicationApplicationModel.CommunicationConsentRes().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Communication > upsertCurrentCommunicationConsent \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Communication;
