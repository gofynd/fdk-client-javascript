const Joi = require("joi");

class ServiceabilityModel {
  static ServiceabilityrErrorResponse() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static ApplicationServiceabilityConfig() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),

      serviceability_type: Joi.string().allow("").required(),

      channel_type: Joi.string().allow("").required(),
    });
  }

  static ApplicationServiceabilityConfigResponse() {
    return Joi.object({
      error: ServiceabilityModel.ServiceabilityrErrorResponse(),

      data: ServiceabilityModel.ApplicationServiceabilityConfig(),

      success: Joi.boolean().required(),
    });
  }

  static EntityRegionView_Request() {
    return Joi.object({
      parent_id: Joi.array().items(Joi.string().allow("")),

      sub_type: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static EntityRegionView_Error() {
    return Joi.object({
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static EntityRegionView_Items() {
    return Joi.object({
      sub_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),
    });
  }

  static EntityRegionView_page() {
    return Joi.object({
      current: Joi.number().required(),

      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      size: Joi.number().required(),

      has_next: Joi.boolean().required(),
    });
  }

  static EntityRegionView_Response() {
    return Joi.object({
      error: ServiceabilityModel.EntityRegionView_Error().required(),

      data: Joi.array()
        .items(ServiceabilityModel.EntityRegionView_Items())
        .required(),

      success: Joi.boolean().required(),

      page: ServiceabilityModel.EntityRegionView_page().required(),
    });
  }

  static ListViewSummary() {
    return Joi.object({
      total_pincodes_served: Joi.number().required(),

      total_zones: Joi.number().required(),

      total_active_zones: Joi.number().required(),
    });
  }

  static ZoneDataItem() {
    return Joi.object({
      current: Joi.number().required(),

      item_total: Joi.number().required(),

      size: Joi.number().required(),

      has_next: Joi.boolean().required(),

      type: Joi.string().allow("").required(),
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
      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      stores_count: Joi.number().required(),

      product: ServiceabilityModel.ListViewProduct().required(),

      zone_id: Joi.string().allow("").required(),

      pincodes_count: Joi.number().required(),

      channels: ServiceabilityModel.ListViewChannels().required(),
    });
  }

  static ListViewResponse() {
    return Joi.object({
      summary: Joi.array()
        .items(ServiceabilityModel.ListViewSummary())
        .required(),

      page: Joi.array().items(ServiceabilityModel.ZoneDataItem()).required(),

      items: Joi.array().items(ServiceabilityModel.ListViewItems()).required(),
    });
  }

  static CompanyStoreView_PageItems() {
    return Joi.object({
      current: Joi.number().required(),

      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      size: Joi.number().required(),

      has_next: Joi.boolean().required(),
    });
  }

  static CompanyStoreView_Response() {
    return Joi.object({
      page: Joi.array()
        .items(ServiceabilityModel.CompanyStoreView_PageItems())
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
      identifier: Joi.string().allow("").required(),

      data: ServiceabilityModel.UpdateZoneData().required(),
    });
  }

  static ZoneSuccessResponse() {
    return Joi.object({
      status_code: Joi.number().required(),

      success: Joi.boolean().required(),
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
      identifier: Joi.string().allow("").required(),

      data: ServiceabilityModel.CreateZoneData().required(),
    });
  }

  static ZoneResponse() {
    return Joi.object({
      status_code: Joi.number().required(),

      zone_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
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
      zones: Joi.array().items(Joi.string().allow("")).required(),

      serviceability_type: Joi.string().allow("").required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      current: Joi.number(),

      type: Joi.string().allow(""),

      item_total: Joi.number(),

      size: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static OpeningClosing() {
    return Joi.object({
      minute: Joi.number(),

      hour: Joi.number(),
    });
  }

  static TimmingResponse() {
    return Joi.object({
      opening: ServiceabilityModel.OpeningClosing(),

      open: Joi.boolean(),

      weekday: Joi.string().allow(""),

      closing: ServiceabilityModel.OpeningClosing(),
    });
  }

  static ModifiedByResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Dp() {
    return Joi.object({
      internal_account_id: Joi.string().allow(""),

      operations: Joi.array().items(Joi.string().allow("")),

      assign_dp_from_sb: Joi.boolean(),

      lm_priority: Joi.number(),

      fm_priority: Joi.number(),

      area_code: Joi.number().allow(null),

      external_account_id: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      rvp_priority: Joi.number(),

      transport_mode: Joi.string().allow(""),
    });
  }

  static LogisticsResponse() {
    return Joi.object({
      override: Joi.boolean(),

      dp: ServiceabilityModel.Dp(),
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
      mobile_no: ServiceabilityModel.MobileNo(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static DocumentsResponse() {
    return Joi.object({
      value: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      verified: Joi.boolean(),
    });
  }

  static IntegrationTypeResponse() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
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

  static AddressResponse() {
    return Joi.object({
      latitude: Joi.number(),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),
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
      e_invoice: ServiceabilityModel.EinvoiceResponse(),

      e_waybill: ServiceabilityModel.EwayBillResponse(),
    });
  }

  static CreatedByResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigResponse() {
    return Joi.object({
      on_same_store: Joi.boolean(),
    });
  }

  static ItemResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      _cls: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      timing: Joi.array().items(ServiceabilityModel.TimmingResponse()),

      verified_by: ServiceabilityModel.ModifiedByResponse(),

      logistics: ServiceabilityModel.LogisticsResponse(),

      stage: Joi.string().allow(""),

      code: Joi.string().allow(""),

      manager: ServiceabilityModel.ManagerResponse(),

      documents: Joi.array().items(ServiceabilityModel.DocumentsResponse()),

      integration_type: ServiceabilityModel.IntegrationTypeResponse(),

      contact_numbers: Joi.array().items(
        ServiceabilityModel.ContactNumberResponse()
      ),

      warnings: ServiceabilityModel.WarningsResponse(),

      store_type: Joi.string().allow(""),

      address: ServiceabilityModel.AddressResponse(),

      company_id: Joi.number(),

      verified_on: Joi.string().allow(""),

      gst_credentials: ServiceabilityModel.GstCredentialsResponse(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      sub_type: Joi.string().allow(""),

      company: Joi.number(),

      created_by: ServiceabilityModel.CreatedByResponse(),

      uid: Joi.number(),

      modified_by: ServiceabilityModel.ModifiedByResponse(),

      product_return_config: ServiceabilityModel.ProductReturnConfigResponse(),
    });
  }

  static GetStoresViewResponse() {
    return Joi.object({
      page: ServiceabilityModel.PageResponse().required(),

      items: Joi.array().items(ServiceabilityModel.ItemResponse()),
    });
  }
}
module.exports = ServiceabilityModel;
