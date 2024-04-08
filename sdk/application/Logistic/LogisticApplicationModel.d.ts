export = LogisticApplicationModel;
/**
 * @typedef PackagingDimension
 * @property {number} length - The length dimension of packaging.
 * @property {number} width - The width dimension of packaging.
 * @property {number} height - The height dimension of packaging.
 */
/**
 * @typedef ShipmentArticleMeta
 * @property {boolean} [is_set] - A boolean indicating whether the article is a set.
 * @property {Object} [set] - An ArticleSet object describing the attributes of
 *   the set, if the article is a set.
 * @property {boolean} [is_set_article] - A boolean indicating whether the
 *   article is included in the set.
 * @property {number} [set_quantity] - It represents the number of set of this article
 * @property {string} [split_article_id] - This key is used to identify the
 *   bundle products
 * @property {string[]} [promo_ids] - The list of promo ids applied on this article
 */
/**
 * @typedef DeliveryTat
 * @property {number} [min] - The minimum tat in integer.
 * @property {number} [max] - The maximum tat in integer.
 */
/**
 * @typedef CourierPartnerPromiseData
 * @property {string} [min] - The minimum promised delivery time in ISO 8601 format.
 * @property {string} [max] - The maximum promised delivery time in ISO 8601 format.
 * @property {DeliveryTat} [attributes]
 */
/**
 * @typedef PromiseMeta
 * @property {PromiseData} [seller_promise]
 * @property {CourierPartnerPromiseData} [courier_partner_promise]
 * @property {PromiseData} [customer_initial_promise]
 */
/**
 * @typedef PromiseData
 * @property {string} [min] - The minimum promised delivery time in ISO 8601 format.
 * @property {string} [max] - The maximum promised delivery time in ISO 8601 format.
 */
/**
 * @typedef CourierPartnersTat
 * @property {number} min - The minimum transit time.
 * @property {number} max - The maximum transit time.
 */
/**
 * @typedef AreaCode
 * @property {string} [source] - The starting area code.
 * @property {string} [destination] - The ending area code.
 */
/**
 * @typedef SetSize
 * @property {number} pieces - The number of pieces in the set.
 * @property {string} size - The size description of the set.
 */
/**
 * @typedef ArticleSizeDistribution
 * @property {SetSize[]} sizes - A collection of different size options and
 *   their corresponding pieces.
 */
/**
 * @typedef SetSizeItem
 * @property {number} [pieces]
 * @property {string} [size]
 */
/**
 * @typedef SetSizeDistribution
 * @property {SetSizeItem[]} [sizes]
 */
/**
 * @typedef PromiseObject
 * @property {PromiseData} [customer_promise]
 * @property {PromiseMeta} [meta]
 */
/**
 * @typedef ShipmentCourierPartners
 * @property {string} extension_id - The ID of the courier partner.
 * @property {string} scheme_id - The scheme ID of the courier partner.
 * @property {AreaCode} area_code
 * @property {CourierPartnersTat} tat
 * @property {string} display_name - The display name of the courier partner.
 * @property {boolean} is_qc_enabled - A boolean indicating quality control by
 *   the courier partner.
 * @property {boolean} is_self_ship - A boolean indicating it is self delivery DP support.
 */
/**
 * @typedef ShipmentsArticles
 * @property {string} id - The ID of the shipment article.
 * @property {number} quantity - The quantity of the shipment article.
 * @property {number} item_id - The Item ID of the article.
 * @property {string} size - The size of the article.
 * @property {boolean} [is_set] - A boolean indicating whether the article is a set.
 * @property {ArticleSet} [set]
 * @property {string} sla - SLA in UTC format of article
 * @property {ShipmentArticleMeta} [meta]
 */
/**
 * @typedef ArticleReturnReason
 * @property {string[]} [qc_type] - List of string having return reason values
 */
/**
 * @typedef ArticleDeliverySlots
 * @property {string} delivery_date - The delivery date for the article.
 * @property {string} min_slot - The minimum delivery time slot.
 * @property {string} max_slot - The maximum delivery time slot.
 */
/**
 * @typedef ArticleSet
 * @property {string} name - The name of the article set.
 * @property {number} quantity - The quantity of the article set.
 * @property {ArticleSizeDistribution} size_distribution
 */
/**
 * @typedef ArticleDimension
 * @property {number} height - The height of the article.
 * @property {boolean} is_default - A boolean indicating whether this dimension
 *   is the default dimension.
 * @property {number} length - The length of the article.
 * @property {string} unit - The unit of measurement used for the dimensions.
 * @property {number} width - The width of the article.
 */
/**
 * @typedef ArticleAttributes
 * @property {string} battery_operated - Yes/no indicating whether the article
 *   is powered by batteries.
 * @property {string} is_flammable - Yes/no indicating whether the article is
 *   considered flammable or poses a fire hazard.
 */
/**
 * @typedef ArticleWeight
 * @property {number} shipping - The weight of the article for shipping
 *   purposes, typically measured in a specified unit.
 * @property {string} unit - The unit of measurement used for the weight value
 *   (e.g., kilogram, pounds).
 * @property {boolean} is_default - A boolean indicating whether this weight is
 *   the default weight for the article.
 */
/**
 * @typedef ServiceabilityLocation
 * @property {string} longitude - The longitude of the serviceability location.
 * @property {string} latitude - The latitude of the serviceability location.
 */
/**
 * @typedef Shipments
 * @property {number} fulfillment_id - The fulfillment ID.
 * @property {number} count - Shipment replication count.
 * @property {ShipmentsArticles[]} articles - A list of articles in the shipment.
 * @property {ShipmentCourierPartners[]} courier_partners
 * @property {PromiseObject} [promise]
 * @property {string[]} [tags] - Tags associated with the shipment.
 * @property {boolean} is_mto - A boolean indicating if the courier partner
 *   supports "Made to Order" service.
 * @property {boolean} is_gift - A boolean indicating if the courier partner
 *   supports gift shipments.
 * @property {boolean} is_locked - A boolean indicating if the courier partner is locked.
 * @property {Packaging} packaging
 * @property {ArticleDeliverySlots} [delivery_slots]
 * @property {number} weight - Actual weight of the shipment.
 * @property {number} volumetric_weight - Volumetric weight of the shipment.
 * @property {boolean} is_auto_assign - A boolean indicating auto-assignment of
 *   the fullfilment location.
 * @property {string} shipment_type - Shipment type i.e. whether is single
 *   article single shipment or bulk shipment.
 * @property {Object} from_serviceability
 */
