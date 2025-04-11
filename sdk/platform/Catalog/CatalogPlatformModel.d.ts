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
 * @typedef GetQueryFiltersKeysResponseSchema
 * @property {ProductFiltersKeysOnly[]} [filters] - An array of available filter
 *   keys for querying products.
 * @property {Object} [operators] - A map of available operators that can be
 *   used for querying, where the key is the operator type and the value is a string.
 * @property {ProductSortOn[]} [sort_on] - An array of sorting options available
 *   for the products.
 */
/**
 * @typedef GetQueryFiltersValuesResponseSchema
 * @property {ProductQueryFiltersValue[]} values - A list of filter values that
 *   can be used for querying products.
 * @property {Page} page
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
 * @typedef MerchandiseQueryResponseSchema
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
 * @property {MerchandisingRuleQuery} [query]
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
 * @typedef PinItemRequestSchema
 * @property {string} action
 * @property {string} item_id
 * @property {number} position
 */
/**
 * @typedef PinRequestSchema
 * @property {PinItemRequestSchema[]} [action_value]
 */
/**
 * @typedef PinResponseSchema
 * @property {PinItem[]} [data]
 */
/**
 * @typedef HideAttribute
 * @property {string} name
 * @property {number} uid
 */
/**
 * @typedef HideAttributeRequestSchema
 * @property {string} [action]
 * @property {number} [item_id]
 */
/**
 * @typedef HideResponseSchema
 * @property {HideAttribute[]} [data]
 */
/**
 * @typedef HideRequestSchema
 * @property {HideAttributeRequestSchema[]} [action_value]
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
 * @property {ProductReturnConfigBaseSchema} return_config
 */
/**
 * @typedef ReturnConfigResponseSchema
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
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
 * @typedef AppConfigurationsFilterResponseSchema
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
 * @property {ApplicationItemMOQ} [moq]
 * @property {ApplicationItemSEO} [seo]
 * @property {SizePromotionThreshold} [size_promotion_threshold]
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
 * @property {OperatorsResponseSchema} [operators]
 * @property {Page} page
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef OperatorsResponseSchema
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
 * @typedef AppReturnConfigResponseSchema
 * @property {UserInfo} [created_by]
 * @property {UserInfo} [modified_by]
 * @property {string} [app_id] - Channel identifier
 * @property {number} [category_count] - Count of L3 category return config set
 *   for application
 * @property {number} [company_id] - Unique identifer of company
 * @property {string} [modified_on] - Modification date
 * @property {string} [return_config_level] - Configuration level of return
 *   window category|product|no-return
 */
/**
 * @typedef ArticleStoreResponseSchema
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [store_type]
 * @property {number} [uid]
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
 * @property {string[]} [ddepends_on]
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
 * @property {string} [name] - Name of the attribute.
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
 * @property {string} [name] - The name of the brand.
 * @property {number} [uid] - Unique identifier for the brand.
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
 * @property {UserInfo} [created_by]
 * @property {string} [created_on] - Timestamp when the category was created.
 * @property {UserInfo} [modified_by]
 * @property {string} [modified_on] - Timestamp when the category was last modified.
 * @property {string} [app_id] - Application ID associated with the category.
 * @property {boolean} [is_active] - Indicates whether the category is active.
 * @property {number} [uid] - Unique identifier of the category.
 */
/**
 * @typedef ApplicationBrandListingSchema
 * @property {ApplicationBrandListingItemSchema[]} [items]
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
 */
/**
 * @typedef BrandListingResponseSchema
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */
/**
 * @typedef BrandMeta
 * @property {number} id - Unique identifier for the brand.
 * @property {string} name - Name of the brand.
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
 * @property {number} [company_id] - The unique identifier of the company
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
 * @typedef BulkProductRequestSchema
 * @property {string} batch_id
 * @property {number} company_id
 * @property {Object[]} data
 * @property {string} template_tag
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
 * @property {CategoryMapping} [marketplaces]
 * @property {Media1} [media]
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
 * @property {DepartmentCategoryTree[]} [data]
 * @property {DepartmentIdentifier[]} [departments]
 */
/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [facebook]
 * @property {CategoryMappingValues} [google]
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
 * @typedef CollectionBannerResponseSchema
 * @property {CollectionImageResponseSchema} [landscape]
 * @property {CollectionImageResponseSchema} [portrait]
 */
/**
 * @typedef CollectionCreateResponseSchema
 * @property {CollectionBadge} [badge]
 * @property {CollectionBannerResponseSchema} [banners]
 * @property {Object} [cron]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {CollectionImageResponseSchema} [logo]
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
 * @typedef CollectionImage
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {string} [type]
 */
/**
 * @typedef CollectionImageResponseSchema
 * @property {string} [type]
 * @property {string} [url]
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
 * @property {number} id - Unique identifier for the company.
 */
/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */
/**
 * @typedef ConfigErrorResponseSchema
 * @property {string} [code]
 * @property {Object} [errors]
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
 * @typedef CreateAutocompleteWordsResponseSchema
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
 * @typedef GetSearchRerankDetailResponseSchema
 * @property {RerankingBoostItems} [ranking]
 * @property {boolean} [is_active]
 * @property {UserInfo} [modified_by]
 * @property {UserInfo} [created_by]
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
 * @typedef GetSearchRerankItemResponseSchema
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {UserInfo} [modified_by]
 * @property {RerankingBoostItems} [ranking]
 * @property {UserInfo} [created_by]
 * @property {boolean} [is_active]
 * @property {string} [id]
 */
/**
 * @typedef GetSearchRerankResponseSchema
 * @property {GetSearchRerankItemResponseSchema[]} [items]
 * @property {PageResponseSchema} [page]
 */
/**
 * @typedef CreateSearchRerankResponseSchema
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {RerankingBoostItems} [ranking]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {UserInfo} [created_by]
 * @property {string} [modified_on]
 * @property {UserInfo} [modified_by]
 */
/**
 * @typedef UpdateSearchRerankResponseSchema
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {RerankingBoostItems} [ranking]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {UserInfo} [created_by]
 * @property {string} [modified_on]
 * @property {UserInfo} [modified_by]
 */
/**
 * @typedef UpdateSearchRerankRequestSchema
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {string} [application_id]
 * @property {RerankingBoostItems} [ranking]
 */
/**
 * @typedef CreateSearchRerankRequestSchema
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {string} [application_id]
 * @property {RerankingBoostItems} [ranking]
 */
/**
 * @typedef CreateSearchConfigurationRequestSchema
 * @property {string} application_id - The application id where custom search
 *   configuration is set
 * @property {number} company_id - The company id where custom search configuration is set
 * @property {UserSchema} [created_by]
 * @property {string} [created_on] - The date and time when the search
 *   configuration was created.
 * @property {boolean} [is_proximity_enabled] - Flag indicating if proximity
 *   search is enabled for this attribute.
 * @property {UserSchema} [modified_by]
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
 * @property {string} [app_id]
 * @property {number} [company_id]
 * @property {string} return_config_level - Return configurtion Level
 *   category|product|no-return
 */
/**
 * @typedef CrossSellingResponseSchema
 * @property {number} [articles]
 * @property {number} [products]
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
 * @typedef DeleteSearchRerankConfigurationResponseSchema
 * @property {boolean} [success]
 * @property {string} [message]
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
 * @property {string} [department]
 * @property {CategoryItems[]} [items]
 */
/**
 * @typedef DepartmentIdentifier
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef DepartmentResponseSchema
 * @property {Department[]} [items]
 */
/**
 * @typedef ValidationFailedResponseSchema
 * @property {string} [message] - Response message for failed validation
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
 * @property {string} [app_id]
 * @property {string} [config_id]
 * @property {string} [config_type]
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
 * @typedef CategoryErrorResponseSchema
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
 * @property {string} [created_on] - It is Date and time when the attribute was created.
 * @property {string} [modified_on] - It is Date and time when the attribute was modified.
 * @property {UserInfo} [created_by]
 * @property {UserInfo} [modified_by]
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
 * @property {number} [pincode] - The postal code or ZIP code associated with the address.
 * @property {string} [state] - The state or region where the address is located.
 */
/**
 * @typedef GetAllSizes
 * @property {AllSizes[]} [all_sizes]
 */
/**
 * @typedef FilterResponseSchema
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
 * @typedef GetAutocompleteWordsResponseSchema
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
 * @property {MetaDataListingResponseSchema} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */
/**
 * @typedef GetCollectionDetailNest
 * @property {CollectionSchedule} [_schedule]
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
 * @typedef GetCollectionListingResponseSchema
 * @property {CollectionListingFilter} [filters]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetCompanySchema
 * @property {GetAddressSchema[]} [addresses]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {UserSchema} [created_by]
 * @property {string} [created_on]
 * @property {UserSchema} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {UserSchema} [verified_by]
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
 * @typedef GetListingConfigResponseSchema
 * @property {ListingDataType[]} [data]
 * @property {PageResponseType} [page]
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
 * @property {ApplicationItemSEO} [seo]
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
 * @property {UserSchema} [created_by]
 * @property {string} [created_on] - Timestamp of when the department was created.
 * @property {boolean} [is_active] - Indicates whether the department is currently active.
 * @property {string} [item_type]
 * @property {string} [logo] - URL of the department's logo.
 * @property {UserSchema} [modified_by]
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
 * @property {BrandMeta1} [brand]
 * @property {CompanyMeta1} [company]
 * @property {string} [country_of_origin] - Country where the product was manufactured.
 * @property {UserSchema} [created_by]
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
 * @property {UserSchema} [modified_by]
 * @property {Object} [platforms] - Indicates platform availability status for
 *   the product.
 * @property {PriceArticle} [price]
 * @property {QuantitiesArticle} [quantities]
 * @property {ReturnConfig2} [return_config]
 * @property {string} [seller_identifier] - Seller's identifier for the product.
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
 * @typedef InventoryWeightResponseSchema
 * @property {number} [shipping]
 * @property {string} [unit]
 */
/**
 * @typedef TraderResponseSchema
 * @property {string[]} [address]
 * @property {string} [name]
 * @property {string} [type]
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
 * @typedef GetProductBundleCreateResponseSchema
 * @property {UserSchema} [created_by]
 * @property {UserSchema} [modified_by]
 * @property {string} choice - Specifies the type of bundle, e.g., single or multi.
 * @property {number} [company_id] - Unique identifier for the company that owns
 *   the product bundle.
 * @property {string} [created_on] - Timestamp when the product bundle was created.
 * @property {string} [id] - Unique identifier for the product bundle.
 * @property {boolean} is_active - Indicates if the product bundle is active or not.
 * @property {string} [logo] - URL of the product bundle's logo, or null if not available.
 * @property {Object} [meta] - Additional metadata about the product bundle.
 * @property {string} [modified_on] - Timestamp when the product bundle was last modified.
 * @property {string} name - Name of the product bundle.
 * @property {string[]} [page_visibility] - Visibility settings for the product
 *   bundle across different pages.
 * @property {ProductBundleItem[]} products - List of products that are part of
 *   the product bundle.
 * @property {boolean} [same_store_assignment] - Indicates whether all products
 *   in the bundle belong to the same store.
 * @property {string} slug - Unique slug used to identify the product bundle in URLs.
 * @property {boolean} allow_remove
 * @property {boolean} auto_add_to_cart
 * @property {boolean} auto_select
 * @property {boolean} prefer_single_shipment
 * @property {boolean} allow_individual_cancel
 * @property {boolean} allow_individual_return
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
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {boolean} [prefer_single_shipment]
 * @property {boolean} [allow_individual_cancel]
 * @property {boolean} [allow_individual_return]
 */
