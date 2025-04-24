export = LogisticsPartnerModel;
/**
 * @typedef CourierPartnerSchemeModelSchema
 * @property {CreatedBy} [created_by]
 * @property {string} [created_on] - The timestamp when the record was created.
 * @property {ModifiedBy} [modified_by]
 * @property {string} [modified_on] - The timestamp when the record last modified.
 * @property {string} [extension_id] - Unique identifier of courier partner extension.
 * @property {string} [scheme_id] - Unique identifier for the scheme, used to
 *   fetch or modify scheme details.
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
 * @property {CourierPartnerSchemeFeatures} feature
 */
/**
 * @typedef BulkRegionServiceabilityTatDetails
 * @property {string} country - Country involved in the operation.
 * @property {string} region - Region involved in the operation.
 * @property {string} type - Type of operation, either serviceability or TAT.
 */
/**
 * @typedef BulkRegionServiceabilityTatResultItemData
 * @property {string} [country] - Name of the country.
 * @property {string} [region] - Name of the region for which the
 *   tat/serviceability file needs to be downloaded.
 * @property {string} [type] - Denotes the type of data.
 * @property {string} [batch_id] - A unique identifier for the performed batch operation.
 * @property {string} [status] - Current status of the request.
 * @property {Object[]} [failed_records] - Information of records which failed
 * @property {string} [file_path] - CDN path of the file.
 */
/**
 * @typedef CommonErrorResult
 * @property {Error[]} [error] - An array of items referencing the ErrorResult
 *   schema, which likely contains detailed information about the errors.
 */
/**
 * @typedef BulkFailureResult
 * @property {boolean} [success] - Whether operation was successful.
 * @property {Error[]} error - An array containing error details.
 */
/**
 * @typedef FailureResult
 * @property {boolean} [success] - Whether operation was successful.
 * @property {Error[]} [error] - Array of error details.
 */
/**
 * @typedef BulkRegionServiceabilityTatResult
 * @property {BulkRegionServiceabilityTatResultItemData[]} [items] - Array of
 *   bulk region serviceability or TAT result items.
 * @property {Page} [page]
 */
/**
 * @typedef RegionTatItemResult
 * @property {RegionTatResult[]} items - An array that contains items of region tat.
 * @property {Page} page
 */
/**
 * @typedef RegionServiceabilityItemResult
 * @property {RegionServiceabilityResult[]} items - An array that contains items
 *   of region serviceability.
 * @property {Page} page
 */
/**
 * @typedef ServiceabilityDetailsResult
 * @property {string} [pickup_cutoff] - Time of day by which pickups must be
 *   scheduled to be processed on the same day.
 * @property {string} [country_code] - ISO2 code representing the country where
 *   the serviceability is being specified.
 * @property {string} [state_code] - Code representing the state or province
 *   within the country where the serviceability is being specified.
 * @property {string} [city_code] - Code representing the city within the state
 *   where the serviceability is being specified.
 * @property {string} [sector_code] - Code representing a specific sector or
 *   district within the city where the serviceability is being specified.
 * @property {string} [pincode] - A string indicating the postal code or PIN
 *   code of the address area.
 * @property {boolean} [first_mile] - Boolean value indicating whether
 *   first-mile service is available or not.
 * @property {boolean} [last_mile] - Boolean value indicating whether last-mile
 *   service is available or not.
 * @property {number} [cod_limit] - Limit on the amount of cash on delivery
 *   (COD) payments allowed in the specified region.
 * @property {number} [prepaid_limit] - Limit on the amount of prepaid payments
 *   allowed in the specified region.
 * @property {boolean} [doorstep_return] - Indicates if doorstep return service
 *   is available. This refers to the ability to return items directly from the
 *   customer's doorstep.
 * @property {boolean} [doorstep_qc] - Indicates if doorstep quality check
 *   service is available. This refers to the ability to perform quality checks
 *   on items at the customer's doorstep.
 * @property {string} [forward_pickup_cutoff] - Time of day by which pickups
 *   must be scheduled to be processed on the same day in the forward journey.
 * @property {string} [reverse_pickup_cutoff] - Time of day by which pickups
 *   must be scheduled to be processed on the same day in the reverse journey.
 * @property {boolean} [hand_to_hand_exchange] - Indicates whether the product
 *   exchange happens directly between the buyer and seller (e.g., in person),
 *   instead of through a third-party service.
 * @property {string[]} [holiday_list] - List of holidays for a courier partner scheme.
 * @property {boolean} [reverse_pickup] - Boolean value indicating whether
 *   reverse pickup services is available.
 * @property {boolean} [installation] - Boolean value indicating whether
 *   installation services are available in the specified region or not.
 * @property {string} [id] - A string serving as the unique identifier.
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
 * @property {string} [forward_pickup_cutoff] - Time of day by which pickups
 *   must be scheduled to be processed on the same day in the forward journey.
 * @property {string} [reverse_pickup_cutoff] - Time of day by which pickups
 *   must be scheduled to be processed on the same day in the reverse journey.
 * @property {boolean} [hand_to_hand_exchange] - Indicates whether the product
 *   exchange happens directly between the buyer and seller (e.g., in person),
 *   instead of through a third-party service.
 * @property {string[]} [holiday_list] - List of holidays for a courier partner scheme.
 * @property {boolean} [installation] - Boolean value indicating whether
 *   installation services are available in the specified region or not.
 * @property {string} [pickup_cutoff] - Time of day by which pickups must be
 *   scheduled to be processed on the same day.
 */