/**
 * @typedef LocationDetailsArticle
 * @property {string} id - The ID of the article.
 * @property {number} item_id - The Item ID of the article.
 * @property {string[]} tags - Tags assigned to Item.
 * @property {string} size - The size of the article.
 * @property {string} [group_id] - The group ID of the article.
 * @property {ArticleWeight} weight
 * @property {ArticleAttributes} [attributes]
 * @property {number} category_id - The category ID of the article.
 * @property {number} department_id
 * @property {ArticleDimension} dimension
 * @property {number} price - Final Price of the article after discounts
 * @property {number} brand_id - The brand ID of the article.
 * @property {number} quantity - The quantity of the article.
 * @property {number} [manufacturing_time] - The manufacturing time of the article.
 * @property {string} [manufacturing_time_unit] - The unit of measurement for
 *   manufacturing time.
 * @property {number} [mto_quantity] - The "Made to Order" quantity of the article.
 * @property {boolean} is_gift - A boolean indicating whether the article is a gift.
 * @property {boolean} is_set - A boolean indicating whether the article is a set.
 * @property {ArticleSet} [set]
 * @property {number} [set_quantity] - The quantity of the article set.
 * @property {ArticleDeliverySlots} [delivery_slots]
 * @property {ArticleReturnReason} [return_reason]
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
 * @typedef GenerateShipmentsLocationArticles
 * @property {number} fulfillment_id - The fulfillment ID.
 * @property {LocationDetailsServiceability} from_serviceability
 * @property {string} fulfillment_type - The type of fulfillment.
 * @property {string[]} fulfillment_tags - Fulfillment level tags
 * @property {LocationDetailsArticle[]} articles - A list of articles and their details.
 * @property {boolean} [ewaybill_enabled]
 * @property {boolean} [is_home_delivery]
 */
/**
 * @typedef GenerateShipmentsRequest
 * @property {LocationDetailsServiceability} to_serviceability
 * @property {GenerateShipmentsLocationArticles[]} location_articles - A list of
 *   location-based article details.
 * @property {string} journey - The journey details for the shipment.
 * @property {string} [payment_mode] - The payment mode for the shipment.
 */
/**
 * @typedef GenerateShipmentsAndCourierPartnerResponse
 * @property {Shipments[]} shipments - A list of generated shipments.
 * @property {boolean} is_cod_available - A boolean indicating if COD (COD) is available.
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
 * @typedef Summary
 * @property {number} [stores_count]
 * @property {number} [products_count]
 * @property {RegionSchema[]} [regions]
 */
/**
 * @typedef RegionSchema
 * @property {string} [name]
 * @property {number} [count]
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
 * @typedef Region
 * @property {string} uid
 * @property {string} display_name
 * @property {string} sub_type
 * @property {string[]} parent_id
 * @property {string} parent_uid
 */
/**
 * @typedef GeoAreaGetResponseBody
 * @property {GeoAreaItemResponse[]} [items]
 * @property {Page2} [page]
 */
/**
 * @typedef GeoAreaItemResponse
 * @property {string} geoarea_id
 * @property {string} name
 * @property {string} slug
 * @property {boolean} is_active
 * @property {string} region_type
 * @property {string} [type]
 * @property {AreaExpandedV2[]} [areas]
 * @property {string} created_on
 * @property {string} modified_on
 * @property {string} created_by
 * @property {string} modified_by
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
 * @typedef AreaExpandedV2
 * @property {Country} country
 * @property {RegionV2[]} regions
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
 * @typedef ServiceabilityZoneErrorResponse
 * @property {ServiceabilityErrorResponse[]} error
 */
/**
 * @typedef ServiceabilityErrorResponse
 * @property {string} message
 * @property {string} value
 * @property {string} type
 */
/**
 * @typedef GetStoreResponse
 * @property {StoreItemResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef StoreItemResponse
 * @property {number} [id]
 * @property {string} [store_type]
 * @property {string} [fulfillment_type]
 * @property {number} [processing_time]
 * @property {string[]} [tags]
 * @property {number} [company_id]
 * @property {number} [latitude]
 * @property {number} [longitude]
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
 * @typedef PincodeParentsResponse
 * @property {string} [sub_type]
 * @property {string} [display_name]
 * @property {string} [name]
 * @property {string} [uid]
 */
/**
 * @typedef PincodeMetaResponse
 * @property {string} [zone]
 * @property {number} [internal_zone_id]
 */
/**
 * @typedef PincodeErrorSchemaResponse
 * @property {string} [message]
 * @property {string} [value]
 * @property {string} [type]
 */
/**
 * @typedef PincodeLatLongData
 * @property {string} [type]
 * @property {number[]} [coordinates]
 */
/**
 * @typedef PincodeDataResponse
 * @property {PincodeParentsResponse[]} [parents]
 * @property {PincodeMetaResponse} [meta]
 * @property {string} [display_name]
 * @property {PincodeErrorSchemaResponse} error
 * @property {CountryMetaResponse} [meta_code]
 * @property {PincodeLatLongData} [lat_long]
 * @property {string} [sub_type]
 * @property {string} [name]
 * @property {string} [uid]
 */
/**
 * @typedef PincodeApiResponse
 * @property {boolean} success
 * @property {PincodeDataResponse[]} [data]
 * @property {PincodeErrorSchemaResponse} error
 */
/**
 * @typedef TATCategoryRequest
 * @property {string} [level]
 * @property {number} [id]
 */
/**
 * @typedef TATArticlesRequest
 * @property {TATCategoryRequest} [category]
 * @property {string} [manufacturing_time_unit]
 * @property {number} [manufacturing_time]
 */
/**
 * @typedef TATLocationDetailsRequest
 * @property {number} [fulfillment_id]
 * @property {string} [from_pincode]
 * @property {TATArticlesRequest[]} [articles]
 */
/**
 * @typedef TATViewRequest
 * @property {string} [to_pincode]
 * @property {string} [source]
 * @property {string} [action]
 * @property {string} [identifier]
 * @property {TATLocationDetailsRequest[]} [location_details]
 * @property {string} [journey]
 */
/**
 * @typedef TATErrorSchemaResponse
 * @property {string} [message]
 * @property {string} [value]
 * @property {string} [type]
 */
/**
 * @typedef TATTimestampResponse
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef TATFormattedResponse
 * @property {string} [min]
 * @property {string} [max]
 */
/**
 * @typedef TATPromiseResponse
 * @property {TATTimestampResponse} [timestamp]
 * @property {TATFormattedResponse} [formatted]
 */
/**
 * @typedef TATArticlesResponse
 * @property {string} [manufacturing_time_unit]
 * @property {TATErrorSchemaResponse} [error]
 * @property {boolean} [is_cod_available]
 * @property {TATPromiseResponse} [promise]
 * @property {number} [manufacturing_time]
 * @property {TATCategoryRequest} [category]
 * @property {number} [_manufacturing_time_seconds]
 */
