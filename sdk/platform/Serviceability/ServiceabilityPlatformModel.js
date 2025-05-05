const Joi = require("joi");

/**
 * @typedef SelfshipSchema
 * @property {number} tat - Turn around time in the specified unit, used to
 *   define the delivery time commitment.
 * @property {boolean} is_active - Indicates whether the self-ship feature is
 *   active for the company.
 * @property {string} unit - Specifies the unit of time for turn around time,
 *   such as hours or days.
 */

/**
 * @typedef ServiceabilityErrorResult
 * @property {string} [message] - The error message describing the issue.
 * @property {string} value - The specific value or data point that caused the error.
 * @property {string} type - The category or classification of the error type.
 */

/**
 * @typedef UpdateZoneData
 * @property {string} [zone_id] - The unique identifier of the zone to be updated.
 * @property {string} [name] - The name of the zone.
 * @property {string} [type] - The type of the zone.
 * @property {string} [slug] - A slug is a human-readable URL segment, typically
 *   generated from a title with special characters removed.
 * @property {string[]} [geo_areas] - List of geographical areas associated with the zone.
 * @property {number} [company_id] - The unique identifier of the company.
 * @property {string} [application_id] - The unique identifier of the application.
 * @property {boolean} [is_active] - Indicates whether the zone is active.
 * @property {ProductSchema} [product]
 * @property {StoresSchema} [stores]
 */

/**
 * @typedef ZoneUpdateSuccessResult
 * @property {string} name - The updated name of the zone.
 * @property {string} slug - A slug is a human-readable URL segment, typically
 *   generated from a title with special characters removed.
 * @property {number} company_id - The unique identifier of the company.
 * @property {string} application_id - The unique identifier of the application.
 * @property {boolean} is_active - Indicates whether the zone is active after the update.
 * @property {string[]} geo_areas - Updated list of geographical areas
 *   associated with the zone.
 * @property {ProductSchema} product
 * @property {StoresSchema} stores
 * @property {string} zone_id - The unique identifier of the updated zones.
 * @property {CreatedBy} [created_by]
 * @property {ModifiedBy} [modified_by]
 * @property {string} created_on - The timestamp when the record was created.
 * @property {string} modified_on - The timestamp when the record last modified.
 */

/**
 * @typedef ServiceabilityDeleteErrorResult
 * @property {ServiceabilityErrorResult[]} error - List of error details related
 *   to the serviceability deletion operation.
 */

/**
 * @typedef ZoneDeleteSuccessResult
 * @property {string} message - A message indicating the success of the zone deletion.
 */

/**
 * @typedef ListViewSchema
 * @property {ListViewItems[]} items - List of zone items, each representing a
 *   zone's details.
 * @property {Page} page
 */

/**
 * @typedef GetZoneByIdSchema
 * @property {string} zone_id - Unique identifier for the zone.
 * @property {string} name - Name of the zone.
 * @property {string} slug - A slug is a human-readable URL segment, typically
 *   generated from a title with special characters removed.
 * @property {boolean} is_active - Indicates whether the zone is currently active.
 * @property {ProductSchema} product
 * @property {StoresSchema} stores
 * @property {CreatedBy} [created_by]
 * @property {ModifiedBy} [modified_by]
 * @property {string} [created_on] - The timestamp when the record was created.
 * @property {string} [modified_on] - The timestamp when the record last modified.
 * @property {string} [stage] - Current stage/status of the zone.
 * @property {string} [overlapping_file_url] - URL for the file with overlapping
 *   zones (if applicable).
 * @property {string[]} geo_areas - List of geographical areas associated with the zone.
 * @property {string[]} [overlapping_zone_names] - List of names of zones that
 *   overlap with this one.
 */

/**
 * @typedef CommonErrorResult
 * @property {Error[]} [error] - An array of items referencing the ErrorResult
 *   schema, which likely contains detailed information about the errors.
 */

/**
 * @typedef CreateZoneDataSchema
 * @property {boolean} is_active - Indicates whether the zone is active or not.
 * @property {string} slug - Slug or URL-friendly version of the zone name.
 * @property {string} name - Name of the zone.
 * @property {number} company_id - Identifier of the company associated with the zone.
 * @property {string} application_id - Identifier for the application related to the zone.
 * @property {string[]} geo_areas - List of geographical areas associated with the zone.
 * @property {ZoneStores} stores
 * @property {ZoneProduct} product
 */

/**
 * @typedef ZoneBulkExport
 * @property {string} [batch_id] - A unique identifier for the performed batch operation.
 */

/**
 * @typedef GetZoneBulkExport
 * @property {Object} [items] - A list of items related to the zone bulk export.
 */

/**
 * @typedef CreateBulkZoneData
 * @property {Object} [file_url] - URL to the file containing the zone data.
 * @property {string} [product_type] - Type of product for the zone, could be
 *   'all', 'item_id', 'department', 'category', or 'tag'.
 */

/**
 * @typedef ZoneSchema
 * @property {Object} name - Name of the zone.
 * @property {Object} slug - Slug identifier for the zone.
 * @property {Object} company_id - Id of the company that owns the zone.
 * @property {Object} application_id - Application Id associated with the zone.
 * @property {Object} is_active - Whether the zone is active or not.
 * @property {Object} geo_areas - List of geographical areas associated with the zone.
 * @property {Object} stores - List of stores in the zone, referencing a schema
 *   for list view products.
 * @property {Object} product - List of products in the zone, referencing a
 *   schema for list view products.
 * @property {CreatedBy} [created_by]
 * @property {ModifiedBy} [modified_by]
 * @property {string} created_on - The timestamp when the record was created.
 * @property {string} modified_on - The timestamp when the record last modified.
 * @property {Object} stage - Current stage of the zone.
 * @property {Object} zone_id - Unique identifier for the zone.
 */

/**
 * @typedef CreateBulkZoneResult
 * @property {Object} [zone_id] - Unique identifier of the created zone.
 */

/**
 * @typedef BulkCreateZoneExport
 * @property {Object} [placeholder] - Placeholder for export data.
 */

/**
 * @typedef PincodeMopData
 * @property {number[]} pincodes - A list of pincodes.
 * @property {string} country - Name of the country.
 * @property {string} action - Denotes wether to activate or deavtivate pincodes
 *   for COD mode of payment.
 */

/**
 * @typedef PincodeMOPResult
 * @property {boolean} success - Whether operation was successful.
 * @property {number} status_code - Status code for the response.\
 *   _Deprecated_*
 * @property {string} batch_id - A unique identifier for the performed batch operation.
 * @property {string} country - Name of the country.
 * @property {string} action - Denotes wether to activate or deavtivate pincodes
 *   for COD mode of payment.
 * @property {number[]} [pincodes] - List of pincodes.
 * @property {PincodeMopUpdateResult[]} [updated_pincodes] - Details of the
 *   updated pincodes.
 */

/**
 * @typedef PincodeMopUpdateAuditError
 * @property {number} [status] - Status code for the error.
 * @property {boolean} [success] - Whether operation was successful.
 */

/**
 * @typedef PincodeMopBulkError
 * @property {string} [batch_id] - A unique identifier for the performed batch operation.
 * @property {number} [status_code] - Status code for the error.
 * @property {Object} [error]
 * @property {boolean} [success] - Whether operation was successful.
 */

/**
 * @typedef CommonError
 * @property {number} [status_code] - Status code for the error.
 * @property {Object} [error]
 * @property {boolean} [success] - Whether operation was successful.
 */

/**
 * @typedef PincodeMopBulkData
 * @property {string} batch_id - A unique identifier for the performed batch operation.
 * @property {string} s3_url - CDN url for the uploaded file.
 */

/**
 * @typedef PincodeBulkViewResult
 * @property {string} batch_id - A unique identifier for the performed batch operation.
 * @property {string} s3_url - CDN URL for the uploaded file.
 */

/**
 * @typedef PincodeCodStatusListingDetails
 * @property {string} [country] - Name of the country.
 * @property {boolean} [is_active] - Search based on the active or inactive flag.
 * @property {number} [pincode] - Search based on the pincode.
 * @property {number} [current] - The current page number for listing.
 * @property {number} [page_size] - The number of items per page in the listing.
 */

/**
 * @typedef PincodeCodStatusListingResult
 * @property {string} country - Name of the country.
 * @property {PincodeCodStatusItem[]} data - List of pincode details.
 * @property {boolean} success - Whether operation was successful.
 * @property {Error[]} [errors] - List of error object in case of unsuccessful response.
 * @property {Page} page
 * @property {PincodeCodStatusListingSummary} summary
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryDetails
 * @property {string} entity_type - Type of the entity requested.
 * @property {string} [file_name] - Name of the file.
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryResultData
 * @property {string} [entity_type] - Type of the entity requested.
 * @property {PincodeMopUpdateAuditHistoryPaging} page
 * @property {PincodeMopUpdateAuditHistoryResult[]} data - History records of
 *   the uploaded files.
 */

/**
 * @typedef BulkGeoAreaDetails
 * @property {string} [file_url] - URL of the file for bulk geo area details.
 * @property {string} [name] - The name of the geo area.
 * @property {string} [slug] - A slug is a human-readable URL segment, typically
 *   generated from a title with special characters removed.
 * @property {string} [type] - Type of geo area (delivery or price).
 */

/**
 * @typedef BulkGeoAreaResult
 * @property {string} [geoarea_id] - Unique identifier for the geo area.
 */

/**
 * @typedef BulkGeoAreaGetResult
 * @property {string} [batch_id] - A unique identifier for the performed batch operation.
 * @property {string} [file_path] - Path to the file for the geo area.
 * @property {number} [total] - The total number of records in the batch.
 * @property {number} [failed] - The number of failed records.
 * @property {string} [error_file_url] - URL for the error file.
 * @property {string} [action] - The action taken for the geo area update.
 * @property {string} [updated_at] - The timestamp when the file was updated.
 * @property {string} [updated_by] - The user who updated the file.
 * @property {string} [type] - Type of geo area operation (e.g., upload or update).
 * @property {string} [stage] - The current stage of the geo area update.
 * @property {string} [file_url] - URL of the file related to the geo area.
 */

/**
 * @typedef GeoAreaBulkCreationResult
 * @property {string} [batch_id] - A unique identifier for the performed batch operation.
 */

/**
 * @typedef GeoAreaBulkExportResult
 * @property {string} [batch_id] - A unique identifier for the performed batch operation.
 * @property {string} [file_path] - The file path where the export data will be stored.
 * @property {number} [total] - The total number of records processed in the export.
 * @property {number} [failed] - The number of records that failed to export.
 * @property {string} [error_file_url] - The URL of the file containing details
 *   of errors encountered during the export, if available.
 * @property {string} [action] - The action performed during the export process,
 *   typically import or export.
 * @property {string} [updated_at] - The timestamp when the export status was
 *   last updated.
 * @property {string} [updated_by] - The name or identifier of the user or
 *   process that last updated the export status.
 * @property {string} [type] - The type of export process, such as geo_area_bulk_export.
 * @property {string} [stage] - The current stage of the export process, such as
 *   initiated, in_progress, or completed.
 */

/**
 * @typedef GeoAreaRequestBody
 * @property {boolean} is_active - Indicates whether the geo area is active or not.
 * @property {string} name - The name of the geo area.
 * @property {string} slug - A slug is a human-readable URL segment, typically
 *   generated from a title with special characters removed.
 * @property {string} type - Specifies whether the geo area is for delivery or
 *   price purposes.
 * @property {Area[]} areas - A list of areas that are part of this geo area.
 * @property {string} [region_type] - Defines whether the region is based on
 *   pincode or non-pincode.
 */

/**
 * @typedef GeoAreaErrorResult
 * @property {GeoAreaResponseDetail[]} [error] - A list of error details
 *   encountered during the operation.
 */

/**
 * @typedef GeoAreaResponseBody
 * @property {string} name - The name of the geo area.
 * @property {string} slug - A slug is a human-readable URL segment, typically
 *   generated from a title with special characters removed.
 * @property {boolean} is_active - Indicates whether the geo area is active.
 * @property {Area[]} areas - A list of areas included in the geo area.
 * @property {string} [region_type] - Defines whether the region is based on
 *   pincode or non-pincode.
 * @property {string} type - Specifies whether the geo area is for price or
 *   delivery purposes.
 * @property {string} created_on - The timestamp when the record was created.
 * @property {string} modified_on - The timestamp when the record last modified.
 * @property {CreatedBy} [created_by]
 * @property {ModifiedBy} [modified_by]
 * @property {string} geoarea_id - A unique identifier for the geo area.
 */

/**
 * @typedef GeoAreaPutResponseBody
 * @property {string} [name] - Name of the geo area.
 * @property {string} [geoarea_id] - Unique identifier for the geo area.
 * @property {string} [slug] - A slug is a human-readable URL segment, typically
 *   generated from a title with special characters removed.
 * @property {boolean} [is_active] - Indicates whether the geo area is active or not.
 * @property {Area[]} [areas] - List of areas included within the geo area.
 * @property {string} [region_type] - Specifies the type of region, either
 *   'pincode' or 'non-pincode'.
 * @property {string} [type] - Type of the geo area.
 * @property {string} [created_on] - The timestamp when the record was created.
 * @property {string} [modified_on] - The timestamp when the record last modified.
 * @property {CreatedBy} [created_by]
 * @property {ModifiedBy} [modified_by]
 * @property {string} [upload_type] - Specifies whether the geo area was
 *   uploaded manually or in bulk.
 */

/**
 * @typedef GeoAreaGetResponseBody
 * @property {GeoAreaItemResult[]} [items] - A list of geoarea items returned in
 *   the response.
 * @property {Page2} [page]
 */

/**
 * @typedef GeoAreaDetails
 * @property {string} name - The name of the geographical area.
 * @property {string} slug - A slug is a human-readable URL segment, typically
 *   generated from a title with special characters removed.
 * @property {string} [application_id] - The unique identifier of the application.
 * @property {number} [company_id] - The unique identifier of the company.
 * @property {string} geoarea_id - A unique identifier for the geoarea.
 * @property {boolean} is_active - Indicates whether the geoarea is active.
 * @property {string} type - The type of geoarea (e.g., city, country).
 * @property {string} [region_type] - The type of region (pincode or non-pincode).
 * @property {AreaExpanded[]} areas - List of areas associated with the geoarea.
 * @property {string} [created_on] - The timestamp when the record was created.
 * @property {string} [modified_on] - The timestamp when the record last modified.
 * @property {CreatedBy} [created_by]
 * @property {ModifiedBy} [modified_by]
 */

/**
 * @typedef Error
 * @property {string} [type] - The type of the error.
 * @property {string} [value] - The value associated with the error.
 * @property {string} [message] - The error message describing the issue.
 */

