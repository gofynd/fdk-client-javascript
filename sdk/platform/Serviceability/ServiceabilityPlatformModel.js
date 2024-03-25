const Joi = require("joi");

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
 * @property {string} type
 * @property {number[]} values
 */

/**
 * @typedef StoresSchema
 * @property {string} type
 * @property {number[]} values
 */

/**
 * @typedef SummarySchema
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
 * @property {Region[]} [regions]
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
 * @property {number} [company_id]
 * @property {boolean} is_active
 * @property {ProductSchema} product
 * @property {StoresSchema} stores
 * @property {SummarySchema} [summary]
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
 * @typedef ServiceabilityZoneErrorResponse
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
 * @property {boolean} success
 * @property {number} status_code
 * @property {string} batch_id
 * @property {string} country
 * @property {string} action
 * @property {number[]} [pincodes]
 * @property {PincodeMopUpdateResponse[]} [updated_pincodes]
 */

/**
 * @typedef CommonError
 * @property {string} [status_code]
 * @property {Object} [error]
 * @property {string} [success]
 */

/**
 * @typedef PincodeMopBulkData
 * @property {string} batch_id
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
 * @typedef PincodeCodStatusListingResponse
 * @property {string} country
 * @property {PincodeCodStatusListingResponse[]} data
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
 * @typedef ConflictingErrorResponse
 * @property {ErrorResponseDetail} detail
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
 * @property {string} parent_uid
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
 * @property {string} [geoarea_id]
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
 * @typedef GeoAreaCount
 * @property {number} pincode
 * @property {number} state
 * @property {number} city
 * @property {number} sector
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
 * @typedef ErrorResponseV2
 * @property {boolean} value
 * @property {string} error
 */

/**
 * @typedef ErrorResponse
 * @property {string} value
 * @property {string} message
 * @property {string} type
 */

/**
 * @typedef CourierPartnerAccountFailureResponse
 * @property {boolean} success
 * @property {ErrorResponse[]} error
 */

/**
 * @typedef Page
 * @property {number} size
 * @property {number} item_total
 * @property {boolean} has_previous
 * @property {string} type
 * @property {number} current
 * @property {boolean} has_next
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
 * @property {string} extension_id
 * @property {string} account_id
 * @property {string} name
 * @property {boolean} is_self_ship
 */

/**
 * @typedef LocationRuleValues
 * @property {string} id
 * @property {string} [sub_type]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [parent_id]
 * @property {string[]} [parent_ids]
 */

/**
 * @typedef LocationRule
 * @property {string} [type]
 * @property {LocationRuleValues[]} [includes]
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
 * @property {ArithmeticOperations} [order_place_date]
 * @property {IntComparisonOperations} [store_ids]
 * @property {StringComparisonOperations} [store_type]
 * @property {StringComparisonOperations} [store_tags]
 * @property {ArithmeticOperations} [shipment_weight]
 * @property {ArithmeticOperations} [shipment_cost]
 * @property {ArithmeticOperations} [shipment_volumetric_weight]
 */

/**
 * @typedef CourierPartnerRule
 * @property {boolean} is_active
 * @property {CourierPartnerList[]} [cp_list]
 * @property {string} name
 * @property {CourierPartnerRuleConditions} conditions
 * @property {string[]} [manual_priority]
 * @property {string[]} sort
 */

/**
 * @typedef FailureResponse
 * @property {boolean} success
 * @property {ErrorResponse[]} error
 */

/**
 * @typedef CourierPartnerRulesListResponse
 * @property {CourierPartnerRule[]} items
 * @property {Page} page
 */

/**
 * @typedef CompanyConfig
 * @property {string[]} rule_ids
 * @property {string[]} sort
 * @property {boolean} [logistics_as_actual]
 */

/**
 * @typedef ZoneConfig
 * @property {string} [serviceability_type]
 */

/**
 * @typedef BuyboxConfig
 * @property {boolean} show_seller
 * @property {boolean} enable_selection
 * @property {boolean} is_seller_buybox_enabled
 */

