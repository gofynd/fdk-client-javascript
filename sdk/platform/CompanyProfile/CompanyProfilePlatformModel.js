const Joi = require("joi");

class CompanyProfileModel {
  static GetAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      latitude: Joi.number().required(),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
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
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      rate: Joi.number(),

      effective_date: Joi.string().allow(""),

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
      phone: Joi.array().items(CompanyProfileModel.SellerPhoneNumber()),

      emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      value: Joi.string().allow("").required(),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      business_info: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      mode: Joi.string().allow(""),

      _custom_json: Joi.any(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      warnings: Joi.any(),

      business_details: CompanyProfileModel.BusinessDetails(),

      business_type: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      uid: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      created_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      franchise_enabled: Joi.boolean(),

      stage: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      modified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      rate: Joi.number(),

      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      latitude: Joi.number().required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      business_info: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      business_details: CompanyProfileModel.BusinessDetails(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      franchise_enabled: Joi.boolean(),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      _custom_json: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      reject_reason: Joi.string().allow(""),

      name: Joi.string().allow(""),

      warnings: Joi.any(),
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
      brand: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      product: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

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
      logo: Joi.string().allow(""),

      _locale_language: Joi.any(),

      reject_reason: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      _custom_json: Joi.any(),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      slug_key: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      description: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      banner: CompanyProfileModel.BrandBannerSerializer(),

      company_id: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      logo: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      brand_tier: Joi.string().allow(""),

      _locale_language: Joi.any(),

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
      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      company_type: Joi.string().allow("").required(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      market_channels: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),

      uid: Joi.number(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      warnings: Joi.any(),
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

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      verified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),
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

      opening: CompanyProfileModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      phone_number: Joi.string().allow(""),

      _custom_json: Joi.any(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      warnings: Joi.any(),

      code: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      store_type: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      company: CompanyProfileModel.GetCompanySerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      modified_by: CompanyProfileModel.UserSerializer(),

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
      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      latitude: Joi.number().required(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      address: CompanyProfileModel.AddressSerializer().required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      store_type: Joi.string().allow(""),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      company: Joi.number().required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      warnings: Joi.any(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
