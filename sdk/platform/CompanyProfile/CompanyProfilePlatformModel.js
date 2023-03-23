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

  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number().required(),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
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

  static CompanyTaxesSerializer() {
    return Joi.object({
      enable: Joi.boolean(),

      rate: Joi.number(),

      effective_date: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      franchise_enabled: Joi.boolean(),

      business_details: CompanyProfileModel.BusinessDetails(),

      mode: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      warnings: Joi.any(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      company_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      uid: Joi.number().required(),

      contact_details: CompanyProfileModel.ContactDetails(),

      verified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      name: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      address_type: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      pincode: Joi.number().required(),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      city: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number().required(),
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
      franchise_enabled: Joi.boolean(),

      business_details: CompanyProfileModel.BusinessDetails(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      company_type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      business_info: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      reject_reason: Joi.string().allow(""),

      warnings: Joi.any(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      name: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
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
      stage: Joi.string().allow(""),

      uid: Joi.number(),

      brand: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),
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
      mode: Joi.string().allow(""),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      warnings: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      _locale_language: Joi.any(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      slug_key: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      brand_tier: Joi.string().allow(""),

      company_id: Joi.number(),

      logo: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),
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
      socials: Joi.array().items(CompanyProfileModel.CompanySocialAccounts()),

      website_url: Joi.string().allow(""),
    });
  }

  static CompanySerializer() {
    return Joi.object({
      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      company_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      business_type: Joi.string().allow("").required(),

      details: CompanyProfileModel.CompanyDetails(),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      reject_reason: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      company: CompanyProfileModel.CompanySerializer(),

      reject_reason: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      warnings: Joi.any(),

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
      brands: Joi.array().items(Joi.number()).required(),

      uid: Joi.number(),

      company: Joi.number().required(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      stage: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      business_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
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

      holiday_type: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
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

  static LocationTimingSerializer() {
    return Joi.object({
      minute: Joi.number().required(),

      hour: Joi.number().required(),
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

  static GetLocationSerializer() {
    return Joi.object({
      phone_number: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      company: CompanyProfileModel.GetCompanySerializer(),

      store_type: Joi.string().allow(""),

      warnings: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      code: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      uid: Joi.number(),

      display_name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      modified_by: CompanyProfileModel.UserSerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      stage: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      name: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),
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

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number().required(),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      address: CompanyProfileModel.AddressSerializer().required(),

      stage: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow("").required(),

      company: Joi.number().required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      warnings: Joi.any(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      store_type: Joi.string().allow(""),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

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
