const Joi = require("joi");

/**
 * @typedef CompanyTaxesSerializer
 * @property {string} [effective_date]
 * @property {number} [rate]
 * @property {boolean} [enable]
 */

/**
 * @typedef UserSerializer
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
 * @typedef GetAddressSerializer
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
 * @typedef GetCompanyProfileSerializerResponse
 * @property {string} [business_info]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {string} [business_type]
 * @property {string} [name]
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
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
 * @property {GetAddressSerializer[]} [addresses]
 * @property {UserSerializer} [verified_by]
 * @property {string[]} [notification_emails]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef ErrorResponse
 * @property {number} [code]
 * @property {string} [error]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {string} [effective_date]
 * @property {number} [rate]
 * @property {boolean} [enable]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} [landmark]
 * @property {string} [country_code]
 * @property {string} [pincode]
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
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {BusinessDetails} [business_details]
 * @property {Document[]} [documents]
 * @property {string} [business_type]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {string[]} [notification_emails]
 * @property {ContactDetails} [contact_details]
 * @property {string} [reject_reason]
 * @property {string} [name]
 */

/**
 * @typedef ProfileSuccessResponse
 * @property {number} [uid]
 * @property {Object[]} [data]
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef DocumentsObj
 * @property {number} [pending]
 * @property {number} [verified]
 */

/**
 * @typedef MetricsSerializer
 * @property {string} [stage]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [product]
 * @property {number} [uid]
 * @property {DocumentsObj} [brand]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} portrait
 * @property {string} landscape
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {UserSerializer} [modified_by]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {Object} [warnings]
 * @property {Object} [_locale_language]
 * @property {string} [mode]
 * @property {string[]} [synonyms]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {UserSerializer} [verified_by]
 * @property {string} [slug_key]
 * @property {string} [logo]
 * @property {string} [description]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {string[]} [synonyms]
 * @property {number} [company_id]
 * @property {string} [description]
 * @property {string} logo
 * @property {string} [brand_tier]
 * @property {number} [uid]
 * @property {BrandBannerSerializer} banner
 * @property {string} name
 * @property {string} [slug_key]
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
 * @typedef CompanySerializer
 * @property {string} [stage]
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSerializer} [verified_by]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {string} company_type
 * @property {string} [modified_on]
 * @property {string[]} [market_channels]
 * @property {string} [business_type]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string[]} [notification_emails]
 * @property {CompanyDetails} [details]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {string} [name]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {UserSerializer} [verified_by]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {CompanySerializer} [company]
 * @property {Object} [warnings]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {UserSerializer} [modified_by]
 */

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
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} [uid]
 * @property {number[]} brands
 * @property {number} company
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {string} [username]
 * @property {boolean} [enabled]
 * @property {string} [password]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */

/**
 * @typedef GetCompanySerializer
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {UserSerializer} [verified_by]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [company_type]
 * @property {string} [modified_on]
 * @property {string} [business_type]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {string} [name]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} hour
 * @property {number} minute
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {boolean} open
 * @property {string} weekday
 * @property {LocationTimingSerializer} [opening]
 * @property {LocationTimingSerializer} [closing]
 */

/**
 * @typedef HolidayDateSerializer
 * @property {string} end_date
 * @property {string} start_date
 */

/**
 * @typedef HolidaySchemaSerializer
 * @property {HolidayDateSerializer} date
 * @property {string} title
 * @property {string} holiday_type
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef GetLocationSerializer
 * @property {string} code
 * @property {string} [phone_number]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {GetCompanySerializer} [company]
 * @property {GetAddressSerializer} address
 * @property {Object} [warnings]
 * @property {string} [store_type]
 * @property {LocationManagerSerializer} [manager]
 * @property {boolean} [auto_invoice]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} [stage]
 * @property {Document[]} [documents]
 * @property {boolean} [credit_note]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string} display_name
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {UserSerializer} [verified_by]
 * @property {string[]} [notification_emails]
 * @property {UserSerializer} [modified_by]
 * @property {string[]} [tags]
 * @property {boolean} [default_order_acceptance_timing]
 * @property {LocationDayWiseSerializer[]} [order_acceptance_timing]
 * @property {AverageOrderProcessingTime} [avg_order_processing_time]
 * @property {boolean} [bulk_shipment]
 * @property {boolean} [auto_assign_courier_partner]
 * @property {boolean} [is_hyperlocal_active]
 */

