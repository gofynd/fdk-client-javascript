export = LogisticApplicationModel;
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
declare class LogisticApplicationModel {
}
declare namespace LogisticApplicationModel {
    export { GetStoreResult, StoreItemResult, ValidateAddressDetails, PincodeParentsResult, PincodeMetaResult, PincodeErrorSchemaResult, CountryMetaResult, PincodeLatLongData, PincodeDataResult, PincodeDetails, TATCategoryDetails, TATArticlesDetails, TATLocationDetailsDetails, TATViewDetails, TATErrorSchemaResult, TATTimestampResult, TATFormattedResult, TATPromiseResult, TATArticlesResult, TATLocationDetailsResult, TATViewResult, DP, LogisticsResult, CountryEntityResult, CountryListResult, GetZoneFromPincodeViewDetails, GetZoneFromPincodeViewResult, ReAssignStoreDetails, ReAssignStoreResult, CountryHierarchy, CurrencyObject, CountryObject, GetCountries, GetOneOrAllPath, GetOneOrAllQuery, GetOneOrAllParams, GetOneOrAll, LengthValidation, FieldValidationRegex, FieldValidation, GetCountryFieldsAddressValues, GetCountryFieldsAddress, GetCountryFieldsAddressTemplate, GetCountryFields, GetCountry, Page, Localities, LocalityParent, GetLocalities, GetLocality, ShipmentsArticles, ShipmentDimension, Shipments, ShipmentCourierPartnerDetails, CourierPartnerPromise, CourierPartners, ShipmentCourierPartners, ShipmentCourierPartnerResult, ShipmentsCourierPartnersServiceability, ServiceabilityLocation, GetPromiseDetails, StorePromise, Promise, ErrorResult, ValidationError, StandardError };
}
/** @returns {GetStoreResult} */
declare function GetStoreResult(): GetStoreResult;
type GetStoreResult = {
    /**
     * - List of locations, each containing
     * detailed information about individual location.
     */
    items?: StoreItemResult[];
    page?: Page;
};
/** @returns {StoreItemResult} */
declare function StoreItemResult(): StoreItemResult;
type StoreItemResult = {
    /**
     * - A unique identifier for the location.
     */
    id?: number;
    /**
     * - The type of store, indicating the nature of
     * the store, such as retail or warehouse.
     */
    store_type?: string;
    /**
     * - The method of fulfillment used by the
     * store, such as shipping, pickup, or delivery.
     */
    fulfillment_type?: string;
    /**
     * - The average time taken by the store to
     * process orders, measured in minutes.
     */
    processing_time?: number;
    /**
     * - List of tags associated with the store for
     * categorization and search purposes.
     */
    tags?: string[];
    /**
     * - The unique identifier of the company that
     * owns the store.
     */
    company_id?: number;
    /**
     * - The geographical latitude coordinate of the
     * store location.
     */
    latitude?: number;
    /**
     * - The geographical longitude coordinate of the
     * store location.
     */
    longitude?: number;
};
/** @returns {ValidateAddressDetails} */
declare function ValidateAddressDetails(): ValidateAddressDetails;
type ValidateAddressDetails = {
    /**
     * - Complete address, combining address line 1,
     * address line 2, area, landmark, sector, city, state, and pincode.
     */
    address?: string;
    /**
     * - First line of the address, typically
     * containing street or building information.
     */
    address1?: string;
    /**
     * - Second line of the address, which can be used
     * for additional address details if needed.
     */
    address2?: string;
    /**
     * - Locality or area associated with the address.
     */
    area?: string;
    /**
     * - Prominent nearby landmark that aids in
     * locating the address.
     */
    landmark?: string;
    /**
     * - Postal code or PIN code of the address area.
     */
    pincode?: string;
    /**
     * - Specifies the sector or district of the address
     * if applicable.
     */
    sector?: string;
    /**
     * - Denote the city or municipality of the address.
     */
    city?: string;
    /**
     * - Indicates the state or province of the address.
     */
    state?: string;
    /**
     * - Recipient's name associated with the address.
     */
    name?: string;
    /**
     * - Recipient's contact phone number.
     */
    phone?: string;
    /**
     * - Recipient's email address.
     */
    email?: string;
};
/** @returns {PincodeParentsResult} */
declare function PincodeParentsResult(): PincodeParentsResult;
type PincodeParentsResult = {
    /**
     * - Specific type of locality hierarchy the
     * pincode belongs to (e.g., city, state, country).
     */
    sub_type?: string;
    /**
     * - User-friendly version of the geographical
     * data, which may be more descriptive or formatted differently.
     */
    display_name?: string;
    /**
     * - The actual geographical data, such as country
     * names (India), state names (Maharashtra), pin codes (400603), city names
     * (Dubai), or local sectors (Deira).
     */
    name?: string;
    /**
     * - Unique identifier for the locality.
     */
    uid?: string;
};
/** @returns {PincodeMetaResult} */
declare function PincodeMetaResult(): PincodeMetaResult;
type PincodeMetaResult = {
    /**
     * - Geographical region to which the pincode belongs,
     * often used to categorize or group pincodes for regional management or
     * postal purposes.
     */
    zone?: string;
    /**
     * - A unique identifier used within the
     * system to track or reference the specific zone associated with the pincode.
     */
    internal_zone_id?: number;
};
/** @returns {PincodeErrorSchemaResult} */
declare function PincodeErrorSchemaResult(): PincodeErrorSchemaResult;
type PincodeErrorSchemaResult = {
    /**
     * - A user-readable description of the error,
     * explaining what went wrong.
     */
    message?: string;
    /**
     * - A specific code or identifier related to the
     * error, used for referencing or categorizing the error.
     */
    value?: string;
    /**
     * - The classification of the error, indicating the
     * kind of issue.
     */
    type?: string;
};
/** @returns {CountryMetaResult} */
declare function CountryMetaResult(): CountryMetaResult;
type CountryMetaResult = {
    /**
     * - The ISO 3166-1 alpha-2 code representing
     * the country (e.g., "IN" for India, "US" for the United States).
     */
    country_code?: string;
    /**
     * - The International Subscriber Dialing (ISD)
     * code, also known as the country dialing code, used for making international
     * phone calls to the country (e.g., "+91" for India, "+1" for the United States).
     */
    isd_code?: string;
};
/** @returns {PincodeLatLongData} */
declare function PincodeLatLongData(): PincodeLatLongData;
type PincodeLatLongData = {
    /**
     * - Specifies the type of geographical feature or
     * data, typically "Point" for coordinates in geographic data systems.
     */
    type?: string;
    /**
     * - Contains the latitude and longitude
     * values representing the precise location. The format is usually an array
     * with two values: [longitude, latitude].
     */
    coordinates?: string[];
};
/** @returns {PincodeDataResult} */
declare function PincodeDataResult(): PincodeDataResult;
type PincodeDataResult = {
    /**
     * - List of object representing a
     * collection of geographical locations, each associated with specific
     * hierarchical data such as cities, states, or countries.
     */
    parents?: PincodeParentsResult[];
    meta?: PincodeMetaResult;
    /**
     * - User-friendly version of the geographical
     * data, which may be more descriptive or formatted differently.
     */
    display_name?: string;
    error: PincodeErrorSchemaResult;
    meta_code?: CountryMetaResult;
    lat_long?: PincodeLatLongData;
    /**
     * - Indicates the specific type of locality
     * hierarchy the pincode belongs to (e.g., city, state, country).
     */
    sub_type?: string;
    /**
     * - The actual geographical data, such as country
     * names (India), state names (Maharashtra), pin codes (400603), city names
     * (Dubai), or local sectors (Deira).
     */
    name?: string;
    /**
     * - This field stands for "Unique Identifier," a
     * unique value assigned to each instance to ensure differentiation and reference.
     */
    uid?: string;
};
/** @returns {PincodeDetails} */
declare function PincodeDetails(): PincodeDetails;
type PincodeDetails = {
    /**
     * - Indicates whether the API request was
     * successful (true) or failed (false).
     */
    success: boolean;
    /**
     * - Contains the actual response data
     * when the request is successful, providing details like pincode information
     * or related data.
     */
    data?: PincodeDataResult[];
    error: PincodeErrorSchemaResult;
};
/** @returns {TATCategoryDetails} */
declare function TATCategoryDetails(): TATCategoryDetails;
type TATCategoryDetails = {
    /**
     * - Specifies the hierarchical level of the category
     * (e.g., country, state, city).
     */
    level?: string;
    /**
     * - Represents the unique identifier for the category
     * at the specified level.
     */
    id?: number;
};
/** @returns {TATArticlesDetails} */
declare function TATArticlesDetails(): TATArticlesDetails;
type TATArticlesDetails = {
    category?: TATCategoryDetails;
    /**
     * - The unit of measurement for
     * the manufacturing time, such as hours or days.
     */
    manufacturing_time_unit?: string;
    /**
     * - The amount of time required to
     * manufacture the article, specified in the unit given by `manufacturing_time_unit`.
     */
    manufacturing_time?: number;
};
/** @returns {TATLocationDetailsDetails} */
declare function TATLocationDetailsDetails(): TATLocationDetailsDetails;
type TATLocationDetailsDetails = {
    /**
     * - A unique identifier of the fulfilling location.
     */
    fulfillment_id?: number;
    /**
     * - The postal code of the location from
     * which the fulfillment originates.
     */
    from_pincode?: string;
    /**
     * - List of articles included in
     * the fulfillment request, which provides details about the items to be
     * processed or shipped.
     */
    articles?: TATArticlesDetails[];
};
/** @returns {TATViewDetails} */
declare function TATViewDetails(): TATViewDetails;
type TATViewDetails = {
    /**
     * - The postal code of the destination location
     * where the fulfillment or shipment is headed.
     */
    to_pincode?: string;
    /**
     * - The origin or source of the request, indicating
     * where the data or action is coming from.
     */
    source?: string;
    /**
     * - The specific operation or request being made,
     * such as viewing, updating, or managing data.
     */
    action?: string;
    /**
     * - A unique ID used to reference or track the
     * specific request or item within the system.
     */
    identifier?: string;
    /**
     * - Locations
     * involved in the request, including details about both the source and destination.
     */
    location_details?: TATLocationDetailsDetails[];
    /**
     * - Indicates the direction of the request or
     * shipment. It can either be "forward" (from the source to the destination)
     * or "return" (from the destination back to the source).
     */
    journey?: string;
};
/** @returns {TATErrorSchemaResult} */
declare function TATErrorSchemaResult(): TATErrorSchemaResult;
type TATErrorSchemaResult = {
    /**
     * - A user-readable description of the error,
     * explaining what went wrong.
     */
    message?: string;
    /**
     * - A specific code or identifier related to the
     * error, used for referencing or categorizing the error.
     */
    value?: string;
    /**
     * - The classification of the error, indicating the
     * kind of issue.
     */
    type?: string;
};
/** @returns {TATTimestampResult} */
declare function TATTimestampResult(): TATTimestampResult;
type TATTimestampResult = {
    /**
     * - The earliest possible timestamp.
     */
    min?: number;
    /**
     * - The latest possible timestamp.
     */
    max?: number;
};
/** @returns {TATFormattedResult} */
declare function TATFormattedResult(): TATFormattedResult;
type TATFormattedResult = {
    /**
     * - The earliest possible timestamp.
     */
    min?: string;
    /**
     * - The latest possible timestamp.
     */
    max?: string;
};
/** @returns {TATPromiseResult} */
declare function TATPromiseResult(): TATPromiseResult;
type TATPromiseResult = {
    timestamp?: TATTimestampResult;
    formatted?: TATFormattedResult;
};
/** @returns {TATArticlesResult} */
declare function TATArticlesResult(): TATArticlesResult;
type TATArticlesResult = {
    /**
     * - The unit of measurement for
     * the manufacturing time such as hours or days.
     */
    manufacturing_time_unit?: string;
    error?: TATErrorSchemaResult;
    /**
     * - Indicates whether Cash on Delivery
     * (COD) is available for the articles.
     */
    is_cod_available?: boolean;
    promise?: TATPromiseResult;
    /**
     * - The time required to manufacture
     * the articles, measured in the unit specified by manufacturing_time_unit.
     */
    manufacturing_time?: number;
    category?: TATCategoryDetails;
    /**
     * - The manufacturing time
     * converted into seconds.
     */
    _manufacturing_time_seconds?: number;
};
/** @returns {TATLocationDetailsResult} */
declare function TATLocationDetailsResult(): TATLocationDetailsResult;
type TATLocationDetailsResult = {
    /**
     * - A unique identifier of the fulfilling location.
     */
    fulfillment_id?: number;
    /**
     * - The postal code of the location from
     * which the fulfillment originates.
     */
    from_pincode?: string;
    /**
     * - List of articles included in the
     * fulfillment request, which provides details about the items to be processed
     * or shipped.
     */
    articles?: TATArticlesResult[];
};
/** @returns {TATViewResult} */
declare function TATViewResult(): TATViewResult;
type TATViewResult = {
    /**
     * - The postal code of the destination location
     * where the fulfillment or shipment is headed.
     */
    to_pincode?: string;
    /**
     * - A unique identifier for the request.
     */
    request_uuid?: string;
    /**
     * - The mode of payment used for the transaction.
     */
    payment_mode?: string;
    /**
     * - Whether the request was successful (true/false).
     */
    success?: boolean;
    error?: TATErrorSchemaResult;
    /**
     * - Whether Cash on Delivery (COD) is
     * available for the request.
     */
    is_cod_available?: boolean;
    /**
     * - The origin or source of the request.
     */
    source?: string;
    /**
     * - The action performed or requested (e.g.,
     * forward, return).
     */
    action?: string;
    /**
     * - A unique identifier related to the
     * stormbreaker process.
     */
    stormbreaker_uuid?: string;
    /**
     * - The city corresponding to the destination pincode.
     */
    to_city?: string;
    /**
     * - A unique identifier for the request or transaction.
     */
    identifier?: string;
    /**
     * - Location involved
     * in the request.
     */
    location_details?: TATLocationDetailsResult[];
    /**
     * - Type of journey, either forward or return.
     */
    journey?: string;
};
/** @returns {DP} */
declare function DP(): DP;
type DP = {
    /**
     * - First Mile Priority; focuses on the initial
     * segment of the logistics process, from the point of origin to the first
     * distribution center.
     */
    fm_priority: number;
    /**
     * - Last Mile Priority; deals with the final
     * stage of the delivery process, where goods are delivered from the
     * distribution center to the final destination.
     */
    lm_priority: number;
    /**
     * - Reverse Pickup Priority; pertains to the
     * process of collecting goods from the customer for return or exchange.
     */
    rvp_priority: number;
    /**
     * - The method of payment used for
     * transactions, such as credit card, debit card, cash on delivery, etc.
     */
    payment_mode: string;
    /**
     * - Refers to the various activities and
     * processes involved in managing and executing the delivery and logistics operations.
     */
    operations: string[];
    /**
     * - A code that identifies a specific geographic
     * area, often used for sorting and routing deliveries.
     */
    area_code?: string;
    /**
     * - Indicates whether the delivery
     * partner (DP) is assigned from stormbreaker service.
     */
    assign_dp_from_sb?: boolean;
    /**
     * - An identifier used internally to
     * track accounts or entities within the organization's system.
     */
    internal_account_id?: string;
    /**
     * - An identifier used to reference
     * accounts or entities outside the organization's system, such as partner accounts.
     */
    external_account_id?: string;
    /**
     * - The method of transportation used for
     * delivering goods, such as road, rail, air, or sea.
     */
    transport_mode?: string;
};
/** @returns {LogisticsResult} */
declare function LogisticsResult(): LogisticsResult;
type LogisticsResult = {
    dp?: DP;
};
/** @returns {CountryEntityResult} */
declare function CountryEntityResult(): CountryEntityResult;
type CountryEntityResult = {
    meta?: CountryMetaResult;
    logistics?: LogisticsResult;
    /**
     * - User-friendly version of the geographical
     * data, which may be more descriptive or formatted differently.
     */
    display_name?: string;
    /**
     * - Specifies the type of geographical feature or
     * data, typically "Point" for coordinates in geographic data systems.
     */
    type?: string;
    /**
     * - Whether the country entity is currently
     * active or not.
     */
    is_active?: boolean;
    /**
     * - Identifier for the parent of the current locality.
     */
    parent_id?: string;
    /**
     * - Specific type of locality hierarchy the
     * pincode belongs to (e.g., city, state, country).
     */
    sub_type?: string;
    /**
     * - Country name.
     */
    name?: string;
    /**
     * - Unique identifier for the country.
     */
    uid?: string;
};
/** @returns {CountryListResult} */
declare function CountryListResult(): CountryListResult;
type CountryListResult = {
    /**
     * - A list of country entities,
     * each containing details about individual countries.
     */
    results?: CountryEntityResult[];
};
/** @returns {GetZoneFromPincodeViewDetails} */
declare function GetZoneFromPincodeViewDetails(): GetZoneFromPincodeViewDetails;
type GetZoneFromPincodeViewDetails = {
    /**
     * - The postal code or ZIP code used to pinpoint a
     * specific geographic area or location.
     */
    pincode: string;
    /**
     * - The country where the pincode is located.
     */
    country: string;
};
/** @returns {GetZoneFromPincodeViewResult} */
declare function GetZoneFromPincodeViewResult(): GetZoneFromPincodeViewResult;
type GetZoneFromPincodeViewResult = {
    /**
     * - Specifies the type of serviceability
     * for the given pincode, indicating whether it's deliverable or serviceable
     * under certain conditions.
     */
    serviceability_type: string;
    /**
     * - Lists the zones associated with the pincode,
     * detailing the geographical or logistical zones for service.
     */
    zones: string[];
};
/** @returns {ReAssignStoreDetails} */
declare function ReAssignStoreDetails(): ReAssignStoreDetails;
type ReAssignStoreDetails = {
    /**
     * - Specifies the configuration settings or
     * parameters for the store reassignment.
     */
    configuration: any;
    /**
     * - The postal code of the destination location
     * where the fulfillment or shipment is headed.
     */
    to_pincode: string;
    /**
     * - Locations that should be excluded
     * from the reassignment process.
     */
    ignored_locations: number[];
    /**
     * - A unique identifier for the reassignment request.
     */
    identifier: string;
    /**
     * - List of articles or items involved in the
     * store reassignment.
     */
    articles: any[];
};
/** @returns {ReAssignStoreResult} */
declare function ReAssignStoreResult(): ReAssignStoreResult;
type ReAssignStoreResult = {
    /**
     * - The postal code of the destination location
     * where the fulfillment or shipment is headed.
     */
    to_pincode: string;
    /**
     * - A unique identifier for tracking the
     * reassignment operation.
     */
    pystormbreaker_uuid: string;
    /**
     * - Whether the reassignment was successful or not.
     */
    success: boolean;
    /**
     * - Details about any errors encountered during the
     * reassignment.
     */
    error: any;
    /**
     * - List of stores that have been
     * successfully reassigned.
     */
    assigned_stores?: any[];
};
/** @returns {CountryHierarchy} */
declare function CountryHierarchy(): CountryHierarchy;
type CountryHierarchy = {
    /**
     * - It represent a country name.
     */
    name?: string;
    /**
     * - A URL-friendly version of the name, often used
     * for referencing or querying purposes.
     */
    slug?: string;
};
/** @returns {CurrencyObject} */
declare function CurrencyObject(): CurrencyObject;
type CurrencyObject = {
    /**
     * - The currency code, typically a three-letter ISO
     * code (e.g., "USD" for US Dollar).
     */
    code?: string;
    /**
     * - It represent a country name.
     */
    name?: string;
    /**
     * - The symbol used to represent the currency
     * (e.g., "$" for US Dollar).
     */
    symbol?: string;
};
/** @returns {CountryObject} */
declare function CountryObject(): CountryObject;
type CountryObject = {
    /**
     * - Unique identifier for the country.
     */
    id?: string;
    /**
     * - It represent a country name.
     */
    name?: string;
    /**
     * - User-friendly version of the geographical
     * data, which may be more descriptive or formatted differently.
     */
    display_name?: string;
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
    hierarchy?: CountryHierarchy[];
    /**
     * - International dialing code for the country
     * (e.g., "+1").
     */
    phone_code?: string;
    /**
     * - Geographical latitude of the country (e.g., "37.0902").
     */
    latitude?: string;
    /**
     * - Geographical longitude of the country (e.g.,
     * "-95.7129").
     */
    longitude?: string;
    currency?: CurrencyObject;
    /**
     * - Indicates the type of object (e.g., "country").
     */
    type?: string;
};
/** @returns {GetCountries} */
declare function GetCountries(): GetCountries;
type GetCountries = {
    /**
     * - List of countries, each containing
     * detailed information about individual country.
     */
    items?: CountryObject[];
    page?: Page;
};
/** @returns {GetOneOrAllPath} */
declare function GetOneOrAllPath(): GetOneOrAllPath;
type GetOneOrAllPath = {
    /**
     * - Specifies the type of locality to be
     * retrieved, such as city, state, or pincode (e.g., "city", "state", "pincode").
     */
    locality_type?: string;
    /**
     * - The specific value of the locality
     * being queried, such as the name of the city or the pincode (e.g., "Mumbai",
     * "400093").
     */
    locality_value?: string;
};
/** @returns {GetOneOrAllQuery} */
declare function GetOneOrAllQuery(): GetOneOrAllQuery;
type GetOneOrAllQuery = {
    /**
     * - The name of the country to filter the results.
     */
    country?: string;
    /**
     * - The name of the state within the specified country.
     */
    state?: string;
    /**
     * - The name of the city within the specified state.
     */
    city?: string;
    /**
     * - The name of the sector or area within the specified city.
     */
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
    /**
     * - Identifier for the specific operation or
     * query being performed.
     */
    operation_id?: string;
    params?: GetOneOrAllParams;
};
/** @returns {LengthValidation} */
declare function LengthValidation(): LengthValidation;
type LengthValidation = {
    /**
     * - The minimum number of characters or digits allowed.
     */
    min?: number;
    /**
     * - The maximum number of characters or digits allowed.
     */
    max?: number;
};
/** @returns {FieldValidationRegex} */
declare function FieldValidationRegex(): FieldValidationRegex;
type FieldValidationRegex = {
    /**
     * - Regular expression pattern used to validate the field.
     */
    value?: string;
    length?: LengthValidation;
};
/** @returns {FieldValidation} */
declare function FieldValidation(): FieldValidation;
type FieldValidation = {
    /**
     * - Specifies the validation method, such as regex
     * for regular expression validation.
     */
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
    /**
     * - User-friendly version of the geographical
     * data, which may be more descriptive or formatted differently.
     */
    display_name: string;
    /**
     * - URL-friendly version of the name, often used for
     * referencing or querying purposes.
     */
    slug: string;
    /**
     * - Indicates whether the field is mandatory for
     * the user to fill out.
     */
    required: boolean;
    /**
     * - Specifies if the field can be edited by the user.
     */
    edit?: boolean;
    /**
     * - Defines the type of input control used for the
     * field (e.g., textbox).
     */
    input: string;
    validation?: FieldValidation;
    values?: GetCountryFieldsAddressValues;
    /**
     * - The message shown to the user if the input
     * does not meet the validation criteria.
     */
    error_text?: string;
};
/** @returns {GetCountryFieldsAddressTemplate} */
declare function GetCountryFieldsAddressTemplate(): GetCountryFieldsAddressTemplate;
type GetCountryFieldsAddressTemplate = {
    /**
     * - The format used to display or collect
     * address information during checkout.
     */
    checkout_form: string;
    /**
     * - The format used for address entry or
     * display in the store's operating system.
     */
    store_os_form: string;
    /**
     * - The general format for displaying
     * address information.
     */
    default_display: string;
};
/** @returns {GetCountryFields} */
declare function GetCountryFields(): GetCountryFields;
type GetCountryFields = {
    /**
     * - Specifies the fields and
     * attributes related to address information, including display names, input
     * types, and validation rules. This section defines the details needed for
     * address collection and formatting.
     */
    address: GetCountryFieldsAddress[];
    /**
     * - Lists the specific address
     * fields used to determine whether a location is serviceable. These fields
     * are crucial for validating service coverage and availability.
     */
    serviceability_fields: string[];
    address_template: GetCountryFieldsAddressTemplate;
};
/** @returns {GetCountry} */
declare function GetCountry(): GetCountry;
type GetCountry = {
    /**
     * - Unique identifier for the country.
     */
    id?: string;
    /**
     * - It represent a country name.
     */
    name?: string;
    /**
     * - User-friendly version of the geographical
     * data, which may be more descriptive or formatted differently.
     */
    display_name?: string;
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
    hierarchy?: CountryHierarchy[];
    /**
     * - International dialing code for the country
     * (e.g., "+1").
     */
    phone_code?: string;
    /**
     * - Geographical latitude of the country (e.g., "37.0902").
     */
    latitude?: string;
    /**
     * - Geographical longitude of the country (e.g.,
     * "-95.7129").
     */
    longitude?: string;
    currency?: CurrencyObject;
    /**
     * - Indicates the type of object (e.g., "country").
     */
    type?: string;
    fields?: GetCountryFields;
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
/** @returns {Localities} */
declare function Localities(): Localities;
type Localities = {
    /**
     * - A unique identifier for the locality.
     */
    id?: string;
    /**
     * - The actual geographical data, such as country
     * names (India), state names (Maharashtra), pin codes (400603), city names
     * (Dubai), or local sectors (Deira).
     */
    name?: string;
    /**
     * - Custom meta to store custom json against hierarchy.
     */
    custom_meta?: any;
    /**
     * - User-friendly version of the geographical
     * data, which may be more descriptive or formatted differently.
     */
    display_name?: string;
    /**
     * - Identifiers for the parent of the current locality.
     */
    parent_ids?: string[];
    /**
     * - Specifies the category of the address component,
     * such as pincode, state, city, country, or sector.
     */
    type?: string;
    /**
     * - Representing the localities that
     * are associated with or contained within the current locality. It provides
     * detailed information about the parent localities, including their names,
     * identifiers, and hierarchical relationships.
     */
    localities?: LocalityParent[];
};
/** @returns {LocalityParent} */
declare function LocalityParent(): LocalityParent;
type LocalityParent = {
    /**
     * - A unique identifier for the locality.
     */
    id?: string;
    /**
     * - The actual geographical data, such as country
     * names (India), state names (Maharashtra), pin codes (400603), city names
     * (Dubai), or local sectors (Deira).
     */
    name?: string;
    /**
     * - User-friendly version of the geographical
     * data, which may be more descriptive or formatted differently.
     */
    display_name?: string;
    /**
     * - Code assigned to a locality, which is unique to
     * its immediate parent.
     */
    code?: string;
    /**
     * - Custom meta to store custom json against hierarchy.
     */
    custom_meta?: any;
    /**
     * - Identifiers for the parent of the current locality.
     */
    parent_ids?: string[];
    /**
     * - Specifies the category of the address component,
     * such as pincode, state, city, country, or sector.
     */
    type?: string;
};
/** @returns {GetLocalities} */
declare function GetLocalities(): GetLocalities;
type GetLocalities = {
    /**
     * - List of localities, each containing
     * detailed information about individual locality.
     */
    items?: Localities[];
    page?: Page;
};
/** @returns {GetLocality} */
declare function GetLocality(): GetLocality;
type GetLocality = {
    /**
     * - A unique identifier for the locality.
     */
    id?: string;
    /**
     * - The actual geographical data, such as country
     * names (India), state names (Maharashtra), pin codes (400603), city names
     * (Dubai), or local sectors (Deira).
     */
    name?: string;
    /**
     * - User-friendly version of the geographical
     * data, which may be more descriptive or formatted differently.
     */
    display_name?: string;
    /**
     * - Code assigned to a locality, which is unique to
     * its immediate parent.
     */
    code?: string;
    /**
     * - Custom meta to store custom json against hierarchy.
     */
    custom_meta?: any;
    /**
     * - Identifiers for the parent of the current locality.
     */
    parent_ids?: string[];
    /**
     * - Specifies the category of the address component,
     * such as pincode, state, city, country, or sector.
     */
    type?: string;
    /**
     * - Representing the localities that
     * are associated with or contained within the current locality. It provides
     * detailed information about the parent localities, including their names,
     * identifiers, and hierarchical relationships.
     */
    localities?: LocalityParent[];
};
/** @returns {ShipmentsArticles} */
declare function ShipmentsArticles(): ShipmentsArticles;
type ShipmentsArticles = {
    /**
     * - Unique identifier of the item.
     */
    item_id?: number;
    /**
     * - Unique identifier of the category.
     */
    category_id?: number;
    /**
     * - Unique identifier of the brand.
     */
    brand_id?: number;
    /**
     * - Unique identifier of the department.
     */
    department_id?: number;
    /**
     * - Tags associated with the item.
     */
    tags?: string[];
};
/** @returns {ShipmentDimension} */
declare function ShipmentDimension(): ShipmentDimension;
type ShipmentDimension = {
    /**
     * - Height of the shipment in centimeters.
     */
    height: number;
    /**
     * - Length of the shipment in centimeters.
     */
    length: number;
    /**
     * - Width of the shipment in centimeters.
     */
    width: number;
};
/** @returns {Shipments} */
declare function Shipments(): Shipments;
type Shipments = {
    /**
     * - Unique identifier of the shipment.
     */
    id?: string;
    /**
     * - Unique identifier of the selling location.
     */
    location_id?: number;
    /**
     * - Tags associated with the selling location.
     */
    location_tags?: string[];
    /**
     * - Weight of the shipment.
     */
    shipment_weight?: number;
    /**
     * - Volumetric weight of the shipment.
     */
    shipment_volumetric_weight?: number;
    /**
     * - Total Cost of the shipment.
     */
    shipment_cost?: number;
    shipment_dimension?: ShipmentDimension;
    /**
     * - A List of courier schemes.
     */
    courier_partner_schemes?: string[];
    /**
     * - List of articles in the shipment.
     */
    articles?: ShipmentsArticles[];
};
/** @returns {ShipmentCourierPartnerDetails} */
declare function ShipmentCourierPartnerDetails(): ShipmentCourierPartnerDetails;
type ShipmentCourierPartnerDetails = {
    from_location: ShipmentsCourierPartnersServiceability;
    to_location: ShipmentsCourierPartnersServiceability;
    /**
     * - List of shipments.
     */
    shipments?: Shipments[];
    /**
     * - Journey type of the shipment forward or return.
     */
    journey?: string;
    /**
     * - Payment mode opted for the shipment.
     */
    payment_mode?: string;
};
/** @returns {CourierPartnerPromise} */
declare function CourierPartnerPromise(): CourierPartnerPromise;
type CourierPartnerPromise = {
    /**
     * - The earliest possible timestamp.
     */
    min: string;
    /**
     * - The latest possible timestamp.
     */
    max: string;
};
/** @returns {CourierPartners} */
declare function CourierPartners(): CourierPartners;
type CourierPartners = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id?: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    scheme_id?: string;
    /**
     * - Name of the courier partner.
     */
    name?: string;
    delivery_promise?: CourierPartnerPromise;
};
/** @returns {ShipmentCourierPartners} */
declare function ShipmentCourierPartners(): ShipmentCourierPartners;
type ShipmentCourierPartners = {
    /**
     * - Unique identifier of the shipment.
     */
    id?: string;
    /**
     * - Courier partners of the shipment.
     */
    courier_partners?: CourierPartners[];
};
/** @returns {ShipmentCourierPartnerResult} */
declare function ShipmentCourierPartnerResult(): ShipmentCourierPartnerResult;
type ShipmentCourierPartnerResult = {
    courier_partners?: CourierPartners[];
    shipments?: ShipmentCourierPartners[];
};
/** @returns {ShipmentsCourierPartnersServiceability} */
declare function ShipmentsCourierPartnersServiceability(): ShipmentsCourierPartnersServiceability;
type ShipmentsCourierPartnersServiceability = {
    /**
     * - Postal code or PIN code of the address area.
     */
    pincode?: string;
    /**
     * - Specifies the sector or district code of
     * the address if applicable.
     */
    sector_code?: string;
    /**
     * - Indicates the state or province code of the address.
     */
    state_code?: string;
    /**
     * - Denote the city or municipality code of the address.
     */
    city_code?: string;
    /**
     * - ISO2 code for the country of the address.
     */
    country_code: string;
};
/** @returns {ServiceabilityLocation} */
declare function ServiceabilityLocation(): ServiceabilityLocation;
type ServiceabilityLocation = {
    /**
     * - Geographical longitude coordinate of the location.
     */
    longitude: string;
    /**
     * - Geographical latitude coordinate of the location.
     */
    latitude: string;
};
/** @returns {GetPromiseDetails} */
declare function GetPromiseDetails(): GetPromiseDetails;
type GetPromiseDetails = {
    /**
     * - List of delivery promises for each store.
     */
    items?: StorePromise[];
    delivery_promise?: Promise;
    page?: Page;
};
/** @returns {StorePromise} */
declare function StorePromise(): StorePromise;
type StorePromise = {
    /**
     * - Unique identifier of a store.
     */
    uid?: number;
    /**
     * - Code assigned to a store.
     */
    code?: string;
    /**
     * - Name of a store.
     */
    name?: string;
    delivery_promise?: Promise;
};
/** @returns {Promise} */
declare function Promise(): Promise;
type Promise = {
    /**
     * - Earliest delivery time.
     */
    min?: string;
    /**
     * - Latest delivery time.
     */
    max?: string;
};
/** @returns {ErrorResult} */
declare function ErrorResult(): ErrorResult;
type ErrorResult = {
    /**
     * - Error code identifying the type of error.
     */
    error?: string;
    /**
     * - User-friendly explanation of what went wrong.
     */
    message?: string;
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
