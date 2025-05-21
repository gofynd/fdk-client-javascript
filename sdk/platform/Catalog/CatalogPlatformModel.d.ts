export = CatalogPlatformModel;
/**
 * @typedef Action
 * @property {string} [type] - Type of action to be taken e.g, page.
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 */
/**
 * @typedef ValidationErrors
 * @property {ValidationError[]} errors - A list of validation errors in the request.
 */
/**
 * @typedef AllSizes
 * @property {ValidateIdentifier[]} [identifiers] - A collection of identifiers
 *   (e.g., GTIN, UPC) associated with the size. Each identifier follows the
 *   structure defined in the ValidateIdentifier schema.
 * @property {string} item_dimensions_unit_of_measure - The unit of measurement
 *   used for the item's dimensions (e.g., centimeters, inches).
 * @property {number} item_height - The height of the item in the specified unit
 *   of measure.
 * @property {number} item_length - The length of the item in the specified unit
 *   of measure.
 * @property {number} item_weight - The weight of the item in the specified unit
 *   of measure.
 * @property {string} item_weight_unit_of_measure - The unit of measurement for
 *   the item's weight (e.g., kilograms, pounds).
 * @property {number} item_width - The width of the item in the specified unit of measure.
 * @property {string} size - The label or designation for the item's size (e.g.,
 *   S, M, L, or numerical values).
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
 * @property {string} app_id - Unique identifier for the application to which
 *   this configuration belongs.
 * @property {AttributeDetailsGroup[]} [attributes] - A list of attribute groups
 *   associated with the app configuration. Each attribute group defines a set
 *   of attributes relevant to the app.
 * @property {boolean} is_active - Indicates whether this configuration is
 *   currently active for the application.
 * @property {boolean} is_default - Specifies if this configuration is the
 *   default setting for the application.
 * @property {string} [logo] - URL of the logo image associated with the
 *   application configuration.
 * @property {string} [name] - The name of the application configuration.
 * @property {number} priority - The priority of this configuration compared to
 *   others. Higher priority configurations are given precedence.
 * @property {string} slug
 * @property {string[]} [template_slugs] - A list of template slugs associated
 *   with this configuration, representing different templates that the
 *   configuration might use.
 */
/**
 * @typedef AppConfigurationsSort
 * @property {string} app_id - Unique identifier for the application.
 * @property {string} default_key - The default configuration key for the app.
 * @property {boolean} is_active - Indicates whether the app configuration is
 *   currently active.
 * @property {boolean} is_default - Specifies if this is the default
 *   configuration for the app.
 * @property {string} key - The specific configuration key for the app.
 * @property {string} [logo] - URL of the app's logo.
 * @property {string} [name] - Name of the application.
 * @property {number} priority - Defines the priority level for this
 *   configuration, with 1 being the highest.
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
 * @property {Object} [_custom_json] - Custom JSON data specific to the
 *   department, used to store additional attributes or configurations.
 * @property {string} app_id - Unique identifier for the application to which
 *   the department belongs.
 * @property {boolean} [is_active] - Indicates whether the department is
 *   currently active within the application.
 * @property {string} [logo] - URL or path to the logo representing the department.
 * @property {string} [name] - Name of the department within the application.
 * @property {number} uid - Unique identifier for the department.
 */
/**
 * @typedef ApplicationDepartmentJson
 * @property {Object} _custom_json - A custom JSON object containing additional
 *   details or configurations specific to the application department.
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
 * @property {string} [verification_status] - Verification status of the product.
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
 * @property {NetQuantitySchema} [net_quantity]
 * @property {CustomOrder} [custom_order]
 * @property {string} country_of_origin - Country where the product is
 *   manufactured or sourced from.
 * @property {Object} [_custom_json] - Custom JSON data associated with the product.
 * @property {string[]} [identifiers] - Identifiers associated with the product.
 * @property {number} [item_id] - Unique identifier for the item.
 * @property {CustomMeta[]} [_custom_meta] - Custom meta associated with the product.
 * @property {number} [discount_percentage] - The discount applied to the
 *   product in percentage.
 * @property {number} [no_of_boxes] - Number of boxes containing the product.
 * @property {string} [created_on] - The date and time when the product was created
 * @property {string} [modified_on] - The date and time when the product was last modified
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
 * @property {Object} _custom_json - Custom JSON data for the store. It can
 *   contain any additional data specific to the store configuration.
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
 * @property {string} display_type - The type of display used for the attribute,
 *   such as text, dropdown, or image.
 * @property {boolean} is_active - Indicates if this attribute group is currently active.
 * @property {string} [key] - A unique key or identifier for the attribute group.
 * @property {string} [logo] - URL of the logo image associated with this attribute group.
 * @property {string} name - The name of the attribute group.
 * @property {number} priority - The priority of the attribute group,
 *   determining the order in which it is displayed or processed.
 * @property {string} [slug] - A URL-friendly identifier for the attribute
 *   group, often used in APIs for identification.
 * @property {string} [unit] - The unit of measurement associated with the
 *   attribute, if applicable (e.g., cm, kg).
 */
/**
 * @typedef AttributeMaster
 * @property {string[]} [allowed_values] - List of allowed values for the
 *   attribute, if applicable.
 * @property {string} [format] - Format of the attribute, such as case formatting.
 * @property {boolean} [mandatory] - Whether the attribute is mandatory.
 * @property {boolean} [multi] - Indicates if the attribute allows multiple values.
 * @property {AttributeSchemaRange} [range]
 * @property {string} type - Data type of the attribute.
 */
/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type - Type of display used for the attribute
 *   (e.g., text, dropdown).
 */
/**
 * @typedef AttributeMasterFilter
 * @property {string[]} [depends_on]
 * @property {boolean} indexing - Whether the attribute should be indexed for search.
 * @property {number} [priority] - Priority of the attribute in filtering (optional).
 */
/**
 * @typedef AttributeMasterMandatoryDetails
 * @property {string[]} [l3_keys] - A list of Level 3 (L3) keys associated with
 *   the attribute, typically used for advanced categorization or attribute grouping.
 */
/**
 * @typedef AttributeMasterMeta
 * @property {boolean} [enriched] - Indicates if the attribute has been enriched
 *   with additional details or data beyond the basic schema.
 * @property {AttributeMasterMandatoryDetails} mandatory_details
 */
/**
 * @typedef AttributeMasterSchema
 * @property {Object} [created_by] - Information about the user who created the attribute.
 * @property {string} [created_on] - The timestamp when the attribute was created.
 * @property {string[]} departments - Departments or categories to which the
 *   attribute applies.
 * @property {string} [description] - A description of the attribute.
 * @property {AttributeMasterDetails} details
 * @property {boolean} [enabled_for_end_consumer] - Indicates if the attribute
 *   is enabled for end consumers.
 * @property {AttributeMasterFilter} filters
 * @property {boolean} [is_nested] - Indicates if the attribute can be nested
 *   under other attributes.
 * @property {string} [logo] - URL of the logo associated with the attribute.
 * @property {Object} [modified_by] - Information about the user who last
 *   modified the attribute.
 * @property {string} [modified_on] - The timestamp when the attribute was last modified.
 * @property {string} name - Name of the attribute.
 * @property {string} [raw_key] - Name of the attribute.
 * @property {AttributeMaster} schema
 * @property {string} [suggestion] - Suggested or recommended value for the
 *   attribute, if applicable.
 * @property {Object} [synonyms] - Synonyms or alternative names for the
 *   attribute, used for search and indexing.
 * @property {string[]} [tags] - Tags or keywords associated with the attribute,
 *   often used for categorization.
 * @property {string} [unit] - The unit of measurement for the attribute, if
 *   applicable (e.g., cm, kg).
 * @property {string} slug - Unique slug or identifier for the attribute.
 * @property {boolean} [variant] - Indicates if the attribute is a variant of
 *   another attribute.
 */
/**
 * @typedef AttributeSchemaRange
 * @property {number} [min] - Minimum allowed value for the attribute.
 * @property {number} [max] - Maximum allowed value for the attribute.
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
 * @property {string} [name] - The name of the brand.
 * @property {number} [uid] - Unique identifier for the brand.
 */
/**
 * @typedef BrandItem
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {string[]} [departments] - An array of department names or
 *   categories that the brand belongs to, represented as strings.
 * @property {string} [discount] - A string representing the discount offered by
 *   the brand, such as percentage or amount off.
 * @property {BrandMedia} [logo]
 * @property {string} [name] - The name of the brand.
 * @property {string} [slug] - A URL-friendly identifier for the brand, often
 *   used in website routing.
 * @property {number} [uid] - A unique identifier for the brand, typically used
 *   for internal reference.
 */
/**
 * @typedef BrandListingResponseSchema
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
 * @typedef ApplicationBrandListingSchema
 * @property {ApplicationBrandListingItemSchema[]} [items]
 * @property {Page} page
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
 * @property {CreatedBy} [modified_by]
 * @property {string} [modified_on] - Timestamp when the category was last modified.
 * @property {string} [app_id] - Application ID associated with the category.
 * @property {boolean} [is_active] - Indicates whether the category is active.
 * @property {number} [uid] - Unique identifier of the category.
 */
/**
 * @typedef BrandMeta
 * @property {number} id - Unique identifier for the brand.
 * @property {string} name - Name of the brand.
 */
/**
 * @typedef InventoryBrandMeta
 * @property {number} [id] - Unique identifier for the brand in the inventory.
 * @property {string} [name] - Name of the brand in the inventory.
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
 * @property {BulkMeta} [meta]
 */
/**
 * @typedef BulkMeta
 * @property {string} [comment] - Additional remarks or notes explaining the
 *   context or reason for the bulk inventory action.
 * @property {string[]} [image_urls] - A list of image URLs providing visual
 *   evidence or supporting context for the comment.
 */
/**
 * @typedef BulkProductJob
 * @property {string} [company_id] - The unique identifier of the company
 *   associated with the bulk product job.
 * @property {string} [template_tag] - The template tag used to classify the
 *   products in the bulk job.
 * @property {string} [product_type] - The type of products being processed in
 *   the bulk job (e.g., standard, digital, composite).
 * @property {string} [department] - The department under which the products in
 *   the bulk job are categorized.
 * @property {string} [file_path] - The file path of the uploaded file
 *   containing the bulk product data.
 */
/**
 * @typedef BulkJob
 * @property {number} [cancelled]
 * @property {Object[]} [cancelled_records]
 * @property {number} company_id
 * @property {UserInfo} [created_by] - The user who created the item.
 * @property {string} created_on - The date and time when the item was created.
 * @property {string} [custom_template_tag]
 * @property {number} [failed]
 * @property {Object[]} [failed_records]
 * @property {string} [file_path]
 * @property {string} [file_type] - Type of inventory File
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
 * @property {UserInfo} [created_by] - The user who created the item.
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
 * @typedef CatalogInsightResponseSchema
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CatalogInsightItem} [item]
 */
/**
 * @typedef CategoriesResponseSchema
 * @property {string} [name] - The name of the category.
 * @property {string} [slug] - A URL-friendly unique identifier for the category.
 * @property {string} [slug_key] - A key used for internal identification of the
 *   category slug.
 * @property {string} [template_slug] - The slug of the template associated with
 *   the category.
 * @property {number} [uid] - A unique identifier for the category.
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
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {Child[]} [childs]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef CategoryListingResponseSchema
 * @property {DepartmentCategoryTree[]} [data] - An array containing the
 *   department category trees, which provide hierarchical information about
 *   categories and their associated departments.
 * @property {DepartmentIdentifier[]} [departments] - An array of department
 *   identifiers, each providing basic information like name, slug, and unique
 *   ID for departments within the catalog.
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
 * @property {Category[]} [items] - The list of categories.
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
 * @typedef CollectionCreateResponseSchema
 * @property {string} [uid] - Unique identifier for the collection.
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [allow_facets] - Indicates whether facet-based filtering
 *   is allowed for the collection.
 * @property {boolean} [allow_sort] - Indicates whether sorting options are
 *   allowed for the collection.
 * @property {string} [app_id] - The application ID associated with the collection.
 * @property {Object} [badge] - Details of the badge associated with the collection.
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {string} [description] - A description of the collection.
 * @property {boolean} [is_active] - Indicates whether the collection is currently active.
 * @property {BannerImage} [logo]
 * @property {Object} [meta] - Additional metadata related to the collection.
 * @property {string} [name] - The name of the collection.
 * @property {number} [priority] - The priority level of the collection, used to
 *   determine its display order.
 * @property {CollectionQuery[]} [query] - Query objects that define how the
 *   collection's items are retrieved or filtered.
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
 * @property {string} aspect_ratio - The aspect ratio of the image, typically
 *   represented as a string (e.g., "16:9" or "4:3") to indicate the
 *   proportional relationship between the image's width and height.
 * @property {string} url - The URL of the image, which provides the location
 *   where the image is hosted and can be accessed.
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
 * @property {Object[]} value - The value of the attribute of the collection query
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
 */
/**
 * @typedef CompanyMeta
 * @property {number} id - Unique identifier for the company.
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
 * @typedef ConfigErrorResponseSchema
 * @property {string} message - A human-readable error message providing details
 *   about the configuration failure.
 */
/**
 * @typedef ConfigSuccessResponseSchema
 * @property {string} message - A message confirming the successful completion
 *   of the configuration operation.
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
 * @property {Object} [_custom_json] - Custom JSON data for the collection, used
 *   for any additional information.
 * @property {Object} [_locale_language] - Locale-specific data for supporting
 *   multiple languages.
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [allow_facets] - Indicates whether facet-based filtering
 *   is allowed for the collection.
 * @property {boolean} [allow_sort] - Indicates whether sorting options are
 *   allowed for the collection.
 * @property {string} app_id - The application ID associated with the collection.
 * @property {CollectionBadge} [badge]
 * @property {CollectionBanner} banners
 * @property {UserInfo} [created_by] - Information about the user who created
 *   the collection.
 * @property {string} [description] - A description of the collection.
 * @property {boolean} [is_active] - Indicates whether the collection is currently active.
 * @property {boolean} [is_visible] - Indicates whether the collection is
 *   visible to users.
 * @property {CollectionImage} logo
 * @property {Object} [meta] - Additional metadata related to the collection.
 * @property {UserInfo} [modified_by] - Information about the user who last
 *   modified the collection.
 * @property {string} name - The name of the collection.
 * @property {number} [priority] - The priority level of the collection, used to
 *   determine its display order.
 * @property {boolean} [published] - Indicates whether the collection is
 *   published and available to users.
 * @property {CollectionQuery[]} [query] - Query objects that define how the
 *   collection's items are retrieved or filtered.
 * @property {SeoDetail} [seo]
 * @property {string} slug - The URL-friendly identifier for the collection.
 * @property {string} [sort_on] - The default sorting order for items in the
 *   collection, e.g., 'popular'.
 * @property {string[]} [tags] - Array of tags associated with the collection
 *   for categorization and filtering.
 * @property {string} type - The type of collection, either 'items' for manually
 *   added items or 'query' for dynamically fetched items.
 * @property {string[]} [visible_facets_keys] - Keys of the facets that are
 *   visible and can be used for filtering the collection.
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
 * @property {string} default_key - The default key used for the requested operation.
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
 * @property {DepartmentMedia} [logo]
 * @property {string} [name] - The name of the department, used to identify it
 *   within the application.
 * @property {number} [priority_order] - Defines the priority or order in which
 *   the department should appear in listings.
 * @property {string} [slug] - A URL-friendly string used to uniquely identify
 *   the department.
 * @property {number} [uid] - A unique identifier for the department.
 */
/**
 * @typedef DepartmentCategoryTree
 * @property {string} [department] - The name of the department that this
 *   category tree belongs to, such as 'Men', 'Women', or 'Electronics'.
 * @property {CategoryItems[]} [items] - An array of categories that fall under
 *   the specified department, each containing details about category items.
 */
/**
 * @typedef DepartmentErrorResponseSchema
 * @property {string} [code] - Error code representing the type of error encountered.
 * @property {Object} [errors] - Detailed information about the errors
 *   encountered in the request, typically containing specific field validation
 *   errors or related data.
 * @property {string} [message] - A human-readable message that explains the
 *   reason for the error.
 * @property {Object} [meta] - Additional metadata about the error, such as
 *   contextual or debugging information.
 * @property {number} [status] - HTTP status code associated with the error,
 *   e.g., 400 for a bad request or 500 for a server error.
 */
/**
 * @typedef DepartmentIdentifier
 * @property {string} [name] - The name of the department, such as
 *   'Electronics', 'Apparel', or 'Home Appliances'.
 * @property {string} [slug] - A URL-friendly identifier for the department,
 *   often used in creating department-specific links or routes.
 * @property {number} [uid] - A unique identifier for the department, used to
 *   distinguish it from other departments in the system.
 */
/**
 * @typedef DepartmentResponseSchema
 * @property {Department[]} [items]
 */
/**
 * @typedef DepartmentsResponseSchema
 * @property {GetDepartment[]} [items] - List of department objects.
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
 * @typedef InventoryDimensionResponseSchema
 * @property {number} [height]
 * @property {number} [length]
 * @property {string} [unit]
 * @property {number} [width]
 */
/**
 * @typedef Document
 * @property {string} [legal_name] - The official legal name associated with the document.
 * @property {string} type - The type of document.
 * @property {string} [url] - A URL link to the document, typically pointing to
 *   where the document is stored.
 * @property {string} value - The actual value or identifier associated with the
 *   document, such as a GST number or PAN number.
 * @property {boolean} [verified] - Indicates whether the document has been
 *   verified as valid.
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
 * @property {number} [code] - A string representing the specific error code.
 * @property {string} [error] - A brief description of the error type.
 * @property {string} [message] - A detailed message explaining the error.
 * @property {Object} [meta] - Additional metadata or context about the error,
 *   if available.
 * @property {number} [status] - The HTTP status code associated with the error.
 */
/**
 * @typedef FilerList
 * @property {string} [display]
 * @property {string} [value]
 */
/**
 * @typedef RawProduct
 * @property {Object} [_custom_json] - Custom JSON data for the product.
 * @property {number[]} [all_company_ids] - List of company IDs associated with
 *   the product.
 * @property {string[]} [all_identifiers] - List of all identifiers associated
 *   with the product.
 * @property {Object[]} [all_sizes] - List of sizes available for the product.
 * @property {Object} [attributes] - Additional attributes for the product.
 * @property {Brand} [brand]
 * @property {number} [brand_uid] - Unique identifier of the brand.
 * @property {Object} [category] - Category details of the product.
 * @property {string} [category_slug] - Slug representing the category of the product.
 * @property {number} [category_uid] - Unique identifier for the product category.
 * @property {number} [company_id] - Unique identifier of the company associated
 *   with the product.
 * @property {string} [country_of_origin] - Country where the product is manufactured.
 * @property {Object} [created_by] - Details of the user who created the product.
 * @property {string} [created_on] - Timestamp when the product was created.
 * @property {string} [currency] - Currency in which the product is priced.
 * @property {Object} [custom_order] - Custom order details for the product.
 * @property {number[]} [departments] - List of department IDs associated with
 *   the product.
 * @property {string} [description] - Detailed description of the product.
 * @property {string[]} [highlights] - List of highlights for the product.
 * @property {string} [hsn_code] - HSN code associated with the product for tax purposes.
 * @property {string} [id] - Unique identifier of the product.
 * @property {string} [image_nature] - Nature or type of product images.
 * @property {string[]} [images] - List of image URLs for the product.
 * @property {boolean} [is_active] - Indicates whether the product is active.
 * @property {boolean} [is_dependent] - Indicates if the product is dependent on
 *   another product.
 * @property {boolean} [is_expirable] - Indicates if the product has an expiration date.
 * @property {boolean} [is_image_less_product] - Indicates if the product does
 *   not have associated images.
 * @property {boolean} [is_physical] - Indicates if the product is a physical item.
 * @property {boolean} [is_set] - Indicates if the product is part of a set.
 * @property {string} [item_code] - Unique code representing the item.
 * @property {string} [item_type] - Type of the item, such as 'standard'.
 * @property {string[]} [l3_mapping] - L3 category mapping for the product.
 * @property {Media[]} [media] - Media associated with the product, such as
 *   images or videos.
 * @property {Object} [modified_by] - Details of the user who last modified the product.
 * @property {string} [modified_on] - Timestamp when the product was last modified.
 * @property {Object} [moq] - Minimum order quantity details for the product.
 * @property {boolean} [multi_size] - Indicates if the product supports multiple sizes.
 * @property {string} [name] - Name of the product.
 * @property {NetQuantityResponseSchema} [net_quantity]
 * @property {number} [no_of_boxes] - Number of boxes required for packaging the product.
 * @property {string} [pending] - Pending state of the product, such as pending approval.
 * @property {string} [primary_color] - Primary color of the product.
 * @property {string[]} [product_group_tag] - Tags associated with the product group.
 * @property {ProductPublished} [product_publish]
 * @property {ReturnConfigResponseSchema} [return_config]
 * @property {string} [short_description] - Short description of the product.
 * @property {string} [size_guide] - Size guide for the product.
 * @property {Object[]} [sizes] - List of available sizes for the product.
 * @property {string} [slug] - Unique slug identifier for the product.
 * @property {string} [stage] - Current stage of the product (e.g., pending, verified).
 * @property {string[]} [tags] - List of tags associated with the product.
 * @property {TaxIdentifier} [tax_identifier]
 * @property {Object} [teaser_tag] - Teaser tags for the product.
 * @property {string} [template_tag] - Template tag associated with the product.
 * @property {Trader[]} [trader] - List of traders associated with the product.
 * @property {number} [uid] - Unique identifier for the product.
 * @property {Object} [variant_group] - Variant group details for the product.
 * @property {Object} [variant_media] - Media related to product variants.
 * @property {Object} [variants] - Product variants information.
 * @property {VerifiedBy} [verified_by]
 * @property {string} [verified_on] - Timestamp when the product was verified.
 * @property {string[]} [store_id_list] - List of store IDs where the product is
 *   available.
 * @property {string} [action] - Action to be performed on the product.
 */
/**
 * @typedef RawProductListingResponseSchema
 * @property {RawProduct[]} [items] - A list of raw product items.
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
 * @property {string[]} [_id]
 * @property {string} [description]
 * @property {AttributeMasterDetails} [details]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterFilter} [filters]
 * @property {boolean} [is_nested]
 * @property {string} [logo]
 * @property {AttributeMasterMeta} [meta]
 * @property {string} [name]
 * @property {AttributeMaster} [schema]
 * @property {string} [slug]
 */
/**
 * @typedef LatLong
 * @property {string} type - Type of coordinate data.
 * @property {number[]} coordinates - Array containing longitude and latitude coordinates.
 */
/**
 * @typedef ApplicationLocationAddressSchema
 * @property {string} [address1] - Primary address line.
 * @property {string} [address2] - Secondary address line.
 * @property {number} [pincode] - Pincode of the store's location.
 * @property {string} [city] - City where the store is located.
 * @property {string} [country] - Country where the store is located.
 * @property {string} [state] - State where the store is located.
 * @property {LatLong} [lat_long]
 * @property {string} [country_code] - Country code for the store's location.
 * @property {Object} [address_meta] - Schema for address metadata.
 */
/**
 * @typedef GetAddressSchema
 * @property {string} [address1] - Primary address line, typically including
 *   street name, building number, or apartment details.
 * @property {string} [address2] - Secondary address line, used for additional
 *   location details such as locality, neighborhood, or landmark.
 * @property {string} [address_type] - The type of address.
 * @property {string} [city] - The city where the address is located.
 * @property {string} [country] - The country where the address is located.
 * @property {string} [country_code] - The country code representing the
 *   country, such as 'IN' for India.
 * @property {string} [landmark] - A nearby landmark that helps identify the
 *   address location.
 * @property {number} [latitude] - The latitude coordinate of the address, used
 *   for geolocation purposes.
 * @property {number} [longitude] - The longitude coordinate of the address,
 *   used for geolocation purposes.
 * @property {string} [pincode] - The postal code or ZIP code associated with the address.
 * @property {string} [state] - The state or region where the address is located.
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
 * @property {CollectionSchedule} [_schedule]
 * @property {Action} [action]
 * @property {boolean} [allow_facets] - Indicates whether facets are allowed for
 *   filtering the collection.
 * @property {boolean} [allow_sort] - Indicates whether sorting options are
 *   allowed for the collection.
 * @property {string} [app_id] - The application ID associated with the collection.
 * @property {CollectionBadge} [badge]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
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
 * @typedef GetCollectionItemsResponseSchema
 * @property {ProductFilters[]} [filters] - An array of filters applicable to
 *   the products in the collection.
 * @property {ApplicationProductsSchema[]} [items] - An array of products that
 *   belong to the collection.
 * @property {Page} [page]
 * @property {ProductSortOn[]} [sort_on] - Sorting options available for the
 *   products in the collection.
 */
/**
 * @typedef GetCollectionListingResponseSchema
 * @property {CollectionListingFilter} [filters]
 * @property {GetCollectionDetailNest[]} [items] - Array of nested collection details.
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
 * @property {GetAddressSchema[]} [addresses] - List of addresses associated
 *   with the company.
 * @property {string} [business_type] - Specifies the business model or legal
 *   structure of the company, such as 'LLC', 'Corporation', or 'Proprietorship'.
 * @property {string} [company_type] - Indicates the type of company, such as
 *   'manufacturer-owner', 'retailer', or 'wholesaler'.
 * @property {UserSchema} [created_by]
 * @property {string} [created_on] - The date and time when the company record
 *   was created.
 * @property {UserSchema} [modified_by]
 * @property {string} [modified_on] - The date and time when the company record
 *   was last updated.
 * @property {string} [name] - The registered name of the company.
 * @property {string} [reject_reason] - If applicable, the reason why the
 *   company's application or status was rejected.
 * @property {string} [stage] - Current operational stage of the company, such
 *   as 'active', 'pending', or 'rejected'.
 * @property {number} [uid] - Unique identifier for the company within the system.
 * @property {UserSchema} [verified_by]
 * @property {string} [verified_on] - The date and time when the company's
 *   details were verified.
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
 * @property {ConfigItem[]} data
 * @property {PageResponseType} page
 */
/**
 * @typedef ConfigItem
 * @property {string} [app_id] - Unique identifier for the application to which
 *   this configuration belongs.
 * @property {AttributeConfig[]} [attributes]
 * @property {string} [id] - Unique identifier for the configuration.
 * @property {boolean} [is_active] - Indicates if this configuration is
 *   currently active for the application.
 * @property {boolean} [is_default] - Specifies whether this is the default
 *   configuration for the application.
 * @property {string} [name] - The name of the configuration group.
 * @property {number} [priority] - The priority of this configuration group.
 * @property {string} [slug] - A URL-friendly identifier for the configuration group.
 * @property {string[]} [template_slugs] - A list of template slugs associated
 *   with this configuration.
 */
/**
 * @typedef AttributeConfig
 * @property {string} [display_type] - The type of display used for the
 *   attribute (e.g., text, dropdown).
 * @property {boolean} [is_active] - Indicates whether the attribute is currently active.
 * @property {string} [key] - A unique key or identifier for the attribute.
 * @property {string} [name] - The name of the attribute.
 * @property {number} [priority] - The priority of the attribute.
 * @property {string} [slug] - A URL-friendly identifier for the attribute.
 */
/**
 * @typedef GetDepartment
 * @property {RequestUserSchema} [created_by]
 * @property {string} [created_on] - Timestamp of when the department was created.
 * @property {boolean} [is_active] - Indicates whether the department is currently active.
 * @property {string} [item_type]
 * @property {string} [logo] - URL of the department's logo.
 * @property {RequestUserSchema} [modified_by]
 * @property {string} [modified_on] - Timestamp of when the department was last modified.
 * @property {string} [id] - Alternate unique identifier for the department.
 * @property {string} [name] - Name of the department.
 * @property {string} [slug] - URL-friendly slug for the department.
 * @property {string[]} [synonyms] - List of alternative names for the department.
 * @property {number} [priority_order] - The priority order of the department
 *   for display purposes.
 * @property {number} [uid] - Unique identifier for the department within the system.
 */
/**
 * @typedef GetInventories
 * @property {InventoryBrandMeta} [brand]
 * @property {InventoryCompanyMeta} [company]
 * @property {string} [country_of_origin] - Country where the product was manufactured.
 * @property {RequestUserSchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {InventoryDimensionResponseSchema} [dimension]
 * @property {string} [expiration_date] - Expiration date of the product.
 * @property {string} [id] - Unique identifier of the product.
 * @property {Identifier} [identifier]
 * @property {string} [inventory_updated_on] - The last date when inventory
 *   information was updated.
 * @property {boolean} [is_set] - Indicates if the product is sold as a set.
 * @property {number} [item_id] - Unique item ID for the product.
 * @property {InventoryManufacturerResponseSchema} [manufacturer]
 * @property {RequestUserSchema} [modified_by]
 * @property {Object} [platforms] - Indicates platform availability status for
 *   the product.
 * @property {PriceArticle} [price]
 * @property {QuantitiesArticle} [quantities]
 * @property {ReturnConfig} [return_config]
 * @property {string} [seller_identifier] - Seller’s identifier for the product.
 * @property {string} [size] - Size of the product.
 * @property {string} [stage] - Current stage of the product, such as verified or pending.
 * @property {ArticleStoreResponseSchema} [store]
 * @property {string[]} [tags] - Tags associated with the product.
 * @property {TaxIdentifier} [tax_identifier]
 * @property {number} [total_quantity] - Total available quantity of the product.
 * @property {string} [trace_id] - Trace ID for inventory management.
 * @property {boolean} [track_inventory] - Indicates if the inventory is being tracked.
 * @property {TraderResponseSchema[]} [trader] - Information about traders, such
 *   as manufacturers or importers.
 * @property {string} [uid] - Unique identifier for the product.
 * @property {InventoryWeightResponseSchema} [weight]
 */
