export = ServiceabilityPlatformModel;
/**
 * @typedef UpdateZoneConfigDetails
 * @property {string} [serviceability_type]
 */
/**
 * @typedef ServiceabilityErrorResult
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
 * @typedef ApplicationServiceabilityConfigResult
 * @property {ServiceabilityErrorResult} [error]
 * @property {ApplicationServiceabilityConfig} [data]
 * @property {boolean} success
 */
/**
 * @typedef EntityRegionView_Details
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
 * @typedef getAppRegionZonesResult
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
 * @typedef EntityRegionView_Result
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
 * @property {string} zone_id - The unique identifier for the zone.
 * @property {string} name - The name of the zone.
 * @property {string} slug - A human-readable and unique identifier for the
 *   zone, derived from the name.
 * @property {number} stores_count - The number of stores within the zone.
 * @property {boolean} is_active - A flag indicating whether the zone is active.
 * @property {number} regions_count - The number of regions within the zone.
 * @property {number} company_id - The unique identifier for the company to
 *   which the zone belongs.
 * @property {number[]} [store_ids] - A list of store identifiers associated
 *   with the zone.
 * @property {ListViewChannels[]} channels - The name of the zone.
 */
/**
 * @typedef ListViewResult
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
 * @typedef CompanyStoreView_Result
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
 * @typedef ZoneUpdateDetails
 * @property {string} identifier
 * @property {UpdateZoneData} data
 */
/**
 * @typedef ZoneSuccessResult
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
 * @typedef GetSingleZoneDataViewResult
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
 * @typedef ZoneResult
 * @property {number} status_code
 * @property {string} zone_id
 * @property {boolean} success
 */
/**
 * @typedef GetZoneFromPincodeViewDetails
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
 * @typedef GetZoneFromPincodeViewResult
 * @property {string} serviceability_type
 * @property {Zone[]} zones
 */
/**
 * @typedef GetZoneFromApplicationIdViewResult
 * @property {ZoneDataItem[]} page
 * @property {ListViewItems[]} items
 */
/**
 * @typedef ServiceabilityPageResult
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
 * @typedef ManagerResult
 * @property {string} [email]
 * @property {MobileNo} [mobile_no]
 * @property {string} [name]
 */
/**
 * @typedef ModifiedByResult
 * @property {string} [username]
 * @property {string} [user_id]
 */
/**
 * @typedef IntegrationTypeResult
 * @property {string} [inventory]
 * @property {string} [order]
 */
/**
 * @typedef ProductReturnConfigResult
 * @property {boolean} [on_same_store]
 */
/**
 * @typedef ContactNumberResult
 * @property {string} [number]
 * @property {number} [country_code]
 */
/**
 * @typedef AddressResult
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
 * @typedef CreatedByResult
 * @property {string} [username]
 * @property {string} [user_id]
 */
/**
 * @typedef EwayBillResult
 * @property {boolean} [enabled]
 */
/**
 * @typedef EinvoiceResult
 * @property {boolean} [enabled]
 */
/**
 * @typedef GstCredentialsResult
 * @property {EwayBillResult} [e_waybill]
 * @property {EinvoiceResult} [e_invoice]
 */
/**
 * @typedef WarningsResult
 * @property {string} [store_address]
 */
/**
 * @typedef OpeningClosing
 * @property {number} [minute]
 * @property {number} [hour]
 */
/**
 * @typedef TimmingResult
 * @property {boolean} [open]
 * @property {string} [weekday]
 * @property {OpeningClosing} [closing]
 * @property {OpeningClosing} [opening]
 */
/**
 * @typedef DocumentsResult
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
 * @typedef LogisticsResult
 * @property {boolean} [override]
 * @property {Dp} [dp]
 */
