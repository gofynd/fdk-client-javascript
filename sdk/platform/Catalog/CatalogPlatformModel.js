const Joi = require("joi");

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
 * @typedef Scores
 * @property {number} [popularity] - This score captures how trending and
 *   popular a product is for a specific sales channel. It evaluates recent
 *   customer interactions such as views, wishlist adds, add-to-carts, and
 *   orders, applying time-based decay so newer activity matters more. The
 *   blended score is ranked within the channel to reflect relative popularity.
 *   A higher score means the product is currently engaging more customers,
 *   while a lower score shows limited or declining interest.
 * @property {number} [availability] - This score measures how reliably a
 *   product is stocked for a specific sales channel. It compares the product’s
 *   current inventory with its highest observed inventory level, adjusted for
 *   how inventory is distributed across locations. A higher score means the
 *   product is readily available, while a lower score indicates limited stock
 *   or frequent stockouts. Products with no meaningful inventory history
 *   receive a default low score for interpretation.
 * @property {number} [conversion] - This score measures how effectively a
 *   product converts customer interest into actual orders for a specific sales
 *   channel. It considers product views, wishlist adds, add-to-carts, and
 *   completed orders to calculate a conversion rate. The rate is then ranked
 *   within the channel to give a normalized score. A higher score means the
 *   product turns interest into purchases more successfully, while a lower
 *   score indicates weaker conversion performance.
 * @property {number} [sold_quantity] - This score evaluates how many units of a
 *   product have been sold for a specific sales channel, compared to other
 *   products in the same channel. It calculates total quantities sold and
 *   converts them into a percentile rank. A higher score means the product
 *   sells in large volumes, while a lower score signals fewer units sold.
 *   Products without transactions are assigned a default low score.
 * @property {number} [depth] - This score evaluates how well a product covers
 *   different size options for a specific sales channel within its category,
 *   while also factoring in the inventory available for each size. It compares
 *   the product’s size variety and stock depth against the maximum observed
 *   within that category and channel. A higher score means the product offers a
 *   broader and better-stocked size range, while a lower score reflects fewer
 *   options or limited inventory depth.
 * @property {number} [discount] - This score reflects the level of discount a
 *   product offers for a specific sales channel, relative to others in the
 *   channel. It compares the product’s listed price (MRP) to its effective
 *   selling price (ESP) and ranks products by discount percentage. It also
 *   takes into account Discount Rules. A higher score indicates steeper
 *   discounts, while a lower score shows smaller or no discounts. Products
 *   without valid price data receive a default low score.
 * @property {number} [revenue] - This score measures how much revenue a product
 *   generates for a specific sales channel, relative to other products in that
 *   channel. It looks at the total value of items sold and assigns a percentile
 *   rank. A higher score indicates the product drives stronger sales revenue,
 *   while a lower score means it contributes less revenue compared to peers.
 *   Products with no sales activity receive a default low score.
 * @property {number} [cancelled] - This score measures the proportion of orders
 *   cancelled by the platform for a specific sales channel. A higher score
 *   indicates fewer cancellations, suggesting smoother fulfilment and better
 *   operational consistency. A lower score highlights products more prone to
 *   cancellations, which may result from inventory mismatches, processing
 *   issues, or operational inefficiencies.
 * @property {number} [returns] - This score measures the proportion of orders
 *   that were returned for a specific sales channel. It is designed so that a
 *   higher score indicates fewer returns relative to total orders, reflecting
 *   better product reliability and customer satisfaction. A lower score means
 *   the product experiences more returns, which could signal quality issues,
 *   mismatched expectations, or customer dissatisfaction.
 * @property {number} [catalogue] - This score evaluates the quality and
 *   completeness of a product’s catalogue content for a specific sales channel.
 *   It considers the presence of images, videos, and 3D models, along with the
 *   length of product descriptions. Balanced image counts, supportive media,
 *   and detailed descriptions contribute to a higher score. A higher score
 *   means the product is well-presented and informative, while a lower score
 *   indicates missing media or insufficient descriptions that may reduce
 *   customer confidence.
 * @property {number} [listing] - This score reflects how recently a product was
 *   listed for a specific sales channel. It uses the product’s listing date to
 *   calculate how many days have passed since it became available, then
 *   normalizes this against other products in the same channel. A higher score
 *   means the product is relatively new and fresh on the channel, while a lower
 *   score indicates it has been listed for a longer time or lacks valid listing
 *   information.
 */

