const Joi = require("joi");

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [total] - Total number of items.
 */

/**
 * @typedef CompanyListSchema
 * @property {Page} [page]
 * @property {CompanySchema[]} [items]
 */

/**
 * @typedef CompaniesSchema
 * @property {CompanySchema[]} [items]
 */

/**
 * @typedef ErrorResponseSchema
 * @property {string} [code]
 * @property {Object} [error]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 */

/**
 * @typedef PartnerCompanyDetailsRequestSchema
 * @property {number[]} [company_ids]
 */

/**
 * @typedef CompanySchema
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 * @property {UserSchema} [verified_by]
 * @property {UserSchema} [modified_by]
 * @property {UserSchema} [created_by]
 * @property {string} [name]
 * @property {string} company_type
 * @property {string} business_type
 * @property {CompanyDetails} [details]
 * @property {GetAddressSchema[]} [addresses]
 * @property {string[]} [market_channels]
 * @property {string[]} [notification_emails]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {Object} [_custom_json]
 * @property {BusinessCountryInfo} [business_country_info]
 */

/**
 * @typedef GetAddressSchema
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [pincode]
 * @property {string} [state]
 */

/**
 * @typedef BusinessCountryInfo
 * @property {string} country_code
 * @property {string} [country]
 * @property {CountryCurrencyInfo} currency
 * @property {string} timezone
 */

/**
 * @typedef CountryCurrencyInfo
 * @property {string} code
 * @property {string} symbol
 * @property {string} name
 */

/**
 * @typedef UserSchema
 * @property {string} [_id]
 * @property {string} [contact]
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */

class CatalogPartnerModel {
  /** @returns {Page} */
  static Page() {
    return Joi.object({
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
      total: Joi.number(),
    });
  }

  /** @returns {CompanyListSchema} */
  static CompanyListSchema() {
    return Joi.object({
      page: CatalogPartnerModel.Page(),
      items: Joi.array().items(CatalogPartnerModel.CompanySchema()),
    });
  }

  /** @returns {CompaniesSchema} */
  static CompaniesSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPartnerModel.CompanySchema()),
    });
  }

  /** @returns {ErrorResponseSchema} */
  static ErrorResponseSchema() {
    return Joi.object({
      code: Joi.string().allow(""),
      error: Joi.object().pattern(/\S/, Joi.any()),
      message: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      status: Joi.number(),
    });
  }

  /** @returns {PartnerCompanyDetailsRequestSchema} */
  static PartnerCompanyDetailsRequestSchema() {
    return Joi.object({
      company_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {CompanySchema} */
  static CompanySchema() {
    return Joi.object({
      uid: Joi.number(),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      verified_on: Joi.string().allow(""),
      verified_by: CatalogPartnerModel.UserSchema(),
      modified_by: CatalogPartnerModel.UserSchema(),
      created_by: CatalogPartnerModel.UserSchema(),
      name: Joi.string().allow(""),
      company_type: Joi.string().allow("").required(),
      business_type: Joi.string().allow("").required(),
      details: CatalogPartnerModel.CompanyDetails(),
      addresses: Joi.array().items(CatalogPartnerModel.GetAddressSchema()),
      market_channels: Joi.array().items(Joi.string().allow("")),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      reject_reason: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      business_country_info: CatalogPartnerModel.BusinessCountryInfo(),
    });
  }

  /** @returns {GetAddressSchema} */
  static GetAddressSchema() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
    });
  }

  /** @returns {BusinessCountryInfo} */
  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),
      country: Joi.string().allow(""),
      currency: CatalogPartnerModel.CountryCurrencyInfo().required(),
      timezone: Joi.string().allow("").required(),
    });
  }

  /** @returns {CountryCurrencyInfo} */
  static CountryCurrencyInfo() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      symbol: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {UserSchema} */
  static UserSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      contact: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyDetails} */
  static CompanyDetails() {
    return Joi.object({
      socials: Joi.array().items(CatalogPartnerModel.CompanySocialAccounts()),
      website_url: Joi.string().allow(""),
    });
  }

  /** @returns {CompanySocialAccounts} */
  static CompanySocialAccounts() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
    });
  }
}
module.exports = CatalogPartnerModel;
