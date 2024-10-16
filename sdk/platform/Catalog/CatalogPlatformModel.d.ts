export = CatalogPlatformModel;
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
 * @typedef AllowSingleRequestSchema
 * @property {boolean} allow_single
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
 * @property {ProductReturnConfigBaseSchema} return_config - Return configuration details
 */
/**
 * @typedef AppCategoryReturnConfigResponseSchema
 * @property {string} [app_id] - Channel identifier
 * @property {number} [category_id] - Unique identifer of L3 category
 * @property {string} [logo]
 * @property {string} [name] - Name of L3 category
 * @property {ProductReturnConfigBaseSchema} [return_config]
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
 * @typedef ApplicationDepartmentListingResponseSchema
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
 * @property {ApplicationItemMOQ} [moq] - Minimum Order Quantity information for the item
 * @property {ApplicationItemSEO} [seo] - Search Engine Optimization information
 *   for the item
 * @property {SizePromotionThreshold} [size_promotion_threshold] - Size level
 *   promotion limitation information for item
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
 * @typedef ApplicationProductsSchema
 * @property {Object} [attributes] - Additional attributes of the product, such
 *   as custom properties or features.
 * @property {ProductBrand} [brand]
 * @property {string} [color]
 * @property {string} [description] - A detailed description of the product.
 * @property {string} [discount] - The discount applied to the product.
 * @property {boolean} [has_variant] - Indicates whether the product has
 *   variants, such as different sizes or colors.
 * @property {string[]} [highlights] - Key highlights of the product.
 * @property {string} image_nature - The nature of the product image, indicating
 *   if it's the default or a standard image.
 * @property {string} item_code - A unique code assigned to the product item at
 *   company and brand level.
 * @property {string} item_type - The type of the product, defining its nature.
 * @property {Media[]} [medias] - A list of media items associated with the
 *   product, such as images or videos.
 * @property {string} name - The name of the product.
 * @property {ProductListingPrice} [price]
 * @property {string} [product_online_date] - The date and time when the product
 *   becomes available online.
 * @property {Object} [promo_meta] - Metadata related to any promotions
 *   associated with the product.
 * @property {number} [rating] - The average rating of the product, typically
 *   based on customer reviews.
 * @property {number} [rating_count] - The total number of ratings the product
 *   has received.
 * @property {boolean} [sellable] - Indicates whether the product is available for sale.
 * @property {string} [short_description] - A brief description of the product.
 * @property {string[]} [similars] - A list of similar products.
 * @property {string} slug - A URL-friendly string representing the product.
 * @property {Object} [teaser_tag] - A teaser tag object providing short
 *   promotional information about the product.
 * @property {string[]} [tryouts] - A list of tryout options or samples
 *   available for the product.
 * @property {string} [type] - The type or category of the product.
 * @property {number} uid - A unique identifier for the product.
 * @property {number} [popularity] - A numerical value indicating the popularity
 *   of the product.
 * @property {number} brand_uid - The unique identifier for the brand associated
 *   with the product.
 * @property {number} category_uid - The unique identifier for the category to
 *   which the product belongs.
 * @property {number} [verification_status] - The verification status of the
 *   product, typically represented as an integer.
 * @property {string} [channel_identifier] - The identifier for the sales
 *   channel through which the product is sold.
 * @property {string} [category_slug] - A URL-friendly string representing the
 *   product's category.
 * @property {string} [size_guide] - A guide or chart providing size information
 *   for the product.
 * @property {number[]} l3_categories - A list of L3 category IDs of the product.
 * @property {number[]} [store_ids] - A list of store IDs where the product is available.
 * @property {number[]} [company_ids] - A list of company IDs associated with the product.
 * @property {number[]} departments - A list of department IDs where the product
 *   is categorized.
 * @property {string[]} [tags] - A list of tags or keywords associated with the product.
 * @property {string[]} [l3_category_names] - A list of names of L3 categories
 *   of the product.
 * @property {string[]} [sizes] - A list of available sizes for the product.
 * @property {string[]} [product_group_tag] - Tags that group the product with
 *   other similar products.
 * @property {boolean} multi_size - Indicates whether the product is available
 *   in multiple sizes.
 * @property {boolean} is_gift - Indicates whether the product can be considered
 *   as a gift.
 * @property {boolean} is_cod - Indicates whether the product is eligible for
 *   cash on delivery (COD).
 * @property {boolean} is_dependent - Indicates whether the product depends on
 *   another product.
 * @property {boolean} is_available - Indicates whether the product is currently
 *   available for purchase.
 * @property {ApplicationItemMOQ} moq
 * @property {ApplicationItemSEO} seo
 * @property {Object} [variants] - An object containing details about the
 *   product variants.
 * @property {Object} [variant_media] - Media items specific to the product variants.
 * @property {Object} [variant_group] - A group identifier for products that are
 *   variants of one another.
 * @property {MultiCategoriesSchema[]} [multi_categories]
 * @property {string} [template_tag] - Tag used for categorizing or templating purposes.
 * @property {Object} [net_quantity] - Net quantity details for the product.
 * @property {CustomOrder} [custom_order]
 * @property {string} country_of_origin - Country where the product is
 *   manufactured or sourced from.
 * @property {Object} [_custom_json] - Custom JSON data associated with the product.
 * @property {string[]} [identifiers] - Identifiers associated with the product.
 * @property {number} [item_id] - Unique identifier for the item.
 * @property {CustomMeta[]} [_custom_meta] - Custom meta associated with the product.
 * @property {number} [discount_percentage] - The discount applied to the
 *   product in percentage.
 */
/**
 * @typedef ApplicationProductListingResponseSchema
 * @property {ProductFilters[]} [filters]
 * @property {ApplicationProductsSchema[]} [items]
 * @property {Object} [operators]
 * @property {Page} page
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef ApplicationStoreJson
 * @property {Object} _custom_json
 */
/**
 * @typedef AppReturnConfigResponseSchema
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
 * @typedef ArticleStoreResponseSchema
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
 * @typedef AttributeMasterSchema
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
 * @property {AppCategoryReturnConfig[]} data - Category level return config details
 */
/**
 * @typedef BaseAppCategoryReturnConfigResponseSchema
 * @property {AppCategoryReturnConfigResponseSchema[]} [data]
 * @property {PageResponseSchema} [page]
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
 * @typedef BrandListingResponseSchema
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
 * @typedef BulkAssetResponseSchema
 * @property {Items[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BulkHsnResponseSchema
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
 * @typedef FailedRecord
 * @property {string} [identifiers]
 * @property {string} [message]
 */
/**
 * @typedef BulkInventoryGetItems
 * @property {number} [cancelled]
 * @property {string[]} [cancelled_records]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {number} [failed]
 * @property {FailedRecord[]} [failed_records]
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
 * @typedef BulkProductRequestSchema
 * @property {string} batch_id
 * @property {number} company_id
 * @property {Object[]} data
 * @property {string} template_tag
 */
/**
 * @typedef BulkResponseSchema
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
 * @typedef CatalogInsightResponseSchema
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CatalogInsightItem} [item]
 */
/**
 * @typedef CategoriesResponseSchema
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
 * @typedef CategoryItems
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {Child[]} [childs]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef CategoryListingResponseSchema
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
 * @typedef CategoryResponseSchema
 * @property {Category[]} [items]
 * @property {Page} [page]
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
 * @typedef CollectionCreateResponseSchema
 * @property {string} [uid]
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
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef CollectionDetailResponseSchema
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
 * @typedef ConfigErrorResponseSchema
 * @property {string} message
 */
/**
 * @typedef ConfigSuccessResponseSchema
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
 * @typedef CreateAutocompleteWordsResponseSchema
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
 * @typedef CreateSearchConfigurationRequestSchema
 * @property {string} application_id - The application id where custom search
 *   configuration is set
 * @property {number} company_id - The company id where custom search configuration is set
 * @property {UserSchema} [created_by] - The user who created the search configuration.
 * @property {string} [created_on] - The date and time when the search
 *   configuration was created.
 * @property {boolean} [is_proximity_enabled] - Flag indicating if proximity
 *   search is enabled for this attribute.
 * @property {UserSchema} [modified_by] - The user who modified the search configuration.
 * @property {string} [modified_on] - The date and time when the search
 *   configuration was last modified.
 * @property {number} [proximity] - Proximity distance configuration
 * @property {SearchableAttribute[]} [searchable_attributes] - The searchable
 *   attributes defined on the application.
 */
/**
 * @typedef CreateSearchConfigurationResponseSchema
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
 * @property {string} return_config_level - Return configurtion Level
 *   category|product|no-return
 */
/**
 * @typedef CrossSellingData
 * @property {number} [articles]
 * @property {number} [products]
 */
/**
 * @typedef CrossSellingResponseSchema
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CrossSellingData} [data]
 */
/**
 * @typedef CustomOrder
 * @property {string} [manufacturing_time_unit] - Unit of time for manufacturing
 *   (e.g., days, weeks).
 * @property {boolean} is_custom_order - Indicates if the product is available
 *   for custom orders.
 * @property {number} [manufacturing_time] - Time required for manufacturing in
 *   the specified unit.
 */
/**
 * @typedef DateMeta
 * @property {string} [added_on_store]
 * @property {string} [created_on]
 * @property {string} [inventory_updated_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef DefaultKeyRequestSchema
 * @property {string} default_key
 */
/**
 * @typedef DeleteAppCategoryReturnConfig
 * @property {number[]} category_ids - List of category_ids to be deleted.
 */
/**
 * @typedef DeleteResponseSchema
 * @property {string} [message]
 */
/**
 * @typedef DeleteSearchConfigurationResponseSchema
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
 * @typedef DepartmentErrorResponseSchema
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
 * @typedef DepartmentResponseSchema
 * @property {Department[]} [items]
 */
