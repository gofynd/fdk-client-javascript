export = ServiceabilityPlatformModel;
/**
 * @typedef GetExportPriceZoneHistory
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
 * @typedef PriceBulkGeoAreaExportRequestPayload
 * @property {string} [type] - Type of the geo area export
 */
/**
 * @typedef GetBulkPriceZoneHistory
 * @property {Pagination} page
 * @property {BulkPriceZoneItem[]} items - List of bulk price zone history items
 */
/**
 * @typedef Pagination
 * @property {string} [type] - Data type of page
 * @property {number} size - Number of items per page
 * @property {number} current - Current page number
 * @property {boolean} has_next - Flag indicating if there is a next page
 * @property {number} item_total - Total number of items
 */
/**
 * @typedef BulkPriceZoneItem
 * @property {string} batch_id - The unique batch ID for the bulk upload
 * @property {string} entity_type - Entity type of the record
 * @property {string} [error_file_url] - URL of the error file if any error occurred
 * @property {string} file_path - File path or URL where the bulk file is stored
 * @property {string} file_name - Name of the file
 * @property {string} updated_at - Timestamp of the last update
 * @property {string} updated_by - User who last updated the record
 * @property {string} stage - Stage of the bulk upload process
 */
/**
 * @typedef PriceBulkGeoAreaPayload
 * @property {string} type - Type of bulk geo area export (e.g. 'price').
 * @property {string} file_url - URL to the file containing bulk geo area data.
 */
/**
 * @typedef StandardError
 * @property {string} message - A brief description of the error.
 */
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
 * @typedef OptimalLocationArticlesResponseSchema
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
 * @typedef OptimalLocationAssignedStoresResponseSchema
 * @property {number} store_id
 * @property {OptimalLocationArticlesResponseSchema[]} articles
 */
/**
 * @typedef OptimalLocationsResponseSchema
 * @property {OptimalLocationAssignedStoresResponseSchema[]} assigned_stores
 * @property {ErrorResponseSchema[]} [faulty_articles]
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
 * @typedef ValidateAddressRequestSchema
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
 * @property {string} [code]
 * @property {LocalityParent[]} [localities]
 * @property {string} [iso2] - ISO 3166-1 alpha-2 code for the country.
 * @property {string} [iso3] - ISO 3166-1 alpha-3 code for the country.
 * @property {Object} [currency] - Currency information for the country.
 * @property {string} [phone_code] - Country's international phone dialing code.
 * @property {Object} [hierarchy] - Hierarchical data of the country's location.
 * @property {string} [latitude] - Latitude of the country's geographic center.
 * @property {string} [longitude] - Longitude of the country's geographic center.
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
 * @property {string} [code]
 * @property {string} [parent_uid]
 * @property {string} [iso2] - ISO 3166-1 alpha-2 code for the country.
 * @property {string} [iso3] - ISO 3166-1 alpha-3 code for the country.
 * @property {Object} [currency] - Currency information for the country.
 * @property {string} [phone_code] - Country's international phone dialing code.
 * @property {Object} [hierarchy] - Hierarchical data of the country's location.
 * @property {string} [latitude] - Latitude of the country's geographic center.
 * @property {string} [longitude] - Longitude of the country's geographic center.
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
 * @property {string} [code]
 * @property {LocalityParent[]} [localities]
 */
/**
 * @typedef ApplicationConfigPutResponseSchema
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
 * @typedef ApplicationConfigGetResponseSchema
 * @property {ZoneConfig} [zones]
 * @property {CourierPartnerConfig} [courier_partner_config]
 * @property {BuyboxRuleConfig} [buybox_rule_config]
 * @property {PromiseConfig} [promise_config]
 * @property {PromiseType[]} [promise_types]
 */
/**
 * @typedef ApplicationConfigPutRequestSchema
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
 * @typedef ServiceabilityErrorResponseSchema
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
 * @typedef ServiceabilityDeleteErrorResponseSchema
 * @property {ServiceabilityErrorResponseSchema[]} error
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
 * @property {string} access_level - Access level of the zone (public or private).
 * @property {GeoArea[]} geo_areas
 * @property {string} slug
 * @property {ListViewProductV2} [stores]
 * @property {boolean} is_active
 * @property {boolean} is_opted - Indicates whether the zone is opted or not.
 * @property {boolean} [is_public_opted] - Indicates whether the public zone is
 *   opted by any seller or not
 * @property {ListViewProductV2} [product]
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
 * @typedef SummaryRegions
 * @property {RegionSchema[]} [regions]
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
 * @typedef CompanyStoreView_PageItems
 * @property {string} type
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {number} current
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
 * @property {string} [access_level] - Access level of the zone (public or private).
 * @property {string} [slug]
 * @property {string[]} [geo_areas]
 * @property {number} [company_id]
 * @property {string} [application_id]
 * @property {boolean} [is_active]
 * @property {boolean} [is_opted] - Indicates whether the zone is opted or not.
 * @property {ProductSchema} [product]
 * @property {StoresSchema} [stores]
 */
/**
 * @typedef ZoneUpdateSuccessResponseSchema
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {string} type
 * @property {string} access_level - Access level of the zone (public or private).
 * @property {string} application_id
 * @property {boolean} is_active
 * @property {boolean} is_opted - Indicates whether the zone is opted or not.
 * @property {string[]} geo_areas
 * @property {ProductSchema} product
 * @property {StoresSchema} stores
 * @property {string} zone_id
 * @property {string} created_by
 * @property {string} created_on
 * @property {string} modified_by
 * @property {string} modified_on
 * @property {string} [stage]
 * @property {Summary} [summary]
 */
/**
 * @typedef ZoneDeleteSuccessResponseSchema
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
 * @typedef GetZoneByIdSchema
 * @property {string} zone_id
 * @property {string} name
 * @property {string} slug
 * @property {boolean} is_active
 * @property {boolean} [is_opted]
 * @property {ProductSchema} [product]
 * @property {StoresSchema} [stores]
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
 * @property {boolean} [is_opted] - Indicates whether the zone is opted or not.
 * @property {ProductDetailsSchema} [product]
 * @property {StoresDetailsSchema} [stores]
 * @property {string} [stage] - Current stage of the zone in its lifecycle.
 * @property {string} [overlapping_file_url] - URL of the file containing
 *   overlapping zone information.
 * @property {GeoAreaDetailsSchema[]} geo_areas
 * @property {string} type - Type of the zone (custom or default).
 * @property {string} [access_level] - Access level of the zone (public or private).
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
 * @property {string} access_level - Access level of zone
 * @property {string} name
 * @property {number} company_id
 * @property {string} application_id
 * @property {string[]} geo_areas
 * @property {ZoneStores} [stores]
 * @property {ZoneProduct} [product]
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
 * @property {string} access_level - Access level of the zone (public or private).
 * @property {string} application_id
 * @property {boolean} is_active
 * @property {boolean} [is_public_opted] - Indicates whether the public zone is
 *   opted by any seller or not
 * @property {boolean} [is_opted] - Indicates whether the zone is opted or not.
 * @property {string[]} geo_areas
 * @property {ListViewProductV2} [stores]
 * @property {ListViewProductV2} [product]
 * @property {string} created_by
 * @property {string} created_on
 * @property {string} modified_by
 * @property {string} modified_on
 * @property {string} [stage]
 * @property {string} zone_id
 * @property {SummaryRegions} [summary]
 */
/**
 * @typedef CreateBulkZoneResponseSchema
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
 * @typedef MobileNo
 * @property {string} [number]
 * @property {number} [country_code]
 */
/**
 * @typedef OpeningClosing
 * @property {number} [minute]
 * @property {number} [hour]
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
 * @typedef ServiceabilityZoneErrorResult
 * @property {ServiceabilityErrorResponseSchema[]} error
 */
/**
 * @typedef ServiceabilityZoneNonMarketplaceErrorResult
 * @property {string} error
 */
/**
 * @typedef PincodeMopData
 * @property {number[]} pincodes
 * @property {string} country
 * @property {string} action
 */
/**
 * @typedef PincodeMopUpdateResponseSchema
 * @property {number} pincode
 * @property {string} channel_id
 * @property {string} country
 * @property {boolean} is_active
 */
/**
 * @typedef PincodeMOPresponseSchema
 * @property {string} batch_id
 * @property {boolean} success
 * @property {number} status_code
 * @property {string} country
 * @property {string} action
 * @property {number[]} [pincodes]
 * @property {PincodeMopUpdateResponseSchema[]} [updated_pincodes]
 */
/**
 * @typedef CommonError
 * @property {number} [status_code]
 * @property {ErrorResponseSchema[]} [error]
 * @property {boolean} [success]
 */
/**
 * @typedef MoPCommonError
 * @property {string} [batch_id]
 * @property {number} [status_code]
 * @property {ErrorResponseSchema[]} [error]
 * @property {boolean} [success]
 */
/**
 * @typedef PincodeMopBulkData
 * @property {string} [batch_id]
 * @property {string} s3_url
 */
/**
 * @typedef PincodeBulkViewResponseSchema
 * @property {string} batch_id
 * @property {string} s3_url
 */
/**
 * @typedef PincodeCodStatusListingRequestSchema
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
 * @typedef PincodeCodStatusListingResponseSchema
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
 * @typedef PincodeMopUpdateAuditHistoryRequestSchema
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
 * @typedef PincodeMopUpdateAuditHistoryResponseSchema
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
 * @property {PincodeMopUpdateAuditHistoryResponseSchema[]} data
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
 * @typedef PriceGeoAreaExportResult
 * @property {string} [batch_id]
 */
/**
 * @typedef BulkGeoAreaGetResponseSchema
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
 * @typedef GeoAreaResponseSchema
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
 * @property {GeoAreaItemResponseSchema[]} [items]
 * @property {Page2} [page]
 */
/**
 * @typedef GeoAreaItemResponseSchema
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
 * @typedef ErrorResponseSchema
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
 * @typedef PackageMaterialsErrorResponseSchema
 * @property {string} [value]
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [error]
 */
/**
 * @typedef CourierPartnerAccountFailureResponseSchema
 * @property {boolean} success
 * @property {ErrorResponseSchema[]} error
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
 * @typedef FailureResponseSchema
 * @property {boolean} success
 * @property {ErrorResponseSchema[]} error
 */
/**
 * @typedef CourierPartnerRulesListResponseSchema
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
 * @typedef ApplicationConfigPatchRequestSchema
 * @property {CourierPartnerConfig} [courier_partner_config]
 * @property {BuyboxRuleConfig} [buybox_rule_config]
 * @property {PromiseConfig} [promise_config]
 */
/**
 * @typedef ApplicationConfigPatchResponseSchema
 * @property {boolean} [success]
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
 * @typedef SelfShipResponseSchema
 * @property {boolean} is_active
 * @property {number} tat
 */
/**
 * @typedef ApplicationSelfShipConfig
 * @property {Object} [self_ship]
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
 * @typedef GetStoreRulesApiResponseSchema
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
 * @property {string} [pickup_cutoff]
 * @property {string} [route_code]
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
 * @typedef CourierAccountSchemeResponseSchema
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
 * @typedef CompanyCourierPartnerAccountListResponseSchema
 * @property {CourierAccountResponseSchema[]} items
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
 * @typedef CourierPartnerRuleDeleteResponseSchema
 * @property {string} [message]
 */