/**
 * @typedef BuyboxRuleConfig
 * @property {string[]} [store_type_priority]
 * @property {string[]} [store_tag_priority]
 * @property {string[]} [sort]
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
 * @property {BuyboxConfig} [buybox_config]
 * @property {BuyboxRuleConfig} [buybox_rule_config]
 * @property {PromiseType[]} [promise_types]
 * @property {PromiseConfig} [promise_config]
 */

/**
 * @typedef ApplicationConfigPatchRequest
 * @property {BuyboxConfig} [buybox_config]
 * @property {BuyboxRuleConfig} [buybox_rule_config]
 * @property {PromiseType[]} [promise_types]
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
 * @property {string[]} [manual_priority]
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
 * @property {LocationRule} [to_location]
 * @property {CustomerRadiusSchema} [customer_radius]
 * @property {StringComparisonOperations} [store_type]
 * @property {StringComparisonOperations} [product_tags]
 * @property {IntComparisonOperations} [product_ids]
 * @property {StringComparisonOperations} [store_tags]
 * @property {ArithmeticOperations} [order_place_date]
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
 * @property {string[]} [manual_priority]
 * @property {StoreRuleConditionSchema} [conditions]
 * @property {boolean} [is_active]
 */

/**
 * @typedef StorePrioritySchema
 * @property {string} [id]
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
 * @property {string[]} [manual_priority]
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
 * @property {string[]} [manual_priority]
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
 * @property {string[]} [manual_priority]
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
 * @typedef CourierPartnerSchemeModel
 * @property {string} extension_id
 * @property {string} scheme_id
 * @property {ArithmeticOperations} weight
 * @property {string} transport_type
 * @property {string} region
 * @property {string} delivery_type
 * @property {string[]} payment_mode
 * @property {string} stage
 * @property {CourierPartnerSchemeFeatures} feature
 */

/**
 * @typedef CourierAccountResponse
 * @property {string} account_id
 * @property {string} scheme_id
 * @property {boolean} is_self_ship
 * @property {string} stage
 * @property {boolean} is_own_account
 * @property {CourierPartnerSchemeModel} scheme_rules
 */

/**
 * @typedef CompanyCourierPartnerAccountListResponse
 * @property {CourierAccountResponse[]} items
 * @property {Page} page
 */

/**
 * @typedef PackageMaterial
 * @property {string} name
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
 * @property {string} status
 * @property {number} [max_weight]
 * @property {number} [package_vol_weight]
 * @property {boolean} [auto_calculate]
 */

/**
 * @typedef PackageMaterialResponse
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
 * @property {string} status
 * @property {number} [max_weight]
 * @property {number} [package_vol_weight]
 * @property {boolean} [auto_calculate]
 */

/**
 * @typedef PackageMaterialRule
 * @property {string} [rule_id]
 * @property {PackageMaterialRuleQuantity} [quantity]
 * @property {number} [weight]
 */

/**
 * @typedef PackageRule
 * @property {string} name
 * @property {number} company_id
 * @property {string} type
 * @property {boolean} [is_active]
 * @property {PackageRuleProductTag} [product_tag]
 * @property {PackageRuleProduct} [product_id]
 * @property {PackageRuleCategory} [category_id]
 */

/**
 * @typedef PackageRuleResponse
 * @property {string} [id]
 * @property {string} name
 * @property {number} company_id
 * @property {string} type
 * @property {boolean} [is_active]
 * @property {PackageRuleProductTag} [product_tag]
 * @property {PackageRuleProduct} [product_id]
 * @property {PackageRuleCategory} [category_id]
 */

/**
 * @typedef Channel
 * @property {string} [type]
 * @property {string} [id]
 */

