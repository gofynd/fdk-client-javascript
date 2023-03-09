const Joi = require("joi");

class CompanyProfileModel {
  static GetAddressSerializer() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),
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
      effective_date: Joi.string().allow(""),

      rate: Joi.number(),

      enable: Joi.boolean(),
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

  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),

      legal_name: Joi.string().allow(""),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      verified_on: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      _custom_json: Joi.any(),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      business_info: Joi.string().allow(""),

      name: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      business_details: CompanyProfileModel.BusinessDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      uid: Joi.number().required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      verified_by: CompanyProfileModel.UserSerializer(),

      mode: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      rate: Joi.number(),

      enable: Joi.boolean(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      _custom_json: Joi.any(),

      reject_reason: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      company_type: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      business_type: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      business_info: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      name: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),
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
      stage: Joi.string().allow(""),

      brand: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),
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

      description: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      _locale_language: Joi.any(),

      slug_key: Joi.string().allow(""),

      warnings: Joi.any(),

      uid: Joi.number(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      logo: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      brand_tier: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      _custom_json: Joi.any(),

      reject_reason: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      details: CompanyProfileModel.CompanyDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      modified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      reject_reason: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      modified_by: CompanyProfileModel.UserSerializer(),

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
      title: Joi.string().allow("").required(),

      date: CompanyProfileModel.HolidayDateSerializer().required(),

      holiday_type: Joi.string().allow("").required(),
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

      opening: CompanyProfileModel.LocationTimingSerializer(),

      closing: CompanyProfileModel.LocationTimingSerializer(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      reject_reason: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),
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
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),
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
      e_waybill: CompanyProfileModel.InvoiceCredSerializer(),

      e_invoice: CompanyProfileModel.InvoiceCredSerializer(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      phone_number: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      code: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      company: CompanyProfileModel.GetCompanySerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      uid: Joi.number(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      verified_by: CompanyProfileModel.UserSerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),
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
      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      store_type: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      code: Joi.string().allow("").required(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      display_name: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      address: CompanyProfileModel.AddressSerializer().required(),

      company: Joi.number().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

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
