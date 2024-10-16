const Joi = require("joi");

/**
 * @typedef GetStoreResult
 * @property {StoreItemResult[]} [items] - List of locations, each containing
 *   detailed information about individual location.
 * @property {Page} [page]
 */

/**
 * @typedef StoreItemResult
 * @property {number} [id] - A unique identifier for the location.
 * @property {string} [store_type] - The type of store, indicating the nature of
 *   the store, such as retail or warehouse.
 * @property {string} [fulfillment_type] - The method of fulfillment used by the
 *   store, such as shipping, pickup, or delivery.
 * @property {number} [processing_time] - The average time taken by the store to
 *   process orders, measured in minutes.
 * @property {string[]} [tags] - List of tags associated with the store for
 *   categorization and search purposes.
 * @property {number} [company_id] - The unique identifier of the company that
 *   owns the store.
 * @property {number} [latitude] - The geographical latitude coordinate of the
 *   store location.
 * @property {number} [longitude] - The geographical longitude coordinate of the
 *   store location.
 */

/**
 * @typedef ValidateAddressDetails
 * @property {string} [address] - Complete address, combining address line 1,
 *   address line 2, area, landmark, sector, city, state, and pincode.
 * @property {string} [address1] - First line of the address, typically
 *   containing street or building information.
 * @property {string} [address2] - Second line of the address, which can be used
 *   for additional address details if needed.
 * @property {string} [area] - Locality or area associated with the address.
 * @property {string} [landmark] - Prominent nearby landmark that aids in
 *   locating the address.
 * @property {string} [pincode] - Postal code or PIN code of the address area.
 * @property {string} [sector] - Specifies the sector or district of the address
 *   if applicable.
 * @property {string} [city] - Denote the city or municipality of the address.
 * @property {string} [state] - Indicates the state or province of the address.
 * @property {string} [name] - Recipient's name associated with the address.
 * @property {string} [phone] - Recipient's contact phone number.
 * @property {string} [email] - Recipient's email address.
 */

/**
 * @typedef PincodeParentsResult
 * @property {string} [sub_type] - Specific type of locality hierarchy the
 *   pincode belongs to (e.g., city, state, country).
 * @property {string} [display_name] - User-friendly version of the geographical
 *   data, which may be more descriptive or formatted differently.
 * @property {string} [name] - The actual geographical data, such as country
 *   names (India), state names (Maharashtra), pin codes (400603), city names
 *   (Dubai), or local sectors (Deira).
 * @property {string} [uid] - Unique identifier for the locality.
 */

/**
 * @typedef PincodeMetaResult
 * @property {string} [zone] - Geographical region to which the pincode belongs,
 *   often used to categorize or group pincodes for regional management or
 *   postal purposes.
 * @property {number} [internal_zone_id] - A unique identifier used within the
 *   system to track or reference the specific zone associated with the pincode.
 */

/**
 * @typedef PincodeErrorSchemaResult
 * @property {string} [message] - A user-readable description of the error,
 *   explaining what went wrong.
 * @property {string} [value] - A specific code or identifier related to the
 *   error, used for referencing or categorizing the error.
 * @property {string} [type] - The classification of the error, indicating the
 *   kind of issue.
 */

/**
 * @typedef CountryMetaResult
 * @property {string} [country_code] - The ISO 3166-1 alpha-2 code representing
 *   the country (e.g., "IN" for India, "US" for the United States).
 * @property {string} [isd_code] - The International Subscriber Dialing (ISD)
 *   code, also known as the country dialing code, used for making international
 *   phone calls to the country (e.g., "+91" for India, "+1" for the United States).
 */

/**
 * @typedef PincodeLatLongData
 * @property {string} [type] - Specifies the type of geographical feature or
 *   data, typically "Point" for coordinates in geographic data systems.
 * @property {string[]} [coordinates] - Contains the latitude and longitude
 *   values representing the precise location. The format is usually an array
 *   with two values: [longitude, latitude].
 */

/**
 * @typedef PincodeDataResult
 * @property {PincodeParentsResult[]} [parents] - List of object representing a
 *   collection of geographical locations, each associated with specific
 *   hierarchical data such as cities, states, or countries.
 * @property {PincodeMetaResult} [meta]
 * @property {string} [display_name] - User-friendly version of the geographical
 *   data, which may be more descriptive or formatted differently.
 * @property {PincodeErrorSchemaResult} error
 * @property {CountryMetaResult} [meta_code]
 * @property {PincodeLatLongData} [lat_long]
 * @property {string} [sub_type] - Indicates the specific type of locality
 *   hierarchy the pincode belongs to (e.g., city, state, country).
 * @property {string} [name] - The actual geographical data, such as country
 *   names (India), state names (Maharashtra), pin codes (400603), city names
 *   (Dubai), or local sectors (Deira).
 * @property {string} [uid] - This field stands for "Unique Identifier," a
 *   unique value assigned to each instance to ensure differentiation and reference.
 */

/**
 * @typedef PincodeDetails
 * @property {boolean} success - Indicates whether the API request was
 *   successful (true) or failed (false).
 * @property {PincodeDataResult[]} [data] - Contains the actual response data
 *   when the request is successful, providing details like pincode information
 *   or related data.
 * @property {PincodeErrorSchemaResult} error
 */

