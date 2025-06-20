const Joi = require("joi");

/**
 * @typedef CompanyTaxesSchema
 * @property {string} [effective_date]
 * @property {number} [rate]
 * @property {boolean} [enable]
 */

/**
 * @typedef UserSchema
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */

/**
 * @typedef Website
 * @property {string} [url]
 */

/**
 * @typedef BusinessDetails
 * @property {Website} [website]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */

/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
 */

/**
 * @typedef CountryCurrencyInfo
 * @property {string} code
 * @property {string} symbol
 * @property {string} name
 */

/**
 * @typedef BusinessCountryInfo
 * @property {string} country_code
 * @property {string} country
 * @property {CountryCurrencyInfo} currency
 * @property {string} timezone
 */

/**
 * @typedef Document
 * @property {string} value
 * @property {string} [legal_name]
 * @property {boolean} [verified]
 * @property {string} type
 * @property {string} [url]
 */

/**
 * @typedef GetAddressSchema
 * @property {string} [landmark]
 * @property {string} [country_code]
 * @property {string} [pincode]
 * @property {string} [address_type]
 * @property {number} longitude
 * @property {string} [country]
 * @property {string} [address2]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {string} [sector]
 * @property {string} [address1]
 * @property {string} [city]
 * @property {number} latitude
 */

/**
 * @typedef GetCompanyProfileSerializerResponseSchema
 * @property {string} [business_info]
 * @property {CompanyTaxesSchema[]} [taxes]
 * @property {string} [business_type]
 * @property {string} [name]
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSchema} [created_by]
 * @property {string} [created_on]
 * @property {Object} [warnings]
 * @property {BusinessDetails} [business_details]
 * @property {string} [mode]
 * @property {ContactDetails} [contact_details]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [modified_on]
 * @property {number} uid
 * @property {boolean} [franchise_enabled]
 * @property {string} [stage]
 * @property {string} company_type
 * @property {Document[]} [documents]
 * @property {GetAddressSchema[]} [addresses]
 * @property {UserSchema} [verified_by]
 * @property {string[]} [notification_emails]
 * @property {UserSchema} [modified_by]
 */

/**
 * @typedef ErrorResponseSchema
 * @property {string} [message] - A descriptive message providing details about
 *   the error, intended to convey the nature and context of the issue.
 * @property {Object} [error] - An object containing additional error details,
 *   which may vary depending on the error type.
 */

/**
 * @typedef CompanyRequestTaxesSchema
 * @property {string} [effective_date]
 * @property {number} [rate]
 * @property {boolean} [enable]
 */

/**
 * @typedef CreateUpdateAddressSchema
 * @property {string} [landmark]
 * @property {string} [country_code]
 * @property {string} pincode
 * @property {string} address_type
 * @property {number} longitude
 * @property {string} country
 * @property {string} [address2]
 * @property {string} state
 * @property {string} address1
 * @property {string} city
 * @property {number} latitude
 */

/**
 * @typedef UpdateCompany
 * @property {boolean} [franchise_enabled]
 * @property {string} [business_info]
 * @property {Object} [warnings]
 * @property {string} [company_type]
 * @property {Object} [_custom_json]
 * @property {CompanyRequestTaxesSchema[]} [taxes]
 * @property {BusinessDetails} [business_details]
 * @property {Document[]} [documents]
 * @property {string} [business_type]
 * @property {CreateUpdateAddressSchema[]} [addresses]
 * @property {string[]} [notification_emails]
 * @property {ContactDetails} [contact_details]
 * @property {string} [reject_reason]
 * @property {string} [name]
 */

/**
 * @typedef ProfileSuccessResponseSchema
 * @property {number} [uid]
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef DocumentsObj
 * @property {number} [pending]
 * @property {number} [verified]
 */

/**
 * @typedef MetricsSchema
 * @property {string} [stage]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [product]
 * @property {number} [uid]
 * @property {DocumentsObj} [brand]
 */

/**
 * @typedef BrandBannerSchema
 * @property {string} portrait
 * @property {string} landscape
 */

