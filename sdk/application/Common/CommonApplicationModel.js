const Joi = require("joi");

class CommonModel {
  static Application() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      app_type: Joi.string().allow(""),
      auth: CommonModel.ApplicationAuth(),
      banner: CommonModel.SecureUrl(),
      cache_ttl: Joi.number(),
      channel_type: Joi.string().allow(""),
      company_id: Joi.number(),
      cors: CommonModel.ApplicationCors(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      domain: CommonModel.Domain(),
      domains: Joi.array().items(CommonModel.Domain()),
      favicon: CommonModel.SecureUrl(),
      is_active: Joi.boolean(),
      is_internal: Joi.boolean(),
      logo: CommonModel.SecureUrl(),
      meta: Joi.array().items(CommonModel.ApplicationMeta()),
      mobile_logo: CommonModel.SecureUrl(),
      name: Joi.string().allow(""),
      owner: Joi.string().allow(""),
      redirections: Joi.array().items(CommonModel.ApplicationRedirections()),
      token: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      website: CommonModel.ApplicationWebsite(),
    });
  }
  static ApplicationAuth() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }
  static ApplicationCors() {
    return Joi.object({
      domains: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ApplicationMeta() {
    return Joi.object({
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static ApplicationRedirections() {
    return Joi.object({
      redirect_from: Joi.string().allow(""),
      redirect_to: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static ApplicationResponse() {
    return Joi.object({
      application: CommonModel.Application(),
    });
  }
  static ApplicationWebsite() {
    return Joi.object({
      basepath: Joi.string().allow(""),
      enabled: Joi.boolean(),
    });
  }
  static BadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
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
  static LocationCountry() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      capital: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      default_currency: CommonModel.LocationDefaultCurrency(),
      default_language: CommonModel.LocationDefaultLanguage(),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      name: Joi.string().allow(""),
      parent: Joi.string().allow(""),
      phone_code: Joi.string().allow(""),
      type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static LocationDefaultCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
    });
  }
  static LocationDefaultLanguage() {
    return Joi.object({
      code: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static Locations() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),
    });
  }
  static NotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
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
  static SecureUrl() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
    });
  }
}
module.exports = CommonModel;
