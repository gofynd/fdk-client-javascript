const Joi = require("joi");
class Validator {
  static ProductDetailAttribute = function () {
    return Joi.object({
      key: Joi.string(),

      type: Joi.string(),

      value: Joi.string(),
    });
  };

  static ProductDetailGroupedAttribute = function () {
    return Joi.object({
      details: Joi.array().items(this.ProductDetailAttribute()),

      title: Joi.string(),
    });
  };

  static Media = function () {
    return Joi.object({
      url: Joi.string(),

      type: Joi.string(),
    });
  };

  static ProductListingActionPage = function () {
    return Joi.object({
      query: Joi.object(),

      type: Joi.string(),
    });
  };

  static ProductListingAction = function () {
    return Joi.object({
      type: Joi.string(),

      page: this.ProductListingActionPage(),
    });
  };

  static ProductBrand = function () {
    return Joi.object({
      uid: Joi.number(),

      action: this.ProductListingAction(),

      logo: this.Media(),

      name: Joi.string(),
    });
  };

  static ProductDetail = function () {
    return Joi.object({
      attributes: Joi.object(),

      productOnlineDate: Joi.string(),

      highlights: Joi.array().items(Joi.string()),

      groupedAttributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      ratingCount: Joi.number(),

      medias: Joi.array().items(this.Media()),

      type: Joi.string(),

      brand: this.ProductBrand(),

      imageNature: Joi.string(),

      similars: Joi.array().items(Joi.string()),

      shortDescription: Joi.string(),

      uid: Joi.number(),

      name: Joi.string(),

      categories: Joi.array().items(this.ProductBrand()),

      color: Joi.string(),

      rating: Joi.number(),

      tryouts: Joi.array().items(Joi.string()),

      teaserTag: Joi.string(),

      itemType: Joi.string(),

      description: Joi.string(),

      hasVariant: Joi.boolean(),

      slug: Joi.string(),
    });
  };

  static ErrorResponse = function () {
    return Joi.object({
      error: Joi.string(),
    });
  };

  static ProductSize = function () {
    return Joi.object({
      quantity: Joi.number(),

      display: Joi.string(),

      isAvailable: Joi.boolean(),

      value: Joi.string(),
    });
  };

  static SizeChartValues = function () {
    return Joi.object({
      col3: Joi.string(),

      col6: Joi.string(),

      col2: Joi.string(),

      col1: Joi.string(),

      col5: Joi.string(),

      col4: Joi.string(),
    });
  };

  static ColumnHeader = function () {
    return Joi.object({
      convertable: Joi.boolean(),

      value: Joi.string(),
    });
  };

  static ColumnHeaders = function () {
    return Joi.object({
      col3: this.ColumnHeader(),

      col6: this.ColumnHeader(),

      col2: this.ColumnHeader(),

      col1: this.ColumnHeader(),

      col5: this.ColumnHeader(),

      col4: this.ColumnHeader(),
    });
  };

  static SizeChart = function () {
    return Joi.object({
      sizes: Joi.array().items(this.SizeChartValues()),

      unit: Joi.string(),

      title: Joi.string(),

      description: Joi.string(),

      headers: this.ColumnHeaders(),

      sizeTip: Joi.string(),

      image: Joi.string(),
    });
  };

  static Price = function () {
    return Joi.object({
      currencyCode: Joi.string(),

      currencySymbol: Joi.string(),

      min: Joi.number(),

      max: Joi.number(),
    });
  };

  static ProductListingPrice = function () {
    return Joi.object({
      effective: this.Price(),

      marked: this.Price(),
    });
  };

  static ProductSizeStores = function () {
    return Joi.object({
      count: Joi.number(),
    });
  };

  static ProductSizes = function () {
    return Joi.object({
      discount: Joi.string(),

      sizes: Joi.array().items(this.ProductSize()),

      sizeChart: this.SizeChart(),

      price: this.ProductListingPrice(),

      sellable: Joi.boolean(),

      stores: this.ProductSizeStores(),
    });
  };

