const Joi = require("joi");

class CompanyProfileModel {
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

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static ContactDetails() {
    return Joi.object({
      emails: Joi.array().items(Joi.string().allow("")),

      phone: Joi.array().items(CompanyProfileModel.SellerPhoneNumber()),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      rate: Joi.number(),

      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      legal_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      business_details: CompanyProfileModel.BusinessDetails(),

      contact_details: CompanyProfileModel.ContactDetails(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      created_by: CompanyProfileModel.UserSerializer(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      franchise_enabled: Joi.boolean(),

      business_info: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      warnings: Joi.any(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      uid: Joi.number().required(),

      mode: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      city: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      landmark: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      rate: Joi.number(),

      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      business_details: CompanyProfileModel.BusinessDetails(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      contact_details: CompanyProfileModel.ContactDetails(),

      reject_reason: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      franchise_enabled: Joi.boolean(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),
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
      uid: Joi.number(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      brand: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

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
      reject_reason: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      logo: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      warnings: Joi.any(),

      name: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      _locale_language: Joi.any(),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      mode: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      uid: Joi.number(),

      company_id: Joi.number(),

      _custom_json: Joi.any(),

      _locale_language: Joi.any(),

      brand_tier: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").required(),

      description: Joi.string().allow(""),
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
      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      business_type: Joi.string().allow("").required(),

      details: CompanyProfileModel.CompanyDetails(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      warnings: Joi.any(),

      verified_on: Joi.string().allow(""),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      company: CompanyProfileModel.CompanySerializer(),

      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),
    });
  }

  static Page() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      item_total: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow("").required(),

      size: Joi.number(),

      current: Joi.number(),

      has_previous: Joi.boolean(),
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

      brands: Joi.array().items(Joi.number()).required(),

      company: Joi.number().required(),
    });
  }

  static LocationTimingSerializer() {
    return Joi.object({
      minute: Joi.number().required(),

      hour: Joi.number().required(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      open: Joi.boolean().required(),

      opening: CompanyProfileModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      closing: CompanyProfileModel.LocationTimingSerializer(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      enabled: Joi.boolean(),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_invoice: CompanyProfileModel.InvoiceCredSerializer(),

      e_waybill: CompanyProfileModel.InvoiceCredSerializer(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),
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

  static GetCompanySerializer() {
    return Joi.object({
      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      created_by: CompanyProfileModel.UserSerializer(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      store_type: Joi.string().allow(""),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      warnings: Joi.any(),

      name: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      phone_number: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      company: CompanyProfileModel.GetCompanySerializer(),
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
      uid: Joi.number(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      store_type: Joi.string().allow(""),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      code: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      stage: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      warnings: Joi.any(),

      name: Joi.string().allow("").required(),

      company: Joi.number().required(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }

  static _ArticleQuery() {
    return Joi.object({
      size: Joi.string().allow(""),

      ignored_stores: Joi.array().items(Joi.number()),

      item_id: Joi.number(),
    });
  }

  static _ArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static _AssignStoreArticle() {
    return Joi.object({
      quantity: Joi.number(),

      query: CompanyProfileModel._ArticleQuery(),

      meta: Joi.any(),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      group_id: Joi.string().allow(""),
    });
  }

  static AssignStoreRequestValidator() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      app_id: Joi.string().allow(""),

      channel_identifier: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      articles: Joi.array().items(CompanyProfileModel._AssignStoreArticle()),
    });
  }

  static AssignStoreResponseSerializer() {
    return Joi.object({
      uid: Joi.string().allow(""),

      store_pincode: Joi.string().allow(""),

      item_id: Joi.number(),

      company_id: Joi.number(),

      store_id: Joi.number(),

      price_marked: Joi.number(),

      _id: Joi.string().allow(""),

      quantity: Joi.number(),

      meta: Joi.any(),

      preice_effective: Joi.number(),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      status: Joi.boolean(),

      s_city: Joi.string().allow(""),

      index: Joi.number(),

      size: Joi.string().allow(""),
    });
  }
}
module.exports = CompanyProfileModel;
