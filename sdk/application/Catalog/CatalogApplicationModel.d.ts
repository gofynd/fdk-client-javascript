export = CatalogApplicationModel;
/**
 * @typedef ApplicationItemMOQ
 * @property {number} [increment_unit] - The minimum quantity increment in which
 *   the item can be purchased.
 * @property {number} [maximum] - The maximum quantity allowed for purchase.
 * @property {number} [minimum] - The minimum quantity required for purchase.
 */
/**
 * @typedef ApplicationItemSEO
 * @property {Object} [description] - The SEO description of the item
 * @property {Object} [title] - The SEO title of the item
 */
/**
 * @typedef ApplicationStoreListing
 * @property {Object[]} [filters]
 * @property {AppStore[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AppStore
 * @property {StoreAddressSerializer} [address]
 * @property {CompanyStore} [company]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {StoreDepartments[]} [departments]
 * @property {StoreManagerSerializer} [manager]
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {number} [uid]
 */
/**
 * @typedef ArticleAssignmentV3
 * @property {string} [level]
 * @property {string} [strategy]
 */
/**
 * @typedef AttributeDetail
 * @property {string} [description]
 * @property {string} [display]
 * @property {string} [key]
 * @property {string} [logo]
 */
/**
 * @typedef AttributeMetadata
 * @property {AttributeDetail[]} [details]
 * @property {string} [title]
 */
/**
 * @typedef AutocompleteItem
 * @property {Object} [_custom_json]
 * @property {ProductListingAction} [action]
 * @property {string} [display]
 * @property {Media} [logo]
 * @property {string} [type]
 */
/**
 * @typedef AutoCompleteResponse
 * @property {AutocompleteItem[]} [items]
 */
/**
 * @typedef BrandDetailResponse
 * @property {Object} [_custom_json]
 * @property {ImageUrls} [banners]
 * @property {string} [description]
 * @property {Media} [logo]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef BrandItem
 * @property {ProductListingAction} [action]
 * @property {ImageUrls} [banners]
 * @property {string[]} [departments]
 * @property {string} [description]
 * @property {string} [discount]
 * @property {Media} [logo]
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
 * @typedef CategoryBanner
 * @property {Media} landscape
 * @property {Media} portrait
 */
/**
 * @typedef CategoryItems
 * @property {ProductListingAction} action
 * @property {CategoryBanner} banners
 * @property {Child[]} [childs]
 * @property {string} name
 * @property {string} slug
 * @property {number} uid
 */
/**
 * @typedef CategoryListingResponse
 * @property {DepartmentCategoryTree[]} [data]
 * @property {DepartmentIdentifier[]} [departments]
 */
/**
 * @typedef CategoryMetaResponse
 * @property {Object} [_custom_json]
 * @property {ImageUrls} [banners]
 * @property {Media} [logo]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef Child
 * @property {Object} [_custom_json]
 * @property {ProductListingAction} [action]
 * @property {ImageUrls} [banners]
 * @property {SecondLevelChild[]} [childs]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef CollectionDetailResponse
 * @property {Object} [_custom_json]
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
 * @property {string} [sort_on]
 * @property {string[]} [tag]
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
 * @property {string} attribute
 * @property {string} op
 * @property {Object[]} value
 */
/**
 * @typedef ColumnHeader
 * @property {boolean} [convertable]
 * @property {string} [value]
 */
/**
 * @typedef ColumnHeaders
 * @property {ColumnHeader} [col_1]
 * @property {ColumnHeader} [col_2]
 * @property {ColumnHeader} [col_3]
 * @property {ColumnHeader} [col_4]
 * @property {ColumnHeader} [col_5]
 * @property {ColumnHeader} [col_6]
 */
/**
 * @typedef CompanyDetail
 * @property {number} [id]
 * @property {string} [name]
 */
/**
 * @typedef CompanyStore
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef CustomMetaFields
 * @property {string} key - A key to store a custom field.
 * @property {string} value - A value to store in the custom field.
 */
/**
 * @typedef Department
 * @property {Media} [logo]
 * @property {string} [name]
 * @property {number} [priority_order]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef DepartmentCategoryTree
 * @property {string} department
 * @property {CategoryItems[]} [items]
 */
/**
 * @typedef DepartmentIdentifier
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */
/**
 * @typedef DetailsSchemaV3
 * @property {string} [key]
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef Dimension
 * @property {number} height - The height of the product
 * @property {boolean} is_default - Whether the dimension is the default one or not
 * @property {number} length - The length of the product
 * @property {string} unit - The unit of dimension
 * @property {number} width - The width of the product
 */
/**
 * @typedef DiscountMeta
 * @property {string} [end] - The end time of the live discount.
 * @property {string} [start] - The start time of the live discount.
 * @property {number} [start_timer_in_minutes] - The time in minutes before the
 *   discount ends when the countdown timer should start.
 * @property {boolean} timer - Determines whether the discount countdown is
 *   visible or not.
 */
/**
 * @typedef ErrorResponse
 * @property {string} [error]
 */
/**
 * @typedef FollowerCountResponse
 * @property {number} [count]
 */
/**
 * @typedef FollowIdsData
 * @property {number[]} [brands]
 * @property {number[]} [collections]
 * @property {number[]} [products]
 */
/**
 * @typedef FollowIdsResponse
 * @property {FollowIdsData} [data]
 */
/**
 * @typedef FollowPostResponse
 * @property {string} id
 * @property {string} message
 */
/**
 * @typedef GetCollectionDetailNest
 * @property {Object} [_custom_json]
 * @property {Object} [_schedule]
 * @property {ProductListingAction} [action]
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
 * @property {string} [sort_on]
 * @property {string[]} [tag]
 * @property {string} [type]
 * @property {string} [uid]
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef GetCollectionListingResponse
 * @property {CollectionListingFilter} [filters]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} page
 */
/**
 * @typedef GetFollowListingResponse
 * @property {ProductListingDetail[]} items
 * @property {Page} page
 */
/**
 * @typedef HomeListingResponse
 * @property {ProductListingDetail[]} [items]
 * @property {string} [message]
 * @property {Page} page
 */
/**
 * @typedef ImageUrls
 * @property {Media} [landscape]
 * @property {Media} [portrait]
 */
/**
 * @typedef LatLong
 * @property {number[]} [coordinates]
 * @property {string} [type]
 */
/**
 * @typedef MarketPlaceSttributesSchemaV3
 * @property {DetailsSchemaV3[]} [details]
 * @property {string} [title]
 */
/**
 * @typedef Media
 * @property {string} [alt]
 * @property {Meta} [meta]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef Meta
 * @property {string} [source]
 */
/**
 * @typedef NetQuantity
 * @property {Object} [unit] - The unit of measurement used for the net quantity
 *   of the product.
 * @property {number} [value] - The value of the net quantity of the product.
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
 * @typedef Price
 * @property {string} [currency_code] - The currency code for the currency in
 *   which the product is available.
 * @property {string} [currency_symbol] - The currency symbol for the currency
 *   in which the product is available.
 * @property {number} [max] - The maximum price for the product across stores.
 * @property {number} [min] - The minimum price for the product across stores.
 */
