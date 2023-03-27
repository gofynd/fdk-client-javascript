const Joi = require("joi");

class CompanyProfileModel {
  static BusinessCountryInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
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

  static GetAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number().required(),

      city: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static CompanyTaxesSerializer() {
    return Joi.object({
      rate: Joi.number(),

      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      business_info: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      verified_on: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      business_type: Joi.string().allow("").required(),

      warnings: Joi.any(),

      name: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      franchise_enabled: Joi.boolean(),

      verified_by: CompanyProfileModel.UserSerializer(),

      mode: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      modified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      uid: Joi.number().required(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      created_on: Joi.string().allow(""),
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

  static CompanyTaxesSerializer1() {
    return Joi.object({
      rate: Joi.number(),

      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      city: Joi.string().allow("").required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      business_info: Joi.string().allow(""),

      franchise_enabled: Joi.boolean(),

      warnings: Joi.any(),

      contact_details: CompanyProfileModel.ContactDetails(),

      reject_reason: Joi.string().allow(""),

      name: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      company_type: Joi.string().allow(""),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      _custom_json: Joi.any(),

      business_type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),
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
      pending: Joi.number(),

      verified: Joi.number(),
    });
  }

  static MetricsSerializer() {
    return Joi.object({
      store_documents: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      store: CompanyProfileModel.DocumentsObj(),
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
      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      warnings: Joi.any(),

      name: Joi.string().allow("").required(),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      mode: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      description: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      _locale_language: Joi.any(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      description: Joi.string().allow(""),

      brand_tier: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      _locale_language: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      details: CompanyProfileModel.CompanyDetails(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      created_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      market_channels: Joi.array().items(Joi.string().allow("")),

      modified_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      company: CompanyProfileModel.CompanySerializer(),

      created_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      verified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),
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

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
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
      closing: CompanyProfileModel.LocationTimingSerializer(),

      opening: CompanyProfileModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      created_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),
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

  static GetLocationSerializer() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      phone_number: Joi.string().allow(""),

      warnings: Joi.any(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      name: Joi.string().allow("").required(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: CompanyProfileModel.UserSerializer(),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      company: CompanyProfileModel.GetCompanySerializer(),

      store_type: Joi.string().allow(""),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      uid: Joi.number(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      created_on: Joi.string().allow(""),
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
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number().required(),

      city: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      company: Joi.number().required(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      store_type: Joi.string().allow(""),

      warnings: Joi.any(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      code: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      stage: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      uid: Joi.number(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      _custom_json: Joi.any(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

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
