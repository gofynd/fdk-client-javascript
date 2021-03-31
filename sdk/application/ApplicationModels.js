const APIClient = require("./APIClient");
const Paginator = require("../common/Paginator");

/**
        @typedef Media
        
        
        @property { string } [type]
        
        @property { string } [url]
        
         
    */

/**
        @typedef ProductListingActionPage
        
        
        @property { Object } [query]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ProductListingAction
        
        
        @property { string } [type]
        
        @property { ProductListingActionPage } [page]
        
         
    */

/**
        @typedef ProductBrand
        
        
        @property { Media } [logo]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { ProductListingAction } [action]
        
         
    */

/**
        @typedef ProductDetailAttribute
        
        
        @property { string } [key]
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef ProductDetailGroupedAttribute
        
        
        @property { Array<ProductDetailAttribute> } [details]
        
        @property { string } [title]
        
         
    */

/**
        @typedef ProductDetail
        
        
        @property { string } [name]
        
        @property { Array<Media> } [medias]
        
        @property { Array<ProductBrand> } [categories]
        
        @property { Object } [attributes]
        
        @property { string } [itemType]
        
        @property { string } [description]
        
        @property { ProductBrand } [brand]
        
        @property { number } [uid]
        
        @property { string } [type]
        
        @property { number } [ratingCount]
        
        @property { Array<ProductDetailGroupedAttribute> } [groupedAttributes]
        
        @property { string } [imageNature]
        
        @property { Array<string> } [tryouts]
        
        @property { Array<string> } [similars]
        
        @property { boolean } [hasVariant]
        
        @property { string } [teaserTag]
        
        @property { string } [color]
        
        @property { string } slug
        
        @property { Array<string> } [highlights]
        
        @property { number } [rating]
        
        @property { string } [productOnlineDate]
        
        @property { string } [shortDescription]
        
         
    */

/**
        @typedef ErrorResponse
        
        
        @property { string } [error]
        
         
    */

/**
        @typedef Price
        
        
        @property { string } [currencyCode]
        
        @property { number } [max]
        
        @property { string } [currencySymbol]
        
        @property { number } [min]
        
         
    */

/**
        @typedef ProductListingPrice
        
        
        @property { Price } [marked]
        
        @property { Price } [effective]
        
         
    */

/**
        @typedef ProductSizeStores
        
        
        @property { number } [count]
        
         
    */

/**
        @typedef ProductSize
        
        
        @property { number } [quantity]
        
        @property { boolean } [isAvailable]
        
        @property { string } [value]
        
        @property { string } [display]
        
         
    */

/**
        @typedef ProductSizes
        
        
        @property { string } [discount]
        
        @property { Object } [sizeChart]
        
        @property { boolean } [sellable]
        
        @property { ProductListingPrice } [price]
        
        @property { ProductSizeStores } [stores]
        
        @property { Array<ProductSize> } [sizes]
        
         
    */

/**
        @typedef Store
        
        
        @property { number } [count]
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef Seller
        
        
        @property { number } [count]
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef ProductStockPrice
        
        
        @property { string } [currency]
        
        @property { number } [marked]
        
        @property { number } [effective]
        
         
    */

/**
        @typedef ArticleAssignment
        
        
        @property { string } [level]
        
        @property { string } [strategy]
        
         
    */

/**
        @typedef ProductSizePriceResponse
        
        
        @property { string } [discount]
        
        @property { Store } [store]
        
        @property { number } [sellerCount]
        
        @property { string } [articleId]
        
        @property { Object } [set]
        
        @property { Seller } [seller]
        
        @property { string } [specialBadge]
        
        @property { ProductStockPrice } [price]
        
        @property { ProductStockPrice } [pricePerPrice]
        
        @property { number } [pincode]
        
        @property { ArticleAssignment } [articleAssignment]
        
        @property { number } [quantity]
        
        @property { Array<number> } [longLat]
        
        @property { string } [itemType]
        
        @property { Array<Object> } [strategyWiseListing]
        
         
    */

/**
        @typedef ProductSizeSellerFilter
        
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Page
        
        
        @property { string } [nextId]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [itemTotal]
        
        @property { number } [size]
        
        @property { string } [type]
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
         
    */

/**
        @typedef ProductSizeSellersResponse
        
        
        @property { Array<ProductSizeSellerFilter> } [sortOn]
        
        @property { Array<ProductSizePriceResponse> } [items]
        
        @property { Page } page
        
         
    */

/**
        @typedef AttributeDetail
        
        
        @property { string } [key]
        
        @property { string } [description]
        
        @property { string } [display]
        
         
    */

/**
        @typedef ProductsComparisonResponse
        
        
        @property { Array<AttributeDetail> } [attributesMetadata]
        
        @property { Array<ProductDetail> } [items]
        
         
    */

/**
        @typedef ProductCompareResponse
        
        
        @property { Array<AttributeDetail> } [attributesMetadata]
        
        @property { string } [title]
        
        @property { Array<ProductDetail> } [items]
        
        @property { string } [subtitle]
        
         
    */

/**
        @typedef ProductFrequentlyComparedSimilarResponse
        
        
        @property { Array<ProductCompareResponse> } [similars]
        
         
    */

/**
        @typedef ProductSimilarItem
        
        
        @property { string } [title]
        
        @property { Array<ProductDetail> } [items]
        
        @property { string } [subtitle]
        
         
    */

/**
        @typedef SimilarProductByTypeResponse
        
        
        @property { Array<ProductSimilarItem> } [similars]
        
         
    */

/**
        @typedef ProductVariantItemResponse
        
        
        @property { string } [slug]
        
        @property { boolean } [isAvailable]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [value]
        
        @property { Array<Media> } [medias]
        
        @property { string } [colorName]
        
        @property { string } [color]
        
        @property { ProductListingAction } [action]
        
         
    */

/**
        @typedef ProductVariantResponse
        
        
        @property { Array<ProductVariantItemResponse> } [items]
        
        @property { string } [header]
        
        @property { string } [displayType]
        
         
    */

/**
        @typedef ProductVariantsResponse
        
        
        @property { Array<ProductVariantResponse> } [variants]
        
         
    */

/**
        @typedef StoreDetail
        
        
        @property { string } [name]
        
        @property { number } [id]
        
        @property { string } [code]
        
        @property { string } [city]
        
         
    */

/**
        @typedef CompanyDetail
        
        
        @property { string } [name]
        
        @property { number } [id]
        
         
    */

/**
        @typedef ProductStockStatusItem
        
        
        @property { StoreDetail } [store]
        
        @property { string } [uid]
        
        @property { Seller } [seller]
        
        @property { CompanyDetail } [company]
        
        @property { ProductStockPrice } [price]
        
        @property { string } [size]
        
        @property { Object } [identifier]
        
        @property { number } [itemId]
        
        @property { number } [quantity]
        
         
    */

/**
        @typedef ProductStockStatusResponse
        
        
        @property { Array<ProductStockStatusItem> } [items]
        
         
    */

/**
        @typedef ProductStockPolling
        
        
        @property { Array<ProductStockStatusItem> } [items]
        
        @property { Page } page
        
         
    */

/**
        @typedef ProductFiltersKey
        
        
        @property { string } [logo]
        
        @property { string } name
        
        @property { string } [kind]
        
        @property { string } display
        
         
    */

/**
        @typedef ProductFiltersValue
        
        
        @property { number } [selectedMax]
        
        @property { string } display
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [selectedMin]
        
        @property { number } [max]
        
        @property { string } value
        
        @property { boolean } isSelected
        
        @property { string } [displayFormat]
        
        @property { number } [count]
        
        @property { string } [queryFormat]
        
        @property { number } [min]
        
         
    */

/**
        @typedef ProductFilters
        
        
        @property { ProductFiltersKey } key
        
        @property { Array<ProductFiltersValue> } values
        
         
    */

/**
        @typedef ProductSortOn
        
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef ProductListingDetail
        
        
        @property { string } [discount]
        
        @property { string } [name]
        
        @property { Array<Media> } [medias]
        
        @property { Array<ProductBrand> } [categories]
        
        @property { Object } [attributes]
        
        @property { string } [itemType]
        
        @property { string } [description]
        
        @property { ProductBrand } [brand]
        
        @property { number } [uid]
        
        @property { string } [type]
        
        @property { number } [ratingCount]
        
        @property { Array<ProductDetailGroupedAttribute> } [groupedAttributes]
        
        @property { string } [imageNature]
        
        @property { boolean } [sellable]
        
        @property { Array<string> } [tryouts]
        
        @property { Array<string> } [similars]
        
        @property { boolean } [hasVariant]
        
        @property { string } [teaserTag]
        
        @property { string } [color]
        
        @property { string } slug
        
        @property { Array<string> } [highlights]
        
        @property { ProductListingPrice } [price]
        
        @property { number } [rating]
        
        @property { string } [productOnlineDate]
        
        @property { string } [shortDescription]
        
         
    */

/**
        @typedef ProductListingResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Page } page
        
         
    */

/**
        @typedef ImageUrls
        
        
        @property { Media } [landscape]
        
        @property { Media } [portrait]
        
         
    */

/**
        @typedef BrandItem
        
        
        @property { string } [discount]
        
        @property { string } [slug]
        
        @property { number } [uid]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { Media } [logo]
        
        @property { Array<string> } [departments]
        
        @property { ProductListingAction } [action]
        
         
    */

/**
        @typedef BrandListingResponse
        
        
        @property { Array<BrandItem> } [items]
        
        @property { Page } page
        
         
    */

/**
        @typedef BrandDetailResponse
        
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { Media } [logo]
        
         
    */

/**
        @typedef DepartmentIdentifier
        
        
        @property { string } [slug]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef CategoryItems
        
        
        @property { string } [slug]
        
        @property { Array<Object> } [childs]
        
        @property { number } [uid]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { ProductListingAction } [action]
        
         
    */

/**
        @typedef DepartmentCategoryTree
        
        
        @property { string } [department]
        
        @property { Array<CategoryItems> } [items]
        
         
    */

/**
        @typedef CategoryListingResponse
        
        
        @property { Array<DepartmentIdentifier> } [departments]
        
        @property { Array<DepartmentCategoryTree> } [data]
        
         
    */

/**
        @typedef CategoryMetaResponse
        
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { Media } [logo]
        
         
    */

/**
        @typedef HomeListingResponse
        
        
        @property { string } [message]
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Page } page
        
         
    */

/**
        @typedef Department
        
        
        @property { string } [slug]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { number } [priorityOrder]
        
        @property { Media } [logo]
        
         
    */

/**
        @typedef DepartmentResponse
        
        
        @property { Array<Department> } [items]
        
         
    */

/**
        @typedef Query
        
        
        @property { Array<string> } [category]
        
        @property { Array<string> } [brand]
        
         
    */

/**
        @typedef AutocompletePage
        
        
        @property { Query } [query]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Action
        
        
        @property { string } [type]
        
        @property { AutocompletePage } [page]
        
         
    */

/**
        @typedef AutocompleteItem
        
        
        @property { string } [display]
        
        @property { Media } [logo]
        
        @property { string } [type]
        
        @property { Action } [action]
        
         
    */

/**
        @typedef AutoCompleteResponse
        
        
        @property { Array<AutocompleteItem> } [items]
        
         
    */

/**
        @typedef CollectionListingFilterType
        
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
        @property { string } [display]
        
         
    */

/**
        @typedef CollectionListingFilterTag
        
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
        @property { string } [display]
        
         
    */

/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterType> } [type]
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
         
    */

/**
        @typedef GetCollectionDetailNest
        
        
        @property { Array<string> } [tag]
        
        @property { string } [appId]
        
        @property { string } [name]
        
        @property { Object } [schedule]
        
        @property { Object } [cron]
        
        @property { string } [description]
        
        @property { string } [uid]
        
        @property { Object } [query]
        
        @property { string } [type]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [meta]
        
        @property { boolean } [isActive]
        
        @property { Object } [badge]
        
        @property { boolean } [allowSort]
        
        @property { ProductListingAction } [action]
        
        @property { string } [slug]
        
        @property { boolean } [allowFacets]
        
        @property { ImageUrls } [banners]
        
        @property { Media } [logo]
        
         
    */

/**
        @typedef GetCollectionListingResponse
        
        
        @property { CollectionListingFilter } [filters]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { Page } page
        
         
    */

/**
        @typedef CollectionDetailResponse
        
        
        @property { string } [slug]
        
        @property { Object } [badge]
        
        @property { Array<string> } [tag]
        
        @property { boolean } [allowFacets]
        
        @property { Media } [logo]
        
        @property { Object } [query]
        
        @property { ImageUrls } [banners]
        
        @property { string } [type]
        
        @property { string } [appId]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { boolean } [allowSort]
        
        @property { string } [name]
        
        @property { Object } [meta]
        
        @property { Object } [schedule]
        
        @property { Object } [cron]
        
        @property { string } [description]
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef GetFollowListingResponse
        
        
        @property { Array<Object> } items
        
        @property { Page } page
        
         
    */

/**
        @typedef FollowPostResponse
        
        
        @property { string } message
        
        @property { string } id
        
         
    */

/**
        @typedef FollowerCountResponse
        
        
        @property { number } [count]
        
         
    */

/**
        @typedef FollowIdsData
        
        
        @property { Array<number> } [collections]
        
        @property { Array<number> } [brands]
        
        @property { Array<number> } [products]
        
         
    */

/**
        @typedef FollowIdsResponse
        
        
        @property { FollowIdsData } [data]
        
         
    */

/**
        @typedef LatLong
        
        
        @property { string } [type]
        
        @property { Array<number> } [coordinates]
        
         
    */

/**
        @typedef Store1
        
        
        @property { string } [storeCode]
        
        @property { number } [uid]
        
        @property { string } [city]
        
        @property { LatLong } [latLong]
        
        @property { string } [storeEmail]
        
        @property { string } [address]
        
        @property { number } [pincode]
        
        @property { string } [name]
        
        @property { string } [country]
        
        @property { string } [state]
        
         
    */

/**
        @typedef StoreListingResponse
        
        
        @property { Array<Store1> } items
        
        @property { Page } page
        
         
    */

/**
        @typedef CartProductIdentifer
        
        
        @property { string } [identifier]
        
         
    */

/**
        @typedef ProductPrice
        
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [effective]
        
        @property { number } [marked]
        
        @property { number } [selling]
        
        @property { number } [addOn]
        
         
    */

/**
        @typedef ProductPriceInfo
        
        
        @property { ProductPrice } [converted]
        
        @property { ProductPrice } [base]
        
         
    */

/**
        @typedef ProductAvailability
        
        
        @property { boolean } [deliverable]
        
        @property { Array<string> } [sizes]
        
        @property { boolean } [isValid]
        
        @property { boolean } [outOfStock]
        
        @property { number } [otherStoreQuantity]
        
         
    */

/**
        @typedef BaseInfo
        
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef BasePrice
        
        
        @property { number } [effective]
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [marked]
        
         
    */

/**
        @typedef ArticlePriceInfo
        
        
        @property { BasePrice } [converted]
        
        @property { BasePrice } [base]
        
         
    */

/**
        @typedef ProductArticle
        
        
        @property { string } [type]
        
        @property { BaseInfo } [store]
        
        @property { string } [uid]
        
        @property { ArticlePriceInfo } [price]
        
        @property { string } [size]
        
        @property { number } [quantity]
        
        @property { BaseInfo } [seller]
        
         
    */

/**
        @typedef ActionQuery
        
        
        @property { Array<string> } [productSlug]
        
         
    */

/**
        @typedef ProductAction
        
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { ActionQuery } [query]
        
         
    */

/**
        @typedef Image
        
        
        @property { string } [url]
        
        @property { string } [secureUrl]
        
        @property { string } [aspectRatio]
        
         
    */

/**
        @typedef CategoryInfo
        
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef Product
        
        
        @property { string } [type]
        
        @property { string } [slug]
        
        @property { number } [uid]
        
        @property { ProductAction } [action]
        
        @property { BaseInfo } [brand]
        
        @property { string } [name]
        
        @property { Array<Image> } [images]
        
        @property { Array<CategoryInfo> } [categories]
        
         
    */

/**
        @typedef CartProductInfo
        
        
        @property { string } [message]
        
        @property { CartProductIdentifer } identifiers
        
        @property { ProductPriceInfo } [price]
        
        @property { string } [couponMessage]
        
        @property { Object } [bulkOffer]
        
        @property { ProductAvailability } [availability]
        
        @property { number } [quantity]
        
        @property { string } [discount]
        
        @property { boolean } [isSet]
        
        @property { ProductArticle } [article]
        
        @property { string } [key]
        
        @property { Product } [product]
        
         
    */

/**
        @typedef CouponBreakup
        
        
        @property { string } [type]
        
        @property { string } [message]
        
        @property { number } [uid]
        
        @property { number } [value]
        
        @property { string } [code]
        
        @property { boolean } [isApplied]
        
         
    */

/**
        @typedef LoyaltyPoints
        
        
        @property { boolean } [isApplied]
        
        @property { number } [total]
        
        @property { number } [applicable]
        
        @property { string } [description]
        
         
    */

/**
        @typedef DisplayBreakup
        
        
        @property { Array<string> } [message]
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [value]
        
        @property { string } [display]
        
        @property { string } [key]
        
         
    */

/**
        @typedef RawBreakup
        
        
        @property { number } [subtotal]
        
        @property { number } [coupon]
        
        @property { number } [codCharge]
        
        @property { number } [fyndCash]
        
        @property { number } [youSaved]
        
        @property { number } [deliveryCharge]
        
        @property { number } [total]
        
         
    */

/**
        @typedef CartBreakup
        
        
        @property { CouponBreakup } [coupon]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { Array<DisplayBreakup> } [display]
        
        @property { RawBreakup } [raw]
        
         
    */

/**
        @typedef PromiseFormatted
        
        
        @property { string } [max]
        
        @property { string } [min]
        
         
    */

/**
        @typedef PromiseTimestamp
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */

/**
        @typedef ShipmentPromise
        
        
        @property { PromiseFormatted } [formatted]
        
        @property { PromiseTimestamp } [timestamp]
        
         
    */

/**
        @typedef CartCurrency
        
        
        @property { string } [code]
        
        @property { string } [symbol]
        
         
    */

