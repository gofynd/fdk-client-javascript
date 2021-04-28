const Joi = require("joi");
class Validator {
  static Media() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      details: Joi.array().items(this.ProductDetailAttribute()),

      title: Joi.string().allow(""),
    });
  }

  static ProductListingActionPage() {
    return Joi.object({
      query: Joi.object(),

      params: Joi.object(),

      type: Joi.string().allow(""),
    });
  }

  static ProductListingAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      page: this.ProductListingActionPage(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      action: this.ProductListingAction(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: this.Media(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      medias: Joi.array().items(this.Media()),

      image_nature: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      rating_count: Joi.number(),

      color: Joi.string().allow(""),

      rating: Joi.number(),

      categories: Joi.array().items(this.ProductBrand()),

      has_variant: Joi.boolean(),

      type: Joi.string().allow(""),

      brand: this.ProductBrand(),

      teaser_tag: Joi.string().allow(""),

      attributes: Joi.object(),

      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      item_code: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_6: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_2: Joi.string().allow(""),
    });
  }

  static ColumnHeader() {
    return Joi.object({
      value: Joi.string().allow(""),

      convertable: Joi.boolean(),
    });
  }

  static ColumnHeaders() {
    return Joi.object({
      col_6: this.ColumnHeader(),

      col_1: this.ColumnHeader(),

      col_4: this.ColumnHeader(),

      col_5: this.ColumnHeader(),

      col_3: this.ColumnHeader(),

      col_2: this.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      unit: Joi.string().allow(""),

      image: Joi.string().allow(""),

      sizes: Joi.array().items(this.SizeChartValues()),

      size_tip: Joi.string().allow(""),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      headers: this.ColumnHeaders(),
    });
  }

  static ProductSize() {
    return Joi.object({
      is_available: Joi.boolean(),

      value: Joi.string().allow(""),

      quantity: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static Price() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
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
      size_chart: this.SizeChart(),

      sizes: Joi.array().items(this.ProductSize()),

      stores: this.ProductSizeStores(),

      discount: Joi.string().allow(""),

      price: this.ProductListingPrice(),

      sellable: Joi.boolean(),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static ProductSetDistributionSize() {
    return Joi.object({
      size: Joi.string().allow(""),

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

      size_distribution: this.ProductSetDistribution(),
    });
  }

  static Seller() {
    return Joi.object({
      count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponse() {
    return Joi.object({
      seller_count: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.object()),

      price_per_price: this.ProductStockPrice(),

      long_lat: Joi.array().items(Joi.number()),

      set: this.ProductSet(),

      item_type: Joi.string().allow(""),

      seller: this.Seller(),

      article_id: Joi.string().allow(""),

      pincode: Joi.number(),

      price: this.ProductStockPrice(),

      discount: Joi.string().allow(""),

      store: this.Store(),

      quantity: Joi.number(),

      special_badge: Joi.string().allow(""),

      article_assignment: this.ArticleAssignment(),
    });
  }

  static ProductSizeSellerFilter() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductSizeSellersResponse() {
    return Joi.object({
      sort_on: Joi.array().items(this.ProductSizeSellerFilter()),

      items: Joi.array().items(this.ProductSizePriceResponse()),

      page: this.Page().required(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      display: Joi.string().allow(""),

      description: Joi.string().allow(""),

      key: Joi.string().allow(""),
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
      attributes_metadata: Joi.array().items(this.AttributeDetail()),

      subtitle: Joi.string().allow(""),

      items: Joi.array().items(this.ProductDetail()),

      title: Joi.string().allow(""),
    });
  }

  static ProductFrequentlyComparedSimilarResponse() {
    return Joi.object({
      similars: Joi.array().items(this.ProductCompareResponse()),
    });
  }

  static ProductSimilarItem() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      items: Joi.array().items(this.ProductDetail()),

      title: Joi.string().allow(""),
    });
  }

  static SimilarProductByTypeResponse() {
    return Joi.object({
      similars: Joi.array().items(this.ProductSimilarItem()),
    });
  }

  static ProductVariantItemResponse() {
    return Joi.object({
      uid: Joi.number(),

      medias: Joi.array().items(this.Media()),

      color_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      action: this.ProductListingAction(),

      is_available: Joi.boolean(),

      color: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),

      items: Joi.array().items(this.ProductVariantItemResponse()),

      header: Joi.string().allow(""),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(this.ProductVariantResponse()),
    });
  }

  static StoreDetail() {
    return Joi.object({
      code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CompanyDetail() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      uid: Joi.string().allow(""),

      seller: this.Seller(),

      price: this.ProductStockPrice(),

      size: Joi.string().allow(""),

      store: this.StoreDetail(),

      quantity: Joi.number(),

      identifier: Joi.object(),

      company: this.CompanyDetail(),

      item_id: Joi.number(),
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

      page: this.Page().required(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      min: Joi.number(),

      is_selected: Joi.boolean().required(),

      selected_max: Joi.number(),

      query_format: Joi.string().allow(""),

      max: Joi.number(),

      selected_min: Joi.number(),

      value: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      values: Joi.array().items(this.ProductFiltersValue()).required(),

      key: this.ProductFiltersKey().required(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      medias: Joi.array().items(this.Media()),

      discount: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      price: this.ProductListingPrice(),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      rating_count: Joi.number(),

      color: Joi.string().allow(""),

      rating: Joi.number(),

      categories: Joi.array().items(this.ProductBrand()),

      has_variant: Joi.boolean(),

      type: Joi.string().allow(""),

      brand: this.ProductBrand(),

      teaser_tag: Joi.string().allow(""),

      attributes: Joi.object(),

      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      sellable: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      item_code: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      sort_on: Joi.array().items(this.ProductSortOn()),

      filters: Joi.array().items(this.ProductFilters()),

      items: Joi.array().items(this.ProductListingDetail()),

      page: this.Page().required(),
    });
  }

  static ImageUrls() {
    return Joi.object({
      landscape: this.Media(),

      portrait: this.Media(),
    });
  }

  static BrandItem() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      banners: this.ImageUrls(),

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      action: this.ProductListingAction(),

      logo: this.Media(),

      slug: Joi.string().allow(""),
    });
  }

  static BrandListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.BrandItem()),

      page: this.Page().required(),
    });
  }

  static BrandDetailResponse() {
    return Joi.object({
      banners: this.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: this.Media(),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number(),

      banners: this.ImageUrls(),

      name: Joi.string().allow(""),

      action: this.ProductListingAction(),

      childs: Joi.array().items(Joi.object()),

      slug: Joi.string().allow(""),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      items: Joi.array().items(this.CategoryItems()),

      department: Joi.string().allow(""),
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
      banners: this.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: this.Media(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductListingDetail()),

      message: Joi.string().allow(""),

      page: this.Page().required(),
    });
  }

  static Department() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: this.Media(),

      priority_order: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(this.Department()),
    });
  }

  static AutocompleteItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      action: this.ProductListingAction(),

      logo: this.Media(),

      display: Joi.string().allow(""),
    });
  }

  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(this.AutocompleteItem()),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      type: Joi.array().items(this.CollectionListingFilterType()),

      tags: Joi.array().items(this.CollectionListingFilterTag()),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      tag: Joi.array().items(Joi.string().allow("")),

      badge: Joi.object(),

      logo: this.Media(),

      uid: Joi.string().allow(""),

      cron: Joi.object(),

      name: Joi.string().allow(""),

      query: Joi.object(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.object(),

      allow_sort: Joi.boolean(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      banners: this.ImageUrls(),

      type: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      meta: Joi.object(),

      description: Joi.string().allow(""),

      action: this.ProductListingAction(),

      slug: Joi.string().allow(""),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      filters: this.CollectionListingFilter(),

      items: Joi.array().items(this.GetCollectionDetailNest()),

      page: this.Page().required(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      cron: Joi.object(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      banners: this.ImageUrls(),

      name: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      badge: Joi.object(),

      query: Joi.object(),

      type: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      meta: Joi.object(),

      description: Joi.string().allow(""),

      logo: this.Media(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.object(),

      allow_sort: Joi.boolean(),

      app_id: Joi.string().allow(""),
    });
  }

  static GetFollowListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductListingDetail()).required(),

      page: this.Page().required(),
    });
  }

  static FollowPostResponse() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
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

      brands: Joi.array().items(Joi.number()),

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
      type: Joi.string().allow(""),

      coordinates: Joi.array().items(Joi.number()),
    });
  }

  static Store1() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      uid: Joi.number(),

      country: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pincode: Joi.number(),

      address: Joi.string().allow(""),

      lat_long: this.LatLong(),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.Store1()).required(),

      page: this.Page().required(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      effective: Joi.number(),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: this.ProductPrice(),

      base: this.ProductPrice(),
    });
  }

  static Image() {
    return Joi.object({
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductAction() {
    return Joi.object({
      query: this.ActionQuery(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static Product() {
    return Joi.object({
      type: Joi.string().allow(""),

      images: Joi.array().items(this.Image()),

      action: this.ProductAction(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      categories: Joi.array().items(this.CategoryInfo()),

      uid: Joi.number(),

      brand: this.BaseInfo(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      converted: this.BasePrice(),

      base: this.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      type: Joi.string().allow(""),

      quantity: Joi.number(),

      price: this.ArticlePriceInfo(),

      size: Joi.string().allow(""),

      seller: this.BaseInfo(),

      uid: Joi.string().allow(""),

      store: this.BaseInfo(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      coupon_message: Joi.string().allow(""),

      bulk_offer: Joi.object(),

      quantity: Joi.number(),

      price: this.ProductPriceInfo(),

      product: this.Product(),

      is_set: Joi.boolean(),

      identifiers: this.CartProductIdentifer().required(),

      article: this.ProductArticle(),

      message: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      key: Joi.string().allow(""),

      availability: this.ProductAvailability(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
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
      max: Joi.string().allow(""),

      min: Joi.string().allow(""),
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
      value: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      you_saved: Joi.number(),

      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      delivery_charge: Joi.number(),

      coupon: Joi.number(),

      total: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      type: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      total: Joi.number(),

      applicable: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(this.DisplayBreakup()),

      raw: this.RawBreakup(),

      coupon: this.CouponBreakup(),

      loyalty_points: this.LoyaltyPoints(),
    });
  }

  static CartResponse() {
    return Joi.object({
      items: Joi.array().items(this.CartProductInfo()),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      cart_id: Joi.number(),

      currency: this.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: this.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      is_valid: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      seller_id: Joi.number(),

      display: Joi.string().allow(""),

      item_id: Joi.number(),

      store_id: Joi.number(),

      pos: Joi.boolean(),

      article_assignment: Joi.object(),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(this.AddProductCart()),
    });
  }

  static AddCartResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      partial: Joi.boolean(),

      cart: this.CartResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_index: Joi.number(),

      quantity: Joi.number(),

      identifiers: this.CartProductIdentifer().required(),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),
    });
  }

  static UpdateCartRequest() {
    return Joi.object({
      items: Joi.array().items(this.UpdateProductCart()),

      operation: Joi.string().allow("").required(),
    });
  }

  static UpdateCartResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: this.CartResponse(),
    });
  }

  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_next: Joi.boolean(),

      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

      total: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      sub_title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      coupon_code: Joi.string().allow("").required(),
    });
  }

  static OfferPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      bulk_effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      quantity: Joi.number(),

      margin: Joi.number(),

      price: this.OfferPrice(),

      best: Joi.boolean(),

      auto_applied: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static OfferSeller() {
    return Joi.object({
      name: Joi.string().allow(""),

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
      email: Joi.string().allow(""),

      address: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      google_map_point: Joi.object(),

      meta: Joi.object(),

      tags: Joi.array().items(Joi.string().allow("")),

      country_code: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      geo_location: this.GeoLocation(),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(this.Address()),
    });
  }

  static SaveAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      success: Joi.string().allow(""),

      address_id: Joi.number(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      address_id: Joi.number(),

      success: Joi.boolean(),

      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),
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

      address_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      address_id: Joi.number(),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      uid: Joi.number(),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      valid: Joi.boolean(),

      discount: Joi.number(),

      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),

      coupon_validity: this.CouponValidity(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      items: Joi.array().items(this.CartProductInfo()),

      promise: this.ShipmentPromise(),

      dp_options: Joi.object(),

      fulfillment_type: Joi.string().allow(""),

      shipments: Joi.number(),

      box_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      dp_id: Joi.number(),

      fulfillment_id: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      shipments: Joi.array().items(this.ShipmentResponse()),

      gstin: Joi.string().allow(""),

      cart_id: Joi.number(),

      currency: this.CartCurrency(),

      error: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: this.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      is_valid: Joi.boolean(),
    });
  }

  static CartCheckoutRequest() {
    return Joi.object({
      ordering_store: Joi.number(),

      address_id: Joi.number(),

      billing_address_id: Joi.number(),

      callback_url: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      payment_auto_confirm: Joi.boolean(),

      billing_address: Joi.object(),

      merchant_code: Joi.string().allow(""),

      payment_params: Joi.object(),

      delivery_address: Joi.object(),

      extra_meta: Joi.object(),

      staff: Joi.object(),

      fyndstore_emp_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      meta: Joi.object(),
    });
  }

  static CheckCart() {
    return Joi.object({
      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      currency: this.CartCurrency(),

      delivery_charge_order_value: Joi.number(),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      store_emps: Joi.array().items(Joi.object()),

      delivery_charge_info: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      items: Joi.array().items(this.CartProductInfo()),

      user_type: Joi.string().allow(""),

      cod_charges: Joi.number(),

      uid: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      store_code: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      cart_id: Joi.number(),

      is_valid: Joi.boolean(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      delivery_promise: this.ShipmentPromise(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),

      cart: this.CheckCart(),

      data: Joi.object(),

      order_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      comment: Joi.string().allow(""),

      pick_up_customer_details: Joi.object(),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static CartMetaResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartMetaMissingResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetShareCartLinkRequest() {
    return Joi.object({
      meta: Joi.object(),

      uid: Joi.number().required(),
    });
  }

  static GetShareCartLinkResponse() {
    return Joi.object({
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      source: Joi.object(),

      created_on: Joi.string().allow(""),

      user: Joi.object(),

      token: Joi.string().allow(""),

      meta: Joi.object(),
    });
  }

  static SharedCart() {
    return Joi.object({
      items: Joi.array().items(this.CartProductInfo()),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      shared_cart_details: this.SharedCartDetails(),

      gstin: Joi.string().allow(""),

      cart_id: Joi.number(),

      currency: this.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: this.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      is_valid: Joi.boolean(),
    });
  }

  static SharedCartResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      cart: this.SharedCart(),
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

      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().allow("").required(),

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
      slug: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      inputs: Joi.array().items(Joi.object()).required(),

      description: Joi.string().allow(""),

      header_image: Joi.string().allow(""),

      should_notify: Joi.boolean(),

      success_message: Joi.string().allow(""),

      poll_for_assignment: this.PollForAssignment(),
    });
  }

  static EditCustomFormPayload() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      inputs: Joi.array().items(Joi.object()).required(),

      description: Joi.string().allow(""),

      header_image: Joi.string().allow(""),

      should_notify: Joi.boolean(),

      login_required: Joi.boolean(),

      success_message: Joi.string().allow(""),

      poll_for_assignment: this.PollForAssignment(),
    });
  }

  static EditTicketPayload() {
    return Joi.object({
      content: this.TicketContent(),

      category: Joi.string().allow(""),

      source: Joi.string().allow(""),

      status: Joi.string().allow(""),

      priority: Joi.string().allow(""),

      assigned_to: this.AgentChangePayload(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AgentChangePayload() {
    return Joi.object({
      agent_id: Joi.string().allow("").required(),
    });
  }

  static CreateVideoRoomResponse() {
    return Joi.object({
      unique_name: Joi.string().allow("").required(),
    });
  }

  static CloseVideoRoomResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static CreateVideoRoomPayload() {
    return Joi.object({
      unique_name: Joi.string().allow("").required(),

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

      type: Joi.string().allow("").required(),
    });
  }

  static CustomFormSubmissionPayload() {
    return Joi.object({
      response: Joi.array().items(this.KeyValue()).required(),
    });
  }

  static KeyValue() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static GetTokenForVideoRoomResponse() {
    return Joi.object({
      access_token: Joi.string().allow("").required(),
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

      identity: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      phone: Joi.string().allow(""),

      country_code: Joi.number(),
    });
  }

  static Email() {
    return Joi.object({
      primary: Joi.boolean(),

      verified: Joi.boolean(),

      email: Joi.string().allow(""),

      active: Joi.boolean(),
    });
  }

  static Debug() {
    return Joi.object({
      source: Joi.string().allow(""),

      platform: Joi.string().allow(""),
    });
  }

  static SubmitCustomFormResponse() {
    return Joi.object({
      ticket: this.Ticket().required(),
    });
  }

  static TicketContext() {
    return Joi.object({
      application_id: Joi.string().allow(""),

      company_id: Joi.string().allow("").required(),
    });
  }

  static CreatedOn() {
    return Joi.object({
      user_agent: Joi.string().allow("").required(),
    });
  }

  static TicketAsset() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static TicketContent() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      attachments: Joi.array().items(this.TicketAsset()),
    });
  }

  static AddTicketPayload() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      priority: Joi.string().allow("").required(),

      category: Joi.string().allow("").required(),

      content: this.TicketContent().required(),
    });
  }

  static Priority() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      color: Joi.string().allow("").required(),
    });
  }

  static Status() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      color: Joi.string().allow("").required(),
    });
  }

  static TicketCategory() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      form: this.CustomForm(),
    });
  }

  static SubmitButton() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      title_color: Joi.string().allow("").required(),

      background_color: Joi.string().allow("").required(),
    });
  }

  static PollForAssignment() {
    return Joi.object({
      duration: Joi.number().required(),

      message: Joi.string().allow("").required(),

      success_message: Joi.string().allow("").required(),

      failure_message: Joi.string().allow("").required(),
    });
  }

  static CustomForm() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      header_image: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      login_required: Joi.boolean().required(),

      should_notify: Joi.boolean().required(),

      success_message: Joi.string().allow(""),

      submit_button: this.SubmitButton(),

      inputs: Joi.array().items(Joi.object()).required(),

      created_on: this.CreatedOn(),

      created_by: Joi.object(),

      poll_for_assignment: this.PollForAssignment(),

      _id: Joi.string().allow("").required(),
    });
  }

  static TicketHistory() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.object().required(),

      ticket_id: Joi.string().allow("").required(),

      created_on: this.CreatedOn(),

      created_by: Joi.object(),

      _id: Joi.string().allow("").required(),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static Ticket() {
    return Joi.object({
      context: this.TicketContext(),

      created_on: this.CreatedOn(),

      response_id: Joi.string().allow(""),

      content: this.TicketContent(),

      ticket_id: Joi.string().allow("").required(),

      category: this.TicketCategory().required(),

      source: Joi.string().allow("").required(),

      status: this.Status().required(),

      priority: this.Priority().required(),

      created_by: Joi.object(),

      assigned_to: Joi.object(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.object(),

      _id: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static EditEmailRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
    });
  }

  static SendVerificationLinkMobileRequestSchema() {
    return Joi.object({
      verified: Joi.boolean(),

      active: Joi.boolean(),

      country_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      primary: Joi.boolean(),
    });
  }

  static EditMobileRequestSchema() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static EditProfileRequestSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      dob: Joi.string().allow(""),

      profile_pic_url: Joi.string().allow(""),

      android_hash: Joi.string().allow(""),

      sender: Joi.string().allow(""),

      register_token: Joi.string().allow(""),
    });
  }

  static SendEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),

      action: Joi.string().allow(""),

      token: Joi.string().allow(""),

      register_token: Joi.string().allow(""),
    });
  }

  static VerifyOtpRequestSchema() {
    return Joi.object({
      request_id: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      otp: Joi.string().allow(""),
    });
  }

  static SendMobileOtpRequestSchema() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      action: Joi.string().allow(""),

      token: Joi.string().allow(""),

      android_hash: Joi.string().allow(""),

      force: Joi.string().allow(""),
    });
  }

  static UpdatePasswordRequestSchema() {
    return Joi.object({
      old_password: Joi.string().allow(""),

      new_password: Joi.string().allow(""),
    });
  }

  static FormRegisterRequestSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      password: Joi.string().allow(""),

      phone: this.FormRegisterRequestSchemaPhone(),

      register_token: Joi.string().allow(""),
    });
  }

  static TokenRequestBodySchema() {
    return Joi.object({
      token: Joi.string().allow(""),
    });
  }

  static ForgotPasswordRequestSchema() {
    return Joi.object({
      code: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static CodeRequestBodySchema() {
    return Joi.object({
      code: Joi.string().allow(""),
    });
  }

  static SendResetPasswordEmailRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),

      captcha_code: Joi.string().allow(""),
    });
  }

  static PasswordLoginRequestSchema() {
    return Joi.object({
      captcha_code: Joi.string().allow(""),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static SendOtpRequestSchema() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      captcha_code: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
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
      register_token: Joi.string().allow(""),

      user_exists: Joi.boolean(),

      user: this.AuthSuccessUser(),
    });
  }

  static SendOtpResponse() {
    return Joi.object({
      resend_timer: Joi.number(),

      resend_token: Joi.string().allow(""),

      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
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
      status: Joi.string().allow(""),
    });
  }

  static RegisterFormSuccess() {
    return Joi.object({
      resend_timer: Joi.number(),

      resend_token: Joi.string().allow(""),

      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static VerifyEmailSuccess() {
    return Joi.object({
      message: Joi.string().allow(""),
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

      resend_token: Joi.string().allow(""),

      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static EmailOtpSuccess() {
    return Joi.object({
      resend_token: Joi.string().allow(""),
    });
  }

  static SessionListSuccess() {
    return Joi.object({
      sessions: Joi.array().items(Joi.string().allow("")),
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

  static PaginationSchema() {
    return Joi.object({
      size: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      current: Joi.number(),
    });
  }

  static UnauthorizedSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static UnauthenticatedSchema() {
    return Joi.object({
      authenticated: Joi.boolean(),
    });
  }

  static NotFoundSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static AuthenticationApiErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProfileEditSuccessSchema() {
    return Joi.object({
      email: Joi.string().allow(""),

      verify_email_otp: Joi.boolean(),

      verify_email_link: Joi.boolean(),

      verify_mobile_otp: Joi.boolean(),

      user: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      user_exists: Joi.boolean(),
    });
  }

  static FormRegisterRequestSchemaPhone() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static OAuthRequestSchemaOauth2() {
    return Joi.object({
      access_token: Joi.string().allow(""),

      expiry: Joi.number(),

      refresh_token: Joi.string().allow(""),
    });
  }

  static OAuthRequestSchemaProfile() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      image: Joi.string().allow(""),

      id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static AuthSuccessUser() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      debug: this.AuthSuccessUserDebug(),

      active: Joi.boolean(),

      emails: this.AuthSuccessUserEmails(),
    });
  }

  static AuthSuccessUserDebug() {
    return Joi.object({
      platform: Joi.string().allow(""),
    });
  }

  static AuthSuccessUserEmails() {
    return Joi.object({
      email: Joi.string().allow(""),

      verified: Joi.boolean(),

      primary: Joi.boolean(),

      active: Joi.boolean(),
    });
  }

  static CreateUserRequestSchema() {
    return Joi.object({
      phone_number: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      username: Joi.string().allow("").required(),

      meta: Joi.object(),
    });
  }

  static CreateUserResponseSchema() {
    return Joi.object({
      user: this.UserSchema(),
    });
  }

  static CreateUserSessionRequestSchema() {
    return Joi.object({
      domain: Joi.string().allow(""),

      max_age: Joi.number(),

      user_id: Joi.string().allow(""),
    });
  }

  static CreateUserSessionResponseSchema() {
    return Joi.object({
      domain: Joi.string().allow(""),

      max_age: Joi.number(),

      secure: Joi.boolean(),

      http_only: Joi.boolean(),

      cookie: Joi.object(),
    });
  }

  static PlatformSchema() {
    return Joi.object({
      display: Joi.string().allow(""),

      look_and_feel: this.LookAndFeel(),

      updated_at: Joi.string().allow(""),

      active: Joi.boolean(),

      forgot_password: Joi.boolean(),

      login: this.Login(),

      skip_captcha: Joi.boolean(),

      name: Joi.string().allow(""),

      meta: this.MetaSchema(),

      _id: Joi.string().allow(""),

      social: this.Social(),

      required_fields: this.RequiredFields(),

      register_required_fields: this.RegisterRequiredFields(),

      skip_login: Joi.boolean(),

      flash_card: this.FlashCard(),

      subtext: Joi.string().allow(""),

      social_tokens: this.SocialTokens(),

      created_at: Joi.string().allow(""),

      register: Joi.boolean(),

      mobile_image: Joi.string().allow(""),

      desktop_image: Joi.string().allow(""),
    });
  }

  static LookAndFeel() {
    return Joi.object({
      card_position: Joi.string().allow(""),

      background_color: Joi.string().allow(""),
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

      level: Joi.string().allow(""),
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

      level: Joi.string().allow(""),
    });
  }

  static RegisterRequiredFieldsMobile() {
    return Joi.object({
      is_required: Joi.boolean(),

      level: Joi.string().allow(""),
    });
  }

  static FlashCard() {
    return Joi.object({
      text: Joi.string().allow(""),

      text_color: Joi.string().allow(""),

      background_color: Joi.string().allow(""),
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
      app_id: Joi.string().allow(""),
    });
  }

  static Accountkit() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  static Google() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  static UpdateUserRequestSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      meta: Joi.object(),
    });
  }

  static UserSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      meta: Joi.object(),

      last_name: Joi.string().allow(""),

      phone_numbers: Joi.array().items(this.PhoneNumber()),

      emails: Joi.array().items(this.Email()),

      gender: Joi.string().allow(""),

      dob: Joi.string().allow(""),

      active: Joi.boolean(),

      profile_pic_url: Joi.string().allow(""),

      username: Joi.string().allow(""),

      account_type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      debug: this.Debug(),

      has_old_password_hash: Joi.boolean(),

      _id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static CommunicationConsentReq() {
    return Joi.object({
      response: Joi.string().allow(""),

      action: Joi.string().allow(""),

      channel: Joi.string().allow(""),
    });
  }

  static CommunicationConsentRes() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      channels: this.CommunicationConsentChannels(),
    });
  }

  static CommunicationConsentChannelsEmail() {
    return Joi.object({
      response: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static CommunicationConsentChannelsSms() {
    return Joi.object({
      response: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static CommunicationConsentChannelsWhatsapp() {
    return Joi.object({
      response: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      phone_number: Joi.string().allow(""),
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
      app_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      channels: this.CommunicationConsentChannels(),
    });
  }

  static PushtokenReq() {
    return Joi.object({
      action: Joi.string().allow(""),

      bundle_identifier: Joi.string().allow(""),

      push_token: Joi.string().allow(""),

      unique_device_id: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static PushtokenRes() {
    return Joi.object({
      _id: Joi.string().allow(""),

      bundle_identifier: Joi.string().allow(""),

      push_token: Joi.string().allow(""),

      unique_device_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      application_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      expired_at: Joi.string().allow(""),
    });
  }

  static QRCodeResp() {
    return Joi.object({
      link: Joi.string().allow(""),

      svg: Joi.string().allow(""),
    });
  }

  static RedirectDevice() {
    return Joi.object({
      link: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static WebRedirect() {
    return Joi.object({
      link: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      source: Joi.string().allow(""),

      medium: Joi.string().allow(""),
    });
  }

  static Attribution() {
    return Joi.object({
      campaign_cookie_expiry: Joi.string().allow(""),
    });
  }

  static SocialMediaTags() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      image: Joi.string().allow(""),
    });
  }

  static ShortLinkReq() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),

      hash: Joi.string().allow(""),

      active: Joi.boolean(),

      expire_at: Joi.string().allow(""),

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
      original: Joi.string().allow(""),

      short: Joi.string().allow(""),

      hash: Joi.string().allow(""),
    });
  }

  static ShortLinkRes() {
    return Joi.object({
      title: Joi.string().allow(""),

      url: this.UrlInfo(),

      created_by: Joi.string().allow(""),

      app_redirect: Joi.boolean(),

      fallback: Joi.string().allow(""),

      active: Joi.boolean(),

      _id: Joi.string().allow(""),

      enable_tracking: Joi.boolean(),

      expire_at: Joi.string().allow(""),

      application: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

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
      message: Joi.string().allow(""),
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
      _id: Joi.string().allow(""),

      domain: this.Domain(),

      website: this.ApplicationWebsite(),

      cors: this.ApplicationCors(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: this.ApplicationMeta(),

      token: Joi.string().allow(""),

      secret: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      banner: this.SecureUrl(),

      logo: this.SecureUrl(),

      is_active: Joi.boolean(),
    });
  }

  static CompanyInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(this.CompanyAboutAddress()),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static OwnerInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),

      emails: Joi.array().items(this.UserEmail()),

      phone_numbers: Joi.array().items(this.UserPhoneNumber()),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      profile_pic: Joi.string().allow(""),
    });
  }

  static AppVersionRequest() {
    return Joi.object({
      application: this.ApplicationVersionRequest().required(),

      device: this.Device().required(),

      locale: Joi.string().allow(""),

      timezone: Joi.string().allow(""),
    });
  }

  static ApplicationVersionRequest() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      namespace: Joi.string().allow(""),

      token: Joi.string().allow(""),

      version: Joi.string().allow("").required(),
    });
  }

  static Device() {
    return Joi.object({
      build: Joi.number(),

      model: Joi.string().allow(""),

      os: this.OS().required(),
    });
  }

  static OS() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      version: Joi.string().allow(""),
    });
  }

  static SupportedLanguage() {
    return Joi.object({
      name: Joi.string().allow(""),

      code: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

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
      _id: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      store_code: Joi.string().allow("").required(),
    });
  }

  static AppStaff() {
    return Joi.object({
      _id: Joi.string().allow(""),

      order_incent: Joi.boolean(),

      stores: Joi.array().items(Joi.number()),

      application: Joi.string().allow(""),

      title: Joi.string().allow(""),

      user: Joi.string().allow(""),

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      profile_pic_url: Joi.string().allow(""),
    });
  }

  static ProductDetailFeature() {
    return Joi.object({
      similar: Joi.array().items(Joi.string().allow("")),

      seller_selection: Joi.boolean(),

      update_product_meta: Joi.boolean(),

      request_product: Joi.boolean(),
    });
  }

  static LaunchPage() {
    return Joi.object({
      page_type: Joi.string().allow(""),

      params: Joi.string().allow(""),

      query: Joi.string().allow(""),
    });
  }

  static LandingPageFeature() {
    return Joi.object({
      launch_page: this.LaunchPage(),

      continue_as_guest: Joi.boolean(),

      login_btn_text: Joi.string().allow(""),

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

      _id: Joi.string().allow(""),

      app: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

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

      type: Joi.string().allow(""),
    });
  }

  static ListingPriceFeature() {
    return Joi.object({
      value: Joi.string().allow(""),

      sort: Joi.string().allow(""),
    });
  }

  static ListingPageFeature() {
    return Joi.object({
      sort_on: Joi.string().allow(""),
    });
  }

  static CurrencyFeature() {
    return Joi.object({
      value: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      default_currency: Joi.string().allow(""),
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
      _id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      decimal_digits: Joi.number(),

      symbol: Joi.string().allow(""),
    });
  }

  static Domain() {
    return Joi.object({
      verified: Joi.boolean(),

      is_primary: Joi.boolean(),

      is_default: Joi.boolean(),

      is_shortlink: Joi.boolean(),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ApplicationWebsite() {
    return Joi.object({
      enabled: Joi.boolean(),

      basepath: Joi.string().allow(""),
    });
  }

  static ApplicationCors() {
    return Joi.object({
      domains: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ApplicationAuth() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static ApplicationRedirections() {
    return Joi.object({
      from: Joi.string().allow(""),

      redirect_to: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ApplicationMeta() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static SecureUrl() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
    });
  }

  static Application() {
    return Joi.object({
      website: this.ApplicationWebsite(),

      cors: this.ApplicationCors(),

      auth: this.ApplicationAuth(),

      description: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      cache_ttl: Joi.number(),

      is_internal: Joi.boolean(),

      is_active: Joi.boolean(),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      owner: Joi.string().allow(""),

      company_id: Joi.number(),

      token: Joi.string().allow(""),

      redirections: Joi.array().items(this.ApplicationRedirections()),

      meta: Joi.array().items(this.ApplicationMeta()),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),

      banner: this.SecureUrl(),

      logo: this.SecureUrl(),

      favicon: this.SecureUrl(),

      domains: Joi.array().items(this.Domain()),

      app_type: Joi.string().allow(""),

      mobile_logo: this.SecureUrl(),

      domain: this.Domain(),
    });
  }

  static NotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static UnhandledError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static InvalidPayloadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static SuccessMessageResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static InventoryBrandRule() {
    return Joi.object({
      criteria: Joi.string().allow(""),

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
      criteria: Joi.string().allow(""),

      rules: Joi.array().items(this.StoreCriteriaRule()),

      stores: Joi.array().items(Joi.number()),
    });
  }

  static InventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static StorePriorityRule() {
    return Joi.object({
      enabled: Joi.boolean(),

      storetype_order: Joi.array().items(Joi.string().allow("")),
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

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
    });
  }

  static UserEmail() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      email: Joi.string().allow(""),
    });
  }

  static UserPhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      country_code: Joi.number(),

      phone: Joi.string().allow(""),
    });
  }

  static ApplicationInformation() {
    return Joi.object({
      address: this.InformationAddress(),

      support: this.InformationSupport(),

      social_links: this.SocialLinks(),

      links: this.Links(),

      copyright_text: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      business_highlights: this.BusinessHighlights(),

      application: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static InformationAddress() {
    return Joi.object({
      loc: Joi.string().allow(""),

      address_line: Joi.array().items(Joi.string().allow("")),

      phone: this.InformationPhone(),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static InformationPhone() {
    return Joi.object({
      code: Joi.string().allow(""),

      number: Joi.string().allow(""),
    });
  }

  static InformationSupport() {
    return Joi.object({
      phone: Joi.array().items(Joi.string().allow("")),

      email: Joi.array().items(Joi.string().allow("")),

      timing: Joi.string().allow(""),
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
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static Twitter() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static Pinterest() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static GooglePlus() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static Youtube() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static LinkedIn() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static Vimeo() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static BlogLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static Links() {
    return Joi.object({
      title: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static BusinessHighlights() {
    return Joi.object({
      _id: Joi.string().allow(""),

      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),
    });
  }

  static ApplicationDetail() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      logo: this.SecureUrl().required(),

      mobile_logo: this.SecureUrl().required(),

      favicon: this.SecureUrl().required(),

      banner: this.SecureUrl().required(),

      domain: this.Domain(),

      domains: Joi.array().items(this.Domain()),

      _id: Joi.string().allow(""),
    });
  }

  static CurrenciesResponse() {
    return Joi.object({
      items: Joi.array().items(this.Currency()),
    });
  }

  static StoreLatLong() {
    return Joi.object({
      type: Joi.string().allow(""),

      coordinates: Joi.array().items(Joi.number()),
    });
  }

  static OptedStoreAddress() {
    return Joi.object({
      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      lat_long: this.StoreLatLong(),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static OrderingStore() {
    return Joi.object({
      address: this.OptedStoreAddress(),

      _id: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      pincode: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static OrderingStores() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.OrderingStore()),

      deployed_stores: Joi.array().items(Joi.number()),

      all_stores: Joi.boolean(),

      enabled: Joi.boolean(),

      type: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      app: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static TokenResponse() {
    return Joi.object({
      tokens: this.Tokens(),

      _id: Joi.string().allow(""),

      application: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

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

      project_id: Joi.string().allow(""),

      gcm_sender_id: Joi.string().allow(""),

      application_id: Joi.string().allow(""),

      api_key: Joi.string().allow(""),
    });
  }

  static Ios() {
    return Joi.object({
      application_id: Joi.string().allow(""),

      api_key: Joi.string().allow(""),
    });
  }

  static Android() {
    return Joi.object({
      application_id: Joi.string().allow(""),

      api_key: Joi.string().allow(""),
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
      app_id: Joi.string().allow(""),
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
      write_key: Joi.string().allow(""),
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
      api_key: Joi.string().allow(""),
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
      app_id: Joi.string().allow(""),

      app_key: Joi.string().allow(""),

      web_token: Joi.string().allow(""),
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
      api_key: Joi.string().allow(""),
    });
  }

  static FyndRewards() {
    return Joi.object({
      credentials: this.FyndRewardsCredentials(),
    });
  }

  static FyndRewardsCredentials() {
    return Joi.object({
      public_key: Joi.string().allow(""),
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
      api_key: Joi.string().allow(""),
    });
  }

  static AggregatorConfigDetail() {
    return Joi.object({
      merchant_id: Joi.string().allow(""),

      verify_api: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      merchant_key: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      api: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      pin: Joi.string().allow(""),

      sdk: Joi.boolean(),

      secret: Joi.string().allow("").required(),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      juspay: this.AggregatorConfigDetail(),

      ccavenue: this.AggregatorConfigDetail(),

      payumoney: this.AggregatorConfigDetail(),

      rupifi: this.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      stripe: this.AggregatorConfigDetail(),

      razorpay: this.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),

      simpl: this.AggregatorConfigDetail(),

      mswipe: this.AggregatorConfigDetail(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
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
      card_id: Joi.string().allow("").required(),

      refresh: Joi.boolean(),
    });
  }

  static AttachCardsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.object().required(),

      message: Joi.string().allow(""),
    });
  }

  static CardPaymentGateway() {
    return Joi.object({
      api: Joi.string().allow(""),

      aggregator: Joi.string().allow("").required(),

      customer_id: Joi.string().allow(""),
    });
  }

  static ActiveCardPaymentGatewayResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      cards: this.CardPaymentGateway().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static Card() {
    return Joi.object({
      nickname: Joi.string().allow(""),

      card_brand: Joi.string().allow(""),

      card_reference: Joi.string().allow(""),

      card_isin: Joi.string().allow(""),

      card_brand_image: Joi.string().allow(""),

      card_id: Joi.string().allow(""),

      card_type: Joi.string().allow(""),

      expired: Joi.boolean(),

      aggregator_name: Joi.string().allow("").required(),

      card_number: Joi.string().allow(""),

      card_name: Joi.string().allow(""),

      exp_month: Joi.number(),

      card_token: Joi.string().allow(""),

      card_issuer: Joi.string().allow(""),

      card_fingerprint: Joi.string().allow(""),

      exp_year: Joi.number(),
    });
  }

  static ListCardsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.array().items(this.Card()),

      message: Joi.string().allow("").required(),
    });
  }

  static DeletehCardRequest() {
    return Joi.object({
      card_id: Joi.string().allow("").required(),
    });
  }

  static DeleteCardsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static ValidateCustomerRequest() {
    return Joi.object({
      phone_number: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      merchant_params: Joi.object().required(),

      transaction_amount_in_paise: Joi.number().required(),

      payload: Joi.string().allow("").required(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.object().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      amount: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

      transaction_token: Joi.string().allow(""),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      cart_id: Joi.string().allow(""),

      aggregator: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      delivery_address_id: Joi.string().allow(""),

      success: Joi.boolean().required(),

      status: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      timeout: Joi.number().required(),

      polling_url: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      virtual_id: Joi.string().allow(""),

      razorpay_payment_id: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      bqr_image: Joi.string().allow(""),

      timeout: Joi.number(),

      polling_url: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow(""),

      customer_id: Joi.string().allow(""),

      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      virtual_id: Joi.string().allow(""),

      success: Joi.boolean().required(),

      razorpay_payment_id: Joi.string().allow(""),

      amount: Joi.number(),

      status: Joi.string().allow(""),

      merchant_order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      vpa: Joi.string().allow(""),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      customer_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      status: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      retry: Joi.boolean().required(),

      status: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").required(),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      small: Joi.string().allow("").required(),

      large: Joi.string().allow("").required(),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      timeout: Joi.number(),

      fynd_vpa: Joi.string().allow(""),

      card_brand: Joi.string().allow(""),

      card_reference: Joi.string().allow(""),

      display_priority: Joi.number(),

      card_type: Joi.string().allow(""),

      aggregator_name: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      card_token: Joi.string().allow(""),

      intent_flow: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      nickname: Joi.string().allow(""),

      expired: Joi.boolean(),

      card_name: Joi.string().allow(""),

      exp_month: Joi.number(),

      code: Joi.string().allow(""),

      exp_year: Joi.number(),

      card_brand_image: Joi.string().allow(""),

      card_number: Joi.string().allow(""),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      retry_count: Joi.number(),

      card_fingerprint: Joi.string().allow(""),

      card_isin: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      card_id: Joi.string().allow(""),

      logo_url: this.PaymentModeLogo(),

      card_issuer: Joi.string().allow(""),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      list: Joi.array().items(this.PaymentModeList()),

      display_name: Joi.string().allow("").required(),

      display_priority: Joi.number().required(),

      add_card_enabled: Joi.boolean(),

      aggregator_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      anonymous_enable: Joi.boolean(),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      api_link: Joi.string().allow(""),

      data: Joi.object(),

      payment_flow: Joi.string().allow(""),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      fynd: this.AggregatorRoute(),

      juspay: this.AggregatorRoute(),

      ccavenue: this.AggregatorRoute(),

      bqr_razorpay: this.AggregatorRoute(),

      rupifi: this.AggregatorRoute(),

      payubiz: this.AggregatorRoute(),

      upi_razorpay: this.AggregatorRoute(),

      stripe: this.AggregatorRoute(),

      razorpay: this.AggregatorRoute(),

      simpl: this.AggregatorRoute(),

      msipe: this.AggregatorRoute(),
    });
  }

  static PaymentOptionAndFlow() {
    return Joi.object({
      payment_option: Joi.array().items(this.RootPaymentMode()).required(),

      payment_flows: this.PaymentFlow().required(),
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
      id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      email: Joi.string().allow("").required(),

      branch_name: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      comment: Joi.boolean(),

      account_no: Joi.string().allow("").required(),

      mobile: Joi.boolean(),

      delights_user_name: Joi.string().allow("").required(),
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
      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      success: Joi.boolean(),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationRequest() {
    return Joi.object({
      request_id: Joi.string().allow("").required(),

      hash_key: Joi.string().allow("").required(),

      otp: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationResponse() {
    return Joi.object({
      request_id: Joi.string().allow("").required(),

      hash_key: Joi.string().allow("").required(),

      otp: Joi.string().allow("").required(),
    });
  }

  static WrongOtpError() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static BankDetails() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      account_no: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      delights: Joi.boolean().required(),

      shipment_id: Joi.string().allow("").required(),

      details: this.BankDetails().required(),

      order_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.object(),

      message: Joi.string().allow("").required(),
    });
  }

  static WalletOtpRequest() {
    return Joi.object({
      mobile: Joi.boolean().required(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static WalletOtpResponse() {
    return Joi.object({
      request_id: Joi.string().allow("").required(),

      success: Joi.boolean(),

      is_verified_flag: Joi.string().allow("").required(),
    });
  }

  static SetDefaultBeneficiaryRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),
    });
  }

  static SetDefaultBeneficiaryResponse() {
    return Joi.object({
      success: Joi.boolean(),

      is_beneficiary_set: Joi.boolean().required(),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      quantity: Joi.number(),

      shipment_type: Joi.string().allow("").required(),

      article_uid: Joi.string().allow("").required(),
    });
  }

  static UpdateCartShipmentRequest() {
    return Joi.object({
      shipments: Joi.array().items(this.UpdateCartShipmentItem()).required(),
    });
  }

  static Files() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static CartPosCheckoutRequest() {
    return Joi.object({
      fyndstore_emp_id: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),

      billing_address: Joi.object(),

      order_type: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      meta: Joi.object(),

      extra_meta: Joi.object(),

      files: Joi.array().items(this.Files()),

      billing_address_id: Joi.number(),

      merchant_code: Joi.string().allow(""),

      pick_at_store_uid: Joi.number(),

      staff: Joi.object(),

      callback_url: Joi.string().allow(""),

      pos: Joi.boolean(),

      aggregator: Joi.string().allow(""),

      ordering_store: Joi.number(),

      payment_params: Joi.object(),

      delivery_address: Joi.object(),

      address_id: Joi.number(),
    });
  }

  static CartDeliveryModesResponse() {
    return Joi.object({
      available_modes: Joi.array().items(Joi.string().allow("")),

      pickup_stores: Joi.array().items(Joi.number()),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      phone: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(this.PickupStoreDetail()),
    });
  }

  static GetPincodeCityResponse() {
    return Joi.object({
      request_uuid: Joi.string().allow("").required(),

      stormbreaker_uuid: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      data: Joi.array().items(this.LogisticPincodeData()).required(),
    });
  }

  static LogisticPincodeData() {
    return Joi.object({
      meta: this.LogisticMeta(),

      parents: Joi.array().items(this.LogisticParents()),

      sub_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      error: this.LogisticError(),

      uid: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static LogisticMeta() {
    return Joi.object({
      zone: Joi.string().allow(""),

      deliverables: Joi.array().items(Joi.any()),
    });
  }

  static LogisticParents() {
    return Joi.object({
      sub_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static LogisticError() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static GetTatProductReqBody() {
    return Joi.object({
      location_details: this.LocationDetails().required(),

      source: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      from_pincode: Joi.string().allow(""),

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

      level: Joi.string().allow(""),
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

  static Formatted() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static GetTatProductResponse() {
    return Joi.object({
      location_details: this.LocationDetails().required(),

      request_uuid: Joi.string().allow("").required(),

      error: Joi.object().required(),

      to_city: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      stormbreaker_uuid: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      identifier: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),
    });
  }

  static LogisticResponseCategory() {
    return Joi.object({
      id: Joi.number(),

      level: Joi.string().allow(""),
    });
  }

  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
}

class CatalogValidator {
  static getProductDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getProductSizesBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      storeId: Joi.string().allow(""),
    }).required();
  }

  static getProductPriceBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      storeId: Joi.string().allow(""),
    }).required();
  }

  static getProductSellersBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getProductComparisonBySlugs() {
    return Joi.object({
      slug: Joi.array().items(Joi.string().allow("")).required(),
    }).required();
  }

  static getSimilarComparisonProductBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getComparedFrequentlyProductBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getProductSimilarByIdentifier() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      similarType: Joi.string().allow("").required(),
    }).required();
  }

  static getProductVariantsBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getProductStockByIds() {
    return Joi.object({
      itemId: Joi.string().allow(""),
      alu: Joi.string().allow(""),
      skuCode: Joi.string().allow(""),
      ean: Joi.string().allow(""),
      upc: Joi.string().allow(""),
    });
  }

  static getProductStockForTimeByIds() {
    return Joi.object({
      timestamp: Joi.string().allow("").required(),
      pageSize: Joi.number(),
      pageId: Joi.string().allow(""),
    }).required();
  }

  static getProducts() {
    return Joi.object({
      q: Joi.string().allow(""),
      f: Joi.string().allow(""),
      filters: Joi.boolean(),
      sortOn: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
      pageType: Joi.string().allow(""),
    });
  }

  static getBrands() {
    return Joi.object({
      department: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  static getBrandDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getCategories() {
    return Joi.object({
      department: Joi.string().allow(""),
    });
  }

  static getCategoryDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getHomeProducts() {
    return Joi.object({
      sortOn: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    });
  }

  static getDepartments() {
    return Joi.object({});
  }

  static getSearchResults() {
    return Joi.object({
      q: Joi.string().allow("").required(),
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
      slug: Joi.string().allow("").required(),
      f: Joi.string().allow(""),
      filters: Joi.boolean(),
      sortOn: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  static getCollectionDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getFollowedListing() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  static followById() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      collectionId: Joi.string().allow("").required(),
    }).required();
  }

  static unfollowById() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      collectionId: Joi.string().allow("").required(),
    }).required();
  }

  static getFollowerCountById() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      collectionId: Joi.string().allow("").required(),
    }).required();
  }

  static getFollowIds() {
    return Joi.object({
      collectionType: Joi.string().allow(""),
    });
  }

  static getStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
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
      articleId: Joi.string().allow(""),
      uid: Joi.number(),
      slug: Joi.string().allow(""),
    });
  }

  static getAddresses() {
    return Joi.object({
      uid: Joi.number(),
      mobileNo: Joi.string().allow(""),
      checkoutMode: Joi.string().allow(""),
      tags: Joi.string().allow(""),
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
      mobileNo: Joi.string().allow(""),
      checkoutMode: Joi.string().allow(""),
      tags: Joi.string().allow(""),
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
      uid: Joi.string().allow(""),
      body: Validator.UpdateCartPaymentRequest().required(),
    }).required();
  }

  static validateCouponForPayment() {
    return Joi.object({
      uid: Joi.string().allow(""),
      addressId: Joi.string().allow(""),
      paymentMode: Joi.string().allow(""),
      paymentIdentifier: Joi.string().allow(""),
      aggregatorName: Joi.string().allow(""),
      merchantCode: Joi.string().allow(""),
    });
  }

  static getShipments() {
    return Joi.object({
      p: Joi.boolean(),
      uid: Joi.number(),
      addressId: Joi.number(),
      areaCode: Joi.string().allow(""),
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
      token: Joi.string().allow("").required(),
    }).required();
  }

  static updateCartWithSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
    }).required();
  }
}

