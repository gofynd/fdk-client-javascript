const Joi = require("joi");

class CatalogModel {
  static Price() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      max: Joi.number(),

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

  static CustomMetaFields() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
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
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
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

  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      alt: Joi.string().allow(""),

      meta: CatalogModel.Meta(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l2: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.any(),

      description: Joi.any(),
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
      price: CatalogModel.ProductListingPrice(),

      highlights: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      category_map: CatalogModel.ProductCategoryMap(),

      short_description: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      net_quantity: CatalogModel.NetQuantity(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      is_dependent: Joi.boolean(),

      medias: Joi.array().items(CatalogModel.Media()),

      slug: Joi.string().allow("").required(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      item_type: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      _custom_json: Joi.any(),

      rating_count: Joi.number(),
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

      length: Joi.number().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),
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
      is_available: Joi.boolean(),

      dimension: CatalogModel.Dimension(),

      display: Joi.string().allow(""),

      quantity: Joi.number(),

      value: Joi.string().allow(""),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      weight: CatalogModel.Weight(),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_5: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

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
      col_5: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      title: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      image: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      description: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static ProductSizes() {
    return Joi.object({
      discount: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      price: CatalogModel.ProductListingPrice(),

      multi_size: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      size_chart: CatalogModel.SizeChart(),

      sellable: Joi.boolean(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      display: Joi.string().allow(""),

      description: Joi.string().allow(""),

      key: Joi.string().allow(""),

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

      subtitle: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductDetail()),

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
      action: CatalogModel.ProductListingAction(),

      is_available: Joi.boolean(),

      name: Joi.string().allow(""),

      color_name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      uid: Joi.number(),

      color: Joi.string().allow(""),
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

      count: Joi.number(),

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

  static CompanyDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      seller: CatalogModel.Seller(),

      identifier: Joi.any(),

      price: CatalogModel.ProductStockPrice(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      company: CatalogModel.CompanyDetail(),

      store: CatalogModel.StoreDetail(),

      size: Joi.string().allow(""),

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

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      selected_min: Joi.number(),

      display: Joi.string().allow("").required(),

      min: Joi.number(),

      is_selected: Joi.boolean().required(),

      selected_max: Joi.number(),

      value: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),

      query_format: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),

      key: CatalogModel.ProductFiltersKey().required(),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),

      total: Joi.number(),

      header: Joi.string().allow(""),

      key: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      price: CatalogModel.ProductListingPrice(),

      sizes: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      category_map: CatalogModel.ProductCategoryMap(),

      short_description: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      net_quantity: CatalogModel.NetQuantity(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      sellable: Joi.boolean(),

      is_dependent: Joi.boolean(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media()),

      slug: Joi.string().allow("").required(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      item_type: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      _custom_json: Joi.any(),

      rating_count: Joi.number(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
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
      landscape: CatalogModel.Media(),

      portrait: CatalogModel.Media(),
    });
  }

  static BrandItem() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      discount: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

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
      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),
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
      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
    });
  }

  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.ProductListingAction().required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      banners: CatalogModel.CategoryBanner().required(),

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
      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

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
      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

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

      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),

      type: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.AutocompleteItem()),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

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
      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_facets: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      uid: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      cron: Joi.any(),

      _custom_json: Joi.any(),

      sort_on: Joi.string().allow(""),
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

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_facets: Joi.boolean(),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      is_active: Joi.boolean(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      cron: Joi.any(),

      _custom_json: Joi.any(),

      sort_on: Joi.string().allow(""),
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
      pincode: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      city: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      state: Joi.string().allow(""),

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
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      priority_order: Joi.number(),
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

  static CompanyStore() {
    return Joi.object({
      uid: Joi.number(),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),
    });
  }

  static AppStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      manager: CatalogModel.StoreManagerSerializer(),

      company: CatalogModel.CompanyStore(),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

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
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static StoreTiming() {
    return Joi.object({
      opening: CatalogModel.Time(),

      weekday: Joi.string().allow(""),

      closing: CatalogModel.Time(),

      open: Joi.boolean(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      name: Joi.string().allow(""),

      manager: CatalogModel.StoreManagerSerializer(),

      company: CatalogModel.CompanyStore(),

      address: CatalogModel.StoreAddressSerializer(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
    });
  }

  static UserDetail() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.any(),

      display: Joi.any(),

      quantity: Joi.number(),

      is_available: Joi.boolean(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_effective: Joi.number(),

      min_effective: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.any(),

      max_marked: Joi.number(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      images: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      highlights: Joi.array().items(Joi.any()),

      attributes: Joi.any(),

      is_set: Joi.boolean(),

      country_of_origin: Joi.any(),

      description: Joi.any(),

      grouped_attributes: Joi.any(),

      short_description: Joi.any(),

      name: Joi.any(),

      template_tag: Joi.any(),

      image_nature: Joi.any(),

      item_code: Joi.any(),

      identifier: Joi.any(),

      hsn_code: Joi.number(),

      media: Joi.array().items(Joi.any()),

      rating: Joi.number(),

      slug: Joi.any(),

      has_variant: Joi.boolean(),

      rating_count: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.ProductGroupPrice(),

      product_details: CatalogModel.ProductDetails(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),

      product_uid: Joi.number().required(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      modified_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.any()),

      name: Joi.any().required(),

      created_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      slug: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      _id: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      choice: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      company_id: Joi.number(),

      verified_on: Joi.string().allow(""),

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

  static ArticleAssignmentV2() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static DetailsSchemaV2() {
    return Joi.object({
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),
    });
  }

  static SellerV2() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
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
      quantity: Joi.number(),

      size_distribution: CatalogModel.ProductSetDistributionV2(),
    });
  }

  static StrategyWiseListingSchemaV2() {
    return Joi.object({
      pincode: Joi.number(),

      distance: Joi.number(),

      quantity: Joi.number(),

      tat: Joi.number(),
    });
  }

  static ReturnConfigSchemaV2() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static ProductStockUnitPriceV2() {
    return Joi.object({
      price: Joi.number(),

      currency_code: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static StoreV2() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV2() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      long_lat: Joi.array().items(Joi.number()),

      price: CatalogModel.ProductStockPriceV2(),

      special_badge: Joi.string().allow(""),

      is_gift: Joi.boolean(),

      price_per_piece: CatalogModel.ProductStockPriceV2(),

      article_assignment: CatalogModel.ArticleAssignmentV2(),

      article_id: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      seller: CatalogModel.SellerV2(),

      pincode: Joi.number(),

      set: CatalogModel.ProductSetV2(),

      is_serviceable: Joi.boolean(),

      quantity: Joi.number(),

      seller_count: Joi.number(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV2()
      ),

      discount: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigSchemaV2(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV2(),

      store: CatalogModel.StoreV2(),

      item_type: Joi.string().allow(""),

      is_cod: Joi.boolean(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV2()
      ),
    });
  }

  static ProductSizePriceResponseV2() {
    return Joi.object({
      long_lat: Joi.array().items(Joi.number()),

      price: CatalogModel.ProductStockPriceV2(),

      special_badge: Joi.string().allow(""),

      is_gift: Joi.boolean(),

      price_per_piece: CatalogModel.ProductStockPriceV2(),

      article_assignment: CatalogModel.ArticleAssignmentV2(),

      article_id: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      seller: CatalogModel.SellerV2(),

      pincode: Joi.number(),

      set: CatalogModel.ProductSetV2(),

      quantity: Joi.number(),

      seller_count: Joi.number(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV2()
      ),

      discount: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigSchemaV2(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV2(),

      store: CatalogModel.StoreV2(),

      item_type: Joi.string().allow(""),

      is_cod: Joi.boolean(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV2()
      ),
    });
  }

  static ProductSizeSellerFilterSchemaV2() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static ProductSizeSellersResponseV3() {
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
