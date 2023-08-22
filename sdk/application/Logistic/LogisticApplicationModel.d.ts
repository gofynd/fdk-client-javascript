export = LogisticApplicationModel;
/**
 * @typedef CountryEntityResponse
 * @property {string} [display_name]
 * @property {boolean} [is_active]
 * @property {LogisticsResponse} [logistics]
 * @property {CountryMetaResponse} [meta]
 * @property {string} [name]
 * @property {string} [parent_id]
 * @property {string} [sub_type]
 * @property {string} [type]
 * @property {string} [uid]
 */
/**
 * @typedef CountryHierarchy
 * @property {string} [name]
 * @property {string} [slug]
 */
/**
 * @typedef CountryListResponse
 * @property {CountryEntityResponse[]} [results]
 */
/**
 * @typedef CountryMetaResponse
 * @property {string} [country_code]
 * @property {string} [isd_code]
 */
/**
 * @typedef CountryObject
 * @property {string} [currency]
 * @property {string} [display_name]
 * @property {CountryHierarchy[]} [hierarchy]
 * @property {string} [id]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [name]
 * @property {string} [phone_code]
 * @property {string[]} [timezones]
 * @property {string} [type]
 */
/**
 * @typedef DP
 * @property {string} [area_code]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [external_account_id]
 * @property {number} fm_priority
 * @property {string} [internal_account_id]
 * @property {number} lm_priority
 * @property {string[]} operations
 * @property {string} payment_mode
 * @property {number} rvp_priority
 * @property {string} [transport_mode]
 */
/**
 * @typedef ErrorResponse
 * @property {string} [message]
 */
/**
 * @typedef FieldValidation
 * @property {FieldValidationRegex} [regex]
 * @property {string} [type]
 */
/**
 * @typedef FieldValidationRegex
 * @property {LengthValidation} [length]
 * @property {string} [value]
 */
/**
 * @typedef GetCountries
 * @property {CountryObject[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetCountry
 * @property {string} [currency]
 * @property {string} [display_name]
 * @property {GetCountryFields} [fields]
 * @property {CountryHierarchy[]} [hierarchy]
 * @property {string} [id]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [name]
 * @property {string} [phone_code]
 * @property {string[]} [timezones]
 * @property {string} [type]
 */
/**
 * @typedef GetCountryFields
 * @property {GetCountryFieldsAddress[]} address
 * @property {GetCountryFieldsAddressTemplate} address_template
 * @property {string[]} serviceability_fields
 */
/**
 * @typedef GetCountryFieldsAddress
 * @property {string} display_name
 * @property {boolean} [edit]
 * @property {string} [error_text]
 * @property {string} input
 * @property {boolean} required
 * @property {string} slug
 * @property {FieldValidation} [validation]
 * @property {GetCountryFieldsAddressValues} [values]
 */
/**
 * @typedef GetCountryFieldsAddressTemplate
 * @property {string} checkout_form
 * @property {string} invoice_display
 */
/**
 * @typedef GetCountryFieldsAddressValues
 * @property {GetOneOrAll} [get_all]
 * @property {GetOneOrAll} [get_one]
 */
/**
 * @typedef GetLocalities
 * @property {Localities[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetLocality
 * @property {string} [display_name]
 * @property {string} [id]
 * @property {Localities[]} [localities]
 * @property {string} [name]
 * @property {string[]} [parent_ids]
 * @property {string} [type]
 */
/**
 * @typedef GetOneOrAll
 * @property {string} [operation_id]
 * @property {GetOneOrAllParams} [params]
 */
/**
 * @typedef GetOneOrAllParams
 * @property {GetOneOrAllPath} [path]
 * @property {GetOneOrAllQuery} [query]
 */
/**
 * @typedef GetOneOrAllPath
 * @property {string} [locality_type]
 * @property {string} [locality_value]
 */
