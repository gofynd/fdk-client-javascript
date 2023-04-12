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

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),
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

  static GetAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      longitude: Joi.number().required(),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      uid: Joi.number().required(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      franchise_enabled: Joi.boolean(),

      verified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      warnings: Joi.any(),

      business_info: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: CompanyProfileModel.UserSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      verified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      business_type: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      business_details: CompanyProfileModel.BusinessDetails(),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      modified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),
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

  static CompanyTaxesSerializer1() {
    return Joi.object({
      enable: Joi.boolean(),

      rate: Joi.number(),

      effective_date: Joi.string().allow(""),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      latitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      longitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      pincode: Joi.number().required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      warnings: Joi.any(),

      business_info: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      contact_details: CompanyProfileModel.ContactDetails(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      reject_reason: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      _custom_json: Joi.any(),

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
      stage: Joi.string().allow(""),

      store_documents: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      brand: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

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
      uid: Joi.number(),

      slug_key: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      reject_reason: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow("").required(),

      warnings: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      _locale_language: Joi.any(),

      description: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      stage: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      brand_tier: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),

      company_id: Joi.number(),

      _locale_language: Joi.any(),

      description: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      _custom_json: Joi.any(),
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
      stage: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      modified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      reject_reason: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      stage: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      company: CompanyProfileModel.CompanySerializer(),

      reject_reason: Joi.string().allow(""),

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
      uid: Joi.number(),

      company: Joi.number().required(),

      brands: Joi.array().items(Joi.number()).required(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      stage: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      reject_reason: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),
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
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
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

      holiday_type: Joi.string().allow("").required(),

      date: CompanyProfileModel.HolidayDateSerializer().required(),
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

      closing: CompanyProfileModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      opening: CompanyProfileModel.LocationTimingSerializer(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      uid: Joi.number(),

      company: CompanyProfileModel.GetCompanySerializer(),

      code: Joi.string().allow("").required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow("").required(),

      warnings: Joi.any(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: CompanyProfileModel.UserSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      verified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      stage: Joi.string().allow(""),

      phone_number: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      address: CompanyProfileModel.GetAddressSerializer().required(),
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

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      longitude: Joi.number().required(),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      warnings: Joi.any(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      uid: Joi.number(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      company: Joi.number().required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      code: Joi.string().allow("").required(),

      address: CompanyProfileModel.AddressSerializer().required(),

      _custom_json: Joi.any(),

      store_type: Joi.string().allow(""),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
