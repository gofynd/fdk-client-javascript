const Joi = require("joi");

class CompanyProfileModel {
  static UserSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

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

  static GetAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number().required(),

      country: Joi.string().allow(""),

      latitude: Joi.number().required(),

      address_type: Joi.string().allow(""),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),

      rate: Joi.number(),
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

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      business_info: Joi.string().allow(""),

      warnings: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_details: CompanyProfileModel.BusinessDetails(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      _custom_json: Joi.any(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      verified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      mode: Joi.string().allow(""),

      uid: Joi.number().required(),

      contact_details: CompanyProfileModel.ContactDetails(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),

      rate: Joi.number(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      pincode: Joi.number().required(),

      longitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      address_type: Joi.string().allow("").required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      franchise_enabled: Joi.boolean(),

      business_info: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      company_type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      business_details: CompanyProfileModel.BusinessDetails(),

      warnings: Joi.any(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      reject_reason: Joi.string().allow(""),
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
      verified: Joi.number(),

      pending: Joi.number(),
    });
  }

  static MetricsSerializer() {
    return Joi.object({
      brand: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      product: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),
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

      banner: CompanyProfileModel.BrandBannerSerializer(),

      warnings: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      logo: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      verified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      slug_key: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      banner: CompanyProfileModel.BrandBannerSerializer(),

      brand_tier: Joi.string().allow(""),

      company_id: Joi.number(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      modified_on: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      modified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow("").required(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      reject_reason: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      company: CompanyProfileModel.CompanySerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),
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
      brands: Joi.array().items(Joi.number()).required(),

      uid: Joi.number(),

      company: Joi.number().required(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      enabled: Joi.boolean(),
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

  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number().required(),

      minute: Joi.number().required(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      opening: CompanyProfileModel.LocationTimingSerializer(),

      closing: CompanyProfileModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),
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

  static GetLocationSerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      warnings: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      phone_number: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      store_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      _custom_json: Joi.any(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      verified_on: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      company: CompanyProfileModel.GetCompanySerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      uid: Joi.number(),
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
      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number().required(),

      country: Joi.string().allow(""),

      latitude: Joi.number().required(),

      address_type: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      company: Joi.number().required(),

      uid: Joi.number(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      store_type: Joi.string().allow(""),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      address: CompanyProfileModel.AddressSerializer().required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

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
