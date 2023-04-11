const Joi = require("joi");

class ServiceabilityModel {
  static ApplicationServiceabilityConfig() {
    return Joi.object({
      channel_type: Joi.string().allow("").required(),

      channel_id: Joi.string().allow("").required(),

      serviceability_type: Joi.string().allow("").required(),
    });
  }

  static ServiceabilityrErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ApplicationServiceabilityConfigResponse() {
    return Joi.object({
      data: ServiceabilityModel.ApplicationServiceabilityConfig(),

      success: Joi.boolean().required(),

      error: ServiceabilityModel.ServiceabilityrErrorResponse(),
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

      sub_type: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),
    });
  }

  static EntityRegionView_page() {
    return Joi.object({
      size: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),

      type: Joi.string().allow("").required(),

      current: Joi.number().required(),
    });
  }

  static EntityRegionView_Error() {
    return Joi.object({
      message: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static EntityRegionView_Response() {
    return Joi.object({
      data: Joi.array()
        .items(ServiceabilityModel.EntityRegionView_Items())
        .required(),

      success: Joi.boolean().required(),

      page: ServiceabilityModel.EntityRegionView_page().required(),

      error: ServiceabilityModel.EntityRegionView_Error().required(),
    });
  }

  static ListViewSummary() {
    return Joi.object({
      total_active_zones: Joi.number().required(),

      total_pincodes_served: Joi.number().required(),

      total_zones: Joi.number().required(),
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
      channel_type: Joi.string().allow("").required(),

      channel_id: Joi.string().allow("").required(),
    });
  }

  static ListViewItems() {
    return Joi.object({
      product: ServiceabilityModel.ListViewProduct().required(),

      pincodes_count: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      channels: ServiceabilityModel.ListViewChannels().required(),

      is_active: Joi.boolean().required(),

      company_id: Joi.number().required(),

      stores_count: Joi.number().required(),

      zone_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ZoneDataItem() {
    return Joi.object({
      size: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),

      type: Joi.string().allow("").required(),

      current: Joi.number().required(),
    });
  }

  static ListViewResponse() {
    return Joi.object({
      summary: Joi.array()
        .items(ServiceabilityModel.ListViewSummary())
        .required(),

      items: Joi.array().items(ServiceabilityModel.ListViewItems()).required(),

      page: Joi.array().items(ServiceabilityModel.ZoneDataItem()).required(),
    });
  }

  static CompanyStoreView_PageItems() {
    return Joi.object({
      size: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),

      type: Joi.string().allow("").required(),

      current: Joi.number().required(),
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
      channel_type: Joi.string().allow("").required(),

      channel_id: Joi.string().allow("").required(),
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
      pincode: Joi.array().items(Joi.string().allow("")),

      state: Joi.array().items(Joi.string().allow("")),

      country: Joi.string().allow("").required(),
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
      status_code: Joi.number().required(),

      success: Joi.boolean().required(),
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
      status_code: Joi.number().required(),

      zone_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static GetZoneFromApplicationIdViewResponse() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityModel.ListViewItems()).required(),

      page: Joi.array().items(ServiceabilityModel.ZoneDataItem()).required(),
    });
  }

  static ServiceabilityErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static GetZoneFromPincodeViewRequest() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static GetZoneFromPincodeViewResponse() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),

      zones: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ContactNumberResponse() {
    return Joi.object({
      country_code: Joi.number(),

      number: Joi.string().allow(""),
    });
  }

  static AddressResponse() {
    return Joi.object({
      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      longitude: Joi.number(),
    });
  }

  static DocumentsResponse() {
    return Joi.object({
      verified: Joi.boolean(),

      value: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      type: Joi.string().allow(""),
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

  static Dp() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      lm_priority: Joi.number(),

      internal_account_id: Joi.string().allow(""),

      rvp_priority: Joi.number(),

      assign_dp_from_sb: Joi.boolean(),

      fm_priority: Joi.number(),

      operations: Joi.array().items(Joi.string().allow("")),

      transport_mode: Joi.string().allow(""),

      area_code: Joi.number().allow(null),

      external_account_id: Joi.string().allow("").allow(null),
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
      minute: Joi.number(),

      hour: Joi.number(),
    });
  }

  static TimmingResponse() {
    return Joi.object({
      opening: ServiceabilityModel.OpeningClosing(),

      open: Joi.boolean(),

      closing: ServiceabilityModel.OpeningClosing(),

      weekday: Joi.string().allow(""),
    });
  }

  static ModifiedByResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static IntegrationTypeResponse() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
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
      mobile_no: ServiceabilityModel.MobileNo(),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static ItemResponse() {
    return Joi.object({
      contact_numbers: Joi.array().items(
        ServiceabilityModel.ContactNumberResponse()
      ),

      uid: Joi.number(),

      company: Joi.number(),

      address: ServiceabilityModel.AddressResponse(),

      company_id: Joi.number(),

      documents: Joi.array().items(ServiceabilityModel.DocumentsResponse()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      gst_credentials: ServiceabilityModel.GstCredentialsResponse(),

      created_by: ServiceabilityModel.CreatedByResponse(),

      product_return_config: ServiceabilityModel.ProductReturnConfigResponse(),

      display_name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      logistics: ServiceabilityModel.LogisticsResponse(),

      sub_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      timing: Joi.array().items(ServiceabilityModel.TimmingResponse()),

      verified_by: ServiceabilityModel.ModifiedByResponse(),

      _cls: Joi.string().allow(""),

      integration_type: ServiceabilityModel.IntegrationTypeResponse(),

      store_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      warnings: ServiceabilityModel.WarningsResponse(),

      manager: ServiceabilityModel.ManagerResponse(),

      modified_by: ServiceabilityModel.ModifiedByResponse(),
    });
  }

  static PageResponse() {
    return Joi.object({
      size: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      current: Joi.number(),
    });
  }

  static GetStoresViewResponse() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityModel.ItemResponse()),

      page: ServiceabilityModel.PageResponse().required(),
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

      current_page_number: Joi.number(),

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
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static PincodeCodStatusListingPage() {
    return Joi.object({
      size: Joi.number().required(),

      current_page_number: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),

      type: Joi.string().allow("").required(),
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
