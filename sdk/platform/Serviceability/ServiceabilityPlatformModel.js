const Joi = require("joi");

/**
 * @typedef RuleConditionIntegerDetail
 * @property {string} [text]
 * @property {number} [value]
 * @property {boolean} [stage]
 */

/**
 * @typedef RuleConditionStringDetail
 * @property {string} [text]
 * @property {string} [value]
 * @property {boolean} [stage]
 */

/**
 * @typedef RuleResponseIntegerDetail
 * @property {RuleConditionIntegerDetail[]} [includes]
 */

/**
 * @typedef RuleResponseStringDetail
 * @property {RuleConditionStringDetail[]} [includes]
 */

/**
 * @typedef CourierPartnerRuleResponseDetailConditions
 * @property {LocationRule} [forward]
 * @property {LocationRule} [reverse]
 * @property {StringComparisonOperations} [payment_mode]
 * @property {RuleResponseIntegerDetail} [category_ids]
 * @property {RuleResponseIntegerDetail} [product_ids]
 * @property {StringComparisonOperations} [product_tags]
 * @property {RuleResponseStringDetail} [zone_ids]
 * @property {RuleResponseIntegerDetail} [department_ids]
 * @property {RuleResponseIntegerDetail} [brand_ids]
 * @property {ArithmeticOperationsV2} [order_place_date]
 * @property {RuleResponseIntegerDetail} [store_ids]
 * @property {StringComparisonOperations} [store_type]
 * @property {StringComparisonOperations} [store_tags]
 * @property {ArithmeticOperations} [shipment_weight]
 * @property {ArithmeticOperations} [shipment_cost]
 * @property {ArithmeticOperations} [shipment_volumetric_weight]
 * @property {RuleResponseIntegerDetail} [company_ids]
 * @property {StringComparisonOperations} [promise_types]
 */

/**
 * @typedef CourierPartnerRuleResponseDetailSchema
 * @property {string} [id]
 * @property {boolean} is_active
 * @property {CourierPartnerList[]} [cp_list]
 * @property {string} name
 * @property {CourierPartnerRuleResponseDetailConditions} conditions
 * @property {string[]} [manual_priority]
 * @property {string[]} sort
 * @property {string} type
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {string} [shipment_adjustment_type]
 */

/**
 * @typedef StoreLocationDetail
 * @property {string} [uid]
 * @property {string} [display_name]
 * @property {string} [sub_type]
 * @property {string} [parent_id]
 * @property {string} [parent_uid]
 */

/**
 * @typedef StoreRuleLocationDetailSchema
 * @property {StoreLocationDetail[]} [includes]
 */

/**
 * @typedef StoreRuleConditionDetailSchema
 * @property {RuleResponseIntegerDetail} [department_ids]
 * @property {RuleResponseIntegerDetail} [category_ids]
 * @property {RuleResponseIntegerDetail} [brand_ids]
 * @property {StoreRuleLocationDetailSchema} [to_location]
 * @property {CustomerRadiusSchema} [customer_radius]
 * @property {StringComparisonOperations} [store_type]
 * @property {StringComparisonOperations} [product_tags]
 * @property {RuleResponseIntegerDetail} [product_ids]
 * @property {StringComparisonOperations} [store_tags]
 * @property {ArithmeticOperationsV2} [order_place_date]
 * @property {RuleResponseStringDetail} [zone_ids]
 * @property {RuleResponseIntegerDetail} [company_ids]
 */

/**
 * @typedef StoreRuleDataDetailsSchema
 * @property {string} [id]
 * @property {string} [name]
 * @property {number} [company_id]
 * @property {string} [application_id]
 * @property {string[]} [type_based_priority]
 * @property {string[]} [tag_based_priority]
 * @property {StorePrioritySchema[]} [store_priority]
 * @property {string[]} [sort]
 * @property {number[]} [manual_priority]
 * @property {StoreRuleConditionDetailSchema} [conditions]
 * @property {boolean} [is_active]
 * @property {Object} [meta_sort_priority]
 * @property {Object} [meta_conditions]
 */

/**
 * @typedef OptimalLocationArticlesResponse
 * @property {number} item_id
 * @property {string} size
 * @property {number} quantity
 * @property {string} [group_id]
 * @property {boolean} [is_primary_item]
 * @property {Object} [meta]
 * @property {ArticleAssignment} article_assignment
 * @property {number} [seller_id]
 * @property {number[]} ignore_locations
 * @property {number[]} assign_locations
 * @property {number} price_effective
 * @property {number} mto_quantity
 * @property {string} _id
 * @property {string} uid
 */

/**
 * @typedef OptimalLocationAssignedStoresResponse
 * @property {number} store_id
 * @property {OptimalLocationArticlesResponse[]} articles
 */

/**
 * @typedef OptimalLocationsResponse
 * @property {OptimalLocationAssignedStoresResponse[]} assigned_stores
 * @property {ErrorResponse[]} [faulty_articles]
 */

/**
 * @typedef ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy] - The strategy parameter allows users to
 *   specify the desired approach or criteria for selecting optimal locations.
 */

/**
 * @typedef OptimalLocationsArticles
 * @property {number} item_id
 * @property {string} size
 * @property {number} quantity
 * @property {string} [group_id]
 * @property {boolean} [is_primary_item]
 * @property {Object} [meta]
 * @property {ArticleAssignment} article_assignment
 * @property {number[]} ignore_locations
 * @property {number[]} assign_locations
 * @property {number} [seller_id]
 */

/**
 * @typedef ServiceabilityLocation
 * @property {string} longitude - The longitude of the serviceability location.
 * @property {string} latitude - The latitude of the serviceability location.
 */

/**
 * @typedef LocationDetailsServiceability
 * @property {string} [pincode] - The pincode of the serviceability location.
 * @property {string} [sector] - The sector of the serviceability location.
 * @property {string} [state] - The state of the serviceability location.
 * @property {string} country - The country of the serviceability location.
 * @property {string} [city] - The city of the serviceability location.
 * @property {string} country_iso_code - The ISO code of the country.
 * @property {ServiceabilityLocation} [location]
 */

/**
 * @typedef OptimlLocationsRequestSchema
 * @property {string} channel_id
 * @property {string} channel_type
 * @property {string} [channel_identifier]
 * @property {LocationDetailsServiceability} to_serviceability
 * @property {OptimalLocationsArticles[]} articles
 */

/**
 * @typedef ErrorResponseV3
 * @property {boolean} [success]
 * @property {ErrorObject} [error]
 */

/**
 * @typedef ErrorObject
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [message]
 */

/**
 * @typedef ValidateAddressRequest
 * @property {string} [address] - A string representing the complete address,
 *   combining address line 1, address line 2, area, landmark, sector, city,
 *   state, and pincode. This provides a comprehensive view of the address details.
 * @property {string} [address1] - A string representing the first line of the
 *   address, typically containing street or building information.
 * @property {string} [address2] - A string representing the second line of the
 *   address, which can be used for additional address details if needed.
 * @property {string} [area] - A string specifying the locality or area
 *   associated with the address.
 * @property {string} [landmark] - A string representing a prominent nearby
 *   landmark that aids in locating the address.
 * @property {string} [pincode] - A string indicating the postal code or PIN
 *   code of the address area.
 * @property {string} [sector] - A string specifying the sector or district of
 *   the address if applicable.
 * @property {string} [city] - A string denoting the city or municipality of the address.
 * @property {string} [state] - A string indicating the state or province of the address.
 * @property {string} [name] - A string representing the recipient's name or the
 *   organization name associated with the address.
 * @property {string} [phone] - An integer representing the recipient's contact
 *   phone number.
 * @property {string} [email] - A string containing the recipient's email address.
 * @property {string} [country_iso_code] - A string containing the recipient's
 *   email address.
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

/**
 * @typedef CurrencyObject
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [symbol]
 */

/**
 * @typedef CountryHierarchy
 * @property {string} [display_name]
 * @property {string} [slug]
 */

/**
 * @typedef GetCountry
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
 * @property {GetCountryFields} [fields]
 */

/**
 * @typedef GetCountryFields
 * @property {GetCountryFieldsAddress[]} address
 * @property {string[]} serviceability_fields
 * @property {GetCountryFieldsAddressTemplate} address_template
 */

/**
 * @typedef GetCountryFieldsAddressTemplate
 * @property {string} checkout_form
 * @property {string} store_os_form
 * @property {string} default_display
 */

/**
 * @typedef FieldValidation
 * @property {string} [type]
 * @property {FieldValidationRegex} [regex]
 */

/**
 * @typedef FieldValidationRegex
 * @property {string} [value]
 * @property {LengthValidation} [length]
 */

/**
 * @typedef LengthValidation
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef GetOneOrAllQuery
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [sector]
 */

/**
 * @typedef GetOneOrAllPath
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef GetOneOrAllParams
 * @property {GetOneOrAllPath} [path]
 * @property {GetOneOrAllQuery} [query]
 */

/**
 * @typedef GetOneOrAll
 * @property {string} [operation_id]
 * @property {GetOneOrAllParams} [params]
 */

/**
 * @typedef GetCountryFieldsAddressValues
 * @property {GetOneOrAll} [get_one]
 * @property {GetOneOrAll} [get_all]
 */

/**
 * @typedef GetCountryFieldsAddress
 * @property {string} display_name
 * @property {string} slug
 * @property {boolean} required
 * @property {boolean} [edit]
 * @property {string} input
 * @property {FieldValidation} [validation]
 * @property {GetCountryFieldsAddressValues} [values]
 * @property {string} [error_text]
 */

/**
 * @typedef PincodeLatLongData
 * @property {string} [type]
 * @property {number[]} [coordinates]
 */

/**
 * @typedef Localities
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string[]} [parent_ids]
 * @property {Object} [meta]
 * @property {string} [type]
 * @property {PincodeLatLongData} [lat_long]
 * @property {string} [parent_uid]
 * @property {LocalityParent[]} [localities]
 */

/**
 * @typedef GetLocalities
 * @property {Localities[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LocalityParent
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {Object} [meta]
 * @property {string[]} [parent_ids]
 * @property {string} [type]
 * @property {Object} [serviceability]
 * @property {string} [parent_uid]
 */

/**
 * @typedef GetLocality
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {Object} [meta]
 * @property {string[]} [parent_ids]
 * @property {string} [parent_uid]
 * @property {string} [type]
 * @property {LocalityParent[]} [localities]
 */

/**
 * @typedef ApplicationConfigPutResponse
 * @property {string[]} [rule_ids]
 * @property {string[]} [sort]
 * @property {string[]} [manual_priority]
 * @property {string} [application_id]
 * @property {number} [company_id]
 */

/**
 * @typedef PromiseType
 * @property {string} display_name
 * @property {string} slug
 * @property {string} description
 * @property {boolean} is_active
 * @property {boolean} is_default
 */

/**
 * @typedef BuyboxRuleConfig
 * @property {string[]} [store_type_priority]
 * @property {string[]} [store_tag_priority]
 * @property {string[]} [sort]
 */

/**
 * @typedef CourierPartnerConfig
 * @property {string[]} [rule_ids]
 * @property {string[]} [sort]
 * @property {string[]} [manual_priority]
 */

/**
 * @typedef ZoneConfig
 * @property {string} [serviceability_type]
 * @property {number} [active_count]
 * @property {number} [total_count]
 */

/**
 * @typedef ApplicationConfigGetResponse
 * @property {ZoneConfig} [zones]
 * @property {CourierPartnerConfig} [courier_partner_config]
 * @property {BuyboxRuleConfig} [buybox_rule_config]
 * @property {PromiseConfig} [promise_config]
 * @property {PromiseType[]} [promise_types]
 */

/**
 * @typedef ApplicationConfigPutRequest
 * @property {string[]} [rule_ids]
 * @property {string[]} [sort]
 * @property {string[]} [manual_priority]
 */

/**
 * @typedef InstallCourierPartnerItemsSchema
 * @property {string} [base_url]
 * @property {Object} [callbacks]
 * @property {string} [contact_email]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [developed_by_name]
 * @property {string} [ext_version]
 * @property {string} [extention_type]
 * @property {boolean} [is_coming_soon]
 * @property {boolean} [is_hidden]
 * @property {boolean} [is_installed]
 * @property {string} [launch_type]
 * @property {Object} [logo]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {string} [organization_id]
 * @property {Object} [partner]
 * @property {string[]} [scope]
 * @property {string[]} [whitelisted_urls]
 * @property {number} [__v]
 * @property {string} [_id]
 */

/**
 * @typedef InstallCourierPartnerResponseSchema
 * @property {InstallCourierPartnerItemsSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef UpdateZoneConfigRequest
 * @property {string} [serviceability_type]
 */

/**
 * @typedef ServiceabilityErrorResponse
 * @property {string} message
 * @property {string} value
 * @property {string} type
 */

/**
 * @typedef ApplicationServiceabilityConfig
 * @property {string} channel_id
 * @property {string} serviceability_type
 * @property {string} channel_type
 */

/**
 * @typedef ApplicationServiceabilityConfigResponse
 * @property {ServiceabilityErrorResponse} [error]
 * @property {ApplicationServiceabilityConfig} [data]
 * @property {boolean} success
 */

/**
 * @typedef EntityRegionView_Request
 * @property {string[]} sub_type
 * @property {string[]} [parent_id]
 */

/**
 * @typedef EntityRegionView_Error
 * @property {string} [message]
 * @property {string} [value]
 * @property {string} [type]
 */

/**
 * @typedef EntityRegionView_page
 * @property {string} type
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {number} current
 */

/**
 * @typedef getAppRegionZonesResponse
 * @property {PageSchema[]} page
 * @property {ListViewItems[]} items
 */

/**
 * @typedef PageSchema
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {number} current
 * @property {string} type
 */

/**
 * @typedef EntityRegionView_Items
 * @property {string} sub_type
 * @property {string} uid
 * @property {string} name
 */

/**
 * @typedef EntityRegionView_Response
 * @property {EntityRegionView_Error} error
 * @property {EntityRegionView_page} page
 * @property {EntityRegionView_Items[]} data
 * @property {boolean} success
 */

/**
 * @typedef ListViewSummary
 * @property {number} total_zones
 * @property {number} total_pincodes_served
 * @property {number} total_active_zones
 */

/**
 * @typedef ProductSchema
 * @property {string} type - The classification of product type used in the
 *   zone, whether it's a list of categories, departments, tags or item_ids.
 * @property {number[]} values
 */

/**
 * @typedef ProductDetailsSchema
 * @property {string} type - The classification of product type used in the
 *   zone, whether it's a list of categories, departments, tags or item_ids.
 * @property {DetailsSchema[]} values - List of values representing the products
 *   or the type of products selected for the delivery zone.
 */

/**
 * @typedef StoresSchema
 * @property {string} type - Classification of whether all stores in the
 *   application are considered or a custom selection of stores by the seller.
 * @property {number[]} values - List of store ids mapped to the delivery zone
 *   when custom type is selected.
 */

