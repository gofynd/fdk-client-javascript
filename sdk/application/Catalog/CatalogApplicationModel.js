const Joi = require("joi");

/**
 * @typedef ProductDetailCustomOrder
 * @property {number} [manufacturing_time] - The unit of time taken for manufacturing.
 * @property {string} [manufacturing_time_unit] - The unit of time required for
 *   manufacturing is defined in hours or days.
 * @property {boolean} [is_custom_order] - A boolean flag indicating whether MTO
 *   (Make to Order) is enabled or not.
 */

/**
 * @typedef Meta
 * @property {string} [source] - The source or origin of the media file, which
 *   could be a URL or a reference to where the media was obtained.
 */

/**
 * @typedef Media
 * @property {string} [url] - Absolute url for Media.
 * @property {string} [type] - The type of media, such as image, video.
 * @property {Meta} [meta]
 * @property {string} [alt] - Alternative text for the media, used for
 *   accessibility and SEO purposes.
 */

/**
 * @typedef ProductListingActionPage
 * @property {string} [type] - The type of action such as product, products,
 *   category, brand.
 * @property {Object} [query] - Query parameter if any to be added to the action.
 * @property {Object} [params] - Parameters that should be considered in path.
 */

/**
 * @typedef ProductListingAction
 * @property {string} [type] - Type of action to be taken e.g, page.
 * @property {ProductListingActionPage} [page]
 */

/**
 * @typedef ProductBrand
 * @property {number} [uid] - Unique identifier for the product brand.
 * @property {Media} [logo]
 * @property {string} [description] - Description of the product brand.
 * @property {string} [name] - Name of the product brand.
 * @property {ProductListingAction} [action]
 */

/**
 * @typedef ProductDepartment
 * @property {number} [uid] - Unique identifier for the product department.
 * @property {Media} [logo]
 * @property {string} [slug] - URL-friendly identifier for the product department.
 * @property {string} [name] - Name of the product department.
 */

/**
 * @typedef ProductCategoryMap
 * @property {ProductBrand} [l1]
 * @property {ProductBrand} [l2]
 * @property {ProductBrand} [l3]
 */

/**
 * @typedef NetQuantity
 * @property {Object} [unit] - The unit of measurement used for the net quantity
 *   of the product.
 * @property {number} [value] - The value of the net quantity of the product.
 */

/**
 * @typedef CustomMetaFields
 * @property {string} value - A value to store in the custom field.
 * @property {string} key - A key to store a custom field.
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [title] - The SEO title of the item.
 * @property {Object} [description] - The SEO description of the item.
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [value] - The value of the product attribute.
 * @property {string} [type] - The type or category of the product attribute.
 * @property {string} [key] - The key or name of the product attribute.
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {string} [title] - The title or name of the attribute group.
 * @property {ProductDetailAttribute[]} [details] - A list of product attributes
 *   within this group.
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [minimum] - The minimum quantity required for purchase.
 * @property {number} [maximum] - The maximum quantity allowed for purchase.
 * @property {number} [increment_unit] - The minimum quantity increment in which
 *   the item can be purchased.
 */

/**
 * @typedef Price
 * @property {number} [min] - The minimum price for the product across stores.
 * @property {string} [currency_symbol] - The currency symbol for the currency
 *   in which the product is available.
 * @property {string} [currency_code] - The currency code for the currency in
 *   which the product is available.
 * @property {number} [max] - The maximum price for the product across stores.
 */

/**
 * @typedef ProductListingPrice
 * @property {Price} [effective]
 * @property {Price} [marked]
 */

/**
 * @typedef ProductSizesPrice
 * @property {Price} [effective]
 * @property {Price} [marked]
 * @property {Price} [selling]
 */

/**
 * @typedef ProductDetail
 * @property {number} [uid] - Unique identifier for the product.
 * @property {ProductDetailCustomOrder} [custom_order]
 * @property {ProductCategoryMap} [category_map]
 * @property {NetQuantity} [net_quantity]
 * @property {number} [rating_count] - Count of ratings the product has received.
 * @property {CustomMetaFields[]} [_custom_meta] - Custom metadata fields
 *   associated with the product.
 * @property {string[]} [similars] - List of products marked similar to given product.
 * @property {string[]} [tags] - Tags associated with the product for better
 *   categorization.
 * @property {ApplicationItemSEO} [seo]
 * @property {string} [image_nature] - Type of the images associated with the
 *   product such as standard.
 * @property {boolean} [has_variant] - Indicates whether the product has variants.
 * @property {string} [item_type] - This field describes the type of item,
 *   indicating the category or nature of the product. Possible values are
 *   Standard, Composite, Wet, Digital.
 * @property {string} [description] - Detailed description of the product.
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes] - Grouped
 *   attributes detailing various characteristics of the product.
 * @property {Media[]} [medias] - Media files associated with the product.
 * @property {string} [color] - Color of the product, if applicable.
 * @property {string} [type] - Product type or classification.
 * @property {string} [product_online_date] - Date and time when the product was
 *   made available online.
 * @property {Object} [_custom_json] - Custom JSON object for additional product data.
 * @property {string} [item_code] - Item Code defined for the product.
 * @property {string} [name] - Name of the product.
 * @property {ApplicationItemMOQ} [moq]
 * @property {string} [short_description] - Brief description of the product.
 * @property {ProductBrand[]} [categories] - List of product categories
 *   associated with the product.
 * @property {Object} [attributes] - Additional attributes or characteristics of
 *   the product.
 * @property {string} [discount] - Discount applied to the product, if any.
 * @property {string[]} [tryouts] - Identifiers or names of tryout versions of
 *   the product.
 * @property {string} slug - URL-friendly identifier for the product.
 * @property {ProductListingAction} [action]
 * @property {number} [rating] - The rating of the product.
 * @property {boolean} [is_dependent] - Indicates whether the product can be
 *   sold as an individual product.
 * @property {string[]} [product_group_tag] - List of bundle/product grouping
 *   slugs mapped to the product.
 * @property {string[]} [highlights] - Key highlights or features of the product.
 * @property {ProductListingPrice} [price]
 * @property {ProductBrand} [brand]
 * @property {ProductDepartment} [department]
 * @property {string} [teaser_tag] - Teaser tag or short promotional phrase for
 *   the product.
 */

/**
 * @typedef ErrorResponseSchema
 * @property {string} [error] - A brief description of the error.
 */

/**
 * @typedef Dimension
 * @property {string} unit - The unit of dimension.
 * @property {number} height - The height of the product.
 * @property {number} length - The length of the product.
 * @property {number} width - The width of the product.
 * @property {boolean} is_default - Whether the dimension is the default one or not.
 */

/**
 * @typedef Weight
 * @property {string} unit - The unit of weight.
 * @property {number} shipping - The shipping weight of the product.
 * @property {boolean} is_default - Whether the weight is the default one or not.
 */

/**
 * @typedef DiscountMeta
 * @property {boolean} [timer] - Determines whether the discount countdown is
 *   visible or not.
 * @property {number} [start_timer_in_minutes] - The time in minutes before the
 *   discount ends when the countdown timer should start.
 * @property {string} [start] - The start time of the live discount.
 * @property {string} [end] - The end time of the live discount.
 */

/**
 * @typedef ProductSize
 * @property {number} [quantity] - The quantity of the product size available.
 * @property {Dimension} [dimension]
 * @property {Weight} [weight]
 * @property {boolean} [is_available] - Indicates whether the product size is
 *   available for purchase.
 * @property {string[]} [seller_identifiers] - List of identifiers used by
 *   sellers for the product size.
 * @property {string} [value] - The value or label representing the product size.
 * @property {string} [display] - Display name of the product size.
 */

/**
 * @typedef SizeChartValues
 * @property {string} [col_3] - Value for column 3.
 * @property {string} [col_6] - Value for column 6.
 * @property {string} [col_2] - Value for column 2.
 * @property {string} [col_4] - Value for column 4.
 * @property {string} [col_1] - Value for column 1.
 * @property {string} [col_5] - Value for column 5.
 */

/**
 * @typedef ColumnHeader
 * @property {boolean} [convertable] - Indicates if the column value can be
 *   converted or transformed.
 * @property {string} [value] - The value or title of the column header.
 */

/**
 * @typedef ColumnHeaders
 * @property {ColumnHeader} [col_3]
 * @property {ColumnHeader} [col_6]
 * @property {ColumnHeader} [col_2]
 * @property {ColumnHeader} [col_4]
 * @property {ColumnHeader} [col_1]
 * @property {ColumnHeader} [col_5]
 */

/**
 * @typedef SizeChart
 * @property {string} [unit] - Unit of measurement used in the size chart (e.g., in, cm).
 * @property {string} [image] - URL of the image representing the size chart.
 * @property {string} [size_tip] - Additional tip or guideline related to sizing.
 * @property {SizeChartValues[]} [sizes] - Array of size chart values for different sizes.
 * @property {string} [description] - Description related to the size chart.
 * @property {string} [title] - Title or name of the size chart.
 * @property {ColumnHeaders} [headers]
 */

/**
 * @typedef ProductSizeStores
 * @property {number} [count] - Number of stores where the product size is available.
 */

/**
 * @typedef ProductSizes
 * @property {ProductSize[]} [sizes] - List of available sizes for the product.
 * @property {ProductSizesPrice} [price]
 * @property {ProductSizesPrice} [price_per_piece]
 * @property {SizeChart} [size_chart]
 * @property {boolean} [sellable] - Whether the product sizes are available for sale.
 * @property {boolean} [multi_size] - Whether the product supports multiple sizes.
 * @property {string} [discount] - Discount information applicable to the product sizes.
 * @property {ProductSizeStores} [stores]
 * @property {DiscountMeta} [discount_meta]
 */

/**
 * @typedef AttributeDetail
 * @property {string} [logo] - URL or path to the logo associated with the attribute.
 * @property {string} [description] - A description of the attribute.
 * @property {string} [display] - Display name or label for the attribute.
 * @property {string} [key] - Unique key or identifier for the attribute.
 */

/**
 * @typedef AttributeMetadata
 * @property {string} [title] - Title or name of the attribute metadata.
 * @property {AttributeDetail[]} [details] - List of detailed information about
 *   attributes.
 */