/**
        @typedef CartResponse
        
        
        @property { Array<CartProductInfo> } [items]
        
        @property { string } [checkoutMode]
        
        @property { string } [message]
        
        @property { string } [uid]
        
        @property { string } [lastModified]
        
        @property { CartBreakup } [breakupValues]
        
        @property { boolean } [restrictCheckout]
        
        @property { string } [comment]
        
        @property { string } [deliveryChargeInfo]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { string } [couponText]
        
        @property { boolean } [isValid]
        
        @property { string } [gstin]
        
        @property { number } [cartId]
        
        @property { CartCurrency } [currency]
        
         
    */

/**
        @typedef AddProductCart
        
        
        @property { number } [sellerId]
        
        @property { number } [itemId]
        
        @property { number } [quantity]
        
        @property { number } [storeId]
        
        @property { string } [display]
        
        @property { string } [articleId]
        
        @property { Object } [articleAssignment]
        
        @property { string } [itemSize]
        
        @property { boolean } [pos]
        
         
    */

/**
        @typedef AddCartRequest
        
        
        @property { Array<AddProductCart> } [items]
        
         
    */

/**
        @typedef AddCartResponse
        
        
        @property { boolean } [success]
        
        @property { CartResponse } [cart]
        
        @property { boolean } [partial]
        
        @property { string } [message]
        
         
    */

/**
        @typedef UpdateProductCart
        
        
        @property { number } [itemIndex]
        
        @property { number } [itemId]
        
        @property { number } [quantity]
        
        @property { string } [articleId]
        
        @property { CartProductIdentifer } identifiers
        
        @property { string } [itemSize]
        
         
    */

/**
        @typedef UpdateCartRequest
        
        
        @property { Array<UpdateProductCart> } [items]
        
        @property { string } operation
        
         
    */

/**
        @typedef UpdateCartResponse
        
        
        @property { boolean } [success]
        
        @property { CartResponse } [cart]
        
        @property { string } [message]
        
         
    */

/**
        @typedef CartItemCountResponse
        
        
        @property { number } [userCartItemsCount]
        
         
    */

/**
        @typedef PageCoupon
        
        
        @property { number } [totalItemCount]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [total]
        
        @property { number } [current]
        
         
    */

/**
        @typedef Coupon
        
        
        @property { string } [message]
        
        @property { boolean } [isApplicable]
        
        @property { number } [minimumCartValue]
        
        @property { string } [subTitle]
        
        @property { number } [maxDiscountValue]
        
        @property { string } [couponCode]
        
        @property { string } [title]
        
        @property { string } [expiresOn]
        
        @property { boolean } [isApplied]
        
        @property { number } [couponValue]
        
         
    */

/**
        @typedef GetCouponResponse
        
        
        @property { PageCoupon } [page]
        
        @property { Array<Coupon> } [availableCouponList]
        
         
    */

/**
        @typedef ApplyCouponRequest
        
        
        @property { string } couponCode
        
         
    */

/**
        @typedef OfferPrice
        
        
        @property { number } [bulkEffective]
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [effective]
        
        @property { number } [marked]
        
         
    */

/**
        @typedef OfferItem
        
        
        @property { string } [type]
        
        @property { boolean } [autoApplied]
        
        @property { number } [margin]
        
        @property { OfferPrice } [price]
        
        @property { number } [quantity]
        
        @property { boolean } [best]
        
        @property { number } [total]
        
         
    */

/**
        @typedef OfferSeller
        
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef BulkPriceOffer
        
        
        @property { Array<OfferItem> } [offers]
        
        @property { OfferSeller } [seller]
        
         
    */

/**
        @typedef BulkPriceResponse
        
        
        @property { Array<BulkPriceOffer> } [data]
        
         
    */

/**
        @typedef GeoLocation
        
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
         
    */

/**
        @typedef Address
        
        
        @property { string } [addressType]
        
        @property { string } [areaCode]
        
        @property { string } [userId]
        
        @property { string } [country]
        
        @property { number } [uid]
        
        @property { boolean } [isDefaultAddress]
        
        @property { boolean } [isActive]
        
        @property { string } [landmark]
        
        @property { string } [phone]
        
        @property { string } [state]
        
        @property { string } [name]
        
        @property { string } [address]
        
        @property { string } [area]
        
        @property { string } [email]
        
        @property { Array<Object> } [tags]
        
        @property { string } [checkoutMode]
        
        @property { GeoLocation } [geoLocation]
        
        @property { string } [areaCodeSlug]
        
        @property { string } [city]
        
        @property { Object } [meta]
        
        @property { number } [addressId]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef GetAddressesResponse
        
        
        @property { Array<Address> } [address]
        
         
    */

/**
        @typedef SaveAddressResponse
        
        
        @property { string } [success]
        
        @property { number } [addressId]
        
        @property { boolean } [isDefaultAddress]
        
         
    */

/**
        @typedef UpdateAddressResponse
        
        
        @property { boolean } [success]
        
        @property { number } [addressId]
        
        @property { boolean } [isDefaultAddress]
        
        @property { boolean } [isUpdated]
        
         
    */

/**
        @typedef DeleteAddressResponse
        
        
        @property { number } [addressId]
        
        @property { boolean } [isDeleted]
        
         
    */

/**
        @typedef SelectCartAddressRequest
        
        
        @property { string } [addressId]
        
        @property { string } [uid]
        
        @property { number } [billingAddressId]
        
         
    */

/**
        @typedef UpdateCartPaymentRequest
        
        
        @property { string } [aggregatorName]
        
        @property { number } [uid]
        
        @property { string } [paymentIdentifier]
        
        @property { number } [addressId]
        
        @property { string } [paymentMode]
        
        @property { string } [merchantCode]
        
         
    */

/**
        @typedef CouponValidity
        
        
        @property { string } [displayMessageEn]
        
        @property { string } [code]
        
        @property { number } [discount]
        
        @property { boolean } [valid]
        
         
    */

/**
        @typedef PaymentUpdate
        
        
        @property { boolean } success
        
        @property { string } [message]
        
        @property { CouponValidity } [couponValidity]
        
         
    */

/**
        @typedef ShipmentResponse
        
        
        @property { Array<CartProductInfo> } [items]
        
        @property { number } [dpId]
        
        @property { string } [fulfillmentType]
        
        @property { number } [fulfillmentId]
        
        @property { string } [orderType]
        
        @property { string } [boxType]
        
        @property { number } [shipments]
        
        @property { string } [shipmentType]
        
        @property { ShipmentPromise } [promise]
        
        @property { Object } [dpOptions]
        
         
    */

/**
        @typedef CartShipmentsResponse
        
        
        @property { string } [checkoutMode]
        
        @property { string } [message]
        
        @property { string } [uid]
        
        @property { string } [lastModified]
        
        @property { CartBreakup } [breakupValues]
        
        @property { boolean } [restrictCheckout]
        
        @property { string } [comment]
        
        @property { Array<ShipmentResponse> } [shipments]
        
        @property { string } [deliveryChargeInfo]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { string } [couponText]
        
        @property { boolean } [isValid]
        
        @property { string } [gstin]
        
        @property { number } [cartId]
        
        @property { CartCurrency } [currency]
        
         
    */

/**
        @typedef CartCheckoutRequest
        
        
        @property { Object } [paymentParams]
        
        @property { string } [callbackUrl]
        
        @property { number } [billingAddressId]
        
        @property { string } [fyndstoreEmpId]
        
        @property { string } [paymentIdentifier]
        
        @property { boolean } [paymentAutoConfirm]
        
        @property { Object } [meta]
        
        @property { string } [aggregator]
        
        @property { Object } [extraMeta]
        
        @property { number } [addressId]
        
        @property { string } paymentMode
        
        @property { number } [orderingStore]
        
        @property { Object } [staff]
        
        @property { Object } [billingAddress]
        
        @property { Object } [deliveryAddress]
        
        @property { string } [merchantCode]
        
         
    */

/**
        @typedef CheckCart
        
        
        @property { Array<CartProductInfo> } [items]
        
        @property { string } [codMessage]
        
        @property { string } [message]
        
        @property { boolean } [success]
        
        @property { string } [orderId]
        
        @property { boolean } [restrictCheckout]
        
        @property { number } [deliveryCharges]
        
        @property { string } [comment]
        
        @property { number } [codCharges]
        
        @property { string } [uid]
        
        @property { CartBreakup } [breakupValues]
        
        @property { boolean } [codAvailable]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { string } [gstin]
        
        @property { string } [storeCode]
        
        @property { string } [lastModified]
        
        @property { string } [errorMessage]
        
        @property { number } [deliveryChargeOrderValue]
        
        @property { Array<Object> } [storeEmps]
        
        @property { string } [couponText]
        
        @property { number } [cartId]
        
        @property { CartCurrency } [currency]
        
        @property { string } [checkoutMode]
        
        @property { string } [userType]
        
        @property { string } [deliveryChargeInfo]
        
        @property { boolean } [isValid]
        
         
    */

/**
        @typedef CartCheckoutResponse
        
        
        @property { string } [callbackUrl]
        
        @property { string } [message]
        
        @property { boolean } [success]
        
        @property { Object } [data]
        
        @property { string } [orderId]
        
        @property { string } [appInterceptUrl]
        
        @property { CheckCart } [cart]
        
         
    */

/**
        @typedef CartMetaRequest
        
        
        @property { string } [gstin]
        
        @property { string } [checkoutMode]
        
        @property { Object } [pickUpCustomerDetails]
        
        @property { string } [comment]
        
         
    */

/**
        @typedef CartMetaResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef CartMetaMissingResponse
        
        
        @property { Array<string> } [errors]
        
         
    */

/**
        @typedef GetShareCartLinkRequest
        
        
        @property { Object } [meta]
        
        @property { number } uid
        
         
    */

/**
        @typedef GetShareCartLinkResponse
        
        
        @property { string } [token]
        
        @property { string } [shareUrl]
        
         
    */

/**
        @typedef SharedCartDetails
        
        
        @property { Object } [user]
        
        @property { string } [token]
        
        @property { Object } [meta]
        
        @property { string } [createdOn]
        
        @property { Object } [source]
        
         
    */

/**
        @typedef SharedCart
        
        
        @property { Array<CartProductInfo> } [items]
        
        @property { string } [checkoutMode]
        
        @property { string } [message]
        
        @property { string } [uid]
        
        @property { string } [lastModified]
        
        @property { CartBreakup } [breakupValues]
        
        @property { boolean } [restrictCheckout]
        
        @property { string } [comment]
        
        @property { string } [deliveryChargeInfo]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { string } [couponText]
        
        @property { boolean } [isValid]
        
        @property { string } [gstin]
        
        @property { number } [cartId]
        
        @property { CartCurrency } [currency]
        
        @property { SharedCartDetails } [sharedCartDetails]
        
         
    */

/**
        @typedef SharedCartResponse
        
        
        @property { SharedCart } [cart]
        
        @property { string } [error]
        
         
    */

/**
        @typedef TicketList
        
        
        @property { Array<Ticket> } [items]
        
        @property { Filter } [filters]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef TicketHistoryList
        
        
        @property { Array<TicketHistory> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */

/**
        @typedef CustomFormList
        
        
        @property { Array<CustomForm> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */

/**
        @typedef CreateCustomFormPayload
        
        
        @property { string } slug
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [headerImage]
        
        @property { boolean } [shouldNotify]
        
        @property { string } [successMessage]
        
        @property { PollForAssignment } [pollForAssignment]
        
         
    */

/**
        @typedef EditCustomFormPayload
        
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [headerImage]
        
        @property { boolean } [shouldNotify]
        
        @property { boolean } [loginRequired]
        
        @property { string } [successMessage]
        
        @property { PollForAssignment } [pollForAssignment]
        
         
    */

/**
        @typedef EditTicketPayload
        
        
        @property { TicketContent } [content]
        
        @property { string } [category]
        
        @property { string } [source]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { AgentChangePayload } [assignedTo]
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef AgentChangePayload
        
        
        @property { string } agentId
        
         
    */

/**
        @typedef CreateVideoRoomResponse
        
        
        @property { string } uniqueName
        
         
    */

/**
        @typedef CloseVideoRoomResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef CreateVideoRoomPayload
        
        
        @property { string } uniqueName
        
        @property { Array<Object> } [notify]
        
         
    */

/**
        @typedef Filter
        
        
        @property { Priority } priorities
        
        @property { Category } [categories]
        
        @property { Status } statuses
        
        @property { Array<Object> } assignees
        
         
    */

/**
        @typedef TicketHistoryPayload
        
        
        @property { Object } value
        
        @property { string } type
        
         
    */

/**
        @typedef CustomFormSubmissionPayload
        
        
        @property { Array<KeyValue> } response
        
         
    */

/**
        @typedef KeyValue
        
        
        @property { string } key
        
        @property { string } value
        
         
    */

/**
        @typedef GetTokenForVideoRoomResponse
        
        
        @property { string } accessToken
        
         
    */

/**
        @typedef GetParticipantsInsideVideoRoomResponse
        
        
        @property { Array<Participant> } participants
        
         
    */

/**
        @typedef Participant
        
        
        @property { UserSchema } [user]
        
        @property { string } [identity]
        
        @property { string } [status]
        
         
    */

/**
        @typedef UserSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { Array<Object> } [phoneNumbers]
        
        @property { Array<Object> } [emails]
        
        @property { string } [gender]
        
        @property { boolean } [active]
        
        @property { string } [profilePicUrl]
        
        @property { string } [username]
        
        @property { string } [accountType]
        
        @property { string } [uid]
        
        @property { Object } [debug]
        
        @property { boolean } [hasOldPasswordHash]
        
        @property { string } [id]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef SubmitCustomFormResponse
        
        
        @property { Ticket } ticket
        
         
    */

/**
        @typedef TicketContext
        
        
        @property { string } [applicationId]
        
        @property { string } companyId
        
         
    */

/**
        @typedef CreatedOn
        
        
        @property { string } userAgent
        
         
    */

/**
        @typedef TicketAsset
        
        
        @property { string } [display]
        
        @property { string } value
        
        @property { string } type
        
         
    */

/**
        @typedef TicketContent
        
        
        @property { string } title
        
        @property { string } [description]
        
        @property { Array<TicketAsset> } [attachments]
        
         
    */

/**
        @typedef AddTicketPayload
        
        
        @property { string } status
        
        @property { string } priority
        
        @property { string } category
        
        @property { TicketContent } content
        
         
    */

/**
        @typedef Priority
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */

/**
        @typedef Status
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */

/**
        @typedef Category
        
        
        @property { string } key
        
        @property { string } display
        
        @property { CustomForm } [form]
        
         
    */

/**
        @typedef SubmitButton
        
        
        @property { string } title
        
        @property { string } titleColor
        
        @property { string } backgroundColor
        
         
    */

/**
        @typedef PollForAssignment
        
        
        @property { number } duration
        
        @property { string } message
        
        @property { string } successMessage
        
        @property { string } failureMessage
        
         
    */

/**
        @typedef CustomForm
        
        
        @property { string } applicationId
        
        @property { string } slug
        
        @property { string } [headerImage]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { boolean } loginRequired
        
        @property { boolean } shouldNotify
        
        @property { string } [successMessage]
        
        @property { SubmitButton } [submitButton]
        
        @property { Array<Object> } inputs
        
        @property { CreatedOn } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { PollForAssignment } [pollForAssignment]
        
        @property { string } id
        
         
    */

/**
        @typedef TicketHistory
        
        
        @property { string } type
        
        @property { Object } value
        
        @property { string } ticketId
        
        @property { CreatedOn } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { string } id
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */

/**
        @typedef Ticket
        
        
        @property { TicketContext } [context]
        
        @property { CreatedOn } [createdOn]
        
        @property { string } [responseId]
        
        @property { TicketContent } [content]
        
        @property { string } ticketId
        
        @property { Category } category
        
        @property { string } source
        
        @property { Status } status
        
        @property { Priority } priority
        
        @property { Object } [createdBy]
        
        @property { Object } [assignedTo]
        
        @property { Array<string> } [tags]
        
        @property { Object } [customJson]
        
        @property { string } [id]
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */

/**
        @typedef PaginationSchema
        
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { string } [type]
        
        @property { number } [current]
        
         
    */

/**
        @typedef ThemesListingResponseSchema
        
        
        @property { Array<ThemesSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */

/**
        @typedef AddThemeRequestSchema
        
        
        @property { string } [themeId]
        
         
    */

/**
        @typedef UpgradableThemeSchema
        
        
        @property { string } [parentTheme]
        
        @property { string } [appliedTheme]
        
        @property { boolean } [upgrade]
        
         
    */

/**
        @typedef FontsSchema
        
        
        @property { Array<Object> } [items]
        
        @property { string } [kind]
        
         
    */

/**
        @typedef ThemesSchema
        
        
        @property { string } [application]
        
        @property { boolean } [applied]
        
        @property { boolean } [customized]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [version]
        
        @property { string } [parentThemeVersion]
        
        @property { string } [parentTheme]
        
        @property { Object } [information]
        
        @property { Array<string> } [tags]
        
        @property { Object } [src]
        
        @property { Object } [assets]
        
        @property { Array<Object> } [availablePages]
        
        @property { Object } [pages]
        
        @property { Array<availableSectionSchema> } [availableSections]
        
        @property { Array<sectionSchema> } [sections]
        
        @property { Object } [constants]
        
        @property { Object } [styles]
        
        @property { Object } [config]
        
        @property { Object } [settings]
        
        @property { Object } [font]
        
        @property { string } [id]
        
        @property { number } [v]
        
        @property { Object } [colors]
        
         
    */

/**
        @typedef pagesSchema
        
        
        @property { string } [text]
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { Array<Object> } [sections]
        
         
    */

/**
        @typedef availableSectionSchema
        
        
        @property { Array<Object> } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Array<Object> } [props]
        
         
    */

/**
        @typedef sectionSchema
        
        
        @property { string } [pageKey]
        
        @property { Array<Object> } [pageSections]
        
         
    */

/**
        @typedef EditEmailRequestSchema
        
        
        @property { string } [email]
        
         
    */

/**
        @typedef SendVerificationLinkMobileRequestSchema
        
        
        @property { boolean } [verified]
        
        @property { boolean } [active]
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
        @property { boolean } [primary]
        
         
    */

/**
        @typedef EditMobileRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef EditProfileRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [mobile]
        
        @property { string } [email]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { string } [profilePicUrl]
        
        @property { string } [androidHash]
        
        @property { string } [sender]
        
        @property { string } [registerToken]
        
         
    */

