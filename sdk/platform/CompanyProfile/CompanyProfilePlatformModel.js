const Joi = require("joi");

class CompanyProfileModel {
  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
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
      phone: Joi.array().items(CompanyProfileModel.SellerPhoneNumber()),

      emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

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

  static GetAddressSerializer() {
    return Joi.object({
      latitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      longitude: Joi.number().required(),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      rate: Joi.number(),

      enable: Joi.boolean(),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      business_info: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      mode: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number().required(),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      contact_details: CompanyProfileModel.ContactDetails(),

      company_type: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_details: CompanyProfileModel.BusinessDetails(),

      warnings: Joi.any(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      business_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      modified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),
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

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      longitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow("").required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      company_type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      business_info: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      name: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_details: CompanyProfileModel.BusinessDetails(),

      warnings: Joi.any(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      contact_details: CompanyProfileModel.ContactDetails(),

      reject_reason: Joi.string().allow(""),

      business_type: Joi.string().allow(""),
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

      product: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),
    });
  }

  static BrandBannerSerializer() {
    return Joi.object({
      landscape: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
    });
  }

  static GetBrandResponseSerializer() {
    return Joi.object({
      verified_by: CompanyProfileModel.UserSerializer(),

      mode: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      _locale_language: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug_key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      warnings: Joi.any(),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      logo: Joi.string().allow("").required(),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      brand_tier: Joi.string().allow(""),

      description: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

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
      socials: Joi.array().items(CompanyProfileModel.CompanySocialAccounts()),

      website_url: Joi.string().allow(""),
    });
  }

  static CompanySerializer() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      market_channels: Joi.array().items(Joi.string().allow("")),

      details: CompanyProfileModel.CompanyDetails(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      created_on: Joi.string().allow(""),

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

      uid: Joi.number(),

      company: Joi.number().required(),
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
      verified_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

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

  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number().required(),

      minute: Joi.number().required(),
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

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      manager: CompanyProfileModel.LocationManagerSerializer(),

      company: CompanyProfileModel.GetCompanySerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      display_name: Joi.string().allow("").required(),

      created_by: CompanyProfileModel.UserSerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      stage: Joi.string().allow(""),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      phone_number: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      code: Joi.string().allow("").required(),
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

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      longitude: Joi.number().required(),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      manager: CompanyProfileModel.LocationManagerSerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      address: CompanyProfileModel.AddressSerializer().required(),

      company: Joi.number().required(),

      name: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      warnings: Joi.any(),

      display_name: Joi.string().allow("").required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      store_type: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

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
