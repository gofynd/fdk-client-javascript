export = LogisticsPartnerModel;
/**
 * @typedef ErrorResponseV1
 * @property {string} [error]
 */
/**
 * @typedef BulkRegionServiceabilityTatRequestSchema
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
 * @typedef ErrorResponseSchema
 * @property {string} value
 * @property {string} message
 * @property {string} type
 */
/**
 * @typedef FailureResponseSchema
 * @property {boolean} success
 * @property {ErrorResponseSchema[]} error
 */
/**
 * @typedef BulkRegionServiceabilityTatResponseSchema
 * @property {BulkRegionServiceabilityTatResponseItemData[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [total] - Total number of items.
 */
/**
 * @typedef BulkRegionJobSerializerSchema
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
 * @typedef BulkRegionResponseSchema
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
 * @typedef CourierPartnerAccountFailureResponseSchema
 * @property {boolean} success
 * @property {ErrorResponseSchema[]} error
 */
/**
 * @typedef CompanyCourierPartnerAccountListResponseSchema
 * @property {CourierAccountResponseSchema[]} items
 * @property {Page} page
 */
/**
 * @typedef CourierAccountSchemeResponseSchema
 * @property {string} [extension_id]
 * @property {string} [scheme_id]
 * @property {string} [name]
 * @property {ArithmeticOperationsV2} [weight]
 * @property {string} [transport_type]
 * @property {string} [region]
 * @property {string} [delivery_type]
 * @property {string[]} [payment_mode]
 * @property {string} [stage]
 * @property {CourierPartnerSchemeFeatures} [feature]
 */
/**
 * @typedef CourierAccountResponseSchema
 * @property {number} [company_id]
 * @property {string} [extension_id]
 * @property {string} account_id
 * @property {string} scheme_id
 * @property {boolean} is_self_ship
 * @property {string} stage
 * @property {boolean} is_own_account
 * @property {CourierAccountSchemeResponseSchema} scheme_rules
 */
/**
 * @typedef CourierPartnerSchemeModel
 * @property {string} extension_id
 * @property {string} scheme_id
 * @property {string} name
 * @property {ArithmeticOperationsV2} weight
 * @property {ArithmeticOperations} [volumetric_weight]
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
 * @typedef ArithmeticOperationsV2
 * @property {number} [lt]
 * @property {number} [gt]
 * @property {number} [lte]
 * @property {number} [gte]
 */