/**
 * @typedef CourierAccountDetailsBody
 * @property {string} extension_id - The unique identifier for the extension
 *   linked to the courier account.
 * @property {string} [account_id] - The unique identifier for the courier account.
 * @property {string} scheme_id - The identifier for the scheme associated with
 *   the courier account.
 * @property {boolean} is_self_ship - Indicates whether the courier account
 *   supports self-shipping (true if it does, false otherwise).
 * @property {string} stage - The current stage of the courier account, either
 *   'enabled' or 'disabled'.
 * @property {boolean} is_own_account - Indicates whether the courier account is
 *   an own account (true if it is, false otherwise).
 */

/**
 * @typedef CourierPartnerRuleResult
 * @property {boolean} [is_active] - Indicates whether the courier partner rule
 *   is currently active.
 * @property {string} [application_id] - The unique identifier of the application.
 * @property {number} [company_id] - The unique identifier of the company.
 * @property {string[]} [manual_priority] - Has the list of courier partner
 *   accounts that are to be given priority.
 * @property {string} [filters] - Denotes weather specific filters are applied
 *   to courier partner accounts or all accounts are considered.
 * @property {CourierPartnerRuleConditions} [conditions]
 * @property {string[]} [sort] - Specifies the sorting preference for courier
 *   partners based on the rule (e.g., fastest or custom).
 * @property {CreatedBy} [created_by]
 * @property {string} [id] - A string serving as the unique identifier.
 * @property {ModifiedBy} [modified_by]
 * @property {string} [modified_on] - The timestamp when the record last modified.
 * @property {string} [name] - The name of the courier partner rule.
 * @property {string} [type] - The type of the courier partner rule.
 * @property {CourierPartnerRuleCPListResult[]} [cp_list] - A list of courier
 *   partner schemes associated with this rule.
 */

/**
 * @typedef CourierPartnerRule
 * @property {boolean} is_active - Denotes whether the given courier partner
 *   rule is inactive or active.
 * @property {CourierPartnerList[]} [cp_list] - A list of courier partners.
 * @property {string} name - Name for the courier partner rule.
 * @property {string[]} manual_priority - Has the list of courier partner
 *   account Ids that are to be given priority.
 * @property {string} filters - Denotes weather specific filters are applied to
 *   courier partner accounts or all accounts are considered.
 * @property {CourierPartnerRuleConditions} conditions
 * @property {string[]} sort - Sort Strategy for the courier partners.
 * @property {string} [type] - Denotes the type of the rule.
 */

/**
 * @typedef BulkFailureResult
 * @property {boolean} [success] - Whether operation was successful.
 * @property {Error[]} error - An array containing error details.
 */

/**
 * @typedef FailureResult
 * @property {boolean} [success] - Whether operation was successful.
 * @property {Error[]} [error] - Array of error details.
 */

/**
 * @typedef CourierPartnerRulesListResult
 * @property {CourierPartnerRuleResult[]} items - Array of courier partner rule results.
 * @property {Page} page
 */

/**
 * @typedef ShipmentCourierPartnerDetails
 * @property {ShipmentsCourierPartnersServiceability} from_location
 * @property {ShipmentsCourierPartnersServiceability} to_location
 * @property {CPShipments[]} [shipments] - List of shipments.
 * @property {string} [journey] - Journey type of the shipment forward or return.
 * @property {string} [payment_mode] - Payment mode opted for the shipment.
 */

/**
 * @typedef ShipmentCourierPartnerResult
 * @property {CourierPartners[]} [courier_partners] - List of courier partners
 *   available for the shipment.
 * @property {ShipmentCourierPartners[]} [shipments] - List of shipment details
 *   associated with courier partners.
 * @property {CourierPartnerPromise} [delivery_promise]
 */

/**
 * @typedef CompanyConfig
 * @property {number} [company_id] - The unique identifier of the company.
 * @property {string[]} [sort] - Array defining the sorting order.
 * @property {string} [logistics_as_actual] - Defines the logistics control type.
 */

/**
 * @typedef ApplicationConfigPatch
 * @property {CourierPartnerConfig} [courier_partner_config]
 * @property {BuyboxRuleConfig} [buybox_rule_config]
 * @property {PromiseConfig} [promise_config]
 */

/**
 * @typedef ApplicationConfigPatchResult
 * @property {boolean} [success] - Whether operation was successful.
 */

/**
 * @typedef BulkRegionJobDetails
 * @property {string} [file_path] - Path to the file used in the bulk operation.
 * @property {string} country - Country involved in the bulk operation.
 * @property {string} action - Action type for the bulk operation, either import
 *   or export.
 * @property {string} region - Region involved in the bulk operation.
 */

/**
 * @typedef BulkRegionResultItemData
 * @property {string} file_path - Path to the file associated with the result item.
 * @property {number} [failed] - Number of failed records in the operation.
 * @property {Object[]} [failed_records] - Array of failed records with
 *   additional properties.
 * @property {string} action - Action type for the result item.
 * @property {string} batch_id - A unique identifier for the performed batch operation.
 * @property {string} country - Country associated with the result item.
 * @property {number} [success] - Number of successful records in the operation.
 * @property {string} region - Region associated with the result item.
 * @property {string} status - Current status of the result item.
 * @property {number} [total] - Total number of records processed.
 * @property {string} [error_file_path] - Path to the file containing error details.
 * @property {string} [modified_on] - The timestamp when the record last modified.
 * @property {string} [created_on] - The timestamp when the record was created.
 */

/**
 * @typedef BulkRegionResult
 * @property {BulkRegionResultItemData[]} items - Array of bulk region result items.
 * @property {Page} page
 */

/**
 * @typedef StoreRuleConfigData
 * @property {string[]} [rule_ids] - List of rule Ids which are active in the application.
 * @property {string[]} [type_based_priority] - Priority of the store type to be
 *   used in the basic prioritization sorting of stores.
 * @property {string[]} [tag_based_priority] - Priority of the store tags to be
 *   used in the basic prioritization sorting of stores.
 * @property {StorePrioritySchema[]} [store_priority] - Priority of explicit
 *   stores to be used for sorting of stores.
 * @property {string[]} [sort] - Criteria on which the selected stores should be sorted.
 * @property {Object} [meta_sort_priority] - Has mapping for the store custom
 *   fields and its values for basic prioritization.
 * @property {number[]} [manual_priority] - Has the list of courier partner
 *   accounts that are to be given priority.
 */

/**
 * @typedef StoreRuleDataSchema
 * @property {string} [id] - A string serving as the unique identifier.
 * @property {string} [name] - Name of the rule.
 * @property {number[]} [manual_priority] - Has the list of courier partner
 *   accounts that are to be given priority.
 * @property {Object} [meta_sort_priority] - Has mapping for the store custom
 *   fields and its values for basic prioritization.
 * @property {Object} [meta_conditions] - Has mapping for the store custom
 *   fields and its values. for conditions
 * @property {string} [filters] - Denotes weather specific filters are applied
 *   to stores or all stores are considered.
 * @property {number} [company_id] - The unique identifier of the company.
 * @property {string} [application_id] - The unique identifier of the application.
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
 * @typedef GetStoreRulesApiResult
 * @property {StoreRuleDataSchema[]} [items] - List of store rule data.
 * @property {Page} [page]
 */

/**
 * @typedef CreateStoreRuleDetailsSchema
 * @property {string} [name] - Name of the rule.
 * @property {number[]} [manual_priority] - Has the list of stores that are to
 *   be given priority.
 * @property {Object} [meta_sort_priority] - Has mapping for the store custom
 *   fields and its values for basic prioritization.
 * @property {Object} [meta_conditions] - Has mapping for the store custom
 *   fields and its values. for conditions
 * @property {string} [filters] - Denotes weather specific filters are applied
 *   to stores or all stores are considered.
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
 * @property {string} [id] - A string serving as the unique identifier.
 * @property {string} [name] - Name of the rule created.
 * @property {number[]} [manual_priority] - Has the list of stores that are to
 *   be given priority.
 * @property {Object} [meta_sort_priority] - Has mapping for the store custom
 *   fields and its values for basic prioritization.
 * @property {Object} [meta_conditions] - Has mapping for the store custom
 *   fields and its values. for conditions
 * @property {string} [filters] - Denotes weather specific filters are applied
 *   to stores or all stores are considered.
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
 * @property {string} [id] - A string serving as the unique identifier.
 * @property {string} [name] - Name of the rule created.
 * @property {number[]} [manual_priority] - Has the list of stores that are to
 *   be given priority.
 * @property {Object} [meta_sort_priority] - Has mapping for the store custom
 *   fields and its values for basic prioritization.
 * @property {Object} [meta_conditions] - Has mapping for the store custom
 *   fields and its values. for conditions
 * @property {string} [filters] - Denotes weather specific filters are applied
 *   to stores or all stores are considered.
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
 * @property {number} [company_id] - The unique identifier of the company.
 * @property {string} [application_id] - The unique identifier of the application.
 */

/**
 * @typedef CourierAccountResult
 * @property {string} account_id - A string that uniquely identifies the courier account.
 * @property {number} [company_id] - The unique identifier of the company.
 * @property {string} scheme_id - A string that specifies the unique identifier
 *   for the scheme associated with the account
 * @property {string} [extension_id] - A string that uniquely identifies the
 *   courier partner extension.
 * @property {boolean} is_self_ship - A boolean indicating whether the account
 *   is for self-shipping.
 * @property {string} stage - A string indicating the current stage of the
 *   account, which can be either enabled or disabled.
 * @property {boolean} is_own_account - A boolean indicating whether the account
 *   is owned by the company.
 * @property {CourierPartnerSchemeModel} scheme_rules
 */

/**
 * @typedef CompanyCourierPartnerAccountListResult
 * @property {CourierAccountResult[]} items - An array containing multiple
 *   instances of CourierAccountResult, which details individual courier accounts.
 * @property {Page} page
 */

/**
 * @typedef PackageMaterial
 * @property {string} name - Name of the packaging material.
 * @property {number} width - Width of the packaging material dimensions in centimeter.
 * @property {number} height - Height of the packaging material dimensions in centimeter.
 * @property {number} length - Length of the packaging material dimensions in centimeter.
 * @property {PackageMaterialRule[]} [rules] - Product group rules associated
 *   with the packaging.
 * @property {number[]} store_ids - Stores where the packaging is avaiable.
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
 * @property {number} [max_weight] - Maximum weight(grams) holding capacity.
 * @property {number} [package_vol_weight] - Volumetric weight(grams) that a
 *   packaging material can carry.
 * @property {boolean} [auto_calculate] - Denotes whether the volumetric
 *   weight(grams) should be auto calculated or not.
 */

/**
 * @typedef PackageMaterialNotFound
 * @property {number} [status_code] - The status code indicating the result of
 *   the operation.
 * @property {boolean} [success] - Indicates if the operation was successful.
 */

/**
 * @typedef PackageMaterialsErrorResult
 * @property {string} [value] - The value associated with the error.
 * @property {string} [message] - A description of the error.
 * @property {string} [type] - The type of error.
 * @property {string} [error] - Detailed error message.
 */

/**
 * @typedef PackageMaterialResult
 * @property {number} [company_id] - The unique identifier for the company.
 * @property {string} name - The name of the package material.
 * @property {string} [id] - Unique identifier for the package material.
 * @property {number} [item_id] - Unique identifier for the item.
 * @property {number} width - The width of the package material.
 * @property {number} height - The height of the package material.
 * @property {number} length - The length of the package material.
 * @property {PackageMaterialRule[]} [rules] - List of rules associated with the
 *   package material.
 * @property {number[]} store_ids - List of store IDs where the package material
 *   is available.
 * @property {number} weight - The weight(grams) of the package material.
 * @property {number} error_rate - The error rate associated with the package material.
 * @property {string} package_type - The type of the package material.
 * @property {string} size - Size of the package material.
 * @property {string[]} [media] - List of media associated with the package material.
 * @property {Channel[]} channels - List of channels for the package material.
 * @property {boolean} [track_inventory] - Whether inventory tracking is enabled
 *   for the package material.
 * @property {boolean} [is_active] - Indicates whether the package material is active.
 * @property {string} status - The current status of the package material.
 * @property {number} [max_weight] - Maximum weight(grams) the package material
 *   can handle.
 * @property {number} [package_vol_weight] - Volumetric weight(grams) of the
 *   package material.
 * @property {boolean} [auto_calculate] - Whether the weight(grams) of the
 *   package material is auto-calculated.
 */

/**
 * @typedef PackageRule
 * @property {string} name - The name of the packaging rule.
 * @property {number} company_id - The unique identifier for the company.
 * @property {PackageRuleCategory} [category_id]
 * @property {PackageRuleProduct} [product_id]
 * @property {PackageRuleProductTag} [product_tag]
 * @property {PackageRuleDepartmentId} [department_id]
 * @property {PackageRuleProductAttributes} [product_attributes]
 * @property {string} type - Type of the packaging rule.
 * @property {boolean} [is_active] - Indicates if the packaging rule is active.
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
 * @property {PackageRuleDepartmentId} [department_id]
 * @property {PackageRuleProductAttributes} [product_attributes]
 * @property {PackageRuleCategory} [category_id]
 */

/**
 * @typedef PackagesListResult
 * @property {PackageItem[]} [items] - Contains the list of package items with
 *   pagination details.
 * @property {PackagePageInfo} [page]
 */

/**
 * @typedef PackageItem
 * @property {string} [name] - The name of the package item.
 * @property {number} [weight] - The weight(grams) of the package item.
 * @property {boolean} [track_inventory] - Indicates if the inventory is tracked
 *   for this package item.
 * @property {number} [length] - The length of the package item.
 * @property {PackageChannel[]} [channels] - A list of channels associated with
 *   the package item.
 * @property {string} [package_type] - Type of package material.
 * @property {PackageRuleSchema[]} [rules] - A list of rules associated with the
 *   package item.
 * @property {number} [height] - The height of the package item.
 * @property {number} [error_rate] - The error rate associated with the package item.
 * @property {number} [width] - The width of the package item.
 * @property {boolean} [is_active] - Indicates if the package item is active.
 * @property {string} [size] - The size of the package item.
 * @property {number} [company_id] - The company ID associated with the package item.
 * @property {number} [item_id] - The unique identifier for the package item.
 * @property {number} [max_weight] - The maximum weight(grams) of the package item.
 * @property {Object[]} [media] - Additional media associated with the package item.
 * @property {number} [package_vol_weight] - The volumetric weight(grams) of the
 *   package item.
 * @property {string} [status] - The status of the package item.
 * @property {boolean} [auto_calculate] - Indicates if the package item is
 *   auto-calculated.
 * @property {string} [id] - The unique identifier for the package item.
 */

/**
 * @typedef RulePriorityDetails
 * @property {string} rule_id - A string that uniquely identifies the rule.
 * @property {number} priority - An integer representing the priority level
 *   assigned to the rule.
 */

/**
 * @typedef RulePriorityResult
 * @property {boolean} [success] - Whether operation was successful.
 */

/**
 * @typedef OptimalLocationsResult
 * @property {OptimalLocationAssignedStoresResult[]} assigned_stores - List of
 *   stores where items are assigned.
 * @property {Error[]} [faulty_articles] - List of articles with errors during assignment.
 */

