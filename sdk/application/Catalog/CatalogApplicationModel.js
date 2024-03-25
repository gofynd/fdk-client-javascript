const Joi = require("joi");

/**
 * @typedef ProductDetailCustomOrder
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 * @property {boolean} [is_custom_order]
 */

/**
 * @typedef Meta
 * @property {string} [source]
 */

/**
 * @typedef Media
 * @property {string} [url]
 * @property {string} [type]
 * @property {Meta} [meta]
 * @property {string} [alt]
 */

/**
 * @typedef QueryParams
 * @property {string[]} [category]
 * @property {string[]} [brand]
 * @property {string[]} [department]
 */

/**
 * @typedef Params
 * @property {string[]} [slug]
 */

/**
 * @typedef ProductListingActionPage
 * @property {string} [type]
 * @property {QueryParams} [query]
 * @property {Params} [params]
 */

/**
 * @typedef ProductListingAction
 * @property {string} [type]
 * @property {ProductListingActionPage} [page]
 */

/**
 * @typedef ProductBrand
 * @property {number} [uid]
 * @property {Media} [logo]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [type]
 * @property {ProductListingAction} [action]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ProductDepartment
 * @property {number} [uid]
 * @property {Media} [logo]
 * @property {string} [slug]
 * @property {string} [name]
 */

/**
 * @typedef ProductCategoryMap
 * @property {ProductBrand} [l1]
 * @property {ProductBrand} [l2]
 * @property {ProductBrand} [l3]
 */

/**
 * @typedef NetQuantity
 * @property {string} [unit] - The unit of measurement used for the net quantity
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
 * @property {string} [title] - The SEO title of the item
 * @property {string} [description] - The SEO description of the item
 * @property {ApplicationItemSeoSitemap} [sitemap]
 * @property {ApplicationItemSeoBreadcrumbs[]} [breadcrumbs]
 * @property {ApplicationItemSeoMetaTags[]} [meta_tags]
 * @property {string} [canonical_url] - The SEO canonical URL of the item
 */

/**
 * @typedef ApplicationItemSeoSitemap
 * @property {number} [priority] - The SEO priority of the item
 * @property {string} [frequency] - The SEO frequency of the item
 */

/**
 * @typedef ApplicationItemSeoAction
 * @property {Object} [page] - The SEO page information of the item
 * @property {string} [type] - The SEO type of the item
 */

/**
 * @typedef ApplicationItemSeoBreadcrumbs
 * @property {string} [url] - The SEO URL of the item
 * @property {ApplicationItemSeoAction} [action]
 */

/**
 * @typedef ApplicationItemSeoMetaTagItem
 * @property {string} [key] - The SEO key of the item
 * @property {string} [value] - The SEO value of the item
 */

/**
 * @typedef ApplicationItemSeoMetaTags
 * @property {string} [title] - The SEO title of the product
 * @property {ApplicationItemSeoMetaTagItem[]} [items] - The SEO items for the product
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [value]
 * @property {string} [type]
 * @property {string} [key]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {string} [title]
 * @property {ProductDetailAttribute[]} [details]
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
 * @property {Price} [selling]
 */

/**
 * @typedef ProductSizesPrice
 * @property {Price} [effective]
 * @property {Price} [marked]
 * @property {Price} [selling]
 */

/**
 * @typedef ProductDetail
 * @property {number} [uid]
 * @property {string[]} [sizes]
 * @property {string[]} [identifiers]
 * @property {boolean} [is_tryout]
 * @property {string} [channel]
 * @property {DiscountMeta} [discount_meta]
 * @property {ProductVariantResponse[]} [variants]
 * @property {ProductDetailCustomOrder} [custom_order]
 * @property {ProductCategoryMap} [category_map]
 * @property {NetQuantity} [net_quantity]
 * @property {number} [rating_count]
 * @property {CustomMetaFields[]} [_custom_meta]
 * @property {string[]} [similars]
 * @property {string[]} [tags]
 * @property {ApplicationItemSEO} [seo]
 * @property {string} [image_nature]
 * @property {boolean} [has_variant]
 * @property {string} [item_type]
 * @property {string} [description]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {Media[]} [medias]
 * @property {string} [color]
 * @property {string} [type]
 * @property {string} [product_online_date]
 * @property {Object} [_custom_json]
 * @property {string} [item_code]
 * @property {string} [name]
 * @property {ApplicationItemMOQ} [moq]
 * @property {string} [short_description]
 * @property {ProductBrand[]} [categories]
 * @property {Object} [attributes]
 * @property {string} [discount]
 * @property {string[]} [tryouts]
 * @property {string} slug
 * @property {ProductListingAction} [action]
 * @property {number} [rating]
 * @property {boolean} [is_dependent]
 * @property {string[]} [product_group_tag]
 * @property {string[]} [highlights]
 * @property {ProductListingPrice} [price]
 * @property {ProductBrand} [brand]
 * @property {ProductDepartment} [department]
 * @property {string} [teaser_tag]
 * @property {Object} [promo_meta]
 * @property {number} [no_of_boxes]
 * @property {string} [template_tag]
 * @property {boolean} [sellable]
 */

/**
 * @typedef NotServiceableError
 * @property {string} [message]
 * @property {boolean} [is_serviceable]
 */

/**
 * @typedef ErrorResponse
 * @property {string} [error]
 * @property {Object} [errors]
 * @property {number} [code]
 * @property {string} [message]
 */

/**
 * @typedef Dimension
 * @property {string} unit - The unit of dimension
 * @property {number} height - The height of the product
 * @property {number} length - The length of the product
 * @property {number} width - The width of the product
 * @property {boolean} is_default - Whether the dimension is the default one or not
 */

/**
 * @typedef Weight
 * @property {string} unit - The unit of weight
 * @property {number} shipping - The shipping weight of the product
 * @property {boolean} is_default - Whether the weight is the default one or not
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
 * @property {number} [quantity]
 * @property {Dimension} [dimension]
 * @property {Weight} [weight]
 * @property {boolean} [is_available]
 * @property {string[]} [seller_identifiers]
 * @property {string} [value]
 * @property {string} [display]
 */