/**
 * @typedef GetInventoriesResponseSchema
 * @property {GetInventories[]} [items] - List of product inventories.
 * @property {Page} [page]
 */
/**
 * @typedef GetLocationSchema
 * @property {Object} [_custom_json] - Custom JSON data specific to the location.
 * @property {GetAddressSchema} address
 * @property {string} store_code - Unique identifier code for the store.
 * @property {GetCompanySchema} [company]
 * @property {SellerPhoneNumber[]} [contact_numbers] - List of contact numbers
 *   associated with the store.
 * @property {UserSchema} [created_by]
 * @property {string} [created_on] - Timestamp indicating when the location was created.
 * @property {string} display_name - Display name of the location for easier
 *   identification.
 * @property {Document[]} [documents] - Documents related to the store location.
 * @property {InvoiceDetailsSchema} [gst_credentials]
 * @property {LocationIntegrationType} [integration_type]
 * @property {LocationManagerSchema} [manager]
 * @property {UserSchema} [modified_by]
 * @property {string} [modified_on] - Timestamp indicating when the location
 *   details were last modified.
 * @property {string} name - Name of the store location.
 * @property {string[]} [notification_emails] - Email addresses for sending
 *   notifications related to this store.
 * @property {string} phone_number - Primary phone number for contacting the store.
 * @property {ProductReturnConfigSchema} [product_return_config]
 * @property {string} [stage] - Current operational stage of the store.
 * @property {string} [store_type] - Type of store.
 * @property {LocationDayWiseSchema[]} [timing] - The daily operational timings
 *   for the store.
 * @property {number} [uid] - Unique identifier for the store.
 * @property {UserSchema} [verified_by]
 * @property {string} [verified_on] - Timestamp when the store location was verified.
 * @property {Object} [warnings] - Warnings or issues associated with the store, if any.
 * @property {number} [company_id] - ID of the company to which this store belongs.
 */
/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
 */
/**
 * @typedef GetProductBundleCreateResponseSchema
 * @property {string} choice - Specifies the type of bundle, e.g., single or multi.
 * @property {number} [company_id] - Unique identifier for the company that owns
 *   the product bundle.
 * @property {CreatedBy} [created_by]
 * @property {string} [created_on] - Timestamp when the product bundle was created.
 * @property {string} [id] - Unique identifier for the product bundle.
 * @property {boolean} is_active - Indicates if the product bundle is active or not.
 * @property {string} [logo] - URL of the product bundle's logo, or null if not available.
 * @property {Object} [meta] - Additional metadata about the product bundle.
 * @property {ModifiedBy} [modified_by]
 * @property {string} [modified_on] - Timestamp when the product bundle was last modified.
 * @property {string} name - Name of the product bundle.
 * @property {string[]} [page_visibility] - Visibility settings for the product
 *   bundle across different pages.
 * @property {ProductBundleItem[]} products - List of products that are part of
 *   the product bundle.
 * @property {boolean} [same_store_assignment] - Indicates whether all products
 *   in the bundle belong to the same store.
 * @property {string} slug - Unique slug used to identify the product bundle in URLs.
 */
/**
 * @typedef GetProductBundleListingResponseSchema
 * @property {GetProductBundleCreateResponseSchema[]} [items] - List of product
 *   bundles that are returned in the response.
 * @property {Page} [page]
 */
/**
 * @typedef GetProductBundleResponseSchema
 * @property {string} [choice] - Specifies the type of product bundle, e.g.,
 *   'single' or 'multi'.
 * @property {number} [company_id] - The unique identifier of the company that
 *   owns the product bundle.
 * @property {boolean} [is_active] - Indicates whether the product bundle is active.
 * @property {string} [logo] - URL of the logo associated with the product bundle.
 * @property {Object} [meta] - Additional metadata for the product bundle.
 * @property {string} [name] - The name of the product bundle.
 * @property {string[]} [page_visibility] - List of pages where the product
 *   bundle is visible, e.g., 'pdp'.
 * @property {GetProducts[]} [products] - A list of products included in the bundle.
 * @property {boolean} [same_store_assignment] - Indicates whether all products
 *   in the bundle are assigned to the same store.
 * @property {string} [slug] - Unique URL-friendly identifier for the product bundle.
 */
/**
 * @typedef GetProducts
 * @property {boolean} [allow_remove] - Indicates whether the product can be
 *   removed from the bundle.
 * @property {boolean} [auto_add_to_cart] - Specifies if the product is
 *   automatically added to the cart.
 * @property {boolean} [auto_select] - Indicates if the product is automatically
 *   selected in the bundle.
 * @property {number} [max_quantity] - The maximum quantity of the product that
 *   can be added to the bundle.
 * @property {number} [min_quantity] - The minimum quantity of the product that
 *   must be added to the bundle.
 * @property {number} [product_uid] - Unique identifier for the product.
 * @property {ProductDetails} [product_details]
 */
/**
 * @typedef ProductDetails
 * @property {string} [slug] - Unique URL-friendly identifier for the product.
 * @property {number} [quantity] - The quantity of the product available.
 * @property {Object} [attributes] - A set of key-value pairs representing the
 *   attributes of the product, such as pattern, gender, etc.
 * @property {Price} [price]
 * @property {string[]} [images] - List of URLs pointing to images of the product.
 * @property {number} [uid] - Unique identifier for the product.
 * @property {string} [item_code] - Code assigned to the product for inventory purposes.
 * @property {Object} [identifier] - Identification details for the product,
 *   including EANs (European Article Numbers).
 * @property {string[]} [sizes] - List of available sizes for the product.
 * @property {string} [country_of_origin] - Country where the product was manufactured.
 */
/**
 * @typedef GetCollectionDetailResponseSchema
 * @property {Object} [_custom_json] - Custom JSON data associated with the collection.
 * @property {Object} [_locale_language] - Locale-specific language details.
 * @property {CollectionSchedule} [_schedule]
 * @property {Object} [action] - Action details, including navigation or page
 *   redirection information.
 * @property {boolean} [allow_facets] - Indicates whether facets are allowed for
 *   filtering the collection.
 * @property {boolean} [allow_sort] - Indicates whether sorting is enabled for
 *   the collection.
 * @property {string} [app_id] - The unique identifier of the application to
 *   which the collection belongs.
 * @property {CollectionBadge} [badge]
 * @property {ImageUrls} [banners]
 * @property {string} [description] - A textual description of the collection.
 * @property {boolean} [is_active] - Indicates whether the collection is currently active.
 * @property {boolean} [is_visible] - Indicates whether the collection is
 *   visible on the platform.
 * @property {Media} [logo]
 * @property {Object} [meta] - Metadata associated with the collection.
 * @property {string} [name] - The name of the collection.
 * @property {number} [priority] - The priority level assigned to the collection.
 * @property {boolean} [published] - Indicates whether the collection is
 *   published and visible to customers.
 * @property {CollectionQuery[]} [query] - Query details that define how items
 *   in the collection are filtered.
 * @property {SeoDetail} [seo]
 * @property {string} [slug] - The URL-friendly slug for the collection.
 * @property {string} [sort_on] - The sorting criteria applied to the collection
 *   (e.g., by latest, discount).
 * @property {string[]} [tags] - Tags associated with the collection.
 * @property {string} [type] - The type of the collection (e.g., query-based).
 * @property {string} [uid] - A unique identifier for the collection.
 * @property {string} [_id] - A unique identifier for the collection, matching `uid`.
 * @property {string[]} [visible_facets_keys] - Keys representing visible facets
 *   for filtering.
 */
/**
 * @typedef CommonResponseSchemaCollection
 * @property {string} [message] - A message providing details about the response.
 */
/**
 * @typedef GetQueryFiltersKeysResponseSchema
 * @property {ProductFiltersKeysOnly[]} [filters] - An array of available filter
 *   keys for querying products.
 * @property {Object} operators - A map of available operators that can be used
 *   for querying, where the key is the operator type and the value is a string.
 * @property {ProductSortOn[]} [sort_on] - An array of sorting options available
 *   for the products.
 */
/**
 * @typedef GetQueryFiltersResponseSchema
 * @property {CollectionProductFilters[]} [filters] - An array of filters to be
 *   applied on products while querying.
 * @property {Object} operators - A map of operators available for product
 *   queries, where the key is the operator type and the value is a string.
 * @property {CollectionProductSortOn[]} [sort_on] - An array of sorting options
 *   to be applied to product queries.
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
 * @property {string} action - Specifies whether the item should be added or
 *   removed from the collection.
 * @property {number} item_id - The unique identifier of the item in the collection.
 * @property {number} [priority] - The priority level of the item in the
 *   collection, with higher values representing higher priority.
 */
/**
 * @typedef CollectionItemUpdateSchema
 * @property {boolean} [allow_facets] - Indicates whether facets are allowed for
 *   filtering the collection items.
 * @property {boolean} [allow_sort] - Indicates whether sorting is enabled for
 *   the collection items.
 * @property {CollectionItemSchemaV2[]} [items] - A list of items in the collection.
 * @property {CollectionQuerySchemaV2[]} [query] - A list of query conditions to
 *   filter the collection items.
 * @property {string} type - The type of the collection item, defining its classification.
 * @property {string[]} [visible_facets_keys] - A list of keys representing
 *   visible facets for the collection, used for filtering.
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
 * @typedef CreatedBySchema
 * @property {string} user_id - The unique identifier for the user who created
 *   the resource.
 * @property {string} username - The username of the user who created the resource.
 */
/**
 * @typedef ModifiedBySchema
 * @property {string} user_id - The unique identifier for the user who last
 *   modified the resource.
 * @property {string} username - The username of the user who last modified the resource.
 */
/**
 * @typedef HSNDataInsertV2
 * @property {string} country_code - Country code.
 * @property {CreatedBySchema} [created_by]
 * @property {ModifiedBySchema} [modified_by]
 * @property {string} [created_on] - Date and time when the HSN data was created.
 * @property {string} description - Description of the HSN data.
 * @property {string} hsn_code
 * @property {string} [hsn_code_id] - Unique identifier of the HSN code.
 * @property {string} [modified_on] - Date and time when the HSN data was last modified.
 * @property {Object} reporting_hsn - HSN code.
 * @property {string} [id] - Internal database identifier for the HSN data.
 * @property {TaxSlab[]} taxes - List of applicable tax slabs for the HSN data.
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
 * @property {Object} [stats] - Provides count of total/success/failed
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
 * @property {boolean} [has_next] - Indicates whether there is a next page of results.
 * @property {boolean} [has_previous] - Indicates whether there is a previous
 *   page of results.
 * @property {number} item_total - The total number of items available in the inventory.
 * @property {string} [next_id] - The identifier for fetching the next set of
 *   results. If null, there are no more results.
 * @property {string} type - The type of pagination being used, often indicating
 *   the method or strategy for paginating the results.
 */
/**
 * @typedef AddInventoryRequestPayload
 * @property {InventoryResponseSchema[]} [sizes]
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
 * @property {string} [currency] - The currency in which the item is priced, e.g., 'INR'.
 * @property {Object} [identifiers] - Object containing identifier details such
 *   as GTIN or SKU codes.
 * @property {string} [inventory_updated_on] - The date and time when the
 *   inventory was last updated, in ISO 8601 format.
 * @property {number} [item_id] - The unique identifier for the item in the
 *   inventory system.
 * @property {number} [price] - The original price of the item.
 * @property {number} [price_effective] - The effective price of the item after
 *   any discounts.
 * @property {number} [price_transfer] - The transfer price for the item (if applicable).
 * @property {number} [quantity] - The total quantity of the item available in
 *   the inventory.
 * @property {number} [sellable_quantity] - The quantity of the item that is
 *   available for sale.
 * @property {string} [seller_identifier] - An identifier for the seller,
 *   typically an SKU or unique code.
 * @property {string} [size] - The size of the item, if applicable.
 * @property {Object} [store] - Object containing details about the store where
 *   the item is stocked.
 * @property {string} [uid] - A unique identifier combining store ID and seller
 *   identifier.
 * @property {Object} [created_by] - Details of the user or entity that created
 *   the item record, including 'username' and 'user_id'.
 * @property {Object} [modified_by] - Details of the user or entity that last
 *   modified the item record, including 'username' and 'user_id'.
 * @property {string} [expiration_date] - The expiration date of the item, if
 *   applicable, in ISO 8601 format.
 * @property {string[]} [tags] - An array of tags or labels associated with the
 *   item for categorization or search purposes.
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
 * @typedef ApplicationInventorySellerIdentifierResponsePaginated
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
 * @property {InventoryReturnConfig} [return_config]
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
 * @property {Trader[]} [trader] - The traders associated with the article.
 * @property {string} uid - The unique identifier of the article.
 * @property {WeightResponseSchema} weight - The weight of the article.
 */
/**
 * @typedef ApplicationInventorySellerResponseSchema
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
 * @property {InventoryReturnConfig} [return_config]
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
 * @property {Trader[]} [trader] - The traders associated with the article.
 * @property {string} uid - The unique identifier of the article.
 * @property {WeightResponseSchema} weight - The weight of the article.
 * @property {DateMeta} [date_meta]
 * @property {Object} [platforms] - Platform-specific availability information.
 * @property {number} [price_marked] - Marked price of the item.
 * @property {number} [price_effective] - Effective price of the item after discount.
 * @property {string} [currency] - Currency in which the prices are listed.
 * @property {number} [price_selling] - Selling price of the item.
 * @property {Object} [discount_meta] - Discount metadata for the item.
 * @property {Object} [discount_applied] - Discounts applied to the item, if any.
 */
/**
 * @typedef InventorySet
 * @property {string} [name] - The name of the inventory set.
 * @property {number} [quantity] - The quantity of items available in the inventory set.
 * @property {SizeDistribution} size_distribution
 */
/**
 * @typedef InventoryStockResponseSchema
 * @property {Object[]} [items] - An array of inventory stock items. Each item
 *   represents a stock entry for a specific product or SKU.
 * @property {InventoryPage} page
 */
/**
 * @typedef InventoryUpdateResponseSchema
 * @property {InventoryResponseItem[]} [items]
 * @property {string} message - It is the success message of the inventory update.
 * @property {boolean} [success] - It is the success status of the inventory update.
 */
/**
 * @typedef InventoryValidationResponseSchema
 * @property {Object} [data]
 * @property {string} [message]
 */
/**
 * @typedef InvoiceCredSchema
 * @property {boolean} [enabled] - Indicates whether the invoice credentials are
 *   enabled for use.
 * @property {string} [password] - The password associated with the invoice credentials.
 * @property {string} [username] - The username or identifier used for the
 *   invoice credentials.
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
 * @typedef SizeGuideItem
 * @property {boolean} [active] - Indicates if the size guide is active or not.
 * @property {number} [brand_id] - The identifier for the brand associated with
 *   the size guide.
 * @property {number} [company_id] - The identifier for the company that owns
 *   the size guide.
 * @property {CreatedBySchema} [created_by]
 * @property {string} [created_on] - The timestamp when the size guide was created.
 * @property {Guide} [guide]
 * @property {string} [id] - The unique identifier for the size guide.
 * @property {ModifiedBySchema} [modified_by]
 * @property {string} [modified_on] - The timestamp when the size guide was last modified.
 * @property {string} [name] - The name of the size guide.
 * @property {string} [subtitle] - A short description or subtitle for the size guide.
 * @property {string} [tag] - A tag or identifier used to classify the size guide.
 * @property {string} [title] - The title of the size guide.
 * @property {string} [description] - A detailed description or HTML content
 *   providing more information about the size guide.
 * @property {string} [image] - A URL to an image associated with the size guide.
 */
/**
 * @typedef ListSizeGuide
 * @property {SizeGuideItem[]} [items] - A list of size guides, each containing
 *   detailed information about a product's dimensions, creation, and modification data.
 * @property {PageResponseSchema} [page]
 */
/**
 * @typedef LocationDayWiseSchema
 * @property {LocationTimingSchema} [closing]
 * @property {boolean} open - Indicates whether the store or location is open on
 *   the specified day.
 * @property {LocationTimingSchema} [opening]
 * @property {string} weekday - The day of the week for which the store timings
 *   are defined.
 */
/**
 * @typedef LocationIntegrationType
 * @property {string} [inventory] - The system used to manage inventory
 *   integration for the location.
 * @property {string} [order] - The system used to manage order integration for
 *   the location.
 */
/**
 * @typedef LocationListSchema
 * @property {GetLocationSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LocationManagerSchema
 * @property {string} [email] - Email address of the location manager.
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name] - Full name of the location manager.
 */
/**
 * @typedef LocationTimingSchema
 * @property {number} [hour] - The hour component of the time, represented in
 *   24-hour format.
 * @property {number} [minute] - The minute component of the time.
 */
/**
 * @typedef Logo
 * @property {string} [aspect_ratio] - Aspect ratio of the logo image, typically
 *   expressed as a string (e.g., '16:9').
 * @property {number} [aspect_ratio_f] - Numeric representation of the aspect
 *   ratio for scaling purposes.
 * @property {string} [secure_url] - Secure URL to the logo image.
 * @property {string} [url] - URL to the logo image.
 */
/**
 * @typedef MOQData
 * @property {number} [increment_unit] - The unit by which the quantity can be
 *   incremented after the minimum order quantity.
 * @property {number} [maximum] - The maximum number of units that can be
 *   ordered for the item.
 * @property {number} [minimum] - The minimum number of units required to place
 *   an order for the item.
 */
/**
 * @typedef ManufacturerResponseSchema
 * @property {string} address - The address of the manufacturer.
 * @property {boolean} is_default - Indicates if it is the default manufacturer.
 * @property {string} name - The name of the manufacturer.
 */
/**
 * @typedef InventoryManufacturerResponseSchema
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
 * @typedef DepartmentMedia
 * @property {string} [aspect_ratio] - The aspect ratio of the media, typically
 *   represented as width:height (e.g., '16:9').
 * @property {string} [type] - The type of media, such as 'image', 'video', or
 *   other supported media formats.
 * @property {string} [url] - The URL where the media resource is hosted and can
 *   be accessed.
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
 * @property {string} [unit] - The unit of measurement for the net quantity.
 * @property {number} [value] - The actual quantity of the product in the specified unit.
 */
/**
 * @typedef NextSchedule
 * @property {string} [end] - The end time of the schedule.
 * @property {string} [start] - The start time of the schedule.
 */
/**
 * @typedef LocationPriceRequestSchema
 * @property {number} price_effective - The effective price of the inventory item.
 * @property {number} price_marked - The marked price of the inventory item.
 * @property {string[]} [tags] - Tags associated with inventory item.
 */
/**
 * @typedef LocationQuantityRequestSchema
 * @property {string} [expiration_date] - The expiration date of the inventory item.
 * @property {number} total_quantity - The total quantity of the inventory item.
 */
/**
 * @typedef LocationPriceQuantitySuccessResponseSchema
 * @property {string} message - It is the success message of the price/quantity update.
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
 * @property {Object} [alt_text] - Alternate text associated with the item,
 *   typically for accessibility purposes.
 * @property {boolean} [is_cod] - Indicates whether Cash on Delivery (COD) is
 *   available for this item.
 * @property {boolean} [is_gift] - Indicates whether the item is marked as a gift.
 * @property {MOQData} [moq] - Minimum order quantity (MOQ) details for the
 *   item, including minimum units and increment units.
 * @property {SEOData} [seo] - Search Engine Optimization (SEO) related
 *   information, including title, description, sitemap details, and meta tags.
 * @property {Object} [_custom_json] - Custom JSON data for the item, allowing
 *   flexibility for additional item-specific information.
 * @property {MetaFields[]} [_custom_meta] - An array of custom meta fields
 *   associated with the item for extended metadata.
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
 * @typedef PageResponseSchema
 * @property {number} [current] - It is the current page of the page response schema.
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
 * @typedef ProductListingDetailPrice
 * @property {string} [currency_code] - The ISO code of the currency in which
 *   the price is displayed.
 * @property {string} [currency_symbol] - The symbol of the currency
 *   corresponding to the currency code.
 * @property {number} [max] - The maximum price for the product.
 * @property {number} [min] - The minimum price for the product.
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
 * @property {Object} [_custom_json] - A custom JSON object that can hold any
 *   additional key-value pairs specific to the product.
 * @property {number[]} [all_company_ids] - List of company IDs associated with
 *   the product.
 * @property {string[]} [all_identifiers] - List of identifiers such as SKU, barcode, etc.
 * @property {Object[]} [all_sizes] - List of available sizes for the product.
 * @property {Object} [attributes] - Additional attributes of the product such
 *   as material, color, pattern, etc.
 * @property {Brand} [brand]
 * @property {number} [brand_uid] - Unique ID of the brand associated with the product.
 * @property {Object} [category] - Details about the category the product belongs to.
 * @property {string} [category_slug] - Unique slug representing the category.
 * @property {number} [category_uid] - Unique ID of the product category.
 * @property {string} [color] - Primary color of the product.
 * @property {number} [company_id] - ID of the company managing the product.
 * @property {string} [country_of_origin] - The country where the product was
 *   manufactured.
 * @property {Object} [created_by] - Details of the user or entity that created
 *   the product.
 * @property {string} [created_on] - Timestamp indicating when the product was created.
 * @property {string} [currency] - The currency used for pricing the product.
 * @property {Object} [custom_order] - Information related to custom orders,
 *   including lead time and production details.
 * @property {number[]} [departments] - List of department IDs related to the product.
 * @property {string} [description] - Full description of the product.
 * @property {string[]} [highlights] - List of key highlights of the product.
 * @property {string} [hsn_code] - HSN (Harmonized System Nomenclature) code for
 *   tax classification.
 * @property {string} [id] - Unique identifier for the product in the system.
 * @property {string} [image_nature] - Nature of the product image, for example,
 *   'standard' or 'custom'.
 * @property {Image[]} [images] - List of images associated with the product.
 * @property {boolean} [is_active] - Indicates whether the product is currently
 *   active or not.
 * @property {boolean} [is_dependent] - Indicates whether the product depends on
 *   other products for its availability or configuration.
 * @property {boolean} [is_expirable] - Indicates if the product has an expiration date.
 * @property {boolean} [is_image_less_product] - Indicates if the product does
 *   not have an image associated.
 * @property {boolean} [is_physical] - Specifies if the product is a physical item.
 * @property {boolean} [is_set] - Indicates if the product is part of a set.
 * @property {string} [item_code]
 * @property {string} [item_type]
 * @property {string[]} [l3_mapping] - List of category mappings for the product
 *   (level 3 categories).
 * @property {Media[]} [media] - Media objects associated with the product, such
 *   as videos or additional images.
 * @property {Object} [modified_by] - Details of the user or entity that last
 *   modified the product.
 * @property {string} [modified_on] - Timestamp indicating the last time the
 *   product was modified.
 * @property {Object} [moq] - Minimum Order Quantity (MOQ) details for the product.
 * @property {string} [name] - Name of the product.
 * @property {NetQuantityResponseSchema} [net_quantity]
 * @property {number} [no_of_boxes] - Number of boxes required to pack the product.
 * @property {string} [pending] - Status indicating if there are pending actions
 *   or updates required for the product.
 * @property {string} [primary_color] - Primary color of the product.
 * @property {string[]} [product_group_tag] - Tags for grouping the product in categories.
 * @property {ProductPublished} [product_publish]
 * @property {ReturnConfigResponseSchema} [return_config]
 * @property {string} [short_description] - A brief description of the product.
 * @property {string} [size_guide] - Link or identifier for the product's size guide.
 * @property {Object[]} [sizes] - List of available sizes for the product along
 *   with pricing and identifier information.
 * @property {string} [slug] - URL slug for the product page.
 * @property {string} [stage] - The current stage of the product in the system
 *   workflow (e.g., pending, verified).
 * @property {string[]} [tags] - Tags or keywords associated with the product
 *   for search and categorization.
 * @property {TaxIdentifier} [tax_identifier]
 * @property {Object} [teaser_tag] - A short promotional tag or label for the product.
 * @property {string} [template_tag] - Tag representing the template used for
 *   the product listing.
 * @property {Trader[]} [trader] - List of traders or sellers associated with the product.
 * @property {number} [uid] - Unique identifier for the product.
 * @property {Object} [variant_group] - Details about the product's variant
 *   grouping (e.g., color or size variants).
 * @property {Object} [variant_media] - Media associated with specific variants
 *   of the product.
 * @property {Object} [variants] - Details about the product's available variants.
 * @property {VerifiedBy} [verified_by]
 * @property {string} [verified_on] - Timestamp indicating when the product was verified.
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
 * @property {boolean} [allow_remove] - Indicates whether the product can be
 *   removed from the bundle.
 * @property {boolean} [auto_add_to_cart] - Specifies if the product is
 *   automatically added to the cart.
 * @property {boolean} [auto_select] - Indicates if the product is automatically
 *   selected in the bundle.
 * @property {number} max_quantity - Maximum quantity of the product that can be
 *   added to the bundle.
 * @property {number} min_quantity - Minimum quantity of the product that must
 *   be added to the bundle.
 * @property {number} product_uid - Unique identifier for the product.
 */
/**
 * @typedef ProductBundleRequestSchema
 * @property {string} choice - Specifies the type of product bundle (e.g.,
 *   'single' or 'multi').
 * @property {number} [company_id] - The unique identifier of the company to
 *   which the product bundle belongs.
 * @property {Object} [created_by] - Information about the user who created the
 *   product bundle, including user ID and username.
 * @property {string} [created_on] - The timestamp when the product bundle was created.
 * @property {boolean} is_active - Indicates whether the product bundle is
 *   currently active.
 * @property {string} [logo] - URL of the logo associated with the product
 *   bundle, if available. Can be null.
 * @property {Object} [meta] - Additional metadata for the product bundle.
 * @property {Object} [modified_by] - Information about the user who last
 *   modified the product bundle, including user ID and username.
 * @property {string} [modified_on] - The timestamp when the product bundle was
 *   last modified.
 * @property {string} name - The name of the product bundle.
 * @property {string[]} [page_visibility] - Pages where the product bundle is
 *   visible (e.g., 'pdp' for product display page).
 * @property {ProductBundleItem[]} products - A list of products included in the
 *   bundle. A maximum of 10 products can be added.
 * @property {boolean} [same_store_assignment] - Indicates whether all products
 *   in the bundle are assigned to the same store.
 * @property {string} slug - A URL-friendly unique identifier for the product bundle.
 */
/**
 * @typedef ProductBundleUpdateRequestSchema
 * @property {string} choice - Specifies the type of product bundle (e.g.,
 *   'single' or 'multi').
 * @property {number} [company_id] - The unique identifier of the company to
 *   which the product bundle belongs.
 * @property {boolean} is_active - Indicates whether the product bundle is
 *   currently active.
 * @property {string} [logo] - URL of the logo associated with the product
 *   bundle, if available. Can be null.
 * @property {Object} [meta] - Additional metadata for the product bundle.
 * @property {string} name - The name of the product bundle.
 * @property {string[]} [page_visibility] - Pages where the product bundle is
 *   visible (e.g., 'pdp' for product display page).
 * @property {ProductBundleItem[]} products - A list of products included in the
 *   bundle. A maximum of 10 products can be added.
 * @property {boolean} [same_store_assignment] - Indicates whether all products
 *   in the bundle are assigned to the same store.
 * @property {string} slug - A URL-friendly unique identifier for the product bundle.
 */
/**
 * @typedef ProductConfigurationDownloads
 * @property {Object[]} [data]
 * @property {boolean} [multivalue]
 */
/**
 * @typedef ProductUpdateSchemaV2
 * @property {Object} [_custom_json] - Custom JSON data that can be used for
 *   additional product properties.
 * @property {string} [action] - The action to perform wrt to the product (e.g.,
 *   upsert, update, delete).
 * @property {Object} [attributes] - Additional attributes related to the product.
 * @property {number} brand_uid - Unique identifier for the product's brand.
 * @property {string} [bulk_job_id] - Job ID associated with bulk operations.
 * @property {string} category_slug - The category to which the product belongs.
 * @property {string} [change_request_id] - Change request identifier for product updates.
 * @property {number} company_id - Unique identifier for the company associated
 *   with the product.
 * @property {string} country_of_origin - The country where the product was
 *   manufactured or sourced.
 * @property {string} currency - The currency in which the product's price is listed.
 * @property {CustomOrder} [custom_order]
 * @property {number[]} departments - List of department IDs associated with the product.
 * @property {string} [description] - A detailed description of the product.
 * @property {string[]} [highlights] - Product highlights or key features.
 * @property {boolean} [is_active] - Flag to indicate if the product is active.
 * @property {boolean} [is_dependent] - Flag to indicate if the product is
 *   dependent on other products.
 * @property {boolean} [is_image_less_product] - Flag to indicate if the product
 *   does not have associated images.
 * @property {boolean} [is_set] - Flag to indicate if the product is part of a set.
 * @property {string} item_code - Unique item code or SKU of the product.
 * @property {string} item_type - Type of the product (e.g., standard, set,
 *   composite, digital).
 * @property {Media[]} [media] - List of media URLs (images, videos) associated
 *   with the product.
 * @property {boolean} [multi_size] - Indicates if the product supports multiple sizes.
 * @property {string} name - The name of the product.
 * @property {NetQuantity} [net_quantity]
 * @property {number} [no_of_boxes] - Number of boxes required to package the product.
 * @property {string[]} [product_group_tag] - Tags to group products together
 *   for classification.
 * @property {ProductPublish} [product_publish]
 * @property {string} [requester] - The role requesting the product operation
 *   (admin or user).
 * @property {ReturnConfig} return_config
 * @property {string} [short_description] - A short description of the product,
 *   up to 50 characters.
 * @property {string} [size_guide] - Identifier for the product's size guide.
 * @property {Object[]} sizes - List of sizes available for the product.
 * @property {string} slug - URL-friendly identifier for the product.
 * @property {string[]} [tags] - List of tags associated with the product.
 * @property {TaxIdentifier} tax_identifier
 * @property {TeaserTag} [teaser_tag]
 * @property {string} template_tag - Template tag for the product, used for
 *   classification.
 * @property {Trader[]} trader - List of traders associated with the product.
 * @property {number} [uid] - Unique identifier for the product.
 * @property {Object} [variant_group] - Variant group information for the product.
 * @property {Object} [variant_media] - Media related to product variants.
 * @property {Object} [variants] - Variants information for the product.
 */