/**
 * @typedef TATCategoryDetails
 * @property {string} [level] - Specifies the hierarchical level of the category
 *   (e.g., country, state, city).
 * @property {number} [id] - Represents the unique identifier for the category
 *   at the specified level.
 */

/**
 * @typedef TATArticlesDetails
 * @property {TATCategoryDetails} [category]
 * @property {string} [manufacturing_time_unit] - The unit of measurement for
 *   the manufacturing time, such as hours or days.
 * @property {number} [manufacturing_time] - The amount of time required to
 *   manufacture the article, specified in the unit given by `manufacturing_time_unit`.
 */

/**
 * @typedef TATLocationDetailsDetails
 * @property {number} [fulfillment_id] - A unique identifier of the fulfilling location.
 * @property {string} [from_pincode] - The postal code of the location from
 *   which the fulfillment originates.
 * @property {TATArticlesDetails[]} [articles] - List of articles included in
 *   the fulfillment request, which provides details about the items to be
 *   processed or shipped.
 */

/**
 * @typedef TATViewDetails
 * @property {string} [to_pincode] - The postal code of the destination location
 *   where the fulfillment or shipment is headed.
 * @property {string} [source] - The origin or source of the request, indicating
 *   where the data or action is coming from.
 * @property {string} [action] - The specific operation or request being made,
 *   such as viewing, updating, or managing data.
 * @property {string} [identifier] - A unique ID used to reference or track the
 *   specific request or item within the system.
 * @property {TATLocationDetailsDetails[]} [location_details] - Locations
 *   involved in the request, including details about both the source and destination.
 * @property {string} [journey] - Indicates the direction of the request or
 *   shipment. It can either be "forward" (from the source to the destination)
 *   or "return" (from the destination back to the source).
 */

/**
 * @typedef TATErrorSchemaResult
 * @property {string} [message] - A user-readable description of the error,
 *   explaining what went wrong.
 * @property {string} [value] - A specific code or identifier related to the
 *   error, used for referencing or categorizing the error.
 * @property {string} [type] - The classification of the error, indicating the
 *   kind of issue.
 */

/**
 * @typedef TATTimestampResult
 * @property {number} [min] - The earliest possible timestamp.
 * @property {number} [max] - The latest possible timestamp.
 */

/**
 * @typedef TATFormattedResult
 * @property {string} [min] - The earliest possible timestamp.
 * @property {string} [max] - The latest possible timestamp.
 */

/**
 * @typedef TATPromiseResult
 * @property {TATTimestampResult} [timestamp]
 * @property {TATFormattedResult} [formatted]
 */

/**
 * @typedef TATArticlesResult
 * @property {string} [manufacturing_time_unit] - The unit of measurement for
 *   the manufacturing time such as hours or days.
 * @property {TATErrorSchemaResult} [error]
 * @property {boolean} [is_cod_available] - Indicates whether Cash on Delivery
 *   (COD) is available for the articles.
 * @property {TATPromiseResult} [promise]
 * @property {number} [manufacturing_time] - The time required to manufacture
 *   the articles, measured in the unit specified by manufacturing_time_unit.
 * @property {TATCategoryDetails} [category]
 * @property {number} [_manufacturing_time_seconds] - The manufacturing time
 *   converted into seconds.
 */

/**
 * @typedef TATLocationDetailsResult
 * @property {number} [fulfillment_id] - A unique identifier of the fulfilling location.
 * @property {string} [from_pincode] - The postal code of the location from
 *   which the fulfillment originates.
 * @property {TATArticlesResult[]} [articles] - List of articles included in the
 *   fulfillment request, which provides details about the items to be processed
 *   or shipped.
 */

/**
 * @typedef TATViewResult
 * @property {string} [to_pincode] - The postal code of the destination location
 *   where the fulfillment or shipment is headed.
 * @property {string} [request_uuid] - A unique identifier for the request.
 * @property {string} [payment_mode] - The mode of payment used for the transaction.
 * @property {boolean} [success] - Whether the request was successful (true/false).
 * @property {TATErrorSchemaResult} [error]
 * @property {boolean} [is_cod_available] - Whether Cash on Delivery (COD) is
 *   available for the request.
 * @property {string} [source] - The origin or source of the request.
 * @property {string} [action] - The action performed or requested (e.g.,
 *   forward, return).
 * @property {string} [stormbreaker_uuid] - A unique identifier related to the
 *   stormbreaker process.
 * @property {string} [to_city] - The city corresponding to the destination pincode.
 * @property {string} [identifier] - A unique identifier for the request or transaction.
 * @property {TATLocationDetailsResult[]} [location_details] - Location involved
 *   in the request.
 * @property {string} [journey] - Type of journey, either forward or return.
 */

/**
 * @typedef DP
 * @property {number} fm_priority - First Mile Priority; focuses on the initial
 *   segment of the logistics process, from the point of origin to the first
 *   distribution center.
 * @property {number} lm_priority - Last Mile Priority; deals with the final
 *   stage of the delivery process, where goods are delivered from the
 *   distribution center to the final destination.
 * @property {number} rvp_priority - Reverse Pickup Priority; pertains to the
 *   process of collecting goods from the customer for return or exchange.
 * @property {string} payment_mode - The method of payment used for
 *   transactions, such as credit card, debit card, cash on delivery, etc.
 * @property {string[]} operations - Refers to the various activities and
 *   processes involved in managing and executing the delivery and logistics operations.
 * @property {string} [area_code] - A code that identifies a specific geographic
 *   area, often used for sorting and routing deliveries.
 * @property {boolean} [assign_dp_from_sb] - Indicates whether the delivery
 *   partner (DP) is assigned from stormbreaker service.
 * @property {string} [internal_account_id] - An identifier used internally to
 *   track accounts or entities within the organization's system.
 * @property {string} [external_account_id] - An identifier used to reference
 *   accounts or entities outside the organization's system, such as partner accounts.
 * @property {string} [transport_mode] - The method of transportation used for
 *   delivering goods, such as road, rail, air, or sea.
 */