/**
 * @typedef GetProducts
 * @property {number} [max_quantity] - The maximum quantity of the product that
 *   can be added to the bundle.
 * @property {number} [min_quantity] - The minimum quantity of the product that
 *   must be added to the bundle.
 * @property {Price} [price]
 * @property {LimitedProductData} [product_details]
 * @property {number} [product_uid] - Unique identifier for the product.
 * @property {Size[]} [sizes]
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
 * @property {Object} [cron]
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
 * @typedef GetQueryFiltersResponseSchema
 * @property {CollectionProductFilters[]} [filters] - An array of filters to be
 *   applied on products while querying.
 * @property {Object} [operators] - A map of operators available for product
 *   queries, where the key is the operator type and the value is a string.
 * @property {CollectionProductSortOn[]} [sort_on] - An array of sorting options
 *   to be applied to product queries.
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
 * @typedef CollectionProductFilters
 * @property {ProductFiltersKey} [key]
 * @property {CollectionProductFiltersValue[]} [values] - A list of possible
 *   values corresponding to the filter key. These values can be selected for
 *   filtering products.
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
 * @typedef GetCollectionItemsResponseSchema
 * @property {ApplicationProductsSchema[]} [items] - An array of products that
 *   belong to the collection.
 * @property {ProductSortOn[]} [sort_on]
 * @property {Page} [page]
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
 * @property {string[]} value
 */
/**
 * @typedef GetSearchConfigurationResponseSchema
 * @property {string} [_id] - The id of the search configuration.
 * @property {string} application_id - The application id where custom search
 *   configuration is set
 * @property {number} company_id - The company id where custom search configuration is set
 * @property {UserSchema} [created_by]
 * @property {string} [created_on] - The date and time when the search
 *   configuration was created.
 * @property {boolean} [is_proximity_enabled] - Flag indicating if proximity
 *   search is enabled for this attribute.
 * @property {UserSchema} [modified_by]
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
 * @property {UserInfo} [created_by]
 * @property {UserInfo} [modified_by]
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
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponseSchema} [page]
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
 * @typedef InventoryBulkRequestSchema
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
 * @typedef InventoryCreateRequestSchema
 * @property {string[]} [data] - The list of attributes that you want to extract
 *   in the export job.
 * @property {InventoryExportFilter} filters
 * @property {string[]} [notification_emails] - The list of the emails to be
 *   notified after the completion of the job.
 * @property {string} [type] - The type of file that needs to be exported.
 */
/**
 * @typedef InventoryExportFilter
 * @property {number[]} [brand_ids] - The list of the brand ids that needs to be exported.
 * @property {string} [from_date] - The modified on date from which the data
 *   needs to be exported.
 * @property {InventoryExportQuantityFilter} [quantity]
 * @property {number[]} store_ids - The list of the store ids that needs to be exported.
 * @property {string} [to_date] - The modified on date till when the data needs
 *   to be exported.
 */
/**
 * @typedef InventoryExportJobResponseSchema
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
 * @property {UserInfo} [created_by]
 * @property {string} [_id]
 * @property {string} [url]
 * @property {string} [trigger_on]
 * @property {number[]} [brand]
 * @property {number[]} [store]
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
 * @property {UserInfo} [created_by]
 * @property {string} [id]
 */
/**
 * @typedef InventoryExportJobListResponseSchema
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
 * @typedef ExportPatchRequestSchema
 * @property {string[]} [notification_emails]
 * @property {string} [status]
 */
/**
 * @typedef InventoryExportRequestSchema
 * @property {number[]} [brand]
 * @property {number[]} [store]
 * @property {string} [type]
 */
/**
 * @typedef EditInventoryDataDownloadsResponseSchema
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
 * @typedef EditInventoryDownloadsResponseSchema
 * @property {EditInventoryDataDownloadsResponseSchema} [data]
 */
/**
 * @typedef InventoryExportFiltersResponseSchema
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef Stats
 * @property {number} [total]
 */
/**
 * @typedef InventoryExportResponseSchema
 * @property {UserInfo} [created_by]
 * @property {string} [created_on] - Creation datetime of the job
 * @property {InventoryExportFiltersResponseSchema} [filters]
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
 * @typedef InventoryV2RequestSchema
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
 * @typedef InventoryResponseSchema
 * @property {string} [currency] - The currency in which the item is priced, e.g., 'INR'.
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
 * @property {string} [uid] - A unique identifier combining store ID and seller
 *   identifier.
 * @property {string} [expiration_date] - The expiration date of the item, if
 *   applicable, in ISO 8601 format.
 * @property {string[]} [tags] - An array of tags or labels associated with the
 *   item for categorization or search purposes.
 * @property {InventoryStore} [store]
 * @property {UserInfo} [created_by]
 * @property {UserInfo} [modified_by]
 * @property {InventoryIdentifier[]} [identifiers]
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
 * @typedef ApplicationInventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponseSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef InventorySellerResponseSchema
 * @property {Object} [_custom_json] - Custom JSON data for the article.
 * @property {string} [added_on_store] - The date and time when the article was
 *   added to the store.
 * @property {BrandMeta} brand
 * @property {CompanyMeta} company
 * @property {string} country_of_origin - The country of origin of the article.
 * @property {string} [created_by] - The user who created the article.
 * @property {DimensionResponseSchema} dimension
 * @property {string} [expiration_date] - The expiration date of the article.
 * @property {boolean} fragile - Indicates if the article is fragile.
 * @property {string} fynd_article_code - The Fynd article code.
 * @property {string} fynd_item_code - The Fynd item code.
 * @property {Object} [fynd_meta] - The Fynd metadata of the article.
 * @property {Object} identifier - The identifier of the article.
 * @property {boolean} [is_active] - Indicates if the article is active.
 * @property {boolean} [is_set]
 * @property {number} item_id - The ID of the item.
 * @property {ManufacturerResponseSchema} manufacturer
 * @property {Object} [meta] - Additional metadata for the article.
 * @property {string} [modified_by] - The user who modified the article.
 * @property {PriceMeta} price
 * @property {Quantities} [quantities]
 * @property {Object} [raw_meta] - The raw metadata of the article.
 * @property {InventoryReturnConfig} [return_config]
 * @property {string} seller_identifier - The seller identifier of the article.
 * @property {InventorySet} [set]
 * @property {string} size - The size of the article.
 * @property {string} [stage] - The stage of the article.
 * @property {StoreMeta} store
 * @property {string[]} [tags] - The tags associated with the article.
 * @property {TaxIdentifier} [tax_identifier]
 * @property {number} total_quantity - The total quantity of the article.
 * @property {string} [trace_id] - The trace ID of the article.
 * @property {boolean} [track_inventory] - Indicates if the inventory is tracked
 *   for the article.
 * @property {Trader1[]} [trader] - The traders associated with the article.
 * @property {string} uid - The unique identifier of the article.
 * @property {WeightResponseSchema} weight
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
 * @property {string} [message] - It is the success message of the inventory update.
 * @property {boolean} [success] - It is the success message of the inventory update.
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
 * @property {Object} [attributes] - A set of key-value pairs representing the
 *   attributes of the product, such as pattern, gender, etc.
 * @property {string} [country_of_origin] - Country where the product was manufactured.
 * @property {Object} [identifier] - Identification details for the product,
 *   including EANs (European Article Numbers).
 * @property {string[]} [images] - List of URLs pointing to images of the product.
 * @property {string} [item_code] - Code assigned to the product for inventory purposes.
 * @property {string} [name]
 * @property {ProductPriceRangeSchema} [price]
 * @property {number} [quantity] - The quantity of the product available.
 * @property {string} [short_description]
 * @property {string[]} [sizes] - List of available sizes for the product.
 * @property {string} [slug] - Unique URL-friendly identifier for the product.
 * @property {number} [uid] - Unique identifier for the product.
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
 * @typedef LocationTimingSchema
 * @property {number} [hour] - The hour component of the time, represented in
 *   24-hour format.
 * @property {number} [minute] - The minute component of the time.
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
 * @property {Object[]} [filters]
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
 * @property {string} [end]
 * @property {string} [start]
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
 * @typedef InventoryBulkJob
 * @property {number} [company_id] - The ID of the company.
 * @property {string} [file_path] - The file path of the company.
 */
/**
 * @typedef ProductBulkResponseSchema
 * @property {string} [batch_id]
 */
/**
 * @typedef InventoryBulkResponseSchema
 * @property {string} batch_id
 * @property {UserInfo} [created_by]
 * @property {string} created_on - The date and time when the item was created.
 * @property {boolean} [is_active] - Whether the item is active or not.
 * @property {UserInfo} [modified_by]
 * @property {string} [modified_on] - The date and time when the item was last modified.
 */
/**
 * @typedef ProductBulkRequestSchemaList
 * @property {ProductBulkRequestSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductBundleItem
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
 * @property {boolean} auto_add_to_cart - Specifies if the product is
 *   automatically added to the cart.
 * @property {boolean} auto_select - Indicates if the product is automatically
 *   selected in the bundle.
 * @property {boolean} allow_remove - Indicates whether the product can be
 *   removed from the bundle.
 * @property {boolean} prefer_single_shipment
 * @property {boolean} allow_individual_return
 * @property {boolean} allow_individual_cancel
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
 * @property {UserInfo} [modified_by]
 * @property {string} [modified_on]
 * @property {boolean} [allow_individual_cancel]
 * @property {boolean} [allow_individual_return]
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {boolean} [prefer_single_shipment]
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
 * @typedef ApplicationProductCategoryItem
 * @property {number} [id] - Unique identifier of the category.
 * @property {number} [uid] - Unique identifier of the category (UID).
 * @property {string} [name] - Name of the category.
 * @property {string} [slug] - Slug or unique key for the category.
 * @property {ApplicationProductMedia} [logo]
 * @property {PageAction} [action]
 */
/**
 * @typedef ApplicationProductMedia
 * @property {string} [type] - Type of the media (e.g., image, video).
 * @property {string} [url] - URL of the media item.
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
 * @typedef PatchProductDownloadsDataResponseSchema
 * @property {string} [created_on]
 * @property {UserInfo} [created_by]
 * @property {string} [task_id]
 * @property {string} [modified_on]
 * @property {number} [seller_id]
 * @property {string} [url]
 * @property {string} [status]
 * @property {string[]} [notification_emails]
 * @property {string} [completed_on]
 */
/**
 * @typedef PatchProductDownloadsResponseSchema
 * @property {PatchProductDownloadsDataResponseSchema} [data]
 */
/**
 * @typedef ProductDownloadFilters
 * @property {string[]} brands
 * @property {string[]} catalogue_types
 * @property {string[]} templates
 */
/**
 * @typedef CreateProductDownloadsDataResponseSchema
 * @property {string} [created_on]
 * @property {string} [type]
 * @property {string} [task_id]
 * @property {ProductDownloadFilters} [filters]
 * @property {UserInfo} [created_by]
 * @property {string} [_id]
 * @property {Object[]} [notification_emails]
 * @property {string} [modified_on]
 * @property {string} [status]
 * @property {number} [seller_id]
 * @property {Stats} [stats]
 */
