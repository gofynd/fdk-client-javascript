const Joi = require("joi");

class CompanyProfileModel {
  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
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

  static CompanyTaxesSerializer() {
    return Joi.object({
      enable: Joi.boolean(),

      rate: Joi.number(),

      effective_date: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number().required(),
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
      verified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      warnings: Joi.any(),

      contact_details: CompanyProfileModel.ContactDetails(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      company_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      uid: Joi.number().required(),

      franchise_enabled: Joi.boolean(),

      created_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      modified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow("").required(),

      business_details: CompanyProfileModel.BusinessDetails(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      enable: Joi.boolean(),

      rate: Joi.number(),

      effective_date: Joi.string().allow(""),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      latitude: Joi.number().required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      _custom_json: Joi.any(),

      warnings: Joi.any(),

      contact_details: CompanyProfileModel.ContactDetails(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      company_type: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      reject_reason: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      business_info: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      business_type: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),
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
      product: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      company_documents: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      brand: CompanyProfileModel.DocumentsObj(),

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
      synonyms: Joi.array().items(Joi.string().allow("")),

      verified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      warnings: Joi.any(),

      modified_on: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      logo: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      uid: Joi.number(),

      brand_tier: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      description: Joi.string().allow(""),
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
      website_url: Joi.string().allow(""),

      socials: Joi.array().items(CompanyProfileModel.CompanySocialAccounts()),
    });
  }

  static CompanySerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      stage: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      details: CompanyProfileModel.CompanyDetails(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      market_channels: Joi.array().items(Joi.string().allow("")),

      business_type: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      company: CompanyProfileModel.CompanySerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

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

      company: Joi.number().required(),

      brands: Joi.array().items(Joi.number()).required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      holiday_type: Joi.string().allow("").required(),

      date: CompanyProfileModel.HolidayDateSerializer().required(),

      title: Joi.string().allow("").required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      business_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),
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
      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),

      closing: CompanyProfileModel.LocationTimingSerializer(),

      opening: CompanyProfileModel.LocationTimingSerializer(),
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
      e_waybill: CompanyProfileModel.InvoiceCredSerializer(),

      e_invoice: CompanyProfileModel.InvoiceCredSerializer(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      verified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow("").required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      warnings: Joi.any(),

      modified_on: Joi.string().allow(""),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      code: Joi.string().allow("").required(),

      uid: Joi.number(),

      phone_number: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      company: CompanyProfileModel.GetCompanySerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),
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
      country: Joi.string().allow(""),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number().required(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      address: CompanyProfileModel.AddressSerializer().required(),

      display_name: Joi.string().allow("").required(),

      warnings: Joi.any(),

      store_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      uid: Joi.number(),

      company: Joi.number().required(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      manager: CompanyProfileModel.LocationManagerSerializer(),

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