/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AddressSerializer
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
 * @typedef LocationSerializer
 * @property {string} code
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {Object} [warnings]
 * @property {AddressSerializer} address
 * @property {number} company
 * @property {string} [store_type]
 * @property {LocationManagerSerializer} [manager]
 * @property {boolean} [auto_invoice]
 * @property {number} [uid]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} [stage]
 * @property {Document[]} documents
 * @property {boolean} [credit_note]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} display_name
 * @property {string[]} [notification_emails]
 * @property {string[]} [tags]
 * @property {boolean} [default_order_acceptance_timing] - Flag to set
 *   order_acceptance_timing as default timing
 * @property {LocationDayWiseSerializer[]} [order_acceptance_timing] - Order
 *   acceptance timing of the store
 * @property {AverageOrderProcessingTime} [avg_order_processing_time]
 * @property {boolean} [bulk_shipment]
 * @property {boolean} [auto_assign_courier_partner]
 * @property {boolean} [is_hyperlocal_active] - Indicates if the store has opted
 *   for hyperlocal delivery
 */

/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
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
  /** @returns {CompanyTaxesSerializer} */
  static CompanyTaxesSerializer() {
    return Joi.object({
      effective_date: Joi.string().allow(""),
      rate: Joi.number(),
      enable: Joi.boolean(),
    });
  }

  /** @returns {UserSerializer} */
  static UserSerializer() {
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

  /** @returns {GetAddressSerializer} */
  static GetAddressSerializer() {
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

  /** @returns {GetCompanyProfileSerializerResponse} */
  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      business_info: Joi.string().allow(""),
      taxes: Joi.array().items(
        CompanyProfilePlatformModel.CompanyTaxesSerializer()
      ),
      business_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      _custom_json: Joi.any(),
      verified_on: Joi.string().allow(""),
      created_by: CompanyProfilePlatformModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      warnings: Joi.any(),
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
        CompanyProfilePlatformModel.GetAddressSerializer()
      ),
      verified_by: CompanyProfilePlatformModel.UserSerializer(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      modified_by: CompanyProfilePlatformModel.UserSerializer(),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      code: Joi.number(),
      error: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      status: Joi.number(),
    });
  }

  /** @returns {CompanyTaxesSerializer1} */
  static CompanyTaxesSerializer1() {
    return Joi.object({
      effective_date: Joi.string().allow(""),
      rate: Joi.number(),
      enable: Joi.boolean(),
    });
  }

  /** @returns {CreateUpdateAddressSerializer} */
  static CreateUpdateAddressSerializer() {
    return Joi.object({
      landmark: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
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
      warnings: Joi.any(),
      company_type: Joi.string().allow(""),
      _custom_json: Joi.any(),
      taxes: Joi.array().items(
        CompanyProfilePlatformModel.CompanyTaxesSerializer1()
      ),
      business_details: CompanyProfilePlatformModel.BusinessDetails(),
      documents: Joi.array().items(CompanyProfilePlatformModel.Document()),
      business_type: Joi.string().allow(""),
      addresses: Joi.array().items(
        CompanyProfilePlatformModel.CreateUpdateAddressSerializer()
      ),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      contact_details: CompanyProfilePlatformModel.ContactDetails(),
      reject_reason: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ProfileSuccessResponse} */
  static ProfileSuccessResponse() {
    return Joi.object({
      uid: Joi.number(),
      data: Joi.array().items(Joi.any()),
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

  /** @returns {MetricsSerializer} */
  static MetricsSerializer() {
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

  /** @returns {BrandBannerSerializer} */
  static BrandBannerSerializer() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),
      landscape: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetBrandResponseSerializer} */
  static GetBrandResponseSerializer() {
    return Joi.object({
      modified_by: CompanyProfilePlatformModel.UserSerializer(),
      banner: CompanyProfilePlatformModel.BrandBannerSerializer(),
      name: Joi.string().allow("").required(),
      _custom_json: Joi.any(),
      verified_on: Joi.string().allow(""),
      created_by: CompanyProfilePlatformModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      warnings: Joi.any(),
      _locale_language: Joi.any(),
      mode: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
      modified_on: Joi.string().allow(""),
      uid: Joi.number(),
      reject_reason: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      verified_by: CompanyProfilePlatformModel.UserSerializer(),
      slug_key: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      description: Joi.string().allow(""),
    });
  }

  /** @returns {CreateUpdateBrandRequestSerializer} */
  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),
      _locale_language: Joi.any(),
      synonyms: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      description: Joi.string().allow(""),
      logo: Joi.string().allow("").required(),
      brand_tier: Joi.string().allow(""),
      uid: Joi.number(),
      banner: CompanyProfilePlatformModel.BrandBannerSerializer().required(),
      name: Joi.string().allow("").required(),
      slug_key: Joi.string().allow(""),
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

  /** @returns {CompanySerializer} */
  static CompanySerializer() {
    return Joi.object({
      stage: Joi.string().allow(""),
      _custom_json: Joi.any(),
      verified_on: Joi.string().allow(""),
      verified_by: CompanyProfilePlatformModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      created_by: CompanyProfilePlatformModel.UserSerializer(),
      company_type: Joi.string().allow("").required(),
      modified_on: Joi.string().allow(""),
      market_channels: Joi.array().items(Joi.string().allow("")),
      business_type: Joi.string().allow(""),
      addresses: Joi.array().items(
        CompanyProfilePlatformModel.GetAddressSerializer()
      ),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      details: CompanyProfilePlatformModel.CompanyDetails(),
      business_country_info: CompanyProfilePlatformModel.BusinessCountryInfo(),
      uid: Joi.number(),
      reject_reason: Joi.string().allow(""),
      name: Joi.string().allow(""),
      modified_by: CompanyProfilePlatformModel.UserSerializer(),
    });
  }

  /** @returns {CompanyBrandSerializer} */
  static CompanyBrandSerializer() {
    return Joi.object({
      stage: Joi.string().allow(""),
      verified_on: Joi.string().allow(""),
      verified_by: CompanyProfilePlatformModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      created_by: CompanyProfilePlatformModel.UserSerializer(),
      company: CompanyProfilePlatformModel.CompanySerializer(),
      warnings: Joi.any(),
      modified_on: Joi.string().allow(""),
      uid: Joi.number(),
      reject_reason: Joi.string().allow(""),
      brand: CompanyProfilePlatformModel.GetBrandResponseSerializer(),
      modified_by: CompanyProfilePlatformModel.UserSerializer(),
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
      total: Joi.number(),
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
      uid: Joi.number(),
      brands: Joi.array().items(Joi.number()).required(),
      company: Joi.number().required(),
    });
  }

  /** @returns {InvoiceCredSerializer} */
  static InvoiceCredSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),
      enabled: Joi.boolean(),
      password: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceDetailsSerializer} */
  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_invoice: CompanyProfilePlatformModel.InvoiceCredSerializer(),
      e_waybill: CompanyProfilePlatformModel.InvoiceCredSerializer(),
    });
  }

  /** @returns {GetCompanySerializer} */
  static GetCompanySerializer() {
    return Joi.object({
      stage: Joi.string().allow(""),
      verified_on: Joi.string().allow(""),
      verified_by: CompanyProfilePlatformModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      created_by: CompanyProfilePlatformModel.UserSerializer(),
      company_type: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      business_type: Joi.string().allow(""),
      addresses: Joi.array().items(
        CompanyProfilePlatformModel.GetAddressSerializer()
      ),
      uid: Joi.number(),
      reject_reason: Joi.string().allow(""),
      name: Joi.string().allow(""),
      modified_by: CompanyProfilePlatformModel.UserSerializer(),
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

  /** @returns {LocationTimingSerializer} */
  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number().required(),
      minute: Joi.number().required(),
    });
  }

  /** @returns {LocationDayWiseSerializer} */
  static LocationDayWiseSerializer() {
    return Joi.object({
      open: Joi.boolean().required(),
      weekday: Joi.string().allow("").required(),
      opening: CompanyProfilePlatformModel.LocationTimingSerializer(),
      closing: CompanyProfilePlatformModel.LocationTimingSerializer(),
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
      title: Joi.string().allow("").required(),
      holiday_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ProductReturnConfigSerializer} */
  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),
      store_uid: Joi.number(),
    });
  }

  /** @returns {GetLocationSerializer} */
  static GetLocationSerializer() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      phone_number: Joi.string().allow(""),
      contact_numbers: Joi.array().items(
        CompanyProfilePlatformModel.SellerPhoneNumber()
      ),
      gst_credentials: CompanyProfilePlatformModel.InvoiceDetailsSerializer(),
      name: Joi.string().allow("").required(),
      _custom_json: Joi.any(),
      verified_on: Joi.string().allow(""),
      created_by: CompanyProfilePlatformModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      company: CompanyProfilePlatformModel.GetCompanySerializer(),
      address: CompanyProfilePlatformModel.GetAddressSerializer().required(),
      warnings: Joi.any(),
      store_type: Joi.string().allow(""),
      manager: CompanyProfilePlatformModel.LocationManagerSerializer(),
      auto_invoice: Joi.boolean(),
      modified_on: Joi.string().allow(""),
      uid: Joi.number(),
      timing: Joi.array().items(
        CompanyProfilePlatformModel.LocationDayWiseSerializer()
      ),
      stage: Joi.string().allow(""),
      documents: Joi.array().items(CompanyProfilePlatformModel.Document()),
      credit_note: Joi.boolean(),
      holiday: Joi.array().items(
        CompanyProfilePlatformModel.HolidaySchemaSerializer()
      ),
      display_name: Joi.string().allow("").required(),
      product_return_config: CompanyProfilePlatformModel.ProductReturnConfigSerializer(),
      verified_by: CompanyProfilePlatformModel.UserSerializer(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      modified_by: CompanyProfilePlatformModel.UserSerializer(),
      tags: Joi.array().items(Joi.string().allow("")),
      default_order_acceptance_timing: Joi.boolean(),
      order_acceptance_timing: Joi.array().items(
        CompanyProfilePlatformModel.LocationDayWiseSerializer()
      ),
      avg_order_processing_time: CompanyProfilePlatformModel.AverageOrderProcessingTime(),
      bulk_shipment: Joi.boolean(),
      auto_assign_courier_partner: Joi.boolean(),
      is_hyperlocal_active: Joi.boolean(),
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

  /** @returns {AddressSerializer} */
  static AddressSerializer() {
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

  /** @returns {LocationSerializer} */
  static LocationSerializer() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      gst_credentials: CompanyProfilePlatformModel.InvoiceDetailsSerializer(),
      contact_numbers: Joi.array().items(
        CompanyProfilePlatformModel.SellerPhoneNumber()
      ),
      name: Joi.string().allow("").required(),
      _custom_json: Joi.any(),
      warnings: Joi.any(),
      address: CompanyProfilePlatformModel.AddressSerializer().required(),
      company: Joi.number().required(),
      store_type: Joi.string().allow(""),
      manager: CompanyProfilePlatformModel.LocationManagerSerializer(),
      auto_invoice: Joi.boolean(),
      uid: Joi.number(),
      timing: Joi.array().items(
        CompanyProfilePlatformModel.LocationDayWiseSerializer()
      ),
      stage: Joi.string().allow(""),
      documents: Joi.array()
        .items(CompanyProfilePlatformModel.Document())
        .required(),
      credit_note: Joi.boolean(),
      holiday: Joi.array().items(
        CompanyProfilePlatformModel.HolidaySchemaSerializer()
      ),
      product_return_config: CompanyProfilePlatformModel.ProductReturnConfigSerializer(),
      display_name: Joi.string().allow("").required(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      default_order_acceptance_timing: Joi.boolean(),
      order_acceptance_timing: Joi.array().items(
        CompanyProfilePlatformModel.LocationDayWiseSerializer()
      ),
      avg_order_processing_time: CompanyProfilePlatformModel.AverageOrderProcessingTime(),
      bulk_shipment: Joi.boolean(),
      auto_assign_courier_partner: Joi.boolean(),
      is_hyperlocal_active: Joi.boolean(),
    });
  }

  /** @returns {BulkLocationSerializer} */
  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfilePlatformModel.LocationSerializer()),
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
