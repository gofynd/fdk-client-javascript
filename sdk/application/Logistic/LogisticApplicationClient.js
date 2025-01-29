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
      createShipments:
        "/service/application/logistics/v1.0/company/{company_id}/application/{application_id}/shipments",
      getAllCountries: "/service/application/logistics/v1.0/country-list",
      getCountries: "/service/application/logistics/v2.0/countries",
      getCountry:
        "/service/application/logistics/v1.0/countries/{country_iso_code}",
      getDeliveryPromise:
        "/service/application/logistics/v1.0/delivery-promise",
      getGeoAreas:
        "/service/application/logistics/v1.0/company/{company_id}/application/{application_id}/geoareas",
      getLocalities:
        "/service/application/logistics/v1.0/localities/{locality_type}",
      getLocalitiesByPrefix: "/service/application/logistics/v1.0/localities",
      getLocality:
        "/service/application/logistics/v1.0/localities/{locality_type}/{locality_value}",
      getPincodeCity: "/service/application/logistics/v1.0/pincode/{pincode}",
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GenerateShipmentsAndCourierPartnerResponse>} - Success response
   * @name createShipments
   * @summary: Create and return shipments.
   * @description: Create and return shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/createShipments/).
   */
  async createShipments(
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
        url: this._urls["createShipments"],
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
   * @returns {Promise<CountryListResponse>} - Success response
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
   * @summary: Get all countries and associated data.
   * @description: Retrieve a list of countries for logistical purposes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCountries/).
   */
  async getCountries(
    { onboard, pageNo, pageSize, q, hierarchy, requestHeaders } = {
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
    query_params["onboard"] = onboard;
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
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.onboard] - Only fetch countries which allowed for
   *   onboard on Platform.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 12
   * @param {string} [arg.q] - The search string to search in the list of
   *   countries by name.
   * @param {string} [arg.hierarchy] - The search filter to filter countries
   *   based on their available hierarchy.
   * @returns {Paginator<GetCountries>}
   * @summary: Get all countries and associated data.
   * @description: Retrieve a list of countries for logistical purposes.
   */
  getCountriesPaginator({ onboard, pageSize, q, hierarchy } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCountries({
        onboard: onboard,
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
   * @returns {Promise<GeoAreaGetResponseBody>} - Success response
   * @name getGeoAreas
   * @summary: Get all geoareas in the current application.
   * @description: Retrieves a listing view of created GeoAreas. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getGeoAreas/).
   */
  async getGeoAreas(
    {
      applicationId,
      companyId,
      pageSize,
      pageNo,
      type,
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
    let invalidInput = [];

    if (!applicationId) {
      invalidInput.push({
        message: `The 'applicationId' field is required.`,
        path: ["applicationId"],
      });
    }
    if (!companyId) {
      invalidInput.push({
        message: `The 'companyId' field is required.`,
        path: ["companyId"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;
    query_params["type"] = type;
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GetLocalities>} - Success response
   * @name getLocalities
   * @summary: Get Localities
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
      name,
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
    query_params["name"] = name;

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
   * @param {Object} arg - Arg object.
   * @param {string} arg.localityType - Unique geographical division.
   * @param {string} [arg.country] - Country name.
   * @param {string} [arg.state] - State or the province.
   * @param {string} [arg.city] - City.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 12.
   * @param {string} [arg.q] - This parameter is used to filter or search the records.
   * @param {string} [arg.name] - Search for localities. Either provide a full
   *   name or a search term.
   * @returns {Paginator<GetLocalities>}
   * @summary: Get Localities
   * @description: Get geographical data for a specific type of locality based on the provided filters. For instance, obtain a list of cities for a given country and state.
   */
  getLocalitiesPaginator({
    localityType,
    country,
    state,
    city,
    pageSize,
    q,
    name,
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GetLocalities>} - Success response
   * @name getLocalitiesByPrefix
   * @summary: Get Localities by Name Prefix
   * @description: Get localities that start with a specified prefix. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocalitiesByPrefix/).
   */
  async getLocalitiesByPrefix(
    { companyId, pageNo, pageSize, q, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!companyId) {
      invalidInput.push({
        message: `The 'companyId' field is required.`,
        path: ["companyId"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLocalitiesByPrefix"],
        params: { companyId },
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
   * @param {Object} arg - Arg object.
   * @param {number} arg.companyId - The unique identifier of the company.
   * @param {number} [arg.pageSize] - Number of items per page.
   * @param {string} [arg.q] - Localities starting with the specified prefix.
   * @returns {Paginator<GetLocalities>}
   * @summary: Get Localities by Name Prefix
   * @description: Get localities that start with a specified prefix.
   */
  getLocalitiesByPrefixPaginator({ companyId, pageSize, q } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getLocalitiesByPrefix({
        companyId: companyId,
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
   * @returns {Promise<PincodeApiResponse>} - Success response
   * @name getPincodeCity
   * @summary: Get Pincode API
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
   * @returns {Promise<ListViewResponseV2>} - Success response
   * @name getZones
   * @summary: Shows zones defined at the application level
   * @description: Displays the list of zones defined at the application level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getZones/).
   */
  async getZones(
    {
      companyId,
      applicationId,
      stage,
      type,
      pageSize,
      pageNo,
      isActive,
      q,
      countryIsoCode,
      pincode,
      state,
      city,
      sector,
      requestHeaders,
    } = { requestHeaders: {} },
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
    query_params["stage"] = stage;
    query_params["type"] = type;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;
    query_params["is_active"] = isActive;
    query_params["q"] = q;
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ValidateAddressRequest>} - Success response
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
