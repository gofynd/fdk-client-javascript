const Joi = require("joi");

class CompanyProfileModel {
  static UserSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      rate: Joi.number(),

      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),
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

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      stage: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      uid: Joi.number().required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      company_type: Joi.string().allow("").required(),

      franchise_enabled: Joi.boolean(),

      business_type: Joi.string().allow("").required(),

      mode: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      contact_details: CompanyProfileModel.ContactDetails(),

      modified_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      latitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      rate: Joi.number(),

      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      _custom_json: Joi.any(),

      business_details: CompanyProfileModel.BusinessDetails(),

      company_type: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      name: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      business_type: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      warnings: Joi.any(),

      reject_reason: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProfileSuccessResponse() {
    return Joi.object({
      uid: Joi.number(),

      success: Joi.boolean(),
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
      brand: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      store_documents: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),
    });
  }

  static BrandBannerSerializer() {
    return Joi.object({
      landscape: Joi.string().allow(""),

      portrait: Joi.string().allow(""),
    });
  }

  static GetBrandResponseSerializer() {
    return Joi.object({
      stage: Joi.string().allow(""),

      _locale_language: Joi.any(),

      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      mode: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      description: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      logo: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      company_id: Joi.number(),

      brand_tier: Joi.string().allow(""),
    });
  }

  static CompanySocialAccounts() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),
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
      verified_on: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      company_type: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow("").required(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      company: CompanyProfileModel.CompanySerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),
    });
  }

  static Page() {
    return Joi.object({
      has_next: Joi.boolean(),

      current: Joi.number(),

      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      type: Joi.string().allow("").required(),

      size: Joi.number(),

      item_total: Joi.number(),
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

  static GetCompanySerializer() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),
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

      title: Joi.string().allow("").required(),

      holiday_type: Joi.string().allow("").required(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      enabled: Joi.boolean(),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),

      closing: CompanyProfileModel.LocationTimingSerializer(),

      opening: CompanyProfileModel.LocationTimingSerializer(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      address: CompanyProfileModel.GetAddressSerializer().required(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      display_name: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      company: CompanyProfileModel.GetCompanySerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      phone_number: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static LocationListSerializer() {
    return Joi.object({
      items: Joi.array().items(CompanyProfileModel.GetLocationSerializer()),

      page: CompanyProfileModel.Page(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      address: CompanyProfileModel.GetAddressSerializer().required(),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      uid: Joi.number(),

      display_name: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      warnings: Joi.any(),

      company: Joi.number().required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      code: Joi.string().allow("").required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }

  static _ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static _ArticleQuery() {
    return Joi.object({
      ignored_stores: Joi.array().items(Joi.number()),

      item_id: Joi.number(),

      size: Joi.string().allow(""),
    });
  }

  static _AssignStoreArticle() {
    return Joi.object({
      group_id: Joi.string().allow(""),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      meta: Joi.any(),

      query: CompanyProfileModel._ArticleQuery(),

      quantity: Joi.number(),
    });
  }

  static AssignStoreRequestValidator() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      pincode: Joi.string().allow(""),

      channel_identifier: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      company_id: Joi.number(),

      articles: Joi.array().items(CompanyProfileModel._AssignStoreArticle()),
    });
  }

  static AssignStoreResponseSerializer() {
    return Joi.object({
      _id: Joi.string().allow(""),

      store_id: Joi.number(),

      price_marked: Joi.number(),

      status: Joi.boolean(),

      index: Joi.number(),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      meta: Joi.any(),

      preice_effective: Joi.number(),

      size: Joi.string().allow(""),

      s_city: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      company_id: Joi.number(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      store_pincode: Joi.string().allow(""),
    });
  }
}
module.exports = CompanyProfileModel;
