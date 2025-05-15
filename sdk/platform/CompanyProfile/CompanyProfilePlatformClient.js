const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const CompanyProfilePlatformValidator = require("./CompanyProfilePlatformValidator");
const CompanyProfilePlatformModel = require("./CompanyProfilePlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class CompanyProfile {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {CompanyProfilePlatformValidator.CbsOnboardGetParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyProfilePlatformModel.GetCompanyProfileSerializerResponseSchema>}
   *   - Success response
   *
   * @name cbsOnboardGet
   * @summary: Get company profile
   * @description: View the company profile of the seller account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/cbsOnboardGet/).
   */
  async cbsOnboardGet(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CompanyProfilePlatformValidator.cbsOnboardGet().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CompanyProfilePlatformValidator.cbsOnboardGet().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > CompanyProfile > cbsOnboardGet \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}`,
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
    } = CompanyProfilePlatformModel.GetCompanyProfileSerializerResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > CompanyProfile > cbsOnboardGet \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.CreateBrandParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponseSchema>}
   *   - Success response
   *
   * @name createBrand
   * @summary: Create brand
   * @description: Allows to create a brand associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/createBrand/).
   */
  async createBrand(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CompanyProfilePlatformValidator.createBrand().validate(
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
    } = CompanyProfilePlatformValidator.createBrand().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > CompanyProfile > createBrand \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/brand/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.ProfileSuccessResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > CompanyProfile > createBrand \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.CreateCompanyBrandMappingParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponseSchema>}
   *   - Success response
   *
   * @name createCompanyBrandMapping
   * @summary: Create company-brand mapping
   * @description: Establish a mapping between a company and a brand. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/createCompanyBrandMapping/).
   */
  async createCompanyBrandMapping(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CompanyProfilePlatformValidator.createCompanyBrandMapping().validate(
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
    } = CompanyProfilePlatformValidator.createCompanyBrandMapping().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > CompanyProfile > createCompanyBrandMapping \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/company-brand`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.ProfileSuccessResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > CompanyProfile > createCompanyBrandMapping \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.CreateLocationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponseSchema>}
   *   - Success response
   *
   * @name createLocation
   * @summary: Create company stores
   * @description: Create a new location associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/createLocation/).
   */
  async createLocation(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CompanyProfilePlatformValidator.createLocation().validate(
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
    } = CompanyProfilePlatformValidator.createLocation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > CompanyProfile > createLocation \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.ProfileSuccessResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > CompanyProfile > createLocation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.CreateLocationBulkParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponseSchema>}
   *   - Success response
   *
   * @name createLocationBulk
   * @summary: Bulk create company stores
   * @description: Allows to create locations in bulk at once associated to a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/createLocationBulk/).
   */
  async createLocationBulk(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CompanyProfilePlatformValidator.createLocationBulk().validate(
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
    } = CompanyProfilePlatformValidator.createLocationBulk().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > CompanyProfile > createLocationBulk \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location/bulk`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.ProfileSuccessResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > CompanyProfile > createLocationBulk \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.EditBrandParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponseSchema>}
   *   - Success response
   *
   * @name editBrand
   * @summary: update brand
   * @description: Modify brand details and meta of a specific brand. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/editBrand/).
   */
  async editBrand(
    { brandId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CompanyProfilePlatformValidator.editBrand().validate(
      {
        brandId,
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
    } = CompanyProfilePlatformValidator.editBrand().validate(
      {
        brandId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > CompanyProfile > editBrand \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/brand/${brandId}`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.ProfileSuccessResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > CompanyProfile > editBrand \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.GetBrandParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyProfilePlatformModel.GetBrandResponseSchema>} -
   *   Success response
   * @name getBrand
   * @summary: Get a brand
   * @description: Retrieve detailed information about a specific brand associated to a particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getBrand/).
   */
  async getBrand(
    { brandId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CompanyProfilePlatformValidator.getBrand().validate(
      {
        brandId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CompanyProfilePlatformValidator.getBrand().validate(
      {
        brandId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > CompanyProfile > getBrand \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/brand/${brandId}`,
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
    } = CompanyProfilePlatformModel.GetBrandResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > CompanyProfile > getBrand \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.GetBrandsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyProfilePlatformModel.CompanyBrandListSchema>} -
   *   Success response
   * @name getBrands
   * @summary: list company brands
   * @description: Retrieve a list of available brands associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getBrands/).
   */
  async getBrands(
    { pageNo, pageSize, q, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CompanyProfilePlatformValidator.getBrands().validate(
      {
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CompanyProfilePlatformValidator.getBrands().validate(
      {
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > CompanyProfile > getBrands \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/company-brand`,
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
    } = CompanyProfilePlatformModel.CompanyBrandListSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > CompanyProfile > getBrands \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 10.
   * @param {string} [arg.q] - Search term for name.
   * @returns {Paginator<CompanyProfilePlatformModel.CompanyBrandListSchema>}
   * @summary: list company brands
   * @description: Retrieve a list of available brands associated to a company.
   */
  getBrandsPaginator({ pageSize, q } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getBrands({
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CompanyProfilePlatformValidator.GetCompanyMetricsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyProfilePlatformModel.MetricsSchema>} - Success response
   * @name getCompanyMetrics
   * @summary: Get company metrics
   * @description: Allows viewing company metrics, including brand and store status, as well as the number of verified and unverified products, company documents, and store documents. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getCompanyMetrics/).
   */
  async getCompanyMetrics(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CompanyProfilePlatformValidator.getCompanyMetrics().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CompanyProfilePlatformValidator.getCompanyMetrics().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > CompanyProfile > getCompanyMetrics \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/metrics`,
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
    } = CompanyProfilePlatformModel.MetricsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > CompanyProfile > getCompanyMetrics \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.GetLocationDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyProfilePlatformModel.GetLocationSchema>} -
   *   Success response
   * @name getLocationDetail
   * @summary: Get company stores
   * @description: Retrive detailed information about a specific location associated to a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getLocationDetail/).
   */
  async getLocationDetail(
    { locationId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CompanyProfilePlatformValidator.getLocationDetail().validate(
      {
        locationId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CompanyProfilePlatformValidator.getLocationDetail().validate(
      {
        locationId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > CompanyProfile > getLocationDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location/${locationId}`,
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
    } = CompanyProfilePlatformModel.GetLocationSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > CompanyProfile > getLocationDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.GetLocationTagsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyProfilePlatformModel.StoreTagsResponseSchema>}
   *   - Success response
   *
   * @name getLocationTags
   * @summary: Get company store tags
   * @description: Retrieve all the distinct tags associated to a company location. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getLocationTags/).
   */
  async getLocationTags(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CompanyProfilePlatformValidator.getLocationTags().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CompanyProfilePlatformValidator.getLocationTags().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > CompanyProfile > getLocationTags \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location/tags`,
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
    } = CompanyProfilePlatformModel.StoreTagsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > CompanyProfile > getLocationTags \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.GetLocationsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyProfilePlatformModel.LocationListSchema>} -
   *   Success response
   * @name getLocations
   * @summary: Get company specific stores
   * @description: Retrieve a list of locations associated with the company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getLocations/).
   */
  async getLocations(
    {
      storeType,
      q,
      stage,
      pageNo,
      pageSize,
      locationIds,
      types,
      tags,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CompanyProfilePlatformValidator.getLocations().validate(
      {
        storeType,
        q,
        stage,
        pageNo,
        pageSize,
        locationIds,
        types,
        tags,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CompanyProfilePlatformValidator.getLocations().validate(
      {
        storeType,
        q,
        stage,
        pageNo,
        pageSize,
        locationIds,
        types,
        tags,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > CompanyProfile > getLocations \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["store_type"] = storeType;
    query_params["q"] = q;
    query_params["stage"] = stage;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["location_ids"] = locationIds;
    query_params["types"] = types;
    query_params["tags"] = tags;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location`,
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
    } = CompanyProfilePlatformModel.LocationListSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > CompanyProfile > getLocations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.storeType] - Helps to sort the location list on the
   *   basis of location type.
   * @param {string} [arg.q] - Query that is to be searched.
   * @param {string} [arg.stage] - To filter companies on basis of verified or
   *   unverified companies.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 10.
   * @param {number[]} [arg.locationIds] - Helps to filter stores on the basis of uids.
   * @param {string[]} [arg.types] - Helps to get the location list on the
   *   basis of multiple location type.
   * @param {string[]} [arg.tags] - Helps to get the location list on the
   *   basis of multiple location tag.
   * @returns {Paginator<CompanyProfilePlatformModel.LocationListSchema>}
   * @summary: Get company specific stores
   * @description: Retrieve a list of locations associated with the company.
   */
  getLocationsPaginator({
    storeType,
    q,
    stage,
    pageSize,
    locationIds,
    types,
    tags,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getLocations({
        storeType: storeType,
        q: q,
        stage: stage,
        pageNo: pageNo,
        pageSize: pageSize,
        locationIds: locationIds,
        types: types,
        tags: tags,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CompanyProfilePlatformValidator.UpdateCompanyParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponseSchema>}
   *   - Success response
   *
   * @name updateCompany
   * @summary: Update company profile
   * @description: Allows to edit the company profile of the seller account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/updateCompany/).
   */
  async updateCompany(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CompanyProfilePlatformValidator.updateCompany().validate(
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
    } = CompanyProfilePlatformValidator.updateCompany().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > CompanyProfile > updateCompany \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.ProfileSuccessResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > CompanyProfile > updateCompany \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.UpdateLocationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponseSchema>}
   *   - Success response
   *
   * @name updateLocation
   * @summary: Update company stores
   * @description: Allows to edit a location associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/updateLocation/).
   */
  async updateLocation(
    { locationId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CompanyProfilePlatformValidator.updateLocation().validate(
      {
        locationId,
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
    } = CompanyProfilePlatformValidator.updateLocation().validate(
      {
        locationId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > CompanyProfile > updateLocation \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location/${locationId}`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.ProfileSuccessResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > CompanyProfile > updateLocation \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = CompanyProfile;
