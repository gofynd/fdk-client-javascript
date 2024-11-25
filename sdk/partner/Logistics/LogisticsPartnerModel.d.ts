export = LogisticsPartnerModel;
/**
 * @typedef BulkRegionServiceabilityTatDetails
 * @property {string} country - Name of the country.
 * @property {string} region - Name of the region for which the
 *   tat/serviceability file needs to be downloaded.
 * @property {string} type - Denotes the type of file.
 */
/**
 * @typedef BulkRegionServiceabilityTatResultItemData
 * @property {string} [country] - Name of the country.
 * @property {string} [region] - Name of the region for which the
 *   tat/serviceability file needs to be downloaded.
 * @property {string} [type] - Denotes the type of data.
 * @property {string} [batch_id] - Unique identifier identifying the perticular request.
 * @property {string} [status] - Current status of the request.
 * @property {Object[]} [failed_records] - Information of records which failed
 * @property {string} [file_path] - CDN path of the file.
 */
/**
 * @typedef ErrorResult
 * @property {string} value - Fields containing the error.
 * @property {string} message - Description of the error.
 * @property {string} type - Type of the error.
 */
/**
 * @typedef FailureResult
 * @property {boolean} success - Denotes if the request was successfully executed.
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
 * @typedef CourierAccountUpdateDetails
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} scheme_id - Unique identifier of courier partner scheme.
 * @property {boolean} is_self_ship - Denotes if the account is of self delivery type.
 * @property {string} stage - Denotes whether the account is in enabled or disabled stage.
 * @property {boolean} is_own_account - Denotes whether it is the seller's own
 *   account or not.
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
 * @property {boolean} [reverse_pickup] - Boolean value indicating whether a
 *   region is first-mile serviceable or not in return pickup.
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
 * @property {boolean} [reverse_pickup] - Boolean value indicating whether a
 *   region is first-mile serviceable or not in return pickup.
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
 * @property {boolean} [reverse_pickup] - Boolean value indicating whether a
 *   region is first-mile serviceable or not in return pickup.
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
 * @property {boolean} [reverse_pickup] - Boolean value indicating whether a
 *   region is first-mile serviceable or not in return pickup.
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
 * @property {string} [file_path] - CDN path of the uploaded csv file for bulk import.
 * @property {string} country - Country for which the tat or serviceability is
 *   to be imported or exported.
 * @property {string} action - Denotes the import or export action to be performed.
 * @property {string} region - Region of the country for which import or export
 *   is triggered.
 */
/**
 * @typedef BulkRegionResultItemData
 * @property {string} [file_path] - CDN path of the file which was used for bulk import.
 * @property {number} [failed] - Count of the failed records.
 * @property {Object[]} [failed_records] - Information of records which failed.
 * @property {string} action - Denotes the import or export action performed.
 * @property {string} batch_id - Unique id to identify the import or export query.
 * @property {string} country - Country for which the import or export action is
 *   performed.
 * @property {number} [success] - Denoted if the import or export was successful
 *   or failure.
 * @property {string} region - Region of the country for which import or export
 *   is triggered.
 * @property {string} status - Current status of the import or export action performed.
 * @property {number} [total] - Count of total records.
 * @property {string} [error_file_path] - Path of the error file.
 */
/**
 * @typedef BulkRegionResult
 * @property {BulkRegionResultItemData[]} items
 * @property {Page} page
 */
/**
 * @typedef CourierAccount
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} account_id - Unique identifier of courier partner scheme
 *   and company id combination.
 * @property {string} scheme_id - Unique identifier of courier partner scheme.
 * @property {boolean} is_self_ship - Denotes if the account is of self delivery type.
 * @property {string} stage - Denotes whether the account is in enabled or disabled stage.
 * @property {boolean} is_own_account - Denotes whether it is the seller's own
 *   account or not.
 */
