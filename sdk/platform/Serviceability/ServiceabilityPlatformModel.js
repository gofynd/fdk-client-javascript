const Joi = require("joi");

/**
 * @typedef AddressResponse
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {number} [pincode]
 * @property {string} [state]
 */

/**
 * @typedef ApplicationCompanyDpViewRequest
 * @property {string} [dp_id]
 */

/**
 * @typedef ApplicationCompanyDpViewResponse
 * @property {string} application_id
 * @property {number} company_id
 * @property {number} [courier_partner_id]
 * @property {boolean} success
 */

/**
 * @typedef ApplicationSelfShipConfig
 * @property {Object} [self_ship]
 */

/**
 * @typedef ApplicationSelfShipConfigResponse
 * @property {ApplicationSelfShipConfig} [data]
 * @property {ServiceabilityErrorResponse} [error]
 * @property {boolean} success
 */

/**
 * @typedef ApplicationServiceabilityConfig
 * @property {string} channel_id
 * @property {string} channel_type
 * @property {string} serviceability_type
 */

/**
 * @typedef ApplicationServiceabilityConfigResponse
 * @property {ApplicationServiceabilityConfig} [data]
 * @property {ServiceabilityErrorResponse} [error]
 * @property {boolean} success
 */

/**
 * @typedef CommonError
 * @property {Object} [error]
 * @property {string} [status_code]
 * @property {string} [success]
 */

/**
 * @typedef CompanyDpAccountListResponse
 * @property {Dp1[]} items
 * @property {Page} page
 * @property {boolean} success
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
 * @typedef CompanyStoreView_PageItems
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {string} type
 */

/**
 * @typedef CompanyStoreView_Response
 * @property {Object[]} [items]
 * @property {CompanyStoreView_PageItems[]} page
 */

/**
 * @typedef ContactNumberResponse
 * @property {number} [country_code]
 * @property {string} [number]
 */

/**
 * @typedef CreatedByResponse
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef CreateZoneData
 * @property {string} [assignment_preference]
 * @property {GetZoneDataViewChannels[]} channels
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {ZoneMappingType[]} mapping
 * @property {string} name
 * @property {ZoneProductTypes} product
 * @property {string} region_type
 * @property {string} slug
 * @property {number[]} store_ids
 */

/**
 * @typedef DocumentsResponse
 * @property {string} [legal_name]
 * @property {string} [type]
 * @property {string} [value]
 * @property {boolean} [verified]
 */

/**
 * @typedef Dp
 * @property {number} [area_code]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [external_account_id]
 * @property {number} [fm_priority]
 * @property {string} [internal_account_id]
 * @property {number} [lm_priority]
 * @property {string[]} [operations]
 * @property {string} [payment_mode]
 * @property {number} [rvp_priority]
 * @property {string} [transport_mode]
 */

/**
 * @typedef Dp1
 * @property {string} account_id
 * @property {string} dp_id
 * @property {boolean} is_self_ship
 * @property {string} name
 * @property {string} plan_id
 * @property {Object} plan_rules
 * @property {string} stage
 */

/**
 * @typedef DpAccountFailureResponse
 * @property {ErrorResponse[]} error
 * @property {number} status_code
 * @property {boolean} success
 */

/**
 * @typedef DPApplicationRuleRequest
 * @property {string[]} shipping_rules
 */

/**
 * @typedef DPApplicationRuleResponse
 * @property {DpRuleResponse[]} data
 * @property {boolean} status_code
 * @property {boolean} success
 */

/**
 * @typedef DPCompanyRuleRequest
 * @property {string[]} rule_ids
 */

/**
 * @typedef DPCompanyRuleResponse
 * @property {DpRuleResponse[]} data
 * @property {number} status_code
 * @property {boolean} success
 */

/**
 * @typedef DpIds
 * @property {boolean} enabled
 * @property {Object} [meta]
 * @property {number} priority
 */

/**
 * @typedef DpMultipleRuleSuccessResponse
 * @property {DpRule[]} items
 * @property {Page} page
 * @property {boolean} success
 */

