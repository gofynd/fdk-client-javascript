export = ServiceabilityPlatformModel;
/**
 * @typedef ErrorResponseV3
 * @property {boolean} [success]
 * @property {ErrorObject} [error]
 */
/**
 * @typedef ErrorObject
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [message]
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
 * @typedef CurrencyObject
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [symbol]
 */
/**
 * @typedef CountryHierarchy
 * @property {string} [display_name]
 * @property {string} [slug]
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
 * @typedef GetCountryFields
 * @property {GetCountryFieldsAddress[]} address
 * @property {string[]} serviceability_fields
 * @property {GetCountryFieldsAddressTemplate} address_template
 */
/**
 * @typedef GetCountryFieldsAddressTemplate
 * @property {string} checkout_form
 * @property {string} store_os_form
 * @property {string} default_display
 */
/**
 * @typedef FieldValidation
 * @property {string} [type]
 * @property {FieldValidationRegex} [regex]
 */
/**
 * @typedef FieldValidationRegex
 * @property {string} [value]
 * @property {LengthValidation} [length]
 */
/**
 * @typedef LengthValidation
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef GetOneOrAllQuery
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [sector]
 */
/**
 * @typedef GetOneOrAllPath
 * @property {string} [type]
 * @property {string} [value]
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
 * @property {FieldValidation} [validation]
 * @property {GetCountryFieldsAddressValues} [values]
 * @property {string} [error_text]
 */
/**
 * @typedef PincodeLatLongData
 * @property {string} [type]
 * @property {number[]} [coordinates]
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
 * @typedef GetLocalities
 * @property {Localities[]} [items]
 * @property {Page} [page]
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
 * @typedef ApplicationConfigPutResponse
 * @property {string[]} [rule_ids]
 * @property {string[]} [sort]
 * @property {string[]} [manual_priority]
 * @property {string} [application_id]
 * @property {number} [company_id]
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
 * @typedef BuyboxRuleConfig
 * @property {string[]} [store_type_priority]
 * @property {string[]} [store_tag_priority]
 * @property {string[]} [sort]
 */
/**
 * @typedef CourierPartnerConfig
 * @property {string[]} [rule_ids]
 * @property {string[]} [sort]
 * @property {string[]} [manual_priority]
 */
/**
 * @typedef ZoneConfig
 * @property {string} [serviceability_type]
 * @property {number} [active_count]
 * @property {number} [total_count]
 */
/**
 * @typedef ApplicationConfigGetResponse
 * @property {ZoneConfig} [zones]
 * @property {CourierPartnerConfig} [courier_partner_config]
 * @property {BuyboxRuleConfig} [buybox_rule_config]
 * @property {PromiseConfig} [promise_config]
 */
/**
 * @typedef ApplicationConfigPutRequest
 * @property {string[]} [rule_ids]
 * @property {string[]} [sort]
 * @property {string[]} [manual_priority]
 */
/**
 * @typedef InstallCourierPartnerItemsSchema
 * @property {string} [base_url]
 * @property {Object} [callbacks]
 * @property {string} [contact_email]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [developed_by_name]
 * @property {string} [ext_version]
 * @property {string} [extension_type]
 * @property {boolean} [is_coming_soon]
 * @property {boolean} [is_hidden]
 * @property {boolean} [is_installed]
 * @property {string} [launch_type]
 * @property {Object} [logo]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {string} [organization_id]
 * @property {Object} [partner]
 * @property {string[]} [scope]
 * @property {string[]} [whitelisted_urls]
 * @property {number} [__v]
 * @property {string} [_id]
 */
/**
 * @typedef InstallCourierPartnerResponseSchema
 * @property {InstallCourierPartnerItemsSchema[]} [items]
 * @property {Page} [page]
 */
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
 * @property {RegionSchema[]} [regions]
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
 * @typedef ZoneBulkExport
 * @property {string} [batch_id]
 */
/**
 * @typedef GetZoneBulkExport
 * @property {ZoneBulkItem[]} [items]
 */
/**
 * @typedef ZoneBulkItem
 * @property {string} [batch_id]
 * @property {string} [file_path]
 * @property {number} [total]
 * @property {number} [failed]
 * @property {string} [error_file_url]
 * @property {string} [action]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [type]
 * @property {string} [stage]
 */
/**
 * @typedef CreateBulkZoneData
 * @property {string} [file_url]
 * @property {string} [product_type]
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
 * @typedef CreateBulkZoneResponse
 * @property {string} [zone_id]
 */
/**
 * @typedef GetBulkZoneHistory
 * @property {BulkZoneItems[]} [items]
 * @property {PageV2} [page]
 */
/**
 * @typedef BulkZoneItems
 * @property {string} [batch_id]
 * @property {string} [entity_type]
 * @property {string} [error_file_url]
 * @property {string} [file_path]
 * @property {string} [file_name]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [stage]
 */
/**
 * @typedef PageV2
 * @property {string} [type]
 * @property {number} [size]
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 */
/**
 * @typedef BulkCreateZoneExport
 * @property {string} [placeholder]
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
 * @property {string} [batch_id]
 * @property {number} [status_code]
 * @property {ErrorResponse[]} [error]
 * @property {boolean} [success]
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
 * @property {number} [status_code]
 * @property {boolean} [success]
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
 * @typedef PincodeCodDataSchema
 * @property {string} [pincode]
 * @property {boolean} [active]
 */
/**
 * @typedef PincodeCodStatusListingResponse
 * @property {string} country
 * @property {PincodeCodDataSchema[]} data
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
 * @typedef BulkGeoAreaRequestBody
 * @property {string} [file_url]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [type]
 */
/**
 * @typedef BulkGeoAreaResponse
 * @property {string} [geoarea_id]
 */
/**
 * @typedef BulkGeoAreaGetResponse
 * @property {string} [batch_id]
 * @property {string} [file_path]
 * @property {number} [total]
 * @property {number} [failed]
 * @property {string} [error_file_url]
 * @property {string} [action]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [type]
 * @property {string} [stage]
 * @property {string} [file_url]
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
 * @typedef GeoAreaErrorResponse
 * @property {GeoAreaResponseDetail[]} [error]
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
 * @typedef GeoAreaResponseDetail
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [message]
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
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {string} geoarea_id
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
 * @property {boolean} success
 * @property {string} error
 */
/**
 * @typedef ErrorResponse
 * @property {string} value
 * @property {string} message
 * @property {string} type
 * @property {string} [error]
 */
/**
 * @typedef PackageMaterialNotFound
 * @property {number} [status_code]
 * @property {boolean} [success]
 */
/**
 * @typedef PackageMaterialsErrorResponse
 * @property {string} [value]
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [error]
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
 * @typedef Page2
 * @property {number} size
 * @property {number} item_total
 * @property {string} type
 * @property {number} current
 * @property {boolean} has_next
 */
