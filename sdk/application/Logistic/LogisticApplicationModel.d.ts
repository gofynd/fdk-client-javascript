export = LogisticApplicationModel;
/**
 * @typedef PincodeParentsResponse
 * @property {string} [sub_type]
 * @property {string} [display_name]
 * @property {string} [name]
 * @property {string} [uid]
 */
/**
 * @typedef PincodeMetaResponse
 * @property {string} [zone]
 * @property {number} [internal_zone_id]
 */
/**
 * @typedef PincodeErrorSchemaResponse
 * @property {string} [message]
 * @property {string} [value]
 * @property {string} [type]
 */
/**
 * @typedef CountryMetaResponse
 * @property {string} [country_code]
 * @property {string} [isd_code]
 */
/**
 * @typedef PincodeLatLongData
 * @property {string} [type]
 * @property {string[]} [coordinates]
 */
/**
 * @typedef PincodeDataResponse
 * @property {PincodeParentsResponse[]} [parents]
 * @property {PincodeMetaResponse} [meta]
 * @property {string} [display_name]
 * @property {PincodeErrorSchemaResponse} error
 * @property {CountryMetaResponse} [meta_code]
 * @property {PincodeLatLongData} [lat_long]
 * @property {string} [sub_type]
 * @property {string} [name]
 * @property {string} [uid]
 */
/**
 * @typedef PincodeApiResponse
 * @property {boolean} success
 * @property {PincodeDataResponse[]} [data]
 * @property {PincodeErrorSchemaResponse} error
 */
/**
 * @typedef TATCategoryRequest
 * @property {string} [level]
 * @property {number} [id]
 */
/**
 * @typedef TATArticlesRequest
 * @property {TATCategoryRequest} [category]
 * @property {string} [manufacturing_time_unit]
 * @property {number} [manufacturing_time]
 */
/**
 * @typedef TATLocationDetailsRequest
 * @property {number} [fulfillment_id]
 * @property {string} [from_pincode]
 * @property {TATArticlesRequest[]} [articles]
 */
/**
 * @typedef TATViewRequest
 * @property {string} [to_pincode]
 * @property {string} [source]
 * @property {string} [action]
 * @property {string} [identifier]
 * @property {TATLocationDetailsRequest[]} [location_details]
 * @property {string} [journey]
 */
/**
 * @typedef TATErrorSchemaResponse
 * @property {string} [message]
 * @property {string} [value]
 * @property {string} [type]
 */
/**
 * @typedef TATTimestampResponse
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef TATFormattedResponse
 * @property {string} [min]
 * @property {string} [max]
 */
/**
 * @typedef TATPromiseResponse
 * @property {TATTimestampResponse} [timestamp]
 * @property {TATFormattedResponse} [formatted]
 */
/**
 * @typedef TATArticlesResponse
 * @property {string} [manufacturing_time_unit]
 * @property {TATErrorSchemaResponse} [error]
 * @property {boolean} [is_cod_available]
 * @property {TATPromiseResponse} [promise]
 * @property {number} [manufacturing_time]
 * @property {TATCategoryRequest} [category]
 * @property {number} [_manufacturing_time_seconds]
 */
/**
 * @typedef TATLocationDetailsResponse
 * @property {number} [fulfillment_id]
 * @property {string} [from_pincode]
 * @property {TATArticlesResponse[]} [articles]
 */
/**
 * @typedef TATViewResponse
 * @property {string} [to_pincode]
 * @property {string} [request_uuid]
 * @property {string} [payment_mode]
 * @property {boolean} [success]
 * @property {TATErrorSchemaResponse} [error]
 * @property {boolean} [is_cod_available]
 * @property {string} [source]
 * @property {string} [action]
 * @property {string} [stormbreaker_uuid]
 * @property {string} [to_city]
 * @property {string} [identifier]
 * @property {TATLocationDetailsResponse[]} [location_details]
 * @property {string} [journey]
 */
/**
 * @typedef DP
 * @property {number} fm_priority
 * @property {number} lm_priority
 * @property {number} rvp_priority
 * @property {string} payment_mode
 * @property {string[]} operations
 * @property {string} [area_code]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [internal_account_id]
 * @property {string} [external_account_id]
 * @property {string} [transport_mode]
 */
/**
 * @typedef LogisticsResponse
 * @property {Object} [dp]
 */
