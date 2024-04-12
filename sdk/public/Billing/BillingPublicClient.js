const PublicAPIClient = require("../PublicAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const BillingPublicValidator = require("./BillingPublicValidator");
const BillingPublicModel = require("./BillingPublicModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Billing {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getPlanDetails: "/service/public/billing/v1.0/plan/details/{planId}",
      getStandardPlans: "/service/public/billing/v1.0/plan/detailed-list",
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
   * @param {BillingPublicValidator.GetPlanDetailsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<BillingPublicModel.PlanDetails>} - Success response
   * @name getPlanDetails
   * @summary: Get plan details
   * @description: Get plan details.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/billing/getPlanDetails/).
   */
  async getPlanDetails(
    { planId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPublicValidator.getPlanDetails().validate(
      { planId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPublicValidator.getPlanDetails().validate(
      { planId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Billing > getPlanDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPlanDetails"],
        params: { planId },
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
    } = BillingPublicModel.PlanDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Billing > getPlanDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPublicValidator.GetStandardPlansParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<BillingPublicModel.DetailList>} - Success response
   * @name getStandardPlans
   * @summary: Get Standard/Public Plans
   * @description: Get Standard/Public Plans.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/billing/getStandardPlans/).
   */
  async getStandardPlans(
    { platformType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPublicValidator.getStandardPlans().validate(
      { platformType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPublicValidator.getStandardPlans().validate(
      { platformType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Billing > getStandardPlans \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["platform_type"] = platformType;

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getStandardPlans"],
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
    } = BillingPublicModel.DetailList().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Billing > getStandardPlans \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Billing;