/**
 * @typedef ItemResult
 * @property {string} [created_on]
 * @property {ManagerResult} [manager]
 * @property {ModifiedByResult} [modified_by]
 * @property {IntegrationTypeResult} [integration_type]
 * @property {string} [verified_on]
 * @property {ProductReturnConfigResult} [product_return_config]
 * @property {ContactNumberResult[]} [contact_numbers]
 * @property {ModifiedByResult} [verified_by]
 * @property {string} [stage]
 * @property {AddressResult} [address]
 * @property {string} [modified_on]
 * @property {CreatedByResult} [created_by]
 * @property {GstCredentialsResult} [gst_credentials]
 * @property {string} [display_name]
 * @property {number} [company_id]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [code]
 * @property {WarningsResult} [warnings]
 * @property {string} [name]
 * @property {TimmingResult[]} [timing]
 * @property {DocumentsResult[]} [documents]
 * @property {string} [store_type]
 * @property {string} [sub_type]
 * @property {number} [company]
 * @property {string} [_cls]
 * @property {LogisticsResult} [logistics]
 * @property {string[]} [notification_emails]
 */
/**
 * @typedef GetStoresViewResult
 * @property {ServiceabilityPageResult} page
 * @property {ItemResult[]} [items]
 */
/**
 * @typedef PincodeMopData
 * @property {number[]} pincodes
 * @property {string} country
 * @property {string} action
 */
/**
 * @typedef PincodeMopUpdateResult
 * @property {number} pincode
 * @property {string} channel_id
 * @property {string} country
 * @property {boolean} is_active
 */
/**
 * @typedef PincodeMOPResult
 * @property {boolean} success
 * @property {number} status_code
 * @property {string} batch_id
 * @property {string} country
 * @property {string} action
 * @property {number[]} [pincodes]
 * @property {PincodeMopUpdateResult[]} [updated_pincodes]
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
 * @typedef PincodeBulkViewResult
 * @property {string} batch_id
 * @property {string} s3_url
 */
/**
 * @typedef PincodeCodStatusListingDetails
 * @property {string} [country]
 * @property {boolean} [is_active]
 * @property {number} [pincode]
 * @property {number} [current]
 * @property {number} [page_size]
 */
/**
 * @typedef PincodeCodStatusListingResult
 * @property {string} country
 * @property {PincodeCodStatusListingResult[]} data
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
 * @typedef PincodeMopUpdateAuditHistoryDetails
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
 * @typedef PincodeMopUpdateAuditHistoryResult
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
 * @typedef PincodeMopUpdateAuditHistoryResultData
 * @property {string} [entity_type]
 * @property {PincodeMopUpdateAuditHistoryPaging} page
 * @property {PincodeMopUpdateAuditHistoryResult[]} data
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
 * @typedef CourierAccountDetailsBody
 * @property {string} extension_id
 * @property {string} [account_id]
 * @property {string} scheme_id
 * @property {boolean} is_self_ship
 * @property {string} stage
 * @property {boolean} is_own_account
 */
/**
 * @typedef ErrorResult
 * @property {string} value
 * @property {string} message
 * @property {string} type
 */
/**
 * @typedef CourierPartnerAccountFailureResult
 * @property {boolean} success
 * @property {ErrorResult[]} error
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
 * @typedef CourierPartnerRuleCPListResult
 * @property {string} [account_id]
 * @property {string} [extension_id]
 * @property {boolean} [is_self_ship]
 * @property {Object} [scheme_rules]
 */
/**
 * @typedef CourierPartnerRuleResult
 * @property {boolean} [is_active]
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {CourierPartnerRuleConditions} [conditions]
 * @property {string[]} [sort]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [type]
 * @property {CourierPartnerRuleCPListResult[]} [cp_list]
 */
/**
 * @typedef CourierPartnerList
 * @property {string} extension_id
 * @property {string} account_id
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
 * @typedef FailureResult
 * @property {boolean} success
 * @property {ErrorResult[]} error
 */
/**
 * @typedef CourierPartnerRulesListResult
 * @property {CourierPartnerRuleResult[]} items
 * @property {Page} page
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
 * @typedef BulkRegionJobDetails
 * @property {string} [file_path]
 * @property {string} country
 * @property {string} action
 * @property {string} region
 */