/**
 * @typedef DepartmentsResponseSchema
 * @property {GetDepartment[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef DimensionResponseSchema
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
 * @typedef ErrorResponseSchema
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
 * @property {NetQuantityResponseSchema} [net_quantity]
 * @property {number} [no_of_boxes]
 * @property {string} [pending]
 * @property {string} [primary_color]
 * @property {string[]} [product_group_tag]
 * @property {ProductPublished} [product_publish]
 * @property {ReturnConfigResponseSchema} [return_config]
 * @property {string} [short_description]
 * @property {string} [size_guide]
 * @property {Object[]} [sizes]
 * @property {string} [slug]
 * @property {string} [stage]
 * @property {string[]} [tags]
 * @property {TaxIdentifier} [tax_identifier]
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
 * @typedef RawProductListingResponseSchema
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
 * @typedef GetAddressSchema
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [address_type]
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
 * @typedef GetAutocompleteWordsResponseSchema
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
 * @property {MetaDataListingResponseSchema} [listing]
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
 * @typedef GetCollectionItemsResponseSchema
 * @property {ProductFilters[]} [filters]
 * @property {ApplicationProductsSchema[]} [items]
 * @property {Page} [page]
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef GetCollectionListingResponseSchema
 * @property {CollectionListingFilter} [filters]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetCollectionQueryOptionResponseSchema
 * @property {ProductFilters[]} [filters]
 * @property {Object} operators
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef GetCompanySchema
 * @property {GetAddressSchema[]} [addresses]
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
 * @typedef GetConfigMetadataResponseSchema
 * @property {ConditionItem[]} [condition]
 * @property {DataItem[]} data
 * @property {Page} [page]
 * @property {GetConfigMetadataValues} [values]
 */
/**
 * @typedef GetConfigMetadataValues
 * @property {ValueTypeItem[]} [type]
 * @property {SortTypeItem[]} [sort]
 */
/**
 * @typedef GetConfigResponseSchema
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
 * @property {Identifier} [identifier]
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
 * @property {ArticleStoreResponseSchema} [store]
 * @property {string[]} [tags]
 * @property {TaxIdentifier} [tax_identifier]
 * @property {number} [total_quantity]
 * @property {string} [trace_id]
 * @property {boolean} [track_inventory]
 * @property {Trader2[]} [trader]
 * @property {string} [uid]
 * @property {WeightResponse1} [weight]
 */
/**
 * @typedef GetInventoriesResponseSchema
 * @property {GetInventories[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetLocationSchema
 * @property {Object} [_custom_json]
 * @property {GetAddressSchema} address
 * @property {string} code
 * @property {GetCompanySchema} [company]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {UserSerializer3} [created_by]
 * @property {string} [created_on]
 * @property {string} display_name
 * @property {Document[]} [documents]
 * @property {InvoiceDetailsSchema} [gst_credentials]
 * @property {LocationIntegrationType} [integration_type]
 * @property {LocationManagerSchema} [manager]
 * @property {UserSerializer3} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string[]} [notification_emails]
 * @property {string} phone_number
 * @property {ProductReturnConfigSchema} [product_return_config]
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {LocationDayWiseSchema[]} [timing]
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
 * @typedef GetProductBundleCreateResponseSchema
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
 * @typedef GetProductBundleListingResponseSchema
 * @property {GetProductBundleCreateResponseSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetProductBundleResponseSchema
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
 * @typedef GetCollectionDetailResponseSchema
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
 * @typedef GetQueryFiltersKeysResponseSchema
 * @property {ProductFiltersKeysOnly[]} [filters]
 * @property {Object} operators
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef GetQueryFiltersResponseSchema
 * @property {ProductFilters[]} [filters]
 * @property {Object} operators
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef GetCollectionItemsResponseSchemaV2
 * @property {ProductDetailV2[]} [items]
 * @property {Page1} [page]
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
 */
/**
 * @typedef CollectionQuerySchemaV2
 * @property {string} attribute - The attribute of the collection query
 * @property {string} op - The operation to be performed on the attribute of the
 *   collection query
 * @property {Object[]} value - The value of the attribute of the collection query
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
 * @typedef GetSearchConfigurationResponseSchema
 * @property {string} application_id - The application id where custom search
 *   configuration is set
 * @property {number} company_id - The company id where custom search configuration is set
 * @property {UserSchema} [created_by] - The user who created the search configuration.
 * @property {string} [created_on] - The date and time when the search
 *   configuration was created.
 * @property {boolean} [is_proximity_enabled] - Flag indicating if proximity
 *   search is enabled for this attribute.
 * @property {UserSchema} [modified_by] - The user who modified the search configuration.
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
 * @typedef GetSearchWordsDetailResponseSchema
 * @property {GetSearchWordsData} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetSearchWordsResponseSchema
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
 * @typedef HSNCodesResponseSchema
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
 * @property {PageResponseSchema} [page]
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
 * @property {string} [hs2_code] - The HS2 code.
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
 * @typedef InventoryBulkRequestSchema
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
 * @typedef InventoryCreateRequestSchema
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
 * @typedef InventoryExportJobListResponseSchema
 * @property {InventoryJobDetailResponseSchema} items - This is the list/history
 *   of all the jobs.
 * @property {Page} [page]
 */
/**
 * @typedef InventoryExportQuantityFilter
 * @property {number} [max] - The maximum quantity that needs to be exported.
 * @property {number} [min] - The minimum quantity that needs to be exported.
 * @property {string} operators - Condition for the quantity that needs to be exported.
 */
/**
 * @typedef InventoryExportRequestSchema
 * @property {number[]} [brand]
 * @property {number[]} [store]
 * @property {string} [type]
 */
/**
 * @typedef InventoryExportResponseSchema
 * @property {string} [created_by] - The user that created the job.
 * @property {string} [created_on] - Creation datetime of the job
 * @property {Filters} [filters]
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
 * @typedef InventoryJobDetailResponseSchema
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
 * @typedef InventoryRequestSchema
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
 * @typedef InventoryResponseSchema
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
 * @property {InventoryResponseSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponseSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef InventorySellerResponseSchema
 * @property {Object} [_custom_json] - Custom JSON data for the article.
 * @property {string} [added_on_store] - The date and time when the article was
 *   added to the store.
 * @property {BrandMeta} brand - The metadata of the brand.
 * @property {CompanyMeta} company - The metadata of the company.
 * @property {string} country_of_origin - The country of origin of the article.
 * @property {string} [created_by] - The user who created the article.
 * @property {DimensionResponseSchema} dimension - The dimensions of the article.
 * @property {string} [expiration_date] - The expiration date of the article.
 * @property {boolean} fragile - Indicates if the article is fragile.
 * @property {string} fynd_article_code - The Fynd article code.
 * @property {string} fynd_item_code - The Fynd item code.
 * @property {Object} [fynd_meta] - The Fynd metadata of the article.
 * @property {Object} identifier - The identifier of the article.
 * @property {boolean} [is_active] - Indicates if the article is active.
 * @property {boolean} [is_set]
 * @property {number} item_id - The ID of the item.
 * @property {ManufacturerResponseSchema} manufacturer - The manufacturer of the article.
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
 * @property {TaxIdentifier} [tax_identifier]
 * @property {number} total_quantity - The total quantity of the article.
 * @property {string} [trace_id] - The trace ID of the article.
 * @property {boolean} [track_inventory] - Indicates if the inventory is tracked
 *   for the article.
 * @property {Trader1[]} [trader] - The traders associated with the article.
 * @property {string} uid - The unique identifier of the article.
 * @property {WeightResponseSchema} weight - The weight of the article.
 */
/**
 * @typedef InventorySet
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {SizeDistribution} size_distribution
 */
/**
 * @typedef InventoryStockResponseSchema
 * @property {Object[]} [items]
 * @property {InventoryPage} page
 */
/**
 * @typedef InventoryUpdateResponseSchema
 * @property {InventoryResponseItem[]} [items]
 * @property {string} message - It is the success message of the inventory update.
 */
/**
 * @typedef InventoryValidationResponseSchema
 * @property {Object} [data]
 * @property {string} [message]
 */
/**
 * @typedef InvoiceCredSchema
 * @property {boolean} [enabled]
 * @property {string} [password]
 * @property {string} [username]
 */
/**
 * @typedef InvoiceDetailsSchema
 * @property {InvoiceCredSchema} [e_invoice]
 * @property {InvoiceCredSchema} [e_waybill]
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
 * @typedef LocationDayWiseSchema
 * @property {LocationTimingSchema} [closing]
 * @property {boolean} open
 * @property {LocationTimingSchema} [opening]
 * @property {string} weekday
 */
/**
 * @typedef LocationIntegrationType
 * @property {string} [inventory]
 */
/**
 * @typedef LocationListSchema
 * @property {GetLocationSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LocationManagerSchema
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 */
/**
 * @typedef LocationTimingSchema
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
 * @typedef ManufacturerResponseSchema
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
 * @property {Object} [meta] - A metadata object containing additional
 *   information about the media, such as dimensions, format, or other relevant details.
 * @property {string} [type] - The type of media.
 * @property {string} url - The URL where the media can be accessed.
 * @property {string} [alt] - The alternative text for the media, used for
 *   accessibility and as a fallback when the media cannot be displayed.
 * @property {string} [thumbnail] - The URL of the thumbnail image, typically a
 *   smaller or lower-resolution version of the main media.
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
 * @typedef MetaDataListingFilterMetaResponseSchema
 * @property {string} [display]
 * @property {string[]} [filter_types]
 * @property {string} [key]
 * @property {Object[]} [units]
 */
/**
 * @typedef MetaDataListingFilterResponseSchema
 * @property {MetaDataListingFilterMetaResponseSchema[]} [data]
 */
/**
 * @typedef MetaDataListingResponseSchema
 * @property {MetaDataListingFilterResponseSchema} filter
 * @property {MetaDataListingSortResponseSchema} sort
 */
/**
 * @typedef MetaDataListingSortMetaResponseSchema
 * @property {string} [display]
 * @property {string} [key]
 */
/**
 * @typedef MetaDataListingSortResponseSchema
 * @property {MetaDataListingSortMetaResponseSchema[]} [data]
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
 * @typedef NetQuantityResponseSchema
 * @property {string} [unit]
 * @property {number} [value]
 */
/**
 * @typedef NextSchedule
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef OptInPostRequestSchema
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
 * @typedef OptinStoreDetails
 * @property {StoreDetail[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OwnerAppItemResponseSchema
 * @property {Object} [alt_text]
 * @property {boolean} [is_cod]
 * @property {boolean} [is_gift]
 * @property {MOQData} [moq]
 * @property {SEOData} [seo]
 * @property {Object} [_custom_json] - Custom JSON data for the item
 * @property {MetaFields[]} [_custom_meta] - Custom meta fields for the item
 */
