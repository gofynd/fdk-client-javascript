const Joi = require("joi");

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
 * @property {string} stage - Denotes whether the courier partner scheme is in
 *   enabled or disabled stage.
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

class ServiceabilityPlatformModel {
  /** @returns {UpdateZoneConfigDetails} */
  static UpdateZoneConfigDetails() {
    return Joi.object({
      serviceability_type: Joi.string().allow(""),
    });
  }

  /** @returns {ServiceabilityErrorResult} */
  static ServiceabilityErrorResult() {
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

  /** @returns {ApplicationServiceabilityConfigResult} */
  static ApplicationServiceabilityConfigResult() {
    return Joi.object({
      error: ServiceabilityPlatformModel.ServiceabilityErrorResult(),
      data: ServiceabilityPlatformModel.ApplicationServiceabilityConfig(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {EntityRegionView_Details} */
  static EntityRegionView_Details() {
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

  /** @returns {getAppRegionZonesResult} */
  static getAppRegionZonesResult() {
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

  /** @returns {EntityRegionView_Result} */
  static EntityRegionView_Result() {
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
      store_ids: Joi.array().items(Joi.number()),
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewChannels())
        .required(),
    });
  }

  /** @returns {ListViewResult} */
  static ListViewResult() {
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

  /** @returns {CompanyStoreView_Result} */
  static CompanyStoreView_Result() {
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

  /** @returns {ZoneMappingDetailType} */
  static ZoneMappingDetailType() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      regions: Joi.array().items(
        ServiceabilityPlatformModel.ZoneMappingRegions()
      ),
    });
  }

  /** @returns {ZoneMappingType} */
  static ZoneMappingType() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      regions: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {ZoneMappingRegions} */
  static ZoneMappingRegions() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      parent_id: Joi.array().items(Joi.string().allow("")),
      parent_uid: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
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
    });
  }