/**
 * @typedef BulkRegionResultItemData
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
 * @typedef BulkRegionResult
 * @property {BulkRegionResultItemData[]} items
 * @property {Page} page
 */
/**
 * @typedef SelfShipResult
 * @property {boolean} is_active
 * @property {number} tat
 */
/**
 * @typedef ApplicationSelfShipConfig
 * @property {SelfShipResult} [self_ship]
 */
/**
 * @typedef ApplicationSelfShipConfigResult
 * @property {ServiceabilityErrorResult} [error]
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
 * @typedef GetStoreRulesApiResult
 * @property {StoreRuleDataSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateStoreRuleDetailsSchema
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {StoreRuleConditionSchema} [conditions]
 * @property {string[]} [type_based_priority]
 * @property {string[]} [tag_based_priority]
 * @property {StorePrioritySchema[]} [store_priority]
 * @property {string[]} [sort]
 */
/**
 * @typedef StoreRuleResultSchema
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
 * @typedef StoreRuleUpdateResultSchema
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
 * @typedef CourierAccountResult
 * @property {string} account_id
 * @property {string} scheme_id
 * @property {boolean} is_self_ship
 * @property {string} stage
 * @property {boolean} is_own_account
 * @property {CourierPartnerSchemeModel} scheme_rules
 */
/**
 * @typedef CompanyCourierPartnerAccountListResult
 * @property {CourierAccountResult[]} items
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
 * @typedef PackageMaterialResult
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
 * @typedef PackageRuleResult
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
 * @property {PackageRuleResult} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PackageMaterialList
 * @property {PackageMaterialResult} [items]
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
 * @typedef RulePriorityDetails
 * @property {string} rule_id
 * @property {number} priority
 */
/**
 * @typedef RulePriorityResult
 * @property {boolean} [success]
 */
/**
 * @typedef ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy] - The strategy parameter allows users to
 *   specify the desired approach or criteria for selecting optimal locations.
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
 * @typedef OptimlLocationsDetailsSchema
 * @property {string} channel_id
 * @property {string} channel_type
 * @property {string} [channel_identifier]
 * @property {LocationDetailsServiceability} to_serviceability
 * @property {OptimalLocationsArticles[]} [articles]
 */
/**
 * @typedef OptimalLocationArticlesResult
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
 * @typedef OptimalLocationAssignedStoresResult
 * @property {number} store_id
 * @property {OptimalLocationArticlesResult[]} articles
 */
