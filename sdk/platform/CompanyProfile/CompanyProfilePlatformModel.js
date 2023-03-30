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

  static CompanyTaxesSerializer() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      rate: Joi.number(),

      enable: Joi.boolean(),
    });
  }

  static ContactDetails() {
    return Joi.object({
      phone: Joi.array().items(CompanyProfileModel.SellerPhoneNumber()),

      emails: Joi.array().items(Joi.string().allow("")),
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
      business_info: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      stage: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      name: Joi.string().allow(""),

      uid: Joi.number().required(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      created_on: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      mode: Joi.string().allow(""),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      created_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      rate: Joi.number(),

      enable: Joi.boolean(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      latitude: Joi.number().required(),

      city: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      business_info: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      contact_details: CompanyProfileModel.ContactDetails(),

      business_type: Joi.string().allow(""),

      warnings: Joi.any(),

      reject_reason: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      _custom_json: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_details: CompanyProfileModel.BusinessDetails(),

      name: Joi.string().allow(""),

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
      verified: Joi.number(),

      pending: Joi.number(),
    });
  }

  static MetricsSerializer() {
    return Joi.object({
      company_documents: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),
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
      synonyms: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      _locale_language: Joi.any(),

      stage: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      slug_key: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      _custom_json: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      brand_tier: Joi.string().allow(""),

      company_id: Joi.number(),

      description: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      name: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

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

      company_type: Joi.string().allow("").required(),

      details: CompanyProfileModel.CompanyDetails(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow("").required(),

      reject_reason: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      market_channels: Joi.array().items(Joi.string().allow("")),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      stage: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      warnings: Joi.any(),

      reject_reason: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),
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

      uid: Joi.number(),

      brands: Joi.array().items(Joi.number()).required(),
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

      holiday_type: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
    });
  }

  static AddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      latitude: Joi.number().required(),

      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      manager: CompanyProfileModel.LocationManagerSerializer(),

      code: Joi.string().allow("").required(),

      address: CompanyProfileModel.AddressSerializer().required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      display_name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      company: Joi.number().required(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),
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

      item_id: Joi.number(),

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

      quantity: Joi.number(),

      group_id: Joi.string().allow(""),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      meta: Joi.any(),
    });
  }

  static AssignStoreRequestValidator() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      articles: Joi.array().items(CompanyProfileModel._AssignStoreArticle()),

      company_id: Joi.number(),

      pincode: Joi.string().allow(""),

      channel_identifier: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),
    });
  }

  static AssignStoreResponseSerializer() {
    return Joi.object({
      company_id: Joi.number(),

      _id: Joi.string().allow(""),

      s_city: Joi.string().allow(""),

      index: Joi.number(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      status: Joi.boolean(),

      meta: Joi.any(),

      size: Joi.string().allow(""),

      store_id: Joi.number(),

      price_marked: Joi.number(),

      store_pincode: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      preice_effective: Joi.number(),
    });
  }
}
module.exports = CompanyProfileModel;
