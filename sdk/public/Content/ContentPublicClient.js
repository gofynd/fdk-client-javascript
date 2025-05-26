const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const PublicAPIClient = require("../PublicAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { validateRequiredParams } = require("../../common/Validator");

const ContentPublicValidator = require("./ContentPublicValidator");
const ContentPublicModel = require("./ContentPublicModel");
const Joi = require("joi");
const { Logger } = require("./../../common/Logger");

class Content {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getCredentialsByEntity: "/service/public/content/credentials/{entity}",
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
   * @param {ContentPublicValidator.GetCredentialsByEntityParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ContentPublicModel.CredentialsSchema>} - Success response
   * @name getCredentialsByEntity
   * @summary: Get credentials to power chat support systems
   * @description: Get credentials for support system - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getCredentialsByEntity/).
   */
  async getCredentialsByEntity(
    { entity, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["entity"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = ContentPublicValidator.getCredentialsByEntity().validate(
      { entity },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPublicValidator.getCredentialsByEntity().validate(
      { entity },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Content > getCredentialsByEntity \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCredentialsByEntity"],
        params: { entity },
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
    } = ContentPublicModel.CredentialsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Content > getCredentialsByEntity \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Content;
