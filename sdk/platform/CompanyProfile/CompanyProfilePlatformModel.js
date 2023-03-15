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

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number().required(),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),
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
      phone: Joi.array().items(CompanyProfileModel.SellerPhoneNumber()),

      emails: Joi.array().items(Joi.string().allow("")),
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
      business_details: CompanyProfileModel.BusinessDetails(),

      franchise_enabled: Joi.boolean(),

      modified_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      verified_on: Joi.string().allow(""),

      warnings: Joi.any(),

      business_info: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      stage: Joi.string().allow(""),

      uid: Joi.number().required(),

      contact_details: CompanyProfileModel.ContactDetails(),

      created_by: CompanyProfileModel.UserSerializer(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      mode: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      pincode: Joi.number().required(),

      address2: Joi.string().allow(""),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      franchise_enabled: Joi.boolean(),

      reject_reason: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      _custom_json: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      company_type: Joi.string().allow(""),

      warnings: Joi.any(),

      business_details: CompanyProfileModel.BusinessDetails(),

      business_info: Joi.string().allow(""),

      business_type: Joi.string().allow(""),
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
      product: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      store: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

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
      logo: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      verified_on: Joi.string().allow(""),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),

      mode: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      description: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      company_id: Joi.number(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      brand_tier: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      modified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: CompanyProfileModel.UserSerializer(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      details: CompanyProfileModel.CompanyDetails(),

      verified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      modified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      verified_on: Joi.string().allow(""),

      warnings: Joi.any(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),
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

  static HolidayDateSerializer() {
    return Joi.object({
      start_date: Joi.string().allow("").required(),

      end_date: Joi.string().allow("").required(),
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
      name: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      modified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),
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

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),

      closing: CompanyProfileModel.LocationTimingSerializer(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      modified_by: CompanyProfileModel.UserSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      _custom_json: Joi.any(),

      store_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      company: CompanyProfileModel.GetCompanySerializer(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      verified_on: Joi.string().allow(""),

      warnings: Joi.any(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      display_name: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),

      phone_number: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),
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
      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number().required(),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      address: CompanyProfileModel.AddressSerializer().required(),

      name: Joi.string().allow("").required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      code: Joi.string().allow("").required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      store_type: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      company: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      warnings: Joi.any(),

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
