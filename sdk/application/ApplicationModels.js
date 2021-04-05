const Joi = require("joi");
class Validator {
  static ProductDetailAttribute() {
    return Joi.object({
      value: Joi.string(),

      key: Joi.string(),

      type: Joi.string(),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      title: Joi.string(),

      details: Joi.array().items(this.ProductDetailAttribute()),
    });
  }

  static Media() {
    return Joi.object({
      url: Joi.string(),

      type: Joi.string(),
    });
  }

  static ProductListingActionPage() {
    return Joi.object({
      query: Joi.object(),

      type: Joi.string(),
    });
  }

  static ProductListingAction() {
    return Joi.object({
      type: Joi.string(),

      page: this.ProductListingActionPage(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      name: Joi.string(),

      logo: this.Media(),

      uid: Joi.number(),

      action: this.ProductListingAction(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      slug: Joi.string(),

      tryouts: Joi.array().items(Joi.string()),

      ratingCount: Joi.number(),

      shortDescription: Joi.string(),

      highlights: Joi.array().items(Joi.string()),

      groupedAttributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      similars: Joi.array().items(Joi.string()),

      imageNature: Joi.string(),

      rating: Joi.number(),

      medias: Joi.array().items(this.Media()),

      hasVariant: Joi.boolean(),

      name: Joi.string(),

      brand: this.ProductBrand(),

      categories: Joi.array().items(this.ProductBrand()),

      description: Joi.string(),

      itemType: Joi.string(),

      type: Joi.string(),

      attributes: Joi.object(),

      color: Joi.string(),

      teaserTag: Joi.string(),

      productOnlineDate: Joi.string(),

      uid: Joi.number(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string(),
    });
  }

  static Price() {
    return Joi.object({
      currencyCode: Joi.string(),

      currencySymbol: Joi.string(),

      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      effective: this.Price(),

      marked: this.Price(),
    });
  }

  static ProductSize() {
    return Joi.object({
      display: Joi.string(),

      value: Joi.string(),

      isAvailable: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static ColumnHeader() {
    return Joi.object({
      value: Joi.string(),

      convertable: Joi.boolean(),
    });
  }

  static ColumnHeaders() {
    return Joi.object({
      col1: this.ColumnHeader(),

      col2: this.ColumnHeader(),

      col3: this.ColumnHeader(),

      col5: this.ColumnHeader(),

      col6: this.ColumnHeader(),

      col4: this.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col1: Joi.string(),

      col2: Joi.string(),

      col3: Joi.string(),

      col5: Joi.string(),

      col6: Joi.string(),

      col4: Joi.string(),
    });
  }

  static SizeChart() {
    return Joi.object({
      unit: Joi.string(),

      description: Joi.string(),

      title: Joi.string(),

      headers: this.ColumnHeaders(),

      sizes: Joi.array().items(this.SizeChartValues()),

      image: Joi.string(),

      sizeTip: Joi.string(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      sellable: Joi.boolean(),

      price: this.ProductListingPrice(),

      sizes: Joi.array().items(this.ProductSize()),

      stores: this.ProductSizeStores(),

      sizeChart: this.SizeChart(),

      discount: Joi.string(),
    });
  }

  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string(),

      strategy: Joi.string(),
    });
  }

  static ProductSetDistributionSize() {
    return Joi.object({
      size: Joi.string(),

      pieces: Joi.number(),
    });
  }

  static ProductSetDistribution() {
    return Joi.object({
      sizes: Joi.array().items(this.ProductSetDistributionSize()),
    });
  }

  static ProductSet() {
    return Joi.object({
      quantity: Joi.number(),

      sizeDistribution: this.ProductSetDistribution(),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      currency: Joi.string(),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static Store() {
    return Joi.object({
      name: Joi.string(),

      count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static Seller() {
    return Joi.object({
      name: Joi.string(),

      count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static ProductSizePriceResponse() {
    return Joi.object({
      quantity: Joi.number(),

      discount: Joi.string(),

      articleAssignment: this.ArticleAssignment(),

      set: this.ProductSet(),

      pincode: Joi.number(),

      pricePerPrice: this.ProductStockPrice(),

      store: this.Store(),

      itemType: Joi.string(),

      articleId: Joi.string(),

      sellerCount: Joi.number(),

      seller: this.Seller(),

      price: this.ProductStockPrice(),

      strategyWiseListing: Joi.array().items(Joi.object()),

      specialBadge: Joi.string(),

      longLat: Joi.array().items(Joi.number()),
    });
  }

  static Page() {
    return Joi.object({
      itemTotal: Joi.number(),

      hasPrevious: Joi.boolean(),

      current: Joi.number(),

      hasNext: Joi.boolean(),

      size: Joi.number(),

      nextId: Joi.string(),

      type: Joi.string(),
    });
  }

  static ProductSizeSellerFilter() {
    return Joi.object({
      name: Joi.string(),

      value: Joi.string(),

      isSelected: Joi.boolean(),
    });
  }

  static ProductSizeSellersResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductSizePriceResponse()),

      page: this.Page(),

      sortOn: Joi.array().items(this.ProductSizeSellerFilter()),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      display: Joi.string(),

      key: Joi.string(),

      description: Joi.string(),
    });
  }

  static ProductsComparisonResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductDetail()),

      attributesMetadata: Joi.array().items(this.AttributeDetail()),
    });
  }

  static ProductCompareResponse() {
    return Joi.object({
      title: Joi.string(),

      subtitle: Joi.string(),

      items: Joi.array().items(this.ProductDetail()),

      attributesMetadata: Joi.array().items(this.AttributeDetail()),
    });
  }

  static ProductFrequentlyComparedSimilarResponse() {
    return Joi.object({
      similars: Joi.array().items(this.ProductCompareResponse()),
    });
  }

  static ProductSimilarItem() {
    return Joi.object({
      title: Joi.string(),

      subtitle: Joi.string(),

      items: Joi.array().items(this.ProductDetail()),
    });
  }

  static SimilarProductByTypeResponse() {
    return Joi.object({
      similars: Joi.array().items(this.ProductSimilarItem()),
    });
  }

  static ProductVariantItemResponse() {
    return Joi.object({
      slug: Joi.string(),

      value: Joi.string(),

      medias: Joi.array().items(this.Media()),

      action: this.ProductListingAction(),

      color: Joi.string(),

      name: Joi.string(),

      isAvailable: Joi.boolean(),

      colorName: Joi.string(),

      uid: Joi.number(),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      header: Joi.string(),

      items: Joi.array().items(this.ProductVariantItemResponse()),

      displayType: Joi.string(),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(this.ProductVariantResponse()),
    });
  }

  static CompanyDetail() {
    return Joi.object({
      name: Joi.string(),

      id: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      name: Joi.string(),

      city: Joi.string(),

      code: Joi.string(),

      id: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.object(),

      size: Joi.string(),

      company: this.CompanyDetail(),

      itemId: Joi.number(),

      seller: this.Seller(),

      price: this.ProductStockPrice(),

      uid: Joi.string(),

      store: this.StoreDetail(),
    });
  }

  static ProductStockStatusResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductStockStatusItem()),
    });
  }

  static ProductStockPolling() {
    return Joi.object({
      items: Joi.array().items(this.ProductStockStatusItem()),

      page: this.Page(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      slug: Joi.string(),

      tryouts: Joi.array().items(Joi.string()),

      ratingCount: Joi.number(),

      shortDescription: Joi.string(),

      highlights: Joi.array().items(Joi.string()),

      groupedAttributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      similars: Joi.array().items(Joi.string()),

      imageNature: Joi.string(),

      rating: Joi.number(),

      medias: Joi.array().items(this.Media()),

      hasVariant: Joi.boolean(),

      name: Joi.string(),

      brand: this.ProductBrand(),

      price: this.ProductListingPrice(),

      categories: Joi.array().items(this.ProductBrand()),

      sellable: Joi.boolean(),

      description: Joi.string(),

      itemType: Joi.string(),

      type: Joi.string(),

      attributes: Joi.object(),

      color: Joi.string(),

      teaserTag: Joi.string(),

      discount: Joi.string(),

      productOnlineDate: Joi.string(),

      uid: Joi.number(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      currencyCode: Joi.string(),

      value: Joi.string(),

      displayFormat: Joi.string(),

      selectedMin: Joi.number(),

      isSelected: Joi.boolean(),

      selectedMax: Joi.number(),

      currencySymbol: Joi.string(),

      count: Joi.number(),

      queryFormat: Joi.string(),

      display: Joi.string(),

      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string(),

      logo: Joi.string(),

      name: Joi.string(),

      kind: Joi.string(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      values: Joi.array().items(this.ProductFiltersValue()),

      key: this.ProductFiltersKey(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      name: Joi.string(),

      value: Joi.string(),

      isSelected: Joi.boolean(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductListingDetail()),

      filters: Joi.array().items(this.ProductFilters()),

      page: this.Page(),

      sortOn: Joi.array().items(this.ProductSortOn()),
    });
  }

  static ImageUrls() {
    return Joi.object({
      portrait: this.Media(),

      landscape: this.Media(),
    });
  }

  static BrandItem() {
    return Joi.object({
      slug: Joi.string(),

      action: this.ProductListingAction(),

      banners: this.ImageUrls(),

      name: Joi.string(),

      discount: Joi.string(),

      logo: this.Media(),

      uid: Joi.number(),

      departments: Joi.array().items(Joi.string()),
    });
  }

  static BrandListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.BrandItem()),

      page: this.Page(),
    });
  }

  static BrandDetailResponse() {
    return Joi.object({
      name: Joi.string(),

      logo: this.Media(),

      banners: this.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      slug: Joi.string(),

      uid: Joi.number(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string(),

      childs: Joi.array().items(Joi.object()),

      action: this.ProductListingAction(),

      banners: this.ImageUrls(),

      name: Joi.string(),

      uid: Joi.number(),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      items: Joi.array().items(this.CategoryItems()),

      department: Joi.string(),
    });
  }

  static CategoryListingResponse() {
    return Joi.object({
      departments: Joi.array().items(this.DepartmentIdentifier()),

      data: Joi.array().items(this.DepartmentCategoryTree()),
    });
  }

  static CategoryMetaResponse() {
    return Joi.object({
      name: Joi.string(),

      logo: this.Media(),

      banners: this.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductListingDetail()),

      message: Joi.string(),

      page: this.Page(),
    });
  }

  static Department() {
    return Joi.object({
      slug: Joi.string(),

      name: Joi.string(),

      priorityOrder: Joi.number(),

      logo: this.Media(),

      uid: Joi.number(),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(this.Department()),
    });
  }

  static PageQuery() {
    return Joi.object({
      brand: Joi.array().items(Joi.string()),

      category: Joi.array().items(Joi.string()),
    });
  }

  static AutocompletePage() {
    return Joi.object({
      query: this.PageQuery(),

      type: Joi.string(),
    });
  }

  static Action() {
    return Joi.object({
      type: Joi.string(),

      page: this.AutocompletePage(),
    });
  }

  static AutocompleteItem() {
    return Joi.object({
      display: Joi.string(),

      action: this.Action(),

      logo: this.Media(),

      type: Joi.string(),
    });
  }

  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(this.AutocompleteItem()),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      slug: Joi.string(),

      meta: Joi.object(),

      action: this.ProductListingAction(),

      schedule: Joi.object(),

      query: Joi.object(),

      isActive: Joi.boolean(),

      name: Joi.string(),

      tag: Joi.array().items(Joi.string()),

      cron: Joi.object(),

      description: Joi.string(),

      badge: Joi.object(),

      type: Joi.string(),

      appId: Joi.string(),

      logo: this.Media(),

      banners: this.ImageUrls(),

      visibleFacetsKeys: Joi.array().items(Joi.string()),

      allowSort: Joi.boolean(),

      allowFacets: Joi.boolean(),

      uid: Joi.string(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string(),

      isSelected: Joi.boolean(),

      display: Joi.string(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string(),

      isSelected: Joi.boolean(),

      display: Joi.string(),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      tags: Joi.array().items(this.CollectionListingFilterTag()),

      type: Joi.array().items(this.CollectionListingFilterType()),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.GetCollectionDetailNest()),

      filters: this.CollectionListingFilter(),

      page: this.Page(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      slug: Joi.string(),

      cron: Joi.object(),

      meta: Joi.object(),

      description: Joi.string(),

      badge: Joi.object(),

      banners: this.ImageUrls(),

      visibleFacetsKeys: Joi.array().items(Joi.string()),

      name: Joi.string(),

      type: Joi.string(),

      allowSort: Joi.boolean(),

      schedule: Joi.object(),

      allowFacets: Joi.boolean(),

      appId: Joi.string(),

      logo: this.Media(),

      query: Joi.object(),

      isActive: Joi.boolean(),

      tag: Joi.array().items(Joi.string()),
    });
  }

