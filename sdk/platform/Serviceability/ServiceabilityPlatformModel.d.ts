export = ServiceabilityPlatformModel;
/**
 * @typedef AddressResponse
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {number} [pincode]
 * @property {string} [state]
 */
/**
 * @typedef ApplicationConfig
 * @property {string[]} [rule_ids]
 * @property {string[]} [sort]
 * @property {ZoneConfig} [zones]
 */
/**
 * @typedef ApplicationSelfShipConfig
 * @property {Object} [self_ship]
 */
/**
 * @typedef ApplicationSelfShipConfigResponse
 * @property {ApplicationSelfShipConfig} [data]
 * @property {ServiceabilityErrorResponse} [error]
 * @property {boolean} success
 */
/**
 * @typedef ApplicationServiceabilityConfig
 * @property {string} channel_id
 * @property {string} channel_type
 * @property {string} serviceability_type
 */
/**
 * @typedef ApplicationServiceabilityConfigResponse
 * @property {ApplicationServiceabilityConfig} [data]
 * @property {ServiceabilityErrorResponse} [error]
 * @property {boolean} success
 */
/**
 * @typedef ArithmeticOperations
 * @property {number} [gt]
 * @property {number} [gte]
 * @property {number} [lt]
 * @property {number} [lte]
 */
/**
 * @typedef BulkRegionJobSerializer
 * @property {string} action
 * @property {string} country
 * @property {string} [file_path]
 * @property {string} region
 */
/**
 * @typedef BulkRegionResponse
 * @property {BulkRegionResponseItemData[]} items
 * @property {Page} page
 */
/**
 * @typedef BulkRegionResponseItemData
 * @property {string} action
 * @property {string} batch_id
 * @property {string} country
 * @property {string} [error_file_path]
 * @property {number} [failed]
 * @property {Object[]} [failed_records]
 * @property {string} file_path
 * @property {string} region
 * @property {string} status
 * @property {number} [success]
 * @property {number} [total]
 */
/**
 * @typedef Channel
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef CommonError
 * @property {Object} [error]
 * @property {string} [status_code]
 * @property {string} [success]
 */
/**
 * @typedef CompanyConfig
 * @property {boolean} [logistics_as_actual]
 * @property {string[]} rule_ids
 * @property {string[]} sort
 */
/**
 * @typedef CompanyCourierPartnerAccountListResponse
 * @property {CourierAccountResponse[]} items
 * @property {Page} page
 */
/**
 * @typedef CompanyStoreView_PageItems
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {string} type
 */
/**
 * @typedef CompanyStoreView_Response
 * @property {Object[]} [items]
 * @property {CompanyStoreView_PageItems[]} page
 */
/**
 * @typedef ContactNumberResponse
 * @property {number} [country_code]
 * @property {string} [number]
 */
/**
 * @typedef CourierAccount
 * @property {string} account_id
 * @property {string} extension_id
 * @property {boolean} is_own_account
 * @property {boolean} is_self_ship
 * @property {string} scheme_id
 * @property {string} stage
 */
/**
 * @typedef CourierAccountResponse
 * @property {string} account_id
 * @property {boolean} is_own_account
 * @property {boolean} is_self_ship
 * @property {string} scheme_id
 * @property {CourierPartnerSchemeModel} scheme_rules
 * @property {string} stage
 */
/**
 * @typedef CourierPartnerAccountFailureResponse
 * @property {ErrorResponse[]} error
 * @property {boolean} success
 */
/**
 * @typedef CourierPartnerList
 * @property {string} account_id
 * @property {string} extension_id
 * @property {boolean} is_self_ship
 * @property {string} name
 */
/**
 * @typedef CourierPartnerRule
 * @property {CourierPartnerRuleConditions} conditions
 * @property {CourierPartnerList[]} [cp_list]
 * @property {boolean} is_active
 * @property {string} name
 * @property {string[]} sort
 */
/**
 * @typedef CourierPartnerRuleConditions
 * @property {IntComparisonOperations} [brand_ids]
 * @property {IntComparisonOperations} [category_ids]
 * @property {IntComparisonOperations} [department_ids]
 * @property {LocationRule} [forward]
 * @property {ArithmeticOperations} [order_place_date]
 * @property {StringComparisonOperations} [payment_mode]
 * @property {IntComparisonOperations} [product_ids]
 * @property {StringComparisonOperations} [product_tags]
 * @property {LocationRule} [reverse]
 * @property {ArithmeticOperations} [shipment_cost]
 * @property {ArithmeticOperations} [shipment_volumetric_weight]
 * @property {ArithmeticOperations} [shipment_weight]
 * @property {IntComparisonOperations} [store_ids]
 * @property {StringComparisonOperations} [store_tags]
 * @property {StringComparisonOperations} [store_type]
 * @property {StringComparisonOperations} [zone_ids]
 */
/**
 * @typedef CourierPartnerRulesListResponse
 * @property {CourierPartnerRule[]} items
 * @property {Page} page
 */
/**
 * @typedef CourierPartnerSchemeFeatures
 * @property {boolean} [cold_storage_goods]
 * @property {boolean} [dangerous_goods]
 * @property {boolean} [doorstep_exchange]
 * @property {boolean} [doorstep_qc]
 * @property {boolean} [doorstep_return]
 * @property {boolean} [ewaybill]
 * @property {boolean} [fragile_goods]
 * @property {boolean} [mps]
 * @property {boolean} [multi_pick_multi_drop]
 * @property {boolean} [multi_pick_single_drop]
 * @property {boolean} [ndr]
 * @property {number} [ndr_attempts]
 * @property {boolean} [openbox_delivery]
 * @property {boolean} [product_installation]
 * @property {boolean} [qr]
 * @property {boolean} [restricted_goods]
 * @property {boolean} [single_pick_multi_drop]
 * @property {string} [status_updates]
 */
/**
 * @typedef CourierPartnerSchemeModel
 * @property {string} delivery_type
 * @property {string} extension_id
 * @property {CourierPartnerSchemeFeatures} feature
 * @property {string[]} payment_mode
 * @property {string} region
 * @property {string} scheme_id
 * @property {string} stage
 * @property {string} transport_type
 * @property {ArithmeticOperations} weight
 */
/**
 * @typedef CreatedByResponse
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef CreateStoreRuleRequestSchema
 * @property {StoreRuleConditionSchema} [conditions]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string[]} [sort]
 * @property {StorePrioritySchema[]} [store_priority]
 * @property {string[]} [tag_based_priority]
 * @property {string[]} [type_based_priority]
 */
/**
 * @typedef CreateZoneData
 * @property {string} [assignment_preference]
 * @property {GetZoneDataViewChannels[]} channels
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {ZoneMappingType[]} mapping
 * @property {string} name
 * @property {string} region_type
 * @property {string} slug
 * @property {number[]} store_ids
 */
/**
 * @typedef CustomerRadiusSchema
 * @property {number} [gt]
 * @property {number} [gte]
 * @property {number} [lt]
 * @property {number} [lte]
 * @property {string} unit
 */
/**
 * @typedef DocumentsResponse
 * @property {string} [legal_name]
 * @property {string} [type]
 * @property {string} [value]
 * @property {boolean} [verified]
 */
/**
 * @typedef Dp
 * @property {number} [area_code]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [external_account_id]
 * @property {number} [fm_priority]
 * @property {string} [internal_account_id]
 * @property {number} [lm_priority]
 * @property {string[]} [operations]
 * @property {string} [payment_mode]
 * @property {number} [rvp_priority]
 * @property {string} [transport_mode]
 */