/**
 * @typedef TATLocationDetailsResponse
 * @property {number} [fulfillment_id]
 * @property {string} [from_pincode]
 * @property {TATArticlesResponse[]} [articles]
 */
/**
 * @typedef TATViewResponse
 * @property {string} [to_pincode]
 * @property {string} [request_uuid]
 * @property {string} [payment_mode]
 * @property {boolean} [success]
 * @property {TATErrorSchemaResponse} [error]
 * @property {boolean} [is_cod_available]
 * @property {string} [source]
 * @property {string} [action]
 * @property {string} [stormbreaker_uuid]
 * @property {string} [to_city]
 * @property {string} [identifier]
 * @property {TATLocationDetailsResponse[]} [location_details]
 * @property {string} [journey]
 */
/**
 * @typedef DP
 * @property {number} fm_priority
 * @property {number} lm_priority
 * @property {number} rvp_priority
 * @property {string} payment_mode
 * @property {string[]} operations
 * @property {string} [area_code]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [internal_account_id]
 * @property {string} [external_account_id]
 * @property {string} [transport_mode]
 */
/**
 * @typedef LogisticsResponse
 * @property {Object} [dp]
 */
/**
 * @typedef CountryMetaResponse
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {CurrencyObject} [currency]
 * @property {string} [phone_code]
 * @property {string} [parent_id]
 * @property {string} [zone]
 * @property {string[]} [deliverables]
 * @property {CountryHierarchy[]} [hierarchy]
 * @property {LogisticsResponse} [logistics]
 */
/**
 * @typedef CountryEntityResponse
 * @property {string} [display_name]
 * @property {boolean} [is_active]
 * @property {string} [parent_id]
 * @property {string} [sub_type]
 * @property {string} [name]
 * @property {string} [uid]
 * @property {Object} [lat_long]
 * @property {CountryMetaResponse} [meta]
 * @property {LogisticsResponse} [logistics]
 */
/**
 * @typedef CountryListResponse
 * @property {CountryEntityResponse[]} [results]
 */
/**
 * @typedef GetZoneFromPincodeViewRequest
 * @property {string} pincode
 * @property {string} country
 */
/**
 * @typedef GetZoneFromPincodeViewResponse
 * @property {string} serviceability_type
 * @property {string[]} zones
 */
/**
 * @typedef ReAssignStoreRequest
 * @property {Object} configuration
 * @property {string} to_pincode
 * @property {number[]} ignored_locations
 * @property {string} identifier
 * @property {Object[]} articles
 */
/**
 * @typedef ReAssignStoreResponse
 * @property {string} to_pincode
 * @property {string} pystormbreaker_uuid
 * @property {boolean} success
 * @property {Object} error
 * @property {Object[]} [assigned_stores]
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
/**
 * @typedef GetOneOrAllPath
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef GetOneOrAllQuery
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [sector]
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
 * @typedef LengthValidation
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef FieldValidationRegex
 * @property {string} [value]
 * @property {LengthValidation} [length]
 */
/**
 * @typedef FieldValidation
 * @property {string} [type]
 * @property {FieldValidationRegex} [regex]
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
 * @property {string} [pre_fill]
 * @property {FieldValidation} [validation]
 * @property {GetCountryFieldsAddressValues} [values]
 * @property {string} [error_text]
 */
/**
 * @typedef GetCountryFieldsAddressTemplate
 * @property {string} checkout_form
 * @property {string} store_os_form
 * @property {string} default_display
 */
/**
 * @typedef GetCountryFields
 * @property {GetCountryFieldsAddress[]} address
 * @property {string[]} serviceability_fields
 * @property {GetCountryFieldsAddressTemplate} address_template
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
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
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
 * @typedef ErrorObject
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [message]
 */
/**
 * @typedef GetLocalities
 * @property {Localities[]} [items]
 * @property {Page} [page]
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
 * @typedef ErrorResponse
 * @property {string} [error]
 */
/**
 * @typedef ErrorResponseV2
 * @property {string} [message]
 */
/**
 * @typedef ErrorResponseV3
 * @property {boolean} [success]
 * @property {ErrorObject} [error]
 */
/**
 * @typedef ShipmentRequest
 * @property {ServiceabilityNew} [to_serviceability]
 * @property {LocationArticle[]} [location_articles]
 * @property {string} [journey]
 * @property {string} [payment_mode]
 */
/**
 * @typedef LocationArticle
 * @property {number} [fulfillment_id]
 * @property {ServiceabilityNew} [from_serviceability]
 * @property {string} [fulfillment_type]
 * @property {string[]} [fulfillment_tags]
 * @property {Article[]} [articles]
 */
/**
 * @typedef Article
 * @property {string} [id]
 * @property {number} [item_id]
 * @property {string[]} [tags]
 * @property {string} [size]
 * @property {number} [price]
 * @property {Weight} [weight]
 * @property {Attributes} [attributes]
 * @property {number} [category_id]
 * @property {Dimension} [dimension]
 * @property {number} [brand_id]
 * @property {number} [department_id]
 * @property {number} [quantity]
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 * @property {number} [mto_quantity]
 * @property {boolean} [is_gift]
 * @property {boolean} [is_set]
 * @property {Set} [set]
 * @property {number} [set_quantity]
 * @property {DeliverySlots} [delivery_slots]
 */
/**
 * @typedef Weight
 * @property {number} [shipping]
 * @property {string} [unit]
 * @property {boolean} [is_default]
 */
/**
 * @typedef Attributes
 * @property {string} [battery_operated]
 * @property {string} [is_flammable]
 */
/**
 * @typedef Dimension
 * @property {number} [height]
 * @property {boolean} [is_default]
 * @property {number} [length]
 * @property {string} [unit]
 * @property {number} [width]
 */
/**
 * @typedef Set
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {SetSizeDistribution} [size_distribution]
 */
/**
 * @typedef DeliverySlots
 * @property {string} [delivery_date]
 * @property {string} [min_slot]
 * @property {string} [max_slot]
 */
/**
 * @typedef ServiceabilityNew
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [sector]
 * @property {string} [country_iso_code]
 * @property {Location} [location]
 * @property {string} [pincode]
 */
/**
 * @typedef Location
 * @property {string} [longitude]
 * @property {string} [latitude]
 */
/**
 * @typedef ShipmentResponse
 * @property {ShipmentItem[]} [shipments]
 * @property {boolean} [is_cod_available]
 */
/**
 * @typedef Meta
 * @property {number} [shipment_cost]
 */