/**
 * @typedef LogisticsResult
 * @property {DP} [dp]
 */

/**
 * @typedef CountryEntityResult
 * @property {CountryMetaResult} [meta]
 * @property {LogisticsResult} [logistics]
 * @property {string} [display_name] - User-friendly version of the geographical
 *   data, which may be more descriptive or formatted differently.
 * @property {string} [type] - Specifies the type of geographical feature or
 *   data, typically "Point" for coordinates in geographic data systems.
 * @property {boolean} [is_active] - Whether the country entity is currently
 *   active or not.
 * @property {string} [parent_id] - Identifier for the parent of the current locality.
 * @property {string} [sub_type] - Specific type of locality hierarchy the
 *   pincode belongs to (e.g., city, state, country).
 * @property {string} [name] - Country name.
 * @property {string} [uid] - Unique identifier for the country.
 */

/**
 * @typedef CountryListResult
 * @property {CountryEntityResult[]} [results] - A list of country entities,
 *   each containing details about individual countries.
 */

/**
 * @typedef GetZoneFromPincodeViewDetails
 * @property {string} pincode - The postal code or ZIP code used to pinpoint a
 *   specific geographic area or location.
 * @property {string} country - The country where the pincode is located.
 */

/**
 * @typedef GetZoneFromPincodeViewResult
 * @property {string} serviceability_type - Specifies the type of serviceability
 *   for the given pincode, indicating whether it's deliverable or serviceable
 *   under certain conditions.
 * @property {string[]} zones - Lists the zones associated with the pincode,
 *   detailing the geographical or logistical zones for service.
 */

/**
 * @typedef ReAssignStoreDetails
 * @property {Object} configuration - Specifies the configuration settings or
 *   parameters for the store reassignment.
 * @property {string} to_pincode - The postal code of the destination location
 *   where the fulfillment or shipment is headed.
 * @property {number[]} ignored_locations - Locations that should be excluded
 *   from the reassignment process.
 * @property {string} identifier - A unique identifier for the reassignment request.
 * @property {Object[]} articles - List of articles or items involved in the
 *   store reassignment.
 */

/**
 * @typedef ReAssignStoreResult
 * @property {string} to_pincode - The postal code of the destination location
 *   where the fulfillment or shipment is headed.
 * @property {string} pystormbreaker_uuid - A unique identifier for tracking the
 *   reassignment operation.
 * @property {boolean} success - Whether the reassignment was successful or not.
 * @property {Object} error - Details about any errors encountered during the
 *   reassignment.
 * @property {Object[]} [assigned_stores] - List of stores that have been
 *   successfully reassigned.
 */

/**
 * @typedef CountryHierarchy
 * @property {string} [name] - It represent a country name.
 * @property {string} [slug] - A URL-friendly version of the name, often used
 *   for referencing or querying purposes.
 */

/**
 * @typedef CurrencyObject
 * @property {string} [code] - The currency code, typically a three-letter ISO
 *   code (e.g., "USD" for US Dollar).
 * @property {string} [name] - It represent a country name.
 * @property {string} [symbol] - The symbol used to represent the currency
 *   (e.g., "$" for US Dollar).
 */

/**
 * @typedef CountryObject
 * @property {string} [id] - Unique identifier for the country.
 * @property {string} [name] - It represent a country name.
 * @property {string} [display_name] - User-friendly version of the geographical
 *   data, which may be more descriptive or formatted differently.
 * @property {string} [iso2] - Two-letter ISO code representing the country.
 * @property {string} [iso3] - Three-letter ISO code representing the country.
 * @property {string[]} [timezones] - List of time zones used in the country
 *   (e.g., ["America/New_York", "America/Los_Angeles"]).
 * @property {CountryHierarchy[]} [hierarchy] - Levels within the country (e.g.,
 *   states, cities) and their slugs (e.g., [{"name": "State", "slug": "state"},
 *   {"name": "City", "slug": "city"}]).
 * @property {string} [phone_code] - International dialing code for the country
 *   (e.g., "+1").
 * @property {string} [latitude] - Geographical latitude of the country (e.g., "37.0902").
 * @property {string} [longitude] - Geographical longitude of the country (e.g.,
 *   "-95.7129").
 * @property {CurrencyObject} [currency]
 * @property {string} [type] - Indicates the type of object (e.g., "country").
 */

/**
 * @typedef GetCountries
 * @property {CountryObject[]} [items] - List of countries, each containing
 *   detailed information about individual country.
 * @property {Page} [page]
 */

/**
 * @typedef GetOneOrAllPath
 * @property {string} [locality_type] - Specifies the type of locality to be
 *   retrieved, such as city, state, or pincode (e.g., "city", "state", "pincode").
 * @property {string} [locality_value] - The specific value of the locality
 *   being queried, such as the name of the city or the pincode (e.g., "Mumbai",
 *   "400093").
 */

