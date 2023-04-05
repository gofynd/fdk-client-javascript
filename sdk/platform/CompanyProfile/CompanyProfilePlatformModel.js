const Joi = require("joi");

class CompanyProfileModel {
  static GetAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),
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
      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      value: Joi.string().allow("").required(),
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
      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),

      rate: Joi.number(),
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

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
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
      business_info: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      franchise_enabled: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      mode: Joi.string().allow(""),

      uid: Joi.number().required(),

      created_by: CompanyProfileModel.UserSerializer(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      warnings: Joi.any(),

      contact_details: CompanyProfileModel.ContactDetails(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      enable: Joi.boolean(),

      effective_date: Joi.string().allow(""),

      rate: Joi.number(),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      address_type: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number().required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      franchise_enabled: Joi.boolean(),

      business_info: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      business_details: CompanyProfileModel.BusinessDetails(),

      _custom_json: Joi.any(),

      business_type: Joi.string().allow(""),

      warnings: Joi.any(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      reject_reason: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),
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
      store_documents: CompanyProfileModel.DocumentsObj(),

      stage: Joi.string().allow(""),

      product: CompanyProfileModel.DocumentsObj(),

      brand: CompanyProfileModel.DocumentsObj(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      store: CompanyProfileModel.DocumentsObj(),
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
      stage: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      _locale_language: Joi.any(),

      modified_by: CompanyProfileModel.UserSerializer(),

      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      brand_tier: Joi.string().allow(""),

      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").required(),

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
      socials: Joi.array().items(CompanyProfileModel.CompanySocialAccounts()),

      website_url: Joi.string().allow(""),
    });
  }

  static CompanySerializer() {
    return Joi.object({
      market_channels: Joi.array().items(Joi.string().allow("")),

      modified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      business_type: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      modified_by: CompanyProfileModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

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

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
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

      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
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
      modified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      stage: Joi.string().allow(""),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      modified_by: CompanyProfileModel.UserSerializer(),

      code: Joi.string().allow("").required(),

      verified_by: CompanyProfileModel.UserSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      phone_number: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      warnings: Joi.any(),

      display_name: Joi.string().allow("").required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      company: CompanyProfileModel.GetCompanySerializer(),
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
      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      name: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      stage: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      address: CompanyProfileModel.AddressSerializer().required(),

      warnings: Joi.any(),

      display_name: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      company: Joi.number().required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
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