/**
 * @typedef GetOneOrAllQuery
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [sector]
 * @property {string} [state]
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
 * @typedef LengthValidation
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef Localities
 * @property {string} [display_name]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string[]} [parent_ids]
 * @property {string} [type]
 */
/**
 * @typedef LogisticsResponse
 * @property {Object} [dp]
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
 * @typedef PincodeApiResponse
 * @property {PincodeDataResponse[]} [data]
 * @property {PincodeErrorSchemaResponse} error
 * @property {boolean} success
 */
/**
 * @typedef PincodeDataResponse
 * @property {string} [display_name]
 * @property {PincodeErrorSchemaResponse} error
 * @property {PincodeLatLongData} [lat_long]
 * @property {PincodeMetaResponse} [meta]
 * @property {CountryMetaResponse} [meta_code]
 * @property {string} [name]
 * @property {PincodeParentsResponse[]} [parents]
 * @property {string} [sub_type]
 * @property {string} [uid]
 */
/**
 * @typedef PincodeErrorSchemaResponse
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef PincodeLatLongData
 * @property {string[]} [coordinates]
 * @property {string} [type]
 */
/**
 * @typedef PincodeMetaResponse
 * @property {number} [internal_zone_id]
 * @property {string} [zone]
 */
/**
 * @typedef PincodeParentsResponse
 * @property {string} [display_name]
 * @property {string} [name]
 * @property {string} [sub_type]
 * @property {string} [uid]
 */
/**
 * @typedef ReAssignStoreRequest
 * @property {Object[]} articles
 * @property {Object} configuration
 * @property {string} identifier
 * @property {number[]} ignored_locations
 * @property {string} to_pincode
 */
/**
 * @typedef ReAssignStoreResponse
 * @property {Object[]} [assigned_stores]
 * @property {Object} error
 * @property {string} pystormbreaker_uuid
 * @property {boolean} success
 * @property {string} to_pincode
 */
/**
 * @typedef TATArticlesRequest
 * @property {TATCategoryRequest} [category]
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 */
/**
 * @typedef TATArticlesResponse
 * @property {number} [_manufacturing_time_seconds]
 * @property {TATCategoryRequest} [category]
 * @property {TATErrorSchemaResponse} [error]
 * @property {boolean} [is_cod_available]
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 * @property {TATPromiseResponse} [promise]
 */
/**
 * @typedef TATCategoryRequest
 * @property {number} [id]
 * @property {string} [level]
 */
/**
 * @typedef TATErrorSchemaResponse
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef TATFormattedResponse
 * @property {string} [max]
 * @property {string} [min]
 */
/**
 * @typedef TATLocationDetailsRequest
 * @property {TATArticlesRequest[]} [articles]
 * @property {string} [from_pincode]
 * @property {number} [fulfillment_id]
 */
/**
 * @typedef TATLocationDetailsResponse
 * @property {TATArticlesResponse[]} [articles]
 * @property {string} [from_pincode]
 * @property {number} [fulfillment_id]
 */
/**
 * @typedef TATPromiseResponse
 * @property {TATFormattedResponse} [formatted]
 * @property {TATTimestampResponse} [timestamp]
 */
/**
 * @typedef TATTimestampResponse
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef TATViewRequest
 * @property {string} [action]
 * @property {string} [identifier]
 * @property {string} [journey]
 * @property {TATLocationDetailsRequest[]} [location_details]
 * @property {string} [source]
 * @property {string} [to_pincode]
 */
/**
 * @typedef TATViewResponse
 * @property {string} [action]
 * @property {TATErrorSchemaResponse} [error]
 * @property {string} [identifier]
 * @property {boolean} [is_cod_available]
 * @property {string} [journey]
 * @property {TATLocationDetailsResponse[]} [location_details]
 * @property {string} [payment_mode]
 * @property {string} [request_uuid]
 * @property {string} [source]
 * @property {string} [stormbreaker_uuid]
 * @property {boolean} [success]
 * @property {string} [to_city]
 * @property {string} [to_pincode]
 */
