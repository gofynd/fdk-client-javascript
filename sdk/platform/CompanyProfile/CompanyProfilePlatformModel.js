const Joi = require("joi");

class CompanyProfileModel {
  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),

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

  static GetAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      created_by: CompanyProfileModel.UserSerializer(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      warnings: Joi.any(),

      franchise_enabled: Joi.boolean(),

      mode: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_details: CompanyProfileModel.BusinessDetails(),

      business_type: Joi.string().allow("").required(),

      business_info: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      contact_details: CompanyProfileModel.ContactDetails(),

      verified_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),
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

      rate: Joi.number(),

      enable: Joi.boolean(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      longitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      address_type: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      pincode: Joi.number().required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      warnings: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      franchise_enabled: Joi.boolean(),

      _custom_json: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_details: CompanyProfileModel.BusinessDetails(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      contact_details: CompanyProfileModel.ContactDetails(),

      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      business_type: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      product: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      brand: CompanyProfileModel.DocumentsObj(),

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
      description: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      mode: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      _locale_language: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      description: Joi.string().allow(""),

      company_id: Joi.number(),

      _custom_json: Joi.any(),

      _locale_language: Joi.any(),

      brand_tier: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      name: Joi.string().allow("").required(),

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
      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      market_channels: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      verified_on: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      business_type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      warnings: Joi.any(),

      company: CompanyProfileModel.CompanySerializer(),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      uid: Joi.number(),
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

      company: Joi.number().required(),

      uid: Joi.number(),
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

      weekday: Joi.string().allow("").required(),

      closing: CompanyProfileModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),
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
      e_invoice: CompanyProfileModel.InvoiceCredSerializer(),

      e_waybill: CompanyProfileModel.InvoiceCredSerializer(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
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

  static GetLocationSerializer() {
    return Joi.object({
      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      store_type: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      phone_number: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      display_name: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      company: CompanyProfileModel.GetCompanySerializer(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      code: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      name: Joi.string().allow("").required(),
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

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      address: CompanyProfileModel.AddressSerializer().required(),

      warnings: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      company: Joi.number().required(),

      _custom_json: Joi.any(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      stage: Joi.string().allow(""),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      code: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

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