/**
 * @typedef EinvoiceResponse
 * @property {boolean} [enabled]
 */
/**
 * @typedef EntityRegionView_Error
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef EntityRegionView_Items
 * @property {string} name
 * @property {string} sub_type
 * @property {string} uid
 */
/**
 * @typedef EntityRegionView_page
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {string} type
 */
/**
 * @typedef EntityRegionView_Request
 * @property {string[]} [parent_id]
 * @property {string[]} sub_type
 */
/**
 * @typedef EntityRegionView_Response
 * @property {EntityRegionView_Items[]} data
 * @property {EntityRegionView_Error} error
 * @property {EntityRegionView_page} page
 * @property {boolean} success
 */
/**
 * @typedef Error
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} type
 * @property {string} value
 */
/**
 * @typedef EwayBillResponse
 * @property {boolean} [enabled]
 */
/**
 * @typedef FailureResponse
 * @property {ErrorResponse[]} error
 * @property {boolean} success
 */
/**
 * @typedef getAppRegionZonesResponse
 * @property {ListViewItems[]} items
 * @property {PageSchema[]} page
 */
/**
 * @typedef GetSingleZoneDataViewResponse
 * @property {GetZoneDataViewItems} data
 */
/**
 * @typedef GetStoreRulesApiResponse
 * @property {StoreRuleDataSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetStoresViewResponse
 * @property {ItemResponse[]} [items]
 * @property {ServiceabilityPageResponse} page
 */
/**
 * @typedef GetZoneByIdSchema
 * @property {string} [assignment_preference]
 * @property {GetZoneDataViewChannels[]} channels
 * @property {number} [company_id]
 * @property {boolean} is_active
 * @property {ZoneMappingType[]} mapping
 * @property {string} name
 * @property {ZoneProductTypes} product
 * @property {string} region_type
 * @property {string} slug
 * @property {number[]} store_ids
 * @property {number} stores_count
 * @property {string} zone_id
 */
/**
 * @typedef GetZoneDataViewChannels
 * @property {string} channel_id
 * @property {string} channel_type
 */
/**
 * @typedef GetZoneDataViewItems
 * @property {string} [assignment_preference]
 * @property {GetZoneDataViewChannels[]} channels
 * @property {number} [company_id]
 * @property {boolean} is_active
 * @property {ZoneMappingType[]} mapping
 * @property {string} name
 * @property {ZoneProductTypes} product
 * @property {string} [region_type]
 * @property {string} slug
 * @property {number[]} store_ids
 * @property {number} stores_count
 * @property {string} zone_id
 */
/**
 * @typedef GetZoneFromApplicationIdViewResponse
 * @property {ListViewItems[]} items
 * @property {ZoneDataItem[]} page
 */
/**
 * @typedef GetZoneFromPincodeViewRequest
 * @property {string} country
 * @property {string} pincode
 */
/**
 * @typedef GetZoneFromPincodeViewResponse
 * @property {string} serviceability_type
 * @property {Zone[]} zones
 */
/**
 * @typedef GstCredentialsResponse
 * @property {EinvoiceResponse} [e_invoice]
 * @property {EwayBillResponse} [e_waybill]
 */
/**
 * @typedef IntComparisonOperations
 * @property {number[]} [includes]
 */
/**
 * @typedef IntegrationTypeResponse
 * @property {string} [inventory]
 * @property {string} [order]
 */
/**
 * @typedef ItemResponse
 * @property {string} [_cls]
 * @property {Object} [_custom_json]
 * @property {AddressResponse} [address]
 * @property {string} [code]
 * @property {number} [company]
 * @property {number} [company_id]
 * @property {ContactNumberResponse[]} [contact_numbers]
 * @property {CreatedByResponse} [created_by]
 * @property {string} [created_on]
 * @property {string} [display_name]
 * @property {DocumentsResponse[]} [documents]
 * @property {GstCredentialsResponse} [gst_credentials]
 * @property {IntegrationTypeResponse} [integration_type]
 * @property {LogisticsResponse} [logistics]
 * @property {ManagerResponse} [manager]
 * @property {ModifiedByResponse} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string[]} [notification_emails]
 * @property {ProductReturnConfigResponse} [product_return_config]
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {string} [sub_type]
 * @property {TimmingResponse[]} [timing]
 * @property {number} [uid]
 * @property {ModifiedByResponse} [verified_by]
 * @property {string} [verified_on]
 * @property {WarningsResponse} [warnings]
 */
/**
 * @typedef ListViewChannels
 * @property {string} channel_id
 * @property {string} channel_type
 */
/**
 * @typedef ListViewItems
 * @property {ListViewChannels} channels
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string} name
 * @property {ListViewProduct} product
 * @property {number} regions_count
 * @property {string} slug
 * @property {number} stores_count
 * @property {string} zone_id
 */
/**
 * @typedef ListViewProduct
 * @property {number} count
 * @property {string} type
 */
/**
 * @typedef ListViewResponse
 * @property {ListViewItems[]} items
 * @property {ZoneDataItem[]} page
 */
/**
 * @typedef ListViewSummary
 * @property {number} total_active_zones
 * @property {number} total_pincodes_served
 * @property {number} total_zones
 */
/**
 * @typedef LocationRule
 * @property {LocationRuleValues[]} [includes]
 * @property {string} [type]
 */
/**
 * @typedef LocationRuleValues
 * @property {string} [display_name]
 * @property {string} id
 * @property {string} [name]
 * @property {string} [parent_id]
 * @property {string[]} [parent_ids]
 * @property {string} [sub_type]
 */
/**
 * @typedef LogisticsResponse
 * @property {Dp} [dp]
 * @property {boolean} [override]
 */
/**
 * @typedef ManagerResponse
 * @property {string} [email]
 * @property {MobileNo} [mobile_no]
 * @property {string} [name]
 */
/**
 * @typedef MobileNo
 * @property {number} [country_code]
 * @property {string} [number]
 */
/**
 * @typedef ModifiedByResponse
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef OpeningClosing
 * @property {number} [hour]
 * @property {number} [minute]
 */
/**
 * @typedef PackageMaterial
 * @property {boolean} [auto_calculate]
 * @property {Channel[]} channels
 * @property {number} error_rate
 * @property {number} height
 * @property {number} length
 * @property {number} [max_weight]
 * @property {string[]} [media]
 * @property {string} name
 * @property {string} package_type
 * @property {number} [package_vol_weight]
 * @property {PackageMaterialRule[]} [rules]
 * @property {string} size
 * @property {string} status
 * @property {number[]} store_ids
 * @property {boolean} [track_inventory]
 * @property {number} weight
 * @property {number} width
 */
/**
 * @typedef PackageMaterialList
 * @property {PackageMaterialResponse} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PackageMaterialResponse
 * @property {boolean} [auto_calculate]
 * @property {Channel[]} channels
 * @property {number} error_rate
 * @property {number} height
 * @property {string} [id]
 * @property {number} [item_id]
 * @property {number} length
 * @property {number} [max_weight]
 * @property {string[]} [media]
 * @property {string} name
 * @property {string} package_type
 * @property {number} [package_vol_weight]
 * @property {PackageMaterialRule[]} [rules]
 * @property {string} size
 * @property {string} status
 * @property {number[]} store_ids
 * @property {boolean} [track_inventory]
 * @property {number} weight
 * @property {number} width
 */
/**
 * @typedef PackageMaterialRule
 * @property {PackageMaterialRuleQuantity} [quantity]
 * @property {string} [rule_id]
 * @property {number} [weight]
 */