/**
 * @typedef ProductsComparisonResponseSchema
 * @property {ProductDetail[]} [items] - List of product details for comparison.
 * @property {AttributeMetadata[]} [attributes_metadata] - Metadata about
 *   attributes used for comparing products.
 */

/**
 * @typedef ProductCompareResponseSchema
 * @property {string} [title] - Title or name of the comparison.
 * @property {ProductDetail[]} [items] - List of product details for comparison.
 * @property {AttributeMetadata[]} [attributes_metadata] - Metadata about
 *   attributes used for comparing products.
 * @property {string} [subtitle] - Subtitle or additional description for the comparison.
 */

/**
 * @typedef ProductFrequentlyComparedSimilarResponseSchema
 * @property {ProductCompareResponseSchema} [similars]
 */

/**
 * @typedef ProductVariantItemResponseSchema
 * @property {number} [uid] - Unique identifier for the product variant.
 * @property {string} [color_name] - Name of the color for the variant.
 * @property {string} [color] - Color code or representation for the variant.
 * @property {Media[]} [medias] - Media files associated with the product variant.
 * @property {boolean} [is_available] - Indicates whether the product variant is
 *   available for purchase.
 * @property {CustomMetaFields[]} [_custom_meta] - Custom metadata fields
 *   associated with the product.
 * @property {string} [name] - Name of the product variant.
 * @property {string} [value] - Value or label representing the product variant.
 * @property {string} [slug] - URL-friendly identifier for the product.
 * @property {Object} [_custom_json] - Custom JSON object for additional data
 *   related to the product.
 * @property {ProductListingAction} [action]
 */

/**
 * @typedef ProductVariantResponseSchema
 * @property {string} [display_type] - The type of display for the product
 *   variant (e.g., image, text, image, color).
 * @property {string} [header] - Header or title for the product variant section.
 * @property {string} [group_id] - Group ID used to group variants.
 * @property {ProductVariantItemResponseSchema[]} [items] - List of product variant items.
 * @property {string} [key] - Attribute identifier of the variant.
 * @property {string} [logo] - URL or path to the logo associated with the
 *   product variant.
 */

/**
 * @typedef ProductVariantsResponseSchema
 * @property {ProductVariantResponseSchema[]} [variants] - A list of product
 *   variant responses, each detailing a specific variant.
 */

/**
 * @typedef StoreDetail
 * @property {string} [name] - NA.
 * @property {string} [city] - NA.
 * @property {number} [id] - NA.
 * @property {string} [code] - NA.
 */

/**
 * @typedef ProductStockPrice
 * @property {number} [effective] - NA.
 * @property {string} [currency] - NA.
 * @property {number} [marked] - NA.
 */

/**
 * @typedef CompanyDetail
 * @property {string} [name] - NA.
 * @property {number} [id] - NA.
 */

/**
 * @typedef Seller
 * @property {number} [uid] - NA.
 * @property {string} [name] - NA.
 * @property {number} [count] - NA.
 */

/**
 * @typedef ProductStockStatusItem
 * @property {string} [uid] - NA.
 * @property {number} [quantity] - NA.
 * @property {StoreDetail} [store]
 * @property {string} [size] - NA.
 * @property {ProductStockPrice} [price]
 * @property {CompanyDetail} [company]
 * @property {number} [item_id] - NA.
 * @property {Seller} [seller]
 * @property {Identifier} [identifier]
 */

/**
 * @typedef ProductStockStatusResponseSchema
 * @property {ProductStockStatusItem[]} [items] - NA.
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
 * @typedef ProductStockPolling
 * @property {ProductStockStatusItem[]} [items] - NA.
 * @property {Page} page
 */

/**
 * @typedef ProductVariantListingResponseSchema
 * @property {string} [header] - Header or title for the product variant section.
 * @property {ProductVariantItemResponseSchema[]} [items] - List of Upto 5
 *   product variant items.
 * @property {number} [total] - The total number of product variants available.
 * @property {string} [key] - Attribute identifier of the variant.
 * @property {string} [display_type] - The type of display for the product
 *   variant (e.g., image, text, image, color).
 */

/**
 * @typedef ProductListingDetail
 * @property {number} [uid] - Unique identifier for the product.
 * @property {ProductDetailCustomOrder} [custom_order]
 * @property {string[]} [sizes] - Available sizes for the product.
 * @property {ProductCategoryMap} [category_map]
 * @property {NetQuantity} [net_quantity]
 * @property {number} [rating_count] - The number of ratings the product has received.
 * @property {CustomMetaFields[]} [_custom_meta] - Custom metadata fields
 *   associated with the product.
 * @property {string[]} [similars] - List of products marked similar to given product.
 * @property {string[]} [tags] - Tags associated with the product for better
 *   categorization.
 * @property {ApplicationItemSEO} [seo]
 * @property {string} [image_nature] - Type of the images associated with the
 *   product such as standard.
 * @property {boolean} [has_variant] - Indicates whether the product has variants.
 * @property {string} [item_type] - This field describes the type of item,
 *   indicating the category or nature of the product. Possible values are
 *   Standard, Composite, Wet, Digital.
 * @property {string} [description] - Detailed description of the product.
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes] - Grouped
 *   attributes detailing various characteristics of the product.
 * @property {Media[]} [medias] - Media files associated with the product.
 * @property {string} [color] - Color of the product, if applicable.
 * @property {string} [type] - Product type or classification.
 * @property {string} [product_online_date] - Date and time when the product was
 *   made available online.
 * @property {Object} [_custom_json] - Custom JSON object for additional product data.
 * @property {string} [item_code] - Item Code defined for the product.
 * @property {string} [name] - Name of the product.
 * @property {ApplicationItemMOQ} [moq]
 * @property {string} [short_description] - Brief description of the product.
 * @property {ProductBrand[]} [categories] - List of product categories
 *   associated with the product.
 * @property {boolean} [sellable] - Indicates whether the product is available for sale.
 * @property {Object} [attributes] - Additional attributes or characteristics of
 *   the product.
 * @property {ProductVariantListingResponseSchema[]} [variants] - List of
 *   product variants available for the product.
 * @property {string} [discount] - Discount details or percentage applied to the product.
 * @property {string[]} [tryouts] - List of tryout options available for the product.
 * @property {string[]} [identifiers] - List of seller identifiers for the product.
 * @property {string} slug - URL-friendly identifier for the product.
 * @property {ProductListingAction} [action]
 * @property {number} [rating] - Rating of the product.
 * @property {boolean} [is_dependent] - Indicates whether the product can be
 *   sold as an individual product.
 * @property {string[]} [product_group_tag] - List of bundle/product grouping
 *   slugs mapped to the product.
 * @property {string[]} [highlights] - Key highlights or features of the product.
 * @property {ProductListingPrice} [price]
 * @property {ProductBrand} [brand]
 * @property {string} [teaser_tag] - Teaser tag or short promotional phrase for
 *   the product.
 */

/**
 * @typedef ProductFiltersValue
 * @property {number} [min] - Minimum value for the range filter.
 * @property {string} [display_format] - Format in which the filter value is displayed.
 * @property {number} [selected_max] - The maximum value selected by the user
 *   for range filter.
 * @property {string} [value] - Value associated with the filter option.
 * @property {string} [query_format] - Format used for the filter value in queries.
 * @property {string} [currency_symbol] - Currency symbol for the price type filters.
 * @property {number} [selected_min] - The minimum value selected by the user
 *   for range filter.
 * @property {string} [currency_code] - Currency code for the currency used for
 *   price type filters.
 * @property {boolean} is_selected - Whether this filter value is currently selected.
 * @property {string} display - Display name or label for the filter value.
 * @property {number} [count] - Number of products that match this filter value.
 * @property {number} [max] - Maximum value of the filter range.
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} [logo] - URL or path to the logo associated with the filter key.
 * @property {string} name - Name or identifier of the filter key.
 * @property {string} [kind] - Type or category of the filter key (e.g., range,
 *   multivalued).
 * @property {string} display - Display name or label for the filter key.
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersValue[]} values - List of filter values associated
 *   with the filter key.
 * @property {ProductFiltersKey} key
 */

/**
 * @typedef ProductSortOn
 * @property {string} [logo] - URL or path to the logo associated with the sorting option.
 * @property {boolean} [is_selected] - Indicates whether this sorting option is
 *   currently selected.
 * @property {string} [name] - Name or identifier of the sorting option.
 * @property {string} [value] - Value used to specify the sorting order (e.g.,
 *   price_asc, discount_dsc).
 * @property {string} [display] - Display name or label for the sorting option.
 */

/**
 * @typedef ProductListingResponseSchema
 * @property {ProductListingDetail[]} [items] - List of product details included
 *   in the response.
 * @property {ProductFilters[]} [filters] - List of filters available for
 *   refining the product listings.
 * @property {Page} page
 * @property {ProductSortOn[]} [sort_on] - List of sorting options available for
 *   the product listings.
 */

/**
 * @typedef ImageUrls
 * @property {Media} [portrait]
 * @property {Media} [landscape]
 */

/**
 * @typedef BrandItem
 * @property {number} [uid] - The unique identifier for the brand.
 * @property {Media} [logo]
 * @property {string} [description] - Detailed description of the brand,
 *   including its history, values, product offerings, and other relevant information.
 * @property {ImageUrls} [banners]
 * @property {string[]} [departments] - Lists the departments or categories
 *   under which the brand's products are listed.
 * @property {string} [discount] - Details about any discounts currently
 *   available on the brand's products.
 * @property {string} [name] - Name of the brand.
 * @property {string} [slug] - URL-friendly version of the brand's name, used in
 *   the web address to access the brand's page on the platform.
 * @property {ProductListingAction} [action]
 */

/**
 * @typedef BrandListingResponseSchema
 * @property {BrandItem[]} [items] - List of brand items included in the response.
 * @property {Page} page
 */

/**
 * @typedef BrandDetailResponseSchema
 * @property {Media} [logo]
 * @property {number} [uid] - The unique identifier for the brand.
 * @property {string} [description] - Detailed description of the brand,
 *   including its history, values, product offerings, and other relevant information.
 * @property {ImageUrls} [banners]
 * @property {Object} [_custom_json] - Custom JSON data related to the brand,
 *   allowing for additional metadata.
 * @property {string} [name] - Name of the brand.
 */

/**
 * @typedef CategoryBanner
 * @property {Media} portrait
 * @property {Media} landscape
 */

