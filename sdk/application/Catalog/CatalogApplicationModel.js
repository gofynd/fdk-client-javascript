const Joi = require("joi");

class CatalogModel {
  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      alt: Joi.string().allow(""),

      meta: CatalogModel.Meta(),
    });
  }

  static ProductListingActionPage() {
    return Joi.object({
      query: Joi.any(),

      type: Joi.string().allow(""),

      params: Joi.any(),
    });
  }

  static ProductListingAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      page: CatalogModel.ProductListingActionPage(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      logo: CatalogModel.Media(),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l2: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
    });
  }

  static Price() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      maximum: Joi.number(),

      increment_unit: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      brand: CatalogModel.ProductBrand(),

      discount: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      teaser_tag: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      category_map: CatalogModel.ProductCategoryMap(),

      tags: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      image_nature: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      net_quantity: CatalogModel.NetQuantity(),

      name: Joi.string().allow(""),

      attributes: Joi.any(),

      description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      medias: Joi.array().items(CatalogModel.Media()),

      price: CatalogModel.ProductListingPrice(),

      product_online_date: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      color: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      rating_count: Joi.number(),

      item_type: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      short_description: Joi.string().allow(""),
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
      col_2: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_2: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_4: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      image: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      title: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      description: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),
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

      weight: CatalogModel.Weight(),

      dimension: CatalogModel.Dimension(),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductSizes() {
    return Joi.object({
      stores: CatalogModel.ProductSizeStores(),

      discount: Joi.string().allow(""),

      size_chart: CatalogModel.SizeChart(),

      sellable: Joi.boolean(),

      multi_size: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      price: CatalogModel.ProductListingPrice(),
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
      items: Joi.array().items(CatalogModel.ProductDetail()),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),
    });
  }

  static ProductFrequentlyComparedSimilarResponse() {
    return Joi.object({
      similars: CatalogModel.ProductCompareResponse(),
    });
  }

  static ProductVariantItemResponse() {
    return Joi.object({
      medias: Joi.array().items(CatalogModel.Media()),

      color: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      is_available: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      value: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      color_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      header: Joi.string().allow(""),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(CatalogModel.ProductVariantResponse()),
    });
  }

  static StoreDetail() {
    return Joi.object({
      city: Joi.string().allow(""),

      code: Joi.string().allow(""),

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

  static Seller() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      currency: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      store: CatalogModel.StoreDetail(),

      item_id: Joi.number(),

      size: Joi.string().allow(""),

      quantity: Joi.number(),

      identifier: Joi.any(),

      uid: Joi.string().allow(""),

      company: CatalogModel.CompanyDetail(),

      seller: CatalogModel.Seller(),

      price: CatalogModel.ProductStockPrice(),
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
      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),

      total: Joi.number(),

      header: Joi.string().allow(""),

      key: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      brand: CatalogModel.ProductBrand(),

      discount: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      teaser_tag: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      category_map: CatalogModel.ProductCategoryMap(),

      tags: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      image_nature: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      net_quantity: CatalogModel.NetQuantity(),

      name: Joi.string().allow(""),

      attributes: Joi.any(),

      description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      medias: Joi.array().items(CatalogModel.Media()),

      price: CatalogModel.ProductListingPrice(),

      product_online_date: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      sellable: Joi.boolean(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      _custom_json: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      color: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      rating_count: Joi.number(),

      item_type: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      short_description: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),
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
      selected_max: Joi.number(),

      min: Joi.number(),

      selected_min: Joi.number(),

      count: Joi.number(),

      max: Joi.number(),

      query_format: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      display_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductFilters() {
    return Joi.object({
      key: CatalogModel.ProductFiltersKey().required(),

      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static ImageUrls() {
    return Joi.object({
      portrait: CatalogModel.Media(),

      landscape: CatalogModel.Media(),
    });
  }

  static BrandItem() {
    return Joi.object({
      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      discount: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

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
      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),
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
      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static CategoryBanner() {
    return Joi.object({
      portrait: CatalogModel.Media().required(),

      landscape: CatalogModel.Media().required(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.ProductListingAction().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      banners: CatalogModel.CategoryBanner().required(),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.CategoryItems()),

      department: Joi.string().allow("").required(),
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
      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static Department() {
    return Joi.object({
      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Department()),
    });
  }

  static AutocompleteItem() {
    return Joi.object({
      logo: CatalogModel.Media(),

      action: CatalogModel.ProductListingAction(),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      type: Joi.string().allow(""),
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
      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      meta: Joi.any(),

      _schedule: Joi.any(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      badge: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
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
      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),

      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      meta: Joi.any(),

      _schedule: Joi.any(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      badge: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
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
      brands: Joi.array().items(Joi.number()),

      products: Joi.array().items(Joi.number()),

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
      type: Joi.string().allow(""),

      coordinates: Joi.array().items(Joi.number()),
    });
  }

  static Store() {
    return Joi.object({
      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      pincode: Joi.number(),

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

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static StoreManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber(),

      name: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      longitude: Joi.number(),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      pincode: Joi.number(),
    });
  }

  static StoreDepartments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyStore() {
    return Joi.object({
      company_type: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      manager: CatalogModel.StoreManagerSerializer(),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      company: CatalogModel.CompanyStore(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
    });
  }

  static ApplicationStoreListing() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.AppStore()),

      filters: Joi.array().items(CatalogModel.StoreDepartments()),
    });
  }

  static Time() {
    return Joi.object({
      minute: Joi.number(),

      hour: Joi.number(),
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
      manager: CatalogModel.StoreManagerSerializer(),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      company: CatalogModel.CompanyStore(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
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
      media: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      rating: Joi.number(),

      brand_uid: Joi.number(),

      template_tag: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      out_of_stock: Joi.boolean(),

      name: Joi.string().allow(""),

      attributes: Joi.any(),

      description: Joi.string().allow(""),

      grouped_attributes: Joi.any(),

      identifier: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      rating_count: Joi.number(),

      hsn_code: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      short_description: Joi.string().allow(""),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_marked: Joi.number(),

      min_effective: Joi.number(),

      currency: Joi.string().allow(""),

      max_effective: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      product_details: CatalogModel.ProductDetails(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),

      product_uid: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.Size()),

      max_quantity: Joi.number().required(),

      price: CatalogModel.ProductGroupPrice(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      slug: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      _id: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static ArticleAssignmentV3() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      currency: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static ProductStockUnitPriceV3() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      price: Joi.number(),
    });
  }

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      quantity: Joi.number(),

      pincode: Joi.number(),

      distance: Joi.number(),

      tat: Joi.number(),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static DetailsSchemaV3() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),
    });
  }

  static ProductSetDistributionSizeV3() {
    return Joi.object({
      pieces: Joi.number(),

      size: Joi.string().allow(""),
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

  static SellerGroupAttributes() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),
    });
  }

  static StoreV3() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static SellerV3() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      is_cod: Joi.boolean(),

      discount: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      quantity: Joi.number(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      seller_count: Joi.number(),

      is_gift: Joi.boolean(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      article_id: Joi.string().allow(""),

      set: CatalogModel.ProductSetV3(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      price: CatalogModel.ProductStockPriceV3(),

      long_lat: Joi.array().items(Joi.number()),

      special_badge: Joi.string().allow(""),

      store: CatalogModel.StoreV3(),

      item_type: Joi.string().allow(""),

      pincode: Joi.number(),

      seller: CatalogModel.SellerV3(),
    });
  }

  static ProductSizeSellerFilterSchemaV3() {
    return Joi.object({
      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductSizeSellersResponseV3() {
    return Joi.object({
      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),
    });
  }
}
module.exports = CatalogModel;
