export = LogisticsPartnerModel;
/**
 * @typedef ArithmeticOperations
 * @property {number} [gt]
 * @property {number} [gte]
 * @property {number} [lt]
 * @property {number} [lte]
 */
/**
 * @typedef BulkRegionJobSerializer
 * @property {string} action
 * @property {string} country
 * @property {string} [file_path]
 * @property {string} region
 */
/**
 * @typedef BulkRegionResponse
 * @property {BulkRegionResponseItemData[]} items
 * @property {Page} page
 */
/**
 * @typedef BulkRegionResponseItemData
 * @property {string} action
 * @property {string} batch_id
 * @property {string} country
 * @property {string} [error_file_path]
 * @property {number} [failed]
 * @property {Object[]} [failed_records]
 * @property {string} file_path
 * @property {string} region
 * @property {string} status
 * @property {number} [success]
 * @property {number} [total]
 */
/**
 * @typedef BulkRegionServiceabilityTatRequest
 * @property {string} country
 * @property {string} region
 * @property {string} type
 */
/**
 * @typedef BulkRegionServiceabilityTatResponse
 * @property {BulkRegionServiceabilityTatResponseItemData[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BulkRegionServiceabilityTatResponseItemData
 * @property {string} [batch_id]
 * @property {string} [country]
 * @property {Object[]} [failed_records]
 * @property {string} [file_path]
 * @property {string} [region]
 * @property {string} [status]
 * @property {string} [type]
 */
/**
 * @typedef CompanyCourierPartnerAccountListResponse
 * @property {CourierAccountResponse[]} items
 * @property {Page} page
 */
/**
 * @typedef CourierAccount
 * @property {string} account_id
 * @property {string} extension_id
 * @property {boolean} is_own_account
 * @property {boolean} is_self_ship
 * @property {string} scheme_id
 * @property {string} stage
 */
/**
 * @typedef CourierAccountResponse
 * @property {string} account_id
 * @property {boolean} is_own_account
 * @property {boolean} is_self_ship
 * @property {string} scheme_id
 * @property {CourierPartnerSchemeModel} scheme_rules
 * @property {string} stage
 */
/**
 * @typedef CourierPartnerAccountFailureResponse
 * @property {ErrorResponse[]} error
 * @property {boolean} success
 */
/**
 * @typedef CourierPartnerSchemeFeatures
 * @property {boolean} [cold_storage_goods]
 * @property {boolean} [dangerous_goods]
 * @property {boolean} [doorstep_exchange]
 * @property {boolean} [doorstep_qc]
 * @property {boolean} [doorstep_return]
 * @property {boolean} [ewaybill]
 * @property {boolean} [fragile_goods]
 * @property {boolean} [mps]
 * @property {boolean} [multi_pick_multi_drop]
 * @property {boolean} [multi_pick_single_drop]
 * @property {boolean} [ndr]
 * @property {number} [ndr_attempts]
 * @property {boolean} [openbox_delivery]
 * @property {boolean} [product_installation]
 * @property {boolean} [qr]
 * @property {boolean} [restricted_goods]
 * @property {boolean} [single_pick_multi_drop]
 * @property {string} [status_updates]
 */
/**
 * @typedef CourierPartnerSchemeModel
 * @property {string} delivery_type
 * @property {string} extension_id
 * @property {CourierPartnerSchemeFeatures} feature
 * @property {string} name
 * @property {string[]} payment_mode
 * @property {string} region
 * @property {string} scheme_id
 * @property {string} stage
 * @property {string} transport_type
 * @property {ArithmeticOperations} weight
 */
/**
 * @typedef CourierPartnerSchemeUpdateRequest
 * @property {string} delivery_type
 * @property {CourierPartnerSchemeFeatures} feature
 * @property {string} name
 * @property {string[]} payment_mode
 * @property {string} region
 * @property {string} stage
 * @property {string} transport_type
 * @property {ArithmeticOperations} weight
 */
/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} type
 * @property {string} value
 */
/**
 * @typedef FailureResponse
 * @property {ErrorResponse[]} error
 * @property {boolean} success
 */
/**
 * @typedef GetCountries
 * @property {GetCountriesItems[]} items
 * @property {Page} page
 */
/**
 * @typedef GetCountriesItems
 * @property {string} [currency]
 * @property {string} [display_name]
 * @property {HierarchyItems[]} [hierarchy]
 * @property {string} [id]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [latitude]
 * @property {string} [longitude]
 * @property {string} [name]
 * @property {string} [phone_code]
 * @property {string[]} [timezones]
 * @property {string} [type]
 */