/**
 * @typedef ThirdLevelChild
 * @property {number} [uid] - Unique identifier for the L3 category.
 * @property {ImageUrls} [banners]
 * @property {Object[]} [childs] - List of categories under the L3 category.
 * @property {Object} [_custom_json] - Custom JSON data related to the L3
 *   category, allowing for additional metadata.
 * @property {string} [name] - Name of the L3 category.
 * @property {string} [slug] - Slug or URL-friendly identifier for the L3 category.
 * @property {ProductListingAction} [action]
 */

/**
 * @typedef SecondLevelChild
 * @property {number} [uid] - Unique identifier for the L2 category.
 * @property {ImageUrls} [banners]
 * @property {ThirdLevelChild[]} [childs] - List of categories under the L2 category.
 * @property {Object} [_custom_json] - Custom JSON data related to the L2
 *   category, allowing for additional metadata.
 * @property {string} [name] - Name of the L2 category.
 * @property {string} [slug] - Slug or URL-friendly identifier for the L2 category.
 * @property {ProductListingAction} [action]
 */

/**
 * @typedef Child
 * @property {number} [uid] - Unique identifier for the L1 category.
 * @property {ImageUrls} [banners]
 * @property {SecondLevelChild[]} [childs] - List of categories under the L1 category.
 * @property {Object} [_custom_json] - Custom JSON data related to the L1
 *   category, allowing for additional metadata.
 * @property {string} [name] - Name of the L1 category.
 * @property {string} [slug] - Slug or URL-friendly identifier for the L1 category.
 * @property {ProductListingAction} [action]
 */

/**
 * @typedef CategoryItems
 * @property {number} uid - Unique identifier for the category.
 * @property {CategoryBanner} banners
 * @property {Child[]} [childs] - List of L1 categories under the main category.
 * @property {string} name - Name of the category.
 * @property {string} slug - Slug or URL-friendly identifier for the category.
 * @property {ProductListingAction} action
 */

/**
 * @typedef DepartmentCategoryTree
 * @property {CategoryItems[]} [items] - List of categories within the department.
 * @property {string} department - Name of the department.
 */

/**
 * @typedef DepartmentIdentifier
 * @property {number} [uid] - Unique identifier for the department.
 * @property {string} [slug] - Slug or URL-friendly identifier for the department.
 */

/**
 * @typedef CategoryListingResponseSchema
 * @property {DepartmentCategoryTree[]} [data] - List of department category trees.
 * @property {DepartmentIdentifier[]} [departments] - List of departments.
 */

/**
 * @typedef CategoryMetaResponseSchema
 * @property {Media} [logo]
 * @property {number} [uid] - Unique identifier for the category.
 * @property {ImageUrls} [banners]
 * @property {Object} [_custom_json] - Custom JSON data related to the category,
 *   allowing for additional metadata.
 * @property {string} [name] - Name of the category.
 */

/**
 * @typedef HomeListingResponseSchema
 * @property {ProductListingDetail[]} [items] - List of product details
 *   displayed on the home page.
 * @property {Page} page
 * @property {string} [message] - Message related to the home listing response.
 */

/**
 * @typedef Department
 * @property {number} [uid] - Unique identifier for the department.
 * @property {Media} [logo]
 * @property {number} [priority_order] - Specifies the display order of the
 *   department, determining its position in lists and navigation menus based on
 *   priority.
 * @property {string} [name] - Name of the department.
 * @property {string} [slug] - URL-friendly version of the department's name,
 *   used in the web address to access the department's page on the platform.
 */

/**
 * @typedef DepartmentResponseSchema
 * @property {Department[]} [items] - List of department detail objects.
 */

/**
 * @typedef AutocompleteItem
 * @property {Media} [logo]
 * @property {string} [display] - Text or value displayed for the autocomplete item.
 * @property {string} [type] - The type of action such as product, products,
 *   category, brand.
 * @property {Object} [_custom_json] - Custom JSON data related to the
 *   autocomplete item, allowing for additional metadata.
 * @property {ProductListingAction} [action]
 */

/**
 * @typedef AutoCompleteResponseSchema
 * @property {AutocompleteItem[]} [items] - List of autocomplete items suggested
 *   based on user input.
 */

/**
 * @typedef CollectionQuery
 * @property {string} op - The operator used for filtering the collection.
 * @property {Object[]} value - The values used for filtering based on the attribute.
 * @property {string} attribute - The attribute on which the filter is applied.
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {boolean} [is_active] - Indicates whether the collection is currently active.
 * @property {string} [uid] - The unique identifier for the collection.
 * @property {string} [sort_on] - The attribute by which the collection items are sorted.
 * @property {Object} [meta] - Additional metadata related to the collection.
 * @property {ImageUrls} [banners]
 * @property {Object} [cron] - Cron details for scheduling related to the collection.
 * @property {Object} [_schedule] - The `Schedule` schema defines the timing and
 *   details for recurring or one-time tasks. It includes information on when
 *   the job should start and end, the frequency of the task, and any additional
 *   metadata. This schema helps in scheduling jobs or tasks based on specified
 *   timings and durations.
 * @property {CollectionQuery[]} [query] - A list of queries used to filter the
 *   collection.
 * @property {string} [description] - A detailed description of the collection.
 * @property {string} [type] - Type of collections e.g query, items.
 * @property {Object} [_custom_json] - Custom JSON data associated with the collection.
 * @property {string} [name] - The name of the collection.
 * @property {boolean} [allow_sort] - Indicates if sorting is allowed for this collection.
 * @property {string[]} [visible_facets_keys] - Keys of the facets visible for
 *   filtering within the collection.
 * @property {Object} [badge] - Badge information associated with the collection.
 * @property {string} [slug] - The URL-friendly identifier for the collection.
 * @property {ProductListingAction} [action]
 * @property {boolean} [allow_facets] - Indicates if facets are allowed for
 *   filtering within the collection.
 * @property {Media} [logo]
 * @property {number} [priority] - Priority level of the collection for sorting
 *   or display purposes.
 * @property {string[]} [tags] - Tags associated with the collection.
 * @property {string} [app_id] - Application ID associated with the collection.
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {string} [name] - The name of the tag. This is typically used as a
 *   label for filtering purposes.
 * @property {boolean} [is_selected] - A flag indicating whether the tag is
 *   currently selected as a filter option.
 * @property {string} [display] - The display name of the tag. This may be a
 *   user-friendly version of the tag name shown in the UI.
 */

/**
 * @typedef CollectionListingFilterType
 * @property {string} [name] - The name of the filter type. This indicates the
 *   type of filtering being applied, such as items, query.
 * @property {boolean} [is_selected] - A flag indicating whether this filter
 *   type is currently selected as a filter option.
 * @property {string} [display] - The display name of the filter type. This is
 *   the user-friendly name shown in the UI for the filter type.
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterTag[]} [tags] - An array of tag filters
 *   available for the collection listings. Each tag allows for filtering based
 *   on specific attributes.
 * @property {CollectionListingFilterType[]} [type] - An array of filter types
 *   available for the collection listings. Each type represents a different
 *   category or attribute for filtering.
 */

/**
 * @typedef GetCollectionListingResponseSchema
 * @property {GetCollectionDetailNest[]} [items] - An array of collection
 *   details. Each item in the array represents a collection with various
 *   attributes and configurations.
 * @property {CollectionListingFilter} [filters]
 * @property {Page} page
 */

/**
 * @typedef CollectionDetailResponseSchema
 * @property {boolean} [is_active] - Indicates whether the collection is active.
 * @property {string} [sort_on] - Criteria used to sort the items within the
 *   collection, such as price, popularity, or newest first.
 * @property {Object} [meta] - Metadata associated with the collection.
 * @property {ImageUrls} [banners]
 * @property {Object} [cron] - Cron schedule details related to the collection,
 *   if applicable.
 * @property {Object} [_schedule] - Schedule details for the collection,
 *   including timing and duration information.
 * @property {CollectionQuery[]} [query] - Search or filter query used to
 *   dynamically generate the collection based on specific criteria or conditions.
 * @property {string} [description] - Detailed description of the collection,.
 * @property {string} [type] - Type of collection, specifying the nature or
 *   category of the collection.
 * @property {Object} [_custom_json] - Custom JSON object containing additional
 *   properties specific to the collection.
 * @property {string} [name] - The name of the collection.
 * @property {boolean} [allow_sort] - Indicates if sorting is allowed for this collection.
 * @property {string[]} [visible_facets_keys] - Keys of the facets visible for
 *   filtering within the collection.
 * @property {Object} [badge] - Badge information associated with the collection.
 * @property {string} [slug] - The URL-friendly identifier for the collection.
 * @property {boolean} [allow_facets] - Indicates if facets are allowed for
 *   filtering within the collection.
 * @property {Media} [logo]
 * @property {number} [priority] - Priority level of the collection for sorting
 *   or display purposes.
 * @property {string[]} [tag] - Tags associated with the collection.
 * @property {string} [app_id] - Application ID associated with the collection.
 */

/**
 * @typedef GetFollowListingResponseSchema
 * @property {ProductListingDetail[]} items - An array of product details that
 *   the user is following. Each item includes information such as the product
 *   name, price, and other attributes.
 * @property {Page} page
 */

/**
 * @typedef FollowPostResponseSchema
 * @property {string} message - A message indicating the result of the follow or
 *   unfollow operation. This could be a confirmation message or an error message.
 * @property {string} id - A unique identifier for the follow operation, which
 *   can be used to reference or track the follow status.
 */

/**
 * @typedef FollowerCountResponseSchema
 * @property {number} [count] - The number of followers for the item. This count
 *   indicates how many users are following the specified item.
 */

/**
 * @typedef FollowIdsData
 * @property {number[]} [products] - An array of IDs representing the products
 *   that the user is following.
 * @property {number[]} [collections] - An array of IDs representing the
 *   collections that the user is following.
 * @property {number[]} [brands] - An array of IDs representing the brands that
 *   the user is following.
 */

/**
 * @typedef FollowIdsResponseSchema
 * @property {FollowIdsData} [data]
 */

/**
 * @typedef LatLong
 * @property {number[]} [coordinates] - An array containing the latitude and
 *   longitude values of the location.
 * @property {string} [type] - The type of geographic coordinate system used.
 *   For example, "Point" indicates a single point in a geographic coordinate system.
 */