/**
 * @typedef ProductBrand
 * @property {ProductListingAction} [action]
 * @property {string} [description]
 * @property {Media} [logo]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef ProductBundle
 * @property {ProductGroupingModel[]} [items]
 */
/**
 * @typedef ProductCategoryMap
 * @property {ProductBrand} [l1]
 * @property {ProductBrand} [l2]
 * @property {ProductBrand} [l3]
 */
/**
 * @typedef ProductCompareResponse
 * @property {AttributeMetadata[]} [attributes_metadata]
 * @property {ProductDetail[]} [items]
 * @property {string} [subtitle]
 * @property {string} [title]
 */
/**
 * @typedef ProductDepartment
 * @property {Media} [logo]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef ProductDetail
 * @property {Object} [_custom_json]
 * @property {CustomMetaFields[]} [_custom_meta]
 * @property {ProductListingAction} [action]
 * @property {Object} [attributes]
 * @property {ProductBrand} [brand]
 * @property {ProductBrand[]} [categories]
 * @property {ProductCategoryMap} [category_map]
 * @property {string} [color]
 * @property {ProductDetailCustomOrder} [custom_order]
 * @property {ProductDepartment} [department]
 * @property {string} [description]
 * @property {string} [discount]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {boolean} [has_variant]
 * @property {string[]} [highlights]
 * @property {string} [image_nature]
 * @property {boolean} [is_dependent]
 * @property {string} [item_code]
 * @property {string} [item_type]
 * @property {Media[]} [medias]
 * @property {ApplicationItemMOQ} [moq]
 * @property {string} [name]
 * @property {NetQuantity} [net_quantity]
 * @property {ProductListingPrice} [price]
 * @property {string[]} [product_group_tag]
 * @property {string} [product_online_date]
 * @property {number} [rating]
 * @property {number} [rating_count]
 * @property {ApplicationItemSEO} [seo]
 * @property {string} [short_description]
 * @property {string[]} [similars]
 * @property {string} slug
 * @property {string[]} [tags]
 * @property {string} [teaser_tag]
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
 * @typedef ProductDetailCustomOrder
 * @property {boolean} [is_custom_order]
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 */
/**
 * @typedef ProductDetailGroupedAttribute
 * @property {ProductDetailAttribute[]} [details]
 * @property {string} [title]
 */
/**
 * @typedef ProductDetails
 * @property {Object} [attributes] - A dictionary of product attributes
 * @property {number} [brand_uid] - The unique ID of the product's brand
 * @property {Object} [country_of_origin] - The country of origin for the product
 * @property {Object} [description] - The long description of the product
 * @property {Object} [grouped_attributes] - A dictionary of grouped product attributes
 * @property {boolean} [has_variant] - Whether or not the product has a variant
 * @property {Object[]} [highlights] - A list of highlights for the product
 * @property {number} [hsn_code] - The HSN code of the product
 * @property {Object} [identifier] - A dictionary of product identifiers
 * @property {Object} [image_nature] - The nature of the product's images
 * @property {Object[]} [images] - A list of image URLs for the product
 * @property {boolean} [is_set] - Whether or not the product is a set of items
 * @property {Object} [item_code] - The item code of the product
 * @property {Object[]} [media] - A list of media objects for the product
 * @property {Object} [name] - The name of the product
 * @property {boolean} [out_of_stock] - Whether or not the product is out of stock
 * @property {number} [rating] - The rating of the product
 * @property {number} [rating_count] - The number of ratings the product has received
 * @property {Object} [short_description] - The short description of the product
 * @property {Object} [slug] - The slug of the product
 * @property {Object} [template_tag] - The template tag of the product
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
 * @property {string} [value]
 */
/**
 * @typedef ProductFrequentlyComparedSimilarResponse
 * @property {ProductCompareResponse} [similars]
 */
/**
 * @typedef ProductGroupingModel
 * @property {Object} [_id]
 * @property {Object} [choice] - The choice of the product grouping.
 * @property {number} [company_id] - The ID of the company that owns the product grouping.
 * @property {UserDetail} [created_by] - User details of the creator of the document
 * @property {string} created_on - Timestamp of the creation of the document
 * @property {boolean} [is_active] - Whether the product grouping is active.
 * @property {string} [logo] - The URL for the logo of the product grouping.
 * @property {Object} [meta] - A dictionary containing metadata information.
 * @property {UserDetail} [modified_by] - User details of the last modifier of
 *   the document
 * @property {string} modified_on - Timestamp of the last modification of the document
 * @property {Object} name - The name of the product grouping.
 * @property {Object[]} [page_visibility] - A list of page visibilities of the
 *   product grouping.
 * @property {ProductInGroup[]} products - A list of products in the grouping.
 * @property {boolean} [same_store_assignment] - Whether the products are
 *   assigned to the same store.
 * @property {Object} [slug] - The unique identifier for the product grouping.
 * @property {UserDetail} [verified_by] - User details of the verifier of the
 *   document, if applicable
 * @property {string} [verified_on] - Timestamp of when the document was
 *   verified, if applicable
 */
/**
 * @typedef ProductGroupPrice
 * @property {Object} [currency] - The currency code for the prices.
 * @property {number} [max_effective] - The maximum effective price of the product group.
 * @property {number} [max_marked] - The maximum marked price of the product group.
 * @property {number} [min_effective] - The minimum effective price of the product group.
 * @property {number} [min_marked] - The minimum marked price of the product group.
 */
/**
 * @typedef ProductInGroup
 * @property {boolean} [allow_remove] - A flag indicating whether the product
 *   can be removed from the cart.
 * @property {boolean} [auto_add_to_cart] - A flag indicating whether the
 *   product should be automatically added to the cart.
 * @property {boolean} [auto_select] - A flag indicating whether the product
 *   should be automatically selected.
 * @property {number} max_quantity - The maximum quantity of the product that
 *   can be added to the cart.
 * @property {number} [min_quantity] - The minimum quantity of the product that
 *   can be added to the cart.
 * @property {ProductGroupPrice} [price] - The price details for the product group.
 * @property {ProductDetails} [product_details] - The details of the product.
 * @property {number} product_uid - The unique ID of the product in the group.
 * @property {Size[]} [sizes] - The available sizes for the product.
 */
/**
 * @typedef ProductListingAction
 * @property {ProductListingActionPage} [page]
 * @property {string} [type]
 */
/**
 * @typedef ProductListingActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [type]
 */
