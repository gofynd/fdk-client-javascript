const Joi = require("joi");

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

class CatalogPlatformModel {
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

  /** @returns {AllowSingleRequestSchema} */
  static AllowSingleRequestSchema() {
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
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_on: Joi.string().allow(""),
      id: Joi.string().allow(""),
      listing: CatalogPlatformModel.ConfigurationListing(),
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
      modified_on: Joi.string().allow(""),
      product: CatalogPlatformModel.ConfigurationProduct(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {AppCategoryReturnConfig} */
  static AppCategoryReturnConfig() {
    return Joi.object({
      category_id: Joi.number().required(),
      return_config: CatalogPlatformModel.ProductReturnConfigBaseSchema().required(),
    });
  }

  /** @returns {AppCategoryReturnConfigResponseSchema} */
  static AppCategoryReturnConfigResponseSchema() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      category_id: Joi.number(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      return_config: CatalogPlatformModel.ProductReturnConfigBaseSchema(),
    });
  }

  /** @returns {AppConfiguration} */
  static AppConfiguration() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      config_id: Joi.string().allow(""),
      config_type: Joi.string().allow("").required(),
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_on: Joi.string().allow(""),
      listing: CatalogPlatformModel.ConfigurationListing(),
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
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
      _custom_json: Joi.object().pattern(/\S/, Joi.any()).required(),
    });
  }

  /** @returns {ApplicationCategoryJson} */
  static ApplicationCategoryJson() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()).required(),
    });
  }

  /** @returns {ApplicationDepartment} */
  static ApplicationDepartment() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
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
      _custom_json: Joi.object().pattern(/\S/, Joi.any()).required(),
    });
  }

  /** @returns {ApplicationDepartmentListingResponseSchema} */
  static ApplicationDepartmentListingResponseSchema() {
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
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      _custom_meta: Joi.array().items(CatalogPlatformModel.MetaFields()),
      alt_text: Joi.object().pattern(/\S/, Joi.any()),
      is_cod: Joi.boolean(),
      is_gift: Joi.boolean(),
      moq: CatalogPlatformModel.ApplicationItemMOQ(),
      seo: CatalogPlatformModel.ApplicationItemSEO(),
      size_promotion_threshold: CatalogPlatformModel.SizePromotionThreshold(),
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

  /** @returns {ApplicationProductsSchema} */
  static ApplicationProductsSchema() {
    return Joi.object({
      attributes: Joi.object().pattern(/\S/, Joi.any()),
      brand: CatalogPlatformModel.ProductBrand(),
      color: Joi.string().allow(""),
      description: Joi.string().allow(""),
      discount: Joi.string().allow(""),
      has_variant: Joi.boolean(),
      highlights: Joi.array().items(Joi.string().allow("")),
      image_nature: Joi.string().allow("").required(),
      item_code: Joi.string().allow("").required(),
      item_type: Joi.string().allow("").required(),
      medias: Joi.array().items(CatalogPlatformModel.Media()),
      name: Joi.string().allow("").required(),
      price: CatalogPlatformModel.ProductListingPrice(),
      product_online_date: Joi.string().allow(""),
      promo_meta: Joi.object().pattern(/\S/, Joi.any()),
      rating: Joi.number(),
      rating_count: Joi.number(),
      sellable: Joi.boolean(),
      short_description: Joi.string().allow(""),
      similars: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow("").required(),
      teaser_tag: Joi.object().pattern(/\S/, Joi.any()),
      tryouts: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.number().required(),
      popularity: Joi.number(),
      brand_uid: Joi.number().required(),
      category_uid: Joi.number().required(),
      verification_status: Joi.number(),
      channel_identifier: Joi.string().allow(""),
      category_slug: Joi.string().allow(""),
      size_guide: Joi.string().allow(""),
      l3_categories: Joi.array().items(Joi.number()).required(),
      store_ids: Joi.array().items(Joi.number()),
      company_ids: Joi.array().items(Joi.number()),
      departments: Joi.array().items(Joi.number()).required(),
      tags: Joi.array().items(Joi.string().allow("")),
      l3_category_names: Joi.array().items(Joi.string().allow("")),
      sizes: Joi.array().items(Joi.string().allow("")),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      multi_size: Joi.boolean().required(),
      is_gift: Joi.boolean().required(),
      is_cod: Joi.boolean().required(),
      is_dependent: Joi.boolean().required(),
      is_available: Joi.boolean().required(),
      moq: CatalogPlatformModel.ApplicationItemMOQ().required(),
      seo: CatalogPlatformModel.ApplicationItemSEO().required(),
      variants: Joi.object().pattern(/\S/, Joi.any()),
      variant_media: Joi.object().pattern(/\S/, Joi.any()),
      variant_group: Joi.object().pattern(/\S/, Joi.any()),
      multi_categories: Joi.array().items(
        CatalogPlatformModel.MultiCategoriesSchema()
      ),
      template_tag: Joi.string().allow(""),
      net_quantity: Joi.object().pattern(/\S/, Joi.any()),
      custom_order: CatalogPlatformModel.CustomOrder(),
      country_of_origin: Joi.string().allow("").required(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      identifiers: Joi.array().items(Joi.string().allow("")),
      item_id: Joi.number(),
      _custom_meta: Joi.array().items(CatalogPlatformModel.CustomMeta()),
      discount_percentage: Joi.number(),
    });
  }

  /** @returns {ApplicationProductListingResponseSchema} */
  static ApplicationProductListingResponseSchema() {
    return Joi.object({
      filters: Joi.array().items(CatalogPlatformModel.ProductFilters()),
      items: Joi.array().items(
        CatalogPlatformModel.ApplicationProductsSchema()
      ),
      operators: Joi.object().pattern(/\S/, Joi.any()),
      page: CatalogPlatformModel.Page().required(),
      sort_on: Joi.array().items(CatalogPlatformModel.ProductSortOn()),
    });
  }

  /** @returns {ApplicationStoreJson} */
  static ApplicationStoreJson() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()).required(),
    });
  }

  /** @returns {AppReturnConfigResponseSchema} */
  static AppReturnConfigResponseSchema() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      category_count: Joi.number(),
      company_id: Joi.number(),
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {ArticleStoreResponseSchema} */
  static ArticleStoreResponseSchema() {
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
      meta: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {AttributeMasterSchema} */
  static AttributeMasterSchema() {
    return Joi.object({
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_on: Joi.string().allow(""),
      departments: Joi.array().items(Joi.string().allow("")).required(),
      description: Joi.string().allow(""),
      details: CatalogPlatformModel.AttributeMasterDetails().required(),
      enabled_for_end_consumer: Joi.boolean(),
      filters: CatalogPlatformModel.AttributeMasterFilter().required(),
      is_nested: Joi.boolean(),
      logo: Joi.string().allow(""),
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      raw_key: Joi.string().allow(""),
      schema: CatalogPlatformModel.AttributeMaster().required(),
      slug: Joi.string().allow("").required(),
      suggestion: Joi.string().allow(""),
      synonyms: Joi.object().pattern(/\S/, Joi.any()),
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
      params: Joi.object().pattern(/\S/, Joi.any()),
      query: Joi.object().pattern(/\S/, Joi.any()),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {AutocompleteResult} */
  static AutocompleteResult() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
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
      data: Joi.array()
        .items(CatalogPlatformModel.AppCategoryReturnConfig())
        .required(),
    });
  }

  /** @returns {BaseAppCategoryReturnConfigResponseSchema} */
  static BaseAppCategoryReturnConfigResponseSchema() {
    return Joi.object({
      data: Joi.array().items(
        CatalogPlatformModel.AppCategoryReturnConfigResponseSchema()
      ),
      page: CatalogPlatformModel.PageResponseSchema(),
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
    });
  }

  /** @returns {BrandListingResponseSchema} */
  static BrandListingResponseSchema() {
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

  /** @returns {BulkAssetResponseSchema} */
  static BulkAssetResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.Items()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {BulkHsnResponseSchema} */
  static BulkHsnResponseSchema() {
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

  /** @returns {FailedRecord} */
  static FailedRecord() {
    return Joi.object({
      identifiers: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {BulkInventoryGetItems} */
  static BulkInventoryGetItems() {
    return Joi.object({
      cancelled: Joi.number(),
      cancelled_records: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_on: Joi.string().allow(""),
      failed: Joi.number(),
      failed_records: Joi.array().items(CatalogPlatformModel.FailedRecord()),
      file_path: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
      modified_on: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      succeed: Joi.number(),
      total: Joi.number(),
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
      cancelled_records: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.any())
      ),
      company_id: Joi.number().required(),
      created_by: CatalogPlatformModel.UserInfo1(),
      created_on: Joi.string().allow("").required(),
      custom_template_tag: Joi.string().allow(""),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
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

  /** @returns {BulkProductRequestSchema} */
  static BulkProductRequestSchema() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      data: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())).required(),
      template_tag: Joi.string().allow("").required(),
    });
  }

  /** @returns {BulkResponseSchema} */
  static BulkResponseSchema() {
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

  /** @returns {CatalogInsightResponseSchema} */
  static CatalogInsightResponseSchema() {
    return Joi.object({
      brand_distribution: CatalogPlatformModel.CatalogInsightBrand(),
      item: CatalogPlatformModel.CatalogInsightItem(),
    });
  }

  /** @returns {CategoriesResponseSchema} */
  static CategoriesResponseSchema() {
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
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_on: Joi.string().allow(""),
      departments: Joi.array().items(Joi.number()).required(),
      hierarchy: Joi.array().items(CatalogPlatformModel.Hierarchy()),
      id: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      level: Joi.number().required(),
      marketplaces: CatalogPlatformModel.CategoryMapping(),
      media: CatalogPlatformModel.Media1(),
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      priority: Joi.number(),
      slug: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
      tryouts: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {CategoryListingResponseSchema} */
  static CategoryListingResponseSchema() {
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

  /** @returns {CategoryResponseSchema} */
  static CategoryResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.Category()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {Child} */
  static Child() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {CollectionCreateResponseSchema} */
  static CollectionCreateResponseSchema() {
    return Joi.object({
      uid: Joi.string().allow(""),
      _schedule: Joi.object().pattern(/\S/, Joi.any()),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: Joi.object().pattern(/\S/, Joi.any()),
      banners: CatalogPlatformModel.ImageUrls(),
      cron: Joi.object().pattern(/\S/, Joi.any()),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      logo: CatalogPlatformModel.BannerImage(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      query: Joi.array().items(CatalogPlatformModel.CollectionQuery()),
      slug: Joi.string().allow(""),
      sort_on: Joi.string().allow(""),
      tag: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CollectionDetailResponseSchema} */
  static CollectionDetailResponseSchema() {
    return Joi.object({
      _schedule: Joi.object().pattern(/\S/, Joi.any()),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: Joi.object().pattern(/\S/, Joi.any()),
      banners: CatalogPlatformModel.ImageUrls(),
      cron: Joi.object().pattern(/\S/, Joi.any()),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      logo: CatalogPlatformModel.Media(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
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
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_on: Joi.number().required(),
      enabled: Joi.boolean().required(),
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
      modified_on: Joi.number().required(),
      opt_level: Joi.string().allow("").required(),
      platform: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {ConfigErrorResponseSchema} */
  static ConfigErrorResponseSchema() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {ConfigSuccessResponseSchema} */
  static ConfigSuccessResponseSchema() {
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
      map: Joi.object().pattern(/\S/, Joi.any()),
      map_values: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
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
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      app_id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      results: Joi.array().items(CatalogPlatformModel.AutocompleteResult()),
      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CreateAutocompleteWordsResponseSchema} */
  static CreateAutocompleteWordsResponseSchema() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      app_id: Joi.string().allow(""),
      results: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CreateCollection} */
  static CreateCollection() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      _locale_language: Joi.object().pattern(/\S/, Joi.any()),
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
      meta: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {CreateSearchConfigurationRequestSchema} */
  static CreateSearchConfigurationRequestSchema() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      created_by: CatalogPlatformModel.UserSchema(),
      created_on: Joi.string().allow(""),
      is_proximity_enabled: Joi.boolean(),
      modified_by: CatalogPlatformModel.UserSchema(),
      modified_on: Joi.string().allow(""),
      proximity: Joi.number(),
      searchable_attributes: Joi.array().items(
        CatalogPlatformModel.SearchableAttribute()
      ),
    });
  }

  /** @returns {CreateSearchConfigurationResponseSchema} */
  static CreateSearchConfigurationResponseSchema() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {CreateSearchKeyword} */
  static CreateSearchKeyword() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      app_id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      result: CatalogPlatformModel.SearchKeywordResult().required(),
      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CreateUpdateAppReturnConfig} */
  static CreateUpdateAppReturnConfig() {
    return Joi.object({
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

  /** @returns {CrossSellingResponseSchema} */
  static CrossSellingResponseSchema() {
    return Joi.object({
      brand_distribution: CatalogPlatformModel.CatalogInsightBrand(),
      data: CatalogPlatformModel.CrossSellingData(),
    });
  }

  /** @returns {CustomOrder} */
  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),
      is_custom_order: Joi.boolean().required(),
      manufacturing_time: Joi.number(),
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

  /** @returns {DefaultKeyRequestSchema} */
  static DefaultKeyRequestSchema() {
    return Joi.object({
      default_key: Joi.string().allow("").required(),
    });
  }

  /** @returns {DeleteAppCategoryReturnConfig} */
  static DeleteAppCategoryReturnConfig() {
    return Joi.object({
      category_ids: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {DeleteResponseSchema} */
  static DeleteResponseSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {DeleteSearchConfigurationResponseSchema} */
  static DeleteSearchConfigurationResponseSchema() {
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

  /** @returns {DepartmentErrorResponseSchema} */
  static DepartmentErrorResponseSchema() {
    return Joi.object({
      code: Joi.string().allow(""),
      errors: Joi.object().pattern(/\S/, Joi.any()),
      message: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {DepartmentResponseSchema} */
  static DepartmentResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.Department()),
    });
  }

  /** @returns {DepartmentsResponseSchema} */
  static DepartmentsResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.GetDepartment()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {DimensionResponseSchema} */
  static DimensionResponseSchema() {
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

  /** @returns {ErrorResponseSchema} */
  static ErrorResponseSchema() {
    return Joi.object({
      code: Joi.string().allow(""),
      error: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {RawProduct} */
  static RawProduct() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      all_company_ids: Joi.array().items(Joi.number()),
      all_identifiers: Joi.array().items(Joi.string().allow("")),
      all_sizes: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      attributes: Joi.object().pattern(/\S/, Joi.any()),
      brand: CatalogPlatformModel.Brand(),
      brand_uid: Joi.number(),
      category: Joi.object().pattern(/\S/, Joi.any()),
      category_slug: Joi.string().allow(""),
      category_uid: Joi.number(),
      color: Joi.string().allow(""),
      company_id: Joi.number(),
      country_of_origin: Joi.string().allow(""),
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_on: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      custom_order: Joi.object().pattern(/\S/, Joi.any()),
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
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
      modified_on: Joi.string().allow(""),
      moq: Joi.object().pattern(/\S/, Joi.any()),
      multi_size: Joi.boolean(),
      name: Joi.string().allow(""),
      net_quantity: CatalogPlatformModel.NetQuantityResponseSchema(),
      no_of_boxes: Joi.number(),
      pending: Joi.string().allow(""),
      primary_color: Joi.string().allow(""),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      product_publish: CatalogPlatformModel.ProductPublished(),
      return_config: CatalogPlatformModel.ReturnConfigResponseSchema(),
      short_description: Joi.string().allow(""),
      size_guide: Joi.string().allow(""),
      sizes: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      slug: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: CatalogPlatformModel.TaxIdentifier(),
      teaser_tag: Joi.object().pattern(/\S/, Joi.any()),
      template_tag: Joi.string().allow(""),
      trader: Joi.array().items(CatalogPlatformModel.Trader()),
      uid: Joi.number(),
      variant_group: Joi.object().pattern(/\S/, Joi.any()),
      variant_media: Joi.object().pattern(/\S/, Joi.any()),
      variants: Joi.object().pattern(/\S/, Joi.any()),
      verified_by: CatalogPlatformModel.VerifiedBy(),
      verified_on: Joi.string().allow(""),
      store_id_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {RawProductListingResponseSchema} */
  static RawProductListingResponseSchema() {
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

  /** @returns {GetAddressSchema} */
  static GetAddressSchema() {
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
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      app_id: Joi.string().allow(""),
      results: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      uid: Joi.string().allow(""),
      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {GetAutocompleteWordsResponseSchema} */
  static GetAutocompleteWordsResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.GetAutocompleteWordsData()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {GetCatalogConfigurationDetailsProduct} */
  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      compare: Joi.object().pattern(/\S/, Joi.any()),
      detail: Joi.object().pattern(/\S/, Joi.any()),
      similar: Joi.object().pattern(/\S/, Joi.any()),
      variant: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {GetCatalogConfigurationDetailsSchemaListing} */
  static GetCatalogConfigurationDetailsSchemaListing() {
    return Joi.object({
      filter: Joi.object().pattern(/\S/, Joi.any()),
      sort: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {GetCatalogConfigurationMetaData} */
  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      listing: CatalogPlatformModel.MetaDataListingResponseSchema(),
      product: CatalogPlatformModel.GetCatalogConfigurationDetailsProduct(),
    });
  }

  /** @returns {GetCollectionDetailNest} */
  static GetCollectionDetailNest() {
    return Joi.object({
      _schedule: Joi.object().pattern(/\S/, Joi.any()),
      action: CatalogPlatformModel.Action(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: Joi.object().pattern(/\S/, Joi.any()),
      banners: CatalogPlatformModel.ImageUrls(),
      cron: Joi.object().pattern(/\S/, Joi.any()),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      logo: CatalogPlatformModel.Media(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {GetCollectionItemsResponseSchema} */
  static GetCollectionItemsResponseSchema() {
    return Joi.object({
      filters: Joi.array().items(CatalogPlatformModel.ProductFilters()),
      items: Joi.array().items(
        CatalogPlatformModel.ApplicationProductsSchema()
      ),
      page: CatalogPlatformModel.Page(),
      sort_on: Joi.array().items(CatalogPlatformModel.ProductSortOn()),
    });
  }

  /** @returns {GetCollectionListingResponseSchema} */
  static GetCollectionListingResponseSchema() {
    return Joi.object({
      filters: CatalogPlatformModel.CollectionListingFilter(),
      items: Joi.array().items(CatalogPlatformModel.GetCollectionDetailNest()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {GetCollectionQueryOptionResponseSchema} */
  static GetCollectionQueryOptionResponseSchema() {
    return Joi.object({
      filters: Joi.array().items(CatalogPlatformModel.ProductFilters()),
      operators: Joi.object().pattern(/\S/, Joi.any()).required(),
      sort_on: Joi.array().items(CatalogPlatformModel.ProductSortOn()),
    });
  }

  /** @returns {GetCompanySchema} */
  static GetCompanySchema() {
    return Joi.object({
      addresses: Joi.array().items(CatalogPlatformModel.GetAddressSchema()),
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

  /** @returns {GetConfigMetadataResponseSchema} */
  static GetConfigMetadataResponseSchema() {
    return Joi.object({
      condition: Joi.array().items(CatalogPlatformModel.ConditionItem()),
      data: Joi.array().items(CatalogPlatformModel.DataItem()).required(),
      page: CatalogPlatformModel.Page(),
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

  /** @returns {GetConfigResponseSchema} */
  static GetConfigResponseSchema() {
    return Joi.object({
      data: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())).required(),
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
      identifier: CatalogPlatformModel.Identifier(),
      inventory_updated_on: Joi.string().allow(""),
      is_set: Joi.boolean(),
      item_id: Joi.number(),
      manufacturer: CatalogPlatformModel.ManufacturerResponse1(),
      modified_by: CatalogPlatformModel.UserSerializer1(),
      platforms: Joi.object().pattern(/\S/, Joi.any()),
      price: CatalogPlatformModel.PriceArticle(),
      quantities: CatalogPlatformModel.QuantitiesArticle(),
      return_config: CatalogPlatformModel.ReturnConfig2(),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      store: CatalogPlatformModel.ArticleStoreResponseSchema(),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: CatalogPlatformModel.TaxIdentifier(),
      total_quantity: Joi.number(),
      trace_id: Joi.string().allow(""),
      track_inventory: Joi.boolean(),
      trader: Joi.array().items(CatalogPlatformModel.Trader2()),
      uid: Joi.string().allow(""),
      weight: CatalogPlatformModel.WeightResponse1(),
    });
  }

  /** @returns {GetInventoriesResponseSchema} */
  static GetInventoriesResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.GetInventories()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {GetLocationSchema} */
  static GetLocationSchema() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      address: CatalogPlatformModel.GetAddressSchema().required(),
      code: Joi.string().allow("").required(),
      company: CatalogPlatformModel.GetCompanySchema(),
      contact_numbers: Joi.array().items(
        CatalogPlatformModel.SellerPhoneNumber()
      ),
      created_by: CatalogPlatformModel.UserSerializer3(),
      created_on: Joi.string().allow(""),
      display_name: Joi.string().allow("").required(),
      documents: Joi.array().items(CatalogPlatformModel.Document()),
      gst_credentials: CatalogPlatformModel.InvoiceDetailsSchema(),
      integration_type: CatalogPlatformModel.LocationIntegrationType(),
      manager: CatalogPlatformModel.LocationManagerSchema(),
      modified_by: CatalogPlatformModel.UserSerializer3(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      phone_number: Joi.string().allow("").required(),
      product_return_config: CatalogPlatformModel.ProductReturnConfigSchema(),
      stage: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      timing: Joi.array().items(CatalogPlatformModel.LocationDayWiseSchema()),
      uid: Joi.number(),
      verified_by: CatalogPlatformModel.UserSerializer3(),
      verified_on: Joi.string().allow(""),
      warnings: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {GetOptInPlatform} */
  static GetOptInPlatform() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.CompanyOptIn()).required(),
      page: CatalogPlatformModel.Page().required(),
    });
  }

  /** @returns {GetProductBundleCreateResponseSchema} */
  static GetProductBundleCreateResponseSchema() {
    return Joi.object({
      choice: Joi.string().allow("").required(),
      company_id: Joi.number(),
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_on: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      logo: Joi.string().allow("").allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {GetProductBundleListingResponseSchema} */
  static GetProductBundleListingResponseSchema() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.GetProductBundleCreateResponseSchema()
      ),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {GetProductBundleResponseSchema} */
  static GetProductBundleResponseSchema() {
    return Joi.object({
      choice: Joi.string().allow(""),
      company_id: Joi.number(),
      is_active: Joi.boolean(),
      logo: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {GetCollectionDetailResponseSchema} */
  static GetCollectionDetailResponseSchema() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      _locale_language: Joi.object().pattern(/\S/, Joi.any()),
      _schedule: CatalogPlatformModel.CollectionSchedule(),
      action: Joi.object().pattern(/\S/, Joi.any()),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: CatalogPlatformModel.CollectionBadge(),
      banners: CatalogPlatformModel.ImageUrls(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_visible: Joi.boolean(),
      logo: CatalogPlatformModel.Media(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {GetQueryFiltersKeysResponseSchema} */
  static GetQueryFiltersKeysResponseSchema() {
    return Joi.object({
      filters: Joi.array().items(CatalogPlatformModel.ProductFiltersKeysOnly()),
      operators: Joi.object().pattern(/\S/, Joi.any()).required(),
      sort_on: Joi.array().items(CatalogPlatformModel.ProductSortOn()),
    });
  }

  /** @returns {GetQueryFiltersResponseSchema} */
  static GetQueryFiltersResponseSchema() {
    return Joi.object({
      filters: Joi.array().items(CatalogPlatformModel.ProductFilters()),
      operators: Joi.object().pattern(/\S/, Joi.any()).required(),
      sort_on: Joi.array().items(CatalogPlatformModel.ProductSortOn()),
    });
  }

  /** @returns {GetCollectionItemsResponseSchemaV2} */
  static GetCollectionItemsResponseSchemaV2() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.ProductDetailV2()),
      page: CatalogPlatformModel.Page1(),
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
    });
  }

  /** @returns {CollectionQuerySchemaV2} */
  static CollectionQuerySchemaV2() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),
      op: Joi.string().allow("").required(),
      value: Joi.array().items(Joi.any()).required(),
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

  /** @returns {GetSearchConfigurationResponseSchema} */
  static GetSearchConfigurationResponseSchema() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      created_by: CatalogPlatformModel.UserSchema(),
      created_on: Joi.string().allow(""),
      is_proximity_enabled: Joi.boolean(),
      modified_by: CatalogPlatformModel.UserSchema(),
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
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      app_id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      result: Joi.object().pattern(/\S/, Joi.any()),
      uid: Joi.string().allow(""),
      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {GetSearchWordsDetailResponseSchema} */
  static GetSearchWordsDetailResponseSchema() {
    return Joi.object({
      items: CatalogPlatformModel.GetSearchWordsData(),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {GetSearchWordsResponseSchema} */
  static GetSearchWordsResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.GetSearchWordsData()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {GlobalValidation} */
  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {HSNCodesResponseSchema} */
  static HSNCodesResponseSchema() {
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
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_on: Joi.string().allow(""),
      description: Joi.string().allow("").required(),
      hsn_code: Joi.string().allow("").required(),
      hsn_code_id: Joi.string().allow(""),
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
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
      data: CatalogPlatformModel.HsnCodesObject(),
    });
  }

  /** @returns {HsnCodesListingResponseSchemaV2} */
  static HsnCodesListingResponseSchemaV2() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.HSNDataInsertV2()),
      page: CatalogPlatformModel.PageResponseSchema(),
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
      hs2_code: Joi.string().allow("").allow(null),
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

  /** @returns {InventoryBulkRequestSchema} */
  static InventoryBulkRequestSchema() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      sizes: Joi.array()
        .items(CatalogPlatformModel.InventoryJobPayload())
        .required(),
      user: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {InventoryConfig} */
  static InventoryConfig() {
    return Joi.object({
      data: Joi.array().items(CatalogPlatformModel.FilerList()),
      multivalues: Joi.boolean(),
    });
  }

  /** @returns {InventoryCreateRequestSchema} */
  static InventoryCreateRequestSchema() {
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

  /** @returns {InventoryExportJobListResponseSchema} */
  static InventoryExportJobListResponseSchema() {
    return Joi.object({
      items: CatalogPlatformModel.InventoryJobDetailResponseSchema().required(),
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

  /** @returns {InventoryExportRequestSchema} */
  static InventoryExportRequestSchema() {
    return Joi.object({
      brand: Joi.array().items(Joi.number()),
      store: Joi.array().items(Joi.number()),
      type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {InventoryExportResponseSchema} */
  static InventoryExportResponseSchema() {
    return Joi.object({
      created_by: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      filters: CatalogPlatformModel.Filters(),
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

  /** @returns {InventoryJobDetailResponseSchema} */
  static InventoryJobDetailResponseSchema() {
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
      trace_id: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryRequestSchema} */
  static InventoryRequestSchema() {
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
      meta: Joi.object().pattern(/\S/, Joi.any()),
      payload: Joi.array().items(CatalogPlatformModel.InventoryPayload()),
    });
  }

  /** @returns {InventoryResponseSchema} */
  static InventoryResponseSchema() {
    return Joi.object({
      currency: Joi.string().allow(""),
      identifiers: Joi.object().pattern(/\S/, Joi.any()),
      inventory_updated_on: Joi.string().allow(""),
      item_id: Joi.number(),
      price: Joi.number(),
      price_effective: Joi.number(),
      price_transfer: Joi.number(),
      quantity: Joi.number(),
      sellable_quantity: Joi.number(),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      store: Joi.object().pattern(/\S/, Joi.any()),
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
      items: Joi.array().items(CatalogPlatformModel.InventoryResponseSchema()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {InventorySellerIdentifierResponsePaginated} */
  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.InventorySellerResponseSchema()
      ),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {InventorySellerResponseSchema} */
  static InventorySellerResponseSchema() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      added_on_store: Joi.string().allow(""),
      brand: CatalogPlatformModel.BrandMeta().required(),
      company: CatalogPlatformModel.CompanyMeta().required(),
      country_of_origin: Joi.string().allow("").required(),
      created_by: Joi.string().allow("").allow(null),
      dimension: CatalogPlatformModel.DimensionResponseSchema().required(),
      expiration_date: Joi.string().allow(""),
      fragile: Joi.boolean().required(),
      fynd_article_code: Joi.string().allow("").required(),
      fynd_item_code: Joi.string().allow("").required(),
      fynd_meta: Joi.object().pattern(/\S/, Joi.any()),
      identifier: Joi.object().pattern(/\S/, Joi.any()).required(),
      is_active: Joi.boolean(),
      is_set: Joi.boolean(),
      item_id: Joi.number().required(),
      manufacturer: CatalogPlatformModel.ManufacturerResponseSchema().required(),
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      modified_by: Joi.string().allow("").allow(null),
      price: CatalogPlatformModel.PriceMeta().required(),
      quantities: CatalogPlatformModel.Quantities(),
      raw_meta: Joi.object().pattern(/\S/, Joi.any()),
      return_config: CatalogPlatformModel.ReturnConfig1(),
      seller_identifier: Joi.string().allow("").required(),
      set: CatalogPlatformModel.InventorySet(),
      size: Joi.string().allow("").required(),
      stage: Joi.string().allow(""),
      store: CatalogPlatformModel.StoreMeta().required(),
      tags: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      tax_identifier: CatalogPlatformModel.TaxIdentifier(),
      total_quantity: Joi.number().required(),
      trace_id: Joi.string().allow(""),
      track_inventory: Joi.boolean(),
      trader: Joi.array().items(CatalogPlatformModel.Trader1()).allow(null, ""),
      uid: Joi.string().allow("").required(),
      weight: CatalogPlatformModel.WeightResponseSchema().required(),
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

  /** @returns {InventoryStockResponseSchema} */
  static InventoryStockResponseSchema() {
    return Joi.object({
      items: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      page: CatalogPlatformModel.InventoryPage().required(),
    });
  }

  /** @returns {InventoryUpdateResponseSchema} */
  static InventoryUpdateResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.InventoryResponseItem()),
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {InventoryValidationResponseSchema} */
  static InventoryValidationResponseSchema() {
    return Joi.object({
      data: Joi.object().pattern(/\S/, Joi.any()),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceCredSchema} */
  static InvoiceCredSchema() {
    return Joi.object({
      enabled: Joi.boolean(),
      password: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceDetailsSchema} */
  static InvoiceDetailsSchema() {
    return Joi.object({
      e_invoice: CatalogPlatformModel.InvoiceCredSchema(),
      e_waybill: CatalogPlatformModel.InvoiceCredSchema(),
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
      attributes: Joi.object().pattern(/\S/, Joi.any()),
      country_of_origin: Joi.string().allow(""),
      identifier: Joi.object().pattern(/\S/, Joi.any()),
      images: Joi.array().items(Joi.string().allow("")),
      item_code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      price: Joi.object().pattern(/\S/, Joi.any()),
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
      items: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      page: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {LocationDayWiseSchema} */
  static LocationDayWiseSchema() {
    return Joi.object({
      closing: CatalogPlatformModel.LocationTimingSchema(),
      open: Joi.boolean().required(),
      opening: CatalogPlatformModel.LocationTimingSchema(),
      weekday: Joi.string().allow("").required(),
    });
  }

  /** @returns {LocationIntegrationType} */
  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),
    });
  }

  /** @returns {LocationListSchema} */
  static LocationListSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.GetLocationSchema()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {LocationManagerSchema} */
  static LocationManagerSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
      mobile_no: CatalogPlatformModel.SellerPhoneNumber().required(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {LocationTimingSchema} */
  static LocationTimingSchema() {
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

  /** @returns {ManufacturerResponseSchema} */
  static ManufacturerResponseSchema() {
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
      meta: Joi.object().pattern(/\S/, Joi.any()),
      type: Joi.string().allow(""),
      url: Joi.string().allow("").required(),
      alt: Joi.string().allow(""),
      thumbnail: Joi.string().allow(""),
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
      headers: Joi.object().pattern(/\S/, Joi.any()),
      unit: Joi.string().allow(""),
      values: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
    });
  }

  /** @returns {MetaDataListingFilterMetaResponseSchema} */
  static MetaDataListingFilterMetaResponseSchema() {
    return Joi.object({
      display: Joi.string().allow(""),
      filter_types: Joi.array().items(Joi.string().allow("")),
      key: Joi.string().allow(""),
      units: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
    });
  }

  /** @returns {MetaDataListingFilterResponseSchema} */
  static MetaDataListingFilterResponseSchema() {
    return Joi.object({
      data: Joi.array().items(
        CatalogPlatformModel.MetaDataListingFilterMetaResponseSchema()
      ),
    });
  }

  /** @returns {MetaDataListingResponseSchema} */
  static MetaDataListingResponseSchema() {
    return Joi.object({
      filter: CatalogPlatformModel.MetaDataListingFilterResponseSchema().required(),
      sort: CatalogPlatformModel.MetaDataListingSortResponseSchema().required(),
    });
  }

  /** @returns {MetaDataListingSortMetaResponseSchema} */
  static MetaDataListingSortMetaResponseSchema() {
    return Joi.object({
      display: Joi.string().allow(""),
      key: Joi.string().allow(""),
    });
  }

  /** @returns {MetaDataListingSortResponseSchema} */
  static MetaDataListingSortResponseSchema() {
    return Joi.object({
      data: Joi.array().items(
        CatalogPlatformModel.MetaDataListingSortMetaResponseSchema()
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

  /** @returns {NetQuantityResponseSchema} */
  static NetQuantityResponseSchema() {
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

  /** @returns {OptInPostRequestSchema} */
  static OptInPostRequestSchema() {
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

  /** @returns {OptinStoreDetails} */
  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.StoreDetail()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {OwnerAppItemResponseSchema} */
  static OwnerAppItemResponseSchema() {
    return Joi.object({
      alt_text: Joi.object().pattern(/\S/, Joi.any()),
      is_cod: Joi.boolean(),
      is_gift: Joi.boolean(),
      moq: CatalogPlatformModel.MOQData(),
      seo: CatalogPlatformModel.SEOData(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      _custom_meta: Joi.array().items(CatalogPlatformModel.MetaFields()),
    });
  }

  /** @returns {PTErrorResponseSchema} */
  static PTErrorResponseSchema() {
    return Joi.object({
      code: Joi.string().allow(""),
      errors: Joi.object().pattern(/\S/, Joi.any()),
      message: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
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
    });
  }

  /** @returns {PageResponseSchema} */
  static PageResponseSchema() {
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

  /** @returns {PriceArticle} */
  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
      tp_notes: Joi.object().pattern(/\S/, Joi.any()),
      transfer: Joi.number(),
    });
  }

  /** @returns {PriceMeta} */
  static PriceMeta() {
    return Joi.object({
      currency: Joi.string().allow("").required(),
      effective: Joi.number().required(),
      marked: Joi.number().required(),
      tp_notes: Joi.object().pattern(/\S/, Joi.any()),
      transfer: Joi.number().required(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {ProdcutTemplateCategoriesResponseSchema} */
  static ProdcutTemplateCategoriesResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.CategoriesResponseSchema()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {Product} */
  static Product() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      all_company_ids: Joi.array().items(Joi.number()),
      all_identifiers: Joi.array().items(Joi.string().allow("")),
      all_sizes: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      attributes: Joi.object().pattern(/\S/, Joi.any()),
      brand: CatalogPlatformModel.Brand(),
      brand_uid: Joi.number(),
      category: Joi.object().pattern(/\S/, Joi.any()),
      category_slug: Joi.string().allow(""),
      category_uid: Joi.number(),
      color: Joi.string().allow(""),
      company_id: Joi.number(),
      country_of_origin: Joi.string().allow(""),
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_on: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      custom_order: Joi.object().pattern(/\S/, Joi.any()),
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
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
      modified_on: Joi.string().allow(""),
      moq: Joi.object().pattern(/\S/, Joi.any()),
      multi_size: Joi.boolean(),
      name: Joi.string().allow(""),
      net_quantity: CatalogPlatformModel.NetQuantityResponseSchema(),
      no_of_boxes: Joi.number(),
      pending: Joi.string().allow(""),
      primary_color: Joi.string().allow(""),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      product_publish: CatalogPlatformModel.ProductPublished(),
      return_config: CatalogPlatformModel.ReturnConfigResponseSchema(),
      short_description: Joi.string().allow(""),
      size_guide: Joi.string().allow(""),
      sizes: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      slug: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: CatalogPlatformModel.TaxIdentifier(),
      teaser_tag: Joi.object().pattern(/\S/, Joi.any()),
      template_tag: Joi.string().allow(""),
      trader: Joi.array().items(CatalogPlatformModel.Trader()),
      uid: Joi.number(),
      variant_group: Joi.object().pattern(/\S/, Joi.any()),
      variant_media: Joi.object().pattern(/\S/, Joi.any()),
      variants: Joi.object().pattern(/\S/, Joi.any()),
      verified_by: CatalogPlatformModel.VerifiedBy(),
      verified_on: Joi.string().allow(""),
    });
  }

  /** @returns {ProductAttributesResponseSchema} */
  static ProductAttributesResponseSchema() {
    return Joi.object({
      items: Joi.array()
        .items(CatalogPlatformModel.AttributeMasterSchema())
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
      user: Joi.object().pattern(/\S/, Joi.any()).required(),
    });
  }

  /** @returns {ProductBulkRequestSchema} */
  static ProductBulkRequestSchema() {
    return Joi.object({
      cancelled: Joi.number(),
      cancelled_records: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.any())
      ),
      company_id: Joi.number(),
      created_by: CatalogPlatformModel.UserDetail1(),
      created_on: Joi.string().allow(""),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
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
      items: Joi.any(),
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

  /** @returns {ProductBundleRequestSchema} */
  static ProductBundleRequestSchema() {
    return Joi.object({
      choice: Joi.string().allow("").required(),
      company_id: Joi.number(),
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_on: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      logo: Joi.string().allow("").allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {ProductBundleUpdateRequestSchema} */
  static ProductBundleUpdateRequestSchema() {
    return Joi.object({
      choice: Joi.string().allow("").required(),
      company_id: Joi.number(),
      is_active: Joi.boolean().required(),
      logo: Joi.string().allow("").allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
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
      data: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      multivalue: Joi.boolean(),
    });
  }

  /** @returns {ProductCreateUpdateSchemaV2} */
  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      action: Joi.string().allow(""),
      attributes: Joi.object().pattern(/\S/, Joi.any()),
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
      requester: Joi.string().allow(""),
      return_config: CatalogPlatformModel.ReturnConfig().required(),
      short_description: Joi.string().allow(""),
      size_guide: Joi.string().allow(""),
      sizes: Joi.array()
        .items(Joi.object().pattern(/\S/, Joi.any()))
        .required(),
      slug: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: CatalogPlatformModel.TaxIdentifier().required(),
      teaser_tag: CatalogPlatformModel.TeaserTag(),
      template_tag: Joi.string().allow("").required(),
      trader: Joi.array().items(CatalogPlatformModel.Trader()).required(),
      uid: Joi.number().allow(null),
      variant_group: Joi.object().pattern(/\S/, Joi.any()),
      variant_media: Joi.object().pattern(/\S/, Joi.any()),
      variants: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {ProductDetail} */
  static ProductDetail() {
    return Joi.object({
      attributes: Joi.object().pattern(/\S/, Joi.any()),
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
      promo_meta: Joi.object().pattern(/\S/, Joi.any()),
      rating: Joi.number(),
      rating_count: Joi.number(),
      short_description: Joi.string().allow(""),
      similars: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow("").required(),
      teaser_tag: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {ProductDownloadsResponseSchema} */
  static ProductDownloadsResponseSchema() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.ProductTemplateExportResponseSchema()
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

  /** @returns {GetQueryFiltersValuesResponseSchema} */
  static GetQueryFiltersValuesResponseSchema() {
    return Joi.object({
      values: Joi.array()
        .items(CatalogPlatformModel.ProductFiltersValue())
        .required(),
      page: CatalogPlatformModel.Page().required(),
    });
  }

  /** @returns {ProductFiltersKeysOnly} */
  static ProductFiltersKeysOnly() {
    return Joi.object({
      key: CatalogPlatformModel.ProductFiltersKey().required(),
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

  /** @returns {ProductListingResponseSchema} */
  static ProductListingResponseSchema() {
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

  /** @returns {ProductReturnConfigSchema} */
  static ProductReturnConfigSchema() {
    return Joi.object({
      on_same_store: Joi.boolean(),
      store_uid: Joi.number(),
    });
  }

  /** @returns {ProductReturnConfigBaseSchema} */
  static ProductReturnConfigBaseSchema() {
    return Joi.object({
      returnable: Joi.boolean().required(),
      time: Joi.number().required(),
      unit: Joi.string().allow("").required(),
    });
  }

  /** @returns {ProductSchemaV2} */
  static ProductSchemaV2() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      all_company_ids: Joi.array().items(Joi.number()),
      all_identifiers: Joi.array().items(Joi.string().allow("")),
      all_sizes: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      attributes: Joi.object().pattern(/\S/, Joi.any()),
      brand: CatalogPlatformModel.Brand(),
      brand_uid: Joi.number(),
      category: Joi.object().pattern(/\S/, Joi.any()),
      category_slug: Joi.string().allow(""),
      category_uid: Joi.number(),
      color: Joi.string().allow(""),
      company_id: Joi.number(),
      country_of_origin: Joi.string().allow(""),
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_on: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      custom_order: Joi.object().pattern(/\S/, Joi.any()),
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
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
      modified_on: Joi.string().allow(""),
      moq: Joi.object().pattern(/\S/, Joi.any()),
      multi_size: Joi.boolean(),
      name: Joi.string().allow(""),
      net_quantity: CatalogPlatformModel.NetQuantityResponseSchema(),
      no_of_boxes: Joi.number(),
      pending: Joi.string().allow(""),
      primary_color: Joi.string().allow(""),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      product_publish: CatalogPlatformModel.ProductPublish(),
      return_config: CatalogPlatformModel.ReturnConfigResponseSchema(),
      short_description: Joi.string().allow(""),
      size_guide: Joi.string().allow(""),
      sizes: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      slug: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: CatalogPlatformModel.TaxIdentifier(),
      teaser_tag: Joi.object().pattern(/\S/, Joi.any()),
      template_tag: Joi.string().allow(""),
      trader: Joi.array().items(CatalogPlatformModel.Trader()),
      uid: Joi.number(),
      variant_group: Joi.object().pattern(/\S/, Joi.any()),
      variant_media: Joi.object().pattern(/\S/, Joi.any()),
      variants: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {ProductSizeDeleteDataResponseSchema} */
  static ProductSizeDeleteDataResponseSchema() {
    return Joi.object({
      company_id: Joi.number(),
      item_id: Joi.number(),
      size: Joi.string().allow(""),
    });
  }

  /** @returns {ProductSizeDeleteResponseSchema} */
  static ProductSizeDeleteResponseSchema() {
    return Joi.object({
      data: CatalogPlatformModel.ProductSizeDeleteDataResponseSchema(),
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

  /** @returns {ProductTagsViewResponseSchema} */
  static ProductTagsViewResponseSchema() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ProductTemplate} */
  static ProductTemplate() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      categories: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_on: Joi.string().allow(""),
      departments: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_archived: Joi.boolean(),
      is_expirable: Joi.boolean().required(),
      is_physical: Joi.boolean().required(),
      logo: Joi.string().allow(""),
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow("").required(),
      tag: Joi.string().allow(""),
    });
  }

  /** @returns {ProductTemplateDownloadsExport} */
  static ProductTemplateDownloadsExport() {
    return Joi.object({
      filters: CatalogPlatformModel.ProductTemplateExportFilterRequestSchema(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ProductTemplateExportFilterRequestSchema} */
  static ProductTemplateExportFilterRequestSchema() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")),
      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),
      from_date: Joi.string().allow(""),
      templates: Joi.array().items(Joi.string().allow("")).required(),
      to_date: Joi.string().allow(""),
    });
  }

  /** @returns {ProductTemplateExportResponseSchema} */
  static ProductTemplateExportResponseSchema() {
    return Joi.object({
      completed_on: Joi.string().allow(""),
      created_by: CatalogPlatformModel.UserInfo1(),
      filters: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {ProductVariantsResponseSchema} */
  static ProductVariantsResponseSchema() {
    return Joi.object({
      page: CatalogPlatformModel.Page(),
      variants: Joi.array().items(CatalogPlatformModel.ProductVariants()),
    });
  }

  /** @returns {Properties} */
  static Properties() {
    return Joi.object({
      brand_uid: Joi.object().pattern(/\S/, Joi.any()),
      category_slug: Joi.object().pattern(/\S/, Joi.any()),
      command: Joi.object().pattern(/\S/, Joi.any()),
      country_of_origin: Joi.object().pattern(/\S/, Joi.any()),
      currency: Joi.object().pattern(/\S/, Joi.any()),
      custom_order: Joi.object().pattern(/\S/, Joi.any()),
      description: Joi.object().pattern(/\S/, Joi.any()),
      highlights: Joi.object().pattern(/\S/, Joi.any()),
      hsn_code: Joi.object().pattern(/\S/, Joi.any()),
      is_active: Joi.object().pattern(/\S/, Joi.any()),
      is_dependent: Joi.object().pattern(/\S/, Joi.any()),
      item_code: Joi.object().pattern(/\S/, Joi.any()),
      item_type: Joi.object().pattern(/\S/, Joi.any()),
      media: Joi.object().pattern(/\S/, Joi.any()),
      multi_size: Joi.object().pattern(/\S/, Joi.any()),
      name: Joi.object().pattern(/\S/, Joi.any()),
      no_of_boxes: Joi.object().pattern(/\S/, Joi.any()),
      product_group_tag: Joi.object().pattern(/\S/, Joi.any()),
      product_publish: Joi.object().pattern(/\S/, Joi.any()),
      return_config: Joi.object().pattern(/\S/, Joi.any()),
      short_description: Joi.object().pattern(/\S/, Joi.any()),
      size_guide: Joi.object().pattern(/\S/, Joi.any()),
      sizes: Joi.object().pattern(/\S/, Joi.any()),
      slug: Joi.object().pattern(/\S/, Joi.any()),
      tags: Joi.object().pattern(/\S/, Joi.any()),
      teaser_tag: Joi.object().pattern(/\S/, Joi.any()),
      trader: Joi.object().pattern(/\S/, Joi.any()),
      trader_type: Joi.object().pattern(/\S/, Joi.any()),
      variants: Joi.object().pattern(/\S/, Joi.any()),
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
      updated_at: Joi.string().allow(""),
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

  /** @returns {ReturnConfigResponseSchema} */
  static ReturnConfigResponseSchema() {
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
      page: Joi.object().pattern(/\S/, Joi.any()),
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
        CatalogPlatformModel.ApplicationItemSeoMetaTagItem()
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
      query: Joi.object().pattern(/\S/, Joi.any()).required(),
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
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {SeoDetail} */
  static SeoDetail() {
    return Joi.object({
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
      sitemap: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {SingleCategoryResponseSchema} */
  static SingleCategoryResponseSchema() {
    return Joi.object({
      data: CatalogPlatformModel.Category(),
    });
  }

  /** @returns {SingleProductResponseSchema} */
  static SingleProductResponseSchema() {
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

  /** @returns {SizeGuideResponseSchema} */
  static SizeGuideResponseSchema() {
    return Joi.object({
      active: Joi.boolean(),
      brand_id: Joi.number(),
      company_id: Joi.number(),
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_on: Joi.string().allow(""),
      guide: Joi.object().pattern(/\S/, Joi.any()),
      id: Joi.string().allow(""),
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      subtitle: Joi.string().allow(""),
      tag: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {StoreAssignResponseSchema} */
  static StoreAssignResponseSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      article_assignment: CatalogPlatformModel.ArticleAssignment1().required(),
      company_id: Joi.number(),
      group_id: Joi.string().allow(""),
      index: Joi.number(),
      item_id: Joi.number().required(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      quantity: Joi.number().required(),
      s_city: Joi.string().allow(""),
      size: Joi.string().allow("").required(),
      status: Joi.boolean().required(),
      store_id: Joi.number(),
      store_pincode: Joi.number(),
      strategy_wise_listing: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.any())
      ),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {StoreDetail} */
  static StoreDetail() {
    return Joi.object({
      additional_contacts: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.any())
      ),
      address: Joi.object().pattern(/\S/, Joi.any()),
      company_id: Joi.number(),
      created_on: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      documents: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      manager: Joi.object().pattern(/\S/, Joi.any()),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      timing: Joi.object().pattern(/\S/, Joi.any()),
      uid: Joi.number(),
    });
  }

  /** @returns {StoreMeta} */
  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  /** @returns {SuccessResponseSchema} */
  static SuccessResponseSchema() {
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
      template_validation: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {TemplatesResponseSchema} */
  static TemplatesResponseSchema() {
    return Joi.object({
      items: CatalogPlatformModel.ProductTemplate(),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {TemplatesValidationResponseSchema} */
  static TemplatesValidationResponseSchema() {
    return Joi.object({
      data: CatalogPlatformModel.TemplateValidationData(),
      template_details: CatalogPlatformModel.TemplateDetails(),
    });
  }

  /** @returns {ThirdLevelChild} */
  static ThirdLevelChild() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      action: CatalogPlatformModel.Action(),
      banners: CatalogPlatformModel.ImageUrls(),
      childs: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
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
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      _locale_language: Joi.object().pattern(/\S/, Joi.any()),
      _schedule: CatalogPlatformModel.CollectionSchedule(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      badge: CatalogPlatformModel.CollectionBadge(),
      banners: CatalogPlatformModel.CollectionBanner(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_visible: Joi.boolean(),
      logo: CatalogPlatformModel.CollectionImage(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {UpdateSearchConfigurationRequestSchema} */
  static UpdateSearchConfigurationRequestSchema() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      created_by: CatalogPlatformModel.UserSchema(),
      created_on: Joi.string().allow(""),
      is_proximity_enabled: Joi.boolean(),
      modified_by: CatalogPlatformModel.UserSchema(),
      modified_on: Joi.string().allow(""),
      proximity: Joi.number(),
      searchable_attributes: Joi.array().items(
        CatalogPlatformModel.SearchableAttribute()
      ),
    });
  }

  /** @returns {UpdateSearchConfigurationResponseSchema} */
  static UpdateSearchConfigurationResponseSchema() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {CreateMarketplaceOptinResponseSchema} */
  static CreateMarketplaceOptinResponseSchema() {
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

  /** @returns {UserSchema} */
  static UserSchema() {
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
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_on: Joi.string().allow(""),
      description: Joi.string().allow(""),
      guide: CatalogPlatformModel.Guide(),
      id: Joi.string().allow(""),
      image: Joi.string().allow(""),
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {WeightResponseSchema} */
  static WeightResponseSchema() {
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
      created_by: CatalogPlatformModel.CreatedBy(),
      created_on: Joi.any(),
      opt_level: Joi.string().allow(""),
      company_id: Joi.number(),
      modified_by: CatalogPlatformModel.CreatedBy(),
      store_ids: Joi.array().items(Joi.number()),
      modified_on: Joi.any(),
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

  /** @returns {UpdateMarketplaceOptinRequestSchema} */
  static UpdateMarketplaceOptinRequestSchema() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      company_id: Joi.number(),
      enabled: Joi.boolean(),
      opt_level: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      store_ids: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {UpdateMarketplaceOptinResponseSchema} */
  static UpdateMarketplaceOptinResponseSchema() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      company_id: Joi.number(),
      app_id: Joi.string().allow(""),
      enabled: Joi.boolean(),
      opt_level: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      store_ids: Joi.array().items(Joi.number()),
      created_by: CatalogPlatformModel.CreatedBy(),
      modified_by: CatalogPlatformModel.CreatedBy(),
    });
  }

  /** @returns {Identifier} */
  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
      sku_code: Joi.string().allow(""),
      alu: Joi.string().allow(""),
      upc: Joi.string().allow(""),
      isbn: Joi.string().allow(""),
    });
  }

  /** @returns {Filters} */
  static Filters() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")),
      from_date: Joi.string().allow(""),
      quantity: CatalogPlatformModel.InventoryExportQuantityFilter(),
      stores: Joi.array().items(Joi.string().allow("")),
      to_date: Joi.string().allow(""),
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

  /** @returns {ProductListingPrice} */
  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogPlatformModel.Price1(),
      marked: CatalogPlatformModel.Price1(),
      selling: CatalogPlatformModel.Price1(),
    });
  }

  /** @returns {Price1} */
  static Price1() {
    return Joi.object({
      currency_code: CatalogPlatformModel.CurrencyCodeEnum(),
      currency_symbol: Joi.string().allow(""),
      max: Joi.number(),
      min: Joi.number(),
    });
  }

  /** @returns {MultiCategoriesSchema} */
  static MultiCategoriesSchema() {
    return Joi.object({
      l1: Joi.number(),
      l2: Joi.number(),
      l3: Joi.number(),
      is_active: Joi.boolean(),
      department: Joi.number(),
    });
  }

  /** @returns {CustomMeta} */
  static CustomMeta() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /**
   * Enum: order Used By: Catalog
   *
   * @returns {order}
   */
  static order() {
    return Joi.string().valid(
      "browntape_v2",

      "easyops",

      "holisol",

      "logic",

      "tcnss",

      "increff",

      "liberty",

      "browntape",

      "easyecom",

      "major_brands",

      "jiopos",

      "jockey",

      "omsguru",

      "pulse",

      "sellerware",

      "unicommerce",

      "ethos",

      "sarasuole",

      "vajor",

      "vinculum",

      "jiomart_pos",

      "rbl_sap",

      "ginesys-pos",

      "fyndpos",

      "jiopos_openapi",

      "jiopos_hamleys",

      "westelm",

      "rbl_sap_furniture",

      "vinculum_v2",

      "wizapp"
    );
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

  /**
   * Enum: CurrencyCodeEnum Used By: Catalog
   *
   * @returns {CurrencyCodeEnum}
   */
  static CurrencyCodeEnum() {
    return Joi.string().valid(
      "INR",

      "USD",

      "EUR"
    );
  }
}
module.exports = CatalogPlatformModel;
