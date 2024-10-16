export = LogisticsPartnerModel;
/**
 * @typedef BulkRegionServiceabilityTatDetails
 * @property {string} country
 * @property {string} region
 * @property {string} type
 */
/**
 * @typedef BulkRegionServiceabilityTatResultItemData
 * @property {string} [country]
 * @property {string} [region]
 * @property {string} [type]
 * @property {string} [batch_id]
 * @property {string} [status]
 * @property {Object[]} [failed_records]
 * @property {string} [file_path]
 */
/**
 * @typedef ErrorResult
 * @property {string} value
 * @property {string} message
 * @property {string} type
 */
/**
 * @typedef FailureResult
 * @property {boolean} success
 * @property {ErrorResult[]} error
 */
/**
 * @typedef BulkRegionServiceabilityTatResult
 * @property {BulkRegionServiceabilityTatResultItemData[]} [items]
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
 */
/**
 * @typedef RegionTatItemResult
 * @property {RegionTatResult[]} items
 * @property {Page} page
 */
/**
 * @typedef RegionServiceabilityItemResult
 * @property {RegionServiceabilityResult[]} items
 * @property {Page} page
 */
/**
 * @typedef ServiceabilityDetailsResult
 * @property {boolean} [first_mile] - Boolean value indicating whether
 *   first-mile service is available or not.
 * @property {boolean} [last_mile] - Boolean value indicating whether last-mile
 *   service is available or not.
 * @property {number} [cod_limit] - Limit on the amount of cash on delivery
 *   (COD) payments allowed in the specified region.
 * @property {boolean} [doorstep_return] - Indicates if doorstep return service
 *   is available. This refers to the ability to return items directly from the
 *   customer's doorstep.
 * @property {boolean} [doorstep_qc] - Indicates if doorstep quality check
 *   service is available. This refers to the ability to perform quality checks
 *   on items at the customer's doorstep.
 * @property {string} [pickup_cutoff] - Time of day by which pickups must be
 *   scheduled to be processed on the same day.
 * @property {boolean} [installation] - Boolean value indicating whether
 *   installation services are available in the specified region or not.
 * @property {string} [id] - Unique identifier for the serviceability record.
 */
/**
 * @typedef ServiceabilityDetails
 * @property {boolean} [first_mile] - Boolean value indicating whether
 *   first-mile service is available or not.
 * @property {boolean} [last_mile] - Boolean value indicating whether last-mile
 *   service is available or not.
 * @property {number} [cod_limit] - Limit on the amount of cash on delivery
 *   (COD) payments allowed in the specified region.
 * @property {boolean} [doorstep_return] - Indicates if doorstep return service
 *   is available. This refers to the ability to return items directly from the
 *   customer's doorstep.
 * @property {boolean} [doorstep_qc] - Indicates if doorstep quality check
 *   service is available. This refers to the ability to perform quality checks
 *   on items at the customer's doorstep.
 * @property {string} [pickup_cutoff] - Time of day by which pickups must be
 *   scheduled to be processed on the same day.
 * @property {boolean} [installation] - Boolean value indicating whether
 *   installation services are available in the specified region or not.
 */
/**
 * @typedef RegionServiceabilityResult
 * @property {string} country_code - ISO2 code representing the country where
 *   the serviceability is being specified.
 * @property {string} [state_code] - Code representing the state or province
 *   within the country where the serviceability is being specified.
 * @property {string} [city_code] - Code representing the city within the state
 *   where the serviceability is being specified.
 * @property {string} [sector_code] - Code representing a specific sector or
 *   district within the city where the serviceability is being specified.
 * @property {string} [pincode] - Postal or ZIP code for the specific area
 *   within the city where the serviceability is being specified.
 * @property {boolean} [first_mile] - Boolean value indicating whether
 *   first-mile service is available or not.
 * @property {boolean} [last_mile] - Boolean value indicating whether last-mile
 *   service is available or not.
 * @property {number} [cod_limit] - Limit on the amount of cash on delivery
 *   (COD) payments allowed in the specified region.
 * @property {boolean} [doorstep_return] - Indicates if doorstep return service
 *   is available. This refers to the ability to return items directly from the
 *   customer's doorstep.
 * @property {boolean} [doorstep_qc] - Indicates if doorstep quality check
 *   service is available. This refers to the ability to perform quality checks
 *   on items at the customer's doorstep.
 * @property {string} [pickup_cutoff] - Time of day by which pickups must be
 *   scheduled to be processed on the same day.
 * @property {boolean} [installation] - Boolean value indicating whether
 *   installation services are available in the specified region or not.
 * @property {string} id - Unique identifier for the serviceability record.
 */
