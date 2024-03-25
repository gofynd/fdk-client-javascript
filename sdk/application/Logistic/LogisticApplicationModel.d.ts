export = LogisticApplicationModel;
/**
 * @typedef ListViewResponseV2
 * @property {ListViewItemsV2[]} items
 * @property {ZoneDataItem} page
 */
/**
 * @typedef ListViewItemsV2
 * @property {string} zone_id
 * @property {string} name
 * @property {string} type
 * @property {GeoArea[]} geo_areas
 * @property {string} slug
 * @property {ListViewProductV2} stores
 * @property {boolean} is_active
 * @property {ListViewProductV2} product
 * @property {number} company_id
 * @property {string} application_id
 * @property {string} created_by
 * @property {string} created_on
 * @property {string} modified_by
 * @property {string} modified_on
 * @property {string} [stage]
 * @property {Summary} [summary]
 */
/**
 * @typedef GeoArea
 * @property {string} id
 * @property {string} [type]
 * @property {string} name
 */
/**
 * @typedef ListViewProductV2
 * @property {string} type
 * @property {string[]} values
 */
/**
 * @typedef Summary
 * @property {number} [stores_count]
 * @property {number} [products_count]
 * @property {Region[]} [regions]
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
 * @typedef Region
 * @property {string} uid
 * @property {string} display_name
 * @property {string} sub_type
 * @property {string[]} parent_id
 * @property {string} parent_uid
 */
/**
 * @typedef GeoAreaGetResponseBody
 * @property {GeoAreaItemResponse[]} [items]
 * @property {Page2} [page]
 */
/**
 * @typedef GeoAreaItemResponse
 * @property {string} geoarea_id
 * @property {string} name
 * @property {string} slug
 * @property {boolean} is_active
 * @property {string} region_type
 * @property {string} [type]
 * @property {AreaExpandedV2[]} [areas]
 * @property {string} created_on
 * @property {string} modified_on
 * @property {string} created_by
 * @property {string} modified_by
 */
/**
 * @typedef Page2
 * @property {number} size
 * @property {number} item_total
 * @property {string} type
 * @property {number} current
 * @property {boolean} has_next
 */
/**
 * @typedef AreaExpandedV2
 * @property {Country} country
 * @property {RegionV2[]} regions
 */
/**
 * @typedef RegionV2
 * @property {string} [uid]
 * @property {string} [display_name]
 * @property {string} [sub_type]
 * @property {string[]} [parent_id]
 */
/**
 * @typedef Country
 * @property {string} uid
 * @property {string} display_name
 */
/**
 * @typedef ServiceabilityZoneErrorResponse
 * @property {ServiceabilityErrorResponse[]} error
 */
/**
 * @typedef ServiceabilityErrorResponse
 * @property {string} message
 * @property {string} value
 * @property {string} type
 */
/**
 * @typedef GetStoreResponse
 * @property {StoreItemResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef StoreItemResponse
 * @property {number} [id]
 * @property {string} [store_type]
 * @property {string} [fulfillment_type]
 * @property {number} [processing_time]
 * @property {string[]} [tags]
 * @property {number} [company_id]
 * @property {number} [latitude]
 * @property {number} [longitude]
 */
/**
 * @typedef ValidateAddressRequest
 * @property {string} [address] - A string representing the complete address,
 *   combining address line 1, address line 2, area, landmark, sector, city,
 *   state, and pincode. This provides a comprehensive view of the address details.
 * @property {string} [address1] - A string representing the first line of the
 *   address, typically containing street or building information.
 * @property {string} [address2] - A string representing the second line of the
 *   address, which can be used for additional address details if needed.
 * @property {string} [area] - A string specifying the locality or area
 *   associated with the address.
 * @property {string} [landmark] - A string representing a prominent nearby
 *   landmark that aids in locating the address.
 * @property {string} [pincode] - A string indicating the postal code or PIN
 *   code of the address area.
 * @property {string} [sector] - A string specifying the sector or district of
 *   the address if applicable.
 * @property {string} [city] - A string denoting the city or municipality of the address.
 * @property {string} [state] - A string indicating the state or province of the address.
 * @property {string} [name] - A string representing the recipient's name or the
 *   organization name associated with the address.
 * @property {string} [phone] - An integer representing the recipient's contact
 *   phone number.
 * @property {string} [email] - A string containing the recipient's email address.
 */
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
/**
 * @typedef CountryHierarchy
 * @property {string} [name]
 * @property {string} [slug]
 */
/**
 * @typedef CurrencyObject
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [symbol]
 */
