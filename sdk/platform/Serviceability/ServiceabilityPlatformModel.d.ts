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
 * @property {string} type - Denotes if the zone is applicable for all the
 *   products or specific products.
 * @property {string[]} tags - List of product tags.
 */
/**
 * @typedef ZoneMappingDetailType
 * @property {string} country - Uid for the country.
 * @property {ZoneMappingRegions[]} [regions] - List of regions with its details.
 */
/**
 * @typedef ZoneMappingType
 * @property {string} country - Uid for the country.
 * @property {string[]} regions - List of region uid for the given country.
 */
/**
 * @typedef ZoneMappingRegions
 * @property {string} [display_name] - Name of the region that is in proper casing.
 * @property {string[]} [parent_id]
 * @property {string} [parent_uid] - Unique identifier for that regions parent.
 * @property {string} [sub_type] - What type does the region belong to.
 * @property {string} [uid] - Unique identifier for that region.
 */
/**
 * @typedef UpdateZoneData
 * @property {string} zone_id - Unique identifier for the zone.
 * @property {string} name - Name for the zone.
 * @property {string} slug - A human-readable and unique identifier for the
 *   zone, derived from the name.
 * @property {number} company_id - Company id associated with the zone.
 * @property {boolean} is_active - A flag indicating whether the zone is active.
 * @property {GetZoneDataViewChannels[]} channels - Channels for which the zone is active.
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids - A list of store identifiers associated with the zone.
 * @property {string} region_type - Type of region that belongs in the zone.
 * @property {ZoneMappingType[]} mapping - Country to region mapping for the zone.
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
 * @property {string} zone_id - The unique identifier for the zone.
 * @property {string} name - The name of the zone for easy identification.
 * @property {string} slug - A URL-friendly version of the zone’s name, used for
 *   routing or linking.
 * @property {number} [company_id] - The ID of the company associated with this zone.
 * @property {boolean} is_active - A flag indicating whether the zone is active
 *   (true) or inactive (false).
 * @property {GetZoneDataViewChannels[]} channels - A list of channels available
 *   within this zone.
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids - A collection of store IDs linked to this zone.
 * @property {string} [region_type] - The type of region the zone represents.
 * @property {ZoneMappingType[]} mapping - A list of mappings defining
 *   relationships between this zone and other entities.
 * @property {string} [assignment_preference] - The preferred method for
 *   assigning stores or products to the zone.
 * @property {number} stores_count - The total number of stores assigned to this zone.
 */
/**
 * @typedef GetSingleZoneDataViewResult
 * @property {GetZoneDataViewItems} data
 */
/**
 * @typedef GetZoneByIdSchema
 * @property {string} zone_id - Unique identifier for the zone.
 * @property {string} name - Name for the zone.
 * @property {string} slug - A human-readable and unique identifier for the
 *   zone, derived from the name.
 * @property {number} [company_id] - Company id associated with the zone.
 * @property {boolean} is_active - A flag indicating whether the zone is active.
 * @property {GetZoneDataViewChannels[]} channels - Channels for which the zone is active.
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids - A list of store identifiers associated with the zone.
 * @property {string} region_type - Type of region that belongs in the zone.
 * @property {ZoneMappingDetailType[]} mapping - Country to region mapping for the zone.
 * @property {number} [stores_count]
 */
/**
 * @typedef CreateZoneData
 * @property {string} name - Name of the zone.
 * @property {string} slug - A human-readable and unique identifier for the
 *   zone, derived from the name.
 * @property {number} company_id - Unique identifier of the company for which
 *   the zone is created.
 * @property {boolean} is_active - A flag indicating whether the zone is active.
 * @property {GetZoneDataViewChannels[]} channels - Channels for which the zone is active.
 * @property {number[]} store_ids - A list of store identifiers associated with the zone.
 * @property {string} region_type - Type of region that belongs in the zone.
 * @property {ZoneMappingType[]} mapping - Country to region mapping for the zone.
 * @property {ZoneProductTypes} [product]
 */
/**
 * @typedef ZoneResult
 * @property {number} [status_code]
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
 * @property {Object} [_custom_json] - Custom JSON for internal usage
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
 * @property {number[]} pincodes - A list of pincodes.
 * @property {string} country - Name of the country.
 * @property {string} action - Denotes wether to activate or deavtivate pincodes
 *   for COD mode of payment.
 */
/**
 * @typedef PincodeMopUpdateResult
 * @property {number} pincode - Pincode of the region.
 * @property {string} channel_id - Unique identifier of the sales channel.
 * @property {string} country - Country name.
 * @property {boolean} is_active - Denotes whether the pincode mode of payment
 *   is active or not.
 */
/**
 * @typedef PincodeMOPResult
 * @property {boolean} success - Denotes if the action was successful or not.
 * @property {number} status_code - Status code for the response.
 * @property {string} batch_id - Unique identifier identifying the perticular request.
 * @property {string} country - Name of the country.
 * @property {string} action - Denotes wether to activate or deavtivate pincodes
 *   for COD mode of payment.
 * @property {number[]} [pincodes] - List of pincodes.
 * @property {PincodeMopUpdateResult[]} [updated_pincodes] - Details of the
 *   updated pincodes.
 */
/**
 * @typedef CommonError
 * @property {string} [status_code] - Status code for the error.
 * @property {Object} [error]
 * @property {string} [success] - Whether operation was successful.
 */
/**
 * @typedef PincodeMopBulkData
 * @property {string} batch_id - Unique identifier for the request.
 * @property {string} s3_url - CDN url for the uploaded file.
 */
/**
 * @typedef PincodeBulkViewResult
 * @property {string} batch_id
 * @property {string} s3_url - CDN url for the uploaded file.
 */
/**
 * @typedef PincodeCodStatusListingDetails
 * @property {string} [country] - Name of the country.
 * @property {boolean} [is_active] - Search based on the active or inactive flag.
 * @property {number} [pincode] - Search based on the pincode.
 * @property {number} [current]
 * @property {number} [page_size]
 */
/**
 * @typedef PincodeCodStatusItem
 * @property {boolean} [active] - Denoted if the pincode is active or not.
 * @property {string} [pincode] - Name of the pincode.
 */
/**
 * @typedef PincodeCodStatusListingResult
 * @property {string} country - Name of the country.
 * @property {PincodeCodStatusListingResult[]} data - List of pincode details.
 * @property {boolean} success - Denotes if the request was successful or not.
 * @property {Error[]} [errors] - List of error object in case of unsuccessful response.
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
 * @property {number} total_active_pincodes - Count of the total active pincodes.
 * @property {number} total_inactive_pincodes - Count of the total inactive pincodes.
 */
/**
 * @typedef PincodeMopUpdateAuditHistoryDetails
 * @property {string} entity_type - Type of the entity requested.
 * @property {string} [file_name] - Name of the file.
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
 * @property {string} [batch_id] - Uniquie identifier of the request.
 * @property {string} [entity_type] - Type of the entity requested.
 * @property {string} [error_file_s3_url] - URL for the error file.
 * @property {string} [s3_url] - CDN url for the file uploaded.
 * @property {string} [file_name] - Name of the file.
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {boolean} [success] - Denotes if the request was successfully processed.
 */
/**
 * @typedef PincodeMopUpdateAuditHistoryResultData
 * @property {string} [entity_type] - Type of the entity requested.
 * @property {PincodeMopUpdateAuditHistoryPaging} page
 * @property {PincodeMopUpdateAuditHistoryResult[]} data - History records of
 *   the uploaded files.
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
 * @typedef CourierAccountUpdateDetails
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} scheme_id - Unique identifier of courier partner scheme.
 * @property {boolean} is_self_ship - Denotes if the account is of self delivery type.
 * @property {string} stage - Denotes whether the account is in enabled or disabled stage.
 * @property {boolean} is_own_account - Denotes whether it is the seller's own
 *   account or not.
 */
/**
 * @typedef CourierAccount
 * @property {number} company_id - Company id associated with the account.
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} account_id - Unique identifier of courier partner scheme
 *   and company id combination.
 * @property {string} scheme_id - Unique identifier of courier partner scheme.
 * @property {boolean} is_self_ship - Denotes if the account is of self delivery type.
 * @property {string} stage - Denotes whether the account is in enabled or disabled stage.
 * @property {boolean} is_own_account - Denotes whether it is the seller's own
 *   account or not.
 * @property {CourierPartnerSchemeModel} scheme_rules
 */
/**
 * @typedef CourierAccountDetailsBody
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} [account_id] - Unique identifier of courier partner scheme
 *   and company id combination.
 * @property {string} scheme_id - Unique identifier of courier partner scheme.
 * @property {boolean} is_self_ship - Denotes if the account is of self delivery type.
 * @property {string} stage - Denotes whether the account is in enabled or disabled stage.
 * @property {boolean} is_own_account - Denotes whether it is the seller's own
 *   account or not.
 */
/**
 * @typedef ErrorResult
 * @property {string} value - Fields containing the error.
 * @property {string} message - Description of the error.
 * @property {string} type - Type of the error.
 */
/**
 * @typedef CourierPartnerAccountFailureResult
 * @property {boolean} success - Denotes whether the request is a success or failure.
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
 * @property {string} account_id - Unique identifier of courier partner scheme
 *   and company id combination.
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {boolean} is_self_ship - Denotes if the account is of self delivery type.
 * @property {Object} [scheme_rules] - Denotes the scheme rules associated with
 *   the courier partner account.
 */
