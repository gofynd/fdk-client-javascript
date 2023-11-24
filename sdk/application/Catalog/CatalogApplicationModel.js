const Joi = require("joi");

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

class CatalogApplicationModel {
  /** @returns {ApplicationItemMOQ} */
  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),
      maximum: Joi.number(),
      minimum: Joi.number(),
    });
  }

  /** @returns {ApplicationItemSEO} */
  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),
      title: Joi.any(),
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

  /** @returns {AppStore} */
  static AppStore() {
    return Joi.object({
      address: CatalogApplicationModel.StoreAddressSerializer(),
      company: CatalogApplicationModel.CompanyStore(),
      contact_numbers: Joi.array().items(
        CatalogApplicationModel.SellerPhoneNumber()
      ),
      departments: Joi.array().items(
        CatalogApplicationModel.StoreDepartments()
      ),
      manager: CatalogApplicationModel.StoreManagerSerializer(),
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {ArticleAssignmentV3} */
  static ArticleAssignmentV3() {
    return Joi.object({
      level: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
    });
  }

  /** @returns {AttributeDetail} */
  static AttributeDetail() {
    return Joi.object({
      description: Joi.string().allow(""),
      display: Joi.string().allow(""),
      key: Joi.string().allow(""),
      logo: Joi.string().allow(""),
    });
  }

  /** @returns {AttributeMetadata} */
  static AttributeMetadata() {
    return Joi.object({
      details: Joi.array().items(CatalogApplicationModel.AttributeDetail()),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {AutocompleteItem} */
  static AutocompleteItem() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogApplicationModel.ProductListingAction(),
      display: Joi.string().allow(""),
      logo: CatalogApplicationModel.Media(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {AutoCompleteResponse} */
  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.AutocompleteItem()),
    });
  }

  /** @returns {BrandDetailResponse} */
  static BrandDetailResponse() {
    return Joi.object({
      _custom_json: Joi.any(),
      banners: CatalogApplicationModel.ImageUrls(),
      description: Joi.string().allow(""),
      logo: CatalogApplicationModel.Media(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {BrandItem} */
  static BrandItem() {
    return Joi.object({
      action: CatalogApplicationModel.ProductListingAction(),
      banners: CatalogApplicationModel.ImageUrls(),
      departments: Joi.array().items(Joi.string().allow("")),
      description: Joi.string().allow(""),
      discount: Joi.string().allow(""),
      logo: CatalogApplicationModel.Media(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {BrandListingResponse} */
  static BrandListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.BrandItem()),
      page: CatalogApplicationModel.Page().required(),
    });
  }

  /** @returns {CategoryBanner} */
  static CategoryBanner() {
    return Joi.object({
      landscape: CatalogApplicationModel.Media().required(),
      portrait: CatalogApplicationModel.Media().required(),
    });
  }

  /** @returns {CategoryItems} */
  static CategoryItems() {
    return Joi.object({
      action: CatalogApplicationModel.ProductListingAction().required(),
      banners: CatalogApplicationModel.CategoryBanner().required(),
      childs: Joi.array().items(CatalogApplicationModel.Child()),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      uid: Joi.number().required(),
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
      _custom_json: Joi.any(),
      banners: CatalogApplicationModel.ImageUrls(),
      logo: CatalogApplicationModel.Media(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {Child} */
  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogApplicationModel.ProductListingAction(),
      banners: CatalogApplicationModel.ImageUrls(),
      childs: Joi.array().items(CatalogApplicationModel.SecondLevelChild()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {CollectionDetailResponse} */
  static CollectionDetailResponse() {
    return Joi.object({
      _custom_json: Joi.any(),
      _schedule: Joi.any(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: Joi.any(),
      banners: CatalogApplicationModel.ImageUrls(),
      cron: Joi.any(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      logo: CatalogApplicationModel.Media(),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      query: Joi.array().items(CatalogApplicationModel.CollectionQuery()),
      slug: Joi.string().allow(""),
      sort_on: Joi.string().allow(""),
      tag: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
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
      col_1: CatalogApplicationModel.ColumnHeader(),
      col_2: CatalogApplicationModel.ColumnHeader(),
      col_3: CatalogApplicationModel.ColumnHeader(),
      col_4: CatalogApplicationModel.ColumnHeader(),
      col_5: CatalogApplicationModel.ColumnHeader(),
      col_6: CatalogApplicationModel.ColumnHeader(),
    });
  }

  /** @returns {CompanyDetail} */
  static CompanyDetail() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyStore} */
  static CompanyStore() {
    return Joi.object({
      business_type: Joi.string().allow(""),
      company_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {CustomMetaFields} */
  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {Department} */
  static Department() {
    return Joi.object({
      logo: CatalogApplicationModel.Media(),
      name: Joi.string().allow(""),
      priority_order: Joi.number(),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {DepartmentCategoryTree} */
  static DepartmentCategoryTree() {
    return Joi.object({
      department: Joi.string().allow("").required(),
      items: Joi.array().items(CatalogApplicationModel.CategoryItems()),
    });
  }

  /** @returns {DepartmentIdentifier} */
  static DepartmentIdentifier() {
    return Joi.object({
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {DepartmentResponse} */
  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.Department()),
    });
  }

  /** @returns {DetailsSchemaV3} */
  static DetailsSchemaV3() {
    return Joi.object({
      key: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {Dimension} */
  static Dimension() {
    return Joi.object({
      height: Joi.number().required(),
      is_default: Joi.boolean().required(),
      length: Joi.number().required(),
      unit: Joi.string().allow("").required(),
      width: Joi.number().required(),
    });
  }

  /** @returns {DiscountMeta} */
  static DiscountMeta() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
      start_timer_in_minutes: Joi.number(),
      timer: Joi.boolean().required(),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
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
      brands: Joi.array().items(Joi.number()),
      collections: Joi.array().items(Joi.number()),
      products: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {FollowIdsResponse} */
  static FollowIdsResponse() {
    return Joi.object({
      data: CatalogApplicationModel.FollowIdsData(),
    });
  }

  /** @returns {FollowPostResponse} */
  static FollowPostResponse() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetCollectionDetailNest} */
  static GetCollectionDetailNest() {
    return Joi.object({
      _custom_json: Joi.any(),
      _schedule: Joi.any(),
      action: CatalogApplicationModel.ProductListingAction(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: Joi.any(),
      banners: CatalogApplicationModel.ImageUrls(),
      cron: Joi.any(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      logo: CatalogApplicationModel.Media(),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      query: Joi.array().items(CatalogApplicationModel.CollectionQuery()),
      slug: Joi.string().allow(""),
      sort_on: Joi.string().allow(""),
      tag: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {GetCollectionListingResponse} */
  static GetCollectionListingResponse() {
    return Joi.object({
      filters: CatalogApplicationModel.CollectionListingFilter(),
      items: Joi.array().items(
        CatalogApplicationModel.GetCollectionDetailNest()
      ),
      page: CatalogApplicationModel.Page().required(),
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

  /** @returns {HomeListingResponse} */
  static HomeListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.ProductListingDetail()),
      message: Joi.string().allow(""),
      page: CatalogApplicationModel.Page().required(),
    });
  }

  /** @returns {ImageUrls} */
  static ImageUrls() {
    return Joi.object({
      landscape: CatalogApplicationModel.Media(),
      portrait: CatalogApplicationModel.Media(),
    });
  }

  /** @returns {LatLong} */
  static LatLong() {
    return Joi.object({
      coordinates: Joi.array().items(Joi.number()),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {MarketPlaceSttributesSchemaV3} */
  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      details: Joi.array().items(CatalogApplicationModel.DetailsSchemaV3()),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {Media} */
  static Media() {
    return Joi.object({
      alt: Joi.string().allow(""),
      meta: CatalogApplicationModel.Meta(),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  /** @returns {NetQuantity} */
  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),
      value: Joi.number(),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {Price} */
  static Price() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      max: Joi.number(),
      min: Joi.number(),
    });
  }

  /** @returns {ProductBrand} */
  static ProductBrand() {
    return Joi.object({
      action: CatalogApplicationModel.ProductListingAction(),
      description: Joi.string().allow(""),
      logo: CatalogApplicationModel.Media(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {ProductBundle} */
  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.ProductGroupingModel()),
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

  /** @returns {ProductCompareResponse} */
  static ProductCompareResponse() {
    return Joi.object({
      attributes_metadata: Joi.array().items(
        CatalogApplicationModel.AttributeMetadata()
      ),
      items: Joi.array().items(CatalogApplicationModel.ProductDetail()),
      subtitle: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {ProductDepartment} */
  static ProductDepartment() {
    return Joi.object({
      logo: CatalogApplicationModel.Media(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {ProductDetail} */
  static ProductDetail() {
    return Joi.object({
      _custom_json: Joi.any(),
      _custom_meta: Joi.array().items(
        CatalogApplicationModel.CustomMetaFields()
      ),
      action: CatalogApplicationModel.ProductListingAction(),
      attributes: Joi.any(),
      brand: CatalogApplicationModel.ProductBrand(),
      categories: Joi.array().items(CatalogApplicationModel.ProductBrand()),
      category_map: CatalogApplicationModel.ProductCategoryMap(),
      color: Joi.string().allow(""),
      custom_order: CatalogApplicationModel.ProductDetailCustomOrder(),
      department: CatalogApplicationModel.ProductDepartment(),
      description: Joi.string().allow(""),
      discount: Joi.string().allow(""),
      grouped_attributes: Joi.array().items(
        CatalogApplicationModel.ProductDetailGroupedAttribute()
      ),
      has_variant: Joi.boolean(),
      highlights: Joi.array().items(Joi.string().allow("")),
      image_nature: Joi.string().allow(""),
      is_dependent: Joi.boolean(),
      item_code: Joi.string().allow(""),
      item_type: Joi.string().allow(""),
      medias: Joi.array().items(CatalogApplicationModel.Media()),
      moq: CatalogApplicationModel.ApplicationItemMOQ(),
      name: Joi.string().allow(""),
      net_quantity: CatalogApplicationModel.NetQuantity(),
      price: CatalogApplicationModel.ProductListingPrice(),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      product_online_date: Joi.string().allow(""),
      rating: Joi.number(),
      rating_count: Joi.number(),
      seo: CatalogApplicationModel.ApplicationItemSEO(),
      short_description: Joi.string().allow(""),
      similars: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.string().allow("")),
      teaser_tag: Joi.string().allow(""),
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

  /** @returns {ProductDetailCustomOrder} */
  static ProductDetailCustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),
      manufacturing_time: Joi.number(),
      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  /** @returns {ProductDetailGroupedAttribute} */
  static ProductDetailGroupedAttribute() {
    return Joi.object({
      details: Joi.array().items(
        CatalogApplicationModel.ProductDetailAttribute()
      ),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {ProductDetails} */
  static ProductDetails() {
    return Joi.object({
      attributes: Joi.any(),
      brand_uid: Joi.number(),
      country_of_origin: Joi.any(),
      description: Joi.any(),
      grouped_attributes: Joi.any(),
      has_variant: Joi.boolean(),
      highlights: Joi.array().items(Joi.any()),
      hsn_code: Joi.number(),
      identifier: Joi.any(),
      image_nature: Joi.any(),
      images: Joi.array().items(Joi.any()),
      is_set: Joi.boolean(),
      item_code: Joi.any(),
      media: Joi.array().items(Joi.any()),
      name: Joi.any(),
      out_of_stock: Joi.boolean(),
      rating: Joi.number(),
      rating_count: Joi.number(),
      short_description: Joi.any(),
      slug: Joi.any(),
      template_tag: Joi.any(),
    });
  }

  /** @returns {ProductFilters} */
  static ProductFilters() {
    return Joi.object({
      key: CatalogApplicationModel.ProductFiltersKey().required(),
      values: Joi.array()
        .items(CatalogApplicationModel.ProductFiltersValue())
        .required(),
    });
  }

  /** @returns {ProductFiltersKey} */
  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      kind: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
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
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ProductFrequentlyComparedSimilarResponse} */
  static ProductFrequentlyComparedSimilarResponse() {
    return Joi.object({
      similars: CatalogApplicationModel.ProductCompareResponse(),
    });
  }

  /** @returns {ProductGroupingModel} */
  static ProductGroupingModel() {
    return Joi.object({
      _id: Joi.any(),
      choice: Joi.any(),
      company_id: Joi.number(),
      created_by: CatalogApplicationModel.UserDetail(),
      created_on: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      logo: Joi.string().allow("").allow(null),
      meta: Joi.any(),
      modified_by: CatalogApplicationModel.UserDetail(),
      modified_on: Joi.string().allow("").required(),
      name: Joi.any().required(),
      page_visibility: Joi.array().items(Joi.any()),
      products: Joi.array()
        .items(CatalogApplicationModel.ProductInGroup())
        .required(),
      same_store_assignment: Joi.boolean(),
      slug: Joi.any(),
      verified_by: CatalogApplicationModel.UserDetail(),
      verified_on: Joi.string().allow(""),
    });
  }

  /** @returns {ProductGroupPrice} */
  static ProductGroupPrice() {
    return Joi.object({
      currency: Joi.any(),
      max_effective: Joi.number(),
      max_marked: Joi.number(),
      min_effective: Joi.number(),
      min_marked: Joi.number(),
    });
  }

  /** @returns {ProductInGroup} */
  static ProductInGroup() {
    return Joi.object({
      allow_remove: Joi.boolean(),
      auto_add_to_cart: Joi.boolean(),
      auto_select: Joi.boolean(),
      max_quantity: Joi.number().required(),
      min_quantity: Joi.number(),
      price: CatalogApplicationModel.ProductGroupPrice(),
      product_details: CatalogApplicationModel.ProductDetails(),
      product_uid: Joi.number().required(),
      sizes: Joi.array().items(CatalogApplicationModel.Size()),
    });
  }

  /** @returns {ProductListingAction} */
  static ProductListingAction() {
    return Joi.object({
      page: CatalogApplicationModel.ProductListingActionPage(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {ProductListingActionPage} */
  static ProductListingActionPage() {
    return Joi.object({
      params: Joi.any(),
      query: Joi.any(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {ProductListingDetail} */
  static ProductListingDetail() {
    return Joi.object({
      _custom_json: Joi.any(),
      _custom_meta: Joi.array().items(
        CatalogApplicationModel.CustomMetaFields()
      ),
      action: CatalogApplicationModel.ProductListingAction(),
      attributes: Joi.any(),
      brand: CatalogApplicationModel.ProductBrand(),
      categories: Joi.array().items(CatalogApplicationModel.ProductBrand()),
      category_map: CatalogApplicationModel.ProductCategoryMap(),
      color: Joi.string().allow(""),
      custom_order: CatalogApplicationModel.ProductDetailCustomOrder(),
      description: Joi.string().allow(""),
      discount: Joi.string().allow(""),
      grouped_attributes: Joi.array().items(
        CatalogApplicationModel.ProductDetailGroupedAttribute()
      ),
      has_variant: Joi.boolean(),
      highlights: Joi.array().items(Joi.string().allow("")),
      identifiers: Joi.array().items(Joi.string().allow("")),
      image_nature: Joi.string().allow(""),
      is_dependent: Joi.boolean(),
      item_code: Joi.string().allow(""),
      item_type: Joi.string().allow(""),
      medias: Joi.array().items(CatalogApplicationModel.Media()),
      moq: CatalogApplicationModel.ApplicationItemMOQ(),
      name: Joi.string().allow(""),
      net_quantity: CatalogApplicationModel.NetQuantity(),
      price: CatalogApplicationModel.ProductListingPrice(),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      product_online_date: Joi.string().allow(""),
      rating: Joi.number(),
      rating_count: Joi.number(),
      sellable: Joi.boolean(),
      seo: CatalogApplicationModel.ApplicationItemSEO(),
      short_description: Joi.string().allow(""),
      similars: Joi.array().items(Joi.string().allow("")),
      sizes: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.string().allow("")),
      teaser_tag: Joi.string().allow(""),
      tryouts: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.number(),
      variants: Joi.array().items(
        CatalogApplicationModel.ProductVariantListingResponse()
      ),
    });
  }

  /** @returns {ProductListingPrice} */
  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogApplicationModel.Price(),
      marked: CatalogApplicationModel.Price(),
    });
  }

  /** @returns {ProductListingResponse} */
  static ProductListingResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogApplicationModel.ProductFilters()),
      items: Joi.array().items(CatalogApplicationModel.ProductListingDetail()),
      page: CatalogApplicationModel.Page().required(),
      sort_on: Joi.array().items(CatalogApplicationModel.ProductSortOn()),
    });
  }

  /** @returns {ProductsComparisonResponse} */
  static ProductsComparisonResponse() {
    return Joi.object({
      attributes_metadata: Joi.array().items(
        CatalogApplicationModel.AttributeMetadata()
      ),
      items: Joi.array().items(CatalogApplicationModel.ProductDetail()),
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

  /** @returns {ProductSize} */
  static ProductSize() {
    return Joi.object({
      dimension: CatalogApplicationModel.Dimension(),
      display: Joi.string().allow(""),
      is_available: Joi.boolean(),
      quantity: Joi.number(),
      seller_identifiers: Joi.array().items(Joi.string().allow("")),
      value: Joi.string().allow(""),
      weight: CatalogApplicationModel.Weight(),
    });
  }

  /** @returns {ProductSizePriceResponseV3} */
  static ProductSizePriceResponseV3() {
    return Joi.object({
      article_assignment: CatalogApplicationModel.ArticleAssignmentV3(),
      article_id: Joi.string().allow(""),
      delivery_promise: CatalogApplicationModel.PromiseSchema(),
      discount: Joi.string().allow(""),
      discount_meta: CatalogApplicationModel.DiscountMeta(),
      grouped_attributes: Joi.array().items(
        CatalogApplicationModel.SellerGroupAttributes()
      ),
      is_cod: Joi.boolean(),
      is_gift: Joi.boolean(),
      item_type: Joi.string().allow(""),
      long_lat: Joi.array().items(Joi.number()),
      marketplace_attributes: Joi.array().items(
        CatalogApplicationModel.MarketPlaceSttributesSchemaV3()
      ),
      pincode: Joi.number(),
      price: CatalogApplicationModel.ProductStockPriceV3(),
      price_per_piece: CatalogApplicationModel.ProductStockPriceV3(),
      price_per_unit: CatalogApplicationModel.ProductStockUnitPriceV3(),
      quantity: Joi.number(),
      return_config: CatalogApplicationModel.ReturnConfigSchemaV3(),
      seller: CatalogApplicationModel.SellerV3(),
      seller_count: Joi.number(),
      set: CatalogApplicationModel.ProductSetV3(),
      special_badge: Joi.string().allow(""),
      store: CatalogApplicationModel.StoreV3(),
      strategy_wise_listing: Joi.array().items(
        CatalogApplicationModel.StrategyWiseListingSchemaV3()
      ),
    });
  }

  /** @returns {ProductSizes} */
  static ProductSizes() {
    return Joi.object({
      discount: Joi.string().allow(""),
      discount_meta: CatalogApplicationModel.DiscountMeta(),
      multi_size: Joi.boolean(),
      price: CatalogApplicationModel.ProductSizesPrice(),
      sellable: Joi.boolean(),
      size_chart: CatalogApplicationModel.SizeChart(),
      sizes: Joi.array().items(CatalogApplicationModel.ProductSize()),
      stores: CatalogApplicationModel.ProductSizeStores(),
    });
  }

  /** @returns {ProductSizeSellerFilterSchemaV3} */
  static ProductSizeSellerFilterSchemaV3() {
    return Joi.object({
      is_selected: Joi.boolean(),
      name: Joi.string().allow(""),
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

  /** @returns {ProductSizesPrice} */
  static ProductSizesPrice() {
    return Joi.object({
      effective: CatalogApplicationModel.Price(),
      marked: CatalogApplicationModel.Price(),
      selling: CatalogApplicationModel.Price(),
    });
  }

  /** @returns {ProductSizeStores} */
  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  /** @returns {ProductSortOn} */
  static ProductSortOn() {
    return Joi.object({
      display: Joi.string().allow(""),
      is_selected: Joi.boolean(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
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

  /** @returns {ProductStockPrice} */
  static ProductStockPrice() {
    return Joi.object({
      currency: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
    });
  }

  /** @returns {ProductStockPriceV3} */
  static ProductStockPriceV3() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
      selling: Joi.number(),
    });
  }

  /** @returns {ProductStockStatusItem} */
  static ProductStockStatusItem() {
    return Joi.object({
      company: CatalogApplicationModel.CompanyDetail(),
      identifier: Joi.any(),
      item_id: Joi.number(),
      price: CatalogApplicationModel.ProductStockPrice(),
      quantity: Joi.number(),
      seller: CatalogApplicationModel.Seller(),
      size: Joi.string().allow(""),
      store: CatalogApplicationModel.StoreDetail(),
      uid: Joi.string().allow(""),
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

  /** @returns {ProductStockUnitPriceV3} */
  static ProductStockUnitPriceV3() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      price: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }

  /** @returns {ProductVariantItemResponse} */
  static ProductVariantItemResponse() {
    return Joi.object({
      _custom_meta: Joi.array().items(
        CatalogApplicationModel.CustomMetaFields()
      ),
      action: CatalogApplicationModel.ProductListingAction(),
      color: Joi.string().allow(""),
      color_name: Joi.string().allow(""),
      is_available: Joi.boolean(),
      medias: Joi.array().items(CatalogApplicationModel.Media()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ProductVariantListingResponse} */
  static ProductVariantListingResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),
      header: Joi.string().allow(""),
      items: Joi.array().items(
        CatalogApplicationModel.ProductVariantItemResponse()
      ),
      key: Joi.string().allow(""),
      total: Joi.number(),
    });
  }

  /** @returns {ProductVariantResponse} */
  static ProductVariantResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),
      header: Joi.string().allow(""),
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

  /** @returns {PromiseSchema} */
  static PromiseSchema() {
    return Joi.object({
      max: Joi.string().allow(""),
      min: Joi.string().allow(""),
    });
  }

  /** @returns {ReturnConfigSchemaV3} */
  static ReturnConfigSchemaV3() {
    return Joi.object({
      returnable: Joi.boolean(),
      time: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }

  /** @returns {SecondLevelChild} */
  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogApplicationModel.ProductListingAction(),
      banners: CatalogApplicationModel.ImageUrls(),
      childs: Joi.array().items(CatalogApplicationModel.ThirdLevelChild()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {Seller} */
  static Seller() {
    return Joi.object({
      count: Joi.number(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {SellerGroupAttributes} */
  static SellerGroupAttributes() {
    return Joi.object({
      details: Joi.array().items(CatalogApplicationModel.DetailsSchemaV3()),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {SellerPhoneNumber} */
  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),
      number: Joi.string().allow("").required(),
    });
  }

  /** @returns {SellerV3} */
  static SellerV3() {
    return Joi.object({
      count: Joi.number(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {Size} */
  static Size() {
    return Joi.object({
      display: Joi.any(),
      is_available: Joi.boolean(),
      quantity: Joi.number(),
      value: Joi.any(),
    });
  }

  /** @returns {SizeChart} */
  static SizeChart() {
    return Joi.object({
      description: Joi.string().allow(""),
      headers: CatalogApplicationModel.ColumnHeaders(),
      image: Joi.string().allow(""),
      size_tip: Joi.string().allow(""),
      sizes: Joi.array().items(CatalogApplicationModel.SizeChartValues()),
      title: Joi.string().allow(""),
      unit: Joi.string().allow(""),
    });
  }

  /** @returns {SizeChartValues} */
  static SizeChartValues() {
    return Joi.object({
      col_1: Joi.string().allow(""),
      col_2: Joi.string().allow(""),
      col_3: Joi.string().allow(""),
      col_4: Joi.string().allow(""),
      col_5: Joi.string().allow(""),
      col_6: Joi.string().allow(""),
    });
  }

  /** @returns {Store} */
  static Store() {
    return Joi.object({
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      lat_long: CatalogApplicationModel.LatLong(),
      name: Joi.string().allow(""),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      store_email: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
    });
  }

  /** @returns {StoreAddressSerializer} */
  static StoreAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }

  /** @returns {StoreDepartments} */
  static StoreDepartments() {
    return Joi.object({
      logo: Joi.any(),
      name: Joi.string().allow(""),
      priority_order: Joi.number(),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {StoreDetail} */
  static StoreDetail() {
    return Joi.object({
      city: Joi.string().allow(""),
      code: Joi.string().allow(""),
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {StoreDetails} */
  static StoreDetails() {
    return Joi.object({
      _custom_json: Joi.any(),
      address: CatalogApplicationModel.StoreAddressSerializer(),
      company: CatalogApplicationModel.CompanyStore(),
      contact_numbers: Joi.array().items(
        CatalogApplicationModel.SellerPhoneNumber()
      ),
      departments: Joi.array().items(
        CatalogApplicationModel.StoreDepartments()
      ),
      manager: CatalogApplicationModel.StoreManagerSerializer(),
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      timing: Joi.array().items(CatalogApplicationModel.StoreTiming()),
      uid: Joi.number(),
    });
  }

  /** @returns {StoreListingResponse} */
  static StoreListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogApplicationModel.Store()).required(),
      page: CatalogApplicationModel.Page().required(),
    });
  }

  /** @returns {StoreManagerSerializer} */
  static StoreManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),
      mobile_no: CatalogApplicationModel.SellerPhoneNumber(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {StoreTiming} */
  static StoreTiming() {
    return Joi.object({
      closing: CatalogApplicationModel.Time(),
      open: Joi.boolean(),
      opening: CatalogApplicationModel.Time(),
      weekday: Joi.string().allow(""),
    });
  }

  /** @returns {StoreV3} */
  static StoreV3() {
    return Joi.object({
      count: Joi.number(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {StrategyWiseListingSchemaV3} */
  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      distance: Joi.number(),
      pincode: Joi.number(),
      quantity: Joi.number(),
      tat: Joi.number(),
    });
  }

  /** @returns {ThirdLevelChild} */
  static ThirdLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogApplicationModel.ProductListingAction(),
      banners: CatalogApplicationModel.ImageUrls(),
      childs: Joi.array().items(Joi.any()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {Time} */
  static Time() {
    return Joi.object({
      hour: Joi.number(),
      minute: Joi.number(),
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

  /** @returns {Weight} */
  static Weight() {
    return Joi.object({
      is_default: Joi.boolean().required(),
      shipping: Joi.number().required(),
      unit: Joi.string().allow("").required(),
    });
  }
}
module.exports = CatalogApplicationModel;