/**
 * @typedef OptimlLocationsRequestSchema
 * @property {string} channel_id - Unique identifier for the sales channel.
 * @property {string} channel_type - Specifies the type of sales channel
 *   (extension, marketplace, or other).
 * @property {string} [channel_identifier] - Identifies the specific marketplace
 *   or platform.
 * @property {LocationDetailsServiceability} to_serviceability
 * @property {OptimalLocationsArticles[]} articles - List of articles to be
 *   considered for location optimization.
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
 * @typedef CourierPartnerSchemeDetailsModel
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} [scheme_id] - Unique identifier for the scheme, used to
 *   fetch or modify scheme details.
 * @property {string} name - Name of the scheme.
 * @property {string} [default_forward_pickup_cutoff] - Default cutoff time for
 *   forward pickup (nullable).
 * @property {string} [default_reverse_pickup_cutoff] - Default cutoff time for
 *   reverse pickup (nullable).
 * @property {CourierPartnerSchemeDefaultTat} [default_tat]
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
 * @property {CourierPartnerSchemeFeatures} feature
 */

/**
 * @typedef CourierPartnerSchemeModelSchema
 * @property {CreatedBy} [created_by]
 * @property {string} [created_on] - The timestamp when the record was created.
 * @property {ModifiedBy} [modified_by]
 * @property {string} [modified_on] - The timestamp when the record last modified.
 * @property {string} [extension_id] - Unique identifier of courier partner extension.
 * @property {string} [scheme_id] - Unique identifier for the scheme, used to
 *   fetch or modify scheme details.
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
 * @property {CourierPartnerSchemeFeatures} feature
 */

/**
 * @typedef CourierPartnerSchemeUpdateDetailsSchema
 * @property {string} name - The name of the courier partner scheme.
 * @property {ArithmeticOperations} weight
 * @property {ArithmeticOperations} [volumetric_weight]
 * @property {string} transport_type - The type of transport used in the courier service.
 * @property {string} region - The region for the service intra-city,
 *   inter-city, or inter-country.
 * @property {string} delivery_type - The type of delivery hyperlocal, same-day,
 *   one-day, two-day, etc.
 * @property {string[]} payment_mode - The accepted payment modes for the
 *   service Cash on Delivery (COD) or Prepaid.
 * @property {string} stage - The current status of the scheme either enabled or disabled.
 * @property {string} [status_updates] - Describes the type of status updates
 *   provided by the courier partner (e.g., real-time, periodic).
 * @property {number} [ndr_attempts] - Indicates if the Non-Delivery Report
 *   (NDR) feature is supported by the courier partner.
 * @property {number} [qc_shipment_item_quantity] - Defines the maximum quantity
 *   of items allowed in a quality check shipment.
 * @property {number} [non_qc_shipment_item_quantity] - Defines the maximum
 *   quantity of items allowed in a non-quality check shipment.
 * @property {CourierPartnerSchemeFeatures} feature
 */

/**
 * @typedef CourierPartnerSchemeList
 * @property {CourierPartnerSchemeModelSchema[]} items - List of courier partner schemes
 * @property {Page} page
 */

/**
 * @typedef BulkRegionServiceabilityTatDetails
 * @property {string} country - Country involved in the operation.
 * @property {string} region - Region involved in the operation.
 * @property {string} type - Type of operation, either serviceability or TAT.
 */

/**
 * @typedef BulkRegionServiceabilityTatResultItemData
 * @property {string} [country] - Name of the country.
 * @property {string} [region] - Name of the region for which the
 *   tat/serviceability file needs to be downloaded.
 * @property {string} [type] - Denotes the type of data.
 * @property {string} [batch_id] - A unique identifier for the performed batch operation.
 * @property {string} [status] - Current status of the request.
 * @property {Object[]} [failed_records] - Information of records which failed
 * @property {string} [file_path] - CDN path of the file.
 */

/**
 * @typedef BulkRegionServiceabilityTatResult
 * @property {BulkRegionServiceabilityTatResultItemData[]} [items] - Array of
 *   bulk region serviceability or TAT result items.
 * @property {Page} [page]
 */

/**
 * @typedef GetCountries
 * @property {GetCountriesItems[]} items - A list of country objects containing
 *   detailed information about each country.
 * @property {Page} page
 */

/**
 * @typedef GetLocalities
 * @property {Localities[]} [items] - An array containing multiple instances of
 *   Localities, which detail individual localities.
 * @property {Page} [page]
 */

/**
 * @typedef GetCountry
 * @property {CountryMetaFields} [meta]
 * @property {string} [id] - A string serving as the unique identifier.
 * @property {string} [name] - A string representing the official name of the country.
 * @property {string} [display_name] - A string providing the display name of
 *   the country, typically used for user-friendly identification.
 * @property {string} [iso2] - A string representing the ISO 3166-1 alpha-2 code
 *   for the country, which is a two-letter code used internationally.
 * @property {string} [iso3] - A string representing the ISO 3166-1 alpha-3 code
 *   for the country, which is a three-letter code used for international identification.
 * @property {string[]} [timezones] - A nullable array of strings listing the
 *   timezones applicable to the country.
 * @property {CountryHierarchy[]} [hierarchy] - An array referencing the
 *   CountryHierarchy schema, detailing the administrative or geographical
 *   structure of the country.
 * @property {string} [phone_code] - A string indicating the country's
 *   international phone dialing code, not restricted to a predefined list.
 * @property {string} [latitude] - A string representing the latitude of the
 *   country's geographic center.
 * @property {string} [longitude] - A string representing the longitude of the
 *   country's geographic center.
 * @property {CurrencyObject} [currency]
 * @property {string} [type] - A string indicating the type of the country entity.
 * @property {GetCountryFields} [fields]
 */

/**
 * @typedef BulkImportLocalitiesDetails
 * @property {string} file_url - An url for the csv file to upload
 */

/**
 * @typedef BulkImportLocalitiesResult
 * @property {string} batch_id - A unique identifier for the performed batch operation.
 * @property {string} file_url - An url for the csv file to upload
 * @property {boolean} success - Whether operation was successful.
 */

/**
 * @typedef BulkErrorResult
 * @property {boolean} success - Whether operation was successful.
 * @property {number} status_code - The status code associated with the bulk
 *   import operation result, which provides insight into the outcome or error.
 * @property {string} [error] - A detailed message describing the error that
 *   occurred during the bulk import operation.
 * @property {string} [batch_id] - A unique identifier for the performed batch operation.
 * @property {number} [total_count] - The total number of items or entities
 *   processed in the bulk import operation.
 * @property {number} [total_error_count] - The total number of errors
 *   encountered during the bulk import operation.
 * @property {string} [error_file_url] - The URL linking to the error file
 *   generated during the bulk import operation, containing the details of
 *   failed records.
 */

/**
 * @typedef LocalitiesBulkExport
 * @property {string} country_iso_code - The ISO code of the country for which
 *   the bulk export is being processed.
 * @property {string} status - The current status of the bulk export operation.
 * @property {string} batch_id - A unique identifier for the performed batch operation.
 * @property {number} offset - The offset for pagination or tracking purposes.
 * @property {string} type - The type of export operation.
 */

/**
 * @typedef LocalitiesBulkExportFetch
 * @property {string} batch_id - A unique identifier for the performed batch operation.
 * @property {string} status - The current status of the bulk export operation.
 * @property {number} download_percentage - The percentage of the download that
 *   has been completed.
 * @property {string} [url_path] - The URL path for downloading the exported
 *   data, if available.
 */

/**
 * @typedef LocalitiesErrorResult
 * @property {boolean} success - Whether operation was successful.
 * @property {number} status_code - The HTTP status code representing the result
 *   of the operation.
 * @property {string} error - A message describing the error that occurred.
 */

/**
 * @typedef GetLocality
 * @property {Object} [meta] - Additional metadata for the locality.\
 *   _Deprecated_*
 * @property {string} [parent_uid] - Unique identifier for the parent locality,
 *   if applicable.
 * @property {string} [id] - A string serving as the unique identifier.
 * @property {string} [name] - The actual geographical data, such as country
 *   names (India), state names (Maharashtra), pin codes (400603), city names
 *   (Dubai), or local sectors (Deira).
 * @property {string} [display_name] - User-friendly version of the geographical
 *   data, which may be more descriptive or formatted differently.
 * @property {string} [code] - Globally unique code assigned to a locality.
 * @property {Object} [custom_meta] - A custom object to store additional
 *   metadata with dynamic properties.
 * @property {string[]} [parent_ids] - Identifiers for the parent of the current locality.
 * @property {LocalityParent[]} [localities] - An array containing multiple
 *   instances of Localities, which detail individual localities.
 * @property {string} [type] - Defines the type or classification of the
 *   locality (e.g., city, state, country).
 * @property {LocalityParents} [parents]
 */

/**
 * @typedef ValidateAddress
 * @property {string} [address] - A string representing the complete address,
 *   combining address line 1, address line 2, area, landmark, sector, city,
 *   state, and pincode. This provides a comprehensive view of the address details.
 * @property {string} [address1] - A string representing the first line of the
 *   address, typically containing street or building information.
 * @property {Object} [address_meta] - Has metaata for that address
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
 * @typedef ErrorResult
 * @property {boolean} [success] - Whether operation was successful.
 * @property {Error} [error]
 */

/**
 * @typedef ApplicationConfigPut
 * @property {string[]} [rule_ids] - A list of rule Ids associated with the configuration.
 * @property {string[]} [sort] - Specifies the sorting preference for courier
 *   partners based on the rule (e.g., fastest or custom).
 * @property {string[]} [manual_priority] - Has the list of courier partner
 *   accounts that are to be given priority.
 * @property {string} [application_id] - The unique identifier of the application.
 * @property {number} [company_id] - The unique identifier of the company.
 */

/**
 * @typedef ApplicationConfigPutDetail
 * @property {string[]} [rule_ids] - A list of rule Ids to be applied in the
 *   configuration.
 * @property {string[]} [sort] - A list of sorting methods, including options
 *   for 'fastest' and 'manual_priority'.
 * @property {string[]} [manual_priority] - A list of manually prioritized items
 *   in the configuration.
 */

/**
 * @typedef ApplicationConfigGetResult
 * @property {ZoneConfig} [zones]
 * @property {CourierPartnerConfig} [courier_partner_config]
 * @property {BuyboxRuleConfig} [buybox_rule_config]
 * @property {PromiseType[]} [promise_types] - A list of promise types available
 *   in the application.
 * @property {PromiseConfig} [promise_config]
 */

/**
 * @typedef InstallCourierPartnerResponseSchema
 * @property {InstallCourierPartnerItemsSchema[]} [items] - A list of items
 *   detailing the courier partner installation details, each item follows the
 *   structure defined in `InstallCourierPartnerItemsSchema`.
 * @property {Page} [page]
 */

/**
 * @typedef GetLocalitiesBulkHistory
 * @property {Page} page
 * @property {HistoryObject[]} items - A list of historical records related to
 *   localities in bulk operations, each containing batch details such as
 *   status, error counts, file paths, and associated metadata.
 */

/**
 * @typedef CompanyConfigurationSchema
 * @property {string[]} [sort] - An array of strings specifying sorting preferences.
 */

/**
 * @typedef ProductSchema
 * @property {string} type - The classification of product type used in the
 *   zone, whether it's a list of categories, departments, tags, or item_ids.
 * @property {Object[]} values - List of values representing the products or the
 *   type of products selected for the delivery zone.
 */

/**
 * @typedef StoresSchema
 * @property {string} type - Classification of whether all stores in the
 *   application are considered or a custom selection of stores by the seller.
 * @property {number[]} values - List of store Ids mapped to the delivery zone
 *   when custom type is selected.
 */

/**
 * @typedef CreatedBy
 * @property {string} [id] - Identifier of the user or system that created the object.
 */

/**
 * @typedef ModifiedBy
 * @property {string} [id] - Identifier of the user or system that created the object.
 */

/**
 * @typedef ListViewItems
 * @property {string} zone_id - Unique identifier for the zone.
 * @property {string} name - Name of the zone.
 * @property {GeoArea[]} geo_areas - Array of geographical areas associated with the zone.
 * @property {string} slug - Slug for the zone.
 * @property {ListViewProduct} stores
 * @property {boolean} is_active - Indicates if the zone is active.
 * @property {ListViewProduct} product
 * @property {number} company_id - Unique identifier for the company.
 * @property {string} application_id - Unique identifier for the application.
 * @property {CreatedBy} created_by
 * @property {ModifiedBy} modified_by
 * @property {string} created_on - The timestamp when the record was created.
 * @property {string} modified_on - The timestamp when the record last modified.
 * @property {string} [stage] - Current stage of the zone.
 * @property {Summary} [summary]
 */

/**
 * @typedef GeoArea
 * @property {string} id - Unique identifier for the geographical area.
 * @property {string} [type] - Type of the geographical area.
 * @property {string} name - Name of the geographical area.
 */

/**
 * @typedef ListViewProduct
 * @property {string} type - Type of the product in the zone.
 * @property {string[]} values - List of values representing the products in the zone.
 */

/**
 * @typedef Summary
 * @property {number} [stores_count] - Count of stores in the summary.
 * @property {number} [products_count] - Count of products in the summary.
 * @property {RegionSchema[]} [regions] - Array of regions included in the summary.
 */

/**
 * @typedef RegionSchema
 * @property {string} [name] - Name of the region.
 * @property {number} [count] - Count of items in the region.
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
 * @property {number} [page_size] - The number of items per page.
 */

/**
 * @typedef ZoneStores
 * @property {Object} type - Type of zone store.
 * @property {Object} values - List of store Ids associated with the zone.
 */

/**
 * @typedef ZoneProduct
 * @property {Object} type - Type of zone product.
 * @property {Object} values - List of product Ids or identifiers for the zone.
 */

/**
 * @typedef ZoneBulkItem
 * @property {string} [batch_id] - A unique identifier for the performed batch operation.
 * @property {string} [file_path] - Path to the file, can be null.
 * @property {Object} [total] - Total number of items in the batch.
 * @property {Object} [failed] - Number of failed items in the batch.
 * @property {string} [error_file_url] - URL to the error file, can be null.
 * @property {Object} [action] - Action performed on the batch.
 * @property {Object} [updated_at] - Timestamp when the batch was last updated.
 * @property {Object} [updated_by] - User who last updated the batch.
 * @property {Object} [type] - Type of the bulk operation.
 * @property {Object} [stage] - Current stage of the bulk operation.
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
 * @typedef PincodeCodStatusItem
 * @property {boolean} [active] - Denoted if the pincode is active or not.
 * @property {string} [pincode] - A string indicating the postal code or PIN
 *   code of the address area.
 */

/**
 * @typedef PincodeCodStatusListingSummary
 * @property {number} total_active_pincodes - Count of the total active pincodes.
 * @property {number} total_inactive_pincodes - Count of the total inactive pincodes.
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryPaging
 * @property {string} [type] - The type of paging.
 * @property {number} [size] - The size of the page.
 * @property {number} [current] - The current page number.
 * @property {boolean} [has_next] - Indicates whether there is another page of results.
 * @property {number} [item_total] - The total number of items in the history.
 */