class LeadValidator {
  static getTicket() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static createHistory() {
    return Joi.object({
      ticketId: Joi.string().allow("").required(),
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
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static submitCustomForm() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: Validator.CustomFormSubmissionPayload().required(),
    }).required();
  }

  static getParticipantsInsideVideoRoom() {
    return Joi.object({
      uniqueName: Joi.string().allow("").required(),
    }).required();
  }

  static getTokenForVideoRoom() {
    return Joi.object({
      uniqueName: Joi.string().allow("").required(),
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
      platform: Joi.string().allow(""),
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
      platform: Joi.string().allow(""),
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
      platform: Joi.string().allow(""),
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
      platform: Joi.string().allow(""),
      body: Validator.SendMobileOtpRequestSchema().required(),
    }).required();
  }

  static verifyMobileOTP() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: Validator.VerifyOtpRequestSchema().required(),
    }).required();
  }

  static sendOTPOnEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: Validator.SendEmailOtpRequestSchema().required(),
    }).required();
  }

  static verifyEmailOTP() {
    return Joi.object({
      platform: Joi.string().allow(""),
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
      name: Joi.string().allow(""),
    });
  }

  static updateProfile() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: Validator.EditProfileRequestSchema().required(),
    }).required();
  }

  static addMobileNumber() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: Validator.EditMobileRequestSchema().required(),
    }).required();
  }

  static deleteMobileNumber() {
    return Joi.object({
      platform: Joi.string().allow(""),
      active: Joi.boolean().required(),
      primary: Joi.boolean().required(),
      verified: Joi.boolean().required(),
      countryCode: Joi.string().allow("").required(),
      phone: Joi.string().allow("").required(),
    }).required();
  }

  static setMobileNumberAsPrimary() {
    return Joi.object({
      body: Validator.SendVerificationLinkMobileRequestSchema().required(),
    }).required();
  }

  static sendVerificationLinkToMobile() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: Validator.SendVerificationLinkMobileRequestSchema().required(),
    }).required();
  }

  static addEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: Validator.EditEmailRequestSchema().required(),
    }).required();
  }

  static deleteEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      active: Joi.boolean().required(),
      primary: Joi.boolean().required(),
      verified: Joi.boolean().required(),
      email: Joi.string().allow("").required(),
    }).required();
  }

  static setEmailAsPrimary() {
    return Joi.object({
      body: Validator.EditEmailRequestSchema().required(),
    }).required();
  }

  static sendVerificationLinkToEmail() {
    return Joi.object({
      platform: Joi.string().allow(""),
      body: Validator.EditEmailRequestSchema().required(),
    }).required();
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
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getCollectionQRCodeBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getUrlQRCode() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    }).required();
  }

  static createShortLink() {
    return Joi.object({
      body: Validator.ShortLinkReq().required(),
    }).required();
  }

  static getShortLinkByHash() {
    return Joi.object({
      hash: Joi.string().allow("").required(),
    }).required();
  }

  static getOriginalShortLinkByHash() {
    return Joi.object({
      hash: Joi.string().allow("").required(),
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
      q: Joi.string().allow(""),
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
      id: Joi.string().allow("").required(),
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
      user: Joi.string().allow(""),
    });
  }
}