/**
 * @typedef PackageMaterialRuleList
 * @property {PackageRuleResponse} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PackageMaterialRuleQuantity
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef PackageRule
 * @property {PackageRuleCategory} [category_id]
 * @property {number} company_id
 * @property {boolean} [is_active]
 * @property {string} name
 * @property {PackageRuleProduct} [product_id]
 * @property {PackageRuleProductTag} [product_tag]
 * @property {string} type
 */
/**
 * @typedef PackageRuleCategory
 * @property {number[]} [includes]
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
 * @typedef PackageRuleResponse
 * @property {PackageRuleCategory} [category_id]
 * @property {number} company_id
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {string} name
 * @property {PackageRuleProduct} [product_id]
 * @property {PackageRuleProductTag} [product_tag]
 * @property {string} type
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef PageSchema
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {string} type
 */
/**
 * @typedef PincodeBulkViewResponse
 * @property {string} batch_id
 * @property {string} s3_url
 */
/**
 * @typedef PincodeCodStatusListingPage
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {string} type
 */
/**
 * @typedef PincodeCodStatusListingRequest
 * @property {string} [country]
 * @property {number} [current]
 * @property {boolean} [is_active]
 * @property {number} [page_size]
 * @property {number} [pincode]
 */
/**
 * @typedef PincodeCodStatusListingResponse
 * @property {string} country
 * @property {PincodeCodStatusListingResponse[]} data
 * @property {Error[]} [errors]
 * @property {PincodeCodStatusListingPage} page
 * @property {boolean} success
 * @property {PincodeCodStatusListingSummary} summary
 */
/**
 * @typedef PincodeCodStatusListingSummary
 * @property {number} total_active_pincodes
 * @property {number} total_inactive_pincodes
 */
/**
 * @typedef PincodeMopBulkData
 * @property {string} batch_id
 * @property {string} s3_url
 */
/**
 * @typedef PincodeMopData
 * @property {string} action
 * @property {string} country
 * @property {number[]} pincodes
 */
/**
 * @typedef PincodeMOPresponse
 * @property {string} action
 * @property {string} batch_id
 * @property {string} country
 * @property {number[]} [pincodes]
 * @property {number} status_code
 * @property {boolean} success
 * @property {PincodeMopUpdateResponse[]} [updated_pincodes]
 */
/**
 * @typedef PincodeMopUpdateAuditHistoryPaging
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef PincodeMopUpdateAuditHistoryRequest
 * @property {string} entity_type
 * @property {string} [file_name]
 */
/**
 * @typedef PincodeMopUpdateAuditHistoryResponse
 * @property {string} [batch_id]
 * @property {string} [entity_type]
 * @property {string} [error_file_s3_url]
 * @property {string} [file_name]
 * @property {string} [s3_url]
 * @property {boolean} [success]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 */
/**
 * @typedef PincodeMopUpdateAuditHistoryResponseData
 * @property {PincodeMopUpdateAuditHistoryResponse[]} data
 * @property {string} [entity_type]
 * @property {PincodeMopUpdateAuditHistoryPaging} page
 */
/**
 * @typedef PincodeMopUpdateResponse
 * @property {string} channel_id
 * @property {string} country
 * @property {boolean} is_active
 * @property {number} pincode
 */
/**
 * @typedef ProductReturnConfigResponse
 * @property {boolean} [on_same_store]
 */
/**
 * @typedef ReAssignStoreRequest
 * @property {Object[]} articles
 * @property {Object} configuration
 * @property {string} identifier
 * @property {string[]} ignored_locations
 * @property {string} to_pincode
 */
/**
 * @typedef ReAssignStoreResponse
 * @property {Object[]} [articles]
 * @property {Object} error
 * @property {boolean} success
 * @property {string} to_pincode
 */
/**
 * @typedef RulePriorityRequest
 * @property {number} priority
 * @property {string} rule_id
 */
/**
 * @typedef RulePriorityResponse
 * @property {boolean} [success]
 */
/**
 * @typedef SchemeRules
 * @property {SchemeRulesFeatures} [feature]
 * @property {string[]} [payment_mode]
 * @property {string} [region]
 * @property {string[]} [transport_type]
 * @property {ArithmeticOperations} [weight]
 */
/**
 * @typedef SchemeRulesFeatures
 * @property {boolean} [battery_operated]
 * @property {boolean} [e_waybill]
 * @property {boolean} [flammable]
 * @property {boolean} [hazmat]
 * @property {boolean} [multi_part_shipments]
 * @property {boolean} [quality_check]
 * @property {boolean} [quick_response_code]
 */
/**
 * @typedef SelfShipResponse
 * @property {boolean} is_active
 * @property {number} tat
 */
/**
 * @typedef ServiceabilityErrorResponse
 * @property {string} message
 * @property {string} type
 * @property {string} value
 */
/**
 * @typedef ServiceabilityModel
 * @property {boolean} is_first_mile
 * @property {boolean} is_installation
 * @property {boolean} is_last_mile
 * @property {boolean} is_qc
 * @property {boolean} is_return
 * @property {number} lm_cod_limit
 * @property {string} pickup_cutoff
 * @property {string} route_code
 */
/**
 * @typedef ServiceabilityPageResponse
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef StorePrioritySchema
 * @property {string} [id]
 * @property {string} [name]
 */
/**
 * @typedef StoreRuleConditionSchema
 * @property {IntComparisonOperations} [brand_ids]
 * @property {IntComparisonOperations} [category_ids]
 * @property {CustomerRadiusSchema} [customer_radius]
 * @property {IntComparisonOperations} [department_ids]
 * @property {ArithmeticOperations} [order_place_date]
 * @property {IntComparisonOperations} [product_ids]
 * @property {StringComparisonOperations} [product_tags]
 * @property {StringComparisonOperations} [store_tags]
 * @property {StringComparisonOperations} [store_type]
 * @property {LocationRule} [to_location]
 * @property {StringComparisonOperations} [zone_ids]
 */
/**
 * @typedef StoreRuleConfigData
 * @property {string[]} [rule_ids]
 * @property {string[]} [sort]
 * @property {StorePrioritySchema[]} [store_priority]
 * @property {string[]} [tag_based_priority]
 * @property {string[]} [type_based_priority]
 */
/**
 * @typedef StoreRuleDataSchema
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {StoreRuleConditionSchema} [conditions]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string[]} [sort]
 * @property {StorePrioritySchema[]} [store_priority]
 * @property {string[]} [tag_based_priority]
 * @property {string[]} [type_based_priority]
 */
/**
 * @typedef StoreRuleResponseSchema
 * @property {StoreRuleConditionSchema} [conditions]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string[]} [sort]
 * @property {StorePrioritySchema[]} [store_priority]
 * @property {string[]} [tag_based_priority]
 * @property {string} [type]
 * @property {string[]} [type_based_priority]
 */
/**
 * @typedef StoreRuleUpdateResponseSchema
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {StoreRuleConditionSchema} [conditions]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string[]} [sort]
 * @property {StorePrioritySchema[]} [store_priority]
 * @property {string[]} [tag_based_priority]
 * @property {string} [type]
 * @property {string[]} [type_based_priority]
 */
/**
 * @typedef StringComparisonOperations
 * @property {string[]} [includes]
 */
/**
 * @typedef TimmingResponse
 * @property {OpeningClosing} [closing]
 * @property {boolean} [open]
 * @property {OpeningClosing} [opening]
 * @property {string} [weekday]
 */
/**
 * @typedef UpdateZoneConfigRequest
 * @property {string} [serviceability_type]
 */
