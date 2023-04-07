const Joi = require("joi");

class CompanyProfileModel {
  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      rate: Joi.number(),

      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),

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
      phone: Joi.array().items(CompanyProfileModel.SellerPhoneNumber()),

      emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_details: CompanyProfileModel.BusinessDetails(),

      created_by: CompanyProfileModel.UserSerializer(),

      franchise_enabled: Joi.boolean(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      business_info: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      mode: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      business_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      modified_on: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      contact_details: CompanyProfileModel.ContactDetails(),

      company_type: Joi.string().allow("").required(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      uid: Joi.number().required(),
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

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      _custom_json: Joi.any(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      business_info: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      franchise_enabled: Joi.boolean(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      contact_details: CompanyProfileModel.ContactDetails(),

      business_details: CompanyProfileModel.BusinessDetails(),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      stage: Joi.string().allow(""),

      store: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),
    });
  }

  static BrandBannerSerializer() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
    });
  }

  static GetBrandResponseSerializer() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      reject_reason: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      mode: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      warnings: Joi.any(),

      _locale_language: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      uid: Joi.number(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      description: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      _locale_language: Joi.any(),

      logo: Joi.string().allow("").required(),

      brand_tier: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer().required(),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),
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
      market_channels: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      verified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      reject_reason: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      details: CompanyProfileModel.CompanyDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      warnings: Joi.any(),

      modified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      company: CompanyProfileModel.CompanySerializer(),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),
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
      verified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

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

      opening: CompanyProfileModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      closing: CompanyProfileModel.LocationTimingSerializer(),
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
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      store_type: Joi.string().allow(""),

      company: CompanyProfileModel.GetCompanySerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      name: Joi.string().allow("").required(),

      phone_number: Joi.string().allow(""),

      _custom_json: Joi.any(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      modified_by: CompanyProfileModel.UserSerializer(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      display_name: Joi.string().allow("").required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

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
      pincode: Joi.number(),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      stage: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      code: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      address: CompanyProfileModel.AddressSerializer().required(),

      display_name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      company: Joi.number().required(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      uid: Joi.number(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