/**
 * @typedef DpRule
 * @property {number} [company_id]
 * @property {Object[]} conditions
 * @property {Object} dp_ids
 * @property {boolean} [is_active]
 * @property {string} name
 */

/**
 * @typedef DpRuleRequest
 * @property {number} [company_id]
 * @property {Object[]} conditions
 * @property {Object} dp_ids
 * @property {boolean} [is_active]
 * @property {string} name
 */

/**
 * @typedef DpRuleResponse
 * @property {number} company_id
 * @property {string[]} conditions
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {Object} dp_ids
 * @property {boolean} [is_active]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string} uid
 */

/**
 * @typedef DpRuleSuccessResponse
 * @property {DpRule} data
 * @property {number} status_code
 * @property {boolean} success
 */

/**
 * @typedef DpRulesUpdateRequest
 * @property {Object[]} conditions
 * @property {Object} dp_ids
 * @property {boolean} is_active
 * @property {string} name
 */

/**
 * @typedef DpRuleUpdateSuccessResponse
 * @property {DpRuleResponse} data
 * @property {number} status_code
 * @property {boolean} success
 */

/**
 * @typedef DpSchemaInRuleListing
 * @property {string} account_id
 * @property {string} dp_id
 * @property {boolean} is_self_ship
 * @property {string} name
 * @property {string} plan_id
 * @property {Object} plan_rules
 * @property {number} priority
 * @property {string} stage
 */

/**
 * @typedef EinvoiceResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef EntityRegionView_Error
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef EntityRegionView_Items
 * @property {string} name
 * @property {string} sub_type
 * @property {string} uid
 */

/**
 * @typedef EntityRegionView_page
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {string} type
 */

/**
 * @typedef EntityRegionView_Request
 * @property {string[]} [parent_id]
 * @property {string[]} sub_type
 */

/**
 * @typedef EntityRegionView_Response
 * @property {EntityRegionView_Items[]} data
 * @property {EntityRegionView_Error} error
 * @property {EntityRegionView_page} page
 * @property {boolean} success
 */

/**
 * @typedef Error
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} type
 * @property {string} value
 */

/**
 * @typedef EwayBillResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef FailureResponse
 * @property {ErrorResponse[]} error
 * @property {number} status_code
 * @property {boolean} success
 */

/**
 * @typedef GetSingleZoneDataViewResponse
 * @property {GetZoneDataViewItems} data
 */

/**
 * @typedef GetStoresViewResponse
 * @property {ItemResponse[]} [items]
 * @property {ServiceabilityPageResponse} page
 */

/**
 * @typedef GetZoneDataViewChannels
 * @property {string} channel_id
 * @property {string} channel_type
 */

/**
 * @typedef GetZoneDataViewItems
 * @property {string} [assignment_preference]
 * @property {GetZoneDataViewChannels[]} channels
 * @property {number} [company_id]
 * @property {boolean} is_active
 * @property {ZoneMappingType[]} mapping
 * @property {string} name
 * @property {number} pincodes_count
 * @property {ZoneProductTypes} product
 * @property {string} region_type
 * @property {string} slug
 * @property {number[]} store_ids
 * @property {number} stores_count
 * @property {string} zone_id
 */

/**
 * @typedef GetZoneFromApplicationIdViewResponse
 * @property {ListViewItems[]} items
 * @property {ZoneDataItem[]} page
 */

/**
 * @typedef GetZoneFromPincodeViewRequest
 * @property {string} country
 * @property {string} pincode
 */

/**
 * @typedef GetZoneFromPincodeViewResponse
 * @property {string} serviceability_type
 * @property {Zone[]} zones
 */

/**
 * @typedef GstCredentialsResponse
 * @property {EinvoiceResponse} [e_invoice]
 * @property {EwayBillResponse} [e_waybill]
 */

/**
 * @typedef IntegrationTypeResponse
 * @property {string} [inventory]
 * @property {string} [order]
 */

