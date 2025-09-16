export = ServiceabilityPlatformModel;
/**
 * @typedef FulfillmentOption
 * @property {string} [name] - Name of the fulfillment option.
 * @property {string} [slug] - Unique identifier for the fulfillment option.
 * @property {number} [company_id] - The unique identifier of the company.
 * @property {string} [application_id] - The unique identifier of the application.
 * @property {string} [description] - Description of the fulfillment option.
 * @property {boolean} [is_default] - Whether this is the default fulfillment option.
 * @property {string} [type] - Type of fulfillment option.
 * @property {string} [status] - Status of the fulfillment option.
 * @property {BusinessUnit[]} [business_unit]
 * @property {FulfillmentStores} [fulfillment_stores]
 * @property {FulfillmentProducts} [products]
 * @property {CourierPartnerSchemes} [cp_schemes]
 * @property {string} [id] - Unique identifier for the fulfillment option.
 */
/**
 * @typedef FulfillmentOptionsList
 * @property {FulfillmentOptionItem[]} [items] - List of fulfillment option items.
 */
/**
 * @typedef FulfillmentOptionProducts
 * @property {FulfillmentOptionProduct} [items]
 * @property {Page} [page]
 */
/**
 * @typedef FulfillmentOptionStores
 * @property {FulfillmentOptionStore[]} [items] - List of stores with their details.
 * @property {Page} [page]
 */
/**
 * @typedef FulfillmentOptionBulkValidate
 * @property {string} [store_type] - Type of store related to fulfillment.
 * @property {string} [file_path] - URL of the uploaded file.
 * @property {string} [action] - Action to be performed, such as import.
 * @property {string} [type] - Entity type being processed.
 * @property {string} [fulfillment_option_slug] - Slug representing the
 *   fulfillment option.
 * @property {FulfillmentOptionValidate} [request]
 */
/**
 * @typedef FulfillmentOptionBulkValidateData
 * @property {string} [request_id] - Unique id generated for bulk operation.
 */
/**
 * @typedef FulfillmentOptionBulk
 * @property {string} [file_path] - The URL of file from which data will be imported.
 * @property {string} [type] - Specifies the type of bulk fulfillment request.
 */
/**
 * @typedef FulfillmentOptionBulkData
 * @property {string} [request_id] - Unique identifier for the request.
 * @property {FulfillmentOptionValidate} [request]
 * @property {string} [fulfillment_option_slug] - Slug representing the
 *   fulfillment option.
 * @property {string} [file_url] - URL of the uploaded file.
 * @property {number} [total] - Total number of records processed.
 * @property {number} [success] - Number of successful records.
 * @property {number} [failed] - Number of failed records.
 * @property {string} [action] - Action performed in the request.
 * @property {string} [updated_at] - Timestamp of the last update.
 * @property {string} [updated_by] - Identifier of the user who updated the request.
 * @property {string} [type] - Type of the bulk import process.
 * @property {number} [company_id] - The unique identifier of the company.
 * @property {string} [application_id] - The unique identifier of the application.
 * @property {string} [stage] - Current stage of the import process.
 */
/**
 * @typedef OperationResponseSchema
 * @property {boolean} success - Indicates if the operation was successful
 * @property {string} [message] - Optional message providing additional
 *   information about the operation
 */
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
 * @property {string} [fulfillment_option_slug] - Slug representing the
 *   fulfillment option.
 * @property {boolean} is_active - Indicates whether the zone is active or not.
 * @property {string} slug - Slug or URL-friendly version of the zone name.
 * @property {string} name - Name of the zone.
 * @property {number} company_id - The unique identifier of the company.
 * @property {string} application_id - The unique identifier of the application.
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
 * @property {string} [fulfillment_option_slug] - Slug representing the
 *   fulfillment option.
 * @property {Object} slug - Slug identifier for the zone.
 * @property {Object} company_id - The unique identifier of the company.
 * @property {Object} application_id - The unique identifier of the application.
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
 * @property {boolean} [is_polygon] - Indicates whether geo area is polygon or not.
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
 * @property {boolean} [is_polygon] - Indicates whether geo area is polygon or not.
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
 * @property {boolean} [is_polygon] - Indicates whether geo area is polygon or not.
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
 * @property {boolean} [is_polygon] - Indicates whether geo area is polygon or not.
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
 *   forward pickup (nullable), having 24hour time format HH:MM.
 * @property {string} [default_reverse_pickup_cutoff] - Default cutoff time for
 *   reverse pickup (nullable), having 24hour time format HH:MM.
 * @property {string} [default_cutoff_timezone] - Timezone for default cutoff time.
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
 * @property {string} [company_id] - The unique identifier of the company.
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
 * @property {string} [default_forward_pickup_cutoff] - Default cutoff time for
 *   forward pickup (nullable), having 24hour time format HH:MM.
 * @property {string} [default_reverse_pickup_cutoff] - Default cutoff time for
 *   reverse pickup (nullable), having 24hour time format HH:MM.
 * @property {string} [default_cutoff_timezone] - Timezone for default cutoff time.
 * @property {CourierPartnerSchemeDefaultTat} [default_tat]
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
 * @typedef BusinessUnit
 * @property {string} [name] - Name of the business unit.
 * @property {boolean} [is_active] - Whether the business unit is active.
 */
/**
 * @typedef FulfillmentStores
 * @property {number[]} [values] - List of store IDs associated with this
 *   fulfillment option.
 * @property {string} [type] - Whether fulfillment applies to all stores or
 *   specific stores.
 */
/**
 * @typedef FulfillmentProducts
 * @property {number[]} [values] - List of product IDs associated with this
 *   fulfillment option.
 * @property {string} [type] - Whether fulfillment applies to all products or
 *   specific products.
 */
/**
 * @typedef CourierPartnerSchemes
 * @property {CourierPartnerScheme[]} [values] - List of courier partner schemes
 *   associated with this fulfillment option.
 * @property {string} [type] - Indicates whether all installed courier schemes
 *   are used or only those specified by the seller.
 */
/**
 * @typedef CourierPartnerScheme
 * @property {string} [scheme_id] - Unique identifier for the courier partner scheme.
 * @property {string} [cp_ext_id] - Unique identifier for the courier partner.
 */
/**
 * @typedef FulfillmentOptionItem
 * @property {string} [slug] - Unique identifier for the delivery type.
 * @property {string} [description] - Description of the delivery service.
 * @property {boolean} [is_default] - Indicates if this is the default delivery option.
 * @property {string} [id] - Unique ID of the delivery service.
 * @property {string} [type] - Type of fulfillment option.
 * @property {string} [name] - Name of the delivery service.
 */
/**
 * @typedef FulfillmentOptionProduct
 * @property {number} [uid] - Unique identifier for the product.
 * @property {string} [name] - Name of the product.
 * @property {string} [slug] - Unique slug identifier for the product.
 * @property {string} [category_slug] - Slug identifier of the product's category.
 * @property {number} [category_uid] - Unique identifier for the product's category.
 * @property {string} [short_description] - Brief description of the product.
 * @property {string} [description] - Detailed description of the product in HTML format.
 * @property {number} [brand_uid] - Unique identifier for the brand.
 * @property {string} [currency] - Currency code used for product pricing.
 * @property {string} [item_code] - Unique code assigned to the product.
 * @property {string} [item_type] - Type of product (e.g., standard, set etc.).
 * @property {NetQuantity} [net_quantity]
 * @property {boolean} [multi_size] - Indicates if the product supports multiple sizes.
 * @property {boolean} [is_set] - Indicates if the product is a set of items.
 * @property {boolean} [is_dependent] - Indicates if the product depends on
 *   another product.
 * @property {boolean} [is_active] - Status indicating if the product is active.
 * @property {boolean} [is_image_less_product] - Indicates if the product has no images.
 * @property {string} [size_guide] - URL or reference to the size guide.
 * @property {Object} [teaser_tag] - Teaser tag information for the product.
 * @property {string[]} [highlights] - Key highlights of the product.
 * @property {string[]} [tags] - Tags associated with the product.
 * @property {string[]} [product_group_tag] - Group tags assigned to the product.
 * @property {number[]} [departments] - Department identifiers associated with
 *   the product.
 * @property {number} [company_id] - The unique identifier of the company.
 * @property {number[]} [company_ids] - List of company IDs associated with the product.
 * @property {string} [country_of_origin] - Country where the product is manufactured.
 * @property {string} [change_request_id] - Identifier for the change request
 *   related to the product.
 * @property {Trader} [trader]
 * @property {string} [trader_type] - Type of trader (e.g., Manufacturer, Wholesaler).
 * @property {ProductPublish} [product_publish]
 * @property {TaxIdentifier} [tax_identifier]
 * @property {ReturnConfig} [return_config]
 * @property {CustomOrder} [custom_order]
 * @property {Size[]} [sizes] - Available sizes for the product.
 * @property {string[]} [media] - List of media assets related to the product.
 * @property {Object} [variant_media] - Media assets for different variants of
 *   the product.
 * @property {Object} [variants] - Variant-specific details for the product.
 * @property {number} [no_of_boxes] - Number of boxes required for packaging the product.
 * @property {Object} [_custom_json] - Custom JSON data associated with the product.
 */
/**
 * @typedef NetQuantity
 * @property {number} [value] - The quantity value of the product.
 * @property {string} [unit] - The unit of measurement for the quantity.
 */
/**
 * @typedef Trader
 * @property {string} [name] - Name of the trader.
 * @property {string} [address] - Address of the trader.
 */
/**
 * @typedef ProductPublish
 * @property {string} [product_online_date] - Date when the product went online.
 * @property {boolean} [is_set] - Indicates if the product is part of a set.
 */
/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code] - HSN code assigned to the product.
 * @property {string} [hsn_code_id] - Identifier for the HSN code.
 * @property {string} [reporting_hsn] - Reporting HSN code.
 */
/**
 * @typedef ReturnConfig
 * @property {boolean} [returnable] - Indicates if the product is returnable.
 * @property {number} [time] - Time duration allowed for returns.
 * @property {string} [unit] - Unit of time for return duration.
 */
/**
 * @typedef CustomOrder
 * @property {boolean} [is_custom_order] - Indicates if the product is a custom order.
 * @property {number} [manufacturing_time] - Time required for manufacturing the product.
 * @property {string} [manufacturing_time_unit] - Unit of time for manufacturing.
 */
/**
 * @typedef Size
 * @property {string} [size] - Size label of the product.
 * @property {number} [size_priority] - Priority assigned to the size.
 * @property {string} [item_dimensions_unit_of_measure] - Unit of measure for
 *   item dimensions.
 * @property {number} [price_transfer] - Transfer price of the product.
 * @property {number} [item_height] - Height of the product.
 * @property {number} [item_length] - Length of the product.
 * @property {number} [item_width] - Width of the product.
 * @property {number} [item_weight] - Weight of the product.
 * @property {string} [item_weight_unit_of_measure] - Unit of measure for item weight.
 * @property {number} [price] - Selling price of the product.
 * @property {number} [price_effective] - Effective price after discounts.
 * @property {boolean} [is_set] - Indicates if the size belongs to a set.
 * @property {boolean} [track_inventory] - Indicates if inventory tracking is enabled.
 * @property {Identifier[]} [identifiers] - Unique identifiers associated with the size.
 * @property {Object} [_custom_json] - Custom JSON data associated with the size.
 */
/**
 * @typedef Identifier
 * @property {string} [gtin_type] - Type of GTIN identifier (e.g., SKU, UPC, EAN).
 * @property {string} [gtin_value] - Value of the GTIN identifier.
 * @property {boolean} [primary] - Indicates if this is the primary identifier.
 */
/**
 * @typedef Page
 * @property {number} [item_total] - The total number of all items across all pages.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [page_size] - The number of items per page.
 */
/**
 * @typedef FulfillmentOptionStore
 * @property {number} [uid] - Unique identifier for the store.
 * @property {Address} [address]
 * @property {number} [company_id] - The unique identifier of the company.
 * @property {string} [display_name] - Store name displayed in the UI.
 * @property {string} [name] - Name of the store.
 * @property {string} [store_type] - Type of store (e.g., high_street, mall).
 * @property {string[]} [tags] - Tags associated with the store.
 */
/**
 * @typedef Address
 * @property {string} [address1] - Primary address line.
 * @property {string} [country] - Country where the store is located.
 * @property {string} [pincode] - Postal code of the store location.
 * @property {string} [city] - City where the store is located.
 * @property {string} [state] - State where the store is located.
 * @property {number} [latitude] - Latitude coordinate of the store.
 * @property {number} [longitude] - Longitude coordinate of the store.
 * @property {string} [country_code] - ISO country code of the store location.
 */
