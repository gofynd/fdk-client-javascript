const Joi = require("joi");

/**
 * @typedef ServiceabilityPayloadSchema
 * @property {string} serviceability_type
 */

/**
 * @typedef ServiceabilityErrorResponse
 * @property {string} message
 * @property {string} value
 * @property {string} type
 */

/**
 * @typedef ApplicationServiceabilityConfig
 * @property {string} channel_id
 * @property {string} serviceability_type
 * @property {string} channel_type
 */

/**
 * @typedef ApplicationServiceabilityConfigResponse
 * @property {ServiceabilityErrorResponse} [error]
 * @property {ApplicationServiceabilityConfig} [data]
 * @property {boolean} success
 */

/**
 * @typedef EntityRegionView_Request
 * @property {string[]} sub_type
 * @property {string[]} [parent_id]
 */

/**
 * @typedef EntityRegionView_Error
 * @property {string} [message]
 * @property {string} [value]
 * @property {string} [type]
 */

/**
 * @typedef EntityRegionView_page
 * @property {string} type
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {number} current
 */

/**
 * @typedef EntityRegionView_Items
 * @property {string} sub_type
 * @property {string} uid
 * @property {string} name
 * @property {string} [display_name]
 */

/**
 * @typedef EntityRegionView_Response
 * @property {EntityRegionView_Error} error
 * @property {EntityRegionView_page} page
 * @property {EntityRegionView_Items[]} [items]
 * @property {boolean} success
 */

/**
 * @typedef ListViewSummary
 * @property {number} total_zones
 * @property {number} total_pincodes_served
 * @property {number} total_active_zones
 */

/**
 * @typedef ZoneDataItem
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {number} current
 * @property {string} type
 */

/**
 * @typedef ListViewProduct
 * @property {number} count
 * @property {string} type
 */

/**
 * @typedef ListViewChannels
 * @property {string} channel_id
 * @property {string} channel_type
 */

/**
 * @typedef ListViewItems
 * @property {string} zone_id
 * @property {string} name
 * @property {string} slug
 * @property {number} stores_count
 * @property {boolean} is_active
 * @property {ListViewProduct} product
 * @property {number} pincodes_count
 * @property {number} company_id
 * @property {ListViewChannels[]} channels
 */

/**
 * @typedef ListViewResponse
 * @property {ListViewSummary} summary
 * @property {ZoneDataItem} page
 * @property {ListViewItems[]} items
 */

/**
 * @typedef CompanyStoreView_PageItems
 * @property {string} type
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {number} current
 */

/**
 * @typedef CompanyStoreView_Response
 * @property {CompanyStoreView_PageItems[]} page
 * @property {Object[]} [items]
 */

/**
 * @typedef GetZoneDataViewChannels
 * @property {string} channel_id
 * @property {string} channel_type
 */

/**
 * @typedef ZoneProductTypes
 * @property {string} type
 * @property {string[]} tags
 */

/**
 * @typedef ZoneMappingType
 * @property {string} country
 * @property {string[]} [pincode]
 * @property {string[]} [state]
 */

/**
 * @typedef UpdateZoneData
 * @property {string} zone_id
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {GetZoneDataViewChannels[]} channels
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids
 * @property {string} region_type
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 */

/**
 * @typedef ZoneUpdateRequest
 * @property {string} identifier
 * @property {UpdateZoneData} data
 */

/**
 * @typedef ZoneSuccessResponse
 * @property {number} status_code
 * @property {boolean} success
 */

/**
 * @typedef GetZoneDataViewItems
 * @property {string} zone_id
 * @property {string} name
 * @property {string} slug
 * @property {number} [company_id]
 * @property {boolean} is_active
 * @property {GetZoneDataViewChannels[]} channels
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids
 * @property {string} region_type
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 * @property {number} stores_count
 * @property {number} pincodes_count
 */

/**
 * @typedef GetSingleZoneDataViewResponse
 * @property {GetZoneDataViewItems} data
 */

/**
 * @typedef CreateZoneData
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {GetZoneDataViewChannels[]} channels
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids
 * @property {string} region_type
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 */

/**
 * @typedef ZoneRequest
 * @property {string} identifier
 * @property {CreateZoneData} data
 */

/**
 * @typedef ZoneResponse
 * @property {number} status_code
 * @property {string} zone_id
 * @property {boolean} success
 */

/**
 * @typedef GetZoneFromPincodeViewRequest
 * @property {string} country
 * @property {string} pincode
 */

