const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PartnerPlatformModel.ExtensionProxyPathCreation>} -
   *   Success response
   * @name addProxyPath
   * @summary: Create extension proxy
   * @description: Extension proxy can be used to call extension API from storefront and make extension API integration seamless. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/addProxyPath/).
   */
  async addProxyPath(
    { extensionId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
    } = PartnerPlatformModel.ExtensionProxyPathCreation().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Partner > addProxyPath \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PartnerPlatformApplicationValidator.RemoveProxyPathParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PartnerPlatformModel.ExtensionProxyPathDelete>} -
   *   Success response
   * @name removeProxyPath
   * @summary: Remove extension proxy
   * @description: Remove the proxy which are created earlier for the extension. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/removeProxyPath/).
   */
  async removeProxyPath(
    { extensionId, attachedPath, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
    } = PartnerPlatformModel.ExtensionProxyPathDelete().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Partner > removeProxyPath \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Partner;