/**
 * @typedef SizeChartValues
 * @property {string} [col_3]
 * @property {string} [col_6]
 * @property {string} [col_2]
 * @property {string} [col_4]
 * @property {string} [col_1]
 * @property {string} [col_5]
 */

/**
 * @typedef ColumnHeader
 * @property {boolean} [convertable]
 * @property {string} [value]
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
 * @property {string} [unit]
 * @property {string} [image]
 * @property {string} [size_tip]
 * @property {SizeChartValues[]} [sizes]
 * @property {string} [description]
 * @property {string} [title]
 * @property {ColumnHeaders} [headers]
 */

/**
 * @typedef ProductSizeStores
 * @property {number} [count]
 */

/**
 * @typedef MOQ
 * @property {number} [maximum]
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 */

/**
 * @typedef ProductSizes
 * @property {ProductSize[]} [sizes]
 * @property {ProductSizesPrice} [price]
 * @property {SizeChart} [size_chart]
 * @property {boolean} [sellable]
 * @property {boolean} [multi_size]
 * @property {string} [discount]
 * @property {ProductSizeStores} [stores]
 * @property {DiscountMeta} [discount_meta]
 * @property {MOQ} [moq]
 * @property {string[]} [tags]
 * @property {Object} [custom_order]
 * @property {string} [product_name]
 */

/**
 * @typedef AttributeDetail
 * @property {string} [logo]
 * @property {string} [description]
 * @property {string} [display]
 * @property {string} [key]
 */

/**
 * @typedef AttributeMetadata
 * @property {string} [title]
 * @property {AttributeDetail[]} [details]
 */

/**
 * @typedef ProductsComparisonResponse
 * @property {ProductDetail[]} [items]
 * @property {AttributeMetadata[]} [attributes_metadata]
 */

/**
 * @typedef ProductCompareResponse
 * @property {string} [title]
 * @property {ProductDetail[]} [items]
 * @property {AttributeMetadata[]} [attributes_metadata]
 * @property {string} [subtitle]
 */

/**
 * @typedef ProductFrequentlyComparedSimilarResponse
 * @property {ProductCompareResponse} [similars]
 */

/**
 * @typedef ProductVariantItemResponse
 * @property {number} [uid]
 * @property {string} [color_name]
 * @property {string} [color]
 * @property {Media[]} [medias]
 * @property {boolean} [is_available]
 * @property {CustomMetaFields[]} [_custom_meta]
 * @property {string} [name]
 * @property {string} [value]
 * @property {string} [slug]
 * @property {Object} [_custom_json]
 * @property {ProductListingAction} [action]
 */

/**
 * @typedef ProductVariantResponse
 * @property {string} [display_type]
 * @property {string} [header]
 * @property {string} [logo]
 * @property {ProductVariantItemResponse[]} [items]
 * @property {string} [key]
 */

/**
 * @typedef ProductVariantsResponse
 * @property {ProductVariantResponse[]} [variants]
 */

/**
 * @typedef StoreDetail
 * @property {string} [name]
 * @property {string} [city]
 * @property {number} [id]
 * @property {string} [code]
 */

/**
 * @typedef ProductStockPrice
 * @property {number} [effective]
 * @property {string} [currency]
 * @property {number} [marked]
 */

/**
 * @typedef CompanyDetail
 * @property {string} [name]
 * @property {number} [id]
 */

/**
 * @typedef Seller
 * @property {number} [uid]
 * @property {string} [name]
 * @property {number} [count]
 */

/**
 * @typedef ArticleIdentifier
 * @property {string} [ean]
 * @property {string} [alu]
 * @property {string} [upc]
 * @property {string} [sku_code]
 */

/**
 * @typedef ProductStockStatusItem
 * @property {string} [uid]
 * @property {number} [quantity]
 * @property {BrandItem} [brand]
 * @property {string} [seller_identifier]
 * @property {number} [price_effective]
 * @property {number} [price_selling]
 * @property {number} [price_marked]
 * @property {DiscountMeta} [discount_meta]
 * @property {Object} [discount_applied]
 * @property {StoreDetail} [store]
 * @property {string} [size]
 * @property {ProductStockPrice} [price]
 * @property {CompanyDetail} [company]
 * @property {number} [item_id]
 * @property {Seller} [seller]
 * @property {ArticleIdentifier} [identifier]
 */

/**
 * @typedef ProductStockStatusResponse
 * @property {ProductStockStatusItem[]} [items]
 */

/**
 * @typedef Page
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [total]
 * @property {string} type
 * @property {number} [item_total]
 */

/**
 * @typedef ProductStockPolling
 * @property {ProductStockStatusItem[]} [items]
 * @property {Page} page
 */

/**
 * @typedef ProductVariantListingResponse
 * @property {string} [header]
 * @property {ProductVariantItemResponse[]} [items]
 * @property {number} [total]
 * @property {string} [key]
 * @property {string} [display_type]
 */

/**
 * @typedef ProductListingDetail
 * @property {boolean} [is_tryout]
 * @property {string} [channel]
 * @property {DiscountMeta} [discount_meta]
 * @property {number} [uid]
 * @property {ProductDetailCustomOrder} [custom_order]
 * @property {string[]} [sizes]
 * @property {ProductCategoryMap} [category_map]
 * @property {NetQuantity} [net_quantity]
 * @property {number} [rating_count]
 * @property {CustomMetaFields[]} [_custom_meta]
 * @property {string[]} [similars]
 * @property {string[]} [tags]
 * @property {ApplicationItemSEO} [seo]
 * @property {string} [image_nature]
 * @property {boolean} [has_variant]
 * @property {string} [item_type]
 * @property {string} [description]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {Media[]} [medias]
 * @property {string} [color]
 * @property {string} [type]
 * @property {string} [product_online_date]
 * @property {Object} [_custom_json]
 * @property {string} [item_code]
 * @property {string} [name]
 * @property {ApplicationItemMOQ} [moq]
 * @property {string} [short_description]
 * @property {ProductBrand[]} [categories]
 * @property {boolean} [sellable]
 * @property {Object} [attributes]
 * @property {ProductVariantListingResponse[]} [variants]
 * @property {string} [discount]
 * @property {string[]} [tryouts]
 * @property {string[]} [identifiers]
 * @property {string} slug
 * @property {ProductListingAction} [action]
 * @property {number} [rating]
 * @property {boolean} [is_dependent]
 * @property {string[]} [product_group_tag]
 * @property {string[]} [highlights]
 * @property {ProductListingPrice} [price]
 * @property {ProductBrand} [brand]
 * @property {string} [teaser_tag]
 */