/**
 * @typedef GetBrandResponseSchema
 * @property {UserSchema} [modified_by]
 * @property {BrandBannerSchema} [banner]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSchema} [created_by]
 * @property {string} [created_on]
 * @property {Object} [warnings]
 * @property {Object} [_locale_language]
 * @property {string} [mode]
 * @property {string[]} [synonyms]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {UserSchema} [verified_by]
 * @property {string} [slug_key]
 * @property {string} [logo]
 * @property {string} [description]
 */

/**
 * @typedef CreateBrandRequestSchema
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {string[]} [synonyms]
 * @property {number} [company_id]
 * @property {string} [description]
 * @property {string} logo
 * @property {string} [brand_tier]
 * @property {number} [uid]
 * @property {BrandBannerSchema} banner
 * @property {string} name
 * @property {string} [slug_key]
 */

/**
 * @typedef UpdateBrandRequestSchema
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {string[]} [synonyms]
 * @property {number} [company_id]
 * @property {string} [description]
 * @property {string} logo
 * @property {string} [brand_tier]
 * @property {number} [uid]
 * @property {BrandBannerSchema} banner
 * @property {string} name
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */

/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */

/**
 * @typedef CompanySchema
 * @property {string} [stage]
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSchema} [verified_by]
 * @property {string} [created_on]
 * @property {UserSchema} [created_by]
 * @property {string} company_type
 * @property {string} [modified_on]
 * @property {string[]} [market_channels]
 * @property {string} business_type
 * @property {GetAddressSchema[]} [addresses]
 * @property {string[]} [notification_emails]
 * @property {CompanyDetails} [details]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {string} [name]
 * @property {UserSchema} [modified_by]
 */

/**
 * @typedef CompanyBrandSchema
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {UserSchema} [verified_by]
 * @property {string} [created_on]
 * @property {UserSchema} [created_by]
 * @property {CompanySchema} [company]
 * @property {Object} [warnings]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {GetBrandResponseSchema} [brand]
 * @property {UserSchema} [modified_by]
 */

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of all items across all pages.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [page_size] - The number of items per page.
 */

/**
 * @typedef CompanyBrandListSchema
 * @property {CompanyBrandSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CompanyBrandPostRequestSchema
 * @property {number} [uid]
 * @property {number[]} brands
 * @property {number} company
 */

/**
 * @typedef InvoiceCredSchema
 * @property {string} [username]
 * @property {boolean} [enabled]
 * @property {string} [password]
 */

/**
 * @typedef InvoiceDetailsSchema
 * @property {InvoiceCredSchema} [e_invoice]
 * @property {InvoiceCredSchema} [e_waybill]
 */

/**
 * @typedef GetCompanySchema
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {UserSchema} [verified_by]
 * @property {string} [created_on]
 * @property {UserSchema} [created_by]
 * @property {string} [company_type]
 * @property {string} [modified_on]
 * @property {string} [business_type]
 * @property {GetAddressSchema[]} [addresses]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {string} [name]
 * @property {UserSchema} [modified_by]
 */

/**
 * @typedef LocationManagerSchema
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 */

/**
 * @typedef LocationTimingSchema
 * @property {number} hour
 * @property {number} minute
 */

/**
 * @typedef LocationDayWiseSchema
 * @property {boolean} open
 * @property {string} weekday
 * @property {LocationTimingSchema} [opening]
 * @property {LocationTimingSchema} [closing]
 */

/**
 * @typedef HolidayDateSchema
 * @property {string} end_date
 * @property {string} start_date
 */

/**
 * @typedef HolidaySchemaSchema
 * @property {HolidayDateSchema} date
 * @property {string} title
 * @property {string} holiday_type
 */