/**
 * @typedef ProductCreateSchemaV2
 * @property {Object} [_custom_json] - Custom JSON data that can be used for
 *   additional product properties.
 * @property {string} [action] - The action to perform wrt to the product (e.g.,
 *   upsert, update, delete).
 * @property {Object} [attributes] - Additional attributes related to the product.
 * @property {number} brand_uid - Unique identifier for the product's brand.
 * @property {string} [bulk_job_id] - Job ID associated with bulk operations.
 * @property {string} category_slug - The category to which the product belongs.
 * @property {string} [change_request_id] - Change request identifier for product updates.
 * @property {number} company_id - Unique identifier for the company associated
 *   with the product.
 * @property {string} country_of_origin - The country where the product was
 *   manufactured or sourced.
 * @property {string} currency - The currency in which the product's price is listed.
 * @property {CustomOrder} [custom_order]
 * @property {number[]} departments - List of department IDs associated with the product.
 * @property {string} [description] - A detailed description of the product.
 * @property {string[]} [highlights] - Product highlights or key features.
 * @property {boolean} [is_active] - Flag to indicate if the product is active.
 * @property {boolean} [is_dependent] - Flag to indicate if the product is
 *   dependent on other products.
 * @property {boolean} [is_image_less_product] - Flag to indicate if the product
 *   does not have associated images.
 * @property {boolean} [is_set] - Flag to indicate if the product is part of a set.
 * @property {string} item_code - Unique item code or SKU of the product.
 * @property {string} item_type - Type of the product (e.g., standard, set,
 *   composite, digital).
 * @property {Media[]} [media] - List of media URLs (images, videos) associated
 *   with the product.
 * @property {boolean} [multi_size] - Indicates if the product supports multiple sizes.
 * @property {string} name - The name of the product.
 * @property {NetQuantity} [net_quantity]
 * @property {number} [no_of_boxes] - Number of boxes required to package the product.
 * @property {string[]} [product_group_tag] - Tags to group products together
 *   for classification.
 * @property {ProductPublish} [product_publish]
 * @property {string} [requester] - The role requesting the product operation
 *   (admin or user).
 * @property {ReturnConfig} return_config
 * @property {string} [short_description] - A short description of the product,
 *   up to 50 characters.
 * @property {string} [size_guide] - Identifier for the product's size guide.
 * @property {Object[]} sizes - List of sizes available for the product.
 * @property {string} slug - URL-friendly identifier for the product.
 * @property {string[]} [tags] - List of tags associated with the product.
 * @property {TaxIdentifier} tax_identifier
 * @property {TeaserTag} [teaser_tag]
 * @property {string} template_tag - Template tag for the product, used for
 *   classification.
 * @property {Trader[]} trader - List of traders associated with the product.
 * @property {Object} [variant_group] - Variant group information for the product.
 * @property {Object} [variant_media] - Media related to product variants.
 * @property {Object} [variants] - Variants information for the product.
 */
/**
 * @typedef ProductDetail
 * @property {Object} [attributes] - Key-value pairs representing various
 *   product attributes.
 * @property {ProductBrand} [brand]
 * @property {string} [description] - Detailed description of the product.
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes] - Grouped
 *   attributes of the product, such as product details and specifications.
 * @property {boolean} [has_variant] - Indicates whether the product has variants.
 * @property {string[]} [highlights] - Array of highlight features for the product.
 * @property {string} [image_nature] - The nature of the product's images.
 * @property {string} [item_code] - Unique item code for the product.
 * @property {string} [item_type] - Type of the item.
 * @property {Media[]} [medias] - Array of media objects such as images and
 *   videos for the product.
 * @property {string} [name] - Name of the product.
 * @property {string} [product_online_date] - Date when the product was made
 *   available online.
 * @property {Object} [promo_meta] - Promotional metadata associated with the product.
 * @property {number} [rating] - Average rating of the product.
 * @property {number} [rating_count] - Total number of ratings for the product.
 * @property {string} [short_description] - A brief description of the product.
 * @property {string[]} [similars] - Array of similar products.
 * @property {string} slug - Unique slug for the product, used in URLs.
 * @property {Object} [teaser_tag] - Teaser tag information related to the product.
 * @property {string[]} [tryouts] - Array of product tryout options.
 * @property {string} [type] - The type of item.
 * @property {number} [uid] - Unique identifier for the product.
 * @property {string} [country_of_origin] - Country where the product was manufactured.
 * @property {ApplicationProductCategoryItem[]} [categories] - Array of
 *   categories the product belongs to.
 * @property {string[]} [tags] - Array of tags associated with the product.
 * @property {number} [no_of_boxes] - Number of boxes required for packaging the product.
 * @property {CustomOrder} [custom_order]
 */
/**
 * @typedef ProductDetailAttribute
 * @property {string} [key] - The name or key of the attribute.
 * @property {string} [type] - The type of the attribute.
 * @property {string} [value] - The value of the attribute corresponding to the key.
 */
/**
 * @typedef ProductDetailGroupedAttribute
 * @property {ProductDetailAttribute[]} [details] - An array of individual
 *   product attributes belonging to this group.
 * @property {string} [title] - The title or category name for the grouped attributes.
 */
/**
 * @typedef ProductDownloadsResponseSchema
 * @property {ProductTemplateExportResponseSchema[]} [items] - The items of the job.
 * @property {Page} [page]
 */
/**
 * @typedef CollectionProductFilters
 * @property {ProductFiltersKey} key
 * @property {CollectionProductFiltersValue[]} values - A list of possible
 *   values corresponding to the filter key. These values can be selected for
 *   filtering products.
 */
/**
 * @typedef ProductFilters
 * @property {ProductFiltersKey} key
 * @property {ProductFiltersValue[]} values - A list of possible values
 *   corresponding to the filter key. These values can be selected for filtering
 *   products.
 */
/**
 * @typedef GetQueryFiltersValuesResponseSchema
 * @property {ProductQueryFiltersValue[]} values - A list of filter values that
 *   can be used for querying products.
 * @property {Page} page
 */
/**
 * @typedef ProductFiltersKeysOnly
 * @property {ProductFiltersKey} key
 */
/**
 * @typedef ProductFiltersKey
 * @property {string} display - The display name of the filter key, used for
 *   showing on the UI.
 * @property {string} [kind] - The kind or type of filter, defining the category
 *   of the filter.
 * @property {string} [logo] - A URL to the logo associated with the filter key.
 * @property {string} name - The name of the filter key, used in the query.
 * @property {string[]} [operators] - A list of supported operators for this filter key.
 */
/**
 * @typedef ProductQueryFiltersValue
 * @property {string} [display] - The human-readable name of the category to be displayed.
 * @property {number} [count] - The number of items or products associated with
 *   this category.
 * @property {boolean} [is_selected] - Indicates whether this category is
 *   currently selected by the user.
 * @property {string} [value] - The internal value or identifier representing
 *   this category.
 * @property {string} [logo] - URL of the logo image associated with the category.
 */
/**
 * @typedef CollectionProductFiltersValue
 * @property {string} display - Display name of the filter value.
 * @property {number} [count] - The number of products that match this filter value.
 * @property {boolean} is_selected - Indicates whether the filter value is
 *   currently selected by the user.
 * @property {string} value - The actual value for the filter, used in filtering queries.
 * @property {Object} [logo]
 */
/**
 * @typedef ProductFiltersValue
 * @property {number} [count] - The number of products that match this filter value.
 * @property {string} [currency_code] - The currency code used if the filter is
 *   related to price.
 * @property {string} [currency_symbol] - The symbol of the currency used in
 *   price-related filters.
 * @property {string} display - The human-readable label for this filter value.
 * @property {string} [display_format] - A format string that controls how the
 *   value is displayed, commonly used for numeric or price ranges.
 * @property {boolean} is_selected - Indicates whether this filter value is
 *   currently selected by the user.
 * @property {number} [max] - The maximum value for a range filter (e.g., price range).
 * @property {number} [min] - The minimum value for a range filter (e.g., price range).
 * @property {string} [query_format] - The format string used in the query for
 *   filtering by this value.
 * @property {number} [selected_max] - The maximum value selected by the user in
 *   a range filter.
 * @property {number} [selected_min] - The minimum value selected by the user in
 *   a range filter.
 * @property {Object} value - The actual value of the filter.
 */
/**
 * @typedef CollectionProductListingDetail
 * @property {Object} [attributes] - Additional attributes for the product.
 * @property {ProductBrand} [brand]
 * @property {string} [color] - Color of the product.
 * @property {string} [description] - Detailed description of the product.
 * @property {string} [discount] - Discount information for the product.
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes] - Grouped
 *   attributes of the product.
 * @property {boolean} [has_variant] - Indicates if the product has variants.
 * @property {string[]} [highlights] - List of key highlights for the product.
 * @property {string} [image_nature] - Nature or type of image associated with
 *   the product.
 * @property {string} [item_code] - Unique code for the product item.
 * @property {string} [item_type] - Type of the product item, e.g., 'standard'
 *   or 'custom'.
 * @property {Media[]} [medias] - List of media files (e.g., images) associated
 *   with the product.
 * @property {string} [name] - Name of the product.
 * @property {ProductListingPrice} [price]
 * @property {string} [product_online_date] - The date when the product became
 *   available online.
 * @property {Object} [promo_meta] - Promotional metadata for the product.
 * @property {number} [rating] - Average rating for the product.
 * @property {number} [rating_count] - Number of users who have rated the product.
 * @property {boolean} [sellable] - Indicates if the product is sellable.
 * @property {string} [short_description] - Short description of the product.
 * @property {string[]} [similars] - List of similar products.
 * @property {string} slug - Slug or URL-friendly identifier for the product.
 * @property {Object} [teaser_tag] - Teaser tag for the product.
 * @property {string[]} [tryouts] - List of tryouts or tests associated with the product.
 * @property {string} [type] - Type of the product, e.g., 'product' or 'variant'.
 * @property {number} [uid] - Unique identifier for the product.
 * @property {ProductCategory[]} [categories] - List of categories associated
 *   with the product.
 * @property {Object[]} [_custom_meta] - Custom metadata related to the product.
 * @property {Action} [action]
 * @property {number} [discount_percentage] - Discount percentage on the product.
 * @property {boolean} [is_tryout] - Indicates if the product is available for tryout.
 * @property {number[]} [all_company_ids] - List of company IDs associated with
 *   the product.
 * @property {boolean} [is_custom_order] - Indicates if the product is a custom order.
 * @property {string[]} [collections] - List of collection IDs the product belongs to.
 * @property {number} [popularity] - Popularity score of the product.
 * @property {number} [brand_uid] - Unique identifier of the brand.
 * @property {number} [category_uid] - Unique identifier of the category.
 * @property {string} [verification_status] - Verification status of the product.
 * @property {string} [channel_identifier] - Identifier for the sales channel.
 * @property {string} [category_slug] - Slug identifier for the category.
 * @property {string} [size_guide] - Size guide information for the product.
 * @property {string} [created_on] - Timestamp when the product was created.
 * @property {string} [modified_on] - Timestamp when the product was last modified.
 * @property {number[]} [l3_categories] - List of L3 categories associated with
 *   the product.
 * @property {number[]} [store_ids] - List of store IDs where the product is available.
 * @property {number[]} [company_ids] - List of company IDs associated with the product.
 * @property {number[]} [departments] - List of departments associated with the product.
 * @property {string[]} [tags] - List of tags associated with the product.
 * @property {string[]} [l3_category_names] - List of L3 category names.
 * @property {string[]} [sizes] - List of available sizes for the product.
 * @property {string[]} [product_group_tag] - Tags related to the product group.
 * @property {boolean} [multi_size] - Indicates if the product is available in
 *   multiple sizes.
 * @property {boolean} [is_gift] - Indicates if the product is giftable.
 * @property {boolean} [is_cod] - Indicates if the product is eligible for cash
 *   on delivery.
 * @property {boolean} [is_dependent] - Indicates if the product is dependent on
 *   other products.
 * @property {boolean} [is_available] - Indicates if the product is currently available.
 * @property {NetQuantity} [net_quantity]
 * @property {ApplicationItemSEO} [seo]
 * @property {ApplicationItemMOQ} [moq]
 * @property {CustomOrder} [custom_order]
 * @property {string} [country_of_origin] - Country of origin of the product.
 * @property {Object} [_custom_json] - Custom JSON data for additional configurations.
 * @property {Object[]} [multi_categories] - Details of multiple categories
 *   associated with the product.
 * @property {Object} [variant_media] - Variant-specific media associated with
 *   the product.
 * @property {Object} [variant_group] - Group of variant-specific attributes.
 * @property {string[]} [identifiers] - Identifiers associated with the product.
 * @property {number} [no_of_boxes] - Number of boxes required for the product.
 * @property {string} [template_tag] - Template tag associated with the product.
 */
/**
 * @typedef ProductCategory
 * @property {number} [id] - Unique identifier of the category.
 * @property {number} [uid] - Unique identifier of the category UID.
 * @property {string} [name] - Name of the category.
 * @property {string} [slug] - Slug identifier for the category.
 * @property {Logo} [logo]
 * @property {Action} [action]
 * @property {Object} [_custom_json] - Custom JSON data for the category.
 */
/**
 * @typedef ApplicationCategoryAction
 * @property {CategoryPageAction} [page]
 * @property {string} [type] - The type of action to be performed, such as
 *   navigation to a category or product.
 */
/**
 * @typedef ApplicationCategoryItem
 * @property {Object} [_custom_json] - Custom JSON data related to the category.
 * @property {ApplicationCategoryAction} [action]
 * @property {number} [id] - The unique identifier for the category item.
 * @property {CategoryImage} [logo]
 * @property {string} [name] - The name of the category.
 * @property {number} [uid] - A unique identifier for the category item.
 */
/**
 * @typedef ApplicationProductMedia
 * @property {string} [type] - Type of the media (e.g., image, video).
 * @property {string} [url] - URL of the media item.
 */
/**
 * @typedef ApplicationProductCategoryItem
 * @property {number} [id] - Unique identifier of the category.
 * @property {number} [uid] - Unique identifier of the category (UID).
 * @property {string} [name] - Name of the category.
 * @property {string} [slug] - Slug or unique key for the category.
 * @property {ApplicationProductMedia} [logo]
 * @property {PageAction} [action]
 */
/**
 * @typedef CategoryPageAction
 * @property {CategoryQuery} [query]
 * @property {string} [type] - The type of page action, defining what should
 *   happen when a category is selected.
 */
/**
 * @typedef CategoryQuery
 * @property {string[]} [category]
 */
/**
 * @typedef CategoryImage
 * @property {string} [type] - The type of image, typically 'image'.
 * @property {string} [url] - The URL of the category image.
 */
/**
 * @typedef ProductListingDetail
 * @property {Object} [attributes] - Additional product attributes, which vary by product.
 * @property {ProductBrand} [brand]
 * @property {string} [description] - A detailed description of the product.
 * @property {string} [discount] - Any discount information applicable to the product.
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes] - A list of
 *   grouped product attributes.
 * @property {boolean} [has_variant] - Indicates whether the product has
 *   variants such as different sizes or colors.
 * @property {string[]} [highlights] - Key highlights of the product.
 * @property {string} [image_nature] - The type of product image, such as
 *   'lifestyle' or 'catalog'.
 * @property {string} [item_code] - The unique code or identifier for the product.
 * @property {string} [item_type] - The type of item'.
 * @property {Media[]} [medias] - A list of media (images or videos) associated
 *   with the product.
 * @property {string} [name] - The name of the product.
 * @property {ProductListingPrice} [price]
 * @property {string} [product_online_date] - The date and time when the product
 *   was made available online.
 * @property {Object} [promo_meta] - Promotional metadata associated with the product.
 * @property {number} [rating] - The average rating of the product.
 * @property {number} [rating_count] - The number of ratings received for the product.
 * @property {boolean} [sellable] - Indicates if the product is currently sellable.
 * @property {string} [short_description] - A brief description of the product.
 * @property {string[]} [similars] - A list of similar products.
 * @property {string} [slug] - The unique URL-friendly identifier for the product.
 * @property {Object} [teaser_tag] - Teaser tags for the product, if any.
 * @property {string[]} [tryouts] - A list of tryout options for the product.
 * @property {string} [type] - The type of product.
 * @property {number} [uid] - The unique identifier for the product.
 * @property {ApplicationCategoryItem[]} [categories] - A list of categories
 *   associated with the product.
 * @property {string[]} [_custom_meta] - Custom metadata for the product.
 * @property {PageAction} [action]
 * @property {boolean} [is_tryout] - Indicates if the product is available for tryout.
 * @property {number[]} [all_company_ids] - A list of company IDs that sell this product.
 * @property {boolean} [is_custom_order] - Indicates if the product is
 *   custom-made or requires a custom order.
 * @property {string[]} [collections] - A list of collections the product belongs to.
 */
/**
 * @typedef ActionObject
 * @property {string} [type] - The type of action to be performed, such as
 *   navigating to a product or category.
 * @property {Object} [query] - The query parameters associated with the action.
 */
/**
 * @typedef PageAction
 * @property {ActionObject} [page]
 * @property {string} [type] - The type of page action to be performed.
 */
/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
 * @property {Price1} [selling]
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
 * @typedef ProductPublished
 * @property {boolean} [is_set] - Indicates whether the product is part of a set.
 * @property {number} [product_online_date] - Timestamp when the product is
 *   scheduled to go live online.
 */
/**
 * @typedef ProductReturnConfigSchema
 * @property {boolean} [on_same_store] - Indicates if the product return is
 *   allowed only at the same store where it was purchased.
 * @property {number} [store_uid] - Unique identifier for the store where the
 *   product can be returned.
 */
/**
 * @typedef ProductReturnConfigBaseSchema
 * @property {boolean} returnable - Boolean Flag for item returnable
 * @property {number} time - Valid return time for an item
 * @property {string} unit - Unit of return config days|hours
 */
/**
 * @typedef Identifier
 * @property {boolean} [primary] - Indicates if this is the primary identifier
 *   for the size.
 * @property {string} [gtin_value] - The GTIN (Global Trade Item Number) value
 *   for the size.
 * @property {string} [gtin_type] - The type of GTIN (e.g., SKU code, UPC, EAN).
 */
/**
 * @typedef SizeDetails
 * @property {string} [size] - Size identifier for the product (e.g., "S", "M", "L").
 * @property {number} [store_count] - The number of stores that have this size available.
 * @property {number} [sellable_quantity] - Quantity of the product that is
 *   sellable in this size.
 * @property {boolean} [sellable] - Indicates if this size is currently sellable.
 * @property {number} [size_priority] - The priority of the size for display purposes.
 * @property {Identifier[]} [identifiers] - List of identifiers (e.g., SKU
 *   codes, GTINs) associated with the size.
 * @property {Object} [price]
 * @property {string} [seller_identifier] - Seller-specific identifier for this size.
 * @property {number} [price_transfer] - Price transfer value for this size,
 *   typically used in business transactions.
 * @property {boolean} [track_inventory] - Indicates if inventory is being
 *   tracked for this size.
 */
/**
 * @typedef ProductSchemaV2
 * @property {Object} [_custom_json] - Custom JSON data specific to the product,
 *   used for storing additional information.
 * @property {number[]} [all_company_ids] - List of company IDs associated with
 *   the product.
 * @property {string[]} [all_identifiers] - List of unique product identifiers
 *   such as SKU codes or GTINs.
 * @property {Object[]} [all_sizes] - Details of all available sizes for the
 *   product, including pricing and inventory information.
 * @property {Object} [attributes] - Additional attributes specific to the product.
 * @property {Brand} [brand]
 * @property {number} [brand_uid] - Unique identifier for the brand.
 * @property {Object} [category] - Object representing the category to which the
 *   product belongs.
 * @property {string} [category_slug] - Slug representation of the product
 *   category for SEO purposes.
 * @property {number} [category_uid] - Unique identifier for the product category.
 * @property {string} [color] - Primary color of the product.
 * @property {number} [company_id] - Identifier for the company managing the product.
 * @property {string} [country_of_origin] - Country where the product was
 *   manufactured or sourced.
 * @property {Object} [created_by] - Object containing details about the user
 *   who created the product.
 * @property {string} [currency] - The currency in which the product is priced
 *   (e.g., "INR").
 * @property {Object} [custom_order] - Information about custom order options
 *   for the product, including manufacturing time.
 * @property {number[]} [departments] - List of department IDs associated with
 *   the product.
 * @property {string} [description] - Long description of the product.
 * @property {string[]} [highlights] - Key features or highlights of the product.
 * @property {string} [hsn_code] - Harmonized System Nomenclature (HSN) code for
 *   taxation purposes.
 * @property {string} [id] - Unique identifier of the product in the database.
 * @property {string} [image_nature] - Describes the nature of the product
 *   images (e.g., "standard").
 * @property {Image[]} [images] - List of image URLs associated with the product.
 * @property {boolean} [is_active] - Indicates whether the product is currently
 *   active or not.
 * @property {boolean} [is_dependent] - Indicates if the product depends on
 *   other products (e.g., part of a set).
 * @property {boolean} [is_expirable] - Indicates whether the product has an expiry date.
 * @property {boolean} [is_image_less_product] - Indicates if the product does
 *   not have associated images.
 * @property {boolean} [is_physical] - Indicates if the product is a physical
 *   item (as opposed to a digital product).
 * @property {boolean} [is_set] - Indicates if the product is a set of items
 *   rather than a single item.
 * @property {string} [item_code] - Unique code used to identify the product,
 *   often used internally or by sellers.
 * @property {string} [item_type] - Describes the type of product (e.g.,
 *   "standard" or "set").
 * @property {string[]} [l3_mapping] - Hierarchical mapping of the product to
 *   categories (e.g., "electronics>qled_television").
 * @property {Media[]} [media] - Media assets associated with the product, such
 *   as images or videos.
 * @property {Object} [modified_by] - Object containing details about the user
 *   who last modified the product.
 * @property {string} [modified_on] - The timestamp when the product was last modified.
 * @property {Object} [moq] - Minimum order quantity details for the product.
 * @property {boolean} [multi_size] - Indicates if the product is available in
 *   multiple sizes.
 * @property {string} [name] - Name of the product.
 * @property {NetQuantityResponseSchema} [net_quantity]
 * @property {number} [no_of_boxes] - Number of boxes required to pack the product.
 * @property {string} [pending] - Pending status related to product availability
 *   or verification.
 * @property {string} [primary_color] - The primary color of the product.
 * @property {string[]} [product_group_tag] - Tags associated with the product grouping.
 * @property {ProductPublish} [product_publish]
 * @property {ReturnConfigResponseSchema} [return_config]
 * @property {string} [short_description] - Short description of the product,
 *   typically used in product listings.
 * @property {string} [size_guide] - Reference to the size guide for the
 *   product, if applicable.
 * @property {SizeDetails[]} [sizes] - List of size details for the product.
 * @property {string} [slug] - URL-friendly version of the product name for SEO purposes.
 * @property {string} [stage] - Current stage of the product (e.g., "pending",
 *   "verified").
 * @property {string[]} [tags] - Tags associated with the product for
 *   categorization and search purposes.
 * @property {TaxIdentifier} [tax_identifier]
 * @property {Object} [teaser_tag] - Teaser tags used for marketing the product
 *   (e.g., "new arrival").
 * @property {string} [template_tag] - Product template tag (e.g., "television").
 * @property {Trader[]} [trader] - List of traders or sellers associated with the product.
 * @property {number} [uid] - Unique identifier of the product.
 * @property {Object} [variant_group] - Grouping of product variants.
 * @property {Object} [variant_media] - Media information for product variants.
 * @property {Object} [variants] - List of product variants.
 * @property {VerifiedBy} [verified_by]
 * @property {string} [verified_on] - Timestamp when the product was verified.
 */
/**
 * @typedef ProductSize
 * @property {number} max
 * @property {number} min
 */
/**
 * @typedef ProductSizeDeleteDataResponseSchema
 * @property {number} [company_id] - The unique identifier for the company that
 *   manages the product.
 * @property {number} [item_id] - The unique identifier for the specific item
 *   from which the size is being deleted.
 * @property {string} [size] - The size being deleted from the product.
 */
/**
 * @typedef ProductSizeDeleteResponseSchema
 * @property {ProductSizeDeleteDataResponseSchema} [data]
 * @property {boolean} [success] - Indicates whether the size deletion operation
 *   was successful.
 */
/**
 * @typedef CollectionProductSortOn
 * @property {boolean} [is_selected] - Indicates whether this sorting option is
 *   currently applied.
 * @property {string} [name] - Display name of the sorting option.
 * @property {string} [value] - Technical value of the sorting option used in queries.
 * @property {string} [logo] - URL to the logo image representing the sorting option.
 */
/**
 * @typedef ProductSortOn
 * @property {boolean} [is_selected] - Indicates whether this sorting option is
 *   currently selected.
 * @property {string} [name] - The display name of the sorting option, used to
 *   show on the UI.
 * @property {string} [value] - The value representing the sorting option.
 */
/**
 * @typedef ProductTagsViewResponseSchema
 * @property {string[]} [items] - An array of product tag strings representing
 *   various tags associated with the products.
 */
/**
 * @typedef CreatedBy
 * @property {string} [user_id] - Unique identifier for the user.
 * @property {string} [username] - Username of the user who created the product.
 */
/**
 * @typedef ModifiedBy
 * @property {string} [user_id] - Unique identifier for the user who modified the entity.
 * @property {string} [username] - Username of the user who last modified the entity.
 */
/**
 * @typedef ProductTemplate
 * @property {string[]} [attributes] - List of attributes associated with the
 *   product template.
 * @property {string[]} [categories] - List of categories the product template belongs to.
 * @property {CreatedBy} [created_by]
 * @property {string} [created_on] - Timestamp of when the product template was created.
 * @property {string[]} [departments] - List of departments the product template
 *   is associated with.
 * @property {string} [description] - Detailed description of the product template.
 * @property {boolean} [is_active] - Indicates if the product template is
 *   currently active.
 * @property {boolean} [is_archived] - Indicates if the product template is archived.
 * @property {boolean} is_expirable - Indicates if the product template is expirable.
 * @property {boolean} is_physical - Indicates if the product template
 *   represents a physical product.
 * @property {string} [logo] - URL of the product template logo.
 * @property {ModifiedBy} [modified_by]
 * @property {string} [modified_on] - Timestamp of when the product template was
 *   last modified.
 * @property {string} [name] - The name of the product template.
 * @property {string} slug - Unique URL-friendly identifier for the product template.
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
 * @property {UserInfo} [created_by]
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
 * @property {number} [brand_uid] - Unique identifier for the brand associated
 *   with the product variant.
 * @property {number} [category_uid] - Unique identifier for the category to
 *   which the product variant belongs.
 * @property {string} [item_code] - Code that uniquely identifies the specific
 *   product variant.
 * @property {Media[]} [media] - Array of media objects representing images,
 *   videos, or other media associated with the product variant.
 * @property {string} [name] - Name of the product variant.
 * @property {number} [uid] - Unique identifier for the product variant.
 */
/**
 * @typedef ProductVariantsResponseSchema
 * @property {Page} [page]
 * @property {ProductVariants[]} [variants] - A list of product variants
 *   returned in the response.
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
 * @typedef InventoryReturnConfig
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
 * @property {boolean} [returnable] - Indicates if the product is eligible for return.
 * @property {number} [time] - The duration within which the product can be returned.
 * @property {string} [unit] - The time unit for the return duration, e.g.,
 *   'days' or 'hours'.
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
 * @typedef PageQuery
 * @property {string[]} [brand] - List of brands being filtered by the query.
 */
/**
 * @typedef ApplicationCollectionItemSeoPage
 * @property {Object} [params] - Any parameters associated with the page.
 * @property {PageQuery} [query]
 * @property {string} [type] - The type of page.
 * @property {string} [url] - The URL for the page.
 */
/**
 * @typedef ApplicationCollectionItemSeoAction
 * @property {string} [type] - The type of action, typically 'page'.
 * @property {ApplicationCollectionItemSeoPage} [page]
 */
/**
 * @typedef ApplicationItemSeoAction
 * @property {Object} [page]
 * @property {string} type
 */
/**
 * @typedef ApplicationItemSeoBreadcrumbs
 * @property {string} [url]
 * @property {ApplicationItemSeoAction} [action]
 */
/**
 * @typedef ApplicationCollectionItemSeoBreadcrumbs
 * @property {string} [url] - The URL that this breadcrumb points to.
 * @property {ApplicationCollectionItemSeoAction} [action]
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
 * @property {string} [title] - The title or heading for the meta tags section.
 * @property {ApplicationItemSeoMetaTagItem[]} [items] - An array of meta tag
 *   items, each consisting of key-value pairs.
 */
/**
 * @typedef SizePromotionThreshold
 * @property {string} [threshold_type] - The type of threshold that applies to
 *   the size promotion, such as 'quantity' or 'value'.
 * @property {number} [threshold_value] - The value of the threshold required to
 *   trigger the promotion, such as a minimum number of units.
 */
