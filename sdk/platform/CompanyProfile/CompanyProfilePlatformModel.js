const Joi = require("joi");

class CompanyProfileModel {
  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),

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
      uid: Joi.number().required(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      franchise_enabled: Joi.boolean(),

      warnings: Joi.any(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      contact_details: CompanyProfileModel.ContactDetails(),

      mode: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      company_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_details: CompanyProfileModel.BusinessDetails(),

      verified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_info: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      created_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),

      rate: Joi.number(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      pincode: Joi.number().required(),

      country: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      state: Joi.string().allow("").required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      business_details: CompanyProfileModel.BusinessDetails(),

      franchise_enabled: Joi.boolean(),

      business_info: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      warnings: Joi.any(),

      contact_details: CompanyProfileModel.ContactDetails(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      reject_reason: Joi.string().allow(""),

      _custom_json: Joi.any(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      company_type: Joi.string().allow(""),
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
      store: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      brand: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),
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

      slug_key: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      warnings: Joi.any(),

      mode: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      verified_on: Joi.string().allow(""),

      _locale_language: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      description: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow("").required(),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _locale_language: Joi.any(),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      brand_tier: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      socials: Joi.array().items(CompanyProfileModel.CompanySocialAccounts()),

      website_url: Joi.string().allow(""),
    });
  }

  static CompanySerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      details: CompanyProfileModel.CompanyDetails(),

      modified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      created_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      _custom_json: Joi.any(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      company_type: Joi.string().allow("").required(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      warnings: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),
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

  static AddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      pincode: Joi.number(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      company: Joi.number().required(),

      uid: Joi.number(),

      code: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      address: CompanyProfileModel.AddressSerializer().required(),

      warnings: Joi.any(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

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

  static _ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static _ArticleQuery() {
    return Joi.object({
      size: Joi.string().allow(""),

      ignored_stores: Joi.array().items(Joi.number()),

      item_id: Joi.number(),
    });
  }

  static _AssignStoreArticle() {
    return Joi.object({
      quantity: Joi.number(),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      query: CompanyProfileModel._ArticleQuery(),

      meta: Joi.any(),

      group_id: Joi.string().allow(""),
    });
  }

  static AssignStoreRequestValidator() {
    return Joi.object({
      articles: Joi.array().items(CompanyProfileModel._AssignStoreArticle()),

      channel_identifier: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      channel_type: Joi.string().allow(""),

      company_id: Joi.number(),

      pincode: Joi.string().allow(""),

      app_id: Joi.string().allow(""),
    });
  }

  static AssignStoreResponseSerializer() {
    return Joi.object({
      _id: Joi.string().allow(""),

      quantity: Joi.number(),

      store_pincode: Joi.string().allow(""),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      uid: Joi.string().allow(""),

      price_marked: Joi.number(),

      company_id: Joi.number(),

      preice_effective: Joi.number(),

      item_id: Joi.number(),

      meta: Joi.any(),

      s_city: Joi.string().allow(""),

      store_id: Joi.number(),

      index: Joi.number(),

      size: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }
}
module.exports = CompanyProfileModel;
