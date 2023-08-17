const Joi = require("joi");

/**
 * @typedef Application
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the sales channel
 * @property {string} [app_type] - It shows whether application is live or in
 *   development mode
 * @property {ApplicationAuth} [auth]
 * @property {SecureUrl} [banner]
 * @property {number} [cache_ttl] - An integer value that specifies the number
 *   of seconds until the key expires
 * @property {string} [channel_type] - It indicates different channel types like
 *   store, website-and-mobile-apps. Default value is store.
 * @property {number} [company_id] - Numeric ID allotted to a business account
 *   where the sales channel exists
 * @property {ApplicationCors} [cors]
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel creation
 * @property {string} [description] - It contains detailed information about the
 *   sales channel
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {SecureUrl} [favicon]
 * @property {boolean} [is_active] - Indicates whether a sales channel is active
 *   or not active
 * @property {boolean} [is_internal] - Indicates whether a sales channel is
 *   internal or not
 * @property {SecureUrl} [logo]
 * @property {ApplicationMeta[]} [meta]
 * @property {SecureUrl} [mobile_logo]
 * @property {string} [name] - Name of the sales channel, e.g. Zenz Fashion
 * @property {string} [owner] - The unique identifier (24-digit Mongo Object ID)
 *   of owner who owns the application
 * @property {ApplicationRedirections[]} [redirections]
 * @property {string} [slug]
 * @property {string} [token] - Randomly generated fixed-length string for sales
 *   channel. It is required and auto-generated.
 * @property {string} [updated_at] - ISO 8601 timestamp of sales channel updation
 * @property {ApplicationWebsite} [website]
 */

/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled] - Shows sales channel auth is enabled or not enabled.
 */

/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */

/**
 * @typedef ApplicationMeta
 * @property {string} [name] - Indicates the name of application meta
 * @property {string} [value] - Value related to application meta name
 */

/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from] - Old domain URL of the sales channel
 * @property {string} [redirect_to] - New domain URL of the sales channel. Users
 *   will be automatically redirected from old domain to new domain.
 * @property {string} [type] - It shows domain redirection type. Permanent
 *   redirection is for long time period redirection, and temporary redirection
 *   for a short time period.
 */

/**
 * @typedef ApplicationResponse
 * @property {Application} [application]
 */

/**
 * @typedef ApplicationWebsite
 * @property {string} [basepath] - Base path for the current sales channel website
 * @property {boolean} [enabled] - Shows whether sales channel website URL is
 *   enabled or not
 */

/**
 * @typedef BadRequest
 * @property {string} [message] - Failure message (in a string format)
 */

/**
 * @typedef Currency
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the current sales channel supported currency
 * @property {string} [code] - 3-character currency code, e.g. INR, USD, EUR.
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel support
 *   currency creation
 * @property {number} [decimal_digits] - Acceptable decimal limits for a given
 *   currency, e.g. 1.05$ means upto 2 decimal digits can be accepted as a valid
 *   value of a currency.
 * @property {boolean} [is_active] - Shows currency is enabled or not in current
 *   sales channel
 * @property {string} [name] - Name of the currency, e.g. Indian Rupee
 * @property {string} [symbol] - Unique symbol for identifying the currency, e.g. ₹
 * @property {string} [updated_at] - ISO 8601 timestamp of sales channel support
 *   currency updation
 */

/**
 * @typedef Domain
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the domain
 * @property {boolean} [is_predefined] - Domain is hosting domain or not
 * @property {boolean} [is_primary] - Indicates domain is primary or not.
 *   Primary domain is the default/main domain.
 * @property {boolean} [is_shortlink] - Shortlink is present or not for the domain
 * @property {string} [name]
 * @property {boolean} [verified] - Indicates domain is verified or not. TXT and
 *   A records should propagate correctly.
 */

/**
 * @typedef LocationCountry
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [capital]
 * @property {string} [country_code]
 * @property {string} [currency]
 * @property {LocationDefaultCurrency} [default_currency]
 * @property {LocationDefaultLanguage} [default_language]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [latitude]
 * @property {string} [longitude]
 * @property {string} [name]
 * @property {string} [parent]
 * @property {string} [phone_code]
 * @property {string} [state_code]
 * @property {string} [type]
 * @property {number} [uid]
 */