/**
 * @typedef StoresDetailsSchema
 * @property {string} type - The classification of product type used in the
 *   zone, whether it's a list of categories, departments, tags or item_ids.
 * @property {StoreValueDetailsSchema[]} values - List of values representing
 *   the products or the type of products selected for the delivery zone.
 */

/**
 * @typedef DetailsSchema
 * @property {string} name - Display name of the value.
 * @property {string} value - Raw value (id) of the store or product or region.
 */

/**
 * @typedef StoreValueDetailsSchema
 * @property {string} text
 * @property {number} value
 */

/**
 * @typedef SummarySchema
 * @property {number} [stores_count] - Count of the stores that will be
 *   considered for the delivery zone.
 * @property {number} [products_count] - Count of the products that will be
 *   considered for the delivery zone.
 * @property {RegionSchema[]} [regions] - Summary of regions, with each country
 *   and the no of regions selected for the delivery zone.
 */

/**
 * @typedef RegionSchema
 * @property {string} [name] - Display name of the country
 * @property {number} [count] - Count of the total number of regions mapped to a
 *   country for the delivery zone.
 */

/**
 * @typedef ServiceabilityDeleteErrorResponse
 * @property {ServiceabilityErrorResponse[]} error
 */

/**
 * @typedef ListViewResponseV2
 * @property {ListViewItemsV2[]} items
 * @property {ZoneDataItem} page
 */

/**
 * @typedef ListViewItemsV2
 * @property {string} zone_id
 * @property {string} name
 * @property {string} type
 * @property {GeoArea[]} geo_areas
 * @property {string} slug
 * @property {ListViewProductV2} stores
 * @property {boolean} is_active
 * @property {ListViewProductV2} product
 * @property {number} company_id
 * @property {string} application_id
 * @property {string} created_by
 * @property {string} created_on
 * @property {string} modified_by
 * @property {string} modified_on
 * @property {string} [stage]
 * @property {Summary} [summary]
 */

/**
 * @typedef Summary
 * @property {number} [stores_count]
 * @property {number} [products_count]
 * @property {RegionSchema[]} [regions]
 */

/**
 * @typedef GeoArea
 * @property {string} id
 * @property {string} [type]
 * @property {string} name
 */

/**
 * @typedef ListViewProductV2
 * @property {string} type
 * @property {string[]} values
 */

/**
 * @typedef ZoneDataItem
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {number} current
 * @property {string} type
 */

/**
 * @typedef ListViewProduct
 * @property {number} count
 * @property {string} type
 */

/**
 * @typedef ListViewChannels
 * @property {string} channel_id
 * @property {string} channel_type
 */

/**
 * @typedef ListViewItems
 * @property {string} zone_id
 * @property {string} name
 * @property {string} slug
 * @property {number} stores_count
 * @property {boolean} is_active
 * @property {number} regions_count
 * @property {number} company_id
 * @property {ListViewChannels[]} channels
 */

/**
 * @typedef ListViewResponse
 * @property {ZoneDataItem} page
 * @property {ListViewItems[]} items
 */

/**
 * @typedef CompanyStoreView_PageItems
 * @property {string} type
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {number} current
 */

/**
 * @typedef CompanyStoreView_Response
 * @property {CompanyStoreView_PageItems[]} page
 * @property {Object[]} [items]
 */

/**
 * @typedef GetZoneDataViewChannels
 * @property {string} channel_id
 * @property {string} channel_type
 */

/**
 * @typedef ZoneProductTypes
 * @property {string} type
 * @property {string[]} tags
 */

/**
 * @typedef ZoneMappingType
 * @property {string} country
 * @property {string[]} [pincode]
 * @property {string[]} [state]
 */

/**
 * @typedef UpdateZoneDataV2
 * @property {string} [zone_id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [slug]
 * @property {string[]} [geo_areas]
 * @property {number} [company_id]
 * @property {string} [application_id]
 * @property {boolean} [is_active]
 * @property {ProductSchema} [product]
 * @property {StoresSchema} [stores]
 */

/**
 * @typedef ZoneUpdateSuccessResponse
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {string} type
 * @property {string} application_id
 * @property {boolean} is_active
 * @property {string[]} geo_areas
 * @property {ProductSchema} product
 * @property {StoresSchema} stores
 * @property {string} zone_id
 * @property {string} created_by
 * @property {string} created_on
 * @property {string} modified_by
 * @property {string} modified_on
 */

/**
 * @typedef ZoneDeleteSuccessResponse
 * @property {string} message
 */

/**
 * @typedef UpdateZoneData
 * @property {string} zone_id
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {GetZoneDataViewChannels[]} channels
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids
 * @property {string} region_type
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 */

/**
 * @typedef ZoneUpdateRequest
 * @property {string} identifier
 * @property {UpdateZoneData} data
 */

/**
 * @typedef ZoneSuccessResponse
 * @property {number} status_code
 * @property {boolean} success
 */

/**
 * @typedef GetZoneDataViewItems
 * @property {string} zone_id
 * @property {string} name
 * @property {string} slug
 * @property {number} [company_id]
 * @property {boolean} is_active
 * @property {GetZoneDataViewChannels[]} channels
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids
 * @property {string} [region_type]
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 * @property {number} stores_count
 */

/**
 * @typedef GetSingleZoneDataViewResponse
 * @property {GetZoneDataViewItems} data
 */

/**
 * @typedef GetZoneByIdSchema
 * @property {string} zone_id
 * @property {string} name
 * @property {string} slug
 * @property {boolean} is_active
 * @property {ProductSchema} product
 * @property {StoresSchema} stores
 * @property {string} [created_by]
 * @property {string} [created_on]
 * @property {string} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [stage]
 * @property {string} [overlapping_file_url]
 * @property {string[]} geo_areas
 * @property {string} type
 * @property {string[]} [overlapping_zone_names]
 */

/**
 * @typedef GetZoneByIdDetailsSchema
 * @property {string} zone_id - Unique identifier for the zone.
 * @property {string} name - Name of the zone.
 * @property {string} slug - URL-friendly version of the zone name.
 * @property {boolean} is_active - Indicates whether the zone is active.
 * @property {ProductDetailsSchema} product
 * @property {StoresDetailsSchema} stores
 * @property {string} [stage] - Current stage of the zone in its lifecycle.
 * @property {string} [overlapping_file_url] - URL of the file containing
 *   overlapping zone information.
 * @property {GeoAreaDetailsSchema[]} geo_areas
 * @property {string} type - Type of the zone (custom or default).
 * @property {string[]} [overlapping_zone_names] - List of names of overlapping zones.
 */

/**
 * @typedef GeoAreaDetailsSchema
 * @property {string} id - Unique identifier for the geographical area.
 * @property {string} name - Name of the geographical area.
 */

/**
 * @typedef CreateZoneV2Data
 * @property {boolean} is_active
 * @property {string} slug
 * @property {string} type
 * @property {string} name
 * @property {number} company_id
 * @property {string} application_id
 * @property {string[]} geo_areas
 * @property {ZoneStores} stores
 * @property {ZoneProduct} product
 */

/**
 * @typedef ZoneBulkExport
 * @property {string} [batch_id]
 */

/**
 * @typedef GetZoneBulkExport
 * @property {ZoneBulkItem[]} [items]
 */

/**
 * @typedef ZoneBulkItem
 * @property {string} [batch_id]
 * @property {string} [file_path]
 * @property {number} [total]
 * @property {number} [failed]
 * @property {string} [error_file_url]
 * @property {string} [action]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [type]
 * @property {string} [stage]
 */

/**
 * @typedef CreateBulkZoneData
 * @property {string} [file_url]
 * @property {string} [product_type]
 */

/**
 * @typedef ZoneStores
 * @property {string} type
 * @property {number[]} values
 */

/**
 * @typedef ZoneProduct
 * @property {string} type
 * @property {number[]} values
 */

/**
 * @typedef ZoneResponseV2
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {string} type
 * @property {string} application_id
 * @property {boolean} is_active
 * @property {string[]} geo_areas
 * @property {ListViewProductV2} stores
 * @property {ListViewProductV2} product
 * @property {string} created_by
 * @property {string} created_on
 * @property {string} modified_by
 * @property {string} modified_on
 * @property {string} stage
 * @property {string} zone_id
 */

/**
 * @typedef CreateBulkZoneResponse
 * @property {string} [zone_id]
 */

/**
 * @typedef GetBulkZoneHistory
 * @property {BulkZoneItems[]} [items]
 * @property {PageV2} [page]
 */

/**
 * @typedef BulkZoneItems
 * @property {string} [batch_id]
 * @property {string} [entity_type]
 * @property {string} [error_file_url]
 * @property {string} [file_path]
 * @property {string} [file_name]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [stage]
 */

/**
 * @typedef PageV2
 * @property {string} [type]
 * @property {number} [size]
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 */

/**
 * @typedef BulkCreateZoneExport
 * @property {string} [placeholder]
 */

/**
 * @typedef CreateZoneData
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {GetZoneDataViewChannels[]} channels
 * @property {number[]} store_ids
 * @property {string} region_type
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 */

/**
 * @typedef ZoneResponse
 * @property {number} status_code
 * @property {string} zone_id
 * @property {boolean} success
 */

/**
 * @typedef GetZoneFromPincodeViewRequest
 * @property {string} country
 * @property {string} pincode
 */

/**
 * @typedef Zone
 * @property {string} zone_id
 * @property {string} type
 * @property {string} name
 * @property {string[]} tags
 * @property {string} slug
 * @property {boolean} is_active
 * @property {number[]} store_ids
 * @property {string} assignment_preference
 */

/**
 * @typedef GetZoneFromPincodeViewResponse
 * @property {string} serviceability_type
 * @property {Zone[]} zones
 */

/**
 * @typedef GetZoneFromApplicationIdViewResponse
 * @property {ZoneDataItem[]} page
 * @property {ListViewItems[]} items
 */

/**
 * @typedef ServiceabilityPageResponse
 * @property {string} [type]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {number} [current]
 */

/**
 * @typedef MobileNo
 * @property {string} [number]
 * @property {number} [country_code]
 */

/**
 * @typedef ManagerResponse
 * @property {string} [email]
 * @property {MobileNo} [mobile_no]
 * @property {string} [name]
 */

/**
 * @typedef ModifiedByResponse
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef IntegrationTypeResponse
 * @property {string} [inventory]
 * @property {string} [order]
 */

/**
 * @typedef ProductReturnConfigResponse
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef ContactNumberResponse
 * @property {string} [number]
 * @property {number} [country_code]
 */

/**
 * @typedef AddressResponse
 * @property {string} [city]
 * @property {string} [address1]
 * @property {number} [pincode]
 * @property {string} [address2]
 * @property {string} [landmark]
 * @property {string} [state]
 * @property {string} [country]
 * @property {number} [latitude]
 * @property {number} [longitude]
 */

/**
 * @typedef CreatedByResponse
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef EwayBillResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef EinvoiceResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef GstCredentialsResponse
 * @property {EwayBillResponse} [e_waybill]
 * @property {EinvoiceResponse} [e_invoice]
 */

/**
 * @typedef WarningsResponse
 * @property {string} [store_address]
 */

/**
 * @typedef OpeningClosing
 * @property {number} [minute]
 * @property {number} [hour]
 */

/**
 * @typedef TimmingResponse
 * @property {boolean} [open]
 * @property {string} [weekday]
 * @property {OpeningClosing} [closing]
 * @property {OpeningClosing} [opening]
 */

/**
 * @typedef DocumentsResponse
 * @property {string} [legal_name]
 * @property {string} [value]
 * @property {string} [type]
 * @property {boolean} [verified]
 */

/**
 * @typedef Dp
 * @property {number} [fm_priority]
 * @property {number} [rvp_priority]
 * @property {number} [lm_priority]
 * @property {string} [internal_account_id]
 * @property {number} [area_code]
 * @property {string} [payment_mode]
 * @property {string[]} [operations]
 * @property {string} [external_account_id]
 * @property {string} [transport_mode]
 * @property {boolean} [assign_dp_from_sb]
 */

/**
 * @typedef LogisticsResponse
 * @property {boolean} [override]
 * @property {Dp} [dp]
 */

/**
 * @typedef ItemResponse
 * @property {string} [created_on]
 * @property {ManagerResponse} [manager]
 * @property {ModifiedByResponse} [modified_by]
 * @property {IntegrationTypeResponse} [integration_type]
 * @property {string} [verified_on]
 * @property {ProductReturnConfigResponse} [product_return_config]
 * @property {ContactNumberResponse[]} [contact_numbers]
 * @property {ModifiedByResponse} [verified_by]
 * @property {string} [stage]
 * @property {AddressResponse} [address]
 * @property {string} [modified_on]
 * @property {CreatedByResponse} [created_by]
 * @property {GstCredentialsResponse} [gst_credentials]
 * @property {string} [display_name]
 * @property {number} [company_id]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [code]
 * @property {WarningsResponse} [warnings]
 * @property {string} [name]
 * @property {TimmingResponse[]} [timing]
 * @property {DocumentsResponse[]} [documents]
 * @property {string} [store_type]
 * @property {string} [sub_type]
 * @property {number} [company]
 * @property {string} [_cls]
 * @property {LogisticsResponse} [logistics]
 * @property {string[]} [notification_emails]
 */

/**
 * @typedef GetStoresViewResponse
 * @property {ServiceabilityPageResponse} page
 * @property {ItemResponse[]} [items]
 */

/**
 * @typedef ReAssignStoreRequest
 * @property {string} to_pincode
 * @property {string} identifier
 * @property {Object} configuration
 * @property {string[]} ignored_locations
 * @property {Object[]} articles
 */

/**
 * @typedef ServiceabilityZoneErrorResult
 * @property {ServiceabilityErrorResponse[]} error
 */

/**
 * @typedef ReAssignStoreResponse
 * @property {string} to_pincode
 * @property {boolean} success
 * @property {Object} error
 * @property {Object[]} [articles]
 */

/**
 * @typedef PincodeMopData
 * @property {number[]} pincodes
 * @property {string} country
 * @property {string} action
 */

/**
 * @typedef PincodeMopUpdateResponse
 * @property {number} pincode
 * @property {string} channel_id
 * @property {string} country
 * @property {boolean} is_active
 */

/**
 * @typedef PincodeMOPresponse
 * @property {string} batch_id
 * @property {boolean} success
 * @property {number} status_code
 * @property {string} country
 * @property {string} action
 * @property {number[]} [pincodes]
 * @property {PincodeMopUpdateResponse[]} [updated_pincodes]
 */

/**
 * @typedef CommonError
 * @property {number} [status_code]
 * @property {ErrorResponse[]} [error]
 * @property {boolean} [success]
 */

/**
 * @typedef MoPCommonError
 * @property {string} [batch_id]
 * @property {number} [status_code]
 * @property {ErrorResponse[]} [error]
 * @property {boolean} [success]
 */

/**
 * @typedef PincodeMopBulkData
 * @property {string} [batch_id]
 * @property {string} s3_url
 */

/**
 * @typedef PincodeBulkViewResponse
 * @property {string} batch_id
 * @property {string} s3_url
 */

