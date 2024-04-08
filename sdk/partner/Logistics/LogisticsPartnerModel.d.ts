export = LogisticsPartnerModel;
/**
 * @typedef ErrorResponseV1
 * @property {string} [error]
 */
/**
 * @typedef BulkRegionServiceabilityTatRequest
 * @property {string} country
 * @property {string} region
 * @property {string} type
 */
/**
 * @typedef BulkRegionServiceabilityTatResponseItemData
 * @property {string} [country]
 * @property {string} [region]
 * @property {string} [type]
 * @property {string} [batch_id]
 * @property {string} [status]
 * @property {Object[]} [failed_records]
 * @property {string} [file_path]
 */
/**
 * @typedef ErrorResponse
 * @property {string} value
 * @property {string} message
 * @property {string} type
 */
/**
 * @typedef FailureResponse
 * @property {boolean} success
 * @property {ErrorResponse[]} error
 */
/**
 * @typedef BulkRegionServiceabilityTatResponse
 * @property {BulkRegionServiceabilityTatResponseItemData[]} [items]
 * @property {Page} [page]
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
 * @typedef BulkRegionJobSerializer
 * @property {string} [file_path]
 * @property {string} country
 * @property {string} action
 * @property {string} region
 */
/**
 * @typedef BulkRegionResponseItemData
 * @property {string} file_path
 * @property {number} [failed]
 * @property {Object[]} [failed_records]
 * @property {string} action
 * @property {string} batch_id
 * @property {string} country
 * @property {number} [success]
 * @property {string} region
 * @property {string} status
 * @property {number} [total]
 * @property {string} [error_file_path]
 */
/**
 * @typedef BulkRegionResponse
 * @property {BulkRegionResponseItemData[]} items
 * @property {Page} page
 */
/**
 * @typedef CourierAccount
 * @property {string} extension_id
 * @property {string} account_id
 * @property {string} scheme_id
 * @property {boolean} is_self_ship
 * @property {string} stage
 * @property {boolean} is_own_account
 */
/**
 * @typedef CourierPartnerAccountFailureResponse
 * @property {boolean} success
 * @property {ErrorResponse[]} error
 */
/**
 * @typedef CompanyCourierPartnerAccountListResponse
 * @property {CourierAccountResponse[]} items
 * @property {Page} page
 */
/**
 * @typedef CourierAccountResponse
 * @property {number} [company_id]
 * @property {string} [extension_id]
 * @property {string} account_id
 * @property {string} scheme_id
 * @property {boolean} is_self_ship
 * @property {string} stage
 * @property {boolean} is_own_account
 * @property {CourierPartnerSchemeModel} scheme_rules
 */
/**
 * @typedef CourierPartnerSchemeModel
 * @property {string} extension_id
 * @property {string} scheme_id
 * @property {string} name
 * @property {ArithmeticOperations} weight
 * @property {string} transport_type
 * @property {string} region
 * @property {string} delivery_type
 * @property {string[]} payment_mode
 * @property {string} stage
 * @property {CourierPartnerSchemeFeatures} feature
 */
/**
 * @typedef CourierPartnerSchemeFeatures
 * @property {boolean} [doorstep_qc]
 * @property {boolean} [qr]
 * @property {boolean} [mps]
 * @property {boolean} [ndr]
 * @property {number} [ndr_attempts]
 * @property {boolean} [dangerous_goods]
 * @property {boolean} [fragile_goods]
 * @property {boolean} [restricted_goods]
 * @property {boolean} [cold_storage_goods]
 * @property {boolean} [doorstep_exchange]
 * @property {boolean} [doorstep_return]
 * @property {boolean} [product_installation]
 * @property {boolean} [openbox_delivery]
 * @property {string} [status_updates]
 * @property {boolean} [multi_pick_single_drop]
 * @property {boolean} [single_pick_multi_drop]
 * @property {boolean} [multi_pick_multi_drop]
 * @property {boolean} [ewaybill]
 */
/**
 * @typedef ArithmeticOperations
 * @property {number} [lt]
 * @property {number} [gt]
 * @property {number} [lte]
 * @property {number} [gte]
 */
/**
 * @typedef CourierPartnerSchemeUpdateRequest
 * @property {string} name
 * @property {ArithmeticOperations} weight
 * @property {string} transport_type
 * @property {string} region
 * @property {string} delivery_type
 * @property {string[]} payment_mode
 * @property {string} stage
 * @property {CourierPartnerSchemeFeatures} feature
 */
