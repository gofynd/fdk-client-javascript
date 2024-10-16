export = CatalogApplicationModel;
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
declare class CatalogApplicationModel {
}
declare namespace CatalogApplicationModel {
    export { ProductDetailCustomOrder, Meta, Media, ProductListingActionPage, ProductListingAction, ProductBrand, ProductDepartment, ProductCategoryMap, NetQuantity, CustomMetaFields, ApplicationItemSEO, ProductDetailAttribute, ProductDetailGroupedAttribute, ApplicationItemMOQ, Price, ProductListingPrice, ProductSizesPrice, ProductDetail, ErrorResponseSchema, Dimension, Weight, DiscountMeta, ProductSize, SizeChartValues, ColumnHeader, ColumnHeaders, SizeChart, ProductSizeStores, ProductSizes, AttributeDetail, AttributeMetadata, ProductsComparisonResponseSchema, ProductCompareResponseSchema, ProductFrequentlyComparedSimilarResponseSchema, ProductVariantItemResponseSchema, ProductVariantResponseSchema, ProductVariantsResponseSchema, StoreDetail, ProductStockPrice, CompanyDetail, Seller, ProductStockStatusItem, ProductStockStatusResponseSchema, Page, ProductStockPolling, ProductVariantListingResponseSchema, ProductListingDetail, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, ProductListingResponseSchema, ImageUrls, BrandItem, BrandListingResponseSchema, BrandDetailResponseSchema, CategoryBanner, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponseSchema, CategoryMetaResponseSchema, HomeListingResponseSchema, Department, DepartmentResponseSchema, AutocompleteItem, AutoCompleteResponseSchema, CollectionQuery, GetCollectionDetailNest, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, GetCollectionListingResponseSchema, CollectionDetailResponseSchema, GetFollowListingResponseSchema, FollowPostResponseSchema, FollowerCountResponseSchema, FollowIdsData, FollowIdsResponseSchema, LatLong, StoreContact, Store, StoreListingResponseSchema, StoreDepartments, CompanyStore, SellerPhoneNumber, StoreManagerSchema, StoreAddressSchema, AppStore, ApplicationStoreListing, Time, StoreTiming, StoreDetails, UserDetail, Size, ProductGroupPrice, ProductDetails, ProductInGroup, ProductGroupingModel, ProductBundle, StoreV3, ArticleAssignmentV3, StrategyWiseListingSchemaV3, DetailsSchemaV3, SellerGroupAttributes, ReturnConfigSchemaV3, ProductSetDistributionSizeV3, ProductSetDistributionV3, ProductSetV3, ProductStockPriceV3, ProductStockUnitPriceV3, MarketPlaceSttributesSchemaV3, SellerV3, PromiseSchema, ProductSizePriceResponseV3, ProductSizeSellerFilterSchemaV3, ProductSizeSellersResponseV3, Identifier };
}
/** @returns {ProductDetailCustomOrder} */
declare function ProductDetailCustomOrder(): ProductDetailCustomOrder;
type ProductDetailCustomOrder = {
    /**
     * - The unit of time taken for manufacturing.
     */
    manufacturing_time?: number;
    /**
     * - The unit of time required for
     * manufacturing is defined in hours or days.
     */
    manufacturing_time_unit?: string;
    /**
     * - A boolean flag indicating whether MTO
     * (Make to Order) is enabled or not.
     */
    is_custom_order?: boolean;
};
/** @returns {Meta} */
declare function Meta(): Meta;
type Meta = {
    /**
     * - The source or origin of the media file, which
     * could be a URL or a reference to where the media was obtained.
     */
    source?: string;
};
/** @returns {Media} */
declare function Media(): Media;
type Media = {
    /**
     * - Absolute url for Media.
     */
    url?: string;
    /**
     * - The type of media, such as image, video.
     */
    type?: string;
    meta?: Meta;
    /**
     * - Alternative text for the media, used for
     * accessibility and SEO purposes.
     */
    alt?: string;
};
/** @returns {ProductListingActionPage} */
declare function ProductListingActionPage(): ProductListingActionPage;
type ProductListingActionPage = {
    /**
     * - The type of action such as product, products,
     * category, brand.
     */
    type?: string;
    /**
     * - Query parameter if any to be added to the action.
     */
    query?: any;
    /**
     * - Parameters that should be considered in path.
     */
    params?: any;
};
/** @returns {ProductListingAction} */
declare function ProductListingAction(): ProductListingAction;
type ProductListingAction = {
    /**
     * - Type of action to be taken e.g, page.
     */
    type?: string;
    page?: ProductListingActionPage;
};
/** @returns {ProductBrand} */
declare function ProductBrand(): ProductBrand;
type ProductBrand = {
    /**
     * - Unique identifier for the product brand.
     */
    uid?: number;
    logo?: Media;
    /**
     * - Description of the product brand.
     */
    description?: string;
    /**
     * - Name of the product brand.
     */
    name?: string;
    action?: ProductListingAction;
};
/** @returns {ProductDepartment} */
declare function ProductDepartment(): ProductDepartment;
type ProductDepartment = {
    /**
     * - Unique identifier for the product department.
     */
    uid?: number;
    logo?: Media;
    /**
     * - URL-friendly identifier for the product department.
     */
    slug?: string;
    /**
     * - Name of the product department.
     */
    name?: string;
};
/** @returns {ProductCategoryMap} */
declare function ProductCategoryMap(): ProductCategoryMap;
type ProductCategoryMap = {
    l1?: ProductBrand;
    l2?: ProductBrand;
    l3?: ProductBrand;
};
/** @returns {NetQuantity} */
declare function NetQuantity(): NetQuantity;
type NetQuantity = {
    /**
     * - The unit of measurement used for the net quantity
     * of the product.
     */
    unit?: any;
    /**
     * - The value of the net quantity of the product.
     */
    value?: number;
};
/** @returns {CustomMetaFields} */
declare function CustomMetaFields(): CustomMetaFields;
type CustomMetaFields = {
    /**
     * - A value to store in the custom field.
     */
    value: string;
    /**
     * - A key to store a custom field.
     */
    key: string;
};
/** @returns {ApplicationItemSEO} */
declare function ApplicationItemSEO(): ApplicationItemSEO;
type ApplicationItemSEO = {
    /**
     * - The SEO title of the item.
     */
    title?: any;
    /**
     * - The SEO description of the item.
     */
    description?: any;
};
/** @returns {ProductDetailAttribute} */
declare function ProductDetailAttribute(): ProductDetailAttribute;
type ProductDetailAttribute = {
    /**
     * - The value of the product attribute.
     */
    value?: string;
    /**
     * - The type or category of the product attribute.
     */
    type?: string;
    /**
     * - The key or name of the product attribute.
     */
    key?: string;
};
/** @returns {ProductDetailGroupedAttribute} */
declare function ProductDetailGroupedAttribute(): ProductDetailGroupedAttribute;
type ProductDetailGroupedAttribute = {
    /**
     * - The title or name of the attribute group.
     */
    title?: string;
    /**
     * - A list of product attributes
     * within this group.
     */
    details?: ProductDetailAttribute[];
};
/** @returns {ApplicationItemMOQ} */
declare function ApplicationItemMOQ(): ApplicationItemMOQ;
type ApplicationItemMOQ = {
    /**
     * - The minimum quantity required for purchase.
     */
    minimum?: number;
    /**
     * - The maximum quantity allowed for purchase.
     */
    maximum?: number;
    /**
     * - The minimum quantity increment in which
     * the item can be purchased.
     */
    increment_unit?: number;
};
/** @returns {Price} */
declare function Price(): Price;
type Price = {
    /**
     * - The minimum price for the product across stores.
     */
    min?: number;
    /**
     * - The currency symbol for the currency
     * in which the product is available.
     */
    currency_symbol?: string;
    /**
     * - The currency code for the currency in
     * which the product is available.
     */
    currency_code?: string;
    /**
     * - The maximum price for the product across stores.
     */
    max?: number;
};
/** @returns {ProductListingPrice} */
declare function ProductListingPrice(): ProductListingPrice;
type ProductListingPrice = {
    effective?: Price;
    marked?: Price;
};
/** @returns {ProductSizesPrice} */
declare function ProductSizesPrice(): ProductSizesPrice;
type ProductSizesPrice = {
    effective?: Price;
    marked?: Price;
    selling?: Price;
};
/** @returns {ProductDetail} */
declare function ProductDetail(): ProductDetail;
type ProductDetail = {
    /**
     * - Unique identifier for the product.
     */
    uid?: number;
    custom_order?: ProductDetailCustomOrder;
    category_map?: ProductCategoryMap;
    net_quantity?: NetQuantity;
    /**
     * - Count of ratings the product has received.
     */
    rating_count?: number;
    /**
     * - Custom metadata fields
     * associated with the product.
     */
    _custom_meta?: CustomMetaFields[];
    /**
     * - List of products marked similar to given product.
     */
    similars?: string[];
    /**
     * - Tags associated with the product for better
     * categorization.
     */
    tags?: string[];
    seo?: ApplicationItemSEO;
    /**
     * - Type of the images associated with the
     * product such as standard.
     */
    image_nature?: string;
    /**
     * - Indicates whether the product has variants.
     */
    has_variant?: boolean;
    /**
     * - This field describes the type of item,
     * indicating the category or nature of the product. Possible values are
     * Standard, Composite, Wet, Digital.
     */
    item_type?: string;
    /**
     * - Detailed description of the product.
     */
    description?: string;
    /**
     * - Grouped
     * attributes detailing various characteristics of the product.
     */
    grouped_attributes?: ProductDetailGroupedAttribute[];
    /**
     * - Media files associated with the product.
     */
    medias?: Media[];
    /**
     * - Color of the product, if applicable.
     */
    color?: string;
    /**
     * - Product type or classification.
     */
    type?: string;
    /**
     * - Date and time when the product was
     * made available online.
     */
    product_online_date?: string;
    /**
     * - Custom JSON object for additional product data.
     */
    _custom_json?: any;
    /**
     * - Item Code defined for the product.
     */
    item_code?: string;
    /**
     * - Name of the product.
     */
    name?: string;
    moq?: ApplicationItemMOQ;
    /**
     * - Brief description of the product.
     */
    short_description?: string;
    /**
     * - List of product categories
     * associated with the product.
     */
    categories?: ProductBrand[];
    /**
     * - Additional attributes or characteristics of
     * the product.
     */
    attributes?: any;
    /**
     * - Discount applied to the product, if any.
     */
    discount?: string;
    /**
     * - Identifiers or names of tryout versions of
     * the product.
     */
    tryouts?: string[];
    /**
     * - URL-friendly identifier for the product.
     */
    slug: string;
    action?: ProductListingAction;
    /**
     * - The rating of the product.
     */
    rating?: number;
    /**
     * - Indicates whether the product can be
     * sold as an individual product.
     */
    is_dependent?: boolean;
    /**
     * - List of bundle/product grouping
     * slugs mapped to the product.
     */
    product_group_tag?: string[];
    /**
     * - Key highlights or features of the product.
     */
    highlights?: string[];
    price?: ProductListingPrice;
    brand?: ProductBrand;
    department?: ProductDepartment;
    /**
     * - Teaser tag or short promotional phrase for
     * the product.
     */
    teaser_tag?: string;
};
/** @returns {ErrorResponseSchema} */
declare function ErrorResponseSchema(): ErrorResponseSchema;
type ErrorResponseSchema = {
    /**
     * - A brief description of the error.
     */
    error?: string;
};
/** @returns {Dimension} */
declare function Dimension(): Dimension;
type Dimension = {
    /**
     * - The unit of dimension.
     */
    unit: string;
    /**
     * - The height of the product.
     */
    height: number;
    /**
     * - The length of the product.
     */
    length: number;
    /**
     * - The width of the product.
     */
    width: number;
    /**
     * - Whether the dimension is the default one or not.
     */
    is_default: boolean;
};
/** @returns {Weight} */
declare function Weight(): Weight;
type Weight = {
    /**
     * - The unit of weight.
     */
    unit: string;
    /**
     * - The shipping weight of the product.
     */
    shipping: number;
    /**
     * - Whether the weight is the default one or not.
     */
    is_default: boolean;
};
/** @returns {DiscountMeta} */
declare function DiscountMeta(): DiscountMeta;
type DiscountMeta = {
    /**
     * - Determines whether the discount countdown is
     * visible or not.
     */
    timer?: boolean;
    /**
     * - The time in minutes before the
     * discount ends when the countdown timer should start.
     */
    start_timer_in_minutes?: number;
    /**
     * - The start time of the live discount.
     */
    start?: string;
    /**
     * - The end time of the live discount.
     */
    end?: string;
};
/** @returns {ProductSize} */
declare function ProductSize(): ProductSize;
type ProductSize = {
    /**
     * - The quantity of the product size available.
     */
    quantity?: number;
    dimension?: Dimension;
    weight?: Weight;
    /**
     * - Indicates whether the product size is
     * available for purchase.
     */
    is_available?: boolean;
    /**
     * - List of identifiers used by
     * sellers for the product size.
     */
    seller_identifiers?: string[];
    /**
     * - The value or label representing the product size.
     */
    value?: string;
    /**
     * - Display name of the product size.
     */
    display?: string;
};
/** @returns {SizeChartValues} */
declare function SizeChartValues(): SizeChartValues;
type SizeChartValues = {
    /**
     * - Value for column 3.
     */
    col_3?: string;
    /**
     * - Value for column 6.
     */
    col_6?: string;
    /**
     * - Value for column 2.
     */
    col_2?: string;
    /**
     * - Value for column 4.
     */
    col_4?: string;
    /**
     * - Value for column 1.
     */
    col_1?: string;
    /**
     * - Value for column 5.
     */
    col_5?: string;
};
/** @returns {ColumnHeader} */
declare function ColumnHeader(): ColumnHeader;
type ColumnHeader = {
    /**
     * - Indicates if the column value can be
     * converted or transformed.
     */
    convertable?: boolean;
    /**
     * - The value or title of the column header.
     */
    value?: string;
};
/** @returns {ColumnHeaders} */
declare function ColumnHeaders(): ColumnHeaders;
type ColumnHeaders = {
    col_3?: ColumnHeader;
    col_6?: ColumnHeader;
    col_2?: ColumnHeader;
    col_4?: ColumnHeader;
    col_1?: ColumnHeader;
    col_5?: ColumnHeader;
};
/** @returns {SizeChart} */
declare function SizeChart(): SizeChart;
type SizeChart = {
    /**
     * - Unit of measurement used in the size chart (e.g., in, cm).
     */
    unit?: string;
    /**
     * - URL of the image representing the size chart.
     */
    image?: string;
    /**
     * - Additional tip or guideline related to sizing.
     */
    size_tip?: string;
    /**
     * - Array of size chart values for different sizes.
     */
    sizes?: SizeChartValues[];
    /**
     * - Description related to the size chart.
     */
    description?: string;
    /**
     * - Title or name of the size chart.
     */
    title?: string;
    headers?: ColumnHeaders;
};
/** @returns {ProductSizeStores} */
declare function ProductSizeStores(): ProductSizeStores;
type ProductSizeStores = {
    /**
     * - Number of stores where the product size is available.
     */
    count?: number;
};
/** @returns {ProductSizes} */
declare function ProductSizes(): ProductSizes;
type ProductSizes = {
    /**
     * - List of available sizes for the product.
     */
    sizes?: ProductSize[];
    price?: ProductSizesPrice;
    price_per_piece?: ProductSizesPrice;
    size_chart?: SizeChart;
    /**
     * - Whether the product sizes are available for sale.
     */
    sellable?: boolean;
    /**
     * - Whether the product supports multiple sizes.
     */
    multi_size?: boolean;
    /**
     * - Discount information applicable to the product sizes.
     */
    discount?: string;
    stores?: ProductSizeStores;
    discount_meta?: DiscountMeta;
};
/** @returns {AttributeDetail} */
declare function AttributeDetail(): AttributeDetail;
type AttributeDetail = {
    /**
     * - URL or path to the logo associated with the attribute.
     */
    logo?: string;
    /**
     * - A description of the attribute.
     */
    description?: string;
    /**
     * - Display name or label for the attribute.
     */
    display?: string;
    /**
     * - Unique key or identifier for the attribute.
     */
    key?: string;
};
/** @returns {AttributeMetadata} */
declare function AttributeMetadata(): AttributeMetadata;
type AttributeMetadata = {
    /**
     * - Title or name of the attribute metadata.
     */
    title?: string;
    /**
     * - List of detailed information about
     * attributes.
     */
    details?: AttributeDetail[];
};
/** @returns {ProductsComparisonResponseSchema} */
declare function ProductsComparisonResponseSchema(): ProductsComparisonResponseSchema;
type ProductsComparisonResponseSchema = {
    /**
     * - List of product details for comparison.
     */
    items?: ProductDetail[];
    /**
     * - Metadata about
     * attributes used for comparing products.
     */
    attributes_metadata?: AttributeMetadata[];
};
/** @returns {ProductCompareResponseSchema} */
declare function ProductCompareResponseSchema(): ProductCompareResponseSchema;
type ProductCompareResponseSchema = {
    /**
     * - Title or name of the comparison.
     */
    title?: string;
    /**
     * - List of product details for comparison.
     */
    items?: ProductDetail[];
    /**
     * - Metadata about
     * attributes used for comparing products.
     */
    attributes_metadata?: AttributeMetadata[];
    /**
     * - Subtitle or additional description for the comparison.
     */
    subtitle?: string;
};
/** @returns {ProductFrequentlyComparedSimilarResponseSchema} */
declare function ProductFrequentlyComparedSimilarResponseSchema(): ProductFrequentlyComparedSimilarResponseSchema;
type ProductFrequentlyComparedSimilarResponseSchema = {
    similars?: ProductCompareResponseSchema;
};
/** @returns {ProductVariantItemResponseSchema} */
declare function ProductVariantItemResponseSchema(): ProductVariantItemResponseSchema;
type ProductVariantItemResponseSchema = {
    /**
     * - Unique identifier for the product variant.
     */
    uid?: number;
    /**
     * - Name of the color for the variant.
     */
    color_name?: string;
    /**
     * - Color code or representation for the variant.
     */
    color?: string;
    /**
     * - Media files associated with the product variant.
     */
    medias?: Media[];
    /**
     * - Indicates whether the product variant is
     * available for purchase.
     */
    is_available?: boolean;
    /**
     * - Custom metadata fields
     * associated with the product.
     */
    _custom_meta?: CustomMetaFields[];
    /**
     * - Name of the product variant.
     */
    name?: string;
    /**
     * - Value or label representing the product variant.
     */
    value?: string;
    /**
     * - URL-friendly identifier for the product.
     */
    slug?: string;
    /**
     * - Custom JSON object for additional data
     * related to the product.
     */
    _custom_json?: any;
    action?: ProductListingAction;
};
/** @returns {ProductVariantResponseSchema} */
declare function ProductVariantResponseSchema(): ProductVariantResponseSchema;
type ProductVariantResponseSchema = {
    /**
     * - The type of display for the product
     * variant (e.g., image, text, image, color).
     */
    display_type?: string;
    /**
     * - Header or title for the product variant section.
     */
    header?: string;
    /**
     * - Group ID used to group variants.
     */
    group_id?: string;
    /**
     * - List of product variant items.
     */
    items?: ProductVariantItemResponseSchema[];
    /**
     * - Attribute identifier of the variant.
     */
    key?: string;
    /**
     * - URL or path to the logo associated with the
     * product variant.
     */
    logo?: string;
};
/** @returns {ProductVariantsResponseSchema} */
declare function ProductVariantsResponseSchema(): ProductVariantsResponseSchema;
type ProductVariantsResponseSchema = {
    /**
     * - A list of product
     * variant responses, each detailing a specific variant.
     */
    variants?: ProductVariantResponseSchema[];
};
/** @returns {StoreDetail} */
declare function StoreDetail(): StoreDetail;
type StoreDetail = {
    /**
     * - NA.
     */
    name?: string;
    /**
     * - NA.
     */
    city?: string;
    /**
     * - NA.
     */
    id?: number;
    /**
     * - NA.
     */
    code?: string;
};
/** @returns {ProductStockPrice} */
declare function ProductStockPrice(): ProductStockPrice;
type ProductStockPrice = {
    /**
     * - NA.
     */
    effective?: number;
    /**
     * - NA.
     */
    currency?: string;
    /**
     * - NA.
     */
    marked?: number;
};
/** @returns {CompanyDetail} */
declare function CompanyDetail(): CompanyDetail;
type CompanyDetail = {
    /**
     * - NA.
     */
    name?: string;
    /**
     * - NA.
     */
    id?: number;
};
/** @returns {Seller} */
declare function Seller(): Seller;
type Seller = {
    /**
     * - NA.
     */
    uid?: number;
    /**
     * - NA.
     */
    name?: string;
    /**
     * - NA.
     */
    count?: number;
};
/** @returns {ProductStockStatusItem} */
declare function ProductStockStatusItem(): ProductStockStatusItem;
type ProductStockStatusItem = {
    /**
     * - NA.
     */
    uid?: string;
    /**
     * - NA.
     */
    quantity?: number;
    store?: StoreDetail;
    /**
     * - NA.
     */
    size?: string;
    price?: ProductStockPrice;
    company?: CompanyDetail;
    /**
     * - NA.
     */
    item_id?: number;
    seller?: Seller;
    identifier?: Identifier;
};
/** @returns {ProductStockStatusResponseSchema} */
declare function ProductStockStatusResponseSchema(): ProductStockStatusResponseSchema;
type ProductStockStatusResponseSchema = {
    /**
     * - NA.
     */
    items?: ProductStockStatusItem[];
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
/** @returns {ProductStockPolling} */
declare function ProductStockPolling(): ProductStockPolling;
type ProductStockPolling = {
    /**
     * - NA.
     */
    items?: ProductStockStatusItem[];
    page: Page;
};
/** @returns {ProductVariantListingResponseSchema} */
declare function ProductVariantListingResponseSchema(): ProductVariantListingResponseSchema;
type ProductVariantListingResponseSchema = {
    /**
     * - Header or title for the product variant section.
     */
    header?: string;
    /**
     * - List of Upto 5
     * product variant items.
     */
    items?: ProductVariantItemResponseSchema[];
    /**
     * - The total number of product variants available.
     */
    total?: number;
    /**
     * - Attribute identifier of the variant.
     */
    key?: string;
    /**
     * - The type of display for the product
     * variant (e.g., image, text, image, color).
     */
    display_type?: string;
};
/** @returns {ProductListingDetail} */
declare function ProductListingDetail(): ProductListingDetail;
type ProductListingDetail = {
    /**
     * - Unique identifier for the product.
     */
    uid?: number;
    custom_order?: ProductDetailCustomOrder;
    /**
     * - Available sizes for the product.
     */
    sizes?: string[];
    category_map?: ProductCategoryMap;
    net_quantity?: NetQuantity;
    /**
     * - The number of ratings the product has received.
     */
    rating_count?: number;
    /**
     * - Custom metadata fields
     * associated with the product.
     */
    _custom_meta?: CustomMetaFields[];
    /**
     * - List of products marked similar to given product.
     */
    similars?: string[];
    /**
     * - Tags associated with the product for better
     * categorization.
     */
    tags?: string[];
    seo?: ApplicationItemSEO;
    /**
     * - Type of the images associated with the
     * product such as standard.
     */
    image_nature?: string;
    /**
     * - Indicates whether the product has variants.
     */
    has_variant?: boolean;
    /**
     * - This field describes the type of item,
     * indicating the category or nature of the product. Possible values are
     * Standard, Composite, Wet, Digital.
     */
    item_type?: string;
    /**
     * - Detailed description of the product.
     */
    description?: string;
    /**
     * - Grouped
     * attributes detailing various characteristics of the product.
     */
    grouped_attributes?: ProductDetailGroupedAttribute[];
    /**
     * - Media files associated with the product.
     */
    medias?: Media[];
    /**
     * - Color of the product, if applicable.
     */
    color?: string;
    /**
     * - Product type or classification.
     */
    type?: string;
    /**
     * - Date and time when the product was
     * made available online.
     */
    product_online_date?: string;
    /**
     * - Custom JSON object for additional product data.
     */
    _custom_json?: any;
    /**
     * - Item Code defined for the product.
     */
    item_code?: string;
    /**
     * - Name of the product.
     */
    name?: string;
    moq?: ApplicationItemMOQ;
    /**
     * - Brief description of the product.
     */
    short_description?: string;
    /**
     * - List of product categories
     * associated with the product.
     */
    categories?: ProductBrand[];
    /**
     * - Indicates whether the product is available for sale.
     */
    sellable?: boolean;
    /**
     * - Additional attributes or characteristics of
     * the product.
     */
    attributes?: any;
    /**
     * - List of
     * product variants available for the product.
     */
    variants?: ProductVariantListingResponseSchema[];
    /**
     * - Discount details or percentage applied to the product.
     */
    discount?: string;
    /**
     * - List of tryout options available for the product.
     */
    tryouts?: string[];
    /**
     * - List of seller identifiers for the product.
     */
    identifiers?: string[];
    /**
     * - URL-friendly identifier for the product.
     */
    slug: string;
    action?: ProductListingAction;
    /**
     * - Rating of the product.
     */
    rating?: number;
    /**
     * - Indicates whether the product can be
     * sold as an individual product.
     */
    is_dependent?: boolean;
    /**
     * - List of bundle/product grouping
     * slugs mapped to the product.
     */
    product_group_tag?: string[];
    /**
     * - Key highlights or features of the product.
     */
    highlights?: string[];
    price?: ProductListingPrice;
    brand?: ProductBrand;
    /**
     * - Teaser tag or short promotional phrase for
     * the product.
     */
    teaser_tag?: string;
};
/** @returns {ProductFiltersValue} */
declare function ProductFiltersValue(): ProductFiltersValue;
type ProductFiltersValue = {
    /**
     * - Minimum value for the range filter.
     */
    min?: number;
    /**
     * - Format in which the filter value is displayed.
     */
    display_format?: string;
    /**
     * - The maximum value selected by the user
     * for range filter.
     */
    selected_max?: number;
    /**
     * - Value associated with the filter option.
     */
    value?: string;
    /**
     * - Format used for the filter value in queries.
     */
    query_format?: string;
    /**
     * - Currency symbol for the price type filters.
     */
    currency_symbol?: string;
    /**
     * - The minimum value selected by the user
     * for range filter.
     */
    selected_min?: number;
    /**
     * - Currency code for the currency used for
     * price type filters.
     */
    currency_code?: string;
    /**
     * - Whether this filter value is currently selected.
     */
    is_selected: boolean;
    /**
     * - Display name or label for the filter value.
     */
    display: string;
    /**
     * - Number of products that match this filter value.
     */
    count?: number;
    /**
     * - Maximum value of the filter range.
     */
    max?: number;
};
/** @returns {ProductFiltersKey} */
declare function ProductFiltersKey(): ProductFiltersKey;
type ProductFiltersKey = {
    /**
     * - URL or path to the logo associated with the filter key.
     */
    logo?: string;
    /**
     * - Name or identifier of the filter key.
     */
    name: string;
    /**
     * - Type or category of the filter key (e.g., range,
     * multivalued).
     */
    kind?: string;
    /**
     * - Display name or label for the filter key.
     */
    display: string;
};
/** @returns {ProductFilters} */
declare function ProductFilters(): ProductFilters;
type ProductFilters = {
    /**
     * - List of filter values associated
     * with the filter key.
     */
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
/** @returns {ProductSortOn} */
declare function ProductSortOn(): ProductSortOn;
type ProductSortOn = {
    /**
     * - URL or path to the logo associated with the sorting option.
     */
    logo?: string;
    /**
     * - Indicates whether this sorting option is
     * currently selected.
     */
    is_selected?: boolean;
    /**
     * - Name or identifier of the sorting option.
     */
    name?: string;
    /**
     * - Value used to specify the sorting order (e.g.,
     * price_asc, discount_dsc).
     */
    value?: string;
    /**
     * - Display name or label for the sorting option.
     */
    display?: string;
};
/** @returns {ProductListingResponseSchema} */
declare function ProductListingResponseSchema(): ProductListingResponseSchema;
type ProductListingResponseSchema = {
    /**
     * - List of product details included
     * in the response.
     */
    items?: ProductListingDetail[];
    /**
     * - List of filters available for
     * refining the product listings.
     */
    filters?: ProductFilters[];
    page: Page;
    /**
     * - List of sorting options available for
     * the product listings.
     */
    sort_on?: ProductSortOn[];
};
/** @returns {ImageUrls} */
declare function ImageUrls(): ImageUrls;
type ImageUrls = {
    portrait?: Media;
    landscape?: Media;
};
/** @returns {BrandItem} */
declare function BrandItem(): BrandItem;
type BrandItem = {
    /**
     * - The unique identifier for the brand.
     */
    uid?: number;
    logo?: Media;
    /**
     * - Detailed description of the brand,
     * including its history, values, product offerings, and other relevant information.
     */
    description?: string;
    banners?: ImageUrls;
    /**
     * - Lists the departments or categories
     * under which the brand's products are listed.
     */
    departments?: string[];
    /**
     * - Details about any discounts currently
     * available on the brand's products.
     */
    discount?: string;
    /**
     * - Name of the brand.
     */
    name?: string;
    /**
     * - URL-friendly version of the brand's name, used in
     * the web address to access the brand's page on the platform.
     */
    slug?: string;
    action?: ProductListingAction;
};
/** @returns {BrandListingResponseSchema} */
declare function BrandListingResponseSchema(): BrandListingResponseSchema;
type BrandListingResponseSchema = {
    /**
     * - List of brand items included in the response.
     */
    items?: BrandItem[];
    page: Page;
};
/** @returns {BrandDetailResponseSchema} */
declare function BrandDetailResponseSchema(): BrandDetailResponseSchema;
type BrandDetailResponseSchema = {
    logo?: Media;
    /**
     * - The unique identifier for the brand.
     */
    uid?: number;
    /**
     * - Detailed description of the brand,
     * including its history, values, product offerings, and other relevant information.
     */
    description?: string;
    banners?: ImageUrls;
    /**
     * - Custom JSON data related to the brand,
     * allowing for additional metadata.
     */
    _custom_json?: any;
    /**
     * - Name of the brand.
     */
    name?: string;
};
/** @returns {CategoryBanner} */
declare function CategoryBanner(): CategoryBanner;
type CategoryBanner = {
    portrait: Media;
    landscape: Media;
};
/** @returns {ThirdLevelChild} */
declare function ThirdLevelChild(): ThirdLevelChild;
type ThirdLevelChild = {
    /**
     * - Unique identifier for the L3 category.
     */
    uid?: number;
    banners?: ImageUrls;
    /**
     * - List of categories under the L3 category.
     */
    childs?: any[];
    /**
     * - Custom JSON data related to the L3
     * category, allowing for additional metadata.
     */
    _custom_json?: any;
    /**
     * - Name of the L3 category.
     */
    name?: string;
    /**
     * - Slug or URL-friendly identifier for the L3 category.
     */
    slug?: string;
    action?: ProductListingAction;
};
/** @returns {SecondLevelChild} */
declare function SecondLevelChild(): SecondLevelChild;
type SecondLevelChild = {
    /**
     * - Unique identifier for the L2 category.
     */
    uid?: number;
    banners?: ImageUrls;
    /**
     * - List of categories under the L2 category.
     */
    childs?: ThirdLevelChild[];
    /**
     * - Custom JSON data related to the L2
     * category, allowing for additional metadata.
     */
    _custom_json?: any;
    /**
     * - Name of the L2 category.
     */
    name?: string;
    /**
     * - Slug or URL-friendly identifier for the L2 category.
     */
    slug?: string;
    action?: ProductListingAction;
};
/** @returns {Child} */
declare function Child(): Child;
type Child = {
    /**
     * - Unique identifier for the L1 category.
     */
    uid?: number;
    banners?: ImageUrls;
    /**
     * - List of categories under the L1 category.
     */
    childs?: SecondLevelChild[];
    /**
     * - Custom JSON data related to the L1
     * category, allowing for additional metadata.
     */
    _custom_json?: any;
    /**
     * - Name of the L1 category.
     */
    name?: string;
    /**
     * - Slug or URL-friendly identifier for the L1 category.
     */
    slug?: string;
    action?: ProductListingAction;
};
/** @returns {CategoryItems} */
declare function CategoryItems(): CategoryItems;
type CategoryItems = {
    /**
     * - Unique identifier for the category.
     */
    uid: number;
    banners: CategoryBanner;
    /**
     * - List of L1 categories under the main category.
     */
    childs?: Child[];
    /**
     * - Name of the category.
     */
    name: string;
    /**
     * - Slug or URL-friendly identifier for the category.
     */
    slug: string;
    action: ProductListingAction;
};
/** @returns {DepartmentCategoryTree} */
declare function DepartmentCategoryTree(): DepartmentCategoryTree;
type DepartmentCategoryTree = {
    /**
     * - List of categories within the department.
     */
    items?: CategoryItems[];
    /**
     * - Name of the department.
     */
    department: string;
};
/** @returns {DepartmentIdentifier} */
declare function DepartmentIdentifier(): DepartmentIdentifier;
type DepartmentIdentifier = {
    /**
     * - Unique identifier for the department.
     */
    uid?: number;
    /**
     * - Slug or URL-friendly identifier for the department.
     */
    slug?: string;
};
/** @returns {CategoryListingResponseSchema} */
declare function CategoryListingResponseSchema(): CategoryListingResponseSchema;
type CategoryListingResponseSchema = {
    /**
     * - List of department category trees.
     */
    data?: DepartmentCategoryTree[];
    /**
     * - List of departments.
     */
    departments?: DepartmentIdentifier[];
};
/** @returns {CategoryMetaResponseSchema} */
declare function CategoryMetaResponseSchema(): CategoryMetaResponseSchema;
type CategoryMetaResponseSchema = {
    logo?: Media;
    /**
     * - Unique identifier for the category.
     */
    uid?: number;
    banners?: ImageUrls;
    /**
     * - Custom JSON data related to the category,
     * allowing for additional metadata.
     */
    _custom_json?: any;
    /**
     * - Name of the category.
     */
    name?: string;
};
/** @returns {HomeListingResponseSchema} */
declare function HomeListingResponseSchema(): HomeListingResponseSchema;
type HomeListingResponseSchema = {
    /**
     * - List of product details
     * displayed on the home page.
     */
    items?: ProductListingDetail[];
    page: Page;
    /**
     * - Message related to the home listing response.
     */
    message?: string;
};
/** @returns {Department} */
declare function Department(): Department;
type Department = {
    /**
     * - Unique identifier for the department.
     */
    uid?: number;
    logo?: Media;
    /**
     * - Specifies the display order of the
     * department, determining its position in lists and navigation menus based on
     * priority.
     */
    priority_order?: number;
    /**
     * - Name of the department.
     */
    name?: string;
    /**
     * - URL-friendly version of the department's name,
     * used in the web address to access the department's page on the platform.
     */
    slug?: string;
};
/** @returns {DepartmentResponseSchema} */
declare function DepartmentResponseSchema(): DepartmentResponseSchema;
type DepartmentResponseSchema = {
    /**
     * - List of department detail objects.
     */
    items?: Department[];
};
/** @returns {AutocompleteItem} */
declare function AutocompleteItem(): AutocompleteItem;
type AutocompleteItem = {
    logo?: Media;
    /**
     * - Text or value displayed for the autocomplete item.
     */
    display?: string;
    /**
     * - The type of action such as product, products,
     * category, brand.
     */
    type?: string;
    /**
     * - Custom JSON data related to the
     * autocomplete item, allowing for additional metadata.
     */
    _custom_json?: any;
    action?: ProductListingAction;
};
/** @returns {AutoCompleteResponseSchema} */
declare function AutoCompleteResponseSchema(): AutoCompleteResponseSchema;
type AutoCompleteResponseSchema = {
    /**
     * - List of autocomplete items suggested
     * based on user input.
     */
    items?: AutocompleteItem[];
};
/** @returns {CollectionQuery} */
declare function CollectionQuery(): CollectionQuery;
type CollectionQuery = {
    /**
     * - The operator used for filtering the collection.
     */
    op: string;
    /**
     * - The values used for filtering based on the attribute.
     */
    value: any[];
    /**
     * - The attribute on which the filter is applied.
     */
    attribute: string;
};
/** @returns {GetCollectionDetailNest} */
declare function GetCollectionDetailNest(): GetCollectionDetailNest;
type GetCollectionDetailNest = {
    /**
     * - Indicates whether the collection is currently active.
     */
    is_active?: boolean;
    /**
     * - The unique identifier for the collection.
     */
    uid?: string;
    /**
     * - The attribute by which the collection items are sorted.
     */
    sort_on?: string;
    /**
     * - Additional metadata related to the collection.
     */
    meta?: any;
    banners?: ImageUrls;
    /**
     * - Cron details for scheduling related to the collection.
     */
    cron?: any;
    /**
     * - The `Schedule` schema defines the timing and
     * details for recurring or one-time tasks. It includes information on when
     * the job should start and end, the frequency of the task, and any additional
     * metadata. This schema helps in scheduling jobs or tasks based on specified
     * timings and durations.
     */
    _schedule?: any;
    /**
     * - A list of queries used to filter the
     * collection.
     */
    query?: CollectionQuery[];
    /**
     * - A detailed description of the collection.
     */
    description?: string;
    /**
     * - Type of collections e.g query, items.
     */
    type?: string;
    /**
     * - Custom JSON data associated with the collection.
     */
    _custom_json?: any;
    /**
     * - The name of the collection.
     */
    name?: string;
    /**
     * - Indicates if sorting is allowed for this collection.
     */
    allow_sort?: boolean;
    /**
     * - Keys of the facets visible for
     * filtering within the collection.
     */
    visible_facets_keys?: string[];
    /**
     * - Badge information associated with the collection.
     */
    badge?: any;
    /**
     * - The URL-friendly identifier for the collection.
     */
    slug?: string;
    action?: ProductListingAction;
    /**
     * - Indicates if facets are allowed for
     * filtering within the collection.
     */
    allow_facets?: boolean;
    logo?: Media;
    /**
     * - Priority level of the collection for sorting
     * or display purposes.
     */
    priority?: number;
    /**
     * - Tags associated with the collection.
     */
    tags?: string[];
    /**
     * - Application ID associated with the collection.
     */
    app_id?: string;
};
/** @returns {CollectionListingFilterTag} */
declare function CollectionListingFilterTag(): CollectionListingFilterTag;
type CollectionListingFilterTag = {
    /**
     * - The name of the tag. This is typically used as a
     * label for filtering purposes.
     */
    name?: string;
    /**
     * - A flag indicating whether the tag is
     * currently selected as a filter option.
     */
    is_selected?: boolean;
    /**
     * - The display name of the tag. This may be a
     * user-friendly version of the tag name shown in the UI.
     */
    display?: string;
};
/** @returns {CollectionListingFilterType} */
declare function CollectionListingFilterType(): CollectionListingFilterType;
type CollectionListingFilterType = {
    /**
     * - The name of the filter type. This indicates the
     * type of filtering being applied, such as items, query.
     */
    name?: string;
    /**
     * - A flag indicating whether this filter
     * type is currently selected as a filter option.
     */
    is_selected?: boolean;
    /**
     * - The display name of the filter type. This is
     * the user-friendly name shown in the UI for the filter type.
     */
    display?: string;
};
/** @returns {CollectionListingFilter} */
declare function CollectionListingFilter(): CollectionListingFilter;
type CollectionListingFilter = {
    /**
     * - An array of tag filters
     * available for the collection listings. Each tag allows for filtering based
     * on specific attributes.
     */
    tags?: CollectionListingFilterTag[];
    /**
     * - An array of filter types
     * available for the collection listings. Each type represents a different
     * category or attribute for filtering.
     */
    type?: CollectionListingFilterType[];
};
/** @returns {GetCollectionListingResponseSchema} */
declare function GetCollectionListingResponseSchema(): GetCollectionListingResponseSchema;
type GetCollectionListingResponseSchema = {
    /**
     * - An array of collection
     * details. Each item in the array represents a collection with various
     * attributes and configurations.
     */
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
    page: Page;
};
/** @returns {CollectionDetailResponseSchema} */
declare function CollectionDetailResponseSchema(): CollectionDetailResponseSchema;
type CollectionDetailResponseSchema = {
    /**
     * - Indicates whether the collection is active.
     */
    is_active?: boolean;
    /**
     * - Criteria used to sort the items within the
     * collection, such as price, popularity, or newest first.
     */
    sort_on?: string;
    /**
     * - Metadata associated with the collection.
     */
    meta?: any;
    banners?: ImageUrls;
    /**
     * - Cron schedule details related to the collection,
     * if applicable.
     */
    cron?: any;
    /**
     * - Schedule details for the collection,
     * including timing and duration information.
     */
    _schedule?: any;
    /**
     * - Search or filter query used to
     * dynamically generate the collection based on specific criteria or conditions.
     */
    query?: CollectionQuery[];
    /**
     * - Detailed description of the collection,.
     */
    description?: string;
    /**
     * - Type of collection, specifying the nature or
     * category of the collection.
     */
    type?: string;
    /**
     * - Custom JSON object containing additional
     * properties specific to the collection.
     */
    _custom_json?: any;
    /**
     * - The name of the collection.
     */
    name?: string;
    /**
     * - Indicates if sorting is allowed for this collection.
     */
    allow_sort?: boolean;
    /**
     * - Keys of the facets visible for
     * filtering within the collection.
     */
    visible_facets_keys?: string[];
    /**
     * - Badge information associated with the collection.
     */
    badge?: any;
    /**
     * - The URL-friendly identifier for the collection.
     */
    slug?: string;
    /**
     * - Indicates if facets are allowed for
     * filtering within the collection.
     */
    allow_facets?: boolean;
    logo?: Media;
    /**
     * - Priority level of the collection for sorting
     * or display purposes.
     */
    priority?: number;
    /**
     * - Tags associated with the collection.
     */
    tag?: string[];
    /**
     * - Application ID associated with the collection.
     */
    app_id?: string;
};
/** @returns {GetFollowListingResponseSchema} */
declare function GetFollowListingResponseSchema(): GetFollowListingResponseSchema;
type GetFollowListingResponseSchema = {
    /**
     * - An array of product details that
     * the user is following. Each item includes information such as the product
     * name, price, and other attributes.
     */
    items: ProductListingDetail[];
    page: Page;
};
/** @returns {FollowPostResponseSchema} */
declare function FollowPostResponseSchema(): FollowPostResponseSchema;
type FollowPostResponseSchema = {
    /**
     * - A message indicating the result of the follow or
     * unfollow operation. This could be a confirmation message or an error message.
     */
    message: string;
    /**
     * - A unique identifier for the follow operation, which
     * can be used to reference or track the follow status.
     */
    id: string;
};
/** @returns {FollowerCountResponseSchema} */
declare function FollowerCountResponseSchema(): FollowerCountResponseSchema;
type FollowerCountResponseSchema = {
    /**
     * - The number of followers for the item. This count
     * indicates how many users are following the specified item.
     */
    count?: number;
};
/** @returns {FollowIdsData} */
declare function FollowIdsData(): FollowIdsData;
type FollowIdsData = {
    /**
     * - An array of IDs representing the products
     * that the user is following.
     */
    products?: number[];
    /**
     * - An array of IDs representing the
     * collections that the user is following.
     */
    collections?: number[];
    /**
     * - An array of IDs representing the brands that
     * the user is following.
     */
    brands?: number[];
};
/** @returns {FollowIdsResponseSchema} */
declare function FollowIdsResponseSchema(): FollowIdsResponseSchema;
type FollowIdsResponseSchema = {
    data?: FollowIdsData;
};
/** @returns {LatLong} */
declare function LatLong(): LatLong;
type LatLong = {
    /**
     * - An array containing the latitude and
     * longitude values of the location.
     */
    coordinates?: number[];
    /**
     * - The type of geographic coordinate system used.
     * For example, "Point" indicates a single point in a geographic coordinate system.
     */
    type?: string;
};
/** @returns {StoreContact} */
declare function StoreContact(): StoreContact;
type StoreContact = {
    /**
     * - The contact number of the Store Manager.
     */
    number?: string;
    /**
     * - The country code for the contact number.
     */
    country_code?: number;
};
/** @returns {Store} */
declare function Store(): Store;
type Store = {
    /**
     * - A unique identifier for the store.
     */
    uid?: number;
    /**
     * - The manager's email address for the store.
     */
    store_email?: string;
    /**
     * - The state or province where the store is located.
     */
    state?: string;
    /**
     * - The country where the store is located.
     */
    country?: string;
    /**
     * - The postal code or zip code for the store's location.
     */
    pincode?: number;
    /**
     * - The city where the store is located.
     */
    city?: string;
    /**
     * - The street address of the store.
     */
    address?: string;
    /**
     * - A unique code or identifier for the store,
     * often used for internal reference.
     */
    store_code?: string;
    lat_long?: LatLong;
    /**
     * - The name of the store.
     */
    name?: string;
    /**
     * - The list of tags mapped to the store.
     */
    tags?: string[];
    /**
     * - List of contact numbers for the store.
     */
    contacts?: StoreContact[];
};
/** @returns {StoreListingResponseSchema} */
declare function StoreListingResponseSchema(): StoreListingResponseSchema;
type StoreListingResponseSchema = {
    /**
     * - An array of store details. Each store includes
     * information such as name, address, and geographic coordinates.
     */
    items: Store[];
    page: Page;
};
/** @returns {StoreDepartments} */
declare function StoreDepartments(): StoreDepartments;
type StoreDepartments = {
    /**
     * - The unique identifier assigned to the store department.
     */
    uid?: number;
    /**
     * - An object containing information about the store
     * department's logo, such as the URL or other related media details.
     */
    logo?: any;
    /**
     * - The priority or ranking of the
     * department within the store. This field is used to determine the order in
     * which departments are displayed or processed.
     */
    priority_order?: number;
    /**
     * - The name of the store department, which is
     * typically used for display and identification purposes.
     */
    name?: string;
    /**
     * - A URL-friendly identifier for the store
     * department, often used in web addresses and routing to uniquely identify
     * the department.
     */
    slug?: string;
};
/** @returns {CompanyStore} */
declare function CompanyStore(): CompanyStore;
type CompanyStore = {
    /**
     * - The unique identifier for the company store.
     */
    uid?: number;
    /**
     * - The name of the company store.
     */
    name?: string;
    /**
     * - The type of company, which can be one of
     * the following: - `distributor`: Distributor - `franchise`: Franchise -
     * `mbo`: MBO (Managed Business Operations) - `manufacturer-owner`: Owner/Manufacturer.
     */
    company_type?: string;
    /**
     * - The type of business structure, which
     * can be one of the following: - `Private`: Private Limited Company -
     * `LLP/Partnership`: Limited Liability Partnership or Partnership -
     * `HUF/Proprietorship`: Hindu Undivided Family or Proprietorship.
     */
    business_type?: string;
};
/** @returns {SellerPhoneNumber} */
declare function SellerPhoneNumber(): SellerPhoneNumber;
type SellerPhoneNumber = {
    /**
     * - The country code of the seller's phone number.
     */
    country_code: number;
    /**
     * - The seller's contact number.
     */
    number: string;
};
/** @returns {StoreManagerSchema} */
declare function StoreManagerSchema(): StoreManagerSchema;
type StoreManagerSchema = {
    /**
     * - The name of the store manager.
     */
    name?: string;
    /**
     * - The email address of the store manager.
     */
    email?: string;
    mobile_no?: SellerPhoneNumber;
};
/** @returns {StoreAddressSchema} */
declare function StoreAddressSchema(): StoreAddressSchema;
type StoreAddressSchema = {
    /**
     * - The latitude of the store's location.
     */
    latitude?: number;
    /**
     * - The state where the store is located.
     */
    state?: string;
    /**
     * - The country where the store is located.
     */
    country?: string;
    /**
     * - A landmark near the store.
     */
    landmark?: string;
    /**
     * - The address line 1 of the store.
     */
    address1?: string;
    /**
     * - The postal code for the store's location.
     */
    pincode?: number;
    /**
     * - The city where the store is located.
     */
    city?: string;
    /**
     * - The longitude of the store's location.
     */
    longitude?: number;
    /**
     * - The address line2 of the store.
     */
    address2?: string;
};
/** @returns {AppStore} */
declare function AppStore(): AppStore;
type AppStore = {
    /**
     * - The unique identifier for the application store.
     */
    uid?: number;
    /**
     * - A list of departments within the store.
     */
    departments?: StoreDepartments[];
    company?: CompanyStore;
    manager?: StoreManagerSchema;
    /**
     * - A unique code for identifying the store.
     */
    store_code?: string;
    address?: StoreAddressSchema;
    /**
     * - The name of the store.
     */
    name?: string;
    /**
     * - A list of contact numbers
     * for the store.
     */
    contact_numbers?: SellerPhoneNumber[];
};
/** @returns {ApplicationStoreListing} */
declare function ApplicationStoreListing(): ApplicationStoreListing;
type ApplicationStoreListing = {
    /**
     * - A list of filters applied to the store listing.
     */
    filters?: any[];
    /**
     * - A list of application stores.
     */
    items?: AppStore[];
    page?: Page;
};
/** @returns {Time} */
declare function Time(): Time;
type Time = {
    /**
     * - The hour part of the time.
     */
    hour?: number;
    /**
     * - The minute part of the time.
     */
    minute?: number;
};
/** @returns {StoreTiming} */
declare function StoreTiming(): StoreTiming;
type StoreTiming = {
    /**
     * - Indicates if the store is open on this day.
     */
    open?: boolean;
    closing?: Time;
    /**
     * - The day of the week.
     */
    weekday?: string;
    opening?: Time;
};
/** @returns {StoreDetails} */
declare function StoreDetails(): StoreDetails;
type StoreDetails = {
    /**
     * - The unique identifier for the store.
     */
    uid?: number;
    /**
     * - A list of departments within the store.
     */
    departments?: StoreDepartments[];
    company?: CompanyStore;
    manager?: StoreManagerSchema;
    /**
     * - A unique code for identifying the store.
     */
    store_code?: string;
    /**
     * - The opening and closing times for the
     * store throughout the week.
     */
    timing?: StoreTiming[];
    address?: StoreAddressSchema;
    /**
     * - Custom JSON data for the store.
     */
    _custom_json?: any;
    /**
     * - The name of the store.
     */
    name?: string;
    /**
     * - A list of contact numbers
     * for the store.
     */
    contact_numbers?: SellerPhoneNumber[];
};
/** @returns {UserDetail} */
declare function UserDetail(): UserDetail;
type UserDetail = {
    /**
     * - A flag indicating whether the user is a super user.
     */
    super_user?: boolean;
    /**
     * - The contact details of the user.
     */
    contact?: string;
    /**
     * - The username of the user.
     */
    username: string;
    /**
     * - The user ID of the user.
     */
    user_id: string;
};
/** @returns {Size} */
declare function Size(): Size;
type Size = {
    /**
     * - The quantity of this size available.
     */
    quantity?: number;
    /**
     * - The value of the size.
     */
    value?: any;
    /**
     * - The display string for the size.
     */
    display?: any;
    /**
     * - Whether or not this size is available.
     */
    is_available?: boolean;
};
/** @returns {ProductGroupPrice} */
declare function ProductGroupPrice(): ProductGroupPrice;
type ProductGroupPrice = {
    /**
     * - The maximum effective price of the product group.
     */
    max_effective?: number;
    /**
     * - The minimum effective price of the product group.
     */
    min_effective?: number;
    /**
     * - The minimum marked price of the product group.
     */
    min_marked?: number;
    /**
     * - The currency code for the prices.
     */
    currency?: any;
    /**
     * - The maximum marked price of the product group.
     */
    max_marked?: number;
};
/** @returns {ProductDetails} */
declare function ProductDetails(): ProductDetails;
type ProductDetails = {
    /**
     * - The template tag of the product.
     */
    template_tag?: any;
    /**
     * - The number of ratings the product has received.
     */
    rating_count?: number;
    /**
     * - The nature of the product's images.
     */
    image_nature?: any;
    /**
     * - Whether or not the product has a variant.
     */
    has_variant?: boolean;
    /**
     * - The long description of the product.
     */
    description?: any;
    /**
     * - Whether or not the product is out of stock.
     */
    out_of_stock?: boolean;
    /**
     * - The HSN code of the product.
     */
    hsn_code?: number;
    /**
     * - A dictionary of grouped product attributes.
     */
    grouped_attributes?: any;
    /**
     * - The item code of the product.
     */
    item_code?: any;
    /**
     * - The name of the product.
     */
    name?: any;
    /**
     * - The country of origin for the product.
     */
    country_of_origin?: any;
    /**
     * - The short description of the product.
     */
    short_description?: any;
    /**
     * - A list of media objects for the product.
     */
    media?: any[];
    /**
     * - A dictionary of product attributes.
     */
    attributes?: any;
    /**
     * - Whether or not the product is a set of items.
     */
    is_set?: boolean;
    /**
     * - A list of image URLs for the product.
     */
    images?: any[];
    /**
     * - The slug of the product.
     */
    slug?: any;
    /**
     * - The rating of the product.
     */
    rating?: number;
    identifier?: Identifier;
    /**
     * - A list of highlights for the product.
     */
    highlights?: any[];
    /**
     * - The unique ID of the product's brand.
     */
    brand_uid?: number;
};
/** @returns {ProductInGroup} */
declare function ProductInGroup(): ProductInGroup;
type ProductInGroup = {
    /**
     * - Whether the product should be
     * automatically added to the cart.
     */
    auto_add_to_cart?: boolean;
    /**
     * - The maximum quantity of the product that
     * can be added to the cart.
     */
    max_quantity: number;
    /**
     * - The available sizes for the product.
     */
    sizes?: Size[];
    /**
     * - The price details for the product.
     */
    price?: ProductGroupPrice;
    /**
     * - Whether the product should be
     * automatically selected.
     */
    auto_select?: boolean;
    /**
     * - The details of the product.
     */
    product_details?: ProductDetails;
    /**
     * - The minimum quantity of the product that
     * can be added to the cart.
     */
    min_quantity?: number;
    /**
     * - Whether the product can be removed from the cart.
     */
    allow_remove?: boolean;
    /**
     * - The unique ID of the product in the group.
     */
    product_uid: number;
};
/** @returns {ProductGroupingModel} */
declare function ProductGroupingModel(): ProductGroupingModel;
type ProductGroupingModel = {
    /**
     * - The URL for the logo of the product group.
     */
    logo?: string;
    /**
     * - Whether the product grouping is active.
     */
    is_active?: boolean;
    /**
     * - A dictionary containing metadata information.
     */
    meta?: any;
    /**
     * - User details of the verifier of the
     * document, if applicable.
     */
    verified_by?: UserDetail;
    /**
     * - Timestamp of the creation of the document.
     */
    created_on: string;
    /**
     * - The ID of the company that owns the product grouping.
     */
    company_id?: number;
    /**
     * - A list of page visibilities of the
     * product grouping.
     */
    page_visibility?: any[];
    /**
     * - Timestamp of the last modification of the document.
     */
    modified_on: string;
    /**
     * - User details of the creator of the document.
     */
    created_by?: UserDetail;
    /**
     * - User details of the last modifier of
     * the document.
     */
    modified_by?: UserDetail;
    /**
     * - A list of products in the grouping.
     */
    products: ProductInGroup[];
    /**
     * - Whether the products are
     * assigned to the same store.
     */
    same_store_assignment?: boolean;
    /**
     * - Unique identifier of the product grouping.
     */
    _id?: any;
    /**
     * - The name of the product grouping.
     */
    name: any;
    /**
     * - The choice of the product grouping.
     */
    choice?: any;
    /**
     * - The unique identifier for the product grouping.
     */
    slug?: any;
    /**
     * - Timestamp of when the document was
     * verified, if applicable.
     */
    verified_on?: string;
};
/** @returns {ProductBundle} */
declare function ProductBundle(): ProductBundle;
type ProductBundle = {
    /**
     * - Represents list of
     * bundles/product groupings.
     */
    items?: ProductGroupingModel[];
};
/** @returns {StoreV3} */
declare function StoreV3(): StoreV3;
type StoreV3 = {
    /**
     * - The unique identifier for the store.
     */
    uid?: number;
    /**
     * - The name of the store.
     */
    name?: string;
    /**
     * - The count associated with the store.
     */
    count?: number;
};
/** @returns {ArticleAssignmentV3} */
declare function ArticleAssignmentV3(): ArticleAssignmentV3;
type ArticleAssignmentV3 = {
    /**
     * - Method used for article assignment, such as
     * optimal, fast-delivery, low-price, or manual.
     */
    strategy?: string;
    /**
     * - Scope of assignment, which can be
     * multi-companies, single-company, or single-store.
     */
    level?: string;
};
/** @returns {StrategyWiseListingSchemaV3} */
declare function StrategyWiseListingSchemaV3(): StrategyWiseListingSchemaV3;
type StrategyWiseListingSchemaV3 = {
    /**
     * - Distance between bullfight location and
     * customer location in kilometers. .
     */
    distance?: number;
    /**
     * - Pincode mapped based on strategy.
     */
    pincode?: number;
    /**
     * - Turn around Time to deliver the product with this strategy.
     */
    tat?: number;
    /**
     * - The quantity available for assigned store.
     */
    quantity?: number;
};
/** @returns {DetailsSchemaV3} */
declare function DetailsSchemaV3(): DetailsSchemaV3;
type DetailsSchemaV3 = {
    /**
     * - The value of the attribute.
     */
    value?: string;
    /**
     * - The type of detail e.g, text.
     */
    type?: string;
    /**
     * - The attribute key associated with the size.
     */
    key?: string;
};
/** @returns {SellerGroupAttributes} */
declare function SellerGroupAttributes(): SellerGroupAttributes;
type SellerGroupAttributes = {
    /**
     * - The title of the attribute group.
     */
    title?: string;
    /**
     * - Detail of the attribute.
     */
    details?: DetailsSchemaV3[];
};
/** @returns {ReturnConfigSchemaV3} */
declare function ReturnConfigSchemaV3(): ReturnConfigSchemaV3;
type ReturnConfigSchemaV3 = {
    /**
     * - The unit for the return configuration.
     */
    unit?: string;
    /**
     * - Indicates if the item is returnable.
     */
    returnable?: boolean;
    /**
     * - The time duration for the return policy.
     */
    time?: number;
};
/** @returns {ProductSetDistributionSizeV3} */
declare function ProductSetDistributionSizeV3(): ProductSetDistributionSizeV3;
type ProductSetDistributionSizeV3 = {
    /**
     * - The number of pieces available in this size.
     */
    pieces?: number;
    /**
     * - The size of the product.
     */
    size?: string;
};
/** @returns {ProductSetDistributionV3} */
declare function ProductSetDistributionV3(): ProductSetDistributionV3;
type ProductSetDistributionV3 = {
    /**
     * - A list of size
     * distributions in the product set.
     */
    sizes?: ProductSetDistributionSizeV3[];
};
/** @returns {ProductSetV3} */
declare function ProductSetV3(): ProductSetV3;
type ProductSetV3 = {
    /**
     * - The quantity of products in the set.
     */
    quantity?: number;
    size_distribution?: ProductSetDistributionV3;
};
/** @returns {ProductStockPriceV3} */
declare function ProductStockPriceV3(): ProductStockPriceV3;
type ProductStockPriceV3 = {
    /**
     * - The effective or final price for the product
     * at the given pincode.
     */
    effective?: number;
    /**
     * - The currency code for which the product
     * is available.
     */
    currency_code?: string;
    /**
     * - The currency symbol for the currency
     * in which the product is available.
     */
    currency_symbol?: string;
    /**
     * - The marked price of the product.
     */
    marked?: number;
    /**
     * - The selling price of the product.
     */
    selling?: number;
};
/** @returns {ProductStockUnitPriceV3} */
declare function ProductStockUnitPriceV3(): ProductStockUnitPriceV3;
type ProductStockUnitPriceV3 = {
    /**
     * - The unit of measure for the product.
     */
    unit?: string;
    /**
     * - The currency symbol for the unit price.
     */
    currency_symbol?: string;
    /**
     * - The currency code for the unit price.
     */
    currency_code?: string;
    /**
     * - The unit price of the product.
     */
    price?: number;
};
/** @returns {MarketPlaceSttributesSchemaV3} */
declare function MarketPlaceSttributesSchemaV3(): MarketPlaceSttributesSchemaV3;
type MarketPlaceSttributesSchemaV3 = {
    /**
     * - The title of the attribute.
     */
    title?: string;
    /**
     * - Detail of the attribute.
     */
    details?: DetailsSchemaV3[];
};
/** @returns {SellerV3} */
declare function SellerV3(): SellerV3;
type SellerV3 = {
    /**
     * - The unique identifier for the seller.
     */
    uid?: number;
    /**
     * - The name of the seller.
     */
    name?: string;
    /**
     * - The store count serviceable by this seller.
     */
    count?: number;
};
/** @returns {PromiseSchema} */
declare function PromiseSchema(): PromiseSchema;
type PromiseSchema = {
    /**
     * - The minimum promise time.
     */
    min?: string;
    /**
     * - The maximum promise time.
     */
    max?: string;
};
/** @returns {ProductSizePriceResponseV3} */
declare function ProductSizePriceResponseV3(): ProductSizePriceResponseV3;
type ProductSizePriceResponseV3 = {
    store?: StoreV3;
    article_assignment?: ArticleAssignmentV3;
    /**
     * - Whether Cash on Delivery (COD) is available
     * for this product. It is true if COD is available and false otherwise.
     */
    is_cod?: boolean;
    /**
     * - Details
     * about serviceability attributes.
     */
    strategy_wise_listing?: StrategyWiseListingSchemaV3[];
    /**
     * - Available quantity of the product in stock.
     * It shows the number of units available for purchase.
     */
    quantity?: number;
    /**
     * - Type of item, indicating the category or
     * nature of the product. Possible values are Standard, Composite, Wet, Digital.
     */
    item_type?: string;
    /**
     * - Collection of
     * attributes grouped together, which provides detailed characteristics of the
     * product, such as color, size, material, etc.
     */
    grouped_attributes?: SellerGroupAttributes[];
    return_config?: ReturnConfigSchemaV3;
    /**
     * - This unique identifier is assigned to the
     * specific article. This represents item x size x location.
     */
    article_id?: string;
    /**
     * - Whether the product can be purchased as a
     * gift. It is true if the product is available for gifting and false otherwise.
     */
    is_gift?: boolean;
    set?: ProductSetV3;
    /**
     * - Number of sellers offering this product.
     * It indicates the level of competition and availability from different sellers.
     */
    seller_count?: number;
    price_per_piece?: ProductStockPriceV3;
    discount_meta?: DiscountMeta;
    /**
     * - Amount or percentage of discount applied to
     * the product's price, showing the savings for the customer.
     */
    discount?: string;
    /**
     * - Longitude and latitude coordinates,
     * possibly indicating the location of the store or warehouse where the
     * product is stocked.
     */
    long_lat?: number[];
    /**
     * - Special badges or labels assigned to the
     * product, such as "Bestseller," "New Arrival," or "Limited Edition.".
     */
    special_badge?: string;
    price?: ProductStockPriceV3;
    price_per_unit?: ProductStockUnitPriceV3;
    /**
     * - Postal code or zip code for which the
     * product's availability and delivery options are being checked.
     */
    pincode?: number;
    /**
     * -
     * Attributes specific to the marketplace, such as ratings, reviews, shipping
     * options, and other marketplace-specific details.
     */
    marketplace_attributes?: MarketPlaceSttributesSchemaV3[];
    seller?: SellerV3;
    delivery_promise?: PromiseSchema;
};
/** @returns {ProductSizeSellerFilterSchemaV3} */
declare function ProductSizeSellerFilterSchemaV3(): ProductSizeSellerFilterSchemaV3;
type ProductSizeSellerFilterSchemaV3 = {
    /**
     * - The name of the store/seller.
     */
    name?: string;
    /**
     * - Whether this filter criterion is selected.
     */
    is_selected?: boolean;
    /**
     * - The value associated with this store/seller.
     */
    value?: string;
};
/** @returns {ProductSizeSellersResponseV3} */
declare function ProductSizeSellersResponseV3(): ProductSizeSellersResponseV3;
type ProductSizeSellersResponseV3 = {
    /**
     * - A list of products with
     * size and price details available from various sellers.
     */
    items?: ProductSizePriceResponseV3[];
    page: Page;
    /**
     * - A list of sorting
     * and filtering criteria applied to the sellers' data.
     */
    sort_on?: ProductSizeSellerFilterSchemaV3[];
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
