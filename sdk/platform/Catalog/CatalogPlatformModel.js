const Joi = require("joi");

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
 * @property {Object} _custom_json - A custom JSON object containing additional
 *   brand-specific configurations or data. The structure is flexible and may
 *   vary based on application needs.
 */

/**
 * @typedef ApplicationCategoryJson
 * @property {Object} _custom_json - A custom JSON object containing additional
 *   details or configurations specific to the application category.
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
 * @property {string} [aspect_ratio] - The aspect ratio of the banner image,
 *   typically represented as a ratio (e.g., '16:9' or '4:3').
 * @property {string} [type] - The type of media, such as 'image' or 'banner',
 *   indicating the format of the banner.
 * @property {string} [url] - The URL where the banner image is located,
 *   typically a web address pointing to the image resource.
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
 * @property {string} [discount] - A string representing the discount offered by
 *   the brand, such as percentage or amount off.
 * @property {BrandLogo} [logo]
 * @property {string} [name] - The name of the brand.
 * @property {string} [slug] - A URL-friendly identifier for the brand, often
 *   used in website routing.
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
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items] - An array of brand items, each containing
 *   detailed information about the brand, such as action, banners, departments,
 *   discount, logo, and other related fields.
 * @property {Page} page
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
 * @property {string} [modified_on] - Timestamp when the brand was last modified.
 */

/**
 * @typedef BrandMeta
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef InventoryBrandMeta
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
 * @property {number} [article_freshness] - The average freshness of the
 *   articles based on the time since they were added to the catalog.
 * @property {number} [available_articles] - The number of articles that are
 *   currently available for purchase.
 * @property {number} [available_sizes] - The total number of unique sizes
 *   available across all articles.
 * @property {string} [name] - The name of the brand.
 * @property {number} [total_articles] - The total number of articles listed
 *   under the brand.
 * @property {number} [total_sizes] - The total number of sizes offered across
 *   all articles for the brand.
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [count] - The total number of catalog items available.
 * @property {number} [out_of_stock_count] - The number of items that are
 *   currently out of stock.
 * @property {number} [sellable_count] - The number of items that are currently
 *   sellable (in stock).
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
 * @property {DepartmentCategoryTree[]} [data] - An array containing the
 *   department category trees, which provide hierarchical information about
 *   categories and their associated departments.
 * @property {DepartmentIdentifier[]} [departments] - An array of department
 *   identifiers, each providing basic information like name, slug, and unique
 *   ID for departments within the catalog.
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
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Child
 * @property {Object} [_custom_json] - Custom JSON object to store additional
 *   data for the child.
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {SecondLevelChild[]} [childs] - A list of second-level child
 *   elements under the current child.
 * @property {string} [name] - Name of the child element.
 * @property {string} [slug] - Slug or URL-friendly identifier for the child element.
 * @property {number} [uid] - Unique identifier for the child element.
 */

/**
 * @typedef CollectionBadge
 * @property {string} [color] - The color of the badge displayed with the
 *   collection, typically represented as a string (e.g., a hex code or color name).
 * @property {string} [text] - The text displayed on the badge, which may
 *   indicate a label or promotion related to the collection.
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
 * @property {CollectionImageResponse} [logo]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {boolean} [is_searchable]
 * @property {number} [priority]
 * @property {CollectionQuery[]} [query]
 * @property {string} [uid] - Unique identifier for the collection.
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [allow_facets] - Indicates whether facet-based filtering
 *   is allowed for the collection.
 * @property {boolean} [allow_sort] - Indicates whether sorting options are
 *   allowed for the collection.
 * @property {string} [app_id]
 * @property {string} [slug] - The URL-friendly identifier for the collection.
 * @property {string} [sort_on] - The default sorting order for items in the
 *   collection, e.g., 'popular'.
 * @property {string[]} [tag] - Array of tags associated with the collection for
 *   categorization and filtering.
 * @property {string} [type] - The type of collection, such as 'items' for
 *   manually added items or 'query' for dynamically fetched items.
 * @property {string[]} [visible_facets_keys] - Keys of the facets that are
 *   visible and can be used for filtering the collection.
 * @property {boolean} [published] - Indicates whether the collection is published.
 * @property {string[]} [tags] - List of tags associated with the collection.
 * @property {Action} [action]
 * @property {Object} [_custom_json] - Custom JSON data for additional information.
 * @property {Object} [_locale_language] - Locale language settings for the collection.
 * @property {SeoDetail} [seo]
 * @property {boolean} [is_visible] - Indicates if the collection is visible to users.
 * @property {string} [id] - Unique identifier for the collection.
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
 * @property {string} [aspect_ratio] - The aspect ratio of the image, typically
 *   represented as a string (e.g., "16:9" or "4:3") to indicate the
 *   proportional relationship between the image's width and height.
 * @property {string} [url] - The URL of the image, which provides the location
 *   where the image is hosted and can be accessed.
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
 * @property {CollectionListingFilterTag[]} [tags] - A list of tags used to
 *   filter the collection listing.
 * @property {CollectionListingFilterType[]} [type] - A list of types used to
 *   filter the collection listing.
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {string} [display] - The display name of the tag for the collection listing.
 * @property {boolean} [is_selected] - Indicates whether the tag is currently selected.
 * @property {string} [name] - The name of the tag.
 */

/**
 * @typedef CollectionListingFilterType
 * @property {string} [display] - The display name of the type for the collection listing.
 * @property {boolean} [is_selected] - Indicates whether the type is currently selected.
 * @property {string} [name] - The internal name of the type.
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
 * @property {string} [cron] - The cron expression that defines the scheduling
 *   pattern, allowing for tasks or events to be repeated at specific intervals
 *   (e.g., daily, weekly).
 * @property {number} [duration] - The duration in seconds for which the
 *   collection is active or valid.
 * @property {string} [end] - The end date and time for the collection's
 *   schedule, formatted as a date-time string.
 * @property {NextSchedule[]} [next_schedule] - The next set of scheduled times
 *   when the collection will become active, based on the cron expression.
 * @property {string} [start] - The start date and time for the collection's
 *   schedule, formatted as a date-time string.
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
 * @typedef InventoryCompanyMeta
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
 * @property {string} [department] - The name of the department that this
 *   category tree belongs to, such as 'Men', 'Women', or 'Electronics'.
 * @property {CategoryItems[]} [items]
 */

/**
 * @typedef PollErrorResponse
 * @property {Object} [error]
 */

/**
 * @typedef ProductBundleCreateErrorResponse
 * @property {Object} [error]
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
 * @property {string} [slug] - A URL-friendly identifier for the department,
 *   often used in creating department-specific links or routes.
 * @property {number} [uid] - A unique identifier for the department, used to
 *   distinguish it from other departments in the system.
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
 * @typedef InventoryDimensionResponse
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
 * @property {string} [code] - A string representing the specific error code.
 * @property {string} [error] - A brief description of the error type.
 * @property {string} [message] - A detailed message explaining the error.
 * @property {Object} [meta] - Additional metadata or context about the error,
 *   if available.
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
 * @typedef AttributeDetail
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
 * @property {CollectionSchedule} [_schedule]
 * @property {Action} [action]
 * @property {boolean} [allow_facets] - Indicates whether facets are allowed for
 *   filtering the collection.
 * @property {boolean} [allow_sort] - Indicates whether sorting options are
 *   allowed for the collection.
 * @property {string} [app_id] - The application ID associated with the collection.
 * @property {CollectionBadge} [badge]
 * @property {ImageUrls} [banners]
 * @property {string} [description] - A description of the collection.
 * @property {boolean} [is_active] - Indicates whether the collection is currently active.
 * @property {Media} [logo]
 * @property {Object} [meta] - Additional metadata related to the collection.
 * @property {string} [name] - The name of the collection.
 * @property {number} [priority] - The priority level of the collection in the
 *   display list.
 * @property {CollectionQuery[]} [query] - Array of queries that define how the
 *   collection is fetched or filtered.
 * @property {string} [slug] - The URL-friendly identifier of the collection.
 * @property {string[]} [tag] - Array of tags associated with the collection.
 * @property {string} [type] - The type of collection, such as manual or automated.
 * @property {string} [uid] - The unique identifier for the collection.
 * @property {string[]} [visible_facets_keys] - List of facet keys that are
 *   visible for filtering the collection.
 * @property {string} [_id] - Internal identifier for the collection.
 * @property {boolean} [published] - Indicates if the collection is published.
 * @property {string[]} [tags] - Tags associated with the collection.
 * @property {string} [sort_on] - Sort criteria for the collection.
 * @property {Object} [_custom_json] - Custom JSON data for the collection.
 * @property {Object} [_locale_language] - Locale-specific language settings.
 * @property {SeoDetail} [seo]
 * @property {boolean} [is_visible] - Indicates if the collection is visible.
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductFilters[]} [filters] - An array of filters applicable to
 *   the products in the collection.
 * @property {ProductListingDetail[]} [items] - List of product details in the collection.
 * @property {Page} [page]
 * @property {ProductSortOn[]} [sort_on] - Sorting options available for the
 *   products in the collection.
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {CollectionListingFilter} [filters]
 * @property {GetCollectionDetailNest[]} [items] - Array of nested collection details.
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
 * @property {RequestUserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {boolean} [is_active]
 * @property {string} [item_type]
 * @property {string} [logo]
 * @property {RequestUserSerializer} [modified_by]
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
 * @property {InventoryBrandMeta} [brand]
 * @property {InventoryCompanyMeta} [company]
 * @property {string} [country_of_origin]
 * @property {RequestUserSerializer} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {InventoryDimensionResponse} [dimension]
 * @property {string} [expiration_date]
 * @property {string} [id]
 * @property {Object} [identifier]
 * @property {string} [inventory_updated_on]
 * @property {boolean} [is_set]
 * @property {number} [item_id]
 * @property {InventoryManufacturerResponse} [manufacturer]
 * @property {RequestUserSerializer} [modified_by]
 * @property {Object} [platforms]
 * @property {PriceArticle} [price]
 * @property {QuantitiesArticle} [quantities]
 * @property {ReturnConfig} [return_config]
 * @property {string} [seller_identifier]
 * @property {string} [size]
 * @property {string} [stage]
 * @property {ArticleStoreResponse} [store]
 * @property {string[]} [tags]
 * @property {Object} [tax_identifier]
 * @property {number} [total_quantity]
 * @property {string} [trace_id]
 * @property {boolean} [track_inventory]
 * @property {TraderResponse[]} [trader]
 * @property {string} [uid]
 * @property {InventoryWeightResponse} [weight]
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
 * @property {number} [total_quantity] - The total quantity of the inventory
 *   item. Any one quantity is allowed `sellable_quantity` or `total_quantity`,
 *   the other one would be derived.
 * @property {number} [sellable_quantity] - The sellable quantity of the
 *   inventory item. Any one quantity is allowed `sellable_quantity` or
 *   `total_quantity`, the other one would be derived.
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
 * @typedef InventoryManufacturerResponse
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
 * @typedef BrandMedia
 * @property {string} [aspect_ratio] - The aspect ratio of the media, typically
 *   represented as a string like '16:9' or '4:3'.
 * @property {string} [type] - The type of media, such as 'image', 'video', or
 *   'audio', describing the content format.
 * @property {string} [url] - The URL where the media file is hosted, typically
 *   a link to an image or video resource.
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
 * @property {string} [end] - The end time of the schedule.
 * @property {string} [start] - The start time of the schedule.
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
 * @typedef PageResponse1
 * @property {string} [current] - It is the current page of the page response schema.
 * @property {boolean} [has_next] - It is the bool indicates if there is a next page.
 * @property {boolean} [has_previous] - It is the bool indicates if there is a
 *   previous page.
 * @property {number} [item_total] - It is the total number of item present for
 *   the filter.
 * @property {number} [size] - It is the size of each page.
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
 * @property {number} [priority] - Indicates the priority of this URL relative
 *   to other URLs on the site. A value between 0.0 and 1.0, where 1.0 is the
 *   highest priority.
 * @property {string} [frequency] - How frequently the content at the URL is
 *   likely to change.
 */

/**
 * @typedef ApplicationItemSeoAction
 * @property {Object} [page] - Details of the page associated with this SEO action.
 * @property {string} type - Type of action, such as navigation or redirection.
 */

/**
 * @typedef ApplicationItemSeoBreadcrumbs
 * @property {string} [url] - The URL that this breadcrumb points to.
 * @property {ApplicationItemSeoAction[]} [action] - The actions available for
 *   this breadcrumb, defining what happens when it's clicked or interacted with.
 */

/**
 * @typedef ApplicationItemSeoMetaTagItem
 * @property {string} key - The name of the meta tag.
 * @property {string} value - The value associated with the meta tag.
 */

/**
 * @typedef ApplicationItemSeoMetaTags
 * @property {string} title - The title for this set of meta tags.
 * @property {ApplicationItemSeoMetaTagItem[]} [items] - A list of meta tag
 *   items, each defined by key-value pairs.
 */

