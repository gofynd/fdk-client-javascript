const Joi = require("joi");

class CompanyProfileModel {
  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
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

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
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

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      verified_on: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      modified_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      franchise_enabled: Joi.boolean(),

      company_type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      uid: Joi.number().required(),

      _custom_json: Joi.any(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_type: Joi.string().allow("").required(),

      business_info: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),
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
      pincode: Joi.number().required(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),

      address_type: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      contact_details: CompanyProfileModel.ContactDetails(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      reject_reason: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      business_details: CompanyProfileModel.BusinessDetails(),

      _custom_json: Joi.any(),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      warnings: Joi.any(),

      name: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_info: Joi.string().allow(""),
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
      company_documents: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      store: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

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
      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      mode: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      company_id: Joi.number(),

      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      brand_tier: Joi.string().allow(""),

      _custom_json: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),
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
      website_url: Joi.string().allow(""),

      socials: Joi.array().items(CompanyProfileModel.CompanySocialAccounts()),
    });
  }

  static CompanySerializer() {
    return Joi.object({
      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      market_channels: Joi.array().items(Joi.string().allow("")),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      company_type: Joi.string().allow("").required(),

      business_type: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      stage: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      created_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      stage: Joi.string().allow(""),

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

      company: Joi.number().required(),

      uid: Joi.number(),
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

      date: CompanyProfileModel.HolidayDateSerializer().required(),

      holiday_type: Joi.string().allow("").required(),
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

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      stage: Joi.string().allow(""),
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

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      created_on: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      verified_on: Joi.string().allow(""),

      phone_number: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      _custom_json: Joi.any(),

      company: CompanyProfileModel.GetCompanySerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      store_type: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      stage: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      display_name: Joi.string().allow("").required(),
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
      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      code: Joi.string().allow("").required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      _custom_json: Joi.any(),

      warnings: Joi.any(),

      name: Joi.string().allow("").required(),

      address: CompanyProfileModel.AddressSerializer().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      stage: Joi.string().allow(""),

      company: Joi.number().required(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