/**
 * @typedef CreateProductDownloadsResponseSchema
 * @property {CreateProductDownloadsDataResponseSchema} [data]
 */
/**
 * @typedef GetProductDownloadsResponseSchema
 * @property {string} [modified_on]
 * @property {string} [url]
 * @property {string} [status]
 * @property {string} [completed_on]
 * @property {UserInfo} [created_by]
 * @property {string} [created_on]
 * @property {number} [seller_id]
 * @property {string} [task_id]
 * @property {string} [id]
 */
/**
 * @typedef ProductDownloadsResponseSchema
 * @property {ProductTemplateExportResponseSchema[]} [items] - The items of the job.
 * @property {Page} [page]
 */
/**
 * @typedef ProductFilters
 * @property {ProductFiltersKey} key
 * @property {ProductFiltersValue[]} values - A list of possible values
 *   corresponding to the filter key. These values can be selected for filtering
 *   products.
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
 * @property {string} [type] - The type of image, typically 'image'.
 * @property {string} [url] - The URL of the category image.
 */
/**
 * @typedef PageAction
 * @property {ActionObject} [page]
 * @property {string} [type] - The type of page action to be performed.
 */
/**
 * @typedef ActionObject
 * @property {string} [type] - The type of action to be performed, such as
 *   navigating to a product or category.
 * @property {Object} [query] - The query parameters associated with the action.
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
 * @typedef ProductListingResponseV2Schema
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
 * @property {UserInfo} [created_by]
 * @property {string} [modified_on]
 * @property {string} [slug]
 * @property {UserInfo} [modified_by]
 * @property {number} [item_id]
 * @property {string} [id]
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
 * @typedef ProductTemplate
 * @property {string[]} [attributes] - List of attributes associated with the
 *   product template.
 * @property {string[]} [categories] - List of categories the product template belongs to.
 * @property {UserInfo} [created_by]
 * @property {string} [created_on] - Timestamp of when the product template was created.
 * @property {string[]} [departments] - List of departments the product template
 *   is associated with.
 * @property {string} [description] - Detailed description of the product template.
 * @property {boolean} [is_active] - Indicates if the product template is
 *   currently active.
 * @property {boolean} [is_archived] - Indicates if the product template is archived.
 * @property {boolean} [is_expirable] - Indicates if the product template is expirable.
 * @property {boolean} [is_physical] - Indicates if the product template
 *   represents a physical product.
 * @property {string} [logo] - URL of the product template logo.
 * @property {UserInfo} [modified_by]
 * @property {string} [modified_on] - Timestamp of when the product template was
 *   last modified.
 * @property {string} [name] - The name of the product template.
 * @property {string} slug - Unique URL-friendly identifier for the product template.
 * @property {string} [tag]
 */
/**
 * @typedef ProductTemplateDownloadsExport
 * @property {ProductTemplateExportFilterRequestSchema} [filters]
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
 * @property {string} [trigger_on]
 * @property {string} [id]
 * @property {Object} [template_tags]
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
 * @typedef CompanyVerificationStats
 * @property {number} [verified]
 * @property {number} [total]
 */
/**
 * @typedef CompanyVerificationResponseSchema
 * @property {number} [uid]
 * @property {string} [name]
 * @property {CompanyVerificationStats} [stats]
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
 * @typedef Sitemap
 * @property {number} [priority]
 * @property {string} [frequency]
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
 * @typedef ApplicationCollectionItemSeoBreadcrumbs
 * @property {string} [url] - The URL that this breadcrumb points to.
 * @property {ApplicationCollectionItemSeoAction} [action]
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
 * @property {ApplicationItemSeoMetaTags[]} [items]
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
 * @property {number} country_code - The country code for the phone number,
 *   typically represented as an integer (e.g., 91 for India).
 * @property {string} number
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
 * @property {number} pieces - Number of pieces in the set.
 * @property {string} size - Size of the item in the set.
 */
/**
 * @typedef SingleCategoryResponseSchema
 * @property {Category} [data]
 */
/**
 * @typedef VariantTypesResponseSchema
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
 * @typedef SizeGuideItem
 * @property {boolean} [active] - Indicates if the size guide is active or not.
 * @property {number} [brand_id] - The identifier for the brand associated with
 *   the size guide.
 * @property {number} [company_id] - The identifier for the company that owns
 *   the size guide.
 * @property {UserInfo} [created_by]
 * @property {string} [created_on] - The timestamp when the size guide was created.
 * @property {Guide} [guide]
 * @property {string} [id] - The unique identifier for the size guide.
 * @property {UserInfo} [modified_by]
 * @property {string} [modified_on] - The timestamp when the size guide was last modified.
 * @property {string} [name] - The name of the size guide.
 * @property {string} [subtitle] - A short description or subtitle for the size guide.
 * @property {string} [tag] - A tag or identifier used to classify the size guide.
 * @property {string} [title] - The title of the size guide.
 * @property {string} [description] - A detailed description or HTML content
 *   providing more information about the size guide.
 * @property {string} [image] - A URL to an image associated with the size guide
 */
/**
 * @typedef SizeGuideResponseSchema
 * @property {boolean} [active] - Indicates whether the size guide is currently active.
 * @property {number} [brand_id] - The unique identifier for the brand
 *   associated with the size guide.
 * @property {number} [company_id] - The unique identifier for the company that
 *   owns the size guide.
 * @property {UserInfo} [created_by]
 * @property {string} [created_on] - The timestamp when the size guide was
 *   created, in ISO 8601 format.
 * @property {Object} [guide] - The main content of the size guide, containing
 *   details such as the size measurements, headers, and units.
 * @property {string} [id] - The public identifier of the size guide.
 * @property {string} [image] - A URL pointing to an image associated with the size guide.
 * @property {UserInfo} [modified_by]
 * @property {string} [modified_on] - The timestamp when the size guide was last
 *   modified, in ISO 8601 format.
 * @property {string} [name] - The name or title of the size guide.
 * @property {string} [subtitle] - A short description or subtitle of the size guide.
 * @property {string} [tag] - A tag or label associated with the size guide,
 *   used for categorization or reference.
 * @property {string} [title] - The main title of the size guide.
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
 * @property {number} id - The unique identifier of the store.
 */
/**
 * @typedef SuccessResponse1Schema
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
 * @property {ProductTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TemplatesGlobalValidationResponseSchema
 * @property {TemplateGlobalValidationData} [data]
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
 * @typedef UpdateCollection
 * @property {Action} [action]
 * @property {string} [uid]
 * @property {string} [app_id]
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
 * @property {boolean} [is_searchable]
 */
/**
 * @typedef UpdateSearchConfigurationRequestSchema
 * @property {string} application_id - The application id where custom search
 *   configuration is set
 * @property {number} company_id - The company id where custom search configuration is set
 * @property {UserInfo} [created_by]
 * @property {string} [created_on] - The date and time when the search
 *   configuration was created.
 * @property {boolean} [is_proximity_enabled] - Flag indicating if proximity
 *   search is enabled for this attribute.
 * @property {UserInfo} [modified_by]
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
 * @typedef UpdatedResponseSchema
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
 * @property {string} [email] - The email address of the user.
 * @property {string} [uid] - The unique ID of the user.
 * @property {string} [user_id] - The ID of the user.
 * @property {string} [username] - The username of the user.
 */
/**
 * @typedef UserSchema
 * @property {string} [_id]
 * @property {string} [contact] - The contact information of the user.
 * @property {string} [uid]
 * @property {string} [user_id] - The unique ID of the user.
 * @property {string} [username] - The username of the user.
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
 * @property {string} [message]
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
 * @typedef WeightResponseSchema1
 * @property {number} [shipping]
 * @property {string} [unit]
 */
/**
 * @typedef Marketplaces
 * @property {number[]} [brand_ids]
 * @property {string} [app_id]
 * @property {boolean} [enabled]
 * @property {UserInfo} [created_by]
 * @property {string} [created_on]
 * @property {string} [opt_level]
 * @property {number} [company_id]
 * @property {UserInfo} [modified_by]
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
 * @typedef CreateMarketplaceOptinRequestSchema
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {boolean} [enabled]
 * @property {string} [opt_level]
 * @property {string} [platform]
 * @property {number[]} [store_ids]
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
 * @typedef CreateMarketplaceOptinResponseSchema
 * @property {number[]} [store_ids]
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {string} [opt_level]
 * @property {string} [platform]
 * @property {boolean} [enabled]
 * @property {UserInfo} [created_by]
 * @property {UserInfo} [modified_by]
 * @property {string} [app_id]
 */
/**
 * @typedef GetProductTemplateSlugItemsSchema
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
 * @typedef GetProductTemplateSlugResponseSchema
 * @property {Page} page
 * @property {GetProductTemplateSlugItemsSchema[]} items
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
 * @property {UserInfo} [created_by]
 * @property {UserInfo} [modified_by]
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
 * @typedef AutocompleteErrorResponseSchemaSchema
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
 * @typedef CreateAppPriceFactoryResponseSchema
 * @property {string} [factory_type] - Type of the factory.
 * @property {boolean} [is_active] - Indicates whether the factory is active or not.
 * @property {string} [code] - Code associated with the factory.
 * @property {string[]} [factory_type_ids] - Array of unique identifiers
 *   associated with the factory type.
 * @property {string} [currency] - Currency associated with the factory.
 * @property {string} [application_id] - Unique identifier for the application.
 * @property {string} [created_on] - Date and time when the factory was created.
 * @property {UserInfo} [created_by]
 * @property {UserInfo} [modified_by]
 * @property {string} [name] - Name of the factory.
 * @property {number[]} [department_ids] - Array of department identifiers
 *   associated with the factory.
 * @property {string} [modified_on] - Date and time when the factory was last modified.
 * @property {string} [_id] - Unique identifier for the factory.
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
 * @property {UserInfo} [created_by]
 * @property {UserInfo} [modified_by]
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
 * @typedef GetAppPriceFactoryResponseSchema
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
 * @typedef CreatePriceFactoryProductRequestSchema
 * @property {CreateAppPriceFactoryProductItem[]} [items]
 */
/**
 * @typedef CreateAppPriceFactoryProductResponseSchema
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
 * @typedef FailedRecordsData
 * @property {number} [item_id]
 * @property {string} [error]
 */
/**
 * @typedef CreatePriceFactoryProductResponseSchema
 * @property {number} [total_records]
 * @property {number} [success_records]
 * @property {number} [failed_records]
 * @property {FailedRecordsData[]} [failed_records_data]
 * @property {string} [stage]
 */
/**
 * @typedef CreateAppPriceFactoryProductsResponseSchema
 * @property {CreateAppPriceFactoryProductResponseSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateAppPriceFactoryProductBulkJobRequestSchema
 * @property {string} [file_path]
 * @property {string} [file_type]
 * @property {string} [job_type]
 */
/**
 * @typedef CreateAppPriceFactoryProductExportJobRequestSchema
 * @property {boolean} [sample_with_data]
 */
