export = ServiceabilityPlatformModel;
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
 * @property {ListViewProduct} product
 * @property {number} regions_count
 * @property {number} company_id
 * @property {ListViewChannels[]} channels
 */
/**
 * @typedef ListViewResponse
 * @property {ZoneDataItem[]} page
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
 * @property {GetZoneDataViewChannels[]} channels
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids
 * @property {string} region_type
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 * @property {number} stores_count
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
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
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
 * @typedef ApplicationConfig
 * @property {string[]} [rule_ids]
 * @property {string[]} [sort]
 * @property {ZoneConfig} [zones]
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
declare class ServiceabilityPlatformModel {
}
declare namespace ServiceabilityPlatformModel {
    export { UpdateZoneConfigRequest, ServiceabilityErrorResponse, ApplicationServiceabilityConfig, ApplicationServiceabilityConfigResponse, EntityRegionView_Request, EntityRegionView_Error, EntityRegionView_page, getAppRegionZonesResponse, PageSchema, EntityRegionView_Items, EntityRegionView_Response, ListViewSummary, ZoneDataItem, ListViewProduct, ListViewChannels, ListViewItems, ListViewResponse, CompanyStoreView_PageItems, CompanyStoreView_Response, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingType, UpdateZoneData, ZoneUpdateRequest, ZoneSuccessResponse, GetZoneDataViewItems, GetSingleZoneDataViewResponse, GetZoneByIdSchema, CreateZoneData, ZoneResponse, GetZoneFromPincodeViewRequest, Zone, GetZoneFromPincodeViewResponse, GetZoneFromApplicationIdViewResponse, ServiceabilityPageResponse, MobileNo, ManagerResponse, ModifiedByResponse, IntegrationTypeResponse, ProductReturnConfigResponse, ContactNumberResponse, AddressResponse, CreatedByResponse, EwayBillResponse, EinvoiceResponse, GstCredentialsResponse, WarningsResponse, OpeningClosing, TimmingResponse, DocumentsResponse, Dp, LogisticsResponse, ItemResponse, GetStoresViewResponse, ReAssignStoreRequest, ReAssignStoreResponse, PincodeMopData, PincodeMopUpdateResponse, PincodeMOPresponse, CommonError, PincodeMopBulkData, PincodeBulkViewResponse, PincodeCodStatusListingRequest, PincodeCodStatusListingResponse, Error, PincodeCodStatusListingPage, PincodeCodStatusListingSummary, PincodeMopUpdateAuditHistoryRequest, PincodeMopUpdateAuditHistoryPaging, PincodeMopUpdateAuditHistoryResponse, PincodeMopUpdateAuditHistoryResponseData, ArithmeticOperations, SchemeRulesFeatures, SchemeRules, CourierAccount, ErrorResponse, CourierPartnerAccountFailureResponse, Page, CourierPartnerList, LocationRuleValues, LocationRule, StringComparisonOperations, IntComparisonOperations, CourierPartnerRuleConditions, CourierPartnerRule, FailureResponse, CourierPartnerRulesListResponse, CompanyConfig, ZoneConfig, ApplicationConfig, BulkRegionJobSerializer, BulkRegionResponseItemData, BulkRegionResponse, SelfShipResponse, ApplicationSelfShipConfig, ApplicationSelfShipConfigResponse, StoreRuleConfigData, CustomerRadiusSchema, StoreRuleConditionSchema, StoreRuleDataSchema, StorePrioritySchema, GetStoreRulesApiResponse, CreateStoreRuleRequestSchema, StoreRuleResponseSchema, StoreRuleUpdateResponseSchema, ServiceabilityModel, CourierPartnerSchemeFeatures, CourierPartnerSchemeModel, CourierAccountResponse, CompanyCourierPartnerAccountListResponse, PackageMaterial, PackageMaterialResponse, PackageMaterialRule, PackageRule, PackageRuleResponse, Channel, PackageMaterialRuleList, PackageMaterialList, PackageRuleProduct, PackageRuleProductTag, PackageRuleCategory, PackageMaterialRuleQuantity, RulePriorityRequest, RulePriorityResponse };
}
/** @returns {UpdateZoneConfigRequest} */
declare function UpdateZoneConfigRequest(): UpdateZoneConfigRequest;
type UpdateZoneConfigRequest = {
    serviceability_type?: string;
};
/** @returns {ServiceabilityErrorResponse} */
declare function ServiceabilityErrorResponse(): ServiceabilityErrorResponse;
type ServiceabilityErrorResponse = {
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
/** @returns {ApplicationServiceabilityConfigResponse} */
declare function ApplicationServiceabilityConfigResponse(): ApplicationServiceabilityConfigResponse;
type ApplicationServiceabilityConfigResponse = {
    error?: ServiceabilityErrorResponse;
    data?: ApplicationServiceabilityConfig;
    success: boolean;
};
/** @returns {EntityRegionView_Request} */
declare function EntityRegionView_Request(): EntityRegionView_Request;
type EntityRegionView_Request = {
    sub_type: string[];
    parent_id?: string[];
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
/** @returns {getAppRegionZonesResponse} */
declare function getAppRegionZonesResponse(): getAppRegionZonesResponse;
type getAppRegionZonesResponse = {
    page: PageSchema[];
    items: ListViewItems[];
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
/** @returns {EntityRegionView_Response} */
declare function EntityRegionView_Response(): EntityRegionView_Response;
type EntityRegionView_Response = {
    error: EntityRegionView_Error;
    page: EntityRegionView_page;
    data: EntityRegionView_Items[];
    success: boolean;
};
/** @returns {ListViewSummary} */
declare function ListViewSummary(): ListViewSummary;
type ListViewSummary = {
    total_zones: number;
    total_pincodes_served: number;
    total_active_zones: number;
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
    product: ListViewProduct;
    regions_count: number;
    company_id: number;
    channels: ListViewChannels[];
};
/** @returns {ListViewResponse} */
declare function ListViewResponse(): ListViewResponse;
type ListViewResponse = {
    page: ZoneDataItem[];
    items: ListViewItems[];
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
/** @returns {CompanyStoreView_Response} */
declare function CompanyStoreView_Response(): CompanyStoreView_Response;
type CompanyStoreView_Response = {
    page: CompanyStoreView_PageItems[];
    items?: any[];
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
/** @returns {ZoneUpdateRequest} */
declare function ZoneUpdateRequest(): ZoneUpdateRequest;
type ZoneUpdateRequest = {
    identifier: string;
    data: UpdateZoneData;
};
/** @returns {ZoneSuccessResponse} */
declare function ZoneSuccessResponse(): ZoneSuccessResponse;
type ZoneSuccessResponse = {
    status_code: number;
    success: boolean;
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
/** @returns {GetSingleZoneDataViewResponse} */
declare function GetSingleZoneDataViewResponse(): GetSingleZoneDataViewResponse;
type GetSingleZoneDataViewResponse = {
    data: GetZoneDataViewItems;
};
/** @returns {GetZoneByIdSchema} */
declare function GetZoneByIdSchema(): GetZoneByIdSchema;
type GetZoneByIdSchema = {
    zone_id: string;
    name: string;
    slug: string;
    company_id?: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
    stores_count: number;
};
/** @returns {CreateZoneData} */
declare function CreateZoneData(): CreateZoneData;
type CreateZoneData = {
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
};
/** @returns {ZoneResponse} */
declare function ZoneResponse(): ZoneResponse;
type ZoneResponse = {
    status_code: number;
    zone_id: string;
    success: boolean;
};
/** @returns {GetZoneFromPincodeViewRequest} */
declare function GetZoneFromPincodeViewRequest(): GetZoneFromPincodeViewRequest;
type GetZoneFromPincodeViewRequest = {
    country: string;
    pincode: string;
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
/** @returns {GetZoneFromPincodeViewResponse} */
declare function GetZoneFromPincodeViewResponse(): GetZoneFromPincodeViewResponse;
type GetZoneFromPincodeViewResponse = {
    serviceability_type: string;
    zones: Zone[];
};
/** @returns {GetZoneFromApplicationIdViewResponse} */
declare function GetZoneFromApplicationIdViewResponse(): GetZoneFromApplicationIdViewResponse;
type GetZoneFromApplicationIdViewResponse = {
    page: ZoneDataItem[];
    items: ListViewItems[];
};
/** @returns {ServiceabilityPageResponse} */
declare function ServiceabilityPageResponse(): ServiceabilityPageResponse;
type ServiceabilityPageResponse = {
    type?: string;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    current?: number;
};
/** @returns {MobileNo} */
declare function MobileNo(): MobileNo;
type MobileNo = {
    number?: string;
    country_code?: number;
};
/** @returns {ManagerResponse} */
declare function ManagerResponse(): ManagerResponse;
type ManagerResponse = {
    email?: string;
    mobile_no?: MobileNo;
    name?: string;
};
/** @returns {ModifiedByResponse} */
declare function ModifiedByResponse(): ModifiedByResponse;
type ModifiedByResponse = {
    username?: string;
    user_id?: string;
};
/** @returns {IntegrationTypeResponse} */
declare function IntegrationTypeResponse(): IntegrationTypeResponse;
type IntegrationTypeResponse = {
    inventory?: string;
    order?: string;
};
/** @returns {ProductReturnConfigResponse} */
declare function ProductReturnConfigResponse(): ProductReturnConfigResponse;
type ProductReturnConfigResponse = {
    on_same_store?: boolean;
};
/** @returns {ContactNumberResponse} */
declare function ContactNumberResponse(): ContactNumberResponse;
type ContactNumberResponse = {
    number?: string;
    country_code?: number;
};
/** @returns {AddressResponse} */
declare function AddressResponse(): AddressResponse;
type AddressResponse = {
    city?: string;
    address1?: string;
    pincode?: number;
    address2?: string;
    landmark?: string;
    state?: string;
    country?: string;
    latitude?: number;
    longitude?: number;
};
/** @returns {CreatedByResponse} */
declare function CreatedByResponse(): CreatedByResponse;
type CreatedByResponse = {
    username?: string;
    user_id?: string;
};
/** @returns {EwayBillResponse} */
declare function EwayBillResponse(): EwayBillResponse;
type EwayBillResponse = {
    enabled?: boolean;
};
/** @returns {EinvoiceResponse} */
declare function EinvoiceResponse(): EinvoiceResponse;
type EinvoiceResponse = {
    enabled?: boolean;
};
/** @returns {GstCredentialsResponse} */
declare function GstCredentialsResponse(): GstCredentialsResponse;
type GstCredentialsResponse = {
    e_waybill?: EwayBillResponse;
    e_invoice?: EinvoiceResponse;
};
/** @returns {WarningsResponse} */
declare function WarningsResponse(): WarningsResponse;
type WarningsResponse = {
    store_address?: string;
};
/** @returns {OpeningClosing} */
declare function OpeningClosing(): OpeningClosing;
type OpeningClosing = {
    minute?: number;
    hour?: number;
};
/** @returns {TimmingResponse} */
declare function TimmingResponse(): TimmingResponse;
type TimmingResponse = {
    open?: boolean;
    weekday?: string;
    closing?: OpeningClosing;
    opening?: OpeningClosing;
};
/** @returns {DocumentsResponse} */
declare function DocumentsResponse(): DocumentsResponse;
type DocumentsResponse = {
    legal_name?: string;
    value?: string;
    type?: string;
    verified?: boolean;
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
/** @returns {LogisticsResponse} */
declare function LogisticsResponse(): LogisticsResponse;
type LogisticsResponse = {
    override?: boolean;
    dp?: Dp;
};
/** @returns {ItemResponse} */
declare function ItemResponse(): ItemResponse;
type ItemResponse = {
    created_on?: string;
    manager?: ManagerResponse;
    modified_by?: ModifiedByResponse;
    integration_type?: IntegrationTypeResponse;
    verified_on?: string;
    product_return_config?: ProductReturnConfigResponse;
    contact_numbers?: ContactNumberResponse[];
    verified_by?: ModifiedByResponse;
    stage?: string;
    address?: AddressResponse;
    modified_on?: string;
    created_by?: CreatedByResponse;
    gst_credentials?: GstCredentialsResponse;
    display_name?: string;
    company_id?: number;
    uid?: number;
    _custom_json?: any;
    code?: string;
    warnings?: WarningsResponse;
    name?: string;
    timing?: TimmingResponse[];
    documents?: DocumentsResponse[];
    store_type?: string;
    sub_type?: string;
    company?: number;
    _cls?: string;
    logistics?: LogisticsResponse;
    notification_emails?: string[];
};
/** @returns {GetStoresViewResponse} */
declare function GetStoresViewResponse(): GetStoresViewResponse;
type GetStoresViewResponse = {
    page: ServiceabilityPageResponse;
    items?: ItemResponse[];
};
/** @returns {ReAssignStoreRequest} */
declare function ReAssignStoreRequest(): ReAssignStoreRequest;
type ReAssignStoreRequest = {
    to_pincode: string;
    identifier: string;
    configuration: any;
    ignored_locations: string[];
    articles: any[];
};
/** @returns {ReAssignStoreResponse} */
declare function ReAssignStoreResponse(): ReAssignStoreResponse;
type ReAssignStoreResponse = {
    to_pincode: string;
    success: boolean;
    error: any;
    articles?: any[];
};
/** @returns {PincodeMopData} */
declare function PincodeMopData(): PincodeMopData;
type PincodeMopData = {
    pincodes: number[];
    country: string;
    action: string;
};
/** @returns {PincodeMopUpdateResponse} */
declare function PincodeMopUpdateResponse(): PincodeMopUpdateResponse;
type PincodeMopUpdateResponse = {
    pincode: number;
    channel_id: string;
    country: string;
    is_active: boolean;
};
/** @returns {PincodeMOPresponse} */
declare function PincodeMOPresponse(): PincodeMOPresponse;
type PincodeMOPresponse = {
    success: boolean;
    status_code: number;
    batch_id: string;
    country: string;
    action: string;
    pincodes?: number[];
    updated_pincodes?: PincodeMopUpdateResponse[];
};
/** @returns {CommonError} */
declare function CommonError(): CommonError;
type CommonError = {
    status_code?: string;
    error?: any;
    success?: string;
};
/** @returns {PincodeMopBulkData} */
declare function PincodeMopBulkData(): PincodeMopBulkData;
type PincodeMopBulkData = {
    batch_id: string;
    s3_url: string;
};
/** @returns {PincodeBulkViewResponse} */
declare function PincodeBulkViewResponse(): PincodeBulkViewResponse;
type PincodeBulkViewResponse = {
    batch_id: string;
    s3_url: string;
};
/** @returns {PincodeCodStatusListingRequest} */
declare function PincodeCodStatusListingRequest(): PincodeCodStatusListingRequest;
type PincodeCodStatusListingRequest = {
    country?: string;
    is_active?: boolean;
    pincode?: number;
    current?: number;
    page_size?: number;
};
/** @returns {PincodeCodStatusListingResponse} */
declare function PincodeCodStatusListingResponse(): PincodeCodStatusListingResponse;
type PincodeCodStatusListingResponse = {
    country: string;
    data: PincodeCodStatusListingResponse[];
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
/** @returns {PincodeMopUpdateAuditHistoryRequest} */
declare function PincodeMopUpdateAuditHistoryRequest(): PincodeMopUpdateAuditHistoryRequest;
type PincodeMopUpdateAuditHistoryRequest = {
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
/** @returns {PincodeMopUpdateAuditHistoryResponse} */
declare function PincodeMopUpdateAuditHistoryResponse(): PincodeMopUpdateAuditHistoryResponse;
type PincodeMopUpdateAuditHistoryResponse = {
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
    data: PincodeMopUpdateAuditHistoryResponse[];
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
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    value: string;
    message: string;
    type: string;
};
/** @returns {CourierPartnerAccountFailureResponse} */
declare function CourierPartnerAccountFailureResponse(): CourierPartnerAccountFailureResponse;
type CourierPartnerAccountFailureResponse = {
    success: boolean;
    error: ErrorResponse[];
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
/** @returns {CourierPartnerList} */
declare function CourierPartnerList(): CourierPartnerList;
type CourierPartnerList = {
    extension_id: string;
    account_id: string;
    name: string;
    is_self_ship: boolean;
};
/** @returns {LocationRuleValues} */
declare function LocationRuleValues(): LocationRuleValues;
type LocationRuleValues = {
    id: string;
    sub_type?: string;
    name?: string;
    display_name?: string;
    parent_id?: string;
    parent_ids?: string[];
};
/** @returns {LocationRule} */
declare function LocationRule(): LocationRule;
type LocationRule = {
    type?: string;
    includes?: LocationRuleValues[];
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
    order_place_date?: ArithmeticOperations;
    store_ids?: IntComparisonOperations;
    store_type?: StringComparisonOperations;
    store_tags?: StringComparisonOperations;
    shipment_weight?: ArithmeticOperations;
    shipment_cost?: ArithmeticOperations;
    shipment_volumetric_weight?: ArithmeticOperations;
};
/** @returns {CourierPartnerRule} */
declare function CourierPartnerRule(): CourierPartnerRule;
type CourierPartnerRule = {
    is_active: boolean;
    cp_list?: CourierPartnerList[];
    name: string;
    conditions: CourierPartnerRuleConditions;
    sort: string[];
};
/** @returns {FailureResponse} */
declare function FailureResponse(): FailureResponse;
type FailureResponse = {
    success: boolean;
    error: ErrorResponse[];
};
/** @returns {CourierPartnerRulesListResponse} */
declare function CourierPartnerRulesListResponse(): CourierPartnerRulesListResponse;
type CourierPartnerRulesListResponse = {
    items: CourierPartnerRule[];
    page: Page;
};
/** @returns {CompanyConfig} */
declare function CompanyConfig(): CompanyConfig;
type CompanyConfig = {
    rule_ids: string[];
    sort: string[];
    logistics_as_actual?: boolean;
};
/** @returns {ZoneConfig} */
declare function ZoneConfig(): ZoneConfig;
type ZoneConfig = {
    serviceability_type?: string;
};
/** @returns {ApplicationConfig} */
declare function ApplicationConfig(): ApplicationConfig;
type ApplicationConfig = {
    rule_ids?: string[];
    sort?: string[];
    zones?: ZoneConfig;
};
/** @returns {BulkRegionJobSerializer} */
declare function BulkRegionJobSerializer(): BulkRegionJobSerializer;
type BulkRegionJobSerializer = {
    file_path?: string;
    country: string;
    action: string;
    region: string;
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
/** @returns {BulkRegionResponse} */
declare function BulkRegionResponse(): BulkRegionResponse;
type BulkRegionResponse = {
    items: BulkRegionResponseItemData[];
    page: Page;
};
/** @returns {SelfShipResponse} */
declare function SelfShipResponse(): SelfShipResponse;
type SelfShipResponse = {
    is_active: boolean;
    tat: number;
};
/** @returns {ApplicationSelfShipConfig} */
declare function ApplicationSelfShipConfig(): ApplicationSelfShipConfig;
type ApplicationSelfShipConfig = {
    self_ship?: any;
};
/** @returns {ApplicationSelfShipConfigResponse} */
declare function ApplicationSelfShipConfigResponse(): ApplicationSelfShipConfigResponse;
type ApplicationSelfShipConfigResponse = {
    error?: ServiceabilityErrorResponse;
    data?: ApplicationSelfShipConfig;
    success: boolean;
};
/** @returns {StoreRuleConfigData} */
declare function StoreRuleConfigData(): StoreRuleConfigData;
type StoreRuleConfigData = {
    rule_ids?: string[];
    type_based_priority?: string[];
    tag_based_priority?: string[];
    store_priority?: StorePrioritySchema[];
    sort?: string[];
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
    to_location?: LocationRule;
    customer_radius?: CustomerRadiusSchema;
    store_type?: StringComparisonOperations;
    product_tags?: StringComparisonOperations;
    product_ids?: IntComparisonOperations;
    store_tags?: StringComparisonOperations;
    order_place_date?: ArithmeticOperations;
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
    conditions?: StoreRuleConditionSchema;
    is_active?: boolean;
};
/** @returns {StorePrioritySchema} */
declare function StorePrioritySchema(): StorePrioritySchema;
type StorePrioritySchema = {
    id?: string;
    name?: string;
};
/** @returns {GetStoreRulesApiResponse} */
declare function GetStoreRulesApiResponse(): GetStoreRulesApiResponse;
type GetStoreRulesApiResponse = {
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
    pickup_cutoff: string;
    route_code: string;
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
/** @returns {CourierPartnerSchemeModel} */
declare function CourierPartnerSchemeModel(): CourierPartnerSchemeModel;
type CourierPartnerSchemeModel = {
    extension_id: string;
    scheme_id: string;
    weight: ArithmeticOperations;
    transport_type: string;
    region: string;
    delivery_type: string;
    payment_mode: string[];
    stage: string;
    feature: CourierPartnerSchemeFeatures;
};
/** @returns {CourierAccountResponse} */
declare function CourierAccountResponse(): CourierAccountResponse;
type CourierAccountResponse = {
    account_id: string;
    scheme_id: string;
    is_self_ship: boolean;
    stage: string;
    is_own_account: boolean;
    scheme_rules: CourierPartnerSchemeModel;
};
/** @returns {CompanyCourierPartnerAccountListResponse} */
declare function CompanyCourierPartnerAccountListResponse(): CompanyCourierPartnerAccountListResponse;
type CompanyCourierPartnerAccountListResponse = {
    items: CourierAccountResponse[];
    page: Page;
};
/** @returns {PackageMaterial} */
declare function PackageMaterial(): PackageMaterial;
type PackageMaterial = {
    name: string;
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
    status: string;
    max_weight?: number;
    package_vol_weight?: number;
    auto_calculate?: boolean;
};
/** @returns {PackageMaterialResponse} */
declare function PackageMaterialResponse(): PackageMaterialResponse;
type PackageMaterialResponse = {
    name: string;
    id?: string;
    item_id?: number;
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
    status: string;
    max_weight?: number;
    package_vol_weight?: number;
    auto_calculate?: boolean;
};
/** @returns {PackageMaterialRule} */
declare function PackageMaterialRule(): PackageMaterialRule;
type PackageMaterialRule = {
    rule_id?: string;
    quantity?: PackageMaterialRuleQuantity;
    weight?: number;
};
/** @returns {PackageRule} */
declare function PackageRule(): PackageRule;
type PackageRule = {
    name: string;
    company_id: number;
    type: string;
    is_active?: boolean;
    product_tag?: PackageRuleProductTag;
    product_id?: PackageRuleProduct;
    category_id?: PackageRuleCategory;
};
/** @returns {PackageRuleResponse} */
declare function PackageRuleResponse(): PackageRuleResponse;
type PackageRuleResponse = {
    id?: string;
    name: string;
    company_id: number;
    type: string;
    is_active?: boolean;
    product_tag?: PackageRuleProductTag;
    product_id?: PackageRuleProduct;
    category_id?: PackageRuleCategory;
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
    items?: PackageRuleResponse;
    page?: Page;
};
/** @returns {PackageMaterialList} */
declare function PackageMaterialList(): PackageMaterialList;
type PackageMaterialList = {
    items?: PackageMaterialResponse;
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
/** @returns {PackageMaterialRuleQuantity} */
declare function PackageMaterialRuleQuantity(): PackageMaterialRuleQuantity;
type PackageMaterialRuleQuantity = {
    min?: number;
    max?: number;
};
/** @returns {RulePriorityRequest} */
declare function RulePriorityRequest(): RulePriorityRequest;
type RulePriorityRequest = {
    rule_id: string;
    priority: number;
};
/** @returns {RulePriorityResponse} */
declare function RulePriorityResponse(): RulePriorityResponse;
type RulePriorityResponse = {
    success?: boolean;
};
