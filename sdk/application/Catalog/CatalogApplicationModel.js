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
      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),
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

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l1: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),
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

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

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
      effective: CatalogModel.Price(),

      marked: CatalogModel.Price(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      highlights: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),

      _custom_json: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      uid: Joi.number(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      moq: CatalogModel.ApplicationItemMOQ(),

      item_code: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      seo: CatalogModel.ApplicationItemSEO(),

      teaser_tag: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      action: CatalogModel.ProductListingAction(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      discount: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media()),

      slug: Joi.string().allow("").required(),

      rating_count: Joi.number(),

      has_variant: Joi.boolean(),

      description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      type: Joi.string().allow(""),
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

  static ColumnHeader() {
    return Joi.object({
      value: Joi.string().allow(""),

      convertable: Joi.boolean(),
    });
  }

  static ColumnHeaders() {
    return Joi.object({
      col_6: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_6: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_2: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      unit: Joi.string().allow(""),

      image: Joi.string().allow(""),

      title: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      size_tip: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      description: Joi.string().allow(""),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static Dimension() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      height: Joi.number().required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      is_available: Joi.boolean(),

      value: Joi.string().allow(""),

      weight: CatalogModel.Weight(),

      display: Joi.string().allow(""),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      dimension: CatalogModel.Dimension(),

      quantity: Joi.number(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      sellable: Joi.boolean(),

      discount: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      size_chart: CatalogModel.SizeChart(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      price: CatalogModel.ProductListingPrice(),
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
      color_name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      is_available: Joi.boolean(),

      color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      uid: Joi.number(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),
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

  static StoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      id: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static CompanyDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      effective: Joi.number(),

      currency: Joi.string().allow(""),

      marked: Joi.number(),
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

      store: CatalogModel.StoreDetail(),

      company: CatalogModel.CompanyDetail(),

      price: CatalogModel.ProductStockPrice(),

      item_id: Joi.number(),

      seller: CatalogModel.Seller(),

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
      header: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      total: Joi.number(),

      key: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      highlights: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),

      _custom_json: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      uid: Joi.number(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      moq: CatalogModel.ApplicationItemMOQ(),

      item_code: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      rating: Joi.number(),

      seo: CatalogModel.ApplicationItemSEO(),

      teaser_tag: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      action: CatalogModel.ProductListingAction(),

      sellable: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      discount: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      identifiers: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media()),

      slug: Joi.string().allow("").required(),

      rating_count: Joi.number(),

      has_variant: Joi.boolean(),

      description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      type: Joi.string().allow(""),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

      selected_min: Joi.number(),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      count: Joi.number(),

      display: Joi.string().allow("").required(),

      query_format: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

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
      landscape: CatalogModel.Media(),

      portrait: CatalogModel.Media(),
    });
  }

  static BrandItem() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      discount: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      departments: Joi.array().items(Joi.string().allow("")),

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
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),
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
      action: CatalogModel.ProductListingAction(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
    });
  }

  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.ProductListingAction().required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      banners: CatalogModel.CategoryBanner().required(),

      childs: Joi.array().items(CatalogModel.Child()),
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

      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      message: Joi.string().allow(""),

      page: CatalogModel.Page().required(),
    });
  }

  static Department() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

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

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

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

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      description: Joi.string().allow(""),

      _schedule: Joi.any(),

      name: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

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

      filters: CatalogModel.CollectionListingFilter(),

      page: CatalogModel.Page().required(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      description: Joi.string().allow(""),

      _schedule: Joi.any(),

      name: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
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
      collections: Joi.array().items(Joi.number()),

      brands: Joi.array().items(Joi.number()),

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
      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      pincode: Joi.number(),

      store_email: Joi.string().allow(""),

      address: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Store()).required(),

      page: CatalogModel.Page().required(),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static CompanyStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),
    });
  }

  static StoreManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber(),

      email: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      longitude: Joi.number(),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),
    });
  }

  static StoreDepartments() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      uid: Joi.number(),

      logo: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      uid: Joi.number(),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),
    });
  }

  static ApplicationStoreListing() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.AppStore()),

      filters: Joi.array().items(CatalogModel.StoreDepartments()),

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
      weekday: Joi.string().allow(""),

      open: Joi.boolean(),

      opening: CatalogModel.Time(),

      closing: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      uid: Joi.number(),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),
    });
  }

  static UserDetail() {
    return Joi.object({
      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      min_effective: Joi.number(),

      max_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static ProductDetails() {
    return Joi.object({
      highlights: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      rating: Joi.number(),

      grouped_attributes: Joi.any(),

      out_of_stock: Joi.boolean(),

      short_description: Joi.string().allow(""),

      identifier: Joi.any(),

      media: Joi.array().items(Joi.any()),

      is_set: Joi.boolean(),

      attributes: Joi.any(),

      slug: Joi.string().allow(""),

      rating_count: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      hsn_code: Joi.number(),

      description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      brand_uid: Joi.number(),

      name: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      min_quantity: Joi.number(),

      product_uid: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.ProductGroupPrice(),

      auto_select: Joi.boolean(),

      product_details: CatalogModel.ProductDetails(),

      max_quantity: Joi.number().required(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      choice: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      _id: Joi.any(),

      verified_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      company_id: Joi.number(),

      created_by: CatalogModel.UserDetail(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      verified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static DetailsSchemaV3() {
    return Joi.object({
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),
    });
  }

  static StoreV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),
    });
  }

  static SellerV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
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

  static ReturnConfigSchemaV3() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
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

  static ProductStockPriceV3() {
    return Joi.object({
      effective: Joi.number(),

      currency: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      store: CatalogModel.StoreV3(),

      quantity: Joi.number(),

      is_cod: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      discount: Joi.string().allow(""),

      pincode: Joi.number(),

      seller: CatalogModel.SellerV3(),

      item_type: Joi.string().allow(""),

      is_gift: Joi.boolean(),

      set: CatalogModel.ProductSetV3(),

      long_lat: Joi.array().items(Joi.number()),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      seller_count: Joi.number(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      article_id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      price: CatalogModel.ProductStockPriceV3(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      special_badge: Joi.string().allow(""),
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

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),

      page: CatalogModel.Page().required(),
    });
  }
}
module.exports = CatalogModel;