/**
 * @typedef OptimalLocationsResult
 * @property {OptimalLocationAssignedStoresResult[]} assigned_stores
 * @property {ErrorResult[]} [faulty_articles]
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
declare class ServiceabilityPlatformModel {
}
declare namespace ServiceabilityPlatformModel {
    export { UpdateZoneConfigDetails, ServiceabilityErrorResult, ApplicationServiceabilityConfig, ApplicationServiceabilityConfigResult, EntityRegionView_Details, EntityRegionView_Error, EntityRegionView_page, getAppRegionZonesResult, PageSchema, EntityRegionView_Items, EntityRegionView_Result, ListViewSummary, ZoneDataItem, ListViewProduct, ListViewChannels, ListViewItems, ListViewResult, CompanyStoreView_PageItems, CompanyStoreView_Result, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingType, UpdateZoneData, ZoneUpdateDetails, ZoneSuccessResult, GetZoneDataViewItems, GetSingleZoneDataViewResult, GetZoneByIdSchema, CreateZoneData, ZoneResult, GetZoneFromPincodeViewDetails, Zone, GetZoneFromPincodeViewResult, GetZoneFromApplicationIdViewResult, ServiceabilityPageResult, MobileNo, ManagerResult, ModifiedByResult, IntegrationTypeResult, ProductReturnConfigResult, ContactNumberResult, AddressResult, CreatedByResult, EwayBillResult, EinvoiceResult, GstCredentialsResult, WarningsResult, OpeningClosing, TimmingResult, DocumentsResult, Dp, LogisticsResult, ItemResult, GetStoresViewResult, PincodeMopData, PincodeMopUpdateResult, PincodeMOPResult, CommonError, PincodeMopBulkData, PincodeBulkViewResult, PincodeCodStatusListingDetails, PincodeCodStatusListingResult, Error, PincodeCodStatusListingPage, PincodeCodStatusListingSummary, PincodeMopUpdateAuditHistoryDetails, PincodeMopUpdateAuditHistoryPaging, PincodeMopUpdateAuditHistoryResult, PincodeMopUpdateAuditHistoryResultData, ArithmeticOperations, SchemeRulesFeatures, SchemeRules, CourierAccount, CourierAccountDetailsBody, ErrorResult, CourierPartnerAccountFailureResult, Page, CourierPartnerRuleCPListResult, CourierPartnerRuleResult, CourierPartnerList, LocationRuleValues, LocationRule, StringComparisonOperations, IntComparisonOperations, CourierPartnerRuleConditions, CourierPartnerRule, FailureResult, CourierPartnerRulesListResult, ShipmentsArticles, ShipmentDimension, Shipments, ShipmentCourierPartnerDetails, CourierPartnerPromise, CourierPartners, ShipmentCourierPartners, ShipmentCourierPartnerResult, ShipmentsCourierPartnersServiceability, CompanyConfig, ZoneConfig, ApplicationConfig, BulkRegionJobDetails, BulkRegionResultItemData, BulkRegionResult, SelfShipResult, ApplicationSelfShipConfig, ApplicationSelfShipConfigResult, StoreRuleConfigData, CustomerRadiusSchema, StoreRuleConditionSchema, StoreRuleDataSchema, StorePrioritySchema, GetStoreRulesApiResult, CreateStoreRuleDetailsSchema, StoreRuleResultSchema, StoreRuleUpdateResultSchema, ServiceabilityModel, CourierPartnerSchemeFeatures, CourierPartnerSchemeModel, CourierAccountResult, CompanyCourierPartnerAccountListResult, PackageMaterial, PackageMaterialResult, PackageMaterialRule, PackageRule, PackageRuleResult, Channel, PackageMaterialRuleList, PackageMaterialList, PackageRuleProduct, PackageRuleProductTag, PackageRuleCategory, PackageMaterialRuleQuantity, RulePriorityDetails, RulePriorityResult, ArticleAssignment, ServiceabilityLocation, LocationDetailsServiceability, OptimalLocationsArticles, OptimlLocationsDetailsSchema, OptimalLocationArticlesResult, OptimalLocationAssignedStoresResult, OptimalLocationsResult, ValidationError, StandardError };
}
/** @returns {UpdateZoneConfigDetails} */
declare function UpdateZoneConfigDetails(): UpdateZoneConfigDetails;
type UpdateZoneConfigDetails = {
    serviceability_type?: string;
};
/** @returns {ServiceabilityErrorResult} */
declare function ServiceabilityErrorResult(): ServiceabilityErrorResult;
type ServiceabilityErrorResult = {
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
/** @returns {ApplicationServiceabilityConfigResult} */
declare function ApplicationServiceabilityConfigResult(): ApplicationServiceabilityConfigResult;
type ApplicationServiceabilityConfigResult = {
    error?: ServiceabilityErrorResult;
    data?: ApplicationServiceabilityConfig;
    success: boolean;
};
/** @returns {EntityRegionView_Details} */
declare function EntityRegionView_Details(): EntityRegionView_Details;
type EntityRegionView_Details = {
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
/** @returns {getAppRegionZonesResult} */
declare function getAppRegionZonesResult(): getAppRegionZonesResult;
type getAppRegionZonesResult = {
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
/** @returns {EntityRegionView_Result} */
declare function EntityRegionView_Result(): EntityRegionView_Result;
type EntityRegionView_Result = {
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
    /**
     * - The unique identifier for the zone.
     */
    zone_id: string;
    /**
     * - The name of the zone.
     */
    name: string;
    /**
     * - A human-readable and unique identifier for the
     * zone, derived from the name.
     */
    slug: string;
    /**
     * - The number of stores within the zone.
     */
    stores_count: number;
    /**
     * - A flag indicating whether the zone is active.
     */
    is_active: boolean;
    /**
     * - The number of regions within the zone.
     */
    regions_count: number;
    /**
     * - The unique identifier for the company to
     * which the zone belongs.
     */
    company_id: number;
    /**
     * - A list of store identifiers associated
     * with the zone.
     */
    store_ids?: number[];
    /**
     * - The name of the zone.
     */
    channels: ListViewChannels[];
};
/** @returns {ListViewResult} */
declare function ListViewResult(): ListViewResult;
type ListViewResult = {
    page: ZoneDataItem;
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
/** @returns {CompanyStoreView_Result} */
declare function CompanyStoreView_Result(): CompanyStoreView_Result;
type CompanyStoreView_Result = {
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
/** @returns {ZoneUpdateDetails} */
declare function ZoneUpdateDetails(): ZoneUpdateDetails;
type ZoneUpdateDetails = {
    identifier: string;
    data: UpdateZoneData;
};
/** @returns {ZoneSuccessResult} */
declare function ZoneSuccessResult(): ZoneSuccessResult;
type ZoneSuccessResult = {
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
/** @returns {GetSingleZoneDataViewResult} */
declare function GetSingleZoneDataViewResult(): GetSingleZoneDataViewResult;
type GetSingleZoneDataViewResult = {
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
/** @returns {ZoneResult} */
declare function ZoneResult(): ZoneResult;
type ZoneResult = {
    status_code: number;
    zone_id: string;
    success: boolean;
};
/** @returns {GetZoneFromPincodeViewDetails} */
declare function GetZoneFromPincodeViewDetails(): GetZoneFromPincodeViewDetails;
type GetZoneFromPincodeViewDetails = {
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
/** @returns {GetZoneFromPincodeViewResult} */
declare function GetZoneFromPincodeViewResult(): GetZoneFromPincodeViewResult;
type GetZoneFromPincodeViewResult = {
    serviceability_type: string;
    zones: Zone[];
};
/** @returns {GetZoneFromApplicationIdViewResult} */
declare function GetZoneFromApplicationIdViewResult(): GetZoneFromApplicationIdViewResult;
type GetZoneFromApplicationIdViewResult = {
    page: ZoneDataItem[];
    items: ListViewItems[];
};
/** @returns {ServiceabilityPageResult} */
declare function ServiceabilityPageResult(): ServiceabilityPageResult;
type ServiceabilityPageResult = {
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
/** @returns {ManagerResult} */
declare function ManagerResult(): ManagerResult;
type ManagerResult = {
    email?: string;
    mobile_no?: MobileNo;
    name?: string;
};
/** @returns {ModifiedByResult} */
declare function ModifiedByResult(): ModifiedByResult;
type ModifiedByResult = {
    username?: string;
    user_id?: string;
};
/** @returns {IntegrationTypeResult} */
declare function IntegrationTypeResult(): IntegrationTypeResult;
type IntegrationTypeResult = {
    inventory?: string;
    order?: string;
};
/** @returns {ProductReturnConfigResult} */
declare function ProductReturnConfigResult(): ProductReturnConfigResult;
type ProductReturnConfigResult = {
    on_same_store?: boolean;
};
/** @returns {ContactNumberResult} */
declare function ContactNumberResult(): ContactNumberResult;
type ContactNumberResult = {
    number?: string;
    country_code?: number;
};
/** @returns {AddressResult} */
declare function AddressResult(): AddressResult;
type AddressResult = {
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
/** @returns {CreatedByResult} */
declare function CreatedByResult(): CreatedByResult;
type CreatedByResult = {
    username?: string;
    user_id?: string;
};
/** @returns {EwayBillResult} */
declare function EwayBillResult(): EwayBillResult;
type EwayBillResult = {
    enabled?: boolean;
};
/** @returns {EinvoiceResult} */
declare function EinvoiceResult(): EinvoiceResult;
type EinvoiceResult = {
    enabled?: boolean;
};
/** @returns {GstCredentialsResult} */
declare function GstCredentialsResult(): GstCredentialsResult;
type GstCredentialsResult = {
    e_waybill?: EwayBillResult;
    e_invoice?: EinvoiceResult;
};
/** @returns {WarningsResult} */
declare function WarningsResult(): WarningsResult;
type WarningsResult = {
    store_address?: string;
};
/** @returns {OpeningClosing} */
declare function OpeningClosing(): OpeningClosing;
type OpeningClosing = {
    minute?: number;
    hour?: number;
};
/** @returns {TimmingResult} */
declare function TimmingResult(): TimmingResult;
type TimmingResult = {
    open?: boolean;
    weekday?: string;
    closing?: OpeningClosing;
    opening?: OpeningClosing;
};
/** @returns {DocumentsResult} */
declare function DocumentsResult(): DocumentsResult;
type DocumentsResult = {
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
/** @returns {LogisticsResult} */
declare function LogisticsResult(): LogisticsResult;
type LogisticsResult = {
    override?: boolean;
    dp?: Dp;
};
/** @returns {ItemResult} */
declare function ItemResult(): ItemResult;
type ItemResult = {
    created_on?: string;
    manager?: ManagerResult;
    modified_by?: ModifiedByResult;
    integration_type?: IntegrationTypeResult;
    verified_on?: string;
    product_return_config?: ProductReturnConfigResult;
    contact_numbers?: ContactNumberResult[];
    verified_by?: ModifiedByResult;
    stage?: string;
    address?: AddressResult;
    modified_on?: string;
    created_by?: CreatedByResult;
    gst_credentials?: GstCredentialsResult;
    display_name?: string;
    company_id?: number;
    uid?: number;
    _custom_json?: any;
    code?: string;
    warnings?: WarningsResult;
    name?: string;
    timing?: TimmingResult[];
    documents?: DocumentsResult[];
    store_type?: string;
    sub_type?: string;
    company?: number;
    _cls?: string;
    logistics?: LogisticsResult;
    notification_emails?: string[];
};
/** @returns {GetStoresViewResult} */
declare function GetStoresViewResult(): GetStoresViewResult;
type GetStoresViewResult = {
    page: ServiceabilityPageResult;
    items?: ItemResult[];
};
/** @returns {PincodeMopData} */
declare function PincodeMopData(): PincodeMopData;
type PincodeMopData = {
    pincodes: number[];
    country: string;
    action: string;
};
/** @returns {PincodeMopUpdateResult} */
declare function PincodeMopUpdateResult(): PincodeMopUpdateResult;
type PincodeMopUpdateResult = {
    pincode: number;
    channel_id: string;
    country: string;
    is_active: boolean;
};
/** @returns {PincodeMOPResult} */
declare function PincodeMOPResult(): PincodeMOPResult;
type PincodeMOPResult = {
    success: boolean;
    status_code: number;
    batch_id: string;
    country: string;
    action: string;
    pincodes?: number[];
    updated_pincodes?: PincodeMopUpdateResult[];
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
/** @returns {PincodeBulkViewResult} */
declare function PincodeBulkViewResult(): PincodeBulkViewResult;
type PincodeBulkViewResult = {
    batch_id: string;
    s3_url: string;
};
/** @returns {PincodeCodStatusListingDetails} */
declare function PincodeCodStatusListingDetails(): PincodeCodStatusListingDetails;
type PincodeCodStatusListingDetails = {
    country?: string;
    is_active?: boolean;
    pincode?: number;
    current?: number;
    page_size?: number;
};
/** @returns {PincodeCodStatusListingResult} */
declare function PincodeCodStatusListingResult(): PincodeCodStatusListingResult;
type PincodeCodStatusListingResult = {
    country: string;
    data: PincodeCodStatusListingResult[];
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
/** @returns {PincodeMopUpdateAuditHistoryDetails} */
declare function PincodeMopUpdateAuditHistoryDetails(): PincodeMopUpdateAuditHistoryDetails;
type PincodeMopUpdateAuditHistoryDetails = {
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
/** @returns {PincodeMopUpdateAuditHistoryResult} */
declare function PincodeMopUpdateAuditHistoryResult(): PincodeMopUpdateAuditHistoryResult;
type PincodeMopUpdateAuditHistoryResult = {
    batch_id?: string;
    entity_type?: string;
    error_file_s3_url?: string;
    s3_url?: string;
    file_name?: string;
    updated_at?: string;
    updated_by?: string;
    success?: boolean;
};
/** @returns {PincodeMopUpdateAuditHistoryResultData} */
declare function PincodeMopUpdateAuditHistoryResultData(): PincodeMopUpdateAuditHistoryResultData;
type PincodeMopUpdateAuditHistoryResultData = {
    entity_type?: string;
    page: PincodeMopUpdateAuditHistoryPaging;
    data: PincodeMopUpdateAuditHistoryResult[];
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
/** @returns {CourierAccountDetailsBody} */
declare function CourierAccountDetailsBody(): CourierAccountDetailsBody;
type CourierAccountDetailsBody = {
    extension_id: string;
    account_id?: string;
    scheme_id: string;
    is_self_ship: boolean;
    stage: string;
    is_own_account: boolean;
};
/** @returns {ErrorResult} */
declare function ErrorResult(): ErrorResult;
type ErrorResult = {
    value: string;
    message: string;
    type: string;
};
/** @returns {CourierPartnerAccountFailureResult} */
declare function CourierPartnerAccountFailureResult(): CourierPartnerAccountFailureResult;
type CourierPartnerAccountFailureResult = {
    success: boolean;
    error: ErrorResult[];
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
/** @returns {CourierPartnerRuleCPListResult} */
declare function CourierPartnerRuleCPListResult(): CourierPartnerRuleCPListResult;
type CourierPartnerRuleCPListResult = {
    account_id?: string;
    extension_id?: string;
    is_self_ship?: boolean;
    scheme_rules?: any;
};
/** @returns {CourierPartnerRuleResult} */
declare function CourierPartnerRuleResult(): CourierPartnerRuleResult;
type CourierPartnerRuleResult = {
    is_active?: boolean;
    application_id?: string;
    company_id?: number;
    conditions?: CourierPartnerRuleConditions;
    sort?: string[];
    created_by?: any;
    id?: string;
    modified_by?: any;
    modified_on?: string;
    name?: string;
    type?: string;
    cp_list?: CourierPartnerRuleCPListResult[];
};
/** @returns {CourierPartnerList} */
declare function CourierPartnerList(): CourierPartnerList;
type CourierPartnerList = {
    extension_id: string;
    account_id: string;
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
/** @returns {FailureResult} */
declare function FailureResult(): FailureResult;
type FailureResult = {
    success: boolean;
    error: ErrorResult[];
};
/** @returns {CourierPartnerRulesListResult} */
declare function CourierPartnerRulesListResult(): CourierPartnerRulesListResult;
type CourierPartnerRulesListResult = {
    items: CourierPartnerRuleResult[];
    page: Page;
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
/** @returns {BulkRegionJobDetails} */
declare function BulkRegionJobDetails(): BulkRegionJobDetails;
type BulkRegionJobDetails = {
    file_path?: string;
    country: string;
    action: string;
    region: string;
};
/** @returns {BulkRegionResultItemData} */
declare function BulkRegionResultItemData(): BulkRegionResultItemData;
type BulkRegionResultItemData = {
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
/** @returns {BulkRegionResult} */
declare function BulkRegionResult(): BulkRegionResult;
type BulkRegionResult = {
    items: BulkRegionResultItemData[];
    page: Page;
};
/** @returns {SelfShipResult} */
declare function SelfShipResult(): SelfShipResult;
type SelfShipResult = {
    is_active: boolean;
    tat: number;
};
/** @returns {ApplicationSelfShipConfig} */
declare function ApplicationSelfShipConfig(): ApplicationSelfShipConfig;
type ApplicationSelfShipConfig = {
    self_ship?: SelfShipResult;
};
/** @returns {ApplicationSelfShipConfigResult} */
declare function ApplicationSelfShipConfigResult(): ApplicationSelfShipConfigResult;
type ApplicationSelfShipConfigResult = {
    error?: ServiceabilityErrorResult;
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
/** @returns {GetStoreRulesApiResult} */
declare function GetStoreRulesApiResult(): GetStoreRulesApiResult;
type GetStoreRulesApiResult = {
    items?: StoreRuleDataSchema[];
    page?: Page;
};
/** @returns {CreateStoreRuleDetailsSchema} */
declare function CreateStoreRuleDetailsSchema(): CreateStoreRuleDetailsSchema;
type CreateStoreRuleDetailsSchema = {
    name?: string;
    is_active?: boolean;
    conditions?: StoreRuleConditionSchema;
    type_based_priority?: string[];
    tag_based_priority?: string[];
    store_priority?: StorePrioritySchema[];
    sort?: string[];
};
/** @returns {StoreRuleResultSchema} */
declare function StoreRuleResultSchema(): StoreRuleResultSchema;
type StoreRuleResultSchema = {
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
/** @returns {StoreRuleUpdateResultSchema} */
declare function StoreRuleUpdateResultSchema(): StoreRuleUpdateResultSchema;
type StoreRuleUpdateResultSchema = {
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
/** @returns {CourierAccountResult} */
declare function CourierAccountResult(): CourierAccountResult;
type CourierAccountResult = {
    account_id: string;
    scheme_id: string;
    is_self_ship: boolean;
    stage: string;
    is_own_account: boolean;
    scheme_rules: CourierPartnerSchemeModel;
};
/** @returns {CompanyCourierPartnerAccountListResult} */
declare function CompanyCourierPartnerAccountListResult(): CompanyCourierPartnerAccountListResult;
type CompanyCourierPartnerAccountListResult = {
    items: CourierAccountResult[];
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
/** @returns {PackageMaterialResult} */
declare function PackageMaterialResult(): PackageMaterialResult;
type PackageMaterialResult = {
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
/** @returns {PackageRuleResult} */
declare function PackageRuleResult(): PackageRuleResult;
type PackageRuleResult = {
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
    items?: PackageRuleResult;
    page?: Page;
};
/** @returns {PackageMaterialList} */
declare function PackageMaterialList(): PackageMaterialList;
type PackageMaterialList = {
    items?: PackageMaterialResult;
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
/** @returns {RulePriorityDetails} */
declare function RulePriorityDetails(): RulePriorityDetails;
type RulePriorityDetails = {
    rule_id: string;
    priority: number;
};
/** @returns {RulePriorityResult} */
declare function RulePriorityResult(): RulePriorityResult;
type RulePriorityResult = {
    success?: boolean;
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
/** @returns {OptimlLocationsDetailsSchema} */
declare function OptimlLocationsDetailsSchema(): OptimlLocationsDetailsSchema;
type OptimlLocationsDetailsSchema = {
    channel_id: string;
    channel_type: string;
    channel_identifier?: string;
    to_serviceability: LocationDetailsServiceability;
    articles?: OptimalLocationsArticles[];
};
/** @returns {OptimalLocationArticlesResult} */
declare function OptimalLocationArticlesResult(): OptimalLocationArticlesResult;
type OptimalLocationArticlesResult = {
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
/** @returns {OptimalLocationAssignedStoresResult} */
declare function OptimalLocationAssignedStoresResult(): OptimalLocationAssignedStoresResult;
type OptimalLocationAssignedStoresResult = {
    store_id: number;
    articles: OptimalLocationArticlesResult[];
};
/** @returns {OptimalLocationsResult} */
declare function OptimalLocationsResult(): OptimalLocationsResult;
type OptimalLocationsResult = {
    assigned_stores: OptimalLocationAssignedStoresResult[];
    faulty_articles?: ErrorResult[];
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
