const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const PublicAPIClient = require("../PublicAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");

const BillingPublicValidator = require("./BillingPublicValidator");
const BillingPublicModel = require("./BillingPublicModel");
const Joi = require("joi");
const { Logger } = require("./../../common/Logger");

class Billing {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getPlanDetails: "/service/public/billing/v1.0/plan/details/{plan_id}",
      getStandardPlans: "/service/public/billing/v1.0/plan/detailed-list/",
      getTenureConfig:
        "/service/public/billing/v1.0/tenure-config/{country_code}",
      planList: "/service/public/billing/v1.0/plan/list",
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
    let invalidInput = [];

    if (!planId) {
      invalidInput.push({
        message: `The 'planId' field is required.`,
        path: ["planId"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

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
   * @description: Get Standard/Public Plans. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/billing/getStandardPlans/).
   */
  async getStandardPlans(
    { platform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = BillingPublicValidator.getStandardPlans().validate(
      { platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPublicValidator.getStandardPlans().validate(
      { platform },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Billing > getStandardPlans \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["platform"] = platform;

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

  /**
   * @param {BillingPublicValidator.GetTenureConfigParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<BillingPublicModel.TenureConfigResponse>} - Success response
   * @name getTenureConfig
   * @summary: Get Tenure Configuration
   * @description: Retrieve the tenure configuration for a specific country. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/billing/getTenureConfig/).
   */
  async getTenureConfig(
    { countryCode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!countryCode) {
      invalidInput.push({
        message: `The 'countryCode' field is required.`,
        path: ["countryCode"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = BillingPublicValidator.getTenureConfig().validate(
      { countryCode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPublicValidator.getTenureConfig().validate(
      { countryCode },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Billing > getTenureConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getTenureConfig"],
        params: { countryCode },
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
    } = BillingPublicModel.TenureConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Billing > getTenureConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPublicValidator.PlanListParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<BillingPublicModel.PlanList[]>} - Success response
   * @name planList
   * @summary: Get List of all plans
   * @description: Get List of all plans - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/billing/planList/).
   */
  async planList(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = BillingPublicValidator.planList().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = BillingPublicValidator.planList().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Billing > planList \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["planList"],
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

    const { error: res_error } = Joi.array()
      .items(BillingPublicModel.PlanList())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Billing > planList \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Billing;