/**
 * @typedef RegionServiceabilityResult
 * @property {string} [pickup_cutoff] - Time of day by which pickups must be
 *   scheduled to be processed on the same day.
 * @property {string} country_code - ISO2 code representing the country where
 *   the serviceability is being specified.
 * @property {string} [state_code] - Code representing the state or province
 *   within the country where the serviceability is being specified.
 * @property {string} [city_code] - Code representing the city within the state
 *   where the serviceability is being specified.
 * @property {string} [sector_code] - Code representing a specific sector or
 *   district within the city where the serviceability is being specified.
 * @property {string} [pincode] - A string indicating the postal code or PIN
 *   code of the address area.
 * @property {boolean} [first_mile] - Boolean value indicating whether
 *   first-mile service is available or not.
 * @property {boolean} [last_mile] - Boolean value indicating whether last-mile
 *   service is available or not.
 * @property {number} [cod_limit] - Limit on the amount of cash on delivery
 *   (COD) payments allowed in the specified region.
 * @property {number} [prepaid_limit] - Limit on the amount of prepaid payments
 *   allowed in the specified region.
 * @property {boolean} [doorstep_return] - Indicates if doorstep return service
 *   is available. This refers to the ability to return items directly from the
 *   customer's doorstep.
 * @property {boolean} [doorstep_qc] - Indicates if doorstep quality check
 *   service is available. This refers to the ability to perform quality checks
 *   on items at the customer's doorstep.
 * @property {boolean} [reverse_pickup] - Indicates if reverse pickup is available.
 * @property {string} [forward_pickup_cutoff] - Time of day by which pickups
 *   must be scheduled to be processed on the same day in the forward journey.
 * @property {string} [reverse_pickup_cutoff] - Time of day by which pickups
 *   must be scheduled to be processed on the same day in the reverse journey.
 * @property {boolean} [hand_to_hand_exchange] - Indicates whether the product
 *   exchange happens directly between the buyer and seller (e.g., in person),
 *   instead of through a third-party service.
 * @property {string[]} [holiday_list] - List of holidays for a courier partner scheme.
 * @property {boolean} [installation] - Boolean value indicating whether
 *   installation services are available in the specified region or not.
 * @property {string} id - A string serving as the unique identifier.
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
 * @property {string} [pincode] - A string indicating the postal code or PIN
 *   code of the address area.
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
 * @property {string} [forward_pickup_cutoff] - Time of day by which pickups
 *   must be scheduled to be processed on the same day in the forward journey.
 * @property {string} [pickup_cutoff] - Time of day by which pickups must be
 *   scheduled to be processed on the same day.
 * @property {string} [reverse_pickup_cutoff] - Time of day by which pickups
 *   must be scheduled to be processed on the same day in the reverse journey.
 * @property {boolean} [hand_to_hand_exchange] - Indicates whether the product
 *   exchange happens directly between the buyer and seller (e.g., in person),
 *   instead of through a third-party service.
 * @property {number} [prepaid_limit] - Limit on the amount of prepaid payments
 *   allowed in the specified region.
 * @property {string[]} [holiday_list] - List of holidays for a courier partner scheme.
 * @property {boolean} [installation] - Boolean value indicating whether
 *   installation services are available in the specified region or not.
 */
/**
 * @typedef RegionTatDetails
 * @property {number} [max_delivery_time] - Maximum time required for delivery
 *   from the origin to the destination in seconds.
 * @property {number} [min_delivery_time] - Minimum time required for delivery
 *   from the origin to the destination in seconds.
 * @property {string} from_country_code - ISO2 code representing the country of
 *   origin for the delivery.
 * @property {string} [from_state_code] - Code representing the state or
 *   province of origin within the country.
 * @property {string} [from_city_code] - Code representing the city of origin
 *   within the state.
 * @property {string} [from_sector_code] - Code representing a specific sector
 *   or district within the city of origin.
 * @property {string} [from_pincode] - A string indicating the postal code or
 *   PIN code of the address area.
 * @property {string} to_country_code - ISO2 code representing the destination country.
 * @property {string} [to_state_code] - Code representing the state or province
 *   of the destination within the country.
 * @property {string} [to_city_code] - Code representing the city of destination
 *   within the state.
 * @property {string} [to_sector_code] - Code representing a specific sector or
 *   district within the city of destination.
 * @property {string} [to_pincode] - A string indicating the postal code or PIN
 *   code of the address area.
 * @property {TATDetails} [forward]
 * @property {TATDetails} [reverse]
 */