/**
 * @typedef ProductListingDetail
 * @property {Object} [_custom_json]
 * @property {CustomMetaFields[]} [_custom_meta]
 * @property {ProductListingAction} [action]
 * @property {Object} [attributes]
 * @property {ProductBrand} [brand]
 * @property {ProductBrand[]} [categories]
 * @property {ProductCategoryMap} [category_map]
 * @property {string} [color]
 * @property {ProductDetailCustomOrder} [custom_order]
 * @property {string} [description]
 * @property {string} [discount]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {boolean} [has_variant]
 * @property {string[]} [highlights]
 * @property {string[]} [identifiers]
 * @property {string} [image_nature]
 * @property {boolean} [is_dependent]
 * @property {string} [item_code]
 * @property {string} [item_type]
 * @property {Media[]} [medias]
 * @property {ApplicationItemMOQ} [moq]
 * @property {string} [name]
 * @property {NetQuantity} [net_quantity]
 * @property {ProductListingPrice} [price]
 * @property {string[]} [product_group_tag]
 * @property {string} [product_online_date]
 * @property {number} [rating]
 * @property {number} [rating_count]
 * @property {boolean} [sellable]
 * @property {ApplicationItemSEO} [seo]
 * @property {string} [short_description]
 * @property {string[]} [similars]
 * @property {string[]} [sizes]
 * @property {string} slug
 * @property {string[]} [tags]
 * @property {string} [teaser_tag]
 * @property {string[]} [tryouts]
 * @property {string} [type]
 * @property {number} [uid]
 * @property {ProductVariantListingResponse[]} [variants]
 */
/**
 * @typedef ProductListingPrice
 * @property {Price} [effective]
 * @property {Price} [marked]
 */
/**
 * @typedef ProductListingResponse
 * @property {ProductFilters[]} [filters]
 * @property {ProductListingDetail[]} [items]
 * @property {Page} page
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef ProductsComparisonResponse
 * @property {AttributeMetadata[]} [attributes_metadata]
 * @property {ProductDetail[]} [items]
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
 * @typedef ProductSize
 * @property {Dimension} [dimension]
 * @property {string} [display]
 * @property {boolean} [is_available]
 * @property {number} [quantity]
 * @property {string[]} [seller_identifiers]
 * @property {string} [value]
 * @property {Weight} [weight]
 */
/**
 * @typedef ProductSizePriceResponseV3
 * @property {ArticleAssignmentV3} [article_assignment]
 * @property {string} [article_id]
 * @property {PromiseSchema} [delivery_promise]
 * @property {string} [discount]
 * @property {DiscountMeta} [discount_meta]
 * @property {SellerGroupAttributes[]} [grouped_attributes]
 * @property {boolean} [is_cod]
 * @property {boolean} [is_gift]
 * @property {string} [item_type]
 * @property {number[]} [long_lat]
 * @property {MarketPlaceSttributesSchemaV3[]} [marketplace_attributes]
 * @property {number} [pincode]
 * @property {ProductStockPriceV3} [price]
 * @property {ProductStockPriceV3} [price_per_piece]
 * @property {ProductStockUnitPriceV3} [price_per_unit]
 * @property {number} [quantity]
 * @property {ReturnConfigSchemaV3} [return_config]
 * @property {SellerV3} [seller]
 * @property {number} [seller_count]
 * @property {ProductSetV3} [set]
 * @property {string} [special_badge]
 * @property {StoreV3} [store]
 * @property {StrategyWiseListingSchemaV3[]} [strategy_wise_listing]
 */
/**
 * @typedef ProductSizes
 * @property {string} [discount]
 * @property {DiscountMeta} [discount_meta]
 * @property {boolean} [multi_size]
 * @property {ProductSizesPrice} [price]
 * @property {boolean} [sellable]
 * @property {SizeChart} [size_chart]
 * @property {ProductSize[]} [sizes]
 * @property {ProductSizeStores} [stores]
 */
/**
 * @typedef ProductSizeSellerFilterSchemaV3
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef ProductSizeSellersResponseV3
 * @property {ProductSizePriceResponseV3[]} [items]
 * @property {Page} page
 * @property {ProductSizeSellerFilterSchemaV3[]} [sort_on]
 */
/**
 * @typedef ProductSizesPrice
 * @property {Price} [effective]
 * @property {Price} [marked]
 * @property {Price} [selling]
 */
/**
 * @typedef ProductSizeStores
 * @property {number} [count]
 */
/**
 * @typedef ProductSortOn
 * @property {string} [display]
 * @property {boolean} [is_selected]
 * @property {string} [logo]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef ProductStockPolling
 * @property {ProductStockStatusItem[]} [items]
 * @property {Page} page
 */
/**
 * @typedef ProductStockPrice
 * @property {string} [currency]
 * @property {number} [effective]
 * @property {number} [marked]
 */
/**
 * @typedef ProductStockPriceV3
 * @property {string} [currency_code] - The currency code for which the product
 *   is available
 * @property {string} [currency_symbol] - The currency symbol for the currency
 *   in which the product is available.
 * @property {number} [effective] - The effective or final price for the product
 *   at the given pincode.
 * @property {number} [marked] - The marked price of the product.
 * @property {number} [selling] - The selling price of the product.
 */
/**
 * @typedef ProductStockStatusItem
 * @property {CompanyDetail} [company]
 * @property {Object} [identifier]
 * @property {number} [item_id]
 * @property {ProductStockPrice} [price]
 * @property {number} [quantity]
 * @property {Seller} [seller]
 * @property {string} [size]
 * @property {StoreDetail} [store]
 * @property {string} [uid]
 */
/**
 * @typedef ProductStockStatusResponse
 * @property {ProductStockStatusItem[]} [items]
 */
/**
 * @typedef ProductStockUnitPriceV3
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [price]
 * @property {string} [unit]
 */
/**
 * @typedef ProductVariantItemResponse
 * @property {CustomMetaFields[]} [_custom_meta]
 * @property {ProductListingAction} [action]
 * @property {string} [color]
 * @property {string} [color_name]
 * @property {boolean} [is_available]
 * @property {Media[]} [medias]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {string} [value]
 */
/**
 * @typedef ProductVariantListingResponse
 * @property {string} [display_type]
 * @property {string} [header]
 * @property {ProductVariantItemResponse[]} [items]
 * @property {string} [key]
 * @property {number} [total]
 */
/**
 * @typedef ProductVariantResponse
 * @property {string} [display_type]
 * @property {string} [header]
 * @property {ProductVariantItemResponse[]} [items]
 * @property {string} [key]
 */
/**
 * @typedef ProductVariantsResponse
 * @property {ProductVariantResponse[]} [variants]
 */
/**
 * @typedef PromiseSchema
 * @property {string} [max]
 * @property {string} [min]
 */
/**
 * @typedef ReturnConfigSchemaV3
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */
/**
 * @typedef SecondLevelChild
 * @property {Object} [_custom_json]
 * @property {ProductListingAction} [action]
 * @property {ImageUrls} [banners]
 * @property {ThirdLevelChild[]} [childs]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef Seller
 * @property {number} [count]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef SellerGroupAttributes
 * @property {DetailsSchemaV3[]} [details]
 * @property {string} [title]
 */
/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */
/**
 * @typedef SellerV3
 * @property {number} [count]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef Size
 * @property {Object} [display] - The display string for the size
 * @property {boolean} [is_available] - Whether or not this size is available
 * @property {number} [quantity] - The quantity of this size available
 * @property {Object} [value] - The value of the size
 */