/**
 * @typedef CourierPartnerList
 * @property {string} [extension_id]
 * @property {string} [account_id]
 * @property {string} [name]
 * @property {boolean} [is_self_ship]
 * @property {Object} [scheme_rules]
 * @property {string} [stage]
 */
/**
 * @typedef LocationRuleValues
 * @property {string} uid
 * @property {string} [sub_type]
 * @property {string} [display_name]
 * @property {string} [parent_uid]
 * @property {string[]} [parent_id]
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
 * @property {ArithmeticOperationsV2} [order_place_date]
 * @property {IntComparisonOperations} [store_ids]
 * @property {StringComparisonOperations} [store_type]
 * @property {StringComparisonOperations} [store_tags]
 * @property {ArithmeticOperations} [shipment_weight]
 * @property {ArithmeticOperations} [shipment_cost]
 * @property {ArithmeticOperations} [shipment_volumetric_weight]
 * @property {IntComparisonOperations} [company_ids]
 * @property {StringComparisonOperations} [promise_types]
 */
/**
 * @typedef CourierPartnerRuleResponseConditions
 * @property {LocationRule} [forward]
 * @property {LocationRule} [reverse]
 * @property {StringComparisonOperations} [payment_mode]
 * @property {IntComparisonOperations} [category_ids]
 * @property {IntComparisonOperations} [product_ids]
 * @property {StringComparisonOperations} [product_tags]
 * @property {StringComparisonOperations} [zone_ids]
 * @property {IntComparisonOperations} [department_ids]
 * @property {IntComparisonOperations} [brand_ids]
 * @property {ArithmeticOperationsV2} [order_place_date]
 * @property {IntComparisonOperations} [store_ids]
 * @property {StringComparisonOperations} [store_type]
 * @property {StringComparisonOperations} [store_tags]
 * @property {ArithmeticOperations} [shipment_weight]
 * @property {ArithmeticOperations} [shipment_cost]
 * @property {ArithmeticOperations} [shipment_volumetric_weight]
 * @property {IntComparisonOperations} [company_ids]
 * @property {StringComparisonOperations} [promise_types]
 */
/**
 * @typedef CourierPartnerRule
 * @property {string} [id]
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {boolean} is_active
 * @property {CourierPartnerList[]} [cp_list]
 * @property {string} name
 * @property {CourierPartnerRuleConditions} conditions
 * @property {string[]} [manual_priority]
 * @property {string[]} sort
 * @property {string} type
 */
/**
 * @typedef CourierPartnerRuleResponse
 * @property {boolean} is_active
 * @property {CourierPartnerList[]} [cp_list]
 * @property {string} name
 * @property {CourierPartnerRuleResponseConditions} conditions
 * @property {string[]} [manual_priority]
 * @property {string[]} sort
 * @property {string} type
 */
/**
 * @typedef CourierPartnerRuleResponseSchema
 * @property {string} [id]
 * @property {boolean} is_active
 * @property {CourierPartnerList[]} [cp_list]
 * @property {string} name
 * @property {CourierPartnerRuleResponseConditions} conditions
 * @property {string[]} [manual_priority]
 * @property {string[]} sort
 * @property {string} type
 * @property {string} [application_id]
 * @property {number} [company_id]
 */
/**
 * @typedef FailureResponse
 * @property {boolean} success
 * @property {ErrorResponse[]} error
 */
/**
 * @typedef CourierPartnerRulesListResponse
 * @property {CourierPartnerRuleResponseSchema[]} items
 * @property {Page} page
 */
/**
 * @typedef CompanyConfig
 * @property {number} [company_id]
 * @property {string[]} [sort]
 * @property {string} [logistics_as_actual]
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
 * @property {BuyboxRuleConfig} [buybox_rule_config]
 * @property {PromiseType[]} [promise_types]
 * @property {PromiseConfig} [promise_config]
 */
/**
 * @typedef ApplicationConfigPatchRequest
 * @property {CourierPartnerConfig} [courier_partner_config]
 * @property {BuyboxRuleConfig} [buybox_rule_config]
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
 * @property {ArithmeticOperationsV2} [order_place_date]
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
 * @property {number} [id]
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
 * @property {string} [name]
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
 * @property {number} [company_id]
 * @property {string} [extension_id]
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
 * @property {number} weight
 * @property {boolean} [auto_calculate]
 * @property {number} [max_weight]
 * @property {number} [package_vol_weight]
 * @property {number} error_rate
 * @property {Channel[]} channels
 * @property {string} package_type
 * @property {string} size
 * @property {boolean} [track_inventory]
 * @property {PackageMaterialRule[]} [rules]
 * @property {number[]} store_ids
 * @property {PackageMpStores[]} [mp_stores]
 * @property {string[]} [media]
 * @property {string} status
 */
/**
 * @typedef PackageMaterialResponse
 * @property {number} [company_id]
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
 * @property {boolean} [is_active]
 * @property {string} status
 * @property {number} [max_weight]
 * @property {number} [package_vol_weight]
 * @property {boolean} [auto_calculate]
 * @property {PackageMpStores[]} [mp_stores]
 */
/**
 * @typedef PackageMaterialRule
 * @property {string} [rule_id]
 * @property {PackageMaterialRuleQuantity} [quantity]
 * @property {number} [weight]
 */
/**
 * @typedef PackageMpStores
 * @property {string} [app_name]
 * @property {string} [app_id]
 * @property {number[]} [store_ids]
 * @property {Object} [store_data]
 */
/**
 * @typedef PackageRuleRequest
 * @property {string} name
 * @property {string} company_id
 * @property {PackageRuleCategory} [category_id]
 * @property {PackageRuleProduct} [product_id]
 * @property {PackageRuleProductTag} [product_tag]
 * @property {PackageRuleDepartmentId} [department_id]
 * @property {PackageRuleProductAttributes} [product_attributes]
 * @property {string} type
 * @property {boolean} [is_active]
 */
/**
 * @typedef PackageRule
 * @property {string} name
 * @property {string} [id]
 * @property {number} [item_id]
 * @property {number} [width]
 * @property {number} [height]
 * @property {number} [length]
 * @property {PackageMaterialRule[]} [rules]
 * @property {number[]} [store_ids]
 * @property {number} [weight]
 * @property {number} [error_rate]
 * @property {string} [package_type]
 * @property {string} [size]
 * @property {string[]} [media]
 * @property {Channel[]} [channels]
 * @property {boolean} [track_inventory]
 * @property {string} [status]
 * @property {number} [max_weight]
 * @property {number} [package_vol_weight]
 * @property {boolean} [auto_calculate]
 * @property {PackageMpStores[]} [mp_stores]
 */
