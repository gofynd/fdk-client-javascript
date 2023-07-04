export = ServiceabilityPlatformModel;
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
 * @property {SelfShipResponse} [self_ship]
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
 * @property {string[]} zones
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
 * @property {ZoneDataItem[]} page
 * @property {ListViewSummary[]} summary
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
declare class ServiceabilityPlatformModel {
}
declare namespace ServiceabilityPlatformModel {
    export { AddressResponse, ApplicationCompanyDpViewRequest, ApplicationCompanyDpViewResponse, ApplicationSelfShipConfig, ApplicationSelfShipConfigResponse, ApplicationServiceabilityConfig, ApplicationServiceabilityConfigResponse, CommonError, CompanyDpAccountListResponse, CompanyDpAccountRequest, CompanyDpAccountResponse, CompanyStoreView_PageItems, CompanyStoreView_Response, ContactNumberResponse, CreatedByResponse, CreateZoneData, DocumentsResponse, Dp, Dp1, DpAccountFailureResponse, DPApplicationRuleRequest, DPApplicationRuleResponse, DPCompanyRuleRequest, DPCompanyRuleResponse, DpIds, DpMultipleRuleSuccessResponse, DpRule, DpRuleRequest, DpRuleResponse, DpRuleSuccessResponse, DpRulesUpdateRequest, DpRuleUpdateSuccessResponse, DpSchemaInRuleListing, EinvoiceResponse, EntityRegionView_Error, EntityRegionView_Items, EntityRegionView_page, EntityRegionView_Request, EntityRegionView_Response, Error, ErrorResponse, EwayBillResponse, FailureResponse, GetSingleZoneDataViewResponse, GetStoresViewResponse, GetZoneDataViewChannels, GetZoneDataViewItems, GetZoneFromApplicationIdViewResponse, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, GstCredentialsResponse, IntegrationTypeResponse, ItemResponse, ListViewChannels, ListViewItems, ListViewProduct, ListViewResponse, ListViewSummary, LogisticsResponse, ManagerResponse, MobileNo, ModifiedByResponse, OpeningClosing, Page, PincodeBulkViewResponse, PincodeCodStatusListingPage, PincodeCodStatusListingRequest, PincodeCodStatusListingResponse, PincodeCodStatusListingSummary, PincodeMopBulkData, PincodeMopData, PincodeMOPresponse, PincodeMopUpdateAuditHistoryPaging, PincodeMopUpdateAuditHistoryRequest, PincodeMopUpdateAuditHistoryResponse, PincodeMopUpdateAuditHistoryResponseData, PincodeMopUpdateResponse, ProductReturnConfigResponse, ReAssignStoreRequest, ReAssignStoreResponse, SelfShipResponse, ServiceabilityErrorResponse, ServiceabilityPageResponse, TimmingResponse, UpdateZoneData, WarningsResponse, ZoneDataItem, ZoneMappingType, ZoneProductTypes, ZoneRequest, ZoneResponse, ZoneSuccessResponse, ZoneUpdateRequest };
}
/** @returns {AddressResponse} */
declare function AddressResponse(): AddressResponse;
type AddressResponse = {
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    pincode?: number;
    state?: string;
};
/** @returns {ApplicationCompanyDpViewRequest} */
declare function ApplicationCompanyDpViewRequest(): ApplicationCompanyDpViewRequest;
type ApplicationCompanyDpViewRequest = {
    dp_id?: string;
};
/** @returns {ApplicationCompanyDpViewResponse} */
declare function ApplicationCompanyDpViewResponse(): ApplicationCompanyDpViewResponse;
type ApplicationCompanyDpViewResponse = {
    application_id: string;
    company_id: number;
    courier_partner_id?: number;
    success: boolean;
};
/** @returns {ApplicationSelfShipConfig} */
declare function ApplicationSelfShipConfig(): ApplicationSelfShipConfig;
type ApplicationSelfShipConfig = {
    self_ship?: SelfShipResponse;
};
/** @returns {ApplicationSelfShipConfigResponse} */
declare function ApplicationSelfShipConfigResponse(): ApplicationSelfShipConfigResponse;
type ApplicationSelfShipConfigResponse = {
    data?: ApplicationSelfShipConfig;
    error?: ServiceabilityErrorResponse;
    success: boolean;
};
/** @returns {ApplicationServiceabilityConfig} */
declare function ApplicationServiceabilityConfig(): ApplicationServiceabilityConfig;
type ApplicationServiceabilityConfig = {
    channel_id: string;
    channel_type: string;
    serviceability_type: string;
};
/** @returns {ApplicationServiceabilityConfigResponse} */
declare function ApplicationServiceabilityConfigResponse(): ApplicationServiceabilityConfigResponse;
type ApplicationServiceabilityConfigResponse = {
    data?: ApplicationServiceabilityConfig;
    error?: ServiceabilityErrorResponse;
    success: boolean;
};
/** @returns {CommonError} */
declare function CommonError(): CommonError;
type CommonError = {
    error?: any;
    status_code?: string;
    success?: string;
};
/** @returns {CompanyDpAccountListResponse} */
declare function CompanyDpAccountListResponse(): CompanyDpAccountListResponse;
type CompanyDpAccountListResponse = {
    items: Dp1[];
    page: Page;
    success: boolean;
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
/** @returns {CompanyStoreView_PageItems} */
declare function CompanyStoreView_PageItems(): CompanyStoreView_PageItems;
type CompanyStoreView_PageItems = {
    current: number;
    has_next: boolean;
    item_total: number;
    size: number;
    type: string;
};
/** @returns {CompanyStoreView_Response} */
declare function CompanyStoreView_Response(): CompanyStoreView_Response;
type CompanyStoreView_Response = {
    items?: any[];
    page: CompanyStoreView_PageItems[];
};
/** @returns {ContactNumberResponse} */
declare function ContactNumberResponse(): ContactNumberResponse;
type ContactNumberResponse = {
    country_code?: number;
    number?: string;
};
/** @returns {CreatedByResponse} */
declare function CreatedByResponse(): CreatedByResponse;
type CreatedByResponse = {
    user_id?: string;
    username?: string;
};
/** @returns {CreateZoneData} */
declare function CreateZoneData(): CreateZoneData;
type CreateZoneData = {
    assignment_preference?: string;
    channels: GetZoneDataViewChannels[];
    company_id: number;
    is_active: boolean;
    mapping: ZoneMappingType[];
    name: string;
    product: ZoneProductTypes;
    region_type: string;
    slug: string;
    store_ids: number[];
};
/** @returns {DocumentsResponse} */
declare function DocumentsResponse(): DocumentsResponse;
type DocumentsResponse = {
    legal_name?: string;
    type?: string;
    value?: string;
    verified?: boolean;
};
/** @returns {Dp} */
declare function Dp(): Dp;
type Dp = {
    area_code?: number;
    assign_dp_from_sb?: boolean;
    external_account_id?: string;
    fm_priority?: number;
    internal_account_id?: string;
    lm_priority?: number;
    operations?: string[];
    payment_mode?: string;
    rvp_priority?: number;
    transport_mode?: string;
};
/** @returns {Dp1} */
declare function Dp1(): Dp1;
type Dp1 = {
    account_id: string;
    dp_id: string;
    is_self_ship: boolean;
    name: string;
    plan_id: string;
    plan_rules: any;
    stage: string;
};
/** @returns {DpAccountFailureResponse} */
declare function DpAccountFailureResponse(): DpAccountFailureResponse;
type DpAccountFailureResponse = {
    error: ErrorResponse[];
    status_code: number;
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
    data: DpRuleResponse[];
    status_code: boolean;
    success: boolean;
};
/** @returns {DPCompanyRuleRequest} */
declare function DPCompanyRuleRequest(): DPCompanyRuleRequest;
type DPCompanyRuleRequest = {
    rule_ids: string[];
};
/** @returns {DPCompanyRuleResponse} */
declare function DPCompanyRuleResponse(): DPCompanyRuleResponse;
type DPCompanyRuleResponse = {
    data: DpRuleResponse[];
    status_code: number;
    success: boolean;
};
/** @returns {DpIds} */
declare function DpIds(): DpIds;
type DpIds = {
    enabled: boolean;
    meta?: any;
    priority: number;
};
/** @returns {DpMultipleRuleSuccessResponse} */
declare function DpMultipleRuleSuccessResponse(): DpMultipleRuleSuccessResponse;
type DpMultipleRuleSuccessResponse = {
    items: DpRule[];
    page: Page;
    success: boolean;
};
/** @returns {DpRule} */
declare function DpRule(): DpRule;
type DpRule = {
    company_id?: number;
    conditions: any[];
    dp_ids: any;
    is_active?: boolean;
    name: string;
};
/** @returns {DpRuleRequest} */
declare function DpRuleRequest(): DpRuleRequest;
type DpRuleRequest = {
    company_id?: number;
    conditions: any[];
    dp_ids: any;
    is_active?: boolean;
    name: string;
};
/** @returns {DpRuleResponse} */
declare function DpRuleResponse(): DpRuleResponse;
type DpRuleResponse = {
    company_id: number;
    conditions: string[];
    created_by?: any;
    created_on?: string;
    dp_ids: any;
    is_active?: boolean;
    modified_by?: any;
    modified_on?: string;
    name: string;
    uid: string;
};
/** @returns {DpRuleSuccessResponse} */
declare function DpRuleSuccessResponse(): DpRuleSuccessResponse;
type DpRuleSuccessResponse = {
    data: DpRule;
    status_code: number;
    success: boolean;
};
/** @returns {DpRulesUpdateRequest} */
declare function DpRulesUpdateRequest(): DpRulesUpdateRequest;
type DpRulesUpdateRequest = {
    conditions: any[];
    dp_ids: any;
    is_active: boolean;
    name: string;
};
/** @returns {DpRuleUpdateSuccessResponse} */
declare function DpRuleUpdateSuccessResponse(): DpRuleUpdateSuccessResponse;
type DpRuleUpdateSuccessResponse = {
    data: DpRuleResponse;
    status_code: number;
    success: boolean;
};
/** @returns {DpSchemaInRuleListing} */
declare function DpSchemaInRuleListing(): DpSchemaInRuleListing;
type DpSchemaInRuleListing = {
    account_id: string;
    dp_id: string;
    is_self_ship: boolean;
    name: string;
    plan_id: string;
    plan_rules: any;
    priority: number;
    stage: string;
};
/** @returns {EinvoiceResponse} */
declare function EinvoiceResponse(): EinvoiceResponse;
type EinvoiceResponse = {
    enabled?: boolean;
};
/** @returns {EntityRegionView_Error} */
declare function EntityRegionView_Error(): EntityRegionView_Error;
type EntityRegionView_Error = {
    message?: string;
    type?: string;
    value?: string;
};
/** @returns {EntityRegionView_Items} */
declare function EntityRegionView_Items(): EntityRegionView_Items;
type EntityRegionView_Items = {
    name: string;
    sub_type: string;
    uid: string;
};
/** @returns {EntityRegionView_page} */
declare function EntityRegionView_page(): EntityRegionView_page;
type EntityRegionView_page = {
    current: number;
    has_next: boolean;
    item_total: number;
    size: number;
    type: string;
};
/** @returns {EntityRegionView_Request} */
declare function EntityRegionView_Request(): EntityRegionView_Request;
type EntityRegionView_Request = {
    parent_id?: string[];
    sub_type: string[];
};
/** @returns {EntityRegionView_Response} */
declare function EntityRegionView_Response(): EntityRegionView_Response;
type EntityRegionView_Response = {
    data: EntityRegionView_Items[];
    error: EntityRegionView_Error;
    page: EntityRegionView_page;
    success: boolean;
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    message?: string;
    type?: string;
    value?: string;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    message: string;
    type: string;
    value: string;
};
/** @returns {EwayBillResponse} */
declare function EwayBillResponse(): EwayBillResponse;
type EwayBillResponse = {
    enabled?: boolean;
};
/** @returns {FailureResponse} */
declare function FailureResponse(): FailureResponse;
type FailureResponse = {
    error: ErrorResponse[];
    status_code: number;
    success: boolean;
};
/** @returns {GetSingleZoneDataViewResponse} */
declare function GetSingleZoneDataViewResponse(): GetSingleZoneDataViewResponse;
type GetSingleZoneDataViewResponse = {
    data: GetZoneDataViewItems;
};
/** @returns {GetStoresViewResponse} */
declare function GetStoresViewResponse(): GetStoresViewResponse;
type GetStoresViewResponse = {
    items?: ItemResponse[];
    page: ServiceabilityPageResponse;
};
/** @returns {GetZoneDataViewChannels} */
declare function GetZoneDataViewChannels(): GetZoneDataViewChannels;
type GetZoneDataViewChannels = {
    channel_id: string;
    channel_type: string;
};
/** @returns {GetZoneDataViewItems} */
declare function GetZoneDataViewItems(): GetZoneDataViewItems;
type GetZoneDataViewItems = {
    assignment_preference?: string;
    channels: GetZoneDataViewChannels[];
    company_id?: number;
    is_active: boolean;
    mapping: ZoneMappingType[];
    name: string;
    pincodes_count: number;
    product: ZoneProductTypes;
    region_type: string;
    slug: string;
    store_ids: number[];
    stores_count: number;
    zone_id: string;
};
/** @returns {GetZoneFromApplicationIdViewResponse} */
declare function GetZoneFromApplicationIdViewResponse(): GetZoneFromApplicationIdViewResponse;
type GetZoneFromApplicationIdViewResponse = {
    items: ListViewItems[];
    page: ZoneDataItem[];
};
/** @returns {GetZoneFromPincodeViewRequest} */
declare function GetZoneFromPincodeViewRequest(): GetZoneFromPincodeViewRequest;
type GetZoneFromPincodeViewRequest = {
    country: string;
    pincode: string;
};
/** @returns {GetZoneFromPincodeViewResponse} */
declare function GetZoneFromPincodeViewResponse(): GetZoneFromPincodeViewResponse;
type GetZoneFromPincodeViewResponse = {
    serviceability_type: string;
    zones: string[];
};
/** @returns {GstCredentialsResponse} */
declare function GstCredentialsResponse(): GstCredentialsResponse;
type GstCredentialsResponse = {
    e_invoice?: EinvoiceResponse;
    e_waybill?: EwayBillResponse;
};
/** @returns {IntegrationTypeResponse} */
declare function IntegrationTypeResponse(): IntegrationTypeResponse;
type IntegrationTypeResponse = {
    inventory?: string;
    order?: string;
};
/** @returns {ItemResponse} */
declare function ItemResponse(): ItemResponse;
type ItemResponse = {
    _cls?: string;
    _custom_json?: any;
    address?: AddressResponse;
    code?: string;
    company?: number;
    company_id?: number;
    contact_numbers?: ContactNumberResponse[];
    created_by?: CreatedByResponse;
    created_on?: string;
    display_name?: string;
    documents?: DocumentsResponse[];
    gst_credentials?: GstCredentialsResponse;
    integration_type?: IntegrationTypeResponse;
    logistics?: LogisticsResponse;
    manager?: ManagerResponse;
    modified_by?: ModifiedByResponse;
    modified_on?: string;
    name?: string;
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigResponse;
    stage?: string;
    store_type?: string;
    sub_type?: string;
    timing?: TimmingResponse[];
    uid?: number;
    verified_by?: ModifiedByResponse;
    verified_on?: string;
    warnings?: WarningsResponse;
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
    channels: ListViewChannels;
    company_id: number;
    is_active: boolean;
    name: string;
    pincodes_count: number;
    product: ListViewProduct;
    slug: string;
    stores_count: number;
    zone_id: string;
};
/** @returns {ListViewProduct} */
declare function ListViewProduct(): ListViewProduct;
type ListViewProduct = {
    count: number;
    type: string;
};
/** @returns {ListViewResponse} */
declare function ListViewResponse(): ListViewResponse;
type ListViewResponse = {
    items: ListViewItems[];
    page: ZoneDataItem[];
    summary: ListViewSummary[];
};
/** @returns {ListViewSummary} */
declare function ListViewSummary(): ListViewSummary;
type ListViewSummary = {
    total_active_zones: number;
    total_pincodes_served: number;
    total_zones: number;
};
/** @returns {LogisticsResponse} */
declare function LogisticsResponse(): LogisticsResponse;
type LogisticsResponse = {
    dp?: Dp;
    override?: boolean;
};
/** @returns {ManagerResponse} */
declare function ManagerResponse(): ManagerResponse;
type ManagerResponse = {
    email?: string;
    mobile_no?: MobileNo;
    name?: string;
};
/** @returns {MobileNo} */
declare function MobileNo(): MobileNo;
type MobileNo = {
    country_code?: number;
    number?: string;
};
/** @returns {ModifiedByResponse} */
declare function ModifiedByResponse(): ModifiedByResponse;
type ModifiedByResponse = {
    user_id?: string;
    username?: string;
};
/** @returns {OpeningClosing} */
declare function OpeningClosing(): OpeningClosing;
type OpeningClosing = {
    hour?: number;
    minute?: number;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {PincodeBulkViewResponse} */
declare function PincodeBulkViewResponse(): PincodeBulkViewResponse;
type PincodeBulkViewResponse = {
    batch_id: string;
    s3_url: string;
};
/** @returns {PincodeCodStatusListingPage} */
declare function PincodeCodStatusListingPage(): PincodeCodStatusListingPage;
type PincodeCodStatusListingPage = {
    current: number;
    has_next: boolean;
    item_total: number;
    size: number;
    type: string;
};
/** @returns {PincodeCodStatusListingRequest} */
declare function PincodeCodStatusListingRequest(): PincodeCodStatusListingRequest;
type PincodeCodStatusListingRequest = {
    country?: string;
    current?: number;
    is_active?: boolean;
    page_size?: number;
    pincode?: number;
};
/** @returns {PincodeCodStatusListingResponse} */
declare function PincodeCodStatusListingResponse(): PincodeCodStatusListingResponse;
type PincodeCodStatusListingResponse = {
    country: string;
    data: PincodeCodStatusListingResponse[];
    errors?: Error[];
    page: PincodeCodStatusListingPage;
    success: boolean;
    summary: PincodeCodStatusListingSummary;
};
/** @returns {PincodeCodStatusListingSummary} */
declare function PincodeCodStatusListingSummary(): PincodeCodStatusListingSummary;
type PincodeCodStatusListingSummary = {
    total_active_pincodes: number;
    total_inactive_pincodes: number;
};
/** @returns {PincodeMopBulkData} */
declare function PincodeMopBulkData(): PincodeMopBulkData;
type PincodeMopBulkData = {
    batch_id: string;
    s3_url: string;
};
/** @returns {PincodeMopData} */
declare function PincodeMopData(): PincodeMopData;
type PincodeMopData = {
    action: string;
    country: string;
    pincodes: number[];
};
/** @returns {PincodeMOPresponse} */
declare function PincodeMOPresponse(): PincodeMOPresponse;
type PincodeMOPresponse = {
    action: string;
    batch_id: string;
    country: string;
    pincodes?: number[];
    status_code: number;
    success: boolean;
    updated_pincodes?: PincodeMopUpdateResponse[];
};
/** @returns {PincodeMopUpdateAuditHistoryPaging} */
declare function PincodeMopUpdateAuditHistoryPaging(): PincodeMopUpdateAuditHistoryPaging;
type PincodeMopUpdateAuditHistoryPaging = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
/** @returns {PincodeMopUpdateAuditHistoryRequest} */
declare function PincodeMopUpdateAuditHistoryRequest(): PincodeMopUpdateAuditHistoryRequest;
type PincodeMopUpdateAuditHistoryRequest = {
    entity_type: string;
    file_name?: string;
};
/** @returns {PincodeMopUpdateAuditHistoryResponse} */
declare function PincodeMopUpdateAuditHistoryResponse(): PincodeMopUpdateAuditHistoryResponse;
type PincodeMopUpdateAuditHistoryResponse = {
    batch_id?: string;
    entity_type?: string;
    error_file_s3_url?: string;
    file_name?: string;
    s3_url?: string;
    success?: boolean;
    updated_at?: string;
    updated_by?: string;
};
/** @returns {PincodeMopUpdateAuditHistoryResponseData} */
declare function PincodeMopUpdateAuditHistoryResponseData(): PincodeMopUpdateAuditHistoryResponseData;
type PincodeMopUpdateAuditHistoryResponseData = {
    data: PincodeMopUpdateAuditHistoryResponse[];
    entity_type?: string;
    page: PincodeMopUpdateAuditHistoryPaging;
};
/** @returns {PincodeMopUpdateResponse} */
declare function PincodeMopUpdateResponse(): PincodeMopUpdateResponse;
type PincodeMopUpdateResponse = {
    channel_id: string;
    country: string;
    is_active: boolean;
    pincode: number;
};
/** @returns {ProductReturnConfigResponse} */
declare function ProductReturnConfigResponse(): ProductReturnConfigResponse;
type ProductReturnConfigResponse = {
    on_same_store?: boolean;
};
/** @returns {ReAssignStoreRequest} */
declare function ReAssignStoreRequest(): ReAssignStoreRequest;
type ReAssignStoreRequest = {
    articles: any[];
    configuration: any;
    identifier: string;
    ignored_locations: string[];
    to_pincode: string;
};
/** @returns {ReAssignStoreResponse} */
declare function ReAssignStoreResponse(): ReAssignStoreResponse;
type ReAssignStoreResponse = {
    articles?: any[];
    error: any;
    success: boolean;
    to_pincode: string;
};
/** @returns {SelfShipResponse} */
declare function SelfShipResponse(): SelfShipResponse;
type SelfShipResponse = {
    is_active: boolean;
    tat: number;
};
/** @returns {ServiceabilityErrorResponse} */
declare function ServiceabilityErrorResponse(): ServiceabilityErrorResponse;
type ServiceabilityErrorResponse = {
    message: string;
    type: string;
    value: string;
};
/** @returns {ServiceabilityPageResponse} */
declare function ServiceabilityPageResponse(): ServiceabilityPageResponse;
type ServiceabilityPageResponse = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
/** @returns {TimmingResponse} */
declare function TimmingResponse(): TimmingResponse;
type TimmingResponse = {
    closing?: OpeningClosing;
    open?: boolean;
    opening?: OpeningClosing;
    weekday?: string;
};
/** @returns {UpdateZoneData} */
declare function UpdateZoneData(): UpdateZoneData;
type UpdateZoneData = {
    assignment_preference?: string;
    channels: GetZoneDataViewChannels[];
    company_id: number;
    is_active: boolean;
    mapping: ZoneMappingType[];
    name: string;
    product: ZoneProductTypes;
    region_type: string;
    slug: string;
    store_ids: number[];
    zone_id: string;
};
/** @returns {WarningsResponse} */
declare function WarningsResponse(): WarningsResponse;
type WarningsResponse = {
    store_address?: string;
};
/** @returns {ZoneDataItem} */
declare function ZoneDataItem(): ZoneDataItem;
type ZoneDataItem = {
    current: number;
    has_next: boolean;
    item_total: number;
    size: number;
    type: string;
};
/** @returns {ZoneMappingType} */
declare function ZoneMappingType(): ZoneMappingType;
type ZoneMappingType = {
    country: string;
    pincode?: string[];
    state?: string[];
};
/** @returns {ZoneProductTypes} */
declare function ZoneProductTypes(): ZoneProductTypes;
type ZoneProductTypes = {
    tags: string[];
    type: string;
};
/** @returns {ZoneRequest} */
declare function ZoneRequest(): ZoneRequest;
type ZoneRequest = {
    data: CreateZoneData;
    identifier: string;
};
/** @returns {ZoneResponse} */
declare function ZoneResponse(): ZoneResponse;
type ZoneResponse = {
    status_code: number;
    success: boolean;
    zone_id: string;
};
/** @returns {ZoneSuccessResponse} */
declare function ZoneSuccessResponse(): ZoneSuccessResponse;
type ZoneSuccessResponse = {
    status_code: number;
    success: boolean;
};
/** @returns {ZoneUpdateRequest} */
declare function ZoneUpdateRequest(): ZoneUpdateRequest;
type ZoneUpdateRequest = {
    data: UpdateZoneData;
    identifier: string;
};