/**
 * @typedef ShipmentItem
 * @property {number} [fulfillment_id]
 * @property {string[]} [fulfillment_tags]
 * @property {string} [fulfillment_type]
 * @property {ServiceabilityNew} [from_serviceability]
 * @property {Article[]} [articles]
 * @property {CourierPartner[]} [courier_partners]
 * @property {Promise} [promise]
 * @property {string[]} [tags]
 * @property {boolean} [is_mto]
 * @property {boolean} [is_gift]
 * @property {boolean} [is_locked]
 * @property {Packaging} [packaging]
 * @property {DeliverySlots} [delivery_slots]
 * @property {number} [count]
 * @property {number} [volumetric_weight]
 * @property {string} [ewaybill_enabled]
 * @property {boolean} [mps]
 * @property {Meta} [meta]
 * @property {number} [weight]
 * @property {string} [shipment_type]
 * @property {boolean} [is_auto_assign]
 * @property {boolean} [is_cod_available]
 */
/**
 * @typedef TAT
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef CourierPartner
 * @property {string} [extension_id]
 * @property {string} [scheme_id]
 * @property {AreaCode} [area_code]
 * @property {TAT} [tat]
 * @property {string} [display_name]
 * @property {boolean} [is_qc_enabled]
 * @property {boolean} [is_self_ship]
 * @property {boolean} [is_own_account]
 * @property {number} [ndr_attempts]
 * @property {string} [forward_pickup_cutoff]
 * @property {string} [reverse_pickup_cutoff]
 */
/**
 * @typedef Promise
 * @property {PromiseDetails} [customer_promise]
 * @property {PromiseMeta} [meta]
 */
/**
 * @typedef PromiseDetails
 * @property {string} [min]
 * @property {string} [max]
 */
/**
 * @typedef Packaging
 * @property {string} name - The name of the packaging.
 * @property {string} id - The ID of the packaging.
 * @property {PackagingDimension} dimension
 */
