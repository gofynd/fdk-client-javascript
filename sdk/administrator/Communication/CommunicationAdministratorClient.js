const AdministratorAPIClient = require("../AdministratorAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const CommunicationValidator = require("./CommunicationAdministratorValidator");
const CommunicationModel = require("./CommunicationAdministratorModel");
const { Logger } = require("./../../common/Logger");
class Communication {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      sendSellerCommunicationAsynchronously:
        "/service/___/administrator/communication/v1.0/platform/send-comms/send-async",
      sendSellerCommunicationSynchronously:
        "/service/___/administrator/communication/v1.0/platform/send-comms/send-instant",
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
   * @param {Object} arg - Arg object.
   * @param {EngineRequest} arg.body
   * @returns {Promise<EngineResponse>} - Success response
   * @summary: Send email or sms asynchronously
   * @description: Send email or sms asynchronously
   */
  async sendSellerCommunicationAsynchronously({ body } = {}) {
    const {
      error,
    } = CommunicationValidator.sendSellerCommunicationAsynchronously().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationValidator.sendSellerCommunicationAsynchronously().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for sendSellerCommunicationAsynchronously",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await AdministratorAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendSellerCommunicationAsynchronously"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = CommunicationModel.EngineResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for sendSellerCommunicationAsynchronously",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EngineRequest} arg.body
   * @returns {Promise<EngineResponse>} - Success response
   * @summary: Send email or sms synchronously
   * @description: Send email or sms synchronously
   */
  async sendSellerCommunicationSynchronously({ body } = {}) {
    const {
      error,
    } = CommunicationValidator.sendSellerCommunicationSynchronously().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationValidator.sendSellerCommunicationSynchronously().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for sendSellerCommunicationSynchronously",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await AdministratorAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendSellerCommunicationSynchronously"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = CommunicationModel.EngineResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for sendSellerCommunicationSynchronously",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}
module.exports = Communication;
