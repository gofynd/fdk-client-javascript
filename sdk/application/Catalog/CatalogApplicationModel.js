const Joi = require("joi");

class CatalogModel {
  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      key: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static ProductListingActionPage() {
    return Joi.object({
      query: Joi.any(),

      params: Joi.any(),

      type: Joi.string().allow(""),
    });
  }

  static ProductListingAction() {
    return Joi.object({
      page: CatalogModel.ProductListingActionPage(),

      type: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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

  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      alt: Joi.string().allow(""),

      type: Joi.string().allow(""),

      meta: CatalogModel.Meta(),

      url: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l1: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.any(),

      description: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      highlights: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      rating: Joi.number(),

      description: Joi.string().allow(""),

      rating_count: Joi.number(),

      net_quantity: CatalogModel.NetQuantity(),

      action: CatalogModel.ProductListingAction(),

      price: CatalogModel.ProductListingPrice(),

      category_map: CatalogModel.ProductCategoryMap(),

      brand: CatalogModel.ProductBrand(),

      medias: Joi.array().items(CatalogModel.Media()),

      is_dependent: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      image_nature: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      uid: Joi.number(),

      has_variant: Joi.boolean(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      attributes: Joi.any(),

      color: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

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

  static Dimension() {
    return Joi.object({
      length: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      height: Joi.number().required(),

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
      display: Joi.string().allow(""),

      is_available: Joi.boolean(),

      dimension: CatalogModel.Dimension(),

      value: Joi.string().allow(""),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      weight: CatalogModel.Weight(),
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

      col_4: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_6: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_3: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      unit: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      image: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),
    });
  }

  static ProductSizes() {
    return Joi.object({
      multi_size: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      size_chart: CatalogModel.SizeChart(),

      sellable: Joi.boolean(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      key: Joi.string().allow(""),

      description: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      uid: Joi.number(),

      is_available: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      value: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      color: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      color_name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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

      id: Joi.number(),

      code: Joi.string().allow(""),

      city: Joi.string().allow(""),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
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
      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      store: CatalogModel.StoreDetail(),

      identifier: Joi.any(),

      company: CatalogModel.CompanyDetail(),

      seller: CatalogModel.Seller(),

      price: CatalogModel.ProductStockPrice(),

      quantity: Joi.number(),

      item_id: Joi.number(),
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
      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      selected_min: Joi.number(),

      selected_max: Joi.number(),

      value: Joi.string().allow(""),

      count: Joi.number(),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      min: Joi.number(),

      is_selected: Joi.boolean().required(),
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
      total: Joi.number(),

      display_type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      highlights: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      rating: Joi.number(),

      sellable: Joi.boolean(),

      description: Joi.string().allow(""),

      rating_count: Joi.number(),

      net_quantity: CatalogModel.NetQuantity(),

      action: CatalogModel.ProductListingAction(),

      price: CatalogModel.ProductListingPrice(),

      category_map: CatalogModel.ProductCategoryMap(),

      brand: CatalogModel.ProductBrand(),

      medias: Joi.array().items(CatalogModel.Media()),

      is_dependent: Joi.boolean(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      moq: CatalogModel.ApplicationItemMOQ(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      image_nature: Joi.string().allow(""),

      identifiers: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.ApplicationItemSEO(),

      uid: Joi.number(),

      has_variant: Joi.boolean(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      attributes: Joi.any(),

      color: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      similars: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.string().allow("")),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      discount: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),
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
      name: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.CategoryBanner().required(),

      action: CatalogModel.ProductListingAction().required(),

      slug: Joi.string().allow("").required(),
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

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),
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
      priority_order: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Department()),
    });
  }

  static AutocompleteItem() {
    return Joi.object({
      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      type: Joi.string().allow(""),
    });
  }

  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.AutocompleteItem()),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      name: Joi.string().allow(""),

      badge: Joi.any(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.ProductListingAction(),

      tag: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      priority: Joi.number(),

      cron: Joi.any(),

      uid: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      logo: CatalogModel.Media(),

      app_id: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      meta: Joi.any(),

      sort_on: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      badge: Joi.any(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tag: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      priority: Joi.number(),

      cron: Joi.any(),

      allow_sort: Joi.boolean(),

      logo: CatalogModel.Media(),

      app_id: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      meta: Joi.any(),

      sort_on: Joi.string().allow(""),
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
      pincode: Joi.number(),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      uid: Joi.number(),

      lat_long: CatalogModel.LatLong(),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      state: Joi.string().allow(""),
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
      priority_order: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static CompanyStore() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
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
      closing: CatalogModel.Time(),

      opening: CatalogModel.Time(),

      open: Joi.boolean(),

      weekday: Joi.string().allow(""),
    });
  }

  static StoreDetails() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      _custom_json: Joi.any(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
    });
  }

  static UserDetail() {
    return Joi.object({
      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      username: Joi.string().allow("").required(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      media: Joi.array().items(Joi.any()),

      name: Joi.any(),

      grouped_attributes: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      country_of_origin: Joi.any(),

      hsn_code: Joi.number(),

      slug: Joi.any(),

      rating: Joi.number(),

      description: Joi.any(),

      rating_count: Joi.number(),

      out_of_stock: Joi.boolean(),

      is_set: Joi.boolean(),

      template_tag: Joi.any(),

      short_description: Joi.any(),

      brand_uid: Joi.number(),

      image_nature: Joi.any(),

      has_variant: Joi.boolean(),

      identifier: Joi.any(),

      attributes: Joi.any(),

      images: Joi.array().items(Joi.any()),

      item_code: Joi.any(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      min_marked: Joi.number(),

      max_marked: Joi.number(),

      currency: Joi.any(),

      min_effective: Joi.number(),

      max_effective: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.any(),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      value: Joi.any(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      product_details: CatalogModel.ProductDetails(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number(),

      price: CatalogModel.ProductGroupPrice(),

      sizes: Joi.array().items(CatalogModel.Size()),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      created_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      name: Joi.any().required(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.any()),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      created_on: Joi.string().allow("").required(),

      choice: Joi.any(),

      is_active: Joi.boolean(),

      _id: Joi.any(),

      meta: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      modified_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      slug: Joi.any(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static DetailsSchemaV2() {
    return Joi.object({
      key: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV2() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),
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

      currency: Joi.string().allow(""),

      marked: Joi.number(),
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
      quantity: Joi.number(),

      size_distribution: CatalogModel.ProductSetDistributionV2(),
    });
  }

  static ProductStockUnitPriceV2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      price: Joi.number(),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static StoreV2() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static StrategyWiseListingSchemaV2() {
    return Joi.object({
      distance: Joi.number(),

      quantity: Joi.number(),

      tat: Joi.number(),

      pincode: Joi.number(),
    });
  }

  static ReturnConfigSchemaV2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static ProductSizePriceResponseV2() {
    return Joi.object({
      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV2()
      ),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      price_per_piece: CatalogModel.ProductStockPriceV2(),

      set: CatalogModel.ProductSetV2(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV2(),

      article_assignment: CatalogModel.ArticleAssignmentV2(),

      seller: CatalogModel.SellerV2(),

      article_id: Joi.string().allow(""),

      price: CatalogModel.ProductStockPriceV2(),

      is_gift: Joi.boolean(),

      seller_count: Joi.number(),

      store: CatalogModel.StoreV2(),

      item_type: Joi.string().allow(""),

      is_cod: Joi.boolean(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV2()
      ),

      pincode: Joi.number(),

      special_badge: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigSchemaV2(),

      long_lat: Joi.array().items(Joi.number()),

      quantity: Joi.number(),
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