  static ProductStockPrice = function () {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      currency: Joi.string(),
    });
  };

  static Store = function () {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string(),
    });
  };

  static ArticleAssignment = function () {
    return Joi.object({
      level: Joi.string(),

      strategy: Joi.string(),
    });
  };

  static ProductSetDistributionSize = function () {
    return Joi.object({
      pieces: Joi.number(),

      size: Joi.string(),
    });
  };

  static ProductSetDistribution = function () {
    return Joi.object({
      sizes: Joi.array().items(this.ProductSetDistributionSize()),
    });
  };

  static ProductSet = function () {
    return Joi.object({
      sizeDistribution: this.ProductSetDistribution(),

      quantity: Joi.number(),
    });
  };

  static Seller = function () {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string(),
    });
  };

  static ProductSizePriceResponse = function () {
    return Joi.object({
      discount: Joi.string(),

      price: this.ProductStockPrice(),

      itemType: Joi.string(),

      articleId: Joi.string(),

      store: this.Store(),

      sellerCount: Joi.number(),

      strategyWiseListing: Joi.array().items(Joi.object()),

      pricePerPrice: this.ProductStockPrice(),

      specialBadge: Joi.string(),

      quantity: Joi.number(),

      articleAssignment: this.ArticleAssignment(),

      set: this.ProductSet(),

      longLat: Joi.array().items(Joi.number()),

      pincode: Joi.number(),

      seller: this.Seller(),
    });
  };

  static ProductSizeSellerFilter = function () {
    return Joi.object({
      isSelected: Joi.boolean(),

      name: Joi.string(),

      value: Joi.string(),
    });
  };

  static Page = function () {
    return Joi.object({
      hasNext: Joi.boolean(),

      itemTotal: Joi.number(),

      type: Joi.string(),

      nextId: Joi.string(),

      hasPrevious: Joi.boolean(),

      size: Joi.number(),

      current: Joi.number(),
    });
  };

  static ProductSizeSellersResponse = function () {
    return Joi.object({
      sortOn: Joi.array().items(this.ProductSizeSellerFilter()),

      items: Joi.array().items(this.ProductSizePriceResponse()),

      page: this.Page(),
    });
  };

  static AttributeDetail = function () {
    return Joi.object({
      description: Joi.string(),

      key: Joi.string(),

      display: Joi.string(),
    });
  };

  static ProductsComparisonResponse = function () {
    return Joi.object({
      attributesMetadata: Joi.array().items(this.AttributeDetail()),

      items: Joi.array().items(this.ProductDetail()),
    });
  };

  static ProductCompareResponse = function () {
    return Joi.object({
      subtitle: Joi.string(),

      attributesMetadata: Joi.array().items(this.AttributeDetail()),

      title: Joi.string(),

      items: Joi.array().items(this.ProductDetail()),
    });
  };

  static ProductFrequentlyComparedSimilarResponse = function () {
    return Joi.object({
      similars: Joi.array().items(this.ProductCompareResponse()),
    });
  };

  static ProductSimilarItem = function () {
    return Joi.object({
      subtitle: Joi.string(),

      title: Joi.string(),

      items: Joi.array().items(this.ProductDetail()),
    });
  };

  static SimilarProductByTypeResponse = function () {
    return Joi.object({
      similars: Joi.array().items(this.ProductSimilarItem()),
    });
  };

  static ProductVariantItemResponse = function () {
    return Joi.object({
      medias: Joi.array().items(this.Media()),

      value: Joi.string(),

      uid: Joi.number(),

      isAvailable: Joi.boolean(),

      colorName: Joi.string(),

      slug: Joi.string(),

      name: Joi.string(),

      action: this.ProductListingAction(),

      color: Joi.string(),
    });
  };

  static ProductVariantResponse = function () {
    return Joi.object({
      displayType: Joi.string(),

      header: Joi.string(),

      items: Joi.array().items(this.ProductVariantItemResponse()),
    });
  };

  static ProductVariantsResponse = function () {
    return Joi.object({
      variants: Joi.array().items(this.ProductVariantResponse()),
    });
  };

  static CompanyDetail = function () {
    return Joi.object({
      name: Joi.string(),

      id: Joi.number(),
    });
  };

  static StoreDetail = function () {
    return Joi.object({
      code: Joi.string(),

      name: Joi.string(),

      id: Joi.number(),

      city: Joi.string(),
    });
  };

  static ProductStockStatusItem = function () {
    return Joi.object({
      price: this.ProductStockPrice(),

      company: this.CompanyDetail(),

      itemId: Joi.number(),

      uid: Joi.string(),

      quantity: Joi.number(),

      identifier: Joi.object(),

      size: Joi.string(),

      store: this.StoreDetail(),

      seller: this.Seller(),
    });
  };

  static ProductStockStatusResponse = function () {
    return Joi.object({
      items: Joi.array().items(this.ProductStockStatusItem()),
    });
  };

  static ProductStockPolling = function () {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.ProductStockStatusItem()),
    });
  };

  static ProductSortOn = function () {
    return Joi.object({
      isSelected: Joi.boolean(),

      name: Joi.string(),

      value: Joi.string(),
    });
  };

  static ProductListingDetail = function () {
    return Joi.object({
      attributes: Joi.object(),

      productOnlineDate: Joi.string(),

      highlights: Joi.array().items(Joi.string()),

      groupedAttributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      discount: Joi.string(),

      ratingCount: Joi.number(),

      medias: Joi.array().items(this.Media()),

      type: Joi.string(),

      brand: this.ProductBrand(),

      imageNature: Joi.string(),

      similars: Joi.array().items(Joi.string()),

      shortDescription: Joi.string(),

      uid: Joi.number(),

      name: Joi.string(),

      categories: Joi.array().items(this.ProductBrand()),

      color: Joi.string(),

      rating: Joi.number(),

      tryouts: Joi.array().items(Joi.string()),

      teaserTag: Joi.string(),

      itemType: Joi.string(),

      price: this.ProductListingPrice(),

      description: Joi.string(),

      hasVariant: Joi.boolean(),

      slug: Joi.string(),

      sellable: Joi.boolean(),
    });
  };

  static ProductFiltersKey = function () {
    return Joi.object({
      kind: Joi.string(),

      logo: Joi.string(),

      name: Joi.string(),

      display: Joi.string(),
    });
  };

  static ProductFiltersValue = function () {
    return Joi.object({
      count: Joi.number(),

      value: Joi.string(),

      displayFormat: Joi.string(),

      queryFormat: Joi.string(),

      currencyCode: Joi.string(),

      selectedMin: Joi.number(),

      min: Joi.number(),

      max: Joi.number(),

      selectedMax: Joi.number(),

      currencySymbol: Joi.string(),

      isSelected: Joi.boolean(),

      display: Joi.string(),
    });
  };

  static ProductFilters = function () {
    return Joi.object({
      key: this.ProductFiltersKey(),

      values: Joi.array().items(this.ProductFiltersValue()),
    });
  };

  static ProductListingResponse = function () {
    return Joi.object({
      sortOn: Joi.array().items(this.ProductSortOn()),

      items: Joi.array().items(this.ProductListingDetail()),

      filters: Joi.array().items(this.ProductFilters()),

      page: this.Page(),
    });
  };

  static ImageUrls = function () {
    return Joi.object({
      portrait: this.Media(),

      landscape: this.Media(),
    });
  };

  static BrandItem = function () {
    return Joi.object({
      discount: Joi.string(),

      logo: this.Media(),

      banners: this.ImageUrls(),

      uid: Joi.number(),

      action: this.ProductListingAction(),

      name: Joi.string(),

      departments: Joi.array().items(Joi.string()),

      slug: Joi.string(),
    });
  };

  static BrandListingResponse = function () {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.BrandItem()),
    });
  };

  static BrandDetailResponse = function () {
    return Joi.object({
      uid: Joi.number(),

      banners: this.ImageUrls(),

      logo: this.Media(),

      name: Joi.string(),
    });
  };

  static DepartmentIdentifier = function () {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string(),
    });
  };

  static CategoryItems = function () {
    return Joi.object({
      banners: this.ImageUrls(),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.object()),

      action: this.ProductListingAction(),

      slug: Joi.string(),

      name: Joi.string(),
    });
  };

  static DepartmentCategoryTree = function () {
    return Joi.object({
      department: Joi.string(),

      items: Joi.array().items(this.CategoryItems()),
    });
  };

  static CategoryListingResponse = function () {
    return Joi.object({
      departments: Joi.array().items(this.DepartmentIdentifier()),

      data: Joi.array().items(this.DepartmentCategoryTree()),
    });
  };

  static CategoryMetaResponse = function () {
    return Joi.object({
      uid: Joi.number(),

      banners: this.ImageUrls(),

      logo: this.Media(),

      name: Joi.string(),
    });
  };

  static HomeListingResponse = function () {
    return Joi.object({
      page: this.Page(),

      message: Joi.string(),

      items: Joi.array().items(this.ProductListingDetail()),
    });
  };

  static Department = function () {
    return Joi.object({
      logo: this.Media(),

      uid: Joi.number(),

      slug: Joi.string(),

      name: Joi.string(),

      priorityOrder: Joi.number(),
    });
  };

  static DepartmentResponse = function () {
    return Joi.object({
      items: Joi.array().items(this.Department()),
    });
  };

  static PageQuery = function () {
    return Joi.object({
      brand: Joi.array().items(Joi.string()),

      category: Joi.array().items(Joi.string()),
    });
  };

  static AutocompletePage = function () {
    return Joi.object({
      query: this.PageQuery(),

      type: Joi.string(),
    });
  };

  static Action = function () {
    return Joi.object({
      type: Joi.string(),

      page: this.AutocompletePage(),
    });
  };

  static AutocompleteItem = function () {
    return Joi.object({
      logo: this.Media(),

      action: this.Action(),

      display: Joi.string(),

      type: Joi.string(),
    });
  };

  static AutoCompleteResponse = function () {
    return Joi.object({
      items: Joi.array().items(this.AutocompleteItem()),
    });
  };

  static CollectionListingFilterTag = function () {
    return Joi.object({
      isSelected: Joi.boolean(),

      name: Joi.string(),

      display: Joi.string(),
    });
  };

  static CollectionListingFilterType = function () {
    return Joi.object({
      isSelected: Joi.boolean(),

      name: Joi.string(),

      display: Joi.string(),
    });
  };

  static CollectionListingFilter = function () {
    return Joi.object({
      tags: Joi.array().items(this.CollectionListingFilterTag()),

      type: Joi.array().items(this.CollectionListingFilterType()),
    });
  };

  static GetCollectionDetailNest = function () {
    return Joi.object({
      allowFacets: Joi.boolean(),

      query: Joi.object(),

      tag: Joi.array().items(Joi.string()),

      badge: Joi.object(),

      logo: this.Media(),

      type: Joi.string(),

      schedule: Joi.object(),

      meta: Joi.object(),

      banners: this.ImageUrls(),

      uid: Joi.string(),

      appId: Joi.string(),

      allowSort: Joi.boolean(),

      name: Joi.string(),

      visibleFacetsKeys: Joi.array().items(Joi.string()),

      isActive: Joi.boolean(),

      description: Joi.string(),

      slug: Joi.string(),

      action: this.ProductListingAction(),

      cron: Joi.object(),
    });
  };

  static GetCollectionListingResponse = function () {
    return Joi.object({
      page: this.Page(),

      filters: this.CollectionListingFilter(),

      items: Joi.array().items(this.GetCollectionDetailNest()),
    });
  };

  static CollectionDetailResponse = function () {
    return Joi.object({
      badge: Joi.object(),

      banners: this.ImageUrls(),

      logo: this.Media(),

      allowFacets: Joi.boolean(),

      type: Joi.string(),

      description: Joi.string(),

      query: Joi.object(),

      appId: Joi.string(),

      allowSort: Joi.boolean(),

      schedule: Joi.object(),

      name: Joi.string(),

      slug: Joi.string(),

      visibleFacetsKeys: Joi.array().items(Joi.string()),

      cron: Joi.object(),

      isActive: Joi.boolean(),

      meta: Joi.object(),

      tag: Joi.array().items(Joi.string()),
    });
  };

  static GetFollowListingResponse = function () {
    return Joi.object({
      items: Joi.array().items(this.ProductDetail()),

      page: this.Page(),
    });
  };

  static FollowPostResponse = function () {
    return Joi.object({
      id: Joi.string(),

      message: Joi.string(),
    });
  };

  static FollowerCountResponse = function () {
    return Joi.object({
      count: Joi.number(),
    });
  };

  static FollowIdsData = function () {
    return Joi.object({
      brands: Joi.array().items(Joi.number()),

      products: Joi.array().items(Joi.number()),

      collections: Joi.array().items(Joi.number()),
    });
  };

  static FollowIdsResponse = function () {
    return Joi.object({
      data: this.FollowIdsData(),
    });
  };

  static LatLong = function () {
    return Joi.object({
      coordinates: Joi.array().items(Joi.number()),

      type: Joi.string(),
    });
  };

  static Store1 = function () {
    return Joi.object({
      storeEmail: Joi.string(),

      address: Joi.string(),

      latLong: this.LatLong(),

      uid: Joi.number(),

      city: Joi.string(),

      name: Joi.string(),

      storeCode: Joi.string(),

      state: Joi.string(),

      pincode: Joi.number(),

      country: Joi.string(),
    });
  };

  static StoreListingResponse = function () {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.Store1()),
    });
  };

  static CouponBreakup = function () {
    return Joi.object({
      value: Joi.number(),

      isApplied: Joi.boolean(),

      code: Joi.string(),

      uid: Joi.string(),

      message: Joi.string(),

      type: Joi.string(),
    });
  };

  static DisplayBreakup = function () {
    return Joi.object({
      currencyCode: Joi.string(),

      currencySymbol: Joi.string(),

      value: Joi.number(),

      display: Joi.string(),

      key: Joi.string(),

      message: Joi.array().items(Joi.string()),
    });
  };

  static LoyaltyPoints = function () {
    return Joi.object({
      isApplied: Joi.boolean(),

      description: Joi.string(),

      total: Joi.number(),

      applicable: Joi.number(),
    });
  };

  static RawBreakup = function () {
    return Joi.object({
      subtotal: Joi.number(),

      fyndCash: Joi.number(),

      coupon: Joi.number(),

      youSaved: Joi.number(),

      codCharge: Joi.number(),

      deliveryCharge: Joi.number(),

      total: Joi.number(),
    });
  };

  static CartBreakup = function () {
    return Joi.object({
      coupon: this.CouponBreakup(),

      display: Joi.array().items(this.DisplayBreakup()),

      loyaltyPoints: this.LoyaltyPoints(),

      raw: this.RawBreakup(),
    });
  };

  static CartCurrency = function () {
    return Joi.object({
      code: Joi.string(),

      symbol: Joi.string(),
    });
  };

  static PromiseTimestamp = function () {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  };

  static PromiseFormatted = function () {
    return Joi.object({
      min: Joi.string(),

      max: Joi.string(),
    });
  };

  static ShipmentPromise = function () {
    return Joi.object({
      timestamp: this.PromiseTimestamp(),

      formatted: this.PromiseFormatted(),
    });
  };

  static Image = function () {
    return Joi.object({
      aspectRatio: Joi.string(),

      secureUrl: Joi.string(),

      url: Joi.string(),
    });
  };

  static CategoryInfo = function () {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string(),
    });
  };

  static ActionQuery = function () {
    return Joi.object({
      productSlug: Joi.array().items(Joi.string()),
    });
  };

  static ProductAction = function () {
    return Joi.object({
      url: Joi.string(),

      query: this.ActionQuery(),

      type: Joi.string(),
    });
  };

  static BaseInfo = function () {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string(),
    });
  };

  static Product = function () {
    return Joi.object({
      images: Joi.array().items(this.Image()),

      categories: Joi.array().items(this.CategoryInfo()),

      uid: Joi.number(),

      slug: Joi.string(),

      name: Joi.string(),

      action: this.ProductAction(),

      brand: this.BaseInfo(),

      type: Joi.string(),
    });
  };

  static CartProductIdentifer = function () {
    return Joi.object({
      identifier: Joi.string(),
    });
  };

  static ProductPrice = function () {
    return Joi.object({
      currencyCode: Joi.string(),

      currencySymbol: Joi.string(),

      effective: Joi.number(),

      addOn: Joi.number(),

      selling: Joi.number(),

      marked: Joi.number(),
    });
  };

  static ProductPriceInfo = function () {
    return Joi.object({
      base: this.ProductPrice(),

      converted: this.ProductPrice(),
    });
  };

  static BasePrice = function () {
    return Joi.object({
      marked: Joi.number(),

      currencyCode: Joi.string(),

      currencySymbol: Joi.string(),

      effective: Joi.number(),
    });
  };

  static ArticlePriceInfo = function () {
    return Joi.object({
      base: this.BasePrice(),

      converted: this.BasePrice(),
    });
  };

  static ProductArticle = function () {
    return Joi.object({
      seller: this.BaseInfo(),

      store: this.BaseInfo(),

      size: Joi.string(),

      uid: Joi.string(),

      price: this.ArticlePriceInfo(),

      type: Joi.string(),

      quantity: Joi.number(),
    });
  };

  static ProductAvailability = function () {
    return Joi.object({
      outOfStock: Joi.boolean(),

      otherStoreQuantity: Joi.number(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string()),

      isValid: Joi.boolean(),
    });
  };

  static CartProductInfo = function () {
    return Joi.object({
      product: this.Product(),

      identifiers: this.CartProductIdentifer(),

      bulkOffer: Joi.object(),

      price: this.ProductPriceInfo(),

      couponMessage: Joi.string(),

      discount: Joi.string(),

      article: this.ProductArticle(),

      isSet: Joi.boolean(),

      availability: this.ProductAvailability(),

      key: Joi.string(),

      message: Joi.string(),

      quantity: Joi.number(),
    });
  };

  static CartResponse = function () {
    return Joi.object({
      breakupValues: this.CartBreakup(),

      lastModified: Joi.string(),

      uid: Joi.string(),

      currency: this.CartCurrency(),

      checkoutMode: Joi.string(),

      restrictCheckout: Joi.boolean(),

      couponText: Joi.string(),

      isValid: Joi.boolean(),

      comment: Joi.string(),

      deliveryPromise: this.ShipmentPromise(),

      cartId: Joi.number(),

      items: Joi.array().items(this.CartProductInfo()),

      deliveryChargeInfo: Joi.string(),

      message: Joi.string(),

      gstin: Joi.string(),
    });
  };

  static AddProductCart = function () {
    return Joi.object({
      pos: Joi.boolean(),

      itemSize: Joi.string(),

      articleId: Joi.string(),

      storeId: Joi.number(),

      sellerId: Joi.number(),

      articleAssignment: Joi.object(),

      display: Joi.string(),

      itemId: Joi.number(),

      quantity: Joi.number(),
    });
  };

  static AddCartRequest = function () {
    return Joi.object({
      items: Joi.array().items(this.AddProductCart()),
    });
  };

  static AddCartResponse = function () {
    return Joi.object({
      cart: this.CartResponse(),

      message: Joi.string(),

      success: Joi.boolean(),

      partial: Joi.boolean(),
    });
  };

  static UpdateProductCart = function () {
    return Joi.object({
      itemSize: Joi.string(),

      identifiers: this.CartProductIdentifer(),

      itemIndex: Joi.number(),

      articleId: Joi.string(),

      itemId: Joi.number(),

      quantity: Joi.number(),
    });
  };

  static UpdateCartRequest = function () {
    return Joi.object({
      operation: Joi.string(),

      items: Joi.array().items(this.UpdateProductCart()),
    });
  };

  static UpdateCartResponse = function () {
    return Joi.object({
      cart: this.CartResponse(),

      message: Joi.string(),

      success: Joi.boolean(),
    });
  };

  static CartItemCountResponse = function () {
    return Joi.object({
      userCartItemsCount: Joi.number(),
    });
  };

  static Coupon = function () {
    return Joi.object({
      subTitle: Joi.string(),

      title: Joi.string(),

      isApplied: Joi.boolean(),

      isApplicable: Joi.boolean(),

      expiresOn: Joi.string(),

      maxDiscountValue: Joi.number(),

      couponCode: Joi.string(),

      message: Joi.string(),

      couponValue: Joi.number(),

      minimumCartValue: Joi.number(),
    });
  };

  static PageCoupon = function () {
    return Joi.object({
      hasNext: Joi.boolean(),

      totalItemCount: Joi.number(),

      hasPrevious: Joi.boolean(),

      current: Joi.number(),

      total: Joi.number(),
    });
  };

  static GetCouponResponse = function () {
    return Joi.object({
      availableCouponList: Joi.array().items(this.Coupon()),

      page: this.PageCoupon(),
    });
  };

  static ApplyCouponRequest = function () {
    return Joi.object({
      couponCode: Joi.string(),
    });
  };

  static OfferSeller = function () {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string(),
    });
  };

  static OfferPrice = function () {
    return Joi.object({
      bulkEffective: Joi.number(),

      currencySymbol: Joi.string(),

      effective: Joi.number(),

      currencyCode: Joi.string(),

      marked: Joi.number(),
    });
  };

  static OfferItem = function () {
    return Joi.object({
      total: Joi.number(),

      best: Joi.boolean(),

      margin: Joi.number(),

      price: this.OfferPrice(),

      autoApplied: Joi.boolean(),

      type: Joi.string(),

      quantity: Joi.number(),
    });
  };

  static BulkPriceOffer = function () {
    return Joi.object({
      seller: this.OfferSeller(),

      offers: Joi.array().items(this.OfferItem()),
    });
  };

  static BulkPriceResponse = function () {
    return Joi.object({
      data: Joi.array().items(this.BulkPriceOffer()),
    });
  };

  static GeoLocation = function () {
    return Joi.object({
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  };

  static Address = function () {
    return Joi.object({
      meta: Joi.object(),

      country: Joi.string(),

      isDefaultAddress: Joi.boolean(),

      name: Joi.string(),

      email: Joi.string(),

      userId: Joi.string(),

      addressType: Joi.string(),

      uid: Joi.number(),

      landmark: Joi.string(),

      phone: Joi.string(),

      checkoutMode: Joi.string(),

      geoLocation: this.GeoLocation(),

      tags: Joi.array().items(Joi.object()),

      state: Joi.string(),

      areaCodeSlug: Joi.string(),

      countryCode: Joi.string(),

      area: Joi.string(),

      city: Joi.string(),

      isActive: Joi.boolean(),

      areaCode: Joi.string(),

      address: Joi.string(),
    });
  };

  static GetAddressesResponse = function () {
    return Joi.object({
      address: Joi.array().items(this.Address()),
    });
  };

  static SaveAddressResponse = function () {
    return Joi.object({
      addressId: Joi.number(),

      isDefaultAddress: Joi.boolean(),

      success: Joi.string(),
    });
  };

  static UpdateAddressResponse = function () {
    return Joi.object({
      addressId: Joi.number(),

      isUpdated: Joi.boolean(),

      success: Joi.boolean(),

      isDefaultAddress: Joi.boolean(),
    });
  };

  static DeleteAddressResponse = function () {
    return Joi.object({
      addressId: Joi.number(),

      isDeleted: Joi.boolean(),
    });
  };

  static SelectCartAddressRequest = function () {
    return Joi.object({
      addressId: Joi.string(),

      uid: Joi.string(),

      billingAddressId: Joi.number(),
    });
  };

  static UpdateCartPaymentRequest = function () {
    return Joi.object({
      paymentMode: Joi.string(),

      paymentIdentifier: Joi.string(),

      uid: Joi.number(),

      addressId: Joi.number(),

      merchantCode: Joi.string(),

      aggregatorName: Joi.string(),
    });
  };

  static CouponValidity = function () {
    return Joi.object({
      code: Joi.string(),

      discount: Joi.number(),

      valid: Joi.boolean(),

      displayMessageEn: Joi.string(),
    });
  };

  static PaymentUpdate = function () {
    return Joi.object({
      couponValidity: this.CouponValidity(),

      message: Joi.string(),

      success: Joi.boolean(),
    });
  };

  static ShipmentResponse = function () {
    return Joi.object({
      fulfillmentId: Joi.number(),

      promise: this.ShipmentPromise(),

      shipments: Joi.number(),

      shipmentType: Joi.string(),

      dpId: Joi.number(),

      boxType: Joi.string(),

      orderType: Joi.string(),

      dpOptions: Joi.object(),

      items: Joi.array().items(this.CartProductInfo()),

      fulfillmentType: Joi.string(),
    });
  };

  static CartShipmentsResponse = function () {
    return Joi.object({
      breakupValues: this.CartBreakup(),

      lastModified: Joi.string(),

      uid: Joi.string(),

      currency: this.CartCurrency(),

      shipments: Joi.array().items(this.ShipmentResponse()),

      checkoutMode: Joi.string(),

      restrictCheckout: Joi.boolean(),

      couponText: Joi.string(),

      isValid: Joi.boolean(),

      comment: Joi.string(),

      deliveryPromise: this.ShipmentPromise(),

      cartId: Joi.number(),

      deliveryChargeInfo: Joi.string(),

      message: Joi.string(),

      gstin: Joi.string(),
    });
  };

  static CartCheckoutRequest = function () {
    return Joi.object({
      paymentParams: Joi.object(),

      merchantCode: Joi.string(),

      paymentMode: Joi.string(),

      callbackUrl: Joi.string(),

      staff: Joi.object(),

      deliveryAddress: Joi.object(),

      paymentIdentifier: Joi.string(),

      meta: Joi.object(),

      fyndstoreEmpId: Joi.string(),

      addressId: Joi.number(),

      paymentAutoConfirm: Joi.boolean(),

      aggregator: Joi.string(),

      billingAddressId: Joi.number(),

      extraMeta: Joi.object(),

      orderingStore: Joi.number(),

      billingAddress: Joi.object(),
    });
  };

  static CheckCart = function () {
    return Joi.object({
      lastModified: Joi.string(),

      deliveryCharges: Joi.number(),

      orderId: Joi.string(),

      restrictCheckout: Joi.boolean(),

      couponText: Joi.string(),

      deliveryChargeOrderValue: Joi.number(),

      gstin: Joi.string(),

      breakupValues: this.CartBreakup(),

      userType: Joi.string(),

      storeEmps: Joi.array().items(Joi.object()),

      success: Joi.boolean(),

      cartId: Joi.number(),

      items: Joi.array().items(this.CartProductInfo()),

      storeCode: Joi.string(),

      uid: Joi.string(),

      currency: this.CartCurrency(),

      errorMessage: Joi.string(),

      comment: Joi.string(),

      deliveryPromise: this.ShipmentPromise(),

      checkoutMode: Joi.string(),

      isValid: Joi.boolean(),

      codMessage: Joi.string(),

      message: Joi.string(),

      codAvailable: Joi.boolean(),

      codCharges: Joi.number(),

      deliveryChargeInfo: Joi.string(),
    });
  };

  static CartCheckoutResponse = function () {
    return Joi.object({
      cart: this.CheckCart(),

      callbackUrl: Joi.string(),

      success: Joi.boolean(),

      orderId: Joi.string(),

      appInterceptUrl: Joi.string(),

      data: Joi.object(),

      message: Joi.string(),
    });
  };

  static CartMetaRequest = function () {
    return Joi.object({
      comment: Joi.string(),

      pickUpCustomerDetails: Joi.object(),

      gstin: Joi.string(),

      checkoutMode: Joi.string(),
    });
  };

  static CartMetaResponse = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static CartMetaMissingResponse = function () {
    return Joi.object({
      errors: Joi.array().items(Joi.string()),
    });
  };

  static GetShareCartLinkRequest = function () {
    return Joi.object({
      meta: Joi.object(),

      uid: Joi.number(),
    });
  };

  static GetShareCartLinkResponse = function () {
    return Joi.object({
      shareUrl: Joi.string(),

      token: Joi.string(),
    });
  };

  static SharedCartDetails = function () {
    return Joi.object({
      createdOn: Joi.string(),

      meta: Joi.object(),

      token: Joi.string(),

      source: Joi.object(),

      user: Joi.object(),
    });
  };

  static SharedCart = function () {
    return Joi.object({
      breakupValues: this.CartBreakup(),

      lastModified: Joi.string(),

      uid: Joi.string(),

      currency: this.CartCurrency(),

      sharedCartDetails: this.SharedCartDetails(),

      checkoutMode: Joi.string(),

      restrictCheckout: Joi.boolean(),

      couponText: Joi.string(),

      isValid: Joi.boolean(),

      comment: Joi.string(),

      deliveryPromise: this.ShipmentPromise(),

      cartId: Joi.number(),

      items: Joi.array().items(this.CartProductInfo()),

      deliveryChargeInfo: Joi.string(),

      message: Joi.string(),

      gstin: Joi.string(),
    });
  };

  static SharedCartResponse = function () {
    return Joi.object({
      cart: this.SharedCart(),

      error: Joi.string(),
    });
  };

  static TicketList = function () {
    return Joi.object({
      items: Joi.array().items(this.Ticket()),

      filters: this.Filter(),

      page: this.Page(),
    });
  };

  static TicketHistoryList = function () {
    return Joi.object({
      docs: Joi.array().items(this.TicketHistory()),

      limit: Joi.number(),

      page: Joi.number(),

      pages: Joi.number(),

      total: Joi.number(),
    });
  };

  static CustomFormList = function () {
    return Joi.object({
      docs: Joi.array().items(this.CustomForm()),

      limit: Joi.number(),

      page: Joi.number(),

      pages: Joi.number(),

      total: Joi.number(),
    });
  };

  static CreateCustomFormPayload = function () {
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
  };

  static EditCustomFormPayload = function () {
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
  };

  static EditTicketPayload = function () {
    return Joi.object({
      content: this.TicketContent(),

      category: Joi.string(),

      source: Joi.string(),

      status: Joi.string(),

      priority: Joi.string(),

      assignedTo: this.AgentChangePayload(),

      tags: Joi.array().items(Joi.string()),
    });
  };

  static AgentChangePayload = function () {
    return Joi.object({
      agentId: Joi.string(),
    });
  };

  static CreateVideoRoomResponse = function () {
    return Joi.object({
      uniqueName: Joi.string(),
    });
  };

  static CloseVideoRoomResponse = function () {
    return Joi.object({
      success: Joi.boolean(),
    });
  };

  static CreateVideoRoomPayload = function () {
    return Joi.object({
      uniqueName: Joi.string(),

      notify: Joi.array().items(Joi.object()),
    });
  };

  static Filter = function () {
    return Joi.object({
      priorities: Joi.array().items(this.Priority()),

      categories: Joi.array().items(this.TicketCategory()),

      statuses: Joi.array().items(this.Status()),

      assignees: Joi.array().items(Joi.object()),
    });
  };

  static TicketHistoryPayload = function () {
    return Joi.object({
      value: Joi.object(),

      type: Joi.string(),
    });
  };

  static CustomFormSubmissionPayload = function () {
    return Joi.object({
      response: Joi.array().items(this.KeyValue()),
    });
  };

  static KeyValue = function () {
    return Joi.object({
      key: Joi.string(),

      value: Joi.string(),
    });
  };

  static GetTokenForVideoRoomResponse = function () {
    return Joi.object({
      accessToken: Joi.string(),
    });
  };

  static GetParticipantsInsideVideoRoomResponse = function () {
    return Joi.object({
      participants: Joi.array().items(this.Participant()),
    });
  };

  static Participant = function () {
    return Joi.object({
      user: this.UserSchema(),

      identity: Joi.string(),

      status: Joi.string(),
    });
  };

  static UserSchema = function () {
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
  };

  static PhoneNumber = function () {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      phone: Joi.string(),

      countryCode: Joi.number(),
    });
  };

  static Email = function () {
    return Joi.object({
      primary: Joi.boolean(),

      verified: Joi.boolean(),

      email: Joi.string(),

      active: Joi.boolean(),
    });
  };

  static Debug = function () {
    return Joi.object({
      source: Joi.string(),

      platform: Joi.string(),
    });
  };

  static SubmitCustomFormResponse = function () {
    return Joi.object({
      ticket: this.Ticket(),
    });
  };

  static TicketContext = function () {
    return Joi.object({
      applicationId: Joi.string(),

      companyId: Joi.string(),
    });
  };

  static CreatedOn = function () {
    return Joi.object({
      userAgent: Joi.string(),
    });
  };

  static TicketAsset = function () {
    return Joi.object({
      display: Joi.string(),

      value: Joi.string(),

      type: Joi.string(),
    });
  };

  static TicketContent = function () {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),

      attachments: Joi.array().items(this.TicketAsset()),
    });
  };

  static AddTicketPayload = function () {
    return Joi.object({
      status: Joi.string(),

      priority: Joi.string(),

      category: Joi.string(),

      content: this.TicketContent(),
    });
  };

  static Priority = function () {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      color: Joi.string(),
    });
  };

  static Status = function () {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      color: Joi.string(),
    });
  };

  static TicketCategory = function () {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      form: this.CustomForm(),
    });
  };

  static SubmitButton = function () {
    return Joi.object({
      title: Joi.string(),

      titleColor: Joi.string(),

      backgroundColor: Joi.string(),
    });
  };

  static PollForAssignment = function () {
    return Joi.object({
      duration: Joi.number(),

      message: Joi.string(),

      successMessage: Joi.string(),

      failureMessage: Joi.string(),
    });
  };

  static CustomForm = function () {
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
  };

  static TicketHistory = function () {
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
  };

  static Ticket = function () {
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
  };

  static PaginationSchema = function () {
    return Joi.object({
      size: Joi.number(),

      itemTotal: Joi.number(),

      hasNext: Joi.boolean(),

      type: Joi.string(),

      current: Joi.number(),
    });
  };

  static ThemesListingResponseSchema = function () {
    return Joi.object({
      items: Joi.array().items(this.ThemesSchema()),

      page: this.PaginationSchema(),
    });
  };

  static AddThemeRequestSchema = function () {
    return Joi.object({
      themeId: Joi.string(),
    });
  };

  static UpgradableThemeSchema = function () {
    return Joi.object({
      parentTheme: Joi.string(),

      appliedTheme: Joi.string(),

      upgrade: Joi.boolean(),
    });
  };

  static FontsSchema = function () {
    return Joi.object({
      items: this.FontsSchemaItems(),

      kind: Joi.string(),
    });
  };

  static BlitzkriegApiErrorSchema = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static BlitzkriegNotFoundSchema = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static BlitzkriegInternalServerErrorSchema = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static FontsSchemaItems = function () {
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
  };

  static FontsSchemaItemsFiles = function () {
    return Joi.object({
      regular: Joi.string(),

      italic: Joi.string(),

      bold: Joi.string(),
    });
  };

  static ThemesSchema = function () {
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
  };

  static pagesSchema = function () {
    return Joi.object({
      text: Joi.string(),

      path: Joi.string(),

      type: Joi.string(),

      value: Joi.string(),

      sections: this.Sections(),
    });
  };

  static availableSectionSchema = function () {
    return Joi.object({
      blocks: this.Blocks(),

      name: Joi.string(),

      label: Joi.string(),

      props: Joi.object(),
    });
  };

  static sectionSchema = function () {
    return Joi.object({
      pageKey: Joi.string(),

      pageSections: this.PageSections(),
    });
  };

  static Information = function () {
    return Joi.object({
      images: this.Images(),

      features: Joi.array().items(Joi.string()),

      name: Joi.string(),

      description: Joi.string(),
    });
  };

  static Images = function () {
    return Joi.object({
      desktop: Joi.array().items(Joi.string()),

      android: Joi.array().items(Joi.string()),

      ios: Joi.array().items(Joi.string()),

      thumbnail: Joi.array().items(Joi.string()),
    });
  };

  static Src = function () {
    return Joi.object({
      link: Joi.string(),
    });
  };

  static AssetsSchema = function () {
    return Joi.object({
      umdJs: this.UmdJs(),

      commonJs: this.CommonJs(),

      css: this.Css(),
    });
  };

  static UmdJs = function () {
    return Joi.object({
      link: Joi.string(),
    });
  };

  static CommonJs = function () {
    return Joi.object({
      link: Joi.string(),
    });
  };

  static Css = function () {
    return Joi.object({
      link: Joi.string(),
    });
  };

  static AvailablePages = function () {
    return Joi.object({
      path: Joi.string(),

      type: Joi.string(),

      text: Joi.string(),

      value: Joi.string(),

      seo: this.Seo(),

      props: Joi.object(),

      sections: this.Sections(),
    });
  };

  static Seo = function () {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),
    });
  };

  static Sections = function () {
    return Joi.object({
      attributes: Joi.string(),
    });
  };

  static Pages = function () {
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
  };

  static Config = function () {
    return Joi.object({
      preset: this.Preset(),

      globalSchema: this.GlobalSchema(),

      current: Joi.string(),

      list: this.ListSchema(),
    });
  };

  static Preset = function () {
    return Joi.object({
      sections: this.sectionSchema(),
    });
  };

  static GlobalSchema = function () {
    return Joi.object({
      props: Joi.object(),
    });
  };

  static ListSchema = function () {
    return Joi.object({
      global: Joi.object(),

      page: this.ConfigPage(),

      name: Joi.string(),
    });
  };

  static Colors = function () {
    return Joi.object({
      bgColor: Joi.string(),

      primaryColor: Joi.string(),

      secondaryColor: Joi.string(),

      accentColor: Joi.string(),

      linkColor: Joi.string(),

      buttonSecondaryColor: Joi.string(),
    });
  };

  static Custom = function () {
    return Joi.object({
      props: Joi.object(),
    });
  };

  static ConfigPage = function () {
    return Joi.object({
      settings: Joi.object(),

      page: Joi.string(),
    });
  };

  static Font = function () {
    return Joi.object({
      family: Joi.string(),

      variants: this.Variants(),
    });
  };

  static Variants = function () {
    return Joi.object({
      medium: this.Medium(),

      semiBold: this.SemiBold(),

      bold: this.Bold(),

      light: this.Light(),

      regular: this.Regular(),
    });
  };

  static Medium = function () {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  };

  static SemiBold = function () {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  };

  static Bold = function () {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  };

  static Light = function () {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  };

  static Regular = function () {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  };

  static Blocks = function () {
    return Joi.object({
      type: Joi.string(),

      name: Joi.string(),

      props: this.BlocksProps(),
    });
  };

  static BlocksProps = function () {
    return Joi.object({
      id: Joi.string(),

      label: Joi.string(),

      type: Joi.string(),
    });
  };

  static PageSections = function () {
    return Joi.object({
      blocks: this.PageSectionsBlocks(),

      name: Joi.string(),

      label: Joi.string(),

      props: Joi.object(),

      preset: Joi.object(),

      predicate: this.Predicate(),
    });
  };

  static PageSectionsBlocks = function () {
    return Joi.object({
      type: Joi.string(),

      name: Joi.string(),

      props: this.PageSectionsBlocksProps(),
    });
  };

  static PageSectionsBlocksProps = function () {
    return Joi.object({
      id: Joi.string(),

      label: Joi.string(),

      type: Joi.string(),
    });
  };

  static Predicate = function () {
    return Joi.object({
      screen: this.Screen(),

      user: this.PredicateUserSchema(),

      route: this.Route(),
    });
  };

  static Screen = function () {
    return Joi.object({
      mobile: Joi.boolean(),

      desktop: Joi.boolean(),

      tablet: Joi.boolean(),
    });
  };

  static PredicateUserSchema = function () {
    return Joi.object({
      authenticated: Joi.boolean(),

      anonymous: Joi.boolean(),
    });
  };

  static Route = function () {
    return Joi.object({
      selected: Joi.string(),

      exactUrl: Joi.string(),

      query: Joi.object(),
    });
  };

  static EditEmailRequestSchema = function () {
    return Joi.object({
      email: Joi.string(),
    });
  };

  static SendVerificationLinkMobileRequestSchema = function () {
    return Joi.object({
      verified: Joi.boolean(),

      active: Joi.boolean(),

      countryCode: Joi.string(),

      phone: Joi.string(),

      primary: Joi.boolean(),
    });
  };

  static EditMobileRequestSchema = function () {
    return Joi.object({
      countryCode: Joi.string(),

      phone: Joi.string(),
    });
  };

  static EditProfileRequestSchema = function () {
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
  };

  static SendEmailOtpRequestSchema = function () {
    return Joi.object({
      email: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      registerToken: Joi.string(),
    });
  };

  static VerifyOtpRequestSchema = function () {
    return Joi.object({
      requestId: Joi.string(),

      registerToken: Joi.string(),

      otp: Joi.string(),
    });
  };

  static SendMobileOtpRequestSchema = function () {
    return Joi.object({
      mobile: Joi.string(),

      countryCode: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      androidHash: Joi.string(),

      force: Joi.string(),
    });
  };

  static UpdatePasswordRequestSchema = function () {
    return Joi.object({
      oldPassword: Joi.string(),

      newPassword: Joi.string(),
    });
  };

  static FormRegisterRequestSchema = function () {
    return Joi.object({
      firstName: Joi.string(),

      lastName: Joi.string(),

      gender: Joi.string(),

      email: Joi.string(),

      password: Joi.string(),

      phone: this.FormRegisterRequestSchemaPhone(),

      registerToken: Joi.string(),
    });
  };

  static TokenRequestBodySchema = function () {
    return Joi.object({
      token: Joi.string(),
    });
  };

  static ForgotPasswordRequestSchema = function () {
    return Joi.object({
      code: Joi.string(),

      password: Joi.string(),
    });
  };

  static CodeRequestBodySchema = function () {
    return Joi.object({
      code: Joi.string(),
    });
  };

  static SendResetPasswordEmailRequestSchema = function () {
    return Joi.object({
      email: Joi.string(),

      gRecaptchaResponse: Joi.string(),
    });
  };

  static PasswordLoginRequestSchema = function () {
    return Joi.object({
      gRecaptchaResponse: Joi.string(),

      password: Joi.string(),

      username: Joi.string(),
    });
  };

  static SendOtpRequestSchema = function () {
    return Joi.object({
      countryCode: Joi.string(),

      gRecaptchaResponse: Joi.string(),

      mobile: Joi.string(),
    });
  };

  static OAuthRequestSchema = function () {
    return Joi.object({
      isSignedIn: Joi.boolean(),

      oauth2: this.OAuthRequestSchemaOauth2(),

      profile: this.OAuthRequestSchemaProfile(),
    });
  };

  static AuthSuccess = function () {
    return Joi.object({
      registerToken: Joi.string(),

      userExists: Joi.boolean(),

      user: this.AuthSuccessUser(),
    });
  };

  static SendOtpResponse = function () {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string(),

      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),
    });
  };

  static LoginSuccess = function () {
    return Joi.object({
      user: this.UserSchema(),
    });
  };

  static VerifyOtpSuccess = function () {
    return Joi.object({
      user: this.UserSchema(),

      userExists: Joi.boolean(),
    });
  };

  static ResetPasswordSuccess = function () {
    return Joi.object({
      status: Joi.string(),
    });
  };

  static RegisterFormSuccess = function () {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string(),

      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),
    });
  };

  static VerifyEmailSuccess = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static HasPasswordSuccess = function () {
    return Joi.object({
      result: Joi.boolean(),
    });
  };

  static LogoutSuccess = function () {
    return Joi.object({
      logout: Joi.boolean(),
    });
  };

  static OtpSuccess = function () {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string(),

      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),
    });
  };

  static EmailOtpSuccess = function () {
    return Joi.object({
      resendToken: Joi.string(),
    });
  };

  static SessionListSuccess = function () {
    return Joi.object({
      sessions: Joi.array().items(Joi.string()),
    });
  };

  static VerifyMobileOTPSuccess = function () {
    return Joi.object({
      user: this.UserSchema(),

      verifyMobileLink: Joi.boolean(),
    });
  };

  static VerifyEmailOTPSuccess = function () {
    return Joi.object({
      user: this.UserSchema(),

      verifyEmailLink: Joi.boolean(),
    });
  };

  static SendMobileVerifyLinkSuccess = function () {
    return Joi.object({
      verifyMobileLink: Joi.boolean(),
    });
  };

  static SendEmailVerifyLinkSuccess = function () {
    return Joi.object({
      verifyEmailLink: Joi.boolean(),
    });
  };

  static UserSearchResponseSchema = function () {
    return Joi.object({
      users: Joi.array().items(this.UserSchema()),
    });
  };

  static CustomerListResponseSchema = function () {
    return Joi.object({
      items: Joi.array().items(this.UserSchema()),

      page: this.PaginationSchema(),
    });
  };

  static UnauthorizedSchema = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static UnauthenticatedSchema = function () {
    return Joi.object({
      authenticated: Joi.boolean(),
    });
  };

  static NotFoundSchema = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static AuthenticationApiErrorSchema = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static ProfileEditSuccessSchema = function () {
    return Joi.object({
      email: Joi.string(),

      verifyEmailOtp: Joi.boolean(),

      verifyEmailLink: Joi.boolean(),

      verifyMobileOtp: Joi.boolean(),

      user: Joi.string(),

      registerToken: Joi.string(),

      userExists: Joi.boolean(),
    });
  };

  static FormRegisterRequestSchemaPhone = function () {
    return Joi.object({
      countryCode: Joi.string(),

      mobile: Joi.string(),
    });
  };

  static OAuthRequestSchemaOauth2 = function () {
    return Joi.object({
      accessToken: Joi.string(),

      expiry: Joi.number(),

      refreshToken: Joi.string(),
    });
  };

  static OAuthRequestSchemaProfile = function () {
    return Joi.object({
      lastName: Joi.string(),

      image: Joi.string(),

      id: Joi.string(),

      email: Joi.string(),

      fullName: Joi.string(),

      firstName: Joi.string(),
    });
  };

  static AuthSuccessUser = function () {
    return Joi.object({
      firstName: Joi.string(),

      lastName: Joi.string(),

      debug: this.AuthSuccessUserDebug(),

      active: Joi.boolean(),

      emails: this.AuthSuccessUserEmails(),
    });
  };

  static AuthSuccessUserDebug = function () {
    return Joi.object({
      platform: Joi.string(),
    });
  };

  static AuthSuccessUserEmails = function () {
    return Joi.object({
      email: Joi.string(),

      verified: Joi.boolean(),

      primary: Joi.boolean(),

      active: Joi.boolean(),
    });
  };

  static PlatformSchema = function () {
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
  };

  static LookAndFeel = function () {
    return Joi.object({
      cardPosition: Joi.string(),

      backgroundColor: Joi.string(),
    });
  };

  static Login = function () {
    return Joi.object({
      password: Joi.boolean(),

      otp: Joi.boolean(),
    });
  };

  static MetaSchema = function () {
    return Joi.object({
      fyndDefault: Joi.boolean(),
    });
  };

  static Social = function () {
    return Joi.object({
      accountKit: Joi.boolean(),

      facebook: Joi.boolean(),

      google: Joi.boolean(),
    });
  };

  static RequiredFields = function () {
    return Joi.object({
      email: this.Email(),

      mobile: this.Mobile(),
    });
  };

  static Mobile = function () {
    return Joi.object({
      isRequired: Joi.boolean(),

      level: Joi.string(),
    });
  };

  static RegisterRequiredFields = function () {
    return Joi.object({
      email: this.RegisterRequiredFieldsEmail(),

      mobile: this.RegisterRequiredFieldsMobile(),
    });
  };

  static RegisterRequiredFieldsEmail = function () {
    return Joi.object({
      isRequired: Joi.boolean(),

      level: Joi.string(),
    });
  };

  static RegisterRequiredFieldsMobile = function () {
    return Joi.object({
      isRequired: Joi.boolean(),

      level: Joi.string(),
    });
  };

  static FlashCard = function () {
    return Joi.object({
      text: Joi.string(),

      textColor: Joi.string(),

      backgroundColor: Joi.string(),
    });
  };

  static SocialTokens = function () {
    return Joi.object({
      facebook: this.Facebook(),

      accountKit: this.Accountkit(),

      google: this.Google(),
    });
  };

  static Facebook = function () {
    return Joi.object({
      appId: Joi.string(),
    });
  };

  static Accountkit = function () {
    return Joi.object({
      appId: Joi.string(),
    });
  };

  static Google = function () {
    return Joi.object({
      appId: Joi.string(),
    });
  };

  static QRCodeResp = function () {
    return Joi.object({
      link: Joi.string(),

      svg: Joi.string(),
    });
  };

  static RedirectDevice = function () {
    return Joi.object({
      link: Joi.string(),

      type: Joi.string(),
    });
  };

  static WebRedirect = function () {
    return Joi.object({
      link: Joi.string(),

      type: Joi.string(),
    });
  };

  static Redirects = function () {
    return Joi.object({
      ios: this.RedirectDevice(),

      android: this.RedirectDevice(),

      web: this.WebRedirect(),

      forceWeb: Joi.boolean(),
    });
  };

  static ShortLinkReq = function () {
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
  };

  static UrlInfo = function () {
    return Joi.object({
      original: Joi.string(),

      short: Joi.string(),

      hash: Joi.string(),
    });
  };

  static ShortLinkRes = function () {
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
  };

  static ShortLinkList = function () {
    return Joi.object({
      items: Joi.array().items(this.ShortLinkRes()),

      size: Joi.number(),

      itemTotal: Joi.number(),

      current: Joi.number(),

      hasNext: Joi.string(),

      type: Joi.string(),
    });
  };

  static FailedResponse = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static CDN = function () {
    return Joi.object({
      url: Joi.string(),
    });
  };

  static Upload = function () {
    return Joi.object({
      expiry: Joi.number(),

      url: Joi.string(),
    });
  };

  static StartResponse = function () {
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
  };

  static StartRequest = function () {
    return Joi.object({
      fileName: Joi.string(),

      contentType: Joi.string(),

      size: Joi.number(),

      tags: Joi.array().items(Joi.string()),
    });
  };

  static CompleteResponse = function () {
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
  };

  static Opts = function () {
    return Joi.object({
      attempts: Joi.number(),

      timestamp: Joi.number(),

      delay: Joi.number(),
    });
  };

  static CopyFileTask = function () {
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
  };

  static BulkResponse = function () {
    return Joi.object({
      trackingUrl: Joi.string(),

      task: this.CopyFileTask(),
    });
  };

  static ReqConfiguration = function () {
    return Joi.object({
      concurrency: Joi.number(),
    });
  };

  static Destination = function () {
    return Joi.object({
      namespace: Joi.string(),

      rewrite: Joi.string(),

      basepath: Joi.string(),
    });
  };

  static BulkRequest = function () {
    return Joi.object({
      urls: Joi.array().items(Joi.string()),

      destination: this.Destination(),

      configuration: this.ReqConfiguration(),
    });
  };

  static Urls = function () {
    return Joi.object({
      url: Joi.string(),

      signedUrl: Joi.string(),

      expiry: Joi.number(),
    });
  };

  static SignUrlResponse = function () {
    return Joi.object({
      urls: Joi.array().items(this.Urls()),
    });
  };

  static SignUrlRequest = function () {
    return Joi.object({
      expiry: Joi.number(),

      urls: Joi.array().items(Joi.string()),
    });
  };

  static DbRecord = function () {
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
  };

  static BrowseResponse = function () {
    return Joi.object({
      items: Joi.array().items(this.DbRecord()),

      page: this.Page(),
    });
  };

  static AggregatorConfigDetail = function () {
    return Joi.object({
      configType: Joi.string(),

      key: Joi.string(),

      merchantId: Joi.string(),

      api: Joi.string(),

      sdk: Joi.boolean(),

      verifyApi: Joi.string(),

      merchantKey: Joi.string(),

      secret: Joi.string(),

      userId: Joi.string(),

      pin: Joi.string(),
    });
  };

  static AggregatorsConfigDetailResponse = function () {
    return Joi.object({
      success: Joi.boolean(),

      simpl: this.AggregatorConfigDetail(),

      ccavenue: this.AggregatorConfigDetail(),

      mswipe: this.AggregatorConfigDetail(),

      stripe: this.AggregatorConfigDetail(),

      razorpay: this.AggregatorConfigDetail(),

      payumoney: this.AggregatorConfigDetail(),

      rupifi: this.AggregatorConfigDetail(),

      env: Joi.string(),

      juspay: this.AggregatorConfigDetail(),
    });
  };

  static ErrorCodeAndDescription = function () {
    return Joi.object({
      code: Joi.string(),

      description: Joi.string(),
    });
  };

  static HttpErrorCodeAndResponse = function () {
    return Joi.object({
      success: Joi.boolean(),

      error: this.ErrorCodeAndDescription(),
    });
  };

  static AttachCardRequest = function () {
    return Joi.object({
      refresh: Joi.boolean(),

      cardId: Joi.string(),
    });
  };

  static AttachCardsResponse = function () {
    return Joi.object({
      message: Joi.string(),

      success: Joi.boolean(),

      data: Joi.object(),
    });
  };

  static CardPaymentGateway = function () {
    return Joi.object({
      aggregator: Joi.string(),

      customerId: Joi.string(),

      api: Joi.string(),
    });
  };

  static ActiveCardPaymentGatewayResponse = function () {
    return Joi.object({
      message: Joi.string(),

      success: Joi.boolean(),

      cards: this.CardPaymentGateway(),
    });
  };

  static Card = function () {
    return Joi.object({
      cardToken: Joi.string(),

      cardNumber: Joi.string(),

      expMonth: Joi.number(),

      expYear: Joi.number(),

      aggregatorName: Joi.string(),

      cardId: Joi.string(),

      nickname: Joi.string(),

      cardBrand: Joi.string(),

      cardFingerprint: Joi.string(),

      cardIsin: Joi.string(),

      cardIssuer: Joi.string(),

      expired: Joi.boolean(),

      cardType: Joi.string(),

      cardName: Joi.string(),

      cardBrandImage: Joi.string(),

      cardReference: Joi.string(),
    });
  };

  static ListCardsResponse = function () {
    return Joi.object({
      message: Joi.string(),

      success: Joi.boolean(),

      data: Joi.array().items(this.Card()),
    });
  };

  static DeletehCardRequest = function () {
    return Joi.object({
      cardId: Joi.string(),
    });
  };

  static DeleteCardsResponse = function () {
    return Joi.object({
      message: Joi.string(),

      success: Joi.boolean(),
    });
  };

  static ValidateCustomerRequest = function () {
    return Joi.object({
      merchantParams: Joi.object(),

      transactionAmountInPaise: Joi.number(),

      phoneNumber: Joi.string(),

      payload: Joi.string(),

      aggregator: Joi.string(),
    });
  };

  static ValidateCustomerResponse = function () {
    return Joi.object({
      message: Joi.string(),

      success: Joi.boolean(),

      data: Joi.object(),
    });
  };

  static ChargeCustomerRequest = function () {
    return Joi.object({
      amount: Joi.number(),

      verified: Joi.boolean(),

      transactionToken: Joi.string(),

      orderId: Joi.string(),

      aggregator: Joi.string(),
    });
  };

  static ChargeCustomerResponse = function () {
    return Joi.object({
      message: Joi.string(),

      success: Joi.boolean(),

      status: Joi.string(),

      deliveryAddressId: Joi.string(),

      cartId: Joi.string(),

      orderId: Joi.string(),

      aggregator: Joi.string(),
    });
  };

  static PaymentInitializationRequest = function () {
    return Joi.object({
      method: Joi.string(),

      timeout: Joi.number(),

      customerId: Joi.string(),

      virtualId: Joi.string(),

      pollingUrl: Joi.string(),

      merchantOrderId: Joi.string(),

      aggregatorOrderId: Joi.string(),

      aggregator: Joi.string(),

      razorpayPaymentId: Joi.string(),
    });
  };

  static PaymentInitializationResponse = function () {
    return Joi.object({
      method: Joi.string(),

      customerId: Joi.string(),

      success: Joi.boolean(),

      status: Joi.string(),

      amount: Joi.number(),

      vpa: Joi.string(),

      timeout: Joi.number(),

      bqrImage: Joi.string(),

      currency: Joi.string(),

      virtualId: Joi.string(),

      pollingUrl: Joi.string(),

      merchantOrderId: Joi.string(),

      aggregatorOrderId: Joi.string(),

      aggregator: Joi.string(),

      razorpayPaymentId: Joi.string(),
    });
  };

  static PaymentStatusUpdateRequest = function () {
    return Joi.object({
      contact: Joi.string(),

      status: Joi.string(),

      amount: Joi.number(),

      customerId: Joi.string(),

      vpa: Joi.string(),

      currency: Joi.string(),

      orderId: Joi.string(),

      merchantOrderId: Joi.string(),

      method: Joi.string(),

      aggregator: Joi.string(),

      email: Joi.string(),
    });
  };

  static PaymentStatusUpdateResponse = function () {
    return Joi.object({
      retry: Joi.boolean(),

      status: Joi.string(),

      aggregatorName: Joi.string(),
    });
  };

  static PaymentModeLogo = function () {
    return Joi.object({
      large: Joi.string(),

      small: Joi.string(),
    });
  };

  static PaymentModeList = function () {
    return Joi.object({
      cardId: Joi.string(),

      cardBrand: Joi.string(),

      name: Joi.string(),

      cardIssuer: Joi.string(),

      expired: Joi.boolean(),

      displayPriority: Joi.number(),

      cardName: Joi.string(),

      merchantCode: Joi.string(),

      cardToken: Joi.string(),

      intentFlow: Joi.string(),

      expMonth: Joi.number(),

      aggregatorName: Joi.string(),

      fyndVpa: Joi.string(),

      cardIsin: Joi.string(),

      timeout: Joi.number(),

      expYear: Joi.number(),

      nickname: Joi.string(),

      displayName: Joi.string(),

      logoUrl: this.PaymentModeLogo(),

      cardNumber: Joi.string(),

      code: Joi.string(),

      intentAppErrorList: Joi.array().items(Joi.string()),

      cardFingerprint: Joi.string(),

      retryCount: Joi.number(),

      cardType: Joi.string(),

      cardBrandImage: Joi.string(),

      cardReference: Joi.string(),
    });
  };

  static RootPaymentMode = function () {
    return Joi.object({
      anonymousEnable: Joi.boolean(),

      list: Joi.array().items(this.PaymentModeList()),

      aggregatorName: Joi.string(),

      name: Joi.string(),

      displayPriority: Joi.number(),

      addCardEnabled: Joi.boolean(),

      displayName: Joi.string(),
    });
  };

  static AggregatorRoute = function () {
    return Joi.object({
      paymentFlow: Joi.string(),

      apiLink: Joi.string(),

      data: Joi.object(),
    });
  };

  static PaymentFlow = function () {
    return Joi.object({
      simpl: this.AggregatorRoute(),

      msipe: this.AggregatorRoute(),

      ccavenue: this.AggregatorRoute(),

      payubiz: this.AggregatorRoute(),

      bqrRazorpay: this.AggregatorRoute(),

      stripe: this.AggregatorRoute(),

      razorpay: this.AggregatorRoute(),

      fynd: this.AggregatorRoute(),

      rupifi: this.AggregatorRoute(),

      upiRazorpay: this.AggregatorRoute(),

      juspay: this.AggregatorRoute(),
    });
  };

  static PaymentOptionAndFlow = function () {
    return Joi.object({
      paymentOption: Joi.array().items(this.RootPaymentMode()),

      paymentFlows: this.PaymentFlow(),
    });
  };

  static PaymentModeRouteResponse = function () {
    return Joi.object({
      paymentOptions: this.PaymentOptionAndFlow(),

      success: Joi.boolean(),
    });
  };

  static OrderBeneficiaryDetails = function () {
    return Joi.object({
      address: Joi.string(),

      isActive: Joi.boolean(),

      ifscCode: Joi.string(),

      id: Joi.number(),

      accountNo: Joi.string(),

      subtitle: Joi.string(),

      transferMode: Joi.string(),

      beneficiaryId: Joi.string(),

      branchName: Joi.boolean(),

      accountHolder: Joi.string(),

      modifiedOn: Joi.string(),

      bankName: Joi.string(),

      delightsUserName: Joi.string(),

      comment: Joi.boolean(),

      email: Joi.string(),

      displayName: Joi.string(),

      createdOn: Joi.string(),

      title: Joi.string(),

      mobile: Joi.boolean(),
    });
  };

  static OrderBeneficiaryResponse = function () {
    return Joi.object({
      beneficiaries: Joi.array().items(this.OrderBeneficiaryDetails()),
    });
  };

  static NotFoundResourceError = function () {
    return Joi.object({
      code: Joi.string(),

      description: Joi.string(),

      success: Joi.boolean(),
    });
  };

  static IfscCodeResponse = function () {
    return Joi.object({
      bankName: Joi.string(),

      success: Joi.boolean(),

      branchName: Joi.string(),
    });
  };

  static ErrorCodeDescription = function () {
    return Joi.object({
      code: Joi.string(),

      description: Joi.string(),

      success: Joi.boolean(),
    });
  };

  static AddBeneficiaryViaOtpVerificationRequest = function () {
    return Joi.object({
      otp: Joi.string(),

      hashKey: Joi.string(),

      requestId: Joi.string(),
    });
  };

  static AddBeneficiaryViaOtpVerificationResponse = function () {
    return Joi.object({
      otp: Joi.string(),

      hashKey: Joi.string(),

      requestId: Joi.string(),
    });
  };

  static WrongOtpError = function () {
    return Joi.object({
      description: Joi.string(),

      success: Joi.string(),
    });
  };

  static BankDetails = function () {
    return Joi.object({
      address: Joi.string(),

      ifscCode: Joi.string(),

      branchName: Joi.string(),

      accountNo: Joi.string(),

      accountHolder: Joi.string(),

      bankName: Joi.string(),

      comment: Joi.string(),

      email: Joi.string(),

      mobile: Joi.string(),
    });
  };

  static AddBeneficiaryDetailsRequest = function () {
    return Joi.object({
      shipmentId: Joi.string(),

      transferMode: Joi.string(),

      orderId: Joi.string(),

      details: this.BankDetails(),

      delights: Joi.boolean(),
    });
  };

  static RefundAccountResponse = function () {
    return Joi.object({
      message: Joi.string(),

      success: Joi.boolean(),

      data: Joi.object(),
    });
  };

  static WalletOtpRequest = function () {
    return Joi.object({
      countryCode: Joi.string(),

      mobile: Joi.boolean(),
    });
  };

  static WalletOtpResponse = function () {
    return Joi.object({
      success: Joi.boolean(),

      isVerifiedFlag: Joi.string(),

      requestId: Joi.string(),
    });
  };

  static SetDefaultBeneficiaryRequest = function () {
    return Joi.object({
      orderId: Joi.string(),

      beneficiaryId: Joi.string(),
    });
  };

  static SetDefaultBeneficiaryResponse = function () {
    return Joi.object({
      success: Joi.boolean(),

      isBeneficiarySet: Joi.boolean(),
    });
  };

  static OrderById = function () {
    return Joi.object({
      order: this.OrderSchema(),
    });
  };

  static OrderList = function () {
    return Joi.object({
      orders: Joi.array().items(this.OrderSchema()),

      page: this.OrderPage(),
    });
  };

  static OrderPage = function () {
    return Joi.object({
      itemTotal: Joi.number(),

      type: Joi.string(),

      size: Joi.number(),

      current: Joi.number(),

      hasNext: Joi.boolean(),
    });
  };

  static ShipmentById = function () {
    return Joi.object({
      shipment: this.Shipments(),
    });
  };

  static ShipmentReasons = function () {
    return Joi.object({
      reasons: Joi.array().items(this.Reasons()),
    });
  };

  static ShipmentStatusUpdateBody = function () {
    return Joi.object({
      shipments: this.Shipments(),

      forceTransition: Joi.boolean(),

      task: Joi.boolean(),
    });
  };

  static Shipments = function () {
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
  };

  static ShipmentId = function () {
    return Joi.object({
      statusUpdate: this.StatusUpdate(),

      message: Joi.array().items(Joi.any()),

      error: Joi.string(),

      status: Joi.boolean(),
    });
  };

  static StatusUpdate = function () {
    return Joi.object({
      status: Joi.string(),
    });
  };

  static ShipmentStatusUpdate = function () {
    return Joi.object({
      shipments: this.Shipments(),
    });
  };

  static ShipmentTrack = function () {
    return Joi.object({
      results: Joi.array().items(this.Track()),
    });
  };

  static OrderSchema = function () {
    return Joi.object({
      orderId: Joi.string(),

      breakupValues: Joi.array().items(this.BreakupValues()),

      orderCreatedTime: Joi.string(),

      shipments: Joi.array().items(this.Shipments()),

      totalShipmentsInOrder: Joi.number(),

      userInfo: this.UserInfo(),
    });
  };

  static PosOrderById = function () {
    return Joi.object({
      order: this.OrderSchema(),
    });
  };

  static Bags = function () {
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
  };

  static Item = function () {
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
  };

  static BagItemAttributes = function () {
    return Joi.object({
      itemCode: Joi.string(),

      brandName: Joi.string(),

      countryOfOrigin: Joi.string(),
    });
  };

  static Prices = function () {
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
  };

  static CurrentStatus = function () {
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
  };

  static BagStateMapper = function () {
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
  };

  static BagStatus = function () {
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
  };

  static BagStatusBagStateMapper = function () {
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
  };

  static Dates = function () {
    return Joi.object({
      orderCreated: Joi.string(),
    });
  };

  static BagState = function () {
    return Joi.object({
      isReturnable: Joi.boolean(),

      canBeCancelled: Joi.boolean(),

      enableTracking: Joi.boolean(),

      isCustomerReturnAllowed: Joi.boolean(),

      isActive: Joi.boolean(),
    });
  };

  static FinancialBreakup = function () {
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
  };

  static Identifiers = function () {
    return Joi.object({
      ean: Joi.string(),

      skuCode: Joi.string(),
    });
  };

  static BagReasons = function () {
    return Joi.object({
      id: Joi.number(),

      state: Joi.string(),

      bagId: Joi.number(),

      slug: Joi.string(),

      displayName: Joi.string(),
    });
  };

  static Article = function () {
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
  };

  static ArticleIdentifiers = function () {
    return Joi.object({
      ean: Joi.string(),

      skuCode: Joi.string(),
    });
  };

  static ReturnConfig = function () {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string(),

      returnable: Joi.boolean(),
    });
  };

  static CurrentOperationalStatus = function () {
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
  };

  static CurrentOperationalStatusReasons = function () {
    return Joi.object({
      id: Joi.number(),

      state: Joi.string(),

      slug: Joi.string(),

      displayName: Joi.string(),
    });
  };

  static CurrentOperationalStatusBagStateMapper = function () {
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
  };

  static Brand = function () {
    return Joi.object({
      modifiedOn: Joi.string(),

      createdOn: Joi.string(),

      brandName: Joi.string(),

      isVirtualInvoice: Joi.boolean(),

      id: Joi.number(),

      creditNoteAllowed: Joi.boolean(),

      logo: Joi.string(),
    });
  };

  static AffiliateBagDetails = function () {
    return Joi.object({
      affiliateBagId: Joi.string(),

      affiliateOrderId: Joi.string(),

      affiliateMeta: this.AffiliateMeta(),

      loyaltyDiscount: Joi.number(),

      employeeDiscount: Joi.number(),
    });
  };

  static AffiliateMeta = function () {
    return Joi.object({
      sizeLevelTotalQty: Joi.number(),

      fynd: this.Fynd(),

      isPriority: Joi.boolean(),

      employeeDiscount: Joi.number(),

      loyaltyDiscount: Joi.number(),
    });
  };

  static Fynd = function () {
    return Joi.object({
      fulfilmentIdentifier: Joi.string(),
    });
  };

  static GstDetails = function () {
    return Joi.object({
      valueOfGood: Joi.number(),

      gstTaxPercentage: Joi.number(),

      isDefaultHsnCode: Joi.boolean(),

      brandCalculatedAmount: Joi.number(),

      gstFee: Joi.string(),

      gstTag: Joi.string(),

      hsnCode: Joi.string(),
    });
  };

  static BreakupValues = function () {
    return Joi.object({
      display: Joi.string(),

      value: Joi.number(),

      name: Joi.string(),
    });
  };

  static DeliveryAddress = function () {
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
  };

  static FulfillingStore = function () {
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
  };

  static StoreAddressJson = function () {
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
  };

  static FulfillingStoreMeta = function () {
    return Joi.object({
      additionalContactDetails: this.AdditionalContactDetails(),

      timing: Joi.array().items(this.Timing()),

      documents: this.Documents(),

      displayName: Joi.string(),

      stage: Joi.string(),

      gstNumber: Joi.string(),

      allowDpAssignmentFromFynd: Joi.boolean(),
    });
  };

  static AdditionalContactDetails = function () {
    return Joi.object({
      number: Joi.array().items(Joi.any()),
    });
  };

  static Timing = function () {
    return Joi.object({
      opening: this.Opening(),

      weekday: Joi.string(),

      open: Joi.boolean(),

      closing: this.Closing(),
    });
  };

  static Opening = function () {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  };

  static Closing = function () {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  };

  static Documents = function () {
    return Joi.object({
      gst: this.Gst(),
    });
  };

  static Gst = function () {
    return Joi.object({
      value: Joi.string(),

      verified: Joi.boolean(),

      legalName: Joi.string(),

      type: Joi.string(),
    });
  };

  static Invoice = function () {
    return Joi.object({
      updatedDate: Joi.string(),

      invoiceUrl: Joi.string(),

      labelUrl: Joi.string(),
    });
  };

  static ProductItems = function () {
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
  };

  static ProductItemAttributes = function () {
    return Joi.object({
      itemCode: Joi.string(),

      brandName: Joi.string(),

      countryOfOrigin: Joi.string(),
    });
  };

  static ShipmentMeta = function () {
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
  };

  static Timestamp = function () {
    return Joi.object({
      max: Joi.string(),

      min: Joi.string(),
    });
  };

  static DpOptions = function () {
    return Joi.object({
      dpOptionId: this.DpOptionId(),
    });
  };

  static DpOptionId = function () {
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
  };

  static Formatted = function () {
    return Joi.object({
      max: Joi.string(),

      min: Joi.string(),
    });
  };

  static DebugInfo = function () {
    return Joi.object({
      stormbreakerUuid: Joi.string(),
    });
  };

  static Promise = function () {
    return Joi.object({
      timestamp: this.Timestamp(),
    });
  };

  static Reasons = function () {
    return Joi.object({
      reasonText: Joi.string(),

      showTextArea: Joi.boolean(),

      feedbackType: Joi.string(),

      flow: Joi.string(),

      reasonId: Joi.number(),

      priority: Joi.number(),
    });
  };

  static ShipmentStatus = function () {
    return Joi.object({
      title: Joi.string(),

      hexCode: Joi.string(),
    });
  };

  static ShipmentUserInfo = function () {
    return Joi.object({
      gender: Joi.string(),

      mobile: Joi.string(),

      firstName: Joi.string(),

      lastName: Joi.string(),
    });
  };

  static Track = function () {
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
  };

  static TrackingDetails = function () {
    return Joi.object({
      isCurrent: Joi.boolean(),

      status: Joi.string(),

      time: Joi.string(),

      isPassed: Joi.string(),
    });
  };

  static UserInfo = function () {
    return Joi.object({
      gender: Joi.string(),

      mobile: Joi.string(),

      name: Joi.string(),

      email: Joi.string(),
    });
  };

  static ApefaceApiError = function () {
    return Joi.object({
      message: Joi.string(),
    });
  };

  static Access = function () {
    return Joi.object({
      answer: Joi.boolean(),

      askQuestion: Joi.boolean(),

      comment: Joi.boolean(),

      rnr: Joi.boolean(),
    });
  };

  static AddMediaListRequest = function () {
    return Joi.object({
      entityId: Joi.string(),

      entityType: Joi.string(),

      mediaList: Joi.array().items(this.AddMediaRequest()),

      refId: Joi.string(),

      refType: Joi.string(),
    });
  };

  static AddMediaRequest = function () {
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
  };

  static Attribute = function () {
    return Joi.object({
      createdOn: Joi.string(),

      description: Joi.string(),

      id: Joi.string(),

      modifiedOn: Joi.string(),

      name: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(this.TagMeta()),
    });
  };

  static AttributeObject = function () {
    return Joi.object({
      description: Joi.string(),

      name: Joi.string(),

      slug: Joi.string(),

      title: Joi.string(),

      type: Joi.string(),

      value: Joi.number(),
    });
  };

  static CheckEligibilityResponse = function () {
    return Joi.object({
      access: this.Access(),

      mediaCloud: this.MediaCloud(),
    });
  };

  static Cloud = function () {
    return Joi.object({
      id: Joi.string(),

      name: Joi.string(),

      provider: Joi.string(),
    });
  };

  static CommentRequest = function () {
    return Joi.object({
      comment: Joi.array().items(Joi.string()),

      entityId: Joi.string(),

      entityType: Joi.string(),
    });
  };

  static CreateQNARequest = function () {
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
  };

  static DeviceMeta = function () {
    return Joi.object({
      appVersion: Joi.string(),

      platform: Joi.string(),
    });
  };

  static MediaCloud = function () {
    return Joi.object({
      key: Joi.string(),

      name: Joi.string(),

      namespace: Joi.string(),

      path: Joi.string(),

      provider: Joi.string(),

      secret: Joi.string(),
    });
  };

  static MediaMeta = function () {
    return Joi.object({
      cloud: this.Cloud(),

      comment: Joi.array().items(Joi.string()),

      description: Joi.string(),

      id: Joi.string(),

      type: Joi.string(),

      url: this.Url(),
    });
  };

  static PageCursor = function () {
    return Joi.object({
      hasNext: Joi.boolean(),

      hasPrevious: Joi.boolean(),

      itemTotal: Joi.number(),

      nextId: Joi.string(),

      type: Joi.string(),
    });
  };

  static PageNumber = function () {
    return Joi.object({
      current: Joi.number(),

      hasNext: Joi.boolean(),

      itemTotal: Joi.number(),

      size: Joi.number(),

      type: Joi.string(),
    });
  };

  static ReportAbuseRequest = function () {
    return Joi.object({
      description: Joi.string(),

      entityId: Joi.string(),

      entityType: Joi.string(),
    });
  };

  static SaveAttributeRequest = function () {
    return Joi.object({
      description: Joi.string(),

      name: Joi.string(),

      slug: Joi.string(),
    });
  };

  static TagMeta = function () {
    return Joi.object({
      media: Joi.array().items(this.MediaMeta()),

      name: Joi.string(),

      type: Joi.string(),
    });
  };

  static UpdateAbuseStatusRequest = function () {
    return Joi.object({
      abusive: Joi.boolean(),

      active: Joi.boolean(),

      approve: Joi.boolean(),

      description: Joi.string(),

      entityId: Joi.string(),

      entityType: Joi.string(),

      id: Joi.string(),
    });
  };

  static UpdateAttributeRequest = function () {
    return Joi.object({
      description: Joi.string(),

      name: Joi.string(),

      slug: Joi.string(),
    });
  };

  static UpdateCommentRequest = function () {
    return Joi.object({
      active: Joi.boolean(),

      approve: Joi.boolean(),

      comment: Joi.array().items(Joi.string()),

      id: Joi.string(),
    });
  };

  static UpdateMediaListRequest = function () {
    return Joi.object({
      approve: Joi.boolean(),

      archive: Joi.boolean(),

      entityType: Joi.string(),

      ids: Joi.array().items(Joi.string()),
    });
  };

  static UpdateQNARequest = function () {
    return Joi.object({
      active: Joi.boolean(),

      approve: Joi.boolean(),

      choices: Joi.array().items(Joi.string()),

      id: Joi.string(),

      tags: Joi.array().items(Joi.string()),
    });
  };

  static UpdateReviewRequest = function () {
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
  };

  static UpdateVoteRequest = function () {
    return Joi.object({
      action: Joi.string(),

      active: Joi.boolean(),

      id: Joi.string(),

      refId: Joi.string(),

      refType: Joi.string(),
    });
  };

  static Url = function () {
    return Joi.object({
      main: Joi.string(),

      thumbnail: Joi.string(),
    });
  };

  static VoteRequest = function () {
    return Joi.object({
      action: Joi.string(),

      entityId: Joi.string(),

      entityType: Joi.string(),

      refId: Joi.string(),

      refType: Joi.string(),
    });
  };

  static XCursorGetResponse = function () {
    return Joi.object({
      items: Joi.object(),

      page: this.PageCursor(),
    });
  };

  static XInsertResponse = function () {
    return Joi.object({
      ids: Joi.string(),
    });
  };

  static XNumberGetResponse = function () {
    return Joi.object({
      items: Joi.object(),

      page: this.PageNumber(),
    });
  };

  static XUpdateResponse = function () {
    return Joi.object({
      id: Joi.string(),
    });
  };

  static UpdateCartShipmentItem = function () {
    return Joi.object({
      quantity: Joi.number(),

      articleUid: Joi.string(),

      shipmentType: Joi.string(),
    });
  };

  static UpdateCartShipmentRequest = function () {
    return Joi.object({
      shipments: Joi.array().items(this.UpdateCartShipmentItem()),
    });
  };

  static Files = function () {
    return Joi.object({
      values: Joi.array().items(Joi.string()),

      key: Joi.string(),
    });
  };

  static CartPosCheckoutRequest = function () {
    return Joi.object({
      merchantCode: Joi.string(),

      extraMeta: Joi.object(),

      fyndstoreEmpId: Joi.string(),

      billingAddress: Joi.object(),

      billingAddressId: Joi.number(),

      staff: Joi.object(),

      pos: Joi.boolean(),

      paymentMode: Joi.string(),

      pickAtStoreUid: Joi.number(),

      addressId: Joi.number(),

      files: this.Files(),

      paymentIdentifier: Joi.string(),

      deliveryAddress: Joi.object(),

      paymentParams: Joi.object(),

      orderingStore: Joi.number(),

      aggregator: Joi.string(),

      orderType: Joi.string(),

      paymentAutoConfirm: Joi.boolean(),

      meta: Joi.object(),

      callbackUrl: Joi.string(),
    });
  };

  static CartDeliveryModesResponse = function () {
    return Joi.object({
      pickupStores: Joi.array().items(Joi.number()),

      availableModes: Joi.array().items(Joi.string()),
    });
  };

  static PickupStoreDetail = function () {
    return Joi.object({
      area: Joi.string(),

      landmark: Joi.string(),

      address: Joi.string(),

      country: Joi.string(),

      pincode: Joi.number(),

      storeCode: Joi.string(),

      uid: Joi.number(),

      phone: Joi.string(),

      areaCode: Joi.string(),

      addressType: Joi.string(),

      areaCodeSlug: Joi.string(),

      city: Joi.string(),

      state: Joi.string(),

      email: Joi.string(),

      name: Joi.string(),
    });
  };

  static StoreDetailsResponse = function () {
    return Joi.object({
      items: Joi.array().items(this.PickupStoreDetail()),
    });
  };

  static GetPincodeCityResponse = function () {
    return Joi.object({
      requestUuid: Joi.string(),

      stormbreakerUuid: Joi.string(),

      success: Joi.boolean(),

      data: Joi.array().items(this.LogisticPincodeData()),
    });
  };

  static LogisticPincodeData = function () {
    return Joi.object({
      meta: this.LogisticMeta(),

      parents: Joi.array().items(this.LogisticParents()),

      subType: Joi.string(),

      name: Joi.string(),

      error: this.LogisticError(),

      uid: Joi.string(),

      displayName: Joi.string(),
    });
  };

  static LogisticMeta = function () {
    return Joi.object({
      zone: Joi.string(),

      deliverables: Joi.array().items(Joi.any()),
    });
  };

  static LogisticParents = function () {
    return Joi.object({
      subType: Joi.string(),

      name: Joi.string(),

      displayName: Joi.string(),

      uid: Joi.string(),
    });
  };

  static LogisticError = function () {
    return Joi.object({
      type: Joi.string(),

      value: Joi.string(),

      message: Joi.string(),
    });
  };

  static GetTatProductReqBody = function () {
    return Joi.object({
      locationDetails: this.LocationDetails(),

      source: Joi.string(),

      toPincode: Joi.string(),

      action: Joi.string(),

      identifier: Joi.string(),

      journey: Joi.string(),
    });
  };

  static LocationDetails = function () {
    return Joi.object({
      fromPincode: Joi.string(),

      articles: this.TatProductArticles(),

      fulfillmentId: Joi.number(),
    });
  };

  static TatProductArticles = function () {
    return Joi.object({
      error: Joi.object(),

      category: this.LogisticResponseCategory(),

      promise: this.LogisticPromise(),
    });
  };

  static LogisticRequestCategory = function () {
    return Joi.object({
      id: Joi.number(),

      level: Joi.string(),
    });
  };

  static LogisticPromise = function () {
    return Joi.object({
      timestamp: this.LogisticTimestamp(),

      formatted: this.Formatted(),
    });
  };

  static LogisticTimestamp = function () {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  };

  static GetTatProductResponse = function () {
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
  };

  static LogisticResponseCategory = function () {
    return Joi.object({
      id: Joi.number(),

      level: Joi.string(),
    });
  };
}