  /** @returns {ZoneUpdateDetails} */
  static ZoneUpdateDetails() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),
      data: ServiceabilityPlatformModel.UpdateZoneData().required(),
    });
  }

  /** @returns {ZoneSuccessResult} */
  static ZoneSuccessResult() {
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

  /** @returns {GetSingleZoneDataViewResult} */
  static GetSingleZoneDataViewResult() {
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
      channels: Joi.array()
        .items(ServiceabilityPlatformModel.GetZoneDataViewChannels())
        .required(),
      product: ServiceabilityPlatformModel.ZoneProductTypes().required(),
      store_ids: Joi.array().items(Joi.number()).required(),
      region_type: Joi.string().allow("").required(),
      mapping: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneMappingDetailType())
        .required(),
      stores_count: Joi.number(),
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
      product: ServiceabilityPlatformModel.ZoneProductTypes(),
    });
  }

  /** @returns {ZoneResult} */
  static ZoneResult() {
    return Joi.object({
      status_code: Joi.number(),
      zone_id: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {GetZoneFromPincodeViewDetails} */
  static GetZoneFromPincodeViewDetails() {
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
    });
  }

  /** @returns {GetZoneFromPincodeViewResult} */
  static GetZoneFromPincodeViewResult() {
    return Joi.object({
      serviceability_type: Joi.string().allow("").required(),
      zones: Joi.array().items(ServiceabilityPlatformModel.Zone()).required(),
    });
  }

  /** @returns {GetZoneFromApplicationIdViewResult} */
  static GetZoneFromApplicationIdViewResult() {
    return Joi.object({
      page: Joi.array()
        .items(ServiceabilityPlatformModel.ZoneDataItem())
        .required(),
      items: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewItems())
        .required(),
    });
  }

  /** @returns {ServiceabilityPageResult} */
  static ServiceabilityPageResult() {
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

  /** @returns {ManagerResult} */
  static ManagerResult() {
    return Joi.object({
      email: Joi.string().allow(""),
      mobile_no: ServiceabilityPlatformModel.MobileNo(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ModifiedByResult} */
  static ModifiedByResult() {
    return Joi.object({
      username: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {IntegrationTypeResult} */
  static IntegrationTypeResult() {
    return Joi.object({
      inventory: Joi.string().allow(""),
      order: Joi.string().allow(""),
    });
  }

  /** @returns {ProductReturnConfigResult} */
  static ProductReturnConfigResult() {
    return Joi.object({
      on_same_store: Joi.boolean(),
    });
  }

  /** @returns {ContactNumberResult} */
  static ContactNumberResult() {
    return Joi.object({
      number: Joi.string().allow(""),
      country_code: Joi.number(),
    });
  }

  /** @returns {AddressResult} */
  static AddressResult() {
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

  /** @returns {CreatedByResult} */
  static CreatedByResult() {
    return Joi.object({
      username: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {EwayBillResult} */
  static EwayBillResult() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {EinvoiceResult} */
  static EinvoiceResult() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {GstCredentialsResult} */
  static GstCredentialsResult() {
    return Joi.object({
      e_waybill: ServiceabilityPlatformModel.EwayBillResult(),
      e_invoice: ServiceabilityPlatformModel.EinvoiceResult(),
    });
  }

  /** @returns {WarningsResult} */
  static WarningsResult() {
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

  /** @returns {TimmingResult} */
  static TimmingResult() {
    return Joi.object({
      open: Joi.boolean(),
      weekday: Joi.string().allow(""),
      closing: ServiceabilityPlatformModel.OpeningClosing(),
      opening: ServiceabilityPlatformModel.OpeningClosing(),
    });
  }

  /** @returns {DocumentsResult} */
  static DocumentsResult() {
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

  /** @returns {LogisticsResult} */
  static LogisticsResult() {
    return Joi.object({
      override: Joi.boolean(),
      dp: ServiceabilityPlatformModel.Dp(),
    });
  }

  /** @returns {ItemResult} */
  static ItemResult() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      manager: ServiceabilityPlatformModel.ManagerResult(),
      modified_by: ServiceabilityPlatformModel.ModifiedByResult(),
      integration_type: ServiceabilityPlatformModel.IntegrationTypeResult(),
      verified_on: Joi.string().allow(""),
      product_return_config: ServiceabilityPlatformModel.ProductReturnConfigResult(),
      contact_numbers: Joi.array().items(
        ServiceabilityPlatformModel.ContactNumberResult()
      ),
      verified_by: ServiceabilityPlatformModel.ModifiedByResult(),
      stage: Joi.string().allow(""),
      address: ServiceabilityPlatformModel.AddressResult(),
      modified_on: Joi.string().allow(""),
      created_by: ServiceabilityPlatformModel.CreatedByResult(),
      gst_credentials: ServiceabilityPlatformModel.GstCredentialsResult(),
      display_name: Joi.string().allow(""),
      company_id: Joi.number(),
      uid: Joi.number(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      code: Joi.string().allow(""),
      warnings: ServiceabilityPlatformModel.WarningsResult(),
      name: Joi.string().allow(""),
      timing: Joi.array().items(ServiceabilityPlatformModel.TimmingResult()),
      documents: Joi.array().items(
        ServiceabilityPlatformModel.DocumentsResult()
      ),
      store_type: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      company: Joi.number(),
      _cls: Joi.string().allow(""),
      logistics: ServiceabilityPlatformModel.LogisticsResult(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {GetStoresViewResult} */
  static GetStoresViewResult() {
    return Joi.object({
      page: ServiceabilityPlatformModel.ServiceabilityPageResult().required(),
      items: Joi.array().items(ServiceabilityPlatformModel.ItemResult()),
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

  /** @returns {PincodeMopUpdateResult} */
  static PincodeMopUpdateResult() {
    return Joi.object({
      pincode: Joi.number().required(),
      channel_id: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
    });
  }

  /** @returns {PincodeMOPResult} */
  static PincodeMOPResult() {
    return Joi.object({
      success: Joi.boolean().required(),
      status_code: Joi.number().required(),
      batch_id: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
      pincodes: Joi.array().items(Joi.number()),
      updated_pincodes: Joi.array().items(
        ServiceabilityPlatformModel.PincodeMopUpdateResult()
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

  /** @returns {PincodeBulkViewResult} */
  static PincodeBulkViewResult() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      s3_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {PincodeCodStatusListingDetails} */
  static PincodeCodStatusListingDetails() {
    return Joi.object({
      country: Joi.string().allow(""),
      is_active: Joi.boolean(),
      pincode: Joi.number().allow(null),
      current: Joi.number(),
      page_size: Joi.number(),
    });
  }

  /** @returns {PincodeCodStatusItem} */
  static PincodeCodStatusItem() {
    return Joi.object({
      active: Joi.boolean(),
      pincode: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeCodStatusListingResult} */
  static PincodeCodStatusListingResult() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      data: Joi.array()
        .items(Joi.link("#PincodeCodStatusListingResult"))
        .required(),
      success: Joi.boolean().required(),
      errors: Joi.array().items(ServiceabilityPlatformModel.Error()),
      page: ServiceabilityPlatformModel.PincodeCodStatusListingPage().required(),
      summary: ServiceabilityPlatformModel.PincodeCodStatusListingSummary().required(),
    }).id("PincodeCodStatusListingResult");
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

  /** @returns {PincodeMopUpdateAuditHistoryDetails} */
  static PincodeMopUpdateAuditHistoryDetails() {
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

  /** @returns {PincodeMopUpdateAuditHistoryResult} */
  static PincodeMopUpdateAuditHistoryResult() {
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

  /** @returns {PincodeMopUpdateAuditHistoryResultData} */
  static PincodeMopUpdateAuditHistoryResultData() {
    return Joi.object({
      entity_type: Joi.string().allow(""),
      page: ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryPaging().required(),
      data: Joi.array()
        .items(ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResult())
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

  /** @returns {CourierAccountUpdateDetails} */
  static CourierAccountUpdateDetails() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      stage: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
    });
  }

  /** @returns {CourierAccount} */
  static CourierAccount() {
    return Joi.object({
      company_id: Joi.number().required(),
      extension_id: Joi.string().allow("").required(),
      account_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      stage: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
      scheme_rules: ServiceabilityPlatformModel.CourierPartnerSchemeModel().required(),
    });
  }

  /** @returns {CourierAccountDetailsBody} */
  static CourierAccountDetailsBody() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      account_id: Joi.string().allow(""),
      scheme_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      stage: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
    });
  }

  /** @returns {ErrorResult} */
  static ErrorResult() {
    return Joi.object({
      value: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {CourierPartnerAccountFailureResult} */
  static CourierPartnerAccountFailureResult() {
    return Joi.object({
      success: Joi.boolean().required(),
      error: Joi.array()
        .items(ServiceabilityPlatformModel.ErrorResult())
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
    });
  }

  /** @returns {CourierPartnerRuleCPListResult} */
  static CourierPartnerRuleCPListResult() {
    return Joi.object({
      account_id: Joi.string().allow("").required(),
      extension_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      scheme_rules: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {CourierPartnerRuleResult} */
  static CourierPartnerRuleResult() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      application_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      conditions: ServiceabilityPlatformModel.CourierPartnerRuleConditions().required(),
      sort: Joi.array().items(Joi.string().allow("")).required(),
      created_by: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      id: Joi.string().allow("").required(),
      modified_by: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      modified_on: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      cp_list: Joi.array().items(
        ServiceabilityPlatformModel.CourierPartnerRuleCPListResult()
      ),
    });
  }

  /** @returns {CourierPartnerList} */
  static CourierPartnerList() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      account_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {LocationRuleValues} */
  static LocationRuleValues() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      sub_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      parent_id: Joi.array().items(Joi.string().allow("")),
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
      sort: Joi.array().items(Joi.string().allow("")).required(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {FailureResult} */
  static FailureResult() {
    return Joi.object({
      success: Joi.boolean().required(),
      error: Joi.array()
        .items(ServiceabilityPlatformModel.ErrorResult())
        .required(),
    });
  }

  /** @returns {CourierPartnerRulesListResult} */
  static CourierPartnerRulesListResult() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.CourierPartnerRuleResult())
        .required(),
      page: ServiceabilityPlatformModel.Page().required(),
    });
  }

  /** @returns {ShipmentsArticles} */
  static ShipmentsArticles() {
    return Joi.object({
      item_id: Joi.number(),
      category_id: Joi.number(),
      brand_id: Joi.number(),
      department_id: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ShipmentDimension} */
  static ShipmentDimension() {
    return Joi.object({
      height: Joi.number().required(),
      length: Joi.number().required(),
      width: Joi.number().required(),
    });
  }

  /** @returns {Shipments} */
  static Shipments() {
    return Joi.object({
      id: Joi.string().allow(""),
      location_id: Joi.number(),
      location_tags: Joi.array().items(Joi.string().allow("")),
      shipment_weight: Joi.number(),
      shipment_volumetric_weight: Joi.number(),
      shipment_cost: Joi.number(),
      shipment_dimension: ServiceabilityPlatformModel.ShipmentDimension(),
      courier_partner_schemes: Joi.array().items(Joi.string().allow("")),
      articles: Joi.array().items(
        ServiceabilityPlatformModel.ShipmentsArticles()
      ),
    });
  }

  /** @returns {ShipmentCourierPartnerDetails} */
  static ShipmentCourierPartnerDetails() {
    return Joi.object({
      from_location: ServiceabilityPlatformModel.ShipmentsCourierPartnersServiceability().required(),
      to_location: ServiceabilityPlatformModel.ShipmentsCourierPartnersServiceability().required(),
      shipments: Joi.array().items(ServiceabilityPlatformModel.Shipments()),
      journey: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
    });
  }

  /** @returns {CourierPartnerPromise} */
  static CourierPartnerPromise() {
    return Joi.object({
      min: Joi.string().allow("").required(),
      max: Joi.string().allow("").required(),
    });
  }

  /** @returns {CourierPartners} */
  static CourierPartners() {
    return Joi.object({
      extension_id: Joi.string().allow(""),
      scheme_id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      delivery_promise: ServiceabilityPlatformModel.CourierPartnerPromise(),
    });
  }

  /** @returns {ShipmentCourierPartners} */
  static ShipmentCourierPartners() {
    return Joi.object({
      id: Joi.string().allow(""),
      courier_partners: Joi.array().items(
        ServiceabilityPlatformModel.CourierPartners()
      ),
    });
  }

  /** @returns {ShipmentCourierPartnerResult} */
  static ShipmentCourierPartnerResult() {
    return Joi.object({
      courier_partners: Joi.array().items(
        ServiceabilityPlatformModel.CourierPartners()
      ),
      shipments: Joi.array().items(
        ServiceabilityPlatformModel.ShipmentCourierPartners()
      ),
    });
  }

  /** @returns {ShipmentsCourierPartnersServiceability} */
  static ShipmentsCourierPartnersServiceability() {
    return Joi.object({
      pincode: Joi.string().allow(""),
      sector_code: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      city_code: Joi.string().allow(""),
      country_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {CompanyConfig} */
  static CompanyConfig() {
    return Joi.object({
      rule_ids: Joi.array().items(Joi.string().allow("")).required(),
      sort: Joi.array().items(Joi.string().allow("")).required(),
      logistics_as_actual: Joi.string().allow(""),
      company_id: Joi.number().required(),
      application_id: Joi.string().allow(""),
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

  /** @returns {ApplicationConfig} */
  static ApplicationConfig() {
    return Joi.object({
      rule_ids: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")),
      zones: ServiceabilityPlatformModel.ZoneConfig(),
    });
  }

  /** @returns {BulkRegionJobDetails} */
  static BulkRegionJobDetails() {
    return Joi.object({
      file_path: Joi.string().allow("").allow(null),
      country: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkRegionResultItemData} */
  static BulkRegionResultItemData() {
    return Joi.object({
      file_path: Joi.string().allow(""),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
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

  /** @returns {BulkRegionResult} */
  static BulkRegionResult() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.BulkRegionResultItemData())
        .required(),
      page: ServiceabilityPlatformModel.Page().required(),
    });
  }

  /** @returns {SelfShipResult} */
  static SelfShipResult() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      tat: Joi.number().required(),
    });
  }

  /** @returns {ApplicationSelfShipConfig} */
  static ApplicationSelfShipConfig() {
    return Joi.object({
      self_ship: ServiceabilityPlatformModel.SelfShipResult(),
    });
  }

  /** @returns {ApplicationSelfShipConfigResult} */
  static ApplicationSelfShipConfigResult() {
    return Joi.object({
      error: ServiceabilityPlatformModel.ServiceabilityErrorResult(),
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

  /** @returns {GetStoreRulesApiResult} */
  static GetStoreRulesApiResult() {
    return Joi.object({
      items: Joi.array().items(
        ServiceabilityPlatformModel.StoreRuleDataSchema()
      ),
      page: ServiceabilityPlatformModel.Page(),
    });
  }

  /** @returns {CreateStoreRuleDetailsSchema} */
  static CreateStoreRuleDetailsSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      is_active: Joi.boolean(),
      conditions: ServiceabilityPlatformModel.StoreRuleConditionSchema(),
      type_based_priority: Joi.array().items(Joi.string().allow("")),
      tag_based_priority: Joi.array().items(Joi.string().allow("")),
      store_priority: Joi.array().items(
        ServiceabilityPlatformModel.StorePrioritySchema()
      ),
      sort: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {StoreRuleResultSchema} */
  static StoreRuleResultSchema() {
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
      conditions: ServiceabilityPlatformModel.StoreRuleConditionSchema(),
      is_active: Joi.boolean(),
    });
  }

  /** @returns {StoreRuleUpdateResultSchema} */
  static StoreRuleUpdateResultSchema() {
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
      pickup_cutoff: Joi.string().allow("").allow(null),
      route_code: Joi.string().allow("").allow(null),
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
      name: Joi.string().allow(""),
      extension_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      volumetric_weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      weight: ServiceabilityPlatformModel.ArithmeticOperations().required(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      feature: ServiceabilityPlatformModel.CourierPartnerSchemeFeatures().required(),
    });
  }

  /** @returns {CourierAccountResult} */
  static CourierAccountResult() {
    return Joi.object({
      company_id: Joi.number().required(),
      extension_id: Joi.string().allow(""),
      account_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      stage: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
      scheme_rules: ServiceabilityPlatformModel.CourierPartnerSchemeModel(),
    });
  }

  /** @returns {CompanyCourierPartnerAccountListResult} */
  static CompanyCourierPartnerAccountListResult() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.CourierAccountResult())
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

  /** @returns {PackageMaterialResult} */
  static PackageMaterialResult() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
      item_id: Joi.number(),
      company_id: Joi.number(),
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

  /** @returns {PackageRuleResult} */
  static PackageRuleResult() {
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
      items: ServiceabilityPlatformModel.PackageRuleResult(),
      page: ServiceabilityPlatformModel.Page(),
    });
  }

  /** @returns {PackageMaterialList} */
  static PackageMaterialList() {
    return Joi.object({
      items: ServiceabilityPlatformModel.PackageMaterialResult(),
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

  /** @returns {RulePriorityDetails} */
  static RulePriorityDetails() {
    return Joi.object({
      rule_id: Joi.string().allow("").required(),
      priority: Joi.number().required(),
    });
  }

  /** @returns {RulePriorityResult} */
  static RulePriorityResult() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {ArticleAssignment} */
  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
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

  /** @returns {OptimalLocationsArticles} */
  static OptimalLocationsArticles() {
    return Joi.object({
      item_id: Joi.number().required(),
      size: Joi.string().allow("").required(),
      quantity: Joi.number().required(),
      group_id: Joi.string().allow(""),
      is_primary_item: Joi.boolean(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      article_assignment: ServiceabilityPlatformModel.ArticleAssignment().required(),
      ignore_locations: Joi.array().items(Joi.number()).required(),
      assign_locations: Joi.array().items(Joi.number()).required(),
      seller_id: Joi.number(),
    });
  }

  /** @returns {OptimlLocationsDetailsSchema} */
  static OptimlLocationsDetailsSchema() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      channel_type: Joi.string().allow("").required(),
      channel_identifier: Joi.string().allow(""),
      to_serviceability: ServiceabilityPlatformModel.LocationDetailsServiceability().required(),
      articles: Joi.array().items(
        ServiceabilityPlatformModel.OptimalLocationsArticles()
      ),
    });
  }

  /** @returns {OptimalLocationArticlesResult} */
  static OptimalLocationArticlesResult() {
    return Joi.object({
      item_id: Joi.number().required(),
      size: Joi.string().allow("").required(),
      quantity: Joi.number().required(),
      group_id: Joi.string().allow(""),
      is_primary_item: Joi.boolean(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {OptimalLocationAssignedStoresResult} */
  static OptimalLocationAssignedStoresResult() {
    return Joi.object({
      store_id: Joi.number().required(),
      articles: Joi.array()
        .items(ServiceabilityPlatformModel.OptimalLocationArticlesResult())
        .required(),
    });
  }

  /** @returns {OptimalLocationsResult} */
  static OptimalLocationsResult() {
    return Joi.object({
      assigned_stores: Joi.array()
        .items(
          ServiceabilityPlatformModel.OptimalLocationAssignedStoresResult()
        )
        .required(),
      faulty_articles: Joi.array().items(
        ServiceabilityPlatformModel.ErrorResult()
      ),
    });
  }

  /** @returns {ValidationError} */
  static ValidationError() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      field: Joi.string().allow("").required(),
    });
  }

  /** @returns {StandardError} */
  static StandardError() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }
}
module.exports = ServiceabilityPlatformModel;
