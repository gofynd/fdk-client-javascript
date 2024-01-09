const Joi = require("joi");

/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 * @property {string} [type]
 */

/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {PageType} type
 * @property {string} [url]
 */

/**
 * @typedef AllowSingleRequest
 * @property {boolean} allow_single
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
 * @typedef AppCatalogConfiguration
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {string} config_type
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string} [id]
 * @property {ConfigurationListing} [listing]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {ConfigurationProduct} [product]
 * @property {string} [type]
 */

/**
 * @typedef AppCategoryReturnConfig
 * @property {number} category_id - Unique identifier for L3 category
 * @property {ProductReturnConfigBaseSerializer} return_config - Return
 *   configuration details
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
 * @typedef AppConfigurationDetail
 * @property {string} app_id
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
 * @typedef AppConfigurationsSort
 * @property {string} app_id
 * @property {string} default_key
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {string} key
 * @property {string} [logo]
 * @property {string} [name]
 * @property {number} priority
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
 * @typedef ApplicationItemMeta
 * @property {Object} [_custom_json] - Custom JSON data for the item
 * @property {MetaFields[]} [_custom_meta] - Custom meta fields for the item
 * @property {Object} [alt_text] - Alternative text for the item's images
 * @property {boolean} [is_cod] - Whether the item is available for Cash on
 *   Delivery (COD) or not
 * @property {boolean} [is_gift] - Whether the item is a gift or not
 * @property {ApplicationItemMOQ} [moq] - Minimum Order Quantity information for the item
 * @property {ApplicationItemSEO} [seo] - Search Engine Optimization information
 *   for the item
 * @property {SizePromotionThreshold} [size_promotion_threshold] - Size level
 *   promotion limitation information for item
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [increment_unit] - The minimum quantity increment in which
 *   the item can be purchased.
 * @property {number} [maximum] - The maximum quantity allowed for purchase.
 * @property {number} [minimum] - The minimum quantity required for purchase.
 */

/**
 * @typedef ApplicationItemSEO
 * @property {string} [description] - The SEO description of the item
 * @property {string} [title] - The SEO title of the item
 */

/**
 * @typedef ApplicationItemSeoAction
 * @property {Object} [page]
 * @property {string} [type]
 */

/**
 * @typedef ApplicationItemSeoBreadcrumbs
 * @property {ApplicationItemSeoAction[]} [action]
 * @property {string} [url]
 */

/**
 * @typedef ApplicationItemSeoMetaTagItem
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef ApplicationItemSeoMetaTags
 * @property {ApplicationItemSeoMetaTagItem[]} [items]
 * @property {string} [title]
 */

/**
 * @typedef ApplicationProductListingResponse
 * @property {ProductFilters[]} [filters]
 * @property {ProductListingDetail[]} [items]
 * @property {Object} [operators]
 * @property {Page} page
 * @property {ProductSortOn[]} [sort_on]
 */

/**
 * @typedef ApplicationStoreJson
 * @property {Object} _custom_json
 */

/**
 * @typedef AppReturnConfigResponse
 * @property {string} [app_id] - Channel identifier
 * @property {number} [category_count] - Count of L3 category return config set
 *   for application
 * @property {number} [company_id] - Unique identifer of company
 * @property {Object} [created_by] - User details
 * @property {Object} [modified_by] - User details
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
 * @typedef AutocompleteAction
 * @property {AutocompletePageAction} [page]
 * @property {string} [type]
 */

/**
 * @typedef AutoCompleteMedia
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 * @property {string} [url]
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
 * @property {PageResponse} [page]
 */

/**
 * @typedef Brand
 * @property {Logo} [logo]
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef BrandItem
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {string[]} [departments]
 * @property {string} [discount]
 * @property {Media2} [logo]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
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
 * @typedef BulkHsnResponse
 * @property {boolean} [success] - Flag indicating the success status of the
 *   bulk HSN operation.
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
 * @typedef BulkJob
 * @property {number} [cancelled]
 * @property {Object[]} [cancelled_records]
 * @property {number} company_id
 * @property {UserInfo1} [created_by] - The user who created the item.
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
 * @property {UserInfo1} [created_by] - The user who created the item.
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
 * @property {CategoryMapping} [marketplaces] - It is the mapping of the
 *   category in different marketplaces.
 * @property {Media1} [media] - It is the details of the media such as banner and logo..
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
 * @typedef CategoryCreateResponse
 * @property {string} [message] - It is the message of the response from the category.
 * @property {number} [uid] - It is the unique identifier of the category.
 */

/**
 * @typedef CategoryItems
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
 * @property {CategoryMappingValues} [ajio] - It is the category id mapping for
 *   ajio platform.
 * @property {CategoryMappingValues} [facebook] - It is the category id mapping
 *   for facebook platform.
 * @property {CategoryMappingValues} [google] - It is the category id mapping
 *   for google platform.
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
 * @property {CategoryMapping} [marketplaces] - It is the mapping of the
 *   category in different marketplaces.
 * @property {Media1} [media] - It is the details of the media such as banner and logo..
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
 * @typedef CollectionCreateResponse
 * @property {Object} [_schedule]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {string} [app_id]
 * @property {Object} [badge]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {BannerImage} [logo]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {number} [priority]
 * @property {CollectionQuery[]} [query]
 * @property {string} [slug]
 * @property {string} [sort_on]
 * @property {string[]} [tag]
 * @property {string} [type]
 * @property {string} [uid]
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
 * @property {string} aspect_ratio
 * @property {string} url
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
 * @property {Object[]} value - The value of the attribute of the collection query
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
 * @property {ConfigurationListingFilter} filter
 * @property {ConfigurationListingSort} sort
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
 * @property {ConfigurationProductSimilar} similar
 * @property {ConfigurationProductVariant} variant
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
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {Object[]} [results]
 * @property {string[]} [words]
 */

/**
 * @typedef CreateCollection
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {string} app_id
 * @property {CollectionBadge} [badge]
 * @property {CollectionBanner} banners
 * @property {UserInfo} [created_by]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {CollectionImage} logo
 * @property {Object} [meta]
 * @property {UserInfo} [modified_by]
 * @property {string} name
 * @property {number} [priority]
 * @property {boolean} [published]
 * @property {CollectionQuery[]} [query]
 * @property {SeoDetail} [seo]
 * @property {string} slug
 * @property {string} [sort_on]
 * @property {string[]} [tags]
 * @property {string} type
 * @property {string[]} [visible_facets_keys]
 */

/**
 * @typedef CreateSearchConfigurationRequest
 * @property {string} application_id - The application id where custom search
 *   configuration is set
 * @property {number} company_id - The company id where custom search configuration is set
 * @property {UserSerializer} [created_by] - The user who created the search
 *   configuration.
 * @property {string} [created_on] - The date and time when the search
 *   configuration was created.
 * @property {boolean} [is_proximity_enabled] - Flag indicating if proximity
 *   search is enabled for this attribute.
 * @property {UserSerializer} [modified_by] - The user who modified the search
 *   configuration.
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
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CrossSellingData} [data]
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
 * @typedef DepartmentCreateErrorResponse
 * @property {string} [error]
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
 * @property {string[]} [synonyms]
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
 * @property {string} [slug]
 * @property {number} [uid]
 */

