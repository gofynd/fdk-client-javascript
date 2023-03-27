const Joi = require("joi");

class CompanyProfileModel {
  static GetAddressSerializer() {
    return Joi.object({
      latitude: Joi.number().required(),

      city: Joi.string().allow(""),

      longitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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
      effective_date: Joi.string().allow(""),

      rate: Joi.number(),

      enable: Joi.boolean(),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),
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
      company_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      modified_on: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      business_type: Joi.string().allow("").required(),

      mode: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      uid: Joi.number().required(),

      stage: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      contact_details: CompanyProfileModel.ContactDetails(),

      verified_by: CompanyProfileModel.UserSerializer(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_details: CompanyProfileModel.BusinessDetails(),

      business_info: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      franchise_enabled: Joi.boolean(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),

      meta: Joi.any(),
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
      latitude: Joi.number().required(),

      city: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      business_info: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      _custom_json: Joi.any(),

      business_type: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      franchise_enabled: Joi.boolean(),

      business_details: CompanyProfileModel.BusinessDetails(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),
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

      brand: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      store: CompanyProfileModel.DocumentsObj(),

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
      _custom_json: Joi.any(),

      _locale_language: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      warnings: Joi.any(),

      modified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow("").required(),

      reject_reason: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug_key: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      brand_tier: Joi.string().allow(""),

      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      description: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

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
      website_url: Joi.string().allow(""),

      socials: Joi.array().items(CompanyProfileModel.CompanySocialAccounts()),
    });
  }

  static CompanySerializer() {
    return Joi.object({
      company_type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      market_channels: Joi.array().items(Joi.string().allow("")),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      business_type: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      reject_reason: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      company: CompanyProfileModel.CompanySerializer(),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

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

      uid: Joi.number(),

      brands: Joi.array().items(Joi.number()).required(),
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

  static HolidayDateSerializer() {
    return Joi.object({
      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),
    });
  }

  static HolidaySchemaSerializer() {
    return Joi.object({
      date: CompanyProfileModel.HolidayDateSerializer().required(),

      title: Joi.string().allow("").required(),

      holiday_type: Joi.string().allow("").required(),
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
      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      _custom_json: Joi.any(),

      display_name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      code: Joi.string().allow("").required(),

      company: CompanyProfileModel.GetCompanySerializer(),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      phone_number: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),
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

      city: Joi.string().allow(""),

      longitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      name: Joi.string().allow("").required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      store_type: Joi.string().allow(""),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      _custom_json: Joi.any(),

      address: CompanyProfileModel.AddressSerializer().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      stage: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      company: Joi.number().required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      uid: Joi.number(),

      display_name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      warnings: Joi.any(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
