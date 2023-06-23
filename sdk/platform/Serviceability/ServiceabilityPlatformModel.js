const Joi = require("joi");

class ServiceabilityModel {
  static AddressResponse() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }
  static ApplicationServiceabilityConfig() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      channel_type: Joi.string().allow("").required(),
      serviceability_type: Joi.string().allow("").required(),
    });
  }
  static ApplicationServiceabilityConfigResponse() {
    return Joi.object({
      data: ServiceabilityModel.ApplicationServiceabilityConfig(),
      error: ServiceabilityModel.ServiceabilityErrorResponse(),
      success: Joi.boolean().required(),
    });
  }
  static CommonError() {
    return Joi.object({
      error: Joi.any(),
      status_code: Joi.string().allow(""),
      success: Joi.string().allow(""),
    });
  }
  static CompanyStoreView_PageItems() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      type: Joi.string().allow("").required(),
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
  static ContactNumberResponse() {
    return Joi.object({
      country_code: Joi.number(),
      number: Joi.string().allow(""),
    });
  }
  static CreatedByResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }
  static CreateZoneData() {
    return Joi.object({
      assignment_preference: Joi.string().allow(""),
      channels: Joi.array()
        .items(ServiceabilityModel.GetZoneDataViewChannels())
        .required(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      mapping: Joi.array()
        .items(ServiceabilityModel.ZoneMappingType())
        .required(),
      name: Joi.string().allow("").required(),
      product: ServiceabilityModel.ZoneProductTypes().required(),
      region_type: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
    });
  }
  static DocumentsResponse() {
    return Joi.object({
      legal_name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
      verified: Joi.boolean(),
    });
  }
  static Dp() {
    return Joi.object({
      area_code: Joi.number().allow(null),
      assign_dp_from_sb: Joi.boolean(),
      external_account_id: Joi.string().allow("").allow(null),
      fm_priority: Joi.number(),
      internal_account_id: Joi.string().allow(""),
      lm_priority: Joi.number(),
      operations: Joi.array().items(Joi.string().allow("")),
      payment_mode: Joi.string().allow(""),
      rvp_priority: Joi.number(),
      transport_mode: Joi.string().allow(""),
    });
  }
  static EinvoiceResponse() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }
  static EntityRegionView_Error() {
    return Joi.object({
      message: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
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
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }
  static EntityRegionView_Request() {
    return Joi.object({
      parent_id: Joi.array().items(Joi.string().allow("")),
      sub_type: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
  static EntityRegionView_Response() {
    return Joi.object({
      data: Joi.array()
        .items(ServiceabilityModel.EntityRegionView_Items())
        .required(),
      error: ServiceabilityModel.EntityRegionView_Error().required(),
      page: ServiceabilityModel.EntityRegionView_page().required(),
      success: Joi.boolean().required(),
    });
  }
  static Error() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
    });
  }
  static EwayBillResponse() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }
  static GetSingleZoneDataViewResponse() {
    return Joi.object({
      data: ServiceabilityModel.GetZoneDataViewItems().required(),
    });
  }
  static GetStoresViewResponse() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityModel.ItemResponse()),
      page: ServiceabilityModel.PageResponse().required(),
    });
  }
  static GetZoneDataViewChannels() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      channel_type: Joi.string().allow("").required(),
    });
  }
  static GetZoneDataViewItems() {
    return Joi.object({
      assignment_preference: Joi.string().allow(""),
      channels: Joi.array()
        .items(ServiceabilityModel.GetZoneDataViewChannels())
        .required(),
      company_id: Joi.number(),
      is_active: Joi.boolean().required(),
      mapping: Joi.array()
        .items(ServiceabilityModel.ZoneMappingType())
        .required(),
      name: Joi.string().allow("").required(),
      pincodes_count: Joi.number().required(),
      product: ServiceabilityModel.ZoneProductTypes().required(),
      region_type: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      stores_count: Joi.number().required(),
      zone_id: Joi.string().allow("").required(),
    });
  }
  static GetZoneFromApplicationIdViewResponse() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityModel.ListViewItems()).required(),
      page: Joi.array().items(ServiceabilityModel.ZoneDataItem()).required(),
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
  static GstCredentialsResponse() {
    return Joi.object({
      e_invoice: ServiceabilityModel.EinvoiceResponse(),
      e_waybill: ServiceabilityModel.EwayBillResponse(),
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
      _cls: Joi.string().allow(""),
      _custom_json: Joi.any(),
      address: ServiceabilityModel.AddressResponse(),
      code: Joi.string().allow(""),
      company: Joi.number(),
      company_id: Joi.number(),
      contact_numbers: Joi.array().items(
        ServiceabilityModel.ContactNumberResponse()
      ),
      created_by: ServiceabilityModel.CreatedByResponse(),
      created_on: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      documents: Joi.array().items(ServiceabilityModel.DocumentsResponse()),
      gst_credentials: ServiceabilityModel.GstCredentialsResponse(),
      integration_type: ServiceabilityModel.IntegrationTypeResponse(),
      logistics: ServiceabilityModel.LogisticsResponse(),
      manager: ServiceabilityModel.ManagerResponse(),
      modified_by: ServiceabilityModel.ModifiedByResponse(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      product_return_config: ServiceabilityModel.ProductReturnConfigResponse(),
      stage: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      timing: Joi.array().items(ServiceabilityModel.TimmingResponse()),
      uid: Joi.number(),
      verified_by: ServiceabilityModel.ModifiedByResponse(),
      verified_on: Joi.string().allow(""),
      warnings: ServiceabilityModel.WarningsResponse(),
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
      channels: ServiceabilityModel.ListViewChannels().required(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
      pincodes_count: Joi.number().required(),
      product: ServiceabilityModel.ListViewProduct().required(),
      slug: Joi.string().allow("").required(),
      stores_count: Joi.number().required(),
      zone_id: Joi.string().allow("").required(),
    });
  }
  static ListViewProduct() {
    return Joi.object({
      count: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }
  static ListViewResponse() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityModel.ListViewItems()).required(),
      page: Joi.array().items(ServiceabilityModel.ZoneDataItem()).required(),
      summary: Joi.array()
        .items(ServiceabilityModel.ListViewSummary())
        .required(),
    });
  }
  static ListViewSummary() {
    return Joi.object({
      total_active_zones: Joi.number().required(),
      total_pincodes_served: Joi.number().required(),
      total_zones: Joi.number().required(),
    });
  }
  static LogisticsResponse() {
    return Joi.object({
      dp: ServiceabilityModel.Dp(),
      override: Joi.boolean(),
    });
  }
  static ManagerResponse() {
    return Joi.object({
      email: Joi.string().allow(""),
      mobile_no: ServiceabilityModel.MobileNo(),
      name: Joi.string().allow(""),
    });
  }
  static MobileNo() {
    return Joi.object({
      country_code: Joi.number(),
      number: Joi.string().allow(""),
    });
  }
  static ModifiedByResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }
  static OpeningClosing() {
    return Joi.object({
      hour: Joi.number(),
      minute: Joi.number(),
    });
  }
  static PageResponse() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static PincodeBulkViewResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      s3_url: Joi.string().allow("").required(),
    });
  }
  static PincodeCodStatusListingPage() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }
  static PincodeCodStatusListingRequest() {
    return Joi.object({
      country: Joi.string().allow(""),
      current: Joi.number(),
      is_active: Joi.boolean(),
      page_size: Joi.number(),
      pincode: Joi.number().allow(null),
    });
  }
  static PincodeCodStatusListingResponse() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      data: Joi.array()
        .items(Joi.link("#PincodeCodStatusListingResponse"))
        .required(),
      errors: Joi.array().items(ServiceabilityModel.Error()),
      page: ServiceabilityModel.PincodeCodStatusListingPage().required(),
      success: Joi.boolean().required(),
      summary: ServiceabilityModel.PincodeCodStatusListingSummary().required(),
    });
  }
  static PincodeCodStatusListingSummary() {
    return Joi.object({
      total_active_pincodes: Joi.number().required(),
      total_inactive_pincodes: Joi.number().required(),
    });
  }
  static PincodeMopBulkData() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      s3_url: Joi.string().allow("").required(),
    });
  }
  static PincodeMopData() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      pincodes: Joi.array().items(Joi.number()).required(),
    });
  }
  static PincodeMOPresponse() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      batch_id: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      pincodes: Joi.array().items(Joi.number()),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
      updated_pincodes: Joi.array().items(
        ServiceabilityModel.PincodeMopUpdateResponse()
      ),
    });
  }
  static PincodeMopUpdateAuditHistoryPaging() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static PincodeMopUpdateAuditHistoryRequest() {
    return Joi.object({
      entity_type: Joi.string().allow("").required(),
      file_name: Joi.string().allow(""),
    });
  }
  static PincodeMopUpdateAuditHistoryResponse() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      error_file_s3_url: Joi.string().allow(""),
      file_name: Joi.string().allow(""),
      s3_url: Joi.string().allow(""),
      success: Joi.boolean(),
      updated_at: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
    });
  }
  static PincodeMopUpdateAuditHistoryResponseData() {
    return Joi.object({
      data: Joi.array()
        .items(ServiceabilityModel.PincodeMopUpdateAuditHistoryResponse())
        .required(),
      entity_type: Joi.string().allow(""),
      page: ServiceabilityModel.PincodeMopUpdateAuditHistoryPaging().required(),
    });
  }
  static PincodeMopUpdateResponse() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      pincode: Joi.number().required(),
    });
  }
  static ProductReturnConfigResponse() {
    return Joi.object({
      on_same_store: Joi.boolean(),
    });
  }
  static ServiceabilityErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }
  static TimmingResponse() {
    return Joi.object({
      closing: ServiceabilityModel.OpeningClosing(),
      open: Joi.boolean(),
      opening: ServiceabilityModel.OpeningClosing(),
      weekday: Joi.string().allow(""),
    });
  }
  static UpdateZoneData() {
    return Joi.object({
      assignment_preference: Joi.string().allow(""),
      channels: Joi.array()
        .items(ServiceabilityModel.GetZoneDataViewChannels())
        .required(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      mapping: Joi.array()
        .items(ServiceabilityModel.ZoneMappingType())
        .required(),
      name: Joi.string().allow("").required(),
      product: ServiceabilityModel.ZoneProductTypes().required(),
      region_type: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      zone_id: Joi.string().allow("").required(),
    });
  }
  static WarningsResponse() {
    return Joi.object({
      store_address: Joi.string().allow(""),
    });
  }
  static ZoneDataItem() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }
  static ZoneMappingType() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      pincode: Joi.array().items(Joi.string().allow("")),
      state: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ZoneProductTypes() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")).required(),
      type: Joi.string().allow("").required(),
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
      success: Joi.boolean().required(),
      zone_id: Joi.string().allow("").required(),
    });
  }
  static ZoneSuccessResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }
  static ZoneUpdateRequest() {
    return Joi.object({
      data: ServiceabilityModel.UpdateZoneData().required(),
      identifier: Joi.string().allow("").required(),
    });
  }
}
module.exports = ServiceabilityModel;
