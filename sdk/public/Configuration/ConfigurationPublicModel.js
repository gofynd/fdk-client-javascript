const Joi = require("joi");

/**
 * @typedef ApplicationResponseSchema
 * @property {Application} [application]
 */

/**
 * @typedef Domain
 * @property {boolean} [verified] - Indicates domain is verified or not. TXT and
 *   A records should propagate correctly.
 * @property {boolean} [is_primary] - Indicates domain is primary or not.
 *   Primary domain is the default/main domain.
 * @property {boolean} [is_shortlink] - Shortlink is present or not for the domain
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the domain
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
 *   sales channel.
 * @property {string} [channel_type] - It indicates different channel types like
 *   store, website-and-mobile-apps. Default value is store
 * @property {number} [cache_ttl] - An integer value that specifies the number
 *   of seconds until the key expires
 * @property {boolean} [is_internal] - Indicates whether a sales channel is
 *   internal or not
 * @property {boolean} [is_active] - Indicates sales channel is active or not active
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the sales channel
 * @property {string} [name] - Name of the sales channel, e.g. Zenz Fashion
 * @property {string} [owner] - The unique identifier (24-digit Mongo Object ID)
 *   of owner who owns the application
 * @property {number} [company_id] - Numeric ID allotted to a business account
 *   where the sales channel exists
 * @property {string} [token] - Random generated fix length string for sales
 *   channel. It is required and auto-generated.
 * @property {ApplicationRedirections[]} [redirections]
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel creation
 * @property {string} [modified_at] - ISO 8601 timestamp of sales channel updation
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains]
 * @property {string} [app_type] - It shows application is live or in development mode.
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 * @property {string} [slug]
 * @property {string} [mode]
 * @property {string} [status]
 * @property {TokenSchema[]} [tokens]
 */

/**
 * @typedef TokenSchema
 * @property {string} [token]
 * @property {Object} [created_by]
 * @property {string} [created_at] - ISO 8601 timestamp of when token created
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
 * @property {LocationCountry[]} [items]
 */

/**
 * @typedef VersionApplication
 * @property {string} [name]
 * @property {string} [version]
 */

/**
 * @typedef VersionDeviceOS
 * @property {string} [name]
 */

/**
 * @typedef VersionDevice
 * @property {VersionDeviceOS} [os]
 */

/**
 * @typedef VersionRequestSchema
 * @property {VersionApplication} application
 * @property {VersionDevice} device
 */

/**
 * @typedef VersionUpdateDialogue
 * @property {string} [type]
 * @property {number} [interval]
 */

/**
 * @typedef VersionResponseSchema
 * @property {string} type
 * @property {string} title
 * @property {string} description
 * @property {VersionUpdateDialogue} update_dialog
 * @property {boolean} is_app_blocked
 */

class ConfigurationPublicModel {
  /** @returns {ApplicationResponseSchema} */
  static ApplicationResponseSchema() {
    return Joi.object({
      application: ConfigurationPublicModel.Application(),
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
      website: ConfigurationPublicModel.ApplicationWebsite(),
      cors: ConfigurationPublicModel.ApplicationCors(),
      auth: ConfigurationPublicModel.ApplicationAuth(),
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
        ConfigurationPublicModel.ApplicationRedirections()
      ),
      meta: Joi.array().items(ConfigurationPublicModel.ApplicationMeta()),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
      banner: ConfigurationPublicModel.SecureUrl(),
      logo: ConfigurationPublicModel.SecureUrl(),
      favicon: ConfigurationPublicModel.SecureUrl(),
      domains: Joi.array().items(ConfigurationPublicModel.Domain()),
      app_type: Joi.string().allow(""),
      mobile_logo: ConfigurationPublicModel.SecureUrl(),
      domain: ConfigurationPublicModel.Domain(),
      slug: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      status: Joi.string().allow(""),
      tokens: Joi.array().items(ConfigurationPublicModel.TokenSchema()),
    });
  }

  /** @returns {TokenSchema} */
  static TokenSchema() {
    return Joi.object({
      token: Joi.string().allow(""),
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_at: Joi.string().allow(""),
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
      default_currency: ConfigurationPublicModel.LocationDefaultCurrency(),
      default_language: ConfigurationPublicModel.LocationDefaultLanguage(),
      state_code: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
    });
  }

  /** @returns {Locations} */
  static Locations() {
    return Joi.object({
      items: Joi.array().items(ConfigurationPublicModel.LocationCountry()),
    });
  }

  /** @returns {VersionApplication} */
  static VersionApplication() {
    return Joi.object({
      name: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {VersionDeviceOS} */
  static VersionDeviceOS() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }

  /** @returns {VersionDevice} */
  static VersionDevice() {
    return Joi.object({
      os: ConfigurationPublicModel.VersionDeviceOS(),
    });
  }

  /** @returns {VersionRequestSchema} */
  static VersionRequestSchema() {
    return Joi.object({
      application: ConfigurationPublicModel.VersionApplication().required(),
      device: ConfigurationPublicModel.VersionDevice().required(),
    });
  }

  /** @returns {VersionUpdateDialogue} */
  static VersionUpdateDialogue() {
    return Joi.object({
      type: Joi.string().allow(""),
      interval: Joi.number(),
    });
  }

  /** @returns {VersionResponseSchema} */
  static VersionResponseSchema() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
      update_dialog: ConfigurationPublicModel.VersionUpdateDialogue().required(),
      is_app_blocked: Joi.boolean().required(),
    });
  }
}
module.exports = ConfigurationPublicModel;
