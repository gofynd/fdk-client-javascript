const ApplicationAPIClient = require("../ApplicationAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const LogisticApplicationValidator = require("./LogisticApplicationValidator");
const LogisticApplicationModel = require("./LogisticApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Logistic {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAllCountries: "/service/application/logistics/v1.0/country-list",
      getCountries: "/service/application/logistics/v1.0/countries",
      getCountry:
        "/service/application/logistics/v1.0/countries/{country_iso_code}",
      getGeoAreas:
        "/service/application/logistics/v1.0/company/{company_id}/application/{application_id}/geoareas",
      getLocalities:
        "/service/application/logistics/v1.0/localities/{locality_type}",
      getLocality:
        "/service/application/logistics/v1.0/localities/{locality_type}/{locality_value}",
      getLocations: "/service/application/logistics/v1.0/locations",
      getOptimalLocations:
        "/service/application/logistics/v1.0/reassign_stores",
      getPincodeZones: "/service/application/logistics/v1.0/pincode/zones",
      getZones:
        "/service/application/logistics/v2.0/company/{company_id}/application/{application_id}/zones",
      validateAddress:
        "/service/application/logistics/v1.0/country/{country_iso_code}/address/templates/{template_name}/validate",
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
   * @param {LogisticApplicationValidator.GetAllCountriesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.CountryListResponse>} - Success response
   * @name getAllCountries
   * @summary: Lists all countries.
   * @description: Retrieve a list of all countries supported by the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getAllCountries/).
   */
  async getAllCountries(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticApplicationValidator.getAllCountries().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getAllCountries().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getAllCountries \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAllCountries"],
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
    } = LogisticApplicationModel.CountryListResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > getAllCountries \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetCountriesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.GetCountries>} - Success response
   * @name getCountries
   * @summary: Get all countries and associated data.
   * @description: Retrieve of all countries. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCountries/).
   */
  async getCountries(
    { onboarding, pageNo, pageSize, q, hierarchy, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticApplicationValidator.getCountries().validate(
      { onboarding, pageNo, pageSize, q, hierarchy },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getCountries().validate(
      { onboarding, pageNo, pageSize, q, hierarchy },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getCountries \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["onboarding"] = onboarding;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["hierarchy"] = hierarchy;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCountries"],
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
    } = LogisticApplicationModel.GetCountries().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > getCountries \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.onboarding] - Only fetch countries which allowed
   *   for onboard on Platform.
   * @param {number} [arg.pageSize] - Page size.
   * @param {string} [arg.q] - Search.
   * @param {string} [arg.hierarchy] - Get countries with only certain
   *   hierarchy present..
   * @returns {Paginator<LogisticApplicationModel.GetCountries>}
   * @summary: Get all countries and associated data.
   * @description: Retrieve of all countries.
   */
  getCountriesPaginator({ onboarding, pageSize, q, hierarchy } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCountries({
        onboarding: onboarding,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
        hierarchy: hierarchy,
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
   * @param {LogisticApplicationValidator.GetCountryParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.GetCountry>} - Success response
   * @name getCountry
   * @summary: Get single country and associated data.
   * @description: Retrieve data for a single country and address format. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCountry/).
   */
  async getCountry(
    { countryIsoCode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticApplicationValidator.getCountry().validate(
      { countryIsoCode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getCountry().validate(
      { countryIsoCode },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getCountry \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCountry"],
        params: { countryIsoCode },
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
    } = LogisticApplicationModel.GetCountry().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > getCountry \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetGeoAreasParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.GeoAreaGetResponseBody>} -
   *   Success response
   * @name getGeoAreas
   * @summary: Get all geoareas in the current application.
   * @description: Retrieves a listing view of created GeoAreas. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getGeoAreas/).
   */
  async getGeoAreas(
    {
      applicationId,
      companyId,
      pageSize,
      isActive,
      q,
      countryIsoCode,
      state,
      city,
      pincode,
      sector,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticApplicationValidator.getGeoAreas().validate(
      {
        applicationId,
        companyId,
        pageSize,
        isActive,
        q,
        countryIsoCode,
        state,
        city,
        pincode,
        sector,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getGeoAreas().validate(
      {
        applicationId,
        companyId,
        pageSize,
        isActive,
        q,
        countryIsoCode,
        state,
        city,
        pincode,
        sector,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getGeoAreas \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["is_active"] = isActive;
    query_params["q"] = q;
    query_params["country_iso_code"] = countryIsoCode;
    query_params["state"] = state;
    query_params["city"] = city;
    query_params["pincode"] = pincode;
    query_params["sector"] = sector;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getGeoAreas"],
        params: { applicationId, companyId },
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
    } = LogisticApplicationModel.GeoAreaGetResponseBody().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > getGeoAreas \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetLocalitiesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.GetLocalities>} - Success response
   * @name getLocalities
   * @summary: Get Localities.
   * @description: Get Localities data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocalities/).
   */
  async getLocalities(
    {
      localityType,
      country,
      state,
      city,
      pageNo,
      pageSize,
      q,
      name,
      namesList,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticApplicationValidator.getLocalities().validate(
      {
        localityType,
        country,
        state,
        city,
        pageNo,
        pageSize,
        q,
        name,
        namesList,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getLocalities().validate(
      {
        localityType,
        country,
        state,
        city,
        pageNo,
        pageSize,
        q,
        name,
        namesList,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getLocalities \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["country"] = country;
    query_params["state"] = state;
    query_params["city"] = city;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["name"] = name;
    query_params["names_list"] = namesList;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLocalities"],
        params: { localityType },
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
    } = LogisticApplicationModel.GetLocalities().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > getLocalities \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.localityType - A `locality_type` contains unique
   *   geographical division.
   * @param {string} [arg.country] - A `country` contains a specific value of
   *   the country iso2 code.
   * @param {string} [arg.state] - A `state` contains a specific value of the
   *   state, province.
   * @param {string} [arg.city] - A `city` contains a specific value of the city.
   * @param {number} [arg.pageSize] - Page size.
   * @param {string} [arg.q] - Search.
   * @param {string} [arg.name] - Search with full name.
   * @param {string} [arg.namesList] - Search with multiple full names
   * @returns {Paginator<LogisticApplicationModel.GetLocalities>}
   * @summary: Get Localities.
   * @description: Get Localities data.
   */
  getLocalitiesPaginator({
    localityType,
    country,
    state,
    city,
    pageSize,
    q,
    name,
    namesList,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getLocalities({
        localityType: localityType,
        country: country,
        state: state,
        city: city,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
        name: name,
        namesList: namesList,
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
   * @param {LogisticApplicationValidator.GetLocalityParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.GetLocality>} - Success response
   * @name getLocality
   * @summary: Get Locality API
   * @description: Get Locality data - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocality/).
   */
  async getLocality(
    { localityType, localityValue, country, state, city, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticApplicationValidator.getLocality().validate(
      { localityType, localityValue, country, state, city },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getLocality().validate(
      { localityType, localityValue, country, state, city },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getLocality \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["country"] = country;
    query_params["state"] = state;
    query_params["city"] = city;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLocality"],
        params: { localityType, localityValue },
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
    } = LogisticApplicationModel.GetLocality().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > getLocality \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetLocationsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.GetStoreResponse>} - Success response
   * @name getLocations
   * @summary: Fetches available locations.
   * @description: Retrieves a list of all locations of countries, states, cities.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocations/).
   */
  async getLocations(
    {
      xApplicationId,
      xApplicationData,
      country,
      state,
      city,
      pincode,
      sector,
      pageNo,
      pageSize,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticApplicationValidator.getLocations().validate(
      {
        xApplicationId,
        xApplicationData,
        country,
        state,
        city,
        pincode,
        sector,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getLocations().validate(
      {
        xApplicationId,
        xApplicationData,
        country,
        state,
        city,
        pincode,
        sector,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getLocations \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["x-application-id"] = xApplicationId;
    query_params["x-application-data"] = xApplicationData;
    query_params["country"] = country;
    query_params["state"] = state;
    query_params["city"] = city;
    query_params["pincode"] = pincode;
    query_params["sector"] = sector;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLocations"],
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
    } = LogisticApplicationModel.GetStoreResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > getLocations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetOptimalLocationsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.ReAssignStoreResponse>} -
   *   Success response
   * @name getOptimalLocations
   * @summary: Finds optimal locations.
   * @description: Retrieve the most efficient locations for logistics purposes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getOptimalLocations/).
   */
  async getOptimalLocations(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticApplicationValidator.getOptimalLocations().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getOptimalLocations().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getOptimalLocations \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getOptimalLocations"],
        params: {},
      }),
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
    } = LogisticApplicationModel.ReAssignStoreResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > getOptimalLocations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetPincodeZonesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.GetZoneFromPincodeViewResponse>}
   *   - Success response
   *
   * @name getPincodeZones
   * @summary: Fetches zones by pincode.
   * @description: Retreive the logistical zones corresponding to a given pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getPincodeZones/).
   */
  async getPincodeZones(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticApplicationValidator.getPincodeZones().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getPincodeZones().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getPincodeZones \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getPincodeZones"],
        params: {},
      }),
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
    } = LogisticApplicationModel.GetZoneFromPincodeViewResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > getPincodeZones \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetZonesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.ListViewResponseV2>} - Success response
   * @name getZones
   * @summary: Shows zones defined at the application level
   * @description: Displays the list of zones defined at the application level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getZones/).
   */
  async getZones(
    {
      companyId,
      applicationId,
      stage,
      pageSize,
      zoneIds,
      isActive,
      q,
      country,
      countryIsoCode,
      pincode,
      state,
      city,
      sector,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticApplicationValidator.getZones().validate(
      {
        companyId,
        applicationId,
        stage,
        pageSize,
        zoneIds,
        isActive,
        q,
        country,
        countryIsoCode,
        pincode,
        state,
        city,
        sector,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getZones().validate(
      {
        companyId,
        applicationId,
        stage,
        pageSize,
        zoneIds,
        isActive,
        q,
        country,
        countryIsoCode,
        pincode,
        state,
        city,
        sector,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getZones \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["stage"] = stage;
    query_params["page_size"] = pageSize;
    query_params["zone_ids"] = zoneIds;
    query_params["is_active"] = isActive;
    query_params["q"] = q;
    query_params["country"] = country;
    query_params["country_iso_code"] = countryIsoCode;
    query_params["pincode"] = pincode;
    query_params["state"] = state;
    query_params["city"] = city;
    query_params["sector"] = sector;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getZones"],
        params: { companyId, applicationId },
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
    } = LogisticApplicationModel.ListViewResponseV2().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > getZones \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.ValidateAddressParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.ValidateAddressRequest>} -
   *   Success response
   * @name validateAddress
   * @summary: Validate given address wrt template
   * @description: Validate given address wrt template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/validateAddress/).
   */
  async validateAddress(
    { countryIsoCode, templateName, body, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticApplicationValidator.validateAddress().validate(
      { countryIsoCode, templateName, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.validateAddress().validate(
      { countryIsoCode, templateName, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > validateAddress \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["validateAddress"],
        params: { countryIsoCode, templateName },
      }),
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
    } = LogisticApplicationModel.ValidateAddressRequest().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > validateAddress \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Logistic;
