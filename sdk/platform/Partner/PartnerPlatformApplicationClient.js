const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const PartnerValidator = require("./PartnerPlatformApplicationValidator");
const PartnerModel = require("./PartnerPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Partner {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.extensionId - Extension id for which proxy URL will
   *   be generated
   * @param {AddProxyReq} arg.body
   * @returns {Promise<AddProxyResponse>} - Success response
   * @summary: Create proxy URL for the external URL
   * @description: Use this API to generate proxy URL for the external URL
   */
  async addProxyPath({ extensionId, body } = {}) {
    const { error } = PartnerValidator.addProxyPath().validate(
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
    const { error: warrning } = PartnerValidator.addProxyPath().validate(
      {
        extensionId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for addProxyPath",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = PartnerModel.AddProxyResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for addProxyPath",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.extensionId - Extension id for which proxy URL needs
   *   to be removed
   * @param {string} arg.attachedPath - Attachaed path slug
   * @returns {Promise<RemoveProxyResponse>} - Success response
   * @summary: Remove proxy URL for the external URL
   * @description: Use this API to remove the proxy URL which is already generated for the external URL
   */
  async removeProxyPath({ extensionId, attachedPath } = {}) {
    const { error } = PartnerValidator.removeProxyPath().validate(
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
    const { error: warrning } = PartnerValidator.removeProxyPath().validate(
      {
        extensionId,
        attachedPath,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for removeProxyPath",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = PartnerModel.RemoveProxyResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for removeProxyPath",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Partner;
