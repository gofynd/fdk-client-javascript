const Joi = require("joi");

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

class LogisticApplicationModel {
  /** @returns {PackagingDimension} */
  static PackagingDimension() {
    return Joi.object({
      length: Joi.number().required(),
      width: Joi.number().required(),
      height: Joi.number().required(),
    });
  }

  /** @returns {ShipmentArticleMeta} */
  static ShipmentArticleMeta() {
    return Joi.object({
      is_set: Joi.boolean(),
      set: Joi.any(),
      is_set_article: Joi.boolean(),
      set_quantity: Joi.number(),
      split_article_id: Joi.string().allow(""),
      promo_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {DeliveryTat} */
  static DeliveryTat() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {CourierPartnerPromiseData} */
  static CourierPartnerPromiseData() {
    return Joi.object({
      min: Joi.string().allow(""),
      max: Joi.string().allow(""),
      attributes: LogisticApplicationModel.DeliveryTat(),
    });
  }

  /** @returns {PromiseMeta} */
  static PromiseMeta() {
    return Joi.object({
      seller_promise: LogisticApplicationModel.PromiseData(),
      courier_partner_promise: LogisticApplicationModel.CourierPartnerPromiseData(),
      customer_initial_promise: LogisticApplicationModel.PromiseData(),
    });
  }

  /** @returns {PromiseData} */
  static PromiseData() {
    return Joi.object({
      min: Joi.string().allow(""),
      max: Joi.string().allow(""),
    });
  }

  /** @returns {CourierPartnersTat} */
  static CourierPartnersTat() {
    return Joi.object({
      min: Joi.number().required(),
      max: Joi.number().required(),
    });
  }

  /** @returns {AreaCode} */
  static AreaCode() {
    return Joi.object({
      source: Joi.string().allow(""),
      destination: Joi.string().allow(""),
    });
  }

  /** @returns {SetSize} */
  static SetSize() {
    return Joi.object({
      pieces: Joi.number().required(),
      size: Joi.string().allow("").required(),
    });
  }

  /** @returns {ArticleSizeDistribution} */
  static ArticleSizeDistribution() {
    return Joi.object({
      sizes: Joi.array().items(LogisticApplicationModel.SetSize()).required(),
    });
  }

  /** @returns {SetSizeItem} */
  static SetSizeItem() {
    return Joi.object({
      pieces: Joi.number(),
      size: Joi.string().allow(""),
    });
  }

  /** @returns {SetSizeDistribution} */
  static SetSizeDistribution() {
    return Joi.object({
      sizes: Joi.array().items(LogisticApplicationModel.SetSizeItem()),
    });
  }

  /** @returns {PromiseObject} */
  static PromiseObject() {
    return Joi.object({
      customer_promise: LogisticApplicationModel.PromiseData(),
      meta: LogisticApplicationModel.PromiseMeta(),
    });
  }

  /** @returns {ShipmentCourierPartners} */
  static ShipmentCourierPartners() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      area_code: LogisticApplicationModel.AreaCode().required(),
      tat: LogisticApplicationModel.CourierPartnersTat().required(),
      display_name: Joi.string().allow("").required(),
      is_qc_enabled: Joi.boolean().required(),
      is_self_ship: Joi.boolean().required(),
    });
  }

