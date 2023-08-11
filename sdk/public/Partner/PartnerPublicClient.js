const PublicAPIClient = require("../PublicAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const PartnerPublicValidator = require("./PartnerPublicValidator");
const PartnerPublicModel = require("./PartnerPublicModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Partner {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getPanelExtensionDetails:
        "/service/panel/partners/v1.0/extensions/{slug}",
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
   * @param {PartnerPublicValidator.GetPanelExtensionDetailsParam} arg - Arg object.
   * @returns {Promise<PartnerPublicModel.ExtensionUsingSlug>} - Success response
   * @name getPanelExtensionDetails
   * @summary: Get extension details
   * @description: Use this API to get extension details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/partner/getPanelExtensionDetails/).
   */
  async getPanelExtensionDetails({ slug } = {}) {
    const {
      error,
    } = PartnerPublicValidator.getPanelExtensionDetails().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PartnerPublicValidator.getPanelExtensionDetails().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Partner > getPanelExtensionDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPanelExtensionDetails"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = PartnerPublicModel.ExtensionUsingSlug().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for public > Partner > getPanelExtensionDetails \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Partner;