/**
 * @typedef StoreContact
 * @property {string} [number] - The contact number of the Store Manager.
 * @property {number} [country_code] - The country code for the contact number.
 */

/**
 * @typedef Store
 * @property {number} [uid] - A unique identifier for the store.
 * @property {string} [store_email] - The manager's email address for the store.
 * @property {string} [state] - The state or province where the store is located.
 * @property {string} [country] - The country where the store is located.
 * @property {number} [pincode] - The postal code or zip code for the store's location.
 * @property {string} [city] - The city where the store is located.
 * @property {string} [address] - The street address of the store.
 * @property {string} [store_code] - A unique code or identifier for the store,
 *   often used for internal reference.
 * @property {LatLong} [lat_long]
 * @property {string} [name] - The name of the store.
 * @property {string[]} [tags] - The list of tags mapped to the store.
 * @property {StoreContact[]} [contacts] - List of contact numbers for the store.
 */

/**
 * @typedef StoreListingResponseSchema
 * @property {Store[]} items - An array of store details. Each store includes
 *   information such as name, address, and geographic coordinates.
 * @property {Page} page
 */

/**
 * @typedef StoreDepartments
 * @property {number} [uid] - The unique identifier assigned to the store department.
 * @property {Object} [logo] - An object containing information about the store
 *   department's logo, such as the URL or other related media details.
 * @property {number} [priority_order] - The priority or ranking of the
 *   department within the store. This field is used to determine the order in
 *   which departments are displayed or processed.
 * @property {string} [name] - The name of the store department, which is
 *   typically used for display and identification purposes.
 * @property {string} [slug] - A URL-friendly identifier for the store
 *   department, often used in web addresses and routing to uniquely identify
 *   the department.
 */

/**
 * @typedef CompanyStore
 * @property {number} [uid] - The unique identifier for the company store.
 * @property {string} [name] - The name of the company store.
 * @property {string} [company_type] - The type of company, which can be one of
 *   the following: - `distributor`: Distributor - `franchise`: Franchise -
 *   `mbo`: MBO (Managed Business Operations) - `manufacturer-owner`: Owner/Manufacturer.
 * @property {string} [business_type] - The type of business structure, which
 *   can be one of the following: - `Private`: Private Limited Company -
 *   `LLP/Partnership`: Limited Liability Partnership or Partnership -
 *   `HUF/Proprietorship`: Hindu Undivided Family or Proprietorship.
 */

/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code - The country code of the seller's phone number.
 * @property {string} number - The seller's contact number.
 */

/**
 * @typedef StoreManagerSchema
 * @property {string} [name] - The name of the store manager.
 * @property {string} [email] - The email address of the store manager.
 * @property {SellerPhoneNumber} [mobile_no]
 */

/**
 * @typedef StoreAddressSchema
 * @property {number} [latitude] - The latitude of the store's location.
 * @property {string} [state] - The state where the store is located.
 * @property {string} [country] - The country where the store is located.
 * @property {string} [landmark] - A landmark near the store.
 * @property {string} [address1] - The address line 1 of the store.
 * @property {number} [pincode] - The postal code for the store's location.
 * @property {string} [city] - The city where the store is located.
 * @property {number} [longitude] - The longitude of the store's location.
 * @property {string} [address2] - The address line2 of the store.
 */

/**
 * @typedef AppStore
 * @property {number} [uid] - The unique identifier for the application store.
 * @property {StoreDepartments[]} [departments] - A list of departments within the store.
 * @property {CompanyStore} [company]
 * @property {StoreManagerSchema} [manager]
 * @property {string} [store_code] - A unique code for identifying the store.
 * @property {StoreAddressSchema} [address]
 * @property {string} [name] - The name of the store.
 * @property {SellerPhoneNumber[]} [contact_numbers] - A list of contact numbers
 *   for the store.
 */

/**
 * @typedef ApplicationStoreListing
 * @property {Object[]} [filters] - A list of filters applied to the store listing.
 * @property {AppStore[]} [items] - A list of application stores.
 * @property {Page} [page]
 */

/**
 * @typedef Time
 * @property {number} [hour] - The hour part of the time.
 * @property {number} [minute] - The minute part of the time.
 */

/**
 * @typedef StoreTiming
 * @property {boolean} [open] - Indicates if the store is open on this day.
 * @property {Time} [closing]
 * @property {string} [weekday] - The day of the week.
 * @property {Time} [opening]
 */

/**
 * @typedef StoreDetails
 * @property {number} [uid] - The unique identifier for the store.
 * @property {StoreDepartments[]} [departments] - A list of departments within the store.
 * @property {CompanyStore} [company]
 * @property {StoreManagerSchema} [manager]
 * @property {string} [store_code] - A unique code for identifying the store.
 * @property {StoreTiming[]} [timing] - The opening and closing times for the
 *   store throughout the week.
 * @property {StoreAddressSchema} [address]
 * @property {Object} [_custom_json] - Custom JSON data for the store.
 * @property {string} [name] - The name of the store.
 * @property {SellerPhoneNumber[]} [contact_numbers] - A list of contact numbers
 *   for the store.
 */

/**
 * @typedef UserDetail
 * @property {boolean} [super_user] - A flag indicating whether the user is a super user.
 * @property {string} [contact] - The contact details of the user.
 * @property {string} username - The username of the user.
 * @property {string} user_id - The user ID of the user.
 */

/**
 * @typedef Size
 * @property {number} [quantity] - The quantity of this size available.
 * @property {Object} [value] - The value of the size.
 * @property {Object} [display] - The display string for the size.
 * @property {boolean} [is_available] - Whether or not this size is available.
 */

/**
 * @typedef ProductGroupPrice
 * @property {number} [max_effective] - The maximum effective price of the product group.
 * @property {number} [min_effective] - The minimum effective price of the product group.
 * @property {number} [min_marked] - The minimum marked price of the product group.
 * @property {Object} [currency] - The currency code for the prices.
 * @property {number} [max_marked] - The maximum marked price of the product group.
 */

/**
 * @typedef ProductDetails
 * @property {Object} [template_tag] - The template tag of the product.
 * @property {number} [rating_count] - The number of ratings the product has received.
 * @property {Object} [image_nature] - The nature of the product's images.
 * @property {boolean} [has_variant] - Whether or not the product has a variant.
 * @property {Object} [description] - The long description of the product.
 * @property {boolean} [out_of_stock] - Whether or not the product is out of stock.
 * @property {number} [hsn_code] - The HSN code of the product.
 * @property {Object} [grouped_attributes] - A dictionary of grouped product attributes.
 * @property {Object} [item_code] - The item code of the product.
 * @property {Object} [name] - The name of the product.
 * @property {Object} [country_of_origin] - The country of origin for the product.
 * @property {Object} [short_description] - The short description of the product.
 * @property {Object[]} [media] - A list of media objects for the product.
 * @property {Object} [attributes] - A dictionary of product attributes.
 * @property {boolean} [is_set] - Whether or not the product is a set of items.
 * @property {Object[]} [images] - A list of image URLs for the product.
 * @property {Object} [slug] - The slug of the product.
 * @property {number} [rating] - The rating of the product.
 * @property {Identifier} [identifier]
 * @property {Object[]} [highlights] - A list of highlights for the product.
 * @property {number} [brand_uid] - The unique ID of the product's brand.
 */

/**
 * @typedef ProductInGroup
 * @property {boolean} [auto_add_to_cart] - Whether the product should be
 *   automatically added to the cart.
 * @property {number} max_quantity - The maximum quantity of the product that
 *   can be added to the cart.
 * @property {Size[]} [sizes] - The available sizes for the product.
 * @property {ProductGroupPrice} [price] - The price details for the product.
 * @property {boolean} [auto_select] - Whether the product should be
 *   automatically selected.
 * @property {ProductDetails} [product_details] - The details of the product.
 * @property {number} [min_quantity] - The minimum quantity of the product that
 *   can be added to the cart.
 * @property {boolean} [allow_remove] - Whether the product can be removed from the cart.
 * @property {number} product_uid - The unique ID of the product in the group.
 */

/**
 * @typedef ProductGroupingModel
 * @property {string} [logo] - The URL for the logo of the product group.
 * @property {boolean} [is_active] - Whether the product grouping is active.
 * @property {Object} [meta] - A dictionary containing metadata information.
 * @property {UserDetail} [verified_by] - User details of the verifier of the
 *   document, if applicable.
 * @property {string} created_on - Timestamp of the creation of the document.
 * @property {number} [company_id] - The ID of the company that owns the product grouping.
 * @property {Object[]} [page_visibility] - A list of page visibilities of the
 *   product grouping.
 * @property {string} modified_on - Timestamp of the last modification of the document.
 * @property {UserDetail} [created_by] - User details of the creator of the document.
 * @property {UserDetail} [modified_by] - User details of the last modifier of
 *   the document.
 * @property {ProductInGroup[]} products - A list of products in the grouping.
 * @property {boolean} [same_store_assignment] - Whether the products are
 *   assigned to the same store.
 * @property {Object} [_id] - Unique identifier of the product grouping.
 * @property {Object} name - The name of the product grouping.
 * @property {Object} [choice] - The choice of the product grouping.
 * @property {Object} [slug] - The unique identifier for the product grouping.
 * @property {string} [verified_on] - Timestamp of when the document was
 *   verified, if applicable.
 */

/**
 * @typedef ProductBundle
 * @property {ProductGroupingModel[]} [items] - Represents list of
 *   bundles/product groupings.
 */

/**
 * @typedef StoreV3
 * @property {number} [uid] - The unique identifier for the store.
 * @property {string} [name] - The name of the store.
 * @property {number} [count] - The count associated with the store.
 */

/**
 * @typedef ArticleAssignmentV3
 * @property {string} [strategy] - Method used for article assignment, such as
 *   optimal, fast-delivery, low-price, or manual.
 * @property {string} [level] - Scope of assignment, which can be
 *   multi-companies, single-company, or single-store.
 */

/**
 * @typedef StrategyWiseListingSchemaV3
 * @property {number} [distance] - Distance between bullfight location and
 *   customer location in kilometers. .
 * @property {number} [pincode] - Pincode mapped based on strategy.
 * @property {number} [tat] - Turn around Time to deliver the product with this strategy.
 * @property {number} [quantity] - The quantity available for assigned store.
 */