  static GetFollowListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductDetail()),

      page: this.Page(),
    });
  }

  static FollowPostResponse() {
    return Joi.object({
      message: Joi.string(),

      id: Joi.string(),
    });
  }

  static FollowerCountResponse() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static FollowIdsData() {
    return Joi.object({
      products: Joi.array().items(Joi.number()),

      collections: Joi.array().items(Joi.number()),

      brands: Joi.array().items(Joi.number()),
    });
  }

  static FollowIdsResponse() {
    return Joi.object({
      data: this.FollowIdsData(),
    });
  }

  static LatLong() {
    return Joi.object({
      coordinates: Joi.array().items(Joi.number()),

      type: Joi.string(),
    });
  }

  static Store1() {
    return Joi.object({
      storeCode: Joi.string(),

      country: Joi.string(),

      pincode: Joi.number(),

      name: Joi.string(),

      city: Joi.string(),

      address: Joi.string(),

      latLong: this.LatLong(),

      storeEmail: Joi.string(),

      state: Joi.string(),

      uid: Joi.number(),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.Store1()),

      page: this.Page(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currencyCode: Joi.string(),

      currencySymbol: Joi.string(),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      base: this.BasePrice(),

      converted: this.BasePrice(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      uid: Joi.string(),

      quantity: Joi.number(),

      price: this.ArticlePriceInfo(),

      size: Joi.string(),

      type: Joi.string(),

      seller: this.BaseInfo(),

      store: this.BaseInfo(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string()),

      otherStoreQuantity: Joi.number(),

      outOfStock: Joi.boolean(),

      isValid: Joi.boolean(),

      deliverable: Joi.boolean(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      marked: Joi.number(),

      currencyCode: Joi.string(),

      currencySymbol: Joi.string(),

      effective: Joi.number(),

      addOn: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: this.ProductPrice(),

      converted: this.ProductPrice(),
    });
  }

  static ActionQuery() {
    return Joi.object({
      productSlug: Joi.array().items(Joi.string()),
    });
  }

  static ProductAction() {
    return Joi.object({
      type: Joi.string(),

      url: Joi.string(),

      query: this.ActionQuery(),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string(),
    });
  }

  static Image() {
    return Joi.object({
      secureUrl: Joi.string(),

      url: Joi.string(),

      aspectRatio: Joi.string(),
    });
  }

  static Product() {
    return Joi.object({
      uid: Joi.number(),

      brand: this.BaseInfo(),

      action: this.ProductAction(),

      type: Joi.string(),

      slug: Joi.string(),

      categories: Joi.array().items(this.CategoryInfo()),

      name: Joi.string(),

      images: Joi.array().items(this.Image()),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      identifiers: this.CartProductIdentifer(),

      article: this.ProductArticle(),

      availability: this.ProductAvailability(),

      discount: Joi.string(),

      couponMessage: Joi.string(),

      quantity: Joi.number(),

      price: this.ProductPriceInfo(),

      message: Joi.string(),

      bulkOffer: Joi.object(),

      isSet: Joi.boolean(),

      key: Joi.string(),

      product: this.Product(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string(),

      code: Joi.string(),
    });
  }

  static PromiseTimestamp() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static PromiseFormatted() {
    return Joi.object({
      min: Joi.string(),

      max: Joi.string(),
    });
  }

  static ShipmentPromise() {
    return Joi.object({
      timestamp: this.PromiseTimestamp(),

      formatted: this.PromiseFormatted(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currencyCode: Joi.string(),

      message: Joi.array().items(Joi.string()),

      currencySymbol: Joi.string(),

      key: Joi.string(),

      display: Joi.string(),

      value: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string(),

      total: Joi.number(),

      applicable: Joi.number(),

      isApplied: Joi.boolean(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),

      deliveryCharge: Joi.number(),

      youSaved: Joi.number(),

      fyndCash: Joi.number(),

      codCharge: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      isApplied: Joi.boolean(),

      uid: Joi.string(),

      message: Joi.string(),

      type: Joi.string(),

      value: Joi.number(),

      code: Joi.string(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(this.DisplayBreakup()),

      loyaltyPoints: this.LoyaltyPoints(),

      raw: this.RawBreakup(),

      coupon: this.CouponBreakup(),
    });
  }

  static CartResponse() {
    return Joi.object({
      gstin: Joi.string(),

      items: Joi.array().items(this.CartProductInfo()),

      currency: this.CartCurrency(),

      cartId: Joi.number(),

      uid: Joi.string(),

      restrictCheckout: Joi.boolean(),

      message: Joi.string(),

      lastModified: Joi.string(),

      isValid: Joi.boolean(),

      deliveryChargeInfo: Joi.string(),

      comment: Joi.string(),

      deliveryPromise: this.ShipmentPromise(),

      couponText: Joi.string(),

      breakupValues: this.CartBreakup(),

      checkoutMode: Joi.string(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      itemId: Joi.number(),

      quantity: Joi.number(),

      pos: Joi.boolean(),

      sellerId: Joi.number(),

      itemSize: Joi.string(),

      articleId: Joi.string(),

      articleAssignment: Joi.object(),

      display: Joi.string(),

      storeId: Joi.number(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(this.AddProductCart()),
    });
  }

  static AddCartResponse() {
    return Joi.object({
      cart: this.CartResponse(),

      success: Joi.boolean(),

      partial: Joi.boolean(),

      message: Joi.string(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      itemId: Joi.number(),

      identifiers: this.CartProductIdentifer(),

      quantity: Joi.number(),

      itemSize: Joi.string(),

      articleId: Joi.string(),

      itemIndex: Joi.number(),
    });
  }

  static UpdateCartRequest() {
    return Joi.object({
      operation: Joi.string(),

      items: Joi.array().items(this.UpdateProductCart()),
    });
  }

  static UpdateCartResponse() {
    return Joi.object({
      cart: this.CartResponse(),

      success: Joi.boolean(),

      message: Joi.string(),
    });
  }

  static CartItemCountResponse() {
    return Joi.object({
      userCartItemsCount: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total: Joi.number(),

      hasNext: Joi.boolean(),

      current: Joi.number(),

      hasPrevious: Joi.boolean(),

      totalItemCount: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      expiresOn: Joi.string(),

      maxDiscountValue: Joi.number(),

      isApplied: Joi.boolean(),

      minimumCartValue: Joi.number(),

      subTitle: Joi.string(),

      message: Joi.string(),

      isApplicable: Joi.boolean(),

      title: Joi.string(),

      couponValue: Joi.number(),

      couponCode: Joi.string(),
    });
  }

  static GetCouponResponse() {
    return Joi.object({
      page: this.PageCoupon(),

      availableCouponList: Joi.array().items(this.Coupon()),
    });
  }

  static ApplyCouponRequest() {
    return Joi.object({
      couponCode: Joi.string(),
    });
  }

  static OfferSeller() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string(),
    });
  }

  static OfferPrice() {
    return Joi.object({
      bulkEffective: Joi.number(),

      marked: Joi.number(),

      currencyCode: Joi.string(),

      currencySymbol: Joi.string(),

      effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      total: Joi.number(),

      best: Joi.boolean(),

      quantity: Joi.number(),

      margin: Joi.number(),

      autoApplied: Joi.boolean(),

      price: this.OfferPrice(),

      type: Joi.string(),
    });
  }

  static BulkPriceOffer() {
    return Joi.object({
      seller: this.OfferSeller(),

      offers: Joi.array().items(this.OfferItem()),
    });
  }

  static BulkPriceResponse() {
    return Joi.object({
      data: Joi.array().items(this.BulkPriceOffer()),
    });
  }

  static GeoLocation() {
    return Joi.object({
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      isActive: Joi.boolean(),

      meta: Joi.object(),

      country: Joi.string(),

      checkoutMode: Joi.string(),

      name: Joi.string(),

      landmark: Joi.string(),

      uid: Joi.number(),

      areaCode: Joi.string(),

      state: Joi.string(),

      phone: Joi.string(),

      addressType: Joi.string(),

      geoLocation: this.GeoLocation(),

      isDefaultAddress: Joi.boolean(),

      tags: Joi.array().items(Joi.object()),

      areaCodeSlug: Joi.string(),

      email: Joi.string(),

      address: Joi.string(),

      userId: Joi.string(),

      area: Joi.string(),

      city: Joi.string(),

      countryCode: Joi.string(),
    });
  }

  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(this.Address()),
    });
  }

  static SaveAddressResponse() {
    return Joi.object({
      addressId: Joi.number(),

      success: Joi.string(),

      isDefaultAddress: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      addressId: Joi.number(),

      success: Joi.boolean(),

      isUpdated: Joi.boolean(),

      isDefaultAddress: Joi.boolean(),
    });
  }

  static DeleteAddressResponse() {
    return Joi.object({
      addressId: Joi.number(),

      isDeleted: Joi.boolean(),
    });
  }

  static SelectCartAddressRequest() {
    return Joi.object({
      addressId: Joi.string(),

      billingAddressId: Joi.number(),

      uid: Joi.string(),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      uid: Joi.number(),

      paymentMode: Joi.string(),

      merchantCode: Joi.string(),

      aggregatorName: Joi.string(),

      paymentIdentifier: Joi.string(),

      addressId: Joi.number(),
    });
  }

  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),

      displayMessageEn: Joi.string(),

      valid: Joi.boolean(),

      code: Joi.string(),
    });
  }

  static PaymentUpdate() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string(),

      couponValidity: this.CouponValidity(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      dpOptions: Joi.object(),

      fulfillmentId: Joi.number(),

      items: Joi.array().items(this.CartProductInfo()),

      fulfillmentType: Joi.string(),

      orderType: Joi.string(),

      dpId: Joi.number(),

      boxType: Joi.string(),

      shipments: Joi.number(),

      promise: this.ShipmentPromise(),

      shipmentType: Joi.string(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      gstin: Joi.string(),

      currency: this.CartCurrency(),

      cartId: Joi.number(),

      uid: Joi.string(),

      restrictCheckout: Joi.boolean(),

      message: Joi.string(),

      shipments: Joi.array().items(this.ShipmentResponse()),

      lastModified: Joi.string(),

      isValid: Joi.boolean(),

      deliveryChargeInfo: Joi.string(),

      comment: Joi.string(),

      deliveryPromise: this.ShipmentPromise(),

      couponText: Joi.string(),

      breakupValues: this.CartBreakup(),

      checkoutMode: Joi.string(),
    });
  }

  static CartCheckoutRequest() {
    return Joi.object({
      orderingStore: Joi.number(),

      paymentMode: Joi.string(),

      merchantCode: Joi.string(),

      callbackUrl: Joi.string(),

      paymentParams: Joi.object(),

      billingAddress: Joi.object(),

      paymentAutoConfirm: Joi.boolean(),

      meta: Joi.object(),

      paymentIdentifier: Joi.string(),

      fyndstoreEmpId: Joi.string(),

      extraMeta: Joi.object(),

      addressId: Joi.number(),

      billingAddressId: Joi.number(),

      staff: Joi.object(),

      deliveryAddress: Joi.object(),

      aggregator: Joi.string(),
    });
  }

  static CheckCart() {
    return Joi.object({
      items: Joi.array().items(this.CartProductInfo()),

      currency: this.CartCurrency(),

      cartId: Joi.number(),

      message: Joi.string(),

      codMessage: Joi.string(),

      codCharges: Joi.number(),

      checkoutMode: Joi.string(),

      uid: Joi.string(),

      deliveryChargeOrderValue: Joi.number(),

      deliveryChargeInfo: Joi.string(),

      success: Joi.boolean(),

      deliveryPromise: this.ShipmentPromise(),

      deliveryCharges: Joi.number(),

      storeCode: Joi.string(),

      couponText: Joi.string(),

      codAvailable: Joi.boolean(),

      restrictCheckout: Joi.boolean(),

      storeEmps: Joi.array().items(Joi.object()),

      lastModified: Joi.string(),

      isValid: Joi.boolean(),

      orderId: Joi.string(),

      comment: Joi.string(),

      gstin: Joi.string(),

      errorMessage: Joi.string(),

      userType: Joi.string(),

      breakupValues: this.CartBreakup(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      cart: this.CheckCart(),

      message: Joi.string(),

      success: Joi.boolean(),

      data: Joi.object(),

      orderId: Joi.string(),

      appInterceptUrl: Joi.string(),

      callbackUrl: Joi.string(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      gstin: Joi.string(),

      pickUpCustomerDetails: Joi.object(),

      comment: Joi.string(),

      checkoutMode: Joi.string(),
    });
  }

  static CartMetaResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static CartMetaMissingResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string()),
    });
  }

  static GetShareCartLinkRequest() {
    return Joi.object({
      meta: Joi.object(),

      uid: Joi.number(),
    });
  }

  static GetShareCartLinkResponse() {
    return Joi.object({
      token: Joi.string(),

      shareUrl: Joi.string(),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      user: Joi.object(),

      source: Joi.object(),

      token: Joi.string(),

      meta: Joi.object(),

      createdOn: Joi.string(),
    });
  }

  static SharedCart() {
    return Joi.object({
      gstin: Joi.string(),

      items: Joi.array().items(this.CartProductInfo()),

      currency: this.CartCurrency(),

      cartId: Joi.number(),

      uid: Joi.string(),

      restrictCheckout: Joi.boolean(),

      message: Joi.string(),

      lastModified: Joi.string(),

      isValid: Joi.boolean(),

      deliveryChargeInfo: Joi.string(),

      comment: Joi.string(),

      deliveryPromise: this.ShipmentPromise(),

      sharedCartDetails: this.SharedCartDetails(),

      couponText: Joi.string(),

      breakupValues: this.CartBreakup(),

      checkoutMode: Joi.string(),
    });
  }

  static SharedCartResponse() {
    return Joi.object({
      cart: this.SharedCart(),

      error: Joi.string(),
    });
  }

  static TicketList() {
    return Joi.object({
      items: Joi.array().items(this.Ticket()),

      filters: this.Filter(),

      page: this.Page(),
    });
  }

  static TicketHistoryList() {
    return Joi.object({
      docs: Joi.array().items(this.TicketHistory()),

      limit: Joi.number(),

      page: Joi.number(),

      pages: Joi.number(),

      total: Joi.number(),
    });
  }

  static CustomFormList() {
    return Joi.object({
      docs: Joi.array().items(this.CustomForm()),

      limit: Joi.number(),

      page: Joi.number(),

      pages: Joi.number(),

      total: Joi.number(),
    });
  }

  static CreateCustomFormPayload() {
    return Joi.object({
      slug: Joi.string(),

      title: Joi.string(),

      inputs: Joi.array().items(Joi.object()),

      description: Joi.string(),

      headerImage: Joi.string(),

      shouldNotify: Joi.boolean(),

      successMessage: Joi.string(),

      pollForAssignment: this.PollForAssignment(),
    });
  }

  static EditCustomFormPayload() {
    return Joi.object({
      title: Joi.string(),

      inputs: Joi.array().items(Joi.object()),

      description: Joi.string(),

      headerImage: Joi.string(),

      shouldNotify: Joi.boolean(),

      loginRequired: Joi.boolean(),

      successMessage: Joi.string(),

      pollForAssignment: this.PollForAssignment(),
    });
  }

  static EditTicketPayload() {
    return Joi.object({
      content: this.TicketContent(),

      category: Joi.string(),

      source: Joi.string(),

      status: Joi.string(),

      priority: Joi.string(),

      assignedTo: this.AgentChangePayload(),

      tags: Joi.array().items(Joi.string()),
    });
  }

  static AgentChangePayload() {
    return Joi.object({
      agentId: Joi.string(),
    });
  }

  static CreateVideoRoomResponse() {
    return Joi.object({
      uniqueName: Joi.string(),
    });
  }

  static CloseVideoRoomResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static CreateVideoRoomPayload() {
    return Joi.object({
      uniqueName: Joi.string(),

      notify: Joi.array().items(Joi.object()),
    });
  }

  static Filter() {
    return Joi.object({
      priorities: Joi.array().items(this.Priority()),

      categories: Joi.array().items(this.TicketCategory()),

      statuses: Joi.array().items(this.Status()),

      assignees: Joi.array().items(Joi.object()),
    });
  }

  static TicketHistoryPayload() {
    return Joi.object({
      value: Joi.object(),

      type: Joi.string(),
    });
  }

  static CustomFormSubmissionPayload() {
    return Joi.object({
      response: Joi.array().items(this.KeyValue()),
    });
  }

  static KeyValue() {
    return Joi.object({
      key: Joi.string(),

      value: Joi.string(),
    });
  }

  static GetTokenForVideoRoomResponse() {
    return Joi.object({
      accessToken: Joi.string(),
    });
  }

  static GetParticipantsInsideVideoRoomResponse() {
    return Joi.object({
      participants: Joi.array().items(this.Participant()),
    });
  }

  static Participant() {
    return Joi.object({
      user: this.UserSchema(),

      identity: Joi.string(),

      status: Joi.string(),
    });
  }

  static UserSchema() {
    return Joi.object({
      firstName: Joi.string(),

      lastName: Joi.string(),

      phoneNumbers: Joi.array().items(this.PhoneNumber()),

      emails: Joi.array().items(this.Email()),

      gender: Joi.string(),

      active: Joi.boolean(),

      profilePicUrl: Joi.string(),

      username: Joi.string(),

      accountType: Joi.string(),

      uid: Joi.string(),

      debug: this.Debug(),

      hasOldPasswordHash: Joi.boolean(),

      id: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),
    });
  }

  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      phone: Joi.string(),

      countryCode: Joi.number(),
    });
  }

  static Email() {
    return Joi.object({
      primary: Joi.boolean(),

      verified: Joi.boolean(),

      email: Joi.string(),

      active: Joi.boolean(),
    });
  }

  static Debug() {
    return Joi.object({
      source: Joi.string(),

      platform: Joi.string(),
    });
  }

  static SubmitCustomFormResponse() {
    return Joi.object({
      ticket: this.Ticket(),
    });
  }

  static TicketContext() {
    return Joi.object({
      applicationId: Joi.string(),

      companyId: Joi.string(),
    });
  }

  static CreatedOn() {
    return Joi.object({
      userAgent: Joi.string(),
    });
  }

  static TicketAsset() {
    return Joi.object({
      display: Joi.string(),

      value: Joi.string(),

      type: Joi.string(),
    });
  }

  static TicketContent() {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),

      attachments: Joi.array().items(this.TicketAsset()),
    });
  }

  static AddTicketPayload() {
    return Joi.object({
      status: Joi.string(),

      priority: Joi.string(),

      category: Joi.string(),

      content: this.TicketContent(),
    });
  }

  static Priority() {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      color: Joi.string(),
    });
  }

  static Status() {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      color: Joi.string(),
    });
  }

  static TicketCategory() {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      form: this.CustomForm(),
    });
  }

  static SubmitButton() {
    return Joi.object({
      title: Joi.string(),

      titleColor: Joi.string(),

      backgroundColor: Joi.string(),
    });
  }

  static PollForAssignment() {
    return Joi.object({
      duration: Joi.number(),

      message: Joi.string(),

      successMessage: Joi.string(),

      failureMessage: Joi.string(),
    });
  }

  static CustomForm() {
    return Joi.object({
      applicationId: Joi.string(),

      slug: Joi.string(),

      headerImage: Joi.string(),

      title: Joi.string(),

      description: Joi.string(),

      loginRequired: Joi.boolean(),

      shouldNotify: Joi.boolean(),

      successMessage: Joi.string(),

      submitButton: this.SubmitButton(),

      inputs: Joi.array().items(Joi.object()),

      createdOn: this.CreatedOn(),

      createdBy: Joi.object(),

      pollForAssignment: this.PollForAssignment(),

      id: Joi.string(),
    });
  }

  static TicketHistory() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.object(),

      ticketId: Joi.string(),

      createdOn: this.CreatedOn(),

      createdBy: Joi.object(),

      id: Joi.string(),

      updatedAt: Joi.string(),

      createdAt: Joi.string(),
    });
  }

  static Ticket() {
    return Joi.object({
      context: this.TicketContext(),

      createdOn: this.CreatedOn(),

      responseId: Joi.string(),

      content: this.TicketContent(),

      ticketId: Joi.string(),

      category: this.TicketCategory(),

      source: Joi.string(),

      status: this.Status(),

      priority: this.Priority(),

      createdBy: Joi.object(),

      assignedTo: Joi.object(),

      tags: Joi.array().items(Joi.string()),

      customJson: Joi.object(),

      id: Joi.string(),

      updatedAt: Joi.string(),

      createdAt: Joi.string(),
    });
  }

  static PaginationSchema() {
    return Joi.object({
      size: Joi.number(),

      itemTotal: Joi.number(),

      hasNext: Joi.boolean(),

      type: Joi.string(),

      current: Joi.number(),
    });
  }

  static ThemesListingResponseSchema() {
    return Joi.object({
      items: Joi.array().items(this.ThemesSchema()),

      page: this.PaginationSchema(),
    });
  }

  static AddThemeRequestSchema() {
    return Joi.object({
      themeId: Joi.string(),
    });
  }

  static UpgradableThemeSchema() {
    return Joi.object({
      parentTheme: Joi.string(),

      appliedTheme: Joi.string(),

      upgrade: Joi.boolean(),
    });
  }

  static FontsSchema() {
    return Joi.object({
      items: this.FontsSchemaItems(),

      kind: Joi.string(),
    });
  }

  static BlitzkriegApiErrorSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static BlitzkriegNotFoundSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static BlitzkriegInternalServerErrorSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static FontsSchemaItems() {
    return Joi.object({
      family: Joi.string(),

      variants: Joi.array().items(Joi.string()),

      subsets: Joi.array().items(Joi.string()),

      version: Joi.string(),

      lastModified: Joi.string(),

      files: this.FontsSchemaItemsFiles(),

      category: Joi.string(),

      kind: Joi.string(),
    });
  }

  static FontsSchemaItemsFiles() {
    return Joi.object({
      regular: Joi.string(),

      italic: Joi.string(),

      bold: Joi.string(),
    });
  }

  static ThemesSchema() {
    return Joi.object({
      application: Joi.string(),

      applied: Joi.boolean(),

      customized: Joi.boolean(),

      published: Joi.boolean(),

      archived: Joi.boolean(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      version: Joi.string(),

      parentThemeVersion: Joi.string(),

      parentTheme: Joi.string(),

      information: this.Information(),

      tags: Joi.array().items(Joi.string()),

      src: this.Src(),

      assets: this.AssetsSchema(),

      availablePages: this.AvailablePages(),

      pages: this.Pages(),

      availableSections: Joi.array().items(this.availableSectionSchema()),

      sections: Joi.array().items(this.sectionSchema()),

      constants: Joi.object(),

      styles: Joi.object(),

      config: this.Config(),

      settings: Joi.object(),

      font: this.Font(),

      id: Joi.string(),

      v: Joi.number(),

      colors: this.Colors(),
    });
  }

  static pagesSchema() {
    return Joi.object({
      text: Joi.string(),

      path: Joi.string(),

      type: Joi.string(),

      value: Joi.string(),

      sections: this.Sections(),
    });
  }

  static availableSectionSchema() {
    return Joi.object({
      blocks: this.Blocks(),

      name: Joi.string(),

      label: Joi.string(),

      props: Joi.object(),
    });
  }

  static sectionSchema() {
    return Joi.object({
      pageKey: Joi.string(),

      pageSections: this.PageSections(),
    });
  }

  static Information() {
    return Joi.object({
      images: this.Images(),

      features: Joi.array().items(Joi.string()),

      name: Joi.string(),

      description: Joi.string(),
    });
  }

  static Images() {
    return Joi.object({
      desktop: Joi.array().items(Joi.string()),

      android: Joi.array().items(Joi.string()),

      ios: Joi.array().items(Joi.string()),

      thumbnail: Joi.array().items(Joi.string()),
    });
  }

  static Src() {
    return Joi.object({
      link: Joi.string(),
    });
  }

  static AssetsSchema() {
    return Joi.object({
      umdJs: this.UmdJs(),

      commonJs: this.CommonJs(),

      css: this.Css(),
    });
  }

  static UmdJs() {
    return Joi.object({
      link: Joi.string(),
    });
  }

  static CommonJs() {
    return Joi.object({
      link: Joi.string(),
    });
  }

  static Css() {
    return Joi.object({
      link: Joi.string(),
    });
  }

  static AvailablePages() {
    return Joi.object({
      path: Joi.string(),

      type: Joi.string(),

      text: Joi.string(),

      value: Joi.string(),

      seo: this.Seo(),

      props: Joi.object(),

      sections: this.Sections(),
    });
  }

  static Seo() {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),
    });
  }

  static Sections() {
    return Joi.object({
      attributes: Joi.string(),
    });
  }

  static Pages() {
    return Joi.object({
      collectionListing: this.pagesSchema(),

      brands: this.pagesSchema(),

      cartLanding: this.pagesSchema(),

      collections: this.pagesSchema(),

      productDescription: this.pagesSchema(),

      productListing: this.pagesSchema(),

      home: this.pagesSchema(),

      categories: this.pagesSchema(),

      compareProducts: this.pagesSchema(),

      wishlist: this.pagesSchema(),
    });
  }

  static Config() {
    return Joi.object({
      preset: this.Preset(),

      globalSchema: this.GlobalSchema(),

      current: Joi.string(),

      list: this.ListSchema(),
    });
  }

  static Preset() {
    return Joi.object({
      sections: this.sectionSchema(),
    });
  }

  static GlobalSchema() {
    return Joi.object({
      props: Joi.object(),
    });
  }

  static ListSchema() {
    return Joi.object({
      global: Joi.object(),

      page: this.ConfigPage(),

      name: Joi.string(),
    });
  }

  static Colors() {
    return Joi.object({
      bgColor: Joi.string(),

      primaryColor: Joi.string(),

      secondaryColor: Joi.string(),

      accentColor: Joi.string(),

      linkColor: Joi.string(),

      buttonSecondaryColor: Joi.string(),
    });
  }

  static Custom() {
    return Joi.object({
      props: Joi.object(),
    });
  }

  static ConfigPage() {
    return Joi.object({
      settings: Joi.object(),

      page: Joi.string(),
    });
  }

  static Font() {
    return Joi.object({
      family: Joi.string(),

      variants: this.Variants(),
    });
  }

  static Variants() {
    return Joi.object({
      medium: this.Medium(),

      semiBold: this.SemiBold(),

      bold: this.Bold(),

      light: this.Light(),

      regular: this.Regular(),
    });
  }

  static Medium() {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  }

  static SemiBold() {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  }

  static Bold() {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  }

  static Light() {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  }

  static Regular() {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  }

  static Blocks() {
    return Joi.object({
      type: Joi.string(),

      name: Joi.string(),

      props: this.BlocksProps(),
    });
  }

  static BlocksProps() {
    return Joi.object({
      id: Joi.string(),

      label: Joi.string(),

      type: Joi.string(),
    });
  }

  static PageSections() {
    return Joi.object({
      blocks: this.PageSectionsBlocks(),

      name: Joi.string(),

      label: Joi.string(),

      props: Joi.object(),

      preset: Joi.object(),

      predicate: this.Predicate(),
    });
  }

  static PageSectionsBlocks() {
    return Joi.object({
      type: Joi.string(),

      name: Joi.string(),

      props: this.PageSectionsBlocksProps(),
    });
  }

  static PageSectionsBlocksProps() {
    return Joi.object({
      id: Joi.string(),

      label: Joi.string(),

      type: Joi.string(),
    });
  }

  static Predicate() {
    return Joi.object({
      screen: this.Screen(),

      user: this.PredicateUserSchema(),

      route: this.Route(),
    });
  }

  static Screen() {
    return Joi.object({
      mobile: Joi.boolean(),

      desktop: Joi.boolean(),

      tablet: Joi.boolean(),
    });
  }

  static PredicateUserSchema() {
    return Joi.object({
      authenticated: Joi.boolean(),

      anonymous: Joi.boolean(),
    });
  }

  static Route() {
    return Joi.object({
      selected: Joi.string(),

      exactUrl: Joi.string(),

      query: Joi.object(),
    });
  }

  static EditEmailRequestSchema() {
    return Joi.object({
      email: Joi.string(),
    });
  }

  static SendVerificationLinkMobileRequestSchema() {
    return Joi.object({
      verified: Joi.boolean(),

      active: Joi.boolean(),

      countryCode: Joi.string(),

      phone: Joi.string(),

      primary: Joi.boolean(),
    });
  }

  static EditMobileRequestSchema() {
    return Joi.object({
      countryCode: Joi.string(),

      phone: Joi.string(),
    });
  }

  static EditProfileRequestSchema() {
    return Joi.object({
      firstName: Joi.string(),

      lastName: Joi.string(),

      mobile: Joi.string(),

      email: Joi.string(),

      gender: Joi.string(),

      dob: Joi.string(),

      profilePicUrl: Joi.string(),

      androidHash: Joi.string(),

      sender: Joi.string(),

      registerToken: Joi.string(),
    });
  }

  static SendEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      registerToken: Joi.string(),
    });
  }

  static VerifyOtpRequestSchema() {
    return Joi.object({
      requestId: Joi.string(),

      registerToken: Joi.string(),

      otp: Joi.string(),
    });
  }

  static SendMobileOtpRequestSchema() {
    return Joi.object({
      mobile: Joi.string(),

      countryCode: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      androidHash: Joi.string(),

      force: Joi.string(),
    });
  }

  static UpdatePasswordRequestSchema() {
    return Joi.object({
      oldPassword: Joi.string(),

      newPassword: Joi.string(),
    });
  }

  static FormRegisterRequestSchema() {
    return Joi.object({
      firstName: Joi.string(),

      lastName: Joi.string(),

      gender: Joi.string(),

      email: Joi.string(),

      password: Joi.string(),

      phone: this.FormRegisterRequestSchemaPhone(),

      registerToken: Joi.string(),
    });
  }

  static TokenRequestBodySchema() {
    return Joi.object({
      token: Joi.string(),
    });
  }

  static ForgotPasswordRequestSchema() {
    return Joi.object({
      code: Joi.string(),

      password: Joi.string(),
    });
  }

  static CodeRequestBodySchema() {
    return Joi.object({
      code: Joi.string(),
    });
  }

  static SendResetPasswordEmailRequestSchema() {
    return Joi.object({
      email: Joi.string(),

      gRecaptchaResponse: Joi.string(),
    });
  }

  static PasswordLoginRequestSchema() {
    return Joi.object({
      gRecaptchaResponse: Joi.string(),

      password: Joi.string(),

      username: Joi.string(),
    });
  }

  static SendOtpRequestSchema() {
    return Joi.object({
      countryCode: Joi.string(),

      gRecaptchaResponse: Joi.string(),

      mobile: Joi.string(),
    });
  }

  static OAuthRequestSchema() {
    return Joi.object({
      isSignedIn: Joi.boolean(),

      oauth2: this.OAuthRequestSchemaOauth2(),

      profile: this.OAuthRequestSchemaProfile(),
    });
  }

  static AuthSuccess() {
    return Joi.object({
      registerToken: Joi.string(),

      userExists: Joi.boolean(),

      user: this.AuthSuccessUser(),
    });
  }

  static SendOtpResponse() {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string(),

      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),
    });
  }

  static LoginSuccess() {
    return Joi.object({
      user: this.UserSchema(),
    });
  }

  static VerifyOtpSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      userExists: Joi.boolean(),
    });
  }

  static ResetPasswordSuccess() {
    return Joi.object({
      status: Joi.string(),
    });
  }

  static RegisterFormSuccess() {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string(),

      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),
    });
  }

  static VerifyEmailSuccess() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static HasPasswordSuccess() {
    return Joi.object({
      result: Joi.boolean(),
    });
  }

  static LogoutSuccess() {
    return Joi.object({
      logout: Joi.boolean(),
    });
  }

  static OtpSuccess() {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string(),

      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),
    });
  }

  static EmailOtpSuccess() {
    return Joi.object({
      resendToken: Joi.string(),
    });
  }

  static SessionListSuccess() {
    return Joi.object({
      sessions: Joi.array().items(Joi.string()),
    });
  }

  static VerifyMobileOTPSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      verifyMobileLink: Joi.boolean(),
    });
  }

  static VerifyEmailOTPSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      verifyEmailLink: Joi.boolean(),
    });
  }

  static SendMobileVerifyLinkSuccess() {
    return Joi.object({
      verifyMobileLink: Joi.boolean(),
    });
  }

  static SendEmailVerifyLinkSuccess() {
    return Joi.object({
      verifyEmailLink: Joi.boolean(),
    });
  }

  static UserSearchResponseSchema() {
    return Joi.object({
      users: Joi.array().items(this.UserSchema()),
    });
  }

  static CustomerListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(this.UserSchema()),

      page: this.PaginationSchema(),
    });
  }

  static UnauthorizedSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static UnauthenticatedSchema() {
    return Joi.object({
      authenticated: Joi.boolean(),
    });
  }

  static NotFoundSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static AuthenticationApiErrorSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static ProfileEditSuccessSchema() {
    return Joi.object({
      email: Joi.string(),

      verifyEmailOtp: Joi.boolean(),

      verifyEmailLink: Joi.boolean(),

      verifyMobileOtp: Joi.boolean(),

      user: Joi.string(),

      registerToken: Joi.string(),

      userExists: Joi.boolean(),
    });
  }

  static FormRegisterRequestSchemaPhone() {
    return Joi.object({
      countryCode: Joi.string(),

      mobile: Joi.string(),
    });
  }

  static OAuthRequestSchemaOauth2() {
    return Joi.object({
      accessToken: Joi.string(),

      expiry: Joi.number(),

      refreshToken: Joi.string(),
    });
  }

  static OAuthRequestSchemaProfile() {
    return Joi.object({
      lastName: Joi.string(),

      image: Joi.string(),

      id: Joi.string(),

      email: Joi.string(),

      fullName: Joi.string(),

      firstName: Joi.string(),
    });
  }

  static AuthSuccessUser() {
    return Joi.object({
      firstName: Joi.string(),

      lastName: Joi.string(),

      debug: this.AuthSuccessUserDebug(),

      active: Joi.boolean(),

      emails: this.AuthSuccessUserEmails(),
    });
  }

  static AuthSuccessUserDebug() {
    return Joi.object({
      platform: Joi.string(),
    });
  }

  static AuthSuccessUserEmails() {
    return Joi.object({
      email: Joi.string(),

      verified: Joi.boolean(),

      primary: Joi.boolean(),

      active: Joi.boolean(),
    });
  }

  static PlatformSchema() {
    return Joi.object({
      display: Joi.string(),

      lookAndFeel: this.LookAndFeel(),

      updatedAt: Joi.string(),

      active: Joi.boolean(),

      forgotPassword: Joi.boolean(),

      login: this.Login(),

      skipCaptcha: Joi.boolean(),

      name: Joi.string(),

      meta: this.MetaSchema(),

      id: Joi.string(),

      social: this.Social(),

      requiredFields: this.RequiredFields(),

      registerRequiredFields: this.RegisterRequiredFields(),

      skipLogin: Joi.boolean(),

      flashCard: this.FlashCard(),

      subtext: Joi.string(),

      socialTokens: this.SocialTokens(),

      createdAt: Joi.string(),

      register: Joi.boolean(),
    });
  }

  static LookAndFeel() {
    return Joi.object({
      cardPosition: Joi.string(),

      backgroundColor: Joi.string(),
    });
  }

  static Login() {
    return Joi.object({
      password: Joi.boolean(),

      otp: Joi.boolean(),
    });
  }

  static MetaSchema() {
    return Joi.object({
      fyndDefault: Joi.boolean(),
    });
  }

  static Social() {
    return Joi.object({
      accountKit: Joi.boolean(),

      facebook: Joi.boolean(),

      google: Joi.boolean(),
    });
  }

  static RequiredFields() {
    return Joi.object({
      email: this.Email(),

      mobile: this.Mobile(),
    });
  }

  static Mobile() {
    return Joi.object({
      isRequired: Joi.boolean(),

      level: Joi.string(),
    });
  }

  static RegisterRequiredFields() {
    return Joi.object({
      email: this.RegisterRequiredFieldsEmail(),

      mobile: this.RegisterRequiredFieldsMobile(),
    });
  }

  static RegisterRequiredFieldsEmail() {
    return Joi.object({
      isRequired: Joi.boolean(),

      level: Joi.string(),
    });
  }

  static RegisterRequiredFieldsMobile() {
    return Joi.object({
      isRequired: Joi.boolean(),

      level: Joi.string(),
    });
  }

  static FlashCard() {
    return Joi.object({
      text: Joi.string(),

      textColor: Joi.string(),

      backgroundColor: Joi.string(),
    });
  }

  static SocialTokens() {
    return Joi.object({
      facebook: this.Facebook(),

      accountKit: this.Accountkit(),

      google: this.Google(),
    });
  }

  static Facebook() {
    return Joi.object({
      appId: Joi.string(),
    });
  }

  static Accountkit() {
    return Joi.object({
      appId: Joi.string(),
    });
  }

  static Google() {
    return Joi.object({
      appId: Joi.string(),
    });
  }

  static ApplicationLegal() {
    return Joi.object({
      application: Joi.string(),

      tnc: Joi.string(),

      policy: Joi.string(),

      faq: Joi.array().items(this.ApplicationLegalFAQ()),

      id: Joi.string(),

      updatedAt: Joi.string(),

      createdAt: Joi.string(),

      v: Joi.number(),
    });
  }

  static ApplicationLegalFAQ() {
    return Joi.object({
      question: Joi.string(),

      answer: Joi.string(),
    });
  }

  static CustomMetaTag() {
    return Joi.object({
      name: Joi.string(),

      content: Joi.string(),
    });
  }

  static Detail() {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),
    });
  }

  static StorefrontAnnouncement() {
    return Joi.object({
      announcements: this.AnnouncementSchema(),

      refreshRate: Joi.number(),

      refreshPages: Joi.array().items(Joi.string()),
    });
  }

  static AnnouncementPageSchema() {
    return Joi.object({
      pageSlug: Joi.string(),

      type: Joi.string(),
    });
  }

  static EditorMeta() {
    return Joi.object({
      foregroundColor: Joi.string(),

      backgroundColor: Joi.string(),

      contentType: Joi.string(),

      content: Joi.string(),
    });
  }

  static AnnouncementAuthorSchema() {
    return Joi.object({
      createdBy: Joi.string(),

      modifiedBy: Joi.string(),
    });
  }

  static AdminAnnouncementSchema() {
    return Joi.object({
      id: Joi.string(),

      platform: Joi.array().items(Joi.string()),

      title: Joi.string(),

      announcement: Joi.string(),

      pages: Joi.array().items(this.AnnouncementPageSchema()),

      editorMeta: this.EditorMeta(),

      author: this.AnnouncementAuthorSchema(),

      createdAt: Joi.string(),

      app: Joi.string(),

      modifiedAt: Joi.string(),

      schedule: this.ScheduleSchema(),
    });
  }

  static ScheduleSchema() {
    return Joi.object({
      cron: Joi.string(),

      published: Joi.boolean(),

      start: Joi.string(),

      end: Joi.string(),

      duration: Joi.number(),

      nextSchedule: Joi.array().items(Joi.object()),
    });
  }

  static NextSchedule() {
    return Joi.object({
      start: Joi.string(),

      end: Joi.string(),
    });
  }

  static AnnouncementSchema() {
    return Joi.object({
      pageSlug: Joi.array().items(Joi.object()),
    });
  }

  static announcementSchema() {
    return Joi.object({
      announcement: Joi.string(),

      schedule: this.scheduleStartSchema(),
    });
  }

  static scheduleStartSchema() {
    return Joi.object({
      start: Joi.string(),
    });
  }

  static BlogGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: Joi.object(),
    });
  }

  static ResourceContent() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.string(),
    });
  }

  static Asset() {
    return Joi.object({
      secureUrl: Joi.string(),
    });
  }

  static Author() {
    return Joi.object({
      designation: Joi.string(),

      id: Joi.string(),

      name: Joi.string(),
    });
  }

  static BlogSchema() {
    return Joi.object({
      id: Joi.array().items(Joi.any()),

      schedule: Joi.string(),

      application: Joi.string(),

      archived: Joi.boolean(),

      author: Joi.object(),

      content: Joi.array().items(this.ResourceContent()),

      featureImage: Joi.object(),

      published: Joi.boolean(),

      readingTime: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      title: Joi.string(),

      dateMeta: this.DateMeta(),
    });
  }

  static DateMeta() {
    return Joi.object({
      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
    });
  }

  static BlogRequest() {
    return Joi.object({
      schedule: Joi.string(),

      application: Joi.string(),

      author: Joi.object(),

      content: Joi.array().items(this.ResourceContent()),

      featureImage: Joi.object(),

      published: Joi.boolean(),

      readingTime: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      title: Joi.string(),
    });
  }

  static GetAnnouncementListSchema() {
    return Joi.object({
      items: Joi.array().items(this.AdminAnnouncementSchema()),
    });
  }

  static CreateAnnouncementSchema() {
    return Joi.object({
      message: Joi.string(),

      data: this.AdminAnnouncementSchema(),
    });
  }

  static Navigation() {
    return Joi.object({
      name: Joi.string(),

      slug: Joi.string(),

      orientation: Joi.string(),

      createdBy: this.CreatedBy(),

      dateMeta: this.DateMeta(),

      id: Joi.string(),

      position: Joi.string(),

      application: Joi.string(),

      platform: Joi.string(),

      navigation: this.NavigationReference(),
    });
  }

  static LocaleLanguage() {
    return Joi.object({
      hi: this.Language(),

      ar: this.Language(),

      enUs: this.Language(),
    });
  }

  static Language() {
    return Joi.object({
      display: Joi.string(),
    });
  }

  static NavigationReference() {
    return Joi.object({
      acl: Joi.any(),

      localeLanguage: this.LocaleLanguage(),

      image: Joi.string(),

      type: Joi.string(),

      action: this.Action(),

      active: Joi.boolean(),

      display: Joi.string(),

      sortOrder: Joi.number(),

      subNavigation: this.NavigationReference(),
    });
  }

  static LandingPage() {
    return Joi.object({
      slug: Joi.string(),

      action: this.Action(),

      platform: Joi.array().items(Joi.any()),

      createdBy: this.CreatedBy(),

      dateMeta: this.DateMeta(),

      id: Joi.string(),

      application: Joi.string(),
    });
  }

  static ConfigurationSchema() {
    return Joi.object({
      sleepTime: Joi.number(),

      startOnLaunch: Joi.boolean(),

      duration: Joi.number(),
    });
  }

  static Slideshow() {
    return Joi.object({
      id: Joi.string(),

      slug: Joi.string(),

      dateMeta: this.DateMeta(),

      application: Joi.string(),

      name: Joi.string(),

      platform: Joi.string(),

      configuration: this.ConfigurationSchema(),

      media: Joi.array().items(this.Media()),

      active: Joi.boolean(),
    });
  }

  static AnnouncementsResponseSchema() {
    return Joi.object({
      announcements: Joi.array().items(this.AnnouncementDataSchema()),

      refreshRate: Joi.number(),

      refreshPages: Joi.array().items(Joi.string()),
    });
  }

  static AnnouncementDataSchema() {
    return Joi.object({
      pageSlug: Joi.string(),

      announcement: this.StorefrontAnnouncement(),
    });
  }

  static FaqResponseSchema() {
    return Joi.object({
      faqs: Joi.array().items(this.FAQ()),
    });
  }

  static UpdateHandpickedSchema() {
    return Joi.object({
      tag: this.HandpickedTagSchema(),
    });
  }

  static HandpickedTagSchema() {
    return Joi.object({
      position: Joi.string(),

      attributes: Joi.object(),

      name: Joi.string(),

      type: Joi.string(),

      subType: Joi.string(),

      content: Joi.string(),
    });
  }

  static RemoveHandpickedSchema() {
    return Joi.object({
      tags: Joi.array().items(Joi.string()),
    });
  }

  static CreateTagSchema() {
    return Joi.object({
      name: Joi.string(),

      subType: Joi.string(),

      id: Joi.string(),

      type: Joi.string(),

      url: Joi.string(),

      position: Joi.string(),
    });
  }

  static CreateTagRequestSchema() {
    return Joi.object({
      tags: Joi.array().items(this.CreateTagSchema()),
    });
  }

  static APIError() {
    return Joi.object({
      message: Joi.string(),

      status: Joi.number(),

      code: Joi.string(),

      exception: Joi.string(),

      info: Joi.string(),

      requestId: Joi.string(),

      stackTrace: Joi.string(),

      meta: Joi.object(),
    });
  }

  static CategorySchema() {
    return Joi.object({
      index: Joi.number(),

      id: Joi.string(),

      slug: Joi.string(),

      title: Joi.string(),

      application: Joi.string(),

      v: Joi.number(),
    });
  }

  static ChildrenSchema() {
    return Joi.object({
      question: Joi.string(),

      answer: Joi.string(),

      slug: Joi.string(),

      application: Joi.string(),

      v: Joi.number(),

      id: Joi.string(),
    });
  }

  static CategoryRequestSchema() {
    return Joi.object({
      slug: Joi.string(),

      title: Joi.string(),
    });
  }

  static FAQCategorySchema() {
    return Joi.object({
      index: Joi.number(),

      children: this.ChildrenSchema(),

      id: Joi.string(),

      slug: Joi.string(),

      application: Joi.string(),

      v: Joi.number(),
    });
  }

  static FaqSchema() {
    return Joi.object({
      slug: Joi.string(),

      application: Joi.string(),

      v: Joi.number(),

      id: Joi.string(),

      question: Joi.string(),

      answer: Joi.string(),
    });
  }

  static FAQ() {
    return Joi.object({
      slug: Joi.string(),

      question: Joi.string(),

      answer: Joi.string(),
    });
  }

  static CreateFaqResponseSchema() {
    return Joi.object({
      faq: this.FaqSchema(),
    });
  }

  static CreateFaqSchema() {
    return Joi.object({
      faq: this.FAQ(),
    });
  }

  static GetFaqSchema() {
    return Joi.object({
      faqs: Joi.array().items(Joi.object()),
    });
  }

  static UpdateFaqCategoryRequestSchema() {
    return Joi.object({
      category: this.CategorySchema(),
    });
  }

  static CreateFaqCategoryRequestSchema() {
    return Joi.object({
      category: this.CategoryRequestSchema(),
    });
  }

  static CreateFaqCategorySchema() {
    return Joi.object({
      category: this.CategorySchema(),
    });
  }

  static GetFaqCategoriesSchema() {
    return Joi.object({
      categories: Joi.array().items(this.CategorySchema()),
    });
  }

  static GetFaqCategoryByIdOrSlugSchema() {
    return Joi.object({
      category: this.FAQCategorySchema(),
    });
  }

  static Pagination() {
    return Joi.object({
      type: Joi.string(),

      current: Joi.number(),

      size: Joi.number(),

      itemTotal: Joi.number(),

      hasNext: Joi.boolean(),
    });
  }

  static LandingPageGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Pagination(),
    });
  }

  static LandingPageSchema() {
    return Joi.object({
      slug: Joi.string(),

      action: this.Action(),

      platform: Joi.array().items(Joi.string()),

      createdBy: this.CreatedBy(),

      dateMeta: this.DateMeta(),

      id: Joi.string(),

      application: Joi.string(),

      archived: Joi.boolean(),
    });
  }

  static LandingPageRequest() {
    return Joi.object({
      slug: Joi.string(),

      action: this.Action(),

      platform: Joi.array().items(Joi.string()),
    });
  }

  static DefaultNavigationResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),
    });
  }

  static NavigationGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Pagination(),
    });
  }

  static Orientation() {
    return Joi.object({
      portrait: Joi.array().items(Joi.string()),

      landscape: Joi.array().items(Joi.string()),
    });
  }

  static NavigationSchema() {
    return Joi.object({
      id: Joi.string(),

      application: Joi.string(),

      archived: Joi.boolean(),

      name: Joi.string(),

      slug: Joi.string(),

      platform: Joi.array().items(Joi.string()),

      orientation: Joi.any(),

      navigation: this.NavigationReference(),
    });
  }

  static NavigationRequest() {
    return Joi.object({
      name: Joi.string(),

      slug: Joi.string(),

      platform: Joi.array().items(Joi.string()),

      orientation: this.Orientation(),

      navigation: this.NavigationReference(),
    });
  }

  static CustomPageSchema() {
    return Joi.object({
      id: Joi.string(),

      platform: Joi.string(),

      title: Joi.string(),

      slug: Joi.string(),

      type: Joi.string(),

      orientation: Joi.string(),

      application: Joi.string(),

      description: Joi.string(),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string()),

      content: Joi.array().items(this.ContentSchema()),

      createdBy: this.CreatedBy(),

      dateMeta: this.DateMeta(),

      schedule: this.ScheduleSchema(),
    });
  }

  static ContentSchema() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.string(),
    });
  }

  static CustomPage() {
    return Joi.object({
      data: this.CustomPageSchema(),
    });
  }

  static CustomBlogSchema() {
    return Joi.object({
      id: Joi.string(),

      title: Joi.string(),

      slug: Joi.string(),

      readingTime: Joi.string(),

      application: Joi.string(),

      description: Joi.string(),

      featureImage: this.FeatureImage(),

      published: Joi.boolean(),

      archived: Joi.boolean(),

      tags: Joi.array().items(Joi.string()),

      content: this.ContentSchema(),

      author: this.Author(),

      schedule: this.ScheduleSchema(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      customJson: Joi.object(),
    });
  }

  static FeatureImage() {
    return Joi.object({
      secureUrl: Joi.string(),
    });
  }

  static CustomBlog() {
    return Joi.object({
      data: this.CustomBlogSchema(),
    });
  }

  static PageGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: Joi.object(),
    });
  }

  static PageSpec() {
    return Joi.object({
      specifications: Joi.array().items(Joi.object()),
    });
  }

  static PageSpecItem() {
    return Joi.object({
      pageType: Joi.string(),

      displayName: Joi.string(),

      params: Joi.array().items(Joi.string()),

      query: Joi.array().items(Joi.string()),
    });
  }

  static PageSchema() {
    return Joi.object({
      id: Joi.array().items(Joi.any()),

      schedule: Joi.string(),

      application: Joi.array().items(Joi.any()),

      componentIds: Joi.array().items(Joi.string()),

      content: Joi.array().items(this.PageContent()),

      createdBy: Joi.object(),

      dateMeta: Joi.object(),

      description: Joi.string(),

      featureImage: Joi.object(),

      pageMeta: Joi.array().items(this.PageMeta()),

      platform: Joi.string(),

      published: Joi.boolean(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      title: Joi.string(),

      type: Joi.string(),

      visibility: Joi.object(),
    });
  }

  static CreatedBy() {
    return Joi.object({
      id: Joi.string(),
    });
  }

  static PageContent() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.object(),
    });
  }

  static PageMeta() {
    return Joi.object({
      key: Joi.string(),

      value: Joi.object(),
    });
  }

  static PageRequest() {
    return Joi.object({
      schedule: Joi.string(),

      application: Joi.string(),

      author: Joi.object(),

      content: Joi.array().items(this.ResourceContent()),

      featureImage: Joi.object(),

      published: Joi.boolean(),

      readingTime: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      title: Joi.string(),
    });
  }

  static PagePublishRequest() {
    return Joi.object({
      publish: Joi.boolean(),
    });
  }

  static PageMetaSchema() {
    return Joi.object({
      systemPages: Joi.array().items(Joi.object()),

      customPages: Joi.array().items(Joi.object()),

      applicationId: Joi.string(),
    });
  }

  static SlideshowGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Pagination(),
    });
  }

  static SlideshowSchema() {
    return Joi.object({
      id: Joi.string(),

      slug: Joi.string(),

      dateMeta: this.DateMeta(),

      application: Joi.string(),

      platform: Joi.string(),

      configuration: this.ConfigurationSchema(),

      media: this.Media(),

      active: Joi.boolean(),

      archived: Joi.boolean(),
    });
  }

  static SlideshowRequest() {
    return Joi.object({
      slug: Joi.string(),

      platform: Joi.string(),

      configuration: this.ConfigurationSchema(),

      media: this.Media(),

      active: Joi.boolean(),
    });
  }

  static Support() {
    return Joi.object({
      created: Joi.boolean(),

      id: Joi.string(),

      configType: Joi.string(),

      application: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      contact: this.ContactSchema(),
    });
  }

  static Phone() {
    return Joi.object({
      key: Joi.string(),

      code: Joi.string(),

      number: Joi.string(),
    });
  }

  static PhoneSchema() {
    return Joi.object({
      active: Joi.boolean(),

      phone: Joi.array().items(this.Phone()),
    });
  }

  static EmailSchema() {
    return Joi.object({
      active: Joi.boolean(),

      email: Joi.array().items(this.Email()),
    });
  }

  static ContactSchema() {
    return Joi.object({
      phone: this.PhoneSchema(),

      email: this.EmailSchema(),
    });
  }

  static TagsSchema() {
    return Joi.object({
      application: Joi.string(),

      id: Joi.string(),

      tags: Joi.array().items(this.TagSchema()),
    });
  }

  static TagSchema() {
    return Joi.object({
      name: Joi.string(),

      url: Joi.string(),

      type: Joi.string(),

      subType: Joi.string(),

      position: Joi.string(),

      attributes: Joi.object(),
    });
  }

  static QRCodeResp() {
    return Joi.object({
      link: Joi.string(),

      svg: Joi.string(),
    });
  }

  static RedirectDevice() {
    return Joi.object({
      link: Joi.string(),

      type: Joi.string(),
    });
  }

  static WebRedirect() {
    return Joi.object({
      link: Joi.string(),

      type: Joi.string(),
    });
  }

  static Redirects() {
    return Joi.object({
      ios: this.RedirectDevice(),

      android: this.RedirectDevice(),

      web: this.WebRedirect(),

      forceWeb: Joi.boolean(),
    });
  }

  static ShortLinkReq() {
    return Joi.object({
      title: Joi.string(),

      url: Joi.string(),

      hash: Joi.string(),

      active: Joi.string(),

      type: Joi.string(),

      expireAt: Joi.string(),

      enableTracking: Joi.boolean(),

      redirects: this.Redirects(),
    });
  }

  static UrlInfo() {
    return Joi.object({
      original: Joi.string(),

      short: Joi.string(),

      hash: Joi.string(),
    });
  }

  static ShortLinkRes() {
    return Joi.object({
      title: Joi.string(),

      url: this.UrlInfo(),

      createdBy: Joi.string(),

      personalized: Joi.string(),

      appRedirect: Joi.string(),

      fallback: Joi.string(),

      active: Joi.boolean(),

      id: Joi.string(),

      enableTracking: Joi.boolean(),

      expireAt: Joi.boolean(),

      application: Joi.string(),

      userId: Joi.boolean(),

      createdAt: Joi.boolean(),

      updatedAt: Joi.boolean(),

      redirects: this.Redirects(),
    });
  }

  static ShortLinkList() {
    return Joi.object({
      items: Joi.array().items(this.ShortLinkRes()),

      size: Joi.number(),

      itemTotal: Joi.number(),

      current: Joi.number(),

      hasNext: Joi.string(),

      type: Joi.string(),
    });
  }

  static FailedResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static CDN() {
    return Joi.object({
      url: Joi.string(),
    });
  }

  static Upload() {
    return Joi.object({
      expiry: Joi.number(),

      url: Joi.string(),
    });
  }

  static StartResponse() {
    return Joi.object({
      fileName: Joi.string(),

      filePath: Joi.string(),

      contentType: Joi.string(),

      method: Joi.string(),

      namespace: Joi.string(),

      operation: Joi.string(),

      size: Joi.number(),

      upload: this.Upload(),

      cdn: this.CDN(),
    });
  }

  static StartRequest() {
    return Joi.object({
      fileName: Joi.string(),

      contentType: Joi.string(),

      size: Joi.number(),

      tags: Joi.array().items(Joi.string()),
    });
  }

  static CompleteResponse() {
    return Joi.object({
      id: Joi.string(),

      fileName: Joi.string(),

      filePath: Joi.string(),

      contentType: Joi.string(),

      method: Joi.string(),

      namespace: Joi.string(),

      operation: Joi.string(),

      size: Joi.number(),

      upload: this.Upload(),

      cdn: this.CDN(),

      success: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
    });
  }

  static Opts() {
    return Joi.object({
      attempts: Joi.number(),

      timestamp: Joi.number(),

      delay: Joi.number(),
    });
  }

  static CopyFileTask() {
    return Joi.object({
      id: Joi.string(),

      name: Joi.string(),

      data: this.BulkRequest(),

      opts: this.Opts(),

      progress: Joi.number(),

      delay: Joi.number(),

      timestamp: Joi.number(),

      attemptsMade: Joi.number(),

      stacktrace: Joi.array().items(Joi.string()),

      finishedOn: Joi.number(),

      processedOn: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      trackingUrl: Joi.string(),

      task: this.CopyFileTask(),
    });
  }

  static ReqConfiguration() {
    return Joi.object({
      concurrency: Joi.number(),
    });
  }

  static Destination() {
    return Joi.object({
      namespace: Joi.string(),

      rewrite: Joi.string(),

      basepath: Joi.string(),
    });
  }

  static BulkRequest() {
    return Joi.object({
      urls: Joi.array().items(Joi.string()),

      destination: this.Destination(),

      configuration: this.ReqConfiguration(),
    });
  }

  static Urls() {
    return Joi.object({
      url: Joi.string(),

      signedUrl: Joi.string(),

      expiry: Joi.number(),
    });
  }

  static SignUrlResponse() {
    return Joi.object({
      urls: Joi.array().items(this.Urls()),
    });
  }

  static SignUrlRequest() {
    return Joi.object({
      expiry: Joi.number(),

      urls: Joi.array().items(Joi.string()),
    });
  }

  static DbRecord() {
    return Joi.object({
      success: Joi.boolean(),

      tags: Joi.array().items(Joi.string()),

      id: Joi.string(),

      fileName: Joi.string(),

      operation: Joi.string(),

      namespace: Joi.string(),

      contentType: Joi.string(),

      filePath: Joi.string(),

      upload: this.Upload(),

      cdn: this.CDN(),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
    });
  }

  static BrowseResponse() {
    return Joi.object({
      items: Joi.array().items(this.DbRecord()),

      page: this.Page(),
    });
  }

  static ApplicationAboutResponse() {
    return Joi.object({
      applicationInfo: this.ApplicationInfo(),

      companyInfo: this.CompanyInfo(),

      ownerInfo: this.OwnerInfo(),
    });
  }

  static ApplicationInfo() {
    return Joi.object({
      id: Joi.string(),

      domain: this.Domain(),

      website: this.ApplicationWebsite(),

      cors: this.ApplicationCors(),

      description: Joi.string(),

      name: Joi.string(),

      meta: this.ApplicationMeta(),

      token: Joi.string(),

      secret: Joi.string(),

      createdAt: Joi.string(),

      banner: this.SecureUrl(),

      logo: this.SecureUrl(),

      isActive: Joi.boolean(),
    });
  }

  static CompanyInfo() {
    return Joi.object({
      id: Joi.string(),

      uid: Joi.number(),

      createdOn: Joi.string(),

      isActive: Joi.boolean(),

      name: Joi.string(),

      addresses: Joi.array().items(this.CompanyAboutAddress()),

      notificationEmails: Joi.array().items(Joi.string()),
    });
  }

  static OwnerInfo() {
    return Joi.object({
      id: Joi.string(),

      emails: Joi.array().items(this.UserEmail()),

      phoneNumbers: Joi.array().items(this.UserPhoneNumber()),

      firstName: Joi.string(),

      lastName: Joi.string(),

      profilePic: Joi.string(),
    });
  }

  static AppVersionRequest() {
    return Joi.object({
      application: this.ApplicationVersionRequest(),

      device: this.Device(),

      locale: Joi.string(),

      timezone: Joi.string(),
    });
  }

  static ApplicationVersionRequest() {
    return Joi.object({
      id: Joi.string(),

      name: Joi.string(),

      namespace: Joi.string(),

      token: Joi.string(),

      version: Joi.string(),
    });
  }

  static Device() {
    return Joi.object({
      build: Joi.number(),

      model: Joi.string(),

      os: this.OS(),
    });
  }

  static OS() {
    return Joi.object({
      name: Joi.string(),

      version: Joi.string(),
    });
  }

  static LanguageResponse() {
    return Joi.object({
      items: Joi.array().items(this.Language()),
    });
  }

  static AppStaffResponse() {
    return Joi.object({
      staffUsers: Joi.array().items(this.AppStaff()),
    });
  }

  static UpdateDialog() {
    return Joi.object({
      type: Joi.string(),

      interval: Joi.number(),
    });
  }

  static OrderingStoreSelectRequest() {
    return Joi.object({
      orderingStore: this.OrderingStoreSelect(),
    });
  }

  static OrderingStoreSelect() {
    return Joi.object({
      id: Joi.string(),

      uid: Joi.number(),

      storeCode: Joi.string(),
    });
  }

  static AppStaff() {
    return Joi.object({
      id: Joi.string(),

      orderIncent: Joi.boolean(),

      stores: Joi.array().items(Joi.number()),

      application: Joi.string(),

      title: Joi.string(),

      user: Joi.string(),

      employeeCode: Joi.string(),

      firstName: Joi.string(),

      lastName: Joi.string(),

      profilePicUrl: Joi.string(),
    });
  }

  static ProductDetailFeature() {
    return Joi.object({
      similar: Joi.array().items(Joi.string()),

      sellerSelection: Joi.boolean(),

      updateProductMeta: Joi.boolean(),

      requestProduct: Joi.boolean(),
    });
  }

  static LaunchPage() {
    return Joi.object({
      pageType: Joi.string(),

      params: Joi.string(),

      query: Joi.string(),
    });
  }

  static LandingPageFeature() {
    return Joi.object({
      launchPage: this.LaunchPage(),

      continueAsGuest: Joi.boolean(),

      loginBtnText: Joi.string(),

      showDomainTextbox: Joi.boolean(),

      showRegisterBtn: Joi.boolean(),
    });
  }

  static RegistrationPageFeature() {
    return Joi.object({
      askStoreAddress: Joi.boolean(),
    });
  }

  static AppFeature() {
    return Joi.object({
      productDetail: this.ProductDetailFeature(),

      landingPage: this.LandingPageFeature(),

      registrationPage: this.RegistrationPageFeature(),

      homePage: this.HomePageFeature(),

      common: this.CommonFeature(),

      cart: this.CartFeature(),

      qr: this.QrFeature(),

      pcr: this.PcrFeature(),

      order: this.OrderFeature(),

      id: Joi.string(),

      app: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),
    });
  }

  static HomePageFeature() {
    return Joi.object({
      orderProcessing: Joi.boolean(),
    });
  }

  static CommonFeature() {
    return Joi.object({
      communicationOptinDialog: this.CommunicationOptinDialogFeature(),

      deploymentStoreSelection: this.DeploymentStoreSelectionFeature(),

      listingPrice: this.ListingPriceFeature(),

      listingPage: this.ListingPageFeature(),

      currency: this.CurrencyFeature(),

      revenueEngine: this.RevenueEngineFeature(),

      feedback: this.FeedbackFeature(),

      compareProducts: this.CompareProductsFeature(),
    });
  }

  static CommunicationOptinDialogFeature() {
    return Joi.object({
      visibility: Joi.boolean(),
    });
  }

  static DeploymentStoreSelectionFeature() {
    return Joi.object({
      enabled: Joi.boolean(),

      type: Joi.string(),
    });
  }

  static ListingPriceFeature() {
    return Joi.object({
      value: Joi.string(),

      sort: Joi.string(),
    });
  }

  static ListingPageFeature() {
    return Joi.object({
      sortOn: Joi.string(),
    });
  }

  static CurrencyFeature() {
    return Joi.object({
      value: Joi.array().items(Joi.string()),

      type: Joi.string(),

      defaultCurrency: Joi.string(),
    });
  }

  static RevenueEngineFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static FeedbackFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static CompareProductsFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static CartFeature() {
    return Joi.object({
      gstInput: Joi.boolean(),

      staffSelection: Joi.boolean(),

      placingForCustomer: Joi.boolean(),

      googleMap: Joi.boolean(),
    });
  }

  static QrFeature() {
    return Joi.object({
      application: Joi.boolean(),

      products: Joi.boolean(),

      collections: Joi.boolean(),
    });
  }

  static PcrFeature() {
    return Joi.object({
      staffSelection: Joi.boolean(),
    });
  }

  static OrderFeature() {
    return Joi.object({
      buyAgain: Joi.boolean(),
    });
  }

  static AppFeatureRequest() {
    return Joi.object({
      feature: this.AppFeature(),
    });
  }

  static AppFeatureResponse() {
    return Joi.object({
      feature: this.AppFeature(),
    });
  }

  static Currency() {
    return Joi.object({
      id: Joi.string(),

      isActive: Joi.boolean(),

      name: Joi.string(),

      code: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      decimalDigits: Joi.number(),

      symbol: Joi.string(),
    });
  }

  static Domain() {
    return Joi.object({
      verified: Joi.boolean(),

      isPrimary: Joi.boolean(),

      isDefault: Joi.boolean(),

      isShortlink: Joi.boolean(),

      id: Joi.string(),

      name: Joi.string(),
    });
  }

  static ApplicationWebsite() {
    return Joi.object({
      enabled: Joi.boolean(),

      basepath: Joi.string(),
    });
  }

  static ApplicationCors() {
    return Joi.object({
      domains: Joi.array().items(Joi.string()),
    });
  }

  static ApplicationAuth() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static ApplicationRedirections() {
    return Joi.object({
      from: Joi.string(),

      redirectTo: Joi.string(),

      type: Joi.string(),
    });
  }

  static ApplicationMeta() {
    return Joi.object({
      name: Joi.string(),

      value: Joi.string(),
    });
  }

  static SecureUrl() {
    return Joi.object({
      secureUrl: Joi.string(),
    });
  }

  static Application() {
    return Joi.object({
      website: this.ApplicationWebsite(),

      cors: this.ApplicationCors(),

      auth: this.ApplicationAuth(),

      description: Joi.string(),

      channelType: Joi.string(),

      cacheTtl: Joi.number(),

      isInternal: Joi.boolean(),

      isActive: Joi.boolean(),

      id: Joi.string(),

      name: Joi.string(),

      owner: Joi.string(),

      companyId: Joi.number(),

      token: Joi.string(),

      redirections: Joi.array().items(this.ApplicationRedirections()),

      meta: Joi.array().items(this.ApplicationMeta()),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),

      banner: this.SecureUrl(),

      logo: this.SecureUrl(),

      favicon: this.SecureUrl(),

      domains: Joi.array().items(this.Domain()),

      appType: Joi.string(),

      mobileLogo: this.SecureUrl(),

      domain: this.Domain(),
    });
  }

  static NotFound() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static UnhandledError() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static InvalidPayloadRequest() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static SuccessMessageResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static InventoryBrandRule() {
    return Joi.object({
      criteria: Joi.string(),

      brands: Joi.array().items(Joi.number()),
    });
  }

  static StoreCriteriaRule() {
    return Joi.object({
      companies: Joi.array().items(Joi.number()),

      brands: Joi.array().items(Joi.number()),
    });
  }

  static InventoryStoreRule() {
    return Joi.object({
      criteria: Joi.string(),

      rules: Joi.array().items(this.StoreCriteriaRule()),

      stores: Joi.array().items(Joi.number()),
    });
  }

  static InventoryPaymentConfig() {
    return Joi.object({
      modeOfPayment: Joi.string(),

      source: Joi.string(),
    });
  }

  static StorePriorityRule() {
    return Joi.object({
      enabled: Joi.boolean(),

      storetypeOrder: Joi.array().items(Joi.string()),
    });
  }

  static ArticleAssignmentRule() {
    return Joi.object({
      storePriority: this.StorePriorityRule(),
    });
  }

  static InventoryArticleAssignment() {
    return Joi.object({
      postOrderReassignment: Joi.boolean(),

      enforcedStores: Joi.array().items(Joi.number()),

      rules: this.ArticleAssignmentRule(),
    });
  }

  static CompanyAboutAddress() {
    return Joi.object({
      pincode: Joi.number(),

      address1: Joi.string(),

      address2: Joi.string(),

      city: Joi.string(),

      state: Joi.string(),

      country: Joi.string(),

      addressType: Joi.string(),
    });
  }

  static UserEmail() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      email: Joi.string(),
    });
  }

  static UserPhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      countryCode: Joi.number(),

      phone: Joi.string(),
    });
  }

  static ApplicationInformation() {
    return Joi.object({
      address: this.InformationAddress(),

      support: this.InformationSupport(),

      socialLinks: this.SocialLinks(),

      links: this.Links(),

      copyrightText: Joi.string(),

      id: Joi.string(),

      businessHighlights: this.BusinessHighlights(),

      application: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),
    });
  }

  static InformationAddress() {
    return Joi.object({
      loc: Joi.string(),

      addressLine: Joi.array().items(Joi.string()),

      phone: this.InformationPhone(),

      city: Joi.string(),

      country: Joi.string(),

      pincode: Joi.number(),
    });
  }

  static InformationPhone() {
    return Joi.object({
      code: Joi.string(),

      number: Joi.string(),
    });
  }

  static InformationSupport() {
    return Joi.object({
      phone: Joi.array().items(Joi.string()),

      email: Joi.array().items(Joi.string()),

      timing: Joi.string(),
    });
  }

  static SocialLinks() {
    return Joi.object({
      facebook: this.Facebook(),

      instagram: this.Instagram(),

      twitter: this.Twitter(),

      pinterest: this.Pinterest(),

      googlePlus: this.GooglePlus(),

      youtube: this.Youtube(),

      linkedIn: this.LinkedIn(),

      vimeo: this.Vimeo(),

      blogLink: this.BlogLink(),
    });
  }

  static Instagram() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static Twitter() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static Pinterest() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static GooglePlus() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static Youtube() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static LinkedIn() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static Vimeo() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static BlogLink() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static Links() {
    return Joi.object({
      title: Joi.string(),

      link: Joi.string(),
    });
  }

  static BusinessHighlights() {
    return Joi.object({
      id: Joi.string(),

      title: Joi.string(),

      icon: Joi.string(),

      subTitle: Joi.string(),
    });
  }

  static ApplicationDetail() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      logo: this.SecureUrl(),

      mobileLogo: this.SecureUrl(),

      favicon: this.SecureUrl(),

      banner: this.SecureUrl(),

      domain: this.Domain(),

      domains: Joi.array().items(this.Domain()),

      id: Joi.string(),
    });
  }

  static CurrenciesResponse() {
    return Joi.object({
      items: Joi.array().items(this.Currency()),
    });
  }

  static OptedStoreAddress() {
    return Joi.object({
      state: Joi.string(),

      address1: Joi.string(),

      latLong: this.LatLong(),

      address2: Joi.string(),

      pincode: Joi.number(),

      country: Joi.string(),

      city: Joi.string(),
    });
  }

  static OrderingStore() {
    return Joi.object({
      address: this.OptedStoreAddress(),

      id: Joi.string(),

      uid: Joi.number(),

      name: Joi.string(),

      displayName: Joi.string(),

      storeType: Joi.string(),

      storeCode: Joi.string(),

      pincode: Joi.number(),

      code: Joi.string(),
    });
  }

  static OrderingStores() {
    return Joi.object({
      page: this.Pagination(),

      items: Joi.array().items(this.OrderingStore()),

      deployedStores: Joi.array().items(Joi.number()),

      allStores: Joi.boolean(),

      enabled: Joi.boolean(),

      type: Joi.string(),

      id: Joi.string(),

      app: Joi.string(),

      v: Joi.number(),
    });
  }

  static TokenResponse() {
    return Joi.object({
      tokens: this.Tokens(),

      id: Joi.string(),

      application: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),
    });
  }

  static Tokens() {
    return Joi.object({
      firebase: this.Firebase(),

      moengage: this.Moengage(),

      segment: this.Segment(),

      gtm: this.Gtm(),

      freshchat: this.Freshchat(),

      safetynet: this.Safetynet(),

      fyndRewards: this.FyndRewards(),

      auth: this.Auth(),

      googleMap: this.GoogleMap(),
    });
  }

  static Firebase() {
    return Joi.object({
      credentials: this.Credentials(),

      enabled: Joi.boolean(),
    });
  }

  static Credentials() {
    return Joi.object({
      ios: this.Ios(),

      android: this.Android(),

      projectId: Joi.string(),

      gcmSenderId: Joi.string(),

      applicationId: Joi.string(),

      apiKey: Joi.string(),
    });
  }

  static Ios() {
    return Joi.object({
      applicationId: Joi.string(),

      apiKey: Joi.string(),
    });
  }

  static Android() {
    return Joi.object({
      applicationId: Joi.string(),

      apiKey: Joi.string(),
    });
  }

  static Moengage() {
    return Joi.object({
      credentials: this.MoengageCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static MoengageCredentials() {
    return Joi.object({
      appId: Joi.string(),
    });
  }

  static Segment() {
    return Joi.object({
      credentials: this.SegmentCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static SegmentCredentials() {
    return Joi.object({
      writeKey: Joi.string(),
    });
  }

  static Gtm() {
    return Joi.object({
      credentials: this.GtmCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static GtmCredentials() {
    return Joi.object({
      apiKey: Joi.string(),
    });
  }

  static Freshchat() {
    return Joi.object({
      credentials: this.FreshchatCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static FreshchatCredentials() {
    return Joi.object({
      appId: Joi.string(),

      appKey: Joi.string(),

      webToken: Joi.string(),
    });
  }

  static Safetynet() {
    return Joi.object({
      credentials: this.SafetynetCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static SafetynetCredentials() {
    return Joi.object({
      apiKey: Joi.string(),
    });
  }

  static FyndRewards() {
    return Joi.object({
      credentials: this.FyndRewardsCredentials(),
    });
  }

  static FyndRewardsCredentials() {
    return Joi.object({
      publicKey: Joi.string(),
    });
  }

  static Auth() {
    return Joi.object({
      google: this.Google(),

      facebook: this.Facebook(),

      accountkit: this.Accountkit(),
    });
  }

  static GoogleMap() {
    return Joi.object({
      credentials: this.GoogleMapCredentials(),
    });
  }

  static GoogleMapCredentials() {
    return Joi.object({
      apiKey: Joi.string(),
    });
  }

  static AggregatorConfigDetail() {
    return Joi.object({
      userId: Joi.string(),

      merchantKey: Joi.string(),

      api: Joi.string(),

      sdk: Joi.boolean(),

      merchantId: Joi.string(),

      pin: Joi.string(),

      key: Joi.string(),

      secret: Joi.string(),

      configType: Joi.string(),

      verifyApi: Joi.string(),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      stripe: this.AggregatorConfigDetail(),

      payumoney: this.AggregatorConfigDetail(),

      juspay: this.AggregatorConfigDetail(),

      razorpay: this.AggregatorConfigDetail(),

      env: Joi.string(),

      simpl: this.AggregatorConfigDetail(),

      rupifi: this.AggregatorConfigDetail(),

      mswipe: this.AggregatorConfigDetail(),

      ccavenue: this.AggregatorConfigDetail(),

      success: Joi.boolean(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      code: Joi.string(),

      description: Joi.string(),
    });
  }

  static HttpErrorCodeAndResponse() {
    return Joi.object({
      error: this.ErrorCodeAndDescription(),

      success: Joi.boolean(),
    });
  }

  static AttachCardRequest() {
    return Joi.object({
      cardId: Joi.string(),

      refresh: Joi.boolean(),
    });
  }

  static AttachCardsResponse() {
    return Joi.object({
      data: Joi.object(),

      message: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static CardPaymentGateway() {
    return Joi.object({
      customerId: Joi.string(),

      api: Joi.string(),

      aggregator: Joi.string(),
    });
  }

  static ActiveCardPaymentGatewayResponse() {
    return Joi.object({
      cards: this.CardPaymentGateway(),

      message: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static Card() {
    return Joi.object({
      cardBrandImage: Joi.string(),

      cardName: Joi.string(),

      expired: Joi.boolean(),

      cardIsin: Joi.string(),

      cardFingerprint: Joi.string(),

      cardType: Joi.string(),

      cardNumber: Joi.string(),

      expMonth: Joi.number(),

      cardBrand: Joi.string(),

      expYear: Joi.number(),

      cardToken: Joi.string(),

      nickname: Joi.string(),

      cardIssuer: Joi.string(),

      aggregatorName: Joi.string(),

      cardId: Joi.string(),

      cardReference: Joi.string(),
    });
  }

  static ListCardsResponse() {
    return Joi.object({
      data: Joi.array().items(this.Card()),

      message: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static DeletehCardRequest() {
    return Joi.object({
      cardId: Joi.string(),
    });
  }

  static DeleteCardsResponse() {
    return Joi.object({
      message: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static ValidateCustomerRequest() {
    return Joi.object({
      merchantParams: Joi.object(),

      phoneNumber: Joi.string(),

      transactionAmountInPaise: Joi.number(),

      aggregator: Joi.string(),

      payload: Joi.string(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      data: Joi.object(),

      message: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      amount: Joi.number(),

      transactionToken: Joi.string(),

      verified: Joi.boolean(),

      orderId: Joi.string(),

      aggregator: Joi.string(),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      orderId: Joi.string(),

      aggregator: Joi.string(),

      deliveryAddressId: Joi.string(),

      success: Joi.boolean(),

      cartId: Joi.string(),

      message: Joi.string(),

      status: Joi.string(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      aggregatorOrderId: Joi.string(),

      method: Joi.string(),

      aggregator: Joi.string(),

      merchantOrderId: Joi.string(),

      customerId: Joi.string(),

      virtualId: Joi.string(),

      timeout: Joi.number(),

      pollingUrl: Joi.string(),

      razorpayPaymentId: Joi.string(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      amount: Joi.number(),

      aggregatorOrderId: Joi.string(),

      method: Joi.string(),

      aggregator: Joi.string(),

      razorpayPaymentId: Joi.string(),

      merchantOrderId: Joi.string(),

      bqrImage: Joi.string(),

      success: Joi.boolean(),

      vpa: Joi.string(),

      customerId: Joi.string(),

      currency: Joi.string(),

      virtualId: Joi.string(),

      timeout: Joi.number(),

      pollingUrl: Joi.string(),

      status: Joi.string(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      amount: Joi.number(),

      orderId: Joi.string(),

      aggregator: Joi.string(),

      method: Joi.string(),

      merchantOrderId: Joi.string(),

      contact: Joi.string(),

      email: Joi.string(),

      vpa: Joi.string(),

      customerId: Joi.string(),

      currency: Joi.string(),

      status: Joi.string(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      aggregatorName: Joi.string(),

      retry: Joi.boolean(),

      status: Joi.string(),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      data: Joi.object(),

      apiLink: Joi.string(),

      paymentFlow: Joi.string(),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      stripe: this.AggregatorRoute(),

      payubiz: this.AggregatorRoute(),

      juspay: this.AggregatorRoute(),

      razorpay: this.AggregatorRoute(),

      fynd: this.AggregatorRoute(),

      upiRazorpay: this.AggregatorRoute(),

      simpl: this.AggregatorRoute(),

      rupifi: this.AggregatorRoute(),

      ccavenue: this.AggregatorRoute(),

      msipe: this.AggregatorRoute(),

      bqrRazorpay: this.AggregatorRoute(),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string(),

      small: Joi.string(),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      cardNumber: Joi.string(),

      name: Joi.string(),

      cardBrand: Joi.string(),

      expYear: Joi.number(),

      cardToken: Joi.string(),

      logoUrl: this.PaymentModeLogo(),

      cardIssuer: Joi.string(),

      aggregatorName: Joi.string(),

      displayPriority: Joi.number(),

      merchantCode: Joi.string(),

      expMonth: Joi.number(),

      retryCount: Joi.number(),

      nickname: Joi.string(),

      cardBrandImage: Joi.string(),

      cardName: Joi.string(),

      expired: Joi.boolean(),

      cardIsin: Joi.string(),

      fyndVpa: Joi.string(),

      cardType: Joi.string(),

      intentFlow: Joi.string(),

      code: Joi.string(),

      cardFingerprint: Joi.string(),

      intentAppErrorList: Joi.array().items(Joi.string()),

      displayName: Joi.string(),

      timeout: Joi.number(),

      cardId: Joi.string(),

      cardReference: Joi.string(),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      anonymousEnable: Joi.boolean(),

      addCardEnabled: Joi.boolean(),

      displayName: Joi.string(),

      name: Joi.string(),

      aggregatorName: Joi.string(),

      list: Joi.array().items(this.PaymentModeList()),

      displayPriority: Joi.number(),
    });
  }

  static PaymentOptionAndFlow() {
    return Joi.object({
      paymentFlows: this.PaymentFlow(),

      paymentOption: Joi.array().items(this.RootPaymentMode()),
    });
  }

  static PaymentModeRouteResponse() {
    return Joi.object({
      paymentOptions: this.PaymentOptionAndFlow(),

      success: Joi.boolean(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      accountHolder: Joi.string(),

      transferMode: Joi.string(),

      title: Joi.string(),

      mobile: Joi.boolean(),

      beneficiaryId: Joi.string(),

      delightsUserName: Joi.string(),

      isActive: Joi.boolean(),

      bankName: Joi.string(),

      ifscCode: Joi.string(),

      subtitle: Joi.string(),

      branchName: Joi.boolean(),

      comment: Joi.boolean(),

      createdOn: Joi.string(),

      email: Joi.string(),

      displayName: Joi.string(),

      address: Joi.string(),

      id: Joi.number(),

      modifiedOn: Joi.string(),

      accountNo: Joi.string(),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array().items(this.OrderBeneficiaryDetails()),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      code: Joi.string(),

      description: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      bankName: Joi.string(),

      branchName: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      code: Joi.string(),

      description: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static AddBeneficiaryViaOtpVerificationRequest() {
    return Joi.object({
      hashKey: Joi.string(),

      requestId: Joi.string(),

      otp: Joi.string(),
    });
  }

  static AddBeneficiaryViaOtpVerificationResponse() {
    return Joi.object({
      hashKey: Joi.string(),

      requestId: Joi.string(),

      otp: Joi.string(),
    });
  }

  static WrongOtpError() {
    return Joi.object({
      description: Joi.string(),

      success: Joi.string(),
    });
  }

  static BankDetails() {
    return Joi.object({
      bankName: Joi.string(),

      accountHolder: Joi.string(),

      ifscCode: Joi.string(),

      email: Joi.string(),

      branchName: Joi.string(),

      address: Joi.string(),

      mobile: Joi.string(),

      comment: Joi.string(),

      accountNo: Joi.string(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      shipmentId: Joi.string(),

      orderId: Joi.string(),

      transferMode: Joi.string(),

      details: this.BankDetails(),

      delights: Joi.boolean(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      data: Joi.object(),

      message: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static WalletOtpRequest() {
    return Joi.object({
      countryCode: Joi.string(),

      mobile: Joi.boolean(),
    });
  }

  static WalletOtpResponse() {
    return Joi.object({
      requestId: Joi.string(),

      isVerifiedFlag: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static SetDefaultBeneficiaryRequest() {
    return Joi.object({
      beneficiaryId: Joi.string(),

      orderId: Joi.string(),
    });
  }

  static SetDefaultBeneficiaryResponse() {
    return Joi.object({
      isBeneficiarySet: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static OrderById() {
    return Joi.object({
      order: this.OrderSchema(),
    });
  }

  static OrderList() {
    return Joi.object({
      orders: Joi.array().items(this.OrderSchema()),

      page: this.OrderPage(),
    });
  }

  static OrderPage() {
    return Joi.object({
      itemTotal: Joi.number(),

      type: Joi.string(),

      size: Joi.number(),

      current: Joi.number(),

      hasNext: Joi.boolean(),
    });
  }

  static ShipmentById() {
    return Joi.object({
      shipment: this.Shipments(),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(this.Reasons()),
    });
  }

  static ShipmentStatusUpdateBody() {
    return Joi.object({
      shipments: this.Shipments(),

      forceTransition: Joi.boolean(),

      task: Joi.boolean(),
    });
  }

  static Shipments() {
    return Joi.object({
      shipmentId: Joi.string(),

      orderId: Joi.string(),

      breakupValues: Joi.array().items(this.BreakupValues()),

      enableCanReturn: Joi.boolean(),

      paymentModeSource: Joi.string(),

      shipmentImages: Joi.array().items(Joi.string()),

      trackUrl: Joi.string(),

      trakingNo: Joi.string(),

      trackingDetails: Joi.array().items(this.TrackingDetails()),

      beneficiaryDetails: Joi.boolean(),

      canReturn: Joi.boolean(),

      enableTracking: Joi.boolean(),

      prices: this.Prices(),

      needHelpUrl: Joi.string(),

      totalBags: Joi.number(),

      items: Joi.array().items(this.ProductItems()),

      deliveryAddress: this.DeliveryAddress(),

      paymentStatus: Joi.string(),

      invoice: this.Invoice(),

      comment: Joi.string(),

      orderType: Joi.string(),

      promise: this.Promise(),

      fulfillingStore: this.FulfillingStore(),

      totalItems: Joi.number(),

      bags: Joi.array().items(this.Bags()),

      canCancel: Joi.boolean(),

      paymentLogo: Joi.string(),

      shipmentCreatedAt: Joi.string(),

      shipmentStatus: this.ShipmentStatus(),

      userInfo: this.ShipmentUserInfo(),

      meta: this.ShipmentMeta(),
    });
  }

  static ShipmentId() {
    return Joi.object({
      statusUpdate: this.StatusUpdate(),

      message: Joi.array().items(Joi.any()),

      error: Joi.string(),

      status: Joi.boolean(),
    });
  }

  static StatusUpdate() {
    return Joi.object({
      status: Joi.string(),
    });
  }

  static ShipmentStatusUpdate() {
    return Joi.object({
      shipments: this.Shipments(),
    });
  }

  static ShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(this.Track()),
    });
  }

  static OrderSchema() {
    return Joi.object({
      orderId: Joi.string(),

      breakupValues: Joi.array().items(this.BreakupValues()),

      orderCreatedTime: Joi.string(),

      shipments: Joi.array().items(this.Shipments()),

      totalShipmentsInOrder: Joi.number(),

      userInfo: this.UserInfo(),
    });
  }

  static PosOrderById() {
    return Joi.object({
      order: this.OrderSchema(),
    });
  }

  static Bags() {
    return Joi.object({
      item: this.Item(),

      prices: this.Prices(),

      promotionEffectiveDiscount: Joi.number(),

      currentStatus: this.CurrentStatus(),

      bagStatus: Joi.array().items(this.BagStatus()),

      dates: this.Dates(),

      id: Joi.number(),

      status: this.BagState(),

      type: Joi.string(),

      financialBreakup: Joi.array().items(this.FinancialBreakup()),

      reasons: Joi.array().items(this.BagReasons()),

      article: this.Article(),

      journeyType: Joi.string(),

      currentOperationalStatus: this.CurrentOperationalStatus(),

      displayName: Joi.string(),

      entityType: Joi.string(),

      brand: this.Brand(),

      affiliateBagDetails: this.AffiliateBagDetails(),

      gstDetails: this.GstDetails(),

      bagId: Joi.number(),

      bagUpdateTime: Joi.number(),
    });
  }

  static Item() {
    return Joi.object({
      brandId: Joi.number(),

      canCancel: Joi.boolean(),

      brand: Joi.string(),

      l1Category: Joi.array().items(Joi.string()),

      name: Joi.string(),

      l2Category: Joi.array().items(Joi.string()),

      size: Joi.string(),

      canReturn: Joi.boolean(),

      l3Category: Joi.number(),

      lastUpdatedAt: Joi.string(),

      slugKey: Joi.string(),

      attributes: this.BagItemAttributes(),

      id: Joi.number(),

      code: Joi.string(),

      l3CategoryName: Joi.string(),

      image: Joi.array().items(Joi.string()),
    });
  }

  static BagItemAttributes() {
    return Joi.object({
      itemCode: Joi.string(),

      brandName: Joi.string(),

      countryOfOrigin: Joi.string(),
    });
  }

  static Prices() {
    return Joi.object({
      amountPaidRoundoff: Joi.number(),

      fyndCredits: Joi.number(),

      codCharges: Joi.number(),

      cashback: Joi.number(),

      addedToFyndCash: Joi.boolean(),

      priceMarked: Joi.number(),

      transferPrice: Joi.number(),

      couponValue: Joi.number(),

      priceEffective: Joi.number(),

      refundCredit: Joi.number(),

      amountPaid: Joi.number(),

      refundAmount: Joi.number(),

      cashbackApplied: Joi.number(),

      gstTaxPercentage: Joi.number(),

      valueOfGood: Joi.number(),

      brandCalculatedAmount: Joi.number(),

      promotionEffectiveDiscount: Joi.number(),

      discount: Joi.number(),

      couponEffectiveDiscount: Joi.number(),

      deliveryCharge: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      storeId: Joi.number(),

      bagId: Joi.number(),

      createdAt: Joi.string(),

      stateType: Joi.string(),

      id: Joi.number(),

      stateId: Joi.number(),

      updatedAt: Joi.string(),

      kafkaSync: Joi.boolean(),

      status: Joi.string(),

      bagStateMapper: this.BagStateMapper(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      name: Joi.string(),

      appStateName: Joi.string(),

      displayName: Joi.string(),

      appDisplayName: Joi.string(),

      isActive: Joi.boolean(),

      appFacing: Joi.boolean(),

      notifyCustomer: Joi.boolean(),

      journeyType: Joi.string(),

      id: Joi.number(),

      stateType: Joi.string(),
    });
  }

  static BagStatus() {
    return Joi.object({
      bagId: Joi.number(),

      kafkaSync: Joi.boolean(),

      status: Joi.string(),

      storeId: Joi.number(),

      stateType: Joi.string(),

      id: Joi.number(),

      updatedAt: Joi.string(),

      bagStateMapper: this.BagStatusBagStateMapper(),

      stateId: Joi.number(),

      createdAt: Joi.string(),
    });
  }

  static BagStatusBagStateMapper() {
    return Joi.object({
      appStateName: Joi.string(),

      isActive: Joi.boolean(),

      id: Joi.number(),

      appDisplayName: Joi.string(),

      appFacing: Joi.boolean(),

      notifyCustomer: Joi.boolean(),

      stateType: Joi.string(),

      journeyType: Joi.string(),

      name: Joi.string(),

      displayName: Joi.string(),
    });
  }

  static Dates() {
    return Joi.object({
      orderCreated: Joi.string(),
    });
  }

  static BagState() {
    return Joi.object({
      isReturnable: Joi.boolean(),

      canBeCancelled: Joi.boolean(),

      enableTracking: Joi.boolean(),

      isCustomerReturnAllowed: Joi.boolean(),

      isActive: Joi.boolean(),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      brandCalculatedAmount: Joi.number(),

      couponValue: Joi.number(),

      amountPaidRoundoff: Joi.number(),

      gstFee: Joi.string(),

      refundCredit: Joi.number(),

      cashback: Joi.number(),

      refundAmount: Joi.number(),

      valueOfGood: Joi.number(),

      promotionEffectiveDiscount: Joi.number(),

      size: Joi.string(),

      totalUnits: Joi.number(),

      discount: Joi.number(),

      amountPaid: Joi.number(),

      fyndCredits: Joi.number(),

      addedToFyndCash: Joi.boolean(),

      deliveryCharge: Joi.number(),

      hsnCode: Joi.string(),

      couponEffectiveDiscount: Joi.number(),

      transferPrice: Joi.number(),

      identifiers: this.Identifiers(),

      gstTag: Joi.string(),

      priceMarked: Joi.number(),

      priceEffective: Joi.number(),

      codCharges: Joi.number(),

      itemName: Joi.string(),

      cashbackApplied: Joi.number(),

      gstTaxPercentage: Joi.number(),
    });
  }

  static Identifiers() {
    return Joi.object({
      ean: Joi.string(),

      skuCode: Joi.string(),
    });
  }

  static BagReasons() {
    return Joi.object({
      id: Joi.number(),

      state: Joi.string(),

      bagId: Joi.number(),

      slug: Joi.string(),

      displayName: Joi.string(),
    });
  }

  static Article() {
    return Joi.object({
      espModified: Joi.boolean(),

      size: Joi.string(),

      id: Joi.string(),

      identifiers: this.ArticleIdentifiers(),

      isSet: Joi.boolean(),

      sellerIdentifier: Joi.string(),

      returnConfig: this.ReturnConfig(),

      uid: Joi.string(),

      code: Joi.string(),
    });
  }

  static ArticleIdentifiers() {
    return Joi.object({
      ean: Joi.string(),

      skuCode: Joi.string(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string(),

      returnable: Joi.boolean(),
    });
  }

  static CurrentOperationalStatus() {
    return Joi.object({
      id: Joi.number(),

      stateId: Joi.number(),

      kafkaSync: Joi.boolean(),

      reasons: Joi.array().items(this.CurrentOperationalStatusReasons()),

      storeId: Joi.number(),

      stateType: Joi.string(),

      updatedAt: Joi.string(),

      bagId: Joi.number(),

      status: Joi.string(),

      createdAt: Joi.string(),

      bagStateMapper: this.CurrentOperationalStatusBagStateMapper(),
    });
  }

  static CurrentOperationalStatusReasons() {
    return Joi.object({
      id: Joi.number(),

      state: Joi.string(),

      slug: Joi.string(),

      displayName: Joi.string(),
    });
  }

  static CurrentOperationalStatusBagStateMapper() {
    return Joi.object({
      stateType: Joi.string(),

      appStateName: Joi.string(),

      displayName: Joi.string(),

      id: Joi.number(),

      isActive: Joi.boolean(),

      journeyType: Joi.string(),

      name: Joi.string(),

      appDisplayName: Joi.string(),

      appFacing: Joi.boolean(),

      notifyCustomer: Joi.boolean(),
    });
  }

  static Brand() {
    return Joi.object({
      modifiedOn: Joi.string(),

      createdOn: Joi.string(),

      brandName: Joi.string(),

      isVirtualInvoice: Joi.boolean(),

      id: Joi.number(),

      creditNoteAllowed: Joi.boolean(),

      logo: Joi.string(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliateBagId: Joi.string(),

      affiliateOrderId: Joi.string(),

      affiliateMeta: this.AffiliateMeta(),

      loyaltyDiscount: Joi.number(),

      employeeDiscount: Joi.number(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      sizeLevelTotalQty: Joi.number(),

      fynd: this.Fynd(),

      isPriority: Joi.boolean(),

      employeeDiscount: Joi.number(),

      loyaltyDiscount: Joi.number(),
    });
  }

  static Fynd() {
    return Joi.object({
      fulfilmentIdentifier: Joi.string(),
    });
  }

  static GstDetails() {
    return Joi.object({
      valueOfGood: Joi.number(),

      gstTaxPercentage: Joi.number(),

      isDefaultHsnCode: Joi.boolean(),

      brandCalculatedAmount: Joi.number(),

      gstFee: Joi.string(),

      gstTag: Joi.string(),

      hsnCode: Joi.string(),
    });
  }

  static BreakupValues() {
    return Joi.object({
      display: Joi.string(),

      value: Joi.number(),

      name: Joi.string(),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      pincode: Joi.string(),

      landmark: Joi.string(),

      contactPerson: Joi.string(),

      phone: Joi.string(),

      state: Joi.string(),

      version: Joi.string(),

      address1: Joi.string(),

      createdAt: Joi.string(),

      addressType: Joi.string(),

      addressCategory: Joi.string(),

      area: Joi.string(),

      city: Joi.string(),

      latitude: Joi.number(),

      longitude: Joi.number(),

      email: Joi.string(),

      country: Joi.string(),

      address2: Joi.string(),

      updatedAt: Joi.string(),

      name: Joi.string(),

      address: Joi.string(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      address1: Joi.string(),

      storeEmail: Joi.string(),

      code: Joi.string(),

      storeAddressJson: this.StoreAddressJson(),

      country: Joi.string(),

      state: Joi.string(),

      pincode: Joi.string(),

      contactPerson: Joi.string(),

      brandStoreTags: Joi.array().items(Joi.any()),

      locationType: Joi.string(),

      address2: Joi.string(),

      isArchived: Joi.boolean(),

      id: Joi.number(),

      createdAt: Joi.string(),

      isEnabledForRecon: Joi.boolean(),

      city: Joi.string(),

      meta: this.FulfillingStoreMeta(),

      fulfillmentChannel: Joi.string(),

      isActive: Joi.boolean(),

      updatedAt: Joi.string(),

      loginUsername: Joi.string(),

      phone: Joi.string(),

      packagingMaterialCount: Joi.number(),

      name: Joi.string(),

      companyId: Joi.number(),
    });
  }

  static StoreAddressJson() {
    return Joi.object({
      area: Joi.string(),

      city: Joi.string(),

      longitude: Joi.number(),

      email: Joi.string(),

      phone: Joi.string(),

      address2: Joi.string(),

      landmark: Joi.string(),

      latitude: Joi.number(),

      addressType: Joi.string(),

      addressCategory: Joi.string(),

      state: Joi.string(),

      pincode: Joi.string(),

      version: Joi.string(),

      address1: Joi.string(),

      updatedAt: Joi.string(),

      country: Joi.string(),

      createdAt: Joi.string(),

      contactPerson: Joi.string(),
    });
  }

  static FulfillingStoreMeta() {
    return Joi.object({
      additionalContactDetails: this.AdditionalContactDetails(),

      timing: Joi.array().items(this.Timing()),

      documents: this.Documents(),

      displayName: Joi.string(),

      stage: Joi.string(),

      gstNumber: Joi.string(),

      allowDpAssignmentFromFynd: Joi.boolean(),
    });
  }

  static AdditionalContactDetails() {
    return Joi.object({
      number: Joi.array().items(Joi.any()),
    });
  }

  static Timing() {
    return Joi.object({
      opening: this.Opening(),

      weekday: Joi.string(),

      open: Joi.boolean(),

      closing: this.Closing(),
    });
  }

  static Opening() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static Closing() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static Documents() {
    return Joi.object({
      gst: this.Gst(),
    });
  }

  static Gst() {
    return Joi.object({
      value: Joi.string(),

      verified: Joi.boolean(),

      legalName: Joi.string(),

      type: Joi.string(),
    });
  }

  static Invoice() {
    return Joi.object({
      updatedDate: Joi.string(),

      invoiceUrl: Joi.string(),

      labelUrl: Joi.string(),
    });
  }

  static ProductItems() {
    return Joi.object({
      code: Joi.string(),

      lastUpdatedAt: Joi.string(),

      brand: Joi.string(),

      image: Joi.array().items(Joi.string()),

      l3Category: Joi.number(),

      brandId: Joi.number(),

      name: Joi.string(),

      canCancel: Joi.boolean(),

      size: Joi.string(),

      slugKey: Joi.string(),

      l3CategoryName: Joi.string(),

      l2Category: Joi.array().items(Joi.string()),

      id: Joi.number(),

      canReturn: Joi.boolean(),

      l1Category: Joi.array().items(Joi.string()),

      attributes: this.ProductItemAttributes(),
    });
  }

  static ProductItemAttributes() {
    return Joi.object({
      itemCode: Joi.string(),

      brandName: Joi.string(),

      countryOfOrigin: Joi.string(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      timestamp: this.Timestamp(),

      bagWeight: Joi.object(),

      dpOptions: this.DpOptions(),

      orderType: Joi.string(),

      sameStoreAvailable: Joi.boolean(),

      assignDpFromSb: Joi.boolean(),

      dpId: Joi.string(),

      weight: Joi.number(),

      formatted: this.Formatted(),

      debugInfo: this.DebugInfo(),

      dpSortKey: Joi.string(),

      packagingName: Joi.string(),
    });
  }

  static Timestamp() {
    return Joi.object({
      max: Joi.string(),

      min: Joi.string(),
    });
  }

  static DpOptions() {
    return Joi.object({
      dpOptionId: this.DpOptionId(),
    });
  }

  static DpOptionId() {
    return Joi.object({
      fPriority: Joi.number(),

      operations: Joi.string(),

      rPriority: Joi.number(),

      paymentMode: Joi.string(),

      fmPriority: Joi.number(),

      lmPriority: Joi.number(),

      rvpPriority: Joi.number(),

      assignDpFromSb: Joi.boolean(),
    });
  }

  static Formatted() {
    return Joi.object({
      max: Joi.string(),

      min: Joi.string(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreakerUuid: Joi.string(),
    });
  }

  static Promise() {
    return Joi.object({
      timestamp: this.Timestamp(),
    });
  }

  static Reasons() {
    return Joi.object({
      reasonText: Joi.string(),

      showTextArea: Joi.boolean(),

      feedbackType: Joi.string(),

      flow: Joi.string(),

      reasonId: Joi.number(),

      priority: Joi.number(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string(),

      hexCode: Joi.string(),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      gender: Joi.string(),

      mobile: Joi.string(),

      firstName: Joi.string(),

      lastName: Joi.string(),
    });
  }

  static Track() {
    return Joi.object({
      awb: Joi.string(),

      updatedAt: Joi.string(),

      lastLocationRecievedAt: Joi.string(),

      reason: Joi.string(),

      shipmentType: Joi.string(),

      status: Joi.string(),

      updatedTime: Joi.string(),

      accountName: Joi.string(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      isCurrent: Joi.boolean(),

      status: Joi.string(),

      time: Joi.string(),

      isPassed: Joi.string(),
    });
  }

  static UserInfo() {
    return Joi.object({
      gender: Joi.string(),

      mobile: Joi.string(),

      name: Joi.string(),

      email: Joi.string(),
    });
  }

  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static ActionPage() {
    return Joi.object({
      params: this.ActionPageParams(),

      type: Joi.string(),

      url: Joi.string(),
    });
  }

  static ActionPageParams() {
    return Joi.object({
      slug: Joi.array().items(Joi.string()),
    });
  }

  static CatalogueOrderRequest() {
    return Joi.object({
      articles: Joi.array().items(this.Article()),
    });
  }

  static CatalogueOrderResponse() {
    return Joi.object({
      articles: Joi.array().items(this.Article()),
    });
  }

  static CursorPage() {
    return Joi.object({
      hasNext: Joi.boolean(),

      hasPrevious: Joi.boolean(),

      itemTotal: Joi.number(),

      nextId: Joi.string(),

      type: Joi.string(),
    });
  }

  static Discount() {
    return Joi.object({
      absolute: Joi.number(),

      currency: Joi.string(),

      displayAbsolute: Joi.string(),

      displayPercent: Joi.string(),

      percent: Joi.number(),
    });
  }

  static Error() {
    return Joi.object({
      code: Joi.number(),

      exception: Joi.string(),

      info: Joi.string(),

      message: Joi.string(),
    });
  }

  static Offer() {
    return Joi.object({
      schedule: Joi.string(),

      active: Joi.boolean(),

      applicationId: Joi.string(),

      bannerImage: this.Asset(),

      createdAt: Joi.string(),

      infoAction: this.Action(),

      name: Joi.string(),

      rule: Joi.object(),

      share: this.ShareMessages(),

      subText: Joi.string(),

      text: Joi.string(),

      type: Joi.string(),

      updatedAt: Joi.string(),

      updatedBy: Joi.string(),

      url: Joi.string(),
    });
  }

  static OrderDiscountRequest() {
    return Joi.object({
      currency: Joi.string(),

      orderAmount: Joi.number(),
    });
  }

  static OrderDiscountResponse() {
    return Joi.object({
      appliedRuleBucket: this.OrderDiscountRuleBucket(),

      baseDiscount: this.Discount(),

      discount: this.Discount(),

      orderAmount: Joi.number(),

      points: Joi.number(),
    });
  }

  static OrderDiscountRuleBucket() {
    return Joi.object({
      high: Joi.number(),

      low: Joi.number(),

      max: Joi.number(),

      value: Joi.number(),

      valueType: Joi.string(),
    });
  }

  static PointsHistory() {
    return Joi.object({
      id: Joi.string(),

      applicationId: Joi.string(),

      claimed: Joi.boolean(),

      createdAt: Joi.string(),

      expiresOn: Joi.string(),

      meta: Joi.string(),

      points: Joi.number(),

      remainingPoints: Joi.number(),

      text1: Joi.string(),

      text2: Joi.string(),

      text3: Joi.string(),

      txnName: Joi.string(),

      updatedAt: Joi.string(),

      userId: Joi.string(),
    });
  }

  static PointsHistoryResponse() {
    return Joi.object({
      history: Joi.array().items(this.PointsHistory()),

      page: this.CursorPage(),
    });
  }

  static PointsResponse() {
    return Joi.object({
      points: Joi.number(),
    });
  }

  static RedeemReferralCodeRequest() {
    return Joi.object({
      deviceId: Joi.string(),

      referralCode: Joi.string(),
    });
  }

  static RedeemReferralCodeResponse() {
    return Joi.object({
      message: Joi.string(),

      points: Joi.number(),

      redeemed: Joi.boolean(),

      referrerId: Joi.string(),

      referrerInfo: Joi.string(),
    });
  }

  static ReferralDetailsResponse() {
    return Joi.object({
      referral: this.Offer(),

      referrerInfo: Joi.string(),

      share: this.ShareMessages(),

      user: this.ReferralDetailsUser(),
    });
  }

  static ReferralDetailsUser() {
    return Joi.object({
      blocked: Joi.boolean(),

      points: Joi.number(),

      redeemed: Joi.boolean(),

      referralCode: Joi.string(),
    });
  }

  static ShareMessages() {
    return Joi.object({
      email: Joi.string(),

      facebook: Joi.string(),

      fallback: Joi.string(),

      message: Joi.string(),

      messenger: Joi.string(),

      sms: Joi.string(),

      text: Joi.string(),

      twitter: Joi.string(),

      whatsapp: Joi.string(),
    });
  }

  static Access() {
    return Joi.object({
      answer: Joi.boolean(),

      askQuestion: Joi.boolean(),

      comment: Joi.boolean(),

      rnr: Joi.boolean(),
    });
  }

  static AddMediaListRequest() {
    return Joi.object({
      entityId: Joi.string(),

      entityType: Joi.string(),

      mediaList: Joi.array().items(this.AddMediaRequest()),

      refId: Joi.string(),

      refType: Joi.string(),
    });
  }

  static AddMediaRequest() {
    return Joi.object({
      cloudId: Joi.string(),

      cloudName: Joi.string(),

      cloudProvider: Joi.string(),

      entityId: Joi.string(),

      entityType: Joi.string(),

      mediaUrl: Joi.string(),

      refId: Joi.string(),

      refType: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      thumbnailUrl: Joi.string(),

      type: Joi.string(),
    });
  }

  static Attribute() {
    return Joi.object({
      createdOn: Joi.string(),

      description: Joi.string(),

      id: Joi.string(),

      modifiedOn: Joi.string(),

      name: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(this.TagMeta()),
    });
  }

  static AttributeObject() {
    return Joi.object({
      description: Joi.string(),

      name: Joi.string(),

      slug: Joi.string(),

      title: Joi.string(),

      type: Joi.string(),

      value: Joi.number(),
    });
  }

  static CheckEligibilityResponse() {
    return Joi.object({
      access: this.Access(),

      mediaCloud: this.MediaCloud(),
    });
  }

  static Cloud() {
    return Joi.object({
      id: Joi.string(),

      name: Joi.string(),

      provider: Joi.string(),
    });
  }

  static CommentRequest() {
    return Joi.object({
      comment: Joi.array().items(Joi.string()),

      entityId: Joi.string(),

      entityType: Joi.string(),
    });
  }

  static CreateQNARequest() {
    return Joi.object({
      choices: Joi.array().items(Joi.string()),

      entityId: Joi.string(),

      entityType: Joi.string(),

      maxLen: Joi.number(),

      sortPriority: Joi.number(),

      tags: Joi.array().items(Joi.string()),

      text: Joi.string(),

      type: Joi.string(),
    });
  }

  static DeviceMeta() {
    return Joi.object({
      appVersion: Joi.string(),

      platform: Joi.string(),
    });
  }

  static MediaCloud() {
    return Joi.object({
      key: Joi.string(),

      name: Joi.string(),

      namespace: Joi.string(),

      path: Joi.string(),

      provider: Joi.string(),

      secret: Joi.string(),
    });
  }

  static MediaMeta() {
    return Joi.object({
      cloud: this.Cloud(),

      comment: Joi.array().items(Joi.string()),

      description: Joi.string(),

      id: Joi.string(),

      type: Joi.string(),

      url: this.Url(),
    });
  }

  static PageCursor() {
    return Joi.object({
      hasNext: Joi.boolean(),

      hasPrevious: Joi.boolean(),

      itemTotal: Joi.number(),

      nextId: Joi.string(),

      type: Joi.string(),
    });
  }

  static PageNumber() {
    return Joi.object({
      current: Joi.number(),

      hasNext: Joi.boolean(),

      itemTotal: Joi.number(),

      size: Joi.number(),

      type: Joi.string(),
    });
  }

  static ReportAbuseRequest() {
    return Joi.object({
      description: Joi.string(),

      entityId: Joi.string(),

      entityType: Joi.string(),
    });
  }

  static SaveAttributeRequest() {
    return Joi.object({
      description: Joi.string(),

      name: Joi.string(),

      slug: Joi.string(),
    });
  }

  static TagMeta() {
    return Joi.object({
      media: Joi.array().items(this.MediaMeta()),

      name: Joi.string(),

      type: Joi.string(),
    });
  }

  static UpdateAbuseStatusRequest() {
    return Joi.object({
      abusive: Joi.boolean(),

      active: Joi.boolean(),

      approve: Joi.boolean(),

      description: Joi.string(),

      entityId: Joi.string(),

      entityType: Joi.string(),

      id: Joi.string(),
    });
  }

  static UpdateAttributeRequest() {
    return Joi.object({
      description: Joi.string(),

      name: Joi.string(),

      slug: Joi.string(),
    });
  }

  static UpdateCommentRequest() {
    return Joi.object({
      active: Joi.boolean(),

      approve: Joi.boolean(),

      comment: Joi.array().items(Joi.string()),

      id: Joi.string(),
    });
  }

  static UpdateMediaListRequest() {
    return Joi.object({
      approve: Joi.boolean(),

      archive: Joi.boolean(),

      entityType: Joi.string(),

      ids: Joi.array().items(Joi.string()),
    });
  }

  static UpdateQNARequest() {
    return Joi.object({
      active: Joi.boolean(),

      approve: Joi.boolean(),

      choices: Joi.array().items(Joi.string()),

      id: Joi.string(),

      tags: Joi.array().items(Joi.string()),
    });
  }

  static UpdateReviewRequest() {
    return Joi.object({
      active: Joi.boolean(),

      application: Joi.string(),

      approve: Joi.boolean(),

      archive: Joi.boolean(),

      attributesRating: Joi.array().items(this.AttributeObject()),

      description: Joi.string(),

      deviceMeta: this.DeviceMeta(),

      entityId: Joi.string(),

      entityType: Joi.string(),

      mediaResource: Joi.array().items(this.MediaMeta()),

      rating: Joi.number(),

      reviewId: Joi.string(),

      templateId: Joi.string(),

      title: Joi.string(),
    });
  }

  static UpdateVoteRequest() {
    return Joi.object({
      action: Joi.string(),

      active: Joi.boolean(),

      id: Joi.string(),

      refId: Joi.string(),

      refType: Joi.string(),
    });
  }

  static Url() {
    return Joi.object({
      main: Joi.string(),

      thumbnail: Joi.string(),
    });
  }

  static VoteRequest() {
    return Joi.object({
      action: Joi.string(),

      entityId: Joi.string(),

      entityType: Joi.string(),

      refId: Joi.string(),

      refType: Joi.string(),
    });
  }

  static XCursorGetResponse() {
    return Joi.object({
      items: Joi.object(),

      page: this.PageCursor(),
    });
  }

  static XInsertResponse() {
    return Joi.object({
      ids: Joi.string(),
    });
  }

  static XNumberGetResponse() {
    return Joi.object({
      items: Joi.object(),

      page: this.PageNumber(),
    });
  }

  static XUpdateResponse() {
    return Joi.object({
      id: Joi.string(),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      articleUid: Joi.string(),

      quantity: Joi.number(),

      shipmentType: Joi.string(),
    });
  }

  static UpdateCartShipmentRequest() {
    return Joi.object({
      shipments: Joi.array().items(this.UpdateCartShipmentItem()),
    });
  }

  static Files() {
    return Joi.object({
      key: Joi.string(),

      values: Joi.array().items(Joi.string()),
    });
  }

  static CartPosCheckoutRequest() {
    return Joi.object({
      paymentAutoConfirm: Joi.boolean(),

      pickAtStoreUid: Joi.number(),

      paymentIdentifier: Joi.string(),

      callbackUrl: Joi.string(),

      aggregator: Joi.string(),

      paymentParams: Joi.object(),

      deliveryAddress: Joi.object(),

      meta: Joi.object(),

      extraMeta: Joi.object(),

      addressId: Joi.number(),

      paymentMode: Joi.string(),

      orderType: Joi.string(),

      merchantCode: Joi.string(),

      billingAddress: Joi.object(),

      billingAddressId: Joi.number(),

      orderingStore: Joi.number(),

      fyndstoreEmpId: Joi.string(),

      pos: Joi.boolean(),

      staff: Joi.object(),

      files: this.Files(),
    });
  }

  static CartDeliveryModesResponse() {
    return Joi.object({
      availableModes: Joi.array().items(Joi.string()),

      pickupStores: Joi.array().items(Joi.number()),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      pincode: Joi.number(),

      areaCode: Joi.string(),

      landmark: Joi.string(),

      address: Joi.string(),

      city: Joi.string(),

      addressType: Joi.string(),

      area: Joi.string(),

      name: Joi.string(),

      areaCodeSlug: Joi.string(),

      storeCode: Joi.string(),

      email: Joi.string(),

      uid: Joi.number(),

      state: Joi.string(),

      country: Joi.string(),

      phone: Joi.string(),
    });
  }

  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(this.PickupStoreDetail()),
    });
  }

  static GetPincodeCityResponse() {
    return Joi.object({
      requestUuid: Joi.string(),

      stormbreakerUuid: Joi.string(),

      success: Joi.boolean(),

      data: Joi.array().items(this.LogisticPincodeData()),
    });
  }

  static LogisticPincodeData() {
    return Joi.object({
      meta: this.LogisticMeta(),

      parents: Joi.array().items(this.LogisticParents()),

      subType: Joi.string(),

      name: Joi.string(),

      error: this.LogisticError(),

      uid: Joi.string(),

      displayName: Joi.string(),
    });
  }

  static LogisticMeta() {
    return Joi.object({
      zone: Joi.string(),

      deliverables: Joi.array().items(Joi.any()),
    });
  }

  static LogisticParents() {
    return Joi.object({
      subType: Joi.string(),

      name: Joi.string(),

      displayName: Joi.string(),

      uid: Joi.string(),
    });
  }

  static LogisticError() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.string(),

      message: Joi.string(),
    });
  }

  static GetTatProductReqBody() {
    return Joi.object({
      locationDetails: this.LocationDetails(),

      source: Joi.string(),

      toPincode: Joi.string(),

      action: Joi.string(),

      identifier: Joi.string(),

      journey: Joi.string(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fromPincode: Joi.string(),

      articles: this.TatProductArticles(),

      fulfillmentId: Joi.number(),
    });
  }

  static TatProductArticles() {
    return Joi.object({
      error: Joi.object(),

      category: this.LogisticResponseCategory(),

      promise: this.LogisticPromise(),
    });
  }

  static LogisticRequestCategory() {
    return Joi.object({
      id: Joi.number(),

      level: Joi.string(),
    });
  }

  static LogisticPromise() {
    return Joi.object({
      timestamp: this.LogisticTimestamp(),

      formatted: this.Formatted(),
    });
  }

  static LogisticTimestamp() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static GetTatProductResponse() {
    return Joi.object({
      locationDetails: this.LocationDetails(),

      requestUuid: Joi.string(),

      error: Joi.object(),

      toCity: Joi.string(),

      source: Joi.string(),

      toPincode: Joi.string(),

      action: Joi.string(),

      stormbreakerUuid: Joi.string(),

      success: Joi.boolean(),

      identifier: Joi.string(),

      journey: Joi.string(),
    });
  }

  static LogisticResponseCategory() {
    return Joi.object({
      id: Joi.number(),

      level: Joi.string(),
    });
  }
}

class CatalogValidator {
  static getProductDetailBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getProductSizesBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
      storeId: Joi.string(),
    }).required();
  }

  static getProductPriceBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
      size: Joi.string().required(),
      pincode: Joi.string().required(),
      storeId: Joi.string(),
    }).required();
  }

  static getProductSellersBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
      size: Joi.string().required(),
      pincode: Joi.string().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getProductComparisonBySlugs() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getSimilarComparisonProductBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getComparedFrequentlyProductBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getProductSimilarByIdentifier() {
    return Joi.object({
      slug: Joi.string().required(),
      similarType: Joi.string().required(),
    }).required();
  }

  static getProductVariantsBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getProductStockByIds() {
    return Joi.object({
      itemId: Joi.string(),
      alu: Joi.string(),
      skuCode: Joi.string(),
      ean: Joi.string(),
      upc: Joi.string(),
    });
  }

  static getProductStockForTimeByIds() {
    return Joi.object({
      timestamp: Joi.string().required(),
      pageSize: Joi.number(),
      pageId: Joi.string(),
    }).required();
  }

  static getProducts() {
    return Joi.object({
      q: Joi.string(),
      f: Joi.string(),
      filters: Joi.boolean(),
      sortOn: Joi.string(),
      pageId: Joi.string(),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
      pageType: Joi.string(),
    });
  }

  static getBrands() {
    return Joi.object({
      department: Joi.string(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  static getBrandDetailBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getCategories() {
    return Joi.object({
      department: Joi.string(),
    });
  }

  static getCategoryDetailBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getHomeProducts() {
    return Joi.object({
      sortOn: Joi.string(),
      pageId: Joi.string(),
      pageSize: Joi.number(),
    });
  }

  static getDepartments() {
    return Joi.object({});
  }

  static getSearchResults() {
    return Joi.object({
      q: Joi.string().required(),
    }).required();
  }

  static getCollections() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  static getCollectionItemsBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
      f: Joi.string(),
      filters: Joi.boolean(),
      sortOn: Joi.string(),
      pageId: Joi.string(),
      pageSize: Joi.number(),
    }).required();
  }

  static getCollectionDetailBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getFollowedListing() {
    return Joi.object({
      collectionType: Joi.string().required(),
    }).required();
  }

  static followById() {
    return Joi.object({
      collectionType: Joi.string().required(),
      collectionId: Joi.string().required(),
    }).required();
  }

  static unfollowById() {
    return Joi.object({
      collectionType: Joi.string().required(),
      collectionId: Joi.string().required(),
    }).required();
  }

  static getFollowerCountById() {
    return Joi.object({
      collectionType: Joi.string().required(),
      collectionId: Joi.string().required(),
    }).required();
  }

  static getFollowIds() {
    return Joi.object({
      collectionType: Joi.string(),
    });
  }

  static getStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string(),
      range: Joi.number(),
      latitude: Joi.number(),
      longitude: Joi.number(),
    });
  }
}

class CartValidator {
  static getCart() {
    return Joi.object({
      uid: Joi.number(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      assignCardId: Joi.number(),
    });
  }

  static getCartLastModified() {
    return Joi.object({
      uid: Joi.number(),
    });
  }

  static addItems() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: Validator.AddCartRequest().required(),
    }).required();
  }

  static updateCart() {
    return Joi.object({
      uid: Joi.number(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: Validator.UpdateCartRequest().required(),
    }).required();
  }

  static getItemCount() {
    return Joi.object({
      uid: Joi.number(),
    });
  }

  static getCoupons() {
    return Joi.object({
      uid: Joi.number(),
    });
  }

  static applyCoupon() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      p: Joi.boolean(),
      uid: Joi.number(),
      body: Validator.ApplyCouponRequest().required(),
    }).required();
  }

  static removeCoupon() {
    return Joi.object({
      uid: Joi.number(),
    });
  }

  static getBulkDiscountOffers() {
    return Joi.object({
      itemId: Joi.number(),
      articleId: Joi.string(),
      uid: Joi.number(),
      slug: Joi.string(),
    });
  }

  static getAddresses() {
    return Joi.object({
      uid: Joi.number(),
      mobileNo: Joi.string(),
      checkoutMode: Joi.string(),
      tags: Joi.number(),
      isDefault: Joi.boolean(),
    });
  }

  static addAddress() {
    return Joi.object({
      body: Validator.Address().required(),
    }).required();
  }

  static getAddressById() {
    return Joi.object({
      id: Joi.number().required(),
      uid: Joi.number(),
      mobileNo: Joi.string(),
      checkoutMode: Joi.string(),
      tags: Joi.number(),
      isDefault: Joi.boolean(),
    }).required();
  }

  static updateAddress() {
    return Joi.object({
      id: Joi.number().required(),
      body: Validator.Address().required(),
    }).required();
  }

  static removeAddress() {
    return Joi.object({
      id: Joi.number().required(),
    }).required();
  }

  static selectAddress() {
    return Joi.object({
      uid: Joi.number(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: Validator.SelectCartAddressRequest().required(),
    }).required();
  }

  static selectPaymentMode() {
    return Joi.object({
      uid: Joi.string(),
      body: Validator.UpdateCartPaymentRequest().required(),
    }).required();
  }

  static validateCouponForPayment() {
    return Joi.object({
      uid: Joi.string(),
      addressId: Joi.string(),
      paymentMode: Joi.string(),
      paymentIdentifier: Joi.string(),
      aggregatorName: Joi.string(),
      merchantCode: Joi.string(),
    });
  }

  static getShipments() {
    return Joi.object({
      p: Joi.boolean(),
      uid: Joi.number(),
      addressId: Joi.number(),
      areaCode: Joi.string(),
    });
  }

  static checkoutCart() {
    return Joi.object({
      body: Validator.CartCheckoutRequest().required(),
    }).required();
  }

  static updateCartMeta() {
    return Joi.object({
      uid: Joi.number(),
      body: Validator.CartMetaRequest().required(),
    }).required();
  }

  static getCartShareLink() {
    return Joi.object({
      body: Validator.GetShareCartLinkRequest().required(),
    }).required();
  }

  static getCartSharedItems() {
    return Joi.object({
      token: Joi.string().required(),
    }).required();
  }

  static updateCartWithSharedItems() {
    return Joi.object({
      token: Joi.string().required(),
      action: Joi.string().required(),
    }).required();
  }
}

class LeadValidator {
  static getTicket() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static createHistory() {
    return Joi.object({
      ticketId: Joi.string().required(),
      body: Validator.TicketHistoryPayload().required(),
    }).required();
  }

  static createTicket() {
    return Joi.object({
      body: Validator.AddTicketPayload().required(),
    }).required();
  }

  static getCustomForm() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static submitCustomForm() {
    return Joi.object({
      slug: Joi.string().required(),
      body: Validator.CustomFormSubmissionPayload().required(),
    }).required();
  }

  static getParticipantsInsideVideoRoom() {
    return Joi.object({
      uniqueName: Joi.string().required(),
    }).required();
  }

  static getTokenForVideoRoom() {
    return Joi.object({
      uniqueName: Joi.string().required(),
    }).required();
  }
}

class ThemeValidator {
  static getAppliedTheme() {
    return Joi.object({});
  }

  static getThemeForPreview() {
    return Joi.object({
      themeId: Joi.string().required(),
    }).required();
  }
}

class UserValidator {
  static loginWithFacebook() {
    return Joi.object({
      body: Validator.OAuthRequestSchema().required(),
    }).required();
  }

  static loginWithGoogle() {
    return Joi.object({
      body: Validator.OAuthRequestSchema().required(),
    }).required();
  }

  static loginWithGoogleAndroid() {
    return Joi.object({
      body: Validator.OAuthRequestSchema().required(),
    }).required();
  }

  static loginWithGoogleIOS() {
    return Joi.object({
      body: Validator.OAuthRequestSchema().required(),
    }).required();
  }

  static loginWithOTP() {
    return Joi.object({
      platform: Joi.string(),
      body: Validator.SendOtpRequestSchema().required(),
    }).required();
  }

  static loginWithEmailAndPassword() {
    return Joi.object({
      body: Validator.PasswordLoginRequestSchema().required(),
    }).required();
  }

  static sendResetPasswordEmail() {
    return Joi.object({
      platform: Joi.string(),
      body: Validator.SendResetPasswordEmailRequestSchema().required(),
    }).required();
  }

  static forgotPassword() {
    return Joi.object({
      body: Validator.ForgotPasswordRequestSchema().required(),
    }).required();
  }

  static sendResetToken() {
    return Joi.object({
      body: Validator.CodeRequestBodySchema().required(),
    }).required();
  }

  static loginWithToken() {
    return Joi.object({
      body: Validator.TokenRequestBodySchema().required(),
    }).required();
  }

  static registerWithForm() {
    return Joi.object({
      platform: Joi.string(),
      body: Validator.FormRegisterRequestSchema().required(),
    }).required();
  }

  static verifyEmail() {
    return Joi.object({
      body: Validator.CodeRequestBodySchema().required(),
    }).required();
  }

  static verifyMobile() {
    return Joi.object({
      body: Validator.CodeRequestBodySchema().required(),
    }).required();
  }

  static hasPassword() {
    return Joi.object({});
  }

  static updatePassword() {
    return Joi.object({
      body: Validator.UpdatePasswordRequestSchema().required(),
    }).required();
  }

  static logout() {
    return Joi.object({});
  }

  static sendOTPOnMobile() {
    return Joi.object({
      platform: Joi.string(),
      body: Validator.SendMobileOtpRequestSchema().required(),
    }).required();
  }

  static verifyMobileOTP() {
    return Joi.object({
      platform: Joi.string(),
      body: Validator.VerifyOtpRequestSchema().required(),
    }).required();
  }

  static sendOTPOnEmail() {
    return Joi.object({
      platform: Joi.string(),
      body: Validator.SendEmailOtpRequestSchema().required(),
    }).required();
  }

  static verifyEmailOTP() {
    return Joi.object({
      platform: Joi.string(),
      body: Validator.VerifyOtpRequestSchema().required(),
    }).required();
  }

  static getLoggedInUser() {
    return Joi.object({});
  }

  static getListOfActiveSessions() {
    return Joi.object({});
  }

  static getPlatformConfig() {
    return Joi.object({
      name: Joi.string(),
    });
  }

  static updateProfile() {
    return Joi.object({
      platform: Joi.string(),
      body: Validator.EditProfileRequestSchema().required(),
    }).required();
  }

  static addMobileNumber() {
    return Joi.object({
      platform: Joi.string(),
      body: Validator.EditMobileRequestSchema().required(),
    }).required();
  }

  static deleteMobileNumber() {
    return Joi.object({
      platform: Joi.string(),
      active: Joi.boolean().required(),
      primary: Joi.boolean().required(),
      verified: Joi.boolean().required(),
      countryCode: Joi.string().required(),
      phone: Joi.string().required(),
    }).required();
  }

  static setMobileNumberAsPrimary() {
    return Joi.object({
      body: Validator.SendVerificationLinkMobileRequestSchema().required(),
    }).required();
  }

  static sendVerificationLinkToMobile() {
    return Joi.object({
      platform: Joi.string(),
      body: Validator.SendVerificationLinkMobileRequestSchema().required(),
    }).required();
  }

  static addEmail() {
    return Joi.object({
      platform: Joi.string(),
      body: Validator.EditEmailRequestSchema().required(),
    }).required();
  }

  static deleteEmail() {
    return Joi.object({
      platform: Joi.string(),
      active: Joi.boolean().required(),
      primary: Joi.boolean().required(),
      verified: Joi.boolean().required(),
      email: Joi.string().required(),
    }).required();
  }

  static setEmailAsPrimary() {
    return Joi.object({
      body: Validator.EditEmailRequestSchema().required(),
    }).required();
  }

  static sendVerificationLinkToEmail() {
    return Joi.object({
      platform: Joi.string(),
      body: Validator.EditEmailRequestSchema().required(),
    }).required();
  }
}

class ContentValidator {
  static getAnnouncements() {
    return Joi.object({});
  }

  static getBlog() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getFaqs() {
    return Joi.object({});
  }

  static getFaqCategories() {
    return Joi.object({});
  }

  static getFaqByIdOrSlug() {
    return Joi.object({
      idOrSlug: Joi.string().required(),
    }).required();
  }

  static getFaqCategoryBySlugOrId() {
    return Joi.object({
      idOrSlug: Joi.string().required(),
    }).required();
  }

  static getFaqsByCategoryIdOrSlug() {
    return Joi.object({
      idOrSlug: Joi.string().required(),
    }).required();
  }

  static getLandingPage() {
    return Joi.object({});
  }

  static getLegalInformation() {
    return Joi.object({});
  }

  static getNavigations() {
    return Joi.object({});
  }

  static getPage() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getSeoConfiguration() {
    return Joi.object({});
  }

  static getSlideshow() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getSupportInformation() {
    return Joi.object({});
  }

  static getTags() {
    return Joi.object({});
  }
}

class ShareValidator {
  static getApplicationQRCode() {
    return Joi.object({});
  }

  static getProductQRCodeBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getCollectionQRCodeBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getUrlQRCode() {
    return Joi.object({
      url: Joi.string().required(),
    }).required();
  }

  static createShortLink() {
    return Joi.object({
      body: Validator.ShortLinkReq().required(),
    }).required();
  }

  static getShortLinkByHash() {
    return Joi.object({
      hash: Joi.string().required(),
    }).required();
  }

  static getOriginalShortLinkByHash() {
    return Joi.object({
      hash: Joi.string().required(),
    }).required();
  }
}

class FileStorageValidator {
  static startUpload() {
    return Joi.object({
      namespace: Joi.string().required(),
      body: Validator.StartRequest().required(),
    }).required();
  }

  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().required(),
      body: Validator.StartResponse().required(),
    }).required();
  }
}

class ConfigurationValidator {
  static getApplication() {
    return Joi.object({});
  }

  static getOwnerInfo() {
    return Joi.object({});
  }

  static getBasicDetails() {
    return Joi.object({});
  }

  static getIntegrationTokens() {
    return Joi.object({});
  }

  static getOrderingStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string(),
    });
  }

  static getFeatures() {
    return Joi.object({});
  }

  static getContactInfo() {
    return Joi.object({});
  }

  static getCurrencies() {
    return Joi.object({});
  }

  static getCurrencyById() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static getLanguages() {
    return Joi.object({});
  }

  static getOrderingStoreCookie() {
    return Joi.object({
      body: Validator.OrderingStoreSelectRequest().required(),
    }).required();
  }

  static removeOrderingStoreCookie() {
    return Joi.object({});
  }

  static getAppStaffs() {
    return Joi.object({
      orderIncent: Joi.boolean(),
      orderingStore: Joi.number(),
      user: Joi.string(),
    });
  }
}

class PaymentValidator {
  static getAggregatorsConfig() {
    return Joi.object({
      xApiToken: Joi.string().required(),
      refresh: Joi.boolean(),
    }).required();
  }

  static attachCardToCustomer() {
    return Joi.object({
      body: Validator.AttachCardRequest().required(),
    }).required();
  }

  static getActiveCardAggregator() {
    return Joi.object({
      refresh: Joi.boolean(),
    });
  }

  static getActiveUserCards() {
    return Joi.object({
      forceRefresh: Joi.boolean(),
    });
  }

  static deleteUserCard() {
    return Joi.object({
      body: Validator.DeletehCardRequest().required(),
    }).required();
  }

  static verifyCustomerForPayment() {
    return Joi.object({
      body: Validator.ValidateCustomerRequest().required(),
    }).required();
  }

  static verifyAndChargePayment() {
    return Joi.object({
      body: Validator.ChargeCustomerRequest().required(),
    }).required();
  }

  static initialisePayment() {
    return Joi.object({
      body: Validator.PaymentInitializationRequest().required(),
    }).required();
  }

  static checkAndUpdatePaymentStatus() {
    return Joi.object({
      body: Validator.PaymentStatusUpdateRequest().required(),
    }).required();
  }

  static getPaymentModeRoutes() {
    return Joi.object({
      amount: Joi.number().required(),
      cartId: Joi.string().required(),
      pincode: Joi.string().required(),
      checkoutMode: Joi.string().required(),
      refresh: Joi.boolean(),
      assignCardId: Joi.string(),
      userDetails: Joi.string(),
    }).required();
  }

  static getPosPaymentModeRoutes() {
    return Joi.object({
      amount: Joi.number().required(),
      cartId: Joi.string().required(),
      pincode: Joi.string().required(),
      checkoutMode: Joi.string().required(),
      refresh: Joi.boolean(),
      assignCardId: Joi.string(),
      orderType: Joi.string().required(),
      userDetails: Joi.string(),
    }).required();
  }

  static getUserBeneficiariesDetail() {
    return Joi.object({
      orderId: Joi.string().required(),
    }).required();
  }

  static verifyIfscCode() {
    return Joi.object({
      ifscCode: Joi.string(),
    });
  }

  static getOrderBeneficiariesDetail() {
    return Joi.object({
      orderId: Joi.string().required(),
    }).required();
  }

  static verifyOtpAndAddBeneficiaryForBank() {
    return Joi.object({
      body: Validator.AddBeneficiaryViaOtpVerificationRequest().required(),
    }).required();
  }

  static addBeneficiaryDetails() {
    return Joi.object({
      body: Validator.AddBeneficiaryDetailsRequest().required(),
    }).required();
  }

  static verifyOtpAndAddBeneficiaryForWallet() {
    return Joi.object({
      body: Validator.WalletOtpRequest().required(),
    }).required();
  }

  static updateDefaultBeneficiary() {
    return Joi.object({
      body: Validator.SetDefaultBeneficiaryRequest().required(),
    }).required();
  }
}

class OrderValidator {
  static getOrders() {
    return Joi.object({
      pageNo: Joi.string(),
      pageSize: Joi.string(),
      fromDate: Joi.string(),
      toDate: Joi.string(),
    });
  }

  static getOrderById() {
    return Joi.object({
      orderId: Joi.string().required(),
    }).required();
  }

  static getShipmentById() {
    return Joi.object({
      shipmentId: Joi.string().required(),
    }).required();
  }

  static getShipmentReasons() {
    return Joi.object({
      shipmentId: Joi.string().required(),
    }).required();
  }

  static updateShipmentStatus() {
    return Joi.object({
      shipmentId: Joi.string().required(),
      body: Validator.ShipmentStatusUpdateBody().required(),
    }).required();
  }

  static trackShipment() {
    return Joi.object({
      shipmentId: Joi.string().required(),
    }).required();
  }

  static getPosOrderById() {
    return Joi.object({
      orderId: Joi.string().required(),
    }).required();
  }
}

class RewardsValidator {
  static getPointsOnProduct() {
    return Joi.object({
      body: Validator.CatalogueOrderRequest().required(),
    }).required();
  }

  static getOrderDiscount() {
    return Joi.object({
      body: Validator.OrderDiscountRequest().required(),
    }).required();
  }

  static getUserPoints() {
    return Joi.object({});
  }

  static getUserPointsHistory() {
    return Joi.object({
      pageId: Joi.string(),
      pageSize: Joi.number(),
    });
  }

  static getUserReferralDetails() {
    return Joi.object({});
  }

  static redeemReferralCode() {
    return Joi.object({
      body: Validator.RedeemReferralCodeRequest().required(),
    }).required();
  }
}

class FeedbackValidator {
  static createAbuseReport() {
    return Joi.object({
      body: Validator.ReportAbuseRequest().required(),
    }).required();
  }

  static updateAbuseReport() {
    return Joi.object({
      body: Validator.UpdateAbuseStatusRequest().required(),
    }).required();
  }

  static getAbuseReports() {
    return Joi.object({
      entityId: Joi.string().required(),
      entityType: Joi.string().required(),
      id: Joi.string(),
      pageId: Joi.string(),
      pageSize: Joi.number(),
    }).required();
  }

  static getAttributes() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  static createAttribute() {
    return Joi.object({
      body: Validator.SaveAttributeRequest().required(),
    }).required();
  }

  static getAttribute() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static updateAttribute() {
    return Joi.object({
      slug: Joi.string().required(),
      body: Validator.UpdateAttributeRequest().required(),
    }).required();
  }

  static createComment() {
    return Joi.object({
      body: Validator.CommentRequest().required(),
    }).required();
  }

  static updateComment() {
    return Joi.object({
      body: Validator.UpdateCommentRequest().required(),
    }).required();
  }

  static getComments() {
    return Joi.object({
      entityType: Joi.string().required(),
      id: Joi.string(),
      entityId: Joi.string(),
      userId: Joi.string(),
      pageId: Joi.string(),
      pageSize: Joi.number(),
    }).required();
  }

  static checkEligibility() {
    return Joi.object({
      entityType: Joi.string().required(),
      entityId: Joi.string().required(),
    }).required();
  }

  static deleteMedia() {
    return Joi.object({});
  }

  static createMedia() {
    return Joi.object({
      body: Validator.AddMediaListRequest().required(),
    }).required();
  }

  static updateMedia() {
    return Joi.object({
      body: Validator.UpdateMediaListRequest().required(),
    }).required();
  }

  static getMedias() {
    return Joi.object({
      entityType: Joi.string().required(),
      entityId: Joi.string().required(),
      id: Joi.string(),
      pageId: Joi.string(),
      pageSize: Joi.number(),
    }).required();
  }

  static getReviewSummaries() {
    return Joi.object({
      entityType: Joi.string().required(),
      entityId: Joi.string().required(),
      id: Joi.string(),
      pageId: Joi.string(),
      pageSize: Joi.number(),
    }).required();
  }

  static createReview() {
    return Joi.object({
      body: Validator.UpdateReviewRequest().required(),
    }).required();
  }

  static updateReview() {
    return Joi.object({
      body: Validator.UpdateReviewRequest().required(),
    }).required();
  }

  static getReviews() {
    return Joi.object({
      entityType: Joi.string().required(),
      entityId: Joi.string().required(),
      id: Joi.string(),
      userId: Joi.string(),
      media: Joi.string(),
      rating: Joi.array().items(Joi.number()),
      attributeRating: Joi.array().items(Joi.string()),
      facets: Joi.boolean(),
      sort: Joi.string(),
      pageId: Joi.string(),
      pageSize: Joi.number(),
    }).required();
  }

  static getTemplates() {
    return Joi.object({
      templateId: Joi.string(),
      entityId: Joi.string(),
      entityType: Joi.string(),
    });
  }

  static createQuestion() {
    return Joi.object({
      body: Validator.CreateQNARequest().required(),
    }).required();
  }

  static updateQuestion() {
    return Joi.object({
      body: Validator.UpdateQNARequest().required(),
    }).required();
  }

  static getQuestionAndAnswers() {
    return Joi.object({
      entityType: Joi.string().required(),
      entityId: Joi.string().required(),
      id: Joi.string(),
      showAnswer: Joi.boolean(),
      pageId: Joi.string(),
      pageSize: Joi.number(),
    }).required();
  }

  static getVotes() {
    return Joi.object({
      id: Joi.string(),
      refType: Joi.string(),
    });
  }

  static createVote() {
    return Joi.object({
      body: Validator.VoteRequest().required(),
    }).required();
  }

  static updateVote() {
    return Joi.object({
      body: Validator.UpdateVoteRequest().required(),
    }).required();
  }
}

class PosCartValidator {
  static getCart() {
    return Joi.object({
      uid: Joi.number(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      assignCardId: Joi.number(),
    });
  }

  static getCartLastModified() {
    return Joi.object({
      uid: Joi.number(),
    });
  }

  static addItems() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: Validator.AddCartRequest().required(),
    }).required();
  }

  static updateCart() {
    return Joi.object({
      uid: Joi.number(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: Validator.UpdateCartRequest().required(),
    }).required();
  }

  static getItemCount() {
    return Joi.object({
      uid: Joi.number(),
    });
  }

  static getCoupons() {
    return Joi.object({
      uid: Joi.number(),
    });
  }

  static applyCoupon() {
    return Joi.object({
      i: Joi.boolean(),
      b: Joi.boolean(),
      p: Joi.boolean(),
      uid: Joi.number(),
      body: Validator.ApplyCouponRequest().required(),
    }).required();
  }

  static removeCoupon() {
    return Joi.object({
      uid: Joi.number(),
    });
  }

  static getBulkDiscountOffers() {
    return Joi.object({
      itemId: Joi.number(),
      articleId: Joi.string(),
      uid: Joi.number(),
      slug: Joi.string(),
    });
  }

  static getAddresses() {
    return Joi.object({
      uid: Joi.number(),
      mobileNo: Joi.string(),
      checkoutMode: Joi.string(),
      tags: Joi.number(),
      isDefault: Joi.boolean(),
    });
  }

  static addAddress() {
    return Joi.object({
      body: Validator.Address().required(),
    }).required();
  }

  static getAddressById() {
    return Joi.object({
      id: Joi.number().required(),
      uid: Joi.number(),
      mobileNo: Joi.string(),
      checkoutMode: Joi.string(),
      tags: Joi.number(),
      isDefault: Joi.boolean(),
    }).required();
  }

  static updateAddress() {
    return Joi.object({
      id: Joi.number().required(),
      body: Validator.Address().required(),
    }).required();
  }

  static removeAddress() {
    return Joi.object({
      id: Joi.number().required(),
    }).required();
  }

  static selectAddress() {
    return Joi.object({
      uid: Joi.number(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: Validator.SelectCartAddressRequest().required(),
    }).required();
  }

  static selectPaymentMode() {
    return Joi.object({
      uid: Joi.string(),
      body: Validator.UpdateCartPaymentRequest().required(),
    }).required();
  }

  static validateCouponForPayment() {
    return Joi.object({
      uid: Joi.string(),
      addressId: Joi.string(),
      paymentMode: Joi.string(),
      paymentIdentifier: Joi.string(),
      aggregatorName: Joi.string(),
      merchantCode: Joi.string(),
    });
  }

  static getShipments() {
    return Joi.object({
      pickAtStoreUid: Joi.number(),
      orderingStoreId: Joi.number(),
      p: Joi.boolean(),
      uid: Joi.number(),
      addressId: Joi.number(),
      areaCode: Joi.string(),
      orderType: Joi.string(),
    });
  }

  static updateShipments() {
    return Joi.object({
      i: Joi.boolean(),
      p: Joi.boolean(),
      uid: Joi.number(),
      addressId: Joi.number(),
      orderType: Joi.string(),
      body: Validator.UpdateCartShipmentRequest().required(),
    }).required();
  }

  static checkoutCart() {
    return Joi.object({
      uid: Joi.number(),
      body: Validator.CartPosCheckoutRequest().required(),
    }).required();
  }

  static updateCartMeta() {
    return Joi.object({
      uid: Joi.number(),
      body: Validator.CartMetaRequest().required(),
    }).required();
  }

  static getAvailableDeliveryModes() {
    return Joi.object({
      areaCode: Joi.string().required(),
      uid: Joi.number(),
    }).required();
  }

  static getStoreAddressByUid() {
    return Joi.object({
      storeUid: Joi.number().required(),
    }).required();
  }

  static getCartShareLink() {
    return Joi.object({
      body: Validator.GetShareCartLinkRequest().required(),
    }).required();
  }

  static getCartSharedItems() {
    return Joi.object({
      token: Joi.string().required(),
    }).required();
  }

  static updateCartWithSharedItems() {
    return Joi.object({
      token: Joi.string().required(),
      action: Joi.string().required(),
    }).required();
  }
}

class LogisticValidator {
  static getTatProduct() {
    return Joi.object({
      body: Validator.GetTatProductReqBody().required(),
    }).required();
  }

  static getPincodeCity() {
    return Joi.object({
      pincode: Joi.string().required(),
    }).required();
  }
}

module.exports = {
  CatalogValidator,
  CartValidator,
  LeadValidator,
  ThemeValidator,
  UserValidator,
  ContentValidator,
  ShareValidator,
  FileStorageValidator,
  ConfigurationValidator,
  PaymentValidator,
  OrderValidator,
  RewardsValidator,
  FeedbackValidator,
  PosCartValidator,
  LogisticValidator,
  Validator,
};