/**
 * @typedef PincodeCodStatusListingRequest
 * @property {string} [country]
 * @property {boolean} [is_active]
 * @property {number} [pincode]
 * @property {number} [current]
 * @property {number} [page_size]
 */

/**
 * @typedef PincodeCodDataSchema
 * @property {string} [pincode]
 * @property {boolean} [active]
 */

/**
 * @typedef PincodeCodStatusListingResponse
 * @property {string} country
 * @property {PincodeCodDataSchema[]} data
 * @property {boolean} success
 * @property {Error[]} [errors]
 * @property {PincodeCodStatusListingPage} page
 * @property {PincodeCodStatusListingSummary} summary
 */

/**
 * @typedef Error
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [message]
 */

/**
 * @typedef PincodeCodStatusListingPage
 * @property {string} type
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {number} current
 */

/**
 * @typedef PincodeCodStatusListingSummary
 * @property {number} total_active_pincodes
 * @property {number} total_inactive_pincodes
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryRequest
 * @property {string} entity_type
 * @property {string} [file_name]
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryPaging
 * @property {string} [type]
 * @property {number} [size]
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryResponse
 * @property {string} [batch_id]
 * @property {string} [entity_type]
 * @property {string} [error_file_s3_url]
 * @property {string} [s3_url]
 * @property {string} [file_name]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {boolean} [success]
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryResponseData
 * @property {string} [entity_type]
 * @property {PincodeMopUpdateAuditHistoryPaging} page
 * @property {PincodeMopUpdateAuditHistoryResponse[]} data
 */

/**
 * @typedef ArithmeticOperations
 * @property {number} [lt]
 * @property {number} [gt]
 * @property {number} [lte]
 * @property {number} [gte]
 */

/**
 * @typedef SchemeRulesFeatures
 * @property {boolean} [quality_check]
 * @property {boolean} [quick_response_code]
 * @property {boolean} [e_waybill]
 * @property {boolean} [multi_part_shipments]
 * @property {boolean} [flammable]
 * @property {boolean} [hazmat]
 * @property {boolean} [battery_operated]
 */

/**
 * @typedef SchemeRules
 * @property {ArithmeticOperations} [weight]
 * @property {string[]} [transport_type]
 * @property {string} [region]
 * @property {string[]} [payment_mode]
 * @property {SchemeRulesFeatures} [feature]
 */

/**
 * @typedef CourierAccount
 * @property {string} extension_id
 * @property {string} account_id
 * @property {string} scheme_id
 * @property {boolean} is_self_ship
 * @property {string} stage
 * @property {boolean} is_own_account
 * @property {number} [company_id]
 * @property {Object} [scheme_rules]
 */

/**
 * @typedef BulkGeoAreaDetails
 * @property {string} [file_url]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [type]
 */

/**
 * @typedef BulkGeoAreaResult
 * @property {string} [geoarea_id]
 */

/**
 * @typedef BulkGeoAreaGetResponse
 * @property {string} [batch_id]
 * @property {string} [file_path]
 * @property {number} [total]
 * @property {number} [failed]
 * @property {string} [error_file_url]
 * @property {string} [action]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [type]
 * @property {string} [stage]
 * @property {string} [file_url]
 */

/**
 * @typedef GeoAreaBulkCreationResult
 * @property {string} [batch_id] - The unique identifier of the bulk export batch.
 */

/**
 * @typedef GeoAreaBulkExportResult
 * @property {string} [batch_id] - The unique identifier of the bulk export batch.
 * @property {string} [file_path] - The file path where the export data will be stored.
 * @property {number} [total] - The total number of records processed in the export.
 * @property {number} [failed] - The number of records that failed to export.
 * @property {string} [error_file_url] - The URL of the file containing details
 *   of errors encountered during the export, if available.
 * @property {string} [action] - The action performed during the export process,
 *   typically "import" or "export".
 * @property {string} [updated_at] - The timestamp when the export status was
 *   last updated.
 * @property {string} [updated_by] - The name or identifier of the user or
 *   process that last updated the export status.
 * @property {string} [type] - The type of export process, such as "geo_area_bulk_export".
 * @property {string} [stage] - The current stage of the export process, such as
 *   "initiated", "in_progress", or "completed".
 */

/**
 * @typedef GeoAreaRequestBody
 * @property {boolean} is_active
 * @property {string} name
 * @property {string} slug
 * @property {string} type
 * @property {Area[]} areas
 * @property {string} region_type
 */

/**
 * @typedef GeoAreaErrorResult
 * @property {GeoAreaResponseDetail[]} [error]
 */

/**
 * @typedef ErrorResponseItem
 * @property {string} message
 * @property {string} error_name
 * @property {number} error_code
 * @property {string} value
 * @property {ConflictingArea[]} conflicting_areas
 */

/**
 * @typedef ConflictingArea
 * @property {string} geoarea_id
 * @property {string} name
 */

/**
 * @typedef GeoAreaResponseDetail
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [message]
 */

/**
 * @typedef ErrorResponseDetail
 * @property {ErrorResponseItem[]} items
 */

/**
 * @typedef GeoAreaResponseBody
 * @property {string} name
 * @property {string} slug
 * @property {boolean} is_active
 * @property {Area[]} areas
 * @property {string} region_type
 * @property {string} type
 * @property {string} created_on
 * @property {string} modified_on
 * @property {string} created_by
 * @property {string} modified_by
 * @property {string} geoarea_id
 */

/**
 * @typedef GeoAreaPutResponseBody
 * @property {string} [name]
 * @property {string} [geoarea_id]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {Area[]} [areas]
 * @property {string} [region_type]
 * @property {string} [type]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [created_by]
 * @property {string} [modified_by]
 * @property {string} [upload_type]
 */

/**
 * @typedef Area
 * @property {string[]} [regions]
 * @property {string} [country]
 */

/**
 * @typedef Region
 * @property {string} uid
 * @property {string} display_name
 * @property {string} sub_type
 * @property {string[]} parent_id
 */

/**
 * @typedef RegionV2
 * @property {string} [uid]
 * @property {string} [display_name]
 * @property {string} [sub_type]
 * @property {string[]} [parent_id]
 */

/**
 * @typedef Country
 * @property {string} uid
 * @property {string} display_name
 */

/**
 * @typedef AreaExpanded
 * @property {Country} country
 * @property {Region[]} regions
 */

/**
 * @typedef AreaExpandedV2
 * @property {Country} country
 * @property {RegionV2[]} regions
 */

/**
 * @typedef GeoAreaResponse
 * @property {string} name
 * @property {string} slug
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {string} geoarea_id
 * @property {boolean} is_active
 * @property {string} type
 * @property {string} region_type
 * @property {AreaExpanded[]} areas
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef GeoAreaGetResponseBody
 * @property {GeoAreaItemResponse[]} [items]
 * @property {Page2} [page]
 */

/**
 * @typedef GeoAreaItemResponse
 * @property {number} company_id
 * @property {string} application_id
 * @property {string} geoarea_id
 * @property {string} name
 * @property {string} slug
 * @property {boolean} is_active
 * @property {string} region_type
 * @property {string} type
 * @property {AreaExpandedV2[]} areas
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef ErrorResponseV2
 * @property {boolean} success
 * @property {string} error
 */

/**
 * @typedef ErrorResponse
 * @property {string} value
 * @property {string} message
 * @property {string} type
 * @property {string} [error]
 */

/**
 * @typedef PackageMaterialNotFound
 * @property {number} [status_code]
 * @property {boolean} [success]
 */

/**
 * @typedef PackageMaterialsErrorResponse
 * @property {string} [value]
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [error]
 */

/**
 * @typedef CourierPartnerAccountFailureResponse
 * @property {boolean} success
 * @property {ErrorResponse[]} error
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
 * @typedef Page2
 * @property {number} size
 * @property {number} item_total
 * @property {string} type
 * @property {number} current
 * @property {boolean} has_next
 */

/**
 * @typedef CourierPartnerList
 * @property {string} [extension_id]
 * @property {string} [account_id]
 * @property {string} [name]
 * @property {boolean} [is_self_ship]
 * @property {Object} [scheme_rules]
 * @property {string} [stage]
 */

/**
 * @typedef LocationRuleValues
 * @property {string} uid
 * @property {string} [sub_type]
 * @property {string} [display_name]
 * @property {string} [parent_uid]
 * @property {string[]} [parent_id]
 */

/**
 * @typedef LocationRuleValuesV2
 * @property {string} id
 * @property {string} [sub_type]
 * @property {string} [display_name]
 * @property {string} [parent_uid]
 * @property {string[]} [parent_id]
 */

/**
 * @typedef LocationRule
 * @property {string} [type]
 * @property {LocationRuleValues[]} [includes]
 */

/**
 * @typedef LocationRuleV2
 * @property {string} [type]
 * @property {LocationRuleValuesV2[]} [includes]
 */

/**
 * @typedef StringComparisonOperations
 * @property {string[]} [includes]
 */

/**
 * @typedef IntComparisonOperations
 * @property {number[]} [includes]
 */

/**
 * @typedef CourierPartnerRuleConditions
 * @property {LocationRule} [forward]
 * @property {LocationRule} [reverse]
 * @property {StringComparisonOperations} [payment_mode]
 * @property {IntComparisonOperations} [category_ids]
 * @property {IntComparisonOperations} [product_ids]
 * @property {StringComparisonOperations} [product_tags]
 * @property {StringComparisonOperations} [zone_ids]
 * @property {IntComparisonOperations} [department_ids]
 * @property {IntComparisonOperations} [brand_ids]
 * @property {ArithmeticOperationsV2} [order_place_date]
 * @property {IntComparisonOperations} [store_ids]
 * @property {StringComparisonOperations} [store_type]
 * @property {StringComparisonOperations} [store_tags]
 * @property {ArithmeticOperations} [shipment_weight]
 * @property {ArithmeticOperations} [shipment_cost]
 * @property {ArithmeticOperations} [shipment_volumetric_weight]
 * @property {IntComparisonOperations} [company_ids]
 * @property {StringComparisonOperations} [promise_types]
 */

/**
 * @typedef CourierPartnerRuleResponseConditions
 * @property {LocationRule} [forward]
 * @property {LocationRule} [reverse]
 * @property {StringComparisonOperations} [payment_mode]
 * @property {IntComparisonOperations} [category_ids]
 * @property {IntComparisonOperations} [product_ids]
 * @property {StringComparisonOperations} [product_tags]
 * @property {StringComparisonOperations} [zone_ids]
 * @property {IntComparisonOperations} [department_ids]
 * @property {IntComparisonOperations} [brand_ids]
 * @property {ArithmeticOperationsV2} [order_place_date]
 * @property {IntComparisonOperations} [store_ids]
 * @property {StringComparisonOperations} [store_type]
 * @property {StringComparisonOperations} [store_tags]
 * @property {ArithmeticOperations} [shipment_weight]
 * @property {ArithmeticOperations} [shipment_cost]
 * @property {ArithmeticOperations} [shipment_volumetric_weight]
 * @property {IntComparisonOperations} [company_ids]
 * @property {StringComparisonOperations} [promise_types]
 */

/**
 * @typedef CourierPartnerRule
 * @property {string} [id]
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {boolean} is_active
 * @property {CourierPartnerList[]} [cp_list]
 * @property {string} name
 * @property {CourierPartnerRuleConditions} conditions
 * @property {string[]} [manual_priority]
 * @property {string[]} sort
 * @property {string} [shipment_adjustment_type]
 * @property {string} type
 */

/**
 * @typedef CourierPartnerRuleResponse
 * @property {boolean} is_active
 * @property {CourierPartnerList[]} [cp_list]
 * @property {string} name
 * @property {CourierPartnerRuleResponseConditions} conditions
 * @property {string[]} [manual_priority]
 * @property {string[]} sort
 * @property {string} [shipment_adjustment_type]
 * @property {string} type
 */

/**
 * @typedef CourierPartnerRuleResponseSchema
 * @property {string} [id]
 * @property {boolean} is_active
 * @property {CourierPartnerList[]} [cp_list]
 * @property {string} name
 * @property {CourierPartnerRuleResponseConditions} conditions
 * @property {string[]} [manual_priority]
 * @property {string[]} sort
 * @property {string} type
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {string} [shipment_adjustment_type]
 */

/**
 * @typedef FailureResponse
 * @property {boolean} success
 * @property {ErrorResponse[]} error
 */

/**
 * @typedef CourierPartnerRulesListResponse
 * @property {CourierPartnerRuleResponseSchema[]} items
 * @property {Page} page
 */

/**
 * @typedef CompanyConfig
 * @property {number} [company_id]
 * @property {string[]} [sort]
 * @property {string} [logistics_as_actual]
 */

/**
 * @typedef StorePromiseAttributeConfig
 * @property {boolean} [is_operational_timing_enabled]
 * @property {boolean} [is_order_acceptance_timing_enabled]
 * @property {boolean} [is_average_processing_time]
 * @property {boolean} [is_holiday_enabled]
 */

/**
 * @typedef DeliveryServiceAttributeConfig
 * @property {boolean} [is_pickup_cutoff_time_enabled]
 * @property {boolean} [is_service_tat_enabled]
 * @property {boolean} [is_holiday_enabled]
 */

/**
 * @typedef BufferField
 * @property {string} [unit]
 * @property {number} [value]
 * @property {boolean} [enabled]
 */

/**
 * @typedef PromiseConfig
 * @property {StorePromiseAttributeConfig} [store_attributes]
 * @property {DeliveryServiceAttributeConfig} [delivery_service_attributes]
 * @property {BufferField} [buffer_field]
 */

/**
 * @typedef ApplicationConfig
 * @property {string[]} [rule_ids]
 * @property {string[]} [sort]
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {string[]} [manual_priority]
 * @property {ZoneConfig} [zones]
 * @property {BuyboxRuleConfig} [buybox_rule_config]
 * @property {PromiseType[]} [promise_types]
 * @property {PromiseConfig} [promise_config]
 */

/**
 * @typedef ApplicationConfigPatchRequest
 * @property {CourierPartnerConfig} [courier_partner_config]
 * @property {BuyboxRuleConfig} [buybox_rule_config]
 * @property {PromiseConfig} [promise_config]
 */

/**
 * @typedef ApplicationConfigPatchResponse
 * @property {boolean} [success]
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
 * @typedef SelfShipResponse
 * @property {boolean} is_active
 * @property {number} tat
 */

/**
 * @typedef ApplicationSelfShipConfig
 * @property {Object} [self_ship]
 */

/**
 * @typedef ApplicationSelfShipConfigResponse
 * @property {ServiceabilityErrorResponse} [error]
 * @property {ApplicationSelfShipConfig} [data]
 * @property {boolean} success
 */

/**
 * @typedef StoreRuleConfigData
 * @property {string[]} [rule_ids]
 * @property {string[]} [type_based_priority]
 * @property {string[]} [tag_based_priority]
 * @property {StorePrioritySchema[]} [store_priority]
 * @property {string[]} [sort]
 * @property {number[]} [manual_priority]
 * @property {Object} [meta_sort_priority]
 */