declare class LogisticApplicationModel {
}
declare namespace LogisticApplicationModel {
    export { CountryEntityResponse, CountryHierarchy, CountryListResponse, CountryMetaResponse, CountryObject, DP, ErrorResponse, FieldValidation, FieldValidationRegex, GetCountries, GetCountry, GetCountryFields, GetCountryFieldsAddress, GetCountryFieldsAddressTemplate, GetCountryFieldsAddressValues, GetLocalities, GetLocality, GetOneOrAll, GetOneOrAllParams, GetOneOrAllPath, GetOneOrAllQuery, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, LengthValidation, Localities, LogisticsResponse, Page, PincodeApiResponse, PincodeDataResponse, PincodeErrorSchemaResponse, PincodeLatLongData, PincodeMetaResponse, PincodeParentsResponse, ReAssignStoreRequest, ReAssignStoreResponse, TATArticlesRequest, TATArticlesResponse, TATCategoryRequest, TATErrorSchemaResponse, TATFormattedResponse, TATLocationDetailsRequest, TATLocationDetailsResponse, TATPromiseResponse, TATTimestampResponse, TATViewRequest, TATViewResponse };
}
/** @returns {CountryEntityResponse} */
declare function CountryEntityResponse(): CountryEntityResponse;
type CountryEntityResponse = {
    display_name?: string;
    is_active?: boolean;
    logistics?: LogisticsResponse;
    meta?: CountryMetaResponse;
    name?: string;
    parent_id?: string;
    sub_type?: string;
    type?: string;
    uid?: string;
};
/** @returns {CountryHierarchy} */
declare function CountryHierarchy(): CountryHierarchy;
type CountryHierarchy = {
    name?: string;
    slug?: string;
};
/** @returns {CountryListResponse} */
declare function CountryListResponse(): CountryListResponse;
type CountryListResponse = {
    results?: CountryEntityResponse[];
};
/** @returns {CountryMetaResponse} */
declare function CountryMetaResponse(): CountryMetaResponse;
type CountryMetaResponse = {
    country_code?: string;
    isd_code?: string;
};
/** @returns {CountryObject} */
declare function CountryObject(): CountryObject;
type CountryObject = {
    currency?: string;
    display_name?: string;
    hierarchy?: CountryHierarchy[];
    id?: string;
    iso2?: string;
    iso3?: string;
    name?: string;
    phone_code?: string;
    timezones?: string[];
    type?: string;
};
/** @returns {DP} */
declare function DP(): DP;
type DP = {
    area_code?: string;
    assign_dp_from_sb?: boolean;
    external_account_id?: string;
    fm_priority: number;
    internal_account_id?: string;
    lm_priority: number;
    operations: string[];
    payment_mode: string;
    rvp_priority: number;
    transport_mode?: string;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    message?: string;
};
/** @returns {FieldValidation} */
declare function FieldValidation(): FieldValidation;
type FieldValidation = {
    regex?: FieldValidationRegex;
    type?: string;
};
/** @returns {FieldValidationRegex} */
declare function FieldValidationRegex(): FieldValidationRegex;
type FieldValidationRegex = {
    length?: LengthValidation;
    value?: string;
};
/** @returns {GetCountries} */
declare function GetCountries(): GetCountries;
type GetCountries = {
    items?: CountryObject[];
    page?: Page;
};
/** @returns {GetCountry} */
declare function GetCountry(): GetCountry;
type GetCountry = {
    currency?: string;
    display_name?: string;
    fields?: GetCountryFields;
    hierarchy?: CountryHierarchy[];
    id?: string;
    iso2?: string;
    iso3?: string;
    name?: string;
    phone_code?: string;
    timezones?: string[];
    type?: string;
};
/** @returns {GetCountryFields} */
declare function GetCountryFields(): GetCountryFields;
type GetCountryFields = {
    address: GetCountryFieldsAddress[];
    address_template: GetCountryFieldsAddressTemplate;
    serviceability_fields: string[];
};
/** @returns {GetCountryFieldsAddress} */
declare function GetCountryFieldsAddress(): GetCountryFieldsAddress;
type GetCountryFieldsAddress = {
    display_name: string;
    edit?: boolean;
    error_text?: string;
    input: string;
    required: boolean;
    slug: string;
    validation?: FieldValidation;
    values?: GetCountryFieldsAddressValues;
};
/** @returns {GetCountryFieldsAddressTemplate} */
declare function GetCountryFieldsAddressTemplate(): GetCountryFieldsAddressTemplate;
type GetCountryFieldsAddressTemplate = {
    checkout_form: string;
    invoice_display: string;
};
/** @returns {GetCountryFieldsAddressValues} */
declare function GetCountryFieldsAddressValues(): GetCountryFieldsAddressValues;
type GetCountryFieldsAddressValues = {
    get_all?: GetOneOrAll;
    get_one?: GetOneOrAll;
};
/** @returns {GetLocalities} */
declare function GetLocalities(): GetLocalities;
type GetLocalities = {
    items?: Localities[];
    page?: Page;
};
/** @returns {GetLocality} */
declare function GetLocality(): GetLocality;
type GetLocality = {
    display_name?: string;
    id?: string;
    localities?: Localities[];
    name?: string;
    parent_ids?: string[];
    type?: string;
};
/** @returns {GetOneOrAll} */
declare function GetOneOrAll(): GetOneOrAll;
type GetOneOrAll = {
    operation_id?: string;
    params?: GetOneOrAllParams;
};
/** @returns {GetOneOrAllParams} */
declare function GetOneOrAllParams(): GetOneOrAllParams;
type GetOneOrAllParams = {
    path?: GetOneOrAllPath;
    query?: GetOneOrAllQuery;
};
/** @returns {GetOneOrAllPath} */
declare function GetOneOrAllPath(): GetOneOrAllPath;
type GetOneOrAllPath = {
    locality_type?: string;
    locality_value?: string;
};
/** @returns {GetOneOrAllQuery} */
declare function GetOneOrAllQuery(): GetOneOrAllQuery;
type GetOneOrAllQuery = {
    city?: string;
    country?: string;
    sector?: string;
    state?: string;
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
/** @returns {LengthValidation} */
declare function LengthValidation(): LengthValidation;
type LengthValidation = {
    max?: number;
    min?: number;
};
/** @returns {Localities} */
declare function Localities(): Localities;
type Localities = {
    display_name?: string;
    id?: string;
    name?: string;
    parent_ids?: string[];
    type?: string;
};
/** @returns {LogisticsResponse} */
declare function LogisticsResponse(): LogisticsResponse;
type LogisticsResponse = {
    dp?: any;
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
/** @returns {PincodeApiResponse} */
declare function PincodeApiResponse(): PincodeApiResponse;
type PincodeApiResponse = {
    data?: PincodeDataResponse[];
    error: PincodeErrorSchemaResponse;
    success: boolean;
};
/** @returns {PincodeDataResponse} */
declare function PincodeDataResponse(): PincodeDataResponse;
type PincodeDataResponse = {
    display_name?: string;
    error: PincodeErrorSchemaResponse;
    lat_long?: PincodeLatLongData;
    meta?: PincodeMetaResponse;
    meta_code?: CountryMetaResponse;
    name?: string;
    parents?: PincodeParentsResponse[];
    sub_type?: string;
    uid?: string;
};
/** @returns {PincodeErrorSchemaResponse} */
declare function PincodeErrorSchemaResponse(): PincodeErrorSchemaResponse;
type PincodeErrorSchemaResponse = {
    message?: string;
    type?: string;
    value?: string;
};
/** @returns {PincodeLatLongData} */
declare function PincodeLatLongData(): PincodeLatLongData;
type PincodeLatLongData = {
    coordinates?: string[];
    type?: string;
};
/** @returns {PincodeMetaResponse} */
declare function PincodeMetaResponse(): PincodeMetaResponse;
type PincodeMetaResponse = {
    internal_zone_id?: number;
    zone?: string;
};
/** @returns {PincodeParentsResponse} */
declare function PincodeParentsResponse(): PincodeParentsResponse;
type PincodeParentsResponse = {
    display_name?: string;
    name?: string;
    sub_type?: string;
    uid?: string;
};
/** @returns {ReAssignStoreRequest} */
declare function ReAssignStoreRequest(): ReAssignStoreRequest;
type ReAssignStoreRequest = {
    articles: any[];
    configuration: any;
    identifier: string;
    ignored_locations: number[];
    to_pincode: string;
};
/** @returns {ReAssignStoreResponse} */
declare function ReAssignStoreResponse(): ReAssignStoreResponse;
type ReAssignStoreResponse = {
    assigned_stores?: any[];
    error: any;
    pystormbreaker_uuid: string;
    success: boolean;
    to_pincode: string;
};
/** @returns {TATArticlesRequest} */
declare function TATArticlesRequest(): TATArticlesRequest;
type TATArticlesRequest = {
    category?: TATCategoryRequest;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
/** @returns {TATArticlesResponse} */
declare function TATArticlesResponse(): TATArticlesResponse;
type TATArticlesResponse = {
    _manufacturing_time_seconds?: number;
    category?: TATCategoryRequest;
    error?: TATErrorSchemaResponse;
    is_cod_available?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    promise?: TATPromiseResponse;
};
/** @returns {TATCategoryRequest} */
declare function TATCategoryRequest(): TATCategoryRequest;
type TATCategoryRequest = {
    id?: number;
    level?: string;
};
/** @returns {TATErrorSchemaResponse} */
declare function TATErrorSchemaResponse(): TATErrorSchemaResponse;
type TATErrorSchemaResponse = {
    message?: string;
    type?: string;
    value?: string;
};
/** @returns {TATFormattedResponse} */
declare function TATFormattedResponse(): TATFormattedResponse;
type TATFormattedResponse = {
    max?: string;
    min?: string;
};
/** @returns {TATLocationDetailsRequest} */
declare function TATLocationDetailsRequest(): TATLocationDetailsRequest;
type TATLocationDetailsRequest = {
    articles?: TATArticlesRequest[];
    from_pincode?: string;
    fulfillment_id?: number;
};
/** @returns {TATLocationDetailsResponse} */
declare function TATLocationDetailsResponse(): TATLocationDetailsResponse;
type TATLocationDetailsResponse = {
    articles?: TATArticlesResponse[];
    from_pincode?: string;
    fulfillment_id?: number;
};
/** @returns {TATPromiseResponse} */
declare function TATPromiseResponse(): TATPromiseResponse;
type TATPromiseResponse = {
    formatted?: TATFormattedResponse;
    timestamp?: TATTimestampResponse;
};
/** @returns {TATTimestampResponse} */
declare function TATTimestampResponse(): TATTimestampResponse;
type TATTimestampResponse = {
    max?: number;
    min?: number;
};
/** @returns {TATViewRequest} */
declare function TATViewRequest(): TATViewRequest;
type TATViewRequest = {
    action?: string;
    identifier?: string;
    journey?: string;
    location_details?: TATLocationDetailsRequest[];
    source?: string;
    to_pincode?: string;
};
/** @returns {TATViewResponse} */
declare function TATViewResponse(): TATViewResponse;
type TATViewResponse = {
    action?: string;
    error?: TATErrorSchemaResponse;
    identifier?: string;
    is_cod_available?: boolean;
    journey?: string;
    location_details?: TATLocationDetailsResponse[];
    payment_mode?: string;
    request_uuid?: string;
    source?: string;
    stormbreaker_uuid?: string;
    success?: boolean;
    to_city?: string;
    to_pincode?: string;
};