class CatalogValidator {
  static getProductDetailBySlug = Joi.object({
    slug: Joi.string().required(),
  }).required();

  static getProductSizesBySlug = Joi.object({
    slug: Joi.string().required(),
    storeId: Joi.string(),
  }).required();

  static getProductPriceBySlug = Joi.object({
    slug: Joi.string().required(),
    size: Joi.string().required(),
    pincode: Joi.string().required(),
    storeId: Joi.string(),
  }).required();

  static getProductSellersBySlug = Joi.object({
    slug: Joi.string().required(),
    size: Joi.string().required(),
    pincode: Joi.string().required(),
    pageNo: Joi.number(),
    pageSize: Joi.number(),
  }).required();

  static getProductComparisonBySlugs = Joi.object({
    slug: Joi.string().required(),
  }).required();

  static getSimilarComparisonProductBySlug = Joi.object({
    slug: Joi.string().required(),
  }).required();

  static getComparedFrequentlyProductBySlug = Joi.object({
    slug: Joi.string().required(),
  }).required();

  static getProductSimilarByIdentifier = Joi.object({
    slug: Joi.string().required(),
    similarType: Joi.string().required(),
  }).required();

  static getProductVariantsBySlug = Joi.object({
    slug: Joi.string().required(),
  }).required();