/**
 * @typedef PackageRuleResponse
 * @property {boolean} [is_active]
 * @property {number} company_id
 * @property {PackageRuleProductTag} [product_tag]
 * @property {PackageRuleDepartmentId} [department_id]
 * @property {PackageRuleProductAttributes} [product_attributes]
 * @property {string} name
 * @property {PackageRuleCategory} [category_id]
 * @property {PackageRuleProduct} [product_id]
 * @property {string} type
 * @property {string} [id]
 */
/**
 * @typedef Channel
 * @property {string} [type]
 * @property {string} [id]
 */
/**
 * @typedef PackageMaterialRuleList
 * @property {PackageRuleResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PackageMaterialList
 * @property {Object} [items]
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
 * @typedef PackageRuleProductAttributes
 * @property {string[]} [includes]
 */
/**
 * @typedef PackageRuleDepartmentId
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
/**
 * @typedef CompanySelfShip
 * @property {boolean} is_active
 * @property {number} tat
 * @property {string} unit
 */
/**
 * @typedef ArithmeticOperationsV2
 * @property {string} [lt]
 * @property {string} [gt]
 * @property {string} [lte]
 * @property {string} [gte]
 */
/**
 * @typedef CompanyConfigurationShema
 * @property {string[]} [sort]
 */
