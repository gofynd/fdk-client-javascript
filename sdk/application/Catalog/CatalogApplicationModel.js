const Joi = require("joi");

class CatalogModel {
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

  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      url: Joi.string().allow(""),

      meta: CatalogModel.Meta(),

      alt: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l3: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),
    });
  }

  static Price() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: CatalogModel.Price(),

      effective: CatalogModel.Price(),
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

  static ProductDetail() {
    return Joi.object({
      _custom_json: Joi.any(),

      color: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      net_quantity: CatalogModel.NetQuantity(),

      teaser_tag: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      category_map: CatalogModel.ProductCategoryMap(),

      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      product_online_date: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      rating: Joi.number(),

      has_variant: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      similars: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      seo: CatalogModel.ApplicationItemSEO(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      medias: Joi.array().items(CatalogModel.Media()),

      attributes: Joi.any(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static Dimension() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

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
      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      dimension: CatalogModel.Dimension(),

      weight: CatalogModel.Weight(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_4: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_1: Joi.string().allow(""),
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
      col_4: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      title: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      description: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      unit: Joi.string().allow(""),

      image: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      discount: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      sellable: Joi.boolean(),

      size_chart: CatalogModel.SizeChart(),

      price: CatalogModel.ProductListingPrice(),

      multi_size: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      description: Joi.string().allow(""),

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
      items: Joi.array().items(CatalogModel.ProductDetail()),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),
    });
  }

  static ProductCompareResponse() {
    return Joi.object({
      title: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductDetail()),

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
      value: Joi.string().allow(""),

      color: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_available: Joi.boolean(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      medias: Joi.array().items(CatalogModel.Media()),

      color_name: Joi.string().allow(""),

      uid: Joi.number(),
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

      city: Joi.string().allow(""),

      id: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
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
      seller: CatalogModel.Seller(),

      store: CatalogModel.StoreDetail(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      price: CatalogModel.ProductStockPrice(),

      uid: Joi.string().allow(""),

      identifier: Joi.any(),

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

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      selected_max: Joi.number(),

      value: Joi.string().allow(""),

      count: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      query_format: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      min: Joi.number(),

      is_selected: Joi.boolean().required(),

      max: Joi.number(),
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

      header: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      total: Joi.number(),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      _custom_json: Joi.any(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      net_quantity: CatalogModel.NetQuantity(),

      teaser_tag: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      category_map: CatalogModel.ProductCategoryMap(),

      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      sizes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      product_online_date: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      rating: Joi.number(),

      has_variant: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      similars: Joi.array().items(Joi.string().allow("")),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      rating_count: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      sellable: Joi.boolean(),

      seo: CatalogModel.ApplicationItemSEO(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      medias: Joi.array().items(CatalogModel.Media()),

      attributes: Joi.any(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
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
      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),
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

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
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
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),
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

      name: Joi.string().allow("").required(),

      banners: CatalogModel.CategoryBanner().required(),

      action: CatalogModel.ProductListingAction().required(),

      uid: Joi.number().required(),
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
      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
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
      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),

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

      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      badge: Joi.any(),

      sort_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      cron: Joi.any(),

      priority: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),
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
      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      badge: Joi.any(),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      cron: Joi.any(),

      priority: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),
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
      collections: Joi.array().items(Joi.number()),

      products: Joi.array().items(Joi.number()),

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
      coordinates: Joi.array().items(Joi.number()),

      type: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      city: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      uid: Joi.number(),

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
      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static CompanyStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static AppStore() {
    return Joi.object({
      manager: CatalogModel.StoreManagerSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      company: CatalogModel.CompanyStore(),
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
      minute: Joi.number(),

      hour: Joi.number(),
    });
  }

  static StoreTiming() {
    return Joi.object({
      closing: CatalogModel.Time(),

      weekday: Joi.string().allow(""),

      opening: CatalogModel.Time(),

      open: Joi.boolean(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      _custom_json: Joi.any(),

      manager: CatalogModel.StoreManagerSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      company: CatalogModel.CompanyStore(),
    });
  }

  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.any(),

      value: Joi.any(),

      is_available: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      template_tag: Joi.any(),

      image_nature: Joi.any(),

      is_set: Joi.boolean(),

      slug: Joi.any(),

      images: Joi.array().items(Joi.any()),

      out_of_stock: Joi.boolean(),

      name: Joi.any(),

      short_description: Joi.any(),

      brand_uid: Joi.number(),

      item_code: Joi.any(),

      media: Joi.array().items(Joi.any()),

      country_of_origin: Joi.any(),

      rating: Joi.number(),

      has_variant: Joi.boolean(),

      hsn_code: Joi.number(),

      rating_count: Joi.number(),

      identifier: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      description: Joi.any(),

      grouped_attributes: Joi.any(),

      attributes: Joi.any(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_effective: Joi.number(),

      currency: Joi.any(),

      min_marked: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      min_quantity: Joi.number(),

      product_details: CatalogModel.ProductDetails(),

      product_uid: Joi.number().required(),

      price: CatalogModel.ProductGroupPrice(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      slug: Joi.any(),

      same_store_assignment: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      name: Joi.any().required(),

      created_by: CatalogModel.UserDetail(),

      verified_by: CatalogModel.UserDetail(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      modified_by: CatalogModel.UserDetail(),

      choice: Joi.any(),

      company_id: Joi.number(),

      is_active: Joi.boolean(),

      _id: Joi.any(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static SellerV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static ProductStockUnitPriceV2() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      price: Joi.number(),

      unit: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductStockPriceV2() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
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
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
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

  static StrategyWiseListingSchemaV2() {
    return Joi.object({
      pincode: Joi.number(),

      distance: Joi.number(),

      tat: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ArticleAssignmentV2() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static DetailsSchemaV2() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      seller: CatalogModel.SellerV2(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV2(),

      quantity: Joi.number(),

      is_gift: Joi.boolean(),

      seller_count: Joi.number(),

      price: CatalogModel.ProductStockPriceV2(),

      is_cod: Joi.boolean(),

      store: CatalogModel.StoreV2(),

      special_badge: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigSchemaV2(),

      long_lat: Joi.array().items(Joi.number()),

      price_per_piece: CatalogModel.ProductStockPriceV2(),

      set: CatalogModel.ProductSetV2(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV2()
      ),

      article_assignment: CatalogModel.ArticleAssignmentV2(),

      discount: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV2()
      ),

      pincode: Joi.number(),

      item_type: Joi.string().allow(""),
    });
  }

  static ProductSizeSellerFilterSchemaV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductSizeSellersResponseV2() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV2()),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV2()
      ),
    });
  }
}
module.exports = CatalogModel;