/**
 * @typedef RegionTatResult
 * @property {number} [min_delivery_time] - Minimum time required for delivery
 *   from the origin to the destination in seconds.
 * @property {number} [max_delivery_time] - Maximum time required for delivery
 *   from the origin to the destination in seconds.
 * @property {string} from_country_code - ISO2 code representing the country of
 *   origin for the delivery.
 * @property {string} [from_state_code] - Code representing the state or
 *   province of origin within the country.
 * @property {string} [from_city_code] - Code representing the city of origin
 *   within the state.
 * @property {string} [from_sector_code] - Code representing a specific sector
 *   or district within the city of origin.
 * @property {string} [from_pincode] - A string indicating the postal code or
 *   PIN code of the address area.
 * @property {string} to_country_code - ISO2 code representing the destination country.
 * @property {string} [to_state_code] - Code representing the state or province
 *   of the destination within the country.
 * @property {string} [to_city_code] - Code representing the city of destination
 *   within the state.
 * @property {string} [to_sector_code] - Code representing a specific sector or
 *   district within the city of destination.
 * @property {string} [to_pincode] - A string indicating the postal code or PIN
 *   code of the address area.
 * @property {TATDetails} [forward]
 * @property {TATDetails} [reverse]
 * @property {string} id - A string serving as the unique identifier.
 */
/**
 * @typedef BulkRegionJobDetails
 * @property {string} [file_path] - Path to the file used in the bulk operation.
 * @property {string} country - Country involved in the bulk operation.
 * @property {string} action - Action type for the bulk operation, either import
 *   or export.
 * @property {string} region - Region involved in the bulk operation.
 */
/**
 * @typedef BulkRegionResultItemData
 * @property {string} file_path - Path to the file associated with the result item.
 * @property {number} [failed] - Number of failed records in the operation.
 * @property {Object[]} [failed_records] - Array of failed records with
 *   additional properties.
 * @property {string} action - Action type for the result item.
 * @property {string} batch_id - A unique identifier for the performed batch operation.
 * @property {string} country - Country associated with the result item.
 * @property {number} [success] - Number of successful records in the operation.
 * @property {string} region - Region associated with the result item.
 * @property {string} status - Current status of the result item.
 * @property {number} [total] - Total number of records processed.
 * @property {string} [error_file_path] - Path to the file containing error details.
 * @property {string} [modified_on] - The timestamp when the record last modified.
 * @property {string} [created_on] - The timestamp when the record was created.
 */
/**
 * @typedef BulkRegionResult
 * @property {BulkRegionResultItemData[]} items - Array of bulk region result items.
 * @property {Page} page
 */
/**
 * @typedef CourierAccountDetailsBody
 * @property {string} extension_id - The unique identifier for the extension
 *   linked to the courier account.
 * @property {string} [account_id] - The unique identifier for the courier account.
 * @property {string} scheme_id - The identifier for the scheme associated with
 *   the courier account.
 * @property {boolean} is_self_ship - Indicates whether the courier account
 *   supports self-shipping (true if it does, false otherwise).
 * @property {string} stage - The current stage of the courier account, either
 *   'enabled' or 'disabled'.
 * @property {boolean} is_own_account - Indicates whether the courier account is
 *   an own account (true if it is, false otherwise).
 */
/**
 * @typedef CompanyCourierPartnerAccountListResult
 * @property {CourierAccountResult[]} items - An array containing multiple
 *   instances of CourierAccountResult, which details individual courier accounts.
 * @property {Page} page
 */
/**
 * @typedef CourierAccountResult
 * @property {string} account_id - A string that uniquely identifies the courier account.
 * @property {number} [company_id] - The unique identifier of the company.
 * @property {string} scheme_id - A string that specifies the unique identifier
 *   for the scheme associated with the account
 * @property {string} [extension_id] - A string that uniquely identifies the
 *   courier partner extension.
 * @property {boolean} is_self_ship - A boolean indicating whether the account
 *   is for self-shipping.
 * @property {string} stage - A string indicating the current stage of the
 *   account, which can be either enabled or disabled.
 * @property {boolean} is_own_account - A boolean indicating whether the account
 *   is owned by the company.
 * @property {CourierPartnerSchemeModel} scheme_rules
 */
/**
 * @typedef CourierPartnerSchemeDetailsModel
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} [scheme_id] - Unique identifier for the scheme, used to
 *   fetch or modify scheme details.
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
 * @property {CourierPartnerSchemeFeatures} feature
 */
/**
 * @typedef CourierPartnerPutSchema
 * @property {string} [extension_id] - Unique identifier of courier partner extension.
 * @property {CreatedBy} [created_by]
 * @property {ModifiedBy} [modified_by]
 * @property {string} [created_on] - The timestamp when the record was created.
 * @property {string} [modified_on] - The timestamp when the record last modified.
 * @property {string} [scheme_id] - Unique identifier of courier partner scheme.
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
 * @property {CourierPartnerSchemeFeatures} feature
 */
/**
 * @typedef CourierPartnerSchemeList
 * @property {CourierPartnerSchemeModelSchema[]} items - List of courier partner schemes
 * @property {Page} page
 */