/**
 * @typedef CourierAccountDetailsBody
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} [account_id] - Unique identifier of courier partner scheme
 *   and company id combination.
 * @property {string} scheme_id - Unique identifier of courier account.
 * @property {boolean} is_self_ship - Denotes if the account is of self delivery type.
 * @property {string} stage - Denotes whether the courier account is in enabled
 *   or disabled stage.
 * @property {boolean} is_own_account - Denotes whether it is the seller's own
 *   account or not.
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
 * @property {string} account_id - Unique identifier of courier partner scheme
 *   and company id combination.
 * @property {string} scheme_id - Unique identifier of courier partner scheme.
 * @property {boolean} is_self_ship
 * @property {string} stage - Denotes whether the courier account is in enabled
 *   or disabled stage.
 * @property {boolean} is_own_account - Denotes whether it is the seller's own
 *   account or not.
 * @property {CourierPartnerSchemeModel} scheme_rules
 */
/**
 * @typedef CourierPartnerSchemeModel
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} scheme_id - Unique identifier of courier partner scheme.
 * @property {string} name - Name of the scheme
 * @property {ArithmeticOperations} weight
 * @property {string} transport_type - Mode of transport associated with the
 *   courier partner scheme.
 * @property {string} region - Serviceable region associated with the courier
 *   partner scheme.
 * @property {string} delivery_type - Type of delivery associated with the
 *   courier partner scheme.
 * @property {string[]} payment_mode - Mode of payment associated with the
 *   courier partner scheme.
 * @property {string} stage - Indicates if the courier partner scheme is
 *   currently active or inactive.
 * @property {CourierPartnerSchemeFeatures} feature
 */
/**
 * @typedef CourierPartnerSchemeDetailsModel
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} [scheme_id] - Unique identifier of courier partner scheme.
 * @property {string} name - Name of the courier partner scheme.
 * @property {ArithmeticOperations} weight
 * @property {string} transport_type - Mode of transport associated with the
 *   courier partner scheme.
 * @property {string} region - Serviceable region associated with the courier
 *   partner scheme.
 * @property {string} delivery_type - Type of delivery associated with the
 *   courier partner scheme.
 * @property {string[]} payment_mode - Mode of payment associated with the
 *   courier partner scheme.
 * @property {string} stage - Indicates if the courier partner scheme is
 *   currently active or inactive.
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
 * @typedef CourierPartnerSchemeV2Features
 * @property {boolean} [doorstep_qc] - Indicates if the courier partner offers
 *   doorstep quality check services.
 * @property {boolean} [qr] - Specifies whether the courier partner supports QR
 *   code-based operations.
 * @property {boolean} [mps] - Denotes if the courier partner supports
 *   multi-part shipment services.
 * @property {boolean} [ndr] - Indicates if the Non-Delivery Report (NDR)
 *   feature is supported by the courier partner.
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
 * @property {boolean} [multi_pick_single_drop] - Indicates if the courier
 *   partner supports multiple pickups to a single drop location.
 * @property {boolean} [single_pick_multi_drop] - Indicates whether the courier
 *   partner supports single pickup to multiple drop locations.
 * @property {boolean} [multi_pick_multi_drop] - Denotes if the courier partner
 *   offers services for multiple pickups to multiple drop locations.
 * @property {boolean} [ewaybill] - Specifies if the courier partner requires or
 *   supports the generation of e-waybills for shipments.
 */
/**
 * @typedef CourierPartnerSchemeV2DetailsModel
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} [scheme_id] - Unique identifier of courier partner scheme.
 * @property {string} name - Name of the scheme.
 * @property {ArithmeticOperations} weight
 * @property {ArithmeticOperations} [volumetric_weight]
 * @property {string} transport_type - Mode of transport associated with the
 *   courier partner scheme.
 * @property {string} region - Serviceable region associated with the courier
 *   partner scheme.
 * @property {string} delivery_type - Type of delivery associated with the
 *   courier partner scheme.
 * @property {string[]} payment_mode - Mode of payment associated with the
 *   courier partner scheme.
 * @property {string} stage - Indicates if the courier partner scheme is
 *   currently active or inactive.
 * @property {string} [status_updates] - Describes the type of status updates
 *   provided by the courier partner (e.g., real-time, periodic).
 * @property {number} [ndr_attempts] - Indicates if the Non-Delivery Report
 *   (NDR) feature is supported by the courier partner.
 * @property {number} [qc_shipment_item_quantity] - Defines the maximum quantity
 *   of items allowed in a quality check shipment.
 * @property {number} [non_qc_shipment_item_quantity] - Defines the maximum
 *   quantity of items allowed in a non-quality check shipment.
 * @property {CourierPartnerSchemeV2Features} feature
 */
