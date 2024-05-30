export = ServiceabilityPlatformModel;
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
declare class ServiceabilityPlatformModel {
}
declare namespace ServiceabilityPlatformModel {
    export { ServiceabilityPayloadSchema, ServiceabilityErrorResponse, ApplicationServiceabilityConfig, ApplicationServiceabilityConfigResponse, EntityRegionView_Request, EntityRegionView_Error, EntityRegionView_page, EntityRegionView_Items, EntityRegionView_Response, ListViewSummary, ZoneDataItem, ListViewProduct, ListViewChannels, ListViewItems, ListViewResponse, CompanyStoreView_PageItems, CompanyStoreView_Response, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingType, UpdateZoneData, ZoneUpdateRequest, ZoneSuccessResponse, GetZoneDataViewItems, GetSingleZoneDataViewResponse, CreateZoneData, ZoneRequest, ZoneResponse, GetZoneFromPincodeViewRequest, Zone, GetZoneFromPincodeViewResponse, GetZoneFromApplicationIdViewResponse, ServiceabilityPageResponse, MobileNo, ManagerResponse, ModifiedByResponse, IntegrationTypeResponse, ProductReturnConfigResponse, ContactNumberResponse, AddressResponse, CreatedByResponse, EwayBillResponse, EinvoiceResponse, GstCredentialsResponse, WarningsResponse, OpeningClosing, TimmingResponse, DocumentsResponse, Dp, LogisticsResponse, ItemResponse, GetStoresViewResponse, ReAssignStoreRequest, ReAssignStoreResponse, ApplicationCompanyDpViewResponse, ApplicationCompanyDpViewRequest, PincodeMopData, PincodeMopUpdateResponse, PincodeMOPresponse, CommonError, PincodeMopBulkData, PincodeBulkViewResponse, PincodeCodStatusListingRequest, PincodeCodStatusListingResponse, Error, PincodeCodStatusListingPage, PincodeCodStatusListingSummary, PincodeMopUpdateAuditHistoryRequest, PincodeMopUpdateAuditHistoryPaging, PincodeMopUpdateAuditHistoryResponse, PincodeMopUpdateAuditHistoryResponseData, Dp1, CompanyDpAccountRequest, CompanyDpAccountResponse, ErrorResponse, DpAccountFailureResponse, Page, CompanyDpAccountListResponse, DpRulesUpdateRequest, DpRuleResponse, DpRuleUpdateSuccessResponse, FailureResponse, DpSchemaInRuleListing, DpRule, DpRuleSuccessResponse, DpIds, DpRuleRequest, DpMultipleRuleSuccessResponse, DPCompanyRuleRequest, DPCompanyRuleResponse, DPApplicationRuleRequest, DPApplicationRuleResponse, SelfShipResponse, ApplicationSelfShipConfig, ApplicationSelfShipConfigResponse };
}
/** @returns {ServiceabilityPayloadSchema} */
declare function ServiceabilityPayloadSchema(): ServiceabilityPayloadSchema;
type ServiceabilityPayloadSchema = {
    serviceability_type: string;
};
/** @returns {ServiceabilityErrorResponse} */
declare function ServiceabilityErrorResponse(): ServiceabilityErrorResponse;
type ServiceabilityErrorResponse = {
    message: string;
    value: string;
    type: string;
};
/** @returns {ApplicationServiceabilityConfig} */
declare function ApplicationServiceabilityConfig(): ApplicationServiceabilityConfig;
type ApplicationServiceabilityConfig = {
    channel_id: string;
    serviceability_type: string;
    channel_type: string;
};
/** @returns {ApplicationServiceabilityConfigResponse} */
declare function ApplicationServiceabilityConfigResponse(): ApplicationServiceabilityConfigResponse;
type ApplicationServiceabilityConfigResponse = {
    error?: ServiceabilityErrorResponse;
    data?: ApplicationServiceabilityConfig;
    success: boolean;
};
/** @returns {EntityRegionView_Request} */
declare function EntityRegionView_Request(): EntityRegionView_Request;
type EntityRegionView_Request = {
    sub_type: string[];
    parent_id?: string[];
};
/** @returns {EntityRegionView_Error} */
declare function EntityRegionView_Error(): EntityRegionView_Error;
type EntityRegionView_Error = {
    message?: string;
    value?: string;
    type?: string;
};
/** @returns {EntityRegionView_page} */
declare function EntityRegionView_page(): EntityRegionView_page;
type EntityRegionView_page = {
    type: string;
    has_next: boolean;
    item_total: number;
    size: number;
    current: number;
};
/** @returns {EntityRegionView_Items} */
declare function EntityRegionView_Items(): EntityRegionView_Items;
type EntityRegionView_Items = {
    sub_type: string;
    uid: string;
    name: string;
    display_name?: string;
};
/** @returns {EntityRegionView_Response} */
declare function EntityRegionView_Response(): EntityRegionView_Response;
type EntityRegionView_Response = {
    error: EntityRegionView_Error;
    page: EntityRegionView_page;
    items?: EntityRegionView_Items[];
    success: boolean;
};
/** @returns {ListViewSummary} */
declare function ListViewSummary(): ListViewSummary;
type ListViewSummary = {
    total_zones: number;
    total_pincodes_served: number;
    total_active_zones: number;
};
/** @returns {ZoneDataItem} */
declare function ZoneDataItem(): ZoneDataItem;
type ZoneDataItem = {
    has_next: boolean;
    item_total: number;
    size: number;
    current: number;
    type: string;
};
/** @returns {ListViewProduct} */
declare function ListViewProduct(): ListViewProduct;
type ListViewProduct = {
    count: number;
    type: string;
};
/** @returns {ListViewChannels} */
declare function ListViewChannels(): ListViewChannels;
type ListViewChannels = {
    channel_id: string;
    channel_type: string;
};
/** @returns {ListViewItems} */
declare function ListViewItems(): ListViewItems;
type ListViewItems = {
    zone_id: string;
    name: string;
    slug: string;
    stores_count: number;
    is_active: boolean;
    product: ListViewProduct;
    pincodes_count: number;
    company_id: number;
    channels: ListViewChannels[];
};
/** @returns {ListViewResponse} */
declare function ListViewResponse(): ListViewResponse;
type ListViewResponse = {
    summary: ListViewSummary;
    page: ZoneDataItem;
    items: ListViewItems[];
};
/** @returns {CompanyStoreView_PageItems} */
declare function CompanyStoreView_PageItems(): CompanyStoreView_PageItems;
type CompanyStoreView_PageItems = {
    type: string;
    has_next: boolean;
    item_total: number;
    size: number;
    current: number;
};
/** @returns {CompanyStoreView_Response} */
declare function CompanyStoreView_Response(): CompanyStoreView_Response;
type CompanyStoreView_Response = {
    page: CompanyStoreView_PageItems[];
    items?: any[];
};
/** @returns {GetZoneDataViewChannels} */
declare function GetZoneDataViewChannels(): GetZoneDataViewChannels;
type GetZoneDataViewChannels = {
    channel_id: string;
    channel_type: string;
};
/** @returns {ZoneProductTypes} */
declare function ZoneProductTypes(): ZoneProductTypes;
type ZoneProductTypes = {
    type: string;
    tags: string[];
};
/** @returns {ZoneMappingType} */
declare function ZoneMappingType(): ZoneMappingType;
type ZoneMappingType = {
    country: string;
    pincode?: string[];
    state?: string[];
};
/** @returns {UpdateZoneData} */
declare function UpdateZoneData(): UpdateZoneData;
type UpdateZoneData = {
    zone_id: string;
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
};
/** @returns {ZoneUpdateRequest} */
declare function ZoneUpdateRequest(): ZoneUpdateRequest;
type ZoneUpdateRequest = {
    identifier: string;
    data: UpdateZoneData;
};
/** @returns {ZoneSuccessResponse} */
declare function ZoneSuccessResponse(): ZoneSuccessResponse;
type ZoneSuccessResponse = {
    status_code: number;
    success: boolean;
};
/** @returns {GetZoneDataViewItems} */
declare function GetZoneDataViewItems(): GetZoneDataViewItems;
type GetZoneDataViewItems = {
    zone_id: string;
    name: string;
    slug: string;
    company_id?: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
    stores_count: number;
    pincodes_count: number;
};
/** @returns {GetSingleZoneDataViewResponse} */
declare function GetSingleZoneDataViewResponse(): GetSingleZoneDataViewResponse;
type GetSingleZoneDataViewResponse = {
    data: GetZoneDataViewItems;
};
/** @returns {CreateZoneData} */
declare function CreateZoneData(): CreateZoneData;
type CreateZoneData = {
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
};
/** @returns {ZoneRequest} */
declare function ZoneRequest(): ZoneRequest;
type ZoneRequest = {
    identifier: string;
    data: CreateZoneData;
};
/** @returns {ZoneResponse} */
declare function ZoneResponse(): ZoneResponse;
type ZoneResponse = {
    status_code: number;
    zone_id: string;
    success: boolean;
};
/** @returns {GetZoneFromPincodeViewRequest} */
declare function GetZoneFromPincodeViewRequest(): GetZoneFromPincodeViewRequest;
type GetZoneFromPincodeViewRequest = {
    country: string;
    pincode: string;
};
/** @returns {Zone} */
declare function Zone(): Zone;
type Zone = {
    zone_id: string;
    type: string;
    name: string;
    tags: string[];
    slug: string;
    is_active: boolean;
    store_ids: number[];
    assignment_preference: string;
};
/** @returns {GetZoneFromPincodeViewResponse} */
declare function GetZoneFromPincodeViewResponse(): GetZoneFromPincodeViewResponse;
type GetZoneFromPincodeViewResponse = {
    serviceability_type: string;
    zones: Zone[];
};
/** @returns {GetZoneFromApplicationIdViewResponse} */
declare function GetZoneFromApplicationIdViewResponse(): GetZoneFromApplicationIdViewResponse;
type GetZoneFromApplicationIdViewResponse = {
    page: ZoneDataItem[];
    items: ListViewItems[];
};
/** @returns {ServiceabilityPageResponse} */
declare function ServiceabilityPageResponse(): ServiceabilityPageResponse;
type ServiceabilityPageResponse = {
    type?: string;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    current?: number;
};
/** @returns {MobileNo} */
declare function MobileNo(): MobileNo;
type MobileNo = {
    number?: string;
    country_code?: number;
};
/** @returns {ManagerResponse} */
declare function ManagerResponse(): ManagerResponse;
type ManagerResponse = {
    email?: string;
    mobile_no?: MobileNo;
    name?: string;
};
/** @returns {ModifiedByResponse} */
declare function ModifiedByResponse(): ModifiedByResponse;
type ModifiedByResponse = {
    username?: string;
    user_id?: string;
};
/** @returns {IntegrationTypeResponse} */
declare function IntegrationTypeResponse(): IntegrationTypeResponse;
type IntegrationTypeResponse = {
    inventory?: string;
    order?: string;
};
/** @returns {ProductReturnConfigResponse} */
declare function ProductReturnConfigResponse(): ProductReturnConfigResponse;
type ProductReturnConfigResponse = {
    on_same_store?: boolean;
};
/** @returns {ContactNumberResponse} */
declare function ContactNumberResponse(): ContactNumberResponse;
type ContactNumberResponse = {
    number?: string;
    country_code?: number;
};
/** @returns {AddressResponse} */
declare function AddressResponse(): AddressResponse;
type AddressResponse = {
    city?: string;
    address1?: string;
    pincode?: number;
    address2?: string;
    landmark?: string;
    state?: string;
    country?: string;
    latitude?: number;
    longitude?: number;
};
/** @returns {CreatedByResponse} */
declare function CreatedByResponse(): CreatedByResponse;
type CreatedByResponse = {
    username?: string;
    user_id?: string;
};
/** @returns {EwayBillResponse} */
declare function EwayBillResponse(): EwayBillResponse;
type EwayBillResponse = {
    enabled?: boolean;
};
/** @returns {EinvoiceResponse} */
declare function EinvoiceResponse(): EinvoiceResponse;
type EinvoiceResponse = {
    enabled?: boolean;
};
/** @returns {GstCredentialsResponse} */
declare function GstCredentialsResponse(): GstCredentialsResponse;
type GstCredentialsResponse = {
    e_waybill?: EwayBillResponse;
    e_invoice?: EinvoiceResponse;
};
/** @returns {WarningsResponse} */
declare function WarningsResponse(): WarningsResponse;
type WarningsResponse = {
    store_address?: string;
};
/** @returns {OpeningClosing} */
declare function OpeningClosing(): OpeningClosing;
type OpeningClosing = {
    minute?: number;
    hour?: number;
};
/** @returns {TimmingResponse} */
declare function TimmingResponse(): TimmingResponse;
type TimmingResponse = {
    open?: boolean;
    weekday?: string;
    closing?: OpeningClosing;
    opening?: OpeningClosing;
};
/** @returns {DocumentsResponse} */
declare function DocumentsResponse(): DocumentsResponse;
type DocumentsResponse = {
    legal_name?: string;
    value?: string;
    type?: string;
    verified?: boolean;
};
/** @returns {Dp} */
declare function Dp(): Dp;
type Dp = {
    fm_priority?: number;
    rvp_priority?: number;
    lm_priority?: number;
    internal_account_id?: string;
    area_code?: number;
    payment_mode?: string;
    operations?: string[];
    external_account_id?: string;
    transport_mode?: string;
    assign_dp_from_sb?: boolean;
};
/** @returns {LogisticsResponse} */
declare function LogisticsResponse(): LogisticsResponse;
type LogisticsResponse = {
    override?: boolean;
    dp?: Dp;
};
/** @returns {ItemResponse} */
declare function ItemResponse(): ItemResponse;
type ItemResponse = {
    created_on?: string;
    manager?: ManagerResponse;
    modified_by?: ModifiedByResponse;
    integration_type?: IntegrationTypeResponse;
    verified_on?: string;
    product_return_config?: ProductReturnConfigResponse;
    contact_numbers?: ContactNumberResponse[];
    verified_by?: ModifiedByResponse;
    stage?: string;
    address?: AddressResponse;
    modified_on?: string;
    created_by?: CreatedByResponse;
    gst_credentials?: GstCredentialsResponse;
    display_name?: string;
    company_id?: number;
    uid?: number;
    _custom_json?: any;
    code?: string;
    warnings?: WarningsResponse;
    name?: string;
    timing?: TimmingResponse[];
    documents?: DocumentsResponse[];
    store_type?: string;
    sub_type?: string;
    company?: number;
    _cls?: string;
    logistics?: LogisticsResponse;
    notification_emails?: string[];
};
/** @returns {GetStoresViewResponse} */
declare function GetStoresViewResponse(): GetStoresViewResponse;
type GetStoresViewResponse = {
    page: ServiceabilityPageResponse;
    items?: ItemResponse[];
};
/** @returns {ReAssignStoreRequest} */
declare function ReAssignStoreRequest(): ReAssignStoreRequest;
type ReAssignStoreRequest = {
    to_pincode: string;
    identifier: string;
    configuration: any;
    ignored_locations: string[];
    articles: any[];
};
/** @returns {ReAssignStoreResponse} */
declare function ReAssignStoreResponse(): ReAssignStoreResponse;
type ReAssignStoreResponse = {
    to_pincode: string;
    success: boolean;
    error: any;
    articles?: any[];
};
/** @returns {ApplicationCompanyDpViewResponse} */
declare function ApplicationCompanyDpViewResponse(): ApplicationCompanyDpViewResponse;
type ApplicationCompanyDpViewResponse = {
    courier_partner_id?: number;
    company_id: number;
    application_id: string;
    success: boolean;
};
/** @returns {ApplicationCompanyDpViewRequest} */
declare function ApplicationCompanyDpViewRequest(): ApplicationCompanyDpViewRequest;
type ApplicationCompanyDpViewRequest = {
    dp_id?: string;
};
/** @returns {PincodeMopData} */
declare function PincodeMopData(): PincodeMopData;
type PincodeMopData = {
    pincodes: number[];
    country: string;
    action: string;
};
/** @returns {PincodeMopUpdateResponse} */
declare function PincodeMopUpdateResponse(): PincodeMopUpdateResponse;
type PincodeMopUpdateResponse = {
    pincode: number;
    channel_id: string;
    country: string;
    is_active: boolean;
};
/** @returns {PincodeMOPresponse} */
declare function PincodeMOPresponse(): PincodeMOPresponse;
type PincodeMOPresponse = {
    success: boolean;
    status_code: number;
    batch_id: string;
    country: string;
    action: string;
    pincodes?: number[];
    updated_pincodes?: PincodeMopUpdateResponse[];
};
/** @returns {CommonError} */
declare function CommonError(): CommonError;
type CommonError = {
    status_code?: string;
    error?: any;
    success?: string;
};
/** @returns {PincodeMopBulkData} */
declare function PincodeMopBulkData(): PincodeMopBulkData;
type PincodeMopBulkData = {
    batch_id: string;
    s3_url: string;
};
/** @returns {PincodeBulkViewResponse} */
declare function PincodeBulkViewResponse(): PincodeBulkViewResponse;
type PincodeBulkViewResponse = {
    batch_id: string;
    s3_url: string;
};
/** @returns {PincodeCodStatusListingRequest} */
declare function PincodeCodStatusListingRequest(): PincodeCodStatusListingRequest;
type PincodeCodStatusListingRequest = {
    country?: string;
    is_active?: boolean;
    pincode?: number;
    current?: number;
    page_size?: number;
};
/** @returns {PincodeCodStatusListingResponse} */
declare function PincodeCodStatusListingResponse(): PincodeCodStatusListingResponse;
type PincodeCodStatusListingResponse = {
    country: string;
    data: PincodeCodStatusListingResponse[];
    success: boolean;
    errors?: Error[];
    page: PincodeCodStatusListingPage;
    summary: PincodeCodStatusListingSummary;
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    type?: string;
    value?: string;
    message?: string;
};
/** @returns {PincodeCodStatusListingPage} */
declare function PincodeCodStatusListingPage(): PincodeCodStatusListingPage;
type PincodeCodStatusListingPage = {
    type: string;
    has_next: boolean;
    item_total: number;
    size: number;
    current: number;
};
/** @returns {PincodeCodStatusListingSummary} */
declare function PincodeCodStatusListingSummary(): PincodeCodStatusListingSummary;
type PincodeCodStatusListingSummary = {
    total_active_pincodes: number;
    total_inactive_pincodes: number;
};
/** @returns {PincodeMopUpdateAuditHistoryRequest} */
declare function PincodeMopUpdateAuditHistoryRequest(): PincodeMopUpdateAuditHistoryRequest;
type PincodeMopUpdateAuditHistoryRequest = {
    entity_type: string;
    file_name?: string;
};
/** @returns {PincodeMopUpdateAuditHistoryPaging} */
declare function PincodeMopUpdateAuditHistoryPaging(): PincodeMopUpdateAuditHistoryPaging;
type PincodeMopUpdateAuditHistoryPaging = {
    type?: string;
    size?: number;
    current?: number;
    has_next?: boolean;
    item_total?: number;
};
/** @returns {PincodeMopUpdateAuditHistoryResponse} */
declare function PincodeMopUpdateAuditHistoryResponse(): PincodeMopUpdateAuditHistoryResponse;
type PincodeMopUpdateAuditHistoryResponse = {
    batch_id?: string;
    entity_type?: string;
    error_file_s3_url?: string;
    s3_url?: string;
    file_name?: string;
    updated_at?: string;
    updated_by?: string;
    success?: boolean;
};
/** @returns {PincodeMopUpdateAuditHistoryResponseData} */
declare function PincodeMopUpdateAuditHistoryResponseData(): PincodeMopUpdateAuditHistoryResponseData;
type PincodeMopUpdateAuditHistoryResponseData = {
    entity_type?: string;
    page: PincodeMopUpdateAuditHistoryPaging;
    data: PincodeMopUpdateAuditHistoryResponse[];
};
/** @returns {Dp1} */
declare function Dp1(): Dp1;
type Dp1 = {
    is_self_ship: boolean;
    name: string;
    plan_id: string;
    stage: string;
    account_id: string;
    dp_id: string;
    plan_rules: any;
};
/** @returns {CompanyDpAccountRequest} */
declare function CompanyDpAccountRequest(): CompanyDpAccountRequest;
type CompanyDpAccountRequest = {
    data: Dp1[];
};
/** @returns {CompanyDpAccountResponse} */
declare function CompanyDpAccountResponse(): CompanyDpAccountResponse;
type CompanyDpAccountResponse = {
    success: boolean;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    message: string;
    value: string;
    type: string;
};
/** @returns {DpAccountFailureResponse} */
declare function DpAccountFailureResponse(): DpAccountFailureResponse;
type DpAccountFailureResponse = {
    status_code: number;
    error: ErrorResponse[];
    success: boolean;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
};
/** @returns {CompanyDpAccountListResponse} */
declare function CompanyDpAccountListResponse(): CompanyDpAccountListResponse;
type CompanyDpAccountListResponse = {
    success: boolean;
    page: Page;
    items: Dp1[];
};
/** @returns {DpRulesUpdateRequest} */
declare function DpRulesUpdateRequest(): DpRulesUpdateRequest;
type DpRulesUpdateRequest = {
    is_active: boolean;
    conditions: any[];
    dp_ids: any;
    name: string;
};
/** @returns {DpRuleResponse} */
declare function DpRuleResponse(): DpRuleResponse;
type DpRuleResponse = {
    created_on?: string;
    name: string;
    modified_by?: any;
    dp_ids: any;
    is_active?: boolean;
    modified_on?: string;
    uid: string;
    created_by?: any;
    company_id: number;
    conditions: string[];
};
/** @returns {DpRuleUpdateSuccessResponse} */
declare function DpRuleUpdateSuccessResponse(): DpRuleUpdateSuccessResponse;
type DpRuleUpdateSuccessResponse = {
    status_code: number;
    data: DpRuleResponse;
    success: boolean;
};
/** @returns {FailureResponse} */
declare function FailureResponse(): FailureResponse;
type FailureResponse = {
    status_code: number;
    error: ErrorResponse[];
    success: boolean;
};
/** @returns {DpSchemaInRuleListing} */
declare function DpSchemaInRuleListing(): DpSchemaInRuleListing;
type DpSchemaInRuleListing = {
    is_self_ship: boolean;
    name: string;
    plan_id: string;
    stage: string;
    account_id: string;
    priority: number;
    dp_id: string;
    plan_rules: any;
};
/** @returns {DpRule} */
declare function DpRule(): DpRule;
type DpRule = {
    name: string;
    dp_ids: any;
    is_active?: boolean;
    company_id?: number;
    conditions: any[];
};
/** @returns {DpRuleSuccessResponse} */
declare function DpRuleSuccessResponse(): DpRuleSuccessResponse;
type DpRuleSuccessResponse = {
    status_code: number;
    data: DpRule;
    success: boolean;
};
/** @returns {DpIds} */
declare function DpIds(): DpIds;
type DpIds = {
    enabled: boolean;
    priority: number;
    meta?: any;
};
/** @returns {DpRuleRequest} */
declare function DpRuleRequest(): DpRuleRequest;
type DpRuleRequest = {
    name: string;
    dp_ids: any;
    is_active?: boolean;
    company_id?: number;
    conditions: any[];
};
/** @returns {DpMultipleRuleSuccessResponse} */
declare function DpMultipleRuleSuccessResponse(): DpMultipleRuleSuccessResponse;
type DpMultipleRuleSuccessResponse = {
    success: boolean;
    page: Page;
    items: DpRule[];
};
/** @returns {DPCompanyRuleRequest} */
declare function DPCompanyRuleRequest(): DPCompanyRuleRequest;
type DPCompanyRuleRequest = {
    rule_ids: string[];
};
/** @returns {DPCompanyRuleResponse} */
declare function DPCompanyRuleResponse(): DPCompanyRuleResponse;
type DPCompanyRuleResponse = {
    status_code: number;
    data: DpRuleResponse[];
    success: boolean;
};
/** @returns {DPApplicationRuleRequest} */
declare function DPApplicationRuleRequest(): DPApplicationRuleRequest;
type DPApplicationRuleRequest = {
    shipping_rules: string[];
};
/** @returns {DPApplicationRuleResponse} */
declare function DPApplicationRuleResponse(): DPApplicationRuleResponse;
type DPApplicationRuleResponse = {
    status_code: boolean;
    data: DpRuleResponse[];
    success: boolean;
};
/** @returns {SelfShipResponse} */
declare function SelfShipResponse(): SelfShipResponse;
type SelfShipResponse = {
    is_active: boolean;
    tat: number;
};
/** @returns {ApplicationSelfShipConfig} */
declare function ApplicationSelfShipConfig(): ApplicationSelfShipConfig;
type ApplicationSelfShipConfig = {
    self_ship?: any;
};
/** @returns {ApplicationSelfShipConfigResponse} */
declare function ApplicationSelfShipConfigResponse(): ApplicationSelfShipConfigResponse;
type ApplicationSelfShipConfigResponse = {
    error?: ServiceabilityErrorResponse;
    data?: ApplicationSelfShipConfig;
    success: boolean;
};