/**
 * @typedef UpdateZoneData
 * @property {string} [assignment_preference]
 * @property {GetZoneDataViewChannels[]} channels
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {ZoneMappingType[]} mapping
 * @property {string} name
 * @property {ZoneProductTypes} product
 * @property {string} region_type
 * @property {string} slug
 * @property {number[]} store_ids
 * @property {string} zone_id
 */
/**
 * @typedef WarningsResponse
 * @property {string} [store_address]
 */
/**
 * @typedef Zone
 * @property {string} assignment_preference
 * @property {boolean} is_active
 * @property {string} name
 * @property {string} slug
 * @property {number[]} store_ids
 * @property {string[]} tags
 * @property {string} type
 * @property {string} zone_id
 */
/**
 * @typedef ZoneConfig
 * @property {string} [serviceability_type]
 */
/**
 * @typedef ZoneDataItem
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} size
 * @property {string} type
 */
/**
 * @typedef ZoneMappingType
 * @property {string} country
 * @property {string[]} [pincode]
 * @property {string[]} [state]
 */
/**
 * @typedef ZoneProductTypes
 * @property {string[]} tags
 * @property {string} type
 */
/**
 * @typedef ZoneResponse
 * @property {number} status_code
 * @property {boolean} success
 * @property {string} zone_id
 */
/**
 * @typedef ZoneSuccessResponse
 * @property {number} status_code
 * @property {boolean} success
 */
/**
 * @typedef ZoneUpdateRequest
 * @property {UpdateZoneData} data
 * @property {string} identifier
 */