/**
 * @typedef ApplicationItemMeta
 * @property {Object} [_custom_json] - Custom JSON data for the item
 * @property {MetaFields[]} [_custom_meta] - Custom meta fields for the item
 * @property {Object} [alt_text] - Alternative text for the item's images
 * @property {Scores} [scores]
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
 * @property {string[]} [tags]
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
 * @property {string} [mode] - Indicates whether delta or replace operation for inventory
 * @property {number} [total_quantity] - The total quantity of the inventory item.
 * @property {number} [damaged_quantity] - The damaged quantity of the inventory item.
 * @property {number} [not_available_quantity] - The not available quantity of
 *   the inventory item.
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
 * @property {number} [total_quantity] - The total quantity of the inventory
 *   item. Any one of total_quantity, damaged_quantity, not_available_quantity
 *   should be provided.
 * @property {number} [damaged_quantity] - The damaged quantity of the inventory
 *   item. Any one of total_quantity, damaged_quantity, not_available_quantity
 *   should be provided.
 * @property {number} [not_available_quantity] - The not available quantity of
 *   the inventory item. Any one of total_quantity, damaged_quantity,
 *   not_available_quantity should be provided.
 * @property {string} [mode] - Indicates whether delta or replace operation for inventory
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
 * @property {string[]} [tags] - Tags associated with the inventory update job.
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
 * @typedef FollowedProducts
 * @property {number[]} [item_ids]
 * @property {Page} [page]
 */

