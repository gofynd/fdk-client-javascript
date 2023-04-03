const Joi = require("joi");

class CompanyProfileModel {
  static CompanyTaxesSerializer() {
    return Joi.object({
      enable: Joi.boolean(),

      rate: Joi.number(),

      effective_date: Joi.string().allow(""),
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
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      uid: Joi.number().required(),

      verified_on: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      created_on: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      business_details: CompanyProfileModel.BusinessDetails(),

      warnings: Joi.any(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      business_info: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      mode: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      company_type: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow("").required(),

      contact_details: CompanyProfileModel.ContactDetails(),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      city: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      enable: Joi.boolean(),

      rate: Joi.number(),

      effective_date: Joi.string().allow(""),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      contact_details: CompanyProfileModel.ContactDetails(),

      reject_reason: Joi.string().allow(""),

      _custom_json: Joi.any(),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      franchise_enabled: Joi.boolean(),

      business_info: Joi.string().allow(""),

      name: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      warnings: Joi.any(),

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
      company_documents: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      product: CompanyProfileModel.DocumentsObj(),

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
      banner: CompanyProfileModel.BrandBannerSerializer(),

      slug_key: Joi.string().allow(""),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      warnings: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      mode: Joi.string().allow(""),

      _locale_language: Joi.any(),

      description: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      _custom_json: Joi.any(),

      modified_by: CompanyProfileModel.UserSerializer(),

      logo: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      banner: CompanyProfileModel.BrandBannerSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      company_id: Joi.number(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      brand_tier: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),
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
      socials: Joi.array().items(CompanyProfileModel.CompanySocialAccounts()),

      website_url: Joi.string().allow(""),
    });
  }

  static CompanySerializer() {
    return Joi.object({
      stage: Joi.string().allow(""),

      market_channels: Joi.array().items(Joi.string().allow("")),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      name: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      company: CompanyProfileModel.CompanySerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      warnings: Joi.any(),
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

  static GetCompanySerializer() {
    return Joi.object({
      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
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

      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),

      closing: CompanyProfileModel.LocationTimingSerializer(),
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

  static HolidayDateSerializer() {
    return Joi.object({
      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),
    });
  }

  static HolidaySchemaSerializer() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      holiday_type: Joi.string().allow("").required(),

      date: CompanyProfileModel.HolidayDateSerializer().required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      company: CompanyProfileModel.GetCompanySerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      warnings: Joi.any(),

      store_type: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      verified_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      phone_number: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      display_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      code: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),
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
      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      company: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      stage: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      _custom_json: Joi.any(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      uid: Joi.number(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      code: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      name: Joi.string().allow("").required(),

      address: CompanyProfileModel.AddressSerializer().required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      warnings: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
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

      item_id: Joi.number(),

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
      meta: Joi.any(),

      query: CompanyProfileModel._ArticleQuery(),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      group_id: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static AssignStoreRequestValidator() {
    return Joi.object({
      company_id: Joi.number(),

      channel_identifier: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      articles: Joi.array().items(CompanyProfileModel._AssignStoreArticle()),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static AssignStoreResponseSerializer() {
    return Joi.object({
      meta: Joi.any(),

      store_pincode: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      company_id: Joi.number(),

      store_id: Joi.number(),

      size: Joi.string().allow(""),

      item_id: Joi.number(),

      preice_effective: Joi.number(),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),

      article_assignment: CompanyProfileModel._ArticleAssignment(),

      index: Joi.number(),

      price_marked: Joi.number(),

      status: Joi.boolean(),

      s_city: Joi.string().allow(""),
    });
  }
}
module.exports = CompanyProfileModel;
