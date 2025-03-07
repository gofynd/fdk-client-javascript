const Joi = require("joi");

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
 * @property {ValidationError[]} errors
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

class LogisticsPartnerModel {
  /** @returns {CourierPartnerSchemeModelSchema} */
  static CourierPartnerSchemeModelSchema() {
    return Joi.object({
      created_by: LogisticsPartnerModel.CreatedBy(),
      created_on: Joi.string().allow(""),
      modified_by: LogisticsPartnerModel.ModifiedBy(),
      modified_on: Joi.string().allow(""),
      extension_id: Joi.string().allow(""),
      scheme_id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      weight: LogisticsPartnerModel.ArithmeticOperations().required(),
      volumetric_weight: LogisticsPartnerModel.ArithmeticOperations(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      status_updates: Joi.string().allow(""),
      ndr_attempts: Joi.number(),
      qc_shipment_item_quantity: Joi.number().allow(null),
      non_qc_shipment_item_quantity: Joi.number().allow(null),
      feature: LogisticsPartnerModel.CourierPartnerSchemeFeatures().required(),
    });
  }

  /** @returns {BulkRegionServiceabilityTatDetails} */
  static BulkRegionServiceabilityTatDetails() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkRegionServiceabilityTatResultItemData} */
  static BulkRegionServiceabilityTatResultItemData() {
    return Joi.object({
      country: Joi.string().allow(""),
      region: Joi.string().allow(""),
      type: Joi.string().allow(""),
      batch_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      failed_records: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      file_path: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CommonErrorResult} */
  static CommonErrorResult() {
    return Joi.object({
      error: Joi.array().items(LogisticsPartnerModel.Error()),
    });
  }

  /** @returns {BulkFailureResult} */
  static BulkFailureResult() {
    return Joi.object({
      success: Joi.boolean(),
      error: Joi.array().items(LogisticsPartnerModel.Error()).required(),
    });
  }

  /** @returns {FailureResult} */
  static FailureResult() {
    return Joi.object({
      success: Joi.boolean(),
      error: Joi.array().items(LogisticsPartnerModel.Error()),
    });
  }

  /** @returns {BulkRegionServiceabilityTatResult} */
  static BulkRegionServiceabilityTatResult() {
    return Joi.object({
      items: Joi.array().items(
        LogisticsPartnerModel.BulkRegionServiceabilityTatResultItemData()
      ),
      page: LogisticsPartnerModel.Page(),
    });
  }

  /** @returns {RegionTatItemResult} */
  static RegionTatItemResult() {
    return Joi.object({
      items: Joi.array()
        .items(LogisticsPartnerModel.RegionTatResult())
        .required(),
      page: LogisticsPartnerModel.Page().required(),
    });
  }

  /** @returns {RegionServiceabilityItemResult} */
  static RegionServiceabilityItemResult() {
    return Joi.object({
      items: Joi.array()
        .items(LogisticsPartnerModel.RegionServiceabilityResult())
        .required(),
      page: LogisticsPartnerModel.Page().required(),
    });
  }

  /** @returns {ServiceabilityDetailsResult} */
  static ServiceabilityDetailsResult() {
    return Joi.object({
      pickup_cutoff: Joi.string().allow("").allow(null),
      country_code: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      city_code: Joi.string().allow(""),
      sector_code: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      first_mile: Joi.boolean(),
      last_mile: Joi.boolean(),
      cod_limit: Joi.number(),
      prepaid_limit: Joi.number(),
      doorstep_return: Joi.boolean(),
      doorstep_qc: Joi.boolean(),
      forward_pickup_cutoff: Joi.string().allow(""),
      reverse_pickup_cutoff: Joi.string().allow(""),
      hand_to_hand_exchange: Joi.boolean(),
      holiday_list: Joi.array().items(Joi.string().allow("")),
      reverse_pickup: Joi.boolean().allow(null),
      installation: Joi.boolean(),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {ServiceabilityDetails} */
  static ServiceabilityDetails() {
    return Joi.object({
      first_mile: Joi.boolean(),
      last_mile: Joi.boolean(),
      cod_limit: Joi.number(),
      doorstep_return: Joi.boolean(),
      doorstep_qc: Joi.boolean(),
      forward_pickup_cutoff: Joi.string().allow(""),
      reverse_pickup_cutoff: Joi.string().allow(""),
      hand_to_hand_exchange: Joi.boolean(),
      holiday_list: Joi.array().items(Joi.string().allow("")),
      installation: Joi.boolean(),
      pickup_cutoff: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {RegionServiceabilityResult} */
  static RegionServiceabilityResult() {
    return Joi.object({
      pickup_cutoff: Joi.string().allow("").allow(null),
      country_code: Joi.string().allow("").required(),
      state_code: Joi.string().allow(""),
      city_code: Joi.string().allow(""),
      sector_code: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      first_mile: Joi.boolean(),
      last_mile: Joi.boolean(),
      cod_limit: Joi.number(),
      prepaid_limit: Joi.number(),
      doorstep_return: Joi.boolean(),
      doorstep_qc: Joi.boolean(),
      reverse_pickup: Joi.boolean().allow(null),
      forward_pickup_cutoff: Joi.string().allow(""),
      reverse_pickup_cutoff: Joi.string().allow(""),
      hand_to_hand_exchange: Joi.boolean(),
      holiday_list: Joi.array().items(Joi.string().allow("")),
      installation: Joi.boolean(),
      id: Joi.string().allow("").required(),
    });
  }

  /** @returns {RegionServiceabilityDetails} */
  static RegionServiceabilityDetails() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),
      state_code: Joi.string().allow(""),
      city_code: Joi.string().allow(""),
      sector_code: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      first_mile: Joi.boolean(),
      last_mile: Joi.boolean(),
      cod_limit: Joi.number(),
      doorstep_return: Joi.boolean(),
      doorstep_qc: Joi.boolean(),
      forward_pickup_cutoff: Joi.string().allow(""),
      pickup_cutoff: Joi.string().allow("").allow(null),
      reverse_pickup_cutoff: Joi.string().allow(""),
      hand_to_hand_exchange: Joi.boolean(),
      prepaid_limit: Joi.number(),
      holiday_list: Joi.array().items(Joi.string().allow("")),
      installation: Joi.boolean(),
    });
  }

  /** @returns {RegionTatDetails} */
  static RegionTatDetails() {
    return Joi.object({
      max_delivery_time: Joi.number().allow(null),
      min_delivery_time: Joi.number().allow(null),
      from_country_code: Joi.string().allow("").required(),
      from_state_code: Joi.string().allow(""),
      from_city_code: Joi.string().allow(""),
      from_sector_code: Joi.string().allow(""),
      from_pincode: Joi.string().allow(""),
      to_country_code: Joi.string().allow("").required(),
      to_state_code: Joi.string().allow(""),
      to_city_code: Joi.string().allow(""),
      to_sector_code: Joi.string().allow(""),
      to_pincode: Joi.string().allow(""),
      forward: LogisticsPartnerModel.TATDetails(),
      reverse: LogisticsPartnerModel.TATDetails(),
    });
  }

  /** @returns {RegionTatResult} */
  static RegionTatResult() {
    return Joi.object({
      min_delivery_time: Joi.number().allow(null),
      max_delivery_time: Joi.number().allow(null),
      from_country_code: Joi.string().allow("").required(),
      from_state_code: Joi.string().allow(""),
      from_city_code: Joi.string().allow(""),
      from_sector_code: Joi.string().allow(""),
      from_pincode: Joi.string().allow(""),
      to_country_code: Joi.string().allow("").required(),
      to_state_code: Joi.string().allow(""),
      to_city_code: Joi.string().allow(""),
      to_sector_code: Joi.string().allow(""),
      to_pincode: Joi.string().allow(""),
      forward: LogisticsPartnerModel.TATDetails(),
      reverse: LogisticsPartnerModel.TATDetails(),
      id: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkRegionJobDetails} */
  static BulkRegionJobDetails() {
    return Joi.object({
      file_path: Joi.string().allow(""),
      country: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkRegionResultItemData} */
  static BulkRegionResultItemData() {
    return Joi.object({
      file_path: Joi.string().allow("").required(),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      action: Joi.string().allow("").required(),
      batch_id: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      success: Joi.number(),
      region: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      total: Joi.number(),
      error_file_path: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
    });
  }

  /** @returns {BulkRegionResult} */
  static BulkRegionResult() {
    return Joi.object({
      items: Joi.array()
        .items(LogisticsPartnerModel.BulkRegionResultItemData())
        .required(),
      page: LogisticsPartnerModel.Page().required(),
    });
  }

  /** @returns {CourierAccountDetailsBody} */
  static CourierAccountDetailsBody() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      account_id: Joi.string().allow(""),
      scheme_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      stage: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
    });
  }

  /** @returns {CompanyCourierPartnerAccountListResult} */
  static CompanyCourierPartnerAccountListResult() {
    return Joi.object({
      items: Joi.array()
        .items(LogisticsPartnerModel.CourierAccountResult())
        .required(),
      page: LogisticsPartnerModel.Page().required(),
    });
  }

  /** @returns {CourierAccountResult} */
  static CourierAccountResult() {
    return Joi.object({
      account_id: Joi.string().allow("").required(),
      company_id: Joi.number(),
      scheme_id: Joi.string().allow("").required(),
      extension_id: Joi.string().allow(""),
      is_self_ship: Joi.boolean().required(),
      stage: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
      scheme_rules: LogisticsPartnerModel.CourierPartnerSchemeModel().required(),
    });
  }

  /** @returns {CourierPartnerSchemeDetailsModel} */
  static CourierPartnerSchemeDetailsModel() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      weight: LogisticsPartnerModel.ArithmeticOperations().required(),
      volumetric_weight: LogisticsPartnerModel.ArithmeticOperations(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      status_updates: Joi.string().allow(""),
      ndr_attempts: Joi.number(),
      qc_shipment_item_quantity: Joi.number().allow(null),
      non_qc_shipment_item_quantity: Joi.number().allow(null),
      feature: LogisticsPartnerModel.CourierPartnerSchemeFeatures().required(),
    });
  }

  /** @returns {CourierPartnerPutSchema} */
  static CourierPartnerPutSchema() {
    return Joi.object({
      extension_id: Joi.string().allow(""),
      created_by: LogisticsPartnerModel.CreatedBy(),
      modified_by: LogisticsPartnerModel.ModifiedBy(),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      scheme_id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      weight: LogisticsPartnerModel.ArithmeticOperations().required(),
      volumetric_weight: LogisticsPartnerModel.ArithmeticOperations(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      status_updates: Joi.string().allow(""),
      ndr_attempts: Joi.number(),
      qc_shipment_item_quantity: Joi.number().allow(null),
      non_qc_shipment_item_quantity: Joi.number().allow(null),
      feature: LogisticsPartnerModel.CourierPartnerSchemeFeatures().required(),
    });
  }

  /** @returns {CourierPartnerSchemeList} */
  static CourierPartnerSchemeList() {
    return Joi.object({
      items: Joi.array()
        .items(LogisticsPartnerModel.CourierPartnerSchemeModelSchema())
        .required(),
      page: LogisticsPartnerModel.Page().required(),
    });
  }

  /** @returns {CourierPartnerSchemeUpdateDetails} */
  static CourierPartnerSchemeUpdateDetails() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      weight: LogisticsPartnerModel.ArithmeticOperations().required(),
      volumetric_weight: LogisticsPartnerModel.ArithmeticOperations(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      status_updates: Joi.string().allow(""),
      ndr_attempts: Joi.number(),
      qc_shipment_item_quantity: Joi.number().allow(null),
      non_qc_shipment_item_quantity: Joi.number().allow(null),
      feature: LogisticsPartnerModel.CourierPartnerSchemeFeatures().required(),
    });
  }

  /** @returns {GetCountries} */
  static GetCountries() {
    return Joi.object({
      items: Joi.array()
        .items(LogisticsPartnerModel.GetCountriesItems())
        .required(),
      page: LogisticsPartnerModel.Page().required(),
    });
  }

  /** @returns {TATUpdateDetails} */
  static TATUpdateDetails() {
    return Joi.object({
      max_delivery_time: Joi.number().allow(null),
      min_delivery_time: Joi.number().allow(null),
      forward: LogisticsPartnerModel.TATDetails(),
      reverse: LogisticsPartnerModel.TATDetails(),
    });
  }

  /** @returns {StandardError} */
  static StandardError() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {ValidationErrors} */
  static ValidationErrors() {
    return Joi.object({
      errors: Joi.array()
        .items(LogisticsPartnerModel.ValidationError())
        .required(),
    });
  }

  /** @returns {CreatedBy} */
  static CreatedBy() {
    return Joi.object({
      id: Joi.string().allow("").allow(null),
    }).allow(null);
  }

  /** @returns {ModifiedBy} */
  static ModifiedBy() {
    return Joi.object({
      id: Joi.string().allow("").allow(null),
    }).allow(null);
  }

  /** @returns {ArithmeticOperations} */
  static ArithmeticOperations() {
    return Joi.object({
      lt: Joi.number().allow(null),
      gt: Joi.number().allow(null),
      lte: Joi.number().allow(null),
      gte: Joi.number().allow(null),
    });
  }

  /** @returns {CourierPartnerSchemeFeatures} */
  static CourierPartnerSchemeFeatures() {
    return Joi.object({
      doorstep_qc: Joi.boolean(),
      qr: Joi.boolean(),
      mps: Joi.boolean(),
      ndr: Joi.boolean(),
      ndr_attempts: Joi.number(),
      dangerous_goods: Joi.boolean(),
      fragile_goods: Joi.boolean(),
      restricted_goods: Joi.boolean(),
      cold_storage_goods: Joi.boolean(),
      doorstep_exchange: Joi.boolean(),
      doorstep_return: Joi.boolean(),
      product_installation: Joi.boolean(),
      openbox_delivery: Joi.boolean(),
      status_updates: Joi.string().allow(""),
      multi_pick_single_drop: Joi.boolean(),
      single_pick_multi_drop: Joi.boolean(),
      multi_pick_multi_drop: Joi.boolean(),
      ewaybill: Joi.boolean(),
      qc_shipment_item_quantity: Joi.number().allow(null),
      non_qc_shipment_item_quantity: Joi.number().allow(null),
    });
  }

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
      page_size: Joi.number(),
    });
  }

  /** @returns {TATDetails} */
  static TATDetails() {
    return Joi.object({
      max_delivery_time: Joi.number(),
      min_delivery_time: Joi.number(),
    });
  }

  /** @returns {CourierPartnerSchemeModel} */
  static CourierPartnerSchemeModel() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      weight: LogisticsPartnerModel.ArithmeticOperations().required(),
      volumetric_weight: LogisticsPartnerModel.ArithmeticOperations(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      feature: LogisticsPartnerModel.CourierPartnerSchemeFeatures().required(),
    });
  }

  /** @returns {GetCountriesItems} */
  static GetCountriesItems() {
    return Joi.object({
      id: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      name: Joi.string().allow(""),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      timezones: Joi.array().items(Joi.string().allow("")),
      hierarchy: Joi.array().items(LogisticsPartnerModel.HierarchyItems()),
      phone_code: Joi.string().allow(""),
      currency: LogisticsPartnerModel.CurrencyObject(),
      type: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      has_next_hierarchy: Joi.boolean(),
    });
  }

  /** @returns {HierarchyItems} */
  static HierarchyItems() {
    return Joi.object({
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {CurrencyObject} */
  static CurrencyObject() {
    return Joi.object({
      code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
    });
  }

  /** @returns {ValidationError} */
  static ValidationError() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      field: Joi.string().allow("").required(),
    });
  }
}
module.exports = LogisticsPartnerModel;