  static getProductStockByIds = Joi.object({
    itemId: Joi.string(),
    alu: Joi.string(),
    skuCode: Joi.string(),
    ean: Joi.string(),
    upc: Joi.string(),
  });

  static getProductStockForTimeByIds = Joi.object({
    timestamp: Joi.string().required(),
    pageSize: Joi.number(),
    pageId: Joi.string(),
  }).required();

  static getProducts = Joi.object({
    q: Joi.string(),
    f: Joi.string(),
    filters: Joi.boolean(),
    sortOn: Joi.string(),
    pageId: Joi.string(),
    pageSize: Joi.number(),
    pageNo: Joi.number(),
    pageType: Joi.string(),
  });

  static getBrands = Joi.object({
    department: Joi.string(),
    pageNo: Joi.number(),
    pageSize: Joi.number(),
  });

  static getBrandDetailBySlug = Joi.object({
    slug: Joi.string().required(),
  }).required();

  static getCategories = Joi.object({
    department: Joi.string(),
  });

  static getCategoryDetailBySlug = Joi.object({
    slug: Joi.string().required(),
  }).required();

  static getHomeProducts = Joi.object({
    sortOn: Joi.string(),
    pageId: Joi.string(),
    pageSize: Joi.number(),
  });

  static getDepartments = Joi.object({});

