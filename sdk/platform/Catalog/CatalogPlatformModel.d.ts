export = CatalogPlatformModel;
/**
 * @typedef StoreTagsResponseSchema
 * @property {string[]} [tags]
 * @property {boolean} [success]
 */
/**
 * @typedef DiscountMeta
 * @property {string} [start]
 * @property {string} [end]
 * @property {boolean} [timer]
 */
/**
 * @typedef ProductMinMaxPrice
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef ProductPrice
 * @property {ProductMinMaxPrice} [selling]
 * @property {ProductMinMaxPrice} [effective]
 * @property {ProductMinMaxPrice} [marked]
 * @property {string} [currency]
 */
/**
 * @typedef ProductPricesPage
 * @property {string} [type]
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 */
/**
 * @typedef ProductPriceItem
 * @property {DiscountMeta} [discount_meta]
 * @property {string} [product_name]
 * @property {number} [item_id]
 * @property {string} [factory_type_id]
 * @property {ProductPrice} [price]
 * @property {number} [store_id]
 * @property {boolean} [is_sellable]
 * @property {number} [seller_id]
 * @property {string[]} [delivery_zone_ids]
 * @property {string[]} [sizes]
 */
/**
 * @typedef ProductPrices
 * @property {ProductPriceItem[]} [data]
 * @property {ProductPricesPage} [page]
 */
/**
 * @typedef ProductFiltersKeysOnly
 * @property {ProductFiltersKey} key
 */
/**
 * @typedef GetQueryFiltersKeysResponse
 * @property {ProductFiltersKeysOnly[]} [filters]
 * @property {Object} [operators]
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef GetQueryFiltersValuesResponse
 * @property {ProductFiltersValue[]} values
 * @property {Page} page
 */
/**
 * @typedef GTINSchema
 * @property {string} gtin_type
 * @property {string} gtin_value
 * @property {boolean} [primary]
 */
/**
 * @typedef SetSizeSchema
 * @property {string} size
 * @property {number} pieces
 */
/**
 * @typedef SizeDistributionSchema
 * @property {SetSizeSchema[]} [size]
 */
/**
 * @typedef InventorySetSchema
 * @property {number} [quantity]
 * @property {SizeDistributionSchema} [size_distribution]
 * @property {string} [name]
 */
/**
 * @typedef InvSizeSchema
 * @property {number} [item_height]
 * @property {number} [item_width]
 * @property {number} [item_length]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [item_weight]
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} currency
 * @property {number} quantity
 * @property {string} store_code
 * @property {GTINSchema[]} identifiers
 * @property {string} size
 * @property {number} [price]
 * @property {number} price_effective
 * @property {number} [price_transfer]
 * @property {string} [expiration_date]
 * @property {boolean} [is_set]
 * @property {InventorySetSchema} [set]
 */
/**
 * @typedef InventoryRequestSchema
 * @property {number} company_id
 * @property {InvSizeSchema[]} sizes
 * @property {ItemQuerySchema} item
 */
/**
 * @typedef ItemQuerySchema
 * @property {number} [uid]
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 */
/**
 * @typedef SuccessResponseSchema
 * @property {boolean} [success]
 */
/**
 * @typedef CompanyDRIListResponseSchema
 * @property {CompanyDRIResponseSchema[]} [items] - List of Company DRIs.
 * @property {Page} [page]
 */
/**
 * @typedef CompanyDRIResponseSchema
 * @property {string[]} [tags] - List of tags associated with the Company DRI.
 * @property {string[]} [responsibilities] - List of responsibilities of the Company DRI.
 * @property {string[]} [responsibilities_display_name] - List of display names
 *   for responsibilities.
 * @property {number} [uid] - Unique identifier for the Company DRI.
 * @property {number} [company_id] - ID of the associated company.
 * @property {boolean} [status] - Status of the Company DRI (active or inactive).
 * @property {Object} [contact] - Contact information for the Company DRI.
 * @property {Object} [contact_details] - Detailed contact information for the
 *   Company DRI.
 */
/**
 * @typedef SearchResponseSchema
 * @property {string} [_id]
 * @property {MerchandisingQuery} [query]
 * @property {boolean} [is_active]
 * @property {string} [merchandising_rule_id]
 * @property {string} [rule_name]
 * @property {string} [application_id]
 * @property {string} [status]
 * @property {string} [zone_id]
 * @property {Object} [_schedule]
 */
/**
 * @typedef MerchandisingQuery
 * @property {string} [query_condition]
 * @property {MerchandisingSearchQuery} [query]
 * @property {MerchandisingFilter[]} [filter]
 */
/**
 * @typedef MerchandisingSearchQuery
 * @property {string} [condition]
 * @property {string} [search_query]
 * @property {string} [synonyms]
 */
/**
 * @typedef MerchandisingFilter
 * @property {string} [attribute]
 * @property {string} [value]
 */
/**
 * @typedef MerchandisingRuleQuery
 * @property {string} condition
 * @property {string} search_query
 * @property {boolean} synonyms
 */
/**
 * @typedef MerchandisingRulesList
 * @property {MerchDataItem[]} [data]
 * @property {Page} [page]
 */
/**
 * @typedef MerchDataItem
 * @property {MerchSearchQuery} [query]
 * @property {string[]} [action]
 * @property {boolean} [is_active]
 * @property {string} [merchandising_rule_id]
 * @property {string} [rule_name]
 * @property {string} [status]
 * @property {string} [zone_id]
 * @property {string} [application_id]
 */
/**
 * @typedef MerchSearchQuery
 * @property {string} [query_condition]
 * @property {MerchQueryCondition} [query]
 * @property {MerchFilter[]} [filter]
 */
/**
 * @typedef MerchQueryCondition
 * @property {string} [condition]
 * @property {string} [search_query]
 * @property {string} [synonyms]
 */
/**
 * @typedef MerchFilter
 * @property {string} [attribute]
 * @property {string} [value]
 */
/**
 * @typedef SuccessResponseMerchandising
 * @property {string} [message]
 */
/**
 * @typedef MerchandiseQueryResponse
 * @property {string} [message]
 * @property {string} [merchandising_rule_id]
 */
/**
 * @typedef Filter
 * @property {string} [attribute]
 * @property {string} [value]
 */
/**
 * @typedef MerchandisingRuleQueryPart
 * @property {Filter[]} [filter]
 * @property {string} [query_condition]
 * @property {Object} [query]
 */
/**
 * @typedef MerchandisingRuleQueryPost
 * @property {MerchandisingRuleQueryPart} [query]
 * @property {string} [zone_id]
 */
/**
 * @typedef MerchandisingRuleSave
 * @property {string} rule_name
 * @property {CollectionSchedule} _schedule
 * @property {boolean} is_active
 */
/**
 * @typedef PinItem
 * @property {string} name
 * @property {number} uid
 * @property {number} position
 */
/**
 * @typedef PinItemRequest
 * @property {string} action
 * @property {string} item_id
 * @property {number} position
 */
/**
 * @typedef PinRequest
 * @property {PinItemRequest[]} [action_value]
 */
/**
 * @typedef PinResponse
 * @property {PinItem[]} [data]
 */
/**
 * @typedef HideAttribute
 * @property {string} name
 * @property {number} uid
 */
/**
 * @typedef HideAttributeRequest
 * @property {string} [action]
 * @property {number} [item_id]
 */
/**
 * @typedef HideResponse
 * @property {HideAttribute[]} [data]
 */
/**
 * @typedef HideRequest
 * @property {HideAttributeRequest[]} [action_value]
 */
/**
 * @typedef PostBoostAttribute
 * @property {string} attribute
 * @property {string} value
 * @property {number} strength
 * @property {string} action
 */
/**
 * @typedef BoostAttribute
 * @property {string} attribute
 * @property {string} value
 * @property {number} strength
 */
/**
 * @typedef GetMerchandisingRuleBoostAction
 * @property {BoostAttribute[]} [data]
 */
/**
 * @typedef PostMerchandisingRuleBoostAction
 * @property {PostBoostAttribute[]} [action_value]
 */
/**
 * @typedef GetMerchandisingRuleBuryAction
 * @property {BoostAttribute[]} [data]
 */
/**
 * @typedef Action
 * @property {string} [type] - Type of action to be taken e.g, page.
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 */
/**
 * @typedef AllSizes
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {string} item_dimensions_unit_of_measure
 * @property {number} item_height
 * @property {number} item_length
 * @property {number} item_weight
 * @property {string} item_weight_unit_of_measure
 * @property {number} item_width
 * @property {string} size
 */
/**
 * @typedef AllowSingleRequest
 * @property {boolean} allow_single
 */
/**
 * @typedef AppCatalogConfiguration
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {string} config_type
 * @property {Object} [created_by] - The user who created the configuration.
 * @property {string} [created_on]
 * @property {string} [id]
 * @property {ConfigurationListing} [listing]
 * @property {Object} [modified_by] - The user who modified the configuration.
 * @property {string} [modified_on]
 * @property {ConfigurationProduct} [product]
 * @property {string} [type]
 */
/**
 * @typedef AppCategoryReturnConfig
 * @property {number} category_id - Unique identifier for L3 category
 * @property {Object} return_config - Return configuration details
 */
/**
 * @typedef AppCategoryReturnConfigResponse
 * @property {string} [app_id] - Channel identifier
 * @property {number} [category_id] - Unique identifer of L3 category
 * @property {string} [logo]
 * @property {string} [name] - Name of L3 category
 * @property {ProductReturnConfigBaseSerializer} [return_config]
 */
/**
 * @typedef AppConfiguration
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {string} config_type
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {ConfigurationListing} [listing]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {ConfigurationProduct} [product]
 * @property {string} [type]
 */
/**
 * @typedef AppConfigurationCreateDetail
 * @property {string} [app_id]
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {string} [logo]
 * @property {string} [name]
 * @property {number} priority
 * @property {string} slug
 * @property {string[]} [template_slugs]
 */
/**
 * @typedef AppConfigurationDetail
 * @property {string} [id]
 * @property {string} [app_id]
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {string} [logo]
 * @property {string} [name]
 * @property {number} priority
 * @property {string} slug
 * @property {string[]} [template_slugs]
 */
/**
 * @typedef AppConfigurationsResponse
 * @property {string} [id]
 * @property {string} [app_id]
 * @property {string} [default_key]
 * @property {boolean} [is_active]
 * @property {boolean} [is_default]
 * @property {string} [key]
 * @property {string} [logo]
 * @property {string} [name]
 * @property {number} [priority]
 */
/**
 * @typedef AppConfigurationsSort
 * @property {string} app_id
 * @property {string} [default_key]
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {string} key
 * @property {string} [logo]
 * @property {string} [name]
 * @property {number} priority
 */
/**
 * @typedef ValueConfigType
 * @property {Object[]} [bucket_points]
 * @property {Object} [map]
 * @property {string} [sort]
 * @property {string} [condition]
 * @property {string} [value]
 */
/**
 * @typedef AppConfigurationsFilter
 * @property {string} app_id
 * @property {boolean} [allow_single]
 * @property {string} [attribute_name]
 * @property {ValueConfigType} [value_config]
 * @property {string} [type]
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {string} key
 * @property {string} [logo]
 * @property {string} [name]
 * @property {number} priority
 */
/**
 * @typedef AppConfigurationsFilterResponse
 * @property {string} [id]
 * @property {string} [app_id]
 * @property {boolean} [allow_single]
 * @property {string} [attribute_name]
 * @property {ValueConfigType} [value_config]
 * @property {string} [type]
 * @property {boolean} [is_active]
 * @property {boolean} [is_default]
 * @property {string} [key]
 * @property {string} [logo]
 * @property {string} [name]
 * @property {number} [priority]
 */
/**
 * @typedef ApplicationBrandJson
 * @property {Object} _custom_json
 */
/**
 * @typedef ApplicationCategoryJson
 * @property {Object} _custom_json
 */
/**
 * @typedef ApplicationDepartment
 * @property {Object} [_custom_json]
 * @property {string} app_id
 * @property {boolean} [is_active]
 * @property {string} [logo]
 * @property {string} [name]
 * @property {number} uid
 */
/**
 * @typedef ApplicationDepartmentJson
 * @property {Object} _custom_json
 */
/**
 * @typedef ApplicationDepartmentListingResponse
 * @property {ApplicationDepartment[]} [items]
 * @property {Page} page
 */
/**
 * @typedef ApplicationItemMOQ
 * @property {number} [increment_unit] - The minimum quantity increment in which
 *   the item can be purchased.
 * @property {number} [maximum] - The maximum quantity allowed for purchase.
 * @property {number} [minimum] - The minimum quantity required for purchase.
 */
/**
 * @typedef ApplicationItemMeta
 * @property {Object} [_custom_json] - Custom JSON data for the item
 * @property {MetaFields[]} [_custom_meta] - Custom meta fields for the item
 * @property {Object} [alt_text] - Alternative text for the item's images
 * @property {boolean} [is_cod] - Whether the item is available for Cash on
 *   Delivery (COD) or not
 * @property {boolean} [is_gift] - Whether the item is a gift or not
 * @property {Object} [moq] - Minimum Order Quantity information for the item
 * @property {Object} [seo] - Search Engine Optimization information for the item
 * @property {Object} [size_promotion_threshold] - Size level promotion
 *   limitation information for item
 */
/**
 * @typedef ApplicationItemSeoSitemap
 * @property {number} priority - The SEO priority of the item
 * @property {string} frequency - The SEO frequency of the item
 */
/**
 * @typedef ApplicationItemSEO
 * @property {string} [description] - The SEO description of the item
 * @property {string} [title] - The SEO title of the item
 * @property {ApplicationItemSeoSitemap} [sitemap]
 * @property {ApplicationItemSeoBreadcrumbs[]} [breadcrumbs]
 * @property {ApplicationItemSeoMetaTags[]} [meta_tags]
 * @property {string} [canonical_url]
 */
/**
 * @typedef ApplicationProductListingResponse
 * @property {ProductFilters[]} [filters]
 * @property {ProductListingDetail[]} [items]
 * @property {OperatorsResponse} [operators]
 * @property {Page} page
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef OperatorsResponse
 * @property {string} [btw]
 * @property {string} [lte]
 * @property {string} [gte]
 * @property {string} [gt]
 * @property {string} [lt]
 * @property {string} [nin]
 */
/**
 * @typedef ApplicationStoreJson
 * @property {Object} _custom_json
 */
/**
 * @typedef AppReturnConfigResponse
 * @property {Object} [created_by]
 * @property {Object} [modified_by]
 * @property {string} [app_id] - Channel identifier
 * @property {number} [category_count] - Count of L3 category return config set
 *   for application
 * @property {number} [company_id] - Unique identifer of company
 * @property {string} [modified_on] - Modification date
 * @property {string} [return_config_level] - Configuration level of return
 *   window category|product|no-return
 */
/**
 * @typedef ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */
/**
 * @typedef ArticleAssignment1
 * @property {string} [level]
 * @property {string} [strategy]
 */
/**
 * @typedef ArticleQuery
 * @property {number[]} [ignored_stores]
 * @property {number} item_id
 * @property {string} size
 */
/**
 * @typedef ArticleStoreResponse
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [store_type]
 * @property {number} [uid]
 */
/**
 * @typedef AssignStore
 * @property {string} app_id
 * @property {AssignStoreArticle[]} articles
 * @property {string} [channel_identifier]
 * @property {string} [channel_type]
 * @property {number} [company_id]
 * @property {string} pincode
 * @property {number[]} [store_ids]
 */
/**
 * @typedef AssignStoreArticle
 * @property {ArticleAssignment} [article_assignment]
 * @property {string} [group_id]
 * @property {Object} [meta]
 * @property {number} [quantity]
 * @property {ArticleQuery} [query]
 */
/**
 * @typedef AttributeDetailsGroup
 * @property {string} display_type
 * @property {boolean} is_active
 * @property {string} [key]
 * @property {string} [logo]
 * @property {string} name
 * @property {number} priority
 * @property {string} [slug]
 * @property {string} [unit]
 */
/**
 * @typedef AttributeMaster
 * @property {string[]} [allowed_values]
 * @property {string} [format]
 * @property {boolean} [mandatory]
 * @property {boolean} [multi]
 * @property {AttributeSchemaRange} [range]
 * @property {string} type
 */
/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */
/**
 * @typedef AttributeMasterFilter
 * @property {string[]} [depends_on]
 * @property {boolean} indexing
 * @property {number} [priority]
 */
/**
 * @typedef AttributeMasterMandatoryDetails
 * @property {string[]} [l3_keys]
 */
/**
 * @typedef AttributeMasterMeta
 * @property {boolean} [enriched]
 * @property {AttributeMasterMandatoryDetails} mandatory_details
 */
/**
 * @typedef AttributeMasterSerializer
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string[]} departments
 * @property {string} [description]
 * @property {AttributeMasterDetails} details
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterFilter} filters
 * @property {boolean} [is_nested]
 * @property {string} [logo]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [raw_key]
 * @property {AttributeMaster} schema
 * @property {string} slug
 * @property {string} [suggestion]
 * @property {Object} [synonyms]
 * @property {string[]} [tags]
 * @property {string} [unit]
 * @property {boolean} [variant]
 */
/**
 * @typedef AttributeSchemaRange
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef AutoCompleteMedia
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef AutocompleteAction
 * @property {AutocompletePageAction} [page]
 * @property {string} [type]
 */
/**
 * @typedef AutocompletePageAction
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef AutocompleteResult
 * @property {Object} [_custom_json]
 * @property {AutocompleteAction} [action]
 * @property {string} [display]
 * @property {AutoCompleteMedia} [logo]
 */
/**
 * @typedef BannerImage
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef BaseAppCategoryReturnConfig
 * @property {string} app_id - Channel identifier
 * @property {number} company_id - Unique identifer of company
 * @property {AppCategoryReturnConfig[]} data - Category level return config details
 */
/**
 * @typedef BaseAppCategoryReturnConfigResponse
 * @property {AppCategoryReturnConfigResponse[]} [data]
 * @property {PageResponse1} [page]
 */
/**
 * @typedef Brand
 * @property {Logo} [logo]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef BrandLogo
 * @property {string} [url]
 * @property {string} [type]
 */
/**
 * @typedef BrandItem
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {number[]} [departments]
 * @property {string} [discount]
 * @property {BrandLogo} [logo]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef ApplicationCategoryListingSchema
 * @property {ApplicationCategoryListingItemSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ApplicationCategoryListingItemSchema
 * @property {string} [name] - Name of the category.
 * @property {string} [logo] - URL of the category's logo.
 * @property {number[]} [departments] - List of department IDs.
 * @property {string} [attr_name] - Attribute name of the category.
 * @property {string} [landscape_url] - URL of the landscape banner.
 * @property {string} [portrait_url] - URL of the portrait banner.
 * @property {Object} [_custom_json] - Custom JSON object for additional data.
 * @property {number} [priority] - Priority of the category.
 * @property {CreatedBy} [created_by]
 * @property {string} [created_on] - Timestamp when the category was created.
 * @property {ModifiedBy} [modified_by]
 * @property {string} [modified_on] - Timestamp when the category was last modified.
 * @property {string} [app_id] - Application ID associated with the category.
 * @property {boolean} [is_active] - Indicates whether the category is active.
 * @property {number} [uid] - Unique identifier of the category.
 */
/**
 * @typedef ApplicationBrandListingSchema
 * @property {ApplicationBrandListingItemSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ApplicationBrandListingItemSchema
 * @property {Object} [_custom_json] - Custom JSON object for additional data.
 * @property {Object} [_locale_language] - Custom object for locale-specific
 *   language data.
 * @property {string} [brand_banner_portrait_url] - URL of the brand's portrait banner.
 * @property {string} [brand_banner_url] - URL of the brand's landscape banner.
 * @property {string} [brand_logo_url] - URL of the brand's logo.
 * @property {string} [description] - Description of the brand.
 * @property {string} [name] - Name of the brand.
 * @property {string} [slug_key] - Unique slug key for the brand.
 * @property {number} [priority] - Priority of the brand in listing.
 * @property {number} [uid] - Unique identifier of the brand.
 * @property {string} [created_on] - Timestamp when the category was created.
 * @property {string} [last_updated] - Timestamp when the category was created.
 * @property {boolean} [is_active] - Indicates if the brand is active.
 * @property {number[]} [departments] - List of department IDs associated with the brand.
 */
/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */
/**
 * @typedef BrandMeta
 * @property {number} id
 * @property {string} name
 */
/**
 * @typedef BrandMeta1
 * @property {number} [id]
 * @property {string} [name]
 */
/**
 * @typedef BulkAssetResponse
 * @property {Items[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BulkHsnDataResponse
 * @property {boolean} [success] - Flag indicating the success status of the
 *   bulk HSN operation.
 */
/**
 * @typedef BulkHsnResponse
 * @property {BulkHsnDataResponse} [data]
 */
/**
 * @typedef BulkHsnUpsert
 * @property {HsnUpsert[]} data
 */
/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BulkInventoryGetItems
 * @property {number} [cancelled]
 * @property {string[]} [cancelled_records]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {number} [failed]
 * @property {string[]} [failed_records]
 * @property {string} [file_path]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [stage]
 * @property {number} [succeed]
 * @property {number} [total]
 */
/**
 * @typedef BulkProductUploadJob
 * @property {number} [company_id] - The ID of the company
 * @property {number} [total] - Total records to be imported
 * @property {number} [succeed] - Successfully imported records
 * @property {string} [stage] - The import stage
 * @property {string} [file_path]
 * @property {string} [template_tag] - Template tag for the import
 * @property {string} [tracking_url]
 */
/**
 * @typedef BulkProductJob
 * @property {number} [company_id]
 * @property {string} [template_tag]
 * @property {string} [product_type]
 * @property {string} [department]
 * @property {string} [file_path]
 */
/**
 * @typedef BulkJob
 * @property {number} [cancelled]
 * @property {Object[]} [cancelled_records]
 * @property {number} company_id
 * @property {Object} [created_by] - The user who created the item.
 * @property {string} created_on - The date and time when the item was created.
 * @property {string} [custom_template_tag]
 * @property {number} [failed]
 * @property {Object[]} [failed_records]
 * @property {string} [file_path]
 * @property {boolean} [is_active] - Whether the item is active or not.
 * @property {string} [modified_by] - The user who last modified the item.
 * @property {string} [modified_on] - The date and time when the item was last modified.
 * @property {string} [stage]
 * @property {number} [succeed]
 * @property {string} [template_tag]
 * @property {number} [total]
 * @property {string} [tracking_url]
 */
/**
 * @typedef BulkProductRequest
 * @property {string} batch_id
 * @property {number} company_id
 * @property {Object[]} data
 * @property {string} template_tag
 */
/**
 * @typedef BulkResponse
 * @property {string} batch_id
 * @property {Object} [created_by] - The user who created the item.
 * @property {string} created_on - The date and time when the item was created.
 * @property {boolean} [is_active] - Whether the item is active or not.
 * @property {string} [modified_by] - The user who last modified the item.
 * @property {string} [modified_on] - The date and time when the item was last modified.
 */
/**
 * @typedef CatalogInsightBrand
 * @property {number} [article_freshness]
 * @property {number} [available_articles]
 * @property {number} [available_sizes]
 * @property {string} [name]
 * @property {number} [total_articles]
 * @property {number} [total_sizes]
 */
/**
 * @typedef CatalogInsightItem
 * @property {number} [count]
 * @property {number} [out_of_stock_count]
 * @property {number} [sellable_count]
 */
/**
 * @typedef CatalogInsightResponse
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CatalogInsightItem} [item]
 */
/**
 * @typedef CategoriesResponse
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [slug_key]
 * @property {string} [template_slug]
 * @property {number} [uid]
 */
/**
 * @typedef Category
 * @property {Object} [created_by] - It is the details of the user who created
 *   the category.
 * @property {string} [created_on] - It is Date and time when the category was created.
 * @property {number[]} departments - It is the list of unique department the
 *   category belongs to.
 * @property {Hierarchy[]} [hierarchy] - It is the list of category hierarchies
 *   for each department of an L3 category.
 * @property {string} [id] - It is the unique identifier of the category.
 * @property {boolean} is_active - It is the flag indicating if the category is active.
 * @property {number} level - It is the level of category
 * @property {Object} [marketplaces] - It is the mapping of the category in
 *   different marketplaces.
 * @property {Object} [media] - It is the details of the media such as banner and logo..
 * @property {Object} [modified_by] - It is the details of the user who last
 *   modified the category.
 * @property {string} [modified_on] - It is the date and time when the category
 *   was last modified.
 * @property {string} name - It is the name of the category
 * @property {number} [priority] - It is the priority of the category.
 * @property {string} [slug] - It is the slug of the category.
 * @property {string[]} [synonyms] - It is the list of synonyms.
 * @property {string[]} [tryouts] - It is the list of tryouts.
 * @property {number} [uid] - It is the unique identifier of the category.
 */
/**
 * @typedef ChannelListResponse
 * @property {ChannelItem[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ChannelDetailResponse
 * @property {string} [created_on]
 * @property {CreatedBy} [created_by]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {ChannelValidation} [validation]
 * @property {string} [_id]
 * @property {string} [description]
 * @property {string} [slug]
 * @property {string} [app_id]
 * @property {CreatedBy} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [display_name]
 */
/**
 * @typedef ChannelItem
 * @property {string} [logo]
 * @property {CreatedBy} [modified_by]
 * @property {CreatedBy} [created_by]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [app_id]
 * @property {string} [modified_on]
 * @property {string} [_id]
 * @property {string} [description]
 * @property {ChannelValidation} [validation]
 * @property {string} [created_on]
 * @property {string} [display_name]
 */
/**
 * @typedef ChannelValidation
 * @property {ProductValidation} [product]
 * @property {BrandValidationItem} [brand]
 * @property {CompanyValidation} [company]
 * @property {LocationValidation} [location]
 */
/**
 * @typedef ProductValidation
 * @property {boolean} [gated_category_applicable]
 * @property {boolean} [imageless_products]
 * @property {string} [stage]
 */
/**
 * @typedef BrandValidationItem
 * @property {string} [stage]
 * @property {boolean} [consent_doc_required]
 */
/**
 * @typedef CompanyValidation
 * @property {boolean} [bank_ac_required]
 * @property {boolean} [gst_required]
 * @property {boolean} [verified]
 */
/**
 * @typedef LocationValidation
 * @property {boolean} [gst_required]
 * @property {string} [stage]
 */
/**
 * @typedef CategoryCreateResponse
 * @property {string} [message] - It is the message of the response from the category.
 * @property {number} [uid] - It is the unique identifier of the category.
 */
/**
 * @typedef CategoryItems
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {Child[]} [childs]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef CategoryListingResponse
 * @property {DepartmentCategoryTree[]} [data]
 * @property {DepartmentIdentifier[]} [departments]
 */
/**
 * @typedef CategoryMapping
 * @property {Object} [ajio] - It is the category id mapping for ajio platform.
 * @property {Object} [facebook] - It is the category id mapping for facebook platform.
 * @property {Object} [google] - It is the category id mapping for google platform.
 */
/**
 * @typedef CategoryMappingValues
 * @property {number} [catalog_id] - It is the category id mapping of the
 *   respective platform with Fynd Platform.
 * @property {string} name - It is the name of the Category in the respective platform.
 */
/**
 * @typedef CategoryRequestBody
 * @property {number[]} departments - It is the list of unique department the
 *   category belongs to.
 * @property {Hierarchy[]} [hierarchy] - It is the list of category hierarchies
 *   for each department of an L3 category.
 * @property {boolean} is_active - It is the flag indicating if the category is active.
 * @property {number} level - It is the level of category
 * @property {Object} [marketplaces] - It is the mapping of the category in
 *   different marketplaces.
 * @property {Object} [media] - It is the details of the media such as banner and logo..
 * @property {string} name - It is the name of the category
 * @property {number} [priority] - It is the priority of the category.
 * @property {string} [slug] - It is the slug of the category.
 * @property {string[]} [synonyms] - It is the list of synonyms.
 * @property {string[]} [tryouts] - It is the list of tryouts.
 */
/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CategoryUpdateResponse
 * @property {string} [message] - It is the message of the response from the category.
 * @property {boolean} [success] - It is the flag indication the success response.
 */
/**
 * @typedef Child
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {SecondLevelChild[]} [childs]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef CollectionBadge
 * @property {string} [color]
 * @property {string} [text]
 */
/**
 * @typedef CollectionBanner
 * @property {CollectionImage} landscape
 * @property {CollectionImage} portrait
 */
/**
 * @typedef CollectionBannerResponse
 * @property {CollectionImageResponse} [landscape]
 * @property {CollectionImageResponse} [portrait]
 */
/**
 * @typedef BadgeDetail
 * @property {string} [color]
 * @property {string} [text]
 */
/**
 * @typedef CollectionCreateResponse
 * @property {CollectionBadge} [badge]
 * @property {CollectionBannerResponse} [banners]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {CollectionImageResponse} [logo]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {boolean} [is_searchable]
 * @property {number} [priority]
 * @property {boolean} [published]
 * @property {CollectionQuery[]} [query]
 * @property {SeoDetail} [seo]
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {CollectionSchedule} [_schedule]
 * @property {Action} [action]
 * @property {string} [uid]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {string} [app_id]
 * @property {string} [slug]
 * @property {string} [sort_on]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef CollectionDetailResponse
 * @property {Object} [_schedule]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {string} [app_id]
 * @property {Object} [badge]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {Media} [logo]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {number} [priority]
 * @property {CollectionQuery[]} [query]
 * @property {string} [slug]
 * @property {string[]} [tag]
 * @property {string} [type]
 * @property {string} [uid]
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef CollectionImage
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {string} [type]
 */
/**
 * @typedef CollectionImageResponse
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef CollectionItem
 * @property {string} action
 * @property {number} item_id
 * @property {number} [priority]
 */
/**
 * @typedef CollectionItemUpdate
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {CollectionItem[]} [items]
 * @property {CollectionQuery[]} [query]
 * @property {string} [type]
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterTag[]} [tags]
 * @property {CollectionListingFilterType[]} [type]
 */
/**
 * @typedef CollectionListingFilterTag
 * @property {string} [display]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */
/**
 * @typedef CollectionListingFilterType
 * @property {string} [display]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */
/**
 * @typedef CollectionQuery
 * @property {string} attribute - The attribute of the collection query
 * @property {string} op - The operation to be performed on the attribute of the
 *   collection query
 * @property {string[]} value - The value of the attribute of the collection query
 */
/**
 * @typedef CollectionSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [start]
 */
/**
 * @typedef CompanyBrandDetail
 * @property {number} [brand_id]
 * @property {string} [brand_name]
 * @property {number} [company_id]
 * @property {number} [total_article]
 * @property {Object} [logo]
 * @property {string} [name]
 * @property {number} [id]
 */
/**
 * @typedef CompanyMeta
 * @property {number} id
 */
/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */
/**
 * @typedef CompanyOptIn
 * @property {number[]} brand_ids
 * @property {number} company_id
 * @property {Object} [created_by]
 * @property {number} created_on
 * @property {boolean} enabled
 * @property {Object} [modified_by]
 * @property {number} modified_on
 * @property {string} opt_level
 * @property {string} platform
 * @property {number[]} store_ids
 */
/**
 * @typedef ConfigErrorResponse
 * @property {string} [code]
 * @property {Object} [errors]
 * @property {string} message
 */
/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */
/**
 * @typedef ConfigurationBucketPoints
 * @property {string} [display]
 * @property {number} [end]
 * @property {number} [start]
 */
/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingFilter} [filter]
 * @property {ConfigurationListingSort} [sort]
 */
/**
 * @typedef ConfigurationListingFilter
 * @property {boolean} allow_single
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 */
/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} [display_name]
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {string} [name]
 * @property {number} priority
 * @property {string} type
 * @property {ConfigurationListingFilterValue} [value_config]
 */
/**
 * @typedef ConfigurationListingFilterValue
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {string} [condition]
 * @property {Object} [map]
 * @property {Object[]} [map_values]
 * @property {string[]} [priority]
 * @property {string} [sort]
 * @property {string} [value]
 */
/**
 * @typedef ConfigurationListingSort
 * @property {ConfigurationListingSortConfig[]} [config]
 * @property {string} default_key
 */
/**
 * @typedef ConfigurationListingSortConfig
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {string} [name]
 * @property {number} priority
 */
/**
 * @typedef ConfigurationProduct
 * @property {ConfigurationProductSimilar} [similar]
 * @property {ConfigurationProductVariant} [variant]
 * @property {ConfigurationProductDetailsGroups} [details_groups]
 */
/**
 * @typedef ConfigurationProductDetailsGroups
 * @property {ConfigurationProductDetailsConfig[]} [config]
 */
/**
 * @typedef ConfigurationProductDetailsConfig
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {string[]} [template_slugs]
 * @property {ConfigurationProductDetailsAttribute[]} [attributes]
 * @property {boolean} [is_active]
 */
/**
 * @typedef ConfigurationProductDetailsAttribute
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [display_type]
 * @property {number} [priority]
 * @property {boolean} [is_active]
 * @property {string} [key]
 */
/**
 * @typedef ConfigurationProductConfig
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {number} priority
 * @property {ProductSize} [size]
 * @property {string} [subtitle]
 * @property {string} [title]
 */
/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */
/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */
/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} display_type
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {string} name
 * @property {number} priority
 * @property {ProductSize} size
 */
/**
 * @typedef CreateAutocompleteKeyword
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {AutocompleteResult[]} [results]
 * @property {string[]} [words]
 * @property {AutocompleteAction} [action]
 */
/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {string} [uid]
 * @property {boolean} [is_active]
 * @property {AutocompleteResult[]} [results]
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {string[]} [words]
 */
/**
 * @typedef CreateCollection
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {string} [app_id]
 * @property {CollectionBadge} [badge]
 * @property {CollectionBanner} banners
 * @property {Object} [created_by]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {CollectionImage} logo
 * @property {Object} [meta]
 * @property {Object} [modified_by]
 * @property {string} name
 * @property {number} [priority]
 * @property {boolean} [published]
 * @property {CollectionQuery[]} [query]
 * @property {SeoDetail} [seo]
 * @property {string} slug
 * @property {boolean} [is_searchable]
 * @property {string} [sort_on]
 * @property {string[]} [tags]
 * @property {string} type
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef RerankingBoostItems
 * @property {BoostItem[]} [boost]
 */
/**
 * @typedef GetSearchRerankDetailResponse
 * @property {RerankingBoostItems} [ranking]
 * @property {boolean} [is_active]
 * @property {CreatedBy} [modified_by]
 * @property {CreatedBy} [created_by]
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {string} [id]
 */
/**
 * @typedef BoostItem
 * @property {string} [attribute_key]
 * @property {string} [attribute_value]
 */
/**
 * @typedef GetSearchRerankItemResponse
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object} [modified_by] - The user who modified the search rerank.
 * @property {RerankingBoostItems} [ranking]
 * @property {Object} [created_by] - The user who created the search rerank.
 * @property {boolean} [is_active]
 * @property {string} [id]
 */
/**
 * @typedef GetSearchRerankResponse
 * @property {GetSearchRerankItemResponse[]} [items]
 * @property {PageResponse1} [page]
 */
/**
 * @typedef CreateSearchRerankResponse
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {RerankingBoostItems} [ranking]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {Object} [created_by] - The user who created the search rerank.
 * @property {string} [modified_on]
 * @property {Object} [modified_by] - The user who modified the search rerank.
 */
/**
 * @typedef UpdateSearchRerankResponse
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {RerankingBoostItems} [ranking]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {Object} [created_by] - The user who created the search rerank.
 * @property {string} [modified_on]
 * @property {Object} [modified_by] - The user who modified the search rerank.
 */
/**
 * @typedef UpdateSearchRerankRequest
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {string} [application_id]
 * @property {RerankingBoostItems} [ranking]
 */
/**
 * @typedef CreateSearchRerankRequest
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {string} [application_id]
 * @property {RerankingBoostItems} [ranking]
 */
/**
 * @typedef CreateSearchConfigurationRequest
 * @property {string} application_id - The application id where custom search
 *   configuration is set
 * @property {number} company_id - The company id where custom search configuration is set
 * @property {Object} [created_by] - The user who created the search configuration.
 * @property {string} [created_on] - The date and time when the search
 *   configuration was created.
 * @property {boolean} [is_proximity_enabled] - Flag indicating if proximity
 *   search is enabled for this attribute.
 * @property {Object} [modified_by] - The user who modified the search configuration.
 * @property {string} [modified_on] - The date and time when the search
 *   configuration was last modified.
 * @property {number} [proximity] - Proximity distance configuration
 * @property {SearchableAttribute[]} [searchable_attributes] - The searchable
 *   attributes defined on the application.
 */
/**
 * @typedef CreateSearchConfigurationResponse
 * @property {boolean} [success]
 */
/**
 * @typedef CreateSearchKeyword
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {SearchKeywordResult} result
 * @property {string[]} [words]
 */
/**
 * @typedef CreateUpdateAppReturnConfig
 * @property {string} app_id - Channel identifier
 * @property {number} company_id - Unique identifer of company
 * @property {string} return_config_level - Return configurtion Level
 *   category|product|no-return
 */
/**
 * @typedef CrossSellingData
 * @property {number} [articles]
 * @property {number} [products]
 */
/**
 * @typedef CrossSellingResponse
 * @property {number} [articles]
 * @property {number} [products]
 */
/**
 * @typedef CustomOrder
 * @property {boolean} [is_custom_order]
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 */
/**
 * @typedef DateMeta
 * @property {string} [added_on_store]
 * @property {string} [created_on]
 * @property {string} [inventory_updated_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef DefaultKeyRequest
 * @property {string} default_key
 */
/**
 * @typedef DeleteAppCategoryReturnConfig
 * @property {string} app_id - Channel identifier
 * @property {number[]} category_ids - List of category_ids to be deleted.
 * @property {number} company_id - Unique identifer of company
 */
/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */
/**
 * @typedef DeleteSearchConfigurationResponse
 * @property {boolean} [success]
 */
/**
 * @typedef DeleteSearchRerankConfigurationResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef Department
 * @property {Media2} [logo]
 * @property {string} [name]
 * @property {number} [priority_order]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef DepartmentCategoryTree
 * @property {string} [department]
 * @property {CategoryItems[]} [items]
 */
/**
 * @typedef PollErrorResponse
 * @property {Object} [error]
 */
/**
 * @typedef DepartmentCreateErrorResponse
 * @property {Object} [error]
 */
/**
 * @typedef ProductBundleCreateErrorResponse
 * @property {Object} [error]
 */
/**
 * @typedef DepartmentCreateResponse
 * @property {string} message
 * @property {number} uid
 */
/**
 * @typedef DepartmentCreateUpdate
 * @property {string} [_cls]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {string} logo
 * @property {string} name
 * @property {Object} [platforms]
 * @property {number} priority_order
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {number} [uid]
 */
/**
 * @typedef DepartmentErrorResponse
 * @property {string} [code]
 * @property {Object} [errors]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 */
/**
 * @typedef DepartmentIdentifier
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef DepartmentModel
 * @property {string} [_cls]
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {Object} [created_by] - User details of the creator of the document
 * @property {boolean} [is_active] - Whether the department is currently active
 * @property {string} logo - The URL of the department's logo
 * @property {Object} [modified_by] - User details of the last modifier of the document
 * @property {string} name - The name of the department
 * @property {number} priority_order - The priority order of the department
 * @property {string} [slug] - The unique slug identifier for the department
 * @property {string[]} [synonyms] - A list of synonyms for the department name
 * @property {number} uid - The unique ID for the department
 * @property {Object} [verified_by] - User details of the verifier of the
 *   document, if applicable
 * @property {string} [verified_on] - Timestamp of when the document was
 *   verified, if applicable
 */
/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */
/**
 * @typedef ValidationFailedResponse
 * @property {string} [message] - Response message for failed validation
 */
/**
 * @typedef DepartmentsResponse
 * @property {GetDepartment[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef DimensionResponse
 * @property {number} height - The height dimension.
 * @property {boolean} is_default - Indicates if it is the default dimension.
 * @property {number} length - The length dimension.
 * @property {string} unit - The unit of dimension.
 * @property {number} width - The width dimension.
 */
/**
 * @typedef DimensionResponse1
 * @property {number} [height]
 * @property {number} [length]
 * @property {string} [unit]
 * @property {number} [width]
 */
/**
 * @typedef Document
 * @property {string} [legal_name]
 * @property {string} type
 * @property {string} [url]
 * @property {string} value
 * @property {boolean} [verified]
 */
/**
 * @typedef EntityConfiguration
 * @property {string} [app_id]
 * @property {string} [config_id]
 * @property {string} [config_type]
 * @property {string} [id]
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */
/**
 * @typedef ErrorResponse
 * @property {number} [code]
 * @property {string} [error]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 */
/**
 * @typedef CategoryErrorResponse
 * @property {string} [code]
 * @property {Object} [error]
 * @property {string} [message]
 */
/**
 * @typedef FilerList
 * @property {string} [display]
 * @property {string} [value]
 */
/**
 * @typedef RawProduct
 * @property {Object} [_custom_json]
 * @property {number[]} [all_company_ids]
 * @property {string[]} [all_identifiers]
 * @property {Object[]} [all_sizes]
 * @property {Object} [attributes]
 * @property {Brand} [brand]
 * @property {number} [brand_uid]
 * @property {Object} [category]
 * @property {string} [category_slug]
 * @property {number} [category_uid]
 * @property {string} [color]
 * @property {number} [company_id]
 * @property {string} [country_of_origin]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string} [currency]
 * @property {Object} [custom_order]
 * @property {number[]} [departments]
 * @property {string} [description]
 * @property {string[]} [highlights]
 * @property {string} [hsn_code]
 * @property {string} [id]
 * @property {string} [image_nature]
 * @property {string[]} [images]
 * @property {boolean} [is_active]
 * @property {boolean} [is_dependent]
 * @property {boolean} [is_expirable]
 * @property {boolean} [is_image_less_product]
 * @property {boolean} [is_physical]
 * @property {boolean} [is_set]
 * @property {string} [item_code]
 * @property {string} [item_type]
 * @property {string[]} [l3_mapping]
 * @property {Media[]} [media]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {Object} [moq]
 * @property {boolean} [multi_size]
 * @property {string} [name]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {number} [no_of_boxes]
 * @property {string} [pending]
 * @property {string} [primary_color]
 * @property {string[]} [product_group_tag]
 * @property {ProductPublished} [product_publish]
 * @property {ReturnConfigResponse} [return_config]
 * @property {string} [short_description]
 * @property {string} [size_guide]
 * @property {Object[]} [sizes]
 * @property {string} [slug]
 * @property {string} [stage]
 * @property {string[]} [tags]
 * @property {Object} [tax_identifier]
 * @property {Object} [teaser_tag]
 * @property {string} [template_tag]
 * @property {Trader[]} [trader]
 * @property {number} [uid]
 * @property {Object} [variant_group]
 * @property {Object} [variant_media]
 * @property {Object} [variants]
 * @property {VerifiedBy} [verified_by]
 * @property {string} [verified_on]
 * @property {string[]} [store_id_list]
 */
/**
 * @typedef RawProductListingResponse
 * @property {RawProduct[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GTIN
 * @property {string} gtin_type
 * @property {string} gtin_value
 * @property {boolean} [primary]
 */
/**
 * @typedef GenderDetail
 * @property {string} [created_on] - It is Date and time when the attribute was created.
 * @property {string} [modified_on] - It is Date and time when the attribute was modified.
 * @property {Object} [created_by] - Details of the user who created the attribute.
 * @property {Object} [modified_by] - Details of the user who last modified the attribute.
 * @property {string[]} [departments]
 * @property {string} [description]
 * @property {AttributeMasterDetails} [details]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterFilter} [filters]
 * @property {string} [_id]
 * @property {boolean} [is_nested]
 * @property {string} [logo]
 * @property {AttributeMasterMeta} [meta]
 * @property {string} [name]
 * @property {AttributeMaster} [schema]
 * @property {string} [slug]
 * @property {boolean} [variant]
 */
/**
 * @typedef GetAddressSerializer
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [pincode]
 * @property {string} [state]
 */
/**
 * @typedef GetAllSizes
 * @property {AllSizes[]} [all_sizes]
 */
/**
 * @typedef FilterResponse
 * @property {ValueItem[]} [values]
 */
/**
 * @typedef ValueItem
 * @property {string} [text]
 * @property {string} [value]
 */
/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef GetAutocompleteWordsData
 * @property {AutocompleteResult[]} [results]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {string} [uid]
 */
/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {CompareFilter} [compare]
 * @property {SimilarFilter} [similar]
 * @property {VariantFilter} [variant]
 * @property {DetailFilter} [detail]
 */
/**
 * @typedef FilterItem
 * @property {string} [key]
 * @property {string} [display]
 * @property {string[]} [filter_types]
 * @property {string[]} [units]
 */
/**
 * @typedef CompareFilter
 * @property {FilterItem[]} [data]
 */
/**
 * @typedef SimilarFilter
 * @property {SimilarItem[]} [data]
 */
/**
 * @typedef VariantFilter
 * @property {VariantItem[]} [data]
 */
/**
 * @typedef DetailFilter
 * @property {FilterItem[]} [data]
 * @property {DetailFilterValues} [values]
 */
/**
 * @typedef DetailFilterValues
 * @property {DisplayType[]} [display_type]
 */
/**
 * @typedef DisplayType
 * @property {string} [key]
 * @property {string} [display]
 */
/**
 * @typedef SimilarItem
 * @property {string} [key]
 * @property {string} [display]
 */
/**
 * @typedef VariantItem
 * @property {string} [key]
 * @property {string} [display]
 */
/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [filter]
 * @property {Object} [sort]
 */
/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {MetaDataListingResponse} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */
/**
 * @typedef GetCollectionDetailNest
 * @property {Object} [_schedule]
 * @property {Action} [action]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {string} [app_id]
 * @property {Object} [badge]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {Media} [logo]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {number} [priority]
 * @property {CollectionQuery[]} [query]
 * @property {string} [slug]
 * @property {string[]} [tag]
 * @property {string} [type]
 * @property {string} [uid]
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductFilters[]} [filters]
 * @property {ProductListingDetail[]} [items]
 * @property {Page} [page]
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef GetCollectionListingResponse
 * @property {CollectionListingFilter} [filters]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductFilters[]} [filters]
 * @property {Object} operators
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef GetCompanySerializer
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {UserSerializer2} [created_by]
 * @property {string} [created_on]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [verified_on]
 */
/**
 * @typedef ConditionItem
 * @property {string} [key]
 * @property {string} [display]
 */
/**
 * @typedef DataItem
 * @property {string} [key]
 * @property {string} [display]
 * @property {string[]} [filter_types]
 * @property {string[]} [compatible_units]
 */
/**
 * @typedef ValueTypeItem
 * @property {string} [key]
 * @property {string} [display]
 */
/**
 * @typedef SortTypeItem
 * @property {string} [key]
 * @property {string} [display]
 */
/**
 * @typedef GetConfigMetadataResponse
 * @property {Page} [page]
 * @property {ConditionItem[]} [condition]
 * @property {DataItem[]} data
 * @property {GetConfigMetadataValues} [values]
 */
/**
 * @typedef GetConfigMetadataValues
 * @property {ValueTypeItem[]} [type]
 * @property {SortTypeItem[]} [sort]
 */
/**
 * @typedef AttributeType
 * @property {string} [unit]
 * @property {number} [priority]
 * @property {string} [name]
 * @property {string} [key]
 * @property {string} [display_type]
 * @property {boolean} [is_active]
 * @property {string} [slug]
 */
/**
 * @typedef DataType
 * @property {string} [app_id]
 * @property {boolean} [is_default]
 * @property {number} [priority]
 * @property {string} [name]
 * @property {AttributeType[]} [attributes]
 * @property {boolean} [is_active]
 * @property {string} [slug]
 * @property {string} [id]
 */
/**
 * @typedef ListingValueConfigType
 * @property {string} [sort]
 * @property {Object[]} [bucket_points]
 * @property {Object} [map]
 * @property {string} [condition]
 * @property {string} [value]
 */
/**
 * @typedef SizeLimitConfiguration
 * @property {number} [min] - Minimum number of variants to display.
 * @property {number} [max] - Maximum number of variants to display.
 */
/**
 * @typedef ListingDataType
 * @property {string} [app_id]
 * @property {boolean} [allow_single]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {string} [key]
 * @property {string} [name]
 * @property {boolean} [is_default]
 * @property {number} [priority]
 * @property {string} [logo]
 * @property {ListingValueConfigType} [value_config]
 * @property {string} [type]
 * @property {string} [display_type] - Display type of the variant attribute.
 * @property {SizeLimitConfiguration} [size]
 */
/**
 * @typedef GetListingConfigResponse
 * @property {ListingDataType[]} [data]
 * @property {PageResponseType} [page]
 */
/**
 * @typedef GetConfigResponse
 * @property {DataType[]} data
 * @property {PageResponseType} page
 */
/**
 * @typedef GetDepartment
 * @property {UserSerializer1} [created_by]
 * @property {string} [created_on]
 * @property {boolean} [is_active]
 * @property {string} [item_type]
 * @property {string} [logo]
 * @property {UserSerializer1} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {number} [page_no]
 * @property {number} [page_size]
 * @property {number} [priority_order]
 * @property {string} [search]
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {number} [uid]
 */
/**
 * @typedef GetInventories
 * @property {BrandMeta1} [brand]
 * @property {CompanyMeta1} [company]
 * @property {string} [country_of_origin]
 * @property {UserSerializer1} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {DimensionResponse1} [dimension]
 * @property {string} [expiration_date]
 * @property {string} [id]
 * @property {Object} [identifier]
 * @property {string} [inventory_updated_on]
 * @property {boolean} [is_set]
 * @property {number} [item_id]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {UserSerializer1} [modified_by]
 * @property {Object} [platforms]
 * @property {PriceArticle} [price]
 * @property {QuantitiesArticle} [quantities]
 * @property {ReturnConfig2} [return_config]
 * @property {string} [seller_identifier]
 * @property {string} [size]
 * @property {string} [stage]
 * @property {ArticleStoreResponse} [store]
 * @property {string[]} [tags]
 * @property {Object} [tax_identifier]
 * @property {number} [total_quantity]
 * @property {string} [trace_id]
 * @property {boolean} [track_inventory]
 * @property {Trader2[]} [trader]
 * @property {string} [uid]
 * @property {WeightResponse1} [weight]
 */
/**
 * @typedef GetInventoriesResponse
 * @property {GetInventories[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetLocationSerializer
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer} address
 * @property {string} store_code
 * @property {GetCompanySerializer} [company]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {UserSerializer3} [created_by]
 * @property {string} [created_on]
 * @property {string} display_name
 * @property {Document[]} [documents]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {LocationIntegrationType} [integration_type]
 * @property {LocationManagerSerializer} [manager]
 * @property {UserSerializer3} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string[]} [notification_emails]
 * @property {string} [phone_number]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {number} [uid]
 * @property {UserSerializer3} [verified_by]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 */
/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
 */
/**
 * @typedef GetProductBundleCreateResponse
 * @property {Object} [created_by] - The user who created the product bundle.
 * @property {Object} [modified_by] - The user who created the product bundle.
 * @property {string} choice
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {string} [id]
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {Object} [meta]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string[]} [page_visibility]
 * @property {ProductBundleItem[]} products
 * @property {boolean} [same_store_assignment]
 * @property {string} slug
 * @property {boolean} allow_remove
 * @property {boolean} auto_add_to_cart
 * @property {boolean} auto_select
 * @property {boolean} prefer_single_shipment
 * @property {boolean} allow_individual_cancel
 * @property {boolean} allow_individual_return
 */
/**
 * @typedef GetProductBundleListingResponse
 * @property {GetProductBundleCreateResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetProductBundleResponse
 * @property {string} [choice]
 * @property {number} [company_id]
 * @property {boolean} [is_active]
 * @property {string} [logo]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {string[]} [page_visibility]
 * @property {GetProducts[]} [products]
 * @property {boolean} [same_store_assignment]
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {boolean} [prefer_single_shipment]
 * @property {boolean} [allow_individual_cancel]
 * @property {boolean} [allow_individual_return]
 * @property {string} [slug]
 */
/**
 * @typedef GetProducts
 * @property {number} [max_quantity]
 * @property {number} [min_quantity]
 * @property {Price} [price]
 * @property {LimitedProductData} [product_details]
 * @property {number} [product_uid]
 * @property {Size[]} [sizes]
 */
/**
 * @typedef GetCollectionDetailResponse
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {CollectionSchedule} [_schedule]
 * @property {Object} [action]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {string} [app_id]
 * @property {CollectionBadge} [badge]
 * @property {ImageUrls} [banners]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {Media} [logo]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {number} [priority]
 * @property {boolean} [published]
 * @property {CollectionQuery[]} [query]
 * @property {SeoDetail} [seo]
 * @property {string} [slug]
 * @property {string} [sort_on]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [uid]
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef CommonResponseSchemaCollection
 * @property {string} [message]
 */
/**
 * @typedef GetQueryFiltersResponse
 * @property {ProductFilters[]} [filters]
 * @property {Object} [operators]
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef GetCollectionItemsResponseSchema
 * @property {ProductDetailV2[]} [items]
 * @property {ProductSortOnv2[]} [sort_on]
 * @property {Page} [page]
 */
/**
 * @typedef Page1
 * @property {boolean} [ca]
 * @property {string} [department]
 * @property {number} [page_no]
 * @property {number} [page_size]
 * @property {string} [q]
 * @property {string} [sort]
 * @property {string} [sort_on]
 * @property {string} [type]
 * @property {string} [variant]
 */
/**
 * @typedef CollectionItemSchemaV2
 * @property {string} action
 * @property {number} item_id
 * @property {number} [priority]
 */
/**
 * @typedef CollectionItemUpdateSchema
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {CollectionItemSchemaV2[]} [items]
 * @property {CollectionQuerySchemaV2[]} [query]
 * @property {string} type
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [reset_items]
 */
/**
 * @typedef CollectionQuerySchemaV2
 * @property {string} attribute - The attribute of the collection query
 * @property {string} op - The operation to be performed on the attribute of the
 *   collection query
 * @property {string[]} value
 */
/**
 * @typedef ProductDetailV2
 * @property {ProductBrand} [brand]
 * @property {boolean} [is_excluded]
 * @property {boolean} [is_pinned]
 * @property {string} [item_code]
 * @property {string} [item_type]
 * @property {Media[]} [medias]
 * @property {string} [name]
 * @property {number} [priority]
 * @property {string} [short_description]
 * @property {string} slug
 * @property {number} [uid]
 */
/**
 * @typedef GetSearchConfigurationResponse
 * @property {string} [_id] - The id of the search configuration.
 * @property {string} application_id - The application id where custom search
 *   configuration is set
 * @property {number} company_id - The company id where custom search configuration is set
 * @property {Object} [created_by] - The user who created the search configuration.
 * @property {string} [created_on] - The date and time when the search
 *   configuration was created.
 * @property {boolean} [is_proximity_enabled] - Flag indicating if proximity
 *   search is enabled for this attribute.
 * @property {Object} [modified_by] - The user who modified the search configuration.
 * @property {string} [modified_on] - The date and time when the search
 *   configuration was last modified.
 * @property {number} [proximity] - Proximity distance configuration
 * @property {SearchableAttribute[]} [searchable_attributes] - The searchable
 *   attributes defined on the application.
 */
/**
 * @typedef GetSearchWordsData
 * @property {Object} [query]
 * @property {string} [sort_on]
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {Object} [result]
 * @property {string} [uid]
 * @property {string[]} [words]
 */
/**
 * @typedef GetSearchWordsDetailResponse
 * @property {GetSearchWordsData} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetSearchWordsResponse
 * @property {GetSearchWordsData[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GlobalValidation
 * @property {Object} [definitions]
 * @property {string} [description]
 * @property {Properties} [properties]
 * @property {string[]} [required]
 * @property {string} [title]
 * @property {string} [type]
 */
/**
 * @typedef Guide
 * @property {Meta} [meta]
 */
/**
 * @typedef HSNCodesResponse
 * @property {HSNData} [data]
 * @property {string} [message]
 */
/**
 * @typedef HSNData
 * @property {string[]} [country_of_origin]
 * @property {string[]} [hsn_code]
 */
/**
 * @typedef HSNDataInsertV2
 * @property {string} [id] - ID of the HSN.
 * @property {string} country_code - Country code.
 * @property {Object} [created_by] - Details of the user who created the HSN data.
 * @property {Object} [modified_by] - Details of the user who last modified the HSN data.
 * @property {string} [created_on] - Date and time when the HSN data was created.
 * @property {string} description - Description of the HSN data.
 * @property {string} hsn_code - HSN code.
 * @property {string} [hsn_code_id] - Unique identifier of the HSN code.
 * @property {string} [modified_on] - Date and time when the HSN data was last modified.
 * @property {string} reporting_hsn - HSN code.
 * @property {TaxSlab[]} taxes - List of tax slabs.
 * @property {string} type - Type of HSN data (goods or services).
 */
/**
 * @typedef Hierarchy
 * @property {number} department - It is the unique identifier of the department
 *   the category is mapped to.
 * @property {number} l1 - It is the unique id of the L1 category mapped to the
 *   L3 category.
 * @property {number} l2 - It is the unique id of the L2 category mapped to the
 *   L3 category.
 */
/**
 * @typedef HsnCode
 * @property {Object} [data] - The HSN code data.
 */
/**
 * @typedef SlabObject
 * @property {number} [threshold]
 * @property {number} [tax]
 */
/**
 * @typedef UpdateHsnCodesObject
 * @property {Object} [modified_by]
 * @property {number} [company_id] - The ID of the company.
 * @property {SlabObject[]} [slabs]
 * @property {string} [hs2_code] - The HS2 code.
 * @property {string} [hsn_code] - The HSN code.
 * @property {string} [tax_on]
 * @property {string} [id]
 */
/**
 * @typedef UpdateHsnCode
 * @property {Object} [data] - The HSN code data.
 */
/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse1} [page]
 */
/**
 * @typedef HsnCodesObject
 * @property {number} [company_id] - The ID of the company.
 * @property {string} [hs2_code] - The HS2 code.
 * @property {string} [hsn_code] - The HSN code.
 * @property {string} [id] - The identifier of the HSN code.
 * @property {string} [modified_on] - The date and time when the HSN code was
 *   last modified.
 * @property {number} [tax1] - The first tax rate.
 * @property {number} [tax2] - The second tax rate.
 * @property {boolean} [tax_on_esp] - Flag indicating whether tax is applicable on ESP.
 * @property {boolean} [tax_on_mrp] - Flag indicating whether tax is applicable on MRP.
 * @property {number} [threshold1] - The threshold for the first tax rate.
 * @property {number} [threshold2] - The threshold for the second tax rate.
 */
/**
 * @typedef HsnUpsert
 * @property {number} company_id - The ID of the company.
 * @property {string} hs2_code - The HS2 code.
 * @property {string} hsn_code - The HSN code.
 * @property {boolean} [is_active] - Flag indicating whether the entry is active.
 * @property {number} tax1 - The first tax rate.
 * @property {number} [tax2] - The second tax rate.
 * @property {boolean} [tax_on_esp] - Flag indicating whether tax is applicable on ESP.
 * @property {boolean} tax_on_mrp - Flag indicating whether tax is applicable on MRP.
 * @property {number} threshold1 - The threshold for the first tax rate.
 * @property {number} [threshold2] - The threshold for the second tax rate.
 * @property {number} [uid] - The unique identifier.
 */
/**
 * @typedef Image
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 * @property {string} [secure_url]
 * @property {string} [url]
 */
/**
 * @typedef ImageUrls
 * @property {BannerImage} [landscape]
 * @property {BannerImage} [portrait]
 */
/**
 * @typedef InvSize
 * @property {string} currency - The currency used for the item price.
 * @property {string} [expiration_date]
 * @property {GTIN[]} identifiers
 * @property {boolean} [is_set]
 * @property {string} [item_dimensions_unit_of_measure] - The unit of measure
 *   for the item dimensions.
 * @property {number} [item_height] - The height of the item.
 * @property {number} [item_length] - The length of the item.
 * @property {number} [item_weight] - The weight of the item.
 * @property {string} [item_weight_unit_of_measure] - The unit of measure for
 *   the item weight.
 * @property {number} [item_width] - The width of the item.
 * @property {number} [price]
 * @property {number} price_effective
 * @property {number} [price_transfer]
 * @property {number} quantity
 * @property {InventorySet} [set]
 * @property {string} size
 * @property {string} store_code
 */
/**
 * @typedef InventoryBulkRequest
 * @property {string} batch_id
 * @property {number} company_id
 * @property {InventoryJobPayload[]} sizes
 * @property {Object} [user]
 */
/**
 * @typedef InventoryConfig
 * @property {FilerList[]} [data]
 * @property {boolean} [multivalue]
 */
/**
 * @typedef InventoryCreateRequest
 * @property {string[]} [data] - The list of attributes that you want to extract
 *   in the export job.
 * @property {Object} filters - This filters that are applied for the export of
 *   the inventory.
 * @property {string[]} [notification_emails] - The list of the emails to be
 *   notified after the completion of the job.
 * @property {string} [type] - The type of file that needs to be exported.
 */
/**
 * @typedef InventoryExportAdvanceOption
 * @property {number[]} [brand_ids]
 * @property {string} [from_date]
 * @property {InventoryExportQuantityFilter} [quantity]
 * @property {number[]} [store_ids]
 * @property {string} [to_date]
 */
/**
 * @typedef InventoryExportFilter
 * @property {number[]} [brand_ids] - The list of the brand ids that needs to be exported.
 * @property {string} [from_date] - The modified on date from which the data
 *   needs to be exported.
 * @property {Object} [quantity] - The quantity range that needs to be exported.
 * @property {number[]} store_ids - The list of the store ids that needs to be exported.
 * @property {string} [to_date] - The modified on date till when the data needs
 *   to be exported.
 */
/**
 * @typedef InventoryExportJobResponse
 * @property {InventoryExportItem[]} [items]
 */
/**
 * @typedef InventoryExportItem
 * @property {string} [status]
 * @property {string} [type]
 * @property {Object} [stats]
 * @property {string} [completed_on]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {number} [seller_id]
 * @property {string} [task_id]
 * @property {string[]} [notification_emails]
 * @property {CreatedBy} [created_by]
 * @property {string} [_id]
 * @property {string} [url]
 * @property {string} [trigger_on]
 * @property {number[]} [brand]
 * @property {number[]} [store]
 */
/**
 * @typedef InventoryExportJob
 * @property {string} [completed_on] - Completion datetime of the job.
 * @property {Object} [filters] - The filters that needs to be exported.
 * @property {string[]} [notification_emails] - The notification emails for the job.
 * @property {number} seller_id - The seller id that needs to be exported.
 * @property {string} [status] - The status of the job.
 * @property {string} task_id - The task id of the job.
 * @property {string} type - The type of file that needs to be exported.
 * @property {string} [url] - URL odf the exported file.
 */
/**
 * @typedef InventoryExportJobListFilters
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {string[]} [brands]
 * @property {string[]} [stores]
 */
/**
 * @typedef InventoryExportJobListStats
 * @property {number} [success]
 * @property {number} [total]
 */
/**
 * @typedef InventoryExportJobList
 * @property {string} [status]
 * @property {string} [completed_on]
 * @property {string[]} [notification_emails]
 * @property {InventoryExportJobListFilters} [filters]
 * @property {InventoryExportJobListStats} [stats]
 * @property {string} [type]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {number} [seller_id]
 * @property {string} [url]
 * @property {string} [task_id]
 * @property {CreatedBy} [created_by]
 * @property {string} [id]
 */
/**
 * @typedef InventoryExportJobListResponse
 * @property {InventoryExportJobList[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef InventoryExportQuantityFilter
 * @property {number} [max] - The maximum quantity that needs to be exported.
 * @property {number} [min] - The minimum quantity that needs to be exported.
 * @property {string} operators - Condition for the quantity that needs to be exported.
 */
/**
 * @typedef ExportPatchRequest
 * @property {string[]} [notification_emails]
 * @property {string} [status]
 */
/**
 * @typedef InventoryExportRequest
 * @property {number[]} [brand]
 * @property {number[]} [store]
 * @property {string} [type]
 */
/**
 * @typedef EditInventoryDataDownloadsResponse
 * @property {string} [url]
 * @property {string} [completed_on]
 * @property {number} [seller_id]
 * @property {string} [task_id]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string[]} [notification_emails]
 * @property {string} [status]
 */
/**
 * @typedef EditInventoryDownloadsResponse
 * @property {EditInventoryDataDownloadsResponse} [data]
 */
/**
 * @typedef InventoryExportFiltersResponse
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef Stats
 * @property {number} [total]
 */
/**
 * @typedef InventoryExportResponse
 * @property {Object} [created_by] - The user that created the job.
 * @property {string} [created_on] - Creation datetime of the job
 * @property {InventoryExportFiltersResponse} [filters]
 * @property {string} [modified_on] - Modification date of the job
 * @property {string[]} [notification_emails] - The notification emails for the job.
 * @property {number} seller_id - The seller id that needs to be exported.
 * @property {string} [status] - The status of the job.
 * @property {string} task_id - The task id of the job.
 * @property {string} [type] - The type of file that needs to be exported.
 * @property {Stats} [stats]
 * @property {string} [_id]
 * @property {string} [trigger_on]
 * @property {number[]} [brand]
 * @property {number[]} [store]
 */
/**
 * @typedef InventoryFailedReason
 * @property {string} [errors] - It is the error message of the inventory error response.
 * @property {string} message - It is the message of the activity performed.
 * @property {number} [reason_code] - It is the reason code of the inventory
 *   error response.
 */
/**
 * @typedef InventoryJobDetailResponse
 * @property {Object} [cancelled_by] - This is the user detail of the user who
 *   cancelled the job.
 * @property {string} [cancelled_on] - This is the timestamp of the cacellation
 *   for this job.
 * @property {string} [completed_on] - This is the timestamp of the completion
 *   for this job.
 * @property {Object} [created_by] - This is the user detail of the user who
 *   cancelled the job.
 * @property {string} [created_on] - This is the timestamp of the creation for this job.
 * @property {Object} filters - This is the filter criteria applied for the export job.
 * @property {string} id - This is the ID of the job.
 * @property {string} [modified_on] - This is the timestamp of the modification
 *   for this job.
 * @property {string[]} [notification_emails] - User email to get notification
 *   post completion of the job.
 * @property {number} seller_id - This ID of the company.
 * @property {string} [status] - This tells you the current status of the export job.
 * @property {string} task_id - This is the task id of the jobs that is used for search.
 * @property {string} [type] - This is the file type of the export.
 * @property {string} url - This is the url to download the export.
 */
/**
 * @typedef InventoryJobFilters
 * @property {string[]} [brands] - The list of all the brands selected.
 * @property {string} [from_date] - The modified on date from which the data
 *   needs to be exported.
 * @property {Object} [quantity] - The quantity range that needs to be exported.
 * @property {string[]} [stores] - The list of all the store selected.
 * @property {string} [to_date] - The modified on date till when the data needs
 *   to be exported.
 */
/**
 * @typedef InventoryJobPayload
 * @property {string} [currency] - The currency used for the item price.
 * @property {string} [expiration_date] - The expiration date of the item.
 * @property {string} [item_dimensions_unit_of_measure] - The unit of measure
 *   for the item dimensions.
 * @property {string} [item_weight_unit_of_measure] - The unit of measure for
 *   the item weight.
 * @property {number} [price] - The price of the item.
 * @property {number} [price_effective] - The effective price of the item.
 * @property {number} [price_marked] - The marked price of the item.
 * @property {number} [quantity] - The quantity of the item.
 * @property {string} seller_identifier - The identifier of the seller.
 * @property {string} store_code - The code of the store.
 * @property {string[]} [tags] - The tags associated with the item.
 * @property {number} [total_quantity] - The total quantity of the item.
 * @property {string} [trace_id] - The trace ID of the inventory job payload.
 */
/**
 * @typedef InventoryPage
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} item_total
 * @property {string} [next_id]
 * @property {string} type
 */
/**
 * @typedef InventoryPayload
 * @property {string} [expiration_date] - The expiration date of the inventory item.
 * @property {number} [price_effective] - The effective price of the inventory item.
 * @property {number} [price_marked] - The marked price of the inventory item.
 * @property {string} seller_identifier - The identifier of the seller.
 * @property {number} store_id - The ID of the store.
 * @property {string[]} [tags] - The tags associated with the inventory item.
 * @property {number} [total_quantity] - The total quantity of the inventory item.
 * @property {string} [trace_id] - The trace ID of the inventory payload.
 */
/**
 * @typedef InventoryRequest
 * @property {number} company_id
 * @property {ItemQuery} item
 * @property {InvSize[]} sizes
 */
/**
 * @typedef InventoryRequestSchemaV2
 * @property {Object} [meta] - Additional metadata for the inventory request.
 * @property {InventoryPayload[]} [payload] - The list of inventory payloads.
 */
/**
 * @typedef InventoryIdentifier
 * @property {string} [gtin_type]
 * @property {string} [gtin_value]
 * @property {boolean} [primary]
 */
/**
 * @typedef InventoryGeoLocation
 * @property {string} [type]
 * @property {number[]} [coordinates]
 */
/**
 * @typedef InventoryMobileNumber
 * @property {string} [number]
 * @property {number} [country_code]
 */
/**
 * @typedef InventoryAddress
 * @property {string} [address1]
 * @property {string} [pincode]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [state]
 * @property {InventoryGeoLocation} [lat_long]
 * @property {string} [country_code]
 */
/**
 * @typedef InventoryManager
 * @property {string} [name]
 * @property {string} [email]
 * @property {InventoryMobileNumber} [mobile_no]
 */
/**
 * @typedef InventoryStore
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {number} [uid]
 * @property {InventoryAddress} [address]
 * @property {InventoryManager} [manager]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef InventoryResponse
 * @property {InventoryStore} [store]
 * @property {string} [uid]
 * @property {string} [size]
 * @property {string} [inventory_updated_on]
 * @property {string} [seller_identifier]
 * @property {number} [item_id]
 * @property {number} [quantity]
 * @property {number} [price]
 * @property {number} [price_effective]
 * @property {number} [price_transfer]
 * @property {string} [currency]
 * @property {number} [sellable_quantity]
 * @property {CreatedBy} [created_by]
 * @property {CreatedBy} [modified_by]
 * @property {string} [expiration_date]
 * @property {InventoryIdentifier[]} [identifiers]
 */
/**
 * @typedef InventoryResponseItem
 * @property {InventoryPayload} [data]
 * @property {InventoryFailedReason} [reason]
 */
/**
 * @typedef InventoryResponsePaginated
 * @property {InventoryResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef InventorySellerResponse
 * @property {Object} [_custom_json] - Custom JSON data for the article.
 * @property {string} [added_on_store] - The date and time when the article was
 *   added to the store.
 * @property {Object} brand - The metadata of the brand.
 * @property {Object} company - The metadata of the company.
 * @property {string} country_of_origin - The country of origin of the article.
 * @property {string} [created_by] - The user who created the article.
 * @property {Object} dimension - The dimensions of the article.
 * @property {string} [expiration_date] - The expiration date of the article.
 * @property {boolean} fragile - Indicates if the article is fragile.
 * @property {string} fynd_article_code - The Fynd article code.
 * @property {string} fynd_item_code - The Fynd item code.
 * @property {Object} [fynd_meta] - The Fynd metadata of the article.
 * @property {Object} identifier - The identifier of the article.
 * @property {boolean} [is_active] - Indicates if the article is active.
 * @property {boolean} [is_set]
 * @property {number} item_id - The ID of the item.
 * @property {Object} manufacturer - The manufacturer of the article.
 * @property {Object} [meta] - Additional metadata for the article.
 * @property {string} [modified_by] - The user who modified the article.
 * @property {Object} price - The price metadata of the article.
 * @property {Quantities} [quantities]
 * @property {Object} [raw_meta] - The raw metadata of the article.
 * @property {Object} [return_config] - The return configuration of the article.
 * @property {string} seller_identifier - The seller identifier of the article.
 * @property {InventorySet} [set]
 * @property {string} size - The size of the article.
 * @property {string} [stage] - The stage of the article.
 * @property {Object} store - The metadata of the store.
 * @property {string[]} [tags] - The tags associated with the article.
 * @property {Object} [tax_identifier] - The tax identifier of the article.
 * @property {number} total_quantity - The total quantity of the article.
 * @property {string} [trace_id] - The trace ID of the article.
 * @property {boolean} [track_inventory] - Indicates if the inventory is tracked
 *   for the article.
 * @property {Trader1[]} [trader] - The traders associated with the article.
 * @property {string} uid - The unique identifier of the article.
 * @property {Object} weight - The weight of the article.
 */
/**
 * @typedef InventorySet
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {SizeDistribution} size_distribution
 */
/**
 * @typedef InventoryStockResponse
 * @property {Object[]} [items]
 * @property {InventoryPage} page
 */
/**
 * @typedef InventoryUpdateResponse
 * @property {InventoryResponseItem[]} [items]
 * @property {string} [message] - It is the success message of the inventory update.
 * @property {boolean} [success] - It is the success message of the inventory update.
 */
/**
 * @typedef InventoryValidationResponse
 * @property {Object} [data]
 * @property {string} [message]
 */
/**
 * @typedef InvoiceCredSerializer
 * @property {boolean} [enabled]
 * @property {string} [password]
 * @property {string} [username]
 */
/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */
/**
 * @typedef ItemQuery
 * @property {number} [brand_uid]
 * @property {string} [item_code]
 * @property {number} [uid]
 */
/**
 * @typedef Items
 * @property {number} [cancelled]
 * @property {string[]} [cancelled_records]
 * @property {number} [company_id]
 * @property {UserCommon} [created_by]
 * @property {string} [created_on]
 * @property {number} [failed]
 * @property {string[]} [failed_records]
 * @property {string} [file_path]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {UserCommon} [modified_by]
 * @property {string} [modified_on]
 * @property {number} [retry]
 * @property {string} [stage]
 * @property {number} [succeed]
 * @property {number} [total]
 * @property {string} [tracking_url]
 */
/**
 * @typedef PriceRange
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef ProductPriceRangeSchema
 * @property {PriceRange} [effective]
 * @property {PriceRange} [marked]
 * @property {string} [currency]
 */
/**
 * @typedef LimitedProductData
 * @property {Object} [attributes]
 * @property {string} [country_of_origin]
 * @property {Object} [identifier]
 * @property {string[]} [images]
 * @property {string} [item_code]
 * @property {string} [name]
 * @property {ProductPriceRangeSchema} [price]
 * @property {number} [quantity]
 * @property {string} [short_description]
 * @property {string[]} [sizes]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef ListSizeGuide
 * @property {SizeGuideResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [closing]
 * @property {boolean} open
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 */
/**
 * @typedef LocationIntegrationType
 * @property {string} [inventory]
 * @property {string} [order]
 */
/**
 * @typedef LocationListSerializer
 * @property {Object[]} [filters]
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 */
/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */
/**
 * @typedef Logo
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 * @property {string} [secure_url]
 * @property {string} [url]
 */
/**
 * @typedef MOQData
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 * @property {number} [minimum]
 */
/**
 * @typedef ManufacturerResponse
 * @property {string} address - The address of the manufacturer.
 * @property {boolean} is_default - Indicates if it is the default manufacturer.
 * @property {string} name - The name of the manufacturer.
 */
/**
 * @typedef ManufacturerResponse1
 * @property {string} [address]
 * @property {boolean} [is_default]
 * @property {string} [name]
 */
/**
 * @typedef Media
 * @property {Object} [meta]
 * @property {string} [type]
 * @property {string} url
 */
/**
 * @typedef Media1
 * @property {string} landscape - It is the landscape cdn url for the category.
 * @property {string} logo - It is the logo cdn url for the category.
 * @property {string} portrait - It is the portrait cdn url for the category.
 */
/**
 * @typedef Media2
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef Meta
 * @property {GuideHeaders} [headers]
 * @property {GuideValues[]} [values]
 * @property {string} [unit]
 */
/**
 * @typedef GuideHeaders
 * @property {Header} [col_1]
 * @property {Header} [col_2]
 * @property {Header} [col_3]
 * @property {Header} [col_4]
 * @property {Header} [col_5]
 * @property {Header} [col_6]
 * @property {Header} [col_7]
 * @property {Header} [col_8]
 * @property {Header} [col_9]
 * @property {Header} [col_10]
 */
/**
 * @typedef GuideValues
 * @property {string} [col_1]
 * @property {string} [col_2]
 * @property {string} [col_3]
 * @property {string} [col_4]
 * @property {string} [col_5]
 * @property {string} [col_6]
 * @property {string} [col_7]
 * @property {string} [col_8]
 * @property {string} [col_9]
 * @property {string} [col_10]
 */
/**
 * @typedef Header
 * @property {string} [value]
 * @property {boolean} [convertable]
 */
/**
 * @typedef MetaDataListingFilterMetaResponse
 * @property {string} [display]
 * @property {string[]} [filter_types]
 * @property {string} [key]
 * @property {Object[]} [units]
 */
/**
 * @typedef MetaDataListingFilterResponse
 * @property {MetaDataListingFilterMetaResponse[]} [data]
 */
/**
 * @typedef MetaDataListingResponse
 * @property {MetaDataListingFilterResponse} filter
 * @property {MetaDataListingSortResponse} sort
 */
/**
 * @typedef MetaDataListingSortMetaResponse
 * @property {string} [display]
 * @property {string} [key]
 */
/**
 * @typedef MetaDataListingSortResponse
 * @property {MetaDataListingSortMetaResponse[]} [data]
 */
/**
 * @typedef MetaFields
 * @property {string} key - The key of the metadata. Should be a non-empty
 *   string and length should not exceed 30 characters.
 * @property {string} value - The value of the metadata. Should be a non-empty
 *   string and length should not exceed 100 characters.
 */
/**
 * @typedef NetQuantity
 * @property {string} [unit] - The unit of measurement used for the net quantity
 *   of the product.
 * @property {number} [value] - The value of the net quantity of the product.
 */
/**
 * @typedef NetQuantityResponse
 * @property {string} [unit]
 * @property {number} [value]
 */
/**
 * @typedef NextSchedule
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef OptInPostRequest
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {boolean} [enabled]
 * @property {string} opt_level
 * @property {string} [platform]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {CompanyBrandDetail[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OptinAddress
 * @property {string} [address1]
 * @property {string} [state]
 * @property {string} [pincode]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [country_code]
 */
/**
 * @typedef OptinDocument
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [legal_name]
 * @property {boolean} [verified]
 * @property {string} [url]
 */
/**
 * @typedef OptinBusinessCountryInfo
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {Object} [currency]
 * @property {string} [timezone]
 */
/**
 * @typedef OptinCompanyDetail
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [business_info]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {OptinBusinessCountryInfo} [business_country_info]
 * @property {OptinAddress} [address]
 * @property {OptinDocument[]} [documents]
 * @property {number[]} [brands]
 * @property {string[]} [notification_emails]
 * @property {Object} [warnings]
 * @property {string} [stage]
 */
/**
 * @typedef OptinCompanyMetrics
 * @property {number} [brand]
 * @property {string} [company]
 * @property {number} [store]
 */
/**
 * @typedef OptinStoreDetails
 * @property {StoreDetail[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OwnerAppItemResponse
 * @property {Object} [size_promotion_threshold]
 * @property {Object} [alt_text]
 * @property {boolean} [is_cod]
 * @property {boolean} [is_gift]
 * @property {Object} [moq]
 * @property {Object} [seo]
 * @property {Object} [_custom_json] - Custom JSON data for the item
 * @property {MetaFields[]} [_custom_meta] - Custom meta fields for the item
 */
/**
 * @typedef PTErrorResponse
 * @property {string} [code]
 * @property {Object} [errors]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
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
 * @property {number} [total] - Total number of items.
 */
/**
 * @typedef PageResponse
 * @property {string} [current] - It is the current page of the page response schema.
 * @property {boolean} [has_next] - It is the bool indicates if there is a next page.
 * @property {boolean} [has_previous] - It is the bool indicates if there is a
 *   previous page.
 * @property {number} [item_total] - It is the total number of item present for
 *   the filter.
 * @property {number} [size] - It is the size of each page.
 */
/**
 * @typedef PageResponse1
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef PageResponseType
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} next
 * @property {number} total_count
 */
/**
 * @typedef Price
 * @property {string} [currency]
 * @property {number} [max_effective]
 * @property {number} [max_marked]
 * @property {number} [min_effective]
 * @property {number} [min_marked]
 */
/**
 * @typedef Price1
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef PriceArticle
 * @property {string} [currency]
 * @property {number} [effective]
 * @property {number} [marked]
 * @property {Object} [tp_notes]
 * @property {number} [transfer]
 */
/**
 * @typedef PriceMeta
 * @property {string} currency - The currency used for the prices.
 * @property {number} effective - The effective price.
 * @property {number} marked - The marked price.
 * @property {Object} [tp_notes] - Additional notes for the transfer price.
 * @property {number} transfer - The transfer price.
 * @property {string} [updated_at] - The date and time of the last update.
 */
/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {CategoriesResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Product
 * @property {Object} [_custom_json]
 * @property {number[]} [all_company_ids]
 * @property {string[]} [all_identifiers]
 * @property {Object[]} [all_sizes]
 * @property {Object} [attributes]
 * @property {Brand} [brand]
 * @property {number} [brand_uid]
 * @property {Object} [category]
 * @property {string} [category_slug]
 * @property {number} [category_uid]
 * @property {string} [color]
 * @property {number} [company_id]
 * @property {string} [country_of_origin]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string} [currency]
 * @property {Object} [custom_order]
 * @property {number[]} [departments]
 * @property {string} [description]
 * @property {string[]} [highlights]
 * @property {string} [hsn_code]
 * @property {string} [id]
 * @property {string} [image_nature]
 * @property {Image[]} [images]
 * @property {boolean} [is_active]
 * @property {boolean} [is_dependent]
 * @property {boolean} [is_expirable]
 * @property {boolean} [is_image_less_product]
 * @property {boolean} [is_physical]
 * @property {boolean} [is_set]
 * @property {string} [item_code]
 * @property {string} [item_type]
 * @property {string[]} [l3_mapping]
 * @property {Media[]} [media]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {Object} [moq]
 * @property {boolean} [multi_size]
 * @property {string} [name]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {number} [no_of_boxes]
 * @property {string} [pending]
 * @property {string} [primary_color]
 * @property {string[]} [product_group_tag]
 * @property {ProductPublished} [product_publish]
 * @property {ReturnConfigResponse} [return_config]
 * @property {string} [short_description]
 * @property {string} [size_guide]
 * @property {Object[]} [sizes]
 * @property {string} [slug]
 * @property {string} [stage]
 * @property {string[]} [tags]
 * @property {Object} [tax_identifier]
 * @property {Object} [teaser_tag]
 * @property {string} [template_tag]
 * @property {Trader[]} [trader]
 * @property {number} [uid]
 * @property {Object} [variant_group]
 * @property {Object} [variant_media]
 * @property {Object} [variants]
 * @property {VerifiedBy} [verified_by]
 * @property {string} [verified_on]
 */
/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */
/**
 * @typedef ProductBrand
 * @property {string} [type]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {Object} [logo]
 * @property {PageAction} [action]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef ProductBulkAssets
 * @property {string} [batch_id]
 * @property {number} [company_id]
 * @property {string} url
 * @property {Object} user
 */
/**
 * @typedef ProductBulkRequest
 * @property {number} [cancelled]
 * @property {Object[]} [cancelled_records]
 * @property {number} [company_id]
 * @property {UserDetail1} [created_by]
 * @property {string} [created_on]
 * @property {number} [failed]
 * @property {Object[]} [failed_records]
 * @property {string} [file_path]
 * @property {boolean} [is_active]
 * @property {UserDetail1} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [stage]
 * @property {number} [succeed]
 * @property {ProductTemplate} [template]
 * @property {string} [template_tag]
 * @property {number} [total]
 */
/**
 * @typedef InventoryBulkJob
 * @property {number} [company_id] - The ID of the company.
 * @property {string} [file_path] - The file path of the company.
 */
/**
 * @typedef ProductBulkResponse
 * @property {string} [batch_id]
 */
/**
 * @typedef InventoryBulkResponse
 * @property {string} [batch_id]
 */
/**
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductBundleItem
 * @property {number} max_quantity
 * @property {number} min_quantity
 * @property {number} product_uid
 */
/**
 * @typedef ProductBundleRequest
 * @property {string} choice
 * @property {string} [company_id]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {Object} [meta]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string[]} [page_visibility]
 * @property {ProductBundleItem[]} products
 * @property {boolean} [same_store_assignment]
 * @property {string} slug
 * @property {boolean} auto_add_to_cart
 * @property {boolean} auto_select
 * @property {boolean} allow_remove
 * @property {boolean} prefer_single_shipment
 * @property {boolean} allow_individual_return
 * @property {boolean} allow_individual_cancel
 */
/**
 * @typedef ProductBundleUpdateRequest
 * @property {string} choice
 * @property {string} [company_id]
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {Object} [meta]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string[]} [page_visibility]
 * @property {boolean} [allow_individual_cancel]
 * @property {boolean} [allow_individual_return]
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {boolean} [prefer_single_shipment]
 * @property {ProductBundleItem[]} products
 * @property {boolean} [same_store_assignment]
 * @property {string} slug
 */
/**
 * @typedef ProductConfigurationDownloads
 * @property {Object[]} [data]
 * @property {boolean} [multivalue]
 */
/**
 * @typedef ProductCreateUpdateSizesSchema
 * @property {string} [size]
 * @property {number} [price]
 * @property {number} [price_effective]
 * @property {number} [price_transfer]
 * @property {string} [currency]
 * @property {number} [item_length]
 * @property {number} [item_width]
 * @property {number} [item_height]
 * @property {number} [item_weight]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [item_weight_unit_of_measure]
 * @property {boolean} [track_inventory]
 * @property {GTIN[]} [identifiers]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 */
/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {Object} [_custom_json]
 * @property {string} [action]
 * @property {Object} [attributes]
 * @property {number} brand_uid
 * @property {string} [bulk_job_id]
 * @property {string} category_slug
 * @property {string} [change_request_id]
 * @property {number} company_id
 * @property {string} country_of_origin
 * @property {string} currency
 * @property {CustomOrder} [custom_order]
 * @property {number[]} departments
 * @property {string} [description]
 * @property {string[]} [highlights]
 * @property {boolean} [is_active]
 * @property {boolean} [is_dependent]
 * @property {boolean} [is_image_less_product]
 * @property {boolean} [is_set]
 * @property {string} item_code
 * @property {string} item_type
 * @property {Media[]} [media]
 * @property {boolean} [multi_size]
 * @property {string} name
 * @property {NetQuantity} [net_quantity]
 * @property {number} [no_of_boxes]
 * @property {string[]} [product_group_tag]
 * @property {ProductPublish1} [product_publish]
 * @property {ReturnConfig} return_config
 * @property {string} [short_description]
 * @property {string} [size_guide]
 * @property {ProductCreateUpdateSizesSchema[]} sizes
 * @property {string} slug
 * @property {string[]} [tags]
 * @property {TaxIdentifier} tax_identifier
 * @property {TeaserTag} [teaser_tag]
 * @property {string} template_tag
 * @property {Trader[]} trader
 * @property {Object} [variant_group]
 * @property {Object} [variant_media]
 * @property {Object} [variants]
 */
/**
 * @typedef ProductDetail
 * @property {Object} [attributes]
 * @property {ProductBrand} [brand]
 * @property {string} [color]
 * @property {string} [description]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {boolean} [has_variant]
 * @property {string[]} [highlights]
 * @property {string} [image_nature]
 * @property {string} [item_code]
 * @property {string} [item_type]
 * @property {Media[]} [medias]
 * @property {string} [name]
 * @property {string} [product_online_date]
 * @property {Object} [promo_meta]
 * @property {number} [rating]
 * @property {number} [rating_count]
 * @property {string} [short_description]
 * @property {string[]} [similars]
 * @property {string} slug
 * @property {Object} [teaser_tag]
 * @property {string[]} [tryouts]
 * @property {string} [type]
 * @property {number} [uid]
 */
/**
 * @typedef ProductDetailAttribute
 * @property {string} [key]
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef ProductDetailGroupedAttribute
 * @property {ProductDetailAttribute[]} [details]
 * @property {string} [title]
 */
/**
 * @typedef PatchProductDownloadsDataResponse
 * @property {string} [created_on]
 * @property {CreatedBy} [created_by]
 * @property {string} [task_id]
 * @property {string} [modified_on]
 * @property {number} [seller_id]
 * @property {string} [url]
 * @property {string} [status]
 * @property {string[]} [notification_emails]
 * @property {string} [completed_on]
 */
/**
 * @typedef PatchProductDownloadsResponse
 * @property {PatchProductDownloadsDataResponse} [data]
 */
/**
 * @typedef ProductDownloadFilters
 * @property {string[]} brands
 * @property {string[]} catalogue_types
 * @property {string[]} templates
 */
/**
 * @typedef CreateProductDownloadsDataResponse
 * @property {string} [created_on]
 * @property {string} [type]
 * @property {string} [task_id]
 * @property {ProductDownloadFilters} [filters]
 * @property {CreatedBy} [created_by]
 * @property {string} [_id]
 * @property {Object[]} [notification_emails]
 * @property {string} [modified_on]
 * @property {string} [status]
 * @property {number} [seller_id]
 * @property {Stats} [stats]
 */
/**
 * @typedef CreateProductDownloadsResponse
 * @property {CreateProductDownloadsDataResponse} [data]
 */
/**
 * @typedef GetProductDownloadsResponse
 * @property {string} [modified_on]
 * @property {string} [url]
 * @property {string} [status]
 * @property {string} [completed_on]
 * @property {CreatedBy} [created_by]
 * @property {string} [created_on]
 * @property {number} [seller_id]
 * @property {string} [task_id]
 * @property {string} [id]
 */
/**
 * @typedef ProductDownloadsResponse
 * @property {ProductTemplateExportResponse[]} [items] - The items of the job.
 * @property {Page} [page]
 */
/**
 * @typedef ProductFilters
 * @property {ProductFiltersKey} key
 * @property {ProductFiltersValue[]} values
 */
/**
 * @typedef ProductFiltersKey
 * @property {string} display
 * @property {string} [kind]
 * @property {string} [logo]
 * @property {string} name
 * @property {string[]} [operators]
 */
/**
 * @typedef ProductFiltersValue
 * @property {number} [count]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {string} display
 * @property {string} [display_format]
 * @property {boolean} is_selected
 * @property {number} [max]
 * @property {number} [min]
 * @property {string} [query_format]
 * @property {number} [selected_max]
 * @property {number} [selected_min]
 * @property {string} [value]
 */
/**
 * @typedef ApplicationCategoryAction
 * @property {CategoryPageAction} [page]
 * @property {string} [type]
 */
/**
 * @typedef ApplicationCategoryItem
 * @property {Object} [_custom_json]
 * @property {ApplicationCategoryAction} [action]
 * @property {number} [id]
 * @property {CategoryImage} [logo]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef CategoryPageAction
 * @property {CategoryQuery} [query]
 * @property {string} [type]
 */
/**
 * @typedef CategoryQuery
 * @property {string[]} [category]
 */
/**
 * @typedef CategoryImage
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef ProductListingDetail
 * @property {Object} [attributes]
 * @property {ProductBrand} [brand]
 * @property {string} [color]
 * @property {string} [description]
 * @property {string} [discount]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {boolean} [has_variant]
 * @property {string[]} [highlights]
 * @property {string} [image_nature]
 * @property {string} [item_code]
 * @property {string} [item_type]
 * @property {Media[]} [medias]
 * @property {string} [name]
 * @property {ProductListingPrice} [price]
 * @property {string} [product_online_date]
 * @property {Object} [promo_meta]
 * @property {number} [rating]
 * @property {number} [rating_count]
 * @property {boolean} [sellable]
 * @property {string} [short_description]
 * @property {string[]} [similars]
 * @property {string} slug
 * @property {Object} [teaser_tag]
 * @property {string[]} [tryouts]
 * @property {string} [type]
 * @property {number} [uid]
 * @property {ApplicationCategoryItem[]} [categories]
 * @property {string[]} [_custom_meta]
 * @property {PageAction} [action]
 * @property {boolean} [is_tryout]
 * @property {number[]} [all_company_ids]
 * @property {boolean} [is_custom_order]
 * @property {string[]} [collections]
 */
/**
 * @typedef PageAction
 * @property {ActionObject} [page]
 * @property {string} [type]
 */
/**
 * @typedef ActionObject
 * @property {string} [type]
 * @property {Object} [query]
 */
/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
 * @property {Price1} [selling]
 */
/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductListingResponseV2
 * @property {ProductSchemaV2[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductVerificationModel
 * @property {Object} [rejected_fields]
 * @property {string} [status]
 * @property {number} [brand_uid]
 * @property {string} [created_on]
 * @property {number[]} [company_ids]
 * @property {string} [item_code]
 * @property {string} [remark]
 * @property {CreatedBy} [created_by]
 * @property {string} [modified_on]
 * @property {string} [slug]
 * @property {CreatedBy} [modified_by]
 * @property {number} [item_id]
 * @property {string} [id]
 */
/**
 * @typedef ProductPublish
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */
/**
 * @typedef ProductPublish1
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */
/**
 * @typedef ProductPublished
 * @property {boolean} [is_set]
 * @property {number} [product_online_date]
 */
/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */
/**
 * @typedef ProductReturnConfigBaseSerializer
 * @property {boolean} returnable - Boolean Flag for item returnable
 * @property {number} time - Valid return time for an item
 * @property {string} unit - Unit of return config days|hours
 */
/**
 * @typedef CategorySubSchema
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef CategoryProduct
 * @property {CategorySubSchema} [l3]
 * @property {CategorySubSchema} [l1]
 * @property {CategorySubSchema} [l2]
 */
/**
 * @typedef ProductSchemaV2
 * @property {CategoryProduct} [category]
 * @property {Object} [_custom_json]
 * @property {number[]} [all_company_ids]
 * @property {string[]} [all_identifiers]
 * @property {Object[]} [all_sizes]
 * @property {Object} [attributes]
 * @property {Brand} [brand]
 * @property {number} [brand_uid]
 * @property {string} [category_slug]
 * @property {number} [category_uid]
 * @property {string} [color]
 * @property {number} [company_id]
 * @property {string} [country_of_origin]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string} [currency]
 * @property {Object} [custom_order]
 * @property {number[]} [departments]
 * @property {string} [description]
 * @property {string[]} [highlights]
 * @property {string} [hsn_code]
 * @property {string} [id]
 * @property {string} [image_nature]
 * @property {Image[]} [images]
 * @property {boolean} [is_active]
 * @property {boolean} [is_dependent]
 * @property {boolean} [is_expirable]
 * @property {boolean} [is_image_less_product]
 * @property {boolean} [is_physical]
 * @property {boolean} [is_set]
 * @property {string} [item_code]
 * @property {string} [item_type]
 * @property {string[]} [l3_mapping]
 * @property {Media[]} [media]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {Object} [moq]
 * @property {boolean} [multi_size]
 * @property {string} [name]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {number} [no_of_boxes]
 * @property {string} [pending]
 * @property {string} [primary_color]
 * @property {string[]} [product_group_tag]
 * @property {ProductPublish} [product_publish]
 * @property {ReturnConfigResponse} [return_config]
 * @property {string} [short_description]
 * @property {string} [size_guide]
 * @property {Object[]} [sizes]
 * @property {string} [slug]
 * @property {string} [stage]
 * @property {string[]} [tags]
 * @property {Object} [tax_identifier]
 * @property {Object} [teaser_tag]
 * @property {string} [template_tag]
 * @property {Trader[]} [trader]
 * @property {number} [uid]
 * @property {Object} [variant_group]
 * @property {Object} [variant_media]
 * @property {Object} [variants]
 * @property {VerifiedBy} [verified_by]
 * @property {string} [verified_on]
 */
/**
 * @typedef ProductSize
 * @property {number} max
 * @property {number} min
 */
/**
 * @typedef ProductSizeDeleteDataResponse
 * @property {number} [company_id]
 * @property {number} [item_id]
 * @property {string} [size]
 */
/**
 * @typedef ProductSizeDeleteResponse
 * @property {ProductSizeDeleteDataResponse} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef ProductSortOn
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [value]
 * @property {string} [display]
 * @property {string} [logo]
 */
/**
 * @typedef ProductSortOnv2
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [value]
 * @property {string} [display]
 * @property {string} [logo]
 */
/**
 * @typedef ProductTagsViewResponse
 * @property {string[]} [items]
 */
/**
 * @typedef ProductTemplate
 * @property {string[]} [attributes]
 * @property {string[]} [categories]
 * @property {Object} [created_by]
 * @property {Object} [modified_by]
 * @property {string} [created_on]
 * @property {string[]} [departments]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_expirable]
 * @property {boolean} [is_physical]
 * @property {string} [logo]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} slug
 * @property {string} [tag]
 */
/**
 * @typedef ProductTemplateDownloadsExport
 * @property {ProductTemplateExportFilterRequest} [filters]
 * @property {string[]} [notification_emails] - The list of the emails to be
 *   notified after the completion of the job.
 * @property {string} [type] - This is the type of the file for the export.
 */
/**
 * @typedef ProductTemplateExportFilterRequest
 * @property {string[]} [brands] - The list of the brands that needs to be exported.
 * @property {string[]} catalogue_types - The list of the type of the catalog
 *   such as set, standard and composite.
 * @property {string} [from_date] - The modified on date from which the data
 *   needs to be exported.
 * @property {string[]} templates - The list of the templates that needs to be exported.
 * @property {string} [to_date] - The modified on date till when the data needs
 *   to be exported.
 */
/**
 * @typedef ProductTemplateExportResponse
 * @property {string} [trigger_on]
 * @property {string} [id]
 * @property {Object} [template_tags]
 * @property {string} [completed_on] - Completion datetime of the job
 * @property {Object} [created_by] - The user that created the job.
 * @property {Object} [filters] - The filters that needs to be exported.
 * @property {string} [modified_on] - Modification date of the job
 * @property {string[]} [notification_emails] - The notification emails for the job.
 * @property {number} seller_id - The seller id that needs to be exported.
 * @property {string} [status] - The status of the job.
 * @property {string} task_id - The task id of the job.
 * @property {string} [type] - The type of file that needs to be exported.
 * @property {string} [url] - The filters that needs to be exported.
 */
/**
 * @typedef ProductVariants
 * @property {number} [brand_uid]
 * @property {number} [category_uid]
 * @property {string} [item_code]
 * @property {Media[]} [media]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef CompanyVerificationStats
 * @property {number} [verified]
 * @property {number} [total]
 */
/**
 * @typedef CompanyVerificationResponse
 * @property {number} [uid]
 * @property {string} [name]
 * @property {CompanyVerificationStats} [stats]
 */
/**
 * @typedef ProductVariantsResponse
 * @property {Page} [page]
 * @property {ProductVariants[]} [variants]
 */
/**
 * @typedef Properties
 * @property {Object} [brand_uid]
 * @property {Object} [category_slug]
 * @property {Object} [command]
 * @property {Object} [country_of_origin]
 * @property {Object} [currency]
 * @property {Object} [custom_order]
 * @property {Object} [description]
 * @property {Object} [highlights]
 * @property {Object} [hsn_code]
 * @property {Object} [is_active]
 * @property {Object} [is_dependent]
 * @property {Object} [item_code]
 * @property {Object} [item_type]
 * @property {Object} [media]
 * @property {Object} [multi_size]
 * @property {Object} [name]
 * @property {Object} [no_of_boxes]
 * @property {Object} [product_group_tag]
 * @property {Object} [product_publish]
 * @property {Object} [return_config]
 * @property {Object} [short_description]
 * @property {Object} [size_guide]
 * @property {Object} [sizes]
 * @property {Object} [slug]
 * @property {Object} [tags]
 * @property {Object} [teaser_tag]
 * @property {Object} [trader]
 * @property {Object} [trader_type]
 * @property {Object} [variants]
 */
/**
 * @typedef Quantities
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [sellable]
 */
/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [damaged]
 * @property {Quantity} [not_available]
 * @property {Quantity} [order_committed]
 * @property {Quantity} [sellable]
 */
/**
 * @typedef Quantity
 * @property {number} [count]
 */
/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */
/**
 * @typedef ReturnConfig
 * @property {boolean} returnable
 * @property {number} [time]
 * @property {string} [unit]
 */
/**
 * @typedef ReturnConfig1
 * @property {boolean} [returnable] - Indicates if the item is returnable.
 * @property {number} [time] - The return time in days or hours.
 * @property {string} [unit] - The unit of return time.
 */
/**
 * @typedef ReturnConfig2
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */
/**
 * @typedef ReturnConfigResponse
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */
/**
 * @typedef Sitemap
 * @property {number} [priority]
 * @property {string} [frequency]
 */
/**
 * @typedef ApplicationItemSeoAction
 * @property {Object} [page]
 * @property {string} type
 */
/**
 * @typedef ApplicationItemSeoBreadcrumbs
 * @property {string} [url]
 * @property {Object} [action]
 */
/**
 * @typedef ApplicationItemSeoMetaTagItem
 * @property {string} key
 * @property {string} value
 */
/**
 * @typedef ApplicationItemSeoMetaTags
 * @property {string} title
 * @property {ApplicationItemSeoMetaTagItem[]} [items]
 */
/**
 * @typedef Metatags
 * @property {string} [title]
 * @property {ApplicationItemSeoMetaTags[]} [items]
 */
/**
 * @typedef SizePromotionThreshold
 * @property {string} [threshold_type]
 * @property {number} [threshold_value]
 */
/**
 * @typedef SEOData
 * @property {string} [description]
 * @property {string} [title]
 * @property {Sitemap} [sitemap]
 * @property {ApplicationItemSeoBreadcrumbs[]} [breadcrumbs]
 * @property {Metatags[]} [meta_tags]
 * @property {string} [canonical_url]
 */
/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */
/**
 * @typedef SearchableAttribute
 * @property {string} key - The attribute key to search on. This key matches the
 *   solr document key
 * @property {string} name - The name of key to search on. This is for
 *   displaying purposes on platform
 * @property {number} priority - Order in which the searchable attribute should
 *   kick in. Higher the priority, higher the weight considered while searching
 */
/**
 * @typedef SecondLevelChild
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {ThirdLevelChild[]} [childs]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */
/**
 * @typedef SitemapDetail
 * @property {number} [priority]
 * @property {string} [frequency]
 */
/**
 * @typedef SeoDetail
 * @property {string} [description]
 * @property {string} [title]
 * @property {SitemapDetail} [sitemap]
 * @property {ApplicationItemSeoBreadcrumbs[]} [breadcrumbs]
 * @property {Metatags[]} [meta_tags]
 * @property {string} [canonical_url]
 */
/**
 * @typedef SetSize
 * @property {number} pieces
 * @property {string} size
 */
/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */
/**
 * @typedef VariantTypesResponse
 * @property {VariantTypeItem[]} [items]
 */
/**
 * @typedef VariantTypeItem
 * @property {string} [name] - Name of the item
 * @property {string} [key] - Key of the item
 * @property {string[]} [type] - Array of item types
 * @property {Object} [image_config] - Configuration for the image
 */
/**
 * @typedef SingleProductResponse
 * @property {ProductSchemaV2} [data]
 */
/**
 * @typedef Size
 * @property {string} [display]
 * @property {boolean} [is_available]
 * @property {number} [quantity]
 * @property {string} [value]
 */
/**
 * @typedef SizeDistribution
 * @property {SetSize[]} sizes
 */
/**
 * @typedef SizeGuideResponse
 * @property {string} [image]
 * @property {Object} [created_by] - The user who created the size guide.
 * @property {Object} [modified_by] - The user who modified the size guide.
 * @property {boolean} [active]
 * @property {number} [brand_id]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {Object} [guide]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [subtitle]
 * @property {string} [tag]
 * @property {string} [title]
 */
/**
 * @typedef Time
 * @property {number} [hour]
 * @property {number} [minute]
 */
/**
 * @typedef Timing
 * @property {Time} [closing]
 * @property {string} [weekday]
 * @property {Time} [opening]
 * @property {boolean} [open]
 */
/**
 * @typedef StoreItem
 * @property {string} [stage]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [modified_on]
 * @property {UserSchemaCustom} [modified_by]
 * @property {Manager} [manager]
 * @property {string[]} [notification_emails]
 * @property {string} [verified_on]
 * @property {UserSchemaCustom} [verified_by]
 * @property {IntegrationType} [integration_type]
 * @property {number} [company_id]
 * @property {Document[]} [documents]
 * @property {string} [created_on]
 * @property {Address} [address]
 * @property {UserSchemaCustom} [created_by]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {Timing[]} [timing]
 * @property {string} [store_type]
 */
/**
 * @typedef UserSchemaCustom
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef Manager
 * @property {string} [name]
 * @property {string} [email]
 * @property {MobileNo} [mobile_no]
 */
/**
 * @typedef MobileNo
 * @property {number} [country_code]
 * @property {string} [number]
 */
/**
 * @typedef IntegrationType
 * @property {string} [order]
 * @property {string} [inventory]
 */
/**
 * @typedef Address
 * @property {string} [country_code]
 * @property {string} [address1]
 * @property {string} [city]
 * @property {string} [address2]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {string} [landmark]
 * @property {string} [state]
 */
/**
 * @typedef StoreDetail
 * @property {Object[]} [additional_contacts]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {string} [display_name]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [store_type]
 * @property {Timing[]} [timing]
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {UserSchemaCustom} [modified_by]
 * @property {Manager} [manager]
 * @property {string[]} [notification_emails]
 * @property {string} [verified_on]
 * @property {UserSchemaCustom} [verified_by]
 * @property {IntegrationType} [integration_type]
 * @property {Document[]} [documents]
 * @property {Address} [address]
 * @property {UserSchemaCustom} [created_by]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef StoreMeta
 * @property {number} id
 */
/**
 * @typedef SuccessResponse
 * @property {boolean} [success]
 */
/**
 * @typedef SuccessResponse1
 * @property {boolean} [success]
 * @property {number} [uid]
 */
/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code]
 * @property {string} [hsn_code_id]
 * @property {string} [reporting_hsn]
 */
/**
 * @typedef TaxSlab
 * @property {number} [cess]
 * @property {string} effective_date
 * @property {number} rate
 * @property {number} threshold
 */
/**
 * @typedef TeaserTag
 * @property {string} [tag]
 * @property {string} [url]
 */
/**
 * @typedef TemplateDetails
 * @property {string[]} [attributes]
 * @property {string[]} [categories]
 * @property {string[]} [departments]
 * @property {string} [description]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {boolean} [is_archived]
 * @property {boolean} is_expirable
 * @property {boolean} is_physical
 * @property {string} [logo]
 * @property {string} [name]
 * @property {string} slug
 * @property {string} [tag]
 */
/**
 * @typedef TemplateValidationData
 * @property {GlobalValidation} [global_validation]
 * @property {Object} [template_validation]
 */
/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TemplatesValidationResponse
 * @property {TemplateValidationData} [data]
 * @property {TemplateDetails} [template_details]
 */
/**
 * @typedef ThirdLevelChild
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {Object[]} [childs]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef Trader
 * @property {string[]} [address]
 * @property {string} name
 * @property {string} [type]
 */
/**
 * @typedef Trader1
 * @property {string[]} address
 * @property {string} name
 * @property {string} type
 */
/**
 * @typedef Trader2
 * @property {string[]} [address]
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef UpdateCollection
 * @property {Action} [action]
 * @property {string} [uid]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {CollectionBadge} [badge]
 * @property {CollectionBanner} [banners]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {CollectionImage} [logo]
 * @property {Object} [meta]
 * @property {string} [modified_by] - User info.
 * @property {string} [name]
 * @property {number} [priority]
 * @property {boolean} [published]
 * @property {CollectionQuery[]} [query]
 * @property {SeoDetail} [seo]
 * @property {string} [slug]
 * @property {string} [sort_on]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [is_searchable]
 */
/**
 * @typedef UpdateSearchConfigurationRequest
 * @property {string} application_id - The application id where custom search
 *   configuration is set
 * @property {number} company_id - The company id where custom search configuration is set
 * @property {Object} [created_by] - The user who created the search configuration.
 * @property {string} [created_on] - The date and time when the search
 *   configuration was created.
 * @property {boolean} [is_proximity_enabled] - Flag indicating if proximity
 *   search is enabled for this attribute.
 * @property {Object} [modified_by] - The user who modified the search configuration.
 * @property {string} [modified_on] - The date and time when the search
 *   configuration was last modified.
 * @property {number} [proximity] - Proximity distance configuration
 * @property {SearchableAttribute[]} [searchable_attributes] - The searchable
 *   attributes defined on the application.
 */
/**
 * @typedef UpdateSearchConfigurationResponse
 * @property {boolean} [success]
 */
/**
 * @typedef UpdatedResponse
 * @property {number[]} [items_not_updated]
 * @property {string} [message]
 */
/**
 * @typedef UserCommon
 * @property {number} [company_id]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef UserDetail
 * @property {string} [contact] - The contact details of the user.
 * @property {boolean} [super_user] - A flag indicating whether the user is a super user.
 * @property {string} user_id - The user ID of the user.
 * @property {string} username - The username of the user.
 */
/**
 * @typedef UserDetail1
 * @property {string} [full_name]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef UserInfo
 * @property {string} [email]
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef UserInfo1
 * @property {string} [email] - The email address of the user.
 * @property {string} [uid] - The unique ID of the user.
 * @property {string} [user_id] - The ID of the user.
 * @property {string} [username] - The username of the user.
 */
/**
 * @typedef UserSerializer
 * @property {string} [contact] - The contact information of the user.
 * @property {string} [user_id] - The unique ID of the user.
 * @property {string} [username] - The username of the user.
 */
/**
 * @typedef UserSerializer1
 * @property {string} [_id]
 * @property {string} [contact]
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef UserSerializer2
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef UserSerializer3
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef ValidateIdentifier
 * @property {string} gtin_type
 * @property {string} gtin_value
 * @property {boolean} [primary]
 */
/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 * @property {string} [message]
 */
/**
 * @typedef ValidateSizeGuide
 * @property {boolean} [active]
 * @property {number} [brand_id]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {Guide} [guide]
 * @property {string} [id]
 * @property {string} [image]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string} [subtitle]
 * @property {string} [tag]
 * @property {string} title
 */
/**
 * @typedef VerifiedBy
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef WeightResponse
 * @property {boolean} is_default - Indicates if it is the default weight.
 * @property {number} shipping - The shipping weight.
 * @property {string} unit - The unit of weight.
 */
/**
 * @typedef WeightResponse1
 * @property {number} [shipping]
 * @property {string} [unit]
 */
/**
 * @typedef CreatedBy
 * @property {string} [username]
 * @property {string} [user_id]
 */
/**
 * @typedef ModifiedBy
 * @property {string} [username]
 * @property {string} [user_id]
 */
/**
 * @typedef Marketplaces
 * @property {number[]} [brand_ids]
 * @property {string} [app_id]
 * @property {boolean} [enabled]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string} [opt_level]
 * @property {number} [company_id]
 * @property {Object} [modified_by]
 * @property {number[]} [store_ids]
 * @property {string} [modified_on]
 * @property {string} [platforms]
 * @property {string} [_id]
 */
/**
 * @typedef GetAllMarketplaces
 * @property {Marketplaces[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateMarketplaceOptinRequest
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {boolean} [enabled]
 * @property {string} [opt_level]
 * @property {string} [platform]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef UpdateMarketplaceOptinRequest
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {boolean} [enabled]
 * @property {string} [opt_level]
 * @property {string} [platform]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef CreateMarketplaceOptinResponse
 * @property {number[]} [store_ids]
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {string} [opt_level]
 * @property {string} [platform]
 * @property {boolean} [enabled]
 * @property {CreatedBy} [created_by]
 * @property {CreatedBy} [modified_by]
 * @property {string} [app_id]
 */
/**
 * @typedef GetProductTemplateSlugItems
 * @property {string[]} [attributes]
 * @property {string[]} [departments]
 * @property {boolean} [is_active]
 * @property {string} [tag]
 * @property {boolean} [is_physical]
 * @property {string} [description]
 * @property {string} [logo]
 * @property {boolean} [is_archived]
 * @property {string} [slug]
 * @property {string[]} [categories]
 * @property {boolean} [is_expirable]
 * @property {string} [name]
 * @property {string} [id]
 */
/**
 * @typedef GetProductTemplateSlugResponse
 * @property {Page} [page]
 * @property {GetProductTemplateSlugItems[]} [items]
 */
/**
 * @typedef UpdateMarketplaceOptinResponse
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {string} [app_id]
 * @property {boolean} [enabled]
 * @property {string} [opt_level]
 * @property {string} [platform]
 * @property {number[]} [store_ids]
 * @property {Object} [created_by]
 * @property {Object} [modified_by]
 */
/**
 * @typedef AutocompleteRequestSchema
 * @property {Object} [query_suggestion]
 * @property {Object} [product_suggestion]
 * @property {Object} [collection_suggestion]
 * @property {Object} [brand_suggestion]
 * @property {Object} [category_suggestion]
 */
/**
 * @typedef AutocompleteUpsertResponseSchema
 * @property {string} [message]
 * @property {string} [id]
 * @property {boolean} [success]
 */
/**
 * @typedef AutocompleteErrorResponseSchema
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef AutocompleteResponseSchema
 * @property {string} [id]
 * @property {Object} [query_suggestion]
 * @property {Object} [product_suggestion]
 * @property {Object} [collection_suggestion]
 * @property {Object} [brand_suggestion]
 * @property {Object} [category_suggestion]
 */
/**
 * @typedef ProductListingActionPage
 * @property {string} [type]
 * @property {Object} [query]
 * @property {Object} [params]
 */
/**
 * @typedef ProductListingAction
 * @property {string} [type]
 * @property {ProductListingActionPage} [page]
 */
/**
 * @typedef AutocompleteItem
 * @property {Media} [logo]
 * @property {string} [display]
 * @property {string} [type]
 * @property {Object} [_custom_json]
 * @property {ProductListingAction} [action]
 */
/**
 * @typedef AutocompletePreviewResponseSchema
 * @property {AutocompleteItem[]} [items]
 */
/**
 * @typedef CreateAppPriceFactoryRequestSchema
 * @property {string} [name]
 * @property {string} [code]
 * @property {boolean} [is_active]
 * @property {string[]} [factory_type_ids]
 * @property {number[]} [department_ids]
 * @property {string} [application_id]
 * @property {string} [factory_type]
 * @property {string} [currency]
 * @property {string} [currency_symbol]
 */
/**
 * @typedef CreateAppPriceFactoryResponse
 * @property {string} [factory_type] - Type of the factory.
 * @property {boolean} [is_active] - Indicates whether the factory is active or not.
 * @property {string} [code] - Code associated with the factory.
 * @property {string[]} [factory_type_ids] - Array of unique identifiers
 *   associated with the factory type.
 * @property {string} [currency] - Currency associated with the factory.
 * @property {string} [application_id] - Unique identifier for the application.
 * @property {string} [created_on] - Date and time when the factory was created.
 * @property {CreatedBy} [created_by]
 * @property {CreatedBy} [modified_by]
 * @property {string} [name] - Name of the factory.
 * @property {number[]} [department_ids] - Array of department identifiers
 *   associated with the factory.
 * @property {string} [modified_on] - Date and time when the factory was last modified.
 * @property {string} [_id] - Unique identifier for the factory.
 */
/**
 * @typedef ErrorDetails
 * @property {number} [status_code]
 */
/**
 * @typedef AppPriceFactory
 * @property {string} [_id]
 * @property {string} application_id
 * @property {number[]} department_ids
 * @property {string} factory_type
 * @property {string[]} factory_type_ids
 * @property {string} code
 * @property {string} name
 * @property {boolean} is_active
 * @property {string} currency
 * @property {Object} [created_by]
 * @property {Object} [modified_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef EditAppPriceFactoryRequestSchema
 * @property {string} [name]
 * @property {string} [code]
 * @property {boolean} [is_active]
 * @property {string[]} [factory_type_ids]
 * @property {number[]} [department_ids]
 * @property {string} [application_id]
 * @property {string} [factory_type]
 * @property {string} [currency]
 * @property {string} [currency_symbol]
 */
/**
 * @typedef GetAppPriceFactoryResponse
 * @property {AppPriceFactory[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateAppPriceFactoryProduct
 * @property {number} [item_id]
 * @property {number} [marked_price]
 * @property {number} [selling_price]
 * @property {string} [seller_identifier]
 * @property {string} [zone]
 * @property {string} [action]
 */
/**
 * @typedef PriceFactorySizes
 * @property {string} [size_name]
 * @property {string} [seller_identifier]
 * @property {number} [marked_price]
 * @property {number} [selling_price]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 */
/**
 * @typedef CompanySizes
 * @property {string} [size_name]
 * @property {string} [seller_identifier]
 * @property {number} [marked_price]
 * @property {number} [selling_price]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 */
/**
 * @typedef CreateAppPriceFactoryProductItem
 * @property {string} [name]
 * @property {number} [item_id]
 * @property {string} [seller_identifier]
 * @property {number} [marked_price]
 * @property {number} [selling_price]
 * @property {string} [zone]
 * @property {string} [command]
 */
/**
 * @typedef CreatePriceFactoryProductRequest
 * @property {CreateAppPriceFactoryProductItem[]} [items]
 */
/**
 * @typedef CreateAppPriceFactoryProductResponse
 * @property {number} [item_id]
 * @property {string} [item_name]
 * @property {string} [item_code]
 * @property {string} [brand]
 * @property {string} [category]
 * @property {string[]} [factory_type_id]
 * @property {Media[]} [media]
 * @property {PriceFactorySizes[]} [sizes]
 * @property {CompanySizes[]} [company_sizes]
 */
/**
 * @typedef UpdateAppPriceFactoryProductRequest
 * @property {PriceFactorySizes[]} [sizes]
 */
/**
 * @typedef UpdateAppPriceFactoryProductResponse
 * @property {number} [item_id]
 * @property {string} [zone_id]
 * @property {Media[]} [media]
 * @property {CompanySizes[]} [company_sizes]
 * @property {PriceFactorySizes[]} [sizes]
 */
/**
 * @typedef CreateAppPriceFactoryProductRequest
 * @property {CreateAppPriceFactoryProduct[]} [items]
 */
/**
 * @typedef FailedRecordsData
 * @property {number} [item_id]
 * @property {string} [error]
 */
/**
 * @typedef CreatePriceFactoryProductResponse
 * @property {number} [total_records]
 * @property {number} [success_records]
 * @property {number} [failed_records]
 * @property {FailedRecordsData[]} [failed_records_data]
 * @property {string} [stage]
 */
/**
 * @typedef CreateAppPriceFactoryProductsResponse
 * @property {CreateAppPriceFactoryProductResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateAppPriceFactoryProductBulkJobRequest
 * @property {string} [file_path]
 * @property {string} [file_type]
 * @property {string} [job_type]
 */
/**
 * @typedef CreateAppPriceFactoryProductExportJobRequest
 * @property {boolean} [sample_with_data]
 */
/**
 * @typedef CreateAppPriceFactoryProductExportJobResponse
 * @property {string} [job_type]
 * @property {number} [company_id]
 * @property {string} [file_type]
 * @property {string} [_id]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 * @property {Object} [modified_by]
 * @property {number} [success_records]
 * @property {string} [application_id]
 * @property {number} [total_records]
 * @property {string} [factory_id]
 * @property {boolean} [is_active]
 * @property {string} [stage]
 * @property {number} [failed_records]
 */
/**
 * @typedef AppPriceFactoryProductExportPollJobResponse
 * @property {string} [id]
 * @property {string} [stage]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {number} [total_records]
 * @property {number} [success_records]
 * @property {number} [failed_records]
 */
/**
 * @typedef CreateAppPriceFactoryProductExportJobPollResponse
 * @property {AppPriceFactoryProductExportPollJobResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateAppPriceFactoryProductBulkJobResponse
 * @property {string} [job_id]
 * @property {string} [status]
 * @property {string} [file_type]
 * @property {string} [stage]
 * @property {CreatedBy} [created_by]
 * @property {number} [company_id]
 * @property {string} [job_type]
 * @property {number} [total_records]
 * @property {boolean} [is_active]
 * @property {string} [modified_on]
 * @property {string} [application_id]
 * @property {string} [factory_id]
 * @property {CreatedBy} [modified_by]
 * @property {string} [created_on]
 * @property {number} [failed_records]
 * @property {string} [file_path]
 * @property {number} [success_records]
 * @property {string} [_id]
 */
/**
 * @typedef CreateAppPriceFactoryProductBulkJobValidateResponse
 * @property {string} [job_type]
 * @property {string} [file_type]
 * @property {string} [file_path]
 * @property {string} [job_id]
 * @property {string} [status]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {CreatedBy} [created_by]
 * @property {CreatedBy} [modified_by]
 */
/**
 * @typedef CreateAppPriceFactoryProductBulkJobPollResponse
 * @property {string} [status]
 * @property {number} [total_records]
 * @property {number} [success_records]
 * @property {number} [failed_records]
 * @property {string} [error_file]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 * @property {Object} [modified_by]
 * @property {string} [stage] - Current stage of the process
 * @property {boolean} [is_active] - Flag indicating if is active
 * @property {string} [_id] - Unique identifier for the response
 * @property {string} [error_file_url] - URL to the error file, if any
 */
/**
 * @typedef SynonymListResponseSchema
 * @property {SynonymResponseSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SynonymResponseSchema
 * @property {string} [created_on]
 * @property {string} [_id]
 * @property {string} [type]
 * @property {string[]} [synonyms]
 * @property {string} [key]
 * @property {string} [app_id]
 * @property {string} [modified_on]
 */
/**
 * @typedef SynonymListErrorResponseSchema
 * @property {string} [message]
 * @property {string} [error]
 */
/**
 * @typedef SynonymCreateRequestSchema
 * @property {string} [type]
 * @property {string} [key]
 * @property {string[]} [synonyms]
 */
/**
 * @typedef SynonymCreateResponseSchema
 * @property {boolean} [status]
 * @property {string} [_id]
 * @property {string} [message]
 */
/**
 * @typedef SynonymUpdateResponseSchema
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef SynonymCreateErrorSchema
 * @property {string} [message]
 * @property {Object} [errors]
 * @property {number} [code]
 */
/**
 * @typedef SynonymDeleteErrorSchema
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {string} [error]
 */
/**
 * @typedef SynonymDeleteResponseSchema
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef SynonymUploadRequestSchema
 * @property {string} [tracking_url]
 * @property {string} [file_type]
 * @property {string} [job_type]
 */
/**
 * @typedef SynonymUploadResponseSchema
 * @property {string} [job_type]
 * @property {string} [file_type]
 * @property {string} [tracking_url]
 * @property {string} [stage]
 * @property {boolean} [is_active]
 * @property {number} [total_records]
 * @property {number} [success_records]
 * @property {number} [failed_records]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [id]
 */
/**
 * @typedef SynonymExportResponseSchema
 * @property {string} [job_type]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {string} [application_id]
 */
/**
 * @typedef SynonymUploadErrorSchema
 * @property {string} [message]
 * @property {Object} [errors]
 * @property {number} [code]
 */
/**
 * @typedef SynonymBulkValidateRequestSchema
 * @property {string} [job_id]
 * @property {string} [tracking_url]
 * @property {string} [file_type]
 * @property {string} [job_type]
 */
/**
 * @typedef SynonymBulkValidateResponseSchema
 * @property {string} [job_id]
 * @property {string} [message]
 */
/**
 * @typedef SynonymBulkValidateErrorSchema
 * @property {string} [message]
 * @property {Object} [errors]
 * @property {number} [code]
 */
/**
 * @typedef SynonymBulkProcessRequestSchema
 * @property {string} [job_id]
 * @property {string} [tracking_url]
 * @property {string} [file_type]
 * @property {string} [job_type]
 */
/**
 * @typedef SynonymBulkProcessResponseSchema
 * @property {string} [job_id]
 * @property {string} [message]
 */
/**
 * @typedef SynonymBulkProcessErrorSchema
 * @property {string} [message]
 * @property {string} [errors]
 * @property {number} [code]
 */
/**
 * @typedef SynonymBulkPollResponseSchema
 * @property {number} [total_records]
 * @property {number} [success_records]
 * @property {number} [failed_records]
 * @property {string} [stage]
 * @property {string} [error_url]
 * @property {string} [message]
 */
/**
 * @typedef SynonymBulkPollErrorSchema
 * @property {string} [message]
 * @property {string} [error]
 */
/**
 * @typedef PriceFactoryErrorSchema
 * @property {Object} [departments]
 * @property {Object} [pricing_strategy]
 * @property {Object} [department_price_zonewise_department_ids]
 * @property {string[]} [factory_type]
 */
/**
 * @typedef PriceFactoryCreateErrorSchema
 * @property {string} [message]
 * @property {Object} [error]
 * @property {number} [code]
 */
/**
 * @typedef PriceGroupedByZone
 * @property {string} [discount]
 * @property {number[]} [store_id]
 * @property {number} [seller_id]
 * @property {string} [factory_type_id]
 * @property {DiscountMeta} [discount_meta]
 * @property {ProductListingPrice} [price]
 */
/**
 * @typedef AppPriceByIdResponse
 * @property {PriceGroupedByZone[]} [data]
 */
/**
 * @typedef ActionPage
 * @property {Object} [params] - Parameters that should be considered in path.
 * @property {Object} [query] - Query parameter if any to be added to the action.
 * @property {string} [url] - The URL for the action.
 * @property {PageType} type
 */
/**
 * @typedef {| "about-us"
 *   | "addresses"
 *   | "blog"
 *   | "brands"
 *   | "cards"
 *   | "cart"
 *   | "categories"
 *   | "brand"
 *   | "category"
 *   | "collection"
 *   | "collections"
 *   | "custom"
 *   | "contact-us"
 *   | "external"
 *   | "faq"
 *   | "freshchat"
 *   | "home"
 *   | "notification-settings"
 *   | "orders"
 *   | "page"
 *   | "policy"
 *   | "product"
 *   | "product-request"
 *   | "products"
 *   | "profile"
 *   | "profile-order-shipment"
 *   | "profile-basic"
 *   | "profile-company"
 *   | "profile-emails"
 *   | "profile-phones"
 *   | "rate-us"
 *   | "refer-earn"
 *   | "settings"
 *   | "shared-cart"
 *   | "tnc"
 *   | "track-order"
 *   | "wishlist"
 *   | "sections"
 *   | "form"
 *   | "cart-delivery"
 *   | "cart-payment"
 *   | "cart-review"
 *   | "login"
 *   | "register"
 *   | "shipping-policy"
 *   | "return-policy"
 *   | "order-status"
 *   | "locate-us"} PageType
 */
declare class CatalogPlatformModel {
}
declare namespace CatalogPlatformModel {
    export { StoreTagsResponseSchema, DiscountMeta, ProductMinMaxPrice, ProductPrice, ProductPricesPage, ProductPriceItem, ProductPrices, ProductFiltersKeysOnly, GetQueryFiltersKeysResponse, GetQueryFiltersValuesResponse, GTINSchema, SetSizeSchema, SizeDistributionSchema, InventorySetSchema, InvSizeSchema, InventoryRequestSchema, ItemQuerySchema, SuccessResponseSchema, CompanyDRIListResponseSchema, CompanyDRIResponseSchema, SearchResponseSchema, MerchandisingQuery, MerchandisingSearchQuery, MerchandisingFilter, MerchandisingRuleQuery, MerchandisingRulesList, MerchDataItem, MerchSearchQuery, MerchQueryCondition, MerchFilter, SuccessResponseMerchandising, MerchandiseQueryResponse, Filter, MerchandisingRuleQueryPart, MerchandisingRuleQueryPost, MerchandisingRuleSave, PinItem, PinItemRequest, PinRequest, PinResponse, HideAttribute, HideAttributeRequest, HideResponse, HideRequest, PostBoostAttribute, BoostAttribute, GetMerchandisingRuleBoostAction, PostMerchandisingRuleBoostAction, GetMerchandisingRuleBuryAction, Action, AllSizes, AllowSingleRequest, AppCatalogConfiguration, AppCategoryReturnConfig, AppCategoryReturnConfigResponse, AppConfiguration, AppConfigurationCreateDetail, AppConfigurationDetail, AppConfigurationsResponse, AppConfigurationsSort, ValueConfigType, AppConfigurationsFilter, AppConfigurationsFilterResponse, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentJson, ApplicationDepartmentListingResponse, ApplicationItemMOQ, ApplicationItemMeta, ApplicationItemSeoSitemap, ApplicationItemSEO, ApplicationProductListingResponse, OperatorsResponse, ApplicationStoreJson, AppReturnConfigResponse, ArticleAssignment, ArticleAssignment1, ArticleQuery, ArticleStoreResponse, AssignStore, AssignStoreArticle, AttributeDetailsGroup, AttributeMaster, AttributeMasterDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterSerializer, AttributeSchemaRange, AutoCompleteMedia, AutocompleteAction, AutocompletePageAction, AutocompleteResult, BannerImage, BaseAppCategoryReturnConfig, BaseAppCategoryReturnConfigResponse, Brand, BrandLogo, BrandItem, ApplicationCategoryListingSchema, ApplicationCategoryListingItemSchema, ApplicationBrandListingSchema, ApplicationBrandListingItemSchema, BrandListingResponse, BrandMeta, BrandMeta1, BulkAssetResponse, BulkHsnDataResponse, BulkHsnResponse, BulkHsnUpsert, BulkInventoryGet, BulkInventoryGetItems, BulkProductUploadJob, BulkProductJob, BulkJob, BulkProductRequest, BulkResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CategoriesResponse, Category, ChannelListResponse, ChannelDetailResponse, ChannelItem, ChannelValidation, ProductValidation, BrandValidationItem, CompanyValidation, LocationValidation, CategoryCreateResponse, CategoryItems, CategoryListingResponse, CategoryMapping, CategoryMappingValues, CategoryRequestBody, CategoryResponse, CategoryUpdateResponse, Child, CollectionBadge, CollectionBanner, CollectionBannerResponse, BadgeDetail, CollectionCreateResponse, CollectionDetailResponse, CollectionImage, CollectionImageResponse, CollectionItem, CollectionItemUpdate, CollectionListingFilter, CollectionListingFilterTag, CollectionListingFilterType, CollectionQuery, CollectionSchedule, CompanyBrandDetail, CompanyMeta, CompanyMeta1, CompanyOptIn, ConfigErrorResponse, ConfigSuccessResponse, ConfigurationBucketPoints, ConfigurationListing, ConfigurationListingFilter, ConfigurationListingFilterConfig, ConfigurationListingFilterValue, ConfigurationListingSort, ConfigurationListingSortConfig, ConfigurationProduct, ConfigurationProductDetailsGroups, ConfigurationProductDetailsConfig, ConfigurationProductDetailsAttribute, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariant, ConfigurationProductVariantConfig, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, CreateCollection, RerankingBoostItems, GetSearchRerankDetailResponse, BoostItem, GetSearchRerankItemResponse, GetSearchRerankResponse, CreateSearchRerankResponse, UpdateSearchRerankResponse, UpdateSearchRerankRequest, CreateSearchRerankRequest, CreateSearchConfigurationRequest, CreateSearchConfigurationResponse, CreateSearchKeyword, CreateUpdateAppReturnConfig, CrossSellingData, CrossSellingResponse, CustomOrder, DateMeta, DefaultKeyRequest, DeleteAppCategoryReturnConfig, DeleteResponse, DeleteSearchConfigurationResponse, DeleteSearchRerankConfigurationResponse, Department, DepartmentCategoryTree, PollErrorResponse, DepartmentCreateErrorResponse, ProductBundleCreateErrorResponse, DepartmentCreateResponse, DepartmentCreateUpdate, DepartmentErrorResponse, DepartmentIdentifier, DepartmentModel, DepartmentResponse, ValidationFailedResponse, DepartmentsResponse, DimensionResponse, DimensionResponse1, Document, EntityConfiguration, ErrorResponse, CategoryErrorResponse, FilerList, RawProduct, RawProductListingResponse, GTIN, GenderDetail, GetAddressSerializer, GetAllSizes, FilterResponse, ValueItem, GetAppCatalogConfiguration, GetAppCatalogEntityConfiguration, GetAutocompleteWordsData, GetAutocompleteWordsResponse, GetCatalogConfigurationDetailsProduct, FilterItem, CompareFilter, SimilarFilter, VariantFilter, DetailFilter, DetailFilterValues, DisplayType, SimilarItem, VariantItem, GetCatalogConfigurationDetailsSchemaListing, GetCatalogConfigurationMetaData, GetCollectionDetailNest, GetCollectionItemsResponse, GetCollectionListingResponse, GetCollectionQueryOptionResponse, GetCompanySerializer, ConditionItem, DataItem, ValueTypeItem, SortTypeItem, GetConfigMetadataResponse, GetConfigMetadataValues, AttributeType, DataType, ListingValueConfigType, SizeLimitConfiguration, ListingDataType, GetListingConfigResponse, GetConfigResponse, GetDepartment, GetInventories, GetInventoriesResponse, GetLocationSerializer, GetOptInPlatform, GetProductBundleCreateResponse, GetProductBundleListingResponse, GetProductBundleResponse, GetProducts, GetCollectionDetailResponse, CommonResponseSchemaCollection, GetQueryFiltersResponse, GetCollectionItemsResponseSchema, Page1, CollectionItemSchemaV2, CollectionItemUpdateSchema, CollectionQuerySchemaV2, ProductDetailV2, GetSearchConfigurationResponse, GetSearchWordsData, GetSearchWordsDetailResponse, GetSearchWordsResponse, GlobalValidation, Guide, HSNCodesResponse, HSNData, HSNDataInsertV2, Hierarchy, HsnCode, SlabObject, UpdateHsnCodesObject, UpdateHsnCode, HsnCodesListingResponseSchemaV2, HsnCodesObject, HsnUpsert, Image, ImageUrls, InvSize, InventoryBulkRequest, InventoryConfig, InventoryCreateRequest, InventoryExportAdvanceOption, InventoryExportFilter, InventoryExportJobResponse, InventoryExportItem, InventoryExportJob, InventoryExportJobListFilters, InventoryExportJobListStats, InventoryExportJobList, InventoryExportJobListResponse, InventoryExportQuantityFilter, ExportPatchRequest, InventoryExportRequest, EditInventoryDataDownloadsResponse, EditInventoryDownloadsResponse, InventoryExportFiltersResponse, Stats, InventoryExportResponse, InventoryFailedReason, InventoryJobDetailResponse, InventoryJobFilters, InventoryJobPayload, InventoryPage, InventoryPayload, InventoryRequest, InventoryRequestSchemaV2, InventoryIdentifier, InventoryGeoLocation, InventoryMobileNumber, InventoryAddress, InventoryManager, InventoryStore, InventoryResponse, InventoryResponseItem, InventoryResponsePaginated, InventorySellerIdentifierResponsePaginated, InventorySellerResponse, InventorySet, InventoryStockResponse, InventoryUpdateResponse, InventoryValidationResponse, InvoiceCredSerializer, InvoiceDetailsSerializer, ItemQuery, Items, PriceRange, ProductPriceRangeSchema, LimitedProductData, ListSizeGuide, LocationDayWiseSerializer, LocationIntegrationType, LocationListSerializer, LocationManagerSerializer, LocationTimingSerializer, Logo, MOQData, ManufacturerResponse, ManufacturerResponse1, Media, Media1, Media2, Meta, GuideHeaders, GuideValues, Header, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaFields, NetQuantity, NetQuantityResponse, NextSchedule, OptInPostRequest, OptinCompanyBrandDetailsView, OptinAddress, OptinDocument, OptinBusinessCountryInfo, OptinCompanyDetail, OptinCompanyMetrics, OptinStoreDetails, OwnerAppItemResponse, PTErrorResponse, Page, PageResponse, PageResponse1, PageResponseType, Price, Price1, PriceArticle, PriceMeta, ProdcutTemplateCategoriesResponse, Product, ProductAttributesResponse, ProductBrand, ProductBulkAssets, ProductBulkRequest, InventoryBulkJob, ProductBulkResponse, InventoryBulkResponse, ProductBulkRequestList, ProductBundleItem, ProductBundleRequest, ProductBundleUpdateRequest, ProductConfigurationDownloads, ProductCreateUpdateSizesSchema, ProductCreateUpdateSchemaV2, ProductDetail, ProductDetailAttribute, ProductDetailGroupedAttribute, PatchProductDownloadsDataResponse, PatchProductDownloadsResponse, ProductDownloadFilters, CreateProductDownloadsDataResponse, CreateProductDownloadsResponse, GetProductDownloadsResponse, ProductDownloadsResponse, ProductFilters, ProductFiltersKey, ProductFiltersValue, ApplicationCategoryAction, ApplicationCategoryItem, CategoryPageAction, CategoryQuery, CategoryImage, ProductListingDetail, PageAction, ActionObject, ProductListingPrice, ProductListingResponse, ProductListingResponseV2, ProductVerificationModel, ProductPublish, ProductPublish1, ProductPublished, ProductReturnConfigSerializer, ProductReturnConfigBaseSerializer, CategorySubSchema, CategoryProduct, ProductSchemaV2, ProductSize, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ProductSortOn, ProductSortOnv2, ProductTagsViewResponse, ProductTemplate, ProductTemplateDownloadsExport, ProductTemplateExportFilterRequest, ProductTemplateExportResponse, ProductVariants, CompanyVerificationStats, CompanyVerificationResponse, ProductVariantsResponse, Properties, Quantities, QuantitiesArticle, Quantity, QuantityBase, ReturnConfig, ReturnConfig1, ReturnConfig2, ReturnConfigResponse, Sitemap, ApplicationItemSeoAction, ApplicationItemSeoBreadcrumbs, ApplicationItemSeoMetaTagItem, ApplicationItemSeoMetaTags, Metatags, SizePromotionThreshold, SEOData, SearchKeywordResult, SearchableAttribute, SecondLevelChild, SellerPhoneNumber, SitemapDetail, SeoDetail, SetSize, SingleCategoryResponse, VariantTypesResponse, VariantTypeItem, SingleProductResponse, Size, SizeDistribution, SizeGuideResponse, Time, Timing, StoreItem, UserSchemaCustom, Manager, MobileNo, IntegrationType, Address, StoreDetail, StoreMeta, SuccessResponse, SuccessResponse1, TaxIdentifier, TaxSlab, TeaserTag, TemplateDetails, TemplateValidationData, TemplatesResponse, TemplatesValidationResponse, ThirdLevelChild, Trader, Trader1, Trader2, UpdateCollection, UpdateSearchConfigurationRequest, UpdateSearchConfigurationResponse, UpdatedResponse, UserCommon, UserDetail, UserDetail1, UserInfo, UserInfo1, UserSerializer, UserSerializer1, UserSerializer2, UserSerializer3, ValidateIdentifier, ValidateProduct, ValidateSizeGuide, VerifiedBy, WeightResponse, WeightResponse1, CreatedBy, ModifiedBy, Marketplaces, GetAllMarketplaces, CreateMarketplaceOptinRequest, UpdateMarketplaceOptinRequest, CreateMarketplaceOptinResponse, GetProductTemplateSlugItems, GetProductTemplateSlugResponse, UpdateMarketplaceOptinResponse, AutocompleteRequestSchema, AutocompleteUpsertResponseSchema, AutocompleteErrorResponseSchema, AutocompleteResponseSchema, ProductListingActionPage, ProductListingAction, AutocompleteItem, AutocompletePreviewResponseSchema, CreateAppPriceFactoryRequestSchema, CreateAppPriceFactoryResponse, ErrorDetails, AppPriceFactory, EditAppPriceFactoryRequestSchema, GetAppPriceFactoryResponse, CreateAppPriceFactoryProduct, PriceFactorySizes, CompanySizes, CreateAppPriceFactoryProductItem, CreatePriceFactoryProductRequest, CreateAppPriceFactoryProductResponse, UpdateAppPriceFactoryProductRequest, UpdateAppPriceFactoryProductResponse, CreateAppPriceFactoryProductRequest, FailedRecordsData, CreatePriceFactoryProductResponse, CreateAppPriceFactoryProductsResponse, CreateAppPriceFactoryProductBulkJobRequest, CreateAppPriceFactoryProductExportJobRequest, CreateAppPriceFactoryProductExportJobResponse, AppPriceFactoryProductExportPollJobResponse, CreateAppPriceFactoryProductExportJobPollResponse, CreateAppPriceFactoryProductBulkJobResponse, CreateAppPriceFactoryProductBulkJobValidateResponse, CreateAppPriceFactoryProductBulkJobPollResponse, SynonymListResponseSchema, SynonymResponseSchema, SynonymListErrorResponseSchema, SynonymCreateRequestSchema, SynonymCreateResponseSchema, SynonymUpdateResponseSchema, SynonymCreateErrorSchema, SynonymDeleteErrorSchema, SynonymDeleteResponseSchema, SynonymUploadRequestSchema, SynonymUploadResponseSchema, SynonymExportResponseSchema, SynonymUploadErrorSchema, SynonymBulkValidateRequestSchema, SynonymBulkValidateResponseSchema, SynonymBulkValidateErrorSchema, SynonymBulkProcessRequestSchema, SynonymBulkProcessResponseSchema, SynonymBulkProcessErrorSchema, SynonymBulkPollResponseSchema, SynonymBulkPollErrorSchema, PriceFactoryErrorSchema, PriceFactoryCreateErrorSchema, PriceGroupedByZone, AppPriceByIdResponse, ActionPage, PageType };
}
/** @returns {StoreTagsResponseSchema} */
declare function StoreTagsResponseSchema(): StoreTagsResponseSchema;
type StoreTagsResponseSchema = {
    tags?: string[];
    success?: boolean;
};
/** @returns {DiscountMeta} */
declare function DiscountMeta(): DiscountMeta;
type DiscountMeta = {
    start?: string;
    end?: string;
    timer?: boolean;
};
/** @returns {ProductMinMaxPrice} */
declare function ProductMinMaxPrice(): ProductMinMaxPrice;
type ProductMinMaxPrice = {
    min?: number;
    max?: number;
};
/** @returns {ProductPrice} */
declare function ProductPrice(): ProductPrice;
type ProductPrice = {
    selling?: ProductMinMaxPrice;
    effective?: ProductMinMaxPrice;
    marked?: ProductMinMaxPrice;
    currency?: string;
};
/** @returns {ProductPricesPage} */
declare function ProductPricesPage(): ProductPricesPage;
type ProductPricesPage = {
    type?: string;
    current?: number;
    size?: number;
    item_total?: number;
    has_previous?: boolean;
    has_next?: boolean;
};
/** @returns {ProductPriceItem} */
declare function ProductPriceItem(): ProductPriceItem;
type ProductPriceItem = {
    discount_meta?: DiscountMeta;
    product_name?: string;
    item_id?: number;
    factory_type_id?: string;
    price?: ProductPrice;
    store_id?: number;
    is_sellable?: boolean;
    seller_id?: number;
    delivery_zone_ids?: string[];
    sizes?: string[];
};
/** @returns {ProductPrices} */
declare function ProductPrices(): ProductPrices;
type ProductPrices = {
    data?: ProductPriceItem[];
    page?: ProductPricesPage;
};
/** @returns {ProductFiltersKeysOnly} */
declare function ProductFiltersKeysOnly(): ProductFiltersKeysOnly;
type ProductFiltersKeysOnly = {
    key: ProductFiltersKey;
};
/** @returns {GetQueryFiltersKeysResponse} */
declare function GetQueryFiltersKeysResponse(): GetQueryFiltersKeysResponse;
type GetQueryFiltersKeysResponse = {
    filters?: ProductFiltersKeysOnly[];
    operators?: any;
    sort_on?: ProductSortOn[];
};
/** @returns {GetQueryFiltersValuesResponse} */
declare function GetQueryFiltersValuesResponse(): GetQueryFiltersValuesResponse;
type GetQueryFiltersValuesResponse = {
    values: ProductFiltersValue[];
    page: Page;
};
/** @returns {GTINSchema} */
declare function GTINSchema(): GTINSchema;
type GTINSchema = {
    gtin_type: string;
    gtin_value: string;
    primary?: boolean;
};
/** @returns {SetSizeSchema} */
declare function SetSizeSchema(): SetSizeSchema;
type SetSizeSchema = {
    size: string;
    pieces: number;
};
/** @returns {SizeDistributionSchema} */
declare function SizeDistributionSchema(): SizeDistributionSchema;
type SizeDistributionSchema = {
    size?: SetSizeSchema[];
};
/** @returns {InventorySetSchema} */
declare function InventorySetSchema(): InventorySetSchema;
type InventorySetSchema = {
    quantity?: number;
    size_distribution?: SizeDistributionSchema;
    name?: string;
};
/** @returns {InvSizeSchema} */
declare function InvSizeSchema(): InvSizeSchema;
type InvSizeSchema = {
    item_height?: number;
    item_width?: number;
    item_length?: number;
    item_dimensions_unit_of_measure?: string;
    item_weight?: number;
    item_weight_unit_of_measure?: string;
    currency: string;
    quantity: number;
    store_code: string;
    identifiers: GTINSchema[];
    size: string;
    price?: number;
    price_effective: number;
    price_transfer?: number;
    expiration_date?: string;
    is_set?: boolean;
    set?: InventorySetSchema;
};
/** @returns {InventoryRequestSchema} */
declare function InventoryRequestSchema(): InventoryRequestSchema;
type InventoryRequestSchema = {
    company_id: number;
    sizes: InvSizeSchema[];
    item: ItemQuerySchema;
};
/** @returns {ItemQuerySchema} */
declare function ItemQuerySchema(): ItemQuerySchema;
type ItemQuerySchema = {
    uid?: number;
    item_code?: string;
    brand_uid?: number;
};
/** @returns {SuccessResponseSchema} */
declare function SuccessResponseSchema(): SuccessResponseSchema;
type SuccessResponseSchema = {
    success?: boolean;
};
/** @returns {CompanyDRIListResponseSchema} */
declare function CompanyDRIListResponseSchema(): CompanyDRIListResponseSchema;
type CompanyDRIListResponseSchema = {
    /**
     * - List of Company DRIs.
     */
    items?: CompanyDRIResponseSchema[];
    page?: Page;
};
/** @returns {CompanyDRIResponseSchema} */
declare function CompanyDRIResponseSchema(): CompanyDRIResponseSchema;
type CompanyDRIResponseSchema = {
    /**
     * - List of tags associated with the Company DRI.
     */
    tags?: string[];
    /**
     * - List of responsibilities of the Company DRI.
     */
    responsibilities?: string[];
    /**
     * - List of display names
     * for responsibilities.
     */
    responsibilities_display_name?: string[];
    /**
     * - Unique identifier for the Company DRI.
     */
    uid?: number;
    /**
     * - ID of the associated company.
     */
    company_id?: number;
    /**
     * - Status of the Company DRI (active or inactive).
     */
    status?: boolean;
    /**
     * - Contact information for the Company DRI.
     */
    contact?: any;
    /**
     * - Detailed contact information for the
     * Company DRI.
     */
    contact_details?: any;
};
/** @returns {SearchResponseSchema} */
declare function SearchResponseSchema(): SearchResponseSchema;
type SearchResponseSchema = {
    _id?: string;
    query?: MerchandisingQuery;
    is_active?: boolean;
    merchandising_rule_id?: string;
    rule_name?: string;
    application_id?: string;
    status?: string;
    zone_id?: string;
    _schedule?: any;
};
/** @returns {MerchandisingQuery} */
declare function MerchandisingQuery(): MerchandisingQuery;
type MerchandisingQuery = {
    query_condition?: string;
    query?: MerchandisingSearchQuery;
    filter?: MerchandisingFilter[];
};
/** @returns {MerchandisingSearchQuery} */
declare function MerchandisingSearchQuery(): MerchandisingSearchQuery;
type MerchandisingSearchQuery = {
    condition?: string;
    search_query?: string;
    synonyms?: string;
};
/** @returns {MerchandisingFilter} */
declare function MerchandisingFilter(): MerchandisingFilter;
type MerchandisingFilter = {
    attribute?: string;
    value?: string;
};
/** @returns {MerchandisingRuleQuery} */
declare function MerchandisingRuleQuery(): MerchandisingRuleQuery;
type MerchandisingRuleQuery = {
    condition: string;
    search_query: string;
    synonyms: boolean;
};
/** @returns {MerchandisingRulesList} */
declare function MerchandisingRulesList(): MerchandisingRulesList;
type MerchandisingRulesList = {
    data?: MerchDataItem[];
    page?: Page;
};
/** @returns {MerchDataItem} */
declare function MerchDataItem(): MerchDataItem;
type MerchDataItem = {
    query?: MerchSearchQuery;
    action?: string[];
    is_active?: boolean;
    merchandising_rule_id?: string;
    rule_name?: string;
    status?: string;
    zone_id?: string;
    application_id?: string;
};
/** @returns {MerchSearchQuery} */
declare function MerchSearchQuery(): MerchSearchQuery;
type MerchSearchQuery = {
    query_condition?: string;
    query?: MerchQueryCondition;
    filter?: MerchFilter[];
};
/** @returns {MerchQueryCondition} */
declare function MerchQueryCondition(): MerchQueryCondition;
type MerchQueryCondition = {
    condition?: string;
    search_query?: string;
    synonyms?: string;
};
/** @returns {MerchFilter} */
declare function MerchFilter(): MerchFilter;
type MerchFilter = {
    attribute?: string;
    value?: string;
};
/** @returns {SuccessResponseMerchandising} */
declare function SuccessResponseMerchandising(): SuccessResponseMerchandising;
type SuccessResponseMerchandising = {
    message?: string;
};
/** @returns {MerchandiseQueryResponse} */
declare function MerchandiseQueryResponse(): MerchandiseQueryResponse;
type MerchandiseQueryResponse = {
    message?: string;
    merchandising_rule_id?: string;
};
/** @returns {Filter} */
declare function Filter(): Filter;
type Filter = {
    attribute?: string;
    value?: string;
};
/** @returns {MerchandisingRuleQueryPart} */
declare function MerchandisingRuleQueryPart(): MerchandisingRuleQueryPart;
type MerchandisingRuleQueryPart = {
    filter?: Filter[];
    query_condition?: string;
    query?: any;
};
/** @returns {MerchandisingRuleQueryPost} */
declare function MerchandisingRuleQueryPost(): MerchandisingRuleQueryPost;
type MerchandisingRuleQueryPost = {
    query?: MerchandisingRuleQueryPart;
    zone_id?: string;
};
/** @returns {MerchandisingRuleSave} */
declare function MerchandisingRuleSave(): MerchandisingRuleSave;
type MerchandisingRuleSave = {
    rule_name: string;
    _schedule: CollectionSchedule;
    is_active: boolean;
};
/** @returns {PinItem} */
declare function PinItem(): PinItem;
type PinItem = {
    name: string;
    uid: number;
    position: number;
};
/** @returns {PinItemRequest} */
declare function PinItemRequest(): PinItemRequest;
type PinItemRequest = {
    action: string;
    item_id: string;
    position: number;
};
/** @returns {PinRequest} */
declare function PinRequest(): PinRequest;
type PinRequest = {
    action_value?: PinItemRequest[];
};
/** @returns {PinResponse} */
declare function PinResponse(): PinResponse;
type PinResponse = {
    data?: PinItem[];
};
/** @returns {HideAttribute} */
declare function HideAttribute(): HideAttribute;
type HideAttribute = {
    name: string;
    uid: number;
};
/** @returns {HideAttributeRequest} */
declare function HideAttributeRequest(): HideAttributeRequest;
type HideAttributeRequest = {
    action?: string;
    item_id?: number;
};
/** @returns {HideResponse} */
declare function HideResponse(): HideResponse;
type HideResponse = {
    data?: HideAttribute[];
};
/** @returns {HideRequest} */
declare function HideRequest(): HideRequest;
type HideRequest = {
    action_value?: HideAttributeRequest[];
};
/** @returns {PostBoostAttribute} */
declare function PostBoostAttribute(): PostBoostAttribute;
type PostBoostAttribute = {
    attribute: string;
    value: string;
    strength: number;
    action: string;
};
/** @returns {BoostAttribute} */
declare function BoostAttribute(): BoostAttribute;
type BoostAttribute = {
    attribute: string;
    value: string;
    strength: number;
};
/** @returns {GetMerchandisingRuleBoostAction} */
declare function GetMerchandisingRuleBoostAction(): GetMerchandisingRuleBoostAction;
type GetMerchandisingRuleBoostAction = {
    data?: BoostAttribute[];
};
/** @returns {PostMerchandisingRuleBoostAction} */
declare function PostMerchandisingRuleBoostAction(): PostMerchandisingRuleBoostAction;
type PostMerchandisingRuleBoostAction = {
    action_value?: PostBoostAttribute[];
};
/** @returns {GetMerchandisingRuleBuryAction} */
declare function GetMerchandisingRuleBuryAction(): GetMerchandisingRuleBuryAction;
type GetMerchandisingRuleBuryAction = {
    data?: BoostAttribute[];
};
/** @returns {Action} */
declare function Action(): Action;
type Action = {
    /**
     * - Type of action to be taken e.g, page.
     */
    type?: string;
    page?: ActionPage;
    popup?: ActionPage;
};
/** @returns {AllSizes} */
declare function AllSizes(): AllSizes;
type AllSizes = {
    identifiers?: ValidateIdentifier[];
    item_dimensions_unit_of_measure: string;
    item_height: number;
    item_length: number;
    item_weight: number;
    item_weight_unit_of_measure: string;
    item_width: number;
    size: string;
};
/** @returns {AllowSingleRequest} */
declare function AllowSingleRequest(): AllowSingleRequest;
type AllowSingleRequest = {
    allow_single: boolean;
};
/** @returns {AppCatalogConfiguration} */
declare function AppCatalogConfiguration(): AppCatalogConfiguration;
type AppCatalogConfiguration = {
    app_id: string;
    config_id?: string;
    config_type: string;
    /**
     * - The user who created the configuration.
     */
    created_by?: any;
    created_on?: string;
    id?: string;
    listing?: ConfigurationListing;
    /**
     * - The user who modified the configuration.
     */
    modified_by?: any;
    modified_on?: string;
    product?: ConfigurationProduct;
    type?: string;
};
/** @returns {AppCategoryReturnConfig} */
declare function AppCategoryReturnConfig(): AppCategoryReturnConfig;
type AppCategoryReturnConfig = {
    /**
     * - Unique identifier for L3 category
     */
    category_id: number;
    /**
     * - Return configuration details
     */
    return_config: any;
};
/** @returns {AppCategoryReturnConfigResponse} */
declare function AppCategoryReturnConfigResponse(): AppCategoryReturnConfigResponse;
type AppCategoryReturnConfigResponse = {
    /**
     * - Channel identifier
     */
    app_id?: string;
    /**
     * - Unique identifer of L3 category
     */
    category_id?: number;
    logo?: string;
    /**
     * - Name of L3 category
     */
    name?: string;
    return_config?: ProductReturnConfigBaseSerializer;
};
/** @returns {AppConfiguration} */
declare function AppConfiguration(): AppConfiguration;
type AppConfiguration = {
    app_id: string;
    config_id?: string;
    config_type: string;
    created_by?: any;
    created_on?: string;
    listing?: ConfigurationListing;
    modified_by?: any;
    modified_on?: string;
    product?: ConfigurationProduct;
    type?: string;
};
/** @returns {AppConfigurationCreateDetail} */
declare function AppConfigurationCreateDetail(): AppConfigurationCreateDetail;
type AppConfigurationCreateDetail = {
    app_id?: string;
    attributes?: AttributeDetailsGroup[];
    is_active: boolean;
    is_default: boolean;
    logo?: string;
    name?: string;
    priority: number;
    slug: string;
    template_slugs?: string[];
};
/** @returns {AppConfigurationDetail} */
declare function AppConfigurationDetail(): AppConfigurationDetail;
type AppConfigurationDetail = {
    id?: string;
    app_id?: string;
    attributes?: AttributeDetailsGroup[];
    is_active: boolean;
    is_default: boolean;
    logo?: string;
    name?: string;
    priority: number;
    slug: string;
    template_slugs?: string[];
};
/** @returns {AppConfigurationsResponse} */
declare function AppConfigurationsResponse(): AppConfigurationsResponse;
type AppConfigurationsResponse = {
    id?: string;
    app_id?: string;
    default_key?: string;
    is_active?: boolean;
    is_default?: boolean;
    key?: string;
    logo?: string;
    name?: string;
    priority?: number;
};
/** @returns {AppConfigurationsSort} */
declare function AppConfigurationsSort(): AppConfigurationsSort;
type AppConfigurationsSort = {
    app_id: string;
    default_key?: string;
    is_active: boolean;
    is_default: boolean;
    key: string;
    logo?: string;
    name?: string;
    priority: number;
};
/** @returns {ValueConfigType} */
declare function ValueConfigType(): ValueConfigType;
type ValueConfigType = {
    bucket_points?: any[];
    map?: any;
    sort?: string;
    condition?: string;
    value?: string;
};
/** @returns {AppConfigurationsFilter} */
declare function AppConfigurationsFilter(): AppConfigurationsFilter;
type AppConfigurationsFilter = {
    app_id: string;
    allow_single?: boolean;
    attribute_name?: string;
    value_config?: ValueConfigType;
    type?: string;
    is_active: boolean;
    is_default: boolean;
    key: string;
    logo?: string;
    name?: string;
    priority: number;
};
/** @returns {AppConfigurationsFilterResponse} */
declare function AppConfigurationsFilterResponse(): AppConfigurationsFilterResponse;
type AppConfigurationsFilterResponse = {
    id?: string;
    app_id?: string;
    allow_single?: boolean;
    attribute_name?: string;
    value_config?: ValueConfigType;
    type?: string;
    is_active?: boolean;
    is_default?: boolean;
    key?: string;
    logo?: string;
    name?: string;
    priority?: number;
};
/** @returns {ApplicationBrandJson} */
declare function ApplicationBrandJson(): ApplicationBrandJson;
type ApplicationBrandJson = {
    _custom_json: any;
};
/** @returns {ApplicationCategoryJson} */
declare function ApplicationCategoryJson(): ApplicationCategoryJson;
type ApplicationCategoryJson = {
    _custom_json: any;
};
/** @returns {ApplicationDepartment} */
declare function ApplicationDepartment(): ApplicationDepartment;
type ApplicationDepartment = {
    _custom_json?: any;
    app_id: string;
    is_active?: boolean;
    logo?: string;
    name?: string;
    uid: number;
};
/** @returns {ApplicationDepartmentJson} */
declare function ApplicationDepartmentJson(): ApplicationDepartmentJson;
type ApplicationDepartmentJson = {
    _custom_json: any;
};
/** @returns {ApplicationDepartmentListingResponse} */
declare function ApplicationDepartmentListingResponse(): ApplicationDepartmentListingResponse;
type ApplicationDepartmentListingResponse = {
    items?: ApplicationDepartment[];
    page: Page;
};
/** @returns {ApplicationItemMOQ} */
declare function ApplicationItemMOQ(): ApplicationItemMOQ;
type ApplicationItemMOQ = {
    /**
     * - The minimum quantity increment in which
     * the item can be purchased.
     */
    increment_unit?: number;
    /**
     * - The maximum quantity allowed for purchase.
     */
    maximum?: number;
    /**
     * - The minimum quantity required for purchase.
     */
    minimum?: number;
};
/** @returns {ApplicationItemMeta} */
declare function ApplicationItemMeta(): ApplicationItemMeta;
type ApplicationItemMeta = {
    /**
     * - Custom JSON data for the item
     */
    _custom_json?: any;
    /**
     * - Custom meta fields for the item
     */
    _custom_meta?: MetaFields[];
    /**
     * - Alternative text for the item's images
     */
    alt_text?: any;
    /**
     * - Whether the item is available for Cash on
     * Delivery (COD) or not
     */
    is_cod?: boolean;
    /**
     * - Whether the item is a gift or not
     */
    is_gift?: boolean;
    /**
     * - Minimum Order Quantity information for the item
     */
    moq?: any;
    /**
     * - Search Engine Optimization information for the item
     */
    seo?: any;
    /**
     * - Size level promotion
     * limitation information for item
     */
    size_promotion_threshold?: any;
};
/** @returns {ApplicationItemSeoSitemap} */
declare function ApplicationItemSeoSitemap(): ApplicationItemSeoSitemap;
type ApplicationItemSeoSitemap = {
    /**
     * - The SEO priority of the item
     */
    priority: number;
    /**
     * - The SEO frequency of the item
     */
    frequency: string;
};
/** @returns {ApplicationItemSEO} */
declare function ApplicationItemSEO(): ApplicationItemSEO;
type ApplicationItemSEO = {
    /**
     * - The SEO description of the item
     */
    description?: string;
    /**
     * - The SEO title of the item
     */
    title?: string;
    sitemap?: ApplicationItemSeoSitemap;
    breadcrumbs?: ApplicationItemSeoBreadcrumbs[];
    meta_tags?: ApplicationItemSeoMetaTags[];
    canonical_url?: string;
};
/** @returns {ApplicationProductListingResponse} */
declare function ApplicationProductListingResponse(): ApplicationProductListingResponse;
type ApplicationProductListingResponse = {
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    operators?: OperatorsResponse;
    page: Page;
    sort_on?: ProductSortOn[];
};
/** @returns {OperatorsResponse} */
declare function OperatorsResponse(): OperatorsResponse;
type OperatorsResponse = {
    btw?: string;
    lte?: string;
    gte?: string;
    gt?: string;
    lt?: string;
    nin?: string;
};
/** @returns {ApplicationStoreJson} */
declare function ApplicationStoreJson(): ApplicationStoreJson;
type ApplicationStoreJson = {
    _custom_json: any;
};
/** @returns {AppReturnConfigResponse} */
declare function AppReturnConfigResponse(): AppReturnConfigResponse;
type AppReturnConfigResponse = {
    created_by?: any;
    modified_by?: any;
    /**
     * - Channel identifier
     */
    app_id?: string;
    /**
     * - Count of L3 category return config set
     * for application
     */
    category_count?: number;
    /**
     * - Unique identifer of company
     */
    company_id?: number;
    /**
     * - Modification date
     */
    modified_on?: string;
    /**
     * - Configuration level of return
     * window category|product|no-return
     */
    return_config_level?: string;
};
/** @returns {ArticleAssignment} */
declare function ArticleAssignment(): ArticleAssignment;
type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
/** @returns {ArticleAssignment1} */
declare function ArticleAssignment1(): ArticleAssignment1;
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
/** @returns {ArticleQuery} */
declare function ArticleQuery(): ArticleQuery;
type ArticleQuery = {
    ignored_stores?: number[];
    item_id: number;
    size: string;
};
/** @returns {ArticleStoreResponse} */
declare function ArticleStoreResponse(): ArticleStoreResponse;
type ArticleStoreResponse = {
    name?: string;
    store_code?: string;
    store_type?: string;
    uid?: number;
};
/** @returns {AssignStore} */
declare function AssignStore(): AssignStore;
type AssignStore = {
    app_id: string;
    articles: AssignStoreArticle[];
    channel_identifier?: string;
    channel_type?: string;
    company_id?: number;
    pincode: string;
    store_ids?: number[];
};
/** @returns {AssignStoreArticle} */
declare function AssignStoreArticle(): AssignStoreArticle;
type AssignStoreArticle = {
    article_assignment?: ArticleAssignment;
    group_id?: string;
    meta?: any;
    quantity?: number;
    query?: ArticleQuery;
};
/** @returns {AttributeDetailsGroup} */
declare function AttributeDetailsGroup(): AttributeDetailsGroup;
type AttributeDetailsGroup = {
    display_type: string;
    is_active: boolean;
    key?: string;
    logo?: string;
    name: string;
    priority: number;
    slug?: string;
    unit?: string;
};
/** @returns {AttributeMaster} */
declare function AttributeMaster(): AttributeMaster;
type AttributeMaster = {
    allowed_values?: string[];
    format?: string;
    mandatory?: boolean;
    multi?: boolean;
    range?: AttributeSchemaRange;
    type: string;
};
/** @returns {AttributeMasterDetails} */
declare function AttributeMasterDetails(): AttributeMasterDetails;
type AttributeMasterDetails = {
    display_type: string;
};
/** @returns {AttributeMasterFilter} */
declare function AttributeMasterFilter(): AttributeMasterFilter;
type AttributeMasterFilter = {
    depends_on?: string[];
    indexing: boolean;
    priority?: number;
};
/** @returns {AttributeMasterMandatoryDetails} */
declare function AttributeMasterMandatoryDetails(): AttributeMasterMandatoryDetails;
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
/** @returns {AttributeMasterMeta} */
declare function AttributeMasterMeta(): AttributeMasterMeta;
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
/** @returns {AttributeMasterSerializer} */
declare function AttributeMasterSerializer(): AttributeMasterSerializer;
type AttributeMasterSerializer = {
    created_by?: any;
    created_on?: string;
    departments: string[];
    description?: string;
    details: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    filters: AttributeMasterFilter;
    is_nested?: boolean;
    logo?: string;
    modified_by?: any;
    modified_on?: string;
    name?: string;
    raw_key?: string;
    schema: AttributeMaster;
    slug: string;
    suggestion?: string;
    synonyms?: any;
    tags?: string[];
    unit?: string;
    variant?: boolean;
};
/** @returns {AttributeSchemaRange} */
declare function AttributeSchemaRange(): AttributeSchemaRange;
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
/** @returns {AutoCompleteMedia} */
declare function AutoCompleteMedia(): AutoCompleteMedia;
type AutoCompleteMedia = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
/** @returns {AutocompleteAction} */
declare function AutocompleteAction(): AutocompleteAction;
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
/** @returns {AutocompletePageAction} */
declare function AutocompletePageAction(): AutocompletePageAction;
type AutocompletePageAction = {
    params?: any;
    query?: any;
    type?: string;
    url?: string;
};
/** @returns {AutocompleteResult} */
declare function AutocompleteResult(): AutocompleteResult;
type AutocompleteResult = {
    _custom_json?: any;
    action?: AutocompleteAction;
    display?: string;
    logo?: AutoCompleteMedia;
};
/** @returns {BannerImage} */
declare function BannerImage(): BannerImage;
type BannerImage = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
/** @returns {BaseAppCategoryReturnConfig} */
declare function BaseAppCategoryReturnConfig(): BaseAppCategoryReturnConfig;
type BaseAppCategoryReturnConfig = {
    /**
     * - Channel identifier
     */
    app_id: string;
    /**
     * - Unique identifer of company
     */
    company_id: number;
    /**
     * - Category level return config details
     */
    data: AppCategoryReturnConfig[];
};
/** @returns {BaseAppCategoryReturnConfigResponse} */
declare function BaseAppCategoryReturnConfigResponse(): BaseAppCategoryReturnConfigResponse;
type BaseAppCategoryReturnConfigResponse = {
    data?: AppCategoryReturnConfigResponse[];
    page?: PageResponse1;
};
/** @returns {Brand} */
declare function Brand(): Brand;
type Brand = {
    logo?: Logo;
    name?: string;
    uid?: number;
};
/** @returns {BrandLogo} */
declare function BrandLogo(): BrandLogo;
type BrandLogo = {
    url?: string;
    type?: string;
};
/** @returns {BrandItem} */
declare function BrandItem(): BrandItem;
type BrandItem = {
    action?: Action;
    banners?: ImageUrls;
    departments?: number[];
    discount?: string;
    logo?: BrandLogo;
    name?: string;
    slug?: string;
    uid?: number;
};
/** @returns {ApplicationCategoryListingSchema} */
declare function ApplicationCategoryListingSchema(): ApplicationCategoryListingSchema;
type ApplicationCategoryListingSchema = {
    items?: ApplicationCategoryListingItemSchema[];
    page?: Page;
};
/** @returns {ApplicationCategoryListingItemSchema} */
declare function ApplicationCategoryListingItemSchema(): ApplicationCategoryListingItemSchema;
type ApplicationCategoryListingItemSchema = {
    /**
     * - Name of the category.
     */
    name?: string;
    /**
     * - URL of the category's logo.
     */
    logo?: string;
    /**
     * - List of department IDs.
     */
    departments?: number[];
    /**
     * - Attribute name of the category.
     */
    attr_name?: string;
    /**
     * - URL of the landscape banner.
     */
    landscape_url?: string;
    /**
     * - URL of the portrait banner.
     */
    portrait_url?: string;
    /**
     * - Custom JSON object for additional data.
     */
    _custom_json?: any;
    /**
     * - Priority of the category.
     */
    priority?: number;
    created_by?: CreatedBy;
    /**
     * - Timestamp when the category was created.
     */
    created_on?: string;
    modified_by?: ModifiedBy;
    /**
     * - Timestamp when the category was last modified.
     */
    modified_on?: string;
    /**
     * - Application ID associated with the category.
     */
    app_id?: string;
    /**
     * - Indicates whether the category is active.
     */
    is_active?: boolean;
    /**
     * - Unique identifier of the category.
     */
    uid?: number;
};
/** @returns {ApplicationBrandListingSchema} */
declare function ApplicationBrandListingSchema(): ApplicationBrandListingSchema;
type ApplicationBrandListingSchema = {
    items?: ApplicationBrandListingItemSchema[];
    page?: Page;
};
/** @returns {ApplicationBrandListingItemSchema} */
declare function ApplicationBrandListingItemSchema(): ApplicationBrandListingItemSchema;
type ApplicationBrandListingItemSchema = {
    /**
     * - Custom JSON object for additional data.
     */
    _custom_json?: any;
    /**
     * - Custom object for locale-specific
     * language data.
     */
    _locale_language?: any;
    /**
     * - URL of the brand's portrait banner.
     */
    brand_banner_portrait_url?: string;
    /**
     * - URL of the brand's landscape banner.
     */
    brand_banner_url?: string;
    /**
     * - URL of the brand's logo.
     */
    brand_logo_url?: string;
    /**
     * - Description of the brand.
     */
    description?: string;
    /**
     * - Name of the brand.
     */
    name?: string;
    /**
     * - Unique slug key for the brand.
     */
    slug_key?: string;
    /**
     * - Priority of the brand in listing.
     */
    priority?: number;
    /**
     * - Unique identifier of the brand.
     */
    uid?: number;
    /**
     * - Timestamp when the category was created.
     */
    created_on?: string;
    /**
     * - Timestamp when the category was created.
     */
    last_updated?: string;
    /**
     * - Indicates if the brand is active.
     */
    is_active?: boolean;
    /**
     * - List of department IDs associated with the brand.
     */
    departments?: number[];
};
/** @returns {BrandListingResponse} */
declare function BrandListingResponse(): BrandListingResponse;
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
/** @returns {BrandMeta} */
declare function BrandMeta(): BrandMeta;
type BrandMeta = {
    id: number;
    name: string;
};
/** @returns {BrandMeta1} */
declare function BrandMeta1(): BrandMeta1;
type BrandMeta1 = {
    id?: number;
    name?: string;
};
/** @returns {BulkAssetResponse} */
declare function BulkAssetResponse(): BulkAssetResponse;
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
/** @returns {BulkHsnDataResponse} */
declare function BulkHsnDataResponse(): BulkHsnDataResponse;
type BulkHsnDataResponse = {
    /**
     * - Flag indicating the success status of the
     * bulk HSN operation.
     */
    success?: boolean;
};
/** @returns {BulkHsnResponse} */
declare function BulkHsnResponse(): BulkHsnResponse;
type BulkHsnResponse = {
    data?: BulkHsnDataResponse;
};
/** @returns {BulkHsnUpsert} */
declare function BulkHsnUpsert(): BulkHsnUpsert;
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
/** @returns {BulkInventoryGet} */
declare function BulkInventoryGet(): BulkInventoryGet;
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
/** @returns {BulkInventoryGetItems} */
declare function BulkInventoryGetItems(): BulkInventoryGetItems;
type BulkInventoryGetItems = {
    cancelled?: number;
    cancelled_records?: string[];
    company_id?: number;
    created_by?: any;
    created_on?: string;
    failed?: number;
    failed_records?: string[];
    file_path?: string;
    id?: string;
    is_active?: boolean;
    modified_by?: any;
    modified_on?: string;
    stage?: string;
    succeed?: number;
    total?: number;
};
/** @returns {BulkProductUploadJob} */
declare function BulkProductUploadJob(): BulkProductUploadJob;
type BulkProductUploadJob = {
    /**
     * - The ID of the company
     */
    company_id?: number;
    /**
     * - Total records to be imported
     */
    total?: number;
    /**
     * - Successfully imported records
     */
    succeed?: number;
    /**
     * - The import stage
     */
    stage?: string;
    file_path?: string;
    /**
     * - Template tag for the import
     */
    template_tag?: string;
    tracking_url?: string;
};
/** @returns {BulkProductJob} */
declare function BulkProductJob(): BulkProductJob;
type BulkProductJob = {
    company_id?: number;
    template_tag?: string;
    product_type?: string;
    department?: string;
    file_path?: string;
};
/** @returns {BulkJob} */
declare function BulkJob(): BulkJob;
type BulkJob = {
    cancelled?: number;
    cancelled_records?: any[];
    company_id: number;
    /**
     * - The user who created the item.
     */
    created_by?: any;
    /**
     * - The date and time when the item was created.
     */
    created_on: string;
    custom_template_tag?: string;
    failed?: number;
    failed_records?: any[];
    file_path?: string;
    /**
     * - Whether the item is active or not.
     */
    is_active?: boolean;
    /**
     * - The user who last modified the item.
     */
    modified_by?: string;
    /**
     * - The date and time when the item was last modified.
     */
    modified_on?: string;
    stage?: string;
    succeed?: number;
    template_tag?: string;
    total?: number;
    tracking_url?: string;
};
/** @returns {BulkProductRequest} */
declare function BulkProductRequest(): BulkProductRequest;
type BulkProductRequest = {
    batch_id: string;
    company_id: number;
    data: any[];
    template_tag: string;
};
/** @returns {BulkResponse} */
declare function BulkResponse(): BulkResponse;
type BulkResponse = {
    batch_id: string;
    /**
     * - The user who created the item.
     */
    created_by?: any;
    /**
     * - The date and time when the item was created.
     */
    created_on: string;
    /**
     * - Whether the item is active or not.
     */
    is_active?: boolean;
    /**
     * - The user who last modified the item.
     */
    modified_by?: string;
    /**
     * - The date and time when the item was last modified.
     */
    modified_on?: string;
};
/** @returns {CatalogInsightBrand} */
declare function CatalogInsightBrand(): CatalogInsightBrand;
type CatalogInsightBrand = {
    article_freshness?: number;
    available_articles?: number;
    available_sizes?: number;
    name?: string;
    total_articles?: number;
    total_sizes?: number;
};
/** @returns {CatalogInsightItem} */
declare function CatalogInsightItem(): CatalogInsightItem;
type CatalogInsightItem = {
    count?: number;
    out_of_stock_count?: number;
    sellable_count?: number;
};
/** @returns {CatalogInsightResponse} */
declare function CatalogInsightResponse(): CatalogInsightResponse;
type CatalogInsightResponse = {
    brand_distribution?: CatalogInsightBrand;
    item?: CatalogInsightItem;
};
/** @returns {CategoriesResponse} */
declare function CategoriesResponse(): CategoriesResponse;
type CategoriesResponse = {
    name?: string;
    slug?: string;
    slug_key?: string;
    template_slug?: string;
    uid?: number;
};
/** @returns {Category} */
declare function Category(): Category;
type Category = {
    /**
     * - It is the details of the user who created
     * the category.
     */
    created_by?: any;
    /**
     * - It is Date and time when the category was created.
     */
    created_on?: string;
    /**
     * - It is the list of unique department the
     * category belongs to.
     */
    departments: number[];
    /**
     * - It is the list of category hierarchies
     * for each department of an L3 category.
     */
    hierarchy?: Hierarchy[];
    /**
     * - It is the unique identifier of the category.
     */
    id?: string;
    /**
     * - It is the flag indicating if the category is active.
     */
    is_active: boolean;
    /**
     * - It is the level of category
     */
    level: number;
    /**
     * - It is the mapping of the category in
     * different marketplaces.
     */
    marketplaces?: any;
    /**
     * - It is the details of the media such as banner and logo..
     */
    media?: any;
    /**
     * - It is the details of the user who last
     * modified the category.
     */
    modified_by?: any;
    /**
     * - It is the date and time when the category
     * was last modified.
     */
    modified_on?: string;
    /**
     * - It is the name of the category
     */
    name: string;
    /**
     * - It is the priority of the category.
     */
    priority?: number;
    /**
     * - It is the slug of the category.
     */
    slug?: string;
    /**
     * - It is the list of synonyms.
     */
    synonyms?: string[];
    /**
     * - It is the list of tryouts.
     */
    tryouts?: string[];
    /**
     * - It is the unique identifier of the category.
     */
    uid?: number;
};
/** @returns {ChannelListResponse} */
declare function ChannelListResponse(): ChannelListResponse;
type ChannelListResponse = {
    items?: ChannelItem[];
    page?: Page;
};
/** @returns {ChannelDetailResponse} */
declare function ChannelDetailResponse(): ChannelDetailResponse;
type ChannelDetailResponse = {
    created_on?: string;
    created_by?: CreatedBy;
    name?: string;
    logo?: string;
    validation?: ChannelValidation;
    _id?: string;
    description?: string;
    slug?: string;
    app_id?: string;
    modified_by?: CreatedBy;
    modified_on?: string;
    display_name?: string;
};
/** @returns {ChannelItem} */
declare function ChannelItem(): ChannelItem;
type ChannelItem = {
    logo?: string;
    modified_by?: CreatedBy;
    created_by?: CreatedBy;
    slug?: string;
    name?: string;
    app_id?: string;
    modified_on?: string;
    _id?: string;
    description?: string;
    validation?: ChannelValidation;
    created_on?: string;
    display_name?: string;
};
/** @returns {ChannelValidation} */
declare function ChannelValidation(): ChannelValidation;
type ChannelValidation = {
    product?: ProductValidation;
    brand?: BrandValidationItem;
    company?: CompanyValidation;
    location?: LocationValidation;
};
/** @returns {ProductValidation} */
declare function ProductValidation(): ProductValidation;
type ProductValidation = {
    gated_category_applicable?: boolean;
    imageless_products?: boolean;
    stage?: string;
};
/** @returns {BrandValidationItem} */
declare function BrandValidationItem(): BrandValidationItem;
type BrandValidationItem = {
    stage?: string;
    consent_doc_required?: boolean;
};
/** @returns {CompanyValidation} */
declare function CompanyValidation(): CompanyValidation;
type CompanyValidation = {
    bank_ac_required?: boolean;
    gst_required?: boolean;
    verified?: boolean;
};
/** @returns {LocationValidation} */
declare function LocationValidation(): LocationValidation;
type LocationValidation = {
    gst_required?: boolean;
    stage?: string;
};
/** @returns {CategoryCreateResponse} */
declare function CategoryCreateResponse(): CategoryCreateResponse;
type CategoryCreateResponse = {
    /**
     * - It is the message of the response from the category.
     */
    message?: string;
    /**
     * - It is the unique identifier of the category.
     */
    uid?: number;
};
/** @returns {CategoryItems} */
declare function CategoryItems(): CategoryItems;
type CategoryItems = {
    _custom_json?: any;
    action?: Action;
    banners?: ImageUrls;
    childs?: Child[];
    name?: string;
    slug?: string;
    uid?: number;
};
/** @returns {CategoryListingResponse} */
declare function CategoryListingResponse(): CategoryListingResponse;
type CategoryListingResponse = {
    data?: DepartmentCategoryTree[];
    departments?: DepartmentIdentifier[];
};
/** @returns {CategoryMapping} */
declare function CategoryMapping(): CategoryMapping;
type CategoryMapping = {
    /**
     * - It is the category id mapping for ajio platform.
     */
    ajio?: any;
    /**
     * - It is the category id mapping for facebook platform.
     */
    facebook?: any;
    /**
     * - It is the category id mapping for google platform.
     */
    google?: any;
};
/** @returns {CategoryMappingValues} */
declare function CategoryMappingValues(): CategoryMappingValues;
type CategoryMappingValues = {
    /**
     * - It is the category id mapping of the
     * respective platform with Fynd Platform.
     */
    catalog_id?: number;
    /**
     * - It is the name of the Category in the respective platform.
     */
    name: string;
};
/** @returns {CategoryRequestBody} */
declare function CategoryRequestBody(): CategoryRequestBody;
type CategoryRequestBody = {
    /**
     * - It is the list of unique department the
     * category belongs to.
     */
    departments: number[];
    /**
     * - It is the list of category hierarchies
     * for each department of an L3 category.
     */
    hierarchy?: Hierarchy[];
    /**
     * - It is the flag indicating if the category is active.
     */
    is_active: boolean;
    /**
     * - It is the level of category
     */
    level: number;
    /**
     * - It is the mapping of the category in
     * different marketplaces.
     */
    marketplaces?: any;
    /**
     * - It is the details of the media such as banner and logo..
     */
    media?: any;
    /**
     * - It is the name of the category
     */
    name: string;
    /**
     * - It is the priority of the category.
     */
    priority?: number;
    /**
     * - It is the slug of the category.
     */
    slug?: string;
    /**
     * - It is the list of synonyms.
     */
    synonyms?: string[];
    /**
     * - It is the list of tryouts.
     */
    tryouts?: string[];
};
/** @returns {CategoryResponse} */
declare function CategoryResponse(): CategoryResponse;
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
/** @returns {CategoryUpdateResponse} */
declare function CategoryUpdateResponse(): CategoryUpdateResponse;
type CategoryUpdateResponse = {
    /**
     * - It is the message of the response from the category.
     */
    message?: string;
    /**
     * - It is the flag indication the success response.
     */
    success?: boolean;
};
/** @returns {Child} */
declare function Child(): Child;
type Child = {
    _custom_json?: any;
    action?: Action;
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
    name?: string;
    slug?: string;
    uid?: number;
};
/** @returns {CollectionBadge} */
declare function CollectionBadge(): CollectionBadge;
type CollectionBadge = {
    color?: string;
    text?: string;
};
/** @returns {CollectionBanner} */
declare function CollectionBanner(): CollectionBanner;
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
/** @returns {CollectionBannerResponse} */
declare function CollectionBannerResponse(): CollectionBannerResponse;
type CollectionBannerResponse = {
    landscape?: CollectionImageResponse;
    portrait?: CollectionImageResponse;
};
/** @returns {BadgeDetail} */
declare function BadgeDetail(): BadgeDetail;
type BadgeDetail = {
    color?: string;
    text?: string;
};
/** @returns {CollectionCreateResponse} */
declare function CollectionCreateResponse(): CollectionCreateResponse;
type CollectionCreateResponse = {
    badge?: CollectionBadge;
    banners?: CollectionBannerResponse;
    description?: string;
    is_active?: boolean;
    is_visible?: boolean;
    logo?: CollectionImageResponse;
    meta?: any;
    name?: string;
    is_searchable?: boolean;
    priority?: number;
    published?: boolean;
    query?: CollectionQuery[];
    seo?: SeoDetail;
    _custom_json?: any;
    _locale_language?: any;
    _schedule?: CollectionSchedule;
    action?: Action;
    uid?: string;
    allow_facets?: boolean;
    allow_sort?: boolean;
    app_id?: string;
    slug?: string;
    sort_on?: string;
    tags?: string[];
    type?: string;
    visible_facets_keys?: string[];
};
/** @returns {CollectionDetailResponse} */
declare function CollectionDetailResponse(): CollectionDetailResponse;
type CollectionDetailResponse = {
    _schedule?: any;
    allow_facets?: boolean;
    allow_sort?: boolean;
    app_id?: string;
    badge?: any;
    banners?: ImageUrls;
    cron?: any;
    description?: string;
    is_active?: boolean;
    logo?: Media;
    meta?: any;
    name?: string;
    priority?: number;
    query?: CollectionQuery[];
    slug?: string;
    tag?: string[];
    type?: string;
    uid?: string;
    visible_facets_keys?: string[];
};
/** @returns {CollectionImage} */
declare function CollectionImage(): CollectionImage;
type CollectionImage = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
    type?: string;
};
/** @returns {CollectionImageResponse} */
declare function CollectionImageResponse(): CollectionImageResponse;
type CollectionImageResponse = {
    type?: string;
    url?: string;
};
/** @returns {CollectionItem} */
declare function CollectionItem(): CollectionItem;
type CollectionItem = {
    action: string;
    item_id: number;
    priority?: number;
};
/** @returns {CollectionItemUpdate} */
declare function CollectionItemUpdate(): CollectionItemUpdate;
type CollectionItemUpdate = {
    allow_facets?: boolean;
    allow_sort?: boolean;
    items?: CollectionItem[];
    query?: CollectionQuery[];
    type?: string;
    visible_facets_keys?: string[];
};
/** @returns {CollectionListingFilter} */
declare function CollectionListingFilter(): CollectionListingFilter;
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
/** @returns {CollectionListingFilterTag} */
declare function CollectionListingFilterTag(): CollectionListingFilterTag;
type CollectionListingFilterTag = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
/** @returns {CollectionListingFilterType} */
declare function CollectionListingFilterType(): CollectionListingFilterType;
type CollectionListingFilterType = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
/** @returns {CollectionQuery} */
declare function CollectionQuery(): CollectionQuery;
type CollectionQuery = {
    /**
     * - The attribute of the collection query
     */
    attribute: string;
    /**
     * - The operation to be performed on the attribute of the
     * collection query
     */
    op: string;
    /**
     * - The value of the attribute of the collection query
     */
    value: string[];
};
/** @returns {CollectionSchedule} */
declare function CollectionSchedule(): CollectionSchedule;
type CollectionSchedule = {
    cron?: string;
    duration?: number;
    end?: string;
    next_schedule?: NextSchedule[];
    start?: string;
};
/** @returns {CompanyBrandDetail} */
declare function CompanyBrandDetail(): CompanyBrandDetail;
type CompanyBrandDetail = {
    brand_id?: number;
    brand_name?: string;
    company_id?: number;
    total_article?: number;
    logo?: any;
    name?: string;
    id?: number;
};
/** @returns {CompanyMeta} */
declare function CompanyMeta(): CompanyMeta;
type CompanyMeta = {
    id: number;
};
/** @returns {CompanyMeta1} */
declare function CompanyMeta1(): CompanyMeta1;
type CompanyMeta1 = {
    id?: number;
};
/** @returns {CompanyOptIn} */
declare function CompanyOptIn(): CompanyOptIn;
type CompanyOptIn = {
    brand_ids: number[];
    company_id: number;
    created_by?: any;
    created_on: number;
    enabled: boolean;
    modified_by?: any;
    modified_on: number;
    opt_level: string;
    platform: string;
    store_ids: number[];
};
/** @returns {ConfigErrorResponse} */
declare function ConfigErrorResponse(): ConfigErrorResponse;
type ConfigErrorResponse = {
    code?: string;
    errors?: any;
    message: string;
};
/** @returns {ConfigSuccessResponse} */
declare function ConfigSuccessResponse(): ConfigSuccessResponse;
type ConfigSuccessResponse = {
    message: string;
};
/** @returns {ConfigurationBucketPoints} */
declare function ConfigurationBucketPoints(): ConfigurationBucketPoints;
type ConfigurationBucketPoints = {
    display?: string;
    end?: number;
    start?: number;
};
/** @returns {ConfigurationListing} */
declare function ConfigurationListing(): ConfigurationListing;
type ConfigurationListing = {
    filter?: ConfigurationListingFilter;
    sort?: ConfigurationListingSort;
};
/** @returns {ConfigurationListingFilter} */
declare function ConfigurationListingFilter(): ConfigurationListingFilter;
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
/** @returns {ConfigurationListingFilterConfig} */
declare function ConfigurationListingFilterConfig(): ConfigurationListingFilterConfig;
type ConfigurationListingFilterConfig = {
    display_name?: string;
    is_active: boolean;
    key: string;
    logo?: string;
    name?: string;
    priority: number;
    type: string;
    value_config?: ConfigurationListingFilterValue;
};
/** @returns {ConfigurationListingFilterValue} */
declare function ConfigurationListingFilterValue(): ConfigurationListingFilterValue;
type ConfigurationListingFilterValue = {
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    map?: any;
    map_values?: any[];
    priority?: string[];
    sort?: string;
    value?: string;
};
/** @returns {ConfigurationListingSort} */
declare function ConfigurationListingSort(): ConfigurationListingSort;
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
/** @returns {ConfigurationListingSortConfig} */
declare function ConfigurationListingSortConfig(): ConfigurationListingSortConfig;
type ConfigurationListingSortConfig = {
    is_active: boolean;
    key: string;
    logo?: string;
    name?: string;
    priority: number;
};
/** @returns {ConfigurationProduct} */
declare function ConfigurationProduct(): ConfigurationProduct;
type ConfigurationProduct = {
    similar?: ConfigurationProductSimilar;
    variant?: ConfigurationProductVariant;
    details_groups?: ConfigurationProductDetailsGroups;
};
/** @returns {ConfigurationProductDetailsGroups} */
declare function ConfigurationProductDetailsGroups(): ConfigurationProductDetailsGroups;
type ConfigurationProductDetailsGroups = {
    config?: ConfigurationProductDetailsConfig[];
};
/** @returns {ConfigurationProductDetailsConfig} */
declare function ConfigurationProductDetailsConfig(): ConfigurationProductDetailsConfig;
type ConfigurationProductDetailsConfig = {
    name?: string;
    slug?: string;
    priority?: number;
    template_slugs?: string[];
    attributes?: ConfigurationProductDetailsAttribute[];
    is_active?: boolean;
};
/** @returns {ConfigurationProductDetailsAttribute} */
declare function ConfigurationProductDetailsAttribute(): ConfigurationProductDetailsAttribute;
type ConfigurationProductDetailsAttribute = {
    name?: string;
    slug?: string;
    display_type?: string;
    priority?: number;
    is_active?: boolean;
    key?: string;
};
/** @returns {ConfigurationProductConfig} */
declare function ConfigurationProductConfig(): ConfigurationProductConfig;
type ConfigurationProductConfig = {
    is_active: boolean;
    key: string;
    logo?: string;
    priority: number;
    size?: ProductSize;
    subtitle?: string;
    title?: string;
};
/** @returns {ConfigurationProductSimilar} */
declare function ConfigurationProductSimilar(): ConfigurationProductSimilar;
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
/** @returns {ConfigurationProductVariant} */
declare function ConfigurationProductVariant(): ConfigurationProductVariant;
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
/** @returns {ConfigurationProductVariantConfig} */
declare function ConfigurationProductVariantConfig(): ConfigurationProductVariantConfig;
type ConfigurationProductVariantConfig = {
    display_type: string;
    is_active: boolean;
    key: string;
    logo?: string;
    name: string;
    priority: number;
    size: ProductSize;
};
/** @returns {CreateAutocompleteKeyword} */
declare function CreateAutocompleteKeyword(): CreateAutocompleteKeyword;
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    results?: AutocompleteResult[];
    words?: string[];
    action?: AutocompleteAction;
};
/** @returns {CreateAutocompleteWordsResponse} */
declare function CreateAutocompleteWordsResponse(): CreateAutocompleteWordsResponse;
type CreateAutocompleteWordsResponse = {
    uid?: string;
    is_active?: boolean;
    results?: AutocompleteResult[];
    _custom_json?: any;
    app_id?: string;
    words?: string[];
};
/** @returns {CreateCollection} */
declare function CreateCollection(): CreateCollection;
type CreateCollection = {
    _custom_json?: any;
    _locale_language?: any;
    _schedule?: CollectionSchedule;
    allow_facets?: boolean;
    allow_sort?: boolean;
    app_id?: string;
    badge?: CollectionBadge;
    banners: CollectionBanner;
    created_by?: any;
    description?: string;
    is_active?: boolean;
    is_visible?: boolean;
    logo: CollectionImage;
    meta?: any;
    modified_by?: any;
    name: string;
    priority?: number;
    published?: boolean;
    query?: CollectionQuery[];
    seo?: SeoDetail;
    slug: string;
    is_searchable?: boolean;
    sort_on?: string;
    tags?: string[];
    type: string;
    visible_facets_keys?: string[];
};
/** @returns {RerankingBoostItems} */
declare function RerankingBoostItems(): RerankingBoostItems;
type RerankingBoostItems = {
    boost?: BoostItem[];
};
/** @returns {GetSearchRerankDetailResponse} */
declare function GetSearchRerankDetailResponse(): GetSearchRerankDetailResponse;
type GetSearchRerankDetailResponse = {
    ranking?: RerankingBoostItems;
    is_active?: boolean;
    modified_by?: CreatedBy;
    created_by?: CreatedBy;
    words?: string[];
    app_id?: string;
    modified_on?: string;
    created_on?: string;
    id?: string;
};
/** @returns {BoostItem} */
declare function BoostItem(): BoostItem;
type BoostItem = {
    attribute_key?: string;
    attribute_value?: string;
};
/** @returns {GetSearchRerankItemResponse} */
declare function GetSearchRerankItemResponse(): GetSearchRerankItemResponse;
type GetSearchRerankItemResponse = {
    created_on?: string;
    modified_on?: string;
    words?: string[];
    app_id?: string;
    /**
     * - The user who modified the search rerank.
     */
    modified_by?: any;
    ranking?: RerankingBoostItems;
    /**
     * - The user who created the search rerank.
     */
    created_by?: any;
    is_active?: boolean;
    id?: string;
};
/** @returns {GetSearchRerankResponse} */
declare function GetSearchRerankResponse(): GetSearchRerankResponse;
type GetSearchRerankResponse = {
    items?: GetSearchRerankItemResponse[];
    page?: PageResponse1;
};
/** @returns {CreateSearchRerankResponse} */
declare function CreateSearchRerankResponse(): CreateSearchRerankResponse;
type CreateSearchRerankResponse = {
    words?: string[];
    app_id?: string;
    ranking?: RerankingBoostItems;
    is_active?: boolean;
    created_on?: string;
    /**
     * - The user who created the search rerank.
     */
    created_by?: any;
    modified_on?: string;
    /**
     * - The user who modified the search rerank.
     */
    modified_by?: any;
};
/** @returns {UpdateSearchRerankResponse} */
declare function UpdateSearchRerankResponse(): UpdateSearchRerankResponse;
type UpdateSearchRerankResponse = {
    words?: string[];
    app_id?: string;
    ranking?: RerankingBoostItems;
    is_active?: boolean;
    created_on?: string;
    /**
     * - The user who created the search rerank.
     */
    created_by?: any;
    modified_on?: string;
    /**
     * - The user who modified the search rerank.
     */
    modified_by?: any;
};
/** @returns {UpdateSearchRerankRequest} */
declare function UpdateSearchRerankRequest(): UpdateSearchRerankRequest;
type UpdateSearchRerankRequest = {
    words?: string[];
    is_active?: boolean;
    application_id?: string;
    ranking?: RerankingBoostItems;
};
/** @returns {CreateSearchRerankRequest} */
declare function CreateSearchRerankRequest(): CreateSearchRerankRequest;
type CreateSearchRerankRequest = {
    words?: string[];
    is_active?: boolean;
    application_id?: string;
    ranking?: RerankingBoostItems;
};
/** @returns {CreateSearchConfigurationRequest} */
declare function CreateSearchConfigurationRequest(): CreateSearchConfigurationRequest;
type CreateSearchConfigurationRequest = {
    /**
     * - The application id where custom search
     * configuration is set
     */
    application_id: string;
    /**
     * - The company id where custom search configuration is set
     */
    company_id: number;
    /**
     * - The user who created the search configuration.
     */
    created_by?: any;
    /**
     * - The date and time when the search
     * configuration was created.
     */
    created_on?: string;
    /**
     * - Flag indicating if proximity
     * search is enabled for this attribute.
     */
    is_proximity_enabled?: boolean;
    /**
     * - The user who modified the search configuration.
     */
    modified_by?: any;
    /**
     * - The date and time when the search
     * configuration was last modified.
     */
    modified_on?: string;
    /**
     * - Proximity distance configuration
     */
    proximity?: number;
    /**
     * - The searchable
     * attributes defined on the application.
     */
    searchable_attributes?: SearchableAttribute[];
};
/** @returns {CreateSearchConfigurationResponse} */
declare function CreateSearchConfigurationResponse(): CreateSearchConfigurationResponse;
type CreateSearchConfigurationResponse = {
    success?: boolean;
};
/** @returns {CreateSearchKeyword} */
declare function CreateSearchKeyword(): CreateSearchKeyword;
type CreateSearchKeyword = {
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    result: SearchKeywordResult;
    words?: string[];
};
/** @returns {CreateUpdateAppReturnConfig} */
declare function CreateUpdateAppReturnConfig(): CreateUpdateAppReturnConfig;
type CreateUpdateAppReturnConfig = {
    /**
     * - Channel identifier
     */
    app_id: string;
    /**
     * - Unique identifer of company
     */
    company_id: number;
    /**
     * - Return configurtion Level
     * category|product|no-return
     */
    return_config_level: string;
};
/** @returns {CrossSellingData} */
declare function CrossSellingData(): CrossSellingData;
type CrossSellingData = {
    articles?: number;
    products?: number;
};
/** @returns {CrossSellingResponse} */
declare function CrossSellingResponse(): CrossSellingResponse;
type CrossSellingResponse = {
    articles?: number;
    products?: number;
};
/** @returns {CustomOrder} */
declare function CustomOrder(): CustomOrder;
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
/** @returns {DateMeta} */
declare function DateMeta(): DateMeta;
type DateMeta = {
    added_on_store?: string;
    created_on?: string;
    inventory_updated_on?: string;
    modified_on?: string;
};
/** @returns {DefaultKeyRequest} */
declare function DefaultKeyRequest(): DefaultKeyRequest;
type DefaultKeyRequest = {
    default_key: string;
};
/** @returns {DeleteAppCategoryReturnConfig} */
declare function DeleteAppCategoryReturnConfig(): DeleteAppCategoryReturnConfig;
type DeleteAppCategoryReturnConfig = {
    /**
     * - Channel identifier
     */
    app_id: string;
    /**
     * - List of category_ids to be deleted.
     */
    category_ids: number[];
    /**
     * - Unique identifer of company
     */
    company_id: number;
};
/** @returns {DeleteResponse} */
declare function DeleteResponse(): DeleteResponse;
type DeleteResponse = {
    message?: string;
};
/** @returns {DeleteSearchConfigurationResponse} */
declare function DeleteSearchConfigurationResponse(): DeleteSearchConfigurationResponse;
type DeleteSearchConfigurationResponse = {
    success?: boolean;
};
/** @returns {DeleteSearchRerankConfigurationResponse} */
declare function DeleteSearchRerankConfigurationResponse(): DeleteSearchRerankConfigurationResponse;
type DeleteSearchRerankConfigurationResponse = {
    success?: boolean;
    message?: string;
};
/** @returns {Department} */
declare function Department(): Department;
type Department = {
    logo?: Media2;
    name?: string;
    priority_order?: number;
    slug?: string;
    uid?: number;
};
/** @returns {DepartmentCategoryTree} */
declare function DepartmentCategoryTree(): DepartmentCategoryTree;
type DepartmentCategoryTree = {
    department?: string;
    items?: CategoryItems[];
};
/** @returns {PollErrorResponse} */
declare function PollErrorResponse(): PollErrorResponse;
type PollErrorResponse = {
    error?: any;
};
/** @returns {DepartmentCreateErrorResponse} */
declare function DepartmentCreateErrorResponse(): DepartmentCreateErrorResponse;
type DepartmentCreateErrorResponse = {
    error?: any;
};
/** @returns {ProductBundleCreateErrorResponse} */
declare function ProductBundleCreateErrorResponse(): ProductBundleCreateErrorResponse;
type ProductBundleCreateErrorResponse = {
    error?: any;
};
/** @returns {DepartmentCreateResponse} */
declare function DepartmentCreateResponse(): DepartmentCreateResponse;
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
/** @returns {DepartmentCreateUpdate} */
declare function DepartmentCreateUpdate(): DepartmentCreateUpdate;
type DepartmentCreateUpdate = {
    _cls?: string;
    _custom_json?: any;
    is_active?: boolean;
    logo: string;
    name: string;
    platforms?: any;
    priority_order: number;
    slug?: string;
    tags?: string[];
    uid?: number;
};
/** @returns {DepartmentErrorResponse} */
declare function DepartmentErrorResponse(): DepartmentErrorResponse;
type DepartmentErrorResponse = {
    code?: string;
    errors?: any;
    message?: string;
    meta?: any;
    status?: number;
};
/** @returns {DepartmentIdentifier} */
declare function DepartmentIdentifier(): DepartmentIdentifier;
type DepartmentIdentifier = {
    name?: string;
    slug?: string;
    uid?: number;
};
/** @returns {DepartmentModel} */
declare function DepartmentModel(): DepartmentModel;
type DepartmentModel = {
    _cls?: string;
    _custom_json?: any;
    _id?: string;
    /**
     * - User details of the creator of the document
     */
    created_by?: any;
    /**
     * - Whether the department is currently active
     */
    is_active?: boolean;
    /**
     * - The URL of the department's logo
     */
    logo: string;
    /**
     * - User details of the last modifier of the document
     */
    modified_by?: any;
    /**
     * - The name of the department
     */
    name: string;
    /**
     * - The priority order of the department
     */
    priority_order: number;
    /**
     * - The unique slug identifier for the department
     */
    slug?: string;
    /**
     * - A list of synonyms for the department name
     */
    synonyms?: string[];
    /**
     * - The unique ID for the department
     */
    uid: number;
    /**
     * - User details of the verifier of the
     * document, if applicable
     */
    verified_by?: any;
    /**
     * - Timestamp of when the document was
     * verified, if applicable
     */
    verified_on?: string;
};
/** @returns {DepartmentResponse} */
declare function DepartmentResponse(): DepartmentResponse;
type DepartmentResponse = {
    items?: Department[];
};
/** @returns {ValidationFailedResponse} */
declare function ValidationFailedResponse(): ValidationFailedResponse;
type ValidationFailedResponse = {
    /**
     * - Response message for failed validation
     */
    message?: string;
};
/** @returns {DepartmentsResponse} */
declare function DepartmentsResponse(): DepartmentsResponse;
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
/** @returns {DimensionResponse} */
declare function DimensionResponse(): DimensionResponse;
type DimensionResponse = {
    /**
     * - The height dimension.
     */
    height: number;
    /**
     * - Indicates if it is the default dimension.
     */
    is_default: boolean;
    /**
     * - The length dimension.
     */
    length: number;
    /**
     * - The unit of dimension.
     */
    unit: string;
    /**
     * - The width dimension.
     */
    width: number;
};
/** @returns {DimensionResponse1} */
declare function DimensionResponse1(): DimensionResponse1;
type DimensionResponse1 = {
    height?: number;
    length?: number;
    unit?: string;
    width?: number;
};
/** @returns {Document} */
declare function Document(): Document;
type Document = {
    legal_name?: string;
    type: string;
    url?: string;
    value: string;
    verified?: boolean;
};
/** @returns {EntityConfiguration} */
declare function EntityConfiguration(): EntityConfiguration;
type EntityConfiguration = {
    app_id?: string;
    config_id?: string;
    config_type?: string;
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    product?: GetCatalogConfigurationDetailsProduct;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    code?: number;
    error?: string;
    message?: string;
    meta?: any;
    status?: number;
};
/** @returns {CategoryErrorResponse} */
declare function CategoryErrorResponse(): CategoryErrorResponse;
type CategoryErrorResponse = {
    code?: string;
    error?: any;
    message?: string;
};
/** @returns {FilerList} */
declare function FilerList(): FilerList;
type FilerList = {
    display?: string;
    value?: string;
};
/** @returns {RawProduct} */
declare function RawProduct(): RawProduct;
type RawProduct = {
    _custom_json?: any;
    all_company_ids?: number[];
    all_identifiers?: string[];
    all_sizes?: any[];
    attributes?: any;
    brand?: Brand;
    brand_uid?: number;
    category?: any;
    category_slug?: string;
    category_uid?: number;
    color?: string;
    company_id?: number;
    country_of_origin?: string;
    created_by?: any;
    created_on?: string;
    currency?: string;
    custom_order?: any;
    departments?: number[];
    description?: string;
    highlights?: string[];
    hsn_code?: string;
    id?: string;
    image_nature?: string;
    images?: string[];
    is_active?: boolean;
    is_dependent?: boolean;
    is_expirable?: boolean;
    is_image_less_product?: boolean;
    is_physical?: boolean;
    is_set?: boolean;
    item_code?: string;
    item_type?: string;
    l3_mapping?: string[];
    media?: Media[];
    modified_by?: any;
    modified_on?: string;
    moq?: any;
    multi_size?: boolean;
    name?: string;
    net_quantity?: NetQuantityResponse;
    no_of_boxes?: number;
    pending?: string;
    primary_color?: string;
    product_group_tag?: string[];
    product_publish?: ProductPublished;
    return_config?: ReturnConfigResponse;
    short_description?: string;
    size_guide?: string;
    sizes?: any[];
    slug?: string;
    stage?: string;
    tags?: string[];
    tax_identifier?: any;
    teaser_tag?: any;
    template_tag?: string;
    trader?: Trader[];
    uid?: number;
    variant_group?: any;
    variant_media?: any;
    variants?: any;
    verified_by?: VerifiedBy;
    verified_on?: string;
    store_id_list?: string[];
};
/** @returns {RawProductListingResponse} */
declare function RawProductListingResponse(): RawProductListingResponse;
type RawProductListingResponse = {
    items?: RawProduct[];
    page?: Page;
};
/** @returns {GTIN} */
declare function GTIN(): GTIN;
type GTIN = {
    gtin_type: string;
    gtin_value: string;
    primary?: boolean;
};
/** @returns {GenderDetail} */
declare function GenderDetail(): GenderDetail;
type GenderDetail = {
    /**
     * - It is Date and time when the attribute was created.
     */
    created_on?: string;
    /**
     * - It is Date and time when the attribute was modified.
     */
    modified_on?: string;
    /**
     * - Details of the user who created the attribute.
     */
    created_by?: any;
    /**
     * - Details of the user who last modified the attribute.
     */
    modified_by?: any;
    departments?: string[];
    description?: string;
    details?: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    filters?: AttributeMasterFilter;
    _id?: string;
    is_nested?: boolean;
    logo?: string;
    meta?: AttributeMasterMeta;
    name?: string;
    schema?: AttributeMaster;
    slug?: string;
    variant?: boolean;
};
/** @returns {GetAddressSerializer} */
declare function GetAddressSerializer(): GetAddressSerializer;
type GetAddressSerializer = {
    address1?: string;
    address2?: string;
    address_type?: string;
    city?: string;
    country?: string;
    country_code?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    pincode?: string;
    state?: string;
};
/** @returns {GetAllSizes} */
declare function GetAllSizes(): GetAllSizes;
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
/** @returns {FilterResponse} */
declare function FilterResponse(): FilterResponse;
type FilterResponse = {
    values?: ValueItem[];
};
/** @returns {ValueItem} */
declare function ValueItem(): ValueItem;
type ValueItem = {
    text?: string;
    value?: string;
};
/** @returns {GetAppCatalogConfiguration} */
declare function GetAppCatalogConfiguration(): GetAppCatalogConfiguration;
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
/** @returns {GetAppCatalogEntityConfiguration} */
declare function GetAppCatalogEntityConfiguration(): GetAppCatalogEntityConfiguration;
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
/** @returns {GetAutocompleteWordsData} */
declare function GetAutocompleteWordsData(): GetAutocompleteWordsData;
type GetAutocompleteWordsData = {
    results?: AutocompleteResult[];
    app_id?: string;
    words?: string[];
    is_active?: boolean;
    uid?: string;
};
/** @returns {GetAutocompleteWordsResponse} */
declare function GetAutocompleteWordsResponse(): GetAutocompleteWordsResponse;
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
/** @returns {GetCatalogConfigurationDetailsProduct} */
declare function GetCatalogConfigurationDetailsProduct(): GetCatalogConfigurationDetailsProduct;
type GetCatalogConfigurationDetailsProduct = {
    compare?: CompareFilter;
    similar?: SimilarFilter;
    variant?: VariantFilter;
    detail?: DetailFilter;
};
/** @returns {FilterItem} */
declare function FilterItem(): FilterItem;
type FilterItem = {
    key?: string;
    display?: string;
    filter_types?: string[];
    units?: string[];
};
/** @returns {CompareFilter} */
declare function CompareFilter(): CompareFilter;
type CompareFilter = {
    data?: FilterItem[];
};
/** @returns {SimilarFilter} */
declare function SimilarFilter(): SimilarFilter;
type SimilarFilter = {
    data?: SimilarItem[];
};
/** @returns {VariantFilter} */
declare function VariantFilter(): VariantFilter;
type VariantFilter = {
    data?: VariantItem[];
};
/** @returns {DetailFilter} */
declare function DetailFilter(): DetailFilter;
type DetailFilter = {
    data?: FilterItem[];
    values?: DetailFilterValues;
};
/** @returns {DetailFilterValues} */
declare function DetailFilterValues(): DetailFilterValues;
type DetailFilterValues = {
    display_type?: DisplayType[];
};
/** @returns {DisplayType} */
declare function DisplayType(): DisplayType;
type DisplayType = {
    key?: string;
    display?: string;
};
/** @returns {SimilarItem} */
declare function SimilarItem(): SimilarItem;
type SimilarItem = {
    key?: string;
    display?: string;
};
/** @returns {VariantItem} */
declare function VariantItem(): VariantItem;
type VariantItem = {
    key?: string;
    display?: string;
};
/** @returns {GetCatalogConfigurationDetailsSchemaListing} */
declare function GetCatalogConfigurationDetailsSchemaListing(): GetCatalogConfigurationDetailsSchemaListing;
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
/** @returns {GetCatalogConfigurationMetaData} */
declare function GetCatalogConfigurationMetaData(): GetCatalogConfigurationMetaData;
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
/** @returns {GetCollectionDetailNest} */
declare function GetCollectionDetailNest(): GetCollectionDetailNest;
type GetCollectionDetailNest = {
    _schedule?: any;
    action?: Action;
    allow_facets?: boolean;
    allow_sort?: boolean;
    app_id?: string;
    badge?: any;
    banners?: ImageUrls;
    cron?: any;
    description?: string;
    is_active?: boolean;
    logo?: Media;
    meta?: any;
    name?: string;
    priority?: number;
    query?: CollectionQuery[];
    slug?: string;
    tag?: string[];
    type?: string;
    uid?: string;
    visible_facets_keys?: string[];
};
/** @returns {GetCollectionItemsResponse} */
declare function GetCollectionItemsResponse(): GetCollectionItemsResponse;
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page?: Page;
    sort_on?: ProductSortOn[];
};
/** @returns {GetCollectionListingResponse} */
declare function GetCollectionListingResponse(): GetCollectionListingResponse;
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
/** @returns {GetCollectionQueryOptionResponse} */
declare function GetCollectionQueryOptionResponse(): GetCollectionQueryOptionResponse;
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    operators: any;
    sort_on?: ProductSortOn[];
};
/** @returns {GetCompanySerializer} */
declare function GetCompanySerializer(): GetCompanySerializer;
type GetCompanySerializer = {
    addresses?: GetAddressSerializer[];
    business_type?: string;
    company_type?: string;
    created_by?: UserSerializer2;
    created_on?: string;
    modified_by?: UserSerializer2;
    modified_on?: string;
    name?: string;
    reject_reason?: string;
    stage?: string;
    uid?: number;
    verified_by?: UserSerializer2;
    verified_on?: string;
};
/** @returns {ConditionItem} */
declare function ConditionItem(): ConditionItem;
type ConditionItem = {
    key?: string;
    display?: string;
};
/** @returns {DataItem} */
declare function DataItem(): DataItem;
type DataItem = {
    key?: string;
    display?: string;
    filter_types?: string[];
    compatible_units?: string[];
};
/** @returns {ValueTypeItem} */
declare function ValueTypeItem(): ValueTypeItem;
type ValueTypeItem = {
    key?: string;
    display?: string;
};
/** @returns {SortTypeItem} */
declare function SortTypeItem(): SortTypeItem;
type SortTypeItem = {
    key?: string;
    display?: string;
};
/** @returns {GetConfigMetadataResponse} */
declare function GetConfigMetadataResponse(): GetConfigMetadataResponse;
type GetConfigMetadataResponse = {
    page?: Page;
    condition?: ConditionItem[];
    data: DataItem[];
    values?: GetConfigMetadataValues;
};
/** @returns {GetConfigMetadataValues} */
declare function GetConfigMetadataValues(): GetConfigMetadataValues;
type GetConfigMetadataValues = {
    type?: ValueTypeItem[];
    sort?: SortTypeItem[];
};
/** @returns {AttributeType} */
declare function AttributeType(): AttributeType;
type AttributeType = {
    unit?: string;
    priority?: number;
    name?: string;
    key?: string;
    display_type?: string;
    is_active?: boolean;
    slug?: string;
};
/** @returns {DataType} */
declare function DataType(): DataType;
type DataType = {
    app_id?: string;
    is_default?: boolean;
    priority?: number;
    name?: string;
    attributes?: AttributeType[];
    is_active?: boolean;
    slug?: string;
    id?: string;
};
/** @returns {ListingValueConfigType} */
declare function ListingValueConfigType(): ListingValueConfigType;
type ListingValueConfigType = {
    sort?: string;
    bucket_points?: any[];
    map?: any;
    condition?: string;
    value?: string;
};
/** @returns {SizeLimitConfiguration} */
declare function SizeLimitConfiguration(): SizeLimitConfiguration;
type SizeLimitConfiguration = {
    /**
     * - Minimum number of variants to display.
     */
    min?: number;
    /**
     * - Maximum number of variants to display.
     */
    max?: number;
};
/** @returns {ListingDataType} */
declare function ListingDataType(): ListingDataType;
type ListingDataType = {
    app_id?: string;
    allow_single?: boolean;
    id?: string;
    is_active?: boolean;
    key?: string;
    name?: string;
    is_default?: boolean;
    priority?: number;
    logo?: string;
    value_config?: ListingValueConfigType;
    type?: string;
    /**
     * - Display type of the variant attribute.
     */
    display_type?: string;
    size?: SizeLimitConfiguration;
};
/** @returns {GetListingConfigResponse} */
declare function GetListingConfigResponse(): GetListingConfigResponse;
type GetListingConfigResponse = {
    data?: ListingDataType[];
    page?: PageResponseType;
};
/** @returns {GetConfigResponse} */
declare function GetConfigResponse(): GetConfigResponse;
type GetConfigResponse = {
    data: DataType[];
    page: PageResponseType;
};
/** @returns {GetDepartment} */
declare function GetDepartment(): GetDepartment;
type GetDepartment = {
    created_by?: UserSerializer1;
    created_on?: string;
    is_active?: boolean;
    item_type?: string;
    logo?: string;
    modified_by?: UserSerializer1;
    modified_on?: string;
    name?: string;
    page_no?: number;
    page_size?: number;
    priority_order?: number;
    search?: string;
    slug?: string;
    synonyms?: string[];
    uid?: number;
};
/** @returns {GetInventories} */
declare function GetInventories(): GetInventories;
type GetInventories = {
    brand?: BrandMeta1;
    company?: CompanyMeta1;
    country_of_origin?: string;
    created_by?: UserSerializer1;
    date_meta?: DateMeta;
    dimension?: DimensionResponse1;
    expiration_date?: string;
    id?: string;
    identifier?: any;
    inventory_updated_on?: string;
    is_set?: boolean;
    item_id?: number;
    manufacturer?: ManufacturerResponse1;
    modified_by?: UserSerializer1;
    platforms?: any;
    price?: PriceArticle;
    quantities?: QuantitiesArticle;
    return_config?: ReturnConfig2;
    seller_identifier?: string;
    size?: string;
    stage?: string;
    store?: ArticleStoreResponse;
    tags?: string[];
    tax_identifier?: any;
    total_quantity?: number;
    trace_id?: string;
    track_inventory?: boolean;
    trader?: Trader2[];
    uid?: string;
    weight?: WeightResponse1;
};
/** @returns {GetInventoriesResponse} */
declare function GetInventoriesResponse(): GetInventoriesResponse;
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
/** @returns {GetLocationSerializer} */
declare function GetLocationSerializer(): GetLocationSerializer;
type GetLocationSerializer = {
    _custom_json?: any;
    address: GetAddressSerializer;
    store_code: string;
    company?: GetCompanySerializer;
    contact_numbers?: SellerPhoneNumber[];
    created_by?: UserSerializer3;
    created_on?: string;
    display_name: string;
    documents?: Document[];
    gst_credentials?: InvoiceDetailsSerializer;
    integration_type?: LocationIntegrationType;
    manager?: LocationManagerSerializer;
    modified_by?: UserSerializer3;
    modified_on?: string;
    name: string;
    notification_emails?: string[];
    phone_number?: string;
    product_return_config?: ProductReturnConfigSerializer;
    stage?: string;
    store_type?: string;
    timing?: LocationDayWiseSerializer[];
    uid?: number;
    verified_by?: UserSerializer3;
    verified_on?: string;
    warnings?: any;
};
/** @returns {GetOptInPlatform} */
declare function GetOptInPlatform(): GetOptInPlatform;
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
/** @returns {GetProductBundleCreateResponse} */
declare function GetProductBundleCreateResponse(): GetProductBundleCreateResponse;
type GetProductBundleCreateResponse = {
    /**
     * - The user who created the product bundle.
     */
    created_by?: any;
    /**
     * - The user who created the product bundle.
     */
    modified_by?: any;
    choice: string;
    company_id?: number;
    created_on?: string;
    id?: string;
    is_active: boolean;
    logo?: string;
    meta?: any;
    modified_on?: string;
    name: string;
    page_visibility?: string[];
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    slug: string;
    allow_remove: boolean;
    auto_add_to_cart: boolean;
    auto_select: boolean;
    prefer_single_shipment: boolean;
    allow_individual_cancel: boolean;
    allow_individual_return: boolean;
};
/** @returns {GetProductBundleListingResponse} */
declare function GetProductBundleListingResponse(): GetProductBundleListingResponse;
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
/** @returns {GetProductBundleResponse} */
declare function GetProductBundleResponse(): GetProductBundleResponse;
type GetProductBundleResponse = {
    choice?: string;
    company_id?: number;
    is_active?: boolean;
    logo?: string;
    meta?: any;
    name?: string;
    page_visibility?: string[];
    products?: GetProducts[];
    same_store_assignment?: boolean;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    prefer_single_shipment?: boolean;
    allow_individual_cancel?: boolean;
    allow_individual_return?: boolean;
    slug?: string;
};
/** @returns {GetProducts} */
declare function GetProducts(): GetProducts;
type GetProducts = {
    max_quantity?: number;
    min_quantity?: number;
    price?: Price;
    product_details?: LimitedProductData;
    product_uid?: number;
    sizes?: Size[];
};
/** @returns {GetCollectionDetailResponse} */
declare function GetCollectionDetailResponse(): GetCollectionDetailResponse;
type GetCollectionDetailResponse = {
    _custom_json?: any;
    _locale_language?: any;
    _schedule?: CollectionSchedule;
    action?: any;
    allow_facets?: boolean;
    allow_sort?: boolean;
    app_id?: string;
    badge?: CollectionBadge;
    banners?: ImageUrls;
    description?: string;
    is_active?: boolean;
    is_visible?: boolean;
    logo?: Media;
    meta?: any;
    name?: string;
    priority?: number;
    published?: boolean;
    query?: CollectionQuery[];
    seo?: SeoDetail;
    slug?: string;
    sort_on?: string;
    tags?: string[];
    type?: string;
    uid?: string;
    visible_facets_keys?: string[];
};
/** @returns {CommonResponseSchemaCollection} */
declare function CommonResponseSchemaCollection(): CommonResponseSchemaCollection;
type CommonResponseSchemaCollection = {
    message?: string;
};
/** @returns {GetQueryFiltersResponse} */
declare function GetQueryFiltersResponse(): GetQueryFiltersResponse;
type GetQueryFiltersResponse = {
    filters?: ProductFilters[];
    operators?: any;
    sort_on?: ProductSortOn[];
};
/** @returns {GetCollectionItemsResponseSchema} */
declare function GetCollectionItemsResponseSchema(): GetCollectionItemsResponseSchema;
type GetCollectionItemsResponseSchema = {
    items?: ProductDetailV2[];
    sort_on?: ProductSortOnv2[];
    page?: Page;
};
/** @returns {Page1} */
declare function Page1(): Page1;
type Page1 = {
    ca?: boolean;
    department?: string;
    page_no?: number;
    page_size?: number;
    q?: string;
    sort?: string;
    sort_on?: string;
    type?: string;
    variant?: string;
};
/** @returns {CollectionItemSchemaV2} */
declare function CollectionItemSchemaV2(): CollectionItemSchemaV2;
type CollectionItemSchemaV2 = {
    action: string;
    item_id: number;
    priority?: number;
};
/** @returns {CollectionItemUpdateSchema} */
declare function CollectionItemUpdateSchema(): CollectionItemUpdateSchema;
type CollectionItemUpdateSchema = {
    allow_facets?: boolean;
    allow_sort?: boolean;
    items?: CollectionItemSchemaV2[];
    query?: CollectionQuerySchemaV2[];
    type: string;
    visible_facets_keys?: string[];
    reset_items?: boolean;
};
/** @returns {CollectionQuerySchemaV2} */
declare function CollectionQuerySchemaV2(): CollectionQuerySchemaV2;
type CollectionQuerySchemaV2 = {
    /**
     * - The attribute of the collection query
     */
    attribute: string;
    /**
     * - The operation to be performed on the attribute of the
     * collection query
     */
    op: string;
    value: string[];
};
/** @returns {ProductDetailV2} */
declare function ProductDetailV2(): ProductDetailV2;
type ProductDetailV2 = {
    brand?: ProductBrand;
    is_excluded?: boolean;
    is_pinned?: boolean;
    item_code?: string;
    item_type?: string;
    medias?: Media[];
    name?: string;
    priority?: number;
    short_description?: string;
    slug: string;
    uid?: number;
};
/** @returns {GetSearchConfigurationResponse} */
declare function GetSearchConfigurationResponse(): GetSearchConfigurationResponse;
type GetSearchConfigurationResponse = {
    /**
     * - The id of the search configuration.
     */
    _id?: string;
    /**
     * - The application id where custom search
     * configuration is set
     */
    application_id: string;
    /**
     * - The company id where custom search configuration is set
     */
    company_id: number;
    /**
     * - The user who created the search configuration.
     */
    created_by?: any;
    /**
     * - The date and time when the search
     * configuration was created.
     */
    created_on?: string;
    /**
     * - Flag indicating if proximity
     * search is enabled for this attribute.
     */
    is_proximity_enabled?: boolean;
    /**
     * - The user who modified the search configuration.
     */
    modified_by?: any;
    /**
     * - The date and time when the search
     * configuration was last modified.
     */
    modified_on?: string;
    /**
     * - Proximity distance configuration
     */
    proximity?: number;
    /**
     * - The searchable
     * attributes defined on the application.
     */
    searchable_attributes?: SearchableAttribute[];
};
/** @returns {GetSearchWordsData} */
declare function GetSearchWordsData(): GetSearchWordsData;
type GetSearchWordsData = {
    query?: any;
    sort_on?: string;
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    result?: any;
    uid?: string;
    words?: string[];
};
/** @returns {GetSearchWordsDetailResponse} */
declare function GetSearchWordsDetailResponse(): GetSearchWordsDetailResponse;
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
/** @returns {GetSearchWordsResponse} */
declare function GetSearchWordsResponse(): GetSearchWordsResponse;
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
/** @returns {GlobalValidation} */
declare function GlobalValidation(): GlobalValidation;
type GlobalValidation = {
    definitions?: any;
    description?: string;
    properties?: Properties;
    required?: string[];
    title?: string;
    type?: string;
};
/** @returns {Guide} */
declare function Guide(): Guide;
type Guide = {
    meta?: Meta;
};
/** @returns {HSNCodesResponse} */
declare function HSNCodesResponse(): HSNCodesResponse;
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
/** @returns {HSNData} */
declare function HSNData(): HSNData;
type HSNData = {
    country_of_origin?: string[];
    hsn_code?: string[];
};
/** @returns {HSNDataInsertV2} */
declare function HSNDataInsertV2(): HSNDataInsertV2;
type HSNDataInsertV2 = {
    /**
     * - ID of the HSN.
     */
    id?: string;
    /**
     * - Country code.
     */
    country_code: string;
    /**
     * - Details of the user who created the HSN data.
     */
    created_by?: any;
    /**
     * - Details of the user who last modified the HSN data.
     */
    modified_by?: any;
    /**
     * - Date and time when the HSN data was created.
     */
    created_on?: string;
    /**
     * - Description of the HSN data.
     */
    description: string;
    /**
     * - HSN code.
     */
    hsn_code: string;
    /**
     * - Unique identifier of the HSN code.
     */
    hsn_code_id?: string;
    /**
     * - Date and time when the HSN data was last modified.
     */
    modified_on?: string;
    /**
     * - HSN code.
     */
    reporting_hsn: string;
    /**
     * - List of tax slabs.
     */
    taxes: TaxSlab[];
    /**
     * - Type of HSN data (goods or services).
     */
    type: string;
};
/** @returns {Hierarchy} */
declare function Hierarchy(): Hierarchy;
type Hierarchy = {
    /**
     * - It is the unique identifier of the department
     * the category is mapped to.
     */
    department: number;
    /**
     * - It is the unique id of the L1 category mapped to the
     * L3 category.
     */
    l1: number;
    /**
     * - It is the unique id of the L2 category mapped to the
     * L3 category.
     */
    l2: number;
};
/** @returns {HsnCode} */
declare function HsnCode(): HsnCode;
type HsnCode = {
    /**
     * - The HSN code data.
     */
    data?: any;
};
/** @returns {SlabObject} */
declare function SlabObject(): SlabObject;
type SlabObject = {
    threshold?: number;
    tax?: number;
};
/** @returns {UpdateHsnCodesObject} */
declare function UpdateHsnCodesObject(): UpdateHsnCodesObject;
type UpdateHsnCodesObject = {
    modified_by?: any;
    /**
     * - The ID of the company.
     */
    company_id?: number;
    slabs?: SlabObject[];
    /**
     * - The HS2 code.
     */
    hs2_code?: string;
    /**
     * - The HSN code.
     */
    hsn_code?: string;
    tax_on?: string;
    id?: string;
};
/** @returns {UpdateHsnCode} */
declare function UpdateHsnCode(): UpdateHsnCode;
type UpdateHsnCode = {
    /**
     * - The HSN code data.
     */
    data?: any;
};
/** @returns {HsnCodesListingResponseSchemaV2} */
declare function HsnCodesListingResponseSchemaV2(): HsnCodesListingResponseSchemaV2;
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse1;
};
/** @returns {HsnCodesObject} */
declare function HsnCodesObject(): HsnCodesObject;
type HsnCodesObject = {
    /**
     * - The ID of the company.
     */
    company_id?: number;
    /**
     * - The HS2 code.
     */
    hs2_code?: string;
    /**
     * - The HSN code.
     */
    hsn_code?: string;
    /**
     * - The identifier of the HSN code.
     */
    id?: string;
    /**
     * - The date and time when the HSN code was
     * last modified.
     */
    modified_on?: string;
    /**
     * - The first tax rate.
     */
    tax1?: number;
    /**
     * - The second tax rate.
     */
    tax2?: number;
    /**
     * - Flag indicating whether tax is applicable on ESP.
     */
    tax_on_esp?: boolean;
    /**
     * - Flag indicating whether tax is applicable on MRP.
     */
    tax_on_mrp?: boolean;
    /**
     * - The threshold for the first tax rate.
     */
    threshold1?: number;
    /**
     * - The threshold for the second tax rate.
     */
    threshold2?: number;
};
/** @returns {HsnUpsert} */
declare function HsnUpsert(): HsnUpsert;
type HsnUpsert = {
    /**
     * - The ID of the company.
     */
    company_id: number;
    /**
     * - The HS2 code.
     */
    hs2_code: string;
    /**
     * - The HSN code.
     */
    hsn_code: string;
    /**
     * - Flag indicating whether the entry is active.
     */
    is_active?: boolean;
    /**
     * - The first tax rate.
     */
    tax1: number;
    /**
     * - The second tax rate.
     */
    tax2?: number;
    /**
     * - Flag indicating whether tax is applicable on ESP.
     */
    tax_on_esp?: boolean;
    /**
     * - Flag indicating whether tax is applicable on MRP.
     */
    tax_on_mrp: boolean;
    /**
     * - The threshold for the first tax rate.
     */
    threshold1: number;
    /**
     * - The threshold for the second tax rate.
     */
    threshold2?: number;
    /**
     * - The unique identifier.
     */
    uid?: number;
};
/** @returns {Image} */
declare function Image(): Image;
type Image = {
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
    url?: string;
};
/** @returns {ImageUrls} */
declare function ImageUrls(): ImageUrls;
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
/** @returns {InvSize} */
declare function InvSize(): InvSize;
type InvSize = {
    /**
     * - The currency used for the item price.
     */
    currency: string;
    expiration_date?: string;
    identifiers: GTIN[];
    is_set?: boolean;
    /**
     * - The unit of measure
     * for the item dimensions.
     */
    item_dimensions_unit_of_measure?: string;
    /**
     * - The height of the item.
     */
    item_height?: number;
    /**
     * - The length of the item.
     */
    item_length?: number;
    /**
     * - The weight of the item.
     */
    item_weight?: number;
    /**
     * - The unit of measure for
     * the item weight.
     */
    item_weight_unit_of_measure?: string;
    /**
     * - The width of the item.
     */
    item_width?: number;
    price?: number;
    price_effective: number;
    price_transfer?: number;
    quantity: number;
    set?: InventorySet;
    size: string;
    store_code: string;
};
/** @returns {InventoryBulkRequest} */
declare function InventoryBulkRequest(): InventoryBulkRequest;
type InventoryBulkRequest = {
    batch_id: string;
    company_id: number;
    sizes: InventoryJobPayload[];
    user?: any;
};
/** @returns {InventoryConfig} */
declare function InventoryConfig(): InventoryConfig;
type InventoryConfig = {
    data?: FilerList[];
    multivalue?: boolean;
};
/** @returns {InventoryCreateRequest} */
declare function InventoryCreateRequest(): InventoryCreateRequest;
type InventoryCreateRequest = {
    /**
     * - The list of attributes that you want to extract
     * in the export job.
     */
    data?: string[];
    /**
     * - This filters that are applied for the export of
     * the inventory.
     */
    filters: any;
    /**
     * - The list of the emails to be
     * notified after the completion of the job.
     */
    notification_emails?: string[];
    /**
     * - The type of file that needs to be exported.
     */
    type?: string;
};
/** @returns {InventoryExportAdvanceOption} */
declare function InventoryExportAdvanceOption(): InventoryExportAdvanceOption;
type InventoryExportAdvanceOption = {
    brand_ids?: number[];
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    store_ids?: number[];
    to_date?: string;
};
/** @returns {InventoryExportFilter} */
declare function InventoryExportFilter(): InventoryExportFilter;
type InventoryExportFilter = {
    /**
     * - The list of the brand ids that needs to be exported.
     */
    brand_ids?: number[];
    /**
     * - The modified on date from which the data
     * needs to be exported.
     */
    from_date?: string;
    /**
     * - The quantity range that needs to be exported.
     */
    quantity?: any;
    /**
     * - The list of the store ids that needs to be exported.
     */
    store_ids: number[];
    /**
     * - The modified on date till when the data needs
     * to be exported.
     */
    to_date?: string;
};
/** @returns {InventoryExportJobResponse} */
declare function InventoryExportJobResponse(): InventoryExportJobResponse;
type InventoryExportJobResponse = {
    items?: InventoryExportItem[];
};
/** @returns {InventoryExportItem} */
declare function InventoryExportItem(): InventoryExportItem;
type InventoryExportItem = {
    status?: string;
    type?: string;
    stats?: any;
    completed_on?: string;
    created_on?: string;
    modified_on?: string;
    seller_id?: number;
    task_id?: string;
    notification_emails?: string[];
    created_by?: CreatedBy;
    _id?: string;
    url?: string;
    trigger_on?: string;
    brand?: number[];
    store?: number[];
};
/** @returns {InventoryExportJob} */
declare function InventoryExportJob(): InventoryExportJob;
type InventoryExportJob = {
    /**
     * - Completion datetime of the job.
     */
    completed_on?: string;
    /**
     * - The filters that needs to be exported.
     */
    filters?: any;
    /**
     * - The notification emails for the job.
     */
    notification_emails?: string[];
    /**
     * - The seller id that needs to be exported.
     */
    seller_id: number;
    /**
     * - The status of the job.
     */
    status?: string;
    /**
     * - The task id of the job.
     */
    task_id: string;
    /**
     * - The type of file that needs to be exported.
     */
    type: string;
    /**
     * - URL odf the exported file.
     */
    url?: string;
};
/** @returns {InventoryExportJobListFilters} */
declare function InventoryExportJobListFilters(): InventoryExportJobListFilters;
type InventoryExportJobListFilters = {
    brand_ids?: number[];
    store_ids?: number[];
    brands?: string[];
    stores?: string[];
};
/** @returns {InventoryExportJobListStats} */
declare function InventoryExportJobListStats(): InventoryExportJobListStats;
type InventoryExportJobListStats = {
    success?: number;
    total?: number;
};
/** @returns {InventoryExportJobList} */
declare function InventoryExportJobList(): InventoryExportJobList;
type InventoryExportJobList = {
    status?: string;
    completed_on?: string;
    notification_emails?: string[];
    filters?: InventoryExportJobListFilters;
    stats?: InventoryExportJobListStats;
    type?: string;
    modified_on?: string;
    created_on?: string;
    seller_id?: number;
    url?: string;
    task_id?: string;
    created_by?: CreatedBy;
    id?: string;
};
/** @returns {InventoryExportJobListResponse} */
declare function InventoryExportJobListResponse(): InventoryExportJobListResponse;
type InventoryExportJobListResponse = {
    items?: InventoryExportJobList[];
    page?: Page;
};
/** @returns {InventoryExportQuantityFilter} */
declare function InventoryExportQuantityFilter(): InventoryExportQuantityFilter;
type InventoryExportQuantityFilter = {
    /**
     * - The maximum quantity that needs to be exported.
     */
    max?: number;
    /**
     * - The minimum quantity that needs to be exported.
     */
    min?: number;
    /**
     * - Condition for the quantity that needs to be exported.
     */
    operators: string;
};
/** @returns {ExportPatchRequest} */
declare function ExportPatchRequest(): ExportPatchRequest;
type ExportPatchRequest = {
    notification_emails?: string[];
    status?: string;
};
/** @returns {InventoryExportRequest} */
declare function InventoryExportRequest(): InventoryExportRequest;
type InventoryExportRequest = {
    brand?: number[];
    store?: number[];
    type?: string;
};
/** @returns {EditInventoryDataDownloadsResponse} */
declare function EditInventoryDataDownloadsResponse(): EditInventoryDataDownloadsResponse;
type EditInventoryDataDownloadsResponse = {
    url?: string;
    completed_on?: string;
    seller_id?: number;
    task_id?: string;
    created_on?: string;
    modified_on?: string;
    notification_emails?: string[];
    status?: string;
};
/** @returns {EditInventoryDownloadsResponse} */
declare function EditInventoryDownloadsResponse(): EditInventoryDownloadsResponse;
type EditInventoryDownloadsResponse = {
    data?: EditInventoryDataDownloadsResponse;
};
/** @returns {InventoryExportFiltersResponse} */
declare function InventoryExportFiltersResponse(): InventoryExportFiltersResponse;
type InventoryExportFiltersResponse = {
    brand_ids?: number[];
    store_ids?: number[];
};
/** @returns {Stats} */
declare function Stats(): Stats;
type Stats = {
    total?: number;
};
/** @returns {InventoryExportResponse} */
declare function InventoryExportResponse(): InventoryExportResponse;
type InventoryExportResponse = {
    /**
     * - The user that created the job.
     */
    created_by?: any;
    /**
     * - Creation datetime of the job
     */
    created_on?: string;
    filters?: InventoryExportFiltersResponse;
    /**
     * - Modification date of the job
     */
    modified_on?: string;
    /**
     * - The notification emails for the job.
     */
    notification_emails?: string[];
    /**
     * - The seller id that needs to be exported.
     */
    seller_id: number;
    /**
     * - The status of the job.
     */
    status?: string;
    /**
     * - The task id of the job.
     */
    task_id: string;
    /**
     * - The type of file that needs to be exported.
     */
    type?: string;
    stats?: Stats;
    _id?: string;
    trigger_on?: string;
    brand?: number[];
    store?: number[];
};
/** @returns {InventoryFailedReason} */
declare function InventoryFailedReason(): InventoryFailedReason;
type InventoryFailedReason = {
    /**
     * - It is the error message of the inventory error response.
     */
    errors?: string;
    /**
     * - It is the message of the activity performed.
     */
    message: string;
    /**
     * - It is the reason code of the inventory
     * error response.
     */
    reason_code?: number;
};
/** @returns {InventoryJobDetailResponse} */
declare function InventoryJobDetailResponse(): InventoryJobDetailResponse;
type InventoryJobDetailResponse = {
    /**
     * - This is the user detail of the user who
     * cancelled the job.
     */
    cancelled_by?: any;
    /**
     * - This is the timestamp of the cacellation
     * for this job.
     */
    cancelled_on?: string;
    /**
     * - This is the timestamp of the completion
     * for this job.
     */
    completed_on?: string;
    /**
     * - This is the user detail of the user who
     * cancelled the job.
     */
    created_by?: any;
    /**
     * - This is the timestamp of the creation for this job.
     */
    created_on?: string;
    /**
     * - This is the filter criteria applied for the export job.
     */
    filters: any;
    /**
     * - This is the ID of the job.
     */
    id: string;
    /**
     * - This is the timestamp of the modification
     * for this job.
     */
    modified_on?: string;
    /**
     * - User email to get notification
     * post completion of the job.
     */
    notification_emails?: string[];
    /**
     * - This ID of the company.
     */
    seller_id: number;
    /**
     * - This tells you the current status of the export job.
     */
    status?: string;
    /**
     * - This is the task id of the jobs that is used for search.
     */
    task_id: string;
    /**
     * - This is the file type of the export.
     */
    type?: string;
    /**
     * - This is the url to download the export.
     */
    url: string;
};
/** @returns {InventoryJobFilters} */
declare function InventoryJobFilters(): InventoryJobFilters;
type InventoryJobFilters = {
    /**
     * - The list of all the brands selected.
     */
    brands?: string[];
    /**
     * - The modified on date from which the data
     * needs to be exported.
     */
    from_date?: string;
    /**
     * - The quantity range that needs to be exported.
     */
    quantity?: any;
    /**
     * - The list of all the store selected.
     */
    stores?: string[];
    /**
     * - The modified on date till when the data needs
     * to be exported.
     */
    to_date?: string;
};
/** @returns {InventoryJobPayload} */
declare function InventoryJobPayload(): InventoryJobPayload;
type InventoryJobPayload = {
    /**
     * - The currency used for the item price.
     */
    currency?: string;
    /**
     * - The expiration date of the item.
     */
    expiration_date?: string;
    /**
     * - The unit of measure
     * for the item dimensions.
     */
    item_dimensions_unit_of_measure?: string;
    /**
     * - The unit of measure for
     * the item weight.
     */
    item_weight_unit_of_measure?: string;
    /**
     * - The price of the item.
     */
    price?: number;
    /**
     * - The effective price of the item.
     */
    price_effective?: number;
    /**
     * - The marked price of the item.
     */
    price_marked?: number;
    /**
     * - The quantity of the item.
     */
    quantity?: number;
    /**
     * - The identifier of the seller.
     */
    seller_identifier: string;
    /**
     * - The code of the store.
     */
    store_code: string;
    /**
     * - The tags associated with the item.
     */
    tags?: string[];
    /**
     * - The total quantity of the item.
     */
    total_quantity?: number;
    /**
     * - The trace ID of the inventory job payload.
     */
    trace_id?: string;
};
/** @returns {InventoryPage} */
declare function InventoryPage(): InventoryPage;
type InventoryPage = {
    has_next?: boolean;
    has_previous?: boolean;
    item_total: number;
    next_id?: string;
    type: string;
};
/** @returns {InventoryPayload} */
declare function InventoryPayload(): InventoryPayload;
type InventoryPayload = {
    /**
     * - The expiration date of the inventory item.
     */
    expiration_date?: string;
    /**
     * - The effective price of the inventory item.
     */
    price_effective?: number;
    /**
     * - The marked price of the inventory item.
     */
    price_marked?: number;
    /**
     * - The identifier of the seller.
     */
    seller_identifier: string;
    /**
     * - The ID of the store.
     */
    store_id: number;
    /**
     * - The tags associated with the inventory item.
     */
    tags?: string[];
    /**
     * - The total quantity of the inventory item.
     */
    total_quantity?: number;
    /**
     * - The trace ID of the inventory payload.
     */
    trace_id?: string;
};
/** @returns {InventoryRequest} */
declare function InventoryRequest(): InventoryRequest;
type InventoryRequest = {
    company_id: number;
    item: ItemQuery;
    sizes: InvSize[];
};
/** @returns {InventoryRequestSchemaV2} */
declare function InventoryRequestSchemaV2(): InventoryRequestSchemaV2;
type InventoryRequestSchemaV2 = {
    /**
     * - Additional metadata for the inventory request.
     */
    meta?: any;
    /**
     * - The list of inventory payloads.
     */
    payload?: InventoryPayload[];
};
/** @returns {InventoryIdentifier} */
declare function InventoryIdentifier(): InventoryIdentifier;
type InventoryIdentifier = {
    gtin_type?: string;
    gtin_value?: string;
    primary?: boolean;
};
/** @returns {InventoryGeoLocation} */
declare function InventoryGeoLocation(): InventoryGeoLocation;
type InventoryGeoLocation = {
    type?: string;
    coordinates?: number[];
};
/** @returns {InventoryMobileNumber} */
declare function InventoryMobileNumber(): InventoryMobileNumber;
type InventoryMobileNumber = {
    number?: string;
    country_code?: number;
};
/** @returns {InventoryAddress} */
declare function InventoryAddress(): InventoryAddress;
type InventoryAddress = {
    address1?: string;
    pincode?: string;
    city?: string;
    country?: string;
    state?: string;
    lat_long?: InventoryGeoLocation;
    country_code?: string;
};
/** @returns {InventoryManager} */
declare function InventoryManager(): InventoryManager;
type InventoryManager = {
    name?: string;
    email?: string;
    mobile_no?: InventoryMobileNumber;
};
/** @returns {InventoryStore} */
declare function InventoryStore(): InventoryStore;
type InventoryStore = {
    name?: string;
    store_code?: string;
    uid?: number;
    address?: InventoryAddress;
    manager?: InventoryManager;
    _custom_json?: any;
};
/** @returns {InventoryResponse} */
declare function InventoryResponse(): InventoryResponse;
type InventoryResponse = {
    store?: InventoryStore;
    uid?: string;
    size?: string;
    inventory_updated_on?: string;
    seller_identifier?: string;
    item_id?: number;
    quantity?: number;
    price?: number;
    price_effective?: number;
    price_transfer?: number;
    currency?: string;
    sellable_quantity?: number;
    created_by?: CreatedBy;
    modified_by?: CreatedBy;
    expiration_date?: string;
    identifiers?: InventoryIdentifier[];
};
/** @returns {InventoryResponseItem} */
declare function InventoryResponseItem(): InventoryResponseItem;
type InventoryResponseItem = {
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
/** @returns {InventoryResponsePaginated} */
declare function InventoryResponsePaginated(): InventoryResponsePaginated;
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
/** @returns {InventorySellerIdentifierResponsePaginated} */
declare function InventorySellerIdentifierResponsePaginated(): InventorySellerIdentifierResponsePaginated;
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
/** @returns {InventorySellerResponse} */
declare function InventorySellerResponse(): InventorySellerResponse;
type InventorySellerResponse = {
    /**
     * - Custom JSON data for the article.
     */
    _custom_json?: any;
    /**
     * - The date and time when the article was
     * added to the store.
     */
    added_on_store?: string;
    /**
     * - The metadata of the brand.
     */
    brand: any;
    /**
     * - The metadata of the company.
     */
    company: any;
    /**
     * - The country of origin of the article.
     */
    country_of_origin: string;
    /**
     * - The user who created the article.
     */
    created_by?: string;
    /**
     * - The dimensions of the article.
     */
    dimension: any;
    /**
     * - The expiration date of the article.
     */
    expiration_date?: string;
    /**
     * - Indicates if the article is fragile.
     */
    fragile: boolean;
    /**
     * - The Fynd article code.
     */
    fynd_article_code: string;
    /**
     * - The Fynd item code.
     */
    fynd_item_code: string;
    /**
     * - The Fynd metadata of the article.
     */
    fynd_meta?: any;
    /**
     * - The identifier of the article.
     */
    identifier: any;
    /**
     * - Indicates if the article is active.
     */
    is_active?: boolean;
    is_set?: boolean;
    /**
     * - The ID of the item.
     */
    item_id: number;
    /**
     * - The manufacturer of the article.
     */
    manufacturer: any;
    /**
     * - Additional metadata for the article.
     */
    meta?: any;
    /**
     * - The user who modified the article.
     */
    modified_by?: string;
    /**
     * - The price metadata of the article.
     */
    price: any;
    quantities?: Quantities;
    /**
     * - The raw metadata of the article.
     */
    raw_meta?: any;
    /**
     * - The return configuration of the article.
     */
    return_config?: any;
    /**
     * - The seller identifier of the article.
     */
    seller_identifier: string;
    set?: InventorySet;
    /**
     * - The size of the article.
     */
    size: string;
    /**
     * - The stage of the article.
     */
    stage?: string;
    /**
     * - The metadata of the store.
     */
    store: any;
    /**
     * - The tags associated with the article.
     */
    tags?: string[];
    /**
     * - The tax identifier of the article.
     */
    tax_identifier?: any;
    /**
     * - The total quantity of the article.
     */
    total_quantity: number;
    /**
     * - The trace ID of the article.
     */
    trace_id?: string;
    /**
     * - Indicates if the inventory is tracked
     * for the article.
     */
    track_inventory?: boolean;
    /**
     * - The traders associated with the article.
     */
    trader?: Trader1[];
    /**
     * - The unique identifier of the article.
     */
    uid: string;
    /**
     * - The weight of the article.
     */
    weight: any;
};
/** @returns {InventorySet} */
declare function InventorySet(): InventorySet;
type InventorySet = {
    name?: string;
    quantity?: number;
    size_distribution: SizeDistribution;
};
/** @returns {InventoryStockResponse} */
declare function InventoryStockResponse(): InventoryStockResponse;
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
/** @returns {InventoryUpdateResponse} */
declare function InventoryUpdateResponse(): InventoryUpdateResponse;
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    /**
     * - It is the success message of the inventory update.
     */
    message?: string;
    /**
     * - It is the success message of the inventory update.
     */
    success?: boolean;
};
/** @returns {InventoryValidationResponse} */
declare function InventoryValidationResponse(): InventoryValidationResponse;
type InventoryValidationResponse = {
    data?: any;
    message?: string;
};
/** @returns {InvoiceCredSerializer} */
declare function InvoiceCredSerializer(): InvoiceCredSerializer;
type InvoiceCredSerializer = {
    enabled?: boolean;
    password?: string;
    username?: string;
};
/** @returns {InvoiceDetailsSerializer} */
declare function InvoiceDetailsSerializer(): InvoiceDetailsSerializer;
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
/** @returns {ItemQuery} */
declare function ItemQuery(): ItemQuery;
type ItemQuery = {
    brand_uid?: number;
    item_code?: string;
    uid?: number;
};
/** @returns {Items} */
declare function Items(): Items;
type Items = {
    cancelled?: number;
    cancelled_records?: string[];
    company_id?: number;
    created_by?: UserCommon;
    created_on?: string;
    failed?: number;
    failed_records?: string[];
    file_path?: string;
    id?: string;
    is_active?: boolean;
    modified_by?: UserCommon;
    modified_on?: string;
    retry?: number;
    stage?: string;
    succeed?: number;
    total?: number;
    tracking_url?: string;
};
/** @returns {PriceRange} */
declare function PriceRange(): PriceRange;
type PriceRange = {
    min?: number;
    max?: number;
};
/** @returns {ProductPriceRangeSchema} */
declare function ProductPriceRangeSchema(): ProductPriceRangeSchema;
type ProductPriceRangeSchema = {
    effective?: PriceRange;
    marked?: PriceRange;
    currency?: string;
};
/** @returns {LimitedProductData} */
declare function LimitedProductData(): LimitedProductData;
type LimitedProductData = {
    attributes?: any;
    country_of_origin?: string;
    identifier?: any;
    images?: string[];
    item_code?: string;
    name?: string;
    price?: ProductPriceRangeSchema;
    quantity?: number;
    short_description?: string;
    sizes?: string[];
    slug?: string;
    uid?: number;
};
/** @returns {ListSizeGuide} */
declare function ListSizeGuide(): ListSizeGuide;
type ListSizeGuide = {
    items?: SizeGuideResponse[];
    page?: Page;
};
/** @returns {LocationDayWiseSerializer} */
declare function LocationDayWiseSerializer(): LocationDayWiseSerializer;
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    open: boolean;
    opening?: LocationTimingSerializer;
    weekday: string;
};
/** @returns {LocationIntegrationType} */
declare function LocationIntegrationType(): LocationIntegrationType;
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
/** @returns {LocationListSerializer} */
declare function LocationListSerializer(): LocationListSerializer;
type LocationListSerializer = {
    filters?: any[];
    items?: GetLocationSerializer[];
    page?: Page;
};
/** @returns {LocationManagerSerializer} */
declare function LocationManagerSerializer(): LocationManagerSerializer;
type LocationManagerSerializer = {
    email?: string;
    mobile_no: SellerPhoneNumber;
    name?: string;
};
/** @returns {LocationTimingSerializer} */
declare function LocationTimingSerializer(): LocationTimingSerializer;
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
/** @returns {Logo} */
declare function Logo(): Logo;
type Logo = {
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
    url?: string;
};
/** @returns {MOQData} */
declare function MOQData(): MOQData;
type MOQData = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
/** @returns {ManufacturerResponse} */
declare function ManufacturerResponse(): ManufacturerResponse;
type ManufacturerResponse = {
    /**
     * - The address of the manufacturer.
     */
    address: string;
    /**
     * - Indicates if it is the default manufacturer.
     */
    is_default: boolean;
    /**
     * - The name of the manufacturer.
     */
    name: string;
};
/** @returns {ManufacturerResponse1} */
declare function ManufacturerResponse1(): ManufacturerResponse1;
type ManufacturerResponse1 = {
    address?: string;
    is_default?: boolean;
    name?: string;
};
/** @returns {Media} */
declare function Media(): Media;
type Media = {
    meta?: any;
    type?: string;
    url: string;
};
/** @returns {Media1} */
declare function Media1(): Media1;
type Media1 = {
    /**
     * - It is the landscape cdn url for the category.
     */
    landscape: string;
    /**
     * - It is the logo cdn url for the category.
     */
    logo: string;
    /**
     * - It is the portrait cdn url for the category.
     */
    portrait: string;
};
/** @returns {Media2} */
declare function Media2(): Media2;
type Media2 = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
/** @returns {Meta} */
declare function Meta(): Meta;
type Meta = {
    headers?: GuideHeaders;
    values?: GuideValues[];
    unit?: string;
};
/** @returns {GuideHeaders} */
declare function GuideHeaders(): GuideHeaders;
type GuideHeaders = {
    col_1?: Header;
    col_2?: Header;
    col_3?: Header;
    col_4?: Header;
    col_5?: Header;
    col_6?: Header;
    col_7?: Header;
    col_8?: Header;
    col_9?: Header;
    col_10?: Header;
};
/** @returns {GuideValues} */
declare function GuideValues(): GuideValues;
type GuideValues = {
    col_1?: string;
    col_2?: string;
    col_3?: string;
    col_4?: string;
    col_5?: string;
    col_6?: string;
    col_7?: string;
    col_8?: string;
    col_9?: string;
    col_10?: string;
};
/** @returns {Header} */
declare function Header(): Header;
type Header = {
    value?: string;
    convertable?: boolean;
};
/** @returns {MetaDataListingFilterMetaResponse} */
declare function MetaDataListingFilterMetaResponse(): MetaDataListingFilterMetaResponse;
type MetaDataListingFilterMetaResponse = {
    display?: string;
    filter_types?: string[];
    key?: string;
    units?: any[];
};
/** @returns {MetaDataListingFilterResponse} */
declare function MetaDataListingFilterResponse(): MetaDataListingFilterResponse;
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
/** @returns {MetaDataListingResponse} */
declare function MetaDataListingResponse(): MetaDataListingResponse;
type MetaDataListingResponse = {
    filter: MetaDataListingFilterResponse;
    sort: MetaDataListingSortResponse;
};
/** @returns {MetaDataListingSortMetaResponse} */
declare function MetaDataListingSortMetaResponse(): MetaDataListingSortMetaResponse;
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
/** @returns {MetaDataListingSortResponse} */
declare function MetaDataListingSortResponse(): MetaDataListingSortResponse;
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
/** @returns {MetaFields} */
declare function MetaFields(): MetaFields;
type MetaFields = {
    /**
     * - The key of the metadata. Should be a non-empty
     * string and length should not exceed 30 characters.
     */
    key: string;
    /**
     * - The value of the metadata. Should be a non-empty
     * string and length should not exceed 100 characters.
     */
    value: string;
};
/** @returns {NetQuantity} */
declare function NetQuantity(): NetQuantity;
type NetQuantity = {
    /**
     * - The unit of measurement used for the net quantity
     * of the product.
     */
    unit?: string;
    /**
     * - The value of the net quantity of the product.
     */
    value?: number;
};
/** @returns {NetQuantityResponse} */
declare function NetQuantityResponse(): NetQuantityResponse;
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
/** @returns {NextSchedule} */
declare function NextSchedule(): NextSchedule;
type NextSchedule = {
    end?: string;
    start?: string;
};
/** @returns {OptInPostRequest} */
declare function OptInPostRequest(): OptInPostRequest;
type OptInPostRequest = {
    brand_ids?: number[];
    company_id?: number;
    enabled?: boolean;
    opt_level: string;
    platform?: string;
    store_ids?: number[];
};
/** @returns {OptinCompanyBrandDetailsView} */
declare function OptinCompanyBrandDetailsView(): OptinCompanyBrandDetailsView;
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
/** @returns {OptinAddress} */
declare function OptinAddress(): OptinAddress;
type OptinAddress = {
    address1?: string;
    state?: string;
    pincode?: string;
    city?: string;
    country?: string;
    latitude?: number;
    longitude?: number;
    country_code?: string;
};
/** @returns {OptinDocument} */
declare function OptinDocument(): OptinDocument;
type OptinDocument = {
    type?: string;
    value?: string;
    legal_name?: string;
    verified?: boolean;
    url?: string;
};
/** @returns {OptinBusinessCountryInfo} */
declare function OptinBusinessCountryInfo(): OptinBusinessCountryInfo;
type OptinBusinessCountryInfo = {
    country?: string;
    country_code?: string;
    currency?: any;
    timezone?: string;
};
/** @returns {OptinCompanyDetail} */
declare function OptinCompanyDetail(): OptinCompanyDetail;
type OptinCompanyDetail = {
    name?: string;
    uid?: number;
    business_info?: string;
    business_type?: string;
    company_type?: string;
    business_country_info?: OptinBusinessCountryInfo;
    address?: OptinAddress;
    documents?: OptinDocument[];
    brands?: number[];
    notification_emails?: string[];
    warnings?: any;
    stage?: string;
};
/** @returns {OptinCompanyMetrics} */
declare function OptinCompanyMetrics(): OptinCompanyMetrics;
type OptinCompanyMetrics = {
    brand?: number;
    company?: string;
    store?: number;
};
/** @returns {OptinStoreDetails} */
declare function OptinStoreDetails(): OptinStoreDetails;
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
/** @returns {OwnerAppItemResponse} */
declare function OwnerAppItemResponse(): OwnerAppItemResponse;
type OwnerAppItemResponse = {
    size_promotion_threshold?: any;
    alt_text?: any;
    is_cod?: boolean;
    is_gift?: boolean;
    moq?: any;
    seo?: any;
    /**
     * - Custom JSON data for the item
     */
    _custom_json?: any;
    /**
     * - Custom meta fields for the item
     */
    _custom_meta?: MetaFields[];
};
/** @returns {PTErrorResponse} */
declare function PTErrorResponse(): PTErrorResponse;
type PTErrorResponse = {
    code?: string;
    errors?: any;
    message?: string;
    meta?: any;
    status?: number;
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
    /**
     * - Total number of items.
     */
    total?: number;
};
/** @returns {PageResponse} */
declare function PageResponse(): PageResponse;
type PageResponse = {
    /**
     * - It is the current page of the page response schema.
     */
    current?: string;
    /**
     * - It is the bool indicates if there is a next page.
     */
    has_next?: boolean;
    /**
     * - It is the bool indicates if there is a
     * previous page.
     */
    has_previous?: boolean;
    /**
     * - It is the total number of item present for
     * the filter.
     */
    item_total?: number;
    /**
     * - It is the size of each page.
     */
    size?: number;
};
/** @returns {PageResponse1} */
declare function PageResponse1(): PageResponse1;
type PageResponse1 = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
/** @returns {PageResponseType} */
declare function PageResponseType(): PageResponseType;
type PageResponseType = {
    current: number;
    has_next: boolean;
    next: number;
    total_count: number;
};
/** @returns {Price} */
declare function Price(): Price;
type Price = {
    currency?: string;
    max_effective?: number;
    max_marked?: number;
    min_effective?: number;
    min_marked?: number;
};
/** @returns {Price1} */
declare function Price1(): Price1;
type Price1 = {
    currency_code?: string;
    currency_symbol?: string;
    max?: number;
    min?: number;
};
/** @returns {PriceArticle} */
declare function PriceArticle(): PriceArticle;
type PriceArticle = {
    currency?: string;
    effective?: number;
    marked?: number;
    tp_notes?: any;
    transfer?: number;
};
/** @returns {PriceMeta} */
declare function PriceMeta(): PriceMeta;
type PriceMeta = {
    /**
     * - The currency used for the prices.
     */
    currency: string;
    /**
     * - The effective price.
     */
    effective: number;
    /**
     * - The marked price.
     */
    marked: number;
    /**
     * - Additional notes for the transfer price.
     */
    tp_notes?: any;
    /**
     * - The transfer price.
     */
    transfer: number;
    /**
     * - The date and time of the last update.
     */
    updated_at?: string;
};
/** @returns {ProdcutTemplateCategoriesResponse} */
declare function ProdcutTemplateCategoriesResponse(): ProdcutTemplateCategoriesResponse;
type ProdcutTemplateCategoriesResponse = {
    items?: CategoriesResponse[];
    page?: Page;
};
/** @returns {Product} */
declare function Product(): Product;
type Product = {
    _custom_json?: any;
    all_company_ids?: number[];
    all_identifiers?: string[];
    all_sizes?: any[];
    attributes?: any;
    brand?: Brand;
    brand_uid?: number;
    category?: any;
    category_slug?: string;
    category_uid?: number;
    color?: string;
    company_id?: number;
    country_of_origin?: string;
    created_by?: any;
    created_on?: string;
    currency?: string;
    custom_order?: any;
    departments?: number[];
    description?: string;
    highlights?: string[];
    hsn_code?: string;
    id?: string;
    image_nature?: string;
    images?: Image[];
    is_active?: boolean;
    is_dependent?: boolean;
    is_expirable?: boolean;
    is_image_less_product?: boolean;
    is_physical?: boolean;
    is_set?: boolean;
    item_code?: string;
    item_type?: string;
    l3_mapping?: string[];
    media?: Media[];
    modified_by?: any;
    modified_on?: string;
    moq?: any;
    multi_size?: boolean;
    name?: string;
    net_quantity?: NetQuantityResponse;
    no_of_boxes?: number;
    pending?: string;
    primary_color?: string;
    product_group_tag?: string[];
    product_publish?: ProductPublished;
    return_config?: ReturnConfigResponse;
    short_description?: string;
    size_guide?: string;
    sizes?: any[];
    slug?: string;
    stage?: string;
    tags?: string[];
    tax_identifier?: any;
    teaser_tag?: any;
    template_tag?: string;
    trader?: Trader[];
    uid?: number;
    variant_group?: any;
    variant_media?: any;
    variants?: any;
    verified_by?: VerifiedBy;
    verified_on?: string;
};
/** @returns {ProductAttributesResponse} */
declare function ProductAttributesResponse(): ProductAttributesResponse;
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
/** @returns {ProductBrand} */
declare function ProductBrand(): ProductBrand;
type ProductBrand = {
    type?: string;
    uid?: number;
    name?: string;
    logo?: any;
    action?: PageAction;
    _custom_json?: any;
};
/** @returns {ProductBulkAssets} */
declare function ProductBulkAssets(): ProductBulkAssets;
type ProductBulkAssets = {
    batch_id?: string;
    company_id?: number;
    url: string;
    user: any;
};
/** @returns {ProductBulkRequest} */
declare function ProductBulkRequest(): ProductBulkRequest;
type ProductBulkRequest = {
    cancelled?: number;
    cancelled_records?: any[];
    company_id?: number;
    created_by?: UserDetail1;
    created_on?: string;
    failed?: number;
    failed_records?: any[];
    file_path?: string;
    is_active?: boolean;
    modified_by?: UserDetail1;
    modified_on?: string;
    stage?: string;
    succeed?: number;
    template?: ProductTemplate;
    template_tag?: string;
    total?: number;
};
/** @returns {InventoryBulkJob} */
declare function InventoryBulkJob(): InventoryBulkJob;
type InventoryBulkJob = {
    /**
     * - The ID of the company.
     */
    company_id?: number;
    /**
     * - The file path of the company.
     */
    file_path?: string;
};
/** @returns {ProductBulkResponse} */
declare function ProductBulkResponse(): ProductBulkResponse;
type ProductBulkResponse = {
    batch_id?: string;
};
/** @returns {InventoryBulkResponse} */
declare function InventoryBulkResponse(): InventoryBulkResponse;
type InventoryBulkResponse = {
    batch_id?: string;
};
/** @returns {ProductBulkRequestList} */
declare function ProductBulkRequestList(): ProductBulkRequestList;
type ProductBulkRequestList = {
    items?: ProductBulkRequest[];
    page?: Page;
};
/** @returns {ProductBundleItem} */
declare function ProductBundleItem(): ProductBundleItem;
type ProductBundleItem = {
    max_quantity: number;
    min_quantity: number;
    product_uid: number;
};
/** @returns {ProductBundleRequest} */
declare function ProductBundleRequest(): ProductBundleRequest;
type ProductBundleRequest = {
    choice: string;
    company_id?: string;
    created_by?: any;
    created_on?: string;
    is_active: boolean;
    logo?: string;
    meta?: any;
    modified_by?: any;
    modified_on?: string;
    name: string;
    page_visibility?: string[];
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    slug: string;
    auto_add_to_cart: boolean;
    auto_select: boolean;
    allow_remove: boolean;
    prefer_single_shipment: boolean;
    allow_individual_return: boolean;
    allow_individual_cancel: boolean;
};
/** @returns {ProductBundleUpdateRequest} */
declare function ProductBundleUpdateRequest(): ProductBundleUpdateRequest;
type ProductBundleUpdateRequest = {
    choice: string;
    company_id?: string;
    is_active: boolean;
    logo?: string;
    meta?: any;
    modified_by?: any;
    modified_on?: string;
    name: string;
    page_visibility?: string[];
    allow_individual_cancel?: boolean;
    allow_individual_return?: boolean;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    prefer_single_shipment?: boolean;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    slug: string;
};
/** @returns {ProductConfigurationDownloads} */
declare function ProductConfigurationDownloads(): ProductConfigurationDownloads;
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
/** @returns {ProductCreateUpdateSizesSchema} */
declare function ProductCreateUpdateSizesSchema(): ProductCreateUpdateSizesSchema;
type ProductCreateUpdateSizesSchema = {
    size?: string;
    price?: number;
    price_effective?: number;
    price_transfer?: number;
    currency?: string;
    item_length?: number;
    item_width?: number;
    item_height?: number;
    item_weight?: number;
    item_dimensions_unit_of_measure?: string;
    item_weight_unit_of_measure?: string;
    track_inventory?: boolean;
    identifiers?: GTIN[];
    _custom_json?: any;
    name?: string;
};
/** @returns {ProductCreateUpdateSchemaV2} */
declare function ProductCreateUpdateSchemaV2(): ProductCreateUpdateSchemaV2;
type ProductCreateUpdateSchemaV2 = {
    _custom_json?: any;
    action?: string;
    attributes?: any;
    brand_uid: number;
    bulk_job_id?: string;
    category_slug: string;
    change_request_id?: string;
    company_id: number;
    country_of_origin: string;
    currency: string;
    custom_order?: CustomOrder;
    departments: number[];
    description?: string;
    highlights?: string[];
    is_active?: boolean;
    is_dependent?: boolean;
    is_image_less_product?: boolean;
    is_set?: boolean;
    item_code: string;
    item_type: string;
    media?: Media[];
    multi_size?: boolean;
    name: string;
    net_quantity?: NetQuantity;
    no_of_boxes?: number;
    product_group_tag?: string[];
    product_publish?: ProductPublish1;
    return_config: ReturnConfig;
    short_description?: string;
    size_guide?: string;
    sizes: ProductCreateUpdateSizesSchema[];
    slug: string;
    tags?: string[];
    tax_identifier: TaxIdentifier;
    teaser_tag?: TeaserTag;
    template_tag: string;
    trader: Trader[];
    variant_group?: any;
    variant_media?: any;
    variants?: any;
};
/** @returns {ProductDetail} */
declare function ProductDetail(): ProductDetail;
type ProductDetail = {
    attributes?: any;
    brand?: ProductBrand;
    color?: string;
    description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    has_variant?: boolean;
    highlights?: string[];
    image_nature?: string;
    item_code?: string;
    item_type?: string;
    medias?: Media[];
    name?: string;
    product_online_date?: string;
    promo_meta?: any;
    rating?: number;
    rating_count?: number;
    short_description?: string;
    similars?: string[];
    slug: string;
    teaser_tag?: any;
    tryouts?: string[];
    type?: string;
    uid?: number;
};
/** @returns {ProductDetailAttribute} */
declare function ProductDetailAttribute(): ProductDetailAttribute;
type ProductDetailAttribute = {
    key?: string;
    type?: string;
    value?: string;
};
/** @returns {ProductDetailGroupedAttribute} */
declare function ProductDetailGroupedAttribute(): ProductDetailGroupedAttribute;
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
/** @returns {PatchProductDownloadsDataResponse} */
declare function PatchProductDownloadsDataResponse(): PatchProductDownloadsDataResponse;
type PatchProductDownloadsDataResponse = {
    created_on?: string;
    created_by?: CreatedBy;
    task_id?: string;
    modified_on?: string;
    seller_id?: number;
    url?: string;
    status?: string;
    notification_emails?: string[];
    completed_on?: string;
};
/** @returns {PatchProductDownloadsResponse} */
declare function PatchProductDownloadsResponse(): PatchProductDownloadsResponse;
type PatchProductDownloadsResponse = {
    data?: PatchProductDownloadsDataResponse;
};
/** @returns {ProductDownloadFilters} */
declare function ProductDownloadFilters(): ProductDownloadFilters;
type ProductDownloadFilters = {
    brands: string[];
    catalogue_types: string[];
    templates: string[];
};
/** @returns {CreateProductDownloadsDataResponse} */
declare function CreateProductDownloadsDataResponse(): CreateProductDownloadsDataResponse;
type CreateProductDownloadsDataResponse = {
    created_on?: string;
    type?: string;
    task_id?: string;
    filters?: ProductDownloadFilters;
    created_by?: CreatedBy;
    _id?: string;
    notification_emails?: any[];
    modified_on?: string;
    status?: string;
    seller_id?: number;
    stats?: Stats;
};
/** @returns {CreateProductDownloadsResponse} */
declare function CreateProductDownloadsResponse(): CreateProductDownloadsResponse;
type CreateProductDownloadsResponse = {
    data?: CreateProductDownloadsDataResponse;
};
/** @returns {GetProductDownloadsResponse} */
declare function GetProductDownloadsResponse(): GetProductDownloadsResponse;
type GetProductDownloadsResponse = {
    modified_on?: string;
    url?: string;
    status?: string;
    completed_on?: string;
    created_by?: CreatedBy;
    created_on?: string;
    seller_id?: number;
    task_id?: string;
    id?: string;
};
/** @returns {ProductDownloadsResponse} */
declare function ProductDownloadsResponse(): ProductDownloadsResponse;
type ProductDownloadsResponse = {
    /**
     * - The items of the job.
     */
    items?: ProductTemplateExportResponse[];
    page?: Page;
};
/** @returns {ProductFilters} */
declare function ProductFilters(): ProductFilters;
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
/** @returns {ProductFiltersKey} */
declare function ProductFiltersKey(): ProductFiltersKey;
type ProductFiltersKey = {
    display: string;
    kind?: string;
    logo?: string;
    name: string;
    operators?: string[];
};
/** @returns {ProductFiltersValue} */
declare function ProductFiltersValue(): ProductFiltersValue;
type ProductFiltersValue = {
    count?: number;
    currency_code?: string;
    currency_symbol?: string;
    display: string;
    display_format?: string;
    is_selected: boolean;
    max?: number;
    min?: number;
    query_format?: string;
    selected_max?: number;
    selected_min?: number;
    value?: string;
};
/** @returns {ApplicationCategoryAction} */
declare function ApplicationCategoryAction(): ApplicationCategoryAction;
type ApplicationCategoryAction = {
    page?: CategoryPageAction;
    type?: string;
};
/** @returns {ApplicationCategoryItem} */
declare function ApplicationCategoryItem(): ApplicationCategoryItem;
type ApplicationCategoryItem = {
    _custom_json?: any;
    action?: ApplicationCategoryAction;
    id?: number;
    logo?: CategoryImage;
    name?: string;
    uid?: number;
};
/** @returns {CategoryPageAction} */
declare function CategoryPageAction(): CategoryPageAction;
type CategoryPageAction = {
    query?: CategoryQuery;
    type?: string;
};
/** @returns {CategoryQuery} */
declare function CategoryQuery(): CategoryQuery;
type CategoryQuery = {
    category?: string[];
};
/** @returns {CategoryImage} */
declare function CategoryImage(): CategoryImage;
type CategoryImage = {
    type?: string;
    url?: string;
};
/** @returns {ProductListingDetail} */
declare function ProductListingDetail(): ProductListingDetail;
type ProductListingDetail = {
    attributes?: any;
    brand?: ProductBrand;
    color?: string;
    description?: string;
    discount?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    has_variant?: boolean;
    highlights?: string[];
    image_nature?: string;
    item_code?: string;
    item_type?: string;
    medias?: Media[];
    name?: string;
    price?: ProductListingPrice;
    product_online_date?: string;
    promo_meta?: any;
    rating?: number;
    rating_count?: number;
    sellable?: boolean;
    short_description?: string;
    similars?: string[];
    slug: string;
    teaser_tag?: any;
    tryouts?: string[];
    type?: string;
    uid?: number;
    categories?: ApplicationCategoryItem[];
    _custom_meta?: string[];
    action?: PageAction;
    is_tryout?: boolean;
    all_company_ids?: number[];
    is_custom_order?: boolean;
    collections?: string[];
};
/** @returns {PageAction} */
declare function PageAction(): PageAction;
type PageAction = {
    page?: ActionObject;
    type?: string;
};
/** @returns {ActionObject} */
declare function ActionObject(): ActionObject;
type ActionObject = {
    type?: string;
    query?: any;
};
/** @returns {ProductListingPrice} */
declare function ProductListingPrice(): ProductListingPrice;
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
    selling?: Price1;
};
/** @returns {ProductListingResponse} */
declare function ProductListingResponse(): ProductListingResponse;
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
/** @returns {ProductListingResponseV2} */
declare function ProductListingResponseV2(): ProductListingResponseV2;
type ProductListingResponseV2 = {
    items?: ProductSchemaV2[];
    page?: Page;
};
/** @returns {ProductVerificationModel} */
declare function ProductVerificationModel(): ProductVerificationModel;
type ProductVerificationModel = {
    rejected_fields?: any;
    status?: string;
    brand_uid?: number;
    created_on?: string;
    company_ids?: number[];
    item_code?: string;
    remark?: string;
    created_by?: CreatedBy;
    modified_on?: string;
    slug?: string;
    modified_by?: CreatedBy;
    item_id?: number;
    id?: string;
};
/** @returns {ProductPublish} */
declare function ProductPublish(): ProductPublish;
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
/** @returns {ProductPublish1} */
declare function ProductPublish1(): ProductPublish1;
type ProductPublish1 = {
    is_set?: boolean;
    product_online_date?: string;
};
/** @returns {ProductPublished} */
declare function ProductPublished(): ProductPublished;
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
/** @returns {ProductReturnConfigSerializer} */
declare function ProductReturnConfigSerializer(): ProductReturnConfigSerializer;
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
/** @returns {ProductReturnConfigBaseSerializer} */
declare function ProductReturnConfigBaseSerializer(): ProductReturnConfigBaseSerializer;
type ProductReturnConfigBaseSerializer = {
    /**
     * - Boolean Flag for item returnable
     */
    returnable: boolean;
    /**
     * - Valid return time for an item
     */
    time: number;
    /**
     * - Unit of return config days|hours
     */
    unit: string;
};
/** @returns {CategorySubSchema} */
declare function CategorySubSchema(): CategorySubSchema;
type CategorySubSchema = {
    name?: string;
    uid?: number;
};
/** @returns {CategoryProduct} */
declare function CategoryProduct(): CategoryProduct;
type CategoryProduct = {
    l3?: CategorySubSchema;
    l1?: CategorySubSchema;
    l2?: CategorySubSchema;
};
/** @returns {ProductSchemaV2} */
declare function ProductSchemaV2(): ProductSchemaV2;
type ProductSchemaV2 = {
    category?: CategoryProduct;
    _custom_json?: any;
    all_company_ids?: number[];
    all_identifiers?: string[];
    all_sizes?: any[];
    attributes?: any;
    brand?: Brand;
    brand_uid?: number;
    category_slug?: string;
    category_uid?: number;
    color?: string;
    company_id?: number;
    country_of_origin?: string;
    created_by?: any;
    created_on?: string;
    currency?: string;
    custom_order?: any;
    departments?: number[];
    description?: string;
    highlights?: string[];
    hsn_code?: string;
    id?: string;
    image_nature?: string;
    images?: Image[];
    is_active?: boolean;
    is_dependent?: boolean;
    is_expirable?: boolean;
    is_image_less_product?: boolean;
    is_physical?: boolean;
    is_set?: boolean;
    item_code?: string;
    item_type?: string;
    l3_mapping?: string[];
    media?: Media[];
    modified_by?: any;
    modified_on?: string;
    moq?: any;
    multi_size?: boolean;
    name?: string;
    net_quantity?: NetQuantityResponse;
    no_of_boxes?: number;
    pending?: string;
    primary_color?: string;
    product_group_tag?: string[];
    product_publish?: ProductPublish;
    return_config?: ReturnConfigResponse;
    short_description?: string;
    size_guide?: string;
    sizes?: any[];
    slug?: string;
    stage?: string;
    tags?: string[];
    tax_identifier?: any;
    teaser_tag?: any;
    template_tag?: string;
    trader?: Trader[];
    uid?: number;
    variant_group?: any;
    variant_media?: any;
    variants?: any;
    verified_by?: VerifiedBy;
    verified_on?: string;
};
/** @returns {ProductSize} */
declare function ProductSize(): ProductSize;
type ProductSize = {
    max: number;
    min: number;
};
/** @returns {ProductSizeDeleteDataResponse} */
declare function ProductSizeDeleteDataResponse(): ProductSizeDeleteDataResponse;
type ProductSizeDeleteDataResponse = {
    company_id?: number;
    item_id?: number;
    size?: string;
};
/** @returns {ProductSizeDeleteResponse} */
declare function ProductSizeDeleteResponse(): ProductSizeDeleteResponse;
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
/** @returns {ProductSortOn} */
declare function ProductSortOn(): ProductSortOn;
type ProductSortOn = {
    is_selected?: boolean;
    name?: string;
    value?: string;
    display?: string;
    logo?: string;
};
/** @returns {ProductSortOnv2} */
declare function ProductSortOnv2(): ProductSortOnv2;
type ProductSortOnv2 = {
    is_selected?: boolean;
    name?: string;
    value?: string;
    display?: string;
    logo?: string;
};
/** @returns {ProductTagsViewResponse} */
declare function ProductTagsViewResponse(): ProductTagsViewResponse;
type ProductTagsViewResponse = {
    items?: string[];
};
/** @returns {ProductTemplate} */
declare function ProductTemplate(): ProductTemplate;
type ProductTemplate = {
    attributes?: string[];
    categories?: string[];
    created_by?: any;
    modified_by?: any;
    created_on?: string;
    departments?: string[];
    description?: string;
    is_active?: boolean;
    is_archived?: boolean;
    is_expirable?: boolean;
    is_physical?: boolean;
    logo?: string;
    id?: string;
    modified_on?: string;
    name?: string;
    slug: string;
    tag?: string;
};
/** @returns {ProductTemplateDownloadsExport} */
declare function ProductTemplateDownloadsExport(): ProductTemplateDownloadsExport;
type ProductTemplateDownloadsExport = {
    filters?: ProductTemplateExportFilterRequest;
    /**
     * - The list of the emails to be
     * notified after the completion of the job.
     */
    notification_emails?: string[];
    /**
     * - This is the type of the file for the export.
     */
    type?: string;
};
/** @returns {ProductTemplateExportFilterRequest} */
declare function ProductTemplateExportFilterRequest(): ProductTemplateExportFilterRequest;
type ProductTemplateExportFilterRequest = {
    /**
     * - The list of the brands that needs to be exported.
     */
    brands?: string[];
    /**
     * - The list of the type of the catalog
     * such as set, standard and composite.
     */
    catalogue_types: string[];
    /**
     * - The modified on date from which the data
     * needs to be exported.
     */
    from_date?: string;
    /**
     * - The list of the templates that needs to be exported.
     */
    templates: string[];
    /**
     * - The modified on date till when the data needs
     * to be exported.
     */
    to_date?: string;
};
/** @returns {ProductTemplateExportResponse} */
declare function ProductTemplateExportResponse(): ProductTemplateExportResponse;
type ProductTemplateExportResponse = {
    trigger_on?: string;
    id?: string;
    template_tags?: any;
    /**
     * - Completion datetime of the job
     */
    completed_on?: string;
    /**
     * - The user that created the job.
     */
    created_by?: any;
    /**
     * - The filters that needs to be exported.
     */
    filters?: any;
    /**
     * - Modification date of the job
     */
    modified_on?: string;
    /**
     * - The notification emails for the job.
     */
    notification_emails?: string[];
    /**
     * - The seller id that needs to be exported.
     */
    seller_id: number;
    /**
     * - The status of the job.
     */
    status?: string;
    /**
     * - The task id of the job.
     */
    task_id: string;
    /**
     * - The type of file that needs to be exported.
     */
    type?: string;
    /**
     * - The filters that needs to be exported.
     */
    url?: string;
};
/** @returns {ProductVariants} */
declare function ProductVariants(): ProductVariants;
type ProductVariants = {
    brand_uid?: number;
    category_uid?: number;
    item_code?: string;
    media?: Media[];
    name?: string;
    uid?: number;
};
/** @returns {CompanyVerificationStats} */
declare function CompanyVerificationStats(): CompanyVerificationStats;
type CompanyVerificationStats = {
    verified?: number;
    total?: number;
};
/** @returns {CompanyVerificationResponse} */
declare function CompanyVerificationResponse(): CompanyVerificationResponse;
type CompanyVerificationResponse = {
    uid?: number;
    name?: string;
    stats?: CompanyVerificationStats;
};
/** @returns {ProductVariantsResponse} */
declare function ProductVariantsResponse(): ProductVariantsResponse;
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
/** @returns {Properties} */
declare function Properties(): Properties;
type Properties = {
    brand_uid?: any;
    category_slug?: any;
    command?: any;
    country_of_origin?: any;
    currency?: any;
    custom_order?: any;
    description?: any;
    highlights?: any;
    hsn_code?: any;
    is_active?: any;
    is_dependent?: any;
    item_code?: any;
    item_type?: any;
    media?: any;
    multi_size?: any;
    name?: any;
    no_of_boxes?: any;
    product_group_tag?: any;
    product_publish?: any;
    return_config?: any;
    short_description?: any;
    size_guide?: any;
    sizes?: any;
    slug?: any;
    tags?: any;
    teaser_tag?: any;
    trader?: any;
    trader_type?: any;
    variants?: any;
};
/** @returns {Quantities} */
declare function Quantities(): Quantities;
type Quantities = {
    damaged?: QuantityBase;
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
};
/** @returns {QuantitiesArticle} */
declare function QuantitiesArticle(): QuantitiesArticle;
type QuantitiesArticle = {
    damaged?: Quantity;
    not_available?: Quantity;
    order_committed?: Quantity;
    sellable?: Quantity;
};
/** @returns {Quantity} */
declare function Quantity(): Quantity;
type Quantity = {
    count?: number;
};
/** @returns {QuantityBase} */
declare function QuantityBase(): QuantityBase;
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
/** @returns {ReturnConfig} */
declare function ReturnConfig(): ReturnConfig;
type ReturnConfig = {
    returnable: boolean;
    time?: number;
    unit?: string;
};
/** @returns {ReturnConfig1} */
declare function ReturnConfig1(): ReturnConfig1;
type ReturnConfig1 = {
    /**
     * - Indicates if the item is returnable.
     */
    returnable?: boolean;
    /**
     * - The return time in days or hours.
     */
    time?: number;
    /**
     * - The unit of return time.
     */
    unit?: string;
};
/** @returns {ReturnConfig2} */
declare function ReturnConfig2(): ReturnConfig2;
type ReturnConfig2 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
/** @returns {ReturnConfigResponse} */
declare function ReturnConfigResponse(): ReturnConfigResponse;
type ReturnConfigResponse = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
/** @returns {Sitemap} */
declare function Sitemap(): Sitemap;
type Sitemap = {
    priority?: number;
    frequency?: string;
};
/** @returns {ApplicationItemSeoAction} */
declare function ApplicationItemSeoAction(): ApplicationItemSeoAction;
type ApplicationItemSeoAction = {
    page?: any;
    type: string;
};
/** @returns {ApplicationItemSeoBreadcrumbs} */
declare function ApplicationItemSeoBreadcrumbs(): ApplicationItemSeoBreadcrumbs;
type ApplicationItemSeoBreadcrumbs = {
    url?: string;
    action?: any;
};
/** @returns {ApplicationItemSeoMetaTagItem} */
declare function ApplicationItemSeoMetaTagItem(): ApplicationItemSeoMetaTagItem;
type ApplicationItemSeoMetaTagItem = {
    key: string;
    value: string;
};
/** @returns {ApplicationItemSeoMetaTags} */
declare function ApplicationItemSeoMetaTags(): ApplicationItemSeoMetaTags;
type ApplicationItemSeoMetaTags = {
    title: string;
    items?: ApplicationItemSeoMetaTagItem[];
};
/** @returns {Metatags} */
declare function Metatags(): Metatags;
type Metatags = {
    title?: string;
    items?: ApplicationItemSeoMetaTags[];
};
/** @returns {SizePromotionThreshold} */
declare function SizePromotionThreshold(): SizePromotionThreshold;
type SizePromotionThreshold = {
    threshold_type?: string;
    threshold_value?: number;
};
/** @returns {SEOData} */
declare function SEOData(): SEOData;
type SEOData = {
    description?: string;
    title?: string;
    sitemap?: Sitemap;
    breadcrumbs?: ApplicationItemSeoBreadcrumbs[];
    meta_tags?: Metatags[];
    canonical_url?: string;
};
/** @returns {SearchKeywordResult} */
declare function SearchKeywordResult(): SearchKeywordResult;
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
/** @returns {SearchableAttribute} */
declare function SearchableAttribute(): SearchableAttribute;
type SearchableAttribute = {
    /**
     * - The attribute key to search on. This key matches the
     * solr document key
     */
    key: string;
    /**
     * - The name of key to search on. This is for
     * displaying purposes on platform
     */
    name: string;
    /**
     * - Order in which the searchable attribute should
     * kick in. Higher the priority, higher the weight considered while searching
     */
    priority: number;
};
/** @returns {SecondLevelChild} */
declare function SecondLevelChild(): SecondLevelChild;
type SecondLevelChild = {
    _custom_json?: any;
    action?: Action;
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
    name?: string;
    slug?: string;
    uid?: number;
};
/** @returns {SellerPhoneNumber} */
declare function SellerPhoneNumber(): SellerPhoneNumber;
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
/** @returns {SitemapDetail} */
declare function SitemapDetail(): SitemapDetail;
type SitemapDetail = {
    priority?: number;
    frequency?: string;
};
/** @returns {SeoDetail} */
declare function SeoDetail(): SeoDetail;
type SeoDetail = {
    description?: string;
    title?: string;
    sitemap?: SitemapDetail;
    breadcrumbs?: ApplicationItemSeoBreadcrumbs[];
    meta_tags?: Metatags[];
    canonical_url?: string;
};
/** @returns {SetSize} */
declare function SetSize(): SetSize;
type SetSize = {
    pieces: number;
    size: string;
};
/** @returns {SingleCategoryResponse} */
declare function SingleCategoryResponse(): SingleCategoryResponse;
type SingleCategoryResponse = {
    data?: Category;
};
/** @returns {VariantTypesResponse} */
declare function VariantTypesResponse(): VariantTypesResponse;
type VariantTypesResponse = {
    items?: VariantTypeItem[];
};
/** @returns {VariantTypeItem} */
declare function VariantTypeItem(): VariantTypeItem;
type VariantTypeItem = {
    /**
     * - Name of the item
     */
    name?: string;
    /**
     * - Key of the item
     */
    key?: string;
    /**
     * - Array of item types
     */
    type?: string[];
    /**
     * - Configuration for the image
     */
    image_config?: any;
};
/** @returns {SingleProductResponse} */
declare function SingleProductResponse(): SingleProductResponse;
type SingleProductResponse = {
    data?: ProductSchemaV2;
};
/** @returns {Size} */
declare function Size(): Size;
type Size = {
    display?: string;
    is_available?: boolean;
    quantity?: number;
    value?: string;
};
/** @returns {SizeDistribution} */
declare function SizeDistribution(): SizeDistribution;
type SizeDistribution = {
    sizes: SetSize[];
};
/** @returns {SizeGuideResponse} */
declare function SizeGuideResponse(): SizeGuideResponse;
type SizeGuideResponse = {
    image?: string;
    /**
     * - The user who created the size guide.
     */
    created_by?: any;
    /**
     * - The user who modified the size guide.
     */
    modified_by?: any;
    active?: boolean;
    brand_id?: number;
    company_id?: number;
    created_on?: string;
    guide?: any;
    id?: string;
    modified_on?: string;
    name?: string;
    subtitle?: string;
    tag?: string;
    title?: string;
};
/** @returns {Time} */
declare function Time(): Time;
type Time = {
    hour?: number;
    minute?: number;
};
/** @returns {Timing} */
declare function Timing(): Timing;
type Timing = {
    closing?: Time;
    weekday?: string;
    opening?: Time;
    open?: boolean;
};
/** @returns {StoreItem} */
declare function StoreItem(): StoreItem;
type StoreItem = {
    stage?: string;
    name?: string;
    display_name?: string;
    modified_on?: string;
    modified_by?: UserSchemaCustom;
    manager?: Manager;
    notification_emails?: string[];
    verified_on?: string;
    verified_by?: UserSchemaCustom;
    integration_type?: IntegrationType;
    company_id?: number;
    documents?: Document[];
    created_on?: string;
    address?: Address;
    created_by?: UserSchemaCustom;
    _custom_json?: any;
    uid?: number;
    timing?: Timing[];
    store_type?: string;
};
/** @returns {UserSchemaCustom} */
declare function UserSchemaCustom(): UserSchemaCustom;
type UserSchemaCustom = {
    user_id?: string;
    username?: string;
};
/** @returns {Manager} */
declare function Manager(): Manager;
type Manager = {
    name?: string;
    email?: string;
    mobile_no?: MobileNo;
};
/** @returns {MobileNo} */
declare function MobileNo(): MobileNo;
type MobileNo = {
    country_code?: number;
    number?: string;
};
/** @returns {IntegrationType} */
declare function IntegrationType(): IntegrationType;
type IntegrationType = {
    order?: string;
    inventory?: string;
};
/** @returns {Address} */
declare function Address(): Address;
type Address = {
    country_code?: string;
    address1?: string;
    city?: string;
    address2?: string;
    country?: string;
    pincode?: string;
    landmark?: string;
    state?: string;
};
/** @returns {StoreDetail} */
declare function StoreDetail(): StoreDetail;
type StoreDetail = {
    additional_contacts?: any[];
    company_id?: number;
    created_on?: string;
    display_name?: string;
    modified_on?: string;
    name?: string;
    store_code?: string;
    store_type?: string;
    timing?: Timing[];
    uid?: number;
    stage?: string;
    modified_by?: UserSchemaCustom;
    manager?: Manager;
    notification_emails?: string[];
    verified_on?: string;
    verified_by?: UserSchemaCustom;
    integration_type?: IntegrationType;
    documents?: Document[];
    address?: Address;
    created_by?: UserSchemaCustom;
    _custom_json?: any;
};
/** @returns {StoreMeta} */
declare function StoreMeta(): StoreMeta;
type StoreMeta = {
    id: number;
};
/** @returns {SuccessResponse} */
declare function SuccessResponse(): SuccessResponse;
type SuccessResponse = {
    success?: boolean;
};
/** @returns {SuccessResponse1} */
declare function SuccessResponse1(): SuccessResponse1;
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
/** @returns {TaxIdentifier} */
declare function TaxIdentifier(): TaxIdentifier;
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
/** @returns {TaxSlab} */
declare function TaxSlab(): TaxSlab;
type TaxSlab = {
    cess?: number;
    effective_date: string;
    rate: number;
    threshold: number;
};
/** @returns {TeaserTag} */
declare function TeaserTag(): TeaserTag;
type TeaserTag = {
    tag?: string;
    url?: string;
};
/** @returns {TemplateDetails} */
declare function TemplateDetails(): TemplateDetails;
type TemplateDetails = {
    attributes?: string[];
    categories?: string[];
    departments?: string[];
    description?: string;
    id?: string;
    is_active?: boolean;
    is_archived?: boolean;
    is_expirable: boolean;
    is_physical: boolean;
    logo?: string;
    name?: string;
    slug: string;
    tag?: string;
};
/** @returns {TemplateValidationData} */
declare function TemplateValidationData(): TemplateValidationData;
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
/** @returns {TemplatesResponse} */
declare function TemplatesResponse(): TemplatesResponse;
type TemplatesResponse = {
    items?: ProductTemplate[];
    page?: Page;
};
/** @returns {TemplatesValidationResponse} */
declare function TemplatesValidationResponse(): TemplatesValidationResponse;
type TemplatesValidationResponse = {
    data?: TemplateValidationData;
    template_details?: TemplateDetails;
};
/** @returns {ThirdLevelChild} */
declare function ThirdLevelChild(): ThirdLevelChild;
type ThirdLevelChild = {
    _custom_json?: any;
    action?: Action;
    banners?: ImageUrls;
    childs?: any[];
    name?: string;
    slug?: string;
    uid?: number;
};
/** @returns {Trader} */
declare function Trader(): Trader;
type Trader = {
    address?: string[];
    name: string;
    type?: string;
};
/** @returns {Trader1} */
declare function Trader1(): Trader1;
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
/** @returns {Trader2} */
declare function Trader2(): Trader2;
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
/** @returns {UpdateCollection} */
declare function UpdateCollection(): UpdateCollection;
type UpdateCollection = {
    action?: Action;
    uid?: string;
    app_id?: string;
    _custom_json?: any;
    _locale_language?: any;
    _schedule?: CollectionSchedule;
    allow_facets?: boolean;
    allow_sort?: boolean;
    badge?: CollectionBadge;
    banners?: CollectionBanner;
    description?: string;
    is_active?: boolean;
    is_visible?: boolean;
    logo?: CollectionImage;
    meta?: any;
    /**
     * - User info.
     */
    modified_by?: string;
    name?: string;
    priority?: number;
    published?: boolean;
    query?: CollectionQuery[];
    seo?: SeoDetail;
    slug?: string;
    sort_on?: string;
    tags?: string[];
    type?: string;
    visible_facets_keys?: string[];
    is_searchable?: boolean;
};
/** @returns {UpdateSearchConfigurationRequest} */
declare function UpdateSearchConfigurationRequest(): UpdateSearchConfigurationRequest;
type UpdateSearchConfigurationRequest = {
    /**
     * - The application id where custom search
     * configuration is set
     */
    application_id: string;
    /**
     * - The company id where custom search configuration is set
     */
    company_id: number;
    /**
     * - The user who created the search configuration.
     */
    created_by?: any;
    /**
     * - The date and time when the search
     * configuration was created.
     */
    created_on?: string;
    /**
     * - Flag indicating if proximity
     * search is enabled for this attribute.
     */
    is_proximity_enabled?: boolean;
    /**
     * - The user who modified the search configuration.
     */
    modified_by?: any;
    /**
     * - The date and time when the search
     * configuration was last modified.
     */
    modified_on?: string;
    /**
     * - Proximity distance configuration
     */
    proximity?: number;
    /**
     * - The searchable
     * attributes defined on the application.
     */
    searchable_attributes?: SearchableAttribute[];
};
/** @returns {UpdateSearchConfigurationResponse} */
declare function UpdateSearchConfigurationResponse(): UpdateSearchConfigurationResponse;
type UpdateSearchConfigurationResponse = {
    success?: boolean;
};
/** @returns {UpdatedResponse} */
declare function UpdatedResponse(): UpdatedResponse;
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
/** @returns {UserCommon} */
declare function UserCommon(): UserCommon;
type UserCommon = {
    company_id?: number;
    user_id?: string;
    username?: string;
};
/** @returns {UserDetail} */
declare function UserDetail(): UserDetail;
type UserDetail = {
    /**
     * - The contact details of the user.
     */
    contact?: string;
    /**
     * - A flag indicating whether the user is a super user.
     */
    super_user?: boolean;
    /**
     * - The user ID of the user.
     */
    user_id: string;
    /**
     * - The username of the user.
     */
    username: string;
};
/** @returns {UserDetail1} */
declare function UserDetail1(): UserDetail1;
type UserDetail1 = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
/** @returns {UserInfo} */
declare function UserInfo(): UserInfo;
type UserInfo = {
    email?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
/** @returns {UserInfo1} */
declare function UserInfo1(): UserInfo1;
type UserInfo1 = {
    /**
     * - The email address of the user.
     */
    email?: string;
    /**
     * - The unique ID of the user.
     */
    uid?: string;
    /**
     * - The ID of the user.
     */
    user_id?: string;
    /**
     * - The username of the user.
     */
    username?: string;
};
/** @returns {UserSerializer} */
declare function UserSerializer(): UserSerializer;
type UserSerializer = {
    /**
     * - The contact information of the user.
     */
    contact?: string;
    /**
     * - The unique ID of the user.
     */
    user_id?: string;
    /**
     * - The username of the user.
     */
    username?: string;
};
/** @returns {UserSerializer1} */
declare function UserSerializer1(): UserSerializer1;
type UserSerializer1 = {
    _id?: string;
    contact?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
/** @returns {UserSerializer2} */
declare function UserSerializer2(): UserSerializer2;
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
/** @returns {UserSerializer3} */
declare function UserSerializer3(): UserSerializer3;
type UserSerializer3 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
/** @returns {ValidateIdentifier} */
declare function ValidateIdentifier(): ValidateIdentifier;
type ValidateIdentifier = {
    gtin_type: string;
    gtin_value: string;
    primary?: boolean;
};
/** @returns {ValidateProduct} */
declare function ValidateProduct(): ValidateProduct;
type ValidateProduct = {
    valid?: boolean;
    message?: string;
};
/** @returns {ValidateSizeGuide} */
declare function ValidateSizeGuide(): ValidateSizeGuide;
type ValidateSizeGuide = {
    active?: boolean;
    brand_id?: number;
    company_id?: number;
    created_by?: any;
    created_on?: string;
    description?: string;
    guide?: Guide;
    id?: string;
    image?: string;
    modified_by?: any;
    modified_on?: string;
    name: string;
    subtitle?: string;
    tag?: string;
    title: string;
};
/** @returns {VerifiedBy} */
declare function VerifiedBy(): VerifiedBy;
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
/** @returns {WeightResponse} */
declare function WeightResponse(): WeightResponse;
type WeightResponse = {
    /**
     * - Indicates if it is the default weight.
     */
    is_default: boolean;
    /**
     * - The shipping weight.
     */
    shipping: number;
    /**
     * - The unit of weight.
     */
    unit: string;
};
/** @returns {WeightResponse1} */
declare function WeightResponse1(): WeightResponse1;
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
/** @returns {CreatedBy} */
declare function CreatedBy(): CreatedBy;
type CreatedBy = {
    username?: string;
    user_id?: string;
};
/** @returns {ModifiedBy} */
declare function ModifiedBy(): ModifiedBy;
type ModifiedBy = {
    username?: string;
    user_id?: string;
};
/** @returns {Marketplaces} */
declare function Marketplaces(): Marketplaces;
type Marketplaces = {
    brand_ids?: number[];
    app_id?: string;
    enabled?: boolean;
    created_by?: any;
    created_on?: string;
    opt_level?: string;
    company_id?: number;
    modified_by?: any;
    store_ids?: number[];
    modified_on?: string;
    platforms?: string;
    _id?: string;
};
/** @returns {GetAllMarketplaces} */
declare function GetAllMarketplaces(): GetAllMarketplaces;
type GetAllMarketplaces = {
    items?: Marketplaces[];
    page?: Page;
};
/** @returns {CreateMarketplaceOptinRequest} */
declare function CreateMarketplaceOptinRequest(): CreateMarketplaceOptinRequest;
type CreateMarketplaceOptinRequest = {
    brand_ids?: number[];
    company_id?: number;
    enabled?: boolean;
    opt_level?: string;
    platform?: string;
    store_ids?: number[];
};
/** @returns {UpdateMarketplaceOptinRequest} */
declare function UpdateMarketplaceOptinRequest(): UpdateMarketplaceOptinRequest;
type UpdateMarketplaceOptinRequest = {
    brand_ids?: number[];
    company_id?: number;
    enabled?: boolean;
    opt_level?: string;
    platform?: string;
    store_ids?: number[];
};
/** @returns {CreateMarketplaceOptinResponse} */
declare function CreateMarketplaceOptinResponse(): CreateMarketplaceOptinResponse;
type CreateMarketplaceOptinResponse = {
    store_ids?: number[];
    brand_ids?: number[];
    company_id?: number;
    opt_level?: string;
    platform?: string;
    enabled?: boolean;
    created_by?: CreatedBy;
    modified_by?: CreatedBy;
    app_id?: string;
};
/** @returns {GetProductTemplateSlugItems} */
declare function GetProductTemplateSlugItems(): GetProductTemplateSlugItems;
type GetProductTemplateSlugItems = {
    attributes?: string[];
    departments?: string[];
    is_active?: boolean;
    tag?: string;
    is_physical?: boolean;
    description?: string;
    logo?: string;
    is_archived?: boolean;
    slug?: string;
    categories?: string[];
    is_expirable?: boolean;
    name?: string;
    id?: string;
};
/** @returns {GetProductTemplateSlugResponse} */
declare function GetProductTemplateSlugResponse(): GetProductTemplateSlugResponse;
type GetProductTemplateSlugResponse = {
    page?: Page;
    items?: GetProductTemplateSlugItems[];
};
/** @returns {UpdateMarketplaceOptinResponse} */
declare function UpdateMarketplaceOptinResponse(): UpdateMarketplaceOptinResponse;
type UpdateMarketplaceOptinResponse = {
    brand_ids?: number[];
    company_id?: number;
    app_id?: string;
    enabled?: boolean;
    opt_level?: string;
    platform?: string;
    store_ids?: number[];
    created_by?: any;
    modified_by?: any;
};
/** @returns {AutocompleteRequestSchema} */
declare function AutocompleteRequestSchema(): AutocompleteRequestSchema;
type AutocompleteRequestSchema = {
    query_suggestion?: any;
    product_suggestion?: any;
    collection_suggestion?: any;
    brand_suggestion?: any;
    category_suggestion?: any;
};
/** @returns {AutocompleteUpsertResponseSchema} */
declare function AutocompleteUpsertResponseSchema(): AutocompleteUpsertResponseSchema;
type AutocompleteUpsertResponseSchema = {
    message?: string;
    id?: string;
    success?: boolean;
};
/** @returns {AutocompleteErrorResponseSchema} */
declare function AutocompleteErrorResponseSchema(): AutocompleteErrorResponseSchema;
type AutocompleteErrorResponseSchema = {
    message?: string;
    success?: boolean;
};
/** @returns {AutocompleteResponseSchema} */
declare function AutocompleteResponseSchema(): AutocompleteResponseSchema;
type AutocompleteResponseSchema = {
    id?: string;
    query_suggestion?: any;
    product_suggestion?: any;
    collection_suggestion?: any;
    brand_suggestion?: any;
    category_suggestion?: any;
};
/** @returns {ProductListingActionPage} */
declare function ProductListingActionPage(): ProductListingActionPage;
type ProductListingActionPage = {
    type?: string;
    query?: any;
    params?: any;
};
/** @returns {ProductListingAction} */
declare function ProductListingAction(): ProductListingAction;
type ProductListingAction = {
    type?: string;
    page?: ProductListingActionPage;
};
/** @returns {AutocompleteItem} */
declare function AutocompleteItem(): AutocompleteItem;
type AutocompleteItem = {
    logo?: Media;
    display?: string;
    type?: string;
    _custom_json?: any;
    action?: ProductListingAction;
};
/** @returns {AutocompletePreviewResponseSchema} */
declare function AutocompletePreviewResponseSchema(): AutocompletePreviewResponseSchema;
type AutocompletePreviewResponseSchema = {
    items?: AutocompleteItem[];
};
/** @returns {CreateAppPriceFactoryRequestSchema} */
declare function CreateAppPriceFactoryRequestSchema(): CreateAppPriceFactoryRequestSchema;
type CreateAppPriceFactoryRequestSchema = {
    name?: string;
    code?: string;
    is_active?: boolean;
    factory_type_ids?: string[];
    department_ids?: number[];
    application_id?: string;
    factory_type?: string;
    currency?: string;
    currency_symbol?: string;
};
/** @returns {CreateAppPriceFactoryResponse} */
declare function CreateAppPriceFactoryResponse(): CreateAppPriceFactoryResponse;
type CreateAppPriceFactoryResponse = {
    /**
     * - Type of the factory.
     */
    factory_type?: string;
    /**
     * - Indicates whether the factory is active or not.
     */
    is_active?: boolean;
    /**
     * - Code associated with the factory.
     */
    code?: string;
    /**
     * - Array of unique identifiers
     * associated with the factory type.
     */
    factory_type_ids?: string[];
    /**
     * - Currency associated with the factory.
     */
    currency?: string;
    /**
     * - Unique identifier for the application.
     */
    application_id?: string;
    /**
     * - Date and time when the factory was created.
     */
    created_on?: string;
    created_by?: CreatedBy;
    modified_by?: CreatedBy;
    /**
     * - Name of the factory.
     */
    name?: string;
    /**
     * - Array of department identifiers
     * associated with the factory.
     */
    department_ids?: number[];
    /**
     * - Date and time when the factory was last modified.
     */
    modified_on?: string;
    /**
     * - Unique identifier for the factory.
     */
    _id?: string;
};
/** @returns {ErrorDetails} */
declare function ErrorDetails(): ErrorDetails;
type ErrorDetails = {
    status_code?: number;
};
/** @returns {AppPriceFactory} */
declare function AppPriceFactory(): AppPriceFactory;
type AppPriceFactory = {
    _id?: string;
    application_id: string;
    department_ids: number[];
    factory_type: string;
    factory_type_ids: string[];
    code: string;
    name: string;
    is_active: boolean;
    currency: string;
    created_by?: any;
    modified_by?: any;
    created_on?: string;
    modified_on?: string;
};
/** @returns {EditAppPriceFactoryRequestSchema} */
declare function EditAppPriceFactoryRequestSchema(): EditAppPriceFactoryRequestSchema;
type EditAppPriceFactoryRequestSchema = {
    name?: string;
    code?: string;
    is_active?: boolean;
    factory_type_ids?: string[];
    department_ids?: number[];
    application_id?: string;
    factory_type?: string;
    currency?: string;
    currency_symbol?: string;
};
/** @returns {GetAppPriceFactoryResponse} */
declare function GetAppPriceFactoryResponse(): GetAppPriceFactoryResponse;
type GetAppPriceFactoryResponse = {
    items?: AppPriceFactory[];
    page?: Page;
};
/** @returns {CreateAppPriceFactoryProduct} */
declare function CreateAppPriceFactoryProduct(): CreateAppPriceFactoryProduct;
type CreateAppPriceFactoryProduct = {
    item_id?: number;
    marked_price?: number;
    selling_price?: number;
    seller_identifier?: string;
    zone?: string;
    action?: string;
};
/** @returns {PriceFactorySizes} */
declare function PriceFactorySizes(): PriceFactorySizes;
type PriceFactorySizes = {
    size_name?: string;
    seller_identifier?: string;
    marked_price?: number;
    selling_price?: number;
    currency?: string;
    is_active?: boolean;
};
/** @returns {CompanySizes} */
declare function CompanySizes(): CompanySizes;
type CompanySizes = {
    size_name?: string;
    seller_identifier?: string;
    marked_price?: number;
    selling_price?: number;
    currency?: string;
    is_active?: boolean;
};
/** @returns {CreateAppPriceFactoryProductItem} */
declare function CreateAppPriceFactoryProductItem(): CreateAppPriceFactoryProductItem;
type CreateAppPriceFactoryProductItem = {
    name?: string;
    item_id?: number;
    seller_identifier?: string;
    marked_price?: number;
    selling_price?: number;
    zone?: string;
    command?: string;
};
/** @returns {CreatePriceFactoryProductRequest} */
declare function CreatePriceFactoryProductRequest(): CreatePriceFactoryProductRequest;
type CreatePriceFactoryProductRequest = {
    items?: CreateAppPriceFactoryProductItem[];
};
/** @returns {CreateAppPriceFactoryProductResponse} */
declare function CreateAppPriceFactoryProductResponse(): CreateAppPriceFactoryProductResponse;
type CreateAppPriceFactoryProductResponse = {
    item_id?: number;
    item_name?: string;
    item_code?: string;
    brand?: string;
    category?: string;
    factory_type_id?: string[];
    media?: Media[];
    sizes?: PriceFactorySizes[];
    company_sizes?: CompanySizes[];
};
/** @returns {UpdateAppPriceFactoryProductRequest} */
declare function UpdateAppPriceFactoryProductRequest(): UpdateAppPriceFactoryProductRequest;
type UpdateAppPriceFactoryProductRequest = {
    sizes?: PriceFactorySizes[];
};
/** @returns {UpdateAppPriceFactoryProductResponse} */
declare function UpdateAppPriceFactoryProductResponse(): UpdateAppPriceFactoryProductResponse;
type UpdateAppPriceFactoryProductResponse = {
    item_id?: number;
    zone_id?: string;
    media?: Media[];
    company_sizes?: CompanySizes[];
    sizes?: PriceFactorySizes[];
};
/** @returns {CreateAppPriceFactoryProductRequest} */
declare function CreateAppPriceFactoryProductRequest(): CreateAppPriceFactoryProductRequest;
type CreateAppPriceFactoryProductRequest = {
    items?: CreateAppPriceFactoryProduct[];
};
/** @returns {FailedRecordsData} */
declare function FailedRecordsData(): FailedRecordsData;
type FailedRecordsData = {
    item_id?: number;
    error?: string;
};
/** @returns {CreatePriceFactoryProductResponse} */
declare function CreatePriceFactoryProductResponse(): CreatePriceFactoryProductResponse;
type CreatePriceFactoryProductResponse = {
    total_records?: number;
    success_records?: number;
    failed_records?: number;
    failed_records_data?: FailedRecordsData[];
    stage?: string;
};
/** @returns {CreateAppPriceFactoryProductsResponse} */
declare function CreateAppPriceFactoryProductsResponse(): CreateAppPriceFactoryProductsResponse;
type CreateAppPriceFactoryProductsResponse = {
    items?: CreateAppPriceFactoryProductResponse[];
    page?: Page;
};
/** @returns {CreateAppPriceFactoryProductBulkJobRequest} */
declare function CreateAppPriceFactoryProductBulkJobRequest(): CreateAppPriceFactoryProductBulkJobRequest;
type CreateAppPriceFactoryProductBulkJobRequest = {
    file_path?: string;
    file_type?: string;
    job_type?: string;
};
/** @returns {CreateAppPriceFactoryProductExportJobRequest} */
declare function CreateAppPriceFactoryProductExportJobRequest(): CreateAppPriceFactoryProductExportJobRequest;
type CreateAppPriceFactoryProductExportJobRequest = {
    sample_with_data?: boolean;
};
/** @returns {CreateAppPriceFactoryProductExportJobResponse} */
declare function CreateAppPriceFactoryProductExportJobResponse(): CreateAppPriceFactoryProductExportJobResponse;
type CreateAppPriceFactoryProductExportJobResponse = {
    job_type?: string;
    company_id?: number;
    file_type?: string;
    _id?: string;
    created_on?: string;
    modified_on?: string;
    created_by?: any;
    modified_by?: any;
    success_records?: number;
    application_id?: string;
    total_records?: number;
    factory_id?: string;
    is_active?: boolean;
    stage?: string;
    failed_records?: number;
};
/** @returns {AppPriceFactoryProductExportPollJobResponse} */
declare function AppPriceFactoryProductExportPollJobResponse(): AppPriceFactoryProductExportPollJobResponse;
type AppPriceFactoryProductExportPollJobResponse = {
    id?: string;
    stage?: string;
    is_active?: boolean;
    created_on?: string;
    total_records?: number;
    success_records?: number;
    failed_records?: number;
};
/** @returns {CreateAppPriceFactoryProductExportJobPollResponse} */
declare function CreateAppPriceFactoryProductExportJobPollResponse(): CreateAppPriceFactoryProductExportJobPollResponse;
type CreateAppPriceFactoryProductExportJobPollResponse = {
    items?: AppPriceFactoryProductExportPollJobResponse[];
    page?: Page;
};
/** @returns {CreateAppPriceFactoryProductBulkJobResponse} */
declare function CreateAppPriceFactoryProductBulkJobResponse(): CreateAppPriceFactoryProductBulkJobResponse;
type CreateAppPriceFactoryProductBulkJobResponse = {
    job_id?: string;
    status?: string;
    file_type?: string;
    stage?: string;
    created_by?: CreatedBy;
    company_id?: number;
    job_type?: string;
    total_records?: number;
    is_active?: boolean;
    modified_on?: string;
    application_id?: string;
    factory_id?: string;
    modified_by?: CreatedBy;
    created_on?: string;
    failed_records?: number;
    file_path?: string;
    success_records?: number;
    _id?: string;
};
/** @returns {CreateAppPriceFactoryProductBulkJobValidateResponse} */
declare function CreateAppPriceFactoryProductBulkJobValidateResponse(): CreateAppPriceFactoryProductBulkJobValidateResponse;
type CreateAppPriceFactoryProductBulkJobValidateResponse = {
    job_type?: string;
    file_type?: string;
    file_path?: string;
    job_id?: string;
    status?: string;
    created_on?: string;
    modified_on?: string;
    created_by?: CreatedBy;
    modified_by?: CreatedBy;
};
/** @returns {CreateAppPriceFactoryProductBulkJobPollResponse} */
declare function CreateAppPriceFactoryProductBulkJobPollResponse(): CreateAppPriceFactoryProductBulkJobPollResponse;
type CreateAppPriceFactoryProductBulkJobPollResponse = {
    status?: string;
    total_records?: number;
    success_records?: number;
    failed_records?: number;
    error_file?: string;
    created_on?: string;
    modified_on?: string;
    created_by?: any;
    modified_by?: any;
    /**
     * - Current stage of the process
     */
    stage?: string;
    /**
     * - Flag indicating if is active
     */
    is_active?: boolean;
    /**
     * - Unique identifier for the response
     */
    _id?: string;
    /**
     * - URL to the error file, if any
     */
    error_file_url?: string;
};
/** @returns {SynonymListResponseSchema} */
declare function SynonymListResponseSchema(): SynonymListResponseSchema;
type SynonymListResponseSchema = {
    items?: SynonymResponseSchema[];
    page?: Page;
};
/** @returns {SynonymResponseSchema} */
declare function SynonymResponseSchema(): SynonymResponseSchema;
type SynonymResponseSchema = {
    created_on?: string;
    _id?: string;
    type?: string;
    synonyms?: string[];
    key?: string;
    app_id?: string;
    modified_on?: string;
};
/** @returns {SynonymListErrorResponseSchema} */
declare function SynonymListErrorResponseSchema(): SynonymListErrorResponseSchema;
type SynonymListErrorResponseSchema = {
    message?: string;
    error?: string;
};
/** @returns {SynonymCreateRequestSchema} */
declare function SynonymCreateRequestSchema(): SynonymCreateRequestSchema;
type SynonymCreateRequestSchema = {
    type?: string;
    key?: string;
    synonyms?: string[];
};
/** @returns {SynonymCreateResponseSchema} */
declare function SynonymCreateResponseSchema(): SynonymCreateResponseSchema;
type SynonymCreateResponseSchema = {
    status?: boolean;
    _id?: string;
    message?: string;
};
/** @returns {SynonymUpdateResponseSchema} */
declare function SynonymUpdateResponseSchema(): SynonymUpdateResponseSchema;
type SynonymUpdateResponseSchema = {
    success?: boolean;
    message?: string;
};
/** @returns {SynonymCreateErrorSchema} */
declare function SynonymCreateErrorSchema(): SynonymCreateErrorSchema;
type SynonymCreateErrorSchema = {
    message?: string;
    errors?: any;
    code?: number;
};
/** @returns {SynonymDeleteErrorSchema} */
declare function SynonymDeleteErrorSchema(): SynonymDeleteErrorSchema;
type SynonymDeleteErrorSchema = {
    message?: string;
    success?: boolean;
    error?: string;
};
/** @returns {SynonymDeleteResponseSchema} */
declare function SynonymDeleteResponseSchema(): SynonymDeleteResponseSchema;
type SynonymDeleteResponseSchema = {
    message?: string;
    success?: boolean;
};
/** @returns {SynonymUploadRequestSchema} */
declare function SynonymUploadRequestSchema(): SynonymUploadRequestSchema;
type SynonymUploadRequestSchema = {
    tracking_url?: string;
    file_type?: string;
    job_type?: string;
};
/** @returns {SynonymUploadResponseSchema} */
declare function SynonymUploadResponseSchema(): SynonymUploadResponseSchema;
type SynonymUploadResponseSchema = {
    job_type?: string;
    file_type?: string;
    tracking_url?: string;
    stage?: string;
    is_active?: boolean;
    total_records?: number;
    success_records?: number;
    failed_records?: number;
    created_on?: string;
    modified_on?: string;
    id?: string;
};
/** @returns {SynonymExportResponseSchema} */
declare function SynonymExportResponseSchema(): SynonymExportResponseSchema;
type SynonymExportResponseSchema = {
    job_type?: string;
    stage?: string;
    created_on?: string;
    modified_on?: string;
    id?: string;
    application_id?: string;
};
/** @returns {SynonymUploadErrorSchema} */
declare function SynonymUploadErrorSchema(): SynonymUploadErrorSchema;
type SynonymUploadErrorSchema = {
    message?: string;
    errors?: any;
    code?: number;
};
/** @returns {SynonymBulkValidateRequestSchema} */
declare function SynonymBulkValidateRequestSchema(): SynonymBulkValidateRequestSchema;
type SynonymBulkValidateRequestSchema = {
    job_id?: string;
    tracking_url?: string;
    file_type?: string;
    job_type?: string;
};
/** @returns {SynonymBulkValidateResponseSchema} */
declare function SynonymBulkValidateResponseSchema(): SynonymBulkValidateResponseSchema;
type SynonymBulkValidateResponseSchema = {
    job_id?: string;
    message?: string;
};
/** @returns {SynonymBulkValidateErrorSchema} */
declare function SynonymBulkValidateErrorSchema(): SynonymBulkValidateErrorSchema;
type SynonymBulkValidateErrorSchema = {
    message?: string;
    errors?: any;
    code?: number;
};
/** @returns {SynonymBulkProcessRequestSchema} */
declare function SynonymBulkProcessRequestSchema(): SynonymBulkProcessRequestSchema;
type SynonymBulkProcessRequestSchema = {
    job_id?: string;
    tracking_url?: string;
    file_type?: string;
    job_type?: string;
};
/** @returns {SynonymBulkProcessResponseSchema} */
declare function SynonymBulkProcessResponseSchema(): SynonymBulkProcessResponseSchema;
type SynonymBulkProcessResponseSchema = {
    job_id?: string;
    message?: string;
};
/** @returns {SynonymBulkProcessErrorSchema} */
declare function SynonymBulkProcessErrorSchema(): SynonymBulkProcessErrorSchema;
type SynonymBulkProcessErrorSchema = {
    message?: string;
    errors?: string;
    code?: number;
};
/** @returns {SynonymBulkPollResponseSchema} */
declare function SynonymBulkPollResponseSchema(): SynonymBulkPollResponseSchema;
type SynonymBulkPollResponseSchema = {
    total_records?: number;
    success_records?: number;
    failed_records?: number;
    stage?: string;
    error_url?: string;
    message?: string;
};
/** @returns {SynonymBulkPollErrorSchema} */
declare function SynonymBulkPollErrorSchema(): SynonymBulkPollErrorSchema;
type SynonymBulkPollErrorSchema = {
    message?: string;
    error?: string;
};
/** @returns {PriceFactoryErrorSchema} */
declare function PriceFactoryErrorSchema(): PriceFactoryErrorSchema;
type PriceFactoryErrorSchema = {
    departments?: any;
    pricing_strategy?: any;
    department_price_zonewise_department_ids?: any;
    factory_type?: string[];
};
/** @returns {PriceFactoryCreateErrorSchema} */
declare function PriceFactoryCreateErrorSchema(): PriceFactoryCreateErrorSchema;
type PriceFactoryCreateErrorSchema = {
    message?: string;
    error?: any;
    code?: number;
};
/** @returns {PriceGroupedByZone} */
declare function PriceGroupedByZone(): PriceGroupedByZone;
type PriceGroupedByZone = {
    discount?: string;
    store_id?: number[];
    seller_id?: number;
    factory_type_id?: string;
    discount_meta?: DiscountMeta;
    price?: ProductListingPrice;
};
/** @returns {AppPriceByIdResponse} */
declare function AppPriceByIdResponse(): AppPriceByIdResponse;
type AppPriceByIdResponse = {
    data?: PriceGroupedByZone[];
};
/** @returns {ActionPage} */
declare function ActionPage(): ActionPage;
type ActionPage = {
    /**
     * - Parameters that should be considered in path.
     */
    params?: any;
    /**
     * - Query parameter if any to be added to the action.
     */
    query?: any;
    /**
     * - The URL for the action.
     */
    url?: string;
    type: PageType;
};
/**
 * Enum: PageType Used By: Catalog
 *
 * @returns {PageType}
 */
declare function PageType(): PageType;
type PageType = "about-us" | "addresses" | "blog" | "brands" | "cards" | "cart" | "categories" | "brand" | "category" | "collection" | "collections" | "custom" | "contact-us" | "external" | "faq" | "freshchat" | "home" | "notification-settings" | "orders" | "page" | "policy" | "product" | "product-request" | "products" | "profile" | "profile-order-shipment" | "profile-basic" | "profile-company" | "profile-emails" | "profile-phones" | "rate-us" | "refer-earn" | "settings" | "shared-cart" | "tnc" | "track-order" | "wishlist" | "sections" | "form" | "cart-delivery" | "cart-payment" | "cart-review" | "login" | "register" | "shipping-policy" | "return-policy" | "order-status" | "locate-us";