/**
        @typedef SendEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [registerToken]
        
         
    */

/**
        @typedef VerifyOtpRequestSchema
        
        
        @property { string } [requestId]
        
        @property { string } [registerToken]
        
        @property { string } [otp]
        
         
    */

/**
        @typedef SendMobileOtpRequestSchema
        
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [androidHash]
        
        @property { string } [force]
        
         
    */

/**
        @typedef UpdatePasswordRequestSchema
        
        
        @property { string } [oldPassword]
        
        @property { string } [newPassword]
        
         
    */

/**
        @typedef FormRegisterRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [password]
        
        @property { Object } [phone]
        
        @property { string } [registerToken]
        
         
    */

/**
        @typedef TokenRequestBodySchema
        
        
        @property { string } [token]
        
         
    */

/**
        @typedef ForgotPasswordRequestSchema
        
        
        @property { string } [code]
        
        @property { string } [password]
        
         
    */

/**
        @typedef CodeRequestBodySchema
        
        
        @property { string } [code]
        
         
    */

/**
        @typedef SendResetPasswordEmailRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [gRecaptchaResponse]
        
         
    */

/**
        @typedef PasswordLoginRequestSchema
        
        
        @property { string } [gRecaptchaResponse]
        
        @property { string } [password]
        
        @property { string } [username]
        
         
    */

/**
        @typedef SendOtpRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [gRecaptchaResponse]
        
        @property { string } [mobile]
        
         
    */

/**
        @typedef OAuthRequestSchema
        
        
        @property { boolean } [isSignedIn]
        
        @property { Object } [oauth2]
        
        @property { Object } [profile]
        
         
    */

/**
        @typedef AuthSuccess
        
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
        @property { Object } [user]
        
         
    */

/**
        @typedef SendOtpResponse
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef LoginSuccess
        
        
        @property { UserSchema } [user]
        
         
    */

/**
        @typedef VerifyOtpSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [userExists]
        
         
    */

/**
        @typedef ResetPasswordSuccess
        
        
        @property { string } [status]
        
         
    */

/**
        @typedef RegisterFormSuccess
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef VerifyEmailSuccess
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef HasPasswordSuccess
        
        
        @property { boolean } [result]
        
         
    */

/**
        @typedef LogoutSuccess
        
        
        @property { boolean } [logout]
        
         
    */

/**
        @typedef OtpSuccess
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef EmailOtpSuccess
        
        
        @property { string } [resendToken]
        
         
    */

/**
        @typedef SessionListSuccess
        
        
        @property { Array<string> } [sessions]
        
         
    */

/**
        @typedef VerifyMobileOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyMobileLink]
        
         
    */

/**
        @typedef VerifyEmailOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyEmailLink]
        
         
    */

/**
        @typedef SendMobileVerifyLinkSuccess
        
        
        @property { boolean } [verifyMobileLink]
        
         
    */

/**
        @typedef SendEmailVerifyLinkSuccess
        
        
        @property { boolean } [verifyEmailLink]
        
         
    */

/**
        @typedef UserSearchResponseSchema
        
        
        @property { Array<UserSchema> } [users]
        
         
    */

/**
        @typedef CustomerListResponseSchema
        
        
        @property { Array<UserSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */

/**
        @typedef PlatformSchema
        
        
        @property { string } [display]
        
        @property { Object } [lookAndFeel]
        
        @property { string } [updatedAt]
        
        @property { boolean } [active]
        
        @property { boolean } [forgotPassword]
        
        @property { Object } [login]
        
        @property { boolean } [skipCaptcha]
        
        @property { string } [name]
        
        @property { Object } [meta]
        
        @property { string } [id]
        
        @property { Object } [social]
        
        @property { Object } [requiredFields]
        
        @property { Object } [registerRequiredFields]
        
        @property { boolean } [skipLogin]
        
        @property { Object } [flashCard]
        
        @property { string } [subtext]
        
        @property { Object } [socialTokens]
        
        @property { string } [createdAt]
        
        @property { boolean } [register]
        
         
    */

/**
        @typedef ApplicationLegal
        
        
        @property { string } [application]
        
        @property { string } [tnc]
        
        @property { string } [policy]
        
        @property { Array<Object> } [faq]
        
        @property { string } [id]
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef Seo
        
        
        @property { string } app
        
        @property { string } [robotsTxt]
        
        @property { boolean } [sitemapEnabled]
        
        @property { Array<any> } [customMetaTags]
        
        @property { Object } [details]
        
         
    */

/**
        @typedef StorefrontAnnouncement
        
        
        @property { Object } [announcements]
        
        @property { number } [refreshRate]
        
        @property { Array<string> } [refreshPages]
        
         
    */

/**
        @typedef AdminAnnouncementSchema
        
        
        @property { string } [id]
        
        @property { Array<string> } [platform]
        
        @property { string } [title]
        
        @property { string } [announcement]
        
        @property { Array<Object> } [pages]
        
        @property { Object } [editorMeta]
        
        @property { Object } [author]
        
        @property { string } [createdAt]
        
        @property { string } [app]
        
        @property { string } [modifiedAt]
        
        @property { Object } [schedule]
        
         
    */

/**
        @typedef ScheduleSchema
        
        
        @property { Object } [schedule]
        
        @property { boolean } [published]
        
         
    */

/**
        @typedef BlogGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef ResourceContent
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Asset
        
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef Author
        
        
        @property { string } [designation]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */

/**
        @typedef BlogSchema
        
        
        @property { Array<any> } [id]
        
        @property { string } [schedule]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { Object } [dateMeta]
        
         
    */

/**
        @typedef BlogRequest
        
        
        @property { string } [schedule]
        
        @property { string } [application]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
         
    */

/**
        @typedef GetAnnouncementListSchema
        
        
        @property { Array<AdminAnnouncementSchema> } [items]
        
         
    */

/**
        @typedef CreateAnnouncementSchema
        
        
        @property { string } [message]
        
        @property { AdminAnnouncementSchema } [data]
        
         
    */

/**
        @typedef FaqSchema
        
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { number } [v]
        
        @property { string } [id]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */

/**
        @typedef CreateFaqResponseSchema
        
        
        @property { Object } [faq]
        
         
    */

/**
        @typedef CreateFaqSchema
        
        
        @property { Object } [faq]
        
         
    */

/**
        @typedef GetFaqSchema
        
        
        @property { Array<Object> } [faqs]
        
         
    */

/**
        @typedef UpdateFaqCategoryRequestSchema
        
        
        @property { Object } [category]
        
         
    */

/**
        @typedef CreateFaqCategoryRequestSchema
        
        
        @property { Object } [category]
        
         
    */

/**
        @typedef CreateFaqCategorySchema
        
        
        @property { Object } [category]
        
         
    */

/**
        @typedef GetFaqCategoriesSchema
        
        
        @property { Array<Object> } [categories]
        
         
    */

/**
        @typedef GetFaqCategoryByIdOrSlugSchema
        
        
        @property { Object } [category]
        
         
    */

/**
        @typedef Navigation
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [orientation]
        
        @property { Object } [createdBy]
        
        @property { Object } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [position]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { NavigationRef } [navigation]
        
         
    */

/**
        @typedef NavigationRef
        
        
        @property { Array<any> } [acl]
        
        @property { Object } [localeLanguage]
        
        @property { string } [image]
        
        @property { string } [type]
        
        @property { Object } [action]
        
        @property { boolean } [active]
        
        @property { string } [display]
        
        @property { number } [sortOrder]
        
        @property { Object } [subNavigation]
        
         
    */

/**
        @typedef LandingPage
        
        
        @property { string } [slug]
        
        @property { Object } [action]
        
        @property { Array<any> } [platform]
        
        @property { Object } [createdBy]
        
        @property { Object } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [application]
        
         
    */

/**
        @typedef Slideshow
        
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { Object } [dateMeta]
        
        @property { string } [application]
        
        @property { string } [name]
        
        @property { string } [platform]
        
        @property { Object } [configuration]
        
        @property { Array<Object> } [media]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef AnnouncementsResponseSchema
        
        
        @property { Array<Object> } [announcements]
        
         
    */

/**
        @typedef FaqResponseSchema
        
        
        @property { Array<Faq> } [faqs]
        
         
    */

/**
        @typedef UpdateHandpickedSchema
        
        
        @property { Object } [tag]
        
         
    */

/**
        @typedef RemoveHandpickedSchema
        
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef TagsSchema
        
        
        @property { string } [id]
        
        @property { Array<Object> } [tags]
        
        @property { string } [application]
        
        @property { number } [v]
        
         
    */

/**
        @typedef CreateTagRequestSchema
        
        
        @property { Array<Object> } [tags]
        
         
    */

/**
        @typedef APIError
        
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [requestId]
        
        @property { string } [stackTrace]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef Faq
        
        
        @property { string } [id]
        
        @property { string } [question]
        
        @property { string } [answer]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { number } [v]
        
         
    */

/**
        @typedef LandingPageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef LandingPageSchema
        
        
        @property { string } [slug]
        
        @property { Object } [action]
        
        @property { Array<string> } [platform]
        
        @property { Object } [createdBy]
        
        @property { Object } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
         
    */

/**
        @typedef LandingPageRequest
        
        
        @property { string } [slug]
        
        @property { Object } [action]
        
        @property { Array<string> } [platform]
        
         
    */

/**
        @typedef DefaultNavigationResponse
        
        
        @property { Array<Object> } [items]
        
         
    */

/**
        @typedef NavigationGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef NavigationSchema
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { Object } [orientation]
        
        @property { Object } [navigation]
        
         
    */

/**
        @typedef NavigationRequest
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { Object } [orientation]
        
        @property { Object } [navigation]
        
         
    */

/**
        @typedef CustomPage
        
        
        @property { Object } [data]
        
         
    */

/**
        @typedef CustomBlog
        
        
        @property { Object } [data]
        
         
    */

/**
        @typedef PageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef PageSpec
        
        
        @property { Array<Object> } [specifications]
        
         
    */

/**
        @typedef PageSpecItem
        
        
        @property { string } [pageType]
        
        @property { string } [displayName]
        
        @property { Array<string> } [params]
        
        @property { Array<string> } [query]
        
         
    */

/**
        @typedef PageSchema
        
        
        @property { Array<any> } [id]
        
        @property { string } [schedule]
        
        @property { Array<any> } [application]
        
        @property { Array<string> } [componentIds]
        
        @property { Array<PageContent> } [content]
        
        @property { Object } [createdBy]
        
        @property { Object } [dateMeta]
        
        @property { string } [description]
        
        @property { Object } [featureImage]
        
        @property { Array<PageMeta> } [pageMeta]
        
        @property { string } [platform]
        
        @property { boolean } [published]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [visibility]
        
         
    */

/**
        @typedef CreatedBy
        
        
        @property { string } [id]
        
         
    */

/**
        @typedef DateMeta
        
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef PageContent
        
        
        @property { string } [type]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef PageMeta
        
        
        @property { string } [key]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef PageRequest
        
        
        @property { string } [schedule]
        
        @property { string } [application]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
         
    */

/**
        @typedef PagePublishRequest
        
        
        @property { boolean } [publish]
        
         
    */

/**
        @typedef PageMetaSchema
        
        
        @property { Array<Object> } [systemPages]
        
        @property { Array<Object> } [customPages]
        
        @property { string } [applicationId]
        
         
    */

/**
        @typedef SlideshowGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef SlideshowSchema
        
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { Object } [dateMeta]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { Object } [configuration]
        
        @property { Array<Object> } [media]
        
        @property { boolean } [active]
        
        @property { boolean } [archived]
        
         
    */

/**
        @typedef SlideshowRequest
        
        
        @property { string } [slug]
        
        @property { string } [platform]
        
        @property { Object } [configuration]
        
        @property { Array<Object> } [media]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef Support
        
        
        @property { boolean } [created]
        
        @property { string } [id]
        
        @property { string } [configType]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { Object } [contact]
        
         
    */

/**
        @typedef CommunicationConsentReq
        
        
        @property { string } [response]
        
        @property { string } [action]
        
        @property { string } [channel]
        
         
    */

/**
        @typedef CommunicationConsentRes
        
        
        @property { string } [appId]
        
        @property { string } [userId]
        
        @property { Object } [channels]
        
         
    */

/**
        @typedef CommunicationConsent
        
        
        @property { string } [appId]
        
        @property { string } [userId]
        
        @property { Object } [channels]
        
         
    */

/**
        @typedef PushtokenReq
        
        
        @property { string } [action]
        
        @property { string } [bundleIdentifier]
        
        @property { string } [pushToken]
        
        @property { string } [uniqueDeviceId]
        
        @property { string } [type]
        
         
    */

/**
        @typedef PushtokenRes
        
        
        @property { string } [id]
        
        @property { string } [bundleIdentifier]
        
        @property { string } [pushToken]
        
        @property { string } [uniqueDeviceId]
        
        @property { string } [type]
        
        @property { string } [platform]
        
        @property { string } [applicationId]
        
        @property { string } [userId]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [expiredAt]
        
         
    */

/**
        @typedef QRCodeResp
        
        
        @property { string } [link]
        
        @property { string } [svg]
        
         
    */

/**
        @typedef RedirectDevice
        
        
        @property { string } link
        
        @property { string } type
        
         
    */

/**
        @typedef Redirects
        
        
        @property { RedirectDevice } [ios]
        
        @property { RedirectDevice } [android]
        
        @property { Object } [web]
        
        @property { boolean } [forceWeb]
        
         
    */

/**
        @typedef ShortLinkReq
        
        
        @property { string } title
        
        @property { string } url
        
        @property { string } [hash]
        
        @property { string } [active]
        
        @property { string } [type]
        
        @property { string } [expireAt]
        
        @property { boolean } [enableTracking]
        
        @property { Redirects } [redirects]
        
         
    */

/**
        @typedef ShortLinkRes
        
        
        @property { string } [title]
        
        @property { Object } [url]
        
        @property { string } [createdBy]
        
        @property { string } [personalized]
        
        @property { string } [appRedirect]
        
        @property { string } [fallback]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { boolean } [enableTracking]
        
        @property { boolean } [expireAt]
        
        @property { string } [application]
        
        @property { boolean } [userId]
        
        @property { boolean } [createdAt]
        
        @property { boolean } [updatedAt]
        
        @property { Redirects } [redirects]
        
         
    */

/**
        @typedef ShortLinkList
        
        
        @property { Array<ShortLinkRes> } [items]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { number } [current]
        
        @property { string } [hasNext]
        
        @property { string } [type]
        
         
    */

/**
        @typedef FailedResponse
        
        
        @property { string } message
        
         
    */

/**
        @typedef CDN
        
        
        @property { string } url
        
         
    */

/**
        @typedef Upload
        
        
        @property { number } expiry
        
        @property { string } url
        
         
    */

/**
        @typedef StartResponse
        
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
         
    */

/**
        @typedef StartRequest
        
        
        @property { string } fileName
        
        @property { string } contentType
        
        @property { number } size
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef CompleteResponse
        
        
        @property { string } id
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } success
        
        @property { Array<string> } [tags]
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
         
    */

/**
        @typedef ApplicationAboutResponse
        
        
        @property { Object } [applicationInfo]
        
         
    */

/**
        @typedef AppVersionRequest
        
        
        @property { ApplicationVersionRequest } application
        
        @property { Device } device
        
        @property { string } [locale]
        
        @property { string } [timezone]
        
         
    */

/**
        @typedef ApplicationVersionRequest
        
        
        @property { string } [id]
        
        @property { string } name
        
        @property { string } [namespace]
        
        @property { string } [token]
        
        @property { string } version
        
         
    */

/**
        @typedef Device
        
        
        @property { number } [build]
        
        @property { string } [model]
        
        @property { OS } os
        
         
    */

/**
        @typedef OS
        
        
        @property { string } name
        
        @property { string } [version]
        
         
    */

/**
        @typedef Language
        
        
        @property { string } [name]
        
        @property { string } [code]
        
         
    */

/**
        @typedef LanguageResponse
        
        
        @property { Array<Language> } [items]
        
         
    */

/**
        @typedef TokensResponse
        
        
        @property { Object } [tokens]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef AppStaffResponse
        
        
        @property { Array<AppStaff> } [staffUsers]
        
         
    */

/**
        @typedef UpdateDialog
        
        
        @property { string } [type]
        
        @property { number } [interval]
        
         
    */

/**
        @typedef OrderingStoreSelectRequest
        
        
        @property { OrderingStoreSelect } orderingStore
        
         
    */

/**
        @typedef OrderingStoreSelect
        
        
        @property { string } id
        
        @property { number } uid
        
        @property { string } storeCode
        
         
    */

/**
        @typedef AppStaff
        
        
        @property { string } [id]
        
        @property { boolean } [orderIncent]
        
        @property { Array<number> } [stores]
        
        @property { string } [application]
        
        @property { string } [title]
        
        @property { string } [user]
        
        @property { string } [employeeCode]
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [profilePicUrl]
        
         
    */

/**
        @typedef ProductDetailFeature
        
        
        @property { Array<string> } [similar]
        
        @property { boolean } [sellerSelection]
        
        @property { boolean } [updateProductMeta]
        
        @property { boolean } [requestProduct]
        
         
    */

/**
        @typedef LaunchPage
        
        
        @property { string } [pageType]
        
        @property { string } [params]
        
        @property { string } [query]
        
         
    */

/**
        @typedef LandingPageFeature
        
        
        @property { LaunchPage } [launchPage]
        
        @property { boolean } [continueAsGuest]
        
        @property { string } [loginBtnText]
        
        @property { boolean } [showDomainTextbox]
        
        @property { boolean } [showRegisterBtn]
        
         
    */

/**
        @typedef RegistrationPageFeature
        
        
        @property { boolean } [askStoreAddress]
        
         
    */

/**
        @typedef AppFeature
        
        
        @property { ProductDetailFeature } [productDetail]
        
        @property { LandingPageFeature } [landingPage]
        
        @property { RegistrationPageFeature } [registrationPage]
        
        @property { Object } [homePage]
        
        @property { Object } [common]
        
        @property { Object } [cart]
        
        @property { Object } [qr]
        
        @property { Object } [pcr]
        
        @property { Object } [order]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef AppFeatureRequest
        
        
        @property { AppFeature } [feature]
        
         
    */

