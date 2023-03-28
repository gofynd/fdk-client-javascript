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
      emails: Joi.array().items(Joi.string().allow("")),

      phone: Joi.array().items(CompanyProfileModel.SellerPhoneNumber()),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static UserSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),
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
      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),

      rate: Joi.number(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      latitude: Joi.number().required(),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number().required(),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      business_info: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      _custom_json: Joi.any(),

      contact_details: CompanyProfileModel.ContactDetails(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      modified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      created_on: Joi.string().allow(""),

      uid: Joi.number().required(),

      business_details: CompanyProfileModel.BusinessDetails(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      franchise_enabled: Joi.boolean(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      latitude: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number().required(),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),

      rate: Joi.number(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      business_info: Joi.string().allow(""),

      _custom_json: Joi.any(),

      warnings: Joi.any(),

      contact_details: CompanyProfileModel.ContactDetails(),

      business_details: CompanyProfileModel.BusinessDetails(),

      business_type: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      name: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      franchise_enabled: Joi.boolean(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

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

      company_documents: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      product: CompanyProfileModel.DocumentsObj(),

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
      mode: Joi.string().allow(""),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      created_on: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      uid: Joi.number(),

      _locale_language: Joi.any(),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      reject_reason: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _locale_language: Joi.any(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      brand_tier: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      logo: Joi.string().allow("").required(),

      uid: Joi.number(),
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
      modified_by: CompanyProfileModel.UserSerializer(),

      details: CompanyProfileModel.CompanyDetails(),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      business_type: Joi.string().allow("").required(),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      market_channels: Joi.array().items(Joi.string().allow("")),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      company_type: Joi.string().allow("").required(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      modified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      warnings: Joi.any(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),
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

      company: Joi.number().required(),

      uid: Joi.number(),
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

      closing: CompanyProfileModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      modified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      modified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      verified_on: Joi.string().allow(""),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      display_name: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      phone_number: Joi.string().allow(""),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      code: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      company: CompanyProfileModel.GetCompanySerializer(),
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
      latitude: Joi.number().required(),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number().required(),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      address: CompanyProfileModel.AddressSerializer().required(),

      display_name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      warnings: Joi.any(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      stage: Joi.string().allow(""),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      company: Joi.number().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow("").required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