/**
 * @typedef DetailsSchemaV3
 * @property {string} [value] - The value of the attribute.
 * @property {string} [type] - The type of detail e.g, text.
 * @property {string} [key] - The attribute key associated with the size.
 */

/**
 * @typedef SellerGroupAttributes
 * @property {string} [title] - The title of the attribute group.
 * @property {DetailsSchemaV3[]} [details] - Detail of the attribute.
 */

/**
 * @typedef ReturnConfigSchemaV3
 * @property {string} [unit] - The unit for the return configuration.
 * @property {boolean} [returnable] - Indicates if the item is returnable.
 * @property {number} [time] - The time duration for the return policy.
 */

/**
 * @typedef ProductSetDistributionSizeV3
 * @property {number} [pieces] - The number of pieces available in this size.
 * @property {string} [size] - The size of the product.
 */

/**
 * @typedef ProductSetDistributionV3
 * @property {ProductSetDistributionSizeV3[]} [sizes] - A list of size
 *   distributions in the product set.
 */

/**
 * @typedef ProductSetV3
 * @property {number} [quantity] - The quantity of products in the set.
 * @property {ProductSetDistributionV3} [size_distribution]
 */

/**
 * @typedef ProductStockPriceV3
 * @property {number} [effective] - The effective or final price for the product
 *   at the given pincode.
 * @property {string} [currency_code] - The currency code for which the product
 *   is available.
 * @property {string} [currency_symbol] - The currency symbol for the currency
 *   in which the product is available.
 * @property {number} [marked] - The marked price of the product.
 * @property {number} [selling] - The selling price of the product.
 */

/**
 * @typedef ProductStockUnitPriceV3
 * @property {string} [unit] - The unit of measure for the product.
 * @property {string} [currency_symbol] - The currency symbol for the unit price.
 * @property {string} [currency_code] - The currency code for the unit price.
 * @property {number} [price] - The unit price of the product.
 */

/**
 * @typedef MarketPlaceSttributesSchemaV3
 * @property {string} [title] - The title of the attribute.
 * @property {DetailsSchemaV3[]} [details] - Detail of the attribute.
 */

/**
 * @typedef SellerV3
 * @property {number} [uid] - The unique identifier for the seller.
 * @property {string} [name] - The name of the seller.
 * @property {number} [count] - The store count serviceable by this seller.
 */

/**
 * @typedef PromiseSchema
 * @property {string} [min] - The minimum promise time.
 * @property {string} [max] - The maximum promise time.
 */

/**
 * @typedef ProductSizePriceResponseV3
 * @property {StoreV3} [store]
 * @property {ArticleAssignmentV3} [article_assignment]
 * @property {boolean} [is_cod] - Whether Cash on Delivery (COD) is available
 *   for this product. It is true if COD is available and false otherwise.
 * @property {StrategyWiseListingSchemaV3[]} [strategy_wise_listing] - Details
 *   about serviceability attributes.
 * @property {number} [quantity] - Available quantity of the product in stock.
 *   It shows the number of units available for purchase.
 * @property {string} [item_type] - Type of item, indicating the category or
 *   nature of the product. Possible values are Standard, Composite, Wet, Digital.
 * @property {SellerGroupAttributes[]} [grouped_attributes] - Collection of
 *   attributes grouped together, which provides detailed characteristics of the
 *   product, such as color, size, material, etc.
 * @property {ReturnConfigSchemaV3} [return_config]
 * @property {string} [article_id] - This unique identifier is assigned to the
 *   specific article. This represents item x size x location.
 * @property {boolean} [is_gift] - Whether the product can be purchased as a
 *   gift. It is true if the product is available for gifting and false otherwise.
 * @property {ProductSetV3} [set]
 * @property {number} [seller_count] - Number of sellers offering this product.
 *   It indicates the level of competition and availability from different sellers.
 * @property {ProductStockPriceV3} [price_per_piece]
 * @property {DiscountMeta} [discount_meta]
 * @property {string} [discount] - Amount or percentage of discount applied to
 *   the product's price, showing the savings for the customer.
 * @property {number[]} [long_lat] - Longitude and latitude coordinates,
 *   possibly indicating the location of the store or warehouse where the
 *   product is stocked.
 * @property {string} [special_badge] - Special badges or labels assigned to the
 *   product, such as "Bestseller," "New Arrival," or "Limited Edition.".
 * @property {ProductStockPriceV3} [price]
 * @property {ProductStockUnitPriceV3} [price_per_unit]
 * @property {number} [pincode] - Postal code or zip code for which the
 *   product's availability and delivery options are being checked.
 * @property {MarketPlaceSttributesSchemaV3[]} [marketplace_attributes] -
 *   Attributes specific to the marketplace, such as ratings, reviews, shipping
 *   options, and other marketplace-specific details.
 * @property {SellerV3} [seller]
 * @property {PromiseSchema} [delivery_promise]
 */

/**
 * @typedef ProductSizeSellerFilterSchemaV3
 * @property {string} [name] - The name of the store/seller.
 * @property {boolean} [is_selected] - Whether this filter criterion is selected.
 * @property {string} [value] - The value associated with this store/seller.
 */

