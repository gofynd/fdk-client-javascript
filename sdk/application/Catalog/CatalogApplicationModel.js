const Joi = require("joi");

class CatalogModel {
  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      meta: CatalogModel.Meta(),

      alt: Joi.string().allow(""),
    });
  }

  static ProductListingActionPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      params: Joi.any(),

      query: Joi.any(),
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

      description: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

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
      effective: CatalogModel.Price(),

      marked: CatalogModel.Price(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l2: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),
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

  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
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
      teaser_tag: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      color: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      similars: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      uid: Joi.number(),

      attributes: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      has_variant: Joi.boolean(),

      category_map: CatalogModel.ProductCategoryMap(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      rating: Joi.number(),

      product_online_date: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      name: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      net_quantity: CatalogModel.NetQuantity(),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      image_nature: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      medias: Joi.array().items(CatalogModel.Media()),

      brand: CatalogModel.ProductBrand(),

      action: CatalogModel.ProductListingAction(),

      discount: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
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
      col_5: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_5: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_3: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      size_tip: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      image: Joi.string().allow(""),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),
    });
  }

  static Dimension() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      height: Joi.number().required(),

      width: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      quantity: Joi.number(),

      weight: CatalogModel.Weight(),

      dimension: CatalogModel.Dimension(),

      is_available: Joi.boolean(),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      multi_size: Joi.boolean(),

      size_chart: CatalogModel.SizeChart(),

      sellable: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      stores: CatalogModel.ProductSizeStores(),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

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
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

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
      value: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      color: Joi.string().allow(""),

      color_name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      name: Joi.string().allow(""),

      is_available: Joi.boolean(),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(CatalogModel.ProductVariantResponse()),
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
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      code: Joi.string().allow(""),
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
      company: CatalogModel.CompanyDetail(),

      size: Joi.string().allow(""),

      item_id: Joi.number(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      seller: CatalogModel.Seller(),

      store: CatalogModel.StoreDetail(),

      identifier: Joi.any(),

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
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      total: Joi.number(),

      key: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      teaser_tag: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      color: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      similars: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      uid: Joi.number(),

      sellable: Joi.boolean(),

      attributes: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      has_variant: Joi.boolean(),

      category_map: CatalogModel.ProductCategoryMap(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      rating: Joi.number(),

      product_online_date: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      name: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      identifiers: Joi.array().items(Joi.string().allow("")),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      moq: CatalogModel.ApplicationItemMOQ(),

      net_quantity: CatalogModel.NetQuantity(),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      image_nature: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      medias: Joi.array().items(CatalogModel.Media()),

      brand: CatalogModel.ProductBrand(),

      action: CatalogModel.ProductListingAction(),

      discount: Joi.string().allow(""),
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

  static ProductFiltersValue() {
    return Joi.object({
      min: Joi.number(),

      selected_min: Joi.number(),

      max: Joi.number(),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      display: Joi.string().allow("").required(),

      count: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      selected_max: Joi.number(),

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
      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

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
      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),
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

      description: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),
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

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number().required(),

      banners: CatalogModel.CategoryBanner().required(),

      action: CatalogModel.ProductListingAction().required(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      childs: Joi.array().items(CatalogModel.Child()),
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

      uid: Joi.number(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
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
      logo: CatalogModel.Media(),

      uid: Joi.number(),

      priority_order: Joi.number(),

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

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      _schedule: Joi.any(),

      cron: Joi.any(),

      uid: Joi.string().allow(""),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      type: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      action: CatalogModel.ProductListingAction(),
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

  static GetCollectionListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      _schedule: Joi.any(),

      cron: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      type: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
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
      city: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      store_email: Joi.string().allow(""),

      pincode: Joi.number(),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),
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
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
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

  static StoreDepartments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      uid: Joi.number(),

      priority_order: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static StoreManagerSerializer() {
    return Joi.object({
      mobile_no: CatalogModel.SellerPhoneNumber(),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      company: CatalogModel.CompanyStore(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      address: CatalogModel.StoreAddressSerializer(),

      manager: CatalogModel.StoreManagerSerializer(),
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
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static StoreTiming() {
    return Joi.object({
      opening: CatalogModel.Time(),

      closing: CatalogModel.Time(),

      open: Joi.boolean(),

      weekday: Joi.string().allow(""),
    });
  }

  static StoreDetails() {
    return Joi.object({
      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      company: CatalogModel.CompanyStore(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      name: Joi.string().allow(""),

      address: CatalogModel.StoreAddressSerializer(),

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
      display: Joi.any(),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      value: Joi.any(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      description: Joi.any(),

      images: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      hsn_code: Joi.number(),

      template_tag: Joi.any(),

      attributes: Joi.any(),

      slug: Joi.any(),

      has_variant: Joi.boolean(),

      is_set: Joi.boolean(),

      media: Joi.array().items(Joi.any()),

      grouped_attributes: Joi.any(),

      rating: Joi.number(),

      item_code: Joi.any(),

      country_of_origin: Joi.any(),

      name: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      short_description: Joi.any(),

      identifier: Joi.any(),

      rating_count: Joi.number(),

      image_nature: Joi.any(),

      out_of_stock: Joi.boolean(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      currency: Joi.any(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      min_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.ProductDetails(),

      price: CatalogModel.ProductGroupPrice(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      created_by: CatalogModel.UserDetail(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      verified_by: CatalogModel.UserDetail(),

      company_id: Joi.number(),

      meta: Joi.any(),

      choice: Joi.any(),

      page_visibility: Joi.array().items(Joi.any()),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      _id: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      slug: Joi.any(),

      created_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      modified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static ReturnConfigSchemaV2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
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

  static ProductStockPriceV2() {
    return Joi.object({
      effective: Joi.number(),

      currency: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static StrategyWiseListingSchemaV2() {
    return Joi.object({
      pincode: Joi.number(),

      tat: Joi.number(),

      quantity: Joi.number(),

      distance: Joi.number(),
    });
  }

  static ProductStockUnitPriceV2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      price: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static SellerV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
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

  static DetailsSchemaV2() {
    return Joi.object({
      type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),
    });
  }

  static MarketPlaceSttributesSchemaV2() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),
    });
  }

  static ProductSizePriceResponseV2() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigSchemaV2(),

      item_type: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignmentV2(),

      store: CatalogModel.StoreV2(),

      price: CatalogModel.ProductStockPriceV2(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV2()
      ),

      price_per_piece: CatalogModel.ProductStockPriceV2(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV2(),

      quantity: Joi.number(),

      seller: CatalogModel.SellerV2(),

      set: CatalogModel.ProductSetV2(),

      special_badge: Joi.string().allow(""),

      pincode: Joi.number(),

      long_lat: Joi.array().items(Joi.number()),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV2()
      ),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      discount: Joi.string().allow(""),

      seller_count: Joi.number(),
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
      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV2()
      ),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV2()),
    });
  }
}
module.exports = CatalogModel;
