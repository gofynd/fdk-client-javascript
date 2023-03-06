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

  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number().required(),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      latitude: Joi.number().required(),

      address2: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      value: Joi.string().allow("").required(),
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

  static CompanyTaxesSerializer() {
    return Joi.object({
      rate: Joi.number(),

      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      uid: Joi.number().required(),

      name: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      warnings: Joi.any(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      company_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_type: Joi.string().allow("").required(),

      mode: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),
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
      address_type: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number().required(),

      latitude: Joi.number().required(),
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
      name: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      warnings: Joi.any(),

      company_type: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      franchise_enabled: Joi.boolean(),

      _custom_json: Joi.any(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      contact_details: CompanyProfileModel.ContactDetails(),

      reject_reason: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_type: Joi.string().allow(""),
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
      verified: Joi.number(),

      pending: Joi.number(),
    });
  }

  static MetricsSerializer() {
    return Joi.object({
      uid: Joi.number(),

      product: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      brand: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),
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
      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      warnings: Joi.any(),

      reject_reason: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      _locale_language: Joi.any(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      mode: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      brand_tier: Joi.string().allow(""),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      company_id: Joi.number(),
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

      verified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      market_channels: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),

      created_by: CompanyProfileModel.UserSerializer(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_type: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      company: CompanyProfileModel.CompanySerializer(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      warnings: Joi.any(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),
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

      brands: Joi.array().items(Joi.number()).required(),

      company: Joi.number().required(),
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

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),
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

      title: Joi.string().allow("").required(),

      date: CompanyProfileModel.HolidayDateSerializer().required(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),
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

      closing: CompanyProfileModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      warnings: Joi.any(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      store_type: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      display_name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      stage: Joi.string().allow(""),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      created_on: Joi.string().allow(""),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      company: CompanyProfileModel.GetCompanySerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      _custom_json: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      phone_number: Joi.string().allow(""),

      code: Joi.string().allow("").required(),
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
      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number().required(),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      latitude: Joi.number().required(),

      address2: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      company: Joi.number().required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      stage: Joi.string().allow(""),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      warnings: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      store_type: Joi.string().allow(""),

      address: CompanyProfileModel.AddressSerializer().required(),

      _custom_json: Joi.any(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      code: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      display_name: Joi.string().allow("").required(),
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

      size: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static _AssignStoreArticle() {
    return Joi.object({
      meta: Joi.any(),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      query: CompanyProfileModel._ArticleQuery(),

      quantity: Joi.number(),

      group_id: Joi.string().allow(""),
    });
  }

  static AssignStoreRequestValidator() {
    return Joi.object({
      channel_type: Joi.string().allow(""),

      channel_identifier: Joi.string().allow(""),

      articles: Joi.array().items(CompanyProfileModel._AssignStoreArticle()),

      store_ids: Joi.array().items(Joi.number()),

      app_id: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static AssignStoreResponseSerializer() {
    return Joi.object({
      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      company_id: Joi.number(),

      meta: Joi.any(),

      size: Joi.string().allow(""),

      store_id: Joi.number(),

      price_marked: Joi.number(),

      index: Joi.number(),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      s_city: Joi.string().allow(""),

      status: Joi.boolean(),

      preice_effective: Joi.number(),

      store_pincode: Joi.string().allow(""),

      quantity: Joi.number(),

      item_id: Joi.number(),
    });
  }
}
module.exports = CompanyProfileModel;