/**
 * @typedef CountryObject
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string[]} [timezones]
 * @property {CountryHierarchy[]} [hierarchy]
 * @property {string} [phone_code]
 * @property {string} [latitude]
 * @property {string} [longitude]
 * @property {CurrencyObject} [currency]
 * @property {string} [type]
 */
/**
 * @typedef GetCountries
 * @property {CountryObject[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetOneOrAllPath
 * @property {string} [locality_type]
 * @property {string} [locality_value]
 */
/**
 * @typedef GetOneOrAllQuery
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [sector]
 */
/**
 * @typedef GetOneOrAllParams
 * @property {GetOneOrAllPath} [path]
 * @property {GetOneOrAllQuery} [query]
 */
/**
 * @typedef GetOneOrAll
 * @property {string} [operation_id]
 * @property {GetOneOrAllParams} [params]
 */
/**
 * @typedef LengthValidation
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef FieldValidationRegex
 * @property {string} [value]
 * @property {LengthValidation} [length]
 */
/**
 * @typedef FieldValidation
 * @property {string} [type]
 * @property {FieldValidationRegex} [regex]
 */
/**
 * @typedef GetCountryFieldsAddressValues
 * @property {GetOneOrAll} [get_one]
 * @property {GetOneOrAll} [get_all]
 */
/**
 * @typedef GetCountryFieldsAddress
 * @property {string} display_name
 * @property {string} slug
 * @property {boolean} required
 * @property {boolean} [edit]
 * @property {string} input
 * @property {FieldValidation} [validation]
 * @property {GetCountryFieldsAddressValues} [values]
 * @property {string} [error_text]
 */
/**
 * @typedef GetCountryFieldsAddressTemplate
 * @property {string} checkout_form
 * @property {string} store_os_form
 * @property {string} default_display
 */
/**
 * @typedef GetCountryFields
 * @property {GetCountryFieldsAddress[]} address
 * @property {string[]} serviceability_fields
 * @property {GetCountryFieldsAddressTemplate} address_template
 */
/**
 * @typedef GetCountry
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string[]} [timezones]
 * @property {CountryHierarchy[]} [hierarchy]
 * @property {string} [phone_code]
 * @property {string} [latitude]
 * @property {string} [longitude]
 * @property {CurrencyObject} [currency]
 * @property {string} [type]
 * @property {GetCountryFields} [fields]
 */
/**
 * @typedef Page
 * @property {boolean} [has_next]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_previous]
 * @property {number} [current]
 * @property {string} [type]
 */
/**
 * @typedef Localities
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string[]} [parent_ids]
 * @property {string} [type]
 * @property {LocalityParent[]} [localities]
 */
/**
 * @typedef LocalityParent
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string[]} [parent_ids]
 * @property {string} [type]
 */
/**
 * @typedef GetLocalities
 * @property {Localities[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetLocality
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string[]} [parent_ids]
 * @property {string} [type]
 * @property {LocalityParent[]} [localities]
 */
/**
 * @typedef ErrorResponse
 * @property {string} [error]
 */
