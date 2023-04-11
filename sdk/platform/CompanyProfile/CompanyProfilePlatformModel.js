const Joi = require("joi");

class CompanyProfileModel {
  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static ContactDetails() {
    return Joi.object({
      phone: Joi.array().items(CompanyProfileModel.SellerPhoneNumber()),

      emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      rate: Joi.number(),

      enable: Joi.boolean(),
    });
  }

  static Website() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      website: CompanyProfileModel.Website(),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number().required(),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number().required(),

      address1: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      _custom_json: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      contact_details: CompanyProfileModel.ContactDetails(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      created_on: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      modified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      mode: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      company_type: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      pincode: Joi.number().required(),

      longitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      rate: Joi.number(),

      enable: Joi.boolean(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      contact_details: CompanyProfileModel.ContactDetails(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      franchise_enabled: Joi.boolean(),

      warnings: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      name: Joi.string().allow(""),
    });
  }

  static ProfileSuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),

      uid: Joi.number(),
    });
  }

  static DocumentsObj() {
    return Joi.object({
      pending: Joi.number(),

      verified: Joi.number(),
    });
  }

  static MetricsSerializer() {
    return Joi.object({
      store_documents: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      company_documents: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      store: CompanyProfileModel.DocumentsObj(),
    });
  }

  static BrandBannerSerializer() {
    return Joi.object({
      portrait: Joi.string().allow(""),

      landscape: Joi.string().allow(""),
    });
  }

  static GetBrandResponseSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      slug_key: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      _locale_language: Joi.any(),

      mode: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      uid: Joi.number(),

      logo: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _locale_language: Joi.any(),

      _custom_json: Joi.any(),

      logo: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      brand_tier: Joi.string().allow(""),

      company_id: Joi.number(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),
    });
  }

  static CompanySocialAccounts() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      website_url: Joi.string().allow(""),

      socials: Joi.array().items(CompanyProfileModel.CompanySocialAccounts()),
    });
  }

  static CompanySerializer() {
    return Joi.object({
      market_channels: Joi.array().items(Joi.string().allow("")),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      _custom_json: Joi.any(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      details: CompanyProfileModel.CompanyDetails(),

      business_type: Joi.string().allow("").required(),

      reject_reason: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      verified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      warnings: Joi.any(),

      reject_reason: Joi.string().allow(""),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      company: CompanyProfileModel.CompanySerializer(),
    });
  }

  static Page() {
    return Joi.object({
      item_total: Joi.number(),

      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().allow("").required(),

      size: Joi.number(),
    });
  }

  static CompanyBrandListSerializer() {
    return Joi.object({
      items: Joi.array().items(CompanyProfileModel.CompanyBrandSerializer()),

      page: CompanyProfileModel.Page(),
    });
  }

  static CompanyBrandPostRequestSerializer() {
    return Joi.object({
      uid: Joi.number(),

      company: Joi.number().required(),

      brands: Joi.array().items(Joi.number()).required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_invoice: CompanyProfileModel.InvoiceCredSerializer(),

      e_waybill: CompanyProfileModel.InvoiceCredSerializer(),
    });
  }

  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number().required(),

      minute: Joi.number().required(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      opening: CompanyProfileModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),

      closing: CompanyProfileModel.LocationTimingSerializer(),
    });
  }

  static HolidayDateSerializer() {
    return Joi.object({
      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),
    });
  }

  static HolidaySchemaSerializer() {
    return Joi.object({
      date: CompanyProfileModel.HolidayDateSerializer().required(),

      holiday_type: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      phone_number: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      store_type: Joi.string().allow(""),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      display_name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      company: CompanyProfileModel.GetCompanySerializer(),

      name: Joi.string().allow("").required(),
    });
  }

  static LocationListSerializer() {
    return Joi.object({
      items: Joi.array().items(CompanyProfileModel.GetLocationSerializer()),

      page: CompanyProfileModel.Page(),
    });
  }

  static AddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number().required(),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number().required(),

      address1: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      _custom_json: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      stage: Joi.string().allow(""),

      warnings: Joi.any(),

      address: CompanyProfileModel.AddressSerializer().required(),

      code: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      display_name: Joi.string().allow("").required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      uid: Joi.number(),

      company: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }

  static _ArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static _ArticleQuery() {
    return Joi.object({
      item_id: Joi.number(),

      ignored_stores: Joi.array().items(Joi.number()),

      size: Joi.string().allow(""),
    });
  }

  static _AssignStoreArticle() {
    return Joi.object({
      quantity: Joi.number(),

      group_id: Joi.string().allow(""),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      meta: Joi.any(),

      query: CompanyProfileModel._ArticleQuery(),
    });
  }

  static AssignStoreRequestValidator() {
    return Joi.object({
      articles: Joi.array().items(CompanyProfileModel._AssignStoreArticle()),

      channel_identifier: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      channel_type: Joi.string().allow(""),

      app_id: Joi.string().allow(""),
    });
  }

  static AssignStoreResponseSerializer() {
    return Joi.object({
      quantity: Joi.number(),

      _id: Joi.string().allow(""),

      price_marked: Joi.number(),

      company_id: Joi.number(),

      item_id: Joi.number(),

      preice_effective: Joi.number(),

      store_id: Joi.number(),

      size: Joi.string().allow(""),

      status: Joi.boolean(),

      meta: Joi.any(),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      uid: Joi.string().allow(""),

      store_pincode: Joi.string().allow(""),

      index: Joi.number(),

      s_city: Joi.string().allow(""),
    });
  }
}
module.exports = CompanyProfileModel;