  static getSearchResults = Joi.object({
    q: Joi.string().required(),
  }).required();

  static getCollections = Joi.object({
    pageNo: Joi.number(),
    pageSize: Joi.number(),
  });

  static getCollectionItemsBySlug = Joi.object({
    slug: Joi.string().required(),
    f: Joi.string(),
    filters: Joi.boolean(),
    sortOn: Joi.string(),
    pageId: Joi.string(),
    pageSize: Joi.number(),
  }).required();

  static getCollectionDetailBySlug = Joi.object({
    slug: Joi.string().required(),
  }).required();

  static getFollowedListing = Joi.object({
    collectionType: Joi.string().required(),
  }).required();

  static followById = Joi.object({
    collectionType: Joi.string().required(),
    collectionId: Joi.string().required(),
  }).required();

  static unfollowById = Joi.object({
    collectionType: Joi.string().required(),
    collectionId: Joi.string().required(),
  }).required();

  static getFollowerCountById = Joi.object({
    collectionType: Joi.string().required(),
    collectionId: Joi.string().required(),
  }).required();

  static getFollowIds = Joi.object({
    collectionType: Joi.string(),
  });

  static getStores = Joi.object({
    pageNo: Joi.number(),
    pageSize: Joi.number(),
    q: Joi.string(),
    range: Joi.number(),
    latitude: Joi.number(),
    longitude: Joi.number(),
  });
}