/**
 * @typedef SizeChart
 * @property {string} [description]
 * @property {ColumnHeaders} [headers]
 * @property {string} [image]
 * @property {string} [size_tip]
 * @property {SizeChartValues[]} [sizes]
 * @property {string} [title]
 * @property {string} [unit]
 */
/**
 * @typedef SizeChartValues
 * @property {string} [col_1]
 * @property {string} [col_2]
 * @property {string} [col_3]
 * @property {string} [col_4]
 * @property {string} [col_5]
 * @property {string} [col_6]
 */
/**
 * @typedef Store
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [country]
 * @property {LatLong} [lat_long]
 * @property {string} [name]
 * @property {number} [pincode]
 * @property {string} [state]
 * @property {string} [store_code]
 * @property {string} [store_email]
 * @property {string[]} [tags]
 * @property {number} [uid]
 */
/**
 * @typedef StoreAddressSerializer
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {number} [pincode]
 * @property {string} [state]
 */
/**
 * @typedef StoreDepartments
 * @property {Object} [logo]
 * @property {string} [name]
 * @property {number} [priority_order]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef StoreDetail
 * @property {string} [city]
 * @property {string} [code]
 * @property {number} [id]
 * @property {string} [name]
 */
/**
 * @typedef StoreDetails
 * @property {Object} [_custom_json]
 * @property {StoreAddressSerializer} [address]
 * @property {CompanyStore} [company]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {StoreDepartments[]} [departments]
 * @property {StoreManagerSerializer} [manager]
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {StoreTiming[]} [timing]
 * @property {number} [uid]
 */
/**
 * @typedef StoreListingResponse
 * @property {Store[]} items
 * @property {Page} page
 */
/**
 * @typedef StoreManagerSerializer
 * @property {string} [email]
 * @property {SellerPhoneNumber} [mobile_no]
 * @property {string} [name]
 */
/**
 * @typedef StoreTiming
 * @property {Time} [closing]
 * @property {boolean} [open]
 * @property {Time} [opening]
 * @property {string} [weekday]
 */
/**
 * @typedef StoreV3
 * @property {number} [count]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef StrategyWiseListingSchemaV3
 * @property {number} [distance]
 * @property {number} [pincode]
 * @property {number} [quantity]
 * @property {number} [tat]
 */
/**
 * @typedef ThirdLevelChild
 * @property {Object} [_custom_json]
 * @property {ProductListingAction} [action]
 * @property {ImageUrls} [banners]
 * @property {Object[]} [childs]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef Time
 * @property {number} [hour]
 * @property {number} [minute]
 */
/**
 * @typedef UserDetail
 * @property {string} [contact] - The contact details of the user.
 * @property {boolean} [super_user] - A flag indicating whether the user is a super user.
 * @property {string} user_id - The user ID of the user.
 * @property {string} username - The username of the user.
 */
/**
 * @typedef Weight
 * @property {boolean} is_default - Whether the weight is the default one or not
 * @property {number} shipping - The shipping weight of the product
 * @property {string} unit - The unit of weight
 */