/**
 * @typedef DepartmentModel
 * @property {string} [_cls]
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {UserDetail} [created_by] - User details of the creator of the document
 * @property {string} created_on - Timestamp of the creation of the document
 * @property {boolean} [is_active] - Whether the department is currently active
 * @property {string} logo - The URL of the department's logo
 * @property {UserDetail} [modified_by] - User details of the last modifier of
 *   the document
 * @property {string} modified_on - Timestamp of the last modification of the document
 * @property {string} name - The name of the department
 * @property {number} priority_order - The priority order of the department
 * @property {string} slug - The unique slug identifier for the department
 * @property {string[]} [synonyms] - A list of synonyms for the department name
 * @property {number} uid - The unique ID for the department
 * @property {UserDetail} [verified_by] - User details of the verifier of the
 *   document, if applicable
 * @property {string} [verified_on] - Timestamp of when the document was
 *   verified, if applicable
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
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
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {string} config_type
 * @property {string} [id]
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */

/**
 * @typedef ErrorResponse
 * @property {string} [code]
 * @property {string} [error]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 */

/**
 * @typedef FilerList
 * @property {string} [display]
 * @property {string} [value]
 */

/**
 * @typedef GenderDetail
 * @property {string[]} [departments]
 * @property {string} [description]
 * @property {AttributeMasterDetails} [details]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterFilter} [filters]
 * @property {string} [id]
 * @property {boolean} [is_nested]
 * @property {string} [logo]
 * @property {AttributeMasterMeta} [meta]
 * @property {string} [name]
 * @property {AttributeMaster} [schema]
 * @property {string} [slug]
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [address_type]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {number} [pincode]
 * @property {string} [state]
 */

/**
 * @typedef GetAllSizes
 * @property {AllSizes[]} [all_sizes]
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
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {Object[]} [results]
 * @property {string} [uid]
 * @property {string[]} [words]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [compare]
 * @property {Object} [detail]
 * @property {Object} [similar]
 * @property {Object} [variant]
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
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [condition]
 * @property {Object[]} data
 * @property {Object[]} [values]
 */

/**
 * @typedef GetConfigResponse
 * @property {Object[]} data
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
 * @property {string} code
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
 * @property {string} phone_number
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
 * @property {string} choice
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string} [id]
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
 * @property {string} [slug]
 */

/**
 * @typedef GetProducts
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {number} [max_quantity]
 * @property {number} [min_quantity]
 * @property {Price} [price]
 * @property {LimitedProductData} [product_details]
 * @property {number} [product_uid]
 * @property {Size[]} [sizes]
 */

/**
 * @typedef GetSearchConfigurationResponse
 * @property {string} application_id - The application id where custom search
 *   configuration is set
 * @property {number} company_id - The company id where custom search configuration is set
 * @property {UserSerializer} [created_by] - The user who created the search
 *   configuration.
 * @property {string} [created_on] - The date and time when the search
 *   configuration was created.
 * @property {boolean} [is_proximity_enabled] - Flag indicating if proximity
 *   search is enabled for this attribute.
 * @property {UserSerializer} [modified_by] - The user who modified the search
 *   configuration.
 * @property {string} [modified_on] - The date and time when the search
 *   configuration was last modified.
 * @property {number} [proximity] - Proximity distance configuration
 * @property {SearchableAttribute[]} [searchable_attributes] - The searchable
 *   attributes defined on the application.
 */

/**
 * @typedef GetSearchWordsData
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
 * @typedef GTIN
 * @property {string} gtin_type
 * @property {string} gtin_value
 * @property {boolean} [primary]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
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
 * @property {HsnCodesObject} [data] - The HSN code data.
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse} [page]
 */

/**
 * @typedef HsnCodesObject
 * @property {number} [company_id] - The ID of the company.
 * @property {string} [hs2_code] - The HS2 code.
 * @property {string} [hsn_code] - The HSN code.
 * @property {string} [id] - The identifier of the HSN code.
 * @property {string} [modified_on] - The date and time when the HSN code was
 *   last modified.
 * @property {boolean} [tax_on_esp] - Flag indicating whether tax is applicable on ESP.
 * @property {boolean} [tax_on_mrp] - Flag indicating whether tax is applicable on MRP.
 * @property {number} [tax1] - The first tax rate.
 * @property {number} [tax2] - The second tax rate.
 * @property {number} [threshold1] - The threshold for the first tax rate.
 * @property {number} [threshold2] - The threshold for the second tax rate.
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
 * @property {string} country_code - Country code.
 * @property {Object} [created_by] - Details of the user who created the HSN data.
 * @property {string} [created_on] - Date and time when the HSN data was created.
 * @property {string} description - Description of the HSN data.
 * @property {string} hsn_code - HSN code.
 * @property {string} [hsn_code_id] - Unique identifier of the HSN code.
 * @property {Object} [modified_by] - Details of the user who last modified the HSN data.
 * @property {string} [modified_on] - Date and time when the HSN data was last modified.
 * @property {string} reporting_hsn - HSN code.
 * @property {TaxSlab[]} taxes - List of tax slabs.
 * @property {string} type - Type of HSN data (goods or services).
 */

/**
 * @typedef HsnUpsert
 * @property {number} company_id - The ID of the company.
 * @property {string} hs2_code - The HS2 code.
 * @property {string} hsn_code - The HSN code.
 * @property {boolean} [is_active] - Flag indicating whether the entry is active.
 * @property {boolean} [tax_on_esp] - Flag indicating whether tax is applicable on ESP.
 * @property {boolean} tax_on_mrp - Flag indicating whether tax is applicable on MRP.
 * @property {number} tax1 - The first tax rate.
 * @property {number} [tax2] - The second tax rate.
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
 * @typedef InventoryBulkRequest
 * @property {string} batch_id
 * @property {number} company_id
 * @property {InventoryJobPayload[]} sizes
 * @property {Object} [user]
 */

/**
 * @typedef InventoryConfig
 * @property {FilerList[]} [data]
 * @property {boolean} [multivalues]
 */

/**
 * @typedef InventoryCreateRequest
 * @property {string[]} [data] - The list of attributes that you want to extract
 *   in the export job.
 * @property {InventoryExportFilter} filters - This filters that are applied for
 *   the export of the inventory.
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
 * @property {InventoryExportQuantityFilter} [quantity] - The quantity range
 *   that needs to be exported.
 * @property {number[]} store_ids - The list of the store ids that needs to be exported.
 * @property {string} [to_date] - The modified on date till when the data needs
 *   to be exported.
 */