class CartValidator {
  static getCart = Joi.object({
    uid: Joi.number(),
    i: Joi.boolean(),
    b: Joi.boolean(),
    assignCardId: Joi.number(),
  });

  static getCartLastModified = Joi.object({
    uid: Joi.number(),
  });

  static addItems = Joi.object({
    i: Joi.boolean(),
    b: Joi.boolean(),
    body: Validator.AddCartRequest().required(),
  }).required();

  static updateCart = Joi.object({
    uid: Joi.number(),
    i: Joi.boolean(),
    b: Joi.boolean(),
    body: Validator.UpdateCartRequest().required(),
  }).required();

  static getItemCount = Joi.object({
    uid: Joi.number(),
  });

  static getCoupons = Joi.object({
    uid: Joi.number(),
  });

  static applyCoupon = Joi.object({
    i: Joi.boolean(),
    b: Joi.boolean(),
    p: Joi.boolean(),
    uid: Joi.number(),
    body: Validator.ApplyCouponRequest().required(),
  }).required();

  static removeCoupon = Joi.object({
    uid: Joi.number(),
  });

  static getBulkDiscountOffers = Joi.object({
    itemId: Joi.number(),
    articleId: Joi.string(),
    uid: Joi.number(),
    slug: Joi.string(),
  });

