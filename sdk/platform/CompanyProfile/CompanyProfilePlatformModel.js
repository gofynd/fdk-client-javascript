const Joi = require("joi");

class CompanyProfileModel {
  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),

      rate: Joi.number(),
    });
  }

  static ContactDetails() {
    return Joi.object({
      phone: Joi.array().items(CompanyProfileModel.SellerPhoneNumber()),

      emails: Joi.array().items(Joi.string().allow("")),
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

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      created_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_info: Joi.string().allow(""),

      warnings: Joi.any(),

      business_type: Joi.string().allow("").required(),

      mode: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      company_type: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      verified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      franchise_enabled: Joi.boolean(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),
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
      pincode: Joi.number().required(),

      landmark: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      franchise_enabled: Joi.boolean(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      warnings: Joi.any(),

      business_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      _custom_json: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_info: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      contact_details: CompanyProfileModel.ContactDetails(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      company_type: Joi.string().allow(""),
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

      store: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      company_documents: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),
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
      modified_on: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      slug_key: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      mode: Joi.string().allow(""),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      logo: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      brand_tier: Joi.string().allow(""),

      _locale_language: Joi.any(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      logo: Joi.string().allow("").required(),

      company_id: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),
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
      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      business_type: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      details: CompanyProfileModel.CompanyDetails(),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      warnings: Joi.any(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      uid: Joi.number(),

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
      brands: Joi.array().items(Joi.number()).required(),

      company: Joi.number().required(),

      uid: Joi.number(),
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

  static AddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      latitude: Joi.number().required(),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      company: Joi.number().required(),

      name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      stage: Joi.string().allow(""),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      _custom_json: Joi.any(),

      code: Joi.string().allow("").required(),

      address: CompanyProfileModel.AddressSerializer().required(),

      display_name: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      uid: Joi.number(),
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
      article_assignment: CompanyProfileModel._ArticleAssignment(),

      meta: Joi.any(),

      quantity: Joi.number(),

      group_id: Joi.string().allow(""),

      query: CompanyProfileModel._ArticleQuery(),
    });
  }

  static AssignStoreRequestValidator() {
    return Joi.object({
      pincode: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      channel_type: Joi.string().allow(""),

      company_id: Joi.number(),

      articles: Joi.array().items(CompanyProfileModel._AssignStoreArticle()),

      channel_identifier: Joi.string().allow(""),

      app_id: Joi.string().allow(""),
    });
  }

  static AssignStoreResponseSerializer() {
    return Joi.object({
      s_city: Joi.string().allow(""),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      price_marked: Joi.number(),

      _id: Joi.string().allow(""),

      size: Joi.string().allow(""),

      meta: Joi.any(),

      store_pincode: Joi.string().allow(""),

      quantity: Joi.number(),

      status: Joi.boolean(),

      store_id: Joi.number(),

      company_id: Joi.number(),

      index: Joi.number(),

      preice_effective: Joi.number(),

      item_id: Joi.number(),

      uid: Joi.string().allow(""),
    });
  }
}
module.exports = CompanyProfileModel;