/**
 * @typedef InventoryExportJob
 * @property {string} [completed_on] - Completion datetime of the job.
 * @property {InventoryExportAdvanceOption} [filters] - The filters that needs
 *   to be exported.
 * @property {string[]} [notification_emails] - The notification emails for the job.
 * @property {number} seller_id - The seller id that needs to be exported.
 * @property {string} [status] - The status of the job.
 * @property {string} task_id - The task id of the job.
 * @property {string} type - The type of file that needs to be exported.
 * @property {string} [url] - URL odf the exported file.
 */

/**
 * @typedef InventoryExportJobListResponse
 * @property {InventoryJobDetailResponse} items - This is the list/history of
 *   all the jobs.
 */

/**
 * @typedef InventoryExportQuantityFilter
 * @property {number} [max] - The maximum quantity that needs to be exported.
 * @property {number} [min] - The minimum quantity that needs to be exported.
 * @property {string} operators - Condition for the quantity that needs to be exported.
 */

/**
 * @typedef InventoryExportRequest
 * @property {number[]} [brand]
 * @property {number[]} [store]
 * @property {string} [type]
 */

/**
 * @typedef InventoryExportResponse
 * @property {string} [created_by] - The user that created the job.
 * @property {string} [created_on] - Creation datetime of the job
 * @property {Object} [filters] - The filters that needs to be exported.
 * @property {string} [modified_on] - Modification date of the job
 * @property {string[]} [notification_emails] - The notification emails for the job.
 * @property {number} seller_id - The seller id that needs to be exported.
 * @property {string} [status] - The status of the job.
 * @property {string} task_id - The task id of the job.
 * @property {string} [type] - The type of file that needs to be exported.
 */

/**
 * @typedef InventoryFailedReason
 * @property {string} [errors] - It is the error message of the inventory error response.
 * @property {string} message - It is the message of the activity performed.
 */

/**
 * @typedef InventoryJobDetailResponse
 * @property {UserDetail} [cancelled_by] - This is the user detail of the user
 *   who cancelled the job.
 * @property {string} [cancelled_on] - This is the timestamp of the cacellation
 *   for this job.
 * @property {string} [completed_on] - This is the timestamp of the completion
 *   for this job.
 * @property {UserDetail} [created_by] - This is the user detail of the user who
 *   cancelled the job.
 * @property {string} [created_on] - This is the timestamp of the creation for this job.
 * @property {InventoryJobFilters} filters - This is the filter criteria applied
 *   for the export job.
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
 * @property {InventoryExportQuantityFilter} [quantity] - The quantity range
 *   that needs to be exported.
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
 * @property {number} company_id - The ID of the company.
 * @property {Object} [meta] - Additional metadata for the inventory request.
 * @property {InventoryPayload[]} [payload] - The list of inventory payloads.
 */

/**
 * @typedef InventoryResponse
 * @property {string} [currency]
 * @property {Object} [identifiers]
 * @property {string} [inventory_updated_on]
 * @property {number} [item_id]
 * @property {number} [price]
 * @property {number} [price_effective]
 * @property {number} [price_transfer]
 * @property {number} [quantity]
 * @property {number} [sellable_quantity]
 * @property {string} [seller_identifier]
 * @property {string} [size]
 * @property {Object} [store]
 * @property {string} [uid]
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
 * @property {BrandMeta} brand - The metadata of the brand.
 * @property {CompanyMeta} company - The metadata of the company.
 * @property {string} country_of_origin - The country of origin of the article.
 * @property {string} [created_by] - The user who created the article.
 * @property {DimensionResponse} dimension - The dimensions of the article.
 * @property {string} [expiration_date] - The expiration date of the article.
 * @property {boolean} fragile - Indicates if the article is fragile.
 * @property {string} fynd_article_code - The Fynd article code.
 * @property {string} fynd_item_code - The Fynd item code.
 * @property {Object} [fynd_meta] - The Fynd metadata of the article.
 * @property {Object} identifier - The identifier of the article.
 * @property {boolean} [is_active] - Indicates if the article is active.
 * @property {boolean} [is_set]
 * @property {number} item_id - The ID of the item.
 * @property {ManufacturerResponse} manufacturer - The manufacturer of the article.
 * @property {Object} [meta] - Additional metadata for the article.
 * @property {string} [modified_by] - The user who modified the article.
 * @property {PriceMeta} price - The price metadata of the article.
 * @property {Quantities} [quantities]
 * @property {Object} [raw_meta] - The raw metadata of the article.
 * @property {ReturnConfig1} [return_config] - The return configuration of the article.
 * @property {string} seller_identifier - The seller identifier of the article.
 * @property {InventorySet} [set]
 * @property {string} size - The size of the article.
 * @property {string} [stage] - The stage of the article.
 * @property {StoreMeta} store - The metadata of the store.
 * @property {string[]} [tags] - The tags associated with the article.
 * @property {Object} [tax_identifier] - The tax identifier of the article.
 * @property {number} total_quantity - The total quantity of the article.
 * @property {string} [trace_id] - The trace ID of the article.
 * @property {boolean} [track_inventory] - Indicates if the inventory is tracked
 *   for the article.
 * @property {Trader1[]} [trader] - The traders associated with the article.
 * @property {string} uid - The unique identifier of the article.
 * @property {WeightResponse} weight - The weight of the article.
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
 * @property {string} message - It is the success message of the inventory update.
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
 * @typedef LimitedProductData
 * @property {Object} [attributes]
 * @property {string} [country_of_origin]
 * @property {Object} [identifier]
 * @property {string[]} [images]
 * @property {string} [item_code]
 * @property {string} [name]
 * @property {Object} [price]
 * @property {number} [quantity]
 * @property {string} [short_description]
 * @property {string[]} [sizes]
 * @property {string} [slug]
 * @property {number} [uid]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object[]} [items]
 * @property {Object} [page]
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
 * @property {Object} [headers]
 * @property {string} [unit]
 * @property {Object[]} [values]
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
 * @typedef Metatags
 * @property {ApplicationItemSeoMetaTags[]} [items]
 * @property {string} [title]
 */

/**
 * @typedef MOQData
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 * @property {number} [minimum]
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
 * @typedef OptinCompanyBrandDetailsView
 * @property {CompanyBrandDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef OptinCompanyDetail
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef OptinCompanyMetrics
 * @property {number} [brand]
 * @property {string} [company]
 * @property {number} [store]
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
 * @typedef OptinStoreDetails
 * @property {StoreDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {Object} [alt_text]
 * @property {boolean} [is_cod]
 * @property {boolean} [is_gift]
 * @property {MOQData} [moq]
 * @property {SEOData} [seo]
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
 * @property {Action} [action]
 * @property {Media} [logo]
 * @property {string} [name]
 * @property {number} [uid]
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
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductBundleItem
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {number} max_quantity
 * @property {number} min_quantity
 * @property {number} product_uid
 */

/**
 * @typedef ProductBundleRequest
 * @property {string} choice
 * @property {number} [company_id]
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
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {string} choice
 * @property {number} [company_id]
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
 */

