const Joi = require("joi");

class CatalogModel {
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

      alt: Joi.string().allow(""),

      url: Joi.string().allow(""),

      meta: CatalogModel.Meta(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
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
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),

      title: Joi.string().allow(""),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static Price() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: CatalogModel.Price(),

      effective: CatalogModel.Price(),
    });
  }

  static CustomMetaFields() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l1: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      highlights: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.ProductListingAction(),

      image_nature: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      name: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating_count: Joi.number(),

      type: Joi.string().allow(""),

      rating: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media()),

      moq: CatalogModel.ApplicationItemMOQ(),

      is_dependent: Joi.boolean(),

      short_description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      color: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      seo: CatalogModel.ApplicationItemSEO(),

      category_map: CatalogModel.ProductCategoryMap(),

      discount: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),
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
      col_4: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_4: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_3: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      size_tip: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      image: Joi.string().allow(""),

      description: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      title: Joi.string().allow(""),
    });
  }

  static Dimension() {
    return Joi.object({
      height: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),

      width: Joi.number().required(),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      value: Joi.string().allow(""),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      dimension: CatalogModel.Dimension(),

      weight: CatalogModel.Weight(),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ProductSizes() {
    return Joi.object({
      sellable: Joi.boolean(),

      multi_size: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      size_chart: CatalogModel.SizeChart(),

      price: CatalogModel.ProductListingPrice(),

      discount: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.ProductSize()),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      display: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      key: Joi.string().allow(""),
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
      items: Joi.array().items(CatalogModel.ProductDetail()),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),
    });
  }

  static ProductCompareResponse() {
    return Joi.object({
      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      subtitle: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductDetail()),

      title: Joi.string().allow(""),
    });
  }

  static ProductFrequentlyComparedSimilarResponse() {
    return Joi.object({
      similars: CatalogModel.ProductCompareResponse(),
    });
  }

  static ProductVariantItemResponse() {
    return Joi.object({
      uid: Joi.number(),

      value: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      is_available: Joi.boolean(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      color_name: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      key: Joi.string().allow(""),

      header: Joi.string().allow(""),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(CatalogModel.ProductVariantResponse()),
    });
  }

  static CompanyDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static Seller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      uid: Joi.string().allow(""),

      company: CatalogModel.CompanyDetail(),

      item_id: Joi.number(),

      seller: CatalogModel.Seller(),

      size: Joi.string().allow(""),

      store: CatalogModel.StoreDetail(),

      identifier: Joi.any(),

      quantity: Joi.number(),

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
      items: Joi.array().items(CatalogModel.ProductStockStatusItem()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      query_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      value: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      selected_max: Joi.number(),

      count: Joi.number(),

      display_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      is_selected: Joi.boolean().required(),

      selected_min: Joi.number(),
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

  static ProductFilters() {
    return Joi.object({
      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),

      key: CatalogModel.ProductFiltersKey().required(),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),

      total: Joi.number(),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      header: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      highlights: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.ProductListingAction(),

      image_nature: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      name: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating_count: Joi.number(),

      type: Joi.string().allow(""),

      rating: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media()),

      sellable: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      is_dependent: Joi.boolean(),

      short_description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      color: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      seo: CatalogModel.ApplicationItemSEO(),

      category_map: CatalogModel.ProductCategoryMap(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      discount: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),
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
      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      uid: Joi.number(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CategoryBanner() {
    return Joi.object({
      portrait: CatalogModel.Media().required(),

      landscape: CatalogModel.Media().required(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number().required(),

      banners: CatalogModel.CategoryBanner().required(),

      action: CatalogModel.ProductListingAction().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      department: Joi.string().allow("").required(),

      items: Joi.array().items(CatalogModel.CategoryItems()),
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
      uid: Joi.number(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      message: Joi.string().allow(""),

      page: CatalogModel.Page().required(),
    });
  }

  static Department() {
    return Joi.object({
      uid: Joi.number(),

      priority_order: Joi.number(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.AutocompleteItem()),
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
      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),

      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      cron: Joi.any(),

      sort_on: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      priority: Joi.number(),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      page: CatalogModel.Page().required(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      meta: Joi.any(),

      name: Joi.string().allow(""),

      cron: Joi.any(),

      sort_on: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      priority: Joi.number(),
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
      type: Joi.string().allow(""),

      coordinates: Joi.array().items(Joi.number()),
    });
  }

  static Store() {
    return Joi.object({
      uid: Joi.number(),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      store_email: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Store()).required(),

      page: CatalogModel.Page().required(),
    });
  }

  static StoreDepartments() {
    return Joi.object({
      uid: Joi.number(),

      priority_order: Joi.number(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CompanyStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber(),

      email: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      uid: Joi.number(),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      name: Joi.string().allow(""),
    });
  }

  static ApplicationStoreListing() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.StoreDepartments()),

      items: Joi.array().items(CatalogModel.AppStore()),

      page: CatalogModel.Page(),
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
      weekday: Joi.string().allow(""),

      opening: CatalogModel.Time(),

      closing: CatalogModel.Time(),

      open: Joi.boolean(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      uid: Joi.number(),

      company: CatalogModel.CompanyStore(),

      _custom_json: Joi.any(),

      manager: CatalogModel.StoreManagerSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      name: Joi.string().allow(""),
    });
  }

  static UserDetail() {
    return Joi.object({
      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      min_marked: Joi.number(),

      max_marked: Joi.number(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),

      currency: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      value: Joi.any(),

      quantity: Joi.number(),

      display: Joi.any(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      highlights: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      image_nature: Joi.any(),

      item_code: Joi.any(),

      attributes: Joi.any(),

      name: Joi.any(),

      is_set: Joi.boolean(),

      grouped_attributes: Joi.any(),

      identifier: Joi.any(),

      rating_count: Joi.number(),

      rating: Joi.number(),

      images: Joi.array().items(Joi.any()),

      media: Joi.array().items(Joi.any()),

      short_description: Joi.any(),

      out_of_stock: Joi.boolean(),

      slug: Joi.any(),

      description: Joi.any(),

      has_variant: Joi.boolean(),

      country_of_origin: Joi.any(),

      hsn_code: Joi.number(),

      template_tag: Joi.any(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number(),

      product_uid: Joi.number().required(),

      price: CatalogModel.ProductGroupPrice(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.ProductDetails(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      modified_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      verified_by: CatalogModel.UserDetail(),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.any()),

      meta: Joi.any(),

      verified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      _id: Joi.any(),

      same_store_assignment: Joi.boolean(),

      modified_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean(),

      choice: Joi.any(),

      slug: Joi.any(),

      name: Joi.any().required(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static DetailsSchemaV2() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV2() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),

      title: Joi.string().allow(""),
    });
  }

  static SellerV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static ProductStockPriceV2() {
    return Joi.object({
      marked: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static ProductSetDistributionSizeV2() {
    return Joi.object({
      size: Joi.string().allow(""),

      pieces: Joi.number(),
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

  static SellerGroupAttributes() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),

      title: Joi.string().allow(""),
    });
  }

  static StrategyWiseListingSchemaV2() {
    return Joi.object({
      distance: Joi.number(),

      tat: Joi.number(),

      pincode: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ProductStockUnitPriceV2() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      price: Joi.number(),

      currency_code: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static ArticleAssignmentV2() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static StoreV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static ReturnConfigSchemaV2() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV2() {
    return Joi.object({
      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV2()
      ),

      seller_count: Joi.number(),

      seller: CatalogModel.SellerV2(),

      long_lat: Joi.array().items(Joi.number()),

      is_cod: Joi.boolean(),

      price_per_piece: CatalogModel.ProductStockPriceV2(),

      set: CatalogModel.ProductSetV2(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV2()
      ),

      is_gift: Joi.boolean(),

      article_id: Joi.string().allow(""),

      price_per_unit: CatalogModel.ProductStockUnitPriceV2(),

      article_assignment: CatalogModel.ArticleAssignmentV2(),

      special_badge: Joi.string().allow(""),

      pincode: Joi.number(),

      price: CatalogModel.ProductStockPriceV2(),

      item_type: Joi.string().allow(""),

      store: CatalogModel.StoreV2(),

      return_config: CatalogModel.ReturnConfigSchemaV2(),

      discount: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static ProductSizeSellerFilterSchemaV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ProductSizeSellersResponseV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV2()),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV2()
      ),

      page: CatalogModel.Page().required(),
    });
  }
}
module.exports = CatalogModel;
