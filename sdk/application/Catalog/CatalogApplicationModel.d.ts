export = CatalogApplicationModel;
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
 * @typedef ProductBrand
 * @property {number} [uid]
 * @property {Media} [logo]
 * @property {string} [description]
 * @property {string} [name]
 * @property {ProductListingAction} [action]
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
 * @property {Object} [title] - The SEO title of the item
 * @property {Object} [description] - The SEO description of the item
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
 */
/**
 * @typedef ErrorResponse
 * @property {string} [error]
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
 * @typedef ProductSizes
 * @property {ProductSize[]} [sizes]
 * @property {ProductSizesPrice} [price]
 * @property {ProductSizesPrice} [price_per_piece]
 * @property {SizeChart} [size_chart]
 * @property {boolean} [sellable]
 * @property {boolean} [multi_size]
 * @property {string} [discount]
 * @property {ProductSizeStores} [stores]
 * @property {DiscountMeta} [discount_meta]
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
 * @property {string} [group_id]
 * @property {ProductVariantItemResponse[]} [items]
 * @property {string} [key]
 * @property {string} [logo]
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
 * @typedef ProductStockStatusItem
 * @property {string} [uid]
 * @property {number} [quantity]
 * @property {StoreDetail} [store]
 * @property {string} [size]
 * @property {ProductStockPrice} [price]
 * @property {CompanyDetail} [company]
 * @property {number} [item_id]
 * @property {Seller} [seller]
 * @property {Object} [identifier]
 */
/**
 * @typedef ProductStockStatusResponse
 * @property {ProductStockStatusItem[]} [items]
 */
/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
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
 */
/**
 * @typedef CategoryItems
 * @property {number} uid
 * @property {CategoryBanner} banners
 * @property {Child[]} [childs]
 * @property {string} name
 * @property {string} slug
 * @property {ProductListingAction} action
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
 */
/**
 * @typedef HomeListingResponse
 * @property {ProductListingDetail[]} [items]
 * @property {Page} page
 * @property {string} [message]
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
 * @property {Object[]} value
 * @property {string} attribute
 */
/**
 * @typedef GetCollectionDetailNest
 * @property {boolean} [is_active]
 * @property {string} [uid]
 * @property {string} [sort_on]
 * @property {Object} [meta]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {Object} [_schedule]
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
 * @property {string[]} [tags]
 * @property {string} [app_id]
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
 * @property {boolean} [is_active]
 * @property {string} [sort_on]
 * @property {Object} [meta]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {Object} [_schedule]
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
 * @property {number} [pincode]
 * @property {string} [city]
 * @property {string} [address]
 * @property {string} [store_code]
 * @property {LatLong} [lat_long]
 * @property {string} [name]
 * @property {string[]} [tags]
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
 * @typedef StoreAddressSerializer
 * @property {number} [latitude]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [landmark]
 * @property {string} [address1]
 * @property {number} [pincode]
 * @property {string} [city]
 * @property {number} [longitude]
 * @property {string} [address2]
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
 * @property {Object} [value] - The value of the size
 * @property {Object} [display] - The display string for the size
 * @property {boolean} [is_available] - Whether or not this size is available
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
 * @property {Object} [template_tag] - The template tag of the product
 * @property {number} [rating_count] - The number of ratings the product has received
 * @property {Object} [image_nature] - The nature of the product's images
 * @property {boolean} [has_variant] - Whether or not the product has a variant
 * @property {Object} [description] - The long description of the product
 * @property {boolean} [out_of_stock] - Whether or not the product is out of stock
 * @property {number} [hsn_code] - The HSN code of the product
 * @property {Object} [grouped_attributes] - A dictionary of grouped product attributes
 * @property {Object} [item_code] - The item code of the product
 * @property {Object} [name] - The name of the product
 * @property {Object} [country_of_origin] - The country of origin for the product
 * @property {Object} [short_description] - The short description of the product
 * @property {Object[]} [media] - A list of media objects for the product
 * @property {Object} [attributes] - A dictionary of product attributes
 * @property {boolean} [is_set] - Whether or not the product is a set of items
 * @property {Object[]} [images] - A list of image URLs for the product
 * @property {Object} [slug] - The slug of the product
 * @property {number} [rating] - The rating of the product
 * @property {Object} [identifier] - A dictionary of product identifiers
 * @property {Object[]} [highlights] - A list of highlights for the product
 * @property {number} [brand_uid] - The unique ID of the product's brand
 */