declare class LogisticApplicationModel {
}
declare namespace LogisticApplicationModel {
    export { PackagingDimension, ShipmentArticleMeta, DeliveryTat, CourierPartnerPromiseData, PromiseMeta, PromiseData, CourierPartnersTat, AreaCode, SetSize, ArticleSizeDistribution, SetSizeItem, SetSizeDistribution, PromiseObject, ShipmentCourierPartners, ShipmentsArticles, ArticleReturnReason, ArticleDeliverySlots, ArticleSet, ArticleDimension, ArticleAttributes, ArticleWeight, ServiceabilityLocation, Shipments, LocationDetailsArticle, LocationDetailsServiceability, GenerateShipmentsLocationArticles, GenerateShipmentsRequest, GenerateShipmentsAndCourierPartnerResponse, ListViewResponseV2, ListViewItemsV2, GeoArea, ListViewProductV2, Summary, RegionSchema, ZoneDataItem, Region, GeoAreaGetResponseBody, GeoAreaItemResponse, Page2, AreaExpandedV2, RegionV2, Country, ServiceabilityZoneErrorResponse, ServiceabilityErrorResponse, GetStoreResponse, StoreItemResponse, ValidateAddressRequest, PincodeParentsResponse, PincodeMetaResponse, PincodeErrorSchemaResponse, PincodeLatLongData, PincodeDataResponse, PincodeApiResponse, TATCategoryRequest, TATArticlesRequest, TATLocationDetailsRequest, TATViewRequest, TATErrorSchemaResponse, TATTimestampResponse, TATFormattedResponse, TATPromiseResponse, TATArticlesResponse, TATLocationDetailsResponse, TATViewResponse, DP, LogisticsResponse, CountryMetaResponse, CountryEntityResponse, CountryListResponse, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, ReAssignStoreRequest, ReAssignStoreResponse, CountryHierarchy, CurrencyObject, CountryObject, GetCountries, GetOneOrAllPath, GetOneOrAllQuery, GetOneOrAllParams, GetOneOrAll, LengthValidation, FieldValidationRegex, FieldValidation, GetCountryFieldsAddressValues, GetCountryFieldsAddress, GetCountryFieldsAddressTemplate, GetCountryFields, GetCountry, Page, Localities, LocalityParent, ErrorObject, GetLocalities, GetLocality, ErrorResponse, ErrorResponseV2, ErrorResponseV3, ShipmentRequest, LocationArticle, Article, Weight, Attributes, Dimension, Set, DeliverySlots, ServiceabilityNew, Location, ShipmentResponse, Meta, ShipmentItem, TAT, CourierPartner, Promise, PromiseDetails, Packaging };
}
/** @returns {PackagingDimension} */
declare function PackagingDimension(): PackagingDimension;
type PackagingDimension = {
    /**
     * - The length dimension of packaging.
     */
    length: number;
    /**
     * - The width dimension of packaging.
     */
    width: number;
    /**
     * - The height dimension of packaging.
     */
    height: number;
};
/** @returns {ShipmentArticleMeta} */
declare function ShipmentArticleMeta(): ShipmentArticleMeta;
type ShipmentArticleMeta = {
    /**
     * - A boolean indicating whether the article is a set.
     */
    is_set?: boolean;
    /**
     * - An ArticleSet object describing the attributes of
     * the set, if the article is a set.
     */
    set?: any;
    /**
     * - A boolean indicating whether the
     * article is included in the set.
     */
    is_set_article?: boolean;
    /**
     * - It represents the number of set of this article
     */
    set_quantity?: number;
    /**
     * - This key is used to identify the
     * bundle products
     */
    split_article_id?: string;
    /**
     * - The list of promo ids applied on this article
     */
    promo_ids?: string[];
};
/** @returns {DeliveryTat} */
declare function DeliveryTat(): DeliveryTat;
type DeliveryTat = {
    /**
     * - The minimum tat in integer.
     */
    min?: number;
    /**
     * - The maximum tat in integer.
     */
    max?: number;
};
/** @returns {CourierPartnerPromiseData} */
declare function CourierPartnerPromiseData(): CourierPartnerPromiseData;
type CourierPartnerPromiseData = {
    /**
     * - The minimum promised delivery time in ISO 8601 format.
     */
    min?: string;
    /**
     * - The maximum promised delivery time in ISO 8601 format.
     */
    max?: string;
    attributes?: DeliveryTat;
};
/** @returns {PromiseMeta} */
declare function PromiseMeta(): PromiseMeta;
type PromiseMeta = {
    seller_promise?: PromiseData;
    courier_partner_promise?: CourierPartnerPromiseData;
    customer_initial_promise?: PromiseData;
};
/** @returns {PromiseData} */
declare function PromiseData(): PromiseData;
type PromiseData = {
    /**
     * - The minimum promised delivery time in ISO 8601 format.
     */
    min?: string;
    /**
     * - The maximum promised delivery time in ISO 8601 format.
     */
    max?: string;
};
/** @returns {CourierPartnersTat} */
declare function CourierPartnersTat(): CourierPartnersTat;
type CourierPartnersTat = {
    /**
     * - The minimum transit time.
     */
    min: number;
    /**
     * - The maximum transit time.
     */
    max: number;
};
/** @returns {AreaCode} */
declare function AreaCode(): AreaCode;
type AreaCode = {
    /**
     * - The starting area code.
     */
    source?: string;
    /**
     * - The ending area code.
     */
    destination?: string;
};
/** @returns {SetSize} */
declare function SetSize(): SetSize;
type SetSize = {
    /**
     * - The number of pieces in the set.
     */
    pieces: number;
    /**
     * - The size description of the set.
     */
    size: string;
};
/** @returns {ArticleSizeDistribution} */
declare function ArticleSizeDistribution(): ArticleSizeDistribution;
type ArticleSizeDistribution = {
    /**
     * - A collection of different size options and
     * their corresponding pieces.
     */
    sizes: SetSize[];
};
/** @returns {SetSizeItem} */
declare function SetSizeItem(): SetSizeItem;
type SetSizeItem = {
    pieces?: number;
    size?: string;
};
/** @returns {SetSizeDistribution} */
declare function SetSizeDistribution(): SetSizeDistribution;
type SetSizeDistribution = {
    sizes?: SetSizeItem[];
};
/** @returns {PromiseObject} */
declare function PromiseObject(): PromiseObject;
type PromiseObject = {
    customer_promise?: PromiseData;
    meta?: PromiseMeta;
};
/** @returns {ShipmentCourierPartners} */
declare function ShipmentCourierPartners(): ShipmentCourierPartners;
type ShipmentCourierPartners = {
    /**
     * - The ID of the courier partner.
     */
    extension_id: string;
    /**
     * - The scheme ID of the courier partner.
     */
    scheme_id: string;
    area_code: AreaCode;
    tat: CourierPartnersTat;
    /**
     * - The display name of the courier partner.
     */
    display_name: string;
    /**
     * - A boolean indicating quality control by
     * the courier partner.
     */
    is_qc_enabled: boolean;
    /**
     * - A boolean indicating it is self delivery DP support.
     */
    is_self_ship: boolean;
};
/** @returns {ShipmentsArticles} */
declare function ShipmentsArticles(): ShipmentsArticles;
type ShipmentsArticles = {
    /**
     * - The ID of the shipment article.
     */
    id: string;
    /**
     * - The quantity of the shipment article.
     */
    quantity: number;
    /**
     * - The Item ID of the article.
     */
    item_id: number;
    /**
     * - The size of the article.
     */
    size: string;
    /**
     * - A boolean indicating whether the article is a set.
     */
    is_set?: boolean;
    set?: ArticleSet;
    /**
     * - SLA in UTC format of article
     */
    sla: string;
    meta?: ShipmentArticleMeta;
};
/** @returns {ArticleReturnReason} */
declare function ArticleReturnReason(): ArticleReturnReason;
type ArticleReturnReason = {
    /**
     * - List of string having return reason values
     */
    qc_type?: string[];
};
/** @returns {ArticleDeliverySlots} */
declare function ArticleDeliverySlots(): ArticleDeliverySlots;
type ArticleDeliverySlots = {
    /**
     * - The delivery date for the article.
     */
    delivery_date: string;
    /**
     * - The minimum delivery time slot.
     */
    min_slot: string;
    /**
     * - The maximum delivery time slot.
     */
    max_slot: string;
};
/** @returns {ArticleSet} */
declare function ArticleSet(): ArticleSet;
type ArticleSet = {
    /**
     * - The name of the article set.
     */
    name: string;
    /**
     * - The quantity of the article set.
     */
    quantity: number;
    size_distribution: ArticleSizeDistribution;
};
/** @returns {ArticleDimension} */
declare function ArticleDimension(): ArticleDimension;
type ArticleDimension = {
    /**
     * - The height of the article.
     */
    height: number;
    /**
     * - A boolean indicating whether this dimension
     * is the default dimension.
     */
    is_default: boolean;
    /**
     * - The length of the article.
     */
    length: number;
    /**
     * - The unit of measurement used for the dimensions.
     */
    unit: string;
    /**
     * - The width of the article.
     */
    width: number;
};
/** @returns {ArticleAttributes} */
declare function ArticleAttributes(): ArticleAttributes;
type ArticleAttributes = {
    /**
     * - Yes/no indicating whether the article
     * is powered by batteries.
     */
    battery_operated: string;
    /**
     * - Yes/no indicating whether the article is
     * considered flammable or poses a fire hazard.
     */
    is_flammable: string;
};
/** @returns {ArticleWeight} */
declare function ArticleWeight(): ArticleWeight;
type ArticleWeight = {
    /**
     * - The weight of the article for shipping
     * purposes, typically measured in a specified unit.
     */
    shipping: number;
    /**
     * - The unit of measurement used for the weight value
     * (e.g., kilogram, pounds).
     */
    unit: string;
    /**
     * - A boolean indicating whether this weight is
     * the default weight for the article.
     */
    is_default: boolean;
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
/** @returns {Shipments} */
declare function Shipments(): Shipments;
type Shipments = {
    /**
     * - The fulfillment ID.
     */
    fulfillment_id: number;
    /**
     * - Shipment replication count.
     */
    count: number;
    /**
     * - A list of articles in the shipment.
     */
    articles: ShipmentsArticles[];
    courier_partners: ShipmentCourierPartners[];
    promise?: PromiseObject;
    /**
     * - Tags associated with the shipment.
     */
    tags?: string[];
    /**
     * - A boolean indicating if the courier partner
     * supports "Made to Order" service.
     */
    is_mto: boolean;
    /**
     * - A boolean indicating if the courier partner
     * supports gift shipments.
     */
    is_gift: boolean;
    /**
     * - A boolean indicating if the courier partner is locked.
     */
    is_locked: boolean;
    packaging: Packaging;
    delivery_slots?: ArticleDeliverySlots;
    /**
     * - Actual weight of the shipment.
     */
    weight: number;
    /**
     * - Volumetric weight of the shipment.
     */
    volumetric_weight: number;
    /**
     * - A boolean indicating auto-assignment of
     * the fullfilment location.
     */
    is_auto_assign: boolean;
    /**
     * - Shipment type i.e. whether is single
     * article single shipment or bulk shipment.
     */
    shipment_type: string;
    from_serviceability: any;
};
/** @returns {LocationDetailsArticle} */
declare function LocationDetailsArticle(): LocationDetailsArticle;
type LocationDetailsArticle = {
    /**
     * - The ID of the article.
     */
    id: string;
    /**
     * - The Item ID of the article.
     */
    item_id: number;
    /**
     * - Tags assigned to Item.
     */
    tags: string[];
    /**
     * - The size of the article.
     */
    size: string;
    /**
     * - The group ID of the article.
     */
    group_id?: string;
    weight: ArticleWeight;
    attributes?: ArticleAttributes;
    /**
     * - The category ID of the article.
     */
    category_id: number;
    department_id: number;
    dimension: ArticleDimension;
    /**
     * - Final Price of the article after discounts
     */
    price: number;
    /**
     * - The brand ID of the article.
     */
    brand_id: number;
    /**
     * - The quantity of the article.
     */
    quantity: number;
    /**
     * - The manufacturing time of the article.
     */
    manufacturing_time?: number;
    /**
     * - The unit of measurement for
     * manufacturing time.
     */
    manufacturing_time_unit?: string;
    /**
     * - The "Made to Order" quantity of the article.
     */
    mto_quantity?: number;
    /**
     * - A boolean indicating whether the article is a gift.
     */
    is_gift: boolean;
    /**
     * - A boolean indicating whether the article is a set.
     */
    is_set: boolean;
    set?: ArticleSet;
    /**
     * - The quantity of the article set.
     */
    set_quantity?: number;
    delivery_slots?: ArticleDeliverySlots;
    return_reason?: ArticleReturnReason;
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
/** @returns {GenerateShipmentsLocationArticles} */
declare function GenerateShipmentsLocationArticles(): GenerateShipmentsLocationArticles;
type GenerateShipmentsLocationArticles = {
    /**
     * - The fulfillment ID.
     */
    fulfillment_id: number;
    from_serviceability: LocationDetailsServiceability;
    /**
     * - The type of fulfillment.
     */
    fulfillment_type: string;
    /**
     * - Fulfillment level tags
     */
    fulfillment_tags: string[];
    /**
     * - A list of articles and their details.
     */
    articles: LocationDetailsArticle[];
    ewaybill_enabled?: boolean;
    is_home_delivery?: boolean;
};
/** @returns {GenerateShipmentsRequest} */
declare function GenerateShipmentsRequest(): GenerateShipmentsRequest;
type GenerateShipmentsRequest = {
    to_serviceability: LocationDetailsServiceability;
    /**
     * - A list of
     * location-based article details.
     */
    location_articles: GenerateShipmentsLocationArticles[];
    /**
     * - The journey details for the shipment.
     */
    journey: string;
    /**
     * - The payment mode for the shipment.
     */
    payment_mode?: string;
};
/** @returns {GenerateShipmentsAndCourierPartnerResponse} */
declare function GenerateShipmentsAndCourierPartnerResponse(): GenerateShipmentsAndCourierPartnerResponse;
type GenerateShipmentsAndCourierPartnerResponse = {
    /**
     * - A list of generated shipments.
     */
    shipments: Shipments[];
    /**
     * - A boolean indicating if COD (COD) is available.
     */
    is_cod_available: boolean;
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
    geo_areas: GeoArea[];
    slug: string;
    stores: ListViewProductV2;
    is_active: boolean;
    product: ListViewProductV2;
    company_id: number;
    application_id: string;
    created_by: string;
    created_on: string;
    modified_by: string;
    modified_on: string;
    stage?: string;
    summary?: Summary;
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
/** @returns {Summary} */
declare function Summary(): Summary;
type Summary = {
    stores_count?: number;
    products_count?: number;
    regions?: RegionSchema[];
};
/** @returns {RegionSchema} */
declare function RegionSchema(): RegionSchema;
type RegionSchema = {
    name?: string;
    count?: number;
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
/** @returns {Region} */
declare function Region(): Region;
type Region = {
    uid: string;
    display_name: string;
    sub_type: string;
    parent_id: string[];
    parent_uid: string;
};
/** @returns {GeoAreaGetResponseBody} */
declare function GeoAreaGetResponseBody(): GeoAreaGetResponseBody;
type GeoAreaGetResponseBody = {
    items?: GeoAreaItemResponse[];
    page?: Page2;
};
/** @returns {GeoAreaItemResponse} */
declare function GeoAreaItemResponse(): GeoAreaItemResponse;
type GeoAreaItemResponse = {
    geoarea_id: string;
    name: string;
    slug: string;
    is_active: boolean;
    region_type: string;
    type?: string;
    areas?: AreaExpandedV2[];
    created_on: string;
    modified_on: string;
    created_by: string;
    modified_by: string;
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
/** @returns {AreaExpandedV2} */
declare function AreaExpandedV2(): AreaExpandedV2;
type AreaExpandedV2 = {
    country: Country;
    regions: RegionV2[];
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
/** @returns {ServiceabilityZoneErrorResponse} */
declare function ServiceabilityZoneErrorResponse(): ServiceabilityZoneErrorResponse;
type ServiceabilityZoneErrorResponse = {
    error: ServiceabilityErrorResponse[];
};
/** @returns {ServiceabilityErrorResponse} */
declare function ServiceabilityErrorResponse(): ServiceabilityErrorResponse;
type ServiceabilityErrorResponse = {
    message: string;
    value: string;
    type: string;
};
/** @returns {GetStoreResponse} */
declare function GetStoreResponse(): GetStoreResponse;
type GetStoreResponse = {
    items?: StoreItemResponse[];
    page?: Page;
};
/** @returns {StoreItemResponse} */
declare function StoreItemResponse(): StoreItemResponse;
type StoreItemResponse = {
    id?: number;
    store_type?: string;
    fulfillment_type?: string;
    processing_time?: number;
    tags?: string[];
    company_id?: number;
    latitude?: number;
    longitude?: number;
};
/** @returns {ValidateAddressRequest} */
declare function ValidateAddressRequest(): ValidateAddressRequest;
type ValidateAddressRequest = {
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
/** @returns {PincodeParentsResponse} */
declare function PincodeParentsResponse(): PincodeParentsResponse;
type PincodeParentsResponse = {
    sub_type?: string;
    display_name?: string;
    name?: string;
    uid?: string;
};
/** @returns {PincodeMetaResponse} */
declare function PincodeMetaResponse(): PincodeMetaResponse;
type PincodeMetaResponse = {
    zone?: string;
    internal_zone_id?: number;
};
/** @returns {PincodeErrorSchemaResponse} */
declare function PincodeErrorSchemaResponse(): PincodeErrorSchemaResponse;
type PincodeErrorSchemaResponse = {
    message?: string;
    value?: string;
    type?: string;
};
/** @returns {PincodeLatLongData} */
declare function PincodeLatLongData(): PincodeLatLongData;
type PincodeLatLongData = {
    type?: string;
    coordinates?: number[];
};
/** @returns {PincodeDataResponse} */
declare function PincodeDataResponse(): PincodeDataResponse;
type PincodeDataResponse = {
    parents?: PincodeParentsResponse[];
    meta?: PincodeMetaResponse;
    display_name?: string;
    error: PincodeErrorSchemaResponse;
    meta_code?: CountryMetaResponse;
    lat_long?: PincodeLatLongData;
    sub_type?: string;
    name?: string;
    uid?: string;
};
/** @returns {PincodeApiResponse} */
declare function PincodeApiResponse(): PincodeApiResponse;
type PincodeApiResponse = {
    success: boolean;
    data?: PincodeDataResponse[];
    error: PincodeErrorSchemaResponse;
};
/** @returns {TATCategoryRequest} */
declare function TATCategoryRequest(): TATCategoryRequest;
type TATCategoryRequest = {
    level?: string;
    id?: number;
};
/** @returns {TATArticlesRequest} */
declare function TATArticlesRequest(): TATArticlesRequest;
type TATArticlesRequest = {
    category?: TATCategoryRequest;
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
};
/** @returns {TATLocationDetailsRequest} */
declare function TATLocationDetailsRequest(): TATLocationDetailsRequest;
type TATLocationDetailsRequest = {
    fulfillment_id?: number;
    from_pincode?: string;
    articles?: TATArticlesRequest[];
};
/** @returns {TATViewRequest} */
declare function TATViewRequest(): TATViewRequest;
type TATViewRequest = {
    to_pincode?: string;
    source?: string;
    action?: string;
    identifier?: string;
    location_details?: TATLocationDetailsRequest[];
    journey?: string;
};
/** @returns {TATErrorSchemaResponse} */
declare function TATErrorSchemaResponse(): TATErrorSchemaResponse;
type TATErrorSchemaResponse = {
    message?: string;
    value?: string;
    type?: string;
};
/** @returns {TATTimestampResponse} */
declare function TATTimestampResponse(): TATTimestampResponse;
type TATTimestampResponse = {
    min?: number;
    max?: number;
};
/** @returns {TATFormattedResponse} */
declare function TATFormattedResponse(): TATFormattedResponse;
type TATFormattedResponse = {
    min?: string;
    max?: string;
};
/** @returns {TATPromiseResponse} */
declare function TATPromiseResponse(): TATPromiseResponse;
type TATPromiseResponse = {
    timestamp?: TATTimestampResponse;
    formatted?: TATFormattedResponse;
};
/** @returns {TATArticlesResponse} */
declare function TATArticlesResponse(): TATArticlesResponse;
type TATArticlesResponse = {
    manufacturing_time_unit?: string;
    error?: TATErrorSchemaResponse;
    is_cod_available?: boolean;
    promise?: TATPromiseResponse;
    manufacturing_time?: number;
    category?: TATCategoryRequest;
    _manufacturing_time_seconds?: number;
};
/** @returns {TATLocationDetailsResponse} */
declare function TATLocationDetailsResponse(): TATLocationDetailsResponse;
type TATLocationDetailsResponse = {
    fulfillment_id?: number;
    from_pincode?: string;
    articles?: TATArticlesResponse[];
};
/** @returns {TATViewResponse} */
declare function TATViewResponse(): TATViewResponse;
type TATViewResponse = {
    to_pincode?: string;
    request_uuid?: string;
    payment_mode?: string;
    success?: boolean;
    error?: TATErrorSchemaResponse;
    is_cod_available?: boolean;
    source?: string;
    action?: string;
    stormbreaker_uuid?: string;
    to_city?: string;
    identifier?: string;
    location_details?: TATLocationDetailsResponse[];
    journey?: string;
};
/** @returns {DP} */
declare function DP(): DP;
type DP = {
    fm_priority: number;
    lm_priority: number;
    rvp_priority: number;
    payment_mode: string;
    operations: string[];
    area_code?: string;
    assign_dp_from_sb?: boolean;
    internal_account_id?: string;
    external_account_id?: string;
    transport_mode?: string;
};
/** @returns {LogisticsResponse} */
declare function LogisticsResponse(): LogisticsResponse;
type LogisticsResponse = {
    dp?: any;
};
/** @returns {CountryMetaResponse} */
declare function CountryMetaResponse(): CountryMetaResponse;
type CountryMetaResponse = {
    iso2?: string;
    iso3?: string;
    currency?: CurrencyObject;
    phone_code?: string;
    parent_id?: string;
    zone?: string;
    deliverables?: string[];
    hierarchy?: CountryHierarchy[];
    logistics?: LogisticsResponse;
};
/** @returns {CountryEntityResponse} */
declare function CountryEntityResponse(): CountryEntityResponse;
type CountryEntityResponse = {
    display_name?: string;
    is_active?: boolean;
    parent_id?: string;
    sub_type?: string;
    name?: string;
    uid?: string;
    lat_long?: any;
    meta?: CountryMetaResponse;
    logistics?: LogisticsResponse;
};
/** @returns {CountryListResponse} */
declare function CountryListResponse(): CountryListResponse;
type CountryListResponse = {
    results?: CountryEntityResponse[];
};
/** @returns {GetZoneFromPincodeViewRequest} */
declare function GetZoneFromPincodeViewRequest(): GetZoneFromPincodeViewRequest;
type GetZoneFromPincodeViewRequest = {
    pincode: string;
    country: string;
};
/** @returns {GetZoneFromPincodeViewResponse} */
declare function GetZoneFromPincodeViewResponse(): GetZoneFromPincodeViewResponse;
type GetZoneFromPincodeViewResponse = {
    serviceability_type: string;
    zones: string[];
};
/** @returns {ReAssignStoreRequest} */
declare function ReAssignStoreRequest(): ReAssignStoreRequest;
type ReAssignStoreRequest = {
    configuration: any;
    to_pincode: string;
    ignored_locations: number[];
    identifier: string;
    articles: any[];
};
/** @returns {ReAssignStoreResponse} */
declare function ReAssignStoreResponse(): ReAssignStoreResponse;
type ReAssignStoreResponse = {
    to_pincode: string;
    pystormbreaker_uuid: string;
    success: boolean;
    error: any;
    assigned_stores?: any[];
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
/** @returns {GetOneOrAllPath} */
declare function GetOneOrAllPath(): GetOneOrAllPath;
type GetOneOrAllPath = {
    type?: string;
    value?: string;
};
/** @returns {GetOneOrAllQuery} */
declare function GetOneOrAllQuery(): GetOneOrAllQuery;
type GetOneOrAllQuery = {
    country?: string;
    state?: string;
    city?: string;
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
    operation_id?: string;
    params?: GetOneOrAllParams;
};
/** @returns {LengthValidation} */
declare function LengthValidation(): LengthValidation;
type LengthValidation = {
    min?: number;
    max?: number;
};
/** @returns {FieldValidationRegex} */
declare function FieldValidationRegex(): FieldValidationRegex;
type FieldValidationRegex = {
    value?: string;
    length?: LengthValidation;
};
/** @returns {FieldValidation} */
declare function FieldValidation(): FieldValidation;
type FieldValidation = {
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
    display_name: string;
    slug: string;
    required: boolean;
    edit?: boolean;
    input: string;
    pre_fill?: string;
    validation?: FieldValidation;
    values?: GetCountryFieldsAddressValues;
    error_text?: string;
};
/** @returns {GetCountryFieldsAddressTemplate} */
declare function GetCountryFieldsAddressTemplate(): GetCountryFieldsAddressTemplate;
type GetCountryFieldsAddressTemplate = {
    checkout_form: string;
    store_os_form: string;
    default_display: string;
};
/** @returns {GetCountryFields} */
declare function GetCountryFields(): GetCountryFields;
type GetCountryFields = {
    address: GetCountryFieldsAddress[];
    serviceability_fields: string[];
    address_template: GetCountryFieldsAddressTemplate;
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
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
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
    localities?: LocalityParent[];
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
    parent_uid?: string;
};
/** @returns {ErrorObject} */
declare function ErrorObject(): ErrorObject;
type ErrorObject = {
    type?: string;
    value?: string;
    message?: string;
};
/** @returns {GetLocalities} */
declare function GetLocalities(): GetLocalities;
type GetLocalities = {
    items?: Localities[];
    page?: Page;
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
    localities?: LocalityParent[];
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    error?: string;
};
/** @returns {ErrorResponseV2} */
declare function ErrorResponseV2(): ErrorResponseV2;
type ErrorResponseV2 = {
    message?: string;
};
/** @returns {ErrorResponseV3} */
declare function ErrorResponseV3(): ErrorResponseV3;
type ErrorResponseV3 = {
    success?: boolean;
    error?: ErrorObject;
};
/** @returns {ShipmentRequest} */
declare function ShipmentRequest(): ShipmentRequest;
type ShipmentRequest = {
    to_serviceability?: ServiceabilityNew;
    location_articles?: LocationArticle[];
    journey?: string;
    payment_mode?: string;
};
/** @returns {LocationArticle} */
declare function LocationArticle(): LocationArticle;
type LocationArticle = {
    fulfillment_id?: number;
    from_serviceability?: ServiceabilityNew;
    fulfillment_type?: string;
    fulfillment_tags?: string[];
    articles?: Article[];
};
/** @returns {Article} */
declare function Article(): Article;
type Article = {
    id?: string;
    item_id?: number;
    tags?: string[];
    size?: string;
    price?: number;
    weight?: Weight;
    attributes?: Attributes;
    category_id?: number;
    dimension?: Dimension;
    brand_id?: number;
    department_id?: number;
    quantity?: number;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    mto_quantity?: number;
    is_gift?: boolean;
    is_set?: boolean;
    set?: Set;
    set_quantity?: number;
    delivery_slots?: DeliverySlots;
};
/** @returns {Weight} */
declare function Weight(): Weight;
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
/** @returns {Attributes} */
declare function Attributes(): Attributes;
type Attributes = {
    battery_operated?: string;
    is_flammable?: string;
};
/** @returns {Dimension} */
declare function Dimension(): Dimension;
type Dimension = {
    height?: number;
    is_default?: boolean;
    length?: number;
    unit?: string;
    width?: number;
};
/** @returns {Set} */
declare function Set(): Set;
type Set = {
    name?: string;
    quantity?: number;
    size_distribution?: SetSizeDistribution;
};
/** @returns {DeliverySlots} */
declare function DeliverySlots(): DeliverySlots;
type DeliverySlots = {
    delivery_date?: string;
    min_slot?: string;
    max_slot?: string;
};
/** @returns {ServiceabilityNew} */
declare function ServiceabilityNew(): ServiceabilityNew;
type ServiceabilityNew = {
    state?: string;
    city?: string;
    country?: string;
    sector?: string;
    country_iso_code?: string;
    location?: Location;
    pincode?: string;
};
/** @returns {Location} */
declare function Location(): Location;
type Location = {
    longitude?: string;
    latitude?: string;
};
/** @returns {ShipmentResponse} */
declare function ShipmentResponse(): ShipmentResponse;
type ShipmentResponse = {
    shipments?: ShipmentItem[];
    is_cod_available?: boolean;
};
/** @returns {Meta} */
declare function Meta(): Meta;
type Meta = {
    shipment_cost?: number;
};
/** @returns {ShipmentItem} */
declare function ShipmentItem(): ShipmentItem;
type ShipmentItem = {
    fulfillment_id?: number;
    fulfillment_tags?: string[];
    fulfillment_type?: string;
    from_serviceability?: ServiceabilityNew;
    articles?: Article[];
    courier_partners?: CourierPartner[];
    promise?: Promise;
    tags?: string[];
    is_mto?: boolean;
    is_gift?: boolean;
    is_locked?: boolean;
    packaging?: Packaging;
    delivery_slots?: DeliverySlots;
    count?: number;
    volumetric_weight?: number;
    ewaybill_enabled?: string;
    mps?: boolean;
    meta?: Meta;
    weight?: number;
    shipment_type?: string;
    is_auto_assign?: boolean;
    is_cod_available?: boolean;
};
/** @returns {TAT} */
declare function TAT(): TAT;
type TAT = {
    min?: number;
    max?: number;
};
/** @returns {CourierPartner} */
declare function CourierPartner(): CourierPartner;
type CourierPartner = {
    extension_id?: string;
    scheme_id?: string;
    area_code?: AreaCode;
    tat?: TAT;
    display_name?: string;
    is_qc_enabled?: boolean;
    is_self_ship?: boolean;
    is_own_account?: boolean;
    ndr_attempts?: number;
    forward_pickup_cutoff?: string;
    reverse_pickup_cutoff?: string;
};
/** @returns {Promise} */
declare function Promise(): Promise;
type Promise = {
    customer_promise?: PromiseDetails;
    meta?: PromiseMeta;
};
/** @returns {PromiseDetails} */
declare function PromiseDetails(): PromiseDetails;
type PromiseDetails = {
    min?: string;
    max?: string;
};
/** @returns {Packaging} */
declare function Packaging(): Packaging;
type Packaging = {
    /**
     * - The name of the packaging.
     */
    name: string;
    /**
     * - The ID of the packaging.
     */
    id: string;
    dimension: PackagingDimension;
};