/**
 * @typedef RegionServiceabilityDetails
 * @property {string} country_code - ISO2 code representing the country where
 *   the serviceability is being specified.
 * @property {string} [state_code] - Code representing the state or province
 *   within the country where the serviceability is being specified.
 * @property {string} [city_code] - Code representing the city within the state
 *   where the serviceability is being specified.
 * @property {string} [sector_code] - Code representing a specific sector or
 *   district within the city where the serviceability is being specified.
 * @property {string} [pincode] - Postal or ZIP code for the specific area
 *   within the city where the serviceability is being specified.
 * @property {boolean} [first_mile] - Boolean value indicating whether
 *   first-mile service is available or not.
 * @property {boolean} [last_mile] - Boolean value indicating whether last-mile
 *   service is available or not.
 * @property {number} [cod_limit] - Limit on the amount of cash on delivery
 *   (COD) payments allowed in the specified region.
 * @property {boolean} [doorstep_return] - Indicates if doorstep return service
 *   is available. This refers to the ability to return items directly from the
 *   customer's doorstep.
 * @property {boolean} [doorstep_qc] - Indicates if doorstep quality check
 *   service is available. This refers to the ability to perform quality checks
 *   on items at the customer's doorstep.
 * @property {string} [pickup_cutoff] - Time of day by which pickups must be
 *   scheduled to be processed on the same day.
 * @property {boolean} [installation] - Boolean value indicating whether
 *   installation services are available in the specified region or not.
 */
/**
 * @typedef RegionTatDetails
 * @property {string} from_country_code - ISO2 code representing the country of
 *   origin for the delivery.
 * @property {string} [from_state_code] - Code representing the state or
 *   province of origin within the country.
 * @property {string} [from_city_code] - Code representing the city of origin
 *   within the state.
 * @property {string} [from_sector_code] - Code representing a specific sector
 *   or district within the city of origin.
 * @property {string} [from_pincode] - Postal or ZIP code of the origin area.
 * @property {string} to_country_code - ISO2 code representing the destination country.
 * @property {string} [to_state_code] - Code representing the state or province
 *   of the destination within the country.
 * @property {string} [to_city_code] - Code representing the city of destination
 *   within the state.
 * @property {string} [to_sector_code] - Code representing a specific sector or
 *   district within the city of destination.
 * @property {string} [to_pincode] - Postal or ZIP code of the destination area.
 * @property {number} [max_delivery_time] - Maximum time required for delivery
 *   from the origin to the destination in seconds.
 * @property {number} [min_delivery_time] - Minimum time required for delivery
 *   from the origin to the destination in seconds.
 */
/**
 * @typedef RegionTatUpdateDetails
 * @property {number} [max_delivery_time] - Maximum time required for delivery
 *   from the origin to the destination in seconds.
 * @property {number} [min_delivery_time] - Minimum time required for delivery
 *   from the origin to the destination in seconds.
 */