/**
 * @typedef CreateAppPriceFactoryProductExportJobResponseSchema
 * @property {string} [job_type]
 * @property {number} [company_id]
 * @property {string} [file_type]
 * @property {string} [_id]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {UserInfo} [created_by]
 * @property {UserInfo} [modified_by]
 * @property {number} [success_records]
 * @property {string} [application_id]
 * @property {number} [total_records]
 * @property {string} [factory_id]
 * @property {boolean} [is_active]
 * @property {string} [stage]
 * @property {number} [failed_records]
 */
/**
 * @typedef AppPriceFactoryProductExportPollJobResponseSchema
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
 * @typedef CreateAppPriceFactoryProductExportJobPollResponseSchema
 * @property {AppPriceFactoryProductExportPollJobResponseSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateAppPriceFactoryProductBulkJobResponseSchema
 * @property {string} [job_id]
 * @property {string} [status]
 * @property {string} [file_type]
 * @property {string} [stage]
 * @property {UserInfo} [created_by]
 * @property {number} [company_id]
 * @property {string} [job_type]
 * @property {number} [total_records]
 * @property {boolean} [is_active]
 * @property {string} [modified_on]
 * @property {string} [application_id]
 * @property {string} [factory_id]
 * @property {UserInfo} [modified_by]
 * @property {string} [created_on]
 * @property {number} [failed_records]
 * @property {string} [file_path]
 * @property {number} [success_records]
 * @property {string} [_id]
 */
/**
 * @typedef CreateAppPriceFactoryProductBulkJobValidateResponseSchema
 * @property {string} [job_type]
 * @property {string} [file_type]
 * @property {string} [file_path]
 * @property {string} [job_id]
 * @property {string} [status]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {UserInfo} [created_by]
 * @property {UserInfo} [modified_by]
 */
/**
 * @typedef CreateAppPriceFactoryProductBulkJobPollResponseSchema
 * @property {string} [status]
 * @property {number} [total_records]
 * @property {number} [success_records]
 * @property {number} [failed_records]
 * @property {string} [error_file]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {UserInfo} [created_by]
 * @property {UserInfo} [modified_by]
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
 * @typedef SynonymListErrorResponseSchemaSchema
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
 * @typedef SynonymDeleteResponseSchemaSchema
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
 * @typedef AppPriceByIdResponseSchema
 * @property {PriceGroupedByZone[]} [data]
 */
/**
 * @typedef TemplatesValidationResponseSchema
 * @property {TemplateValidationData} [data]
 * @property {TemplateDetails} [template_details]
 */
/**
 * @typedef ActionPage
 * @property {Object} [params] - Parameters that should be considered in path.
 * @property {Object} [query] - Query parameter if any to be added to the action.
 * @property {string} [url] - The URL for the action.
 * @property {PageType} type
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
 * @typedef ValidationErrors
 * @property {ValidationError[]} errors
 */
