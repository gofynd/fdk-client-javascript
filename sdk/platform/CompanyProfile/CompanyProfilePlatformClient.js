const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
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
   * @param {CompanyProfilePlatformValidator.cbsOnboardGet} arg - Arg object
   * @returns {Promise<CompanyProfilePlatformModel.GetCompanyProfileSerializerResponse>}
   *   - Success response
   *
   * @name cbsOnboardGet
   * @summary: Get company profile
   * @description: This API allows to view the company profile of the seller account.
   */
  async cbsOnboardGet({} = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.GetCompanyProfileSerializerResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > CompanyProfile > cbsOnboardGet \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.createBrand} arg - Arg object
   * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
   *   Success response
   * @name createBrand
   * @summary: Create a Brand.
   * @description: This API allows to create a brand associated to a company.
   */
  async createBrand({ body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.ProfileSuccessResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > CompanyProfile > createBrand \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.createCompanyBrandMapping} arg - Arg object
   * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
   *   Success response
   * @name createCompanyBrandMapping
   * @summary: Create a company brand mapping.
   * @description: This API allows to create a company brand mapping, for a already existing brand in the system.
   */
  async createCompanyBrandMapping({ body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.ProfileSuccessResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > CompanyProfile > createCompanyBrandMapping \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.createLocation} arg - Arg object
   * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
   *   Success response
   * @name createLocation
   * @summary: Create a location associated to a company.
   * @description: This API allows to edit a location associated to a company.
   */
  async createLocation({ body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.ProfileSuccessResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > CompanyProfile > createLocation \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.createLocationBulk} arg - Arg object
   * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
   *   Success response
   * @name createLocationBulk
   * @summary: Create a location asscoiated to a company in bulk.
   * @description: This API allows to create a location associated to a company.
   */
  async createLocationBulk({ body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.ProfileSuccessResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > CompanyProfile > createLocationBulk \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.editBrand} arg - Arg object
   * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
   *   Success response
   * @name editBrand
   * @summary: Edit a brand.
   * @description: This API allows to edit meta of a brand.
   */
  async editBrand({ brandId, body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.ProfileSuccessResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > CompanyProfile > editBrand \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.getBrand} arg - Arg object
   * @returns {Promise<CompanyProfilePlatformModel.GetBrandResponseSerializer>}
   *   - Success response
   *
   * @name getBrand
   * @summary: Get a single company brand.
   * @description: This API helps to get data associated to a particular company brand.
   */
  async getBrand({ brandId } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.GetBrandResponseSerializer().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > CompanyProfile > getBrand \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.getBrands} arg - Arg object
   * @returns {Promise<CompanyProfilePlatformModel.CompanyBrandListSerializer>}
   *   - Success response
   *
   * @name getBrands
   * @summary: Get brands associated to a company
   * @description: This API helps to get view brands associated to a particular company.
   */
  async getBrands({ pageNo, pageSize, q } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.CompanyBrandListSerializer().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > CompanyProfile > getBrands \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 10.
   * @param {string} [arg.q] - Search term for name.
   * @returns {Paginator<CompanyProfilePlatformModel.CompanyBrandListSerializer>}
   * @summary: Get brands associated to a company
   * @description: This API helps to get view brands associated to a particular company.
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
   * @param {CompanyProfilePlatformValidator.getCompanyMetrics} arg - Arg object
   * @returns {Promise<CompanyProfilePlatformModel.MetricsSerializer>} -
   *   Success response
   * @name getCompanyMetrics
   * @summary: Get company metrics
   * @description: This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.
   */
  async getCompanyMetrics({} = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.MetricsSerializer().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > CompanyProfile > getCompanyMetrics \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.getLocationDetail} arg - Arg object
   * @returns {Promise<CompanyProfilePlatformModel.GetLocationSerializer>} -
   *   Success response
   * @name getLocationDetail
   * @summary: Get details of a specific location.
   * @description: This API helps to get data associated to a specific location.
   */
  async getLocationDetail({ locationId } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.GetLocationSerializer().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > CompanyProfile > getLocationDetail \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.getLocations} arg - Arg object
   * @returns {Promise<CompanyProfilePlatformModel.LocationListSerializer>} -
   *   Success response
   * @name getLocations
   * @summary: Get list of locations
   * @description: This API allows to view all the locations associated to a company.
   */
  async getLocations({
    storeType,
    q,
    stage,
    pageNo,
    pageSize,
    locationIds,
  } = {}) {
    const { error } = CompanyProfilePlatformValidator.getLocations().validate(
      {
        storeType,
        q,
        stage,
        pageNo,
        pageSize,
        locationIds,
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

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.LocationListSerializer().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > CompanyProfile > getLocations \n ${res_error}`,
      });
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
   * @returns {Paginator<CompanyProfilePlatformModel.LocationListSerializer>}
   * @summary: Get list of locations
   * @description: This API allows to view all the locations associated to a company.
   */
  getLocationsPaginator({ storeType, q, stage, pageSize, locationIds } = {}) {
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
   * @param {CompanyProfilePlatformValidator.updateCompany} arg - Arg object
   * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
   *   Success response
   * @name updateCompany
   * @summary: Edit company profile
   * @description: This API allows to edit the company profile of the seller account.
   */
  async updateCompany({ body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.ProfileSuccessResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > CompanyProfile > updateCompany \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CompanyProfilePlatformValidator.updateLocation} arg - Arg object
   * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
   *   Success response
   * @name updateLocation
   * @summary: Edit a location asscoiated to a company.
   * @description: This API allows to edit a location associated to a company.
   */
  async updateLocation({ locationId, body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = CompanyProfilePlatformModel.ProfileSuccessResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > CompanyProfile > updateLocation \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = CompanyProfile;
