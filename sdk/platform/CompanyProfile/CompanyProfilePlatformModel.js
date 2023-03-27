const Joi = require("joi");

class CompanyProfileModel {
  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),
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

  static GetAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),

      pincode: Joi.number(),
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
      rate: Joi.number(),

      enable: Joi.boolean(),

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

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_info: Joi.string().allow(""),

      uid: Joi.number().required(),

      franchise_enabled: Joi.boolean(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_details: CompanyProfileModel.BusinessDetails(),

      warnings: Joi.any(),

      modified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      mode: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      created_on: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      contact_details: CompanyProfileModel.ContactDetails(),

      business_type: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),
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
      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),

      pincode: Joi.number().required(),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      rate: Joi.number(),

      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      name: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      _custom_json: Joi.any(),

      reject_reason: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      company_type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      business_info: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      business_details: CompanyProfileModel.BusinessDetails(),

      business_type: Joi.string().allow(""),

      warnings: Joi.any(),

      franchise_enabled: Joi.boolean(),
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

      brand: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      product: CompanyProfileModel.DocumentsObj(),

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
      verified_on: Joi.string().allow(""),

      _locale_language: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      created_by: CompanyProfileModel.UserSerializer(),

      slug_key: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      modified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      mode: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      brand_tier: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      uid: Joi.number(),

      banner: CompanyProfileModel.BrandBannerSerializer(),
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

      modified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      company_type: Joi.string().allow("").required(),

      created_by: CompanyProfileModel.UserSerializer(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      details: CompanyProfileModel.CompanyDetails(),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow("").required(),

      uid: Joi.number(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      modified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      company: CompanyProfileModel.CompanySerializer(),
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

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
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

  static HolidayDateSerializer() {
    return Joi.object({
      start_date: Joi.string().allow("").required(),

      end_date: Joi.string().allow("").required(),
    });
  }

  static HolidaySchemaSerializer() {
    return Joi.object({
      date: CompanyProfileModel.HolidayDateSerializer().required(),

      title: Joi.string().allow("").required(),

      holiday_type: Joi.string().allow("").required(),
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
      name: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      company_type: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),
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
      e_invoice: CompanyProfileModel.InvoiceCredSerializer(),

      e_waybill: CompanyProfileModel.InvoiceCredSerializer(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      phone_number: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      display_name: Joi.string().allow("").required(),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      warnings: Joi.any(),

      modified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      store_type: Joi.string().allow(""),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      code: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      company: CompanyProfileModel.GetCompanySerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),
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
      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),

      pincode: Joi.number(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      store_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      warnings: Joi.any(),

      address: CompanyProfileModel.AddressSerializer().required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      code: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      display_name: Joi.string().allow("").required(),

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