/**
 * @typedef SEOData
 * @property {string} [description] - A brief description of the item, primarily
 *   used for SEO purposes.
 * @property {string} [title] - The title of the item, primarily used for SEO
 *   and displayed in search engine results.
 * @property {Sitemap} [sitemap]
 * @property {ApplicationItemSeoBreadcrumbs[]} [breadcrumbs] - An ordered list
 *   of links showing the hierarchy of the page, aiding navigation and SEO.
 * @property {Metatags[]} [meta_tags] - A list of meta tags for the item, used
 *   for SEO optimization.
 * @property {string} [canonical_url] - The canonical URL for the item,
 *   indicating the preferred URL for search engines to avoid duplicate content.
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
 * @property {number} country_code - The country code for the phone number,
 *   typically represented as an integer (e.g., 91 for India).
 * @property {string} number - The phone number associated with the seller,
 *   without the country code.
 */
/**
 * @typedef CollectionSeoDetail
 * @property {string} [description] - SEO meta description for the item or
 *   collection. This is used to describe the content for search engines.
 * @property {string} [title] - SEO meta title for the item or collection. It is
 *   used as the title that appears in search results.
 * @property {Sitemap} [sitemap]
 * @property {ApplicationCollectionItemSeoBreadcrumbs[]} [breadcrumbs] - List of
 *   breadcrumbs for navigation, showing the hierarchy of pages leading to the
 *   current page.
 * @property {Metatags[]} [meta_tags] - An array of meta tags, each containing
 *   key-value pairs for various SEO meta tags used to enhance search visibility.
 * @property {string} [canonical_url] - The canonical URL for the item or
 *   collection, which tells search engines the preferred version of the URL to
 *   avoid duplicate content issues.
 */
/**
 * @typedef SeoDetail
 * @property {string} [description] - SEO meta description for the item or
 *   collection. This is used to describe the content for search engines.
 * @property {string} [title] - SEO meta title for the item or collection. It is
 *   used as the title that appears in search results.
 * @property {Object} [sitemap] - Information regarding the sitemap
 *   configuration for the item or collection.
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
 * @property {number} pieces - Number of pieces in the set.
 * @property {string} size - Size of the item in the set.
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
 * @property {boolean} [active] - Indicates whether the size guide is currently active.
 * @property {number} [brand_id] - The unique identifier for the brand
 *   associated with the size guide.
 * @property {number} [company_id] - The unique identifier for the company that
 *   owns the size guide.
 * @property {CreatedBySchema} [created_by]
 * @property {string} [created_on] - The timestamp when the size guide was
 *   created, in ISO 8601 format.
 * @property {Object} [guide] - The main content of the size guide, containing
 *   details such as the size measurements, headers, and units.
 * @property {string} [id] - The public identifier of the size guide.
 * @property {string} [image] - A URL pointing to an image associated with the size guide.
 * @property {ModifiedBySchema} [modified_by]
 * @property {string} [modified_on] - The timestamp when the size guide was last
 *   modified, in ISO 8601 format.
 * @property {string} [name] - The name or title of the size guide.
 * @property {string} [subtitle] - A short description or subtitle of the size guide.
 * @property {string} [tag] - A tag or label associated with the size guide,
 *   used for categorization or reference.
 * @property {string} [title] - The main title of the size guide.
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
 * @property {number} id - The unique identifier of the store.
 */
/**
 * @typedef SuccessResponseSchema
 * @property {boolean} [success]
 */
/**
 * @typedef SuccessResponseObject
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
 * @property {number} [cess] - Cess rate applicable for the tax slab.
 * @property {string} effective_date - The date from which the tax slab becomes effective.
 * @property {number} rate - Applicable tax rate.
 * @property {number} threshold - Threshold value above which the tax slab applies.
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
 * @typedef TemplateGlobalValidationData
 * @property {GlobalValidation} [global_validation]
 */
/**
 * @typedef TemplateValidationData
 * @property {GlobalValidation} [global_validation]
 * @property {Object} [template_validation]
 */
/**
 * @typedef TemplatesResponseSchema
 * @property {ProductTemplate[]} [items] - List of product templates.
 * @property {Page} [page]
 */
/**
 * @typedef TemplatesGlobalValidationResponseSchema
 * @property {TemplateGlobalValidationData} [data]
 */
/**
 * @typedef TemplatesValidationResponseSchema
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
 * @property {string[]} [address] - List of addresses associated with the trader.
 * @property {string} name - The name of the trader.
 * @property {string} [type] - The role or type of the trader.
 */
/**
 * @typedef Trader1
 * @property {string[]} address
 * @property {string} name
 * @property {string} type
 */
/**
 * @typedef TraderResponseSchema
 * @property {string[]} [address]
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef UpdateCollection
 * @property {Object} [_custom_json] - Custom JSON object containing additional
 *   metadata specific to the collection.
 * @property {Object} [_locale_language] - Locale-based language settings for
 *   the collection.
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [allow_facets] - Indicates whether facets are allowed for
 *   filtering items in the collection.
 * @property {boolean} [allow_sort] - Specifies whether sorting is allowed for
 *   items within the collection.
 * @property {CollectionBadge} [badge]
 * @property {CollectionBanner} [banners]
 * @property {string} [description] - A brief description of the collection.
 * @property {boolean} [is_active] - Indicates if the collection is active and
 *   visible to users.
 * @property {boolean} [is_visible] - Specifies whether the collection is
 *   visible to users on the platform.
 * @property {CollectionImage} [logo]
 * @property {Object} [meta] - Additional metadata related to the collection.
 * @property {UserInfo} [modified_by]
 * @property {string} [name] - The name of the collection.
 * @property {number} [priority] - Priority level of the collection, determining
 *   its order in listings.
 * @property {boolean} [published] - Indicates whether the collection is
 *   published and accessible to the public.
 * @property {CollectionQuery[]} [query] - List of query filters that define
 *   which items are included in the collection.
 * @property {CollectionSeoDetail} [seo]
 * @property {string} [slug] - A unique identifier used to reference the
 *   collection in URLs.
 * @property {string} [sort_on] - The field by which items in the collection are
 *   sorted (e.g., popular, latest).
 * @property {string[]} [tags] - List of tags associated with the collection.
 * @property {string} [type] - The type of collection, either 'items' or 'query'.
 * @property {string[]} [visible_facets_keys] - Keys for facets that are visible
 *   to users for filtering items in the collection.
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
 * @typedef RequestUserSchema
 * @property {string} [_id]
 * @property {string} [contact]
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef ValidateIdentifier
 * @property {string} gtin_type - The type of the identifier (e.g., GTIN-12,
 *   GTIN-13, UPC) used to categorize the format of the identifier.
 * @property {string} gtin_value - The actual value of the identifier (e.g., the
 *   numeric or alphanumeric code representing the product).
 * @property {boolean} [primary] - A flag indicating whether this identifier is
 *   the primary one for the product.
 */
/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 */
/**
 * @typedef ValidateSizeGuide
 * @property {boolean} [active] - Indicates whether the size guide is currently active.
 * @property {number} [brand_id] - The unique identifier for the brand
 *   associated with the size guide.
 * @property {string} [company_id] - The unique identifier for the company that
 *   owns the size guide.
 * @property {Object} [created_by] - Information about the user who created the
 *   size guide.
 * @property {string} [created_on] - The timestamp when the size guide was
 *   created, in ISO 8601 format.
 * @property {string} [description] - A detailed HTML description of the size guide.
 * @property {Guide} [guide]
 * @property {string} [id] - The public identifier of the size guide.
 * @property {string} [image] - A URL pointing to an image associated with the size guide.
 * @property {Object} [modified_by] - Information about the user who last
 *   modified the size guide.
 * @property {string} [modified_on] - The timestamp when the size guide was last
 *   modified, in ISO 8601 format.
 * @property {string} name - The name of the size guide.
 * @property {string} [subtitle] - A short description or subtitle of the size guide.
 * @property {string} [tag] - A tag or label associated with the size guide,
 *   used for categorization or reference.
 * @property {string} title - The main title of the size guide.
 */
/**
 * @typedef VerifiedBy
 * @property {string} [user_id] - The unique identifier of the user who verified
 *   the product.
 * @property {string} [username] - The username of the user who verified the product.
 */
/**
 * @typedef WeightResponseSchema
 * @property {boolean} is_default - Indicates if it is the default weight.
 * @property {number} shipping - The shipping weight.
 * @property {string} unit - The unit of weight.
 */
/**
 * @typedef InventoryWeightResponseSchema
 * @property {number} [shipping]
 * @property {string} [unit]
 */
/**
 * @typedef BulkInventoryJob
 * @property {string} company_id - Unique identifier of the company for which
 *   the inventory update is being performed.
 * @property {string} file_type - Type of inventory update file being processed,
 *   either price or quantity.
 * @property {string} file_path - URL of the uploaded file containing inventory
 *   update data.
 * @property {BulkMeta} [meta]
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
 * @typedef ValidationError
 * @property {string} message - A brief description of the error encountered.
 * @property {string} field - The field in the request that caused the error.
 */
/**
 * @typedef Price1
 * @property {string} [currency_code] - ISO 4217 currency codes
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
 * @typedef NetQuantitySchema
 * @property {string} [unit] - Specifies the unit of measurement for the net quantity.
 * @property {number} [value] - The numerical value representing the net
 *   quantity of the product.
 */