declare class CatalogApplicationModel {
}
declare namespace CatalogApplicationModel {
    export { ApplicationItemMOQ, ApplicationItemSEO, ApplicationStoreListing, AppStore, ArticleAssignmentV3, AttributeDetail, AttributeMetadata, AutocompleteItem, AutoCompleteResponse, BrandDetailResponse, BrandItem, BrandListingResponse, CategoryBanner, CategoryItems, CategoryListingResponse, CategoryMetaResponse, Child, CollectionDetailResponse, CollectionListingFilter, CollectionListingFilterTag, CollectionListingFilterType, CollectionQuery, ColumnHeader, ColumnHeaders, CompanyDetail, CompanyStore, CustomMetaFields, Department, DepartmentCategoryTree, DepartmentIdentifier, DepartmentResponse, DetailsSchemaV3, Dimension, DiscountMeta, ErrorResponse, FollowerCountResponse, FollowIdsData, FollowIdsResponse, FollowPostResponse, GetCollectionDetailNest, GetCollectionListingResponse, GetFollowListingResponse, HomeListingResponse, ImageUrls, LatLong, MarketPlaceSttributesSchemaV3, Media, Meta, NetQuantity, Page, Price, ProductBrand, ProductBundle, ProductCategoryMap, ProductCompareResponse, ProductDepartment, ProductDetail, ProductDetailAttribute, ProductDetailCustomOrder, ProductDetailGroupedAttribute, ProductDetails, ProductFilters, ProductFiltersKey, ProductFiltersValue, ProductFrequentlyComparedSimilarResponse, ProductGroupingModel, ProductGroupPrice, ProductInGroup, ProductListingAction, ProductListingActionPage, ProductListingDetail, ProductListingPrice, ProductListingResponse, ProductsComparisonResponse, ProductSetDistributionSizeV3, ProductSetDistributionV3, ProductSetV3, ProductSize, ProductSizePriceResponseV3, ProductSizes, ProductSizeSellerFilterSchemaV3, ProductSizeSellersResponseV3, ProductSizesPrice, ProductSizeStores, ProductSortOn, ProductStockPolling, ProductStockPrice, ProductStockPriceV3, ProductStockStatusItem, ProductStockStatusResponse, ProductStockUnitPriceV3, ProductVariantItemResponse, ProductVariantListingResponse, ProductVariantResponse, ProductVariantsResponse, PromiseSchema, ReturnConfigSchemaV3, SecondLevelChild, Seller, SellerGroupAttributes, SellerPhoneNumber, SellerV3, Size, SizeChart, SizeChartValues, Store, StoreAddressSerializer, StoreDepartments, StoreDetail, StoreDetails, StoreListingResponse, StoreManagerSerializer, StoreTiming, StoreV3, StrategyWiseListingSchemaV3, ThirdLevelChild, Time, UserDetail, Weight };
}
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
    description?: any;
    /**
     * - The SEO title of the item
     */
    title?: any;
};
/** @returns {ApplicationStoreListing} */
declare function ApplicationStoreListing(): ApplicationStoreListing;
type ApplicationStoreListing = {
    filters?: any[];
    items?: AppStore[];
    page?: Page;
};
/** @returns {AppStore} */
declare function AppStore(): AppStore;
type AppStore = {
    address?: StoreAddressSerializer;
    company?: CompanyStore;
    contact_numbers?: SellerPhoneNumber[];
    departments?: StoreDepartments[];
    manager?: StoreManagerSerializer;
    name?: string;
    store_code?: string;
    uid?: number;
};
/** @returns {ArticleAssignmentV3} */
declare function ArticleAssignmentV3(): ArticleAssignmentV3;
type ArticleAssignmentV3 = {
    level?: string;
    strategy?: string;
};
/** @returns {AttributeDetail} */
declare function AttributeDetail(): AttributeDetail;
type AttributeDetail = {
    description?: string;
    display?: string;
    key?: string;
    logo?: string;
};
/** @returns {AttributeMetadata} */
declare function AttributeMetadata(): AttributeMetadata;
type AttributeMetadata = {
    details?: AttributeDetail[];
    title?: string;
};
/** @returns {AutocompleteItem} */
declare function AutocompleteItem(): AutocompleteItem;
type AutocompleteItem = {
    _custom_json?: any;
    action?: ProductListingAction;
    display?: string;
    logo?: Media;
    type?: string;
};
/** @returns {AutoCompleteResponse} */
declare function AutoCompleteResponse(): AutoCompleteResponse;
type AutoCompleteResponse = {
    items?: AutocompleteItem[];
};
/** @returns {BrandDetailResponse} */
declare function BrandDetailResponse(): BrandDetailResponse;
type BrandDetailResponse = {
    _custom_json?: any;
    banners?: ImageUrls;
    description?: string;
    logo?: Media;
    name?: string;
    uid?: number;
};
/** @returns {BrandItem} */
declare function BrandItem(): BrandItem;
type BrandItem = {
    action?: ProductListingAction;
    banners?: ImageUrls;
    departments?: string[];
    description?: string;
    discount?: string;
    logo?: Media;
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
/** @returns {CategoryBanner} */
declare function CategoryBanner(): CategoryBanner;
type CategoryBanner = {
    landscape: Media;
    portrait: Media;
};
/** @returns {CategoryItems} */
declare function CategoryItems(): CategoryItems;
type CategoryItems = {
    action: ProductListingAction;
    banners: CategoryBanner;
    childs?: Child[];
    name: string;
    slug: string;
    uid: number;
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
    _custom_json?: any;
    banners?: ImageUrls;
    logo?: Media;
    name?: string;
    uid?: number;
};
/** @returns {Child} */
declare function Child(): Child;
type Child = {
    _custom_json?: any;
    action?: ProductListingAction;
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
    name?: string;
    slug?: string;
    uid?: number;
};
/** @returns {CollectionDetailResponse} */
declare function CollectionDetailResponse(): CollectionDetailResponse;
type CollectionDetailResponse = {
    _custom_json?: any;
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
    sort_on?: string;
    tag?: string[];
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
    attribute: string;
    op: string;
    value: any[];
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
    col_1?: ColumnHeader;
    col_2?: ColumnHeader;
    col_3?: ColumnHeader;
    col_4?: ColumnHeader;
    col_5?: ColumnHeader;
    col_6?: ColumnHeader;
};
/** @returns {CompanyDetail} */
declare function CompanyDetail(): CompanyDetail;
type CompanyDetail = {
    id?: number;
    name?: string;
};
/** @returns {CompanyStore} */
declare function CompanyStore(): CompanyStore;
type CompanyStore = {
    business_type?: string;
    company_type?: string;
    name?: string;
    uid?: number;
};
/** @returns {CustomMetaFields} */
declare function CustomMetaFields(): CustomMetaFields;
type CustomMetaFields = {
    /**
     * - A key to store a custom field.
     */
    key: string;
    /**
     * - A value to store in the custom field.
     */
    value: string;
};
/** @returns {Department} */
declare function Department(): Department;
type Department = {
    logo?: Media;
    name?: string;
    priority_order?: number;
    slug?: string;
    uid?: number;
};
/** @returns {DepartmentCategoryTree} */
declare function DepartmentCategoryTree(): DepartmentCategoryTree;
type DepartmentCategoryTree = {
    department: string;
    items?: CategoryItems[];
};
/** @returns {DepartmentIdentifier} */
declare function DepartmentIdentifier(): DepartmentIdentifier;
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
/** @returns {DepartmentResponse} */
declare function DepartmentResponse(): DepartmentResponse;
type DepartmentResponse = {
    items?: Department[];
};
/** @returns {DetailsSchemaV3} */
declare function DetailsSchemaV3(): DetailsSchemaV3;
type DetailsSchemaV3 = {
    key?: string;
    type?: string;
    value?: string;
};
/** @returns {Dimension} */
declare function Dimension(): Dimension;
type Dimension = {
    /**
     * - The height of the product
     */
    height: number;
    /**
     * - Whether the dimension is the default one or not
     */
    is_default: boolean;
    /**
     * - The length of the product
     */
    length: number;
    /**
     * - The unit of dimension
     */
    unit: string;
    /**
     * - The width of the product
     */
    width: number;
};
/** @returns {DiscountMeta} */
declare function DiscountMeta(): DiscountMeta;
type DiscountMeta = {
    /**
     * - The end time of the live discount.
     */
    end?: string;
    /**
     * - The start time of the live discount.
     */
    start?: string;
    /**
     * - The time in minutes before the
     * discount ends when the countdown timer should start.
     */
    start_timer_in_minutes?: number;
    /**
     * - Determines whether the discount countdown is
     * visible or not.
     */
    timer: boolean;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    error?: string;
};
/** @returns {FollowerCountResponse} */
declare function FollowerCountResponse(): FollowerCountResponse;
type FollowerCountResponse = {
    count?: number;
};
/** @returns {FollowIdsData} */
declare function FollowIdsData(): FollowIdsData;
type FollowIdsData = {
    brands?: number[];
    collections?: number[];
    products?: number[];
};
/** @returns {FollowIdsResponse} */
declare function FollowIdsResponse(): FollowIdsResponse;
type FollowIdsResponse = {
    data?: FollowIdsData;
};
/** @returns {FollowPostResponse} */
declare function FollowPostResponse(): FollowPostResponse;
type FollowPostResponse = {
    id: string;
    message: string;
};
/** @returns {GetCollectionDetailNest} */
declare function GetCollectionDetailNest(): GetCollectionDetailNest;
type GetCollectionDetailNest = {
    _custom_json?: any;
    _schedule?: any;
    action?: ProductListingAction;
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
    sort_on?: string;
    tag?: string[];
    type?: string;
    uid?: string;
    visible_facets_keys?: string[];
};
/** @returns {GetCollectionListingResponse} */
declare function GetCollectionListingResponse(): GetCollectionListingResponse;
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page: Page;
};
/** @returns {GetFollowListingResponse} */
declare function GetFollowListingResponse(): GetFollowListingResponse;
type GetFollowListingResponse = {
    items: ProductListingDetail[];
    page: Page;
};
/** @returns {HomeListingResponse} */
declare function HomeListingResponse(): HomeListingResponse;
type HomeListingResponse = {
    items?: ProductListingDetail[];
    message?: string;
    page: Page;
};
/** @returns {ImageUrls} */
declare function ImageUrls(): ImageUrls;
type ImageUrls = {
    landscape?: Media;
    portrait?: Media;
};
/** @returns {LatLong} */
declare function LatLong(): LatLong;
type LatLong = {
    coordinates?: number[];
    type?: string;
};
/** @returns {MarketPlaceSttributesSchemaV3} */
declare function MarketPlaceSttributesSchemaV3(): MarketPlaceSttributesSchemaV3;
type MarketPlaceSttributesSchemaV3 = {
    details?: DetailsSchemaV3[];
    title?: string;
};
/** @returns {Media} */
declare function Media(): Media;
type Media = {
    alt?: string;
    meta?: Meta;
    type?: string;
    url?: string;
};
/** @returns {Meta} */
declare function Meta(): Meta;
type Meta = {
    source?: string;
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
/** @returns {Price} */
declare function Price(): Price;
type Price = {
    /**
     * - The currency code for the currency in
     * which the product is available.
     */
    currency_code?: string;
    /**
     * - The currency symbol for the currency
     * in which the product is available.
     */
    currency_symbol?: string;
    /**
     * - The maximum price for the product across stores.
     */
    max?: number;
    /**
     * - The minimum price for the product across stores.
     */
    min?: number;
};
/** @returns {ProductBrand} */
declare function ProductBrand(): ProductBrand;
type ProductBrand = {
    action?: ProductListingAction;
    description?: string;
    logo?: Media;
    name?: string;
    uid?: number;
};
/** @returns {ProductBundle} */
declare function ProductBundle(): ProductBundle;
type ProductBundle = {
    items?: ProductGroupingModel[];
};
/** @returns {ProductCategoryMap} */
declare function ProductCategoryMap(): ProductCategoryMap;
type ProductCategoryMap = {
    l1?: ProductBrand;
    l2?: ProductBrand;
    l3?: ProductBrand;
};
/** @returns {ProductCompareResponse} */
declare function ProductCompareResponse(): ProductCompareResponse;
type ProductCompareResponse = {
    attributes_metadata?: AttributeMetadata[];
    items?: ProductDetail[];
    subtitle?: string;
    title?: string;
};
/** @returns {ProductDepartment} */
declare function ProductDepartment(): ProductDepartment;
type ProductDepartment = {
    logo?: Media;
    name?: string;
    slug?: string;
    uid?: number;
};
/** @returns {ProductDetail} */
declare function ProductDetail(): ProductDetail;
type ProductDetail = {
    _custom_json?: any;
    _custom_meta?: CustomMetaFields[];
    action?: ProductListingAction;
    attributes?: any;
    brand?: ProductBrand;
    categories?: ProductBrand[];
    category_map?: ProductCategoryMap;
    color?: string;
    custom_order?: ProductDetailCustomOrder;
    department?: ProductDepartment;
    description?: string;
    discount?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    has_variant?: boolean;
    highlights?: string[];
    image_nature?: string;
    is_dependent?: boolean;
    item_code?: string;
    item_type?: string;
    medias?: Media[];
    moq?: ApplicationItemMOQ;
    name?: string;
    net_quantity?: NetQuantity;
    price?: ProductListingPrice;
    product_group_tag?: string[];
    product_online_date?: string;
    rating?: number;
    rating_count?: number;
    seo?: ApplicationItemSEO;
    short_description?: string;
    similars?: string[];
    slug: string;
    tags?: string[];
    teaser_tag?: string;
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
/** @returns {ProductDetailCustomOrder} */
declare function ProductDetailCustomOrder(): ProductDetailCustomOrder;
type ProductDetailCustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
/** @returns {ProductDetailGroupedAttribute} */
declare function ProductDetailGroupedAttribute(): ProductDetailGroupedAttribute;
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
/** @returns {ProductDetails} */
declare function ProductDetails(): ProductDetails;
type ProductDetails = {
    /**
     * - A dictionary of product attributes
     */
    attributes?: any;
    /**
     * - The unique ID of the product's brand
     */
    brand_uid?: number;
    /**
     * - The country of origin for the product
     */
    country_of_origin?: any;
    /**
     * - The long description of the product
     */
    description?: any;
    /**
     * - A dictionary of grouped product attributes
     */
    grouped_attributes?: any;
    /**
     * - Whether or not the product has a variant
     */
    has_variant?: boolean;
    /**
     * - A list of highlights for the product
     */
    highlights?: any[];
    /**
     * - The HSN code of the product
     */
    hsn_code?: number;
    /**
     * - A dictionary of product identifiers
     */
    identifier?: any;
    /**
     * - The nature of the product's images
     */
    image_nature?: any;
    /**
     * - A list of image URLs for the product
     */
    images?: any[];
    /**
     * - Whether or not the product is a set of items
     */
    is_set?: boolean;
    /**
     * - The item code of the product
     */
    item_code?: any;
    /**
     * - A list of media objects for the product
     */
    media?: any[];
    /**
     * - The name of the product
     */
    name?: any;
    /**
     * - Whether or not the product is out of stock
     */
    out_of_stock?: boolean;
    /**
     * - The rating of the product
     */
    rating?: number;
    /**
     * - The number of ratings the product has received
     */
    rating_count?: number;
    /**
     * - The short description of the product
     */
    short_description?: any;
    /**
     * - The slug of the product
     */
    slug?: any;
    /**
     * - The template tag of the product
     */
    template_tag?: any;
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
    value?: string;
};
/** @returns {ProductFrequentlyComparedSimilarResponse} */
declare function ProductFrequentlyComparedSimilarResponse(): ProductFrequentlyComparedSimilarResponse;
type ProductFrequentlyComparedSimilarResponse = {
    similars?: ProductCompareResponse;
};
/** @returns {ProductGroupingModel} */
declare function ProductGroupingModel(): ProductGroupingModel;
type ProductGroupingModel = {
    _id?: any;
    /**
     * - The choice of the product grouping.
     */
    choice?: any;
    /**
     * - The ID of the company that owns the product grouping.
     */
    company_id?: number;
    /**
     * - User details of the creator of the document
     */
    created_by?: UserDetail;
    /**
     * - Timestamp of the creation of the document
     */
    created_on: string;
    /**
     * - Whether the product grouping is active.
     */
    is_active?: boolean;
    /**
     * - The URL for the logo of the product grouping.
     */
    logo?: string;
    /**
     * - A dictionary containing metadata information.
     */
    meta?: any;
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
     * - The name of the product grouping.
     */
    name: any;
    /**
     * - A list of page visibilities of the
     * product grouping.
     */
    page_visibility?: any[];
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
     * - The unique identifier for the product grouping.
     */
    slug?: any;
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
/** @returns {ProductGroupPrice} */
declare function ProductGroupPrice(): ProductGroupPrice;
type ProductGroupPrice = {
    /**
     * - The currency code for the prices.
     */
    currency?: any;
    /**
     * - The maximum effective price of the product group.
     */
    max_effective?: number;
    /**
     * - The maximum marked price of the product group.
     */
    max_marked?: number;
    /**
     * - The minimum effective price of the product group.
     */
    min_effective?: number;
    /**
     * - The minimum marked price of the product group.
     */
    min_marked?: number;
};
/** @returns {ProductInGroup} */
declare function ProductInGroup(): ProductInGroup;
type ProductInGroup = {
    /**
     * - A flag indicating whether the product
     * can be removed from the cart.
     */
    allow_remove?: boolean;
    /**
     * - A flag indicating whether the
     * product should be automatically added to the cart.
     */
    auto_add_to_cart?: boolean;
    /**
     * - A flag indicating whether the product
     * should be automatically selected.
     */
    auto_select?: boolean;
    /**
     * - The maximum quantity of the product that
     * can be added to the cart.
     */
    max_quantity: number;
    /**
     * - The minimum quantity of the product that
     * can be added to the cart.
     */
    min_quantity?: number;
    /**
     * - The price details for the product group.
     */
    price?: ProductGroupPrice;
    /**
     * - The details of the product.
     */
    product_details?: ProductDetails;
    /**
     * - The unique ID of the product in the group.
     */
    product_uid: number;
    /**
     * - The available sizes for the product.
     */
    sizes?: Size[];
};
/** @returns {ProductListingAction} */
declare function ProductListingAction(): ProductListingAction;
type ProductListingAction = {
    page?: ProductListingActionPage;
    type?: string;
};
/** @returns {ProductListingActionPage} */
declare function ProductListingActionPage(): ProductListingActionPage;
type ProductListingActionPage = {
    params?: any;
    query?: any;
    type?: string;
};
/** @returns {ProductListingDetail} */
declare function ProductListingDetail(): ProductListingDetail;
type ProductListingDetail = {
    _custom_json?: any;
    _custom_meta?: CustomMetaFields[];
    action?: ProductListingAction;
    attributes?: any;
    brand?: ProductBrand;
    categories?: ProductBrand[];
    category_map?: ProductCategoryMap;
    color?: string;
    custom_order?: ProductDetailCustomOrder;
    description?: string;
    discount?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    has_variant?: boolean;
    highlights?: string[];
    identifiers?: string[];
    image_nature?: string;
    is_dependent?: boolean;
    item_code?: string;
    item_type?: string;
    medias?: Media[];
    moq?: ApplicationItemMOQ;
    name?: string;
    net_quantity?: NetQuantity;
    price?: ProductListingPrice;
    product_group_tag?: string[];
    product_online_date?: string;
    rating?: number;
    rating_count?: number;
    sellable?: boolean;
    seo?: ApplicationItemSEO;
    short_description?: string;
    similars?: string[];
    sizes?: string[];
    slug: string;
    tags?: string[];
    teaser_tag?: string;
    tryouts?: string[];
    type?: string;
    uid?: number;
    variants?: ProductVariantListingResponse[];
};
/** @returns {ProductListingPrice} */
declare function ProductListingPrice(): ProductListingPrice;
type ProductListingPrice = {
    effective?: Price;
    marked?: Price;
};
/** @returns {ProductListingResponse} */
declare function ProductListingResponse(): ProductListingResponse;
type ProductListingResponse = {
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page: Page;
    sort_on?: ProductSortOn[];
};
/** @returns {ProductsComparisonResponse} */
declare function ProductsComparisonResponse(): ProductsComparisonResponse;
type ProductsComparisonResponse = {
    attributes_metadata?: AttributeMetadata[];
    items?: ProductDetail[];
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
/** @returns {ProductSize} */
declare function ProductSize(): ProductSize;
type ProductSize = {
    dimension?: Dimension;
    display?: string;
    is_available?: boolean;
    quantity?: number;
    seller_identifiers?: string[];
    value?: string;
    weight?: Weight;
};
/** @returns {ProductSizePriceResponseV3} */
declare function ProductSizePriceResponseV3(): ProductSizePriceResponseV3;
type ProductSizePriceResponseV3 = {
    article_assignment?: ArticleAssignmentV3;
    article_id?: string;
    delivery_promise?: PromiseSchema;
    discount?: string;
    discount_meta?: DiscountMeta;
    grouped_attributes?: SellerGroupAttributes[];
    is_cod?: boolean;
    is_gift?: boolean;
    item_type?: string;
    long_lat?: number[];
    marketplace_attributes?: MarketPlaceSttributesSchemaV3[];
    pincode?: number;
    price?: ProductStockPriceV3;
    price_per_piece?: ProductStockPriceV3;
    price_per_unit?: ProductStockUnitPriceV3;
    quantity?: number;
    return_config?: ReturnConfigSchemaV3;
    seller?: SellerV3;
    seller_count?: number;
    set?: ProductSetV3;
    special_badge?: string;
    store?: StoreV3;
    strategy_wise_listing?: StrategyWiseListingSchemaV3[];
};
/** @returns {ProductSizes} */
declare function ProductSizes(): ProductSizes;
type ProductSizes = {
    discount?: string;
    discount_meta?: DiscountMeta;
    multi_size?: boolean;
    price?: ProductSizesPrice;
    sellable?: boolean;
    size_chart?: SizeChart;
    sizes?: ProductSize[];
    stores?: ProductSizeStores;
};
/** @returns {ProductSizeSellerFilterSchemaV3} */
declare function ProductSizeSellerFilterSchemaV3(): ProductSizeSellerFilterSchemaV3;
type ProductSizeSellerFilterSchemaV3 = {
    is_selected?: boolean;
    name?: string;
    value?: string;
};
/** @returns {ProductSizeSellersResponseV3} */
declare function ProductSizeSellersResponseV3(): ProductSizeSellersResponseV3;
type ProductSizeSellersResponseV3 = {
    items?: ProductSizePriceResponseV3[];
    page: Page;
    sort_on?: ProductSizeSellerFilterSchemaV3[];
};
/** @returns {ProductSizesPrice} */
declare function ProductSizesPrice(): ProductSizesPrice;
type ProductSizesPrice = {
    effective?: Price;
    marked?: Price;
    selling?: Price;
};
/** @returns {ProductSizeStores} */
declare function ProductSizeStores(): ProductSizeStores;
type ProductSizeStores = {
    count?: number;
};
/** @returns {ProductSortOn} */
declare function ProductSortOn(): ProductSortOn;
type ProductSortOn = {
    display?: string;
    is_selected?: boolean;
    logo?: string;
    name?: string;
    value?: string;
};
/** @returns {ProductStockPolling} */
declare function ProductStockPolling(): ProductStockPolling;
type ProductStockPolling = {
    items?: ProductStockStatusItem[];
    page: Page;
};
/** @returns {ProductStockPrice} */
declare function ProductStockPrice(): ProductStockPrice;
type ProductStockPrice = {
    currency?: string;
    effective?: number;
    marked?: number;
};
/** @returns {ProductStockPriceV3} */
declare function ProductStockPriceV3(): ProductStockPriceV3;
type ProductStockPriceV3 = {
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
     * - The effective or final price for the product
     * at the given pincode.
     */
    effective?: number;
    /**
     * - The marked price of the product.
     */
    marked?: number;
    /**
     * - The selling price of the product.
     */
    selling?: number;
};
/** @returns {ProductStockStatusItem} */
declare function ProductStockStatusItem(): ProductStockStatusItem;
type ProductStockStatusItem = {
    company?: CompanyDetail;
    identifier?: any;
    item_id?: number;
    price?: ProductStockPrice;
    quantity?: number;
    seller?: Seller;
    size?: string;
    store?: StoreDetail;
    uid?: string;
};
/** @returns {ProductStockStatusResponse} */
declare function ProductStockStatusResponse(): ProductStockStatusResponse;
type ProductStockStatusResponse = {
    items?: ProductStockStatusItem[];
};
/** @returns {ProductStockUnitPriceV3} */
declare function ProductStockUnitPriceV3(): ProductStockUnitPriceV3;
type ProductStockUnitPriceV3 = {
    currency_code?: string;
    currency_symbol?: string;
    price?: number;
    unit?: string;
};
/** @returns {ProductVariantItemResponse} */
declare function ProductVariantItemResponse(): ProductVariantItemResponse;
type ProductVariantItemResponse = {
    _custom_meta?: CustomMetaFields[];
    action?: ProductListingAction;
    color?: string;
    color_name?: string;
    is_available?: boolean;
    medias?: Media[];
    name?: string;
    slug?: string;
    uid?: number;
    value?: string;
};
/** @returns {ProductVariantListingResponse} */
declare function ProductVariantListingResponse(): ProductVariantListingResponse;
type ProductVariantListingResponse = {
    display_type?: string;
    header?: string;
    items?: ProductVariantItemResponse[];
    key?: string;
    total?: number;
};
/** @returns {ProductVariantResponse} */
declare function ProductVariantResponse(): ProductVariantResponse;
type ProductVariantResponse = {
    display_type?: string;
    header?: string;
    items?: ProductVariantItemResponse[];
    key?: string;
};
/** @returns {ProductVariantsResponse} */
declare function ProductVariantsResponse(): ProductVariantsResponse;
type ProductVariantsResponse = {
    variants?: ProductVariantResponse[];
};
/** @returns {PromiseSchema} */
declare function PromiseSchema(): PromiseSchema;
type PromiseSchema = {
    max?: string;
    min?: string;
};
/** @returns {ReturnConfigSchemaV3} */
declare function ReturnConfigSchemaV3(): ReturnConfigSchemaV3;
type ReturnConfigSchemaV3 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
/** @returns {SecondLevelChild} */
declare function SecondLevelChild(): SecondLevelChild;
type SecondLevelChild = {
    _custom_json?: any;
    action?: ProductListingAction;
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
    name?: string;
    slug?: string;
    uid?: number;
};
/** @returns {Seller} */
declare function Seller(): Seller;
type Seller = {
    count?: number;
    name?: string;
    uid?: number;
};
/** @returns {SellerGroupAttributes} */
declare function SellerGroupAttributes(): SellerGroupAttributes;
type SellerGroupAttributes = {
    details?: DetailsSchemaV3[];
    title?: string;
};
/** @returns {SellerPhoneNumber} */
declare function SellerPhoneNumber(): SellerPhoneNumber;
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
/** @returns {SellerV3} */
declare function SellerV3(): SellerV3;
type SellerV3 = {
    count?: number;
    name?: string;
    uid?: number;
};
/** @returns {Size} */
declare function Size(): Size;
type Size = {
    /**
     * - The display string for the size
     */
    display?: any;
    /**
     * - Whether or not this size is available
     */
    is_available?: boolean;
    /**
     * - The quantity of this size available
     */
    quantity?: number;
    /**
     * - The value of the size
     */
    value?: any;
};
/** @returns {SizeChart} */
declare function SizeChart(): SizeChart;
type SizeChart = {
    description?: string;
    headers?: ColumnHeaders;
    image?: string;
    size_tip?: string;
    sizes?: SizeChartValues[];
    title?: string;
    unit?: string;
};
/** @returns {SizeChartValues} */
declare function SizeChartValues(): SizeChartValues;
type SizeChartValues = {
    col_1?: string;
    col_2?: string;
    col_3?: string;
    col_4?: string;
    col_5?: string;
    col_6?: string;
};
/** @returns {Store} */
declare function Store(): Store;
type Store = {
    address?: string;
    city?: string;
    country?: string;
    lat_long?: LatLong;
    name?: string;
    pincode?: number;
    state?: string;
    store_code?: string;
    store_email?: string;
    tags?: string[];
    uid?: number;
};
/** @returns {StoreAddressSerializer} */
declare function StoreAddressSerializer(): StoreAddressSerializer;
type StoreAddressSerializer = {
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    pincode?: number;
    state?: string;
};
/** @returns {StoreDepartments} */
declare function StoreDepartments(): StoreDepartments;
type StoreDepartments = {
    logo?: any;
    name?: string;
    priority_order?: number;
    slug?: string;
    uid?: number;
};
/** @returns {StoreDetail} */
declare function StoreDetail(): StoreDetail;
type StoreDetail = {
    city?: string;
    code?: string;
    id?: number;
    name?: string;
};
/** @returns {StoreDetails} */
declare function StoreDetails(): StoreDetails;
type StoreDetails = {
    _custom_json?: any;
    address?: StoreAddressSerializer;
    company?: CompanyStore;
    contact_numbers?: SellerPhoneNumber[];
    departments?: StoreDepartments[];
    manager?: StoreManagerSerializer;
    name?: string;
    store_code?: string;
    timing?: StoreTiming[];
    uid?: number;
};
/** @returns {StoreListingResponse} */
declare function StoreListingResponse(): StoreListingResponse;
type StoreListingResponse = {
    items: Store[];
    page: Page;
};
/** @returns {StoreManagerSerializer} */
declare function StoreManagerSerializer(): StoreManagerSerializer;
type StoreManagerSerializer = {
    email?: string;
    mobile_no?: SellerPhoneNumber;
    name?: string;
};
/** @returns {StoreTiming} */
declare function StoreTiming(): StoreTiming;
type StoreTiming = {
    closing?: Time;
    open?: boolean;
    opening?: Time;
    weekday?: string;
};
/** @returns {StoreV3} */
declare function StoreV3(): StoreV3;
type StoreV3 = {
    count?: number;
    name?: string;
    uid?: number;
};
/** @returns {StrategyWiseListingSchemaV3} */
declare function StrategyWiseListingSchemaV3(): StrategyWiseListingSchemaV3;
type StrategyWiseListingSchemaV3 = {
    distance?: number;
    pincode?: number;
    quantity?: number;
    tat?: number;
};
/** @returns {ThirdLevelChild} */
declare function ThirdLevelChild(): ThirdLevelChild;
type ThirdLevelChild = {
    _custom_json?: any;
    action?: ProductListingAction;
    banners?: ImageUrls;
    childs?: any[];
    name?: string;
    slug?: string;
    uid?: number;
};
/** @returns {Time} */
declare function Time(): Time;
type Time = {
    hour?: number;
    minute?: number;
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
/** @returns {Weight} */
declare function Weight(): Weight;
type Weight = {
    /**
     * - Whether the weight is the default one or not
     */
    is_default: boolean;
    /**
     * - The shipping weight of the product
     */
    shipping: number;
    /**
     * - The unit of weight
     */
    unit: string;
};