/**
 * @typedef CountryEntityResponse
 * @property {CountryMetaResponse} [meta]
 * @property {LogisticsResponse} [logistics]
 * @property {string} [display_name]
 * @property {string} [type]
 * @property {boolean} [is_active]
 * @property {string} [parent_id]
 * @property {string} [sub_type]
 * @property {string} [name]
 * @property {string} [uid]
 */
/**
 * @typedef CountryListResponse
 * @property {CountryEntityResponse[]} [results]
 */
/**
 * @typedef GetZoneFromPincodeViewRequest
 * @property {string} pincode
 * @property {string} country
 */
/**
 * @typedef GetZoneFromPincodeViewResponse
 * @property {string} serviceability_type
 * @property {string[]} zones
 */
/**
 * @typedef ReAssignStoreRequest
 * @property {Object} configuration
 * @property {string} to_pincode
 * @property {number[]} ignored_locations
 * @property {string} identifier
 * @property {Object[]} articles
 */
/**
 * @typedef ReAssignStoreResponse
 * @property {string} to_pincode
 * @property {string} pystormbreaker_uuid
 * @property {boolean} success
 * @property {Object} error
 * @property {Object[]} [assigned_stores]
 */
declare class LogisticApplicationModel {
}
declare namespace LogisticApplicationModel {
    export { PincodeParentsResponse, PincodeMetaResponse, PincodeErrorSchemaResponse, CountryMetaResponse, PincodeLatLongData, PincodeDataResponse, PincodeApiResponse, TATCategoryRequest, TATArticlesRequest, TATLocationDetailsRequest, TATViewRequest, TATErrorSchemaResponse, TATTimestampResponse, TATFormattedResponse, TATPromiseResponse, TATArticlesResponse, TATLocationDetailsResponse, TATViewResponse, DP, LogisticsResponse, CountryEntityResponse, CountryListResponse, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, ReAssignStoreRequest, ReAssignStoreResponse };
}
/** @returns {PincodeParentsResponse} */
declare function PincodeParentsResponse(): PincodeParentsResponse;
type PincodeParentsResponse = {
    sub_type?: string;
    display_name?: string;
    name?: string;
    uid?: string;
};
/** @returns {PincodeMetaResponse} */
declare function PincodeMetaResponse(): PincodeMetaResponse;
type PincodeMetaResponse = {
    zone?: string;
    internal_zone_id?: number;
};
/** @returns {PincodeErrorSchemaResponse} */
declare function PincodeErrorSchemaResponse(): PincodeErrorSchemaResponse;
type PincodeErrorSchemaResponse = {
    message?: string;
    value?: string;
    type?: string;
};
/** @returns {CountryMetaResponse} */
declare function CountryMetaResponse(): CountryMetaResponse;
type CountryMetaResponse = {
    country_code?: string;
    isd_code?: string;
};
/** @returns {PincodeLatLongData} */
declare function PincodeLatLongData(): PincodeLatLongData;
type PincodeLatLongData = {
    type?: string;
    coordinates?: string[];
};
/** @returns {PincodeDataResponse} */
declare function PincodeDataResponse(): PincodeDataResponse;
type PincodeDataResponse = {
    parents?: PincodeParentsResponse[];
    meta?: PincodeMetaResponse;
    display_name?: string;
    error: PincodeErrorSchemaResponse;
    meta_code?: CountryMetaResponse;
    lat_long?: PincodeLatLongData;
    sub_type?: string;
    name?: string;
    uid?: string;
};
/** @returns {PincodeApiResponse} */
declare function PincodeApiResponse(): PincodeApiResponse;
type PincodeApiResponse = {
    success: boolean;
    data?: PincodeDataResponse[];
    error: PincodeErrorSchemaResponse;
};
/** @returns {TATCategoryRequest} */
declare function TATCategoryRequest(): TATCategoryRequest;
type TATCategoryRequest = {
    level?: string;
    id?: number;
};
/** @returns {TATArticlesRequest} */
declare function TATArticlesRequest(): TATArticlesRequest;
type TATArticlesRequest = {
    category?: TATCategoryRequest;
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
};
/** @returns {TATLocationDetailsRequest} */
declare function TATLocationDetailsRequest(): TATLocationDetailsRequest;
type TATLocationDetailsRequest = {
    fulfillment_id?: number;
    from_pincode?: string;
    articles?: TATArticlesRequest[];
};
/** @returns {TATViewRequest} */
declare function TATViewRequest(): TATViewRequest;
type TATViewRequest = {
    to_pincode?: string;
    source?: string;
    action?: string;
    identifier?: string;
    location_details?: TATLocationDetailsRequest[];
    journey?: string;
};
/** @returns {TATErrorSchemaResponse} */
declare function TATErrorSchemaResponse(): TATErrorSchemaResponse;
type TATErrorSchemaResponse = {
    message?: string;
    value?: string;
    type?: string;
};
/** @returns {TATTimestampResponse} */
declare function TATTimestampResponse(): TATTimestampResponse;
type TATTimestampResponse = {
    min?: number;
    max?: number;
};
/** @returns {TATFormattedResponse} */
declare function TATFormattedResponse(): TATFormattedResponse;
type TATFormattedResponse = {
    min?: string;
    max?: string;
};
/** @returns {TATPromiseResponse} */
declare function TATPromiseResponse(): TATPromiseResponse;
type TATPromiseResponse = {
    timestamp?: TATTimestampResponse;
    formatted?: TATFormattedResponse;
};
/** @returns {TATArticlesResponse} */
declare function TATArticlesResponse(): TATArticlesResponse;
type TATArticlesResponse = {
    manufacturing_time_unit?: string;
    error?: TATErrorSchemaResponse;
    is_cod_available?: boolean;
    promise?: TATPromiseResponse;
    manufacturing_time?: number;
    category?: TATCategoryRequest;
    _manufacturing_time_seconds?: number;
};
/** @returns {TATLocationDetailsResponse} */
declare function TATLocationDetailsResponse(): TATLocationDetailsResponse;
type TATLocationDetailsResponse = {
    fulfillment_id?: number;
    from_pincode?: string;
    articles?: TATArticlesResponse[];
};
/** @returns {TATViewResponse} */
declare function TATViewResponse(): TATViewResponse;
type TATViewResponse = {
    to_pincode?: string;
    request_uuid?: string;
    payment_mode?: string;
    success?: boolean;
    error?: TATErrorSchemaResponse;
    is_cod_available?: boolean;
    source?: string;
    action?: string;
    stormbreaker_uuid?: string;
    to_city?: string;
    identifier?: string;
    location_details?: TATLocationDetailsResponse[];
    journey?: string;
};
/** @returns {DP} */
declare function DP(): DP;
type DP = {
    fm_priority: number;
    lm_priority: number;
    rvp_priority: number;
    payment_mode: string;
    operations: string[];
    area_code?: string;
    assign_dp_from_sb?: boolean;
    internal_account_id?: string;
    external_account_id?: string;
    transport_mode?: string;
};
/** @returns {LogisticsResponse} */
declare function LogisticsResponse(): LogisticsResponse;
type LogisticsResponse = {
    dp?: any;
};
/** @returns {CountryEntityResponse} */
declare function CountryEntityResponse(): CountryEntityResponse;
type CountryEntityResponse = {
    meta?: CountryMetaResponse;
    logistics?: LogisticsResponse;
    display_name?: string;
    type?: string;
    is_active?: boolean;
    parent_id?: string;
    sub_type?: string;
    name?: string;
    uid?: string;
};
/** @returns {CountryListResponse} */
declare function CountryListResponse(): CountryListResponse;
type CountryListResponse = {
    results?: CountryEntityResponse[];
};
/** @returns {GetZoneFromPincodeViewRequest} */
declare function GetZoneFromPincodeViewRequest(): GetZoneFromPincodeViewRequest;
type GetZoneFromPincodeViewRequest = {
    pincode: string;
    country: string;
};
/** @returns {GetZoneFromPincodeViewResponse} */
declare function GetZoneFromPincodeViewResponse(): GetZoneFromPincodeViewResponse;
type GetZoneFromPincodeViewResponse = {
    serviceability_type: string;
    zones: string[];
};
/** @returns {ReAssignStoreRequest} */
declare function ReAssignStoreRequest(): ReAssignStoreRequest;
type ReAssignStoreRequest = {
    configuration: any;
    to_pincode: string;
    ignored_locations: number[];
    identifier: string;
    articles: any[];
};
/** @returns {ReAssignStoreResponse} */
declare function ReAssignStoreResponse(): ReAssignStoreResponse;
type ReAssignStoreResponse = {
    to_pincode: string;
    pystormbreaker_uuid: string;
    success: boolean;
    error: any;
    assigned_stores?: any[];
};
