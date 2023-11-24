export = CatalogPlatformModel;
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
declare class CatalogPlatformModel {
}
declare namespace CatalogPlatformModel {
    export { Action, ActionPage, AllowSingleRequest, AllSizes, AppCatalogConfiguration, AppCategoryReturnConfig, AppCategoryReturnConfigResponse, AppConfiguration, AppConfigurationDetail, AppConfigurationsSort, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentJson, ApplicationDepartmentListingResponse, ApplicationItemMeta, ApplicationItemMOQ, ApplicationItemSEO, ApplicationItemSeoAction, ApplicationItemSeoBreadcrumbs, ApplicationItemSeoMetaTagItem, ApplicationItemSeoMetaTags, ApplicationProductListingResponse, ApplicationStoreJson, AppReturnConfigResponse, ArticleAssignment, ArticleAssignment1, ArticleQuery, ArticleStoreResponse, AssignStore, AssignStoreArticle, AttributeDetailsGroup, AttributeMaster, AttributeMasterDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterSerializer, AttributeSchemaRange, AutocompleteAction, AutoCompleteMedia, AutocompletePageAction, AutocompleteResult, BannerImage, BaseAppCategoryReturnConfig, BaseAppCategoryReturnConfigResponse, Brand, BrandItem, BrandListingResponse, BrandMeta, BrandMeta1, BulkAssetResponse, BulkHsnResponse, BulkHsnUpsert, BulkInventoryGet, BulkInventoryGetItems, BulkJob, BulkProductRequest, BulkResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CategoriesResponse, Category, CategoryCreateResponse, CategoryItems, CategoryListingResponse, CategoryMapping, CategoryMappingValues, CategoryRequestBody, CategoryResponse, CategoryUpdateResponse, Child, CollectionBadge, CollectionBanner, CollectionCreateResponse, CollectionDetailResponse, CollectionImage, CollectionItem, CollectionItemUpdate, CollectionListingFilter, CollectionListingFilterTag, CollectionListingFilterType, CollectionQuery, CollectionSchedule, CompanyBrandDetail, CompanyMeta, CompanyMeta1, CompanyOptIn, ConfigErrorResponse, ConfigSuccessResponse, ConfigurationBucketPoints, ConfigurationListing, ConfigurationListingFilter, ConfigurationListingFilterConfig, ConfigurationListingFilterValue, ConfigurationListingSort, ConfigurationListingSortConfig, ConfigurationProduct, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariant, ConfigurationProductVariantConfig, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, CreateCollection, CreateSearchConfigurationRequest, CreateSearchConfigurationResponse, CreateSearchKeyword, CreateUpdateAppReturnConfig, CrossSellingData, CrossSellingResponse, CustomOrder, DateMeta, DefaultKeyRequest, DeleteAppCategoryReturnConfig, DeleteResponse, DeleteSearchConfigurationResponse, Department, DepartmentCategoryTree, DepartmentCreateErrorResponse, DepartmentCreateResponse, DepartmentCreateUpdate, DepartmentErrorResponse, DepartmentIdentifier, DepartmentModel, DepartmentResponse, DepartmentsResponse, DimensionResponse, DimensionResponse1, Document, EntityConfiguration, ErrorResponse, FilerList, GenderDetail, GetAddressSerializer, GetAllSizes, GetAppCatalogConfiguration, GetAppCatalogEntityConfiguration, GetAutocompleteWordsData, GetAutocompleteWordsResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationDetailsSchemaListing, GetCatalogConfigurationMetaData, GetCollectionDetailNest, GetCollectionItemsResponse, GetCollectionListingResponse, GetCollectionQueryOptionResponse, GetCompanySerializer, GetConfigMetadataResponse, GetConfigResponse, GetDepartment, GetInventories, GetInventoriesResponse, GetLocationSerializer, GetOptInPlatform, GetProductBundleCreateResponse, GetProductBundleListingResponse, GetProductBundleResponse, GetProducts, GetSearchConfigurationResponse, GetSearchWordsData, GetSearchWordsDetailResponse, GetSearchWordsResponse, GlobalValidation, GTIN, Guide, Hierarchy, HsnCode, HsnCodesListingResponseSchemaV2, HsnCodesObject, HSNCodesResponse, HSNData, HSNDataInsertV2, HsnUpsert, Image, ImageUrls, InventoryBulkRequest, InventoryConfig, InventoryCreateRequest, InventoryExportAdvanceOption, InventoryExportFilter, InventoryExportJob, InventoryExportJobListResponse, InventoryExportQuantityFilter, InventoryExportRequest, InventoryExportResponse, InventoryFailedReason, InventoryJobDetailResponse, InventoryJobFilters, InventoryJobPayload, InventoryPage, InventoryPayload, InventoryRequest, InventoryRequestSchemaV2, InventoryResponse, InventoryResponseItem, InventoryResponsePaginated, InventorySellerIdentifierResponsePaginated, InventorySellerResponse, InventorySet, InventoryStockResponse, InventoryUpdateResponse, InventoryValidationResponse, InvoiceCredSerializer, InvoiceDetailsSerializer, InvSize, ItemQuery, Items, LimitedProductData, ListSizeGuide, LocationDayWiseSerializer, LocationIntegrationType, LocationListSerializer, LocationManagerSerializer, LocationTimingSerializer, Logo, ManufacturerResponse, ManufacturerResponse1, Media, Media1, Media2, Meta, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaFields, Metatags, MOQData, NetQuantity, NetQuantityResponse, NextSchedule, OptinCompanyBrandDetailsView, OptinCompanyDetail, OptinCompanyMetrics, OptInPostRequest, OptinStoreDetails, OwnerAppItemResponse, Page, PageResponse, PageResponse1, PageResponseType, Price, Price1, PriceArticle, PriceMeta, ProdcutTemplateCategoriesResponse, Product, ProductAttributesResponse, ProductBrand, ProductBulkAssets, ProductBulkRequest, ProductBulkRequestList, ProductBundleItem, ProductBundleRequest, ProductBundleUpdateRequest, ProductConfigurationDownloads, ProductCreateUpdateSchemaV2, ProductDetail, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductDownloadsResponse, ProductFilters, ProductFiltersKey, ProductFiltersValue, ProductListingDetail, ProductListingPrice, ProductListingResponse, ProductListingResponseV2, ProductPublish, ProductPublish1, ProductPublished, ProductReturnConfigBaseSerializer, ProductReturnConfigSerializer, ProductSchemaV2, ProductSize, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ProductSortOn, ProductTagsViewResponse, ProductTemplate, ProductTemplateDownloadsExport, ProductTemplateExportFilterRequest, ProductTemplateExportResponse, ProductVariants, ProductVariantsResponse, Properties, PTErrorResponse, Quantities, QuantitiesArticle, Quantity, QuantityBase, RawProduct, RawProductListingResponse, ReturnConfig, ReturnConfig1, ReturnConfig2, ReturnConfigResponse, SearchableAttribute, SearchKeywordResult, SecondLevelChild, SellerPhoneNumber, SEOData, SeoDetail, SetSize, SingleCategoryResponse, SingleProductResponse, Sitemap, Size, SizeDistribution, SizeGuideResponse, SizePromotionThreshold, StoreAssignResponse, StoreDetail, StoreMeta, SuccessResponse, SuccessResponse1, TaxIdentifier, TaxSlab, TeaserTag, TemplateDetails, TemplatesResponse, TemplatesValidationResponse, TemplateValidationData, ThirdLevelChild, Trader, Trader1, Trader2, UpdateCollection, UpdatedResponse, UpdateSearchConfigurationRequest, UpdateSearchConfigurationResponse, UserCommon, UserDetail, UserDetail1, UserInfo, UserInfo1, UserSerializer, UserSerializer1, UserSerializer2, UserSerializer3, ValidateIdentifier, ValidateProduct, ValidateSizeGuide, VerifiedBy, WeightResponse, WeightResponse1, PageType };
}
/** @returns {Action} */
declare function Action(): Action;
type Action = {
    page?: ActionPage;
    popup?: ActionPage;
    type?: string;
};
/** @returns {ActionPage} */
declare function ActionPage(): ActionPage;
type ActionPage = {
    params?: any;
    query?: any;
    type: PageType;
    url?: string;
};
/** @returns {AllowSingleRequest} */
declare function AllowSingleRequest(): AllowSingleRequest;
type AllowSingleRequest = {
    allow_single: boolean;
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
/** @returns {AppCatalogConfiguration} */
declare function AppCatalogConfiguration(): AppCatalogConfiguration;
type AppCatalogConfiguration = {
    app_id: string;
    config_id?: string;
    config_type: string;
    created_by?: any;
    created_on?: string;
    id?: string;
    listing?: ConfigurationListing;
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
     * - Return
     * configuration details
     */
    return_config: ProductReturnConfigBaseSerializer;
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
/** @returns {AppConfigurationDetail} */
declare function AppConfigurationDetail(): AppConfigurationDetail;
type AppConfigurationDetail = {
    app_id: string;
    attributes?: AttributeDetailsGroup[];
    is_active: boolean;
    is_default: boolean;
    logo?: string;
    name?: string;
    priority: number;
    slug: string;
    template_slugs?: string[];
};
/** @returns {AppConfigurationsSort} */
declare function AppConfigurationsSort(): AppConfigurationsSort;
type AppConfigurationsSort = {
    app_id: string;
    default_key: string;
    is_active: boolean;
    is_default: boolean;
    key: string;
    logo?: string;
    name?: string;
    priority: number;
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
    moq?: ApplicationItemMOQ;
    /**
     * - Search Engine Optimization information
     * for the item
     */
    seo?: ApplicationItemSEO;
    /**
     * - Size level
     * promotion limitation information for item
     */
    size_promotion_threshold?: SizePromotionThreshold;
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
};
/** @returns {ApplicationItemSeoAction} */
declare function ApplicationItemSeoAction(): ApplicationItemSeoAction;
type ApplicationItemSeoAction = {
    page?: any;
    type?: string;
};
/** @returns {ApplicationItemSeoBreadcrumbs} */
declare function ApplicationItemSeoBreadcrumbs(): ApplicationItemSeoBreadcrumbs;
type ApplicationItemSeoBreadcrumbs = {
    action?: ApplicationItemSeoAction[];
    url?: string;
};
/** @returns {ApplicationItemSeoMetaTagItem} */
declare function ApplicationItemSeoMetaTagItem(): ApplicationItemSeoMetaTagItem;
type ApplicationItemSeoMetaTagItem = {
    key?: string;
    value?: string;
};
/** @returns {ApplicationItemSeoMetaTags} */
declare function ApplicationItemSeoMetaTags(): ApplicationItemSeoMetaTags;
type ApplicationItemSeoMetaTags = {
    items?: ApplicationItemSeoMetaTagItem[];
    title?: string;
};
/** @returns {ApplicationProductListingResponse} */
declare function ApplicationProductListingResponse(): ApplicationProductListingResponse;
type ApplicationProductListingResponse = {
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    operators?: any;
    page: Page;
    sort_on?: ProductSortOn[];
};
/** @returns {ApplicationStoreJson} */
declare function ApplicationStoreJson(): ApplicationStoreJson;
type ApplicationStoreJson = {
    _custom_json: any;
};
/** @returns {AppReturnConfigResponse} */
declare function AppReturnConfigResponse(): AppReturnConfigResponse;
type AppReturnConfigResponse = {
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
     * - User details
     */
    created_by?: any;
    /**
     * - User details
     */
    modified_by?: any;
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
/** @returns {AutocompleteAction} */
declare function AutocompleteAction(): AutocompleteAction;
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
/** @returns {AutoCompleteMedia} */
declare function AutoCompleteMedia(): AutoCompleteMedia;
type AutoCompleteMedia = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
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
    page?: PageResponse;
};
/** @returns {Brand} */
declare function Brand(): Brand;
type Brand = {
    logo?: Logo;
    name?: string;
    uid?: number;
};
/** @returns {BrandItem} */
declare function BrandItem(): BrandItem;
type BrandItem = {
    action?: Action;
    banners?: ImageUrls;
    departments?: string[];
    discount?: string;
    logo?: Media2;
    name?: string;
    slug?: string;
    uid?: number;
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
/** @returns {BulkHsnResponse} */
declare function BulkHsnResponse(): BulkHsnResponse;
type BulkHsnResponse = {
    /**
     * - Flag indicating the success status of the
     * bulk HSN operation.
     */
    success?: boolean;
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
/** @returns {BulkJob} */
declare function BulkJob(): BulkJob;
type BulkJob = {
    cancelled?: number;
    cancelled_records?: any[];
    company_id: number;
    /**
     * - The user who created the item.
     */
    created_by?: UserInfo1;
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
    created_by?: UserInfo1;
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
     * - It is the mapping of the
     * category in different marketplaces.
     */
    marketplaces?: CategoryMapping;
    /**
     * - It is the details of the media such as banner and logo..
     */
    media?: Media1;
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
     * - It is the category id mapping for
     * ajio platform.
     */
    ajio?: CategoryMappingValues;
    /**
     * - It is the category id mapping
     * for facebook platform.
     */
    facebook?: CategoryMappingValues;
    /**
     * - It is the category id mapping
     * for google platform.
     */
    google?: CategoryMappingValues;
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
     * - It is the mapping of the
     * category in different marketplaces.
     */
    marketplaces?: CategoryMapping;
    /**
     * - It is the details of the media such as banner and logo..
     */
    media?: Media1;
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
/** @returns {CollectionCreateResponse} */
declare function CollectionCreateResponse(): CollectionCreateResponse;
type CollectionCreateResponse = {
    _schedule?: any;
    allow_facets?: boolean;
    allow_sort?: boolean;
    app_id?: string;
    badge?: any;
    banners?: ImageUrls;
    cron?: any;
    description?: string;
    is_active?: boolean;
    logo?: BannerImage;
    meta?: any;
    name?: string;
    priority?: number;
    query?: CollectionQuery[];
    slug?: string;
    sort_on?: string;
    tag?: string[];
    type?: string;
    uid?: string;
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
    aspect_ratio: string;
    url: string;
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
    value: any[];
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
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
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
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
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
};
/** @returns {CreateAutocompleteWordsResponse} */
declare function CreateAutocompleteWordsResponse(): CreateAutocompleteWordsResponse;
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    app_id?: string;
    results?: any[];
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
    app_id: string;
    badge?: CollectionBadge;
    banners: CollectionBanner;
    created_by?: UserInfo;
    description?: string;
    is_active?: boolean;
    is_visible?: boolean;
    logo: CollectionImage;
    meta?: any;
    modified_by?: UserInfo;
    name: string;
    priority?: number;
    published?: boolean;
    query?: CollectionQuery[];
    seo?: SeoDetail;
    slug: string;
    sort_on?: string;
    tags?: string[];
    type: string;
    visible_facets_keys?: string[];
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
     * - The user who created the search
     * configuration.
     */
    created_by?: UserSerializer;
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
     * - The user who modified the search
     * configuration.
     */
    modified_by?: UserSerializer;
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
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
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
/** @returns {DepartmentCreateErrorResponse} */
declare function DepartmentCreateErrorResponse(): DepartmentCreateErrorResponse;
type DepartmentCreateErrorResponse = {
    error?: string;
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
    synonyms?: string[];
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
    created_by?: UserDetail;
    /**
     * - Timestamp of the creation of the document
     */
    created_on: string;
    /**
     * - Whether the department is currently active
     */
    is_active?: boolean;
    /**
     * - The URL of the department's logo
     */
    logo: string;
    /**
     * - User details of the last modifier of
     * the document
     */
    modified_by?: UserDetail;
    /**
     * - Timestamp of the last modification of the document
     */
    modified_on: string;
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
    slug: string;
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
    verified_by?: UserDetail;
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
    app_id: string;
    config_id?: string;
    config_type: string;
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    product?: GetCatalogConfigurationDetailsProduct;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    code?: string;
    error?: string;
    message?: string;
    meta?: any;
    status?: number;
};
/** @returns {FilerList} */
declare function FilerList(): FilerList;
type FilerList = {
    display?: string;
    value?: string;
};
/** @returns {GenderDetail} */
declare function GenderDetail(): GenderDetail;
type GenderDetail = {
    departments?: string[];
    description?: string;
    details?: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    filters?: AttributeMasterFilter;
    id?: string;
    is_nested?: boolean;
    logo?: string;
    meta?: AttributeMasterMeta;
    name?: string;
    schema?: AttributeMaster;
    slug?: string;
};
/** @returns {GetAddressSerializer} */
declare function GetAddressSerializer(): GetAddressSerializer;
type GetAddressSerializer = {
    address_type?: string;
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    country_code?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    pincode?: number;
    state?: string;
};
/** @returns {GetAllSizes} */
declare function GetAllSizes(): GetAllSizes;
type GetAllSizes = {
    all_sizes?: AllSizes[];
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
    _custom_json?: any;
    app_id?: string;
    results?: any[];
    uid?: string;
    words?: string[];
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
    compare?: any;
    detail?: any;
    similar?: any;
    variant?: any;
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
/** @returns {GetConfigMetadataResponse} */
declare function GetConfigMetadataResponse(): GetConfigMetadataResponse;
type GetConfigMetadataResponse = {
    condition?: any[];
    data: any[];
    values?: any[];
};
/** @returns {GetConfigResponse} */
declare function GetConfigResponse(): GetConfigResponse;
type GetConfigResponse = {
    data: any[];
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
    code: string;
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
    phone_number: string;
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
    choice: string;
    company_id?: number;
    created_by?: any;
    created_on?: string;
    id?: string;
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
    slug?: string;
};
/** @returns {GetProducts} */
declare function GetProducts(): GetProducts;
type GetProducts = {
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    max_quantity?: number;
    min_quantity?: number;
    price?: Price;
    product_details?: LimitedProductData;
    product_uid?: number;
    sizes?: Size[];
};
/** @returns {GetSearchConfigurationResponse} */
declare function GetSearchConfigurationResponse(): GetSearchConfigurationResponse;
type GetSearchConfigurationResponse = {
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
     * - The user who created the search
     * configuration.
     */
    created_by?: UserSerializer;
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
     * - The user who modified the search
     * configuration.
     */
    modified_by?: UserSerializer;
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
/** @returns {GTIN} */
declare function GTIN(): GTIN;
type GTIN = {
    gtin_type: string;
    gtin_value: string;
    primary?: boolean;
};
/** @returns {Guide} */
declare function Guide(): Guide;
type Guide = {
    meta?: Meta;
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
    data?: HsnCodesObject;
};
/** @returns {HsnCodesListingResponseSchemaV2} */
declare function HsnCodesListingResponseSchemaV2(): HsnCodesListingResponseSchemaV2;
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
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
     * - Flag indicating whether tax is applicable on ESP.
     */
    tax_on_esp?: boolean;
    /**
     * - Flag indicating whether tax is applicable on MRP.
     */
    tax_on_mrp?: boolean;
    /**
     * - The first tax rate.
     */
    tax1?: number;
    /**
     * - The second tax rate.
     */
    tax2?: number;
    /**
     * - The threshold for the first tax rate.
     */
    threshold1?: number;
    /**
     * - The threshold for the second tax rate.
     */
    threshold2?: number;
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
     * - Country code.
     */
    country_code: string;
    /**
     * - Details of the user who created the HSN data.
     */
    created_by?: any;
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
     * - Details of the user who last modified the HSN data.
     */
    modified_by?: any;
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
     * - Flag indicating whether tax is applicable on ESP.
     */
    tax_on_esp?: boolean;
    /**
     * - Flag indicating whether tax is applicable on MRP.
     */
    tax_on_mrp: boolean;
    /**
     * - The first tax rate.
     */
    tax1: number;
    /**
     * - The second tax rate.
     */
    tax2?: number;
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
    multivalues?: boolean;
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
     * - This filters that are applied for
     * the export of the inventory.
     */
    filters: InventoryExportFilter;
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
     * - The quantity range
     * that needs to be exported.
     */
    quantity?: InventoryExportQuantityFilter;
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
/** @returns {InventoryExportJob} */
declare function InventoryExportJob(): InventoryExportJob;
type InventoryExportJob = {
    /**
     * - Completion datetime of the job.
     */
    completed_on?: string;
    /**
     * - The filters that needs
     * to be exported.
     */
    filters?: InventoryExportAdvanceOption;
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
/** @returns {InventoryExportJobListResponse} */
declare function InventoryExportJobListResponse(): InventoryExportJobListResponse;
type InventoryExportJobListResponse = {
    /**
     * - This is the list/history of
     * all the jobs.
     */
    items: InventoryJobDetailResponse;
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
/** @returns {InventoryExportRequest} */
declare function InventoryExportRequest(): InventoryExportRequest;
type InventoryExportRequest = {
    brand?: number[];
    store?: number[];
    type?: string;
};
/** @returns {InventoryExportResponse} */
declare function InventoryExportResponse(): InventoryExportResponse;
type InventoryExportResponse = {
    /**
     * - The user that created the job.
     */
    created_by?: string;
    /**
     * - Creation datetime of the job
     */
    created_on?: string;
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
};
/** @returns {InventoryJobDetailResponse} */
declare function InventoryJobDetailResponse(): InventoryJobDetailResponse;
type InventoryJobDetailResponse = {
    /**
     * - This is the user detail of the user
     * who cancelled the job.
     */
    cancelled_by?: UserDetail;
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
    created_by?: UserDetail;
    /**
     * - This is the timestamp of the creation for this job.
     */
    created_on?: string;
    /**
     * - This is the filter criteria applied
     * for the export job.
     */
    filters: InventoryJobFilters;
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
     * - The quantity range
     * that needs to be exported.
     */
    quantity?: InventoryExportQuantityFilter;
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
     * - The ID of the company.
     */
    company_id: number;
    /**
     * - Additional metadata for the inventory request.
     */
    meta?: any;
    /**
     * - The list of inventory payloads.
     */
    payload?: InventoryPayload[];
};
/** @returns {InventoryResponse} */
declare function InventoryResponse(): InventoryResponse;
type InventoryResponse = {
    currency?: string;
    identifiers?: any;
    inventory_updated_on?: string;
    item_id?: number;
    price?: number;
    price_effective?: number;
    price_transfer?: number;
    quantity?: number;
    sellable_quantity?: number;
    seller_identifier?: string;
    size?: string;
    store?: any;
    uid?: string;
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
    brand: BrandMeta;
    /**
     * - The metadata of the company.
     */
    company: CompanyMeta;
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
    dimension: DimensionResponse;
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
    manufacturer: ManufacturerResponse;
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
    price: PriceMeta;
    quantities?: Quantities;
    /**
     * - The raw metadata of the article.
     */
    raw_meta?: any;
    /**
     * - The return configuration of the article.
     */
    return_config?: ReturnConfig1;
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
    store: StoreMeta;
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
    weight: WeightResponse;
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
    message: string;
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
/** @returns {LimitedProductData} */
declare function LimitedProductData(): LimitedProductData;
type LimitedProductData = {
    attributes?: any;
    country_of_origin?: string;
    identifier?: any;
    images?: string[];
    item_code?: string;
    name?: string;
    price?: any;
    quantity?: number;
    short_description?: string;
    sizes?: string[];
    slug?: string;
    uid?: number;
};
/** @returns {ListSizeGuide} */
declare function ListSizeGuide(): ListSizeGuide;
type ListSizeGuide = {
    items?: any[];
    page?: any;
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
    headers?: any;
    unit?: string;
    values?: any[];
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
/** @returns {Metatags} */
declare function Metatags(): Metatags;
type Metatags = {
    items?: ApplicationItemSeoMetaTags[];
    title?: string;
};
/** @returns {MOQData} */
declare function MOQData(): MOQData;
type MOQData = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
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
/** @returns {OptinCompanyBrandDetailsView} */
declare function OptinCompanyBrandDetailsView(): OptinCompanyBrandDetailsView;
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
/** @returns {OptinCompanyDetail} */
declare function OptinCompanyDetail(): OptinCompanyDetail;
type OptinCompanyDetail = {
    business_type?: string;
    company_type?: string;
    name?: string;
    uid?: number;
};
/** @returns {OptinCompanyMetrics} */
declare function OptinCompanyMetrics(): OptinCompanyMetrics;
type OptinCompanyMetrics = {
    brand?: number;
    company?: string;
    store?: number;
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
/** @returns {OptinStoreDetails} */
declare function OptinStoreDetails(): OptinStoreDetails;
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
/** @returns {OwnerAppItemResponse} */
declare function OwnerAppItemResponse(): OwnerAppItemResponse;
type OwnerAppItemResponse = {
    alt_text?: any;
    is_cod?: boolean;
    is_gift?: boolean;
    moq?: MOQData;
    seo?: SEOData;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
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
    action?: Action;
    logo?: Media;
    name?: string;
    uid?: number;
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
/** @returns {ProductBulkRequestList} */
declare function ProductBulkRequestList(): ProductBulkRequestList;
type ProductBulkRequestList = {
    items?: ProductBulkRequest[];
    page?: Page;
};
/** @returns {ProductBundleItem} */
declare function ProductBundleItem(): ProductBundleItem;
type ProductBundleItem = {
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    max_quantity: number;
    min_quantity: number;
    product_uid: number;
};
/** @returns {ProductBundleRequest} */
declare function ProductBundleRequest(): ProductBundleRequest;
type ProductBundleRequest = {
    choice: string;
    company_id?: number;
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
};
/** @returns {ProductBundleUpdateRequest} */
declare function ProductBundleUpdateRequest(): ProductBundleUpdateRequest;
type ProductBundleUpdateRequest = {
    choice: string;
    company_id?: number;
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
};
/** @returns {ProductConfigurationDownloads} */
declare function ProductConfigurationDownloads(): ProductConfigurationDownloads;
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
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
    requester?: string;
    return_config: ReturnConfig;
    short_description?: string;
    size_guide?: string;
    sizes: any[];
    slug: string;
    tags?: string[];
    tax_identifier: TaxIdentifier;
    teaser_tag?: TeaserTag;
    template_tag: string;
    trader: Trader[];
    uid?: number;
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
/** @returns {ProductDownloadsResponse} */
declare function ProductDownloadsResponse(): ProductDownloadsResponse;
type ProductDownloadsResponse = {
    /**
     * - The items of the job.
     */
    items?: ProductTemplateExportResponse[];
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
    value: any;
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
};
/** @returns {ProductListingPrice} */
declare function ProductListingPrice(): ProductListingPrice;
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
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
/** @returns {ProductReturnConfigSerializer} */
declare function ProductReturnConfigSerializer(): ProductReturnConfigSerializer;
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
/** @returns {ProductSchemaV2} */
declare function ProductSchemaV2(): ProductSchemaV2;
type ProductSchemaV2 = {
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
    created_on?: string;
    departments?: string[];
    description?: string;
    is_active?: boolean;
    is_archived?: boolean;
    is_expirable: boolean;
    is_physical: boolean;
    logo?: string;
    modified_by?: any;
    modified_on?: string;
    name?: string;
    slug: string;
    tag?: string;
};
/** @returns {ProductTemplateDownloadsExport} */
declare function ProductTemplateDownloadsExport(): ProductTemplateDownloadsExport;
type ProductTemplateDownloadsExport = {
    /**
     * - This is the
     * filters of the file for the export.
     */
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
    /**
     * - Completion datetime of the job
     */
    completed_on?: string;
    /**
     * - The user that created the job.
     */
    created_by?: UserInfo1;
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
/** @returns {PTErrorResponse} */
declare function PTErrorResponse(): PTErrorResponse;
type PTErrorResponse = {
    code?: string;
    errors?: any;
    message?: string;
    meta?: any;
    status?: number;
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
};
/** @returns {RawProductListingResponse} */
declare function RawProductListingResponse(): RawProductListingResponse;
type RawProductListingResponse = {
    items?: RawProduct[];
    page?: Page;
};
/** @returns {ReturnConfig} */
declare function ReturnConfig(): ReturnConfig;
type ReturnConfig = {
    returnable: boolean;
    time: number;
    unit: string;
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
/** @returns {SearchKeywordResult} */
declare function SearchKeywordResult(): SearchKeywordResult;
type SearchKeywordResult = {
    query: any;
    sort_on: string;
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
/** @returns {SEOData} */
declare function SEOData(): SEOData;
type SEOData = {
    breadcrumbs?: ApplicationItemSeoBreadcrumbs[];
    description?: string;
    meta_tags?: Metatags[];
    sitemap?: Sitemap;
    title?: string;
};
/** @returns {SeoDetail} */
declare function SeoDetail(): SeoDetail;
type SeoDetail = {
    breadcrumbs?: ApplicationItemSeoBreadcrumbs[];
    description?: string;
    meta_tags?: Metatags[];
    sitemap?: any;
    title?: string;
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
/** @returns {SingleProductResponse} */
declare function SingleProductResponse(): SingleProductResponse;
type SingleProductResponse = {
    data?: ProductSchemaV2;
};
/** @returns {Sitemap} */
declare function Sitemap(): Sitemap;
type Sitemap = {
    frequency?: string;
    priority?: number;
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
    active?: boolean;
    brand_id?: number;
    company_id?: number;
    created_by?: any;
    created_on?: string;
    guide?: any;
    id?: string;
    modified_by?: any;
    modified_on?: string;
    name?: string;
    subtitle?: string;
    tag?: string;
    title?: string;
};
/** @returns {SizePromotionThreshold} */
declare function SizePromotionThreshold(): SizePromotionThreshold;
type SizePromotionThreshold = {
    threshold_type?: string;
    threshold_value?: number;
};
/** @returns {StoreAssignResponse} */
declare function StoreAssignResponse(): StoreAssignResponse;
type StoreAssignResponse = {
    _id?: string;
    article_assignment: ArticleAssignment1;
    company_id?: number;
    group_id?: string;
    index?: number;
    item_id: number;
    meta?: any;
    price_effective?: number;
    price_marked?: number;
    quantity: number;
    s_city?: string;
    size: string;
    status: boolean;
    store_id?: number;
    store_pincode?: number;
    strategy_wise_listing?: any[];
    uid?: string;
};
/** @returns {StoreDetail} */
declare function StoreDetail(): StoreDetail;
type StoreDetail = {
    additional_contacts?: any[];
    address?: any;
    company_id?: number;
    created_on?: string;
    display_name?: string;
    documents?: any[];
    manager?: any;
    modified_on?: string;
    name?: string;
    store_code?: string;
    store_type?: string;
    timing?: any;
    uid?: number;
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
/** @returns {TemplatesResponse} */
declare function TemplatesResponse(): TemplatesResponse;
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
/** @returns {TemplatesValidationResponse} */
declare function TemplatesValidationResponse(): TemplatesValidationResponse;
type TemplatesValidationResponse = {
    data?: TemplateValidationData;
    template_details?: TemplateDetails;
};
/** @returns {TemplateValidationData} */
declare function TemplateValidationData(): TemplateValidationData;
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
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
};
/** @returns {UpdatedResponse} */
declare function UpdatedResponse(): UpdatedResponse;
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
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
     * - The user who created the search
     * configuration.
     */
    created_by?: UserSerializer;
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
     * - The user who modified the search
     * configuration.
     */
    modified_by?: UserSerializer;
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
/**
 * Enum: PageType Used By: Catalog
 *
 * @returns {PageType}
 */
declare function PageType(): PageType;
type PageType = "about-us" | "addresses" | "blog" | "brands" | "cards" | "cart" | "categories" | "brand" | "category" | "collection" | "collections" | "contact-us" | "external" | "faq" | "freshchat" | "home" | "notification-settings" | "orders" | "page" | "policy" | "product" | "product-request" | "products" | "profile" | "profile-order-shipment" | "profile-basic" | "profile-company" | "profile-emails" | "profile-phones" | "rate-us" | "refer-earn" | "settings" | "shared-cart" | "tnc" | "track-order" | "wishlist" | "sections" | "form" | "cart-delivery" | "cart-payment" | "cart-review" | "login" | "register" | "shipping-policy" | "return-policy" | "order-status";
