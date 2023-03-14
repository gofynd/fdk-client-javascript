const Joi = require("joi");

class ServiceabilityModel {
  static ApplicationServiceabilityConfig() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),
    });
  }

  static ServiceabilityErrorResponse() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static ApplicationServiceabilityResponse() {
    return Joi.object({
      channel_type: Joi.string().allow("").required(),

      channel_id: Joi.string().allow("").required(),

      serviceability_type: Joi.string().allow("").required(),
    });
  }

  static ApplicationServiceabilityConfigResponse() {
    return Joi.object({
      error: ServiceabilityModel.ServiceabilityErrorResponse(),

      success: Joi.boolean().required(),

      data: ServiceabilityModel.ApplicationServiceabilityResponse(),
    });
  }

  static EntityRegionViewRequest() {
    return Joi.object({
      sub_type: Joi.array().items(Joi.string().allow("")).required(),

      parent_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static EntityRegionViewPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      size: Joi.number().required(),

      current: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),
    });
  }

  static EntityRegionViewError() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static EntityRegionViewItems() {
    return Joi.object({
      uid: Joi.string().allow("").required(),

      sub_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static EntityRegionViewResponse() {
    return Joi.object({
      page: ServiceabilityModel.EntityRegionViewPage().required(),

      error: ServiceabilityModel.EntityRegionViewError().required(),

      success: Joi.boolean().required(),

      data: Joi.array()
        .items(ServiceabilityModel.EntityRegionViewItems())
        .required(),
    });
  }

  static ZoneDataItem() {
    return Joi.object({
      size: Joi.number().required(),

      current: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),

      type: Joi.string().allow("").required(),
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
      slug: Joi.string().allow("").required(),

      channels: ServiceabilityModel.ListViewChannels().required(),

      pincodes_count: Joi.number().required(),

      product: ServiceabilityModel.ListViewProduct().required(),

      name: Joi.string().allow("").required(),

      stores_count: Joi.number().required(),

      is_active: Joi.boolean().required(),

      zone_id: Joi.string().allow("").required(),

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
      type: Joi.string().allow("").required(),

      size: Joi.number().required(),

      current: Joi.number().required(),

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

      success: Joi.boolean().required(),

      zone_id: Joi.string().allow("").required(),
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

  static GetZoneFromApplicationIdViewResponse() {
    return Joi.object({
      page: Joi.array().items(ServiceabilityModel.ZoneDataItem()).required(),

      items: Joi.array().items(ServiceabilityModel.ListViewItems()).required(),
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
