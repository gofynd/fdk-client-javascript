const Joi = require("joi");

class CompanyProfileModel {
  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

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

  static CompanyTaxesSerializer() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),

      rate: Joi.number(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number().required(),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

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

  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
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
      created_on: Joi.string().allow(""),

      warnings: Joi.any(),

      franchise_enabled: Joi.boolean(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_type: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      modified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      business_info: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      _custom_json: Joi.any(),

      contact_details: CompanyProfileModel.ContactDetails(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      business_details: CompanyProfileModel.BusinessDetails(),

      stage: Joi.string().allow(""),

      uid: Joi.number().required(),

      verified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),
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

  static CompanyTaxesSerializer1() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),

      rate: Joi.number(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      pincode: Joi.number().required(),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      _custom_json: Joi.any(),

      contact_details: CompanyProfileModel.ContactDetails(),

      warnings: Joi.any(),

      business_info: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      reject_reason: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      company_type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      franchise_enabled: Joi.boolean(),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),
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
      brand: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

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
      created_on: Joi.string().allow(""),

      warnings: Joi.any(),

      modified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      slug_key: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      description: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      _locale_language: Joi.any(),

      verified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      brand_tier: Joi.string().allow(""),

      _locale_language: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      details: CompanyProfileModel.CompanyDetails(),

      _custom_json: Joi.any(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      business_type: Joi.string().allow("").required(),

      reject_reason: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      created_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      company: CompanyProfileModel.CompanySerializer(),

      warnings: Joi.any(),

      reject_reason: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),
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
      uid: Joi.number(),

      company: Joi.number().required(),

      brands: Joi.array().items(Joi.number()).required(),
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

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_waybill: CompanyProfileModel.InvoiceCredSerializer(),

      e_invoice: CompanyProfileModel.InvoiceCredSerializer(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      verified_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      created_by: CompanyProfileModel.UserSerializer(),
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

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),

      opening: CompanyProfileModel.LocationTimingSerializer(),
    });
  }

  static HolidayDateSerializer() {
    return Joi.object({
      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),
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
      created_on: Joi.string().allow(""),

      warnings: Joi.any(),

      phone_number: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      modified_by: CompanyProfileModel.UserSerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      display_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      company: CompanyProfileModel.GetCompanySerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      address: CompanyProfileModel.GetAddressSerializer().required(),
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
      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number().required(),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      name: Joi.string().allow("").required(),

      company: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      warnings: Joi.any(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      code: Joi.string().allow("").required(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      store_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      address: CompanyProfileModel.AddressSerializer().required(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
