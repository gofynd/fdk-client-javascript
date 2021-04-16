const Joi = require("joi");
class Validator {
  static Media() {
    return Joi.object({
      type: Joi.string(),

      url: Joi.string(),
    });
  }

  static ProductListingActionPage() {
    return Joi.object({
      params: Joi.object(),

      query: Joi.object(),

      type: Joi.string(),
    });
  }

  static ProductListingAction() {
    return Joi.object({
      page: this.ProductListingActionPage(),

      type: Joi.string(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      name: Joi.string(),

      logo: this.Media(),

      action: this.ProductListingAction(),

      uid: Joi.number(),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.string(),

      key: Joi.string(),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      details: Joi.array().items(this.ProductDetailAttribute()),

      title: Joi.string(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      categories: Joi.array().items(this.ProductBrand()),

      short_description: Joi.string(),

      description: Joi.string(),

      color: Joi.string(),

      item_type: Joi.string(),

      rating: Joi.number(),

      type: Joi.string(),

      tryouts: Joi.array().items(Joi.string()),

      rating_count: Joi.number(),

      name: Joi.string(),

      similars: Joi.array().items(Joi.string()),

      uid: Joi.number(),

      slug: Joi.string().required(),

      has_variant: Joi.boolean(),

      attributes: Joi.object(),

      highlights: Joi.array().items(Joi.string()),

      medias: Joi.array().items(this.Media()),

      product_online_date: Joi.string(),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string(),

      brand: this.ProductBrand(),

      teaser_tag: Joi.string(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_1: Joi.string(),

      col_4: Joi.string(),

      col_5: Joi.string(),

      col_3: Joi.string(),

      col_2: Joi.string(),

      col_6: Joi.string(),
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
      col_1: this.ColumnHeader(),

      col_4: this.ColumnHeader(),

      col_5: this.ColumnHeader(),

      col_3: this.ColumnHeader(),

      col_2: this.ColumnHeader(),

      col_6: this.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      size_tip: Joi.string(),

      title: Joi.string(),

      sizes: Joi.array().items(this.SizeChartValues()),

      description: Joi.string(),

      image: Joi.string(),

      headers: this.ColumnHeaders(),

      unit: Joi.string(),
    });
  }

  static ProductSize() {
    return Joi.object({
      quantity: Joi.number(),

      value: Joi.string(),

      display: Joi.string(),

      is_available: Joi.boolean(),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static Price() {
    return Joi.object({
      min: Joi.number(),

      currency_symbol: Joi.string(),

      currency_code: Joi.string(),

      max: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: this.Price(),

      effective: this.Price(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      sellable: Joi.boolean(),

      discount: Joi.string(),

      size_chart: this.SizeChart(),

      sizes: Joi.array().items(this.ProductSize()),

      stores: this.ProductSizeStores(),

      price: this.ProductListingPrice(),
    });
  }

  static Seller() {
    return Joi.object({
      name: Joi.string(),

      count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string(),
    });
  }

  static ArticleAssignment() {
    return Joi.object({
      strategy: Joi.string(),

      level: Joi.string(),
    });
  }

  static Store() {
    return Joi.object({
      name: Joi.string(),

      count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static ProductSetDistributionSize() {
    return Joi.object({
      pieces: Joi.number(),

      size: Joi.string(),
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

      size_distribution: this.ProductSetDistribution(),
    });
  }

  static ProductSizePriceResponse() {
    return Joi.object({
      item_type: Joi.string(),

      seller: this.Seller(),

      strategy_wise_listing: Joi.array().items(Joi.object()),

      special_badge: Joi.string(),

      seller_count: Joi.number(),

      pincode: Joi.number(),

      discount: Joi.string(),

      long_lat: Joi.array().items(Joi.number()),

      price_per_price: this.ProductStockPrice(),

      quantity: Joi.number(),

      article_assignment: this.ArticleAssignment(),

      store: this.Store(),

      set: this.ProductSet(),

      price: this.ProductStockPrice(),

      article_id: Joi.string(),
    });
  }

  static ProductSizeSellerFilter() {
    return Joi.object({
      name: Joi.string(),

      value: Joi.string(),

      is_selected: Joi.boolean(),
    });
  }

  static ProductSizeSellersResponse() {
    return Joi.object({
      page: this.Page().required(),

      items: Joi.array().items(this.ProductSizePriceResponse()),

      sort_on: Joi.array().items(this.ProductSizeSellerFilter()),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      description: Joi.string(),

      display: Joi.string(),

      key: Joi.string(),
    });
  }

  static ProductsComparisonResponse() {
    return Joi.object({
      attributes_metadata: Joi.array().items(this.AttributeDetail()),

      items: Joi.array().items(this.ProductDetail()),
    });
  }

  static ProductCompareResponse() {
    return Joi.object({
      title: Joi.string(),

      attributes_metadata: Joi.array().items(this.AttributeDetail()),

      items: Joi.array().items(this.ProductDetail()),

      subtitle: Joi.string(),
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

      items: Joi.array().items(this.ProductDetail()),

      subtitle: Joi.string(),
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

      action: this.ProductListingAction(),

      medias: Joi.array().items(this.Media()),

      is_available: Joi.boolean(),

      color_name: Joi.string(),

      color: Joi.string(),

      name: Joi.string(),

      value: Joi.string(),

      uid: Joi.number(),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      header: Joi.string(),

      items: Joi.array().items(this.ProductVariantItemResponse()),

      display_type: Joi.string(),
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

      code: Joi.string(),

      city: Joi.string(),

      id: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      size: Joi.string(),

      seller: this.Seller(),

      company: this.CompanyDetail(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      store: this.StoreDetail(),

      identifier: Joi.object(),

      price: this.ProductStockPrice(),

      uid: Joi.string(),
    });
  }

  static ProductStockStatusResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductStockStatusItem()),
    });
  }

  static ProductStockPolling() {
    return Joi.object({
      page: this.Page().required(),

      items: Joi.array().items(this.ProductStockStatusItem()),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      categories: Joi.array().items(this.ProductBrand()),

      short_description: Joi.string(),

      description: Joi.string(),

      color: Joi.string(),

      item_type: Joi.string(),

      rating: Joi.number(),

      sellable: Joi.boolean(),

      type: Joi.string(),

      tryouts: Joi.array().items(Joi.string()),

      rating_count: Joi.number(),

      name: Joi.string(),

      similars: Joi.array().items(Joi.string()),

      uid: Joi.number(),

      slug: Joi.string().required(),

      has_variant: Joi.boolean(),

      attributes: Joi.object(),

      discount: Joi.string(),

      highlights: Joi.array().items(Joi.string()),

      medias: Joi.array().items(this.Media()),

      product_online_date: Joi.string(),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string(),

      brand: this.ProductBrand(),

      price: this.ProductListingPrice(),

      teaser_tag: Joi.string(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display: Joi.string().required(),

      currency_symbol: Joi.string(),

      query_format: Joi.string(),

      max: Joi.number(),

      selected_max: Joi.number(),

      min: Joi.number(),

      currency_code: Joi.string(),

      display_format: Joi.string(),

      value: Joi.string(),

      is_selected: Joi.boolean().required(),

      selected_min: Joi.number(),

      count: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().required(),

      display: Joi.string().required(),

      kind: Joi.string(),

      logo: Joi.string(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      values: Joi.array().items(this.ProductFiltersValue()).required(),

      key: this.ProductFiltersKey().required(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      name: Joi.string(),

      value: Joi.string(),

      is_selected: Joi.boolean(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: this.Page().required(),

      items: Joi.array().items(this.ProductListingDetail()),

      filters: Joi.array().items(this.ProductFilters()),

      sort_on: Joi.array().items(this.ProductSortOn()),
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

      discount: Joi.string(),

      banners: this.ImageUrls(),

      logo: this.Media(),

      departments: Joi.array().items(Joi.string()),

      name: Joi.string(),

      uid: Joi.number(),
    });
  }

  static BrandListingResponse() {
    return Joi.object({
      page: this.Page().required(),

      items: Joi.array().items(this.BrandItem()),
    });
  }

  static BrandDetailResponse() {
    return Joi.object({
      name: Joi.string(),

      uid: Joi.number(),

      banners: this.ImageUrls(),

      logo: this.Media(),
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

      action: this.ProductListingAction(),

      banners: this.ImageUrls(),

      name: Joi.string(),

      childs: Joi.array().items(Joi.object()),

      uid: Joi.number(),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      department: Joi.string(),

      items: Joi.array().items(this.CategoryItems()),
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

      uid: Joi.number(),

      banners: this.ImageUrls(),

      logo: this.Media(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      page: this.Page().required(),

      message: Joi.string(),

      items: Joi.array().items(this.ProductListingDetail()),
    });
  }

  static Department() {
    return Joi.object({
      priority_order: Joi.number(),

      slug: Joi.string(),

      logo: this.Media(),

      name: Joi.string(),

      uid: Joi.number(),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(this.Department()),
    });
  }

  static AutocompleteItem() {
    return Joi.object({
      action: this.ProductListingAction(),

      display: Joi.string(),

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
      _schedule: Joi.object(),

      allow_facets: Joi.boolean(),

      action: this.ProductListingAction(),

      visible_facets_keys: Joi.array().items(Joi.string()),

      description: Joi.string(),

      tag: Joi.array().items(Joi.string()),

      badge: Joi.object(),

      type: Joi.string(),

      name: Joi.string(),

      uid: Joi.string(),

      slug: Joi.string(),

      banners: this.ImageUrls(),

      logo: this.Media(),

      allow_sort: Joi.boolean(),

      query: Joi.object(),

      cron: Joi.object(),

      meta: Joi.object(),

      app_id: Joi.string(),

      is_active: Joi.boolean(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string(),

      is_selected: Joi.boolean(),

      display: Joi.string(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string(),

      is_selected: Joi.boolean(),

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
      page: this.Page().required(),

      items: Joi.array().items(this.GetCollectionDetailNest()),

      filters: this.CollectionListingFilter(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      query: Joi.object(),

      cron: Joi.object(),

      _schedule: Joi.object(),

      slug: Joi.string(),

      allow_facets: Joi.boolean(),

      banners: this.ImageUrls(),

      meta: Joi.object(),

      logo: this.Media(),

      app_id: Joi.string(),

      is_active: Joi.boolean(),

      description: Joi.string(),

      tag: Joi.array().items(Joi.string()),

      type: Joi.string(),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string()),

      name: Joi.string(),

      badge: Joi.object(),
    });
  }

  static GetFollowListingResponse() {
    return Joi.object({
      page: this.Page().required(),

      items: Joi.array().items(this.ProductListingDetail()).required(),
    });
  }

  static FollowPostResponse() {
    return Joi.object({
      message: Joi.string().required(),

      id: Joi.string().required(),
    });
  }

  static FollowerCountResponse() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static FollowIdsData() {
    return Joi.object({
      brands: Joi.array().items(Joi.number()),

      products: Joi.array().items(Joi.number()),

      collections: Joi.array().items(Joi.number()),
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
      lat_long: this.LatLong(),

      store_code: Joi.string(),

      uid: Joi.number(),

      pincode: Joi.number(),

      address: Joi.string(),

      country: Joi.string(),

      store_email: Joi.string(),

      city: Joi.string(),

      name: Joi.string(),

      state: Joi.string(),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      page: this.Page().required(),

      items: Joi.array().items(this.Store1()).required(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      description: Joi.string(),

      total: Joi.number(),

      applicable: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string(),

      message: Joi.array().items(Joi.string()),

      currency_code: Joi.string(),

      value: Joi.number(),

      display: Joi.string(),

      currency_symbol: Joi.string(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      delivery_charge: Joi.number(),

      you_saved: Joi.number(),

      total: Joi.number(),

      fynd_cash: Joi.number(),

      cod_charge: Joi.number(),

      coupon: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      is_applied: Joi.boolean(),

      type: Joi.string(),

      message: Joi.string(),

      value: Joi.number(),

      uid: Joi.string(),

      code: Joi.string(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: this.LoyaltyPoints(),

      display: Joi.array().items(this.DisplayBreakup()),

      raw: this.RawBreakup(),

      coupon: this.CouponBreakup(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string(),

      uid: Joi.number(),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_symbol: Joi.string(),

      currency_code: Joi.string(),

      marked: Joi.number(),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      base: this.BasePrice(),

      converted: this.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      type: Joi.string(),

      store: this.BaseInfo(),

      seller: this.BaseInfo(),

      uid: Joi.string(),

      quantity: Joi.number(),

      size: Joi.string(),

      price: this.ArticlePriceInfo(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string()),
    });
  }

  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string()),
    });
  }

  static ProductAction() {
    return Joi.object({
      query: this.ActionQuery(),

      type: Joi.string(),

      url: Joi.string(),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio: Joi.string(),

      url: Joi.string(),

      secure_url: Joi.string(),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string(),

      uid: Joi.number(),
    });
  }

  static Product() {
    return Joi.object({
      action: this.ProductAction(),

      type: Joi.string(),

      brand: this.BaseInfo(),

      images: Joi.array().items(this.Image()),

      name: Joi.string(),

      slug: Joi.string(),

      categories: Joi.array().items(this.CategoryInfo()),

      uid: Joi.number(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      currency_code: Joi.string(),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string(),

      selling: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: this.ProductPrice(),

      converted: this.ProductPrice(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      key: Joi.string(),

      article: this.ProductArticle(),

      message: Joi.string(),

      coupon_message: Joi.string(),

      discount: Joi.string(),

      bulk_offer: Joi.object(),

      availability: this.ProductAvailability(),

      product: this.Product(),

      identifiers: this.CartProductIdentifer().required(),

      quantity: Joi.number(),

      is_set: Joi.boolean(),

      price: this.ProductPriceInfo(),
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
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static PromiseFormatted() {
    return Joi.object({
      max: Joi.string(),

      min: Joi.string(),
    });
  }

  static ShipmentPromise() {
    return Joi.object({
      timestamp: this.PromiseTimestamp(),

      formatted: this.PromiseFormatted(),
    });
  }

  static CartResponse() {
    return Joi.object({
      breakup_values: this.CartBreakup(),

      message: Joi.string(),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string(),

      delivery_charge_info: Joi.string(),

      items: Joi.array().items(this.CartProductInfo()),

      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string(),

      last_modified: Joi.string(),

      currency: this.CartCurrency(),

      gstin: Joi.string(),

      comment: Joi.string(),

      delivery_promise: this.ShipmentPromise(),

      cart_id: Joi.number(),

      uid: Joi.string(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_id: Joi.string(),

      item_id: Joi.number(),

      seller_id: Joi.number(),

      display: Joi.string(),

      quantity: Joi.number(),

      pos: Joi.boolean(),

      store_id: Joi.number(),

      article_assignment: Joi.object(),

      item_size: Joi.string(),
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

      partial: Joi.boolean(),

      message: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      item_size: Joi.string(),

      identifiers: this.CartProductIdentifer().required(),

      quantity: Joi.number(),

      item_index: Joi.number(),

      article_id: Joi.string(),
    });
  }

  static UpdateCartRequest() {
    return Joi.object({
      operation: Joi.string().required(),

      items: Joi.array().items(this.UpdateProductCart()),
    });
  }

  static UpdateCartResponse() {
    return Joi.object({
      cart: this.CartResponse(),

      message: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      current: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      has_next: Joi.boolean(),

      total_item_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      coupon_code: Joi.string(),

      message: Joi.string(),

      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),

      expires_on: Joi.string(),

      title: Joi.string(),

      is_applicable: Joi.boolean(),

      sub_title: Joi.string(),
    });
  }

  static GetCouponResponse() {
    return Joi.object({
      page: this.PageCoupon(),

      available_coupon_list: Joi.array().items(this.Coupon()),
    });
  }

  static ApplyCouponRequest() {
    return Joi.object({
      coupon_code: Joi.string().required(),
    });
  }

  static OfferPrice() {
    return Joi.object({
      bulk_effective: Joi.number(),

      currency_code: Joi.string(),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string(),
    });
  }

  static OfferItem() {
    return Joi.object({
      auto_applied: Joi.boolean(),

      type: Joi.string(),

      best: Joi.boolean(),

      total: Joi.number(),

      margin: Joi.number(),

      quantity: Joi.number(),

      price: this.OfferPrice(),
    });
  }

  static OfferSeller() {
    return Joi.object({
      name: Joi.string(),

      uid: Joi.number(),
    });
  }

  static BulkPriceOffer() {
    return Joi.object({
      offers: Joi.array().items(this.OfferItem()),

      seller: this.OfferSeller(),
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
      email: Joi.string(),

      area_code: Joi.string(),

      city: Joi.string(),

      landmark: Joi.string(),

      country: Joi.string(),

      checkout_mode: Joi.string(),

      name: Joi.string(),

      state: Joi.string(),

      area_code_slug: Joi.string(),

      is_active: Joi.boolean(),

      user_id: Joi.string(),

      is_default_address: Joi.boolean(),

      address: Joi.string(),

      address_type: Joi.string(),

      geo_location: this.GeoLocation(),

      tags: Joi.array().items(Joi.string()),

      google_map_point: Joi.object(),

      country_code: Joi.string(),

      area: Joi.string(),

      meta: Joi.object(),

      phone: Joi.string(),

      uid: Joi.number(),
    });
  }

  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(this.Address()),
    });
  }

  static SaveAddressResponse() {
    return Joi.object({
      success: Joi.string(),

      address_id: Joi.number(),

      is_default_address: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      address_id: Joi.number(),

      is_default_address: Joi.boolean(),

      is_updated: Joi.boolean(),
    });
  }

  static DeleteAddressResponse() {
    return Joi.object({
      address_id: Joi.number(),

      is_deleted: Joi.boolean(),
    });
  }

  static SelectCartAddressRequest() {
    return Joi.object({
      billing_address_id: Joi.number(),

      address_id: Joi.string(),

      uid: Joi.string(),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      merchant_code: Joi.string(),

      address_id: Joi.number(),

      payment_mode: Joi.string(),

      payment_identifier: Joi.string(),

      aggregator_name: Joi.string(),

      uid: Joi.number(),
    });
  }

  static CouponValidity() {
    return Joi.object({
      valid: Joi.boolean(),

      discount: Joi.number(),

      title: Joi.string(),

      display_message_en: Joi.string(),

      code: Joi.string(),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string(),

      coupon_validity: this.CouponValidity(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      promise: this.ShipmentPromise(),

      fulfillment_type: Joi.string(),

      dp_id: Joi.number(),

      fulfillment_id: Joi.number(),

      items: Joi.array().items(this.CartProductInfo()),

      box_type: Joi.string(),

      shipments: Joi.number(),

      dp_options: Joi.object(),

      order_type: Joi.string(),

      shipment_type: Joi.string(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      breakup_values: this.CartBreakup(),

      message: Joi.string(),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string(),

      delivery_charge_info: Joi.string(),

      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string(),

      last_modified: Joi.string(),

      currency: this.CartCurrency(),

      gstin: Joi.string(),

      comment: Joi.string(),

      delivery_promise: this.ShipmentPromise(),

      error: Joi.boolean(),

      shipments: Joi.array().items(this.ShipmentResponse()),

      cart_id: Joi.number(),

      uid: Joi.string(),
    });
  }

  static CartCheckoutRequest() {
    return Joi.object({
      billing_address_id: Joi.number(),

      callback_url: Joi.string(),

      merchant_code: Joi.string(),

      billing_address: Joi.object(),

      aggregator: Joi.string(),

      address_id: Joi.number(),

      payment_mode: Joi.string().required(),

      extra_meta: Joi.object(),

      ordering_store: Joi.number(),

      fyndstore_emp_id: Joi.string(),

      meta: Joi.object(),

      staff: Joi.object(),

      payment_identifier: Joi.string(),

      payment_auto_confirm: Joi.boolean(),

      delivery_address: Joi.object(),

      payment_params: Joi.object(),
    });
  }

  static CheckCart() {
    return Joi.object({
      breakup_values: this.CartBreakup(),

      delivery_charge_info: Joi.string(),

      delivery_charge_order_value: Joi.number(),

      cod_message: Joi.string(),

      delivery_charges: Joi.number(),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string(),

      order_id: Joi.string(),

      error_message: Joi.string(),

      items: Joi.array().items(this.CartProductInfo()),

      last_modified: Joi.string(),

      coupon_text: Joi.string(),

      comment: Joi.string(),

      cart_id: Joi.number(),

      success: Joi.boolean(),

      cod_available: Joi.boolean(),

      message: Joi.string(),

      currency: this.CartCurrency(),

      gstin: Joi.string(),

      delivery_promise: this.ShipmentPromise(),

      user_type: Joi.string(),

      cod_charges: Joi.number(),

      store_emps: Joi.array().items(Joi.object()),

      restrict_checkout: Joi.boolean(),

      store_code: Joi.string(),

      uid: Joi.string(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string(),

      cart: this.CheckCart(),

      callback_url: Joi.string(),

      order_id: Joi.string(),

      app_intercept_url: Joi.string(),

      data: Joi.object(),

      success: Joi.boolean(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string(),

      gstin: Joi.string(),

      comment: Joi.string(),

      pick_up_customer_details: Joi.object(),
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
      uid: Joi.number().required(),

      meta: Joi.object(),
    });
  }

  static GetShareCartLinkResponse() {
    return Joi.object({
      share_url: Joi.string(),

      token: Joi.string(),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      created_on: Joi.string(),

      user: Joi.object(),

      meta: Joi.object(),

      source: Joi.object(),

      token: Joi.string(),
    });
  }

  static SharedCart() {
    return Joi.object({
      breakup_values: this.CartBreakup(),

      message: Joi.string(),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string(),

      delivery_charge_info: Joi.string(),

      items: Joi.array().items(this.CartProductInfo()),

      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string(),

      last_modified: Joi.string(),

      currency: this.CartCurrency(),

      gstin: Joi.string(),

      comment: Joi.string(),

      delivery_promise: this.ShipmentPromise(),

      shared_cart_details: this.SharedCartDetails(),

      cart_id: Joi.number(),

      uid: Joi.string(),
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

  static Page() {
    return Joi.object({
      item_total: Joi.number(),

      next_id: Joi.string(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().required(),

      size: Joi.number(),
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
      slug: Joi.string().required(),

      title: Joi.string().required(),

      inputs: Joi.array().items(Joi.object()).required(),

      description: Joi.string(),

      header_image: Joi.string(),

      should_notify: Joi.boolean(),

      success_message: Joi.string(),

      poll_for_assignment: this.PollForAssignment(),
    });
  }

  static EditCustomFormPayload() {
    return Joi.object({
      title: Joi.string().required(),

      inputs: Joi.array().items(Joi.object()).required(),

      description: Joi.string(),

      header_image: Joi.string(),

      should_notify: Joi.boolean(),

      login_required: Joi.boolean(),

      success_message: Joi.string(),

      poll_for_assignment: this.PollForAssignment(),
    });
  }

  static EditTicketPayload() {
    return Joi.object({
      content: this.TicketContent(),

      category: Joi.string(),

      source: Joi.string(),

      status: Joi.string(),

      priority: Joi.string(),

      assigned_to: this.AgentChangePayload(),

      tags: Joi.array().items(Joi.string()),
    });
  }

  static AgentChangePayload() {
    return Joi.object({
      agent_id: Joi.string().required(),
    });
  }

  static CreateVideoRoomResponse() {
    return Joi.object({
      unique_name: Joi.string().required(),
    });
  }

  static CloseVideoRoomResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static CreateVideoRoomPayload() {
    return Joi.object({
      unique_name: Joi.string().required(),

      notify: Joi.array().items(Joi.object()),
    });
  }

  static Filter() {
    return Joi.object({
      priorities: Joi.array().items(this.Priority()).required(),

      categories: Joi.array().items(this.TicketCategory()),

      statuses: Joi.array().items(this.Status()).required(),

      assignees: Joi.array().items(Joi.object()).required(),
    });
  }

  static TicketHistoryPayload() {
    return Joi.object({
      value: Joi.object().required(),

      type: Joi.string().required(),
    });
  }

  static CustomFormSubmissionPayload() {
    return Joi.object({
      response: Joi.array().items(this.KeyValue()).required(),
    });
  }

  static KeyValue() {
    return Joi.object({
      key: Joi.string().required(),

      value: Joi.string().required(),
    });
  }

  static GetTokenForVideoRoomResponse() {
    return Joi.object({
      access_token: Joi.string().required(),
    });
  }

  static GetParticipantsInsideVideoRoomResponse() {
    return Joi.object({
      participants: Joi.array().items(this.Participant()).required(),
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
      first_name: Joi.string(),

      last_name: Joi.string(),

      phone_numbers: Joi.array().items(this.PhoneNumber()),

      emails: Joi.array().items(this.Email()),

      gender: Joi.string(),

      active: Joi.boolean(),

      profile_pic_url: Joi.string(),

      username: Joi.string(),

      account_type: Joi.string(),

      uid: Joi.string(),

      debug: this.Debug(),

      has_old_password_hash: Joi.boolean(),

      _id: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),
    });
  }

  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      phone: Joi.string(),

      country_code: Joi.number(),
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
      ticket: this.Ticket().required(),
    });
  }

  static TicketContext() {
    return Joi.object({
      application_id: Joi.string(),

      company_id: Joi.string().required(),
    });
  }

  static CreatedOn() {
    return Joi.object({
      user_agent: Joi.string().required(),
    });
  }

  static TicketAsset() {
    return Joi.object({
      display: Joi.string(),

      value: Joi.string().required(),

      type: Joi.string().required(),
    });
  }

  static TicketContent() {
    return Joi.object({
      title: Joi.string().required(),

      description: Joi.string(),

      attachments: Joi.array().items(this.TicketAsset()),
    });
  }

  static AddTicketPayload() {
    return Joi.object({
      status: Joi.string().required(),

      priority: Joi.string().required(),

      category: Joi.string().required(),

      content: this.TicketContent().required(),
    });
  }

  static Priority() {
    return Joi.object({
      key: Joi.string().required(),

      display: Joi.string().required(),

      color: Joi.string().required(),
    });
  }

  static Status() {
    return Joi.object({
      key: Joi.string().required(),

      display: Joi.string().required(),

      color: Joi.string().required(),
    });
  }

  static TicketCategory() {
    return Joi.object({
      key: Joi.string().required(),

      display: Joi.string().required(),

      form: this.CustomForm(),
    });
  }

  static SubmitButton() {
    return Joi.object({
      title: Joi.string().required(),

      title_color: Joi.string().required(),

      background_color: Joi.string().required(),
    });
  }

  static PollForAssignment() {
    return Joi.object({
      duration: Joi.number().required(),

      message: Joi.string().required(),

      success_message: Joi.string().required(),

      failure_message: Joi.string().required(),
    });
  }

  static CustomForm() {
    return Joi.object({
      application_id: Joi.string().required(),

      slug: Joi.string().required(),

      header_image: Joi.string(),

      title: Joi.string().required(),

      description: Joi.string(),

      login_required: Joi.boolean().required(),

      should_notify: Joi.boolean().required(),

      success_message: Joi.string(),

      submit_button: this.SubmitButton(),

      inputs: Joi.array().items(Joi.object()).required(),

      created_on: this.CreatedOn(),

      created_by: Joi.object(),

      poll_for_assignment: this.PollForAssignment(),

      _id: Joi.string().required(),
    });
  }

  static TicketHistory() {
    return Joi.object({
      type: Joi.string().required(),

      value: Joi.object().required(),

      ticket_id: Joi.string().required(),

      created_on: this.CreatedOn(),

      created_by: Joi.object(),

      _id: Joi.string().required(),

      updated_at: Joi.string(),

      created_at: Joi.string(),
    });
  }

  static Ticket() {
    return Joi.object({
      context: this.TicketContext(),

      created_on: this.CreatedOn(),

      response_id: Joi.string(),

      content: this.TicketContent(),

      ticket_id: Joi.string().required(),

      category: this.TicketCategory().required(),

      source: Joi.string().required(),

      status: this.Status().required(),

      priority: this.Priority().required(),

      created_by: Joi.object(),

      assigned_to: Joi.object(),

      tags: Joi.array().items(Joi.string()),

      _custom_json: Joi.object(),

      _id: Joi.string(),

      updated_at: Joi.string(),

      created_at: Joi.string(),
    });
  }

  static PaginationSchema() {
    return Joi.object({
      size: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),

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
      theme_id: Joi.string(),
    });
  }

  static UpgradableThemeSchema() {
    return Joi.object({
      parent_theme: Joi.string(),

      applied_theme: Joi.string(),

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

      last_modified: Joi.string(),

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

      created_at: Joi.string(),

      updated_at: Joi.string(),

      version: Joi.string(),

      parent_theme_version: Joi.string(),

      parent_theme: Joi.string(),

      information: this.Information(),

      tags: Joi.array().items(Joi.string()),

      src: this.Src(),

      assets: this.AssetsSchema(),

      available_pages: this.AvailablePages(),

      available_sections: Joi.array().items(this.availableSectionSchema()),

      sections: Joi.array().items(this.sectionSchema()),

      constants: Joi.object(),

      styles: Joi.object(),

      config: this.Config(),

      settings: Joi.object(),

      font: this.Font(),

      _id: Joi.string(),

      __v: Joi.number(),

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
      page_key: Joi.string(),

      page_sections: this.PageSections(),
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
      umd_js: this.UmdJs(),

      common_js: this.CommonJs(),

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

  static Config() {
    return Joi.object({
      preset: this.Preset(),

      global_schema: this.GlobalSchema(),

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
      bg_color: Joi.string(),

      primary_color: Joi.string(),

      secondary_color: Joi.string(),

      accent_color: Joi.string(),

      link_color: Joi.string(),

      button_secondary_color: Joi.string(),
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

      semi_bold: this.SemiBold(),

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

      exact_url: Joi.string(),

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

      country_code: Joi.string(),

      phone: Joi.string(),

      primary: Joi.boolean(),
    });
  }

  static EditMobileRequestSchema() {
    return Joi.object({
      country_code: Joi.string(),

      phone: Joi.string(),
    });
  }

  static EditProfileRequestSchema() {
    return Joi.object({
      first_name: Joi.string(),

      last_name: Joi.string(),

      mobile: Joi.string(),

      email: Joi.string(),

      gender: Joi.string(),

      dob: Joi.string(),

      profile_pic_url: Joi.string(),

      android_hash: Joi.string(),

      sender: Joi.string(),

      register_token: Joi.string(),
    });
  }

  static SendEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      register_token: Joi.string(),
    });
  }

  static VerifyOtpRequestSchema() {
    return Joi.object({
      request_id: Joi.string(),

      register_token: Joi.string(),

      otp: Joi.string(),
    });
  }

  static SendMobileOtpRequestSchema() {
    return Joi.object({
      mobile: Joi.string(),

      country_code: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      android_hash: Joi.string(),

      force: Joi.string(),
    });
  }

  static UpdatePasswordRequestSchema() {
    return Joi.object({
      old_password: Joi.string(),

      new_password: Joi.string(),
    });
  }

  static FormRegisterRequestSchema() {
    return Joi.object({
      first_name: Joi.string(),

      last_name: Joi.string(),

      gender: Joi.string(),

      email: Joi.string(),

      password: Joi.string(),

      phone: this.FormRegisterRequestSchemaPhone(),

      register_token: Joi.string(),
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

      captcha_code: Joi.string(),
    });
  }

  static PasswordLoginRequestSchema() {
    return Joi.object({
      captcha_code: Joi.string(),

      password: Joi.string(),

      username: Joi.string(),
    });
  }

  static SendOtpRequestSchema() {
    return Joi.object({
      country_code: Joi.string(),

      captcha_code: Joi.string(),

      mobile: Joi.string(),
    });
  }

  static OAuthRequestSchema() {
    return Joi.object({
      is_signed_in: Joi.boolean(),

      oauth2: this.OAuthRequestSchemaOauth2(),

      profile: this.OAuthRequestSchemaProfile(),
    });
  }

  static AuthSuccess() {
    return Joi.object({
      register_token: Joi.string(),

      user_exists: Joi.boolean(),

      user: this.AuthSuccessUser(),
    });
  }

  static SendOtpResponse() {
    return Joi.object({
      resend_timer: Joi.number(),

      resend_token: Joi.string(),

      success: Joi.boolean(),

      request_id: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      country_code: Joi.string(),
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

      user_exists: Joi.boolean(),
    });
  }

  static ResetPasswordSuccess() {
    return Joi.object({
      status: Joi.string(),
    });
  }

  static RegisterFormSuccess() {
    return Joi.object({
      resend_timer: Joi.number(),

      resend_token: Joi.string(),

      success: Joi.boolean(),

      request_id: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      country_code: Joi.string(),
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
      resend_timer: Joi.number(),

      resend_token: Joi.string(),

      success: Joi.boolean(),

      request_id: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      country_code: Joi.string(),
    });
  }

  static EmailOtpSuccess() {
    return Joi.object({
      resend_token: Joi.string(),
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

      verify_mobile_link: Joi.boolean(),
    });
  }

  static VerifyEmailOTPSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      verify_email_link: Joi.boolean(),
    });
  }

  static SendMobileVerifyLinkSuccess() {
    return Joi.object({
      verify_mobile_link: Joi.boolean(),
    });
  }

  static SendEmailVerifyLinkSuccess() {
    return Joi.object({
      verify_email_link: Joi.boolean(),
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

      verify_email_otp: Joi.boolean(),

      verify_email_link: Joi.boolean(),

      verify_mobile_otp: Joi.boolean(),

      user: Joi.string(),

      register_token: Joi.string(),

      user_exists: Joi.boolean(),
    });
  }

  static FormRegisterRequestSchemaPhone() {
    return Joi.object({
      country_code: Joi.string(),

      mobile: Joi.string(),
    });
  }

  static OAuthRequestSchemaOauth2() {
    return Joi.object({
      access_token: Joi.string(),

      expiry: Joi.number(),

      refresh_token: Joi.string(),
    });
  }

  static OAuthRequestSchemaProfile() {
    return Joi.object({
      last_name: Joi.string(),

      image: Joi.string(),

      id: Joi.string(),

      email: Joi.string(),

      full_name: Joi.string(),

      first_name: Joi.string(),
    });
  }

  static AuthSuccessUser() {
    return Joi.object({
      first_name: Joi.string(),

      last_name: Joi.string(),

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

      look_and_feel: this.LookAndFeel(),

      updated_at: Joi.string(),

      active: Joi.boolean(),

      forgot_password: Joi.boolean(),

      login: this.Login(),

      skip_captcha: Joi.boolean(),

      name: Joi.string(),

      meta: this.MetaSchema(),

      _id: Joi.string(),

      social: this.Social(),

      required_fields: this.RequiredFields(),

      register_required_fields: this.RegisterRequiredFields(),

      skip_login: Joi.boolean(),

      flash_card: this.FlashCard(),

      subtext: Joi.string(),

      social_tokens: this.SocialTokens(),

      created_at: Joi.string(),

      register: Joi.boolean(),

      mobile_image: Joi.string(),

      desktop_image: Joi.string(),
    });
  }

  static LookAndFeel() {
    return Joi.object({
      card_position: Joi.string(),

      background_color: Joi.string(),
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
      fynd_default: Joi.boolean(),
    });
  }

  static Social() {
    return Joi.object({
      account_kit: Joi.boolean(),

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
      is_required: Joi.boolean(),

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
      is_required: Joi.boolean(),

      level: Joi.string(),
    });
  }

  static RegisterRequiredFieldsMobile() {
    return Joi.object({
      is_required: Joi.boolean(),

      level: Joi.string(),
    });
  }

  static FlashCard() {
    return Joi.object({
      text: Joi.string(),

      text_color: Joi.string(),

      background_color: Joi.string(),
    });
  }

  static SocialTokens() {
    return Joi.object({
      facebook: this.Facebook(),

      account_kit: this.Accountkit(),

      google: this.Google(),
    });
  }

  static Facebook() {
    return Joi.object({
      app_id: Joi.string(),
    });
  }

  static Accountkit() {
    return Joi.object({
      app_id: Joi.string(),
    });
  }

  static Google() {
    return Joi.object({
      app_id: Joi.string(),
    });
  }

  static ApplicationLegal() {
    return Joi.object({
      application: Joi.string(),

      tnc: Joi.string(),

      policy: Joi.string(),

      shipping: Joi.string(),

      faq: Joi.array().items(this.ApplicationLegalFAQ()),

      _id: Joi.string(),

      updated_at: Joi.string(),

      created_at: Joi.string(),
    });
  }

  static ApplicationLegalFAQ() {
    return Joi.object({
      question: Joi.string(),

      answer: Joi.string(),
    });
  }

  static SeoComponent() {
    return Joi.object({
      seo: this.SeoSchema(),
    });
  }

  static SeoSchema() {
    return Joi.object({
      app: Joi.string(),

      _id: Joi.string(),

      robots_txt: Joi.string(),

      sitemap_enabled: Joi.boolean(),

      custom_meta_tags: Joi.array().items(Joi.object()),

      details: Joi.object(),

      created_at: Joi.string(),

      updated_at: Joi.string(),
    });
  }

  static CustomMetaTag() {
    return Joi.object({
      name: Joi.string(),

      content: Joi.string(),

      _id: Joi.string(),
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

      refresh_rate: Joi.number(),

      refresh_pages: Joi.array().items(Joi.string()),
    });
  }

  static AnnouncementPageSchema() {
    return Joi.object({
      page_slug: Joi.string(),

      type: Joi.string(),
    });
  }

  static EditorMeta() {
    return Joi.object({
      foreground_color: Joi.string(),

      background_color: Joi.string(),

      content_type: Joi.string(),

      content: Joi.string(),
    });
  }

  static AnnouncementAuthorSchema() {
    return Joi.object({
      created_by: Joi.string(),

      modified_by: Joi.string(),
    });
  }

  static AdminAnnouncementSchema() {
    return Joi.object({
      _id: Joi.string(),

      platforms: Joi.array().items(Joi.string()),

      title: Joi.string(),

      announcement: Joi.string(),

      pages: Joi.array().items(this.AnnouncementPageSchema()),

      editor_meta: this.EditorMeta(),

      author: this.AnnouncementAuthorSchema(),

      created_at: Joi.string(),

      app: Joi.string(),

      modified_at: Joi.string(),

      _schedule: this.ScheduleSchema(),
    });
  }

  static ScheduleSchema() {
    return Joi.object({
      cron: Joi.string(),

      start: Joi.string(),

      end: Joi.string(),

      duration: Joi.number(),

      next_schedule: Joi.array().items(Joi.object()),
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
      page_slug: Joi.array().items(Joi.object()),
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

      page: this.Page(),
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
      aspect_ratio: Joi.string(),

      id: Joi.string(),

      secure_url: Joi.string(),
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
      _id: Joi.string(),

      _custom_json: Joi.object(),

      application: Joi.string(),

      archived: Joi.boolean(),

      author: Joi.object(),

      content: Joi.array().items(this.ResourceContent()),

      feature_image: Joi.object(),

      published: Joi.boolean(),

      reading_time: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      seo: this.SEO(),

      _schedule: this.CronSchedule(),

      title: Joi.string(),

      date_meta: this.DateMeta(),
    });
  }

  static SEO() {
    return Joi.object({
      description: Joi.string(),

      image: this.SEOImage(),

      title: Joi.string(),
    });
  }

  static SEOImage() {
    return Joi.object({
      url: Joi.string(),
    });
  }

  static DateMeta() {
    return Joi.object({
      created_on: Joi.string(),

      modified_on: Joi.string(),
    });
  }

  static BlogRequest() {
    return Joi.object({
      application: Joi.string(),

      _custom_json: Joi.object(),

      author: Joi.object(),

      content: Joi.array().items(this.ResourceContent()),

      feature_image: Joi.object(),

      published: Joi.boolean(),

      reading_time: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      title: Joi.string(),

      seo: this.SEO(),

      _schedule: this.CronSchedule(),
    });
  }

  static GetAnnouncementListSchema() {
    return Joi.object({
      items: Joi.array().items(this.AdminAnnouncementSchema()),

      page: this.Page(),
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

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      _id: Joi.string(),

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

      en_us: this.Language(),
    });
  }

  static Language() {
    return Joi.object({
      display: Joi.string(),
    });
  }

  static Action() {
    return Joi.object({
      page: this.ActionPage(),

      popup: this.ActionPage(),

      type: Joi.string(),
    });
  }

  static ActionPage() {
    return Joi.object({
      params: Joi.object(),

      query: Joi.object(),

      url: Joi.string(),

      type: Joi.string(),
    });
  }

  static NavigationReference() {
    return Joi.object({
      acl: Joi.array().items(Joi.string()),

      tags: Joi.array().items(Joi.string()),

      _locale_language: this.LocaleLanguage(),

      image: Joi.string(),

      type: Joi.string(),

      action: this.Action(),

      active: Joi.boolean(),

      display: Joi.string(),

      sort_order: Joi.number(),

      sub_navigation: this.NavigationReference(),
    });
  }

  static LandingPage() {
    return Joi.object({
      data: this.LandingPageSchema(),

      success: Joi.boolean(),
    });
  }

  static ConfigurationSchema() {
    return Joi.object({
      sleep_time: Joi.number(),

      start_on_launch: Joi.boolean(),

      duration: Joi.number(),

      slide_direction: Joi.string(),
    });
  }

  static SlideshowMedia() {
    return Joi.object({
      type: Joi.string(),

      url: Joi.string(),

      bg_color: Joi.string(),

      duration: Joi.number(),

      auto_decide_duration: Joi.boolean(),

      action: this.Action(),
    });
  }

  static Slideshow() {
    return Joi.object({
      data: this.SlideshowSchema(),

      success: Joi.boolean(),
    });
  }

  static AnnouncementsResponseSchema() {
    return Joi.object({
      announcements: Joi.object(),

      refresh_rate: Joi.number(),

      refresh_pages: Joi.array().items(Joi.string()),
    });
  }

  static AnnouncementDataSchema() {
    return Joi.object({
      page_slug: Joi.string(),

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

      url: Joi.string(),

      type: Joi.string(),

      sub_type: Joi.string(),

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

      sub_type: Joi.string(),

      _id: Joi.string(),

      type: Joi.string(),

      url: Joi.string(),

      position: Joi.string(),

      attributes: Joi.object(),

      content: Joi.string(),
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

      request_id: Joi.string(),

      stack_trace: Joi.string(),

      meta: Joi.object(),
    });
  }

  static CategorySchema() {
    return Joi.object({
      index: Joi.number(),

      _id: Joi.string(),

      slug: Joi.string(),

      title: Joi.string(),

      application: Joi.string(),
    });
  }

  static ChildrenSchema() {
    return Joi.object({
      question: Joi.string(),

      answer: Joi.string(),

      slug: Joi.string(),

      application: Joi.string(),

      _id: Joi.string(),
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

      title: Joi.string(),

      description: Joi.string(),

      children: this.ChildrenSchema(),

      _id: Joi.string(),

      slug: Joi.string(),

      application: Joi.string(),

      icon_url: Joi.string(),

      _custom_json: Joi.object(),
    });
  }

  static FaqSchema() {
    return Joi.object({
      slug: Joi.string(),

      application: Joi.string(),

      _id: Joi.string(),

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

  static GetFaqCategoryBySlugSchema() {
    return Joi.object({
      category: this.FAQCategorySchema(),
    });
  }

  static LandingPageGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Page(),
    });
  }

  static LandingPageSchema() {
    return Joi.object({
      slug: Joi.string(),

      action: this.Action(),

      platform: Joi.array().items(Joi.string()),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      _id: Joi.string(),

      application: Joi.string(),

      archived: Joi.boolean(),

      _custom_json: Joi.object(),
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

      page: this.Page(),
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
      _id: Joi.string(),

      application: Joi.string(),

      archived: Joi.boolean(),

      name: Joi.string(),

      slug: Joi.string(),

      platform: Joi.array().items(Joi.string()),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      orientation: this.Orientation(),

      version: Joi.number(),

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
      _id: Joi.string(),

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

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      _schedule: this.ScheduleSchema(),
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
      _id: Joi.string(),

      title: Joi.string(),

      slug: Joi.string(),

      reading_time: Joi.string(),

      application: Joi.string(),

      description: Joi.string(),

      feature_image: this.FeatureImage(),

      published: Joi.boolean(),

      archived: Joi.boolean(),

      tags: Joi.array().items(Joi.string()),

      content: this.ContentSchema(),

      author: this.Author(),

      _schedule: this.ScheduleSchema(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      _custom_json: Joi.object(),
    });
  }

  static FeatureImage() {
    return Joi.object({
      secure_url: Joi.string(),
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

      page: this.Page(),
    });
  }

  static PageSpec() {
    return Joi.object({
      specifications: Joi.array().items(Joi.object()),
    });
  }

  static PageSpecParam() {
    return Joi.object({
      key: Joi.string(),

      required: Joi.boolean(),
    });
  }

  static PageSpecItem() {
    return Joi.object({
      page_type: Joi.string(),

      display_name: Joi.string(),

      params: Joi.array().items(this.PageSpecParam()),

      query: Joi.array().items(this.PageSpecParam()),
    });
  }

  static PageSchema() {
    return Joi.object({
      _id: Joi.string(),

      application: Joi.string(),

      component_ids: Joi.array().items(Joi.string()),

      content: Joi.array().items(this.PageContent()),

      created_by: Joi.object(),

      date_meta: Joi.object(),

      description: Joi.string(),

      feature_image: Joi.object(),

      page_meta: Joi.array().items(this.PageMeta()),

      _schedule: this.ScheduleSchema(),

      _custom_json: Joi.object(),

      orientation: Joi.string(),

      platform: Joi.string(),

      published: Joi.boolean(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      title: Joi.string(),

      type: Joi.string(),

      seo: this.SEO(),

      visibility: Joi.object(),
    });
  }

  static CreatedBySchema() {
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
      _schedule: this.CronSchedule(),

      application: Joi.string(),

      author: Joi.object(),

      _custom_json: Joi.object(),

      orientation: Joi.string(),

      content: Joi.array().items(this.ResourceContent()),

      feature_image: Joi.object(),

      published: Joi.boolean(),

      reading_time: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      seo: this.SEO(),

      title: Joi.string(),
    });
  }

  static CronSchedule() {
    return Joi.object({
      cron: Joi.string(),

      start: Joi.string(),

      end: Joi.string(),

      duration: Joi.number(),
    });
  }

  static PagePublishRequest() {
    return Joi.object({
      publish: Joi.boolean(),
    });
  }

  static PageMetaSchema() {
    return Joi.object({
      system_pages: Joi.array().items(Joi.object()),

      custom_pages: Joi.array().items(Joi.object()),

      application_id: Joi.string(),
    });
  }

  static SlideshowGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Page(),
    });
  }

  static SlideshowSchema() {
    return Joi.object({
      _id: Joi.string(),

      slug: Joi.string(),

      date_meta: this.DateMeta(),

      application: Joi.string(),

      platform: Joi.string(),

      configuration: this.ConfigurationSchema(),

      media: Joi.array().items(this.SlideshowMedia()),

      active: Joi.boolean(),

      archived: Joi.boolean(),

      _custom_json: Joi.object(),
    });
  }

  static SlideshowRequest() {
    return Joi.object({
      slug: Joi.string(),

      platform: Joi.string(),

      configuration: this.ConfigurationSchema(),

      media: this.SlideshowMedia(),

      active: Joi.boolean(),
    });
  }

  static Support() {
    return Joi.object({
      created: Joi.boolean(),

      _id: Joi.string(),

      config_type: Joi.string(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      contact: this.ContactSchema(),
    });
  }

  static PhoneProperties() {
    return Joi.object({
      key: Joi.string(),

      code: Joi.string(),

      number: Joi.string(),
    });
  }

  static PhoneSchema() {
    return Joi.object({
      active: Joi.boolean(),

      phone: Joi.array().items(this.PhoneProperties()),
    });
  }

  static EmailProperties() {
    return Joi.object({
      key: Joi.string(),

      value: Joi.string(),
    });
  }

  static EmailSchema() {
    return Joi.object({
      active: Joi.boolean(),

      email: Joi.array().items(this.EmailProperties()),
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

      _id: Joi.string(),

      tags: Joi.array().items(this.TagSchema()),
    });
  }

  static TagSchema() {
    return Joi.object({
      name: Joi.string(),

      url: Joi.string(),

      type: Joi.string(),

      sub_type: Joi.string(),

      _id: Joi.string(),

      position: Joi.string(),

      attributes: Joi.object(),

      content: Joi.string(),
    });
  }

  static CommunicationConsentReq() {
    return Joi.object({
      response: Joi.string(),

      action: Joi.string(),

      channel: Joi.string(),
    });
  }

  static CommunicationConsentRes() {
    return Joi.object({
      app_id: Joi.string(),

      user_id: Joi.string(),

      channels: this.CommunicationConsentChannels(),
    });
  }

  static CommunicationConsentChannelsEmail() {
    return Joi.object({
      response: Joi.string(),

      display_name: Joi.string(),
    });
  }

  static CommunicationConsentChannelsSms() {
    return Joi.object({
      response: Joi.string(),

      display_name: Joi.string(),
    });
  }

  static CommunicationConsentChannelsWhatsapp() {
    return Joi.object({
      response: Joi.string(),

      display_name: Joi.string(),

      country_code: Joi.string(),

      phone_number: Joi.string(),
    });
  }

  static CommunicationConsentChannels() {
    return Joi.object({
      email: this.CommunicationConsentChannelsEmail(),

      sms: this.CommunicationConsentChannelsSms(),

      whatsapp: this.CommunicationConsentChannelsWhatsapp(),
    });
  }

  static CommunicationConsent() {
    return Joi.object({
      app_id: Joi.string(),

      user_id: Joi.string(),

      channels: this.CommunicationConsentChannels(),
    });
  }

  static PushtokenReq() {
    return Joi.object({
      action: Joi.string(),

      bundle_identifier: Joi.string(),

      push_token: Joi.string(),

      unique_device_id: Joi.string(),

      type: Joi.string(),
    });
  }

  static PushtokenRes() {
    return Joi.object({
      _id: Joi.string(),

      bundle_identifier: Joi.string(),

      push_token: Joi.string(),

      unique_device_id: Joi.string(),

      type: Joi.string(),

      platform: Joi.string(),

      application_id: Joi.string(),

      user_id: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      expired_at: Joi.string(),
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

      force_web: Joi.boolean(),
    });
  }

  static CampaignShortLink() {
    return Joi.object({
      source: Joi.string(),

      medium: Joi.string(),
    });
  }

  static Attribution() {
    return Joi.object({
      campaign_cookie_expiry: Joi.string(),
    });
  }

  static SocialMediaTags() {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),

      image: Joi.string(),
    });
  }

  static ShortLinkReq() {
    return Joi.object({
      title: Joi.string().required(),

      url: Joi.string().required(),

      hash: Joi.string(),

      active: Joi.boolean(),

      expire_at: Joi.string(),

      enable_tracking: Joi.boolean(),

      personalized: Joi.boolean(),

      campaign: this.CampaignShortLink(),

      redirects: this.Redirects(),

      attribution: this.Attribution(),

      social_media_tags: this.SocialMediaTags(),

      count: Joi.number(),
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

      created_by: Joi.string(),

      app_redirect: Joi.boolean(),

      fallback: Joi.string(),

      active: Joi.boolean(),

      _id: Joi.string(),

      enable_tracking: Joi.boolean(),

      expire_at: Joi.string(),

      application: Joi.string(),

      user_id: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      personalized: Joi.boolean(),

      campaign: this.CampaignShortLink(),

      redirects: this.Redirects(),

      attribution: this.Attribution(),

      social_media_tags: this.SocialMediaTags(),

      count: Joi.number(),
    });
  }

  static ShortLinkList() {
    return Joi.object({
      items: Joi.array().items(this.ShortLinkRes()),

      page: this.Page(),
    });
  }

  static ErrorRes() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static FailedResponse() {
    return Joi.object({
      message: Joi.string().required(),
    });
  }

  static CDN() {
    return Joi.object({
      url: Joi.string().required(),
    });
  }

  static Upload() {
    return Joi.object({
      expiry: Joi.number().required(),

      url: Joi.string().required(),
    });
  }

  static StartResponse() {
    return Joi.object({
      file_name: Joi.string().required(),

      file_path: Joi.string().required(),

      content_type: Joi.string().required(),

      method: Joi.string().required(),

      namespace: Joi.string().required(),

      operation: Joi.string().required(),

      size: Joi.number().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),
    });
  }

  static StartRequest() {
    return Joi.object({
      file_name: Joi.string().required(),

      content_type: Joi.string().required(),

      size: Joi.number().required(),

      tags: Joi.array().items(Joi.string()),
    });
  }

  static CompleteResponse() {
    return Joi.object({
      _id: Joi.string().required(),

      file_name: Joi.string().required(),

      file_path: Joi.string().required(),

      content_type: Joi.string().required(),

      method: Joi.string().required(),

      namespace: Joi.string().required(),

      operation: Joi.string().required(),

      size: Joi.number().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      success: Joi.string().required(),

      tags: Joi.array().items(Joi.string()),

      created_on: Joi.string().required(),

      modified_on: Joi.string().required(),
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
      id: Joi.string().required(),

      name: Joi.string().required(),

      data: this.BulkRequest().required(),

      opts: this.Opts().required(),

      progress: Joi.number().required(),

      delay: Joi.number().required(),

      timestamp: Joi.number().required(),

      attempts_made: Joi.number().required(),

      stacktrace: Joi.array().items(Joi.string()),

      finished_on: Joi.number().required(),

      processed_on: Joi.number().required(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      tracking_url: Joi.string().required(),

      task: this.CopyFileTask().required(),
    });
  }

  static ReqConfiguration() {
    return Joi.object({
      concurrency: Joi.number(),
    });
  }

  static Destination() {
    return Joi.object({
      namespace: Joi.string().required(),

      rewrite: Joi.string().required(),

      basepath: Joi.string(),
    });
  }

  static BulkRequest() {
    return Joi.object({
      urls: Joi.array().items(Joi.string()).required(),

      destination: this.Destination().required(),

      configuration: this.ReqConfiguration(),
    });
  }

  static Urls() {
    return Joi.object({
      url: Joi.string().required(),

      signed_url: Joi.string().required(),

      expiry: Joi.number().required(),
    });
  }

  static SignUrlResponse() {
    return Joi.object({
      urls: Joi.array().items(this.Urls()).required(),
    });
  }

  static SignUrlRequest() {
    return Joi.object({
      expiry: Joi.number().required(),

      urls: Joi.array().items(Joi.string()).required(),
    });
  }

  static DbRecord() {
    return Joi.object({
      success: Joi.boolean().required(),

      tags: Joi.array().items(Joi.string()).required(),

      _id: Joi.string().required(),

      file_name: Joi.string().required(),

      operation: Joi.string(),

      namespace: Joi.string().required(),

      content_type: Joi.string().required(),

      file_path: Joi.string().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      created_on: Joi.string().required(),

      modified_on: Joi.string().required(),
    });
  }

  static BrowseResponse() {
    return Joi.object({
      items: Joi.array().items(this.DbRecord()).required(),

      page: this.Page().required(),
    });
  }

  static ApplicationAboutResponse() {
    return Joi.object({
      application_info: this.ApplicationInfo(),

      company_info: this.CompanyInfo(),

      owner_info: this.OwnerInfo(),
    });
  }

  static ApplicationInfo() {
    return Joi.object({
      _id: Joi.string(),

      domain: this.Domain(),

      website: this.ApplicationWebsite(),

      cors: this.ApplicationCors(),

      description: Joi.string(),

      name: Joi.string(),

      meta: this.ApplicationMeta(),

      token: Joi.string(),

      secret: Joi.string(),

      created_at: Joi.string(),

      banner: this.SecureUrl(),

      logo: this.SecureUrl(),

      is_active: Joi.boolean(),
    });
  }

  static CompanyInfo() {
    return Joi.object({
      _id: Joi.string(),

      uid: Joi.number(),

      created_on: Joi.string(),

      is_active: Joi.boolean(),

      name: Joi.string(),

      addresses: Joi.array().items(this.CompanyAboutAddress()),

      notification_emails: Joi.array().items(Joi.string()),
    });
  }

  static OwnerInfo() {
    return Joi.object({
      _id: Joi.string(),

      emails: Joi.array().items(this.UserEmail()),

      phone_numbers: Joi.array().items(this.UserPhoneNumber()),

      first_name: Joi.string(),

      last_name: Joi.string(),

      profile_pic: Joi.string(),
    });
  }

  static AppVersionRequest() {
    return Joi.object({
      application: this.ApplicationVersionRequest().required(),

      device: this.Device().required(),

      locale: Joi.string(),

      timezone: Joi.string(),
    });
  }

  static ApplicationVersionRequest() {
    return Joi.object({
      id: Joi.string(),

      name: Joi.string().required(),

      namespace: Joi.string(),

      token: Joi.string(),

      version: Joi.string().required(),
    });
  }

  static Device() {
    return Joi.object({
      build: Joi.number(),

      model: Joi.string(),

      os: this.OS().required(),
    });
  }

  static OS() {
    return Joi.object({
      name: Joi.string().required(),

      version: Joi.string(),
    });
  }

  static SupportedLanguage() {
    return Joi.object({
      name: Joi.string(),

      code: Joi.string(),
    });
  }

  static LanguageResponse() {
    return Joi.object({
      items: Joi.array().items(this.SupportedLanguage()),
    });
  }

  static AppStaffResponse() {
    return Joi.object({
      staff_users: Joi.array().items(this.AppStaff()),
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
      ordering_store: this.OrderingStoreSelect().required(),
    });
  }

  static OrderingStoreSelect() {
    return Joi.object({
      uid: Joi.number().required(),
    });
  }

  static AppStaff() {
    return Joi.object({
      _id: Joi.string(),

      order_incent: Joi.boolean(),

      stores: Joi.array().items(Joi.number()),

      application: Joi.string(),

      title: Joi.string(),

      user: Joi.string(),

      employee_code: Joi.string(),

      first_name: Joi.string(),

      last_name: Joi.string(),

      profile_pic_url: Joi.string(),
    });
  }

  static ProductDetailFeature() {
    return Joi.object({
      similar: Joi.array().items(Joi.string()),

      seller_selection: Joi.boolean(),

      update_product_meta: Joi.boolean(),

      request_product: Joi.boolean(),
    });
  }

  static LaunchPage() {
    return Joi.object({
      page_type: Joi.string(),

      params: Joi.object(),

      query: Joi.object(),
    });
  }

  static LandingPageFeature() {
    return Joi.object({
      launch_page: this.LaunchPage(),

      continue_as_guest: Joi.boolean(),

      login_btn_text: Joi.string(),

      show_domain_textbox: Joi.boolean(),

      show_register_btn: Joi.boolean(),
    });
  }

  static RegistrationPageFeature() {
    return Joi.object({
      ask_store_address: Joi.boolean(),
    });
  }

  static AppFeature() {
    return Joi.object({
      product_detail: this.ProductDetailFeature(),

      landing_page: this.LandingPageFeature(),

      registration_page: this.RegistrationPageFeature(),

      home_page: this.HomePageFeature(),

      common: this.CommonFeature(),

      cart: this.CartFeature(),

      qr: this.QrFeature(),

      pcr: this.PcrFeature(),

      order: this.OrderFeature(),

      _id: Joi.string(),

      app: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static HomePageFeature() {
    return Joi.object({
      order_processing: Joi.boolean(),
    });
  }

  static CommonFeature() {
    return Joi.object({
      communication_optin_dialog: this.CommunicationOptinDialogFeature(),

      deployment_store_selection: this.DeploymentStoreSelectionFeature(),

      listing_price: this.ListingPriceFeature(),

      listing_page: this.ListingPageFeature(),

      currency: this.CurrencyFeature(),

      revenue_engine: this.RevenueEngineFeature(),

      feedback: this.FeedbackFeature(),

      compare_products: this.CompareProductsFeature(),
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
      sort_on: Joi.string(),
    });
  }

  static CurrencyFeature() {
    return Joi.object({
      value: Joi.array().items(Joi.string()),

      type: Joi.string(),

      default_currency: Joi.string(),
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
      gst_input: Joi.boolean(),

      staff_selection: Joi.boolean(),

      placing_for_customer: Joi.boolean(),

      google_map: Joi.boolean(),
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
      staff_selection: Joi.boolean(),
    });
  }

  static OrderFeature() {
    return Joi.object({
      buy_again: Joi.boolean(),
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
      _id: Joi.string(),

      is_active: Joi.boolean(),

      name: Joi.string(),

      code: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      decimal_digits: Joi.number(),

      symbol: Joi.string(),
    });
  }

  static Domain() {
    return Joi.object({
      verified: Joi.boolean(),

      is_primary: Joi.boolean(),

      is_default: Joi.boolean(),

      is_shortlink: Joi.boolean(),

      _id: Joi.string(),

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

      redirect_to: Joi.string(),

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
      secure_url: Joi.string(),
    });
  }

  static Application() {
    return Joi.object({
      website: this.ApplicationWebsite(),

      cors: this.ApplicationCors(),

      auth: this.ApplicationAuth(),

      description: Joi.string(),

      channel_type: Joi.string(),

      cache_ttl: Joi.number(),

      is_internal: Joi.boolean(),

      is_active: Joi.boolean(),

      _id: Joi.string(),

      name: Joi.string(),

      owner: Joi.string(),

      company_id: Joi.number(),

      token: Joi.string(),

      redirections: Joi.array().items(this.ApplicationRedirections()),

      meta: Joi.array().items(this.ApplicationMeta()),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),

      banner: this.SecureUrl(),

      logo: this.SecureUrl(),

      favicon: this.SecureUrl(),

      domains: Joi.array().items(this.Domain()),

      app_type: Joi.string(),

      mobile_logo: this.SecureUrl(),

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
      mode_of_payment: Joi.string(),

      source: Joi.string(),
    });
  }

  static StorePriorityRule() {
    return Joi.object({
      enabled: Joi.boolean(),

      storetype_order: Joi.array().items(Joi.string()),
    });
  }

  static ArticleAssignmentRule() {
    return Joi.object({
      store_priority: this.StorePriorityRule(),
    });
  }

  static InventoryArticleAssignment() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),

      enforced_stores: Joi.array().items(Joi.number()),

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

      address_type: Joi.string(),
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

      country_code: Joi.number(),

      phone: Joi.string(),
    });
  }

  static ApplicationInformation() {
    return Joi.object({
      address: this.InformationAddress(),

      support: this.InformationSupport(),

      social_links: this.SocialLinks(),

      links: this.Links(),

      copyright_text: Joi.string(),

      _id: Joi.string(),

      business_highlights: this.BusinessHighlights(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static InformationAddress() {
    return Joi.object({
      loc: Joi.string(),

      address_line: Joi.array().items(Joi.string()),

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

      google_plus: this.GooglePlus(),

      youtube: this.Youtube(),

      linked_in: this.LinkedIn(),

      vimeo: this.Vimeo(),

      blog_link: this.BlogLink(),
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
      _id: Joi.string(),

      title: Joi.string(),

      icon: Joi.string(),

      sub_title: Joi.string(),
    });
  }

  static ApplicationDetail() {
    return Joi.object({
      name: Joi.string().required(),

      description: Joi.string().required(),

      logo: this.SecureUrl().required(),

      mobile_logo: this.SecureUrl().required(),

      favicon: this.SecureUrl().required(),

      banner: this.SecureUrl().required(),

      domain: this.Domain(),

      domains: Joi.array().items(this.Domain()),

      _id: Joi.string(),
    });
  }

  static CurrenciesResponse() {
    return Joi.object({
      items: Joi.array().items(this.Currency()),
    });
  }

  static StoreLatLong() {
    return Joi.object({
      type: Joi.string(),

      coordinates: Joi.array().items(Joi.number()),
    });
  }

  static OptedStoreAddress() {
    return Joi.object({
      state: Joi.string(),

      address1: Joi.string(),

      lat_long: this.StoreLatLong(),

      address2: Joi.string(),

      pincode: Joi.number(),

      country: Joi.string(),

      city: Joi.string(),
    });
  }

  static OrderingStore() {
    return Joi.object({
      address: this.OptedStoreAddress(),

      _id: Joi.string(),

      uid: Joi.number(),

      name: Joi.string(),

      display_name: Joi.string(),

      store_type: Joi.string(),

      store_code: Joi.string(),

      pincode: Joi.number(),

      code: Joi.string(),
    });
  }

  static OrderingStores() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.OrderingStore()),

      deployed_stores: Joi.array().items(Joi.number()),

      all_stores: Joi.boolean(),

      enabled: Joi.boolean(),

      type: Joi.string(),

      _id: Joi.string(),

      app: Joi.string(),

      __v: Joi.number(),
    });
  }

  static TokenResponse() {
    return Joi.object({
      tokens: this.Tokens(),

      _id: Joi.string(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
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

      fynd_rewards: this.FyndRewards(),

      auth: this.Auth(),

      google_map: this.GoogleMap(),
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

      project_id: Joi.string(),

      gcm_sender_id: Joi.string(),

      application_id: Joi.string(),

      api_key: Joi.string(),
    });
  }

  static Ios() {
    return Joi.object({
      application_id: Joi.string(),

      api_key: Joi.string(),
    });
  }

  static Android() {
    return Joi.object({
      application_id: Joi.string(),

      api_key: Joi.string(),
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
      app_id: Joi.string(),
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
      write_key: Joi.string(),
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
      api_key: Joi.string(),
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
      app_id: Joi.string(),

      app_key: Joi.string(),

      web_token: Joi.string(),
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
      api_key: Joi.string(),
    });
  }

  static FyndRewards() {
    return Joi.object({
      credentials: this.FyndRewardsCredentials(),
    });
  }

  static FyndRewardsCredentials() {
    return Joi.object({
      public_key: Joi.string(),
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
      api_key: Joi.string(),
    });
  }

  static AggregatorConfigDetail() {
    return Joi.object({
      api: Joi.string(),

      config_type: Joi.string().required(),

      sdk: Joi.boolean(),

      merchant_id: Joi.string(),

      secret: Joi.string().required(),

      merchant_key: Joi.string(),

      user_id: Joi.string(),

      verify_api: Joi.string(),

      pin: Joi.string(),

      key: Joi.string().required(),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      juspay: this.AggregatorConfigDetail(),

      rupifi: this.AggregatorConfigDetail(),

      stripe: this.AggregatorConfigDetail(),

      mswipe: this.AggregatorConfigDetail(),

      env: Joi.string().required(),

      success: Joi.boolean().required(),

      ccavenue: this.AggregatorConfigDetail(),

      simpl: this.AggregatorConfigDetail(),

      payumoney: this.AggregatorConfigDetail(),

      razorpay: this.AggregatorConfigDetail(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      code: Joi.string().required(),

      description: Joi.string().required(),
    });
  }

  static HttpErrorCodeAndResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      error: this.ErrorCodeAndDescription().required(),
    });
  }

  static AttachCardRequest() {
    return Joi.object({
      card_id: Joi.string().required(),

      refresh: Joi.boolean(),
    });
  }

  static AttachCardsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.object().required(),

      message: Joi.string(),
    });
  }

  static CardPaymentGateway() {
    return Joi.object({
      customer_id: Joi.string(),

      aggregator: Joi.string().required(),

      api: Joi.string(),
    });
  }

  static ActiveCardPaymentGatewayResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      cards: this.CardPaymentGateway().required(),

      message: Joi.string().required(),
    });
  }

  static Card() {
    return Joi.object({
      card_token: Joi.string(),

      aggregator_name: Joi.string().required(),

      card_isin: Joi.string(),

      nickname: Joi.string(),

      card_name: Joi.string(),

      card_brand_image: Joi.string(),

      card_issuer: Joi.string(),

      card_number: Joi.string(),

      exp_year: Joi.number(),

      card_brand: Joi.string(),

      card_type: Joi.string(),

      exp_month: Joi.number(),

      card_id: Joi.string(),

      expired: Joi.boolean(),

      card_fingerprint: Joi.string(),

      card_reference: Joi.string(),
    });
  }

  static ListCardsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.array().items(this.Card()),

      message: Joi.string().required(),
    });
  }

  static DeletehCardRequest() {
    return Joi.object({
      card_id: Joi.string().required(),
    });
  }

  static DeleteCardsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string(),
    });
  }

  static ValidateCustomerRequest() {
    return Joi.object({
      merchant_params: Joi.object().required(),

      aggregator: Joi.string().required(),

      payload: Joi.string().required(),

      phone_number: Joi.string().required(),

      transaction_amount_in_paise: Joi.number().required(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.object().required(),

      message: Joi.string().required(),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      aggregator: Joi.string().required(),

      transaction_token: Joi.string(),

      order_id: Joi.string().required(),

      verified: Joi.boolean(),

      amount: Joi.number().required(),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      aggregator: Joi.string().required(),

      status: Joi.string().required(),

      order_id: Joi.string().required(),

      cart_id: Joi.string(),

      delivery_address_id: Joi.string(),

      success: Joi.boolean().required(),

      message: Joi.string().required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      aggregator: Joi.string().required(),

      customer_id: Joi.string().required(),

      merchant_order_id: Joi.string().required(),

      method: Joi.string().required(),

      virtual_id: Joi.string(),

      aggregator_order_id: Joi.string().required(),

      timeout: Joi.number().required(),

      razorpay_payment_id: Joi.string().required(),

      polling_url: Joi.string().required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      aggregator: Joi.string().required(),

      status: Joi.string(),

      currency: Joi.string(),

      customer_id: Joi.string(),

      merchant_order_id: Joi.string().required(),

      bqr_image: Joi.string(),

      vpa: Joi.string(),

      virtual_id: Joi.string(),

      aggregator_order_id: Joi.string(),

      success: Joi.boolean().required(),

      timeout: Joi.number(),

      razorpay_payment_id: Joi.string(),

      method: Joi.string().required(),

      polling_url: Joi.string().required(),

      amount: Joi.number(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      contact: Joi.string().required(),

      aggregator: Joi.string().required(),

      email: Joi.string().required(),

      status: Joi.string().required(),

      order_id: Joi.string().required(),

      currency: Joi.string().required(),

      customer_id: Joi.string().required(),

      merchant_order_id: Joi.string().required(),

      vpa: Joi.string().required(),

      method: Joi.string().required(),

      amount: Joi.number().required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      retry: Joi.boolean().required(),

      aggregator_name: Joi.string().required(),

      status: Joi.string().required(),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      payment_flow: Joi.string(),

      api_link: Joi.string(),

      data: Joi.object(),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      juspay: this.AggregatorRoute(),

      upi_razorpay: this.AggregatorRoute(),

      bqr_razorpay: this.AggregatorRoute(),

      rupifi: this.AggregatorRoute(),

      stripe: this.AggregatorRoute(),

      payubiz: this.AggregatorRoute(),

      ccavenue: this.AggregatorRoute(),

      simpl: this.AggregatorRoute(),

      fynd: this.AggregatorRoute(),

      msipe: this.AggregatorRoute(),

      razorpay: this.AggregatorRoute(),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string().required(),

      small: Joi.string().required(),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      logo_url: this.PaymentModeLogo(),

      intent_flow: Joi.string(),

      card_name: Joi.string(),

      merchant_code: Joi.string(),

      intent_app_error_list: Joi.array().items(Joi.string()),

      timeout: Joi.number(),

      card_type: Joi.string(),

      code: Joi.string(),

      aggregator_name: Joi.string().required(),

      retry_count: Joi.number(),

      nickname: Joi.string(),

      card_brand_image: Joi.string(),

      fynd_vpa: Joi.string(),

      card_id: Joi.string(),

      card_fingerprint: Joi.string(),

      card_issuer: Joi.string(),

      card_number: Joi.string(),

      display_name: Joi.string(),

      card_brand: Joi.string(),

      display_priority: Joi.number(),

      expired: Joi.boolean(),

      card_token: Joi.string(),

      name: Joi.string(),

      card_isin: Joi.string(),

      exp_year: Joi.number(),

      exp_month: Joi.number(),

      card_reference: Joi.string(),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      aggregator_name: Joi.string(),

      anonymous_enable: Joi.boolean(),

      name: Joi.string().required(),

      add_card_enabled: Joi.boolean(),

      list: Joi.array().items(this.PaymentModeList()),

      display_name: Joi.string().required(),

      display_priority: Joi.number().required(),
    });
  }

  static PaymentOptionAndFlow() {
    return Joi.object({
      payment_flows: this.PaymentFlow().required(),

      payment_option: Joi.array().items(this.RootPaymentMode()).required(),
    });
  }

  static PaymentModeRouteResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      payment_options: this.PaymentOptionAndFlow().required(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      created_on: Joi.string().required(),

      delights_user_name: Joi.string().required(),

      comment: Joi.boolean(),

      transfer_mode: Joi.string().required(),

      mobile: Joi.boolean(),

      account_no: Joi.string().required(),

      bank_name: Joi.string().required(),

      email: Joi.string().required(),

      account_holder: Joi.string().required(),

      title: Joi.string().required(),

      beneficiary_id: Joi.string().required(),

      ifsc_code: Joi.string().required(),

      display_name: Joi.string().required(),

      id: Joi.number().required(),

      branch_name: Joi.boolean(),

      address: Joi.string().required(),

      modified_on: Joi.string().required(),

      subtitle: Joi.string().required(),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array()
        .items(this.OrderBeneficiaryDetails())
        .required(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      code: Joi.string().required(),

      description: Joi.string().required(),

      success: Joi.boolean().required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      branch_name: Joi.string().required(),

      bank_name: Joi.string().required(),

      success: Joi.boolean(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      code: Joi.string().required(),

      description: Joi.string().required(),

      success: Joi.boolean().required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationRequest() {
    return Joi.object({
      hash_key: Joi.string().required(),

      request_id: Joi.string().required(),

      otp: Joi.string().required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationResponse() {
    return Joi.object({
      hash_key: Joi.string().required(),

      request_id: Joi.string().required(),

      otp: Joi.string().required(),
    });
  }

  static WrongOtpError() {
    return Joi.object({
      description: Joi.string().required(),

      success: Joi.string().required(),
    });
  }

  static BankDetails() {
    return Joi.object({
      branch_name: Joi.string().required(),

      email: Joi.string().required(),

      comment: Joi.string(),

      account_holder: Joi.string().required(),

      address: Joi.string().required(),

      account_no: Joi.string().required(),

      mobile: Joi.string().required(),

      ifsc_code: Joi.string().required(),

      bank_name: Joi.string().required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      details: this.BankDetails().required(),

      transfer_mode: Joi.string().required(),

      order_id: Joi.string().required(),

      shipment_id: Joi.string().required(),

      delights: Joi.boolean().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.object(),

      message: Joi.string().required(),
    });
  }

  static WalletOtpRequest() {
    return Joi.object({
      mobile: Joi.boolean().required(),

      country_code: Joi.string().required(),
    });
  }

  static WalletOtpResponse() {
    return Joi.object({
      request_id: Joi.string().required(),

      success: Joi.boolean(),

      is_verified_flag: Joi.string().required(),
    });
  }

  static SetDefaultBeneficiaryRequest() {
    return Joi.object({
      order_id: Joi.string().required(),

      beneficiary_id: Joi.string().required(),
    });
  }

  static SetDefaultBeneficiaryResponse() {
    return Joi.object({
      is_beneficiary_set: Joi.boolean().required(),

      success: Joi.boolean(),
    });
  }

  static OrderById() {
    return Joi.object({
      order: this.OrderSchema().required(),
    });
  }

  static OrderList() {
    return Joi.object({
      orders: Joi.array().items(this.OrderSchema()).required(),

      page: this.OrderPage().required(),
    });
  }

  static OrderPage() {
    return Joi.object({
      item_total: Joi.number(),

      type: Joi.string(),

      size: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static ShipmentById() {
    return Joi.object({
      shipment: this.Shipments().required(),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(this.Reasons()).required(),
    });
  }

  static ShipmentStatusUpdateBody() {
    return Joi.object({
      shipments: this.Shipments().required(),

      force_transition: Joi.boolean().required(),

      task: Joi.boolean().required(),
    });
  }

  static Shipments() {
    return Joi.object({
      shipment_id: Joi.string(),

      order_id: Joi.string(),

      breakup_values: Joi.array().items(this.BreakupValues()),

      enable_can_return: Joi.boolean(),

      payment_mode_source: Joi.string(),

      shipment_images: Joi.array().items(Joi.string()),

      track_url: Joi.string(),

      traking_no: Joi.string(),

      tracking_details: Joi.array().items(this.TrackingDetails()),

      beneficiary_details: Joi.boolean(),

      can_return: Joi.boolean(),

      enable_tracking: Joi.boolean(),

      prices: this.Prices(),

      need_help_url: Joi.string(),

      total_bags: Joi.number(),

      items: Joi.array().items(this.ProductItems()),

      delivery_address: this.DeliveryAddress(),

      payment_status: Joi.string(),

      invoice: this.Invoice(),

      comment: Joi.string(),

      order_type: Joi.string(),

      promise: this.Promise(),

      fulfilling_store: this.FulfillingStore(),

      total_items: Joi.number(),

      bags: Joi.array().items(this.Bags()),

      can_cancel: Joi.boolean(),

      payment_logo: Joi.string(),

      shipment_created_at: Joi.string(),

      shipment_status: this.ShipmentStatus(),

      user_info: this.ShipmentUserInfo(),

      meta: this.ShipmentMeta(),
    });
  }

  static ShipmentId() {
    return Joi.object({
      status_update: this.StatusUpdate(),

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
      shipments: this.Shipments().required(),
    });
  }

  static ShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(this.Track()).required(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      order_id: Joi.string(),

      breakup_values: Joi.array().items(this.BreakupValues()),

      order_created_time: Joi.string(),

      shipments: Joi.array().items(this.Shipments()),

      total_shipments_in_order: Joi.number(),

      user_info: this.UserInfo(),
    });
  }

  static PosOrderById() {
    return Joi.object({
      order: this.OrderSchema().required(),
    });
  }

  static Bags() {
    return Joi.object({
      item: this.Item(),

      prices: this.Prices(),

      promotion_effective_discount: Joi.number(),

      current_status: this.CurrentStatus(),

      bag_status: Joi.array().items(this.BagStatus()),

      dates: this.Dates(),

      id: Joi.number(),

      status: this.BagState(),

      type: Joi.string(),

      financial_breakup: Joi.array().items(this.FinancialBreakup()),

      reasons: Joi.array().items(this.BagReasons()),

      article: this.Article(),

      journey_type: Joi.string(),

      current_operational_status: this.CurrentOperationalStatus(),

      display_name: Joi.string(),

      entity_type: Joi.string(),

      brand: this.Brand(),

      affiliate_bag_details: this.AffiliateBagDetails(),

      gst_details: this.GstDetails(),

      bag_id: Joi.number(),

      bag_update_time: Joi.number(),
    });
  }

  static Item() {
    return Joi.object({
      brand_id: Joi.number(),

      can_cancel: Joi.boolean(),

      brand: Joi.string(),

      l1_category: Joi.array().items(Joi.string()),

      name: Joi.string(),

      l2_category: Joi.array().items(Joi.string()),

      size: Joi.string(),

      can_return: Joi.boolean(),

      l3_category: Joi.number(),

      last_updated_at: Joi.string(),

      slug_key: Joi.string(),

      attributes: this.BagItemAttributes(),

      id: Joi.number(),

      code: Joi.string(),

      l3_category_name: Joi.string(),

      image: Joi.array().items(Joi.string()),
    });
  }

  static BagItemAttributes() {
    return Joi.object({
      item_code: Joi.string(),

      brand_name: Joi.string(),

      country_of_origin: Joi.string(),
    });
  }

  static Prices() {
    return Joi.object({
      amount_paid_roundoff: Joi.number(),

      fynd_credits: Joi.number(),

      cod_charges: Joi.number(),

      cashback: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      price_marked: Joi.number(),

      transfer_price: Joi.number(),

      coupon_value: Joi.number(),

      price_effective: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid: Joi.number(),

      refund_amount: Joi.number(),

      cashback_applied: Joi.number(),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      discount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      delivery_charge: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      store_id: Joi.number(),

      bag_id: Joi.number(),

      created_at: Joi.string(),

      state_type: Joi.string(),

      id: Joi.number(),

      state_id: Joi.number(),

      updated_at: Joi.string(),

      kafka_sync: Joi.boolean(),

      status: Joi.string(),

      bag_state_mapper: this.BagStateMapper(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      name: Joi.string(),

      app_state_name: Joi.string(),

      display_name: Joi.string(),

      app_display_name: Joi.string(),

      is_active: Joi.boolean(),

      app_facing: Joi.boolean(),

      notify_customer: Joi.boolean(),

      journey_type: Joi.string(),

      id: Joi.number(),

      state_type: Joi.string(),
    });
  }

  static BagStatus() {
    return Joi.object({
      bag_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      status: Joi.string(),

      store_id: Joi.number(),

      state_type: Joi.string(),

      id: Joi.number(),

      updated_at: Joi.string(),

      bag_state_mapper: this.BagStatusBagStateMapper(),

      state_id: Joi.number(),

      created_at: Joi.string(),
    });
  }

  static BagStatusBagStateMapper() {
    return Joi.object({
      app_state_name: Joi.string(),

      is_active: Joi.boolean(),

      id: Joi.number(),

      app_display_name: Joi.string(),

      app_facing: Joi.boolean(),

      notify_customer: Joi.boolean(),

      state_type: Joi.string(),

      journey_type: Joi.string(),

      name: Joi.string(),

      display_name: Joi.string(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string(),
    });
  }

  static BagState() {
    return Joi.object({
      is_returnable: Joi.boolean(),

      can_be_cancelled: Joi.boolean(),

      enable_tracking: Joi.boolean(),

      is_customer_return_allowed: Joi.boolean(),

      is_active: Joi.boolean(),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      gst_fee: Joi.string(),

      refund_credit: Joi.number(),

      cashback: Joi.number(),

      refund_amount: Joi.number(),

      value_of_good: Joi.number(),

      promotion_effective_discount: Joi.number(),

      size: Joi.string(),

      total_units: Joi.number(),

      discount: Joi.number(),

      amount_paid: Joi.number(),

      fynd_credits: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      delivery_charge: Joi.number(),

      hsn_code: Joi.string(),

      coupon_effective_discount: Joi.number(),

      transfer_price: Joi.number(),

      identifiers: this.Identifiers(),

      gst_tag: Joi.string(),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      item_name: Joi.string(),

      cashback_applied: Joi.number(),

      gst_tax_percentage: Joi.number(),
    });
  }

  static Identifiers() {
    return Joi.object({
      ean: Joi.string(),

      sku_code: Joi.string(),
    });
  }

  static BagReasons() {
    return Joi.object({
      id: Joi.number(),

      state: Joi.string(),

      bag_id: Joi.number(),

      slug: Joi.string(),

      display_name: Joi.string(),
    });
  }

  static Article() {
    return Joi.object({
      esp_modified: Joi.boolean(),

      size: Joi.string(),

      _id: Joi.string(),

      identifiers: this.ArticleIdentifiers(),

      is_set: Joi.boolean(),

      seller_identifier: Joi.string(),

      return_config: this.ReturnConfig(),

      uid: Joi.string(),

      code: Joi.string(),
    });
  }

  static ArticleIdentifiers() {
    return Joi.object({
      ean: Joi.string(),

      sku_code: Joi.string(),
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

      state_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      reasons: Joi.array().items(this.CurrentOperationalStatusReasons()),

      store_id: Joi.number(),

      state_type: Joi.string(),

      updated_at: Joi.string(),

      bag_id: Joi.number(),

      status: Joi.string(),

      created_at: Joi.string(),

      bag_state_mapper: this.CurrentOperationalStatusBagStateMapper(),
    });
  }

  static CurrentOperationalStatusReasons() {
    return Joi.object({
      id: Joi.number(),

      state: Joi.string(),

      slug: Joi.string(),

      display_name: Joi.string(),
    });
  }

  static CurrentOperationalStatusBagStateMapper() {
    return Joi.object({
      state_type: Joi.string(),

      app_state_name: Joi.string(),

      display_name: Joi.string(),

      id: Joi.number(),

      is_active: Joi.boolean(),

      journey_type: Joi.string(),

      name: Joi.string(),

      app_display_name: Joi.string(),

      app_facing: Joi.boolean(),

      notify_customer: Joi.boolean(),
    });
  }

  static Brand() {
    return Joi.object({
      modified_on: Joi.string(),

      created_on: Joi.string(),

      brand_name: Joi.string(),

      is_virtual_invoice: Joi.boolean(),

      id: Joi.number(),

      credit_note_allowed: Joi.boolean(),

      logo: Joi.string(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string(),

      affiliate_order_id: Joi.string(),

      affiliate_meta: this.AffiliateMeta(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      size_level_total_qty: Joi.number(),

      fynd: this.Fynd(),

      is_priority: Joi.boolean(),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),
    });
  }

  static Fynd() {
    return Joi.object({
      fulfilment_identifier: Joi.string(),
    });
  }

  static GstDetails() {
    return Joi.object({
      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.string(),

      gst_tag: Joi.string(),

      hsn_code: Joi.string(),
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

      contact_person: Joi.string(),

      phone: Joi.string(),

      state: Joi.string(),

      version: Joi.string(),

      address1: Joi.string(),

      created_at: Joi.string(),

      address_type: Joi.string(),

      address_category: Joi.string(),

      area: Joi.string(),

      city: Joi.string(),

      latitude: Joi.number(),

      longitude: Joi.number(),

      email: Joi.string(),

      country: Joi.string(),

      address2: Joi.string(),

      updated_at: Joi.string(),

      name: Joi.string(),

      address: Joi.string(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      address1: Joi.string(),

      store_email: Joi.string(),

      code: Joi.string(),

      store_address_json: this.StoreAddressJson(),

      country: Joi.string(),

      state: Joi.string(),

      pincode: Joi.string(),

      contact_person: Joi.string(),

      brand_store_tags: Joi.array().items(Joi.any()),

      location_type: Joi.string(),

      address2: Joi.string(),

      is_archived: Joi.boolean(),

      id: Joi.number(),

      created_at: Joi.string(),

      is_enabled_for_recon: Joi.boolean(),

      city: Joi.string(),

      meta: this.FulfillingStoreMeta(),

      fulfillment_channel: Joi.string(),

      is_active: Joi.boolean(),

      updated_at: Joi.string(),

      login_username: Joi.string(),

      phone: Joi.string(),

      packaging_material_count: Joi.number(),

      name: Joi.string(),

      company_id: Joi.number(),
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

      address_type: Joi.string(),

      address_category: Joi.string(),

      state: Joi.string(),

      pincode: Joi.string(),

      version: Joi.string(),

      address1: Joi.string(),

      updated_at: Joi.string(),

      country: Joi.string(),

      created_at: Joi.string(),

      contact_person: Joi.string(),
    });
  }

  static FulfillingStoreMeta() {
    return Joi.object({
      additional_contact_details: this.AdditionalContactDetails(),

      timing: Joi.array().items(this.Timing()),

      documents: this.Documents(),

      display_name: Joi.string(),

      stage: Joi.string(),

      gst_number: Joi.string(),

      allow_dp_assignment_from_fynd: Joi.boolean(),
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

      legal_name: Joi.string(),

      type: Joi.string(),
    });
  }

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string(),

      invoice_url: Joi.string(),

      label_url: Joi.string(),
    });
  }

  static ProductItems() {
    return Joi.object({
      code: Joi.string(),

      last_updated_at: Joi.string(),

      brand: Joi.string(),

      image: Joi.array().items(Joi.string()),

      l3_category: Joi.number(),

      brand_id: Joi.number(),

      name: Joi.string(),

      can_cancel: Joi.boolean(),

      size: Joi.string(),

      slug_key: Joi.string(),

      l3_category_name: Joi.string(),

      l2_category: Joi.array().items(Joi.string()),

      id: Joi.number(),

      can_return: Joi.boolean(),

      l1_category: Joi.array().items(Joi.string()),

      attributes: this.ProductItemAttributes(),
    });
  }

  static ProductItemAttributes() {
    return Joi.object({
      item_code: Joi.string(),

      brand_name: Joi.string(),

      country_of_origin: Joi.string(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      timestamp: this.Timestamp(),

      bag_weight: Joi.object(),

      dp_options: this.DpOptions(),

      order_type: Joi.string(),

      same_store_available: Joi.boolean(),

      assign_dp_from_sb: Joi.boolean(),

      dp_id: Joi.string(),

      weight: Joi.number(),

      formatted: this.Formatted(),

      debug_info: this.DebugInfo(),

      dp_sort_key: Joi.string(),

      packaging_name: Joi.string(),
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
      dp_option_id: this.DpOptionId(),
    });
  }

  static DpOptionId() {
    return Joi.object({
      f_priority: Joi.number(),

      operations: Joi.string(),

      r_priority: Joi.number(),

      payment_mode: Joi.string(),

      fm_priority: Joi.number(),

      lm_priority: Joi.number(),

      rvp_priority: Joi.number(),

      assign_dp_from_sb: Joi.boolean(),
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
      stormbreaker_uuid: Joi.string(),
    });
  }

  static Promise() {
    return Joi.object({
      timestamp: this.Timestamp(),
    });
  }

  static Reasons() {
    return Joi.object({
      reason_text: Joi.string(),

      show_text_area: Joi.boolean(),

      feedback_type: Joi.string(),

      flow: Joi.string(),

      reason_id: Joi.number(),

      priority: Joi.number(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string(),

      hex_code: Joi.string(),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      gender: Joi.string(),

      mobile: Joi.string(),

      first_name: Joi.string(),

      last_name: Joi.string(),
    });
  }

  static Track() {
    return Joi.object({
      awb: Joi.string(),

      updated_at: Joi.string(),

      last_location_recieved_at: Joi.string(),

      reason: Joi.string(),

      shipment_type: Joi.string(),

      status: Joi.string(),

      updated_time: Joi.string(),

      account_name: Joi.string(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),

      status: Joi.string(),

      time: Joi.string(),

      is_passed: Joi.string(),
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

  static ActionPageParams() {
    return Joi.object({
      slug: Joi.array().items(Joi.string()),
    });
  }

  static CatalogueOrderRequest() {
    return Joi.object({
      articles: Joi.array().items(this.RewardsArticle()),
    });
  }

  static CatalogueOrderResponse() {
    return Joi.object({
      articles: Joi.array().items(this.RewardsArticle()),
    });
  }

  static DiscountProperties() {
    return Joi.object({
      absolute: Joi.number(),

      currency: Joi.string(),

      display_absolute: Joi.string(),

      display_percent: Joi.string(),

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
      _schedule: Joi.string(),

      active: Joi.boolean(),

      application_id: Joi.string(),

      banner_image: this.Asset(),

      created_at: Joi.string(),

      name: Joi.string(),

      rule: Joi.object(),

      share: this.ShareMessages(),

      sub_text: Joi.string(),

      text: Joi.string(),

      type: Joi.string(),

      updated_at: Joi.string(),

      updated_by: Joi.string(),

      url: Joi.string(),
    });
  }

  static OrderDiscountRequest() {
    return Joi.object({
      currency: Joi.string(),

      order_amount: Joi.number().required(),
    });
  }

  static OrderDiscountResponse() {
    return Joi.object({
      applied_rule_bucket: this.OrderDiscountRuleBucket(),

      base_discount: this.DiscountProperties(),

      discount: this.DiscountProperties(),

      order_amount: Joi.number(),

      points: Joi.number(),
    });
  }

  static OrderDiscountRuleBucket() {
    return Joi.object({
      high: Joi.number(),

      low: Joi.number(),

      max: Joi.number(),

      value: Joi.number(),

      value_type: Joi.string(),
    });
  }

  static PointsHistory() {
    return Joi.object({
      _id: Joi.string(),

      application_id: Joi.string(),

      claimed: Joi.boolean(),

      created_at: Joi.string(),

      expires_on: Joi.string(),

      meta: Joi.string(),

      points: Joi.number(),

      remaining_points: Joi.number(),

      text_1: Joi.string(),

      text_2: Joi.string(),

      text_3: Joi.string(),

      txn_name: Joi.string(),

      updated_at: Joi.string(),

      user_id: Joi.string(),
    });
  }

  static PointsHistoryResponse() {
    return Joi.object({
      history: Joi.array().items(this.PointsHistory()),

      page: this.Page(),
    });
  }

  static PointsResponse() {
    return Joi.object({
      points: Joi.number(),
    });
  }

  static RedeemReferralCodeRequest() {
    return Joi.object({
      device_id: Joi.string().required(),

      referral_code: Joi.string().required(),
    });
  }

  static RedeemReferralCodeResponse() {
    return Joi.object({
      message: Joi.string(),

      points: Joi.number(),

      redeemed: Joi.boolean(),

      referrer_id: Joi.string(),

      referrer_info: Joi.string(),
    });
  }

  static ReferralDetailsResponse() {
    return Joi.object({
      referral: this.Offer(),

      referrer_info: Joi.string(),

      share: this.ShareMessages(),

      user: this.ReferralDetailsUser(),
    });
  }

  static ReferralDetailsUser() {
    return Joi.object({
      blocked: Joi.boolean(),

      points: Joi.number(),

      redeemed: Joi.boolean(),

      referral_code: Joi.string(),
    });
  }

  static RewardsArticle() {
    return Joi.object({
      id: Joi.string(),

      points: Joi.number(),

      price: Joi.number(),
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

  static AbuseReport() {
    return Joi.object({
      abused: Joi.boolean(),

      date_meta: this.DateMeta(),

      description: Joi.string(),

      entity: this.Entity(),

      id: Joi.string(),

      name: Joi.string(),

      state: this.FeedbackState(),

      tags: Joi.array().items(this.TagMeta()),
    });
  }

  static Access() {
    return Joi.object({
      answer: Joi.boolean(),

      ask_question: Joi.boolean(),

      comment: Joi.boolean(),

      rnr: Joi.boolean(),
    });
  }

  static AddMediaListRequest() {
    return Joi.object({
      entity_id: Joi.string(),

      entity_type: Joi.string(),

      media_list: Joi.array().items(this.AddMediaRequest()),

      ref_id: Joi.string(),

      ref_type: Joi.string(),
    });
  }

  static AddMediaRequest() {
    return Joi.object({
      cloud_id: Joi.string(),

      cloud_name: Joi.string(),

      cloud_provider: Joi.string(),

      entity_id: Joi.string(),

      entity_type: Joi.string(),

      media_url: Joi.string(),

      ref_id: Joi.string(),

      ref_type: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      thumbnail_url: Joi.string(),

      type: Joi.string(),
    });
  }

  static Attribute() {
    return Joi.object({
      date_meta: this.DateMeta(),

      description: Joi.string(),

      id: Joi.string(),

      name: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(this.TagMeta()),
    });
  }

  static AttributeObject() {
    return Joi.object({
      description: Joi.string(),

      name: Joi.string().required(),

      slug: Joi.string(),

      title: Joi.string(),

      type: Joi.string().required(),

      value: Joi.number().required(),
    });
  }

  static AttributeResponse() {
    return Joi.object({
      items: Joi.array().items(this.Attribute()),

      page: this.Page(),
    });
  }

  static CheckEligibilityResponse() {
    return Joi.object({
      access: this.Access(),

      media_cloud: this.MediaCloud(),
    });
  }

  static Cloud() {
    return Joi.object({
      id: Joi.string(),

      name: Joi.string(),

      provider: Joi.string(),
    });
  }

  static Comment() {
    return Joi.object({
      comment: Joi.array().items(Joi.string()),

      date_meta: this.DateMeta(),

      entity: this.Entity(),

      id: Joi.string(),

      name: Joi.string(),

      state: this.FeedbackState(),

      tags: Joi.array().items(this.TagMeta()),

      vote_count: this.VoteCount(),
    });
  }

  static CommentGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.Comment()),

      page: this.Page(),
    });
  }

  static CommentRequest() {
    return Joi.object({
      comment: Joi.array().items(Joi.string()).required(),

      entity_id: Joi.string().required(),

      entity_type: Joi.string().required(),
    });
  }

  static CreateQNARequest() {
    return Joi.object({
      choices: Joi.array().items(Joi.string()),

      entity_id: Joi.string().required(),

      entity_type: Joi.string().required(),

      max_len: Joi.number(),

      sort_priority: Joi.number(),

      tags: Joi.array().items(Joi.string()),

      text: Joi.string().required(),

      type: Joi.string(),
    });
  }

  static CursorGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Page(),
    });
  }

  static DeviceMeta() {
    return Joi.object({
      app_version: Joi.string(),

      platform: Joi.string(),
    });
  }

  static Entity() {
    return Joi.object({
      id: Joi.string(),

      type: Joi.string(),
    });
  }

  static FeedbackError() {
    return Joi.object({
      code: Joi.string(),

      exception: Joi.string(),

      info: Joi.string(),

      message: Joi.string(),

      meta: Joi.object(),

      request_id: Joi.string(),

      stack_trace: Joi.string(),

      status: Joi.number(),
    });
  }

  static FeedbackMedia() {
    return Joi.object({
      cloud: this.Cloud(),

      date_meta: this.DateMeta(),

      description: Joi.string(),

      entity: this.Entity(),

      id: Joi.string(),

      name: Joi.string(),

      reference: this.Entity(),

      state: this.MediaState(),

      tags: Joi.array().items(this.TagMeta()),

      type: Joi.string(),

      url: this.Url(),
    });
  }

  static FeedbackState() {
    return Joi.object({
      active: Joi.boolean(),

      approve: Joi.boolean(),
    });
  }

  static InsertResponse() {
    return Joi.object({
      ids: Joi.string(),
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

  static MediaGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.Comment()),

      page: this.Page(),
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

  static MediaState() {
    return Joi.object({
      approve: Joi.boolean(),

      archive: Joi.boolean(),
    });
  }

  static NumberGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.PageNumber(),
    });
  }

  static PageNumber() {
    return Joi.object({
      current: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),

      type: Joi.string(),
    });
  }

  static QNA() {
    return Joi.object({
      comments: Joi.array().items(this.Comment()),

      date_meta: this.DateMeta(),

      entity: this.Entity(),

      id: Joi.string(),

      name: Joi.string(),

      question: this.Question(),

      state: this.QNAState(),

      tag: Joi.array().items(Joi.string()),

      tags: Joi.array().items(this.TagMeta()),
    });
  }

  static QNAGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.QNA()),

      page: this.Page(),
    });
  }

  static QNAState() {
    return Joi.object({
      active: Joi.boolean(),

      approve: Joi.boolean(),

      modify: Joi.boolean(),

      priority: Joi.number(),

      reply: Joi.boolean(),

      vote: Joi.boolean(),
    });
  }

  static Question() {
    return Joi.object({
      choices: Joi.array().items(Joi.string()),

      max_len: Joi.number(),

      text: Joi.string(),

      type: Joi.string(),
    });
  }

  static Rating() {
    return Joi.object({
      attributes: Joi.array().items(this.Attribute()),

      attributes_slugs: Joi.array().items(Joi.string()),

      ui: this.UI(),
    });
  }

  static RatingGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.Rating()),

      page: this.Page(),
    });
  }

  static ReportAbuseGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.AbuseReport()),

      page: this.Page(),
    });
  }

  static ReportAbuseRequest() {
    return Joi.object({
      description: Joi.string(),

      entity_id: Joi.string().required(),

      entity_type: Joi.string().required(),
    });
  }

  static Review() {
    return Joi.object({
      description: Joi.string(),

      header: Joi.string(),

      image_meta: this.MediaMeta(),

      title: Joi.string(),

      video_meta: this.MediaMeta(),

      vote_allowed: Joi.boolean(),
    });
  }

  static ReviewGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.Review()),

      page: this.Page(),
    });
  }

  static SaveAttributeRequest() {
    return Joi.object({
      description: Joi.string(),

      name: Joi.string().required(),

      slug: Joi.string().required(),
    });
  }

  static TagMeta() {
    return Joi.object({
      media: Joi.array().items(this.MediaMeta()),

      name: Joi.string(),

      type: Joi.string(),
    });
  }

  static UI() {
    return Joi.object({
      feedback_question: Joi.array().items(Joi.string()),

      icon: this.UIIcon(),

      text: Joi.array().items(Joi.string()),

      type: Joi.string(),
    });
  }

  static UIIcon() {
    return Joi.object({
      active: Joi.string(),

      inactive: Joi.string(),

      selected: Joi.array().items(Joi.string()),
    });
  }

  static UpdateAbuseStatusRequest() {
    return Joi.object({
      abusive: Joi.boolean(),

      active: Joi.boolean(),

      approve: Joi.boolean(),

      description: Joi.string(),

      entity_id: Joi.string(),

      entity_type: Joi.string(),

      id: Joi.string(),
    });
  }

  static UpdateAttributeRequest() {
    return Joi.object({
      description: Joi.string(),

      name: Joi.string().required(),

      slug: Joi.string(),
    });
  }

  static UpdateCommentRequest() {
    return Joi.object({
      active: Joi.boolean(),

      approve: Joi.boolean(),

      comment: Joi.array().items(Joi.string()).required(),

      id: Joi.string().required(),
    });
  }

  static UpdateMediaListRequest() {
    return Joi.object({
      approve: Joi.boolean(),

      archive: Joi.boolean(),

      entity_type: Joi.string(),

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

  static UpdateResponse() {
    return Joi.object({
      id: Joi.string(),
    });
  }

  static UpdateReviewRequest() {
    return Joi.object({
      active: Joi.boolean(),

      application: Joi.string(),

      approve: Joi.boolean(),

      archive: Joi.boolean(),

      attributes_rating: Joi.array().items(this.AttributeObject()),

      description: Joi.string(),

      device_meta: this.DeviceMeta(),

      entity_id: Joi.string(),

      entity_type: Joi.string(),

      media_resource: Joi.array().items(this.MediaMeta()),

      rating: Joi.number(),

      review_id: Joi.string(),

      template_id: Joi.string(),

      title: Joi.string(),
    });
  }

  static UpdateVoteRequest() {
    return Joi.object({
      action: Joi.string(),

      active: Joi.boolean(),

      id: Joi.string(),

      ref_id: Joi.string(),

      ref_type: Joi.string(),
    });
  }

  static Url() {
    return Joi.object({
      main: Joi.string(),

      thumbnail: Joi.string(),
    });
  }

  static Vote() {
    return Joi.object({
      action: Joi.string(),

      date_meta: this.DateMeta(),

      entity: this.Entity(),

      id: Joi.string(),

      name: Joi.string(),

      reference: this.Entity(),

      state: this.FeedbackState(),

      tags: Joi.array().items(this.TagMeta()),
    });
  }

  static VoteCount() {
    return Joi.object({
      downvote: Joi.number(),

      upvote: Joi.number(),
    });
  }

  static VoteRequest() {
    return Joi.object({
      action: Joi.string(),

      entity_id: Joi.string(),

      entity_type: Joi.string(),

      ref_id: Joi.string(),

      ref_type: Joi.string(),
    });
  }

  static VoteResponse() {
    return Joi.object({
      items: Joi.array().items(this.Vote()),

      page: this.Page(),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      article_uid: Joi.string().required(),

      quantity: Joi.number(),

      shipment_type: Joi.string().required(),
    });
  }

  static UpdateCartShipmentRequest() {
    return Joi.object({
      shipments: Joi.array().items(this.UpdateCartShipmentItem()).required(),
    });
  }

  static Files() {
    return Joi.object({
      key: Joi.string().required(),

      values: Joi.array().items(Joi.string()).required(),
    });
  }

  static CartPosCheckoutRequest() {
    return Joi.object({
      extra_meta: Joi.object(),

      merchant_code: Joi.string(),

      billing_address: Joi.object(),

      meta: Joi.object(),

      files: Joi.array().items(this.Files()),

      pick_at_store_uid: Joi.number(),

      payment_mode: Joi.string().required(),

      order_type: Joi.string().required(),

      payment_identifier: Joi.string(),

      ordering_store: Joi.number(),

      staff: Joi.object(),

      fyndstore_emp_id: Joi.string(),

      delivery_address: Joi.object(),

      billing_address_id: Joi.number(),

      pos: Joi.boolean(),

      payment_auto_confirm: Joi.boolean(),

      callback_url: Joi.string(),

      address_id: Joi.number(),

      aggregator: Joi.string(),

      payment_params: Joi.object(),
    });
  }

  static CartDeliveryModesResponse() {
    return Joi.object({
      available_modes: Joi.array().items(Joi.string()),

      pickup_stores: Joi.array().items(Joi.number()),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      area: Joi.string(),

      city: Joi.string(),

      area_code_slug: Joi.string(),

      state: Joi.string(),

      uid: Joi.number(),

      pincode: Joi.number(),

      landmark: Joi.string(),

      area_code: Joi.string(),

      store_code: Joi.string(),

      country: Joi.string(),

      address: Joi.string(),

      email: Joi.string(),

      name: Joi.string(),

      phone: Joi.string(),

      address_type: Joi.string(),
    });
  }

  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(this.PickupStoreDetail()),
    });
  }

  static GetPincodeCityResponse() {
    return Joi.object({
      request_uuid: Joi.string().required(),

      stormbreaker_uuid: Joi.string().required(),

      success: Joi.boolean().required(),

      data: Joi.array().items(this.LogisticPincodeData()).required(),
    });
  }

  static LogisticPincodeData() {
    return Joi.object({
      meta: this.LogisticMeta(),

      parents: Joi.array().items(this.LogisticParents()),

      sub_type: Joi.string(),

      name: Joi.string(),

      error: this.LogisticError(),

      uid: Joi.string(),

      display_name: Joi.string(),
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
      sub_type: Joi.string(),

      name: Joi.string(),

      display_name: Joi.string(),

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
      location_details: this.LocationDetails().required(),

      to_pincode: Joi.string().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      from_pincode: Joi.string(),

      articles: this.TatProductArticles(),

      fulfillment_id: Joi.number(),
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
      location_details: this.LocationDetails().required(),

      request_uuid: Joi.string().required(),

      error: Joi.object().required(),

      to_city: Joi.string().required(),

      source: Joi.string().required(),

      to_pincode: Joi.string().required(),

      action: Joi.string().required(),

      stormbreaker_uuid: Joi.string().required(),

      success: Joi.boolean().required(),

      identifier: Joi.string().required(),

      journey: Joi.string().required(),
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
      pageId: Joi.string(),
      pageSize: Joi.number(),
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
      tags: Joi.string(),
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
      tags: Joi.string(),
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

  static getBlogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  static getFaqs() {
    return Joi.object({});
  }

  static getFaqCategories() {
    return Joi.object({});
  }

  static getFaqBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getFaqCategoryBySlug() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getFaqsByCategorySlug() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getLandingPage() {
    return Joi.object({});
  }

  static getLegalInformation() {
    return Joi.object({});
  }

  static getNavigations() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  static getPage() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static getPages() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  static getSEOConfiguration() {
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

class CommunicationValidator {
  static getCommunicationConsent() {
    return Joi.object({});
  }

  static upsertCommunicationConsent() {
    return Joi.object({
      body: Validator.CommunicationConsentReq().required(),
    }).required();
  }

  static upsertAppPushtoken() {
    return Joi.object({
      body: Validator.PushtokenReq().required(),
    }).required();
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
      pageNo: Joi.number(),
      pageSize: Joi.number(),
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
      tags: Joi.string(),
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
      tags: Joi.string(),
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
  CommunicationValidator,
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