/**
 * @typedef ProductFiltersValue
 * @property {number} [min]
 * @property {string} [display_format]
 * @property {number} [selected_max]
 * @property {string} [value]
 * @property {string} [query_format]
 * @property {string} [currency_symbol]
 * @property {number} [selected_min]
 * @property {string} [currency_code]
 * @property {boolean} is_selected
 * @property {string} display
 * @property {number} [count]
 * @property {number} [max]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} [logo]
 * @property {string} name
 * @property {string} [kind]
 * @property {string} display
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersValue[]} values
 * @property {ProductFiltersKey} key
 */

/**
 * @typedef ProductSortOn
 * @property {string} [logo]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [value]
 * @property {string} [display]
 */

/**
 * @typedef ProductListingResponse
 * @property {ProductListingDetail[]} [items]
 * @property {ProductFilters[]} [filters]
 * @property {Page} page
 * @property {ProductSortOn[]} [sort_on]
 */

/**
 * @typedef ImageUrls
 * @property {Media} [portrait]
 * @property {Media} [landscape]
 */

/**
 * @typedef BrandItem
 * @property {number} [id]
 * @property {number} [uid]
 * @property {Media} [logo]
 * @property {string} [description]
 * @property {ImageUrls} [banners]
 * @property {string[]} [departments]
 * @property {string} [discount]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {ProductListingAction} [action]
 */

/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */

/**
 * @typedef BrandDetailResponse
 * @property {Media} [logo]
 * @property {number} [uid]
 * @property {string} [description]
 * @property {ImageUrls} [banners]
 * @property {Object} [_custom_json]
 * @property {string} [slug]
 * @property {Object} [_app]
 * @property {string} [name]
 */

/**
 * @typedef CategoryBanner
 * @property {Media} portrait
 * @property {Media} landscape
 */

/**
 * @typedef ThirdLevelChild
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 * @property {Object[]} [childs]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {ProductListingAction} [action]
 * @property {number} [priority]
 */

/**
 * @typedef SecondLevelChild
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 * @property {ThirdLevelChild[]} [childs]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {ProductListingAction} [action]
 * @property {number} [priority]
 */

/**
 * @typedef Child
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 * @property {SecondLevelChild[]} [childs]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {ProductListingAction} [action]
 * @property {number} [priority]
 */

/**
 * @typedef CategoryItems
 * @property {number} uid
 * @property {CategoryBanner} banners
 * @property {Child[]} [childs]
 * @property {string} name
 * @property {string} slug
 * @property {ProductListingAction} action
 * @property {number} [priority]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef DepartmentCategoryTree
 * @property {CategoryItems[]} [items]
 * @property {string} department
 */

/**
 * @typedef DepartmentIdentifier
 * @property {number} [uid]
 * @property {string} [slug]
 */

/**
 * @typedef CategoryListingResponse
 * @property {DepartmentCategoryTree[]} [data]
 * @property {DepartmentIdentifier[]} [departments]
 */

/**
 * @typedef CategoryMetaResponse
 * @property {Media} [logo]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {Object} [_app]
 */

/**
 * @typedef HomeListingResponse
 * @property {ProductListingDetail[]} [items]
 * @property {Page} page
 * @property {string} [message]
 * @property {string} [sort_on]
 */

/**
 * @typedef Department
 * @property {number} [uid]
 * @property {Media} [logo]
 * @property {number} [priority_order]
 * @property {string} [name]
 * @property {string} [slug]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
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
 * @typedef AutoCompleteResponse
 * @property {AutocompleteItem[]} [items]
 */

/**
 * @typedef CollectionQuery
 * @property {string} op
 * @property {string[]} value
 * @property {string} attribute
 */

/**
 * @typedef NextSchedule
 * @property {string} [start] - The start time of the next schedule
 * @property {string} [end] - The end time of the next schedule
 */

/**
 * @typedef Schedule
 * @property {string} [cron] - The cron expression for the schedule
 * @property {NextSchedule[]} [next_schedule] - List of next schedules
 * @property {number} [duration] - The duration of the job in seconds
 * @property {string} [start] - The start time of the job
 * @property {string} [end] - The end time of the job
 * @property {Object} [metadata]
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {boolean} [is_active]
 * @property {string} [uid]
 * @property {string} [sort_on]
 * @property {Object} [meta]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {CollectionQuery[]} [query]
 * @property {string} [description]
 * @property {string} [type]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [badge]
 * @property {string} [slug]
 * @property {ProductListingAction} [action]
 * @property {boolean} [allow_facets]
 * @property {Media} [logo]
 * @property {number} [priority]
 * @property {string[]} [tag]
 * @property {string} [app_id]
 * @property {boolean} [published]
 * @property {string[]} [tags]
 * @property {Object} [_locale_language]
 * @property {Object} [seo]
 * @property {Schedule} [_schedule]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [display]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [display]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterTag[]} [tags]
 * @property {CollectionListingFilterType[]} [type]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {GetCollectionDetailNest[]} [items]
 * @property {CollectionListingFilter} [filters]
 * @property {Page} page
 */

/**
 * @typedef CollectionDetailResponse
 * @property {string} [uid]
 * @property {boolean} [published]
 * @property {string[]} [tags]
 * @property {Object} [_locale_language]
 * @property {Object} [seo]
 * @property {ProductListingAction} [action]
 * @property {boolean} [is_active]
 * @property {string} [sort_on]
 * @property {Object} [meta]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {Schedule} [_schedule]
 * @property {CollectionQuery[]} [query]
 * @property {string} [description]
 * @property {string} [type]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [badge]
 * @property {string} [slug]
 * @property {boolean} [allow_facets]
 * @property {Media} [logo]
 * @property {number} [priority]
 * @property {string[]} [tag]
 * @property {string} [app_id]
 */