/**
 * @typedef ProductInGroup
 * @property {boolean} [auto_add_to_cart] - A flag indicating whether the
 *   product should be automatically added to the cart.
 * @property {number} max_quantity - The maximum quantity of the product that
 *   can be added to the cart.
 * @property {Size[]} [sizes] - The available sizes for the product.
 * @property {ProductGroupPrice} [price] - The price details for the product group.
 * @property {boolean} [auto_select] - A flag indicating whether the product
 *   should be automatically selected.
 * @property {ProductDetails} [product_details] - The details of the product.
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
 * @property {UserDetail} [verified_by] - User details of the verifier of the
 *   document, if applicable
 * @property {string} created_on - Timestamp of the creation of the document
 * @property {number} [company_id] - The ID of the company that owns the product grouping.
 * @property {Object[]} [page_visibility] - A list of page visibilities of the
 *   product grouping.
 * @property {string} modified_on - Timestamp of the last modification of the document
 * @property {UserDetail} [created_by] - User details of the creator of the document
 * @property {UserDetail} [modified_by] - User details of the last modifier of
 *   the document
 * @property {ProductInGroup[]} products - A list of products in the grouping.
 * @property {boolean} [same_store_assignment] - Whether the products are
 *   assigned to the same store.
 * @property {Object} [_id]
 * @property {Object} name - The name of the product grouping.
 * @property {Object} [choice] - The choice of the product grouping.
 * @property {Object} [slug] - The unique identifier for the product grouping.
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
 * @property {number} [pincode]
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
 * @typedef ProductSizePriceResponseV3
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
 * @property {number} [seller_count]
 * @property {ProductStockPriceV3} [price_per_piece]
 * @property {DiscountMeta} [discount_meta]
 * @property {string} [discount]
 * @property {number[]} [long_lat]
 * @property {string} [special_badge]
 * @property {ProductStockPriceV3} [price]
 * @property {ProductStockUnitPriceV3} [price_per_unit]
 * @property {number} [pincode]
 * @property {MarketPlaceSttributesSchemaV3[]} [marketplace_attributes]
 * @property {SellerV3} [seller]
 * @property {PromiseSchema} [delivery_promise]
 */
/**
 * @typedef ProductSizeSellerFilterSchemaV3
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [value]
 */
/**
 * @typedef ProductSizeSellersResponseV3
 * @property {ProductSizePriceResponseV3[]} [items]
 * @property {Page} page
 * @property {ProductSizeSellerFilterSchemaV3[]} [sort_on]
 */