/**
        @typedef AppFeatureResponse
        
        
        @property { AppFeature } [feature]
        
         
    */

/**
        @typedef Currency
        
        
        @property { string } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [decimalDigits]
        
        @property { string } [symbol]
        
         
    */

/**
        @typedef Domain
        
        
        @property { boolean } [verified]
        
        @property { boolean } [isPrimary]
        
        @property { boolean } [isDefault]
        
        @property { boolean } [isShortlink]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ApplicationWebsite
        
        
        @property { boolean } [enabled]
        
        @property { string } [basepath]
        
         
    */

/**
        @typedef ApplicationCors
        
        
        @property { Array<string> } [domains]
        
         
    */

/**
        @typedef ApplicationAuth
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef ApplicationRedirections
        
        
        @property { string } [from]
        
        @property { string } [redirectTo]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ApplicationMeta
        
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef SecureUrl
        
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef Application
        
        
        @property { ApplicationWebsite } [website]
        
        @property { ApplicationCors } [cors]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [description]
        
        @property { string } [channelType]
        
        @property { number } [cacheTtl]
        
        @property { boolean } [isInternal]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { number } [companyId]
        
        @property { string } [token]
        
        @property { Array<ApplicationRedirections> } [redirections]
        
        @property { Array<ApplicationMeta> } [meta]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { SecureUrl } [banner]
        
        @property { SecureUrl } [logo]
        
        @property { SecureUrl } [favicon]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [appType]
        
        @property { SecureUrl } [mobileLogo]
        
        @property { Domain } [domain]
        
         
    */

/**
        @typedef NotFound
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef UnhandledError
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef InvalidPayloadRequest
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef SuccessMessageResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef InventoryBrandRule
        
        
        @property { string } [criteria]
        
        @property { Array<number> } [brands]
        
         
    */

/**
        @typedef StoreCriteriaRule
        
        
        @property { Array<number> } [companies]
        
        @property { Array<number> } [brands]
        
         
    */

/**
        @typedef InventoryStoreRule
        
        
        @property { string } [criteria]
        
        @property { Array<StoreCriteriaRule> } [rules]
        
        @property { Array<number> } [stores]
        
         
    */

/**
        @typedef InventoryPaymentConfig
        
        
        @property { string } [modeOfPayment]
        
        @property { string } [source]
        
         
    */

/**
        @typedef StorePriorityRule
        
        
        @property { boolean } [enabled]
        
        @property { Array<string> } [storetypeOrder]
        
         
    */

/**
        @typedef ArticleAssignmentRule
        
        
        @property { StorePriorityRule } [storePriority]
        
         
    */

/**
        @typedef InventoryArticleAssignment
        
        
        @property { boolean } [postOrderReassignment]
        
        @property { Array<number> } [enforcedStores]
        
        @property { ArticleAssignmentRule } [rules]
        
         
    */

/**
        @typedef CompanyAboutAddress
        
        
        @property { number } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [addressType]
        
         
    */

/**
        @typedef UserEmail
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
         
    */

/**
        @typedef UserPhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { number } [countryCode]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef Pagination
        
        
        @property { string } [type]
        
        @property { number } [size]
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
         
    */

/**
        @typedef ApplicationInformation
        
        
        @property { Object } [address]
        
        @property { Object } [support]
        
        @property { Object } [socialLinks]
        
        @property { Array<Object> } [links]
        
        @property { string } [copyrightText]
        
        @property { string } [id]
        
        @property { Array<Object> } [businessHighlights]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef ApplicationDetail
        
        
        @property { string } name
        
        @property { string } description
        
        @property { SecureUrl } logo
        
        @property { SecureUrl } mobileLogo
        
        @property { SecureUrl } favicon
        
        @property { SecureUrl } banner
        
        @property { Domain } [domain]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [id]
        
         
    */

/**
        @typedef CurrenciesResponse
        
        
        @property { Array<Currency> } [items]
        
         
    */

/**
        @typedef OrderingStore
        
        
        @property { Object } [address]
        
        @property { string } [id]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { number } [pincode]
        
        @property { string } [code]
        
         
    */

/**
        @typedef OrderingStores
        
        
        @property { Pagination } [page]
        
        @property { Array<OrderingStore> } [items]
        
        @property { Array<number> } [deployedStores]
        
        @property { boolean } [allStores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { number } [v]
        
         
    */

/**
        @typedef AggregatorConfigDetail
        
        
        @property { boolean } [sdk]
        
        @property { string } key
        
        @property { string } [verifyApi]
        
        @property { string } secret
        
        @property { string } [userId]
        
        @property { string } [api]
        
        @property { string } configType
        
        @property { string } [pin]
        
        @property { string } [merchantId]
        
        @property { string } [merchantKey]
        
         
    */

/**
        @typedef AggregatorsConfigDetailResponse
        
        
        @property { AggregatorConfigDetail } [mswipe]
        
        @property { AggregatorConfigDetail } [razorpay]
        
        @property { AggregatorConfigDetail } [simpl]
        
        @property { boolean } success
        
        @property { AggregatorConfigDetail } [stripe]
        
        @property { AggregatorConfigDetail } [payumoney]
        
        @property { AggregatorConfigDetail } [ccavenue]
        
        @property { AggregatorConfigDetail } [rupifi]
        
        @property { AggregatorConfigDetail } [juspay]
        
        @property { string } env
        
         
    */

/**
        @typedef ErrorCodeAndDescription
        
        
        @property { string } description
        
        @property { string } code
        
         
    */

/**
        @typedef HttpErrorCodeAndResponse
        
        
        @property { boolean } success
        
        @property { ErrorCodeAndDescription } error
        
         
    */

/**
        @typedef AttachCardRequest
        
        
        @property { boolean } [refresh]
        
        @property { string } cardId
        
         
    */

/**
        @typedef AttachCardsResponse
        
        
        @property { boolean } success
        
        @property { string } [message]
        
        @property { Object } data
        
         
    */

/**
        @typedef CardPaymentGateway
        
        
        @property { string } [api]
        
        @property { string } [customerId]
        
        @property { string } aggregator
        
         
    */

/**
        @typedef ActiveCardPaymentGatewayResponse
        
        
        @property { boolean } success
        
        @property { string } message
        
        @property { CardPaymentGateway } cards
        
         
    */

/**
        @typedef Card
        
        
        @property { string } aggregatorName
        
        @property { string } [cardName]
        
        @property { number } [expMonth]
        
        @property { string } [cardIsin]
        
        @property { string } [cardFingerprint]
        
        @property { string } [cardBrand]
        
        @property { string } [cardNumber]
        
        @property { string } [cardBrandImage]
        
        @property { string } [cardToken]
        
        @property { string } [cardIssuer]
        
        @property { boolean } [expired]
        
        @property { number } [expYear]
        
        @property { string } [cardReference]
        
        @property { string } [nickname]
        
        @property { string } [cardId]
        
        @property { string } [cardType]
        
         
    */

/**
        @typedef ListCardsResponse
        
        
        @property { boolean } success
        
        @property { string } message
        
        @property { Array<Card> } [data]
        
         
    */

/**
        @typedef DeletehCardRequest
        
        
        @property { string } cardId
        
         
    */

/**
        @typedef DeleteCardsResponse
        
        
        @property { boolean } success
        
        @property { string } [message]
        
         
    */

/**
        @typedef ValidateCustomerRequest
        
        
        @property { string } phoneNumber
        
        @property { number } transactionAmountInPaise
        
        @property { string } aggregator
        
        @property { string } payload
        
        @property { Object } merchantParams
        
         
    */

/**
        @typedef ValidateCustomerResponse
        
        
        @property { boolean } success
        
        @property { string } message
        
        @property { Object } data
        
         
    */

/**
        @typedef ChargeCustomerRequest
        
        
        @property { number } amount
        
        @property { string } aggregator
        
        @property { boolean } [verified]
        
        @property { string } orderId
        
        @property { string } [transactionToken]
        
         
    */

/**
        @typedef ChargeCustomerResponse
        
        
        @property { string } [deliveryAddressId]
        
        @property { string } aggregator
        
        @property { string } status
        
        @property { string } [cartId]
        
        @property { boolean } success
        
        @property { string } message
        
        @property { string } orderId
        
         
    */

/**
        @typedef PaymentInitializationRequest
        
        
        @property { string } customerId
        
        @property { string } merchantOrderId
        
        @property { string } [virtualId]
        
        @property { string } method
        
        @property { string } aggregatorOrderId
        
        @property { string } aggregator
        
        @property { string } pollingUrl
        
        @property { string } razorpayPaymentId
        
        @property { number } timeout
        
         
    */

/**
        @typedef PaymentInitializationResponse
        
        
        @property { string } [customerId]
        
        @property { string } [virtualId]
        
        @property { number } [timeout]
        
        @property { string } method
        
        @property { string } [aggregatorOrderId]
        
        @property { number } [amount]
        
        @property { string } aggregator
        
        @property { string } [status]
        
        @property { boolean } success
        
        @property { string } pollingUrl
        
        @property { string } [currency]
        
        @property { string } [razorpayPaymentId]
        
        @property { string } [vpa]
        
        @property { string } merchantOrderId
        
        @property { string } [bqrImage]
        
         
    */

/**
        @typedef PaymentStatusUpdateRequest
        
        
        @property { string } contact
        
        @property { string } customerId
        
        @property { string } method
        
        @property { number } amount
        
        @property { string } aggregator
        
        @property { string } status
        
        @property { string } email
        
        @property { string } orderId
        
        @property { string } currency
        
        @property { string } vpa
        
        @property { string } merchantOrderId
        
         
    */

/**
        @typedef PaymentStatusUpdateResponse
        
        
        @property { boolean } retry
        
        @property { string } status
        
        @property { string } aggregatorName
        
         
    */

/**
        @typedef AggregatorRoute
        
        
        @property { string } [apiLink]
        
        @property { string } [paymentFlow]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef PaymentFlow
        
        
        @property { AggregatorRoute } [bqrRazorpay]
        
        @property { AggregatorRoute } [upiRazorpay]
        
        @property { AggregatorRoute } [fynd]
        
        @property { AggregatorRoute } [rupifi]
        
        @property { AggregatorRoute } [stripe]
        
        @property { AggregatorRoute } [razorpay]
        
        @property { AggregatorRoute } [payubiz]
        
        @property { AggregatorRoute } [juspay]
        
        @property { AggregatorRoute } [ccavenue]
        
        @property { AggregatorRoute } [simpl]
        
         
    */

/**
        @typedef PaymentModeLogo
        
        
        @property { string } small
        
        @property { string } large
        
         
    */

/**
        @typedef PaymentModeList
        
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { string } [cardBrand]
        
        @property { string } [cardNumber]
        
        @property { boolean } [expired]
        
        @property { string } aggregatorName
        
        @property { string } [fyndVpa]
        
        @property { string } [cardIssuer]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { string } [cardIsin]
        
        @property { string } [cardId]
        
        @property { string } [cardType]
        
        @property { string } [cardName]
        
        @property { string } [cardFingerprint]
        
        @property { number } [retryCount]
        
        @property { string } [name]
        
        @property { string } [cardBrandImage]
        
        @property { string } [displayName]
        
        @property { string } [code]
        
        @property { number } [expMonth]
        
        @property { number } [expYear]
        
        @property { number } [displayPriority]
        
        @property { string } [cardToken]
        
        @property { string } [intentFlow]
        
        @property { string } [merchantCode]
        
        @property { number } [timeout]
        
        @property { string } [cardReference]
        
        @property { string } [nickname]
        
         
    */

/**
        @typedef RootPaymentMode
        
        
        @property { Array<PaymentModeList> } [list]
        
        @property { string } [aggregatorName]
        
        @property { number } displayPriority
        
        @property { string } name
        
        @property { boolean } [anonymousEnable]
        
        @property { string } displayName
        
        @property { boolean } [addCardEnabled]
        
         
    */

/**
        @typedef PaymentOptionAndFlow
        
        
        @property { PaymentFlow } paymentFlows
        
        @property { Array<RootPaymentMode> } paymentOption
        
         
    */

/**
        @typedef PaymentModeRouteResponse
        
        
        @property { boolean } success
        
        @property { PaymentOptionAndFlow } paymentOptions
        
         
    */

/**
        @typedef OrderBeneficiaryDetails
        
        
        @property { boolean } isActive
        
        @property { boolean } [mobile]
        
        @property { string } beneficiaryId
        
        @property { string } subtitle
        
        @property { string } accountNo
        
        @property { string } transferMode
        
        @property { string } accountHolder
        
        @property { string } address
        
        @property { boolean } [branchName]
        
        @property { string } bankName
        
        @property { string } displayName
        
        @property { string } email
        
        @property { string } delightsUserName
        
        @property { string } createdOn
        
        @property { string } ifscCode
        
        @property { boolean } [comment]
        
        @property { string } title
        
        @property { number } id
        
        @property { string } modifiedOn
        
         
    */

/**
        @typedef OrderBeneficiaryResponse
        
        
        @property { Array<OrderBeneficiaryDetails> } beneficiaries
        
         
    */

/**
        @typedef NotFoundResourceError
        
        
        @property { boolean } success
        
        @property { string } description
        
        @property { string } code
        
         
    */

/**
        @typedef IfscCodeResponse
        
        
        @property { boolean } [success]
        
        @property { string } branchName
        
        @property { string } bankName
        
         
    */

/**
        @typedef ErrorCodeDescription
        
        
        @property { boolean } success
        
        @property { string } description
        
        @property { string } code
        
         
    */

/**
        @typedef AddBeneficiaryViaOtpVerificationRequest
        
        
        @property { string } requestId
        
        @property { string } hashKey
        
        @property { string } otp
        
         
    */

/**
        @typedef AddBeneficiaryViaOtpVerificationResponse
        
        
        @property { string } requestId
        
        @property { string } hashKey
        
        @property { string } otp
        
         
    */

/**
        @typedef WrongOtpError
        
        
        @property { string } success
        
        @property { string } description
        
         
    */

/**
        @typedef BankDetails
        
        
        @property { string } accountHolder
        
        @property { string } address
        
        @property { string } branchName
        
        @property { string } ifscCode
        
        @property { string } bankName
        
        @property { string } accountNo
        
        @property { string } [comment]
        
        @property { string } mobile
        
        @property { string } email
        
         
    */

/**
        @typedef AddBeneficiaryDetailsRequest
        
        
        @property { boolean } delights
        
        @property { string } orderId
        
        @property { string } shipmentId
        
        @property { string } transferMode
        
        @property { BankDetails } details
        
         
    */

/**
        @typedef RefundAccountResponse
        
        
        @property { boolean } success
        
        @property { string } message
        
        @property { Object } [data]
        
         
    */

/**
        @typedef WalletOtpRequest
        
        
        @property { string } countryCode
        
        @property { boolean } mobile
        
         
    */

/**
        @typedef WalletOtpResponse
        
        
        @property { boolean } [success]
        
        @property { string } requestId
        
        @property { string } isVerifiedFlag
        
         
    */

/**
        @typedef SetDefaultBeneficiaryRequest
        
        
        @property { string } orderId
        
        @property { string } beneficiaryId
        
         
    */

/**
        @typedef SetDefaultBeneficiaryResponse
        
        
        @property { boolean } [success]
        
        @property { boolean } isBeneficiarySet
        
         
    */

/**
        @typedef OrderById
        
        
        @property { OrderSchema } order
        
         
    */

/**
        @typedef OrderList
        
        
        @property { Array<OrderSchema> } orders
        
        @property { Object } page
        
         
    */

/**
        @typedef ShipmentById
        
        
        @property { Shipments } shipment
        
         
    */

/**
        @typedef ShipmentReasons
        
        
        @property { Array<Reasons> } reasons
        
         
    */

/**
        @typedef ShipmentStatusUpdateBody
        
        
        @property { Object } shipments
        
        @property { boolean } forceTransition
        
        @property { boolean } task
        
         
    */

/**
        @typedef ShipmentStatusUpdate
        
        
        @property { Object } shipments
        
         
    */

/**
        @typedef ShipmentTrack
        
        
        @property { Array<Track> } results
        
         
    */

/**
        @typedef OrderSchema
        
        
        @property { string } [orderId]
        
        @property { Array<BreakupValues> } [breakupValues]
        
        @property { string } [orderCreatedTime]
        
        @property { Array<Shipments> } [shipments]
        
        @property { number } [totalShipmentsInOrder]
        
        @property { UserInfo } [userInfo]
        
         
    */

/**
        @typedef PosOrderById
        
        
        @property { OrderSchema } order
        
         
    */

/**
        @typedef Bags
        
        
        @property { Object } [item]
        
        @property { Object } [prices]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { Object } [currentStatus]
        
        @property { Array<Object> } [bagStatus]
        
        @property { Object } [dates]
        
        @property { number } [id]
        
        @property { Object } [status]
        
        @property { string } [type]
        
        @property { Array<Object> } [financialBreakup]
        
        @property { Array<Object> } [reasons]
        
        @property { Object } [article]
        
        @property { string } [journeyType]
        
        @property { Object } [currentOperationalStatus]
        
        @property { string } [displayName]
        
        @property { string } [entityType]
        
        @property { Object } [brand]
        
        @property { Object } [affiliateBagDetails]
        
        @property { Object } [gstDetails]
        
        @property { number } [bagId]
        
        @property { number } [bagUpdateTime]
        
         
    */

/**
        @typedef BreakupValues
        
        
        @property { string } [display]
        
        @property { number } [value]
        
        @property { string } [name]
        
         
    */

/**
        @typedef DeliveryAddress
        
        
        @property { string } [pincode]
        
        @property { string } [landmark]
        
        @property { string } [contactPerson]
        
        @property { string } [phone]
        
        @property { string } [state]
        
        @property { string } [version]
        
        @property { string } [address1]
        
        @property { string } [createdAt]
        
        @property { string } [addressType]
        
        @property { string } [addressCategory]
        
        @property { string } [area]
        
        @property { string } [city]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [email]
        
        @property { string } [country]
        
        @property { string } [address2]
        
        @property { string } [updatedAt]
        
        @property { string } [name]
        
        @property { string } [address]
        
         
    */

