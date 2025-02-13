const Joi = require("joi");

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
 * @property {string} stage - Denotes whether the courier partner scheme is in
 *   enabled or disabled stage.
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
 * @property {string} stage - Denotes whether the courier partner scheme is in
 *   enabled or disabled stage.
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
 * @property {string} name - Name of the scheme.
 * @property {ArithmeticOperations} weight
 * @property {string} transport_type - Mode of transport associated with the
 *   courier partner scheme.
 * @property {string} region - Serviceable region associated with the courier
 *   partner scheme.
 * @property {string} delivery_type - Type of delivery associated with the
 *   courier partner scheme.
 * @property {string[]} payment_mode - Mode of payment associated with the
 *   courier partner scheme.
 * @property {string} stage - Denotes whether the courier partner scheme is in
 *   enabled or disabled stage.
 * @property {CourierPartnerSchemeFeatures} feature
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

class LogisticsPartnerModel {
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

  /** @returns {ErrorResult} */
  static ErrorResult() {
    return Joi.object({
      value: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {FailureResult} */
  static FailureResult() {
    return Joi.object({
      success: Joi.boolean().required(),
      error: Joi.array().items(LogisticsPartnerModel.ErrorResult()).required(),
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
    });
  }

  /** @returns {CourierAccountUpdateDetails} */
  static CourierAccountUpdateDetails() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      stage: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
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
      first_mile: Joi.boolean(),
      last_mile: Joi.boolean(),
      cod_limit: Joi.number(),
      doorstep_return: Joi.boolean(),
      doorstep_qc: Joi.boolean(),
      pickup_cutoff: Joi.string().allow(""),
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
      pickup_cutoff: Joi.string().allow(""),
      installation: Joi.boolean(),
    });
  }

  /** @returns {RegionServiceabilityResult} */
  static RegionServiceabilityResult() {
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
      pickup_cutoff: Joi.string().allow(""),
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
      pickup_cutoff: Joi.string().allow(""),
      installation: Joi.boolean(),
    });
  }

  /** @returns {RegionTatDetails} */
  static RegionTatDetails() {
    return Joi.object({
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
      max_delivery_time: Joi.number(),
      min_delivery_time: Joi.number(),
    });
  }

  /** @returns {RegionTatUpdateDetails} */
  static RegionTatUpdateDetails() {
    return Joi.object({
      max_delivery_time: Joi.number(),
      min_delivery_time: Joi.number(),
    });
  }

  /** @returns {RegionTatResult} */
  static RegionTatResult() {
    return Joi.object({
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
      max_delivery_time: Joi.number(),
      min_delivery_time: Joi.number(),
      id: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkRegionJobDetails} */
  static BulkRegionJobDetails() {
    return Joi.object({
      file_path: Joi.string().allow("").allow(null),
      country: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkRegionResultItemData} */
  static BulkRegionResultItemData() {
    return Joi.object({
      file_path: Joi.string().allow(""),
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

  /** @returns {CourierAccount} */
  static CourierAccount() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      account_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      stage: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
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

  /** @returns {CourierPartnerAccountFailureResult} */
  static CourierPartnerAccountFailureResult() {
    return Joi.object({
      success: Joi.boolean().required(),
      error: Joi.array().items(LogisticsPartnerModel.ErrorResult()).required(),
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
      scheme_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      stage: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
      scheme_rules: LogisticsPartnerModel.CourierPartnerSchemeModel().required(),
    });
  }

  /** @returns {CourierPartnerSchemeModel} */
  static CourierPartnerSchemeModel() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      weight: LogisticsPartnerModel.ArithmeticOperations().required(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      feature: LogisticsPartnerModel.CourierPartnerSchemeFeatures().required(),
    });
  }

  /** @returns {CourierPartnerSchemeDetailsModel} */
  static CourierPartnerSchemeDetailsModel() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      weight: LogisticsPartnerModel.ArithmeticOperations().required(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      feature: LogisticsPartnerModel.CourierPartnerSchemeFeatures().required(),
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

  /** @returns {ArithmeticOperations} */
  static ArithmeticOperations() {
    return Joi.object({
      lt: Joi.number().allow(null),
      gt: Joi.number().allow(null),
      lte: Joi.number().allow(null),
      gte: Joi.number().allow(null),
    });
  }

  /** @returns {CourierPartnerSchemeUpdateDetails} */
  static CourierPartnerSchemeUpdateDetails() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      weight: LogisticsPartnerModel.ArithmeticOperations().required(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
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

  /** @returns {GetCountriesItems} */
  static GetCountriesItems() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      timezones: Joi.array().items(Joi.string().allow("")),
      hierarchy: Joi.array().items(LogisticsPartnerModel.HierarchyItems()),
      phone_code: Joi.string().allow(""),
      currency: Joi.string().allow(""),
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
      display_name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {ValidationError} */
  static ValidationError() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      field: Joi.string().allow("").required(),
    });
  }

  /** @returns {StandardError} */
  static StandardError() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }
}
module.exports = LogisticsPartnerModel;
