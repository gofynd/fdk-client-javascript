const Joi = require("joi");

class CompanyProfileModel {
  static GetAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

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
      emails: Joi.array().items(Joi.string().allow("")),

      phone: Joi.array().items(CompanyProfileModel.SellerPhoneNumber()),
    });
  }

  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),

      rate: Joi.number(),
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
      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      warnings: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      contact_details: CompanyProfileModel.ContactDetails(),

      uid: Joi.number().required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      business_info: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      created_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      business_details: CompanyProfileModel.BusinessDetails(),

      mode: Joi.string().allow(""),

      stage: Joi.string().allow(""),
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
      pincode: Joi.number().required(),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
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
      franchise_enabled: Joi.boolean(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      contact_details: CompanyProfileModel.ContactDetails(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      _custom_json: Joi.any(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      reject_reason: Joi.string().allow(""),

      name: Joi.string().allow(""),

      warnings: Joi.any(),

      business_details: CompanyProfileModel.BusinessDetails(),

      business_type: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
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
      brand: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      product: CompanyProfileModel.DocumentsObj(),
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
      modified_on: Joi.string().allow(""),

      warnings: Joi.any(),

      slug_key: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      stage: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      banner: CompanyProfileModel.BrandBannerSerializer(),

      brand_tier: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      company_id: Joi.number(),

      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      uid: Joi.number(),

      description: Joi.string().allow(""),
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
      verified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      details: CompanyProfileModel.CompanyDetails(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      _custom_json: Joi.any(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      verified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      created_on: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      modified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      warnings: Joi.any(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),
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

  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number().required(),

      minute: Joi.number().required(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      closing: CompanyProfileModel.LocationTimingSerializer(),

      opening: CompanyProfileModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),
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
      title: Joi.string().allow("").required(),

      date: CompanyProfileModel.HolidayDateSerializer().required(),

      holiday_type: Joi.string().allow("").required(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      verified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow(""),
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

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),
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
      address: CompanyProfileModel.GetAddressSerializer().required(),

      modified_on: Joi.string().allow(""),

      warnings: Joi.any(),

      display_name: Joi.string().allow("").required(),

      phone_number: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      code: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      _custom_json: Joi.any(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      company: CompanyProfileModel.GetCompanySerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      stage: Joi.string().allow(""),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),
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

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      store_type: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      _custom_json: Joi.any(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      company: Joi.number().required(),

      address: CompanyProfileModel.AddressSerializer().required(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      name: Joi.string().allow("").required(),

      warnings: Joi.any(),

      display_name: Joi.string().allow("").required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

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
