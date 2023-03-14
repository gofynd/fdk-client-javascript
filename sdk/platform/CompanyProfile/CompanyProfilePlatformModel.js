const Joi = require("joi");

class CompanyProfileModel {
  static UserSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
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

  static GetAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      rate: Joi.number(),

      enable: Joi.boolean(),
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
      emails: Joi.array().items(Joi.string().allow("")),

      phone: Joi.array().items(CompanyProfileModel.SellerPhoneNumber()),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      _custom_json: Joi.any(),

      franchise_enabled: Joi.boolean(),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      modified_by: CompanyProfileModel.UserSerializer(),

      contact_details: CompanyProfileModel.ContactDetails(),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_info: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number().required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      status: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      pincode: Joi.number().required(),

      city: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
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
      business_details: CompanyProfileModel.BusinessDetails(),

      business_info: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      contact_details: CompanyProfileModel.ContactDetails(),

      company_type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      reject_reason: Joi.string().allow(""),

      warnings: Joi.any(),

      business_type: Joi.string().allow(""),
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
      verified: Joi.number(),

      pending: Joi.number(),
    });
  }

  static MetricsSerializer() {
    return Joi.object({
      store_documents: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      store: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),
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

      description: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      logo: Joi.string().allow(""),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      mode: Joi.string().allow(""),

      _locale_language: Joi.any(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      verified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      company_id: Joi.number(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      logo: Joi.string().allow("").required(),

      brand_tier: Joi.string().allow(""),

      uid: Joi.number(),
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
      verified_by: CompanyProfileModel.UserSerializer(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      created_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      details: CompanyProfileModel.CompanyDetails(),

      modified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      verified_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      warnings: Joi.any(),

      uid: Joi.number(),
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
      company: Joi.number().required(),

      brands: Joi.array().items(Joi.number()).required(),

      uid: Joi.number(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_waybill: CompanyProfileModel.InvoiceCredSerializer(),

      e_invoice: CompanyProfileModel.InvoiceCredSerializer(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      verified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      modified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),
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

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static HolidayDateSerializer() {
    return Joi.object({
      start_date: Joi.string().allow("").required(),

      end_date: Joi.string().allow("").required(),
    });
  }

  static HolidaySchemaSerializer() {
    return Joi.object({
      date: CompanyProfileModel.HolidayDateSerializer().required(),

      title: Joi.string().allow("").required(),

      holiday_type: Joi.string().allow("").required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      company: CompanyProfileModel.GetCompanySerializer(),

      modified_on: Joi.string().allow(""),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      name: Joi.string().allow("").required(),

      phone_number: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      display_name: Joi.string().allow("").required(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      code: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      stage: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),
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
      _custom_json: Joi.any(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      display_name: Joi.string().allow("").required(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      stage: Joi.string().allow(""),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      company: Joi.number().required(),

      store_type: Joi.string().allow(""),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      warnings: Joi.any(),

      uid: Joi.number(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }

  static _ArticleQuery() {
    return Joi.object({
      item_id: Joi.number(),

      ignored_stores: Joi.array().items(Joi.number()),

      size: Joi.string().allow(""),
    });
  }

  static _ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static _AssignStoreArticle() {
    return Joi.object({
      query: CompanyProfileModel._ArticleQuery(),

      group_id: Joi.string().allow(""),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      meta: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static AssignStoreRequestValidator() {
    return Joi.object({
      channel_identifier: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      app_id: Joi.string().allow(""),

      company_id: Joi.number(),

      articles: Joi.array().items(CompanyProfileModel._AssignStoreArticle()),

      channel_type: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
    });
  }

  static AssignStoreResponseSerializer() {
    return Joi.object({
      status: Joi.boolean(),

      s_city: Joi.string().allow(""),

      store_id: Joi.number(),

      index: Joi.number(),

      _id: Joi.string().allow(""),

      store_pincode: Joi.string().allow(""),

      company_id: Joi.number(),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      size: Joi.string().allow(""),

      meta: Joi.any(),

      item_id: Joi.number(),

      price_marked: Joi.number(),

      preice_effective: Joi.number(),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),
    });
  }
}
module.exports = CompanyProfileModel;