/**
 * @typedef ProductConfigurationDownloads
 * @property {Object[]} [data]
 * @property {boolean} [multivalue]
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
 * @property {string} [requester]
 * @property {ReturnConfig} return_config
 * @property {string} [short_description]
 * @property {string} [size_guide]
 * @property {Object[]} sizes
 * @property {string} slug
 * @property {string[]} [tags]
 * @property {TaxIdentifier} tax_identifier
 * @property {TeaserTag} [teaser_tag]
 * @property {string} template_tag
 * @property {Trader[]} trader
 * @property {number} [uid]
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
 * @typedef ProductDownloadsResponse
 * @property {ProductTemplateExportResponse[]} [items] - The items of the job.
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
 * @property {Object} value
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
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
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
 * @typedef ProductReturnConfigBaseSerializer
 * @property {boolean} returnable - Boolean Flag for item returnable
 * @property {number} time - Valid return time for an item
 * @property {string} unit - Unit of return config days|hours
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef ProductSchemaV2
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
 * @property {string} [created_on]
 * @property {string[]} [departments]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_archived]
 * @property {boolean} is_expirable
 * @property {boolean} is_physical
 * @property {string} [logo]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} slug
 * @property {string} [tag]
 */

/**
 * @typedef ProductTemplateDownloadsExport
 * @property {ProductTemplateExportFilterRequest} [filters] - This is the
 *   filters of the file for the export.
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
 * @property {string} [completed_on] - Completion datetime of the job
 * @property {UserInfo1} [created_by] - The user that created the job.
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
 * @typedef PTErrorResponse
 * @property {string} [code]
 * @property {Object} [errors]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
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
 */

/**
 * @typedef RawProductListingResponse
 * @property {RawProduct[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ReturnConfig
 * @property {boolean} returnable
 * @property {number} time
 * @property {string} unit
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
 * @typedef SearchableAttribute
 * @property {string} key - The attribute key to search on. This key matches the
 *   solr document key
 * @property {string} name - The name of key to search on. This is for
 *   displaying purposes on platform
 * @property {number} priority - Order in which the searchable attribute should
 *   kick in. Higher the priority, higher the weight considered while searching
 */

/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
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
 * @typedef SEOData
 * @property {ApplicationItemSeoBreadcrumbs[]} [breadcrumbs]
 * @property {string} [description]
 * @property {Metatags[]} [meta_tags]
 * @property {Sitemap} [sitemap]
 * @property {string} [title]
 */

/**
 * @typedef SeoDetail
 * @property {ApplicationItemSeoBreadcrumbs[]} [breadcrumbs]
 * @property {string} [description]
 * @property {Metatags[]} [meta_tags]
 * @property {Object} [sitemap]
 * @property {string} [title]
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
 * @typedef SingleProductResponse
 * @property {ProductSchemaV2} [data]
 */

/**
 * @typedef Sitemap
 * @property {string} [frequency]
 * @property {number} [priority]
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
 * @property {boolean} [active]
 * @property {number} [brand_id]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {Object} [guide]
 * @property {string} [id]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [subtitle]
 * @property {string} [tag]
 * @property {string} [title]
 */

/**
 * @typedef SizePromotionThreshold
 * @property {string} [threshold_type]
 * @property {number} [threshold_value]
 */

/**
 * @typedef StoreAssignResponse
 * @property {string} [_id]
 * @property {ArticleAssignment1} article_assignment
 * @property {number} [company_id]
 * @property {string} [group_id]
 * @property {number} [index]
 * @property {number} item_id
 * @property {Object} [meta]
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {number} quantity
 * @property {string} [s_city]
 * @property {string} size
 * @property {boolean} status
 * @property {number} [store_id]
 * @property {number} [store_pincode]
 * @property {Object[]} [strategy_wise_listing]
 * @property {string} [uid]
 */

/**
 * @typedef StoreDetail
 * @property {Object[]} [additional_contacts]
 * @property {Object} [address]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {string} [display_name]
 * @property {Object[]} [documents]
 * @property {Object} [manager]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [store_type]
 * @property {Object} [timing]
 * @property {number} [uid]
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
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */

/**
 * @typedef TemplatesValidationResponse
 * @property {TemplateValidationData} [data]
 * @property {TemplateDetails} [template_details]
 */

/**
 * @typedef TemplateValidationData
 * @property {GlobalValidation} [global_validation]
 * @property {Object} [template_validation]
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
 */

/**
 * @typedef UpdatedResponse
 * @property {number[]} [items_not_updated]
 * @property {string} [message]
 */

/**
 * @typedef UpdateSearchConfigurationRequest
 * @property {string} application_id - The application id where custom search
 *   configuration is set
 * @property {number} company_id - The company id where custom search configuration is set
 * @property {UserSerializer} [created_by] - The user who created the search
 *   configuration.
 * @property {string} [created_on] - The date and time when the search
 *   configuration was created.
 * @property {boolean} [is_proximity_enabled] - Flag indicating if proximity
 *   search is enabled for this attribute.
 * @property {UserSerializer} [modified_by] - The user who modified the search
 *   configuration.
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
 *   | "order-status"} PageType
 */