/**
 * @typedef GetFollowListingResponse
 * @property {ProductListingDetail[]} items
 * @property {Page} page
 */

/**
 * @typedef FollowPostResponse
 * @property {string} message
 * @property {string} id
 */

/**
 * @typedef FollowerCountResponse
 * @property {number} [count]
 */

/**
 * @typedef FollowIdsData
 * @property {number[]} [products]
 * @property {number[]} [collections]
 * @property {number[]} [brands]
 */

/**
 * @typedef FollowIdsResponse
 * @property {FollowIdsData} [data]
 */

/**
 * @typedef LatLong
 * @property {number[]} [coordinates]
 * @property {string} [type]
 */

/**
 * @typedef Store
 * @property {number} [uid]
 * @property {string} [store_email]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {string} [city]
 * @property {string} [address]
 * @property {string} [store_code]
 * @property {LatLong} [lat_long]
 * @property {string} [name]
 */

/**
 * @typedef StoreListingResponse
 * @property {Store[]} items
 * @property {Page} page
 */

/**
 * @typedef StoreDepartments
 * @property {number} [uid]
 * @property {Object} [logo]
 * @property {number} [priority_order]
 * @property {string} [name]
 * @property {string} [slug]
 */

/**
 * @typedef CompanyStore
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [company_type]
 * @property {string} [business_type]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */

/**
 * @typedef StoreManagerSerializer
 * @property {string} [name]
 * @property {string} [email]
 * @property {SellerPhoneNumber} [mobile_no]
 */

/**
 * @typedef AddressLatLong
 * @property {string} [type]
 * @property {number[]} [coordinates]
 */

/**
 * @typedef StoreAddressSerializer
 * @property {number} [latitude]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [landmark]
 * @property {string} [address1]
 * @property {string} [pincode]
 * @property {string} [city]
 * @property {number} [longitude]
 * @property {string} [address2]
 * @property {AddressLatLong} [lat_long]
 */

/**
 * @typedef AppStore
 * @property {number} [uid]
 * @property {StoreDepartments[]} [departments]
 * @property {CompanyStore} [company]
 * @property {StoreManagerSerializer} [manager]
 * @property {string} [store_code]
 * @property {StoreAddressSerializer} [address]
 * @property {string} [name]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 */

/**
 * @typedef ApplicationStoreListing
 * @property {Object[]} [filters]
 * @property {AppStore[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Time
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef StoreTiming
 * @property {boolean} [open]
 * @property {Time} [closing]
 * @property {string} [weekday]
 * @property {Time} [opening]
 */

/**
 * @typedef StoreDetails
 * @property {number} [uid]
 * @property {StoreDepartments[]} [departments]
 * @property {CompanyStore} [company]
 * @property {StoreManagerSerializer} [manager]
 * @property {string} [store_code]
 * @property {StoreTiming[]} [timing]
 * @property {StoreAddressSerializer} [address]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {number} [company_id]
 * @property {string} [display_name]
 * @property {string} [store_type]
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
 * @property {number} [quantity] - The quantity of this size available
 * @property {string} [value] - The value of the size
 * @property {string} [display] - The display string for the size
 * @property {boolean} [is_available] - Whether or not this size is available
 */

/**
 * @typedef ProductGroupPrice
 * @property {number} [max_effective] - The maximum effective price of the product group.
 * @property {number} [min_effective] - The minimum effective price of the product group.
 * @property {number} [min_marked] - The minimum marked price of the product group.
 * @property {string} [currency] - The currency code for the prices.
 * @property {number} [max_marked] - The maximum marked price of the product group.
 */

/**
 * @typedef ProductDetails
 * @property {string} [template_tag] - The template tag of the product
 * @property {number} [rating_count] - The number of ratings the product has received
 * @property {string} [image_nature] - The nature of the product's images
 * @property {boolean} [has_variant] - Whether or not the product has a variant
 * @property {string} [description] - The long description of the product
 * @property {boolean} [out_of_stock] - Whether or not the product is out of stock
 * @property {number} [hsn_code] - The HSN code of the product
 * @property {Object} [grouped_attributes] - A dictionary of grouped product attributes
 * @property {string} [item_code] - The item code of the product
 * @property {string} [name] - The name of the product
 * @property {string} [country_of_origin] - The country of origin for the product
 * @property {string} [short_description] - The short description of the product
 * @property {Object[]} [media] - A list of media objects for the product
 * @property {Object} [attributes] - A dictionary of product attributes
 * @property {boolean} [is_set] - Whether or not the product is a set of items
 * @property {string[]} [images] - A list of image URLs for the product
 * @property {string} [slug] - The slug of the product
 * @property {number} [rating] - The rating of the product
 * @property {Object} [identifier] - A dictionary of product identifiers
 * @property {string[]} [highlights] - A list of highlights for the product
 * @property {number} [brand_uid] - The unique ID of the product's brand
 */

/**
 * @typedef ProductInGroup
 * @property {boolean} [auto_add_to_cart] - A flag indicating whether the
 *   product should be automatically added to the cart.
 * @property {number} max_quantity - The maximum quantity of the product that
 *   can be added to the cart.
 * @property {Size[]} [sizes] - The available sizes for the product.
 * @property {ProductGroupPrice} [price]
 * @property {boolean} [auto_select] - A flag indicating whether the product
 *   should be automatically selected.
 * @property {string} [product_details] - The details of the product.
 * @property {number} [min_quantity] - The minimum quantity of the product that
 *   can be added to the cart.
 * @property {boolean} [allow_remove] - A flag indicating whether the product
 *   can be removed from the cart.
 * @property {number} product_uid - The unique ID of the product in the group.
 */

