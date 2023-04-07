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
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
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

  static GetAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number().required(),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      pincode: Joi.number(),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      rate: Joi.number(),

      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      contact_details: CompanyProfileModel.ContactDetails(),

      modified_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      verified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      business_info: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      franchise_enabled: Joi.boolean(),
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
      address2: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      country: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow("").required(),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      rate: Joi.number(),

      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      warnings: Joi.any(),

      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      franchise_enabled: Joi.boolean(),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      _custom_json: Joi.any(),

      business_type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      business_info: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),
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

      uid: Joi.number(),

      store: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

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
      slug_key: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      reject_reason: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      description: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      _locale_language: Joi.any(),

      logo: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      logo: Joi.string().allow("").required(),

      brand_tier: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      _custom_json: Joi.any(),

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
      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      details: CompanyProfileModel.CompanyDetails(),

      company_type: Joi.string().allow("").required(),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      market_channels: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      company: CompanyProfileModel.CompanySerializer(),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),
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
      company: Joi.number().required(),

      uid: Joi.number(),

      brands: Joi.array().items(Joi.number()).required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      enabled: Joi.boolean(),

      password: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_invoice: CompanyProfileModel.InvoiceCredSerializer(),

      e_waybill: CompanyProfileModel.InvoiceCredSerializer(),
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

  static GetCompanySerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),
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

  static GetLocationSerializer() {
    return Joi.object({
      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      name: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      display_name: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      _custom_json: Joi.any(),

      phone_number: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      company: CompanyProfileModel.GetCompanySerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      address: CompanyProfileModel.GetAddressSerializer().required(),
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
      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number().required(),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      pincode: Joi.number(),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      warnings: Joi.any(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      display_name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      company: Joi.number().required(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      _custom_json: Joi.any(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      code: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      address: CompanyProfileModel.AddressSerializer().required(),

      store_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