/**
 * @typedef CustomerRadiusSchema
 * @property {string} unit
 * @property {number} [lt]
 * @property {number} [lte]
 * @property {number} [gt]
 * @property {number} [gte]
 */

/**
 * @typedef StoreRuleConditionSchema
 * @property {IntComparisonOperations} [department_ids]
 * @property {IntComparisonOperations} [category_ids]
 * @property {IntComparisonOperations} [brand_ids]
 * @property {LocationRuleV2} [to_location]
 * @property {CustomerRadiusSchema} [customer_radius]
 * @property {StringComparisonOperations} [store_type]
 * @property {StringComparisonOperations} [product_tags]
 * @property {IntComparisonOperations} [product_ids]
 * @property {StringComparisonOperations} [store_tags]
 * @property {ArithmeticOperationsV2} [order_place_date]
 * @property {StringComparisonOperations} [zone_ids]
 */

/**
 * @typedef StoreRuleDataSchema
 * @property {string} [id]
 * @property {string} [name]
 * @property {number} [company_id]
 * @property {string} [application_id]
 * @property {string[]} [type_based_priority]
 * @property {string[]} [tag_based_priority]
 * @property {StorePrioritySchema[]} [store_priority]
 * @property {string[]} [sort]
 * @property {number[]} [manual_priority]
 * @property {Object} [meta_sort_priority]
 * @property {Object} [meta_conditions]
 * @property {StoreRuleConditionSchema} [conditions]
 * @property {boolean} [is_active]
 */

/**
 * @typedef StorePrioritySchema
 * @property {number} [id]
 * @property {string} [name]
 */

/**
 * @typedef GetStoreRulesApiResponse
 * @property {StoreRuleDataSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CreateStoreRuleRequestSchema
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {StoreRuleConditionSchema} [conditions]
 * @property {string[]} [type_based_priority]
 * @property {string[]} [tag_based_priority]
 * @property {StorePrioritySchema[]} [store_priority]
 * @property {number[]} [manual_priority]
 * @property {string[]} [sort]
 */

/**
 * @typedef StoreRuleResponseSchema
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string[]} [type_based_priority]
 * @property {string[]} [tag_based_priority]
 * @property {StorePrioritySchema[]} [store_priority]
 * @property {string[]} [sort]
 * @property {number[]} [manual_priority]
 * @property {StoreRuleConditionSchema} [conditions]
 * @property {boolean} [is_active]
 */

/**
 * @typedef StoreRuleUpdateResponseSchema
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string[]} [type_based_priority]
 * @property {string[]} [tag_based_priority]
 * @property {StorePrioritySchema[]} [store_priority]
 * @property {string[]} [sort]
 * @property {number[]} [manual_priority]
 * @property {StoreRuleConditionSchema} [conditions]
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 * @property {string} [application_id]
 */

/**
 * @typedef ServiceabilityModel
 * @property {number} lm_cod_limit
 * @property {boolean} is_qc
 * @property {string} pickup_cutoff
 * @property {string} route_code
 * @property {boolean} is_first_mile
 * @property {boolean} is_return
 * @property {boolean} is_installation
 * @property {boolean} is_last_mile
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
 * @typedef CourierAccountSchemeResponse
 * @property {string} [name]
 * @property {string} [extension_id]
 * @property {string} [scheme_id]
 * @property {ArithmeticOperations} [weight]
 * @property {string} [transport_type]
 * @property {string} [region]
 * @property {string} [delivery_type]
 * @property {string[]} [payment_mode]
 * @property {string} [stage]
 * @property {CourierPartnerSchemeFeatures} [feature]
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
 * @property {CourierAccountSchemeResponse} scheme_rules
 */

/**
 * @typedef CompanyCourierPartnerAccountListResponse
 * @property {CourierAccountResponse[]} items
 * @property {Page} page
 */

/**
 * @typedef PackageMaterial
 * @property {number} [company_id]
 * @property {number} [item_id]
 * @property {string} [id]
 * @property {string} name
 * @property {number} width
 * @property {number} height
 * @property {number} length
 * @property {number} weight
 * @property {boolean} [auto_calculate]
 * @property {number} [max_weight]
 * @property {number} [package_vol_weight]
 * @property {number} error_rate
 * @property {Channel[]} channels
 * @property {string} package_type
 * @property {string} size
 * @property {boolean} [track_inventory]
 * @property {PackageMaterialRule[]} [rules]
 * @property {number[]} store_ids
 * @property {PackageMpStores[]} [mp_stores]
 * @property {string[]} [media]
 * @property {string} status
 * @property {boolean} [is_active]
 */

/**
 * @typedef PackageMaterialResponse
 * @property {number} [company_id]
 * @property {string} name
 * @property {string} [id]
 * @property {number} [item_id]
 * @property {number} width
 * @property {number} height
 * @property {number} length
 * @property {PackageMaterialRule[]} [rules]
 * @property {number[]} store_ids
 * @property {number} weight
 * @property {number} error_rate
 * @property {string} package_type
 * @property {string} size
 * @property {string[]} [media]
 * @property {Channel[]} channels
 * @property {boolean} [track_inventory]
 * @property {boolean} [is_active]
 * @property {string} status
 * @property {number} [max_weight]
 * @property {number} [package_vol_weight]
 * @property {boolean} [auto_calculate]
 * @property {PackageMpStores[]} [mp_stores]
 */

/**
 * @typedef PackageMaterialRule
 * @property {string} [rule_id]
 * @property {PackageMaterialRuleQuantity} [quantity]
 * @property {number} [weight]
 * @property {number} [company_id]
 * @property {boolean} [is_active]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [id]
 */

/**
 * @typedef PackageMpStores
 * @property {string} [app_name]
 * @property {string} [app_id]
 * @property {number[]} [store_ids]
 * @property {Object} [store_data]
 */

/**
 * @typedef PackageRuleRequest
 * @property {string} name
 * @property {number} company_id
 * @property {PackageRuleCategory} [category_id]
 * @property {PackageRuleProduct} [product_id]
 * @property {PackageRuleProductTag} [product_tag]
 * @property {PackageRuleDepartmentId} [department_id]
 * @property {PackageRuleProductAttributes} [product_attributes]
 * @property {string} type
 * @property {boolean} [is_active]
 */

/**
 * @typedef PackageRule
 * @property {string} name
 * @property {string} [id]
 * @property {number} [item_id]
 * @property {number} [width]
 * @property {number} [height]
 * @property {number} [length]
 * @property {PackageMaterialRule[]} [rules]
 * @property {number[]} [store_ids]
 * @property {number} [weight]
 * @property {number} [error_rate]
 * @property {string} [package_type]
 * @property {string} [size]
 * @property {string[]} [media]
 * @property {Channel[]} [channels]
 * @property {boolean} [track_inventory]
 * @property {string} [status]
 * @property {number} [max_weight]
 * @property {number} [package_vol_weight]
 * @property {boolean} [auto_calculate]
 * @property {PackageMpStores[]} [mp_stores]
 */

/**
 * @typedef PackageRuleResult
 * @property {boolean} [is_active]
 * @property {number} company_id
 * @property {PackageRuleProduct} [product_id]
 * @property {PackageRuleCategory} [category_id]
 * @property {PackageRuleDepartmentId} [department_id]
 * @property {PackageRuleProductTag} [product_tag]
 * @property {PackageRuleProductAttributes} [product_attributes]
 * @property {string} name
 * @property {string} type
 * @property {string} [id]
 */

/**
 * @typedef Channel
 * @property {string} [type]
 * @property {string} [id]
 */

/**
 * @typedef PackageMaterialRuleList
 * @property {PackageRuleResult[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PackageMaterialList
 * @property {Object} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PackageRuleProduct
 * @property {number[]} [includes]
 */

/**
 * @typedef PackageRuleProductTag
 * @property {string[]} [includes]
 */

/**
 * @typedef PackageRuleCategory
 * @property {number[]} [includes]
 */

/**
 * @typedef PackageRuleProductAttributes
 * @property {Object[]} [includes]
 */

/**
 * @typedef PackageRuleDepartmentId
 * @property {number[]} [includes]
 */

/**
 * @typedef PackageMaterialRuleQuantity
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef RulePriorityRequest
 * @property {string} rule_id
 * @property {number} priority
 */

/**
 * @typedef RulePriorityResponse
 * @property {boolean} [success]
 */

/**
 * @typedef CompanySelfShip
 * @property {boolean} is_active
 * @property {number} tat
 * @property {string} unit
 */

/**
 * @typedef ArithmeticOperationsV2
 * @property {string} [lt]
 * @property {string} [gt]
 * @property {string} [lte]
 * @property {string} [gte]
 */

/**
 * @typedef CompanyConfigurationShema
 * @property {string[]} [sort]
 */

/**
 * @typedef ValidationError
 * @property {string} message - A brief description of the error encountered.
 * @property {string} field - The field in the request that caused the error.
 */

class ServiceabilityPlatformModel {
  /** @returns {RuleConditionIntegerDetail} */
  static RuleConditionIntegerDetail() {
    return Joi.object({
      text: Joi.string().allow("").allow(null),
      value: Joi.number().allow(null),
      stage: Joi.boolean().allow(null),
    });
  }

  /** @returns {RuleConditionStringDetail} */
  static RuleConditionStringDetail() {
    return Joi.object({
      text: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
      stage: Joi.boolean().allow(null),
    });
  }

  /** @returns {RuleResponseIntegerDetail} */
  static RuleResponseIntegerDetail() {
    return Joi.object({
      includes: Joi.array().items(
        ServiceabilityPlatformModel.RuleConditionIntegerDetail()
      ),
    });
  }

  /** @returns {RuleResponseStringDetail} */
  static RuleResponseStringDetail() {
    return Joi.object({
      includes: Joi.array().items(
        ServiceabilityPlatformModel.RuleConditionStringDetail()
      ),
    });
  }

  /** @returns {CourierPartnerRuleResponseDetailConditions} */
  static CourierPartnerRuleResponseDetailConditions() {
    return Joi.object({
      forward: ServiceabilityPlatformModel.LocationRule(),
      reverse: ServiceabilityPlatformModel.LocationRule(),
      payment_mode: ServiceabilityPlatformModel.StringComparisonOperations(),
      category_ids: ServiceabilityPlatformModel.RuleResponseIntegerDetail(),
      product_ids: ServiceabilityPlatformModel.RuleResponseIntegerDetail(),
      product_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      zone_ids: ServiceabilityPlatformModel.RuleResponseStringDetail(),
      department_ids: ServiceabilityPlatformModel.RuleResponseIntegerDetail(),
      brand_ids: ServiceabilityPlatformModel.RuleResponseIntegerDetail(),
      order_place_date: ServiceabilityPlatformModel.ArithmeticOperationsV2(),
      store_ids: ServiceabilityPlatformModel.RuleResponseIntegerDetail(),
      store_type: ServiceabilityPlatformModel.StringComparisonOperations(),
      store_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      shipment_weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      shipment_cost: ServiceabilityPlatformModel.ArithmeticOperations(),
      shipment_volumetric_weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      company_ids: ServiceabilityPlatformModel.RuleResponseIntegerDetail(),
      promise_types: ServiceabilityPlatformModel.StringComparisonOperations(),
    });
  }

  /** @returns {CourierPartnerRuleResponseDetailSchema} */
  static CourierPartnerRuleResponseDetailSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      cp_list: Joi.array().items(
        ServiceabilityPlatformModel.CourierPartnerList()
      ),
      name: Joi.string().allow("").required(),
      conditions: ServiceabilityPlatformModel.CourierPartnerRuleResponseDetailConditions().required(),
      manual_priority: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")).required(),
      type: Joi.string().allow("").required(),
      application_id: Joi.string().allow(""),
      company_id: Joi.number(),
      shipment_adjustment_type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {StoreLocationDetail} */
  static StoreLocationDetail() {
    return Joi.object({
      uid: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      parent_id: Joi.string().allow("").allow(null),
      parent_uid: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {StoreRuleLocationDetailSchema} */
  static StoreRuleLocationDetailSchema() {
    return Joi.object({
      includes: Joi.array().items(
        ServiceabilityPlatformModel.StoreLocationDetail()
      ),
    });
  }

  /** @returns {StoreRuleConditionDetailSchema} */
  static StoreRuleConditionDetailSchema() {
    return Joi.object({
      department_ids: ServiceabilityPlatformModel.RuleResponseIntegerDetail(),
      category_ids: ServiceabilityPlatformModel.RuleResponseIntegerDetail(),
      brand_ids: ServiceabilityPlatformModel.RuleResponseIntegerDetail(),
      to_location: ServiceabilityPlatformModel.StoreRuleLocationDetailSchema(),
      customer_radius: ServiceabilityPlatformModel.CustomerRadiusSchema(),
      store_type: ServiceabilityPlatformModel.StringComparisonOperations(),
      product_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      product_ids: ServiceabilityPlatformModel.RuleResponseIntegerDetail(),
      store_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      order_place_date: ServiceabilityPlatformModel.ArithmeticOperationsV2(),
      zone_ids: ServiceabilityPlatformModel.RuleResponseStringDetail(),
      company_ids: ServiceabilityPlatformModel.RuleResponseIntegerDetail(),
    });
  }

  /** @returns {StoreRuleDataDetailsSchema} */
  static StoreRuleDataDetailsSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      company_id: Joi.number(),
      application_id: Joi.string().allow(""),
      type_based_priority: Joi.array().items(Joi.string().allow("")),
      tag_based_priority: Joi.array().items(Joi.string().allow("")),
      store_priority: Joi.array().items(
        ServiceabilityPlatformModel.StorePrioritySchema()
      ),
      sort: Joi.array().items(Joi.string().allow("")),
      manual_priority: Joi.array().items(Joi.number()),
      conditions: ServiceabilityPlatformModel.StoreRuleConditionDetailSchema(),
      is_active: Joi.boolean(),
      meta_sort_priority: Joi.any().allow(null),
      meta_conditions: Joi.any().allow(null),
    });
  }

  /** @returns {OptimalLocationArticlesResponse} */
  static OptimalLocationArticlesResponse() {
    return Joi.object({
      item_id: Joi.number().required(),
      size: Joi.string().allow("").required(),
      quantity: Joi.number().required(),
      group_id: Joi.string().allow(""),
      is_primary_item: Joi.boolean(),
      meta: Joi.any(),
      article_assignment: ServiceabilityPlatformModel.ArticleAssignment().required(),
      seller_id: Joi.number(),
      ignore_locations: Joi.array().items(Joi.number()).required(),
      assign_locations: Joi.array().items(Joi.number()).required(),
      price_effective: Joi.number().required(),
      mto_quantity: Joi.number().required(),
      _id: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
    });
  }

  /** @returns {OptimalLocationAssignedStoresResponse} */
  static OptimalLocationAssignedStoresResponse() {
    return Joi.object({
      store_id: Joi.number().required(),
      articles: Joi.array()
        .items(ServiceabilityPlatformModel.OptimalLocationArticlesResponse())
        .required(),
    });
  }