/**
 * @typedef ProductGroupingModel
 * @property {string} [logo] - The URL for the logo of the product grouping.
 * @property {boolean} [is_active] - Whether the product grouping is active.
 * @property {Object} [meta] - A dictionary containing metadata information.
 * @property {string} [verified_by] - User details of the verifier of the
 *   document, if applicable
 * @property {string} created_on - Timestamp of the creation of the document
 * @property {number} [company_id] - The ID of the company that owns the product grouping.
 * @property {string[]} [page_visibility] - A list of page visibilities of the
 *   product grouping.
 * @property {string} modified_on - Timestamp of the last modification of the document
 * @property {Object} [created_by] - User details of the creator of the document
 * @property {Object} [modified_by] - User details of the last modifier of the document
 * @property {ProductInGroup[]} products - A list of products in the grouping.
 * @property {boolean} [same_store_assignment] - Whether the products are
 *   assigned to the same store.
 * @property {string} [_id]
 * @property {string} name - The name of the product grouping.
 * @property {string} [choice] - The choice of the product grouping.
 * @property {string} [slug] - The unique identifier for the product grouping.
 * @property {string} [verified_on] - Timestamp of when the document was
 *   verified, if applicable
 */

/**
 * @typedef ProductBundle
 * @property {ProductGroupingModel[]} [items]
 */

/**
 * @typedef StoreV3
 * @property {number} [uid]
 * @property {string} [name]
 * @property {number} [count]
 */

/**
 * @typedef ArticleAssignmentV3
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef StrategyWiseListingSchemaV3
 * @property {number} [distance]
 * @property {string} [pincode]
 * @property {number} [tat]
 * @property {number} [quantity]
 */

/**
 * @typedef DetailsSchemaV3
 * @property {string} [value]
 * @property {string} [type]
 * @property {string} [key]
 */

/**
 * @typedef SellerGroupAttributes
 * @property {string} [title]
 * @property {DetailsSchemaV3[]} [details]
 */

/**
 * @typedef ReturnConfigSchemaV3
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef ProductSetDistributionSizeV3
 * @property {number} [pieces]
 * @property {string} [size]
 */

/**
 * @typedef ProductSetDistributionV3
 * @property {ProductSetDistributionSizeV3[]} [sizes]
 */

/**
 * @typedef ProductSetV3
 * @property {number} [quantity]
 * @property {ProductSetDistributionV3} [size_distribution]
 */

/**
 * @typedef ProductStockPriceV3
 * @property {number} [effective] - The effective or final price for the product
 *   at the given pincode.
 * @property {string} [currency_code] - The currency code for which the product
 *   is available
 * @property {string} [currency_symbol] - The currency symbol for the currency
 *   in which the product is available.
 * @property {number} [marked] - The marked price of the product.
 * @property {number} [selling] - The selling price of the product.
 */

/**
 * @typedef ProductStockUnitPriceV3
 * @property {string} [unit]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {number} [price]
 */

/**
 * @typedef MarketPlaceSttributesSchemaV3
 * @property {string} [title]
 * @property {DetailsSchemaV3[]} [details]
 */

/**
 * @typedef SellerV3
 * @property {number} [uid]
 * @property {string} [name]
 * @property {number} [count]
 */

/**
 * @typedef PromiseSchema
 * @property {string} [min]
 * @property {string} [max]
 */

/**
 * @typedef ProductSizePriceResponseV4
 * @property {StoreV3} [store]
 * @property {ArticleAssignmentV3} [article_assignment]
 * @property {boolean} [is_cod]
 * @property {StrategyWiseListingSchemaV3[]} [strategy_wise_listing]
 * @property {number} [quantity]
 * @property {string} [item_type]
 * @property {SellerGroupAttributes[]} [grouped_attributes]
 * @property {ReturnConfigSchemaV3} [return_config]
 * @property {string} [article_id]
 * @property {boolean} [is_gift]
 * @property {ProductSetV3} [set]
 * @property {ProductStockPriceV3} [price_per_piece]
 * @property {DiscountMeta} [discount_meta]
 * @property {string} [discount]
 * @property {number[]} [long_lat]
 * @property {ProductStockPriceV3} [price]
 * @property {ProductStockUnitPriceV3} [price_per_unit]
 * @property {string} [pincode]
 * @property {string[]} [trader]
 * @property {string[]} [tags]
 * @property {boolean} [is_serviceable]
 * @property {MarketPlaceSttributesSchemaV3[]} [marketplace_attributes]
 * @property {SellerV3} [seller]
 * @property {PromiseSchema} [delivery_promise]
 * @property {string} [product_name]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ProductSizeSellerFilterSchemaV4
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [value]
 */