/**
 * @typedef ProductReturnConfigSchema
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef GetLocationSchema
 * @property {string} code
 * @property {string} [phone_number]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {InvoiceDetailsSchema} [gst_credentials]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSchema} [created_by]
 * @property {string} [created_on]
 * @property {GetCompanySchema} [company]
 * @property {GetAddressSchema} address
 * @property {Object} [warnings]
 * @property {string} [store_type]
 * @property {LocationManagerSchema} [manager]
 * @property {boolean} [auto_invoice]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {LocationDayWiseSchema[]} [timing]
 * @property {string} [stage]
 * @property {Document[]} [documents]
 * @property {boolean} [credit_note]
 * @property {HolidaySchemaSchema[]} [holiday]
 * @property {string} display_name
 * @property {ProductReturnConfigSchema} [product_return_config]
 * @property {UserSchema} [verified_by]
 * @property {string[]} [notification_emails]
 * @property {UserSchema} [modified_by]
 * @property {string[]} [tags]
 * @property {boolean} [default_order_acceptance_timing]
 * @property {LocationDayWiseSchema[]} [order_acceptance_timing]
 * @property {AverageOrderProcessingTime} [avg_order_processing_time]
 * @property {boolean} [bulk_shipment]
 * @property {boolean} [auto_assign_courier_partner]
 * @property {boolean} [qc_based_return_inventory_sync]
 */

/**
 * @typedef LocationListSchema
 * @property {GetLocationSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AddressSchema
 * @property {string} [landmark]
 * @property {string} country_code
 * @property {string} [pincode]
 * @property {string} [address_type]
 * @property {number} longitude
 * @property {string} [country]
 * @property {string} [address2]
 * @property {string} [state]
 * @property {string} [sector]
 * @property {string} [state_code]
 * @property {string} [address1]
 * @property {string} [city]
 * @property {number} latitude
 */

/**
 * @typedef LocationSchema
 * @property {string} code
 * @property {InvoiceDetailsSchema} [gst_credentials]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {Object} [warnings]
 * @property {AddressSchema} address
 * @property {number} company
 * @property {string} [store_type]
 * @property {LocationManagerSchema} [manager]
 * @property {boolean} [auto_invoice]
 * @property {number} [uid]
 * @property {LocationDayWiseSchema[]} [timing]
 * @property {string} [stage]
 * @property {Document[]} documents
 * @property {boolean} [credit_note]
 * @property {HolidaySchemaSchema[]} [holiday]
 * @property {ProductReturnConfigSchema} [product_return_config]
 * @property {string} display_name
 * @property {string[]} [notification_emails]
 * @property {string[]} [tags]
 * @property {boolean} [default_order_acceptance_timing] - Flag to set
 *   order_acceptance_timing as default timing
 * @property {LocationDayWiseSchema[]} [order_acceptance_timing] - Order
 *   acceptance timing of the store
 * @property {AverageOrderProcessingTime} [avg_order_processing_time]
 * @property {boolean} [bulk_shipment]
 * @property {boolean} [auto_assign_courier_partner]
 */

/**
 * @typedef BulkLocationSchema
 * @property {LocationSchema[]} [data]
 */

/**
 * @typedef AverageOrderProcessingTime
 * @property {number} [duration]
 * @property {string} [duration_type]
 */

/**
 * @typedef StoreTagsResponseSchema
 * @property {string[]} [tags]
 * @property {boolean} [success]
 */

class CompanyProfilePlatformModel {
  /** @returns {CompanyTaxesSchema} */
  static CompanyTaxesSchema() {
    return Joi.object({
      effective_date: Joi.string().allow(""),
      rate: Joi.number(),
      enable: Joi.boolean(),
    });
  }

  /** @returns {UserSchema} */
  static UserSchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      contact: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {Website} */
  static Website() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  /** @returns {BusinessDetails} */
  static BusinessDetails() {
    return Joi.object({
      website: CompanyProfilePlatformModel.Website(),
    });
  }

