const Joi = require("joi");

class LogisticModel {
  static ApplicationServiceabilityConfig() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),

      channel_type: Joi.string().allow("").required(),

      serviceability_type: Joi.string().allow("").required(),
    });
  }

  static ServiceabilityrErrorResponse() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static ApplicationServiceabilityConfigResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: LogisticModel.ApplicationServiceabilityConfig(),

      error: LogisticModel.ServiceabilityrErrorResponse(),
    });
  }

  static EntityRegionView_Request() {
    return Joi.object({
      sub_type: Joi.array().items(Joi.string().allow("")).required(),

      parent_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static EntityRegionView_Items() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      sub_type: Joi.string().allow("").required(),
    });
  }

  static EntityRegionView_page() {
    return Joi.object({
      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),

      type: Joi.string().allow("").required(),

      current: Joi.number().required(),

      size: Joi.number().required(),
    });
  }

  static EntityRegionView_Error() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static EntityRegionView_Response() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.array()
        .items(LogisticModel.EntityRegionView_Items())
        .required(),

      page: LogisticModel.EntityRegionView_page().required(),

      error: LogisticModel.EntityRegionView_Error().required(),
    });
  }

  static ListViewSummary() {
    return Joi.object({
      total_active_zones: Joi.number().required(),

      total_zones: Joi.number().required(),

      total_pincodes_served: Joi.number().required(),
    });
  }

  static ZoneDataItem() {
    return Joi.object({
      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),

      current: Joi.number().required(),

      size: Joi.number().required(),
    });
  }

  static ListViewProduct() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      count: Joi.number().required(),
    });
  }

  static ListViewChannels() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),

      channel_type: Joi.string().allow("").required(),
    });
  }

  static ListViewItems() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      pincodes_count: Joi.number().required(),

      product: LogisticModel.ListViewProduct().required(),

      channels: LogisticModel.ListViewChannels().required(),

      zone_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      stores_count: Joi.number().required(),
    });
  }

  static ListViewResponse() {
    return Joi.object({
      summary: Joi.array().items(LogisticModel.ListViewSummary()).required(),

      page: Joi.array().items(LogisticModel.ZoneDataItem()).required(),

      items: Joi.array().items(LogisticModel.ListViewItems()).required(),
    });
  }

  static CompanyStoreView_PageItems() {
    return Joi.object({
      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),

      type: Joi.string().allow("").required(),

      current: Joi.number().required(),

      size: Joi.number().required(),
    });
  }

  static CompanyStoreView_Response() {
    return Joi.object({
      page: Joi.array()
        .items(LogisticModel.CompanyStoreView_PageItems())
        .required(),

      items: Joi.array().items(Joi.any()),
    });
  }

  static GetZoneDataViewChannels() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),

      channel_type: Joi.string().allow("").required(),
    });
  }

  static ZoneProductTypes() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ZoneMappingType() {
    return Joi.object({
      state: Joi.array().items(Joi.string().allow("")),

      country: Joi.string().allow("").required(),

      pincode: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetZoneDataViewItems() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean().required(),

      channels: Joi.array()
        .items(LogisticModel.GetZoneDataViewChannels())
        .required(),

      product: LogisticModel.ZoneProductTypes().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      region_type: Joi.string().allow("").required(),

      mapping: Joi.array().items(LogisticModel.ZoneMappingType()).required(),

      assignment_preference: Joi.string().allow(""),

      stores_count: Joi.number().required(),

      pincodes_count: Joi.number().required(),
    });
  }

  static GetSingleZoneDataViewResponse() {
    return Joi.object({
      data: LogisticModel.GetZoneDataViewItems().required(),
    });
  }

  static UpdateZoneData() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean().required(),

      channels: Joi.array()
        .items(LogisticModel.GetZoneDataViewChannels())
        .required(),

      product: LogisticModel.ZoneProductTypes().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      region_type: Joi.string().allow("").required(),

      mapping: Joi.array().items(LogisticModel.ZoneMappingType()).required(),

      assignment_preference: Joi.string().allow(""),
    });
  }

  static ZoneUpdateRequest() {
    return Joi.object({
      data: LogisticModel.UpdateZoneData().required(),

      identifier: Joi.string().allow("").required(),
    });
  }

  static ZoneSuccessResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      status_code: Joi.number().required(),
    });
  }

  static CreateZoneData() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean().required(),

      channels: Joi.array()
        .items(LogisticModel.GetZoneDataViewChannels())
        .required(),

      product: LogisticModel.ZoneProductTypes().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      region_type: Joi.string().allow("").required(),

      mapping: Joi.array().items(LogisticModel.ZoneMappingType()).required(),

      assignment_preference: Joi.string().allow(""),
    });
  }

  static ZoneRequest() {
    return Joi.object({
      data: LogisticModel.CreateZoneData().required(),

      identifier: Joi.string().allow("").required(),
    });
  }

  static ZoneResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      zone_id: Joi.string().allow("").required(),

      status_code: Joi.number().required(),
    });
  }

  static GetZoneFromPincodeViewRequest() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static GetZoneFromPincodeViewResponse() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),

      zones: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      item_total: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      current: Joi.number(),

      size: Joi.number(),
    });
  }

  static ProductReturnConfigResponse() {
    return Joi.object({
      on_same_store: Joi.boolean(),
    });
  }

  static AddressResponse() {
    return Joi.object({
      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),

      pincode: Joi.number(),
    });
  }

  static EinvoiceResponse() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static EwayBillResponse() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static GstCredentialsResponse() {
    return Joi.object({
      e_invoice: LogisticModel.EinvoiceResponse(),

      e_waybill: LogisticModel.EwayBillResponse(),
    });
  }

  static ModifiedByResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static MobileNo() {
    return Joi.object({
      number: Joi.string().allow(""),

      country_code: Joi.number(),
    });
  }

  static ManagerResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: LogisticModel.MobileNo(),
    });
  }

  static IntegrationTypeResponse() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
    });
  }

  static OpeningClosing() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static TimmingResponse() {
    return Joi.object({
      open: Joi.boolean(),

      opening: LogisticModel.OpeningClosing(),

      weekday: Joi.string().allow(""),

      closing: LogisticModel.OpeningClosing(),
    });
  }

  static Dp() {
    return Joi.object({
      operations: Joi.array().items(Joi.string().allow("")),

      transport_mode: Joi.string().allow(""),

      fm_priority: Joi.number(),

      internal_account_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      external_account_id: Joi.string().allow("").allow(null),

      lm_priority: Joi.number(),

      assign_dp_from_sb: Joi.boolean(),

      area_code: Joi.number().allow(null),

      rvp_priority: Joi.number(),
    });
  }

  static LogisticsResponse() {
    return Joi.object({
      override: Joi.boolean(),

      dp: LogisticModel.Dp(),
    });
  }

  static DocumentsResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      verified: Joi.boolean(),

      legal_name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static CreatedByResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ContactNumberResponse() {
    return Joi.object({
      number: Joi.string().allow(""),

      country_code: Joi.number(),
    });
  }

  static WarningsResponse() {
    return Joi.object({
      store_address: Joi.string().allow(""),
    });
  }

  static ItemResponse() {
    return Joi.object({
      product_return_config: LogisticModel.ProductReturnConfigResponse(),

      address: LogisticModel.AddressResponse(),

      gst_credentials: LogisticModel.GstCredentialsResponse(),

      created_on: Joi.string().allow(""),

      company: Joi.number(),

      stage: Joi.string().allow(""),

      modified_by: LogisticModel.ModifiedByResponse(),

      manager: LogisticModel.ManagerResponse(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      integration_type: LogisticModel.IntegrationTypeResponse(),

      timing: Joi.array().items(LogisticModel.TimmingResponse()),

      logistics: LogisticModel.LogisticsResponse(),

      verified_by: LogisticModel.ModifiedByResponse(),

      verified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(LogisticModel.DocumentsResponse()),

      created_by: LogisticModel.CreatedByResponse(),

      company_id: Joi.number(),

      sub_type: Joi.string().allow(""),

      _cls: Joi.string().allow(""),

      contact_numbers: Joi.array().items(LogisticModel.ContactNumberResponse()),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      display_name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      warnings: LogisticModel.WarningsResponse(),
    });
  }

  static GetStoresViewResponse() {
    return Joi.object({
      page: LogisticModel.PageResponse().required(),

      items: Joi.array().items(LogisticModel.ItemResponse()),
    });
  }
}
module.exports = LogisticModel;
