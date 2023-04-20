const Joi = require("joi");

class CompanyProfileModel {
  static CompanyTaxesSerializer() {
    return Joi.object({
      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),

      rate: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
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

  static GetAddressSerializer() {
    return Joi.object({
      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      country_code: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      created_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      mode: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      business_info: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      warnings: Joi.any(),

      uid: Joi.number().required(),

      name: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      _custom_json: Joi.any(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),

      rate: Joi.number(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      pincode: Joi.number().required(),

      country_code: Joi.string().allow(""),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      franchise_enabled: Joi.boolean(),

      _custom_json: Joi.any(),

      reject_reason: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_details: CompanyProfileModel.BusinessDetails(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      business_info: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      warnings: Joi.any(),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      name: Joi.string().allow(""),
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
      store_documents: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      store: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

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
      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      _locale_language: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      brand_tier: Joi.string().allow(""),

      company_id: Joi.number(),
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
      _custom_json: Joi.any(),

      company_type: Joi.string().allow("").required(),

      reject_reason: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      created_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      reject_reason: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      warnings: Joi.any(),

      verified_on: Joi.string().allow(""),
    });
  }

  static CompanyBrandListSerializer() {
    return Joi.object({
      page: CompanyProfileModel.Page(),

      items: Joi.array().items(CompanyProfileModel.CompanyBrandSerializer()),
    });
  }

  static CompanyBrandPostRequestSerializer() {
    return Joi.object({
      uid: Joi.number(),

      brands: Joi.array().items(Joi.number()).required(),

      company: Joi.number().required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),
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

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
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
      holiday_type: Joi.string().allow("").required(),

      date: CompanyProfileModel.HolidayDateSerializer().required(),

      title: Joi.string().allow("").required(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),
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
      open: Joi.boolean().required(),

      opening: CompanyProfileModel.LocationTimingSerializer(),

      closing: CompanyProfileModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      manager: CompanyProfileModel.LocationManagerSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      phone_number: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      modified_on: Joi.string().allow(""),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      verified_on: Joi.string().allow(""),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      company: CompanyProfileModel.GetCompanySerializer(),

      display_name: Joi.string().allow("").required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),
    });
  }

  static LocationListSerializer() {
    return Joi.object({
      page: CompanyProfileModel.Page(),

      items: Joi.array().items(CompanyProfileModel.GetLocationSerializer()),
    });
  }

  static AddressSerializer() {
    return Joi.object({
      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      country_code: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      _custom_json: Joi.any(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      company: Joi.number().required(),

      code: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      stage: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      warnings: Joi.any(),

      address: CompanyProfileModel.AddressSerializer().required(),

      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }

  static _ArticleQuery() {
    return Joi.object({
      ignored_stores: Joi.array().items(Joi.number()),

      size: Joi.string().allow(""),

      item_id: Joi.number(),
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

      quantity: Joi.number(),

      meta: Joi.any(),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      group_id: Joi.string().allow(""),
    });
  }

  static AssignStoreRequestValidator() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      articles: Joi.array().items(CompanyProfileModel._AssignStoreArticle()),

      channel_identifier: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      pincode: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static AssignStoreResponseSerializer() {
    return Joi.object({
      s_city: Joi.string().allow(""),

      index: Joi.number(),

      price_marked: Joi.number(),

      quantity: Joi.number(),

      store_pincode: Joi.string().allow(""),

      item_id: Joi.number(),

      meta: Joi.any(),

      size: Joi.string().allow(""),

      status: Joi.boolean(),

      preice_effective: Joi.number(),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      store_id: Joi.number(),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }
}
module.exports = CompanyProfileModel;
