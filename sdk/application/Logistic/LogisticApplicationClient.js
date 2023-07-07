const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
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
      getCountries: "/service/application/logistics/v1.0/country",
      getCountry: "/service/application/logistics/v1.0/country/{uid}",
      getLocalities: "/service/application/logistics/v1.0/locality/{region}",
      getLocality:
        "/service/application/logistics/v1.0/locality/{region}/{value}",
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
   * @param {LogisticApplicationValidator.GetAllCountriesParam} arg - Arg object.
   * @returns {Promise<LogisticApplicationModel.CountryListResponse>} - Success response
   * @name getAllCountries
   * @summary: Get Country List
   * @description: Get all countries
   */
  async getAllCountries({} = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = LogisticApplicationModel.CountryListResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > Logistic > getAllCountries \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetCountriesParam} arg - Arg object.
   * @returns {Promise<LogisticApplicationModel.GetCountries>} - Success response
   * @name getCountries
   * @summary: Get list of all countries API
   * @description: Get countries data
   */
  async getCountries({} = {}) {
    const { error } = LogisticApplicationValidator.getCountries().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getCountries().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getCountries \n ${warrning}`,
      });
    }

    const query_params = {};

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

    const {
      error: res_error,
    } = LogisticApplicationModel.GetCountries().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > Logistic > getCountries \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetCountryParam} arg - Arg object.
   * @returns {Promise<LogisticApplicationModel.GetCountry>} - Success response
   * @name getCountry
   * @summary: Get single Country API
   * @description: Get country data
   */
  async getCountry({ uid } = {}) {
    const { error } = LogisticApplicationValidator.getCountry().validate(
      { uid },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getCountry().validate(
      { uid },
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
        params: { uid },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = LogisticApplicationModel.GetCountry().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > Logistic > getCountry \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetLocalitiesParam} arg - Arg object.
   * @returns {Promise<LogisticApplicationModel.GetLocalities>} - Success response
   * @name getLocalities
   * @summary: Get Localities API
   * @description: Get Localities data
   */
  async getLocalities({ region } = {}) {
    const { error } = LogisticApplicationValidator.getLocalities().validate(
      { region },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getLocalities().validate(
      { region },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getLocalities \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLocalities"],
        params: { region },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = LogisticApplicationModel.GetLocalities().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > Logistic > getLocalities \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetLocalityParam} arg - Arg object.
   * @returns {Promise<LogisticApplicationModel.GetLocality>} - Success response
   * @name getLocality
   * @summary: Get Locality API
   * @description: Get Locality data
   */
  async getLocality({ region, value } = {}) {
    const { error } = LogisticApplicationValidator.getLocality().validate(
      { region, value },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getLocality().validate(
      { region, value },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getLocality \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLocality"],
        params: { region, value },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = LogisticApplicationModel.GetLocality().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > Logistic > getLocality \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetOptimalLocationsParam} arg - Arg object.
   * @returns {Promise<LogisticApplicationModel.ReAssignStoreResponse>} -
   *   Success response
   * @name getOptimalLocations
   * @summary: GET zone from the Pincode.
   * @description: This API returns zone from the Pincode View.
   */
  async getOptimalLocations({ body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = LogisticApplicationModel.ReAssignStoreResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > Logistic > getOptimalLocations \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetPincodeCityParam} arg - Arg object.
   * @returns {Promise<LogisticApplicationModel.PincodeApiResponse>} - Success response
   * @name getPincodeCity
   * @summary: Get Pincode API
   * @description: Get pincode data
   */
  async getPincodeCity({ pincode } = {}) {
    const { error } = LogisticApplicationValidator.getPincodeCity().validate(
      { pincode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getPincodeCity().validate(
      { pincode },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getPincodeCity \n ${warrning}`,
      });
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
    } = LogisticApplicationModel.PincodeApiResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > Logistic > getPincodeCity \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetPincodeZonesParam} arg - Arg object.
   * @returns {Promise<LogisticApplicationModel.GetZoneFromPincodeViewResponse>}
   *   - Success response
   *
   * @name getPincodeZones
   * @summary: GET zone from the Pincode.
   * @description: This API returns zone from the Pincode View.
   */
  async getPincodeZones({ body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = LogisticApplicationModel.GetZoneFromPincodeViewResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > Logistic > getPincodeZones \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetTatProductParam} arg - Arg object.
   * @returns {Promise<LogisticApplicationModel.TATViewResponse>} - Success response
   * @name getTatProduct
   * @summary: Get TAT API
   * @description: Get TAT data
   */
  async getTatProduct({ body } = {}) {
    const { error } = LogisticApplicationValidator.getTatProduct().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getTatProduct().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getTatProduct \n ${warrning}`,
      });
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
    } = LogisticApplicationModel.TATViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > Logistic > getTatProduct \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Logistic;
