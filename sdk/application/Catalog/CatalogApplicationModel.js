const Joi = require("joi");

class CatalogModel {
  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
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

  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      alt: Joi.string().allow(""),

      type: Joi.string().allow(""),

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

  static ProductDetailAttribute() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      key: Joi.string().allow(""),
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
      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),
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
      title: Joi.any(),

      description: Joi.any(),
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
      minimum: Joi.number(),

      increment_unit: Joi.number(),

      maximum: Joi.number(),
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
      net_quantity: CatalogModel.NetQuantity(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      action: CatalogModel.ProductListingAction(),

      image_nature: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_code: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      uid: Joi.number(),

      rating_count: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      slug: Joi.string().allow("").required(),

      has_variant: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      similars: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      color: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      category_map: CatalogModel.ProductCategoryMap(),

      teaser_tag: Joi.string().allow(""),

      rating: Joi.number(),

      attributes: Joi.any(),

      type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      name: Joi.string().allow(""),
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
      col_1: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_1: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_4: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      headers: CatalogModel.ColumnHeaders(),

      image: Joi.string().allow(""),

      title: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      unit: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static Dimension() {
    return Joi.object({
      width: Joi.number().required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      is_available: Joi.boolean(),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      dimension: CatalogModel.Dimension(),

      weight: CatalogModel.Weight(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      price: CatalogModel.ProductListingPrice(),

      size_chart: CatalogModel.SizeChart(),

      multi_size: Joi.boolean(),

      discount: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      stores: CatalogModel.ProductSizeStores(),

      sellable: Joi.boolean(),
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
      items: Joi.array().items(CatalogModel.ProductDetail()),

      title: Joi.string().allow(""),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

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
      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      color: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_available: Joi.boolean(),

      value: Joi.string().allow(""),

      color_name: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      name: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),

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

      name: Joi.string().allow(""),

      count: Joi.number(),
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
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      city: Joi.string().allow(""),

      id: Joi.number(),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      uid: Joi.string().allow(""),

      seller: CatalogModel.Seller(),

      price: CatalogModel.ProductStockPrice(),

      company: CatalogModel.CompanyDetail(),

      size: Joi.string().allow(""),

      item_id: Joi.number(),

      identifier: Joi.any(),

      quantity: Joi.number(),

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
      items: Joi.array().items(CatalogModel.ProductStockStatusItem()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),

      total: Joi.number(),

      key: Joi.string().allow(""),

      header: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      net_quantity: CatalogModel.NetQuantity(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      action: CatalogModel.ProductListingAction(),

      image_nature: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      item_code: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      uid: Joi.number(),

      rating_count: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      slug: Joi.string().allow("").required(),

      has_variant: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      similars: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      color: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      category_map: CatalogModel.ProductCategoryMap(),

      teaser_tag: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      attributes: Joi.any(),

      type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      identifiers: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      name: Joi.string().allow(""),

      sellable: Joi.boolean(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      count: Joi.number(),

      is_selected: Joi.boolean().required(),

      selected_max: Joi.number(),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      value: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      query_format: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      selected_min: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

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

      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

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

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
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

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

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
      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

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
      uid: Joi.number().required(),

      action: CatalogModel.ProductListingAction().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

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
      uid: Joi.number(),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
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
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),
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

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

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
      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      badge: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      priority: Joi.number(),

      uid: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      _schedule: Joi.any(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
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
      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      page: CatalogModel.Page().required(),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      badge: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      _schedule: Joi.any(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
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
      address: Joi.string().allow(""),

      uid: Joi.number(),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_email: Joi.string().allow(""),
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

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      latitude: Joi.number(),

      longitude: Joi.number(),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),
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
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static StoreManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber(),
    });
  }

  static AppStore() {
    return Joi.object({
      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      uid: Joi.number(),

      address: CatalogModel.StoreAddressSerializer(),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      name: Joi.string().allow(""),
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
      minute: Joi.number(),

      hour: Joi.number(),
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
      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      uid: Joi.number(),

      address: CatalogModel.StoreAddressSerializer(),

      _custom_json: Joi.any(),

      company: CatalogModel.CompanyStore(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      manager: CatalogModel.StoreManagerSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      name: Joi.string().allow(""),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_marked: Joi.number(),

      max_effective: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.any(),

      min_effective: Joi.number(),
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
      image_nature: Joi.any(),

      grouped_attributes: Joi.any(),

      name: Joi.any(),

      item_code: Joi.any(),

      rating_count: Joi.number(),

      media: Joi.array().items(Joi.any()),

      has_variant: Joi.boolean(),

      slug: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      images: Joi.array().items(Joi.any()),

      description: Joi.any(),

      short_description: Joi.any(),

      is_set: Joi.boolean(),

      brand_uid: Joi.number(),

      identifier: Joi.any(),

      rating: Joi.number(),

      attributes: Joi.any(),

      country_of_origin: Joi.any(),

      out_of_stock: Joi.boolean(),

      template_tag: Joi.any(),

      hsn_code: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      price: CatalogModel.ProductGroupPrice(),

      product_uid: Joi.number().required(),

      max_quantity: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.Size()),

      allow_remove: Joi.boolean(),

      product_details: CatalogModel.ProductDetails(),

      min_quantity: Joi.number(),
    });
  }

  static UserDetail() {
    return Joi.object({
      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      modified_on: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      is_active: Joi.boolean(),

      verified_by: CatalogModel.UserDetail(),

      modified_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      slug: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.any(),

      created_on: Joi.string().allow("").required(),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.any()),

      name: Joi.any().required(),

      verified_on: Joi.string().allow(""),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
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

  static ProductStockUnitPriceV3() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      price: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static DetailsSchemaV3() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ArticleAssignmentV3() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),
    });
  }

  static SellerV3() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static StoreV3() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      pincode: Joi.number(),

      distance: Joi.number(),

      quantity: Joi.number(),

      tat: Joi.number(),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      set: CatalogModel.ProductSetV3(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      special_badge: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      quantity: Joi.number(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      price: CatalogModel.ProductStockPriceV3(),

      discount: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      seller_count: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      seller: CatalogModel.SellerV3(),

      pincode: Joi.number(),

      long_lat: Joi.array().items(Joi.number()),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      article_id: Joi.string().allow(""),

      is_cod: Joi.boolean(),

      store: CatalogModel.StoreV3(),

      is_gift: Joi.boolean(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),
    });
  }

  static ProductSizeSellerFilterSchemaV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),
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