/**
 * @typedef PTErrorResponseSchema
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
 */
/**
 * @typedef PageResponseSchema
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
 * @typedef ProdcutTemplateCategoriesResponseSchema
 * @property {CategoriesResponseSchema[]} [items]
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
 * @property {NetQuantityResponseSchema} [net_quantity]
 * @property {number} [no_of_boxes]
 * @property {string} [pending]
 * @property {string} [primary_color]
 * @property {string[]} [product_group_tag]
 * @property {ProductPublished} [product_publish]
 * @property {ReturnConfigResponseSchema} [return_config]
 * @property {string} [short_description]
 * @property {string} [size_guide]
 * @property {Object[]} [sizes]
 * @property {string} [slug]
 * @property {string} [stage]
 * @property {string[]} [tags]
 * @property {TaxIdentifier} [tax_identifier]
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
 * @typedef ProductAttributesResponseSchema
 * @property {AttributeMasterSchema[]} items
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
 * @typedef ProductBulkRequestSchema
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
 * @property {Object} [items]
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
 * @typedef ProductBundleRequestSchema
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
 * @typedef ProductBundleUpdateRequestSchema
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
 * @typedef ProductDownloadsResponseSchema
 * @property {ProductTemplateExportResponseSchema[]} [items] - The items of the job.
 * @property {Page} [page]
 */
/**
 * @typedef ProductFilters
 * @property {ProductFiltersKey} key
 * @property {ProductFiltersValue[]} values
 */
/**
 * @typedef GetQueryFiltersValuesResponseSchema
 * @property {ProductFiltersValue[]} values
 * @property {Page} page
 */
/**
 * @typedef ProductFiltersKeysOnly
 * @property {ProductFiltersKey} key
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
 * @typedef ProductListingResponseSchema
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
 * @typedef ProductReturnConfigSchema
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */
/**
 * @typedef ProductReturnConfigBaseSchema
 * @property {boolean} returnable - Boolean Flag for item returnable
 * @property {number} time - Valid return time for an item
 * @property {string} unit - Unit of return config days|hours
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
 * @property {NetQuantityResponseSchema} [net_quantity]
 * @property {number} [no_of_boxes]
 * @property {string} [pending]
 * @property {string} [primary_color]
 * @property {string[]} [product_group_tag]
 * @property {ProductPublish} [product_publish]
 * @property {ReturnConfigResponseSchema} [return_config]
 * @property {string} [short_description]
 * @property {string} [size_guide]
 * @property {Object[]} [sizes]
 * @property {string} [slug]
 * @property {string} [stage]
 * @property {string[]} [tags]
 * @property {TaxIdentifier} [tax_identifier]
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
 * @typedef ProductSizeDeleteDataResponseSchema
 * @property {number} [company_id]
 * @property {number} [item_id]
 * @property {string} [size]
 */
/**
 * @typedef ProductSizeDeleteResponseSchema
 * @property {ProductSizeDeleteDataResponseSchema} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef ProductSortOn
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef ProductTagsViewResponseSchema
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
 * @property {ProductTemplateExportFilterRequestSchema} [filters] - This is the
 *   filters of the file for the export.
 * @property {string[]} [notification_emails] - The list of the emails to be
 *   notified after the completion of the job.
 * @property {string} [type] - This is the type of the file for the export.
 */
/**
 * @typedef ProductTemplateExportFilterRequestSchema
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
 * @typedef ProductTemplateExportResponseSchema
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
 * @typedef ProductVariantsResponseSchema
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
 * @property {string} [updated_at]
 */
/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
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
 * @typedef ReturnConfigResponseSchema
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
 * @property {ApplicationItemSeoAction[]} [action]
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
 * @property {ApplicationItemSeoMetaTagItem[]} [items]
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
 * @typedef SeoDetail
 * @property {string} [description]
 * @property {string} [title]
 * @property {Object} [sitemap]
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
 * @typedef SingleCategoryResponseSchema
 * @property {Category} [data]
 */
/**
 * @typedef SingleProductResponseSchema
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
 * @typedef SizeGuideResponseSchema
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
 * @typedef StoreAssignResponseSchema
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
 * @typedef SuccessResponseSchema
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
 * @typedef TemplatesResponseSchema
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TemplatesValidationResponseSchema
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
 * @typedef UpdateSearchConfigurationRequestSchema
 * @property {string} application_id - The application id where custom search
 *   configuration is set
 * @property {number} company_id - The company id where custom search configuration is set
 * @property {UserSchema} [created_by] - The user who created the search configuration.
 * @property {string} [created_on] - The date and time when the search
 *   configuration was created.
 * @property {boolean} [is_proximity_enabled] - Flag indicating if proximity
 *   search is enabled for this attribute.
 * @property {UserSchema} [modified_by] - The user who modified the search configuration.
 * @property {string} [modified_on] - The date and time when the search
 *   configuration was last modified.
 * @property {number} [proximity] - Proximity distance configuration
 * @property {SearchableAttribute[]} [searchable_attributes] - The searchable
 *   attributes defined on the application.
 */
/**
 * @typedef UpdateSearchConfigurationResponseSchema
 * @property {boolean} [success]
 */
/**
 * @typedef CreateMarketplaceOptinResponseSchema
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
 * @typedef UserSchema
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
 * @typedef WeightResponseSchema
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
 * @property {CreatedBy} [created_by]
 * @property {Object} [created_on]
 * @property {string} [opt_level]
 * @property {number} [company_id]
 * @property {CreatedBy} [modified_by]
 * @property {number[]} [store_ids]
 * @property {Object} [modified_on]
 * @property {string} [platforms]
 * @property {string} [_id]
 */
/**
 * @typedef GetAllMarketplaces
 * @property {Marketplaces[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef UpdateMarketplaceOptinRequestSchema
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {boolean} [enabled]
 * @property {string} [opt_level]
 * @property {string} [platform]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef UpdateMarketplaceOptinResponseSchema
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {string} [app_id]
 * @property {boolean} [enabled]
 * @property {string} [opt_level]
 * @property {string} [platform]
 * @property {number[]} [store_ids]
 * @property {CreatedBy} [created_by]
 * @property {CreatedBy} [modified_by]
 */
/**
 * @typedef Identifier
 * @property {string} [ean] - The European Article Number (EAN) of the item.
 * @property {string} [sku_code] - The Stock Keeping Unit (SKU) code of the item.
 * @property {string} [alu] - The Alternative Lookup Product of the item.
 * @property {string} [upc] - Universal Product Code of the item.
 * @property {string} [isbn] - ISBN (International Standard Book Number) is a
 *   unique identifier used globally to identify books and other non-periodical
 *   publications
 */
/**
 * @typedef Filters
 * @property {string[]} [brands] - The list of all the brands selected.
 * @property {string} [from_date] - The modified-on date from which the data
 *   needs to be exported.
 * @property {InventoryExportQuantityFilter} [quantity] - The quantity range
 *   that needs to be exported.
 * @property {string[]} [stores] - The list of all the stores selected.
 * @property {string} [to_date] - The modified-on date till when the data needs
 *   to be exported.
 */
/**
 * @typedef ActionPage
 * @property {Object} [params] - Parameters that should be considered in path.
 * @property {Object} [query] - Query parameter if any to be added to the action.
 * @property {string} [url] - The URL for the action.
 * @property {PageType} type
 */
/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
 * @property {Price1} [selling]
 */
/**
 * @typedef Price1
 * @property {CurrencyCodeEnum} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef MultiCategoriesSchema
 * @property {number} [l1] - The ID of the Level 1 (L1) category of the product.
 * @property {number} [l2] - The ID of the Level 2 (L2) category of the product.
 * @property {number} [l3] - The ID of the Level 3 (L3) category of the product.
 * @property {boolean} [is_active] - Indicates whether the L3 category of the
 *   product is currently active.
 * @property {number} [department] - The department associated with the L3
 *   category of the product.
 */
/**
 * @typedef CustomMeta
 * @property {string} key - The key of the metadata. Should be a non-empty
 *   string and length should not exceed 30 characters.
 * @property {string} value - The value of the metadata. Should be a non-empty
 *   string and length should not exceed 100 characters.
 */