/**
 * @typedef ItemResponse
 * @property {string} [_cls]
 * @property {Object} [_custom_json]
 * @property {AddressResponse} [address]
 * @property {string} [code]
 * @property {number} [company]
 * @property {number} [company_id]
 * @property {ContactNumberResponse[]} [contact_numbers]
 * @property {CreatedByResponse} [created_by]
 * @property {string} [created_on]
 * @property {string} [display_name]
 * @property {DocumentsResponse[]} [documents]
 * @property {GstCredentialsResponse} [gst_credentials]
 * @property {IntegrationTypeResponse} [integration_type]
 * @property {LogisticsResponse} [logistics]
 * @property {ManagerResponse} [manager]
 * @property {ModifiedByResponse} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string[]} [notification_emails]
 * @property {ProductReturnConfigResponse} [product_return_config]
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {string} [sub_type]
 * @property {TimmingResponse[]} [timing]
 * @property {number} [uid]
 * @property {ModifiedByResponse} [verified_by]
 * @property {string} [verified_on]
 * @property {WarningsResponse} [warnings]
 */

/**
 * @typedef ListViewChannels
 * @property {string} channel_id
 * @property {string} channel_type
 */

/**
 * @typedef ListViewItems
 * @property {ListViewChannels} channels
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string} name
 * @property {number} pincodes_count
 * @property {ListViewProduct} product
 * @property {string} slug
 * @property {number} stores_count
 * @property {string} zone_id
 */

/**
 * @typedef ListViewProduct
 * @property {number} count
 * @property {string} type
 */

/**
 * @typedef ListViewResponse
 * @property {ListViewItems[]} items
 * @property {ZoneDataItem} page
 * @property {ListViewSummary} summary
 */

/**
 * @typedef ListViewSummary
 * @property {number} total_active_zones
 * @property {number} total_pincodes_served
 * @property {number} total_zones
 */

/**
 * @typedef LogisticsResponse
 * @property {Dp} [dp]
 * @property {boolean} [override]
 */

/**
 * @typedef ManagerResponse
 * @property {string} [email]
 * @property {MobileNo} [mobile_no]
 * @property {string} [name]
 */

/**
 * @typedef MobileNo
 * @property {number} [country_code]
 * @property {string} [number]
 */

/**
 * @typedef ModifiedByResponse
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef OpeningClosing
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef PincodeBulkViewResponse
 * @property {string} batch_id
 * @property {string} s3_url
 */

/**
 * @typedef PincodeCodStatusListingPage
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {string} type
 */

/**
 * @typedef PincodeCodStatusListingRequest
 * @property {string} [country]
 * @property {number} [current]
 * @property {boolean} [is_active]
 * @property {number} [page_size]
 * @property {number} [pincode]
 */

/**
 * @typedef PincodeCodStatusListingResponse
 * @property {string} country
 * @property {PincodeCodStatusListingResponse[]} data
 * @property {Error[]} [errors]
 * @property {PincodeCodStatusListingPage} page
 * @property {boolean} success
 * @property {PincodeCodStatusListingSummary} summary
 */

/**
 * @typedef PincodeCodStatusListingSummary
 * @property {number} total_active_pincodes
 * @property {number} total_inactive_pincodes
 */

/**
 * @typedef PincodeMopBulkData
 * @property {string} batch_id
 * @property {string} s3_url
 */

/**
 * @typedef PincodeMopData
 * @property {string} action
 * @property {string} country
 * @property {number[]} pincodes
 */

/**
 * @typedef PincodeMOPresponse
 * @property {string} action
 * @property {string} batch_id
 * @property {string} country
 * @property {number[]} [pincodes]
 * @property {number} status_code
 * @property {boolean} success
 * @property {PincodeMopUpdateResponse[]} [updated_pincodes]
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryPaging
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryRequest
 * @property {string} entity_type
 * @property {string} [file_name]
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryResponse
 * @property {string} [batch_id]
 * @property {string} [entity_type]
 * @property {string} [error_file_s3_url]
 * @property {string} [file_name]
 * @property {string} [s3_url]
 * @property {boolean} [success]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryResponseData
 * @property {PincodeMopUpdateAuditHistoryResponse[]} data
 * @property {string} [entity_type]
 * @property {PincodeMopUpdateAuditHistoryPaging} page
 */

