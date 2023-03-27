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
      params: Joi.any(),

      query: Joi.any(),

      type: Joi.string().allow(""),
    });
  }

  static ProductListingAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      page: CatalogModel.ProductListingActionPage(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
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

      alt: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
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
      key: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),

      title: Joi.string().allow(""),
    });
  }

  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static Price() {
    return Joi.object({
      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),

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
      item_code: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      rating_count: Joi.number(),

      net_quantity: CatalogModel.NetQuantity(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      moq: CatalogModel.ApplicationItemMOQ(),

      seo: CatalogModel.ApplicationItemSEO(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      item_type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      highlights: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      rating: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      is_dependent: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media()),

      attributes: Joi.any(),

      price: CatalogModel.ProductListingPrice(),

      has_variant: Joi.boolean(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
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

      col_1: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_2: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_5: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      headers: CatalogModel.ColumnHeaders(),

      title: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      description: Joi.string().allow(""),

      image: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static Dimension() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      height: Joi.number().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      display: Joi.string().allow(""),

      dimension: CatalogModel.Dimension(),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      weight: CatalogModel.Weight(),

      value: Joi.string().allow(""),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),
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

      size_chart: CatalogModel.SizeChart(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      stores: CatalogModel.ProductSizeStores(),

      multi_size: Joi.boolean(),

      sellable: Joi.boolean(),

      price: CatalogModel.ProductListingPrice(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

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
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      color: Joi.string().allow(""),

      is_available: Joi.boolean(),

      medias: Joi.array().items(CatalogModel.Media()),

      name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      action: CatalogModel.ProductListingAction(),

      value: Joi.string().allow(""),

      color_name: Joi.string().allow(""),
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
      count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),
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
      size: Joi.string().allow(""),

      company: CatalogModel.CompanyDetail(),

      uid: Joi.string().allow(""),

      item_id: Joi.number(),

      seller: CatalogModel.Seller(),

      store: CatalogModel.StoreDetail(),

      quantity: Joi.number(),

      price: CatalogModel.ProductStockPrice(),

      identifier: Joi.any(),
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

      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      selected_min: Joi.number(),

      display: Joi.string().allow("").required(),

      max: Joi.number(),

      query_format: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      display_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.string().allow(""),

      min: Joi.number(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      key: CatalogModel.ProductFiltersKey().required(),

      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),
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
      key: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),

      total: Joi.number(),

      header: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      rating_count: Joi.number(),

      net_quantity: CatalogModel.NetQuantity(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      moq: CatalogModel.ApplicationItemMOQ(),

      seo: CatalogModel.ApplicationItemSEO(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      item_type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      sellable: Joi.boolean(),

      teaser_tag: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      rating: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      is_dependent: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      tags: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media()),

      attributes: Joi.any(),

      price: CatalogModel.ProductListingPrice(),

      has_variant: Joi.boolean(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

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
      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
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

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
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

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
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
      slug: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.CategoryBanner().required(),

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
      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
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

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

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
      type: Joi.string().allow(""),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),
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

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      _schedule: Joi.any(),

      uid: Joi.string().allow(""),

      cron: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      badge: Joi.any(),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      allow_facets: Joi.boolean(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),
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
      _schedule: Joi.any(),

      cron: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      badge: Joi.any(),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      allow_facets: Joi.boolean(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),
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
      coordinates: Joi.array().items(Joi.number()),

      type: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      lat_long: CatalogModel.LatLong(),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

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
      priority_order: Joi.number(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CompanyStore() {
    return Joi.object({
      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber(),

      name: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      city: Joi.string().allow(""),

      longitude: Joi.number(),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      company: CatalogModel.CompanyStore(),

      uid: Joi.number(),

      manager: CatalogModel.StoreManagerSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      name: Joi.string().allow(""),

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
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static StoreTiming() {
    return Joi.object({
      open: Joi.boolean(),

      opening: CatalogModel.Time(),

      weekday: Joi.string().allow(""),

      closing: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      company: CatalogModel.CompanyStore(),

      uid: Joi.number(),

      manager: CatalogModel.StoreManagerSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      address: CatalogModel.StoreAddressSerializer(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.any(),

      quantity: Joi.number(),

      display: Joi.any(),

      is_available: Joi.boolean(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      item_code: Joi.any(),

      image_nature: Joi.any(),

      short_description: Joi.any(),

      rating_count: Joi.number(),

      brand_uid: Joi.number(),

      country_of_origin: Joi.any(),

      name: Joi.any(),

      hsn_code: Joi.number(),

      slug: Joi.any(),

      description: Joi.any(),

      is_set: Joi.boolean(),

      highlights: Joi.array().items(Joi.any()),

      grouped_attributes: Joi.any(),

      template_tag: Joi.any(),

      rating: Joi.number(),

      out_of_stock: Joi.boolean(),

      media: Joi.array().items(Joi.any()),

      attributes: Joi.any(),

      images: Joi.array().items(Joi.any()),

      identifier: Joi.any(),

      has_variant: Joi.boolean(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_effective: Joi.number(),

      currency: Joi.any(),

      min_effective: Joi.number(),

      min_marked: Joi.number(),

      max_marked: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      min_quantity: Joi.number(),

      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),

      auto_select: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_add_to_cart: Joi.boolean(),

      product_details: CatalogModel.ProductDetails(),

      max_quantity: Joi.number().required(),

      price: CatalogModel.ProductGroupPrice(),
    });
  }

  static UserDetail() {
    return Joi.object({
      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      verified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserDetail(),

      slug: Joi.any(),

      _id: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      modified_by: CatalogModel.UserDetail(),

      page_visibility: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.any(),

      same_store_assignment: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      name: Joi.any().required(),

      meta: Joi.any(),

      company_id: Joi.number(),
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

  static StoreV3() {
    return Joi.object({
      count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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

  static ProductStockPriceV3() {
    return Joi.object({
      marked: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static SellerV3() {
    return Joi.object({
      count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      distance: Joi.number(),

      tat: Joi.number(),

      quantity: Joi.number(),

      pincode: Joi.number(),
    });
  }

  static DetailsSchemaV3() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
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
      unit: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      price: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      article_assignment: CatalogModel.ArticleAssignmentV3(),

      store: CatalogModel.StoreV3(),

      pincode: Joi.number(),

      quantity: Joi.number(),

      set: CatalogModel.ProductSetV3(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      discount: Joi.string().allow(""),

      special_badge: Joi.string().allow(""),

      seller_count: Joi.number(),

      item_type: Joi.string().allow(""),

      seller: CatalogModel.SellerV3(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      is_cod: Joi.boolean(),

      article_id: Joi.string().allow(""),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      long_lat: Joi.array().items(Joi.number()),

      is_gift: Joi.boolean(),

      price: CatalogModel.ProductStockPriceV3(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),
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

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),

      page: CatalogModel.Page().required(),
    });
  }
}
module.exports = CatalogModel;
