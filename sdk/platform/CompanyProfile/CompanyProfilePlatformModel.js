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

  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      country: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address1: Joi.string().allow(""),

      latitude: Joi.number().required(),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),

      rate: Joi.number(),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
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

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      business_details: CompanyProfileModel.BusinessDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number().required(),

      created_on: Joi.string().allow(""),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      business_type: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      mode: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      franchise_enabled: Joi.boolean(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      modified_by: CompanyProfileModel.UserSerializer(),

      contact_details: CompanyProfileModel.ContactDetails(),

      company_type: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      pincode: Joi.number().required(),

      country: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow("").required(),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),

      rate: Joi.number(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      reject_reason: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      warnings: Joi.any(),

      company_type: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_details: CompanyProfileModel.BusinessDetails(),

      business_type: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      name: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_info: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      _custom_json: Joi.any(),
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

      store: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      brand: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),
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
      reject_reason: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),

      slug_key: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      logo: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      uid: Joi.number(),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      logo: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      name: Joi.string().allow("").required(),

      brand_tier: Joi.string().allow(""),

      company_id: Joi.number(),

      _custom_json: Joi.any(),
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
      created_by: CompanyProfileModel.UserSerializer(),

      details: CompanyProfileModel.CompanyDetails(),

      uid: Joi.number(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      verified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_type: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      created_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      company: CompanyProfileModel.CompanySerializer(),

      verified_on: Joi.string().allow(""),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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
      brands: Joi.array().items(Joi.number()).required(),

      uid: Joi.number(),

      company: Joi.number().required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
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

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      password: Joi.string().allow(""),

      enabled: Joi.boolean(),

      username: Joi.string().allow(""),
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
      created_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      business_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      opening: CompanyProfileModel.LocationTimingSerializer(),

      closing: CompanyProfileModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      phone_number: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      name: Joi.string().allow("").required(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      modified_on: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      verified_on: Joi.string().allow(""),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      store_type: Joi.string().allow(""),

      company: CompanyProfileModel.GetCompanySerializer(),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),
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
      pincode: Joi.number(),

      country: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address1: Joi.string().allow(""),

      latitude: Joi.number().required(),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      uid: Joi.number(),

      display_name: Joi.string().allow("").required(),

      warnings: Joi.any(),

      store_type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      code: Joi.string().allow("").required(),

      company: Joi.number().required(),

      address: CompanyProfileModel.AddressSerializer().required(),

      stage: Joi.string().allow(""),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      name: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      _custom_json: Joi.any(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
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
      item_id: Joi.number(),

      size: Joi.string().allow(""),

      ignored_stores: Joi.array().items(Joi.number()),
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

      meta: Joi.any(),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      quantity: Joi.number(),

      group_id: Joi.string().allow(""),
    });
  }

  static AssignStoreRequestValidator() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      pincode: Joi.string().allow(""),

      channel_identifier: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      company_id: Joi.number(),

      app_id: Joi.string().allow(""),

      articles: Joi.array().items(CompanyProfileModel._AssignStoreArticle()),
    });
  }

  static AssignStoreResponseSerializer() {
    return Joi.object({
      store_id: Joi.number(),

      uid: Joi.string().allow(""),

      company_id: Joi.number(),

      size: Joi.string().allow(""),

      status: Joi.boolean(),

      store_pincode: Joi.string().allow(""),

      item_id: Joi.number(),

      meta: Joi.any(),

      _id: Joi.string().allow(""),

      preice_effective: Joi.number(),

      index: Joi.number(),

      price_marked: Joi.number(),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      s_city: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }
}
module.exports = CompanyProfileModel;
