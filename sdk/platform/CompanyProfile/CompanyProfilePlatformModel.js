const Joi = require("joi");

class CompanyProfileModel {
  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),

      legal_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      longitude: Joi.number().required(),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number().required(),
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

  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),

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
      franchise_enabled: Joi.boolean(),

      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number().required(),

      warnings: Joi.any(),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      mode: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      contact_details: CompanyProfileModel.ContactDetails(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      name: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      created_on: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      _custom_json: Joi.any(),

      business_type: Joi.string().allow("").required(),

      created_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      status: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),

      rate: Joi.number(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      longitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number().required(),

      address_type: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      latitude: Joi.number().required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      name: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      franchise_enabled: Joi.boolean(),

      _custom_json: Joi.any(),

      warnings: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      contact_details: CompanyProfileModel.ContactDetails(),

      business_type: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      reject_reason: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
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

      store: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      product: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

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
      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      slug_key: Joi.string().allow(""),

      warnings: Joi.any(),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      stage: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      brand_tier: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      logo: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

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

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      details: CompanyProfileModel.CompanyDetails(),

      created_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      market_channels: Joi.array().items(Joi.string().allow("")),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      warnings: Joi.any(),

      verified_on: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

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
      company: Joi.number().required(),

      uid: Joi.number(),

      brands: Joi.array().items(Joi.number()).required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),

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
      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),

      closing: CompanyProfileModel.LocationTimingSerializer(),

      opening: CompanyProfileModel.LocationTimingSerializer(),
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
      enabled: Joi.boolean(),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_waybill: CompanyProfileModel.InvoiceCredSerializer(),

      e_invoice: CompanyProfileModel.InvoiceCredSerializer(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
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

  static GetLocationSerializer() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      warnings: Joi.any(),

      modified_on: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      stage: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      company: CompanyProfileModel.GetCompanySerializer(),

      phone_number: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),
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
      longitude: Joi.number().required(),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number().required(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      warnings: Joi.any(),

      company: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      address: CompanyProfileModel.AddressSerializer().required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      stage: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