/**
 * @typedef CourierPartnerRuleResult
 * @property {boolean} is_active - Denotes whether the given courier partner
 *   rule is inactive or active.
 * @property {string} application_id - Unique identifier of the sales channel.
 * @property {number} company_id - Unique identifier of the company.
 * @property {CourierPartnerRuleConditions} conditions
 * @property {string[]} sort - Sort Strategy of the courier partners.
 * @property {Object} [created_by] - The Fynd account used to create the courier
 *   partner rule.
 * @property {string} id - Unique identifier of the courier partner rule.
 * @property {Object} [modified_by] - The Fynd account used to modify the
 *   courier partner rule.
 * @property {string} [modified_on] - The datetime at which courier partner rule
 *   is modified.
 * @property {string} name - Name for the courier partner rule.
 * @property {string} type - The type of the rule.
 * @property {CourierPartnerRuleCPListResult[]} [cp_list]
 */
/**
 * @typedef CourierPartnerList
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} account_id - Unique identifier of courier partner scheme
 *   and company id combination.
 */
/**
 * @typedef LocationRuleValues
 * @property {string} id
 * @property {string} [sub_type]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string[]} [parent_id]
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
 * @property {boolean} is_active - Denotes whether the given courier partner
 *   rule is inactive or active.
 * @property {CourierPartnerList[]} [cp_list] - A list of courier partners.
 * @property {string} name - Name for the courier partner rule.
 * @property {CourierPartnerRuleConditions} conditions
 * @property {string[]} sort - Sort Strategy for the courier partners.
 * @property {string} [type] - Denotes the type of the rule.
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
 * @property {string[]} rule_ids - A list for courier partner rules.
 * @property {string[]} sort - Sort strategy for the courier partners.
 * @property {string} [logistics_as_actual] - Depicts if the courier partner
 *   rule configuration plan is subscribed by the seller for which mode.
 * @property {number} company_id - Unique identifier of the company.
 * @property {string} [application_id] - Unique identifier of the sales channel.
 */
/**
 * @typedef ZoneConfig
 * @property {string} [serviceability_type] - Serviceability type of the delivery zone.
 * @property {number} [active_count] - Count of active delivery zones associated
 *   with the sales channel.
 * @property {number} [total_count] - Count of total delivery zones associated
 *   with the sales channel.
 */
/**
 * @typedef ApplicationConfig
 * @property {string[]} [rule_ids] - A list of courier partner rules.
 * @property {string[]} [sort] - Strategy adopted to sort the courier partners.
 * @property {ZoneConfig} [zones]
 */
/**
 * @typedef BulkRegionJobDetails
 * @property {string} [file_path] - CDN path of the uploaded csv file for bulk import.
 * @property {string} country - Country for which the tat or serviceability is
 *   to be imported or exported.
 * @property {string} action - Denotes the import or export action to be performed.
 * @property {string} region - Region of the country for which import or export
 *   is triggered.
 */
/**
 * @typedef BulkRegionResultItemData
 * @property {string} [file_path] - CDN path of the file which was used for bulk import.
 * @property {number} [failed] - Count of the failed records.
 * @property {Object[]} [failed_records]
 * @property {string} action - Denotes the import or export action performed.
 * @property {string} batch_id - Unique id to identify the import or export query.
 * @property {string} country - Country for which the import or export action is
 *   performed.
 * @property {number} [success] - Denoted if the import or export was successful
 *   or failure.
 * @property {string} region - Region of the country for which import or export
 *   is triggered.
 * @property {string} status - Current status of the import or export action performed.
 * @property {number} [total] - Count of total records.
 * @property {string} [error_file_path] - Path of the error file.
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
 * @property {string[]} [rule_ids] - List of rule ids which are active in the application.
 * @property {string[]} [type_based_priority] - Priority of the store type to be
 *   used in the basic prioritization sorting of stores.
 * @property {string[]} [tag_based_priority] - Priority of the store tags to be
 *   used in the basic prioritization sorting of stores.
 * @property {StorePrioritySchema[]} [store_priority] - Priority of explicit
 *   stores to be used for sorting of stores.
 * @property {string[]} [sort] - Criteria on which the selected stores should be sorted.
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
 * @property {string} [id] - Id of the rule.
 * @property {string} [name] - Name of the rule.
 * @property {number} [company_id] - Company id for which the rule is created.
 * @property {string} [application_id] - Application id for which the rule is created.
 * @property {string[]} [type_based_priority] - Priority of the store type to be
 *   used in the basic prioritization sorting of stores.
 * @property {string[]} [tag_based_priority] - Priority of the store tags to be
 *   used in the basic prioritization sorting of stores.
 * @property {StorePrioritySchema[]} [store_priority] - Priority of explicit
 *   stores to be used for sorting of stores.
 * @property {string[]} [sort] - Criteria on which the selected stores should be sorted.
 * @property {StoreRuleConditionSchema} [conditions]
 * @property {boolean} [is_active] - Denotes whether the rule is active or inactive.
 */
/**
 * @typedef StorePrioritySchema
 * @property {number} [id] - Id of the store.
 * @property {string} [name] - Name of the store.
 */
/**
 * @typedef GetStoreRulesApiResult
 * @property {StoreRuleDataSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateStoreRuleDetailsSchema
 * @property {string} [name] - Name of the rule.
 * @property {boolean} [is_active] - Denotes if the rule is active or not.
 * @property {StoreRuleConditionSchema} [conditions]
 * @property {string[]} [type_based_priority] - Priority of the store type to be
 *   used in the basic prioritization sorting of stores.
 * @property {string[]} [tag_based_priority] - Priority of the store tags to be
 *   used in the basic prioritization sorting of stores.
 * @property {StorePrioritySchema[]} [store_priority] - Priority of explicit
 *   stores to be used for sorting of stores.
 * @property {string[]} [sort] - Criteria on which the selected stores should be sorted.
 */
/**
 * @typedef StoreRuleResultSchema
 * @property {string} [id] - Id of the rule created.
 * @property {string} [name] - Name of the rule created.
 * @property {string} [type] - Type of the rule created.
 * @property {string[]} [type_based_priority] - Priority of the store type to be
 *   used in the rule for sorting of stores.
 * @property {string[]} [tag_based_priority] - Priority of the store tags to be
 *   used in the rule for sorting of stores.
 * @property {StorePrioritySchema[]} [store_priority] - Priority of explicit
 *   stores to be used for sorting of stores.
 * @property {string[]} [sort] - Criteria on which the selected stores should be sorted.
 * @property {StoreRuleConditionSchema} [conditions]
 * @property {boolean} [is_active] - Denotes if the rule is active or inactive.
 */
/**
 * @typedef StoreRuleUpdateResultSchema
 * @property {string} [id] - Id of the rule created.
 * @property {string} [name] - Name of the rule created.
 * @property {string} [type] - Type of the rule created.
 * @property {string[]} [type_based_priority] - Priority of the store type to be
 *   used in the rule for sorting of stores.
 * @property {string[]} [tag_based_priority] - Priority of the store tags to be
 *   used in the rule for sorting of stores.
 * @property {StorePrioritySchema[]} [store_priority] - Priority of explicit
 *   stores to be used for sorting of stores.
 * @property {string[]} [sort] - Criteria on which the selected stores should be sorted.
 * @property {StoreRuleConditionSchema} [conditions]
 * @property {boolean} [is_active] - Denotes if the rule is active or inactive.
 * @property {number} [company_id] - Company id for which the rule is created.
 * @property {string} [application_id] - Application id for which the rule is created.
 */
/**
 * @typedef ServiceabilityModel
 * @property {number} lm_cod_limit
 * @property {boolean} is_qc
 * @property {string} [pickup_cutoff]
 * @property {string} [route_code]
 * @property {boolean} is_first_mile
 * @property {boolean} [is_reverse_pickup]
 * @property {boolean} is_return
 * @property {boolean} is_installation
 * @property {boolean} is_last_mile
 */
/**
 * @typedef CourierPartnerSchemeFeatures
 * @property {boolean} [doorstep_qc] - Indicates if the courier partner offers
 *   doorstep quality check services.
 * @property {boolean} [qr] - Specifies whether the courier partner supports QR
 *   code-based operations.
 * @property {boolean} [mps] - Denotes if the courier partner supports
 *   multi-part shipment services.
 * @property {boolean} [ndr] - Indicates if the Non-Delivery Report (NDR)
 *   feature is supported by the courier partner.
 * @property {number} [ndr_attempts] - Number of attempts allowed for resolving
 *   Non-Delivery Reports (NDR).
 * @property {boolean} [dangerous_goods] - Specifies if the courier partner
 *   handles the transportation of dangerous goods.
 * @property {boolean} [fragile_goods] - Indicates whether the courier partner
 *   manages the shipment of fragile goods.
 * @property {boolean} [restricted_goods] - Indicates if the courier partner
 *   handles restricted goods, as per regulatory guidelines.
 * @property {boolean} [cold_storage_goods] - Denotes if the courier partner
 *   provides cold storage facilities for goods.
 * @property {boolean} [doorstep_exchange] - Indicates if the courier partner
 *   supports doorstep exchange services.
 * @property {boolean} [doorstep_return] - Specifies if the courier partner
 *   offers doorstep return services.
 * @property {boolean} [product_installation] - Indicates if the courier partner
 *   provides product installation services upon delivery.
 * @property {boolean} [openbox_delivery] - Specifies whether the courier
 *   partner supports open-box delivery, allowing customers to inspect goods
 *   before accepting.
 * @property {string} [status_updates] - Describes the type of status updates
 *   provided by the courier partner (e.g., real-time, periodic).
 * @property {boolean} [multi_pick_single_drop] - Indicates if the courier
 *   partner supports multiple pickups to a single drop location.
 * @property {boolean} [single_pick_multi_drop] - Indicates whether the courier
 *   partner supports single pickup to multiple drop locations.
 * @property {boolean} [multi_pick_multi_drop] - Denotes if the courier partner
 *   offers services for multiple pickups to multiple drop locations.
 * @property {boolean} [ewaybill] - Specifies if the courier partner requires or
 *   supports the generation of e-waybills for shipments.
 * @property {number} [qc_shipment_item_quantity] - Defines the maximum quantity
 *   of items allowed in a quality check shipment.
 * @property {number} [non_qc_shipment_item_quantity] - Defines the maximum
 *   quantity of items allowed in a non-quality check shipment.
 */
