const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const PublicAPIClient = require("../PublicAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");

const CatalogPublicValidator = require("./CatalogPublicValidator");
const CatalogPublicModel = require("./CatalogPublicModel");
const Joi = require("joi");
const { Logger } = require("./../../common/Logger");

class Catalog {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getTaxonomyByLevel: "/service/public/catalog/v1.0/taxonomy/level/{level}",
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
   * @param {CatalogPublicValidator.GetTaxonomyByLevelParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<CatalogPublicModel.TaxonomyResponseSchema>} - Success response
   * @name getTaxonomyByLevel
   * @summary: Get Taxonomy Information by Level
   * @description: Get Taxonomy Details for a given level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/catalog/getTaxonomyByLevel/).
   */
  async getTaxonomyByLevel(
    { level, l0Slug, l1Slug, l2Slug, l3Slug, limit, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!level) {
      invalidInput.push({
        message: `The 'level' field is required.`,
        path: ["level"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = CatalogPublicValidator.getTaxonomyByLevel().validate(
      { level, l0Slug, l1Slug, l2Slug, l3Slug, limit },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPublicValidator.getTaxonomyByLevel().validate(
      { level, l0Slug, l1Slug, l2Slug, l3Slug, limit },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Catalog > getTaxonomyByLevel \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["l0_slug"] = l0Slug;
    query_params["l1_slug"] = l1Slug;
    query_params["l2_slug"] = l2Slug;
    query_params["l3_slug"] = l3Slug;
    query_params["limit"] = limit;

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getTaxonomyByLevel"],
        params: { level },
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
    } = CatalogPublicModel.TaxonomyResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Catalog > getTaxonomyByLevel \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Catalog;
