const Joi = require("joi");

class CompanyProfileModel {
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

  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),

      rate: Joi.number(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      address1: Joi.string().allow(""),

      latitude: Joi.number().required(),
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

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      contact_details: CompanyProfileModel.ContactDetails(),

      verified_by: CompanyProfileModel.UserSerializer(),

      mode: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      created_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      franchise_enabled: Joi.boolean(),

      uid: Joi.number().required(),

      business_details: CompanyProfileModel.BusinessDetails(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),
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

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      latitude: Joi.number().required(),
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
      contact_details: CompanyProfileModel.ContactDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      reject_reason: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      franchise_enabled: Joi.boolean(),

      warnings: Joi.any(),

      business_type: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

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
      verified: Joi.number(),

      pending: Joi.number(),
    });
  }

  static MetricsSerializer() {
    return Joi.object({
      store: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

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
      verified_by: CompanyProfileModel.UserSerializer(),

      mode: Joi.string().allow(""),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      _locale_language: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _locale_language: Joi.any(),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      brand_tier: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

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

      _custom_json: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      details: CompanyProfileModel.CompanyDetails(),

      reject_reason: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      business_type: Joi.string().allow("").required(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      verified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      modified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      company: CompanyProfileModel.CompanySerializer(),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),
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

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),
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

      closing: CompanyProfileModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

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
      e_invoice: CompanyProfileModel.InvoiceCredSerializer(),

      e_waybill: CompanyProfileModel.InvoiceCredSerializer(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
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
      verified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      address: CompanyProfileModel.GetAddressSerializer().required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      display_name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow("").required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      created_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      phone_number: Joi.string().allow(""),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      company: CompanyProfileModel.GetCompanySerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),
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

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      address1: Joi.string().allow(""),

      latitude: Joi.number().required(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      address: CompanyProfileModel.AddressSerializer().required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      code: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      store_type: Joi.string().allow(""),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      company: Joi.number().required(),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
