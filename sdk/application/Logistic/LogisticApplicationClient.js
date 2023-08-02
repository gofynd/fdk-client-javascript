const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const LogisticValidator = require("./LogisticApplicationValidator");
const LogisticModel = require("./LogisticApplicationModel");
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
      getLocalities:
        "/service/application/logistics/v1.0/localities/{locality_type}",
      getLocality:
        "/service/application/logistics/v1.0/localities/{locality_type}/{locality_value}",
      getOptimalLocations:
        "/service/application/logistics/v1.0/reassign_stores",
      getPincodeCity: "/service/application/logistics/v1.0/pincode/{pincode}",
      getPincodeZones: "/service/application/logistics/v1.0/pincode/zones",
      getTatProduct: "/service/application/logistics/v1.0/",
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
   * @param {Object} arg - Arg object.
   * @returns {Promise<CountryListResponse>} - Success response
   * @summary: Get Country List
   * @description: Get all countries
   */
  async getAllCountries({} = {}) {
    const { error } = LogisticValidator.getAllCountries().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LogisticValidator.getAllCountries().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAllCountries",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = LogisticModel.CountryListResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAllCountries",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.onboarding] - Only fetch countries which allowed
   *   for onboard on Platform.
   * @returns {Promise<GetCountries>} - Success response
   * @summary: Get all countries and associated data.
   * @description: Retrieve of all countries.
   */
  async getCountries({ onboarding } = {}) {
    const { error } = LogisticValidator.getCountries().validate(
      { onboarding },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LogisticValidator.getCountries().validate(
      { onboarding },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCountries",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["onboarding"] = onboarding;

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
      xHeaders
    );

    const { error: res_error } = LogisticModel.GetCountries().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCountries",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.countryIsoCode - The `country_iso_code` is ISO-2
   *   (alpha-2) code for the country.
   * @returns {Promise<GetCountry>} - Success response
   * @summary: Get single country and associated data.
   * @description: Retrieve data for a single country and address format.
   */
  async getCountry({ countryIsoCode } = {}) {
    const { error } = LogisticValidator.getCountry().validate(
      { countryIsoCode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LogisticValidator.getCountry().validate(
      { countryIsoCode },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCountry",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const { error: res_error } = LogisticModel.GetCountry().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCountry",
      });
      Logger({ level: "WARN", message: res_error });
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
   * @returns {Promise<GetLocalities>} - Success response
   * @summary: Get Localities.
   * @description: Get Localities data.
   */
  async getLocalities({ localityType, country, state, city } = {}) {
    const { error } = LogisticValidator.getLocalities().validate(
      { localityType, country, state, city },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LogisticValidator.getLocalities().validate(
      { localityType, country, state, city },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getLocalities",
      });
      Logger({ level: "WARN", message: warrning });
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
        url: this._urls["getLocalities"],
        params: { localityType },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = LogisticModel.GetLocalities().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getLocalities",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.localityType - A `locality_type` contains value
   *   geographical division.
   * @param {string} arg.localityValue - A `locality_value` contains a
   *   specific value of the locality.
   * @param {string} [arg.country] - A `country` contains a specific value of
   *   the country iso2 code.
   * @param {string} [arg.state] - A `state` contains a specific value of the
   *   state, province.
   * @param {string} [arg.city] - A `city` contains a specific value of the city.
   * @returns {Promise<GetLocality>} - Success response
   * @summary: Get Locality API
   * @description: Get Locality data
   */
  async getLocality({
    localityType,
    localityValue,
    country,
    state,
    city,
  } = {}) {
    const { error } = LogisticValidator.getLocality().validate(
      { localityType, localityValue, country, state, city },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LogisticValidator.getLocality().validate(
      { localityType, localityValue, country, state, city },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getLocality",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const { error: res_error } = LogisticModel.GetLocality().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getLocality",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ReAssignStoreRequest} arg.body
   * @returns {Promise<ReAssignStoreResponse>} - Success response
   * @summary: GET zone from the Pincode.
   * @description: This API returns zone from the Pincode View.
   */
  async getOptimalLocations({ body } = {}) {
    const { error } = LogisticValidator.getOptimalLocations().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticValidator.getOptimalLocations().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getOptimalLocations",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = LogisticModel.ReAssignStoreResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getOptimalLocations",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.pincode - A `pincode` contains a specific address of
   *   a location.
   * @returns {Promise<PincodeApiResponse>} - Success response
   * @summary: Get Pincode API
   * @description: Get pincode data
   */
  async getPincodeCity({ pincode } = {}) {
    const { error } = LogisticValidator.getPincodeCity().validate(
      { pincode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LogisticValidator.getPincodeCity().validate(
      { pincode },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getPincodeCity",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPincodeCity"],
        params: { pincode },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = LogisticModel.PincodeApiResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPincodeCity",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetZoneFromPincodeViewRequest} arg.body
   * @returns {Promise<GetZoneFromPincodeViewResponse>} - Success response
   * @summary: GET zone from the Pincode.
   * @description: This API returns zone from the Pincode View.
   */
  async getPincodeZones({ body } = {}) {
    const { error } = LogisticValidator.getPincodeZones().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LogisticValidator.getPincodeZones().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getPincodeZones",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = LogisticModel.GetZoneFromPincodeViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPincodeZones",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {TATViewRequest} arg.body
   * @returns {Promise<TATViewResponse>} - Success response
   * @summary: Get TAT API
   * @description: Get TAT data
   */
  async getTatProduct({ body } = {}) {
    const { error } = LogisticValidator.getTatProduct().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LogisticValidator.getTatProduct().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getTatProduct",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getTatProduct"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = LogisticModel.TATViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getTatProduct",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Logistic;
