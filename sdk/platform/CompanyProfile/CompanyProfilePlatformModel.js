const Joi = require("joi");

class CompanyProfileModel {
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

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      longitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      latitude: Joi.number().required(),

      pincode: Joi.number(),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),
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

  static CompanyTaxesSerializer() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),

      rate: Joi.number(),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_type: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      franchise_enabled: Joi.boolean(),

      business_info: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      verified_by: CompanyProfileModel.UserSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      uid: Joi.number().required(),

      contact_details: CompanyProfileModel.ContactDetails(),

      company_type: Joi.string().allow("").required(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      status: Joi.number(),

      message: Joi.string().allow(""),

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
      address2: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      latitude: Joi.number().required(),

      pincode: Joi.number().required(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      business_details: CompanyProfileModel.BusinessDetails(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      franchise_enabled: Joi.boolean(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      reject_reason: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

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
      stage: Joi.string().allow(""),

      brand: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      company_documents: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),
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

      mode: Joi.string().allow(""),

      _locale_language: Joi.any(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug_key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      verified_by: CompanyProfileModel.UserSerializer(),

      description: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      uid: Joi.number(),

      company_id: Joi.number(),

      logo: Joi.string().allow("").required(),

      brand_tier: Joi.string().allow(""),
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
      details: CompanyProfileModel.CompanyDetails(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      verified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      reject_reason: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      business_type: Joi.string().allow("").required(),

      company_type: Joi.string().allow("").required(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      created_on: Joi.string().allow(""),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      company: CompanyProfileModel.CompanySerializer(),

      stage: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      modified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      warnings: Joi.any(),

      created_on: Joi.string().allow(""),
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

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),
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

  static GetCompanySerializer() {
    return Joi.object({
      stage: Joi.string().allow(""),

      verified_by: CompanyProfileModel.UserSerializer(),

      verified_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      verified_on: Joi.string().allow(""),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      created_on: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      modified_by: CompanyProfileModel.UserSerializer(),

      _custom_json: Joi.any(),

      phone_number: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      store_type: Joi.string().allow(""),

      warnings: Joi.any(),

      company: CompanyProfileModel.GetCompanySerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      uid: Joi.number(),

      code: Joi.string().allow("").required(),
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
      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      longitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      latitude: Joi.number().required(),

      pincode: Joi.number(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      company: Joi.number().required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      _custom_json: Joi.any(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      address: CompanyProfileModel.AddressSerializer().required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

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