/**
 * @typedef Zone
 * @property {string} zone_id
 * @property {string} type
 * @property {string} name
 * @property {string[]} tags
 * @property {string} slug
 * @property {boolean} is_active
 * @property {number[]} store_ids
 * @property {string} assignment_preference
 */

/**
 * @typedef GetZoneFromPincodeViewResponse
 * @property {string} serviceability_type
 * @property {Zone[]} zones
 */

/**
 * @typedef GetZoneFromApplicationIdViewResponse
 * @property {ZoneDataItem[]} page
 * @property {ListViewItems[]} items
 */

/**
 * @typedef ServiceabilityPageResponse
 * @property {string} [type]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {number} [current]
 */

/**
 * @typedef MobileNo
 * @property {string} [number]
 * @property {number} [country_code]
 */

/**
 * @typedef ManagerResponse
 * @property {string} [email]
 * @property {MobileNo} [mobile_no]
 * @property {string} [name]
 */

/**
 * @typedef ModifiedByResponse
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef IntegrationTypeResponse
 * @property {string} [inventory]
 * @property {string} [order]
 */

/**
 * @typedef ProductReturnConfigResponse
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef ContactNumberResponse
 * @property {string} [number]
 * @property {number} [country_code]
 */

/**
 * @typedef AddressResponse
 * @property {string} [city]
 * @property {string} [address1]
 * @property {number} [pincode]
 * @property {string} [address2]
 * @property {string} [landmark]
 * @property {string} [state]
 * @property {string} [country]
 * @property {number} [latitude]
 * @property {number} [longitude]
 */

/**
 * @typedef CreatedByResponse
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef EwayBillResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef EinvoiceResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef GstCredentialsResponse
 * @property {EwayBillResponse} [e_waybill]
 * @property {EinvoiceResponse} [e_invoice]
 */

/**
 * @typedef WarningsResponse
 * @property {string} [store_address]
 */

/**
 * @typedef OpeningClosing
 * @property {number} [minute]
 * @property {number} [hour]
 */

/**
 * @typedef TimmingResponse
 * @property {boolean} [open]
 * @property {string} [weekday]
 * @property {OpeningClosing} [closing]
 * @property {OpeningClosing} [opening]
 */

/**
 * @typedef DocumentsResponse
 * @property {string} [legal_name]
 * @property {string} [value]
 * @property {string} [type]
 * @property {boolean} [verified]
 */

/**
 * @typedef Dp
 * @property {number} [fm_priority]
 * @property {number} [rvp_priority]
 * @property {number} [lm_priority]
 * @property {string} [internal_account_id]
 * @property {number} [area_code]
 * @property {string} [payment_mode]
 * @property {string[]} [operations]
 * @property {string} [external_account_id]
 * @property {string} [transport_mode]
 * @property {boolean} [assign_dp_from_sb]
 */

/**
 * @typedef LogisticsResponse
 * @property {boolean} [override]
 * @property {Dp} [dp]
 */

/**
 * @typedef ItemResponse
 * @property {string} [created_on]
 * @property {ManagerResponse} [manager]
 * @property {ModifiedByResponse} [modified_by]
 * @property {IntegrationTypeResponse} [integration_type]
 * @property {string} [verified_on]
 * @property {ProductReturnConfigResponse} [product_return_config]
 * @property {ContactNumberResponse[]} [contact_numbers]
 * @property {ModifiedByResponse} [verified_by]
 * @property {string} [stage]
 * @property {AddressResponse} [address]
 * @property {string} [modified_on]
 * @property {CreatedByResponse} [created_by]
 * @property {GstCredentialsResponse} [gst_credentials]
 * @property {string} [display_name]
 * @property {number} [company_id]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [code]
 * @property {WarningsResponse} [warnings]
 * @property {string} [name]
 * @property {TimmingResponse[]} [timing]
 * @property {DocumentsResponse[]} [documents]
 * @property {string} [store_type]
 * @property {string} [sub_type]
 * @property {number} [company]
 * @property {string} [_cls]
 * @property {LogisticsResponse} [logistics]
 * @property {string[]} [notification_emails]
 */

/**
 * @typedef GetStoresViewResponse
 * @property {ServiceabilityPageResponse} page
 * @property {ItemResponse[]} [items]
 */

/**
 * @typedef ReAssignStoreRequest
 * @property {string} to_pincode
 * @property {string} identifier
 * @property {Object} configuration
 * @property {string[]} ignored_locations
 * @property {Object[]} articles
 */

/**
 * @typedef ReAssignStoreResponse
 * @property {string} to_pincode
 * @property {boolean} success
 * @property {Object} error
 * @property {Object[]} [articles]
 */