/**
 * @typedef ValidationError
 * @property {string} message - A brief description of the error encountered.
 * @property {string} field - The field in the request that caused the error.
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
    export { StoreTagsResponseSchema, DiscountMeta, ProductMinMaxPrice, ProductPrice, ProductPricesPage, ProductPriceItem, ProductPrices, ProductFiltersKeysOnly, GetQueryFiltersKeysResponseSchema, GetQueryFiltersValuesResponseSchema, ProductQueryFiltersValue, SuccessResponseSchema, CompanyDRIListResponseSchema, CompanyDRIResponseSchema, SearchResponseSchema, MerchandisingQuery, MerchandisingSearchQuery, MerchandisingFilter, MerchandisingRuleQuery, MerchandisingRulesList, MerchDataItem, MerchSearchQuery, MerchQueryCondition, MerchFilter, SuccessResponseMerchandising, MerchandiseQueryResponseSchema, Filter, MerchandisingRuleQueryPart, MerchandisingRuleQueryPost, MerchandisingRuleSave, PinItem, PinItemRequestSchema, PinRequestSchema, PinResponseSchema, HideAttribute, HideAttributeRequestSchema, HideResponseSchema, HideRequestSchema, PostBoostAttribute, BoostAttribute, GetMerchandisingRuleBoostAction, PostMerchandisingRuleBoostAction, GetMerchandisingRuleBuryAction, Action, AllSizes, AllowSingleRequestSchema, AppCatalogConfiguration, AppCategoryReturnConfig, ReturnConfigResponseSchema, AppCategoryReturnConfigResponseSchema, AppConfiguration, AppConfigurationCreateDetail, AppConfigurationDetail, ValueConfigType, AppConfigurationsFilter, AppConfigurationsFilterResponseSchema, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentJson, ApplicationDepartmentListingResponseSchema, ApplicationItemMOQ, ApplicationItemMeta, ApplicationItemSeoSitemap, ApplicationItemSEO, ApplicationProductsSchema, ApplicationProductListingResponseSchema, OperatorsResponseSchema, ApplicationStoreJson, AppReturnConfigResponseSchema, ArticleStoreResponseSchema, AttributeDetailsGroup, AttributeMaster, AttributeMasterDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterSchema, AttributeSchemaRange, AutoCompleteMedia, AutocompleteAction, AutocompletePageAction, AutocompleteResult, BannerImage, BaseAppCategoryReturnConfig, BaseAppCategoryReturnConfigResponseSchema, Brand, BrandLogo, BrandItem, ApplicationCategoryListingSchema, ApplicationCategoryListingItemSchema, ApplicationBrandListingSchema, ApplicationBrandListingItemSchema, BrandListingResponseSchema, BrandMeta, BrandMeta1, BulkAssetResponseSchema, BulkInventoryGet, BulkInventoryGetItems, BulkProductUploadJob, BulkProductJob, BulkProductRequestSchema, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponseSchema, CategoriesResponseSchema, Category, CategoryItems, CategoryListingResponseSchema, CategoryMapping, CategoryMappingValues, CategoryResponseSchema, Child, CollectionBadge, CollectionBanner, CollectionBannerResponseSchema, CollectionCreateResponseSchema, CollectionImage, CollectionImageResponseSchema, CollectionListingFilter, CollectionListingFilterTag, CollectionListingFilterType, CollectionQuery, CollectionSchedule, CompanyBrandDetail, CompanyMeta, CompanyMeta1, ConfigErrorResponseSchema, ConfigSuccessResponseSchema, ConfigurationBucketPoints, ConfigurationListing, ConfigurationListingFilter, ConfigurationListingFilterConfig, ConfigurationListingFilterValue, ConfigurationListingSort, ConfigurationListingSortConfig, ConfigurationProduct, ConfigurationProductDetailsGroups, ConfigurationProductDetailsConfig, ConfigurationProductDetailsAttribute, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariant, ConfigurationProductVariantConfig, CreateAutocompleteKeyword, CreateAutocompleteWordsResponseSchema, CreateCollection, RerankingBoostItems, GetSearchRerankDetailResponseSchema, BoostItem, GetSearchRerankItemResponseSchema, GetSearchRerankResponseSchema, CreateSearchRerankResponseSchema, UpdateSearchRerankResponseSchema, UpdateSearchRerankRequestSchema, CreateSearchRerankRequestSchema, CreateSearchConfigurationRequestSchema, CreateSearchConfigurationResponseSchema, CreateSearchKeyword, CreateUpdateAppReturnConfig, CrossSellingResponseSchema, CustomOrder, DateMeta, DefaultKeyRequestSchema, DeleteAppCategoryReturnConfig, DeleteResponseSchema, DeleteSearchConfigurationResponseSchema, DeleteSearchRerankConfigurationResponseSchema, Department, DepartmentCategoryTree, DepartmentIdentifier, DepartmentResponseSchema, ValidationFailedResponseSchema, DepartmentsResponseSchema, DimensionResponseSchema, InventoryDimensionResponseSchema, Document, EntityConfiguration, ErrorResponseSchema, CategoryErrorResponseSchema, FilerList, RawProduct, RawProductListingResponseSchema, GTIN, AttributeDetail, GetAddressSchema, GetAllSizes, FilterResponseSchema, ValueItem, GetAppCatalogConfiguration, GetAppCatalogEntityConfiguration, GetAutocompleteWordsData, GetAutocompleteWordsResponseSchema, GetCatalogConfigurationDetailsProduct, FilterItem, CompareFilter, SimilarFilter, VariantFilter, DetailFilter, DetailFilterValues, DisplayType, SimilarItem, VariantItem, GetCatalogConfigurationDetailsSchemaListing, GetCatalogConfigurationMetaData, GetCollectionDetailNest, GetCollectionListingResponseSchema, GetCompanySchema, ConditionItem, DataItem, ValueTypeItem, SortTypeItem, GetConfigMetadataResponseSchema, GetConfigMetadataValues, AttributeType, DataType, ListingValueConfigType, SizeLimitConfiguration, ListingDataType, GetListingConfigResponseSchema, GetConfigResponseSchema, ConfigItem, AttributeConfig, GetDepartment, GetInventories, InventoryWeightResponseSchema, TraderResponseSchema, Identifier, GetInventoriesResponseSchema, GetLocationSchema, GetProductBundleCreateResponseSchema, GetProductBundleListingResponseSchema, GetProductBundleResponseSchema, GetProducts, GetCollectionDetailResponseSchema, CommonResponseSchemaCollection, GetQueryFiltersResponseSchema, CollectionProductSortOn, CollectionProductFilters, CollectionProductFiltersValue, GetCollectionItemsResponseSchema, CollectionItemSchemaV2, CollectionItemUpdateSchema, CollectionQuerySchemaV2, GetSearchConfigurationResponseSchema, GetSearchWordsData, GetSearchWordsResponseSchema, GlobalValidation, Guide, HSNCodesResponseSchema, HSNData, HSNDataInsertV2, Hierarchy, HsnCodesListingResponseSchemaV2, Image, ImageUrls, InventoryBulkRequestSchema, InventoryConfig, InventoryCreateRequestSchema, InventoryExportFilter, InventoryExportJobResponseSchema, InventoryExportItem, InventoryExportJobListFilters, InventoryExportJobListStats, InventoryExportJobList, InventoryExportJobListResponseSchema, InventoryExportQuantityFilter, ExportPatchRequestSchema, InventoryExportRequestSchema, EditInventoryDataDownloadsResponseSchema, EditInventoryDownloadsResponseSchema, InventoryExportFiltersResponseSchema, Stats, InventoryExportResponseSchema, InventoryFailedReason, InventoryJobPayload, InventoryPage, InventoryPayload, InventoryV2RequestSchema, InventoryIdentifier, InventoryGeoLocation, InventoryMobileNumber, InventoryAddress, InventoryManager, InventoryStore, InventoryResponseSchema, InventoryResponseItem, InventoryResponsePaginated, ApplicationInventorySellerIdentifierResponsePaginated, InventorySellerResponseSchema, InventorySet, InventoryStockResponseSchema, InventoryUpdateResponseSchema, InventoryValidationResponseSchema, InvoiceCredSchema, InvoiceDetailsSchema, Items, PriceRange, ProductPriceRangeSchema, LimitedProductData, ListSizeGuide, LocationDayWiseSchema, LocationTimingSchema, LocationIntegrationType, LocationListSchema, LocationManagerSchema, Logo, MOQData, ManufacturerResponseSchema, InventoryManufacturerResponseSchema, Media, Media1, DepartmentMedia, Meta, GuideHeaders, GuideValues, Header, MetaDataListingFilterMetaResponseSchema, MetaDataListingFilterResponseSchema, MetaDataListingResponseSchema, MetaDataListingSortMetaResponseSchema, MetaDataListingSortResponseSchema, MetaFields, NetQuantity, NetQuantityResponseSchema, NextSchedule, OptinCompanyBrandDetailsView, OptinAddress, OptinDocument, OptinBusinessCountryInfo, OptinCompanyDetail, OptinCompanyMetrics, OptinStoreDetails, OwnerAppItemResponseSchema, Page, PageResponseSchema, PageResponseType, Price, ProductListingDetailPrice, PriceArticle, PriceMeta, ProdcutTemplateCategoriesResponseSchema, Product, ProductAttributesResponseSchema, ProductBrand, ProductBulkAssets, ProductBulkRequestSchema, InventoryBulkJob, ProductBulkResponseSchema, InventoryBulkResponseSchema, ProductBulkRequestSchemaList, ProductBundleItem, ProductBundleRequestSchema, ProductBundleUpdateRequestSchema, ProductConfigurationDownloads, ProductCreateUpdateSizesSchema, ProductCreateUpdateSchemaV2, ProductDetail, ApplicationProductCategoryItem, ApplicationProductMedia, ProductDetailAttribute, ProductDetailGroupedAttribute, PatchProductDownloadsDataResponseSchema, PatchProductDownloadsResponseSchema, ProductDownloadFilters, CreateProductDownloadsDataResponseSchema, CreateProductDownloadsResponseSchema, GetProductDownloadsResponseSchema, ProductDownloadsResponseSchema, ProductFilters, ProductFiltersKey, ProductFiltersValue, ApplicationCategoryAction, ApplicationCategoryItem, CategoryPageAction, CategoryQuery, CategoryImage, PageAction, ActionObject, ProductListingPrice, ProductListingResponseSchema, ProductListingResponseV2Schema, ProductVerificationModel, ProductPublish, ProductPublished, ProductReturnConfigSchema, ProductReturnConfigBaseSchema, SizeDetails, ProductSchemaV2, ProductSize, ProductSizeDeleteDataResponseSchema, ProductSizeDeleteResponseSchema, ProductSortOn, ProductTagsViewResponseSchema, ProductTemplate, ProductTemplateDownloadsExport, ProductTemplateExportFilterRequestSchema, ProductTemplateExportResponseSchema, ProductVariants, CompanyVerificationStats, CompanyVerificationResponseSchema, ProductVariantsResponseSchema, Properties, Quantities, QuantitiesArticle, Quantity, QuantityBase, ReturnConfig, InventoryReturnConfig, ReturnConfig2, Sitemap, PageQuery, ApplicationCollectionItemSeoPage, ApplicationCollectionItemSeoAction, ApplicationCollectionItemSeoBreadcrumbs, ApplicationItemSeoAction, ApplicationItemSeoBreadcrumbs, ApplicationItemSeoMetaTagItem, ApplicationItemSeoMetaTags, Metatags, SizePromotionThreshold, SEOData, SearchKeywordResult, SearchableAttribute, SecondLevelChild, SellerPhoneNumber, CollectionSeoDetail, SitemapDetail, SeoDetail, SetSize, SingleCategoryResponseSchema, VariantTypesResponseSchema, VariantTypeItem, SingleProductResponseSchema, Size, SizeDistribution, SizeGuideItem, SizeGuideResponseSchema, Time, Timing, UserSchemaCustom, Manager, MobileNo, IntegrationType, Address, StoreDetail, StoreMeta, SuccessResponse1Schema, TaxIdentifier, TaxSlab, TeaserTag, TemplateDetails, TemplateGlobalValidationData, TemplateValidationData, TemplatesResponseSchema, TemplatesGlobalValidationResponseSchema, ThirdLevelChild, Trader, Trader1, UpdateCollection, UpdateSearchConfigurationRequestSchema, UpdateSearchConfigurationResponseSchema, UpdatedResponseSchema, UserCommon, UserDetail, UserDetail1, UserInfo, UserSchema, ValidateIdentifier, ValidateProduct, ValidateSizeGuide, VerifiedBy, WeightResponseSchema, WeightResponseSchema1, Marketplaces, GetAllMarketplaces, CreateMarketplaceOptinRequestSchema, UpdateMarketplaceOptinRequestSchema, CreateMarketplaceOptinResponseSchema, GetProductTemplateSlugItemsSchema, GetProductTemplateSlugResponseSchema, UpdateMarketplaceOptinResponseSchema, AutocompleteRequestSchema, AutocompleteUpsertResponseSchema, AutocompleteErrorResponseSchemaSchema, AutocompleteResponseSchema, ProductListingActionPage, ProductListingAction, AutocompleteItem, AutocompletePreviewResponseSchema, CreateAppPriceFactoryRequestSchema, CreateAppPriceFactoryResponseSchema, AppPriceFactory, EditAppPriceFactoryRequestSchema, GetAppPriceFactoryResponseSchema, CreateAppPriceFactoryProduct, PriceFactorySizes, CompanySizes, CreateAppPriceFactoryProductItem, CreatePriceFactoryProductRequestSchema, CreateAppPriceFactoryProductResponseSchema, FailedRecordsData, CreatePriceFactoryProductResponseSchema, CreateAppPriceFactoryProductsResponseSchema, CreateAppPriceFactoryProductBulkJobRequestSchema, CreateAppPriceFactoryProductExportJobRequestSchema, CreateAppPriceFactoryProductExportJobResponseSchema, AppPriceFactoryProductExportPollJobResponseSchema, CreateAppPriceFactoryProductExportJobPollResponseSchema, CreateAppPriceFactoryProductBulkJobResponseSchema, CreateAppPriceFactoryProductBulkJobValidateResponseSchema, CreateAppPriceFactoryProductBulkJobPollResponseSchema, SynonymListResponseSchema, SynonymResponseSchema, SynonymListErrorResponseSchemaSchema, SynonymCreateRequestSchema, SynonymCreateResponseSchema, SynonymUpdateResponseSchema, SynonymCreateErrorSchema, SynonymDeleteResponseSchemaSchema, SynonymUploadRequestSchema, SynonymUploadResponseSchema, SynonymExportResponseSchema, SynonymUploadErrorSchema, SynonymBulkValidateRequestSchema, SynonymBulkValidateResponseSchema, SynonymBulkValidateErrorSchema, SynonymBulkProcessRequestSchema, SynonymBulkProcessResponseSchema, SynonymBulkProcessErrorSchema, SynonymBulkPollResponseSchema, SynonymBulkPollErrorSchema, PriceFactoryCreateErrorSchema, PriceGroupedByZone, AppPriceByIdResponseSchema, TemplatesValidationResponseSchema, ActionPage, Price1, MultiCategoriesSchema, CustomMeta, ValidationErrors, ValidationError, PageType, CurrencyCodeEnum };
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
/** @returns {GetQueryFiltersKeysResponseSchema} */
declare function GetQueryFiltersKeysResponseSchema(): GetQueryFiltersKeysResponseSchema;
type GetQueryFiltersKeysResponseSchema = {
    /**
     * - An array of available filter
     * keys for querying products.
     */
    filters?: ProductFiltersKeysOnly[];
    /**
     * - A map of available operators that can be
     * used for querying, where the key is the operator type and the value is a string.
     */
    operators?: any;
    /**
     * - An array of sorting options available
     * for the products.
     */
    sort_on?: ProductSortOn[];
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
/** @returns {MerchandiseQueryResponseSchema} */
declare function MerchandiseQueryResponseSchema(): MerchandiseQueryResponseSchema;
type MerchandiseQueryResponseSchema = {
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
    query?: MerchandisingRuleQuery;
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
/** @returns {PinItemRequestSchema} */
declare function PinItemRequestSchema(): PinItemRequestSchema;
type PinItemRequestSchema = {
    action: string;
    item_id: string;
    position: number;
};
/** @returns {PinRequestSchema} */
declare function PinRequestSchema(): PinRequestSchema;
type PinRequestSchema = {
    action_value?: PinItemRequestSchema[];
};
/** @returns {PinResponseSchema} */
declare function PinResponseSchema(): PinResponseSchema;
type PinResponseSchema = {
    data?: PinItem[];
};
/** @returns {HideAttribute} */
declare function HideAttribute(): HideAttribute;
type HideAttribute = {
    name: string;
    uid: number;
};
/** @returns {HideAttributeRequestSchema} */
declare function HideAttributeRequestSchema(): HideAttributeRequestSchema;
type HideAttributeRequestSchema = {
    action?: string;
    item_id?: number;
};
/** @returns {HideResponseSchema} */
declare function HideResponseSchema(): HideResponseSchema;
type HideResponseSchema = {
    data?: HideAttribute[];
};
/** @returns {HideRequestSchema} */
declare function HideRequestSchema(): HideRequestSchema;
type HideRequestSchema = {
    action_value?: HideAttributeRequestSchema[];
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
    return_config: ProductReturnConfigBaseSchema;
};
/** @returns {ReturnConfigResponseSchema} */
declare function ReturnConfigResponseSchema(): ReturnConfigResponseSchema;
type ReturnConfigResponseSchema = {
    returnable?: boolean;
    time?: number;
    unit?: string;
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
/** @returns {AppConfigurationsFilterResponseSchema} */
declare function AppConfigurationsFilterResponseSchema(): AppConfigurationsFilterResponseSchema;
type AppConfigurationsFilterResponseSchema = {
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
    moq?: ApplicationItemMOQ;
    seo?: ApplicationItemSEO;
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
    operators?: OperatorsResponseSchema;
    page: Page;
    sort_on?: ProductSortOn[];
};
/** @returns {OperatorsResponseSchema} */
declare function OperatorsResponseSchema(): OperatorsResponseSchema;
type OperatorsResponseSchema = {
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
/** @returns {AppReturnConfigResponseSchema} */
declare function AppReturnConfigResponseSchema(): AppReturnConfigResponseSchema;
type AppReturnConfigResponseSchema = {
    created_by?: UserInfo;
    modified_by?: UserInfo;
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
/** @returns {ArticleStoreResponseSchema} */
declare function ArticleStoreResponseSchema(): ArticleStoreResponseSchema;
type ArticleStoreResponseSchema = {
    name?: string;
    store_code?: string;
    store_type?: string;
    uid?: number;
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
    ddepends_on?: string[];
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
    name?: string;
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
    /**
     * - The name of the brand.
     */
    name?: string;
    /**
     * - Unique identifier for the brand.
     */
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
    created_by?: UserInfo;
    /**
     * - Timestamp when the category was created.
     */
    created_on?: string;
    modified_by?: UserInfo;
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
    /**
     * - Unique identifier for the brand.
     */
    id: number;
    /**
     * - Name of the brand.
     */
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
    /**
     * - The unique identifier of the company
     * associated with the bulk product job.
     */
    company_id?: number;
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
/** @returns {BulkProductRequestSchema} */
declare function BulkProductRequestSchema(): BulkProductRequestSchema;
type BulkProductRequestSchema = {
    batch_id: string;
    company_id: number;
    data: any[];
    template_tag: string;
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
    marketplaces?: CategoryMapping;
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
    data?: DepartmentCategoryTree[];
    departments?: DepartmentIdentifier[];
};
/** @returns {CategoryMapping} */
declare function CategoryMapping(): CategoryMapping;
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
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
/** @returns {CollectionBannerResponseSchema} */
declare function CollectionBannerResponseSchema(): CollectionBannerResponseSchema;
type CollectionBannerResponseSchema = {
    landscape?: CollectionImageResponseSchema;
    portrait?: CollectionImageResponseSchema;
};
/** @returns {CollectionCreateResponseSchema} */
declare function CollectionCreateResponseSchema(): CollectionCreateResponseSchema;
type CollectionCreateResponseSchema = {
    badge?: CollectionBadge;
    banners?: CollectionBannerResponseSchema;
    cron?: any;
    description?: string;
    is_active?: boolean;
    is_visible?: boolean;
    logo?: CollectionImageResponseSchema;
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
/** @returns {CollectionImage} */
declare function CollectionImage(): CollectionImage;
type CollectionImage = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
    type?: string;
};
/** @returns {CollectionImageResponseSchema} */
declare function CollectionImageResponseSchema(): CollectionImageResponseSchema;
type CollectionImageResponseSchema = {
    type?: string;
    url?: string;
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
    /**
     * - Unique identifier for the company.
     */
    id: number;
};
/** @returns {CompanyMeta1} */
declare function CompanyMeta1(): CompanyMeta1;
type CompanyMeta1 = {
    id?: number;
};
/** @returns {ConfigErrorResponseSchema} */
declare function ConfigErrorResponseSchema(): ConfigErrorResponseSchema;
type ConfigErrorResponseSchema = {
    code?: string;
    errors?: any;
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
/** @returns {CreateAutocompleteWordsResponseSchema} */
declare function CreateAutocompleteWordsResponseSchema(): CreateAutocompleteWordsResponseSchema;
type CreateAutocompleteWordsResponseSchema = {
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
/** @returns {GetSearchRerankDetailResponseSchema} */
declare function GetSearchRerankDetailResponseSchema(): GetSearchRerankDetailResponseSchema;
type GetSearchRerankDetailResponseSchema = {
    ranking?: RerankingBoostItems;
    is_active?: boolean;
    modified_by?: UserInfo;
    created_by?: UserInfo;
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
/** @returns {GetSearchRerankItemResponseSchema} */
declare function GetSearchRerankItemResponseSchema(): GetSearchRerankItemResponseSchema;
type GetSearchRerankItemResponseSchema = {
    created_on?: string;
    modified_on?: string;
    words?: string[];
    app_id?: string;
    modified_by?: UserInfo;
    ranking?: RerankingBoostItems;
    created_by?: UserInfo;
    is_active?: boolean;
    id?: string;
};
/** @returns {GetSearchRerankResponseSchema} */
declare function GetSearchRerankResponseSchema(): GetSearchRerankResponseSchema;
type GetSearchRerankResponseSchema = {
    items?: GetSearchRerankItemResponseSchema[];
    page?: PageResponseSchema;
};
/** @returns {CreateSearchRerankResponseSchema} */
declare function CreateSearchRerankResponseSchema(): CreateSearchRerankResponseSchema;
type CreateSearchRerankResponseSchema = {
    words?: string[];
    app_id?: string;
    ranking?: RerankingBoostItems;
    is_active?: boolean;
    created_on?: string;
    created_by?: UserInfo;
    modified_on?: string;
    modified_by?: UserInfo;
};
/** @returns {UpdateSearchRerankResponseSchema} */
declare function UpdateSearchRerankResponseSchema(): UpdateSearchRerankResponseSchema;
type UpdateSearchRerankResponseSchema = {
    words?: string[];
    app_id?: string;
    ranking?: RerankingBoostItems;
    is_active?: boolean;
    created_on?: string;
    created_by?: UserInfo;
    modified_on?: string;
    modified_by?: UserInfo;
};
/** @returns {UpdateSearchRerankRequestSchema} */
declare function UpdateSearchRerankRequestSchema(): UpdateSearchRerankRequestSchema;
type UpdateSearchRerankRequestSchema = {
    words?: string[];
    is_active?: boolean;
    application_id?: string;
    ranking?: RerankingBoostItems;
};
/** @returns {CreateSearchRerankRequestSchema} */
declare function CreateSearchRerankRequestSchema(): CreateSearchRerankRequestSchema;
type CreateSearchRerankRequestSchema = {
    words?: string[];
    is_active?: boolean;
    application_id?: string;
    ranking?: RerankingBoostItems;
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
    app_id?: string;
    company_id?: number;
    /**
     * - Return configurtion Level
     * category|product|no-return
     */
    return_config_level: string;
};
/** @returns {CrossSellingResponseSchema} */
declare function CrossSellingResponseSchema(): CrossSellingResponseSchema;
type CrossSellingResponseSchema = {
    articles?: number;
    products?: number;
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
/** @returns {DeleteSearchRerankConfigurationResponseSchema} */
declare function DeleteSearchRerankConfigurationResponseSchema(): DeleteSearchRerankConfigurationResponseSchema;
type DeleteSearchRerankConfigurationResponseSchema = {
    success?: boolean;
    message?: string;
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
    department?: string;
    items?: CategoryItems[];
};
/** @returns {DepartmentIdentifier} */
declare function DepartmentIdentifier(): DepartmentIdentifier;
type DepartmentIdentifier = {
    name?: string;
    slug?: string;
    uid?: number;
};
/** @returns {DepartmentResponseSchema} */
declare function DepartmentResponseSchema(): DepartmentResponseSchema;
type DepartmentResponseSchema = {
    items?: Department[];
};
/** @returns {ValidationFailedResponseSchema} */
declare function ValidationFailedResponseSchema(): ValidationFailedResponseSchema;
type ValidationFailedResponseSchema = {
    /**
     * - Response message for failed validation
     */
    message?: string;
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
    app_id?: string;
    config_id?: string;
    config_type?: string;
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
/** @returns {CategoryErrorResponseSchema} */
declare function CategoryErrorResponseSchema(): CategoryErrorResponseSchema;
type CategoryErrorResponseSchema = {
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
    /**
     * - It is Date and time when the attribute was created.
     */
    created_on?: string;
    /**
     * - It is Date and time when the attribute was modified.
     */
    modified_on?: string;
    created_by?: UserInfo;
    modified_by?: UserInfo;
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
    pincode?: number;
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
/** @returns {FilterResponseSchema} */
declare function FilterResponseSchema(): FilterResponseSchema;
type FilterResponseSchema = {
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
/** @returns {GetAutocompleteWordsResponseSchema} */
declare function GetAutocompleteWordsResponseSchema(): GetAutocompleteWordsResponseSchema;
type GetAutocompleteWordsResponseSchema = {
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
    listing?: MetaDataListingResponseSchema;
    product?: GetCatalogConfigurationDetailsProduct;
};
/** @returns {GetCollectionDetailNest} */
declare function GetCollectionDetailNest(): GetCollectionDetailNest;
type GetCollectionDetailNest = {
    _schedule?: CollectionSchedule;
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
/** @returns {GetCollectionListingResponseSchema} */
declare function GetCollectionListingResponseSchema(): GetCollectionListingResponseSchema;
type GetCollectionListingResponseSchema = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
/** @returns {GetCompanySchema} */
declare function GetCompanySchema(): GetCompanySchema;
type GetCompanySchema = {
    addresses?: GetAddressSchema[];
    business_type?: string;
    company_type?: string;
    created_by?: UserSchema;
    created_on?: string;
    modified_by?: UserSchema;
    modified_on?: string;
    name?: string;
    reject_reason?: string;
    stage?: string;
    uid?: number;
    verified_by?: UserSchema;
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
/** @returns {GetListingConfigResponseSchema} */
declare function GetListingConfigResponseSchema(): GetListingConfigResponseSchema;
type GetListingConfigResponseSchema = {
    data?: ListingDataType[];
    page?: PageResponseType;
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
    seo?: ApplicationItemSEO;
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
    created_by?: UserSchema;
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
    modified_by?: UserSchema;
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
    brand?: BrandMeta1;
    company?: CompanyMeta1;
    /**
     * - Country where the product was manufactured.
     */
    country_of_origin?: string;
    created_by?: UserSchema;
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
    modified_by?: UserSchema;
    /**
     * - Indicates platform availability status for
     * the product.
     */
    platforms?: any;
    price?: PriceArticle;
    quantities?: QuantitiesArticle;
    return_config?: ReturnConfig2;
    /**
     * - Seller's identifier for the product.
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
/** @returns {InventoryWeightResponseSchema} */
declare function InventoryWeightResponseSchema(): InventoryWeightResponseSchema;
type InventoryWeightResponseSchema = {
    shipping?: number;
    unit?: string;
};
/** @returns {TraderResponseSchema} */
declare function TraderResponseSchema(): TraderResponseSchema;
type TraderResponseSchema = {
    address?: string[];
    name?: string;
    type?: string;
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
/** @returns {GetProductBundleCreateResponseSchema} */
declare function GetProductBundleCreateResponseSchema(): GetProductBundleCreateResponseSchema;
type GetProductBundleCreateResponseSchema = {
    created_by?: UserSchema;
    modified_by?: UserSchema;
    /**
     * - Specifies the type of bundle, e.g., single or multi.
     */
    choice: string;
    /**
     * - Unique identifier for the company that owns
     * the product bundle.
     */
    company_id?: number;
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
    allow_remove: boolean;
    auto_add_to_cart: boolean;
    auto_select: boolean;
    prefer_single_shipment: boolean;
    allow_individual_cancel: boolean;
    allow_individual_return: boolean;
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
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    prefer_single_shipment?: boolean;
    allow_individual_cancel?: boolean;
    allow_individual_return?: boolean;
};
/** @returns {GetProducts} */
declare function GetProducts(): GetProducts;
type GetProducts = {
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
    price?: Price;
    product_details?: LimitedProductData;
    /**
     * - Unique identifier for the product.
     */
    product_uid?: number;
    sizes?: Size[];
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
    cron?: any;
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
    operators?: any;
    /**
     * - An array of sorting options
     * to be applied to product queries.
     */
    sort_on?: CollectionProductSortOn[];
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
/** @returns {CollectionProductFilters} */
declare function CollectionProductFilters(): CollectionProductFilters;
type CollectionProductFilters = {
    key?: ProductFiltersKey;
    /**
     * - A list of possible
     * values corresponding to the filter key. These values can be selected for
     * filtering products.
     */
    values?: CollectionProductFiltersValue[];
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
/** @returns {GetCollectionItemsResponseSchema} */
declare function GetCollectionItemsResponseSchema(): GetCollectionItemsResponseSchema;
type GetCollectionItemsResponseSchema = {
    /**
     * - An array of products that
     * belong to the collection.
     */
    items?: ApplicationProductsSchema[];
    sort_on?: ProductSortOn[];
    page?: Page;
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
    value: string[];
};
/** @returns {GetSearchConfigurationResponseSchema} */
declare function GetSearchConfigurationResponseSchema(): GetSearchConfigurationResponseSchema;
type GetSearchConfigurationResponseSchema = {
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
    query?: any;
    sort_on?: string;
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    result?: any;
    uid?: string;
    words?: string[];
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
    created_by?: UserInfo;
    modified_by?: UserInfo;
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
/** @returns {HsnCodesListingResponseSchemaV2} */
declare function HsnCodesListingResponseSchemaV2(): HsnCodesListingResponseSchemaV2;
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponseSchema;
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
    multivalue?: boolean;
};
/** @returns {InventoryCreateRequestSchema} */
declare function InventoryCreateRequestSchema(): InventoryCreateRequestSchema;
type InventoryCreateRequestSchema = {
    /**
     * - The list of attributes that you want to extract
     * in the export job.
     */
    data?: string[];
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
/** @returns {InventoryExportJobResponseSchema} */
declare function InventoryExportJobResponseSchema(): InventoryExportJobResponseSchema;
type InventoryExportJobResponseSchema = {
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
    created_by?: UserInfo;
    _id?: string;
    url?: string;
    trigger_on?: string;
    brand?: number[];
    store?: number[];
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
    created_by?: UserInfo;
    id?: string;
};
/** @returns {InventoryExportJobListResponseSchema} */
declare function InventoryExportJobListResponseSchema(): InventoryExportJobListResponseSchema;
type InventoryExportJobListResponseSchema = {
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
/** @returns {ExportPatchRequestSchema} */
declare function ExportPatchRequestSchema(): ExportPatchRequestSchema;
type ExportPatchRequestSchema = {
    notification_emails?: string[];
    status?: string;
};
/** @returns {InventoryExportRequestSchema} */
declare function InventoryExportRequestSchema(): InventoryExportRequestSchema;
type InventoryExportRequestSchema = {
    brand?: number[];
    store?: number[];
    type?: string;
};
/** @returns {EditInventoryDataDownloadsResponseSchema} */
declare function EditInventoryDataDownloadsResponseSchema(): EditInventoryDataDownloadsResponseSchema;
type EditInventoryDataDownloadsResponseSchema = {
    url?: string;
    completed_on?: string;
    seller_id?: number;
    task_id?: string;
    created_on?: string;
    modified_on?: string;
    notification_emails?: string[];
    status?: string;
};
/** @returns {EditInventoryDownloadsResponseSchema} */
declare function EditInventoryDownloadsResponseSchema(): EditInventoryDownloadsResponseSchema;
type EditInventoryDownloadsResponseSchema = {
    data?: EditInventoryDataDownloadsResponseSchema;
};
/** @returns {InventoryExportFiltersResponseSchema} */
declare function InventoryExportFiltersResponseSchema(): InventoryExportFiltersResponseSchema;
type InventoryExportFiltersResponseSchema = {
    brand_ids?: number[];
    store_ids?: number[];
};
/** @returns {Stats} */
declare function Stats(): Stats;
type Stats = {
    total?: number;
};
/** @returns {InventoryExportResponseSchema} */
declare function InventoryExportResponseSchema(): InventoryExportResponseSchema;
type InventoryExportResponseSchema = {
    created_by?: UserInfo;
    /**
     * - Creation datetime of the job
     */
    created_on?: string;
    filters?: InventoryExportFiltersResponseSchema;
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
     * - The total quantity of the inventory
     * item. Any one quantity is allowed `sellable_quantity` or `total_quantity`,
     * the other one would be derived.
     */
    total_quantity?: number;
    /**
     * - The sellable quantity of the
     * inventory item. Any one quantity is allowed `sellable_quantity` or
     * `total_quantity`, the other one would be derived.
     */
    sellable_quantity?: number;
    /**
     * - The trace ID of the inventory payload.
     */
    trace_id?: string;
};
/** @returns {InventoryV2RequestSchema} */
declare function InventoryV2RequestSchema(): InventoryV2RequestSchema;
type InventoryV2RequestSchema = {
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
/** @returns {InventoryResponseSchema} */
declare function InventoryResponseSchema(): InventoryResponseSchema;
type InventoryResponseSchema = {
    /**
     * - The currency in which the item is priced, e.g., 'INR'.
     */
    currency?: string;
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
     * - A unique identifier combining store ID and seller
     * identifier.
     */
    uid?: string;
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
    store?: InventoryStore;
    created_by?: UserInfo;
    modified_by?: UserInfo;
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
    items?: InventoryResponseSchema[];
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
    brand: BrandMeta;
    company: CompanyMeta;
    /**
     * - The country of origin of the article.
     */
    country_of_origin: string;
    /**
     * - The user who created the article.
     */
    created_by?: string;
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
    manufacturer: ManufacturerResponseSchema;
    /**
     * - Additional metadata for the article.
     */
    meta?: any;
    /**
     * - The user who modified the article.
     */
    modified_by?: string;
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
    weight: WeightResponseSchema;
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
    message?: string;
    /**
     * - It is the success message of the inventory update.
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
    /**
     * - A set of key-value pairs representing the
     * attributes of the product, such as pattern, gender, etc.
     */
    attributes?: any;
    /**
     * - Country where the product was manufactured.
     */
    country_of_origin?: string;
    /**
     * - Identification details for the product,
     * including EANs (European Article Numbers).
     */
    identifier?: any;
    /**
     * - List of URLs pointing to images of the product.
     */
    images?: string[];
    /**
     * - Code assigned to the product for inventory purposes.
     */
    item_code?: string;
    name?: string;
    price?: ProductPriceRangeSchema;
    /**
     * - The quantity of the product available.
     */
    quantity?: number;
    short_description?: string;
    /**
     * - List of available sizes for the product.
     */
    sizes?: string[];
    /**
     * - Unique URL-friendly identifier for the product.
     */
    slug?: string;
    /**
     * - Unique identifier for the product.
     */
    uid?: number;
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
    filters?: any[];
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
    end?: string;
    start?: string;
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
/** @returns {ProductBulkResponseSchema} */
declare function ProductBulkResponseSchema(): ProductBulkResponseSchema;
type ProductBulkResponseSchema = {
    batch_id?: string;
};
/** @returns {InventoryBulkResponseSchema} */
declare function InventoryBulkResponseSchema(): InventoryBulkResponseSchema;
type InventoryBulkResponseSchema = {
    batch_id: string;
    created_by?: UserInfo;
    /**
     * - The date and time when the item was created.
     */
    created_on: string;
    /**
     * - Whether the item is active or not.
     */
    is_active?: boolean;
    modified_by?: UserInfo;
    /**
     * - The date and time when the item was last modified.
     */
    modified_on?: string;
};
/** @returns {ProductBulkRequestSchemaList} */
declare function ProductBulkRequestSchemaList(): ProductBulkRequestSchemaList;
type ProductBulkRequestSchemaList = {
    items?: ProductBulkRequestSchema[];
    page?: Page;
};
/** @returns {ProductBundleItem} */
declare function ProductBundleItem(): ProductBundleItem;
type ProductBundleItem = {
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
    /**
     * - Specifies if the product is
     * automatically added to the cart.
     */
    auto_add_to_cart: boolean;
    /**
     * - Indicates if the product is automatically
     * selected in the bundle.
     */
    auto_select: boolean;
    /**
     * - Indicates whether the product can be
     * removed from the bundle.
     */
    allow_remove: boolean;
    prefer_single_shipment: boolean;
    allow_individual_return: boolean;
    allow_individual_cancel: boolean;
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
    modified_by?: UserInfo;
    modified_on?: string;
    allow_individual_cancel?: boolean;
    allow_individual_return?: boolean;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    prefer_single_shipment?: boolean;
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
/** @returns {PatchProductDownloadsDataResponseSchema} */
declare function PatchProductDownloadsDataResponseSchema(): PatchProductDownloadsDataResponseSchema;
type PatchProductDownloadsDataResponseSchema = {
    created_on?: string;
    created_by?: UserInfo;
    task_id?: string;
    modified_on?: string;
    seller_id?: number;
    url?: string;
    status?: string;
    notification_emails?: string[];
    completed_on?: string;
};
/** @returns {PatchProductDownloadsResponseSchema} */
declare function PatchProductDownloadsResponseSchema(): PatchProductDownloadsResponseSchema;
type PatchProductDownloadsResponseSchema = {
    data?: PatchProductDownloadsDataResponseSchema;
};
/** @returns {ProductDownloadFilters} */
declare function ProductDownloadFilters(): ProductDownloadFilters;
type ProductDownloadFilters = {
    brands: string[];
    catalogue_types: string[];
    templates: string[];
};
/** @returns {CreateProductDownloadsDataResponseSchema} */
declare function CreateProductDownloadsDataResponseSchema(): CreateProductDownloadsDataResponseSchema;
type CreateProductDownloadsDataResponseSchema = {
    created_on?: string;
    type?: string;
    task_id?: string;
    filters?: ProductDownloadFilters;
    created_by?: UserInfo;
    _id?: string;
    notification_emails?: any[];
    modified_on?: string;
    status?: string;
    seller_id?: number;
    stats?: Stats;
};
/** @returns {CreateProductDownloadsResponseSchema} */
declare function CreateProductDownloadsResponseSchema(): CreateProductDownloadsResponseSchema;
type CreateProductDownloadsResponseSchema = {
    data?: CreateProductDownloadsDataResponseSchema;
};
/** @returns {GetProductDownloadsResponseSchema} */
declare function GetProductDownloadsResponseSchema(): GetProductDownloadsResponseSchema;
type GetProductDownloadsResponseSchema = {
    modified_on?: string;
    url?: string;
    status?: string;
    completed_on?: string;
    created_by?: UserInfo;
    created_on?: string;
    seller_id?: number;
    task_id?: string;
    id?: string;
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
    /**
     * - A list of possible values
     * corresponding to the filter key. These values can be selected for filtering
     * products.
     */
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
    /**
     * - The type of image, typically 'image'.
     */
    type?: string;
    /**
     * - The URL of the category image.
     */
    url?: string;
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
/** @returns {ProductListingResponseV2Schema} */
declare function ProductListingResponseV2Schema(): ProductListingResponseV2Schema;
type ProductListingResponseV2Schema = {
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
    created_by?: UserInfo;
    modified_on?: string;
    slug?: string;
    modified_by?: UserInfo;
    item_id?: number;
    id?: string;
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
    created_by?: UserInfo;
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
    is_expirable?: boolean;
    /**
     * - Indicates if the product template
     * represents a physical product.
     */
    is_physical?: boolean;
    /**
     * - URL of the product template logo.
     */
    logo?: string;
    modified_by?: UserInfo;
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
    trigger_on?: string;
    id?: string;
    template_tags?: any;
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
/** @returns {CompanyVerificationStats} */
declare function CompanyVerificationStats(): CompanyVerificationStats;
type CompanyVerificationStats = {
    verified?: number;
    total?: number;
};
/** @returns {CompanyVerificationResponseSchema} */
declare function CompanyVerificationResponseSchema(): CompanyVerificationResponseSchema;
type CompanyVerificationResponseSchema = {
    uid?: number;
    name?: string;
    stats?: CompanyVerificationStats;
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
/** @returns {Sitemap} */
declare function Sitemap(): Sitemap;
type Sitemap = {
    priority?: number;
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
/** @returns {ApplicationCollectionItemSeoBreadcrumbs} */
declare function ApplicationCollectionItemSeoBreadcrumbs(): ApplicationCollectionItemSeoBreadcrumbs;
type ApplicationCollectionItemSeoBreadcrumbs = {
    /**
     * - The URL that this breadcrumb points to.
     */
    url?: string;
    action?: ApplicationCollectionItemSeoAction;
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
    items?: ApplicationItemSeoMetaTags[];
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
    /**
     * - The country code for the phone number,
     * typically represented as an integer (e.g., 91 for India).
     */
    country_code: number;
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
/** @returns {VariantTypesResponseSchema} */
declare function VariantTypesResponseSchema(): VariantTypesResponseSchema;
type VariantTypesResponseSchema = {
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
    created_by?: UserInfo;
    /**
     * - The timestamp when the size guide was created.
     */
    created_on?: string;
    guide?: Guide;
    /**
     * - The unique identifier for the size guide.
     */
    id?: string;
    modified_by?: UserInfo;
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
     * - A URL to an image associated with the size guide
     */
    image?: string;
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
    created_by?: UserInfo;
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
    modified_by?: UserInfo;
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
    /**
     * - The unique identifier of the store.
     */
    id: number;
};
/** @returns {SuccessResponse1Schema} */
declare function SuccessResponse1Schema(): SuccessResponse1Schema;
type SuccessResponse1Schema = {
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
    items?: ProductTemplate[];
    page?: Page;
};
/** @returns {TemplatesGlobalValidationResponseSchema} */
declare function TemplatesGlobalValidationResponseSchema(): TemplatesGlobalValidationResponseSchema;
type TemplatesGlobalValidationResponseSchema = {
    data?: TemplateGlobalValidationData;
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
/** @returns {UpdateCollection} */
declare function UpdateCollection(): UpdateCollection;
type UpdateCollection = {
    action?: Action;
    uid?: string;
    app_id?: string;
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
    is_searchable?: boolean;
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
    created_by?: UserInfo;
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
    modified_by?: UserInfo;
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
/** @returns {UpdatedResponseSchema} */
declare function UpdatedResponseSchema(): UpdatedResponseSchema;
type UpdatedResponseSchema = {
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
    _id?: string;
    /**
     * - The contact information of the user.
     */
    contact?: string;
    uid?: string;
    /**
     * - The unique ID of the user.
     */
    user_id?: string;
    /**
     * - The username of the user.
     */
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
    message?: string;
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
/** @returns {WeightResponseSchema1} */
declare function WeightResponseSchema1(): WeightResponseSchema1;
type WeightResponseSchema1 = {
    shipping?: number;
    unit?: string;
};
/** @returns {Marketplaces} */
declare function Marketplaces(): Marketplaces;
type Marketplaces = {
    brand_ids?: number[];
    app_id?: string;
    enabled?: boolean;
    created_by?: UserInfo;
    created_on?: string;
    opt_level?: string;
    company_id?: number;
    modified_by?: UserInfo;
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
/** @returns {CreateMarketplaceOptinRequestSchema} */
declare function CreateMarketplaceOptinRequestSchema(): CreateMarketplaceOptinRequestSchema;
type CreateMarketplaceOptinRequestSchema = {
    brand_ids?: number[];
    company_id?: number;
    enabled?: boolean;
    opt_level?: string;
    platform?: string;
    store_ids?: number[];
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
/** @returns {CreateMarketplaceOptinResponseSchema} */
declare function CreateMarketplaceOptinResponseSchema(): CreateMarketplaceOptinResponseSchema;
type CreateMarketplaceOptinResponseSchema = {
    store_ids?: number[];
    brand_ids?: number[];
    company_id?: number;
    opt_level?: string;
    platform?: string;
    enabled?: boolean;
    created_by?: UserInfo;
    modified_by?: UserInfo;
    app_id?: string;
};
/** @returns {GetProductTemplateSlugItemsSchema} */
declare function GetProductTemplateSlugItemsSchema(): GetProductTemplateSlugItemsSchema;
type GetProductTemplateSlugItemsSchema = {
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
/** @returns {GetProductTemplateSlugResponseSchema} */
declare function GetProductTemplateSlugResponseSchema(): GetProductTemplateSlugResponseSchema;
type GetProductTemplateSlugResponseSchema = {
    page: Page;
    items: GetProductTemplateSlugItemsSchema[];
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
    created_by?: UserInfo;
    modified_by?: UserInfo;
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
/** @returns {AutocompleteErrorResponseSchemaSchema} */
declare function AutocompleteErrorResponseSchemaSchema(): AutocompleteErrorResponseSchemaSchema;
type AutocompleteErrorResponseSchemaSchema = {
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
/** @returns {CreateAppPriceFactoryResponseSchema} */
declare function CreateAppPriceFactoryResponseSchema(): CreateAppPriceFactoryResponseSchema;
type CreateAppPriceFactoryResponseSchema = {
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
    created_by?: UserInfo;
    modified_by?: UserInfo;
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
    created_by?: UserInfo;
    modified_by?: UserInfo;
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
/** @returns {GetAppPriceFactoryResponseSchema} */
declare function GetAppPriceFactoryResponseSchema(): GetAppPriceFactoryResponseSchema;
type GetAppPriceFactoryResponseSchema = {
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
/** @returns {CreatePriceFactoryProductRequestSchema} */
declare function CreatePriceFactoryProductRequestSchema(): CreatePriceFactoryProductRequestSchema;
type CreatePriceFactoryProductRequestSchema = {
    items?: CreateAppPriceFactoryProductItem[];
};
/** @returns {CreateAppPriceFactoryProductResponseSchema} */
declare function CreateAppPriceFactoryProductResponseSchema(): CreateAppPriceFactoryProductResponseSchema;
type CreateAppPriceFactoryProductResponseSchema = {
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
/** @returns {FailedRecordsData} */
declare function FailedRecordsData(): FailedRecordsData;
type FailedRecordsData = {
    item_id?: number;
    error?: string;
};
/** @returns {CreatePriceFactoryProductResponseSchema} */
declare function CreatePriceFactoryProductResponseSchema(): CreatePriceFactoryProductResponseSchema;
type CreatePriceFactoryProductResponseSchema = {
    total_records?: number;
    success_records?: number;
    failed_records?: number;
    failed_records_data?: FailedRecordsData[];
    stage?: string;
};
/** @returns {CreateAppPriceFactoryProductsResponseSchema} */
declare function CreateAppPriceFactoryProductsResponseSchema(): CreateAppPriceFactoryProductsResponseSchema;
type CreateAppPriceFactoryProductsResponseSchema = {
    items?: CreateAppPriceFactoryProductResponseSchema[];
    page?: Page;
};
/** @returns {CreateAppPriceFactoryProductBulkJobRequestSchema} */
declare function CreateAppPriceFactoryProductBulkJobRequestSchema(): CreateAppPriceFactoryProductBulkJobRequestSchema;
type CreateAppPriceFactoryProductBulkJobRequestSchema = {
    file_path?: string;
    file_type?: string;
    job_type?: string;
};
/** @returns {CreateAppPriceFactoryProductExportJobRequestSchema} */
declare function CreateAppPriceFactoryProductExportJobRequestSchema(): CreateAppPriceFactoryProductExportJobRequestSchema;
type CreateAppPriceFactoryProductExportJobRequestSchema = {
    sample_with_data?: boolean;
};
/** @returns {CreateAppPriceFactoryProductExportJobResponseSchema} */
declare function CreateAppPriceFactoryProductExportJobResponseSchema(): CreateAppPriceFactoryProductExportJobResponseSchema;
type CreateAppPriceFactoryProductExportJobResponseSchema = {
    job_type?: string;
    company_id?: number;
    file_type?: string;
    _id?: string;
    created_on?: string;
    modified_on?: string;
    created_by?: UserInfo;
    modified_by?: UserInfo;
    success_records?: number;
    application_id?: string;
    total_records?: number;
    factory_id?: string;
    is_active?: boolean;
    stage?: string;
    failed_records?: number;
};
/** @returns {AppPriceFactoryProductExportPollJobResponseSchema} */
declare function AppPriceFactoryProductExportPollJobResponseSchema(): AppPriceFactoryProductExportPollJobResponseSchema;
type AppPriceFactoryProductExportPollJobResponseSchema = {
    id?: string;
    stage?: string;
    is_active?: boolean;
    created_on?: string;
    total_records?: number;
    success_records?: number;
    failed_records?: number;
    job_type?: string;
};
/** @returns {CreateAppPriceFactoryProductExportJobPollResponseSchema} */
declare function CreateAppPriceFactoryProductExportJobPollResponseSchema(): CreateAppPriceFactoryProductExportJobPollResponseSchema;
type CreateAppPriceFactoryProductExportJobPollResponseSchema = {
    items?: AppPriceFactoryProductExportPollJobResponseSchema[];
    page?: Page;
};
/** @returns {CreateAppPriceFactoryProductBulkJobResponseSchema} */
declare function CreateAppPriceFactoryProductBulkJobResponseSchema(): CreateAppPriceFactoryProductBulkJobResponseSchema;
type CreateAppPriceFactoryProductBulkJobResponseSchema = {
    job_id?: string;
    status?: string;
    file_type?: string;
    stage?: string;
    created_by?: UserInfo;
    company_id?: number;
    job_type?: string;
    total_records?: number;
    is_active?: boolean;
    modified_on?: string;
    application_id?: string;
    factory_id?: string;
    modified_by?: UserInfo;
    created_on?: string;
    failed_records?: number;
    file_path?: string;
    success_records?: number;
    _id?: string;
};
/** @returns {CreateAppPriceFactoryProductBulkJobValidateResponseSchema} */
declare function CreateAppPriceFactoryProductBulkJobValidateResponseSchema(): CreateAppPriceFactoryProductBulkJobValidateResponseSchema;
type CreateAppPriceFactoryProductBulkJobValidateResponseSchema = {
    job_type?: string;
    file_type?: string;
    file_path?: string;
    job_id?: string;
    status?: string;
    created_on?: string;
    modified_on?: string;
    created_by?: UserInfo;
    modified_by?: UserInfo;
};
/** @returns {CreateAppPriceFactoryProductBulkJobPollResponseSchema} */
declare function CreateAppPriceFactoryProductBulkJobPollResponseSchema(): CreateAppPriceFactoryProductBulkJobPollResponseSchema;
type CreateAppPriceFactoryProductBulkJobPollResponseSchema = {
    status?: string;
    total_records?: number;
    success_records?: number;
    failed_records?: number;
    error_file?: string;
    created_on?: string;
    modified_on?: string;
    created_by?: UserInfo;
    modified_by?: UserInfo;
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
/** @returns {SynonymListErrorResponseSchemaSchema} */
declare function SynonymListErrorResponseSchemaSchema(): SynonymListErrorResponseSchemaSchema;
type SynonymListErrorResponseSchemaSchema = {
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
/** @returns {SynonymDeleteResponseSchemaSchema} */
declare function SynonymDeleteResponseSchemaSchema(): SynonymDeleteResponseSchemaSchema;
type SynonymDeleteResponseSchemaSchema = {
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
/** @returns {AppPriceByIdResponseSchema} */
declare function AppPriceByIdResponseSchema(): AppPriceByIdResponseSchema;
type AppPriceByIdResponseSchema = {
    data?: PriceGroupedByZone[];
};
/** @returns {TemplatesValidationResponseSchema} */
declare function TemplatesValidationResponseSchema(): TemplatesValidationResponseSchema;
type TemplatesValidationResponseSchema = {
    data?: TemplateValidationData;
    template_details?: TemplateDetails;
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
/** @returns {ValidationErrors} */
declare function ValidationErrors(): ValidationErrors;
type ValidationErrors = {
    errors: ValidationError[];
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