/**
 * @typedef CourierPartnerV2SchemeModel
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} scheme_id - Unique identifier of courier partner scheme.
 * @property {string} [company_id] - Unique identifier of company.
 * @property {string} name - Name of the scheme.
 * @property {ArithmeticOperations} weight
 * @property {ArithmeticOperations} [volumetric_weight]
 * @property {string} transport_type - Mode of transport associated with the
 *   courier partner scheme.
 * @property {string} region - Serviceable region associated with the courier
 *   partner scheme.
 * @property {string} delivery_type - Type of delivery associated with the
 *   courier partner scheme.
 * @property {string[]} payment_mode - Mode of payment associated with the
 *   courier partner scheme.
 * @property {string} stage - Indicates if the courier partner scheme is
 *   currently active or inactive.
 * @property {string} [status_updates] - Describes the type of status updates
 *   provided by the courier partner (e.g., real-time, periodic).
 * @property {number} [ndr_attempts] - Indicates if the Non-Delivery Report
 *   (NDR) feature is supported by the courier partner.
 * @property {number} [qc_shipment_item_quantity] - Defines the maximum quantity
 *   of items allowed in a quality check shipment.
 * @property {number} [non_qc_shipment_item_quantity] - Defines the maximum
 *   quantity of items allowed in a non-quality check shipment.
 * @property {CourierPartnerSchemeV2Features} feature
 */
/**
 * @typedef courierPartnerSchemeV2List
 * @property {CourierPartnerV2SchemeModel[]} items - List of courier partner schemes
 * @property {Page} page
 */
/**
 * @typedef ArithmeticOperations
 * @property {number} [lt]
 * @property {number} [gt]
 * @property {number} [lte]
 * @property {number} [gte]
 */
/**
 * @typedef CourierPartnerSchemeV2UpdateDetails
 * @property {string} name - Name of the scheme.
 * @property {ArithmeticOperations} weight
 * @property {ArithmeticOperations} [volumetric_weight]
 * @property {string} transport_type - Mode of transport associated with the
 *   courier partner scheme.
 * @property {string} region - Serviceable region associated with the courier
 *   partner scheme.
 * @property {string} delivery_type - Type of delivery associated with the
 *   courier partner scheme.
 * @property {string[]} payment_mode - Mode of payment associated with the
 *   courier partner scheme.
 * @property {string} stage - Indicates if the courier partner scheme is
 *   currently active or inactive.
 * @property {string} [status_updates] - Describes the type of status updates
 *   provided by the courier partner (e.g., real-time, periodic).
 * @property {number} [ndr_attempts] - Indicates if the Non-Delivery Report
 *   (NDR) feature is supported by the courier partner.
 * @property {number} [qc_shipment_item_quantity] - Defines the maximum quantity
 *   of items allowed in a quality check shipment.
 * @property {number} [non_qc_shipment_item_quantity] - Defines the maximum
 *   quantity of items allowed in a non-quality check shipment.
 * @property {CourierPartnerSchemeV2Features} feature
 */
/**
 * @typedef GetCountries
 * @property {GetCountriesItems[]} items
 * @property {Page} page
 */