/**
 * @typedef ApplicationCompanyDpViewResponse
 * @property {number} [courier_partner_id]
 * @property {number} company_id
 * @property {string} application_id
 * @property {boolean} success
 */

/**
 * @typedef ApplicationCompanyDpViewRequest
 * @property {string} [dp_id]
 */

/**
 * @typedef PincodeMopData
 * @property {number[]} pincodes
 * @property {string} country
 * @property {string} action
 */

/**
 * @typedef PincodeMopUpdateResponse
 * @property {number} pincode
 * @property {string} channel_id
 * @property {string} country
 * @property {boolean} is_active
 */

/**
 * @typedef PincodeMOPresponse
 * @property {boolean} success
 * @property {number} status_code
 * @property {string} batch_id
 * @property {string} country
 * @property {string} action
 * @property {number[]} [pincodes]
 * @property {PincodeMopUpdateResponse[]} [updated_pincodes]
 */

/**
 * @typedef CommonError
 * @property {string} [status_code]
 * @property {Object} [error]
 * @property {string} [success]
 */

/**
 * @typedef PincodeMopBulkData
 * @property {string} batch_id
 * @property {string} s3_url
 */

/**
 * @typedef PincodeBulkViewResponse
 * @property {string} batch_id
 * @property {string} s3_url
 */

/**
 * @typedef PincodeCodStatusListingRequest
 * @property {string} [country]
 * @property {boolean} [is_active]
 * @property {number} [pincode]
 * @property {number} [current]
 * @property {number} [page_size]
 */

/**
 * @typedef PincodeCodStatusListingResponse
 * @property {string} country
 * @property {PincodeCodStatusListingResponse[]} data
 * @property {boolean} success
 * @property {Error[]} [errors]
 * @property {PincodeCodStatusListingPage} page
 * @property {PincodeCodStatusListingSummary} summary
 */

/**
 * @typedef Error
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [message]
 */

/**
 * @typedef PincodeCodStatusListingPage
 * @property {string} type
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {number} current
 */

/**
 * @typedef PincodeCodStatusListingSummary
 * @property {number} total_active_pincodes
 * @property {number} total_inactive_pincodes
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryRequest
 * @property {string} entity_type
 * @property {string} [file_name]
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryPaging
 * @property {string} [type]
 * @property {number} [size]
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryResponse
 * @property {string} [batch_id]
 * @property {string} [entity_type]
 * @property {string} [error_file_s3_url]
 * @property {string} [s3_url]
 * @property {string} [file_name]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {boolean} [success]
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryResponseData
 * @property {string} [entity_type]
 * @property {PincodeMopUpdateAuditHistoryPaging} page
 * @property {PincodeMopUpdateAuditHistoryResponse[]} data
 */

/**
 * @typedef Dp1
 * @property {boolean} is_self_ship
 * @property {string} name
 * @property {string} plan_id
 * @property {string} stage
 * @property {string} account_id
 * @property {string} dp_id
 * @property {Object} plan_rules
 */

/**
 * @typedef CompanyDpAccountRequest
 * @property {Dp1[]} data
 */

/**
 * @typedef CompanyDpAccountResponse
 * @property {boolean} success
 */

/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} value
 * @property {string} type
 */

/**
 * @typedef DpAccountFailureResponse
 * @property {number} status_code
 * @property {ErrorResponse[]} error
 * @property {boolean} success
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef CompanyDpAccountListResponse
 * @property {boolean} success
 * @property {Page} page
 * @property {Dp1[]} items
 */

/**
 * @typedef DpRulesUpdateRequest
 * @property {boolean} is_active
 * @property {Object[]} conditions
 * @property {Object} dp_ids
 * @property {string} name
 */

/**
 * @typedef DpRuleResponse
 * @property {string} [created_on]
 * @property {string} name
 * @property {Object} [modified_by]
 * @property {Object} dp_ids
 * @property {boolean} [is_active]
 * @property {string} [modified_on]
 * @property {string} uid
 * @property {Object} [created_by]
 * @property {number} company_id
 * @property {string[]} conditions
 */

/**
 * @typedef DpRuleUpdateSuccessResponse
 * @property {number} status_code
 * @property {DpRuleResponse} data
 * @property {boolean} success
 */

/**
 * @typedef FailureResponse
 * @property {number} status_code
 * @property {ErrorResponse[]} error
 * @property {boolean} success
 */

