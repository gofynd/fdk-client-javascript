const Joi = require("joi");

class CompanyProfileModel {
  static GetAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

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

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      warnings: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_type: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      mode: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      business_details: CompanyProfileModel.BusinessDetails(),

      created_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      created_on: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_info: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number().required(),

      contact_details: CompanyProfileModel.ContactDetails(),
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
      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      pincode: Joi.number().required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      company_type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      business_info: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      warnings: Joi.any(),

      business_details: CompanyProfileModel.BusinessDetails(),

      franchise_enabled: Joi.boolean(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),
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
      product: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),
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
      modified_on: Joi.string().allow(""),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      mode: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      reject_reason: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      logo: Joi.string().allow("").required(),

      banner: CompanyProfileModel.BrandBannerSerializer().required(),

      company_id: Joi.number(),

      brand_tier: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),
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
      company_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      reject_reason: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow("").required(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      company: CompanyProfileModel.CompanySerializer(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),
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
      closing: CompanyProfileModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),

      opening: CompanyProfileModel.LocationTimingSerializer(),
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

  static GetCompanySerializer() {
    return Joi.object({
      company_type: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      modified_on: Joi.string().allow(""),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      warnings: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      display_name: Joi.string().allow("").required(),

      phone_number: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      created_on: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      company: CompanyProfileModel.GetCompanySerializer(),

      _custom_json: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      store_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

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
      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      company: Joi.number().required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      _custom_json: Joi.any(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      address: CompanyProfileModel.AddressSerializer().required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      warnings: Joi.any(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      stage: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      name: Joi.string().allow("").required(),

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