/**
 * @typedef PincodeMopUpdateResponse
 * @property {string} channel_id
 * @property {string} country
 * @property {boolean} is_active
 * @property {number} pincode
 */

/**
 * @typedef ProductReturnConfigResponse
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef ReAssignStoreRequest
 * @property {Object[]} articles
 * @property {Object} configuration
 * @property {string} identifier
 * @property {string[]} ignored_locations
 * @property {string} to_pincode
 */

/**
 * @typedef ReAssignStoreResponse
 * @property {Object[]} [articles]
 * @property {Object} error
 * @property {boolean} success
 * @property {string} to_pincode
 */

/**
 * @typedef SelfShipResponse
 * @property {boolean} is_active
 * @property {number} tat
 */

/**
 * @typedef ServiceabilityErrorResponse
 * @property {string} message
 * @property {string} type
 * @property {string} value
 */

/**
 * @typedef ServiceabilityPageResponse
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */

/**
 * @typedef ServiceabilityPayloadSchema
 * @property {string} serviceability_type
 */

/**
 * @typedef TimmingResponse
 * @property {OpeningClosing} [closing]
 * @property {boolean} [open]
 * @property {OpeningClosing} [opening]
 * @property {string} [weekday]
 */

/**
 * @typedef UpdateZoneData
 * @property {string} [assignment_preference]
 * @property {GetZoneDataViewChannels[]} channels
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {ZoneMappingType[]} mapping
 * @property {string} name
 * @property {ZoneProductTypes} product
 * @property {string} region_type
 * @property {string} slug
 * @property {number[]} store_ids
 * @property {string} zone_id
 */

/**
 * @typedef WarningsResponse
 * @property {string} [store_address]
 */

/**
 * @typedef Zone
 * @property {string} assignment_preference
 * @property {boolean} is_active
 * @property {string} name
 * @property {string} slug
 * @property {number[]} store_ids
 * @property {string[]} tags
 * @property {string} type
 * @property {string} zone_id
 */

/**
 * @typedef ZoneDataItem
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {string} type
 */

/**
 * @typedef ZoneMappingType
 * @property {string} country
 * @property {string[]} [pincode]
 * @property {string[]} [state]
 */

/**
 * @typedef ZoneProductTypes
 * @property {string[]} tags
 * @property {string} type
 */

/**
 * @typedef ZoneRequest
 * @property {CreateZoneData} data
 * @property {string} identifier
 */

/**
 * @typedef ZoneResponse
 * @property {number} status_code
 * @property {boolean} success
 * @property {string} zone_id
 */

/**
 * @typedef ZoneSuccessResponse
 * @property {number} status_code
 * @property {boolean} success
 */

/**
 * @typedef ZoneUpdateRequest
 * @property {UpdateZoneData} data
 * @property {string} identifier
 */

class ServiceabilityPlatformModel {
  /** @returns {AddressResponse} */
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