/**
 * @typedef CustomMeta
 * @property {string} key - The key of the metadata. Should be a non-empty
 *   string and length should not exceed 30 characters.
 * @property {string} value - The value of the metadata. Should be a non-empty
 *   string and length should not exceed 100 characters.
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
    export { Action, ValidationErrors, AllSizes, AllowSingleRequestSchema, AppCatalogConfiguration, AppCategoryReturnConfig, AppCategoryReturnConfigResponseSchema, AppConfiguration, AppConfigurationDetail, AppConfigurationsSort, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentJson, ApplicationDepartmentListingResponseSchema, ApplicationItemMOQ, ApplicationItemMeta, ApplicationItemSeoSitemap, ApplicationItemSEO, ApplicationProductsSchema, ApplicationProductListingResponseSchema, ApplicationStoreJson, AppReturnConfigResponseSchema, ArticleAssignment, ArticleAssignment1, ArticleQuery, ArticleStoreResponseSchema, AssignStore, AssignStoreArticle, AttributeDetailsGroup, AttributeMaster, AttributeMasterDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterSchema, AttributeSchemaRange, AutoCompleteMedia, AutocompleteAction, AutocompletePageAction, AutocompleteResult, BannerImage, BaseAppCategoryReturnConfig, BaseAppCategoryReturnConfigResponseSchema, Brand, BrandItem, BrandListingResponseSchema, ApplicationBrandListingItemSchema, ApplicationBrandListingSchema, ApplicationCategoryListingSchema, ApplicationCategoryListingItemSchema, BrandMeta, InventoryBrandMeta, BulkAssetResponseSchema, BulkHsnResponseSchema, BulkHsnUpsert, BulkInventoryGet, FailedRecord, BulkInventoryGetItems, BulkMeta, BulkProductJob, BulkJob, BulkProductRequestSchema, BulkResponseSchema, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponseSchema, CategoriesResponseSchema, Category, CategoryItems, CategoryListingResponseSchema, CategoryMapping, CategoryMappingValues, CategoryResponseSchema, Child, CollectionBadge, CollectionBanner, CollectionCreateResponseSchema, CollectionDetailResponseSchema, CollectionImage, CollectionItem, CollectionItemUpdate, CollectionListingFilter, CollectionListingFilterTag, CollectionListingFilterType, CollectionQuery, CollectionSchedule, CompanyBrandDetail, CompanyMeta, InventoryCompanyMeta, CompanyOptIn, ConfigErrorResponseSchema, ConfigSuccessResponseSchema, ConfigurationBucketPoints, ConfigurationListing, ConfigurationListingFilter, ConfigurationListingFilterConfig, ConfigurationListingFilterValue, ConfigurationListingSort, ConfigurationListingSortConfig, ConfigurationProduct, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariant, ConfigurationProductVariantConfig, CreateAutocompleteKeyword, CreateAutocompleteWordsResponseSchema, CreateCollection, CreateSearchConfigurationRequestSchema, CreateSearchConfigurationResponseSchema, CreateSearchKeyword, CreateUpdateAppReturnConfig, CrossSellingData, CrossSellingResponseSchema, CustomOrder, DateMeta, DefaultKeyRequestSchema, DeleteAppCategoryReturnConfig, DeleteResponseSchema, DeleteSearchConfigurationResponseSchema, Department, DepartmentCategoryTree, DepartmentErrorResponseSchema, DepartmentIdentifier, DepartmentResponseSchema, DepartmentsResponseSchema, DimensionResponseSchema, InventoryDimensionResponseSchema, Document, EntityConfiguration, ErrorResponseSchema, FilerList, RawProduct, RawProductListingResponseSchema, GTIN, AttributeDetail, LatLong, ApplicationLocationAddressSchema, GetAddressSchema, GetAllSizes, GetAppCatalogConfiguration, GetAppCatalogEntityConfiguration, GetAutocompleteWordsData, GetAutocompleteWordsResponseSchema, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationDetailsSchemaListing, GetCatalogConfigurationMetaData, GetCollectionDetailNest, GetCollectionItemsResponseSchema, GetCollectionListingResponseSchema, GetCollectionQueryOptionResponseSchema, GetCompanySchema, ConditionItem, DataItem, ValueTypeItem, SortTypeItem, GetConfigMetadataResponseSchema, GetConfigMetadataValues, GetConfigResponseSchema, ConfigItem, AttributeConfig, GetDepartment, GetInventories, GetInventoriesResponseSchema, GetLocationSchema, GetOptInPlatform, GetProductBundleCreateResponseSchema, GetProductBundleListingResponseSchema, GetProductBundleResponseSchema, GetProducts, ProductDetails, GetCollectionDetailResponseSchema, CommonResponseSchemaCollection, GetQueryFiltersKeysResponseSchema, GetQueryFiltersResponseSchema, GetCollectionItemsResponseSchemaV2, Page1, CollectionItemSchemaV2, CollectionItemUpdateSchema, CollectionQuerySchemaV2, ProductDetailV2, GetSearchConfigurationResponseSchema, GetSearchWordsData, GetSearchWordsDetailResponseSchema, GetSearchWordsResponseSchema, GlobalValidation, Guide, HSNCodesResponseSchema, HSNData, CreatedBySchema, ModifiedBySchema, HSNDataInsertV2, Hierarchy, HsnCode, HsnCodesListingResponseSchemaV2, HsnCodesObject, HsnUpsert, Image, ImageUrls, InvSize, InventoryBulkRequestSchema, InventoryConfig, InventoryCreateRequestSchema, InventoryExportAdvanceOption, InventoryExportFilter, InventoryExportJob, InventoryExportJobListResponseSchema, InventoryExportQuantityFilter, InventoryExportRequestSchema, InventoryExportResponseSchema, InventoryFailedReason, InventoryJobDetailResponseSchema, InventoryJobFilters, InventoryJobPayload, InventoryPage, AddInventoryRequestPayload, InventoryPayload, InventoryRequestSchema, InventoryRequestSchemaV2, InventoryResponseSchema, InventoryResponseItem, InventoryResponsePaginated, InventorySellerIdentifierResponsePaginated, ApplicationInventorySellerIdentifierResponsePaginated, InventorySellerResponseSchema, ApplicationInventorySellerResponseSchema, InventorySet, InventoryStockResponseSchema, InventoryUpdateResponseSchema, InventoryValidationResponseSchema, InvoiceCredSchema, InvoiceDetailsSchema, ItemQuery, Items, LimitedProductData, SizeGuideItem, ListSizeGuide, LocationDayWiseSchema, LocationIntegrationType, LocationListSchema, LocationManagerSchema, LocationTimingSchema, Logo, MOQData, ManufacturerResponseSchema, InventoryManufacturerResponseSchema, Media, Media1, DepartmentMedia, BrandMedia, Meta, MetaDataListingFilterMetaResponseSchema, MetaDataListingFilterResponseSchema, MetaDataListingResponseSchema, MetaDataListingSortMetaResponseSchema, MetaDataListingSortResponseSchema, MetaFields, NetQuantity, NetQuantityResponseSchema, NextSchedule, LocationPriceRequestSchema, LocationQuantityRequestSchema, LocationPriceQuantitySuccessResponseSchema, OptInPostRequestSchema, OptinCompanyBrandDetailsView, OptinCompanyDetail, OptinCompanyMetrics, OptinStoreDetails, OwnerAppItemResponseSchema, PTErrorResponseSchema, Page, PageResponseSchema, PageResponseType, Price, ProductListingDetailPrice, PriceArticle, PriceMeta, ProdcutTemplateCategoriesResponseSchema, Product, ProductAttributesResponseSchema, ProductBrand, ProductBulkAssets, ProductBulkRequestSchema, ProductBulkRequestList, ProductBundleItem, ProductBundleRequestSchema, ProductBundleUpdateRequestSchema, ProductConfigurationDownloads, ProductUpdateSchemaV2, ProductCreateSchemaV2, ProductDetail, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductDownloadsResponseSchema, CollectionProductFilters, ProductFilters, GetQueryFiltersValuesResponseSchema, ProductFiltersKeysOnly, ProductFiltersKey, ProductQueryFiltersValue, CollectionProductFiltersValue, ProductFiltersValue, CollectionProductListingDetail, ProductCategory, ApplicationCategoryAction, ApplicationCategoryItem, ApplicationProductMedia, ApplicationProductCategoryItem, CategoryPageAction, CategoryQuery, CategoryImage, ProductListingDetail, ActionObject, PageAction, ProductListingPrice, ProductListingResponseSchema, ProductListingResponseV2, ProductPublish, ProductPublished, ProductReturnConfigSchema, ProductReturnConfigBaseSchema, Identifier, SizeDetails, ProductSchemaV2, ProductSize, ProductSizeDeleteDataResponseSchema, ProductSizeDeleteResponseSchema, CollectionProductSortOn, ProductSortOn, ProductTagsViewResponseSchema, CreatedBy, ModifiedBy, ProductTemplate, ProductTemplateDownloadsExport, ProductTemplateExportFilterRequestSchema, ProductTemplateExportResponseSchema, ProductVariants, ProductVariantsResponseSchema, Properties, Quantities, QuantitiesArticle, Quantity, QuantityBase, ReturnConfig, InventoryReturnConfig, ReturnConfig2, ReturnConfigResponseSchema, Sitemap, PageQuery, ApplicationCollectionItemSeoPage, ApplicationCollectionItemSeoAction, ApplicationItemSeoAction, ApplicationItemSeoBreadcrumbs, ApplicationCollectionItemSeoBreadcrumbs, ApplicationItemSeoMetaTagItem, ApplicationItemSeoMetaTags, Metatags, SizePromotionThreshold, SEOData, SearchKeywordResult, SearchableAttribute, SecondLevelChild, SellerPhoneNumber, CollectionSeoDetail, SeoDetail, SetSize, SingleCategoryResponseSchema, SingleProductResponseSchema, Size, SizeDistribution, SizeGuideResponseSchema, StoreAssignResponseSchema, StoreDetail, StoreMeta, SuccessResponseSchema, SuccessResponseObject, TaxIdentifier, TaxSlab, TeaserTag, TemplateDetails, TemplateGlobalValidationData, TemplateValidationData, TemplatesResponseSchema, TemplatesGlobalValidationResponseSchema, TemplatesValidationResponseSchema, ThirdLevelChild, Trader, Trader1, TraderResponseSchema, UpdateCollection, UpdateSearchConfigurationRequestSchema, UpdateSearchConfigurationResponseSchema, CreateMarketplaceOptinResponseSchema, UserCommon, UserDetail, UserDetail1, UserInfo, UserSchema, RequestUserSchema, ValidateIdentifier, ValidateProduct, ValidateSizeGuide, VerifiedBy, WeightResponseSchema, InventoryWeightResponseSchema, BulkInventoryJob, Marketplaces, GetAllMarketplaces, UpdateMarketplaceOptinRequestSchema, UpdateMarketplaceOptinResponseSchema, Filters, ActionPage, ValidationError, Price1, MultiCategoriesSchema, NetQuantitySchema, CustomMeta, PageType };
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
/** @returns {ValidationErrors} */
declare function ValidationErrors(): ValidationErrors;
type ValidationErrors = {
    /**
     * - A list of validation errors in the request.
     */
    errors: ValidationError[];
};
/** @returns {AllSizes} */
declare function AllSizes(): AllSizes;
type AllSizes = {
    /**
     * - A collection of identifiers
     * (e.g., GTIN, UPC) associated with the size. Each identifier follows the
     * structure defined in the ValidateIdentifier schema.
     */
    identifiers?: ValidateIdentifier[];
    /**
     * - The unit of measurement
     * used for the item's dimensions (e.g., centimeters, inches).
     */
    item_dimensions_unit_of_measure: string;
    /**
     * - The height of the item in the specified unit
     * of measure.
     */
    item_height: number;
    /**
     * - The length of the item in the specified unit
     * of measure.
     */
    item_length: number;
    /**
     * - The weight of the item in the specified unit
     * of measure.
     */
    item_weight: number;
    /**
     * - The unit of measurement for
     * the item's weight (e.g., kilograms, pounds).
     */
    item_weight_unit_of_measure: string;
    /**
     * - The width of the item in the specified unit of measure.
     */
    item_width: number;
    /**
     * - The label or designation for the item's size (e.g.,
     * S, M, L, or numerical values).
     */
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
    /**
     * - Unique identifier for the application to which
     * this configuration belongs.
     */
    app_id: string;
    /**
     * - A list of attribute groups
     * associated with the app configuration. Each attribute group defines a set
     * of attributes relevant to the app.
     */
    attributes?: AttributeDetailsGroup[];
    /**
     * - Indicates whether this configuration is
     * currently active for the application.
     */
    is_active: boolean;
    /**
     * - Specifies if this configuration is the
     * default setting for the application.
     */
    is_default: boolean;
    /**
     * - URL of the logo image associated with the
     * application configuration.
     */
    logo?: string;
    /**
     * - The name of the application configuration.
     */
    name?: string;
    /**
     * - The priority of this configuration compared to
     * others. Higher priority configurations are given precedence.
     */
    priority: number;
    slug: string;
    /**
     * - A list of template slugs associated
     * with this configuration, representing different templates that the
     * configuration might use.
     */
    template_slugs?: string[];
};
/** @returns {AppConfigurationsSort} */
declare function AppConfigurationsSort(): AppConfigurationsSort;
type AppConfigurationsSort = {
    /**
     * - Unique identifier for the application.
     */
    app_id: string;
    /**
     * - The default configuration key for the app.
     */
    default_key: string;
    /**
     * - Indicates whether the app configuration is
     * currently active.
     */
    is_active: boolean;
    /**
     * - Specifies if this is the default
     * configuration for the app.
     */
    is_default: boolean;
    /**
     * - The specific configuration key for the app.
     */
    key: string;
    /**
     * - URL of the app's logo.
     */
    logo?: string;
    /**
     * - Name of the application.
     */
    name?: string;
    /**
     * - Defines the priority level for this
     * configuration, with 1 being the highest.
     */
    priority: number;
};
/** @returns {ApplicationBrandJson} */
declare function ApplicationBrandJson(): ApplicationBrandJson;
type ApplicationBrandJson = {
    /**
     * - A custom JSON object containing additional
     * brand-specific configurations or data. The structure is flexible and may
     * vary based on application needs.
     */
    _custom_json: any;
};
/** @returns {ApplicationCategoryJson} */
declare function ApplicationCategoryJson(): ApplicationCategoryJson;
type ApplicationCategoryJson = {
    /**
     * - A custom JSON object containing additional
     * details or configurations specific to the application category.
     */
    _custom_json: any;
};
/** @returns {ApplicationDepartment} */
declare function ApplicationDepartment(): ApplicationDepartment;
type ApplicationDepartment = {
    /**
     * - Custom JSON data specific to the
     * department, used to store additional attributes or configurations.
     */
    _custom_json?: any;
    /**
     * - Unique identifier for the application to which
     * the department belongs.
     */
    app_id: string;
    /**
     * - Indicates whether the department is
     * currently active within the application.
     */
    is_active?: boolean;
    /**
     * - URL or path to the logo representing the department.
     */
    logo?: string;
    /**
     * - Name of the department within the application.
     */
    name?: string;
    /**
     * - Unique identifier for the department.
     */
    uid: number;
};
/** @returns {ApplicationDepartmentJson} */
declare function ApplicationDepartmentJson(): ApplicationDepartmentJson;
type ApplicationDepartmentJson = {
    /**
     * - A custom JSON object containing additional
     * details or configurations specific to the application department.
     */
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
     * - Verification status of the product.
     */
    verification_status?: string;
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
    net_quantity?: NetQuantitySchema;
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
    /**
     * - Number of boxes containing the product.
     */
    no_of_boxes?: number;
    /**
     * - The date and time when the product was created
     */
    created_on?: string;
    /**
     * - The date and time when the product was last modified
     */
    modified_on?: string;
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
    /**
     * - Custom JSON data for the store. It can
     * contain any additional data specific to the store configuration.
     */
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
    /**
     * - The type of display used for the attribute,
     * such as text, dropdown, or image.
     */
    display_type: string;
    /**
     * - Indicates if this attribute group is currently active.
     */
    is_active: boolean;
    /**
     * - A unique key or identifier for the attribute group.
     */
    key?: string;
    /**
     * - URL of the logo image associated with this attribute group.
     */
    logo?: string;
    /**
     * - The name of the attribute group.
     */
    name: string;
    /**
     * - The priority of the attribute group,
     * determining the order in which it is displayed or processed.
     */
    priority: number;
    /**
     * - A URL-friendly identifier for the attribute
     * group, often used in APIs for identification.
     */
    slug?: string;
    /**
     * - The unit of measurement associated with the
     * attribute, if applicable (e.g., cm, kg).
     */
    unit?: string;
};
/** @returns {AttributeMaster} */
declare function AttributeMaster(): AttributeMaster;
type AttributeMaster = {
    /**
     * - List of allowed values for the
     * attribute, if applicable.
     */
    allowed_values?: string[];
    /**
     * - Format of the attribute, such as case formatting.
     */
    format?: string;
    /**
     * - Whether the attribute is mandatory.
     */
    mandatory?: boolean;
    /**
     * - Indicates if the attribute allows multiple values.
     */
    multi?: boolean;
    range?: AttributeSchemaRange;
    /**
     * - Data type of the attribute.
     */
    type: string;
};
/** @returns {AttributeMasterDetails} */
declare function AttributeMasterDetails(): AttributeMasterDetails;
type AttributeMasterDetails = {
    /**
     * - Type of display used for the attribute
     * (e.g., text, dropdown).
     */
    display_type: string;
};
/** @returns {AttributeMasterFilter} */
declare function AttributeMasterFilter(): AttributeMasterFilter;
type AttributeMasterFilter = {
    depends_on?: string[];
    /**
     * - Whether the attribute should be indexed for search.
     */
    indexing: boolean;
    /**
     * - Priority of the attribute in filtering (optional).
     */
    priority?: number;
};
/** @returns {AttributeMasterMandatoryDetails} */
declare function AttributeMasterMandatoryDetails(): AttributeMasterMandatoryDetails;
type AttributeMasterMandatoryDetails = {
    /**
     * - A list of Level 3 (L3) keys associated with
     * the attribute, typically used for advanced categorization or attribute grouping.
     */
    l3_keys?: string[];
};
/** @returns {AttributeMasterMeta} */
declare function AttributeMasterMeta(): AttributeMasterMeta;
type AttributeMasterMeta = {
    /**
     * - Indicates if the attribute has been enriched
     * with additional details or data beyond the basic schema.
     */
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
/** @returns {AttributeMasterSchema} */
declare function AttributeMasterSchema(): AttributeMasterSchema;
type AttributeMasterSchema = {
    /**
     * - Information about the user who created the attribute.
     */
    created_by?: any;
    /**
     * - The timestamp when the attribute was created.
     */
    created_on?: string;
    /**
     * - Departments or categories to which the
     * attribute applies.
     */
    departments: string[];
    /**
     * - A description of the attribute.
     */
    description?: string;
    details: AttributeMasterDetails;
    /**
     * - Indicates if the attribute
     * is enabled for end consumers.
     */
    enabled_for_end_consumer?: boolean;
    filters: AttributeMasterFilter;
    /**
     * - Indicates if the attribute can be nested
     * under other attributes.
     */
    is_nested?: boolean;
    /**
     * - URL of the logo associated with the attribute.
     */
    logo?: string;
    /**
     * - Information about the user who last
     * modified the attribute.
     */
    modified_by?: any;
    /**
     * - The timestamp when the attribute was last modified.
     */
    modified_on?: string;
    /**
     * - Name of the attribute.
     */
    name: string;
    /**
     * - Name of the attribute.
     */
    raw_key?: string;
    schema: AttributeMaster;
    /**
     * - Suggested or recommended value for the
     * attribute, if applicable.
     */
    suggestion?: string;
    /**
     * - Synonyms or alternative names for the
     * attribute, used for search and indexing.
     */
    synonyms?: any;
    /**
     * - Tags or keywords associated with the attribute,
     * often used for categorization.
     */
    tags?: string[];
    /**
     * - The unit of measurement for the attribute, if
     * applicable (e.g., cm, kg).
     */
    unit?: string;
    /**
     * - Unique slug or identifier for the attribute.
     */
    slug: string;
    /**
     * - Indicates if the attribute is a variant of
     * another attribute.
     */
    variant?: boolean;
};
/** @returns {AttributeSchemaRange} */
declare function AttributeSchemaRange(): AttributeSchemaRange;
type AttributeSchemaRange = {
    /**
     * - Minimum allowed value for the attribute.
     */
    min?: number;
    /**
     * - Maximum allowed value for the attribute.
     */
    max?: number;
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
    /**
     * - The aspect ratio of the banner image,
     * typically represented as a ratio (e.g., '16:9' or '4:3').
     */
    aspect_ratio?: string;
    /**
     * - The type of media, such as 'image' or 'banner',
     * indicating the format of the banner.
     */
    type?: string;
    /**
     * - The URL where the banner image is located,
     * typically a web address pointing to the image resource.
     */
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
    /**
     * - The name of the brand.
     */
    name?: string;
    /**
     * - Unique identifier for the brand.
     */
    uid?: number;
};
/** @returns {BrandItem} */
declare function BrandItem(): BrandItem;
type BrandItem = {
    action?: Action;
    banners?: ImageUrls;
    /**
     * - An array of department names or
     * categories that the brand belongs to, represented as strings.
     */
    departments?: string[];
    /**
     * - A string representing the discount offered by
     * the brand, such as percentage or amount off.
     */
    discount?: string;
    logo?: BrandMedia;
    /**
     * - The name of the brand.
     */
    name?: string;
    /**
     * - A URL-friendly identifier for the brand, often
     * used in website routing.
     */
    slug?: string;
    /**
     * - A unique identifier for the brand, typically used
     * for internal reference.
     */
    uid?: number;
};
/** @returns {BrandListingResponseSchema} */
declare function BrandListingResponseSchema(): BrandListingResponseSchema;
type BrandListingResponseSchema = {
    /**
     * - An array of brand items, each containing
     * detailed information about the brand, such as action, banners, departments,
     * discount, logo, and other related fields.
     */
    items?: BrandItem[];
    page: Page;
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
    /**
     * - Timestamp when the brand was last modified.
     */
    modified_on?: string;
};
/** @returns {ApplicationBrandListingSchema} */
declare function ApplicationBrandListingSchema(): ApplicationBrandListingSchema;
type ApplicationBrandListingSchema = {
    items?: ApplicationBrandListingItemSchema[];
    page: Page;
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
    modified_by?: CreatedBy;
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
/** @returns {BrandMeta} */
declare function BrandMeta(): BrandMeta;
type BrandMeta = {
    /**
     * - Unique identifier for the brand.
     */
    id: number;
    /**
     * - Name of the brand.
     */
    name: string;
};
/** @returns {InventoryBrandMeta} */
declare function InventoryBrandMeta(): InventoryBrandMeta;
type InventoryBrandMeta = {
    /**
     * - Unique identifier for the brand in the inventory.
     */
    id?: number;
    /**
     * - Name of the brand in the inventory.
     */
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
    meta?: BulkMeta;
};
/** @returns {BulkMeta} */
declare function BulkMeta(): BulkMeta;
type BulkMeta = {
    /**
     * - Additional remarks or notes explaining the
     * context or reason for the bulk inventory action.
     */
    comment?: string;
    /**
     * - A list of image URLs providing visual
     * evidence or supporting context for the comment.
     */
    image_urls?: string[];
};
/** @returns {BulkProductJob} */
declare function BulkProductJob(): BulkProductJob;
type BulkProductJob = {
    /**
     * - The unique identifier of the company
     * associated with the bulk product job.
     */
    company_id?: string;
    /**
     * - The template tag used to classify the
     * products in the bulk job.
     */
    template_tag?: string;
    /**
     * - The type of products being processed in
     * the bulk job (e.g., standard, digital, composite).
     */
    product_type?: string;
    /**
     * - The department under which the products in
     * the bulk job are categorized.
     */
    department?: string;
    /**
     * - The file path of the uploaded file
     * containing the bulk product data.
     */
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
    created_by?: UserInfo;
    /**
     * - The date and time when the item was created.
     */
    created_on: string;
    custom_template_tag?: string;
    failed?: number;
    failed_records?: any[];
    file_path?: string;
    /**
     * - Type of inventory File
     */
    file_type?: string;
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
    created_by?: UserInfo;
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
    /**
     * - The average freshness of the
     * articles based on the time since they were added to the catalog.
     */
    article_freshness?: number;
    /**
     * - The number of articles that are
     * currently available for purchase.
     */
    available_articles?: number;
    /**
     * - The total number of unique sizes
     * available across all articles.
     */
    available_sizes?: number;
    /**
     * - The name of the brand.
     */
    name?: string;
    /**
     * - The total number of articles listed
     * under the brand.
     */
    total_articles?: number;
    /**
     * - The total number of sizes offered across
     * all articles for the brand.
     */
    total_sizes?: number;
};
/** @returns {CatalogInsightItem} */
declare function CatalogInsightItem(): CatalogInsightItem;
type CatalogInsightItem = {
    /**
     * - The total number of catalog items available.
     */
    count?: number;
    /**
     * - The number of items that are
     * currently out of stock.
     */
    out_of_stock_count?: number;
    /**
     * - The number of items that are currently
     * sellable (in stock).
     */
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
    /**
     * - The name of the category.
     */
    name?: string;
    /**
     * - A URL-friendly unique identifier for the category.
     */
    slug?: string;
    /**
     * - A key used for internal identification of the
     * category slug.
     */
    slug_key?: string;
    /**
     * - The slug of the template associated with
     * the category.
     */
    template_slug?: string;
    /**
     * - A unique identifier for the category.
     */
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
    _custom_json?: any;
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
    /**
     * - An array containing the
     * department category trees, which provide hierarchical information about
     * categories and their associated departments.
     */
    data?: DepartmentCategoryTree[];
    /**
     * - An array of department
     * identifiers, each providing basic information like name, slug, and unique
     * ID for departments within the catalog.
     */
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
    /**
     * - The list of categories.
     */
    items?: Category[];
    page?: Page;
};
/** @returns {Child} */
declare function Child(): Child;
type Child = {
    /**
     * - Custom JSON object to store additional
     * data for the child.
     */
    _custom_json?: any;
    action?: Action;
    banners?: ImageUrls;
    /**
     * - A list of second-level child
     * elements under the current child.
     */
    childs?: SecondLevelChild[];
    /**
     * - Name of the child element.
     */
    name?: string;
    /**
     * - Slug or URL-friendly identifier for the child element.
     */
    slug?: string;
    /**
     * - Unique identifier for the child element.
     */
    uid?: number;
};
/** @returns {CollectionBadge} */
declare function CollectionBadge(): CollectionBadge;
type CollectionBadge = {
    /**
     * - The color of the badge displayed with the
     * collection, typically represented as a string (e.g., a hex code or color name).
     */
    color?: string;
    /**
     * - The text displayed on the badge, which may
     * indicate a label or promotion related to the collection.
     */
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
    /**
     * - Unique identifier for the collection.
     */
    uid?: string;
    _schedule?: CollectionSchedule;
    /**
     * - Indicates whether facet-based filtering
     * is allowed for the collection.
     */
    allow_facets?: boolean;
    /**
     * - Indicates whether sorting options are
     * allowed for the collection.
     */
    allow_sort?: boolean;
    /**
     * - The application ID associated with the collection.
     */
    app_id?: string;
    /**
     * - Details of the badge associated with the collection.
     */
    badge?: any;
    banners?: ImageUrls;
    cron?: any;
    /**
     * - A description of the collection.
     */
    description?: string;
    /**
     * - Indicates whether the collection is currently active.
     */
    is_active?: boolean;
    logo?: BannerImage;
    /**
     * - Additional metadata related to the collection.
     */
    meta?: any;
    /**
     * - The name of the collection.
     */
    name?: string;
    /**
     * - The priority level of the collection, used to
     * determine its display order.
     */
    priority?: number;
    /**
     * - Query objects that define how the
     * collection's items are retrieved or filtered.
     */
    query?: CollectionQuery[];
    /**
     * - The URL-friendly identifier for the collection.
     */
    slug?: string;
    /**
     * - The default sorting order for items in the
     * collection, e.g., 'popular'.
     */
    sort_on?: string;
    /**
     * - Array of tags associated with the collection for
     * categorization and filtering.
     */
    tag?: string[];
    /**
     * - The type of collection, such as 'items' for
     * manually added items or 'query' for dynamically fetched items.
     */
    type?: string;
    /**
     * - Keys of the facets that are
     * visible and can be used for filtering the collection.
     */
    visible_facets_keys?: string[];
    /**
     * - Indicates whether the collection is published.
     */
    published?: boolean;
    /**
     * - List of tags associated with the collection.
     */
    tags?: string[];
    action?: Action;
    /**
     * - Custom JSON data for additional information.
     */
    _custom_json?: any;
    /**
     * - Locale language settings for the collection.
     */
    _locale_language?: any;
    seo?: SeoDetail;
    /**
     * - Indicates if the collection is visible to users.
     */
    is_visible?: boolean;
    /**
     * - Unique identifier for the collection.
     */
    id?: string;
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
    /**
     * - The aspect ratio of the image, typically
     * represented as a string (e.g., "16:9" or "4:3") to indicate the
     * proportional relationship between the image's width and height.
     */
    aspect_ratio: string;
    /**
     * - The URL of the image, which provides the location
     * where the image is hosted and can be accessed.
     */
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
    /**
     * - A list of tags used to
     * filter the collection listing.
     */
    tags?: CollectionListingFilterTag[];
    /**
     * - A list of types used to
     * filter the collection listing.
     */
    type?: CollectionListingFilterType[];
};
/** @returns {CollectionListingFilterTag} */
declare function CollectionListingFilterTag(): CollectionListingFilterTag;
type CollectionListingFilterTag = {
    /**
     * - The display name of the tag for the collection listing.
     */
    display?: string;
    /**
     * - Indicates whether the tag is currently selected.
     */
    is_selected?: boolean;
    /**
     * - The name of the tag.
     */
    name?: string;
};
/** @returns {CollectionListingFilterType} */
declare function CollectionListingFilterType(): CollectionListingFilterType;
type CollectionListingFilterType = {
    /**
     * - The display name of the type for the collection listing.
     */
    display?: string;
    /**
     * - Indicates whether the type is currently selected.
     */
    is_selected?: boolean;
    /**
     * - The internal name of the type.
     */
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
    /**
     * - The cron expression that defines the scheduling
     * pattern, allowing for tasks or events to be repeated at specific intervals
     * (e.g., daily, weekly).
     */
    cron?: string;
    /**
     * - The duration in seconds for which the
     * collection is active or valid.
     */
    duration?: number;
    /**
     * - The end date and time for the collection's
     * schedule, formatted as a date-time string.
     */
    end?: string;
    /**
     * - The next set of scheduled times
     * when the collection will become active, based on the cron expression.
     */
    next_schedule?: NextSchedule[];
    /**
     * - The start date and time for the collection's
     * schedule, formatted as a date-time string.
     */
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
    /**
     * - Unique identifier for the company.
     */
    id: number;
};
/** @returns {InventoryCompanyMeta} */
declare function InventoryCompanyMeta(): InventoryCompanyMeta;
type InventoryCompanyMeta = {
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
    /**
     * - A human-readable error message providing details
     * about the configuration failure.
     */
    message: string;
};
/** @returns {ConfigSuccessResponseSchema} */
declare function ConfigSuccessResponseSchema(): ConfigSuccessResponseSchema;
type ConfigSuccessResponseSchema = {
    /**
     * - A message confirming the successful completion
     * of the configuration operation.
     */
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
    /**
     * - Custom JSON data for the collection, used
     * for any additional information.
     */
    _custom_json?: any;
    /**
     * - Locale-specific data for supporting
     * multiple languages.
     */
    _locale_language?: any;
    _schedule?: CollectionSchedule;
    /**
     * - Indicates whether facet-based filtering
     * is allowed for the collection.
     */
    allow_facets?: boolean;
    /**
     * - Indicates whether sorting options are
     * allowed for the collection.
     */
    allow_sort?: boolean;
    /**
     * - The application ID associated with the collection.
     */
    app_id: string;
    badge?: CollectionBadge;
    banners: CollectionBanner;
    /**
     * - Information about the user who created
     * the collection.
     */
    created_by?: UserInfo;
    /**
     * - A description of the collection.
     */
    description?: string;
    /**
     * - Indicates whether the collection is currently active.
     */
    is_active?: boolean;
    /**
     * - Indicates whether the collection is
     * visible to users.
     */
    is_visible?: boolean;
    logo: CollectionImage;
    /**
     * - Additional metadata related to the collection.
     */
    meta?: any;
    /**
     * - Information about the user who last
     * modified the collection.
     */
    modified_by?: UserInfo;
    /**
     * - The name of the collection.
     */
    name: string;
    /**
     * - The priority level of the collection, used to
     * determine its display order.
     */
    priority?: number;
    /**
     * - Indicates whether the collection is
     * published and available to users.
     */
    published?: boolean;
    /**
     * - Query objects that define how the
     * collection's items are retrieved or filtered.
     */
    query?: CollectionQuery[];
    seo?: SeoDetail;
    /**
     * - The URL-friendly identifier for the collection.
     */
    slug: string;
    /**
     * - The default sorting order for items in the
     * collection, e.g., 'popular'.
     */
    sort_on?: string;
    /**
     * - Array of tags associated with the collection
     * for categorization and filtering.
     */
    tags?: string[];
    /**
     * - The type of collection, either 'items' for manually
     * added items or 'query' for dynamically fetched items.
     */
    type: string;
    /**
     * - Keys of the facets that are
     * visible and can be used for filtering the collection.
     */
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
    /**
     * - The default key used for the requested operation.
     */
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
    logo?: DepartmentMedia;
    /**
     * - The name of the department, used to identify it
     * within the application.
     */
    name?: string;
    /**
     * - Defines the priority or order in which
     * the department should appear in listings.
     */
    priority_order?: number;
    /**
     * - A URL-friendly string used to uniquely identify
     * the department.
     */
    slug?: string;
    /**
     * - A unique identifier for the department.
     */
    uid?: number;
};
/** @returns {DepartmentCategoryTree} */
declare function DepartmentCategoryTree(): DepartmentCategoryTree;
type DepartmentCategoryTree = {
    /**
     * - The name of the department that this
     * category tree belongs to, such as 'Men', 'Women', or 'Electronics'.
     */
    department?: string;
    /**
     * - An array of categories that fall under
     * the specified department, each containing details about category items.
     */
    items?: CategoryItems[];
};
/** @returns {DepartmentErrorResponseSchema} */
declare function DepartmentErrorResponseSchema(): DepartmentErrorResponseSchema;
type DepartmentErrorResponseSchema = {
    /**
     * - Error code representing the type of error encountered.
     */
    code?: string;
    /**
     * - Detailed information about the errors
     * encountered in the request, typically containing specific field validation
     * errors or related data.
     */
    errors?: any;
    /**
     * - A human-readable message that explains the
     * reason for the error.
     */
    message?: string;
    /**
     * - Additional metadata about the error, such as
     * contextual or debugging information.
     */
    meta?: any;
    /**
     * - HTTP status code associated with the error,
     * e.g., 400 for a bad request or 500 for a server error.
     */
    status?: number;
};
/** @returns {DepartmentIdentifier} */
declare function DepartmentIdentifier(): DepartmentIdentifier;
type DepartmentIdentifier = {
    /**
     * - The name of the department, such as
     * 'Electronics', 'Apparel', or 'Home Appliances'.
     */
    name?: string;
    /**
     * - A URL-friendly identifier for the department,
     * often used in creating department-specific links or routes.
     */
    slug?: string;
    /**
     * - A unique identifier for the department, used to
     * distinguish it from other departments in the system.
     */
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
    /**
     * - List of department objects.
     */
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
/** @returns {InventoryDimensionResponseSchema} */
declare function InventoryDimensionResponseSchema(): InventoryDimensionResponseSchema;
type InventoryDimensionResponseSchema = {
    height?: number;
    length?: number;
    unit?: string;
    width?: number;
};
/** @returns {Document} */
declare function Document(): Document;
type Document = {
    /**
     * - The official legal name associated with the document.
     */
    legal_name?: string;
    /**
     * - The type of document.
     */
    type: string;
    /**
     * - A URL link to the document, typically pointing to
     * where the document is stored.
     */
    url?: string;
    /**
     * - The actual value or identifier associated with the
     * document, such as a GST number or PAN number.
     */
    value: string;
    /**
     * - Indicates whether the document has been
     * verified as valid.
     */
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
    /**
     * - A string representing the specific error code.
     */
    code?: number;
    /**
     * - A brief description of the error type.
     */
    error?: string;
    /**
     * - A detailed message explaining the error.
     */
    message?: string;
    /**
     * - Additional metadata or context about the error,
     * if available.
     */
    meta?: any;
    /**
     * - The HTTP status code associated with the error.
     */
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
    /**
     * - Custom JSON data for the product.
     */
    _custom_json?: any;
    /**
     * - List of company IDs associated with
     * the product.
     */
    all_company_ids?: number[];
    /**
     * - List of all identifiers associated
     * with the product.
     */
    all_identifiers?: string[];
    /**
     * - List of sizes available for the product.
     */
    all_sizes?: any[];
    /**
     * - Additional attributes for the product.
     */
    attributes?: any;
    brand?: Brand;
    /**
     * - Unique identifier of the brand.
     */
    brand_uid?: number;
    /**
     * - Category details of the product.
     */
    category?: any;
    /**
     * - Slug representing the category of the product.
     */
    category_slug?: string;
    /**
     * - Unique identifier for the product category.
     */
    category_uid?: number;
    /**
     * - Unique identifier of the company associated
     * with the product.
     */
    company_id?: number;
    /**
     * - Country where the product is manufactured.
     */
    country_of_origin?: string;
    /**
     * - Details of the user who created the product.
     */
    created_by?: any;
    /**
     * - Timestamp when the product was created.
     */
    created_on?: string;
    /**
     * - Currency in which the product is priced.
     */
    currency?: string;
    /**
     * - Custom order details for the product.
     */
    custom_order?: any;
    /**
     * - List of department IDs associated with
     * the product.
     */
    departments?: number[];
    /**
     * - Detailed description of the product.
     */
    description?: string;
    /**
     * - List of highlights for the product.
     */
    highlights?: string[];
    /**
     * - HSN code associated with the product for tax purposes.
     */
    hsn_code?: string;
    /**
     * - Unique identifier of the product.
     */
    id?: string;
    /**
     * - Nature or type of product images.
     */
    image_nature?: string;
    /**
     * - List of image URLs for the product.
     */
    images?: string[];
    /**
     * - Indicates whether the product is active.
     */
    is_active?: boolean;
    /**
     * - Indicates if the product is dependent on
     * another product.
     */
    is_dependent?: boolean;
    /**
     * - Indicates if the product has an expiration date.
     */
    is_expirable?: boolean;
    /**
     * - Indicates if the product does
     * not have associated images.
     */
    is_image_less_product?: boolean;
    /**
     * - Indicates if the product is a physical item.
     */
    is_physical?: boolean;
    /**
     * - Indicates if the product is part of a set.
     */
    is_set?: boolean;
    /**
     * - Unique code representing the item.
     */
    item_code?: string;
    /**
     * - Type of the item, such as 'standard'.
     */
    item_type?: string;
    /**
     * - L3 category mapping for the product.
     */
    l3_mapping?: string[];
    /**
     * - Media associated with the product, such as
     * images or videos.
     */
    media?: Media[];
    /**
     * - Details of the user who last modified the product.
     */
    modified_by?: any;
    /**
     * - Timestamp when the product was last modified.
     */
    modified_on?: string;
    /**
     * - Minimum order quantity details for the product.
     */
    moq?: any;
    /**
     * - Indicates if the product supports multiple sizes.
     */
    multi_size?: boolean;
    /**
     * - Name of the product.
     */
    name?: string;
    net_quantity?: NetQuantityResponseSchema;
    /**
     * - Number of boxes required for packaging the product.
     */
    no_of_boxes?: number;
    /**
     * - Pending state of the product, such as pending approval.
     */
    pending?: string;
    /**
     * - Primary color of the product.
     */
    primary_color?: string;
    /**
     * - Tags associated with the product group.
     */
    product_group_tag?: string[];
    product_publish?: ProductPublished;
    return_config?: ReturnConfigResponseSchema;
    /**
     * - Short description of the product.
     */
    short_description?: string;
    /**
     * - Size guide for the product.
     */
    size_guide?: string;
    /**
     * - List of available sizes for the product.
     */
    sizes?: any[];
    /**
     * - Unique slug identifier for the product.
     */
    slug?: string;
    /**
     * - Current stage of the product (e.g., pending, verified).
     */
    stage?: string;
    /**
     * - List of tags associated with the product.
     */
    tags?: string[];
    tax_identifier?: TaxIdentifier;
    /**
     * - Teaser tags for the product.
     */
    teaser_tag?: any;
    /**
     * - Template tag associated with the product.
     */
    template_tag?: string;
    /**
     * - List of traders associated with the product.
     */
    trader?: Trader[];
    /**
     * - Unique identifier for the product.
     */
    uid?: number;
    /**
     * - Variant group details for the product.
     */
    variant_group?: any;
    /**
     * - Media related to product variants.
     */
    variant_media?: any;
    /**
     * - Product variants information.
     */
    variants?: any;
    verified_by?: VerifiedBy;
    /**
     * - Timestamp when the product was verified.
     */
    verified_on?: string;
    /**
     * - List of store IDs where the product is
     * available.
     */
    store_id_list?: string[];
    /**
     * - Action to be performed on the product.
     */
    action?: string;
};
/** @returns {RawProductListingResponseSchema} */
declare function RawProductListingResponseSchema(): RawProductListingResponseSchema;
type RawProductListingResponseSchema = {
    /**
     * - A list of raw product items.
     */
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
    _id?: string[];
    description?: string;
    details?: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    filters?: AttributeMasterFilter;
    is_nested?: boolean;
    logo?: string;
    meta?: AttributeMasterMeta;
    name?: string;
    schema?: AttributeMaster;
    slug?: string;
};
/** @returns {LatLong} */
declare function LatLong(): LatLong;
type LatLong = {
    /**
     * - Type of coordinate data.
     */
    type: string;
    /**
     * - Array containing longitude and latitude coordinates.
     */
    coordinates: number[];
};
/** @returns {ApplicationLocationAddressSchema} */
declare function ApplicationLocationAddressSchema(): ApplicationLocationAddressSchema;
type ApplicationLocationAddressSchema = {
    /**
     * - Primary address line.
     */
    address1?: string;
    /**
     * - Secondary address line.
     */
    address2?: string;
    /**
     * - Pincode of the store's location.
     */
    pincode?: number;
    /**
     * - City where the store is located.
     */
    city?: string;
    /**
     * - Country where the store is located.
     */
    country?: string;
    /**
     * - State where the store is located.
     */
    state?: string;
    lat_long?: LatLong;
    /**
     * - Country code for the store's location.
     */
    country_code?: string;
    /**
     * - Schema for address metadata.
     */
    address_meta?: any;
};
/** @returns {GetAddressSchema} */
declare function GetAddressSchema(): GetAddressSchema;
type GetAddressSchema = {
    /**
     * - Primary address line, typically including
     * street name, building number, or apartment details.
     */
    address1?: string;
    /**
     * - Secondary address line, used for additional
     * location details such as locality, neighborhood, or landmark.
     */
    address2?: string;
    /**
     * - The type of address.
     */
    address_type?: string;
    /**
     * - The city where the address is located.
     */
    city?: string;
    /**
     * - The country where the address is located.
     */
    country?: string;
    /**
     * - The country code representing the
     * country, such as 'IN' for India.
     */
    country_code?: string;
    /**
     * - A nearby landmark that helps identify the
     * address location.
     */
    landmark?: string;
    /**
     * - The latitude coordinate of the address, used
     * for geolocation purposes.
     */
    latitude?: number;
    /**
     * - The longitude coordinate of the address,
     * used for geolocation purposes.
     */
    longitude?: number;
    /**
     * - The postal code or ZIP code associated with the address.
     */
    pincode?: string;
    /**
     * - The state or region where the address is located.
     */
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
    _schedule?: CollectionSchedule;
    action?: Action;
    /**
     * - Indicates whether facets are allowed for
     * filtering the collection.
     */
    allow_facets?: boolean;
    /**
     * - Indicates whether sorting options are
     * allowed for the collection.
     */
    allow_sort?: boolean;
    /**
     * - The application ID associated with the collection.
     */
    app_id?: string;
    badge?: CollectionBadge;
    banners?: ImageUrls;
    cron?: any;
    /**
     * - A description of the collection.
     */
    description?: string;
    /**
     * - Indicates whether the collection is currently active.
     */
    is_active?: boolean;
    logo?: Media;
    /**
     * - Additional metadata related to the collection.
     */
    meta?: any;
    /**
     * - The name of the collection.
     */
    name?: string;
    /**
     * - The priority level of the collection in the
     * display list.
     */
    priority?: number;
    /**
     * - Array of queries that define how the
     * collection is fetched or filtered.
     */
    query?: CollectionQuery[];
    /**
     * - The URL-friendly identifier of the collection.
     */
    slug?: string;
    /**
     * - Array of tags associated with the collection.
     */
    tag?: string[];
    /**
     * - The type of collection, such as manual or automated.
     */
    type?: string;
    /**
     * - The unique identifier for the collection.
     */
    uid?: string;
    /**
     * - List of facet keys that are
     * visible for filtering the collection.
     */
    visible_facets_keys?: string[];
    /**
     * - Internal identifier for the collection.
     */
    _id?: string;
    /**
     * - Indicates if the collection is published.
     */
    published?: boolean;
    /**
     * - Tags associated with the collection.
     */
    tags?: string[];
    /**
     * - Sort criteria for the collection.
     */
    sort_on?: string;
    /**
     * - Custom JSON data for the collection.
     */
    _custom_json?: any;
    /**
     * - Locale-specific language settings.
     */
    _locale_language?: any;
    seo?: SeoDetail;
    /**
     * - Indicates if the collection is visible.
     */
    is_visible?: boolean;
};
/** @returns {GetCollectionItemsResponseSchema} */
declare function GetCollectionItemsResponseSchema(): GetCollectionItemsResponseSchema;
type GetCollectionItemsResponseSchema = {
    /**
     * - An array of filters applicable to
     * the products in the collection.
     */
    filters?: ProductFilters[];
    /**
     * - An array of products that
     * belong to the collection.
     */
    items?: ApplicationProductsSchema[];
    page?: Page;
    /**
     * - Sorting options available for the
     * products in the collection.
     */
    sort_on?: ProductSortOn[];
};
/** @returns {GetCollectionListingResponseSchema} */
declare function GetCollectionListingResponseSchema(): GetCollectionListingResponseSchema;
type GetCollectionListingResponseSchema = {
    filters?: CollectionListingFilter;
    /**
     * - Array of nested collection details.
     */
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
    /**
     * - List of addresses associated
     * with the company.
     */
    addresses?: GetAddressSchema[];
    /**
     * - Specifies the business model or legal
     * structure of the company, such as 'LLC', 'Corporation', or 'Proprietorship'.
     */
    business_type?: string;
    /**
     * - Indicates the type of company, such as
     * 'manufacturer-owner', 'retailer', or 'wholesaler'.
     */
    company_type?: string;
    created_by?: UserSchema;
    /**
     * - The date and time when the company record
     * was created.
     */
    created_on?: string;
    modified_by?: UserSchema;
    /**
     * - The date and time when the company record
     * was last updated.
     */
    modified_on?: string;
    /**
     * - The registered name of the company.
     */
    name?: string;
    /**
     * - If applicable, the reason why the
     * company's application or status was rejected.
     */
    reject_reason?: string;
    /**
     * - Current operational stage of the company, such
     * as 'active', 'pending', or 'rejected'.
     */
    stage?: string;
    /**
     * - Unique identifier for the company within the system.
     */
    uid?: number;
    verified_by?: UserSchema;
    /**
     * - The date and time when the company's
     * details were verified.
     */
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
    data: ConfigItem[];
    page: PageResponseType;
};
/** @returns {ConfigItem} */
declare function ConfigItem(): ConfigItem;
type ConfigItem = {
    /**
     * - Unique identifier for the application to which
     * this configuration belongs.
     */
    app_id?: string;
    attributes?: AttributeConfig[];
    /**
     * - Unique identifier for the configuration.
     */
    id?: string;
    /**
     * - Indicates if this configuration is
     * currently active for the application.
     */
    is_active?: boolean;
    /**
     * - Specifies whether this is the default
     * configuration for the application.
     */
    is_default?: boolean;
    /**
     * - The name of the configuration group.
     */
    name?: string;
    /**
     * - The priority of this configuration group.
     */
    priority?: number;
    /**
     * - A URL-friendly identifier for the configuration group.
     */
    slug?: string;
    /**
     * - A list of template slugs associated
     * with this configuration.
     */
    template_slugs?: string[];
};
/** @returns {AttributeConfig} */
declare function AttributeConfig(): AttributeConfig;
type AttributeConfig = {
    /**
     * - The type of display used for the
     * attribute (e.g., text, dropdown).
     */
    display_type?: string;
    /**
     * - Indicates whether the attribute is currently active.
     */
    is_active?: boolean;
    /**
     * - A unique key or identifier for the attribute.
     */
    key?: string;
    /**
     * - The name of the attribute.
     */
    name?: string;
    /**
     * - The priority of the attribute.
     */
    priority?: number;
    /**
     * - A URL-friendly identifier for the attribute.
     */
    slug?: string;
};
/** @returns {GetDepartment} */
declare function GetDepartment(): GetDepartment;
type GetDepartment = {
    created_by?: RequestUserSchema;
    /**
     * - Timestamp of when the department was created.
     */
    created_on?: string;
    /**
     * - Indicates whether the department is currently active.
     */
    is_active?: boolean;
    item_type?: string;
    /**
     * - URL of the department's logo.
     */
    logo?: string;
    modified_by?: RequestUserSchema;
    /**
     * - Timestamp of when the department was last modified.
     */
    modified_on?: string;
    /**
     * - Alternate unique identifier for the department.
     */
    id?: string;
    /**
     * - Name of the department.
     */
    name?: string;
    /**
     * - URL-friendly slug for the department.
     */
    slug?: string;
    /**
     * - List of alternative names for the department.
     */
    synonyms?: string[];
    /**
     * - The priority order of the department
     * for display purposes.
     */
    priority_order?: number;
    /**
     * - Unique identifier for the department within the system.
     */
    uid?: number;
};
/** @returns {GetInventories} */
declare function GetInventories(): GetInventories;
type GetInventories = {
    brand?: InventoryBrandMeta;
    company?: InventoryCompanyMeta;
    /**
     * - Country where the product was manufactured.
     */
    country_of_origin?: string;
    created_by?: RequestUserSchema;
    date_meta?: DateMeta;
    dimension?: InventoryDimensionResponseSchema;
    /**
     * - Expiration date of the product.
     */
    expiration_date?: string;
    /**
     * - Unique identifier of the product.
     */
    id?: string;
    identifier?: Identifier;
    /**
     * - The last date when inventory
     * information was updated.
     */
    inventory_updated_on?: string;
    /**
     * - Indicates if the product is sold as a set.
     */
    is_set?: boolean;
    /**
     * - Unique item ID for the product.
     */
    item_id?: number;
    manufacturer?: InventoryManufacturerResponseSchema;
    modified_by?: RequestUserSchema;
    /**
     * - Indicates platform availability status for
     * the product.
     */
    platforms?: any;
    price?: PriceArticle;
    quantities?: QuantitiesArticle;
    return_config?: ReturnConfig;
    /**
     * - Seller’s identifier for the product.
     */
    seller_identifier?: string;
    /**
     * - Size of the product.
     */
    size?: string;
    /**
     * - Current stage of the product, such as verified or pending.
     */
    stage?: string;
    store?: ArticleStoreResponseSchema;
    /**
     * - Tags associated with the product.
     */
    tags?: string[];
    tax_identifier?: TaxIdentifier;
    /**
     * - Total available quantity of the product.
     */
    total_quantity?: number;
    /**
     * - Trace ID for inventory management.
     */
    trace_id?: string;
    /**
     * - Indicates if the inventory is being tracked.
     */
    track_inventory?: boolean;
    /**
     * - Information about traders, such
     * as manufacturers or importers.
     */
    trader?: TraderResponseSchema[];
    /**
     * - Unique identifier for the product.
     */
    uid?: string;
    weight?: InventoryWeightResponseSchema;
};
/** @returns {GetInventoriesResponseSchema} */
declare function GetInventoriesResponseSchema(): GetInventoriesResponseSchema;
type GetInventoriesResponseSchema = {
    /**
     * - List of product inventories.
     */
    items?: GetInventories[];
    page?: Page;
};
/** @returns {GetLocationSchema} */
declare function GetLocationSchema(): GetLocationSchema;
type GetLocationSchema = {
    /**
     * - Custom JSON data specific to the location.
     */
    _custom_json?: any;
    address: GetAddressSchema;
    /**
     * - Unique identifier code for the store.
     */
    store_code: string;
    company?: GetCompanySchema;
    /**
     * - List of contact numbers
     * associated with the store.
     */
    contact_numbers?: SellerPhoneNumber[];
    created_by?: UserSchema;
    /**
     * - Timestamp indicating when the location was created.
     */
    created_on?: string;
    /**
     * - Display name of the location for easier
     * identification.
     */
    display_name: string;
    /**
     * - Documents related to the store location.
     */
    documents?: Document[];
    gst_credentials?: InvoiceDetailsSchema;
    integration_type?: LocationIntegrationType;
    manager?: LocationManagerSchema;
    modified_by?: UserSchema;
    /**
     * - Timestamp indicating when the location
     * details were last modified.
     */
    modified_on?: string;
    /**
     * - Name of the store location.
     */
    name: string;
    /**
     * - Email addresses for sending
     * notifications related to this store.
     */
    notification_emails?: string[];
    /**
     * - Primary phone number for contacting the store.
     */
    phone_number: string;
    product_return_config?: ProductReturnConfigSchema;
    /**
     * - Current operational stage of the store.
     */
    stage?: string;
    /**
     * - Type of store.
     */
    store_type?: string;
    /**
     * - The daily operational timings
     * for the store.
     */
    timing?: LocationDayWiseSchema[];
    /**
     * - Unique identifier for the store.
     */
    uid?: number;
    verified_by?: UserSchema;
    /**
     * - Timestamp when the store location was verified.
     */
    verified_on?: string;
    /**
     * - Warnings or issues associated with the store, if any.
     */
    warnings?: any;
    /**
     * - ID of the company to which this store belongs.
     */
    company_id?: number;
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
    /**
     * - Specifies the type of bundle, e.g., single or multi.
     */
    choice: string;
    /**
     * - Unique identifier for the company that owns
     * the product bundle.
     */
    company_id?: number;
    created_by?: CreatedBy;
    /**
     * - Timestamp when the product bundle was created.
     */
    created_on?: string;
    /**
     * - Unique identifier for the product bundle.
     */
    id?: string;
    /**
     * - Indicates if the product bundle is active or not.
     */
    is_active: boolean;
    /**
     * - URL of the product bundle's logo, or null if not available.
     */
    logo?: string;
    /**
     * - Additional metadata about the product bundle.
     */
    meta?: any;
    modified_by?: ModifiedBy;
    /**
     * - Timestamp when the product bundle was last modified.
     */
    modified_on?: string;
    /**
     * - Name of the product bundle.
     */
    name: string;
    /**
     * - Visibility settings for the product
     * bundle across different pages.
     */
    page_visibility?: string[];
    /**
     * - List of products that are part of
     * the product bundle.
     */
    products: ProductBundleItem[];
    /**
     * - Indicates whether all products
     * in the bundle belong to the same store.
     */
    same_store_assignment?: boolean;
    /**
     * - Unique slug used to identify the product bundle in URLs.
     */
    slug: string;
};
/** @returns {GetProductBundleListingResponseSchema} */
declare function GetProductBundleListingResponseSchema(): GetProductBundleListingResponseSchema;
type GetProductBundleListingResponseSchema = {
    /**
     * - List of product
     * bundles that are returned in the response.
     */
    items?: GetProductBundleCreateResponseSchema[];
    page?: Page;
};
/** @returns {GetProductBundleResponseSchema} */
declare function GetProductBundleResponseSchema(): GetProductBundleResponseSchema;
type GetProductBundleResponseSchema = {
    /**
     * - Specifies the type of product bundle, e.g.,
     * 'single' or 'multi'.
     */
    choice?: string;
    /**
     * - The unique identifier of the company that
     * owns the product bundle.
     */
    company_id?: number;
    /**
     * - Indicates whether the product bundle is active.
     */
    is_active?: boolean;
    /**
     * - URL of the logo associated with the product bundle.
     */
    logo?: string;
    /**
     * - Additional metadata for the product bundle.
     */
    meta?: any;
    /**
     * - The name of the product bundle.
     */
    name?: string;
    /**
     * - List of pages where the product
     * bundle is visible, e.g., 'pdp'.
     */
    page_visibility?: string[];
    /**
     * - A list of products included in the bundle.
     */
    products?: GetProducts[];
    /**
     * - Indicates whether all products
     * in the bundle are assigned to the same store.
     */
    same_store_assignment?: boolean;
    /**
     * - Unique URL-friendly identifier for the product bundle.
     */
    slug?: string;
};
/** @returns {GetProducts} */
declare function GetProducts(): GetProducts;
type GetProducts = {
    /**
     * - Indicates whether the product can be
     * removed from the bundle.
     */
    allow_remove?: boolean;
    /**
     * - Specifies if the product is
     * automatically added to the cart.
     */
    auto_add_to_cart?: boolean;
    /**
     * - Indicates if the product is automatically
     * selected in the bundle.
     */
    auto_select?: boolean;
    /**
     * - The maximum quantity of the product that
     * can be added to the bundle.
     */
    max_quantity?: number;
    /**
     * - The minimum quantity of the product that
     * must be added to the bundle.
     */
    min_quantity?: number;
    /**
     * - Unique identifier for the product.
     */
    product_uid?: number;
    product_details?: ProductDetails;
};
/** @returns {ProductDetails} */
declare function ProductDetails(): ProductDetails;
type ProductDetails = {
    /**
     * - Unique URL-friendly identifier for the product.
     */
    slug?: string;
    /**
     * - The quantity of the product available.
     */
    quantity?: number;
    /**
     * - A set of key-value pairs representing the
     * attributes of the product, such as pattern, gender, etc.
     */
    attributes?: any;
    price?: Price;
    /**
     * - List of URLs pointing to images of the product.
     */
    images?: string[];
    /**
     * - Unique identifier for the product.
     */
    uid?: number;
    /**
     * - Code assigned to the product for inventory purposes.
     */
    item_code?: string;
    /**
     * - Identification details for the product,
     * including EANs (European Article Numbers).
     */
    identifier?: any;
    /**
     * - List of available sizes for the product.
     */
    sizes?: string[];
    /**
     * - Country where the product was manufactured.
     */
    country_of_origin?: string;
};
/** @returns {GetCollectionDetailResponseSchema} */
declare function GetCollectionDetailResponseSchema(): GetCollectionDetailResponseSchema;
type GetCollectionDetailResponseSchema = {
    /**
     * - Custom JSON data associated with the collection.
     */
    _custom_json?: any;
    /**
     * - Locale-specific language details.
     */
    _locale_language?: any;
    _schedule?: CollectionSchedule;
    /**
     * - Action details, including navigation or page
     * redirection information.
     */
    action?: any;
    /**
     * - Indicates whether facets are allowed for
     * filtering the collection.
     */
    allow_facets?: boolean;
    /**
     * - Indicates whether sorting is enabled for
     * the collection.
     */
    allow_sort?: boolean;
    /**
     * - The unique identifier of the application to
     * which the collection belongs.
     */
    app_id?: string;
    badge?: CollectionBadge;
    banners?: ImageUrls;
    /**
     * - A textual description of the collection.
     */
    description?: string;
    /**
     * - Indicates whether the collection is currently active.
     */
    is_active?: boolean;
    /**
     * - Indicates whether the collection is
     * visible on the platform.
     */
    is_visible?: boolean;
    logo?: Media;
    /**
     * - Metadata associated with the collection.
     */
    meta?: any;
    /**
     * - The name of the collection.
     */
    name?: string;
    /**
     * - The priority level assigned to the collection.
     */
    priority?: number;
    /**
     * - Indicates whether the collection is
     * published and visible to customers.
     */
    published?: boolean;
    /**
     * - Query details that define how items
     * in the collection are filtered.
     */
    query?: CollectionQuery[];
    seo?: SeoDetail;
    /**
     * - The URL-friendly slug for the collection.
     */
    slug?: string;
    /**
     * - The sorting criteria applied to the collection
     * (e.g., by latest, discount).
     */
    sort_on?: string;
    /**
     * - Tags associated with the collection.
     */
    tags?: string[];
    /**
     * - The type of the collection (e.g., query-based).
     */
    type?: string;
    /**
     * - A unique identifier for the collection.
     */
    uid?: string;
    /**
     * - A unique identifier for the collection, matching `uid`.
     */
    _id?: string;
    /**
     * - Keys representing visible facets
     * for filtering.
     */
    visible_facets_keys?: string[];
};
/** @returns {CommonResponseSchemaCollection} */
declare function CommonResponseSchemaCollection(): CommonResponseSchemaCollection;
type CommonResponseSchemaCollection = {
    /**
     * - A message providing details about the response.
     */
    message?: string;
};
/** @returns {GetQueryFiltersKeysResponseSchema} */
declare function GetQueryFiltersKeysResponseSchema(): GetQueryFiltersKeysResponseSchema;
type GetQueryFiltersKeysResponseSchema = {
    /**
     * - An array of available filter
     * keys for querying products.
     */
    filters?: ProductFiltersKeysOnly[];
    /**
     * - A map of available operators that can be used
     * for querying, where the key is the operator type and the value is a string.
     */
    operators: any;
    /**
     * - An array of sorting options available
     * for the products.
     */
    sort_on?: ProductSortOn[];
};
/** @returns {GetQueryFiltersResponseSchema} */
declare function GetQueryFiltersResponseSchema(): GetQueryFiltersResponseSchema;
type GetQueryFiltersResponseSchema = {
    /**
     * - An array of filters to be
     * applied on products while querying.
     */
    filters?: CollectionProductFilters[];
    /**
     * - A map of operators available for product
     * queries, where the key is the operator type and the value is a string.
     */
    operators: any;
    /**
     * - An array of sorting options
     * to be applied to product queries.
     */
    sort_on?: CollectionProductSortOn[];
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
    /**
     * - Specifies whether the item should be added or
     * removed from the collection.
     */
    action: string;
    /**
     * - The unique identifier of the item in the collection.
     */
    item_id: number;
    /**
     * - The priority level of the item in the
     * collection, with higher values representing higher priority.
     */
    priority?: number;
};
/** @returns {CollectionItemUpdateSchema} */
declare function CollectionItemUpdateSchema(): CollectionItemUpdateSchema;
type CollectionItemUpdateSchema = {
    /**
     * - Indicates whether facets are allowed for
     * filtering the collection items.
     */
    allow_facets?: boolean;
    /**
     * - Indicates whether sorting is enabled for
     * the collection items.
     */
    allow_sort?: boolean;
    /**
     * - A list of items in the collection.
     */
    items?: CollectionItemSchemaV2[];
    /**
     * - A list of query conditions to
     * filter the collection items.
     */
    query?: CollectionQuerySchemaV2[];
    /**
     * - The type of the collection item, defining its classification.
     */
    type: string;
    /**
     * - A list of keys representing
     * visible facets for the collection, used for filtering.
     */
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
/** @returns {CreatedBySchema} */
declare function CreatedBySchema(): CreatedBySchema;
type CreatedBySchema = {
    /**
     * - The unique identifier for the user who created
     * the resource.
     */
    user_id: string;
    /**
     * - The username of the user who created the resource.
     */
    username: string;
};
/** @returns {ModifiedBySchema} */
declare function ModifiedBySchema(): ModifiedBySchema;
type ModifiedBySchema = {
    /**
     * - The unique identifier for the user who last
     * modified the resource.
     */
    user_id: string;
    /**
     * - The username of the user who last modified the resource.
     */
    username: string;
};
/** @returns {HSNDataInsertV2} */
declare function HSNDataInsertV2(): HSNDataInsertV2;
type HSNDataInsertV2 = {
    /**
     * - Country code.
     */
    country_code: string;
    created_by?: CreatedBySchema;
    modified_by?: ModifiedBySchema;
    /**
     * - Date and time when the HSN data was created.
     */
    created_on?: string;
    /**
     * - Description of the HSN data.
     */
    description: string;
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
    reporting_hsn: any;
    /**
     * - Internal database identifier for the HSN data.
     */
    id?: string;
    /**
     * - List of applicable tax slabs for the HSN data.
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
     * - Provides count of total/success/failed
     */
    stats?: any;
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
    /**
     * - Indicates whether there is a next page of results.
     */
    has_next?: boolean;
    /**
     * - Indicates whether there is a previous
     * page of results.
     */
    has_previous?: boolean;
    /**
     * - The total number of items available in the inventory.
     */
    item_total: number;
    /**
     * - The identifier for fetching the next set of
     * results. If null, there are no more results.
     */
    next_id?: string;
    /**
     * - The type of pagination being used, often indicating
     * the method or strategy for paginating the results.
     */
    type: string;
};
/** @returns {AddInventoryRequestPayload} */
declare function AddInventoryRequestPayload(): AddInventoryRequestPayload;
type AddInventoryRequestPayload = {
    sizes?: InventoryResponseSchema[];
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
    /**
     * - The currency in which the item is priced, e.g., 'INR'.
     */
    currency?: string;
    /**
     * - Object containing identifier details such
     * as GTIN or SKU codes.
     */
    identifiers?: any;
    /**
     * - The date and time when the
     * inventory was last updated, in ISO 8601 format.
     */
    inventory_updated_on?: string;
    /**
     * - The unique identifier for the item in the
     * inventory system.
     */
    item_id?: number;
    /**
     * - The original price of the item.
     */
    price?: number;
    /**
     * - The effective price of the item after
     * any discounts.
     */
    price_effective?: number;
    /**
     * - The transfer price for the item (if applicable).
     */
    price_transfer?: number;
    /**
     * - The total quantity of the item available in
     * the inventory.
     */
    quantity?: number;
    /**
     * - The quantity of the item that is
     * available for sale.
     */
    sellable_quantity?: number;
    /**
     * - An identifier for the seller,
     * typically an SKU or unique code.
     */
    seller_identifier?: string;
    /**
     * - The size of the item, if applicable.
     */
    size?: string;
    /**
     * - Object containing details about the store where
     * the item is stocked.
     */
    store?: any;
    /**
     * - A unique identifier combining store ID and seller
     * identifier.
     */
    uid?: string;
    /**
     * - Details of the user or entity that created
     * the item record, including 'username' and 'user_id'.
     */
    created_by?: any;
    /**
     * - Details of the user or entity that last
     * modified the item record, including 'username' and 'user_id'.
     */
    modified_by?: any;
    /**
     * - The expiration date of the item, if
     * applicable, in ISO 8601 format.
     */
    expiration_date?: string;
    /**
     * - An array of tags or labels associated with the
     * item for categorization or search purposes.
     */
    tags?: string[];
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
/** @returns {ApplicationInventorySellerIdentifierResponsePaginated} */
declare function ApplicationInventorySellerIdentifierResponsePaginated(): ApplicationInventorySellerIdentifierResponsePaginated;
type ApplicationInventorySellerIdentifierResponsePaginated = {
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
    return_config?: InventoryReturnConfig;
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
    trader?: Trader[];
    /**
     * - The unique identifier of the article.
     */
    uid: string;
    /**
     * - The weight of the article.
     */
    weight: WeightResponseSchema;
};
/** @returns {ApplicationInventorySellerResponseSchema} */
declare function ApplicationInventorySellerResponseSchema(): ApplicationInventorySellerResponseSchema;
type ApplicationInventorySellerResponseSchema = {
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
    return_config?: InventoryReturnConfig;
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
    trader?: Trader[];
    /**
     * - The unique identifier of the article.
     */
    uid: string;
    /**
     * - The weight of the article.
     */
    weight: WeightResponseSchema;
    date_meta?: DateMeta;
    /**
     * - Platform-specific availability information.
     */
    platforms?: any;
    /**
     * - Marked price of the item.
     */
    price_marked?: number;
    /**
     * - Effective price of the item after discount.
     */
    price_effective?: number;
    /**
     * - Currency in which the prices are listed.
     */
    currency?: string;
    /**
     * - Selling price of the item.
     */
    price_selling?: number;
    /**
     * - Discount metadata for the item.
     */
    discount_meta?: any;
    /**
     * - Discounts applied to the item, if any.
     */
    discount_applied?: any;
};
/** @returns {InventorySet} */
declare function InventorySet(): InventorySet;
type InventorySet = {
    /**
     * - The name of the inventory set.
     */
    name?: string;
    /**
     * - The quantity of items available in the inventory set.
     */
    quantity?: number;
    size_distribution: SizeDistribution;
};
/** @returns {InventoryStockResponseSchema} */
declare function InventoryStockResponseSchema(): InventoryStockResponseSchema;
type InventoryStockResponseSchema = {
    /**
     * - An array of inventory stock items. Each item
     * represents a stock entry for a specific product or SKU.
     */
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
    /**
     * - It is the success status of the inventory update.
     */
    success?: boolean;
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
    /**
     * - Indicates whether the invoice credentials are
     * enabled for use.
     */
    enabled?: boolean;
    /**
     * - The password associated with the invoice credentials.
     */
    password?: string;
    /**
     * - The username or identifier used for the
     * invoice credentials.
     */
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
/** @returns {SizeGuideItem} */
declare function SizeGuideItem(): SizeGuideItem;
type SizeGuideItem = {
    /**
     * - Indicates if the size guide is active or not.
     */
    active?: boolean;
    /**
     * - The identifier for the brand associated with
     * the size guide.
     */
    brand_id?: number;
    /**
     * - The identifier for the company that owns
     * the size guide.
     */
    company_id?: number;
    created_by?: CreatedBySchema;
    /**
     * - The timestamp when the size guide was created.
     */
    created_on?: string;
    guide?: Guide;
    /**
     * - The unique identifier for the size guide.
     */
    id?: string;
    modified_by?: ModifiedBySchema;
    /**
     * - The timestamp when the size guide was last modified.
     */
    modified_on?: string;
    /**
     * - The name of the size guide.
     */
    name?: string;
    /**
     * - A short description or subtitle for the size guide.
     */
    subtitle?: string;
    /**
     * - A tag or identifier used to classify the size guide.
     */
    tag?: string;
    /**
     * - The title of the size guide.
     */
    title?: string;
    /**
     * - A detailed description or HTML content
     * providing more information about the size guide.
     */
    description?: string;
    /**
     * - A URL to an image associated with the size guide.
     */
    image?: string;
};
/** @returns {ListSizeGuide} */
declare function ListSizeGuide(): ListSizeGuide;
type ListSizeGuide = {
    /**
     * - A list of size guides, each containing
     * detailed information about a product's dimensions, creation, and modification data.
     */
    items?: SizeGuideItem[];
    page?: PageResponseSchema;
};
/** @returns {LocationDayWiseSchema} */
declare function LocationDayWiseSchema(): LocationDayWiseSchema;
type LocationDayWiseSchema = {
    closing?: LocationTimingSchema;
    /**
     * - Indicates whether the store or location is open on
     * the specified day.
     */
    open: boolean;
    opening?: LocationTimingSchema;
    /**
     * - The day of the week for which the store timings
     * are defined.
     */
    weekday: string;
};
/** @returns {LocationIntegrationType} */
declare function LocationIntegrationType(): LocationIntegrationType;
type LocationIntegrationType = {
    /**
     * - The system used to manage inventory
     * integration for the location.
     */
    inventory?: string;
    /**
     * - The system used to manage order integration for
     * the location.
     */
    order?: string;
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
    /**
     * - Email address of the location manager.
     */
    email?: string;
    mobile_no: SellerPhoneNumber;
    /**
     * - Full name of the location manager.
     */
    name?: string;
};
/** @returns {LocationTimingSchema} */
declare function LocationTimingSchema(): LocationTimingSchema;
type LocationTimingSchema = {
    /**
     * - The hour component of the time, represented in
     * 24-hour format.
     */
    hour?: number;
    /**
     * - The minute component of the time.
     */
    minute?: number;
};
/** @returns {Logo} */
declare function Logo(): Logo;
type Logo = {
    /**
     * - Aspect ratio of the logo image, typically
     * expressed as a string (e.g., '16:9').
     */
    aspect_ratio?: string;
    /**
     * - Numeric representation of the aspect
     * ratio for scaling purposes.
     */
    aspect_ratio_f?: number;
    /**
     * - Secure URL to the logo image.
     */
    secure_url?: string;
    /**
     * - URL to the logo image.
     */
    url?: string;
};
/** @returns {MOQData} */
declare function MOQData(): MOQData;
type MOQData = {
    /**
     * - The unit by which the quantity can be
     * incremented after the minimum order quantity.
     */
    increment_unit?: number;
    /**
     * - The maximum number of units that can be
     * ordered for the item.
     */
    maximum?: number;
    /**
     * - The minimum number of units required to place
     * an order for the item.
     */
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
/** @returns {InventoryManufacturerResponseSchema} */
declare function InventoryManufacturerResponseSchema(): InventoryManufacturerResponseSchema;
type InventoryManufacturerResponseSchema = {
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
/** @returns {DepartmentMedia} */
declare function DepartmentMedia(): DepartmentMedia;
type DepartmentMedia = {
    /**
     * - The aspect ratio of the media, typically
     * represented as width:height (e.g., '16:9').
     */
    aspect_ratio?: string;
    /**
     * - The type of media, such as 'image', 'video', or
     * other supported media formats.
     */
    type?: string;
    /**
     * - The URL where the media resource is hosted and can
     * be accessed.
     */
    url?: string;
};
/** @returns {BrandMedia} */
declare function BrandMedia(): BrandMedia;
type BrandMedia = {
    /**
     * - The aspect ratio of the media, typically
     * represented as a string like '16:9' or '4:3'.
     */
    aspect_ratio?: string;
    /**
     * - The type of media, such as 'image', 'video', or
     * 'audio', describing the content format.
     */
    type?: string;
    /**
     * - The URL where the media file is hosted, typically
     * a link to an image or video resource.
     */
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
    /**
     * - The unit of measurement for the net quantity.
     */
    unit?: string;
    /**
     * - The actual quantity of the product in the specified unit.
     */
    value?: number;
};
/** @returns {NextSchedule} */
declare function NextSchedule(): NextSchedule;
type NextSchedule = {
    /**
     * - The end time of the schedule.
     */
    end?: string;
    /**
     * - The start time of the schedule.
     */
    start?: string;
};
/** @returns {LocationPriceRequestSchema} */
declare function LocationPriceRequestSchema(): LocationPriceRequestSchema;
type LocationPriceRequestSchema = {
    /**
     * - The effective price of the inventory item.
     */
    price_effective: number;
    /**
     * - The marked price of the inventory item.
     */
    price_marked: number;
    /**
     * - Tags associated with inventory item.
     */
    tags?: string[];
};
/** @returns {LocationQuantityRequestSchema} */
declare function LocationQuantityRequestSchema(): LocationQuantityRequestSchema;
type LocationQuantityRequestSchema = {
    /**
     * - The expiration date of the inventory item.
     */
    expiration_date?: string;
    /**
     * - The total quantity of the inventory item.
     */
    total_quantity: number;
};
/** @returns {LocationPriceQuantitySuccessResponseSchema} */
declare function LocationPriceQuantitySuccessResponseSchema(): LocationPriceQuantitySuccessResponseSchema;
type LocationPriceQuantitySuccessResponseSchema = {
    /**
     * - It is the success message of the price/quantity update.
     */
    message: string;
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
    /**
     * - Alternate text associated with the item,
     * typically for accessibility purposes.
     */
    alt_text?: any;
    /**
     * - Indicates whether Cash on Delivery (COD) is
     * available for this item.
     */
    is_cod?: boolean;
    /**
     * - Indicates whether the item is marked as a gift.
     */
    is_gift?: boolean;
    /**
     * - Minimum order quantity (MOQ) details for the
     * item, including minimum units and increment units.
     */
    moq?: MOQData;
    /**
     * - Search Engine Optimization (SEO) related
     * information, including title, description, sitemap details, and meta tags.
     */
    seo?: SEOData;
    /**
     * - Custom JSON data for the item, allowing
     * flexibility for additional item-specific information.
     */
    _custom_json?: any;
    /**
     * - An array of custom meta fields
     * associated with the item for extended metadata.
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
/** @returns {PageResponseSchema} */
declare function PageResponseSchema(): PageResponseSchema;
type PageResponseSchema = {
    /**
     * - It is the current page of the page response schema.
     */
    current?: number;
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
/** @returns {ProductListingDetailPrice} */
declare function ProductListingDetailPrice(): ProductListingDetailPrice;
type ProductListingDetailPrice = {
    /**
     * - The ISO code of the currency in which
     * the price is displayed.
     */
    currency_code?: string;
    /**
     * - The symbol of the currency
     * corresponding to the currency code.
     */
    currency_symbol?: string;
    /**
     * - The maximum price for the product.
     */
    max?: number;
    /**
     * - The minimum price for the product.
     */
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
/** @returns {ProdcutTemplateCategoriesResponseSchema} */
declare function ProdcutTemplateCategoriesResponseSchema(): ProdcutTemplateCategoriesResponseSchema;
type ProdcutTemplateCategoriesResponseSchema = {
    items?: CategoriesResponseSchema[];
    page?: Page;
};
/** @returns {Product} */
declare function Product(): Product;
type Product = {
    /**
     * - A custom JSON object that can hold any
     * additional key-value pairs specific to the product.
     */
    _custom_json?: any;
    /**
     * - List of company IDs associated with
     * the product.
     */
    all_company_ids?: number[];
    /**
     * - List of identifiers such as SKU, barcode, etc.
     */
    all_identifiers?: string[];
    /**
     * - List of available sizes for the product.
     */
    all_sizes?: any[];
    /**
     * - Additional attributes of the product such
     * as material, color, pattern, etc.
     */
    attributes?: any;
    brand?: Brand;
    /**
     * - Unique ID of the brand associated with the product.
     */
    brand_uid?: number;
    /**
     * - Details about the category the product belongs to.
     */
    category?: any;
    /**
     * - Unique slug representing the category.
     */
    category_slug?: string;
    /**
     * - Unique ID of the product category.
     */
    category_uid?: number;
    /**
     * - Primary color of the product.
     */
    color?: string;
    /**
     * - ID of the company managing the product.
     */
    company_id?: number;
    /**
     * - The country where the product was
     * manufactured.
     */
    country_of_origin?: string;
    /**
     * - Details of the user or entity that created
     * the product.
     */
    created_by?: any;
    /**
     * - Timestamp indicating when the product was created.
     */
    created_on?: string;
    /**
     * - The currency used for pricing the product.
     */
    currency?: string;
    /**
     * - Information related to custom orders,
     * including lead time and production details.
     */
    custom_order?: any;
    /**
     * - List of department IDs related to the product.
     */
    departments?: number[];
    /**
     * - Full description of the product.
     */
    description?: string;
    /**
     * - List of key highlights of the product.
     */
    highlights?: string[];
    /**
     * - HSN (Harmonized System Nomenclature) code for
     * tax classification.
     */
    hsn_code?: string;
    /**
     * - Unique identifier for the product in the system.
     */
    id?: string;
    /**
     * - Nature of the product image, for example,
     * 'standard' or 'custom'.
     */
    image_nature?: string;
    /**
     * - List of images associated with the product.
     */
    images?: Image[];
    /**
     * - Indicates whether the product is currently
     * active or not.
     */
    is_active?: boolean;
    /**
     * - Indicates whether the product depends on
     * other products for its availability or configuration.
     */
    is_dependent?: boolean;
    /**
     * - Indicates if the product has an expiration date.
     */
    is_expirable?: boolean;
    /**
     * - Indicates if the product does
     * not have an image associated.
     */
    is_image_less_product?: boolean;
    /**
     * - Specifies if the product is a physical item.
     */
    is_physical?: boolean;
    /**
     * - Indicates if the product is part of a set.
     */
    is_set?: boolean;
    item_code?: string;
    item_type?: string;
    /**
     * - List of category mappings for the product
     * (level 3 categories).
     */
    l3_mapping?: string[];
    /**
     * - Media objects associated with the product, such
     * as videos or additional images.
     */
    media?: Media[];
    /**
     * - Details of the user or entity that last
     * modified the product.
     */
    modified_by?: any;
    /**
     * - Timestamp indicating the last time the
     * product was modified.
     */
    modified_on?: string;
    /**
     * - Minimum Order Quantity (MOQ) details for the product.
     */
    moq?: any;
    /**
     * - Name of the product.
     */
    name?: string;
    net_quantity?: NetQuantityResponseSchema;
    /**
     * - Number of boxes required to pack the product.
     */
    no_of_boxes?: number;
    /**
     * - Status indicating if there are pending actions
     * or updates required for the product.
     */
    pending?: string;
    /**
     * - Primary color of the product.
     */
    primary_color?: string;
    /**
     * - Tags for grouping the product in categories.
     */
    product_group_tag?: string[];
    product_publish?: ProductPublished;
    return_config?: ReturnConfigResponseSchema;
    /**
     * - A brief description of the product.
     */
    short_description?: string;
    /**
     * - Link or identifier for the product's size guide.
     */
    size_guide?: string;
    /**
     * - List of available sizes for the product along
     * with pricing and identifier information.
     */
    sizes?: any[];
    /**
     * - URL slug for the product page.
     */
    slug?: string;
    /**
     * - The current stage of the product in the system
     * workflow (e.g., pending, verified).
     */
    stage?: string;
    /**
     * - Tags or keywords associated with the product
     * for search and categorization.
     */
    tags?: string[];
    tax_identifier?: TaxIdentifier;
    /**
     * - A short promotional tag or label for the product.
     */
    teaser_tag?: any;
    /**
     * - Tag representing the template used for
     * the product listing.
     */
    template_tag?: string;
    /**
     * - List of traders or sellers associated with the product.
     */
    trader?: Trader[];
    /**
     * - Unique identifier for the product.
     */
    uid?: number;
    /**
     * - Details about the product's variant
     * grouping (e.g., color or size variants).
     */
    variant_group?: any;
    /**
     * - Media associated with specific variants
     * of the product.
     */
    variant_media?: any;
    /**
     * - Details about the product's available variants.
     */
    variants?: any;
    verified_by?: VerifiedBy;
    /**
     * - Timestamp indicating when the product was verified.
     */
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
    /**
     * - Indicates whether the product can be
     * removed from the bundle.
     */
    allow_remove?: boolean;
    /**
     * - Specifies if the product is
     * automatically added to the cart.
     */
    auto_add_to_cart?: boolean;
    /**
     * - Indicates if the product is automatically
     * selected in the bundle.
     */
    auto_select?: boolean;
    /**
     * - Maximum quantity of the product that can be
     * added to the bundle.
     */
    max_quantity: number;
    /**
     * - Minimum quantity of the product that must
     * be added to the bundle.
     */
    min_quantity: number;
    /**
     * - Unique identifier for the product.
     */
    product_uid: number;
};
/** @returns {ProductBundleRequestSchema} */
declare function ProductBundleRequestSchema(): ProductBundleRequestSchema;
type ProductBundleRequestSchema = {
    /**
     * - Specifies the type of product bundle (e.g.,
     * 'single' or 'multi').
     */
    choice: string;
    /**
     * - The unique identifier of the company to
     * which the product bundle belongs.
     */
    company_id?: number;
    /**
     * - Information about the user who created the
     * product bundle, including user ID and username.
     */
    created_by?: any;
    /**
     * - The timestamp when the product bundle was created.
     */
    created_on?: string;
    /**
     * - Indicates whether the product bundle is
     * currently active.
     */
    is_active: boolean;
    /**
     * - URL of the logo associated with the product
     * bundle, if available. Can be null.
     */
    logo?: string;
    /**
     * - Additional metadata for the product bundle.
     */
    meta?: any;
    /**
     * - Information about the user who last
     * modified the product bundle, including user ID and username.
     */
    modified_by?: any;
    /**
     * - The timestamp when the product bundle was
     * last modified.
     */
    modified_on?: string;
    /**
     * - The name of the product bundle.
     */
    name: string;
    /**
     * - Pages where the product bundle is
     * visible (e.g., 'pdp' for product display page).
     */
    page_visibility?: string[];
    /**
     * - A list of products included in the
     * bundle. A maximum of 10 products can be added.
     */
    products: ProductBundleItem[];
    /**
     * - Indicates whether all products
     * in the bundle are assigned to the same store.
     */
    same_store_assignment?: boolean;
    /**
     * - A URL-friendly unique identifier for the product bundle.
     */
    slug: string;
};
/** @returns {ProductBundleUpdateRequestSchema} */
declare function ProductBundleUpdateRequestSchema(): ProductBundleUpdateRequestSchema;
type ProductBundleUpdateRequestSchema = {
    /**
     * - Specifies the type of product bundle (e.g.,
     * 'single' or 'multi').
     */
    choice: string;
    /**
     * - The unique identifier of the company to
     * which the product bundle belongs.
     */
    company_id?: number;
    /**
     * - Indicates whether the product bundle is
     * currently active.
     */
    is_active: boolean;
    /**
     * - URL of the logo associated with the product
     * bundle, if available. Can be null.
     */
    logo?: string;
    /**
     * - Additional metadata for the product bundle.
     */
    meta?: any;
    /**
     * - The name of the product bundle.
     */
    name: string;
    /**
     * - Pages where the product bundle is
     * visible (e.g., 'pdp' for product display page).
     */
    page_visibility?: string[];
    /**
     * - A list of products included in the
     * bundle. A maximum of 10 products can be added.
     */
    products: ProductBundleItem[];
    /**
     * - Indicates whether all products
     * in the bundle are assigned to the same store.
     */
    same_store_assignment?: boolean;
    /**
     * - A URL-friendly unique identifier for the product bundle.
     */
    slug: string;
};
/** @returns {ProductConfigurationDownloads} */
declare function ProductConfigurationDownloads(): ProductConfigurationDownloads;
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
/** @returns {ProductUpdateSchemaV2} */
declare function ProductUpdateSchemaV2(): ProductUpdateSchemaV2;
type ProductUpdateSchemaV2 = {
    /**
     * - Custom JSON data that can be used for
     * additional product properties.
     */
    _custom_json?: any;
    /**
     * - The action to perform wrt to the product (e.g.,
     * upsert, update, delete).
     */
    action?: string;
    /**
     * - Additional attributes related to the product.
     */
    attributes?: any;
    /**
     * - Unique identifier for the product's brand.
     */
    brand_uid: number;
    /**
     * - Job ID associated with bulk operations.
     */
    bulk_job_id?: string;
    /**
     * - The category to which the product belongs.
     */
    category_slug: string;
    /**
     * - Change request identifier for product updates.
     */
    change_request_id?: string;
    /**
     * - Unique identifier for the company associated
     * with the product.
     */
    company_id: number;
    /**
     * - The country where the product was
     * manufactured or sourced.
     */
    country_of_origin: string;
    /**
     * - The currency in which the product's price is listed.
     */
    currency: string;
    custom_order?: CustomOrder;
    /**
     * - List of department IDs associated with the product.
     */
    departments: number[];
    /**
     * - A detailed description of the product.
     */
    description?: string;
    /**
     * - Product highlights or key features.
     */
    highlights?: string[];
    /**
     * - Flag to indicate if the product is active.
     */
    is_active?: boolean;
    /**
     * - Flag to indicate if the product is
     * dependent on other products.
     */
    is_dependent?: boolean;
    /**
     * - Flag to indicate if the product
     * does not have associated images.
     */
    is_image_less_product?: boolean;
    /**
     * - Flag to indicate if the product is part of a set.
     */
    is_set?: boolean;
    /**
     * - Unique item code or SKU of the product.
     */
    item_code: string;
    /**
     * - Type of the product (e.g., standard, set,
     * composite, digital).
     */
    item_type: string;
    /**
     * - List of media URLs (images, videos) associated
     * with the product.
     */
    media?: Media[];
    /**
     * - Indicates if the product supports multiple sizes.
     */
    multi_size?: boolean;
    /**
     * - The name of the product.
     */
    name: string;
    net_quantity?: NetQuantity;
    /**
     * - Number of boxes required to package the product.
     */
    no_of_boxes?: number;
    /**
     * - Tags to group products together
     * for classification.
     */
    product_group_tag?: string[];
    product_publish?: ProductPublish;
    /**
     * - The role requesting the product operation
     * (admin or user).
     */
    requester?: string;
    return_config: ReturnConfig;
    /**
     * - A short description of the product,
     * up to 50 characters.
     */
    short_description?: string;
    /**
     * - Identifier for the product's size guide.
     */
    size_guide?: string;
    /**
     * - List of sizes available for the product.
     */
    sizes: any[];
    /**
     * - URL-friendly identifier for the product.
     */
    slug: string;
    /**
     * - List of tags associated with the product.
     */
    tags?: string[];
    tax_identifier: TaxIdentifier;
    teaser_tag?: TeaserTag;
    /**
     * - Template tag for the product, used for
     * classification.
     */
    template_tag: string;
    /**
     * - List of traders associated with the product.
     */
    trader: Trader[];
    /**
     * - Unique identifier for the product.
     */
    uid?: number;
    /**
     * - Variant group information for the product.
     */
    variant_group?: any;
    /**
     * - Media related to product variants.
     */
    variant_media?: any;
    /**
     * - Variants information for the product.
     */
    variants?: any;
};
/** @returns {ProductCreateSchemaV2} */
declare function ProductCreateSchemaV2(): ProductCreateSchemaV2;
type ProductCreateSchemaV2 = {
    /**
     * - Custom JSON data that can be used for
     * additional product properties.
     */
    _custom_json?: any;
    /**
     * - The action to perform wrt to the product (e.g.,
     * upsert, update, delete).
     */
    action?: string;
    /**
     * - Additional attributes related to the product.
     */
    attributes?: any;
    /**
     * - Unique identifier for the product's brand.
     */
    brand_uid: number;
    /**
     * - Job ID associated with bulk operations.
     */
    bulk_job_id?: string;
    /**
     * - The category to which the product belongs.
     */
    category_slug: string;
    /**
     * - Change request identifier for product updates.
     */
    change_request_id?: string;
    /**
     * - Unique identifier for the company associated
     * with the product.
     */
    company_id: number;
    /**
     * - The country where the product was
     * manufactured or sourced.
     */
    country_of_origin: string;
    /**
     * - The currency in which the product's price is listed.
     */
    currency: string;
    custom_order?: CustomOrder;
    /**
     * - List of department IDs associated with the product.
     */
    departments: number[];
    /**
     * - A detailed description of the product.
     */
    description?: string;
    /**
     * - Product highlights or key features.
     */
    highlights?: string[];
    /**
     * - Flag to indicate if the product is active.
     */
    is_active?: boolean;
    /**
     * - Flag to indicate if the product is
     * dependent on other products.
     */
    is_dependent?: boolean;
    /**
     * - Flag to indicate if the product
     * does not have associated images.
     */
    is_image_less_product?: boolean;
    /**
     * - Flag to indicate if the product is part of a set.
     */
    is_set?: boolean;
    /**
     * - Unique item code or SKU of the product.
     */
    item_code: string;
    /**
     * - Type of the product (e.g., standard, set,
     * composite, digital).
     */
    item_type: string;
    /**
     * - List of media URLs (images, videos) associated
     * with the product.
     */
    media?: Media[];
    /**
     * - Indicates if the product supports multiple sizes.
     */
    multi_size?: boolean;
    /**
     * - The name of the product.
     */
    name: string;
    net_quantity?: NetQuantity;
    /**
     * - Number of boxes required to package the product.
     */
    no_of_boxes?: number;
    /**
     * - Tags to group products together
     * for classification.
     */
    product_group_tag?: string[];
    product_publish?: ProductPublish;
    /**
     * - The role requesting the product operation
     * (admin or user).
     */
    requester?: string;
    return_config: ReturnConfig;
    /**
     * - A short description of the product,
     * up to 50 characters.
     */
    short_description?: string;
    /**
     * - Identifier for the product's size guide.
     */
    size_guide?: string;
    /**
     * - List of sizes available for the product.
     */
    sizes: any[];
    /**
     * - URL-friendly identifier for the product.
     */
    slug: string;
    /**
     * - List of tags associated with the product.
     */
    tags?: string[];
    tax_identifier: TaxIdentifier;
    teaser_tag?: TeaserTag;
    /**
     * - Template tag for the product, used for
     * classification.
     */
    template_tag: string;
    /**
     * - List of traders associated with the product.
     */
    trader: Trader[];
    /**
     * - Variant group information for the product.
     */
    variant_group?: any;
    /**
     * - Media related to product variants.
     */
    variant_media?: any;
    /**
     * - Variants information for the product.
     */
    variants?: any;
};
/** @returns {ProductDetail} */
declare function ProductDetail(): ProductDetail;
type ProductDetail = {
    /**
     * - Key-value pairs representing various
     * product attributes.
     */
    attributes?: any;
    brand?: ProductBrand;
    /**
     * - Detailed description of the product.
     */
    description?: string;
    /**
     * - Grouped
     * attributes of the product, such as product details and specifications.
     */
    grouped_attributes?: ProductDetailGroupedAttribute[];
    /**
     * - Indicates whether the product has variants.
     */
    has_variant?: boolean;
    /**
     * - Array of highlight features for the product.
     */
    highlights?: string[];
    /**
     * - The nature of the product's images.
     */
    image_nature?: string;
    /**
     * - Unique item code for the product.
     */
    item_code?: string;
    /**
     * - Type of the item.
     */
    item_type?: string;
    /**
     * - Array of media objects such as images and
     * videos for the product.
     */
    medias?: Media[];
    /**
     * - Name of the product.
     */
    name?: string;
    /**
     * - Date when the product was made
     * available online.
     */
    product_online_date?: string;
    /**
     * - Promotional metadata associated with the product.
     */
    promo_meta?: any;
    /**
     * - Average rating of the product.
     */
    rating?: number;
    /**
     * - Total number of ratings for the product.
     */
    rating_count?: number;
    /**
     * - A brief description of the product.
     */
    short_description?: string;
    /**
     * - Array of similar products.
     */
    similars?: string[];
    /**
     * - Unique slug for the product, used in URLs.
     */
    slug: string;
    /**
     * - Teaser tag information related to the product.
     */
    teaser_tag?: any;
    /**
     * - Array of product tryout options.
     */
    tryouts?: string[];
    /**
     * - The type of item.
     */
    type?: string;
    /**
     * - Unique identifier for the product.
     */
    uid?: number;
    /**
     * - Country where the product was manufactured.
     */
    country_of_origin?: string;
    /**
     * - Array of
     * categories the product belongs to.
     */
    categories?: ApplicationProductCategoryItem[];
    /**
     * - Array of tags associated with the product.
     */
    tags?: string[];
    /**
     * - Number of boxes required for packaging the product.
     */
    no_of_boxes?: number;
    custom_order?: CustomOrder;
};
/** @returns {ProductDetailAttribute} */
declare function ProductDetailAttribute(): ProductDetailAttribute;
type ProductDetailAttribute = {
    /**
     * - The name or key of the attribute.
     */
    key?: string;
    /**
     * - The type of the attribute.
     */
    type?: string;
    /**
     * - The value of the attribute corresponding to the key.
     */
    value?: string;
};
/** @returns {ProductDetailGroupedAttribute} */
declare function ProductDetailGroupedAttribute(): ProductDetailGroupedAttribute;
type ProductDetailGroupedAttribute = {
    /**
     * - An array of individual
     * product attributes belonging to this group.
     */
    details?: ProductDetailAttribute[];
    /**
     * - The title or category name for the grouped attributes.
     */
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
/** @returns {CollectionProductFilters} */
declare function CollectionProductFilters(): CollectionProductFilters;
type CollectionProductFilters = {
    key: ProductFiltersKey;
    /**
     * - A list of possible
     * values corresponding to the filter key. These values can be selected for
     * filtering products.
     */
    values: CollectionProductFiltersValue[];
};
/** @returns {ProductFilters} */
declare function ProductFilters(): ProductFilters;
type ProductFilters = {
    key: ProductFiltersKey;
    /**
     * - A list of possible values
     * corresponding to the filter key. These values can be selected for filtering
     * products.
     */
    values: ProductFiltersValue[];
};
/** @returns {GetQueryFiltersValuesResponseSchema} */
declare function GetQueryFiltersValuesResponseSchema(): GetQueryFiltersValuesResponseSchema;
type GetQueryFiltersValuesResponseSchema = {
    /**
     * - A list of filter values that
     * can be used for querying products.
     */
    values: ProductQueryFiltersValue[];
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
    /**
     * - The display name of the filter key, used for
     * showing on the UI.
     */
    display: string;
    /**
     * - The kind or type of filter, defining the category
     * of the filter.
     */
    kind?: string;
    /**
     * - A URL to the logo associated with the filter key.
     */
    logo?: string;
    /**
     * - The name of the filter key, used in the query.
     */
    name: string;
    /**
     * - A list of supported operators for this filter key.
     */
    operators?: string[];
};
/** @returns {ProductQueryFiltersValue} */
declare function ProductQueryFiltersValue(): ProductQueryFiltersValue;
type ProductQueryFiltersValue = {
    /**
     * - The human-readable name of the category to be displayed.
     */
    display?: string;
    /**
     * - The number of items or products associated with
     * this category.
     */
    count?: number;
    /**
     * - Indicates whether this category is
     * currently selected by the user.
     */
    is_selected?: boolean;
    /**
     * - The internal value or identifier representing
     * this category.
     */
    value?: string;
    /**
     * - URL of the logo image associated with the category.
     */
    logo?: string;
};
/** @returns {CollectionProductFiltersValue} */
declare function CollectionProductFiltersValue(): CollectionProductFiltersValue;
type CollectionProductFiltersValue = {
    /**
     * - Display name of the filter value.
     */
    display: string;
    /**
     * - The number of products that match this filter value.
     */
    count?: number;
    /**
     * - Indicates whether the filter value is
     * currently selected by the user.
     */
    is_selected: boolean;
    /**
     * - The actual value for the filter, used in filtering queries.
     */
    value: string;
    logo?: any;
};
/** @returns {ProductFiltersValue} */
declare function ProductFiltersValue(): ProductFiltersValue;
type ProductFiltersValue = {
    /**
     * - The number of products that match this filter value.
     */
    count?: number;
    /**
     * - The currency code used if the filter is
     * related to price.
     */
    currency_code?: string;
    /**
     * - The symbol of the currency used in
     * price-related filters.
     */
    currency_symbol?: string;
    /**
     * - The human-readable label for this filter value.
     */
    display: string;
    /**
     * - A format string that controls how the
     * value is displayed, commonly used for numeric or price ranges.
     */
    display_format?: string;
    /**
     * - Indicates whether this filter value is
     * currently selected by the user.
     */
    is_selected: boolean;
    /**
     * - The maximum value for a range filter (e.g., price range).
     */
    max?: number;
    /**
     * - The minimum value for a range filter (e.g., price range).
     */
    min?: number;
    /**
     * - The format string used in the query for
     * filtering by this value.
     */
    query_format?: string;
    /**
     * - The maximum value selected by the user in
     * a range filter.
     */
    selected_max?: number;
    /**
     * - The minimum value selected by the user in
     * a range filter.
     */
    selected_min?: number;
    /**
     * - The actual value of the filter.
     */
    value: any;
};
/** @returns {CollectionProductListingDetail} */
declare function CollectionProductListingDetail(): CollectionProductListingDetail;
type CollectionProductListingDetail = {
    /**
     * - Additional attributes for the product.
     */
    attributes?: any;
    brand?: ProductBrand;
    /**
     * - Color of the product.
     */
    color?: string;
    /**
     * - Detailed description of the product.
     */
    description?: string;
    /**
     * - Discount information for the product.
     */
    discount?: string;
    /**
     * - Grouped
     * attributes of the product.
     */
    grouped_attributes?: ProductDetailGroupedAttribute[];
    /**
     * - Indicates if the product has variants.
     */
    has_variant?: boolean;
    /**
     * - List of key highlights for the product.
     */
    highlights?: string[];
    /**
     * - Nature or type of image associated with
     * the product.
     */
    image_nature?: string;
    /**
     * - Unique code for the product item.
     */
    item_code?: string;
    /**
     * - Type of the product item, e.g., 'standard'
     * or 'custom'.
     */
    item_type?: string;
    /**
     * - List of media files (e.g., images) associated
     * with the product.
     */
    medias?: Media[];
    /**
     * - Name of the product.
     */
    name?: string;
    price?: ProductListingPrice;
    /**
     * - The date when the product became
     * available online.
     */
    product_online_date?: string;
    /**
     * - Promotional metadata for the product.
     */
    promo_meta?: any;
    /**
     * - Average rating for the product.
     */
    rating?: number;
    /**
     * - Number of users who have rated the product.
     */
    rating_count?: number;
    /**
     * - Indicates if the product is sellable.
     */
    sellable?: boolean;
    /**
     * - Short description of the product.
     */
    short_description?: string;
    /**
     * - List of similar products.
     */
    similars?: string[];
    /**
     * - Slug or URL-friendly identifier for the product.
     */
    slug: string;
    /**
     * - Teaser tag for the product.
     */
    teaser_tag?: any;
    /**
     * - List of tryouts or tests associated with the product.
     */
    tryouts?: string[];
    /**
     * - Type of the product, e.g., 'product' or 'variant'.
     */
    type?: string;
    /**
     * - Unique identifier for the product.
     */
    uid?: number;
    /**
     * - List of categories associated
     * with the product.
     */
    categories?: ProductCategory[];
    /**
     * - Custom metadata related to the product.
     */
    _custom_meta?: any[];
    action?: Action;
    /**
     * - Discount percentage on the product.
     */
    discount_percentage?: number;
    /**
     * - Indicates if the product is available for tryout.
     */
    is_tryout?: boolean;
    /**
     * - List of company IDs associated with
     * the product.
     */
    all_company_ids?: number[];
    /**
     * - Indicates if the product is a custom order.
     */
    is_custom_order?: boolean;
    /**
     * - List of collection IDs the product belongs to.
     */
    collections?: string[];
    /**
     * - Popularity score of the product.
     */
    popularity?: number;
    /**
     * - Unique identifier of the brand.
     */
    brand_uid?: number;
    /**
     * - Unique identifier of the category.
     */
    category_uid?: number;
    /**
     * - Verification status of the product.
     */
    verification_status?: string;
    /**
     * - Identifier for the sales channel.
     */
    channel_identifier?: string;
    /**
     * - Slug identifier for the category.
     */
    category_slug?: string;
    /**
     * - Size guide information for the product.
     */
    size_guide?: string;
    /**
     * - Timestamp when the product was created.
     */
    created_on?: string;
    /**
     * - Timestamp when the product was last modified.
     */
    modified_on?: string;
    /**
     * - List of L3 categories associated with
     * the product.
     */
    l3_categories?: number[];
    /**
     * - List of store IDs where the product is available.
     */
    store_ids?: number[];
    /**
     * - List of company IDs associated with the product.
     */
    company_ids?: number[];
    /**
     * - List of departments associated with the product.
     */
    departments?: number[];
    /**
     * - List of tags associated with the product.
     */
    tags?: string[];
    /**
     * - List of L3 category names.
     */
    l3_category_names?: string[];
    /**
     * - List of available sizes for the product.
     */
    sizes?: string[];
    /**
     * - Tags related to the product group.
     */
    product_group_tag?: string[];
    /**
     * - Indicates if the product is available in
     * multiple sizes.
     */
    multi_size?: boolean;
    /**
     * - Indicates if the product is giftable.
     */
    is_gift?: boolean;
    /**
     * - Indicates if the product is eligible for cash
     * on delivery.
     */
    is_cod?: boolean;
    /**
     * - Indicates if the product is dependent on
     * other products.
     */
    is_dependent?: boolean;
    /**
     * - Indicates if the product is currently available.
     */
    is_available?: boolean;
    net_quantity?: NetQuantity;
    seo?: ApplicationItemSEO;
    moq?: ApplicationItemMOQ;
    custom_order?: CustomOrder;
    /**
     * - Country of origin of the product.
     */
    country_of_origin?: string;
    /**
     * - Custom JSON data for additional configurations.
     */
    _custom_json?: any;
    /**
     * - Details of multiple categories
     * associated with the product.
     */
    multi_categories?: any[];
    /**
     * - Variant-specific media associated with
     * the product.
     */
    variant_media?: any;
    /**
     * - Group of variant-specific attributes.
     */
    variant_group?: any;
    /**
     * - Identifiers associated with the product.
     */
    identifiers?: string[];
    /**
     * - Number of boxes required for the product.
     */
    no_of_boxes?: number;
    /**
     * - Template tag associated with the product.
     */
    template_tag?: string;
};
/** @returns {ProductCategory} */
declare function ProductCategory(): ProductCategory;
type ProductCategory = {
    /**
     * - Unique identifier of the category.
     */
    id?: number;
    /**
     * - Unique identifier of the category UID.
     */
    uid?: number;
    /**
     * - Name of the category.
     */
    name?: string;
    /**
     * - Slug identifier for the category.
     */
    slug?: string;
    logo?: Logo;
    action?: Action;
    /**
     * - Custom JSON data for the category.
     */
    _custom_json?: any;
};
/** @returns {ApplicationCategoryAction} */
declare function ApplicationCategoryAction(): ApplicationCategoryAction;
type ApplicationCategoryAction = {
    page?: CategoryPageAction;
    /**
     * - The type of action to be performed, such as
     * navigation to a category or product.
     */
    type?: string;
};
/** @returns {ApplicationCategoryItem} */
declare function ApplicationCategoryItem(): ApplicationCategoryItem;
type ApplicationCategoryItem = {
    /**
     * - Custom JSON data related to the category.
     */
    _custom_json?: any;
    action?: ApplicationCategoryAction;
    /**
     * - The unique identifier for the category item.
     */
    id?: number;
    logo?: CategoryImage;
    /**
     * - The name of the category.
     */
    name?: string;
    /**
     * - A unique identifier for the category item.
     */
    uid?: number;
};
/** @returns {ApplicationProductMedia} */
declare function ApplicationProductMedia(): ApplicationProductMedia;
type ApplicationProductMedia = {
    /**
     * - Type of the media (e.g., image, video).
     */
    type?: string;
    /**
     * - URL of the media item.
     */
    url?: string;
};
/** @returns {ApplicationProductCategoryItem} */
declare function ApplicationProductCategoryItem(): ApplicationProductCategoryItem;
type ApplicationProductCategoryItem = {
    /**
     * - Unique identifier of the category.
     */
    id?: number;
    /**
     * - Unique identifier of the category (UID).
     */
    uid?: number;
    /**
     * - Name of the category.
     */
    name?: string;
    /**
     * - Slug or unique key for the category.
     */
    slug?: string;
    logo?: ApplicationProductMedia;
    action?: PageAction;
};
/** @returns {CategoryPageAction} */
declare function CategoryPageAction(): CategoryPageAction;
type CategoryPageAction = {
    query?: CategoryQuery;
    /**
     * - The type of page action, defining what should
     * happen when a category is selected.
     */
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
    /**
     * - The type of image, typically 'image'.
     */
    type?: string;
    /**
     * - The URL of the category image.
     */
    url?: string;
};
/** @returns {ProductListingDetail} */
declare function ProductListingDetail(): ProductListingDetail;
type ProductListingDetail = {
    /**
     * - Additional product attributes, which vary by product.
     */
    attributes?: any;
    brand?: ProductBrand;
    /**
     * - A detailed description of the product.
     */
    description?: string;
    /**
     * - Any discount information applicable to the product.
     */
    discount?: string;
    /**
     * - A list of
     * grouped product attributes.
     */
    grouped_attributes?: ProductDetailGroupedAttribute[];
    /**
     * - Indicates whether the product has
     * variants such as different sizes or colors.
     */
    has_variant?: boolean;
    /**
     * - Key highlights of the product.
     */
    highlights?: string[];
    /**
     * - The type of product image, such as
     * 'lifestyle' or 'catalog'.
     */
    image_nature?: string;
    /**
     * - The unique code or identifier for the product.
     */
    item_code?: string;
    /**
     * - The type of item'.
     */
    item_type?: string;
    /**
     * - A list of media (images or videos) associated
     * with the product.
     */
    medias?: Media[];
    /**
     * - The name of the product.
     */
    name?: string;
    price?: ProductListingPrice;
    /**
     * - The date and time when the product
     * was made available online.
     */
    product_online_date?: string;
    /**
     * - Promotional metadata associated with the product.
     */
    promo_meta?: any;
    /**
     * - The average rating of the product.
     */
    rating?: number;
    /**
     * - The number of ratings received for the product.
     */
    rating_count?: number;
    /**
     * - Indicates if the product is currently sellable.
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
     * - The unique URL-friendly identifier for the product.
     */
    slug?: string;
    /**
     * - Teaser tags for the product, if any.
     */
    teaser_tag?: any;
    /**
     * - A list of tryout options for the product.
     */
    tryouts?: string[];
    /**
     * - The type of product.
     */
    type?: string;
    /**
     * - The unique identifier for the product.
     */
    uid?: number;
    /**
     * - A list of categories
     * associated with the product.
     */
    categories?: ApplicationCategoryItem[];
    /**
     * - Custom metadata for the product.
     */
    _custom_meta?: string[];
    action?: PageAction;
    /**
     * - Indicates if the product is available for tryout.
     */
    is_tryout?: boolean;
    /**
     * - A list of company IDs that sell this product.
     */
    all_company_ids?: number[];
    /**
     * - Indicates if the product is
     * custom-made or requires a custom order.
     */
    is_custom_order?: boolean;
    /**
     * - A list of collections the product belongs to.
     */
    collections?: string[];
};
/** @returns {ActionObject} */
declare function ActionObject(): ActionObject;
type ActionObject = {
    /**
     * - The type of action to be performed, such as
     * navigating to a product or category.
     */
    type?: string;
    /**
     * - The query parameters associated with the action.
     */
    query?: any;
};
/** @returns {PageAction} */
declare function PageAction(): PageAction;
type PageAction = {
    page?: ActionObject;
    /**
     * - The type of page action to be performed.
     */
    type?: string;
};
/** @returns {ProductListingPrice} */
declare function ProductListingPrice(): ProductListingPrice;
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
    selling?: Price1;
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
/** @returns {ProductPublished} */
declare function ProductPublished(): ProductPublished;
type ProductPublished = {
    /**
     * - Indicates whether the product is part of a set.
     */
    is_set?: boolean;
    /**
     * - Timestamp when the product is
     * scheduled to go live online.
     */
    product_online_date?: number;
};
/** @returns {ProductReturnConfigSchema} */
declare function ProductReturnConfigSchema(): ProductReturnConfigSchema;
type ProductReturnConfigSchema = {
    /**
     * - Indicates if the product return is
     * allowed only at the same store where it was purchased.
     */
    on_same_store?: boolean;
    /**
     * - Unique identifier for the store where the
     * product can be returned.
     */
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
/** @returns {Identifier} */
declare function Identifier(): Identifier;
type Identifier = {
    /**
     * - Indicates if this is the primary identifier
     * for the size.
     */
    primary?: boolean;
    /**
     * - The GTIN (Global Trade Item Number) value
     * for the size.
     */
    gtin_value?: string;
    /**
     * - The type of GTIN (e.g., SKU code, UPC, EAN).
     */
    gtin_type?: string;
};
/** @returns {SizeDetails} */
declare function SizeDetails(): SizeDetails;
type SizeDetails = {
    /**
     * - Size identifier for the product (e.g., "S", "M", "L").
     */
    size?: string;
    /**
     * - The number of stores that have this size available.
     */
    store_count?: number;
    /**
     * - Quantity of the product that is
     * sellable in this size.
     */
    sellable_quantity?: number;
    /**
     * - Indicates if this size is currently sellable.
     */
    sellable?: boolean;
    /**
     * - The priority of the size for display purposes.
     */
    size_priority?: number;
    /**
     * - List of identifiers (e.g., SKU
     * codes, GTINs) associated with the size.
     */
    identifiers?: Identifier[];
    price?: any;
    /**
     * - Seller-specific identifier for this size.
     */
    seller_identifier?: string;
    /**
     * - Price transfer value for this size,
     * typically used in business transactions.
     */
    price_transfer?: number;
    /**
     * - Indicates if inventory is being
     * tracked for this size.
     */
    track_inventory?: boolean;
};
/** @returns {ProductSchemaV2} */
declare function ProductSchemaV2(): ProductSchemaV2;
type ProductSchemaV2 = {
    /**
     * - Custom JSON data specific to the product,
     * used for storing additional information.
     */
    _custom_json?: any;
    /**
     * - List of company IDs associated with
     * the product.
     */
    all_company_ids?: number[];
    /**
     * - List of unique product identifiers
     * such as SKU codes or GTINs.
     */
    all_identifiers?: string[];
    /**
     * - Details of all available sizes for the
     * product, including pricing and inventory information.
     */
    all_sizes?: any[];
    /**
     * - Additional attributes specific to the product.
     */
    attributes?: any;
    brand?: Brand;
    /**
     * - Unique identifier for the brand.
     */
    brand_uid?: number;
    /**
     * - Object representing the category to which the
     * product belongs.
     */
    category?: any;
    /**
     * - Slug representation of the product
     * category for SEO purposes.
     */
    category_slug?: string;
    /**
     * - Unique identifier for the product category.
     */
    category_uid?: number;
    /**
     * - Primary color of the product.
     */
    color?: string;
    /**
     * - Identifier for the company managing the product.
     */
    company_id?: number;
    /**
     * - Country where the product was
     * manufactured or sourced.
     */
    country_of_origin?: string;
    /**
     * - Object containing details about the user
     * who created the product.
     */
    created_by?: any;
    /**
     * - The currency in which the product is priced
     * (e.g., "INR").
     */
    currency?: string;
    /**
     * - Information about custom order options
     * for the product, including manufacturing time.
     */
    custom_order?: any;
    /**
     * - List of department IDs associated with
     * the product.
     */
    departments?: number[];
    /**
     * - Long description of the product.
     */
    description?: string;
    /**
     * - Key features or highlights of the product.
     */
    highlights?: string[];
    /**
     * - Harmonized System Nomenclature (HSN) code for
     * taxation purposes.
     */
    hsn_code?: string;
    /**
     * - Unique identifier of the product in the database.
     */
    id?: string;
    /**
     * - Describes the nature of the product
     * images (e.g., "standard").
     */
    image_nature?: string;
    /**
     * - List of image URLs associated with the product.
     */
    images?: Image[];
    /**
     * - Indicates whether the product is currently
     * active or not.
     */
    is_active?: boolean;
    /**
     * - Indicates if the product depends on
     * other products (e.g., part of a set).
     */
    is_dependent?: boolean;
    /**
     * - Indicates whether the product has an expiry date.
     */
    is_expirable?: boolean;
    /**
     * - Indicates if the product does
     * not have associated images.
     */
    is_image_less_product?: boolean;
    /**
     * - Indicates if the product is a physical
     * item (as opposed to a digital product).
     */
    is_physical?: boolean;
    /**
     * - Indicates if the product is a set of items
     * rather than a single item.
     */
    is_set?: boolean;
    /**
     * - Unique code used to identify the product,
     * often used internally or by sellers.
     */
    item_code?: string;
    /**
     * - Describes the type of product (e.g.,
     * "standard" or "set").
     */
    item_type?: string;
    /**
     * - Hierarchical mapping of the product to
     * categories (e.g., "electronics>qled_television").
     */
    l3_mapping?: string[];
    /**
     * - Media assets associated with the product, such
     * as images or videos.
     */
    media?: Media[];
    /**
     * - Object containing details about the user
     * who last modified the product.
     */
    modified_by?: any;
    /**
     * - The timestamp when the product was last modified.
     */
    modified_on?: string;
    /**
     * - Minimum order quantity details for the product.
     */
    moq?: any;
    /**
     * - Indicates if the product is available in
     * multiple sizes.
     */
    multi_size?: boolean;
    /**
     * - Name of the product.
     */
    name?: string;
    net_quantity?: NetQuantityResponseSchema;
    /**
     * - Number of boxes required to pack the product.
     */
    no_of_boxes?: number;
    /**
     * - Pending status related to product availability
     * or verification.
     */
    pending?: string;
    /**
     * - The primary color of the product.
     */
    primary_color?: string;
    /**
     * - Tags associated with the product grouping.
     */
    product_group_tag?: string[];
    product_publish?: ProductPublish;
    return_config?: ReturnConfigResponseSchema;
    /**
     * - Short description of the product,
     * typically used in product listings.
     */
    short_description?: string;
    /**
     * - Reference to the size guide for the
     * product, if applicable.
     */
    size_guide?: string;
    /**
     * - List of size details for the product.
     */
    sizes?: SizeDetails[];
    /**
     * - URL-friendly version of the product name for SEO purposes.
     */
    slug?: string;
    /**
     * - Current stage of the product (e.g., "pending",
     * "verified").
     */
    stage?: string;
    /**
     * - Tags associated with the product for
     * categorization and search purposes.
     */
    tags?: string[];
    tax_identifier?: TaxIdentifier;
    /**
     * - Teaser tags used for marketing the product
     * (e.g., "new arrival").
     */
    teaser_tag?: any;
    /**
     * - Product template tag (e.g., "television").
     */
    template_tag?: string;
    /**
     * - List of traders or sellers associated with the product.
     */
    trader?: Trader[];
    /**
     * - Unique identifier of the product.
     */
    uid?: number;
    /**
     * - Grouping of product variants.
     */
    variant_group?: any;
    /**
     * - Media information for product variants.
     */
    variant_media?: any;
    /**
     * - List of product variants.
     */
    variants?: any;
    verified_by?: VerifiedBy;
    /**
     * - Timestamp when the product was verified.
     */
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
    /**
     * - The unique identifier for the company that
     * manages the product.
     */
    company_id?: number;
    /**
     * - The unique identifier for the specific item
     * from which the size is being deleted.
     */
    item_id?: number;
    /**
     * - The size being deleted from the product.
     */
    size?: string;
};
/** @returns {ProductSizeDeleteResponseSchema} */
declare function ProductSizeDeleteResponseSchema(): ProductSizeDeleteResponseSchema;
type ProductSizeDeleteResponseSchema = {
    data?: ProductSizeDeleteDataResponseSchema;
    /**
     * - Indicates whether the size deletion operation
     * was successful.
     */
    success?: boolean;
};
/** @returns {CollectionProductSortOn} */
declare function CollectionProductSortOn(): CollectionProductSortOn;
type CollectionProductSortOn = {
    /**
     * - Indicates whether this sorting option is
     * currently applied.
     */
    is_selected?: boolean;
    /**
     * - Display name of the sorting option.
     */
    name?: string;
    /**
     * - Technical value of the sorting option used in queries.
     */
    value?: string;
    /**
     * - URL to the logo image representing the sorting option.
     */
    logo?: string;
};
/** @returns {ProductSortOn} */
declare function ProductSortOn(): ProductSortOn;
type ProductSortOn = {
    /**
     * - Indicates whether this sorting option is
     * currently selected.
     */
    is_selected?: boolean;
    /**
     * - The display name of the sorting option, used to
     * show on the UI.
     */
    name?: string;
    /**
     * - The value representing the sorting option.
     */
    value?: string;
};
/** @returns {ProductTagsViewResponseSchema} */
declare function ProductTagsViewResponseSchema(): ProductTagsViewResponseSchema;
type ProductTagsViewResponseSchema = {
    /**
     * - An array of product tag strings representing
     * various tags associated with the products.
     */
    items?: string[];
};
/** @returns {CreatedBy} */
declare function CreatedBy(): CreatedBy;
type CreatedBy = {
    /**
     * - Unique identifier for the user.
     */
    user_id?: string;
    /**
     * - Username of the user who created the product.
     */
    username?: string;
};
/** @returns {ModifiedBy} */
declare function ModifiedBy(): ModifiedBy;
type ModifiedBy = {
    /**
     * - Unique identifier for the user who modified the entity.
     */
    user_id?: string;
    /**
     * - Username of the user who last modified the entity.
     */
    username?: string;
};
/** @returns {ProductTemplate} */
declare function ProductTemplate(): ProductTemplate;
type ProductTemplate = {
    /**
     * - List of attributes associated with the
     * product template.
     */
    attributes?: string[];
    /**
     * - List of categories the product template belongs to.
     */
    categories?: string[];
    created_by?: CreatedBy;
    /**
     * - Timestamp of when the product template was created.
     */
    created_on?: string;
    /**
     * - List of departments the product template
     * is associated with.
     */
    departments?: string[];
    /**
     * - Detailed description of the product template.
     */
    description?: string;
    /**
     * - Indicates if the product template is
     * currently active.
     */
    is_active?: boolean;
    /**
     * - Indicates if the product template is archived.
     */
    is_archived?: boolean;
    /**
     * - Indicates if the product template is expirable.
     */
    is_expirable: boolean;
    /**
     * - Indicates if the product template
     * represents a physical product.
     */
    is_physical: boolean;
    /**
     * - URL of the product template logo.
     */
    logo?: string;
    modified_by?: ModifiedBy;
    /**
     * - Timestamp of when the product template was
     * last modified.
     */
    modified_on?: string;
    /**
     * - The name of the product template.
     */
    name?: string;
    /**
     * - Unique URL-friendly identifier for the product template.
     */
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
    created_by?: UserInfo;
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
    /**
     * - Unique identifier for the brand associated
     * with the product variant.
     */
    brand_uid?: number;
    /**
     * - Unique identifier for the category to
     * which the product variant belongs.
     */
    category_uid?: number;
    /**
     * - Code that uniquely identifies the specific
     * product variant.
     */
    item_code?: string;
    /**
     * - Array of media objects representing images,
     * videos, or other media associated with the product variant.
     */
    media?: Media[];
    /**
     * - Name of the product variant.
     */
    name?: string;
    /**
     * - Unique identifier for the product variant.
     */
    uid?: number;
};
/** @returns {ProductVariantsResponseSchema} */
declare function ProductVariantsResponseSchema(): ProductVariantsResponseSchema;
type ProductVariantsResponseSchema = {
    page?: Page;
    /**
     * - A list of product variants
     * returned in the response.
     */
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
/** @returns {InventoryReturnConfig} */
declare function InventoryReturnConfig(): InventoryReturnConfig;
type InventoryReturnConfig = {
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
    /**
     * - Indicates if the product is eligible for return.
     */
    returnable?: boolean;
    /**
     * - The duration within which the product can be returned.
     */
    time?: number;
    /**
     * - The time unit for the return duration, e.g.,
     * 'days' or 'hours'.
     */
    unit?: string;
};
/** @returns {Sitemap} */
declare function Sitemap(): Sitemap;
type Sitemap = {
    /**
     * - Indicates the priority of this URL relative
     * to other URLs on the site. A value between 0.0 and 1.0, where 1.0 is the
     * highest priority.
     */
    priority?: number;
    /**
     * - How frequently the content at the URL is
     * likely to change.
     */
    frequency?: string;
};
/** @returns {PageQuery} */
declare function PageQuery(): PageQuery;
type PageQuery = {
    /**
     * - List of brands being filtered by the query.
     */
    brand?: string[];
};
/** @returns {ApplicationCollectionItemSeoPage} */
declare function ApplicationCollectionItemSeoPage(): ApplicationCollectionItemSeoPage;
type ApplicationCollectionItemSeoPage = {
    /**
     * - Any parameters associated with the page.
     */
    params?: any;
    query?: PageQuery;
    /**
     * - The type of page.
     */
    type?: string;
    /**
     * - The URL for the page.
     */
    url?: string;
};
/** @returns {ApplicationCollectionItemSeoAction} */
declare function ApplicationCollectionItemSeoAction(): ApplicationCollectionItemSeoAction;
type ApplicationCollectionItemSeoAction = {
    /**
     * - The type of action, typically 'page'.
     */
    type?: string;
    page?: ApplicationCollectionItemSeoPage;
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
    action?: ApplicationItemSeoAction;
};
/** @returns {ApplicationCollectionItemSeoBreadcrumbs} */
declare function ApplicationCollectionItemSeoBreadcrumbs(): ApplicationCollectionItemSeoBreadcrumbs;
type ApplicationCollectionItemSeoBreadcrumbs = {
    /**
     * - The URL that this breadcrumb points to.
     */
    url?: string;
    action?: ApplicationCollectionItemSeoAction;
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
    /**
     * - The title or heading for the meta tags section.
     */
    title?: string;
    /**
     * - An array of meta tag
     * items, each consisting of key-value pairs.
     */
    items?: ApplicationItemSeoMetaTagItem[];
};
/** @returns {SizePromotionThreshold} */
declare function SizePromotionThreshold(): SizePromotionThreshold;
type SizePromotionThreshold = {
    /**
     * - The type of threshold that applies to
     * the size promotion, such as 'quantity' or 'value'.
     */
    threshold_type?: string;
    /**
     * - The value of the threshold required to
     * trigger the promotion, such as a minimum number of units.
     */
    threshold_value?: number;
};
/** @returns {SEOData} */
declare function SEOData(): SEOData;
type SEOData = {
    /**
     * - A brief description of the item, primarily
     * used for SEO purposes.
     */
    description?: string;
    /**
     * - The title of the item, primarily used for SEO
     * and displayed in search engine results.
     */
    title?: string;
    sitemap?: Sitemap;
    /**
     * - An ordered list
     * of links showing the hierarchy of the page, aiding navigation and SEO.
     */
    breadcrumbs?: ApplicationItemSeoBreadcrumbs[];
    /**
     * - A list of meta tags for the item, used
     * for SEO optimization.
     */
    meta_tags?: Metatags[];
    /**
     * - The canonical URL for the item,
     * indicating the preferred URL for search engines to avoid duplicate content.
     */
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
    /**
     * - Custom JSON object to store additional
     * data for the second-level child.
     */
    _custom_json?: any;
    action?: Action;
    banners?: ImageUrls;
    /**
     * - A list of third-level child elements
     * under the second-level child.
     */
    childs?: ThirdLevelChild[];
    /**
     * - Name of the second-level child element.
     */
    name?: string;
    /**
     * - Slug or URL-friendly identifier for the
     * second-level child element.
     */
    slug?: string;
    /**
     * - Unique identifier for the second-level child element.
     */
    uid?: number;
};
/** @returns {SellerPhoneNumber} */
declare function SellerPhoneNumber(): SellerPhoneNumber;
type SellerPhoneNumber = {
    /**
     * - The country code for the phone number,
     * typically represented as an integer (e.g., 91 for India).
     */
    country_code: number;
    /**
     * - The phone number associated with the seller,
     * without the country code.
     */
    number: string;
};
/** @returns {CollectionSeoDetail} */
declare function CollectionSeoDetail(): CollectionSeoDetail;
type CollectionSeoDetail = {
    /**
     * - SEO meta description for the item or
     * collection. This is used to describe the content for search engines.
     */
    description?: string;
    /**
     * - SEO meta title for the item or collection. It is
     * used as the title that appears in search results.
     */
    title?: string;
    sitemap?: Sitemap;
    /**
     * - List of
     * breadcrumbs for navigation, showing the hierarchy of pages leading to the
     * current page.
     */
    breadcrumbs?: ApplicationCollectionItemSeoBreadcrumbs[];
    /**
     * - An array of meta tags, each containing
     * key-value pairs for various SEO meta tags used to enhance search visibility.
     */
    meta_tags?: Metatags[];
    /**
     * - The canonical URL for the item or
     * collection, which tells search engines the preferred version of the URL to
     * avoid duplicate content issues.
     */
    canonical_url?: string;
};
/** @returns {SeoDetail} */
declare function SeoDetail(): SeoDetail;
type SeoDetail = {
    /**
     * - SEO meta description for the item or
     * collection. This is used to describe the content for search engines.
     */
    description?: string;
    /**
     * - SEO meta title for the item or collection. It is
     * used as the title that appears in search results.
     */
    title?: string;
    /**
     * - Information regarding the sitemap
     * configuration for the item or collection.
     */
    sitemap?: any;
    /**
     * - List of
     * breadcrumbs for navigation, showing the hierarchy of pages leading to the
     * current page.
     */
    breadcrumbs?: ApplicationItemSeoBreadcrumbs[];
    /**
     * - An array of meta tags, each containing
     * key-value pairs for various SEO meta tags used to enhance search visibility.
     */
    meta_tags?: Metatags[];
    /**
     * - The canonical URL for the item or
     * collection, which tells search engines the preferred version of the URL to
     * avoid duplicate content issues.
     */
    canonical_url?: string;
};
/** @returns {SetSize} */
declare function SetSize(): SetSize;
type SetSize = {
    /**
     * - Number of pieces in the set.
     */
    pieces: number;
    /**
     * - Size of the item in the set.
     */
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
    /**
     * - Indicates whether the size guide is currently active.
     */
    active?: boolean;
    /**
     * - The unique identifier for the brand
     * associated with the size guide.
     */
    brand_id?: number;
    /**
     * - The unique identifier for the company that
     * owns the size guide.
     */
    company_id?: number;
    created_by?: CreatedBySchema;
    /**
     * - The timestamp when the size guide was
     * created, in ISO 8601 format.
     */
    created_on?: string;
    /**
     * - The main content of the size guide, containing
     * details such as the size measurements, headers, and units.
     */
    guide?: any;
    /**
     * - The public identifier of the size guide.
     */
    id?: string;
    /**
     * - A URL pointing to an image associated with the size guide.
     */
    image?: string;
    modified_by?: ModifiedBySchema;
    /**
     * - The timestamp when the size guide was last
     * modified, in ISO 8601 format.
     */
    modified_on?: string;
    /**
     * - The name or title of the size guide.
     */
    name?: string;
    /**
     * - A short description or subtitle of the size guide.
     */
    subtitle?: string;
    /**
     * - A tag or label associated with the size guide,
     * used for categorization or reference.
     */
    tag?: string;
    /**
     * - The main title of the size guide.
     */
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
    /**
     * - The unique identifier of the store.
     */
    id: number;
};
/** @returns {SuccessResponseSchema} */
declare function SuccessResponseSchema(): SuccessResponseSchema;
type SuccessResponseSchema = {
    success?: boolean;
};
/** @returns {SuccessResponseObject} */
declare function SuccessResponseObject(): SuccessResponseObject;
type SuccessResponseObject = {
    /**
     * - Indicates whether the operation was successful or not.
     */
    success?: boolean;
    /**
     * - A unique identifier associated with the successful
     * operation.
     */
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
    /**
     * - Cess rate applicable for the tax slab.
     */
    cess?: number;
    /**
     * - The date from which the tax slab becomes effective.
     */
    effective_date: string;
    /**
     * - Applicable tax rate.
     */
    rate: number;
    /**
     * - Threshold value above which the tax slab applies.
     */
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
/** @returns {TemplateGlobalValidationData} */
declare function TemplateGlobalValidationData(): TemplateGlobalValidationData;
type TemplateGlobalValidationData = {
    global_validation?: GlobalValidation;
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
    /**
     * - List of product templates.
     */
    items?: ProductTemplate[];
    page?: Page;
};
/** @returns {TemplatesGlobalValidationResponseSchema} */
declare function TemplatesGlobalValidationResponseSchema(): TemplatesGlobalValidationResponseSchema;
type TemplatesGlobalValidationResponseSchema = {
    data?: TemplateGlobalValidationData;
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
    /**
     * - Custom JSON object to store additional
     * data for the third-level child.
     */
    _custom_json?: any;
    action?: Action;
    banners?: ImageUrls;
    /**
     * - A list of further nested child elements under
     * the third-level child (if applicable).
     */
    childs?: any[];
    /**
     * - Name of the third-level child element.
     */
    name?: string;
    /**
     * - Slug or URL-friendly identifier for the
     * third-level child element.
     */
    slug?: string;
    /**
     * - Unique identifier for the third-level child element.
     */
    uid?: number;
};
/** @returns {Trader} */
declare function Trader(): Trader;
type Trader = {
    /**
     * - List of addresses associated with the trader.
     */
    address?: string[];
    /**
     * - The name of the trader.
     */
    name: string;
    /**
     * - The role or type of the trader.
     */
    type?: string;
};
/** @returns {Trader1} */
declare function Trader1(): Trader1;
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
/** @returns {TraderResponseSchema} */
declare function TraderResponseSchema(): TraderResponseSchema;
type TraderResponseSchema = {
    address?: string[];
    name?: string;
    type?: string;
};
/** @returns {UpdateCollection} */
declare function UpdateCollection(): UpdateCollection;
type UpdateCollection = {
    /**
     * - Custom JSON object containing additional
     * metadata specific to the collection.
     */
    _custom_json?: any;
    /**
     * - Locale-based language settings for
     * the collection.
     */
    _locale_language?: any;
    _schedule?: CollectionSchedule;
    /**
     * - Indicates whether facets are allowed for
     * filtering items in the collection.
     */
    allow_facets?: boolean;
    /**
     * - Specifies whether sorting is allowed for
     * items within the collection.
     */
    allow_sort?: boolean;
    badge?: CollectionBadge;
    banners?: CollectionBanner;
    /**
     * - A brief description of the collection.
     */
    description?: string;
    /**
     * - Indicates if the collection is active and
     * visible to users.
     */
    is_active?: boolean;
    /**
     * - Specifies whether the collection is
     * visible to users on the platform.
     */
    is_visible?: boolean;
    logo?: CollectionImage;
    /**
     * - Additional metadata related to the collection.
     */
    meta?: any;
    modified_by?: UserInfo;
    /**
     * - The name of the collection.
     */
    name?: string;
    /**
     * - Priority level of the collection, determining
     * its order in listings.
     */
    priority?: number;
    /**
     * - Indicates whether the collection is
     * published and accessible to the public.
     */
    published?: boolean;
    /**
     * - List of query filters that define
     * which items are included in the collection.
     */
    query?: CollectionQuery[];
    seo?: CollectionSeoDetail;
    /**
     * - A unique identifier used to reference the
     * collection in URLs.
     */
    slug?: string;
    /**
     * - The field by which items in the collection are
     * sorted (e.g., popular, latest).
     */
    sort_on?: string;
    /**
     * - List of tags associated with the collection.
     */
    tags?: string[];
    /**
     * - The type of collection, either 'items' or 'query'.
     */
    type?: string;
    /**
     * - Keys for facets that are visible
     * to users for filtering items in the collection.
     */
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
/** @returns {RequestUserSchema} */
declare function RequestUserSchema(): RequestUserSchema;
type RequestUserSchema = {
    _id?: string;
    contact?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
/** @returns {ValidateIdentifier} */
declare function ValidateIdentifier(): ValidateIdentifier;
type ValidateIdentifier = {
    /**
     * - The type of the identifier (e.g., GTIN-12,
     * GTIN-13, UPC) used to categorize the format of the identifier.
     */
    gtin_type: string;
    /**
     * - The actual value of the identifier (e.g., the
     * numeric or alphanumeric code representing the product).
     */
    gtin_value: string;
    /**
     * - A flag indicating whether this identifier is
     * the primary one for the product.
     */
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
    /**
     * - Indicates whether the size guide is currently active.
     */
    active?: boolean;
    /**
     * - The unique identifier for the brand
     * associated with the size guide.
     */
    brand_id?: number;
    /**
     * - The unique identifier for the company that
     * owns the size guide.
     */
    company_id?: string;
    /**
     * - Information about the user who created the
     * size guide.
     */
    created_by?: any;
    /**
     * - The timestamp when the size guide was
     * created, in ISO 8601 format.
     */
    created_on?: string;
    /**
     * - A detailed HTML description of the size guide.
     */
    description?: string;
    guide?: Guide;
    /**
     * - The public identifier of the size guide.
     */
    id?: string;
    /**
     * - A URL pointing to an image associated with the size guide.
     */
    image?: string;
    /**
     * - Information about the user who last
     * modified the size guide.
     */
    modified_by?: any;
    /**
     * - The timestamp when the size guide was last
     * modified, in ISO 8601 format.
     */
    modified_on?: string;
    /**
     * - The name of the size guide.
     */
    name: string;
    /**
     * - A short description or subtitle of the size guide.
     */
    subtitle?: string;
    /**
     * - A tag or label associated with the size guide,
     * used for categorization or reference.
     */
    tag?: string;
    /**
     * - The main title of the size guide.
     */
    title: string;
};
/** @returns {VerifiedBy} */
declare function VerifiedBy(): VerifiedBy;
type VerifiedBy = {
    /**
     * - The unique identifier of the user who verified
     * the product.
     */
    user_id?: string;
    /**
     * - The username of the user who verified the product.
     */
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
/** @returns {InventoryWeightResponseSchema} */
declare function InventoryWeightResponseSchema(): InventoryWeightResponseSchema;
type InventoryWeightResponseSchema = {
    shipping?: number;
    unit?: string;
};
/** @returns {BulkInventoryJob} */
declare function BulkInventoryJob(): BulkInventoryJob;
type BulkInventoryJob = {
    /**
     * - Unique identifier of the company for which
     * the inventory update is being performed.
     */
    company_id: string;
    /**
     * - Type of inventory update file being processed,
     * either price or quantity.
     */
    file_type: string;
    /**
     * - URL of the uploaded file containing inventory
     * update data.
     */
    file_path: string;
    meta?: BulkMeta;
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
/** @returns {Price1} */
declare function Price1(): Price1;
type Price1 = {
    /**
     * - ISO 4217 currency codes
     */
    currency_code?: string;
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
/** @returns {NetQuantitySchema} */
declare function NetQuantitySchema(): NetQuantitySchema;
type NetQuantitySchema = {
    /**
     * - Specifies the unit of measurement for the net quantity.
     */
    unit?: string;
    /**
     * - The numerical value representing the net
     * quantity of the product.
     */
    value?: number;
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
 * Enum: PageType Used By: Catalog
 *
 * @returns {PageType}
 */
declare function PageType(): PageType;
type PageType = "about-us" | "addresses" | "blog" | "brands" | "cards" | "cart" | "categories" | "brand" | "category" | "collection" | "collections" | "custom" | "contact-us" | "external" | "faq" | "freshchat" | "home" | "notification-settings" | "orders" | "page" | "policy" | "product" | "product-request" | "products" | "profile" | "profile-order-shipment" | "profile-basic" | "profile-company" | "profile-emails" | "profile-phones" | "rate-us" | "refer-earn" | "settings" | "shared-cart" | "tnc" | "track-order" | "wishlist" | "sections" | "form" | "cart-delivery" | "cart-payment" | "cart-review" | "login" | "register" | "shipping-policy" | "return-policy" | "order-status" | "locate-us";