/**
 * @typedef FollowProduct
 * @property {string} [message] - A message indicating the result of the follow
 *   or unfollow operation.
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

class CatalogPlatformModel {
  /** @returns {Action} */
  static Action() {
    return Joi.object({
      type: Joi.string().allow(""),
      page: CatalogPlatformModel.ActionPage(),
      popup: CatalogPlatformModel.ActionPage(),
    });
  }

  /** @returns {ValidationErrors} */
  static ValidationErrors() {
    return Joi.object({
      errors: Joi.array()
        .items(CatalogPlatformModel.ValidationError())
        .required(),
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

  /** @returns {Scores} */
  static Scores() {
    return Joi.object({
      popularity: Joi.number().allow(null),
      availability: Joi.number().allow(null),
      conversion: Joi.number().allow(null),
      sold_quantity: Joi.number().allow(null),
      depth: Joi.number().allow(null),
      discount: Joi.number().allow(null),
      revenue: Joi.number().allow(null),
      cancelled: Joi.number().allow(null),
      returns: Joi.number().allow(null),
      catalogue: Joi.number().allow(null),
      listing: Joi.number().allow(null),
    });
  }

  /** @returns {ApplicationItemMeta} */
  static ApplicationItemMeta() {
    return Joi.object({
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      _custom_meta: Joi.array().items(CatalogPlatformModel.MetaFields()),
      alt_text: Joi.object().pattern(/\S/, Joi.any()),
      scores: CatalogPlatformModel.Scores(),
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
      verification_status: Joi.string().allow(""),
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
      net_quantity: CatalogPlatformModel.NetQuantitySchema(),
      custom_order: CatalogPlatformModel.CustomOrder(),
      country_of_origin: Joi.string().allow("").required(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      identifiers: Joi.array().items(Joi.string().allow("")),
      item_id: Joi.number(),
      _custom_meta: Joi.array().items(CatalogPlatformModel.CustomMeta()),
      discount_percentage: Joi.number(),
      no_of_boxes: Joi.number(),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
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
      name: Joi.string().allow("").required(),
      raw_key: Joi.string().allow(""),
      schema: CatalogPlatformModel.AttributeMaster().required(),
      suggestion: Joi.string().allow(""),
      synonyms: Joi.object().pattern(/\S/, Joi.any()),
      tags: Joi.array().items(Joi.string().allow("")),
      unit: Joi.string().allow(""),
      slug: Joi.string().allow("").required(),
      variant: Joi.boolean(),
    });
  }

  /** @returns {AttributeSchemaRange} */
  static AttributeSchemaRange() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
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
      logo: CatalogPlatformModel.BrandMedia(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {BrandListingResponseSchema} */
  static BrandListingResponseSchema() {
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

  /** @returns {ApplicationBrandListingSchema} */
  static ApplicationBrandListingSchema() {
    return Joi.object({
      items: Joi.array().items(
        CatalogPlatformModel.ApplicationBrandListingItemSchema()
      ),
      page: CatalogPlatformModel.Page().required(),
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
      modified_by: CatalogPlatformModel.CreatedBy(),
      modified_on: Joi.string().allow(""),
      app_id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      uid: Joi.number(),
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
      tags: Joi.array().items(Joi.string().allow("")),
      meta: CatalogPlatformModel.BulkMeta(),
    });
  }

  /** @returns {BulkMeta} */
  static BulkMeta() {
    return Joi.object({
      comment: Joi.string().allow(""),
      image_urls: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {BulkProductJob} */
  static BulkProductJob() {
    return Joi.object({
      company_id: Joi.string().allow(""),
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
      created_by: CatalogPlatformModel.UserInfo(),
      created_on: Joi.string().allow("").required(),
      custom_template_tag: Joi.string().allow(""),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      file_path: Joi.string().allow(""),
      file_type: Joi.string().allow(""),
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
      created_by: CatalogPlatformModel.UserInfo(),
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
      _custom_json: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      _schedule: CatalogPlatformModel.CollectionSchedule(),
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
      logo: CatalogPlatformModel.DepartmentMedia(),
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
      name: Joi.string().allow(""),
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

  /** @returns {InventoryDimensionResponseSchema} */
  static InventoryDimensionResponseSchema() {
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
      code: Joi.number(),
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
      action: Joi.string().allow(""),
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
      _id: Joi.array().items(Joi.string().allow("")),
      description: Joi.string().allow(""),
      details: CatalogPlatformModel.AttributeMasterDetails(),
      enabled_for_end_consumer: Joi.boolean(),
      filters: CatalogPlatformModel.AttributeMasterFilter(),
      is_nested: Joi.boolean(),
      logo: Joi.string().allow(""),
      meta: CatalogPlatformModel.AttributeMasterMeta(),
      name: Joi.string().allow(""),
      schema: CatalogPlatformModel.AttributeMaster(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {LatLong} */
  static LatLong() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      coordinates: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {ApplicationLocationAddressSchema} */
  static ApplicationLocationAddressSchema() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      pincode: Joi.number(),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      state: Joi.string().allow(""),
      lat_long: CatalogPlatformModel.LatLong(),
      country_code: Joi.string().allow(""),
      address_meta: Joi.object().pattern(/\S/, Joi.any()),
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
      _schedule: CatalogPlatformModel.CollectionSchedule(),
      action: CatalogPlatformModel.Action(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: CatalogPlatformModel.CollectionBadge(),
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
      _id: Joi.string().allow(""),
      published: Joi.boolean(),
      tags: Joi.array().items(Joi.string().allow("")),
      sort_on: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      _locale_language: Joi.object().pattern(/\S/, Joi.any()),
      seo: CatalogPlatformModel.SeoDetail(),
      is_visible: Joi.boolean(),
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
      created_by: CatalogPlatformModel.UserSchema(),
      created_on: Joi.string().allow(""),
      modified_by: CatalogPlatformModel.UserSchema(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      reject_reason: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      uid: Joi.number(),
      verified_by: CatalogPlatformModel.UserSchema(),
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
      data: Joi.array().items(CatalogPlatformModel.ConfigItem()).required(),
      page: CatalogPlatformModel.PageResponseType().required(),
    });
  }

  /** @returns {ConfigItem} */
  static ConfigItem() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      attributes: Joi.array().items(CatalogPlatformModel.AttributeConfig()),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_default: Joi.boolean(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      slug: Joi.string().allow(""),
      template_slugs: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {AttributeConfig} */
  static AttributeConfig() {
    return Joi.object({
      display_type: Joi.string().allow(""),
      is_active: Joi.boolean(),
      key: Joi.string().allow(""),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {GetDepartment} */
  static GetDepartment() {
    return Joi.object({
      created_by: CatalogPlatformModel.RequestUserSchema(),
      created_on: Joi.string().allow(""),
      is_active: Joi.boolean(),
      item_type: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      modified_by: CatalogPlatformModel.RequestUserSchema(),
      modified_on: Joi.string().allow(""),
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
      priority_order: Joi.number(),
      uid: Joi.number(),
    });
  }

  /** @returns {GetInventories} */
  static GetInventories() {
    return Joi.object({
      brand: CatalogPlatformModel.InventoryBrandMeta(),
      company: CatalogPlatformModel.InventoryCompanyMeta(),
      country_of_origin: Joi.string().allow(""),
      created_by: CatalogPlatformModel.RequestUserSchema(),
      date_meta: CatalogPlatformModel.DateMeta(),
      dimension: CatalogPlatformModel.InventoryDimensionResponseSchema(),
      expiration_date: Joi.string().allow(""),
      id: Joi.string().allow(""),
      identifier: CatalogPlatformModel.Identifier(),
      inventory_updated_on: Joi.string().allow(""),
      is_set: Joi.boolean(),
      item_id: Joi.number(),
      manufacturer: CatalogPlatformModel.InventoryManufacturerResponseSchema(),
      modified_by: CatalogPlatformModel.RequestUserSchema(),
      platforms: Joi.object().pattern(/\S/, Joi.any()),
      price: CatalogPlatformModel.PriceArticle(),
      quantities: CatalogPlatformModel.QuantitiesArticle(),
      return_config: CatalogPlatformModel.ReturnConfig(),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      store: CatalogPlatformModel.ArticleStoreResponseSchema(),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: CatalogPlatformModel.TaxIdentifier(),
      total_quantity: Joi.number(),
      trace_id: Joi.string().allow(""),
      track_inventory: Joi.boolean(),
      trader: Joi.array().items(CatalogPlatformModel.TraderResponseSchema()),
      uid: Joi.string().allow(""),
      weight: CatalogPlatformModel.InventoryWeightResponseSchema(),
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
      store_code: Joi.string().allow("").required(),
      company: CatalogPlatformModel.GetCompanySchema(),
      contact_numbers: Joi.array().items(
        CatalogPlatformModel.SellerPhoneNumber()
      ),
      created_by: CatalogPlatformModel.UserSchema(),
      created_on: Joi.string().allow(""),
      display_name: Joi.string().allow("").required(),
      documents: Joi.array().items(CatalogPlatformModel.Document()),
      gst_credentials: CatalogPlatformModel.InvoiceDetailsSchema(),
      integration_type: CatalogPlatformModel.LocationIntegrationType(),
      manager: CatalogPlatformModel.LocationManagerSchema(),
      modified_by: CatalogPlatformModel.UserSchema(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      phone_number: Joi.string().allow("").required(),
      product_return_config: CatalogPlatformModel.ProductReturnConfigSchema(),
      stage: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      timing: Joi.array().items(CatalogPlatformModel.LocationDayWiseSchema()),
      uid: Joi.number(),
      verified_by: CatalogPlatformModel.UserSchema(),
      verified_on: Joi.string().allow(""),
      warnings: Joi.object().pattern(/\S/, Joi.any()),
      company_id: Joi.number(),
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
      created_by: CatalogPlatformModel.CreatedBy(),
      created_on: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      logo: Joi.string().allow("").allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      modified_by: CatalogPlatformModel.ModifiedBy(),
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
      product_uid: Joi.number(),
      product_details: CatalogPlatformModel.ProductDetails(),
    });
  }

  /** @returns {ProductDetails} */
  static ProductDetails() {
    return Joi.object({
      slug: Joi.string().allow(""),
      quantity: Joi.number(),
      attributes: Joi.object().pattern(/\S/, Joi.any()),
      price: CatalogPlatformModel.Price(),
      images: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
      item_code: Joi.string().allow(""),
      identifier: Joi.object().pattern(/\S/, Joi.any()),
      sizes: Joi.array().items(Joi.string().allow("")),
      country_of_origin: Joi.string().allow(""),
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
      _id: Joi.string().allow(""),
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
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
      sort_on: Joi.array().items(CatalogPlatformModel.ProductSortOn()),
    });
  }

  /** @returns {GetQueryFiltersResponseSchema} */
  static GetQueryFiltersResponseSchema() {
    return Joi.object({
      filters: Joi.array().items(
        CatalogPlatformModel.CollectionProductFilters()
      ),
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
      sort_on: Joi.array().items(
        CatalogPlatformModel.CollectionProductSortOn()
      ),
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

  /** @returns {CreatedBySchema} */
  static CreatedBySchema() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),
      username: Joi.string().allow("").required(),
    });
  }

  /** @returns {ModifiedBySchema} */
  static ModifiedBySchema() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),
      username: Joi.string().allow("").required(),
    });
  }

  /** @returns {HSNDataInsertV2} */
  static HSNDataInsertV2() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),
      created_by: CatalogPlatformModel.CreatedBySchema(),
      modified_by: CatalogPlatformModel.ModifiedBySchema(),
      created_on: Joi.string().allow(""),
      description: Joi.string().allow("").required(),
      hsn_code: Joi.string().allow("").required(),
      hsn_code_id: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      reporting_hsn: Joi.any().required(),
      id: Joi.string().allow(""),
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
      stats: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {AddInventoryRequestPayload} */
  static AddInventoryRequestPayload() {
    return Joi.object({
      sizes: Joi.array().items(CatalogPlatformModel.InventoryResponseSchema()),
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
      mode: Joi.string().allow(""),
      total_quantity: Joi.number().allow(null),
      damaged_quantity: Joi.number().allow(null),
      not_available_quantity: Joi.number().allow(null),
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
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      modified_by: Joi.object().pattern(/\S/, Joi.any()),
      expiration_date: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {ApplicationInventorySellerIdentifierResponsePaginated} */
  static ApplicationInventorySellerIdentifierResponsePaginated() {
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
      return_config: CatalogPlatformModel.InventoryReturnConfig(),
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
      trader: Joi.array().items(CatalogPlatformModel.Trader()).allow(null, ""),
      uid: Joi.string().allow("").required(),
      weight: CatalogPlatformModel.WeightResponseSchema().required(),
    });
  }

  /** @returns {ApplicationInventorySellerResponseSchema} */
  static ApplicationInventorySellerResponseSchema() {
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
      return_config: CatalogPlatformModel.InventoryReturnConfig(),
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
      trader: Joi.array().items(CatalogPlatformModel.Trader()).allow(null, ""),
      uid: Joi.string().allow("").required(),
      weight: CatalogPlatformModel.WeightResponseSchema().required(),
      date_meta: CatalogPlatformModel.DateMeta(),
      platforms: Joi.object().pattern(/\S/, Joi.any()),
      price_marked: Joi.number(),
      price_effective: Joi.number(),
      currency: Joi.string().allow(""),
      price_selling: Joi.number(),
      discount_meta: Joi.object().pattern(/\S/, Joi.any()),
      discount_applied: Joi.object().pattern(/\S/, Joi.any()),
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
      success: Joi.boolean(),
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

  /** @returns {SizeGuideItem} */
  static SizeGuideItem() {
    return Joi.object({
      active: Joi.boolean(),
      brand_id: Joi.number(),
      company_id: Joi.number(),
      created_by: CatalogPlatformModel.CreatedBySchema(),
      created_on: Joi.string().allow(""),
      guide: CatalogPlatformModel.Guide(),
      id: Joi.string().allow(""),
      modified_by: CatalogPlatformModel.ModifiedBySchema(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      subtitle: Joi.string().allow(""),
      tag: Joi.string().allow(""),
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      image: Joi.string().allow(""),
    });
  }

  /** @returns {ListSizeGuide} */
  static ListSizeGuide() {
    return Joi.object({
      items: Joi.array().items(CatalogPlatformModel.SizeGuideItem()),
      page: CatalogPlatformModel.PageResponseSchema(),
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
      order: Joi.string().allow(""),
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

  /** @returns {InventoryManufacturerResponseSchema} */
  static InventoryManufacturerResponseSchema() {
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

  /** @returns {DepartmentMedia} */
  static DepartmentMedia() {
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

  /** @returns {LocationPriceRequestSchema} */
  static LocationPriceRequestSchema() {
    return Joi.object({
      price_effective: Joi.number().required(),
      price_marked: Joi.number().required(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {LocationQuantityRequestSchema} */
  static LocationQuantityRequestSchema() {
    return Joi.object({
      expiration_date: Joi.string().allow(""),
      total_quantity: Joi.number(),
      damaged_quantity: Joi.number(),
      not_available_quantity: Joi.number(),
      mode: Joi.string().allow(""),
    });
  }

  /** @returns {LocationPriceQuantitySuccessResponseSchema} */
  static LocationPriceQuantitySuccessResponseSchema() {
    return Joi.object({
      message: Joi.string().allow("").required(),
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
      page_size: Joi.number(),
    });
  }

  /** @returns {PageResponseSchema} */
  static PageResponseSchema() {
    return Joi.object({
      current: Joi.number(),
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

  /** @returns {ProductListingDetailPrice} */
  static ProductListingDetailPrice() {
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

  /** @returns {ProductUpdateSchemaV2} */
  static ProductUpdateSchemaV2() {
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
      highlights: Joi.array().items(Joi.string().allow("")).allow(null, ""),
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
      product_publish: CatalogPlatformModel.ProductPublish(),
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

  /** @returns {ProductCreateSchemaV2} */
  static ProductCreateSchemaV2() {
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
      highlights: Joi.array().items(Joi.string().allow("")).allow(null, ""),
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
      product_publish: CatalogPlatformModel.ProductPublish(),
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
      country_of_origin: Joi.string().allow(""),
      categories: Joi.array().items(
        CatalogPlatformModel.ApplicationProductCategoryItem()
      ),
      tags: Joi.array().items(Joi.string().allow("")),
      no_of_boxes: Joi.number(),
      custom_order: CatalogPlatformModel.CustomOrder(),
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

  /** @returns {CollectionProductFilters} */
  static CollectionProductFilters() {
    return Joi.object({
      key: CatalogPlatformModel.ProductFiltersKey().required(),
      values: Joi.array()
        .items(CatalogPlatformModel.CollectionProductFiltersValue())
        .required(),
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
        .items(CatalogPlatformModel.ProductQueryFiltersValue())
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

  /** @returns {ProductQueryFiltersValue} */
  static ProductQueryFiltersValue() {
    return Joi.object({
      display: Joi.string().allow(""),
      count: Joi.number(),
      is_selected: Joi.boolean(),
      value: Joi.string().allow(""),
      logo: Joi.string().allow(""),
    });
  }

  /** @returns {CollectionProductFiltersValue} */
  static CollectionProductFiltersValue() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      count: Joi.number(),
      is_selected: Joi.boolean().required(),
      value: Joi.string().allow("").required(),
      logo: Joi.any(),
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
      value: Joi.object().pattern(/\S/, Joi.any()).required(),
    });
  }

  /** @returns {CollectionProductListingDetail} */
  static CollectionProductListingDetail() {
    return Joi.object({
      attributes: Joi.object().pattern(/\S/, Joi.any()),
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
      uid: Joi.number(),
      categories: Joi.array().items(CatalogPlatformModel.ProductCategory()),
      _custom_meta: Joi.array().items(Joi.any()),
      action: CatalogPlatformModel.Action(),
      discount_percentage: Joi.number(),
      is_tryout: Joi.boolean(),
      all_company_ids: Joi.array().items(Joi.number()),
      is_custom_order: Joi.boolean(),
      collections: Joi.array().items(Joi.string().allow("")),
      popularity: Joi.number(),
      brand_uid: Joi.number(),
      category_uid: Joi.number(),
      verification_status: Joi.string().allow(""),
      channel_identifier: Joi.string().allow(""),
      category_slug: Joi.string().allow(""),
      size_guide: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      l3_categories: Joi.array().items(Joi.number()),
      store_ids: Joi.array().items(Joi.number()),
      company_ids: Joi.array().items(Joi.number()),
      departments: Joi.array().items(Joi.number()),
      tags: Joi.array().items(Joi.string().allow("")),
      l3_category_names: Joi.array().items(Joi.string().allow("")),
      sizes: Joi.array().items(Joi.string().allow("")),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      multi_size: Joi.boolean(),
      is_gift: Joi.boolean(),
      is_cod: Joi.boolean(),
      is_dependent: Joi.boolean(),
      is_available: Joi.boolean(),
      net_quantity: CatalogPlatformModel.NetQuantity(),
      seo: CatalogPlatformModel.ApplicationItemSEO(),
      moq: CatalogPlatformModel.ApplicationItemMOQ(),
      custom_order: CatalogPlatformModel.CustomOrder(),
      country_of_origin: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      multi_categories: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.any())
      ),
      variant_media: Joi.object().pattern(/\S/, Joi.any()),
      variant_group: Joi.object().pattern(/\S/, Joi.any()),
      identifiers: Joi.array().items(Joi.string().allow("")),
      no_of_boxes: Joi.number(),
      template_tag: Joi.string().allow(""),
    });
  }

  /** @returns {ProductCategory} */
  static ProductCategory() {
    return Joi.object({
      id: Joi.number(),
      uid: Joi.number(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      logo: CatalogPlatformModel.Logo(),
      action: CatalogPlatformModel.Action(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
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
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      action: CatalogPlatformModel.ApplicationCategoryAction(),
      id: Joi.number(),
      logo: CatalogPlatformModel.CategoryImage(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {ApplicationProductMedia} */
  static ApplicationProductMedia() {
    return Joi.object({
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationProductCategoryItem} */
  static ApplicationProductCategoryItem() {
    return Joi.object({
      id: Joi.number(),
      uid: Joi.number(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      logo: CatalogPlatformModel.ApplicationProductMedia(),
      action: CatalogPlatformModel.PageAction(),
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
      attributes: Joi.object().pattern(/\S/, Joi.any()),
      brand: CatalogPlatformModel.ProductBrand(),
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
      promo_meta: Joi.object().pattern(/\S/, Joi.any()),
      rating: Joi.number(),
      rating_count: Joi.number(),
      sellable: Joi.boolean(),
      short_description: Joi.string().allow(""),
      similars: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
      teaser_tag: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {ActionObject} */
  static ActionObject() {
    return Joi.object({
      type: Joi.string().allow(""),
      query: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {PageAction} */
  static PageAction() {
    return Joi.object({
      page: CatalogPlatformModel.ActionObject(),
      type: Joi.string().allow(""),
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

  /** @returns {Identifier} */
  static Identifier() {
    return Joi.object({
      primary: Joi.boolean(),
      gtin_value: Joi.string().allow(""),
      gtin_type: Joi.string().allow(""),
    });
  }

  /** @returns {SizeDetails} */
  static SizeDetails() {
    return Joi.object({
      size: Joi.string().allow(""),
      store_count: Joi.number(),
      sellable_quantity: Joi.number(),
      sellable: Joi.boolean(),
      size_priority: Joi.number(),
      identifiers: Joi.array().items(CatalogPlatformModel.Identifier()),
      price: Joi.any(),
      seller_identifier: Joi.string().allow(""),
      price_transfer: Joi.number(),
      track_inventory: Joi.boolean(),
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
      sizes: Joi.array().items(CatalogPlatformModel.SizeDetails()),
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

  /** @returns {CollectionProductSortOn} */
  static CollectionProductSortOn() {
    return Joi.object({
      is_selected: Joi.boolean(),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
      logo: Joi.string().allow(""),
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

  /** @returns {CreatedBy} */
  static CreatedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {ModifiedBy} */
  static ModifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {ProductTemplate} */
  static ProductTemplate() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")),
      categories: Joi.array().items(Joi.string().allow("")),
      created_by: CatalogPlatformModel.CreatedBy(),
      created_on: Joi.string().allow(""),
      departments: Joi.array().items(Joi.string().allow("")),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_archived: Joi.boolean(),
      is_expirable: Joi.boolean().required(),
      is_physical: Joi.boolean().required(),
      logo: Joi.string().allow(""),
      modified_by: CatalogPlatformModel.ModifiedBy(),
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
      created_by: CatalogPlatformModel.UserInfo(),
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

  /** @returns {InventoryReturnConfig} */
  static InventoryReturnConfig() {
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

  /** @returns {PageQuery} */
  static PageQuery() {
    return Joi.object({
      brand: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ApplicationCollectionItemSeoPage} */
  static ApplicationCollectionItemSeoPage() {
    return Joi.object({
      params: Joi.object().pattern(/\S/, Joi.any()),
      query: CatalogPlatformModel.PageQuery(),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationCollectionItemSeoAction} */
  static ApplicationCollectionItemSeoAction() {
    return Joi.object({
      type: Joi.string().allow(""),
      page: CatalogPlatformModel.ApplicationCollectionItemSeoPage(),
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
      action: CatalogPlatformModel.ApplicationItemSeoAction(),
    });
  }

  /** @returns {ApplicationCollectionItemSeoBreadcrumbs} */
  static ApplicationCollectionItemSeoBreadcrumbs() {
    return Joi.object({
      url: Joi.string().allow(""),
      action: CatalogPlatformModel.ApplicationCollectionItemSeoAction(),
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

  /** @returns {CollectionSeoDetail} */
  static CollectionSeoDetail() {
    return Joi.object({
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
      sitemap: CatalogPlatformModel.Sitemap(),
      breadcrumbs: Joi.array().items(
        CatalogPlatformModel.ApplicationCollectionItemSeoBreadcrumbs()
      ),
      meta_tags: Joi.array().items(CatalogPlatformModel.Metatags()),
      canonical_url: Joi.string().allow(""),
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
      created_by: CatalogPlatformModel.CreatedBySchema(),
      created_on: Joi.string().allow(""),
      guide: Joi.object().pattern(/\S/, Joi.any()),
      id: Joi.string().allow(""),
      image: Joi.string().allow(""),
      modified_by: CatalogPlatformModel.ModifiedBySchema(),
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

  /** @returns {SuccessResponseObject} */
  static SuccessResponseObject() {
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

  /** @returns {TemplateGlobalValidationData} */
  static TemplateGlobalValidationData() {
    return Joi.object({
      global_validation: CatalogPlatformModel.GlobalValidation(),
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
      items: Joi.array().items(CatalogPlatformModel.ProductTemplate()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {TemplatesGlobalValidationResponseSchema} */
  static TemplatesGlobalValidationResponseSchema() {
    return Joi.object({
      data: CatalogPlatformModel.TemplateGlobalValidationData(),
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

  /** @returns {TraderResponseSchema} */
  static TraderResponseSchema() {
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
      modified_by: CatalogPlatformModel.UserInfo(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      published: Joi.boolean(),
      query: Joi.array().items(CatalogPlatformModel.CollectionQuery()),
      seo: CatalogPlatformModel.CollectionSeoDetail(),
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

  /** @returns {UserSchema} */
  static UserSchema() {
    return Joi.object({
      contact: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {RequestUserSchema} */
  static RequestUserSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      contact: Joi.string().allow(""),
      uid: Joi.string().allow(""),
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
      company_id: Joi.string().allow(""),
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

  /** @returns {InventoryWeightResponseSchema} */
  static InventoryWeightResponseSchema() {
    return Joi.object({
      shipping: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }

  /** @returns {BulkInventoryJob} */
  static BulkInventoryJob() {
    return Joi.object({
      company_id: Joi.string().allow("").required(),
      file_type: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.string().allow("")),
      meta: CatalogPlatformModel.BulkMeta(),
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

  /** @returns {FollowedProducts} */
  static FollowedProducts() {
    return Joi.object({
      item_ids: Joi.array().items(Joi.number()),
      page: CatalogPlatformModel.Page(),
    });
  }

  /** @returns {FollowProduct} */
  static FollowProduct() {
    return Joi.object({
      message: Joi.string().allow(""),
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

  /** @returns {ValidationError} */
  static ValidationError() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      field: Joi.string().allow("").required(),
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

  /** @returns {NetQuantitySchema} */
  static NetQuantitySchema() {
    return Joi.object({
      unit: Joi.string().allow(""),
      value: Joi.number(),
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