/**
 * @typedef GetOneOrAllQuery
 * @property {string} [country] - The name of the country to filter the results.
 * @property {string} [state] - The name of the state within the specified country.
 * @property {string} [city] - The name of the city within the specified state.
 * @property {string} [sector] - The name of the sector or area within the specified city.
 */

/**
 * @typedef GetOneOrAllParams
 * @property {GetOneOrAllPath} [path]
 * @property {GetOneOrAllQuery} [query]
 */

/**
 * @typedef GetOneOrAll
 * @property {string} [operation_id] - Identifier for the specific operation or
 *   query being performed.
 * @property {GetOneOrAllParams} [params]
 */

/**
 * @typedef LengthValidation
 * @property {number} [min] - The minimum number of characters or digits allowed.
 * @property {number} [max] - The maximum number of characters or digits allowed.
 */

/**
 * @typedef FieldValidationRegex
 * @property {string} [value] - Regular expression pattern used to validate the field.
 * @property {LengthValidation} [length]
 */

/**
 * @typedef FieldValidation
 * @property {string} [type] - Specifies the validation method, such as regex
 *   for regular expression validation.
 * @property {FieldValidationRegex} [regex]
 */

/**
 * @typedef GetCountryFieldsAddressValues
 * @property {GetOneOrAll} [get_one]
 * @property {GetOneOrAll} [get_all]
 */

/**
 * @typedef GetCountryFieldsAddress
 * @property {string} display_name - User-friendly version of the geographical
 *   data, which may be more descriptive or formatted differently.
 * @property {string} slug - URL-friendly version of the name, often used for
 *   referencing or querying purposes.
 * @property {boolean} required - Indicates whether the field is mandatory for
 *   the user to fill out.
 * @property {boolean} [edit] - Specifies if the field can be edited by the user.
 * @property {string} input - Defines the type of input control used for the
 *   field (e.g., textbox).
 * @property {FieldValidation} [validation]
 * @property {GetCountryFieldsAddressValues} [values]
 * @property {string} [error_text] - The message shown to the user if the input
 *   does not meet the validation criteria.
 */

/**
 * @typedef GetCountryFieldsAddressTemplate
 * @property {string} checkout_form - The format used to display or collect
 *   address information during checkout.
 * @property {string} store_os_form - The format used for address entry or
 *   display in the store's operating system.
 * @property {string} default_display - The general format for displaying
 *   address information.
 */

/**
 * @typedef GetCountryFields
 * @property {GetCountryFieldsAddress[]} address - Specifies the fields and
 *   attributes related to address information, including display names, input
 *   types, and validation rules. This section defines the details needed for
 *   address collection and formatting.
 * @property {string[]} serviceability_fields - Lists the specific address
 *   fields used to determine whether a location is serviceable. These fields
 *   are crucial for validating service coverage and availability.
 * @property {GetCountryFieldsAddressTemplate} address_template
 */

/**
 * @typedef GetCountry
 * @property {string} [id] - Unique identifier for the country.
 * @property {string} [name] - It represent a country name.
 * @property {string} [display_name] - User-friendly version of the geographical
 *   data, which may be more descriptive or formatted differently.
 * @property {string} [iso2] - Two-letter ISO code representing the country.
 * @property {string} [iso3] - Three-letter ISO code representing the country.
 * @property {string[]} [timezones] - List of time zones used in the country
 *   (e.g., ["America/New_York", "America/Los_Angeles"]).
 * @property {CountryHierarchy[]} [hierarchy] - Levels within the country (e.g.,
 *   states, cities) and their slugs (e.g., [{"name": "State", "slug": "state"},
 *   {"name": "City", "slug": "city"}]).
 * @property {string} [phone_code] - International dialing code for the country
 *   (e.g., "+1").
 * @property {string} [latitude] - Geographical latitude of the country (e.g., "37.0902").
 * @property {string} [longitude] - Geographical longitude of the country (e.g.,
 *   "-95.7129").
 * @property {CurrencyObject} [currency]
 * @property {string} [type] - Indicates the type of object (e.g., "country").
 * @property {GetCountryFields} [fields]
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
 * @typedef Localities
 * @property {string} [id] - A unique identifier for the locality.
 * @property {string} [name] - The actual geographical data, such as country
 *   names (India), state names (Maharashtra), pin codes (400603), city names
 *   (Dubai), or local sectors (Deira).
 * @property {Object} [custom_meta] - Custom meta to store custom json against hierarchy.
 * @property {string} [display_name] - User-friendly version of the geographical
 *   data, which may be more descriptive or formatted differently.
 * @property {string[]} [parent_ids] - Identifiers for the parent of the current locality.
 * @property {string} [type] - Specifies the category of the address component,
 *   such as pincode, state, city, country, or sector.
 * @property {LocalityParent[]} [localities] - Representing the localities that
 *   are associated with or contained within the current locality. It provides
 *   detailed information about the parent localities, including their names,
 *   identifiers, and hierarchical relationships.
 */

/**
 * @typedef LocalityParent
 * @property {string} [id] - A unique identifier for the locality.
 * @property {string} [name] - The actual geographical data, such as country
 *   names (India), state names (Maharashtra), pin codes (400603), city names
 *   (Dubai), or local sectors (Deira).
 * @property {string} [display_name] - User-friendly version of the geographical
 *   data, which may be more descriptive or formatted differently.
 * @property {string} [code] - Code assigned to a locality, which is unique to
 *   its immediate parent.
 * @property {Object} [custom_meta] - Custom meta to store custom json against hierarchy.
 * @property {string[]} [parent_ids] - Identifiers for the parent of the current locality.
 * @property {string} [type] - Specifies the category of the address component,
 *   such as pincode, state, city, country, or sector.
 */

