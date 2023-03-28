const Joi = require("joi");

class CatalogModel {
  static ProductDetailAttribute() {
    return Joi.object({
      type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),

      title: Joi.string().allow(""),
    });
  }

  static ProductListingActionPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      query: Joi.any(),

      params: Joi.any(),
    });
  }

  static ProductListingAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      page: CatalogModel.ProductListingActionPage(),
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

      meta: CatalogModel.Meta(),

      alt: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l1: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static Price() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogModel.Price(),

      marked: CatalogModel.Price(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      action: CatalogModel.ProductListingAction(),

      category_map: CatalogModel.ProductCategoryMap(),

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      product_online_date: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      similars: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      rating: Joi.number(),

      attributes: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      short_description: Joi.string().allow(""),

      rating_count: Joi.number(),

      item_type: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      is_dependent: Joi.boolean(),

      _custom_json: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      teaser_tag: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      description: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      highlights: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.ApplicationItemSEO(),

      type: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow("").required(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
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
      col_3: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_3: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_2: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      title: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      unit: Joi.string().allow(""),

      description: Joi.string().allow(""),

      image: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),
    });
  }

  static Weight() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),
    });
  }

  static Dimension() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      height: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      is_available: Joi.boolean(),

      weight: CatalogModel.Weight(),

      quantity: Joi.number(),

      dimension: CatalogModel.Dimension(),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static ProductSizes() {
    return Joi.object({
      stores: CatalogModel.ProductSizeStores(),

      sellable: Joi.boolean(),

      multi_size: Joi.boolean(),

      size_chart: CatalogModel.SizeChart(),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static AttributeMetadata() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.AttributeDetail()),

      title: Joi.string().allow(""),
    });
  }

  static ProductsComparisonResponse() {
    return Joi.object({
      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      items: Joi.array().items(CatalogModel.ProductDetail()),
    });
  }

  static ProductCompareResponse() {
    return Joi.object({
      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      items: Joi.array().items(CatalogModel.ProductDetail()),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),
    });
  }

  static ProductFrequentlyComparedSimilarResponse() {
    return Joi.object({
      similars: CatalogModel.ProductCompareResponse(),
    });
  }

  static ProductVariantItemResponse() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      is_available: Joi.boolean(),

      color_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      color: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      value: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(CatalogModel.ProductVariantResponse()),
    });
  }

  static Seller() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CompanyDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      effective: Joi.number(),

      currency: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      seller: CatalogModel.Seller(),

      item_id: Joi.number(),

      company: CatalogModel.CompanyDetail(),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),

      store: CatalogModel.StoreDetail(),

      price: CatalogModel.ProductStockPrice(),

      identifier: Joi.any(),
    });
  }

  static ProductStockStatusResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductStockStatusItem()),
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

  static ProductStockPolling() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductStockStatusItem()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      total: Joi.number(),

      display_type: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      action: CatalogModel.ProductListingAction(),

      category_map: CatalogModel.ProductCategoryMap(),

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      product_online_date: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      similars: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      rating: Joi.number(),

      attributes: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      short_description: Joi.string().allow(""),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      identifiers: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      sellable: Joi.boolean(),

      item_type: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      is_dependent: Joi.boolean(),

      _custom_json: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      teaser_tag: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      description: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      highlights: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.ApplicationItemSEO(),

      type: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow("").required(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      query_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      is_selected: Joi.boolean().required(),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

      selected_min: Joi.number(),

      value: Joi.string().allow(""),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),

      key: CatalogModel.ProductFiltersKey().required(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static ImageUrls() {
    return Joi.object({
      landscape: CatalogModel.Media(),

      portrait: CatalogModel.Media(),
    });
  }

  static BrandItem() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static BrandListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.BrandItem()),

      page: CatalogModel.Page().required(),
    });
  }

  static BrandDetailResponse() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static CategoryBanner() {
    return Joi.object({
      landscape: CatalogModel.Media().required(),

      portrait: CatalogModel.Media().required(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static Child() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.CategoryBanner().required(),

      action: CatalogModel.ProductListingAction().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      uid: Joi.number().required(),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.CategoryItems()),

      department: Joi.string().allow("").required(),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryListingResponse() {
    return Joi.object({
      data: Joi.array().items(CatalogModel.DepartmentCategoryTree()),

      departments: Joi.array().items(CatalogModel.DepartmentIdentifier()),
    });
  }

  static CategoryMetaResponse() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      message: Joi.string().allow(""),
    });
  }

  static Department() {
    return Joi.object({
      priority_order: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Department()),
    });
  }

  static AutocompleteItem() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),
    });
  }

  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.AutocompleteItem()),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      tag: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),

      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      badge: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      meta: Joi.any(),

      priority: Joi.number(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      cron: Joi.any(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),

      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      page: CatalogModel.Page().required(),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      tag: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),

      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      badge: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      meta: Joi.any(),

      priority: Joi.number(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      cron: Joi.any(),
    });
  }

  static GetFollowListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()).required(),

      page: CatalogModel.Page().required(),
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

      collections: Joi.array().items(Joi.number()),

      brands: Joi.array().items(Joi.number()),
    });
  }

  static FollowIdsResponse() {
    return Joi.object({
      data: CatalogModel.FollowIdsData(),
    });
  }

  static LatLong() {
    return Joi.object({
      type: Joi.string().allow(""),

      coordinates: Joi.array().items(Joi.number()),
    });
  }

  static Store() {
    return Joi.object({
      store_email: Joi.string().allow(""),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Store()).required(),

      page: CatalogModel.Page().required(),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      latitude: Joi.number(),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static CompanyStore() {
    return Joi.object({
      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static StoreDepartments() {
    return Joi.object({
      priority_order: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static StoreManagerSerializer() {
    return Joi.object({
      mobile_no: CatalogModel.SellerPhoneNumber(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      address: CatalogModel.StoreAddressSerializer(),

      company: CatalogModel.CompanyStore(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      manager: CatalogModel.StoreManagerSerializer(),
    });
  }

  static ApplicationStoreListing() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.AppStore()),

      page: CatalogModel.Page(),

      filters: Joi.array().items(CatalogModel.StoreDepartments()),
    });
  }

  static Time() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static StoreTiming() {
    return Joi.object({
      opening: CatalogModel.Time(),

      open: Joi.boolean(),

      weekday: Joi.string().allow(""),

      closing: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      timing: Joi.array().items(CatalogModel.StoreTiming()),

      address: CatalogModel.StoreAddressSerializer(),

      company: CatalogModel.CompanyStore(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      manager: CatalogModel.StoreManagerSerializer(),
    });
  }

  static UserDetail() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),
    });
  }

  static ProductDetails() {
    return Joi.object({
      grouped_attributes: Joi.any(),

      name: Joi.any(),

      image_nature: Joi.any(),

      rating: Joi.number(),

      attributes: Joi.any(),

      hsn_code: Joi.number(),

      images: Joi.array().items(Joi.any()),

      short_description: Joi.any(),

      rating_count: Joi.number(),

      has_variant: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      description: Joi.any(),

      country_of_origin: Joi.any(),

      identifier: Joi.any(),

      is_set: Joi.boolean(),

      highlights: Joi.array().items(Joi.any()),

      template_tag: Joi.any(),

      item_code: Joi.any(),

      media: Joi.array().items(Joi.any()),

      slug: Joi.any(),

      brand_uid: Joi.number(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_marked: Joi.number(),

      currency: Joi.any(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      value: Joi.any(),

      display: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      product_uid: Joi.number().required(),

      min_quantity: Joi.number(),

      max_quantity: Joi.number().required(),

      product_details: CatalogModel.ProductDetails(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      price: CatalogModel.ProductGroupPrice(),

      sizes: Joi.array().items(CatalogModel.Size()),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      company_id: Joi.number(),

      choice: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      created_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      name: Joi.any().required(),

      _id: Joi.any(),

      slug: Joi.any(),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.any()),

      modified_by: CatalogModel.UserDetail(),

      meta: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static DetailsSchemaV3() {
    return Joi.object({
      type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
    });
  }

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      distance: Joi.number(),

      tat: Joi.number(),

      quantity: Joi.number(),

      pincode: Joi.number(),
    });
  }

  static ProductStockUnitPriceV3() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      price: Joi.number(),

      unit: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static StoreV3() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static SellerV3() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductSetDistributionSizeV3() {
    return Joi.object({
      size: Joi.string().allow(""),

      pieces: Joi.number(),
    });
  }

  static ProductSetDistributionV3() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.ProductSetDistributionSizeV3()),
    });
  }

  static ProductSetV3() {
    return Joi.object({
      size_distribution: CatalogModel.ProductSetDistributionV3(),

      quantity: Joi.number(),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      effective: Joi.number(),

      currency: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static ArticleAssignmentV3() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      discount: Joi.string().allow(""),

      pincode: Joi.number(),

      store: CatalogModel.StoreV3(),

      is_gift: Joi.boolean(),

      seller_count: Joi.number(),

      long_lat: Joi.array().items(Joi.number()),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      seller: CatalogModel.SellerV3(),

      item_type: Joi.string().allow(""),

      set: CatalogModel.ProductSetV3(),

      price: CatalogModel.ProductStockPriceV3(),

      is_cod: Joi.boolean(),

      special_badge: Joi.string().allow(""),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),
    });
  }

  static ProductSizeSellerFilterSchemaV3() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static ProductSizeSellersResponseV3() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),
    });
  }
}
module.exports = CatalogModel;