declare class ServiceabilityPlatformModel {
}
declare namespace ServiceabilityPlatformModel {
    export { AddressResponse, ApplicationConfig, ApplicationSelfShipConfig, ApplicationSelfShipConfigResponse, ApplicationServiceabilityConfig, ApplicationServiceabilityConfigResponse, ArithmeticOperations, BulkRegionJobSerializer, BulkRegionResponse, BulkRegionResponseItemData, Channel, CommonError, CompanyConfig, CompanyCourierPartnerAccountListResponse, CompanyStoreView_PageItems, CompanyStoreView_Response, ContactNumberResponse, CourierAccount, CourierAccountResponse, CourierPartnerAccountFailureResponse, CourierPartnerList, CourierPartnerRule, CourierPartnerRuleConditions, CourierPartnerRulesListResponse, CourierPartnerSchemeFeatures, CourierPartnerSchemeModel, CreatedByResponse, CreateStoreRuleRequestSchema, CreateZoneData, CustomerRadiusSchema, DocumentsResponse, Dp, EinvoiceResponse, EntityRegionView_Error, EntityRegionView_Items, EntityRegionView_page, EntityRegionView_Request, EntityRegionView_Response, Error, ErrorResponse, EwayBillResponse, FailureResponse, getAppRegionZonesResponse, GetSingleZoneDataViewResponse, GetStoreRulesApiResponse, GetStoresViewResponse, GetZoneByIdSchema, GetZoneDataViewChannels, GetZoneDataViewItems, GetZoneFromApplicationIdViewResponse, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, GstCredentialsResponse, IntComparisonOperations, IntegrationTypeResponse, ItemResponse, ListViewChannels, ListViewItems, ListViewProduct, ListViewResponse, ListViewSummary, LocationRule, LocationRuleValues, LogisticsResponse, ManagerResponse, MobileNo, ModifiedByResponse, OpeningClosing, PackageMaterial, PackageMaterialList, PackageMaterialResponse, PackageMaterialRule, PackageMaterialRuleList, PackageMaterialRuleQuantity, PackageRule, PackageRuleCategory, PackageRuleProduct, PackageRuleProductTag, PackageRuleResponse, Page, PageSchema, PincodeBulkViewResponse, PincodeCodStatusListingPage, PincodeCodStatusListingRequest, PincodeCodStatusListingResponse, PincodeCodStatusListingSummary, PincodeMopBulkData, PincodeMopData, PincodeMOPresponse, PincodeMopUpdateAuditHistoryPaging, PincodeMopUpdateAuditHistoryRequest, PincodeMopUpdateAuditHistoryResponse, PincodeMopUpdateAuditHistoryResponseData, PincodeMopUpdateResponse, ProductReturnConfigResponse, ReAssignStoreRequest, ReAssignStoreResponse, RulePriorityRequest, RulePriorityResponse, SchemeRules, SchemeRulesFeatures, SelfShipResponse, ServiceabilityErrorResponse, ServiceabilityModel, ServiceabilityPageResponse, StorePrioritySchema, StoreRuleConditionSchema, StoreRuleConfigData, StoreRuleDataSchema, StoreRuleResponseSchema, StoreRuleUpdateResponseSchema, StringComparisonOperations, TimmingResponse, UpdateZoneConfigRequest, UpdateZoneData, WarningsResponse, Zone, ZoneConfig, ZoneDataItem, ZoneMappingType, ZoneProductTypes, ZoneResponse, ZoneSuccessResponse, ZoneUpdateRequest };
}
/** @returns {AddressResponse} */
declare function AddressResponse(): AddressResponse;
type AddressResponse = {
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    pincode?: number;
    state?: string;
};
/** @returns {ApplicationConfig} */
declare function ApplicationConfig(): ApplicationConfig;
type ApplicationConfig = {
    rule_ids?: string[];
    sort?: string[];
    zones?: ZoneConfig;
};
/** @returns {ApplicationSelfShipConfig} */
declare function ApplicationSelfShipConfig(): ApplicationSelfShipConfig;
type ApplicationSelfShipConfig = {
    self_ship?: any;
};
/** @returns {ApplicationSelfShipConfigResponse} */
declare function ApplicationSelfShipConfigResponse(): ApplicationSelfShipConfigResponse;
type ApplicationSelfShipConfigResponse = {
    data?: ApplicationSelfShipConfig;
    error?: ServiceabilityErrorResponse;
    success: boolean;
};
/** @returns {ApplicationServiceabilityConfig} */
declare function ApplicationServiceabilityConfig(): ApplicationServiceabilityConfig;
type ApplicationServiceabilityConfig = {
    channel_id: string;
    channel_type: string;
    serviceability_type: string;
};
/** @returns {ApplicationServiceabilityConfigResponse} */
declare function ApplicationServiceabilityConfigResponse(): ApplicationServiceabilityConfigResponse;
type ApplicationServiceabilityConfigResponse = {
    data?: ApplicationServiceabilityConfig;
    error?: ServiceabilityErrorResponse;
    success: boolean;
};
/** @returns {ArithmeticOperations} */
declare function ArithmeticOperations(): ArithmeticOperations;
type ArithmeticOperations = {
    gt?: number;
    gte?: number;
    lt?: number;
    lte?: number;
};
/** @returns {BulkRegionJobSerializer} */
declare function BulkRegionJobSerializer(): BulkRegionJobSerializer;
type BulkRegionJobSerializer = {
    action: string;
    country: string;
    file_path?: string;
    region: string;
};
/** @returns {BulkRegionResponse} */
declare function BulkRegionResponse(): BulkRegionResponse;
type BulkRegionResponse = {
    items: BulkRegionResponseItemData[];
    page: Page;
};
/** @returns {BulkRegionResponseItemData} */
declare function BulkRegionResponseItemData(): BulkRegionResponseItemData;
type BulkRegionResponseItemData = {
    action: string;
    batch_id: string;
    country: string;
    error_file_path?: string;
    failed?: number;
    failed_records?: any[];
    file_path: string;
    region: string;
    status: string;
    success?: number;
    total?: number;
};
/** @returns {Channel} */
declare function Channel(): Channel;
type Channel = {
    id?: string;
    type?: string;
};
/** @returns {CommonError} */
declare function CommonError(): CommonError;
type CommonError = {
    error?: any;
    status_code?: string;
    success?: string;
};
/** @returns {CompanyConfig} */
declare function CompanyConfig(): CompanyConfig;
type CompanyConfig = {
    logistics_as_actual?: boolean;
    rule_ids: string[];
    sort: string[];
};
/** @returns {CompanyCourierPartnerAccountListResponse} */
declare function CompanyCourierPartnerAccountListResponse(): CompanyCourierPartnerAccountListResponse;
type CompanyCourierPartnerAccountListResponse = {
    items: CourierAccountResponse[];
    page: Page;
};
/** @returns {CompanyStoreView_PageItems} */
declare function CompanyStoreView_PageItems(): CompanyStoreView_PageItems;
type CompanyStoreView_PageItems = {
    current: number;
    has_next: boolean;
    item_total: number;
    size: number;
    type: string;
};
/** @returns {CompanyStoreView_Response} */
declare function CompanyStoreView_Response(): CompanyStoreView_Response;
type CompanyStoreView_Response = {
    items?: any[];
    page: CompanyStoreView_PageItems[];
};
/** @returns {ContactNumberResponse} */
declare function ContactNumberResponse(): ContactNumberResponse;
type ContactNumberResponse = {
    country_code?: number;
    number?: string;
};
/** @returns {CourierAccount} */
declare function CourierAccount(): CourierAccount;
type CourierAccount = {
    account_id: string;
    extension_id: string;
    is_own_account: boolean;
    is_self_ship: boolean;
    scheme_id: string;
    stage: string;
};
/** @returns {CourierAccountResponse} */
declare function CourierAccountResponse(): CourierAccountResponse;
type CourierAccountResponse = {
    account_id: string;
    is_own_account: boolean;
    is_self_ship: boolean;
    scheme_id: string;
    scheme_rules: CourierPartnerSchemeModel;
    stage: string;
};
/** @returns {CourierPartnerAccountFailureResponse} */
declare function CourierPartnerAccountFailureResponse(): CourierPartnerAccountFailureResponse;
type CourierPartnerAccountFailureResponse = {
    error: ErrorResponse[];
    success: boolean;
};
/** @returns {CourierPartnerList} */
declare function CourierPartnerList(): CourierPartnerList;
type CourierPartnerList = {
    account_id: string;
    extension_id: string;
    is_self_ship: boolean;
    name: string;
};
/** @returns {CourierPartnerRule} */
declare function CourierPartnerRule(): CourierPartnerRule;
type CourierPartnerRule = {
    conditions: CourierPartnerRuleConditions;
    cp_list?: CourierPartnerList[];
    is_active: boolean;
    name: string;
    sort: string[];
};
/** @returns {CourierPartnerRuleConditions} */
declare function CourierPartnerRuleConditions(): CourierPartnerRuleConditions;
type CourierPartnerRuleConditions = {
    brand_ids?: IntComparisonOperations;
    category_ids?: IntComparisonOperations;
    department_ids?: IntComparisonOperations;
    forward?: LocationRule;
    order_place_date?: ArithmeticOperations;
    payment_mode?: StringComparisonOperations;
    product_ids?: IntComparisonOperations;
    product_tags?: StringComparisonOperations;
    reverse?: LocationRule;
    shipment_cost?: ArithmeticOperations;
    shipment_volumetric_weight?: ArithmeticOperations;
    shipment_weight?: ArithmeticOperations;
    store_ids?: IntComparisonOperations;
    store_tags?: StringComparisonOperations;
    store_type?: StringComparisonOperations;
    zone_ids?: StringComparisonOperations;
};
/** @returns {CourierPartnerRulesListResponse} */
declare function CourierPartnerRulesListResponse(): CourierPartnerRulesListResponse;
type CourierPartnerRulesListResponse = {
    items: CourierPartnerRule[];
    page: Page;
};
/** @returns {CourierPartnerSchemeFeatures} */
declare function CourierPartnerSchemeFeatures(): CourierPartnerSchemeFeatures;
type CourierPartnerSchemeFeatures = {
    cold_storage_goods?: boolean;
    dangerous_goods?: boolean;
    doorstep_exchange?: boolean;
    doorstep_qc?: boolean;
    doorstep_return?: boolean;
    ewaybill?: boolean;
    fragile_goods?: boolean;
    mps?: boolean;
    multi_pick_multi_drop?: boolean;
    multi_pick_single_drop?: boolean;
    ndr?: boolean;
    ndr_attempts?: number;
    openbox_delivery?: boolean;
    product_installation?: boolean;
    qr?: boolean;
    restricted_goods?: boolean;
    single_pick_multi_drop?: boolean;
    status_updates?: string;
};
/** @returns {CourierPartnerSchemeModel} */
declare function CourierPartnerSchemeModel(): CourierPartnerSchemeModel;
type CourierPartnerSchemeModel = {
    delivery_type: string;
    extension_id: string;
    feature: CourierPartnerSchemeFeatures;
    payment_mode: string[];
    region: string;
    scheme_id: string;
    stage: string;
    transport_type: string;
    weight: ArithmeticOperations;
};
/** @returns {CreatedByResponse} */
declare function CreatedByResponse(): CreatedByResponse;
type CreatedByResponse = {
    user_id?: string;
    username?: string;
};
/** @returns {CreateStoreRuleRequestSchema} */
declare function CreateStoreRuleRequestSchema(): CreateStoreRuleRequestSchema;
type CreateStoreRuleRequestSchema = {
    conditions?: StoreRuleConditionSchema;
    is_active?: boolean;
    name?: string;
    sort?: string[];
    store_priority?: StorePrioritySchema[];
    tag_based_priority?: string[];
    type_based_priority?: string[];
};
/** @returns {CreateZoneData} */
declare function CreateZoneData(): CreateZoneData;
type CreateZoneData = {
    assignment_preference?: string;
    channels: GetZoneDataViewChannels[];
    company_id: number;
    is_active: boolean;
    mapping: ZoneMappingType[];
    name: string;
    region_type: string;
    slug: string;
    store_ids: number[];
};
/** @returns {CustomerRadiusSchema} */
declare function CustomerRadiusSchema(): CustomerRadiusSchema;
type CustomerRadiusSchema = {
    gt?: number;
    gte?: number;
    lt?: number;
    lte?: number;
    unit: string;
};
/** @returns {DocumentsResponse} */
declare function DocumentsResponse(): DocumentsResponse;
type DocumentsResponse = {
    legal_name?: string;
    type?: string;
    value?: string;
    verified?: boolean;
};
/** @returns {Dp} */
declare function Dp(): Dp;
type Dp = {
    area_code?: number;
    assign_dp_from_sb?: boolean;
    external_account_id?: string;
    fm_priority?: number;
    internal_account_id?: string;
    lm_priority?: number;
    operations?: string[];
    payment_mode?: string;
    rvp_priority?: number;
    transport_mode?: string;
};
/** @returns {EinvoiceResponse} */
declare function EinvoiceResponse(): EinvoiceResponse;
type EinvoiceResponse = {
    enabled?: boolean;
};
/** @returns {EntityRegionView_Error} */
declare function EntityRegionView_Error(): EntityRegionView_Error;
type EntityRegionView_Error = {
    message?: string;
    type?: string;
    value?: string;
};
/** @returns {EntityRegionView_Items} */
declare function EntityRegionView_Items(): EntityRegionView_Items;
type EntityRegionView_Items = {
    name: string;
    sub_type: string;
    uid: string;
};
/** @returns {EntityRegionView_page} */
declare function EntityRegionView_page(): EntityRegionView_page;
type EntityRegionView_page = {
    current: number;
    has_next: boolean;
    item_total: number;
    size: number;
    type: string;
};
/** @returns {EntityRegionView_Request} */
declare function EntityRegionView_Request(): EntityRegionView_Request;
type EntityRegionView_Request = {
    parent_id?: string[];
    sub_type: string[];
};
/** @returns {EntityRegionView_Response} */
declare function EntityRegionView_Response(): EntityRegionView_Response;
type EntityRegionView_Response = {
    data: EntityRegionView_Items[];
    error: EntityRegionView_Error;
    page: EntityRegionView_page;
    success: boolean;
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    message?: string;
    type?: string;
    value?: string;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    message: string;
    type: string;
    value: string;
};
/** @returns {EwayBillResponse} */
declare function EwayBillResponse(): EwayBillResponse;
type EwayBillResponse = {
    enabled?: boolean;
};
/** @returns {FailureResponse} */
declare function FailureResponse(): FailureResponse;
type FailureResponse = {
    error: ErrorResponse[];
    success: boolean;
};
/** @returns {getAppRegionZonesResponse} */
declare function getAppRegionZonesResponse(): getAppRegionZonesResponse;
type getAppRegionZonesResponse = {
    items: ListViewItems[];
    page: PageSchema[];
};
/** @returns {GetSingleZoneDataViewResponse} */
declare function GetSingleZoneDataViewResponse(): GetSingleZoneDataViewResponse;
type GetSingleZoneDataViewResponse = {
    data: GetZoneDataViewItems;
};
/** @returns {GetStoreRulesApiResponse} */
declare function GetStoreRulesApiResponse(): GetStoreRulesApiResponse;
type GetStoreRulesApiResponse = {
    items?: StoreRuleDataSchema[];
    page?: Page;
};
/** @returns {GetStoresViewResponse} */
declare function GetStoresViewResponse(): GetStoresViewResponse;
type GetStoresViewResponse = {
    items?: ItemResponse[];
    page: ServiceabilityPageResponse;
};
/** @returns {GetZoneByIdSchema} */
declare function GetZoneByIdSchema(): GetZoneByIdSchema;
type GetZoneByIdSchema = {
    assignment_preference?: string;
    channels: GetZoneDataViewChannels[];
    company_id?: number;
    is_active: boolean;
    mapping: ZoneMappingType[];
    name: string;
    product: ZoneProductTypes;
    region_type: string;
    slug: string;
    store_ids: number[];
    stores_count: number;
    zone_id: string;
};
/** @returns {GetZoneDataViewChannels} */
declare function GetZoneDataViewChannels(): GetZoneDataViewChannels;
type GetZoneDataViewChannels = {
    channel_id: string;
    channel_type: string;
};
/** @returns {GetZoneDataViewItems} */
declare function GetZoneDataViewItems(): GetZoneDataViewItems;
type GetZoneDataViewItems = {
    assignment_preference?: string;
    channels: GetZoneDataViewChannels[];
    company_id?: number;
    is_active: boolean;
    mapping: ZoneMappingType[];
    name: string;
    product: ZoneProductTypes;
    region_type?: string;
    slug: string;
    store_ids: number[];
    stores_count: number;
    zone_id: string;
};
/** @returns {GetZoneFromApplicationIdViewResponse} */
declare function GetZoneFromApplicationIdViewResponse(): GetZoneFromApplicationIdViewResponse;
type GetZoneFromApplicationIdViewResponse = {
    items: ListViewItems[];
    page: ZoneDataItem[];
};
/** @returns {GetZoneFromPincodeViewRequest} */
declare function GetZoneFromPincodeViewRequest(): GetZoneFromPincodeViewRequest;
type GetZoneFromPincodeViewRequest = {
    country: string;
    pincode: string;
};
/** @returns {GetZoneFromPincodeViewResponse} */
declare function GetZoneFromPincodeViewResponse(): GetZoneFromPincodeViewResponse;
type GetZoneFromPincodeViewResponse = {
    serviceability_type: string;
    zones: Zone[];
};
/** @returns {GstCredentialsResponse} */
declare function GstCredentialsResponse(): GstCredentialsResponse;
type GstCredentialsResponse = {
    e_invoice?: EinvoiceResponse;
    e_waybill?: EwayBillResponse;
};
/** @returns {IntComparisonOperations} */
declare function IntComparisonOperations(): IntComparisonOperations;
type IntComparisonOperations = {
    includes?: number[];
};
/** @returns {IntegrationTypeResponse} */
declare function IntegrationTypeResponse(): IntegrationTypeResponse;
type IntegrationTypeResponse = {
    inventory?: string;
    order?: string;
};
/** @returns {ItemResponse} */
declare function ItemResponse(): ItemResponse;
type ItemResponse = {
    _cls?: string;
    _custom_json?: any;
    address?: AddressResponse;
    code?: string;
    company?: number;
    company_id?: number;
    contact_numbers?: ContactNumberResponse[];
    created_by?: CreatedByResponse;
    created_on?: string;
    display_name?: string;
    documents?: DocumentsResponse[];
    gst_credentials?: GstCredentialsResponse;
    integration_type?: IntegrationTypeResponse;
    logistics?: LogisticsResponse;
    manager?: ManagerResponse;
    modified_by?: ModifiedByResponse;
    modified_on?: string;
    name?: string;
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigResponse;
    stage?: string;
    store_type?: string;
    sub_type?: string;
    timing?: TimmingResponse[];
    uid?: number;
    verified_by?: ModifiedByResponse;
    verified_on?: string;
    warnings?: WarningsResponse;
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
    channels: ListViewChannels;
    company_id: number;
    is_active: boolean;
    name: string;
    product: ListViewProduct;
    regions_count: number;
    slug: string;
    stores_count: number;
    zone_id: string;
};
/** @returns {ListViewProduct} */
declare function ListViewProduct(): ListViewProduct;
type ListViewProduct = {
    count: number;
    type: string;
};
/** @returns {ListViewResponse} */
declare function ListViewResponse(): ListViewResponse;
type ListViewResponse = {
    items: ListViewItems[];
    page: ZoneDataItem[];
};
/** @returns {ListViewSummary} */
declare function ListViewSummary(): ListViewSummary;
type ListViewSummary = {
    total_active_zones: number;
    total_pincodes_served: number;
    total_zones: number;
};
/** @returns {LocationRule} */
declare function LocationRule(): LocationRule;
type LocationRule = {
    includes?: LocationRuleValues[];
    type?: string;
};
/** @returns {LocationRuleValues} */
declare function LocationRuleValues(): LocationRuleValues;
type LocationRuleValues = {
    display_name?: string;
    id: string;
    name?: string;
    parent_id?: string;
    parent_ids?: string[];
    sub_type?: string;
};
/** @returns {LogisticsResponse} */
declare function LogisticsResponse(): LogisticsResponse;
type LogisticsResponse = {
    dp?: Dp;
    override?: boolean;
};
/** @returns {ManagerResponse} */
declare function ManagerResponse(): ManagerResponse;
type ManagerResponse = {
    email?: string;
    mobile_no?: MobileNo;
    name?: string;
};
/** @returns {MobileNo} */
declare function MobileNo(): MobileNo;
type MobileNo = {
    country_code?: number;
    number?: string;
};
/** @returns {ModifiedByResponse} */
declare function ModifiedByResponse(): ModifiedByResponse;
type ModifiedByResponse = {
    user_id?: string;
    username?: string;
};
/** @returns {OpeningClosing} */
declare function OpeningClosing(): OpeningClosing;
type OpeningClosing = {
    hour?: number;
    minute?: number;
};
/** @returns {PackageMaterial} */
declare function PackageMaterial(): PackageMaterial;
type PackageMaterial = {
    auto_calculate?: boolean;
    channels: Channel[];
    error_rate: number;
    height: number;
    length: number;
    max_weight?: number;
    media?: string[];
    name: string;
    package_type: string;
    package_vol_weight?: number;
    rules?: PackageMaterialRule[];
    size: string;
    status: string;
    store_ids: number[];
    track_inventory?: boolean;
    weight: number;
    width: number;
};
/** @returns {PackageMaterialList} */
declare function PackageMaterialList(): PackageMaterialList;
type PackageMaterialList = {
    items?: PackageMaterialResponse;
    page?: Page;
};
/** @returns {PackageMaterialResponse} */
declare function PackageMaterialResponse(): PackageMaterialResponse;
type PackageMaterialResponse = {
    auto_calculate?: boolean;
    channels: Channel[];
    error_rate: number;
    height: number;
    id?: string;
    item_id?: number;
    length: number;
    max_weight?: number;
    media?: string[];
    name: string;
    package_type: string;
    package_vol_weight?: number;
    rules?: PackageMaterialRule[];
    size: string;
    status: string;
    store_ids: number[];
    track_inventory?: boolean;
    weight: number;
    width: number;
};
/** @returns {PackageMaterialRule} */
declare function PackageMaterialRule(): PackageMaterialRule;
type PackageMaterialRule = {
    quantity?: PackageMaterialRuleQuantity;
    rule_id?: string;
    weight?: number;
};
/** @returns {PackageMaterialRuleList} */
declare function PackageMaterialRuleList(): PackageMaterialRuleList;
type PackageMaterialRuleList = {
    items?: PackageRuleResponse;
    page?: Page;
};
/** @returns {PackageMaterialRuleQuantity} */
declare function PackageMaterialRuleQuantity(): PackageMaterialRuleQuantity;
type PackageMaterialRuleQuantity = {
    max?: number;
    min?: number;
};
/** @returns {PackageRule} */
declare function PackageRule(): PackageRule;
type PackageRule = {
    category_id?: PackageRuleCategory;
    company_id: number;
    is_active?: boolean;
    name: string;
    product_id?: PackageRuleProduct;
    product_tag?: PackageRuleProductTag;
    type: string;
};
/** @returns {PackageRuleCategory} */
declare function PackageRuleCategory(): PackageRuleCategory;
type PackageRuleCategory = {
    includes?: number[];
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
/** @returns {PackageRuleResponse} */
declare function PackageRuleResponse(): PackageRuleResponse;
type PackageRuleResponse = {
    category_id?: PackageRuleCategory;
    company_id: number;
    id?: string;
    is_active?: boolean;
    name: string;
    product_id?: PackageRuleProduct;
    product_tag?: PackageRuleProductTag;
    type: string;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {PageSchema} */
declare function PageSchema(): PageSchema;
type PageSchema = {
    current: number;
    has_next: boolean;
    item_total: number;
    size: number;
    type: string;
};
/** @returns {PincodeBulkViewResponse} */
declare function PincodeBulkViewResponse(): PincodeBulkViewResponse;
type PincodeBulkViewResponse = {
    batch_id: string;
    s3_url: string;
};
/** @returns {PincodeCodStatusListingPage} */
declare function PincodeCodStatusListingPage(): PincodeCodStatusListingPage;
type PincodeCodStatusListingPage = {
    current: number;
    has_next: boolean;
    item_total: number;
    size: number;
    type: string;
};
/** @returns {PincodeCodStatusListingRequest} */
declare function PincodeCodStatusListingRequest(): PincodeCodStatusListingRequest;
type PincodeCodStatusListingRequest = {
    country?: string;
    current?: number;
    is_active?: boolean;
    page_size?: number;
    pincode?: number;
};
/** @returns {PincodeCodStatusListingResponse} */
declare function PincodeCodStatusListingResponse(): PincodeCodStatusListingResponse;
type PincodeCodStatusListingResponse = {
    country: string;
    data: PincodeCodStatusListingResponse[];
    errors?: Error[];
    page: PincodeCodStatusListingPage;
    success: boolean;
    summary: PincodeCodStatusListingSummary;
};
/** @returns {PincodeCodStatusListingSummary} */
declare function PincodeCodStatusListingSummary(): PincodeCodStatusListingSummary;
type PincodeCodStatusListingSummary = {
    total_active_pincodes: number;
    total_inactive_pincodes: number;
};
/** @returns {PincodeMopBulkData} */
declare function PincodeMopBulkData(): PincodeMopBulkData;
type PincodeMopBulkData = {
    batch_id: string;
    s3_url: string;
};
/** @returns {PincodeMopData} */
declare function PincodeMopData(): PincodeMopData;
type PincodeMopData = {
    action: string;
    country: string;
    pincodes: number[];
};
/** @returns {PincodeMOPresponse} */
declare function PincodeMOPresponse(): PincodeMOPresponse;
type PincodeMOPresponse = {
    action: string;
    batch_id: string;
    country: string;
    pincodes?: number[];
    status_code: number;
    success: boolean;
    updated_pincodes?: PincodeMopUpdateResponse[];
};
/** @returns {PincodeMopUpdateAuditHistoryPaging} */
declare function PincodeMopUpdateAuditHistoryPaging(): PincodeMopUpdateAuditHistoryPaging;
type PincodeMopUpdateAuditHistoryPaging = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
/** @returns {PincodeMopUpdateAuditHistoryRequest} */
declare function PincodeMopUpdateAuditHistoryRequest(): PincodeMopUpdateAuditHistoryRequest;
type PincodeMopUpdateAuditHistoryRequest = {
    entity_type: string;
    file_name?: string;
};
/** @returns {PincodeMopUpdateAuditHistoryResponse} */
declare function PincodeMopUpdateAuditHistoryResponse(): PincodeMopUpdateAuditHistoryResponse;
type PincodeMopUpdateAuditHistoryResponse = {
    batch_id?: string;
    entity_type?: string;
    error_file_s3_url?: string;
    file_name?: string;
    s3_url?: string;
    success?: boolean;
    updated_at?: string;
    updated_by?: string;
};
/** @returns {PincodeMopUpdateAuditHistoryResponseData} */
declare function PincodeMopUpdateAuditHistoryResponseData(): PincodeMopUpdateAuditHistoryResponseData;
type PincodeMopUpdateAuditHistoryResponseData = {
    data: PincodeMopUpdateAuditHistoryResponse[];
    entity_type?: string;
    page: PincodeMopUpdateAuditHistoryPaging;
};
/** @returns {PincodeMopUpdateResponse} */
declare function PincodeMopUpdateResponse(): PincodeMopUpdateResponse;
type PincodeMopUpdateResponse = {
    channel_id: string;
    country: string;
    is_active: boolean;
    pincode: number;
};
/** @returns {ProductReturnConfigResponse} */
declare function ProductReturnConfigResponse(): ProductReturnConfigResponse;
type ProductReturnConfigResponse = {
    on_same_store?: boolean;
};
/** @returns {ReAssignStoreRequest} */
declare function ReAssignStoreRequest(): ReAssignStoreRequest;
type ReAssignStoreRequest = {
    articles: any[];
    configuration: any;
    identifier: string;
    ignored_locations: string[];
    to_pincode: string;
};
/** @returns {ReAssignStoreResponse} */
declare function ReAssignStoreResponse(): ReAssignStoreResponse;
type ReAssignStoreResponse = {
    articles?: any[];
    error: any;
    success: boolean;
    to_pincode: string;
};
/** @returns {RulePriorityRequest} */
declare function RulePriorityRequest(): RulePriorityRequest;
type RulePriorityRequest = {
    priority: number;
    rule_id: string;
};
/** @returns {RulePriorityResponse} */
declare function RulePriorityResponse(): RulePriorityResponse;
type RulePriorityResponse = {
    success?: boolean;
};
/** @returns {SchemeRules} */
declare function SchemeRules(): SchemeRules;
type SchemeRules = {
    feature?: SchemeRulesFeatures;
    payment_mode?: string[];
    region?: string;
    transport_type?: string[];
    weight?: ArithmeticOperations;
};
/** @returns {SchemeRulesFeatures} */
declare function SchemeRulesFeatures(): SchemeRulesFeatures;
type SchemeRulesFeatures = {
    battery_operated?: boolean;
    e_waybill?: boolean;
    flammable?: boolean;
    hazmat?: boolean;
    multi_part_shipments?: boolean;
    quality_check?: boolean;
    quick_response_code?: boolean;
};
/** @returns {SelfShipResponse} */
declare function SelfShipResponse(): SelfShipResponse;
type SelfShipResponse = {
    is_active: boolean;
    tat: number;
};
/** @returns {ServiceabilityErrorResponse} */
declare function ServiceabilityErrorResponse(): ServiceabilityErrorResponse;
type ServiceabilityErrorResponse = {
    message: string;
    type: string;
    value: string;
};
/** @returns {ServiceabilityModel} */
declare function ServiceabilityModel(): ServiceabilityModel;
type ServiceabilityModel = {
    is_first_mile: boolean;
    is_installation: boolean;
    is_last_mile: boolean;
    is_qc: boolean;
    is_return: boolean;
    lm_cod_limit: number;
    pickup_cutoff: string;
    route_code: string;
};
/** @returns {ServiceabilityPageResponse} */
declare function ServiceabilityPageResponse(): ServiceabilityPageResponse;
type ServiceabilityPageResponse = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
/** @returns {StorePrioritySchema} */
declare function StorePrioritySchema(): StorePrioritySchema;
type StorePrioritySchema = {
    id?: string;
    name?: string;
};
/** @returns {StoreRuleConditionSchema} */
declare function StoreRuleConditionSchema(): StoreRuleConditionSchema;
type StoreRuleConditionSchema = {
    brand_ids?: IntComparisonOperations;
    category_ids?: IntComparisonOperations;
    customer_radius?: CustomerRadiusSchema;
    department_ids?: IntComparisonOperations;
    order_place_date?: ArithmeticOperations;
    product_ids?: IntComparisonOperations;
    product_tags?: StringComparisonOperations;
    store_tags?: StringComparisonOperations;
    store_type?: StringComparisonOperations;
    to_location?: LocationRule;
    zone_ids?: StringComparisonOperations;
};
/** @returns {StoreRuleConfigData} */
declare function StoreRuleConfigData(): StoreRuleConfigData;
type StoreRuleConfigData = {
    rule_ids?: string[];
    sort?: string[];
    store_priority?: StorePrioritySchema[];
    tag_based_priority?: string[];
    type_based_priority?: string[];
};
/** @returns {StoreRuleDataSchema} */
declare function StoreRuleDataSchema(): StoreRuleDataSchema;
type StoreRuleDataSchema = {
    application_id?: string;
    company_id?: number;
    conditions?: StoreRuleConditionSchema;
    id?: string;
    is_active?: boolean;
    name?: string;
    sort?: string[];
    store_priority?: StorePrioritySchema[];
    tag_based_priority?: string[];
    type_based_priority?: string[];
};
/** @returns {StoreRuleResponseSchema} */
declare function StoreRuleResponseSchema(): StoreRuleResponseSchema;
type StoreRuleResponseSchema = {
    conditions?: StoreRuleConditionSchema;
    id?: string;
    is_active?: boolean;
    name?: string;
    sort?: string[];
    store_priority?: StorePrioritySchema[];
    tag_based_priority?: string[];
    type?: string;
    type_based_priority?: string[];
};
/** @returns {StoreRuleUpdateResponseSchema} */
declare function StoreRuleUpdateResponseSchema(): StoreRuleUpdateResponseSchema;
type StoreRuleUpdateResponseSchema = {
    application_id?: string;
    company_id?: number;
    conditions?: StoreRuleConditionSchema;
    id?: string;
    is_active?: boolean;
    name?: string;
    sort?: string[];
    store_priority?: StorePrioritySchema[];
    tag_based_priority?: string[];
    type?: string;
    type_based_priority?: string[];
};
/** @returns {StringComparisonOperations} */
declare function StringComparisonOperations(): StringComparisonOperations;
type StringComparisonOperations = {
    includes?: string[];
};
/** @returns {TimmingResponse} */
declare function TimmingResponse(): TimmingResponse;
type TimmingResponse = {
    closing?: OpeningClosing;
    open?: boolean;
    opening?: OpeningClosing;
    weekday?: string;
};
/** @returns {UpdateZoneConfigRequest} */
declare function UpdateZoneConfigRequest(): UpdateZoneConfigRequest;
type UpdateZoneConfigRequest = {
    serviceability_type?: string;
};
/** @returns {UpdateZoneData} */
declare function UpdateZoneData(): UpdateZoneData;
type UpdateZoneData = {
    assignment_preference?: string;
    channels: GetZoneDataViewChannels[];
    company_id: number;
    is_active: boolean;
    mapping: ZoneMappingType[];
    name: string;
    product: ZoneProductTypes;
    region_type: string;
    slug: string;
    store_ids: number[];
    zone_id: string;
};
/** @returns {WarningsResponse} */
declare function WarningsResponse(): WarningsResponse;
type WarningsResponse = {
    store_address?: string;
};
/** @returns {Zone} */
declare function Zone(): Zone;
type Zone = {
    assignment_preference: string;
    is_active: boolean;
    name: string;
    slug: string;
    store_ids: number[];
    tags: string[];
    type: string;
    zone_id: string;
};
/** @returns {ZoneConfig} */
declare function ZoneConfig(): ZoneConfig;
type ZoneConfig = {
    serviceability_type?: string;
};
/** @returns {ZoneDataItem} */
declare function ZoneDataItem(): ZoneDataItem;
type ZoneDataItem = {
    current: number;
    has_next: boolean;
    item_total: number;
    size: number;
    type: string;
};
/** @returns {ZoneMappingType} */
declare function ZoneMappingType(): ZoneMappingType;
type ZoneMappingType = {
    country: string;
    pincode?: string[];
    state?: string[];
};
/** @returns {ZoneProductTypes} */
declare function ZoneProductTypes(): ZoneProductTypes;
type ZoneProductTypes = {
    tags: string[];
    type: string;
};
/** @returns {ZoneResponse} */
declare function ZoneResponse(): ZoneResponse;
type ZoneResponse = {
    status_code: number;
    success: boolean;
    zone_id: string;
};
/** @returns {ZoneSuccessResponse} */
declare function ZoneSuccessResponse(): ZoneSuccessResponse;
type ZoneSuccessResponse = {
    status_code: number;
    success: boolean;
};
/** @returns {ZoneUpdateRequest} */
declare function ZoneUpdateRequest(): ZoneUpdateRequest;
type ZoneUpdateRequest = {
    data: UpdateZoneData;
    identifier: string;
};