/**
 * @typedef DpSchemaInRuleListing
 * @property {boolean} is_self_ship
 * @property {string} name
 * @property {string} plan_id
 * @property {string} stage
 * @property {string} account_id
 * @property {number} priority
 * @property {string} dp_id
 * @property {Object} plan_rules
 */

/**
 * @typedef DpRule
 * @property {string} name
 * @property {Object} dp_ids
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 * @property {Object[]} conditions
 */

/**
 * @typedef DpRuleSuccessResponse
 * @property {number} status_code
 * @property {DpRule} data
 * @property {boolean} success
 */

/**
 * @typedef DpIds
 * @property {boolean} enabled
 * @property {number} priority
 * @property {Object} [meta]
 */

/**
 * @typedef DpRuleRequest
 * @property {string} name
 * @property {Object} dp_ids
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 * @property {Object[]} conditions
 */

/**
 * @typedef DpMultipleRuleSuccessResponse
 * @property {boolean} success
 * @property {Page} page
 * @property {DpRule[]} items
 */

/**
 * @typedef DPCompanyRuleRequest
 * @property {string[]} rule_ids
 */

/**
 * @typedef DPCompanyRuleResponse
 * @property {number} status_code
 * @property {DpRuleResponse[]} data
 * @property {boolean} success
 */

/**
 * @typedef DPApplicationRuleRequest
 * @property {string[]} shipping_rules
 */

/**
 * @typedef DPApplicationRuleResponse
 * @property {boolean} status_code
 * @property {DpRuleResponse[]} data
 * @property {boolean} success
 */

/**
 * @typedef SelfShipResponse
 * @property {boolean} is_active
 * @property {number} tat
 */

/**
 * @typedef ApplicationSelfShipConfig
 * @property {Object} [self_ship]
 */

/**
 * @typedef ApplicationSelfShipConfigResponse
 * @property {ServiceabilityErrorResponse} [error]
 * @property {ApplicationSelfShipConfig} [data]
 * @property {boolean} success
 */

