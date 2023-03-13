const Joi = require("joi");

class CatalogModel {
  static CustomMetaFields() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

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

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
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
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l1: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static Price() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      max: Joi.number(),

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
      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      short_description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      teaser_tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      _custom_json: Joi.any(),

      rating: Joi.number(),

      slug: Joi.string().allow("").required(),

      discount: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_code: Joi.string().allow(""),

      rating_count: Joi.number(),

      moq: CatalogModel.ApplicationItemMOQ(),

      description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      category_map: CatalogModel.ProductCategoryMap(),

      medias: Joi.array().items(CatalogModel.Media()),

      similars: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantity(),

      brand: CatalogModel.ProductBrand(),

      action: CatalogModel.ProductListingAction(),

      price: CatalogModel.ProductListingPrice(),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static Dimension() {
    return Joi.object({
      height: Joi.number().required(),

      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      weight: CatalogModel.Weight(),

      quantity: Joi.number(),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      dimension: CatalogModel.Dimension(),

      display: Joi.string().allow(""),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_4: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_3: Joi.string().allow(""),
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

      col_1: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      image: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      size_tip: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.ProductSize()),

      discount: Joi.string().allow(""),

      size_chart: CatalogModel.SizeChart(),

      sellable: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      multi_size: Joi.boolean(),

      price: CatalogModel.ProductListingPrice(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      key: Joi.string().allow(""),

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
      medias: Joi.array().items(CatalogModel.Media()),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      color_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      is_available: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      color: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),

      key: Joi.string().allow(""),

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
      code: Joi.string().allow(""),

      city: Joi.string().allow(""),

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

  static ProductStockStatusItem() {
    return Joi.object({
      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      identifier: Joi.any(),

      store: CatalogModel.StoreDetail(),

      item_id: Joi.number(),

      price: CatalogModel.ProductStockPrice(),

      company: CatalogModel.CompanyDetail(),

      seller: CatalogModel.Seller(),
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

  static ProductVariantListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      header: Joi.string().allow(""),

      total: Joi.number(),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      identifiers: Joi.array().items(Joi.string().allow("")),

      sellable: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      short_description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      teaser_tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      _custom_json: Joi.any(),

      rating: Joi.number(),

      slug: Joi.string().allow("").required(),

      discount: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_code: Joi.string().allow(""),

      rating_count: Joi.number(),

      moq: CatalogModel.ApplicationItemMOQ(),

      description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      category_map: CatalogModel.ProductCategoryMap(),

      medias: Joi.array().items(CatalogModel.Media()),

      similars: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantity(),

      brand: CatalogModel.ProductBrand(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      action: CatalogModel.ProductListingAction(),

      price: CatalogModel.ProductListingPrice(),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      selected_min: Joi.number(),

      display_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),

      value: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      currency_symbol: Joi.string().allow(""),

      selected_max: Joi.number(),

      min: Joi.number(),

      count: Joi.number(),

      is_selected: Joi.boolean().required(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

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

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),
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
      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),
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

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CategoryBanner() {
    return Joi.object({
      landscape: CatalogModel.Media().required(),

      portrait: CatalogModel.Media().required(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.CategoryBanner().required(),

      uid: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      childs: Joi.array().items(CatalogModel.Child()),

      name: Joi.string().allow("").required(),

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
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),
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
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

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

      action: CatalogModel.ProductListingAction(),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),
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
      uid: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      sort_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      meta: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),
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
      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      sort_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      meta: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),
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
      city: Joi.string().allow(""),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      address: Joi.string().allow(""),

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
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

      logo: Joi.string().allow(""),
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

  static CompanyStore() {
    return Joi.object({
      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number(),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      manager: CatalogModel.StoreManagerSerializer(),

      company: CatalogModel.CompanyStore(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      address: CatalogModel.StoreAddressSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
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

      uid: Joi.number(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      name: Joi.string().allow(""),

      manager: CatalogModel.StoreManagerSerializer(),

      company: CatalogModel.CompanyStore(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      address: CatalogModel.StoreAddressSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      quantity: Joi.number(),

      value: Joi.any(),

      display: Joi.any(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      image_nature: Joi.any(),

      identifier: Joi.any(),

      template_tag: Joi.any(),

      country_of_origin: Joi.any(),

      images: Joi.array().items(Joi.any()),

      short_description: Joi.any(),

      name: Joi.any(),

      attributes: Joi.any(),

      media: Joi.array().items(Joi.any()),

      has_variant: Joi.boolean(),

      rating: Joi.number(),

      slug: Joi.any(),

      out_of_stock: Joi.boolean(),

      grouped_attributes: Joi.any(),

      item_code: Joi.any(),

      rating_count: Joi.number(),

      description: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      hsn_code: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      currency: Joi.any(),

      min_marked: Joi.number(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      auto_select: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      min_quantity: Joi.number(),

      product_details: CatalogModel.ProductDetails(),

      allow_remove: Joi.boolean(),

      price: CatalogModel.ProductGroupPrice(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number().required(),

      max_quantity: Joi.number().required(),
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

  static ProductGroupingModel() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      choice: Joi.any(),

      _id: Joi.any(),

      slug: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      name: Joi.any().required(),

      modified_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      same_store_assignment: Joi.boolean(),

      company_id: Joi.number(),

      verified_by: CatalogModel.UserDetail(),

      created_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.any()),

      modified_by: CatalogModel.UserDetail(),

      meta: Joi.any(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static StoreV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
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
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
    });
  }

  static ProductStockUnitPriceV3() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      price: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      quantity: Joi.number(),

      tat: Joi.number(),

      pincode: Joi.number(),

      distance: Joi.number(),
    });
  }

  static ArticleAssignmentV3() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
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
      quantity: Joi.number(),

      size_distribution: CatalogModel.ProductSetDistributionV3(),
    });
  }

  static SellerV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      store: CatalogModel.StoreV3(),

      is_cod: Joi.boolean(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      seller_count: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      is_gift: Joi.boolean(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      special_badge: Joi.string().allow(""),

      set: CatalogModel.ProductSetV3(),

      article_id: Joi.string().allow(""),

      pincode: Joi.number(),

      price: CatalogModel.ProductStockPriceV3(),

      long_lat: Joi.array().items(Joi.number()),

      item_type: Joi.string().allow(""),

      seller: CatalogModel.SellerV3(),
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
      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),
    });
  }
}
module.exports = CatalogModel;