  /** @returns {ApplicationCompanyDpViewRequest} */
  static ApplicationCompanyDpViewRequest() {
    return Joi.object({
      dp_id: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationCompanyDpViewResponse} */
  static ApplicationCompanyDpViewResponse() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      courier_partner_id: Joi.number(),
      success: Joi.boolean().required(),
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
      data: ServiceabilityPlatformModel.ApplicationSelfShipConfig(),
      error: ServiceabilityPlatformModel.ServiceabilityErrorResponse(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ApplicationServiceabilityConfig} */
  static ApplicationServiceabilityConfig() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      channel_type: Joi.string().allow("").required(),
      serviceability_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ApplicationServiceabilityConfigResponse} */
  static ApplicationServiceabilityConfigResponse() {
    return Joi.object({
      data: ServiceabilityPlatformModel.ApplicationServiceabilityConfig(),
      error: ServiceabilityPlatformModel.ServiceabilityErrorResponse(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CommonError} */
  static CommonError() {
    return Joi.object({
      error: Joi.any(),
      status_code: Joi.string().allow(""),
      success: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyDpAccountListResponse} */
  static CompanyDpAccountListResponse() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityPlatformModel.Dp1()).required(),
      page: ServiceabilityPlatformModel.Page().required(),
      success: Joi.boolean().required(),
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

  /** @returns {CompanyStoreView_PageItems} */
  static CompanyStoreView_PageItems() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {CompanyStoreView_Response} */
  static CompanyStoreView_Response() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),
      page: Joi.array()
        .items(ServiceabilityPlatformModel.CompanyStoreView_PageItems())
        .required(),
    });
  }

  /** @returns {ContactNumberResponse} */
  static ContactNumberResponse() {
    return Joi.object({
      country_code: Joi.number(),
      number: Joi.string().allow(""),
    });
  }

  /** @returns {CreatedByResponse} */
  static CreatedByResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {CreateZoneData} */
  static CreateZoneData() {
    return Joi.object({
      assignment_preference: Joi.string().allow(""),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.GetZoneDataViewChannels())
        .required(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      mapping: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneMappingType())
        .required(),
      name: Joi.string().allow("").required(),
      product: ServiceabilityPlatformModel.ZoneProductTypes().required(),
      region_type: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {DocumentsResponse} */
  static DocumentsResponse() {
    return Joi.object({
      legal_name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
      verified: Joi.boolean(),
    });
  }

  /** @returns {Dp} */
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

  /** @returns {Dp1} */
  static Dp1() {
    return Joi.object({
      account_id: Joi.string().allow("").required(),
      dp_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
      plan_id: Joi.string().allow("").required(),
      plan_rules: Joi.any().required(),
      stage: Joi.string().allow("").required(),
    });
  }

  /** @returns {DpAccountFailureResponse} */
  static DpAccountFailureResponse() {
    return Joi.object({
      error: Joi.array()
        .items(ServiceabilityPlatformModel.ErrorResponse())
        .required(),
      status_code: Joi.number().required(),
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
      data: Joi.array()
        .items(ServiceabilityPlatformModel.DpRuleResponse())
        .required(),
      status_code: Joi.boolean().required(),
      success: Joi.boolean().required(),
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
      data: Joi.array()
        .items(ServiceabilityPlatformModel.DpRuleResponse())
        .required(),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {DpIds} */
  static DpIds() {
    return Joi.object({
      enabled: Joi.boolean().required(),
      meta: Joi.any(),
      priority: Joi.number().required(),
    });
  }

  /** @returns {DpMultipleRuleSuccessResponse} */
  static DpMultipleRuleSuccessResponse() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityPlatformModel.DpRule()).required(),
      page: ServiceabilityPlatformModel.Page().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {DpRule} */
  static DpRule() {
    return Joi.object({
      company_id: Joi.number(),
      conditions: Joi.array().items(Joi.any()).required(),
      dp_ids: Joi.object()
        .pattern(/\S/, ServiceabilityPlatformModel.DpSchemaInRuleListing())
        .required(),
      is_active: Joi.boolean(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {DpRuleRequest} */
  static DpRuleRequest() {
    return Joi.object({
      company_id: Joi.number(),
      conditions: Joi.array().items(Joi.any()).required(),
      dp_ids: Joi.object()
        .pattern(/\S/, ServiceabilityPlatformModel.DpIds())
        .required(),
      is_active: Joi.boolean(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {DpRuleResponse} */
  static DpRuleResponse() {
    return Joi.object({
      company_id: Joi.number().required(),
      conditions: Joi.array().items(Joi.string().allow("")).required(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      dp_ids: Joi.any().required(),
      is_active: Joi.boolean(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
    });
  }

  /** @returns {DpRuleSuccessResponse} */
  static DpRuleSuccessResponse() {
    return Joi.object({
      data: ServiceabilityPlatformModel.DpRule().required(),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {DpRulesUpdateRequest} */
  static DpRulesUpdateRequest() {
    return Joi.object({
      conditions: Joi.array().items(Joi.any()).required(),
      dp_ids: Joi.object().pattern(/\S/, Joi.any()).required(),
      is_active: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {DpRuleUpdateSuccessResponse} */
  static DpRuleUpdateSuccessResponse() {
    return Joi.object({
      data: ServiceabilityPlatformModel.DpRuleResponse().required(),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {DpSchemaInRuleListing} */
  static DpSchemaInRuleListing() {
    return Joi.object({
      account_id: Joi.string().allow("").required(),
      dp_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
      plan_id: Joi.string().allow("").required(),
      plan_rules: Joi.any().required(),
      priority: Joi.number().required(),
      stage: Joi.string().allow("").required(),
    });
  }

  /** @returns {EinvoiceResponse} */
  static EinvoiceResponse() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {EntityRegionView_Error} */
  static EntityRegionView_Error() {
    return Joi.object({
      message: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {EntityRegionView_Items} */
  static EntityRegionView_Items() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      sub_type: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
    });
  }

  /** @returns {EntityRegionView_page} */
  static EntityRegionView_page() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {EntityRegionView_Request} */
  static EntityRegionView_Request() {
    return Joi.object({
      parent_id: Joi.array().items(Joi.string().allow("")),
      sub_type: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {EntityRegionView_Response} */
  static EntityRegionView_Response() {
    return Joi.object({
      data: Joi.array()
        .items(ServiceabilityPlatformModel.EntityRegionView_Items())
        .required(),
      error: ServiceabilityPlatformModel.EntityRegionView_Error().required(),
      page: ServiceabilityPlatformModel.EntityRegionView_page().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {EwayBillResponse} */
  static EwayBillResponse() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {FailureResponse} */
  static FailureResponse() {
    return Joi.object({
      error: Joi.array()
        .items(ServiceabilityPlatformModel.ErrorResponse())
        .required(),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {GetSingleZoneDataViewResponse} */
  static GetSingleZoneDataViewResponse() {
    return Joi.object({
      data: ServiceabilityPlatformModel.GetZoneDataViewItems().required(),
    });
  }

  /** @returns {GetStoresViewResponse} */
  static GetStoresViewResponse() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityPlatformModel.ItemResponse()),
      page: ServiceabilityPlatformModel.ServiceabilityPageResponse().required(),
    });
  }

  /** @returns {GetZoneDataViewChannels} */
  static GetZoneDataViewChannels() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      channel_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetZoneDataViewItems} */
  static GetZoneDataViewItems() {
    return Joi.object({
      assignment_preference: Joi.string().allow(""),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.GetZoneDataViewChannels())
        .required(),
      company_id: Joi.number(),
      is_active: Joi.boolean().required(),
      mapping: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneMappingType())
        .required(),
      name: Joi.string().allow("").required(),
      pincodes_count: Joi.number().required(),
      product: ServiceabilityPlatformModel.ZoneProductTypes().required(),
      region_type: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      stores_count: Joi.number().required(),
      zone_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetZoneFromApplicationIdViewResponse} */
  static GetZoneFromApplicationIdViewResponse() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewItems())
        .required(),
      page: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneDataItem())
        .required(),
    });
  }

  /** @returns {GetZoneFromPincodeViewRequest} */
  static GetZoneFromPincodeViewRequest() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetZoneFromPincodeViewResponse} */
  static GetZoneFromPincodeViewResponse() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),
      zones: Joi.array().items(ServiceabilityPlatformModel.Zone()).required(),
    });
  }

  /** @returns {GstCredentialsResponse} */
  static GstCredentialsResponse() {
    return Joi.object({
      e_invoice: ServiceabilityPlatformModel.EinvoiceResponse(),
      e_waybill: ServiceabilityPlatformModel.EwayBillResponse(),
    });
  }

  /** @returns {IntegrationTypeResponse} */
  static IntegrationTypeResponse() {
    return Joi.object({
      inventory: Joi.string().allow(""),
      order: Joi.string().allow(""),
    });
  }

  /** @returns {ItemResponse} */
  static ItemResponse() {
    return Joi.object({
      _cls: Joi.string().allow(""),
      _custom_json: Joi.any(),
      address: ServiceabilityPlatformModel.AddressResponse(),
      code: Joi.string().allow(""),
      company: Joi.number(),
      company_id: Joi.number(),
      contact_numbers: Joi.array().items(
        ServiceabilityPlatformModel.ContactNumberResponse()
      ),
      created_by: ServiceabilityPlatformModel.CreatedByResponse(),
      created_on: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      documents: Joi.array().items(
        ServiceabilityPlatformModel.DocumentsResponse()
      ),
      gst_credentials: ServiceabilityPlatformModel.GstCredentialsResponse(),
      integration_type: ServiceabilityPlatformModel.IntegrationTypeResponse(),
      logistics: ServiceabilityPlatformModel.LogisticsResponse(),
      manager: ServiceabilityPlatformModel.ManagerResponse(),
      modified_by: ServiceabilityPlatformModel.ModifiedByResponse(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      product_return_config: ServiceabilityPlatformModel.ProductReturnConfigResponse(),
      stage: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      timing: Joi.array().items(ServiceabilityPlatformModel.TimmingResponse()),
      uid: Joi.number(),
      verified_by: ServiceabilityPlatformModel.ModifiedByResponse(),
      verified_on: Joi.string().allow(""),
      warnings: ServiceabilityPlatformModel.WarningsResponse(),
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
      channels: ServiceabilityPlatformModel.ListViewChannels().required(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
      pincodes_count: Joi.number().required(),
      product: ServiceabilityPlatformModel.ListViewProduct().required(),
      slug: Joi.string().allow("").required(),
      stores_count: Joi.number().required(),
      zone_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ListViewProduct} */
  static ListViewProduct() {
    return Joi.object({
      count: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ListViewResponse} */
  static ListViewResponse() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewItems())
        .required(),
      page: ServiceabilityPlatformModel.ZoneDataItem().required(),
      summary: ServiceabilityPlatformModel.ListViewSummary().required(),
    });
  }

  /** @returns {ListViewSummary} */
  static ListViewSummary() {
    return Joi.object({
      total_active_zones: Joi.number().required(),
      total_pincodes_served: Joi.number().required(),
      total_zones: Joi.number().required(),
    });
  }

  /** @returns {LogisticsResponse} */
  static LogisticsResponse() {
    return Joi.object({
      dp: ServiceabilityPlatformModel.Dp(),
      override: Joi.boolean(),
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

  /** @returns {MobileNo} */
  static MobileNo() {
    return Joi.object({
      country_code: Joi.number(),
      number: Joi.string().allow(""),
    });
  }

  /** @returns {ModifiedByResponse} */
  static ModifiedByResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {OpeningClosing} */
  static OpeningClosing() {
    return Joi.object({
      hour: Joi.number(),
      minute: Joi.number(),
    });
  }

  /** @returns {Page} */
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

  /** @returns {PincodeBulkViewResponse} */
  static PincodeBulkViewResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      s3_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {PincodeCodStatusListingPage} */
  static PincodeCodStatusListingPage() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PincodeCodStatusListingRequest} */
  static PincodeCodStatusListingRequest() {
    return Joi.object({
      country: Joi.string().allow(""),
      current: Joi.number(),
      is_active: Joi.boolean(),
      page_size: Joi.number(),
      pincode: Joi.number().allow(null),
    });
  }

  /** @returns {PincodeCodStatusListingResponse} */
  static PincodeCodStatusListingResponse() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      data: Joi.array()
        .items(Joi.link("#PincodeCodStatusListingResponse"))
        .required(),
      errors: Joi.array().items(ServiceabilityPlatformModel.Error()),
      page: ServiceabilityPlatformModel.PincodeCodStatusListingPage().required(),
      success: Joi.boolean().required(),
      summary: ServiceabilityPlatformModel.PincodeCodStatusListingSummary().required(),
    });
  }

  /** @returns {PincodeCodStatusListingSummary} */
  static PincodeCodStatusListingSummary() {
    return Joi.object({
      total_active_pincodes: Joi.number().required(),
      total_inactive_pincodes: Joi.number().required(),
    });
  }

  /** @returns {PincodeMopBulkData} */
  static PincodeMopBulkData() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      s3_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {PincodeMopData} */
  static PincodeMopData() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      pincodes: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {PincodeMOPresponse} */
  static PincodeMOPresponse() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      batch_id: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      pincodes: Joi.array().items(Joi.number()),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
      updated_pincodes: Joi.array().items(
        ServiceabilityPlatformModel.PincodeMopUpdateResponse()
      ),
    });
  }

  /** @returns {PincodeMopUpdateAuditHistoryPaging} */
  static PincodeMopUpdateAuditHistoryPaging() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeMopUpdateAuditHistoryRequest} */
  static PincodeMopUpdateAuditHistoryRequest() {
    return Joi.object({
      entity_type: Joi.string().allow("").required(),
      file_name: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeMopUpdateAuditHistoryResponse} */
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

  /** @returns {PincodeMopUpdateAuditHistoryResponseData} */
  static PincodeMopUpdateAuditHistoryResponseData() {
    return Joi.object({
      data: Joi.array()
        .items(
          ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponse()
        )
        .required(),
      entity_type: Joi.string().allow(""),
      page: ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryPaging().required(),
    });
  }

  /** @returns {PincodeMopUpdateResponse} */
  static PincodeMopUpdateResponse() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      pincode: Joi.number().required(),
    });
  }

  /** @returns {ProductReturnConfigResponse} */
  static ProductReturnConfigResponse() {
    return Joi.object({
      on_same_store: Joi.boolean(),
    });
  }

  /** @returns {ReAssignStoreRequest} */
  static ReAssignStoreRequest() {
    return Joi.object({
      articles: Joi.array().items(Joi.any()).required(),
      configuration: Joi.any().required(),
      identifier: Joi.string().allow("").required(),
      ignored_locations: Joi.array().items(Joi.string().allow("")).required(),
      to_pincode: Joi.string().allow("").required(),
    });
  }

  /** @returns {ReAssignStoreResponse} */
  static ReAssignStoreResponse() {
    return Joi.object({
      articles: Joi.array().items(Joi.any()),
      error: Joi.any().required(),
      success: Joi.boolean().required(),
      to_pincode: Joi.string().allow("").required(),
    });
  }

  /** @returns {SelfShipResponse} */
  static SelfShipResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      tat: Joi.number().required(),
    });
  }

  /** @returns {ServiceabilityErrorResponse} */
  static ServiceabilityErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {ServiceabilityPageResponse} */
  static ServiceabilityPageResponse() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {ServiceabilityPayloadSchema} */
  static ServiceabilityPayloadSchema() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {TimmingResponse} */
  static TimmingResponse() {
    return Joi.object({
      closing: ServiceabilityPlatformModel.OpeningClosing(),
      open: Joi.boolean(),
      opening: ServiceabilityPlatformModel.OpeningClosing(),
      weekday: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateZoneData} */
  static UpdateZoneData() {
    return Joi.object({
      assignment_preference: Joi.string().allow(""),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.GetZoneDataViewChannels())
        .required(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      mapping: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneMappingType())
        .required(),
      name: Joi.string().allow("").required(),
      product: ServiceabilityPlatformModel.ZoneProductTypes().required(),
      region_type: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      zone_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {WarningsResponse} */
  static WarningsResponse() {
    return Joi.object({
      store_address: Joi.string().allow(""),
    });
  }

  /** @returns {Zone} */
  static Zone() {
    return Joi.object({
      assignment_preference: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      tags: Joi.array().items(Joi.string().allow("")).required(),
      type: Joi.string().allow("").required(),
      zone_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ZoneDataItem} */
  static ZoneDataItem() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      type: Joi.string().allow("").required(),
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

  /** @returns {ZoneProductTypes} */
  static ZoneProductTypes() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")).required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ZoneRequest} */
  static ZoneRequest() {
    return Joi.object({
      data: ServiceabilityPlatformModel.CreateZoneData().required(),
      identifier: Joi.string().allow("").required(),
    });
  }

  /** @returns {ZoneResponse} */
  static ZoneResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
      zone_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ZoneSuccessResponse} */
  static ZoneSuccessResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ZoneUpdateRequest} */
  static ZoneUpdateRequest() {
    return Joi.object({
      data: ServiceabilityPlatformModel.UpdateZoneData().required(),
      identifier: Joi.string().allow("").required(),
    });
  }
}
module.exports = ServiceabilityPlatformModel;