declare class CatalogApplicationModel {
}
declare namespace CatalogApplicationModel {
    export { ProductDetailCustomOrder, Meta, Media, ProductListingActionPage, ProductListingAction, ProductBrand, ProductDepartment, ProductCategoryMap, NetQuantity, CustomMetaFields, ApplicationItemSEO, ProductDetailAttribute, ProductDetailGroupedAttribute, ApplicationItemMOQ, Price, ProductListingPrice, ProductSizesPrice, ProductDetail, ErrorResponse, Dimension, Weight, DiscountMeta, ProductSize, SizeChartValues, ColumnHeader, ColumnHeaders, SizeChart, ProductSizeStores, ProductSizes, AttributeDetail, AttributeMetadata, ProductsComparisonResponse, ProductCompareResponse, ProductFrequentlyComparedSimilarResponse, ProductVariantItemResponse, ProductVariantResponse, ProductVariantsResponse, StoreDetail, ProductStockPrice, CompanyDetail, Seller, ProductStockStatusItem, ProductStockStatusResponse, Page, ProductStockPolling, ProductVariantListingResponse, ProductListingDetail, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, ProductListingResponse, ImageUrls, BrandItem, BrandListingResponse, BrandDetailResponse, CategoryBanner, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, CategoryMetaResponse, HomeListingResponse, Department, DepartmentResponse, AutocompleteItem, AutoCompleteResponse, CollectionQuery, GetCollectionDetailNest, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, GetCollectionListingResponse, CollectionDetailResponse, GetFollowListingResponse, FollowPostResponse, FollowerCountResponse, FollowIdsData, FollowIdsResponse, LatLong, Store, StoreListingResponse, StoreDepartments, CompanyStore, SellerPhoneNumber, StoreManagerSerializer, StoreAddressSerializer, AppStore, ApplicationStoreListing, Time, StoreTiming, StoreDetails, UserDetail, Size, ProductGroupPrice, ProductDetails, ProductInGroup, ProductGroupingModel, ProductBundle, StoreV3, ArticleAssignmentV3, StrategyWiseListingSchemaV3, DetailsSchemaV3, SellerGroupAttributes, ReturnConfigSchemaV3, ProductSetDistributionSizeV3, ProductSetDistributionV3, ProductSetV3, ProductStockPriceV3, ProductStockUnitPriceV3, MarketPlaceSttributesSchemaV3, SellerV3, PromiseSchema, ProductSizePriceResponseV3, ProductSizeSellerFilterSchemaV3, ProductSizeSellersResponseV3 };
}
/** @returns {ProductDetailCustomOrder} */
declare function ProductDetailCustomOrder(): ProductDetailCustomOrder;
type ProductDetailCustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
/** @returns {Meta} */
declare function Meta(): Meta;
type Meta = {
    source?: string;
};
/** @returns {Media} */
declare function Media(): Media;
type Media = {
    url?: string;
    type?: string;
    meta?: Meta;
    alt?: string;
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
/** @returns {ProductBrand} */
declare function ProductBrand(): ProductBrand;
type ProductBrand = {
    uid?: number;
    logo?: Media;
    description?: string;
    name?: string;
    action?: ProductListingAction;
};
/** @returns {ProductDepartment} */
declare function ProductDepartment(): ProductDepartment;
type ProductDepartment = {
    uid?: number;
    logo?: Media;
    slug?: string;
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
     * - The SEO title of the item
     */
    title?: any;
    /**
     * - The SEO description of the item
     */
    description?: any;
};
/** @returns {ProductDetailAttribute} */
declare function ProductDetailAttribute(): ProductDetailAttribute;
type ProductDetailAttribute = {
    value?: string;
    type?: string;
    key?: string;
};
/** @returns {ProductDetailGroupedAttribute} */
declare function ProductDetailGroupedAttribute(): ProductDetailGroupedAttribute;
type ProductDetailGroupedAttribute = {
    title?: string;
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
    uid?: number;
    custom_order?: ProductDetailCustomOrder;
    category_map?: ProductCategoryMap;
    net_quantity?: NetQuantity;
    rating_count?: number;
    _custom_meta?: CustomMetaFields[];
    similars?: string[];
    tags?: string[];
    seo?: ApplicationItemSEO;
    image_nature?: string;
    has_variant?: boolean;
    item_type?: string;
    description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    medias?: Media[];
    color?: string;
    type?: string;
    product_online_date?: string;
    _custom_json?: any;
    item_code?: string;
    name?: string;
    moq?: ApplicationItemMOQ;
    short_description?: string;
    categories?: ProductBrand[];
    attributes?: any;
    discount?: string;
    tryouts?: string[];
    slug: string;
    action?: ProductListingAction;
    rating?: number;
    is_dependent?: boolean;
    product_group_tag?: string[];
    highlights?: string[];
    price?: ProductListingPrice;
    brand?: ProductBrand;
    department?: ProductDepartment;
    teaser_tag?: string;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    error?: string;
};
/** @returns {Dimension} */
declare function Dimension(): Dimension;
type Dimension = {
    /**
     * - The unit of dimension
     */
    unit: string;
    /**
     * - The height of the product
     */
    height: number;
    /**
     * - The length of the product
     */
    length: number;
    /**
     * - The width of the product
     */
    width: number;
    /**
     * - Whether the dimension is the default one or not
     */
    is_default: boolean;
};
/** @returns {Weight} */
declare function Weight(): Weight;
type Weight = {
    /**
     * - The unit of weight
     */
    unit: string;
    /**
     * - The shipping weight of the product
     */
    shipping: number;
    /**
     * - Whether the weight is the default one or not
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
    quantity?: number;
    dimension?: Dimension;
    weight?: Weight;
    is_available?: boolean;
    seller_identifiers?: string[];
    value?: string;
    display?: string;
};
/** @returns {SizeChartValues} */
declare function SizeChartValues(): SizeChartValues;
type SizeChartValues = {
    col_3?: string;
    col_6?: string;
    col_2?: string;
    col_4?: string;
    col_1?: string;
    col_5?: string;
};
/** @returns {ColumnHeader} */
declare function ColumnHeader(): ColumnHeader;
type ColumnHeader = {
    convertable?: boolean;
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
    unit?: string;
    image?: string;
    size_tip?: string;
    sizes?: SizeChartValues[];
    description?: string;
    title?: string;
    headers?: ColumnHeaders;
};
/** @returns {ProductSizeStores} */
declare function ProductSizeStores(): ProductSizeStores;
type ProductSizeStores = {
    count?: number;
};
/** @returns {ProductSizes} */
declare function ProductSizes(): ProductSizes;
type ProductSizes = {
    sizes?: ProductSize[];
    price?: ProductSizesPrice;
    price_per_piece?: ProductSizesPrice;
    size_chart?: SizeChart;
    sellable?: boolean;
    multi_size?: boolean;
    discount?: string;
    stores?: ProductSizeStores;
    discount_meta?: DiscountMeta;
};
/** @returns {AttributeDetail} */
declare function AttributeDetail(): AttributeDetail;
type AttributeDetail = {
    logo?: string;
    description?: string;
    display?: string;
    key?: string;
};
/** @returns {AttributeMetadata} */
declare function AttributeMetadata(): AttributeMetadata;
type AttributeMetadata = {
    title?: string;
    details?: AttributeDetail[];
};
/** @returns {ProductsComparisonResponse} */
declare function ProductsComparisonResponse(): ProductsComparisonResponse;
type ProductsComparisonResponse = {
    items?: ProductDetail[];
    attributes_metadata?: AttributeMetadata[];
};
/** @returns {ProductCompareResponse} */
declare function ProductCompareResponse(): ProductCompareResponse;
type ProductCompareResponse = {
    title?: string;
    items?: ProductDetail[];
    attributes_metadata?: AttributeMetadata[];
    subtitle?: string;
};
/** @returns {ProductFrequentlyComparedSimilarResponse} */
declare function ProductFrequentlyComparedSimilarResponse(): ProductFrequentlyComparedSimilarResponse;
type ProductFrequentlyComparedSimilarResponse = {
    similars?: ProductCompareResponse;
};
/** @returns {ProductVariantItemResponse} */
declare function ProductVariantItemResponse(): ProductVariantItemResponse;
type ProductVariantItemResponse = {
    uid?: number;
    color_name?: string;
    color?: string;
    medias?: Media[];
    is_available?: boolean;
    _custom_meta?: CustomMetaFields[];
    name?: string;
    value?: string;
    slug?: string;
    _custom_json?: any;
    action?: ProductListingAction;
};
/** @returns {ProductVariantResponse} */
declare function ProductVariantResponse(): ProductVariantResponse;
type ProductVariantResponse = {
    display_type?: string;
    header?: string;
    group_id?: string;
    items?: ProductVariantItemResponse[];
    key?: string;
    logo?: string;
};
/** @returns {ProductVariantsResponse} */
declare function ProductVariantsResponse(): ProductVariantsResponse;
type ProductVariantsResponse = {
    variants?: ProductVariantResponse[];
};
/** @returns {StoreDetail} */
declare function StoreDetail(): StoreDetail;
type StoreDetail = {
    name?: string;
    city?: string;
    id?: number;
    code?: string;
};
/** @returns {ProductStockPrice} */
declare function ProductStockPrice(): ProductStockPrice;
type ProductStockPrice = {
    effective?: number;
    currency?: string;
    marked?: number;
};
/** @returns {CompanyDetail} */
declare function CompanyDetail(): CompanyDetail;
type CompanyDetail = {
    name?: string;
    id?: number;
};
/** @returns {Seller} */
declare function Seller(): Seller;
type Seller = {
    uid?: number;
    name?: string;
    count?: number;
};
/** @returns {ProductStockStatusItem} */
declare function ProductStockStatusItem(): ProductStockStatusItem;
type ProductStockStatusItem = {
    uid?: string;
    quantity?: number;
    store?: StoreDetail;
    size?: string;
    price?: ProductStockPrice;
    company?: CompanyDetail;
    item_id?: number;
    seller?: Seller;
    identifier?: any;
};
/** @returns {ProductStockStatusResponse} */
declare function ProductStockStatusResponse(): ProductStockStatusResponse;
type ProductStockStatusResponse = {
    items?: ProductStockStatusItem[];
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
};
/** @returns {ProductStockPolling} */
declare function ProductStockPolling(): ProductStockPolling;
type ProductStockPolling = {
    items?: ProductStockStatusItem[];
    page: Page;
};
/** @returns {ProductVariantListingResponse} */
declare function ProductVariantListingResponse(): ProductVariantListingResponse;
type ProductVariantListingResponse = {
    header?: string;
    items?: ProductVariantItemResponse[];
    total?: number;
    key?: string;
    display_type?: string;
};
/** @returns {ProductListingDetail} */
declare function ProductListingDetail(): ProductListingDetail;
type ProductListingDetail = {
    uid?: number;
    custom_order?: ProductDetailCustomOrder;
    sizes?: string[];
    category_map?: ProductCategoryMap;
    net_quantity?: NetQuantity;
    rating_count?: number;
    _custom_meta?: CustomMetaFields[];
    similars?: string[];
    tags?: string[];
    seo?: ApplicationItemSEO;
    image_nature?: string;
    has_variant?: boolean;
    item_type?: string;
    description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    medias?: Media[];
    color?: string;
    type?: string;
    product_online_date?: string;
    _custom_json?: any;
    item_code?: string;
    name?: string;
    moq?: ApplicationItemMOQ;
    short_description?: string;
    categories?: ProductBrand[];
    sellable?: boolean;
    attributes?: any;
    variants?: ProductVariantListingResponse[];
    discount?: string;
    tryouts?: string[];
    identifiers?: string[];
    slug: string;
    action?: ProductListingAction;
    rating?: number;
    is_dependent?: boolean;
    product_group_tag?: string[];
    highlights?: string[];
    price?: ProductListingPrice;
    brand?: ProductBrand;
    teaser_tag?: string;
};
/** @returns {ProductFiltersValue} */
declare function ProductFiltersValue(): ProductFiltersValue;
type ProductFiltersValue = {
    min?: number;
    display_format?: string;
    selected_max?: number;
    value?: string;
    query_format?: string;
    currency_symbol?: string;
    selected_min?: number;
    currency_code?: string;
    is_selected: boolean;
    display: string;
    count?: number;
    max?: number;
};
/** @returns {ProductFiltersKey} */
declare function ProductFiltersKey(): ProductFiltersKey;
type ProductFiltersKey = {
    logo?: string;
    name: string;
    kind?: string;
    display: string;
};
/** @returns {ProductFilters} */
declare function ProductFilters(): ProductFilters;
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
/** @returns {ProductSortOn} */
declare function ProductSortOn(): ProductSortOn;
type ProductSortOn = {
    logo?: string;
    is_selected?: boolean;
    name?: string;
    value?: string;
    display?: string;
};
/** @returns {ProductListingResponse} */
declare function ProductListingResponse(): ProductListingResponse;
type ProductListingResponse = {
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    page: Page;
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
    uid?: number;
    logo?: Media;
    description?: string;
    banners?: ImageUrls;
    departments?: string[];
    discount?: string;
    name?: string;
    slug?: string;
    action?: ProductListingAction;
};
/** @returns {BrandListingResponse} */
declare function BrandListingResponse(): BrandListingResponse;
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
/** @returns {BrandDetailResponse} */
declare function BrandDetailResponse(): BrandDetailResponse;
type BrandDetailResponse = {
    logo?: Media;
    uid?: number;
    description?: string;
    banners?: ImageUrls;
    _custom_json?: any;
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
    uid?: number;
    banners?: ImageUrls;
    childs?: any[];
    _custom_json?: any;
    name?: string;
    slug?: string;
    action?: ProductListingAction;
};
/** @returns {SecondLevelChild} */
declare function SecondLevelChild(): SecondLevelChild;
type SecondLevelChild = {
    uid?: number;
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
    _custom_json?: any;
    name?: string;
    slug?: string;
    action?: ProductListingAction;
};
/** @returns {Child} */
declare function Child(): Child;
type Child = {
    uid?: number;
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
    _custom_json?: any;
    name?: string;
    slug?: string;
    action?: ProductListingAction;
};
/** @returns {CategoryItems} */
declare function CategoryItems(): CategoryItems;
type CategoryItems = {
    uid: number;
    banners: CategoryBanner;
    childs?: Child[];
    name: string;
    slug: string;
    action: ProductListingAction;
};
/** @returns {DepartmentCategoryTree} */
declare function DepartmentCategoryTree(): DepartmentCategoryTree;
type DepartmentCategoryTree = {
    items?: CategoryItems[];
    department: string;
};
/** @returns {DepartmentIdentifier} */
declare function DepartmentIdentifier(): DepartmentIdentifier;
type DepartmentIdentifier = {
    uid?: number;
    slug?: string;
};
/** @returns {CategoryListingResponse} */
declare function CategoryListingResponse(): CategoryListingResponse;
type CategoryListingResponse = {
    data?: DepartmentCategoryTree[];
    departments?: DepartmentIdentifier[];
};
/** @returns {CategoryMetaResponse} */
declare function CategoryMetaResponse(): CategoryMetaResponse;
type CategoryMetaResponse = {
    logo?: Media;
    uid?: number;
    banners?: ImageUrls;
    _custom_json?: any;
    name?: string;
};
/** @returns {HomeListingResponse} */
declare function HomeListingResponse(): HomeListingResponse;
type HomeListingResponse = {
    items?: ProductListingDetail[];
    page: Page;
    message?: string;
};
/** @returns {Department} */
declare function Department(): Department;
type Department = {
    uid?: number;
    logo?: Media;
    priority_order?: number;
    name?: string;
    slug?: string;
};
/** @returns {DepartmentResponse} */
declare function DepartmentResponse(): DepartmentResponse;
type DepartmentResponse = {
    items?: Department[];
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
/** @returns {AutoCompleteResponse} */
declare function AutoCompleteResponse(): AutoCompleteResponse;
type AutoCompleteResponse = {
    items?: AutocompleteItem[];
};
/** @returns {CollectionQuery} */
declare function CollectionQuery(): CollectionQuery;
type CollectionQuery = {
    op: string;
    value: any[];
    attribute: string;
};
/** @returns {GetCollectionDetailNest} */
declare function GetCollectionDetailNest(): GetCollectionDetailNest;
type GetCollectionDetailNest = {
    is_active?: boolean;
    uid?: string;
    sort_on?: string;
    meta?: any;
    banners?: ImageUrls;
    cron?: any;
    _schedule?: any;
    query?: CollectionQuery[];
    description?: string;
    type?: string;
    _custom_json?: any;
    name?: string;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
    badge?: any;
    slug?: string;
    action?: ProductListingAction;
    allow_facets?: boolean;
    logo?: Media;
    priority?: number;
    tags?: string[];
    app_id?: string;
};
/** @returns {CollectionListingFilterTag} */
declare function CollectionListingFilterTag(): CollectionListingFilterTag;
type CollectionListingFilterTag = {
    name?: string;
    is_selected?: boolean;
    display?: string;
};
/** @returns {CollectionListingFilterType} */
declare function CollectionListingFilterType(): CollectionListingFilterType;
type CollectionListingFilterType = {
    name?: string;
    is_selected?: boolean;
    display?: string;
};
/** @returns {CollectionListingFilter} */
declare function CollectionListingFilter(): CollectionListingFilter;
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
/** @returns {GetCollectionListingResponse} */
declare function GetCollectionListingResponse(): GetCollectionListingResponse;
type GetCollectionListingResponse = {
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
    page: Page;
};
/** @returns {CollectionDetailResponse} */
declare function CollectionDetailResponse(): CollectionDetailResponse;
type CollectionDetailResponse = {
    is_active?: boolean;
    sort_on?: string;
    meta?: any;
    banners?: ImageUrls;
    cron?: any;
    _schedule?: any;
    query?: CollectionQuery[];
    description?: string;
    type?: string;
    _custom_json?: any;
    name?: string;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
    badge?: any;
    slug?: string;
    allow_facets?: boolean;
    logo?: Media;
    priority?: number;
    tag?: string[];
    app_id?: string;
};
/** @returns {GetFollowListingResponse} */
declare function GetFollowListingResponse(): GetFollowListingResponse;
type GetFollowListingResponse = {
    items: ProductListingDetail[];
    page: Page;
};
/** @returns {FollowPostResponse} */
declare function FollowPostResponse(): FollowPostResponse;
type FollowPostResponse = {
    message: string;
    id: string;
};
/** @returns {FollowerCountResponse} */
declare function FollowerCountResponse(): FollowerCountResponse;
type FollowerCountResponse = {
    count?: number;
};
/** @returns {FollowIdsData} */
declare function FollowIdsData(): FollowIdsData;
type FollowIdsData = {
    products?: number[];
    collections?: number[];
    brands?: number[];
};
/** @returns {FollowIdsResponse} */
declare function FollowIdsResponse(): FollowIdsResponse;
type FollowIdsResponse = {
    data?: FollowIdsData;
};
/** @returns {LatLong} */
declare function LatLong(): LatLong;
type LatLong = {
    coordinates?: number[];
    type?: string;
};
/** @returns {Store} */
declare function Store(): Store;
type Store = {
    uid?: number;
    store_email?: string;
    state?: string;
    country?: string;
    pincode?: number;
    city?: string;
    address?: string;
    store_code?: string;
    lat_long?: LatLong;
    name?: string;
    tags?: string[];
};
/** @returns {StoreListingResponse} */
declare function StoreListingResponse(): StoreListingResponse;
type StoreListingResponse = {
    items: Store[];
    page: Page;
};
/** @returns {StoreDepartments} */
declare function StoreDepartments(): StoreDepartments;
type StoreDepartments = {
    uid?: number;
    logo?: any;
    priority_order?: number;
    name?: string;
    slug?: string;
};
/** @returns {CompanyStore} */
declare function CompanyStore(): CompanyStore;
type CompanyStore = {
    uid?: number;
    name?: string;
    company_type?: string;
    business_type?: string;
};
/** @returns {SellerPhoneNumber} */
declare function SellerPhoneNumber(): SellerPhoneNumber;
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
/** @returns {StoreManagerSerializer} */
declare function StoreManagerSerializer(): StoreManagerSerializer;
type StoreManagerSerializer = {
    name?: string;
    email?: string;
    mobile_no?: SellerPhoneNumber;
};
/** @returns {StoreAddressSerializer} */
declare function StoreAddressSerializer(): StoreAddressSerializer;
type StoreAddressSerializer = {
    latitude?: number;
    state?: string;
    country?: string;
    landmark?: string;
    address1?: string;
    pincode?: number;
    city?: string;
    longitude?: number;
    address2?: string;
};
/** @returns {AppStore} */
declare function AppStore(): AppStore;
type AppStore = {
    uid?: number;
    departments?: StoreDepartments[];
    company?: CompanyStore;
    manager?: StoreManagerSerializer;
    store_code?: string;
    address?: StoreAddressSerializer;
    name?: string;
    contact_numbers?: SellerPhoneNumber[];
};
/** @returns {ApplicationStoreListing} */
declare function ApplicationStoreListing(): ApplicationStoreListing;
type ApplicationStoreListing = {
    filters?: any[];
    items?: AppStore[];
    page?: Page;
};
/** @returns {Time} */
declare function Time(): Time;
type Time = {
    hour?: number;
    minute?: number;
};
/** @returns {StoreTiming} */
declare function StoreTiming(): StoreTiming;
type StoreTiming = {
    open?: boolean;
    closing?: Time;
    weekday?: string;
    opening?: Time;
};
/** @returns {StoreDetails} */
declare function StoreDetails(): StoreDetails;
type StoreDetails = {
    uid?: number;
    departments?: StoreDepartments[];
    company?: CompanyStore;
    manager?: StoreManagerSerializer;
    store_code?: string;
    timing?: StoreTiming[];
    address?: StoreAddressSerializer;
    _custom_json?: any;
    name?: string;
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
     * - The quantity of this size available
     */
    quantity?: number;
    /**
     * - The value of the size
     */
    value?: any;
    /**
     * - The display string for the size
     */
    display?: any;
    /**
     * - Whether or not this size is available
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
     * - The template tag of the product
     */
    template_tag?: any;
    /**
     * - The number of ratings the product has received
     */
    rating_count?: number;
    /**
     * - The nature of the product's images
     */
    image_nature?: any;
    /**
     * - Whether or not the product has a variant
     */
    has_variant?: boolean;
    /**
     * - The long description of the product
     */
    description?: any;
    /**
     * - Whether or not the product is out of stock
     */
    out_of_stock?: boolean;
    /**
     * - The HSN code of the product
     */
    hsn_code?: number;
    /**
     * - A dictionary of grouped product attributes
     */
    grouped_attributes?: any;
    /**
     * - The item code of the product
     */
    item_code?: any;
    /**
     * - The name of the product
     */
    name?: any;
    /**
     * - The country of origin for the product
     */
    country_of_origin?: any;
    /**
     * - The short description of the product
     */
    short_description?: any;
    /**
     * - A list of media objects for the product
     */
    media?: any[];
    /**
     * - A dictionary of product attributes
     */
    attributes?: any;
    /**
     * - Whether or not the product is a set of items
     */
    is_set?: boolean;
    /**
     * - A list of image URLs for the product
     */
    images?: any[];
    /**
     * - The slug of the product
     */
    slug?: any;
    /**
     * - The rating of the product
     */
    rating?: number;
    /**
     * - A dictionary of product identifiers
     */
    identifier?: any;
    /**
     * - A list of highlights for the product
     */
    highlights?: any[];
    /**
     * - The unique ID of the product's brand
     */
    brand_uid?: number;
};
/** @returns {ProductInGroup} */
declare function ProductInGroup(): ProductInGroup;
type ProductInGroup = {
    /**
     * - A flag indicating whether the
     * product should be automatically added to the cart.
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
     * - The price details for the product group.
     */
    price?: ProductGroupPrice;
    /**
     * - A flag indicating whether the product
     * should be automatically selected.
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
     * - A flag indicating whether the product
     * can be removed from the cart.
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
     * - The URL for the logo of the product grouping.
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
     * document, if applicable
     */
    verified_by?: UserDetail;
    /**
     * - Timestamp of the creation of the document
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
     * - Timestamp of the last modification of the document
     */
    modified_on: string;
    /**
     * - User details of the creator of the document
     */
    created_by?: UserDetail;
    /**
     * - User details of the last modifier of
     * the document
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
     * verified, if applicable
     */
    verified_on?: string;
};
/** @returns {ProductBundle} */
declare function ProductBundle(): ProductBundle;
type ProductBundle = {
    items?: ProductGroupingModel[];
};
/** @returns {StoreV3} */
declare function StoreV3(): StoreV3;
type StoreV3 = {
    uid?: number;
    name?: string;
    count?: number;
};
/** @returns {ArticleAssignmentV3} */
declare function ArticleAssignmentV3(): ArticleAssignmentV3;
type ArticleAssignmentV3 = {
    strategy?: string;
    level?: string;
};
/** @returns {StrategyWiseListingSchemaV3} */
declare function StrategyWiseListingSchemaV3(): StrategyWiseListingSchemaV3;
type StrategyWiseListingSchemaV3 = {
    distance?: number;
    pincode?: number;
    tat?: number;
    quantity?: number;
};
/** @returns {DetailsSchemaV3} */
declare function DetailsSchemaV3(): DetailsSchemaV3;
type DetailsSchemaV3 = {
    value?: string;
    type?: string;
    key?: string;
};
/** @returns {SellerGroupAttributes} */
declare function SellerGroupAttributes(): SellerGroupAttributes;
type SellerGroupAttributes = {
    title?: string;
    details?: DetailsSchemaV3[];
};
/** @returns {ReturnConfigSchemaV3} */
declare function ReturnConfigSchemaV3(): ReturnConfigSchemaV3;
type ReturnConfigSchemaV3 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
/** @returns {ProductSetDistributionSizeV3} */
declare function ProductSetDistributionSizeV3(): ProductSetDistributionSizeV3;
type ProductSetDistributionSizeV3 = {
    pieces?: number;
    size?: string;
};
/** @returns {ProductSetDistributionV3} */
declare function ProductSetDistributionV3(): ProductSetDistributionV3;
type ProductSetDistributionV3 = {
    sizes?: ProductSetDistributionSizeV3[];
};
/** @returns {ProductSetV3} */
declare function ProductSetV3(): ProductSetV3;
type ProductSetV3 = {
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
     * is available
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
    unit?: string;
    currency_symbol?: string;
    currency_code?: string;
    price?: number;
};
/** @returns {MarketPlaceSttributesSchemaV3} */
declare function MarketPlaceSttributesSchemaV3(): MarketPlaceSttributesSchemaV3;
type MarketPlaceSttributesSchemaV3 = {
    title?: string;
    details?: DetailsSchemaV3[];
};
/** @returns {SellerV3} */
declare function SellerV3(): SellerV3;
type SellerV3 = {
    uid?: number;
    name?: string;
    count?: number;
};
/** @returns {PromiseSchema} */
declare function PromiseSchema(): PromiseSchema;
type PromiseSchema = {
    min?: string;
    max?: string;
};
/** @returns {ProductSizePriceResponseV3} */
declare function ProductSizePriceResponseV3(): ProductSizePriceResponseV3;
type ProductSizePriceResponseV3 = {
    store?: StoreV3;
    article_assignment?: ArticleAssignmentV3;
    is_cod?: boolean;
    strategy_wise_listing?: StrategyWiseListingSchemaV3[];
    quantity?: number;
    item_type?: string;
    grouped_attributes?: SellerGroupAttributes[];
    return_config?: ReturnConfigSchemaV3;
    article_id?: string;
    is_gift?: boolean;
    set?: ProductSetV3;
    seller_count?: number;
    price_per_piece?: ProductStockPriceV3;
    discount_meta?: DiscountMeta;
    discount?: string;
    long_lat?: number[];
    special_badge?: string;
    price?: ProductStockPriceV3;
    price_per_unit?: ProductStockUnitPriceV3;
    pincode?: number;
    marketplace_attributes?: MarketPlaceSttributesSchemaV3[];
    seller?: SellerV3;
    delivery_promise?: PromiseSchema;
};
/** @returns {ProductSizeSellerFilterSchemaV3} */
declare function ProductSizeSellerFilterSchemaV3(): ProductSizeSellerFilterSchemaV3;
type ProductSizeSellerFilterSchemaV3 = {
    name?: string;
    is_selected?: boolean;
    value?: string;
};
/** @returns {ProductSizeSellersResponseV3} */
declare function ProductSizeSellersResponseV3(): ProductSizeSellersResponseV3;
type ProductSizeSellersResponseV3 = {
    items?: ProductSizePriceResponseV3[];
    page: Page;
    sort_on?: ProductSizeSellerFilterSchemaV3[];
};
