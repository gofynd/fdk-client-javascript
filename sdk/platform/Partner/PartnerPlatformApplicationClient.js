const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const PartnerPlatformApplicationValidator = require("./PartnerPlatformApplicationValidator");
const PartnerPlatformModel = require("./PartnerPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Partner {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {PartnerPlatformApplicationValidator.AddProxyPathParam} arg - Arg object
   * @returns {Promise<PartnerPlatformModel.AddProxyResponse>} - Success response
   * @name addProxyPath
   * @summary: Create proxy URL for the external URL
   * @description: Use this API to generate proxy URL for the external URL
   */
  async addProxyPath({ extensionId, body } = {}) {
    const {
      error,
    } = PartnerPlatformApplicationValidator.addProxyPath().validate(
      {
        extensionId,
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
    } = PartnerPlatformApplicationValidator.addProxyPath().validate(
      {
        extensionId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Partner > addProxyPath \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/application/${this.applicationId}/proxy/${extensionId}`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = PartnerPlatformModel.AddProxyResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Partner > addProxyPath \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PartnerPlatformApplicationValidator.RemoveProxyPathParam} arg - Arg object
   * @returns {Promise<PartnerPlatformModel.RemoveProxyResponse>} - Success response
   * @name removeProxyPath
   * @summary: Remove proxy URL for the external URL
   * @description: Use this API to remove the proxy URL which is already generated for the external URL
   */
  async removeProxyPath({ extensionId, attachedPath } = {}) {
    const {
      error,
    } = PartnerPlatformApplicationValidator.removeProxyPath().validate(
      {
        extensionId,
        attachedPath,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PartnerPlatformApplicationValidator.removeProxyPath().validate(
      {
        extensionId,
        attachedPath,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Partner > removeProxyPath \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/application/${this.applicationId}/proxy/${extensionId}/${attachedPath}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = PartnerPlatformModel.RemoveProxyResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Partner > removeProxyPath \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Partner;
