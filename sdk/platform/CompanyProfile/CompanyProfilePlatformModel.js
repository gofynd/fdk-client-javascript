const Joi = require("joi");

class CompanyProfileModel {
  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      rate: Joi.number(),

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

  static GetAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number().required(),

      address1: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),
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

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      business_info: Joi.string().allow(""),

      uid: Joi.number().required(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      business_details: CompanyProfileModel.BusinessDetails(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      warnings: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      franchise_enabled: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      modified_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),
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
      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      address_type: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      address1: Joi.string().allow("").required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      business_info: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      _custom_json: Joi.any(),

      reject_reason: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      name: Joi.string().allow(""),

      warnings: Joi.any(),

      franchise_enabled: Joi.boolean(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      contact_details: CompanyProfileModel.ContactDetails(),

      business_type: Joi.string().allow(""),

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
      pending: Joi.number(),

      verified: Joi.number(),
    });
  }

  static MetricsSerializer() {
    return Joi.object({
      company_documents: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      store_documents: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

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
      created_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      slug_key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      warnings: Joi.any(),

      verified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      description: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      _custom_json: Joi.any(),

      brand_tier: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      description: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

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
      socials: Joi.array().items(CompanyProfileModel.CompanySocialAccounts()),

      website_url: Joi.string().allow(""),
    });
  }

  static CompanySerializer() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      reject_reason: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),

      created_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      uid: Joi.number(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      company_type: Joi.string().allow("").required(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      warnings: Joi.any(),

      uid: Joi.number(),

      company: CompanyProfileModel.CompanySerializer(),
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

  static LocationTimingSerializer() {
    return Joi.object({
      minute: Joi.number().required(),

      hour: Joi.number().required(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      opening: CompanyProfileModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),

      closing: CompanyProfileModel.LocationTimingSerializer(),
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
      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),
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
      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      created_by: CompanyProfileModel.UserSerializer(),

      phone_number: Joi.string().allow(""),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      company: CompanyProfileModel.GetCompanySerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      warnings: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      verified_on: Joi.string().allow(""),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      store_type: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      code: Joi.string().allow("").required(),
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
      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number().required(),

      address1: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      address: CompanyProfileModel.AddressSerializer().required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      _custom_json: Joi.any(),

      store_type: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      stage: Joi.string().allow(""),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      name: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      warnings: Joi.any(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      uid: Joi.number(),

      company: Joi.number().required(),

      code: Joi.string().allow("").required(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
