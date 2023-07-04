const Joi = require("joi");

/**
 * @typedef AddressSerializer
 * @property {string} [address_type]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} latitude
 * @property {number} longitude
 * @property {number} [pincode]
 * @property {string} [state]
 */

/**
 * @typedef AverageOrderProcessingTime
 * @property {number} duration
 * @property {string} duration_type
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [landscape]
 * @property {string} [portrait]
 */

/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */

/**
 * @typedef BusinessCountryInfo
 * @property {string} [country]
 * @property {string} [country_code]
 */

/**
 * @typedef BusinessDetails
 * @property {Website} [website]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number[]} brands
 * @property {number} company
 * @property {number} [uid]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {GetBrandResponseSerializer} [brand]
 * @property {CompanySerializer} [company]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 */

/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */

/**
 * @typedef CompanySerializer
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} business_type
 * @property {string} company_type
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {CompanyDetails} [details]
 * @property {string[]} [market_channels]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string[]} [notification_emails]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */

/**
 * @typedef CompanyTaxesSerializer
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 * @property {number} [rate]
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 * @property {number} [rate]
 */

/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} address_type
 * @property {string} address1
 * @property {string} [address2]
 * @property {string} city
 * @property {string} country
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} latitude
 * @property {number} longitude
 * @property {number} pincode
 * @property {string} state
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {BrandBannerSerializer} banner
 * @property {string} [brand_tier]
 * @property {number} [company_id]
 * @property {string} [description]
 * @property {string} logo
 * @property {string} name
 * @property {string[]} [synonyms]
 * @property {number} [uid]
 */

/**
 * @typedef Document
 * @property {string} [legal_name]
 * @property {string} type
 * @property {string} [url]
 * @property {string} value
 * @property {boolean} [verified]
 */

/**
 * @typedef DocumentsObj
 * @property {number} [pending]
 * @property {number} [verified]
 */

/**
 * @typedef ErrorResponse
 * @property {string} [code]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [address_type]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} latitude
 * @property {number} longitude
 * @property {number} [pincode]
 * @property {string} [state]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {BrandBannerSerializer} [banner]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [logo]
 * @property {string} [mode]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string} [reject_reason]
 * @property {string} [slug_key]
 * @property {string} [stage]
 * @property {string[]} [synonyms]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {BusinessDetails} [business_details]
 * @property {string} [business_info]
 * @property {string} [business_type]
 * @property {string} company_type
 * @property {ContactDetails} [contact_details]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {Document[]} [documents]
 * @property {boolean} [franchise_enabled]
 * @property {string} [mode]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string[]} [notification_emails]
 * @property {string} [stage]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {number} uid
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 */

/**
 * @typedef GetCompanySerializer
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 */

/**
 * @typedef GetLocationSerializer
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer} address
 * @property {boolean} [auto_invoice]
 * @property {AverageOrderProcessingTime} [avg_order_processing_time]
 * @property {string} code
 * @property {GetCompanySerializer} [company]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {boolean} [credit_note]
 * @property {boolean} [default_order_acceptance_timing]
 * @property {string} display_name
 * @property {Document[]} [documents]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {LocationManagerSerializer} [manager]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string[]} [notification_emails]
 * @property {LocationDayWiseSerializer[]} [order_acceptance_timing]
 * @property {string} [phone_number]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {string[]} [tags]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 */

/**
 * @typedef HolidayDateSerializer
 * @property {string} end_date
 * @property {string} start_date
 */

/**
 * @typedef HolidaySchemaSerializer
 * @property {HolidayDateSerializer} date
 * @property {string} holiday_type
 * @property {string} title
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {boolean} [enabled]
 * @property {string} [password]
 * @property {string} [username]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [closing]
 * @property {boolean} open
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 */

/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 */

