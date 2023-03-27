const Joi = require("joi");

class CompanyProfileModel {
  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      phone: Joi.array().items(CompanyProfileModel.SellerPhoneNumber()),

      emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
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

  static CompanyTaxesSerializer() {
    return Joi.object({
      enable: Joi.boolean(),

      rate: Joi.number(),

      effective_date: Joi.string().allow(""),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      warnings: Joi.any(),

      verified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      contact_details: CompanyProfileModel.ContactDetails(),

      mode: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      business_info: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      uid: Joi.number().required(),

      created_on: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      business_details: CompanyProfileModel.BusinessDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_type: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      status: Joi.number(),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      pincode: Joi.number().required(),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),
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
      business_info: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      franchise_enabled: Joi.boolean(),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      contact_details: CompanyProfileModel.ContactDetails(),

      reject_reason: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      business_details: CompanyProfileModel.BusinessDetails(),

      company_type: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),
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
      product: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      store: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),
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
      warnings: Joi.any(),

      verified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      mode: Joi.string().allow(""),

      description: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      logo: Joi.string().allow(""),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      stage: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      logo: Joi.string().allow("").required(),

      uid: Joi.number(),

      company_id: Joi.number(),

      brand_tier: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      modified_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      details: CompanyProfileModel.CompanyDetails(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      verified_on: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      modified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      company: CompanyProfileModel.CompanySerializer(),

      verified_on: Joi.string().allow(""),
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

  static LocationTimingSerializer() {
    return Joi.object({
      minute: Joi.number().required(),

      hour: Joi.number().required(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      weekday: Joi.string().allow("").required(),

      opening: CompanyProfileModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      closing: CompanyProfileModel.LocationTimingSerializer(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      enabled: Joi.boolean(),
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
      modified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      verified_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      warnings: Joi.any(),

      verified_on: Joi.string().allow(""),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      verified_by: CompanyProfileModel.UserSerializer(),

      store_type: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      phone_number: Joi.string().allow("").required(),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      company: CompanyProfileModel.GetCompanySerializer(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      code: Joi.string().allow("").required(),

      address: CompanyProfileModel.GetAddressSerializer().required(),
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
      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      warnings: Joi.any(),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      code: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      company: Joi.number().required(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