/**
 * @typedef PackageMaterialRuleList
 * @property {PackageRuleResponse} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PackageMaterialList
 * @property {PackageMaterialResponse} [items]
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

class ServiceabilityPlatformModel {
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

  /** @returns {StoresSchema} */
  static StoresSchema() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.number()).required(),
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
      regions: Joi.array().items(ServiceabilityPlatformModel.Region()),
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
      company_id: Joi.number(),
      is_active: Joi.boolean().required(),
      product: ServiceabilityPlatformModel.ProductSchema().required(),
      stores: ServiceabilityPlatformModel.StoresSchema().required(),
      summary: ServiceabilityPlatformModel.SummarySchema(),
      created_by: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      overlapping_file_url: Joi.string().allow(""),
      geo_areas: Joi.array().items(Joi.string().allow("")).required(),
      type: Joi.string().allow("").required(),
      overlapping_zone_names: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {ServiceabilityZoneErrorResponse} */
  static ServiceabilityZoneErrorResponse() {
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
      success: Joi.boolean().required(),
      status_code: Joi.number().required(),
      batch_id: Joi.string().allow("").required(),
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
      status_code: Joi.string().allow(""),
      error: Joi.any(),
      success: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeMopBulkData} */
  static PincodeMopBulkData() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
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

  /** @returns {PincodeCodStatusListingResponse} */
  static PincodeCodStatusListingResponse() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      data: Joi.array()
        .items(Joi.link("#PincodeCodStatusListingResponse"))
        .required(),
      success: Joi.boolean().required(),
      errors: Joi.array().items(ServiceabilityPlatformModel.Error()),
      page: ServiceabilityPlatformModel.PincodeCodStatusListingPage().required(),
      summary: ServiceabilityPlatformModel.PincodeCodStatusListingSummary().required(),
    }).id("PincodeCodStatusListingResponse");
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
      lt: Joi.number(),
      gt: Joi.number(),
      lte: Joi.number(),
      gte: Joi.number(),
    });
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

  /** @returns {ConflictingErrorResponse} */
  static ConflictingErrorResponse() {
    return Joi.object({
      detail: ServiceabilityPlatformModel.ErrorResponseDetail().required(),
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
      parent_uid: Joi.string().allow("").required(),
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
      geoarea_id: Joi.string().allow(""),
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

  /** @returns {GeoAreaCount} */
  static GeoAreaCount() {
    return Joi.object({
      pincode: Joi.number().required(),
      state: Joi.number().required(),
      city: Joi.number().required(),
      sector: Joi.number().required(),
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
      geoarea_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      region_type: Joi.string().allow("").required(),
      type: Joi.string().allow(""),
      areas: Joi.array().items(ServiceabilityPlatformModel.AreaExpandedV2()),
      created_on: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      created_by: Joi.string().allow("").required(),
      modified_by: Joi.string().allow("").required(),
    });
  }

  /** @returns {ErrorResponseV2} */
  static ErrorResponseV2() {
    return Joi.object({
      value: Joi.boolean().required(),
      error: Joi.string().allow("").required(),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      value: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
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
      size: Joi.number().required(),
      item_total: Joi.number().required(),
      has_previous: Joi.boolean().required(),
      type: Joi.string().allow("").required(),
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
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
      extension_id: Joi.string().allow("").required(),
      account_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
    });
  }

  /** @returns {LocationRuleValues} */
  static LocationRuleValues() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      sub_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      parent_id: Joi.string().allow(""),
      parent_ids: Joi.array().items(Joi.string().allow("")),
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
      order_place_date: ServiceabilityPlatformModel.ArithmeticOperations(),
      store_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      store_type: ServiceabilityPlatformModel.StringComparisonOperations(),
      store_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      shipment_weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      shipment_cost: ServiceabilityPlatformModel.ArithmeticOperations(),
      shipment_volumetric_weight: ServiceabilityPlatformModel.ArithmeticOperations(),
    });
  }

  /** @returns {CourierPartnerRule} */
  static CourierPartnerRule() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      cp_list: Joi.array().items(
        ServiceabilityPlatformModel.CourierPartnerList()
      ),
      name: Joi.string().allow("").required(),
      conditions: ServiceabilityPlatformModel.CourierPartnerRuleConditions().required(),
      manual_priority: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")).required(),
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
        .items(ServiceabilityPlatformModel.CourierPartnerRule())
        .required(),
      page: ServiceabilityPlatformModel.Page().required(),
    });
  }

  /** @returns {CompanyConfig} */
  static CompanyConfig() {
    return Joi.object({
      rule_ids: Joi.array().items(Joi.string().allow("")).required(),
      sort: Joi.array().items(Joi.string().allow("")).required(),
      logistics_as_actual: Joi.boolean(),
    });
  }

  /** @returns {ZoneConfig} */
  static ZoneConfig() {
    return Joi.object({
      serviceability_type: Joi.string().allow(""),
    });
  }

  /** @returns {BuyboxConfig} */
  static BuyboxConfig() {
    return Joi.object({
      show_seller: Joi.boolean().required(),
      enable_selection: Joi.boolean().required(),
      is_seller_buybox_enabled: Joi.boolean().required(),
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
      buybox_config: ServiceabilityPlatformModel.BuyboxConfig(),
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
      buybox_config: ServiceabilityPlatformModel.BuyboxConfig(),
      buybox_rule_config: ServiceabilityPlatformModel.BuyboxRuleConfig(),
      promise_types: Joi.array().items(
        ServiceabilityPlatformModel.PromiseType()
      ),
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
      manual_priority: Joi.array().items(Joi.string().allow("")),
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
      to_location: ServiceabilityPlatformModel.LocationRule(),
      customer_radius: ServiceabilityPlatformModel.CustomerRadiusSchema(),
      store_type: ServiceabilityPlatformModel.StringComparisonOperations(),
      product_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      product_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      store_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      order_place_date: ServiceabilityPlatformModel.ArithmeticOperations(),
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
      manual_priority: Joi.array().items(Joi.string().allow("")),
      conditions: ServiceabilityPlatformModel.StoreRuleConditionSchema(),
      is_active: Joi.boolean(),
    });
  }

  /** @returns {StorePrioritySchema} */
  static StorePrioritySchema() {
    return Joi.object({
      id: Joi.string().allow(""),
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
      manual_priority: Joi.array().items(Joi.string().allow("")),
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
      manual_priority: Joi.array().items(Joi.string().allow("")),
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
      manual_priority: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {CourierPartnerSchemeModel} */
  static CourierPartnerSchemeModel() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      weight: ServiceabilityPlatformModel.ArithmeticOperations().required(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      feature: ServiceabilityPlatformModel.CourierPartnerSchemeFeatures().required(),
    });
  }

  /** @returns {CourierAccountResponse} */
  static CourierAccountResponse() {
    return Joi.object({
      account_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      stage: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
      scheme_rules: ServiceabilityPlatformModel.CourierPartnerSchemeModel().required(),
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
      name: Joi.string().allow("").required(),
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
      status: Joi.string().allow("").required(),
      max_weight: Joi.number(),
      package_vol_weight: Joi.number(),
      auto_calculate: Joi.boolean(),
    });
  }

  /** @returns {PackageMaterialResponse} */
  static PackageMaterialResponse() {
    return Joi.object({
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
      status: Joi.string().allow("").required(),
      max_weight: Joi.number(),
      package_vol_weight: Joi.number(),
      auto_calculate: Joi.boolean(),
    });
  }

  /** @returns {PackageMaterialRule} */
  static PackageMaterialRule() {
    return Joi.object({
      rule_id: Joi.string().allow(""),
      quantity: ServiceabilityPlatformModel.PackageMaterialRuleQuantity(),
      weight: Joi.number(),
    });
  }

  /** @returns {PackageRule} */
  static PackageRule() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      type: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      product_tag: ServiceabilityPlatformModel.PackageRuleProductTag(),
      product_id: ServiceabilityPlatformModel.PackageRuleProduct(),
      category_id: ServiceabilityPlatformModel.PackageRuleCategory(),
    });
  }

  /** @returns {PackageRuleResponse} */
  static PackageRuleResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      type: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      product_tag: ServiceabilityPlatformModel.PackageRuleProductTag(),
      product_id: ServiceabilityPlatformModel.PackageRuleProduct(),
      category_id: ServiceabilityPlatformModel.PackageRuleCategory(),
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
      items: ServiceabilityPlatformModel.PackageRuleResponse(),
      page: ServiceabilityPlatformModel.Page(),
    });
  }

  /** @returns {PackageMaterialList} */
  static PackageMaterialList() {
    return Joi.object({
      items: ServiceabilityPlatformModel.PackageMaterialResponse(),
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
}
module.exports = ServiceabilityPlatformModel;
