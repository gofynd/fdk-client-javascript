const axios = require("axios");
const camelCase = require("camelcase");
const {
  ConfigurationValidator,
  WebhookValidator,
  InventoryValidator,
} = require("./PublicModels");

const PublicAPIClient = require("./PublicAPIClient");
const Paginator = require("../common/Paginator");
const { FDKClientValidationError } = require("../common/FDKError");

const constructUrl = ({ url, params }) => {
  return url
    .split("/")
    .map((word) => {
      if (word[0] === "{" && word[word.length - 1] === "}") {
        word = params[camelCase(word.slice(1, word.length - 1))];
      }
      return word;
    })
    .join("/");
};

class PublicClient {
  constructor(config) {
    this.config = config;
    this.configuration = new Configuration(config);
    this.webhook = new Webhook(config);
    this.inventory = new Inventory(config);
  }

  setExtraHeaders(header) {
    if (typeof header === "object") {
      this.config.extraHeaders.push(header);
    } else {
      throw new FDKClientValidationError("Context value should be an object");
    }
  }
}

class Configuration {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      searchApplication:
        "/service/common/configuration/v1.0/application/search-application",
      getLocations: "/service/common/configuration/v1.0/location",
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
   * @param {string} [arg.authorization] -
   * @param {string} [arg.query] - Provide application name
   * @returns {Promise<ApplicationResponse>} - Success response
   * @summary: Search Application
   * @description: Provide application name or domain url
   */
  searchApplication({ authorization, query } = {}) {
    const { error } = ConfigurationValidator.searchApplication().validate(
      { authorization, query },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["query"] = query;

    return PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["searchApplication"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.locationType] - Provide location type to query on.
   *   Possible values : country, state, city
   * @param {string} [arg.id] - Field is optional when location_type is
   *   country. If querying for state, provide id of country. If querying for
   *   city, provide id of state.
   * @returns {Promise<Locations>} - Success response
   * @summary: Get countries, states, cities
   * @description:
   */
  getLocations({ locationType, id } = {}) {
    const { error } = ConfigurationValidator.getLocations().validate(
      { locationType, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["location_type"] = locationType;
    query_params["id"] = id;

    return PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLocations"],
        params: {},
      }),
      query_params,
      undefined
    );
  }
}

class Webhook {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      fetchAllWebhookEvents: "/service/common/webhook/v1.0/events",
      queryWebhookEventDetails:
        "/service/common/webhook/v1.0/events/query-event-details",
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
   * @returns {Promise<EventConfigResponse>} - Success response
   * @summary: Get All Webhook Events
   * @description: Get All Webhook Events
   */
  fetchAllWebhookEvents({} = {}) {
    const { error } = WebhookValidator.fetchAllWebhookEvents().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["fetchAllWebhookEvents"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EventConfigBase[]} arg.body
   * @returns {Promise<EventConfigResponse>} - Success response
   * @summary: Send webhook event name, type, version, category in request body to get complete details of event from server
   * @description: Get Webhook Event Details for provided events
   */
  queryWebhookEventDetails({ body } = {}) {
    const { error } = WebhookValidator.queryWebhookEventDetails().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return PublicAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["queryWebhookEventDetails"],
        params: {},
      }),
      query_params,
      body
    );
  }
}

class Inventory {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getConfigByApiKey: "/service/common/inventory/v1.0/company/slingshot",
      getApiKey: "/service/common/inventory/v1.0/company/slingshot/apikey",
      getJobByCode: "/service/common/inventory/v1.0/company/jobs/code/{code}",
      getJobConfigByIntegrationType:
        "/service/common/inventory/v1.0/company/job/config",
      getJobCodesMetrics:
        "/service/common/inventory/v1.0/company/email/jobCode",
      saveJobCodesMetrics:
        "/service/common/inventory/v1.0/company/email/jobCode",
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
   * @param {string} arg.apikey - Api key
   * @returns {Promise<ResponseEnvelopeSlingshotConfigurationDetail>} - Success response
   * @summary: Get Slingshot Configuration Of  A Company
   * @description: REST Endpoint that returns all configuration detail of a company
   */
  getConfigByApiKey({ apikey } = {}) {
    const { error } = InventoryValidator.getConfigByApiKey().validate(
      { apikey },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["apikey"] = apikey;

    return PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getConfigByApiKey"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.userName - Integration id
   * @param {string} arg.password - Company/store token
   * @returns {Promise<ResponseEnvelopeApikeyModel>} - Success response
   * @summary: Get Slingshot Configuration Of  A Company
   * @description: REST Endpoint that returns apikey by username by password
   */
  getApiKey({ userName, password } = {}) {
    const { error } = InventoryValidator.getApiKey().validate(
      { userName, password },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["user_name"] = userName;
    query_params["password"] = password;

    return PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getApiKey"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.code - Job Code
   * @returns {Promise<ResponseEnvelopeJobConfigDTO>} - Success response
   * @summary: Get Job Config By Code
   * @description: REST Endpoint that returns job config by code
   */
  getJobByCode({ code } = {}) {
    const { error } = InventoryValidator.getJobByCode().validate(
      { code },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getJobByCode"],
        params: { code },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.integrationType - Integration Type
   * @param {boolean} [arg.disable] - JobConfig current state
   * @returns {Promise<ResponseEnvelopeListJobConfigDTO>} - Success response
   * @summary: Get Job Configs By Integration Type
   * @description: REST Endpoint that returns all job Configs by Integration Type
   */
  getJobConfigByIntegrationType({ integrationType, disable } = {}) {
    const {
      error,
    } = InventoryValidator.getJobConfigByIntegrationType().validate(
      { integrationType, disable },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["integration_type"] = integrationType;
    query_params["disable"] = disable;

    return PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getJobConfigByIntegrationType"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.dailyJob] - Daily Job Flag
   * @param {string} [arg.jobCode] - Email Job Code
   * @returns {Promise<ResponseEnvelopeObject>} - Success response
   * @summary: Find all the JobCodes from Metrics Collection based on the field Values
   * @description: Endpoint to return all JobCodes present in Metrics Collection
   */
  getJobCodesMetrics({ dailyJob, jobCode } = {}) {
    const { error } = InventoryValidator.getJobCodesMetrics().validate(
      { dailyJob, jobCode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["daily_job"] = dailyJob;
    query_params["job_code"] = jobCode;

    return PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getJobCodesMetrics"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EmailJobMetrics} arg.body
   * @returns {Promise<ResponseEnvelopeEmailJobMetrics>} - Success response
   * @summary: Save JobCode Metrics
   * @description: Endpoint to save JobCode Metrics
   */
  saveJobCodesMetrics({ body } = {}) {
    const { error } = InventoryValidator.saveJobCodesMetrics().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return PublicAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["saveJobCodesMetrics"],
        params: {},
      }),
      query_params,
      body
    );
  }
}

module.exports = PublicClient;
