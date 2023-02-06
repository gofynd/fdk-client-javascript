const Joi = require("joi");

class CompanyProfileModel {
  static GetAddressSerializer() {
    return Joi.object({
      longitude: Joi.number(),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
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
      phone: Joi.array().items(CompanyProfileModel.SellerPhoneNumber()),

      emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      rate: Joi.number(),

      effective_date: Joi.string().allow(""),

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

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      uid: Joi.number().required(),

      contact_details: CompanyProfileModel.ContactDetails(),

      mode: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow("").required(),

      warnings: Joi.any(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      stage: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      company_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      business_info: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      longitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

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
      warnings: Joi.any(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      reject_reason: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      name: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      contact_details: CompanyProfileModel.ContactDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      business_details: CompanyProfileModel.BusinessDetails(),

      company_type: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_type: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),
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
      store_documents: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      product: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),
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
      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      mode: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      slug_key: Joi.string().allow(""),

      warnings: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      stage: Joi.string().allow(""),

      _locale_language: Joi.any(),

      logo: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      description: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      logo: Joi.string().allow("").required(),

      brand_tier: Joi.string().allow(""),

      company_id: Joi.number(),

      _custom_json: Joi.any(),

      uid: Joi.number(),
    });
  }

  static Page() {
    return Joi.object({
      item_total: Joi.number(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),

      next_id: Joi.string().allow(""),

      size: Joi.number(),

      current: Joi.number(),

      has_previous: Joi.boolean(),
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
      socials: Joi.array().items(CompanyProfileModel.CompanySocialAccounts()),

      website_url: Joi.string().allow(""),
    });
  }

  static CompanySerializer() {
    return Joi.object({
      business_type: Joi.string().allow("").required(),

      details: CompanyProfileModel.CompanyDetails(),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      reject_reason: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      uid: Joi.number(),

      company_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      warnings: Joi.any(),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      stage: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      company: CompanyProfileModel.CompanySerializer(),

      modified_on: Joi.string().allow(""),
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

      uid: Joi.number(),

      company: Joi.number().required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
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

  static GetCompanySerializer() {
    return Joi.object({
      business_type: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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

      closing: CompanyProfileModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),
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
      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      store_type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      company: CompanyProfileModel.GetCompanySerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      phone_number: Joi.string().allow("").required(),

      uid: Joi.number(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      verified_by: CompanyProfileModel.UserSerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      code: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),
    });
  }

  static LocationListSerializer() {
    return Joi.object({
      page: CompanyProfileModel.Page(),

      items: Joi.array().items(CompanyProfileModel.GetLocationSerializer()),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      warnings: Joi.any(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      display_name: Joi.string().allow("").required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      stage: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      company: Joi.number().required(),

      _custom_json: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

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
      group_id: Joi.string().allow(""),

      quantity: Joi.number(),

      query: CompanyProfileModel._ArticleQuery(),

      meta: Joi.any(),

      article_assignment: CompanyProfileModel._ArticleAssignment(),
    });
  }

  static AssignStoreRequestValidator() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      pincode: Joi.string().allow(""),

      company_id: Joi.number(),

      channel_identifier: Joi.string().allow(""),

      articles: Joi.array().items(CompanyProfileModel._AssignStoreArticle()),
    });
  }

  static AssignStoreResponseSerializer() {
    return Joi.object({
      store_id: Joi.number(),

      price_marked: Joi.number(),

      store_pincode: Joi.string().allow(""),

      index: Joi.number(),

      status: Joi.boolean(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      s_city: Joi.string().allow(""),

      item_id: Joi.number(),

      preice_effective: Joi.number(),

      company_id: Joi.number(),

      meta: Joi.any(),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      article_assignment: CompanyProfileModel._ArticleAssignment(),
    });
  }
}
module.exports = CompanyProfileModel;
