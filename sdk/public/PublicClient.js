const axios = require("axios");
const camelCase = require("camelcase");
const { ConfigurationValidator, WebhookValidator } = require("./PublicModels");

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
      { abortEarly: false }
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
      { abortEarly: false }
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
      { abortEarly: false }
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
      { abortEarly: false }
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

module.exports = PublicClient;