/**
 * @typedef CourierPartnerSchemeModel
 * @property {string} [name] - Name of the scheme.
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} scheme_id - Unique identifier of courier partner scheme.
 * @property {ArithmeticOperations} [volumetric_weight]
 * @property {ArithmeticOperations} weight
 * @property {string} transport_type - Mode of transport associated with the
 *   courier partner scheme.
 * @property {string} region - Serviceable region associated with the courier
 *   partner scheme.
 * @property {string} delivery_type - Type of delivery associated with the
 *   courier partner scheme.
 * @property {string[]} payment_mode - Mode of payment associated with the
 *   courier partner scheme.
 * @property {string} stage - Indicates if the courier partner scheme is
 *   currently active or inactive.
 * @property {CourierPartnerSchemeFeatures} feature
 */
/**
 * @typedef CourierAccountResult
 * @property {number} company_id - Company id associated with the account.
 * @property {string} [extension_id] - Unique identifier of courier partner extension.
 * @property {string} account_id - Unique identifier of courier partner scheme
 *   and company id combination.
 * @property {string} scheme_id - Unique identifier of courier partner scheme.
 * @property {boolean} is_self_ship - Denotes if the account is of self delivery type.
 * @property {string} stage - Denotes whether the account is in enabled or disabled stage.
 * @property {boolean} is_own_account - Denotes whether it is the seller's own
 *   account or not.
 * @property {CourierPartnerSchemeModel} [scheme_rules]
 */
/**
 * @typedef CompanyCourierPartnerAccountListResult
 * @property {CourierAccountResult[]} items
 * @property {Page} page
 */
/**
 * @typedef PackageMaterial
 * @property {string} name - Name of the packaging material.
 * @property {number} width - Width of the packaging material dimentions in centimeter.
 * @property {number} height - Height of the packaging material dimentions in centimeter.
 * @property {number} length - Length of the packaging material dimentions in centimeter.
 * @property {PackageMaterialRule[]} [rules] - Product group rules associated
 *   with the packaging.
 * @property {number[]} store_ids - Store ids where the packaging is avaiable.
 * @property {number} weight - Package's weight in gram.
 * @property {number} error_rate - Error Rate associated with the packaging dimensions.
 * @property {string} package_type - Type of package material.
 * @property {string} size - Physical size of the packaging.
 * @property {string[]} [media] - Image urls associated with the packaging material.
 * @property {Channel[]} channels - Sales channel where packaging is applicable.
 * @property {boolean} [track_inventory] - Denotes if the track of the inventory
 *   should be kept.
 * @property {string} status - Current status of the packaging material, if it
 *   is active or inactive.
 * @property {number} [max_weight] - Maximum weight holding capacity.
 * @property {number} [package_vol_weight] - Volumetric weight that a packaging
 *   material can carry.
 * @property {boolean} [auto_calculate] - Denotes whether the volumetric weight
 *   should be auto calculated or not.
 */
/**
 * @typedef PackageMaterialResult
 * @property {string} name - Name of the packaging material.
 * @property {string} [id] - Id of the packaging material.
 * @property {number} [item_id] - Unique identifier of an item associated with
 *   the packaging material.
 * @property {number} [company_id] - Company id associated with the packaging material.
 * @property {number} width - Width of the packaging material dimentions in centimeter.
 * @property {number} height - Height of the packaging material dimentions in centimeter.
 * @property {number} length - Length of the packaging material dimentions in centimeter.
 * @property {PackageMaterialRule[]} [rules] - Product group rules associated
 *   with the packaging.
 * @property {number[]} store_ids - Store ids where the packaging is avaiable.
 * @property {number} weight - Package's weight in gram.
 * @property {number} error_rate - Error Rate associated with the packaging dimensions.
 * @property {string} package_type - Type of package material.
 * @property {string} size - Physical size of the packaging.
 * @property {string[]} [media] - Image urls associated with the packaging material.
 * @property {Channel[]} channels - Sales channel where packaging is applicable.
 * @property {boolean} [track_inventory] - Denotes if the track of the inventory
 *   should be kept.
 * @property {string} status - Current status of the packaging material, if it
 *   is active or inactive.
 * @property {number} [max_weight] - Maximum weight holding capacity.
 * @property {number} [package_vol_weight] - Volumetric weight that a packaging
 *   material can carry.
 * @property {boolean} [auto_calculate] - Denotes whether the volumetric weight
 *   should be auto calculated or not.
 */
/**
 * @typedef PackageMaterialRule
 * @property {string} [rule_id] - Unique identifier of the package rule.
 * @property {PackageMaterialRuleQuantity} [quantity]
 * @property {number} [weight] - Volumetric weight in gram.
 */
/**
 * @typedef PackageRule
 * @property {string} name - Name of the package rule.
 * @property {number} company_id - Unique identifier of the company.
 * @property {string} type - Type of the rule.
 * @property {boolean} [is_active] - Denotes if the rule is active or inactive.
 * @property {PackageRuleProductTag} [product_tag]
 * @property {PackageRuleProduct} [product_id]
 * @property {PackageRuleCategory} [category_id]
 */
/**
 * @typedef PackageRuleResult
 * @property {string} [id] - Unique id of a package rule.
 * @property {string} name - Name of a package rule.
 * @property {number} company_id - Unique identifier of a company associated
 *   with the package rule.
 * @property {string} type - Type of the rule created.
 * @property {boolean} [is_active] - Denotes if the rule is active or inactive.
 * @property {PackageRuleProductTag} [product_tag]
 * @property {PackageRuleProduct} [product_id]
 * @property {PackageRuleCategory} [category_id]
 */
/**
 * @typedef Channel
 * @property {string} [type] - Type of the channel.
 * @property {string} [id] - Unique identifier of the channel.
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
 * @property {number} [min] - Minimum product's quantity that a packaging can contain.
 * @property {number} [max] - Maximum product's quantity that a packaging can contain.
 */
/**
 * @typedef RulePriorityDetails
 * @property {string} rule_id - Rule id whose priority needs to be changed.
 * @property {number} priority - New priority of the rule.
 */
/**
 * @typedef RulePriorityResult
 * @property {boolean} [success] - Denotes if the priority of the rule is
 *   changes successfully or not.
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
/**
 * @typedef CourierPartnerSchemeV2Features
 * @property {boolean} [doorstep_qc] - Indicates if the courier partner offers
 *   doorstep quality check services.
 * @property {boolean} [qr] - Specifies whether the courier partner supports QR
 *   code-based operations.
 * @property {boolean} [mps] - Denotes if the courier partner supports
 *   multi-part shipment services.
 * @property {boolean} [ndr] - Indicates if the Non-Delivery Report (NDR)
 *   feature is supported by the courier partner.
 * @property {boolean} [dangerous_goods] - Specifies if the courier partner
 *   handles the transportation of dangerous goods.
 * @property {boolean} [fragile_goods] - Indicates whether the courier partner
 *   manages the shipment of fragile goods.
 * @property {boolean} [restricted_goods] - Indicates if the courier partner
 *   handles restricted goods, as per regulatory guidelines.
 * @property {boolean} [cold_storage_goods] - Denotes if the courier partner
 *   provides cold storage facilities for goods.
 * @property {boolean} [doorstep_exchange] - Indicates if the courier partner
 *   supports doorstep exchange services.
 * @property {boolean} [doorstep_return] - Specifies if the courier partner
 *   offers doorstep return services.
 * @property {boolean} [product_installation] - Indicates if the courier partner
 *   provides product installation services upon delivery.
 * @property {boolean} [openbox_delivery] - Specifies whether the courier
 *   partner supports open-box delivery, allowing customers to inspect goods
 *   before accepting.
 * @property {boolean} [multi_pick_single_drop] - Indicates if the courier
 *   partner supports multiple pickups to a single drop location.
 * @property {boolean} [single_pick_multi_drop] - Indicates whether the courier
 *   partner supports single pickup to multiple drop locations.
 * @property {boolean} [multi_pick_multi_drop] - Denotes if the courier partner
 *   offers services for multiple pickups to multiple drop locations.
 * @property {boolean} [ewaybill] - Specifies if the courier partner requires or
 *   supports the generation of e-waybills for shipments.
 */
/**
 * @typedef CourierPartnerSchemeV2DetailsModel
 * @property {string} extension_id - Unique identifier of courier partner extension
 * @property {string} [scheme_id]
 * @property {string} name
 * @property {ArithmeticOperations} weight
 * @property {ArithmeticOperations} [volumetric_weight]
 * @property {string} transport_type
 * @property {string} region
 * @property {string} delivery_type
 * @property {string[]} payment_mode
 * @property {string} stage
 * @property {string} [status_updates] - Describes the type of status updates
 *   provided by the courier partner (e.g., real-time, periodic).
 * @property {number} [ndr_attempts] - Indicates if the Non-Delivery Report
 *   (NDR) feature is supported by the courier partner.
 * @property {number} [qc_shipment_item_quantity] - Defines the maximum quantity
 *   of items allowed in a quality check shipment.
 * @property {number} [non_qc_shipment_item_quantity] - Defines the maximum
 *   quantity of items allowed in a non-quality check shipment.
 * @property {CourierPartnerSchemeV2Features} feature
 */