/**
 * @typedef StoreRuleDeleteResponseSchema
 * @property {string} [message]
 */
/**
 * @typedef PackageMaterialDeleteResponseSchema
 * @property {string} [message]
 */
/**
 * @typedef PackageMaterialResponseSchema
 * @property {number} [company_id]
 * @property {string} name
 * @property {string} [id]
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
 * @typedef PackageRuleRequestSchema
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
 * @property {number} company_id
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
 * @typedef RulePriorityRequestSchema
 * @property {string} rule_id
 * @property {number} priority
 */
/**
 * @typedef RulePriorityResponseSchema
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
declare class ServiceabilityPlatformModel {
}
declare namespace ServiceabilityPlatformModel {
    export { GetExportPriceZoneHistory, PriceBulkGeoAreaExportRequestPayload, GetBulkPriceZoneHistory, Pagination, BulkPriceZoneItem, PriceBulkGeoAreaPayload, StandardError, RuleConditionIntegerDetail, RuleConditionStringDetail, RuleResponseIntegerDetail, RuleResponseStringDetail, CourierPartnerRuleResponseDetailConditions, CourierPartnerRuleResponseDetailSchema, StoreLocationDetail, StoreRuleLocationDetailSchema, StoreRuleConditionDetailSchema, StoreRuleDataDetailsSchema, OptimalLocationArticlesResponseSchema, OptimalLocationAssignedStoresResponseSchema, OptimalLocationsResponseSchema, ArticleAssignment, OptimalLocationsArticles, ServiceabilityLocation, LocationDetailsServiceability, OptimlLocationsRequestSchema, ErrorResponseV3, ErrorObject, ValidateAddressRequestSchema, CountryObject, GetCountries, CurrencyObject, CountryHierarchy, GetCountry, GetCountryFields, GetCountryFieldsAddressTemplate, FieldValidation, FieldValidationRegex, LengthValidation, GetOneOrAllQuery, GetOneOrAllPath, GetOneOrAllParams, GetOneOrAll, GetCountryFieldsAddressValues, GetCountryFieldsAddress, PincodeLatLongData, Localities, GetLocalities, LocalityParent, GetLocality, ApplicationConfigPutResponseSchema, PromiseType, BuyboxRuleConfig, CourierPartnerConfig, ZoneConfig, ApplicationConfigGetResponseSchema, ApplicationConfigPutRequestSchema, InstallCourierPartnerItemsSchema, InstallCourierPartnerResponseSchema, ServiceabilityErrorResponseSchema, ApplicationServiceabilityConfig, EntityRegionView_Error, EntityRegionView_page, PageSchema, EntityRegionView_Items, ListViewSummary, ProductSchema, ProductDetailsSchema, StoresSchema, StoresDetailsSchema, DetailsSchema, StoreValueDetailsSchema, SummarySchema, RegionSchema, ServiceabilityDeleteErrorResponseSchema, ListViewResponseV2, ListViewItemsV2, SummaryRegions, Summary, GeoArea, ListViewProductV2, ZoneDataItem, ListViewProduct, ListViewChannels, ListViewItems, CompanyStoreView_PageItems, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingType, UpdateZoneDataV2, ZoneUpdateSuccessResponseSchema, ZoneDeleteSuccessResponseSchema, UpdateZoneData, GetZoneDataViewItems, GetZoneByIdSchema, GetZoneByIdDetailsSchema, GeoAreaDetailsSchema, CreateZoneV2Data, ZoneBulkExport, GetZoneBulkExport, ZoneBulkItem, CreateBulkZoneData, ZoneStores, ZoneProduct, ZoneResponseV2, CreateBulkZoneResponseSchema, GetBulkZoneHistory, BulkZoneItems, PageV2, BulkCreateZoneExport, Zone, MobileNo, OpeningClosing, Dp, ServiceabilityZoneErrorResult, ServiceabilityZoneNonMarketplaceErrorResult, PincodeMopData, PincodeMopUpdateResponseSchema, PincodeMOPresponseSchema, CommonError, MoPCommonError, PincodeMopBulkData, PincodeBulkViewResponseSchema, PincodeCodStatusListingRequestSchema, PincodeCodDataSchema, PincodeCodStatusListingResponseSchema, Error, PincodeCodStatusListingPage, PincodeCodStatusListingSummary, PincodeMopUpdateAuditHistoryRequestSchema, PincodeMopUpdateAuditHistoryPaging, PincodeMopUpdateAuditHistoryResponseSchema, PincodeMopUpdateAuditHistoryResponseData, ArithmeticOperations, SchemeRulesFeatures, SchemeRules, CourierAccount, BulkGeoAreaDetails, BulkGeoAreaResult, PriceGeoAreaExportResult, BulkGeoAreaGetResponseSchema, GeoAreaBulkCreationResult, GeoAreaBulkExportResult, GeoAreaRequestBody, GeoAreaErrorResult, ErrorResponseItem, ConflictingArea, GeoAreaResponseDetail, ErrorResponseDetail, GeoAreaResponseBody, GeoAreaPutResponseBody, Area, Region, RegionV2, Country, AreaExpanded, AreaExpandedV2, GeoAreaResponseSchema, GeoAreaGetResponseBody, GeoAreaItemResponseSchema, ErrorResponseV2, ErrorResponseSchema, PackageMaterialNotFound, PackageMaterialsErrorResponseSchema, CourierPartnerAccountFailureResponseSchema, Page, Page2, CourierPartnerList, LocationRuleValues, LocationRuleValuesV2, LocationRule, LocationRuleV2, StringComparisonOperations, IntComparisonOperations, CourierPartnerRuleConditions, CourierPartnerRuleResponseConditions, CourierPartnerRule, CourierPartnerRuleResponseSchema, FailureResponseSchema, CourierPartnerRulesListResponseSchema, CompanyConfig, StorePromiseAttributeConfig, DeliveryServiceAttributeConfig, BufferField, PromiseConfig, ApplicationConfig, ApplicationConfigPatchRequestSchema, ApplicationConfigPatchResponseSchema, BulkRegionResponseItemData, BulkRegionResponseSchema, SelfShipResponseSchema, ApplicationSelfShipConfig, StoreRuleConfigData, CustomerRadiusSchema, StoreRuleConditionSchema, StoreRuleDataSchema, StorePrioritySchema, GetStoreRulesApiResponseSchema, CreateStoreRuleRequestSchema, StoreRuleResponseSchema, StoreRuleUpdateResponseSchema, ServiceabilityModel, CourierPartnerSchemeFeatures, CourierAccountSchemeResponseSchema, CourierAccountResponseSchema, CompanyCourierPartnerAccountListResponseSchema, PackageMaterial, CourierPartnerRuleDeleteResponseSchema, StoreRuleDeleteResponseSchema, PackageMaterialDeleteResponseSchema, PackageMaterialResponseSchema, PackageMaterialRule, PackageMpStores, PackageRuleRequestSchema, PackageRule, PackageRuleResult, Channel, PackageMaterialRuleList, PackageMaterialList, PackageRuleProduct, PackageRuleProductTag, PackageRuleCategory, PackageRuleProductAttributes, PackageRuleDepartmentId, PackageMaterialRuleQuantity, RulePriorityRequestSchema, RulePriorityResponseSchema, CompanySelfShip, ArithmeticOperationsV2, CompanyConfigurationShema, ValidationError };
}
/** @returns {GetExportPriceZoneHistory} */
declare function GetExportPriceZoneHistory(): GetExportPriceZoneHistory;
type GetExportPriceZoneHistory = {
    batch_id?: string;
    file_path?: string;
    total?: number;
    failed?: number;
    error_file_url?: string;
    action?: string;
    updated_at?: string;
    updated_by?: string;
    type?: string;
    stage?: string;
};
/** @returns {PriceBulkGeoAreaExportRequestPayload} */
declare function PriceBulkGeoAreaExportRequestPayload(): PriceBulkGeoAreaExportRequestPayload;
type PriceBulkGeoAreaExportRequestPayload = {
    /**
     * - Type of the geo area export
     */
    type?: string;
};
/** @returns {GetBulkPriceZoneHistory} */
declare function GetBulkPriceZoneHistory(): GetBulkPriceZoneHistory;
type GetBulkPriceZoneHistory = {
    page: Pagination;
    /**
     * - List of bulk price zone history items
     */
    items: BulkPriceZoneItem[];
};
/** @returns {Pagination} */
declare function Pagination(): Pagination;
type Pagination = {
    /**
     * - Data type of page
     */
    type?: string;
    /**
     * - Number of items per page
     */
    size: number;
    /**
     * - Current page number
     */
    current: number;
    /**
     * - Flag indicating if there is a next page
     */
    has_next: boolean;
    /**
     * - Total number of items
     */
    item_total: number;
};
/** @returns {BulkPriceZoneItem} */
declare function BulkPriceZoneItem(): BulkPriceZoneItem;
type BulkPriceZoneItem = {
    /**
     * - The unique batch ID for the bulk upload
     */
    batch_id: string;
    /**
     * - Entity type of the record
     */
    entity_type: string;
    /**
     * - URL of the error file if any error occurred
     */
    error_file_url?: string;
    /**
     * - File path or URL where the bulk file is stored
     */
    file_path: string;
    /**
     * - Name of the file
     */
    file_name: string;
    /**
     * - Timestamp of the last update
     */
    updated_at: string;
    /**
     * - User who last updated the record
     */
    updated_by: string;
    /**
     * - Stage of the bulk upload process
     */
    stage: string;
};
/** @returns {PriceBulkGeoAreaPayload} */
declare function PriceBulkGeoAreaPayload(): PriceBulkGeoAreaPayload;
type PriceBulkGeoAreaPayload = {
    /**
     * - Type of bulk geo area export (e.g. 'price').
     */
    type: string;
    /**
     * - URL to the file containing bulk geo area data.
     */
    file_url: string;
};
/** @returns {StandardError} */
declare function StandardError(): StandardError;
type StandardError = {
    /**
     * - A brief description of the error.
     */
    message: string;
};
/** @returns {RuleConditionIntegerDetail} */
declare function RuleConditionIntegerDetail(): RuleConditionIntegerDetail;
type RuleConditionIntegerDetail = {
    text?: string;
    value?: number;
    stage?: boolean;
};
/** @returns {RuleConditionStringDetail} */
declare function RuleConditionStringDetail(): RuleConditionStringDetail;
type RuleConditionStringDetail = {
    text?: string;
    value?: string;
    stage?: boolean;
};
/** @returns {RuleResponseIntegerDetail} */
declare function RuleResponseIntegerDetail(): RuleResponseIntegerDetail;
type RuleResponseIntegerDetail = {
    includes?: RuleConditionIntegerDetail[];
};
/** @returns {RuleResponseStringDetail} */
declare function RuleResponseStringDetail(): RuleResponseStringDetail;
type RuleResponseStringDetail = {
    includes?: RuleConditionStringDetail[];
};
/** @returns {CourierPartnerRuleResponseDetailConditions} */
declare function CourierPartnerRuleResponseDetailConditions(): CourierPartnerRuleResponseDetailConditions;
type CourierPartnerRuleResponseDetailConditions = {
    forward?: LocationRule;
    reverse?: LocationRule;
    payment_mode?: StringComparisonOperations;
    category_ids?: RuleResponseIntegerDetail;
    product_ids?: RuleResponseIntegerDetail;
    product_tags?: StringComparisonOperations;
    zone_ids?: RuleResponseStringDetail;
    department_ids?: RuleResponseIntegerDetail;
    brand_ids?: RuleResponseIntegerDetail;
    order_place_date?: ArithmeticOperationsV2;
    store_ids?: RuleResponseIntegerDetail;
    store_type?: StringComparisonOperations;
    store_tags?: StringComparisonOperations;
    shipment_weight?: ArithmeticOperations;
    shipment_cost?: ArithmeticOperations;
    shipment_volumetric_weight?: ArithmeticOperations;
    company_ids?: RuleResponseIntegerDetail;
    promise_types?: StringComparisonOperations;
};
/** @returns {CourierPartnerRuleResponseDetailSchema} */
declare function CourierPartnerRuleResponseDetailSchema(): CourierPartnerRuleResponseDetailSchema;
type CourierPartnerRuleResponseDetailSchema = {
    id?: string;
    is_active: boolean;
    cp_list?: CourierPartnerList[];
    name: string;
    conditions: CourierPartnerRuleResponseDetailConditions;
    manual_priority?: string[];
    sort: string[];
    type: string;
    application_id?: string;
    company_id?: number;
    shipment_adjustment_type?: string;
};
/** @returns {StoreLocationDetail} */
declare function StoreLocationDetail(): StoreLocationDetail;
type StoreLocationDetail = {
    uid?: string;
    display_name?: string;
    sub_type?: string;
    parent_id?: string;
    parent_uid?: string;
};
/** @returns {StoreRuleLocationDetailSchema} */
declare function StoreRuleLocationDetailSchema(): StoreRuleLocationDetailSchema;
type StoreRuleLocationDetailSchema = {
    includes?: StoreLocationDetail[];
};
/** @returns {StoreRuleConditionDetailSchema} */
declare function StoreRuleConditionDetailSchema(): StoreRuleConditionDetailSchema;
type StoreRuleConditionDetailSchema = {
    department_ids?: RuleResponseIntegerDetail;
    category_ids?: RuleResponseIntegerDetail;
    brand_ids?: RuleResponseIntegerDetail;
    to_location?: StoreRuleLocationDetailSchema;
    customer_radius?: CustomerRadiusSchema;
    store_type?: StringComparisonOperations;
    product_tags?: StringComparisonOperations;
    product_ids?: RuleResponseIntegerDetail;
    store_tags?: StringComparisonOperations;
    order_place_date?: ArithmeticOperationsV2;
    zone_ids?: RuleResponseStringDetail;
    company_ids?: RuleResponseIntegerDetail;
};
/** @returns {StoreRuleDataDetailsSchema} */
declare function StoreRuleDataDetailsSchema(): StoreRuleDataDetailsSchema;
type StoreRuleDataDetailsSchema = {
    id?: string;
    name?: string;
    company_id?: number;
    application_id?: string;
    type_based_priority?: string[];
    tag_based_priority?: string[];
    store_priority?: StorePrioritySchema[];
    sort?: string[];
    manual_priority?: number[];
    conditions?: StoreRuleConditionDetailSchema;
    is_active?: boolean;
    meta_sort_priority?: any;
    meta_conditions?: any;
};
/** @returns {OptimalLocationArticlesResponseSchema} */
declare function OptimalLocationArticlesResponseSchema(): OptimalLocationArticlesResponseSchema;
type OptimalLocationArticlesResponseSchema = {
    item_id: number;
    size: string;
    quantity: number;
    group_id?: string;
    is_primary_item?: boolean;
    meta?: any;
    article_assignment: ArticleAssignment;
    seller_id?: number;
    ignore_locations: number[];
    assign_locations: number[];
    price_effective: number;
    mto_quantity: number;
    _id: string;
    uid: string;
};
/** @returns {OptimalLocationAssignedStoresResponseSchema} */
declare function OptimalLocationAssignedStoresResponseSchema(): OptimalLocationAssignedStoresResponseSchema;
type OptimalLocationAssignedStoresResponseSchema = {
    store_id: number;
    articles: OptimalLocationArticlesResponseSchema[];
};
/** @returns {OptimalLocationsResponseSchema} */
declare function OptimalLocationsResponseSchema(): OptimalLocationsResponseSchema;
type OptimalLocationsResponseSchema = {
    assigned_stores: OptimalLocationAssignedStoresResponseSchema[];
    faulty_articles?: ErrorResponseSchema[];
};
/** @returns {ArticleAssignment} */
declare function ArticleAssignment(): ArticleAssignment;
type ArticleAssignment = {
    level?: string;
    /**
     * - The strategy parameter allows users to
     * specify the desired approach or criteria for selecting optimal locations.
     */
    strategy?: string;
};
/** @returns {OptimalLocationsArticles} */
declare function OptimalLocationsArticles(): OptimalLocationsArticles;
type OptimalLocationsArticles = {
    item_id: number;
    size: string;
    quantity: number;
    group_id?: string;
    is_primary_item?: boolean;
    meta?: any;
    article_assignment: ArticleAssignment;
    ignore_locations: number[];
    assign_locations: number[];
    seller_id?: number;
};
/** @returns {ServiceabilityLocation} */
declare function ServiceabilityLocation(): ServiceabilityLocation;
type ServiceabilityLocation = {
    /**
     * - The longitude of the serviceability location.
     */
    longitude: string;
    /**
     * - The latitude of the serviceability location.
     */
    latitude: string;
};
/** @returns {LocationDetailsServiceability} */
declare function LocationDetailsServiceability(): LocationDetailsServiceability;
type LocationDetailsServiceability = {
    /**
     * - The pincode of the serviceability location.
     */
    pincode?: string;
    /**
     * - The sector of the serviceability location.
     */
    sector?: string;
    /**
     * - The state of the serviceability location.
     */
    state?: string;
    /**
     * - The country of the serviceability location.
     */
    country: string;
    /**
     * - The city of the serviceability location.
     */
    city?: string;
    /**
     * - The ISO code of the country.
     */
    country_iso_code: string;
    location?: ServiceabilityLocation;
};
/** @returns {OptimlLocationsRequestSchema} */
declare function OptimlLocationsRequestSchema(): OptimlLocationsRequestSchema;
type OptimlLocationsRequestSchema = {
    channel_id: string;
    channel_type: string;
    channel_identifier?: string;
    to_serviceability: LocationDetailsServiceability;
    articles: OptimalLocationsArticles[];
};
/** @returns {ErrorResponseV3} */
declare function ErrorResponseV3(): ErrorResponseV3;
type ErrorResponseV3 = {
    success?: boolean;
    error?: ErrorObject;
};
/** @returns {ErrorObject} */
declare function ErrorObject(): ErrorObject;
type ErrorObject = {
    type?: string;
    value?: string;
    message?: string;
};
/** @returns {ValidateAddressRequestSchema} */
declare function ValidateAddressRequestSchema(): ValidateAddressRequestSchema;
type ValidateAddressRequestSchema = {
    /**
     * - A string representing the complete address,
     * combining address line 1, address line 2, area, landmark, sector, city,
     * state, and pincode. This provides a comprehensive view of the address details.
     */
    address?: string;
    /**
     * - A string representing the first line of the
     * address, typically containing street or building information.
     */
    address1?: string;
    /**
     * - A string representing the second line of the
     * address, which can be used for additional address details if needed.
     */
    address2?: string;
    /**
     * - A string specifying the locality or area
     * associated with the address.
     */
    area?: string;
    /**
     * - A string representing a prominent nearby
     * landmark that aids in locating the address.
     */
    landmark?: string;
    /**
     * - A string indicating the postal code or PIN
     * code of the address area.
     */
    pincode?: string;
    /**
     * - A string specifying the sector or district of
     * the address if applicable.
     */
    sector?: string;
    /**
     * - A string denoting the city or municipality of the address.
     */
    city?: string;
    /**
     * - A string indicating the state or province of the address.
     */
    state?: string;
    /**
     * - A string representing the recipient's name or the
     * organization name associated with the address.
     */
    name?: string;
    /**
     * - An integer representing the recipient's contact
     * phone number.
     */
    phone?: string;
    /**
     * - A string containing the recipient's email address.
     */
    email?: string;
    /**
     * - A string containing the recipient's
     * email address.
     */
    country_iso_code?: string;
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
/** @returns {CurrencyObject} */
declare function CurrencyObject(): CurrencyObject;
type CurrencyObject = {
    code?: string;
    name?: string;
    symbol?: string;
};
/** @returns {CountryHierarchy} */
declare function CountryHierarchy(): CountryHierarchy;
type CountryHierarchy = {
    display_name?: string;
    slug?: string;
};
/** @returns {GetCountry} */
declare function GetCountry(): GetCountry;
type GetCountry = {
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
    fields?: GetCountryFields;
};
/** @returns {GetCountryFields} */
declare function GetCountryFields(): GetCountryFields;
type GetCountryFields = {
    address: GetCountryFieldsAddress[];
    serviceability_fields: string[];
    address_template: GetCountryFieldsAddressTemplate;
};
/** @returns {GetCountryFieldsAddressTemplate} */
declare function GetCountryFieldsAddressTemplate(): GetCountryFieldsAddressTemplate;
type GetCountryFieldsAddressTemplate = {
    checkout_form: string;
    store_os_form: string;
    default_display: string;
};
/** @returns {FieldValidation} */
declare function FieldValidation(): FieldValidation;
type FieldValidation = {
    type?: string;
    regex?: FieldValidationRegex;
};
/** @returns {FieldValidationRegex} */
declare function FieldValidationRegex(): FieldValidationRegex;
type FieldValidationRegex = {
    value?: string;
    length?: LengthValidation;
};
/** @returns {LengthValidation} */
declare function LengthValidation(): LengthValidation;
type LengthValidation = {
    min?: number;
    max?: number;
};
/** @returns {GetOneOrAllQuery} */
declare function GetOneOrAllQuery(): GetOneOrAllQuery;
type GetOneOrAllQuery = {
    country?: string;
    state?: string;
    city?: string;
    sector?: string;
};
/** @returns {GetOneOrAllPath} */
declare function GetOneOrAllPath(): GetOneOrAllPath;
type GetOneOrAllPath = {
    type?: string;
    value?: string;
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
    operation_id?: string;
    params?: GetOneOrAllParams;
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
    display_name: string;
    slug: string;
    required: boolean;
    edit?: boolean;
    input: string;
    validation?: FieldValidation;
    values?: GetCountryFieldsAddressValues;
    error_text?: string;
};
/** @returns {PincodeLatLongData} */
declare function PincodeLatLongData(): PincodeLatLongData;
type PincodeLatLongData = {
    type?: string;
    coordinates?: number[];
};
/** @returns {Localities} */
declare function Localities(): Localities;
type Localities = {
    id?: string;
    name?: string;
    display_name?: string;
    parent_ids?: string[];
    meta?: any;
    type?: string;
    lat_long?: PincodeLatLongData;
    parent_uid?: string;
    code?: string;
    localities?: LocalityParent[];
    /**
     * - ISO 3166-1 alpha-2 code for the country.
     */
    iso2?: string;
    /**
     * - ISO 3166-1 alpha-3 code for the country.
     */
    iso3?: string;
    /**
     * - Currency information for the country.
     */
    currency?: any;
    /**
     * - Country's international phone dialing code.
     */
    phone_code?: string;
    /**
     * - Hierarchical data of the country's location.
     */
    hierarchy?: any;
    /**
     * - Latitude of the country's geographic center.
     */
    latitude?: string;
    /**
     * - Longitude of the country's geographic center.
     */
    longitude?: string;
};
/** @returns {GetLocalities} */
declare function GetLocalities(): GetLocalities;
type GetLocalities = {
    items?: Localities[];
    page?: Page;
};
/** @returns {LocalityParent} */
declare function LocalityParent(): LocalityParent;
type LocalityParent = {
    id?: string;
    name?: string;
    display_name?: string;
    meta?: any;
    parent_ids?: string[];
    type?: string;
    serviceability?: any;
    code?: string;
    parent_uid?: string;
    /**
     * - ISO 3166-1 alpha-2 code for the country.
     */
    iso2?: string;
    /**
     * - ISO 3166-1 alpha-3 code for the country.
     */
    iso3?: string;
    /**
     * - Currency information for the country.
     */
    currency?: any;
    /**
     * - Country's international phone dialing code.
     */
    phone_code?: string;
    /**
     * - Hierarchical data of the country's location.
     */
    hierarchy?: any;
    /**
     * - Latitude of the country's geographic center.
     */
    latitude?: string;
    /**
     * - Longitude of the country's geographic center.
     */
    longitude?: string;
};
/** @returns {GetLocality} */
declare function GetLocality(): GetLocality;
type GetLocality = {
    id?: string;
    name?: string;
    display_name?: string;
    meta?: any;
    parent_ids?: string[];
    parent_uid?: string;
    type?: string;
    code?: string;
    localities?: LocalityParent[];
};
/** @returns {ApplicationConfigPutResponseSchema} */
declare function ApplicationConfigPutResponseSchema(): ApplicationConfigPutResponseSchema;
type ApplicationConfigPutResponseSchema = {
    rule_ids?: string[];
    sort?: string[];
    manual_priority?: string[];
    application_id?: string;
    company_id?: number;
};
/** @returns {PromiseType} */
declare function PromiseType(): PromiseType;
type PromiseType = {
    display_name: string;
    slug: string;
    description: string;
    is_active: boolean;
    is_default: boolean;
};
/** @returns {BuyboxRuleConfig} */
declare function BuyboxRuleConfig(): BuyboxRuleConfig;
type BuyboxRuleConfig = {
    store_type_priority?: string[];
    store_tag_priority?: string[];
    sort?: string[];
};
/** @returns {CourierPartnerConfig} */
declare function CourierPartnerConfig(): CourierPartnerConfig;
type CourierPartnerConfig = {
    rule_ids?: string[];
    sort?: string[];
    manual_priority?: string[];
};
/** @returns {ZoneConfig} */
declare function ZoneConfig(): ZoneConfig;
type ZoneConfig = {
    serviceability_type?: string;
    active_count?: number;
    total_count?: number;
};
/** @returns {ApplicationConfigGetResponseSchema} */
declare function ApplicationConfigGetResponseSchema(): ApplicationConfigGetResponseSchema;
type ApplicationConfigGetResponseSchema = {
    zones?: ZoneConfig;
    courier_partner_config?: CourierPartnerConfig;
    buybox_rule_config?: BuyboxRuleConfig;
    promise_config?: PromiseConfig;
    promise_types?: PromiseType[];
};
/** @returns {ApplicationConfigPutRequestSchema} */
declare function ApplicationConfigPutRequestSchema(): ApplicationConfigPutRequestSchema;
type ApplicationConfigPutRequestSchema = {
    rule_ids?: string[];
    sort?: string[];
    manual_priority?: string[];
};
/** @returns {InstallCourierPartnerItemsSchema} */
declare function InstallCourierPartnerItemsSchema(): InstallCourierPartnerItemsSchema;
type InstallCourierPartnerItemsSchema = {
    base_url?: string;
    callbacks?: any;
    contact_email?: string;
    created_at?: string;
    description?: string;
    developed_by_name?: string;
    ext_version?: string;
    extention_type?: string;
    is_coming_soon?: boolean;
    is_hidden?: boolean;
    is_installed?: boolean;
    launch_type?: string;
    logo?: any;
    modified_at?: string;
    name?: string;
    organization_id?: string;
    partner?: any;
    scope?: string[];
    whitelisted_urls?: string[];
    __v?: number;
    _id?: string;
};
/** @returns {InstallCourierPartnerResponseSchema} */
declare function InstallCourierPartnerResponseSchema(): InstallCourierPartnerResponseSchema;
type InstallCourierPartnerResponseSchema = {
    items?: InstallCourierPartnerItemsSchema[];
    page?: Page;
};
/** @returns {ServiceabilityErrorResponseSchema} */
declare function ServiceabilityErrorResponseSchema(): ServiceabilityErrorResponseSchema;
type ServiceabilityErrorResponseSchema = {
    message: string;
    value: string;
    type: string;
};
/** @returns {ApplicationServiceabilityConfig} */
declare function ApplicationServiceabilityConfig(): ApplicationServiceabilityConfig;
type ApplicationServiceabilityConfig = {
    channel_id: string;
    serviceability_type: string;
    channel_type: string;
};
/** @returns {EntityRegionView_Error} */
declare function EntityRegionView_Error(): EntityRegionView_Error;
type EntityRegionView_Error = {
    message?: string;
    value?: string;
    type?: string;
};
/** @returns {EntityRegionView_page} */
declare function EntityRegionView_page(): EntityRegionView_page;
type EntityRegionView_page = {
    type: string;
    has_next: boolean;
    item_total: number;
    size: number;
    current: number;
};
/** @returns {PageSchema} */
declare function PageSchema(): PageSchema;
type PageSchema = {
    has_next: boolean;
    item_total: number;
    size: number;
    current: number;
    type: string;
};
/** @returns {EntityRegionView_Items} */
declare function EntityRegionView_Items(): EntityRegionView_Items;
type EntityRegionView_Items = {
    sub_type: string;
    uid: string;
    name: string;
};
/** @returns {ListViewSummary} */
declare function ListViewSummary(): ListViewSummary;
type ListViewSummary = {
    total_zones: number;
    total_pincodes_served: number;
    total_active_zones: number;
};
/** @returns {ProductSchema} */
declare function ProductSchema(): ProductSchema;
type ProductSchema = {
    /**
     * - The classification of product type used in the
     * zone, whether it's a list of categories, departments, tags or item_ids.
     */
    type: string;
    values: number[];
};
/** @returns {ProductDetailsSchema} */
declare function ProductDetailsSchema(): ProductDetailsSchema;
type ProductDetailsSchema = {
    /**
     * - The classification of product type used in the
     * zone, whether it's a list of categories, departments, tags or item_ids.
     */
    type: string;
    /**
     * - List of values representing the products
     * or the type of products selected for the delivery zone.
     */
    values: DetailsSchema[];
};
/** @returns {StoresSchema} */
declare function StoresSchema(): StoresSchema;
type StoresSchema = {
    /**
     * - Classification of whether all stores in the
     * application are considered or a custom selection of stores by the seller.
     */
    type: string;
    /**
     * - List of store ids mapped to the delivery zone
     * when custom type is selected.
     */
    values: number[];
};
/** @returns {StoresDetailsSchema} */
declare function StoresDetailsSchema(): StoresDetailsSchema;
type StoresDetailsSchema = {
    /**
     * - The classification of product type used in the
     * zone, whether it's a list of categories, departments, tags or item_ids.
     */
    type: string;
    /**
     * - List of values representing
     * the products or the type of products selected for the delivery zone.
     */
    values: StoreValueDetailsSchema[];
};
/** @returns {DetailsSchema} */
declare function DetailsSchema(): DetailsSchema;
type DetailsSchema = {
    /**
     * - Display name of the value.
     */
    name: string;
    /**
     * - Raw value (id) of the store or product or region.
     */
    value: string;
};
/** @returns {StoreValueDetailsSchema} */
declare function StoreValueDetailsSchema(): StoreValueDetailsSchema;
type StoreValueDetailsSchema = {
    text: string;
    value: number;
};
/** @returns {SummarySchema} */
declare function SummarySchema(): SummarySchema;
type SummarySchema = {
    /**
     * - Count of the stores that will be
     * considered for the delivery zone.
     */
    stores_count?: number;
    /**
     * - Count of the products that will be
     * considered for the delivery zone.
     */
    products_count?: number;
    /**
     * - Summary of regions, with each country
     * and the no of regions selected for the delivery zone.
     */
    regions?: RegionSchema[];
};
/** @returns {RegionSchema} */
declare function RegionSchema(): RegionSchema;
type RegionSchema = {
    /**
     * - Display name of the country
     */
    name?: string;
    /**
     * - Count of the total number of regions mapped to a
     * country for the delivery zone.
     */
    count?: number;
};
/** @returns {ServiceabilityDeleteErrorResponseSchema} */
declare function ServiceabilityDeleteErrorResponseSchema(): ServiceabilityDeleteErrorResponseSchema;
type ServiceabilityDeleteErrorResponseSchema = {
    error: ServiceabilityErrorResponseSchema[];
};
/** @returns {ListViewResponseV2} */
declare function ListViewResponseV2(): ListViewResponseV2;
type ListViewResponseV2 = {
    items: ListViewItemsV2[];
    page: ZoneDataItem;
};
/** @returns {ListViewItemsV2} */
declare function ListViewItemsV2(): ListViewItemsV2;
type ListViewItemsV2 = {
    zone_id: string;
    name: string;
    type: string;
    /**
     * - Access level of the zone (public or private).
     */
    access_level: string;
    geo_areas: GeoArea[];
    slug: string;
    stores?: ListViewProductV2;
    is_active: boolean;
    /**
     * - Indicates whether the zone is opted or not.
     */
    is_opted: boolean;
    /**
     * - Indicates whether the public zone is
     * opted by any seller or not
     */
    is_public_opted?: boolean;
    product?: ListViewProductV2;
    company_id: number;
    application_id: string;
    created_by: string;
    created_on: string;
    modified_by: string;
    modified_on: string;
    stage?: string;
    summary?: Summary;
};
/** @returns {SummaryRegions} */
declare function SummaryRegions(): SummaryRegions;
type SummaryRegions = {
    regions?: RegionSchema[];
};
/** @returns {Summary} */
declare function Summary(): Summary;
type Summary = {
    stores_count?: number;
    products_count?: number;
    regions?: RegionSchema[];
};
/** @returns {GeoArea} */
declare function GeoArea(): GeoArea;
type GeoArea = {
    id: string;
    type?: string;
    name: string;
};
/** @returns {ListViewProductV2} */
declare function ListViewProductV2(): ListViewProductV2;
type ListViewProductV2 = {
    type: string;
    values: string[];
};
/** @returns {ZoneDataItem} */
declare function ZoneDataItem(): ZoneDataItem;
type ZoneDataItem = {
    has_next: boolean;
    item_total: number;
    size: number;
    current: number;
    type: string;
};
/** @returns {ListViewProduct} */
declare function ListViewProduct(): ListViewProduct;
type ListViewProduct = {
    count: number;
    type: string;
};
/** @returns {ListViewChannels} */
declare function ListViewChannels(): ListViewChannels;
type ListViewChannels = {
    channel_id: string;
    channel_type: string;
};
/** @returns {ListViewItems} */
declare function ListViewItems(): ListViewItems;
type ListViewItems = {
    zone_id: string;
    name: string;
    slug: string;
    stores_count: number;
    is_active: boolean;
    regions_count: number;
    company_id: number;
    channels: ListViewChannels[];
};
/** @returns {CompanyStoreView_PageItems} */
declare function CompanyStoreView_PageItems(): CompanyStoreView_PageItems;
type CompanyStoreView_PageItems = {
    type: string;
    has_next: boolean;
    item_total: number;
    size: number;
    current: number;
};
/** @returns {GetZoneDataViewChannels} */
declare function GetZoneDataViewChannels(): GetZoneDataViewChannels;
type GetZoneDataViewChannels = {
    channel_id: string;
    channel_type: string;
};
/** @returns {ZoneProductTypes} */
declare function ZoneProductTypes(): ZoneProductTypes;
type ZoneProductTypes = {
    type: string;
    tags: string[];
};
/** @returns {ZoneMappingType} */
declare function ZoneMappingType(): ZoneMappingType;
type ZoneMappingType = {
    country: string;
    pincode?: string[];
    state?: string[];
};
/** @returns {UpdateZoneDataV2} */
declare function UpdateZoneDataV2(): UpdateZoneDataV2;
type UpdateZoneDataV2 = {
    zone_id?: string;
    name?: string;
    type?: string;
    /**
     * - Access level of the zone (public or private).
     */
    access_level?: string;
    slug?: string;
    geo_areas?: string[];
    company_id?: number;
    application_id?: string;
    is_active?: boolean;
    /**
     * - Indicates whether the zone is opted or not.
     */
    is_opted?: boolean;
    product?: ProductSchema;
    stores?: StoresSchema;
};
/** @returns {ZoneUpdateSuccessResponseSchema} */
declare function ZoneUpdateSuccessResponseSchema(): ZoneUpdateSuccessResponseSchema;
type ZoneUpdateSuccessResponseSchema = {
    name: string;
    slug: string;
    company_id: number;
    type: string;
    /**
     * - Access level of the zone (public or private).
     */
    access_level: string;
    application_id: string;
    is_active: boolean;
    /**
     * - Indicates whether the zone is opted or not.
     */
    is_opted: boolean;
    geo_areas: string[];
    product: ProductSchema;
    stores: StoresSchema;
    zone_id: string;
    created_by: string;
    created_on: string;
    modified_by: string;
    modified_on: string;
    stage?: string;
    summary?: Summary;
};
/** @returns {ZoneDeleteSuccessResponseSchema} */
declare function ZoneDeleteSuccessResponseSchema(): ZoneDeleteSuccessResponseSchema;
type ZoneDeleteSuccessResponseSchema = {
    message: string;
};
/** @returns {UpdateZoneData} */
declare function UpdateZoneData(): UpdateZoneData;
type UpdateZoneData = {
    zone_id: string;
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
};
/** @returns {GetZoneDataViewItems} */
declare function GetZoneDataViewItems(): GetZoneDataViewItems;
type GetZoneDataViewItems = {
    zone_id: string;
    name: string;
    slug: string;
    company_id?: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type?: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
    stores_count: number;
};
/** @returns {GetZoneByIdSchema} */
declare function GetZoneByIdSchema(): GetZoneByIdSchema;
type GetZoneByIdSchema = {
    zone_id: string;
    name: string;
    slug: string;
    is_active: boolean;
    is_opted?: boolean;
    product?: ProductSchema;
    stores?: StoresSchema;
    created_by?: string;
    created_on?: string;
    modified_by?: string;
    modified_on?: string;
    stage?: string;
    overlapping_file_url?: string;
    geo_areas: string[];
    type: string;
    overlapping_zone_names?: string[];
};
/** @returns {GetZoneByIdDetailsSchema} */
declare function GetZoneByIdDetailsSchema(): GetZoneByIdDetailsSchema;
type GetZoneByIdDetailsSchema = {
    /**
     * - Unique identifier for the zone.
     */
    zone_id: string;
    /**
     * - Name of the zone.
     */
    name: string;
    /**
     * - URL-friendly version of the zone name.
     */
    slug: string;
    /**
     * - Indicates whether the zone is active.
     */
    is_active: boolean;
    /**
     * - Indicates whether the zone is opted or not.
     */
    is_opted?: boolean;
    product?: ProductDetailsSchema;
    stores?: StoresDetailsSchema;
    /**
     * - Current stage of the zone in its lifecycle.
     */
    stage?: string;
    /**
     * - URL of the file containing
     * overlapping zone information.
     */
    overlapping_file_url?: string;
    geo_areas: GeoAreaDetailsSchema[];
    /**
     * - Type of the zone (custom or default).
     */
    type: string;
    /**
     * - Access level of the zone (public or private).
     */
    access_level?: string;
    /**
     * - List of names of overlapping zones.
     */
    overlapping_zone_names?: string[];
};
/** @returns {GeoAreaDetailsSchema} */
declare function GeoAreaDetailsSchema(): GeoAreaDetailsSchema;
type GeoAreaDetailsSchema = {
    /**
     * - Unique identifier for the geographical area.
     */
    id: string;
    /**
     * - Name of the geographical area.
     */
    name: string;
};
/** @returns {CreateZoneV2Data} */
declare function CreateZoneV2Data(): CreateZoneV2Data;
type CreateZoneV2Data = {
    is_active: boolean;
    slug: string;
    type: string;
    /**
     * - Access level of zone
     */
    access_level: string;
    name: string;
    company_id: number;
    application_id: string;
    geo_areas: string[];
    stores?: ZoneStores;
    product?: ZoneProduct;
};
/** @returns {ZoneBulkExport} */
declare function ZoneBulkExport(): ZoneBulkExport;
type ZoneBulkExport = {
    batch_id?: string;
};
/** @returns {GetZoneBulkExport} */
declare function GetZoneBulkExport(): GetZoneBulkExport;
type GetZoneBulkExport = {
    items?: ZoneBulkItem[];
};
/** @returns {ZoneBulkItem} */
declare function ZoneBulkItem(): ZoneBulkItem;
type ZoneBulkItem = {
    batch_id?: string;
    file_path?: string;
    total?: number;
    failed?: number;
    error_file_url?: string;
    action?: string;
    updated_at?: string;
    updated_by?: string;
    type?: string;
    stage?: string;
};
/** @returns {CreateBulkZoneData} */
declare function CreateBulkZoneData(): CreateBulkZoneData;
type CreateBulkZoneData = {
    file_url?: string;
    product_type?: string;
};
/** @returns {ZoneStores} */
declare function ZoneStores(): ZoneStores;
type ZoneStores = {
    type: string;
    values: number[];
};
/** @returns {ZoneProduct} */
declare function ZoneProduct(): ZoneProduct;
type ZoneProduct = {
    type: string;
    values: number[];
};
/** @returns {ZoneResponseV2} */
declare function ZoneResponseV2(): ZoneResponseV2;
type ZoneResponseV2 = {
    name: string;
    slug: string;
    company_id: number;
    type: string;
    /**
     * - Access level of the zone (public or private).
     */
    access_level: string;
    application_id: string;
    is_active: boolean;
    /**
     * - Indicates whether the public zone is
     * opted by any seller or not
     */
    is_public_opted?: boolean;
    /**
     * - Indicates whether the zone is opted or not.
     */
    is_opted?: boolean;
    geo_areas: string[];
    stores?: ListViewProductV2;
    product?: ListViewProductV2;
    created_by: string;
    created_on: string;
    modified_by: string;
    modified_on: string;
    stage?: string;
    zone_id: string;
    summary?: SummaryRegions;
};
/** @returns {CreateBulkZoneResponseSchema} */
declare function CreateBulkZoneResponseSchema(): CreateBulkZoneResponseSchema;
type CreateBulkZoneResponseSchema = {
    zone_id?: string;
};
/** @returns {GetBulkZoneHistory} */
declare function GetBulkZoneHistory(): GetBulkZoneHistory;
type GetBulkZoneHistory = {
    items?: BulkZoneItems[];
    page?: PageV2;
};
/** @returns {BulkZoneItems} */
declare function BulkZoneItems(): BulkZoneItems;
type BulkZoneItems = {
    batch_id?: string;
    entity_type?: string;
    error_file_url?: string;
    file_path?: string;
    file_name?: string;
    updated_at?: string;
    updated_by?: string;
    stage?: string;
};
/** @returns {PageV2} */
declare function PageV2(): PageV2;
type PageV2 = {
    type?: string;
    size?: number;
    current?: number;
    has_next?: boolean;
    item_total?: number;
};
/** @returns {BulkCreateZoneExport} */
declare function BulkCreateZoneExport(): BulkCreateZoneExport;
type BulkCreateZoneExport = {
    placeholder?: string;
};
/** @returns {Zone} */
declare function Zone(): Zone;
type Zone = {
    zone_id: string;
    type: string;
    name: string;
    tags: string[];
    slug: string;
    is_active: boolean;
    store_ids: number[];
    assignment_preference: string;
};
/** @returns {MobileNo} */
declare function MobileNo(): MobileNo;
type MobileNo = {
    number?: string;
    country_code?: number;
};
/** @returns {OpeningClosing} */
declare function OpeningClosing(): OpeningClosing;
type OpeningClosing = {
    minute?: number;
    hour?: number;
};
/** @returns {Dp} */
declare function Dp(): Dp;
type Dp = {
    fm_priority?: number;
    rvp_priority?: number;
    lm_priority?: number;
    internal_account_id?: string;
    area_code?: number;
    payment_mode?: string;
    operations?: string[];
    external_account_id?: string;
    transport_mode?: string;
    assign_dp_from_sb?: boolean;
};
/** @returns {ServiceabilityZoneErrorResult} */
declare function ServiceabilityZoneErrorResult(): ServiceabilityZoneErrorResult;
type ServiceabilityZoneErrorResult = {
    error: ServiceabilityErrorResponseSchema[];
};
/** @returns {ServiceabilityZoneNonMarketplaceErrorResult} */
declare function ServiceabilityZoneNonMarketplaceErrorResult(): ServiceabilityZoneNonMarketplaceErrorResult;
type ServiceabilityZoneNonMarketplaceErrorResult = {
    error: string;
};
/** @returns {PincodeMopData} */
declare function PincodeMopData(): PincodeMopData;
type PincodeMopData = {
    pincodes: number[];
    country: string;
    action: string;
};
/** @returns {PincodeMopUpdateResponseSchema} */
declare function PincodeMopUpdateResponseSchema(): PincodeMopUpdateResponseSchema;
type PincodeMopUpdateResponseSchema = {
    pincode: number;
    channel_id: string;
    country: string;
    is_active: boolean;
};
/** @returns {PincodeMOPresponseSchema} */
declare function PincodeMOPresponseSchema(): PincodeMOPresponseSchema;
type PincodeMOPresponseSchema = {
    batch_id: string;
    success: boolean;
    status_code: number;
    country: string;
    action: string;
    pincodes?: number[];
    updated_pincodes?: PincodeMopUpdateResponseSchema[];
};
/** @returns {CommonError} */
declare function CommonError(): CommonError;
type CommonError = {
    status_code?: number;
    error?: ErrorResponseSchema[];
    success?: boolean;
};
/** @returns {MoPCommonError} */
declare function MoPCommonError(): MoPCommonError;
type MoPCommonError = {
    batch_id?: string;
    status_code?: number;
    error?: ErrorResponseSchema[];
    success?: boolean;
};
/** @returns {PincodeMopBulkData} */
declare function PincodeMopBulkData(): PincodeMopBulkData;
type PincodeMopBulkData = {
    batch_id?: string;
    s3_url: string;
};
/** @returns {PincodeBulkViewResponseSchema} */
declare function PincodeBulkViewResponseSchema(): PincodeBulkViewResponseSchema;
type PincodeBulkViewResponseSchema = {
    batch_id: string;
    s3_url: string;
};
/** @returns {PincodeCodStatusListingRequestSchema} */
declare function PincodeCodStatusListingRequestSchema(): PincodeCodStatusListingRequestSchema;
type PincodeCodStatusListingRequestSchema = {
    country?: string;
    is_active?: boolean;
    pincode?: number;
    current?: number;
    page_size?: number;
};
/** @returns {PincodeCodDataSchema} */
declare function PincodeCodDataSchema(): PincodeCodDataSchema;
type PincodeCodDataSchema = {
    pincode?: string;
    active?: boolean;
};
/** @returns {PincodeCodStatusListingResponseSchema} */
declare function PincodeCodStatusListingResponseSchema(): PincodeCodStatusListingResponseSchema;
type PincodeCodStatusListingResponseSchema = {
    country: string;
    data: PincodeCodDataSchema[];
    success: boolean;
    errors?: Error[];
    page: PincodeCodStatusListingPage;
    summary: PincodeCodStatusListingSummary;
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    type?: string;
    value?: string;
    message?: string;
};
/** @returns {PincodeCodStatusListingPage} */
declare function PincodeCodStatusListingPage(): PincodeCodStatusListingPage;
type PincodeCodStatusListingPage = {
    type: string;
    has_next: boolean;
    item_total: number;
    size: number;
    current: number;
};
/** @returns {PincodeCodStatusListingSummary} */
declare function PincodeCodStatusListingSummary(): PincodeCodStatusListingSummary;
type PincodeCodStatusListingSummary = {
    total_active_pincodes: number;
    total_inactive_pincodes: number;
};
/** @returns {PincodeMopUpdateAuditHistoryRequestSchema} */
declare function PincodeMopUpdateAuditHistoryRequestSchema(): PincodeMopUpdateAuditHistoryRequestSchema;
type PincodeMopUpdateAuditHistoryRequestSchema = {
    entity_type: string;
    file_name?: string;
};
/** @returns {PincodeMopUpdateAuditHistoryPaging} */
declare function PincodeMopUpdateAuditHistoryPaging(): PincodeMopUpdateAuditHistoryPaging;
type PincodeMopUpdateAuditHistoryPaging = {
    type?: string;
    size?: number;
    current?: number;
    has_next?: boolean;
    item_total?: number;
};
/** @returns {PincodeMopUpdateAuditHistoryResponseSchema} */
declare function PincodeMopUpdateAuditHistoryResponseSchema(): PincodeMopUpdateAuditHistoryResponseSchema;
type PincodeMopUpdateAuditHistoryResponseSchema = {
    batch_id?: string;
    entity_type?: string;
    error_file_s3_url?: string;
    s3_url?: string;
    file_name?: string;
    updated_at?: string;
    updated_by?: string;
    success?: boolean;
};
/** @returns {PincodeMopUpdateAuditHistoryResponseData} */
declare function PincodeMopUpdateAuditHistoryResponseData(): PincodeMopUpdateAuditHistoryResponseData;
type PincodeMopUpdateAuditHistoryResponseData = {
    entity_type?: string;
    page: PincodeMopUpdateAuditHistoryPaging;
    data: PincodeMopUpdateAuditHistoryResponseSchema[];
};
/** @returns {ArithmeticOperations} */
declare function ArithmeticOperations(): ArithmeticOperations;
type ArithmeticOperations = {
    lt?: number;
    gt?: number;
    lte?: number;
    gte?: number;
};
/** @returns {SchemeRulesFeatures} */
declare function SchemeRulesFeatures(): SchemeRulesFeatures;
type SchemeRulesFeatures = {
    quality_check?: boolean;
    quick_response_code?: boolean;
    e_waybill?: boolean;
    multi_part_shipments?: boolean;
    flammable?: boolean;
    hazmat?: boolean;
    battery_operated?: boolean;
};
/** @returns {SchemeRules} */
declare function SchemeRules(): SchemeRules;
type SchemeRules = {
    weight?: ArithmeticOperations;
    transport_type?: string[];
    region?: string;
    payment_mode?: string[];
    feature?: SchemeRulesFeatures;
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
    company_id?: number;
    scheme_rules?: any;
};
/** @returns {BulkGeoAreaDetails} */
declare function BulkGeoAreaDetails(): BulkGeoAreaDetails;
type BulkGeoAreaDetails = {
    file_url?: string;
    name?: string;
    slug?: string;
    type?: string;
};
/** @returns {BulkGeoAreaResult} */
declare function BulkGeoAreaResult(): BulkGeoAreaResult;
type BulkGeoAreaResult = {
    geoarea_id?: string;
};
/** @returns {PriceGeoAreaExportResult} */
declare function PriceGeoAreaExportResult(): PriceGeoAreaExportResult;
type PriceGeoAreaExportResult = {
    batch_id?: string;
};
/** @returns {BulkGeoAreaGetResponseSchema} */
declare function BulkGeoAreaGetResponseSchema(): BulkGeoAreaGetResponseSchema;
type BulkGeoAreaGetResponseSchema = {
    batch_id?: string;
    file_path?: string;
    total?: number;
    failed?: number;
    error_file_url?: string;
    action?: string;
    updated_at?: string;
    updated_by?: string;
    type?: string;
    stage?: string;
    file_url?: string;
};
/** @returns {GeoAreaBulkCreationResult} */
declare function GeoAreaBulkCreationResult(): GeoAreaBulkCreationResult;
type GeoAreaBulkCreationResult = {
    /**
     * - The unique identifier of the bulk export batch.
     */
    batch_id?: string;
};
/** @returns {GeoAreaBulkExportResult} */
declare function GeoAreaBulkExportResult(): GeoAreaBulkExportResult;
type GeoAreaBulkExportResult = {
    /**
     * - The unique identifier of the bulk export batch.
     */
    batch_id?: string;
    /**
     * - The file path where the export data will be stored.
     */
    file_path?: string;
    /**
     * - The total number of records processed in the export.
     */
    total?: number;
    /**
     * - The number of records that failed to export.
     */
    failed?: number;
    /**
     * - The URL of the file containing details
     * of errors encountered during the export, if available.
     */
    error_file_url?: string;
    /**
     * - The action performed during the export process,
     * typically "import" or "export".
     */
    action?: string;
    /**
     * - The timestamp when the export status was
     * last updated.
     */
    updated_at?: string;
    /**
     * - The name or identifier of the user or
     * process that last updated the export status.
     */
    updated_by?: string;
    /**
     * - The type of export process, such as "geo_area_bulk_export".
     */
    type?: string;
    /**
     * - The current stage of the export process, such as
     * "initiated", "in_progress", or "completed".
     */
    stage?: string;
};
/** @returns {GeoAreaRequestBody} */
declare function GeoAreaRequestBody(): GeoAreaRequestBody;
type GeoAreaRequestBody = {
    is_active: boolean;
    name: string;
    slug: string;
    type: string;
    areas: Area[];
    region_type: string;
};
/** @returns {GeoAreaErrorResult} */
declare function GeoAreaErrorResult(): GeoAreaErrorResult;
type GeoAreaErrorResult = {
    error?: GeoAreaResponseDetail[];
};
/** @returns {ErrorResponseItem} */
declare function ErrorResponseItem(): ErrorResponseItem;
type ErrorResponseItem = {
    message: string;
    error_name: string;
    error_code: number;
    value: string;
    conflicting_areas: ConflictingArea[];
};
/** @returns {ConflictingArea} */
declare function ConflictingArea(): ConflictingArea;
type ConflictingArea = {
    geoarea_id: string;
    name: string;
};
/** @returns {GeoAreaResponseDetail} */
declare function GeoAreaResponseDetail(): GeoAreaResponseDetail;
type GeoAreaResponseDetail = {
    type?: string;
    value?: string;
    message?: string;
};
/** @returns {ErrorResponseDetail} */
declare function ErrorResponseDetail(): ErrorResponseDetail;
type ErrorResponseDetail = {
    items: ErrorResponseItem[];
};
/** @returns {GeoAreaResponseBody} */
declare function GeoAreaResponseBody(): GeoAreaResponseBody;
type GeoAreaResponseBody = {
    name: string;
    slug: string;
    is_active: boolean;
    areas: Area[];
    region_type: string;
    type: string;
    created_on: string;
    modified_on: string;
    created_by: string;
    modified_by: string;
    geoarea_id: string;
};
/** @returns {GeoAreaPutResponseBody} */
declare function GeoAreaPutResponseBody(): GeoAreaPutResponseBody;
type GeoAreaPutResponseBody = {
    name?: string;
    geoarea_id?: string;
    slug?: string;
    is_active?: boolean;
    areas?: Area[];
    region_type?: string;
    type?: string;
    created_on?: string;
    modified_on?: string;
    created_by?: string;
    modified_by?: string;
    upload_type?: string;
};
/** @returns {Area} */
declare function Area(): Area;
type Area = {
    regions?: string[];
    country?: string;
};
/** @returns {Region} */
declare function Region(): Region;
type Region = {
    uid: string;
    display_name: string;
    sub_type: string;
    parent_id: string[];
};
/** @returns {RegionV2} */
declare function RegionV2(): RegionV2;
type RegionV2 = {
    uid?: string;
    display_name?: string;
    sub_type?: string;
    parent_id?: string[];
};
/** @returns {Country} */
declare function Country(): Country;
type Country = {
    uid: string;
    display_name: string;
};
/** @returns {AreaExpanded} */
declare function AreaExpanded(): AreaExpanded;
type AreaExpanded = {
    country: Country;
    regions: Region[];
};
/** @returns {AreaExpandedV2} */
declare function AreaExpandedV2(): AreaExpandedV2;
type AreaExpandedV2 = {
    country: Country;
    regions: RegionV2[];
};
/** @returns {GeoAreaResponseSchema} */
declare function GeoAreaResponseSchema(): GeoAreaResponseSchema;
type GeoAreaResponseSchema = {
    name: string;
    slug: string;
    application_id?: string;
    company_id?: number;
    geoarea_id: string;
    is_active: boolean;
    type: string;
    region_type: string;
    areas: AreaExpanded[];
    created_on?: string;
    modified_on?: string;
    created_by?: string;
    modified_by?: string;
};
/** @returns {GeoAreaGetResponseBody} */
declare function GeoAreaGetResponseBody(): GeoAreaGetResponseBody;
type GeoAreaGetResponseBody = {
    items?: GeoAreaItemResponseSchema[];
    page?: Page2;
};
/** @returns {GeoAreaItemResponseSchema} */
declare function GeoAreaItemResponseSchema(): GeoAreaItemResponseSchema;
type GeoAreaItemResponseSchema = {
    company_id: number;
    application_id: string;
    geoarea_id: string;
    name: string;
    slug: string;
    is_active: boolean;
    region_type: string;
    type: string;
    areas: AreaExpandedV2[];
    created_on?: string;
    modified_on?: string;
    created_by?: string;
    modified_by?: string;
};
/** @returns {ErrorResponseV2} */
declare function ErrorResponseV2(): ErrorResponseV2;
type ErrorResponseV2 = {
    success: boolean;
    error: string;
};
/** @returns {ErrorResponseSchema} */
declare function ErrorResponseSchema(): ErrorResponseSchema;
type ErrorResponseSchema = {
    value: string;
    message: string;
    type: string;
    error?: string;
};
/** @returns {PackageMaterialNotFound} */
declare function PackageMaterialNotFound(): PackageMaterialNotFound;
type PackageMaterialNotFound = {
    status_code?: number;
    success?: boolean;
};
/** @returns {PackageMaterialsErrorResponseSchema} */
declare function PackageMaterialsErrorResponseSchema(): PackageMaterialsErrorResponseSchema;
type PackageMaterialsErrorResponseSchema = {
    value?: string;
    message?: string;
    type?: string;
    error?: string;
};
/** @returns {CourierPartnerAccountFailureResponseSchema} */
declare function CourierPartnerAccountFailureResponseSchema(): CourierPartnerAccountFailureResponseSchema;
type CourierPartnerAccountFailureResponseSchema = {
    success: boolean;
    error: ErrorResponseSchema[];
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
/** @returns {Page2} */
declare function Page2(): Page2;
type Page2 = {
    size: number;
    item_total: number;
    type: string;
    current: number;
    has_next: boolean;
};
/** @returns {CourierPartnerList} */
declare function CourierPartnerList(): CourierPartnerList;
type CourierPartnerList = {
    extension_id?: string;
    account_id?: string;
    name?: string;
    is_self_ship?: boolean;
    scheme_rules?: any;
    stage?: string;
};
/** @returns {LocationRuleValues} */
declare function LocationRuleValues(): LocationRuleValues;
type LocationRuleValues = {
    uid: string;
    sub_type?: string;
    display_name?: string;
    parent_uid?: string;
    parent_id?: string[];
};
/** @returns {LocationRuleValuesV2} */
declare function LocationRuleValuesV2(): LocationRuleValuesV2;
type LocationRuleValuesV2 = {
    id: string;
    sub_type?: string;
    display_name?: string;
    parent_uid?: string;
    parent_id?: string[];
};
/** @returns {LocationRule} */
declare function LocationRule(): LocationRule;
type LocationRule = {
    type?: string;
    includes?: LocationRuleValues[];
};
/** @returns {LocationRuleV2} */
declare function LocationRuleV2(): LocationRuleV2;
type LocationRuleV2 = {
    type?: string;
    includes?: LocationRuleValuesV2[];
};
/** @returns {StringComparisonOperations} */
declare function StringComparisonOperations(): StringComparisonOperations;
type StringComparisonOperations = {
    includes?: string[];
};
/** @returns {IntComparisonOperations} */
declare function IntComparisonOperations(): IntComparisonOperations;
type IntComparisonOperations = {
    includes?: number[];
};
/** @returns {CourierPartnerRuleConditions} */
declare function CourierPartnerRuleConditions(): CourierPartnerRuleConditions;
type CourierPartnerRuleConditions = {
    forward?: LocationRule;
    reverse?: LocationRule;
    payment_mode?: StringComparisonOperations;
    category_ids?: IntComparisonOperations;
    product_ids?: IntComparisonOperations;
    product_tags?: StringComparisonOperations;
    zone_ids?: StringComparisonOperations;
    department_ids?: IntComparisonOperations;
    brand_ids?: IntComparisonOperations;
    order_place_date?: ArithmeticOperationsV2;
    store_ids?: IntComparisonOperations;
    store_type?: StringComparisonOperations;
    store_tags?: StringComparisonOperations;
    shipment_weight?: ArithmeticOperations;
    shipment_cost?: ArithmeticOperations;
    shipment_volumetric_weight?: ArithmeticOperations;
    company_ids?: IntComparisonOperations;
    promise_types?: StringComparisonOperations;
};
/** @returns {CourierPartnerRuleResponseConditions} */
declare function CourierPartnerRuleResponseConditions(): CourierPartnerRuleResponseConditions;
type CourierPartnerRuleResponseConditions = {
    forward?: LocationRule;
    reverse?: LocationRule;
    payment_mode?: StringComparisonOperations;
    category_ids?: IntComparisonOperations;
    product_ids?: IntComparisonOperations;
    product_tags?: StringComparisonOperations;
    zone_ids?: StringComparisonOperations;
    department_ids?: IntComparisonOperations;
    brand_ids?: IntComparisonOperations;
    order_place_date?: ArithmeticOperationsV2;
    store_ids?: IntComparisonOperations;
    store_type?: StringComparisonOperations;
    store_tags?: StringComparisonOperations;
    shipment_weight?: ArithmeticOperations;
    shipment_cost?: ArithmeticOperations;
    shipment_volumetric_weight?: ArithmeticOperations;
    company_ids?: IntComparisonOperations;
    promise_types?: StringComparisonOperations;
};
/** @returns {CourierPartnerRule} */
declare function CourierPartnerRule(): CourierPartnerRule;
type CourierPartnerRule = {
    id?: string;
    application_id?: string;
    company_id?: number;
    is_active: boolean;
    cp_list?: CourierPartnerList[];
    name: string;
    conditions: CourierPartnerRuleConditions;
    manual_priority?: string[];
    sort: string[];
    shipment_adjustment_type?: string;
    type: string;
};
/** @returns {CourierPartnerRuleResponseSchema} */
declare function CourierPartnerRuleResponseSchema(): CourierPartnerRuleResponseSchema;
type CourierPartnerRuleResponseSchema = {
    id?: string;
    is_active: boolean;
    cp_list?: CourierPartnerList[];
    name: string;
    conditions: CourierPartnerRuleResponseConditions;
    manual_priority?: string[];
    sort: string[];
    type: string;
    application_id?: string;
    company_id?: number;
    shipment_adjustment_type?: string;
};
/** @returns {FailureResponseSchema} */
declare function FailureResponseSchema(): FailureResponseSchema;
type FailureResponseSchema = {
    success: boolean;
    error: ErrorResponseSchema[];
};
/** @returns {CourierPartnerRulesListResponseSchema} */
declare function CourierPartnerRulesListResponseSchema(): CourierPartnerRulesListResponseSchema;
type CourierPartnerRulesListResponseSchema = {
    items: CourierPartnerRuleResponseSchema[];
    page: Page;
};
/** @returns {CompanyConfig} */
declare function CompanyConfig(): CompanyConfig;
type CompanyConfig = {
    company_id?: number;
    sort?: string[];
    logistics_as_actual?: string;
};
/** @returns {StorePromiseAttributeConfig} */
declare function StorePromiseAttributeConfig(): StorePromiseAttributeConfig;
type StorePromiseAttributeConfig = {
    is_operational_timing_enabled?: boolean;
    is_order_acceptance_timing_enabled?: boolean;
    is_average_processing_time?: boolean;
    is_holiday_enabled?: boolean;
};
/** @returns {DeliveryServiceAttributeConfig} */
declare function DeliveryServiceAttributeConfig(): DeliveryServiceAttributeConfig;
type DeliveryServiceAttributeConfig = {
    is_pickup_cutoff_time_enabled?: boolean;
    is_service_tat_enabled?: boolean;
    is_holiday_enabled?: boolean;
};
/** @returns {BufferField} */
declare function BufferField(): BufferField;
type BufferField = {
    unit?: string;
    value?: number;
    enabled?: boolean;
};
/** @returns {PromiseConfig} */
declare function PromiseConfig(): PromiseConfig;
type PromiseConfig = {
    store_attributes?: StorePromiseAttributeConfig;
    delivery_service_attributes?: DeliveryServiceAttributeConfig;
    buffer_field?: BufferField;
};
/** @returns {ApplicationConfig} */
declare function ApplicationConfig(): ApplicationConfig;
type ApplicationConfig = {
    rule_ids?: string[];
    sort?: string[];
    application_id?: string;
    company_id?: number;
    manual_priority?: string[];
    zones?: ZoneConfig;
    buybox_rule_config?: BuyboxRuleConfig;
    promise_types?: PromiseType[];
    promise_config?: PromiseConfig;
};
/** @returns {ApplicationConfigPatchRequestSchema} */
declare function ApplicationConfigPatchRequestSchema(): ApplicationConfigPatchRequestSchema;
type ApplicationConfigPatchRequestSchema = {
    courier_partner_config?: CourierPartnerConfig;
    buybox_rule_config?: BuyboxRuleConfig;
    promise_config?: PromiseConfig;
};
/** @returns {ApplicationConfigPatchResponseSchema} */
declare function ApplicationConfigPatchResponseSchema(): ApplicationConfigPatchResponseSchema;
type ApplicationConfigPatchResponseSchema = {
    success?: boolean;
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
/** @returns {SelfShipResponseSchema} */
declare function SelfShipResponseSchema(): SelfShipResponseSchema;
type SelfShipResponseSchema = {
    is_active: boolean;
    tat: number;
};
/** @returns {ApplicationSelfShipConfig} */
declare function ApplicationSelfShipConfig(): ApplicationSelfShipConfig;
type ApplicationSelfShipConfig = {
    self_ship?: any;
};
/** @returns {StoreRuleConfigData} */
declare function StoreRuleConfigData(): StoreRuleConfigData;
type StoreRuleConfigData = {
    rule_ids?: string[];
    type_based_priority?: string[];
    tag_based_priority?: string[];
    store_priority?: StorePrioritySchema[];
    sort?: string[];
    manual_priority?: number[];
    meta_sort_priority?: any;
};
/** @returns {CustomerRadiusSchema} */
declare function CustomerRadiusSchema(): CustomerRadiusSchema;
type CustomerRadiusSchema = {
    unit: string;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
};
/** @returns {StoreRuleConditionSchema} */
declare function StoreRuleConditionSchema(): StoreRuleConditionSchema;
type StoreRuleConditionSchema = {
    department_ids?: IntComparisonOperations;
    category_ids?: IntComparisonOperations;
    brand_ids?: IntComparisonOperations;
    to_location?: LocationRuleV2;
    customer_radius?: CustomerRadiusSchema;
    store_type?: StringComparisonOperations;
    product_tags?: StringComparisonOperations;
    product_ids?: IntComparisonOperations;
    store_tags?: StringComparisonOperations;
    order_place_date?: ArithmeticOperationsV2;
    zone_ids?: StringComparisonOperations;
};
/** @returns {StoreRuleDataSchema} */
declare function StoreRuleDataSchema(): StoreRuleDataSchema;
type StoreRuleDataSchema = {
    id?: string;
    name?: string;
    company_id?: number;
    application_id?: string;
    type_based_priority?: string[];
    tag_based_priority?: string[];
    store_priority?: StorePrioritySchema[];
    sort?: string[];
    manual_priority?: number[];
    meta_sort_priority?: any;
    meta_conditions?: any;
    conditions?: StoreRuleConditionSchema;
    is_active?: boolean;
};
/** @returns {StorePrioritySchema} */
declare function StorePrioritySchema(): StorePrioritySchema;
type StorePrioritySchema = {
    id?: number;
    name?: string;
};
/** @returns {GetStoreRulesApiResponseSchema} */
declare function GetStoreRulesApiResponseSchema(): GetStoreRulesApiResponseSchema;
type GetStoreRulesApiResponseSchema = {
    items?: StoreRuleDataSchema[];
    page?: Page;
};
/** @returns {CreateStoreRuleRequestSchema} */
declare function CreateStoreRuleRequestSchema(): CreateStoreRuleRequestSchema;
type CreateStoreRuleRequestSchema = {
    name?: string;
    is_active?: boolean;
    conditions?: StoreRuleConditionSchema;
    type_based_priority?: string[];
    tag_based_priority?: string[];
    store_priority?: StorePrioritySchema[];
    manual_priority?: number[];
    sort?: string[];
};
/** @returns {StoreRuleResponseSchema} */
declare function StoreRuleResponseSchema(): StoreRuleResponseSchema;
type StoreRuleResponseSchema = {
    id?: string;
    name?: string;
    type?: string;
    type_based_priority?: string[];
    tag_based_priority?: string[];
    store_priority?: StorePrioritySchema[];
    sort?: string[];
    manual_priority?: number[];
    conditions?: StoreRuleConditionSchema;
    is_active?: boolean;
};
/** @returns {StoreRuleUpdateResponseSchema} */
declare function StoreRuleUpdateResponseSchema(): StoreRuleUpdateResponseSchema;
type StoreRuleUpdateResponseSchema = {
    id?: string;
    name?: string;
    type?: string;
    type_based_priority?: string[];
    tag_based_priority?: string[];
    store_priority?: StorePrioritySchema[];
    sort?: string[];
    manual_priority?: number[];
    conditions?: StoreRuleConditionSchema;
    is_active?: boolean;
    company_id?: number;
    application_id?: string;
};
/** @returns {ServiceabilityModel} */
declare function ServiceabilityModel(): ServiceabilityModel;
type ServiceabilityModel = {
    lm_cod_limit: number;
    is_qc: boolean;
    pickup_cutoff?: string;
    route_code?: string;
    is_first_mile: boolean;
    is_return: boolean;
    is_installation: boolean;
    is_last_mile: boolean;
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
/** @returns {CourierAccountSchemeResponseSchema} */
declare function CourierAccountSchemeResponseSchema(): CourierAccountSchemeResponseSchema;
type CourierAccountSchemeResponseSchema = {
    name?: string;
    extension_id?: string;
    scheme_id?: string;
    weight?: ArithmeticOperations;
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
/** @returns {CompanyCourierPartnerAccountListResponseSchema} */
declare function CompanyCourierPartnerAccountListResponseSchema(): CompanyCourierPartnerAccountListResponseSchema;
type CompanyCourierPartnerAccountListResponseSchema = {
    items: CourierAccountResponseSchema[];
    page: Page;
};
/** @returns {PackageMaterial} */
declare function PackageMaterial(): PackageMaterial;
type PackageMaterial = {
    company_id?: number;
    item_id?: number;
    id?: string;
    name: string;
    width: number;
    height: number;
    length: number;
    weight: number;
    auto_calculate?: boolean;
    max_weight?: number;
    package_vol_weight?: number;
    error_rate: number;
    channels: Channel[];
    package_type: string;
    size: string;
    track_inventory?: boolean;
    rules?: PackageMaterialRule[];
    store_ids: number[];
    mp_stores?: PackageMpStores[];
    media?: string[];
    status: string;
    is_active?: boolean;
};
/** @returns {CourierPartnerRuleDeleteResponseSchema} */
declare function CourierPartnerRuleDeleteResponseSchema(): CourierPartnerRuleDeleteResponseSchema;
type CourierPartnerRuleDeleteResponseSchema = {
    message?: string;
};
/** @returns {StoreRuleDeleteResponseSchema} */
declare function StoreRuleDeleteResponseSchema(): StoreRuleDeleteResponseSchema;
type StoreRuleDeleteResponseSchema = {
    message?: string;
};
/** @returns {PackageMaterialDeleteResponseSchema} */
declare function PackageMaterialDeleteResponseSchema(): PackageMaterialDeleteResponseSchema;
type PackageMaterialDeleteResponseSchema = {
    message?: string;
};
/** @returns {PackageMaterialResponseSchema} */
declare function PackageMaterialResponseSchema(): PackageMaterialResponseSchema;
type PackageMaterialResponseSchema = {
    company_id?: number;
    name: string;
    id?: string;
    width: number;
    height: number;
    length: number;
    rules?: PackageMaterialRule[];
    store_ids: number[];
    weight: number;
    error_rate: number;
    package_type: string;
    size: string;
    media?: string[];
    channels: Channel[];
    track_inventory?: boolean;
    is_active?: boolean;
    status: string;
    max_weight?: number;
    package_vol_weight?: number;
    auto_calculate?: boolean;
    mp_stores?: PackageMpStores[];
};
/** @returns {PackageMaterialRule} */
declare function PackageMaterialRule(): PackageMaterialRule;
type PackageMaterialRule = {
    rule_id?: string;
    quantity?: PackageMaterialRuleQuantity;
    weight?: number;
    company_id?: number;
    is_active?: boolean;
    type?: string;
    name?: string;
    id?: string;
};
/** @returns {PackageMpStores} */
declare function PackageMpStores(): PackageMpStores;
type PackageMpStores = {
    app_name?: string;
    app_id?: string;
    store_ids?: number[];
    store_data?: any;
};
/** @returns {PackageRuleRequestSchema} */
declare function PackageRuleRequestSchema(): PackageRuleRequestSchema;
type PackageRuleRequestSchema = {
    name: string;
    company_id: number;
    category_id?: PackageRuleCategory;
    product_id?: PackageRuleProduct;
    product_tag?: PackageRuleProductTag;
    department_id?: PackageRuleDepartmentId;
    product_attributes?: PackageRuleProductAttributes;
    type: string;
    is_active?: boolean;
};
/** @returns {PackageRule} */
declare function PackageRule(): PackageRule;
type PackageRule = {
    name: string;
    id?: string;
    item_id?: number;
    company_id: number;
    width?: number;
    height?: number;
    length?: number;
    rules?: PackageMaterialRule[];
    store_ids?: number[];
    weight?: number;
    error_rate?: number;
    package_type?: string;
    size?: string;
    media?: string[];
    channels?: Channel[];
    track_inventory?: boolean;
    status?: string;
    max_weight?: number;
    package_vol_weight?: number;
    auto_calculate?: boolean;
    mp_stores?: PackageMpStores[];
};
/** @returns {PackageRuleResult} */
declare function PackageRuleResult(): PackageRuleResult;
type PackageRuleResult = {
    is_active?: boolean;
    company_id: number;
    product_id?: PackageRuleProduct;
    category_id?: PackageRuleCategory;
    department_id?: PackageRuleDepartmentId;
    product_tag?: PackageRuleProductTag;
    product_attributes?: PackageRuleProductAttributes;
    name: string;
    type: string;
    id?: string;
};
/** @returns {Channel} */
declare function Channel(): Channel;
type Channel = {
    type?: string;
    id?: string;
};
/** @returns {PackageMaterialRuleList} */
declare function PackageMaterialRuleList(): PackageMaterialRuleList;
type PackageMaterialRuleList = {
    items?: PackageRuleResult[];
    page?: Page;
};
/** @returns {PackageMaterialList} */
declare function PackageMaterialList(): PackageMaterialList;
type PackageMaterialList = {
    items?: any;
    page?: Page;
};
/** @returns {PackageRuleProduct} */
declare function PackageRuleProduct(): PackageRuleProduct;
type PackageRuleProduct = {
    includes?: number[];
};
/** @returns {PackageRuleProductTag} */
declare function PackageRuleProductTag(): PackageRuleProductTag;
type PackageRuleProductTag = {
    includes?: string[];
};
/** @returns {PackageRuleCategory} */
declare function PackageRuleCategory(): PackageRuleCategory;
type PackageRuleCategory = {
    includes?: number[];
};
/** @returns {PackageRuleProductAttributes} */
declare function PackageRuleProductAttributes(): PackageRuleProductAttributes;
type PackageRuleProductAttributes = {
    includes?: any[];
};
/** @returns {PackageRuleDepartmentId} */
declare function PackageRuleDepartmentId(): PackageRuleDepartmentId;
type PackageRuleDepartmentId = {
    includes?: number[];
};
/** @returns {PackageMaterialRuleQuantity} */
declare function PackageMaterialRuleQuantity(): PackageMaterialRuleQuantity;
type PackageMaterialRuleQuantity = {
    min?: number;
    max?: number;
};
/** @returns {RulePriorityRequestSchema} */
declare function RulePriorityRequestSchema(): RulePriorityRequestSchema;
type RulePriorityRequestSchema = {
    rule_id: string;
    priority: number;
};
/** @returns {RulePriorityResponseSchema} */
declare function RulePriorityResponseSchema(): RulePriorityResponseSchema;
type RulePriorityResponseSchema = {
    success?: boolean;
};
/** @returns {CompanySelfShip} */
declare function CompanySelfShip(): CompanySelfShip;
type CompanySelfShip = {
    is_active: boolean;
    tat: number;
    unit: string;
};
/** @returns {ArithmeticOperationsV2} */
declare function ArithmeticOperationsV2(): ArithmeticOperationsV2;
type ArithmeticOperationsV2 = {
    lt?: string;
    gt?: string;
    lte?: string;
    gte?: string;
};
/** @returns {CompanyConfigurationShema} */
declare function CompanyConfigurationShema(): CompanyConfigurationShema;
type CompanyConfigurationShema = {
    sort?: string[];
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
