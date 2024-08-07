const Joi = require("joi");

/**
 * @typedef ApplicationResponse
 * @property {Application} [application]
 */

/**
 * @typedef Domain
 * @property {boolean} [verified] - Whether domain is verified or not. TXT and A
 *   records should propagate correctly.
 * @property {boolean} [is_primary] - Whether domain is primary or not. Primary
 *   domain is the default/main domain.
 * @property {boolean} [is_shortlink] - Whether shortlink is present or not for
 *   the domain.
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the domain.
 * @property {string} [name] - The name of the domain.
 * @property {boolean} [is_predefined] - Whether domain is hosting domain or not.
 */

/**
 * @typedef ApplicationWebsite
 * @property {boolean} [enabled] - Whether sales channel website URL is enabled or not.
 * @property {string} [basepath] - Base path for the current sales channel website.
 */

/**
 * @typedef ApplicationCors
 * @property {string[]} [domains] - List of all domains added to the sales channel.
 */

/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled] - Whether sales channel auth is enabled or not enabled.
 */

/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from] - Old domain URL of the sales channel.
 * @property {string} [redirect_to] - New domain URL of the sales channel. Users
 *   will be automatically redirected from old domain to new domain.
 * @property {string} [type] - It shows domain redirection type. Permanent
 *   redirection is for long time period redirection, and temporary redirection
 *   for a short time period.
 */

/**
 * @typedef ApplicationMeta
 * @property {string} [name] - Indicates the name of application meta.
 * @property {string} [value] - Value related to application meta name.
 */

/**
 * @typedef SecureUrl
 * @property {string} [secure_url] - Hosted URL of the image.
 */

/**
 * @typedef Application
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description] - Detailed information about the sales channel.
 * @property {string} [channel_type] - It indicates different channel types like
 *   store, website-and-mobile-apps. Default value is store.
 * @property {number} [cache_ttl] - Number of seconds until the key expires.
 * @property {boolean} [is_internal] - Whether a sales channel is internal or not.
 * @property {boolean} [is_active] - Whether a sales channel is active or not active.
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the sales channel.
 * @property {string} [name] - Name of the sales channel, e.g. Zenz Fashion.
 * @property {string} [owner] - The unique identifier (24-digit Mongo Object ID)
 *   of owner who owns the application.
 * @property {number} [company_id] - Numeric ID allotted to a business account
 *   where the sales channel exists.
 * @property {string} [token] - Randomly generated fixed-length string for sales
 *   channel. It is required and auto-generated.
 * @property {ApplicationRedirections[]} [redirections] - List of redirection
 *   configurations for the sales channel.
 * @property {ApplicationMeta[]} [meta] - List of metadata associated with the
 *   sales channel.
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel creation.
 * @property {string} [updated_at] - ISO 8601 timestamp of sales channel updation.
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains] - List of domains associated with the sales channel.
 * @property {string} [app_type] - It shows whether application is live or in
 *   development mode.
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 */

/**
 * @typedef NotFound
 * @property {string} [message] - Response message for not found.
 */

/**
 * @typedef BadRequest
 * @property {string} [message] - Failure message (in a string format).
 */

/**
 * @typedef LocationDefaultLanguage
 * @property {string} [name] - Name of the language.
 * @property {string} [code] - Code of the language.
 */

/**
 * @typedef LocationDefaultCurrency
 * @property {string} [name] - The name of the currency.
 * @property {string} [symbol] - The symbol representing the currency.
 * @property {string} [code] - The ISO 4217 code for the currency.
 */

