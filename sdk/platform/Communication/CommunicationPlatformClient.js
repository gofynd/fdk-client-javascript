const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const CommunicationPlatformValidator = require("./CommunicationPlatformValidator");
const CommunicationPlatformModel = require("./CommunicationPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Communication {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {CommunicationPlatformValidator.getSystemNotifications} arg - Arg object
   * @returns {Promise<CommunicationPlatformModel.SystemNotifications>} -
   *   Success response
   * @name getSystemNotifications
   * @summary: Get system notifications
   * @description: Get system notifications
   */
  async getSystemNotifications({ pageNo, pageSize } = {}) {
    const {
      error,
    } = CommunicationPlatformValidator.getSystemNotifications().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformValidator.getSystemNotifications().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getSystemNotifications \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/notification/system-notifications/`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.SystemNotifications().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getSystemNotifications \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Communication;