class ServiceabilityPlatformModel {
  /** @returns {ServiceabilityPayloadSchema} */
  static ServiceabilityPayloadSchema() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ServiceabilityErrorResponse} */
  static ServiceabilityErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ApplicationServiceabilityConfig} */
  static ApplicationServiceabilityConfig() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      serviceability_type: Joi.string().allow("").required(),
      channel_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ApplicationServiceabilityConfigResponse} */
  static ApplicationServiceabilityConfigResponse() {
    return Joi.object({
      error: ServiceabilityPlatformModel.ServiceabilityErrorResponse(),
      data: ServiceabilityPlatformModel.ApplicationServiceabilityConfig(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {EntityRegionView_Request} */
  static EntityRegionView_Request() {
    return Joi.object({
      sub_type: Joi.array().items(Joi.string().allow("")).required(),
      parent_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {EntityRegionView_Error} */
  static EntityRegionView_Error() {
    return Joi.object({
      message: Joi.string().allow(""),
      value: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {EntityRegionView_page} */
  static EntityRegionView_page() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      current: Joi.number().required(),
    });
  }

  /** @returns {EntityRegionView_Items} */
  static EntityRegionView_Items() {
    return Joi.object({
      sub_type: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {EntityRegionView_Response} */
  static EntityRegionView_Response() {
    return Joi.object({
      error: ServiceabilityPlatformModel.EntityRegionView_Error().required(),
      page: ServiceabilityPlatformModel.EntityRegionView_page().required(),
      items: Joi.array().items(
        ServiceabilityPlatformModel.EntityRegionView_Items()
      ),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ListViewSummary} */
  static ListViewSummary() {
    return Joi.object({
      total_zones: Joi.number().required(),
      total_pincodes_served: Joi.number().required(),
      total_active_zones: Joi.number().required(),
    });
  }

  /** @returns {ZoneDataItem} */
  static ZoneDataItem() {
    return Joi.object({
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      current: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ListViewProduct} */
  static ListViewProduct() {
    return Joi.object({
      count: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ListViewChannels} */
  static ListViewChannels() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      channel_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ListViewItems} */
  static ListViewItems() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      stores_count: Joi.number().required(),
      is_active: Joi.boolean().required(),
      product: ServiceabilityPlatformModel.ListViewProduct().required(),
      pincodes_count: Joi.number().required(),
      company_id: Joi.number().required(),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewChannels())
        .required(),
    });
  }

  /** @returns {ListViewResponse} */
  static ListViewResponse() {
    return Joi.object({
      summary: ServiceabilityPlatformModel.ListViewSummary().required(),
      page: ServiceabilityPlatformModel.ZoneDataItem().required(),
      items: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewItems())
        .required(),
    });
  }

  /** @returns {CompanyStoreView_PageItems} */
  static CompanyStoreView_PageItems() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      current: Joi.number().required(),
    });
  }

  /** @returns {CompanyStoreView_Response} */
  static CompanyStoreView_Response() {
    return Joi.object({
      page: Joi.array()
        .items(ServiceabilityPlatformModel.CompanyStoreView_PageItems())
        .required(),
      items: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {GetZoneDataViewChannels} */
  static GetZoneDataViewChannels() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      channel_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ZoneProductTypes} */
  static ZoneProductTypes() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {ZoneMappingType} */
  static ZoneMappingType() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      pincode: Joi.array().items(Joi.string().allow("")),
      state: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {UpdateZoneData} */
  static UpdateZoneData() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.GetZoneDataViewChannels())
        .required(),
      product: ServiceabilityPlatformModel.ZoneProductTypes().required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      region_type: Joi.string().allow("").required(),
      mapping: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneMappingType())
        .required(),
      assignment_preference: Joi.string().allow(""),
    });
  }

  /** @returns {ZoneUpdateRequest} */
  static ZoneUpdateRequest() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),
      data: ServiceabilityPlatformModel.UpdateZoneData().required(),
    });
  }

  /** @returns {ZoneSuccessResponse} */
  static ZoneSuccessResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {GetZoneDataViewItems} */
  static GetZoneDataViewItems() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      company_id: Joi.number(),
      is_active: Joi.boolean().required(),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.GetZoneDataViewChannels())
        .required(),
      product: ServiceabilityPlatformModel.ZoneProductTypes().required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      region_type: Joi.string().allow("").required(),
      mapping: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneMappingType())
        .required(),
      assignment_preference: Joi.string().allow(""),
      stores_count: Joi.number().required(),
      pincodes_count: Joi.number().required(),
    });
  }

  /** @returns {GetSingleZoneDataViewResponse} */
  static GetSingleZoneDataViewResponse() {
    return Joi.object({
      data: ServiceabilityPlatformModel.GetZoneDataViewItems().required(),
    });
  }

  /** @returns {CreateZoneData} */
  static CreateZoneData() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.GetZoneDataViewChannels())
        .required(),
      product: ServiceabilityPlatformModel.ZoneProductTypes().required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      region_type: Joi.string().allow("").required(),
      mapping: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneMappingType())
        .required(),
      assignment_preference: Joi.string().allow(""),
    });
  }

  /** @returns {ZoneRequest} */
  static ZoneRequest() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),
      data: ServiceabilityPlatformModel.CreateZoneData().required(),
    });
  }

  /** @returns {ZoneResponse} */
  static ZoneResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      zone_id: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {GetZoneFromPincodeViewRequest} */
  static GetZoneFromPincodeViewRequest() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
    });
  }

  /** @returns {Zone} */
  static Zone() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.string().allow("")).required(),
      slug: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      assignment_preference: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetZoneFromPincodeViewResponse} */
  static GetZoneFromPincodeViewResponse() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),
      zones: Joi.array().items(ServiceabilityPlatformModel.Zone()).required(),
    });
  }

  /** @returns {GetZoneFromApplicationIdViewResponse} */
  static GetZoneFromApplicationIdViewResponse() {
    return Joi.object({
      page: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneDataItem())
        .required(),
      items: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewItems())
        .required(),
    });
  }

  /** @returns {ServiceabilityPageResponse} */
  static ServiceabilityPageResponse() {
    return Joi.object({
      type: Joi.string().allow(""),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      current: Joi.number(),
    });
  }

  /** @returns {MobileNo} */
  static MobileNo() {
    return Joi.object({
      number: Joi.string().allow(""),
      country_code: Joi.number(),
    });
  }

  /** @returns {ManagerResponse} */
  static ManagerResponse() {
    return Joi.object({
      email: Joi.string().allow(""),
      mobile_no: ServiceabilityPlatformModel.MobileNo(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ModifiedByResponse} */
  static ModifiedByResponse() {
    return Joi.object({
      username: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {IntegrationTypeResponse} */
  static IntegrationTypeResponse() {
    return Joi.object({
      inventory: Joi.string().allow(""),
      order: Joi.string().allow(""),
    });
  }

  /** @returns {ProductReturnConfigResponse} */
  static ProductReturnConfigResponse() {
    return Joi.object({
      on_same_store: Joi.boolean(),
    });
  }

  /** @returns {ContactNumberResponse} */
  static ContactNumberResponse() {
    return Joi.object({
      number: Joi.string().allow(""),
      country_code: Joi.number(),
    });
  }

  /** @returns {AddressResponse} */
  static AddressResponse() {
    return Joi.object({
      city: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      pincode: Joi.number(),
      address2: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
    });
  }

  /** @returns {CreatedByResponse} */
  static CreatedByResponse() {
    return Joi.object({
      username: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {EwayBillResponse} */
  static EwayBillResponse() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {EinvoiceResponse} */
  static EinvoiceResponse() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {GstCredentialsResponse} */
  static GstCredentialsResponse() {
    return Joi.object({
      e_waybill: ServiceabilityPlatformModel.EwayBillResponse(),
      e_invoice: ServiceabilityPlatformModel.EinvoiceResponse(),
    });
  }

  /** @returns {WarningsResponse} */
  static WarningsResponse() {
    return Joi.object({
      store_address: Joi.string().allow(""),
    });
  }

  /** @returns {OpeningClosing} */
  static OpeningClosing() {
    return Joi.object({
      minute: Joi.number(),
      hour: Joi.number(),
    });
  }

  /** @returns {TimmingResponse} */
  static TimmingResponse() {
    return Joi.object({
      open: Joi.boolean(),
      weekday: Joi.string().allow(""),
      closing: ServiceabilityPlatformModel.OpeningClosing(),
      opening: ServiceabilityPlatformModel.OpeningClosing(),
    });
  }

  /** @returns {DocumentsResponse} */
  static DocumentsResponse() {
    return Joi.object({
      legal_name: Joi.string().allow(""),
      value: Joi.string().allow(""),
      type: Joi.string().allow(""),
      verified: Joi.boolean(),
    });
  }

  /** @returns {Dp} */
  static Dp() {
    return Joi.object({
      fm_priority: Joi.number(),
      rvp_priority: Joi.number(),
      lm_priority: Joi.number(),
      internal_account_id: Joi.string().allow(""),
      area_code: Joi.number().allow(null),
      payment_mode: Joi.string().allow(""),
      operations: Joi.array().items(Joi.string().allow("")),
      external_account_id: Joi.string().allow("").allow(null),
      transport_mode: Joi.string().allow(""),
      assign_dp_from_sb: Joi.boolean(),
    });
  }

  /** @returns {LogisticsResponse} */
  static LogisticsResponse() {
    return Joi.object({
      override: Joi.boolean(),
      dp: ServiceabilityPlatformModel.Dp(),
    });
  }

  /** @returns {ItemResponse} */
  static ItemResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      manager: ServiceabilityPlatformModel.ManagerResponse(),
      modified_by: ServiceabilityPlatformModel.ModifiedByResponse(),
      integration_type: ServiceabilityPlatformModel.IntegrationTypeResponse(),
      verified_on: Joi.string().allow(""),
      product_return_config: ServiceabilityPlatformModel.ProductReturnConfigResponse(),
      contact_numbers: Joi.array().items(
        ServiceabilityPlatformModel.ContactNumberResponse()
      ),
      verified_by: ServiceabilityPlatformModel.ModifiedByResponse(),
      stage: Joi.string().allow(""),
      address: ServiceabilityPlatformModel.AddressResponse(),
      modified_on: Joi.string().allow(""),
      created_by: ServiceabilityPlatformModel.CreatedByResponse(),
      gst_credentials: ServiceabilityPlatformModel.GstCredentialsResponse(),
      display_name: Joi.string().allow(""),
      company_id: Joi.number(),
      uid: Joi.number(),
      _custom_json: Joi.any(),
      code: Joi.string().allow(""),
      warnings: ServiceabilityPlatformModel.WarningsResponse(),
      name: Joi.string().allow(""),
      timing: Joi.array().items(ServiceabilityPlatformModel.TimmingResponse()),
      documents: Joi.array().items(
        ServiceabilityPlatformModel.DocumentsResponse()
      ),
      store_type: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      company: Joi.number(),
      _cls: Joi.string().allow(""),
      logistics: ServiceabilityPlatformModel.LogisticsResponse(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {GetStoresViewResponse} */
  static GetStoresViewResponse() {
    return Joi.object({
      page: ServiceabilityPlatformModel.ServiceabilityPageResponse().required(),
      items: Joi.array().items(ServiceabilityPlatformModel.ItemResponse()),
    });
  }

  /** @returns {ReAssignStoreRequest} */
  static ReAssignStoreRequest() {
    return Joi.object({
      to_pincode: Joi.string().allow("").required(),
      identifier: Joi.string().allow("").required(),
      configuration: Joi.any().required(),
      ignored_locations: Joi.array().items(Joi.string().allow("")).required(),
      articles: Joi.array().items(Joi.any()).required(),
    });
  }

  /** @returns {ReAssignStoreResponse} */
  static ReAssignStoreResponse() {
    return Joi.object({
      to_pincode: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      error: Joi.any().required(),
      articles: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {ApplicationCompanyDpViewResponse} */
  static ApplicationCompanyDpViewResponse() {
    return Joi.object({
      courier_partner_id: Joi.number(),
      company_id: Joi.number().required(),
      application_id: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ApplicationCompanyDpViewRequest} */
  static ApplicationCompanyDpViewRequest() {
    return Joi.object({
      dp_id: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeMopData} */
  static PincodeMopData() {
    return Joi.object({
      pincodes: Joi.array().items(Joi.number()).required(),
      country: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
    });
  }

  /** @returns {PincodeMopUpdateResponse} */
  static PincodeMopUpdateResponse() {
    return Joi.object({
      pincode: Joi.number().required(),
      channel_id: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
    });
  }

  /** @returns {PincodeMOPresponse} */
  static PincodeMOPresponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      status_code: Joi.number().required(),
      batch_id: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
      pincodes: Joi.array().items(Joi.number()),
      updated_pincodes: Joi.array().items(
        ServiceabilityPlatformModel.PincodeMopUpdateResponse()
      ),
    });
  }

  /** @returns {CommonError} */
  static CommonError() {
    return Joi.object({
      status_code: Joi.string().allow(""),
      error: Joi.any(),
      success: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeMopBulkData} */
  static PincodeMopBulkData() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      s3_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {PincodeBulkViewResponse} */
  static PincodeBulkViewResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      s3_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {PincodeCodStatusListingRequest} */
  static PincodeCodStatusListingRequest() {
    return Joi.object({
      country: Joi.string().allow(""),
      is_active: Joi.boolean(),
      pincode: Joi.number().allow(null),
      current: Joi.number(),
      page_size: Joi.number(),
    });
  }

  /** @returns {PincodeCodStatusListingResponse} */
  static PincodeCodStatusListingResponse() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      data: Joi.array()
        .items(Joi.link("#PincodeCodStatusListingResponse"))
        .required(),
      success: Joi.boolean().required(),
      errors: Joi.array().items(ServiceabilityPlatformModel.Error()),
      page: ServiceabilityPlatformModel.PincodeCodStatusListingPage().required(),
      summary: ServiceabilityPlatformModel.PincodeCodStatusListingSummary().required(),
    }).id("PincodeCodStatusListingResponse");
  }

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PincodeCodStatusListingPage} */
  static PincodeCodStatusListingPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      current: Joi.number().required(),
    });
  }

  /** @returns {PincodeCodStatusListingSummary} */
  static PincodeCodStatusListingSummary() {
    return Joi.object({
      total_active_pincodes: Joi.number().required(),
      total_inactive_pincodes: Joi.number().required(),
    });
  }

  /** @returns {PincodeMopUpdateAuditHistoryRequest} */
  static PincodeMopUpdateAuditHistoryRequest() {
    return Joi.object({
      entity_type: Joi.string().allow("").required(),
      file_name: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeMopUpdateAuditHistoryPaging} */
  static PincodeMopUpdateAuditHistoryPaging() {
    return Joi.object({
      type: Joi.string().allow(""),
      size: Joi.number(),
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
    });
  }

  /** @returns {PincodeMopUpdateAuditHistoryResponse} */
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

  /** @returns {PincodeMopUpdateAuditHistoryResponseData} */
  static PincodeMopUpdateAuditHistoryResponseData() {
    return Joi.object({
      entity_type: Joi.string().allow(""),
      page: ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryPaging().required(),
      data: Joi.array()
        .items(
          ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponse()
        )
        .required(),
    });
  }

  /** @returns {Dp1} */
  static Dp1() {
    return Joi.object({
      is_self_ship: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
      plan_id: Joi.string().allow("").required(),
      stage: Joi.string().allow("").required(),
      account_id: Joi.string().allow("").required(),
      dp_id: Joi.string().allow("").required(),
      plan_rules: Joi.any().required(),
    });
  }

  /** @returns {CompanyDpAccountRequest} */
  static CompanyDpAccountRequest() {
    return Joi.object({
      data: Joi.array().items(ServiceabilityPlatformModel.Dp1()).required(),
    });
  }

  /** @returns {CompanyDpAccountResponse} */
  static CompanyDpAccountResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {DpAccountFailureResponse} */
  static DpAccountFailureResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      error: Joi.array()
        .items(ServiceabilityPlatformModel.ErrorResponse())
        .required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {Page} */
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

  /** @returns {CompanyDpAccountListResponse} */
  static CompanyDpAccountListResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      page: ServiceabilityPlatformModel.Page().required(),
      items: Joi.array().items(ServiceabilityPlatformModel.Dp1()).required(),
    });
  }

  /** @returns {DpRulesUpdateRequest} */
  static DpRulesUpdateRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      conditions: Joi.array().items(Joi.any()).required(),
      dp_ids: Joi.object().pattern(/\S/, Joi.any()).required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {DpRuleResponse} */
  static DpRuleResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      modified_by: Joi.any(),
      dp_ids: Joi.any().required(),
      is_active: Joi.boolean(),
      modified_on: Joi.string().allow(""),
      uid: Joi.string().allow("").required(),
      created_by: Joi.any(),
      company_id: Joi.number().required(),
      conditions: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {DpRuleUpdateSuccessResponse} */
  static DpRuleUpdateSuccessResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      data: ServiceabilityPlatformModel.DpRuleResponse().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {FailureResponse} */
  static FailureResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      error: Joi.array()
        .items(ServiceabilityPlatformModel.ErrorResponse())
        .required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {DpSchemaInRuleListing} */
  static DpSchemaInRuleListing() {
    return Joi.object({
      is_self_ship: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
      plan_id: Joi.string().allow("").required(),
      stage: Joi.string().allow("").required(),
      account_id: Joi.string().allow("").required(),
      priority: Joi.number().required(),
      dp_id: Joi.string().allow("").required(),
      plan_rules: Joi.any().required(),
    });
  }

  /** @returns {DpRule} */
  static DpRule() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      dp_ids: Joi.object()
        .pattern(/\S/, ServiceabilityPlatformModel.DpSchemaInRuleListing())
        .required(),
      is_active: Joi.boolean(),
      company_id: Joi.number(),
      conditions: Joi.array().items(Joi.any()).required(),
    });
  }

  /** @returns {DpRuleSuccessResponse} */
  static DpRuleSuccessResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      data: ServiceabilityPlatformModel.DpRule().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {DpIds} */
  static DpIds() {
    return Joi.object({
      enabled: Joi.boolean().required(),
      priority: Joi.number().required(),
      meta: Joi.any(),
    });
  }

  /** @returns {DpRuleRequest} */
  static DpRuleRequest() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      dp_ids: Joi.object()
        .pattern(/\S/, ServiceabilityPlatformModel.DpIds())
        .required(),
      is_active: Joi.boolean(),
      company_id: Joi.number(),
      conditions: Joi.array().items(Joi.any()).required(),
    });
  }

  /** @returns {DpMultipleRuleSuccessResponse} */
  static DpMultipleRuleSuccessResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      page: ServiceabilityPlatformModel.Page().required(),
      items: Joi.array().items(ServiceabilityPlatformModel.DpRule()).required(),
    });
  }

  /** @returns {DPCompanyRuleRequest} */
  static DPCompanyRuleRequest() {
    return Joi.object({
      rule_ids: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {DPCompanyRuleResponse} */
  static DPCompanyRuleResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      data: Joi.array()
        .items(ServiceabilityPlatformModel.DpRuleResponse())
        .required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {DPApplicationRuleRequest} */
  static DPApplicationRuleRequest() {
    return Joi.object({
      shipping_rules: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {DPApplicationRuleResponse} */
  static DPApplicationRuleResponse() {
    return Joi.object({
      status_code: Joi.boolean().required(),
      data: Joi.array()
        .items(ServiceabilityPlatformModel.DpRuleResponse())
        .required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {SelfShipResponse} */
  static SelfShipResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      tat: Joi.number().required(),
    });
  }

  /** @returns {ApplicationSelfShipConfig} */
  static ApplicationSelfShipConfig() {
    return Joi.object({
      self_ship: Joi.any().allow(null),
    });
  }

  /** @returns {ApplicationSelfShipConfigResponse} */
  static ApplicationSelfShipConfigResponse() {
    return Joi.object({
      error: ServiceabilityPlatformModel.ServiceabilityErrorResponse(),
      data: ServiceabilityPlatformModel.ApplicationSelfShipConfig(),
      success: Joi.boolean().required(),
    });
  }
}
module.exports = ServiceabilityPlatformModel;
