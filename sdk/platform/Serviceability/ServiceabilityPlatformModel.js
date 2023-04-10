const Joi = require("joi");

class ServiceabilityModel {
  static ApplicationServiceabilityConfig() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),

      channel_id: Joi.string().allow("").required(),

      channel_type: Joi.string().allow("").required(),
    });
  }

  static ServiceabilityrErrorResponse() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ApplicationServiceabilityConfigResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: ServiceabilityModel.ApplicationServiceabilityConfig(),

      error: ServiceabilityModel.ServiceabilityrErrorResponse(),
    });
  }

  static EntityRegionView_Request() {
    return Joi.object({
      parent_id: Joi.array().items(Joi.string().allow("")),

      sub_type: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static EntityRegionView_page() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      current: Joi.number().required(),

      size: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),
    });
  }

  static EntityRegionView_Items() {
    return Joi.object({
      sub_type: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static EntityRegionView_Error() {
    return Joi.object({
      value: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static EntityRegionView_Response() {
    return Joi.object({
      success: Joi.boolean().required(),

      page: ServiceabilityModel.EntityRegionView_page().required(),

      data: Joi.array()
        .items(ServiceabilityModel.EntityRegionView_Items())
        .required(),

      error: ServiceabilityModel.EntityRegionView_Error().required(),
    });
  }

  static ZoneDataItem() {
    return Joi.object({
      current: Joi.number().required(),

      size: Joi.number().required(),

      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),
    });
  }

  static ListViewProduct() {
    return Joi.object({
      count: Joi.number().required(),

      type: Joi.string().allow("").required(),
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
      pincodes_count: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      zone_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      stores_count: Joi.number().required(),

      product: ServiceabilityModel.ListViewProduct().required(),

      channels: ServiceabilityModel.ListViewChannels().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static ListViewSummary() {
    return Joi.object({
      total_zones: Joi.number().required(),

      total_active_zones: Joi.number().required(),

      total_pincodes_served: Joi.number().required(),
    });
  }

  static ListViewResponse() {
    return Joi.object({
      page: Joi.array().items(ServiceabilityModel.ZoneDataItem()).required(),

      items: Joi.array().items(ServiceabilityModel.ListViewItems()).required(),

      summary: Joi.array()
        .items(ServiceabilityModel.ListViewSummary())
        .required(),
    });
  }

  static CompanyStoreView_PageItems() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      current: Joi.number().required(),

      size: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),
    });
  }

  static CompanyStoreView_Response() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),

      page: Joi.array()
        .items(ServiceabilityModel.CompanyStoreView_PageItems())
        .required(),
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
      tags: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ZoneMappingType() {
    return Joi.object({
      state: Joi.array().items(Joi.string().allow("")),

      country: Joi.string().allow("").required(),

      pincode: Joi.array().items(Joi.string().allow("")),
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
        .items(ServiceabilityModel.GetZoneDataViewChannels())
        .required(),

      product: ServiceabilityModel.ZoneProductTypes().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      region_type: Joi.string().allow("").required(),

      mapping: Joi.array()
        .items(ServiceabilityModel.ZoneMappingType())
        .required(),

      assignment_preference: Joi.string().allow(""),
    });
  }

  static ZoneUpdateRequest() {
    return Joi.object({
      data: ServiceabilityModel.UpdateZoneData().required(),

      identifier: Joi.string().allow("").required(),
    });
  }

  static ZoneSuccessResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      status_code: Joi.number().required(),
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
        .items(ServiceabilityModel.GetZoneDataViewChannels())
        .required(),

      product: ServiceabilityModel.ZoneProductTypes().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      region_type: Joi.string().allow("").required(),

      mapping: Joi.array()
        .items(ServiceabilityModel.ZoneMappingType())
        .required(),

      assignment_preference: Joi.string().allow(""),

      stores_count: Joi.number().required(),

      pincodes_count: Joi.number().required(),
    });
  }

  static GetSingleZoneDataViewResponse() {
    return Joi.object({
      data: ServiceabilityModel.GetZoneDataViewItems().required(),
    });
  }

  static CreateZoneData() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean().required(),

      channels: Joi.array()
        .items(ServiceabilityModel.GetZoneDataViewChannels())
        .required(),

      product: ServiceabilityModel.ZoneProductTypes().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      region_type: Joi.string().allow("").required(),

      mapping: Joi.array()
        .items(ServiceabilityModel.ZoneMappingType())
        .required(),

      assignment_preference: Joi.string().allow(""),
    });
  }

  static ZoneRequest() {
    return Joi.object({
      data: ServiceabilityModel.CreateZoneData().required(),

      identifier: Joi.string().allow("").required(),
    });
  }

  static ZoneResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      status_code: Joi.number().required(),

      zone_id: Joi.string().allow("").required(),
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

  static AddressResponse() {
    return Joi.object({
      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static ContactNumberResponse() {
    return Joi.object({
      country_code: Joi.number(),

      number: Joi.string().allow(""),
    });
  }

  static IntegrationTypeResponse() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static CreatedByResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static MobileNo() {
    return Joi.object({
      country_code: Joi.number(),

      number: Joi.string().allow(""),
    });
  }

  static ManagerResponse() {
    return Joi.object({
      mobile_no: ServiceabilityModel.MobileNo(),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigResponse() {
    return Joi.object({
      on_same_store: Joi.boolean(),
    });
  }

  static ModifiedByResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static EwayBillResponse() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static EinvoiceResponse() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static GstCredentialsResponse() {
    return Joi.object({
      e_waybill: ServiceabilityModel.EwayBillResponse(),

      e_invoice: ServiceabilityModel.EinvoiceResponse(),
    });
  }

  static DocumentsResponse() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      verified: Joi.boolean(),

      type: Joi.string().allow(""),
    });
  }

  static Dp() {
    return Joi.object({
      external_account_id: Joi.string().allow("").allow(null),

      rvp_priority: Joi.number(),

      area_code: Joi.number().allow(null),

      lm_priority: Joi.number(),

      assign_dp_from_sb: Joi.boolean(),

      transport_mode: Joi.string().allow(""),

      fm_priority: Joi.number(),

      payment_mode: Joi.string().allow(""),

      operations: Joi.array().items(Joi.string().allow("")),

      internal_account_id: Joi.string().allow(""),
    });
  }

  static LogisticsResponse() {
    return Joi.object({
      dp: ServiceabilityModel.Dp(),

      override: Joi.boolean(),
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
      opening: ServiceabilityModel.OpeningClosing(),

      closing: ServiceabilityModel.OpeningClosing(),

      open: Joi.boolean(),

      weekday: Joi.string().allow(""),
    });
  }

  static WarningsResponse() {
    return Joi.object({
      store_address: Joi.string().allow(""),
    });
  }

  static ItemResponse() {
    return Joi.object({
      address: ServiceabilityModel.AddressResponse(),

      verified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      _cls: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        ServiceabilityModel.ContactNumberResponse()
      ),

      integration_type: ServiceabilityModel.IntegrationTypeResponse(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: ServiceabilityModel.CreatedByResponse(),

      stage: Joi.string().allow(""),

      manager: ServiceabilityModel.ManagerResponse(),

      modified_on: Joi.string().allow(""),

      product_return_config: ServiceabilityModel.ProductReturnConfigResponse(),

      verified_by: ServiceabilityModel.ModifiedByResponse(),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      company: Joi.number(),

      _custom_json: Joi.any(),

      code: Joi.string().allow(""),

      gst_credentials: ServiceabilityModel.GstCredentialsResponse(),

      documents: Joi.array().items(ServiceabilityModel.DocumentsResponse()),

      logistics: ServiceabilityModel.LogisticsResponse(),

      uid: Joi.number(),

      timing: Joi.array().items(ServiceabilityModel.TimmingResponse()),

      warnings: ServiceabilityModel.WarningsResponse(),

      modified_by: ServiceabilityModel.ModifiedByResponse(),

      sub_type: Joi.string().allow(""),
    });
  }

  static PageResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      current: Joi.number(),

      size: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static GetStoresViewResponse() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityModel.ItemResponse()),

      page: ServiceabilityModel.PageResponse().required(),
    });
  }
}
module.exports = ServiceabilityModel;