/**
 * @typedef GetCountriesItems
 * @property {string} [id] - Unique identifier of the country.
 * @property {string} [name] - Name of the country.
 * @property {string} [iso2] - Two-letter ISO code representing the country.
 * @property {string} [iso3] - Three-letter ISO code representing the country.
 * @property {string[]} [timezones] - List of time zones used in the country
 *   (e.g., ["America/New_York", "America/Los_Angeles"]).
 * @property {HierarchyItems[]} [hierarchy] - Levels within the country (e.g.,
 *   states, cities) and their slugs (e.g., [{"name": "State", "slug": "state"},
 *   {"name": "City", "slug": "city"}]).
 * @property {string} [phone_code] - International dialing code for the country
 *   (e.g., "+1").
 * @property {string} [currency] - Indicates currency for the country (e.g., "INR").
 * @property {string} [type] - Indicates the type of object (e.g., "country").
 * @property {string} [latitude] - Geographical latitude of the country (e.g., "37.0902").
 * @property {string} [longitude] - Geographical longitude of the country (e.g.,
 *   "-95.7129").
 * @property {string} [display_name] - User-friendly version of the geographical
 *   data, which may be more descriptive or formatted differently.
 * @property {boolean} [has_next_hierarchy] - More detailed hierarchical data is
 *   available, meaning states, cities, or other regions within the country have
 *   been populated in the system.
 */