/**
 * @typedef CourierPartnerSchemeUpdateRequestSchema
 * @property {string} name
 * @property {ArithmeticOperationsV2} weight
 * @property {ArithmeticOperations} [volumetric_weight]
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
    export { ErrorResponseV1, BulkRegionServiceabilityTatRequestSchema, BulkRegionServiceabilityTatResponseItemData, ErrorResponseSchema, FailureResponseSchema, BulkRegionServiceabilityTatResponseSchema, Page, BulkRegionJobSerializerSchema, BulkRegionResponseItemData, BulkRegionResponseSchema, CourierAccount, CourierPartnerAccountFailureResponseSchema, CompanyCourierPartnerAccountListResponseSchema, CourierAccountSchemeResponseSchema, CourierAccountResponseSchema, CourierPartnerSchemeModel, CourierPartnerSchemeFeatures, ArithmeticOperations, ArithmeticOperationsV2, CourierPartnerSchemeUpdateRequestSchema, CountryHierarchy, CurrencyObject, CountryObject, GetCountries };
}
/** @returns {ErrorResponseV1} */
declare function ErrorResponseV1(): ErrorResponseV1;
type ErrorResponseV1 = {
    error?: string;
};
/** @returns {BulkRegionServiceabilityTatRequestSchema} */
declare function BulkRegionServiceabilityTatRequestSchema(): BulkRegionServiceabilityTatRequestSchema;
type BulkRegionServiceabilityTatRequestSchema = {
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
/** @returns {ErrorResponseSchema} */
declare function ErrorResponseSchema(): ErrorResponseSchema;
type ErrorResponseSchema = {
    value: string;
    message: string;
    type: string;
};
/** @returns {FailureResponseSchema} */
declare function FailureResponseSchema(): FailureResponseSchema;
type FailureResponseSchema = {
    success: boolean;
    error: ErrorResponseSchema[];
};
/** @returns {BulkRegionServiceabilityTatResponseSchema} */
declare function BulkRegionServiceabilityTatResponseSchema(): BulkRegionServiceabilityTatResponseSchema;
type BulkRegionServiceabilityTatResponseSchema = {
    items?: BulkRegionServiceabilityTatResponseItemData[];
    page?: Page;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of items on the page.
     */
    item_total?: number;
    /**
     * - The identifier for the next page.
     */
    next_id?: string;
    /**
     * - Indicates whether there is a previous page.
     */
    has_previous?: boolean;
    /**
     * - Indicates whether there is a next page.
     */
    has_next?: boolean;
    /**
     * - The current page number.
     */
    current?: number;
    /**
     * - The type of the page, such as 'PageType'.
     */
    type: string;
    /**
     * - The number of items per page.
     */
    size?: number;
    /**
     * - Total number of items.
     */
    total?: number;
};
/** @returns {BulkRegionJobSerializerSchema} */
declare function BulkRegionJobSerializerSchema(): BulkRegionJobSerializerSchema;
type BulkRegionJobSerializerSchema = {
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
/** @returns {BulkRegionResponseSchema} */
declare function BulkRegionResponseSchema(): BulkRegionResponseSchema;
type BulkRegionResponseSchema = {
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
/** @returns {CourierPartnerAccountFailureResponseSchema} */
declare function CourierPartnerAccountFailureResponseSchema(): CourierPartnerAccountFailureResponseSchema;
type CourierPartnerAccountFailureResponseSchema = {
    success: boolean;
    error: ErrorResponseSchema[];
};
/** @returns {CompanyCourierPartnerAccountListResponseSchema} */
declare function CompanyCourierPartnerAccountListResponseSchema(): CompanyCourierPartnerAccountListResponseSchema;
type CompanyCourierPartnerAccountListResponseSchema = {
    items: CourierAccountResponseSchema[];
    page: Page;
};
/** @returns {CourierAccountSchemeResponseSchema} */
declare function CourierAccountSchemeResponseSchema(): CourierAccountSchemeResponseSchema;
type CourierAccountSchemeResponseSchema = {
    extension_id?: string;
    scheme_id?: string;
    name?: string;
    weight?: ArithmeticOperationsV2;
    transport_type?: string;
    region?: string;
    delivery_type?: string;
    payment_mode?: string[];
    stage?: string;
    feature?: CourierPartnerSchemeFeatures;
};
/** @returns {CourierAccountResponseSchema} */
declare function CourierAccountResponseSchema(): CourierAccountResponseSchema;
type CourierAccountResponseSchema = {
    company_id?: number;
    extension_id?: string;
    account_id: string;
    scheme_id: string;
    is_self_ship: boolean;
    stage: string;
    is_own_account: boolean;
    scheme_rules: CourierAccountSchemeResponseSchema;
};
/** @returns {CourierPartnerSchemeModel} */
declare function CourierPartnerSchemeModel(): CourierPartnerSchemeModel;
type CourierPartnerSchemeModel = {
    extension_id: string;
    scheme_id: string;
    name: string;
    weight: ArithmeticOperationsV2;
    volumetric_weight?: ArithmeticOperations;
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
/** @returns {ArithmeticOperationsV2} */
declare function ArithmeticOperationsV2(): ArithmeticOperationsV2;
type ArithmeticOperationsV2 = {
    lt?: number;
    gt?: number;
    lte?: number;
    gte?: number;
};
/** @returns {CourierPartnerSchemeUpdateRequestSchema} */
declare function CourierPartnerSchemeUpdateRequestSchema(): CourierPartnerSchemeUpdateRequestSchema;
type CourierPartnerSchemeUpdateRequestSchema = {
    name: string;
    weight: ArithmeticOperationsV2;
    volumetric_weight?: ArithmeticOperations;
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