/**
        @typedef FulfillingStore
        
        
        @property { string } [address1]
        
        @property { string } [storeEmail]
        
        @property { string } [code]
        
        @property { Object } [storeAddressJson]
        
        @property { string } [country]
        
        @property { string } [state]
        
        @property { string } [pincode]
        
        @property { string } [contactPerson]
        
        @property { Array<any> } [brandStoreTags]
        
        @property { string } [locationType]
        
        @property { string } [address2]
        
        @property { boolean } [isArchived]
        
        @property { number } [id]
        
        @property { string } [createdAt]
        
        @property { boolean } [isEnabledForRecon]
        
        @property { string } [city]
        
        @property { Object } [meta]
        
        @property { string } [fulfillmentChannel]
        
        @property { boolean } [isActive]
        
        @property { string } [updatedAt]
        
        @property { string } [loginUsername]
        
        @property { string } [phone]
        
        @property { number } [packagingMaterialCount]
        
        @property { string } [name]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef Invoice
        
        
        @property { string } [updatedDate]
        
        @property { string } [invoiceUrl]
        
        @property { string } [labelUrl]
        
         
    */

/**
        @typedef ProductItems
        
        
        @property { string } [code]
        
        @property { string } [lastUpdatedAt]
        
        @property { string } [brand]
        
        @property { Array<any> } [image]
        
        @property { number } [l3Category]
        
        @property { number } [brandId]
        
        @property { string } [name]
        
        @property { boolean } [canCancel]
        
        @property { string } [size]
        
        @property { string } [slugKey]
        
        @property { string } [l3CategoryName]
        
        @property { Array<any> } [l2Category]
        
        @property { number } [id]
        
        @property { boolean } [canReturn]
        
        @property { Array<any> } [l1Category]
        
        @property { Object } [attributes]
        
         
    */

/**
        @typedef ShipmentMeta
        
        
        @property { Object } [timestamp]
        
        @property { Object } [bagWeight]
        
        @property { Object } [dpOptions]
        
        @property { string } [orderType]
        
        @property { boolean } [sameStoreAvailable]
        
        @property { boolean } [assignDpFromSb]
        
        @property { string } [dpId]
        
        @property { number } [weight]
        
        @property { Object } [formatted]
        
        @property { Object } [debugInfo]
        
        @property { string } [dpSortKey]
        
        @property { string } [packagingName]
        
         
    */

/**
        @typedef Prices
        
        
        @property { number } [amountPaid]
        
        @property { number } [priceMarked]
        
        @property { number } [codCharges]
        
        @property { number } [discount]
        
        @property { number } [deliveryCharge]
        
        @property { number } [fyndCredits]
        
        @property { number } [cashback]
        
        @property { number } [priceEffective]
        
        @property { number } [valueOfGood]
        
        @property { number } [refundAmount]
        
        @property { number } [couponValue]
        
        @property { number } [cashbackApplied]
        
        @property { number } [refundCredit]
        
         
    */

/**
        @typedef Promise
        
        
        @property { Object } [timestamp]
        
         
    */

/**
        @typedef Reasons
        
        
        @property { string } [reasonText]
        
        @property { boolean } [showTextArea]
        
        @property { string } [feedbackType]
        
        @property { string } [flow]
        
        @property { number } [reasonId]
        
        @property { number } [priority]
        
         
    */

/**
        @typedef ShipmentStatus
        
        
        @property { string } [title]
        
        @property { number } [hexCode]
        
         
    */

/**
        @typedef ShipmentUserInfo
        
        
        @property { string } [gender]
        
        @property { string } [mobile]
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
         
    */

/**
        @typedef Shipments
        
        
        @property { string } [orderId]
        
        @property { Array<BreakupValues> } [breakupValues]
        
        @property { boolean } [enableCanReturn]
        
        @property { string } [paymentModeSource]
        
        @property { Array<string> } [shipmentImages]
        
        @property { string } [trackUrl]
        
        @property { string } [trakingNo]
        
        @property { Array<TrackingDetails> } [trackingDetails]
        
        @property { boolean } [beneficiaryDetails]
        
        @property { boolean } [canReturn]
        
        @property { boolean } [enableTracking]
        
        @property { Prices } [prices]
        
        @property { string } [needHelpUrl]
        
        @property { string } [shipmentId]
        
        @property { number } [totalBags]
        
        @property { Array<ProductItems> } [items]
        
        @property { DeliveryAddress } [deliveryAddress]
        
        @property { string } [paymentStatus]
        
        @property { Invoice } [invoice]
        
        @property { string } [comment]
        
        @property { string } [orderType]
        
        @property { Promise } [promise]
        
        @property { FulfillingStore } [fulfillingStore]
        
        @property { number } [totalItems]
        
        @property { Array<Bags> } [bags]
        
        @property { boolean } [canCancel]
        
        @property { string } [paymentLogo]
        
        @property { string } [shipmentCreatedAt]
        
        @property { ShipmentStatus } [shipmentStatus]
        
        @property { ShipmentUserInfo } [userInfo]
        
        @property { ShipmentMeta } [meta]
        
         
    */

/**
        @typedef Track
        
        
        @property { string } [awb]
        
        @property { string } [updatedAt]
        
        @property { string } [lastLocationRecievedAt]
        
        @property { string } [reason]
        
        @property { string } [shipmentType]
        
        @property { string } [status]
        
        @property { string } [updatedTime]
        
        @property { string } [accountName]
        
         
    */

/**
        @typedef TrackingDetails
        
        
        @property { boolean } [isCurrent]
        
        @property { string } [status]
        
        @property { string } [time]
        
        @property { string } [isPassed]
        
         
    */

/**
        @typedef UserInfo
        
        
        @property { string } [gender]
        
        @property { string } [mobile]
        
        @property { string } [name]
        
        @property { string } [email]
        
         
    */

/**
        @typedef ApefaceApiError
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef Article
        
        
        @property { string } [id]
        
        @property { number } [points]
        
        @property { number } [price]
        
         
    */

/**
        @typedef CatalogueOrderRequest
        
        
        @property { Array<Article> } [articles]
        
         
    */

/**
        @typedef CatalogueOrderResponse
        
        
        @property { Array<Article> } [articles]
        
         
    */

/**
        @typedef CursorPage
        
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Discount
        
        
        @property { number } [absolute]
        
        @property { string } [currency]
        
        @property { string } [displayAbsolute]
        
        @property { string } [displayPercent]
        
        @property { number } [percent]
        
         
    */

/**
        @typedef Error
        
        
        @property { number } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [message]
        
         
    */

/**
        @typedef Offer
        
        
        @property { string } [schedule]
        
        @property { boolean } [active]
        
        @property { string } [applicationId]
        
        @property { Asset } [bannerImage]
        
        @property { string } [createdAt]
        
        @property { Action } [infoAction]
        
        @property { string } [name]
        
        @property { Object } [rule]
        
        @property { ShareMessages } [share]
        
        @property { string } [subText]
        
        @property { string } [text]
        
        @property { string } [type]
        
        @property { string } [updatedAt]
        
        @property { string } [updatedBy]
        
        @property { string } [url]
        
         
    */

/**
        @typedef OrderDiscountRequest
        
        
        @property { string } [currency]
        
        @property { number } orderAmount
        
         
    */

/**
        @typedef OrderDiscountResponse
        
        
        @property { OrderDiscountRuleBucket } [appliedRuleBucket]
        
        @property { Discount } [baseDiscount]
        
        @property { Discount } [discount]
        
        @property { number } [orderAmount]
        
        @property { number } [points]
        
         
    */

/**
        @typedef OrderDiscountRuleBucket
        
        
        @property { number } [high]
        
        @property { number } [low]
        
        @property { number } [max]
        
        @property { number } [value]
        
        @property { string } [valueType]
        
         
    */

/**
        @typedef PointsHistory
        
        
        @property { string } [id]
        
        @property { string } [applicationId]
        
        @property { boolean } [claimed]
        
        @property { string } [createdAt]
        
        @property { string } [expiresOn]
        
        @property { string } [meta]
        
        @property { number } [points]
        
        @property { number } [remainingPoints]
        
        @property { string } [text1]
        
        @property { string } [text2]
        
        @property { string } [text3]
        
        @property { string } [txnName]
        
        @property { string } [updatedAt]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef PointsHistoryResponse
        
        
        @property { Array<PointsHistory> } [history]
        
        @property { CursorPage } [page]
        
         
    */

/**
        @typedef PointsResponse
        
        
        @property { number } [points]
        
         
    */

/**
        @typedef RedeemReferralCodeRequest
        
        
        @property { string } deviceId
        
        @property { string } referralCode
        
         
    */

/**
        @typedef RedeemReferralCodeResponse
        
        
        @property { string } [message]
        
        @property { number } [points]
        
        @property { boolean } [redeemed]
        
        @property { string } [referrerId]
        
        @property { string } [referrerInfo]
        
         
    */

/**
        @typedef ReferralDetailsResponse
        
        
        @property { Offer } [referral]
        
        @property { string } [referrerInfo]
        
        @property { ShareMessages } [share]
        
        @property { Object } [user]
        
         
    */

/**
        @typedef ShareMessages
        
        
        @property { string } [email]
        
        @property { string } [facebook]
        
        @property { string } [fallback]
        
        @property { string } [message]
        
        @property { string } [messenger]
        
        @property { string } [sms]
        
        @property { string } [text]
        
        @property { string } [twitter]
        
        @property { string } [whatsapp]
        
         
    */

/**
        @typedef Access
        
        
        @property { boolean } [answer]
        
        @property { boolean } [askQuestion]
        
        @property { boolean } [comment]
        
        @property { boolean } [rnr]
        
         
    */

/**
        @typedef AddMediaListRequest
        
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { Array<AddMediaRequest> } [mediaList]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
         
    */

/**
        @typedef AddMediaRequest
        
        
        @property { string } [cloudId]
        
        @property { string } [cloudName]
        
        @property { string } [cloudProvider]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { string } [mediaUrl]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
        @property { Array<string> } [tags]
        
        @property { string } [thumbnailUrl]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Attribute
        
        
        @property { string } [createdOn]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<TagMeta> } [tags]
        
         
    */

/**
        @typedef AttributeObject
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [slug]
        
        @property { string } [title]
        
        @property { string } type
        
        @property { number } value
        
         
    */

/**
        @typedef CheckEligibilityResponse
        
        
        @property { Access } [access]
        
        @property { MediaCloud } [mediaCloud]
        
         
    */

/**
        @typedef Cloud
        
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [provider]
        
         
    */

/**
        @typedef CommentRequest
        
        
        @property { Array<string> } comment
        
        @property { string } entityId
        
        @property { string } entityType
        
         
    */

/**
        @typedef CreateQNARequest
        
        
        @property { Array<string> } [choices]
        
        @property { string } entityId
        
        @property { string } entityType
        
        @property { number } [maxLen]
        
        @property { number } [sortPriority]
        
        @property { Array<string> } [tags]
        
        @property { string } text
        
        @property { string } [type]
        
         
    */

/**
        @typedef DeviceMeta
        
        
        @property { string } [appVersion]
        
        @property { string } [platform]
        
         
    */

/**
        @typedef MediaCloud
        
        
        @property { string } [key]
        
        @property { string } [name]
        
        @property { string } [namespace]
        
        @property { string } [path]
        
        @property { string } [provider]
        
        @property { string } [secret]
        
         
    */

/**
        @typedef MediaMeta
        
        
        @property { Cloud } [cloud]
        
        @property { Array<string> } [comment]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [type]
        
        @property { Url } [url]
        
         
    */

/**
        @typedef PageCursor
        
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
        @property { string } [type]
        
         
    */

/**
        @typedef PageNumber
        
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ReportAbuseRequest
        
        
        @property { string } [description]
        
        @property { string } entityId
        
        @property { string } entityType
        
         
    */

/**
        @typedef SaveAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } slug
        
         
    */

/**
        @typedef TagMeta
        
        
        @property { Array<MediaMeta> } [media]
        
        @property { string } [name]
        
        @property { string } [type]
        
         
    */

/**
        @typedef UpdateAbuseStatusRequest
        
        
        @property { boolean } [abusive]
        
        @property { boolean } [active]
        
        @property { boolean } [approve]
        
        @property { string } [description]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { string } [id]
        
         
    */

/**
        @typedef UpdateAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [slug]
        
         
    */

/**
        @typedef UpdateCommentRequest
        
        
        @property { boolean } [active]
        
        @property { boolean } [approve]
        
        @property { Array<string> } comment
        
        @property { string } id
        
         
    */

/**
        @typedef UpdateMediaListRequest
        
        
        @property { boolean } [approve]
        
        @property { boolean } [archive]
        
        @property { string } [entityType]
        
        @property { Array<string> } [ids]
        
         
    */

/**
        @typedef UpdateQNARequest
        
        
        @property { boolean } [active]
        
        @property { boolean } [approve]
        
        @property { Array<string> } [choices]
        
        @property { string } [id]
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef UpdateReviewRequest
        
        
        @property { boolean } [active]
        
        @property { string } [application]
        
        @property { boolean } [approve]
        
        @property { boolean } [archive]
        
        @property { Array<AttributeObject> } [attributesRating]
        
        @property { string } [description]
        
        @property { DeviceMeta } [deviceMeta]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { Array<MediaMeta> } [mediaResource]
        
        @property { number } [rating]
        
        @property { string } [reviewId]
        
        @property { string } [templateId]
        
        @property { string } [title]
        
         
    */

/**
        @typedef UpdateVoteRequest
        
        
        @property { string } [action]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
         
    */

/**
        @typedef Url
        
        
        @property { string } [main]
        
        @property { string } [thumbnail]
        
         
    */

/**
        @typedef VoteRequest
        
        
        @property { string } [action]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
         
    */

/**
        @typedef XCursorGetResponse
        
        
        @property { Object } [items]
        
        @property { PageCursor } [page]
        
         
    */

/**
        @typedef XInsertResponse
        
        
        @property { string } [ids]
        
         
    */

/**
        @typedef XNumberGetResponse
        
        
        @property { Object } [items]
        
        @property { PageNumber } [page]
        
         
    */

/**
        @typedef XUpdateResponse
        
        
        @property { string } [id]
        
         
    */

/**
        @typedef UpdateCartShipmentItem
        
        
        @property { string } articleUid
        
        @property { string } shipmentType
        
        @property { number } [quantity]
        
         
    */

/**
        @typedef UpdateCartShipmentRequest
        
        
        @property { Array<UpdateCartShipmentItem> } shipments
        
         
    */

/**
        @typedef Files
        
        
        @property { string } key
        
        @property { Array<string> } values
        
         
    */

/**
        @typedef CartPosCheckoutRequest
        
        
        @property { string } [fyndstoreEmpId]
        
        @property { string } [paymentIdentifier]
        
        @property { number } [pickAtStoreUid]
        
        @property { boolean } [paymentAutoConfirm]
        
        @property { Object } [paymentParams]
        
        @property { Object } [billingAddress]
        
        @property { number } [orderingStore]
        
        @property { string } paymentMode
        
        @property { boolean } [pos]
        
        @property { number } [addressId]
        
        @property { Object } [extraMeta]
        
        @property { Files } [files]
        
        @property { string } [callbackUrl]
        
        @property { string } [aggregator]
        
        @property { number } [billingAddressId]
        
        @property { Object } [staff]
        
        @property { Object } [meta]
        
        @property { string } [merchantCode]
        
        @property { string } orderType
        
        @property { Object } [deliveryAddress]
        
         
    */

/**
        @typedef CartDeliveryModesResponse
        
        
        @property { Array<string> } [availableModes]
        
        @property { Array<number> } [pickupStores]
        
         
    */

/**
        @typedef PickupStoreDetail
        
        
        @property { string } [name]
        
        @property { number } [pincode]
        
        @property { string } [area]
        
        @property { string } [areaCode]
        
        @property { string } [addressType]
        
        @property { string } [phone]
        
        @property { string } [areaCodeSlug]
        
        @property { string } [country]
        
        @property { string } [city]
        
        @property { number } [uid]
        
        @property { string } [storeCode]
        
        @property { string } [state]
        
        @property { string } [address]
        
        @property { string } [email]
        
        @property { string } [landmark]
        
         
    */

/**
        @typedef StoreDetailsResponse
        
        
        @property { Array<PickupStoreDetail> } [items]
        
         
    */

/**
        @typedef GetPincodeCityResponse
        
        
        @property { string } requestUuid
        
        @property { string } stormbreakerUuid
        
        @property { boolean } success
        
        @property { Array<Object> } data
        
         
    */

/**
        @typedef GetTatProductReqBody
        
        
        @property { Array<Object> } locationDetails
        
        @property { string } source
        
        @property { string } toPincode
        
        @property { string } action
        
        @property { string } identifier
        
        @property { string } journey
        
         
    */

/**
        @typedef GetTatProductResponse
        
        
        @property { Array<Object> } locationDetails
        
        @property { string } requestUuid
        
        @property { Object } error
        
        @property { string } toCity
        
        @property { string } source
        
        @property { string } toPincode
        
        @property { string } action
        
        @property { string } stormbreakerUuid
        
        @property { boolean } success
        
        @property { string } identifier
        
        @property { string } journey
        
         
    */

class Catalog {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get a product
    * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    
    **/
  getProductDetailBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the sizes of a product
    * @description: A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizes`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param {string} [arg.storeId] - The store id of the product whose sizes need to be retrieved
    
    **/
  getProductSizesBySlug({ slug, storeId } = {}) {
    const query = {};
    query["store_id"] = storeId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/sizes/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get price a product size
    * @description: Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size with the location details it is available in.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param {string} arg.size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0/products/{slug}/sizes/**
    * @param {number} [arg.pincode] - The pincode of the product for which the price needs to be retrieved.
    * @param {string} [arg.storeId] - The store of the product whose size level price need to be retrieved
    
    **/
  getProductPriceBySlug({ slug, size, pincode, storeId } = {}) {
    const query = {};
    query["pincode"] = pincode;
    query["store_id"] = storeId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/sizes/${size}/price/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List sellers of a product
    * @description: A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param {string} arg.size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0.0/products/sizes**
    * @param {number} [arg.pincode] - The pincode of the product for which the price needs to be retrieved.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getProductSellersBySlug({ slug, size, pincode, pageNo, pageSize } = {}) {
    const query = {};
    query["pincode"] = pincode;
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/sizes/${size}/sellers/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Compare products
    * @description: Compare between the features of the given set of products Use this API to compare how one product ranks against other products. Note that at least one slug is mandatory in request query.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier `slug` of a products. You can retrieve this from the APIs that list products like **v1.0/products/**
    
    **/
  getProductComparisonBySlugs({ slug } = {}) {
    const query = {};
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/compare/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get comparison between similar products
    * @description: Compare between the features of the given set of products Use this API to compare how one product ranks against other products
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
    
    **/
  getSimilarComparisonProductBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/similar/compare/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get comparison between frequently compared products with the given product
    * @description: Compare between the features of the give product with frequently compared products Use this API to compare how one product ranks against other products
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
    
    **/
  getComparedFrequentlyProductBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/similar/compared-frequently/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get similar products
    * @description: Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on type as described in `SimilarProductByTypeResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param {string} arg.similarType - The tag_identifier is used to fetch the particular type of similar product such as basic, visual, price, seller, category and spec.
    