/**
 * @typedef ProductSizeSellersResponseV4
 * @property {ProductSizePriceResponseV4[]} [items]
 * @property {Page} page
 * @property {ProductSizeSellerFilterSchemaV4[]} [sort_on]
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

  /** @returns {QueryParams} */
  static QueryParams() {
    return Joi.object({
      category: Joi.array().items(Joi.string().allow("")),
      brand: Joi.array().items(Joi.string().allow("")),
      department: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Params} */
  static Params() {
    return Joi.object({
      slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ProductListingActionPage} */
  static ProductListingActionPage() {
    return Joi.object({
      type: Joi.string().allow(""),
      query: CatalogApplicationModel.QueryParams(),
      params: CatalogApplicationModel.Params(),
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
      type: Joi.string().allow(""),
      action: CatalogApplicationModel.ProductListingAction(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
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
      unit: Joi.string().allow(""),
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
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      sitemap: CatalogApplicationModel.ApplicationItemSeoSitemap(),
      breadcrumbs: Joi.array().items(
        CatalogApplicationModel.ApplicationItemSeoBreadcrumbs()
      ),
      meta_tags: Joi.array().items(
        CatalogApplicationModel.ApplicationItemSeoMetaTags()
      ),
      canonical_url: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationItemSeoSitemap} */
  static ApplicationItemSeoSitemap() {
    return Joi.object({
      priority: Joi.number(),
      frequency: Joi.string().allow(""),
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
      url: Joi.string().allow(""),
      action: CatalogApplicationModel.ApplicationItemSeoAction(),
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
      title: Joi.string().allow(""),
      items: Joi.array().items(
        CatalogApplicationModel.ApplicationItemSeoMetaTagItem()
      ),
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
      selling: CatalogApplicationModel.Price(),
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
      sizes: Joi.array().items(Joi.string().allow("")),
      identifiers: Joi.array().items(Joi.string().allow("")),
      is_tryout: Joi.boolean(),
      channel: Joi.string().allow(""),
      discount_meta: CatalogApplicationModel.DiscountMeta(),
      variants: Joi.array().items(
        CatalogApplicationModel.ProductVariantResponse()
      ),
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
      promo_meta: Joi.any(),
      no_of_boxes: Joi.number(),
      template_tag: Joi.string().allow(""),
      sellable: Joi.boolean(),
    });
  }

  /** @returns {NotServiceableError} */
  static NotServiceableError() {
    return Joi.object({
      message: Joi.string().allow(""),
      is_serviceable: Joi.boolean(),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
      errors: Joi.object().pattern(/\S/, Joi.any()),
      code: Joi.number(),
      message: Joi.string().allow(""),
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

  /** @returns {MOQ} */
  static MOQ() {
    return Joi.object({
      maximum: Joi.number(),
      minimum: Joi.number(),
      increment_unit: Joi.number(),
    });
  }

  /** @returns {ProductSizes} */
  static ProductSizes() {
    return Joi.object({
      sizes: Joi.array().items(CatalogApplicationModel.ProductSize()),
      price: CatalogApplicationModel.ProductSizesPrice(),
      size_chart: CatalogApplicationModel.SizeChart(),
      sellable: Joi.boolean(),
      multi_size: Joi.boolean(),
      discount: Joi.string().allow(""),
      stores: CatalogApplicationModel.ProductSizeStores(),
      discount_meta: CatalogApplicationModel.DiscountMeta(),
      moq: CatalogApplicationModel.MOQ(),
      tags: Joi.array().items(Joi.string().allow("")),
      custom_order: Joi.object().pattern(/\S/, Joi.any()),
      product_name: Joi.string().allow(""),
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

  /** @returns {ProductsComparisonResponse} */
  static ProductsComparisonResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.ProductDetail()),
      attributes_metadata: Joi.array().items(
        CatalogApplicationModel.AttributeMetadata()
      ),
    });
  }

  /** @returns {ProductCompareResponse} */
  static ProductCompareResponse() {
    return Joi.object({
      title: Joi.string().allow(""),
      items: Joi.array().items(CatalogApplicationModel.ProductDetail()),
      attributes_metadata: Joi.array().items(
        CatalogApplicationModel.AttributeMetadata()
      ),
      subtitle: Joi.string().allow(""),
    });
  }

  /** @returns {ProductFrequentlyComparedSimilarResponse} */
  static ProductFrequentlyComparedSimilarResponse() {
    return Joi.object({
      similars: CatalogApplicationModel.ProductCompareResponse(),
    });
  }

  /** @returns {ProductVariantItemResponse} */
  static ProductVariantItemResponse() {
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

  /** @returns {ProductVariantResponse} */
  static ProductVariantResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),
      header: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      items: Joi.array().items(
        CatalogApplicationModel.ProductVariantItemResponse()
      ),
      key: Joi.string().allow(""),
    });
  }

  /** @returns {ProductVariantsResponse} */
  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(
        CatalogApplicationModel.ProductVariantResponse()
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

  /** @returns {ArticleIdentifier} */
  static ArticleIdentifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
      alu: Joi.string().allow(""),
      upc: Joi.string().allow(""),
      sku_code: Joi.string().allow(""),
    });
  }

  /** @returns {ProductStockStatusItem} */
  static ProductStockStatusItem() {
    return Joi.object({
      uid: Joi.string().allow(""),
      quantity: Joi.number(),
      brand: CatalogApplicationModel.BrandItem(),
      seller_identifier: Joi.string().allow(""),
      price_effective: Joi.number(),
      price_selling: Joi.number(),
      price_marked: Joi.number(),
      discount_meta: CatalogApplicationModel.DiscountMeta(),
      discount_applied: Joi.object().pattern(/\S/, Joi.any()),
      store: CatalogApplicationModel.StoreDetail(),
      size: Joi.string().allow(""),
      price: CatalogApplicationModel.ProductStockPrice(),
      company: CatalogApplicationModel.CompanyDetail(),
      item_id: Joi.number(),
      seller: CatalogApplicationModel.Seller(),
      identifier: CatalogApplicationModel.ArticleIdentifier(),
    });
  }

  /** @returns {ProductStockStatusResponse} */
  static ProductStockStatusResponse() {
    return Joi.object({
      items: Joi.array().items(
        CatalogApplicationModel.ProductStockStatusItem()
      ),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      next_id: Joi.string().allow("").allow(null),
      size: Joi.number(),
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      total: Joi.number(),
      type: Joi.string().allow("").required(),
      item_total: Joi.number(),
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

  /** @returns {ProductVariantListingResponse} */
  static ProductVariantListingResponse() {
    return Joi.object({
      header: Joi.string().allow(""),
      items: Joi.array().items(
        CatalogApplicationModel.ProductVariantItemResponse()
      ),
      total: Joi.number(),
      key: Joi.string().allow(""),
      display_type: Joi.string().allow(""),
    });
  }

  /** @returns {ProductListingDetail} */
  static ProductListingDetail() {
    return Joi.object({
      is_tryout: Joi.boolean(),
      channel: Joi.string().allow(""),
      discount_meta: CatalogApplicationModel.DiscountMeta(),
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
      _custom_json: Joi.any(),
      item_code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      moq: CatalogApplicationModel.ApplicationItemMOQ(),
      short_description: Joi.string().allow(""),
      categories: Joi.array().items(CatalogApplicationModel.ProductBrand()),
      sellable: Joi.boolean(),
      attributes: Joi.any(),
      variants: Joi.array().items(
        CatalogApplicationModel.ProductVariantListingResponse()
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

  /** @returns {ProductListingResponse} */
  static ProductListingResponse() {
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
      id: Joi.number(),
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

  /** @returns {BrandListingResponse} */
  static BrandListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.BrandItem()),
      page: CatalogApplicationModel.Page().required(),
    });
  }

  /** @returns {BrandDetailResponse} */
  static BrandDetailResponse() {
    return Joi.object({
      logo: CatalogApplicationModel.Media(),
      uid: Joi.number(),
      description: Joi.string().allow(""),
      banners: CatalogApplicationModel.ImageUrls(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      slug: Joi.string().allow(""),
      _app: Joi.any(),
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
      childs: Joi.array().items(Joi.any()),
      _custom_json: Joi.any(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      action: CatalogApplicationModel.ProductListingAction(),
      priority: Joi.number(),
    });
  }

  /** @returns {SecondLevelChild} */
  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),
      banners: CatalogApplicationModel.ImageUrls(),
      childs: Joi.array().items(CatalogApplicationModel.ThirdLevelChild()),
      _custom_json: Joi.any(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      action: CatalogApplicationModel.ProductListingAction(),
      priority: Joi.number(),
    });
  }

  /** @returns {Child} */
  static Child() {
    return Joi.object({
      uid: Joi.number(),
      banners: CatalogApplicationModel.ImageUrls(),
      childs: Joi.array().items(CatalogApplicationModel.SecondLevelChild()),
      _custom_json: Joi.any(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      action: CatalogApplicationModel.ProductListingAction(),
      priority: Joi.number(),
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
      priority: Joi.number(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {CategoryListingResponse} */
  static CategoryListingResponse() {
    return Joi.object({
      data: Joi.array().items(CatalogApplicationModel.DepartmentCategoryTree()),
      departments: Joi.array().items(
        CatalogApplicationModel.DepartmentIdentifier()
      ),
    });
  }

  /** @returns {CategoryMetaResponse} */
  static CategoryMetaResponse() {
    return Joi.object({
      logo: CatalogApplicationModel.Media(),
      uid: Joi.number(),
      banners: CatalogApplicationModel.ImageUrls(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      name: Joi.string().allow(""),
      _app: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {HomeListingResponse} */
  static HomeListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.ProductListingDetail()),
      page: CatalogApplicationModel.Page().required(),
      message: Joi.string().allow(""),
      sort_on: Joi.string().allow(""),
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

  /** @returns {DepartmentResponse} */
  static DepartmentResponse() {
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
      _custom_json: Joi.any(),
      action: CatalogApplicationModel.ProductListingAction(),
    });
  }

  /** @returns {AutoCompleteResponse} */
  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.AutocompleteItem()),
    });
  }

  /** @returns {CollectionQuery} */
  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),
      value: Joi.array().items(Joi.string().allow("")).required(),
      attribute: Joi.string().allow("").required(),
    });
  }

  /** @returns {NextSchedule} */
  static NextSchedule() {
    return Joi.object({
      start: Joi.string().allow("").allow(null),
      end: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Schedule} */
  static Schedule() {
    return Joi.object({
      cron: Joi.string().allow(""),
      next_schedule: Joi.array().items(CatalogApplicationModel.NextSchedule()),
      duration: Joi.number(),
      start: Joi.string().allow("").allow(null),
      end: Joi.string().allow("").allow(null),
      metadata: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {GetCollectionDetailNest} */
  static GetCollectionDetailNest() {
    return Joi.object({
      is_active: Joi.boolean(),
      uid: Joi.string().allow(""),
      sort_on: Joi.string().allow(""),
      meta: Joi.any(),
      banners: CatalogApplicationModel.ImageUrls(),
      cron: Joi.any(),
      query: Joi.array().items(CatalogApplicationModel.CollectionQuery()),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      _custom_json: Joi.any(),
      name: Joi.string().allow(""),
      allow_sort: Joi.boolean(),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
      badge: Joi.any(),
      slug: Joi.string().allow(""),
      action: CatalogApplicationModel.ProductListingAction(),
      allow_facets: Joi.boolean(),
      logo: CatalogApplicationModel.Media(),
      priority: Joi.number(),
      tag: Joi.array().items(Joi.string().allow("")),
      app_id: Joi.string().allow(""),
      published: Joi.boolean(),
      tags: Joi.array().items(Joi.string().allow("")),
      _locale_language: Joi.object().pattern(/\S/, Joi.any()),
      seo: Joi.object().pattern(/\S/, Joi.any()),
      _schedule: CatalogApplicationModel.Schedule(),
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

  /** @returns {GetCollectionListingResponse} */
  static GetCollectionListingResponse() {
    return Joi.object({
      items: Joi.array().items(
        CatalogApplicationModel.GetCollectionDetailNest()
      ),
      filters: CatalogApplicationModel.CollectionListingFilter(),
      page: CatalogApplicationModel.Page().required(),
    });
  }

  /** @returns {CollectionDetailResponse} */
  static CollectionDetailResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),
      published: Joi.boolean(),
      tags: Joi.array().items(Joi.string().allow("")),
      _locale_language: Joi.object().pattern(/\S/, Joi.any()),
      seo: Joi.object().pattern(/\S/, Joi.any()),
      action: CatalogApplicationModel.ProductListingAction(),
      is_active: Joi.boolean(),
      sort_on: Joi.string().allow(""),
      meta: Joi.any(),
      banners: CatalogApplicationModel.ImageUrls(),
      cron: Joi.any(),
      _schedule: CatalogApplicationModel.Schedule(),
      query: Joi.array().items(CatalogApplicationModel.CollectionQuery()),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      _custom_json: Joi.any(),
      name: Joi.string().allow(""),
      allow_sort: Joi.boolean(),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
      badge: Joi.any(),
      slug: Joi.string().allow(""),
      allow_facets: Joi.boolean(),
      logo: CatalogApplicationModel.Media(),
      priority: Joi.number(),
      tag: Joi.array().items(Joi.string().allow("")),
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {GetFollowListingResponse} */
  static GetFollowListingResponse() {
    return Joi.object({
      items: Joi.array()
        .items(CatalogApplicationModel.ProductListingDetail())
        .required(),
      page: CatalogApplicationModel.Page().required(),
    });
  }

  /** @returns {FollowPostResponse} */
  static FollowPostResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      id: Joi.string().allow("").required(),
    });
  }

  /** @returns {FollowerCountResponse} */
  static FollowerCountResponse() {
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

  /** @returns {FollowIdsResponse} */
  static FollowIdsResponse() {
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

  /** @returns {Store} */
  static Store() {
    return Joi.object({
      uid: Joi.number(),
      store_email: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      city: Joi.string().allow(""),
      address: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      lat_long: CatalogApplicationModel.LatLong(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {StoreListingResponse} */
  static StoreListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.Store()).required(),
      page: CatalogApplicationModel.Page().required(),
    });
  }

  /** @returns {StoreDepartments} */
  static StoreDepartments() {
    return Joi.object({
      uid: Joi.number(),
      logo: Joi.any(),
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

  /** @returns {StoreManagerSerializer} */
  static StoreManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),
      email: Joi.string().allow(""),
      mobile_no: CatalogApplicationModel.SellerPhoneNumber(),
    });
  }

  /** @returns {AddressLatLong} */
  static AddressLatLong() {
    return Joi.object({
      type: Joi.string().allow(""),
      coordinates: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {StoreAddressSerializer} */
  static StoreAddressSerializer() {
    return Joi.object({
      latitude: Joi.number(),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      city: Joi.string().allow(""),
      longitude: Joi.number(),
      address2: Joi.string().allow(""),
      lat_long: CatalogApplicationModel.AddressLatLong(),
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
      manager: CatalogApplicationModel.StoreManagerSerializer(),
      store_code: Joi.string().allow(""),
      address: CatalogApplicationModel.StoreAddressSerializer(),
      name: Joi.string().allow(""),
      contact_numbers: Joi.array().items(
        CatalogApplicationModel.SellerPhoneNumber()
      ),
    });
  }

  /** @returns {ApplicationStoreListing} */
  static ApplicationStoreListing() {
    return Joi.object({
      filters: Joi.array().items(Joi.any()),
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
      manager: CatalogApplicationModel.StoreManagerSerializer(),
      store_code: Joi.string().allow(""),
      timing: Joi.array().items(CatalogApplicationModel.StoreTiming()),
      address: CatalogApplicationModel.StoreAddressSerializer(),
      _custom_json: Joi.any(),
      name: Joi.string().allow(""),
      contact_numbers: Joi.array().items(
        CatalogApplicationModel.SellerPhoneNumber()
      ),
      company_id: Joi.number(),
      display_name: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
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
      value: Joi.string().allow(""),
      display: Joi.string().allow(""),
      is_available: Joi.boolean(),
    });
  }

  /** @returns {ProductGroupPrice} */
  static ProductGroupPrice() {
    return Joi.object({
      max_effective: Joi.number(),
      min_effective: Joi.number(),
      min_marked: Joi.number(),
      currency: Joi.string().allow(""),
      max_marked: Joi.number(),
    });
  }

  /** @returns {ProductDetails} */
  static ProductDetails() {
    return Joi.object({
      template_tag: Joi.string().allow(""),
      rating_count: Joi.number(),
      image_nature: Joi.string().allow(""),
      has_variant: Joi.boolean(),
      description: Joi.string().allow(""),
      out_of_stock: Joi.boolean(),
      hsn_code: Joi.number(),
      grouped_attributes: Joi.any(),
      item_code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      country_of_origin: Joi.string().allow(""),
      short_description: Joi.string().allow(""),
      media: Joi.array().items(Joi.any()),
      attributes: Joi.any(),
      is_set: Joi.boolean(),
      images: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
      rating: Joi.number(),
      identifier: Joi.any(),
      highlights: Joi.array().items(Joi.string().allow("")),
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
      product_details: Joi.string().allow(""),
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
      meta: Joi.any(),
      verified_by: Joi.string().allow(""),
      created_on: Joi.string().allow("").required(),
      company_id: Joi.number(),
      page_visibility: Joi.array().items(Joi.string().allow("")),
      modified_on: Joi.string().allow("").required(),
      created_by: Joi.any(),
      modified_by: Joi.any(),
      products: Joi.array()
        .items(CatalogApplicationModel.ProductInGroup())
        .required(),
      same_store_assignment: Joi.boolean(),
      _id: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      choice: Joi.string().allow(""),
      slug: Joi.string().allow(""),
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
      pincode: Joi.string().allow(""),
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

  /** @returns {ProductSizePriceResponseV4} */
  static ProductSizePriceResponseV4() {
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
      price_per_piece: CatalogApplicationModel.ProductStockPriceV3(),
      discount_meta: CatalogApplicationModel.DiscountMeta(),
      discount: Joi.string().allow(""),
      long_lat: Joi.array().items(Joi.number()),
      price: CatalogApplicationModel.ProductStockPriceV3(),
      price_per_unit: CatalogApplicationModel.ProductStockUnitPriceV3(),
      pincode: Joi.string().allow(""),
      trader: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      is_serviceable: Joi.boolean(),
      marketplace_attributes: Joi.array().items(
        CatalogApplicationModel.MarketPlaceSttributesSchemaV3()
      ),
      seller: CatalogApplicationModel.SellerV3(),
      delivery_promise: CatalogApplicationModel.PromiseSchema(),
      product_name: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {ProductSizeSellerFilterSchemaV4} */
  static ProductSizeSellerFilterSchemaV4() {
    return Joi.object({
      name: Joi.string().allow(""),
      is_selected: Joi.boolean(),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ProductSizeSellersResponseV4} */
  static ProductSizeSellersResponseV4() {
    return Joi.object({
      items: Joi.array().items(
        CatalogApplicationModel.ProductSizePriceResponseV4()
      ),
      page: CatalogApplicationModel.Page().required(),
      sort_on: Joi.array().items(
        CatalogApplicationModel.ProductSizeSellerFilterSchemaV4()
      ),
    });
  }
}
module.exports = CatalogApplicationModel;