/**
 * @typedef LocationCountry
 * @property {string} [capital] - The capital of the country.
 * @property {string} [currency] - The currency code used in the country.
 * @property {string} [iso2] - The ISO 3166-1 alpha-2 code for the country.
 * @property {string} [iso3] - The ISO 3166-1 alpha-3 code for the country.
 * @property {string} [name] - The name of the country.
 * @property {string} [parent] - The parent country if this is a subnational
 *   entity (e.g., a territory or region).
 * @property {string} [phone_code] - The international dialing code for the country.
 * @property {string} [type] - The type of location, which is a country in this context.
 * @property {number} [uid] - A unique identifier for the country.
 * @property {number} [__v] - Version key for tracking revisions.
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   for the country.
 * @property {LocationDefaultCurrency} [default_currency]
 * @property {LocationDefaultLanguage} [default_language]
 * @property {string} [state_code] - The code representing the state or region
 *   within the country, if applicable.
 * @property {string} [country_code] - The country code used for the country.
 * @property {string} [latitude] - The latitude of the store's location.
 * @property {string} [longitude] - The longitude of the store's location.
 */

/**
 * @typedef Locations
 * @property {LocationCountry[]} [items] - A list of country location details.
 */

class CommonApplicationModel {
  /** @returns {ApplicationResponse} */
  static ApplicationResponse() {
    return Joi.object({
      application: CommonApplicationModel.Application(),
    });
  }

  /** @returns {Domain} */
  static Domain() {
    return Joi.object({
      verified: Joi.boolean(),
      is_primary: Joi.boolean(),
      is_shortlink: Joi.boolean(),
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      is_predefined: Joi.boolean(),
    });
  }

  /** @returns {ApplicationWebsite} */
  static ApplicationWebsite() {
    return Joi.object({
      enabled: Joi.boolean(),
      basepath: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationCors} */
  static ApplicationCors() {
    return Joi.object({
      domains: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ApplicationAuth} */
  static ApplicationAuth() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {ApplicationRedirections} */
  static ApplicationRedirections() {
    return Joi.object({
      redirect_from: Joi.string().allow(""),
      redirect_to: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationMeta} */
  static ApplicationMeta() {
    return Joi.object({
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {SecureUrl} */
  static SecureUrl() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
    });
  }

  /** @returns {Application} */
  static Application() {
    return Joi.object({
      website: CommonApplicationModel.ApplicationWebsite(),
      cors: CommonApplicationModel.ApplicationCors(),
      auth: CommonApplicationModel.ApplicationAuth(),
      description: Joi.string().allow(""),
      channel_type: Joi.string().allow(""),
      cache_ttl: Joi.number(),
      is_internal: Joi.boolean(),
      is_active: Joi.boolean(),
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      owner: Joi.string().allow(""),
      company_id: Joi.number(),
      token: Joi.string().allow(""),
      redirections: Joi.array().items(
        CommonApplicationModel.ApplicationRedirections()
      ),
      meta: Joi.array().items(CommonApplicationModel.ApplicationMeta()),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      __v: Joi.number(),
      banner: CommonApplicationModel.SecureUrl(),
      logo: CommonApplicationModel.SecureUrl(),
      favicon: CommonApplicationModel.SecureUrl(),
      domains: Joi.array().items(CommonApplicationModel.Domain()),
      app_type: Joi.string().allow(""),
      mobile_logo: CommonApplicationModel.SecureUrl(),
      domain: CommonApplicationModel.Domain(),
    });
  }

  /** @returns {NotFound} */
  static NotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {BadRequest} */
  static BadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {LocationDefaultLanguage} */
  static LocationDefaultLanguage() {
    return Joi.object({
      name: Joi.string().allow(""),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {LocationDefaultCurrency} */
  static LocationDefaultCurrency() {
    return Joi.object({
      name: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {LocationCountry} */
  static LocationCountry() {
    return Joi.object({
      capital: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      name: Joi.string().allow(""),
      parent: Joi.string().allow(""),
      phone_code: Joi.string().allow(""),
      type: Joi.string().allow(""),
      uid: Joi.number(),
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      default_currency: CommonApplicationModel.LocationDefaultCurrency(),
      default_language: CommonApplicationModel.LocationDefaultLanguage(),
      state_code: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
    });
  }

  /** @returns {Locations} */
  static Locations() {
    return Joi.object({
      items: Joi.array().items(CommonApplicationModel.LocationCountry()),
    });
  }
}
module.exports = CommonApplicationModel;