/**
 * @typedef GetLocalities
 * @property {Localities[]} [items] - List of localities, each containing
 *   detailed information about individual locality.
 * @property {Page} [page]
 */

/**
 * @typedef GetLocality
 * @property {string} [id] - A unique identifier for the locality.
 * @property {string} [name] - The actual geographical data, such as country
 *   names (India), state names (Maharashtra), pin codes (400603), city names
 *   (Dubai), or local sectors (Deira).
 * @property {string} [display_name] - User-friendly version of the geographical
 *   data, which may be more descriptive or formatted differently.
 * @property {string} [code] - Code assigned to a locality, which is unique to
 *   its immediate parent.
 * @property {Object} [custom_meta] - Custom meta to store custom json against hierarchy.
 * @property {string[]} [parent_ids] - Identifiers for the parent of the current locality.
 * @property {string} [type] - Specifies the category of the address component,
 *   such as pincode, state, city, country, or sector.
 * @property {LocalityParent[]} [localities] - Representing the localities that
 *   are associated with or contained within the current locality. It provides
 *   detailed information about the parent localities, including their names,
 *   identifiers, and hierarchical relationships.
 */

/**
 * @typedef ShipmentsArticles
 * @property {number} [item_id] - Unique identifier of the item.
 * @property {number} [category_id] - Unique identifier of the category.
 * @property {number} [brand_id] - Unique identifier of the brand.
 * @property {number} [department_id] - Unique identifier of the department.
 * @property {string[]} [tags] - Tags associated with the item.
 */

/**
 * @typedef ShipmentDimension
 * @property {number} height - Height of the shipment in centimeters.
 * @property {number} length - Length of the shipment in centimeters.
 * @property {number} width - Width of the shipment in centimeters.
 */

/**
 * @typedef Shipments
 * @property {string} [id] - Unique identifier of the shipment.
 * @property {number} [location_id] - Unique identifier of the selling location.
 * @property {string[]} [location_tags] - Tags associated with the selling location.
 * @property {number} [shipment_weight] - Weight of the shipment.
 * @property {number} [shipment_volumetric_weight] - Volumetric weight of the shipment.
 * @property {number} [shipment_cost] - Total Cost of the shipment.
 * @property {ShipmentDimension} [shipment_dimension]
 * @property {string[]} [courier_partner_schemes] - A List of courier schemes.
 * @property {ShipmentsArticles[]} [articles] - List of articles in the shipment.
 */

/**
 * @typedef ShipmentCourierPartnerDetails
 * @property {ShipmentsCourierPartnersServiceability} from_location
 * @property {ShipmentsCourierPartnersServiceability} to_location
 * @property {Shipments[]} [shipments] - List of shipments.
 * @property {string} [journey] - Journey type of the shipment forward or return.
 * @property {string} [payment_mode] - Payment mode opted for the shipment.
 */

/**
 * @typedef CourierPartnerPromise
 * @property {string} min - The earliest possible timestamp.
 * @property {string} max - The latest possible timestamp.
 */

/**
 * @typedef CourierPartners
 * @property {string} [extension_id] - Unique identifier of courier partner extension.
 * @property {string} [scheme_id] - Unique identifier of courier partner scheme.
 * @property {string} [name] - Name of the courier partner.
 * @property {CourierPartnerPromise} [delivery_promise]
 */

/**
 * @typedef ShipmentCourierPartners
 * @property {string} [id] - Unique identifier of the shipment.
 * @property {CourierPartners[]} [courier_partners] - Courier partners of the shipment.
 */

/**
 * @typedef ShipmentCourierPartnerResult
 * @property {CourierPartners[]} [courier_partners]
 * @property {ShipmentCourierPartners[]} [shipments]
 */

/**
 * @typedef ShipmentsCourierPartnersServiceability
 * @property {string} [pincode] - Postal code or PIN code of the address area.
 * @property {string} [sector_code] - Specifies the sector or district code of
 *   the address if applicable.
 * @property {string} [state_code] - Indicates the state or province code of the address.
 * @property {string} [city_code] - Denote the city or municipality code of the address.
 * @property {string} country_code - ISO2 code for the country of the address.
 */

/**
 * @typedef ServiceabilityLocation
 * @property {string} longitude - Geographical longitude coordinate of the location.
 * @property {string} latitude - Geographical latitude coordinate of the location.
 */

/**
 * @typedef GetPromiseDetails
 * @property {StorePromise[]} [items] - List of delivery promises for each store.
 * @property {Promise} [delivery_promise]
 * @property {Page} [page]
 */

/**
 * @typedef StorePromise
 * @property {number} [uid] - Unique identifier of a store.
 * @property {string} [code] - Code assigned to a store.
 * @property {string} [name] - Name of a store.
 * @property {Promise} [delivery_promise]
 */

/**
 * @typedef Promise
 * @property {string} [min] - Earliest delivery time.
 * @property {string} [max] - Latest delivery time.
 */