/**
 * @typedef PincodeMopUpdateAuditHistoryResult
 * @property {string} [batch_id] - A unique identifier for the performed batch operation.
 * @property {string} [entity_type] - Type of the entity requested.
 * @property {string} [error_file_s3_url] - URL for the error file.
 * @property {string} [s3_url] - CDN URL for the file uploaded.
 * @property {string} [file_name] - Name of the file.
 * @property {string} [updated_at] - The timestamp when the file was updated.
 * @property {string} [updated_by] - The user who updated the file.
 * @property {boolean} [success] - Whether operation was successful.
 */

/**
 * @typedef Area
 * @property {string[]} [regions] - A list of region identifiers within the area.
 * @property {string} [country] - The country associated with the area.
 */

/**
 * @typedef GeoAreaResponseDetail
 * @property {string} [type] - Type of the error.
 * @property {string} [value] - The specific value or detail related to the error.
 * @property {string} [message] - The error message describing the issue.
 */

/**
 * @typedef GeoAreaItemResult
 * @property {number} company_id - The unique identifier of the company.
 * @property {string} application_id - The unique identifier of the application.
 * @property {string} geoarea_id - The unique identifier for the geoarea.
 * @property {string} name - The name of the geoarea.
 * @property {string} slug - A slug is a human-readable URL segment, typically
 *   generated from a title with special characters removed.
 * @property {boolean} is_active - Indicates whether the geoarea is active.
 * @property {string} [region_type] - The type of region (e.g., non-pincode, pincode).
 * @property {string} type - The type of geoarea.
 * @property {AreaExpanded[]} areas - A list of areas associated with the geoarea.
 * @property {string} [created_on] - The timestamp when the record was created.
 * @property {string} [modified_on] - The timestamp when the record last modified.
 * @property {CreatedBy} [created_by]
 * @property {ModifiedBy} [modified_by]
 */

/**
 * @typedef AreaExpanded
 * @property {Country} [country]
 * @property {Region[]} [regions] - Array of regions included in the summary.
 */

/**
 * @typedef Country
 * @property {string} uid - A unique identifier for the country.
 * @property {string} display_name - The display name of the country.
 */

/**
 * @typedef Region
 * @property {string} uid - A string that uniquely identifies the country entity.
 * @property {string} display_name - A string representing the display name of
 *   the region, which is typically used for user-friendly identification.
 * @property {string} sub_type - A string indicating the subtype of the entity,
 *   which is not restricted to a predefined list.
 * @property {string[]} parent_id - A nullable string that serves as an
 *   identifier for the parent entity of the country, if applicable.
 */

/**
 * @typedef Page2
 * @property {number} size - The number of items displayed per page.
 * @property {number} item_total - The total number of items across all pages.
 * @property {string} type - The type of pagination (e.g., number for numbered
 *   pagination).
 * @property {number} current - The current page number.
 * @property {boolean} has_next - A boolean indicating if there is a next page of results.
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
 * @property {StringComparisonOperations} [store_customer_location]
 */

/**
 * @typedef LocationRule
 * @property {string} [type] - Specifies the type of the location rule (e.g.,
 *   inclusion, exclusion).
 * @property {LocationRuleValues[]} [includes] - A list of location-based values
 *   included in the rule, which could specify particular locations or criteria.
 */

/**
 * @typedef LocationRuleValues
 * @property {string} [uid] - Unique identifier for the location.
 * @property {string} [sub_type] - Subtype of the location, not restricted to a
 *   predefined list.
 * @property {string} [name] - Name of the location.
 * @property {string} [display_name] - Display name of the location.
 * @property {string[]} [parent_id] - Array of identifiers for the parent of the
 *   current locality.
 * @property {string[]} [parent_ids] - Array of parent identifiers for the location.
 * @property {string} [id] - Unique identifier for the location.
 */

/**
 * @typedef StringComparisonOperations
 * @property {string[]} [includes] - Array of string values to be included in
 *   the comparison.
 */

/**
 * @typedef IntComparisonOperations
 * @property {number[]} [includes] - Array of integer values to be included in
 *   the comparison.
 */

/**
 * @typedef ArithmeticOperations
 * @property {number} [lt] - Specifies a less than operation, comparing values
 *   smaller than the provided value.
 * @property {number} [gt] - Specifies a greater than operation, comparing
 *   values larger than the provided value.
 * @property {number} [lte] - Specifies a less than or equal to operation,
 *   comparing values smaller than or equal to the provided value.
 * @property {number} [gte] - Specifies a greater than or equal to operation,
 *   comparing values larger than or equal to the provided value.
 */

/**
 * @typedef CourierPartnerRuleCPListResult
 * @property {string} account_id - Unique identifier of courier partner scheme
 *   and company id combination.
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {boolean} is_self_ship - Denotes if the account is of self delivery type.
 * @property {CourierPartnerSchemeDetailsModel} [scheme_rules]
 * @property {string} [stage] - Represents the current stage of the courier
 *   partner account (e.g., active, inactive, etc.).
 */

/**
 * @typedef CourierPartnerSchemeDefaultTat
 * @property {boolean} [enabled] - Indicates whether the default turn around
 *   time (tat) to be used for the given scheme or not.
 * @property {CourierPartnerSchemeTat} [tat]
 */

/**
 * @typedef CourierPartnerSchemeTat
 * @property {number} [min] - Minimum turn around time (tat) value for a scheme.
 * @property {number} [max] - Maximum turn around time (tat) value for a scheme.
 * @property {string} [unit] - Unit for the turn around time (tat) values for a scheme.
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
 * @typedef CourierPartnerList
 * @property {string} extension_id - The unique identifier for the courier
 *   partner extension.
 * @property {string} account_id - The unique identifier for the courier partner account.
 */

/**
 * @typedef ShipmentsCourierPartnersServiceability
 * @property {string} [pincode] - A string indicating the postal code or PIN
 *   code of the address area.
 * @property {string} [sector_code] - Specifies the sector or district code of
 *   the address if applicable.
 * @property {string} [state_code] - Indicates the state or province code of the address.
 * @property {string} [city_code] - Denote the city or municipality code of the address.
 * @property {string} country_code - ISO2 code for the country of the address.
 */

/**
 * @typedef CPShipments
 * @property {string} [id] - A string serving as the unique identifier.
 * @property {number} [location_id] - Unique identifier of the selling location.
 * @property {string[]} [location_tags] - Tags associated with the selling location.
 * @property {number} [shipment_weight] - Weight(grams) of the shipment.
 * @property {number} [shipment_volumetric_weight] - Volumetric weight(grams) of
 *   the shipment.
 * @property {number} [shipment_cost] - Total Cost of the shipment.
 * @property {ShipmentDimension} [shipment_dimension]
 * @property {string[]} [courier_partner_schemes] - A List of courier schemes.
 * @property {string} [location_type] - Type of that particular location.
 * @property {ShipmentsArticles[]} [articles] - List of articles in the shipment.
 */

/**
 * @typedef ShipmentDimension
 * @property {number} height - Height of the shipment in centimeters.
 * @property {number} length - Length of the shipment in centimeters.
 * @property {number} width - Width of the shipment in centimeters.
 * @property {boolean} [is_default] - If the dimensions are default.
 * @property {string} [unit] - Measurement unit for dimensions.
 */

/**
 * @typedef ShipmentsArticles
 * @property {string} [id] - A string serving as the unique identifier.
 * @property {number} [item_id] - The Item Id of the article.
 * @property {string} [sla] - Gives sla for that article.
 * @property {string[]} [tags] - Tags assigned to Item.
 * @property {string} [size] - The size of the article.
 * @property {string} [group_id] - The group Id of the article.
 * @property {ArticleWeight} [weight]
 * @property {ArticleAttributes} [attributes]
 * @property {number} [category_id] - The category Id of the article.
 * @property {number} [department_id] - The Department Id of the article.
 * @property {ArticleDimension} [dimension]
 * @property {number} [price] - Final Price of the article after discounts.
 * @property {number} [brand_id] - The brand Id of the article.
 * @property {number} [quantity] - The quantity of the article.
 * @property {number} [manufacturing_time] - The manufacturing time of the article.
 * @property {string} [manufacturing_time_unit] - The unit of measurement for
 *   manufacturing time.
 * @property {number} [mto_quantity] - The Made to Order quantity of the article.
 * @property {boolean} [is_gift] - A boolean indicating whether the article is a gift.
 * @property {boolean} [is_set] - A boolean indicating whether the article is a set.
 * @property {ArticleSet} [set]
 * @property {number} [set_quantity] - The quantity of the article set.
 * @property {ArticleDeliverySlots} [delivery_slots]
 * @property {ArticleReturnReason} [return_reason]
 */

/**
 * @typedef ArticleWeight
 * @property {number} shipping - The weight(grams) of the article for shipping
 *   purposes, typically measured in a specified unit.
 * @property {string} unit - The unit of measurement used for the weight value.
 * @property {boolean} is_default - A boolean indicating whether this weight is
 *   the default weight for the article.
 */

/**
 * @typedef ArticleAttributes
 * @property {string} battery_operated - Yes/no indicating whether the article
 *   is powered by batteries.
 * @property {string} is_flammable - Yes/no indicating whether the article is
 *   considered flammable or poses a fire hazard.
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
 * @typedef ArticleSet
 * @property {string} [name] - The name of the article set.
 * @property {number} [quantity] - The quantity of the article set.
 * @property {ArticleSizeDistribution} [size_distribution]
 */

/**
 * @typedef ArticleSizeDistribution
 * @property {SetSize[]} sizes - A collection of different size options and
 *   their corresponding pieces.
 */

/**
 * @typedef SetSize
 * @property {number} pieces - The number of pieces in the set.
 * @property {string} size - The size description of the set.
 */

/**
 * @typedef ArticleDeliverySlots
 * @property {string} [delivery_date] - The delivery date for the article.
 * @property {string} [min_slot] - The minimum delivery time slot.
 * @property {string} [max_slot] - The maximum delivery time slot.
 */

/**
 * @typedef ArticleReturnReason
 * @property {string[]} [qc_type] - List of strings representing the return
 *   reason values, such as doorstep or pre-delivery quality checks.
 */

/**
 * @typedef CourierPartners
 * @property {string} [extension_id] - Unique identifier of courier partner extension.
 * @property {string} [scheme_id] - Unique identifier of courier partner scheme.
 * @property {string} [name] - Name of the courier partner.
 * @property {CourierPartnerPromise} [delivery_promise]
 */

/**
 * @typedef CourierPartnerPromise
 * @property {string} min - Minimum courier partner delivery promise time.
 * @property {string} max - Maximum courier partner delivery promise time.
 * @property {CourierPartnerAttributes} [attributes]
 */

/**
 * @typedef CourierPartnerAttributes
 * @property {CourierPartnerTAT} [tat]
 */

/**
 * @typedef CourierPartnerTAT
 * @property {number} [min] - Minimum turnaround time.
 * @property {number} [max] - Maximum turnaround time.
 */

/**
 * @typedef ShipmentCourierPartners
 * @property {string} [id] - A string serving as the unique identifier.
 * @property {CourierPartners[]} [courier_partners] - Courier partners of the shipment.
 * @property {CourierPartnerPromise} [delivery_promise]
 */

/**
 * @typedef CourierPartnerConfig
 * @property {string[]} [rule_ids] - A list of rule Ids applied for courier
 *   partner selection.
 * @property {string[]} [sort] - A list of sorting methods, with options like
 *   'fastest' and 'manual_priority'.
 * @property {string[]} [manual_priority] - A list of items to be manually
 *   prioritized for courier partner selection.
 */

/**
 * @typedef BuyboxRuleConfig
 * @property {string[]} [store_type_priority] - A list of store types
 *   prioritized for the buybox selection.
 * @property {string[]} [store_tag_priority] - A list of store tags prioritized
 *   for the buybox selection.
 * @property {string[]} [sort] - A list of sorting methods, including options
 *   for 'fastest' and 'manual_priority'.
 */

/**
 * @typedef PromiseConfig
 * @property {StorePromiseAttributeConfig} [store_attributes]
 * @property {DeliveryServiceAttributeConfig} [delivery_service_attributes]
 * @property {BufferField} [buffer_field]
 */

/**
 * @typedef StorePromiseAttributeConfig
 * @property {boolean} [is_operational_timing_enabled] - Indicates whether
 *   operational timing is enabled for the store.
 * @property {boolean} [is_order_acceptance_timing_enabled] - Indicates whether
 *   order acceptance timing is enabled for the store.
 * @property {boolean} [is_average_processing_time] - Indicates whether average
 *   processing time is considered in the promise calculations.
 * @property {boolean} [is_holiday_enabled] - Indicates whether holidays are
 *   considered in the promise calculations.
 */

/**
 * @typedef DeliveryServiceAttributeConfig
 * @property {boolean} [is_pickup_cutoff_time_enabled] - Indicates whether the
 *   pickup cutoff time is enabled.
 * @property {boolean} [is_service_tat_enabled] - Indicates whether the service
 *   turnaround time (TAT) is enabled.
 * @property {boolean} [is_holiday_enabled] - Indicates whether holidays are
 *   considered in delivery calculations.
 * @property {boolean} [is_all_dps_considered] - Indicates whether all delivery
 *   points (DPs) are considered for the promise type.
 */

/**
 * @typedef BufferField
 * @property {string} [unit] - The unit of measurement for the buffer field.
 * @property {number} [value] - The numerical value of the buffer field.
 * @property {boolean} [enabled] - Indicates whether the buffer field is enabled.
 */

/**
 * @typedef StorePrioritySchema
 * @property {number} [id] - Id of the store.
 * @property {string} [name] - Name of the store.
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
 * @property {DateOperations} [order_place_date]
 * @property {StringComparisonOperations} [zone_ids]
 */

/**
 * @typedef CustomerRadiusSchema
 * @property {string} [unit] - The unit of measurement for the radius (e.g.,
 *   kilometers, miles).
 * @property {number} [lt] - The less-than comparison value for the radius.
 * @property {number} [lte] - The less-than-or-equal comparison value for the radius.
 * @property {number} [gt] - The greater-than comparison value for the radius.
 * @property {number} [gte] - The greater-than-or-equal comparison value for the radius.
 */

/**
 * @typedef DateOperations
 * @property {string} [lt] - Less than condition for date.
 * @property {string} [gt] - Greater than condition for date.
 * @property {string} [lte] - Less than or equal to condition for date.
 * @property {string} [gte] - Greater than or equal to condition for date.
 */