    **/
  getProductSimilarByIdentifier({ slug, similarType } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/similar/${similarType}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get variant of a particular product
    * @description: A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    
    **/
  getProductVariantsBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/variants/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the stock of a product
    * @description: Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Only 50 product IDs can be given in a single API request
    * @param {Object} arg - arg object.
    * @param {string} [arg.itemId] - Product id to get product stock (Max. 50 allowed)
    * @param {string} [arg.alu] - Product identifier alu to get product stock (Max. 50 allowed)
    * @param {string} [arg.skuCode] - Product identifier sku_code to get product stock (Max. 50 allowed)
    * @param {string} [arg.ean] - Product identifier ean to get product stock (Max. 50 allowed)
    * @param {string} [arg.upc] - Product identifier upc to get product stock (Max. 50 allowed)
    
    **/
  getProductStockByIds({ itemId, alu, skuCode, ean, upc } = {}) {
    const query = {};
    query["item_id"] = itemId;
    query["alu"] = alu;
    query["sku_code"] = skuCode;
    query["ean"] = ean;
    query["upc"] = upc;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/stock-status/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the stock of a product
    * @description: Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time
    * @param {Object} arg - arg object.
    * @param {string} arg.timestamp - timestamp in UTC format (2020-07-23T10:27:50Z)
    * @param {number} [arg.pageSize] - Limit of number of items for stock status default 12
    * @param {string} [arg.pageId] - will give next page results
    
    **/
  getProductStockForTimeByIds({ timestamp, pageSize, pageId } = {}) {
    const query = {};
    query["timestamp"] = timestamp;
    query["page_size"] = pageSize;
    query["page_id"] = pageId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/stock-status/poll/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
    * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts**
    * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
    * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
    * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    * @param {number} [arg.pageNo] - If page_type is number then pass it to fetch page items. Default is 1.
    * @param {string} [arg.pageType] - For pagination type should be cursor or number. Default is cursor.
    
    **/
  getProducts({
    q,
    f,
    filters,
    sortOn,
    pageId,
    pageSize,
    pageNo,
    pageType,
  } = {}) {
    const query = {};
    query["q"] = q;
    query["f"] = f;
    query["filters"] = filters;
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;
    query["page_no"] = pageNo;
    query["page_type"] = pageType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
    * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts**
    * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
    * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getProductsPaginator({ q, f, filters, sortOn, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getProducts({
        q: q,
        f: f,
        filters: filters,
        sortOn: sortOn,
        pageId: pageId,
        pageSize: pageSize,
        pageNo: pageNo,
        pageType: pageType,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: List all the brands
    * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getBrands({ department, pageNo, pageSize } = {}) {
    const query = {};
    query["department"] = department;
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/brands/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get metadata of a brand
    * @description: Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandDetailResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a brand. i.e; `slug` of a brand. You can retrieve these from the APIs that list brands like **v1.0/brands/**
    
    **/
  getBrandDetailBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/brands/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List all the categories
    * @description: List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
    
    **/
  getCategories({ department } = {}) {
    const query = {};
    query["department"] = department;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/categories/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get metadata of a category
    * @description: Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a category. i.e; `slug` of a category. You can retrieve these from the APIs that list categories like **v1.0/categories/**
    
    **/
  getCategoryDetailBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/categories/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.sortOn] - Each response will contain **sort_on** param, which should be sent back to make pagination work.
    * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getHomeProducts({ sortOn, pageId, pageSize } = {}) {
    const query = {};
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/home/listing/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List all the departments
    * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
    * @param {Object} arg - arg object.
    
    **/
  getDepartments({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/departments/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get relevant suggestions for a search query
    * @description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.
    * @param {Object} arg - arg object.
    * @param {string} arg.q - The search query. This can be a partial or complete name of a either a product, brand or category
    
    **/
  getSearchResults({ q } = {}) {
    const query = {};
    query["q"] = q;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/auto-complete/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List all the collections
    * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`
    * @param {Object} arg - arg object.
    * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getCollections({ pageId, pageSize } = {}) {
    const query = {};
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the items in a collection
    * @description: Get items in a collection specified by its `slug`.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection for which you want to fetch the items
    * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts**
    * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
    * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
    * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getCollectionItemsBySlug({
    slug,
    f,
    filters,
    sortOn,
    pageId,
    pageSize,
  } = {}) {
    const query = {};
    query["f"] = f;
    query["filters"] = filters;
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/${slug}/items/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a particular collection
    * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve.
    
    **/
  getCollectionDetailBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of followed Products, Brands, Collections
    * @description: A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
    
    **/
  getFollowedListing({ collectionType } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/${collectionType}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Follow a particular Product
    * @description: Follow a particular Product specified by its uid. Pass the uid of the product in request URL
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
    * @param {number} arg.collectionId - the `id` of the collection type you want to follow
    
    **/
  followById({ collectionType, collectionId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/catalog/v1.0/follow/${collectionType}/${collectionId}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: UnFollow a Product
    * @description: You can undo a followed Product or Brand by its id, we refer this action as _unfollow_. Pass the uid of the product in request URL
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
    * @param {number} arg.collectionId - the `id` of the collection type you want to unfollow
    
    **/
  unfollowById({ collectionType, collectionId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/catalog/v1.0/follow/${collectionType}/${collectionId}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Follow Count
    * @description: Get count of followers for given collection type and collection id.
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - the `type` of the collection products/brands/collections.
    * @param {string} arg.collectionId - the `id` of the product/brand/collection.
    
    **/
  getFollowerCountById({ collectionType, collectionId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/${collectionType}/${collectionId}/count/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the Ids of followed product, brand and collection.
    * @description: You can get the ids of all the followed Product, Brand and Collections. Pass collection_type as query parameter to fetch specific Ids
    * @param {Object} arg - arg object.
    * @param {string} [arg.collectionType] - Type of collection followed. i. e. products, brands, collections
    
    **/
  getFollowIds({ collectionType } = {}) {
    const query = {};
    query["collection_type"] = collectionType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/ids/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List store meta information.
    * @description: Use this API to get list of stores for specific application. If successful, returns list of stores specified in `StoreListingResponse`
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    * @param {string} [arg.q] - This can be used to search a particulr store by its name or store_code.
    * @param {number} [arg.range] - This can be used to retrieve store within a particular range. For eg range=10000 (in meters)
    * @param {number} [arg.latitude] - This should be the latitude of the location from which one needs to retreive the nearest stores.
    * @param {number} [arg.longitude] - This should be the longitude of the location from which one needs to retreive the nearest stores.
    
    **/
  getStores({ pageNo, pageSize, q, range, latitude, longitude } = {}) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;
    query["q"] = q;
    query["range"] = range;
    query["latitude"] = latitude;
    query["longitude"] = longitude;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/locations/`,
      query,
      undefined
    );
  }
}

class Cart {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Fetch all Items Added to  Cart
    * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {number} [arg.assignCardId] - 
    
    **/
  getCart({ uid, i, b, assignCardId } = {}) {
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;
    query["assign_card_id"] = assignCardId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Last-Modified timestamp
    * @description: Fetch Last-Modified timestamp in header metadata
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCartLastModified({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "head",
      `/service/application/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Items to Cart
   * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {AddCartRequest} arg.body
   **/
  addItems({ body, i, b } = {}) {
    const query = {};
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Items already added to Cart
   * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {UpdateCartRequest} arg.body
   **/
  updateCart({ body, uid, i, b } = {}) {
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Cart item count
    * @description: Get total count of item present in cart
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  getItemCount({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/basic`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Coupon
    * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCoupons({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Apply Coupon
    * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {boolean} [arg.p] - 
    * @param {number} [arg.uid] - 
    * @param {ApplyCouponRequest} arg.body
    **/
  applyCoupon({ body, i, b, p, uid } = {}) {
    const query = {};
    query["i"] = i;
    query["b"] = b;
    query["p"] = p;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/coupon`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Coupon Applied
    * @description: Remove Coupon applied on the cart by passing uid in request body.
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  removeCoupon({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get discount offers based on quantity
    * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
    * @param {Object} arg - arg object.
    * @param {number} [arg.itemId] - Item id
    * @param {string} [arg.articleId] - Article mongo id
    * @param {number} [arg.uid] - Item id
    * @param {string} [arg.slug] - Item unique url from product page
    
    **/
  getBulkDiscountOffers({ itemId, articleId, uid, slug } = {}) {
    const query = {};
    query["item_id"] = itemId;
    query["article_id"] = articleId;
    query["uid"] = uid;
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/bulk-price`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Address
    * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {number} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/address`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Address to the account
   * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
   * @param {Object} arg - arg object.
   * @param {Address} arg.body
   **/
  addAddress({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/address`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Fetch Single Address
    * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} arg.id - 
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {number} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update Address alreay added to account
   * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} arg.id - Address id
   * @param {Address} arg.body
   **/
  updateAddress({ id, body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/address/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Address Associated to the account
    * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
    * @param {Object} arg - arg object.
    * @param {number} arg.id - Address id
    
    **/
  removeAddress({ id } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Select Address from All Addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {SelectCartAddressRequest} arg.body
   **/
  selectAddress({ body, uid, i, b } = {}) {
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/select-address`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Payment
   * @description: Update Cart Payment for Your Account
   * @param {Object} arg - arg object.
   * @param {string} [arg.uid] -
   * @param {UpdateCartPaymentRequest} arg.body
   **/
  selectPaymentMode({ body, uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/payment`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get Cart Payment for valid coupon
    * @description: Validate coupon for selected payment mode
    * @param {Object} arg - arg object.
    * @param {string} [arg.uid] - 
    * @param {string} [arg.addressId] - 
    * @param {string} [arg.paymentMode] - 
    * @param {string} [arg.paymentIdentifier] - 
    * @param {string} [arg.aggregatorName] - 
    * @param {string} [arg.merchantCode] - 
    
    **/
  validateCouponForPayment({
    uid,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode,
  } = {}) {
    const query = {};
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["payment_mode"] = paymentMode;
    query["payment_identifier"] = paymentIdentifier;
    query["aggregator_name"] = aggregatorName;
    query["merchant_code"] = merchantCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/payment/validate/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get delivery date and options before checkout
    * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.p] - Get payment options or not
    * @param {number} [arg.uid] - Cart id
    * @param {number} [arg.addressId] - Address id
    * @param {string} [arg.areaCode] - Destination pincode.
    
    **/
  getShipments({ p, uid, addressId, areaCode } = {}) {
    const query = {};
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["area_code"] = areaCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/shipment`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Checkout Cart
   * @description: Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway
   * @param {Object} arg - arg object.
   * @param {CartCheckoutRequest} arg.body
   **/
  checkoutCart({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/checkout`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Meta
   * @description: Update cart meta like checkout_mode, gstin.
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] - Cart id received in get cart.
   * @param {CartMetaRequest} arg.body
   **/
  updateCartMeta({ body, uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/meta`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Generate Cart sharing link token
   * @description: Generates shared cart snapshot and returns shortlink token
   * @param {Object} arg - arg object.
   * @param {GetShareCartLinkRequest} arg.body
   **/
  getCartShareLink({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/share-cart`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get shared cart snapshot and cart response
    * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    
    **/
  getCartSharedItems({ token } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/share-cart/${token}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Merge or Replace existing cart
    * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    * @param {string} arg.action - Operation to perform on existing cart, whether to merge or replace.
    
    **/
  updateCartWithSharedItems({ token, action } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/share-cart/${token}/${action}`,
      query,
      undefined
    );
  }
}

class Lead {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get Ticket with the specific id
    * @description: Get Ticket with the specific id, this is used to view the ticket details
    * @param {Object} arg - arg object.
    * @param {string} arg.id - ID of ticket to be retrieved
    
    **/
  getTicket({ id } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/ticket/${id}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Create history for specific Ticket
   * @description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   * @param {Object} arg - arg object.
   * @param {string} arg.ticketId - Ticket ID for which history is created
   * @param {TicketHistoryPayload} arg.body
   **/
  createHistory({ ticketId, body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/lead/v1.0/ticket/${ticketId}/history`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Create Ticket
   * @description: This is used to Create Ticket.
   * @param {Object} arg - arg object.
   * @param {AddTicketPayload} arg.body
   **/
  createTicket({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/lead/v1.0/ticket/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get specific Custom Form using it's slug
    * @description: Get specific Custom Form using it's slug, this is used to view the form.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug of form whose response is getting submitted
    
    **/
  getCustomForm({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/form/${slug}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Submit Response for a specific Custom Form using it's slug
   * @description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
   * @param {Object} arg - arg object.
   * @param {string} arg.slug - Slug of form whose response is getting submitted
   * @param {CustomFormSubmissionPayload} arg.body
   **/
  submitCustomForm({ slug, body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/lead/v1.0/form/${slug}/submit`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get participants of a specific Video Room using it's unique name
    * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of Video Room
    
    **/
  getParticipantsInsideVideoRoom({ uniqueName } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/video/room/${uniqueName}/participants`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Token to join a specific Video Room using it's unqiue name
    * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of Video Room
    
    **/
  getTokenForVideoRoom({ uniqueName } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/video/room/${uniqueName}/token`,
      query,
      undefined
    );
  }
}

class Theme {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get applied theme for an application
    * @description: 
    * @param {Object} arg - arg object.
    
    **/
  getAppliedTheme({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/theme/v1.0/applied-theme`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get theme for preview
    * @description: 
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - ID of the theme to be retrieved
    
    **/
  getThemeForPreview({ themeId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/theme/v1.0/${themeId}/preview`,
      query,
      undefined
    );
  }
}

class User {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   *
   * @summary: Login/Register with Facebook
   * @description: Used to login or register with Facebook
   * @param {Object} arg - arg object.
   * @param {OAuthRequestSchema} arg.body
   **/
  loginWithFacebook({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/facebook-token`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login/Register with Google
   * @description: Used to login or register with Google
   * @param {Object} arg - arg object.
   * @param {OAuthRequestSchema} arg.body
   **/
  loginWithGoogle({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/google-token`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login/Register with Google for android
   * @description: Used to login or register with Google for android
   * @param {Object} arg - arg object.
   * @param {OAuthRequestSchema} arg.body
   **/
  loginWithGoogleAndroid({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/google-android`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login/Register with Google for ios
   * @description: Used to login or register with google for ios
   * @param {Object} arg - arg object.
   * @param {OAuthRequestSchema} arg.body
   **/
  loginWithGoogleIOS({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/google-ios`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login/Register with OTP
   * @description: Used to login or register with OTP
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {SendOtpRequestSchema} arg.body
   **/
  loginWithOTP({ body, platform } = {}) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/otp`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login/Register with password
   * @description: Used to login or register with email & password
   * @param {Object} arg - arg object.
   * @param {PasswordLoginRequestSchema} arg.body
   **/
  loginWithEmailAndPassword({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Reset Password
   * @description: Used to reset account password
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {SendResetPasswordEmailRequestSchema} arg.body
   **/
  sendResetPasswordEmail({ body, platform } = {}) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password/reset`,
      query,
      body
    );
  }

  /**
   *
   * @summary:
   * @description:
   * @param {Object} arg - arg object.
   * @param {ForgotPasswordRequestSchema} arg.body
   **/
  forgotPassword({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/userauthentication/v1.0/login/password/reset/forgot`,
      query,
      body
    );
  }

  /**
   *
   * @summary:
   * @description: Send code incase of reset password
   * @param {Object} arg - arg object.
   * @param {CodeRequestBodySchema} arg.body
   **/
  sendResetToken({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password/reset/token`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login/Register with token
   * @description: Login/Register with token
   * @param {Object} arg - arg object.
   * @param {TokenRequestBodySchema} arg.body
   **/
  loginWithToken({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/token`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Registration Form
   * @description: Register using form
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {FormRegisterRequestSchema} arg.body
   **/
  registerWithForm({ body, platform } = {}) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/register/form`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Verify email
   * @description: Used to verify email
   * @param {Object} arg - arg object.
   * @param {CodeRequestBodySchema} arg.body
   **/
  verifyEmail({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/verify/email`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Verify mobile
   * @description: Verify mobile
   * @param {Object} arg - arg object.
   * @param {CodeRequestBodySchema} arg.body
   **/
  verifyMobile({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/verify/mobile`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Check if user has password
    * @description: Checks if user is using password or not
    * @param {Object} arg - arg object.
    
    **/
  hasPassword({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/has-password`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update user password
   * @description: Used to update user password
   * @param {Object} arg - arg object.
   * @param {UpdatePasswordRequestSchema} arg.body
   **/
  updatePassword({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/password`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Logout user
    * @description: Used to log out user
    * @param {Object} arg - arg object.
    
    **/
  logout({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/logout`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Send OTP on mobile
   * @description: Used to send otp to mobile
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {SendMobileOtpRequestSchema} arg.body
   **/
  sendOTPOnMobile({ body, platform } = {}) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/mobile/send`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Verify OTP on mobile
   * @description: Used to verify otp sent to mobile
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {VerifyOtpRequestSchema} arg.body
   **/
  verifyMobileOTP({ body, platform } = {}) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/mobile/verify`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Send OTP on email
   * @description: Used to send otp to email
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {SendEmailOtpRequestSchema} arg.body
   **/
  sendOTPOnEmail({ body, platform } = {}) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/email/send`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Verify OTP on email
   * @description: Used to verify otp sent to email
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {VerifyOtpRequestSchema} arg.body
   **/
  verifyEmailOTP({ body, platform } = {}) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/email/verify`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get logged in user
    * @description: Used to get logged in user details
    * @param {Object} arg - arg object.
    
    **/
  getLoggedInUser({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/session`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of sessions
    * @description: Lists all active sessions
    * @param {Object} arg - arg object.
    
    **/
  getListOfActiveSessions({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/sessions`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get platform config
    * @description: Used to get platform config
    * @param {Object} arg - arg object.
    * @param {string} [arg.name] - Name
    
    **/
  getPlatformConfig({ name } = {}) {
    const query = {};
    query["name"] = name;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/platform/v1.0/config`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Edit Profile Details
   * @description: Used to update profile
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {EditProfileRequestSchema} arg.body
   **/
  updateProfile({ body, platform } = {}) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/detail`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Add mobile number to profile
   * @description: Used to add new mobile number to profile
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {EditMobileRequestSchema} arg.body
   **/
  addMobileNumber({ body, platform } = {}) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/user/profile/v1.0/mobile`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Delete mobile number from profile
    * @description: Used to delete mobile number from profile
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - Platform
    * @param {boolean} arg.active - Active mobile number
    * @param {boolean} arg.primary - Primary number
    * @param {boolean} arg.verified - Verified Number
    * @param {string} arg.countryCode - Country code of phone number
    * @param {string} arg.phone - Phone number
    
    **/
  deleteMobileNumber({
    active,
    primary,
    verified,
    countryCode,
    phone,
    platform,
  } = {}) {
    const query = {};
    query["platform"] = platform;
    query["active"] = active;
    query["primary"] = primary;
    query["verified"] = verified;
    query["country_code"] = countryCode;
    query["phone"] = phone;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/user/profile/v1.0/mobile`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Set mobile as primary
   * @description: Used to set a mobile number as primary
   * @param {Object} arg - arg object.
   * @param {SendVerificationLinkMobileRequestSchema} arg.body
   **/
  setMobileNumberAsPrimary({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/mobile/primary`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Send verification link to mobile
   * @description: Used to send verification link to a mobile number
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {SendVerificationLinkMobileRequestSchema} arg.body
   **/
  sendVerificationLinkToMobile({ body, platform } = {}) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/mobile/link/send`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Add email to profile
   * @description: Used to add new email to profile
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {EditEmailRequestSchema} arg.body
   **/
  addEmail({ body, platform } = {}) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/user/profile/v1.0/email`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Delete email from profile
    * @description: Used to delete email from profile
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - Platform
    * @param {boolean} arg.active - Whether email id is active
    * @param {boolean} arg.primary - Whether email id is primary email
    * @param {boolean} arg.verified - Whether email id is verified
    * @param {string} arg.email - Email ID to be deleted
    
    **/
  deleteEmail({ active, primary, verified, email, platform } = {}) {
    const query = {};
    query["platform"] = platform;
    query["active"] = active;
    query["primary"] = primary;
    query["verified"] = verified;
    query["email"] = email;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/user/profile/v1.0/email`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Set email as primary
   * @description: Used to set an email as primart
   * @param {Object} arg - arg object.
   * @param {EditEmailRequestSchema} arg.body
   **/
  setEmailAsPrimary({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/email/primary`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Send verification link to email
   * @description: Used to sent verification to an email
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {EditEmailRequestSchema} arg.body
   **/
  sendVerificationLinkToEmail({ body, platform } = {}) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/email/link/send`,
      query,
      body
    );
  }
}

class Content {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get live announcements
    * @description: Get live announcements for each or all pages with page slug of page and end date schedule.
    * @param {Object} arg - arg object.
    
    **/
  getAnnouncements({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/announcements`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Blog by slug
    * @description: Use this API to fetch a blog using `slug`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The `slug` of a blog. Use this parameter to retrieve a particular blog
    
    **/
  getBlog({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/blogs/${slug}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get frequently asked questions
    * @description: Get frequently asked questions list. These will be helpful for users to using website.
    * @param {Object} arg - arg object.
    
    **/
  getFaqs({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faq`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get FAQ categories list
    * @description: Get list of FAQ categories
    * @param {Object} arg - arg object.
    
    **/
  getFaqCategories({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faq/categories`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get frequently asked question
    * @description: Get frequently asked questions list. These will be helpful for users to using website.
    * @param {Object} arg - arg object.
    * @param {string} arg.idOrSlug - Slug or Id of FAQ
    
    **/
  getFaqByIdOrSlug({ idOrSlug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faq/${idOrSlug}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get FAQ category by slug or id
    * @description: Get FAQ category by slug or id
    * @param {Object} arg - arg object.
    * @param {string} arg.idOrSlug - Slug or Id of FAQ Category
    
    **/
  getFaqCategoryBySlugOrId({ idOrSlug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faq/category/${idOrSlug}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get FAQs of a Faq Category id or slug
    * @description: Get FAQs of a Faq Category `id` or `slug`
    * @param {Object} arg - arg object.
    * @param {string} arg.idOrSlug - Faq category ID or slug
    
    **/
  getFaqsByCategoryIdOrSlug({ idOrSlug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faq/category/${idOrSlug}/faqs`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get landing page
    * @description: Use this API to fetch a landing page
    * @param {Object} arg - arg object.
    
    **/
  getLandingPage({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/landing-page`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get legal information
    * @description: Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
    * @param {Object} arg - arg object.
    
    **/
  getLegalInformation({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/legal`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get navigation
    * @description: Use this API to fetch a navigation
    * @param {Object} arg - arg object.
    
    **/
  getNavigations({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/navigations/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Page by slug
    * @description: Use this API to fetch a custom page using `slug`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The `slug` of a page. Use this parameter to retrieve a particular page
    
    **/
  getPage({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/pages/${slug}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get seo of application
    * @description: Get seo of application
    * @param {Object} arg - arg object.
    
    **/
  getSeoConfiguration({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/seo`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get slideshow by slug
    * @description: Use this API to fetch a slideshow using `slug`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The `slug` of a slideshow. Use this parameter to retrieve a particular slideshow
    
    **/
  getSlideshow({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/slideshow/${slug}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get support information
    * @description: Get contact details for customer support. Including emails and phone numbers
    * @param {Object} arg - arg object.
    
    **/
  getSupportInformation({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/support`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Tags for application
    * @description: 
    * @param {Object} arg - arg object.
    
    **/
  getTags({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/tags`,
      query,
      undefined
    );
  }
}

class Communication {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get communication consent
    * @description: Get communication consent
    * @param {Object} arg - arg object.
    
    **/
  getCommunicationConsent({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/communication/v1.0/consent`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Upsert communication consent
   * @description: Upsert communication consent
   * @param {Object} arg - arg object.
   * @param {CommunicationConsentReq} arg.body
   **/
  upsertCommunicationConsent({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/communication/v1.0/consent`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Upsert push token of a user
   * @description: Upsert push token of a user
   * @param {Object} arg - arg object.
   * @param {PushtokenReq} arg.body
   **/
  upsertAppPushtoken({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/communication/v1.0/pn-token`,
      query,
      body
    );
  }
}

class Share {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Create application QR Code
    * @description: Create application QR Code
    * @param {Object} arg - arg object.
    
    **/
  getApplicationQRCode({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Create product QR Code
    * @description: Create product QR Code
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product
    
    **/
  getProductQRCodeBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/products/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Create collection QR Code
    * @description: Create collection QR Code
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a collection
    
    **/
  getCollectionQRCodeBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/collection/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Create url QR Code
    * @description: Create url QR Code
    * @param {Object} arg - arg object.
    * @param {string} arg.url - Url
    
    **/
  getUrlQRCode({ url } = {}) {
    const query = {};
    query["url"] = url;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/url/`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Create short link
   * @description: Create short link
   * @param {Object} arg - arg object.
   * @param {ShortLinkReq} arg.body
   **/
  createShortLink({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/links/short-link/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get short link by hash
    * @description: Get short link by hash
    * @param {Object} arg - arg object.
    * @param {string} arg.hash - Hash of short link
    
    **/
  getShortLinkByHash({ hash } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/share/v1.0/links/short-link/${hash}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get original link by hash
    * @description: Get original link by hash
    * @param {Object} arg - arg object.
    * @param {string} arg.hash - Hash of short link
    
    **/
  getOriginalShortLinkByHash({ hash } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/share/v1.0/links/short-link/${hash}/original/`,
      query,
      undefined
    );
  }
}

class FileStorage {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
    * @description: Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `/v1.0/uploads/{namespace}/start`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `/v1.0/uploads/{namespace}/start` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `/v1.0/uploads/{namespace}/complete` api to complete the upload process.
This operation will return the url for the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {StartRequest} arg.body
    **/
  startUpload({ namespace, body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/assets/v1.0/namespaces/${namespace}/upload/start/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
    * @description: Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `/v1.0/uploads/{namespace}/start`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `/v1.0/uploads/{namespace}/start` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `/v1.0/uploads/{namespace}/complete` api to complete the upload process.
This operation will return the url for the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {StartResponse} arg.body
    **/
  completeUpload({ namespace, body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/assets/v1.0/namespaces/${namespace}/upload/complete/`,
      query,
      body
    );
  }
}

class Configuration {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get current application details
    * @description: Get current application details.
    * @param {Object} arg - arg object.
    
    **/
  getApplication({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/application`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get application, owner and seller information
    * @description: Get application information with owner and seller basic details
    * @param {Object} arg - arg object.
    
    **/
  getOwnerInfo({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/about`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get basic application details
    * @description: Get basic application details like name
    * @param {Object} arg - arg object.
    
    **/
  getBasicDetails({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get integration tokens
    * @description: Get tokens for multiple integrations like Facebook, Googlemaps, Segment, Firebase, etc. Note: token values are encrypted with AES encryption using secret key. Kindly reach to developers for secret key.
    * @param {Object} arg - arg object.
    
    **/
  getIntegrationTokens({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/token`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get deployment meta stores
    * @description: Get deployment meta stores.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    * @param {string} [arg.q] - Search ordering store by name or store code
    
    **/
  getOrderingStores({ pageNo, pageSize, q } = {}) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;
    query["q"] = q;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/ordering-store/stores`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get features of application
    * @description: Get features of application
    * @param {Object} arg - arg object.
    
    **/
  getFeatures({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/feature`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get application information
    * @description: Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
    * @param {Object} arg - arg object.
    
    **/
  getContactInfo({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/information`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get application enabled currencies
    * @description: Get currency list for allowed currencies under current application
    * @param {Object} arg - arg object.
    
    **/
  getCurrencies({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/currencies`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get currency by id
    * @description: Get currency object with symbol and name information by id.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Currency object id
    
    **/
  getCurrencyById({ id } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/currency/${id}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of languages
    * @description: Get list of supported languages under application.
    * @param {Object} arg - arg object.
    
    **/
  getLanguages({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/languages`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Get ordering store signed cookie on selection of ordering store. This will be used by cart service to verify coupon against selected ordering store in cart.
   * @description: Get ordering store signed cookie on selection of ordering store.
   * @param {Object} arg - arg object.
   * @param {OrderingStoreSelectRequest} arg.body
   **/
  getOrderingStoreCookie({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/configuration/v1.0/ordering-store/select`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Unset ordering store signed cookie on change of sales channel selection via domain in universal fynd store app.
    * @description: Unset ordering store cookie.
    * @param {Object} arg - arg object.
    
    **/
  removeOrderingStoreCookie({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/configuration/v1.0/ordering-store/select`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Staff List.
    * @description: Get a staff list based on the user's session token passed in the header.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.orderIncent] - This is to check which staff members are applicable for order incentives.
    * @param {number} [arg.orderingStore] - This is to filter staff members from only selected ordering store.
    * @param {string} [arg.user] - Get single staff member details using staff user mongo id
    
    **/
  getAppStaffs({ orderIncent, orderingStore, user } = {}) {
    const query = {};
    query["order_incent"] = orderIncent;
    query["ordering_store"] = orderingStore;
    query["user"] = user;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/staff`,
      query,
      undefined
    );
  }
}

class Payment {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get payment gateway keys
    * @description: Get payment gateway (key, secrets, merchant, sdk/api detail) to complete payment at front-end.
    * @param {Object} arg - arg object.
    * @param {string} arg.xApiToken - api token
    * @param {boolean} [arg.refresh] - refresh cache
    
    **/
  getAggregatorsConfig({ xApiToken, refresh } = {}) {
    const query = {};
    query["refresh"] = refresh;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/config/aggregators/key`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Attach a saved card to customer.
   * @description: Attach a saved card to customer at payment gateway i.e stripe and refresh card cache.
   * @param {Object} arg - arg object.
   * @param {AttachCardRequest} arg.body
   **/
  attachCardToCustomer({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/card/attach`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Fetch active payment gateway for card
    * @description: Fetch active payment gateway along with customer id for cards payments.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.refresh] - 
    
    **/
  getActiveCardAggregator({ refresh } = {}) {
    const query = {};
    query["refresh"] = refresh;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/card/aggregator`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch the list of saved cards of user.
    * @description: Fetch the list of saved cards of user from active payment gateway.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.forceRefresh] - 
    
    **/
  getActiveUserCards({ forceRefresh } = {}) {
    const query = {};
    query["force_refresh"] = forceRefresh;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/cards`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Delete an user card.
   * @description: Delete an added user card on payment gateway and remove from cache.
   * @param {Object} arg - arg object.
   * @param {DeletehCardRequest} arg.body
   **/
  deleteUserCard({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/card/remove`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Validate customer for payment.
   * @description: Validate customer for payment i.e Simpl paylater, Rupifi loan.
   * @param {Object} arg - arg object.
   * @param {ValidateCustomerRequest} arg.body
   **/
  verifyCustomerForPayment({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/customer/validation`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Verify and charge payment
   * @description: Verify and charge payment server to server for Simpl & Mswipe.
   * @param {Object} arg - arg object.
   * @param {ChargeCustomerRequest} arg.body
   **/
  verifyAndChargePayment({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/confirm/charge`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Payment Initialisation server to server for UPI and BharatQR.
   * @description: Payment Initialisation for UPI & BharatQR code, UPI requests to app and QR code to be displayed on screen.
   * @param {Object} arg - arg object.
   * @param {PaymentInitializationRequest} arg.body
   **/
  initialisePayment({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/request`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Continous polling to check status of payment on server.
   * @description: Continous polling on interval to check status of payment untill timeout.
   * @param {Object} arg - arg object.
   * @param {PaymentStatusUpdateRequest} arg.body
   **/
  checkAndUpdatePaymentStatus({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/confirm/polling`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get All Valid Payment Options
    * @description: Use this API to get Get All Valid Payment Options for making payment
    * @param {Object} arg - arg object.
    * @param {number} arg.amount - Payment amount
    * @param {string} arg.cartId - Cart id
    * @param {string} arg.pincode - Pincode
    * @param {string} arg.checkoutMode - Checkout mode
    * @param {boolean} [arg.refresh] - 
    * @param {string} [arg.assignCardId] - selected card id
    * @param {string} [arg.userDetails] - URIencoded json annonymous user
    
    **/
  getPaymentModeRoutes({
    amount,
    cartId,
    pincode,
    checkoutMode,
    refresh,
    assignCardId,
    userDetails,
  } = {}) {
    const query = {};
    query["amount"] = amount;
    query["cart_id"] = cartId;
    query["pincode"] = pincode;
    query["checkout_mode"] = checkoutMode;
    query["refresh"] = refresh;
    query["assign_card_id"] = assignCardId;
    query["user_details"] = userDetails;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/payment/options`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get All Valid Payment Options for POS
    * @description: Use this API to get Get All Valid Payment Options for making payment
    * @param {Object} arg - arg object.
    * @param {number} arg.amount - Payment amount
    * @param {string} arg.cartId - Cart id
    * @param {string} arg.pincode - Pincode
    * @param {string} arg.checkoutMode - Checkout mode
    * @param {boolean} [arg.refresh] - 
    * @param {string} [arg.assignCardId] - selected card id
    * @param {string} arg.orderType - Order type
    * @param {string} [arg.userDetails] - URIencoded json annonymous user
    
    **/
  getPosPaymentModeRoutes({
    amount,
    cartId,
    pincode,
    checkoutMode,
    orderType,
    refresh,
    assignCardId,
    userDetails,
  } = {}) {
    const query = {};
    query["amount"] = amount;
    query["cart_id"] = cartId;
    query["pincode"] = pincode;
    query["checkout_mode"] = checkoutMode;
    query["refresh"] = refresh;
    query["assign_card_id"] = assignCardId;
    query["order_type"] = orderType;
    query["user_details"] = userDetails;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/payment/options/pos`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List User Beneficiary
    * @description: Get all active  beneficiary details added by the user for refund
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - 
    
    **/
  getUserBeneficiariesDetail({ orderId } = {}) {
    const query = {};
    query["order_id"] = orderId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/refund/user/beneficiary`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Ifsc Code Verification
    * @description: Get True/False for correct IFSC Code for adding bank details for refund
    * @param {Object} arg - arg object.
    * @param {string} [arg.ifscCode] - 
    
    **/
  verifyIfscCode({ ifscCode } = {}) {
    const query = {};
    query["ifsc_code"] = ifscCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/ifsc-code/verify`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List Order Beneficiary
    * @description: Get all active  beneficiary details added by the user for refund
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - 
    
    **/
  getOrderBeneficiariesDetail({ orderId } = {}) {
    const query = {};
    query["order_id"] = orderId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/refund/order/beneficiaries`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Save Beneficiary details on otp validation.
   * @description: Save Beneficiary details on otp validation.
   * @param {Object} arg - arg object.
   * @param {AddBeneficiaryViaOtpVerificationRequest} arg.body
   **/
  verifyOtpAndAddBeneficiaryForBank({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/verification/bank`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Save bank details for cancelled/returned order
   * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
   * @param {Object} arg - arg object.
   * @param {AddBeneficiaryDetailsRequest} arg.body
   **/
  addBeneficiaryDetails({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/account`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Send Otp on Adding wallet beneficiary
   * @description: Send Otp on Adding wallet beneficiary for user mobile verification
   * @param {Object} arg - arg object.
   * @param {WalletOtpRequest} arg.body
   **/
  verifyOtpAndAddBeneficiaryForWallet({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/verification/wallet`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Mark Default Beneficiary For Refund
   * @description: Mark Default Beneficiary ot of all Beneficiary Details for Refund
   * @param {Object} arg - arg object.
   * @param {SetDefaultBeneficiaryRequest} arg.body
   **/
  updateDefaultBeneficiary({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/beneficiary/default`,
      query,
      body
    );
  }
}

class Order {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get Orders for application based on application Id
    * @description: Get Orders
    * @param {Object} arg - arg object.
    * @param {string} [arg.pageNo] - Current page number
    * @param {string} [arg.pageSize] - Page limit
    * @param {string} [arg.fromDate] - From Date
    * @param {string} [arg.toDate] - To Date
    
    **/
  getOrders({ pageNo, pageSize, fromDate, toDate } = {}) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;
    query["from_date"] = fromDate;
    query["to_date"] = toDate;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Order by order id for application based on application Id
    * @description: Get Order By Fynd Order Id
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - Order Id
    
    **/
  getOrderById({ orderId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/${orderId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Shipment by shipment id and order id for application based on application Id
    * @description: Get Shipment
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - Shipment Id
    
    **/
  getShipmentById({ shipmentId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Shipment reasons by shipment id and order id for application based on application Id
    * @description: Get Shipment Reasons
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - Shipment Id
    
    **/
  getShipmentReasons({ shipmentId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}/reasons`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update Shipment status by shipment id and order id for application based on application Id
   * @description: Update Shipment Status
   * @param {Object} arg - arg object.
   * @param {string} arg.shipmentId - Shipment Id
   * @param {ShipmentStatusUpdateBody} arg.body
   **/
  updateShipmentStatus({ shipmentId, body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}/status`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Track Shipment by shipment id and order id for application based on application Id
    * @description: Shipment Track
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - Shipment Id
    
    **/
  trackShipment({ shipmentId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}/track`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get POS Order by order id for application based on application Id
    * @description: Get Order By Fynd Order Id
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - Order Id
    
    **/
  getPosOrderById({ orderId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/pos-order/${orderId}`,
      query,
      undefined
    );
  }
}

class Rewards {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   *
   * @summary: Get reward points that could be earned on any catalogue product.
   * @description: Evaluate the amount of reward points that could be earned on any catalogue product.
   * @param {Object} arg - arg object.
   * @param {CatalogueOrderRequest} arg.body
   **/
  getPointsOnProduct({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/rewards/v1.0/catalogue/offer/order/`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Calculates the discount on order-amount based on amount ranges configured in order_discount reward.
   * @description: Calculates the discount on order-amount based on amount ranges configured in order_discount reward.
   * @param {Object} arg - arg object.
   * @param {OrderDiscountRequest} arg.body
   **/
  getOrderDiscount({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/rewards/v1.0/user/offers/order-discount/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Total available points of a user for current application
    * @description: Total available points of a user for current application
    * @param {Object} arg - arg object.
    
    **/
  getUserPoints({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/rewards/v1.0/user/points`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of points transactions.
    * @description: Get list of points transactions.
The list of points history is paginated.
    * @param {Object} arg - arg object.
    * @param {string} [arg.pageId] - PageID is the ID of the requested page. For first request it should be kept empty.
    * @param {number} [arg.pageSize] - PageSize is the number of requested items in response.
    
    **/
  getUserPointsHistory({ pageId, pageSize } = {}) {
    const query = {};
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/rewards/v1.0/user/points/history/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: User's referral details.
    * @description: User's referral details.
    * @param {Object} arg - arg object.
    
    **/
  getUserReferralDetails({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/rewards/v1.0/user/referral/`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Redeems referral code and credits points to users points account.
   * @description: Redeems referral code and credits points to users points account.
   * @param {Object} arg - arg object.
   * @param {RedeemReferralCodeRequest} arg.body
   **/
  redeemReferralCode({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/rewards/v1.0/user/referral/redeem/`,
      query,
      body
    );
  }
}

class Feedback {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   *
   * @summary: post a new abuse request
   * @description: Report a new abuse for specific entity with description text.
   * @param {Object} arg - arg object.
   * @param {ReportAbuseRequest} arg.body
   **/
  createAbuseReport({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/abuse`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update abuse details
   * @description: Update the abuse details like status and description text.
   * @param {Object} arg - arg object.
   * @param {UpdateAbuseStatusRequest} arg.body
   **/
  updateAbuseReport({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/abuse`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get list of abuse data
    * @description: Get the list of abuse data from entity type and entity ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityId - entity id
    * @param {string} arg.entityType - entity type
    * @param {string} [arg.id] - abuse id
    * @param {string} [arg.pageId] - pagination page id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getAbuseReports({ entityId, entityType, id, pageId, pageSize } = {}) {
    const query = {};
    query["id"] = id;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/abuse/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of attribute data
    * @description: Provides a list of all attribute data.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - pagination page number
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getAttributes({ pageNo, pageSize } = {}) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/attributes`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add a new attribute request
   * @description: Add a new attribute with its name, slug and description.
   * @param {Object} arg - arg object.
   * @param {SaveAttributeRequest} arg.body
   **/
  createAttribute({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/attributes`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get single attribute data
    * @description: Get a single attribute data from a given slug.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug of attribute
    
    **/
  getAttribute({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/attributes/${slug}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update attribute details
   * @description: Update the attribute's name and description.
   * @param {Object} arg - arg object.
   * @param {string} arg.slug - Slug of attribute
   * @param {UpdateAttributeRequest} arg.body
   **/
  updateAttribute({ slug, body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/attributes/${slug}`,
      query,
      body
    );
  }

  /**
   *
   * @summary: post a new comment
   * @description: This is used to add a new comment for specific entity.
   * @param {Object} arg - arg object.
   * @param {CommentRequest} arg.body
   **/
  createComment({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/comment`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update comment status
   * @description: Update the comment status (active/approve) or text.
   * @param {Object} arg - arg object.
   * @param {UpdateCommentRequest} arg.body
   **/
  updateComment({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/comment`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get list of comments
    * @description: Get the list of comments from specific entity type.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - entity type
    * @param {string} [arg.id] - comment id
    * @param {string} [arg.entityId] - entity id
    * @param {string} [arg.userId] - user id - flag/filter to get comments for user
    * @param {string} [arg.pageId] - pagination page id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getComments({ entityType, id, entityId, userId, pageId, pageSize } = {}) {
    const query = {};
    query["id"] = id;
    query["entity_id"] = entityId;
    query["user_id"] = userId;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/comment/entity/${entityType}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Checks eligibility and cloud media config
    * @description: Checks eligibility to rate and review and cloud media configuration
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - entity type
    * @param {string} arg.entityId - entity id
    
    **/
  checkEligibility({ entityType, entityId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/config/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Delete Media
    * @description: Delete Media for the given entity IDs.
    * @param {Object} arg - arg object.
    
    **/
  deleteMedia({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/feedback/v1.0/media/`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Media
   * @description: Add Media list for specific entity.
   * @param {Object} arg - arg object.
   * @param {AddMediaListRequest} arg.body
   **/
  createMedia({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/media/`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Media
   * @description: Update Media (archive/approve) for the given entity.
   * @param {Object} arg - arg object.
   * @param {UpdateMediaListRequest} arg.body
   **/
  updateMedia({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/media/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get Media
    * @description: Get Media from the given entity type and entity ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - entity type
    * @param {string} arg.entityId - entity id
    * @param {string} [arg.id] - vote id
    * @param {string} [arg.pageId] - pagination page id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getMedias({ entityType, entityId, id, pageId, pageSize } = {}) {
    const query = {};
    query["id"] = id;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/media/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a review summary
    * @description: Review summary gives ratings and attribute metrics of a review per entity
It gives following response data: review count, rating average. review metrics / attribute rating metrics which contains name, type, average and count.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - entity type
    * @param {string} arg.entityId - entity id
    * @param {string} [arg.id] - review summary identifier
    * @param {string} [arg.pageId] - pagination page id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getReviewSummaries({ entityType, entityId, id, pageId, pageSize } = {}) {
    const query = {};
    query["id"] = id;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/rating/summary/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Add customer reviews
    * @description: Add customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.
    * @param {Object} arg - arg object.
    * @param {UpdateReviewRequest} arg.body
    **/
  createReview({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/review/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Update customer reviews
    * @description: Update customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.
    * @param {Object} arg - arg object.
    * @param {UpdateReviewRequest} arg.body
    **/
  updateReview({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/review/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get list of customer reviews
    * @description: This is used to get the list of customer reviews based on entity and provided filters.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - entity type
    * @param {string} arg.entityId - entity id
    * @param {string} [arg.id] - review id
    * @param {string} [arg.userId] - user id
    * @param {string} [arg.media] - media type e.g. image | video | video_file | video_link
    * @param {Array<number>} [arg.rating] - rating filter, 1-5
    * @param {Array<string>} [arg.attributeRating] - attribute rating filter
    * @param {boolean} [arg.facets] - facets (true|false)
    * @param {string} [arg.sort] - sort by : default | top | recent
    * @param {string} [arg.pageId] - pagination page id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getReviews({
    entityType,
    entityId,
    id,
    userId,
    media,
    rating,
    attributeRating,
    facets,
    sort,
    pageId,
    pageSize,
  } = {}) {
    const query = {};
    query["id"] = id;
    query["user_id"] = userId;
    query["media"] = media;
    query["rating"] = rating;
    query["attribute_rating"] = attributeRating;
    query["facets"] = facets;
    query["sort"] = sort;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/review/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the templates for product or l3 type
    * @description: This is used to get the templates details.
    * @param {Object} arg - arg object.
    * @param {string} [arg.templateId] - template id
    * @param {string} [arg.entityId] - entity id
    * @param {string} [arg.entityType] - entity type e.g. product | l3
    
    **/
  getTemplates({ templateId, entityId, entityType } = {}) {
    const query = {};
    query["template_id"] = templateId;
    query["entity_id"] = entityId;
    query["entity_type"] = entityType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/template/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Create a new question
    * @description: This is used to create a new question with following data:
tags, text, type, choices for MCQ type questions, maximum length of answer.
    * @param {Object} arg - arg object.
    * @param {CreateQNARequest} arg.body
    **/
  createQuestion({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/template/qna/`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update question
   * @description: This is used to update question's status, tags and choices.
   * @param {Object} arg - arg object.
   * @param {UpdateQNARequest} arg.body
   **/
  updateQuestion({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/template/qna/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get a list of QnA
    * @description: This is used to get a list of questions and its answers.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - entity type
    * @param {string} arg.entityId - entity id
    * @param {string} [arg.id] - qna id
    * @param {boolean} [arg.showAnswer] - show answer flag
    * @param {string} [arg.pageId] - pagination page id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getQuestionAndAnswers({
    entityType,
    entityId,
    id,
    showAnswer,
    pageId,
    pageSize,
  } = {}) {
    const query = {};
    query["id"] = id;
    query["show_answer"] = showAnswer;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/template/qna/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of votes
    * @description: This is used to get the list of votes of a current logged in user. Votes can be filtered using `ref_type` i.e. review | comment.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - vote id
    * @param {string} [arg.refType] - entity type e.g. review | comment
    
    **/
  getVotes({ id, refType } = {}) {
    const query = {};
    query["id"] = id;
    query["ref_type"] = refType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/vote/`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Create a new vote
   * @description: This is used to create a new vote and the actions can be upvote or downvote.
   * @param {Object} arg - arg object.
   * @param {VoteRequest} arg.body
   **/
  createVote({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/vote/`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update vote
   * @description: This is used to update the vote and the actions can be upvote or downvote.
   * @param {Object} arg - arg object.
   * @param {UpdateVoteRequest} arg.body
   **/
  updateVote({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/vote/`,
      query,
      body
    );
  }
}

class PosCart {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Fetch all Items Added to  Cart
    * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {number} [arg.assignCardId] - 
    
    **/
  getCart({ uid, i, b, assignCardId } = {}) {
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;
    query["assign_card_id"] = assignCardId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Last-Modified timestamp
    * @description: Fetch Last-Modified timestamp in header metadata
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCartLastModified({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "head",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Items to Cart
   * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {AddCartRequest} arg.body
   **/
  addItems({ body, i, b } = {}) {
    const query = {};
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Items already added to Cart
   * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {UpdateCartRequest} arg.body
   **/
  updateCart({ body, uid, i, b } = {}) {
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Cart item count
    * @description: Get total count of item present in cart
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  getItemCount({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/basic`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Coupon
    * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCoupons({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Apply Coupon
    * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {boolean} [arg.p] - 
    * @param {number} [arg.uid] - 
    * @param {ApplyCouponRequest} arg.body
    **/
  applyCoupon({ body, i, b, p, uid } = {}) {
    const query = {};
    query["i"] = i;
    query["b"] = b;
    query["p"] = p;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Coupon Applied
    * @description: Remove Coupon applied on the cart by passing uid in request body.
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  removeCoupon({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get discount offers based on quantity
    * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
    * @param {Object} arg - arg object.
    * @param {number} [arg.itemId] - Item id
    * @param {string} [arg.articleId] - Article mongo id
    * @param {number} [arg.uid] - Item id
    * @param {string} [arg.slug] - Item unique url from product page
    
    **/
  getBulkDiscountOffers({ itemId, articleId, uid, slug } = {}) {
    const query = {};
    query["item_id"] = itemId;
    query["article_id"] = articleId;
    query["uid"] = uid;
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/bulk-price`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Address
    * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {number} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/address`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Address to the account
   * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
   * @param {Object} arg - arg object.
   * @param {Address} arg.body
   **/
  addAddress({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/address`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Fetch Single Address
    * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} arg.id - 
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {number} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update Address alreay added to account
   * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} arg.id - Address id
   * @param {Address} arg.body
   **/
  updateAddress({ id, body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/address/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Address Associated to the account
    * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
    * @param {Object} arg - arg object.
    * @param {number} arg.id - Address id
    
    **/
  removeAddress({ id } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/pos/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Select Address from All Addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {SelectCartAddressRequest} arg.body
   **/
  selectAddress({ body, uid, i, b } = {}) {
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/select-address`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Payment
   * @description: Update Cart Payment for Your Account
   * @param {Object} arg - arg object.
   * @param {string} [arg.uid] -
   * @param {UpdateCartPaymentRequest} arg.body
   **/
  selectPaymentMode({ body, uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/payment`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get Cart Payment for valid coupon
    * @description: Validate coupon for selected payment mode
    * @param {Object} arg - arg object.
    * @param {string} [arg.uid] - 
    * @param {string} [arg.addressId] - 
    * @param {string} [arg.paymentMode] - 
    * @param {string} [arg.paymentIdentifier] - 
    * @param {string} [arg.aggregatorName] - 
    * @param {string} [arg.merchantCode] - 
    
    **/
  validateCouponForPayment({
    uid,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode,
  } = {}) {
    const query = {};
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["payment_mode"] = paymentMode;
    query["payment_identifier"] = paymentIdentifier;
    query["aggregator_name"] = aggregatorName;
    query["merchant_code"] = merchantCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/payment/validate/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get delivery date and options before checkout
    * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pickAtStoreUid] - 
    * @param {number} [arg.orderingStoreId] - 
    * @param {boolean} [arg.p] - Get payment options or not
    * @param {number} [arg.uid] - Cart id
    * @param {number} [arg.addressId] - Address id
    * @param {string} [arg.areaCode] - Destination pincode.
    * @param {string} [arg.orderType] - Order type of shipment
    
    **/
  getShipments({
    pickAtStoreUid,
    orderingStoreId,
    p,
    uid,
    addressId,
    areaCode,
    orderType,
  } = {}) {
    const query = {};
    query["pick_at_store_uid"] = pickAtStoreUid;
    query["ordering_store_id"] = orderingStoreId;
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["area_code"] = areaCode;
    query["order_type"] = orderType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/shipment`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update shipment delivery type and quantity before checkout
   * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created. Update the shipment                      type and quantity as per customer preference for store pick up or home delivery
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.i] - Get items or not
   * @param {boolean} [arg.p] - Get payment options or not
   * @param {number} [arg.uid] - Cart id
   * @param {number} [arg.addressId] - Address id
   * @param {string} [arg.orderType] - Order is hand over or home delivery
   * @param {UpdateCartShipmentRequest} arg.body
   **/
  updateShipments({ body, i, p, uid, addressId, orderType } = {}) {
    const query = {};
    query["i"] = i;
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["order_type"] = orderType;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/shipment`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Checkout Cart
   * @description: Checkout all items in cart to payment and order generation.                        For COD only order will be generated while for other checkout mode                        user will be redirected to payment gateway
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {CartPosCheckoutRequest} arg.body
   **/
  checkoutCart({ body, uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/checkout`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Meta
   * @description: Update cart meta like checkout_mode, gstin.
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] - Cart id received in get cart.
   * @param {CartMetaRequest} arg.body
   **/
  updateCartMeta({ body, uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/meta`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get available delivery modes for cart
    * @description: Get available delivery modes for cart and pick up store uid list. From given pick stores list user can pick up delivery. Use this uid to show store address
    * @param {Object} arg - arg object.
    * @param {string} arg.areaCode - 
    * @param {number} [arg.uid] - 
    
    **/
  getAvailableDeliveryModes({ areaCode, uid } = {}) {
    const query = {};
    query["area_code"] = areaCode;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/available-delivery-mode`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of stores for give uids
    * @description: Get list of stores by providing pick up available store uids.
    * @param {Object} arg - arg object.
    * @param {number} arg.storeUid - 
    
    **/
  getStoreAddressByUid({ storeUid } = {}) {
    const query = {};
    query["store_uid"] = storeUid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/store-address`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Generate Cart sharing link token
   * @description: Generates shared cart snapshot and returns shortlink token
   * @param {Object} arg - arg object.
   * @param {GetShareCartLinkRequest} arg.body
   **/
  getCartShareLink({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/share-cart`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get shared cart snapshot and cart response
    * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    
    **/
  getCartSharedItems({ token } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/share-cart/${token}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Merge or Replace existing cart
    * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    * @param {string} arg.action - Operation to perform on existing cart, whether to merge or replace.
    
    **/
  updateCartWithSharedItems({ token, action } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/share-cart/${token}/${action}`,
      query,
      undefined
    );
  }
}

class Logistic {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   *
   * @summary: Get Tat Product
   * @description: Get Tat Product
   * @param {Object} arg - arg object.
   * @param {GetTatProductReqBody} arg.body
   **/
  getTatProduct({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/logistics/v1.0`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get City from Pincode
    * @description: Get City from Pincode
    * @param {Object} arg - arg object.
    * @param {string} arg.pincode - Pincode
    
    **/
  getPincodeCity({ pincode } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/logistics/v1.0/pincode/${pincode}`,
      query,
      undefined
    );
  }
}

module.exports = {
  Catalog,
  Cart,
  Lead,
  Theme,
  User,
  Content,
  Communication,
  Share,
  FileStorage,
  Configuration,
  Payment,
  Order,
  Rewards,
  Feedback,
  PosCart,
  Logistic,
};