/**
 * @typedef CountryHierarchy
 * @property {string} [display_name]
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
declare class LogisticsPartnerModel {
}
declare namespace LogisticsPartnerModel {
    export { ErrorResponseV1, BulkRegionServiceabilityTatRequest, BulkRegionServiceabilityTatResponseItemData, ErrorResponse, FailureResponse, BulkRegionServiceabilityTatResponse, Page, BulkRegionJobSerializer, BulkRegionResponseItemData, BulkRegionResponse, CourierAccount, CourierPartnerAccountFailureResponse, CompanyCourierPartnerAccountListResponse, CourierAccountResponse, CourierPartnerSchemeModel, CourierPartnerSchemeFeatures, ArithmeticOperations, CourierPartnerSchemeUpdateRequest, CountryHierarchy, CurrencyObject, CountryObject, GetCountries };
}
/** @returns {ErrorResponseV1} */
declare function ErrorResponseV1(): ErrorResponseV1;
type ErrorResponseV1 = {
    error?: string;
};
/** @returns {BulkRegionServiceabilityTatRequest} */
declare function BulkRegionServiceabilityTatRequest(): BulkRegionServiceabilityTatRequest;
type BulkRegionServiceabilityTatRequest = {
    country: string;
    region: string;
    type: string;
};
/** @returns {BulkRegionServiceabilityTatResponseItemData} */
declare function BulkRegionServiceabilityTatResponseItemData(): BulkRegionServiceabilityTatResponseItemData;
type BulkRegionServiceabilityTatResponseItemData = {
    country?: string;
    region?: string;
    type?: string;
    batch_id?: string;
    status?: string;
    failed_records?: any[];
    file_path?: string;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    value: string;
    message: string;
    type: string;
};
/** @returns {FailureResponse} */
declare function FailureResponse(): FailureResponse;
type FailureResponse = {
    success: boolean;
    error: ErrorResponse[];
};
/** @returns {BulkRegionServiceabilityTatResponse} */
declare function BulkRegionServiceabilityTatResponse(): BulkRegionServiceabilityTatResponse;
type BulkRegionServiceabilityTatResponse = {
    items?: BulkRegionServiceabilityTatResponseItemData[];
    page?: Page;
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
/** @returns {BulkRegionJobSerializer} */
declare function BulkRegionJobSerializer(): BulkRegionJobSerializer;
type BulkRegionJobSerializer = {
    file_path?: string;
    country: string;
    action: string;
    region: string;
};
/** @returns {BulkRegionResponseItemData} */
declare function BulkRegionResponseItemData(): BulkRegionResponseItemData;
type BulkRegionResponseItemData = {
    file_path: string;
    failed?: number;
    failed_records?: any[];
    action: string;
    batch_id: string;
    country: string;
    success?: number;
    region: string;
    status: string;
    total?: number;
    error_file_path?: string;
};
/** @returns {BulkRegionResponse} */
declare function BulkRegionResponse(): BulkRegionResponse;
type BulkRegionResponse = {
    items: BulkRegionResponseItemData[];
    page: Page;
};
/** @returns {CourierAccount} */
declare function CourierAccount(): CourierAccount;
type CourierAccount = {
    extension_id: string;
    account_id: string;
    scheme_id: string;
    is_self_ship: boolean;
    stage: string;
    is_own_account: boolean;
};
/** @returns {CourierPartnerAccountFailureResponse} */
declare function CourierPartnerAccountFailureResponse(): CourierPartnerAccountFailureResponse;
type CourierPartnerAccountFailureResponse = {
    success: boolean;
    error: ErrorResponse[];
};
/** @returns {CompanyCourierPartnerAccountListResponse} */
declare function CompanyCourierPartnerAccountListResponse(): CompanyCourierPartnerAccountListResponse;
type CompanyCourierPartnerAccountListResponse = {
    items: CourierAccountResponse[];
    page: Page;
};
/** @returns {CourierAccountResponse} */
declare function CourierAccountResponse(): CourierAccountResponse;
type CourierAccountResponse = {
    company_id?: number;
    extension_id?: string;
    account_id: string;
    scheme_id: string;
    is_self_ship: boolean;
    stage: string;
    is_own_account: boolean;
    scheme_rules: CourierPartnerSchemeModel;
};
/** @returns {CourierPartnerSchemeModel} */
declare function CourierPartnerSchemeModel(): CourierPartnerSchemeModel;
type CourierPartnerSchemeModel = {
    extension_id: string;
    scheme_id: string;
    name: string;
    weight: ArithmeticOperations;
    transport_type: string;
    region: string;
    delivery_type: string;
    payment_mode: string[];
    stage: string;
    feature: CourierPartnerSchemeFeatures;
};
/** @returns {CourierPartnerSchemeFeatures} */
declare function CourierPartnerSchemeFeatures(): CourierPartnerSchemeFeatures;
type CourierPartnerSchemeFeatures = {
    doorstep_qc?: boolean;
    qr?: boolean;
    mps?: boolean;
    ndr?: boolean;
    ndr_attempts?: number;
    dangerous_goods?: boolean;
    fragile_goods?: boolean;
    restricted_goods?: boolean;
    cold_storage_goods?: boolean;
    doorstep_exchange?: boolean;
    doorstep_return?: boolean;
    product_installation?: boolean;
    openbox_delivery?: boolean;
    status_updates?: string;
    multi_pick_single_drop?: boolean;
    single_pick_multi_drop?: boolean;
    multi_pick_multi_drop?: boolean;
    ewaybill?: boolean;
};
/** @returns {ArithmeticOperations} */
declare function ArithmeticOperations(): ArithmeticOperations;
type ArithmeticOperations = {
    lt?: number;
    gt?: number;
    lte?: number;
    gte?: number;
};
/** @returns {CourierPartnerSchemeUpdateRequest} */
declare function CourierPartnerSchemeUpdateRequest(): CourierPartnerSchemeUpdateRequest;
type CourierPartnerSchemeUpdateRequest = {
    name: string;
    weight: ArithmeticOperations;
    transport_type: string;
    region: string;
    delivery_type: string;
    payment_mode: string[];
    stage: string;
    feature: CourierPartnerSchemeFeatures;
};
/** @returns {CountryHierarchy} */
declare function CountryHierarchy(): CountryHierarchy;
type CountryHierarchy = {
    display_name?: string;
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