class CatalogPlatformModel {
  /** @returns {Action} */
  static Action() {
    return Joi.object({
      page: CatalogPlatformModel.ActionPage(),
      popup: CatalogPlatformModel.ActionPage(),
      type: Joi.string().allow(""),
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
      type: CatalogPlatformModel.PageType().required(),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {AllowSingleRequest} */
  static AllowSingleRequest() {
    return Joi.object({
      allow_single: Joi.boolean().required(),
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
      return_config: CatalogPlatformModel.ProductReturnConfigBaseSerializer().required(),
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

  /** @returns {AppConfigurationDetail} */
  static AppConfigurationDetail() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
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

  /** @returns {AppConfigurationsSort} */
  static AppConfigurationsSort() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      default_key: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      key: Joi.string().allow("").required(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      priority: Joi.number().required(),
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

  /** @returns {ApplicationItemMeta} */
  static ApplicationItemMeta() {
    return Joi.object({
      _custom_json: Joi.any(),
      _custom_meta: Joi.array().items(CatalogPlatformModel.MetaFields()),
      alt_text: Joi.any(),
      is_cod: Joi.boolean(),
      is_gift: Joi.boolean(),
      moq: CatalogPlatformModel.ApplicationItemMOQ(),
      seo: CatalogPlatformModel.ApplicationItemSEO(),
      size_promotion_threshold: CatalogPlatformModel.SizePromotionThreshold(),
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

  /** @returns {ApplicationItemSEO} */
  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationItemSeoAction} */
  static ApplicationItemSeoAction() {
    return Joi.object({
      page: Joi.any(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationItemSeoBreadcrumbs} */
  static ApplicationItemSeoBreadcrumbs() {
    return Joi.object({
      action: Joi.array().items(
        CatalogPlatformModel.ApplicationItemSeoAction()
      ),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationItemSeoMetaTagItem} */
  static ApplicationItemSeoMetaTagItem() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationItemSeoMetaTags} */
  static ApplicationItemSeoMetaTags() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.ApplicationItemSeoMetaTagItem()
      ),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationProductListingResponse} */
  static ApplicationProductListingResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogPlatformModel.ProductFilters()),
      items: Joi.array().items(CatalogPlatformModel.ProductListingDetail()),
      operators: Joi.any(),
      page: CatalogPlatformModel.Page().required(),
      sort_on: Joi.array().items(CatalogPlatformModel.ProductSortOn()),
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
      app_id: Joi.string().allow(""),
      category_count: Joi.number(),
      company_id: Joi.number(),
      created_by: Joi.any(),
      modified_by: Joi.any(),
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

  /** @returns {AutocompleteAction} */
  static AutocompleteAction() {
    return Joi.object({
      page: CatalogPlatformModel.AutocompletePageAction(),
      type: Joi.string().allow(""),
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
      page: CatalogPlatformModel.PageResponse(),
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

  /** @returns {BrandItem} */
  static BrandItem() {
    return Joi.object({
      action: CatalogPlatformModel.Action(),
      banners: CatalogPlatformModel.ImageUrls(),
      departments: Joi.array().items(Joi.string().allow("")),
      discount: Joi.string().allow(""),
      logo: CatalogPlatformModel.Media2(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {BrandListingResponse} */
  static BrandListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.BrandItem()),
      page: CatalogPlatformModel.Page().required(),
    });
  }

  /** @returns {BrandMeta} */
  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {BrandMeta1} */
  static BrandMeta1() {
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

  /** @returns {BulkHsnResponse} */
  static BulkHsnResponse() {
    return Joi.object({
      success: Joi.boolean(),
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

  /** @returns {BulkJob} */
  static BulkJob() {
    return Joi.object({
      cancelled: Joi.number(),
      cancelled_records: Joi.array().items(Joi.any()),
      company_id: Joi.number().required(),
      created_by: CatalogPlatformModel.UserInfo1(),
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
      created_by: CatalogPlatformModel.UserInfo1(),
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
      marketplaces: CatalogPlatformModel.CategoryMapping(),
      media: CatalogPlatformModel.Media1(),
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

  /** @returns {CategoryCreateResponse} */
  static CategoryCreateResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {CategoryItems} */
  static CategoryItems() {
    return Joi.object({
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
      ajio: CatalogPlatformModel.CategoryMappingValues(),
      facebook: CatalogPlatformModel.CategoryMappingValues(),
      google: CatalogPlatformModel.CategoryMappingValues(),
    });
  }

  /** @returns {CategoryMappingValues} */
  static CategoryMappingValues() {
    return Joi.object({
      catalog_id: Joi.number(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {CategoryRequestBody} */
  static CategoryRequestBody() {
    return Joi.object({
      departments: Joi.array().items(Joi.number()).required(),
      hierarchy: Joi.array().items(CatalogPlatformModel.Hierarchy()),
      is_active: Joi.boolean().required(),
      level: Joi.number().required(),
      marketplaces: CatalogPlatformModel.CategoryMapping(),
      media: CatalogPlatformModel.Media1(),
      name: Joi.string().allow("").required(),
      priority: Joi.number(),
      slug: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
      tryouts: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CategoryResponse} */
  static CategoryResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.Category()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {CategoryUpdateResponse} */
  static CategoryUpdateResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
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

  /** @returns {CollectionCreateResponse} */
  static CollectionCreateResponse() {
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
      logo: CatalogPlatformModel.BannerImage(),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      query: Joi.array().items(CatalogPlatformModel.CollectionQuery()),
      slug: Joi.string().allow(""),
      sort_on: Joi.string().allow(""),
      tag: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
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
      aspect_ratio: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
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
      value: Joi.array().items(Joi.any()).required(),
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
    });
  }

  /** @returns {CompanyMeta} */
  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  /** @returns {CompanyMeta1} */
  static CompanyMeta1() {
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
      filter: CatalogPlatformModel.ConfigurationListingFilter().required(),
      sort: CatalogPlatformModel.ConfigurationListingSort().required(),
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
      similar: CatalogPlatformModel.ConfigurationProductSimilar().required(),
      variant: CatalogPlatformModel.ConfigurationProductVariant().required(),
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
    });
  }

  /** @returns {CreateAutocompleteWordsResponse} */
  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      _custom_json: Joi.any(),
      app_id: Joi.string().allow(""),
      results: Joi.array().items(Joi.any()),
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
      app_id: Joi.string().allow("").required(),
      badge: CatalogPlatformModel.CollectionBadge(),
      banners: CatalogPlatformModel.CollectionBanner().required(),
      created_by: CatalogPlatformModel.UserInfo(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_visible: Joi.boolean(),
      logo: CatalogPlatformModel.CollectionImage().required(),
      meta: Joi.any(),
      modified_by: CatalogPlatformModel.UserInfo(),
      name: Joi.string().allow("").required(),
      priority: Joi.number(),
      published: Joi.boolean(),
      query: Joi.array().items(CatalogPlatformModel.CollectionQuery()),
      seo: CatalogPlatformModel.SeoDetail(),
      slug: Joi.string().allow("").required(),
      sort_on: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow("").required(),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CreateSearchConfigurationRequest} */
  static CreateSearchConfigurationRequest() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      created_by: CatalogPlatformModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      is_proximity_enabled: Joi.boolean(),
      modified_by: CatalogPlatformModel.UserSerializer(),
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
      brand_distribution: CatalogPlatformModel.CatalogInsightBrand(),
      data: CatalogPlatformModel.CrossSellingData(),
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

  /** @returns {DepartmentCreateErrorResponse} */
  static DepartmentCreateErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  /** @returns {DepartmentCreateResponse} */
  static DepartmentCreateResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      uid: Joi.number().required(),
    });
  }

  /** @returns {DepartmentCreateUpdate} */
  static DepartmentCreateUpdate() {
    return Joi.object({
      _cls: Joi.string().allow(""),
      _custom_json: Joi.any(),
      is_active: Joi.boolean(),
      logo: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      platforms: Joi.any(),
      priority_order: Joi.number().required(),
      slug: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
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
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {DepartmentModel} */
  static DepartmentModel() {
    return Joi.object({
      _cls: Joi.string().allow(""),
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      created_by: CatalogPlatformModel.UserDetail(),
      created_on: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      logo: Joi.string().allow("").required(),
      modified_by: CatalogPlatformModel.UserDetail(),
      modified_on: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      priority_order: Joi.number().required(),
      slug: Joi.string().allow("").required(),
      synonyms: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number().required(),
      verified_by: CatalogPlatformModel.UserDetail(),
      verified_on: Joi.string().allow(""),
    });
  }

  /** @returns {DepartmentResponse} */
  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.Department()),
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

  /** @returns {DimensionResponse1} */
  static DimensionResponse1() {
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
      app_id: Joi.string().allow("").required(),
      config_id: Joi.string().allow(""),
      config_type: Joi.string().allow("").required(),
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

  /** @returns {FilerList} */
  static FilerList() {
    return Joi.object({
      display: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {GenderDetail} */
  static GenderDetail() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),
      description: Joi.string().allow(""),
      details: CatalogPlatformModel.AttributeMasterDetails(),
      enabled_for_end_consumer: Joi.boolean(),
      filters: CatalogPlatformModel.AttributeMasterFilter(),
      id: Joi.string().allow(""),
      is_nested: Joi.boolean(),
      logo: Joi.string().allow(""),
      meta: CatalogPlatformModel.AttributeMasterMeta(),
      name: Joi.string().allow(""),
      schema: CatalogPlatformModel.AttributeMaster(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {GetAddressSerializer} */
  static GetAddressSerializer() {
    return Joi.object({
      address_type: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }

  /** @returns {GetAllSizes} */
  static GetAllSizes() {
    return Joi.object({
      all_sizes: Joi.array().items(CatalogPlatformModel.AllSizes()),
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
      _custom_json: Joi.any(),
      app_id: Joi.string().allow(""),
      results: Joi.array().items(Joi.any()),
      uid: Joi.string().allow(""),
      words: Joi.array().items(Joi.string().allow("")),
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
      compare: Joi.any(),
      detail: Joi.any(),
      similar: Joi.any(),
      variant: Joi.any(),
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
      _schedule: Joi.any(),
      action: CatalogPlatformModel.Action(),
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

  /** @returns {GetConfigMetadataResponse} */
  static GetConfigMetadataResponse() {
    return Joi.object({
      condition: Joi.array().items(Joi.any()),
      data: Joi.array().items(Joi.any()).required(),
      values: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {GetConfigResponse} */
  static GetConfigResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),
      page: CatalogPlatformModel.PageResponseType().required(),
    });
  }

  /** @returns {GetDepartment} */
  static GetDepartment() {
    return Joi.object({
      created_by: CatalogPlatformModel.UserSerializer1(),
      created_on: Joi.string().allow(""),
      is_active: Joi.boolean(),
      item_type: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      modified_by: CatalogPlatformModel.UserSerializer1(),
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
      brand: CatalogPlatformModel.BrandMeta1(),
      company: CatalogPlatformModel.CompanyMeta1(),
      country_of_origin: Joi.string().allow(""),
      created_by: CatalogPlatformModel.UserSerializer1(),
      date_meta: CatalogPlatformModel.DateMeta(),
      dimension: CatalogPlatformModel.DimensionResponse1(),
      expiration_date: Joi.string().allow(""),
      id: Joi.string().allow(""),
      identifier: Joi.any(),
      inventory_updated_on: Joi.string().allow(""),
      is_set: Joi.boolean(),
      item_id: Joi.number(),
      manufacturer: CatalogPlatformModel.ManufacturerResponse1(),
      modified_by: CatalogPlatformModel.UserSerializer1(),
      platforms: Joi.any(),
      price: CatalogPlatformModel.PriceArticle(),
      quantities: CatalogPlatformModel.QuantitiesArticle(),
      return_config: CatalogPlatformModel.ReturnConfig2(),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      store: CatalogPlatformModel.ArticleStoreResponse(),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: Joi.any(),
      total_quantity: Joi.number(),
      trace_id: Joi.string().allow(""),
      track_inventory: Joi.boolean(),
      trader: Joi.array().items(CatalogPlatformModel.Trader2()),
      uid: Joi.string().allow(""),
      weight: CatalogPlatformModel.WeightResponse1(),
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
      code: Joi.string().allow("").required(),
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
      phone_number: Joi.string().allow("").required(),
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
      choice: Joi.string().allow("").required(),
      company_id: Joi.number(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      id: Joi.string().allow(""),
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
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {GetProducts} */
  static GetProducts() {
    return Joi.object({
      allow_remove: Joi.boolean(),
      auto_add_to_cart: Joi.boolean(),
      auto_select: Joi.boolean(),
      max_quantity: Joi.number(),
      min_quantity: Joi.number(),
      price: CatalogPlatformModel.Price(),
      product_details: CatalogPlatformModel.LimitedProductData(),
      product_uid: Joi.number(),
      sizes: Joi.array().items(CatalogPlatformModel.Size()),
    });
  }

  /** @returns {GetSearchConfigurationResponse} */
  static GetSearchConfigurationResponse() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      created_by: CatalogPlatformModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      is_proximity_enabled: Joi.boolean(),
      modified_by: CatalogPlatformModel.UserSerializer(),
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

  /** @returns {GTIN} */
  static GTIN() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),
      gtin_value: Joi.string().allow("").required(),
      primary: Joi.boolean(),
    });
  }

  /** @returns {Guide} */
  static Guide() {
    return Joi.object({
      meta: CatalogPlatformModel.Meta(),
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
      data: CatalogPlatformModel.HsnCodesObject(),
    });
  }

  /** @returns {HsnCodesListingResponseSchemaV2} */
  static HsnCodesListingResponseSchemaV2() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.HSNDataInsertV2()),
      page: CatalogPlatformModel.PageResponse(),
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
      tax_on_esp: Joi.boolean(),
      tax_on_mrp: Joi.boolean(),
      tax1: Joi.number(),
      tax2: Joi.number(),
      threshold1: Joi.number(),
      threshold2: Joi.number(),
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
      country_code: Joi.string().allow("").required(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      description: Joi.string().allow("").required(),
      hsn_code: Joi.string().allow("").required(),
      hsn_code_id: Joi.string().allow(""),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      reporting_hsn: Joi.string().allow("").required(),
      taxes: Joi.array().items(CatalogPlatformModel.TaxSlab()).required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {HsnUpsert} */
  static HsnUpsert() {
    return Joi.object({
      company_id: Joi.number().required(),
      hs2_code: Joi.string().allow("").allow(null).required(),
      hsn_code: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      tax_on_esp: Joi.boolean(),
      tax_on_mrp: Joi.boolean().required(),
      tax1: Joi.number().required(),
      tax2: Joi.number(),
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
      multivalues: Joi.boolean(),
    });
  }

  /** @returns {InventoryCreateRequest} */
  static InventoryCreateRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.string().allow("")),
      filters: CatalogPlatformModel.InventoryExportFilter().required(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow("").allow(null),
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
      quantity: CatalogPlatformModel.InventoryExportQuantityFilter(),
      store_ids: Joi.array().items(Joi.number()).required(),
      to_date: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryExportJob} */
  static InventoryExportJob() {
    return Joi.object({
      completed_on: Joi.string().allow(""),
      filters: CatalogPlatformModel.InventoryExportAdvanceOption(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.number().required(),
      status: Joi.string().allow(""),
      task_id: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryExportJobListResponse} */
  static InventoryExportJobListResponse() {
    return Joi.object({
      items: CatalogPlatformModel.InventoryJobDetailResponse().required(),
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

  /** @returns {InventoryExportRequest} */
  static InventoryExportRequest() {
    return Joi.object({
      brand: Joi.array().items(Joi.number()),
      store: Joi.array().items(Joi.number()),
      type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {InventoryExportResponse} */
  static InventoryExportResponse() {
    return Joi.object({
      created_by: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      filters: Joi.any(),
      modified_on: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.number().required(),
      status: Joi.string().allow(""),
      task_id: Joi.string().allow("").required(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryFailedReason} */
  static InventoryFailedReason() {
    return Joi.object({
      errors: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {InventoryJobDetailResponse} */
  static InventoryJobDetailResponse() {
    return Joi.object({
      cancelled_by: CatalogPlatformModel.UserDetail(),
      cancelled_on: Joi.string().allow(""),
      completed_on: Joi.string().allow(""),
      created_by: CatalogPlatformModel.UserDetail(),
      created_on: Joi.string().allow(""),
      filters: CatalogPlatformModel.InventoryJobFilters().required(),
      id: Joi.string().allow("").required(),
      modified_on: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.number().required(),
      status: Joi.string().allow(""),
      task_id: Joi.string().allow("").required(),
      type: Joi.string().allow("").allow(null),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {InventoryJobFilters} */
  static InventoryJobFilters() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")),
      from_date: Joi.string().allow(""),
      quantity: CatalogPlatformModel.InventoryExportQuantityFilter(),
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
      tags: Joi.array().items(Joi.string().allow("")),
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
      tags: Joi.array().items(Joi.string().allow("")),
      total_quantity: Joi.number().allow(null),
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
      company_id: Joi.number().required(),
      meta: Joi.any(),
      payload: Joi.array().items(CatalogPlatformModel.InventoryPayload()),
    });
  }

  /** @returns {InventoryResponse} */
  static InventoryResponse() {
    return Joi.object({
      currency: Joi.string().allow(""),
      identifiers: Joi.any(),
      inventory_updated_on: Joi.string().allow(""),
      item_id: Joi.number(),
      price: Joi.number(),
      price_effective: Joi.number(),
      price_transfer: Joi.number(),
      quantity: Joi.number(),
      sellable_quantity: Joi.number(),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      store: Joi.any(),
      uid: Joi.string().allow(""),
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
      brand: CatalogPlatformModel.BrandMeta().required(),
      company: CatalogPlatformModel.CompanyMeta().required(),
      country_of_origin: Joi.string().allow("").required(),
      created_by: Joi.string().allow("").allow(null),
      dimension: CatalogPlatformModel.DimensionResponse().required(),
      expiration_date: Joi.string().allow(""),
      fragile: Joi.boolean().required(),
      fynd_article_code: Joi.string().allow("").required(),
      fynd_item_code: Joi.string().allow("").required(),
      fynd_meta: Joi.any(),
      identifier: Joi.any().required(),
      is_active: Joi.boolean(),
      is_set: Joi.boolean(),
      item_id: Joi.number().required(),
      manufacturer: CatalogPlatformModel.ManufacturerResponse().required(),
      meta: Joi.any().allow(null),
      modified_by: Joi.string().allow("").allow(null),
      price: CatalogPlatformModel.PriceMeta().required(),
      quantities: CatalogPlatformModel.Quantities(),
      raw_meta: Joi.any(),
      return_config: CatalogPlatformModel.ReturnConfig1(),
      seller_identifier: Joi.string().allow("").required(),
      set: CatalogPlatformModel.InventorySet(),
      size: Joi.string().allow("").required(),
      stage: Joi.string().allow(""),
      store: CatalogPlatformModel.StoreMeta().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: Joi.any(),
      total_quantity: Joi.number().required(),
      trace_id: Joi.string().allow(""),
      track_inventory: Joi.boolean(),
      trader: Joi.array().items(CatalogPlatformModel.Trader1()),
      uid: Joi.string().allow("").required(),
      weight: CatalogPlatformModel.WeightResponse().required(),
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
      message: Joi.string().allow("").required(),
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

  /** @returns {LimitedProductData} */
  static LimitedProductData() {
    return Joi.object({
      attributes: Joi.any(),
      country_of_origin: Joi.string().allow(""),
      identifier: Joi.any(),
      images: Joi.array().items(Joi.string().allow("")),
      item_code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      price: Joi.any(),
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
      items: Joi.array().items(Joi.any()),
      page: Joi.any(),
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

  /** @returns {ManufacturerResponse} */
  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      is_default: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {ManufacturerResponse1} */
  static ManufacturerResponse1() {
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

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      headers: Joi.any(),
      unit: Joi.string().allow(""),
      values: Joi.array().items(Joi.any()),
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

  /** @returns {Metatags} */
  static Metatags() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.ApplicationItemSeoMetaTags()
      ),
      title: Joi.string().allow(""),
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

  /** @returns {OptinCompanyBrandDetailsView} */
  static OptinCompanyBrandDetailsView() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.CompanyBrandDetail()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {OptinCompanyDetail} */
  static OptinCompanyDetail() {
    return Joi.object({
      business_type: Joi.string().allow(""),
      company_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.number(),
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
      alt_text: Joi.any(),
      is_cod: Joi.boolean(),
      is_gift: Joi.boolean(),
      moq: CatalogPlatformModel.MOQData(),
      seo: CatalogPlatformModel.SEOData(),
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

  /** @returns {PageResponse} */
  static PageResponse() {
    return Joi.object({
      current: Joi.string().allow(""),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
    });
  }

  /** @returns {PageResponse1} */
  static PageResponse1() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
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
      action: CatalogPlatformModel.Action(),
      logo: CatalogPlatformModel.Media(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
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
      allow_remove: Joi.boolean(),
      auto_add_to_cart: Joi.boolean(),
      auto_select: Joi.boolean(),
      max_quantity: Joi.number().required(),
      min_quantity: Joi.number().required(),
      product_uid: Joi.number().required(),
    });
  }

  /** @returns {ProductBundleRequest} */
  static ProductBundleRequest() {
    return Joi.object({
      choice: Joi.string().allow("").required(),
      company_id: Joi.number(),
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
    });
  }

  /** @returns {ProductBundleUpdateRequest} */
  static ProductBundleUpdateRequest() {
    return Joi.object({
      choice: Joi.string().allow("").required(),
      company_id: Joi.number(),
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
    });
  }

  /** @returns {ProductConfigurationDownloads} */
  static ProductConfigurationDownloads() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),
      multivalue: Joi.boolean(),
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
      highlights: Joi.array().items(Joi.string().allow("").allow(null)),
      is_active: Joi.boolean(),
      is_dependent: Joi.boolean(),
      is_image_less_product: Joi.boolean(),
      is_set: Joi.boolean(),
      item_code: Joi.string().allow("").required(),
      item_type: Joi.string().allow("").required(),
      media: Joi.array().items(CatalogPlatformModel.Media()),
      multi_size: Joi.boolean(),
      name: Joi.string().allow("").required(),
      net_quantity: CatalogPlatformModel.NetQuantity(),
      no_of_boxes: Joi.number(),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      product_publish: CatalogPlatformModel.ProductPublish1(),
      requester: Joi.string().allow(""),
      return_config: CatalogPlatformModel.ReturnConfig().required(),
      short_description: Joi.string().allow(""),
      size_guide: Joi.string().allow(""),
      sizes: Joi.array().items(Joi.any()).required(),
      slug: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: CatalogPlatformModel.TaxIdentifier().required(),
      teaser_tag: CatalogPlatformModel.TeaserTag(),
      template_tag: Joi.string().allow("").required(),
      trader: Joi.array().items(CatalogPlatformModel.Trader()).required(),
      uid: Joi.number().allow(null),
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

  /** @returns {ProductDownloadsResponse} */
  static ProductDownloadsResponse() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.ProductTemplateExportResponse()
      ),
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
      value: Joi.any().required(),
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
    });
  }

  /** @returns {ProductListingPrice} */
  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogPlatformModel.Price1(),
      marked: CatalogPlatformModel.Price1(),
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

  /** @returns {ProductReturnConfigBaseSerializer} */
  static ProductReturnConfigBaseSerializer() {
    return Joi.object({
      returnable: Joi.boolean().required(),
      time: Joi.number().required(),
      unit: Joi.string().allow("").required(),
    });
  }

  /** @returns {ProductReturnConfigSerializer} */
  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),
      store_uid: Joi.number(),
    });
  }

  /** @returns {ProductSchemaV2} */
  static ProductSchemaV2() {
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
      attributes: Joi.array().items(Joi.string().allow("")),
      categories: Joi.array().items(Joi.string().allow("")),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      departments: Joi.array().items(Joi.string().allow("")),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_archived: Joi.boolean(),
      is_expirable: Joi.boolean().required(),
      is_physical: Joi.boolean().required(),
      logo: Joi.string().allow(""),
      modified_by: Joi.any(),
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
      completed_on: Joi.string().allow(""),
      created_by: CatalogPlatformModel.UserInfo1(),
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
    });
  }

  /** @returns {RawProductListingResponse} */
  static RawProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.RawProduct()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {ReturnConfig} */
  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean().required(),
      time: Joi.number().required(),
      unit: Joi.string().allow("").required(),
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

  /** @returns {SearchableAttribute} */
  static SearchableAttribute() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      priority: Joi.number().required(),
    });
  }

  /** @returns {SearchKeywordResult} */
  static SearchKeywordResult() {
    return Joi.object({
      query: Joi.any().required(),
      sort_on: Joi.string().allow("").required(),
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

  /** @returns {SEOData} */
  static SEOData() {
    return Joi.object({
      breadcrumbs: Joi.array().items(
        CatalogPlatformModel.ApplicationItemSeoBreadcrumbs()
      ),
      description: Joi.string().allow(""),
      meta_tags: Joi.array().items(CatalogPlatformModel.Metatags()),
      sitemap: CatalogPlatformModel.Sitemap(),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {SeoDetail} */
  static SeoDetail() {
    return Joi.object({
      breadcrumbs: Joi.array().items(
        CatalogPlatformModel.ApplicationItemSeoBreadcrumbs()
      ),
      description: Joi.string().allow(""),
      meta_tags: Joi.array().items(CatalogPlatformModel.Metatags()),
      sitemap: Joi.any(),
      title: Joi.string().allow(""),
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

  /** @returns {SingleProductResponse} */
  static SingleProductResponse() {
    return Joi.object({
      data: CatalogPlatformModel.ProductSchemaV2(),
    });
  }

  /** @returns {Sitemap} */
  static Sitemap() {
    return Joi.object({
      frequency: Joi.string().allow(""),
      priority: Joi.number(),
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
      active: Joi.boolean(),
      brand_id: Joi.number(),
      company_id: Joi.number(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      guide: Joi.any(),
      id: Joi.string().allow(""),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      subtitle: Joi.string().allow(""),
      tag: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {SizePromotionThreshold} */
  static SizePromotionThreshold() {
    return Joi.object({
      threshold_type: Joi.string().allow(""),
      threshold_value: Joi.number(),
    });
  }

  /** @returns {StoreAssignResponse} */
  static StoreAssignResponse() {
    return Joi.object({
      _id: Joi.string().allow(""),
      article_assignment: CatalogPlatformModel.ArticleAssignment1().required(),
      company_id: Joi.number(),
      group_id: Joi.string().allow(""),
      index: Joi.number(),
      item_id: Joi.number().required(),
      meta: Joi.any(),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      quantity: Joi.number().required(),
      s_city: Joi.string().allow(""),
      size: Joi.string().allow("").required(),
      status: Joi.boolean().required(),
      store_id: Joi.number(),
      store_pincode: Joi.number(),
      strategy_wise_listing: Joi.array().items(Joi.any()),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {StoreDetail} */
  static StoreDetail() {
    return Joi.object({
      additional_contacts: Joi.array().items(Joi.any()),
      address: Joi.any(),
      company_id: Joi.number(),
      created_on: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      documents: Joi.array().items(Joi.any()),
      manager: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      timing: Joi.any(),
      uid: Joi.number(),
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

  /** @returns {SuccessResponse1} */
  static SuccessResponse1() {
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
      attributes: Joi.array().items(Joi.string().allow("")),
      categories: Joi.array().items(Joi.string().allow("")),
      departments: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {TemplatesResponse} */
  static TemplatesResponse() {
    return Joi.object({
      items: CatalogPlatformModel.ProductTemplate(),
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

  /** @returns {TemplateValidationData} */
  static TemplateValidationData() {
    return Joi.object({
      global_validation: CatalogPlatformModel.GlobalValidation(),
      template_validation: Joi.any(),
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

  /** @returns {Trader2} */
  static Trader2() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateCollection} */
  static UpdateCollection() {
    return Joi.object({
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
      modified_by: Joi.string().allow("").allow(null),
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
    });
  }

  /** @returns {UpdatedResponse} */
  static UpdatedResponse() {
    return Joi.object({
      items_not_updated: Joi.array().items(Joi.number()),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateSearchConfigurationRequest} */
  static UpdateSearchConfigurationRequest() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      created_by: CatalogPlatformModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      is_proximity_enabled: Joi.boolean(),
      modified_by: CatalogPlatformModel.UserSerializer(),
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

  /** @returns {UserSerializer1} */
  static UserSerializer1() {
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

  /** @returns {WeightResponse1} */
  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),
      unit: Joi.string().allow(""),
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

      "order-status"
    );
  }
}
module.exports = CatalogPlatformModel;