/**
 * @typedef LocationSerializer
 * @property {Object} [_custom_json]
 * @property {AddressSerializer} address
 * @property {boolean} [auto_invoice]
 * @property {AverageOrderProcessingTime} [avg_order_processing_time]
 * @property {string} code
 * @property {number} company
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {boolean} [credit_note]
 * @property {boolean} [default_order_acceptance_timing]
 * @property {string} display_name
 * @property {Document[]} [documents]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} name
 * @property {string[]} [notification_emails]
 * @property {LocationDayWiseSerializer[]} [order_acceptance_timing]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} [slug]
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {string[]} [tags]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {number} [uid]
 * @property {Object} [warnings]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} hour
 * @property {number} minute
 */

/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [brand]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [product]
 * @property {string} [stage]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [store_documents]
 * @property {number} [uid]
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef ProfileSuccessResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {number} [uid]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */

/**
 * @typedef StoreTagsResponse
 * @property {boolean} [success]
 * @property {string[]} [tags]
 */

/**
 * @typedef UpdateCompany
 * @property {Object} [_custom_json]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {BusinessDetails} [business_details]
 * @property {string} [business_info]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {ContactDetails} [contact_details]
 * @property {Document[]} [documents]
 * @property {boolean} [franchise_enabled]
 * @property {string} [name]
 * @property {string[]} [notification_emails]
 * @property {string} [reject_reason]
 * @property {string} [slug]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {Object} [warnings]
 */

/**
 * @typedef UserSerializer
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef Website
 * @property {string} [url]
 */

