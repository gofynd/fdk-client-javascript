const Joi = require("joi");

class CatalogModel {
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

  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      url: Joi.string().allow(""),

      alt: Joi.string().allow(""),

      meta: CatalogModel.Meta(),

      type: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      logo: CatalogModel.Media(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l2: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),
    });
  }

  static CustomMetaFields() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
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
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      value: Joi.string().allow(""),

      key: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),
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
      rating: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      category_map: CatalogModel.ProductCategoryMap(),

      discount: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      _custom_json: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      is_dependent: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      color: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      brand: CatalogModel.ProductBrand(),

      rating_count: Joi.number(),

      attributes: Joi.any(),

      item_type: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      price: CatalogModel.ProductListingPrice(),

      type: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      product_online_date: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_6: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

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
      col_6: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      unit: Joi.string().allow(""),

      image: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      headers: CatalogModel.ColumnHeaders(),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static Dimension() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      width: Joi.number().required(),

      length: Joi.number().required(),
    });
  }

  static Weight() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      dimension: CatalogModel.Dimension(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      weight: CatalogModel.Weight(),

      value: Joi.string().allow(""),

      quantity: Joi.number(),

      is_available: Joi.boolean(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      sellable: Joi.boolean(),

      price: CatalogModel.ProductListingPrice(),

      size_chart: CatalogModel.SizeChart(),

      discount: Joi.string().allow(""),

      stores: CatalogModel.ProductSizeStores(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      multi_size: Joi.boolean(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),
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
      color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      value: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media()),

      slug: Joi.string().allow(""),

      color_name: Joi.string().allow(""),

      is_available: Joi.boolean(),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),

      key: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
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

  static StoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),

      city: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      identifier: Joi.any(),

      price: CatalogModel.ProductStockPrice(),

      company: CatalogModel.CompanyDetail(),

      seller: CatalogModel.Seller(),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),

      quantity: Joi.number(),

      store: CatalogModel.StoreDetail(),

      item_id: Joi.number(),
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

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      selected_min: Joi.number(),

      is_selected: Joi.boolean().required(),

      display_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      selected_max: Joi.number(),

      value: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      count: Joi.number(),

      query_format: Joi.string().allow(""),

      min: Joi.number(),

      max: Joi.number(),
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
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      total: Joi.number(),

      display_type: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      rating: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      category_map: CatalogModel.ProductCategoryMap(),

      discount: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      identifiers: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      is_dependent: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      color: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      brand: CatalogModel.ProductBrand(),

      rating_count: Joi.number(),

      attributes: Joi.any(),

      item_type: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      price: CatalogModel.ProductListingPrice(),

      type: Joi.string().allow(""),

      sellable: Joi.boolean(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      product_online_date: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),
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

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),

      uid: Joi.number(),

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
      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),

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
      portrait: CatalogModel.Media().required(),

      landscape: CatalogModel.Media().required(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      banners: CatalogModel.CategoryBanner().required(),

      action: CatalogModel.ProductListingAction().required(),

      uid: Joi.number().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      slug: Joi.string().allow("").required(),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.CategoryItems()),

      department: Joi.string().allow("").required(),
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
      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),
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
      type: Joi.string().allow(""),

      display: Joi.string().allow(""),

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
      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      app_id: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),

      _custom_json: Joi.any(),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      badge: Joi.any(),

      uid: Joi.string().allow(""),
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
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      app_id: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),

      _custom_json: Joi.any(),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      badge: Joi.any(),
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
      coordinates: Joi.array().items(Joi.number()),

      type: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      lat_long: CatalogModel.LatLong(),

      store_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      store_email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      uid: Joi.number(),

      city: Joi.string().allow(""),
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

  static CompanyStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      latitude: Joi.number(),

      address1: Joi.string().allow(""),

      longitude: Joi.number(),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),
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

      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber(),
    });
  }

  static AppStore() {
    return Joi.object({
      company: CatalogModel.CompanyStore(),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      manager: CatalogModel.StoreManagerSerializer(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

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
      open: Joi.boolean(),

      weekday: Joi.string().allow(""),

      opening: CatalogModel.Time(),

      closing: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      company: CatalogModel.CompanyStore(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      manager: CatalogModel.StoreManagerSerializer(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
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

  static ProductGroupPrice() {
    return Joi.object({
      currency: Joi.string().allow(""),

      min_effective: Joi.number(),

      min_marked: Joi.number(),

      max_effective: Joi.number(),

      max_marked: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      rating: Joi.number(),

      media: Joi.array().items(Joi.any()),

      short_description: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      identifier: Joi.any(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      brand_uid: Joi.number(),

      grouped_attributes: Joi.any(),

      rating_count: Joi.number(),

      attributes: Joi.any(),

      template_tag: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      hsn_code: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      images: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),

      is_set: Joi.boolean(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      product_uid: Joi.number().required(),

      price: CatalogModel.ProductGroupPrice(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.ProductDetails(),

      min_quantity: Joi.number(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      is_active: Joi.boolean(),

      choice: Joi.string().allow(""),

      _id: Joi.any(),

      meta: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      modified_on: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      verified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),
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

  static SellerV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
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

  static ProductStockPriceV3() {
    return Joi.object({
      marked: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static DetailsSchemaV3() {
    return Joi.object({
      value: Joi.string().allow(""),

      key: Joi.string().allow(""),

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

  static StoreV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
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

  static ProductStockUnitPriceV3() {
    return Joi.object({
      unit: Joi.string().allow(""),

      price: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      article_assignment: CatalogModel.ArticleAssignmentV3(),

      long_lat: Joi.array().items(Joi.number()),

      discount: Joi.string().allow(""),

      seller: CatalogModel.SellerV3(),

      article_id: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      set: CatalogModel.ProductSetV3(),

      is_gift: Joi.boolean(),

      pincode: Joi.number(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      item_type: Joi.string().allow(""),

      special_badge: Joi.string().allow(""),

      seller_count: Joi.number(),

      store: CatalogModel.StoreV3(),

      quantity: Joi.number(),

      price: CatalogModel.ProductStockPriceV3(),

      is_cod: Joi.boolean(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),
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
      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),

      page: CatalogModel.Page().required(),
    });
  }
}
module.exports = CatalogModel;
