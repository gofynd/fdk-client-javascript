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
      url: Joi.string().allow(""),

      verified: Joi.boolean(),

      value: Joi.string().allow("").required(),

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

  static CompanyTaxesSerializer() {
    return Joi.object({
      enable: Joi.boolean(),

      rate: Joi.number(),

      effective_date: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      latitude: Joi.number().required(),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      verified_by: CompanyProfileModel.UserSerializer(),

      company_type: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      franchise_enabled: Joi.boolean(),

      name: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      business_details: CompanyProfileModel.BusinessDetails(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      modified_by: CompanyProfileModel.UserSerializer(),

      contact_details: CompanyProfileModel.ContactDetails(),

      uid: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      business_type: Joi.string().allow("").required(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),
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
      country_code: Joi.string().allow(""),

      pincode: Joi.number().required(),

      longitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      latitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      contact_details: CompanyProfileModel.ContactDetails(),

      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      warnings: Joi.any(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      franchise_enabled: Joi.boolean(),

      business_details: CompanyProfileModel.BusinessDetails(),

      name: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

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
      verified: Joi.number(),

      pending: Joi.number(),
    });
  }

  static MetricsSerializer() {
    return Joi.object({
      stage: Joi.string().allow(""),

      uid: Joi.number(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

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
      verified_by: CompanyProfileModel.UserSerializer(),

      slug_key: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      logo: Joi.string().allow(""),

      warnings: Joi.any(),

      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      modified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      banner: CompanyProfileModel.BrandBannerSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      company_id: Joi.number(),

      description: Joi.string().allow(""),

      brand_tier: Joi.string().allow(""),

      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),
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
      verified_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      created_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      verified_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      warnings: Joi.any(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      created_on: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),
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
      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),
    });
  }

  static HolidaySchemaSerializer() {
    return Joi.object({
      date: CompanyProfileModel.HolidayDateSerializer().required(),

      holiday_type: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
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
      verified_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      verified_by: CompanyProfileModel.UserSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      name: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      store_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      _custom_json: Joi.any(),

      phone_number: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      company: CompanyProfileModel.GetCompanySerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      code: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),
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
      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      latitude: Joi.number().required(),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      address: CompanyProfileModel.AddressSerializer().required(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      code: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      warnings: Joi.any(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      display_name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      name: Joi.string().allow("").required(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      company: Joi.number().required(),
    });
  }

  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
}
module.exports = CompanyProfileModel;