/**
 * @typedef {| "browntape_v2"
 *   | "easyops"
 *   | "holisol"
 *   | "logic"
 *   | "tcnss"
 *   | "increff"
 *   | "liberty"
 *   | "browntape"
 *   | "easyecom"
 *   | "major_brands"
 *   | "jiopos"
 *   | "jockey"
 *   | "omsguru"
 *   | "pulse"
 *   | "sellerware"
 *   | "unicommerce"
 *   | "ethos"
 *   | "sarasuole"
 *   | "vajor"
 *   | "vinculum"
 *   | "jiomart_pos"
 *   | "rbl_sap"
 *   | "ginesys-pos"
 *   | "fyndpos"
 *   | "jiopos_openapi"
 *   | "jiopos_hamleys"
 *   | "westelm"
 *   | "rbl_sap_furniture"
 *   | "vinculum_v2"
 *   | "wizapp"} order
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
/** @typedef {"INR" | "USD" | "EUR"} CurrencyCodeEnum */
declare class CatalogPlatformModel {
}
declare namespace CatalogPlatformModel {
    export { Action, AllSizes, AllowSingleRequestSchema, AppCatalogConfiguration, AppCategoryReturnConfig, AppCategoryReturnConfigResponseSchema, AppConfiguration, AppConfigurationDetail, AppConfigurationsSort, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentJson, ApplicationDepartmentListingResponseSchema, ApplicationItemMOQ, ApplicationItemMeta, ApplicationItemSeoSitemap, ApplicationItemSEO, ApplicationProductsSchema, ApplicationProductListingResponseSchema, ApplicationStoreJson, AppReturnConfigResponseSchema, ArticleAssignment, ArticleAssignment1, ArticleQuery, ArticleStoreResponseSchema, AssignStore, AssignStoreArticle, AttributeDetailsGroup, AttributeMaster, AttributeMasterDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterSchema, AttributeSchemaRange, AutoCompleteMedia, AutocompleteAction, AutocompletePageAction, AutocompleteResult, BannerImage, BaseAppCategoryReturnConfig, BaseAppCategoryReturnConfigResponseSchema, Brand, BrandItem, ApplicationCategoryListingSchema, ApplicationCategoryListingItemSchema, ApplicationBrandListingSchema, ApplicationBrandListingItemSchema, BrandListingResponseSchema, BrandMeta, BrandMeta1, BulkAssetResponseSchema, BulkHsnResponseSchema, BulkHsnUpsert, BulkInventoryGet, FailedRecord, BulkInventoryGetItems, BulkProductJob, BulkJob, BulkProductRequestSchema, BulkResponseSchema, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponseSchema, CategoriesResponseSchema, Category, CategoryItems, CategoryListingResponseSchema, CategoryMapping, CategoryMappingValues, CategoryResponseSchema, Child, CollectionBadge, CollectionBanner, CollectionCreateResponseSchema, CollectionDetailResponseSchema, CollectionImage, CollectionItem, CollectionItemUpdate, CollectionListingFilter, CollectionListingFilterTag, CollectionListingFilterType, CollectionQuery, CollectionSchedule, CompanyBrandDetail, CompanyMeta, CompanyMeta1, CompanyOptIn, ConfigErrorResponseSchema, ConfigSuccessResponseSchema, ConfigurationBucketPoints, ConfigurationListing, ConfigurationListingFilter, ConfigurationListingFilterConfig, ConfigurationListingFilterValue, ConfigurationListingSort, ConfigurationListingSortConfig, ConfigurationProduct, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariant, ConfigurationProductVariantConfig, CreateAutocompleteKeyword, CreateAutocompleteWordsResponseSchema, CreateCollection, CreateSearchConfigurationRequestSchema, CreateSearchConfigurationResponseSchema, CreateSearchKeyword, CreateUpdateAppReturnConfig, CrossSellingData, CrossSellingResponseSchema, CustomOrder, DateMeta, DefaultKeyRequestSchema, DeleteAppCategoryReturnConfig, DeleteResponseSchema, DeleteSearchConfigurationResponseSchema, Department, DepartmentCategoryTree, DepartmentErrorResponseSchema, DepartmentIdentifier, DepartmentResponseSchema, DepartmentsResponseSchema, DimensionResponseSchema, DimensionResponse1, Document, EntityConfiguration, ErrorResponseSchema, FilerList, RawProduct, RawProductListingResponseSchema, GTIN, AttributeDetail, GetAddressSchema, GetAllSizes, GetAppCatalogConfiguration, GetAppCatalogEntityConfiguration, GetAutocompleteWordsData, GetAutocompleteWordsResponseSchema, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationDetailsSchemaListing, GetCatalogConfigurationMetaData, GetCollectionDetailNest, GetCollectionItemsResponseSchema, GetCollectionListingResponseSchema, GetCollectionQueryOptionResponseSchema, GetCompanySchema, ConditionItem, DataItem, ValueTypeItem, SortTypeItem, GetConfigMetadataResponseSchema, GetConfigMetadataValues, GetConfigResponseSchema, GetDepartment, GetInventories, GetInventoriesResponseSchema, GetLocationSchema, GetOptInPlatform, GetProductBundleCreateResponseSchema, GetProductBundleListingResponseSchema, GetProductBundleResponseSchema, GetProducts, GetCollectionDetailResponseSchema, CommonResponseSchemaCollection, GetQueryFiltersKeysResponseSchema, GetQueryFiltersResponseSchema, GetCollectionItemsResponseSchemaV2, Page1, CollectionItemSchemaV2, CollectionItemUpdateSchema, CollectionQuerySchemaV2, ProductDetailV2, GetSearchConfigurationResponseSchema, GetSearchWordsData, GetSearchWordsDetailResponseSchema, GetSearchWordsResponseSchema, GlobalValidation, Guide, HSNCodesResponseSchema, HSNData, HSNDataInsertV2, Hierarchy, HsnCode, HsnCodesListingResponseSchemaV2, HsnCodesObject, HsnUpsert, Image, ImageUrls, InvSize, InventoryBulkRequestSchema, InventoryConfig, InventoryCreateRequestSchema, InventoryExportAdvanceOption, InventoryExportFilter, InventoryExportJob, InventoryExportJobListResponseSchema, InventoryExportQuantityFilter, InventoryExportRequestSchema, InventoryExportResponseSchema, InventoryFailedReason, InventoryJobDetailResponseSchema, InventoryJobFilters, InventoryJobPayload, InventoryPage, InventoryPayload, InventoryRequestSchema, InventoryRequestSchemaV2, InventoryResponseSchema, InventoryResponseItem, InventoryResponsePaginated, InventorySellerIdentifierResponsePaginated, InventorySellerResponseSchema, InventorySet, InventoryStockResponseSchema, InventoryUpdateResponseSchema, InventoryValidationResponseSchema, InvoiceCredSchema, InvoiceDetailsSchema, ItemQuery, Items, LimitedProductData, ListSizeGuide, LocationDayWiseSchema, LocationIntegrationType, LocationListSchema, LocationManagerSchema, LocationTimingSchema, Logo, MOQData, ManufacturerResponseSchema, ManufacturerResponse1, Media, Media1, Media2, Meta, MetaDataListingFilterMetaResponseSchema, MetaDataListingFilterResponseSchema, MetaDataListingResponseSchema, MetaDataListingSortMetaResponseSchema, MetaDataListingSortResponseSchema, MetaFields, NetQuantity, NetQuantityResponseSchema, NextSchedule, OptInPostRequestSchema, OptinCompanyBrandDetailsView, OptinCompanyDetail, OptinCompanyMetrics, OptinStoreDetails, OwnerAppItemResponseSchema, PTErrorResponseSchema, Page, PageResponseSchema, PageResponseType, Price, PriceArticle, PriceMeta, ProdcutTemplateCategoriesResponseSchema, Product, ProductAttributesResponseSchema, ProductBrand, ProductBulkAssets, ProductBulkRequestSchema, ProductBulkRequestList, ProductBundleItem, ProductBundleRequestSchema, ProductBundleUpdateRequestSchema, ProductConfigurationDownloads, ProductCreateUpdateSchemaV2, ProductDetail, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductDownloadsResponseSchema, ProductFilters, GetQueryFiltersValuesResponseSchema, ProductFiltersKeysOnly, ProductFiltersKey, ProductFiltersValue, ProductListingResponseSchema, ProductListingResponseV2, ProductPublish, ProductPublish1, ProductPublished, ProductReturnConfigSchema, ProductReturnConfigBaseSchema, ProductSchemaV2, ProductSize, ProductSizeDeleteDataResponseSchema, ProductSizeDeleteResponseSchema, ProductSortOn, ProductTagsViewResponseSchema, ProductTemplate, ProductTemplateDownloadsExport, ProductTemplateExportFilterRequestSchema, ProductTemplateExportResponseSchema, ProductVariants, ProductVariantsResponseSchema, Properties, Quantities, QuantitiesArticle, Quantity, QuantityBase, ReturnConfig, ReturnConfig1, ReturnConfig2, ReturnConfigResponseSchema, Sitemap, ApplicationItemSeoAction, ApplicationItemSeoBreadcrumbs, ApplicationItemSeoMetaTagItem, ApplicationItemSeoMetaTags, Metatags, SizePromotionThreshold, SEOData, SearchKeywordResult, SearchableAttribute, SecondLevelChild, SellerPhoneNumber, SeoDetail, SetSize, SingleCategoryResponseSchema, SingleProductResponseSchema, Size, SizeDistribution, SizeGuideResponseSchema, StoreAssignResponseSchema, StoreDetail, StoreMeta, SuccessResponseSchema, SuccessResponse1, TaxIdentifier, TaxSlab, TeaserTag, TemplateDetails, TemplateValidationData, TemplatesResponseSchema, TemplatesValidationResponseSchema, ThirdLevelChild, Trader, Trader1, Trader2, UpdateCollection, UpdateSearchConfigurationRequestSchema, UpdateSearchConfigurationResponseSchema, CreateMarketplaceOptinResponseSchema, UserCommon, UserDetail, UserDetail1, UserInfo, UserInfo1, UserSchema, UserSerializer1, UserSerializer2, UserSerializer3, ValidateIdentifier, ValidateProduct, ValidateSizeGuide, VerifiedBy, WeightResponseSchema, WeightResponse1, CreatedBy, ModifiedBy, Marketplaces, GetAllMarketplaces, UpdateMarketplaceOptinRequestSchema, UpdateMarketplaceOptinResponseSchema, Identifier, Filters, ActionPage, ProductListingPrice, Price1, MultiCategoriesSchema, CustomMeta, order, PageType, CurrencyCodeEnum };
}
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
/** @returns {AllowSingleRequestSchema} */
declare function AllowSingleRequestSchema(): AllowSingleRequestSchema;
type AllowSingleRequestSchema = {
    allow_single: boolean;
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
     * - Return configuration details
     */
    return_config: ProductReturnConfigBaseSchema;
};
/** @returns {AppCategoryReturnConfigResponseSchema} */
declare function AppCategoryReturnConfigResponseSchema(): AppCategoryReturnConfigResponseSchema;
type AppCategoryReturnConfigResponseSchema = {
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
    return_config?: ProductReturnConfigBaseSchema;
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
/** @returns {ApplicationDepartmentListingResponseSchema} */
declare function ApplicationDepartmentListingResponseSchema(): ApplicationDepartmentListingResponseSchema;
type ApplicationDepartmentListingResponseSchema = {
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
/** @returns {ApplicationProductsSchema} */
declare function ApplicationProductsSchema(): ApplicationProductsSchema;
type ApplicationProductsSchema = {
    /**
     * - Additional attributes of the product, such
     * as custom properties or features.
     */
    attributes?: any;
    brand?: ProductBrand;
    color?: string;
    /**
     * - A detailed description of the product.
     */
    description?: string;
    /**
     * - The discount applied to the product.
     */
    discount?: string;
    /**
     * - Indicates whether the product has
     * variants, such as different sizes or colors.
     */
    has_variant?: boolean;
    /**
     * - Key highlights of the product.
     */
    highlights?: string[];
    /**
     * - The nature of the product image, indicating
     * if it's the default or a standard image.
     */
    image_nature: string;
    /**
     * - A unique code assigned to the product item at
     * company and brand level.
     */
    item_code: string;
    /**
     * - The type of the product, defining its nature.
     */
    item_type: string;
    /**
     * - A list of media items associated with the
     * product, such as images or videos.
     */
    medias?: Media[];
    /**
     * - The name of the product.
     */
    name: string;
    price?: ProductListingPrice;
    /**
     * - The date and time when the product
     * becomes available online.
     */
    product_online_date?: string;
    /**
     * - Metadata related to any promotions
     * associated with the product.
     */
    promo_meta?: any;
    /**
     * - The average rating of the product, typically
     * based on customer reviews.
     */
    rating?: number;
    /**
     * - The total number of ratings the product
     * has received.
     */
    rating_count?: number;
    /**
     * - Indicates whether the product is available for sale.
     */
    sellable?: boolean;
    /**
     * - A brief description of the product.
     */
    short_description?: string;
    /**
     * - A list of similar products.
     */
    similars?: string[];
    /**
     * - A URL-friendly string representing the product.
     */
    slug: string;
    /**
     * - A teaser tag object providing short
     * promotional information about the product.
     */
    teaser_tag?: any;
    /**
     * - A list of tryout options or samples
     * available for the product.
     */
    tryouts?: string[];
    /**
     * - The type or category of the product.
     */
    type?: string;
    /**
     * - A unique identifier for the product.
     */
    uid: number;
    /**
     * - A numerical value indicating the popularity
     * of the product.
     */
    popularity?: number;
    /**
     * - The unique identifier for the brand associated
     * with the product.
     */
    brand_uid: number;
    /**
     * - The unique identifier for the category to
     * which the product belongs.
     */
    category_uid: number;
    /**
     * - The verification status of the
     * product, typically represented as an integer.
     */
    verification_status?: number;
    /**
     * - The identifier for the sales
     * channel through which the product is sold.
     */
    channel_identifier?: string;
    /**
     * - A URL-friendly string representing the
     * product's category.
     */
    category_slug?: string;
    /**
     * - A guide or chart providing size information
     * for the product.
     */
    size_guide?: string;
    /**
     * - A list of L3 category IDs of the product.
     */
    l3_categories: number[];
    /**
     * - A list of store IDs where the product is available.
     */
    store_ids?: number[];
    /**
     * - A list of company IDs associated with the product.
     */
    company_ids?: number[];
    /**
     * - A list of department IDs where the product
     * is categorized.
     */
    departments: number[];
    /**
     * - A list of tags or keywords associated with the product.
     */
    tags?: string[];
    /**
     * - A list of names of L3 categories
     * of the product.
     */
    l3_category_names?: string[];
    /**
     * - A list of available sizes for the product.
     */
    sizes?: string[];
    /**
     * - Tags that group the product with
     * other similar products.
     */
    product_group_tag?: string[];
    /**
     * - Indicates whether the product is available
     * in multiple sizes.
     */
    multi_size: boolean;
    /**
     * - Indicates whether the product can be considered
     * as a gift.
     */
    is_gift: boolean;
    /**
     * - Indicates whether the product is eligible for
     * cash on delivery (COD).
     */
    is_cod: boolean;
    /**
     * - Indicates whether the product depends on
     * another product.
     */
    is_dependent: boolean;
    /**
     * - Indicates whether the product is currently
     * available for purchase.
     */
    is_available: boolean;
    moq: ApplicationItemMOQ;
    seo: ApplicationItemSEO;
    /**
     * - An object containing details about the
     * product variants.
     */
    variants?: any;
    /**
     * - Media items specific to the product variants.
     */
    variant_media?: any;
    /**
     * - A group identifier for products that are
     * variants of one another.
     */
    variant_group?: any;
    multi_categories?: MultiCategoriesSchema[];
    /**
     * - Tag used for categorizing or templating purposes.
     */
    template_tag?: string;
    /**
     * - Net quantity details for the product.
     */
    net_quantity?: any;
    custom_order?: CustomOrder;
    /**
     * - Country where the product is
     * manufactured or sourced from.
     */
    country_of_origin: string;
    /**
     * - Custom JSON data associated with the product.
     */
    _custom_json?: any;
    /**
     * - Identifiers associated with the product.
     */
    identifiers?: string[];
    /**
     * - Unique identifier for the item.
     */
    item_id?: number;
    /**
     * - Custom meta associated with the product.
     */
    _custom_meta?: CustomMeta[];
    /**
     * - The discount applied to the
     * product in percentage.
     */
    discount_percentage?: number;
};
/** @returns {ApplicationProductListingResponseSchema} */
declare function ApplicationProductListingResponseSchema(): ApplicationProductListingResponseSchema;
type ApplicationProductListingResponseSchema = {
    filters?: ProductFilters[];
    items?: ApplicationProductsSchema[];
    operators?: any;
    page: Page;
    sort_on?: ProductSortOn[];
};
/** @returns {ApplicationStoreJson} */
declare function ApplicationStoreJson(): ApplicationStoreJson;
type ApplicationStoreJson = {
    _custom_json: any;
};
/** @returns {AppReturnConfigResponseSchema} */
declare function AppReturnConfigResponseSchema(): AppReturnConfigResponseSchema;
type AppReturnConfigResponseSchema = {
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
/** @returns {ArticleStoreResponseSchema} */
declare function ArticleStoreResponseSchema(): ArticleStoreResponseSchema;
type ArticleStoreResponseSchema = {
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
/** @returns {AttributeMasterSchema} */
declare function AttributeMasterSchema(): AttributeMasterSchema;
type AttributeMasterSchema = {
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
     * - Category level return config details
     */
    data: AppCategoryReturnConfig[];
};
/** @returns {BaseAppCategoryReturnConfigResponseSchema} */
declare function BaseAppCategoryReturnConfigResponseSchema(): BaseAppCategoryReturnConfigResponseSchema;
type BaseAppCategoryReturnConfigResponseSchema = {
    data?: AppCategoryReturnConfigResponseSchema[];
    page?: PageResponseSchema;
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
/** @returns {BrandListingResponseSchema} */
declare function BrandListingResponseSchema(): BrandListingResponseSchema;
type BrandListingResponseSchema = {
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
/** @returns {BulkAssetResponseSchema} */
declare function BulkAssetResponseSchema(): BulkAssetResponseSchema;
type BulkAssetResponseSchema = {
    items?: Items[];
    page?: Page;
};
/** @returns {BulkHsnResponseSchema} */
declare function BulkHsnResponseSchema(): BulkHsnResponseSchema;
type BulkHsnResponseSchema = {
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
/** @returns {FailedRecord} */
declare function FailedRecord(): FailedRecord;
type FailedRecord = {
    identifiers?: string;
    message?: string;
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
    failed_records?: FailedRecord[];
    file_path?: string;
    id?: string;
    is_active?: boolean;
    modified_by?: any;
    modified_on?: string;
    stage?: string;
    succeed?: number;
    total?: number;
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
/** @returns {BulkProductRequestSchema} */
declare function BulkProductRequestSchema(): BulkProductRequestSchema;
type BulkProductRequestSchema = {
    batch_id: string;
    company_id: number;
    data: any[];
    template_tag: string;
};
/** @returns {BulkResponseSchema} */
declare function BulkResponseSchema(): BulkResponseSchema;
type BulkResponseSchema = {
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
/** @returns {CatalogInsightResponseSchema} */
declare function CatalogInsightResponseSchema(): CatalogInsightResponseSchema;
type CatalogInsightResponseSchema = {
    brand_distribution?: CatalogInsightBrand;
    item?: CatalogInsightItem;
};
/** @returns {CategoriesResponseSchema} */
declare function CategoriesResponseSchema(): CategoriesResponseSchema;
type CategoriesResponseSchema = {
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
/** @returns {CategoryListingResponseSchema} */
declare function CategoryListingResponseSchema(): CategoryListingResponseSchema;
type CategoryListingResponseSchema = {
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
/** @returns {CategoryResponseSchema} */
declare function CategoryResponseSchema(): CategoryResponseSchema;
type CategoryResponseSchema = {
    items?: Category[];
    page?: Page;
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
/** @returns {CollectionCreateResponseSchema} */
declare function CollectionCreateResponseSchema(): CollectionCreateResponseSchema;
type CollectionCreateResponseSchema = {
    uid?: string;
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
    visible_facets_keys?: string[];
};
/** @returns {CollectionDetailResponseSchema} */
declare function CollectionDetailResponseSchema(): CollectionDetailResponseSchema;
type CollectionDetailResponseSchema = {
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
/** @returns {ConfigErrorResponseSchema} */
declare function ConfigErrorResponseSchema(): ConfigErrorResponseSchema;
type ConfigErrorResponseSchema = {
    message: string;
};
/** @returns {ConfigSuccessResponseSchema} */
declare function ConfigSuccessResponseSchema(): ConfigSuccessResponseSchema;
type ConfigSuccessResponseSchema = {
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
/** @returns {CreateAutocompleteWordsResponseSchema} */
declare function CreateAutocompleteWordsResponseSchema(): CreateAutocompleteWordsResponseSchema;
type CreateAutocompleteWordsResponseSchema = {
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
/** @returns {CreateSearchConfigurationRequestSchema} */
declare function CreateSearchConfigurationRequestSchema(): CreateSearchConfigurationRequestSchema;
type CreateSearchConfigurationRequestSchema = {
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
    created_by?: UserSchema;
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
    modified_by?: UserSchema;
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
/** @returns {CreateSearchConfigurationResponseSchema} */
declare function CreateSearchConfigurationResponseSchema(): CreateSearchConfigurationResponseSchema;
type CreateSearchConfigurationResponseSchema = {
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
/** @returns {CrossSellingResponseSchema} */
declare function CrossSellingResponseSchema(): CrossSellingResponseSchema;
type CrossSellingResponseSchema = {
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
/** @returns {CustomOrder} */
declare function CustomOrder(): CustomOrder;
type CustomOrder = {
    /**
     * - Unit of time for manufacturing
     * (e.g., days, weeks).
     */
    manufacturing_time_unit?: string;
    /**
     * - Indicates if the product is available
     * for custom orders.
     */
    is_custom_order: boolean;
    /**
     * - Time required for manufacturing in
     * the specified unit.
     */
    manufacturing_time?: number;
};
/** @returns {DateMeta} */
declare function DateMeta(): DateMeta;
type DateMeta = {
    added_on_store?: string;
    created_on?: string;
    inventory_updated_on?: string;
    modified_on?: string;
};
/** @returns {DefaultKeyRequestSchema} */
declare function DefaultKeyRequestSchema(): DefaultKeyRequestSchema;
type DefaultKeyRequestSchema = {
    default_key: string;
};
/** @returns {DeleteAppCategoryReturnConfig} */
declare function DeleteAppCategoryReturnConfig(): DeleteAppCategoryReturnConfig;
type DeleteAppCategoryReturnConfig = {
    /**
     * - List of category_ids to be deleted.
     */
    category_ids: number[];
};
/** @returns {DeleteResponseSchema} */
declare function DeleteResponseSchema(): DeleteResponseSchema;
type DeleteResponseSchema = {
    message?: string;
};
/** @returns {DeleteSearchConfigurationResponseSchema} */
declare function DeleteSearchConfigurationResponseSchema(): DeleteSearchConfigurationResponseSchema;
type DeleteSearchConfigurationResponseSchema = {
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
/** @returns {DepartmentErrorResponseSchema} */
declare function DepartmentErrorResponseSchema(): DepartmentErrorResponseSchema;
type DepartmentErrorResponseSchema = {
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
/** @returns {DepartmentResponseSchema} */
declare function DepartmentResponseSchema(): DepartmentResponseSchema;
type DepartmentResponseSchema = {
    items?: Department[];
};
/** @returns {DepartmentsResponseSchema} */
declare function DepartmentsResponseSchema(): DepartmentsResponseSchema;
type DepartmentsResponseSchema = {
    items?: GetDepartment[];
    page?: Page;
};
/** @returns {DimensionResponseSchema} */
declare function DimensionResponseSchema(): DimensionResponseSchema;
type DimensionResponseSchema = {
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
/** @returns {ErrorResponseSchema} */
declare function ErrorResponseSchema(): ErrorResponseSchema;
type ErrorResponseSchema = {
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
    net_quantity?: NetQuantityResponseSchema;
    no_of_boxes?: number;
    pending?: string;
    primary_color?: string;
    product_group_tag?: string[];
    product_publish?: ProductPublished;
    return_config?: ReturnConfigResponseSchema;
    short_description?: string;
    size_guide?: string;
    sizes?: any[];
    slug?: string;
    stage?: string;
    tags?: string[];
    tax_identifier?: TaxIdentifier;
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
/** @returns {RawProductListingResponseSchema} */
declare function RawProductListingResponseSchema(): RawProductListingResponseSchema;
type RawProductListingResponseSchema = {
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
/** @returns {AttributeDetail} */
declare function AttributeDetail(): AttributeDetail;
type AttributeDetail = {
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
/** @returns {GetAddressSchema} */
declare function GetAddressSchema(): GetAddressSchema;
type GetAddressSchema = {
    address1?: string;
    address2?: string;
    address_type?: string;
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
/** @returns {GetAutocompleteWordsResponseSchema} */
declare function GetAutocompleteWordsResponseSchema(): GetAutocompleteWordsResponseSchema;
type GetAutocompleteWordsResponseSchema = {
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
    listing?: MetaDataListingResponseSchema;
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
/** @returns {GetCollectionItemsResponseSchema} */
declare function GetCollectionItemsResponseSchema(): GetCollectionItemsResponseSchema;
type GetCollectionItemsResponseSchema = {
    filters?: ProductFilters[];
    items?: ApplicationProductsSchema[];
    page?: Page;
    sort_on?: ProductSortOn[];
};
/** @returns {GetCollectionListingResponseSchema} */
declare function GetCollectionListingResponseSchema(): GetCollectionListingResponseSchema;
type GetCollectionListingResponseSchema = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
/** @returns {GetCollectionQueryOptionResponseSchema} */
declare function GetCollectionQueryOptionResponseSchema(): GetCollectionQueryOptionResponseSchema;
type GetCollectionQueryOptionResponseSchema = {
    filters?: ProductFilters[];
    operators: any;
    sort_on?: ProductSortOn[];
};
/** @returns {GetCompanySchema} */
declare function GetCompanySchema(): GetCompanySchema;
type GetCompanySchema = {
    addresses?: GetAddressSchema[];
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
/** @returns {GetConfigMetadataResponseSchema} */
declare function GetConfigMetadataResponseSchema(): GetConfigMetadataResponseSchema;
type GetConfigMetadataResponseSchema = {
    condition?: ConditionItem[];
    data: DataItem[];
    page?: Page;
    values?: GetConfigMetadataValues;
};
/** @returns {GetConfigMetadataValues} */
declare function GetConfigMetadataValues(): GetConfigMetadataValues;
type GetConfigMetadataValues = {
    type?: ValueTypeItem[];
    sort?: SortTypeItem[];
};
/** @returns {GetConfigResponseSchema} */
declare function GetConfigResponseSchema(): GetConfigResponseSchema;
type GetConfigResponseSchema = {
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
    identifier?: Identifier;
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
    store?: ArticleStoreResponseSchema;
    tags?: string[];
    tax_identifier?: TaxIdentifier;
    total_quantity?: number;
    trace_id?: string;
    track_inventory?: boolean;
    trader?: Trader2[];
    uid?: string;
    weight?: WeightResponse1;
};
/** @returns {GetInventoriesResponseSchema} */
declare function GetInventoriesResponseSchema(): GetInventoriesResponseSchema;
type GetInventoriesResponseSchema = {
    items?: GetInventories[];
    page?: Page;
};
/** @returns {GetLocationSchema} */
declare function GetLocationSchema(): GetLocationSchema;
type GetLocationSchema = {
    _custom_json?: any;
    address: GetAddressSchema;
    code: string;
    company?: GetCompanySchema;
    contact_numbers?: SellerPhoneNumber[];
    created_by?: UserSerializer3;
    created_on?: string;
    display_name: string;
    documents?: Document[];
    gst_credentials?: InvoiceDetailsSchema;
    integration_type?: LocationIntegrationType;
    manager?: LocationManagerSchema;
    modified_by?: UserSerializer3;
    modified_on?: string;
    name: string;
    notification_emails?: string[];
    phone_number: string;
    product_return_config?: ProductReturnConfigSchema;
    stage?: string;
    store_type?: string;
    timing?: LocationDayWiseSchema[];
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
/** @returns {GetProductBundleCreateResponseSchema} */
declare function GetProductBundleCreateResponseSchema(): GetProductBundleCreateResponseSchema;
type GetProductBundleCreateResponseSchema = {
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
/** @returns {GetProductBundleListingResponseSchema} */
declare function GetProductBundleListingResponseSchema(): GetProductBundleListingResponseSchema;
type GetProductBundleListingResponseSchema = {
    items?: GetProductBundleCreateResponseSchema[];
    page?: Page;
};
/** @returns {GetProductBundleResponseSchema} */
declare function GetProductBundleResponseSchema(): GetProductBundleResponseSchema;
type GetProductBundleResponseSchema = {
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
/** @returns {GetCollectionDetailResponseSchema} */
declare function GetCollectionDetailResponseSchema(): GetCollectionDetailResponseSchema;
type GetCollectionDetailResponseSchema = {
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
/** @returns {GetQueryFiltersKeysResponseSchema} */
declare function GetQueryFiltersKeysResponseSchema(): GetQueryFiltersKeysResponseSchema;
type GetQueryFiltersKeysResponseSchema = {
    filters?: ProductFiltersKeysOnly[];
    operators: any;
    sort_on?: ProductSortOn[];
};
/** @returns {GetQueryFiltersResponseSchema} */
declare function GetQueryFiltersResponseSchema(): GetQueryFiltersResponseSchema;
type GetQueryFiltersResponseSchema = {
    filters?: ProductFilters[];
    operators: any;
    sort_on?: ProductSortOn[];
};
/** @returns {GetCollectionItemsResponseSchemaV2} */
declare function GetCollectionItemsResponseSchemaV2(): GetCollectionItemsResponseSchemaV2;
type GetCollectionItemsResponseSchemaV2 = {
    items?: ProductDetailV2[];
    page?: Page1;
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
    /**
     * - The value of the attribute of the collection query
     */
    value: any[];
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
/** @returns {GetSearchConfigurationResponseSchema} */
declare function GetSearchConfigurationResponseSchema(): GetSearchConfigurationResponseSchema;
type GetSearchConfigurationResponseSchema = {
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
    created_by?: UserSchema;
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
    modified_by?: UserSchema;
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
/** @returns {GetSearchWordsDetailResponseSchema} */
declare function GetSearchWordsDetailResponseSchema(): GetSearchWordsDetailResponseSchema;
type GetSearchWordsDetailResponseSchema = {
    items?: GetSearchWordsData;
    page?: Page;
};
/** @returns {GetSearchWordsResponseSchema} */
declare function GetSearchWordsResponseSchema(): GetSearchWordsResponseSchema;
type GetSearchWordsResponseSchema = {
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
/** @returns {HSNCodesResponseSchema} */
declare function HSNCodesResponseSchema(): HSNCodesResponseSchema;
type HSNCodesResponseSchema = {
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
    page?: PageResponseSchema;
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
    hs2_code?: string;
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
/** @returns {InventoryBulkRequestSchema} */
declare function InventoryBulkRequestSchema(): InventoryBulkRequestSchema;
type InventoryBulkRequestSchema = {
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
/** @returns {InventoryCreateRequestSchema} */
declare function InventoryCreateRequestSchema(): InventoryCreateRequestSchema;
type InventoryCreateRequestSchema = {
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
/** @returns {InventoryExportJobListResponseSchema} */
declare function InventoryExportJobListResponseSchema(): InventoryExportJobListResponseSchema;
type InventoryExportJobListResponseSchema = {
    /**
     * - This is the list/history
     * of all the jobs.
     */
    items: InventoryJobDetailResponseSchema;
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
/** @returns {InventoryExportRequestSchema} */
declare function InventoryExportRequestSchema(): InventoryExportRequestSchema;
type InventoryExportRequestSchema = {
    brand?: number[];
    store?: number[];
    type?: string;
};
/** @returns {InventoryExportResponseSchema} */
declare function InventoryExportResponseSchema(): InventoryExportResponseSchema;
type InventoryExportResponseSchema = {
    /**
     * - The user that created the job.
     */
    created_by?: string;
    /**
     * - Creation datetime of the job
     */
    created_on?: string;
    filters?: Filters;
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
/** @returns {InventoryJobDetailResponseSchema} */
declare function InventoryJobDetailResponseSchema(): InventoryJobDetailResponseSchema;
type InventoryJobDetailResponseSchema = {
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
/** @returns {InventoryRequestSchema} */
declare function InventoryRequestSchema(): InventoryRequestSchema;
type InventoryRequestSchema = {
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
/** @returns {InventoryResponseSchema} */
declare function InventoryResponseSchema(): InventoryResponseSchema;
type InventoryResponseSchema = {
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
    items?: InventoryResponseSchema[];
    page?: Page;
};
/** @returns {InventorySellerIdentifierResponsePaginated} */
declare function InventorySellerIdentifierResponsePaginated(): InventorySellerIdentifierResponsePaginated;
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponseSchema[];
    page?: Page;
};
/** @returns {InventorySellerResponseSchema} */
declare function InventorySellerResponseSchema(): InventorySellerResponseSchema;
type InventorySellerResponseSchema = {
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
    dimension: DimensionResponseSchema;
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
    manufacturer: ManufacturerResponseSchema;
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
    tax_identifier?: TaxIdentifier;
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
    weight: WeightResponseSchema;
};
/** @returns {InventorySet} */
declare function InventorySet(): InventorySet;
type InventorySet = {
    name?: string;
    quantity?: number;
    size_distribution: SizeDistribution;
};
/** @returns {InventoryStockResponseSchema} */
declare function InventoryStockResponseSchema(): InventoryStockResponseSchema;
type InventoryStockResponseSchema = {
    items?: any[];
    page: InventoryPage;
};
/** @returns {InventoryUpdateResponseSchema} */
declare function InventoryUpdateResponseSchema(): InventoryUpdateResponseSchema;
type InventoryUpdateResponseSchema = {
    items?: InventoryResponseItem[];
    /**
     * - It is the success message of the inventory update.
     */
    message: string;
};
/** @returns {InventoryValidationResponseSchema} */
declare function InventoryValidationResponseSchema(): InventoryValidationResponseSchema;
type InventoryValidationResponseSchema = {
    data?: any;
    message?: string;
};
/** @returns {InvoiceCredSchema} */
declare function InvoiceCredSchema(): InvoiceCredSchema;
type InvoiceCredSchema = {
    enabled?: boolean;
    password?: string;
    username?: string;
};
/** @returns {InvoiceDetailsSchema} */
declare function InvoiceDetailsSchema(): InvoiceDetailsSchema;
type InvoiceDetailsSchema = {
    e_invoice?: InvoiceCredSchema;
    e_waybill?: InvoiceCredSchema;
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
/** @returns {LocationDayWiseSchema} */
declare function LocationDayWiseSchema(): LocationDayWiseSchema;
type LocationDayWiseSchema = {
    closing?: LocationTimingSchema;
    open: boolean;
    opening?: LocationTimingSchema;
    weekday: string;
};
/** @returns {LocationIntegrationType} */
declare function LocationIntegrationType(): LocationIntegrationType;
type LocationIntegrationType = {
    inventory?: string;
};
/** @returns {LocationListSchema} */
declare function LocationListSchema(): LocationListSchema;
type LocationListSchema = {
    items?: GetLocationSchema[];
    page?: Page;
};
/** @returns {LocationManagerSchema} */
declare function LocationManagerSchema(): LocationManagerSchema;
type LocationManagerSchema = {
    email?: string;
    mobile_no: SellerPhoneNumber;
    name?: string;
};
/** @returns {LocationTimingSchema} */
declare function LocationTimingSchema(): LocationTimingSchema;
type LocationTimingSchema = {
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
/** @returns {ManufacturerResponseSchema} */
declare function ManufacturerResponseSchema(): ManufacturerResponseSchema;
type ManufacturerResponseSchema = {
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
    /**
     * - A metadata object containing additional
     * information about the media, such as dimensions, format, or other relevant details.
     */
    meta?: any;
    /**
     * - The type of media.
     */
    type?: string;
    /**
     * - The URL where the media can be accessed.
     */
    url: string;
    /**
     * - The alternative text for the media, used for
     * accessibility and as a fallback when the media cannot be displayed.
     */
    alt?: string;
    /**
     * - The URL of the thumbnail image, typically a
     * smaller or lower-resolution version of the main media.
     */
    thumbnail?: string;
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
/** @returns {MetaDataListingFilterMetaResponseSchema} */
declare function MetaDataListingFilterMetaResponseSchema(): MetaDataListingFilterMetaResponseSchema;
type MetaDataListingFilterMetaResponseSchema = {
    display?: string;
    filter_types?: string[];
    key?: string;
    units?: any[];
};
/** @returns {MetaDataListingFilterResponseSchema} */
declare function MetaDataListingFilterResponseSchema(): MetaDataListingFilterResponseSchema;
type MetaDataListingFilterResponseSchema = {
    data?: MetaDataListingFilterMetaResponseSchema[];
};
/** @returns {MetaDataListingResponseSchema} */
declare function MetaDataListingResponseSchema(): MetaDataListingResponseSchema;
type MetaDataListingResponseSchema = {
    filter: MetaDataListingFilterResponseSchema;
    sort: MetaDataListingSortResponseSchema;
};
/** @returns {MetaDataListingSortMetaResponseSchema} */
declare function MetaDataListingSortMetaResponseSchema(): MetaDataListingSortMetaResponseSchema;
type MetaDataListingSortMetaResponseSchema = {
    display?: string;
    key?: string;
};
/** @returns {MetaDataListingSortResponseSchema} */
declare function MetaDataListingSortResponseSchema(): MetaDataListingSortResponseSchema;
type MetaDataListingSortResponseSchema = {
    data?: MetaDataListingSortMetaResponseSchema[];
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
/** @returns {NetQuantityResponseSchema} */
declare function NetQuantityResponseSchema(): NetQuantityResponseSchema;
type NetQuantityResponseSchema = {
    unit?: string;
    value?: number;
};
/** @returns {NextSchedule} */
declare function NextSchedule(): NextSchedule;
type NextSchedule = {
    end?: string;
    start?: string;
};
/** @returns {OptInPostRequestSchema} */
declare function OptInPostRequestSchema(): OptInPostRequestSchema;
type OptInPostRequestSchema = {
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
/** @returns {OptinStoreDetails} */
declare function OptinStoreDetails(): OptinStoreDetails;
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
/** @returns {OwnerAppItemResponseSchema} */
declare function OwnerAppItemResponseSchema(): OwnerAppItemResponseSchema;
type OwnerAppItemResponseSchema = {
    alt_text?: any;
    is_cod?: boolean;
    is_gift?: boolean;
    moq?: MOQData;
    seo?: SEOData;
    /**
     * - Custom JSON data for the item
     */
    _custom_json?: any;
    /**
     * - Custom meta fields for the item
     */
    _custom_meta?: MetaFields[];
};
/** @returns {PTErrorResponseSchema} */
declare function PTErrorResponseSchema(): PTErrorResponseSchema;
type PTErrorResponseSchema = {
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
};
/** @returns {PageResponseSchema} */
declare function PageResponseSchema(): PageResponseSchema;
type PageResponseSchema = {
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
/** @returns {ProdcutTemplateCategoriesResponseSchema} */
declare function ProdcutTemplateCategoriesResponseSchema(): ProdcutTemplateCategoriesResponseSchema;
type ProdcutTemplateCategoriesResponseSchema = {
    items?: CategoriesResponseSchema[];
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
    net_quantity?: NetQuantityResponseSchema;
    no_of_boxes?: number;
    pending?: string;
    primary_color?: string;
    product_group_tag?: string[];
    product_publish?: ProductPublished;
    return_config?: ReturnConfigResponseSchema;
    short_description?: string;
    size_guide?: string;
    sizes?: any[];
    slug?: string;
    stage?: string;
    tags?: string[];
    tax_identifier?: TaxIdentifier;
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
/** @returns {ProductAttributesResponseSchema} */
declare function ProductAttributesResponseSchema(): ProductAttributesResponseSchema;
type ProductAttributesResponseSchema = {
    items: AttributeMasterSchema[];
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
/** @returns {ProductBulkRequestSchema} */
declare function ProductBulkRequestSchema(): ProductBulkRequestSchema;
type ProductBulkRequestSchema = {
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
    items?: any;
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
/** @returns {ProductBundleRequestSchema} */
declare function ProductBundleRequestSchema(): ProductBundleRequestSchema;
type ProductBundleRequestSchema = {
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
/** @returns {ProductBundleUpdateRequestSchema} */
declare function ProductBundleUpdateRequestSchema(): ProductBundleUpdateRequestSchema;
type ProductBundleUpdateRequestSchema = {
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
/** @returns {ProductDownloadsResponseSchema} */
declare function ProductDownloadsResponseSchema(): ProductDownloadsResponseSchema;
type ProductDownloadsResponseSchema = {
    /**
     * - The items of the job.
     */
    items?: ProductTemplateExportResponseSchema[];
    page?: Page;
};
/** @returns {ProductFilters} */
declare function ProductFilters(): ProductFilters;
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
/** @returns {GetQueryFiltersValuesResponseSchema} */
declare function GetQueryFiltersValuesResponseSchema(): GetQueryFiltersValuesResponseSchema;
type GetQueryFiltersValuesResponseSchema = {
    values: ProductFiltersValue[];
    page: Page;
};
/** @returns {ProductFiltersKeysOnly} */
declare function ProductFiltersKeysOnly(): ProductFiltersKeysOnly;
type ProductFiltersKeysOnly = {
    key: ProductFiltersKey;
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
/** @returns {ProductListingResponseSchema} */
declare function ProductListingResponseSchema(): ProductListingResponseSchema;
type ProductListingResponseSchema = {
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
/** @returns {ProductReturnConfigSchema} */
declare function ProductReturnConfigSchema(): ProductReturnConfigSchema;
type ProductReturnConfigSchema = {
    on_same_store?: boolean;
    store_uid?: number;
};
/** @returns {ProductReturnConfigBaseSchema} */
declare function ProductReturnConfigBaseSchema(): ProductReturnConfigBaseSchema;
type ProductReturnConfigBaseSchema = {
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
    net_quantity?: NetQuantityResponseSchema;
    no_of_boxes?: number;
    pending?: string;
    primary_color?: string;
    product_group_tag?: string[];
    product_publish?: ProductPublish;
    return_config?: ReturnConfigResponseSchema;
    short_description?: string;
    size_guide?: string;
    sizes?: any[];
    slug?: string;
    stage?: string;
    tags?: string[];
    tax_identifier?: TaxIdentifier;
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
/** @returns {ProductSizeDeleteDataResponseSchema} */
declare function ProductSizeDeleteDataResponseSchema(): ProductSizeDeleteDataResponseSchema;
type ProductSizeDeleteDataResponseSchema = {
    company_id?: number;
    item_id?: number;
    size?: string;
};
/** @returns {ProductSizeDeleteResponseSchema} */
declare function ProductSizeDeleteResponseSchema(): ProductSizeDeleteResponseSchema;
type ProductSizeDeleteResponseSchema = {
    data?: ProductSizeDeleteDataResponseSchema;
    success?: boolean;
};
/** @returns {ProductSortOn} */
declare function ProductSortOn(): ProductSortOn;
type ProductSortOn = {
    is_selected?: boolean;
    name?: string;
    value?: string;
};
/** @returns {ProductTagsViewResponseSchema} */
declare function ProductTagsViewResponseSchema(): ProductTagsViewResponseSchema;
type ProductTagsViewResponseSchema = {
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
    filters?: ProductTemplateExportFilterRequestSchema;
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
/** @returns {ProductTemplateExportFilterRequestSchema} */
declare function ProductTemplateExportFilterRequestSchema(): ProductTemplateExportFilterRequestSchema;
type ProductTemplateExportFilterRequestSchema = {
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
/** @returns {ProductTemplateExportResponseSchema} */
declare function ProductTemplateExportResponseSchema(): ProductTemplateExportResponseSchema;
type ProductTemplateExportResponseSchema = {
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
/** @returns {ProductVariantsResponseSchema} */
declare function ProductVariantsResponseSchema(): ProductVariantsResponseSchema;
type ProductVariantsResponseSchema = {
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
    updated_at?: string;
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
/** @returns {ReturnConfigResponseSchema} */
declare function ReturnConfigResponseSchema(): ReturnConfigResponseSchema;
type ReturnConfigResponseSchema = {
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
    action?: ApplicationItemSeoAction[];
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
    items?: ApplicationItemSeoMetaTagItem[];
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
/** @returns {SeoDetail} */
declare function SeoDetail(): SeoDetail;
type SeoDetail = {
    description?: string;
    title?: string;
    sitemap?: any;
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
/** @returns {SingleCategoryResponseSchema} */
declare function SingleCategoryResponseSchema(): SingleCategoryResponseSchema;
type SingleCategoryResponseSchema = {
    data?: Category;
};
/** @returns {SingleProductResponseSchema} */
declare function SingleProductResponseSchema(): SingleProductResponseSchema;
type SingleProductResponseSchema = {
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
/** @returns {SizeGuideResponseSchema} */
declare function SizeGuideResponseSchema(): SizeGuideResponseSchema;
type SizeGuideResponseSchema = {
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
/** @returns {StoreAssignResponseSchema} */
declare function StoreAssignResponseSchema(): StoreAssignResponseSchema;
type StoreAssignResponseSchema = {
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
/** @returns {SuccessResponseSchema} */
declare function SuccessResponseSchema(): SuccessResponseSchema;
type SuccessResponseSchema = {
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
/** @returns {TemplatesResponseSchema} */
declare function TemplatesResponseSchema(): TemplatesResponseSchema;
type TemplatesResponseSchema = {
    items?: ProductTemplate;
    page?: Page;
};
/** @returns {TemplatesValidationResponseSchema} */
declare function TemplatesValidationResponseSchema(): TemplatesValidationResponseSchema;
type TemplatesValidationResponseSchema = {
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
/** @returns {UpdateSearchConfigurationRequestSchema} */
declare function UpdateSearchConfigurationRequestSchema(): UpdateSearchConfigurationRequestSchema;
type UpdateSearchConfigurationRequestSchema = {
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
    created_by?: UserSchema;
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
    modified_by?: UserSchema;
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
/** @returns {UpdateSearchConfigurationResponseSchema} */
declare function UpdateSearchConfigurationResponseSchema(): UpdateSearchConfigurationResponseSchema;
type UpdateSearchConfigurationResponseSchema = {
    success?: boolean;
};
/** @returns {CreateMarketplaceOptinResponseSchema} */
declare function CreateMarketplaceOptinResponseSchema(): CreateMarketplaceOptinResponseSchema;
type CreateMarketplaceOptinResponseSchema = {
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
/** @returns {UserSchema} */
declare function UserSchema(): UserSchema;
type UserSchema = {
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
/** @returns {WeightResponseSchema} */
declare function WeightResponseSchema(): WeightResponseSchema;
type WeightResponseSchema = {
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
    created_by?: CreatedBy;
    created_on?: any;
    opt_level?: string;
    company_id?: number;
    modified_by?: CreatedBy;
    store_ids?: number[];
    modified_on?: any;
    platforms?: string;
    _id?: string;
};
/** @returns {GetAllMarketplaces} */
declare function GetAllMarketplaces(): GetAllMarketplaces;
type GetAllMarketplaces = {
    items?: Marketplaces[];
    page?: Page;
};
/** @returns {UpdateMarketplaceOptinRequestSchema} */
declare function UpdateMarketplaceOptinRequestSchema(): UpdateMarketplaceOptinRequestSchema;
type UpdateMarketplaceOptinRequestSchema = {
    brand_ids?: number[];
    company_id?: number;
    enabled?: boolean;
    opt_level?: string;
    platform?: string;
    store_ids?: number[];
};
/** @returns {UpdateMarketplaceOptinResponseSchema} */
declare function UpdateMarketplaceOptinResponseSchema(): UpdateMarketplaceOptinResponseSchema;
type UpdateMarketplaceOptinResponseSchema = {
    brand_ids?: number[];
    company_id?: number;
    app_id?: string;
    enabled?: boolean;
    opt_level?: string;
    platform?: string;
    store_ids?: number[];
    created_by?: CreatedBy;
    modified_by?: CreatedBy;
};
/** @returns {Identifier} */
declare function Identifier(): Identifier;
type Identifier = {
    /**
     * - The European Article Number (EAN) of the item.
     */
    ean?: string;
    /**
     * - The Stock Keeping Unit (SKU) code of the item.
     */
    sku_code?: string;
    /**
     * - The Alternative Lookup Product of the item.
     */
    alu?: string;
    /**
     * - Universal Product Code of the item.
     */
    upc?: string;
    /**
     * - ISBN (International Standard Book Number) is a
     * unique identifier used globally to identify books and other non-periodical
     * publications
     */
    isbn?: string;
};
/** @returns {Filters} */
declare function Filters(): Filters;
type Filters = {
    /**
     * - The list of all the brands selected.
     */
    brands?: string[];
    /**
     * - The modified-on date from which the data
     * needs to be exported.
     */
    from_date?: string;
    /**
     * - The quantity range
     * that needs to be exported.
     */
    quantity?: InventoryExportQuantityFilter;
    /**
     * - The list of all the stores selected.
     */
    stores?: string[];
    /**
     * - The modified-on date till when the data needs
     * to be exported.
     */
    to_date?: string;
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
/** @returns {ProductListingPrice} */
declare function ProductListingPrice(): ProductListingPrice;
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
    selling?: Price1;
};
/** @returns {Price1} */
declare function Price1(): Price1;
type Price1 = {
    currency_code?: CurrencyCodeEnum;
    currency_symbol?: string;
    max?: number;
    min?: number;
};
/** @returns {MultiCategoriesSchema} */
declare function MultiCategoriesSchema(): MultiCategoriesSchema;
type MultiCategoriesSchema = {
    /**
     * - The ID of the Level 1 (L1) category of the product.
     */
    l1?: number;
    /**
     * - The ID of the Level 2 (L2) category of the product.
     */
    l2?: number;
    /**
     * - The ID of the Level 3 (L3) category of the product.
     */
    l3?: number;
    /**
     * - Indicates whether the L3 category of the
     * product is currently active.
     */
    is_active?: boolean;
    /**
     * - The department associated with the L3
     * category of the product.
     */
    department?: number;
};
/** @returns {CustomMeta} */
declare function CustomMeta(): CustomMeta;
type CustomMeta = {
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
/**
 * Enum: order Used By: Catalog
 *
 * @returns {order}
 */
declare function order(): order;
type order = "browntape_v2" | "easyops" | "holisol" | "logic" | "tcnss" | "increff" | "liberty" | "browntape" | "easyecom" | "major_brands" | "jiopos" | "jockey" | "omsguru" | "pulse" | "sellerware" | "unicommerce" | "ethos" | "sarasuole" | "vajor" | "vinculum" | "jiomart_pos" | "rbl_sap" | "ginesys-pos" | "fyndpos" | "jiopos_openapi" | "jiopos_hamleys" | "westelm" | "rbl_sap_furniture" | "vinculum_v2" | "wizapp";
/**
 * Enum: PageType Used By: Catalog
 *
 * @returns {PageType}
 */
declare function PageType(): PageType;
type PageType = "about-us" | "addresses" | "blog" | "brands" | "cards" | "cart" | "categories" | "brand" | "category" | "collection" | "collections" | "custom" | "contact-us" | "external" | "faq" | "freshchat" | "home" | "notification-settings" | "orders" | "page" | "policy" | "product" | "product-request" | "products" | "profile" | "profile-order-shipment" | "profile-basic" | "profile-company" | "profile-emails" | "profile-phones" | "rate-us" | "refer-earn" | "settings" | "shared-cart" | "tnc" | "track-order" | "wishlist" | "sections" | "form" | "cart-delivery" | "cart-payment" | "cart-review" | "login" | "register" | "shipping-policy" | "return-policy" | "order-status" | "locate-us";
/**
 * Enum: CurrencyCodeEnum Used By: Catalog
 *
 * @returns {CurrencyCodeEnum}
 */
declare function CurrencyCodeEnum(): CurrencyCodeEnum;
type CurrencyCodeEnum = "INR" | "USD" | "EUR";
