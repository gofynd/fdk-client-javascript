const Joi = require("joi");

class ServiceabilityModel {
  static ServiceabilityErrorResponse() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ApplicationServiceabilityConfig() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),

      channel_type: Joi.string().allow("").required(),

      channel_id: Joi.string().allow("").required(),
    });
  }

  static ApplicationServiceabilityConfigResponse() {
    return Joi.object({
      error: ServiceabilityModel.ServiceabilityErrorResponse(),

      success: Joi.boolean().required(),

      data: ServiceabilityModel.ApplicationServiceabilityConfig(),
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
      type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static EntityRegionView_page() {
    return Joi.object({
      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),

      size: Joi.number().required(),

      current: Joi.number().required(),
    });
  }

  static EntityRegionView_Items() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      sub_type: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),
    });
  }

  static EntityRegionView_Response() {
    return Joi.object({
      success: Joi.boolean().required(),

      error: ServiceabilityModel.EntityRegionView_Error().required(),

      page: ServiceabilityModel.EntityRegionView_page().required(),

      data: Joi.array()
        .items(ServiceabilityModel.EntityRegionView_Items())
        .required(),
    });
  }

  static ZoneDataItem() {
    return Joi.object({
      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),

      size: Joi.number().required(),

      current: Joi.number().required(),
    });
  }

  static ListViewSummary() {
    return Joi.object({
      total_active_zones: Joi.number().required(),

      total_zones: Joi.number().required(),

      total_pincodes_served: Joi.number().required(),
    });
  }

  static ListViewChannels() {
    return Joi.object({
      channel_type: Joi.string().allow("").required(),

      channel_id: Joi.string().allow("").required(),
    });
  }

  static ListViewProduct() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      count: Joi.number().required(),
    });
  }

  static ListViewItems() {
    return Joi.object({
      pincodes_count: Joi.number().required(),

      zone_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      stores_count: Joi.number().required(),

      is_active: Joi.boolean().required(),

      channels: ServiceabilityModel.ListViewChannels().required(),

      slug: Joi.string().allow("").required(),

      product: ServiceabilityModel.ListViewProduct().required(),

      company_id: Joi.number().required(),
    });
  }

  static ListViewResponse() {
    return Joi.object({
      page: Joi.array().items(ServiceabilityModel.ZoneDataItem()).required(),

      summary: Joi.array()
        .items(ServiceabilityModel.ListViewSummary())
        .required(),

      items: Joi.array().items(ServiceabilityModel.ListViewItems()).required(),
    });
  }

  static CompanyStoreView_PageItems() {
    return Joi.object({
      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),

      size: Joi.number().required(),

      current: Joi.number().required(),
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
      channel_type: Joi.string().allow("").required(),

      channel_id: Joi.string().allow("").required(),
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

      pincode: Joi.array().items(Joi.string().allow("")),

      country: Joi.string().allow("").required(),
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
      success: Joi.boolean().required(),

      status_code: Joi.number().required(),
    });
  }

  static GetZoneDataViewItems() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),

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
      success: Joi.boolean().required(),

      status_code: Joi.number().required(),

      zone_id: Joi.string().allow("").required(),
    });
  }

  static GetZoneFromPincodeViewRequest() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static Zone() {
    return Joi.object({
      assignment_preference: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      zone_id: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static GetZoneFromPincodeViewResponse() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),

      zones: Joi.array().items(ServiceabilityModel.Zone()).required(),
    });
  }

  static GetZoneFromApplicationIdViewResponse() {
    return Joi.object({
      page: Joi.array().items(ServiceabilityModel.ZoneDataItem()).required(),

      items: Joi.array().items(ServiceabilityModel.ListViewItems()).required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      item_total: Joi.number(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.number(),

      current: Joi.number(),
    });
  }

  static AddressResponse() {
    return Joi.object({
      city: Joi.string().allow(""),

      longitude: Joi.number(),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static WarningsResponse() {
    return Joi.object({
      store_address: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: ServiceabilityModel.MobileNo(),
    });
  }

  static ModifiedByResponse() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigResponse() {
    return Joi.object({
      on_same_store: Joi.boolean(),
    });
  }

  static ContactNumberResponse() {
    return Joi.object({
      country_code: Joi.number(),

      number: Joi.string().allow(""),
    });
  }

  static DocumentsResponse() {
    return Joi.object({
      verified: Joi.boolean(),

      type: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
      open: Joi.boolean(),

      closing: ServiceabilityModel.OpeningClosing(),

      opening: ServiceabilityModel.OpeningClosing(),

      weekday: Joi.string().allow(""),
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

  static Dp() {
    return Joi.object({
      transport_mode: Joi.string().allow(""),

      internal_account_id: Joi.string().allow(""),

      rvp_priority: Joi.number(),

      external_account_id: Joi.string().allow("").allow(null),

      area_code: Joi.number().allow(null),

      operations: Joi.array().items(Joi.string().allow("")),

      fm_priority: Joi.number(),

      payment_mode: Joi.string().allow(""),

      lm_priority: Joi.number(),

      assign_dp_from_sb: Joi.boolean(),
    });
  }

  static LogisticsResponse() {
    return Joi.object({
      dp: ServiceabilityModel.Dp(),

      override: Joi.boolean(),
    });
  }

  static CreatedByResponse() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static IntegrationTypeResponse() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
    });
  }

  static ItemResponse() {
    return Joi.object({
      address: ServiceabilityModel.AddressResponse(),

      created_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      sub_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      company_id: Joi.number(),

      display_name: Joi.string().allow(""),

      warnings: ServiceabilityModel.WarningsResponse(),

      manager: ServiceabilityModel.ManagerResponse(),

      verified_by: ServiceabilityModel.ModifiedByResponse(),

      product_return_config: ServiceabilityModel.ProductReturnConfigResponse(),

      verified_on: Joi.string().allow(""),

      company: Joi.number(),

      contact_numbers: Joi.array().items(
        ServiceabilityModel.ContactNumberResponse()
      ),

      documents: Joi.array().items(ServiceabilityModel.DocumentsResponse()),

      timing: Joi.array().items(ServiceabilityModel.TimmingResponse()),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      gst_credentials: ServiceabilityModel.GstCredentialsResponse(),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      logistics: ServiceabilityModel.LogisticsResponse(),

      modified_by: ServiceabilityModel.ModifiedByResponse(),

      created_by: ServiceabilityModel.CreatedByResponse(),

      integration_type: ServiceabilityModel.IntegrationTypeResponse(),

      _cls: Joi.string().allow(""),
    });
  }

  static GetStoresViewResponse() {
    return Joi.object({
      page: ServiceabilityModel.PageResponse().required(),

      items: Joi.array().items(ServiceabilityModel.ItemResponse()),
    });
  }

  static PincodeMopData() {
    return Joi.object({
      pincodes: Joi.array().items(Joi.number()).required(),

      country: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),
    });
  }

  static PincodeMopUpdateResponse() {
    return Joi.object({
      pincode: Joi.number().required(),

      channel_id: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PincodeMOPresponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      status_code: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      pincodes: Joi.array().items(Joi.number()),

      updated_pincodes: Joi.array().items(
        ServiceabilityModel.PincodeMopUpdateResponse()
      ),
    });
  }

  static CommonError() {
    return Joi.object({
      success: Joi.string().allow(""),

      status_code: Joi.string().allow(""),

      error: Joi.any(),
    });
  }

  static PincodeMopBulkData() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      s3_url: Joi.string().allow("").required(),
    });
  }

  static PincodeBulkViewResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      s3_url: Joi.string().allow("").required(),
    });
  }

  static PincodeCodStatusListingRequest() {
    return Joi.object({
      country: Joi.string().allow(""),

      is_active: Joi.boolean(),

      pincode: Joi.number().allow(null),

      current: Joi.number(),

      page_size: Joi.number(),
    });
  }

  static PincodeCodStatusListingResponse() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      data: Joi.array()
        .items(ServiceabilityModel.PincodeCodStatusListingResponse())
        .required(),

      success: Joi.boolean().required(),

      errors: Joi.array().items(ServiceabilityModel.Error()),

      page: ServiceabilityModel.PincodeCodStatusListingPage().required(),

      summary: ServiceabilityModel.PincodeCodStatusListingSummary().required(),
    });
  }

  static Error() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }

  static PincodeCodStatusListingPage() {
    return Joi.object({
      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),

      size: Joi.number().required(),

      current: Joi.number().required(),
    });
  }

  static PincodeCodStatusListingSummary() {
    return Joi.object({
      total_active_pincodes: Joi.number().required(),

      total_inactive_pincodes: Joi.number().required(),
    });
  }

  static PincodeMopUpdateAuditHistoryRequest() {
    return Joi.object({
      entity_type: Joi.string().allow("").required(),

      file_name: Joi.string().allow(""),
    });
  }

  static PincodeMopUpdateAuditHistoryPaging() {
    return Joi.object({
      type: Joi.string().allow(""),

      size: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),
    });
  }

  static PincodeMopUpdateAuditHistoryResponse() {
    return Joi.object({
      batch_id: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      error_file_s3_url: Joi.string().allow(""),

      s3_url: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      updated_by: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static PincodeMopUpdateAuditHistoryResponseData() {
    return Joi.object({
      entity_type: Joi.string().allow(""),

      page: ServiceabilityModel.PincodeMopUpdateAuditHistoryPaging().required(),

      data: Joi.array()
        .items(ServiceabilityModel.PincodeMopUpdateAuditHistoryResponse())
        .required(),
    });
  }
}
module.exports = ServiceabilityModel;