  /** @returns {SellerPhoneNumber} */
  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),
      number: Joi.string().allow("").required(),
    });
  }

  /** @returns {ContactDetails} */
  static ContactDetails() {
    return Joi.object({
      emails: Joi.array().items(Joi.string().allow("")),
      phone: Joi.array().items(CompanyProfilePlatformModel.SellerPhoneNumber()),
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

  /** @returns {BusinessCountryInfo} */
  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      currency: CompanyProfilePlatformModel.CountryCurrencyInfo().required(),
      timezone: Joi.string().allow("").required(),
    });
  }

  /** @returns {Document} */
  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),
      legal_name: Joi.string().allow(""),
      verified: Joi.boolean(),
      type: Joi.string().allow("").required(),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {GetAddressSchema} */
  static GetAddressSchema() {
    return Joi.object({
      landmark: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      longitude: Joi.number().required(),
      country: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      state: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      city: Joi.string().allow(""),
      latitude: Joi.number().required(),
    });
  }

  /** @returns {GetCompanyProfileSerializerResponseSchema} */
  static GetCompanyProfileSerializerResponseSchema() {
    return Joi.object({
      business_info: Joi.string().allow(""),
      taxes: Joi.array().items(
        CompanyProfilePlatformModel.CompanyTaxesSchema()
      ),
      business_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      verified_on: Joi.string().allow(""),
      created_by: CompanyProfilePlatformModel.UserSchema(),
      created_on: Joi.string().allow(""),
      warnings: Joi.object().pattern(/\S/, Joi.any()),
      business_details: CompanyProfilePlatformModel.BusinessDetails(),
      mode: Joi.string().allow(""),
      contact_details: CompanyProfilePlatformModel.ContactDetails(),
      business_country_info: CompanyProfilePlatformModel.BusinessCountryInfo(),
      modified_on: Joi.string().allow(""),
      uid: Joi.number().required(),
      franchise_enabled: Joi.boolean(),
      stage: Joi.string().allow(""),
      company_type: Joi.string().allow("").required(),
      documents: Joi.array().items(CompanyProfilePlatformModel.Document()),
      addresses: Joi.array().items(
        CompanyProfilePlatformModel.GetAddressSchema()
      ),
      verified_by: CompanyProfilePlatformModel.UserSchema(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      modified_by: CompanyProfilePlatformModel.UserSchema(),
    });
  }

  /** @returns {ErrorResponseSchema} */
  static ErrorResponseSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      error: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {CompanyRequestTaxesSchema} */
  static CompanyRequestTaxesSchema() {
    return Joi.object({
      effective_date: Joi.string().allow(""),
      rate: Joi.number(),
      enable: Joi.boolean(),
    });
  }

  /** @returns {CreateUpdateAddressSchema} */
  static CreateUpdateAddressSchema() {
    return Joi.object({
      landmark: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      pincode: Joi.string().allow("").required(),
      address_type: Joi.string().allow("").required(),
      longitude: Joi.number().required(),
      country: Joi.string().allow("").required(),
      address2: Joi.string().allow(""),
      state: Joi.string().allow("").required(),
      address1: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
      latitude: Joi.number().required(),
    });
  }

  /** @returns {UpdateCompany} */
  static UpdateCompany() {
    return Joi.object({
      franchise_enabled: Joi.boolean(),
      business_info: Joi.string().allow(""),
      warnings: Joi.object().pattern(/\S/, Joi.any()),
      company_type: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      taxes: Joi.array().items(
        CompanyProfilePlatformModel.CompanyRequestTaxesSchema()
      ),
      business_details: CompanyProfilePlatformModel.BusinessDetails(),
      documents: Joi.array().items(CompanyProfilePlatformModel.Document()),
      business_type: Joi.string().allow(""),
      addresses: Joi.array().items(
        CompanyProfilePlatformModel.CreateUpdateAddressSchema()
      ),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      contact_details: CompanyProfilePlatformModel.ContactDetails(),
      reject_reason: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ProfileSuccessResponseSchema} */
  static ProfileSuccessResponseSchema() {
    return Joi.object({
      uid: Joi.number(),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {DocumentsObj} */
  static DocumentsObj() {
    return Joi.object({
      pending: Joi.number(),
      verified: Joi.number(),
    });
  }

  /** @returns {MetricsSchema} */
  static MetricsSchema() {
    return Joi.object({
      stage: Joi.string().allow(""),
      store: CompanyProfilePlatformModel.DocumentsObj(),
      company_documents: CompanyProfilePlatformModel.DocumentsObj(),
      store_documents: CompanyProfilePlatformModel.DocumentsObj(),
      product: CompanyProfilePlatformModel.DocumentsObj(),
      uid: Joi.number(),
      brand: CompanyProfilePlatformModel.DocumentsObj(),
    });
  }

  /** @returns {BrandBannerSchema} */
  static BrandBannerSchema() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),
      landscape: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetBrandResponseSchema} */
  static GetBrandResponseSchema() {
    return Joi.object({
      modified_by: CompanyProfilePlatformModel.UserSchema(),
      banner: CompanyProfilePlatformModel.BrandBannerSchema(),
      name: Joi.string().allow("").required(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      verified_on: Joi.string().allow(""),
      created_by: CompanyProfilePlatformModel.UserSchema(),
      created_on: Joi.string().allow(""),
      warnings: Joi.object().pattern(/\S/, Joi.any()),
      _locale_language: Joi.object().pattern(/\S/, Joi.any()),
      mode: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
      modified_on: Joi.string().allow(""),
      uid: Joi.number(),
      reject_reason: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      verified_by: CompanyProfilePlatformModel.UserSchema(),
      slug_key: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      description: Joi.string().allow(""),
    });
  }

  /** @returns {CreateBrandRequestSchema} */
  static CreateBrandRequestSchema() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      _locale_language: Joi.object().pattern(/\S/, Joi.any()),
      synonyms: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      description: Joi.string().allow(""),
      logo: Joi.string().allow("").required(),
      brand_tier: Joi.string().allow(""),
      uid: Joi.number(),
      banner: CompanyProfilePlatformModel.BrandBannerSchema().required(),
      name: Joi.string().allow("").required(),
      slug_key: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateBrandRequestSchema} */
  static UpdateBrandRequestSchema() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      _locale_language: Joi.object().pattern(/\S/, Joi.any()),
      synonyms: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      description: Joi.string().allow(""),
      logo: Joi.string().allow("").required(),
      brand_tier: Joi.string().allow(""),
      uid: Joi.number(),
      banner: CompanyProfilePlatformModel.BrandBannerSchema().required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {CompanySocialAccounts} */
  static CompanySocialAccounts() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {CompanyDetails} */
  static CompanyDetails() {
    return Joi.object({
      socials: Joi.array().items(
        CompanyProfilePlatformModel.CompanySocialAccounts()
      ),
      website_url: Joi.string().allow(""),
    });
  }

  /** @returns {CompanySchema} */
  static CompanySchema() {
    return Joi.object({
      stage: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      verified_on: Joi.string().allow(""),
      verified_by: CompanyProfilePlatformModel.UserSchema(),
      created_on: Joi.string().allow(""),
      created_by: CompanyProfilePlatformModel.UserSchema(),
      company_type: Joi.string().allow("").required(),
      modified_on: Joi.string().allow(""),
      market_channels: Joi.array().items(Joi.string().allow("")),
      business_type: Joi.string().allow("").required(),
      addresses: Joi.array().items(
        CompanyProfilePlatformModel.GetAddressSchema()
      ),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      details: CompanyProfilePlatformModel.CompanyDetails(),
      business_country_info: CompanyProfilePlatformModel.BusinessCountryInfo(),
      uid: Joi.number(),
      reject_reason: Joi.string().allow(""),
      name: Joi.string().allow(""),
      modified_by: CompanyProfilePlatformModel.UserSchema(),
    });
  }

  /** @returns {CompanyBrandSchema} */
  static CompanyBrandSchema() {
    return Joi.object({
      stage: Joi.string().allow(""),
      verified_on: Joi.string().allow(""),
      verified_by: CompanyProfilePlatformModel.UserSchema(),
      created_on: Joi.string().allow(""),
      created_by: CompanyProfilePlatformModel.UserSchema(),
      company: CompanyProfilePlatformModel.CompanySchema(),
      warnings: Joi.object().pattern(/\S/, Joi.any()),
      modified_on: Joi.string().allow(""),
      uid: Joi.number(),
      reject_reason: Joi.string().allow(""),
      brand: CompanyProfilePlatformModel.GetBrandResponseSchema(),
      modified_by: CompanyProfilePlatformModel.UserSchema(),
    });
  }

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
      page_size: Joi.number(),
    });
  }

  /** @returns {CompanyBrandListSchema} */
  static CompanyBrandListSchema() {
    return Joi.object({
      items: Joi.array().items(
        CompanyProfilePlatformModel.CompanyBrandSchema()
      ),
      page: CompanyProfilePlatformModel.Page(),
    });
  }

  /** @returns {CompanyBrandPostRequestSchema} */
  static CompanyBrandPostRequestSchema() {
    return Joi.object({
      uid: Joi.number(),
      brands: Joi.array().items(Joi.number()).required(),
      company: Joi.number().required(),
    });
  }

  /** @returns {InvoiceCredSchema} */
  static InvoiceCredSchema() {
    return Joi.object({
      username: Joi.string().allow(""),
      enabled: Joi.boolean(),
      password: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceDetailsSchema} */
  static InvoiceDetailsSchema() {
    return Joi.object({
      e_invoice: CompanyProfilePlatformModel.InvoiceCredSchema(),
      e_waybill: CompanyProfilePlatformModel.InvoiceCredSchema(),
    });
  }

  /** @returns {GetCompanySchema} */
  static GetCompanySchema() {
    return Joi.object({
      stage: Joi.string().allow(""),
      verified_on: Joi.string().allow(""),
      verified_by: CompanyProfilePlatformModel.UserSchema(),
      created_on: Joi.string().allow(""),
      created_by: CompanyProfilePlatformModel.UserSchema(),
      company_type: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      business_type: Joi.string().allow(""),
      addresses: Joi.array().items(
        CompanyProfilePlatformModel.GetAddressSchema()
      ),
      uid: Joi.number(),
      reject_reason: Joi.string().allow(""),
      name: Joi.string().allow(""),
      modified_by: CompanyProfilePlatformModel.UserSchema(),
    });
  }

  /** @returns {LocationManagerSchema} */
  static LocationManagerSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
      mobile_no: CompanyProfilePlatformModel.SellerPhoneNumber().required(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {LocationTimingSchema} */
  static LocationTimingSchema() {
    return Joi.object({
      hour: Joi.number().required(),
      minute: Joi.number().required(),
    });
  }

  /** @returns {LocationDayWiseSchema} */
  static LocationDayWiseSchema() {
    return Joi.object({
      open: Joi.boolean().required(),
      weekday: Joi.string().allow("").required(),
      opening: CompanyProfilePlatformModel.LocationTimingSchema(),
      closing: CompanyProfilePlatformModel.LocationTimingSchema(),
    });
  }

  /** @returns {HolidayDateSchema} */
  static HolidayDateSchema() {
    return Joi.object({
      end_date: Joi.string().allow("").required(),
      start_date: Joi.string().allow("").required(),
    });
  }

  /** @returns {HolidaySchemaSchema} */
  static HolidaySchemaSchema() {
    return Joi.object({
      date: CompanyProfilePlatformModel.HolidayDateSchema().required(),
      title: Joi.string().allow("").required(),
      holiday_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ProductReturnConfigSchema} */
  static ProductReturnConfigSchema() {
    return Joi.object({
      on_same_store: Joi.boolean(),
      store_uid: Joi.number(),
    });
  }

  /** @returns {GetLocationSchema} */
  static GetLocationSchema() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      phone_number: Joi.string().allow(""),
      contact_numbers: Joi.array().items(
        CompanyProfilePlatformModel.SellerPhoneNumber()
      ),
      gst_credentials: CompanyProfilePlatformModel.InvoiceDetailsSchema(),
      name: Joi.string().allow("").required(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      verified_on: Joi.string().allow(""),
      created_by: CompanyProfilePlatformModel.UserSchema(),
      created_on: Joi.string().allow(""),
      company: CompanyProfilePlatformModel.GetCompanySchema(),
      address: CompanyProfilePlatformModel.GetAddressSchema().required(),
      warnings: Joi.object().pattern(/\S/, Joi.any()),
      store_type: Joi.string().allow(""),
      manager: CompanyProfilePlatformModel.LocationManagerSchema(),
      auto_invoice: Joi.boolean(),
      modified_on: Joi.string().allow(""),
      uid: Joi.number(),
      timing: Joi.array().items(
        CompanyProfilePlatformModel.LocationDayWiseSchema()
      ),
      stage: Joi.string().allow(""),
      documents: Joi.array().items(CompanyProfilePlatformModel.Document()),
      credit_note: Joi.boolean(),
      holiday: Joi.array().items(
        CompanyProfilePlatformModel.HolidaySchemaSchema()
      ),
      display_name: Joi.string().allow("").required(),
      product_return_config: CompanyProfilePlatformModel.ProductReturnConfigSchema(),
      verified_by: CompanyProfilePlatformModel.UserSchema(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      modified_by: CompanyProfilePlatformModel.UserSchema(),
      tags: Joi.array().items(Joi.string().allow("")),
      default_order_acceptance_timing: Joi.boolean(),
      order_acceptance_timing: Joi.array().items(
        CompanyProfilePlatformModel.LocationDayWiseSchema()
      ),
      avg_order_processing_time: CompanyProfilePlatformModel.AverageOrderProcessingTime(),
      bulk_shipment: Joi.boolean(),
      auto_assign_courier_partner: Joi.boolean(),
      qc_based_return_inventory_sync: Joi.boolean(),
    });
  }

  /** @returns {LocationListSchema} */
  static LocationListSchema() {
    return Joi.object({
      items: Joi.array().items(CompanyProfilePlatformModel.GetLocationSchema()),
      page: CompanyProfilePlatformModel.Page(),
    });
  }

  /** @returns {AddressSchema} */
  static AddressSchema() {
    return Joi.object({
      landmark: Joi.string().allow(""),
      country_code: Joi.string().allow("").required(),
      pincode: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      longitude: Joi.number().required(),
      country: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      state: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      city: Joi.string().allow(""),
      latitude: Joi.number().required(),
    });
  }

  /** @returns {LocationSchema} */
  static LocationSchema() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      gst_credentials: CompanyProfilePlatformModel.InvoiceDetailsSchema(),
      contact_numbers: Joi.array().items(
        CompanyProfilePlatformModel.SellerPhoneNumber()
      ),
      name: Joi.string().allow("").required(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      warnings: Joi.object().pattern(/\S/, Joi.any()),
      address: CompanyProfilePlatformModel.AddressSchema().required(),
      company: Joi.number().required(),
      store_type: Joi.string().allow(""),
      manager: CompanyProfilePlatformModel.LocationManagerSchema(),
      auto_invoice: Joi.boolean(),
      uid: Joi.number(),
      timing: Joi.array().items(
        CompanyProfilePlatformModel.LocationDayWiseSchema()
      ),
      stage: Joi.string().allow(""),
      documents: Joi.array()
        .items(CompanyProfilePlatformModel.Document())
        .required(),
      credit_note: Joi.boolean(),
      holiday: Joi.array().items(
        CompanyProfilePlatformModel.HolidaySchemaSchema()
      ),
      product_return_config: CompanyProfilePlatformModel.ProductReturnConfigSchema(),
      display_name: Joi.string().allow("").required(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      default_order_acceptance_timing: Joi.boolean(),
      order_acceptance_timing: Joi.array().items(
        CompanyProfilePlatformModel.LocationDayWiseSchema()
      ),
      avg_order_processing_time: CompanyProfilePlatformModel.AverageOrderProcessingTime(),
      bulk_shipment: Joi.boolean(),
      auto_assign_courier_partner: Joi.boolean(),
    });
  }

  /** @returns {BulkLocationSchema} */
  static BulkLocationSchema() {
    return Joi.object({
      data: Joi.array().items(CompanyProfilePlatformModel.LocationSchema()),
    });
  }

  /** @returns {AverageOrderProcessingTime} */
  static AverageOrderProcessingTime() {
    return Joi.object({
      duration: Joi.number(),
      duration_type: Joi.string().allow(""),
    });
  }

  /** @returns {StoreTagsResponseSchema} */
  static StoreTagsResponseSchema() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),
      success: Joi.boolean(),
    });
  }
}
module.exports = CompanyProfilePlatformModel;