  /** @returns {ShipmentsArticles} */
  static ShipmentsArticles() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      quantity: Joi.number().required(),
      item_id: Joi.number().required(),
      size: Joi.string().allow("").required(),
      is_set: Joi.boolean(),
      set: LogisticApplicationModel.ArticleSet(),
      sla: Joi.string().allow("").required(),
      meta: LogisticApplicationModel.ShipmentArticleMeta(),
    });
  }

  /** @returns {ArticleReturnReason} */
  static ArticleReturnReason() {
    return Joi.object({
      qc_type: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ArticleDeliverySlots} */
  static ArticleDeliverySlots() {
    return Joi.object({
      delivery_date: Joi.string().allow("").required(),
      min_slot: Joi.string().allow("").required(),
      max_slot: Joi.string().allow("").required(),
    });
  }

  /** @returns {ArticleSet} */
  static ArticleSet() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      quantity: Joi.number().required(),
      size_distribution: LogisticApplicationModel.ArticleSizeDistribution().required(),
    });
  }

  /** @returns {ArticleDimension} */
  static ArticleDimension() {
    return Joi.object({
      height: Joi.number().required(),
      is_default: Joi.boolean().required(),
      length: Joi.number().required(),
      unit: Joi.string().allow("").required(),
      width: Joi.number().required(),
    });
  }

  /** @returns {ArticleAttributes} */
  static ArticleAttributes() {
    return Joi.object({
      battery_operated: Joi.string().allow("").required(),
      is_flammable: Joi.string().allow("").required(),
    });
  }

  /** @returns {ArticleWeight} */
  static ArticleWeight() {
    return Joi.object({
      shipping: Joi.number().required(),
      unit: Joi.string().allow("").required(),
      is_default: Joi.boolean().required(),
    });
  }

  /** @returns {ServiceabilityLocation} */
  static ServiceabilityLocation() {
    return Joi.object({
      longitude: Joi.string().allow("").required(),
      latitude: Joi.string().allow("").required(),
    });
  }

  /** @returns {Shipments} */
  static Shipments() {
    return Joi.object({
      fulfillment_id: Joi.number().required(),
      count: Joi.number().required(),
      articles: Joi.array()
        .items(LogisticApplicationModel.ShipmentsArticles())
        .required(),
      courier_partners: Joi.array()
        .items(LogisticApplicationModel.ShipmentCourierPartners())
        .required(),
      promise: LogisticApplicationModel.PromiseObject(),
      tags: Joi.array().items(Joi.string().allow("")),
      is_mto: Joi.boolean().required(),
      is_gift: Joi.boolean().required(),
      is_locked: Joi.boolean().required(),
      packaging: LogisticApplicationModel.Packaging().required(),
      delivery_slots: LogisticApplicationModel.ArticleDeliverySlots(),
      weight: Joi.number().required(),
      volumetric_weight: Joi.number().required(),
      is_auto_assign: Joi.boolean().required(),
      shipment_type: Joi.string().allow("").required(),
      from_serviceability: Joi.any().required(),
    });
  }

  /** @returns {LocationDetailsArticle} */
  static LocationDetailsArticle() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      item_id: Joi.number().required(),
      tags: Joi.array().items(Joi.string().allow("")).required(),
      size: Joi.string().allow("").required(),
      group_id: Joi.string().allow(""),
      weight: LogisticApplicationModel.ArticleWeight().required(),
      attributes: LogisticApplicationModel.ArticleAttributes(),
      category_id: Joi.number().required(),
      department_id: Joi.number().required(),
      dimension: LogisticApplicationModel.ArticleDimension().required(),
      price: Joi.number().required(),
      brand_id: Joi.number().required(),
      quantity: Joi.number().required(),
      manufacturing_time: Joi.number(),
      manufacturing_time_unit: Joi.string().allow(""),
      mto_quantity: Joi.number(),
      is_gift: Joi.boolean().required(),
      is_set: Joi.boolean().required(),
      set: LogisticApplicationModel.ArticleSet(),
      set_quantity: Joi.number(),
      delivery_slots: LogisticApplicationModel.ArticleDeliverySlots(),
      return_reason: LogisticApplicationModel.ArticleReturnReason(),
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
      location: LogisticApplicationModel.ServiceabilityLocation(),
    });
  }

  /** @returns {GenerateShipmentsLocationArticles} */
  static GenerateShipmentsLocationArticles() {
    return Joi.object({
      fulfillment_id: Joi.number().required(),
      from_serviceability: LogisticApplicationModel.LocationDetailsServiceability().required(),
      fulfillment_type: Joi.string().allow("").required(),
      fulfillment_tags: Joi.array().items(Joi.string().allow("")).required(),
      articles: Joi.array()
        .items(LogisticApplicationModel.LocationDetailsArticle())
        .required(),
      ewaybill_enabled: Joi.boolean(),
      is_home_delivery: Joi.boolean(),
    });
  }

  /** @returns {GenerateShipmentsRequest} */
  static GenerateShipmentsRequest() {
    return Joi.object({
      to_serviceability: LogisticApplicationModel.LocationDetailsServiceability().required(),
      location_articles: Joi.array()
        .items(LogisticApplicationModel.GenerateShipmentsLocationArticles())
        .required(),
      journey: Joi.string().allow("").required(),
      payment_mode: Joi.string().allow(""),
    });
  }

  /** @returns {GenerateShipmentsAndCourierPartnerResponse} */
  static GenerateShipmentsAndCourierPartnerResponse() {
    return Joi.object({
      shipments: Joi.array()
        .items(LogisticApplicationModel.Shipments())
        .required(),
      is_cod_available: Joi.boolean().required(),
    });
  }

  /** @returns {ListViewResponseV2} */
  static ListViewResponseV2() {
    return Joi.object({
      items: Joi.array()
        .items(LogisticApplicationModel.ListViewItemsV2())
        .required(),
      page: LogisticApplicationModel.ZoneDataItem().required(),
    });
  }

  /** @returns {ListViewItemsV2} */
  static ListViewItemsV2() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      geo_areas: Joi.array()
        .items(LogisticApplicationModel.GeoArea())
        .required(),
      slug: Joi.string().allow("").required(),
      stores: LogisticApplicationModel.ListViewProductV2().required(),
      is_active: Joi.boolean().required(),
      product: LogisticApplicationModel.ListViewProductV2().required(),
      company_id: Joi.number().required(),
      application_id: Joi.string().allow("").required(),
      created_by: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      modified_by: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      stage: Joi.string().allow(""),
      summary: LogisticApplicationModel.Summary(),
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

  /** @returns {Summary} */
  static Summary() {
    return Joi.object({
      stores_count: Joi.number(),
      products_count: Joi.number(),
      regions: Joi.array().items(LogisticApplicationModel.RegionSchema()),
    });
  }

  /** @returns {RegionSchema} */
  static RegionSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      count: Joi.number(),
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

  /** @returns {Region} */
  static Region() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
      sub_type: Joi.string().allow("").required(),
      parent_id: Joi.array().items(Joi.string().allow("")).required(),
      parent_uid: Joi.string().allow("").required(),
    });
  }

  /** @returns {GeoAreaGetResponseBody} */
  static GeoAreaGetResponseBody() {
    return Joi.object({
      items: Joi.array().items(LogisticApplicationModel.GeoAreaItemResponse()),
      page: LogisticApplicationModel.Page2(),
    });
  }

  /** @returns {GeoAreaItemResponse} */
  static GeoAreaItemResponse() {
    return Joi.object({
      geoarea_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      region_type: Joi.string().allow("").required(),
      type: Joi.string().allow(""),
      areas: Joi.array().items(LogisticApplicationModel.AreaExpandedV2()),
      created_on: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      created_by: Joi.string().allow("").required(),
      modified_by: Joi.string().allow("").required(),
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

  /** @returns {AreaExpandedV2} */
  static AreaExpandedV2() {
    return Joi.object({
      country: LogisticApplicationModel.Country().required(),
      regions: Joi.array()
        .items(LogisticApplicationModel.RegionV2())
        .required(),
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

  /** @returns {ServiceabilityZoneErrorResponse} */
  static ServiceabilityZoneErrorResponse() {
    return Joi.object({
      error: Joi.array()
        .items(LogisticApplicationModel.ServiceabilityErrorResponse())
        .required(),
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

  /** @returns {GetStoreResponse} */
  static GetStoreResponse() {
    return Joi.object({
      items: Joi.array().items(LogisticApplicationModel.StoreItemResponse()),
      page: LogisticApplicationModel.Page(),
    });
  }

  /** @returns {StoreItemResponse} */
  static StoreItemResponse() {
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
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      email: Joi.string().allow(""),
      country_iso_code: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeParentsResponse} */
  static PincodeParentsResponse() {
    return Joi.object({
      sub_type: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeMetaResponse} */
  static PincodeMetaResponse() {
    return Joi.object({
      zone: Joi.string().allow(""),
      internal_zone_id: Joi.number(),
    });
  }

  /** @returns {PincodeErrorSchemaResponse} */
  static PincodeErrorSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PincodeLatLongData} */
  static PincodeLatLongData() {
    return Joi.object({
      type: Joi.string().allow(""),
      coordinates: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {PincodeDataResponse} */
  static PincodeDataResponse() {
    return Joi.object({
      parents: Joi.array().items(
        LogisticApplicationModel.PincodeParentsResponse()
      ),
      meta: LogisticApplicationModel.PincodeMetaResponse(),
      display_name: Joi.string().allow(""),
      error: LogisticApplicationModel.PincodeErrorSchemaResponse().required(),
      meta_code: LogisticApplicationModel.CountryMetaResponse(),
      lat_long: LogisticApplicationModel.PincodeLatLongData(),
      sub_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeApiResponse} */
  static PincodeApiResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      data: Joi.array().items(LogisticApplicationModel.PincodeDataResponse()),
      error: LogisticApplicationModel.PincodeErrorSchemaResponse().required(),
    });
  }

  /** @returns {TATCategoryRequest} */
  static TATCategoryRequest() {
    return Joi.object({
      level: Joi.string().allow(""),
      id: Joi.number(),
    });
  }

  /** @returns {TATArticlesRequest} */
  static TATArticlesRequest() {
    return Joi.object({
      category: LogisticApplicationModel.TATCategoryRequest(),
      manufacturing_time_unit: Joi.string().allow(""),
      manufacturing_time: Joi.number(),
    });
  }

  /** @returns {TATLocationDetailsRequest} */
  static TATLocationDetailsRequest() {
    return Joi.object({
      fulfillment_id: Joi.number(),
      from_pincode: Joi.string().allow(""),
      articles: Joi.array().items(
        LogisticApplicationModel.TATArticlesRequest()
      ),
    });
  }

  /** @returns {TATViewRequest} */
  static TATViewRequest() {
    return Joi.object({
      to_pincode: Joi.string().allow(""),
      source: Joi.string().allow(""),
      action: Joi.string().allow(""),
      identifier: Joi.string().allow(""),
      location_details: Joi.array().items(
        LogisticApplicationModel.TATLocationDetailsRequest()
      ),
      journey: Joi.string().allow(""),
    });
  }

  /** @returns {TATErrorSchemaResponse} */
  static TATErrorSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {TATTimestampResponse} */
  static TATTimestampResponse() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {TATFormattedResponse} */
  static TATFormattedResponse() {
    return Joi.object({
      min: Joi.string().allow(""),
      max: Joi.string().allow(""),
    });
  }

  /** @returns {TATPromiseResponse} */
  static TATPromiseResponse() {
    return Joi.object({
      timestamp: LogisticApplicationModel.TATTimestampResponse(),
      formatted: LogisticApplicationModel.TATFormattedResponse(),
    });
  }

  /** @returns {TATArticlesResponse} */
  static TATArticlesResponse() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),
      error: LogisticApplicationModel.TATErrorSchemaResponse(),
      is_cod_available: Joi.boolean(),
      promise: LogisticApplicationModel.TATPromiseResponse(),
      manufacturing_time: Joi.number(),
      category: LogisticApplicationModel.TATCategoryRequest(),
      _manufacturing_time_seconds: Joi.number(),
    });
  }

  /** @returns {TATLocationDetailsResponse} */
  static TATLocationDetailsResponse() {
    return Joi.object({
      fulfillment_id: Joi.number(),
      from_pincode: Joi.string().allow(""),
      articles: Joi.array().items(
        LogisticApplicationModel.TATArticlesResponse()
      ),
    });
  }

  /** @returns {TATViewResponse} */
  static TATViewResponse() {
    return Joi.object({
      to_pincode: Joi.string().allow(""),
      request_uuid: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
      success: Joi.boolean(),
      error: LogisticApplicationModel.TATErrorSchemaResponse(),
      is_cod_available: Joi.boolean(),
      source: Joi.string().allow(""),
      action: Joi.string().allow(""),
      stormbreaker_uuid: Joi.string().allow(""),
      to_city: Joi.string().allow(""),
      identifier: Joi.string().allow(""),
      location_details: Joi.array().items(
        LogisticApplicationModel.TATLocationDetailsResponse()
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

  /** @returns {LogisticsResponse} */
  static LogisticsResponse() {
    return Joi.object({
      dp: Joi.object().pattern(/\S/, LogisticApplicationModel.DP()),
    });
  }

  /** @returns {CountryMetaResponse} */
  static CountryMetaResponse() {
    return Joi.object({
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      currency: LogisticApplicationModel.CurrencyObject(),
      phone_code: Joi.string().allow(""),
      parent_id: Joi.string().allow("").allow(null),
      zone: Joi.string().allow(""),
      deliverables: Joi.array().items(Joi.string().allow("")),
      hierarchy: Joi.array().items(LogisticApplicationModel.CountryHierarchy()),
      logistics: LogisticApplicationModel.LogisticsResponse(),
    });
  }

  /** @returns {CountryEntityResponse} */
  static CountryEntityResponse() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      is_active: Joi.boolean(),
      parent_id: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      lat_long: Joi.any(),
      meta: LogisticApplicationModel.CountryMetaResponse(),
      logistics: LogisticApplicationModel.LogisticsResponse(),
    });
  }

  /** @returns {CountryListResponse} */
  static CountryListResponse() {
    return Joi.object({
      results: Joi.array().items(
        LogisticApplicationModel.CountryEntityResponse()
      ),
    });
  }

  /** @returns {GetZoneFromPincodeViewRequest} */
  static GetZoneFromPincodeViewRequest() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetZoneFromPincodeViewResponse} */
  static GetZoneFromPincodeViewResponse() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),
      zones: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {ReAssignStoreRequest} */
  static ReAssignStoreRequest() {
    return Joi.object({
      configuration: Joi.any().required(),
      to_pincode: Joi.string().allow("").required(),
      ignored_locations: Joi.array().items(Joi.number()).required(),
      identifier: Joi.string().allow("").required(),
      articles: Joi.array().items(Joi.any()).required(),
    });
  }

  /** @returns {ReAssignStoreResponse} */
  static ReAssignStoreResponse() {
    return Joi.object({
      to_pincode: Joi.string().allow("").required(),
      pystormbreaker_uuid: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      error: Joi.any().required(),
      assigned_stores: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {CountryHierarchy} */
  static CountryHierarchy() {
    return Joi.object({
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

  /** @returns {CountryObject} */
  static CountryObject() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      timezones: Joi.array().items(Joi.string().allow("")),
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
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
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
    });
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
    });
  }

  /** @returns {GetCountryFieldsAddressValues} */
  static GetCountryFieldsAddressValues() {
    return Joi.object({
      get_one: LogisticApplicationModel.GetOneOrAll(),
      get_all: LogisticApplicationModel.GetOneOrAll(),
    });
  }

  /** @returns {GetCountryFieldsAddress} */
  static GetCountryFieldsAddress() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      required: Joi.boolean().required(),
      edit: Joi.boolean(),
      input: Joi.string().allow("").required(),
      pre_fill: Joi.string().allow(""),
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
      timezones: Joi.array().items(Joi.string().allow("")),
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
      display_name: Joi.string().allow(""),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      meta: Joi.any(),
      type: Joi.string().allow(""),
      lat_long: LogisticApplicationModel.PincodeLatLongData(),
      parent_uid: Joi.string().allow("").allow(null),
      localities: Joi.array().items(LogisticApplicationModel.LocalityParent()),
    });
  }

  /** @returns {LocalityParent} */
  static LocalityParent() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      meta: Joi.any(),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      serviceability: Joi.any(),
      parent_uid: Joi.string().allow("").allow(null),
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
      meta: Joi.any(),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      parent_uid: Joi.string().allow("").allow(null),
      type: Joi.string().allow(""),
      localities: Joi.array().items(LogisticApplicationModel.LocalityParent()),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  /** @returns {ErrorResponseV2} */
  static ErrorResponseV2() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ErrorResponseV3} */
  static ErrorResponseV3() {
    return Joi.object({
      success: Joi.boolean(),
      error: LogisticApplicationModel.ErrorObject(),
    });
  }

  /** @returns {ShipmentRequest} */
  static ShipmentRequest() {
    return Joi.object({
      to_serviceability: LogisticApplicationModel.ServiceabilityNew(),
      location_articles: Joi.array().items(
        LogisticApplicationModel.LocationArticle()
      ),
      journey: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
    });
  }

  /** @returns {LocationArticle} */
  static LocationArticle() {
    return Joi.object({
      fulfillment_id: Joi.number(),
      from_serviceability: LogisticApplicationModel.ServiceabilityNew(),
      fulfillment_type: Joi.string().allow(""),
      fulfillment_tags: Joi.array().items(Joi.string().allow("")),
      articles: Joi.array().items(LogisticApplicationModel.Article()),
    });
  }

  /** @returns {Article} */
  static Article() {
    return Joi.object({
      id: Joi.string().allow(""),
      item_id: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")),
      size: Joi.string().allow(""),
      price: Joi.number(),
      weight: LogisticApplicationModel.Weight(),
      attributes: LogisticApplicationModel.Attributes(),
      category_id: Joi.number(),
      dimension: LogisticApplicationModel.Dimension(),
      brand_id: Joi.number(),
      department_id: Joi.number(),
      quantity: Joi.number(),
      manufacturing_time: Joi.number(),
      manufacturing_time_unit: Joi.string().allow(""),
      mto_quantity: Joi.number(),
      is_gift: Joi.boolean(),
      is_set: Joi.boolean(),
      set: LogisticApplicationModel.Set(),
      set_quantity: Joi.number(),
      delivery_slots: LogisticApplicationModel.DeliverySlots(),
    });
  }

  /** @returns {Weight} */
  static Weight() {
    return Joi.object({
      shipping: Joi.number(),
      unit: Joi.string().allow(""),
      is_default: Joi.boolean(),
    });
  }

  /** @returns {Attributes} */
  static Attributes() {
    return Joi.object({
      battery_operated: Joi.string().allow(""),
      is_flammable: Joi.string().allow(""),
    });
  }

  /** @returns {Dimension} */
  static Dimension() {
    return Joi.object({
      height: Joi.number(),
      is_default: Joi.boolean(),
      length: Joi.number(),
      unit: Joi.string().allow(""),
      width: Joi.number(),
    });
  }

  /** @returns {Set} */
  static Set() {
    return Joi.object({
      name: Joi.string().allow(""),
      quantity: Joi.number(),
      size_distribution: LogisticApplicationModel.SetSizeDistribution(),
    });
  }

  /** @returns {DeliverySlots} */
  static DeliverySlots() {
    return Joi.object({
      delivery_date: Joi.string().allow(""),
      min_slot: Joi.string().allow(""),
      max_slot: Joi.string().allow(""),
    });
  }

  /** @returns {ServiceabilityNew} */
  static ServiceabilityNew() {
    return Joi.object({
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      country_iso_code: Joi.string().allow(""),
      location: LogisticApplicationModel.Location(),
      pincode: Joi.string().allow(""),
    });
  }

  /** @returns {Location} */
  static Location() {
    return Joi.object({
      longitude: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentResponse} */
  static ShipmentResponse() {
    return Joi.object({
      shipments: Joi.array().items(LogisticApplicationModel.ShipmentItem()),
      is_cod_available: Joi.boolean(),
    });
  }

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      shipment_cost: Joi.number(),
    });
  }

  /** @returns {ShipmentItem} */
  static ShipmentItem() {
    return Joi.object({
      fulfillment_id: Joi.number(),
      fulfillment_tags: Joi.array().items(Joi.string().allow("")),
      fulfillment_type: Joi.string().allow(""),
      from_serviceability: LogisticApplicationModel.ServiceabilityNew(),
      articles: Joi.array().items(LogisticApplicationModel.Article()),
      courier_partners: Joi.array().items(
        LogisticApplicationModel.CourierPartner()
      ),
      promise: LogisticApplicationModel.Promise(),
      tags: Joi.array().items(Joi.string().allow("")),
      is_mto: Joi.boolean(),
      is_gift: Joi.boolean(),
      is_locked: Joi.boolean(),
      packaging: LogisticApplicationModel.Packaging(),
      delivery_slots: LogisticApplicationModel.DeliverySlots(),
      count: Joi.number(),
      volumetric_weight: Joi.number(),
      ewaybill_enabled: Joi.string().allow(""),
      mps: Joi.boolean(),
      meta: LogisticApplicationModel.Meta(),
      weight: Joi.number(),
      shipment_type: Joi.string().allow(""),
      is_auto_assign: Joi.boolean(),
      is_cod_available: Joi.boolean(),
    });
  }

  /** @returns {TAT} */
  static TAT() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {CourierPartner} */
  static CourierPartner() {
    return Joi.object({
      extension_id: Joi.string().allow(""),
      scheme_id: Joi.string().allow(""),
      area_code: LogisticApplicationModel.AreaCode(),
      tat: LogisticApplicationModel.TAT(),
      display_name: Joi.string().allow(""),
      is_qc_enabled: Joi.boolean(),
      is_self_ship: Joi.boolean(),
      is_own_account: Joi.boolean(),
      ndr_attempts: Joi.number(),
      forward_pickup_cutoff: Joi.string().allow(""),
      reverse_pickup_cutoff: Joi.string().allow(""),
    });
  }

  /** @returns {Promise} */
  static Promise() {
    return Joi.object({
      customer_promise: LogisticApplicationModel.PromiseDetails(),
      meta: LogisticApplicationModel.PromiseMeta(),
    });
  }

  /** @returns {PromiseDetails} */
  static PromiseDetails() {
    return Joi.object({
      min: Joi.string().allow(""),
      max: Joi.string().allow(""),
    });
  }

  /** @returns {Packaging} */
  static Packaging() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      id: Joi.string().allow("").required(),
      dimension: LogisticApplicationModel.PackagingDimension().required(),
    });
  }
}
module.exports = LogisticApplicationModel;
