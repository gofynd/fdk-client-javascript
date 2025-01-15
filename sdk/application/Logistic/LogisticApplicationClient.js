const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const ApplicationAPIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");

class Logistic {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAllCountries: "/service/application/logistics/v1.0/country-list",
      getCountries: "/service/application/logistics/v2.0/countries",
      getCountry:
        "/service/application/logistics/v1.0/countries/{country_iso_code}",
      getCourierPartners:
        "/service/application/logistics/v1.0/company/{company_id}/application/{application_id}/shipment/courier-partners",
      getDeliveryPromise:
        "/service/application/logistics/v1.0/delivery-promise",
      getLocalities:
        "/service/application/logistics/v1.0/localities/{locality_type}",
      getLocality:
        "/service/application/logistics/v1.0/localities/{locality_type}/{locality_value}",
      getLocations: "/service/application/logistics/v1.0/locations",
      getOptimalLocations:
        "/service/application/logistics/v1.0/reassign_stores",
      getPincodeCity: "/service/application/logistics/v1.0/pincode/{pincode}",
      getPincodeZones: "/service/application/logistics/v1.0/pincode/zones",
      getTatProduct: "/service/application/logistics/v1.0/",
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CountryListResult>} - Success response
   * @name getAllCountries
   * @summary: Get deliverable countries
   * @description: Get a list of countries within the specified delivery zones for that application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getAllCountries/).
   */
  async getAllCountries(
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GetCountries>} - Success response
   * @name getCountries
   * @summary: Get countries
   * @description: List of supported countries. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCountries/).
   */
  async getCountries(
    { onboarding, pageNo, pageSize, q, hierarchy, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GetCountry>} - Success response
   * @name getCountry
   * @summary: Get country details
   * @description: Get details about a particular country and its address format customized for different business scenarios. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCountry/).
   */
  async getCountry(
    { countryIsoCode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!countryIsoCode) {
      invalidInput.push({
        message: `The 'countryIsoCode' field is required.`,
        path: ["countryIsoCode"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ShipmentCourierPartnerResult>} - Success response
   * @name getCourierPartners
   * @summary: Serviceable Courier Partners.
   * @description: Get all the serviceable courier partners of a destination and the shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCourierPartners/).
   */
  async getCourierPartners(
    { companyId, applicationId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!companyId) {
      invalidInput.push({
        message: `The 'companyId' field is required.`,
        path: ["companyId"],
      });
    }
    if (!applicationId) {
      invalidInput.push({
        message: `The 'applicationId' field is required.`,
        path: ["applicationId"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getCourierPartners"],
        params: { companyId, applicationId },
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GetPromiseDetails>} - Success response
   * @name getDeliveryPromise
   * @summary: Get delivery promise
   * @description: Get delivery promises for both global and store levels based on a specific locality type. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getDeliveryPromise/).
   */
  async getDeliveryPromise(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getDeliveryPromise"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GetLocalities>} - Success response
   * @name getLocalities
   * @summary: Get localities
   * @description: Get geographical data for a specific type of locality based on the provided filters. For instance, obtain a list of cities for a given country and state. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocalities/).
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
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!localityType) {
      invalidInput.push({
        message: `The 'localityType' field is required.`,
        path: ["localityType"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["country"] = country;
    query_params["state"] = state;
    query_params["city"] = city;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GetLocality>} - Success response
   * @name getLocality
   * @summary: Get locality detail
   * @description: Get detailed geographical data for a specific locality, such as a pincode. For example, for a pincode value of 400603, the service returns its parent locations, including city, state, and country details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocality/).
   */
  async getLocality(
    { localityType, localityValue, country, state, city, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!localityType) {
      invalidInput.push({
        message: `The 'localityType' field is required.`,
        path: ["localityType"],
      });
    }
    if (!localityValue) {
      invalidInput.push({
        message: `The 'localityValue' field is required.`,
        path: ["localityValue"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GetStoreResult>} - Success response
   * @name getLocations
   * @summary: Get available selling locations
   * @description: Get stores available for the application based on Delivery Zones and Order Orchestration rules. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocations/).
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
    let invalidInput = [];

    if (!xApplicationId) {
      invalidInput.push({
        message: `The 'xApplicationId' field is required.`,
        path: ["xApplicationId"],
      });
    }
    if (!xApplicationData) {
      invalidInput.push({
        message: `The 'xApplicationData' field is required.`,
        path: ["xApplicationData"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ReAssignStoreResult>} - Success response
   * @name getOptimalLocations
   * @summary: Get selling locations
   * @description: Get optimal fulfillment centre for customers by analyzing their location, product availability, and inventory levels. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getOptimalLocations/).
   */
  async getOptimalLocations(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PincodeDetails>} - Success response
   * @name getPincodeCity
   * @summary: Get pincode details
   * @description: Get details of a specific pincode, such as obtaining its city and state information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getPincodeCity/).
   */
  async getPincodeCity(
    { pincode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!pincode) {
      invalidInput.push({
        message: `The 'pincode' field is required.`,
        path: ["pincode"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GetZoneFromPincodeViewResult>} - Success response
   * @name getPincodeZones
   * @summary: Get zones
   * @description: Get the delivery zone associated with a given pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getPincodeZones/).
   */
  async getPincodeZones(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<TATViewResult>} - Success response
   * @name getTatProduct
   * @summary: Get product's turnaround time
   * @description: Get the estimated delivery time frame for a specific product from a designated store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getTatProduct/).
   */
  async getTatProduct(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ValidateAddressDetails>} - Success response
   * @name validateAddress
   * @summary: Validate address
   * @description: Validate addresses using specific templates customized for each country and tailored to various business scenarios. This validation ensures that the data conforms to the information currently stored in the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/validateAddress/).
   */
  async validateAddress(
    { countryIsoCode, templateName, body, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!countryIsoCode) {
      invalidInput.push({
        message: `The 'countryIsoCode' field is required.`,
        path: ["countryIsoCode"],
      });
    }
    if (!templateName) {
      invalidInput.push({
        message: `The 'templateName' field is required.`,
        path: ["templateName"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }
}

module.exports = Logistic;