/**
 * @typedef HierarchyItems
 * @property {string} [display_name] - It represent a country display name.
 * @property {string} [slug] - A URL-friendly version of the name, often used
 *   for referencing or querying purposes.
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
    export { BulkRegionServiceabilityTatDetails, BulkRegionServiceabilityTatResultItemData, ErrorResult, FailureResult, BulkRegionServiceabilityTatResult, Page, CourierAccountUpdateDetails, RegionTatItemResult, RegionServiceabilityItemResult, ServiceabilityDetailsResult, ServiceabilityDetails, RegionServiceabilityResult, RegionServiceabilityDetails, RegionTatDetails, RegionTatUpdateDetails, RegionTatResult, BulkRegionJobDetails, BulkRegionResultItemData, BulkRegionResult, CourierAccount, CourierAccountDetailsBody, CourierPartnerAccountFailureResult, CompanyCourierPartnerAccountListResult, CourierAccountResult, CourierPartnerSchemeModel, CourierPartnerSchemeDetailsModel, CourierPartnerSchemeFeatures, CourierPartnerSchemeV2Features, CourierPartnerSchemeV2DetailsModel, CourierPartnerV2SchemeModel, courierPartnerSchemeV2List, ArithmeticOperations, CourierPartnerSchemeV2UpdateDetails, GetCountries, GetCountriesItems, HierarchyItems, ValidationError, StandardError };
}
/** @returns {BulkRegionServiceabilityTatDetails} */
declare function BulkRegionServiceabilityTatDetails(): BulkRegionServiceabilityTatDetails;
type BulkRegionServiceabilityTatDetails = {
    /**
     * - Name of the country.
     */
    country: string;
    /**
     * - Name of the region for which the
     * tat/serviceability file needs to be downloaded.
     */
    region: string;
    /**
     * - Denotes the type of file.
     */
    type: string;
};
/** @returns {BulkRegionServiceabilityTatResultItemData} */
declare function BulkRegionServiceabilityTatResultItemData(): BulkRegionServiceabilityTatResultItemData;
type BulkRegionServiceabilityTatResultItemData = {
    /**
     * - Name of the country.
     */
    country?: string;
    /**
     * - Name of the region for which the
     * tat/serviceability file needs to be downloaded.
     */
    region?: string;
    /**
     * - Denotes the type of data.
     */
    type?: string;
    /**
     * - Unique identifier identifying the perticular request.
     */
    batch_id?: string;
    /**
     * - Current status of the request.
     */
    status?: string;
    /**
     * - Information of records which failed
     */
    failed_records?: any[];
    /**
     * - CDN path of the file.
     */
    file_path?: string;
};
/** @returns {ErrorResult} */
declare function ErrorResult(): ErrorResult;
type ErrorResult = {
    /**
     * - Fields containing the error.
     */
    value: string;
    /**
     * - Description of the error.
     */
    message: string;
    /**
     * - Type of the error.
     */
    type: string;
};
/** @returns {FailureResult} */
declare function FailureResult(): FailureResult;
type FailureResult = {
    /**
     * - Denotes if the request was successfully executed.
     */
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
/** @returns {CourierAccountUpdateDetails} */
declare function CourierAccountUpdateDetails(): CourierAccountUpdateDetails;
type CourierAccountUpdateDetails = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    scheme_id: string;
    /**
     * - Denotes if the account is of self delivery type.
     */
    is_self_ship: boolean;
    /**
     * - Denotes whether the account is in enabled or disabled stage.
     */
    stage: string;
    /**
     * - Denotes whether it is the seller's own
     * account or not.
     */
    is_own_account: boolean;
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
     * - Boolean value indicating whether a
     * region is first-mile serviceable or not in return pickup.
     */
    reverse_pickup?: boolean;
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
     * - Boolean value indicating whether a
     * region is first-mile serviceable or not in return pickup.
     */
    reverse_pickup?: boolean;
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
     * - Boolean value indicating whether a
     * region is first-mile serviceable or not in return pickup.
     */
    reverse_pickup?: boolean;
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
     * - Boolean value indicating whether a
     * region is first-mile serviceable or not in return pickup.
     */
    reverse_pickup?: boolean;
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
    /**
     * - CDN path of the uploaded csv file for bulk import.
     */
    file_path?: string;
    /**
     * - Country for which the tat or serviceability is
     * to be imported or exported.
     */
    country: string;
    /**
     * - Denotes the import or export action to be performed.
     */
    action: string;
    /**
     * - Region of the country for which import or export
     * is triggered.
     */
    region: string;
};
/** @returns {BulkRegionResultItemData} */
declare function BulkRegionResultItemData(): BulkRegionResultItemData;
type BulkRegionResultItemData = {
    /**
     * - CDN path of the file which was used for bulk import.
     */
    file_path?: string;
    /**
     * - Count of the failed records.
     */
    failed?: number;
    /**
     * - Information of records which failed.
     */
    failed_records?: any[];
    /**
     * - Denotes the import or export action performed.
     */
    action: string;
    /**
     * - Unique id to identify the import or export query.
     */
    batch_id: string;
    /**
     * - Country for which the import or export action is
     * performed.
     */
    country: string;
    /**
     * - Denoted if the import or export was successful
     * or failure.
     */
    success?: number;
    /**
     * - Region of the country for which import or export
     * is triggered.
     */
    region: string;
    /**
     * - Current status of the import or export action performed.
     */
    status: string;
    /**
     * - Count of total records.
     */
    total?: number;
    /**
     * - Path of the error file.
     */
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
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Unique identifier of courier partner scheme
     * and company id combination.
     */
    account_id: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    scheme_id: string;
    /**
     * - Denotes if the account is of self delivery type.
     */
    is_self_ship: boolean;
    /**
     * - Denotes whether the account is in enabled or disabled stage.
     */
    stage: string;
    /**
     * - Denotes whether it is the seller's own
     * account or not.
     */
    is_own_account: boolean;
};
/** @returns {CourierAccountDetailsBody} */
declare function CourierAccountDetailsBody(): CourierAccountDetailsBody;
type CourierAccountDetailsBody = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Unique identifier of courier partner scheme
     * and company id combination.
     */
    account_id?: string;
    /**
     * - Unique identifier of courier account.
     */
    scheme_id: string;
    /**
     * - Denotes if the account is of self delivery type.
     */
    is_self_ship: boolean;
    /**
     * - Denotes whether the courier account is in enabled
     * or disabled stage.
     */
    stage: string;
    /**
     * - Denotes whether it is the seller's own
     * account or not.
     */
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
    /**
     * - Unique identifier of courier partner scheme
     * and company id combination.
     */
    account_id: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    scheme_id: string;
    is_self_ship: boolean;
    /**
     * - Denotes whether the courier account is in enabled
     * or disabled stage.
     */
    stage: string;
    /**
     * - Denotes whether it is the seller's own
     * account or not.
     */
    is_own_account: boolean;
    scheme_rules: CourierPartnerSchemeModel;
};
/** @returns {CourierPartnerSchemeModel} */
declare function CourierPartnerSchemeModel(): CourierPartnerSchemeModel;
type CourierPartnerSchemeModel = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    scheme_id: string;
    /**
     * - Name of the scheme
     */
    name: string;
    weight: ArithmeticOperations;
    /**
     * - Mode of transport associated with the
     * courier partner scheme.
     */
    transport_type: string;
    /**
     * - Serviceable region associated with the courier
     * partner scheme.
     */
    region: string;
    /**
     * - Type of delivery associated with the
     * courier partner scheme.
     */
    delivery_type: string;
    /**
     * - Mode of payment associated with the
     * courier partner scheme.
     */
    payment_mode: string[];
    /**
     * - Indicates if the courier partner scheme is
     * currently active or inactive.
     */
    stage: string;
    feature: CourierPartnerSchemeFeatures;
};
/** @returns {CourierPartnerSchemeDetailsModel} */
declare function CourierPartnerSchemeDetailsModel(): CourierPartnerSchemeDetailsModel;
type CourierPartnerSchemeDetailsModel = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    scheme_id?: string;
    /**
     * - Name of the courier partner scheme.
     */
    name: string;
    weight: ArithmeticOperations;
    /**
     * - Mode of transport associated with the
     * courier partner scheme.
     */
    transport_type: string;
    /**
     * - Serviceable region associated with the courier
     * partner scheme.
     */
    region: string;
    /**
     * - Type of delivery associated with the
     * courier partner scheme.
     */
    delivery_type: string;
    /**
     * - Mode of payment associated with the
     * courier partner scheme.
     */
    payment_mode: string[];
    /**
     * - Indicates if the courier partner scheme is
     * currently active or inactive.
     */
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
/** @returns {CourierPartnerSchemeV2Features} */
declare function CourierPartnerSchemeV2Features(): CourierPartnerSchemeV2Features;
type CourierPartnerSchemeV2Features = {
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
};
/** @returns {CourierPartnerSchemeV2DetailsModel} */
declare function CourierPartnerSchemeV2DetailsModel(): CourierPartnerSchemeV2DetailsModel;
type CourierPartnerSchemeV2DetailsModel = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    scheme_id?: string;
    /**
     * - Name of the scheme.
     */
    name: string;
    weight: ArithmeticOperations;
    volumetric_weight?: ArithmeticOperations;
    /**
     * - Mode of transport associated with the
     * courier partner scheme.
     */
    transport_type: string;
    /**
     * - Serviceable region associated with the courier
     * partner scheme.
     */
    region: string;
    /**
     * - Type of delivery associated with the
     * courier partner scheme.
     */
    delivery_type: string;
    /**
     * - Mode of payment associated with the
     * courier partner scheme.
     */
    payment_mode: string[];
    /**
     * - Indicates if the courier partner scheme is
     * currently active or inactive.
     */
    stage: string;
    /**
     * - Describes the type of status updates
     * provided by the courier partner (e.g., real-time, periodic).
     */
    status_updates?: string;
    /**
     * - Indicates if the Non-Delivery Report
     * (NDR) feature is supported by the courier partner.
     */
    ndr_attempts?: number;
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
    feature: CourierPartnerSchemeV2Features;
};
/** @returns {CourierPartnerV2SchemeModel} */
declare function CourierPartnerV2SchemeModel(): CourierPartnerV2SchemeModel;
type CourierPartnerV2SchemeModel = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    scheme_id: string;
    /**
     * - Unique identifier of company.
     */
    company_id?: string;
    /**
     * - Name of the scheme.
     */
    name: string;
    weight: ArithmeticOperations;
    volumetric_weight?: ArithmeticOperations;
    /**
     * - Mode of transport associated with the
     * courier partner scheme.
     */
    transport_type: string;
    /**
     * - Serviceable region associated with the courier
     * partner scheme.
     */
    region: string;
    /**
     * - Type of delivery associated with the
     * courier partner scheme.
     */
    delivery_type: string;
    /**
     * - Mode of payment associated with the
     * courier partner scheme.
     */
    payment_mode: string[];
    /**
     * - Indicates if the courier partner scheme is
     * currently active or inactive.
     */
    stage: string;
    /**
     * - Describes the type of status updates
     * provided by the courier partner (e.g., real-time, periodic).
     */
    status_updates?: string;
    /**
     * - Indicates if the Non-Delivery Report
     * (NDR) feature is supported by the courier partner.
     */
    ndr_attempts?: number;
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
    feature: CourierPartnerSchemeV2Features;
};
/** @returns {courierPartnerSchemeV2List} */
declare function courierPartnerSchemeV2List(): courierPartnerSchemeV2List;
type courierPartnerSchemeV2List = {
    /**
     * - List of courier partner schemes
     */
    items: CourierPartnerV2SchemeModel[];
    page: Page;
};
/** @returns {ArithmeticOperations} */
declare function ArithmeticOperations(): ArithmeticOperations;
type ArithmeticOperations = {
    lt?: number;
    gt?: number;
    lte?: number;
    gte?: number;
};
/** @returns {CourierPartnerSchemeV2UpdateDetails} */
declare function CourierPartnerSchemeV2UpdateDetails(): CourierPartnerSchemeV2UpdateDetails;
type CourierPartnerSchemeV2UpdateDetails = {
    /**
     * - Name of the scheme.
     */
    name: string;
    weight: ArithmeticOperations;
    volumetric_weight?: ArithmeticOperations;
    /**
     * - Mode of transport associated with the
     * courier partner scheme.
     */
    transport_type: string;
    /**
     * - Serviceable region associated with the courier
     * partner scheme.
     */
    region: string;
    /**
     * - Type of delivery associated with the
     * courier partner scheme.
     */
    delivery_type: string;
    /**
     * - Mode of payment associated with the
     * courier partner scheme.
     */
    payment_mode: string[];
    /**
     * - Indicates if the courier partner scheme is
     * currently active or inactive.
     */
    stage: string;
    /**
     * - Describes the type of status updates
     * provided by the courier partner (e.g., real-time, periodic).
     */
    status_updates?: string;
    /**
     * - Indicates if the Non-Delivery Report
     * (NDR) feature is supported by the courier partner.
     */
    ndr_attempts?: number;
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
    feature: CourierPartnerSchemeV2Features;
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
    /**
     * - Unique identifier of the country.
     */
    id?: string;
    /**
     * - Name of the country.
     */
    name?: string;
    /**
     * - Two-letter ISO code representing the country.
     */
    iso2?: string;
    /**
     * - Three-letter ISO code representing the country.
     */
    iso3?: string;
    /**
     * - List of time zones used in the country
     * (e.g., ["America/New_York", "America/Los_Angeles"]).
     */
    timezones?: string[];
    /**
     * - Levels within the country (e.g.,
     * states, cities) and their slugs (e.g., [{"name": "State", "slug": "state"},
     * {"name": "City", "slug": "city"}]).
     */
    hierarchy?: HierarchyItems[];
    /**
     * - International dialing code for the country
     * (e.g., "+1").
     */
    phone_code?: string;
    /**
     * - Indicates currency for the country (e.g., "INR").
     */
    currency?: string;
    /**
     * - Indicates the type of object (e.g., "country").
     */
    type?: string;
    /**
     * - Geographical latitude of the country (e.g., "37.0902").
     */
    latitude?: string;
    /**
     * - Geographical longitude of the country (e.g.,
     * "-95.7129").
     */
    longitude?: string;
    /**
     * - User-friendly version of the geographical
     * data, which may be more descriptive or formatted differently.
     */
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
    /**
     * - It represent a country display name.
     */
    display_name?: string;
    /**
     * - A URL-friendly version of the name, often used
     * for referencing or querying purposes.
     */
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
