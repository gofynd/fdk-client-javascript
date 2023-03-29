const Joi = require("joi");

class ServiceabilityModel {
  static ServiceabilityrErrorResponse() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ApplicationServiceabilityConfig() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),

      channel_id: Joi.string().allow("").required(),

      channel_type: Joi.string().allow("").required(),
    });
  }

  static ApplicationServiceabilityConfigResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      error: ServiceabilityModel.ServiceabilityrErrorResponse(),

      data: ServiceabilityModel.ApplicationServiceabilityConfig(),
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

  static EntityRegionView_Error() {
    return Joi.object({
      type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static EntityRegionView_Items() {
    return Joi.object({
      uid: Joi.string().allow("").required(),

      sub_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static EntityRegionView_Response() {
    return Joi.object({
      page: ServiceabilityModel.EntityRegionView_page().required(),

      success: Joi.boolean().required(),

      error: ServiceabilityModel.EntityRegionView_Error().required(),

      data: Joi.array()
        .items(ServiceabilityModel.EntityRegionView_Items())
        .required(),
    });
  }

  static ZoneDataItem() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      current: Joi.number().required(),

      size: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),
    });
  }

  static ListViewChannels() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),

      channel_type: Joi.string().allow("").required(),
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
      name: Joi.string().allow("").required(),

      channels: ServiceabilityModel.ListViewChannels().required(),

      pincodes_count: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      zone_id: Joi.string().allow("").required(),

      stores_count: Joi.number().required(),

      product: ServiceabilityModel.ListViewProduct().required(),

      company_id: Joi.number().required(),

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
      success: Joi.boolean().required(),

      status_code: Joi.number().required(),

      zone_id: Joi.string().allow("").required(),
    });
  }

  static GetZoneFromApplicationIdViewResponse() {
    return Joi.object({
      page: Joi.array().items(ServiceabilityModel.ZoneDataItem()).required(),

      items: Joi.array().items(ServiceabilityModel.ListViewItems()).required(),
    });
  }

  static ServiceabilityErrorResponse() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
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
      type: Joi.string().allow(""),

      current: Joi.number(),

      size: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static ContactNumberResponse() {
    return Joi.object({
      country_code: Joi.number(),

      number: Joi.string().allow(""),
    });
  }

  static Dp() {
    return Joi.object({
      transport_mode: Joi.string().allow(""),

      lm_priority: Joi.number(),

      internal_account_id: Joi.string().allow(""),

      rvp_priority: Joi.number(),

      operations: Joi.array().items(Joi.string().allow("")),

      fm_priority: Joi.number(),

      area_code: Joi.number().allow(null),

      external_account_id: Joi.string().allow("").allow(null),

      assign_dp_from_sb: Joi.boolean(),

      payment_mode: Joi.string().allow(""),
    });
  }

  static LogisticsResponse() {
    return Joi.object({
      dp: ServiceabilityModel.Dp(),

      override: Joi.boolean(),
    });
  }

  static ModifiedByResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static AddressResponse() {
    return Joi.object({
      longitude: Joi.number(),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static CreatedByResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static DocumentsResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      value: Joi.string().allow(""),
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

  static WarningsResponse() {
    return Joi.object({
      store_address: Joi.string().allow(""),
    });
  }

  static IntegrationTypeResponse() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
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

      closing: ServiceabilityModel.OpeningClosing(),

      weekday: Joi.string().allow(""),

      opening: ServiceabilityModel.OpeningClosing(),
    });
  }

  static ItemResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(
        ServiceabilityModel.ContactNumberResponse()
      ),

      logistics: ServiceabilityModel.LogisticsResponse(),

      _cls: Joi.string().allow(""),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      company: Joi.number(),

      modified_by: ServiceabilityModel.ModifiedByResponse(),

      display_name: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      address: ServiceabilityModel.AddressResponse(),

      created_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      created_by: ServiceabilityModel.CreatedByResponse(),

      company_id: Joi.number(),

      documents: Joi.array().items(ServiceabilityModel.DocumentsResponse()),

      manager: ServiceabilityModel.ManagerResponse(),

      product_return_config: ServiceabilityModel.ProductReturnConfigResponse(),

      _custom_json: Joi.any(),

      verified_by: ServiceabilityModel.ModifiedByResponse(),

      gst_credentials: ServiceabilityModel.GstCredentialsResponse(),

      sub_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      warnings: ServiceabilityModel.WarningsResponse(),

      integration_type: ServiceabilityModel.IntegrationTypeResponse(),

      modified_on: Joi.string().allow(""),

      timing: Joi.array().items(ServiceabilityModel.TimmingResponse()),

      code: Joi.string().allow(""),
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
      type: Joi.string().allow("").required(),

      size: Joi.number().required(),

      current_page_number: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),
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