/**
 * @typedef CourierPartnerV2SchemeModel
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} scheme_id - Unique identifier of courier partner scheme.
 * @property {string} [company_id] - Unique identifier of company.
 * @property {string} name - Name of the scheme.
 * @property {ArithmeticOperations} weight
 * @property {ArithmeticOperations} [volumetric_weight]
 * @property {string} transport_type - Mode of transport associated with the
 *   courier partner scheme.
 * @property {string} region - Serviceable region associated with the courier
 *   partner scheme.
 * @property {string} delivery_type - Type of delivery associated with the
 *   courier partner scheme.
 * @property {string[]} payment_mode - Mode of payment associated with the
 *   courier partner scheme.
 * @property {string} stage - Indicates if the courier partner scheme is
 *   currently active or inactive.
 * @property {string} [status_updates] - Describes the type of status updates
 *   provided by the courier partner (e.g., real-time, periodic).
 * @property {number} [ndr_attempts] - Indicates if the Non-Delivery Report
 *   (NDR) feature is supported by the courier partner.
 * @property {number} [qc_shipment_item_quantity] - Defines the maximum quantity
 *   of items allowed in a quality check shipment.
 * @property {number} [non_qc_shipment_item_quantity] - Defines the maximum
 *   quantity of items allowed in a non-quality check shipment.
 * @property {CourierPartnerSchemeV2Features} feature
 */
/**
 * @typedef CourierPartnerSchemeV2UpdateDetails
 * @property {string} name
 * @property {ArithmeticOperations} weight
 * @property {ArithmeticOperations} [volumetric_weight]
 * @property {string} transport_type
 * @property {string} region
 * @property {string} delivery_type
 * @property {string[]} payment_mode
 * @property {string} stage
 * @property {string} [status_updates] - Describes the type of status updates
 *   provided by the courier partner (e.g., real-time, periodic).
 * @property {number} [ndr_attempts] - Indicates if the Non-Delivery Report
 *   (NDR) feature is supported by the courier partner.
 * @property {number} [qc_shipment_item_quantity] - Defines the maximum quantity
 *   of items allowed in a quality check shipment.
 * @property {number} [non_qc_shipment_item_quantity] - Defines the maximum
 *   quantity of items allowed in a non-quality check shipment.
 * @property {CourierPartnerSchemeV2Features} feature
 */
/**
 * @typedef courierPartnerSchemeV2List
 * @property {CourierPartnerV2SchemeModel[]} items - List of courier partner schemes
 * @property {Page} page
 */
/**
 * @typedef BulkRegionServiceabilityTatDetails
 * @property {string} country
 * @property {string} region
 * @property {string} type
 */
/**
 * @typedef BulkRegionServiceabilityTatResultItemData
 * @property {string} [country] - Name of the country.
 * @property {string} [region] - Name of the region for which the
 *   tat/serviceability file needs to be downloaded.
 * @property {string} [type] - Denotes the type of data.
 * @property {string} [batch_id] - Unique identifier identifying the perticular request.
 * @property {string} [status] - Current status of the request.
 * @property {Object[]} [failed_records] - Information of records which failed
 * @property {string} [file_path] - CDN path of the file.
 */
/**
 * @typedef BulkRegionServiceabilityTatResult
 * @property {BulkRegionServiceabilityTatResultItemData[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef HierarchyItems
 * @property {string} [display_name]
 * @property {string} [slug]
 */
/**
 * @typedef GetCountriesItems
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string[]} [timezones]
 * @property {HierarchyItems[]} [hierarchy]
 * @property {string} [phone_code]
 * @property {string} [currency]
 * @property {string} [type]
 * @property {string} [latitude]
 * @property {string} [longitude]
 * @property {string} [display_name]
 * @property {boolean} [has_next_hierarchy]
 */
/**
 * @typedef GetCountries
 * @property {GetCountriesItems[]} items
 * @property {Page} page
 */