/**
 * @typedef LocationDefaultCurrency
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [symbol]
 */

/**
 * @typedef LocationDefaultLanguage
 * @property {string} [code]
 * @property {string} [name]
 */

/**
 * @typedef Locations
 * @property {Object[]} [items]
 */

/**
 * @typedef NotFound
 * @property {string} [message] - Response message for not found
 */

/**
 * @typedef Page
 * @property {number} [current] - Current page number
 * @property {boolean} [has_next] - Next page is present or not
 * @property {boolean} [has_previous] - Previous page is present or not
 * @property {number} [item_total] - Total number of items to retrieve
 * @property {string} [next_id] - Next page ID
 * @property {number} [size] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {string} type - Page type
 */

/**
 * @typedef SecureUrl
 * @property {string} [secure_url] - Hosted URL of the image
 */

class ConfigurationPublicModel {
  /** @returns {Application} */
  static Application() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      app_type: Joi.string().allow(""),
      auth: ConfigurationPublicModel.ApplicationAuth(),
      banner: ConfigurationPublicModel.SecureUrl(),
      cache_ttl: Joi.number(),
      channel_type: Joi.string().allow(""),
      company_id: Joi.number(),
      cors: ConfigurationPublicModel.ApplicationCors(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      domain: ConfigurationPublicModel.Domain(),
      domains: Joi.array().items(ConfigurationPublicModel.Domain()),
      favicon: ConfigurationPublicModel.SecureUrl(),
      is_active: Joi.boolean(),
      is_internal: Joi.boolean(),
      logo: ConfigurationPublicModel.SecureUrl(),
      meta: Joi.array().items(ConfigurationPublicModel.ApplicationMeta()),
      mobile_logo: ConfigurationPublicModel.SecureUrl(),
      name: Joi.string().allow(""),
      owner: Joi.string().allow(""),
      redirections: Joi.array().items(
        ConfigurationPublicModel.ApplicationRedirections()
      ),
      slug: Joi.string().allow(""),
      token: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      website: ConfigurationPublicModel.ApplicationWebsite(),
    });
  }

  /** @returns {ApplicationAuth} */
  static ApplicationAuth() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {ApplicationCors} */
  static ApplicationCors() {
    return Joi.object({
      domains: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ApplicationMeta} */
  static ApplicationMeta() {
    return Joi.object({
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
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

  /** @returns {ApplicationResponse} */
  static ApplicationResponse() {
    return Joi.object({
      application: ConfigurationPublicModel.Application(),
    });
  }

  /** @returns {ApplicationWebsite} */
  static ApplicationWebsite() {
    return Joi.object({
      basepath: Joi.string().allow(""),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {BadRequest} */
  static BadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Currency} */
  static Currency() {
    return Joi.object({
      _id: Joi.string().allow(""),
      code: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      decimal_digits: Joi.number(),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {Domain} */
  static Domain() {
    return Joi.object({
      _id: Joi.string().allow(""),
      is_predefined: Joi.boolean(),
      is_primary: Joi.boolean(),
      is_shortlink: Joi.boolean(),
      name: Joi.string().allow(""),
      verified: Joi.boolean(),
    });
  }

  /** @returns {LocationCountry} */
  static LocationCountry() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      capital: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      default_currency: ConfigurationPublicModel.LocationDefaultCurrency(),
      default_language: ConfigurationPublicModel.LocationDefaultLanguage(),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
      name: Joi.string().allow(""),
      parent: Joi.string().allow(""),
      phone_code: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {LocationDefaultCurrency} */
  static LocationDefaultCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
    });
  }

  /** @returns {LocationDefaultLanguage} */
  static LocationDefaultLanguage() {
    return Joi.object({
      code: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Locations} */
  static Locations() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {NotFound} */
  static NotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {SecureUrl} */
  static SecureUrl() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
    });
  }
}
module.exports = ConfigurationPublicModel;