/**
 * @typedef RegionTatResult
 * @property {string} from_country_code - ISO2 code representing the country of
 *   origin for the delivery.
 * @property {string} [from_state_code] - Code representing the state or
 *   province of origin within the country.
 * @property {string} [from_city_code] - Code representing the city of origin
 *   within the state.
 * @property {string} [from_sector_code] - Code representing a specific sector
 *   or district within the city of origin.
 * @property {string} [from_pincode] - Postal or ZIP code of the origin area.
 * @property {string} to_country_code - ISO2 code representing the destination country.
 * @property {string} [to_state_code] - Code representing the state or province
 *   of the destination within the country.
 * @property {string} [to_city_code] - Code representing the city of destination
 *   within the state.
 * @property {string} [to_sector_code] - Code representing a specific sector or
 *   district within the city of destination.
 * @property {string} [to_pincode] - Postal or ZIP code of the destination area.
 * @property {number} [max_delivery_time] - Maximum time required for delivery
 *   from the origin to the destination in seconds.
 * @property {number} [min_delivery_time] - Minimum time required for delivery
 *   from the origin to the destination in seconds.
 * @property {string} id - Unique identifier for the delivery time record.
 */
/**
 * @typedef BulkRegionJobDetails
 * @property {string} [file_path]
 * @property {string} country
 * @property {string} action
 * @property {string} region
 */
/**
 * @typedef BulkRegionResultItemData
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
 * @typedef BulkRegionResult
 * @property {BulkRegionResultItemData[]} items
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
 * @typedef CourierAccountDetailsBody
 * @property {string} extension_id
 * @property {string} [account_id]
 * @property {string} scheme_id
 * @property {boolean} is_self_ship
 * @property {string} stage
 * @property {boolean} is_own_account
 */
/**
 * @typedef CourierPartnerAccountFailureResult
 * @property {boolean} success
 * @property {ErrorResult[]} error
 */
/**
 * @typedef CompanyCourierPartnerAccountListResult
 * @property {CourierAccountResult[]} items
 * @property {Page} page
 */
/**
 * @typedef CourierAccountResult
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
 * @typedef CourierPartnerSchemeDetailsModel
 * @property {string} extension_id
 * @property {string} [scheme_id]
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
 * @property {boolean} [doorstep_qc] - Indicates if the courier partner offers
 *   doorstep quality check services.
 * @property {boolean} [qr] - Specifies whether the courier partner supports QR
 *   code-based operations.
 * @property {boolean} [mps] - Denotes if the courier partner supports
 *   multi-part shipment services.
 * @property {boolean} [ndr] - Indicates if the Non-Delivery Report (NDR)
 *   feature is supported by the courier partner.
 * @property {number} [ndr_attempts] - Number of attempts allowed for resolving
 *   Non-Delivery Reports (NDR).
 * @property {boolean} [dangerous_goods] - Specifies if the courier partner
 *   handles the transportation of dangerous goods.
 * @property {boolean} [fragile_goods] - Indicates whether the courier partner
 *   manages the shipment of fragile goods.
 * @property {boolean} [restricted_goods] - Indicates if the courier partner
 *   handles restricted goods, as per regulatory guidelines.
 * @property {boolean} [cold_storage_goods] - Denotes if the courier partner
 *   provides cold storage facilities for goods.
 * @property {boolean} [doorstep_exchange] - Indicates if the courier partner
 *   supports doorstep exchange services.
 * @property {boolean} [doorstep_return] - Specifies if the courier partner
 *   offers doorstep return services.
 * @property {boolean} [product_installation] - Indicates if the courier partner
 *   provides product installation services upon delivery.
 * @property {boolean} [openbox_delivery] - Specifies whether the courier
 *   partner supports open-box delivery, allowing customers to inspect goods
 *   before accepting.
 * @property {string} [status_updates] - Describes the type of status updates
 *   provided by the courier partner (e.g., real-time, periodic).
 * @property {boolean} [multi_pick_single_drop] - Indicates if the courier
 *   partner supports multiple pickups to a single drop location.
 * @property {boolean} [single_pick_multi_drop] - Indicates whether the courier
 *   partner supports single pickup to multiple drop locations.
 * @property {boolean} [multi_pick_multi_drop] - Denotes if the courier partner
 *   offers services for multiple pickups to multiple drop locations.
 * @property {boolean} [ewaybill] - Specifies if the courier partner requires or
 *   supports the generation of e-waybills for shipments.
 * @property {number} [qc_shipment_item_quantity] - Defines the maximum quantity
 *   of items allowed in a quality check shipment.
 * @property {number} [non_qc_shipment_item_quantity] - Defines the maximum
 *   quantity of items allowed in a non-quality check shipment.
 */
