const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const ApplicationAPIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { validateRequiredParams } = require("../../common/Validator");

class Logistic {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAllCountries: "/service/application/logistics/v1.0/country-list",
      getCountries: "/service/application/logistics/v2.0/countries",
      getCountry:
        "/service/application/logistics/v1.0/countries/{country_iso_code}",
      getDeliveryPromise:
        "/service/application/logistics/v1.0/delivery-promise",
      getFulfillmentOptionStores:
        "/service/application/logistics/v1.0/fulfillment-options/{slug}/stores",
      getFulfillmentOptions:
        "/service/application/logistics/v1.0/fulfillment-options",
      getLocalities:
        "/service/application/logistics/v1.0/localities/{locality_type}",
      getLocality:
        "/service/application/logistics/v1.0/localities/{locality_type}/{locality_value}",
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
   * @returns {Promise<CountryResult>} - Success response
   * @name getAllCountries
   * @summary: Get deliverable countries
   * @description: Get a list of countries within the specified delivery zones for that application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getAllCountries/).
   */
  async getAllCountries(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
   * @description: List of supported countries. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getCountries/).
   */
  async getCountries(
    {
      onboarding,
      pageNo,
      pageSize,
      q,
      hierarchy,
      phoneCode,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};
    query_params["onboarding"] = onboarding;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["hierarchy"] = hierarchy;
    query_params["phone_code"] = phoneCode;

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
   * @description: Get details about a particular country and its address format customized for different business scenarios. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getCountry/).
   */
  async getCountry(
    { countryIsoCode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["countryIsoCode"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
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
   * @description: Delivery Promise Configurations involve estimating and communicating the anticipated delivery date or time to customers, taking into account parameters like store processing time, delivery partner time to delivery, and buffer time. This helps establish precise delivery expectations based on both the delivery partner's capabilities and the store's operations. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getDeliveryPromise/).
   */
  async getDeliveryPromise(
    { xLocationDetail, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};
    xHeaders["x-location-detail"] = xLocationDetail;

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
   * @returns {Promise<FulfillmentOptionStores>} - Success response
   * @name getFulfillmentOptionStores
   * @summary: Get Fulfillment Option Stores
   * @description: Fetches a paginated list of stores associated with a given fulfillment option slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getFulfillmentOptionStores/).
   */
  async getFulfillmentOptionStores(
    { slug, pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["slug"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
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
        url: this._urls["getFulfillmentOptionStores"],
        params: { slug },
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
   * @returns {Promise<FulfillmentOptionsList>} - Success response
   * @name getFulfillmentOptions
   * @summary: Get fulfillment options
   * @description: Fetches available fulfillment options. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getFulfillmentOptions/).
   */
  async getFulfillmentOptions(
    { xApplicationData, productSlug, storeId, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};
    query_params["product_slug"] = productSlug;
    query_params["store_id"] = storeId;

    const xHeaders = {};
    xHeaders["x-application-data"] = xApplicationData;

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFulfillmentOptions"],
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
   * @returns {Promise<GetLocalitiesApp>} - Success response
   * @name getLocalities
   * @summary: Get Localities
   * @description: Get Localities data. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getLocalities/).
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
      sector,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["localityType"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["country"] = country;
    query_params["state"] = state;
    query_params["city"] = city;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["sector"] = sector;

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
   * @returns {Promise<GetLocalityApp>} - Success response
   * @name getLocality
   * @summary: Get Locality API
   * @description: Get detailed geographical data for a specific locality, such as a pincode. For example, for a pincode value of 400603, the service returns its parent locations, including city, state, and country details. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getLocality/).
   */
  async getLocality(
    {
      localityType,
      localityValue,
      country,
      state,
      city,
      sector,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], [
      "localityType",
      "localityValue",
    ]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["country"] = country;
    query_params["state"] = state;
    query_params["city"] = city;
    query_params["sector"] = sector;

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
   * @returns {Promise<ValidateAddressDetails>} - Success response
   * @name validateAddress
   * @summary: Validate address
   * @description: Validate addresses using specific templates customized for each country and tailored to various business scenarios. This validation ensures that the data conforms to the information currently stored in the system. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/validateAddress/).
   */
  async validateAddress(
    { countryIsoCode, templateName, body, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], [
      "countryIsoCode",
      "templateName",
    ]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
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
