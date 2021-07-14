const Joi = require("joi");

class Validator {
  static ProductListingActionPage() {
    return Joi.object({
      params: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.any(),
    });
  }

  static ProductListingAction() {
    return Joi.object({
      page: this.ProductListingActionPage(),

      type: Joi.string().allow(""),
    });
  }

  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      meta: this.Meta(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      action: this.ProductListingAction(),

      logo: this.Media(),

      name: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: this.Price(),

      effective: this.Price(),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      details: Joi.array().items(this.ProductDetailAttribute()),

      title: Joi.string().allow(""),
    });
  }

  static ProductDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      rating: Joi.number(),

      categories: Joi.array().items(this.ProductBrand()),

      short_description: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      color: Joi.string().allow(""),

      brand: this.ProductBrand(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      medias: Joi.array().items(this.Media()),

      name: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      rating_count: Joi.number(),

      item_type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      attributes: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      price: this.ProductListingPrice(),

      action: this.ProductListingAction(),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      discount: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_4: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_5: Joi.string().allow(""),
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
      col_4: this.ColumnHeader(),

      col_3: this.ColumnHeader(),

      col_6: this.ColumnHeader(),

      col_2: this.ColumnHeader(),

      col_1: this.ColumnHeader(),

      col_5: this.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      unit: Joi.string().allow(""),

      sizes: Joi.array().items(this.SizeChartValues()),

      image: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      headers: this.ColumnHeaders(),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ProductSize() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      size_chart: this.SizeChart(),

      price: this.ProductListingPrice(),

      sizes: Joi.array().items(this.ProductSize()),

      stores: this.ProductSizeStores(),

      discount: Joi.string().allow(""),

      sellable: Joi.boolean(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static StrategyWiseListing() {
    return Joi.object({
      tat: Joi.number(),

      quantity: Joi.number(),

      distance: Joi.number(),

      pincode: Joi.number(),
    });
  }

  static Store() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static Seller() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static ProductSetDistributionSize() {
    return Joi.object({
      pieces: Joi.number(),

      size: Joi.string().allow(""),
    });
  }

  static ProductSetDistribution() {
    return Joi.object({
      sizes: Joi.array().items(this.ProductSetDistributionSize()),
    });
  }

  static ProductSet() {
    return Joi.object({
      size_distribution: this.ProductSetDistribution(),

      quantity: Joi.number(),
    });
  }

  static Details() {
    return Joi.object({
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributes() {
    return Joi.object({
      details: Joi.array().items(this.Details()),

      title: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponse() {
    return Joi.object({
      pincode: Joi.number(),

      article_id: Joi.string().allow(""),

      return_config: this.ReturnConfig(),

      price: this.ProductStockPrice(),

      strategy_wise_listing: Joi.array().items(this.StrategyWiseListing()),

      store: this.Store(),

      seller_count: Joi.number(),

      seller: this.Seller(),

      special_badge: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      quantity: Joi.number(),

      item_type: Joi.string().allow(""),

      long_lat: Joi.array().items(Joi.number()),

      article_assignment: this.ArticleAssignment(),

      set: this.ProductSet(),

      marketplace_attributes: Joi.array().items(this.MarketPlaceSttributes()),

      price_per_price: this.ProductStockPrice(),
    });
  }

  static ProductSizeSellerFilter() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
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
      key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static AttributeMetadata() {
    return Joi.object({
      details: Joi.array().items(this.AttributeDetail()),

      title: Joi.string().allow(""),
    });
  }

  static ProductsComparisonResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductDetail()),

      attributes_metadata: Joi.array().items(this.AttributeMetadata()),
    });
  }

  static ProductCompareResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductDetail()),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      attributes_metadata: Joi.array().items(this.AttributeMetadata()),
    });
  }

  static ProductFrequentlyComparedSimilarResponse() {
    return Joi.object({
      similars: this.ProductCompareResponse(),
    });
  }

  static ProductSimilarItem() {
    return Joi.object({
      items: Joi.array().items(this.ProductDetail()),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static SimilarProductByTypeResponse() {
    return Joi.object({
      similars: this.ProductSimilarItem(),
    });
  }

  static ProductVariantItemResponse() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      medias: Joi.array().items(this.Media()),

      color_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: this.ProductListingAction(),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      color: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductVariantItemResponse()),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(this.ProductVariantResponse()),
    });
  }

  static CompanyDetail() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      code: Joi.string().allow(""),

      id: Joi.number(),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      uid: Joi.string().allow(""),

      item_id: Joi.number(),

      company: this.CompanyDetail(),

      price: this.ProductStockPrice(),

      store: this.StoreDetail(),

      seller: this.Seller(),

      quantity: Joi.number(),

      identifier: Joi.any(),

      size: Joi.string().allow(""),
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

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      rating: Joi.number(),

      categories: Joi.array().items(this.ProductBrand()),

      short_description: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      color: Joi.string().allow(""),

      brand: this.ProductBrand(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      medias: Joi.array().items(this.Media()),

      name: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      rating_count: Joi.number(),

      item_type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      sellable: Joi.boolean(),

      description: Joi.string().allow(""),

      attributes: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      price: this.ProductListingPrice(),

      action: this.ProductListingAction(),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      discount: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      display_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      count: Joi.number(),

      min: Joi.number(),

      query_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      value: Joi.string().allow(""),

      max: Joi.number(),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      key: this.ProductFiltersKey().required(),

      values: Joi.array().items(this.ProductFiltersValue()).required(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: this.Page().required(),

      sort_on: Joi.array().items(this.ProductSortOn()),

      items: Joi.array().items(this.ProductListingDetail()),

      filters: Joi.array().items(this.ProductFilters()),
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
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      action: this.ProductListingAction(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      logo: this.Media(),

      banners: this.ImageUrls(),
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
      uid: Joi.number(),

      banners: this.ImageUrls(),

      logo: this.Media(),

      name: Joi.string().allow(""),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: this.ProductListingAction(),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      banners: this.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: this.ProductListingAction(),

      childs: Joi.array().items(this.ThirdLevelChild()),

      _custom_json: Joi.any(),

      banners: this.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: this.ProductListingAction(),

      childs: Joi.array().items(this.SecondLevelChild()),

      _custom_json: Joi.any(),

      banners: this.ImageUrls(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      action: this.ProductListingAction(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(this.Child()),

      banners: this.ImageUrls(),
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
      uid: Joi.number(),

      banners: this.ImageUrls(),

      logo: this.Media(),

      name: Joi.string().allow(""),
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

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

      logo: this.Media(),
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

      logo: this.Media(),

      display: Joi.string().allow(""),

      action: this.ProductListingAction(),
    });
  }

  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(this.AutocompleteItem()),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: this.Media(),

      uid: Joi.string().allow(""),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: this.ImageUrls(),

      query: Joi.any(),

      description: Joi.string().allow(""),

      _schedule: Joi.any(),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      action: this.ProductListingAction(),

      allow_facets: Joi.boolean(),

      cron: Joi.any(),

      meta: Joi.any(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      type: Joi.array().items(this.CollectionListingFilterType()),

      tags: Joi.array().items(this.CollectionListingFilterTag()),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.GetCollectionDetailNest()),

      page: this.Page().required(),

      filters: this.CollectionListingFilter(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      query: Joi.any(),

      name: Joi.string().allow(""),

      badge: Joi.any(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      logo: this.Media(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      banners: this.ImageUrls(),

      meta: Joi.any(),

      cron: Joi.any(),
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
      message: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
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

      collections: Joi.array().items(Joi.number()),

      products: Joi.array().items(Joi.number()),
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

      type: Joi.string().allow(""),
    });
  }

  static Store1() {
    return Joi.object({
      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      lat_long: this.LatLong(),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.Store1()).required(),

      page: this.Page().required(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),
    });
  }

  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      query: this.ActionQuery(),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static Product() {
    return Joi.object({
      action: this.ProductAction(),

      type: Joi.string().allow(""),

      images: Joi.array().items(this.Image()),

      categories: Joi.array().items(this.CategoryInfo()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      brand: this.BaseInfo(),

      slug: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      add_on: Joi.number(),

      marked: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: this.ProductPrice(),

      base: this.ProductPrice(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
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
      price: this.ArticlePriceInfo(),

      type: Joi.string().allow(""),

      size: Joi.string().allow(""),

      store: this.BaseInfo(),

      seller: this.BaseInfo(),

      extra_meta: Joi.any(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      discount: Joi.string().allow(""),

      product: this.Product(),

      coupon_message: Joi.string().allow(""),

      price: this.ProductPriceInfo(),

      price_per_unit: this.ProductPriceInfo(),

      key: Joi.string().allow(""),

      article: this.ProductArticle(),

      message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      availability: this.ProductAvailability(),

      promo_meta: this.PromoMeta(),

      bulk_offer: Joi.any(),

      identifiers: this.CartProductIdentifer().required(),

      quantity: Joi.number(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static PromiseFormatted() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static PromiseTimestamp() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static ShipmentPromise() {
    return Joi.object({
      formatted: this.PromiseFormatted(),

      timestamp: this.PromiseTimestamp(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      discount: Joi.number(),

      delivery_charge: Joi.number(),

      convenience_fee: Joi.number(),

      fynd_cash: Joi.number(),

      cod_charge: Joi.number(),

      mrp_total: Joi.string().allow(""),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      you_saved: Joi.number(),

      subtotal: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      type: Joi.string().allow(""),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      is_applied: Joi.boolean(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(this.DisplayBreakup()),

      raw: this.RawBreakup(),

      loyalty_points: this.LoyaltyPoints(),

      coupon: this.CouponBreakup(),
    });
  }

  static CartResponse() {
    return Joi.object({
      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      payment_selection_lock: this.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(this.CartProductInfo()),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      currency: this.CartCurrency(),

      delivery_promise: this.ShipmentPromise(),

      breakup_values: this.CartBreakup(),

      gstin: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_assignment: Joi.any(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      seller_id: Joi.number(),

      item_id: Joi.number(),

      display: Joi.string().allow(""),

      extra_meta: Joi.any(),

      pos: Joi.boolean(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),
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

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      item_id: Joi.number(),

      identifiers: this.CartProductIdentifer().required(),

      extra_meta: Joi.any(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static UpdateCartRequest() {
    return Joi.object({
      operation: Joi.string().allow("").required(),

      items: Joi.array().items(this.UpdateProductCart()),
    });
  }

  static UpdateCartResponse() {
    return Joi.object({
      cart: this.CartResponse(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      is_applied: Joi.boolean(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static GetCouponResponse() {
    return Joi.object({
      available_coupon_list: Joi.array().items(this.Coupon()),

      page: this.PageCoupon(),
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

      bulk_effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      price: this.OfferPrice(),

      type: Joi.string().allow(""),

      margin: Joi.number(),

      best: Joi.boolean(),

      quantity: Joi.number(),

      total: Joi.number(),

      auto_applied: Joi.boolean(),
    });
  }

  static OfferSeller() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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

  static RewardPointRequest() {
    return Joi.object({
      points: Joi.boolean().required(),
    });
  }

  static GeoLocation() {
    return Joi.object({
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      google_map_point: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      geo_location: this.GeoLocation(),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      meta: Joi.any(),

      phone: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      country_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default_address: Joi.boolean(),
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
      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

      is_updated: Joi.boolean(),

      address_id: Joi.number(),
    });
  }

  static DeleteAddressResponse() {
    return Joi.object({
      is_deleted: Joi.boolean(),

      address_id: Joi.number(),
    });
  }

  static SelectCartAddressRequest() {
    return Joi.object({
      uid: Joi.string().allow(""),

      billing_address_id: Joi.number(),

      address_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      uid: Joi.number(),

      aggregator_name: Joi.string().allow(""),

      address_id: Joi.number(),
    });
  }

  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),

      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow(""),

      code: Joi.string().allow(""),

      valid: Joi.boolean(),
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
      shipment_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      items: Joi.array().items(this.CartProductInfo()),

      fulfillment_id: Joi.number(),

      order_type: Joi.string().allow(""),

      promise: this.ShipmentPromise(),

      box_type: Joi.string().allow(""),

      shipments: Joi.number(),

      dp_options: Joi.any(),

      dp_id: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      payment_selection_lock: this.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      currency: this.CartCurrency(),

      delivery_promise: this.ShipmentPromise(),

      error: Joi.boolean(),

      breakup_values: this.CartBreakup(),

      shipments: Joi.array().items(this.ShipmentResponse()),

      gstin: Joi.string().allow(""),
    });
  }

  static CartCheckoutRequest() {
    return Joi.object({
      payment_params: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      ordering_store: Joi.number(),

      billing_address_id: Joi.number(),

      delivery_address: Joi.any(),

      fyndstore_emp_id: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      staff: Joi.any(),

      billing_address: Joi.any(),

      payment_identifier: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      meta: Joi.any(),

      callback_url: Joi.string().allow(""),

      extra_meta: Joi.any(),

      aggregator: Joi.string().allow(""),

      address_id: Joi.number(),
    });
  }

  static CheckCart() {
    return Joi.object({
      payment_selection_lock: this.PaymentSelectionLock(),

      order_id: Joi.string().allow(""),

      currency: this.CartCurrency(),

      store_code: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      gstin: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      cod_charges: Joi.number(),

      items: Joi.array().items(this.CartProductInfo()),

      delivery_promise: this.ShipmentPromise(),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      comment: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      cart_id: Joi.number(),

      error_message: Joi.string().allow(""),

      message: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      success: Joi.boolean(),

      cod_available: Joi.boolean(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      data: Joi.any(),

      order_id: Joi.string().allow(""),

      cart: this.CheckCart(),

      message: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),
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
      uid: Joi.number().required(),

      meta: Joi.any(),
    });
  }

  static GetShareCartLinkResponse() {
    return Joi.object({
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      source: Joi.any(),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      payment_selection_lock: this.PaymentSelectionLock(),

      shared_cart_details: this.SharedCartDetails(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(this.CartProductInfo()),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      currency: this.CartCurrency(),

      delivery_promise: this.ShipmentPromise(),

      breakup_values: this.CartBreakup(),

      gstin: Joi.string().allow(""),
    });
  }

  static SharedCartResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      cart: this.SharedCart(),
    });
  }

  static LocationDefaultLanguage() {
    return Joi.object({
      name: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static LocationDefaultCurrency() {
    return Joi.object({
      name: Joi.string().allow(""),

      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static LocationCountry() {
    return Joi.object({
      capital: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      iso2: Joi.string().allow(""),

      iso3: Joi.string().allow(""),

      name: Joi.string().allow(""),

      parent: Joi.string().allow(""),

      phone_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      __v: Joi.number(),

      _id: Joi.string().allow(""),

      default_currency: this.LocationDefaultCurrency(),

      default_language: this.LocationDefaultLanguage(),
    });
  }

  static Locations() {
    return Joi.object({
      items: Joi.array().items(this.LocationCountry()),
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
      items: Joi.array().items(this.TicketHistory()),

      page: this.Page(),
    });
  }

  static CustomFormList() {
    return Joi.object({
      items: Joi.array().items(this.CustomForm()),

      page: this.Page(),
    });
  }

  static CreateCustomFormPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      inputs: Joi.array().items(Joi.any()).required(),

      description: Joi.string().allow(""),

      header_image: Joi.string().allow(""),

      priority: Joi.any().required(),

      should_notify: Joi.boolean(),

      success_message: Joi.string().allow(""),

      poll_for_assignment: this.PollForAssignment(),
    });
  }

  static EditCustomFormPayload() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      inputs: Joi.array().items(Joi.any()).required(),

      description: Joi.string().allow(""),

      priority: Joi.any().required(),

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

      sub_category: Joi.string().allow(""),

      source: Joi.string().allow(""),

      status: Joi.string().allow(""),

      priority: Joi.any(),

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

      notify: Joi.array().items(this.NotifyUser()),
    });
  }

  static NotifyUser() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      phone_number: Joi.string().allow("").required(),
    });
  }

  static Filter() {
    return Joi.object({
      priorities: Joi.array().items(this.Priority()).required(),

      categories: Joi.array().items(this.TicketCategory()),

      statuses: Joi.array().items(this.Status()).required(),

      assignees: Joi.array().items(Joi.any()).required(),
    });
  }

  static TicketHistoryPayload() {
    return Joi.object({
      value: Joi.any().required(),

      type: Joi.any().required(),
    });
  }

  static CustomFormSubmissionPayload() {
    return Joi.object({
      response: Joi.array().items(this.KeyValue()).required(),

      attachments: Joi.array().items(this.TicketAsset()),
    });
  }

  static KeyValue() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.any().required(),
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

      type: Joi.any().required(),
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
      created_by: Joi.any(),

      status: Joi.string().allow(""),

      priority: Joi.any(),

      category: Joi.string().allow("").required(),

      content: this.TicketContent().required(),
    });
  }

  static Priority() {
    return Joi.object({
      key: this.PriorityEnum().required(),

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

      sub_categories: Joi.array().items(this.TicketSubCategory()),

      feedback_form: this.TicketFeedbackForm(),
    });
  }

  static TicketSubCategory() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),
    });
  }

  static TicketFeedbackForm() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      display: Joi.array().items(Joi.any()),
    });
  }

  static TicketFeedbackList() {
    return Joi.object({
      items: Joi.array().items(this.TicketFeedback()),
    });
  }

  static TicketFeedbackPayload() {
    return Joi.object({
      form_response: Joi.any(),
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

      priority: this.Priority().required(),

      login_required: Joi.boolean().required(),

      should_notify: Joi.boolean().required(),

      success_message: Joi.string().allow(""),

      submit_button: this.SubmitButton(),

      inputs: Joi.array().items(Joi.any()).required(),

      created_on: this.CreatedOn(),

      created_by: Joi.any(),

      poll_for_assignment: this.PollForAssignment(),

      _id: Joi.string().allow("").required(),
    });
  }

  static FeedbackResponseItem() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static TicketFeedback() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow("").required(),

      company_id: Joi.string().allow("").required(),

      response: Joi.array().items(this.FeedbackResponseItem()).required(),

      category: Joi.string().allow(""),

      user: Joi.any(),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static TicketHistory() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.any().required(),

      ticket_id: Joi.string().allow("").required(),

      created_on: this.CreatedOn(),

      created_by: Joi.any(),

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

      sub_category: this.TicketSubCategory(),

      source: Joi.any().required(),

      status: this.Status().required(),

      priority: this.Priority().required(),

      created_by: Joi.any(),

      assigned_to: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      is_feedback_pending: Joi.boolean(),

      _id: Joi.string().allow("").required(),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  /*
        Enum: PriorityEnum
        Used By: Lead
    */
  static PriorityEnum() {
    return Joi.string().valid(
      "low",

      "medium",

      "high"
    );
  }

  /*
        Enum: HistoryTypeEnum
        Used By: Lead
    */
  static HistoryTypeEnum() {
    return Joi.string().valid(
      "rating",

      "log",

      "comment"
    );
  }

  /*
        Enum: TicketAssetType
        Used By: Lead
    */
  static TicketAssetType() {
    return Joi.string().valid(
      "image",

      "video",

      "file",

      "youtube",

      "product",

      "collection",

      "brand",

      "shipment",

      "order"
    );
  }

  /*
        Enum: TicketSourceEnum
        Used By: Lead
    */
  static TicketSourceEnum() {
    return Joi.string().valid(
      "platform_panel",

      "sales_channel"
    );
  }

  static AvailablePageSchema() {
    return Joi.object({
      value: Joi.string().allow(""),

      text: Joi.string().allow(""),

      path: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sections: Joi.array().items(this.AvailablePageSchemaSections()),

      sections_meta: Joi.array().items(
        this.AvailablePageSectionMetaAttributes()
      ),

      theme: Joi.string().allow(""),

      seo: this.AvailablePageSeo(),

      props: Joi.array().items(Joi.any()),

      _id: Joi.string().allow(""),
    });
  }

  static AvailablePageSectionMetaAttributes() {
    return Joi.object({
      attributes: Joi.any(),
    });
  }

  static AvailablePageSeo() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static AvailablePageSchemaSections() {
    return Joi.object({
      name: Joi.string().allow(""),

      label: Joi.string().allow(""),

      props: Joi.any(),

      blocks: Joi.array().items(Joi.any()),

      preset: Joi.any(),

      predicate: this.AvailablePagePredicate(),
    });
  }

  static AvailablePageScreenPredicate() {
    return Joi.object({
      mobile: Joi.boolean(),

      desktop: Joi.boolean(),

      tablet: Joi.boolean(),
    });
  }

  static AvailablePageUserPredicate() {
    return Joi.object({
      authenticated: Joi.boolean(),

      anonymous: Joi.boolean(),
    });
  }

  static AvailablePageRoutePredicate() {
    return Joi.object({
      selected: Joi.string().allow(""),

      exact_url: Joi.string().allow(""),

      query: Joi.any(),
    });
  }

  static AvailablePagePredicate() {
    return Joi.object({
      screen: this.AvailablePageScreenPredicate(),

      user: this.AvailablePageUserPredicate(),

      route: this.AvailablePageRoutePredicate(),
    });
  }

  static AllAvailablePageSchema() {
    return Joi.object({
      pages: Joi.array().items(this.AvailablePageSchema()),
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

  static ThemesListingResponseSchema() {
    return Joi.object({
      items: Joi.array().items(this.ThemesSchema()),

      page: this.PaginationSchema(),
    });
  }

  static AddThemeRequestSchema() {
    return Joi.object({
      theme_id: Joi.string().allow(""),
    });
  }

  static UpgradableThemeSchema() {
    return Joi.object({
      parent_theme: Joi.string().allow(""),

      applied_theme: Joi.string().allow(""),

      upgrade: Joi.boolean(),
    });
  }

  static FontsSchema() {
    return Joi.object({
      items: this.FontsSchemaItems(),

      kind: Joi.string().allow(""),
    });
  }

  static BlitzkriegApiErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BlitzkriegNotFoundSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BlitzkriegInternalServerErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static FontsSchemaItems() {
    return Joi.object({
      family: Joi.string().allow(""),

      variants: Joi.array().items(Joi.string().allow("")),

      subsets: Joi.array().items(Joi.string().allow("")),

      version: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      files: this.FontsSchemaItemsFiles(),

      category: Joi.string().allow(""),

      kind: Joi.string().allow(""),
    });
  }

  static FontsSchemaItemsFiles() {
    return Joi.object({
      regular: Joi.string().allow(""),

      italic: Joi.string().allow(""),

      bold: Joi.string().allow(""),
    });
  }

  static ThemesSchema() {
    return Joi.object({
      application: Joi.string().allow(""),

      applied: Joi.boolean(),

      customized: Joi.boolean(),

      published: Joi.boolean(),

      archived: Joi.boolean(),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      version: Joi.string().allow(""),

      parent_theme_version: Joi.string().allow(""),

      parent_theme: Joi.string().allow(""),

      information: this.Information(),

      tags: Joi.array().items(Joi.string().allow("")),

      src: this.Src(),

      assets: this.AssetsSchema(),

      available_sections: Joi.array().items(this.availableSectionSchema()),

      constants: Joi.any(),

      styles: Joi.any(),

      config: this.Config(),

      settings: Joi.any(),

      font: this.Font(),

      _id: Joi.string().allow(""),

      __v: Joi.number(),

      colors: this.Colors(),
    });
  }

  static availableSectionSchema() {
    return Joi.object({
      blocks: Joi.array().items(this.Blocks()),

      name: Joi.string().allow(""),

      label: Joi.string().allow(""),

      props: Joi.array().items(this.BlocksProps()),
    });
  }

  static Information() {
    return Joi.object({
      images: this.Images(),

      features: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static Images() {
    return Joi.object({
      desktop: Joi.array().items(Joi.string().allow("")),

      android: Joi.array().items(Joi.string().allow("")),

      ios: Joi.array().items(Joi.string().allow("")),

      thumbnail: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Src() {
    return Joi.object({
      link: Joi.string().allow(""),
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
      link: Joi.string().allow(""),
    });
  }

  static CommonJs() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }

  static Css() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }

  static Seo() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static Sections() {
    return Joi.object({
      attributes: Joi.string().allow(""),
    });
  }

  static Config() {
    return Joi.object({
      preset: this.Preset(),

      global_schema: this.GlobalSchema(),

      current: Joi.string().allow(""),

      list: Joi.array().items(this.ListSchemaItem()),
    });
  }

  static Preset() {
    return Joi.object({
      pages: Joi.array().items(this.AvailablePageSchema()),
    });
  }

  static GlobalSchema() {
    return Joi.object({
      props: Joi.array().items(this.GlobalSchemaProps()),
    });
  }

  static ListSchemaItem() {
    return Joi.object({
      global: Joi.any(),

      page: Joi.array().items(this.ConfigPage()),

      name: Joi.string().allow(""),
    });
  }

  static Colors() {
    return Joi.object({
      bg_color: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      secondary_color: Joi.string().allow(""),

      accent_color: Joi.string().allow(""),

      link_color: Joi.string().allow(""),

      button_secondary_color: Joi.string().allow(""),
    });
  }

  static Custom() {
    return Joi.object({
      props: Joi.any(),
    });
  }

  static ConfigPage() {
    return Joi.object({
      settings: Joi.any(),

      page: Joi.string().allow(""),
    });
  }

  static Font() {
    return Joi.object({
      family: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      file: Joi.string().allow(""),
    });
  }

  static SemiBold() {
    return Joi.object({
      name: Joi.string().allow(""),

      file: Joi.string().allow(""),
    });
  }

  static Bold() {
    return Joi.object({
      name: Joi.string().allow(""),

      file: Joi.string().allow(""),
    });
  }

  static Light() {
    return Joi.object({
      name: Joi.string().allow(""),

      file: Joi.string().allow(""),
    });
  }

  static Regular() {
    return Joi.object({
      name: Joi.string().allow(""),

      file: Joi.string().allow(""),
    });
  }

  static Blocks() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      props: Joi.array().items(this.BlocksProps()),
    });
  }

  static GlobalSchemaProps() {
    return Joi.object({
      id: Joi.string().allow(""),

      label: Joi.string().allow(""),

      type: Joi.string().allow(""),

      category: Joi.string().allow(""),
    });
  }

  static BlocksProps() {
    return Joi.object({
      id: Joi.string().allow(""),

      label: Joi.string().allow(""),

      type: Joi.string().allow(""),
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

      mobile: this.EditProfileMobileSchema(),

      country_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      dob: Joi.string().allow(""),

      profile_pic_url: Joi.string().allow(""),

      android_hash: Joi.string().allow(""),

      sender: Joi.string().allow(""),

      register_token: Joi.string().allow(""),
    });
  }

  static EditProfileMobileSchema() {
    return Joi.object({
      phone: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
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

  static VerifyEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),

      action: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      otp: Joi.string().allow(""),
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

      captcha_code: Joi.string().allow(""),
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

  static UserObjectSchema() {
    return Joi.object({
      user: this.UserSchema(),
    });
  }

  static AuthSuccess() {
    return Joi.object({
      register_token: Joi.string().allow(""),

      user_exists: Joi.boolean(),

      user: this.UserSchema(),
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

      email: Joi.string().allow(""),

      resend_email_token: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      verify_email_otp: Joi.boolean(),

      verify_mobile_otp: Joi.boolean(),

      user_exists: Joi.boolean(),
    });
  }

  static ProfileEditSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      register_token: Joi.string().allow(""),

      user_exists: Joi.boolean(),

      verify_email_link: Joi.boolean(),

      verify_email_otp: Joi.boolean(),

      verify_mobile_otp: Joi.boolean(),

      email: Joi.string().allow(""),
    });
  }

  static LoginSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      request_id: Joi.string().allow(""),

      register_token: Joi.string().allow(""),
    });
  }

  static VerifyOtpSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      user_exists: Joi.boolean(),

      register_token: Joi.string().allow(""),
    });
  }

  static ResetPasswordSuccess() {
    return Joi.object({
      status: Joi.string().allow(""),
    });
  }

  static RegisterFormSuccess() {
    return Joi.object({
      email: Joi.string().allow(""),

      resend_timer: Joi.number(),

      resend_token: Joi.string().allow(""),

      resend_email_token: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      verify_email_otp: Joi.boolean(),

      verify_mobile_otp: Joi.boolean(),

      user_exists: Joi.boolean(),
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

      register_token: Joi.string().allow(""),

      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static EmailOtpSuccess() {
    return Joi.object({
      success: Joi.boolean(),
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

  static AuthenticationInternalServerErrorSchema() {
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

      meta: Joi.any(),
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

      cookie: Joi.any(),
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
      email: this.PlatformEmail(),

      mobile: this.PlatformMobile(),
    });
  }

  static PlatformEmail() {
    return Joi.object({
      is_required: Joi.boolean(),

      level: Joi.string().allow(""),
    });
  }

  static PlatformMobile() {
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

      meta: Joi.any(),
    });
  }

  static UserSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      meta: Joi.any(),

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

  static ApplicationLegal() {
    return Joi.object({
      application: Joi.string().allow(""),

      tnc: Joi.string().allow(""),

      policy: Joi.string().allow(""),

      shipping: Joi.string().allow(""),

      faq: Joi.array().items(this.ApplicationLegalFAQ()),

      _id: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static ApplicationLegalFAQ() {
    return Joi.object({
      question: Joi.string().allow(""),

      answer: Joi.string().allow(""),
    });
  }

  static SeoComponent() {
    return Joi.object({
      seo: this.SeoSchema(),
    });
  }

  static SeoSchema() {
    return Joi.object({
      app: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      robots_txt: Joi.string().allow(""),

      sitemap_enabled: Joi.boolean(),

      custom_meta_tags: Joi.array().items(Joi.any()),

      details: this.Detail(),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static CustomMetaTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      content: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static Detail() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static AnnouncementPageSchema() {
    return Joi.object({
      page_slug: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static EditorMeta() {
    return Joi.object({
      foreground_color: Joi.string().allow(""),

      background_color: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      content: Joi.string().allow(""),
    });
  }

  static AnnouncementAuthorSchema() {
    return Joi.object({
      created_by: Joi.string().allow(""),

      modified_by: Joi.string().allow(""),
    });
  }

  static AdminAnnouncementSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      platforms: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

      announcement: Joi.string().allow(""),

      pages: Joi.array().items(this.AnnouncementPageSchema()),

      editor_meta: this.EditorMeta(),

      author: this.AnnouncementAuthorSchema(),

      created_at: Joi.string().allow(""),

      app: Joi.string().allow(""),

      modified_at: Joi.string().allow(""),

      _schedule: this.ScheduleSchema(),
    });
  }

  static ScheduleSchema() {
    return Joi.object({
      cron: Joi.string().allow(""),

      start: Joi.string().allow(""),

      end: Joi.string().allow(""),

      duration: Joi.number(),

      next_schedule: Joi.array().items(Joi.any()),
    });
  }

  static NextSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow(""),
    });
  }

  static AnnouncementSchema() {
    return Joi.object({
      announcement: Joi.string().allow(""),

      schedule: this.ScheduleStartSchema(),
    });
  }

  static ScheduleStartSchema() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow(""),
    });
  }

  static BlogGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.BlogSchema()),

      page: this.Page(),
    });
  }

  static ResourceContent() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static Asset() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      id: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static Author() {
    return Joi.object({
      designation: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static BlogSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      application: Joi.string().allow(""),

      archived: Joi.boolean(),

      author: this.Author(),

      content: Joi.array().items(this.ResourceContent()),

      feature_image: this.Asset(),

      published: Joi.boolean(),

      reading_time: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      seo: this.SEO(),

      _schedule: this.CronSchedule(),

      title: Joi.string().allow(""),

      date_meta: this.DateMeta(),
    });
  }

  static SEO() {
    return Joi.object({
      description: Joi.string().allow(""),

      image: this.SEOImage(),

      title: Joi.string().allow(""),
    });
  }

  static SEOImage() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static BlogRequest() {
    return Joi.object({
      application: Joi.string().allow(""),

      _custom_json: Joi.any(),

      author: this.Author(),

      content: Joi.array().items(this.ResourceContent()),

      feature_image: this.Asset(),

      published: Joi.boolean(),

      reading_time: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      data: this.AdminAnnouncementSchema(),
    });
  }

  static Navigation() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      orientation: Joi.string().allow(""),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      _id: Joi.string().allow(""),

      position: Joi.string().allow(""),

      application: Joi.string().allow(""),

      platform: Joi.string().allow(""),

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
      display: Joi.string().allow(""),
    });
  }

  static Action() {
    return Joi.object({
      page: this.ActionPage(),

      popup: this.ActionPage(),

      type: Joi.string().allow(""),
    });
  }

  static ActionPage() {
    return Joi.object({
      params: Joi.object().pattern(
        /wd/,
        Joi.array().items(Joi.string().allow(""))
      ),

      query: Joi.object().pattern(
        /wd/,
        Joi.array().items(Joi.string().allow(""))
      ),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static NavigationReference() {
    return Joi.object({
      acl: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      _locale_language: this.LocaleLanguage(),

      image: Joi.string().allow(""),

      type: Joi.string().allow(""),

      action: this.Action(),

      active: Joi.boolean(),

      display: Joi.string().allow(""),

      sort_order: Joi.number(),

      sub_navigation: Joi.array().items(this.NavigationReference()),
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

      slide_direction: Joi.string().allow(""),
    });
  }

  static SlideshowMedia() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      bg_color: Joi.string().allow(""),

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
      announcements: Joi.object().pattern(
        /wd/,
        Joi.array().items(this.AnnouncementSchema())
      ),

      refresh_rate: Joi.number(),

      refresh_pages: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FaqResponseSchema() {
    return Joi.object({
      faqs: Joi.array().items(this.FaqSchema()),
    });
  }

  static UpdateHandpickedSchema() {
    return Joi.object({
      tag: this.HandpickedTagSchema(),
    });
  }

  static HandpickedTagSchema() {
    return Joi.object({
      position: Joi.string().allow(""),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      content: Joi.string().allow(""),
    });
  }

  static RemoveHandpickedSchema() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CreateTagSchema() {
    return Joi.object({
      name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      position: Joi.string().allow(""),

      attributes: Joi.any(),

      content: Joi.string().allow(""),
    });
  }

  static CreateTagRequestSchema() {
    return Joi.object({
      tags: Joi.array().items(this.CreateTagSchema()),
    });
  }

  static APIError() {
    return Joi.object({
      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      info: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static CategorySchema() {
    return Joi.object({
      index: Joi.number(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      children: Joi.array().items(Joi.string().allow("")),

      _id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      application: Joi.string().allow(""),

      icon_url: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static ChildrenSchema() {
    return Joi.object({
      question: Joi.string().allow(""),

      answer: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      application: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static CategoryRequestSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static FAQCategorySchema() {
    return Joi.object({
      index: Joi.number(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      children: Joi.array().items(this.ChildrenSchema()),

      _id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      application: Joi.string().allow(""),

      icon_url: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static FaqSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),

      application: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      question: Joi.string().allow(""),

      answer: Joi.string().allow(""),
    });
  }

  static FAQ() {
    return Joi.object({
      slug: Joi.string().allow(""),

      question: Joi.string().allow(""),

      answer: Joi.string().allow(""),
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
      faqs: Joi.array().items(Joi.any()),
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
      items: Joi.array().items(this.LandingPageSchema()),

      page: this.Page(),
    });
  }

  static LandingPageSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),

      action: this.Action(),

      platform: Joi.array().items(Joi.string().allow("")),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      _id: Joi.string().allow(""),

      application: Joi.string().allow(""),

      archived: Joi.boolean(),

      _custom_json: Joi.any(),
    });
  }

  static DefaultNavigationResponse() {
    return Joi.object({
      items: Joi.array().items(this.NavigationSchema()),
    });
  }

  static NavigationGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.NavigationSchema()),

      page: this.Page(),
    });
  }

  static Orientation() {
    return Joi.object({
      portrait: Joi.array().items(Joi.string().allow("")),

      landscape: Joi.array().items(Joi.string().allow("")),
    });
  }

  static NavigationSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      application: Joi.string().allow(""),

      archived: Joi.boolean(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      platform: Joi.array().items(Joi.string().allow("")),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      orientation: this.Orientation(),

      version: Joi.number(),

      navigation: Joi.array().items(this.NavigationReference()),
    });
  }

  static NavigationRequest() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      platform: Joi.array().items(Joi.string().allow("")),

      orientation: this.Orientation(),

      navigation: Joi.array().items(this.NavigationReference()),
    });
  }

  static CustomPageSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      title: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      orientation: Joi.string().allow(""),

      application: Joi.string().allow(""),

      description: Joi.string().allow(""),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      content: Joi.array().items(Joi.any()),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      _schedule: this.ScheduleSchema(),
    });
  }

  static ContentSchema() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static CustomPage() {
    return Joi.object({
      data: this.CustomPageSchema(),
    });
  }

  static FeatureImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
    });
  }

  static PageGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.PageSchema()),

      page: this.Page(),
    });
  }

  static PageSpec() {
    return Joi.object({
      specifications: Joi.array().items(Joi.any()),
    });
  }

  static PageSpecParam() {
    return Joi.object({
      key: Joi.string().allow(""),

      required: Joi.boolean(),
    });
  }

  static PageSpecItem() {
    return Joi.object({
      page_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      params: Joi.array().items(this.PageSpecParam()),

      query: Joi.array().items(this.PageSpecParam()),
    });
  }

  static PageSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      application: Joi.string().allow(""),

      component_ids: Joi.array().items(Joi.string().allow("")),

      content: Joi.array().items(this.PageContent()),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      description: Joi.string().allow(""),

      feature_image: this.Asset(),

      page_meta: Joi.array().items(this.PageMeta()),

      _schedule: this.ScheduleSchema(),

      _custom_json: Joi.any(),

      orientation: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      published: Joi.boolean(),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      seo: this.SEO(),

      visibility: Joi.any(),
    });
  }

  static CreatedBySchema() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }

  static PageContent() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static PageMeta() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static PageRequest() {
    return Joi.object({
      _schedule: this.CronSchedule(),

      application: Joi.string().allow(""),

      author: this.Author(),

      _custom_json: Joi.any(),

      orientation: Joi.string().allow(""),

      content: Joi.array().items(Joi.any()),

      feature_image: this.Asset(),

      published: Joi.boolean(),

      reading_time: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      seo: this.SEO(),

      title: Joi.string().allow(""),
    });
  }

  static CronSchedule() {
    return Joi.object({
      cron: Joi.string().allow(""),

      start: Joi.string().allow(""),

      end: Joi.string().allow(""),

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
      system_pages: Joi.array().items(this.NavigationSchema()),

      custom_pages: Joi.array().items(this.PageSchema()),

      application_id: Joi.string().allow(""),
    });
  }

  static SlideshowGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.SlideshowSchema()),

      page: this.Page(),
    });
  }

  static SlideshowSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      date_meta: this.DateMeta(),

      application: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      configuration: this.ConfigurationSchema(),

      media: Joi.array().items(this.SlideshowMedia()),

      active: Joi.boolean(),

      archived: Joi.boolean(),

      _custom_json: Joi.any(),
    });
  }

  static SlideshowRequest() {
    return Joi.object({
      slug: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      configuration: this.ConfigurationSchema(),

      media: this.SlideshowMedia(),

      active: Joi.boolean(),
    });
  }

  static Support() {
    return Joi.object({
      created: Joi.boolean(),

      _id: Joi.string().allow(""),

      config_type: Joi.string().allow(""),

      application: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      contact: this.ContactSchema(),
    });
  }

  static PhoneProperties() {
    return Joi.object({
      key: Joi.string().allow(""),

      code: Joi.string().allow(""),

      number: Joi.string().allow(""),
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
      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
      application: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      tags: Joi.array().items(this.TagSchema()),
    });
  }

  static TagSchema() {
    return Joi.object({
      name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      position: Joi.string().allow(""),

      attributes: Joi.any(),

      content: Joi.string().allow(""),
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

      meta: Joi.any(),

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

  static FailedResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static CDN() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    });
  }

  static Upload() {
    return Joi.object({
      expiry: Joi.number().required(),

      url: Joi.string().allow("").required(),
    });
  }

  static StartResponse() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),

      file_path: Joi.string().allow("").required(),

      content_type: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      namespace: Joi.string().allow("").required(),

      operation: Joi.string().allow("").required(),

      size: Joi.number().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static StartRequest() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),

      content_type: Joi.string().allow("").required(),

      size: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      params: Joi.any(),
    });
  }

  static CompleteResponse() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      file_name: Joi.string().allow("").required(),

      file_path: Joi.string().allow("").required(),

      content_type: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      namespace: Joi.string().allow("").required(),

      operation: Joi.string().allow("").required(),

      size: Joi.number().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      success: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),
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
      id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      data: this.BulkRequest().required(),

      opts: this.Opts().required(),

      progress: Joi.number().required(),

      delay: Joi.number().required(),

      timestamp: Joi.number().required(),

      attempts_made: Joi.number().required(),

      stacktrace: Joi.array().items(Joi.string().allow("")),

      finished_on: Joi.number().required(),

      processed_on: Joi.number().required(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      tracking_url: Joi.string().allow("").required(),

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
      namespace: Joi.string().allow("").required(),

      rewrite: Joi.string().allow("").required(),

      basepath: Joi.string().allow(""),
    });
  }

  static BulkRequest() {
    return Joi.object({
      urls: Joi.array().items(Joi.string().allow("")).required(),

      destination: this.Destination().required(),

      configuration: this.ReqConfiguration(),
    });
  }

  static Urls() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      signed_url: Joi.string().allow("").required(),

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

      urls: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static DbRecord() {
    return Joi.object({
      success: Joi.boolean().required(),

      tags: Joi.array().items(Joi.string().allow("")).required(),

      _id: Joi.string().allow("").required(),

      file_name: Joi.string().allow("").required(),

      operation: Joi.string().allow(""),

      namespace: Joi.string().allow("").required(),

      content_type: Joi.string().allow("").required(),

      file_path: Joi.string().allow("").required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),
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
      uid: Joi.number().required(),
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

  static AppTokenResponse() {
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

      params: Joi.any(),

      query: Joi.any(),
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
      facebook: this.FacebookLink(),

      instagram: this.InstagramLink(),

      twitter: this.TwitterLink(),

      pinterest: this.PinterestLink(),

      google_plus: this.GooglePlusLink(),

      youtube: this.YoutubeLink(),

      linked_in: this.LinkedInLink(),

      vimeo: this.VimeoLink(),

      blog_link: this.BlogLink(),
    });
  }

  static FacebookLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static InstagramLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static TwitterLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static PinterestLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static GooglePlusLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static YoutubeLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static LinkedInLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static VimeoLink() {
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

  static AggregatorConfigDetail() {
    return Joi.object({
      api: Joi.string().allow(""),

      merchant_key: Joi.string().allow(""),

      merchant_id: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      verify_api: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      sdk: Joi.boolean(),

      secret: Joi.string().allow("").required(),

      user_id: Joi.string().allow(""),

      pin: Joi.string().allow(""),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      rupifi: this.AggregatorConfigDetail(),

      ccavenue: this.AggregatorConfigDetail(),

      stripe: this.AggregatorConfigDetail(),

      payumoney: this.AggregatorConfigDetail(),

      mswipe: this.AggregatorConfigDetail(),

      simpl: this.AggregatorConfigDetail(),

      razorpay: this.AggregatorConfigDetail(),

      juspay: this.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      env: Joi.string().allow("").required(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
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

      name_on_card: Joi.string().allow(""),

      nickname: Joi.string().allow(""),
    });
  }

  static AttachCardsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),

      data: Joi.any().required(),
    });
  }

  static CardPaymentGateway() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      api: Joi.string().allow(""),

      customer_id: Joi.string().allow(""),
    });
  }

  static ActiveCardPaymentGatewayResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      cards: this.CardPaymentGateway().required(),
    });
  }

  static Card() {
    return Joi.object({
      card_isin: Joi.string().allow(""),

      card_id: Joi.string().allow(""),

      card_reference: Joi.string().allow(""),

      card_type: Joi.string().allow(""),

      card_name: Joi.string().allow(""),

      nickname: Joi.string().allow(""),

      card_token: Joi.string().allow(""),

      exp_year: Joi.number(),

      card_brand_image: Joi.string().allow(""),

      expired: Joi.boolean(),

      card_fingerprint: Joi.string().allow(""),

      card_brand: Joi.string().allow(""),

      exp_month: Joi.number(),

      card_number: Joi.string().allow(""),

      aggregator_name: Joi.string().allow("").required(),

      card_issuer: Joi.string().allow(""),
    });
  }

  static ListCardsResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      data: Joi.array().items(this.Card()),
    });
  }

  static DeletehCardRequest() {
    return Joi.object({
      card_id: Joi.string().allow("").required(),
    });
  }

  static DeleteCardsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),
    });
  }

  static ValidateCustomerRequest() {
    return Joi.object({
      payload: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      transaction_amount_in_paise: Joi.number().required(),

      merchant_params: Joi.any().required(),

      phone_number: Joi.string().allow("").required(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      data: Joi.any().required(),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      transaction_token: Joi.string().allow(""),

      verified: Joi.boolean(),

      order_id: Joi.string().allow("").required(),

      amount: Joi.number().required(),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      cart_id: Joi.string().allow(""),

      aggregator: Joi.string().allow("").required(),

      delivery_address_id: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      razorpay_payment_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      polling_url: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      timeout: Joi.number().required(),

      virtual_id: Joi.string().allow(""),

      merchant_order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      razorpay_payment_id: Joi.string().allow(""),

      aggregator: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      polling_url: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow(""),

      customer_id: Joi.string().allow(""),

      bqr_image: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      status: Joi.string().allow(""),

      amount: Joi.number(),

      success: Joi.boolean().required(),

      virtual_id: Joi.string().allow(""),

      merchant_order_id: Joi.string().allow("").required(),

      timeout: Joi.number(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      contact: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      retry: Joi.boolean().required(),

      aggregator_name: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string().allow("").required(),

      small: Joi.string().allow("").required(),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      intent_flow: Joi.string().allow(""),

      nickname: Joi.string().allow(""),

      card_token: Joi.string().allow(""),

      fynd_vpa: Joi.string().allow(""),

      name: Joi.string().allow(""),

      aggregator_name: Joi.string().allow("").required(),

      display_priority: Joi.number(),

      card_id: Joi.string().allow(""),

      exp_year: Joi.number(),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_number: Joi.string().allow(""),

      card_reference: Joi.string().allow(""),

      retry_count: Joi.number(),

      card_name: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      card_fingerprint: Joi.string().allow(""),

      code: Joi.string().allow(""),

      card_issuer: Joi.string().allow(""),

      card_isin: Joi.string().allow(""),

      card_type: Joi.string().allow(""),

      card_brand_image: Joi.string().allow(""),

      expired: Joi.boolean(),

      display_name: Joi.string().allow(""),

      card_brand: Joi.string().allow(""),

      timeout: Joi.number(),

      exp_month: Joi.number(),

      logo_url: this.PaymentModeLogo(),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      list: Joi.array().items(this.PaymentModeList()),

      display_priority: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      add_card_enabled: Joi.boolean(),

      name: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow(""),

      anonymous_enable: Joi.boolean(),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      api_link: Joi.string().allow(""),

      data: Joi.any(),

      payment_flow: Joi.string().allow(""),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      rupifi: this.AggregatorRoute(),

      upi_razorpay: this.AggregatorRoute(),

      msipe: this.AggregatorRoute(),

      bqr_razorpay: this.AggregatorRoute(),

      payubiz: this.AggregatorRoute(),

      ccavenue: this.AggregatorRoute(),

      stripe: this.AggregatorRoute(),

      simpl: this.AggregatorRoute(),

      razorpay: this.AggregatorRoute(),

      juspay: this.AggregatorRoute(),

      fynd: this.AggregatorRoute(),
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

  static RupifiBannerData() {
    return Joi.object({
      kyc_url: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static RupifiBannerResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: this.RupifiBannerData().required(),
    });
  }

  static TransferItemsDetails() {
    return Joi.object({
      logo_small: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      display_name: Joi.boolean(),

      name: Joi.string().allow("").required(),

      logo_large: Joi.string().allow("").required(),
    });
  }

  static TransferModeDetails() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      items: Joi.array().items(this.TransferItemsDetails()),
    });
  }

  static TransferModeResponse() {
    return Joi.object({
      data: Joi.array().items(this.TransferModeDetails()).required(),
    });
  }

  static UpdateRefundTransferModeRequest() {
    return Joi.object({
      transfer_mode: Joi.string().allow("").required(),

      enable: Joi.boolean().required(),
    });
  }

  static UpdateRefundTransferModeResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      mobile: Joi.boolean(),

      transfer_mode: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      branch_name: Joi.boolean(),

      account_holder: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      comment: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array()
        .items(this.OrderBeneficiaryDetails())
        .required(),

      show_beneficiary_details: Joi.boolean(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      branch_name: Joi.string().allow("").required(),

      success: Joi.boolean(),

      bank_name: Joi.string().allow("").required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationRequest() {
    return Joi.object({
      hash_key: Joi.string().allow("").required(),

      otp: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationResponse() {
    return Joi.object({
      hash_key: Joi.string().allow("").required(),

      otp: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").required(),
    });
  }

  static WrongOtpError() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      success: Joi.string().allow("").required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      address: Joi.string().allow(""),

      branch_name: Joi.string().allow("").required(),

      wallet: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      vpa: Joi.string().allow(""),

      account_holder: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      delights: Joi.boolean().required(),

      request_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      details: this.BeneficiaryModeDetails().required(),

      order_id: Joi.string().allow("").required(),

      otp: Joi.string().allow(""),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      data: Joi.any(),
    });
  }

  static WalletOtpRequest() {
    return Joi.object({
      mobile: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static WalletOtpResponse() {
    return Joi.object({
      is_verified_flag: Joi.string().allow("").required(),

      success: Joi.boolean(),

      request_id: Joi.string().allow("").required(),
    });
  }

  static SetDefaultBeneficiaryRequest() {
    return Joi.object({
      beneficiary_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
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
      items: Joi.array().items(this.OrderSchema()).required(),

      page: this.OrderPage().required(),

      filters: this.OrderFilters().required(),
    });
  }

  static OrderPage() {
    return Joi.object({
      item_total: Joi.number(),

      type: Joi.string().allow(""),

      size: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static OrderFilters() {
    return Joi.object({
      statuses: Joi.array().items(this.OrderStatuses()),

      months: Joi.array().items(this.OrderMonths()),
    });
  }

  static OrderStatuses() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.number(),

      is_selected: Joi.boolean(),
    });
  }

  static OrderMonths() {
    return Joi.object({
      from_date: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      to_date: Joi.string().allow(""),

      value: Joi.number(),
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
      statuses: Joi.array().items(this.StatusesBody()).required(),

      force_transition: Joi.boolean().required(),
    });
  }

  static StatusesBody() {
    return Joi.object({
      status: Joi.string().allow(""),

      shipments: Joi.any(),
    });
  }

  static ShipmentStatusUpdate() {
    return Joi.object({
      message: Joi.array().items(Joi.any()).required(),

      status: Joi.boolean().required(),
    });
  }

  static ShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(this.Track()).required(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(this.BreakupValues()),

      order_created_time: Joi.string().allow(""),

      shipments: Joi.array().items(this.Shipments()),

      total_shipments_in_order: Joi.number(),

      user_info: this.UserInfo(),

      bags_for_reorder: Joi.array().items(this.BagsForReorder()),
    });
  }

  static BagsForReorder() {
    return Joi.object({
      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      store_id: Joi.number(),

      seller_id: Joi.number(),

      quantity: Joi.number(),

      article_assignment: this.BagsForReorderArticleAssignment(),
    });
  }

  static BagsForReorderArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
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

      current_status: this.CurrentStatus(),

      id: Joi.number(),

      financial_breakup: Joi.array().items(this.FinancialBreakup()),
    });
  }

  static Item() {
    return Joi.object({
      brand: this.ItemBrand(),

      name: Joi.string().allow(""),

      size: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      id: Joi.number(),
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
      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      name: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      gst_fee: Joi.string().allow(""),

      refund_credit: Joi.number(),

      cashback: Joi.number(),

      refund_amount: Joi.number(),

      value_of_good: Joi.number(),

      promotion_effective_discount: Joi.number(),

      size: Joi.string().allow(""),

      total_units: Joi.number(),

      discount: Joi.number(),

      amount_paid: Joi.number(),

      fynd_credits: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      delivery_charge: Joi.number(),

      hsn_code: Joi.string().allow(""),

      coupon_effective_discount: Joi.number(),

      transfer_price: Joi.number(),

      identifiers: this.Identifiers(),

      gst_tag: Joi.string().allow(""),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      item_name: Joi.string().allow(""),

      cashback_applied: Joi.number(),

      gst_tax_percentage: Joi.number(),
    });
  }

  static Identifiers() {
    return Joi.object({
      ean: Joi.string().allow(""),

      sku_code: Joi.string().allow(""),
    });
  }

  static ItemBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static BreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      pincode: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      email: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),
    });
  }

  static Promise() {
    return Joi.object({
      timestamp: this.Timestamp(),
    });
  }

  static Timestamp() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static Reasons() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      show_text_area: Joi.boolean(),

      feedback_type: Joi.string().allow(""),

      flow: Joi.string().allow(""),

      reason_id: Joi.number(),

      priority: Joi.number(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(this.BreakupValues()),

      track_url: Joi.string().allow(""),

      traking_no: Joi.string().allow(""),

      tracking_details: Joi.array().items(this.TrackingDetails()),

      beneficiary_details: Joi.boolean(),

      can_return: Joi.boolean(),

      prices: this.Prices(),

      need_help_url: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      total_bags: Joi.number(),

      delivery_address: this.DeliveryAddress(),

      invoice: this.Invoice(),

      comment: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      promise: this.Promise(),

      fulfilling_store: this.FulfillingStore(),

      bags: Joi.array().items(this.Bags()),

      can_cancel: Joi.boolean(),

      payment: this.ShipmentPayment(),

      shipment_created_at: Joi.string().allow(""),

      shipment_status: this.ShipmentStatus(),

      user_info: this.ShipmentUserInfo(),

      size_info: Joi.any(),

      total_details: this.ShipmentTotalDetails(),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      total_price: Joi.number(),

      sizes: Joi.number(),

      pieces: Joi.number(),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static Track() {
    return Joi.object({
      awb: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),

      status: Joi.string().allow(""),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),
    });
  }

  static UserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ActionPageParams() {
    return Joi.object({
      slug: Joi.array().items(Joi.string().allow("")),
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

      currency: Joi.string().allow(""),

      display_absolute: Joi.string().allow(""),

      display_percent: Joi.string().allow(""),

      percent: Joi.number(),
    });
  }

  static Error() {
    return Joi.object({
      code: Joi.number(),

      exception: Joi.string().allow(""),

      info: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static Offer() {
    return Joi.object({
      _schedule: this.Schedule(),

      active: Joi.boolean(),

      application_id: Joi.string().allow(""),

      banner_image: this.Asset(),

      created_at: Joi.string().allow(""),

      name: Joi.string().allow(""),

      rule: Joi.any(),

      share: this.ShareMessages(),

      sub_text: Joi.string().allow(""),

      text: Joi.string().allow(""),

      type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      updated_by: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static OrderDiscountRequest() {
    return Joi.object({
      currency: Joi.string().allow(""),

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

      value_type: Joi.string().allow(""),
    });
  }

  static PointsHistory() {
    return Joi.object({
      _id: Joi.string().allow(""),

      application_id: Joi.string().allow(""),

      claimed: Joi.boolean(),

      created_at: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      meta: Joi.string().allow(""),

      points: Joi.number(),

      remaining_points: Joi.number(),

      text_1: Joi.string().allow(""),

      text_2: Joi.string().allow(""),

      text_3: Joi.string().allow(""),

      txn_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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
      device_id: Joi.string().allow("").required(),

      referral_code: Joi.string().allow("").required(),
    });
  }

  static RedeemReferralCodeResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      points: Joi.number(),

      redeemed: Joi.boolean(),

      referrer_id: Joi.string().allow(""),

      referrer_info: Joi.string().allow(""),
    });
  }

  static ReferralDetailsResponse() {
    return Joi.object({
      referral: this.Offer(),

      referrer_info: Joi.string().allow(""),

      share: this.ShareMessages(),

      user: this.ReferralDetailsUser(),
    });
  }

  static ReferralDetailsUser() {
    return Joi.object({
      blocked: Joi.boolean(),

      points: Joi.number(),

      redeemed: Joi.boolean(),

      referral_code: Joi.string().allow(""),
    });
  }

  static RewardsArticle() {
    return Joi.object({
      id: Joi.string().allow(""),

      points: Joi.number(),

      price: Joi.number(),
    });
  }

  static Schedule() {
    return Joi.object({
      cron: Joi.string().allow(""),

      duration: Joi.number(),

      end: Joi.string().allow(""),

      start: Joi.string().allow(""),
    });
  }

  static ShareMessages() {
    return Joi.object({
      email: Joi.string().allow(""),

      facebook: Joi.string().allow(""),

      fallback: Joi.string().allow(""),

      message: Joi.string().allow(""),

      messenger: Joi.string().allow(""),

      sms: Joi.string().allow(""),

      text: Joi.string().allow(""),

      twitter: Joi.string().allow(""),

      whatsapp: Joi.string().allow(""),
    });
  }

  static AbuseReport() {
    return Joi.object({
      abused: Joi.boolean(),

      date_meta: this.DateMeta(),

      description: Joi.string().allow(""),

      entity: this.Entity(),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      entity_id: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      media_list: Joi.array().items(this.AddMediaRequest()),

      ref_id: Joi.string().allow(""),

      ref_type: Joi.string().allow(""),
    });
  }

  static AddMediaRequest() {
    return Joi.object({
      cloud_id: Joi.string().allow(""),

      cloud_name: Joi.string().allow(""),

      cloud_provider: Joi.string().allow(""),

      entity_id: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      media_url: Joi.string().allow(""),

      ref_id: Joi.string().allow(""),

      ref_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      thumbnail_url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ApplicationSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }

  static Attribute() {
    return Joi.object({
      date_meta: this.DateMeta(),

      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(this.TagMeta()),
    });
  }

  static AttributeObject() {
    return Joi.object({
      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      title: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value: Joi.number().required(),
    });
  }

  static AttributeResponse() {
    return Joi.object({
      items: Joi.array().items(this.Attribute()),

      page: this.Page(),
    });
  }

  static AutoDetectors() {
    return Joi.object({
      text_detector: Joi.array().items(this.TextDetector()),
    });
  }

  static CheckEligibilityResponse() {
    return Joi.object({
      access: this.Access(),
    });
  }

  static Cloud() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      provider: Joi.string().allow(""),
    });
  }

  static Comment() {
    return Joi.object({
      comment: Joi.array().items(Joi.string().allow("")),

      date_meta: this.DateMeta(),

      entity: this.Entity(),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      comment: Joi.array().items(Joi.string().allow("")).required(),

      entity_id: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),
    });
  }

  static CreateQNARequest() {
    return Joi.object({
      choices: Joi.array().items(Joi.string().allow("")),

      entity_id: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

      max_len: Joi.number(),

      sort_priority: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      text: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static CreatedBy() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tags: Joi.array().items(this.TagMeta()),
    });
  }

  static CursorGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),

      page: this.Page(),
    });
  }

  static CustomerReview() {
    return Joi.object({
      auto_detectors: this.AutoDetectors(),

      created_on: Joi.string().allow(""),

      device_meta: this.DeviceMeta(),

      entity: this.ProductEntity(),

      id: Joi.string().allow(""),

      location_meta: this.LocationMeta(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      rating: this.ReviewRating(),

      review: this.Review(),

      slug: Joi.string().allow(""),

      state: this.State(),

      tags: Joi.array().items(this.TagMeta()),

      template: this.Template(),

      vote_count: this.VoteCount(),
    });
  }

  static DeviceMeta() {
    return Joi.object({
      app_version: Joi.string().allow(""),

      platform: Joi.string().allow(""),
    });
  }

  static Entity() {
    return Joi.object({
      id: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static EntityMeta() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static FeedbackError() {
    return Joi.object({
      code: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      request_id: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static FeedbackMedia() {
    return Joi.object({
      application: this.ApplicationSchema(),

      cloud: this.Cloud(),

      created_by: this.CreatedBy(),

      date_meta: this.DateMeta(),

      description: Joi.string().allow(""),

      entity: this.Entity(),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      reference: this.Entity(),

      state: this.MediaState(),

      tags: Joi.array().items(this.TagMeta()),

      type: Joi.string().allow(""),

      url: this.Url(),
    });
  }

  static FeedbackState() {
    return Joi.object({
      active: Joi.boolean(),

      archive: Joi.boolean(),

      media: Joi.string().allow(""),

      qna: Joi.boolean(),

      rating: Joi.boolean(),

      review: Joi.boolean(),
    });
  }

  static GeoLoc() {
    return Joi.object({
      latitude: Joi.string().allow(""),

      longitude: Joi.string().allow(""),
    });
  }

  static InsertResponse() {
    return Joi.object({
      ids: Joi.string().allow(""),
    });
  }

  static Location() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      flag_url: Joi.string().allow(""),

      geo_loc: this.GeoLoc(),

      name: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
    });
  }

  static LocationMeta() {
    return Joi.object({
      demand: this.Location(),

      supply: this.Location(),
    });
  }

  static MediaGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.FeedbackMedia()),

      page: this.Page(),
    });
  }

  static MediaMeta() {
    return Joi.object({
      cloud: this.Cloud(),

      comment: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      type: Joi.string().allow(""),

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
      items: Joi.array().items(Joi.any()),

      page: this.PageNumber(),
    });
  }

  static PageNumber() {
    return Joi.object({
      current: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static ProductEntity() {
    return Joi.object({
      id: Joi.string().allow(""),

      meta: this.EntityMeta(),

      type: Joi.string().allow(""),
    });
  }

  static QNA() {
    return Joi.object({
      comments: Joi.array().items(this.Comment()),

      date_meta: this.DateMeta(),

      entity: this.Entity(),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      question: this.Question(),

      state: this.QNAState(),

      tag: Joi.array().items(Joi.string().allow("")),

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
      choices: Joi.array().items(Joi.string().allow("")),

      max_len: Joi.number(),

      text: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static Rating() {
    return Joi.object({
      attributes: Joi.array().items(this.Attribute()),

      attributes_slugs: Joi.array().items(Joi.string().allow("")),

      ui: this.UI(),
    });
  }

  static RatingGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.Rating()),

      page: this.Page(),
    });
  }

  static RatingMetric() {
    return Joi.object({
      avg: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      description: Joi.string().allow(""),

      entity_id: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),
    });
  }

  static Review() {
    return Joi.object({
      answer_ids: Joi.array().items(Joi.string().allow("")),

      comments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      media_meta: Joi.array().items(this.MediaMeta()),

      title: Joi.string().allow(""),
    });
  }

  static ReviewFacet() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      selected: Joi.boolean(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ReviewGetResponse() {
    return Joi.object({
      facets: Joi.array().items(this.ReviewFacet()),

      items: Joi.array().items(this.CustomerReview()),

      page: this.Page(),

      sort: Joi.array().items(this.SortMethod()),
    });
  }

  static ReviewMediaMeta() {
    return Joi.object({
      max_count: Joi.number(),

      size: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static ReviewMetric() {
    return Joi.object({
      attribute_metric: Joi.array().items(this.RatingMetric()),

      created_on: Joi.string().allow(""),

      entity: this.Entity(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      rating_avg: Joi.number(),

      rating_count: Joi.number(),

      rating_metric: Joi.array().items(this.RatingMetric()),

      review_count: Joi.number(),
    });
  }

  static ReviewMetricGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.ReviewMetric()),

      page: this.Page(),
    });
  }

  static ReviewRating() {
    return Joi.object({
      attributes: Joi.array().items(this.AttributeObject()),

      value: Joi.number(),
    });
  }

  static SaveAttributeRequest() {
    return Joi.object({
      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),
    });
  }

  static SortMethod() {
    return Joi.object({
      name: Joi.string().allow(""),

      selected: Joi.boolean(),

      type: Joi.string().allow(""),
    });
  }

  static State() {
    return Joi.object({
      active: Joi.boolean(),

      approve: Joi.boolean(),

      auto_decided: Joi.boolean(),

      status: Joi.number(),
    });
  }

  static TagMeta() {
    return Joi.object({
      media: Joi.array().items(this.MediaMeta()),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static Template() {
    return Joi.object({
      date_meta: this.DateMeta(),

      entity: this.Entity(),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      rating: this.Rating(),

      review: this.TemplateReview(),

      state: this.FeedbackState(),
    });
  }

  static TemplateGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.Template()),

      page: this.Page(),
    });
  }

  static TemplateReview() {
    return Joi.object({
      description: Joi.string().allow(""),

      header: Joi.string().allow(""),

      image_meta: this.ReviewMediaMeta(),

      title: Joi.string().allow(""),

      video_meta: this.ReviewMediaMeta(),

      vote_allowed: Joi.boolean(),
    });
  }

  static TextDetector() {
    return Joi.object({
      confidence: Joi.number(),

      text: Joi.string().allow(""),

      text_class: Joi.string().allow(""),

      text_type: Joi.string().allow(""),
    });
  }

  static UI() {
    return Joi.object({
      feedback_question: Joi.array().items(Joi.string().allow("")),

      icon: this.UIIcon(),

      text: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static UIIcon() {
    return Joi.object({
      active: Joi.string().allow(""),

      inactive: Joi.string().allow(""),

      selected: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UpdateAbuseStatusRequest() {
    return Joi.object({
      abusive: Joi.boolean(),

      active: Joi.boolean(),

      approve: Joi.boolean(),

      description: Joi.string().allow(""),

      entity_id: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAttributeRequest() {
    return Joi.object({
      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),
    });
  }

  static UpdateCommentRequest() {
    return Joi.object({
      active: Joi.boolean(),

      approve: Joi.boolean(),

      comment: Joi.array().items(Joi.string().allow("")).required(),

      id: Joi.string().allow("").required(),
    });
  }

  static UpdateMediaListRequest() {
    return Joi.object({
      approve: Joi.boolean(),

      archive: Joi.boolean(),

      entity_type: Joi.string().allow(""),

      ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UpdateQNARequest() {
    return Joi.object({
      active: Joi.boolean(),

      approve: Joi.boolean(),

      choices: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UpdateResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }

  static UpdateReviewRequest() {
    return Joi.object({
      active: Joi.boolean(),

      application: Joi.string().allow(""),

      approve: Joi.boolean(),

      archive: Joi.boolean(),

      attributes_rating: Joi.array().items(this.AttributeObject()),

      description: Joi.string().allow(""),

      device_meta: this.DeviceMeta(),

      entity_id: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      media_resource: Joi.array().items(this.MediaMeta()),

      rating: Joi.number(),

      review_id: Joi.string().allow(""),

      template_id: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static UpdateVoteRequest() {
    return Joi.object({
      action: Joi.string().allow(""),

      active: Joi.boolean(),

      id: Joi.string().allow(""),

      ref_id: Joi.string().allow(""),

      ref_type: Joi.string().allow(""),
    });
  }

  static Url() {
    return Joi.object({
      main: Joi.string().allow(""),

      thumbnail: Joi.string().allow(""),
    });
  }

  static Vote() {
    return Joi.object({
      action: Joi.string().allow(""),

      date_meta: this.DateMeta(),

      entity: this.Entity(),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      action: Joi.string().allow(""),

      entity_id: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      ref_id: Joi.string().allow(""),

      ref_type: Joi.string().allow(""),
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
      quantity: Joi.number(),

      article_uid: Joi.string().allow("").required(),

      shipment_type: Joi.string().allow("").required(),
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
      staff: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      pos: Joi.boolean(),

      ordering_store: Joi.number(),

      billing_address_id: Joi.number(),

      delivery_address: Joi.any(),

      merchant_code: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      payment_params: Joi.any(),

      billing_address: Joi.any(),

      pick_at_store_uid: Joi.number(),

      meta: Joi.any(),

      address_id: Joi.number(),

      aggregator: Joi.string().allow(""),

      files: Joi.array().items(this.Files()),

      extra_meta: Joi.any(),

      order_type: Joi.string().allow("").required(),

      fyndstore_emp_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
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
      address: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      uid: Joi.number(),

      area: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),
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
      location_details: Joi.array().items(this.LocationDetailsReq()).required(),

      to_pincode: Joi.string().allow("").required(),

      action: Joi.string().allow(""),
    });
  }

  static LocationDetailsReq() {
    return Joi.object({
      from_pincode: Joi.string().allow(""),

      articles: Joi.array().items(this.TatReqProductArticles()),

      fulfillment_id: Joi.number(),
    });
  }

  static TatReqProductArticles() {
    return Joi.object({
      category: this.LogisticRequestCategory(),
    });
  }

  static LogisticRequestCategory() {
    return Joi.object({
      id: Joi.number(),

      level: Joi.string().allow(""),
    });
  }

  static GetTatProductResponse() {
    return Joi.object({
      location_details: Joi.array().items(this.LocationDetails()).required(),

      request_uuid: Joi.string().allow("").required(),

      error: Joi.any().required(),

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

  static LocationDetails() {
    return Joi.object({
      from_pincode: Joi.string().allow(""),

      articles: Joi.array().items(this.TatProductArticles()),

      fulfillment_id: Joi.number(),
    });
  }

  static TatProductArticles() {
    return Joi.object({
      error: Joi.any(),

      category: this.LogisticResponseCategory(),

      promise: this.LogisticPromise(),
    });
  }

  static LogisticResponseCategory() {
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
      storeId: Joi.number(),
    }).required();
  }

  static getProductPriceBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      storeId: Joi.number(),
    }).required();
  }

  static getProductSellersBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      strategy: Joi.string().allow(""),
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
      tag: Joi.array().items(Joi.string().allow("")),
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

  static unfollowById() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      collectionId: Joi.string().allow("").required(),
    }).required();
  }

  static followById() {
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

  static applyRewardPoints() {
    return Joi.object({
      uid: Joi.number(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: Validator.RewardPointRequest().required(),
    }).required();
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

class CommonValidator {
  static getLocations() {
    return Joi.object({
      locationType: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
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
      id: Joi.string().allow("").required(),
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

class ThemeValidator {
  static getAllPages() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static getPage() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  static getAppliedTheme() {
    return Joi.object({});
  }

  static getThemeForPreview() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
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
      body: Validator.VerifyEmailOtpRequestSchema().required(),
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

class ContentValidator {
  static getAnnouncements() {
    return Joi.object({});
  }

  static getBlog() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      rootId: Joi.string().allow(""),
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
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getFaqCategoryBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getFaqsByCategorySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
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
      slug: Joi.string().allow("").required(),
      rootId: Joi.string().allow(""),
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

  static getSlideshows() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  static getSlideshow() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
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

class FileStorageValidator {
  static startUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: Validator.StartRequest().required(),
    }).required();
  }

  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
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
      xApiToken: Joi.string().allow(""),
      refresh: Joi.boolean(),
    });
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

  static getRupifiBannerDetails() {
    return Joi.object({});
  }

  static getActiveRefundTransferModes() {
    return Joi.object({});
  }

  static enableOrDisableRefundTransferMode() {
    return Joi.object({
      body: Validator.UpdateRefundTransferModeRequest().required(),
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

class OrderValidator {
  static getOrders() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      orderStatus: Joi.number(),
    });
  }

  static getOrderById() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static getShipmentById() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  static getShipmentReasons() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  static updateShipmentStatus() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      body: Validator.ShipmentStatusUpdateBody().required(),
    }).required();
  }

  static trackShipment() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  static getPosOrderById() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }
}

class RewardsValidator {
  static getPointsOnProduct() {
    return Joi.object({
      body: Validator.CatalogueOrderRequest().required(),
    }).required();
  }

  static getOfferByName() {
    return Joi.object({
      name: Joi.string().allow("").required(),
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
      pageId: Joi.string().allow(""),
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
      entityId: Joi.string().allow("").required(),
      entityType: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
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
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static updateAttribute() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
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
      entityType: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
      entityId: Joi.string().allow(""),
      userId: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  static checkEligibility() {
    return Joi.object({
      entityType: Joi.string().allow("").required(),
      entityId: Joi.string().allow("").required(),
    }).required();
  }

  static deleteMedia() {
    return Joi.object({
      ids: Joi.array().items(Joi.string().allow("")).required(),
    }).required();
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
      entityType: Joi.string().allow("").required(),
      entityId: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  static getReviewSummaries() {
    return Joi.object({
      entityType: Joi.string().allow("").required(),
      entityId: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
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
      entityType: Joi.string().allow("").required(),
      entityId: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
      userId: Joi.string().allow(""),
      media: Joi.string().allow(""),
      rating: Joi.array().items(Joi.number()),
      attributeRating: Joi.array().items(Joi.string().allow("")),
      facets: Joi.boolean(),
      sort: Joi.string().allow(""),
      active: Joi.boolean(),
      approve: Joi.boolean(),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  static getTemplates() {
    return Joi.object({
      templateId: Joi.string().allow(""),
      entityId: Joi.string().allow(""),
      entityType: Joi.string().allow(""),
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
      entityType: Joi.string().allow("").required(),
      entityId: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
      userId: Joi.string().allow(""),
      showAnswer: Joi.boolean(),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  static getVotes() {
    return Joi.object({
      id: Joi.string().allow(""),
      refType: Joi.string().allow(""),
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
      articleId: Joi.string().allow(""),
      uid: Joi.number(),
      slug: Joi.string().allow(""),
    });
  }

  static applyRewardPoints() {
    return Joi.object({
      uid: Joi.number(),
      i: Joi.boolean(),
      b: Joi.boolean(),
      body: Validator.RewardPointRequest().required(),
    }).required();
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
  CommonValidator,
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