  /** @returns {OptimalLocationsResponse} */
  static OptimalLocationsResponse() {
    return Joi.object({
      assigned_stores: Joi.array()
        .items(
          ServiceabilityPlatformModel.OptimalLocationAssignedStoresResponse()
        )
        .required(),
      faulty_articles: Joi.array().items(
        ServiceabilityPlatformModel.ErrorResponse()
      ),
    });
  }

  /** @returns {ArticleAssignment} */
  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
    });
  }

  /** @returns {OptimalLocationsArticles} */
  static OptimalLocationsArticles() {
    return Joi.object({
      item_id: Joi.number().required(),
      size: Joi.string().allow("").required(),
      quantity: Joi.number().required(),
      group_id: Joi.string().allow(""),
      is_primary_item: Joi.boolean(),
      meta: Joi.any(),
      article_assignment: ServiceabilityPlatformModel.ArticleAssignment().required(),
      ignore_locations: Joi.array().items(Joi.number()).required(),
      assign_locations: Joi.array().items(Joi.number()).required(),
      seller_id: Joi.number(),
    });
  }

  /** @returns {ServiceabilityLocation} */
  static ServiceabilityLocation() {
    return Joi.object({
      longitude: Joi.string().allow("").required(),
      latitude: Joi.string().allow("").required(),
    });
  }

  /** @returns {LocationDetailsServiceability} */
  static LocationDetailsServiceability() {
    return Joi.object({
      pincode: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow("").required(),
      city: Joi.string().allow(""),
      country_iso_code: Joi.string().allow("").required(),
      location: ServiceabilityPlatformModel.ServiceabilityLocation(),
    });
  }

  /** @returns {OptimlLocationsRequestSchema} */
  static OptimlLocationsRequestSchema() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      channel_type: Joi.string().allow("").required(),
      channel_identifier: Joi.string().allow(""),
      to_serviceability: ServiceabilityPlatformModel.LocationDetailsServiceability().required(),
      articles: Joi.array()
        .items(ServiceabilityPlatformModel.OptimalLocationsArticles())
        .required(),
    });
  }

  /** @returns {ErrorResponseV3} */
  static ErrorResponseV3() {
    return Joi.object({
      success: Joi.boolean(),
      error: ServiceabilityPlatformModel.ErrorObject(),
    });
  }

  /** @returns {ErrorObject} */
  static ErrorObject() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ValidateAddressRequest} */
  static ValidateAddressRequest() {
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
      name: Joi.string().allow("").allow(null),
      phone: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      country_iso_code: Joi.string().allow(""),
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
      hierarchy: Joi.array().items(
        ServiceabilityPlatformModel.CountryHierarchy()
      ),
      phone_code: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
      currency: ServiceabilityPlatformModel.CurrencyObject(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {GetCountries} */
  static GetCountries() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityPlatformModel.CountryObject()),
      page: ServiceabilityPlatformModel.Page(),
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

  /** @returns {CountryHierarchy} */
  static CountryHierarchy() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
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
      hierarchy: Joi.array().items(
        ServiceabilityPlatformModel.CountryHierarchy()
      ),
      phone_code: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
      currency: ServiceabilityPlatformModel.CurrencyObject(),
      type: Joi.string().allow(""),
      fields: ServiceabilityPlatformModel.GetCountryFields(),
    });
  }

  /** @returns {GetCountryFields} */
  static GetCountryFields() {
    return Joi.object({
      address: Joi.array()
        .items(ServiceabilityPlatformModel.GetCountryFieldsAddress())
        .required(),
      serviceability_fields: Joi.array()
        .items(Joi.string().allow(""))
        .required(),
      address_template: ServiceabilityPlatformModel.GetCountryFieldsAddressTemplate().required(),
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

  /** @returns {FieldValidation} */
  static FieldValidation() {
    return Joi.object({
      type: Joi.string().allow(""),
      regex: ServiceabilityPlatformModel.FieldValidationRegex(),
    }).allow(null);
  }

  /** @returns {FieldValidationRegex} */
  static FieldValidationRegex() {
    return Joi.object({
      value: Joi.string().allow(""),
      length: ServiceabilityPlatformModel.LengthValidation(),
    });
  }

  /** @returns {LengthValidation} */
  static LengthValidation() {
    return Joi.object({
      min: Joi.number().allow(null),
      max: Joi.number().allow(null),
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

  /** @returns {GetOneOrAllPath} */
  static GetOneOrAllPath() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {GetOneOrAllParams} */
  static GetOneOrAllParams() {
    return Joi.object({
      path: ServiceabilityPlatformModel.GetOneOrAllPath(),
      query: ServiceabilityPlatformModel.GetOneOrAllQuery(),
    });
  }

  /** @returns {GetOneOrAll} */
  static GetOneOrAll() {
    return Joi.object({
      operation_id: Joi.string().allow(""),
      params: ServiceabilityPlatformModel.GetOneOrAllParams(),
    }).allow(null);
  }

  /** @returns {GetCountryFieldsAddressValues} */
  static GetCountryFieldsAddressValues() {
    return Joi.object({
      get_one: ServiceabilityPlatformModel.GetOneOrAll(),
      get_all: ServiceabilityPlatformModel.GetOneOrAll(),
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
      validation: ServiceabilityPlatformModel.FieldValidation(),
      values: ServiceabilityPlatformModel.GetCountryFieldsAddressValues(),
      error_text: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PincodeLatLongData} */
  static PincodeLatLongData() {
    return Joi.object({
      type: Joi.string().allow(""),
      coordinates: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {Localities} */
  static Localities() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      meta: Joi.any(),
      type: Joi.string().allow(""),
      lat_long: ServiceabilityPlatformModel.PincodeLatLongData(),
      parent_uid: Joi.string().allow("").allow(null),
      localities: Joi.array().items(
        ServiceabilityPlatformModel.LocalityParent()
      ),
    });
  }

  /** @returns {GetLocalities} */
  static GetLocalities() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityPlatformModel.Localities()),
      page: ServiceabilityPlatformModel.Page(),
    });
  }

  /** @returns {LocalityParent} */
  static LocalityParent() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      meta: Joi.any(),
      parent_ids: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      type: Joi.string().allow(""),
      serviceability: Joi.any(),
      parent_uid: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GetLocality} */
  static GetLocality() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      meta: Joi.any(),
      parent_ids: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      parent_uid: Joi.string().allow("").allow(null),
      type: Joi.string().allow(""),
      localities: Joi.array().items(
        ServiceabilityPlatformModel.LocalityParent()
      ),
    });
  }

  /** @returns {ApplicationConfigPutResponse} */
  static ApplicationConfigPutResponse() {
    return Joi.object({
      rule_ids: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")),
      manual_priority: Joi.array().items(Joi.string().allow("")),
      application_id: Joi.string().allow(""),
      company_id: Joi.number(),
    });
  }

  /** @returns {PromiseType} */
  static PromiseType() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
    });
  }

  /** @returns {BuyboxRuleConfig} */
  static BuyboxRuleConfig() {
    return Joi.object({
      store_type_priority: Joi.array().items(Joi.string().allow("")),
      store_tag_priority: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CourierPartnerConfig} */
  static CourierPartnerConfig() {
    return Joi.object({
      rule_ids: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")),
      manual_priority: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ZoneConfig} */
  static ZoneConfig() {
    return Joi.object({
      serviceability_type: Joi.string().allow(""),
      active_count: Joi.number(),
      total_count: Joi.number(),
    });
  }

  /** @returns {ApplicationConfigGetResponse} */
  static ApplicationConfigGetResponse() {
    return Joi.object({
      zones: ServiceabilityPlatformModel.ZoneConfig(),
      courier_partner_config: ServiceabilityPlatformModel.CourierPartnerConfig(),
      buybox_rule_config: ServiceabilityPlatformModel.BuyboxRuleConfig(),
      promise_config: ServiceabilityPlatformModel.PromiseConfig(),
      promise_types: Joi.array().items(
        ServiceabilityPlatformModel.PromiseType()
      ),
    });
  }

  /** @returns {ApplicationConfigPutRequest} */
  static ApplicationConfigPutRequest() {
    return Joi.object({
      rule_ids: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")),
      manual_priority: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {InstallCourierPartnerItemsSchema} */
  static InstallCourierPartnerItemsSchema() {
    return Joi.object({
      base_url: Joi.string().allow(""),
      callbacks: Joi.any(),
      contact_email: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      developed_by_name: Joi.string().allow(""),
      ext_version: Joi.string().allow(""),
      extention_type: Joi.string().allow(""),
      is_coming_soon: Joi.boolean(),
      is_hidden: Joi.boolean(),
      is_installed: Joi.boolean(),
      launch_type: Joi.string().allow(""),
      logo: Joi.any(),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      partner: Joi.any(),
      scope: Joi.array().items(Joi.string().allow("")),
      whitelisted_urls: Joi.array().items(Joi.string().allow("")),
      __v: Joi.number(),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {InstallCourierPartnerResponseSchema} */
  static InstallCourierPartnerResponseSchema() {
    return Joi.object({
      items: Joi.array().items(
        ServiceabilityPlatformModel.InstallCourierPartnerItemsSchema()
      ),
      page: ServiceabilityPlatformModel.Page(),
    });
  }

  /** @returns {UpdateZoneConfigRequest} */
  static UpdateZoneConfigRequest() {
    return Joi.object({
      serviceability_type: Joi.string().allow(""),
    });
  }

  /** @returns {ServiceabilityErrorResponse} */
  static ServiceabilityErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ApplicationServiceabilityConfig} */
  static ApplicationServiceabilityConfig() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      serviceability_type: Joi.string().allow("").required(),
      channel_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ApplicationServiceabilityConfigResponse} */
  static ApplicationServiceabilityConfigResponse() {
    return Joi.object({
      error: ServiceabilityPlatformModel.ServiceabilityErrorResponse(),
      data: ServiceabilityPlatformModel.ApplicationServiceabilityConfig(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {EntityRegionView_Request} */
  static EntityRegionView_Request() {
    return Joi.object({
      sub_type: Joi.array().items(Joi.string().allow("")).required(),
      parent_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {EntityRegionView_Error} */
  static EntityRegionView_Error() {
    return Joi.object({
      message: Joi.string().allow(""),
      value: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {EntityRegionView_page} */
  static EntityRegionView_page() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      current: Joi.number().required(),
    });
  }

  /** @returns {getAppRegionZonesResponse} */
  static getAppRegionZonesResponse() {
    return Joi.object({
      page: Joi.array()
        .items(ServiceabilityPlatformModel.PageSchema())
        .required(),
      items: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewItems())
        .required(),
    });
  }

  /** @returns {PageSchema} */
  static PageSchema() {
    return Joi.object({
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      current: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {EntityRegionView_Items} */
  static EntityRegionView_Items() {
    return Joi.object({
      sub_type: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {EntityRegionView_Response} */
  static EntityRegionView_Response() {
    return Joi.object({
      error: ServiceabilityPlatformModel.EntityRegionView_Error().required(),
      page: ServiceabilityPlatformModel.EntityRegionView_page().required(),
      data: Joi.array()
        .items(ServiceabilityPlatformModel.EntityRegionView_Items())
        .required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ListViewSummary} */
  static ListViewSummary() {
    return Joi.object({
      total_zones: Joi.number().required(),
      total_pincodes_served: Joi.number().required(),
      total_active_zones: Joi.number().required(),
    });
  }

  /** @returns {ProductSchema} */
  static ProductSchema() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {ProductDetailsSchema} */
  static ProductDetailsSchema() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      values: Joi.array()
        .items(ServiceabilityPlatformModel.DetailsSchema())
        .required(),
    });
  }

  /** @returns {StoresSchema} */
  static StoresSchema() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {StoresDetailsSchema} */
  static StoresDetailsSchema() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      values: Joi.array()
        .items(ServiceabilityPlatformModel.StoreValueDetailsSchema())
        .required(),
    });
  }

  /** @returns {DetailsSchema} */
  static DetailsSchema() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {StoreValueDetailsSchema} */
  static StoreValueDetailsSchema() {
    return Joi.object({
      text: Joi.string().allow("").required(),
      value: Joi.number().required(),
    });
  }

  /** @returns {SummarySchema} */
  static SummarySchema() {
    return Joi.object({
      stores_count: Joi.number(),
      products_count: Joi.number(),
      regions: Joi.array().items(ServiceabilityPlatformModel.RegionSchema()),
    });
  }

  /** @returns {RegionSchema} */
  static RegionSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      count: Joi.number(),
    });
  }

  /** @returns {ServiceabilityDeleteErrorResponse} */
  static ServiceabilityDeleteErrorResponse() {
    return Joi.object({
      error: Joi.array()
        .items(ServiceabilityPlatformModel.ServiceabilityErrorResponse())
        .required(),
    });
  }

  /** @returns {ListViewResponseV2} */
  static ListViewResponseV2() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewItemsV2())
        .required(),
      page: ServiceabilityPlatformModel.ZoneDataItem().required(),
    });
  }

  /** @returns {ListViewItemsV2} */
  static ListViewItemsV2() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      geo_areas: Joi.array()
        .items(ServiceabilityPlatformModel.GeoArea())
        .required(),
      slug: Joi.string().allow("").required(),
      stores: ServiceabilityPlatformModel.ListViewProductV2().required(),
      is_active: Joi.boolean().required(),
      product: ServiceabilityPlatformModel.ListViewProductV2().required(),
      company_id: Joi.number().required(),
      application_id: Joi.string().allow("").required(),
      created_by: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      modified_by: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      stage: Joi.string().allow(""),
      summary: ServiceabilityPlatformModel.Summary(),
    });
  }

  /** @returns {Summary} */
  static Summary() {
    return Joi.object({
      stores_count: Joi.number(),
      products_count: Joi.number(),
      regions: Joi.array().items(ServiceabilityPlatformModel.RegionSchema()),
    });
  }

  /** @returns {GeoArea} */
  static GeoArea() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      type: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {ListViewProductV2} */
  static ListViewProductV2() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {ZoneDataItem} */
  static ZoneDataItem() {
    return Joi.object({
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      current: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ListViewProduct} */
  static ListViewProduct() {
    return Joi.object({
      count: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ListViewChannels} */
  static ListViewChannels() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      channel_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ListViewItems} */
  static ListViewItems() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      stores_count: Joi.number().required(),
      is_active: Joi.boolean().required(),
      regions_count: Joi.number().required(),
      company_id: Joi.number().required(),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewChannels())
        .required(),
    });
  }

  /** @returns {ListViewResponse} */
  static ListViewResponse() {
    return Joi.object({
      page: ServiceabilityPlatformModel.ZoneDataItem().required(),
      items: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewItems())
        .required(),
    });
  }

  /** @returns {CompanyStoreView_PageItems} */
  static CompanyStoreView_PageItems() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      current: Joi.number().required(),
    });
  }

  /** @returns {CompanyStoreView_Response} */
  static CompanyStoreView_Response() {
    return Joi.object({
      page: Joi.array()
        .items(ServiceabilityPlatformModel.CompanyStoreView_PageItems())
        .required(),
      items: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {GetZoneDataViewChannels} */
  static GetZoneDataViewChannels() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      channel_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ZoneProductTypes} */
  static ZoneProductTypes() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {ZoneMappingType} */
  static ZoneMappingType() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      pincode: Joi.array().items(Joi.string().allow("")),
      state: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {UpdateZoneDataV2} */
  static UpdateZoneDataV2() {
    return Joi.object({
      zone_id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      geo_areas: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      application_id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      product: ServiceabilityPlatformModel.ProductSchema(),
      stores: ServiceabilityPlatformModel.StoresSchema(),
    });
  }

  /** @returns {ZoneUpdateSuccessResponse} */
  static ZoneUpdateSuccessResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      type: Joi.string().allow("").required(),
      application_id: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      geo_areas: Joi.array().items(Joi.string().allow("")).required(),
      product: ServiceabilityPlatformModel.ProductSchema().required(),
      stores: ServiceabilityPlatformModel.StoresSchema().required(),
      zone_id: Joi.string().allow("").required(),
      created_by: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      modified_by: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
    });
  }

  /** @returns {ZoneDeleteSuccessResponse} */
  static ZoneDeleteSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {UpdateZoneData} */
  static UpdateZoneData() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.GetZoneDataViewChannels())
        .required(),
      product: ServiceabilityPlatformModel.ZoneProductTypes().required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      region_type: Joi.string().allow("").required(),
      mapping: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneMappingType())
        .required(),
      assignment_preference: Joi.string().allow(""),
    });
  }

  /** @returns {ZoneUpdateRequest} */
  static ZoneUpdateRequest() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),
      data: ServiceabilityPlatformModel.UpdateZoneData().required(),
    });
  }

  /** @returns {ZoneSuccessResponse} */
  static ZoneSuccessResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {GetZoneDataViewItems} */
  static GetZoneDataViewItems() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      company_id: Joi.number(),
      is_active: Joi.boolean().required(),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.GetZoneDataViewChannels())
        .required(),
      product: ServiceabilityPlatformModel.ZoneProductTypes().required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      region_type: Joi.string().allow(""),
      mapping: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneMappingType())
        .required(),
      assignment_preference: Joi.string().allow(""),
      stores_count: Joi.number().required(),
    });
  }

  /** @returns {GetSingleZoneDataViewResponse} */
  static GetSingleZoneDataViewResponse() {
    return Joi.object({
      data: ServiceabilityPlatformModel.GetZoneDataViewItems().required(),
    });
  }

  /** @returns {GetZoneByIdSchema} */
  static GetZoneByIdSchema() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      product: ServiceabilityPlatformModel.ProductSchema().required(),
      stores: ServiceabilityPlatformModel.StoresSchema().required(),
      created_by: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      overlapping_file_url: Joi.string().allow("").allow(null),
      geo_areas: Joi.array().items(Joi.string().allow("")).required(),
      type: Joi.string().allow("").required(),
      overlapping_zone_names: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {GetZoneByIdDetailsSchema} */
  static GetZoneByIdDetailsSchema() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      product: ServiceabilityPlatformModel.ProductDetailsSchema().required(),
      stores: ServiceabilityPlatformModel.StoresDetailsSchema().required(),
      stage: Joi.string().allow(""),
      overlapping_file_url: Joi.string().allow("").allow(null),
      geo_areas: Joi.array()
        .items(ServiceabilityPlatformModel.GeoAreaDetailsSchema())
        .required(),
      type: Joi.string().allow("").required(),
      overlapping_zone_names: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {GeoAreaDetailsSchema} */
  static GeoAreaDetailsSchema() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreateZoneV2Data} */
  static CreateZoneV2Data() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      slug: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      application_id: Joi.string().allow("").required(),
      geo_areas: Joi.array().items(Joi.string().allow("")).required(),
      stores: ServiceabilityPlatformModel.ZoneStores().required(),
      product: ServiceabilityPlatformModel.ZoneProduct().required(),
    });
  }

  /** @returns {ZoneBulkExport} */
  static ZoneBulkExport() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
    });
  }

  /** @returns {GetZoneBulkExport} */
  static GetZoneBulkExport() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityPlatformModel.ZoneBulkItem()),
    });
  }

  /** @returns {ZoneBulkItem} */
  static ZoneBulkItem() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      file_path: Joi.string().allow("").allow(null),
      total: Joi.number(),
      failed: Joi.number(),
      error_file_url: Joi.string().allow("").allow(null),
      action: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      type: Joi.string().allow(""),
      stage: Joi.string().allow(""),
    });
  }

  /** @returns {CreateBulkZoneData} */
  static CreateBulkZoneData() {
    return Joi.object({
      file_url: Joi.string().allow(""),
      product_type: Joi.string().allow(""),
    });
  }

  /** @returns {ZoneStores} */
  static ZoneStores() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {ZoneProduct} */
  static ZoneProduct() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {ZoneResponseV2} */
  static ZoneResponseV2() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      type: Joi.string().allow("").required(),
      application_id: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      geo_areas: Joi.array().items(Joi.string().allow("")).required(),
      stores: ServiceabilityPlatformModel.ListViewProductV2().required(),
      product: ServiceabilityPlatformModel.ListViewProductV2().required(),
      created_by: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      modified_by: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      stage: Joi.string().allow("").required(),
      zone_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreateBulkZoneResponse} */
  static CreateBulkZoneResponse() {
    return Joi.object({
      zone_id: Joi.string().allow(""),
    });
  }

  /** @returns {GetBulkZoneHistory} */
  static GetBulkZoneHistory() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityPlatformModel.BulkZoneItems()),
      page: ServiceabilityPlatformModel.PageV2(),
    });
  }

  /** @returns {BulkZoneItems} */
  static BulkZoneItems() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      error_file_url: Joi.string().allow("").allow(null),
      file_path: Joi.string().allow(""),
      file_name: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_by: Joi.string().allow("").allow(null),
      stage: Joi.string().allow(""),
    });
  }

  /** @returns {PageV2} */
  static PageV2() {
    return Joi.object({
      type: Joi.string().allow(""),
      size: Joi.number(),
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
    });
  }

  /** @returns {BulkCreateZoneExport} */
  static BulkCreateZoneExport() {
    return Joi.object({
      placeholder: Joi.string().allow(""),
    });
  }

  /** @returns {CreateZoneData} */
  static CreateZoneData() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.GetZoneDataViewChannels())
        .required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      region_type: Joi.string().allow("").required(),
      mapping: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneMappingType())
        .required(),
      assignment_preference: Joi.string().allow(""),
    });
  }

  /** @returns {ZoneResponse} */
  static ZoneResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      zone_id: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {GetZoneFromPincodeViewRequest} */
  static GetZoneFromPincodeViewRequest() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
    });
  }

  /** @returns {Zone} */
  static Zone() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.string().allow("")).required(),
      slug: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      assignment_preference: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetZoneFromPincodeViewResponse} */
  static GetZoneFromPincodeViewResponse() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),
      zones: Joi.array().items(ServiceabilityPlatformModel.Zone()).required(),
    });
  }

  /** @returns {GetZoneFromApplicationIdViewResponse} */
  static GetZoneFromApplicationIdViewResponse() {
    return Joi.object({
      page: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneDataItem())
        .required(),
      items: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewItems())
        .required(),
    });
  }

  /** @returns {ServiceabilityPageResponse} */
  static ServiceabilityPageResponse() {
    return Joi.object({
      type: Joi.string().allow(""),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      current: Joi.number(),
    });
  }

  /** @returns {MobileNo} */
  static MobileNo() {
    return Joi.object({
      number: Joi.string().allow(""),
      country_code: Joi.number(),
    });
  }

  /** @returns {ManagerResponse} */
  static ManagerResponse() {
    return Joi.object({
      email: Joi.string().allow(""),
      mobile_no: ServiceabilityPlatformModel.MobileNo(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ModifiedByResponse} */
  static ModifiedByResponse() {
    return Joi.object({
      username: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {IntegrationTypeResponse} */
  static IntegrationTypeResponse() {
    return Joi.object({
      inventory: Joi.string().allow(""),
      order: Joi.string().allow(""),
    });
  }

  /** @returns {ProductReturnConfigResponse} */
  static ProductReturnConfigResponse() {
    return Joi.object({
      on_same_store: Joi.boolean(),
    });
  }

  /** @returns {ContactNumberResponse} */
  static ContactNumberResponse() {
    return Joi.object({
      number: Joi.string().allow(""),
      country_code: Joi.number(),
    });
  }

  /** @returns {AddressResponse} */
  static AddressResponse() {
    return Joi.object({
      city: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      pincode: Joi.number(),
      address2: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
    });
  }

  /** @returns {CreatedByResponse} */
  static CreatedByResponse() {
    return Joi.object({
      username: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {EwayBillResponse} */
  static EwayBillResponse() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {EinvoiceResponse} */
  static EinvoiceResponse() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {GstCredentialsResponse} */
  static GstCredentialsResponse() {
    return Joi.object({
      e_waybill: ServiceabilityPlatformModel.EwayBillResponse(),
      e_invoice: ServiceabilityPlatformModel.EinvoiceResponse(),
    });
  }

  /** @returns {WarningsResponse} */
  static WarningsResponse() {
    return Joi.object({
      store_address: Joi.string().allow(""),
    });
  }

  /** @returns {OpeningClosing} */
  static OpeningClosing() {
    return Joi.object({
      minute: Joi.number(),
      hour: Joi.number(),
    });
  }

  /** @returns {TimmingResponse} */
  static TimmingResponse() {
    return Joi.object({
      open: Joi.boolean(),
      weekday: Joi.string().allow(""),
      closing: ServiceabilityPlatformModel.OpeningClosing(),
      opening: ServiceabilityPlatformModel.OpeningClosing(),
    });
  }

  /** @returns {DocumentsResponse} */
  static DocumentsResponse() {
    return Joi.object({
      legal_name: Joi.string().allow(""),
      value: Joi.string().allow(""),
      type: Joi.string().allow(""),
      verified: Joi.boolean(),
    });
  }

  /** @returns {Dp} */
  static Dp() {
    return Joi.object({
      fm_priority: Joi.number(),
      rvp_priority: Joi.number(),
      lm_priority: Joi.number(),
      internal_account_id: Joi.string().allow(""),
      area_code: Joi.number().allow(null),
      payment_mode: Joi.string().allow(""),
      operations: Joi.array().items(Joi.string().allow("")),
      external_account_id: Joi.string().allow("").allow(null),
      transport_mode: Joi.string().allow(""),
      assign_dp_from_sb: Joi.boolean(),
    });
  }

  /** @returns {LogisticsResponse} */
  static LogisticsResponse() {
    return Joi.object({
      override: Joi.boolean(),
      dp: ServiceabilityPlatformModel.Dp(),
    });
  }

  /** @returns {ItemResponse} */
  static ItemResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      manager: ServiceabilityPlatformModel.ManagerResponse(),
      modified_by: ServiceabilityPlatformModel.ModifiedByResponse(),
      integration_type: ServiceabilityPlatformModel.IntegrationTypeResponse(),
      verified_on: Joi.string().allow(""),
      product_return_config: ServiceabilityPlatformModel.ProductReturnConfigResponse(),
      contact_numbers: Joi.array().items(
        ServiceabilityPlatformModel.ContactNumberResponse()
      ),
      verified_by: ServiceabilityPlatformModel.ModifiedByResponse(),
      stage: Joi.string().allow(""),
      address: ServiceabilityPlatformModel.AddressResponse(),
      modified_on: Joi.string().allow(""),
      created_by: ServiceabilityPlatformModel.CreatedByResponse(),
      gst_credentials: ServiceabilityPlatformModel.GstCredentialsResponse(),
      display_name: Joi.string().allow(""),
      company_id: Joi.number(),
      uid: Joi.number(),
      _custom_json: Joi.any(),
      code: Joi.string().allow(""),
      warnings: ServiceabilityPlatformModel.WarningsResponse(),
      name: Joi.string().allow(""),
      timing: Joi.array().items(ServiceabilityPlatformModel.TimmingResponse()),
      documents: Joi.array().items(
        ServiceabilityPlatformModel.DocumentsResponse()
      ),
      store_type: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      company: Joi.number(),
      _cls: Joi.string().allow(""),
      logistics: ServiceabilityPlatformModel.LogisticsResponse(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {GetStoresViewResponse} */
  static GetStoresViewResponse() {
    return Joi.object({
      page: ServiceabilityPlatformModel.ServiceabilityPageResponse().required(),
      items: Joi.array().items(ServiceabilityPlatformModel.ItemResponse()),
    });
  }

  /** @returns {ReAssignStoreRequest} */
  static ReAssignStoreRequest() {
    return Joi.object({
      to_pincode: Joi.string().allow("").required(),
      identifier: Joi.string().allow("").required(),
      configuration: Joi.any().required(),
      ignored_locations: Joi.array().items(Joi.string().allow("")).required(),
      articles: Joi.array().items(Joi.any()).required(),
    });
  }

  /** @returns {ServiceabilityZoneErrorResult} */
  static ServiceabilityZoneErrorResult() {
    return Joi.object({
      error: Joi.array()
        .items(ServiceabilityPlatformModel.ServiceabilityErrorResponse())
        .required(),
    });
  }

  /** @returns {ReAssignStoreResponse} */
  static ReAssignStoreResponse() {
    return Joi.object({
      to_pincode: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      error: Joi.any().required(),
      articles: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {PincodeMopData} */
  static PincodeMopData() {
    return Joi.object({
      pincodes: Joi.array().items(Joi.number()).required(),
      country: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
    });
  }

  /** @returns {PincodeMopUpdateResponse} */
  static PincodeMopUpdateResponse() {
    return Joi.object({
      pincode: Joi.number().required(),
      channel_id: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
    });
  }

  /** @returns {PincodeMOPresponse} */
  static PincodeMOPresponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      status_code: Joi.number().required(),
      country: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
      pincodes: Joi.array().items(Joi.number()),
      updated_pincodes: Joi.array().items(
        ServiceabilityPlatformModel.PincodeMopUpdateResponse()
      ),
    });
  }

  /** @returns {CommonError} */
  static CommonError() {
    return Joi.object({
      status_code: Joi.number(),
      error: Joi.array().items(ServiceabilityPlatformModel.ErrorResponse()),
      success: Joi.boolean(),
    });
  }

  /** @returns {MoPCommonError} */
  static MoPCommonError() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      status_code: Joi.number(),
      error: Joi.array().items(ServiceabilityPlatformModel.ErrorResponse()),
      success: Joi.boolean(),
    });
  }

  /** @returns {PincodeMopBulkData} */
  static PincodeMopBulkData() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      s3_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {PincodeBulkViewResponse} */
  static PincodeBulkViewResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      s3_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {PincodeCodStatusListingRequest} */
  static PincodeCodStatusListingRequest() {
    return Joi.object({
      country: Joi.string().allow(""),
      is_active: Joi.boolean(),
      pincode: Joi.number().allow(null),
      current: Joi.number(),
      page_size: Joi.number(),
    });
  }

  /** @returns {PincodeCodDataSchema} */
  static PincodeCodDataSchema() {
    return Joi.object({
      pincode: Joi.string().allow(""),
      active: Joi.boolean(),
    });
  }

  /** @returns {PincodeCodStatusListingResponse} */
  static PincodeCodStatusListingResponse() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      data: Joi.array()
        .items(ServiceabilityPlatformModel.PincodeCodDataSchema())
        .required(),
      success: Joi.boolean().required(),
      errors: Joi.array().items(ServiceabilityPlatformModel.Error()),
      page: ServiceabilityPlatformModel.PincodeCodStatusListingPage().required(),
      summary: ServiceabilityPlatformModel.PincodeCodStatusListingSummary().required(),
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

  /** @returns {PincodeCodStatusListingPage} */
  static PincodeCodStatusListingPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      current: Joi.number().required(),
    });
  }

  /** @returns {PincodeCodStatusListingSummary} */
  static PincodeCodStatusListingSummary() {
    return Joi.object({
      total_active_pincodes: Joi.number().required(),
      total_inactive_pincodes: Joi.number().required(),
    });
  }

  /** @returns {PincodeMopUpdateAuditHistoryRequest} */
  static PincodeMopUpdateAuditHistoryRequest() {
    return Joi.object({
      entity_type: Joi.string().allow("").required(),
      file_name: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeMopUpdateAuditHistoryPaging} */
  static PincodeMopUpdateAuditHistoryPaging() {
    return Joi.object({
      type: Joi.string().allow(""),
      size: Joi.number(),
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
    });
  }

  /** @returns {PincodeMopUpdateAuditHistoryResponse} */
  static PincodeMopUpdateAuditHistoryResponse() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      error_file_s3_url: Joi.string().allow(""),
      s3_url: Joi.string().allow(""),
      file_name: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {PincodeMopUpdateAuditHistoryResponseData} */
  static PincodeMopUpdateAuditHistoryResponseData() {
    return Joi.object({
      entity_type: Joi.string().allow(""),
      page: ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryPaging().required(),
      data: Joi.array()
        .items(
          ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponse()
        )
        .required(),
    });
  }

  /** @returns {ArithmeticOperations} */
  static ArithmeticOperations() {
    return Joi.object({
      lt: Joi.number().allow(null),
      gt: Joi.number().allow(null),
      lte: Joi.number().allow(null),
      gte: Joi.number().allow(null),
    }).allow(null);
  }

  /** @returns {SchemeRulesFeatures} */
  static SchemeRulesFeatures() {
    return Joi.object({
      quality_check: Joi.boolean(),
      quick_response_code: Joi.boolean(),
      e_waybill: Joi.boolean(),
      multi_part_shipments: Joi.boolean(),
      flammable: Joi.boolean(),
      hazmat: Joi.boolean(),
      battery_operated: Joi.boolean(),
    });
  }

  /** @returns {SchemeRules} */
  static SchemeRules() {
    return Joi.object({
      weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      transport_type: Joi.array().items(Joi.string().allow("")),
      region: Joi.string().allow(""),
      payment_mode: Joi.array().items(Joi.string().allow("")),
      feature: ServiceabilityPlatformModel.SchemeRulesFeatures(),
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
      company_id: Joi.number(),
      scheme_rules: Joi.any(),
    });
  }

  /** @returns {BulkGeoAreaDetails} */
  static BulkGeoAreaDetails() {
    return Joi.object({
      file_url: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {BulkGeoAreaResult} */
  static BulkGeoAreaResult() {
    return Joi.object({
      geoarea_id: Joi.string().allow(""),
    });
  }

  /** @returns {BulkGeoAreaGetResponse} */
  static BulkGeoAreaGetResponse() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      file_path: Joi.string().allow("").allow(null),
      total: Joi.number(),
      failed: Joi.number(),
      error_file_url: Joi.string().allow("").allow(null),
      action: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      type: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      file_url: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GeoAreaBulkCreationResult} */
  static GeoAreaBulkCreationResult() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
    });
  }

  /** @returns {GeoAreaBulkExportResult} */
  static GeoAreaBulkExportResult() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      file_path: Joi.string().allow("").allow(null),
      total: Joi.number(),
      failed: Joi.number(),
      error_file_url: Joi.string().allow("").allow(null),
      action: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      type: Joi.string().allow(""),
      stage: Joi.string().allow(""),
    });
  }

  /** @returns {GeoAreaRequestBody} */
  static GeoAreaRequestBody() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      areas: Joi.array().items(ServiceabilityPlatformModel.Area()).required(),
      region_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {GeoAreaErrorResult} */
  static GeoAreaErrorResult() {
    return Joi.object({
      error: Joi.array().items(
        ServiceabilityPlatformModel.GeoAreaResponseDetail()
      ),
    });
  }

  /** @returns {ErrorResponseItem} */
  static ErrorResponseItem() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      error_name: Joi.string().allow("").required(),
      error_code: Joi.number().required(),
      value: Joi.string().allow("").required(),
      conflicting_areas: Joi.array()
        .items(ServiceabilityPlatformModel.ConflictingArea())
        .required(),
    });
  }

  /** @returns {ConflictingArea} */
  static ConflictingArea() {
    return Joi.object({
      geoarea_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {GeoAreaResponseDetail} */
  static GeoAreaResponseDetail() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ErrorResponseDetail} */
  static ErrorResponseDetail() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.ErrorResponseItem())
        .required(),
    });
  }

  /** @returns {GeoAreaResponseBody} */
  static GeoAreaResponseBody() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      areas: Joi.array().items(ServiceabilityPlatformModel.Area()).required(),
      region_type: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      created_by: Joi.string().allow("").required(),
      modified_by: Joi.string().allow("").required(),
      geoarea_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {GeoAreaPutResponseBody} */
  static GeoAreaPutResponseBody() {
    return Joi.object({
      name: Joi.string().allow(""),
      geoarea_id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      is_active: Joi.boolean(),
      areas: Joi.array().items(ServiceabilityPlatformModel.Area()),
      region_type: Joi.string().allow(""),
      type: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
      upload_type: Joi.string().allow(""),
    });
  }

  /** @returns {Area} */
  static Area() {
    return Joi.object({
      regions: Joi.array().items(Joi.string().allow("")),
      country: Joi.string().allow(""),
    });
  }

  /** @returns {Region} */
  static Region() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
      sub_type: Joi.string().allow("").required(),
      parent_id: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {RegionV2} */
  static RegionV2() {
    return Joi.object({
      uid: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      parent_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Country} */
  static Country() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {AreaExpanded} */
  static AreaExpanded() {
    return Joi.object({
      country: ServiceabilityPlatformModel.Country().required(),
      regions: Joi.array()
        .items(ServiceabilityPlatformModel.Region())
        .required(),
    });
  }

  /** @returns {AreaExpandedV2} */
  static AreaExpandedV2() {
    return Joi.object({
      country: ServiceabilityPlatformModel.Country().required(),
      regions: Joi.array()
        .items(ServiceabilityPlatformModel.RegionV2())
        .required(),
    });
  }

  /** @returns {GeoAreaResponse} */
  static GeoAreaResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      application_id: Joi.string().allow(""),
      company_id: Joi.number(),
      geoarea_id: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      type: Joi.string().allow("").required(),
      region_type: Joi.string().allow("").required(),
      areas: Joi.array()
        .items(ServiceabilityPlatformModel.AreaExpanded())
        .required(),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
    });
  }

  /** @returns {GeoAreaGetResponseBody} */
  static GeoAreaGetResponseBody() {
    return Joi.object({
      items: Joi.array().items(
        ServiceabilityPlatformModel.GeoAreaItemResponse()
      ),
      page: ServiceabilityPlatformModel.Page2(),
    });
  }

  /** @returns {GeoAreaItemResponse} */
  static GeoAreaItemResponse() {
    return Joi.object({
      company_id: Joi.number().required(),
      application_id: Joi.string().allow("").required(),
      geoarea_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      region_type: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      areas: Joi.array()
        .items(ServiceabilityPlatformModel.AreaExpandedV2())
        .required(),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
    });
  }

  /** @returns {ErrorResponseV2} */
  static ErrorResponseV2() {
    return Joi.object({
      success: Joi.boolean().required(),
      error: Joi.string().allow("").required(),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      value: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {PackageMaterialNotFound} */
  static PackageMaterialNotFound() {
    return Joi.object({
      status_code: Joi.number(),
      success: Joi.boolean(),
    });
  }

  /** @returns {PackageMaterialsErrorResponse} */
  static PackageMaterialsErrorResponse() {
    return Joi.object({
      value: Joi.string().allow(""),
      message: Joi.string().allow(""),
      type: Joi.string().allow(""),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {CourierPartnerAccountFailureResponse} */
  static CourierPartnerAccountFailureResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      error: Joi.array()
        .items(ServiceabilityPlatformModel.ErrorResponse())
        .required(),
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
      total: Joi.number(),
    });
  }

  /** @returns {Page2} */
  static Page2() {
    return Joi.object({
      size: Joi.number().required(),
      item_total: Joi.number().required(),
      type: Joi.string().allow("").required(),
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
    });
  }

  /** @returns {CourierPartnerList} */
  static CourierPartnerList() {
    return Joi.object({
      extension_id: Joi.string().allow(""),
      account_id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      is_self_ship: Joi.boolean(),
      scheme_rules: Joi.any(),
      stage: Joi.string().allow(""),
    });
  }

  /** @returns {LocationRuleValues} */
  static LocationRuleValues() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
      sub_type: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      parent_uid: Joi.string().allow(""),
      parent_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {LocationRuleValuesV2} */
  static LocationRuleValuesV2() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      sub_type: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      parent_uid: Joi.string().allow(""),
      parent_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {LocationRule} */
  static LocationRule() {
    return Joi.object({
      type: Joi.string().allow(""),
      includes: Joi.array().items(
        ServiceabilityPlatformModel.LocationRuleValues()
      ),
    });
  }

  /** @returns {LocationRuleV2} */
  static LocationRuleV2() {
    return Joi.object({
      type: Joi.string().allow(""),
      includes: Joi.array().items(
        ServiceabilityPlatformModel.LocationRuleValuesV2()
      ),
    });
  }

  /** @returns {StringComparisonOperations} */
  static StringComparisonOperations() {
    return Joi.object({
      includes: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {IntComparisonOperations} */
  static IntComparisonOperations() {
    return Joi.object({
      includes: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {CourierPartnerRuleConditions} */
  static CourierPartnerRuleConditions() {
    return Joi.object({
      forward: ServiceabilityPlatformModel.LocationRule(),
      reverse: ServiceabilityPlatformModel.LocationRule(),
      payment_mode: ServiceabilityPlatformModel.StringComparisonOperations(),
      category_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      product_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      product_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      zone_ids: ServiceabilityPlatformModel.StringComparisonOperations(),
      department_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      brand_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      order_place_date: ServiceabilityPlatformModel.ArithmeticOperationsV2(),
      store_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      store_type: ServiceabilityPlatformModel.StringComparisonOperations(),
      store_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      shipment_weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      shipment_cost: ServiceabilityPlatformModel.ArithmeticOperations(),
      shipment_volumetric_weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      company_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      promise_types: ServiceabilityPlatformModel.StringComparisonOperations(),
    });
  }

  /** @returns {CourierPartnerRuleResponseConditions} */
  static CourierPartnerRuleResponseConditions() {
    return Joi.object({
      forward: ServiceabilityPlatformModel.LocationRule(),
      reverse: ServiceabilityPlatformModel.LocationRule(),
      payment_mode: ServiceabilityPlatformModel.StringComparisonOperations(),
      category_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      product_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      product_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      zone_ids: ServiceabilityPlatformModel.StringComparisonOperations(),
      department_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      brand_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      order_place_date: ServiceabilityPlatformModel.ArithmeticOperationsV2(),
      store_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      store_type: ServiceabilityPlatformModel.StringComparisonOperations(),
      store_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      shipment_weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      shipment_cost: ServiceabilityPlatformModel.ArithmeticOperations(),
      shipment_volumetric_weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      company_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      promise_types: ServiceabilityPlatformModel.StringComparisonOperations(),
    });
  }

  /** @returns {CourierPartnerRule} */
  static CourierPartnerRule() {
    return Joi.object({
      id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      company_id: Joi.number(),
      is_active: Joi.boolean().required(),
      cp_list: Joi.array().items(
        ServiceabilityPlatformModel.CourierPartnerList()
      ),
      name: Joi.string().allow("").required(),
      conditions: ServiceabilityPlatformModel.CourierPartnerRuleConditions().required(),
      manual_priority: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")).required(),
      shipment_adjustment_type: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {CourierPartnerRuleResponse} */
  static CourierPartnerRuleResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      cp_list: Joi.array().items(
        ServiceabilityPlatformModel.CourierPartnerList()
      ),
      name: Joi.string().allow("").required(),
      conditions: ServiceabilityPlatformModel.CourierPartnerRuleResponseConditions().required(),
      manual_priority: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")).required(),
      shipment_adjustment_type: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {CourierPartnerRuleResponseSchema} */
  static CourierPartnerRuleResponseSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      cp_list: Joi.array().items(
        ServiceabilityPlatformModel.CourierPartnerList()
      ),
      name: Joi.string().allow("").required(),
      conditions: ServiceabilityPlatformModel.CourierPartnerRuleResponseConditions().required(),
      manual_priority: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")).required(),
      type: Joi.string().allow("").required(),
      application_id: Joi.string().allow(""),
      company_id: Joi.number(),
      shipment_adjustment_type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {FailureResponse} */
  static FailureResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      error: Joi.array()
        .items(ServiceabilityPlatformModel.ErrorResponse())
        .required(),
    });
  }

  /** @returns {CourierPartnerRulesListResponse} */
  static CourierPartnerRulesListResponse() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.CourierPartnerRuleResponseSchema())
        .required(),
      page: ServiceabilityPlatformModel.Page().required(),
    });
  }

  /** @returns {CompanyConfig} */
  static CompanyConfig() {
    return Joi.object({
      company_id: Joi.number(),
      sort: Joi.array().items(Joi.string().allow("")),
      logistics_as_actual: Joi.string().allow(""),
    });
  }

  /** @returns {StorePromiseAttributeConfig} */
  static StorePromiseAttributeConfig() {
    return Joi.object({
      is_operational_timing_enabled: Joi.boolean(),
      is_order_acceptance_timing_enabled: Joi.boolean(),
      is_average_processing_time: Joi.boolean(),
      is_holiday_enabled: Joi.boolean(),
    });
  }

  /** @returns {DeliveryServiceAttributeConfig} */
  static DeliveryServiceAttributeConfig() {
    return Joi.object({
      is_pickup_cutoff_time_enabled: Joi.boolean(),
      is_service_tat_enabled: Joi.boolean(),
      is_holiday_enabled: Joi.boolean(),
    });
  }

  /** @returns {BufferField} */
  static BufferField() {
    return Joi.object({
      unit: Joi.string().allow(""),
      value: Joi.number(),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {PromiseConfig} */
  static PromiseConfig() {
    return Joi.object({
      store_attributes: ServiceabilityPlatformModel.StorePromiseAttributeConfig(),
      delivery_service_attributes: ServiceabilityPlatformModel.DeliveryServiceAttributeConfig(),
      buffer_field: ServiceabilityPlatformModel.BufferField(),
    });
  }

  /** @returns {ApplicationConfig} */
  static ApplicationConfig() {
    return Joi.object({
      rule_ids: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")),
      application_id: Joi.string().allow(""),
      company_id: Joi.number(),
      manual_priority: Joi.array().items(Joi.string().allow("")),
      zones: ServiceabilityPlatformModel.ZoneConfig(),
      buybox_rule_config: ServiceabilityPlatformModel.BuyboxRuleConfig(),
      promise_types: Joi.array().items(
        ServiceabilityPlatformModel.PromiseType()
      ),
      promise_config: ServiceabilityPlatformModel.PromiseConfig(),
    });
  }

  /** @returns {ApplicationConfigPatchRequest} */
  static ApplicationConfigPatchRequest() {
    return Joi.object({
      courier_partner_config: ServiceabilityPlatformModel.CourierPartnerConfig(),
      buybox_rule_config: ServiceabilityPlatformModel.BuyboxRuleConfig(),
      promise_config: ServiceabilityPlatformModel.PromiseConfig(),
    });
  }

  /** @returns {ApplicationConfigPatchResponse} */
  static ApplicationConfigPatchResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {BulkRegionJobSerializer} */
  static BulkRegionJobSerializer() {
    return Joi.object({
      file_path: Joi.string().allow(""),
      country: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkRegionResponseItemData} */
  static BulkRegionResponseItemData() {
    return Joi.object({
      file_path: Joi.string().allow("").required(),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.any()),
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

  /** @returns {BulkRegionResponse} */
  static BulkRegionResponse() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.BulkRegionResponseItemData())
        .required(),
      page: ServiceabilityPlatformModel.Page().required(),
    });
  }

  /** @returns {SelfShipResponse} */
  static SelfShipResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      tat: Joi.number().required(),
    });
  }

  /** @returns {ApplicationSelfShipConfig} */
  static ApplicationSelfShipConfig() {
    return Joi.object({
      self_ship: Joi.any().allow(null),
    });
  }

  /** @returns {ApplicationSelfShipConfigResponse} */
  static ApplicationSelfShipConfigResponse() {
    return Joi.object({
      error: ServiceabilityPlatformModel.ServiceabilityErrorResponse(),
      data: ServiceabilityPlatformModel.ApplicationSelfShipConfig(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {StoreRuleConfigData} */
  static StoreRuleConfigData() {
    return Joi.object({
      rule_ids: Joi.array().items(Joi.string().allow("")),
      type_based_priority: Joi.array().items(Joi.string().allow("")),
      tag_based_priority: Joi.array().items(Joi.string().allow("")),
      store_priority: Joi.array().items(
        ServiceabilityPlatformModel.StorePrioritySchema()
      ),
      sort: Joi.array().items(Joi.string().allow("")),
      manual_priority: Joi.array().items(Joi.number()),
      meta_sort_priority: Joi.any(),
    });
  }

  /** @returns {CustomerRadiusSchema} */
  static CustomerRadiusSchema() {
    return Joi.object({
      unit: Joi.string().allow("").required(),
      lt: Joi.number(),
      lte: Joi.number(),
      gt: Joi.number(),
      gte: Joi.number(),
    });
  }

  /** @returns {StoreRuleConditionSchema} */
  static StoreRuleConditionSchema() {
    return Joi.object({
      department_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      category_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      brand_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      to_location: ServiceabilityPlatformModel.LocationRuleV2(),
      customer_radius: ServiceabilityPlatformModel.CustomerRadiusSchema(),
      store_type: ServiceabilityPlatformModel.StringComparisonOperations(),
      product_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      product_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      store_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      order_place_date: ServiceabilityPlatformModel.ArithmeticOperationsV2(),
      zone_ids: ServiceabilityPlatformModel.StringComparisonOperations(),
    });
  }

  /** @returns {StoreRuleDataSchema} */
  static StoreRuleDataSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      company_id: Joi.number(),
      application_id: Joi.string().allow(""),
      type_based_priority: Joi.array().items(Joi.string().allow("")),
      tag_based_priority: Joi.array().items(Joi.string().allow("")),
      store_priority: Joi.array().items(
        ServiceabilityPlatformModel.StorePrioritySchema()
      ),
      sort: Joi.array().items(Joi.string().allow("")),
      manual_priority: Joi.array().items(Joi.number()),
      meta_sort_priority: Joi.any(),
      meta_conditions: Joi.any(),
      conditions: ServiceabilityPlatformModel.StoreRuleConditionSchema(),
      is_active: Joi.boolean(),
    });
  }

  /** @returns {StorePrioritySchema} */
  static StorePrioritySchema() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {GetStoreRulesApiResponse} */
  static GetStoreRulesApiResponse() {
    return Joi.object({
      items: Joi.array().items(
        ServiceabilityPlatformModel.StoreRuleDataSchema()
      ),
      page: ServiceabilityPlatformModel.Page(),
    });
  }

  /** @returns {CreateStoreRuleRequestSchema} */
  static CreateStoreRuleRequestSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      is_active: Joi.boolean(),
      conditions: ServiceabilityPlatformModel.StoreRuleConditionSchema(),
      type_based_priority: Joi.array().items(Joi.string().allow("")),
      tag_based_priority: Joi.array().items(Joi.string().allow("")),
      store_priority: Joi.array().items(
        ServiceabilityPlatformModel.StorePrioritySchema()
      ),
      manual_priority: Joi.array().items(Joi.number()),
      sort: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {StoreRuleResponseSchema} */
  static StoreRuleResponseSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      type_based_priority: Joi.array().items(Joi.string().allow("")),
      tag_based_priority: Joi.array().items(Joi.string().allow("")),
      store_priority: Joi.array().items(
        ServiceabilityPlatformModel.StorePrioritySchema()
      ),
      sort: Joi.array().items(Joi.string().allow("")),
      manual_priority: Joi.array().items(Joi.number()),
      conditions: ServiceabilityPlatformModel.StoreRuleConditionSchema(),
      is_active: Joi.boolean(),
    });
  }

  /** @returns {StoreRuleUpdateResponseSchema} */
  static StoreRuleUpdateResponseSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      type_based_priority: Joi.array().items(Joi.string().allow("")),
      tag_based_priority: Joi.array().items(Joi.string().allow("")),
      store_priority: Joi.array().items(
        ServiceabilityPlatformModel.StorePrioritySchema()
      ),
      sort: Joi.array().items(Joi.string().allow("")),
      manual_priority: Joi.array().items(Joi.number()),
      conditions: ServiceabilityPlatformModel.StoreRuleConditionSchema(),
      is_active: Joi.boolean(),
      company_id: Joi.number(),
      application_id: Joi.string().allow(""),
    });
  }

  /** @returns {ServiceabilityModel} */
  static ServiceabilityModel() {
    return Joi.object({
      lm_cod_limit: Joi.number().required(),
      is_qc: Joi.boolean().required(),
      pickup_cutoff: Joi.string().allow("").allow(null).required(),
      route_code: Joi.string().allow("").allow(null).required(),
      is_first_mile: Joi.boolean().required(),
      is_return: Joi.boolean().required(),
      is_installation: Joi.boolean().required(),
      is_last_mile: Joi.boolean().required(),
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
    });
  }

  /** @returns {CourierAccountSchemeResponse} */
  static CourierAccountSchemeResponse() {
    return Joi.object({
      name: Joi.string().allow(""),
      extension_id: Joi.string().allow(""),
      scheme_id: Joi.string().allow(""),
      weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      transport_type: Joi.string().allow(""),
      region: Joi.string().allow(""),
      delivery_type: Joi.string().allow(""),
      payment_mode: Joi.array().items(Joi.string().allow("")),
      stage: Joi.string().allow(""),
      feature: ServiceabilityPlatformModel.CourierPartnerSchemeFeatures(),
    });
  }

  /** @returns {CourierAccountResponse} */
  static CourierAccountResponse() {
    return Joi.object({
      company_id: Joi.number(),
      extension_id: Joi.string().allow(""),
      account_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      stage: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
      scheme_rules: ServiceabilityPlatformModel.CourierAccountSchemeResponse().required(),
    });
  }

  /** @returns {CompanyCourierPartnerAccountListResponse} */
  static CompanyCourierPartnerAccountListResponse() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.CourierAccountResponse())
        .required(),
      page: ServiceabilityPlatformModel.Page().required(),
    });
  }

  /** @returns {PackageMaterial} */
  static PackageMaterial() {
    return Joi.object({
      company_id: Joi.number(),
      item_id: Joi.number(),
      id: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      width: Joi.number().required(),
      height: Joi.number().required(),
      length: Joi.number().required(),
      weight: Joi.number().required(),
      auto_calculate: Joi.boolean(),
      max_weight: Joi.number(),
      package_vol_weight: Joi.number(),
      error_rate: Joi.number().required(),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.Channel())
        .required(),
      package_type: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      track_inventory: Joi.boolean(),
      rules: Joi.array().items(
        ServiceabilityPlatformModel.PackageMaterialRule()
      ),
      store_ids: Joi.array().items(Joi.number()).required(),
      mp_stores: Joi.array().items(
        ServiceabilityPlatformModel.PackageMpStores()
      ),
      media: Joi.array().items(Joi.string().allow("")),
      status: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
    });
  }

  /** @returns {PackageMaterialResponse} */
  static PackageMaterialResponse() {
    return Joi.object({
      company_id: Joi.number(),
      name: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
      item_id: Joi.number(),
      width: Joi.number().required(),
      height: Joi.number().required(),
      length: Joi.number().required(),
      rules: Joi.array().items(
        ServiceabilityPlatformModel.PackageMaterialRule()
      ),
      store_ids: Joi.array().items(Joi.number()).required(),
      weight: Joi.number().required(),
      error_rate: Joi.number().required(),
      package_type: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      media: Joi.array().items(Joi.string().allow("")),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.Channel())
        .required(),
      track_inventory: Joi.boolean(),
      is_active: Joi.boolean(),
      status: Joi.string().allow("").required(),
      max_weight: Joi.number(),
      package_vol_weight: Joi.number(),
      auto_calculate: Joi.boolean(),
      mp_stores: Joi.array().items(
        ServiceabilityPlatformModel.PackageMpStores()
      ),
    });
  }

  /** @returns {PackageMaterialRule} */
  static PackageMaterialRule() {
    return Joi.object({
      rule_id: Joi.string().allow(""),
      quantity: ServiceabilityPlatformModel.PackageMaterialRuleQuantity(),
      weight: Joi.number(),
      company_id: Joi.number(),
      is_active: Joi.boolean(),
      type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {PackageMpStores} */
  static PackageMpStores() {
    return Joi.object({
      app_name: Joi.string().allow(""),
      app_id: Joi.string().allow(""),
      store_ids: Joi.array().items(Joi.number()),
      store_data: Joi.any(),
    });
  }

  /** @returns {PackageRuleRequest} */
  static PackageRuleRequest() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      category_id: ServiceabilityPlatformModel.PackageRuleCategory(),
      product_id: ServiceabilityPlatformModel.PackageRuleProduct(),
      product_tag: ServiceabilityPlatformModel.PackageRuleProductTag(),
      department_id: ServiceabilityPlatformModel.PackageRuleDepartmentId(),
      product_attributes: ServiceabilityPlatformModel.PackageRuleProductAttributes(),
      type: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
    });
  }

  /** @returns {PackageRule} */
  static PackageRule() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
      item_id: Joi.number(),
      width: Joi.number(),
      height: Joi.number(),
      length: Joi.number(),
      rules: Joi.array().items(
        ServiceabilityPlatformModel.PackageMaterialRule()
      ),
      store_ids: Joi.array().items(Joi.number()),
      weight: Joi.number(),
      error_rate: Joi.number(),
      package_type: Joi.string().allow(""),
      size: Joi.string().allow(""),
      media: Joi.array().items(Joi.string().allow("")),
      channels: Joi.array().items(ServiceabilityPlatformModel.Channel()),
      track_inventory: Joi.boolean(),
      status: Joi.string().allow(""),
      max_weight: Joi.number(),
      package_vol_weight: Joi.number(),
      auto_calculate: Joi.boolean(),
      mp_stores: Joi.array().items(
        ServiceabilityPlatformModel.PackageMpStores()
      ),
    });
  }

  /** @returns {PackageRuleResult} */
  static PackageRuleResult() {
    return Joi.object({
      is_active: Joi.boolean(),
      company_id: Joi.number().required(),
      product_id: ServiceabilityPlatformModel.PackageRuleProduct(),
      category_id: ServiceabilityPlatformModel.PackageRuleCategory(),
      department_id: ServiceabilityPlatformModel.PackageRuleDepartmentId(),
      product_tag: ServiceabilityPlatformModel.PackageRuleProductTag(),
      product_attributes: ServiceabilityPlatformModel.PackageRuleProductAttributes(),
      name: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {Channel} */
  static Channel() {
    return Joi.object({
      type: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {PackageMaterialRuleList} */
  static PackageMaterialRuleList() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityPlatformModel.PackageRuleResult()),
      page: ServiceabilityPlatformModel.Page(),
    });
  }

  /** @returns {PackageMaterialList} */
  static PackageMaterialList() {
    return Joi.object({
      items: Joi.any(),
      page: ServiceabilityPlatformModel.Page(),
    });
  }

  /** @returns {PackageRuleProduct} */
  static PackageRuleProduct() {
    return Joi.object({
      includes: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {PackageRuleProductTag} */
  static PackageRuleProductTag() {
    return Joi.object({
      includes: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PackageRuleCategory} */
  static PackageRuleCategory() {
    return Joi.object({
      includes: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {PackageRuleProductAttributes} */
  static PackageRuleProductAttributes() {
    return Joi.object({
      includes: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
    });
  }

  /** @returns {PackageRuleDepartmentId} */
  static PackageRuleDepartmentId() {
    return Joi.object({
      includes: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {PackageMaterialRuleQuantity} */
  static PackageMaterialRuleQuantity() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {RulePriorityRequest} */
  static RulePriorityRequest() {
    return Joi.object({
      rule_id: Joi.string().allow("").required(),
      priority: Joi.number().required(),
    });
  }

  /** @returns {RulePriorityResponse} */
  static RulePriorityResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {CompanySelfShip} */
  static CompanySelfShip() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      tat: Joi.number().required(),
      unit: Joi.string().allow("").required(),
    });
  }

  /** @returns {ArithmeticOperationsV2} */
  static ArithmeticOperationsV2() {
    return Joi.object({
      lt: Joi.string().allow(""),
      gt: Joi.string().allow(""),
      lte: Joi.string().allow(""),
      gte: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyConfigurationShema} */
  static CompanyConfigurationShema() {
    return Joi.object({
      sort: Joi.array().items(Joi.string().allow("")),
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
module.exports = ServiceabilityPlatformModel;