class PaymentValidator {
  static getAggregatorsConfig() {
    return Joi.object({
      xApiToken: Joi.string().allow("").required(),
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
      cartId: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      checkoutMode: Joi.string().allow("").required(),
      refresh: Joi.boolean(),
      assignCardId: Joi.string().allow(""),
      userDetails: Joi.string().allow(""),
    }).required();
  }

  static getPosPaymentModeRoutes() {
    return Joi.object({
      amount: Joi.number().required(),
      cartId: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      checkoutMode: Joi.string().allow("").required(),
      refresh: Joi.boolean(),
      assignCardId: Joi.string().allow(""),
      orderType: Joi.string().allow("").required(),
      userDetails: Joi.string().allow(""),
    }).required();
  }

  static getUserBeneficiariesDetail() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static verifyIfscCode() {
    return Joi.object({
      ifscCode: Joi.string().allow(""),
    });
  }

  static getOrderBeneficiariesDetail() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
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
      articleId: Joi.string().allow(""),
      uid: Joi.number(),
      slug: Joi.string().allow(""),
    });
  }

  static getAddresses() {
    return Joi.object({
      uid: Joi.number(),
      mobileNo: Joi.string().allow(""),
      checkoutMode: Joi.string().allow(""),
      tags: Joi.string().allow(""),
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
      mobileNo: Joi.string().allow(""),
      checkoutMode: Joi.string().allow(""),
      tags: Joi.string().allow(""),
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
      uid: Joi.string().allow(""),
      body: Validator.UpdateCartPaymentRequest().required(),
    }).required();
  }

  static validateCouponForPayment() {
    return Joi.object({
      uid: Joi.string().allow(""),
      addressId: Joi.string().allow(""),
      paymentMode: Joi.string().allow(""),
      paymentIdentifier: Joi.string().allow(""),
      aggregatorName: Joi.string().allow(""),
      merchantCode: Joi.string().allow(""),
    });
  }

  static getShipments() {
    return Joi.object({
      pickAtStoreUid: Joi.number(),
      orderingStoreId: Joi.number(),
      p: Joi.boolean(),
      uid: Joi.number(),
      addressId: Joi.number(),
      areaCode: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
    });
  }

  static updateShipments() {
    return Joi.object({
      i: Joi.boolean(),
      p: Joi.boolean(),
      uid: Joi.number(),
      addressId: Joi.number(),
      orderType: Joi.string().allow(""),
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
      areaCode: Joi.string().allow("").required(),
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
      token: Joi.string().allow("").required(),
    }).required();
  }

  static updateCartWithSharedItems() {
    return Joi.object({
      token: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
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
      pincode: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = {
  CatalogValidator,
  CartValidator,
  LeadValidator,
  UserValidator,
  CommunicationValidator,
  ShareValidator,
  ConfigurationValidator,
  PaymentValidator,
  PosCartValidator,
  LogisticValidator,
  Validator,
};
