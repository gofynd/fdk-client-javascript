const Joi = require("joi");

class CatalogModel {
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

  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      meta: CatalogModel.Meta(),

      alt: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l1: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),
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

  static ProductDetailAttribute() {
    return Joi.object({
      key: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),

      title: Joi.string().allow(""),
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

  static Price() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: CatalogModel.Price(),

      effective: CatalogModel.Price(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      moq: CatalogModel.ApplicationItemMOQ(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      item_type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      rating: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      net_quantity: CatalogModel.NetQuantity(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),

      teaser_tag: Joi.string().allow(""),

      type: Joi.string().allow(""),

      attributes: Joi.any(),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      is_dependent: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      price: CatalogModel.ProductListingPrice(),

      rating_count: Joi.number(),
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

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),
    });
  }

  static Dimension() {
    return Joi.object({
      width: Joi.number().required(),

      length: Joi.number().required(),

      height: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      value: Joi.string().allow(""),

      weight: CatalogModel.Weight(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      dimension: CatalogModel.Dimension(),

      display: Joi.string().allow(""),

      is_available: Joi.boolean(),

      quantity: Joi.number(),
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

      col_1: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_4: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_3: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      headers: CatalogModel.ColumnHeaders(),

      size_tip: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      image: Joi.string().allow(""),

      title: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static ProductSizes() {
    return Joi.object({
      multi_size: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      size_chart: CatalogModel.SizeChart(),

      discount: Joi.string().allow(""),

      sellable: Joi.boolean(),

      price: CatalogModel.ProductListingPrice(),
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
      subtitle: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductDetail()),

      title: Joi.string().allow(""),

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

      uid: Joi.number(),

      name: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      action: CatalogModel.ProductListingAction(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      is_available: Joi.boolean(),

      color_name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      header: Joi.string().allow(""),

      display_type: Joi.string().allow(""),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(CatalogModel.ProductVariantResponse()),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),
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
      id: Joi.number(),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static Seller() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price: CatalogModel.ProductStockPrice(),

      company: CatalogModel.CompanyDetail(),

      item_id: Joi.number(),

      store: CatalogModel.StoreDetail(),

      seller: CatalogModel.Seller(),

      identifier: Joi.any(),

      quantity: Joi.number(),
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

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selected_min: Joi.number(),

      query_format: Joi.string().allow(""),

      value: Joi.string().allow(""),

      min: Joi.number(),

      selected_max: Joi.number(),

      display: Joi.string().allow("").required(),

      is_selected: Joi.boolean().required(),

      display_format: Joi.string().allow(""),

      count: Joi.number(),

      currency_code: Joi.string().allow(""),
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

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      key: Joi.string().allow(""),

      header: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      moq: CatalogModel.ApplicationItemMOQ(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      sellable: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      item_type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      rating: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      net_quantity: CatalogModel.NetQuantity(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),

      teaser_tag: Joi.string().allow(""),

      type: Joi.string().allow(""),

      attributes: Joi.any(),

      slug: Joi.string().allow("").required(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      is_dependent: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      price: CatalogModel.ProductListingPrice(),

      rating_count: Joi.number(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
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

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

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

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),
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
      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number().required(),

      name: Joi.string().allow("").required(),

      action: CatalogModel.ProductListingAction().required(),

      banners: CatalogModel.CategoryBanner().required(),

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

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),
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
      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      display: Joi.string().allow(""),

      type: Joi.string().allow(""),

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
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
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
      app_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      uid: Joi.string().allow(""),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      allow_sort: Joi.boolean(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      meta: Joi.any(),
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
      app_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      allow_sort: Joi.boolean(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      meta: Joi.any(),
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

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
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
      priority_order: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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

  static CompanyStore() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      uid: Joi.number(),

      manager: CatalogModel.StoreManagerSerializer(),

      name: Joi.string().allow(""),

      company: CatalogModel.CompanyStore(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      address: CatalogModel.StoreAddressSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
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
      open: Joi.boolean(),

      closing: CatalogModel.Time(),

      opening: CatalogModel.Time(),

      weekday: Joi.string().allow(""),
    });
  }

  static StoreDetails() {
    return Joi.object({
      uid: Joi.number(),

      manager: CatalogModel.StoreManagerSerializer(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      company: CatalogModel.CompanyStore(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      address: CatalogModel.StoreAddressSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      timing: Joi.array().items(CatalogModel.StoreTiming()),
    });
  }

  static UserDetail() {
    return Joi.object({
      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      is_available: Joi.boolean(),

      value: Joi.any(),

      display: Joi.any(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      template_tag: Joi.any(),

      has_variant: Joi.boolean(),

      country_of_origin: Joi.any(),

      description: Joi.any(),

      hsn_code: Joi.number(),

      highlights: Joi.array().items(Joi.any()),

      item_code: Joi.any(),

      is_set: Joi.boolean(),

      rating: Joi.number(),

      grouped_attributes: Joi.any(),

      name: Joi.any(),

      out_of_stock: Joi.boolean(),

      identifier: Joi.any(),

      attributes: Joi.any(),

      slug: Joi.any(),

      media: Joi.array().items(Joi.any()),

      images: Joi.array().items(Joi.any()),

      short_description: Joi.any(),

      image_nature: Joi.any(),

      brand_uid: Joi.number(),

      rating_count: Joi.number(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      min_effective: Joi.number(),

      min_marked: Joi.number(),

      max_effective: Joi.number(),

      currency: Joi.any(),

      max_marked: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.ProductDetails(),

      price: CatalogModel.ProductGroupPrice(),

      max_quantity: Joi.number().required(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      _id: Joi.any(),

      company_id: Joi.number(),

      choice: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      created_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      created_by: CatalogModel.UserDetail(),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserDetail(),

      modified_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.any(),

      same_store_assignment: Joi.boolean(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static ProductStockPriceV2() {
    return Joi.object({
      marked: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static ReturnConfigSchemaV2() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static SellerV2() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static ArticleAssignmentV2() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static DetailsSchemaV2() {
    return Joi.object({
      key: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
      pincode: Joi.number(),

      tat: Joi.number(),

      quantity: Joi.number(),

      distance: Joi.number(),
    });
  }

  static StoreV2() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static ProductStockUnitPriceV2() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      price: Joi.number(),
    });
  }

  static MarketPlaceSttributesSchemaV2() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),

      title: Joi.string().allow(""),
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

  static ProductSizePriceResponseV2() {
    return Joi.object({
      is_gift: Joi.boolean(),

      discount: Joi.string().allow(""),

      price_per_piece: CatalogModel.ProductStockPriceV2(),

      return_config: CatalogModel.ReturnConfigSchemaV2(),

      seller: CatalogModel.SellerV2(),

      article_assignment: CatalogModel.ArticleAssignmentV2(),

      special_badge: Joi.string().allow(""),

      quantity: Joi.number(),

      item_type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      long_lat: Joi.array().items(Joi.number()),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV2()
      ),

      store: CatalogModel.StoreV2(),

      article_id: Joi.string().allow(""),

      is_cod: Joi.boolean(),

      seller_count: Joi.number(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV2(),

      pincode: Joi.number(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV2()
      ),

      price: CatalogModel.ProductStockPriceV2(),

      set: CatalogModel.ProductSetV2(),
    });
  }

  static ProductSizeSellerFilterSchemaV2() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductSizeSellersResponseV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV2()),

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV2()
      ),
    });
  }
}
module.exports = CatalogModel;
