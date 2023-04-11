const Joi = require("joi");

class CatalogModel {
  static Price() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: CatalogModel.Price(),

      effective: CatalogModel.Price(),
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
      meta: CatalogModel.Meta(),

      alt: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l1: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      increment_unit: Joi.number(),

      maximum: Joi.number(),
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

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      price: CatalogModel.ProductListingPrice(),

      image_nature: Joi.string().allow(""),

      type: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      similars: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      rating_count: Joi.number(),

      color: Joi.string().allow(""),

      rating: Joi.number(),

      item_type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      highlights: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      teaser_tag: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      slug: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      tags: Joi.array().items(Joi.string().allow("")),

      moq: CatalogModel.ApplicationItemMOQ(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      seo: CatalogModel.ApplicationItemSEO(),

      name: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      discount: Joi.string().allow(""),

      attributes: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      is_dependent: Joi.boolean(),

      brand: CatalogModel.ProductBrand(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static Dimension() {
    return Joi.object({
      height: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      length: Joi.number().required(),
    });
  }

  static Weight() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      display: Joi.string().allow(""),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      value: Joi.string().allow(""),

      quantity: Joi.number(),

      dimension: CatalogModel.Dimension(),

      is_available: Joi.boolean(),

      weight: CatalogModel.Weight(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_3: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_4: Joi.string().allow(""),
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
      col_3: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      headers: CatalogModel.ColumnHeaders(),

      image: Joi.string().allow(""),

      description: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      title: Joi.string().allow(""),

      unit: Joi.string().allow(""),
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

      price: CatalogModel.ProductListingPrice(),

      discount: Joi.string().allow(""),

      size_chart: CatalogModel.SizeChart(),

      stores: CatalogModel.ProductSizeStores(),

      multi_size: Joi.boolean(),

      sellable: Joi.boolean(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      items: Joi.array().items(CatalogModel.ProductDetail()),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      subtitle: Joi.string().allow(""),

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
      action: CatalogModel.ProductListingAction(),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      uid: Joi.number(),

      color_name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      name: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      slug: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(CatalogModel.ProductVariantResponse()),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
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

  static CompanyDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static Seller() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      price: CatalogModel.ProductStockPrice(),

      store: CatalogModel.StoreDetail(),

      item_id: Joi.number(),

      company: CatalogModel.CompanyDetail(),

      seller: CatalogModel.Seller(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

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

  static ProductVariantListingResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      total: Joi.number(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      price: CatalogModel.ProductListingPrice(),

      image_nature: Joi.string().allow(""),

      type: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      similars: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      rating_count: Joi.number(),

      color: Joi.string().allow(""),

      rating: Joi.number(),

      item_type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      highlights: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      teaser_tag: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      slug: Joi.string().allow("").required(),

      sellable: Joi.boolean(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      tags: Joi.array().items(Joi.string().allow("")),

      moq: CatalogModel.ApplicationItemMOQ(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      seo: CatalogModel.ApplicationItemSEO(),

      name: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      identifiers: Joi.array().items(Joi.string().allow("")),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      item_code: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      discount: Joi.string().allow(""),

      attributes: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      is_dependent: Joi.boolean(),

      brand: CatalogModel.ProductBrand(),

      product_online_date: Joi.string().allow(""),
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
      currency_symbol: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      count: Joi.number(),

      display: Joi.string().allow("").required(),

      max: Joi.number(),

      selected_max: Joi.number(),

      min: Joi.number(),

      selected_min: Joi.number(),

      value: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      display_format: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
      portrait: CatalogModel.Media(),

      landscape: CatalogModel.Media(),
    });
  }

  static BrandItem() {
    return Joi.object({
      description: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      departments: Joi.array().items(Joi.string().allow("")),
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
      description: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
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
      action: CatalogModel.ProductListingAction().required(),

      uid: Joi.number().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      banners: CatalogModel.CategoryBanner().required(),
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

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      message: Joi.string().allow(""),
    });
  }

  static Department() {
    return Joi.object({
      priority_order: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

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
      display: Joi.string().allow(""),

      type: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      _custom_json: Joi.any(),

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
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      _schedule: Joi.any(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      meta: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      app_id: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      _schedule: Joi.any(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      meta: Joi.any(),

      app_id: Joi.string().allow(""),
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
      coordinates: Joi.array().items(Joi.number()),

      type: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      address: Joi.string().allow(""),

      uid: Joi.number(),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pincode: Joi.number(),

      store_code: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Store()).required(),

      page: CatalogModel.Page().required(),
    });
  }

  static CompanyStore() {
    return Joi.object({
      company_type: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

      mobile_no: CatalogModel.SellerPhoneNumber(),

      name: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      state: Joi.string().allow(""),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      pincode: Joi.number(),
    });
  }

  static StoreDepartments() {
    return Joi.object({
      priority_order: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      uid: Joi.number(),

      address: CatalogModel.StoreAddressSerializer(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),
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
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static StoreTiming() {
    return Joi.object({
      closing: CatalogModel.Time(),

      open: Joi.boolean(),

      opening: CatalogModel.Time(),

      weekday: Joi.string().allow(""),
    });
  }

  static StoreDetails() {
    return Joi.object({
      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      uid: Joi.number(),

      address: CatalogModel.StoreAddressSerializer(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      quantity: Joi.number(),

      display: Joi.any(),

      value: Joi.any(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_effective: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      currency: Joi.any(),

      min_marked: Joi.number(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      image_nature: Joi.any(),

      country_of_origin: Joi.any(),

      brand_uid: Joi.number(),

      rating_count: Joi.number(),

      identifier: Joi.any(),

      rating: Joi.number(),

      description: Joi.any(),

      is_set: Joi.boolean(),

      highlights: Joi.array().items(Joi.any()),

      media: Joi.array().items(Joi.any()),

      slug: Joi.any(),

      template_tag: Joi.any(),

      grouped_attributes: Joi.any(),

      images: Joi.array().items(Joi.any()),

      hsn_code: Joi.number(),

      name: Joi.any(),

      short_description: Joi.any(),

      out_of_stock: Joi.boolean(),

      item_code: Joi.any(),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.ProductGroupPrice(),

      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),

      product_details: CatalogModel.ProductDetails(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),
    });
  }

  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),

      super_user: Joi.boolean(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      same_store_assignment: Joi.boolean(),

      verified_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserDetail(),

      choice: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      logo: Joi.any(),

      company_id: Joi.number(),

      _id: Joi.any(),

      created_on: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.any()),

      name: Joi.any().required(),

      slug: Joi.any(),

      meta: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static SellerV3() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static StoreV3() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
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
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
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

  static ProductStockUnitPriceV3() {
    return Joi.object({
      unit: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      price: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
    });
  }

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      tat: Joi.number(),

      distance: Joi.number(),

      quantity: Joi.number(),

      pincode: Joi.number(),
    });
  }

  static ArticleAssignmentV3() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      price: CatalogModel.ProductStockPriceV3(),

      special_badge: Joi.string().allow(""),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      seller: CatalogModel.SellerV3(),

      store: CatalogModel.StoreV3(),

      item_type: Joi.string().allow(""),

      seller_count: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      set: CatalogModel.ProductSetV3(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      long_lat: Joi.array().items(Joi.number()),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      pincode: Joi.number(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      is_gift: Joi.boolean(),

      discount: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      article_id: Joi.string().allow(""),

      is_cod: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static ProductSizeSellerFilterSchemaV3() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
