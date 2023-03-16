const Joi = require("joi");

class CatalogModel {
  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      meta: CatalogModel.Meta(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      alt: Joi.string().allow(""),
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

  static ProductBrand() {
    return Joi.object({
      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l2: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),
    });
  }

  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
      max: Joi.number(),

      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: CatalogModel.Price(),

      effective: CatalogModel.Price(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
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
      discount: Joi.string().allow(""),

      type: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      image_nature: Joi.string().allow(""),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      category_map: CatalogModel.ProductCategoryMap(),

      uid: Joi.number(),

      slug: Joi.string().allow("").required(),

      item_type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      highlights: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      attributes: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      price: CatalogModel.ProductListingPrice(),

      brand: CatalogModel.ProductBrand(),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      net_quantity: CatalogModel.NetQuantity(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      seo: CatalogModel.ApplicationItemSEO(),

      short_description: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      has_variant: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),
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
      dimension: CatalogModel.Dimension(),

      display: Joi.string().allow(""),

      is_available: Joi.boolean(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      value: Joi.string().allow(""),

      quantity: Joi.number(),

      weight: CatalogModel.Weight(),
    });
  }

  static ColumnHeader() {
    return Joi.object({
      convertable: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ColumnHeaders() {
    return Joi.object({
      col_2: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_2: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_3: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      unit: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      image: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static ProductSizes() {
    return Joi.object({
      discount: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      price: CatalogModel.ProductListingPrice(),

      size_chart: CatalogModel.SizeChart(),

      sellable: Joi.boolean(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      display: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      key: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      subtitle: Joi.string().allow(""),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      title: Joi.string().allow(""),

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

      value: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      color: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      color_name: Joi.string().allow(""),

      is_available: Joi.boolean(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),
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

  static ProductStockPrice() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static Seller() {
    return Joi.object({
      name: Joi.string().allow(""),

      count: Joi.number(),

      uid: Joi.number(),
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

  static ProductStockStatusItem() {
    return Joi.object({
      company: CatalogModel.CompanyDetail(),

      price: CatalogModel.ProductStockPrice(),

      identifier: Joi.any(),

      item_id: Joi.number(),

      uid: Joi.string().allow(""),

      seller: CatalogModel.Seller(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      store: CatalogModel.StoreDetail(),
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

  static ProductFiltersValue() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      count: Joi.number(),

      value: Joi.string().allow(""),

      selected_min: Joi.number(),

      display_format: Joi.string().allow(""),

      max: Joi.number(),

      display: Joi.string().allow("").required(),

      is_selected: Joi.boolean().required(),

      query_format: Joi.string().allow(""),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      selected_max: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      kind: Joi.string().allow(""),
    });
  }

  static ProductFilters() {
    return Joi.object({
      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),

      key: CatalogModel.ProductFiltersKey().required(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      header: Joi.string().allow(""),

      key: Joi.string().allow(""),

      total: Joi.number(),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      discount: Joi.string().allow(""),

      type: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      image_nature: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      category_map: CatalogModel.ProductCategoryMap(),

      uid: Joi.number(),

      slug: Joi.string().allow("").required(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      item_type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      highlights: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      attributes: Joi.any(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      similars: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      price: CatalogModel.ProductListingPrice(),

      brand: CatalogModel.ProductBrand(),

      product_online_date: Joi.string().allow(""),

      sellable: Joi.boolean(),

      rating: Joi.number(),

      net_quantity: CatalogModel.NetQuantity(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      seo: CatalogModel.ApplicationItemSEO(),

      short_description: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      has_variant: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

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

      discount: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),
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
      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      description: Joi.string().allow(""),
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

      childs: Joi.array().items(Joi.any()),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),
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

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.CategoryBanner().required(),

      name: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      action: CatalogModel.ProductListingAction().required(),
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
      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),
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

      logo: CatalogModel.Media(),

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

      type: Joi.string().allow(""),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),
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

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
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

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      type: Joi.string().allow(""),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      sort_on: Joi.string().allow(""),

      cron: Joi.any(),

      _schedule: Joi.any(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      is_active: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      filters: CatalogModel.CollectionListingFilter(),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      sort_on: Joi.string().allow(""),

      cron: Joi.any(),

      _schedule: Joi.any(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      coordinates: Joi.array().items(Joi.number()),
    });
  }

  static Store() {
    return Joi.object({
      pincode: Joi.number(),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      uid: Joi.number(),

      lat_long: CatalogModel.LatLong(),

      country: Joi.string().allow(""),
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

      logo: Joi.string().allow(""),

      priority_order: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      city: Joi.string().allow(""),

      longitude: Joi.number(),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static CompanyStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static StoreManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber(),
    });
  }

  static AppStore() {
    return Joi.object({
      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),
    });
  }

  static ApplicationStoreListing() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.StoreDepartments()),

      page: CatalogModel.Page(),

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
      weekday: Joi.string().allow(""),

      opening: CatalogModel.Time(),

      closing: CatalogModel.Time(),

      open: Joi.boolean(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      uid: Joi.number(),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),
    });
  }

  static UserDetail() {
    return Joi.object({
      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),
    });
  }

  static ProductDetails() {
    return Joi.object({
      image_nature: Joi.any(),

      brand_uid: Joi.number(),

      images: Joi.array().items(Joi.any()),

      is_set: Joi.boolean(),

      slug: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      country_of_origin: Joi.any(),

      name: Joi.any(),

      identifier: Joi.any(),

      rating_count: Joi.number(),

      attributes: Joi.any(),

      item_code: Joi.any(),

      media: Joi.array().items(Joi.any()),

      grouped_attributes: Joi.any(),

      hsn_code: Joi.number(),

      rating: Joi.number(),

      short_description: Joi.any(),

      has_variant: Joi.boolean(),

      template_tag: Joi.any(),

      out_of_stock: Joi.boolean(),

      description: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      display: Joi.any(),

      is_available: Joi.boolean(),

      value: Joi.any(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      min_effective: Joi.number(),

      min_marked: Joi.number(),

      max_marked: Joi.number(),

      currency: Joi.any(),

      max_effective: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      product_details: CatalogModel.ProductDetails(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.ProductGroupPrice(),

      product_uid: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      slug: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      company_id: Joi.number(),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.any()),

      logo: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      modified_by: CatalogModel.UserDetail(),

      name: Joi.any().required(),

      _id: Joi.any(),

      choice: Joi.any(),

      is_active: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      quantity: Joi.number(),

      tat: Joi.number(),

      distance: Joi.number(),

      pincode: Joi.number(),
    });
  }

  static ProductStockUnitPriceV3() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      price: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static StoreV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      count: Joi.number(),

      uid: Joi.number(),
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
      quantity: Joi.number(),

      size_distribution: CatalogModel.ProductSetDistributionV3(),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static DetailsSchemaV3() {
    return Joi.object({
      type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),
    });
  }

  static ArticleAssignmentV3() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static SellerV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      discount: Joi.string().allow(""),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      store: CatalogModel.StoreV3(),

      set: CatalogModel.ProductSetV3(),

      item_type: Joi.string().allow(""),

      is_cod: Joi.boolean(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      special_badge: Joi.string().allow(""),

      long_lat: Joi.array().items(Joi.number()),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      price: CatalogModel.ProductStockPriceV3(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      seller: CatalogModel.SellerV3(),

      quantity: Joi.number(),

      pincode: Joi.number(),

      article_id: Joi.string().allow(""),

      is_gift: Joi.boolean(),

      seller_count: Joi.number(),
    });
  }

  static ProductSizeSellerFilterSchemaV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ProductSizeSellersResponseV3() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),
    });
  }
}
module.exports = CatalogModel;
