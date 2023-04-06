const Joi = require("joi");

class CatalogModel {
  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.any(),

      description: Joi.any(),
    });
  }

  static ProductListingActionPage() {
    return Joi.object({
      params: Joi.any(),

      query: Joi.any(),

      type: Joi.string().allow(""),
    });
  }

  static ProductListingAction() {
    return Joi.object({
      page: CatalogModel.ProductListingActionPage(),

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
      alt: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      meta: CatalogModel.Meta(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      value: Joi.string().allow(""),

      key: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l3: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),
    });
  }

  static Price() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogModel.Price(),

      marked: CatalogModel.Price(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static CustomMetaFields() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      rating: Joi.number(),

      seo: CatalogModel.ApplicationItemSEO(),

      color: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      rating_count: Joi.number(),

      category_map: CatalogModel.ProductCategoryMap(),

      price: CatalogModel.ProductListingPrice(),

      uid: Joi.number(),

      is_dependent: Joi.boolean(),

      has_variant: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      image_nature: Joi.string().allow(""),

      type: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      _custom_json: Joi.any(),

      short_description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),

      attributes: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantity(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static Dimension() {
    return Joi.object({
      height: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      is_default: Joi.boolean().required(),

      length: Joi.number().required(),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      dimension: CatalogModel.Dimension(),

      display: Joi.string().allow(""),

      weight: CatalogModel.Weight(),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_6: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

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
      col_6: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      headers: CatalogModel.ColumnHeaders(),

      size_tip: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      image: Joi.string().allow(""),
    });
  }

  static ProductSizes() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.ProductSize()),

      stores: CatalogModel.ProductSizeStores(),

      price: CatalogModel.ProductListingPrice(),

      size_chart: CatalogModel.SizeChart(),

      discount: Joi.string().allow(""),

      sellable: Joi.boolean(),

      multi_size: Joi.boolean(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static AttributeMetadata() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.AttributeDetail()),
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
      title: Joi.string().allow(""),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      subtitle: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductDetail()),
    });
  }

  static ProductFrequentlyComparedSimilarResponse() {
    return Joi.object({
      similars: CatalogModel.ProductCompareResponse(),
    });
  }

  static ProductVariantItemResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      color: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      medias: Joi.array().items(CatalogModel.Media()),

      color_name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(CatalogModel.ProductVariantResponse()),
    });
  }

  static StoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static CompanyDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static Seller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      store: CatalogModel.StoreDetail(),

      company: CatalogModel.CompanyDetail(),

      price: CatalogModel.ProductStockPrice(),

      uid: Joi.string().allow(""),

      item_id: Joi.number(),

      seller: CatalogModel.Seller(),

      quantity: Joi.number(),

      identifier: Joi.any(),

      size: Joi.string().allow(""),
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
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductStockStatusItem()),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      min: Joi.number(),

      selected_min: Joi.number(),

      query_format: Joi.string().allow(""),

      count: Joi.number(),

      currency_code: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      max: Joi.number(),

      selected_max: Joi.number(),

      is_selected: Joi.boolean().required(),

      value: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductFilters() {
    return Joi.object({
      key: CatalogModel.ProductFiltersKey().required(),

      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      header: Joi.string().allow(""),

      total: Joi.number(),

      display_type: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      seo: CatalogModel.ApplicationItemSEO(),

      color: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      sellable: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      rating_count: Joi.number(),

      category_map: CatalogModel.ProductCategoryMap(),

      price: CatalogModel.ProductListingPrice(),

      uid: Joi.number(),

      is_dependent: Joi.boolean(),

      has_variant: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      image_nature: Joi.string().allow(""),

      type: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      tags: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      _custom_json: Joi.any(),

      short_description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),

      attributes: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantity(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
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
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      discount: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static BrandListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.BrandItem()),
    });
  }

  static BrandDetailResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static CategoryBanner() {
    return Joi.object({
      landscape: CatalogModel.Media().required(),

      portrait: CatalogModel.Media().required(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number().required(),

      action: CatalogModel.ProductListingAction().required(),

      banners: CatalogModel.CategoryBanner().required(),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      department: Joi.string().allow("").required(),

      items: Joi.array().items(CatalogModel.CategoryItems()),
    });
  }

  static CategoryListingResponse() {
    return Joi.object({
      departments: Joi.array().items(CatalogModel.DepartmentIdentifier()),

      data: Joi.array().items(CatalogModel.DepartmentCategoryTree()),
    });
  }

  static CategoryMetaResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static Department() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      priority_order: Joi.number(),

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
      _custom_json: Joi.any(),

      type: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.AutocompleteItem()),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),

      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),
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
      slug: Joi.string().allow(""),

      meta: Joi.any(),

      badge: Joi.any(),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      cron: Joi.any(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      _schedule: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      meta: Joi.any(),

      badge: Joi.any(),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      cron: Joi.any(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      _schedule: Joi.any(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static GetFollowListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()).required(),
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
      products: Joi.array().items(Joi.number()),

      brands: Joi.array().items(Joi.number()),

      collections: Joi.array().items(Joi.number()),
    });
  }

  static FollowIdsResponse() {
    return Joi.object({
      data: CatalogModel.FollowIdsData(),
    });
  }

  static LatLong() {
    return Joi.object({
      coordinates: Joi.array().items(Joi.number()),

      type: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      address: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.Store()).required(),
    });
  }

  static StoreDepartments() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      priority_order: Joi.number(),

      logo: Joi.string().allow(""),
    });
  }

  static CompanyStore() {
    return Joi.object({
      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      longitude: Joi.number(),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static StoreManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber(),

      email: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      company: CatalogModel.CompanyStore(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      manager: CatalogModel.StoreManagerSerializer(),
    });
  }

  static ApplicationStoreListing() {
    return Joi.object({
      page: CatalogModel.Page(),

      filters: Joi.array().items(CatalogModel.StoreDepartments()),

      items: Joi.array().items(CatalogModel.AppStore()),
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
      open: Joi.boolean(),

      opening: CatalogModel.Time(),

      closing: CatalogModel.Time(),

      weekday: Joi.string().allow(""),
    });
  }

  static StoreDetails() {
    return Joi.object({
      company: CatalogModel.CompanyStore(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

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

  static Size() {
    return Joi.object({
      value: Joi.any(),

      display: Joi.any(),

      is_available: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      currency: Joi.any(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      max_effective: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      slug: Joi.any(),

      template_tag: Joi.any(),

      rating: Joi.number(),

      highlights: Joi.array().items(Joi.any()),

      identifier: Joi.any(),

      grouped_attributes: Joi.any(),

      out_of_stock: Joi.boolean(),

      country_of_origin: Joi.any(),

      rating_count: Joi.number(),

      media: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      has_variant: Joi.boolean(),

      image_nature: Joi.any(),

      images: Joi.array().items(Joi.any()),

      is_set: Joi.boolean(),

      name: Joi.any(),

      item_code: Joi.any(),

      short_description: Joi.any(),

      hsn_code: Joi.number(),

      description: Joi.any(),

      attributes: Joi.any(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      product_uid: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.Size()),

      allow_remove: Joi.boolean(),

      price: CatalogModel.ProductGroupPrice(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),

      product_details: CatalogModel.ProductDetails(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      slug: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      is_active: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.any()),

      meta: Joi.any(),

      _id: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      created_on: Joi.string().allow("").required(),

      choice: Joi.any(),

      company_id: Joi.number(),

      logo: Joi.string().allow("").allow(null),

      same_store_assignment: Joi.boolean(),

      verified_by: CatalogModel.UserDetail(),

      modified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static ProductStockUnitPriceV2() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      price: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static DetailsSchemaV2() {
    return Joi.object({
      value: Joi.string().allow(""),

      key: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV2() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),
    });
  }

  static ReturnConfigSchemaV2() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),
    });
  }

  static ProductStockPriceV2() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static ArticleAssignmentV2() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static SellerV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static StoreV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static StrategyWiseListingSchemaV2() {
    return Joi.object({
      pincode: Joi.number(),

      quantity: Joi.number(),

      tat: Joi.number(),

      distance: Joi.number(),
    });
  }

  static ProductSetDistributionSizeV2() {
    return Joi.object({
      pieces: Joi.number(),

      size: Joi.string().allow(""),
    });
  }

  static ProductSetDistributionV2() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.ProductSetDistributionSizeV2()),
    });
  }

  static ProductSetV2() {
    return Joi.object({
      size_distribution: CatalogModel.ProductSetDistributionV2(),

      quantity: Joi.number(),
    });
  }

  static ProductSizePriceResponseV2() {
    return Joi.object({
      price_per_unit: CatalogModel.ProductStockUnitPriceV2(),

      is_gift: Joi.boolean(),

      discount: Joi.string().allow(""),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV2()
      ),

      special_badge: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigSchemaV2(),

      pincode: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      item_type: Joi.string().allow(""),

      price_per_piece: CatalogModel.ProductStockPriceV2(),

      article_id: Joi.string().allow(""),

      price: CatalogModel.ProductStockPriceV2(),

      article_assignment: CatalogModel.ArticleAssignmentV2(),

      seller: CatalogModel.SellerV2(),

      seller_count: Joi.number(),

      store: CatalogModel.StoreV2(),

      quantity: Joi.number(),

      long_lat: Joi.array().items(Joi.number()),

      is_cod: Joi.boolean(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV2()
      ),

      set: CatalogModel.ProductSetV2(),
    });
  }

  static ProductSizeSellerFilterSchemaV2() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductSizeSellersResponseV2() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV2()
      ),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV2()),
    });
  }
}
module.exports = CatalogModel;