  static getAddresses = Joi.object({
    uid: Joi.number(),
    mobileNo: Joi.string(),
    checkoutMode: Joi.string(),
    tags: Joi.number(),
    isDefault: Joi.boolean(),
  });

  static addAddress = Joi.object({
    body: Validator.Address().required(),
  }).required();

  static getAddressById = Joi.object({
    id: Joi.number().required(),
    uid: Joi.number(),
    mobileNo: Joi.string(),
    checkoutMode: Joi.string(),
    tags: Joi.number(),
    isDefault: Joi.boolean(),
  }).required();

  static updateAddress = Joi.object({
    id: Joi.number().required(),
    body: Validator.Address().required(),
  }).required();

  static removeAddress = Joi.object({
    id: Joi.number().required(),
  }).required();

  static selectAddress = Joi.object({
    uid: Joi.number(),
    i: Joi.boolean(),
    b: Joi.boolean(),
    body: Validator.SelectCartAddressRequest().required(),
  }).required();

  static selectPaymentMode = Joi.object({
    uid: Joi.string(),
    body: Validator.UpdateCartPaymentRequest().required(),
  }).required();

  static validateCouponForPayment = Joi.object({
    uid: Joi.string(),
    addressId: Joi.string(),
    paymentMode: Joi.string(),
    paymentIdentifier: Joi.string(),
    aggregatorName: Joi.string(),
    merchantCode: Joi.string(),
  });

  static getShipments = Joi.object({
    p: Joi.boolean(),
    uid: Joi.number(),
    addressId: Joi.number(),
    areaCode: Joi.string(),
  });

  static checkoutCart = Joi.object({
    body: Validator.CartCheckoutRequest().required(),
  }).required();

  static updateCartMeta = Joi.object({
    uid: Joi.number(),
    body: Validator.CartMetaRequest().required(),
  }).required();

  static getCartShareLink = Joi.object({
    body: Validator.GetShareCartLinkRequest().required(),
  }).required();

  static getCartSharedItems = Joi.object({
    token: Joi.string().required(),
  }).required();

  static updateCartWithSharedItems = Joi.object({
    token: Joi.string().required(),
    action: Joi.string().required(),
  }).required();
}

class LeadValidator {
  static getTicket = Joi.object({
    id: Joi.string().required(),
  }).required();

  static createHistory = Joi.object({
    ticketId: Joi.string().required(),
    body: Validator.TicketHistoryPayload().required(),
  }).required();

  static createTicket = Joi.object({
    body: Validator.AddTicketPayload().required(),
  }).required();

  static getCustomForm = Joi.object({
    slug: Joi.string().required(),
  }).required();

  static submitCustomForm = Joi.object({
    slug: Joi.string().required(),
    body: Validator.CustomFormSubmissionPayload().required(),
  }).required();

  static getParticipantsInsideVideoRoom = Joi.object({
    uniqueName: Joi.string().required(),
  }).required();

  static getTokenForVideoRoom = Joi.object({
    uniqueName: Joi.string().required(),
  }).required();
}

class ThemeValidator {
  static getAppliedTheme = Joi.object({});

  static getThemeForPreview = Joi.object({
    themeId: Joi.string().required(),
  }).required();
}

class UserValidator {
  static loginWithFacebook = Joi.object({
    body: Validator.OAuthRequestSchema().required(),
  }).required();

  static loginWithGoogle = Joi.object({
    body: Validator.OAuthRequestSchema().required(),
  }).required();

  static loginWithGoogleAndroid = Joi.object({
    body: Validator.OAuthRequestSchema().required(),
  }).required();

  static loginWithGoogleIOS = Joi.object({
    body: Validator.OAuthRequestSchema().required(),
  }).required();

  static loginWithOTP = Joi.object({
    platform: Joi.string(),
    body: Validator.SendOtpRequestSchema().required(),
  }).required();

  static loginWithEmailAndPassword = Joi.object({
    body: Validator.PasswordLoginRequestSchema().required(),
  }).required();

  static sendResetPasswordEmail = Joi.object({
    platform: Joi.string(),
    body: Validator.SendResetPasswordEmailRequestSchema().required(),
  }).required();

  static forgotPassword = Joi.object({
    body: Validator.ForgotPasswordRequestSchema().required(),
  }).required();

  static sendResetToken = Joi.object({
    body: Validator.CodeRequestBodySchema().required(),
  }).required();

  static loginWithToken = Joi.object({
    body: Validator.TokenRequestBodySchema().required(),
  }).required();

  static registerWithForm = Joi.object({
    platform: Joi.string(),
    body: Validator.FormRegisterRequestSchema().required(),
  }).required();

  static verifyEmail = Joi.object({
    body: Validator.CodeRequestBodySchema().required(),
  }).required();

  static verifyMobile = Joi.object({
    body: Validator.CodeRequestBodySchema().required(),
  }).required();

  static hasPassword = Joi.object({});

  static updatePassword = Joi.object({
    body: Validator.UpdatePasswordRequestSchema().required(),
  }).required();

  static logout = Joi.object({});

  static sendOTPOnMobile = Joi.object({
    platform: Joi.string(),
    body: Validator.SendMobileOtpRequestSchema().required(),
  }).required();

  static verifyMobileOTP = Joi.object({
    platform: Joi.string(),
    body: Validator.VerifyOtpRequestSchema().required(),
  }).required();

  static sendOTPOnEmail = Joi.object({
    platform: Joi.string(),
    body: Validator.SendEmailOtpRequestSchema().required(),
  }).required();

  static verifyEmailOTP = Joi.object({
    platform: Joi.string(),
    body: Validator.VerifyOtpRequestSchema().required(),
  }).required();

  static getLoggedInUser = Joi.object({});

  static getListOfActiveSessions = Joi.object({});

  static getPlatformConfig = Joi.object({
    name: Joi.string(),
  });

  static updateProfile = Joi.object({
    platform: Joi.string(),
    body: Validator.EditProfileRequestSchema().required(),
  }).required();

