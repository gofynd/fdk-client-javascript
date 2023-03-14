const Joi = require("joi");

class CompanyProfileModel {
  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
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

  static GetAddressSerializer() {
    return Joi.object({
      longitude: Joi.number().required(),

      pincode: Joi.number(),

      latitude: Joi.number().required(),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

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
      warnings: Joi.any(),

      name: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_info: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      company_type: Joi.string().allow("").required(),

      franchise_enabled: Joi.boolean(),

      uid: Joi.number().required(),

      contact_details: CompanyProfileModel.ContactDetails(),

      verified_on: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      business_details: CompanyProfileModel.BusinessDetails(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      longitude: Joi.number().required(),

      pincode: Joi.number().required(),

      latitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),
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
      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_type: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      contact_details: CompanyProfileModel.ContactDetails(),

      warnings: Joi.any(),

      name: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      reject_reason: Joi.string().allow(""),

      _custom_json: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      company_type: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

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
      verified: Joi.number(),

      pending: Joi.number(),
    });
  }

  static MetricsSerializer() {
    return Joi.object({
      store_documents: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      product: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      brand: CompanyProfileModel.DocumentsObj(),
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
      warnings: Joi.any(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      reject_reason: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      _locale_language: Joi.any(),

      description: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      company_id: Joi.number(),

      _locale_language: Joi.any(),

      uid: Joi.number(),

      brand_tier: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      business_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      market_channels: Joi.array().items(Joi.string().allow("")),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      company_type: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      company: CompanyProfileModel.CompanySerializer(),

      modified_on: Joi.string().allow(""),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CompanyProfileModel.UserSerializer(),
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
      company: Joi.number().required(),

      brands: Joi.array().items(Joi.number()).required(),

      uid: Joi.number(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      business_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CompanyProfileModel.UserSerializer(),
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

      opening: CompanyProfileModel.LocationTimingSerializer(),

      closing: CompanyProfileModel.LocationTimingSerializer(),

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

  static HolidayDateSerializer() {
    return Joi.object({
      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),
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

  static InvoiceCredSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      enabled: Joi.boolean(),

      password: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_invoice: CompanyProfileModel.InvoiceCredSerializer(),

      e_waybill: CompanyProfileModel.InvoiceCredSerializer(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      company: CompanyProfileModel.GetCompanySerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      warnings: Joi.any(),

      name: Joi.string().allow("").required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      phone_number: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      uid: Joi.number(),

      display_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      created_by: CompanyProfileModel.UserSerializer(),
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
      longitude: Joi.number().required(),

      pincode: Joi.number(),

      latitude: Joi.number().required(),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      company: Joi.number().required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      store_type: Joi.string().allow(""),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      _custom_json: Joi.any(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      address: CompanyProfileModel.AddressSerializer().required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      uid: Joi.number(),

      display_name: Joi.string().allow("").required(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
