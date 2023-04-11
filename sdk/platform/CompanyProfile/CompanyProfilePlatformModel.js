const Joi = require("joi");

class CompanyProfileModel {
  static GetAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static UserSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static ContactDetails() {
    return Joi.object({
      emails: Joi.array().items(Joi.string().allow("")),

      phone: Joi.array().items(CompanyProfileModel.SellerPhoneNumber()),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      business_type: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      company_type: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      business_details: CompanyProfileModel.BusinessDetails(),

      created_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      contact_details: CompanyProfileModel.ContactDetails(),

      mode: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      name: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      verified_by: CompanyProfileModel.UserSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number().required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address_type: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),
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
      business_type: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_details: CompanyProfileModel.BusinessDetails(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      business_info: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      reject_reason: Joi.string().allow(""),

      warnings: Joi.any(),

      _custom_json: Joi.any(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      company_type: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),
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
      store: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),
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
      stage: Joi.string().allow(""),

      _locale_language: Joi.any(),

      description: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      logo: Joi.string().allow(""),

      warnings: Joi.any(),

      mode: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _locale_language: Joi.any(),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      brand_tier: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      logo: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

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
      business_type: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CompanyProfileModel.UserSerializer(),

      details: CompanyProfileModel.CompanyDetails(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      created_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      _custom_json: Joi.any(),

      company_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      reject_reason: Joi.string().allow(""),

      warnings: Joi.any(),

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
      company: Joi.number().required(),

      brands: Joi.array().items(Joi.number()).required(),

      uid: Joi.number(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      business_type: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),
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
      minute: Joi.number().required(),

      hour: Joi.number().required(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      closing: CompanyProfileModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),

      opening: CompanyProfileModel.LocationTimingSerializer(),
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
      e_waybill: CompanyProfileModel.InvoiceCredSerializer(),

      e_invoice: CompanyProfileModel.InvoiceCredSerializer(),
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

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      company: CompanyProfileModel.GetCompanySerializer(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      _custom_json: Joi.any(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      uid: Joi.number(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      code: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      phone_number: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      created_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      modified_on: Joi.string().allow(""),
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
      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      address: CompanyProfileModel.AddressSerializer().required(),

      _custom_json: Joi.any(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      uid: Joi.number(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      stage: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      company: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      warnings: Joi.any(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