class CompanyProfilePlatformModel {
  /** @returns {AddressSerializer} */
  static AddressSerializer() {
    return Joi.object({
      address_type: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }

  /** @returns {AverageOrderProcessingTime} */
  static AverageOrderProcessingTime() {
    return Joi.object({
      duration: Joi.number().required(),
      duration_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {BrandBannerSerializer} */
  static BrandBannerSerializer() {
    return Joi.object({
      landscape: Joi.string().allow(""),
      portrait: Joi.string().allow(""),
    });
  }

  /** @returns {BulkLocationSerializer} */
  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfilePlatformModel.LocationSerializer()),
    });
  }

  /** @returns {BusinessCountryInfo} */
  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {BusinessDetails} */
  static BusinessDetails() {
    return Joi.object({
      website: CompanyProfilePlatformModel.Website(),
    });
  }

  /** @returns {CompanyBrandListSerializer} */
  static CompanyBrandListSerializer() {
    return Joi.object({
      items: Joi.array().items(
        CompanyProfilePlatformModel.CompanyBrandSerializer()
      ),
      page: CompanyProfilePlatformModel.Page(),
    });
  }

  /** @returns {CompanyBrandPostRequestSerializer} */
  static CompanyBrandPostRequestSerializer() {
    return Joi.object({
      brands: Joi.array().items(Joi.number()).required(),
      company: Joi.number().required(),
      uid: Joi.number(),
    });
  }

  /** @returns {CompanyBrandSerializer} */
  static CompanyBrandSerializer() {
    return Joi.object({
      brand: CompanyProfilePlatformModel.GetBrandResponseSerializer(),
      company: CompanyProfilePlatformModel.CompanySerializer(),
      created_by: CompanyProfilePlatformModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      modified_by: CompanyProfilePlatformModel.UserSerializer(),
      modified_on: Joi.string().allow(""),
      reject_reason: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      uid: Joi.number(),
      verified_by: CompanyProfilePlatformModel.UserSerializer(),
      verified_on: Joi.string().allow(""),
      warnings: Joi.any(),
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

  /** @returns {CompanySerializer} */
  static CompanySerializer() {
    return Joi.object({
      _custom_json: Joi.any(),
      addresses: Joi.array().items(
        CompanyProfilePlatformModel.GetAddressSerializer()
      ),
      business_country_info: CompanyProfilePlatformModel.BusinessCountryInfo(),
      business_type: Joi.string().allow("").required(),
      company_type: Joi.string().allow("").required(),
      created_by: CompanyProfilePlatformModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      details: CompanyProfilePlatformModel.CompanyDetails(),
      market_channels: Joi.array().items(Joi.string().allow("")),
      modified_by: CompanyProfilePlatformModel.UserSerializer(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      reject_reason: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      uid: Joi.number(),
      verified_by: CompanyProfilePlatformModel.UserSerializer(),
      verified_on: Joi.string().allow(""),
    });
  }

  /** @returns {CompanySocialAccounts} */
  static CompanySocialAccounts() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {CompanyTaxesSerializer} */
  static CompanyTaxesSerializer() {
    return Joi.object({
      effective_date: Joi.string().allow(""),
      enable: Joi.boolean(),
      rate: Joi.number(),
    });
  }

  /** @returns {CompanyTaxesSerializer1} */
  static CompanyTaxesSerializer1() {
    return Joi.object({
      effective_date: Joi.string().allow(""),
      enable: Joi.boolean(),
      rate: Joi.number(),
    });
  }

  /** @returns {ContactDetails} */
  static ContactDetails() {
    return Joi.object({
      emails: Joi.array().items(Joi.string().allow("")),
      phone: Joi.array().items(CompanyProfilePlatformModel.SellerPhoneNumber()),
    });
  }

  /** @returns {CreateUpdateAddressSerializer} */
  static CreateUpdateAddressSerializer() {
    return Joi.object({
      address_type: Joi.string().allow("").required(),
      address1: Joi.string().allow("").required(),
      address2: Joi.string().allow(""),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      country_code: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      pincode: Joi.number().required(),
      state: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreateUpdateBrandRequestSerializer} */
  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),
      _locale_language: Joi.any(),
      banner: CompanyProfilePlatformModel.BrandBannerSerializer().required(),
      brand_tier: Joi.string().allow(""),
      company_id: Joi.number(),
      description: Joi.string().allow(""),
      logo: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      synonyms: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
    });
  }

  /** @returns {Document} */
  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),
      type: Joi.string().allow("").required(),
      url: Joi.string().allow(""),
      value: Joi.string().allow("").required(),
      verified: Joi.boolean(),
    });
  }

  /** @returns {DocumentsObj} */
  static DocumentsObj() {
    return Joi.object({
      pending: Joi.number(),
      verified: Joi.number(),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      status: Joi.number(),
    });
  }

  /** @returns {GetAddressSerializer} */
  static GetAddressSerializer() {
    return Joi.object({
      address_type: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }

  /** @returns {GetBrandResponseSerializer} */
  static GetBrandResponseSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),
      _locale_language: Joi.any(),
      banner: CompanyProfilePlatformModel.BrandBannerSerializer(),
      created_by: CompanyProfilePlatformModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      description: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      modified_by: CompanyProfilePlatformModel.UserSerializer(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      reject_reason: Joi.string().allow(""),
      slug_key: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
      verified_by: CompanyProfilePlatformModel.UserSerializer(),
      verified_on: Joi.string().allow(""),
      warnings: Joi.any(),
    });
  }

  /** @returns {GetCompanyProfileSerializerResponse} */
  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      _custom_json: Joi.any(),
      addresses: Joi.array().items(
        CompanyProfilePlatformModel.GetAddressSerializer()
      ),
      business_country_info: CompanyProfilePlatformModel.BusinessCountryInfo(),
      business_details: CompanyProfilePlatformModel.BusinessDetails(),
      business_info: Joi.string().allow(""),
      business_type: Joi.string().allow(""),
      company_type: Joi.string().allow("").required(),
      contact_details: CompanyProfilePlatformModel.ContactDetails(),
      created_by: CompanyProfilePlatformModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      documents: Joi.array().items(CompanyProfilePlatformModel.Document()),
      franchise_enabled: Joi.boolean(),
      mode: Joi.string().allow(""),
      modified_by: CompanyProfilePlatformModel.UserSerializer(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      stage: Joi.string().allow(""),
      taxes: Joi.array().items(
        CompanyProfilePlatformModel.CompanyTaxesSerializer()
      ),
      uid: Joi.number().required(),
      verified_by: CompanyProfilePlatformModel.UserSerializer(),
      verified_on: Joi.string().allow(""),
      warnings: Joi.any(),
    });
  }

  /** @returns {GetCompanySerializer} */
  static GetCompanySerializer() {
    return Joi.object({
      addresses: Joi.array().items(
        CompanyProfilePlatformModel.GetAddressSerializer()
      ),
      business_type: Joi.string().allow(""),
      company_type: Joi.string().allow(""),
      created_by: CompanyProfilePlatformModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      modified_by: CompanyProfilePlatformModel.UserSerializer(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      reject_reason: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      uid: Joi.number(),
      verified_by: CompanyProfilePlatformModel.UserSerializer(),
      verified_on: Joi.string().allow(""),
    });
  }

  /** @returns {GetLocationSerializer} */
  static GetLocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),
      address: CompanyProfilePlatformModel.GetAddressSerializer().required(),
      auto_invoice: Joi.boolean(),
      avg_order_processing_time: CompanyProfilePlatformModel.AverageOrderProcessingTime(),
      code: Joi.string().allow("").required(),
      company: CompanyProfilePlatformModel.GetCompanySerializer(),
      contact_numbers: Joi.array().items(
        CompanyProfilePlatformModel.SellerPhoneNumber()
      ),
      created_by: CompanyProfilePlatformModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      credit_note: Joi.boolean(),
      default_order_acceptance_timing: Joi.boolean(),
      display_name: Joi.string().allow("").required(),
      documents: Joi.array().items(CompanyProfilePlatformModel.Document()),
      gst_credentials: CompanyProfilePlatformModel.InvoiceDetailsSerializer(),
      holiday: Joi.array().items(
        CompanyProfilePlatformModel.HolidaySchemaSerializer()
      ),
      manager: CompanyProfilePlatformModel.LocationManagerSerializer(),
      modified_by: CompanyProfilePlatformModel.UserSerializer(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      order_acceptance_timing: Joi.array().items(
        CompanyProfilePlatformModel.LocationDayWiseSerializer()
      ),
      phone_number: Joi.string().allow(""),
      product_return_config: CompanyProfilePlatformModel.ProductReturnConfigSerializer(),
      stage: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      timing: Joi.array().items(
        CompanyProfilePlatformModel.LocationDayWiseSerializer()
      ),
      uid: Joi.number(),
      verified_by: CompanyProfilePlatformModel.UserSerializer(),
      verified_on: Joi.string().allow(""),
      warnings: Joi.any(),
    });
  }

  /** @returns {HolidayDateSerializer} */
  static HolidayDateSerializer() {
    return Joi.object({
      end_date: Joi.string().allow("").required(),
      start_date: Joi.string().allow("").required(),
    });
  }

  /** @returns {HolidaySchemaSerializer} */
  static HolidaySchemaSerializer() {
    return Joi.object({
      date: CompanyProfilePlatformModel.HolidayDateSerializer().required(),
      holiday_type: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
    });
  }

  /** @returns {InvoiceCredSerializer} */
  static InvoiceCredSerializer() {
    return Joi.object({
      enabled: Joi.boolean(),
      password: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceDetailsSerializer} */
  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_invoice: CompanyProfilePlatformModel.InvoiceCredSerializer(),
      e_waybill: CompanyProfilePlatformModel.InvoiceCredSerializer(),
    });
  }

  /** @returns {LocationDayWiseSerializer} */
  static LocationDayWiseSerializer() {
    return Joi.object({
      closing: CompanyProfilePlatformModel.LocationTimingSerializer(),
      open: Joi.boolean().required(),
      opening: CompanyProfilePlatformModel.LocationTimingSerializer(),
      weekday: Joi.string().allow("").required(),
    });
  }

  /** @returns {LocationListSerializer} */
  static LocationListSerializer() {
    return Joi.object({
      items: Joi.array().items(
        CompanyProfilePlatformModel.GetLocationSerializer()
      ),
      page: CompanyProfilePlatformModel.Page(),
    });
  }

  /** @returns {LocationManagerSerializer} */
  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),
      mobile_no: CompanyProfilePlatformModel.SellerPhoneNumber().required(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {LocationSerializer} */
  static LocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),
      address: CompanyProfilePlatformModel.AddressSerializer().required(),
      auto_invoice: Joi.boolean(),
      avg_order_processing_time: CompanyProfilePlatformModel.AverageOrderProcessingTime(),
      code: Joi.string().allow("").required(),
      company: Joi.number().required(),
      contact_numbers: Joi.array().items(
        CompanyProfilePlatformModel.SellerPhoneNumber()
      ),
      credit_note: Joi.boolean(),
      default_order_acceptance_timing: Joi.boolean(),
      display_name: Joi.string().allow("").required(),
      documents: Joi.array().items(CompanyProfilePlatformModel.Document()),
      gst_credentials: CompanyProfilePlatformModel.InvoiceDetailsSerializer(),
      holiday: Joi.array().items(
        CompanyProfilePlatformModel.HolidaySchemaSerializer()
      ),
      manager: CompanyProfilePlatformModel.LocationManagerSerializer(),
      name: Joi.string().allow("").required(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      order_acceptance_timing: Joi.array().items(
        CompanyProfilePlatformModel.LocationDayWiseSerializer()
      ),
      product_return_config: CompanyProfilePlatformModel.ProductReturnConfigSerializer(),
      slug: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      timing: Joi.array().items(
        CompanyProfilePlatformModel.LocationDayWiseSerializer()
      ),
      uid: Joi.number(),
      warnings: Joi.any(),
    });
  }

  /** @returns {LocationTimingSerializer} */
  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number().required(),
      minute: Joi.number().required(),
    });
  }

  /** @returns {MetricsSerializer} */
  static MetricsSerializer() {
    return Joi.object({
      brand: CompanyProfilePlatformModel.DocumentsObj(),
      company_documents: CompanyProfilePlatformModel.DocumentsObj(),
      product: CompanyProfilePlatformModel.DocumentsObj(),
      stage: Joi.string().allow(""),
      store: CompanyProfilePlatformModel.DocumentsObj(),
      store_documents: CompanyProfilePlatformModel.DocumentsObj(),
      uid: Joi.number(),
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

  /** @returns {ProductReturnConfigSerializer} */
  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),
      store_uid: Joi.number(),
    });
  }

  /** @returns {ProfileSuccessResponse} */
  static ProfileSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
      uid: Joi.number(),
    });
  }

  /** @returns {SellerPhoneNumber} */
  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),
      number: Joi.string().allow("").required(),
    });
  }

  /** @returns {StoreTagsResponse} */
  static StoreTagsResponse() {
    return Joi.object({
      success: Joi.boolean(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {UpdateCompany} */
  static UpdateCompany() {
    return Joi.object({
      _custom_json: Joi.any(),
      addresses: Joi.array().items(
        CompanyProfilePlatformModel.CreateUpdateAddressSerializer()
      ),
      business_details: CompanyProfilePlatformModel.BusinessDetails(),
      business_info: Joi.string().allow(""),
      business_type: Joi.string().allow(""),
      company_type: Joi.string().allow(""),
      contact_details: CompanyProfilePlatformModel.ContactDetails(),
      documents: Joi.array().items(CompanyProfilePlatformModel.Document()),
      franchise_enabled: Joi.boolean(),
      name: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      reject_reason: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      taxes: Joi.array().items(
        CompanyProfilePlatformModel.CompanyTaxesSerializer1()
      ),
      warnings: Joi.any(),
    });
  }

  /** @returns {UserSerializer} */
  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {Website} */
  static Website() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }
}
module.exports = CompanyProfilePlatformModel;