  static addMobileNumber = Joi.object({
    platform: Joi.string(),
    body: Validator.EditMobileRequestSchema().required(),
  }).required();

  static deleteMobileNumber = Joi.object({
    platform: Joi.string(),
    active: Joi.boolean().required(),
    primary: Joi.boolean().required(),
    verified: Joi.boolean().required(),
    countryCode: Joi.string().required(),
    phone: Joi.string().required(),
  }).required();

  static setMobileNumberAsPrimary = Joi.object({
    body: Validator.SendVerificationLinkMobileRequestSchema().required(),
  }).required();

  static sendVerificationLinkToMobile = Joi.object({
    platform: Joi.string(),
    body: Validator.SendVerificationLinkMobileRequestSchema().required(),
  }).required();

  static addEmail = Joi.object({
    platform: Joi.string(),
    body: Validator.EditEmailRequestSchema().required(),
  }).required();

  static deleteEmail = Joi.object({
    platform: Joi.string(),
    active: Joi.boolean().required(),
    primary: Joi.boolean().required(),
    verified: Joi.boolean().required(),
    email: Joi.string().required(),
  }).required();

  static setEmailAsPrimary = Joi.object({
    body: Validator.EditEmailRequestSchema().required(),
  }).required();

  static sendVerificationLinkToEmail = Joi.object({
    platform: Joi.string(),
    body: Validator.EditEmailRequestSchema().required(),
  }).required();
}

class ShareValidator {
  static getApplicationQRCode = Joi.object({});

  static getProductQRCodeBySlug = Joi.object({
    slug: Joi.string().required(),
  }).required();

  static getCollectionQRCodeBySlug = Joi.object({
    slug: Joi.string().required(),
  }).required();

  static getUrlQRCode = Joi.object({
    url: Joi.string().required(),
  }).required();

  static createShortLink = Joi.object({
    body: Validator.ShortLinkReq().required(),
  }).required();

  static getShortLinkByHash = Joi.object({
    hash: Joi.string().required(),
  }).required();

  static getOriginalShortLinkByHash = Joi.object({
    hash: Joi.string().required(),
  }).required();
}

class FileStorageValidator {
  static startUpload = Joi.object({
    namespace: Joi.string().required(),
    body: Validator.StartRequest().required(),
  }).required();

  static completeUpload = Joi.object({
    namespace: Joi.string().required(),
    body: Validator.StartResponse().required(),
  }).required();
}

class PaymentValidator {
  static getAggregatorsConfig = Joi.object({
    xApiToken: Joi.string().required(),
    refresh: Joi.boolean(),
  }).required();

  static attachCardToCustomer = Joi.object({
    body: Validator.AttachCardRequest().required(),
  }).required();

  static getActiveCardAggregator = Joi.object({
    refresh: Joi.boolean(),
  });

  static getActiveUserCards = Joi.object({
    forceRefresh: Joi.boolean(),
  });

  static deleteUserCard = Joi.object({
    body: Validator.DeletehCardRequest().required(),
  }).required();

  static verifyCustomerForPayment = Joi.object({
    body: Validator.ValidateCustomerRequest().required(),
  }).required();

  static verifyAndChargePayment = Joi.object({
    body: Validator.ChargeCustomerRequest().required(),
  }).required();

  static initialisePayment = Joi.object({
    body: Validator.PaymentInitializationRequest().required(),
  }).required();

  static checkAndUpdatePaymentStatus = Joi.object({
    body: Validator.PaymentStatusUpdateRequest().required(),
  }).required();

  static getPaymentModeRoutes = Joi.object({
    amount: Joi.number().required(),
    cartId: Joi.string().required(),
    pincode: Joi.string().required(),
    checkoutMode: Joi.string().required(),
    refresh: Joi.boolean(),
    assignCardId: Joi.string(),
    userDetails: Joi.string(),
  }).required();

  static getPosPaymentModeRoutes = Joi.object({
    amount: Joi.number().required(),
    cartId: Joi.string().required(),
    pincode: Joi.string().required(),
    checkoutMode: Joi.string().required(),
    refresh: Joi.boolean(),
    assignCardId: Joi.string(),
    orderType: Joi.string().required(),
    userDetails: Joi.string(),
  }).required();

  static getUserBeneficiariesDetail = Joi.object({
    orderId: Joi.string().required(),
  }).required();

  static verifyIfscCode = Joi.object({
    ifscCode: Joi.string(),
  });

  static getOrderBeneficiariesDetail = Joi.object({
    orderId: Joi.string().required(),
  }).required();

  static verifyOtpAndAddBeneficiaryForBank = Joi.object({
    body: Validator.AddBeneficiaryViaOtpVerificationRequest().required(),
  }).required();

  static addBeneficiaryDetails = Joi.object({
    body: Validator.AddBeneficiaryDetailsRequest().required(),
  }).required();

  static verifyOtpAndAddBeneficiaryForWallet = Joi.object({
    body: Validator.WalletOtpRequest().required(),
  }).required();

  static updateDefaultBeneficiary = Joi.object({
    body: Validator.SetDefaultBeneficiaryRequest().required(),
  }).required();
}

class OrderValidator {
  static getOrders = Joi.object({
    pageNo: Joi.string(),
    pageSize: Joi.string(),
    fromDate: Joi.string(),
    toDate: Joi.string(),
  });

  static getOrderById = Joi.object({
    orderId: Joi.string().required(),
  }).required();

  static getShipmentById = Joi.object({
    shipmentId: Joi.string().required(),
  }).required();

  static getShipmentReasons = Joi.object({
    shipmentId: Joi.string().required(),
  }).required();

  static updateShipmentStatus = Joi.object({
    shipmentId: Joi.string().required(),
    body: Validator.ShipmentStatusUpdateBody().required(),
  }).required();

  static trackShipment = Joi.object({
    shipmentId: Joi.string().required(),
  }).required();

  static getPosOrderById = Joi.object({
    orderId: Joi.string().required(),
  }).required();
}

class FeedbackValidator {
  static createAbuseReport = Joi.object({
    body: Validator.ReportAbuseRequest().required(),
  }).required();

  static updateAbuseReport = Joi.object({
    body: Validator.UpdateAbuseStatusRequest().required(),
  }).required();

  static getAbuseReports = Joi.object({
    entityId: Joi.string().required(),
    entityType: Joi.string().required(),
    id: Joi.string(),
    pageId: Joi.string(),
    pageSize: Joi.number(),
  }).required();

  static getAttributes = Joi.object({
    pageNo: Joi.number(),
    pageSize: Joi.number(),
  });

  static createAttribute = Joi.object({
    body: Validator.SaveAttributeRequest().required(),
  }).required();

  static getAttribute = Joi.object({
    slug: Joi.string().required(),
  }).required();

  static updateAttribute = Joi.object({
    slug: Joi.string().required(),
    body: Validator.UpdateAttributeRequest().required(),
  }).required();

  static createComment = Joi.object({
    body: Validator.CommentRequest().required(),
  }).required();

  static updateComment = Joi.object({
    body: Validator.UpdateCommentRequest().required(),
  }).required();

  static getComments = Joi.object({
    entityType: Joi.string().required(),
    id: Joi.string(),
    entityId: Joi.string(),
    userId: Joi.string(),
    pageId: Joi.string(),
    pageSize: Joi.number(),
  }).required();

  static checkEligibility = Joi.object({
    entityType: Joi.string().required(),
    entityId: Joi.string().required(),
  }).required();

  static deleteMedia = Joi.object({});

  static createMedia = Joi.object({
    body: Validator.AddMediaListRequest().required(),
  }).required();

  static updateMedia = Joi.object({
    body: Validator.UpdateMediaListRequest().required(),
  }).required();

  static getMedias = Joi.object({
    entityType: Joi.string().required(),
    entityId: Joi.string().required(),
    id: Joi.string(),
    pageId: Joi.string(),
    pageSize: Joi.number(),
  }).required();

  static getReviewSummaries = Joi.object({
    entityType: Joi.string().required(),
    entityId: Joi.string().required(),
    id: Joi.string(),
    pageId: Joi.string(),
    pageSize: Joi.number(),
  }).required();

  static createReview = Joi.object({
    body: Validator.UpdateReviewRequest().required(),
  }).required();

  static updateReview = Joi.object({
    body: Validator.UpdateReviewRequest().required(),
  }).required();

  static getReviews = Joi.object({
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

  static getTemplates = Joi.object({
    templateId: Joi.string(),
    entityId: Joi.string(),
    entityType: Joi.string(),
  });

  static createQuestion = Joi.object({
    body: Validator.CreateQNARequest().required(),
  }).required();

  static updateQuestion = Joi.object({
    body: Validator.UpdateQNARequest().required(),
  }).required();

  static getQuestionAndAnswers = Joi.object({
    entityType: Joi.string().required(),
    entityId: Joi.string().required(),
    id: Joi.string(),
    showAnswer: Joi.boolean(),
    pageId: Joi.string(),
    pageSize: Joi.number(),
  }).required();

  static getVotes = Joi.object({
    id: Joi.string(),
    refType: Joi.string(),
  });

  static createVote = Joi.object({
    body: Validator.VoteRequest().required(),
  }).required();

  static updateVote = Joi.object({
    body: Validator.UpdateVoteRequest().required(),
  }).required();
}

class PosCartValidator {
  static getCart = Joi.object({
    uid: Joi.number(),
    i: Joi.boolean(),
    b: Joi.boolean(),
    assignCardId: Joi.number(),
  });

  static getCartLastModified = Joi.object({
    uid: Joi.number(),
  });

  static addItems = Joi.object({
    i: Joi.boolean(),
    b: Joi.boolean(),
    body: Validator.AddCartRequest().required(),
  }).required();

  static updateCart = Joi.object({
    uid: Joi.number(),
    i: Joi.boolean(),
    b: Joi.boolean(),
    body: Validator.UpdateCartRequest().required(),
  }).required();

  static getItemCount = Joi.object({
    uid: Joi.number(),
  });

  static getCoupons = Joi.object({
    uid: Joi.number(),
  });

  static applyCoupon = Joi.object({
    i: Joi.boolean(),
    b: Joi.boolean(),
    p: Joi.boolean(),
    uid: Joi.number(),
    body: Validator.ApplyCouponRequest().required(),
  }).required();

  static removeCoupon = Joi.object({
    uid: Joi.number(),
  });

  static getBulkDiscountOffers = Joi.object({
    itemId: Joi.number(),
    articleId: Joi.string(),
    uid: Joi.number(),
    slug: Joi.string(),
  });

  static getAddresses = Joi.object({
    uid: Joi.number(),
    mobileNo: Joi.string(),
    checkoutMode: Joi.string(),
    tags: Joi.number(),
    isDefault: Joi.boolean(),
  });

  static addAddress = Joi.object({
    body: Validator.Address().required(),
  }).required();

  static getAddressById = Joi.object({
    id: Joi.number().required(),
    uid: Joi.number(),
    mobileNo: Joi.string(),
    checkoutMode: Joi.string(),
    tags: Joi.number(),
    isDefault: Joi.boolean(),
  }).required();

  static updateAddress = Joi.object({
    id: Joi.number().required(),
    body: Validator.Address().required(),
  }).required();

  static removeAddress = Joi.object({
    id: Joi.number().required(),
  }).required();

  static selectAddress = Joi.object({
    uid: Joi.number(),
    i: Joi.boolean(),
    b: Joi.boolean(),
    body: Validator.SelectCartAddressRequest().required(),
  }).required();

  static selectPaymentMode = Joi.object({
    uid: Joi.string(),
    body: Validator.UpdateCartPaymentRequest().required(),
  }).required();

  static validateCouponForPayment = Joi.object({
    uid: Joi.string(),
    addressId: Joi.string(),
    paymentMode: Joi.string(),
    paymentIdentifier: Joi.string(),
    aggregatorName: Joi.string(),
    merchantCode: Joi.string(),
  });

  static getShipments = Joi.object({
    pickAtStoreUid: Joi.number(),
    orderingStoreId: Joi.number(),
    p: Joi.boolean(),
    uid: Joi.number(),
    addressId: Joi.number(),
    areaCode: Joi.string(),
    orderType: Joi.string(),
  });

  static updateShipments = Joi.object({
    i: Joi.boolean(),
    p: Joi.boolean(),
    uid: Joi.number(),
    addressId: Joi.number(),
    orderType: Joi.string(),
    body: Validator.UpdateCartShipmentRequest().required(),
  }).required();

  static checkoutCart = Joi.object({
    uid: Joi.number(),
    body: Validator.CartPosCheckoutRequest().required(),
  }).required();

  static updateCartMeta = Joi.object({
    uid: Joi.number(),
    body: Validator.CartMetaRequest().required(),
  }).required();

  static getAvailableDeliveryModes = Joi.object({
    areaCode: Joi.string().required(),
    uid: Joi.number(),
  }).required();

  static getStoreAddressByUid = Joi.object({
    storeUid: Joi.number().required(),
  }).required();

  static getCartShareLink = Joi.object({
    body: Validator.GetShareCartLinkRequest().required(),
  }).required();

  static getCartSharedItems = Joi.object({
    token: Joi.string().required(),
  }).required();

  static updateCartWithSharedItems = Joi.object({
    token: Joi.string().required(),
    action: Joi.string().required(),
  }).required();
}

class LogisticValidator {
  static getTatProduct = Joi.object({
    body: Validator.GetTatProductReqBody().required(),
  }).required();

  static getPincodeCity = Joi.object({
    pincode: Joi.string().required(),
  }).required();
}

module.exports = {
  CatalogValidator,
  CartValidator,
  LeadValidator,
  ThemeValidator,
  UserValidator,
  ShareValidator,
  FileStorageValidator,
  PaymentValidator,
  OrderValidator,
  FeedbackValidator,
  PosCartValidator,
  LogisticValidator,
  Validator,
};
