const Joi = require("joi");

class CatalogModel {
  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
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

      alt: Joi.string().allow(""),

      url: Joi.string().allow(""),
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

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogModel.Price(),

      marked: CatalogModel.Price(),
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

  static ProductBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),
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

  static ProductCategoryMap() {
    return Joi.object({
      l3: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      medias: Joi.array().items(CatalogModel.Media()),

      seo: CatalogModel.ApplicationItemSEO(),

      discount: Joi.string().allow(""),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      price: CatalogModel.ProductListingPrice(),

      rating_count: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      is_dependent: Joi.boolean(),

      color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating: Joi.number(),

      uid: Joi.number(),

      category_map: CatalogModel.ProductCategoryMap(),

      moq: CatalogModel.ApplicationItemMOQ(),

      teaser_tag: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      item_type: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static Dimension() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      length: Joi.number().required(),

      width: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      is_available: Joi.boolean(),

      weight: CatalogModel.Weight(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      dimension: CatalogModel.Dimension(),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
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
      col_5: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_5: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_6: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      size_tip: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      unit: Joi.string().allow(""),

      description: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      image: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ProductSizes() {
    return Joi.object({
      price: CatalogModel.ProductListingPrice(),

      multi_size: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      stores: CatalogModel.ProductSizeStores(),

      size_chart: CatalogModel.SizeChart(),

      sellable: Joi.boolean(),

      discount: Joi.string().allow(""),
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
      is_available: Joi.boolean(),

      name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      color_name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      value: Joi.string().allow(""),

      color: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

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

  static StoreDetail() {
    return Joi.object({
      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      identifier: Joi.any(),

      store: CatalogModel.StoreDetail(),

      size: Joi.string().allow(""),

      price: CatalogModel.ProductStockPrice(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      company: CatalogModel.CompanyDetail(),

      seller: CatalogModel.Seller(),

      uid: Joi.string().allow(""),
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
      header: Joi.string().allow(""),

      key: Joi.string().allow(""),

      total: Joi.number(),

      display_type: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      medias: Joi.array().items(CatalogModel.Media()),

      seo: CatalogModel.ApplicationItemSEO(),

      discount: Joi.string().allow(""),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      price: CatalogModel.ProductListingPrice(),

      rating_count: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      is_dependent: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      identifiers: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating: Joi.number(),

      uid: Joi.number(),

      category_map: CatalogModel.ProductCategoryMap(),

      moq: CatalogModel.ApplicationItemMOQ(),

      teaser_tag: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      sellable: Joi.boolean(),

      item_type: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
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
      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      value: Joi.string().allow(""),

      max: Joi.number(),

      selected_max: Joi.number(),

      count: Joi.number(),

      display_format: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      currency_code: Joi.string().allow(""),

      selected_min: Joi.number(),
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
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

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
      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      departments: Joi.array().items(Joi.string().allow("")),

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
      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),
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
      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),
    });
  }

  static Child() {
    return Joi.object({
      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      banners: CatalogModel.CategoryBanner().required(),

      action: CatalogModel.ProductListingAction().required(),

      slug: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      childs: Joi.array().items(CatalogModel.Child()),
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
      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

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

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

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
      action: CatalogModel.ProductListingAction(),

      type: Joi.string().allow(""),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),
    });
  }

  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.AutocompleteItem()),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

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
      badge: Joi.any(),

      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      cron: Joi.any(),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),

      app_id: Joi.string().allow(""),

      meta: Joi.any(),

      _custom_json: Joi.any(),
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
      badge: Joi.any(),

      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      cron: Joi.any(),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),

      app_id: Joi.string().allow(""),

      meta: Joi.any(),

      _custom_json: Joi.any(),
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
      pincode: Joi.number(),

      name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      country: Joi.string().allow(""),

      address: Joi.string().allow(""),

      city: Joi.string().allow(""),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),
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

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      logo: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      latitude: Joi.number(),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),
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

  static AppStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: CatalogModel.StoreAddressSerializer(),

      manager: CatalogModel.StoreManagerSerializer(),

      company: CatalogModel.CompanyStore(),

      uid: Joi.number(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),
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

      closing: CatalogModel.Time(),

      open: Joi.boolean(),

      opening: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: CatalogModel.StoreAddressSerializer(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      manager: CatalogModel.StoreManagerSerializer(),

      company: CatalogModel.CompanyStore(),

      uid: Joi.number(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      _custom_json: Joi.any(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      currency: Joi.any(),

      max_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),

      min_effective: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.any(),

      quantity: Joi.number(),

      is_available: Joi.boolean(),

      display: Joi.any(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      is_set: Joi.boolean(),

      name: Joi.any(),

      template_tag: Joi.any(),

      image_nature: Joi.any(),

      item_code: Joi.any(),

      out_of_stock: Joi.boolean(),

      slug: Joi.any(),

      country_of_origin: Joi.any(),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      rating_count: Joi.number(),

      hsn_code: Joi.number(),

      highlights: Joi.array().items(Joi.any()),

      identifier: Joi.any(),

      description: Joi.any(),

      grouped_attributes: Joi.any(),

      media: Joi.array().items(Joi.any()),

      rating: Joi.number(),

      images: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      short_description: Joi.any(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      min_quantity: Joi.number(),

      price: CatalogModel.ProductGroupPrice(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.ProductDetails(),

      product_uid: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static UserDetail() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      is_active: Joi.boolean(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      name: Joi.any().required(),

      modified_on: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.any()),

      _id: Joi.any(),

      choice: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      same_store_assignment: Joi.boolean(),

      verified_by: CatalogModel.UserDetail(),

      slug: Joi.any(),

      verified_on: Joi.string().allow(""),

      meta: Joi.any(),

      company_id: Joi.number(),

      created_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").allow(null),
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

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      pincode: Joi.number(),

      tat: Joi.number(),

      distance: Joi.number(),

      quantity: Joi.number(),
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

  static ReturnConfigSchemaV3() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static ArticleAssignmentV3() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static ProductStockUnitPriceV3() {
    return Joi.object({
      price: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      unit: Joi.string().allow(""),
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
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      pincode: Joi.number(),

      special_badge: Joi.string().allow(""),

      quantity: Joi.number(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      set: CatalogModel.ProductSetV3(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      seller: CatalogModel.SellerV3(),

      discount: Joi.string().allow(""),

      store: CatalogModel.StoreV3(),

      price: CatalogModel.ProductStockPriceV3(),

      is_cod: Joi.boolean(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      long_lat: Joi.array().items(Joi.number()),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      seller_count: Joi.number(),

      article_id: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      item_type: Joi.string().allow(""),

      is_gift: Joi.boolean(),
    });
  }

  static ProductSizeSellerFilterSchemaV3() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static ProductSizeSellersResponseV3() {
    return Joi.object({
      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),
    });
  }
}
module.exports = CatalogModel;