/**
 * @typedef HierarchyItems
 * @property {string} [display_name]
 * @property {string} [slug]
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
declare class LogisticsPartnerModel {
}
declare namespace LogisticsPartnerModel {
    export { ArithmeticOperations, BulkRegionJobSerializer, BulkRegionResponse, BulkRegionResponseItemData, BulkRegionServiceabilityTatRequest, BulkRegionServiceabilityTatResponse, BulkRegionServiceabilityTatResponseItemData, CompanyCourierPartnerAccountListResponse, CourierAccount, CourierAccountResponse, CourierPartnerAccountFailureResponse, CourierPartnerSchemeFeatures, CourierPartnerSchemeModel, CourierPartnerSchemeUpdateRequest, ErrorResponse, FailureResponse, GetCountries, GetCountriesItems, HierarchyItems, Page };
}
/** @returns {ArithmeticOperations} */
declare function ArithmeticOperations(): ArithmeticOperations;
type ArithmeticOperations = {
    gt?: number;
    gte?: number;
    lt?: number;
    lte?: number;
};
/** @returns {BulkRegionJobSerializer} */
declare function BulkRegionJobSerializer(): BulkRegionJobSerializer;
type BulkRegionJobSerializer = {
    action: string;
    country: string;
    file_path?: string;
    region: string;
};
/** @returns {BulkRegionResponse} */
declare function BulkRegionResponse(): BulkRegionResponse;
type BulkRegionResponse = {
    items: BulkRegionResponseItemData[];
    page: Page;
};
/** @returns {BulkRegionResponseItemData} */
declare function BulkRegionResponseItemData(): BulkRegionResponseItemData;
type BulkRegionResponseItemData = {
    action: string;
    batch_id: string;
    country: string;
    error_file_path?: string;
    failed?: number;
    failed_records?: any[];
    file_path: string;
    region: string;
    status: string;
    success?: number;
    total?: number;
};
/** @returns {BulkRegionServiceabilityTatRequest} */
declare function BulkRegionServiceabilityTatRequest(): BulkRegionServiceabilityTatRequest;
type BulkRegionServiceabilityTatRequest = {
    country: string;
    region: string;
    type: string;
};
/** @returns {BulkRegionServiceabilityTatResponse} */
declare function BulkRegionServiceabilityTatResponse(): BulkRegionServiceabilityTatResponse;
type BulkRegionServiceabilityTatResponse = {
    items?: BulkRegionServiceabilityTatResponseItemData[];
    page?: Page;
};
/** @returns {BulkRegionServiceabilityTatResponseItemData} */
declare function BulkRegionServiceabilityTatResponseItemData(): BulkRegionServiceabilityTatResponseItemData;
type BulkRegionServiceabilityTatResponseItemData = {
    batch_id?: string;
    country?: string;
    failed_records?: any[];
    file_path?: string;
    region?: string;
    status?: string;
    type?: string;
};
/** @returns {CompanyCourierPartnerAccountListResponse} */
declare function CompanyCourierPartnerAccountListResponse(): CompanyCourierPartnerAccountListResponse;
type CompanyCourierPartnerAccountListResponse = {
    items: CourierAccountResponse[];
    page: Page;
};
/** @returns {CourierAccount} */
declare function CourierAccount(): CourierAccount;
type CourierAccount = {
    account_id: string;
    extension_id: string;
    is_own_account: boolean;
    is_self_ship: boolean;
    scheme_id: string;
    stage: string;
};
/** @returns {CourierAccountResponse} */
declare function CourierAccountResponse(): CourierAccountResponse;
type CourierAccountResponse = {
    account_id: string;
    is_own_account: boolean;
    is_self_ship: boolean;
    scheme_id: string;
    scheme_rules: CourierPartnerSchemeModel;
    stage: string;
};
/** @returns {CourierPartnerAccountFailureResponse} */
declare function CourierPartnerAccountFailureResponse(): CourierPartnerAccountFailureResponse;
type CourierPartnerAccountFailureResponse = {
    error: ErrorResponse[];
    success: boolean;
};
/** @returns {CourierPartnerSchemeFeatures} */
declare function CourierPartnerSchemeFeatures(): CourierPartnerSchemeFeatures;
type CourierPartnerSchemeFeatures = {
    cold_storage_goods?: boolean;
    dangerous_goods?: boolean;
    doorstep_exchange?: boolean;
    doorstep_qc?: boolean;
    doorstep_return?: boolean;
    ewaybill?: boolean;
    fragile_goods?: boolean;
    mps?: boolean;
    multi_pick_multi_drop?: boolean;
    multi_pick_single_drop?: boolean;
    ndr?: boolean;
    ndr_attempts?: number;
    openbox_delivery?: boolean;
    product_installation?: boolean;
    qr?: boolean;
    restricted_goods?: boolean;
    single_pick_multi_drop?: boolean;
    status_updates?: string;
};
/** @returns {CourierPartnerSchemeModel} */
declare function CourierPartnerSchemeModel(): CourierPartnerSchemeModel;
type CourierPartnerSchemeModel = {
    delivery_type: string;
    extension_id: string;
    feature: CourierPartnerSchemeFeatures;
    name: string;
    payment_mode: string[];
    region: string;
    scheme_id: string;
    stage: string;
    transport_type: string;
    weight: ArithmeticOperations;
};
/** @returns {CourierPartnerSchemeUpdateRequest} */
declare function CourierPartnerSchemeUpdateRequest(): CourierPartnerSchemeUpdateRequest;
type CourierPartnerSchemeUpdateRequest = {
    delivery_type: string;
    feature: CourierPartnerSchemeFeatures;
    name: string;
    payment_mode: string[];
    region: string;
    stage: string;
    transport_type: string;
    weight: ArithmeticOperations;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    message: string;
    type: string;
    value: string;
};
/** @returns {FailureResponse} */
declare function FailureResponse(): FailureResponse;
type FailureResponse = {
    error: ErrorResponse[];
    success: boolean;
};
/** @returns {GetCountries} */
declare function GetCountries(): GetCountries;
type GetCountries = {
    items: GetCountriesItems[];
    page: Page;
};
/** @returns {GetCountriesItems} */
declare function GetCountriesItems(): GetCountriesItems;
type GetCountriesItems = {
    currency?: string;
    display_name?: string;
    hierarchy?: HierarchyItems[];
    id?: string;
    iso2?: string;
    iso3?: string;
    latitude?: string;
    longitude?: string;
    name?: string;
    phone_code?: string;
    timezones?: string[];
    type?: string;
};
/** @returns {HierarchyItems} */
declare function HierarchyItems(): HierarchyItems;
type HierarchyItems = {
    display_name?: string;
    slug?: string;
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