declare class ServiceabilityPlatformModel {
}
declare namespace ServiceabilityPlatformModel {
    export { ErrorResponseV3, ErrorObject, ValidateAddressRequest, CountryObject, GetCountries, CurrencyObject, CountryHierarchy, GetCountry, GetCountryFields, GetCountryFieldsAddressTemplate, FieldValidation, FieldValidationRegex, LengthValidation, GetOneOrAllQuery, GetOneOrAllPath, GetOneOrAllParams, GetOneOrAll, GetCountryFieldsAddressValues, GetCountryFieldsAddress, PincodeLatLongData, Localities, GetLocalities, LocalityParent, GetLocality, ApplicationConfigPutResponse, PromiseType, BuyboxRuleConfig, CourierPartnerConfig, ZoneConfig, ApplicationConfigGetResponse, ApplicationConfigPutRequest, InstallCourierPartnerItemsSchema, InstallCourierPartnerResponseSchema, UpdateZoneConfigRequest, ServiceabilityErrorResponse, ApplicationServiceabilityConfig, ApplicationServiceabilityConfigResponse, EntityRegionView_Request, EntityRegionView_Error, EntityRegionView_page, getAppRegionZonesResponse, PageSchema, EntityRegionView_Items, EntityRegionView_Response, ListViewSummary, ProductSchema, StoresSchema, SummarySchema, RegionSchema, ServiceabilityDeleteErrorResponse, ListViewResponseV2, ListViewItemsV2, Summary, GeoArea, ListViewProductV2, ZoneDataItem, ListViewProduct, ListViewChannels, ListViewItems, ListViewResponse, CompanyStoreView_PageItems, CompanyStoreView_Response, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingType, UpdateZoneDataV2, ZoneUpdateSuccessResponse, ZoneDeleteSuccessResponse, UpdateZoneData, ZoneUpdateRequest, ZoneSuccessResponse, GetZoneDataViewItems, GetSingleZoneDataViewResponse, GetZoneByIdSchema, CreateZoneV2Data, ZoneBulkExport, GetZoneBulkExport, ZoneBulkItem, CreateBulkZoneData, ZoneStores, ZoneProduct, ZoneResponseV2, CreateBulkZoneResponse, GetBulkZoneHistory, BulkZoneItems, PageV2, BulkCreateZoneExport, CreateZoneData, ZoneResponse, GetZoneFromPincodeViewRequest, Zone, GetZoneFromPincodeViewResponse, GetZoneFromApplicationIdViewResponse, ServiceabilityPageResponse, MobileNo, ManagerResponse, ModifiedByResponse, IntegrationTypeResponse, ProductReturnConfigResponse, ContactNumberResponse, AddressResponse, CreatedByResponse, EwayBillResponse, EinvoiceResponse, GstCredentialsResponse, WarningsResponse, OpeningClosing, TimmingResponse, DocumentsResponse, Dp, LogisticsResponse, ItemResponse, GetStoresViewResponse, ReAssignStoreRequest, ServiceabilityZoneErrorResponse, ReAssignStoreResponse, PincodeMopData, PincodeMopUpdateResponse, PincodeMOPresponse, CommonError, PincodeMopBulkData, PincodeBulkViewResponse, PincodeCodStatusListingRequest, PincodeCodDataSchema, PincodeCodStatusListingResponse, Error, PincodeCodStatusListingPage, PincodeCodStatusListingSummary, PincodeMopUpdateAuditHistoryRequest, PincodeMopUpdateAuditHistoryPaging, PincodeMopUpdateAuditHistoryResponse, PincodeMopUpdateAuditHistoryResponseData, ArithmeticOperations, SchemeRulesFeatures, SchemeRules, CourierAccount, BulkGeoAreaRequestBody, BulkGeoAreaResponse, BulkGeoAreaGetResponse, GeoAreaRequestBody, GeoAreaErrorResponse, ConflictingErrorResponse, ErrorResponseItem, ConflictingArea, GeoAreaResponseDetail, ErrorResponseDetail, GeoAreaResponseBody, GeoAreaPutResponseBody, Area, Region, RegionV2, Country, AreaExpanded, AreaExpandedV2, GeoAreaResponse, GeoAreaGetResponseBody, GeoAreaItemResponse, ErrorResponseV2, ErrorResponse, PackageMaterialNotFound, PackageMaterialsErrorResponse, CourierPartnerAccountFailureResponse, Page, Page2, CourierPartnerList, LocationRuleValues, LocationRule, StringComparisonOperations, IntComparisonOperations, CourierPartnerRuleConditions, CourierPartnerRuleResponseConditions, CourierPartnerRule, CourierPartnerRuleResponse, CourierPartnerRuleResponseSchema, FailureResponse, CourierPartnerRulesListResponse, CompanyConfig, StorePromiseAttributeConfig, DeliveryServiceAttributeConfig, BufferField, PromiseConfig, ApplicationConfig, ApplicationConfigPatchRequest, ApplicationConfigPatchResponse, BulkRegionJobSerializer, BulkRegionResponseItemData, BulkRegionResponse, SelfShipResponse, ApplicationSelfShipConfig, ApplicationSelfShipConfigResponse, StoreRuleConfigData, CustomerRadiusSchema, StoreRuleConditionSchema, StoreRuleDataSchema, StorePrioritySchema, GetStoreRulesApiResponse, CreateStoreRuleRequestSchema, StoreRuleResponseSchema, StoreRuleUpdateResponseSchema, ServiceabilityModel, CourierPartnerSchemeFeatures, CourierPartnerSchemeModel, CourierAccountResponse, CompanyCourierPartnerAccountListResponse, PackageMaterial, PackageMaterialResponse, PackageMaterialRule, PackageMpStores, PackageRuleRequest, PackageRule, PackageRuleResponse, Channel, PackageMaterialRuleList, PackageMaterialList, PackageRuleProduct, PackageRuleProductTag, PackageRuleCategory, PackageRuleProductAttributes, PackageRuleDepartmentId, PackageMaterialRuleQuantity, RulePriorityRequest, RulePriorityResponse, CompanySelfShip, ArithmeticOperationsV2, CompanyConfigurationShema };
}
/** @returns {ErrorResponseV3} */
declare function ErrorResponseV3(): ErrorResponseV3;
type ErrorResponseV3 = {
    success?: boolean;
    error?: ErrorObject;
};
/** @returns {ErrorObject} */
declare function ErrorObject(): ErrorObject;
type ErrorObject = {
    type?: string;
    value?: string;
    message?: string;
};
/** @returns {ValidateAddressRequest} */
declare function ValidateAddressRequest(): ValidateAddressRequest;
type ValidateAddressRequest = {
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
/** @returns {CountryObject} */
declare function CountryObject(): CountryObject;
type CountryObject = {
    id?: string;
    name?: string;
    display_name?: string;
    iso2?: string;
    iso3?: string;
    timezones?: string[];
    hierarchy?: CountryHierarchy[];
    phone_code?: string;
    latitude?: string;
    longitude?: string;
    currency?: CurrencyObject;
    type?: string;
};
/** @returns {GetCountries} */
declare function GetCountries(): GetCountries;
type GetCountries = {
    items?: CountryObject[];
    page?: Page;
};
/** @returns {CurrencyObject} */
declare function CurrencyObject(): CurrencyObject;
type CurrencyObject = {
    code?: string;
    name?: string;
    symbol?: string;
};
/** @returns {CountryHierarchy} */
declare function CountryHierarchy(): CountryHierarchy;
type CountryHierarchy = {
    display_name?: string;
    slug?: string;
};
/** @returns {GetCountry} */
declare function GetCountry(): GetCountry;
type GetCountry = {
    id?: string;
    name?: string;
    display_name?: string;
    iso2?: string;
    iso3?: string;
    timezones?: string[];
    hierarchy?: CountryHierarchy[];
    phone_code?: string;
    latitude?: string;
    longitude?: string;
    currency?: CurrencyObject;
    type?: string;
    fields?: GetCountryFields;
};
/** @returns {GetCountryFields} */
declare function GetCountryFields(): GetCountryFields;
type GetCountryFields = {
    address: GetCountryFieldsAddress[];
    serviceability_fields: string[];
    address_template: GetCountryFieldsAddressTemplate;
};
/** @returns {GetCountryFieldsAddressTemplate} */
declare function GetCountryFieldsAddressTemplate(): GetCountryFieldsAddressTemplate;
type GetCountryFieldsAddressTemplate = {
    checkout_form: string;
    store_os_form: string;
    default_display: string;
};
/** @returns {FieldValidation} */
declare function FieldValidation(): FieldValidation;
type FieldValidation = {
    type?: string;
    regex?: FieldValidationRegex;
};
/** @returns {FieldValidationRegex} */
declare function FieldValidationRegex(): FieldValidationRegex;
type FieldValidationRegex = {
    value?: string;
    length?: LengthValidation;
};
/** @returns {LengthValidation} */
declare function LengthValidation(): LengthValidation;
type LengthValidation = {
    min?: number;
    max?: number;
};
/** @returns {GetOneOrAllQuery} */
declare function GetOneOrAllQuery(): GetOneOrAllQuery;
type GetOneOrAllQuery = {
    country?: string;
    state?: string;
    city?: string;
    sector?: string;
};
/** @returns {GetOneOrAllPath} */
declare function GetOneOrAllPath(): GetOneOrAllPath;
type GetOneOrAllPath = {
    type?: string;
    value?: string;
};
/** @returns {GetOneOrAllParams} */
declare function GetOneOrAllParams(): GetOneOrAllParams;
type GetOneOrAllParams = {
    path?: GetOneOrAllPath;
    query?: GetOneOrAllQuery;
};
/** @returns {GetOneOrAll} */
declare function GetOneOrAll(): GetOneOrAll;
type GetOneOrAll = {
    operation_id?: string;
    params?: GetOneOrAllParams;
};
/** @returns {GetCountryFieldsAddressValues} */
declare function GetCountryFieldsAddressValues(): GetCountryFieldsAddressValues;
type GetCountryFieldsAddressValues = {
    get_one?: GetOneOrAll;
    get_all?: GetOneOrAll;
};
/** @returns {GetCountryFieldsAddress} */
declare function GetCountryFieldsAddress(): GetCountryFieldsAddress;
type GetCountryFieldsAddress = {
    display_name: string;
    slug: string;
    required: boolean;
    edit?: boolean;
    input: string;
    validation?: FieldValidation;
    values?: GetCountryFieldsAddressValues;
    error_text?: string;
};
/** @returns {PincodeLatLongData} */
declare function PincodeLatLongData(): PincodeLatLongData;
type PincodeLatLongData = {
    type?: string;
    coordinates?: number[];
};
/** @returns {Localities} */
declare function Localities(): Localities;
type Localities = {
    id?: string;
    name?: string;
    display_name?: string;
    parent_ids?: string[];
    meta?: any;
    type?: string;
    lat_long?: PincodeLatLongData;
    parent_uid?: string;
    localities?: LocalityParent[];
};
/** @returns {GetLocalities} */
declare function GetLocalities(): GetLocalities;
type GetLocalities = {
    items?: Localities[];
    page?: Page;
};
/** @returns {LocalityParent} */
declare function LocalityParent(): LocalityParent;
type LocalityParent = {
    id?: string;
    name?: string;
    display_name?: string;
    meta?: any;
    parent_ids?: string[];
    type?: string;
    serviceability?: any;
    parent_uid?: string;
};
/** @returns {GetLocality} */
declare function GetLocality(): GetLocality;
type GetLocality = {
    id?: string;
    name?: string;
    display_name?: string;
    meta?: any;
    parent_ids?: string[];
    parent_uid?: string;
    type?: string;
    localities?: LocalityParent[];
};
/** @returns {ApplicationConfigPutResponse} */
declare function ApplicationConfigPutResponse(): ApplicationConfigPutResponse;
type ApplicationConfigPutResponse = {
    rule_ids?: string[];
    sort?: string[];
    manual_priority?: string[];
    application_id?: string;
    company_id?: number;
};
/** @returns {PromiseType} */
declare function PromiseType(): PromiseType;
type PromiseType = {
    display_name: string;
    slug: string;
    description: string;
    is_active: boolean;
    is_default: boolean;
};
/** @returns {BuyboxRuleConfig} */
declare function BuyboxRuleConfig(): BuyboxRuleConfig;
type BuyboxRuleConfig = {
    store_type_priority?: string[];
    store_tag_priority?: string[];
    sort?: string[];
};
/** @returns {CourierPartnerConfig} */
declare function CourierPartnerConfig(): CourierPartnerConfig;
type CourierPartnerConfig = {
    rule_ids?: string[];
    sort?: string[];
    manual_priority?: string[];
};
/** @returns {ZoneConfig} */
declare function ZoneConfig(): ZoneConfig;
type ZoneConfig = {
    serviceability_type?: string;
    active_count?: number;
    total_count?: number;
};
/** @returns {ApplicationConfigGetResponse} */
declare function ApplicationConfigGetResponse(): ApplicationConfigGetResponse;
type ApplicationConfigGetResponse = {
    zones?: ZoneConfig;
    courier_partner_config?: CourierPartnerConfig;
    buybox_rule_config?: BuyboxRuleConfig;
    promise_config?: PromiseConfig;
};
/** @returns {ApplicationConfigPutRequest} */
declare function ApplicationConfigPutRequest(): ApplicationConfigPutRequest;
type ApplicationConfigPutRequest = {
    rule_ids?: string[];
    sort?: string[];
    manual_priority?: string[];
};
/** @returns {InstallCourierPartnerItemsSchema} */
declare function InstallCourierPartnerItemsSchema(): InstallCourierPartnerItemsSchema;
type InstallCourierPartnerItemsSchema = {
    base_url?: string;
    callbacks?: any;
    contact_email?: string;
    created_at?: string;
    description?: string;
    developed_by_name?: string;
    ext_version?: string;
    extension_type?: string;
    is_coming_soon?: boolean;
    is_hidden?: boolean;
    is_installed?: boolean;
    launch_type?: string;
    logo?: any;
    modified_at?: string;
    name?: string;
    organization_id?: string;
    partner?: any;
    scope?: string[];
    whitelisted_urls?: string[];
    __v?: number;
    _id?: string;
};
/** @returns {InstallCourierPartnerResponseSchema} */
declare function InstallCourierPartnerResponseSchema(): InstallCourierPartnerResponseSchema;
type InstallCourierPartnerResponseSchema = {
    items?: InstallCourierPartnerItemsSchema[];
    page?: Page;
};
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
/** @returns {ProductSchema} */
declare function ProductSchema(): ProductSchema;
type ProductSchema = {
    type: string;
    values: number[];
};
/** @returns {StoresSchema} */
declare function StoresSchema(): StoresSchema;
type StoresSchema = {
    type: string;
    values: number[];
};
/** @returns {SummarySchema} */
declare function SummarySchema(): SummarySchema;
type SummarySchema = {
    stores_count?: number;
    products_count?: number;
    regions?: RegionSchema[];
};
/** @returns {RegionSchema} */
declare function RegionSchema(): RegionSchema;
type RegionSchema = {
    name?: string;
    count?: number;
};
/** @returns {ServiceabilityDeleteErrorResponse} */
declare function ServiceabilityDeleteErrorResponse(): ServiceabilityDeleteErrorResponse;
type ServiceabilityDeleteErrorResponse = {
    error: ServiceabilityErrorResponse[];
};
/** @returns {ListViewResponseV2} */
declare function ListViewResponseV2(): ListViewResponseV2;
type ListViewResponseV2 = {
    items: ListViewItemsV2[];
    page: ZoneDataItem;
};
/** @returns {ListViewItemsV2} */
declare function ListViewItemsV2(): ListViewItemsV2;
type ListViewItemsV2 = {
    zone_id: string;
    name: string;
    type: string;
    geo_areas: GeoArea[];
    slug: string;
    stores: ListViewProductV2;
    is_active: boolean;
    product: ListViewProductV2;
    company_id: number;
    application_id: string;
    created_by: string;
    created_on: string;
    modified_by: string;
    modified_on: string;
    stage?: string;
    summary?: Summary;
};
/** @returns {Summary} */
declare function Summary(): Summary;
type Summary = {
    stores_count?: number;
    products_count?: number;
    regions?: RegionSchema[];
};
/** @returns {GeoArea} */
declare function GeoArea(): GeoArea;
type GeoArea = {
    id: string;
    type?: string;
    name: string;
};
/** @returns {ListViewProductV2} */
declare function ListViewProductV2(): ListViewProductV2;
type ListViewProductV2 = {
    type: string;
    values: string[];
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
    regions_count: number;
    company_id: number;
    channels: ListViewChannels[];
};
/** @returns {ListViewResponse} */
declare function ListViewResponse(): ListViewResponse;
type ListViewResponse = {
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
/** @returns {UpdateZoneDataV2} */
declare function UpdateZoneDataV2(): UpdateZoneDataV2;
type UpdateZoneDataV2 = {
    zone_id?: string;
    name?: string;
    type?: string;
    slug?: string;
    geo_areas?: string[];
    company_id?: number;
    application_id?: string;
    is_active?: boolean;
    product?: ProductSchema;
    stores?: StoresSchema;
};
/** @returns {ZoneUpdateSuccessResponse} */
declare function ZoneUpdateSuccessResponse(): ZoneUpdateSuccessResponse;
type ZoneUpdateSuccessResponse = {
    name: string;
    slug: string;
    company_id: number;
    type: string;
    application_id: string;
    is_active: boolean;
    geo_areas: string[];
    product: ProductSchema;
    stores: StoresSchema;
    zone_id: string;
    created_by: string;
    created_on: string;
    modified_by: string;
    modified_on: string;
};
/** @returns {ZoneDeleteSuccessResponse} */
declare function ZoneDeleteSuccessResponse(): ZoneDeleteSuccessResponse;
type ZoneDeleteSuccessResponse = {
    message: string;
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
    product: ProductSchema;
    stores: StoresSchema;
    summary?: SummarySchema;
    created_by?: string;
    created_on?: string;
    modified_by?: string;
    modified_on?: string;
    stage?: string;
    overlapping_file_url?: string;
    geo_areas: string[];
    type: string;
    overlapping_zone_names?: string[];
};
/** @returns {CreateZoneV2Data} */
declare function CreateZoneV2Data(): CreateZoneV2Data;
type CreateZoneV2Data = {
    is_active: boolean;
    slug: string;
    type: string;
    name: string;
    company_id: number;
    application_id: string;
    geo_areas: string[];
    stores: ZoneStores;
    product: ZoneProduct;
};
/** @returns {ZoneBulkExport} */
declare function ZoneBulkExport(): ZoneBulkExport;
type ZoneBulkExport = {
    batch_id?: string;
};
/** @returns {GetZoneBulkExport} */
declare function GetZoneBulkExport(): GetZoneBulkExport;
type GetZoneBulkExport = {
    items?: ZoneBulkItem[];
};
/** @returns {ZoneBulkItem} */
declare function ZoneBulkItem(): ZoneBulkItem;
type ZoneBulkItem = {
    batch_id?: string;
    file_path?: string;
    total?: number;
    failed?: number;
    error_file_url?: string;
    action?: string;
    updated_at?: string;
    updated_by?: string;
    type?: string;
    stage?: string;
};
/** @returns {CreateBulkZoneData} */
declare function CreateBulkZoneData(): CreateBulkZoneData;
type CreateBulkZoneData = {
    file_url?: string;
    product_type?: string;
};
/** @returns {ZoneStores} */
declare function ZoneStores(): ZoneStores;
type ZoneStores = {
    type: string;
    values: number[];
};
/** @returns {ZoneProduct} */
declare function ZoneProduct(): ZoneProduct;
type ZoneProduct = {
    type: string;
    values: number[];
};
/** @returns {ZoneResponseV2} */
declare function ZoneResponseV2(): ZoneResponseV2;
type ZoneResponseV2 = {
    name: string;
    slug: string;
    company_id: number;
    type: string;
    application_id: string;
    is_active: boolean;
    geo_areas: string[];
    stores: ListViewProductV2;
    product: ListViewProductV2;
    created_by: string;
    created_on: string;
    modified_by: string;
    modified_on: string;
    stage: string;
    zone_id: string;
};
/** @returns {CreateBulkZoneResponse} */
declare function CreateBulkZoneResponse(): CreateBulkZoneResponse;
type CreateBulkZoneResponse = {
    zone_id?: string;
};
/** @returns {GetBulkZoneHistory} */
declare function GetBulkZoneHistory(): GetBulkZoneHistory;
type GetBulkZoneHistory = {
    items?: BulkZoneItems[];
    page?: PageV2;
};
/** @returns {BulkZoneItems} */
declare function BulkZoneItems(): BulkZoneItems;
type BulkZoneItems = {
    batch_id?: string;
    entity_type?: string;
    error_file_url?: string;
    file_path?: string;
    file_name?: string;
    updated_at?: string;
    updated_by?: string;
    stage?: string;
};
/** @returns {PageV2} */
declare function PageV2(): PageV2;
type PageV2 = {
    type?: string;
    size?: number;
    current?: number;
    has_next?: boolean;
    item_total?: number;
};
/** @returns {BulkCreateZoneExport} */
declare function BulkCreateZoneExport(): BulkCreateZoneExport;
type BulkCreateZoneExport = {
    placeholder?: string;
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
/** @returns {ServiceabilityZoneErrorResponse} */
declare function ServiceabilityZoneErrorResponse(): ServiceabilityZoneErrorResponse;
type ServiceabilityZoneErrorResponse = {
    error: ServiceabilityErrorResponse[];
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
    batch_id?: string;
    status_code?: number;
    error?: ErrorResponse[];
    success?: boolean;
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
    status_code?: number;
    success?: boolean;
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
/** @returns {PincodeCodDataSchema} */
declare function PincodeCodDataSchema(): PincodeCodDataSchema;
type PincodeCodDataSchema = {
    pincode?: string;
    active?: boolean;
};
/** @returns {PincodeCodStatusListingResponse} */
declare function PincodeCodStatusListingResponse(): PincodeCodStatusListingResponse;
type PincodeCodStatusListingResponse = {
    country: string;
    data: PincodeCodDataSchema[];
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
/** @returns {BulkGeoAreaRequestBody} */
declare function BulkGeoAreaRequestBody(): BulkGeoAreaRequestBody;
type BulkGeoAreaRequestBody = {
    file_url?: string;
    name?: string;
    slug?: string;
    type?: string;
};
/** @returns {BulkGeoAreaResponse} */
declare function BulkGeoAreaResponse(): BulkGeoAreaResponse;
type BulkGeoAreaResponse = {
    geoarea_id?: string;
};
/** @returns {BulkGeoAreaGetResponse} */
declare function BulkGeoAreaGetResponse(): BulkGeoAreaGetResponse;
type BulkGeoAreaGetResponse = {
    batch_id?: string;
    file_path?: string;
    total?: number;
    failed?: number;
    error_file_url?: string;
    action?: string;
    updated_at?: string;
    updated_by?: string;
    type?: string;
    stage?: string;
    file_url?: string;
};
/** @returns {GeoAreaRequestBody} */
declare function GeoAreaRequestBody(): GeoAreaRequestBody;
type GeoAreaRequestBody = {
    is_active: boolean;
    name: string;
    slug: string;
    type: string;
    areas: Area[];
    region_type: string;
};
/** @returns {GeoAreaErrorResponse} */
declare function GeoAreaErrorResponse(): GeoAreaErrorResponse;
type GeoAreaErrorResponse = {
    error?: GeoAreaResponseDetail[];
};
/** @returns {ConflictingErrorResponse} */
declare function ConflictingErrorResponse(): ConflictingErrorResponse;
type ConflictingErrorResponse = {
    detail: ErrorResponseDetail;
};
/** @returns {ErrorResponseItem} */
declare function ErrorResponseItem(): ErrorResponseItem;
type ErrorResponseItem = {
    message: string;
    error_name: string;
    error_code: number;
    value: string;
    conflicting_areas: ConflictingArea[];
};
/** @returns {ConflictingArea} */
declare function ConflictingArea(): ConflictingArea;
type ConflictingArea = {
    geoarea_id: string;
    name: string;
};
/** @returns {GeoAreaResponseDetail} */
declare function GeoAreaResponseDetail(): GeoAreaResponseDetail;
type GeoAreaResponseDetail = {
    type?: string;
    value?: string;
    message?: string;
};
/** @returns {ErrorResponseDetail} */
declare function ErrorResponseDetail(): ErrorResponseDetail;
type ErrorResponseDetail = {
    items: ErrorResponseItem[];
};
/** @returns {GeoAreaResponseBody} */
declare function GeoAreaResponseBody(): GeoAreaResponseBody;
type GeoAreaResponseBody = {
    name: string;
    slug: string;
    is_active: boolean;
    areas: Area[];
    region_type: string;
    type: string;
    created_on: string;
    modified_on: string;
    created_by: string;
    modified_by: string;
    geoarea_id: string;
};
/** @returns {GeoAreaPutResponseBody} */
declare function GeoAreaPutResponseBody(): GeoAreaPutResponseBody;
type GeoAreaPutResponseBody = {
    name?: string;
    geoarea_id?: string;
    slug?: string;
    is_active?: boolean;
    areas?: Area[];
    region_type?: string;
    type?: string;
    created_on?: string;
    modified_on?: string;
    created_by?: string;
    modified_by?: string;
};
/** @returns {Area} */
declare function Area(): Area;
type Area = {
    regions?: string[];
    country?: string;
};
/** @returns {Region} */
declare function Region(): Region;
type Region = {
    uid: string;
    display_name: string;
    sub_type: string;
    parent_id: string[];
};
/** @returns {RegionV2} */
declare function RegionV2(): RegionV2;
type RegionV2 = {
    uid?: string;
    display_name?: string;
    sub_type?: string;
    parent_id?: string[];
};
/** @returns {Country} */
declare function Country(): Country;
type Country = {
    uid: string;
    display_name: string;
};
/** @returns {AreaExpanded} */
declare function AreaExpanded(): AreaExpanded;
type AreaExpanded = {
    country: Country;
    regions: Region[];
};
/** @returns {AreaExpandedV2} */
declare function AreaExpandedV2(): AreaExpandedV2;
type AreaExpandedV2 = {
    country: Country;
    regions: RegionV2[];
};
/** @returns {GeoAreaResponse} */
declare function GeoAreaResponse(): GeoAreaResponse;
type GeoAreaResponse = {
    name: string;
    application_id?: string;
    company_id?: number;
    geoarea_id: string;
    is_active: boolean;
    type: string;
    region_type: string;
    areas: AreaExpanded[];
    created_on?: string;
    modified_on?: string;
    created_by?: string;
    modified_by?: string;
};
/** @returns {GeoAreaGetResponseBody} */
declare function GeoAreaGetResponseBody(): GeoAreaGetResponseBody;
type GeoAreaGetResponseBody = {
    items?: GeoAreaItemResponse[];
    page?: Page2;
};
/** @returns {GeoAreaItemResponse} */
declare function GeoAreaItemResponse(): GeoAreaItemResponse;
type GeoAreaItemResponse = {
    geoarea_id: string;
    name: string;
    slug: string;
    is_active: boolean;
    region_type: string;
    type?: string;
    areas?: AreaExpandedV2[];
    created_on: string;
    modified_on: string;
    created_by: string;
    modified_by: string;
};
/** @returns {ErrorResponseV2} */
declare function ErrorResponseV2(): ErrorResponseV2;
type ErrorResponseV2 = {
    success: boolean;
    error: string;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    value: string;
    message: string;
    type: string;
    error?: string;
};
/** @returns {PackageMaterialNotFound} */
declare function PackageMaterialNotFound(): PackageMaterialNotFound;
type PackageMaterialNotFound = {
    status_code?: number;
    success?: boolean;
};
/** @returns {PackageMaterialsErrorResponse} */
declare function PackageMaterialsErrorResponse(): PackageMaterialsErrorResponse;
type PackageMaterialsErrorResponse = {
    value?: string;
    message?: string;
    type?: string;
    error?: string;
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
/** @returns {Page2} */
declare function Page2(): Page2;
type Page2 = {
    size: number;
    item_total: number;
    type: string;
    current: number;
    has_next: boolean;
};
/** @returns {CourierPartnerList} */
declare function CourierPartnerList(): CourierPartnerList;
type CourierPartnerList = {
    extension_id?: string;
    account_id?: string;
    name?: string;
    is_self_ship?: boolean;
    scheme_rules?: any;
    stage?: string;
};
/** @returns {LocationRuleValues} */
declare function LocationRuleValues(): LocationRuleValues;
type LocationRuleValues = {
    uid: string;
    sub_type?: string;
    display_name?: string;
    parent_uid?: string;
    parent_id?: string[];
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
    order_place_date?: ArithmeticOperationsV2;
    store_ids?: IntComparisonOperations;
    store_type?: StringComparisonOperations;
    store_tags?: StringComparisonOperations;
    shipment_weight?: ArithmeticOperations;
    shipment_cost?: ArithmeticOperations;
    shipment_volumetric_weight?: ArithmeticOperations;
    company_ids?: IntComparisonOperations;
    promise_types?: StringComparisonOperations;
};
/** @returns {CourierPartnerRuleResponseConditions} */
declare function CourierPartnerRuleResponseConditions(): CourierPartnerRuleResponseConditions;
type CourierPartnerRuleResponseConditions = {
    forward?: LocationRule;
    reverse?: LocationRule;
    payment_mode?: StringComparisonOperations;
    category_ids?: IntComparisonOperations;
    product_ids?: IntComparisonOperations;
    product_tags?: StringComparisonOperations;
    zone_ids?: StringComparisonOperations;
    department_ids?: IntComparisonOperations;
    brand_ids?: IntComparisonOperations;
    order_place_date?: ArithmeticOperationsV2;
    store_ids?: IntComparisonOperations;
    store_type?: StringComparisonOperations;
    store_tags?: StringComparisonOperations;
    shipment_weight?: ArithmeticOperations;
    shipment_cost?: ArithmeticOperations;
    shipment_volumetric_weight?: ArithmeticOperations;
    company_ids?: IntComparisonOperations;
    promise_types?: StringComparisonOperations;
};
/** @returns {CourierPartnerRule} */
declare function CourierPartnerRule(): CourierPartnerRule;
type CourierPartnerRule = {
    id?: string;
    application_id?: string;
    company_id?: number;
    is_active: boolean;
    cp_list?: CourierPartnerList[];
    name: string;
    conditions: CourierPartnerRuleConditions;
    manual_priority?: string[];
    sort: string[];
    type: string;
};
/** @returns {CourierPartnerRuleResponse} */
declare function CourierPartnerRuleResponse(): CourierPartnerRuleResponse;
type CourierPartnerRuleResponse = {
    is_active: boolean;
    cp_list?: CourierPartnerList[];
    name: string;
    conditions: CourierPartnerRuleResponseConditions;
    manual_priority?: string[];
    sort: string[];
    type: string;
};
/** @returns {CourierPartnerRuleResponseSchema} */
declare function CourierPartnerRuleResponseSchema(): CourierPartnerRuleResponseSchema;
type CourierPartnerRuleResponseSchema = {
    id?: string;
    is_active: boolean;
    cp_list?: CourierPartnerList[];
    name: string;
    conditions: CourierPartnerRuleResponseConditions;
    manual_priority?: string[];
    sort: string[];
    type: string;
    application_id?: string;
    company_id?: number;
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
    items: CourierPartnerRuleResponseSchema[];
    page: Page;
};
/** @returns {CompanyConfig} */
declare function CompanyConfig(): CompanyConfig;
type CompanyConfig = {
    company_id?: number;
    sort?: string[];
    logistics_as_actual?: string;
};
/** @returns {StorePromiseAttributeConfig} */
declare function StorePromiseAttributeConfig(): StorePromiseAttributeConfig;
type StorePromiseAttributeConfig = {
    is_operational_timing_enabled?: boolean;
    is_order_acceptance_timing_enabled?: boolean;
    is_average_processing_time?: boolean;
    is_holiday_enabled?: boolean;
};
/** @returns {DeliveryServiceAttributeConfig} */
declare function DeliveryServiceAttributeConfig(): DeliveryServiceAttributeConfig;
type DeliveryServiceAttributeConfig = {
    is_pickup_cutoff_time_enabled?: boolean;
    is_service_tat_enabled?: boolean;
    is_holiday_enabled?: boolean;
};
/** @returns {BufferField} */
declare function BufferField(): BufferField;
type BufferField = {
    unit?: string;
    value?: number;
    enabled?: boolean;
};
/** @returns {PromiseConfig} */
declare function PromiseConfig(): PromiseConfig;
type PromiseConfig = {
    store_attributes?: StorePromiseAttributeConfig;
    delivery_service_attributes?: DeliveryServiceAttributeConfig;
    buffer_field?: BufferField;
};
/** @returns {ApplicationConfig} */
declare function ApplicationConfig(): ApplicationConfig;
type ApplicationConfig = {
    rule_ids?: string[];
    sort?: string[];
    application_id?: string;
    company_id?: number;
    manual_priority?: string[];
    zones?: ZoneConfig;
    buybox_rule_config?: BuyboxRuleConfig;
    promise_types?: PromiseType[];
    promise_config?: PromiseConfig;
};
/** @returns {ApplicationConfigPatchRequest} */
declare function ApplicationConfigPatchRequest(): ApplicationConfigPatchRequest;
type ApplicationConfigPatchRequest = {
    courier_partner_config?: CourierPartnerConfig;
    buybox_rule_config?: BuyboxRuleConfig;
    promise_config?: PromiseConfig;
};
/** @returns {ApplicationConfigPatchResponse} */
declare function ApplicationConfigPatchResponse(): ApplicationConfigPatchResponse;
type ApplicationConfigPatchResponse = {
    success?: boolean;
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
    manual_priority?: string[];
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
    order_place_date?: ArithmeticOperationsV2;
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
    manual_priority?: string[];
    conditions?: StoreRuleConditionSchema;
    is_active?: boolean;
};
/** @returns {StorePrioritySchema} */
declare function StorePrioritySchema(): StorePrioritySchema;
type StorePrioritySchema = {
    id?: number;
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
    manual_priority?: string[];
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
    manual_priority?: string[];
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
    manual_priority?: string[];
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
    name?: string;
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
    company_id?: number;
    extension_id?: string;
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
    weight: number;
    auto_calculate?: boolean;
    max_weight?: number;
    package_vol_weight?: number;
    error_rate: number;
    channels: Channel[];
    package_type: string;
    size: string;
    track_inventory?: boolean;
    rules?: PackageMaterialRule[];
    store_ids: number[];
    mp_stores?: PackageMpStores[];
    media?: string[];
    status: string;
};
/** @returns {PackageMaterialResponse} */
declare function PackageMaterialResponse(): PackageMaterialResponse;
type PackageMaterialResponse = {
    company_id?: number;
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
    is_active?: boolean;
    status: string;
    max_weight?: number;
    package_vol_weight?: number;
    auto_calculate?: boolean;
    mp_stores?: PackageMpStores[];
};
/** @returns {PackageMaterialRule} */
declare function PackageMaterialRule(): PackageMaterialRule;
type PackageMaterialRule = {
    rule_id?: string;
    quantity?: PackageMaterialRuleQuantity;
    weight?: number;
};
/** @returns {PackageMpStores} */
declare function PackageMpStores(): PackageMpStores;
type PackageMpStores = {
    app_name?: string;
    app_id?: string;
    store_ids?: number[];
    store_data?: any;
};
/** @returns {PackageRuleRequest} */
declare function PackageRuleRequest(): PackageRuleRequest;
type PackageRuleRequest = {
    name: string;
    company_id: string;
    category_id?: PackageRuleCategory;
    product_id?: PackageRuleProduct;
    product_tag?: PackageRuleProductTag;
    department_id?: PackageRuleDepartmentId;
    product_attributes?: PackageRuleProductAttributes;
    type: string;
    is_active?: boolean;
};
/** @returns {PackageRule} */
declare function PackageRule(): PackageRule;
type PackageRule = {
    name: string;
    id?: string;
    item_id?: number;
    width?: number;
    height?: number;
    length?: number;
    rules?: PackageMaterialRule[];
    store_ids?: number[];
    weight?: number;
    error_rate?: number;
    package_type?: string;
    size?: string;
    media?: string[];
    channels?: Channel[];
    track_inventory?: boolean;
    status?: string;
    max_weight?: number;
    package_vol_weight?: number;
    auto_calculate?: boolean;
    mp_stores?: PackageMpStores[];
};
/** @returns {PackageRuleResponse} */
declare function PackageRuleResponse(): PackageRuleResponse;
type PackageRuleResponse = {
    is_active?: boolean;
    company_id: number;
    product_tag?: PackageRuleProductTag;
    department_id?: PackageRuleDepartmentId;
    product_attributes?: PackageRuleProductAttributes;
    name: string;
    category_id?: PackageRuleCategory;
    product_id?: PackageRuleProduct;
    type: string;
    id?: string;
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
    items?: PackageRuleResponse[];
    page?: Page;
};
/** @returns {PackageMaterialList} */
declare function PackageMaterialList(): PackageMaterialList;
type PackageMaterialList = {
    items?: any;
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
/** @returns {PackageRuleProductAttributes} */
declare function PackageRuleProductAttributes(): PackageRuleProductAttributes;
type PackageRuleProductAttributes = {
    includes?: string[];
};
/** @returns {PackageRuleDepartmentId} */
declare function PackageRuleDepartmentId(): PackageRuleDepartmentId;
type PackageRuleDepartmentId = {
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
/** @returns {CompanySelfShip} */
declare function CompanySelfShip(): CompanySelfShip;
type CompanySelfShip = {
    is_active: boolean;
    tat: number;
    unit: string;
};
/** @returns {ArithmeticOperationsV2} */
declare function ArithmeticOperationsV2(): ArithmeticOperationsV2;
type ArithmeticOperationsV2 = {
    lt?: string;
    gt?: string;
    lte?: string;
    gte?: string;
};
/** @returns {CompanyConfigurationShema} */
declare function CompanyConfigurationShema(): CompanyConfigurationShema;
type CompanyConfigurationShema = {
    sort?: string[];
};