/**
 * @typedef CourierPartnerSchemeModel
 * @property {string} extension_id - Unique identifier of courier partner extension.
 * @property {string} scheme_id - A string representing the unique identifier
 *   for the scheme. This is a required field.
 * @property {string} name - A string that specifies the name of the scheme.
 *   This is a required field.
 * @property {ArithmeticOperations} weight
 * @property {ArithmeticOperations} [volumetric_weight]
 * @property {string} transport_type - A string that specifies the type of transport.
 * @property {string} region - A string that indicates the region type.
 * @property {string} delivery_type - A string that defines the delivery type.
 * @property {string[]} payment_mode - An array of strings specifying the
 *   payment modes available.
 * @property {string} stage - A string indicating the current stage of the scheme.
 * @property {CourierPartnerSchemeFeatures} feature
 */

/**
 * @typedef PackageMaterialRule
 * @property {string} [rule_id] - Unique identifier of the package rule.
 * @property {PackageMaterialRuleQuantity} [quantity]
 * @property {number} [weight] - Volumetric weight in gram.
 */

/**
 * @typedef PackageMaterialRuleQuantity
 * @property {number} [min] - Minimum product's quantity that a packaging can contain.
 * @property {number} [max] - Maximum product's quantity that a packaging can contain.
 */

/**
 * @typedef Channel
 * @property {string} [type] - Type of the channel.
 * @property {string} [id] - Unique identifier of the channel.
 */

/**
 * @typedef PackageRuleCategory
 * @property {number[]} [includes] - An array of unique identifier integer ids
 *   of the category.
 */

/**
 * @typedef PackageRuleProduct
 * @property {number[]} [includes] - An array of product integer IDs included in
 *   the package rule.
 */

/**
 * @typedef PackageRuleProductTag
 * @property {string[]} [includes] - An array of product tag IDs included in the
 *   package rule.
 */

/**
 * @typedef PackageRuleDepartmentId
 * @property {number[]} [includes] - An array of department IDs included in the
 *   package rule.
 */

/**
 * @typedef PackageRuleProductAttributes
 * @property {Object[]} [includes] - An array of attributes included in the package rule.
 */

/**
 * @typedef PackageChannel
 * @property {StoreFilter} [store_filter]
 * @property {string} [app_id] - The application ID associated with the package channel.
 */

/**
 * @typedef StoreFilter
 * @property {string} [type] - Specifies whether the store filter includes or
 *   excludes certain stores.
 * @property {number[]} [ids] - A list of store IDs to filter.
 */

/**
 * @typedef PackageRuleSchema
 * @property {Quantity} [quantity]
 * @property {string} [rule_id] - The unique identifier for the package rule.
 * @property {number} [weight] - The weight(grams) associated with the package rule.
 */

/**
 * @typedef Quantity
 * @property {number} [min] - Minimum quantity of products allowed for this rule.
 * @property {number} [max] - Maximum quantity of products allowed for this rule.
 */

/**
 * @typedef PackagePageInfo
 * @property {string} [type] - The type of pagination (e.g., page-based).
 * @property {number} [size] - The number of items per page.
 * @property {number} [current] - The current page number.
 * @property {boolean} [has_next] - Indicates if there is a next page of results.
 * @property {boolean} [has_previous] - Indicates if there is a previous page of results.
 * @property {number} [item_total] - The total number of items available.
 */

/**
 * @typedef OptimalLocationAssignedStoresResult
 * @property {number} store_id - Unique identifier for the assigned store.
 * @property {OptimalLocationArticlesResult[]} articles - List of articles
 *   allocated to the store.
 */

/**
 * @typedef OptimalLocationArticlesResult
 * @property {number} item_id - Unique identifier for the item.
 * @property {string} size - Specifies the item's size variant.
 * @property {number} quantity - Number of units allocated.
 * @property {string} [group_id] - Identifier for grouping related items.
 * @property {boolean} [is_primary_item] - Indicates if the item is the primary
 *   one in a group.
 * @property {Object} [meta] - Additional metadata for the item.
 * @property {ArticleAssignment} article_assignment
 * @property {number} [seller_id] - Identifier for the seller.
 * @property {number[]} ignore_locations - List of location Ids to exclude.
 * @property {number[]} assign_locations - List of preferred location Ids.
 * @property {number} price_effective - Effective price of the item.
 * @property {number} mto_quantity - Quantity assigned for made-to-order processing.
 * @property {string} _id - Unique identifier for the article.
 * @property {string} uid - Unique identifier for tracking.
 */

/**
 * @typedef ArticleAssignment
 * @property {string} [level] - Defines the assignment level (multi-companies,
 *   single-company, or single-store).
 * @property {string} [strategy] - The strategy parameter allows users to
 *   specify the desired approach or criteria for selecting optimal locations.
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
 * @typedef ServiceabilityLocation
 * @property {string} longitude - The longitude of the serviceability location.
 * @property {string} latitude - The latitude of the serviceability location.
 */

/**
 * @typedef OptimalLocationsArticles
 * @property {number} item_id - Unique identifier for the item.
 * @property {string} size - Specifies the item's size variant.
 * @property {number} quantity - Number of units requested.
 * @property {string} [group_id] - Identifier for grouping related items.
 * @property {boolean} [is_primary_item] - Indicates if the item is the primary
 *   one in a group.
 * @property {Object} [meta] - Additional metadata for the item.
 * @property {ArticleAssignment} article_assignment
 * @property {number[]} ignore_locations - List of location Ids to exclude.
 * @property {number[]} assign_locations - List of preferred location Ids.
 * @property {number} [seller_id] - Identifier for the seller.
 */

/**
 * @typedef GetCountriesItems
 * @property {string} [id] - A string serving as the unique identifier.
 * @property {string} [sub_type] - A category for classifying the country into a
 *   specific subtype.
 * @property {string} [uid] - A globally unique identifier for the country.
 * @property {string} [name] - The official or widely recognized name of the
 *   country used in general contexts.
 * @property {string} [iso2] - The 2-letter ISO code for the country.
 * @property {string} [iso3] - The 3-letter ISO code for the country.
 * @property {string[]} [timezones] - A list of timezones associated with the country.
 * @property {HierarchyItems[]} [hierarchy] - A hierarchical list of items
 *   representing organizational levels within the country.
 * @property {string} [phone_code] - A country-specific phone code.
 * @property {CurrencyObject} [currency]
 * @property {string} [type] - The type or classification of the country (e.g.,
 *   sovereign or dependent).
 * @property {string} [latitude] - The latitude of the central point of the country.
 * @property {string} [longitude] - The longitude of the central point of the country.
 * @property {string} [display_name] - A user-friendly name for the country,
 *   typically for display purposes.
 * @property {boolean} [has_next_hierarchy] - A boolean indicating whether
 *   additional hierarchical regions or divisions are present.
 */

/**
 * @typedef HierarchyItems
 * @property {string} [name] - The name of the item as displayed to the user,
 *   usually in a UI or listing.
 * @property {string} [display_name] - It represent a country display name.
 * @property {string} [slug] - A slug is a human-readable URL segment, typically
 *   generated from a title with special characters removed.
 */

/**
 * @typedef CurrencyObject
 * @property {string} [code] - A string representing the currency code.
 * @property {string} [name] - A string representing the currency name.
 * @property {string} [symbol] - A string representing the currency symbol.
 */

/**
 * @typedef Localities
 * @property {string} [id] - A string serving as the unique identifier.
 * @property {string} [name] - The name of the locality.
 * @property {string} [display_name] - The display name of the locality.
 * @property {string[]} [parent_ids] - List of parent locality Ids.
 * @property {Object} [meta] - Additional metadata for the locality.\
 *   _Deprecated_*
 * @property {string} [type] - The type of the locality.
 * @property {PincodeLatLongData} [lat_long]
 * @property {string} [parent_uid] - Unique identifier of the parent locality,
 *   if available.
 * @property {LocalityParent[]} [localities] - List of child localities.
 * @property {string} [code] - Unique identifier of the geolocality.
 * @property {string} [iso2] - ISO 3166-1 alpha-2 code for the country.
 * @property {string} [iso3] - ISO 3166-1 alpha-3 code for the country.
 * @property {Object} [currency] - Currency information for the country.
 * @property {string} [phone_code] - Country's international phone dialing code.
 * @property {Object} [hierarchy] - Hierarchical data of the country's location.
 * @property {string} [latitude] - Latitude of the country's geographic center.
 * @property {string} [longitude] - Longitude of the country's geographic center.
 */

/**
 * @typedef PincodeLatLongData
 * @property {string} [type] - A string indicating the type of geographical data.
 * @property {number[]} [coordinates] - An array of numbers representing the
 *   latitude and longitude coordinates of the pincode.
 */

/**
 * @typedef LocalityParent
 * @property {string} [id] - A string serving as the unique identifier.
 * @property {string} [name] - A string representing the name of the locality.
 * @property {string} [display_name] - A string providing the display name of
 *   the locality.
 * @property {Object} [meta] - An object with additional properties for
 *   metadata, defaulting to an empty object.\
 *   _Deprecated_*
 * @property {string[]} [parent_ids] - A nullable array of strings listing the
 *   identifiers of parent localities, defaulting to an empty array.
 * @property {string} [type] - A string indicating the type of locality.
 * @property {Object} [serviceability] - An object with additional properties
 *   for serviceability details, defaulting to an empty object.
 * @property {string} [parent_uid] - A nullable string for the unique identifier
 *   of the parent locality, defaulting to an empty string.
 * @property {string} [code] - Unique Identifier of the Geolocality
 * @property {string} [iso2] - ISO 3166-1 alpha-2 code for the country.
 * @property {string} [iso3] - ISO 3166-1 alpha-3 code for the country.
 * @property {Object} [currency] - Currency information for the country.
 * @property {string} [phone_code] - Country's international phone dialing code.
 * @property {Object} [hierarchy] - Hierarchical data of the country's location.
 * @property {string} [latitude] - Latitude of the country's geographic center.
 * @property {string} [longitude] - Longitude of the country's geographic center.
 */

/**
 * @typedef CountryMetaFields
 * @property {ApplicationFields} [application_fields]
 */

/**
 * @typedef ApplicationFields
 * @property {GetCountryFieldsAddress[]} [address]
 * @property {string[]} [serviceability_fields] - An array of strings
 *   representing fields related to the serviceability of the country.
 * @property {GetCountryFieldsAddressTemplateApplication} [address_template]
 */

/**
 * @typedef GetCountryFieldsAddress
 * @property {string} display_name - The name displayed for the address field.
 * @property {string} slug - A slug is a human-readable URL segment, typically
 *   generated from a title with special characters removed.
 * @property {boolean} required - Indicates whether the field is mandatory for input.
 * @property {boolean} [edit] - Indicates whether the field is editable.
 * @property {string} input - The type of input type for the field (e.g., textbox, etc.).
 * @property {FieldValidation} [validation]
 * @property {GetCountryFieldsAddressValues} [values]
 * @property {string} [error_text] - Error message text displayed when
 *   validation fails or input is incorrect.
 */

/**
 * @typedef FieldValidation
 * @property {string} [type] - Type of field validation (e.g., regex, length).
 * @property {FieldValidationRegex} [regex]
 */

/**
 * @typedef FieldValidationRegex
 * @property {string} [value] - The regular expression pattern used for field validation.
 * @property {LengthValidation} [length]
 */

/**
 * @typedef LengthValidation
 * @property {number} [min] - Minimum length of the field.
 * @property {number} [max] - Maximum length of the field.
 */

/**
 * @typedef GetCountryFieldsAddressValues
 * @property {GetOneOrAll} [get_one]
 * @property {GetOneOrAll} [get_all]
 */

/**
 * @typedef GetOneOrAll
 * @property {string} [operation_id] - Unique identifier for the operation or
 *   action to be performed.
 * @property {GetOneOrAllParams} [params]
 */

/**
 * @typedef GetOneOrAllParams
 * @property {GetOneOrAllPath} [path]
 * @property {GetOneOrAllQuery} [query]
 */

/**
 * @typedef GetOneOrAllPath
 * @property {string} [type] - The type of resource being referenced in the path.
 * @property {string} [value] - The specific value or identifier associated with
 *   the path resource.
 */

/**
 * @typedef GetOneOrAllQuery
 * @property {string} [country] - The name of the country to filter results by,
 *   if specified.
 * @property {string} [state] - The name of the state to filter results by, if specified.
 * @property {string} [city] - The name of the city to filter results by, if specified.
 * @property {string} [sector] - The name of the sector to filter results by, if
 *   specified.
 */

/**
 * @typedef GetCountryFieldsAddressTemplateApplication
 * @property {string} checkout_form - A string representing the template used
 *   for displaying address fields in a checkout form.
 * @property {string} store_os_form - A string representing the template used
 *   for displaying address fields in a store operating system form.
 * @property {string} default_display - A string representing the default
 *   template used for displaying address fields.
 */

/**
 * @typedef CountryHierarchy
 * @property {string} [display_name] - A string representing the display name of
 *   the hierarchy level.
 * @property {string} [slug] - A slug is a human-readable URL segment, typically
 *   generated from a title with special characters removed.
 */

/**
 * @typedef GetCountryFields
 * @property {GetCountryFieldsAddress[]} address - An array containing instances
 *   of GetCountryFieldsAddress, which detail the address fields for a country.
 * @property {string[]} serviceability_fields - An array of strings representing
 *   fields related to the serviceability of the country.
 * @property {GetCountryFieldsAddressTemplate} address_template
 */

/**
 * @typedef GetCountryFieldsAddressTemplate
 * @property {string} checkout_form - A string representing the template used
 *   for displaying address fields for respective entity.
 * @property {string} store_os_form - A string representing the template used
 *   for displaying address fields for respective entity.
 * @property {string} default_display - A string representing the default
 *   template used for displaying address fields.
 */

/**
 * @typedef LocalityParents
 * @property {Object} [city] - A string denoting the city or municipality of the address.
 * @property {Object} [state] - A string indicating the state or province of the address.
 * @property {Object} [country] - A string indicating the country name.
 */

/**
 * @typedef ZoneConfig
 * @property {string} [serviceability_type] - Specifies the type of
 *   serviceability for the zone.
 * @property {number} [active_count] - The number of active zones.
 * @property {number} [total_count] - The total number of zones.
 */

/**
 * @typedef PromiseType
 * @property {string} display_name - The name displayed for the promise type.
 * @property {string} slug - A unique identifier for the promise type.
 * @property {string} description - A brief description of the promise type.
 * @property {boolean} is_active - Indicates whether the promise type is active.
 * @property {boolean} is_default - Indicates whether the promise type is set as default.
 * @property {boolean} [is_all_dps_considered] - Indicates whether all delivery
 *   points (DPs) are considered for the promise type.
 */

/**
 * @typedef InstallCourierPartnerItemsSchema
 * @property {string} [description] - A brief description of the courier partner
 *   or its services.
 * @property {string} [extention_type] - The type of the courier partner
 *   extension, which is not constrained to predefined values.
 * @property {boolean} [is_hidden] - Indicates if the courier partner is hidden
 *   from the available list, typically used for internal testing or staging.
 * @property {boolean} [is_installed] - A flag indicating whether the courier
 *   partner has been successfully installed and is active.
 * @property {string} [launch_type] - The type of launch for the courier
 *   partner, not constrained to predefined values.
 * @property {Object} [logo] - An object representing the logo of the courier
 *   partner, potentially including different sizes or formats.
 * @property {string} [modified_at] - The timestamp when the courier partner
 *   installation record was last modified.
 * @property {string} [name] - The name of the courier partner.
 * @property {string} [organization_id] - The unique identifier of the
 *   organization associated with the courier partner.
 * @property {string} [_id] - The unique identifier of the courier partner
 *   installation record.
 */