/**
 * @typedef Metatags
 * @property {string} [title] - The title or heading for the meta tags section.
 * @property {ApplicationItemSeoMetaTags[]} [items] - An array of meta tag
 *   items, each consisting of key-value pairs.
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
 * @property {Object} [_custom_json] - Custom JSON object to store additional
 *   data for the second-level child.
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {ThirdLevelChild[]} [childs] - A list of third-level child elements
 *   under the second-level child.
 * @property {string} [name] - Name of the second-level child element.
 * @property {string} [slug] - Slug or URL-friendly identifier for the
 *   second-level child element.
 * @property {number} [uid] - Unique identifier for the second-level child element.
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
 * @property {string} [description] - SEO meta description for the item or
 *   collection. This is used to describe the content for search engines.
 * @property {string} [title] - SEO meta title for the item or collection. It is
 *   used as the title that appears in search results.
 * @property {SitemapDetail} [sitemap]
 * @property {ApplicationItemSeoBreadcrumbs[]} [breadcrumbs] - List of
 *   breadcrumbs for navigation, showing the hierarchy of pages leading to the
 *   current page.
 * @property {Metatags[]} [meta_tags] - An array of meta tags, each containing
 *   key-value pairs for various SEO meta tags used to enhance search visibility.
 * @property {string} [canonical_url] - The canonical URL for the item or
 *   collection, which tells search engines the preferred version of the URL to
 *   avoid duplicate content issues.
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
 * @typedef SuccessResponseSchema
 * @property {boolean} [success] - Indicates whether the operation was successful or not.
 * @property {number} [uid] - A unique identifier associated with the successful
 *   operation.
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
 * @property {Object} [_custom_json] - Custom JSON object to store additional
 *   data for the third-level child.
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {Object[]} [childs] - A list of further nested child elements under
 *   the third-level child (if applicable).
 * @property {string} [name] - Name of the third-level child element.
 * @property {string} [slug] - Slug or URL-friendly identifier for the
 *   third-level child element.
 * @property {number} [uid] - Unique identifier for the third-level child element.
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
 * @typedef TraderResponse
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
 * @property {UserInfo} [modified_by]
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
 * @typedef RequestUserSerializer
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
 * @typedef InventoryWeightResponse
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
 * @property {string} [job_type]
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

class CatalogPlatformModel {
  /** @returns {StoreTagsResponseSchema} */
  static StoreTagsResponseSchema() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),
      success: Joi.boolean(),
    });
  }

  /** @returns {DiscountMeta} */
  static DiscountMeta() {
    return Joi.object({
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
      timer: Joi.boolean(),
    });
  }

  /** @returns {ProductMinMaxPrice} */
  static ProductMinMaxPrice() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {ProductPrice} */
  static ProductPrice() {
    return Joi.object({
      selling: CatalogPlatformModel.ProductMinMaxPrice(),
      effective: CatalogPlatformModel.ProductMinMaxPrice(),
      marked: CatalogPlatformModel.ProductMinMaxPrice(),
      currency: Joi.string().allow(""),
    });
  }

  /** @returns {ProductPricesPage} */
  static ProductPricesPage() {
    return Joi.object({
      type: Joi.string().allow(""),
      current: Joi.number(),
      size: Joi.number(),
      item_total: Joi.number(),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
    });
  }

  /** @returns {ProductPriceItem} */
  static ProductPriceItem() {
    return Joi.object({
      discount_meta: CatalogPlatformModel.DiscountMeta(),
      product_name: Joi.string().allow(""),
      item_id: Joi.number(),
      factory_type_id: Joi.string().allow(""),
      price: CatalogPlatformModel.ProductPrice(),
      store_id: Joi.number(),
      is_sellable: Joi.boolean(),
      seller_id: Joi.number(),
      delivery_zone_ids: Joi.array().items(Joi.string().allow("")),
      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ProductPrices} */
  static ProductPrices() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.ProductPriceItem()),
      page: CatalogPlatformModel.ProductPricesPage(),
    });
  }

  /** @returns {ProductFiltersKeysOnly} */
  static ProductFiltersKeysOnly() {
    return Joi.object({
      key: CatalogPlatformModel.ProductFiltersKey().required(),
    });
  }

  /** @returns {GetQueryFiltersKeysResponse} */
  static GetQueryFiltersKeysResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogPlatformModel.ProductFiltersKeysOnly()),
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")),
      sort_on: Joi.array().items(CatalogPlatformModel.ProductSortOn()),
    });
  }

  /** @returns {GetQueryFiltersValuesResponse} */
  static GetQueryFiltersValuesResponse() {
    return Joi.object({
      values: Joi.array()
        .items(CatalogPlatformModel.ProductFiltersValue())
        .required(),
      page: CatalogPlatformModel.Page().required(),
    });
  }

  /** @returns {GTINSchema} */
  static GTINSchema() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),
      gtin_value: Joi.string().allow("").required(),
      primary: Joi.boolean(),
    });
  }

  /** @returns {SetSizeSchema} */
  static SetSizeSchema() {
    return Joi.object({
      size: Joi.string().allow("").required(),
      pieces: Joi.number().required(),
    });
  }

  /** @returns {SizeDistributionSchema} */
  static SizeDistributionSchema() {
    return Joi.object({
      size: Joi.array().items(CatalogPlatformModel.SetSizeSchema()),
    });
  }

  /** @returns {InventorySetSchema} */
  static InventorySetSchema() {
    return Joi.object({
      quantity: Joi.number(),
      size_distribution: CatalogPlatformModel.SizeDistributionSchema(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {InvSizeSchema} */
  static InvSizeSchema() {
    return Joi.object({
      item_height: Joi.number(),
      item_width: Joi.number(),
      item_length: Joi.number(),
      item_dimensions_unit_of_measure: Joi.string().allow(""),
      item_weight: Joi.number(),
      item_weight_unit_of_measure: Joi.string().allow(""),
      currency: Joi.string().allow("").required(),
      quantity: Joi.number().required(),
      store_code: Joi.string().allow("").required(),
      identifiers: Joi.array()
        .items(CatalogPlatformModel.GTINSchema())
        .required(),
      size: Joi.string().allow("").required(),
      price: Joi.number(),
      price_effective: Joi.number().required(),
      price_transfer: Joi.number(),
      expiration_date: Joi.string().allow(""),
      is_set: Joi.boolean(),
      set: CatalogPlatformModel.InventorySetSchema(),
    });
  }

  /** @returns {InventoryRequestSchema} */
  static InventoryRequestSchema() {
    return Joi.object({
      company_id: Joi.number().required(),
      sizes: Joi.array().items(CatalogPlatformModel.InvSizeSchema()).required(),
      item: CatalogPlatformModel.ItemQuerySchema().required(),
    });
  }

  /** @returns {ItemQuerySchema} */
  static ItemQuerySchema() {
    return Joi.object({
      uid: Joi.number(),
      item_code: Joi.string().allow(""),
      brand_uid: Joi.number(),
    });
  }

  /** @returns {CompanyDRIListResponseSchema} */
  static CompanyDRIListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.CompanyDRIResponseSchema()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {CompanyDRIResponseSchema} */
  static CompanyDRIResponseSchema() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),
      responsibilities: Joi.array().items(Joi.string().allow("")),
      responsibilities_display_name: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
      company_id: Joi.number(),
      status: Joi.boolean(),
      contact: Joi.any(),
      contact_details: Joi.any(),
    });
  }

  /** @returns {SearchResponseSchema} */
  static SearchResponseSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      query: CatalogPlatformModel.MerchandisingQuery(),
      is_active: Joi.boolean(),
      merchandising_rule_id: Joi.string().allow(""),
      rule_name: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      zone_id: Joi.string().allow(""),
      _schedule: Joi.any(),
    });
  }

  /** @returns {MerchandisingQuery} */
  static MerchandisingQuery() {
    return Joi.object({
      query_condition: Joi.string().allow(""),
      query: CatalogPlatformModel.MerchandisingSearchQuery(),
      filter: Joi.array().items(CatalogPlatformModel.MerchandisingFilter()),
    });
  }

  /** @returns {MerchandisingSearchQuery} */
  static MerchandisingSearchQuery() {
    return Joi.object({
      condition: Joi.string().allow(""),
      search_query: Joi.string().allow(""),
      synonyms: Joi.string().allow(""),
    });
  }

  /** @returns {MerchandisingFilter} */
  static MerchandisingFilter() {
    return Joi.object({
      attribute: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {MerchandisingRuleQuery} */
  static MerchandisingRuleQuery() {
    return Joi.object({
      condition: Joi.string().allow("").required(),
      search_query: Joi.string().allow("").required(),
      synonyms: Joi.boolean().required(),
    });
  }

  /** @returns {MerchandisingRulesList} */
  static MerchandisingRulesList() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.MerchDataItem()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {MerchDataItem} */
  static MerchDataItem() {
    return Joi.object({
      query: CatalogPlatformModel.MerchSearchQuery(),
      action: Joi.array().items(Joi.string().allow("")),
      is_active: Joi.boolean(),
      merchandising_rule_id: Joi.string().allow(""),
      rule_name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      zone_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
    });
  }

  /** @returns {MerchSearchQuery} */
  static MerchSearchQuery() {
    return Joi.object({
      query_condition: Joi.string().allow(""),
      query: CatalogPlatformModel.MerchQueryCondition(),
      filter: Joi.array().items(CatalogPlatformModel.MerchFilter()),
    });
  }

  /** @returns {MerchQueryCondition} */
  static MerchQueryCondition() {
    return Joi.object({
      condition: Joi.string().allow(""),
      search_query: Joi.string().allow(""),
      synonyms: Joi.string().allow(""),
    });
  }

  /** @returns {MerchFilter} */
  static MerchFilter() {
    return Joi.object({
      attribute: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {SuccessResponseMerchandising} */
  static SuccessResponseMerchandising() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {MerchandiseQueryResponse} */
  static MerchandiseQueryResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      merchandising_rule_id: Joi.string().allow(""),
    });
  }

  /** @returns {Filter} */
  static Filter() {
    return Joi.object({
      attribute: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {MerchandisingRuleQueryPart} */
  static MerchandisingRuleQueryPart() {
    return Joi.object({
      filter: Joi.array().items(CatalogPlatformModel.Filter()),
      query_condition: Joi.string().allow(""),
      query: Joi.any(),
    });
  }

  /** @returns {MerchandisingRuleQueryPost} */
  static MerchandisingRuleQueryPost() {
    return Joi.object({
      query: CatalogPlatformModel.MerchandisingRuleQueryPart(),
      zone_id: Joi.string().allow(""),
    });
  }

  /** @returns {MerchandisingRuleSave} */
  static MerchandisingRuleSave() {
    return Joi.object({
      rule_name: Joi.string().allow("").required(),
      _schedule: CatalogPlatformModel.CollectionSchedule().required(),
      is_active: Joi.boolean().required(),
    });
  }

  /** @returns {PinItem} */
  static PinItem() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      uid: Joi.number().required(),
      position: Joi.number().required(),
    });
  }

  /** @returns {PinItemRequest} */
  static PinItemRequest() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      item_id: Joi.string().allow("").required(),
      position: Joi.number().required(),
    });
  }

  /** @returns {PinRequest} */
  static PinRequest() {
    return Joi.object({
      action_value: Joi.array().items(CatalogPlatformModel.PinItemRequest()),
    });
  }

  /** @returns {PinResponse} */
  static PinResponse() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.PinItem()),
    });
  }

  /** @returns {HideAttribute} */
  static HideAttribute() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      uid: Joi.number().required(),
    });
  }

  /** @returns {HideAttributeRequest} */
  static HideAttributeRequest() {
    return Joi.object({
      action: Joi.string().allow(""),
      item_id: Joi.number(),
    });
  }

  /** @returns {HideResponse} */
  static HideResponse() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.HideAttribute()),
    });
  }

  /** @returns {HideRequest} */
  static HideRequest() {
    return Joi.object({
      action_value: Joi.array().items(
        CatalogPlatformModel.HideAttributeRequest()
      ),
    });
  }

  /** @returns {PostBoostAttribute} */
  static PostBoostAttribute() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
      strength: Joi.number().required(),
      action: Joi.string().allow("").required(),
    });
  }

  /** @returns {BoostAttribute} */
  static BoostAttribute() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
      strength: Joi.number().required(),
    });
  }

  /** @returns {GetMerchandisingRuleBoostAction} */
  static GetMerchandisingRuleBoostAction() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.BoostAttribute()),
    });
  }

  /** @returns {PostMerchandisingRuleBoostAction} */
  static PostMerchandisingRuleBoostAction() {
    return Joi.object({
      action_value: Joi.array().items(
        CatalogPlatformModel.PostBoostAttribute()
      ),
    });
  }

  /** @returns {GetMerchandisingRuleBuryAction} */
  static GetMerchandisingRuleBuryAction() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.BoostAttribute()),
    });
  }

  /** @returns {Action} */
  static Action() {
    return Joi.object({
      type: Joi.string().allow(""),
      page: CatalogPlatformModel.ActionPage(),
      popup: CatalogPlatformModel.ActionPage(),
    });
  }

  /** @returns {AllSizes} */
  static AllSizes() {
    return Joi.object({
      identifiers: Joi.array().items(CatalogPlatformModel.ValidateIdentifier()),
      item_dimensions_unit_of_measure: Joi.string().allow("").required(),
      item_height: Joi.number().required(),
      item_length: Joi.number().required(),
      item_weight: Joi.number().required(),
      item_weight_unit_of_measure: Joi.string().allow("").required(),
      item_width: Joi.number().required(),
      size: Joi.string().allow("").required(),
    });
  }

  /** @returns {AllowSingleRequest} */
  static AllowSingleRequest() {
    return Joi.object({
      allow_single: Joi.boolean().required(),
    });
  }

  /** @returns {AppCatalogConfiguration} */
  static AppCatalogConfiguration() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      config_id: Joi.string().allow(""),
      config_type: Joi.string().allow("").required(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      id: Joi.string().allow(""),
      listing: CatalogPlatformModel.ConfigurationListing(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      product: CatalogPlatformModel.ConfigurationProduct(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {AppCategoryReturnConfig} */
  static AppCategoryReturnConfig() {
    return Joi.object({
      category_id: Joi.number().required(),
      return_config: Joi.any().required(),
    });
  }

  /** @returns {AppCategoryReturnConfigResponse} */
  static AppCategoryReturnConfigResponse() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      category_id: Joi.number(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      return_config: CatalogPlatformModel.ProductReturnConfigBaseSerializer(),
    });
  }

  /** @returns {AppConfiguration} */
  static AppConfiguration() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      config_id: Joi.string().allow(""),
      config_type: Joi.string().allow("").required(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      listing: CatalogPlatformModel.ConfigurationListing(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      product: CatalogPlatformModel.ConfigurationProduct(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {AppConfigurationCreateDetail} */
  static AppConfigurationCreateDetail() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      attributes: Joi.array().items(
        CatalogPlatformModel.AttributeDetailsGroup()
      ),
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      priority: Joi.number().required(),
      slug: Joi.string().allow("").required(),
      template_slugs: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {AppConfigurationDetail} */
  static AppConfigurationDetail() {
    return Joi.object({
      id: Joi.string().allow(""),
      app_id: Joi.string().allow(""),
      attributes: Joi.array().items(
        CatalogPlatformModel.AttributeDetailsGroup()
      ),
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      priority: Joi.number().required(),
      slug: Joi.string().allow("").required(),
      template_slugs: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {AppConfigurationsResponse} */
  static AppConfigurationsResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      app_id: Joi.string().allow(""),
      default_key: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_default: Joi.boolean(),
      key: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      priority: Joi.number(),
    });
  }

  /** @returns {AppConfigurationsSort} */
  static AppConfigurationsSort() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      default_key: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      key: Joi.string().allow("").required(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      priority: Joi.number().required(),
    });
  }

  /** @returns {ValueConfigType} */
  static ValueConfigType() {
    return Joi.object({
      bucket_points: Joi.array().items(Joi.any()),
      map: Joi.any(),
      sort: Joi.string().allow(""),
      condition: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {AppConfigurationsFilter} */
  static AppConfigurationsFilter() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      allow_single: Joi.boolean(),
      attribute_name: Joi.string().allow(""),
      value_config: CatalogPlatformModel.ValueConfigType(),
      type: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      key: Joi.string().allow("").required(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      priority: Joi.number().required(),
    });
  }

  /** @returns {AppConfigurationsFilterResponse} */
  static AppConfigurationsFilterResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      app_id: Joi.string().allow(""),
      allow_single: Joi.boolean(),
      attribute_name: Joi.string().allow(""),
      value_config: CatalogPlatformModel.ValueConfigType(),
      type: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_default: Joi.boolean(),
      key: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      priority: Joi.number(),
    });
  }

  /** @returns {ApplicationBrandJson} */
  static ApplicationBrandJson() {
    return Joi.object({
      _custom_json: Joi.any().required(),
    });
  }

  /** @returns {ApplicationCategoryJson} */
  static ApplicationCategoryJson() {
    return Joi.object({
      _custom_json: Joi.any().required(),
    });
  }

  /** @returns {ApplicationDepartment} */
  static ApplicationDepartment() {
    return Joi.object({
      _custom_json: Joi.any(),
      app_id: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.number().required(),
    });
  }

  /** @returns {ApplicationDepartmentJson} */
  static ApplicationDepartmentJson() {
    return Joi.object({
      _custom_json: Joi.any().required(),
    });
  }

  /** @returns {ApplicationDepartmentListingResponse} */
  static ApplicationDepartmentListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.ApplicationDepartment()),
      page: CatalogPlatformModel.Page().required(),
    });
  }

  /** @returns {ApplicationItemMOQ} */
  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),
      maximum: Joi.number(),
      minimum: Joi.number(),
    });
  }

  /** @returns {ApplicationItemMeta} */
  static ApplicationItemMeta() {
    return Joi.object({
      _custom_json: Joi.any(),
      _custom_meta: Joi.array().items(CatalogPlatformModel.MetaFields()),
      alt_text: Joi.any(),
      is_cod: Joi.boolean(),
      is_gift: Joi.boolean(),
      moq: Joi.any(),
      seo: Joi.any(),
      size_promotion_threshold: Joi.any(),
    });
  }

  /** @returns {ApplicationItemSeoSitemap} */
  static ApplicationItemSeoSitemap() {
    return Joi.object({
      priority: Joi.number().required(),
      frequency: Joi.string().allow("").required(),
    });
  }

  /** @returns {ApplicationItemSEO} */
  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
      sitemap: CatalogPlatformModel.ApplicationItemSeoSitemap(),
      breadcrumbs: Joi.array().items(
        CatalogPlatformModel.ApplicationItemSeoBreadcrumbs()
      ),
      meta_tags: Joi.array().items(
        CatalogPlatformModel.ApplicationItemSeoMetaTags()
      ),
      canonical_url: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationProductListingResponse} */
  static ApplicationProductListingResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogPlatformModel.ProductFilters()),
      items: Joi.array().items(CatalogPlatformModel.ProductListingDetail()),
      operators: CatalogPlatformModel.OperatorsResponse(),
      page: CatalogPlatformModel.Page().required(),
      sort_on: Joi.array().items(CatalogPlatformModel.ProductSortOn()),
    });
  }

  /** @returns {OperatorsResponse} */
  static OperatorsResponse() {
    return Joi.object({
      btw: Joi.string().allow(""),
      lte: Joi.string().allow(""),
      gte: Joi.string().allow(""),
      gt: Joi.string().allow(""),
      lt: Joi.string().allow(""),
      nin: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationStoreJson} */
  static ApplicationStoreJson() {
    return Joi.object({
      _custom_json: Joi.any().required(),
    });
  }

  /** @returns {AppReturnConfigResponse} */
  static AppReturnConfigResponse() {
    return Joi.object({
      created_by: Joi.any(),
      modified_by: Joi.any(),
      app_id: Joi.string().allow(""),
      category_count: Joi.number(),
      company_id: Joi.number(),
      modified_on: Joi.string().allow(""),
      return_config_level: Joi.string().allow(""),
    });
  }

  /** @returns {ArticleAssignment} */
  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
    });
  }

  /** @returns {ArticleAssignment1} */
  static ArticleAssignment1() {
    return Joi.object({
      level: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
    });
  }

  /** @returns {ArticleQuery} */
  static ArticleQuery() {
    return Joi.object({
      ignored_stores: Joi.array().items(Joi.number()),
      item_id: Joi.number().required(),
      size: Joi.string().allow("").required(),
    });
  }

  /** @returns {ArticleStoreResponse} */
  static ArticleStoreResponse() {
    return Joi.object({
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {AssignStore} */
  static AssignStore() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      articles: Joi.array()
        .items(CatalogPlatformModel.AssignStoreArticle())
        .required(),
      channel_identifier: Joi.string().allow(""),
      channel_type: Joi.string().allow(""),
      company_id: Joi.number(),
      pincode: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {AssignStoreArticle} */
  static AssignStoreArticle() {
    return Joi.object({
      article_assignment: CatalogPlatformModel.ArticleAssignment(),
      group_id: Joi.string().allow(""),
      meta: Joi.any(),
      quantity: Joi.number(),
      query: CatalogPlatformModel.ArticleQuery(),
    });
  }

  /** @returns {AttributeDetailsGroup} */
  static AttributeDetailsGroup() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      key: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      priority: Joi.number().required(),
      slug: Joi.string().allow(""),
      unit: Joi.string().allow(""),
    });
  }

  /** @returns {AttributeMaster} */
  static AttributeMaster() {
    return Joi.object({
      allowed_values: Joi.array().items(Joi.string().allow("")),
      format: Joi.string().allow(""),
      mandatory: Joi.boolean(),
      multi: Joi.boolean(),
      range: CatalogPlatformModel.AttributeSchemaRange(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {AttributeMasterDetails} */
  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {AttributeMasterFilter} */
  static AttributeMasterFilter() {
    return Joi.object({
      depends_on: Joi.array().items(Joi.string().allow("")),
      indexing: Joi.boolean().required(),
      priority: Joi.number(),
    });
  }

  /** @returns {AttributeMasterMandatoryDetails} */
  static AttributeMasterMandatoryDetails() {
    return Joi.object({
      l3_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {AttributeMasterMeta} */
  static AttributeMasterMeta() {
    return Joi.object({
      enriched: Joi.boolean(),
      mandatory_details: CatalogPlatformModel.AttributeMasterMandatoryDetails().required(),
    });
  }

  /** @returns {AttributeMasterSerializer} */
  static AttributeMasterSerializer() {
    return Joi.object({
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      departments: Joi.array().items(Joi.string().allow("")).required(),
      description: Joi.string().allow(""),
      details: CatalogPlatformModel.AttributeMasterDetails().required(),
      enabled_for_end_consumer: Joi.boolean(),
      filters: CatalogPlatformModel.AttributeMasterFilter().required(),
      is_nested: Joi.boolean(),
      logo: Joi.string().allow(""),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      raw_key: Joi.string().allow(""),
      schema: CatalogPlatformModel.AttributeMaster().required(),
      slug: Joi.string().allow("").required(),
      suggestion: Joi.string().allow(""),
      synonyms: Joi.any(),
      tags: Joi.array().items(Joi.string().allow("")),
      unit: Joi.string().allow(""),
      variant: Joi.boolean(),
    });
  }

  /** @returns {AttributeSchemaRange} */
  static AttributeSchemaRange() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }

  /** @returns {AutoCompleteMedia} */
  static AutoCompleteMedia() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {AutocompleteAction} */
  static AutocompleteAction() {
    return Joi.object({
      page: CatalogPlatformModel.AutocompletePageAction(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {AutocompletePageAction} */
  static AutocompletePageAction() {
    return Joi.object({
      params: Joi.any(),
      query: Joi.any(),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {AutocompleteResult} */
  static AutocompleteResult() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogPlatformModel.AutocompleteAction(),
      display: Joi.string().allow(""),
      logo: CatalogPlatformModel.AutoCompleteMedia(),
    });
  }

  /** @returns {BannerImage} */
  static BannerImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {BaseAppCategoryReturnConfig} */
  static BaseAppCategoryReturnConfig() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      data: Joi.array()
        .items(CatalogPlatformModel.AppCategoryReturnConfig())
        .required(),
    });
  }

  /** @returns {BaseAppCategoryReturnConfigResponse} */
  static BaseAppCategoryReturnConfigResponse() {
    return Joi.object({
      data: Joi.array().items(
        CatalogPlatformModel.AppCategoryReturnConfigResponse()
      ),
      page: CatalogPlatformModel.PageResponse1(),
    });
  }

  /** @returns {Brand} */
  static Brand() {
    return Joi.object({
      logo: CatalogPlatformModel.Logo(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {BrandLogo} */
  static BrandLogo() {
    return Joi.object({
      url: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {BrandItem} */
  static BrandItem() {
    return Joi.object({
      action: CatalogPlatformModel.Action(),
      banners: CatalogPlatformModel.ImageUrls(),
      departments: Joi.array().items(Joi.number()),
      discount: Joi.string().allow(""),
      logo: CatalogPlatformModel.BrandLogo(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {ApplicationCategoryListingSchema} */
  static ApplicationCategoryListingSchema() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.ApplicationCategoryListingItemSchema()
      ),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {ApplicationCategoryListingItemSchema} */
  static ApplicationCategoryListingItemSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      departments: Joi.array().items(Joi.number()),
      attr_name: Joi.string().allow(""),
      landscape_url: Joi.string().allow(""),
      portrait_url: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      priority: Joi.number(),
      created_by: CatalogPlatformModel.CreatedBy(),
      created_on: Joi.string().allow(""),
      modified_by: CatalogPlatformModel.ModifiedBy(),
      modified_on: Joi.string().allow(""),
      app_id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      uid: Joi.number(),
    });
  }

  /** @returns {ApplicationBrandListingSchema} */
  static ApplicationBrandListingSchema() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.ApplicationBrandListingItemSchema()
      ),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {BrandListingResponse} */
  static BrandListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.BrandItem()),
      page: CatalogPlatformModel.Page().required(),
    });
  }

  /** @returns {ApplicationBrandListingItemSchema} */
  static ApplicationBrandListingItemSchema() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      _locale_language: Joi.object().pattern(/\S/, Joi.any()),
      brand_banner_portrait_url: Joi.string().allow(""),
      brand_banner_url: Joi.string().allow(""),
      brand_logo_url: Joi.string().allow(""),
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug_key: Joi.string().allow(""),
      priority: Joi.number(),
      uid: Joi.number(),
      created_on: Joi.string().allow(""),
      last_updated: Joi.string().allow(""),
      is_active: Joi.boolean(),
      departments: Joi.array().items(Joi.number()),
      modified_on: Joi.string().allow(""),
    });
  }

  /** @returns {BrandMeta} */
  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {InventoryBrandMeta} */
  static InventoryBrandMeta() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {BulkAssetResponse} */
  static BulkAssetResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.Items()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {BulkHsnDataResponse} */
  static BulkHsnDataResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {BulkHsnResponse} */
  static BulkHsnResponse() {
    return Joi.object({
      data: CatalogPlatformModel.BulkHsnDataResponse(),
    });
  }

  /** @returns {BulkHsnUpsert} */
  static BulkHsnUpsert() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.HsnUpsert()).required(),
    });
  }

  /** @returns {BulkInventoryGet} */
  static BulkInventoryGet() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.BulkInventoryGetItems()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {BulkInventoryGetItems} */
  static BulkInventoryGetItems() {
    return Joi.object({
      cancelled: Joi.number(),
      cancelled_records: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.string().allow("")),
      file_path: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      succeed: Joi.number(),
      total: Joi.number(),
    });
  }

  /** @returns {BulkProductUploadJob} */
  static BulkProductUploadJob() {
    return Joi.object({
      company_id: Joi.number(),
      total: Joi.number(),
      succeed: Joi.number(),
      stage: Joi.string().allow(""),
      file_path: Joi.string().allow(""),
      template_tag: Joi.string().allow(""),
      tracking_url: Joi.string().allow(""),
    });
  }

  /** @returns {BulkProductJob} */
  static BulkProductJob() {
    return Joi.object({
      company_id: Joi.number(),
      template_tag: Joi.string().allow(""),
      product_type: Joi.string().allow(""),
      department: Joi.string().allow(""),
      file_path: Joi.string().allow(""),
    });
  }

  /** @returns {BulkJob} */
  static BulkJob() {
    return Joi.object({
      cancelled: Joi.number(),
      cancelled_records: Joi.array().items(Joi.any()),
      company_id: Joi.number().required(),
      created_by: Joi.any(),
      created_on: Joi.string().allow("").required(),
      custom_template_tag: Joi.string().allow(""),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.any()),
      file_path: Joi.string().allow(""),
      is_active: Joi.boolean(),
      modified_by: Joi.string().allow("").allow(null),
      modified_on: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      succeed: Joi.number(),
      template_tag: Joi.string().allow(""),
      total: Joi.number(),
      tracking_url: Joi.string().allow(""),
    });
  }

  /** @returns {BulkProductRequest} */
  static BulkProductRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      data: Joi.array().items(Joi.any()).required(),
      template_tag: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkResponse} */
  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      created_by: Joi.any(),
      created_on: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      modified_by: Joi.string().allow("").allow(null),
      modified_on: Joi.string().allow(""),
    });
  }

  /** @returns {CatalogInsightBrand} */
  static CatalogInsightBrand() {
    return Joi.object({
      article_freshness: Joi.number(),
      available_articles: Joi.number(),
      available_sizes: Joi.number(),
      name: Joi.string().allow(""),
      total_articles: Joi.number(),
      total_sizes: Joi.number(),
    });
  }

  /** @returns {CatalogInsightItem} */
  static CatalogInsightItem() {
    return Joi.object({
      count: Joi.number(),
      out_of_stock_count: Joi.number(),
      sellable_count: Joi.number(),
    });
  }

  /** @returns {CatalogInsightResponse} */
  static CatalogInsightResponse() {
    return Joi.object({
      brand_distribution: CatalogPlatformModel.CatalogInsightBrand(),
      item: CatalogPlatformModel.CatalogInsightItem(),
    });
  }

  /** @returns {CategoriesResponse} */
  static CategoriesResponse() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      slug_key: Joi.string().allow(""),
      template_slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {Category} */
  static Category() {
    return Joi.object({
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      departments: Joi.array().items(Joi.number()).required(),
      hierarchy: Joi.array().items(CatalogPlatformModel.Hierarchy()),
      id: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      level: Joi.number().required(),
      marketplaces: Joi.any(),
      media: Joi.any(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      priority: Joi.number(),
      slug: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
      tryouts: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
    });
  }

  /** @returns {ChannelListResponse} */
  static ChannelListResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.ChannelItem()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {ChannelDetailResponse} */
  static ChannelDetailResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      created_by: CatalogPlatformModel.CreatedBy(),
      name: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      validation: CatalogPlatformModel.ChannelValidation(),
      _id: Joi.string().allow(""),
      description: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      app_id: Joi.string().allow(""),
      modified_by: CatalogPlatformModel.CreatedBy(),
      modified_on: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {ChannelItem} */
  static ChannelItem() {
    return Joi.object({
      logo: Joi.string().allow(""),
      modified_by: CatalogPlatformModel.CreatedBy(),
      created_by: CatalogPlatformModel.CreatedBy(),
      slug: Joi.string().allow(""),
      name: Joi.string().allow(""),
      app_id: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      description: Joi.string().allow(""),
      validation: CatalogPlatformModel.ChannelValidation(),
      created_on: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {ChannelValidation} */
  static ChannelValidation() {
    return Joi.object({
      product: CatalogPlatformModel.ProductValidation(),
      brand: CatalogPlatformModel.BrandValidationItem(),
      company: CatalogPlatformModel.CompanyValidation(),
      location: CatalogPlatformModel.LocationValidation(),
    });
  }

  /** @returns {ProductValidation} */
  static ProductValidation() {
    return Joi.object({
      gated_category_applicable: Joi.boolean(),
      imageless_products: Joi.boolean(),
      stage: Joi.string().allow(""),
    });
  }

  /** @returns {BrandValidationItem} */
  static BrandValidationItem() {
    return Joi.object({
      stage: Joi.string().allow(""),
      consent_doc_required: Joi.boolean(),
    });
  }

  /** @returns {CompanyValidation} */
  static CompanyValidation() {
    return Joi.object({
      bank_ac_required: Joi.boolean(),
      gst_required: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }

  /** @returns {LocationValidation} */
  static LocationValidation() {
    return Joi.object({
      gst_required: Joi.boolean(),
      stage: Joi.string().allow(""),
    });
  }

  /** @returns {CategoryItems} */
  static CategoryItems() {
    return Joi.object({
      _custom_json: Joi.any().allow(null),
      action: CatalogPlatformModel.Action(),
      banners: CatalogPlatformModel.ImageUrls(),
      childs: Joi.array().items(CatalogPlatformModel.Child()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {CategoryListingResponse} */
  static CategoryListingResponse() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.DepartmentCategoryTree()),
      departments: Joi.array().items(
        CatalogPlatformModel.DepartmentIdentifier()
      ),
    });
  }

  /** @returns {CategoryMapping} */
  static CategoryMapping() {
    return Joi.object({
      ajio: Joi.any(),
      facebook: Joi.any(),
      google: Joi.any(),
    });
  }

  /** @returns {CategoryMappingValues} */
  static CategoryMappingValues() {
    return Joi.object({
      catalog_id: Joi.number(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {CategoryResponse} */
  static CategoryResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.Category()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {Child} */
  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogPlatformModel.Action(),
      banners: CatalogPlatformModel.ImageUrls(),
      childs: Joi.array().items(CatalogPlatformModel.SecondLevelChild()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {CollectionBadge} */
  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),
      text: Joi.string().allow(""),
    });
  }

  /** @returns {CollectionBanner} */
  static CollectionBanner() {
    return Joi.object({
      landscape: CatalogPlatformModel.CollectionImage().required(),
      portrait: CatalogPlatformModel.CollectionImage().required(),
    });
  }

  /** @returns {CollectionBannerResponse} */
  static CollectionBannerResponse() {
    return Joi.object({
      landscape: CatalogPlatformModel.CollectionImageResponse(),
      portrait: CatalogPlatformModel.CollectionImageResponse(),
    });
  }

  /** @returns {BadgeDetail} */
  static BadgeDetail() {
    return Joi.object({
      color: Joi.string().allow(""),
      text: Joi.string().allow(""),
    });
  }

  /** @returns {CollectionCreateResponse} */
  static CollectionCreateResponse() {
    return Joi.object({
      badge: CatalogPlatformModel.CollectionBadge(),
      banners: CatalogPlatformModel.CollectionBannerResponse(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      logo: CatalogPlatformModel.CollectionImageResponse(),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      is_searchable: Joi.boolean(),
      priority: Joi.number(),
      query: Joi.array().items(CatalogPlatformModel.CollectionQuery()),
      uid: Joi.string().allow(""),
      _schedule: CatalogPlatformModel.CollectionSchedule(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      sort_on: Joi.string().allow(""),
      tag: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
      published: Joi.boolean(),
      tags: Joi.array().items(Joi.string().allow("")),
      action: CatalogPlatformModel.Action(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      _locale_language: Joi.object().pattern(/\S/, Joi.any()),
      seo: CatalogPlatformModel.SeoDetail(),
      is_visible: Joi.boolean(),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {CollectionDetailResponse} */
  static CollectionDetailResponse() {
    return Joi.object({
      _schedule: Joi.any(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: Joi.any(),
      banners: CatalogPlatformModel.ImageUrls(),
      cron: Joi.any(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      logo: CatalogPlatformModel.Media(),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      query: Joi.array().items(CatalogPlatformModel.CollectionQuery()),
      slug: Joi.string().allow(""),
      tag: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CollectionImage} */
  static CollectionImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      url: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {CollectionImageResponse} */
  static CollectionImageResponse() {
    return Joi.object({
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {CollectionItem} */
  static CollectionItem() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      item_id: Joi.number().required(),
      priority: Joi.number(),
    });
  }

  /** @returns {CollectionItemUpdate} */
  static CollectionItemUpdate() {
    return Joi.object({
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      items: Joi.array().items(CatalogPlatformModel.CollectionItem()),
      query: Joi.array().items(CatalogPlatformModel.CollectionQuery()),
      type: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CollectionListingFilter} */
  static CollectionListingFilter() {
    return Joi.object({
      tags: Joi.array().items(
        CatalogPlatformModel.CollectionListingFilterTag()
      ),
      type: Joi.array().items(
        CatalogPlatformModel.CollectionListingFilterType()
      ),
    });
  }

  /** @returns {CollectionListingFilterTag} */
  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),
      is_selected: Joi.boolean(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {CollectionListingFilterType} */
  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string().allow(""),
      is_selected: Joi.boolean(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {CollectionQuery} */
  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),
      op: Joi.string().allow("").required(),
      value: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {CollectionSchedule} */
  static CollectionSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),
      duration: Joi.number().allow(null),
      end: Joi.string().allow("").allow(null),
      next_schedule: Joi.array().items(CatalogPlatformModel.NextSchedule()),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyBrandDetail} */
  static CompanyBrandDetail() {
    return Joi.object({
      brand_id: Joi.number(),
      brand_name: Joi.string().allow(""),
      company_id: Joi.number(),
      total_article: Joi.number(),
      logo: Joi.any(),
      name: Joi.string().allow(""),
      id: Joi.number(),
    });
  }

  /** @returns {CompanyMeta} */
  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  /** @returns {InventoryCompanyMeta} */
  static InventoryCompanyMeta() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  /** @returns {CompanyOptIn} */
  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),
      company_id: Joi.number().required(),
      created_by: Joi.any(),
      created_on: Joi.number().required(),
      enabled: Joi.boolean().required(),
      modified_by: Joi.any(),
      modified_on: Joi.number().required(),
      opt_level: Joi.string().allow("").required(),
      platform: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {ConfigErrorResponse} */
  static ConfigErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),
      errors: Joi.any(),
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {ConfigSuccessResponse} */
  static ConfigSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {ConfigurationBucketPoints} */
  static ConfigurationBucketPoints() {
    return Joi.object({
      display: Joi.string().allow(""),
      end: Joi.number(),
      start: Joi.number(),
    });
  }

  /** @returns {ConfigurationListing} */
  static ConfigurationListing() {
    return Joi.object({
      filter: CatalogPlatformModel.ConfigurationListingFilter(),
      sort: CatalogPlatformModel.ConfigurationListingSort(),
    });
  }

  /** @returns {ConfigurationListingFilter} */
  static ConfigurationListingFilter() {
    return Joi.object({
      allow_single: Joi.boolean().required(),
      attribute_config: Joi.array().items(
        CatalogPlatformModel.ConfigurationListingFilterConfig()
      ),
    });
  }

  /** @returns {ConfigurationListingFilterConfig} */
  static ConfigurationListingFilterConfig() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      key: Joi.string().allow("").required(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      priority: Joi.number().required(),
      type: Joi.string().allow("").required(),
      value_config: CatalogPlatformModel.ConfigurationListingFilterValue(),
    });
  }

  /** @returns {ConfigurationListingFilterValue} */
  static ConfigurationListingFilterValue() {
    return Joi.object({
      bucket_points: Joi.array().items(
        CatalogPlatformModel.ConfigurationBucketPoints()
      ),
      condition: Joi.string().allow(""),
      map: Joi.any(),
      map_values: Joi.array().items(Joi.any()),
      priority: Joi.array().items(Joi.string().allow("")),
      sort: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ConfigurationListingSort} */
  static ConfigurationListingSort() {
    return Joi.object({
      config: Joi.array().items(
        CatalogPlatformModel.ConfigurationListingSortConfig()
      ),
      default_key: Joi.string().allow("").required(),
    });
  }

  /** @returns {ConfigurationListingSortConfig} */
  static ConfigurationListingSortConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      key: Joi.string().allow("").required(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      priority: Joi.number().required(),
    });
  }

  /** @returns {ConfigurationProduct} */
  static ConfigurationProduct() {
    return Joi.object({
      similar: CatalogPlatformModel.ConfigurationProductSimilar(),
      variant: CatalogPlatformModel.ConfigurationProductVariant(),
      details_groups: CatalogPlatformModel.ConfigurationProductDetailsGroups(),
    });
  }

  /** @returns {ConfigurationProductDetailsGroups} */
  static ConfigurationProductDetailsGroups() {
    return Joi.object({
      config: Joi.array().items(
        CatalogPlatformModel.ConfigurationProductDetailsConfig()
      ),
    });
  }

  /** @returns {ConfigurationProductDetailsConfig} */
  static ConfigurationProductDetailsConfig() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      priority: Joi.number(),
      template_slugs: Joi.array().items(Joi.string().allow("")),
      attributes: Joi.array().items(
        CatalogPlatformModel.ConfigurationProductDetailsAttribute()
      ),
      is_active: Joi.boolean(),
    });
  }

  /** @returns {ConfigurationProductDetailsAttribute} */
  static ConfigurationProductDetailsAttribute() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      display_type: Joi.string().allow(""),
      priority: Joi.number(),
      is_active: Joi.boolean(),
      key: Joi.string().allow(""),
    });
  }

  /** @returns {ConfigurationProductConfig} */
  static ConfigurationProductConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      key: Joi.string().allow("").required(),
      logo: Joi.string().allow(""),
      priority: Joi.number().required(),
      size: CatalogPlatformModel.ProductSize(),
      subtitle: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {ConfigurationProductSimilar} */
  static ConfigurationProductSimilar() {
    return Joi.object({
      config: Joi.array().items(
        CatalogPlatformModel.ConfigurationProductConfig()
      ),
    });
  }

  /** @returns {ConfigurationProductVariant} */
  static ConfigurationProductVariant() {
    return Joi.object({
      config: Joi.array().items(
        CatalogPlatformModel.ConfigurationProductVariantConfig()
      ),
    });
  }

  /** @returns {ConfigurationProductVariantConfig} */
  static ConfigurationProductVariantConfig() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      key: Joi.string().allow("").required(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      priority: Joi.number().required(),
      size: CatalogPlatformModel.ProductSize().required(),
    });
  }

  /** @returns {CreateAutocompleteKeyword} */
  static CreateAutocompleteKeyword() {
    return Joi.object({
      _custom_json: Joi.any(),
      app_id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      results: Joi.array().items(CatalogPlatformModel.AutocompleteResult()),
      words: Joi.array().items(Joi.string().allow("")),
      action: CatalogPlatformModel.AutocompleteAction(),
    });
  }

  /** @returns {CreateAutocompleteWordsResponse} */
  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),
      is_active: Joi.boolean(),
      results: Joi.array().items(CatalogPlatformModel.AutocompleteResult()),
      _custom_json: Joi.any(),
      app_id: Joi.string().allow(""),
      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CreateCollection} */
  static CreateCollection() {
    return Joi.object({
      _custom_json: Joi.any(),
      _locale_language: Joi.any(),
      _schedule: CatalogPlatformModel.CollectionSchedule(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: CatalogPlatformModel.CollectionBadge(),
      banners: CatalogPlatformModel.CollectionBanner().required(),
      created_by: Joi.any(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_visible: Joi.boolean(),
      logo: CatalogPlatformModel.CollectionImage().required(),
      meta: Joi.any(),
      modified_by: Joi.any(),
      name: Joi.string().allow("").required(),
      priority: Joi.number(),
      published: Joi.boolean(),
      query: Joi.array().items(CatalogPlatformModel.CollectionQuery()),
      seo: CatalogPlatformModel.SeoDetail(),
      slug: Joi.string().allow("").required(),
      is_searchable: Joi.boolean(),
      sort_on: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow("").required(),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {RerankingBoostItems} */
  static RerankingBoostItems() {
    return Joi.object({
      boost: Joi.array().items(CatalogPlatformModel.BoostItem()),
    });
  }

  /** @returns {GetSearchRerankDetailResponse} */
  static GetSearchRerankDetailResponse() {
    return Joi.object({
      ranking: CatalogPlatformModel.RerankingBoostItems(),
      is_active: Joi.boolean(),
      modified_by: CatalogPlatformModel.CreatedBy(),
      created_by: CatalogPlatformModel.CreatedBy(),
      words: Joi.array().items(Joi.string().allow("")),
      app_id: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {BoostItem} */
  static BoostItem() {
    return Joi.object({
      attribute_key: Joi.string().allow(""),
      attribute_value: Joi.string().allow(""),
    });
  }

  /** @returns {GetSearchRerankItemResponse} */
  static GetSearchRerankItemResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      words: Joi.array().items(Joi.string().allow("")),
      app_id: Joi.string().allow(""),
      modified_by: Joi.any(),
      ranking: CatalogPlatformModel.RerankingBoostItems(),
      created_by: Joi.any(),
      is_active: Joi.boolean(),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {GetSearchRerankResponse} */
  static GetSearchRerankResponse() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.GetSearchRerankItemResponse()
      ),
      page: CatalogPlatformModel.PageResponse1(),
    });
  }

  /** @returns {CreateSearchRerankResponse} */
  static CreateSearchRerankResponse() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),
      app_id: Joi.string().allow(""),
      ranking: CatalogPlatformModel.RerankingBoostItems(),
      is_active: Joi.boolean(),
      created_on: Joi.string().allow(""),
      created_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      modified_by: Joi.any(),
    });
  }

  /** @returns {UpdateSearchRerankResponse} */
  static UpdateSearchRerankResponse() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),
      app_id: Joi.string().allow(""),
      ranking: CatalogPlatformModel.RerankingBoostItems(),
      is_active: Joi.boolean(),
      created_on: Joi.string().allow(""),
      created_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      modified_by: Joi.any(),
    });
  }

  /** @returns {UpdateSearchRerankRequest} */
  static UpdateSearchRerankRequest() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),
      is_active: Joi.boolean(),
      application_id: Joi.string().allow(""),
      ranking: CatalogPlatformModel.RerankingBoostItems(),
    });
  }

  /** @returns {CreateSearchRerankRequest} */
  static CreateSearchRerankRequest() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),
      is_active: Joi.boolean(),
      application_id: Joi.string().allow(""),
      ranking: CatalogPlatformModel.RerankingBoostItems(),
    });
  }

  /** @returns {CreateSearchConfigurationRequest} */
  static CreateSearchConfigurationRequest() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      is_proximity_enabled: Joi.boolean(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      proximity: Joi.number(),
      searchable_attributes: Joi.array().items(
        CatalogPlatformModel.SearchableAttribute()
      ),
    });
  }

  /** @returns {CreateSearchConfigurationResponse} */
  static CreateSearchConfigurationResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {CreateSearchKeyword} */
  static CreateSearchKeyword() {
    return Joi.object({
      _custom_json: Joi.any(),
      app_id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      result: CatalogPlatformModel.SearchKeywordResult().required(),
      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CreateUpdateAppReturnConfig} */
  static CreateUpdateAppReturnConfig() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      return_config_level: Joi.string().allow("").required(),
    });
  }

  /** @returns {CrossSellingData} */
  static CrossSellingData() {
    return Joi.object({
      articles: Joi.number(),
      products: Joi.number(),
    });
  }

  /** @returns {CrossSellingResponse} */
  static CrossSellingResponse() {
    return Joi.object({
      articles: Joi.number(),
      products: Joi.number(),
    });
  }

  /** @returns {CustomOrder} */
  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),
      manufacturing_time: Joi.number(),
      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  /** @returns {DateMeta} */
  static DateMeta() {
    return Joi.object({
      added_on_store: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      inventory_updated_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }

  /** @returns {DefaultKeyRequest} */
  static DefaultKeyRequest() {
    return Joi.object({
      default_key: Joi.string().allow("").required(),
    });
  }

  /** @returns {DeleteAppCategoryReturnConfig} */
  static DeleteAppCategoryReturnConfig() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      category_ids: Joi.array().items(Joi.number()).required(),
      company_id: Joi.number().required(),
    });
  }

  /** @returns {DeleteResponse} */
  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {DeleteSearchConfigurationResponse} */
  static DeleteSearchConfigurationResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {DeleteSearchRerankConfigurationResponse} */
  static DeleteSearchRerankConfigurationResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Department} */
  static Department() {
    return Joi.object({
      logo: CatalogPlatformModel.Media2(),
      name: Joi.string().allow(""),
      priority_order: Joi.number(),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {DepartmentCategoryTree} */
  static DepartmentCategoryTree() {
    return Joi.object({
      department: Joi.string().allow(""),
      items: Joi.array().items(CatalogPlatformModel.CategoryItems()),
    });
  }

  /** @returns {PollErrorResponse} */
  static PollErrorResponse() {
    return Joi.object({
      error: Joi.any(),
    });
  }

  /** @returns {ProductBundleCreateErrorResponse} */
  static ProductBundleCreateErrorResponse() {
    return Joi.object({
      error: Joi.any(),
    });
  }

  /** @returns {DepartmentErrorResponse} */
  static DepartmentErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),
      errors: Joi.any(),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      status: Joi.number(),
    });
  }

  /** @returns {DepartmentIdentifier} */
  static DepartmentIdentifier() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {DepartmentResponse} */
  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.Department()),
    });
  }

  /** @returns {ValidationFailedResponse} */
  static ValidationFailedResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {DepartmentsResponse} */
  static DepartmentsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.GetDepartment()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {DimensionResponse} */
  static DimensionResponse() {
    return Joi.object({
      height: Joi.number().required(),
      is_default: Joi.boolean().required(),
      length: Joi.number().required(),
      unit: Joi.string().allow("").required(),
      width: Joi.number().required(),
    });
  }

  /** @returns {InventoryDimensionResponse} */
  static InventoryDimensionResponse() {
    return Joi.object({
      height: Joi.number(),
      length: Joi.number(),
      unit: Joi.string().allow(""),
      width: Joi.number(),
    });
  }

  /** @returns {Document} */
  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),
      type: Joi.string().allow("").required(),
      url: Joi.string().allow(""),
      value: Joi.string().allow("").required(),
      verified: Joi.boolean(),
    });
  }

  /** @returns {EntityConfiguration} */
  static EntityConfiguration() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      config_id: Joi.string().allow(""),
      config_type: Joi.string().allow(""),
      id: Joi.string().allow(""),
      listing: CatalogPlatformModel.GetCatalogConfigurationDetailsSchemaListing(),
      product: CatalogPlatformModel.GetCatalogConfigurationDetailsProduct(),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),
      error: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      status: Joi.number(),
    });
  }

  /** @returns {CategoryErrorResponse} */
  static CategoryErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),
      error: Joi.any(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {FilerList} */
  static FilerList() {
    return Joi.object({
      display: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {RawProduct} */
  static RawProduct() {
    return Joi.object({
      _custom_json: Joi.any(),
      all_company_ids: Joi.array().items(Joi.number()),
      all_identifiers: Joi.array().items(Joi.string().allow("")),
      all_sizes: Joi.array().items(Joi.any()),
      attributes: Joi.any(),
      brand: CatalogPlatformModel.Brand(),
      brand_uid: Joi.number(),
      category: Joi.any(),
      category_slug: Joi.string().allow(""),
      category_uid: Joi.number(),
      color: Joi.string().allow(""),
      company_id: Joi.number(),
      country_of_origin: Joi.string().allow(""),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      custom_order: Joi.any(),
      departments: Joi.array().items(Joi.number()),
      description: Joi.string().allow(""),
      highlights: Joi.array().items(Joi.string().allow("")),
      hsn_code: Joi.string().allow(""),
      id: Joi.string().allow(""),
      image_nature: Joi.string().allow(""),
      images: Joi.array().items(Joi.string().allow("")),
      is_active: Joi.boolean(),
      is_dependent: Joi.boolean(),
      is_expirable: Joi.boolean(),
      is_image_less_product: Joi.boolean(),
      is_physical: Joi.boolean(),
      is_set: Joi.boolean(),
      item_code: Joi.string().allow(""),
      item_type: Joi.string().allow(""),
      l3_mapping: Joi.array().items(Joi.string().allow("")),
      media: Joi.array().items(CatalogPlatformModel.Media()),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      moq: Joi.any(),
      multi_size: Joi.boolean(),
      name: Joi.string().allow(""),
      net_quantity: CatalogPlatformModel.NetQuantityResponse(),
      no_of_boxes: Joi.number(),
      pending: Joi.string().allow(""),
      primary_color: Joi.string().allow(""),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      product_publish: CatalogPlatformModel.ProductPublished(),
      return_config: CatalogPlatformModel.ReturnConfigResponse(),
      short_description: Joi.string().allow(""),
      size_guide: Joi.string().allow(""),
      sizes: Joi.array().items(Joi.any()),
      slug: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: Joi.any(),
      teaser_tag: Joi.any(),
      template_tag: Joi.string().allow(""),
      trader: Joi.array().items(CatalogPlatformModel.Trader()),
      uid: Joi.number(),
      variant_group: Joi.any(),
      variant_media: Joi.any(),
      variants: Joi.any(),
      verified_by: CatalogPlatformModel.VerifiedBy(),
      verified_on: Joi.string().allow(""),
      store_id_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {RawProductListingResponse} */
  static RawProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.RawProduct()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {GTIN} */
  static GTIN() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),
      gtin_value: Joi.string().allow("").required(),
      primary: Joi.boolean(),
    });
  }

  /** @returns {AttributeDetail} */
  static AttributeDetail() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_by: Joi.any(),
      modified_by: Joi.any(),
      departments: Joi.array().items(Joi.string().allow("")),
      description: Joi.string().allow(""),
      details: CatalogPlatformModel.AttributeMasterDetails(),
      enabled_for_end_consumer: Joi.boolean(),
      filters: CatalogPlatformModel.AttributeMasterFilter(),
      _id: Joi.string().allow(""),
      is_nested: Joi.boolean(),
      logo: Joi.string().allow(""),
      meta: CatalogPlatformModel.AttributeMasterMeta(),
      name: Joi.string().allow(""),
      schema: CatalogPlatformModel.AttributeMaster(),
      slug: Joi.string().allow(""),
      variant: Joi.boolean(),
    });
  }

  /** @returns {GetAddressSerializer} */
  static GetAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
    });
  }

  /** @returns {GetAllSizes} */
  static GetAllSizes() {
    return Joi.object({
      all_sizes: Joi.array().items(CatalogPlatformModel.AllSizes()),
    });
  }

  /** @returns {FilterResponse} */
  static FilterResponse() {
    return Joi.object({
      values: Joi.array().items(CatalogPlatformModel.ValueItem()),
    });
  }

  /** @returns {ValueItem} */
  static ValueItem() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {GetAppCatalogConfiguration} */
  static GetAppCatalogConfiguration() {
    return Joi.object({
      data: CatalogPlatformModel.AppCatalogConfiguration(),
      is_default: Joi.boolean(),
    });
  }

  /** @returns {GetAppCatalogEntityConfiguration} */
  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      data: CatalogPlatformModel.EntityConfiguration(),
      is_default: Joi.boolean(),
    });
  }

  /** @returns {GetAutocompleteWordsData} */
  static GetAutocompleteWordsData() {
    return Joi.object({
      results: Joi.array().items(CatalogPlatformModel.AutocompleteResult()),
      app_id: Joi.string().allow(""),
      words: Joi.array().items(Joi.string().allow("")),
      is_active: Joi.boolean(),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {GetAutocompleteWordsResponse} */
  static GetAutocompleteWordsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.GetAutocompleteWordsData()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {GetCatalogConfigurationDetailsProduct} */
  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      compare: CatalogPlatformModel.CompareFilter(),
      similar: CatalogPlatformModel.SimilarFilter(),
      variant: CatalogPlatformModel.VariantFilter(),
      detail: CatalogPlatformModel.DetailFilter(),
    });
  }

  /** @returns {FilterItem} */
  static FilterItem() {
    return Joi.object({
      key: Joi.string().allow(""),
      display: Joi.string().allow(""),
      filter_types: Joi.array().items(Joi.string().allow("")),
      units: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CompareFilter} */
  static CompareFilter() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.FilterItem()),
    });
  }

  /** @returns {SimilarFilter} */
  static SimilarFilter() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.SimilarItem()),
    });
  }

  /** @returns {VariantFilter} */
  static VariantFilter() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.VariantItem()),
    });
  }

  /** @returns {DetailFilter} */
  static DetailFilter() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.FilterItem()),
      values: CatalogPlatformModel.DetailFilterValues(),
    });
  }

  /** @returns {DetailFilterValues} */
  static DetailFilterValues() {
    return Joi.object({
      display_type: Joi.array().items(CatalogPlatformModel.DisplayType()),
    });
  }

  /** @returns {DisplayType} */
  static DisplayType() {
    return Joi.object({
      key: Joi.string().allow(""),
      display: Joi.string().allow(""),
    });
  }

  /** @returns {SimilarItem} */
  static SimilarItem() {
    return Joi.object({
      key: Joi.string().allow(""),
      display: Joi.string().allow(""),
    });
  }

  /** @returns {VariantItem} */
  static VariantItem() {
    return Joi.object({
      key: Joi.string().allow(""),
      display: Joi.string().allow(""),
    });
  }

  /** @returns {GetCatalogConfigurationDetailsSchemaListing} */
  static GetCatalogConfigurationDetailsSchemaListing() {
    return Joi.object({
      filter: Joi.any(),
      sort: Joi.any(),
    });
  }

  /** @returns {GetCatalogConfigurationMetaData} */
  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      listing: CatalogPlatformModel.MetaDataListingResponse(),
      product: CatalogPlatformModel.GetCatalogConfigurationDetailsProduct(),
    });
  }

  /** @returns {GetCollectionDetailNest} */
  static GetCollectionDetailNest() {
    return Joi.object({
      _schedule: CatalogPlatformModel.CollectionSchedule(),
      action: CatalogPlatformModel.Action(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: CatalogPlatformModel.CollectionBadge(),
      banners: CatalogPlatformModel.ImageUrls(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      logo: CatalogPlatformModel.Media(),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      query: Joi.array().items(CatalogPlatformModel.CollectionQuery()),
      slug: Joi.string().allow(""),
      tag: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
      _id: Joi.string().allow(""),
      published: Joi.boolean(),
      tags: Joi.array().items(Joi.string().allow("")),
      sort_on: Joi.string().allow(""),
      _custom_json: Joi.any(),
      _locale_language: Joi.any(),
      seo: CatalogPlatformModel.SeoDetail(),
      is_visible: Joi.boolean(),
    });
  }

  /** @returns {GetCollectionItemsResponse} */
  static GetCollectionItemsResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogPlatformModel.ProductFilters()),
      items: Joi.array().items(CatalogPlatformModel.ProductListingDetail()),
      page: CatalogPlatformModel.Page(),
      sort_on: Joi.array().items(CatalogPlatformModel.ProductSortOn()),
    });
  }

  /** @returns {GetCollectionListingResponse} */
  static GetCollectionListingResponse() {
    return Joi.object({
      filters: CatalogPlatformModel.CollectionListingFilter(),
      items: Joi.array().items(CatalogPlatformModel.GetCollectionDetailNest()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {GetCollectionQueryOptionResponse} */
  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogPlatformModel.ProductFilters()),
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
      sort_on: Joi.array().items(CatalogPlatformModel.ProductSortOn()),
    });
  }

  /** @returns {GetCompanySerializer} */
  static GetCompanySerializer() {
    return Joi.object({
      addresses: Joi.array().items(CatalogPlatformModel.GetAddressSerializer()),
      business_type: Joi.string().allow(""),
      company_type: Joi.string().allow(""),
      created_by: CatalogPlatformModel.UserSerializer2(),
      created_on: Joi.string().allow(""),
      modified_by: CatalogPlatformModel.UserSerializer2(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      reject_reason: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      uid: Joi.number(),
      verified_by: CatalogPlatformModel.UserSerializer2(),
      verified_on: Joi.string().allow(""),
    });
  }

  /** @returns {ConditionItem} */
  static ConditionItem() {
    return Joi.object({
      key: Joi.string().allow(""),
      display: Joi.string().allow(""),
    });
  }

  /** @returns {DataItem} */
  static DataItem() {
    return Joi.object({
      key: Joi.string().allow(""),
      display: Joi.string().allow(""),
      filter_types: Joi.array().items(Joi.string().allow("")),
      compatible_units: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ValueTypeItem} */
  static ValueTypeItem() {
    return Joi.object({
      key: Joi.string().allow(""),
      display: Joi.string().allow(""),
    });
  }

  /** @returns {SortTypeItem} */
  static SortTypeItem() {
    return Joi.object({
      key: Joi.string().allow(""),
      display: Joi.string().allow(""),
    });
  }

  /** @returns {GetConfigMetadataResponse} */
  static GetConfigMetadataResponse() {
    return Joi.object({
      page: CatalogPlatformModel.Page(),
      condition: Joi.array().items(CatalogPlatformModel.ConditionItem()),
      data: Joi.array().items(CatalogPlatformModel.DataItem()).required(),
      values: CatalogPlatformModel.GetConfigMetadataValues(),
    });
  }

  /** @returns {GetConfigMetadataValues} */
  static GetConfigMetadataValues() {
    return Joi.object({
      type: Joi.array().items(CatalogPlatformModel.ValueTypeItem()),
      sort: Joi.array().items(CatalogPlatformModel.SortTypeItem()),
    });
  }

  /** @returns {AttributeType} */
  static AttributeType() {
    return Joi.object({
      unit: Joi.string().allow(""),
      priority: Joi.number(),
      name: Joi.string().allow(""),
      key: Joi.string().allow(""),
      display_type: Joi.string().allow(""),
      is_active: Joi.boolean(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {DataType} */
  static DataType() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      is_default: Joi.boolean(),
      priority: Joi.number(),
      name: Joi.string().allow(""),
      attributes: Joi.array().items(CatalogPlatformModel.AttributeType()),
      is_active: Joi.boolean(),
      slug: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {ListingValueConfigType} */
  static ListingValueConfigType() {
    return Joi.object({
      sort: Joi.string().allow(""),
      bucket_points: Joi.array().items(Joi.any()),
      map: Joi.any(),
      condition: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {SizeLimitConfiguration} */
  static SizeLimitConfiguration() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {ListingDataType} */
  static ListingDataType() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      allow_single: Joi.boolean(),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      key: Joi.string().allow(""),
      name: Joi.string().allow(""),
      is_default: Joi.boolean(),
      priority: Joi.number(),
      logo: Joi.string().allow(""),
      value_config: CatalogPlatformModel.ListingValueConfigType(),
      type: Joi.string().allow(""),
      display_type: Joi.string().allow(""),
      size: CatalogPlatformModel.SizeLimitConfiguration(),
    });
  }

  /** @returns {GetListingConfigResponse} */
  static GetListingConfigResponse() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.ListingDataType()),
      page: CatalogPlatformModel.PageResponseType(),
    });
  }

  /** @returns {GetConfigResponse} */
  static GetConfigResponse() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.DataType()).required(),
      page: CatalogPlatformModel.PageResponseType().required(),
    });
  }

  /** @returns {GetDepartment} */
  static GetDepartment() {
    return Joi.object({
      created_by: CatalogPlatformModel.RequestUserSerializer(),
      created_on: Joi.string().allow(""),
      is_active: Joi.boolean(),
      item_type: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      modified_by: CatalogPlatformModel.RequestUserSerializer(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      page_no: Joi.number(),
      page_size: Joi.number(),
      priority_order: Joi.number(),
      search: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
    });
  }

  /** @returns {GetInventories} */
  static GetInventories() {
    return Joi.object({
      brand: CatalogPlatformModel.InventoryBrandMeta(),
      company: CatalogPlatformModel.InventoryCompanyMeta(),
      country_of_origin: Joi.string().allow(""),
      created_by: CatalogPlatformModel.RequestUserSerializer(),
      date_meta: CatalogPlatformModel.DateMeta(),
      dimension: CatalogPlatformModel.InventoryDimensionResponse(),
      expiration_date: Joi.string().allow(""),
      id: Joi.string().allow(""),
      identifier: Joi.any(),
      inventory_updated_on: Joi.string().allow(""),
      is_set: Joi.boolean(),
      item_id: Joi.number(),
      manufacturer: CatalogPlatformModel.InventoryManufacturerResponse(),
      modified_by: CatalogPlatformModel.RequestUserSerializer(),
      platforms: Joi.any(),
      price: CatalogPlatformModel.PriceArticle(),
      quantities: CatalogPlatformModel.QuantitiesArticle(),
      return_config: CatalogPlatformModel.ReturnConfig(),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      store: CatalogPlatformModel.ArticleStoreResponse(),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: Joi.any(),
      total_quantity: Joi.number(),
      trace_id: Joi.string().allow(""),
      track_inventory: Joi.boolean(),
      trader: Joi.array().items(CatalogPlatformModel.TraderResponse()),
      uid: Joi.string().allow(""),
      weight: CatalogPlatformModel.InventoryWeightResponse(),
    });
  }

  /** @returns {GetInventoriesResponse} */
  static GetInventoriesResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.GetInventories()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {GetLocationSerializer} */
  static GetLocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),
      address: CatalogPlatformModel.GetAddressSerializer().required(),
      store_code: Joi.string().allow("").required(),
      company: CatalogPlatformModel.GetCompanySerializer(),
      contact_numbers: Joi.array().items(
        CatalogPlatformModel.SellerPhoneNumber()
      ),
      created_by: CatalogPlatformModel.UserSerializer3(),
      created_on: Joi.string().allow(""),
      display_name: Joi.string().allow("").required(),
      documents: Joi.array().items(CatalogPlatformModel.Document()),
      gst_credentials: CatalogPlatformModel.InvoiceDetailsSerializer(),
      integration_type: CatalogPlatformModel.LocationIntegrationType(),
      manager: CatalogPlatformModel.LocationManagerSerializer(),
      modified_by: CatalogPlatformModel.UserSerializer3(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      phone_number: Joi.string().allow(""),
      product_return_config: CatalogPlatformModel.ProductReturnConfigSerializer(),
      stage: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      timing: Joi.array().items(
        CatalogPlatformModel.LocationDayWiseSerializer()
      ),
      uid: Joi.number(),
      verified_by: CatalogPlatformModel.UserSerializer3(),
      verified_on: Joi.string().allow(""),
      warnings: Joi.any(),
    });
  }

  /** @returns {GetOptInPlatform} */
  static GetOptInPlatform() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.CompanyOptIn()).required(),
      page: CatalogPlatformModel.Page().required(),
    });
  }

  /** @returns {GetProductBundleCreateResponse} */
  static GetProductBundleCreateResponse() {
    return Joi.object({
      created_by: Joi.any(),
      modified_by: Joi.any(),
      choice: Joi.string().allow("").required(),
      company_id: Joi.number(),
      created_on: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      logo: Joi.string().allow("").allow(null),
      meta: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      page_visibility: Joi.array().items(Joi.string().allow("")),
      products: Joi.array()
        .items(CatalogPlatformModel.ProductBundleItem())
        .required(),
      same_store_assignment: Joi.boolean(),
      slug: Joi.string().allow("").required(),
      allow_remove: Joi.boolean().required(),
      auto_add_to_cart: Joi.boolean().required(),
      auto_select: Joi.boolean().required(),
      prefer_single_shipment: Joi.boolean().required(),
      allow_individual_cancel: Joi.boolean().required(),
      allow_individual_return: Joi.boolean().required(),
    });
  }

  /** @returns {GetProductBundleListingResponse} */
  static GetProductBundleListingResponse() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.GetProductBundleCreateResponse()
      ),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {GetProductBundleResponse} */
  static GetProductBundleResponse() {
    return Joi.object({
      choice: Joi.string().allow(""),
      company_id: Joi.number(),
      is_active: Joi.boolean(),
      logo: Joi.string().allow(""),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      page_visibility: Joi.array().items(Joi.string().allow("")),
      products: Joi.array().items(CatalogPlatformModel.GetProducts()),
      same_store_assignment: Joi.boolean(),
      allow_remove: Joi.boolean(),
      auto_add_to_cart: Joi.boolean(),
      auto_select: Joi.boolean(),
      prefer_single_shipment: Joi.boolean(),
      allow_individual_cancel: Joi.boolean(),
      allow_individual_return: Joi.boolean(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {GetProducts} */
  static GetProducts() {
    return Joi.object({
      max_quantity: Joi.number(),
      min_quantity: Joi.number(),
      price: CatalogPlatformModel.Price(),
      product_details: CatalogPlatformModel.LimitedProductData(),
      product_uid: Joi.number(),
      sizes: Joi.array().items(CatalogPlatformModel.Size()),
    });
  }

  /** @returns {GetCollectionDetailResponse} */
  static GetCollectionDetailResponse() {
    return Joi.object({
      _custom_json: Joi.any(),
      _locale_language: Joi.any(),
      _schedule: CatalogPlatformModel.CollectionSchedule(),
      action: Joi.any(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: CatalogPlatformModel.CollectionBadge(),
      banners: CatalogPlatformModel.ImageUrls(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_visible: Joi.boolean(),
      logo: CatalogPlatformModel.Media(),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      published: Joi.boolean(),
      query: Joi.array().items(CatalogPlatformModel.CollectionQuery()),
      seo: CatalogPlatformModel.SeoDetail(),
      slug: Joi.string().allow(""),
      sort_on: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CommonResponseSchemaCollection} */
  static CommonResponseSchemaCollection() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {GetQueryFiltersResponse} */
  static GetQueryFiltersResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogPlatformModel.ProductFilters()),
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")),
      sort_on: Joi.array().items(CatalogPlatformModel.ProductSortOn()),
    });
  }

  /** @returns {GetCollectionItemsResponseSchema} */
  static GetCollectionItemsResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.ProductDetailV2()),
      sort_on: Joi.array().items(CatalogPlatformModel.ProductSortOnv2()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {Page1} */
  static Page1() {
    return Joi.object({
      ca: Joi.boolean(),
      department: Joi.string().allow(""),
      page_no: Joi.number(),
      page_size: Joi.number(),
      q: Joi.string().allow(""),
      sort: Joi.string().allow(""),
      sort_on: Joi.string().allow(""),
      type: Joi.string().allow(""),
      variant: Joi.string().allow(""),
    });
  }

  /** @returns {CollectionItemSchemaV2} */
  static CollectionItemSchemaV2() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      item_id: Joi.number().required(),
      priority: Joi.number(),
    });
  }

  /** @returns {CollectionItemUpdateSchema} */
  static CollectionItemUpdateSchema() {
    return Joi.object({
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      items: Joi.array().items(CatalogPlatformModel.CollectionItemSchemaV2()),
      query: Joi.array().items(CatalogPlatformModel.CollectionQuerySchemaV2()),
      type: Joi.string().allow("").required(),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
      reset_items: Joi.boolean(),
    });
  }

  /** @returns {CollectionQuerySchemaV2} */
  static CollectionQuerySchemaV2() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),
      op: Joi.string().allow("").required(),
      value: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {ProductDetailV2} */
  static ProductDetailV2() {
    return Joi.object({
      brand: CatalogPlatformModel.ProductBrand(),
      is_excluded: Joi.boolean(),
      is_pinned: Joi.boolean(),
      item_code: Joi.string().allow(""),
      item_type: Joi.string().allow(""),
      medias: Joi.array().items(CatalogPlatformModel.Media()),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      short_description: Joi.string().allow(""),
      slug: Joi.string().allow("").required(),
      uid: Joi.number(),
    });
  }

  /** @returns {GetSearchConfigurationResponse} */
  static GetSearchConfigurationResponse() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      is_proximity_enabled: Joi.boolean(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      proximity: Joi.number(),
      searchable_attributes: Joi.array().items(
        CatalogPlatformModel.SearchableAttribute()
      ),
    });
  }

  /** @returns {GetSearchWordsData} */
  static GetSearchWordsData() {
    return Joi.object({
      query: Joi.any(),
      sort_on: Joi.string().allow(""),
      _custom_json: Joi.any(),
      app_id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      result: Joi.any(),
      uid: Joi.string().allow(""),
      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {GetSearchWordsDetailResponse} */
  static GetSearchWordsDetailResponse() {
    return Joi.object({
      items: CatalogPlatformModel.GetSearchWordsData(),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {GetSearchWordsResponse} */
  static GetSearchWordsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.GetSearchWordsData()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {GlobalValidation} */
  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),
      description: Joi.string().allow(""),
      properties: CatalogPlatformModel.Properties(),
      required: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Guide} */
  static Guide() {
    return Joi.object({
      meta: CatalogPlatformModel.Meta(),
    });
  }

  /** @returns {HSNCodesResponse} */
  static HSNCodesResponse() {
    return Joi.object({
      data: CatalogPlatformModel.HSNData(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {HSNData} */
  static HSNData() {
    return Joi.object({
      country_of_origin: Joi.array().items(Joi.string().allow("")),
      hsn_code: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {HSNDataInsertV2} */
  static HSNDataInsertV2() {
    return Joi.object({
      id: Joi.string().allow(""),
      country_code: Joi.string().allow("").required(),
      created_by: Joi.any(),
      modified_by: Joi.any(),
      created_on: Joi.string().allow(""),
      description: Joi.string().allow("").required(),
      hsn_code: Joi.string().allow("").required(),
      hsn_code_id: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      reporting_hsn: Joi.string().allow("").required(),
      taxes: Joi.array().items(CatalogPlatformModel.TaxSlab()).required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {Hierarchy} */
  static Hierarchy() {
    return Joi.object({
      department: Joi.number().required(),
      l1: Joi.number().required(),
      l2: Joi.number().required(),
    });
  }

  /** @returns {HsnCode} */
  static HsnCode() {
    return Joi.object({
      data: Joi.any(),
    });
  }

  /** @returns {SlabObject} */
  static SlabObject() {
    return Joi.object({
      threshold: Joi.number(),
      tax: Joi.number(),
    });
  }

  /** @returns {UpdateHsnCodesObject} */
  static UpdateHsnCodesObject() {
    return Joi.object({
      modified_by: Joi.any(),
      company_id: Joi.number(),
      slabs: Joi.array().items(CatalogPlatformModel.SlabObject()),
      hs2_code: Joi.string().allow(""),
      hsn_code: Joi.string().allow(""),
      tax_on: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateHsnCode} */
  static UpdateHsnCode() {
    return Joi.object({
      data: Joi.any(),
    });
  }

  /** @returns {HsnCodesListingResponseSchemaV2} */
  static HsnCodesListingResponseSchemaV2() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.HSNDataInsertV2()),
      page: CatalogPlatformModel.PageResponse1(),
    });
  }

  /** @returns {HsnCodesObject} */
  static HsnCodesObject() {
    return Joi.object({
      company_id: Joi.number(),
      hs2_code: Joi.string().allow(""),
      hsn_code: Joi.string().allow(""),
      id: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      tax1: Joi.number(),
      tax2: Joi.number(),
      tax_on_esp: Joi.boolean(),
      tax_on_mrp: Joi.boolean(),
      threshold1: Joi.number(),
      threshold2: Joi.number(),
    });
  }

  /** @returns {HsnUpsert} */
  static HsnUpsert() {
    return Joi.object({
      company_id: Joi.number().required(),
      hs2_code: Joi.string().allow("").allow(null).required(),
      hsn_code: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      tax1: Joi.number().required(),
      tax2: Joi.number(),
      tax_on_esp: Joi.boolean(),
      tax_on_mrp: Joi.boolean().required(),
      threshold1: Joi.number().required(),
      threshold2: Joi.number(),
      uid: Joi.number(),
    });
  }

  /** @returns {Image} */
  static Image() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      aspect_ratio_f: Joi.number(),
      secure_url: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {ImageUrls} */
  static ImageUrls() {
    return Joi.object({
      landscape: CatalogPlatformModel.BannerImage(),
      portrait: CatalogPlatformModel.BannerImage(),
    });
  }

  /** @returns {InvSize} */
  static InvSize() {
    return Joi.object({
      currency: Joi.string().allow("").required(),
      expiration_date: Joi.string().allow(""),
      identifiers: Joi.array().items(CatalogPlatformModel.GTIN()).required(),
      is_set: Joi.boolean(),
      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),
      item_height: Joi.number().allow(null),
      item_length: Joi.number().allow(null),
      item_weight: Joi.number().allow(null),
      item_weight_unit_of_measure: Joi.string().allow("").allow(null),
      item_width: Joi.number().allow(null),
      price: Joi.number(),
      price_effective: Joi.number().required(),
      price_transfer: Joi.number().allow(null),
      quantity: Joi.number().required(),
      set: CatalogPlatformModel.InventorySet(),
      size: Joi.string().allow("").required(),
      store_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {InventoryBulkRequest} */
  static InventoryBulkRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      sizes: Joi.array()
        .items(CatalogPlatformModel.InventoryJobPayload())
        .required(),
      user: Joi.any(),
    });
  }

  /** @returns {InventoryConfig} */
  static InventoryConfig() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.FilerList()),
      multivalue: Joi.boolean(),
    });
  }

  /** @returns {InventoryCreateRequest} */
  static InventoryCreateRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.string().allow("")),
      filters: Joi.any().required(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryExportAdvanceOption} */
  static InventoryExportAdvanceOption() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      from_date: Joi.string().allow("").allow(null),
      quantity: CatalogPlatformModel.InventoryExportQuantityFilter(),
      store_ids: Joi.array().items(Joi.number()),
      to_date: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {InventoryExportFilter} */
  static InventoryExportFilter() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      from_date: Joi.string().allow(""),
      quantity: Joi.any(),
      store_ids: Joi.array().items(Joi.number()).required(),
      to_date: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryExportJobResponse} */
  static InventoryExportJobResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.InventoryExportItem()),
    });
  }

  /** @returns {InventoryExportItem} */
  static InventoryExportItem() {
    return Joi.object({
      status: Joi.string().allow(""),
      type: Joi.string().allow(""),
      stats: Joi.any(),
      completed_on: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      seller_id: Joi.number(),
      task_id: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      created_by: CatalogPlatformModel.CreatedBy(),
      _id: Joi.string().allow(""),
      url: Joi.string().allow(""),
      trigger_on: Joi.string().allow(""),
      brand: Joi.array().items(Joi.number()),
      store: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {InventoryExportJob} */
  static InventoryExportJob() {
    return Joi.object({
      completed_on: Joi.string().allow(""),
      filters: Joi.any(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.number().required(),
      status: Joi.string().allow(""),
      task_id: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryExportJobListFilters} */
  static InventoryExportJobListFilters() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      store_ids: Joi.array().items(Joi.number()),
      brands: Joi.array().items(Joi.string().allow("")),
      stores: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {InventoryExportJobListStats} */
  static InventoryExportJobListStats() {
    return Joi.object({
      success: Joi.number(),
      total: Joi.number(),
    });
  }

  /** @returns {InventoryExportJobList} */
  static InventoryExportJobList() {
    return Joi.object({
      status: Joi.string().allow(""),
      completed_on: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      filters: CatalogPlatformModel.InventoryExportJobListFilters(),
      stats: CatalogPlatformModel.InventoryExportJobListStats(),
      type: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      seller_id: Joi.number(),
      url: Joi.string().allow(""),
      task_id: Joi.string().allow(""),
      created_by: CatalogPlatformModel.CreatedBy(),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryExportJobListResponse} */
  static InventoryExportJobListResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.InventoryExportJobList()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {InventoryExportQuantityFilter} */
  static InventoryExportQuantityFilter() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
      operators: Joi.string().allow("").required(),
    });
  }

  /** @returns {ExportPatchRequest} */
  static ExportPatchRequest() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryExportRequest} */
  static InventoryExportRequest() {
    return Joi.object({
      brand: Joi.array().items(Joi.number()),
      store: Joi.array().items(Joi.number()),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {EditInventoryDataDownloadsResponse} */
  static EditInventoryDataDownloadsResponse() {
    return Joi.object({
      url: Joi.string().allow(""),
      completed_on: Joi.string().allow(""),
      seller_id: Joi.number(),
      task_id: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {EditInventoryDownloadsResponse} */
  static EditInventoryDownloadsResponse() {
    return Joi.object({
      data: CatalogPlatformModel.EditInventoryDataDownloadsResponse(),
    });
  }

  /** @returns {InventoryExportFiltersResponse} */
  static InventoryExportFiltersResponse() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      store_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {Stats} */
  static Stats() {
    return Joi.object({
      total: Joi.number(),
    });
  }

  /** @returns {InventoryExportResponse} */
  static InventoryExportResponse() {
    return Joi.object({
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      filters: CatalogPlatformModel.InventoryExportFiltersResponse(),
      modified_on: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.number().required(),
      status: Joi.string().allow(""),
      task_id: Joi.string().allow("").required(),
      type: Joi.string().allow(""),
      stats: CatalogPlatformModel.Stats(),
      _id: Joi.string().allow(""),
      trigger_on: Joi.string().allow(""),
      brand: Joi.array().items(Joi.number()),
      store: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {InventoryFailedReason} */
  static InventoryFailedReason() {
    return Joi.object({
      errors: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
      reason_code: Joi.number(),
    });
  }

  /** @returns {InventoryJobDetailResponse} */
  static InventoryJobDetailResponse() {
    return Joi.object({
      cancelled_by: Joi.any(),
      cancelled_on: Joi.string().allow(""),
      completed_on: Joi.string().allow(""),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      filters: Joi.any().required(),
      id: Joi.string().allow("").required(),
      modified_on: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.number().required(),
      status: Joi.string().allow(""),
      task_id: Joi.string().allow("").required(),
      type: Joi.string().allow(""),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {InventoryJobFilters} */
  static InventoryJobFilters() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")),
      from_date: Joi.string().allow(""),
      quantity: Joi.any(),
      stores: Joi.array().items(Joi.string().allow("")),
      to_date: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryJobPayload} */
  static InventoryJobPayload() {
    return Joi.object({
      currency: Joi.string().allow(""),
      expiration_date: Joi.string().allow(""),
      item_dimensions_unit_of_measure: Joi.string().allow(""),
      item_weight_unit_of_measure: Joi.string().allow(""),
      price: Joi.number(),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      quantity: Joi.number(),
      seller_identifier: Joi.string().allow("").required(),
      store_code: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      total_quantity: Joi.number(),
      trace_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {InventoryPage} */
  static InventoryPage() {
    return Joi.object({
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number().required(),
      next_id: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {InventoryPayload} */
  static InventoryPayload() {
    return Joi.object({
      expiration_date: Joi.string().allow(""),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      seller_identifier: Joi.string().allow("").required(),
      store_id: Joi.number().required(),
      tags: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      total_quantity: Joi.number().allow(null),
      sellable_quantity: Joi.number(),
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryRequest} */
  static InventoryRequest() {
    return Joi.object({
      company_id: Joi.number().required(),
      item: CatalogPlatformModel.ItemQuery().required(),
      sizes: Joi.array().items(CatalogPlatformModel.InvSize()).required(),
    });
  }

  /** @returns {InventoryRequestSchemaV2} */
  static InventoryRequestSchemaV2() {
    return Joi.object({
      meta: Joi.any(),
      payload: Joi.array().items(CatalogPlatformModel.InventoryPayload()),
    });
  }

  /** @returns {InventoryIdentifier} */
  static InventoryIdentifier() {
    return Joi.object({
      gtin_type: Joi.string().allow(""),
      gtin_value: Joi.string().allow(""),
      primary: Joi.boolean(),
    });
  }

  /** @returns {InventoryGeoLocation} */
  static InventoryGeoLocation() {
    return Joi.object({
      type: Joi.string().allow(""),
      coordinates: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {InventoryMobileNumber} */
  static InventoryMobileNumber() {
    return Joi.object({
      number: Joi.string().allow(""),
      country_code: Joi.number(),
    });
  }

  /** @returns {InventoryAddress} */
  static InventoryAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      state: Joi.string().allow(""),
      lat_long: CatalogPlatformModel.InventoryGeoLocation(),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryManager} */
  static InventoryManager() {
    return Joi.object({
      name: Joi.string().allow(""),
      email: Joi.string().allow(""),
      mobile_no: CatalogPlatformModel.InventoryMobileNumber(),
    });
  }

  /** @returns {InventoryStore} */
  static InventoryStore() {
    return Joi.object({
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      uid: Joi.number(),
      address: CatalogPlatformModel.InventoryAddress(),
      manager: CatalogPlatformModel.InventoryManager(),
      _custom_json: Joi.any(),
    });
  }

  /** @returns {InventoryResponse} */
  static InventoryResponse() {
    return Joi.object({
      store: CatalogPlatformModel.InventoryStore(),
      uid: Joi.string().allow(""),
      size: Joi.string().allow(""),
      inventory_updated_on: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
      item_id: Joi.number(),
      quantity: Joi.number(),
      price: Joi.number(),
      price_effective: Joi.number(),
      price_transfer: Joi.number(),
      currency: Joi.string().allow(""),
      sellable_quantity: Joi.number(),
      created_by: CatalogPlatformModel.CreatedBy(),
      modified_by: CatalogPlatformModel.CreatedBy(),
      expiration_date: Joi.string().allow(""),
      identifiers: Joi.array().items(
        CatalogPlatformModel.InventoryIdentifier()
      ),
    });
  }

  /** @returns {InventoryResponseItem} */
  static InventoryResponseItem() {
    return Joi.object({
      data: CatalogPlatformModel.InventoryPayload(),
      reason: CatalogPlatformModel.InventoryFailedReason(),
    });
  }

  /** @returns {InventoryResponsePaginated} */
  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.InventoryResponse()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {InventorySellerIdentifierResponsePaginated} */
  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.InventorySellerResponse()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {InventorySellerResponse} */
  static InventorySellerResponse() {
    return Joi.object({
      _custom_json: Joi.any(),
      added_on_store: Joi.string().allow(""),
      brand: Joi.any().required(),
      company: Joi.any().required(),
      country_of_origin: Joi.string().allow("").required(),
      created_by: Joi.string().allow("").allow(null),
      dimension: Joi.any().required(),
      expiration_date: Joi.string().allow(""),
      fragile: Joi.boolean().required(),
      fynd_article_code: Joi.string().allow("").required(),
      fynd_item_code: Joi.string().allow("").required(),
      fynd_meta: Joi.any(),
      identifier: Joi.any().required(),
      is_active: Joi.boolean(),
      is_set: Joi.boolean(),
      item_id: Joi.number().required(),
      manufacturer: Joi.any().required(),
      meta: Joi.any().allow(null),
      modified_by: Joi.string().allow("").allow(null),
      price: Joi.any().required(),
      quantities: CatalogPlatformModel.Quantities(),
      raw_meta: Joi.any(),
      return_config: Joi.any(),
      seller_identifier: Joi.string().allow("").required(),
      set: CatalogPlatformModel.InventorySet(),
      size: Joi.string().allow("").required(),
      stage: Joi.string().allow(""),
      store: Joi.any().required(),
      tags: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      tax_identifier: Joi.any(),
      total_quantity: Joi.number().required(),
      trace_id: Joi.string().allow(""),
      track_inventory: Joi.boolean(),
      trader: Joi.array().items(CatalogPlatformModel.Trader1()).allow(null, ""),
      uid: Joi.string().allow("").required(),
      weight: Joi.any().required(),
    });
  }

  /** @returns {InventorySet} */
  static InventorySet() {
    return Joi.object({
      name: Joi.string().allow(""),
      quantity: Joi.number(),
      size_distribution: CatalogPlatformModel.SizeDistribution().required(),
    });
  }

  /** @returns {InventoryStockResponse} */
  static InventoryStockResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),
      page: CatalogPlatformModel.InventoryPage().required(),
    });
  }

  /** @returns {InventoryUpdateResponse} */
  static InventoryUpdateResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.InventoryResponseItem()),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {InventoryValidationResponse} */
  static InventoryValidationResponse() {
    return Joi.object({
      data: Joi.any(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceCredSerializer} */
  static InvoiceCredSerializer() {
    return Joi.object({
      enabled: Joi.boolean(),
      password: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceDetailsSerializer} */
  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_invoice: CatalogPlatformModel.InvoiceCredSerializer(),
      e_waybill: CatalogPlatformModel.InvoiceCredSerializer(),
    });
  }

  /** @returns {ItemQuery} */
  static ItemQuery() {
    return Joi.object({
      brand_uid: Joi.number(),
      item_code: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {Items} */
  static Items() {
    return Joi.object({
      cancelled: Joi.number(),
      cancelled_records: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      created_by: CatalogPlatformModel.UserCommon(),
      created_on: Joi.string().allow(""),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.string().allow("")),
      file_path: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      modified_by: CatalogPlatformModel.UserCommon(),
      modified_on: Joi.string().allow(""),
      retry: Joi.number(),
      stage: Joi.string().allow(""),
      succeed: Joi.number(),
      total: Joi.number(),
      tracking_url: Joi.string().allow(""),
    });
  }

  /** @returns {PriceRange} */
  static PriceRange() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {ProductPriceRangeSchema} */
  static ProductPriceRangeSchema() {
    return Joi.object({
      effective: CatalogPlatformModel.PriceRange(),
      marked: CatalogPlatformModel.PriceRange(),
      currency: Joi.string().allow(""),
    });
  }

  /** @returns {LimitedProductData} */
  static LimitedProductData() {
    return Joi.object({
      attributes: Joi.any(),
      country_of_origin: Joi.string().allow(""),
      identifier: Joi.any(),
      images: Joi.array().items(Joi.string().allow("")),
      item_code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      price: CatalogPlatformModel.ProductPriceRangeSchema(),
      quantity: Joi.number(),
      short_description: Joi.string().allow(""),
      sizes: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {ListSizeGuide} */
  static ListSizeGuide() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.SizeGuideResponse()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {LocationDayWiseSerializer} */
  static LocationDayWiseSerializer() {
    return Joi.object({
      closing: CatalogPlatformModel.LocationTimingSerializer(),
      open: Joi.boolean().required(),
      opening: CatalogPlatformModel.LocationTimingSerializer(),
      weekday: Joi.string().allow("").required(),
    });
  }

  /** @returns {LocationIntegrationType} */
  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),
      order: Joi.string().allow(""),
    });
  }

  /** @returns {LocationListSerializer} */
  static LocationListSerializer() {
    return Joi.object({
      filters: Joi.array().items(Joi.any()),
      items: Joi.array().items(CatalogPlatformModel.GetLocationSerializer()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {LocationManagerSerializer} */
  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),
      mobile_no: CatalogPlatformModel.SellerPhoneNumber().required(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {LocationTimingSerializer} */
  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number(),
      minute: Joi.number(),
    });
  }

  /** @returns {Logo} */
  static Logo() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      aspect_ratio_f: Joi.number(),
      secure_url: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {MOQData} */
  static MOQData() {
    return Joi.object({
      increment_unit: Joi.number(),
      maximum: Joi.number(),
      minimum: Joi.number(),
    });
  }

  /** @returns {ManufacturerResponse} */
  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      is_default: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {InventoryManufacturerResponse} */
  static InventoryManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow(""),
      is_default: Joi.boolean(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Media} */
  static Media() {
    return Joi.object({
      meta: Joi.any(),
      type: Joi.string().allow(""),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {Media1} */
  static Media1() {
    return Joi.object({
      landscape: Joi.string().allow("").required(),
      logo: Joi.string().allow("").required(),
      portrait: Joi.string().allow("").required(),
    });
  }

  /** @returns {Media2} */
  static Media2() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {BrandMedia} */
  static BrandMedia() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      headers: CatalogPlatformModel.GuideHeaders(),
      values: Joi.array().items(CatalogPlatformModel.GuideValues()),
      unit: Joi.string().allow(""),
    });
  }

  /** @returns {GuideHeaders} */
  static GuideHeaders() {
    return Joi.object({
      col_1: CatalogPlatformModel.Header(),
      col_2: CatalogPlatformModel.Header(),
      col_3: CatalogPlatformModel.Header(),
      col_4: CatalogPlatformModel.Header(),
      col_5: CatalogPlatformModel.Header(),
      col_6: CatalogPlatformModel.Header(),
      col_7: CatalogPlatformModel.Header(),
      col_8: CatalogPlatformModel.Header(),
      col_9: CatalogPlatformModel.Header(),
      col_10: CatalogPlatformModel.Header(),
    });
  }

  /** @returns {GuideValues} */
  static GuideValues() {
    return Joi.object({
      col_1: Joi.string().allow(""),
      col_2: Joi.string().allow(""),
      col_3: Joi.string().allow(""),
      col_4: Joi.string().allow(""),
      col_5: Joi.string().allow(""),
      col_6: Joi.string().allow(""),
      col_7: Joi.string().allow(""),
      col_8: Joi.string().allow(""),
      col_9: Joi.string().allow(""),
      col_10: Joi.string().allow(""),
    });
  }

  /** @returns {Header} */
  static Header() {
    return Joi.object({
      value: Joi.string().allow(""),
      convertable: Joi.boolean(),
    });
  }

  /** @returns {MetaDataListingFilterMetaResponse} */
  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      display: Joi.string().allow(""),
      filter_types: Joi.array().items(Joi.string().allow("")),
      key: Joi.string().allow(""),
      units: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {MetaDataListingFilterResponse} */
  static MetaDataListingFilterResponse() {
    return Joi.object({
      data: Joi.array().items(
        CatalogPlatformModel.MetaDataListingFilterMetaResponse()
      ),
    });
  }

  /** @returns {MetaDataListingResponse} */
  static MetaDataListingResponse() {
    return Joi.object({
      filter: CatalogPlatformModel.MetaDataListingFilterResponse().required(),
      sort: CatalogPlatformModel.MetaDataListingSortResponse().required(),
    });
  }

  /** @returns {MetaDataListingSortMetaResponse} */
  static MetaDataListingSortMetaResponse() {
    return Joi.object({
      display: Joi.string().allow(""),
      key: Joi.string().allow(""),
    });
  }

  /** @returns {MetaDataListingSortResponse} */
  static MetaDataListingSortResponse() {
    return Joi.object({
      data: Joi.array().items(
        CatalogPlatformModel.MetaDataListingSortMetaResponse()
      ),
    });
  }

  /** @returns {MetaFields} */
  static MetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {NetQuantity} */
  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),
      value: Joi.number(),
    });
  }

  /** @returns {NetQuantityResponse} */
  static NetQuantityResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),
      value: Joi.number(),
    });
  }

  /** @returns {NextSchedule} */
  static NextSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {OptInPostRequest} */
  static OptInPostRequest() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      company_id: Joi.number(),
      enabled: Joi.boolean(),
      opt_level: Joi.string().allow("").required(),
      platform: Joi.string().allow(""),
      store_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {OptinCompanyBrandDetailsView} */
  static OptinCompanyBrandDetailsView() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.CompanyBrandDetail()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {OptinAddress} */
  static OptinAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),
      state: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {OptinDocument} */
  static OptinDocument() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
      legal_name: Joi.string().allow(""),
      verified: Joi.boolean(),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {OptinBusinessCountryInfo} */
  static OptinBusinessCountryInfo() {
    return Joi.object({
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      currency: Joi.any(),
      timezone: Joi.string().allow(""),
    });
  }

  /** @returns {OptinCompanyDetail} */
  static OptinCompanyDetail() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
      business_info: Joi.string().allow(""),
      business_type: Joi.string().allow(""),
      company_type: Joi.string().allow(""),
      business_country_info: CatalogPlatformModel.OptinBusinessCountryInfo(),
      address: CatalogPlatformModel.OptinAddress(),
      documents: Joi.array().items(CatalogPlatformModel.OptinDocument()),
      brands: Joi.array().items(Joi.number()),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      warnings: Joi.any(),
      stage: Joi.string().allow(""),
    });
  }

  /** @returns {OptinCompanyMetrics} */
  static OptinCompanyMetrics() {
    return Joi.object({
      brand: Joi.number(),
      company: Joi.string().allow(""),
      store: Joi.number(),
    });
  }

  /** @returns {OptinStoreDetails} */
  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.StoreDetail()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {OwnerAppItemResponse} */
  static OwnerAppItemResponse() {
    return Joi.object({
      size_promotion_threshold: Joi.any(),
      alt_text: Joi.any(),
      is_cod: Joi.boolean(),
      is_gift: Joi.boolean(),
      moq: Joi.any(),
      seo: Joi.any(),
      _custom_json: Joi.any(),
      _custom_meta: Joi.array().items(CatalogPlatformModel.MetaFields()),
    });
  }

  /** @returns {PTErrorResponse} */
  static PTErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),
      errors: Joi.any(),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      status: Joi.number(),
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
      total: Joi.number(),
    });
  }

  /** @returns {PageResponse1} */
  static PageResponse1() {
    return Joi.object({
      current: Joi.string().allow(""),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
    });
  }

  /** @returns {PageResponseType} */
  static PageResponseType() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      next: Joi.number().required(),
      total_count: Joi.number().required(),
    });
  }

  /** @returns {Price} */
  static Price() {
    return Joi.object({
      currency: Joi.string().allow(""),
      max_effective: Joi.number(),
      max_marked: Joi.number(),
      min_effective: Joi.number(),
      min_marked: Joi.number(),
    });
  }

  /** @returns {Price1} */
  static Price1() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      max: Joi.number(),
      min: Joi.number(),
    });
  }

  /** @returns {PriceArticle} */
  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
      tp_notes: Joi.any(),
      transfer: Joi.number(),
    });
  }

  /** @returns {PriceMeta} */
  static PriceMeta() {
    return Joi.object({
      currency: Joi.string().allow("").required(),
      effective: Joi.number().required(),
      marked: Joi.number().required(),
      tp_notes: Joi.any(),
      transfer: Joi.number().required(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {ProdcutTemplateCategoriesResponse} */
  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.CategoriesResponse()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {Product} */
  static Product() {
    return Joi.object({
      _custom_json: Joi.any(),
      all_company_ids: Joi.array().items(Joi.number()),
      all_identifiers: Joi.array().items(Joi.string().allow("")),
      all_sizes: Joi.array().items(Joi.any()),
      attributes: Joi.any(),
      brand: CatalogPlatformModel.Brand(),
      brand_uid: Joi.number(),
      category: Joi.any(),
      category_slug: Joi.string().allow(""),
      category_uid: Joi.number(),
      color: Joi.string().allow(""),
      company_id: Joi.number(),
      country_of_origin: Joi.string().allow(""),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      custom_order: Joi.any(),
      departments: Joi.array().items(Joi.number()),
      description: Joi.string().allow(""),
      highlights: Joi.array().items(Joi.string().allow("")),
      hsn_code: Joi.string().allow(""),
      id: Joi.string().allow(""),
      image_nature: Joi.string().allow(""),
      images: Joi.array().items(CatalogPlatformModel.Image()),
      is_active: Joi.boolean(),
      is_dependent: Joi.boolean(),
      is_expirable: Joi.boolean(),
      is_image_less_product: Joi.boolean(),
      is_physical: Joi.boolean(),
      is_set: Joi.boolean(),
      item_code: Joi.string().allow(""),
      item_type: Joi.string().allow(""),
      l3_mapping: Joi.array().items(Joi.string().allow("")),
      media: Joi.array().items(CatalogPlatformModel.Media()),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      moq: Joi.any(),
      multi_size: Joi.boolean(),
      name: Joi.string().allow(""),
      net_quantity: CatalogPlatformModel.NetQuantityResponse(),
      no_of_boxes: Joi.number(),
      pending: Joi.string().allow(""),
      primary_color: Joi.string().allow(""),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      product_publish: CatalogPlatformModel.ProductPublished(),
      return_config: CatalogPlatformModel.ReturnConfigResponse(),
      short_description: Joi.string().allow(""),
      size_guide: Joi.string().allow(""),
      sizes: Joi.array().items(Joi.any()),
      slug: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: Joi.any(),
      teaser_tag: Joi.any(),
      template_tag: Joi.string().allow(""),
      trader: Joi.array().items(CatalogPlatformModel.Trader()),
      uid: Joi.number(),
      variant_group: Joi.any(),
      variant_media: Joi.any(),
      variants: Joi.any(),
      verified_by: CatalogPlatformModel.VerifiedBy(),
      verified_on: Joi.string().allow(""),
    });
  }

  /** @returns {ProductAttributesResponse} */
  static ProductAttributesResponse() {
    return Joi.object({
      items: Joi.array()
        .items(CatalogPlatformModel.AttributeMasterSerializer())
        .required(),
    });
  }

  /** @returns {ProductBrand} */
  static ProductBrand() {
    return Joi.object({
      type: Joi.string().allow(""),
      uid: Joi.number(),
      name: Joi.string().allow(""),
      logo: Joi.any(),
      action: CatalogPlatformModel.PageAction(),
      _custom_json: Joi.any(),
    });
  }

  /** @returns {ProductBulkAssets} */
  static ProductBulkAssets() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      company_id: Joi.number(),
      url: Joi.string().allow("").required(),
      user: Joi.any().required(),
    });
  }

  /** @returns {ProductBulkRequest} */
  static ProductBulkRequest() {
    return Joi.object({
      cancelled: Joi.number(),
      cancelled_records: Joi.array().items(Joi.any()),
      company_id: Joi.number(),
      created_by: CatalogPlatformModel.UserDetail1(),
      created_on: Joi.string().allow(""),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.any()),
      file_path: Joi.string().allow(""),
      is_active: Joi.boolean(),
      modified_by: CatalogPlatformModel.UserDetail1(),
      modified_on: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      succeed: Joi.number(),
      template: CatalogPlatformModel.ProductTemplate(),
      template_tag: Joi.string().allow(""),
      total: Joi.number(),
    });
  }

  /** @returns {InventoryBulkJob} */
  static InventoryBulkJob() {
    return Joi.object({
      company_id: Joi.number(),
      file_path: Joi.string().allow(""),
    });
  }

  /** @returns {ProductBulkResponse} */
  static ProductBulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryBulkResponse} */
  static InventoryBulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
    });
  }

  /** @returns {ProductBulkRequestList} */
  static ProductBulkRequestList() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.ProductBulkRequest()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {ProductBundleItem} */
  static ProductBundleItem() {
    return Joi.object({
      max_quantity: Joi.number().required(),
      min_quantity: Joi.number().required(),
      product_uid: Joi.number().required(),
    });
  }

  /** @returns {ProductBundleRequest} */
  static ProductBundleRequest() {
    return Joi.object({
      choice: Joi.string().allow("").required(),
      company_id: Joi.string().allow(""),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      logo: Joi.string().allow("").allow(null),
      meta: Joi.any(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      page_visibility: Joi.array().items(Joi.string().allow("")),
      products: Joi.array()
        .items(CatalogPlatformModel.ProductBundleItem())
        .required(),
      same_store_assignment: Joi.boolean(),
      slug: Joi.string().allow("").required(),
      auto_add_to_cart: Joi.boolean().required(),
      auto_select: Joi.boolean().required(),
      allow_remove: Joi.boolean().required(),
      prefer_single_shipment: Joi.boolean().required(),
      allow_individual_return: Joi.boolean().required(),
      allow_individual_cancel: Joi.boolean().required(),
    });
  }

  /** @returns {ProductBundleUpdateRequest} */
  static ProductBundleUpdateRequest() {
    return Joi.object({
      choice: Joi.string().allow("").required(),
      company_id: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      logo: Joi.string().allow("").allow(null),
      meta: Joi.any(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      page_visibility: Joi.array().items(Joi.string().allow("")),
      allow_individual_cancel: Joi.boolean(),
      allow_individual_return: Joi.boolean(),
      allow_remove: Joi.boolean(),
      auto_add_to_cart: Joi.boolean(),
      auto_select: Joi.boolean(),
      prefer_single_shipment: Joi.boolean(),
      products: Joi.array()
        .items(CatalogPlatformModel.ProductBundleItem())
        .required(),
      same_store_assignment: Joi.boolean(),
      slug: Joi.string().allow("").required(),
    });
  }

  /** @returns {ProductConfigurationDownloads} */
  static ProductConfigurationDownloads() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),
      multivalue: Joi.boolean(),
    });
  }

  /** @returns {ProductCreateUpdateSizesSchema} */
  static ProductCreateUpdateSizesSchema() {
    return Joi.object({
      size: Joi.string().allow(""),
      price: Joi.number(),
      price_effective: Joi.number(),
      price_transfer: Joi.number(),
      currency: Joi.string().allow(""),
      item_length: Joi.number(),
      item_width: Joi.number(),
      item_height: Joi.number(),
      item_weight: Joi.number(),
      item_dimensions_unit_of_measure: Joi.string().allow(""),
      item_weight_unit_of_measure: Joi.string().allow(""),
      track_inventory: Joi.boolean(),
      identifiers: Joi.array().items(CatalogPlatformModel.GTIN()),
      _custom_json: Joi.any(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ProductCreateUpdateSchemaV2} */
  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: Joi.string().allow(""),
      attributes: Joi.any(),
      brand_uid: Joi.number().required(),
      bulk_job_id: Joi.string().allow(""),
      category_slug: Joi.string().allow("").required(),
      change_request_id: Joi.string().allow("").allow(null),
      company_id: Joi.number().required(),
      country_of_origin: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      custom_order: CatalogPlatformModel.CustomOrder(),
      departments: Joi.array().items(Joi.number()).required(),
      description: Joi.string().allow(""),
      highlights: Joi.array()
        .items(Joi.string().allow("").allow(null))
        .allow(null, ""),
      is_active: Joi.boolean(),
      is_dependent: Joi.boolean(),
      is_image_less_product: Joi.boolean(),
      is_set: Joi.boolean(),
      item_code: Joi.string().allow("").required(),
      item_type: Joi.string().allow("").required(),
      media: Joi.array().items(CatalogPlatformModel.Media()).allow(null, ""),
      multi_size: Joi.boolean(),
      name: Joi.string().allow("").required(),
      net_quantity: CatalogPlatformModel.NetQuantity(),
      no_of_boxes: Joi.number(),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      product_publish: CatalogPlatformModel.ProductPublish1(),
      return_config: CatalogPlatformModel.ReturnConfig().required(),
      short_description: Joi.string().allow(""),
      size_guide: Joi.string().allow(""),
      sizes: Joi.array()
        .items(CatalogPlatformModel.ProductCreateUpdateSizesSchema())
        .required(),
      slug: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: CatalogPlatformModel.TaxIdentifier().required(),
      teaser_tag: CatalogPlatformModel.TeaserTag(),
      template_tag: Joi.string().allow("").required(),
      trader: Joi.array().items(CatalogPlatformModel.Trader()).required(),
      variant_group: Joi.any(),
      variant_media: Joi.any(),
      variants: Joi.any(),
    });
  }

  /** @returns {ProductDetail} */
  static ProductDetail() {
    return Joi.object({
      attributes: Joi.any(),
      brand: CatalogPlatformModel.ProductBrand(),
      color: Joi.string().allow(""),
      description: Joi.string().allow(""),
      grouped_attributes: Joi.array().items(
        CatalogPlatformModel.ProductDetailGroupedAttribute()
      ),
      has_variant: Joi.boolean(),
      highlights: Joi.array().items(Joi.string().allow("")),
      image_nature: Joi.string().allow(""),
      item_code: Joi.string().allow(""),
      item_type: Joi.string().allow(""),
      medias: Joi.array().items(CatalogPlatformModel.Media()),
      name: Joi.string().allow(""),
      product_online_date: Joi.string().allow(""),
      promo_meta: Joi.any(),
      rating: Joi.number(),
      rating_count: Joi.number(),
      short_description: Joi.string().allow(""),
      similars: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow("").required(),
      teaser_tag: Joi.any(),
      tryouts: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {ProductDetailAttribute} */
  static ProductDetailAttribute() {
    return Joi.object({
      key: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ProductDetailGroupedAttribute} */
  static ProductDetailGroupedAttribute() {
    return Joi.object({
      details: Joi.array().items(CatalogPlatformModel.ProductDetailAttribute()),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {PatchProductDownloadsDataResponse} */
  static PatchProductDownloadsDataResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      created_by: CatalogPlatformModel.CreatedBy(),
      task_id: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      seller_id: Joi.number(),
      url: Joi.string().allow(""),
      status: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      completed_on: Joi.string().allow(""),
    });
  }

  /** @returns {PatchProductDownloadsResponse} */
  static PatchProductDownloadsResponse() {
    return Joi.object({
      data: CatalogPlatformModel.PatchProductDownloadsDataResponse(),
    });
  }

  /** @returns {ProductDownloadFilters} */
  static ProductDownloadFilters() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")).required(),
      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),
      templates: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {CreateProductDownloadsDataResponse} */
  static CreateProductDownloadsDataResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      type: Joi.string().allow(""),
      task_id: Joi.string().allow(""),
      filters: CatalogPlatformModel.ProductDownloadFilters(),
      created_by: CatalogPlatformModel.CreatedBy(),
      _id: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.any()),
      modified_on: Joi.string().allow(""),
      status: Joi.string().allow(""),
      seller_id: Joi.number(),
      stats: CatalogPlatformModel.Stats(),
    });
  }

  /** @returns {CreateProductDownloadsResponse} */
  static CreateProductDownloadsResponse() {
    return Joi.object({
      data: CatalogPlatformModel.CreateProductDownloadsDataResponse(),
    });
  }

  /** @returns {GetProductDownloadsResponse} */
  static GetProductDownloadsResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),
      url: Joi.string().allow(""),
      status: Joi.string().allow(""),
      completed_on: Joi.string().allow(""),
      created_by: CatalogPlatformModel.CreatedBy(),
      created_on: Joi.string().allow(""),
      seller_id: Joi.number(),
      task_id: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {ProductDownloadsResponse} */
  static ProductDownloadsResponse() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.ProductTemplateExportResponse()
      ),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {ProductFilters} */
  static ProductFilters() {
    return Joi.object({
      key: CatalogPlatformModel.ProductFiltersKey().required(),
      values: Joi.array()
        .items(CatalogPlatformModel.ProductFiltersValue())
        .required(),
    });
  }

  /** @returns {ProductFiltersKey} */
  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      kind: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      operators: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ProductFiltersValue} */
  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      display: Joi.string().allow("").required(),
      display_format: Joi.string().allow(""),
      is_selected: Joi.boolean().required(),
      max: Joi.number(),
      min: Joi.number(),
      query_format: Joi.string().allow(""),
      selected_max: Joi.number(),
      selected_min: Joi.number(),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationCategoryAction} */
  static ApplicationCategoryAction() {
    return Joi.object({
      page: CatalogPlatformModel.CategoryPageAction(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationCategoryItem} */
  static ApplicationCategoryItem() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogPlatformModel.ApplicationCategoryAction(),
      id: Joi.number(),
      logo: CatalogPlatformModel.CategoryImage(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {CategoryPageAction} */
  static CategoryPageAction() {
    return Joi.object({
      query: CatalogPlatformModel.CategoryQuery(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {CategoryQuery} */
  static CategoryQuery() {
    return Joi.object({
      category: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CategoryImage} */
  static CategoryImage() {
    return Joi.object({
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {ProductListingDetail} */
  static ProductListingDetail() {
    return Joi.object({
      attributes: Joi.any(),
      brand: CatalogPlatformModel.ProductBrand(),
      color: Joi.string().allow(""),
      description: Joi.string().allow(""),
      discount: Joi.string().allow(""),
      grouped_attributes: Joi.array().items(
        CatalogPlatformModel.ProductDetailGroupedAttribute()
      ),
      has_variant: Joi.boolean(),
      highlights: Joi.array().items(Joi.string().allow("")),
      image_nature: Joi.string().allow(""),
      item_code: Joi.string().allow(""),
      item_type: Joi.string().allow(""),
      medias: Joi.array().items(CatalogPlatformModel.Media()),
      name: Joi.string().allow(""),
      price: CatalogPlatformModel.ProductListingPrice(),
      product_online_date: Joi.string().allow(""),
      promo_meta: Joi.any(),
      rating: Joi.number(),
      rating_count: Joi.number(),
      sellable: Joi.boolean(),
      short_description: Joi.string().allow(""),
      similars: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow("").required(),
      teaser_tag: Joi.any(),
      tryouts: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.number(),
      categories: Joi.array().items(
        CatalogPlatformModel.ApplicationCategoryItem()
      ),
      _custom_meta: Joi.array().items(Joi.string().allow("")),
      action: CatalogPlatformModel.PageAction(),
      is_tryout: Joi.boolean(),
      all_company_ids: Joi.array().items(Joi.number()),
      is_custom_order: Joi.boolean(),
      collections: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PageAction} */
  static PageAction() {
    return Joi.object({
      page: CatalogPlatformModel.ActionObject(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {ActionObject} */
  static ActionObject() {
    return Joi.object({
      type: Joi.string().allow(""),
      query: Joi.any(),
    });
  }

  /** @returns {ProductListingPrice} */
  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogPlatformModel.Price1(),
      marked: CatalogPlatformModel.Price1(),
      selling: CatalogPlatformModel.Price1(),
    });
  }

  /** @returns {ProductListingResponse} */
  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.Product()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {ProductListingResponseV2} */
  static ProductListingResponseV2() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.ProductSchemaV2()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {ProductVerificationModel} */
  static ProductVerificationModel() {
    return Joi.object({
      rejected_fields: Joi.any(),
      status: Joi.string().allow(""),
      brand_uid: Joi.number(),
      created_on: Joi.string().allow(""),
      company_ids: Joi.array().items(Joi.number()),
      item_code: Joi.string().allow(""),
      remark: Joi.string().allow(""),
      created_by: CatalogPlatformModel.CreatedBy(),
      modified_on: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      modified_by: CatalogPlatformModel.CreatedBy(),
      item_id: Joi.number(),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {ProductPublish} */
  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),
      product_online_date: Joi.string().allow(""),
    });
  }

  /** @returns {ProductPublish1} */
  static ProductPublish1() {
    return Joi.object({
      is_set: Joi.boolean(),
      product_online_date: Joi.string().allow(""),
    });
  }

  /** @returns {ProductPublished} */
  static ProductPublished() {
    return Joi.object({
      is_set: Joi.boolean(),
      product_online_date: Joi.number(),
    });
  }

  /** @returns {ProductReturnConfigSerializer} */
  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),
      store_uid: Joi.number(),
    });
  }

  /** @returns {ProductReturnConfigBaseSerializer} */
  static ProductReturnConfigBaseSerializer() {
    return Joi.object({
      returnable: Joi.boolean().required(),
      time: Joi.number().required(),
      unit: Joi.string().allow("").required(),
    });
  }

  /** @returns {CategorySubSchema} */
  static CategorySubSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {CategoryProduct} */
  static CategoryProduct() {
    return Joi.object({
      l3: CatalogPlatformModel.CategorySubSchema(),
      l1: CatalogPlatformModel.CategorySubSchema(),
      l2: CatalogPlatformModel.CategorySubSchema(),
    });
  }

  /** @returns {ProductSchemaV2} */
  static ProductSchemaV2() {
    return Joi.object({
      category: CatalogPlatformModel.CategoryProduct(),
      _custom_json: Joi.any(),
      all_company_ids: Joi.array().items(Joi.number()),
      all_identifiers: Joi.array().items(Joi.string().allow("")),
      all_sizes: Joi.array().items(Joi.any()),
      attributes: Joi.object().pattern(/\S/, Joi.any()),
      brand: CatalogPlatformModel.Brand(),
      brand_uid: Joi.number(),
      category_slug: Joi.string().allow(""),
      category_uid: Joi.number(),
      color: Joi.string().allow(""),
      company_id: Joi.number(),
      country_of_origin: Joi.string().allow(""),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      custom_order: Joi.any(),
      departments: Joi.array().items(Joi.number()),
      description: Joi.string().allow(""),
      highlights: Joi.array().items(Joi.string().allow("")),
      hsn_code: Joi.string().allow(""),
      id: Joi.string().allow(""),
      image_nature: Joi.string().allow(""),
      images: Joi.array().items(CatalogPlatformModel.Image()),
      is_active: Joi.boolean(),
      is_dependent: Joi.boolean(),
      is_expirable: Joi.boolean(),
      is_image_less_product: Joi.boolean(),
      is_physical: Joi.boolean(),
      is_set: Joi.boolean(),
      item_code: Joi.string().allow(""),
      item_type: Joi.string().allow(""),
      l3_mapping: Joi.array().items(Joi.string().allow("")),
      media: Joi.array().items(CatalogPlatformModel.Media()),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      moq: Joi.any(),
      multi_size: Joi.boolean(),
      name: Joi.string().allow(""),
      net_quantity: CatalogPlatformModel.NetQuantityResponse(),
      no_of_boxes: Joi.number(),
      pending: Joi.string().allow(""),
      primary_color: Joi.string().allow(""),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      product_publish: CatalogPlatformModel.ProductPublish(),
      return_config: CatalogPlatformModel.ReturnConfigResponse(),
      short_description: Joi.string().allow(""),
      size_guide: Joi.string().allow(""),
      sizes: Joi.array().items(Joi.any()),
      slug: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: Joi.any(),
      teaser_tag: Joi.any(),
      template_tag: Joi.string().allow(""),
      trader: Joi.array().items(CatalogPlatformModel.Trader()),
      uid: Joi.number(),
      variant_group: Joi.any(),
      variant_media: Joi.any(),
      variants: Joi.any(),
      verified_by: CatalogPlatformModel.VerifiedBy(),
      verified_on: Joi.string().allow(""),
    });
  }

  /** @returns {ProductSize} */
  static ProductSize() {
    return Joi.object({
      max: Joi.number().required(),
      min: Joi.number().required(),
    });
  }

  /** @returns {ProductSizeDeleteDataResponse} */
  static ProductSizeDeleteDataResponse() {
    return Joi.object({
      company_id: Joi.number(),
      item_id: Joi.number(),
      size: Joi.string().allow(""),
    });
  }

  /** @returns {ProductSizeDeleteResponse} */
  static ProductSizeDeleteResponse() {
    return Joi.object({
      data: CatalogPlatformModel.ProductSizeDeleteDataResponse(),
      success: Joi.boolean(),
    });
  }

  /** @returns {ProductSortOn} */
  static ProductSortOn() {
    return Joi.object({
      is_selected: Joi.boolean(),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
      display: Joi.string().allow(""),
      logo: Joi.string().allow(""),
    });
  }

  /** @returns {ProductSortOnv2} */
  static ProductSortOnv2() {
    return Joi.object({
      is_selected: Joi.boolean(),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
      display: Joi.string().allow(""),
      logo: Joi.string().allow(""),
    });
  }

  /** @returns {ProductTagsViewResponse} */
  static ProductTagsViewResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ProductTemplate} */
  static ProductTemplate() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      categories: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      created_by: Joi.any(),
      modified_by: Joi.any(),
      created_on: Joi.string().allow(""),
      departments: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_archived: Joi.boolean(),
      is_expirable: Joi.boolean(),
      is_physical: Joi.boolean(),
      logo: Joi.string().allow(""),
      id: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow("").required(),
      tag: Joi.string().allow(""),
    });
  }

  /** @returns {ProductTemplateDownloadsExport} */
  static ProductTemplateDownloadsExport() {
    return Joi.object({
      filters: CatalogPlatformModel.ProductTemplateExportFilterRequest(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ProductTemplateExportFilterRequest} */
  static ProductTemplateExportFilterRequest() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")),
      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),
      from_date: Joi.string().allow(""),
      templates: Joi.array().items(Joi.string().allow("")).required(),
      to_date: Joi.string().allow(""),
    });
  }

  /** @returns {ProductTemplateExportResponse} */
  static ProductTemplateExportResponse() {
    return Joi.object({
      trigger_on: Joi.string().allow(""),
      id: Joi.string().allow(""),
      template_tags: Joi.any(),
      completed_on: Joi.string().allow(""),
      created_by: Joi.any(),
      filters: Joi.any(),
      modified_on: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.number().required(),
      status: Joi.string().allow(""),
      task_id: Joi.string().allow("").required(),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {ProductVariants} */
  static ProductVariants() {
    return Joi.object({
      brand_uid: Joi.number(),
      category_uid: Joi.number(),
      item_code: Joi.string().allow(""),
      media: Joi.array().items(CatalogPlatformModel.Media()),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {CompanyVerificationStats} */
  static CompanyVerificationStats() {
    return Joi.object({
      verified: Joi.number(),
      total: Joi.number(),
    });
  }

  /** @returns {CompanyVerificationResponse} */
  static CompanyVerificationResponse() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow(""),
      stats: CatalogPlatformModel.CompanyVerificationStats(),
    });
  }

  /** @returns {ProductVariantsResponse} */
  static ProductVariantsResponse() {
    return Joi.object({
      page: CatalogPlatformModel.Page(),
      variants: Joi.array().items(CatalogPlatformModel.ProductVariants()),
    });
  }

  /** @returns {Properties} */
  static Properties() {
    return Joi.object({
      brand_uid: Joi.any(),
      category_slug: Joi.any(),
      command: Joi.any(),
      country_of_origin: Joi.any(),
      currency: Joi.any(),
      custom_order: Joi.any(),
      description: Joi.any(),
      highlights: Joi.any(),
      hsn_code: Joi.any(),
      is_active: Joi.any(),
      is_dependent: Joi.any(),
      item_code: Joi.any(),
      item_type: Joi.any(),
      media: Joi.any(),
      multi_size: Joi.any(),
      name: Joi.any(),
      no_of_boxes: Joi.any(),
      product_group_tag: Joi.any(),
      product_publish: Joi.any(),
      return_config: Joi.any(),
      short_description: Joi.any(),
      size_guide: Joi.any(),
      sizes: Joi.any(),
      slug: Joi.any(),
      tags: Joi.any(),
      teaser_tag: Joi.any(),
      trader: Joi.any(),
      trader_type: Joi.any(),
      variants: Joi.any(),
    });
  }

  /** @returns {Quantities} */
  static Quantities() {
    return Joi.object({
      damaged: CatalogPlatformModel.QuantityBase(),
      not_available: CatalogPlatformModel.QuantityBase(),
      order_committed: CatalogPlatformModel.QuantityBase(),
      sellable: CatalogPlatformModel.QuantityBase(),
    });
  }

  /** @returns {QuantitiesArticle} */
  static QuantitiesArticle() {
    return Joi.object({
      damaged: CatalogPlatformModel.Quantity(),
      not_available: CatalogPlatformModel.Quantity(),
      order_committed: CatalogPlatformModel.Quantity(),
      sellable: CatalogPlatformModel.Quantity(),
    });
  }

  /** @returns {Quantity} */
  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  /** @returns {QuantityBase} */
  static QuantityBase() {
    return Joi.object({
      count: Joi.number(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {ReturnConfig} */
  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean().required(),
      time: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }

  /** @returns {ReturnConfig1} */
  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean(),
      time: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }

  /** @returns {ReturnConfig2} */
  static ReturnConfig2() {
    return Joi.object({
      returnable: Joi.boolean(),
      time: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }

  /** @returns {ReturnConfigResponse} */
  static ReturnConfigResponse() {
    return Joi.object({
      returnable: Joi.boolean(),
      time: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }

  /** @returns {Sitemap} */
  static Sitemap() {
    return Joi.object({
      priority: Joi.number(),
      frequency: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationItemSeoAction} */
  static ApplicationItemSeoAction() {
    return Joi.object({
      page: Joi.any(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ApplicationItemSeoBreadcrumbs} */
  static ApplicationItemSeoBreadcrumbs() {
    return Joi.object({
      url: Joi.string().allow(""),
      action: Joi.array().items(
        CatalogPlatformModel.ApplicationItemSeoAction()
      ),
    });
  }

  /** @returns {ApplicationItemSeoMetaTagItem} */
  static ApplicationItemSeoMetaTagItem() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {ApplicationItemSeoMetaTags} */
  static ApplicationItemSeoMetaTags() {
    return Joi.object({
      title: Joi.string().allow("").required(),
      items: Joi.array().items(
        CatalogPlatformModel.ApplicationItemSeoMetaTagItem()
      ),
    });
  }

  /** @returns {Metatags} */
  static Metatags() {
    return Joi.object({
      title: Joi.string().allow(""),
      items: Joi.array().items(
        CatalogPlatformModel.ApplicationItemSeoMetaTags()
      ),
    });
  }

  /** @returns {SizePromotionThreshold} */
  static SizePromotionThreshold() {
    return Joi.object({
      threshold_type: Joi.string().allow(""),
      threshold_value: Joi.number(),
    });
  }

  /** @returns {SEOData} */
  static SEOData() {
    return Joi.object({
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
      sitemap: CatalogPlatformModel.Sitemap(),
      breadcrumbs: Joi.array().items(
        CatalogPlatformModel.ApplicationItemSeoBreadcrumbs()
      ),
      meta_tags: Joi.array().items(CatalogPlatformModel.Metatags()),
      canonical_url: Joi.string().allow(""),
    });
  }

  /** @returns {SearchKeywordResult} */
  static SearchKeywordResult() {
    return Joi.object({
      query: Joi.any().required(),
      sort_on: Joi.string().allow("").required(),
    });
  }

  /** @returns {SearchableAttribute} */
  static SearchableAttribute() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      priority: Joi.number().required(),
    });
  }

  /** @returns {SecondLevelChild} */
  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogPlatformModel.Action(),
      banners: CatalogPlatformModel.ImageUrls(),
      childs: Joi.array().items(CatalogPlatformModel.ThirdLevelChild()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {SellerPhoneNumber} */
  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),
      number: Joi.string().allow("").required(),
    });
  }

  /** @returns {SitemapDetail} */
  static SitemapDetail() {
    return Joi.object({
      priority: Joi.number(),
      frequency: Joi.string().allow(""),
    });
  }

  /** @returns {SeoDetail} */
  static SeoDetail() {
    return Joi.object({
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
      sitemap: CatalogPlatformModel.SitemapDetail(),
      breadcrumbs: Joi.array().items(
        CatalogPlatformModel.ApplicationItemSeoBreadcrumbs()
      ),
      meta_tags: Joi.array().items(CatalogPlatformModel.Metatags()),
      canonical_url: Joi.string().allow(""),
    });
  }

  /** @returns {SetSize} */
  static SetSize() {
    return Joi.object({
      pieces: Joi.number().required(),
      size: Joi.string().allow("").required(),
    });
  }

  /** @returns {SingleCategoryResponse} */
  static SingleCategoryResponse() {
    return Joi.object({
      data: CatalogPlatformModel.Category(),
    });
  }

  /** @returns {VariantTypesResponse} */
  static VariantTypesResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.VariantTypeItem()),
    });
  }

  /** @returns {VariantTypeItem} */
  static VariantTypeItem() {
    return Joi.object({
      name: Joi.string().allow(""),
      key: Joi.string().allow(""),
      type: Joi.array().items(Joi.string().allow("")),
      image_config: Joi.any().allow(null),
    });
  }

  /** @returns {SingleProductResponse} */
  static SingleProductResponse() {
    return Joi.object({
      data: CatalogPlatformModel.ProductSchemaV2(),
    });
  }

  /** @returns {Size} */
  static Size() {
    return Joi.object({
      display: Joi.string().allow(""),
      is_available: Joi.boolean(),
      quantity: Joi.number(),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {SizeDistribution} */
  static SizeDistribution() {
    return Joi.object({
      sizes: Joi.array().items(CatalogPlatformModel.SetSize()).required(),
    });
  }

  /** @returns {SizeGuideResponse} */
  static SizeGuideResponse() {
    return Joi.object({
      image: Joi.string().allow(""),
      created_by: Joi.any(),
      modified_by: Joi.any(),
      active: Joi.boolean(),
      brand_id: Joi.number(),
      company_id: Joi.number(),
      created_on: Joi.string().allow(""),
      guide: Joi.any(),
      id: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      subtitle: Joi.string().allow(""),
      tag: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {Time} */
  static Time() {
    return Joi.object({
      hour: Joi.number(),
      minute: Joi.number(),
    });
  }

  /** @returns {Timing} */
  static Timing() {
    return Joi.object({
      closing: CatalogPlatformModel.Time(),
      weekday: Joi.string().allow(""),
      opening: CatalogPlatformModel.Time(),
      open: Joi.boolean(),
    });
  }

  /** @returns {StoreItem} */
  static StoreItem() {
    return Joi.object({
      stage: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      modified_by: CatalogPlatformModel.UserSchemaCustom(),
      manager: CatalogPlatformModel.Manager(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      verified_on: Joi.string().allow(""),
      verified_by: CatalogPlatformModel.UserSchemaCustom(),
      integration_type: CatalogPlatformModel.IntegrationType(),
      company_id: Joi.number(),
      documents: Joi.array().items(CatalogPlatformModel.Document()),
      created_on: Joi.string().allow(""),
      address: CatalogPlatformModel.Address(),
      created_by: CatalogPlatformModel.UserSchemaCustom(),
      _custom_json: Joi.any(),
      uid: Joi.number(),
      timing: Joi.array().items(CatalogPlatformModel.Timing()),
      store_type: Joi.string().allow(""),
    });
  }

  /** @returns {UserSchemaCustom} */
  static UserSchemaCustom() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {Manager} */
  static Manager() {
    return Joi.object({
      name: Joi.string().allow(""),
      email: Joi.string().allow(""),
      mobile_no: CatalogPlatformModel.MobileNo(),
    });
  }

  /** @returns {MobileNo} */
  static MobileNo() {
    return Joi.object({
      country_code: Joi.number(),
      number: Joi.string().allow(""),
    });
  }

  /** @returns {IntegrationType} */
  static IntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),
      inventory: Joi.string().allow(""),
    });
  }

  /** @returns {Address} */
  static Address() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      city: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      country: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      state: Joi.string().allow(""),
    });
  }

  /** @returns {StoreDetail} */
  static StoreDetail() {
    return Joi.object({
      additional_contacts: Joi.array().items(Joi.any()),
      company_id: Joi.number(),
      created_on: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      timing: Joi.array().items(CatalogPlatformModel.Timing()),
      uid: Joi.number(),
      stage: Joi.string().allow(""),
      modified_by: CatalogPlatformModel.UserSchemaCustom(),
      manager: CatalogPlatformModel.Manager(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      verified_on: Joi.string().allow(""),
      verified_by: CatalogPlatformModel.UserSchemaCustom(),
      integration_type: CatalogPlatformModel.IntegrationType(),
      documents: Joi.array().items(CatalogPlatformModel.Document()),
      address: CatalogPlatformModel.Address(),
      created_by: CatalogPlatformModel.UserSchemaCustom(),
      _custom_json: Joi.any(),
    });
  }

  /** @returns {StoreMeta} */
  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  /** @returns {SuccessResponse} */
  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {SuccessResponseSchema} */
  static SuccessResponseSchema() {
    return Joi.object({
      success: Joi.boolean(),
      uid: Joi.number(),
    });
  }

  /** @returns {TaxIdentifier} */
  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),
      hsn_code_id: Joi.string().allow(""),
      reporting_hsn: Joi.string().allow(""),
    });
  }

  /** @returns {TaxSlab} */
  static TaxSlab() {
    return Joi.object({
      cess: Joi.number(),
      effective_date: Joi.string().allow("").required(),
      rate: Joi.number().required(),
      threshold: Joi.number().required(),
    });
  }

  /** @returns {TeaserTag} */
  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),
      url: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {TemplateDetails} */
  static TemplateDetails() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      categories: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      departments: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      description: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_archived: Joi.boolean(),
      is_expirable: Joi.boolean().required(),
      is_physical: Joi.boolean().required(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow("").required(),
      tag: Joi.string().allow(""),
    });
  }

  /** @returns {TemplateValidationData} */
  static TemplateValidationData() {
    return Joi.object({
      global_validation: CatalogPlatformModel.GlobalValidation(),
      template_validation: Joi.any(),
    });
  }

  /** @returns {TemplatesResponse} */
  static TemplatesResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.ProductTemplate()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {TemplatesValidationResponse} */
  static TemplatesValidationResponse() {
    return Joi.object({
      data: CatalogPlatformModel.TemplateValidationData(),
      template_details: CatalogPlatformModel.TemplateDetails(),
    });
  }

  /** @returns {ThirdLevelChild} */
  static ThirdLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogPlatformModel.Action(),
      banners: CatalogPlatformModel.ImageUrls(),
      childs: Joi.array().items(Joi.any()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {Trader} */
  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow("").required(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Trader1} */
  static Trader1() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")).required(),
      name: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {TraderResponse} */
  static TraderResponse() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateCollection} */
  static UpdateCollection() {
    return Joi.object({
      action: CatalogPlatformModel.Action(),
      uid: Joi.string().allow(""),
      app_id: Joi.string().allow(""),
      _custom_json: Joi.any(),
      _locale_language: Joi.any(),
      _schedule: CatalogPlatformModel.CollectionSchedule(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      badge: CatalogPlatformModel.CollectionBadge(),
      banners: CatalogPlatformModel.CollectionBanner(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_visible: Joi.boolean(),
      logo: CatalogPlatformModel.CollectionImage(),
      meta: Joi.any(),
      modified_by: CatalogPlatformModel.UserInfo(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      published: Joi.boolean(),
      query: Joi.array().items(CatalogPlatformModel.CollectionQuery()),
      seo: CatalogPlatformModel.SeoDetail(),
      slug: Joi.string().allow(""),
      sort_on: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
      is_searchable: Joi.boolean(),
    });
  }

  /** @returns {UpdateSearchConfigurationRequest} */
  static UpdateSearchConfigurationRequest() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      is_proximity_enabled: Joi.boolean(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      proximity: Joi.number(),
      searchable_attributes: Joi.array().items(
        CatalogPlatformModel.SearchableAttribute()
      ),
    });
  }

  /** @returns {UpdateSearchConfigurationResponse} */
  static UpdateSearchConfigurationResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {UpdatedResponse} */
  static UpdatedResponse() {
    return Joi.object({
      items_not_updated: Joi.array().items(Joi.number()),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {UserCommon} */
  static UserCommon() {
    return Joi.object({
      company_id: Joi.number(),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {UserDetail} */
  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),
      super_user: Joi.boolean(),
      user_id: Joi.string().allow("").required(),
      username: Joi.string().allow("").required(),
    });
  }

  /** @returns {UserDetail1} */
  static UserDetail1() {
    return Joi.object({
      full_name: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {UserInfo} */
  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {UserInfo1} */
  static UserInfo1() {
    return Joi.object({
      email: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {UserSerializer} */
  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {RequestUserSerializer} */
  static RequestUserSerializer() {
    return Joi.object({
      _id: Joi.string().allow(""),
      contact: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {UserSerializer2} */
  static UserSerializer2() {
    return Joi.object({
      contact: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {UserSerializer3} */
  static UserSerializer3() {
    return Joi.object({
      contact: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {ValidateIdentifier} */
  static ValidateIdentifier() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),
      gtin_value: Joi.string().allow("").required(),
      primary: Joi.boolean(),
    });
  }

  /** @returns {ValidateProduct} */
  static ValidateProduct() {
    return Joi.object({
      valid: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ValidateSizeGuide} */
  static ValidateSizeGuide() {
    return Joi.object({
      active: Joi.boolean(),
      brand_id: Joi.number(),
      company_id: Joi.number(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      description: Joi.string().allow(""),
      guide: CatalogPlatformModel.Guide(),
      id: Joi.string().allow(""),
      image: Joi.string().allow(""),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      subtitle: Joi.string().allow(""),
      tag: Joi.string().allow(""),
      title: Joi.string().allow("").required(),
    });
  }

  /** @returns {VerifiedBy} */
  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {WeightResponse} */
  static WeightResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),
      shipping: Joi.number().required(),
      unit: Joi.string().allow("").required(),
    });
  }

  /** @returns {InventoryWeightResponse} */
  static InventoryWeightResponse() {
    return Joi.object({
      shipping: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }

  /** @returns {CreatedBy} */
  static CreatedBy() {
    return Joi.object({
      username: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {ModifiedBy} */
  static ModifiedBy() {
    return Joi.object({
      username: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {Marketplaces} */
  static Marketplaces() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      app_id: Joi.string().allow(""),
      enabled: Joi.boolean(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      opt_level: Joi.string().allow(""),
      company_id: Joi.number(),
      modified_by: Joi.any(),
      store_ids: Joi.array().items(Joi.number()),
      modified_on: Joi.string().allow(""),
      platforms: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {GetAllMarketplaces} */
  static GetAllMarketplaces() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.Marketplaces()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {CreateMarketplaceOptinRequest} */
  static CreateMarketplaceOptinRequest() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      company_id: Joi.number(),
      enabled: Joi.boolean(),
      opt_level: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      store_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {UpdateMarketplaceOptinRequest} */
  static UpdateMarketplaceOptinRequest() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      company_id: Joi.number(),
      enabled: Joi.boolean(),
      opt_level: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      store_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {CreateMarketplaceOptinResponse} */
  static CreateMarketplaceOptinResponse() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),
      brand_ids: Joi.array().items(Joi.number()),
      company_id: Joi.number(),
      opt_level: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      enabled: Joi.boolean(),
      created_by: CatalogPlatformModel.CreatedBy(),
      modified_by: CatalogPlatformModel.CreatedBy(),
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {GetProductTemplateSlugItems} */
  static GetProductTemplateSlugItems() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")),
      departments: Joi.array().items(Joi.string().allow("")),
      is_active: Joi.boolean(),
      tag: Joi.string().allow(""),
      is_physical: Joi.boolean(),
      description: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      is_archived: Joi.boolean(),
      slug: Joi.string().allow(""),
      categories: Joi.array().items(Joi.string().allow("")),
      is_expirable: Joi.boolean(),
      name: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {GetProductTemplateSlugResponse} */
  static GetProductTemplateSlugResponse() {
    return Joi.object({
      page: CatalogPlatformModel.Page(),
      items: Joi.array().items(
        CatalogPlatformModel.GetProductTemplateSlugItems()
      ),
    });
  }

  /** @returns {UpdateMarketplaceOptinResponse} */
  static UpdateMarketplaceOptinResponse() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      company_id: Joi.number(),
      app_id: Joi.string().allow(""),
      enabled: Joi.boolean(),
      opt_level: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      store_ids: Joi.array().items(Joi.number()),
      created_by: Joi.any(),
      modified_by: Joi.any(),
    });
  }

  /** @returns {AutocompleteRequestSchema} */
  static AutocompleteRequestSchema() {
    return Joi.object({
      query_suggestion: Joi.any(),
      product_suggestion: Joi.any(),
      collection_suggestion: Joi.any(),
      brand_suggestion: Joi.any(),
      category_suggestion: Joi.any(),
    });
  }

  /** @returns {AutocompleteUpsertResponseSchema} */
  static AutocompleteUpsertResponseSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      id: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {AutocompleteErrorResponseSchema} */
  static AutocompleteErrorResponseSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {AutocompleteResponseSchema} */
  static AutocompleteResponseSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      query_suggestion: Joi.any(),
      product_suggestion: Joi.any(),
      collection_suggestion: Joi.any(),
      brand_suggestion: Joi.any(),
      category_suggestion: Joi.any(),
    });
  }

  /** @returns {ProductListingActionPage} */
  static ProductListingActionPage() {
    return Joi.object({
      type: Joi.string().allow(""),
      query: Joi.any(),
      params: Joi.any(),
    });
  }

  /** @returns {ProductListingAction} */
  static ProductListingAction() {
    return Joi.object({
      type: Joi.string().allow(""),
      page: CatalogPlatformModel.ProductListingActionPage(),
    });
  }

  /** @returns {AutocompleteItem} */
  static AutocompleteItem() {
    return Joi.object({
      logo: CatalogPlatformModel.Media(),
      display: Joi.string().allow(""),
      type: Joi.string().allow(""),
      _custom_json: Joi.any(),
      action: CatalogPlatformModel.ProductListingAction(),
    });
  }

  /** @returns {AutocompletePreviewResponseSchema} */
  static AutocompletePreviewResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.AutocompleteItem()),
    });
  }

  /** @returns {CreateAppPriceFactoryRequestSchema} */
  static CreateAppPriceFactoryRequestSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      code: Joi.string().allow(""),
      is_active: Joi.boolean(),
      factory_type_ids: Joi.array().items(Joi.string().allow("")),
      department_ids: Joi.array().items(Joi.number()),
      application_id: Joi.string().allow(""),
      factory_type: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
    });
  }

  /** @returns {CreateAppPriceFactoryResponse} */
  static CreateAppPriceFactoryResponse() {
    return Joi.object({
      factory_type: Joi.string().allow(""),
      is_active: Joi.boolean(),
      code: Joi.string().allow(""),
      factory_type_ids: Joi.array().items(Joi.string().allow("")),
      currency: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      created_by: CatalogPlatformModel.CreatedBy(),
      modified_by: CatalogPlatformModel.CreatedBy(),
      name: Joi.string().allow(""),
      department_ids: Joi.array().items(Joi.number()),
      modified_on: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {ErrorDetails} */
  static ErrorDetails() {
    return Joi.object({
      status_code: Joi.number(),
    });
  }

  /** @returns {AppPriceFactory} */
  static AppPriceFactory() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow("").required(),
      department_ids: Joi.array().items(Joi.number()).required(),
      factory_type: Joi.string().allow("").required(),
      factory_type_ids: Joi.array().items(Joi.string().allow("")).required(),
      code: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      currency: Joi.string().allow("").required(),
      created_by: Joi.any(),
      modified_by: Joi.any(),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }

  /** @returns {EditAppPriceFactoryRequestSchema} */
  static EditAppPriceFactoryRequestSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      code: Joi.string().allow(""),
      is_active: Joi.boolean(),
      factory_type_ids: Joi.array().items(Joi.string().allow("")),
      department_ids: Joi.array().items(Joi.number()),
      application_id: Joi.string().allow(""),
      factory_type: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
    });
  }

  /** @returns {GetAppPriceFactoryResponse} */
  static GetAppPriceFactoryResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.AppPriceFactory()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {CreateAppPriceFactoryProduct} */
  static CreateAppPriceFactoryProduct() {
    return Joi.object({
      item_id: Joi.number(),
      marked_price: Joi.number(),
      selling_price: Joi.number(),
      seller_identifier: Joi.string().allow(""),
      zone: Joi.string().allow(""),
      action: Joi.string().allow(""),
    });
  }

  /** @returns {PriceFactorySizes} */
  static PriceFactorySizes() {
    return Joi.object({
      size_name: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
      marked_price: Joi.number(),
      selling_price: Joi.number(),
      currency: Joi.string().allow(""),
      is_active: Joi.boolean(),
    });
  }

  /** @returns {CompanySizes} */
  static CompanySizes() {
    return Joi.object({
      size_name: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
      marked_price: Joi.number(),
      selling_price: Joi.number(),
      currency: Joi.string().allow(""),
      is_active: Joi.boolean(),
    });
  }

  /** @returns {CreateAppPriceFactoryProductItem} */
  static CreateAppPriceFactoryProductItem() {
    return Joi.object({
      name: Joi.string().allow(""),
      item_id: Joi.number(),
      seller_identifier: Joi.string().allow(""),
      marked_price: Joi.number(),
      selling_price: Joi.number(),
      zone: Joi.string().allow(""),
      command: Joi.string().allow(""),
    });
  }

  /** @returns {CreatePriceFactoryProductRequest} */
  static CreatePriceFactoryProductRequest() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.CreateAppPriceFactoryProductItem()
      ),
    });
  }

  /** @returns {CreateAppPriceFactoryProductResponse} */
  static CreateAppPriceFactoryProductResponse() {
    return Joi.object({
      item_id: Joi.number(),
      item_name: Joi.string().allow(""),
      item_code: Joi.string().allow(""),
      brand: Joi.string().allow(""),
      category: Joi.string().allow(""),
      factory_type_id: Joi.array().items(Joi.string().allow("")),
      media: Joi.array().items(CatalogPlatformModel.Media()),
      sizes: Joi.array().items(CatalogPlatformModel.PriceFactorySizes()),
      company_sizes: Joi.array().items(CatalogPlatformModel.CompanySizes()),
    });
  }

  /** @returns {UpdateAppPriceFactoryProductRequest} */
  static UpdateAppPriceFactoryProductRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogPlatformModel.PriceFactorySizes()),
    });
  }

  /** @returns {UpdateAppPriceFactoryProductResponse} */
  static UpdateAppPriceFactoryProductResponse() {
    return Joi.object({
      item_id: Joi.number(),
      zone_id: Joi.string().allow(""),
      media: Joi.array().items(CatalogPlatformModel.Media()),
      company_sizes: Joi.array().items(CatalogPlatformModel.CompanySizes()),
      sizes: Joi.array().items(CatalogPlatformModel.PriceFactorySizes()),
    });
  }

  /** @returns {CreateAppPriceFactoryProductRequest} */
  static CreateAppPriceFactoryProductRequest() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.CreateAppPriceFactoryProduct()
      ),
    });
  }

  /** @returns {FailedRecordsData} */
  static FailedRecordsData() {
    return Joi.object({
      item_id: Joi.number(),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {CreatePriceFactoryProductResponse} */
  static CreatePriceFactoryProductResponse() {
    return Joi.object({
      total_records: Joi.number(),
      success_records: Joi.number(),
      failed_records: Joi.number(),
      failed_records_data: Joi.array().items(
        CatalogPlatformModel.FailedRecordsData()
      ),
      stage: Joi.string().allow(""),
    });
  }

  /** @returns {CreateAppPriceFactoryProductsResponse} */
  static CreateAppPriceFactoryProductsResponse() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.CreateAppPriceFactoryProductResponse()
      ),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {CreateAppPriceFactoryProductBulkJobRequest} */
  static CreateAppPriceFactoryProductBulkJobRequest() {
    return Joi.object({
      file_path: Joi.string().allow(""),
      file_type: Joi.string().allow(""),
      job_type: Joi.string().allow(""),
    });
  }

  /** @returns {CreateAppPriceFactoryProductExportJobRequest} */
  static CreateAppPriceFactoryProductExportJobRequest() {
    return Joi.object({
      sample_with_data: Joi.boolean(),
    });
  }

  /** @returns {CreateAppPriceFactoryProductExportJobResponse} */
  static CreateAppPriceFactoryProductExportJobResponse() {
    return Joi.object({
      job_type: Joi.string().allow(""),
      company_id: Joi.number(),
      file_type: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_by: Joi.any(),
      modified_by: Joi.any(),
      success_records: Joi.number(),
      application_id: Joi.string().allow(""),
      total_records: Joi.number(),
      factory_id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      stage: Joi.string().allow(""),
      failed_records: Joi.number(),
    });
  }

  /** @returns {AppPriceFactoryProductExportPollJobResponse} */
  static AppPriceFactoryProductExportPollJobResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      is_active: Joi.boolean(),
      created_on: Joi.string().allow(""),
      total_records: Joi.number(),
      success_records: Joi.number(),
      failed_records: Joi.number(),
      job_type: Joi.string().allow(""),
    });
  }

  /** @returns {CreateAppPriceFactoryProductExportJobPollResponse} */
  static CreateAppPriceFactoryProductExportJobPollResponse() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.AppPriceFactoryProductExportPollJobResponse()
      ),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {CreateAppPriceFactoryProductBulkJobResponse} */
  static CreateAppPriceFactoryProductBulkJobResponse() {
    return Joi.object({
      job_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      file_type: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      created_by: CatalogPlatformModel.CreatedBy(),
      company_id: Joi.number(),
      job_type: Joi.string().allow(""),
      total_records: Joi.number(),
      is_active: Joi.boolean(),
      modified_on: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      factory_id: Joi.string().allow(""),
      modified_by: CatalogPlatformModel.CreatedBy(),
      created_on: Joi.string().allow(""),
      failed_records: Joi.number(),
      file_path: Joi.string().allow(""),
      success_records: Joi.number(),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {CreateAppPriceFactoryProductBulkJobValidateResponse} */
  static CreateAppPriceFactoryProductBulkJobValidateResponse() {
    return Joi.object({
      job_type: Joi.string().allow(""),
      file_type: Joi.string().allow(""),
      file_path: Joi.string().allow(""),
      job_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_by: CatalogPlatformModel.CreatedBy(),
      modified_by: CatalogPlatformModel.CreatedBy(),
    });
  }

  /** @returns {CreateAppPriceFactoryProductBulkJobPollResponse} */
  static CreateAppPriceFactoryProductBulkJobPollResponse() {
    return Joi.object({
      status: Joi.string().allow(""),
      total_records: Joi.number(),
      success_records: Joi.number(),
      failed_records: Joi.number(),
      error_file: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      created_by: Joi.any(),
      modified_by: Joi.any(),
      stage: Joi.string().allow(""),
      is_active: Joi.boolean(),
      _id: Joi.string().allow(""),
      error_file_url: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {SynonymListResponseSchema} */
  static SynonymListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.SynonymResponseSchema()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {SynonymResponseSchema} */
  static SynonymResponseSchema() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
      key: Joi.string().allow(""),
      app_id: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }

  /** @returns {SynonymListErrorResponseSchema} */
  static SynonymListErrorResponseSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {SynonymCreateRequestSchema} */
  static SynonymCreateRequestSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      key: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {SynonymCreateResponseSchema} */
  static SynonymCreateResponseSchema() {
    return Joi.object({
      status: Joi.boolean(),
      _id: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {SynonymUpdateResponseSchema} */
  static SynonymUpdateResponseSchema() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {SynonymCreateErrorSchema} */
  static SynonymCreateErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      errors: Joi.any(),
      code: Joi.number(),
    });
  }

  /** @returns {SynonymDeleteErrorSchema} */
  static SynonymDeleteErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {SynonymDeleteResponseSchema} */
  static SynonymDeleteResponseSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {SynonymUploadRequestSchema} */
  static SynonymUploadRequestSchema() {
    return Joi.object({
      tracking_url: Joi.string().allow(""),
      file_type: Joi.string().allow(""),
      job_type: Joi.string().allow(""),
    });
  }

  /** @returns {SynonymUploadResponseSchema} */
  static SynonymUploadResponseSchema() {
    return Joi.object({
      job_type: Joi.string().allow(""),
      file_type: Joi.string().allow(""),
      tracking_url: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      is_active: Joi.boolean(),
      total_records: Joi.number(),
      success_records: Joi.number(),
      failed_records: Joi.number(),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {SynonymExportResponseSchema} */
  static SynonymExportResponseSchema() {
    return Joi.object({
      job_type: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
    });
  }

  /** @returns {SynonymUploadErrorSchema} */
  static SynonymUploadErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      errors: Joi.any(),
      code: Joi.number(),
    });
  }

  /** @returns {SynonymBulkValidateRequestSchema} */
  static SynonymBulkValidateRequestSchema() {
    return Joi.object({
      job_id: Joi.string().allow(""),
      tracking_url: Joi.string().allow(""),
      file_type: Joi.string().allow(""),
      job_type: Joi.string().allow(""),
    });
  }

  /** @returns {SynonymBulkValidateResponseSchema} */
  static SynonymBulkValidateResponseSchema() {
    return Joi.object({
      job_id: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {SynonymBulkValidateErrorSchema} */
  static SynonymBulkValidateErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      errors: Joi.any(),
      code: Joi.number(),
    });
  }

  /** @returns {SynonymBulkProcessRequestSchema} */
  static SynonymBulkProcessRequestSchema() {
    return Joi.object({
      job_id: Joi.string().allow(""),
      tracking_url: Joi.string().allow(""),
      file_type: Joi.string().allow(""),
      job_type: Joi.string().allow(""),
    });
  }

  /** @returns {SynonymBulkProcessResponseSchema} */
  static SynonymBulkProcessResponseSchema() {
    return Joi.object({
      job_id: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {SynonymBulkProcessErrorSchema} */
  static SynonymBulkProcessErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      errors: Joi.string().allow(""),
      code: Joi.number(),
    });
  }

  /** @returns {SynonymBulkPollResponseSchema} */
  static SynonymBulkPollResponseSchema() {
    return Joi.object({
      total_records: Joi.number(),
      success_records: Joi.number(),
      failed_records: Joi.number(),
      stage: Joi.string().allow(""),
      error_url: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {SynonymBulkPollErrorSchema} */
  static SynonymBulkPollErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {PriceFactoryErrorSchema} */
  static PriceFactoryErrorSchema() {
    return Joi.object({
      departments: Joi.any(),
      pricing_strategy: Joi.any(),
      department_price_zonewise_department_ids: Joi.any(),
      factory_type: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PriceFactoryCreateErrorSchema} */
  static PriceFactoryCreateErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      error: Joi.any(),
      code: Joi.number(),
    });
  }

  /** @returns {PriceGroupedByZone} */
  static PriceGroupedByZone() {
    return Joi.object({
      discount: Joi.string().allow(""),
      store_id: Joi.array().items(Joi.number()),
      seller_id: Joi.number(),
      factory_type_id: Joi.string().allow(""),
      discount_meta: CatalogPlatformModel.DiscountMeta(),
      price: CatalogPlatformModel.ProductListingPrice(),
    });
  }

  /** @returns {AppPriceByIdResponse} */
  static AppPriceByIdResponse() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.PriceGroupedByZone()),
    });
  }

  /** @returns {ActionPage} */
  static ActionPage() {
    return Joi.object({
      params: Joi.object().pattern(
        /\S/,
        Joi.array().items(Joi.string().allow(""))
      ),
      query: Joi.object().pattern(
        /\S/,
        Joi.array().items(Joi.string().allow(""))
      ),
      url: Joi.string().allow(""),
      type: CatalogPlatformModel.PageType().required(),
    });
  }

  /**
   * Enum: PageType Used By: Catalog
   *
   * @returns {PageType}
   */
  static PageType() {
    return Joi.string().valid(
      "about-us",

      "addresses",

      "blog",

      "brands",

      "cards",

      "cart",

      "categories",

      "brand",

      "category",

      "collection",

      "collections",

      "custom",

      "contact-us",

      "external",

      "faq",

      "freshchat",

      "home",

      "notification-settings",

      "orders",

      "page",

      "policy",

      "product",

      "product-request",

      "products",

      "profile",

      "profile-order-shipment",

      "profile-basic",

      "profile-company",

      "profile-emails",

      "profile-phones",

      "rate-us",

      "refer-earn",

      "settings",

      "shared-cart",

      "tnc",

      "track-order",

      "wishlist",

      "sections",

      "form",

      "cart-delivery",

      "cart-payment",

      "cart-review",

      "login",

      "register",

      "shipping-policy",

      "return-policy",

      "order-status",

      "locate-us"
    );
  }
}
module.exports = CatalogPlatformModel;