declare class ServiceabilityPlatformModel {
}
declare namespace ServiceabilityPlatformModel {
    export { UpdateZoneConfigDetails, ServiceabilityErrorResult, ApplicationServiceabilityConfig, ApplicationServiceabilityConfigResult, EntityRegionView_Details, EntityRegionView_Error, EntityRegionView_page, getAppRegionZonesResult, PageSchema, EntityRegionView_Items, EntityRegionView_Result, ListViewSummary, ZoneDataItem, ListViewProduct, ListViewChannels, ListViewItems, ListViewResult, CompanyStoreView_PageItems, CompanyStoreView_Result, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingDetailType, ZoneMappingType, ZoneMappingRegions, UpdateZoneData, ZoneUpdateDetails, ZoneSuccessResult, GetZoneDataViewItems, GetSingleZoneDataViewResult, GetZoneByIdSchema, CreateZoneData, ZoneResult, GetZoneFromPincodeViewDetails, Zone, GetZoneFromPincodeViewResult, GetZoneFromApplicationIdViewResult, ServiceabilityPageResult, MobileNo, ManagerResult, ModifiedByResult, IntegrationTypeResult, ProductReturnConfigResult, ContactNumberResult, AddressResult, CreatedByResult, EwayBillResult, EinvoiceResult, GstCredentialsResult, WarningsResult, OpeningClosing, TimmingResult, DocumentsResult, Dp, LogisticsResult, ItemResult, GetStoresViewResult, PincodeMopData, PincodeMopUpdateResult, PincodeMOPResult, CommonError, PincodeMopBulkData, PincodeBulkViewResult, PincodeCodStatusListingDetails, PincodeCodStatusItem, PincodeCodStatusListingResult, Error, PincodeCodStatusListingPage, PincodeCodStatusListingSummary, PincodeMopUpdateAuditHistoryDetails, PincodeMopUpdateAuditHistoryPaging, PincodeMopUpdateAuditHistoryResult, PincodeMopUpdateAuditHistoryResultData, ArithmeticOperations, SchemeRulesFeatures, SchemeRules, CourierAccountUpdateDetails, CourierAccount, CourierAccountDetailsBody, ErrorResult, CourierPartnerAccountFailureResult, Page, CourierPartnerRuleCPListResult, CourierPartnerRuleResult, CourierPartnerList, LocationRuleValues, LocationRule, StringComparisonOperations, IntComparisonOperations, CourierPartnerRuleConditions, CourierPartnerRule, FailureResult, CourierPartnerRulesListResult, ShipmentsArticles, ShipmentDimension, Shipments, ShipmentCourierPartnerDetails, CourierPartnerPromise, CourierPartners, ShipmentCourierPartners, ShipmentCourierPartnerResult, ShipmentsCourierPartnersServiceability, CompanyConfig, ZoneConfig, ApplicationConfig, BulkRegionJobDetails, BulkRegionResultItemData, BulkRegionResult, SelfShipResult, ApplicationSelfShipConfig, ApplicationSelfShipConfigResult, StoreRuleConfigData, CustomerRadiusSchema, StoreRuleConditionSchema, StoreRuleDataSchema, StorePrioritySchema, GetStoreRulesApiResult, CreateStoreRuleDetailsSchema, StoreRuleResultSchema, StoreRuleUpdateResultSchema, ServiceabilityModel, CourierPartnerSchemeFeatures, CourierPartnerSchemeModel, CourierAccountResult, CompanyCourierPartnerAccountListResult, PackageMaterial, PackageMaterialResult, PackageMaterialRule, PackageRule, PackageRuleResult, Channel, PackageMaterialRuleList, PackageMaterialList, PackageRuleProduct, PackageRuleProductTag, PackageRuleCategory, PackageMaterialRuleQuantity, RulePriorityDetails, RulePriorityResult, ArticleAssignment, ServiceabilityLocation, LocationDetailsServiceability, OptimalLocationsArticles, OptimlLocationsDetailsSchema, OptimalLocationArticlesResult, OptimalLocationAssignedStoresResult, OptimalLocationsResult, ValidationError, StandardError, CourierPartnerSchemeV2Features, CourierPartnerSchemeV2DetailsModel, CourierPartnerV2SchemeModel, CourierPartnerSchemeV2UpdateDetails, courierPartnerSchemeV2List, BulkRegionServiceabilityTatDetails, BulkRegionServiceabilityTatResultItemData, BulkRegionServiceabilityTatResult, HierarchyItems, GetCountriesItems, GetCountries };
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
    /**
     * - Denotes if the zone is applicable for all the
     * products or specific products.
     */
    type: string;
    /**
     * - List of product tags.
     */
    tags: string[];
};
/** @returns {ZoneMappingDetailType} */
declare function ZoneMappingDetailType(): ZoneMappingDetailType;
type ZoneMappingDetailType = {
    /**
     * - Uid for the country.
     */
    country: string;
    /**
     * - List of regions with its details.
     */
    regions?: ZoneMappingRegions[];
};
/** @returns {ZoneMappingType} */
declare function ZoneMappingType(): ZoneMappingType;
type ZoneMappingType = {
    /**
     * - Uid for the country.
     */
    country: string;
    /**
     * - List of region uid for the given country.
     */
    regions: string[];
};
/** @returns {ZoneMappingRegions} */
declare function ZoneMappingRegions(): ZoneMappingRegions;
type ZoneMappingRegions = {
    /**
     * - Name of the region that is in proper casing.
     */
    display_name?: string;
    parent_id?: string[];
    /**
     * - Unique identifier for that regions parent.
     */
    parent_uid?: string;
    /**
     * - What type does the region belong to.
     */
    sub_type?: string;
    /**
     * - Unique identifier for that region.
     */
    uid?: string;
};
/** @returns {UpdateZoneData} */
declare function UpdateZoneData(): UpdateZoneData;
type UpdateZoneData = {
    /**
     * - Unique identifier for the zone.
     */
    zone_id: string;
    /**
     * - Name for the zone.
     */
    name: string;
    /**
     * - A human-readable and unique identifier for the
     * zone, derived from the name.
     */
    slug: string;
    /**
     * - Company id associated with the zone.
     */
    company_id: number;
    /**
     * - A flag indicating whether the zone is active.
     */
    is_active: boolean;
    /**
     * - Channels for which the zone is active.
     */
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    /**
     * - A list of store identifiers associated with the zone.
     */
    store_ids: number[];
    /**
     * - Type of region that belongs in the zone.
     */
    region_type: string;
    /**
     * - Country to region mapping for the zone.
     */
    mapping: ZoneMappingType[];
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
    /**
     * - The unique identifier for the zone.
     */
    zone_id: string;
    /**
     * - The name of the zone for easy identification.
     */
    name: string;
    /**
     * - A URL-friendly version of the zone’s name, used for
     * routing or linking.
     */
    slug: string;
    /**
     * - The ID of the company associated with this zone.
     */
    company_id?: number;
    /**
     * - A flag indicating whether the zone is active
     * (true) or inactive (false).
     */
    is_active: boolean;
    /**
     * - A list of channels available
     * within this zone.
     */
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    /**
     * - A collection of store IDs linked to this zone.
     */
    store_ids: number[];
    /**
     * - The type of region the zone represents.
     */
    region_type?: string;
    /**
     * - A list of mappings defining
     * relationships between this zone and other entities.
     */
    mapping: ZoneMappingType[];
    /**
     * - The preferred method for
     * assigning stores or products to the zone.
     */
    assignment_preference?: string;
    /**
     * - The total number of stores assigned to this zone.
     */
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
    /**
     * - Unique identifier for the zone.
     */
    zone_id: string;
    /**
     * - Name for the zone.
     */
    name: string;
    /**
     * - A human-readable and unique identifier for the
     * zone, derived from the name.
     */
    slug: string;
    /**
     * - Company id associated with the zone.
     */
    company_id?: number;
    /**
     * - A flag indicating whether the zone is active.
     */
    is_active: boolean;
    /**
     * - Channels for which the zone is active.
     */
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    /**
     * - A list of store identifiers associated with the zone.
     */
    store_ids: number[];
    /**
     * - Type of region that belongs in the zone.
     */
    region_type: string;
    /**
     * - Country to region mapping for the zone.
     */
    mapping: ZoneMappingDetailType[];
    stores_count?: number;
};
/** @returns {CreateZoneData} */
declare function CreateZoneData(): CreateZoneData;
type CreateZoneData = {
    /**
     * - Name of the zone.
     */
    name: string;
    /**
     * - A human-readable and unique identifier for the
     * zone, derived from the name.
     */
    slug: string;
    /**
     * - Unique identifier of the company for which
     * the zone is created.
     */
    company_id: number;
    /**
     * - A flag indicating whether the zone is active.
     */
    is_active: boolean;
    /**
     * - Channels for which the zone is active.
     */
    channels: GetZoneDataViewChannels[];
    /**
     * - A list of store identifiers associated with the zone.
     */
    store_ids: number[];
    /**
     * - Type of region that belongs in the zone.
     */
    region_type: string;
    /**
     * - Country to region mapping for the zone.
     */
    mapping: ZoneMappingType[];
    product?: ZoneProductTypes;
};
/** @returns {ZoneResult} */
declare function ZoneResult(): ZoneResult;
type ZoneResult = {
    status_code?: number;
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
    /**
     * - Custom JSON for internal usage
     */
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
    /**
     * - A list of pincodes.
     */
    pincodes: number[];
    /**
     * - Name of the country.
     */
    country: string;
    /**
     * - Denotes wether to activate or deavtivate pincodes
     * for COD mode of payment.
     */
    action: string;
};
/** @returns {PincodeMopUpdateResult} */
declare function PincodeMopUpdateResult(): PincodeMopUpdateResult;
type PincodeMopUpdateResult = {
    /**
     * - Pincode of the region.
     */
    pincode: number;
    /**
     * - Unique identifier of the sales channel.
     */
    channel_id: string;
    /**
     * - Country name.
     */
    country: string;
    /**
     * - Denotes whether the pincode mode of payment
     * is active or not.
     */
    is_active: boolean;
};
/** @returns {PincodeMOPResult} */
declare function PincodeMOPResult(): PincodeMOPResult;
type PincodeMOPResult = {
    /**
     * - Denotes if the action was successful or not.
     */
    success: boolean;
    /**
     * - Status code for the response.
     */
    status_code: number;
    /**
     * - Unique identifier identifying the perticular request.
     */
    batch_id: string;
    /**
     * - Name of the country.
     */
    country: string;
    /**
     * - Denotes wether to activate or deavtivate pincodes
     * for COD mode of payment.
     */
    action: string;
    /**
     * - List of pincodes.
     */
    pincodes?: number[];
    /**
     * - Details of the
     * updated pincodes.
     */
    updated_pincodes?: PincodeMopUpdateResult[];
};
/** @returns {CommonError} */
declare function CommonError(): CommonError;
type CommonError = {
    /**
     * - Status code for the error.
     */
    status_code?: string;
    error?: any;
    /**
     * - Whether operation was successful.
     */
    success?: string;
};
/** @returns {PincodeMopBulkData} */
declare function PincodeMopBulkData(): PincodeMopBulkData;
type PincodeMopBulkData = {
    /**
     * - Unique identifier for the request.
     */
    batch_id: string;
    /**
     * - CDN url for the uploaded file.
     */
    s3_url: string;
};
/** @returns {PincodeBulkViewResult} */
declare function PincodeBulkViewResult(): PincodeBulkViewResult;
type PincodeBulkViewResult = {
    batch_id: string;
    /**
     * - CDN url for the uploaded file.
     */
    s3_url: string;
};
/** @returns {PincodeCodStatusListingDetails} */
declare function PincodeCodStatusListingDetails(): PincodeCodStatusListingDetails;
type PincodeCodStatusListingDetails = {
    /**
     * - Name of the country.
     */
    country?: string;
    /**
     * - Search based on the active or inactive flag.
     */
    is_active?: boolean;
    /**
     * - Search based on the pincode.
     */
    pincode?: number;
    current?: number;
    page_size?: number;
};
/** @returns {PincodeCodStatusItem} */
declare function PincodeCodStatusItem(): PincodeCodStatusItem;
type PincodeCodStatusItem = {
    /**
     * - Denoted if the pincode is active or not.
     */
    active?: boolean;
    /**
     * - Name of the pincode.
     */
    pincode?: string;
};
/** @returns {PincodeCodStatusListingResult} */
declare function PincodeCodStatusListingResult(): PincodeCodStatusListingResult;
type PincodeCodStatusListingResult = {
    /**
     * - Name of the country.
     */
    country: string;
    /**
     * - List of pincode details.
     */
    data: PincodeCodStatusListingResult[];
    /**
     * - Denotes if the request was successful or not.
     */
    success: boolean;
    /**
     * - List of error object in case of unsuccessful response.
     */
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
    /**
     * - Count of the total active pincodes.
     */
    total_active_pincodes: number;
    /**
     * - Count of the total inactive pincodes.
     */
    total_inactive_pincodes: number;
};
/** @returns {PincodeMopUpdateAuditHistoryDetails} */
declare function PincodeMopUpdateAuditHistoryDetails(): PincodeMopUpdateAuditHistoryDetails;
type PincodeMopUpdateAuditHistoryDetails = {
    /**
     * - Type of the entity requested.
     */
    entity_type: string;
    /**
     * - Name of the file.
     */
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
    /**
     * - Uniquie identifier of the request.
     */
    batch_id?: string;
    /**
     * - Type of the entity requested.
     */
    entity_type?: string;
    /**
     * - URL for the error file.
     */
    error_file_s3_url?: string;
    /**
     * - CDN url for the file uploaded.
     */
    s3_url?: string;
    /**
     * - Name of the file.
     */
    file_name?: string;
    updated_at?: string;
    updated_by?: string;
    /**
     * - Denotes if the request was successfully processed.
     */
    success?: boolean;
};
/** @returns {PincodeMopUpdateAuditHistoryResultData} */
declare function PincodeMopUpdateAuditHistoryResultData(): PincodeMopUpdateAuditHistoryResultData;
type PincodeMopUpdateAuditHistoryResultData = {
    /**
     * - Type of the entity requested.
     */
    entity_type?: string;
    page: PincodeMopUpdateAuditHistoryPaging;
    /**
     * - History records of
     * the uploaded files.
     */
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
/** @returns {CourierAccountUpdateDetails} */
declare function CourierAccountUpdateDetails(): CourierAccountUpdateDetails;
type CourierAccountUpdateDetails = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    scheme_id: string;
    /**
     * - Denotes if the account is of self delivery type.
     */
    is_self_ship: boolean;
    /**
     * - Denotes whether the account is in enabled or disabled stage.
     */
    stage: string;
    /**
     * - Denotes whether it is the seller's own
     * account or not.
     */
    is_own_account: boolean;
};
/** @returns {CourierAccount} */
declare function CourierAccount(): CourierAccount;
type CourierAccount = {
    /**
     * - Company id associated with the account.
     */
    company_id: number;
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Unique identifier of courier partner scheme
     * and company id combination.
     */
    account_id: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    scheme_id: string;
    /**
     * - Denotes if the account is of self delivery type.
     */
    is_self_ship: boolean;
    /**
     * - Denotes whether the account is in enabled or disabled stage.
     */
    stage: string;
    /**
     * - Denotes whether it is the seller's own
     * account or not.
     */
    is_own_account: boolean;
    scheme_rules: CourierPartnerSchemeModel;
};
/** @returns {CourierAccountDetailsBody} */
declare function CourierAccountDetailsBody(): CourierAccountDetailsBody;
type CourierAccountDetailsBody = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Unique identifier of courier partner scheme
     * and company id combination.
     */
    account_id?: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    scheme_id: string;
    /**
     * - Denotes if the account is of self delivery type.
     */
    is_self_ship: boolean;
    /**
     * - Denotes whether the account is in enabled or disabled stage.
     */
    stage: string;
    /**
     * - Denotes whether it is the seller's own
     * account or not.
     */
    is_own_account: boolean;
};
/** @returns {ErrorResult} */
declare function ErrorResult(): ErrorResult;
type ErrorResult = {
    /**
     * - Fields containing the error.
     */
    value: string;
    /**
     * - Description of the error.
     */
    message: string;
    /**
     * - Type of the error.
     */
    type: string;
};
/** @returns {CourierPartnerAccountFailureResult} */
declare function CourierPartnerAccountFailureResult(): CourierPartnerAccountFailureResult;
type CourierPartnerAccountFailureResult = {
    /**
     * - Denotes whether the request is a success or failure.
     */
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
    /**
     * - Unique identifier of courier partner scheme
     * and company id combination.
     */
    account_id: string;
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Denotes if the account is of self delivery type.
     */
    is_self_ship: boolean;
    /**
     * - Denotes the scheme rules associated with
     * the courier partner account.
     */
    scheme_rules?: any;
};
/** @returns {CourierPartnerRuleResult} */
declare function CourierPartnerRuleResult(): CourierPartnerRuleResult;
type CourierPartnerRuleResult = {
    /**
     * - Denotes whether the given courier partner
     * rule is inactive or active.
     */
    is_active: boolean;
    /**
     * - Unique identifier of the sales channel.
     */
    application_id: string;
    /**
     * - Unique identifier of the company.
     */
    company_id: number;
    conditions: CourierPartnerRuleConditions;
    /**
     * - Sort Strategy of the courier partners.
     */
    sort: string[];
    /**
     * - The Fynd account used to create the courier
     * partner rule.
     */
    created_by?: any;
    /**
     * - Unique identifier of the courier partner rule.
     */
    id: string;
    /**
     * - The Fynd account used to modify the
     * courier partner rule.
     */
    modified_by?: any;
    /**
     * - The datetime at which courier partner rule
     * is modified.
     */
    modified_on?: string;
    /**
     * - Name for the courier partner rule.
     */
    name: string;
    /**
     * - The type of the rule.
     */
    type: string;
    cp_list?: CourierPartnerRuleCPListResult[];
};
/** @returns {CourierPartnerList} */
declare function CourierPartnerList(): CourierPartnerList;
type CourierPartnerList = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Unique identifier of courier partner scheme
     * and company id combination.
     */
    account_id: string;
};
/** @returns {LocationRuleValues} */
declare function LocationRuleValues(): LocationRuleValues;
type LocationRuleValues = {
    id: string;
    sub_type?: string;
    name?: string;
    display_name?: string;
    parent_id?: string[];
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
    /**
     * - Denotes whether the given courier partner
     * rule is inactive or active.
     */
    is_active: boolean;
    /**
     * - A list of courier partners.
     */
    cp_list?: CourierPartnerList[];
    /**
     * - Name for the courier partner rule.
     */
    name: string;
    conditions: CourierPartnerRuleConditions;
    /**
     * - Sort Strategy for the courier partners.
     */
    sort: string[];
    /**
     * - Denotes the type of the rule.
     */
    type?: string;
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
    /**
     * - A list for courier partner rules.
     */
    rule_ids: string[];
    /**
     * - Sort strategy for the courier partners.
     */
    sort: string[];
    /**
     * - Depicts if the courier partner
     * rule configuration plan is subscribed by the seller for which mode.
     */
    logistics_as_actual?: string;
    /**
     * - Unique identifier of the company.
     */
    company_id: number;
    /**
     * - Unique identifier of the sales channel.
     */
    application_id?: string;
};
/** @returns {ZoneConfig} */
declare function ZoneConfig(): ZoneConfig;
type ZoneConfig = {
    /**
     * - Serviceability type of the delivery zone.
     */
    serviceability_type?: string;
    /**
     * - Count of active delivery zones associated
     * with the sales channel.
     */
    active_count?: number;
    /**
     * - Count of total delivery zones associated
     * with the sales channel.
     */
    total_count?: number;
};
/** @returns {ApplicationConfig} */
declare function ApplicationConfig(): ApplicationConfig;
type ApplicationConfig = {
    /**
     * - A list of courier partner rules.
     */
    rule_ids?: string[];
    /**
     * - Strategy adopted to sort the courier partners.
     */
    sort?: string[];
    zones?: ZoneConfig;
};
/** @returns {BulkRegionJobDetails} */
declare function BulkRegionJobDetails(): BulkRegionJobDetails;
type BulkRegionJobDetails = {
    /**
     * - CDN path of the uploaded csv file for bulk import.
     */
    file_path?: string;
    /**
     * - Country for which the tat or serviceability is
     * to be imported or exported.
     */
    country: string;
    /**
     * - Denotes the import or export action to be performed.
     */
    action: string;
    /**
     * - Region of the country for which import or export
     * is triggered.
     */
    region: string;
};
/** @returns {BulkRegionResultItemData} */
declare function BulkRegionResultItemData(): BulkRegionResultItemData;
type BulkRegionResultItemData = {
    /**
     * - CDN path of the file which was used for bulk import.
     */
    file_path?: string;
    /**
     * - Count of the failed records.
     */
    failed?: number;
    failed_records?: any[];
    /**
     * - Denotes the import or export action performed.
     */
    action: string;
    /**
     * - Unique id to identify the import or export query.
     */
    batch_id: string;
    /**
     * - Country for which the import or export action is
     * performed.
     */
    country: string;
    /**
     * - Denoted if the import or export was successful
     * or failure.
     */
    success?: number;
    /**
     * - Region of the country for which import or export
     * is triggered.
     */
    region: string;
    /**
     * - Current status of the import or export action performed.
     */
    status: string;
    /**
     * - Count of total records.
     */
    total?: number;
    /**
     * - Path of the error file.
     */
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
    /**
     * - List of rule ids which are active in the application.
     */
    rule_ids?: string[];
    /**
     * - Priority of the store type to be
     * used in the basic prioritization sorting of stores.
     */
    type_based_priority?: string[];
    /**
     * - Priority of the store tags to be
     * used in the basic prioritization sorting of stores.
     */
    tag_based_priority?: string[];
    /**
     * - Priority of explicit
     * stores to be used for sorting of stores.
     */
    store_priority?: StorePrioritySchema[];
    /**
     * - Criteria on which the selected stores should be sorted.
     */
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
    /**
     * - Id of the rule.
     */
    id?: string;
    /**
     * - Name of the rule.
     */
    name?: string;
    /**
     * - Company id for which the rule is created.
     */
    company_id?: number;
    /**
     * - Application id for which the rule is created.
     */
    application_id?: string;
    /**
     * - Priority of the store type to be
     * used in the basic prioritization sorting of stores.
     */
    type_based_priority?: string[];
    /**
     * - Priority of the store tags to be
     * used in the basic prioritization sorting of stores.
     */
    tag_based_priority?: string[];
    /**
     * - Priority of explicit
     * stores to be used for sorting of stores.
     */
    store_priority?: StorePrioritySchema[];
    /**
     * - Criteria on which the selected stores should be sorted.
     */
    sort?: string[];
    conditions?: StoreRuleConditionSchema;
    /**
     * - Denotes whether the rule is active or inactive.
     */
    is_active?: boolean;
};
/** @returns {StorePrioritySchema} */
declare function StorePrioritySchema(): StorePrioritySchema;
type StorePrioritySchema = {
    /**
     * - Id of the store.
     */
    id?: number;
    /**
     * - Name of the store.
     */
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
    /**
     * - Name of the rule.
     */
    name?: string;
    /**
     * - Denotes if the rule is active or not.
     */
    is_active?: boolean;
    conditions?: StoreRuleConditionSchema;
    /**
     * - Priority of the store type to be
     * used in the basic prioritization sorting of stores.
     */
    type_based_priority?: string[];
    /**
     * - Priority of the store tags to be
     * used in the basic prioritization sorting of stores.
     */
    tag_based_priority?: string[];
    /**
     * - Priority of explicit
     * stores to be used for sorting of stores.
     */
    store_priority?: StorePrioritySchema[];
    /**
     * - Criteria on which the selected stores should be sorted.
     */
    sort?: string[];
};
/** @returns {StoreRuleResultSchema} */
declare function StoreRuleResultSchema(): StoreRuleResultSchema;
type StoreRuleResultSchema = {
    /**
     * - Id of the rule created.
     */
    id?: string;
    /**
     * - Name of the rule created.
     */
    name?: string;
    /**
     * - Type of the rule created.
     */
    type?: string;
    /**
     * - Priority of the store type to be
     * used in the rule for sorting of stores.
     */
    type_based_priority?: string[];
    /**
     * - Priority of the store tags to be
     * used in the rule for sorting of stores.
     */
    tag_based_priority?: string[];
    /**
     * - Priority of explicit
     * stores to be used for sorting of stores.
     */
    store_priority?: StorePrioritySchema[];
    /**
     * - Criteria on which the selected stores should be sorted.
     */
    sort?: string[];
    conditions?: StoreRuleConditionSchema;
    /**
     * - Denotes if the rule is active or inactive.
     */
    is_active?: boolean;
};
/** @returns {StoreRuleUpdateResultSchema} */
declare function StoreRuleUpdateResultSchema(): StoreRuleUpdateResultSchema;
type StoreRuleUpdateResultSchema = {
    /**
     * - Id of the rule created.
     */
    id?: string;
    /**
     * - Name of the rule created.
     */
    name?: string;
    /**
     * - Type of the rule created.
     */
    type?: string;
    /**
     * - Priority of the store type to be
     * used in the rule for sorting of stores.
     */
    type_based_priority?: string[];
    /**
     * - Priority of the store tags to be
     * used in the rule for sorting of stores.
     */
    tag_based_priority?: string[];
    /**
     * - Priority of explicit
     * stores to be used for sorting of stores.
     */
    store_priority?: StorePrioritySchema[];
    /**
     * - Criteria on which the selected stores should be sorted.
     */
    sort?: string[];
    conditions?: StoreRuleConditionSchema;
    /**
     * - Denotes if the rule is active or inactive.
     */
    is_active?: boolean;
    /**
     * - Company id for which the rule is created.
     */
    company_id?: number;
    /**
     * - Application id for which the rule is created.
     */
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
    is_reverse_pickup?: boolean;
    is_return: boolean;
    is_installation: boolean;
    is_last_mile: boolean;
};
/** @returns {CourierPartnerSchemeFeatures} */
declare function CourierPartnerSchemeFeatures(): CourierPartnerSchemeFeatures;
type CourierPartnerSchemeFeatures = {
    /**
     * - Indicates if the courier partner offers
     * doorstep quality check services.
     */
    doorstep_qc?: boolean;
    /**
     * - Specifies whether the courier partner supports QR
     * code-based operations.
     */
    qr?: boolean;
    /**
     * - Denotes if the courier partner supports
     * multi-part shipment services.
     */
    mps?: boolean;
    /**
     * - Indicates if the Non-Delivery Report (NDR)
     * feature is supported by the courier partner.
     */
    ndr?: boolean;
    /**
     * - Number of attempts allowed for resolving
     * Non-Delivery Reports (NDR).
     */
    ndr_attempts?: number;
    /**
     * - Specifies if the courier partner
     * handles the transportation of dangerous goods.
     */
    dangerous_goods?: boolean;
    /**
     * - Indicates whether the courier partner
     * manages the shipment of fragile goods.
     */
    fragile_goods?: boolean;
    /**
     * - Indicates if the courier partner
     * handles restricted goods, as per regulatory guidelines.
     */
    restricted_goods?: boolean;
    /**
     * - Denotes if the courier partner
     * provides cold storage facilities for goods.
     */
    cold_storage_goods?: boolean;
    /**
     * - Indicates if the courier partner
     * supports doorstep exchange services.
     */
    doorstep_exchange?: boolean;
    /**
     * - Specifies if the courier partner
     * offers doorstep return services.
     */
    doorstep_return?: boolean;
    /**
     * - Indicates if the courier partner
     * provides product installation services upon delivery.
     */
    product_installation?: boolean;
    /**
     * - Specifies whether the courier
     * partner supports open-box delivery, allowing customers to inspect goods
     * before accepting.
     */
    openbox_delivery?: boolean;
    /**
     * - Describes the type of status updates
     * provided by the courier partner (e.g., real-time, periodic).
     */
    status_updates?: string;
    /**
     * - Indicates if the courier
     * partner supports multiple pickups to a single drop location.
     */
    multi_pick_single_drop?: boolean;
    /**
     * - Indicates whether the courier
     * partner supports single pickup to multiple drop locations.
     */
    single_pick_multi_drop?: boolean;
    /**
     * - Denotes if the courier partner
     * offers services for multiple pickups to multiple drop locations.
     */
    multi_pick_multi_drop?: boolean;
    /**
     * - Specifies if the courier partner requires or
     * supports the generation of e-waybills for shipments.
     */
    ewaybill?: boolean;
    /**
     * - Defines the maximum quantity
     * of items allowed in a quality check shipment.
     */
    qc_shipment_item_quantity?: number;
    /**
     * - Defines the maximum
     * quantity of items allowed in a non-quality check shipment.
     */
    non_qc_shipment_item_quantity?: number;
};
/** @returns {CourierPartnerSchemeModel} */
declare function CourierPartnerSchemeModel(): CourierPartnerSchemeModel;
type CourierPartnerSchemeModel = {
    /**
     * - Name of the scheme.
     */
    name?: string;
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    scheme_id: string;
    volumetric_weight?: ArithmeticOperations;
    weight: ArithmeticOperations;
    /**
     * - Mode of transport associated with the
     * courier partner scheme.
     */
    transport_type: string;
    /**
     * - Serviceable region associated with the courier
     * partner scheme.
     */
    region: string;
    /**
     * - Type of delivery associated with the
     * courier partner scheme.
     */
    delivery_type: string;
    /**
     * - Mode of payment associated with the
     * courier partner scheme.
     */
    payment_mode: string[];
    /**
     * - Indicates if the courier partner scheme is
     * currently active or inactive.
     */
    stage: string;
    feature: CourierPartnerSchemeFeatures;
};
/** @returns {CourierAccountResult} */
declare function CourierAccountResult(): CourierAccountResult;
type CourierAccountResult = {
    /**
     * - Company id associated with the account.
     */
    company_id: number;
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id?: string;
    /**
     * - Unique identifier of courier partner scheme
     * and company id combination.
     */
    account_id: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    scheme_id: string;
    /**
     * - Denotes if the account is of self delivery type.
     */
    is_self_ship: boolean;
    /**
     * - Denotes whether the account is in enabled or disabled stage.
     */
    stage: string;
    /**
     * - Denotes whether it is the seller's own
     * account or not.
     */
    is_own_account: boolean;
    scheme_rules?: CourierPartnerSchemeModel;
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
    /**
     * - Name of the packaging material.
     */
    name: string;
    /**
     * - Width of the packaging material dimentions in centimeter.
     */
    width: number;
    /**
     * - Height of the packaging material dimentions in centimeter.
     */
    height: number;
    /**
     * - Length of the packaging material dimentions in centimeter.
     */
    length: number;
    /**
     * - Product group rules associated
     * with the packaging.
     */
    rules?: PackageMaterialRule[];
    /**
     * - Store ids where the packaging is avaiable.
     */
    store_ids: number[];
    /**
     * - Package's weight in gram.
     */
    weight: number;
    /**
     * - Error Rate associated with the packaging dimensions.
     */
    error_rate: number;
    /**
     * - Type of package material.
     */
    package_type: string;
    /**
     * - Physical size of the packaging.
     */
    size: string;
    /**
     * - Image urls associated with the packaging material.
     */
    media?: string[];
    /**
     * - Sales channel where packaging is applicable.
     */
    channels: Channel[];
    /**
     * - Denotes if the track of the inventory
     * should be kept.
     */
    track_inventory?: boolean;
    /**
     * - Current status of the packaging material, if it
     * is active or inactive.
     */
    status: string;
    /**
     * - Maximum weight holding capacity.
     */
    max_weight?: number;
    /**
     * - Volumetric weight that a packaging
     * material can carry.
     */
    package_vol_weight?: number;
    /**
     * - Denotes whether the volumetric weight
     * should be auto calculated or not.
     */
    auto_calculate?: boolean;
};
/** @returns {PackageMaterialResult} */
declare function PackageMaterialResult(): PackageMaterialResult;
type PackageMaterialResult = {
    /**
     * - Name of the packaging material.
     */
    name: string;
    /**
     * - Id of the packaging material.
     */
    id?: string;
    /**
     * - Unique identifier of an item associated with
     * the packaging material.
     */
    item_id?: number;
    /**
     * - Company id associated with the packaging material.
     */
    company_id?: number;
    /**
     * - Width of the packaging material dimentions in centimeter.
     */
    width: number;
    /**
     * - Height of the packaging material dimentions in centimeter.
     */
    height: number;
    /**
     * - Length of the packaging material dimentions in centimeter.
     */
    length: number;
    /**
     * - Product group rules associated
     * with the packaging.
     */
    rules?: PackageMaterialRule[];
    /**
     * - Store ids where the packaging is avaiable.
     */
    store_ids: number[];
    /**
     * - Package's weight in gram.
     */
    weight: number;
    /**
     * - Error Rate associated with the packaging dimensions.
     */
    error_rate: number;
    /**
     * - Type of package material.
     */
    package_type: string;
    /**
     * - Physical size of the packaging.
     */
    size: string;
    /**
     * - Image urls associated with the packaging material.
     */
    media?: string[];
    /**
     * - Sales channel where packaging is applicable.
     */
    channels: Channel[];
    /**
     * - Denotes if the track of the inventory
     * should be kept.
     */
    track_inventory?: boolean;
    /**
     * - Current status of the packaging material, if it
     * is active or inactive.
     */
    status: string;
    /**
     * - Maximum weight holding capacity.
     */
    max_weight?: number;
    /**
     * - Volumetric weight that a packaging
     * material can carry.
     */
    package_vol_weight?: number;
    /**
     * - Denotes whether the volumetric weight
     * should be auto calculated or not.
     */
    auto_calculate?: boolean;
};
/** @returns {PackageMaterialRule} */
declare function PackageMaterialRule(): PackageMaterialRule;
type PackageMaterialRule = {
    /**
     * - Unique identifier of the package rule.
     */
    rule_id?: string;
    quantity?: PackageMaterialRuleQuantity;
    /**
     * - Volumetric weight in gram.
     */
    weight?: number;
};
/** @returns {PackageRule} */
declare function PackageRule(): PackageRule;
type PackageRule = {
    /**
     * - Name of the package rule.
     */
    name: string;
    /**
     * - Unique identifier of the company.
     */
    company_id: number;
    /**
     * - Type of the rule.
     */
    type: string;
    /**
     * - Denotes if the rule is active or inactive.
     */
    is_active?: boolean;
    product_tag?: PackageRuleProductTag;
    product_id?: PackageRuleProduct;
    category_id?: PackageRuleCategory;
};
/** @returns {PackageRuleResult} */
declare function PackageRuleResult(): PackageRuleResult;
type PackageRuleResult = {
    /**
     * - Unique id of a package rule.
     */
    id?: string;
    /**
     * - Name of a package rule.
     */
    name: string;
    /**
     * - Unique identifier of a company associated
     * with the package rule.
     */
    company_id: number;
    /**
     * - Type of the rule created.
     */
    type: string;
    /**
     * - Denotes if the rule is active or inactive.
     */
    is_active?: boolean;
    product_tag?: PackageRuleProductTag;
    product_id?: PackageRuleProduct;
    category_id?: PackageRuleCategory;
};
/** @returns {Channel} */
declare function Channel(): Channel;
type Channel = {
    /**
     * - Type of the channel.
     */
    type?: string;
    /**
     * - Unique identifier of the channel.
     */
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
    /**
     * - Minimum product's quantity that a packaging can contain.
     */
    min?: number;
    /**
     * - Maximum product's quantity that a packaging can contain.
     */
    max?: number;
};
/** @returns {RulePriorityDetails} */
declare function RulePriorityDetails(): RulePriorityDetails;
type RulePriorityDetails = {
    /**
     * - Rule id whose priority needs to be changed.
     */
    rule_id: string;
    /**
     * - New priority of the rule.
     */
    priority: number;
};
/** @returns {RulePriorityResult} */
declare function RulePriorityResult(): RulePriorityResult;
type RulePriorityResult = {
    /**
     * - Denotes if the priority of the rule is
     * changes successfully or not.
     */
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
/** @returns {CourierPartnerSchemeV2Features} */
declare function CourierPartnerSchemeV2Features(): CourierPartnerSchemeV2Features;
type CourierPartnerSchemeV2Features = {
    /**
     * - Indicates if the courier partner offers
     * doorstep quality check services.
     */
    doorstep_qc?: boolean;
    /**
     * - Specifies whether the courier partner supports QR
     * code-based operations.
     */
    qr?: boolean;
    /**
     * - Denotes if the courier partner supports
     * multi-part shipment services.
     */
    mps?: boolean;
    /**
     * - Indicates if the Non-Delivery Report (NDR)
     * feature is supported by the courier partner.
     */
    ndr?: boolean;
    /**
     * - Specifies if the courier partner
     * handles the transportation of dangerous goods.
     */
    dangerous_goods?: boolean;
    /**
     * - Indicates whether the courier partner
     * manages the shipment of fragile goods.
     */
    fragile_goods?: boolean;
    /**
     * - Indicates if the courier partner
     * handles restricted goods, as per regulatory guidelines.
     */
    restricted_goods?: boolean;
    /**
     * - Denotes if the courier partner
     * provides cold storage facilities for goods.
     */
    cold_storage_goods?: boolean;
    /**
     * - Indicates if the courier partner
     * supports doorstep exchange services.
     */
    doorstep_exchange?: boolean;
    /**
     * - Specifies if the courier partner
     * offers doorstep return services.
     */
    doorstep_return?: boolean;
    /**
     * - Indicates if the courier partner
     * provides product installation services upon delivery.
     */
    product_installation?: boolean;
    /**
     * - Specifies whether the courier
     * partner supports open-box delivery, allowing customers to inspect goods
     * before accepting.
     */
    openbox_delivery?: boolean;
    /**
     * - Indicates if the courier
     * partner supports multiple pickups to a single drop location.
     */
    multi_pick_single_drop?: boolean;
    /**
     * - Indicates whether the courier
     * partner supports single pickup to multiple drop locations.
     */
    single_pick_multi_drop?: boolean;
    /**
     * - Denotes if the courier partner
     * offers services for multiple pickups to multiple drop locations.
     */
    multi_pick_multi_drop?: boolean;
    /**
     * - Specifies if the courier partner requires or
     * supports the generation of e-waybills for shipments.
     */
    ewaybill?: boolean;
};
/** @returns {CourierPartnerSchemeV2DetailsModel} */
declare function CourierPartnerSchemeV2DetailsModel(): CourierPartnerSchemeV2DetailsModel;
type CourierPartnerSchemeV2DetailsModel = {
    /**
     * - Unique identifier of courier partner extension
     */
    extension_id: string;
    scheme_id?: string;
    name: string;
    weight: ArithmeticOperations;
    volumetric_weight?: ArithmeticOperations;
    transport_type: string;
    region: string;
    delivery_type: string;
    payment_mode: string[];
    stage: string;
    /**
     * - Describes the type of status updates
     * provided by the courier partner (e.g., real-time, periodic).
     */
    status_updates?: string;
    /**
     * - Indicates if the Non-Delivery Report
     * (NDR) feature is supported by the courier partner.
     */
    ndr_attempts?: number;
    /**
     * - Defines the maximum quantity
     * of items allowed in a quality check shipment.
     */
    qc_shipment_item_quantity?: number;
    /**
     * - Defines the maximum
     * quantity of items allowed in a non-quality check shipment.
     */
    non_qc_shipment_item_quantity?: number;
    feature: CourierPartnerSchemeV2Features;
};
/** @returns {CourierPartnerV2SchemeModel} */
declare function CourierPartnerV2SchemeModel(): CourierPartnerV2SchemeModel;
type CourierPartnerV2SchemeModel = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    scheme_id: string;
    /**
     * - Unique identifier of company.
     */
    company_id?: string;
    /**
     * - Name of the scheme.
     */
    name: string;
    weight: ArithmeticOperations;
    volumetric_weight?: ArithmeticOperations;
    /**
     * - Mode of transport associated with the
     * courier partner scheme.
     */
    transport_type: string;
    /**
     * - Serviceable region associated with the courier
     * partner scheme.
     */
    region: string;
    /**
     * - Type of delivery associated with the
     * courier partner scheme.
     */
    delivery_type: string;
    /**
     * - Mode of payment associated with the
     * courier partner scheme.
     */
    payment_mode: string[];
    /**
     * - Indicates if the courier partner scheme is
     * currently active or inactive.
     */
    stage: string;
    /**
     * - Describes the type of status updates
     * provided by the courier partner (e.g., real-time, periodic).
     */
    status_updates?: string;
    /**
     * - Indicates if the Non-Delivery Report
     * (NDR) feature is supported by the courier partner.
     */
    ndr_attempts?: number;
    /**
     * - Defines the maximum quantity
     * of items allowed in a quality check shipment.
     */
    qc_shipment_item_quantity?: number;
    /**
     * - Defines the maximum
     * quantity of items allowed in a non-quality check shipment.
     */
    non_qc_shipment_item_quantity?: number;
    feature: CourierPartnerSchemeV2Features;
};
/** @returns {CourierPartnerSchemeV2UpdateDetails} */
declare function CourierPartnerSchemeV2UpdateDetails(): CourierPartnerSchemeV2UpdateDetails;
type CourierPartnerSchemeV2UpdateDetails = {
    name: string;
    weight: ArithmeticOperations;
    volumetric_weight?: ArithmeticOperations;
    transport_type: string;
    region: string;
    delivery_type: string;
    payment_mode: string[];
    stage: string;
    /**
     * - Describes the type of status updates
     * provided by the courier partner (e.g., real-time, periodic).
     */
    status_updates?: string;
    /**
     * - Indicates if the Non-Delivery Report
     * (NDR) feature is supported by the courier partner.
     */
    ndr_attempts?: number;
    /**
     * - Defines the maximum quantity
     * of items allowed in a quality check shipment.
     */
    qc_shipment_item_quantity?: number;
    /**
     * - Defines the maximum
     * quantity of items allowed in a non-quality check shipment.
     */
    non_qc_shipment_item_quantity?: number;
    feature: CourierPartnerSchemeV2Features;
};
/** @returns {courierPartnerSchemeV2List} */
declare function courierPartnerSchemeV2List(): courierPartnerSchemeV2List;
type courierPartnerSchemeV2List = {
    /**
     * - List of courier partner schemes
     */
    items: CourierPartnerV2SchemeModel[];
    page: Page;
};
/** @returns {BulkRegionServiceabilityTatDetails} */
declare function BulkRegionServiceabilityTatDetails(): BulkRegionServiceabilityTatDetails;
type BulkRegionServiceabilityTatDetails = {
    country: string;
    region: string;
    type: string;
};
/** @returns {BulkRegionServiceabilityTatResultItemData} */
declare function BulkRegionServiceabilityTatResultItemData(): BulkRegionServiceabilityTatResultItemData;
type BulkRegionServiceabilityTatResultItemData = {
    /**
     * - Name of the country.
     */
    country?: string;
    /**
     * - Name of the region for which the
     * tat/serviceability file needs to be downloaded.
     */
    region?: string;
    /**
     * - Denotes the type of data.
     */
    type?: string;
    /**
     * - Unique identifier identifying the perticular request.
     */
    batch_id?: string;
    /**
     * - Current status of the request.
     */
    status?: string;
    /**
     * - Information of records which failed
     */
    failed_records?: any[];
    /**
     * - CDN path of the file.
     */
    file_path?: string;
};
/** @returns {BulkRegionServiceabilityTatResult} */
declare function BulkRegionServiceabilityTatResult(): BulkRegionServiceabilityTatResult;
type BulkRegionServiceabilityTatResult = {
    items?: BulkRegionServiceabilityTatResultItemData[];
    page?: Page;
};
/** @returns {HierarchyItems} */
declare function HierarchyItems(): HierarchyItems;
type HierarchyItems = {
    display_name?: string;
    slug?: string;
};
/** @returns {GetCountriesItems} */
declare function GetCountriesItems(): GetCountriesItems;
type GetCountriesItems = {
    id?: string;
    name?: string;
    iso2?: string;
    iso3?: string;
    timezones?: string[];
    hierarchy?: HierarchyItems[];
    phone_code?: string;
    currency?: string;
    type?: string;
    latitude?: string;
    longitude?: string;
    display_name?: string;
    has_next_hierarchy?: boolean;
};
/** @returns {GetCountries} */
declare function GetCountries(): GetCountries;
type GetCountries = {
    items: GetCountriesItems[];
    page: Page;
};