/**
 * @typedef ProductSizeSellersResponseV3
 * @property {ProductSizePriceResponseV3[]} [items] - A list of products with
 *   size and price details available from various sellers.
 * @property {Page} page
 * @property {ProductSizeSellerFilterSchemaV3[]} [sort_on] - A list of sorting
 *   and filtering criteria applied to the sellers' data.
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

class CatalogApplicationModel {
  /** @returns {ProductDetailCustomOrder} */
  static ProductDetailCustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),
      manufacturing_time_unit: Joi.string().allow(""),
      is_custom_order: Joi.boolean(),
    });
  }

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  /** @returns {Media} */
  static Media() {
    return Joi.object({
      url: Joi.string().allow(""),
      type: Joi.string().allow(""),
      meta: CatalogApplicationModel.Meta(),
      alt: Joi.string().allow(""),
    });
  }

  /** @returns {ProductListingActionPage} */
  static ProductListingActionPage() {
    return Joi.object({
      type: Joi.string().allow(""),
      query: Joi.object().pattern(/\S/, Joi.any()),
      params: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {ProductListingAction} */
  static ProductListingAction() {
    return Joi.object({
      type: Joi.string().allow(""),
      page: CatalogApplicationModel.ProductListingActionPage(),
    });
  }

  /** @returns {ProductBrand} */
  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),
      logo: CatalogApplicationModel.Media(),
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      action: CatalogApplicationModel.ProductListingAction(),
    });
  }

  /** @returns {ProductDepartment} */
  static ProductDepartment() {
    return Joi.object({
      uid: Joi.number(),
      logo: CatalogApplicationModel.Media(),
      slug: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ProductCategoryMap} */
  static ProductCategoryMap() {
    return Joi.object({
      l1: CatalogApplicationModel.ProductBrand(),
      l2: CatalogApplicationModel.ProductBrand(),
      l3: CatalogApplicationModel.ProductBrand(),
    });
  }

  /** @returns {NetQuantity} */
  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),
      value: Joi.number(),
    });
  }

  /** @returns {CustomMetaFields} */
  static CustomMetaFields() {
    return Joi.object({
      value: Joi.string().allow("").required(),
      key: Joi.string().allow("").required(),
    });
  }

  /** @returns {ApplicationItemSEO} */
  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.any(),
      description: Joi.any(),
    });
  }

  /** @returns {ProductDetailAttribute} */
  static ProductDetailAttribute() {
    return Joi.object({
      value: Joi.string().allow(""),
      type: Joi.string().allow(""),
      key: Joi.string().allow(""),
    });
  }

  /** @returns {ProductDetailGroupedAttribute} */
  static ProductDetailGroupedAttribute() {
    return Joi.object({
      title: Joi.string().allow(""),
      details: Joi.array().items(
        CatalogApplicationModel.ProductDetailAttribute()
      ),
    });
  }

  /** @returns {ApplicationItemMOQ} */
  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),
      maximum: Joi.number(),
      increment_unit: Joi.number(),
    });
  }

  /** @returns {Price} */
  static Price() {
    return Joi.object({
      min: Joi.number(),
      currency_symbol: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
      max: Joi.number(),
    });
  }

  /** @returns {ProductListingPrice} */
  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogApplicationModel.Price(),
      marked: CatalogApplicationModel.Price(),
    });
  }

  /** @returns {ProductSizesPrice} */
  static ProductSizesPrice() {
    return Joi.object({
      effective: CatalogApplicationModel.Price(),
      marked: CatalogApplicationModel.Price(),
      selling: CatalogApplicationModel.Price(),
    });
  }

  /** @returns {ProductDetail} */
  static ProductDetail() {
    return Joi.object({
      uid: Joi.number(),
      custom_order: CatalogApplicationModel.ProductDetailCustomOrder(),
      category_map: CatalogApplicationModel.ProductCategoryMap(),
      net_quantity: CatalogApplicationModel.NetQuantity(),
      rating_count: Joi.number(),
      _custom_meta: Joi.array().items(
        CatalogApplicationModel.CustomMetaFields()
      ),
      similars: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      seo: CatalogApplicationModel.ApplicationItemSEO(),
      image_nature: Joi.string().allow(""),
      has_variant: Joi.boolean(),
      item_type: Joi.string().allow(""),
      description: Joi.string().allow(""),
      grouped_attributes: Joi.array().items(
        CatalogApplicationModel.ProductDetailGroupedAttribute()
      ),
      medias: Joi.array().items(CatalogApplicationModel.Media()),
      color: Joi.string().allow(""),
      type: Joi.string().allow(""),
      product_online_date: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      item_code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      moq: CatalogApplicationModel.ApplicationItemMOQ(),
      short_description: Joi.string().allow(""),
      categories: Joi.array().items(CatalogApplicationModel.ProductBrand()),
      attributes: Joi.object().pattern(/\S/, Joi.any()),
      discount: Joi.string().allow(""),
      tryouts: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow("").required(),
      action: CatalogApplicationModel.ProductListingAction(),
      rating: Joi.number(),
      is_dependent: Joi.boolean(),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      highlights: Joi.array().items(Joi.string().allow("")),
      price: CatalogApplicationModel.ProductListingPrice(),
      brand: CatalogApplicationModel.ProductBrand(),
      department: CatalogApplicationModel.ProductDepartment(),
      teaser_tag: Joi.string().allow(""),
    });
  }

  /** @returns {ErrorResponseSchema} */
  static ErrorResponseSchema() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  /** @returns {Dimension} */
  static Dimension() {
    return Joi.object({
      unit: Joi.string().allow("").required(),
      height: Joi.number().required(),
      length: Joi.number().required(),
      width: Joi.number().required(),
      is_default: Joi.boolean().required(),
    });
  }

  /** @returns {Weight} */
  static Weight() {
    return Joi.object({
      unit: Joi.string().allow("").required(),
      shipping: Joi.number().required(),
      is_default: Joi.boolean().required(),
    });
  }

  /** @returns {DiscountMeta} */
  static DiscountMeta() {
    return Joi.object({
      timer: Joi.boolean(),
      start_timer_in_minutes: Joi.number(),
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {ProductSize} */
  static ProductSize() {
    return Joi.object({
      quantity: Joi.number(),
      dimension: CatalogApplicationModel.Dimension(),
      weight: CatalogApplicationModel.Weight(),
      is_available: Joi.boolean(),
      seller_identifiers: Joi.array().items(Joi.string().allow("")),
      value: Joi.string().allow(""),
      display: Joi.string().allow(""),
    });
  }

  /** @returns {SizeChartValues} */
  static SizeChartValues() {
    return Joi.object({
      col_3: Joi.string().allow(""),
      col_6: Joi.string().allow(""),
      col_2: Joi.string().allow(""),
      col_4: Joi.string().allow(""),
      col_1: Joi.string().allow(""),
      col_5: Joi.string().allow(""),
    });
  }

  /** @returns {ColumnHeader} */
  static ColumnHeader() {
    return Joi.object({
      convertable: Joi.boolean(),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ColumnHeaders} */
  static ColumnHeaders() {
    return Joi.object({
      col_3: CatalogApplicationModel.ColumnHeader(),
      col_6: CatalogApplicationModel.ColumnHeader(),
      col_2: CatalogApplicationModel.ColumnHeader(),
      col_4: CatalogApplicationModel.ColumnHeader(),
      col_1: CatalogApplicationModel.ColumnHeader(),
      col_5: CatalogApplicationModel.ColumnHeader(),
    });
  }

  /** @returns {SizeChart} */
  static SizeChart() {
    return Joi.object({
      unit: Joi.string().allow(""),
      image: Joi.string().allow(""),
      size_tip: Joi.string().allow(""),
      sizes: Joi.array().items(CatalogApplicationModel.SizeChartValues()),
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
      headers: CatalogApplicationModel.ColumnHeaders(),
    });
  }

  /** @returns {ProductSizeStores} */
  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  /** @returns {ProductSizes} */
  static ProductSizes() {
    return Joi.object({
      sizes: Joi.array().items(CatalogApplicationModel.ProductSize()),
      price: CatalogApplicationModel.ProductSizesPrice(),
      price_per_piece: CatalogApplicationModel.ProductSizesPrice(),
      size_chart: CatalogApplicationModel.SizeChart(),
      sellable: Joi.boolean(),
      multi_size: Joi.boolean(),
      discount: Joi.string().allow(""),
      stores: CatalogApplicationModel.ProductSizeStores(),
      discount_meta: CatalogApplicationModel.DiscountMeta(),
    });
  }

  /** @returns {AttributeDetail} */
  static AttributeDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),
      description: Joi.string().allow(""),
      display: Joi.string().allow(""),
      key: Joi.string().allow(""),
    });
  }

  /** @returns {AttributeMetadata} */
  static AttributeMetadata() {
    return Joi.object({
      title: Joi.string().allow(""),
      details: Joi.array().items(CatalogApplicationModel.AttributeDetail()),
    });
  }

  /** @returns {ProductsComparisonResponseSchema} */
  static ProductsComparisonResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.ProductDetail()),
      attributes_metadata: Joi.array().items(
        CatalogApplicationModel.AttributeMetadata()
      ),
    });
  }

  /** @returns {ProductCompareResponseSchema} */
  static ProductCompareResponseSchema() {
    return Joi.object({
      title: Joi.string().allow(""),
      items: Joi.array().items(CatalogApplicationModel.ProductDetail()),
      attributes_metadata: Joi.array().items(
        CatalogApplicationModel.AttributeMetadata()
      ),
      subtitle: Joi.string().allow(""),
    });
  }

  /** @returns {ProductFrequentlyComparedSimilarResponseSchema} */
  static ProductFrequentlyComparedSimilarResponseSchema() {
    return Joi.object({
      similars: CatalogApplicationModel.ProductCompareResponseSchema(),
    });
  }

  /** @returns {ProductVariantItemResponseSchema} */
  static ProductVariantItemResponseSchema() {
    return Joi.object({
      uid: Joi.number(),
      color_name: Joi.string().allow(""),
      color: Joi.string().allow(""),
      medias: Joi.array().items(CatalogApplicationModel.Media()),
      is_available: Joi.boolean(),
      _custom_meta: Joi.array().items(
        CatalogApplicationModel.CustomMetaFields()
      ),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      action: CatalogApplicationModel.ProductListingAction(),
    });
  }

  /** @returns {ProductVariantResponseSchema} */
  static ProductVariantResponseSchema() {
    return Joi.object({
      display_type: Joi.string().allow(""),
      header: Joi.string().allow(""),
      group_id: Joi.string().allow(""),
      items: Joi.array().items(
        CatalogApplicationModel.ProductVariantItemResponseSchema()
      ),
      key: Joi.string().allow(""),
      logo: Joi.string().allow(""),
    });
  }

  /** @returns {ProductVariantsResponseSchema} */
  static ProductVariantsResponseSchema() {
    return Joi.object({
      variants: Joi.array().items(
        CatalogApplicationModel.ProductVariantResponseSchema()
      ),
    });
  }

  /** @returns {StoreDetail} */
  static StoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),
      city: Joi.string().allow(""),
      id: Joi.number(),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {ProductStockPrice} */
  static ProductStockPrice() {
    return Joi.object({
      effective: Joi.number(),
      currency: Joi.string().allow(""),
      marked: Joi.number(),
    });
  }

  /** @returns {CompanyDetail} */
  static CompanyDetail() {
    return Joi.object({
      name: Joi.string().allow(""),
      id: Joi.number(),
    });
  }

  /** @returns {Seller} */
  static Seller() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow(""),
      count: Joi.number(),
    });
  }

  /** @returns {ProductStockStatusItem} */
  static ProductStockStatusItem() {
    return Joi.object({
      uid: Joi.string().allow(""),
      quantity: Joi.number(),
      store: CatalogApplicationModel.StoreDetail(),
      size: Joi.string().allow(""),
      price: CatalogApplicationModel.ProductStockPrice(),
      company: CatalogApplicationModel.CompanyDetail(),
      item_id: Joi.number(),
      seller: CatalogApplicationModel.Seller(),
      identifier: CatalogApplicationModel.Identifier(),
    });
  }

  /** @returns {ProductStockStatusResponseSchema} */
  static ProductStockStatusResponseSchema() {
    return Joi.object({
      items: Joi.array().items(
        CatalogApplicationModel.ProductStockStatusItem()
      ),
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

  /** @returns {ProductStockPolling} */
  static ProductStockPolling() {
    return Joi.object({
      items: Joi.array().items(
        CatalogApplicationModel.ProductStockStatusItem()
      ),
      page: CatalogApplicationModel.Page().required(),
    });
  }

  /** @returns {ProductVariantListingResponseSchema} */
  static ProductVariantListingResponseSchema() {
    return Joi.object({
      header: Joi.string().allow(""),
      items: Joi.array().items(
        CatalogApplicationModel.ProductVariantItemResponseSchema()
      ),
      total: Joi.number(),
      key: Joi.string().allow(""),
      display_type: Joi.string().allow(""),
    });
  }

  /** @returns {ProductListingDetail} */
  static ProductListingDetail() {
    return Joi.object({
      uid: Joi.number(),
      custom_order: CatalogApplicationModel.ProductDetailCustomOrder(),
      sizes: Joi.array().items(Joi.string().allow("")),
      category_map: CatalogApplicationModel.ProductCategoryMap(),
      net_quantity: CatalogApplicationModel.NetQuantity(),
      rating_count: Joi.number(),
      _custom_meta: Joi.array().items(
        CatalogApplicationModel.CustomMetaFields()
      ),
      similars: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      seo: CatalogApplicationModel.ApplicationItemSEO(),
      image_nature: Joi.string().allow(""),
      has_variant: Joi.boolean(),
      item_type: Joi.string().allow(""),
      description: Joi.string().allow(""),
      grouped_attributes: Joi.array().items(
        CatalogApplicationModel.ProductDetailGroupedAttribute()
      ),
      medias: Joi.array().items(CatalogApplicationModel.Media()),
      color: Joi.string().allow(""),
      type: Joi.string().allow(""),
      product_online_date: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      item_code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      moq: CatalogApplicationModel.ApplicationItemMOQ(),
      short_description: Joi.string().allow(""),
      categories: Joi.array().items(CatalogApplicationModel.ProductBrand()),
      sellable: Joi.boolean(),
      attributes: Joi.object().pattern(/\S/, Joi.any()),
      variants: Joi.array().items(
        CatalogApplicationModel.ProductVariantListingResponseSchema()
      ),
      discount: Joi.string().allow(""),
      tryouts: Joi.array().items(Joi.string().allow("")),
      identifiers: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow("").required(),
      action: CatalogApplicationModel.ProductListingAction(),
      rating: Joi.number(),
      is_dependent: Joi.boolean(),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      highlights: Joi.array().items(Joi.string().allow("")),
      price: CatalogApplicationModel.ProductListingPrice(),
      brand: CatalogApplicationModel.ProductBrand(),
      teaser_tag: Joi.string().allow(""),
    });
  }

  /** @returns {ProductFiltersValue} */
  static ProductFiltersValue() {
    return Joi.object({
      min: Joi.number(),
      display_format: Joi.string().allow(""),
      selected_max: Joi.number(),
      value: Joi.string().allow(""),
      query_format: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      selected_min: Joi.number(),
      currency_code: Joi.string().allow(""),
      is_selected: Joi.boolean().required(),
      display: Joi.string().allow("").required(),
      count: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {ProductFiltersKey} */
  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      kind: Joi.string().allow(""),
      display: Joi.string().allow("").required(),
    });
  }

  /** @returns {ProductFilters} */
  static ProductFilters() {
    return Joi.object({
      values: Joi.array()
        .items(CatalogApplicationModel.ProductFiltersValue())
        .required(),
      key: CatalogApplicationModel.ProductFiltersKey().required(),
    });
  }

  /** @returns {ProductSortOn} */
  static ProductSortOn() {
    return Joi.object({
      logo: Joi.string().allow(""),
      is_selected: Joi.boolean(),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
      display: Joi.string().allow(""),
    });
  }

  /** @returns {ProductListingResponseSchema} */
  static ProductListingResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.ProductListingDetail()),
      filters: Joi.array().items(CatalogApplicationModel.ProductFilters()),
      page: CatalogApplicationModel.Page().required(),
      sort_on: Joi.array().items(CatalogApplicationModel.ProductSortOn()),
    });
  }

  /** @returns {ImageUrls} */
  static ImageUrls() {
    return Joi.object({
      portrait: CatalogApplicationModel.Media(),
      landscape: CatalogApplicationModel.Media(),
    });
  }

  /** @returns {BrandItem} */
  static BrandItem() {
    return Joi.object({
      uid: Joi.number(),
      logo: CatalogApplicationModel.Media(),
      description: Joi.string().allow(""),
      banners: CatalogApplicationModel.ImageUrls(),
      departments: Joi.array().items(Joi.string().allow("")),
      discount: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      action: CatalogApplicationModel.ProductListingAction(),
    });
  }

  /** @returns {BrandListingResponseSchema} */
  static BrandListingResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.BrandItem()),
      page: CatalogApplicationModel.Page().required(),
    });
  }

  /** @returns {BrandDetailResponseSchema} */
  static BrandDetailResponseSchema() {
    return Joi.object({
      logo: CatalogApplicationModel.Media(),
      uid: Joi.number(),
      description: Joi.string().allow(""),
      banners: CatalogApplicationModel.ImageUrls(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {CategoryBanner} */
  static CategoryBanner() {
    return Joi.object({
      portrait: CatalogApplicationModel.Media().required(),
      landscape: CatalogApplicationModel.Media().required(),
    });
  }

  /** @returns {ThirdLevelChild} */
  static ThirdLevelChild() {
    return Joi.object({
      uid: Joi.number(),
      banners: CatalogApplicationModel.ImageUrls(),
      childs: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      action: CatalogApplicationModel.ProductListingAction(),
    });
  }

  /** @returns {SecondLevelChild} */
  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),
      banners: CatalogApplicationModel.ImageUrls(),
      childs: Joi.array().items(CatalogApplicationModel.ThirdLevelChild()),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      action: CatalogApplicationModel.ProductListingAction(),
    });
  }

  /** @returns {Child} */
  static Child() {
    return Joi.object({
      uid: Joi.number(),
      banners: CatalogApplicationModel.ImageUrls(),
      childs: Joi.array().items(CatalogApplicationModel.SecondLevelChild()),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      action: CatalogApplicationModel.ProductListingAction(),
    });
  }

  /** @returns {CategoryItems} */
  static CategoryItems() {
    return Joi.object({
      uid: Joi.number().required(),
      banners: CatalogApplicationModel.CategoryBanner().required(),
      childs: Joi.array().items(CatalogApplicationModel.Child()),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      action: CatalogApplicationModel.ProductListingAction().required(),
    });
  }

  /** @returns {DepartmentCategoryTree} */
  static DepartmentCategoryTree() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.CategoryItems()),
      department: Joi.string().allow("").required(),
    });
  }

  /** @returns {DepartmentIdentifier} */
  static DepartmentIdentifier() {
    return Joi.object({
      uid: Joi.number(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {CategoryListingResponseSchema} */
  static CategoryListingResponseSchema() {
    return Joi.object({
      data: Joi.array().items(CatalogApplicationModel.DepartmentCategoryTree()),
      departments: Joi.array().items(
        CatalogApplicationModel.DepartmentIdentifier()
      ),
    });
  }

  /** @returns {CategoryMetaResponseSchema} */
  static CategoryMetaResponseSchema() {
    return Joi.object({
      logo: CatalogApplicationModel.Media(),
      uid: Joi.number(),
      banners: CatalogApplicationModel.ImageUrls(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {HomeListingResponseSchema} */
  static HomeListingResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.ProductListingDetail()),
      page: CatalogApplicationModel.Page().required(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Department} */
  static Department() {
    return Joi.object({
      uid: Joi.number(),
      logo: CatalogApplicationModel.Media(),
      priority_order: Joi.number(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {DepartmentResponseSchema} */
  static DepartmentResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.Department()),
    });
  }

  /** @returns {AutocompleteItem} */
  static AutocompleteItem() {
    return Joi.object({
      logo: CatalogApplicationModel.Media(),
      display: Joi.string().allow(""),
      type: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      action: CatalogApplicationModel.ProductListingAction(),
    });
  }

  /** @returns {AutoCompleteResponseSchema} */
  static AutoCompleteResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.AutocompleteItem()),
    });
  }

  /** @returns {CollectionQuery} */
  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),
      value: Joi.array().items(Joi.any()).required(),
      attribute: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetCollectionDetailNest} */
  static GetCollectionDetailNest() {
    return Joi.object({
      is_active: Joi.boolean(),
      uid: Joi.string().allow(""),
      sort_on: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      banners: CatalogApplicationModel.ImageUrls(),
      cron: Joi.object().pattern(/\S/, Joi.any()),
      _schedule: Joi.object().pattern(/\S/, Joi.any()),
      query: Joi.array().items(CatalogApplicationModel.CollectionQuery()),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      name: Joi.string().allow(""),
      allow_sort: Joi.boolean(),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
      badge: Joi.object().pattern(/\S/, Joi.any()),
      slug: Joi.string().allow(""),
      action: CatalogApplicationModel.ProductListingAction(),
      allow_facets: Joi.boolean(),
      logo: CatalogApplicationModel.Media(),
      priority: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")),
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {CollectionListingFilterTag} */
  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string().allow(""),
      is_selected: Joi.boolean(),
      display: Joi.string().allow(""),
    });
  }

  /** @returns {CollectionListingFilterType} */
  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string().allow(""),
      is_selected: Joi.boolean(),
      display: Joi.string().allow(""),
    });
  }

  /** @returns {CollectionListingFilter} */
  static CollectionListingFilter() {
    return Joi.object({
      tags: Joi.array().items(
        CatalogApplicationModel.CollectionListingFilterTag()
      ),
      type: Joi.array().items(
        CatalogApplicationModel.CollectionListingFilterType()
      ),
    });
  }

  /** @returns {GetCollectionListingResponseSchema} */
  static GetCollectionListingResponseSchema() {
    return Joi.object({
      items: Joi.array().items(
        CatalogApplicationModel.GetCollectionDetailNest()
      ),
      filters: CatalogApplicationModel.CollectionListingFilter(),
      page: CatalogApplicationModel.Page().required(),
    });
  }

  /** @returns {CollectionDetailResponseSchema} */
  static CollectionDetailResponseSchema() {
    return Joi.object({
      is_active: Joi.boolean(),
      sort_on: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      banners: CatalogApplicationModel.ImageUrls(),
      cron: Joi.object().pattern(/\S/, Joi.any()),
      _schedule: Joi.object().pattern(/\S/, Joi.any()),
      query: Joi.array().items(CatalogApplicationModel.CollectionQuery()),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      name: Joi.string().allow(""),
      allow_sort: Joi.boolean(),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
      badge: Joi.object().pattern(/\S/, Joi.any()),
      slug: Joi.string().allow(""),
      allow_facets: Joi.boolean(),
      logo: CatalogApplicationModel.Media(),
      priority: Joi.number(),
      tag: Joi.array().items(Joi.string().allow("")),
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {GetFollowListingResponseSchema} */
  static GetFollowListingResponseSchema() {
    return Joi.object({
      items: Joi.array()
        .items(CatalogApplicationModel.ProductListingDetail())
        .required(),
      page: CatalogApplicationModel.Page().required(),
    });
  }

  /** @returns {FollowPostResponseSchema} */
  static FollowPostResponseSchema() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      id: Joi.string().allow("").required(),
    });
  }

  /** @returns {FollowerCountResponseSchema} */
  static FollowerCountResponseSchema() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  /** @returns {FollowIdsData} */
  static FollowIdsData() {
    return Joi.object({
      products: Joi.array().items(Joi.number()),
      collections: Joi.array().items(Joi.number()),
      brands: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {FollowIdsResponseSchema} */
  static FollowIdsResponseSchema() {
    return Joi.object({
      data: CatalogApplicationModel.FollowIdsData(),
    });
  }

  /** @returns {LatLong} */
  static LatLong() {
    return Joi.object({
      coordinates: Joi.array().items(Joi.number()),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {StoreContact} */
  static StoreContact() {
    return Joi.object({
      number: Joi.string().allow(""),
      country_code: Joi.number(),
    });
  }

  /** @returns {Store} */
  static Store() {
    return Joi.object({
      uid: Joi.number(),
      store_email: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      pincode: Joi.number(),
      city: Joi.string().allow(""),
      address: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      lat_long: CatalogApplicationModel.LatLong(),
      name: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      contacts: Joi.array().items(CatalogApplicationModel.StoreContact()),
    });
  }

  /** @returns {StoreListingResponseSchema} */
  static StoreListingResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.Store()).required(),
      page: CatalogApplicationModel.Page().required(),
    });
  }

  /** @returns {StoreDepartments} */
  static StoreDepartments() {
    return Joi.object({
      uid: Joi.number(),
      logo: Joi.object().pattern(/\S/, Joi.any()),
      priority_order: Joi.number(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyStore} */
  static CompanyStore() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow(""),
      company_type: Joi.string().allow(""),
      business_type: Joi.string().allow(""),
    });
  }

  /** @returns {SellerPhoneNumber} */
  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),
      number: Joi.string().allow("").required(),
    });
  }

  /** @returns {StoreManagerSchema} */
  static StoreManagerSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      email: Joi.string().allow(""),
      mobile_no: CatalogApplicationModel.SellerPhoneNumber(),
    });
  }

  /** @returns {StoreAddressSchema} */
  static StoreAddressSchema() {
    return Joi.object({
      latitude: Joi.number(),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      pincode: Joi.number(),
      city: Joi.string().allow(""),
      longitude: Joi.number(),
      address2: Joi.string().allow(""),
    });
  }

  /** @returns {AppStore} */
  static AppStore() {
    return Joi.object({
      uid: Joi.number(),
      departments: Joi.array().items(
        CatalogApplicationModel.StoreDepartments()
      ),
      company: CatalogApplicationModel.CompanyStore(),
      manager: CatalogApplicationModel.StoreManagerSchema(),
      store_code: Joi.string().allow(""),
      address: CatalogApplicationModel.StoreAddressSchema(),
      name: Joi.string().allow(""),
      contact_numbers: Joi.array().items(
        CatalogApplicationModel.SellerPhoneNumber()
      ),
    });
  }

  /** @returns {ApplicationStoreListing} */
  static ApplicationStoreListing() {
    return Joi.object({
      filters: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      items: Joi.array().items(CatalogApplicationModel.AppStore()),
      page: CatalogApplicationModel.Page(),
    });
  }

  /** @returns {Time} */
  static Time() {
    return Joi.object({
      hour: Joi.number(),
      minute: Joi.number(),
    });
  }

  /** @returns {StoreTiming} */
  static StoreTiming() {
    return Joi.object({
      open: Joi.boolean(),
      closing: CatalogApplicationModel.Time(),
      weekday: Joi.string().allow(""),
      opening: CatalogApplicationModel.Time(),
    });
  }

  /** @returns {StoreDetails} */
  static StoreDetails() {
    return Joi.object({
      uid: Joi.number(),
      departments: Joi.array().items(
        CatalogApplicationModel.StoreDepartments()
      ),
      company: CatalogApplicationModel.CompanyStore(),
      manager: CatalogApplicationModel.StoreManagerSchema(),
      store_code: Joi.string().allow(""),
      timing: Joi.array().items(CatalogApplicationModel.StoreTiming()),
      address: CatalogApplicationModel.StoreAddressSchema(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      name: Joi.string().allow(""),
      contact_numbers: Joi.array().items(
        CatalogApplicationModel.SellerPhoneNumber()
      ),
    });
  }

  /** @returns {UserDetail} */
  static UserDetail() {
    return Joi.object({
      super_user: Joi.boolean(),
      contact: Joi.string().allow(""),
      username: Joi.string().allow("").required(),
      user_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {Size} */
  static Size() {
    return Joi.object({
      quantity: Joi.number(),
      value: Joi.any(),
      display: Joi.any(),
      is_available: Joi.boolean(),
    });
  }

  /** @returns {ProductGroupPrice} */
  static ProductGroupPrice() {
    return Joi.object({
      max_effective: Joi.number(),
      min_effective: Joi.number(),
      min_marked: Joi.number(),
      currency: Joi.any(),
      max_marked: Joi.number(),
    });
  }

  /** @returns {ProductDetails} */
  static ProductDetails() {
    return Joi.object({
      template_tag: Joi.any(),
      rating_count: Joi.number(),
      image_nature: Joi.any(),
      has_variant: Joi.boolean(),
      description: Joi.any(),
      out_of_stock: Joi.boolean(),
      hsn_code: Joi.number(),
      grouped_attributes: Joi.object().pattern(/\S/, Joi.any()),
      item_code: Joi.any(),
      name: Joi.any(),
      country_of_origin: Joi.any(),
      short_description: Joi.any(),
      media: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      attributes: Joi.object().pattern(/\S/, Joi.any()),
      is_set: Joi.boolean(),
      images: Joi.array().items(Joi.any()),
      slug: Joi.any(),
      rating: Joi.number(),
      identifier: CatalogApplicationModel.Identifier(),
      highlights: Joi.array().items(Joi.any()),
      brand_uid: Joi.number(),
    });
  }

  /** @returns {ProductInGroup} */
  static ProductInGroup() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),
      max_quantity: Joi.number().required(),
      sizes: Joi.array().items(CatalogApplicationModel.Size()),
      price: CatalogApplicationModel.ProductGroupPrice(),
      auto_select: Joi.boolean(),
      product_details: CatalogApplicationModel.ProductDetails(),
      min_quantity: Joi.number(),
      allow_remove: Joi.boolean(),
      product_uid: Joi.number().required(),
    });
  }

  /** @returns {ProductGroupingModel} */
  static ProductGroupingModel() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),
      is_active: Joi.boolean(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      verified_by: CatalogApplicationModel.UserDetail(),
      created_on: Joi.string().allow("").required(),
      company_id: Joi.number(),
      page_visibility: Joi.array().items(Joi.any()),
      modified_on: Joi.string().allow("").required(),
      created_by: CatalogApplicationModel.UserDetail(),
      modified_by: CatalogApplicationModel.UserDetail(),
      products: Joi.array()
        .items(CatalogApplicationModel.ProductInGroup())
        .required(),
      same_store_assignment: Joi.boolean(),
      _id: Joi.any(),
      name: Joi.any().required(),
      choice: Joi.any(),
      slug: Joi.any(),
      verified_on: Joi.string().allow(""),
    });
  }

  /** @returns {ProductBundle} */
  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.ProductGroupingModel()),
    });
  }

  /** @returns {StoreV3} */
  static StoreV3() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow(""),
      count: Joi.number(),
    });
  }

  /** @returns {ArticleAssignmentV3} */
  static ArticleAssignmentV3() {
    return Joi.object({
      strategy: Joi.string().allow(""),
      level: Joi.string().allow(""),
    });
  }

  /** @returns {StrategyWiseListingSchemaV3} */
  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      distance: Joi.number(),
      pincode: Joi.number(),
      tat: Joi.number(),
      quantity: Joi.number(),
    });
  }

  /** @returns {DetailsSchemaV3} */
  static DetailsSchemaV3() {
    return Joi.object({
      value: Joi.string().allow(""),
      type: Joi.string().allow(""),
      key: Joi.string().allow(""),
    });
  }

  /** @returns {SellerGroupAttributes} */
  static SellerGroupAttributes() {
    return Joi.object({
      title: Joi.string().allow(""),
      details: Joi.array().items(CatalogApplicationModel.DetailsSchemaV3()),
    });
  }

  /** @returns {ReturnConfigSchemaV3} */
  static ReturnConfigSchemaV3() {
    return Joi.object({
      unit: Joi.string().allow(""),
      returnable: Joi.boolean(),
      time: Joi.number(),
    });
  }

  /** @returns {ProductSetDistributionSizeV3} */
  static ProductSetDistributionSizeV3() {
    return Joi.object({
      pieces: Joi.number(),
      size: Joi.string().allow(""),
    });
  }

  /** @returns {ProductSetDistributionV3} */
  static ProductSetDistributionV3() {
    return Joi.object({
      sizes: Joi.array().items(
        CatalogApplicationModel.ProductSetDistributionSizeV3()
      ),
    });
  }

  /** @returns {ProductSetV3} */
  static ProductSetV3() {
    return Joi.object({
      quantity: Joi.number(),
      size_distribution: CatalogApplicationModel.ProductSetDistributionV3(),
    });
  }

  /** @returns {ProductStockPriceV3} */
  static ProductStockPriceV3() {
    return Joi.object({
      effective: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      marked: Joi.number(),
      selling: Joi.number(),
    });
  }

  /** @returns {ProductStockUnitPriceV3} */
  static ProductStockUnitPriceV3() {
    return Joi.object({
      unit: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
      price: Joi.number(),
    });
  }

  /** @returns {MarketPlaceSttributesSchemaV3} */
  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      title: Joi.string().allow(""),
      details: Joi.array().items(CatalogApplicationModel.DetailsSchemaV3()),
    });
  }

  /** @returns {SellerV3} */
  static SellerV3() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow(""),
      count: Joi.number(),
    });
  }

  /** @returns {PromiseSchema} */
  static PromiseSchema() {
    return Joi.object({
      min: Joi.string().allow(""),
      max: Joi.string().allow(""),
    });
  }

  /** @returns {ProductSizePriceResponseV3} */
  static ProductSizePriceResponseV3() {
    return Joi.object({
      store: CatalogApplicationModel.StoreV3(),
      article_assignment: CatalogApplicationModel.ArticleAssignmentV3(),
      is_cod: Joi.boolean(),
      strategy_wise_listing: Joi.array().items(
        CatalogApplicationModel.StrategyWiseListingSchemaV3()
      ),
      quantity: Joi.number(),
      item_type: Joi.string().allow(""),
      grouped_attributes: Joi.array().items(
        CatalogApplicationModel.SellerGroupAttributes()
      ),
      return_config: CatalogApplicationModel.ReturnConfigSchemaV3(),
      article_id: Joi.string().allow(""),
      is_gift: Joi.boolean(),
      set: CatalogApplicationModel.ProductSetV3(),
      seller_count: Joi.number(),
      price_per_piece: CatalogApplicationModel.ProductStockPriceV3(),
      discount_meta: CatalogApplicationModel.DiscountMeta(),
      discount: Joi.string().allow(""),
      long_lat: Joi.array().items(Joi.number()),
      special_badge: Joi.string().allow(""),
      price: CatalogApplicationModel.ProductStockPriceV3(),
      price_per_unit: CatalogApplicationModel.ProductStockUnitPriceV3(),
      pincode: Joi.number(),
      marketplace_attributes: Joi.array().items(
        CatalogApplicationModel.MarketPlaceSttributesSchemaV3()
      ),
      seller: CatalogApplicationModel.SellerV3(),
      delivery_promise: CatalogApplicationModel.PromiseSchema(),
    });
  }

  /** @returns {ProductSizeSellerFilterSchemaV3} */
  static ProductSizeSellerFilterSchemaV3() {
    return Joi.object({
      name: Joi.string().allow(""),
      is_selected: Joi.boolean(),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ProductSizeSellersResponseV3} */
  static ProductSizeSellersResponseV3() {
    return Joi.object({
      items: Joi.array().items(
        CatalogApplicationModel.ProductSizePriceResponseV3()
      ),
      page: CatalogApplicationModel.Page().required(),
      sort_on: Joi.array().items(
        CatalogApplicationModel.ProductSizeSellerFilterSchemaV3()
      ),
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
}
module.exports = CatalogApplicationModel;
