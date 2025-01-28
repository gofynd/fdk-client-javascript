const PartnerAPIClient = require("../PartnerAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const CatalogPartnerValidator = require("./CatalogPartnerValidator");
const CatalogPartnerModel = require("./CatalogPartnerModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Catalog {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {CatalogPartnerValidator.PartnerCompanyDetailsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<CatalogPartnerModel.CompaniesSerializer>} - Success response
   * @name partnerCompanyDetails
   * @summary: Fetch partner company details
   * @description: This API helps in fetch details of partner companies with the help of uid. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/catalog/partnerCompanyDetails/).
   */
  async partnerCompanyDetails(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPartnerValidator.partnerCompanyDetails().validate(
      {
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
    } = CatalogPartnerValidator.partnerCompanyDetails().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Catalog > partnerCompanyDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/catalog/v2.0/organization/${this.config.organizationId}/company-details`,
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
    } = CatalogPartnerModel.CompaniesSerializer().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Catalog > partnerCompanyDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPartnerValidator.GetCompaniesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<CatalogPartnerModel.CompanyListSerializer>} - Success response
   * @name getCompanies
   * @summary: Get company profile
   * @description: This API allows to view the company profile of the seller account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/catalog/getCompanies/).
   */
  async getCompanies(
    { q, stage, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPartnerValidator.getCompanies().validate(
      {
        q,
        stage,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogPartnerValidator.getCompanies().validate(
      {
        q,
        stage,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Catalog > getCompanies \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["stage"] = stage;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/catalog/v2.0/organization/${this.config.organizationId}/referred-companies`,
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
    } = CatalogPartnerModel.CompanyListSerializer().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Catalog > getCompanies \n ${res_error}`,
        });
      }
    }

    return response;
  }
}
module.exports = Catalog;