/**
 * @typedef ErrorResult
 * @property {string} [error] - Error code identifying the type of error.
 * @property {string} [message] - User-friendly explanation of what went wrong.
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

class LogisticApplicationModel {
  /** @returns {GetStoreResult} */
  static GetStoreResult() {
    return Joi.object({
      items: Joi.array().items(LogisticApplicationModel.StoreItemResult()),
      page: LogisticApplicationModel.Page(),
    });
  }

  /** @returns {StoreItemResult} */
  static StoreItemResult() {
    return Joi.object({
      id: Joi.number(),
      store_type: Joi.string().allow(""),
      fulfillment_type: Joi.string().allow(""),
      processing_time: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      latitude: Joi.number(),
      longitude: Joi.number(),
    });
  }

  /** @returns {ValidateAddressDetails} */
  static ValidateAddressDetails() {
    return Joi.object({
      address: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      area: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      email: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeParentsResult} */
  static PincodeParentsResult() {
    return Joi.object({
      sub_type: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeMetaResult} */
  static PincodeMetaResult() {
    return Joi.object({
      zone: Joi.string().allow(""),
      internal_zone_id: Joi.number(),
    });
  }

  /** @returns {PincodeErrorSchemaResult} */
  static PincodeErrorSchemaResult() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CountryMetaResult} */
  static CountryMetaResult() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      isd_code: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeLatLongData} */
  static PincodeLatLongData() {
    return Joi.object({
      type: Joi.string().allow(""),
      coordinates: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PincodeDataResult} */
  static PincodeDataResult() {
    return Joi.object({
      parents: Joi.array().items(
        LogisticApplicationModel.PincodeParentsResult()
      ),
      meta: LogisticApplicationModel.PincodeMetaResult(),
      display_name: Joi.string().allow(""),
      error: LogisticApplicationModel.PincodeErrorSchemaResult().required(),
      meta_code: LogisticApplicationModel.CountryMetaResult(),
      lat_long: LogisticApplicationModel.PincodeLatLongData(),
      sub_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeDetails} */
  static PincodeDetails() {
    return Joi.object({
      success: Joi.boolean().required(),
      data: Joi.array().items(LogisticApplicationModel.PincodeDataResult()),
      error: LogisticApplicationModel.PincodeErrorSchemaResult().required(),
    });
  }

  /** @returns {TATCategoryDetails} */
  static TATCategoryDetails() {
    return Joi.object({
      level: Joi.string().allow(""),
      id: Joi.number(),
    });
  }

  /** @returns {TATArticlesDetails} */
  static TATArticlesDetails() {
    return Joi.object({
      category: LogisticApplicationModel.TATCategoryDetails(),
      manufacturing_time_unit: Joi.string().allow(""),
      manufacturing_time: Joi.number(),
    });
  }

  /** @returns {TATLocationDetailsDetails} */
  static TATLocationDetailsDetails() {
    return Joi.object({
      fulfillment_id: Joi.number(),
      from_pincode: Joi.string().allow(""),
      articles: Joi.array().items(
        LogisticApplicationModel.TATArticlesDetails()
      ),
    });
  }

  /** @returns {TATViewDetails} */
  static TATViewDetails() {
    return Joi.object({
      to_pincode: Joi.string().allow(""),
      source: Joi.string().allow(""),
      action: Joi.string().allow(""),
      identifier: Joi.string().allow(""),
      location_details: Joi.array().items(
        LogisticApplicationModel.TATLocationDetailsDetails()
      ),
      journey: Joi.string().allow(""),
    });
  }

  /** @returns {TATErrorSchemaResult} */
  static TATErrorSchemaResult() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {TATTimestampResult} */
  static TATTimestampResult() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {TATFormattedResult} */
  static TATFormattedResult() {
    return Joi.object({
      min: Joi.string().allow(""),
      max: Joi.string().allow(""),
    });
  }

  /** @returns {TATPromiseResult} */
  static TATPromiseResult() {
    return Joi.object({
      timestamp: LogisticApplicationModel.TATTimestampResult(),
      formatted: LogisticApplicationModel.TATFormattedResult(),
    });
  }

  /** @returns {TATArticlesResult} */
  static TATArticlesResult() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),
      error: LogisticApplicationModel.TATErrorSchemaResult(),
      is_cod_available: Joi.boolean(),
      promise: LogisticApplicationModel.TATPromiseResult(),
      manufacturing_time: Joi.number(),
      category: LogisticApplicationModel.TATCategoryDetails(),
      _manufacturing_time_seconds: Joi.number(),
    });
  }

  /** @returns {TATLocationDetailsResult} */
  static TATLocationDetailsResult() {
    return Joi.object({
      fulfillment_id: Joi.number(),
      from_pincode: Joi.string().allow(""),
      articles: Joi.array().items(LogisticApplicationModel.TATArticlesResult()),
    });
  }

  /** @returns {TATViewResult} */
  static TATViewResult() {
    return Joi.object({
      to_pincode: Joi.string().allow(""),
      request_uuid: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
      success: Joi.boolean(),
      error: LogisticApplicationModel.TATErrorSchemaResult(),
      is_cod_available: Joi.boolean(),
      source: Joi.string().allow(""),
      action: Joi.string().allow(""),
      stormbreaker_uuid: Joi.string().allow(""),
      to_city: Joi.string().allow(""),
      identifier: Joi.string().allow(""),
      location_details: Joi.array().items(
        LogisticApplicationModel.TATLocationDetailsResult()
      ),
      journey: Joi.string().allow(""),
    });
  }

  /** @returns {DP} */
  static DP() {
    return Joi.object({
      fm_priority: Joi.number().required(),
      lm_priority: Joi.number().required(),
      rvp_priority: Joi.number().required(),
      payment_mode: Joi.string().allow("").required(),
      operations: Joi.array().items(Joi.string().allow("")).required(),
      area_code: Joi.string().allow("").allow(null),
      assign_dp_from_sb: Joi.boolean(),
      internal_account_id: Joi.string().allow(""),
      external_account_id: Joi.string().allow("").allow(null),
      transport_mode: Joi.string().allow(""),
    });
  }

  /** @returns {LogisticsResult} */
  static LogisticsResult() {
    return Joi.object({
      dp: LogisticApplicationModel.DP(),
    });
  }

  /** @returns {CountryEntityResult} */
  static CountryEntityResult() {
    return Joi.object({
      meta: LogisticApplicationModel.CountryMetaResult(),
      logistics: LogisticApplicationModel.LogisticsResult(),
      display_name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      is_active: Joi.boolean(),
      parent_id: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {CountryListResult} */
  static CountryListResult() {
    return Joi.object({
      results: Joi.array().items(
        LogisticApplicationModel.CountryEntityResult()
      ),
    });
  }

  /** @returns {GetZoneFromPincodeViewDetails} */
  static GetZoneFromPincodeViewDetails() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetZoneFromPincodeViewResult} */
  static GetZoneFromPincodeViewResult() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),
      zones: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {ReAssignStoreDetails} */
  static ReAssignStoreDetails() {
    return Joi.object({
      configuration: Joi.object().pattern(/\S/, Joi.any()).required(),
      to_pincode: Joi.string().allow("").required(),
      ignored_locations: Joi.array().items(Joi.number()).required(),
      identifier: Joi.string().allow("").required(),
      articles: Joi.array()
        .items(Joi.object().pattern(/\S/, Joi.any()))
        .required(),
    });
  }

  /** @returns {ReAssignStoreResult} */
  static ReAssignStoreResult() {
    return Joi.object({
      to_pincode: Joi.string().allow("").required(),
      pystormbreaker_uuid: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      error: Joi.object().pattern(/\S/, Joi.any()).required(),
      assigned_stores: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
    });
  }

  /** @returns {CountryHierarchy} */
  static CountryHierarchy() {
    return Joi.object({
      name: Joi.string().allow(""),
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

  /** @returns {CountryObject} */
  static CountryObject() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      timezones: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      hierarchy: Joi.array().items(LogisticApplicationModel.CountryHierarchy()),
      phone_code: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
      currency: LogisticApplicationModel.CurrencyObject(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {GetCountries} */
  static GetCountries() {
    return Joi.object({
      items: Joi.array().items(LogisticApplicationModel.CountryObject()),
      page: LogisticApplicationModel.Page(),
    });
  }

  /** @returns {GetOneOrAllPath} */
  static GetOneOrAllPath() {
    return Joi.object({
      locality_type: Joi.string().allow(""),
      locality_value: Joi.string().allow(""),
    });
  }

  /** @returns {GetOneOrAllQuery} */
  static GetOneOrAllQuery() {
    return Joi.object({
      country: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").allow(null),
      sector: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GetOneOrAllParams} */
  static GetOneOrAllParams() {
    return Joi.object({
      path: LogisticApplicationModel.GetOneOrAllPath(),
      query: LogisticApplicationModel.GetOneOrAllQuery(),
    });
  }

  /** @returns {GetOneOrAll} */
  static GetOneOrAll() {
    return Joi.object({
      operation_id: Joi.string().allow(""),
      params: LogisticApplicationModel.GetOneOrAllParams(),
    }).allow(null);
  }

  /** @returns {LengthValidation} */
  static LengthValidation() {
    return Joi.object({
      min: Joi.number().allow(null),
      max: Joi.number().allow(null),
    });
  }

  /** @returns {FieldValidationRegex} */
  static FieldValidationRegex() {
    return Joi.object({
      value: Joi.string().allow(""),
      length: LogisticApplicationModel.LengthValidation(),
    });
  }

  /** @returns {FieldValidation} */
  static FieldValidation() {
    return Joi.object({
      type: Joi.string().allow(""),
      regex: LogisticApplicationModel.FieldValidationRegex(),
    }).allow(null);
  }

  /** @returns {GetCountryFieldsAddressValues} */
  static GetCountryFieldsAddressValues() {
    return Joi.object({
      get_one: LogisticApplicationModel.GetOneOrAll(),
      get_all: LogisticApplicationModel.GetOneOrAll(),
    }).allow(null);
  }

  /** @returns {GetCountryFieldsAddress} */
  static GetCountryFieldsAddress() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      required: Joi.boolean().required(),
      edit: Joi.boolean(),
      input: Joi.string().allow("").required(),
      validation: LogisticApplicationModel.FieldValidation(),
      values: LogisticApplicationModel.GetCountryFieldsAddressValues(),
      error_text: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GetCountryFieldsAddressTemplate} */
  static GetCountryFieldsAddressTemplate() {
    return Joi.object({
      checkout_form: Joi.string().allow("").required(),
      store_os_form: Joi.string().allow("").required(),
      default_display: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetCountryFields} */
  static GetCountryFields() {
    return Joi.object({
      address: Joi.array()
        .items(LogisticApplicationModel.GetCountryFieldsAddress())
        .required(),
      serviceability_fields: Joi.array()
        .items(Joi.string().allow(""))
        .required(),
      address_template: LogisticApplicationModel.GetCountryFieldsAddressTemplate().required(),
    });
  }

  /** @returns {GetCountry} */
  static GetCountry() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      timezones: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      hierarchy: Joi.array().items(LogisticApplicationModel.CountryHierarchy()),
      phone_code: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
      currency: LogisticApplicationModel.CurrencyObject(),
      type: Joi.string().allow(""),
      fields: LogisticApplicationModel.GetCountryFields(),
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

  /** @returns {Localities} */
  static Localities() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      custom_meta: Joi.object().pattern(/\S/, Joi.any()),
      display_name: Joi.string().allow(""),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      localities: Joi.array().items(LogisticApplicationModel.LocalityParent()),
    });
  }

  /** @returns {LocalityParent} */
  static LocalityParent() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      code: Joi.string().allow(""),
      custom_meta: Joi.object().pattern(/\S/, Joi.any()),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {GetLocalities} */
  static GetLocalities() {
    return Joi.object({
      items: Joi.array().items(LogisticApplicationModel.Localities()),
      page: LogisticApplicationModel.Page(),
    });
  }

  /** @returns {GetLocality} */
  static GetLocality() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      code: Joi.string().allow(""),
      custom_meta: Joi.object().pattern(/\S/, Joi.any()),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      localities: Joi.array().items(LogisticApplicationModel.LocalityParent()),
    });
  }

  /** @returns {ShipmentsArticles} */
  static ShipmentsArticles() {
    return Joi.object({
      item_id: Joi.number(),
      category_id: Joi.number(),
      brand_id: Joi.number(),
      department_id: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ShipmentDimension} */
  static ShipmentDimension() {
    return Joi.object({
      height: Joi.number().required(),
      length: Joi.number().required(),
      width: Joi.number().required(),
    });
  }

  /** @returns {Shipments} */
  static Shipments() {
    return Joi.object({
      id: Joi.string().allow(""),
      location_id: Joi.number(),
      location_tags: Joi.array().items(Joi.string().allow("")),
      shipment_weight: Joi.number(),
      shipment_volumetric_weight: Joi.number(),
      shipment_cost: Joi.number(),
      shipment_dimension: LogisticApplicationModel.ShipmentDimension(),
      courier_partner_schemes: Joi.array().items(Joi.string().allow("")),
      articles: Joi.array().items(LogisticApplicationModel.ShipmentsArticles()),
    });
  }

  /** @returns {ShipmentCourierPartnerDetails} */
  static ShipmentCourierPartnerDetails() {
    return Joi.object({
      from_location: LogisticApplicationModel.ShipmentsCourierPartnersServiceability().required(),
      to_location: LogisticApplicationModel.ShipmentsCourierPartnersServiceability().required(),
      shipments: Joi.array().items(LogisticApplicationModel.Shipments()),
      journey: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
    });
  }

  /** @returns {CourierPartnerPromise} */
  static CourierPartnerPromise() {
    return Joi.object({
      min: Joi.string().allow("").required(),
      max: Joi.string().allow("").required(),
    });
  }

  /** @returns {CourierPartners} */
  static CourierPartners() {
    return Joi.object({
      extension_id: Joi.string().allow(""),
      scheme_id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      delivery_promise: LogisticApplicationModel.CourierPartnerPromise(),
    });
  }

  /** @returns {ShipmentCourierPartners} */
  static ShipmentCourierPartners() {
    return Joi.object({
      id: Joi.string().allow(""),
      courier_partners: Joi.array().items(
        LogisticApplicationModel.CourierPartners()
      ),
    });
  }

  /** @returns {ShipmentCourierPartnerResult} */
  static ShipmentCourierPartnerResult() {
    return Joi.object({
      courier_partners: Joi.array().items(
        LogisticApplicationModel.CourierPartners()
      ),
      shipments: Joi.array().items(
        LogisticApplicationModel.ShipmentCourierPartners()
      ),
    });
  }

  /** @returns {ShipmentsCourierPartnersServiceability} */
  static ShipmentsCourierPartnersServiceability() {
    return Joi.object({
      pincode: Joi.string().allow(""),
      sector_code: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      city_code: Joi.string().allow(""),
      country_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {ServiceabilityLocation} */
  static ServiceabilityLocation() {
    return Joi.object({
      longitude: Joi.string().allow("").required(),
      latitude: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetPromiseDetails} */
  static GetPromiseDetails() {
    return Joi.object({
      items: Joi.array().items(LogisticApplicationModel.StorePromise()),
      delivery_promise: LogisticApplicationModel.Promise(),
      page: LogisticApplicationModel.Page(),
    });
  }

  /** @returns {StorePromise} */
  static StorePromise() {
    return Joi.object({
      uid: Joi.number(),
      code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      delivery_promise: LogisticApplicationModel.Promise(),
    });
  }

  /** @returns {Promise} */
  static Promise() {
    return Joi.object({
      min: Joi.string().allow(""),
      max: Joi.string().allow(""),
    });
  }

  /** @returns {ErrorResult} */
  static ErrorResult() {
    return Joi.object({
      error: Joi.string().allow(""),
      message: Joi.string().allow(""),
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
module.exports = LogisticApplicationModel;
