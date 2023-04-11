const Joi = require("joi");

class CompanyProfileModel {
  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      latitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      address1: Joi.string().allow(""),
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

  static Document() {
    return Joi.object({
      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),
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
      mode: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      business_details: CompanyProfileModel.BusinessDetails(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number().required(),

      business_info: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      franchise_enabled: Joi.boolean(),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      business_type: Joi.string().allow("").required(),

      company_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      contact_details: CompanyProfileModel.ContactDetails(),

      stage: Joi.string().allow(""),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      status: Joi.number(),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      code: Joi.string().allow(""),
    });
  }

  static CreateUpdateAddressSerializer() {
    return Joi.object({
      latitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address1: Joi.string().allow("").required(),
    });
  }

  static CompanyTaxesSerializer1() {
    return Joi.object({
      effective_date: Joi.string().allow(""),

      enable: Joi.boolean(),

      rate: Joi.number(),
    });
  }

  static UpdateCompany() {
    return Joi.object({
      business_type: Joi.string().allow(""),

      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      company_type: Joi.string().allow(""),

      business_details: CompanyProfileModel.BusinessDetails(),

      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      franchise_enabled: Joi.boolean(),

      contact_details: CompanyProfileModel.ContactDetails(),

      warnings: Joi.any(),

      reject_reason: Joi.string().allow(""),

      business_info: Joi.string().allow(""),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),
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
      brand: CompanyProfileModel.DocumentsObj(),

      product: CompanyProfileModel.DocumentsObj(),

      store: CompanyProfileModel.DocumentsObj(),

      store_documents: CompanyProfileModel.DocumentsObj(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      company_documents: CompanyProfileModel.DocumentsObj(),
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
      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      reject_reason: Joi.string().allow(""),

      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),

      slug_key: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _locale_language: Joi.any(),

      company_id: Joi.number(),

      logo: Joi.string().allow("").required(),

      brand_tier: Joi.string().allow(""),

      banner: CompanyProfileModel.BrandBannerSerializer(),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      business_type: Joi.string().allow("").required(),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      company_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      details: CompanyProfileModel.CompanyDetails(),

      market_channels: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      business_country_info: CompanyProfileModel.BusinessCountryInfo(),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_by: CompanyProfileModel.UserSerializer(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      brand: CompanyProfileModel.GetBrandResponseSerializer(),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      company: CompanyProfileModel.CompanySerializer(),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

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
      business_type: Joi.string().allow(""),

      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),

      company_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: CompanyProfileModel.UserSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),
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

  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number().required(),

      minute: Joi.number().required(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      opening: CompanyProfileModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),

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

      holiday_type: Joi.string().allow("").required(),

      date: CompanyProfileModel.HolidayDateSerializer().required(),
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
      code: Joi.string().allow("").required(),

      modified_by: CompanyProfileModel.UserSerializer(),

      warnings: Joi.any(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),

      display_name: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      created_on: Joi.string().allow(""),

      phone_number: Joi.string().allow(""),

      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      created_by: CompanyProfileModel.UserSerializer(),

      company: CompanyProfileModel.GetCompanySerializer(),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      verified_by: CompanyProfileModel.UserSerializer(),

      address: CompanyProfileModel.GetAddressSerializer().required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),
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

      longitude: Joi.number().required(),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      address1: Joi.string().allow(""),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),

      company: Joi.number().required(),

      code: Joi.string().allow("").required(),

      documents: Joi.array().items(CompanyProfileModel.Document()),

      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),

      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),

      _custom_json: Joi.any(),

      address: CompanyProfileModel.AddressSerializer().required(),

      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),

      warnings: Joi.any(),

      manager: CompanyProfileModel.LocationManagerSerializer(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

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