declare class LogisticApplicationModel {
}
declare namespace LogisticApplicationModel {
    export { ListViewResponseV2, ListViewItemsV2, GeoArea, ListViewProductV2, Summary, ZoneDataItem, Region, GeoAreaGetResponseBody, GeoAreaItemResponse, Page2, AreaExpandedV2, RegionV2, Country, ServiceabilityZoneErrorResponse, ServiceabilityErrorResponse, GetStoreResponse, StoreItemResponse, ValidateAddressRequest, PincodeParentsResponse, PincodeMetaResponse, PincodeErrorSchemaResponse, CountryMetaResponse, PincodeLatLongData, PincodeDataResponse, PincodeApiResponse, TATCategoryRequest, TATArticlesRequest, TATLocationDetailsRequest, TATViewRequest, TATErrorSchemaResponse, TATTimestampResponse, TATFormattedResponse, TATPromiseResponse, TATArticlesResponse, TATLocationDetailsResponse, TATViewResponse, DP, LogisticsResponse, CountryEntityResponse, CountryListResponse, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, ReAssignStoreRequest, ReAssignStoreResponse, CountryHierarchy, CurrencyObject, CountryObject, GetCountries, GetOneOrAllPath, GetOneOrAllQuery, GetOneOrAllParams, GetOneOrAll, LengthValidation, FieldValidationRegex, FieldValidation, GetCountryFieldsAddressValues, GetCountryFieldsAddress, GetCountryFieldsAddressTemplate, GetCountryFields, GetCountry, Page, Localities, LocalityParent, GetLocalities, GetLocality, ErrorResponse };
}
/** @returns {ListViewResponseV2} */
declare function ListViewResponseV2(): ListViewResponseV2;
type ListViewResponseV2 = {
    items: ListViewItemsV2[];
    page: ZoneDataItem;
};
/** @returns {ListViewItemsV2} */
declare function ListViewItemsV2(): ListViewItemsV2;
type ListViewItemsV2 = {
    zone_id: string;
    name: string;
    type: string;
    geo_areas: GeoArea[];
    slug: string;
    stores: ListViewProductV2;
    is_active: boolean;
    product: ListViewProductV2;
    company_id: number;
    application_id: string;
    created_by: string;
    created_on: string;
    modified_by: string;
    modified_on: string;
    stage?: string;
    summary?: Summary;
};
/** @returns {GeoArea} */
declare function GeoArea(): GeoArea;
type GeoArea = {
    id: string;
    type?: string;
    name: string;
};
/** @returns {ListViewProductV2} */
declare function ListViewProductV2(): ListViewProductV2;
type ListViewProductV2 = {
    type: string;
    values: string[];
};
/** @returns {Summary} */
declare function Summary(): Summary;
type Summary = {
    stores_count?: number;
    products_count?: number;
    regions?: Region[];
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
/** @returns {Region} */
declare function Region(): Region;
type Region = {
    uid: string;
    display_name: string;
    sub_type: string;
    parent_id: string[];
    parent_uid: string;
};
/** @returns {GeoAreaGetResponseBody} */
declare function GeoAreaGetResponseBody(): GeoAreaGetResponseBody;
type GeoAreaGetResponseBody = {
    items?: GeoAreaItemResponse[];
    page?: Page2;
};
/** @returns {GeoAreaItemResponse} */
declare function GeoAreaItemResponse(): GeoAreaItemResponse;
type GeoAreaItemResponse = {
    geoarea_id: string;
    name: string;
    slug: string;
    is_active: boolean;
    region_type: string;
    type?: string;
    areas?: AreaExpandedV2[];
    created_on: string;
    modified_on: string;
    created_by: string;
    modified_by: string;
};
/** @returns {Page2} */
declare function Page2(): Page2;
type Page2 = {
    size: number;
    item_total: number;
    type: string;
    current: number;
    has_next: boolean;
};
/** @returns {AreaExpandedV2} */
declare function AreaExpandedV2(): AreaExpandedV2;
type AreaExpandedV2 = {
    country: Country;
    regions: RegionV2[];
};
/** @returns {RegionV2} */
declare function RegionV2(): RegionV2;
type RegionV2 = {
    uid?: string;
    display_name?: string;
    sub_type?: string;
    parent_id?: string[];
};
/** @returns {Country} */
declare function Country(): Country;
type Country = {
    uid: string;
    display_name: string;
};
/** @returns {ServiceabilityZoneErrorResponse} */
declare function ServiceabilityZoneErrorResponse(): ServiceabilityZoneErrorResponse;
type ServiceabilityZoneErrorResponse = {
    error: ServiceabilityErrorResponse[];
};
/** @returns {ServiceabilityErrorResponse} */
declare function ServiceabilityErrorResponse(): ServiceabilityErrorResponse;
type ServiceabilityErrorResponse = {
    message: string;
    value: string;
    type: string;
};
/** @returns {GetStoreResponse} */
declare function GetStoreResponse(): GetStoreResponse;
type GetStoreResponse = {
    items?: StoreItemResponse[];
    page?: Page;
};
/** @returns {StoreItemResponse} */
declare function StoreItemResponse(): StoreItemResponse;
type StoreItemResponse = {
    id?: number;
    store_type?: string;
    fulfillment_type?: string;
    processing_time?: number;
    tags?: string[];
    company_id?: number;
    latitude?: number;
    longitude?: number;
};
/** @returns {ValidateAddressRequest} */
declare function ValidateAddressRequest(): ValidateAddressRequest;
type ValidateAddressRequest = {
    /**
     * - A string representing the complete address,
     * combining address line 1, address line 2, area, landmark, sector, city,
     * state, and pincode. This provides a comprehensive view of the address details.
     */
    address?: string;
    /**
     * - A string representing the first line of the
     * address, typically containing street or building information.
     */
    address1?: string;
    /**
     * - A string representing the second line of the
     * address, which can be used for additional address details if needed.
     */
    address2?: string;
    /**
     * - A string specifying the locality or area
     * associated with the address.
     */
    area?: string;
    /**
     * - A string representing a prominent nearby
     * landmark that aids in locating the address.
     */
    landmark?: string;
    /**
     * - A string indicating the postal code or PIN
     * code of the address area.
     */
    pincode?: string;
    /**
     * - A string specifying the sector or district of
     * the address if applicable.
     */
    sector?: string;
    /**
     * - A string denoting the city or municipality of the address.
     */
    city?: string;
    /**
     * - A string indicating the state or province of the address.
     */
    state?: string;
    /**
     * - A string representing the recipient's name or the
     * organization name associated with the address.
     */
    name?: string;
    /**
     * - An integer representing the recipient's contact
     * phone number.
     */
    phone?: string;
    /**
     * - A string containing the recipient's email address.
     */
    email?: string;
};
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
/** @returns {CountryHierarchy} */
declare function CountryHierarchy(): CountryHierarchy;
type CountryHierarchy = {
    name?: string;
    slug?: string;
};
/** @returns {CurrencyObject} */
declare function CurrencyObject(): CurrencyObject;
type CurrencyObject = {
    code?: string;
    name?: string;
    symbol?: string;
};
/** @returns {CountryObject} */
declare function CountryObject(): CountryObject;
type CountryObject = {
    id?: string;
    name?: string;
    display_name?: string;
    iso2?: string;
    iso3?: string;
    timezones?: string[];
    hierarchy?: CountryHierarchy[];
    phone_code?: string;
    latitude?: string;
    longitude?: string;
    currency?: CurrencyObject;
    type?: string;
};
/** @returns {GetCountries} */
declare function GetCountries(): GetCountries;
type GetCountries = {
    items?: CountryObject[];
    page?: Page;
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
    country?: string;
    state?: string;
    city?: string;
    sector?: string;
};
/** @returns {GetOneOrAllParams} */
declare function GetOneOrAllParams(): GetOneOrAllParams;
type GetOneOrAllParams = {
    path?: GetOneOrAllPath;
    query?: GetOneOrAllQuery;
};
/** @returns {GetOneOrAll} */
declare function GetOneOrAll(): GetOneOrAll;
type GetOneOrAll = {
    operation_id?: string;
    params?: GetOneOrAllParams;
};
/** @returns {LengthValidation} */
declare function LengthValidation(): LengthValidation;
type LengthValidation = {
    min?: number;
    max?: number;
};
/** @returns {FieldValidationRegex} */
declare function FieldValidationRegex(): FieldValidationRegex;
type FieldValidationRegex = {
    value?: string;
    length?: LengthValidation;
};
/** @returns {FieldValidation} */
declare function FieldValidation(): FieldValidation;
type FieldValidation = {
    type?: string;
    regex?: FieldValidationRegex;
};
/** @returns {GetCountryFieldsAddressValues} */
declare function GetCountryFieldsAddressValues(): GetCountryFieldsAddressValues;
type GetCountryFieldsAddressValues = {
    get_one?: GetOneOrAll;
    get_all?: GetOneOrAll;
};
/** @returns {GetCountryFieldsAddress} */
declare function GetCountryFieldsAddress(): GetCountryFieldsAddress;
type GetCountryFieldsAddress = {
    display_name: string;
    slug: string;
    required: boolean;
    edit?: boolean;
    input: string;
    validation?: FieldValidation;
    values?: GetCountryFieldsAddressValues;
    error_text?: string;
};
/** @returns {GetCountryFieldsAddressTemplate} */
declare function GetCountryFieldsAddressTemplate(): GetCountryFieldsAddressTemplate;
type GetCountryFieldsAddressTemplate = {
    checkout_form: string;
    store_os_form: string;
    default_display: string;
};
/** @returns {GetCountryFields} */
declare function GetCountryFields(): GetCountryFields;
type GetCountryFields = {
    address: GetCountryFieldsAddress[];
    serviceability_fields: string[];
    address_template: GetCountryFieldsAddressTemplate;
};
/** @returns {GetCountry} */
declare function GetCountry(): GetCountry;
type GetCountry = {
    id?: string;
    name?: string;
    display_name?: string;
    iso2?: string;
    iso3?: string;
    timezones?: string[];
    hierarchy?: CountryHierarchy[];
    phone_code?: string;
    latitude?: string;
    longitude?: string;
    currency?: CurrencyObject;
    type?: string;
    fields?: GetCountryFields;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    has_next?: boolean;
    size?: number;
    item_total?: number;
    has_previous?: boolean;
    current?: number;
    type?: string;
};
/** @returns {Localities} */
declare function Localities(): Localities;
type Localities = {
    id?: string;
    name?: string;
    display_name?: string;
    parent_ids?: string[];
    type?: string;
    localities?: LocalityParent[];
};
/** @returns {LocalityParent} */
declare function LocalityParent(): LocalityParent;
type LocalityParent = {
    id?: string;
    name?: string;
    display_name?: string;
    parent_ids?: string[];
    type?: string;
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
    id?: string;
    name?: string;
    display_name?: string;
    parent_ids?: string[];
    type?: string;
    localities?: LocalityParent[];
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    error?: string;
};
