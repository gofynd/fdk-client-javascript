const Joi = require("joi");

class CatalogModel {
  static ProductListingActionPage() {
    return Joi.object({
      params: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.any(),
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
      url: Joi.string().allow(""),

      meta: CatalogModel.Meta(),

      type: Joi.string().allow(""),

      alt: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static Price() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
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

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l3: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      discount: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      similars: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      brand: CatalogModel.ProductBrand(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      price: CatalogModel.ProductListingPrice(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      description: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      attributes: Joi.any(),

      item_type: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      has_variant: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      teaser_tag: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      seo: CatalogModel.ApplicationItemSEO(),

      item_code: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      type: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      rating_count: Joi.number(),

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

  static Dimension() {
    return Joi.object({
      width: Joi.number().required(),

      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      height: Joi.number().required(),
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
      is_available: Joi.boolean(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      dimension: CatalogModel.Dimension(),

      quantity: Joi.number(),

      weight: CatalogModel.Weight(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_1: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_4: Joi.string().allow(""),
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
      col_1: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      title: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      description: Joi.string().allow(""),

      image: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      sellable: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      multi_size: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      size_chart: CatalogModel.SizeChart(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

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
      title: Joi.string().allow(""),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      items: Joi.array().items(CatalogModel.ProductDetail()),

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
      is_available: Joi.boolean(),

      color_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      color: Joi.string().allow(""),

      value: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      slug: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(CatalogModel.ProductVariantResponse()),
    });
  }

  static Seller() {
    return Joi.object({
      count: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static CompanyDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      item_id: Joi.number(),

      seller: CatalogModel.Seller(),

      store: CatalogModel.StoreDetail(),

      identifier: Joi.any(),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),

      price: CatalogModel.ProductStockPrice(),

      quantity: Joi.number(),

      company: CatalogModel.CompanyDetail(),
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

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      query_format: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      selected_max: Joi.number(),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      value: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      selected_min: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
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
      header: Joi.string().allow(""),

      total: Joi.number(),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      discount: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      similars: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      brand: CatalogModel.ProductBrand(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      price: CatalogModel.ProductListingPrice(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      description: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      attributes: Joi.any(),

      item_type: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      has_variant: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      identifiers: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      seo: CatalogModel.ApplicationItemSEO(),

      sizes: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      type: Joi.string().allow(""),

      sellable: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      color: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      rating_count: Joi.number(),

      short_description: Joi.string().allow(""),
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
      portrait: CatalogModel.Media(),

      landscape: CatalogModel.Media(),
    });
  }

  static BrandItem() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      discount: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

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
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),
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
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      banners: CatalogModel.CategoryBanner().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number().required(),

      action: CatalogModel.ProductListingAction().required(),

      slug: Joi.string().allow("").required(),
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
      slug: Joi.string().allow(""),

      uid: Joi.number(),
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
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      logo: CatalogModel.Media(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      message: Joi.string().allow(""),
    });
  }

  static Department() {
    return Joi.object({
      priority_order: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

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

  static CollectionQuery() {
    return Joi.object({
      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      slug: Joi.string().allow(""),

      cron: Joi.any(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      logo: CatalogModel.Media(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
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
      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      slug: Joi.string().allow(""),

      cron: Joi.any(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      logo: CatalogModel.Media(),
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
      brands: Joi.array().items(Joi.number()),

      collections: Joi.array().items(Joi.number()),

      products: Joi.array().items(Joi.number()),
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

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      uid: Joi.number(),

      store_email: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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

      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber(),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),
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

  static AppStore() {
    return Joi.object({
      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      name: Joi.string().allow(""),

      manager: CatalogModel.StoreManagerSerializer(),

      uid: Joi.number(),

      address: CatalogModel.StoreAddressSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      company: CatalogModel.CompanyStore(),
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

      weekday: Joi.string().allow(""),

      closing: CatalogModel.Time(),

      opening: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      _custom_json: Joi.any(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      name: Joi.string().allow(""),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      manager: CatalogModel.StoreManagerSerializer(),

      uid: Joi.number(),

      address: CatalogModel.StoreAddressSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      company: CatalogModel.CompanyStore(),
    });
  }

  static UserDetail() {
    return Joi.object({
      username: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),
    });
  }

  static ProductDetails() {
    return Joi.object({
      is_set: Joi.boolean(),

      brand_uid: Joi.number(),

      hsn_code: Joi.number(),

      slug: Joi.any(),

      name: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      media: Joi.array().items(Joi.any()),

      country_of_origin: Joi.any(),

      rating: Joi.number(),

      description: Joi.any(),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      grouped_attributes: Joi.any(),

      identifier: Joi.any(),

      item_code: Joi.any(),

      out_of_stock: Joi.boolean(),

      image_nature: Joi.any(),

      template_tag: Joi.any(),

      rating_count: Joi.number(),

      images: Joi.array().items(Joi.any()),

      short_description: Joi.any(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_marked: Joi.number(),

      max_effective: Joi.number(),

      currency: Joi.any(),

      min_marked: Joi.number(),

      min_effective: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.any(),

      value: Joi.any(),

      quantity: Joi.number(),

      is_available: Joi.boolean(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      auto_select: Joi.boolean(),

      product_details: CatalogModel.ProductDetails(),

      allow_remove: Joi.boolean(),

      price: CatalogModel.ProductGroupPrice(),

      min_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.any()),

      name: Joi.any().required(),

      _id: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      slug: Joi.any(),

      company_id: Joi.number(),

      choice: Joi.any(),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      created_on: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      modified_by: CatalogModel.UserDetail(),

      meta: Joi.any(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      tat: Joi.number(),

      quantity: Joi.number(),

      distance: Joi.number(),

      pincode: Joi.number(),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
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

  static DetailsSchemaV3() {
    return Joi.object({
      key: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
      count: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
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

  static ProductStockUnitPriceV3() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      price: Joi.number(),
    });
  }

  static SellerV3() {
    return Joi.object({
      count: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      special_badge: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      seller_count: Joi.number(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      price: CatalogModel.ProductStockPriceV3(),

      quantity: Joi.number(),

      item_type: Joi.string().allow(""),

      pincode: Joi.number(),

      set: CatalogModel.ProductSetV3(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      article_id: Joi.string().allow(""),

      store: CatalogModel.StoreV3(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      is_gift: Joi.boolean(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      seller: CatalogModel.SellerV3(),

      long_lat: Joi.array().items(Joi.number()),

      is_cod: Joi.boolean(),
    });
  }

  static ProductSizeSellerFilterSchemaV3() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
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
