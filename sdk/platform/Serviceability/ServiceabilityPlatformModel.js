const Joi = require("joi");

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

class ServiceabilityPlatformModel {
  /** @returns {AddressResponse} */
  static AddressResponse() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationConfig} */
  static ApplicationConfig() {
    return Joi.object({
      rule_ids: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")),
      zones: ServiceabilityPlatformModel.ZoneConfig(),
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
      data: ServiceabilityPlatformModel.ApplicationSelfShipConfig(),
      error: ServiceabilityPlatformModel.ServiceabilityErrorResponse(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ApplicationServiceabilityConfig} */
  static ApplicationServiceabilityConfig() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      channel_type: Joi.string().allow("").required(),
      serviceability_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ApplicationServiceabilityConfigResponse} */
  static ApplicationServiceabilityConfigResponse() {
    return Joi.object({
      data: ServiceabilityPlatformModel.ApplicationServiceabilityConfig(),
      error: ServiceabilityPlatformModel.ServiceabilityErrorResponse(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ArithmeticOperations} */
  static ArithmeticOperations() {
    return Joi.object({
      gt: Joi.number(),
      gte: Joi.number(),
      lt: Joi.number(),
      lte: Joi.number(),
    });
  }

  /** @returns {BulkRegionJobSerializer} */
  static BulkRegionJobSerializer() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      file_path: Joi.string().allow(""),
      region: Joi.string().allow("").required(),
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

  /** @returns {BulkRegionResponseItemData} */
  static BulkRegionResponseItemData() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      batch_id: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      error_file_path: Joi.string().allow(""),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.any()),
      file_path: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      success: Joi.number(),
      total: Joi.number(),
    });
  }

  /** @returns {Channel} */
  static Channel() {
    return Joi.object({
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {CommonError} */
  static CommonError() {
    return Joi.object({
      error: Joi.any(),
      status_code: Joi.string().allow(""),
      success: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyConfig} */
  static CompanyConfig() {
    return Joi.object({
      logistics_as_actual: Joi.boolean(),
      rule_ids: Joi.array().items(Joi.string().allow("")).required(),
      sort: Joi.array().items(Joi.string().allow("")).required(),
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

  /** @returns {CompanyStoreView_PageItems} */
  static CompanyStoreView_PageItems() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {CompanyStoreView_Response} */
  static CompanyStoreView_Response() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),
      page: Joi.array()
        .items(ServiceabilityPlatformModel.CompanyStoreView_PageItems())
        .required(),
    });
  }

  /** @returns {ContactNumberResponse} */
  static ContactNumberResponse() {
    return Joi.object({
      country_code: Joi.number(),
      number: Joi.string().allow(""),
    });
  }

  /** @returns {CourierAccount} */
  static CourierAccount() {
    return Joi.object({
      account_id: Joi.string().allow("").required(),
      extension_id: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
      is_self_ship: Joi.boolean().required(),
      scheme_id: Joi.string().allow("").required(),
      stage: Joi.string().allow("").required(),
    });
  }

  /** @returns {CourierAccountResponse} */
  static CourierAccountResponse() {
    return Joi.object({
      account_id: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
      is_self_ship: Joi.boolean().required(),
      scheme_id: Joi.string().allow("").required(),
      scheme_rules: ServiceabilityPlatformModel.CourierPartnerSchemeModel().required(),
      stage: Joi.string().allow("").required(),
    });
  }

  /** @returns {CourierPartnerAccountFailureResponse} */
  static CourierPartnerAccountFailureResponse() {
    return Joi.object({
      error: Joi.array()
        .items(ServiceabilityPlatformModel.ErrorResponse())
        .required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CourierPartnerList} */
  static CourierPartnerList() {
    return Joi.object({
      account_id: Joi.string().allow("").required(),
      extension_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {CourierPartnerRule} */
  static CourierPartnerRule() {
    return Joi.object({
      conditions: ServiceabilityPlatformModel.CourierPartnerRuleConditions().required(),
      cp_list: Joi.array().items(
        ServiceabilityPlatformModel.CourierPartnerList()
      ),
      is_active: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
      sort: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {CourierPartnerRuleConditions} */
  static CourierPartnerRuleConditions() {
    return Joi.object({
      brand_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      category_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      department_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      forward: ServiceabilityPlatformModel.LocationRule(),
      order_place_date: ServiceabilityPlatformModel.ArithmeticOperations(),
      payment_mode: ServiceabilityPlatformModel.StringComparisonOperations(),
      product_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      product_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      reverse: ServiceabilityPlatformModel.LocationRule(),
      shipment_cost: ServiceabilityPlatformModel.ArithmeticOperations(),
      shipment_volumetric_weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      shipment_weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      store_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      store_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      store_type: ServiceabilityPlatformModel.StringComparisonOperations(),
      zone_ids: ServiceabilityPlatformModel.StringComparisonOperations(),
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

  /** @returns {CourierPartnerSchemeFeatures} */
  static CourierPartnerSchemeFeatures() {
    return Joi.object({
      cold_storage_goods: Joi.boolean(),
      dangerous_goods: Joi.boolean(),
      doorstep_exchange: Joi.boolean(),
      doorstep_qc: Joi.boolean(),
      doorstep_return: Joi.boolean(),
      ewaybill: Joi.boolean(),
      fragile_goods: Joi.boolean(),
      mps: Joi.boolean(),
      multi_pick_multi_drop: Joi.boolean(),
      multi_pick_single_drop: Joi.boolean(),
      ndr: Joi.boolean(),
      ndr_attempts: Joi.number(),
      openbox_delivery: Joi.boolean(),
      product_installation: Joi.boolean(),
      qr: Joi.boolean(),
      restricted_goods: Joi.boolean(),
      single_pick_multi_drop: Joi.boolean(),
      status_updates: Joi.string().allow(""),
    });
  }

  /** @returns {CourierPartnerSchemeModel} */
  static CourierPartnerSchemeModel() {
    return Joi.object({
      delivery_type: Joi.string().allow("").required(),
      extension_id: Joi.string().allow("").required(),
      feature: ServiceabilityPlatformModel.CourierPartnerSchemeFeatures().required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      region: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      stage: Joi.string().allow("").required(),
      transport_type: Joi.string().allow("").required(),
      weight: ServiceabilityPlatformModel.ArithmeticOperations().required(),
    });
  }

  /** @returns {CreatedByResponse} */
  static CreatedByResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {CreateStoreRuleRequestSchema} */
  static CreateStoreRuleRequestSchema() {
    return Joi.object({
      conditions: ServiceabilityPlatformModel.StoreRuleConditionSchema(),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      sort: Joi.array().items(Joi.string().allow("")),
      store_priority: Joi.array().items(
        ServiceabilityPlatformModel.StorePrioritySchema()
      ),
      tag_based_priority: Joi.array().items(Joi.string().allow("")),
      type_based_priority: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CreateZoneData} */
  static CreateZoneData() {
    return Joi.object({
      assignment_preference: Joi.string().allow(""),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.GetZoneDataViewChannels())
        .required(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      mapping: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneMappingType())
        .required(),
      name: Joi.string().allow("").required(),
      region_type: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {CustomerRadiusSchema} */
  static CustomerRadiusSchema() {
    return Joi.object({
      gt: Joi.number(),
      gte: Joi.number(),
      lt: Joi.number(),
      lte: Joi.number(),
      unit: Joi.string().allow("").required(),
    });
  }

  /** @returns {DocumentsResponse} */
  static DocumentsResponse() {
    return Joi.object({
      legal_name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
      verified: Joi.boolean(),
    });
  }

  /** @returns {Dp} */
  static Dp() {
    return Joi.object({
      area_code: Joi.number().allow(null),
      assign_dp_from_sb: Joi.boolean(),
      external_account_id: Joi.string().allow("").allow(null),
      fm_priority: Joi.number(),
      internal_account_id: Joi.string().allow(""),
      lm_priority: Joi.number(),
      operations: Joi.array().items(Joi.string().allow("")),
      payment_mode: Joi.string().allow(""),
      rvp_priority: Joi.number(),
      transport_mode: Joi.string().allow(""),
    });
  }

  /** @returns {EinvoiceResponse} */
  static EinvoiceResponse() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {EntityRegionView_Error} */
  static EntityRegionView_Error() {
    return Joi.object({
      message: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {EntityRegionView_Items} */
  static EntityRegionView_Items() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      sub_type: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
    });
  }

  /** @returns {EntityRegionView_page} */
  static EntityRegionView_page() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {EntityRegionView_Request} */
  static EntityRegionView_Request() {
    return Joi.object({
      parent_id: Joi.array().items(Joi.string().allow("")),
      sub_type: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {EntityRegionView_Response} */
  static EntityRegionView_Response() {
    return Joi.object({
      data: Joi.array()
        .items(ServiceabilityPlatformModel.EntityRegionView_Items())
        .required(),
      error: ServiceabilityPlatformModel.EntityRegionView_Error().required(),
      page: ServiceabilityPlatformModel.EntityRegionView_page().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {EwayBillResponse} */
  static EwayBillResponse() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {FailureResponse} */
  static FailureResponse() {
    return Joi.object({
      error: Joi.array()
        .items(ServiceabilityPlatformModel.ErrorResponse())
        .required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {getAppRegionZonesResponse} */
  static getAppRegionZonesResponse() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewItems())
        .required(),
      page: Joi.array()
        .items(ServiceabilityPlatformModel.PageSchema())
        .required(),
    });
  }

  /** @returns {GetSingleZoneDataViewResponse} */
  static GetSingleZoneDataViewResponse() {
    return Joi.object({
      data: ServiceabilityPlatformModel.GetZoneDataViewItems().required(),
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

  /** @returns {GetStoresViewResponse} */
  static GetStoresViewResponse() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityPlatformModel.ItemResponse()),
      page: ServiceabilityPlatformModel.ServiceabilityPageResponse().required(),
    });
  }

  /** @returns {GetZoneByIdSchema} */
  static GetZoneByIdSchema() {
    return Joi.object({
      assignment_preference: Joi.string().allow(""),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.GetZoneDataViewChannels())
        .required(),
      company_id: Joi.number(),
      is_active: Joi.boolean().required(),
      mapping: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneMappingType())
        .required(),
      name: Joi.string().allow("").required(),
      product: ServiceabilityPlatformModel.ZoneProductTypes().required(),
      region_type: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      stores_count: Joi.number().required(),
      zone_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetZoneDataViewChannels} */
  static GetZoneDataViewChannels() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      channel_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetZoneDataViewItems} */
  static GetZoneDataViewItems() {
    return Joi.object({
      assignment_preference: Joi.string().allow(""),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.GetZoneDataViewChannels())
        .required(),
      company_id: Joi.number(),
      is_active: Joi.boolean().required(),
      mapping: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneMappingType())
        .required(),
      name: Joi.string().allow("").required(),
      product: ServiceabilityPlatformModel.ZoneProductTypes().required(),
      region_type: Joi.string().allow(""),
      slug: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      stores_count: Joi.number().required(),
      zone_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetZoneFromApplicationIdViewResponse} */
  static GetZoneFromApplicationIdViewResponse() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewItems())
        .required(),
      page: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneDataItem())
        .required(),
    });
  }

  /** @returns {GetZoneFromPincodeViewRequest} */
  static GetZoneFromPincodeViewRequest() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetZoneFromPincodeViewResponse} */
  static GetZoneFromPincodeViewResponse() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),
      zones: Joi.array().items(ServiceabilityPlatformModel.Zone()).required(),
    });
  }

  /** @returns {GstCredentialsResponse} */
  static GstCredentialsResponse() {
    return Joi.object({
      e_invoice: ServiceabilityPlatformModel.EinvoiceResponse(),
      e_waybill: ServiceabilityPlatformModel.EwayBillResponse(),
    });
  }

  /** @returns {IntComparisonOperations} */
  static IntComparisonOperations() {
    return Joi.object({
      includes: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {IntegrationTypeResponse} */
  static IntegrationTypeResponse() {
    return Joi.object({
      inventory: Joi.string().allow(""),
      order: Joi.string().allow(""),
    });
  }

  /** @returns {ItemResponse} */
  static ItemResponse() {
    return Joi.object({
      _cls: Joi.string().allow(""),
      _custom_json: Joi.any(),
      address: ServiceabilityPlatformModel.AddressResponse(),
      code: Joi.string().allow(""),
      company: Joi.number(),
      company_id: Joi.number(),
      contact_numbers: Joi.array().items(
        ServiceabilityPlatformModel.ContactNumberResponse()
      ),
      created_by: ServiceabilityPlatformModel.CreatedByResponse(),
      created_on: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      documents: Joi.array().items(
        ServiceabilityPlatformModel.DocumentsResponse()
      ),
      gst_credentials: ServiceabilityPlatformModel.GstCredentialsResponse(),
      integration_type: ServiceabilityPlatformModel.IntegrationTypeResponse(),
      logistics: ServiceabilityPlatformModel.LogisticsResponse(),
      manager: ServiceabilityPlatformModel.ManagerResponse(),
      modified_by: ServiceabilityPlatformModel.ModifiedByResponse(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      product_return_config: ServiceabilityPlatformModel.ProductReturnConfigResponse(),
      stage: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      timing: Joi.array().items(ServiceabilityPlatformModel.TimmingResponse()),
      uid: Joi.number(),
      verified_by: ServiceabilityPlatformModel.ModifiedByResponse(),
      verified_on: Joi.string().allow(""),
      warnings: ServiceabilityPlatformModel.WarningsResponse(),
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
      channels: ServiceabilityPlatformModel.ListViewChannels().required(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
      product: ServiceabilityPlatformModel.ListViewProduct().required(),
      regions_count: Joi.number().required(),
      slug: Joi.string().allow("").required(),
      stores_count: Joi.number().required(),
      zone_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ListViewProduct} */
  static ListViewProduct() {
    return Joi.object({
      count: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ListViewResponse} */
  static ListViewResponse() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewItems())
        .required(),
      page: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneDataItem())
        .required(),
    });
  }

  /** @returns {ListViewSummary} */
  static ListViewSummary() {
    return Joi.object({
      total_active_zones: Joi.number().required(),
      total_pincodes_served: Joi.number().required(),
      total_zones: Joi.number().required(),
    });
  }

  /** @returns {LocationRule} */
  static LocationRule() {
    return Joi.object({
      includes: Joi.array().items(
        ServiceabilityPlatformModel.LocationRuleValues()
      ),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {LocationRuleValues} */
  static LocationRuleValues() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      id: Joi.string().allow("").required(),
      name: Joi.string().allow(""),
      parent_id: Joi.string().allow(""),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      sub_type: Joi.string().allow(""),
    });
  }

  /** @returns {LogisticsResponse} */
  static LogisticsResponse() {
    return Joi.object({
      dp: ServiceabilityPlatformModel.Dp(),
      override: Joi.boolean(),
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

  /** @returns {MobileNo} */
  static MobileNo() {
    return Joi.object({
      country_code: Joi.number(),
      number: Joi.string().allow(""),
    });
  }

  /** @returns {ModifiedByResponse} */
  static ModifiedByResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {OpeningClosing} */
  static OpeningClosing() {
    return Joi.object({
      hour: Joi.number(),
      minute: Joi.number(),
    });
  }

  /** @returns {PackageMaterial} */
  static PackageMaterial() {
    return Joi.object({
      auto_calculate: Joi.boolean(),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.Channel())
        .required(),
      error_rate: Joi.number().required(),
      height: Joi.number().required(),
      length: Joi.number().required(),
      max_weight: Joi.number(),
      media: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow("").required(),
      package_type: Joi.string().allow("").required(),
      package_vol_weight: Joi.number(),
      rules: Joi.array().items(
        ServiceabilityPlatformModel.PackageMaterialRule()
      ),
      size: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      track_inventory: Joi.boolean(),
      weight: Joi.number().required(),
      width: Joi.number().required(),
    });
  }

  /** @returns {PackageMaterialList} */
  static PackageMaterialList() {
    return Joi.object({
      items: ServiceabilityPlatformModel.PackageMaterialResponse(),
      page: ServiceabilityPlatformModel.Page(),
    });
  }

  /** @returns {PackageMaterialResponse} */
  static PackageMaterialResponse() {
    return Joi.object({
      auto_calculate: Joi.boolean(),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.Channel())
        .required(),
      error_rate: Joi.number().required(),
      height: Joi.number().required(),
      id: Joi.string().allow(""),
      item_id: Joi.number(),
      length: Joi.number().required(),
      max_weight: Joi.number(),
      media: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow("").required(),
      package_type: Joi.string().allow("").required(),
      package_vol_weight: Joi.number(),
      rules: Joi.array().items(
        ServiceabilityPlatformModel.PackageMaterialRule()
      ),
      size: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      track_inventory: Joi.boolean(),
      weight: Joi.number().required(),
      width: Joi.number().required(),
    });
  }

  /** @returns {PackageMaterialRule} */
  static PackageMaterialRule() {
    return Joi.object({
      quantity: ServiceabilityPlatformModel.PackageMaterialRuleQuantity(),
      rule_id: Joi.string().allow(""),
      weight: Joi.number(),
    });
  }

  /** @returns {PackageMaterialRuleList} */
  static PackageMaterialRuleList() {
    return Joi.object({
      items: ServiceabilityPlatformModel.PackageRuleResponse(),
      page: ServiceabilityPlatformModel.Page(),
    });
  }

  /** @returns {PackageMaterialRuleQuantity} */
  static PackageMaterialRuleQuantity() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }

  /** @returns {PackageRule} */
  static PackageRule() {
    return Joi.object({
      category_id: ServiceabilityPlatformModel.PackageRuleCategory(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean(),
      name: Joi.string().allow("").required(),
      product_id: ServiceabilityPlatformModel.PackageRuleProduct(),
      product_tag: ServiceabilityPlatformModel.PackageRuleProductTag(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PackageRuleCategory} */
  static PackageRuleCategory() {
    return Joi.object({
      includes: Joi.array().items(Joi.number()),
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

  /** @returns {PackageRuleResponse} */
  static PackageRuleResponse() {
    return Joi.object({
      category_id: ServiceabilityPlatformModel.PackageRuleCategory(),
      company_id: Joi.number().required(),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      name: Joi.string().allow("").required(),
      product_id: ServiceabilityPlatformModel.PackageRuleProduct(),
      product_tag: ServiceabilityPlatformModel.PackageRuleProductTag(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PageSchema} */
  static PageSchema() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PincodeBulkViewResponse} */
  static PincodeBulkViewResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      s3_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {PincodeCodStatusListingPage} */
  static PincodeCodStatusListingPage() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PincodeCodStatusListingRequest} */
  static PincodeCodStatusListingRequest() {
    return Joi.object({
      country: Joi.string().allow(""),
      current: Joi.number(),
      is_active: Joi.boolean(),
      page_size: Joi.number(),
      pincode: Joi.number().allow(null),
    });
  }

  /** @returns {PincodeCodStatusListingResponse} */
  static PincodeCodStatusListingResponse() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      data: Joi.array()
        .items(Joi.link("#PincodeCodStatusListingResponse"))
        .required(),
      errors: Joi.array().items(ServiceabilityPlatformModel.Error()),
      page: ServiceabilityPlatformModel.PincodeCodStatusListingPage().required(),
      success: Joi.boolean().required(),
      summary: ServiceabilityPlatformModel.PincodeCodStatusListingSummary().required(),
    });
  }

  /** @returns {PincodeCodStatusListingSummary} */
  static PincodeCodStatusListingSummary() {
    return Joi.object({
      total_active_pincodes: Joi.number().required(),
      total_inactive_pincodes: Joi.number().required(),
    });
  }

  /** @returns {PincodeMopBulkData} */
  static PincodeMopBulkData() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      s3_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {PincodeMopData} */
  static PincodeMopData() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      pincodes: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {PincodeMOPresponse} */
  static PincodeMOPresponse() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      batch_id: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      pincodes: Joi.array().items(Joi.number()),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
      updated_pincodes: Joi.array().items(
        ServiceabilityPlatformModel.PincodeMopUpdateResponse()
      ),
    });
  }

  /** @returns {PincodeMopUpdateAuditHistoryPaging} */
  static PincodeMopUpdateAuditHistoryPaging() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeMopUpdateAuditHistoryRequest} */
  static PincodeMopUpdateAuditHistoryRequest() {
    return Joi.object({
      entity_type: Joi.string().allow("").required(),
      file_name: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeMopUpdateAuditHistoryResponse} */
  static PincodeMopUpdateAuditHistoryResponse() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      error_file_s3_url: Joi.string().allow(""),
      file_name: Joi.string().allow(""),
      s3_url: Joi.string().allow(""),
      success: Joi.boolean(),
      updated_at: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeMopUpdateAuditHistoryResponseData} */
  static PincodeMopUpdateAuditHistoryResponseData() {
    return Joi.object({
      data: Joi.array()
        .items(
          ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponse()
        )
        .required(),
      entity_type: Joi.string().allow(""),
      page: ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryPaging().required(),
    });
  }

  /** @returns {PincodeMopUpdateResponse} */
  static PincodeMopUpdateResponse() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      pincode: Joi.number().required(),
    });
  }

  /** @returns {ProductReturnConfigResponse} */
  static ProductReturnConfigResponse() {
    return Joi.object({
      on_same_store: Joi.boolean(),
    });
  }

  /** @returns {ReAssignStoreRequest} */
  static ReAssignStoreRequest() {
    return Joi.object({
      articles: Joi.array().items(Joi.any()).required(),
      configuration: Joi.any().required(),
      identifier: Joi.string().allow("").required(),
      ignored_locations: Joi.array().items(Joi.string().allow("")).required(),
      to_pincode: Joi.string().allow("").required(),
    });
  }

  /** @returns {ReAssignStoreResponse} */
  static ReAssignStoreResponse() {
    return Joi.object({
      articles: Joi.array().items(Joi.any()),
      error: Joi.any().required(),
      success: Joi.boolean().required(),
      to_pincode: Joi.string().allow("").required(),
    });
  }

  /** @returns {RulePriorityRequest} */
  static RulePriorityRequest() {
    return Joi.object({
      priority: Joi.number().required(),
      rule_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {RulePriorityResponse} */
  static RulePriorityResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {SchemeRules} */
  static SchemeRules() {
    return Joi.object({
      feature: ServiceabilityPlatformModel.SchemeRulesFeatures(),
      payment_mode: Joi.array().items(Joi.string().allow("")),
      region: Joi.string().allow(""),
      transport_type: Joi.array().items(Joi.string().allow("")),
      weight: ServiceabilityPlatformModel.ArithmeticOperations(),
    });
  }

  /** @returns {SchemeRulesFeatures} */
  static SchemeRulesFeatures() {
    return Joi.object({
      battery_operated: Joi.boolean(),
      e_waybill: Joi.boolean(),
      flammable: Joi.boolean(),
      hazmat: Joi.boolean(),
      multi_part_shipments: Joi.boolean(),
      quality_check: Joi.boolean(),
      quick_response_code: Joi.boolean(),
    });
  }

  /** @returns {SelfShipResponse} */
  static SelfShipResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      tat: Joi.number().required(),
    });
  }

  /** @returns {ServiceabilityErrorResponse} */
  static ServiceabilityErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {ServiceabilityModel} */
  static ServiceabilityModel() {
    return Joi.object({
      is_first_mile: Joi.boolean().required(),
      is_installation: Joi.boolean().required(),
      is_last_mile: Joi.boolean().required(),
      is_qc: Joi.boolean().required(),
      is_return: Joi.boolean().required(),
      lm_cod_limit: Joi.number().required(),
      pickup_cutoff: Joi.string().allow("").allow(null).required(),
      route_code: Joi.string().allow("").allow(null).required(),
    });
  }

  /** @returns {ServiceabilityPageResponse} */
  static ServiceabilityPageResponse() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {StorePrioritySchema} */
  static StorePrioritySchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {StoreRuleConditionSchema} */
  static StoreRuleConditionSchema() {
    return Joi.object({
      brand_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      category_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      customer_radius: ServiceabilityPlatformModel.CustomerRadiusSchema(),
      department_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      order_place_date: ServiceabilityPlatformModel.ArithmeticOperations(),
      product_ids: ServiceabilityPlatformModel.IntComparisonOperations(),
      product_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      store_tags: ServiceabilityPlatformModel.StringComparisonOperations(),
      store_type: ServiceabilityPlatformModel.StringComparisonOperations(),
      to_location: ServiceabilityPlatformModel.LocationRule(),
      zone_ids: ServiceabilityPlatformModel.StringComparisonOperations(),
    });
  }

  /** @returns {StoreRuleConfigData} */
  static StoreRuleConfigData() {
    return Joi.object({
      rule_ids: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")),
      store_priority: Joi.array().items(
        ServiceabilityPlatformModel.StorePrioritySchema()
      ),
      tag_based_priority: Joi.array().items(Joi.string().allow("")),
      type_based_priority: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {StoreRuleDataSchema} */
  static StoreRuleDataSchema() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      company_id: Joi.number(),
      conditions: ServiceabilityPlatformModel.StoreRuleConditionSchema(),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      sort: Joi.array().items(Joi.string().allow("")),
      store_priority: Joi.array().items(
        ServiceabilityPlatformModel.StorePrioritySchema()
      ),
      tag_based_priority: Joi.array().items(Joi.string().allow("")),
      type_based_priority: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {StoreRuleResponseSchema} */
  static StoreRuleResponseSchema() {
    return Joi.object({
      conditions: ServiceabilityPlatformModel.StoreRuleConditionSchema(),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      sort: Joi.array().items(Joi.string().allow("")),
      store_priority: Joi.array().items(
        ServiceabilityPlatformModel.StorePrioritySchema()
      ),
      tag_based_priority: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      type_based_priority: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {StoreRuleUpdateResponseSchema} */
  static StoreRuleUpdateResponseSchema() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      company_id: Joi.number(),
      conditions: ServiceabilityPlatformModel.StoreRuleConditionSchema(),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      sort: Joi.array().items(Joi.string().allow("")),
      store_priority: Joi.array().items(
        ServiceabilityPlatformModel.StorePrioritySchema()
      ),
      tag_based_priority: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      type_based_priority: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {StringComparisonOperations} */
  static StringComparisonOperations() {
    return Joi.object({
      includes: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {TimmingResponse} */
  static TimmingResponse() {
    return Joi.object({
      closing: ServiceabilityPlatformModel.OpeningClosing(),
      open: Joi.boolean(),
      opening: ServiceabilityPlatformModel.OpeningClosing(),
      weekday: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateZoneConfigRequest} */
  static UpdateZoneConfigRequest() {
    return Joi.object({
      serviceability_type: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateZoneData} */
  static UpdateZoneData() {
    return Joi.object({
      assignment_preference: Joi.string().allow(""),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.GetZoneDataViewChannels())
        .required(),
      company_id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      mapping: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneMappingType())
        .required(),
      name: Joi.string().allow("").required(),
      product: ServiceabilityPlatformModel.ZoneProductTypes().required(),
      region_type: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      zone_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {WarningsResponse} */
  static WarningsResponse() {
    return Joi.object({
      store_address: Joi.string().allow(""),
    });
  }

  /** @returns {Zone} */
  static Zone() {
    return Joi.object({
      assignment_preference: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      tags: Joi.array().items(Joi.string().allow("")).required(),
      type: Joi.string().allow("").required(),
      zone_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ZoneConfig} */
  static ZoneConfig() {
    return Joi.object({
      serviceability_type: Joi.string().allow(""),
    });
  }

  /** @returns {ZoneDataItem} */
  static ZoneDataItem() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      size: Joi.number().required(),
      type: Joi.string().allow("").required(),
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

  /** @returns {ZoneProductTypes} */
  static ZoneProductTypes() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")).required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ZoneResponse} */
  static ZoneResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
      zone_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ZoneSuccessResponse} */
  static ZoneSuccessResponse() {
    return Joi.object({
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ZoneUpdateRequest} */
  static ZoneUpdateRequest() {
    return Joi.object({
      data: ServiceabilityPlatformModel.UpdateZoneData().required(),
      identifier: Joi.string().allow("").required(),
    });
  }
}
module.exports = ServiceabilityPlatformModel;
