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

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      enable: Joi.boolean(),

      rate: Joi.number(),

      effective_date: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number().required(),

      country: Joi.string().allow(""),

      longitude: Joi.number().required(),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
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

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      business_details: CompanyProfileModel.BusinessDetails(),

      name: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      business_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      warnings: Joi.any(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      mode: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      contact_details: CompanyProfileModel.ContactDetails(),

      modified_by: CompanyProfileModel.UserSerializer(),

      franchise_enabled: Joi.boolean(),

      verified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      enable: Joi.boolean(),

      rate: Joi.number(),

      effective_date: Joi.string().allow(""),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      business_details: CompanyProfileModel.BusinessDetails(),

      name: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      reject_reason: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      franchise_enabled: Joi.boolean(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      company_type: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      warnings: Joi.any(),

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

      store_documents: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      store: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),
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
      name: Joi.string().allow("").required(),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      warnings: Joi.any(),

      mode: Joi.string().allow(""),

      _locale_language: Joi.any(),

      logo: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      logo: Joi.string().allow("").required(),

      uid: Joi.number(),

      brand_tier: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),
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
      name: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      market_channels: Joi.array().items(Joi.string().allow("")),

      details: CompanyProfileModel.CompanyDetails(),

      business_type: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      verified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      company: CompanyProfileModel.CompanySerializer(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      warnings: Joi.any(),

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
      brands: Joi.array().items(Joi.number()).required(),

      company: Joi.number().required(),

      uid: Joi.number(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),
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

      open: Joi.boolean().required(),

      closing: CompanyProfileModel.LocationTimingSerializer(),
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

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
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

  static GetCompanySerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      manager: CompanyProfileModel.LocationManagerSerializer(),

      name: Joi.string().allow("").required(),

      created_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      warnings: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      store_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      code: Joi.string().allow("").required(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      stage: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      phone_number: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      company: CompanyProfileModel.GetCompanySerializer(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),
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

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number().required(),

      country: Joi.string().allow(""),

      longitude: Joi.number().required(),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      manager: CompanyProfileModel.LocationManagerSerializer(),

      name: Joi.string().allow("").required(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      code: Joi.string().allow("").required(),

      address: CompanyProfileModel.AddressSerializer().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      warnings: Joi.any(),

      company: Joi.number().required(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

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
