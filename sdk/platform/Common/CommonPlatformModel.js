const Joi = require("joi");

/**
 * @typedef ApplicationResponseSchema
 * @property {Application} [application]
 * @property {string} [_id] - The unique identifier of the current sales channel
 *   supported currency
 * @property {boolean} [is_active] - Shows currency is enabled or not in current
 *   sales channel
 * @property {string} [name] - Name of the currency, e.g. Indian Rupee
 * @property {string} [code] - 3-character currency code, e.g. INR, USD, EUR.
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel support
 *   currency creation
 * @property {string} [updated_at] - ISO 8601 timestamp of sales channel support
 *   currency updation
 * @property {number} [decimal_digits] - Acceptable decimal limits for a given
 *   currency, e.g. 1.05$ means upto 2 decimal digits can be accepted as a valid
 *   value of a currency.
 * @property {string} [symbol] - Unique symbol for identifying the currency, e.g. ₹
 */

/**
 * @typedef Domain
 * @property {boolean} [verified] - Indicates domain is verified or not. TXT and
 *   A records should propagate correctly.
 * @property {boolean} [is_primary] - Indicates domain is primary or not.
 *   Primary domain is the default/main domain.
 * @property {boolean} [is_shortlink] - Shortlink is present or not for the domain
 * @property {string} [_id] - The unique identifier of the domain
 * @property {string} [name]
 * @property {boolean} [is_predefined] - Domain is hosting domain or not
 */

/**
 * @typedef ApplicationWebsite
 * @property {boolean} [enabled] - Shows whether sales channel website URL is
 *   enabled or not
 * @property {string} [basepath] - Base path for the current sales channel website
 */

/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */

/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled] - Shows sales channel auth is enabled or not enabled.
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
 * @typedef RegionDetails
 * @property {string} [slug] - Region slug identifier.
 * @property {string} [zone] - Zone identifier within the region.
 */

/**
 * @typedef ApplicationMeta
 * @property {string} [name] - Indicates the name of application meta
 * @property {string} [value] - Value related to application meta name
 */

/**
 * @typedef SecureUrl
 * @property {string} [secure_url] - Hosted URL of the image
 */

/**
 * @typedef Application
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description] - It contains detailed information about the
 *   sales channel
 * @property {string} [channel_type] - It indicates different channel types like
 *   store, website-and-mobile-apps. Default value is store.
 * @property {number} [cache_ttl] - An integer value that specifies the number
 *   of seconds until the key expires
 * @property {boolean} [is_internal] - Indicates whether a sales channel is
 *   internal or not
 * @property {boolean} [is_active] - Indicates whether a sales channel is active
 *   or not active
 * @property {string} [_id] - The unique identifier of the sales channel
 * @property {string} [name] - Name of the sales channel, e.g. Zenz Fashion
 * @property {string} [owner] - The unique identifier of owner who owns the application
 * @property {number} [company_id] - Numeric ID allotted to a business account
 *   where the sales channel exists
 * @property {string} [token] - Randomly generated fixed-length string for sales
 *   channel. It is required and auto-generated.
 * @property {ApplicationRedirections[]} [redirections]
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel creation
 * @property {string} [updated_at] - ISO 8601 timestamp of sales channel updation
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains]
 * @property {string} [app_type] - It shows whether application is live or in
 *   development mode
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 */

/**
 * @typedef NotFound
 * @property {string} [message] - Response message for not found
 */

/**
 * @typedef BadRequestSchema
 * @property {string} [message] - Failure message (in a string format)
 */

/**
 * @typedef LocationDefaultLanguage
 * @property {string} [name]
 * @property {string} [code]
 */

/**
 * @typedef LocationDefaultCurrency
 * @property {string} [name]
 * @property {string} [symbol]
 * @property {string} [code]
 */

/**
 * @typedef LocationCountry
 * @property {string} [capital]
 * @property {string} [currency]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [name]
 * @property {string} [parent]
 * @property {string} [phone_code]
 * @property {string} [type]
 * @property {number} [uid]
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {LocationDefaultCurrency} [default_currency]
 * @property {LocationDefaultLanguage} [default_language]
 * @property {string} [state_code]
 * @property {string} [country_code]
 * @property {string} [latitude]
 * @property {string} [longitude]
 */

/**
 * @typedef Locations
 * @property {LocationCountry[]} [items] - Object Containing Country Locations Details
 */

class CommonPlatformModel {
  /** @returns {ApplicationResponseSchema} */
  static ApplicationResponseSchema() {
    return Joi.object({
      application: CommonPlatformModel.Application(),
      _id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      code: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      decimal_digits: Joi.number(),
      symbol: Joi.string().allow(""),
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

  /** @returns {RegionDetails} */
  static RegionDetails() {
    return Joi.object({
      slug: Joi.string().allow(""),
      zone: Joi.string().allow(""),
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
      website: CommonPlatformModel.ApplicationWebsite(),
      cors: CommonPlatformModel.ApplicationCors(),
      auth: CommonPlatformModel.ApplicationAuth(),
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
        CommonPlatformModel.ApplicationRedirections()
      ),
      meta: Joi.array().items(CommonPlatformModel.ApplicationMeta()),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      __v: Joi.number(),
      banner: CommonPlatformModel.SecureUrl(),
      logo: CommonPlatformModel.SecureUrl(),
      favicon: CommonPlatformModel.SecureUrl(),
      domains: Joi.array().items(CommonPlatformModel.Domain()),
      app_type: Joi.string().allow(""),
      mobile_logo: CommonPlatformModel.SecureUrl(),
      domain: CommonPlatformModel.Domain(),
    });
  }

  /** @returns {NotFound} */
  static NotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {BadRequestSchema} */
  static BadRequestSchema() {
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
      default_currency: CommonPlatformModel.LocationDefaultCurrency(),
      default_language: CommonPlatformModel.LocationDefaultLanguage(),
      state_code: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
    });
  }

  /** @returns {Locations} */
  static Locations() {
    return Joi.object({
      items: Joi.array().items(CommonPlatformModel.LocationCountry()),
    });
  }
}
module.exports = CommonPlatformModel;
