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

      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number().required(),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      business_info: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      uid: Joi.number().required(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      company_type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      contact_details: CompanyProfileModel.ContactDetails(),

      franchise_enabled: Joi.boolean(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      stage: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      verified_on: Joi.string().allow(""),
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

      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      pincode: Joi.number().required(),

      longitude: Joi.number().required(),

      address_type: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      business_info: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      _custom_json: Joi.any(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      contact_details: CompanyProfileModel.ContactDetails(),

      warnings: Joi.any(),

      franchise_enabled: Joi.boolean(),

      company_type: Joi.string().allow(""),

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

      brand: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),
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
      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      reject_reason: Joi.string().allow(""),

      _custom_json: Joi.any(),

      stage: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      description: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      verified_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      _locale_language: Joi.any(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      brand_tier: Joi.string().allow(""),

      uid: Joi.number(),

      company_id: Joi.number(),

      description: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      banner: CompanyProfileModel.BrandBannerSerializer(),
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
      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      stage: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      created_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      stage: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),
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

      uid: Joi.number(),

      brands: Joi.array().items(Joi.number()).required(),
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

      opening: CompanyProfileModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      closing: CompanyProfileModel.LocationTimingSerializer(),
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
      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),
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
      title: Joi.string().allow("").required(),

      date: CompanyProfileModel.HolidayDateSerializer().required(),

      holiday_type: Joi.string().allow("").required(),
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
      e_invoice: CompanyProfileModel.InvoiceCredSerializer(),

      e_waybill: CompanyProfileModel.InvoiceCredSerializer(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      company: CompanyProfileModel.GetCompanySerializer(),

      name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      code: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      created_by: CompanyProfileModel.UserSerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      phone_number: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      display_name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),
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

      state: Joi.string().allow(""),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number().required(),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      code: Joi.string().allow("").required(),

      company: Joi.number().required(),

      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      address: CompanyProfileModel.AddressSerializer().required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      uid: Joi.number(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      warnings: Joi.any(),

      display_name: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