/**
 * @typedef CourierPartnerSchemeUpdateDetails
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
 * @property {CourierPartnerSchemeFeatures} feature
 */
/**
 * @typedef GetCountries
 * @property {GetCountriesItems[]} items - A list of country objects containing
 *   detailed information about each country.
 * @property {Page} page
 */
/**
 * @typedef TATUpdateDetails
 * @property {number} [max_delivery_time] - Maximum time required for delivery
 *   from the origin to the destination in seconds.
 * @property {number} [min_delivery_time] - Minimum time required for delivery
 *   from the origin to the destination in seconds.
 * @property {TATDetails} [forward]
 * @property {TATDetails} [reverse]
 */
/**
 * @typedef StandardError
 * @property {string} message - A brief description of the error.
 */
/**
 * @typedef ValidationErrors
 * @property {ValidationError[]} errors - A list of validation errors in the request.
 */
/**
 * @typedef CreatedBy
 * @property {string} [id] - Identifier of the user or system that created the object.
 */
/**
 * @typedef ModifiedBy
 * @property {string} [id] - Identifier of the user or system that created the object.
 */
/**
 * @typedef ArithmeticOperations
 * @property {number} [lt] - Specifies a less than operation, comparing values
 *   smaller than the provided value.
 * @property {number} [gt] - Specifies a greater than operation, comparing
 *   values larger than the provided value.
 * @property {number} [lte] - Specifies a less than or equal to operation,
 *   comparing values smaller than or equal to the provided value.
 * @property {number} [gte] - Specifies a greater than or equal to operation,
 *   comparing values larger than or equal to the provided value.
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
 * @typedef Error
 * @property {string} [type] - The type of the error.
 * @property {string} [value] - The value associated with the error.
 * @property {string} [message] - The error message describing the issue.
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
 * @property {number} [page_size] - The number of items per page.
 */
/**
 * @typedef TATDetails
 * @property {number} [max_delivery_time] - Maximum time required for delivery
 *   from the origin to the destination in seconds.
 * @property {number} [min_delivery_time] - Minimum time required for delivery
 *   from the origin to the destination in seconds.
 */
/**
 * @typedef CourierPartnerSchemeModel
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} scheme_id - A string representing the unique identifier
 *   for the scheme. This is a required field.
 * @property {string} name - A string that specifies the name of the scheme.
 *   This is a required field.
 * @property {ArithmeticOperations} weight
 * @property {ArithmeticOperations} [volumetric_weight]
 * @property {string} transport_type - A string that specifies the type of transport.
 * @property {string} region - A string that indicates the region type.
 * @property {string} delivery_type - A string that defines the delivery type.
 * @property {string[]} payment_mode - An array of strings specifying the
 *   payment modes available.
 * @property {string} stage - A string indicating the current stage of the scheme.
 * @property {CourierPartnerSchemeFeatures} feature
 */
/**
 * @typedef GetCountriesItems
 * @property {string} [id] - A string serving as the unique identifier.
 * @property {string} [sub_type] - A category for classifying the country into a
 *   specific subtype.
 * @property {string} [uid] - A globally unique identifier for the country.
 * @property {string} [name] - The official or widely recognized name of the
 *   country used in general contexts.
 * @property {string} [iso2] - The 2-letter ISO code for the country.
 * @property {string} [iso3] - The 3-letter ISO code for the country.
 * @property {string[]} [timezones] - A list of timezones associated with the country.
 * @property {HierarchyItems[]} [hierarchy] - A hierarchical list of items
 *   representing organizational levels within the country.
 * @property {string} [phone_code] - A country-specific phone code.
 * @property {CurrencyObject} [currency]
 * @property {string} [type] - The type or classification of the country (e.g.,
 *   sovereign or dependent).
 * @property {string} [latitude] - The latitude of the central point of the country.
 * @property {string} [longitude] - The longitude of the central point of the country.
 * @property {string} [display_name] - A user-friendly name for the country,
 *   typically for display purposes.
 * @property {boolean} [has_next_hierarchy] - A boolean indicating whether
 *   additional hierarchical regions or divisions are present.
 */
/**
 * @typedef HierarchyItems
 * @property {string} [name] - The name of the item as displayed to the user,
 *   usually in a UI or listing.
 * @property {string} [display_name] - It represent a country display name.
 * @property {string} [slug] - A slug is a human-readable URL segment, typically
 *   generated from a title with special characters removed.
 */
/**
 * @typedef CurrencyObject
 * @property {string} [code] - A string representing the currency code.
 * @property {string} [name] - A string representing the currency name.
 * @property {string} [symbol] - A string representing the currency symbol.
 */
/**
 * @typedef ValidationError
 * @property {string} message - A brief description of the error encountered.
 * @property {string} field - The field in the request that caused the error.
 */