/**
 * @typedef FulfillmentOptionValidate
 * @property {string} [entity_filter_type] - Type of entity filter applied.
 * @property {string} [fulfillment_option_type] - Type of fulfillment option selected.
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
 * @property {number} company_id - The unique identifier of the company.
 * @property {string} application_id - The unique identifier of the application.
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
declare class ServiceabilityPlatformModel {
}
declare namespace ServiceabilityPlatformModel {
    export { FulfillmentOption, FulfillmentOptionsList, FulfillmentOptionProducts, FulfillmentOptionStores, FulfillmentOptionBulkValidate, FulfillmentOptionBulkValidateData, FulfillmentOptionBulk, FulfillmentOptionBulkData, OperationResponseSchema, SelfshipSchema, ServiceabilityErrorResult, UpdateZoneData, ZoneUpdateSuccessResult, ServiceabilityDeleteErrorResult, ZoneDeleteSuccessResult, ListViewSchema, GetZoneByIdSchema, CommonErrorResult, CreateZoneDataSchema, ZoneBulkExport, GetZoneBulkExport, CreateBulkZoneData, ZoneSchema, CreateBulkZoneResult, BulkCreateZoneExport, PincodeMopData, PincodeMOPResult, PincodeMopUpdateAuditError, PincodeMopBulkError, CommonError, PincodeMopBulkData, PincodeBulkViewResult, PincodeCodStatusListingDetails, PincodeCodStatusListingResult, PincodeMopUpdateAuditHistoryDetails, PincodeMopUpdateAuditHistoryResultData, BulkGeoAreaDetails, BulkGeoAreaResult, BulkGeoAreaGetResult, GeoAreaBulkCreationResult, GeoAreaBulkExportResult, GeoAreaRequestBody, GeoAreaErrorResult, GeoAreaResponseBody, GeoAreaPutResponseBody, GeoAreaGetResponseBody, GeoAreaDetails, Error, CourierAccountDetailsBody, CourierPartnerRuleResult, CourierPartnerRule, BulkFailureResult, FailureResult, CourierPartnerRulesListResult, ShipmentCourierPartnerDetails, ShipmentCourierPartnerResult, CompanyConfig, ApplicationConfigPatch, ApplicationConfigPatchResult, BulkRegionJobDetails, BulkRegionResultItemData, BulkRegionResult, StoreRuleConfigData, StoreRuleDataSchema, GetStoreRulesApiResult, CreateStoreRuleDetailsSchema, StoreRuleResultSchema, StoreRuleUpdateResultSchema, CourierAccountResult, CompanyCourierPartnerAccountListResult, PackageMaterial, PackageMaterialNotFound, PackageMaterialsErrorResult, PackageMaterialResult, PackageRule, PackageRuleResult, PackagesListResult, PackageItem, RulePriorityDetails, RulePriorityResult, OptimalLocationsResult, OptimlLocationsRequestSchema, ValidationError, StandardError, CourierPartnerSchemeDetailsModel, CourierPartnerSchemeModelSchema, CourierPartnerSchemeUpdateDetailsSchema, CourierPartnerSchemeList, BulkRegionServiceabilityTatDetails, BulkRegionServiceabilityTatResultItemData, BulkRegionServiceabilityTatResult, GetCountries, GetLocalities, GetCountry, BulkImportLocalitiesDetails, BulkImportLocalitiesResult, BulkErrorResult, LocalitiesBulkExport, LocalitiesBulkExportFetch, LocalitiesErrorResult, GetLocality, ValidateAddress, ErrorResult, ApplicationConfigPut, ApplicationConfigPutDetail, ApplicationConfigGetResult, InstallCourierPartnerResponseSchema, GetLocalitiesBulkHistory, CompanyConfigurationSchema, BusinessUnit, FulfillmentStores, FulfillmentProducts, CourierPartnerSchemes, CourierPartnerScheme, FulfillmentOptionItem, FulfillmentOptionProduct, NetQuantity, Trader, ProductPublish, TaxIdentifier, ReturnConfig, CustomOrder, Size, Identifier, Page, FulfillmentOptionStore, Address, FulfillmentOptionValidate, ProductSchema, StoresSchema, CreatedBy, ModifiedBy, ListViewItems, GeoArea, ListViewProduct, Summary, RegionSchema, ZoneStores, ZoneProduct, ZoneBulkItem, PincodeMopUpdateResult, PincodeCodStatusItem, PincodeCodStatusListingSummary, PincodeMopUpdateAuditHistoryPaging, PincodeMopUpdateAuditHistoryResult, Area, GeoAreaResponseDetail, GeoAreaItemResult, AreaExpanded, Country, Region, Page2, CourierPartnerRuleConditions, LocationRule, LocationRuleValues, StringComparisonOperations, IntComparisonOperations, ArithmeticOperations, CourierPartnerRuleCPListResult, CourierPartnerSchemeDefaultTat, CourierPartnerSchemeTat, CourierPartnerSchemeFeatures, CourierPartnerList, ShipmentsCourierPartnersServiceability, CPShipments, ShipmentDimension, ShipmentsArticles, ArticleWeight, ArticleAttributes, ArticleDimension, ArticleSet, ArticleSizeDistribution, SetSize, ArticleDeliverySlots, ArticleReturnReason, CourierPartners, CourierPartnerPromise, CourierPartnerAttributes, CourierPartnerTAT, ShipmentCourierPartners, CourierPartnerConfig, BuyboxRuleConfig, PromiseConfig, StorePromiseAttributeConfig, DeliveryServiceAttributeConfig, BufferField, StorePrioritySchema, StoreRuleConditionSchema, CustomerRadiusSchema, DateOperations, CourierPartnerSchemeModel, PackageMaterialRule, PackageMaterialRuleQuantity, Channel, PackageRuleCategory, PackageRuleProduct, PackageRuleProductTag, PackageRuleDepartmentId, PackageRuleProductAttributes, PackageChannel, StoreFilter, PackageRuleSchema, Quantity, PackagePageInfo, OptimalLocationAssignedStoresResult, OptimalLocationArticlesResult, ArticleAssignment, LocationDetailsServiceability, ServiceabilityLocation, OptimalLocationsArticles, GetCountriesItems, HierarchyItems, CurrencyObject, Localities, PincodeLatLongData, LocalityParent, CountryMetaFields, ApplicationFields, GetCountryFieldsAddress, FieldValidation, FieldValidationRegex, LengthValidation, GetCountryFieldsAddressValues, GetOneOrAll, GetOneOrAllParams, GetOneOrAllPath, GetOneOrAllQuery, GetCountryFieldsAddressTemplateApplication, CountryHierarchy, GetCountryFields, GetCountryFieldsAddressTemplate, LocalityParents, ZoneConfig, PromiseType, InstallCourierPartnerItemsSchema, HistoryObject };
}
/** @returns {FulfillmentOption} */
declare function FulfillmentOption(): FulfillmentOption;
type FulfillmentOption = {
    /**
     * - Name of the fulfillment option.
     */
    name?: string;
    /**
     * - Unique identifier for the fulfillment option.
     */
    slug?: string;
    /**
     * - The unique identifier of the company.
     */
    company_id?: number;
    /**
     * - The unique identifier of the application.
     */
    application_id?: string;
    /**
     * - Description of the fulfillment option.
     */
    description?: string;
    /**
     * - Whether this is the default fulfillment option.
     */
    is_default?: boolean;
    /**
     * - Type of fulfillment option.
     */
    type?: string;
    /**
     * - Status of the fulfillment option.
     */
    status?: string;
    business_unit?: BusinessUnit[];
    fulfillment_stores?: FulfillmentStores;
    products?: FulfillmentProducts;
    cp_schemes?: CourierPartnerSchemes;
    /**
     * - Unique identifier for the fulfillment option.
     */
    id?: string;
};
/** @returns {FulfillmentOptionsList} */
declare function FulfillmentOptionsList(): FulfillmentOptionsList;
type FulfillmentOptionsList = {
    /**
     * - List of fulfillment option items.
     */
    items?: FulfillmentOptionItem[];
};
/** @returns {FulfillmentOptionProducts} */
declare function FulfillmentOptionProducts(): FulfillmentOptionProducts;
type FulfillmentOptionProducts = {
    items?: FulfillmentOptionProduct;
    page?: Page;
};
/** @returns {FulfillmentOptionStores} */
declare function FulfillmentOptionStores(): FulfillmentOptionStores;
type FulfillmentOptionStores = {
    /**
     * - List of stores with their details.
     */
    items?: FulfillmentOptionStore[];
    page?: Page;
};
/** @returns {FulfillmentOptionBulkValidate} */
declare function FulfillmentOptionBulkValidate(): FulfillmentOptionBulkValidate;
type FulfillmentOptionBulkValidate = {
    /**
     * - Type of store related to fulfillment.
     */
    store_type?: string;
    /**
     * - URL of the uploaded file.
     */
    file_path?: string;
    /**
     * - Action to be performed, such as import.
     */
    action?: string;
    /**
     * - Entity type being processed.
     */
    type?: string;
    /**
     * - Slug representing the
     * fulfillment option.
     */
    fulfillment_option_slug?: string;
    request?: FulfillmentOptionValidate;
};
/** @returns {FulfillmentOptionBulkValidateData} */
declare function FulfillmentOptionBulkValidateData(): FulfillmentOptionBulkValidateData;
type FulfillmentOptionBulkValidateData = {
    /**
     * - Unique id generated for bulk operation.
     */
    request_id?: string;
};
/** @returns {FulfillmentOptionBulk} */
declare function FulfillmentOptionBulk(): FulfillmentOptionBulk;
type FulfillmentOptionBulk = {
    /**
     * - The URL of file from which data will be imported.
     */
    file_path?: string;
    /**
     * - Specifies the type of bulk fulfillment request.
     */
    type?: string;
};
/** @returns {FulfillmentOptionBulkData} */
declare function FulfillmentOptionBulkData(): FulfillmentOptionBulkData;
type FulfillmentOptionBulkData = {
    /**
     * - Unique identifier for the request.
     */
    request_id?: string;
    request?: FulfillmentOptionValidate;
    /**
     * - Slug representing the
     * fulfillment option.
     */
    fulfillment_option_slug?: string;
    /**
     * - URL of the uploaded file.
     */
    file_url?: string;
    /**
     * - Total number of records processed.
     */
    total?: number;
    /**
     * - Number of successful records.
     */
    success?: number;
    /**
     * - Number of failed records.
     */
    failed?: number;
    /**
     * - Action performed in the request.
     */
    action?: string;
    /**
     * - Timestamp of the last update.
     */
    updated_at?: string;
    /**
     * - Identifier of the user who updated the request.
     */
    updated_by?: string;
    /**
     * - Type of the bulk import process.
     */
    type?: string;
    /**
     * - The unique identifier of the company.
     */
    company_id?: number;
    /**
     * - The unique identifier of the application.
     */
    application_id?: string;
    /**
     * - Current stage of the import process.
     */
    stage?: string;
};
/** @returns {OperationResponseSchema} */
declare function OperationResponseSchema(): OperationResponseSchema;
type OperationResponseSchema = {
    /**
     * - Indicates if the operation was successful
     */
    success: boolean;
    /**
     * - Optional message providing additional
     * information about the operation
     */
    message?: string;
};
/** @returns {SelfshipSchema} */
declare function SelfshipSchema(): SelfshipSchema;
type SelfshipSchema = {
    /**
     * - Turn around time in the specified unit, used to
     * define the delivery time commitment.
     */
    tat: number;
    /**
     * - Indicates whether the self-ship feature is
     * active for the company.
     */
    is_active: boolean;
    /**
     * - Specifies the unit of time for turn around time,
     * such as hours or days.
     */
    unit: string;
};
/** @returns {ServiceabilityErrorResult} */
declare function ServiceabilityErrorResult(): ServiceabilityErrorResult;
type ServiceabilityErrorResult = {
    /**
     * - The error message describing the issue.
     */
    message?: string;
    /**
     * - The specific value or data point that caused the error.
     */
    value: string;
    /**
     * - The category or classification of the error type.
     */
    type: string;
};
/** @returns {UpdateZoneData} */
declare function UpdateZoneData(): UpdateZoneData;
type UpdateZoneData = {
    /**
     * - The unique identifier of the zone to be updated.
     */
    zone_id?: string;
    /**
     * - The name of the zone.
     */
    name?: string;
    /**
     * - The type of the zone.
     */
    type?: string;
    /**
     * - A slug is a human-readable URL segment, typically
     * generated from a title with special characters removed.
     */
    slug?: string;
    /**
     * - List of geographical areas associated with the zone.
     */
    geo_areas?: string[];
    /**
     * - The unique identifier of the company.
     */
    company_id?: number;
    /**
     * - The unique identifier of the application.
     */
    application_id?: string;
    /**
     * - Indicates whether the zone is active.
     */
    is_active?: boolean;
    product?: ProductSchema;
    stores?: StoresSchema;
};
/** @returns {ZoneUpdateSuccessResult} */
declare function ZoneUpdateSuccessResult(): ZoneUpdateSuccessResult;
type ZoneUpdateSuccessResult = {
    /**
     * - The updated name of the zone.
     */
    name: string;
    /**
     * - A slug is a human-readable URL segment, typically
     * generated from a title with special characters removed.
     */
    slug: string;
    /**
     * - The unique identifier of the company.
     */
    company_id: number;
    /**
     * - The unique identifier of the application.
     */
    application_id: string;
    /**
     * - Indicates whether the zone is active after the update.
     */
    is_active: boolean;
    /**
     * - Updated list of geographical areas
     * associated with the zone.
     */
    geo_areas: string[];
    product: ProductSchema;
    stores: StoresSchema;
    /**
     * - The unique identifier of the updated zones.
     */
    zone_id: string;
    created_by?: CreatedBy;
    modified_by?: ModifiedBy;
    /**
     * - The timestamp when the record was created.
     */
    created_on: string;
    /**
     * - The timestamp when the record last modified.
     */
    modified_on: string;
};
/** @returns {ServiceabilityDeleteErrorResult} */
declare function ServiceabilityDeleteErrorResult(): ServiceabilityDeleteErrorResult;
type ServiceabilityDeleteErrorResult = {
    /**
     * - List of error details related
     * to the serviceability deletion operation.
     */
    error: ServiceabilityErrorResult[];
};
/** @returns {ZoneDeleteSuccessResult} */
declare function ZoneDeleteSuccessResult(): ZoneDeleteSuccessResult;
type ZoneDeleteSuccessResult = {
    /**
     * - A message indicating the success of the zone deletion.
     */
    message: string;
};
/** @returns {ListViewSchema} */
declare function ListViewSchema(): ListViewSchema;
type ListViewSchema = {
    /**
     * - List of zone items, each representing a
     * zone's details.
     */
    items: ListViewItems[];
    page: Page;
};
/** @returns {GetZoneByIdSchema} */
declare function GetZoneByIdSchema(): GetZoneByIdSchema;
type GetZoneByIdSchema = {
    /**
     * - Unique identifier for the zone.
     */
    zone_id: string;
    /**
     * - Name of the zone.
     */
    name: string;
    /**
     * - A slug is a human-readable URL segment, typically
     * generated from a title with special characters removed.
     */
    slug: string;
    /**
     * - Indicates whether the zone is currently active.
     */
    is_active: boolean;
    product: ProductSchema;
    stores: StoresSchema;
    created_by?: CreatedBy;
    modified_by?: ModifiedBy;
    /**
     * - The timestamp when the record was created.
     */
    created_on?: string;
    /**
     * - The timestamp when the record last modified.
     */
    modified_on?: string;
    /**
     * - Current stage/status of the zone.
     */
    stage?: string;
    /**
     * - URL for the file with overlapping
     * zones (if applicable).
     */
    overlapping_file_url?: string;
    /**
     * - List of geographical areas associated with the zone.
     */
    geo_areas: string[];
    /**
     * - List of names of zones that
     * overlap with this one.
     */
    overlapping_zone_names?: string[];
};
/** @returns {CommonErrorResult} */
declare function CommonErrorResult(): CommonErrorResult;
type CommonErrorResult = {
    /**
     * - An array of items referencing the ErrorResult
     * schema, which likely contains detailed information about the errors.
     */
    error?: Error[];
};
/** @returns {CreateZoneDataSchema} */
declare function CreateZoneDataSchema(): CreateZoneDataSchema;
type CreateZoneDataSchema = {
    /**
     * - Slug representing the
     * fulfillment option.
     */
    fulfillment_option_slug?: string;
    /**
     * - Indicates whether the zone is active or not.
     */
    is_active: boolean;
    /**
     * - Slug or URL-friendly version of the zone name.
     */
    slug: string;
    /**
     * - Name of the zone.
     */
    name: string;
    /**
     * - The unique identifier of the company.
     */
    company_id: number;
    /**
     * - The unique identifier of the application.
     */
    application_id: string;
    /**
     * - List of geographical areas associated with the zone.
     */
    geo_areas: string[];
    stores: ZoneStores;
    product: ZoneProduct;
};
/** @returns {ZoneBulkExport} */
declare function ZoneBulkExport(): ZoneBulkExport;
type ZoneBulkExport = {
    /**
     * - A unique identifier for the performed batch operation.
     */
    batch_id?: string;
};
/** @returns {GetZoneBulkExport} */
declare function GetZoneBulkExport(): GetZoneBulkExport;
type GetZoneBulkExport = {
    /**
     * - A list of items related to the zone bulk export.
     */
    items?: any;
};
/** @returns {CreateBulkZoneData} */
declare function CreateBulkZoneData(): CreateBulkZoneData;
type CreateBulkZoneData = {
    /**
     * - URL to the file containing the zone data.
     */
    file_url?: any;
    /**
     * - Type of product for the zone, could be
     * 'all', 'item_id', 'department', 'category', or 'tag'.
     */
    product_type?: string;
};
/** @returns {ZoneSchema} */
declare function ZoneSchema(): ZoneSchema;
type ZoneSchema = {
    /**
     * - Name of the zone.
     */
    name: any;
    /**
     * - Slug representing the
     * fulfillment option.
     */
    fulfillment_option_slug?: string;
    /**
     * - Slug identifier for the zone.
     */
    slug: any;
    /**
     * - The unique identifier of the company.
     */
    company_id: any;
    /**
     * - The unique identifier of the application.
     */
    application_id: any;
    /**
     * - Whether the zone is active or not.
     */
    is_active: any;
    /**
     * - List of geographical areas associated with the zone.
     */
    geo_areas: any;
    /**
     * - List of stores in the zone, referencing a schema
     * for list view products.
     */
    stores: any;
    /**
     * - List of products in the zone, referencing a
     * schema for list view products.
     */
    product: any;
    created_by?: CreatedBy;
    modified_by?: ModifiedBy;
    /**
     * - The timestamp when the record was created.
     */
    created_on: string;
    /**
     * - The timestamp when the record last modified.
     */
    modified_on: string;
    /**
     * - Current stage of the zone.
     */
    stage: any;
    /**
     * - Unique identifier for the zone.
     */
    zone_id: any;
};
/** @returns {CreateBulkZoneResult} */
declare function CreateBulkZoneResult(): CreateBulkZoneResult;
type CreateBulkZoneResult = {
    /**
     * - Unique identifier of the created zone.
     */
    zone_id?: any;
};
/** @returns {BulkCreateZoneExport} */
declare function BulkCreateZoneExport(): BulkCreateZoneExport;
type BulkCreateZoneExport = {
    /**
     * - Placeholder for export data.
     */
    placeholder?: any;
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
/** @returns {PincodeMOPResult} */
declare function PincodeMOPResult(): PincodeMOPResult;
type PincodeMOPResult = {
    /**
     * - Whether operation was successful.
     */
    success: boolean;
    /**
     * - Status code for the response.\
     * _Deprecated_*
     */
    status_code: number;
    /**
     * - A unique identifier for the performed batch operation.
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
/** @returns {PincodeMopUpdateAuditError} */
declare function PincodeMopUpdateAuditError(): PincodeMopUpdateAuditError;
type PincodeMopUpdateAuditError = {
    /**
     * - Status code for the error.
     */
    status?: number;
    /**
     * - Whether operation was successful.
     */
    success?: boolean;
};
/** @returns {PincodeMopBulkError} */
declare function PincodeMopBulkError(): PincodeMopBulkError;
type PincodeMopBulkError = {
    /**
     * - A unique identifier for the performed batch operation.
     */
    batch_id?: string;
    /**
     * - Status code for the error.
     */
    status_code?: number;
    error?: any;
    /**
     * - Whether operation was successful.
     */
    success?: boolean;
};
/** @returns {CommonError} */
declare function CommonError(): CommonError;
type CommonError = {
    /**
     * - Status code for the error.
     */
    status_code?: number;
    error?: any;
    /**
     * - Whether operation was successful.
     */
    success?: boolean;
};
/** @returns {PincodeMopBulkData} */
declare function PincodeMopBulkData(): PincodeMopBulkData;
type PincodeMopBulkData = {
    /**
     * - A unique identifier for the performed batch operation.
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
    /**
     * - A unique identifier for the performed batch operation.
     */
    batch_id: string;
    /**
     * - CDN URL for the uploaded file.
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
    /**
     * - The current page number for listing.
     */
    current?: number;
    /**
     * - The number of items per page in the listing.
     */
    page_size?: number;
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
    data: PincodeCodStatusItem[];
    /**
     * - Whether operation was successful.
     */
    success: boolean;
    /**
     * - List of error object in case of unsuccessful response.
     */
    errors?: Error[];
    page: Page;
    summary: PincodeCodStatusListingSummary;
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
/** @returns {BulkGeoAreaDetails} */
declare function BulkGeoAreaDetails(): BulkGeoAreaDetails;
type BulkGeoAreaDetails = {
    /**
     * - URL of the file for bulk geo area details.
     */
    file_url?: string;
    /**
     * - The name of the geo area.
     */
    name?: string;
    /**
     * - A slug is a human-readable URL segment, typically
     * generated from a title with special characters removed.
     */
    slug?: string;
    /**
     * - Type of geo area (delivery or price).
     */
    type?: string;
};
/** @returns {BulkGeoAreaResult} */
declare function BulkGeoAreaResult(): BulkGeoAreaResult;
type BulkGeoAreaResult = {
    /**
     * - Unique identifier for the geo area.
     */
    geoarea_id?: string;
};
/** @returns {BulkGeoAreaGetResult} */
declare function BulkGeoAreaGetResult(): BulkGeoAreaGetResult;
type BulkGeoAreaGetResult = {
    /**
     * - A unique identifier for the performed batch operation.
     */
    batch_id?: string;
    /**
     * - Path to the file for the geo area.
     */
    file_path?: string;
    /**
     * - The total number of records in the batch.
     */
    total?: number;
    /**
     * - The number of failed records.
     */
    failed?: number;
    /**
     * - URL for the error file.
     */
    error_file_url?: string;
    /**
     * - The action taken for the geo area update.
     */
    action?: string;
    /**
     * - The timestamp when the file was updated.
     */
    updated_at?: string;
    /**
     * - The user who updated the file.
     */
    updated_by?: string;
    /**
     * - Type of geo area operation (e.g., upload or update).
     */
    type?: string;
    /**
     * - The current stage of the geo area update.
     */
    stage?: string;
    /**
     * - URL of the file related to the geo area.
     */
    file_url?: string;
};
/** @returns {GeoAreaBulkCreationResult} */
declare function GeoAreaBulkCreationResult(): GeoAreaBulkCreationResult;
type GeoAreaBulkCreationResult = {
    /**
     * - A unique identifier for the performed batch operation.
     */
    batch_id?: string;
};
/** @returns {GeoAreaBulkExportResult} */
declare function GeoAreaBulkExportResult(): GeoAreaBulkExportResult;
type GeoAreaBulkExportResult = {
    /**
     * - A unique identifier for the performed batch operation.
     */
    batch_id?: string;
    /**
     * - The file path where the export data will be stored.
     */
    file_path?: string;
    /**
     * - The total number of records processed in the export.
     */
    total?: number;
    /**
     * - The number of records that failed to export.
     */
    failed?: number;
    /**
     * - The URL of the file containing details
     * of errors encountered during the export, if available.
     */
    error_file_url?: string;
    /**
     * - The action performed during the export process,
     * typically import or export.
     */
    action?: string;
    /**
     * - The timestamp when the export status was
     * last updated.
     */
    updated_at?: string;
    /**
     * - The name or identifier of the user or
     * process that last updated the export status.
     */
    updated_by?: string;
    /**
     * - The type of export process, such as geo_area_bulk_export.
     */
    type?: string;
    /**
     * - The current stage of the export process, such as
     * initiated, in_progress, or completed.
     */
    stage?: string;
};
/** @returns {GeoAreaRequestBody} */
declare function GeoAreaRequestBody(): GeoAreaRequestBody;
type GeoAreaRequestBody = {
    /**
     * - Indicates whether geo area is polygon or not.
     */
    is_polygon?: boolean;
    /**
     * - Indicates whether the geo area is active or not.
     */
    is_active: boolean;
    /**
     * - The name of the geo area.
     */
    name: string;
    /**
     * - A slug is a human-readable URL segment, typically
     * generated from a title with special characters removed.
     */
    slug: string;
    /**
     * - Specifies whether the geo area is for delivery or
     * price purposes.
     */
    type: string;
    /**
     * - A list of areas that are part of this geo area.
     */
    areas: Area[];
    /**
     * - Defines whether the region is based on
     * pincode or non-pincode.
     */
    region_type?: string;
};
/** @returns {GeoAreaErrorResult} */
declare function GeoAreaErrorResult(): GeoAreaErrorResult;
type GeoAreaErrorResult = {
    /**
     * - A list of error details
     * encountered during the operation.
     */
    error?: GeoAreaResponseDetail[];
};
/** @returns {GeoAreaResponseBody} */
declare function GeoAreaResponseBody(): GeoAreaResponseBody;
type GeoAreaResponseBody = {
    /**
     * - The name of the geo area.
     */
    name: string;
    /**
     * - A slug is a human-readable URL segment, typically
     * generated from a title with special characters removed.
     */
    slug: string;
    /**
     * - Indicates whether the geo area is active.
     */
    is_active: boolean;
    /**
     * - A list of areas included in the geo area.
     */
    areas: Area[];
    /**
     * - Defines whether the region is based on
     * pincode or non-pincode.
     */
    region_type?: string;
    /**
     * - Indicates whether geo area is polygon or not.
     */
    is_polygon?: boolean;
    /**
     * - Specifies whether the geo area is for price or
     * delivery purposes.
     */
    type: string;
    /**
     * - The timestamp when the record was created.
     */
    created_on: string;
    /**
     * - The timestamp when the record last modified.
     */
    modified_on: string;
    created_by?: CreatedBy;
    modified_by?: ModifiedBy;
    /**
     * - A unique identifier for the geo area.
     */
    geoarea_id: string;
};
/** @returns {GeoAreaPutResponseBody} */
declare function GeoAreaPutResponseBody(): GeoAreaPutResponseBody;
type GeoAreaPutResponseBody = {
    /**
     * - Name of the geo area.
     */
    name?: string;
    /**
     * - Unique identifier for the geo area.
     */
    geoarea_id?: string;
    /**
     * - Indicates whether geo area is polygon or not.
     */
    is_polygon?: boolean;
    /**
     * - A slug is a human-readable URL segment, typically
     * generated from a title with special characters removed.
     */
    slug?: string;
    /**
     * - Indicates whether the geo area is active or not.
     */
    is_active?: boolean;
    /**
     * - List of areas included within the geo area.
     */
    areas?: Area[];
    /**
     * - Specifies the type of region, either
     * 'pincode' or 'non-pincode'.
     */
    region_type?: string;
    /**
     * - Type of the geo area.
     */
    type?: string;
    /**
     * - The timestamp when the record was created.
     */
    created_on?: string;
    /**
     * - The timestamp when the record last modified.
     */
    modified_on?: string;
    created_by?: CreatedBy;
    modified_by?: ModifiedBy;
    /**
     * - Specifies whether the geo area was
     * uploaded manually or in bulk.
     */
    upload_type?: string;
};
/** @returns {GeoAreaGetResponseBody} */
declare function GeoAreaGetResponseBody(): GeoAreaGetResponseBody;
type GeoAreaGetResponseBody = {
    /**
     * - A list of geoarea items returned in
     * the response.
     */
    items?: GeoAreaItemResult[];
    page?: Page2;
};
/** @returns {GeoAreaDetails} */
declare function GeoAreaDetails(): GeoAreaDetails;
type GeoAreaDetails = {
    /**
     * - The name of the geographical area.
     */
    name: string;
    /**
     * - A slug is a human-readable URL segment, typically
     * generated from a title with special characters removed.
     */
    slug: string;
    /**
     * - The unique identifier of the application.
     */
    application_id?: string;
    /**
     * - The unique identifier of the company.
     */
    company_id?: number;
    /**
     * - Indicates whether geo area is polygon or not.
     */
    is_polygon?: boolean;
    /**
     * - A unique identifier for the geoarea.
     */
    geoarea_id: string;
    /**
     * - Indicates whether the geoarea is active.
     */
    is_active: boolean;
    /**
     * - The type of geoarea (e.g., city, country).
     */
    type: string;
    /**
     * - The type of region (pincode or non-pincode).
     */
    region_type?: string;
    /**
     * - List of areas associated with the geoarea.
     */
    areas: AreaExpanded[];
    /**
     * - The timestamp when the record was created.
     */
    created_on?: string;
    /**
     * - The timestamp when the record last modified.
     */
    modified_on?: string;
    created_by?: CreatedBy;
    modified_by?: ModifiedBy;
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    /**
     * - The type of the error.
     */
    type?: string;
    /**
     * - The value associated with the error.
     */
    value?: string;
    /**
     * - The error message describing the issue.
     */
    message?: string;
};
/** @returns {CourierAccountDetailsBody} */
declare function CourierAccountDetailsBody(): CourierAccountDetailsBody;
type CourierAccountDetailsBody = {
    /**
     * - The unique identifier for the extension
     * linked to the courier account.
     */
    extension_id: string;
    /**
     * - The unique identifier for the courier account.
     */
    account_id?: string;
    /**
     * - The identifier for the scheme associated with
     * the courier account.
     */
    scheme_id: string;
    /**
     * - Indicates whether the courier account
     * supports self-shipping (true if it does, false otherwise).
     */
    is_self_ship: boolean;
    /**
     * - The current stage of the courier account, either
     * 'enabled' or 'disabled'.
     */
    stage: string;
    /**
     * - Indicates whether the courier account is
     * an own account (true if it is, false otherwise).
     */
    is_own_account: boolean;
};
/** @returns {CourierPartnerRuleResult} */
declare function CourierPartnerRuleResult(): CourierPartnerRuleResult;
type CourierPartnerRuleResult = {
    /**
     * - Indicates whether the courier partner rule
     * is currently active.
     */
    is_active?: boolean;
    /**
     * - The unique identifier of the application.
     */
    application_id?: string;
    /**
     * - The unique identifier of the company.
     */
    company_id?: number;
    /**
     * - Has the list of courier partner
     * accounts that are to be given priority.
     */
    manual_priority?: string[];
    /**
     * - Denotes weather specific filters are applied
     * to courier partner accounts or all accounts are considered.
     */
    filters?: string;
    conditions?: CourierPartnerRuleConditions;
    /**
     * - Specifies the sorting preference for courier
     * partners based on the rule (e.g., fastest or custom).
     */
    sort?: string[];
    created_by?: CreatedBy;
    /**
     * - A string serving as the unique identifier.
     */
    id?: string;
    modified_by?: ModifiedBy;
    /**
     * - The timestamp when the record last modified.
     */
    modified_on?: string;
    /**
     * - The name of the courier partner rule.
     */
    name?: string;
    /**
     * - The type of the courier partner rule.
     */
    type?: string;
    /**
     * - A list of courier
     * partner schemes associated with this rule.
     */
    cp_list?: CourierPartnerRuleCPListResult[];
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
    /**
     * - Has the list of courier partner
     * account Ids that are to be given priority.
     */
    manual_priority: string[];
    /**
     * - Denotes weather specific filters are applied to
     * courier partner accounts or all accounts are considered.
     */
    filters: string;
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
/** @returns {BulkFailureResult} */
declare function BulkFailureResult(): BulkFailureResult;
type BulkFailureResult = {
    /**
     * - Whether operation was successful.
     */
    success?: boolean;
    /**
     * - An array containing error details.
     */
    error: Error[];
};
/** @returns {FailureResult} */
declare function FailureResult(): FailureResult;
type FailureResult = {
    /**
     * - Whether operation was successful.
     */
    success?: boolean;
    /**
     * - Array of error details.
     */
    error?: Error[];
};
/** @returns {CourierPartnerRulesListResult} */
declare function CourierPartnerRulesListResult(): CourierPartnerRulesListResult;
type CourierPartnerRulesListResult = {
    /**
     * - Array of courier partner rule results.
     */
    items: CourierPartnerRuleResult[];
    page: Page;
};
/** @returns {ShipmentCourierPartnerDetails} */
declare function ShipmentCourierPartnerDetails(): ShipmentCourierPartnerDetails;
type ShipmentCourierPartnerDetails = {
    from_location: ShipmentsCourierPartnersServiceability;
    to_location: ShipmentsCourierPartnersServiceability;
    /**
     * - List of shipments.
     */
    shipments?: CPShipments[];
    /**
     * - Journey type of the shipment forward or return.
     */
    journey?: string;
    /**
     * - Payment mode opted for the shipment.
     */
    payment_mode?: string;
};
/** @returns {ShipmentCourierPartnerResult} */
declare function ShipmentCourierPartnerResult(): ShipmentCourierPartnerResult;
type ShipmentCourierPartnerResult = {
    /**
     * - List of courier partners
     * available for the shipment.
     */
    courier_partners?: CourierPartners[];
    /**
     * - List of shipment details
     * associated with courier partners.
     */
    shipments?: ShipmentCourierPartners[];
    delivery_promise?: CourierPartnerPromise;
};
/** @returns {CompanyConfig} */
declare function CompanyConfig(): CompanyConfig;
type CompanyConfig = {
    /**
     * - The unique identifier of the company.
     */
    company_id?: number;
    /**
     * - Array defining the sorting order.
     */
    sort?: string[];
    /**
     * - Defines the logistics control type.
     */
    logistics_as_actual?: string;
};
/** @returns {ApplicationConfigPatch} */
declare function ApplicationConfigPatch(): ApplicationConfigPatch;
type ApplicationConfigPatch = {
    courier_partner_config?: CourierPartnerConfig;
    buybox_rule_config?: BuyboxRuleConfig;
    promise_config?: PromiseConfig;
};
/** @returns {ApplicationConfigPatchResult} */
declare function ApplicationConfigPatchResult(): ApplicationConfigPatchResult;
type ApplicationConfigPatchResult = {
    /**
     * - Whether operation was successful.
     */
    success?: boolean;
};
/** @returns {BulkRegionJobDetails} */
declare function BulkRegionJobDetails(): BulkRegionJobDetails;
type BulkRegionJobDetails = {
    /**
     * - Path to the file used in the bulk operation.
     */
    file_path?: string;
    /**
     * - Country involved in the bulk operation.
     */
    country: string;
    /**
     * - Action type for the bulk operation, either import
     * or export.
     */
    action: string;
    /**
     * - Region involved in the bulk operation.
     */
    region: string;
};
/** @returns {BulkRegionResultItemData} */
declare function BulkRegionResultItemData(): BulkRegionResultItemData;
type BulkRegionResultItemData = {
    /**
     * - Path to the file associated with the result item.
     */
    file_path: string;
    /**
     * - Number of failed records in the operation.
     */
    failed?: number;
    /**
     * - Array of failed records with
     * additional properties.
     */
    failed_records?: any[];
    /**
     * - Action type for the result item.
     */
    action: string;
    /**
     * - A unique identifier for the performed batch operation.
     */
    batch_id: string;
    /**
     * - Country associated with the result item.
     */
    country: string;
    /**
     * - Number of successful records in the operation.
     */
    success?: number;
    /**
     * - Region associated with the result item.
     */
    region: string;
    /**
     * - Current status of the result item.
     */
    status: string;
    /**
     * - Total number of records processed.
     */
    total?: number;
    /**
     * - Path to the file containing error details.
     */
    error_file_path?: string;
    /**
     * - The timestamp when the record last modified.
     */
    modified_on?: string;
    /**
     * - The timestamp when the record was created.
     */
    created_on?: string;
};
/** @returns {BulkRegionResult} */
declare function BulkRegionResult(): BulkRegionResult;
type BulkRegionResult = {
    /**
     * - Array of bulk region result items.
     */
    items: BulkRegionResultItemData[];
    page: Page;
};
/** @returns {StoreRuleConfigData} */
declare function StoreRuleConfigData(): StoreRuleConfigData;
type StoreRuleConfigData = {
    /**
     * - List of rule Ids which are active in the application.
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
    /**
     * - Has mapping for the store custom
     * fields and its values for basic prioritization.
     */
    meta_sort_priority?: any;
    /**
     * - Has the list of courier partner
     * accounts that are to be given priority.
     */
    manual_priority?: number[];
};
/** @returns {StoreRuleDataSchema} */
declare function StoreRuleDataSchema(): StoreRuleDataSchema;
type StoreRuleDataSchema = {
    /**
     * - A string serving as the unique identifier.
     */
    id?: string;
    /**
     * - Name of the rule.
     */
    name?: string;
    /**
     * - Has the list of courier partner
     * accounts that are to be given priority.
     */
    manual_priority?: number[];
    /**
     * - Has mapping for the store custom
     * fields and its values for basic prioritization.
     */
    meta_sort_priority?: any;
    /**
     * - Has mapping for the store custom
     * fields and its values. for conditions
     */
    meta_conditions?: any;
    /**
     * - Denotes weather specific filters are applied
     * to stores or all stores are considered.
     */
    filters?: string;
    /**
     * - The unique identifier of the company.
     */
    company_id?: number;
    /**
     * - The unique identifier of the application.
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
/** @returns {GetStoreRulesApiResult} */
declare function GetStoreRulesApiResult(): GetStoreRulesApiResult;
type GetStoreRulesApiResult = {
    /**
     * - List of store rule data.
     */
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
     * - Has the list of stores that are to
     * be given priority.
     */
    manual_priority?: number[];
    /**
     * - Has mapping for the store custom
     * fields and its values for basic prioritization.
     */
    meta_sort_priority?: any;
    /**
     * - Has mapping for the store custom
     * fields and its values. for conditions
     */
    meta_conditions?: any;
    /**
     * - Denotes weather specific filters are applied
     * to stores or all stores are considered.
     */
    filters?: string;
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
     * - A string serving as the unique identifier.
     */
    id?: string;
    /**
     * - Name of the rule created.
     */
    name?: string;
    /**
     * - Has the list of stores that are to
     * be given priority.
     */
    manual_priority?: number[];
    /**
     * - Has mapping for the store custom
     * fields and its values for basic prioritization.
     */
    meta_sort_priority?: any;
    /**
     * - Has mapping for the store custom
     * fields and its values. for conditions
     */
    meta_conditions?: any;
    /**
     * - Denotes weather specific filters are applied
     * to stores or all stores are considered.
     */
    filters?: string;
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
     * - A string serving as the unique identifier.
     */
    id?: string;
    /**
     * - Name of the rule created.
     */
    name?: string;
    /**
     * - Has the list of stores that are to
     * be given priority.
     */
    manual_priority?: number[];
    /**
     * - Has mapping for the store custom
     * fields and its values for basic prioritization.
     */
    meta_sort_priority?: any;
    /**
     * - Has mapping for the store custom
     * fields and its values. for conditions
     */
    meta_conditions?: any;
    /**
     * - Denotes weather specific filters are applied
     * to stores or all stores are considered.
     */
    filters?: string;
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
     * - The unique identifier of the company.
     */
    company_id?: number;
    /**
     * - The unique identifier of the application.
     */
    application_id?: string;
};
/** @returns {CourierAccountResult} */
declare function CourierAccountResult(): CourierAccountResult;
type CourierAccountResult = {
    /**
     * - A string that uniquely identifies the courier account.
     */
    account_id: string;
    /**
     * - The unique identifier of the company.
     */
    company_id?: number;
    /**
     * - A string that specifies the unique identifier
     * for the scheme associated with the account
     */
    scheme_id: string;
    /**
     * - A string that uniquely identifies the
     * courier partner extension.
     */
    extension_id?: string;
    /**
     * - A boolean indicating whether the account
     * is for self-shipping.
     */
    is_self_ship: boolean;
    /**
     * - A string indicating the current stage of the
     * account, which can be either enabled or disabled.
     */
    stage: string;
    /**
     * - A boolean indicating whether the account
     * is owned by the company.
     */
    is_own_account: boolean;
    scheme_rules: CourierPartnerSchemeModel;
};
/** @returns {CompanyCourierPartnerAccountListResult} */
declare function CompanyCourierPartnerAccountListResult(): CompanyCourierPartnerAccountListResult;
type CompanyCourierPartnerAccountListResult = {
    /**
     * - An array containing multiple
     * instances of CourierAccountResult, which details individual courier accounts.
     */
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
     * - Width of the packaging material dimensions in centimeter.
     */
    width: number;
    /**
     * - Height of the packaging material dimensions in centimeter.
     */
    height: number;
    /**
     * - Length of the packaging material dimensions in centimeter.
     */
    length: number;
    /**
     * - Product group rules associated
     * with the packaging.
     */
    rules?: PackageMaterialRule[];
    /**
     * - Stores where the packaging is avaiable.
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
     * - Maximum weight(grams) holding capacity.
     */
    max_weight?: number;
    /**
     * - Volumetric weight(grams) that a
     * packaging material can carry.
     */
    package_vol_weight?: number;
    /**
     * - Denotes whether the volumetric
     * weight(grams) should be auto calculated or not.
     */
    auto_calculate?: boolean;
};
/** @returns {PackageMaterialNotFound} */
declare function PackageMaterialNotFound(): PackageMaterialNotFound;
type PackageMaterialNotFound = {
    /**
     * - The status code indicating the result of
     * the operation.
     */
    status_code?: number;
    /**
     * - Indicates if the operation was successful.
     */
    success?: boolean;
};
/** @returns {PackageMaterialsErrorResult} */
declare function PackageMaterialsErrorResult(): PackageMaterialsErrorResult;
type PackageMaterialsErrorResult = {
    /**
     * - The value associated with the error.
     */
    value?: string;
    /**
     * - A description of the error.
     */
    message?: string;
    /**
     * - The type of error.
     */
    type?: string;
    /**
     * - Detailed error message.
     */
    error?: string;
};
/** @returns {PackageMaterialResult} */
declare function PackageMaterialResult(): PackageMaterialResult;
type PackageMaterialResult = {
    /**
     * - The unique identifier for the company.
     */
    company_id?: number;
    /**
     * - The name of the package material.
     */
    name: string;
    /**
     * - Unique identifier for the package material.
     */
    id?: string;
    /**
     * - The width of the package material.
     */
    width: number;
    /**
     * - The height of the package material.
     */
    height: number;
    /**
     * - The length of the package material.
     */
    length: number;
    /**
     * - List of rules associated with the
     * package material.
     */
    rules?: PackageMaterialRule[];
    /**
     * - List of store IDs where the package material
     * is available.
     */
    store_ids: number[];
    /**
     * - The weight(grams) of the package material.
     */
    weight: number;
    /**
     * - The error rate associated with the package material.
     */
    error_rate: number;
    /**
     * - The type of the package material.
     */
    package_type: string;
    /**
     * - Size of the package material.
     */
    size: string;
    /**
     * - List of media associated with the package material.
     */
    media?: string[];
    /**
     * - List of channels for the package material.
     */
    channels: Channel[];
    /**
     * - Whether inventory tracking is enabled
     * for the package material.
     */
    track_inventory?: boolean;
    /**
     * - Indicates whether the package material is active.
     */
    is_active?: boolean;
    /**
     * - The current status of the package material.
     */
    status: string;
    /**
     * - Maximum weight(grams) the package material
     * can handle.
     */
    max_weight?: number;
    /**
     * - Volumetric weight(grams) of the
     * package material.
     */
    package_vol_weight?: number;
    /**
     * - Whether the weight(grams) of the
     * package material is auto-calculated.
     */
    auto_calculate?: boolean;
};
/** @returns {PackageRule} */
declare function PackageRule(): PackageRule;
type PackageRule = {
    /**
     * - The name of the packaging rule.
     */
    name: string;
    /**
     * - The unique identifier for the company.
     */
    company_id: number;
    category_id?: PackageRuleCategory;
    product_id?: PackageRuleProduct;
    product_tag?: PackageRuleProductTag;
    department_id?: PackageRuleDepartmentId;
    product_attributes?: PackageRuleProductAttributes;
    /**
     * - Type of the packaging rule.
     */
    type: string;
    /**
     * - Indicates if the packaging rule is active.
     */
    is_active?: boolean;
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
    department_id?: PackageRuleDepartmentId;
    product_attributes?: PackageRuleProductAttributes;
    category_id?: PackageRuleCategory;
};
/** @returns {PackagesListResult} */
declare function PackagesListResult(): PackagesListResult;
type PackagesListResult = {
    /**
     * - Contains the list of package items with
     * pagination details.
     */
    items?: PackageItem[];
    page?: PackagePageInfo;
};
/** @returns {PackageItem} */
declare function PackageItem(): PackageItem;
type PackageItem = {
    /**
     * - The name of the package item.
     */
    name?: string;
    /**
     * - The weight(grams) of the package item.
     */
    weight?: number;
    /**
     * - Indicates if the inventory is tracked
     * for this package item.
     */
    track_inventory?: boolean;
    /**
     * - The length of the package item.
     */
    length?: number;
    /**
     * - A list of channels associated with
     * the package item.
     */
    channels?: PackageChannel[];
    /**
     * - Type of package material.
     */
    package_type?: string;
    /**
     * - A list of rules associated with the
     * package item.
     */
    rules?: PackageRuleSchema[];
    /**
     * - The height of the package item.
     */
    height?: number;
    /**
     * - The error rate associated with the package item.
     */
    error_rate?: number;
    /**
     * - The width of the package item.
     */
    width?: number;
    /**
     * - Indicates if the package item is active.
     */
    is_active?: boolean;
    /**
     * - The size of the package item.
     */
    size?: string;
    /**
     * - The company ID associated with the package item.
     */
    company_id?: number;
    /**
     * - The maximum weight(grams) of the package item.
     */
    max_weight?: number;
    /**
     * - Additional media associated with the package item.
     */
    media?: any[];
    /**
     * - The volumetric weight(grams) of the
     * package item.
     */
    package_vol_weight?: number;
    /**
     * - The status of the package item.
     */
    status?: string;
    /**
     * - Indicates if the package item is
     * auto-calculated.
     */
    auto_calculate?: boolean;
    /**
     * - The unique identifier for the package item.
     */
    id?: string;
};
/** @returns {RulePriorityDetails} */
declare function RulePriorityDetails(): RulePriorityDetails;
type RulePriorityDetails = {
    /**
     * - A string that uniquely identifies the rule.
     */
    rule_id: string;
    /**
     * - An integer representing the priority level
     * assigned to the rule.
     */
    priority: number;
};
/** @returns {RulePriorityResult} */
declare function RulePriorityResult(): RulePriorityResult;
type RulePriorityResult = {
    /**
     * - Whether operation was successful.
     */
    success?: boolean;
};
/** @returns {OptimalLocationsResult} */
declare function OptimalLocationsResult(): OptimalLocationsResult;
type OptimalLocationsResult = {
    /**
     * - List of
     * stores where items are assigned.
     */
    assigned_stores: OptimalLocationAssignedStoresResult[];
    /**
     * - List of articles with errors during assignment.
     */
    faulty_articles?: Error[];
};
/** @returns {OptimlLocationsRequestSchema} */
declare function OptimlLocationsRequestSchema(): OptimlLocationsRequestSchema;
type OptimlLocationsRequestSchema = {
    /**
     * - Unique identifier for the sales channel.
     */
    channel_id: string;
    /**
     * - Specifies the type of sales channel
     * (extension, marketplace, or other).
     */
    channel_type: string;
    /**
     * - Identifies the specific marketplace
     * or platform.
     */
    channel_identifier?: string;
    to_serviceability: LocationDetailsServiceability;
    /**
     * - List of articles to be
     * considered for location optimization.
     */
    articles: OptimalLocationsArticles[];
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
/** @returns {CourierPartnerSchemeDetailsModel} */
declare function CourierPartnerSchemeDetailsModel(): CourierPartnerSchemeDetailsModel;
type CourierPartnerSchemeDetailsModel = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - Unique identifier for the scheme, used to
     * fetch or modify scheme details.
     */
    scheme_id?: string;
    /**
     * - Name of the scheme.
     */
    name: string;
    /**
     * - Default cutoff time for
     * forward pickup (nullable), having 24hour time format HH:MM.
     */
    default_forward_pickup_cutoff?: string;
    /**
     * - Default cutoff time for
     * reverse pickup (nullable), having 24hour time format HH:MM.
     */
    default_reverse_pickup_cutoff?: string;
    /**
     * - Timezone for default cutoff time.
     */
    default_cutoff_timezone?: string;
    default_tat?: CourierPartnerSchemeDefaultTat;
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
    feature: CourierPartnerSchemeFeatures;
};
/** @returns {CourierPartnerSchemeModelSchema} */
declare function CourierPartnerSchemeModelSchema(): CourierPartnerSchemeModelSchema;
type CourierPartnerSchemeModelSchema = {
    created_by?: CreatedBy;
    /**
     * - The timestamp when the record was created.
     */
    created_on?: string;
    modified_by?: ModifiedBy;
    /**
     * - The timestamp when the record last modified.
     */
    modified_on?: string;
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id?: string;
    /**
     * - Unique identifier for the scheme, used to
     * fetch or modify scheme details.
     */
    scheme_id?: string;
    /**
     * - The unique identifier of the company.
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
    feature: CourierPartnerSchemeFeatures;
    /**
     * - Default cutoff time for
     * forward pickup (nullable), having 24hour time format HH:MM.
     */
    default_forward_pickup_cutoff?: string;
    /**
     * - Default cutoff time for
     * reverse pickup (nullable), having 24hour time format HH:MM.
     */
    default_reverse_pickup_cutoff?: string;
    /**
     * - Timezone for default cutoff time.
     */
    default_cutoff_timezone?: string;
    default_tat?: CourierPartnerSchemeDefaultTat;
};
/** @returns {CourierPartnerSchemeUpdateDetailsSchema} */
declare function CourierPartnerSchemeUpdateDetailsSchema(): CourierPartnerSchemeUpdateDetailsSchema;
type CourierPartnerSchemeUpdateDetailsSchema = {
    /**
     * - The name of the courier partner scheme.
     */
    name: string;
    weight: ArithmeticOperations;
    volumetric_weight?: ArithmeticOperations;
    /**
     * - The type of transport used in the courier service.
     */
    transport_type: string;
    /**
     * - The region for the service intra-city,
     * inter-city, or inter-country.
     */
    region: string;
    /**
     * - The type of delivery hyperlocal, same-day,
     * one-day, two-day, etc.
     */
    delivery_type: string;
    /**
     * - The accepted payment modes for the
     * service Cash on Delivery (COD) or Prepaid.
     */
    payment_mode: string[];
    /**
     * - The current status of the scheme either enabled or disabled.
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
    feature: CourierPartnerSchemeFeatures;
};
/** @returns {CourierPartnerSchemeList} */
declare function CourierPartnerSchemeList(): CourierPartnerSchemeList;
type CourierPartnerSchemeList = {
    /**
     * - List of courier partner schemes
     */
    items: CourierPartnerSchemeModelSchema[];
    page: Page;
};
/** @returns {BulkRegionServiceabilityTatDetails} */
declare function BulkRegionServiceabilityTatDetails(): BulkRegionServiceabilityTatDetails;
type BulkRegionServiceabilityTatDetails = {
    /**
     * - Country involved in the operation.
     */
    country: string;
    /**
     * - Region involved in the operation.
     */
    region: string;
    /**
     * - Type of operation, either serviceability or TAT.
     */
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
     * - A unique identifier for the performed batch operation.
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
    /**
     * - Array of
     * bulk region serviceability or TAT result items.
     */
    items?: BulkRegionServiceabilityTatResultItemData[];
    page?: Page;
};
/** @returns {GetCountries} */
declare function GetCountries(): GetCountries;
type GetCountries = {
    /**
     * - A list of country objects containing
     * detailed information about each country.
     */
    items: GetCountriesItems[];
    page: Page;
};
/** @returns {GetLocalities} */
declare function GetLocalities(): GetLocalities;
type GetLocalities = {
    /**
     * - An array containing multiple instances of
     * Localities, which detail individual localities.
     */
    items?: Localities[];
    page?: Page;
};
/** @returns {GetCountry} */
declare function GetCountry(): GetCountry;
type GetCountry = {
    meta?: CountryMetaFields;
    /**
     * - A string serving as the unique identifier.
     */
    id?: string;
    /**
     * - A string representing the official name of the country.
     */
    name?: string;
    /**
     * - A string providing the display name of
     * the country, typically used for user-friendly identification.
     */
    display_name?: string;
    /**
     * - A string representing the ISO 3166-1 alpha-2 code
     * for the country, which is a two-letter code used internationally.
     */
    iso2?: string;
    /**
     * - A string representing the ISO 3166-1 alpha-3 code
     * for the country, which is a three-letter code used for international identification.
     */
    iso3?: string;
    /**
     * - A nullable array of strings listing the
     * timezones applicable to the country.
     */
    timezones?: string[];
    /**
     * - An array referencing the
     * CountryHierarchy schema, detailing the administrative or geographical
     * structure of the country.
     */
    hierarchy?: CountryHierarchy[];
    /**
     * - A string indicating the country's
     * international phone dialing code, not restricted to a predefined list.
     */
    phone_code?: string;
    /**
     * - A string representing the latitude of the
     * country's geographic center.
     */
    latitude?: string;
    /**
     * - A string representing the longitude of the
     * country's geographic center.
     */
    longitude?: string;
    currency?: CurrencyObject;
    /**
     * - A string indicating the type of the country entity.
     */
    type?: string;
    fields?: GetCountryFields;
};
/** @returns {BulkImportLocalitiesDetails} */
declare function BulkImportLocalitiesDetails(): BulkImportLocalitiesDetails;
type BulkImportLocalitiesDetails = {
    /**
     * - An url for the csv file to upload
     */
    file_url: string;
};
/** @returns {BulkImportLocalitiesResult} */
declare function BulkImportLocalitiesResult(): BulkImportLocalitiesResult;
type BulkImportLocalitiesResult = {
    /**
     * - A unique identifier for the performed batch operation.
     */
    batch_id: string;
    /**
     * - An url for the csv file to upload
     */
    file_url: string;
    /**
     * - Whether operation was successful.
     */
    success: boolean;
};
/** @returns {BulkErrorResult} */
declare function BulkErrorResult(): BulkErrorResult;
type BulkErrorResult = {
    /**
     * - Whether operation was successful.
     */
    success: boolean;
    /**
     * - The status code associated with the bulk
     * import operation result, which provides insight into the outcome or error.
     */
    status_code: number;
    /**
     * - A detailed message describing the error that
     * occurred during the bulk import operation.
     */
    error?: string;
    /**
     * - A unique identifier for the performed batch operation.
     */
    batch_id?: string;
    /**
     * - The total number of items or entities
     * processed in the bulk import operation.
     */
    total_count?: number;
    /**
     * - The total number of errors
     * encountered during the bulk import operation.
     */
    total_error_count?: number;
    /**
     * - The URL linking to the error file
     * generated during the bulk import operation, containing the details of
     * failed records.
     */
    error_file_url?: string;
};
/** @returns {LocalitiesBulkExport} */
declare function LocalitiesBulkExport(): LocalitiesBulkExport;
type LocalitiesBulkExport = {
    /**
     * - The ISO code of the country for which
     * the bulk export is being processed.
     */
    country_iso_code: string;
    /**
     * - The current status of the bulk export operation.
     */
    status: string;
    /**
     * - A unique identifier for the performed batch operation.
     */
    batch_id: string;
    /**
     * - The offset for pagination or tracking purposes.
     */
    offset: number;
    /**
     * - The type of export operation.
     */
    type: string;
};
/** @returns {LocalitiesBulkExportFetch} */
declare function LocalitiesBulkExportFetch(): LocalitiesBulkExportFetch;
type LocalitiesBulkExportFetch = {
    /**
     * - A unique identifier for the performed batch operation.
     */
    batch_id: string;
    /**
     * - The current status of the bulk export operation.
     */
    status: string;
    /**
     * - The percentage of the download that
     * has been completed.
     */
    download_percentage: number;
    /**
     * - The URL path for downloading the exported
     * data, if available.
     */
    url_path?: string;
};
/** @returns {LocalitiesErrorResult} */
declare function LocalitiesErrorResult(): LocalitiesErrorResult;
type LocalitiesErrorResult = {
    /**
     * - Whether operation was successful.
     */
    success: boolean;
    /**
     * - The HTTP status code representing the result
     * of the operation.
     */
    status_code: number;
    /**
     * - A message describing the error that occurred.
     */
    error: string;
};
/** @returns {GetLocality} */
declare function GetLocality(): GetLocality;
type GetLocality = {
    /**
     * - Additional metadata for the locality.\
     * _Deprecated_*
     */
    meta?: any;
    /**
     * - Unique identifier for the parent locality,
     * if applicable.
     */
    parent_uid?: string;
    /**
     * - A string serving as the unique identifier.
     */
    id?: string;
    /**
     * - The actual geographical data, such as country
     * names (India), state names (Maharashtra), pin codes (400603), city names
     * (Dubai), or local sectors (Deira).
     */
    name?: string;
    /**
     * - User-friendly version of the geographical
     * data, which may be more descriptive or formatted differently.
     */
    display_name?: string;
    /**
     * - Globally unique code assigned to a locality.
     */
    code?: string;
    /**
     * - A custom object to store additional
     * metadata with dynamic properties.
     */
    custom_meta?: any;
    /**
     * - Identifiers for the parent of the current locality.
     */
    parent_ids?: string[];
    /**
     * - An array containing multiple
     * instances of Localities, which detail individual localities.
     */
    localities?: LocalityParent[];
    /**
     * - Defines the type or classification of the
     * locality (e.g., city, state, country).
     */
    type?: string;
    parents?: LocalityParents;
};
/** @returns {ValidateAddress} */
declare function ValidateAddress(): ValidateAddress;
type ValidateAddress = {
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
     * - Has metaata for that address
     */
    address_meta?: any;
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
/** @returns {ErrorResult} */
declare function ErrorResult(): ErrorResult;
type ErrorResult = {
    /**
     * - Whether operation was successful.
     */
    success?: boolean;
    error?: Error;
};
/** @returns {ApplicationConfigPut} */
declare function ApplicationConfigPut(): ApplicationConfigPut;
type ApplicationConfigPut = {
    /**
     * - A list of rule Ids associated with the configuration.
     */
    rule_ids?: string[];
    /**
     * - Specifies the sorting preference for courier
     * partners based on the rule (e.g., fastest or custom).
     */
    sort?: string[];
    /**
     * - Has the list of courier partner
     * accounts that are to be given priority.
     */
    manual_priority?: string[];
    /**
     * - The unique identifier of the application.
     */
    application_id?: string;
    /**
     * - The unique identifier of the company.
     */
    company_id?: number;
};
/** @returns {ApplicationConfigPutDetail} */
declare function ApplicationConfigPutDetail(): ApplicationConfigPutDetail;
type ApplicationConfigPutDetail = {
    /**
     * - A list of rule Ids to be applied in the
     * configuration.
     */
    rule_ids?: string[];
    /**
     * - A list of sorting methods, including options
     * for 'fastest' and 'manual_priority'.
     */
    sort?: string[];
    /**
     * - A list of manually prioritized items
     * in the configuration.
     */
    manual_priority?: string[];
};
/** @returns {ApplicationConfigGetResult} */
declare function ApplicationConfigGetResult(): ApplicationConfigGetResult;
type ApplicationConfigGetResult = {
    zones?: ZoneConfig;
    courier_partner_config?: CourierPartnerConfig;
    buybox_rule_config?: BuyboxRuleConfig;
    /**
     * - A list of promise types available
     * in the application.
     */
    promise_types?: PromiseType[];
    promise_config?: PromiseConfig;
};
/** @returns {InstallCourierPartnerResponseSchema} */
declare function InstallCourierPartnerResponseSchema(): InstallCourierPartnerResponseSchema;
type InstallCourierPartnerResponseSchema = {
    /**
     * - A list of items
     * detailing the courier partner installation details, each item follows the
     * structure defined in `InstallCourierPartnerItemsSchema`.
     */
    items?: InstallCourierPartnerItemsSchema[];
    page?: Page;
};
/** @returns {GetLocalitiesBulkHistory} */
declare function GetLocalitiesBulkHistory(): GetLocalitiesBulkHistory;
type GetLocalitiesBulkHistory = {
    page: Page;
    /**
     * - A list of historical records related to
     * localities in bulk operations, each containing batch details such as
     * status, error counts, file paths, and associated metadata.
     */
    items: HistoryObject[];
};
/** @returns {CompanyConfigurationSchema} */
declare function CompanyConfigurationSchema(): CompanyConfigurationSchema;
type CompanyConfigurationSchema = {
    /**
     * - An array of strings specifying sorting preferences.
     */
    sort?: string[];
};
/** @returns {BusinessUnit} */
declare function BusinessUnit(): BusinessUnit;
type BusinessUnit = {
    /**
     * - Name of the business unit.
     */
    name?: string;
    /**
     * - Whether the business unit is active.
     */
    is_active?: boolean;
};
/** @returns {FulfillmentStores} */
declare function FulfillmentStores(): FulfillmentStores;
type FulfillmentStores = {
    /**
     * - List of store IDs associated with this
     * fulfillment option.
     */
    values?: number[];
    /**
     * - Whether fulfillment applies to all stores or
     * specific stores.
     */
    type?: string;
};
/** @returns {FulfillmentProducts} */
declare function FulfillmentProducts(): FulfillmentProducts;
type FulfillmentProducts = {
    /**
     * - List of product IDs associated with this
     * fulfillment option.
     */
    values?: number[];
    /**
     * - Whether fulfillment applies to all products or
     * specific products.
     */
    type?: string;
};
/** @returns {CourierPartnerSchemes} */
declare function CourierPartnerSchemes(): CourierPartnerSchemes;
type CourierPartnerSchemes = {
    /**
     * - List of courier partner schemes
     * associated with this fulfillment option.
     */
    values?: CourierPartnerScheme[];
    /**
     * - Indicates whether all installed courier schemes
     * are used or only those specified by the seller.
     */
    type?: string;
};
/** @returns {CourierPartnerScheme} */
declare function CourierPartnerScheme(): CourierPartnerScheme;
type CourierPartnerScheme = {
    /**
     * - Unique identifier for the courier partner scheme.
     */
    scheme_id?: string;
    /**
     * - Unique identifier for the courier partner.
     */
    cp_ext_id?: string;
};
/** @returns {FulfillmentOptionItem} */
declare function FulfillmentOptionItem(): FulfillmentOptionItem;
type FulfillmentOptionItem = {
    /**
     * - Unique identifier for the delivery type.
     */
    slug?: string;
    /**
     * - Description of the delivery service.
     */
    description?: string;
    /**
     * - Indicates if this is the default delivery option.
     */
    is_default?: boolean;
    /**
     * - Unique ID of the delivery service.
     */
    id?: string;
    /**
     * - Type of fulfillment option.
     */
    type?: string;
    /**
     * - Name of the delivery service.
     */
    name?: string;
};
/** @returns {FulfillmentOptionProduct} */
declare function FulfillmentOptionProduct(): FulfillmentOptionProduct;
type FulfillmentOptionProduct = {
    /**
     * - Unique identifier for the product.
     */
    uid?: number;
    /**
     * - Name of the product.
     */
    name?: string;
    /**
     * - Unique slug identifier for the product.
     */
    slug?: string;
    /**
     * - Slug identifier of the product's category.
     */
    category_slug?: string;
    /**
     * - Unique identifier for the product's category.
     */
    category_uid?: number;
    /**
     * - Brief description of the product.
     */
    short_description?: string;
    /**
     * - Detailed description of the product in HTML format.
     */
    description?: string;
    /**
     * - Unique identifier for the brand.
     */
    brand_uid?: number;
    /**
     * - Currency code used for product pricing.
     */
    currency?: string;
    /**
     * - Unique code assigned to the product.
     */
    item_code?: string;
    /**
     * - Type of product (e.g., standard, set etc.).
     */
    item_type?: string;
    net_quantity?: NetQuantity;
    /**
     * - Indicates if the product supports multiple sizes.
     */
    multi_size?: boolean;
    /**
     * - Indicates if the product is a set of items.
     */
    is_set?: boolean;
    /**
     * - Indicates if the product depends on
     * another product.
     */
    is_dependent?: boolean;
    /**
     * - Status indicating if the product is active.
     */
    is_active?: boolean;
    /**
     * - Indicates if the product has no images.
     */
    is_image_less_product?: boolean;
    /**
     * - URL or reference to the size guide.
     */
    size_guide?: string;
    /**
     * - Teaser tag information for the product.
     */
    teaser_tag?: any;
    /**
     * - Key highlights of the product.
     */
    highlights?: string[];
    /**
     * - Tags associated with the product.
     */
    tags?: string[];
    /**
     * - Group tags assigned to the product.
     */
    product_group_tag?: string[];
    /**
     * - Department identifiers associated with
     * the product.
     */
    departments?: number[];
    /**
     * - The unique identifier of the company.
     */
    company_id?: number;
    /**
     * - List of company IDs associated with the product.
     */
    company_ids?: number[];
    /**
     * - Country where the product is manufactured.
     */
    country_of_origin?: string;
    /**
     * - Identifier for the change request
     * related to the product.
     */
    change_request_id?: string;
    trader?: Trader;
    /**
     * - Type of trader (e.g., Manufacturer, Wholesaler).
     */
    trader_type?: string;
    product_publish?: ProductPublish;
    tax_identifier?: TaxIdentifier;
    return_config?: ReturnConfig;
    custom_order?: CustomOrder;
    /**
     * - Available sizes for the product.
     */
    sizes?: Size[];
    /**
     * - List of media assets related to the product.
     */
    media?: string[];
    /**
     * - Media assets for different variants of
     * the product.
     */
    variant_media?: any;
    /**
     * - Variant-specific details for the product.
     */
    variants?: any;
    /**
     * - Number of boxes required for packaging the product.
     */
    no_of_boxes?: number;
    /**
     * - Custom JSON data associated with the product.
     */
    _custom_json?: any;
};
/** @returns {NetQuantity} */
declare function NetQuantity(): NetQuantity;
type NetQuantity = {
    /**
     * - The quantity value of the product.
     */
    value?: number;
    /**
     * - The unit of measurement for the quantity.
     */
    unit?: string;
};
/** @returns {Trader} */
declare function Trader(): Trader;
type Trader = {
    /**
     * - Name of the trader.
     */
    name?: string;
    /**
     * - Address of the trader.
     */
    address?: string;
};
/** @returns {ProductPublish} */
declare function ProductPublish(): ProductPublish;
type ProductPublish = {
    /**
     * - Date when the product went online.
     */
    product_online_date?: string;
    /**
     * - Indicates if the product is part of a set.
     */
    is_set?: boolean;
};
/** @returns {TaxIdentifier} */
declare function TaxIdentifier(): TaxIdentifier;
type TaxIdentifier = {
    /**
     * - HSN code assigned to the product.
     */
    hsn_code?: string;
    /**
     * - Identifier for the HSN code.
     */
    hsn_code_id?: string;
    /**
     * - Reporting HSN code.
     */
    reporting_hsn?: string;
};
/** @returns {ReturnConfig} */
declare function ReturnConfig(): ReturnConfig;
type ReturnConfig = {
    /**
     * - Indicates if the product is returnable.
     */
    returnable?: boolean;
    /**
     * - Time duration allowed for returns.
     */
    time?: number;
    /**
     * - Unit of time for return duration.
     */
    unit?: string;
};
/** @returns {CustomOrder} */
declare function CustomOrder(): CustomOrder;
type CustomOrder = {
    /**
     * - Indicates if the product is a custom order.
     */
    is_custom_order?: boolean;
    /**
     * - Time required for manufacturing the product.
     */
    manufacturing_time?: number;
    /**
     * - Unit of time for manufacturing.
     */
    manufacturing_time_unit?: string;
};
/** @returns {Size} */
declare function Size(): Size;
type Size = {
    /**
     * - Size label of the product.
     */
    size?: string;
    /**
     * - Priority assigned to the size.
     */
    size_priority?: number;
    /**
     * - Unit of measure for
     * item dimensions.
     */
    item_dimensions_unit_of_measure?: string;
    /**
     * - Transfer price of the product.
     */
    price_transfer?: number;
    /**
     * - Height of the product.
     */
    item_height?: number;
    /**
     * - Length of the product.
     */
    item_length?: number;
    /**
     * - Width of the product.
     */
    item_width?: number;
    /**
     * - Weight of the product.
     */
    item_weight?: number;
    /**
     * - Unit of measure for item weight.
     */
    item_weight_unit_of_measure?: string;
    /**
     * - Selling price of the product.
     */
    price?: number;
    /**
     * - Effective price after discounts.
     */
    price_effective?: number;
    /**
     * - Indicates if the size belongs to a set.
     */
    is_set?: boolean;
    /**
     * - Indicates if inventory tracking is enabled.
     */
    track_inventory?: boolean;
    /**
     * - Unique identifiers associated with the size.
     */
    identifiers?: Identifier[];
    /**
     * - Custom JSON data associated with the size.
     */
    _custom_json?: any;
};
/** @returns {Identifier} */
declare function Identifier(): Identifier;
type Identifier = {
    /**
     * - Type of GTIN identifier (e.g., SKU, UPC, EAN).
     */
    gtin_type?: string;
    /**
     * - Value of the GTIN identifier.
     */
    gtin_value?: string;
    /**
     * - Indicates if this is the primary identifier.
     */
    primary?: boolean;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of all items across all pages.
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
    /**
     * - The number of items per page.
     */
    page_size?: number;
};
/** @returns {FulfillmentOptionStore} */
declare function FulfillmentOptionStore(): FulfillmentOptionStore;
type FulfillmentOptionStore = {
    /**
     * - Unique identifier for the store.
     */
    uid?: number;
    address?: Address;
    /**
     * - The unique identifier of the company.
     */
    company_id?: number;
    /**
     * - Store name displayed in the UI.
     */
    display_name?: string;
    /**
     * - Name of the store.
     */
    name?: string;
    /**
     * - Type of store (e.g., high_street, mall).
     */
    store_type?: string;
    /**
     * - Tags associated with the store.
     */
    tags?: string[];
};
/** @returns {Address} */
declare function Address(): Address;
type Address = {
    /**
     * - Primary address line.
     */
    address1?: string;
    /**
     * - Country where the store is located.
     */
    country?: string;
    /**
     * - Postal code of the store location.
     */
    pincode?: string;
    /**
     * - City where the store is located.
     */
    city?: string;
    /**
     * - State where the store is located.
     */
    state?: string;
    /**
     * - Latitude coordinate of the store.
     */
    latitude?: number;
    /**
     * - Longitude coordinate of the store.
     */
    longitude?: number;
    /**
     * - ISO country code of the store location.
     */
    country_code?: string;
};
/** @returns {FulfillmentOptionValidate} */
declare function FulfillmentOptionValidate(): FulfillmentOptionValidate;
type FulfillmentOptionValidate = {
    /**
     * - Type of entity filter applied.
     */
    entity_filter_type?: string;
    /**
     * - Type of fulfillment option selected.
     */
    fulfillment_option_type?: string;
};
/** @returns {ProductSchema} */
declare function ProductSchema(): ProductSchema;
type ProductSchema = {
    /**
     * - The classification of product type used in the
     * zone, whether it's a list of categories, departments, tags, or item_ids.
     */
    type: string;
    /**
     * - List of values representing the products or the
     * type of products selected for the delivery zone.
     */
    values: any[];
};
/** @returns {StoresSchema} */
declare function StoresSchema(): StoresSchema;
type StoresSchema = {
    /**
     * - Classification of whether all stores in the
     * application are considered or a custom selection of stores by the seller.
     */
    type: string;
    /**
     * - List of store Ids mapped to the delivery zone
     * when custom type is selected.
     */
    values: number[];
};
/** @returns {CreatedBy} */
declare function CreatedBy(): CreatedBy;
type CreatedBy = {
    /**
     * - Identifier of the user or system that created the object.
     */
    id?: string;
};
/** @returns {ModifiedBy} */
declare function ModifiedBy(): ModifiedBy;
type ModifiedBy = {
    /**
     * - Identifier of the user or system that created the object.
     */
    id?: string;
};
/** @returns {ListViewItems} */
declare function ListViewItems(): ListViewItems;
type ListViewItems = {
    /**
     * - Unique identifier for the zone.
     */
    zone_id: string;
    /**
     * - Name of the zone.
     */
    name: string;
    /**
     * - Array of geographical areas associated with the zone.
     */
    geo_areas: GeoArea[];
    /**
     * - Slug for the zone.
     */
    slug: string;
    stores: ListViewProduct;
    /**
     * - Indicates if the zone is active.
     */
    is_active: boolean;
    product: ListViewProduct;
    /**
     * - The unique identifier of the company.
     */
    company_id: number;
    /**
     * - The unique identifier of the application.
     */
    application_id: string;
    created_by: CreatedBy;
    modified_by: ModifiedBy;
    /**
     * - The timestamp when the record was created.
     */
    created_on: string;
    /**
     * - The timestamp when the record last modified.
     */
    modified_on: string;
    /**
     * - Current stage of the zone.
     */
    stage?: string;
    summary?: Summary;
};
/** @returns {GeoArea} */
declare function GeoArea(): GeoArea;
type GeoArea = {
    /**
     * - Unique identifier for the geographical area.
     */
    id: string;
    /**
     * - Type of the geographical area.
     */
    type?: string;
    /**
     * - Name of the geographical area.
     */
    name: string;
};
/** @returns {ListViewProduct} */
declare function ListViewProduct(): ListViewProduct;
type ListViewProduct = {
    /**
     * - Type of the product in the zone.
     */
    type: string;
    /**
     * - List of values representing the products in the zone.
     */
    values: string[];
};
/** @returns {Summary} */
declare function Summary(): Summary;
type Summary = {
    /**
     * - Count of stores in the summary.
     */
    stores_count?: number;
    /**
     * - Count of products in the summary.
     */
    products_count?: number;
    /**
     * - Array of regions included in the summary.
     */
    regions?: RegionSchema[];
};
/** @returns {RegionSchema} */
declare function RegionSchema(): RegionSchema;
type RegionSchema = {
    /**
     * - Name of the region.
     */
    name?: string;
    /**
     * - Count of items in the region.
     */
    count?: number;
};
/** @returns {ZoneStores} */
declare function ZoneStores(): ZoneStores;
type ZoneStores = {
    /**
     * - Type of zone store.
     */
    type: any;
    /**
     * - List of store Ids associated with the zone.
     */
    values: any;
};
/** @returns {ZoneProduct} */
declare function ZoneProduct(): ZoneProduct;
type ZoneProduct = {
    /**
     * - Type of zone product.
     */
    type: any;
    /**
     * - List of product Ids or identifiers for the zone.
     */
    values: any;
};
/** @returns {ZoneBulkItem} */
declare function ZoneBulkItem(): ZoneBulkItem;
type ZoneBulkItem = {
    /**
     * - A unique identifier for the performed batch operation.
     */
    batch_id?: string;
    /**
     * - Path to the file, can be null.
     */
    file_path?: string;
    /**
     * - Total number of items in the batch.
     */
    total?: any;
    /**
     * - Number of failed items in the batch.
     */
    failed?: any;
    /**
     * - URL to the error file, can be null.
     */
    error_file_url?: string;
    /**
     * - Action performed on the batch.
     */
    action?: any;
    /**
     * - Timestamp when the batch was last updated.
     */
    updated_at?: any;
    /**
     * - User who last updated the batch.
     */
    updated_by?: any;
    /**
     * - Type of the bulk operation.
     */
    type?: any;
    /**
     * - Current stage of the bulk operation.
     */
    stage?: any;
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
/** @returns {PincodeCodStatusItem} */
declare function PincodeCodStatusItem(): PincodeCodStatusItem;
type PincodeCodStatusItem = {
    /**
     * - Denoted if the pincode is active or not.
     */
    active?: boolean;
    /**
     * - A string indicating the postal code or PIN
     * code of the address area.
     */
    pincode?: string;
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
/** @returns {PincodeMopUpdateAuditHistoryPaging} */
declare function PincodeMopUpdateAuditHistoryPaging(): PincodeMopUpdateAuditHistoryPaging;
type PincodeMopUpdateAuditHistoryPaging = {
    /**
     * - The type of paging.
     */
    type?: string;
    /**
     * - The size of the page.
     */
    size?: number;
    /**
     * - The current page number.
     */
    current?: number;
    /**
     * - Indicates whether there is another page of results.
     */
    has_next?: boolean;
    /**
     * - The total number of items in the history.
     */
    item_total?: number;
};
/** @returns {PincodeMopUpdateAuditHistoryResult} */
declare function PincodeMopUpdateAuditHistoryResult(): PincodeMopUpdateAuditHistoryResult;
type PincodeMopUpdateAuditHistoryResult = {
    /**
     * - A unique identifier for the performed batch operation.
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
     * - CDN URL for the file uploaded.
     */
    s3_url?: string;
    /**
     * - Name of the file.
     */
    file_name?: string;
    /**
     * - The timestamp when the file was updated.
     */
    updated_at?: string;
    /**
     * - The user who updated the file.
     */
    updated_by?: string;
    /**
     * - Whether operation was successful.
     */
    success?: boolean;
};
/** @returns {Area} */
declare function Area(): Area;
type Area = {
    /**
     * - A list of region identifiers within the area.
     */
    regions?: string[];
    /**
     * - The country associated with the area.
     */
    country?: string;
};
/** @returns {GeoAreaResponseDetail} */
declare function GeoAreaResponseDetail(): GeoAreaResponseDetail;
type GeoAreaResponseDetail = {
    /**
     * - Type of the error.
     */
    type?: string;
    /**
     * - The specific value or detail related to the error.
     */
    value?: string;
    /**
     * - The error message describing the issue.
     */
    message?: string;
};
/** @returns {GeoAreaItemResult} */
declare function GeoAreaItemResult(): GeoAreaItemResult;
type GeoAreaItemResult = {
    /**
     * - The unique identifier of the company.
     */
    company_id: number;
    /**
     * - The unique identifier of the application.
     */
    application_id: string;
    /**
     * - The unique identifier for the geoarea.
     */
    geoarea_id: string;
    /**
     * - The name of the geoarea.
     */
    name: string;
    /**
     * - A slug is a human-readable URL segment, typically
     * generated from a title with special characters removed.
     */
    slug: string;
    /**
     * - Indicates whether the geoarea is active.
     */
    is_active: boolean;
    /**
     * - The type of region (e.g., non-pincode, pincode).
     */
    region_type?: string;
    /**
     * - The type of geoarea.
     */
    type: string;
    /**
     * - A list of areas associated with the geoarea.
     */
    areas: AreaExpanded[];
    /**
     * - The timestamp when the record was created.
     */
    created_on?: string;
    /**
     * - The timestamp when the record last modified.
     */
    modified_on?: string;
    created_by?: CreatedBy;
    modified_by?: ModifiedBy;
};
/** @returns {AreaExpanded} */
declare function AreaExpanded(): AreaExpanded;
type AreaExpanded = {
    country?: Country;
    /**
     * - Array of regions included in the summary.
     */
    regions?: Region[];
};
/** @returns {Country} */
declare function Country(): Country;
type Country = {
    /**
     * - A unique identifier for the country.
     */
    uid: string;
    /**
     * - The display name of the country.
     */
    display_name: string;
};
/** @returns {Region} */
declare function Region(): Region;
type Region = {
    /**
     * - A string that uniquely identifies the country entity.
     */
    uid: string;
    /**
     * - A string representing the display name of
     * the region, which is typically used for user-friendly identification.
     */
    display_name: string;
    /**
     * - A string indicating the subtype of the entity,
     * which is not restricted to a predefined list.
     */
    sub_type: string;
    /**
     * - A nullable string that serves as an
     * identifier for the parent entity of the country, if applicable.
     */
    parent_id: string[];
};
/** @returns {Page2} */
declare function Page2(): Page2;
type Page2 = {
    /**
     * - The number of items displayed per page.
     */
    size: number;
    /**
     * - The total number of items across all pages.
     */
    item_total: number;
    /**
     * - The type of pagination (e.g., number for numbered
     * pagination).
     */
    type: string;
    /**
     * - The current page number.
     */
    current: number;
    /**
     * - A boolean indicating if there is a next page of results.
     */
    has_next: boolean;
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
    store_customer_location?: StringComparisonOperations;
};
/** @returns {LocationRule} */
declare function LocationRule(): LocationRule;
type LocationRule = {
    /**
     * - Specifies the type of the location rule (e.g.,
     * inclusion, exclusion).
     */
    type?: string;
    /**
     * - A list of location-based values
     * included in the rule, which could specify particular locations or criteria.
     */
    includes?: LocationRuleValues[];
};
/** @returns {LocationRuleValues} */
declare function LocationRuleValues(): LocationRuleValues;
type LocationRuleValues = {
    /**
     * - Unique identifier for the location.
     */
    uid?: string;
    /**
     * - Subtype of the location, not restricted to a
     * predefined list.
     */
    sub_type?: string;
    /**
     * - Name of the location.
     */
    name?: string;
    /**
     * - Display name of the location.
     */
    display_name?: string;
    /**
     * - Array of identifiers for the parent of the
     * current locality.
     */
    parent_id?: string[];
    /**
     * - Array of parent identifiers for the location.
     */
    parent_ids?: string[];
    /**
     * - Unique identifier for the location.
     */
    id?: string;
};
/** @returns {StringComparisonOperations} */
declare function StringComparisonOperations(): StringComparisonOperations;
type StringComparisonOperations = {
    /**
     * - Array of string values to be included in
     * the comparison.
     */
    includes?: string[];
};
/** @returns {IntComparisonOperations} */
declare function IntComparisonOperations(): IntComparisonOperations;
type IntComparisonOperations = {
    /**
     * - Array of integer values to be included in
     * the comparison.
     */
    includes?: number[];
};
/** @returns {ArithmeticOperations} */
declare function ArithmeticOperations(): ArithmeticOperations;
type ArithmeticOperations = {
    /**
     * - Specifies a less than operation, comparing values
     * smaller than the provided value.
     */
    lt?: number;
    /**
     * - Specifies a greater than operation, comparing
     * values larger than the provided value.
     */
    gt?: number;
    /**
     * - Specifies a less than or equal to operation,
     * comparing values smaller than or equal to the provided value.
     */
    lte?: number;
    /**
     * - Specifies a greater than or equal to operation,
     * comparing values larger than or equal to the provided value.
     */
    gte?: number;
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
    scheme_rules?: CourierPartnerSchemeDetailsModel;
    /**
     * - Represents the current stage of the courier
     * partner account (e.g., active, inactive, etc.).
     */
    stage?: string;
};
/** @returns {CourierPartnerSchemeDefaultTat} */
declare function CourierPartnerSchemeDefaultTat(): CourierPartnerSchemeDefaultTat;
type CourierPartnerSchemeDefaultTat = {
    /**
     * - Indicates whether the default turn around
     * time (tat) to be used for the given scheme or not.
     */
    enabled?: boolean;
    tat?: CourierPartnerSchemeTat;
};
/** @returns {CourierPartnerSchemeTat} */
declare function CourierPartnerSchemeTat(): CourierPartnerSchemeTat;
type CourierPartnerSchemeTat = {
    /**
     * - Minimum turn around time (tat) value for a scheme.
     */
    min?: number;
    /**
     * - Maximum turn around time (tat) value for a scheme.
     */
    max?: number;
    /**
     * - Unit for the turn around time (tat) values for a scheme.
     */
    unit?: string;
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
/** @returns {CourierPartnerList} */
declare function CourierPartnerList(): CourierPartnerList;
type CourierPartnerList = {
    /**
     * - The unique identifier for the courier
     * partner extension.
     */
    extension_id: string;
    /**
     * - The unique identifier for the courier partner account.
     */
    account_id: string;
};
/** @returns {ShipmentsCourierPartnersServiceability} */
declare function ShipmentsCourierPartnersServiceability(): ShipmentsCourierPartnersServiceability;
type ShipmentsCourierPartnersServiceability = {
    /**
     * - A string indicating the postal code or PIN
     * code of the address area.
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
/** @returns {CPShipments} */
declare function CPShipments(): CPShipments;
type CPShipments = {
    /**
     * - A string serving as the unique identifier.
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
     * - Weight(grams) of the shipment.
     */
    shipment_weight?: number;
    /**
     * - Volumetric weight(grams) of
     * the shipment.
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
     * - Type of that particular location.
     */
    location_type?: string;
    /**
     * - List of articles in the shipment.
     */
    articles?: ShipmentsArticles[];
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
    /**
     * - If the dimensions are default.
     */
    is_default?: boolean;
    /**
     * - Measurement unit for dimensions.
     */
    unit?: string;
};
/** @returns {ShipmentsArticles} */
declare function ShipmentsArticles(): ShipmentsArticles;
type ShipmentsArticles = {
    /**
     * - A string serving as the unique identifier.
     */
    id?: string;
    /**
     * - The Item Id of the article.
     */
    item_id?: number;
    /**
     * - Gives sla for that article.
     */
    sla?: string;
    /**
     * - Tags assigned to Item.
     */
    tags?: string[];
    /**
     * - The size of the article.
     */
    size?: string;
    /**
     * - The group Id of the article.
     */
    group_id?: string;
    weight?: ArticleWeight;
    attributes?: ArticleAttributes;
    /**
     * - The category Id of the article.
     */
    category_id?: number;
    /**
     * - The Department Id of the article.
     */
    department_id?: number;
    dimension?: ArticleDimension;
    /**
     * - Final Price of the article after discounts.
     */
    price?: number;
    /**
     * - The brand Id of the article.
     */
    brand_id?: number;
    /**
     * - The quantity of the article.
     */
    quantity?: number;
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
     * - The Made to Order quantity of the article.
     */
    mto_quantity?: number;
    /**
     * - A boolean indicating whether the article is a gift.
     */
    is_gift?: boolean;
    /**
     * - A boolean indicating whether the article is a set.
     */
    is_set?: boolean;
    set?: ArticleSet;
    /**
     * - The quantity of the article set.
     */
    set_quantity?: number;
    delivery_slots?: ArticleDeliverySlots;
    return_reason?: ArticleReturnReason;
};
/** @returns {ArticleWeight} */
declare function ArticleWeight(): ArticleWeight;
type ArticleWeight = {
    /**
     * - The weight(grams) of the article for shipping
     * purposes, typically measured in a specified unit.
     */
    shipping: number;
    /**
     * - The unit of measurement used for the weight value.
     */
    unit: string;
    /**
     * - A boolean indicating whether this weight is
     * the default weight for the article.
     */
    is_default: boolean;
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
/** @returns {ArticleSet} */
declare function ArticleSet(): ArticleSet;
type ArticleSet = {
    /**
     * - The name of the article set.
     */
    name?: string;
    /**
     * - The quantity of the article set.
     */
    quantity?: number;
    size_distribution?: ArticleSizeDistribution;
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
/** @returns {ArticleDeliverySlots} */
declare function ArticleDeliverySlots(): ArticleDeliverySlots;
type ArticleDeliverySlots = {
    /**
     * - The delivery date for the article.
     */
    delivery_date?: string;
    /**
     * - The minimum delivery time slot.
     */
    min_slot?: string;
    /**
     * - The maximum delivery time slot.
     */
    max_slot?: string;
};
/** @returns {ArticleReturnReason} */
declare function ArticleReturnReason(): ArticleReturnReason;
type ArticleReturnReason = {
    /**
     * - List of strings representing the return
     * reason values, such as doorstep or pre-delivery quality checks.
     */
    qc_type?: string[];
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
/** @returns {CourierPartnerPromise} */
declare function CourierPartnerPromise(): CourierPartnerPromise;
type CourierPartnerPromise = {
    /**
     * - Minimum courier partner delivery promise time.
     */
    min: string;
    /**
     * - Maximum courier partner delivery promise time.
     */
    max: string;
    attributes?: CourierPartnerAttributes;
};
/** @returns {CourierPartnerAttributes} */
declare function CourierPartnerAttributes(): CourierPartnerAttributes;
type CourierPartnerAttributes = {
    tat?: CourierPartnerTAT;
};
/** @returns {CourierPartnerTAT} */
declare function CourierPartnerTAT(): CourierPartnerTAT;
type CourierPartnerTAT = {
    /**
     * - Minimum turnaround time.
     */
    min?: number;
    /**
     * - Maximum turnaround time.
     */
    max?: number;
};
/** @returns {ShipmentCourierPartners} */
declare function ShipmentCourierPartners(): ShipmentCourierPartners;
type ShipmentCourierPartners = {
    /**
     * - A string serving as the unique identifier.
     */
    id?: string;
    /**
     * - Courier partners of the shipment.
     */
    courier_partners?: CourierPartners[];
    delivery_promise?: CourierPartnerPromise;
};
/** @returns {CourierPartnerConfig} */
declare function CourierPartnerConfig(): CourierPartnerConfig;
type CourierPartnerConfig = {
    /**
     * - A list of rule Ids applied for courier
     * partner selection.
     */
    rule_ids?: string[];
    /**
     * - A list of sorting methods, with options like
     * 'fastest' and 'manual_priority'.
     */
    sort?: string[];
    /**
     * - A list of items to be manually
     * prioritized for courier partner selection.
     */
    manual_priority?: string[];
};
/** @returns {BuyboxRuleConfig} */
declare function BuyboxRuleConfig(): BuyboxRuleConfig;
type BuyboxRuleConfig = {
    /**
     * - A list of store types
     * prioritized for the buybox selection.
     */
    store_type_priority?: string[];
    /**
     * - A list of store tags prioritized
     * for the buybox selection.
     */
    store_tag_priority?: string[];
    /**
     * - A list of sorting methods, including options
     * for 'fastest' and 'manual_priority'.
     */
    sort?: string[];
};
/** @returns {PromiseConfig} */
declare function PromiseConfig(): PromiseConfig;
type PromiseConfig = {
    store_attributes?: StorePromiseAttributeConfig;
    delivery_service_attributes?: DeliveryServiceAttributeConfig;
    buffer_field?: BufferField;
};
/** @returns {StorePromiseAttributeConfig} */
declare function StorePromiseAttributeConfig(): StorePromiseAttributeConfig;
type StorePromiseAttributeConfig = {
    /**
     * - Indicates whether
     * operational timing is enabled for the store.
     */
    is_operational_timing_enabled?: boolean;
    /**
     * - Indicates whether
     * order acceptance timing is enabled for the store.
     */
    is_order_acceptance_timing_enabled?: boolean;
    /**
     * - Indicates whether average
     * processing time is considered in the promise calculations.
     */
    is_average_processing_time?: boolean;
    /**
     * - Indicates whether holidays are
     * considered in the promise calculations.
     */
    is_holiday_enabled?: boolean;
};
/** @returns {DeliveryServiceAttributeConfig} */
declare function DeliveryServiceAttributeConfig(): DeliveryServiceAttributeConfig;
type DeliveryServiceAttributeConfig = {
    /**
     * - Indicates whether the
     * pickup cutoff time is enabled.
     */
    is_pickup_cutoff_time_enabled?: boolean;
    /**
     * - Indicates whether the service
     * turnaround time (TAT) is enabled.
     */
    is_service_tat_enabled?: boolean;
    /**
     * - Indicates whether holidays are
     * considered in delivery calculations.
     */
    is_holiday_enabled?: boolean;
    /**
     * - Indicates whether all delivery
     * points (DPs) are considered for the promise type.
     */
    is_all_dps_considered?: boolean;
};
/** @returns {BufferField} */
declare function BufferField(): BufferField;
type BufferField = {
    /**
     * - The unit of measurement for the buffer field.
     */
    unit?: string;
    /**
     * - The numerical value of the buffer field.
     */
    value?: number;
    /**
     * - Indicates whether the buffer field is enabled.
     */
    enabled?: boolean;
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
    order_place_date?: DateOperations;
    zone_ids?: StringComparisonOperations;
};
/** @returns {CustomerRadiusSchema} */
declare function CustomerRadiusSchema(): CustomerRadiusSchema;
type CustomerRadiusSchema = {
    /**
     * - The unit of measurement for the radius (e.g.,
     * kilometers, miles).
     */
    unit?: string;
    /**
     * - The less-than comparison value for the radius.
     */
    lt?: number;
    /**
     * - The less-than-or-equal comparison value for the radius.
     */
    lte?: number;
    /**
     * - The greater-than comparison value for the radius.
     */
    gt?: number;
    /**
     * - The greater-than-or-equal comparison value for the radius.
     */
    gte?: number;
};
/** @returns {DateOperations} */
declare function DateOperations(): DateOperations;
type DateOperations = {
    /**
     * - Less than condition for date.
     */
    lt?: string;
    /**
     * - Greater than condition for date.
     */
    gt?: string;
    /**
     * - Less than or equal to condition for date.
     */
    lte?: string;
    /**
     * - Greater than or equal to condition for date.
     */
    gte?: string;
};
/** @returns {CourierPartnerSchemeModel} */
declare function CourierPartnerSchemeModel(): CourierPartnerSchemeModel;
type CourierPartnerSchemeModel = {
    /**
     * - Unique identifier of courier partner extension.
     */
    extension_id: string;
    /**
     * - A string representing the unique identifier
     * for the scheme. This is a required field.
     */
    scheme_id: string;
    /**
     * - A string that specifies the name of the scheme.
     * This is a required field.
     */
    name: string;
    weight: ArithmeticOperations;
    volumetric_weight?: ArithmeticOperations;
    /**
     * - A string that specifies the type of transport.
     */
    transport_type: string;
    /**
     * - A string that indicates the region type.
     */
    region: string;
    /**
     * - A string that defines the delivery type.
     */
    delivery_type: string;
    /**
     * - An array of strings specifying the
     * payment modes available.
     */
    payment_mode: string[];
    /**
     * - A string indicating the current stage of the scheme.
     */
    stage: string;
    feature: CourierPartnerSchemeFeatures;
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
/** @returns {PackageRuleCategory} */
declare function PackageRuleCategory(): PackageRuleCategory;
type PackageRuleCategory = {
    /**
     * - An array of unique identifier integer ids
     * of the category.
     */
    includes?: number[];
};
/** @returns {PackageRuleProduct} */
declare function PackageRuleProduct(): PackageRuleProduct;
type PackageRuleProduct = {
    /**
     * - An array of product integer IDs included in
     * the package rule.
     */
    includes?: number[];
};
/** @returns {PackageRuleProductTag} */
declare function PackageRuleProductTag(): PackageRuleProductTag;
type PackageRuleProductTag = {
    /**
     * - An array of product tag IDs included in the
     * package rule.
     */
    includes?: string[];
};
/** @returns {PackageRuleDepartmentId} */
declare function PackageRuleDepartmentId(): PackageRuleDepartmentId;
type PackageRuleDepartmentId = {
    /**
     * - An array of department IDs included in the
     * package rule.
     */
    includes?: number[];
};
/** @returns {PackageRuleProductAttributes} */
declare function PackageRuleProductAttributes(): PackageRuleProductAttributes;
type PackageRuleProductAttributes = {
    /**
     * - An array of attributes included in the package rule.
     */
    includes?: any[];
};
/** @returns {PackageChannel} */
declare function PackageChannel(): PackageChannel;
type PackageChannel = {
    store_filter?: StoreFilter;
    /**
     * - The application ID associated with the package channel.
     */
    app_id?: string;
};
/** @returns {StoreFilter} */
declare function StoreFilter(): StoreFilter;
type StoreFilter = {
    /**
     * - Specifies whether the store filter includes or
     * excludes certain stores.
     */
    type?: string;
    /**
     * - A list of store IDs to filter.
     */
    ids?: number[];
};
/** @returns {PackageRuleSchema} */
declare function PackageRuleSchema(): PackageRuleSchema;
type PackageRuleSchema = {
    quantity?: Quantity;
    /**
     * - The unique identifier for the package rule.
     */
    rule_id?: string;
    /**
     * - The weight(grams) associated with the package rule.
     */
    weight?: number;
};
/** @returns {Quantity} */
declare function Quantity(): Quantity;
type Quantity = {
    /**
     * - Minimum quantity of products allowed for this rule.
     */
    min?: number;
    /**
     * - Maximum quantity of products allowed for this rule.
     */
    max?: number;
};
/** @returns {PackagePageInfo} */
declare function PackagePageInfo(): PackagePageInfo;
type PackagePageInfo = {
    /**
     * - The type of pagination (e.g., page-based).
     */
    type?: string;
    /**
     * - The number of items per page.
     */
    size?: number;
    /**
     * - The current page number.
     */
    current?: number;
    /**
     * - Indicates if there is a next page of results.
     */
    has_next?: boolean;
    /**
     * - Indicates if there is a previous page of results.
     */
    has_previous?: boolean;
    /**
     * - The total number of items available.
     */
    item_total?: number;
};
/** @returns {OptimalLocationAssignedStoresResult} */
declare function OptimalLocationAssignedStoresResult(): OptimalLocationAssignedStoresResult;
type OptimalLocationAssignedStoresResult = {
    /**
     * - Unique identifier for the assigned store.
     */
    store_id: number;
    /**
     * - List of articles
     * allocated to the store.
     */
    articles: OptimalLocationArticlesResult[];
};
/** @returns {OptimalLocationArticlesResult} */
declare function OptimalLocationArticlesResult(): OptimalLocationArticlesResult;
type OptimalLocationArticlesResult = {
    /**
     * - Unique identifier for the item.
     */
    item_id: number;
    /**
     * - Specifies the item's size variant.
     */
    size: string;
    /**
     * - Number of units allocated.
     */
    quantity: number;
    /**
     * - Identifier for grouping related items.
     */
    group_id?: string;
    /**
     * - Indicates if the item is the primary
     * one in a group.
     */
    is_primary_item?: boolean;
    /**
     * - Additional metadata for the item.
     */
    meta?: any;
    article_assignment: ArticleAssignment;
    /**
     * - Identifier for the seller.
     */
    seller_id?: number;
    /**
     * - List of location Ids to exclude.
     */
    ignore_locations: number[];
    /**
     * - List of preferred location Ids.
     */
    assign_locations: number[];
    /**
     * - Effective price of the item.
     */
    price_effective: number;
    /**
     * - Quantity assigned for made-to-order processing.
     */
    mto_quantity: number;
    /**
     * - Unique identifier for the article.
     */
    _id: string;
    /**
     * - Unique identifier for tracking.
     */
    uid: string;
};
/** @returns {ArticleAssignment} */
declare function ArticleAssignment(): ArticleAssignment;
type ArticleAssignment = {
    /**
     * - Defines the assignment level (multi-companies,
     * single-company, or single-store).
     */
    level?: string;
    /**
     * - The strategy parameter allows users to
     * specify the desired approach or criteria for selecting optimal locations.
     */
    strategy?: string;
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
/** @returns {OptimalLocationsArticles} */
declare function OptimalLocationsArticles(): OptimalLocationsArticles;
type OptimalLocationsArticles = {
    /**
     * - Unique identifier for the item.
     */
    item_id: number;
    /**
     * - Specifies the item's size variant.
     */
    size: string;
    /**
     * - Number of units requested.
     */
    quantity: number;
    /**
     * - Identifier for grouping related items.
     */
    group_id?: string;
    /**
     * - Indicates if the item is the primary
     * one in a group.
     */
    is_primary_item?: boolean;
    /**
     * - Additional metadata for the item.
     */
    meta?: any;
    article_assignment: ArticleAssignment;
    /**
     * - List of location Ids to exclude.
     */
    ignore_locations: number[];
    /**
     * - List of preferred location Ids.
     */
    assign_locations: number[];
    /**
     * - Identifier for the seller.
     */
    seller_id?: number;
};
/** @returns {GetCountriesItems} */
declare function GetCountriesItems(): GetCountriesItems;
type GetCountriesItems = {
    /**
     * - A string serving as the unique identifier.
     */
    id?: string;
    /**
     * - A category for classifying the country into a
     * specific subtype.
     */
    sub_type?: string;
    /**
     * - A globally unique identifier for the country.
     */
    uid?: string;
    /**
     * - The official or widely recognized name of the
     * country used in general contexts.
     */
    name?: string;
    /**
     * - The 2-letter ISO code for the country.
     */
    iso2?: string;
    /**
     * - The 3-letter ISO code for the country.
     */
    iso3?: string;
    /**
     * - A list of timezones associated with the country.
     */
    timezones?: string[];
    /**
     * - A hierarchical list of items
     * representing organizational levels within the country.
     */
    hierarchy?: HierarchyItems[];
    /**
     * - A country-specific phone code.
     */
    phone_code?: string;
    currency?: CurrencyObject;
    /**
     * - The type or classification of the country (e.g.,
     * sovereign or dependent).
     */
    type?: string;
    /**
     * - The latitude of the central point of the country.
     */
    latitude?: string;
    /**
     * - The longitude of the central point of the country.
     */
    longitude?: string;
    /**
     * - A user-friendly name for the country,
     * typically for display purposes.
     */
    display_name?: string;
    /**
     * - A boolean indicating whether
     * additional hierarchical regions or divisions are present.
     */
    has_next_hierarchy?: boolean;
};
/** @returns {HierarchyItems} */
declare function HierarchyItems(): HierarchyItems;
type HierarchyItems = {
    /**
     * - The name of the item as displayed to the user,
     * usually in a UI or listing.
     */
    name?: string;
    /**
     * - It represent a country display name.
     */
    display_name?: string;
    /**
     * - A slug is a human-readable URL segment, typically
     * generated from a title with special characters removed.
     */
    slug?: string;
};
/** @returns {CurrencyObject} */
declare function CurrencyObject(): CurrencyObject;
type CurrencyObject = {
    /**
     * - A string representing the currency code.
     */
    code?: string;
    /**
     * - A string representing the currency name.
     */
    name?: string;
    /**
     * - A string representing the currency symbol.
     */
    symbol?: string;
};
/** @returns {Localities} */
declare function Localities(): Localities;
type Localities = {
    /**
     * - A string serving as the unique identifier.
     */
    id?: string;
    /**
     * - The name of the locality.
     */
    name?: string;
    /**
     * - The display name of the locality.
     */
    display_name?: string;
    /**
     * - List of parent locality Ids.
     */
    parent_ids?: string[];
    /**
     * - Additional metadata for the locality.\
     * _Deprecated_*
     */
    meta?: any;
    /**
     * - The type of the locality.
     */
    type?: string;
    lat_long?: PincodeLatLongData;
    /**
     * - Unique identifier of the parent locality,
     * if available.
     */
    parent_uid?: string;
    /**
     * - List of child localities.
     */
    localities?: LocalityParent[];
    /**
     * - Unique identifier of the geolocality.
     */
    code?: string;
    /**
     * - ISO 3166-1 alpha-2 code for the country.
     */
    iso2?: string;
    /**
     * - ISO 3166-1 alpha-3 code for the country.
     */
    iso3?: string;
    /**
     * - Currency information for the country.
     */
    currency?: any;
    /**
     * - Country's international phone dialing code.
     */
    phone_code?: string;
    /**
     * - Hierarchical data of the country's location.
     */
    hierarchy?: any;
    /**
     * - Latitude of the country's geographic center.
     */
    latitude?: string;
    /**
     * - Longitude of the country's geographic center.
     */
    longitude?: string;
};
/** @returns {PincodeLatLongData} */
declare function PincodeLatLongData(): PincodeLatLongData;
type PincodeLatLongData = {
    /**
     * - A string indicating the type of geographical data.
     */
    type?: string;
    /**
     * - An array of numbers representing the
     * latitude and longitude coordinates of the pincode.
     */
    coordinates?: number[];
};
/** @returns {LocalityParent} */
declare function LocalityParent(): LocalityParent;
type LocalityParent = {
    /**
     * - A string serving as the unique identifier.
     */
    id?: string;
    /**
     * - A string representing the name of the locality.
     */
    name?: string;
    /**
     * - A string providing the display name of
     * the locality.
     */
    display_name?: string;
    /**
     * - An object with additional properties for
     * metadata, defaulting to an empty object.\
     * _Deprecated_*
     */
    meta?: any;
    /**
     * - A nullable array of strings listing the
     * identifiers of parent localities, defaulting to an empty array.
     */
    parent_ids?: string[];
    /**
     * - A string indicating the type of locality.
     */
    type?: string;
    /**
     * - An object with additional properties
     * for serviceability details, defaulting to an empty object.
     */
    serviceability?: any;
    /**
     * - A nullable string for the unique identifier
     * of the parent locality, defaulting to an empty string.
     */
    parent_uid?: string;
    /**
     * - Unique Identifier of the Geolocality
     */
    code?: string;
    /**
     * - ISO 3166-1 alpha-2 code for the country.
     */
    iso2?: string;
    /**
     * - ISO 3166-1 alpha-3 code for the country.
     */
    iso3?: string;
    /**
     * - Currency information for the country.
     */
    currency?: any;
    /**
     * - Country's international phone dialing code.
     */
    phone_code?: string;
    /**
     * - Hierarchical data of the country's location.
     */
    hierarchy?: any;
    /**
     * - Latitude of the country's geographic center.
     */
    latitude?: string;
    /**
     * - Longitude of the country's geographic center.
     */
    longitude?: string;
};
/** @returns {CountryMetaFields} */
declare function CountryMetaFields(): CountryMetaFields;
type CountryMetaFields = {
    application_fields?: ApplicationFields;
};
/** @returns {ApplicationFields} */
declare function ApplicationFields(): ApplicationFields;
type ApplicationFields = {
    address?: GetCountryFieldsAddress[];
    /**
     * - An array of strings
     * representing fields related to the serviceability of the country.
     */
    serviceability_fields?: string[];
    address_template?: GetCountryFieldsAddressTemplateApplication;
};
/** @returns {GetCountryFieldsAddress} */
declare function GetCountryFieldsAddress(): GetCountryFieldsAddress;
type GetCountryFieldsAddress = {
    /**
     * - The name displayed for the address field.
     */
    display_name: string;
    /**
     * - A slug is a human-readable URL segment, typically
     * generated from a title with special characters removed.
     */
    slug: string;
    /**
     * - Indicates whether the field is mandatory for input.
     */
    required: boolean;
    /**
     * - Indicates whether the field is editable.
     */
    edit?: boolean;
    /**
     * - The type of input type for the field (e.g., textbox, etc.).
     */
    input: string;
    validation?: FieldValidation;
    values?: GetCountryFieldsAddressValues;
    /**
     * - Error message text displayed when
     * validation fails or input is incorrect.
     */
    error_text?: string;
};
/** @returns {FieldValidation} */
declare function FieldValidation(): FieldValidation;
type FieldValidation = {
    /**
     * - Type of field validation (e.g., regex, length).
     */
    type?: string;
    regex?: FieldValidationRegex;
};
/** @returns {FieldValidationRegex} */
declare function FieldValidationRegex(): FieldValidationRegex;
type FieldValidationRegex = {
    /**
     * - The regular expression pattern used for field validation.
     */
    value?: string;
    length?: LengthValidation;
};
/** @returns {LengthValidation} */
declare function LengthValidation(): LengthValidation;
type LengthValidation = {
    /**
     * - Minimum length of the field.
     */
    min?: number;
    /**
     * - Maximum length of the field.
     */
    max?: number;
};
/** @returns {GetCountryFieldsAddressValues} */
declare function GetCountryFieldsAddressValues(): GetCountryFieldsAddressValues;
type GetCountryFieldsAddressValues = {
    get_one?: GetOneOrAll;
    get_all?: GetOneOrAll;
};
/** @returns {GetOneOrAll} */
declare function GetOneOrAll(): GetOneOrAll;
type GetOneOrAll = {
    /**
     * - Unique identifier for the operation or
     * action to be performed.
     */
    operation_id?: string;
    params?: GetOneOrAllParams;
};
/** @returns {GetOneOrAllParams} */
declare function GetOneOrAllParams(): GetOneOrAllParams;
type GetOneOrAllParams = {
    path?: GetOneOrAllPath;
    query?: GetOneOrAllQuery;
};
/** @returns {GetOneOrAllPath} */
declare function GetOneOrAllPath(): GetOneOrAllPath;
type GetOneOrAllPath = {
    /**
     * - The type of resource being referenced in the path.
     */
    type?: string;
    /**
     * - The specific value or identifier associated with
     * the path resource.
     */
    value?: string;
};
/** @returns {GetOneOrAllQuery} */
declare function GetOneOrAllQuery(): GetOneOrAllQuery;
type GetOneOrAllQuery = {
    /**
     * - The name of the country to filter results by,
     * if specified.
     */
    country?: string;
    /**
     * - The name of the state to filter results by, if specified.
     */
    state?: string;
    /**
     * - The name of the city to filter results by, if specified.
     */
    city?: string;
    /**
     * - The name of the sector to filter results by, if
     * specified.
     */
    sector?: string;
};
/** @returns {GetCountryFieldsAddressTemplateApplication} */
declare function GetCountryFieldsAddressTemplateApplication(): GetCountryFieldsAddressTemplateApplication;
type GetCountryFieldsAddressTemplateApplication = {
    /**
     * - A string representing the template used
     * for displaying address fields in a checkout form.
     */
    checkout_form: string;
    /**
     * - A string representing the template used
     * for displaying address fields in a store operating system form.
     */
    store_os_form: string;
    /**
     * - A string representing the default
     * template used for displaying address fields.
     */
    default_display: string;
};
/** @returns {CountryHierarchy} */
declare function CountryHierarchy(): CountryHierarchy;
type CountryHierarchy = {
    /**
     * - A string representing the display name of
     * the hierarchy level.
     */
    display_name?: string;
    /**
     * - A slug is a human-readable URL segment, typically
     * generated from a title with special characters removed.
     */
    slug?: string;
};
/** @returns {GetCountryFields} */
declare function GetCountryFields(): GetCountryFields;
type GetCountryFields = {
    /**
     * - An array containing instances
     * of GetCountryFieldsAddress, which detail the address fields for a country.
     */
    address: GetCountryFieldsAddress[];
    /**
     * - An array of strings representing
     * fields related to the serviceability of the country.
     */
    serviceability_fields: string[];
    address_template: GetCountryFieldsAddressTemplate;
};
/** @returns {GetCountryFieldsAddressTemplate} */
declare function GetCountryFieldsAddressTemplate(): GetCountryFieldsAddressTemplate;
type GetCountryFieldsAddressTemplate = {
    /**
     * - A string representing the template used
     * for displaying address fields for respective entity.
     */
    checkout_form: string;
    /**
     * - A string representing the template used
     * for displaying address fields for respective entity.
     */
    store_os_form: string;
    /**
     * - A string representing the default
     * template used for displaying address fields.
     */
    default_display: string;
};
/** @returns {LocalityParents} */
declare function LocalityParents(): LocalityParents;
type LocalityParents = {
    /**
     * - A string denoting the city or municipality of the address.
     */
    city?: any;
    /**
     * - A string indicating the state or province of the address.
     */
    state?: any;
    /**
     * - A string indicating the country name.
     */
    country?: any;
};
/** @returns {ZoneConfig} */
declare function ZoneConfig(): ZoneConfig;
type ZoneConfig = {
    /**
     * - Specifies the type of
     * serviceability for the zone.
     */
    serviceability_type?: string;
    /**
     * - The number of active zones.
     */
    active_count?: number;
    /**
     * - The total number of zones.
     */
    total_count?: number;
};
/** @returns {PromiseType} */
declare function PromiseType(): PromiseType;
type PromiseType = {
    /**
     * - The name displayed for the promise type.
     */
    display_name: string;
    /**
     * - A unique identifier for the promise type.
     */
    slug: string;
    /**
     * - A brief description of the promise type.
     */
    description: string;
    /**
     * - Indicates whether the promise type is active.
     */
    is_active: boolean;
    /**
     * - Indicates whether the promise type is set as default.
     */
    is_default: boolean;
    /**
     * - Indicates whether all delivery
     * points (DPs) are considered for the promise type.
     */
    is_all_dps_considered?: boolean;
};
/** @returns {InstallCourierPartnerItemsSchema} */
declare function InstallCourierPartnerItemsSchema(): InstallCourierPartnerItemsSchema;
type InstallCourierPartnerItemsSchema = {
    /**
     * - A brief description of the courier partner
     * or its services.
     */
    description?: string;
    /**
     * - The type of the courier partner
     * extension, which is not constrained to predefined values.
     */
    extention_type?: string;
    /**
     * - Indicates if the courier partner is hidden
     * from the available list, typically used for internal testing or staging.
     */
    is_hidden?: boolean;
    /**
     * - A flag indicating whether the courier
     * partner has been successfully installed and is active.
     */
    is_installed?: boolean;
    /**
     * - The type of launch for the courier
     * partner, not constrained to predefined values.
     */
    launch_type?: string;
    /**
     * - An object representing the logo of the courier
     * partner, potentially including different sizes or formats.
     */
    logo?: any;
    /**
     * - The timestamp when the courier partner
     * installation record was last modified.
     */
    modified_at?: string;
    /**
     * - The name of the courier partner.
     */
    name?: string;
    /**
     * - The unique identifier of the
     * organization associated with the courier partner.
     */
    organization_id?: string;
    /**
     * - The unique identifier of the courier partner
     * installation record.
     */
    _id?: string;
};
/** @returns {HistoryObject} */
declare function HistoryObject(): HistoryObject;
type HistoryObject = {
    /**
     * - A unique identifier for the performed batch operation.
     */
    batch_id: string;
    /**
     * - The type of entity associated with the batch.
     */
    entity_type?: string;
    /**
     * - A URL linking to the error file
     * generated during the batch process, if any errors occurred. This field can
     * be null if no errors were encountered.
     */
    error_file_url?: string;
    /**
     * - The path to the file associated with the
     * batch operation, typically where the processed data is stored.
     */
    file_path?: string;
    /**
     * - The current stage or status of the batch (e.g.,
     * processing, completed, failed).
     */
    stage: string;
    /**
     * - The person or system that last updated the
     * batch record (e.g., John Doe, System).
     */
    updated_by?: string;
    /**
     * - The timestamp of the last update to the
     * batch record. This field can be null if the record has not been updated
     * after creation.
     */
    updated_at?: string;
    /**
     * - The total number of items or entities
     * processed in this batch.
     */
    total_count?: number;
    /**
     * - The number of items or entities that
     * encountered errors during the batch processing.
     */
    total_error_count?: number;
};
