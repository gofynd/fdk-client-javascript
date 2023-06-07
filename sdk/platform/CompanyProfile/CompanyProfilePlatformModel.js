const Joi = require("joi");

class CompanyProfileModel {
  static AddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }
  static BrandBannerSerializer() {
    return Joi.object({
      landscape: Joi.string().allow("").required(),
      portrait: Joi.string().allow("").required(),
    });
  }
  static BulkLocationSerializer() {
    return Joi.object({
      data: Joi.array().items(CompanyProfileModel.LocationSerializer()),
    });
  }
  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
    });
  }
  static BusinessDetails() {
    return Joi.object({
      website: CompanyProfileModel.Website(),
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
  static CompanyBrandSerializer() {
    return Joi.object({
      brand: CompanyProfileModel.GetBrandResponseSerializer(),
      company: CompanyProfileModel.CompanySerializer(),
      created_by: CompanyProfileModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      modified_by: CompanyProfileModel.UserSerializer(),
      modified_on: Joi.string().allow(""),
      reject_reason: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      uid: Joi.number(),
      verified_by: CompanyProfileModel.UserSerializer(),
      verified_on: Joi.string().allow(""),
      warnings: Joi.any(),
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
      _custom_json: Joi.any(),
      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),
      business_country_info: CompanyProfileModel.BusinessCountryInfo(),
      business_type: Joi.string().allow("").required(),
      company_type: Joi.string().allow("").required(),
      created_by: CompanyProfileModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      details: CompanyProfileModel.CompanyDetails(),
      market_channels: Joi.array().items(Joi.string().allow("")),
      modified_by: CompanyProfileModel.UserSerializer(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      reject_reason: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      uid: Joi.number(),
      verified_by: CompanyProfileModel.UserSerializer(),
      verified_on: Joi.string().allow(""),
    });
  }
  static CompanySocialAccounts() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
    });
  }
  static CompanyTaxesSerializer() {
    return Joi.object({
      effective_date: Joi.string().allow(""),
      enable: Joi.boolean(),
      rate: Joi.number(),
    });
  }
  static CompanyTaxesSerializer1() {
    return Joi.object({
      effective_date: Joi.string().allow(""),
      enable: Joi.boolean(),
      rate: Joi.number(),
    });
  }
  static ContactDetails() {
    return Joi.object({
      emails: Joi.array().items(Joi.string().allow("")),
      phone: Joi.array().items(CompanyProfileModel.SellerPhoneNumber()),
    });
  }
  static CreateUpdateAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow("").required(),
      address2: Joi.string().allow(""),
      address_type: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      country_code: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      pincode: Joi.number().required(),
      state: Joi.string().allow("").required(),
    });
  }
  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),
      _locale_language: Joi.any(),
      banner: CompanyProfileModel.BrandBannerSerializer().required(),
      brand_tier: Joi.string().allow(""),
      company_id: Joi.number(),
      description: Joi.string().allow(""),
      logo: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      synonyms: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
    });
  }
  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),
      type: Joi.string().allow("").required(),
      url: Joi.string().allow(""),
      value: Joi.string().allow("").required(),
      verified: Joi.boolean(),
    });
  }
  static DocumentsObj() {
    return Joi.object({
      pending: Joi.number(),
      verified: Joi.number(),
    });
  }
  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      status: Joi.number(),
    });
  }
  static GetAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }
  static GetBrandResponseSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),
      _locale_language: Joi.any(),
      banner: CompanyProfileModel.BrandBannerSerializer(),
      created_by: CompanyProfileModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      description: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      modified_by: CompanyProfileModel.UserSerializer(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      reject_reason: Joi.string().allow(""),
      slug_key: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
      verified_by: CompanyProfileModel.UserSerializer(),
      verified_on: Joi.string().allow(""),
      warnings: Joi.any(),
    });
  }
  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      _custom_json: Joi.any(),
      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),
      business_country_info: CompanyProfileModel.BusinessCountryInfo(),
      business_details: CompanyProfileModel.BusinessDetails(),
      business_info: Joi.string().allow(""),
      business_type: Joi.string().allow(""),
      company_type: Joi.string().allow("").required(),
      contact_details: CompanyProfileModel.ContactDetails(),
      created_by: CompanyProfileModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      documents: Joi.array().items(CompanyProfileModel.Document()),
      franchise_enabled: Joi.boolean(),
      mode: Joi.string().allow(""),
      modified_by: CompanyProfileModel.UserSerializer(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      stage: Joi.string().allow(""),
      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer()),
      uid: Joi.number().required(),
      verified_by: CompanyProfileModel.UserSerializer(),
      verified_on: Joi.string().allow(""),
      warnings: Joi.any(),
    });
  }
  static GetCompanySerializer() {
    return Joi.object({
      addresses: Joi.array().items(CompanyProfileModel.GetAddressSerializer()),
      business_type: Joi.string().allow(""),
      company_type: Joi.string().allow(""),
      created_by: CompanyProfileModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      modified_by: CompanyProfileModel.UserSerializer(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      reject_reason: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      uid: Joi.number(),
      verified_by: CompanyProfileModel.UserSerializer(),
      verified_on: Joi.string().allow(""),
    });
  }
  static GetLocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),
      address: CompanyProfileModel.GetAddressSerializer().required(),
      auto_invoice: Joi.boolean(),
      code: Joi.string().allow("").required(),
      company: CompanyProfileModel.GetCompanySerializer(),
      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),
      created_by: CompanyProfileModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      credit_note: Joi.boolean(),
      display_name: Joi.string().allow("").required(),
      documents: Joi.array().items(CompanyProfileModel.Document()),
      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),
      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),
      manager: CompanyProfileModel.LocationManagerSerializer(),
      modified_by: CompanyProfileModel.UserSerializer(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      phone_number: Joi.string().allow(""),
      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),
      stage: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),
      uid: Joi.number(),
      verified_by: CompanyProfileModel.UserSerializer(),
      verified_on: Joi.string().allow(""),
      warnings: Joi.any(),
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
      enabled: Joi.boolean(),
      password: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }
  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_invoice: CompanyProfileModel.InvoiceCredSerializer(),
      e_waybill: CompanyProfileModel.InvoiceCredSerializer(),
    });
  }
  static LocationDayWiseSerializer() {
    return Joi.object({
      closing: CompanyProfileModel.LocationTimingSerializer(),
      open: Joi.boolean().required(),
      opening: CompanyProfileModel.LocationTimingSerializer(),
      weekday: Joi.string().allow("").required(),
    });
  }
  static LocationListSerializer() {
    return Joi.object({
      items: Joi.array().items(CompanyProfileModel.GetLocationSerializer()),
      page: CompanyProfileModel.Page(),
    });
  }
  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),
      mobile_no: CompanyProfileModel.SellerPhoneNumber().required(),
      name: Joi.string().allow(""),
    });
  }
  static LocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),
      address: CompanyProfileModel.AddressSerializer().required(),
      auto_invoice: Joi.boolean(),
      code: Joi.string().allow("").required(),
      company: Joi.number().required(),
      contact_numbers: Joi.array().items(
        CompanyProfileModel.SellerPhoneNumber()
      ),
      credit_note: Joi.boolean(),
      display_name: Joi.string().allow("").required(),
      documents: Joi.array().items(CompanyProfileModel.Document()),
      gst_credentials: CompanyProfileModel.InvoiceDetailsSerializer(),
      holiday: Joi.array().items(CompanyProfileModel.HolidaySchemaSerializer()),
      manager: CompanyProfileModel.LocationManagerSerializer(),
      name: Joi.string().allow("").required(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      product_return_config: CompanyProfileModel.ProductReturnConfigSerializer(),
      stage: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      timing: Joi.array().items(
        CompanyProfileModel.LocationDayWiseSerializer()
      ),
      uid: Joi.number(),
      warnings: Joi.any(),
    });
  }
  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number().required(),
      minute: Joi.number().required(),
    });
  }
  static MetricsSerializer() {
    return Joi.object({
      brand: CompanyProfileModel.DocumentsObj(),
      company_documents: CompanyProfileModel.DocumentsObj(),
      product: CompanyProfileModel.DocumentsObj(),
      stage: Joi.string().allow(""),
      store: CompanyProfileModel.DocumentsObj(),
      store_documents: CompanyProfileModel.DocumentsObj(),
      uid: Joi.number(),
    });
  }
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }
  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),
      store_uid: Joi.number(),
    });
  }
  static ProfileSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
      uid: Joi.number(),
    });
  }
  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),
      number: Joi.string().allow("").required(),
    });
  }
  static UpdateCompany() {
    return Joi.object({
      _custom_json: Joi.any(),
      addresses: Joi.array().items(
        CompanyProfileModel.CreateUpdateAddressSerializer()
      ),
      business_details: CompanyProfileModel.BusinessDetails(),
      business_info: Joi.string().allow(""),
      business_type: Joi.string().allow(""),
      company_type: Joi.string().allow(""),
      contact_details: CompanyProfileModel.ContactDetails(),
      documents: Joi.array().items(CompanyProfileModel.Document()),
      franchise_enabled: Joi.boolean(),
      name: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      reject_reason: Joi.string().allow(""),
      taxes: Joi.array().items(CompanyProfileModel.CompanyTaxesSerializer1()),
      warnings: Joi.any(),
    });
  }
  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }
  static Website() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }
}
module.exports = CompanyProfileModel;
