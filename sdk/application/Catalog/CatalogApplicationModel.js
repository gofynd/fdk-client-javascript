const Joi = require("joi");

class CatalogModel {
  static Price() {
    return Joi.object({
      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: CatalogModel.Price(),

      effective: CatalogModel.Price(),
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

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      meta: CatalogModel.Meta(),
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
      page: CatalogModel.ProductListingActionPage(),

      type: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
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
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),

      title: Joi.string().allow(""),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.any(),

      description: Joi.any(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),
    });
  }

  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l2: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      uid: Joi.number(),

      rating: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      medias: Joi.array().items(CatalogModel.Media()),

      product_online_date: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow("").required(),

      has_variant: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantity(),

      item_code: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      moq: CatalogModel.ApplicationItemMOQ(),

      seo: CatalogModel.ApplicationItemSEO(),

      teaser_tag: Joi.string().allow(""),

      attributes: Joi.any(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      is_dependent: Joi.boolean(),

      rating_count: Joi.number(),

      _custom_json: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      category_map: CatalogModel.ProductCategoryMap(),

      tags: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      item_type: Joi.string().allow(""),
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
      col_6: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_6: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_3: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      headers: CatalogModel.ColumnHeaders(),

      size_tip: Joi.string().allow(""),

      image: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static Dimension() {
    return Joi.object({
      length: Joi.number().required(),

      is_default: Joi.boolean().required(),

      width: Joi.number().required(),

      height: Joi.number().required(),

      unit: Joi.string().allow("").required(),
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

      value: Joi.string().allow(""),

      quantity: Joi.number(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      dimension: CatalogModel.Dimension(),

      weight: CatalogModel.Weight(),

      display: Joi.string().allow(""),
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

      discount: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      multi_size: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      sellable: Joi.boolean(),
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

      title: Joi.string().allow(""),

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
      uid: Joi.number(),

      is_available: Joi.boolean(),

      color_name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      medias: Joi.array().items(CatalogModel.Media()),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      color: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      header: Joi.string().allow(""),

      key: Joi.string().allow(""),

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
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static Seller() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      id: Joi.number(),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static CompanyDetail() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      uid: Joi.string().allow(""),

      price: CatalogModel.ProductStockPrice(),

      seller: CatalogModel.Seller(),

      store: CatalogModel.StoreDetail(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      company: CatalogModel.CompanyDetail(),

      identifier: Joi.any(),

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
      items: Joi.array().items(CatalogModel.ProductStockStatusItem()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      header: Joi.string().allow(""),

      key: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      uid: Joi.number(),

      rating: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      identifiers: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media()),

      product_online_date: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow("").required(),

      has_variant: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantity(),

      item_code: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      moq: CatalogModel.ApplicationItemMOQ(),

      seo: CatalogModel.ApplicationItemSEO(),

      teaser_tag: Joi.string().allow(""),

      attributes: Joi.any(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      sellable: Joi.boolean(),

      brand: CatalogModel.ProductBrand(),

      is_dependent: Joi.boolean(),

      rating_count: Joi.number(),

      _custom_json: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      category_map: CatalogModel.ProductCategoryMap(),

      sizes: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      item_type: Joi.string().allow(""),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      min: Joi.number(),

      display_format: Joi.string().allow(""),

      value: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      max: Joi.number(),

      selected_min: Joi.number(),

      selected_max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      count: Joi.number(),

      currency_code: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),
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

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
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
      uid: Joi.number(),

      logo: CatalogModel.Media(),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      discount: Joi.string().allow(""),

      description: Joi.string().allow(""),

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
      logo: CatalogModel.Media(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

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

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

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

      name: Joi.string().allow("").required(),

      childs: Joi.array().items(CatalogModel.Child()),

      slug: Joi.string().allow("").required(),

      action: CatalogModel.ProductListingAction().required(),

      banners: CatalogModel.CategoryBanner().required(),
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
      logo: CatalogModel.Media(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

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
      uid: Joi.number(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

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
      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      display: Joi.string().allow(""),

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
      uid: Joi.string().allow(""),

      _schedule: Joi.any(),

      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.ProductListingAction(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      allow_facets: Joi.boolean(),

      cron: Joi.any(),

      logo: CatalogModel.Media(),

      sort_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),
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
      _schedule: Joi.any(),

      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      allow_facets: Joi.boolean(),

      cron: Joi.any(),

      logo: CatalogModel.Media(),

      sort_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      priority: Joi.number(),

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
      uid: Joi.number(),

      address: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      name: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      city: Joi.string().allow(""),
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

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      longitude: Joi.number(),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static CompanyStore() {
    return Joi.object({
      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

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
      mobile_no: CatalogModel.SellerPhoneNumber(),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      uid: Joi.number(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      address: CatalogModel.StoreAddressSerializer(),

      company: CatalogModel.CompanyStore(),

      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      manager: CatalogModel.StoreManagerSerializer(),
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
      weekday: Joi.string().allow(""),

      closing: CatalogModel.Time(),

      opening: CatalogModel.Time(),

      open: Joi.boolean(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      uid: Joi.number(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      address: CatalogModel.StoreAddressSerializer(),

      company: CatalogModel.CompanyStore(),

      _custom_json: Joi.any(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      manager: CatalogModel.StoreManagerSerializer(),
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

  static ProductGroupPrice() {
    return Joi.object({
      max_effective: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      currency: Joi.any(),

      min_marked: Joi.number(),
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
      rating: Joi.number(),

      slug: Joi.any(),

      has_variant: Joi.boolean(),

      item_code: Joi.any(),

      country_of_origin: Joi.any(),

      hsn_code: Joi.number(),

      grouped_attributes: Joi.any(),

      attributes: Joi.any(),

      name: Joi.any(),

      description: Joi.any(),

      short_description: Joi.any(),

      template_tag: Joi.any(),

      rating_count: Joi.number(),

      out_of_stock: Joi.boolean(),

      is_set: Joi.boolean(),

      images: Joi.array().items(Joi.any()),

      highlights: Joi.array().items(Joi.any()),

      media: Joi.array().items(Joi.any()),

      image_nature: Joi.any(),

      brand_uid: Joi.number(),

      identifier: Joi.any(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      price: CatalogModel.ProductGroupPrice(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_uid: Joi.number().required(),

      product_details: CatalogModel.ProductDetails(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      verified_by: CatalogModel.UserDetail(),

      logo: Joi.any(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow("").required(),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.any()),

      name: Joi.any().required(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      same_store_assignment: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      choice: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      slug: Joi.any(),

      meta: Joi.any(),
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
      type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
    });
  }

  static SellerV3() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
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

  static ReturnConfigSchemaV3() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
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

  static StoreV3() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
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

      article_id: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      is_cod: Joi.boolean(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      seller: CatalogModel.SellerV3(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      set: CatalogModel.ProductSetV3(),

      is_gift: Joi.boolean(),

      special_badge: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      store: CatalogModel.StoreV3(),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      long_lat: Joi.array().items(Joi.number()),

      seller_count: Joi.number(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      pincode: Joi.number(),

      item_type: Joi.string().allow(""),
    });
  }

  static ProductSizeSellerFilterSchemaV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

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