/**
 * @typedef ArithmeticOperations
 * @property {number} [lt]
 * @property {number} [gt]
 * @property {number} [lte]
 * @property {number} [gte]
 */
/**
 * @typedef CourierPartnerSchemeUpdateDetails
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
 * @typedef GetCountries
 * @property {GetCountriesItems[]} items
 * @property {Page} page
 */
/**
 * @typedef GetCountriesItems
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string[]} [timezones]
 * @property {HierarchyItems[]} [hierarchy]
 * @property {string} [phone_code]
 * @property {string} [currency]
 * @property {string} [type]
 * @property {string} [latitude]
 * @property {string} [longitude]
 * @property {string} [display_name]
 * @property {boolean} [has_next_hierarchy] - More detailed hierarchical data is
 *   available, meaning states, cities, or other regions within the country have
 *   been populated in the system.
 */
/**
 * @typedef HierarchyItems
 * @property {string} [display_name]
 * @property {string} [slug]
 */
/**
 * @typedef ValidationError
 * @property {string} message - A brief description of the error encountered.
 * @property {string} field - The field in the request that caused the error.
 */
/**
 * @typedef StandardError
 * @property {string} message - A brief description of the error.
 */
declare class LogisticsPartnerModel {
}
declare namespace LogisticsPartnerModel {
    export { BulkRegionServiceabilityTatDetails, BulkRegionServiceabilityTatResultItemData, ErrorResult, FailureResult, BulkRegionServiceabilityTatResult, Page, RegionTatItemResult, RegionServiceabilityItemResult, ServiceabilityDetailsResult, ServiceabilityDetails, RegionServiceabilityResult, RegionServiceabilityDetails, RegionTatDetails, RegionTatUpdateDetails, RegionTatResult, BulkRegionJobDetails, BulkRegionResultItemData, BulkRegionResult, CourierAccount, CourierAccountDetailsBody, CourierPartnerAccountFailureResult, CompanyCourierPartnerAccountListResult, CourierAccountResult, CourierPartnerSchemeModel, CourierPartnerSchemeDetailsModel, CourierPartnerSchemeFeatures, ArithmeticOperations, CourierPartnerSchemeUpdateDetails, GetCountries, GetCountriesItems, HierarchyItems, ValidationError, StandardError };
}
/** @returns {BulkRegionServiceabilityTatDetails} */
declare function BulkRegionServiceabilityTatDetails(): BulkRegionServiceabilityTatDetails;
type BulkRegionServiceabilityTatDetails = {
    country: string;
    region: string;
    type: string;
};
/** @returns {BulkRegionServiceabilityTatResultItemData} */
declare function BulkRegionServiceabilityTatResultItemData(): BulkRegionServiceabilityTatResultItemData;
type BulkRegionServiceabilityTatResultItemData = {
    country?: string;
    region?: string;
    type?: string;
    batch_id?: string;
    status?: string;
    failed_records?: any[];
    file_path?: string;
};
/** @returns {ErrorResult} */
declare function ErrorResult(): ErrorResult;
type ErrorResult = {
    value: string;
    message: string;
    type: string;
};
/** @returns {FailureResult} */
declare function FailureResult(): FailureResult;
type FailureResult = {
    success: boolean;
    error: ErrorResult[];
};
/** @returns {BulkRegionServiceabilityTatResult} */
declare function BulkRegionServiceabilityTatResult(): BulkRegionServiceabilityTatResult;
type BulkRegionServiceabilityTatResult = {
    items?: BulkRegionServiceabilityTatResultItemData[];
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
};
/** @returns {RegionTatItemResult} */
declare function RegionTatItemResult(): RegionTatItemResult;
type RegionTatItemResult = {
    items: RegionTatResult[];
    page: Page;
};
/** @returns {RegionServiceabilityItemResult} */
declare function RegionServiceabilityItemResult(): RegionServiceabilityItemResult;
type RegionServiceabilityItemResult = {
    items: RegionServiceabilityResult[];
    page: Page;
};
/** @returns {ServiceabilityDetailsResult} */
declare function ServiceabilityDetailsResult(): ServiceabilityDetailsResult;
type ServiceabilityDetailsResult = {
    /**
     * - Boolean value indicating whether
     * first-mile service is available or not.
     */
    first_mile?: boolean;
    /**
     * - Boolean value indicating whether last-mile
     * service is available or not.
     */
    last_mile?: boolean;
    /**
     * - Limit on the amount of cash on delivery
     * (COD) payments allowed in the specified region.
     */
    cod_limit?: number;
    /**
     * - Indicates if doorstep return service
     * is available. This refers to the ability to return items directly from the
     * customer's doorstep.
     */
    doorstep_return?: boolean;
    /**
     * - Indicates if doorstep quality check
     * service is available. This refers to the ability to perform quality checks
     * on items at the customer's doorstep.
     */
    doorstep_qc?: boolean;
    /**
     * - Time of day by which pickups must be
     * scheduled to be processed on the same day.
     */
    pickup_cutoff?: string;
    /**
     * - Boolean value indicating whether
     * installation services are available in the specified region or not.
     */
    installation?: boolean;
    /**
     * - Unique identifier for the serviceability record.
     */
    id?: string;
};
/** @returns {ServiceabilityDetails} */
declare function ServiceabilityDetails(): ServiceabilityDetails;
type ServiceabilityDetails = {
    /**
     * - Boolean value indicating whether
     * first-mile service is available or not.
     */
    first_mile?: boolean;
    /**
     * - Boolean value indicating whether last-mile
     * service is available or not.
     */
    last_mile?: boolean;
    /**
     * - Limit on the amount of cash on delivery
     * (COD) payments allowed in the specified region.
     */
    cod_limit?: number;
    /**
     * - Indicates if doorstep return service
     * is available. This refers to the ability to return items directly from the
     * customer's doorstep.
     */
    doorstep_return?: boolean;
    /**
     * - Indicates if doorstep quality check
     * service is available. This refers to the ability to perform quality checks
     * on items at the customer's doorstep.
     */
    doorstep_qc?: boolean;
    /**
     * - Time of day by which pickups must be
     * scheduled to be processed on the same day.
     */
    pickup_cutoff?: string;
    /**
     * - Boolean value indicating whether
     * installation services are available in the specified region or not.
     */
    installation?: boolean;
};
/** @returns {RegionServiceabilityResult} */
declare function RegionServiceabilityResult(): RegionServiceabilityResult;
type RegionServiceabilityResult = {
    /**
     * - ISO2 code representing the country where
     * the serviceability is being specified.
     */
    country_code: string;
    /**
     * - Code representing the state or province
     * within the country where the serviceability is being specified.
     */
    state_code?: string;
    /**
     * - Code representing the city within the state
     * where the serviceability is being specified.
     */
    city_code?: string;
    /**
     * - Code representing a specific sector or
     * district within the city where the serviceability is being specified.
     */
    sector_code?: string;
    /**
     * - Postal or ZIP code for the specific area
     * within the city where the serviceability is being specified.
     */
    pincode?: string;
    /**
     * - Boolean value indicating whether
     * first-mile service is available or not.
     */
    first_mile?: boolean;
    /**
     * - Boolean value indicating whether last-mile
     * service is available or not.
     */
    last_mile?: boolean;
    /**
     * - Limit on the amount of cash on delivery
     * (COD) payments allowed in the specified region.
     */
    cod_limit?: number;
    /**
     * - Indicates if doorstep return service
     * is available. This refers to the ability to return items directly from the
     * customer's doorstep.
     */
    doorstep_return?: boolean;
    /**
     * - Indicates if doorstep quality check
     * service is available. This refers to the ability to perform quality checks
     * on items at the customer's doorstep.
     */
    doorstep_qc?: boolean;
    /**
     * - Time of day by which pickups must be
     * scheduled to be processed on the same day.
     */
    pickup_cutoff?: string;
    /**
     * - Boolean value indicating whether
     * installation services are available in the specified region or not.
     */
    installation?: boolean;
    /**
     * - Unique identifier for the serviceability record.
     */
    id: string;
};
/** @returns {RegionServiceabilityDetails} */
declare function RegionServiceabilityDetails(): RegionServiceabilityDetails;
type RegionServiceabilityDetails = {
    /**
     * - ISO2 code representing the country where
     * the serviceability is being specified.
     */
    country_code: string;
    /**
     * - Code representing the state or province
     * within the country where the serviceability is being specified.
     */
    state_code?: string;
    /**
     * - Code representing the city within the state
     * where the serviceability is being specified.
     */
    city_code?: string;
    /**
     * - Code representing a specific sector or
     * district within the city where the serviceability is being specified.
     */
    sector_code?: string;
    /**
     * - Postal or ZIP code for the specific area
     * within the city where the serviceability is being specified.
     */
    pincode?: string;
    /**
     * - Boolean value indicating whether
     * first-mile service is available or not.
     */
    first_mile?: boolean;
    /**
     * - Boolean value indicating whether last-mile
     * service is available or not.
     */
    last_mile?: boolean;
    /**
     * - Limit on the amount of cash on delivery
     * (COD) payments allowed in the specified region.
     */
    cod_limit?: number;
    /**
     * - Indicates if doorstep return service
     * is available. This refers to the ability to return items directly from the
     * customer's doorstep.
     */
    doorstep_return?: boolean;
    /**
     * - Indicates if doorstep quality check
     * service is available. This refers to the ability to perform quality checks
     * on items at the customer's doorstep.
     */
    doorstep_qc?: boolean;
    /**
     * - Time of day by which pickups must be
     * scheduled to be processed on the same day.
     */
    pickup_cutoff?: string;
    /**
     * - Boolean value indicating whether
     * installation services are available in the specified region or not.
     */
    installation?: boolean;
};
/** @returns {RegionTatDetails} */
declare function RegionTatDetails(): RegionTatDetails;
type RegionTatDetails = {
    /**
     * - ISO2 code representing the country of
     * origin for the delivery.
     */
    from_country_code: string;
    /**
     * - Code representing the state or
     * province of origin within the country.
     */
    from_state_code?: string;
    /**
     * - Code representing the city of origin
     * within the state.
     */
    from_city_code?: string;
    /**
     * - Code representing a specific sector
     * or district within the city of origin.
     */
    from_sector_code?: string;
    /**
     * - Postal or ZIP code of the origin area.
     */
    from_pincode?: string;
    /**
     * - ISO2 code representing the destination country.
     */
    to_country_code: string;
    /**
     * - Code representing the state or province
     * of the destination within the country.
     */
    to_state_code?: string;
    /**
     * - Code representing the city of destination
     * within the state.
     */
    to_city_code?: string;
    /**
     * - Code representing a specific sector or
     * district within the city of destination.
     */
    to_sector_code?: string;
    /**
     * - Postal or ZIP code of the destination area.
     */
    to_pincode?: string;
    /**
     * - Maximum time required for delivery
     * from the origin to the destination in seconds.
     */
    max_delivery_time?: number;
    /**
     * - Minimum time required for delivery
     * from the origin to the destination in seconds.
     */
    min_delivery_time?: number;
};
/** @returns {RegionTatUpdateDetails} */
declare function RegionTatUpdateDetails(): RegionTatUpdateDetails;
type RegionTatUpdateDetails = {
    /**
     * - Maximum time required for delivery
     * from the origin to the destination in seconds.
     */
    max_delivery_time?: number;
    /**
     * - Minimum time required for delivery
     * from the origin to the destination in seconds.
     */
    min_delivery_time?: number;
};
/** @returns {RegionTatResult} */
declare function RegionTatResult(): RegionTatResult;
type RegionTatResult = {
    /**
     * - ISO2 code representing the country of
     * origin for the delivery.
     */
    from_country_code: string;
    /**
     * - Code representing the state or
     * province of origin within the country.
     */
    from_state_code?: string;
    /**
     * - Code representing the city of origin
     * within the state.
     */
    from_city_code?: string;
    /**
     * - Code representing a specific sector
     * or district within the city of origin.
     */
    from_sector_code?: string;
    /**
     * - Postal or ZIP code of the origin area.
     */
    from_pincode?: string;
    /**
     * - ISO2 code representing the destination country.
     */
    to_country_code: string;
    /**
     * - Code representing the state or province
     * of the destination within the country.
     */
    to_state_code?: string;
    /**
     * - Code representing the city of destination
     * within the state.
     */
    to_city_code?: string;
    /**
     * - Code representing a specific sector or
     * district within the city of destination.
     */
    to_sector_code?: string;
    /**
     * - Postal or ZIP code of the destination area.
     */
    to_pincode?: string;
    /**
     * - Maximum time required for delivery
     * from the origin to the destination in seconds.
     */
    max_delivery_time?: number;
    /**
     * - Minimum time required for delivery
     * from the origin to the destination in seconds.
     */
    min_delivery_time?: number;
    /**
     * - Unique identifier for the delivery time record.
     */
    id: string;
};
/** @returns {BulkRegionJobDetails} */
declare function BulkRegionJobDetails(): BulkRegionJobDetails;
type BulkRegionJobDetails = {
    file_path?: string;
    country: string;
    action: string;
    region: string;
};
/** @returns {BulkRegionResultItemData} */
declare function BulkRegionResultItemData(): BulkRegionResultItemData;
type BulkRegionResultItemData = {
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
/** @returns {BulkRegionResult} */
declare function BulkRegionResult(): BulkRegionResult;
type BulkRegionResult = {
    items: BulkRegionResultItemData[];
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
/** @returns {CourierAccountDetailsBody} */
declare function CourierAccountDetailsBody(): CourierAccountDetailsBody;
type CourierAccountDetailsBody = {
    extension_id: string;
    account_id?: string;
    scheme_id: string;
    is_self_ship: boolean;
    stage: string;
    is_own_account: boolean;
};
/** @returns {CourierPartnerAccountFailureResult} */
declare function CourierPartnerAccountFailureResult(): CourierPartnerAccountFailureResult;
type CourierPartnerAccountFailureResult = {
    success: boolean;
    error: ErrorResult[];
};
/** @returns {CompanyCourierPartnerAccountListResult} */
declare function CompanyCourierPartnerAccountListResult(): CompanyCourierPartnerAccountListResult;
type CompanyCourierPartnerAccountListResult = {
    items: CourierAccountResult[];
    page: Page;
};
/** @returns {CourierAccountResult} */
declare function CourierAccountResult(): CourierAccountResult;
type CourierAccountResult = {
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
/** @returns {CourierPartnerSchemeDetailsModel} */
declare function CourierPartnerSchemeDetailsModel(): CourierPartnerSchemeDetailsModel;
type CourierPartnerSchemeDetailsModel = {
    extension_id: string;
    scheme_id?: string;
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
    /**
     * - Indicates if the courier partner offers
     * doorstep quality check services.
     */
    doorstep_qc?: boolean;
    /**
     * - Specifies whether the courier partner supports QR
     * code-based operations.
     */
    qr?: boolean;
    /**
     * - Denotes if the courier partner supports
     * multi-part shipment services.
     */
    mps?: boolean;
    /**
     * - Indicates if the Non-Delivery Report (NDR)
     * feature is supported by the courier partner.
     */
    ndr?: boolean;
    /**
     * - Number of attempts allowed for resolving
     * Non-Delivery Reports (NDR).
     */
    ndr_attempts?: number;
    /**
     * - Specifies if the courier partner
     * handles the transportation of dangerous goods.
     */
    dangerous_goods?: boolean;
    /**
     * - Indicates whether the courier partner
     * manages the shipment of fragile goods.
     */
    fragile_goods?: boolean;
    /**
     * - Indicates if the courier partner
     * handles restricted goods, as per regulatory guidelines.
     */
    restricted_goods?: boolean;
    /**
     * - Denotes if the courier partner
     * provides cold storage facilities for goods.
     */
    cold_storage_goods?: boolean;
    /**
     * - Indicates if the courier partner
     * supports doorstep exchange services.
     */
    doorstep_exchange?: boolean;
    /**
     * - Specifies if the courier partner
     * offers doorstep return services.
     */
    doorstep_return?: boolean;
    /**
     * - Indicates if the courier partner
     * provides product installation services upon delivery.
     */
    product_installation?: boolean;
    /**
     * - Specifies whether the courier
     * partner supports open-box delivery, allowing customers to inspect goods
     * before accepting.
     */
    openbox_delivery?: boolean;
    /**
     * - Describes the type of status updates
     * provided by the courier partner (e.g., real-time, periodic).
     */
    status_updates?: string;
    /**
     * - Indicates if the courier
     * partner supports multiple pickups to a single drop location.
     */
    multi_pick_single_drop?: boolean;
    /**
     * - Indicates whether the courier
     * partner supports single pickup to multiple drop locations.
     */
    single_pick_multi_drop?: boolean;
    /**
     * - Denotes if the courier partner
     * offers services for multiple pickups to multiple drop locations.
     */
    multi_pick_multi_drop?: boolean;
    /**
     * - Specifies if the courier partner requires or
     * supports the generation of e-waybills for shipments.
     */
    ewaybill?: boolean;
    /**
     * - Defines the maximum quantity
     * of items allowed in a quality check shipment.
     */
    qc_shipment_item_quantity?: number;
    /**
     * - Defines the maximum
     * quantity of items allowed in a non-quality check shipment.
     */
    non_qc_shipment_item_quantity?: number;
};
/** @returns {ArithmeticOperations} */
declare function ArithmeticOperations(): ArithmeticOperations;
type ArithmeticOperations = {
    lt?: number;
    gt?: number;
    lte?: number;
    gte?: number;
};
/** @returns {CourierPartnerSchemeUpdateDetails} */
declare function CourierPartnerSchemeUpdateDetails(): CourierPartnerSchemeUpdateDetails;
type CourierPartnerSchemeUpdateDetails = {
    name: string;
    weight: ArithmeticOperations;
    transport_type: string;
    region: string;
    delivery_type: string;
    payment_mode: string[];
    stage: string;
    feature: CourierPartnerSchemeFeatures;
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
    id?: string;
    name?: string;
    iso2?: string;
    iso3?: string;
    timezones?: string[];
    hierarchy?: HierarchyItems[];
    phone_code?: string;
    currency?: string;
    type?: string;
    latitude?: string;
    longitude?: string;
    display_name?: string;
    /**
     * - More detailed hierarchical data is
     * available, meaning states, cities, or other regions within the country have
     * been populated in the system.
     */
    has_next_hierarchy?: boolean;
};
/** @returns {HierarchyItems} */
declare function HierarchyItems(): HierarchyItems;
type HierarchyItems = {
    display_name?: string;
    slug?: string;
};
/** @returns {ValidationError} */
declare function ValidationError(): ValidationError;
type ValidationError = {
    /**
     * - A brief description of the error encountered.
     */
    message: string;
    /**
     * - The field in the request that caused the error.
     */
    field: string;
};
/** @returns {StandardError} */
declare function StandardError(): StandardError;
type StandardError = {
    /**
     * - A brief description of the error.
     */
    message: string;
};