declare class LogisticsPartnerModel {
}
declare namespace LogisticsPartnerModel {
    export { CourierPartnerSchemeModelSchema, BulkRegionServiceabilityTatDetails, BulkRegionServiceabilityTatResultItemData, CommonErrorResult, BulkFailureResult, FailureResult, BulkRegionServiceabilityTatResult, RegionTatItemResult, RegionServiceabilityItemResult, ServiceabilityDetailsResult, ServiceabilityDetails, RegionServiceabilityResult, RegionServiceabilityDetails, RegionTatDetails, RegionTatResult, BulkRegionJobDetails, BulkRegionResultItemData, BulkRegionResult, CourierAccountDetailsBody, CompanyCourierPartnerAccountListResult, CourierAccountResult, CourierPartnerSchemeDetailsModel, CourierPartnerPutSchema, CourierPartnerSchemeList, CourierPartnerSchemeUpdateDetails, GetCountries, TATUpdateDetails, StandardError, ValidationErrors, CreatedBy, ModifiedBy, ArithmeticOperations, CourierPartnerSchemeFeatures, Error, Page, TATDetails, CourierPartnerSchemeModel, GetCountriesItems, HierarchyItems, CurrencyObject, ValidationError };
}
/** @returns {CourierPartnerSchemeModelSchema} */
declare function CourierPartnerSchemeModelSchema(): CourierPartnerSchemeModelSchema;
type CourierPartnerSchemeModelSchema = {
    created_by?: CreatedBy;
    /**
     * - The timestamp when the record was created.
     */
    created_on?: string;
    modified_by?: ModifiedBy;
    /**
     * - The timestamp when the record last modified.
     */
    modified_on?: string;
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id?: string;
    /**
     * - Unique identifier for the scheme, used to
     * fetch or modify scheme details.
     */
    scheme_id?: string;
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
    feature: CourierPartnerSchemeFeatures;
};
/** @returns {BulkRegionServiceabilityTatDetails} */
declare function BulkRegionServiceabilityTatDetails(): BulkRegionServiceabilityTatDetails;
type BulkRegionServiceabilityTatDetails = {
    /**
     * - Country involved in the operation.
     */
    country: string;
    /**
     * - Region involved in the operation.
     */
    region: string;
    /**
     * - Type of operation, either serviceability or TAT.
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
     * - A unique identifier for the performed batch operation.
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
/** @returns {CommonErrorResult} */
declare function CommonErrorResult(): CommonErrorResult;
type CommonErrorResult = {
    /**
     * - An array of items referencing the ErrorResult
     * schema, which likely contains detailed information about the errors.
     */
    error?: Error[];
};
/** @returns {BulkFailureResult} */
declare function BulkFailureResult(): BulkFailureResult;
type BulkFailureResult = {
    /**
     * - Whether operation was successful.
     */
    success?: boolean;
    /**
     * - An array containing error details.
     */
    error: Error[];
};
/** @returns {FailureResult} */
declare function FailureResult(): FailureResult;
type FailureResult = {
    /**
     * - Whether operation was successful.
     */
    success?: boolean;
    /**
     * - Array of error details.
     */
    error?: Error[];
};
/** @returns {BulkRegionServiceabilityTatResult} */
declare function BulkRegionServiceabilityTatResult(): BulkRegionServiceabilityTatResult;
type BulkRegionServiceabilityTatResult = {
    /**
     * - Array of
     * bulk region serviceability or TAT result items.
     */
    items?: BulkRegionServiceabilityTatResultItemData[];
    page?: Page;
};
/** @returns {RegionTatItemResult} */
declare function RegionTatItemResult(): RegionTatItemResult;
type RegionTatItemResult = {
    /**
     * - An array that contains items of region tat.
     */
    items: RegionTatResult[];
    page: Page;
};
/** @returns {RegionServiceabilityItemResult} */
declare function RegionServiceabilityItemResult(): RegionServiceabilityItemResult;
type RegionServiceabilityItemResult = {
    /**
     * - An array that contains items
     * of region serviceability.
     */
    items: RegionServiceabilityResult[];
    page: Page;
};
/** @returns {ServiceabilityDetailsResult} */
declare function ServiceabilityDetailsResult(): ServiceabilityDetailsResult;
type ServiceabilityDetailsResult = {
    /**
     * - Time of day by which pickups must be
     * scheduled to be processed on the same day.
     */
    pickup_cutoff?: string;
    /**
     * - ISO2 code representing the country where
     * the serviceability is being specified.
     */
    country_code?: string;
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
     * - A string indicating the postal code or PIN
     * code of the address area.
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
     * - Limit on the amount of prepaid payments
     * allowed in the specified region.
     */
    prepaid_limit?: number;
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
     * - Time of day by which pickups
     * must be scheduled to be processed on the same day in the forward journey.
     */
    forward_pickup_cutoff?: string;
    /**
     * - Time of day by which pickups
     * must be scheduled to be processed on the same day in the reverse journey.
     */
    reverse_pickup_cutoff?: string;
    /**
     * - Indicates whether the product
     * exchange happens directly between the buyer and seller (e.g., in person),
     * instead of through a third-party service.
     */
    hand_to_hand_exchange?: boolean;
    /**
     * - List of holidays for a courier partner scheme.
     */
    holiday_list?: string[];
    /**
     * - Boolean value indicating whether
     * reverse pickup services is available.
     */
    reverse_pickup?: boolean;
    /**
     * - Boolean value indicating whether
     * installation services are available in the specified region or not.
     */
    installation?: boolean;
    /**
     * - A string serving as the unique identifier.
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
     * - Time of day by which pickups
     * must be scheduled to be processed on the same day in the forward journey.
     */
    forward_pickup_cutoff?: string;
    /**
     * - Time of day by which pickups
     * must be scheduled to be processed on the same day in the reverse journey.
     */
    reverse_pickup_cutoff?: string;
    /**
     * - Indicates whether the product
     * exchange happens directly between the buyer and seller (e.g., in person),
     * instead of through a third-party service.
     */
    hand_to_hand_exchange?: boolean;
    /**
     * - List of holidays for a courier partner scheme.
     */
    holiday_list?: string[];
    /**
     * - Boolean value indicating whether
     * installation services are available in the specified region or not.
     */
    installation?: boolean;
    /**
     * - Time of day by which pickups must be
     * scheduled to be processed on the same day.
     */
    pickup_cutoff?: string;
};
/** @returns {RegionServiceabilityResult} */
declare function RegionServiceabilityResult(): RegionServiceabilityResult;
type RegionServiceabilityResult = {
    /**
     * - Time of day by which pickups must be
     * scheduled to be processed on the same day.
     */
    pickup_cutoff?: string;
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
     * - A string indicating the postal code or PIN
     * code of the address area.
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
     * - Limit on the amount of prepaid payments
     * allowed in the specified region.
     */
    prepaid_limit?: number;
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
     * - Indicates if reverse pickup is available.
     */
    reverse_pickup?: boolean;
    /**
     * - Time of day by which pickups
     * must be scheduled to be processed on the same day in the forward journey.
     */
    forward_pickup_cutoff?: string;
    /**
     * - Time of day by which pickups
     * must be scheduled to be processed on the same day in the reverse journey.
     */
    reverse_pickup_cutoff?: string;
    /**
     * - Indicates whether the product
     * exchange happens directly between the buyer and seller (e.g., in person),
     * instead of through a third-party service.
     */
    hand_to_hand_exchange?: boolean;
    /**
     * - List of holidays for a courier partner scheme.
     */
    holiday_list?: string[];
    /**
     * - Boolean value indicating whether
     * installation services are available in the specified region or not.
     */
    installation?: boolean;
    /**
     * - A string serving as the unique identifier.
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
     * - A string indicating the postal code or PIN
     * code of the address area.
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
     * - Time of day by which pickups
     * must be scheduled to be processed on the same day in the forward journey.
     */
    forward_pickup_cutoff?: string;
    /**
     * - Time of day by which pickups must be
     * scheduled to be processed on the same day.
     */
    pickup_cutoff?: string;
    /**
     * - Time of day by which pickups
     * must be scheduled to be processed on the same day in the reverse journey.
     */
    reverse_pickup_cutoff?: string;
    /**
     * - Indicates whether the product
     * exchange happens directly between the buyer and seller (e.g., in person),
     * instead of through a third-party service.
     */
    hand_to_hand_exchange?: boolean;
    /**
     * - Limit on the amount of prepaid payments
     * allowed in the specified region.
     */
    prepaid_limit?: number;
    /**
     * - List of holidays for a courier partner scheme.
     */
    holiday_list?: string[];
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
     * - A string indicating the postal code or
     * PIN code of the address area.
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
     * - A string indicating the postal code or PIN
     * code of the address area.
     */
    to_pincode?: string;
    forward?: TATDetails;
    reverse?: TATDetails;
};
/** @returns {RegionTatResult} */
declare function RegionTatResult(): RegionTatResult;
type RegionTatResult = {
    /**
     * - Minimum time required for delivery
     * from the origin to the destination in seconds.
     */
    min_delivery_time?: number;
    /**
     * - Maximum time required for delivery
     * from the origin to the destination in seconds.
     */
    max_delivery_time?: number;
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
     * - A string indicating the postal code or
     * PIN code of the address area.
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
     * - A string indicating the postal code or PIN
     * code of the address area.
     */
    to_pincode?: string;
    forward?: TATDetails;
    reverse?: TATDetails;
    /**
     * - A string serving as the unique identifier.
     */
    id: string;
};
/** @returns {BulkRegionJobDetails} */
declare function BulkRegionJobDetails(): BulkRegionJobDetails;
type BulkRegionJobDetails = {
    /**
     * - Path to the file used in the bulk operation.
     */
    file_path?: string;
    /**
     * - Country involved in the bulk operation.
     */
    country: string;
    /**
     * - Action type for the bulk operation, either import
     * or export.
     */
    action: string;
    /**
     * - Region involved in the bulk operation.
     */
    region: string;
};
/** @returns {BulkRegionResultItemData} */
declare function BulkRegionResultItemData(): BulkRegionResultItemData;
type BulkRegionResultItemData = {
    /**
     * - Path to the file associated with the result item.
     */
    file_path: string;
    /**
     * - Number of failed records in the operation.
     */
    failed?: number;
    /**
     * - Array of failed records with
     * additional properties.
     */
    failed_records?: any[];
    /**
     * - Action type for the result item.
     */
    action: string;
    /**
     * - A unique identifier for the performed batch operation.
     */
    batch_id: string;
    /**
     * - Country associated with the result item.
     */
    country: string;
    /**
     * - Number of successful records in the operation.
     */
    success?: number;
    /**
     * - Region associated with the result item.
     */
    region: string;
    /**
     * - Current status of the result item.
     */
    status: string;
    /**
     * - Total number of records processed.
     */
    total?: number;
    /**
     * - Path to the file containing error details.
     */
    error_file_path?: string;
    /**
     * - The timestamp when the record last modified.
     */
    modified_on?: string;
    /**
     * - The timestamp when the record was created.
     */
    created_on?: string;
};
/** @returns {BulkRegionResult} */
declare function BulkRegionResult(): BulkRegionResult;
type BulkRegionResult = {
    /**
     * - Array of bulk region result items.
     */
    items: BulkRegionResultItemData[];
    page: Page;
};
/** @returns {CourierAccountDetailsBody} */
declare function CourierAccountDetailsBody(): CourierAccountDetailsBody;
type CourierAccountDetailsBody = {
    /**
     * - The unique identifier for the extension
     * linked to the courier account.
     */
    extension_id: string;
    /**
     * - The unique identifier for the courier account.
     */
    account_id?: string;
    /**
     * - The identifier for the scheme associated with
     * the courier account.
     */
    scheme_id: string;
    /**
     * - Indicates whether the courier account
     * supports self-shipping (true if it does, false otherwise).
     */
    is_self_ship: boolean;
    /**
     * - The current stage of the courier account, either
     * 'enabled' or 'disabled'.
     */
    stage: string;
    /**
     * - Indicates whether the courier account is
     * an own account (true if it is, false otherwise).
     */
    is_own_account: boolean;
};
/** @returns {CompanyCourierPartnerAccountListResult} */
declare function CompanyCourierPartnerAccountListResult(): CompanyCourierPartnerAccountListResult;
type CompanyCourierPartnerAccountListResult = {
    /**
     * - An array containing multiple
     * instances of CourierAccountResult, which details individual courier accounts.
     */
    items: CourierAccountResult[];
    page: Page;
};
/** @returns {CourierAccountResult} */
declare function CourierAccountResult(): CourierAccountResult;
type CourierAccountResult = {
    /**
     * - A string that uniquely identifies the courier account.
     */
    account_id: string;
    /**
     * - The unique identifier of the company.
     */
    company_id?: number;
    /**
     * - A string that specifies the unique identifier
     * for the scheme associated with the account
     */
    scheme_id: string;
    /**
     * - A string that uniquely identifies the
     * courier partner extension.
     */
    extension_id?: string;
    /**
     * - A boolean indicating whether the account
     * is for self-shipping.
     */
    is_self_ship: boolean;
    /**
     * - A string indicating the current stage of the
     * account, which can be either enabled or disabled.
     */
    stage: string;
    /**
     * - A boolean indicating whether the account
     * is owned by the company.
     */
    is_own_account: boolean;
    scheme_rules: CourierPartnerSchemeModel;
};
/** @returns {CourierPartnerSchemeDetailsModel} */
declare function CourierPartnerSchemeDetailsModel(): CourierPartnerSchemeDetailsModel;
type CourierPartnerSchemeDetailsModel = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Unique identifier for the scheme, used to
     * fetch or modify scheme details.
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
    feature: CourierPartnerSchemeFeatures;
};
/** @returns {CourierPartnerPutSchema} */
declare function CourierPartnerPutSchema(): CourierPartnerPutSchema;
type CourierPartnerPutSchema = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id?: string;
    created_by?: CreatedBy;
    modified_by?: ModifiedBy;
    /**
     * - The timestamp when the record was created.
     */
    created_on?: string;
    /**
     * - The timestamp when the record last modified.
     */
    modified_on?: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    scheme_id?: string;
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
    feature: CourierPartnerSchemeFeatures;
};
/** @returns {CourierPartnerSchemeList} */
declare function CourierPartnerSchemeList(): CourierPartnerSchemeList;
type CourierPartnerSchemeList = {
    /**
     * - List of courier partner schemes
     */
    items: CourierPartnerSchemeModelSchema[];
    page: Page;
};
/** @returns {CourierPartnerSchemeUpdateDetails} */
declare function CourierPartnerSchemeUpdateDetails(): CourierPartnerSchemeUpdateDetails;
type CourierPartnerSchemeUpdateDetails = {
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
    feature: CourierPartnerSchemeFeatures;
};
/** @returns {GetCountries} */
declare function GetCountries(): GetCountries;
type GetCountries = {
    /**
     * - A list of country objects containing
     * detailed information about each country.
     */
    items: GetCountriesItems[];
    page: Page;
};
/** @returns {TATUpdateDetails} */
declare function TATUpdateDetails(): TATUpdateDetails;
type TATUpdateDetails = {
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
    forward?: TATDetails;
    reverse?: TATDetails;
};
/** @returns {StandardError} */
declare function StandardError(): StandardError;
type StandardError = {
    /**
     * - A brief description of the error.
     */
    message: string;
};
/** @returns {ValidationErrors} */
declare function ValidationErrors(): ValidationErrors;
type ValidationErrors = {
    /**
     * - A list of validation errors in the request.
     */
    errors: ValidationError[];
};
/** @returns {CreatedBy} */
declare function CreatedBy(): CreatedBy;
type CreatedBy = {
    /**
     * - Identifier of the user or system that created the object.
     */
    id?: string;
};
/** @returns {ModifiedBy} */
declare function ModifiedBy(): ModifiedBy;
type ModifiedBy = {
    /**
     * - Identifier of the user or system that created the object.
     */
    id?: string;
};
/** @returns {ArithmeticOperations} */
declare function ArithmeticOperations(): ArithmeticOperations;
type ArithmeticOperations = {
    /**
     * - Specifies a less than operation, comparing values
     * smaller than the provided value.
     */
    lt?: number;
    /**
     * - Specifies a greater than operation, comparing
     * values larger than the provided value.
     */
    gt?: number;
    /**
     * - Specifies a less than or equal to operation,
     * comparing values smaller than or equal to the provided value.
     */
    lte?: number;
    /**
     * - Specifies a greater than or equal to operation,
     * comparing values larger than or equal to the provided value.
     */
    gte?: number;
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
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    /**
     * - The type of the error.
     */
    type?: string;
    /**
     * - The value associated with the error.
     */
    value?: string;
    /**
     * - The error message describing the issue.
     */
    message?: string;
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
     * - The number of items per page.
     */
    page_size?: number;
};
/** @returns {TATDetails} */
declare function TATDetails(): TATDetails;
type TATDetails = {
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
/** @returns {CourierPartnerSchemeModel} */
declare function CourierPartnerSchemeModel(): CourierPartnerSchemeModel;
type CourierPartnerSchemeModel = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - A string representing the unique identifier
     * for the scheme. This is a required field.
     */
    scheme_id: string;
    /**
     * - A string that specifies the name of the scheme.
     * This is a required field.
     */
    name: string;
    weight: ArithmeticOperations;
    volumetric_weight?: ArithmeticOperations;
    /**
     * - A string that specifies the type of transport.
     */
    transport_type: string;
    /**
     * - A string that indicates the region type.
     */
    region: string;
    /**
     * - A string that defines the delivery type.
     */
    delivery_type: string;
    /**
     * - An array of strings specifying the
     * payment modes available.
     */
    payment_mode: string[];
    /**
     * - A string indicating the current stage of the scheme.
     */
    stage: string;
    feature: CourierPartnerSchemeFeatures;
};
/** @returns {GetCountriesItems} */
declare function GetCountriesItems(): GetCountriesItems;
type GetCountriesItems = {
    /**
     * - A string serving as the unique identifier.
     */
    id?: string;
    /**
     * - A category for classifying the country into a
     * specific subtype.
     */
    sub_type?: string;
    /**
     * - A globally unique identifier for the country.
     */
    uid?: string;
    /**
     * - The official or widely recognized name of the
     * country used in general contexts.
     */
    name?: string;
    /**
     * - The 2-letter ISO code for the country.
     */
    iso2?: string;
    /**
     * - The 3-letter ISO code for the country.
     */
    iso3?: string;
    /**
     * - A list of timezones associated with the country.
     */
    timezones?: string[];
    /**
     * - A hierarchical list of items
     * representing organizational levels within the country.
     */
    hierarchy?: HierarchyItems[];
    /**
     * - A country-specific phone code.
     */
    phone_code?: string;
    currency?: CurrencyObject;
    /**
     * - The type or classification of the country (e.g.,
     * sovereign or dependent).
     */
    type?: string;
    /**
     * - The latitude of the central point of the country.
     */
    latitude?: string;
    /**
     * - The longitude of the central point of the country.
     */
    longitude?: string;
    /**
     * - A user-friendly name for the country,
     * typically for display purposes.
     */
    display_name?: string;
    /**
     * - A boolean indicating whether
     * additional hierarchical regions or divisions are present.
     */
    has_next_hierarchy?: boolean;
};
/** @returns {HierarchyItems} */
declare function HierarchyItems(): HierarchyItems;
type HierarchyItems = {
    /**
     * - The name of the item as displayed to the user,
     * usually in a UI or listing.
     */
    name?: string;
    /**
     * - It represent a country display name.
     */
    display_name?: string;
    /**
     * - A slug is a human-readable URL segment, typically
     * generated from a title with special characters removed.
     */
    slug?: string;
};
/** @returns {CurrencyObject} */
declare function CurrencyObject(): CurrencyObject;
type CurrencyObject = {
    /**
     * - A string representing the currency code.
     */
    code?: string;
    /**
     * - A string representing the currency name.
     */
    name?: string;
    /**
     * - A string representing the currency symbol.
     */
    symbol?: string;
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