/**
 * @typedef HistoryObject
 * @property {string} batch_id - A unique identifier for the performed batch operation.
 * @property {string} [entity_type] - The type of entity associated with the batch.
 * @property {string} [error_file_url] - A URL linking to the error file
 *   generated during the batch process, if any errors occurred. This field can
 *   be null if no errors were encountered.
 * @property {string} [file_path] - The path to the file associated with the
 *   batch operation, typically where the processed data is stored.
 * @property {string} stage - The current stage or status of the batch (e.g.,
 *   processing, completed, failed).
 * @property {string} [updated_by] - The person or system that last updated the
 *   batch record (e.g., John Doe, System).
 * @property {string} [updated_at] - The timestamp of the last update to the
 *   batch record. This field can be null if the record has not been updated
 *   after creation.
 * @property {number} [total_count] - The total number of items or entities
 *   processed in this batch.
 * @property {number} [total_error_count] - The number of items or entities that
 *   encountered errors during the batch processing.
 */

class ServiceabilityPlatformModel {
  /** @returns {SelfshipSchema} */
  static SelfshipSchema() {
    return Joi.object({
      tat: Joi.number().required(),
      is_active: Joi.boolean().required(),
      unit: Joi.string().allow("").required(),
    });
  }

  /** @returns {ServiceabilityErrorResult} */
  static ServiceabilityErrorResult() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {UpdateZoneData} */
  static UpdateZoneData() {
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

  /** @returns {ZoneUpdateSuccessResult} */
  static ZoneUpdateSuccessResult() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      application_id: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      geo_areas: Joi.array().items(Joi.string().allow("")).required(),
      product: ServiceabilityPlatformModel.ProductSchema().required(),
      stores: ServiceabilityPlatformModel.StoresSchema().required(),
      zone_id: Joi.string().allow("").required(),
      created_by: ServiceabilityPlatformModel.CreatedBy(),
      modified_by: ServiceabilityPlatformModel.ModifiedBy(),
      created_on: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
    });
  }

  /** @returns {ServiceabilityDeleteErrorResult} */
  static ServiceabilityDeleteErrorResult() {
    return Joi.object({
      error: Joi.array()
        .items(ServiceabilityPlatformModel.ServiceabilityErrorResult())
        .required(),
    });
  }

  /** @returns {ZoneDeleteSuccessResult} */
  static ZoneDeleteSuccessResult() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {ListViewSchema} */
  static ListViewSchema() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.ListViewItems())
        .required(),
      page: ServiceabilityPlatformModel.Page().required(),
    });
  }

  /** @returns {GetZoneByIdSchema} */
  static GetZoneByIdSchema() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      product: ServiceabilityPlatformModel.ProductSchema().required(),
      stores: ServiceabilityPlatformModel.StoresSchema().required(),
      created_by: ServiceabilityPlatformModel.CreatedBy(),
      modified_by: ServiceabilityPlatformModel.ModifiedBy(),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      overlapping_file_url: Joi.string().allow("").allow(null),
      geo_areas: Joi.array().items(Joi.string().allow("")).required(),
      overlapping_zone_names: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CommonErrorResult} */
  static CommonErrorResult() {
    return Joi.object({
      error: Joi.array().items(ServiceabilityPlatformModel.Error()),
    });
  }

  /** @returns {CreateZoneDataSchema} */
  static CreateZoneDataSchema() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      slug: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      application_id: Joi.string().allow("").required(),
      geo_areas: Joi.array().items(Joi.string().allow("")).required(),
      stores: ServiceabilityPlatformModel.ZoneStores().required(),
      product: ServiceabilityPlatformModel.ZoneProduct().required(),
    });
  }

  /** @returns {ZoneBulkExport} */
  static ZoneBulkExport() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
    });
  }

  /** @returns {GetZoneBulkExport} */
  static GetZoneBulkExport() {
    return Joi.object({
      items: Joi.any(),
    });
  }

  /** @returns {CreateBulkZoneData} */
  static CreateBulkZoneData() {
    return Joi.object({
      file_url: Joi.any(),
      product_type: Joi.string().allow(""),
    });
  }

  /** @returns {ZoneSchema} */
  static ZoneSchema() {
    return Joi.object({
      name: Joi.any().required(),
      slug: Joi.any().required(),
      company_id: Joi.any().required(),
      application_id: Joi.any().required(),
      is_active: Joi.any().required(),
      geo_areas: Joi.any().required(),
      stores: Joi.any().required(),
      product: Joi.any().required(),
      created_by: ServiceabilityPlatformModel.CreatedBy(),
      modified_by: ServiceabilityPlatformModel.ModifiedBy(),
      created_on: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      stage: Joi.any().required(),
      zone_id: Joi.any().required(),
    });
  }

  /** @returns {CreateBulkZoneResult} */
  static CreateBulkZoneResult() {
    return Joi.object({
      zone_id: Joi.any(),
    });
  }

  /** @returns {BulkCreateZoneExport} */
  static BulkCreateZoneExport() {
    return Joi.object({
      placeholder: Joi.any(),
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

  /** @returns {PincodeMopUpdateAuditError} */
  static PincodeMopUpdateAuditError() {
    return Joi.object({
      status: Joi.number(),
      success: Joi.boolean(),
    });
  }

  /** @returns {PincodeMopBulkError} */
  static PincodeMopBulkError() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      status_code: Joi.number(),
      error: Joi.any(),
      success: Joi.boolean(),
    });
  }

  /** @returns {CommonError} */
  static CommonError() {
    return Joi.object({
      status_code: Joi.number(),
      error: Joi.any(),
      success: Joi.boolean(),
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

  /** @returns {PincodeCodStatusListingResult} */
  static PincodeCodStatusListingResult() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      data: Joi.array()
        .items(ServiceabilityPlatformModel.PincodeCodStatusItem())
        .required(),
      success: Joi.boolean().required(),
      errors: Joi.array().items(ServiceabilityPlatformModel.Error()),
      page: ServiceabilityPlatformModel.Page().required(),
      summary: ServiceabilityPlatformModel.PincodeCodStatusListingSummary().required(),
    });
  }

  /** @returns {PincodeMopUpdateAuditHistoryDetails} */
  static PincodeMopUpdateAuditHistoryDetails() {
    return Joi.object({
      entity_type: Joi.string().allow("").required(),
      file_name: Joi.string().allow(""),
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

  /** @returns {BulkGeoAreaDetails} */
  static BulkGeoAreaDetails() {
    return Joi.object({
      file_url: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {BulkGeoAreaResult} */
  static BulkGeoAreaResult() {
    return Joi.object({
      geoarea_id: Joi.string().allow(""),
    });
  }

  /** @returns {BulkGeoAreaGetResult} */
  static BulkGeoAreaGetResult() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      file_path: Joi.string().allow("").allow(null),
      total: Joi.number(),
      failed: Joi.number(),
      error_file_url: Joi.string().allow("").allow(null),
      action: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      type: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      file_url: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GeoAreaBulkCreationResult} */
  static GeoAreaBulkCreationResult() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
    });
  }

  /** @returns {GeoAreaBulkExportResult} */
  static GeoAreaBulkExportResult() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      file_path: Joi.string().allow("").allow(null),
      total: Joi.number(),
      failed: Joi.number(),
      error_file_url: Joi.string().allow("").allow(null),
      action: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_by: Joi.string().allow("").allow(null),
      type: Joi.string().allow(""),
      stage: Joi.string().allow(""),
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
      region_type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GeoAreaErrorResult} */
  static GeoAreaErrorResult() {
    return Joi.object({
      error: Joi.array().items(
        ServiceabilityPlatformModel.GeoAreaResponseDetail()
      ),
    });
  }

  /** @returns {GeoAreaResponseBody} */
  static GeoAreaResponseBody() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      areas: Joi.array().items(ServiceabilityPlatformModel.Area()).required(),
      region_type: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      created_by: ServiceabilityPlatformModel.CreatedBy(),
      modified_by: ServiceabilityPlatformModel.ModifiedBy(),
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
      region_type: Joi.string().allow("").allow(null),
      type: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_by: ServiceabilityPlatformModel.CreatedBy(),
      modified_by: ServiceabilityPlatformModel.ModifiedBy(),
      upload_type: Joi.string().allow(""),
    });
  }

  /** @returns {GeoAreaGetResponseBody} */
  static GeoAreaGetResponseBody() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityPlatformModel.GeoAreaItemResult()),
      page: ServiceabilityPlatformModel.Page2(),
    });
  }

  /** @returns {GeoAreaDetails} */
  static GeoAreaDetails() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      application_id: Joi.string().allow(""),
      company_id: Joi.number(),
      geoarea_id: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      type: Joi.string().allow("").required(),
      region_type: Joi.string().allow("").allow(null),
      areas: Joi.array()
        .items(ServiceabilityPlatformModel.AreaExpanded())
        .required(),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_by: ServiceabilityPlatformModel.CreatedBy(),
      modified_by: ServiceabilityPlatformModel.ModifiedBy(),
    });
  }

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").allow(null),
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

  /** @returns {CourierPartnerRuleResult} */
  static CourierPartnerRuleResult() {
    return Joi.object({
      is_active: Joi.boolean(),
      application_id: Joi.string().allow(""),
      company_id: Joi.number(),
      manual_priority: Joi.array().items(Joi.string().allow("")),
      filters: Joi.string().allow(""),
      conditions: ServiceabilityPlatformModel.CourierPartnerRuleConditions(),
      sort: Joi.array().items(Joi.string().allow("")),
      created_by: ServiceabilityPlatformModel.CreatedBy(),
      id: Joi.string().allow(""),
      modified_by: ServiceabilityPlatformModel.ModifiedBy(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      cp_list: Joi.array().items(
        ServiceabilityPlatformModel.CourierPartnerRuleCPListResult()
      ),
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
      manual_priority: Joi.array().items(Joi.string().allow("")).required(),
      filters: Joi.string().allow("").required(),
      conditions: ServiceabilityPlatformModel.CourierPartnerRuleConditions().required(),
      sort: Joi.array().items(Joi.string().allow("")).required(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {BulkFailureResult} */
  static BulkFailureResult() {
    return Joi.object({
      success: Joi.boolean(),
      error: Joi.array().items(ServiceabilityPlatformModel.Error()).required(),
    });
  }

  /** @returns {FailureResult} */
  static FailureResult() {
    return Joi.object({
      success: Joi.boolean(),
      error: Joi.array().items(ServiceabilityPlatformModel.Error()),
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

  /** @returns {ShipmentCourierPartnerDetails} */
  static ShipmentCourierPartnerDetails() {
    return Joi.object({
      from_location: ServiceabilityPlatformModel.ShipmentsCourierPartnersServiceability().required(),
      to_location: ServiceabilityPlatformModel.ShipmentsCourierPartnersServiceability().required(),
      shipments: Joi.array().items(ServiceabilityPlatformModel.CPShipments()),
      journey: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
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
      delivery_promise: ServiceabilityPlatformModel.CourierPartnerPromise(),
    });
  }

  /** @returns {CompanyConfig} */
  static CompanyConfig() {
    return Joi.object({
      company_id: Joi.number(),
      sort: Joi.array().items(Joi.string().allow("")),
      logistics_as_actual: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationConfigPatch} */
  static ApplicationConfigPatch() {
    return Joi.object({
      courier_partner_config: ServiceabilityPlatformModel.CourierPartnerConfig(),
      buybox_rule_config: ServiceabilityPlatformModel.BuyboxRuleConfig(),
      promise_config: ServiceabilityPlatformModel.PromiseConfig(),
    });
  }

  /** @returns {ApplicationConfigPatchResult} */
  static ApplicationConfigPatchResult() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {BulkRegionJobDetails} */
  static BulkRegionJobDetails() {
    return Joi.object({
      file_path: Joi.string().allow(""),
      country: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkRegionResultItemData} */
  static BulkRegionResultItemData() {
    return Joi.object({
      file_path: Joi.string().allow("").required(),
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
      modified_on: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
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
      meta_sort_priority: Joi.object().pattern(/\S/, Joi.any()),
      manual_priority: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {StoreRuleDataSchema} */
  static StoreRuleDataSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      manual_priority: Joi.array().items(Joi.number()),
      meta_sort_priority: Joi.object().pattern(/\S/, Joi.any()),
      meta_conditions: Joi.object().pattern(/\S/, Joi.any()),
      filters: Joi.string().allow(""),
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
      manual_priority: Joi.array().items(Joi.number()),
      meta_sort_priority: Joi.object().pattern(/\S/, Joi.any()),
      meta_conditions: Joi.object().pattern(/\S/, Joi.any()),
      filters: Joi.string().allow(""),
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
      manual_priority: Joi.array().items(Joi.number()),
      meta_sort_priority: Joi.object().pattern(/\S/, Joi.any()),
      meta_conditions: Joi.object().pattern(/\S/, Joi.any()),
      filters: Joi.string().allow(""),
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
      manual_priority: Joi.array().items(Joi.number()),
      meta_sort_priority: Joi.object().pattern(/\S/, Joi.any()),
      meta_conditions: Joi.object().pattern(/\S/, Joi.any()),
      filters: Joi.string().allow(""),
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

  /** @returns {CourierAccountResult} */
  static CourierAccountResult() {
    return Joi.object({
      account_id: Joi.string().allow("").required(),
      company_id: Joi.number(),
      scheme_id: Joi.string().allow("").required(),
      extension_id: Joi.string().allow(""),
      is_self_ship: Joi.boolean().required(),
      stage: Joi.string().allow("").required(),
      is_own_account: Joi.boolean().required(),
      scheme_rules: ServiceabilityPlatformModel.CourierPartnerSchemeModel().required(),
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

  /** @returns {PackageMaterialNotFound} */
  static PackageMaterialNotFound() {
    return Joi.object({
      status_code: Joi.number(),
      success: Joi.boolean(),
    });
  }

  /** @returns {PackageMaterialsErrorResult} */
  static PackageMaterialsErrorResult() {
    return Joi.object({
      value: Joi.string().allow(""),
      message: Joi.string().allow(""),
      type: Joi.string().allow(""),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {PackageMaterialResult} */
  static PackageMaterialResult() {
    return Joi.object({
      company_id: Joi.number(),
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
      is_active: Joi.boolean(),
      status: Joi.string().allow("").required(),
      max_weight: Joi.number(),
      package_vol_weight: Joi.number(),
      auto_calculate: Joi.boolean(),
    });
  }

  /** @returns {PackageRule} */
  static PackageRule() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      category_id: ServiceabilityPlatformModel.PackageRuleCategory(),
      product_id: ServiceabilityPlatformModel.PackageRuleProduct(),
      product_tag: ServiceabilityPlatformModel.PackageRuleProductTag(),
      department_id: ServiceabilityPlatformModel.PackageRuleDepartmentId(),
      product_attributes: ServiceabilityPlatformModel.PackageRuleProductAttributes(),
      type: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
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
      department_id: ServiceabilityPlatformModel.PackageRuleDepartmentId(),
      product_attributes: ServiceabilityPlatformModel.PackageRuleProductAttributes(),
      category_id: ServiceabilityPlatformModel.PackageRuleCategory(),
    });
  }

  /** @returns {PackagesListResult} */
  static PackagesListResult() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityPlatformModel.PackageItem()),
      page: ServiceabilityPlatformModel.PackagePageInfo(),
    });
  }

  /** @returns {PackageItem} */
  static PackageItem() {
    return Joi.object({
      name: Joi.string().allow(""),
      weight: Joi.number(),
      track_inventory: Joi.boolean(),
      length: Joi.number(),
      channels: Joi.array().items(ServiceabilityPlatformModel.PackageChannel()),
      package_type: Joi.string().allow(""),
      rules: Joi.array().items(ServiceabilityPlatformModel.PackageRuleSchema()),
      height: Joi.number(),
      error_rate: Joi.number(),
      width: Joi.number(),
      is_active: Joi.boolean(),
      size: Joi.string().allow(""),
      company_id: Joi.number(),
      item_id: Joi.number(),
      max_weight: Joi.number(),
      media: Joi.array().items(Joi.any()),
      package_vol_weight: Joi.number(),
      status: Joi.string().allow(""),
      auto_calculate: Joi.boolean(),
      id: Joi.string().allow(""),
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

  /** @returns {OptimalLocationsResult} */
  static OptimalLocationsResult() {
    return Joi.object({
      assigned_stores: Joi.array()
        .items(
          ServiceabilityPlatformModel.OptimalLocationAssignedStoresResult()
        )
        .required(),
      faulty_articles: Joi.array().items(ServiceabilityPlatformModel.Error()),
    });
  }

  /** @returns {OptimlLocationsRequestSchema} */
  static OptimlLocationsRequestSchema() {
    return Joi.object({
      channel_id: Joi.string().allow("").required(),
      channel_type: Joi.string().allow("").required(),
      channel_identifier: Joi.string().allow(""),
      to_serviceability: ServiceabilityPlatformModel.LocationDetailsServiceability().required(),
      articles: Joi.array()
        .items(ServiceabilityPlatformModel.OptimalLocationsArticles())
        .required(),
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

  /** @returns {CourierPartnerSchemeDetailsModel} */
  static CourierPartnerSchemeDetailsModel() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      default_forward_pickup_cutoff: Joi.string().allow("").allow(null),
      default_reverse_pickup_cutoff: Joi.string().allow("").allow(null),
      default_tat: ServiceabilityPlatformModel.CourierPartnerSchemeDefaultTat(),
      weight: ServiceabilityPlatformModel.ArithmeticOperations().required(),
      volumetric_weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      status_updates: Joi.string().allow(""),
      ndr_attempts: Joi.number(),
      qc_shipment_item_quantity: Joi.number().allow(null),
      non_qc_shipment_item_quantity: Joi.number().allow(null),
      feature: ServiceabilityPlatformModel.CourierPartnerSchemeFeatures().required(),
    });
  }

  /** @returns {CourierPartnerSchemeModelSchema} */
  static CourierPartnerSchemeModelSchema() {
    return Joi.object({
      created_by: ServiceabilityPlatformModel.CreatedBy(),
      created_on: Joi.string().allow(""),
      modified_by: ServiceabilityPlatformModel.ModifiedBy(),
      modified_on: Joi.string().allow(""),
      extension_id: Joi.string().allow(""),
      scheme_id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      weight: ServiceabilityPlatformModel.ArithmeticOperations().required(),
      volumetric_weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      status_updates: Joi.string().allow(""),
      ndr_attempts: Joi.number(),
      qc_shipment_item_quantity: Joi.number().allow(null),
      non_qc_shipment_item_quantity: Joi.number().allow(null),
      feature: ServiceabilityPlatformModel.CourierPartnerSchemeFeatures().required(),
    });
  }

  /** @returns {CourierPartnerSchemeUpdateDetailsSchema} */
  static CourierPartnerSchemeUpdateDetailsSchema() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      weight: ServiceabilityPlatformModel.ArithmeticOperations().required(),
      volumetric_weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      status_updates: Joi.string().allow(""),
      ndr_attempts: Joi.number(),
      qc_shipment_item_quantity: Joi.number().allow(null),
      non_qc_shipment_item_quantity: Joi.number().allow(null),
      feature: ServiceabilityPlatformModel.CourierPartnerSchemeFeatures().required(),
    });
  }

  /** @returns {CourierPartnerSchemeList} */
  static CourierPartnerSchemeList() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.CourierPartnerSchemeModelSchema())
        .required(),
      page: ServiceabilityPlatformModel.Page().required(),
    });
  }

  /** @returns {BulkRegionServiceabilityTatDetails} */
  static BulkRegionServiceabilityTatDetails() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkRegionServiceabilityTatResultItemData} */
  static BulkRegionServiceabilityTatResultItemData() {
    return Joi.object({
      country: Joi.string().allow(""),
      region: Joi.string().allow(""),
      type: Joi.string().allow(""),
      batch_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      failed_records: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      file_path: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BulkRegionServiceabilityTatResult} */
  static BulkRegionServiceabilityTatResult() {
    return Joi.object({
      items: Joi.array().items(
        ServiceabilityPlatformModel.BulkRegionServiceabilityTatResultItemData()
      ),
      page: ServiceabilityPlatformModel.Page(),
    });
  }

  /** @returns {GetCountries} */
  static GetCountries() {
    return Joi.object({
      items: Joi.array()
        .items(ServiceabilityPlatformModel.GetCountriesItems())
        .required(),
      page: ServiceabilityPlatformModel.Page().required(),
    });
  }

  /** @returns {GetLocalities} */
  static GetLocalities() {
    return Joi.object({
      items: Joi.array().items(ServiceabilityPlatformModel.Localities()),
      page: ServiceabilityPlatformModel.Page(),
    });
  }

  /** @returns {GetCountry} */
  static GetCountry() {
    return Joi.object({
      meta: ServiceabilityPlatformModel.CountryMetaFields(),
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      timezones: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      hierarchy: Joi.array().items(
        ServiceabilityPlatformModel.CountryHierarchy()
      ),
      phone_code: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
      currency: ServiceabilityPlatformModel.CurrencyObject(),
      type: Joi.string().allow(""),
      fields: ServiceabilityPlatformModel.GetCountryFields(),
    });
  }

  /** @returns {BulkImportLocalitiesDetails} */
  static BulkImportLocalitiesDetails() {
    return Joi.object({
      file_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkImportLocalitiesResult} */
  static BulkImportLocalitiesResult() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      file_url: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {BulkErrorResult} */
  static BulkErrorResult() {
    return Joi.object({
      success: Joi.boolean().required(),
      status_code: Joi.number().required(),
      error: Joi.string().allow(""),
      batch_id: Joi.string().allow(""),
      total_count: Joi.number(),
      total_error_count: Joi.number(),
      error_file_url: Joi.string().allow(""),
    });
  }

  /** @returns {LocalitiesBulkExport} */
  static LocalitiesBulkExport() {
    return Joi.object({
      country_iso_code: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      batch_id: Joi.string().allow("").required(),
      offset: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {LocalitiesBulkExportFetch} */
  static LocalitiesBulkExportFetch() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      download_percentage: Joi.number().required(),
      url_path: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {LocalitiesErrorResult} */
  static LocalitiesErrorResult() {
    return Joi.object({
      success: Joi.boolean().required(),
      status_code: Joi.number().required(),
      error: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetLocality} */
  static GetLocality() {
    return Joi.object({
      meta: Joi.object().pattern(/\S/, Joi.any()),
      parent_uid: Joi.string().allow("").allow(null),
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      code: Joi.string().allow(""),
      custom_meta: Joi.object().pattern(/\S/, Joi.any()),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      localities: Joi.array().items(
        ServiceabilityPlatformModel.LocalityParent()
      ),
      type: Joi.string().allow(""),
      parents: ServiceabilityPlatformModel.LocalityParents(),
    });
  }

  /** @returns {ValidateAddress} */
  static ValidateAddress() {
    return Joi.object({
      address: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      address_meta: Joi.object().pattern(/\S/, Joi.any()),
      address2: Joi.string().allow(""),
      area: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      name: Joi.string().allow("").allow(null),
      phone: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      country_iso_code: Joi.string().allow(""),
    });
  }

  /** @returns {ErrorResult} */
  static ErrorResult() {
    return Joi.object({
      success: Joi.boolean(),
      error: ServiceabilityPlatformModel.Error(),
    });
  }

  /** @returns {ApplicationConfigPut} */
  static ApplicationConfigPut() {
    return Joi.object({
      rule_ids: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")),
      manual_priority: Joi.array().items(Joi.string().allow("")),
      application_id: Joi.string().allow(""),
      company_id: Joi.number(),
    });
  }

  /** @returns {ApplicationConfigPutDetail} */
  static ApplicationConfigPutDetail() {
    return Joi.object({
      rule_ids: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")),
      manual_priority: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ApplicationConfigGetResult} */
  static ApplicationConfigGetResult() {
    return Joi.object({
      zones: ServiceabilityPlatformModel.ZoneConfig(),
      courier_partner_config: ServiceabilityPlatformModel.CourierPartnerConfig(),
      buybox_rule_config: ServiceabilityPlatformModel.BuyboxRuleConfig(),
      promise_types: Joi.array().items(
        ServiceabilityPlatformModel.PromiseType()
      ),
      promise_config: ServiceabilityPlatformModel.PromiseConfig(),
    });
  }

  /** @returns {InstallCourierPartnerResponseSchema} */
  static InstallCourierPartnerResponseSchema() {
    return Joi.object({
      items: Joi.array().items(
        ServiceabilityPlatformModel.InstallCourierPartnerItemsSchema()
      ),
      page: ServiceabilityPlatformModel.Page(),
    });
  }

  /** @returns {GetLocalitiesBulkHistory} */
  static GetLocalitiesBulkHistory() {
    return Joi.object({
      page: ServiceabilityPlatformModel.Page().required(),
      items: Joi.array()
        .items(ServiceabilityPlatformModel.HistoryObject())
        .required(),
    });
  }

  /** @returns {CompanyConfigurationSchema} */
  static CompanyConfigurationSchema() {
    return Joi.object({
      sort: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ProductSchema} */
  static ProductSchema() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.any()).required(),
    });
  }

  /** @returns {StoresSchema} */
  static StoresSchema() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {CreatedBy} */
  static CreatedBy() {
    return Joi.object({
      id: Joi.string().allow("").allow(null),
    }).allow(null);
  }

  /** @returns {ModifiedBy} */
  static ModifiedBy() {
    return Joi.object({
      id: Joi.string().allow("").allow(null),
    }).allow(null);
  }

  /** @returns {ListViewItems} */
  static ListViewItems() {
    return Joi.object({
      zone_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      geo_areas: Joi.array()
        .items(ServiceabilityPlatformModel.GeoArea())
        .required(),
      slug: Joi.string().allow("").required(),
      stores: ServiceabilityPlatformModel.ListViewProduct().required(),
      is_active: Joi.boolean().required(),
      product: ServiceabilityPlatformModel.ListViewProduct().required(),
      company_id: Joi.number().required(),
      application_id: Joi.string().allow("").required(),
      created_by: ServiceabilityPlatformModel.CreatedBy().required(),
      modified_by: ServiceabilityPlatformModel.ModifiedBy().required(),
      created_on: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      stage: Joi.string().allow(""),
      summary: ServiceabilityPlatformModel.Summary(),
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

  /** @returns {ListViewProduct} */
  static ListViewProduct() {
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
      page_size: Joi.number(),
    });
  }

  /** @returns {ZoneStores} */
  static ZoneStores() {
    return Joi.object({
      type: Joi.any().required(),
      values: Joi.any().required(),
    });
  }

  /** @returns {ZoneProduct} */
  static ZoneProduct() {
    return Joi.object({
      type: Joi.any().required(),
      values: Joi.any().required(),
    });
  }

  /** @returns {ZoneBulkItem} */
  static ZoneBulkItem() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      file_path: Joi.string().allow("").allow(null),
      total: Joi.any(),
      failed: Joi.any(),
      error_file_url: Joi.string().allow("").allow(null),
      action: Joi.any(),
      updated_at: Joi.any(),
      updated_by: Joi.any(),
      type: Joi.any(),
      stage: Joi.any(),
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

  /** @returns {PincodeCodStatusItem} */
  static PincodeCodStatusItem() {
    return Joi.object({
      active: Joi.boolean(),
      pincode: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeCodStatusListingSummary} */
  static PincodeCodStatusListingSummary() {
    return Joi.object({
      total_active_pincodes: Joi.number().required(),
      total_inactive_pincodes: Joi.number().required(),
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

  /** @returns {Area} */
  static Area() {
    return Joi.object({
      regions: Joi.array().items(Joi.string().allow("")),
      country: Joi.string().allow(""),
    });
  }

  /** @returns {GeoAreaResponseDetail} */
  static GeoAreaResponseDetail() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
      message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GeoAreaItemResult} */
  static GeoAreaItemResult() {
    return Joi.object({
      company_id: Joi.number().required(),
      application_id: Joi.string().allow("").required(),
      geoarea_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      region_type: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").required(),
      areas: Joi.array()
        .items(ServiceabilityPlatformModel.AreaExpanded())
        .required(),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_by: ServiceabilityPlatformModel.CreatedBy(),
      modified_by: ServiceabilityPlatformModel.ModifiedBy(),
    });
  }

  /** @returns {AreaExpanded} */
  static AreaExpanded() {
    return Joi.object({
      country: ServiceabilityPlatformModel.Country(),
      regions: Joi.array().items(ServiceabilityPlatformModel.Region()),
    });
  }

  /** @returns {Country} */
  static Country() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {Region} */
  static Region() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
      sub_type: Joi.string().allow("").required(),
      parent_id: Joi.array().items(Joi.string().allow("")).required(),
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
      store_customer_location: ServiceabilityPlatformModel.StringComparisonOperations(),
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

  /** @returns {LocationRuleValues} */
  static LocationRuleValues() {
    return Joi.object({
      uid: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      parent_id: Joi.array().items(Joi.string().allow("")),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      id: Joi.string().allow(""),
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

  /** @returns {ArithmeticOperations} */
  static ArithmeticOperations() {
    return Joi.object({
      lt: Joi.number().allow(null),
      gt: Joi.number().allow(null),
      lte: Joi.number().allow(null),
      gte: Joi.number().allow(null),
    });
  }

  /** @returns {CourierPartnerRuleCPListResult} */
  static CourierPartnerRuleCPListResult() {
    return Joi.object({
      account_id: Joi.string().allow("").required(),
      extension_id: Joi.string().allow("").required(),
      is_self_ship: Joi.boolean().required(),
      scheme_rules: ServiceabilityPlatformModel.CourierPartnerSchemeDetailsModel(),
      stage: Joi.string().allow(""),
    });
  }

  /** @returns {CourierPartnerSchemeDefaultTat} */
  static CourierPartnerSchemeDefaultTat() {
    return Joi.object({
      enabled: Joi.boolean(),
      tat: ServiceabilityPlatformModel.CourierPartnerSchemeTat(),
    });
  }

  /** @returns {CourierPartnerSchemeTat} */
  static CourierPartnerSchemeTat() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
      unit: Joi.string().allow(""),
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
      qc_shipment_item_quantity: Joi.number().allow(null),
      non_qc_shipment_item_quantity: Joi.number().allow(null),
    });
  }

  /** @returns {CourierPartnerList} */
  static CourierPartnerList() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      account_id: Joi.string().allow("").required(),
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

  /** @returns {CPShipments} */
  static CPShipments() {
    return Joi.object({
      id: Joi.string().allow(""),
      location_id: Joi.number(),
      location_tags: Joi.array().items(Joi.string().allow("")),
      shipment_weight: Joi.number(),
      shipment_volumetric_weight: Joi.number(),
      shipment_cost: Joi.number(),
      shipment_dimension: ServiceabilityPlatformModel.ShipmentDimension(),
      courier_partner_schemes: Joi.array().items(Joi.string().allow("")),
      location_type: Joi.string().allow(""),
      articles: Joi.array().items(
        ServiceabilityPlatformModel.ShipmentsArticles()
      ),
    });
  }

  /** @returns {ShipmentDimension} */
  static ShipmentDimension() {
    return Joi.object({
      height: Joi.number().required(),
      length: Joi.number().required(),
      width: Joi.number().required(),
      is_default: Joi.boolean(),
      unit: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentsArticles} */
  static ShipmentsArticles() {
    return Joi.object({
      id: Joi.string().allow(""),
      item_id: Joi.number(),
      sla: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      size: Joi.string().allow(""),
      group_id: Joi.string().allow(""),
      weight: ServiceabilityPlatformModel.ArticleWeight(),
      attributes: ServiceabilityPlatformModel.ArticleAttributes(),
      category_id: Joi.number(),
      department_id: Joi.number(),
      dimension: ServiceabilityPlatformModel.ArticleDimension(),
      price: Joi.number(),
      brand_id: Joi.number(),
      quantity: Joi.number(),
      manufacturing_time: Joi.number(),
      manufacturing_time_unit: Joi.string().allow(""),
      mto_quantity: Joi.number(),
      is_gift: Joi.boolean(),
      is_set: Joi.boolean(),
      set: ServiceabilityPlatformModel.ArticleSet(),
      set_quantity: Joi.number(),
      delivery_slots: ServiceabilityPlatformModel.ArticleDeliverySlots(),
      return_reason: ServiceabilityPlatformModel.ArticleReturnReason(),
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

  /** @returns {ArticleAttributes} */
  static ArticleAttributes() {
    return Joi.object({
      battery_operated: Joi.string().allow("").required(),
      is_flammable: Joi.string().allow("").required(),
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

  /** @returns {ArticleSet} */
  static ArticleSet() {
    return Joi.object({
      name: Joi.string().allow(""),
      quantity: Joi.number(),
      size_distribution: ServiceabilityPlatformModel.ArticleSizeDistribution(),
    });
  }

  /** @returns {ArticleSizeDistribution} */
  static ArticleSizeDistribution() {
    return Joi.object({
      sizes: Joi.array()
        .items(ServiceabilityPlatformModel.SetSize())
        .required(),
    });
  }

  /** @returns {SetSize} */
  static SetSize() {
    return Joi.object({
      pieces: Joi.number().required(),
      size: Joi.string().allow("").required(),
    });
  }

  /** @returns {ArticleDeliverySlots} */
  static ArticleDeliverySlots() {
    return Joi.object({
      delivery_date: Joi.string().allow(""),
      min_slot: Joi.string().allow(""),
      max_slot: Joi.string().allow(""),
    });
  }

  /** @returns {ArticleReturnReason} */
  static ArticleReturnReason() {
    return Joi.object({
      qc_type: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {CourierPartnerPromise} */
  static CourierPartnerPromise() {
    return Joi.object({
      min: Joi.string().allow("").required(),
      max: Joi.string().allow("").required(),
      attributes: ServiceabilityPlatformModel.CourierPartnerAttributes(),
    });
  }

  /** @returns {CourierPartnerAttributes} */
  static CourierPartnerAttributes() {
    return Joi.object({
      tat: ServiceabilityPlatformModel.CourierPartnerTAT(),
    });
  }

  /** @returns {CourierPartnerTAT} */
  static CourierPartnerTAT() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {ShipmentCourierPartners} */
  static ShipmentCourierPartners() {
    return Joi.object({
      id: Joi.string().allow(""),
      courier_partners: Joi.array().items(
        ServiceabilityPlatformModel.CourierPartners()
      ),
      delivery_promise: ServiceabilityPlatformModel.CourierPartnerPromise(),
    });
  }

  /** @returns {CourierPartnerConfig} */
  static CourierPartnerConfig() {
    return Joi.object({
      rule_ids: Joi.array().items(Joi.string().allow("")),
      sort: Joi.array().items(Joi.string().allow("")),
      manual_priority: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {PromiseConfig} */
  static PromiseConfig() {
    return Joi.object({
      store_attributes: ServiceabilityPlatformModel.StorePromiseAttributeConfig(),
      delivery_service_attributes: ServiceabilityPlatformModel.DeliveryServiceAttributeConfig(),
      buffer_field: ServiceabilityPlatformModel.BufferField(),
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
      is_all_dps_considered: Joi.boolean(),
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

  /** @returns {StorePrioritySchema} */
  static StorePrioritySchema() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
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
      order_place_date: ServiceabilityPlatformModel.DateOperations(),
      zone_ids: ServiceabilityPlatformModel.StringComparisonOperations(),
    });
  }

  /** @returns {CustomerRadiusSchema} */
  static CustomerRadiusSchema() {
    return Joi.object({
      unit: Joi.string().allow(""),
      lt: Joi.number(),
      lte: Joi.number(),
      gt: Joi.number(),
      gte: Joi.number(),
    });
  }

  /** @returns {DateOperations} */
  static DateOperations() {
    return Joi.object({
      lt: Joi.string().allow("").allow(null),
      gt: Joi.string().allow("").allow(null),
      lte: Joi.string().allow("").allow(null),
      gte: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CourierPartnerSchemeModel} */
  static CourierPartnerSchemeModel() {
    return Joi.object({
      extension_id: Joi.string().allow("").required(),
      scheme_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      weight: ServiceabilityPlatformModel.ArithmeticOperations().required(),
      volumetric_weight: ServiceabilityPlatformModel.ArithmeticOperations(),
      transport_type: Joi.string().allow("").required(),
      region: Joi.string().allow("").required(),
      delivery_type: Joi.string().allow("").required(),
      payment_mode: Joi.array().items(Joi.string().allow("")).required(),
      stage: Joi.string().allow("").required(),
      feature: ServiceabilityPlatformModel.CourierPartnerSchemeFeatures().required(),
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

  /** @returns {PackageMaterialRuleQuantity} */
  static PackageMaterialRuleQuantity() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {Channel} */
  static Channel() {
    return Joi.object({
      type: Joi.string().allow(""),
      id: Joi.string().allow(""),
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

  /** @returns {PackageRuleDepartmentId} */
  static PackageRuleDepartmentId() {
    return Joi.object({
      includes: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {PackageRuleProductAttributes} */
  static PackageRuleProductAttributes() {
    return Joi.object({
      includes: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
    });
  }

  /** @returns {PackageChannel} */
  static PackageChannel() {
    return Joi.object({
      store_filter: ServiceabilityPlatformModel.StoreFilter(),
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {StoreFilter} */
  static StoreFilter() {
    return Joi.object({
      type: Joi.string().allow(""),
      ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {PackageRuleSchema} */
  static PackageRuleSchema() {
    return Joi.object({
      quantity: ServiceabilityPlatformModel.Quantity(),
      rule_id: Joi.string().allow(""),
      weight: Joi.number(),
    });
  }

  /** @returns {Quantity} */
  static Quantity() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {PackagePageInfo} */
  static PackagePageInfo() {
    return Joi.object({
      type: Joi.string().allow(""),
      size: Joi.number(),
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
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

  /** @returns {ArticleAssignment} */
  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
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

  /** @returns {ServiceabilityLocation} */
  static ServiceabilityLocation() {
    return Joi.object({
      longitude: Joi.string().allow("").required(),
      latitude: Joi.string().allow("").required(),
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

  /** @returns {GetCountriesItems} */
  static GetCountriesItems() {
    return Joi.object({
      id: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      name: Joi.string().allow(""),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      timezones: Joi.array().items(Joi.string().allow("")),
      hierarchy: Joi.array().items(
        ServiceabilityPlatformModel.HierarchyItems()
      ),
      phone_code: Joi.string().allow(""),
      currency: ServiceabilityPlatformModel.CurrencyObject(),
      type: Joi.string().allow(""),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      has_next_hierarchy: Joi.boolean(),
    });
  }

  /** @returns {HierarchyItems} */
  static HierarchyItems() {
    return Joi.object({
      name: Joi.string().allow(""),
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

  /** @returns {Localities} */
  static Localities() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      parent_ids: Joi.array().items(Joi.string().allow("")),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      type: Joi.string().allow(""),
      lat_long: ServiceabilityPlatformModel.PincodeLatLongData(),
      parent_uid: Joi.string().allow("").allow(null),
      localities: Joi.array().items(
        ServiceabilityPlatformModel.LocalityParent()
      ),
      code: Joi.string().allow(""),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      currency: Joi.object().pattern(/\S/, Joi.any()),
      phone_code: Joi.string().allow(""),
      hierarchy: Joi.object().pattern(/\S/, Joi.any()),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
    });
  }

  /** @returns {PincodeLatLongData} */
  static PincodeLatLongData() {
    return Joi.object({
      type: Joi.string().allow(""),
      coordinates: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {LocalityParent} */
  static LocalityParent() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      parent_ids: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      type: Joi.string().allow(""),
      serviceability: Joi.object().pattern(/\S/, Joi.any()),
      parent_uid: Joi.string().allow("").allow(null),
      code: Joi.string().allow(""),
      iso2: Joi.string().allow(""),
      iso3: Joi.string().allow(""),
      currency: Joi.object().pattern(/\S/, Joi.any()),
      phone_code: Joi.string().allow(""),
      hierarchy: Joi.object().pattern(/\S/, Joi.any()),
      latitude: Joi.string().allow(""),
      longitude: Joi.string().allow(""),
    });
  }

  /** @returns {CountryMetaFields} */
  static CountryMetaFields() {
    return Joi.object({
      application_fields: ServiceabilityPlatformModel.ApplicationFields(),
    });
  }

  /** @returns {ApplicationFields} */
  static ApplicationFields() {
    return Joi.object({
      address: Joi.array()
        .items(ServiceabilityPlatformModel.GetCountryFieldsAddress())
        .allow(null, ""),
      serviceability_fields: Joi.array()
        .items(Joi.string().allow(""))
        .allow(null, ""),
      address_template: ServiceabilityPlatformModel.GetCountryFieldsAddressTemplateApplication(),
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
      validation: ServiceabilityPlatformModel.FieldValidation(),
      values: ServiceabilityPlatformModel.GetCountryFieldsAddressValues(),
      error_text: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {FieldValidation} */
  static FieldValidation() {
    return Joi.object({
      type: Joi.string().allow(""),
      regex: ServiceabilityPlatformModel.FieldValidationRegex(),
    }).allow(null);
  }

  /** @returns {FieldValidationRegex} */
  static FieldValidationRegex() {
    return Joi.object({
      value: Joi.string().allow(""),
      length: ServiceabilityPlatformModel.LengthValidation(),
    });
  }

  /** @returns {LengthValidation} */
  static LengthValidation() {
    return Joi.object({
      min: Joi.number().allow(null),
      max: Joi.number().allow(null),
    });
  }

  /** @returns {GetCountryFieldsAddressValues} */
  static GetCountryFieldsAddressValues() {
    return Joi.object({
      get_one: ServiceabilityPlatformModel.GetOneOrAll(),
      get_all: ServiceabilityPlatformModel.GetOneOrAll(),
    }).allow(null);
  }

  /** @returns {GetOneOrAll} */
  static GetOneOrAll() {
    return Joi.object({
      operation_id: Joi.string().allow(""),
      params: ServiceabilityPlatformModel.GetOneOrAllParams(),
    }).allow(null);
  }

  /** @returns {GetOneOrAllParams} */
  static GetOneOrAllParams() {
    return Joi.object({
      path: ServiceabilityPlatformModel.GetOneOrAllPath(),
      query: ServiceabilityPlatformModel.GetOneOrAllQuery(),
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

  /** @returns {GetCountryFieldsAddressTemplateApplication} */
  static GetCountryFieldsAddressTemplateApplication() {
    return Joi.object({
      checkout_form: Joi.string().allow("").required(),
      store_os_form: Joi.string().allow("").required(),
      default_display: Joi.string().allow("").required(),
    });
  }

  /** @returns {CountryHierarchy} */
  static CountryHierarchy() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {GetCountryFields} */
  static GetCountryFields() {
    return Joi.object({
      address: Joi.array()
        .items(ServiceabilityPlatformModel.GetCountryFieldsAddress())
        .required(),
      serviceability_fields: Joi.array()
        .items(Joi.string().allow(""))
        .required(),
      address_template: ServiceabilityPlatformModel.GetCountryFieldsAddressTemplate().required(),
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

  /** @returns {LocalityParents} */
  static LocalityParents() {
    return Joi.object({
      city: Joi.any().allow(null),
      state: Joi.any().allow(null),
      country: Joi.any().allow(null),
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

  /** @returns {PromiseType} */
  static PromiseType() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      is_all_dps_considered: Joi.boolean(),
    });
  }

  /** @returns {InstallCourierPartnerItemsSchema} */
  static InstallCourierPartnerItemsSchema() {
    return Joi.object({
      description: Joi.string().allow(""),
      extention_type: Joi.string().allow(""),
      is_hidden: Joi.boolean(),
      is_installed: Joi.boolean(),
      launch_type: Joi.string().allow(""),
      logo: Joi.object().pattern(/\S/, Joi.any()),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {HistoryObject} */
  static HistoryObject() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      entity_type: Joi.string().allow(""),
      error_file_url: Joi.string().allow("").allow(null),
      file_path: Joi.string().allow(""),
      stage: Joi.string().allow("").required(),
      updated_by: Joi.string().allow(""),
      updated_at: Joi.string().allow("").allow(null),
      total_count: Joi.number(),
      total_error_count: Joi.number(),
    });
  }
}
module.exports = ServiceabilityPlatformModel;
