const Joi = require("joi");

class CatalogModel {
  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
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

      url: Joi.string().allow(""),

      alt: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),
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

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogModel.Price(),

      marked: CatalogModel.Price(),
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

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
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
      l3: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      moq: CatalogModel.ApplicationItemMOQ(),

      rating: Joi.number(),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      price: CatalogModel.ProductListingPrice(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      medias: Joi.array().items(CatalogModel.Media()),

      item_type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      rating_count: Joi.number(),

      type: Joi.string().allow(""),

      attributes: Joi.any(),

      item_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantity(),

      _custom_json: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      seo: CatalogModel.ApplicationItemSEO(),

      is_dependent: Joi.boolean(),

      teaser_tag: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      description: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),
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
      col_4: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_4: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_1: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      size_tip: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      description: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      title: Joi.string().allow(""),

      image: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static Dimension() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

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

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      weight: CatalogModel.Weight(),

      quantity: Joi.number(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      is_available: Joi.boolean(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      size_chart: CatalogModel.SizeChart(),

      price: CatalogModel.ProductListingPrice(),

      sellable: Joi.boolean(),

      multi_size: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      discount: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.ProductSize()),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      uid: Joi.number(),

      value: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      color_name: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      is_available: Joi.boolean(),

      color: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),
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

  static ProductStockPrice() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),
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
      uid: Joi.string().allow(""),

      item_id: Joi.number(),

      size: Joi.string().allow(""),

      store: CatalogModel.StoreDetail(),

      price: CatalogModel.ProductStockPrice(),

      company: CatalogModel.CompanyDetail(),

      identifier: Joi.any(),

      quantity: Joi.number(),

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

  static ProductSortOn() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
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

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      value: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      is_selected: Joi.boolean().required(),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      selected_min: Joi.number(),

      query_format: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      selected_max: Joi.number(),

      display_format: Joi.string().allow(""),
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
      header: Joi.string().allow(""),

      total: Joi.number(),

      display_type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      moq: CatalogModel.ApplicationItemMOQ(),

      rating: Joi.number(),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      price: CatalogModel.ProductListingPrice(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      medias: Joi.array().items(CatalogModel.Media()),

      item_type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      has_variant: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      rating_count: Joi.number(),

      type: Joi.string().allow(""),

      attributes: Joi.any(),

      item_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantity(),

      _custom_json: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),

      similars: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      seo: CatalogModel.ApplicationItemSEO(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),

      sellable: Joi.boolean(),

      teaser_tag: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      description: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
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

      action: CatalogModel.ProductListingAction(),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),
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
      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number().required(),

      action: CatalogModel.ProductListingAction().required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      banners: CatalogModel.CategoryBanner().required(),

      childs: Joi.array().items(CatalogModel.Child()),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      message: Joi.string().allow(""),
    });
  }

  static Department() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

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
      action: CatalogModel.ProductListingAction(),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      type: Joi.string().allow(""),

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

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      cron: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tag: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      type: Joi.string().allow(""),

      meta: Joi.any(),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      allow_facets: Joi.boolean(),

      uid: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      badge: Joi.any(),
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
      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      cron: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tag: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      type: Joi.string().allow(""),

      meta: Joi.any(),

      _custom_json: Joi.any(),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      badge: Joi.any(),
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
      uid: Joi.number(),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      address: Joi.string().allow(""),

      pincode: Joi.number(),

      store_email: Joi.string().allow(""),

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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),
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
      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static AppStore() {
    return Joi.object({
      uid: Joi.number(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      manager: CatalogModel.StoreManagerSerializer(),

      company: CatalogModel.CompanyStore(),

      address: CatalogModel.StoreAddressSerializer(),
    });
  }

  static ApplicationStoreListing() {
    return Joi.object({
      page: CatalogModel.Page(),

      filters: Joi.array().items(CatalogModel.StoreDepartments()),

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

      opening: CatalogModel.Time(),

      closing: CatalogModel.Time(),

      open: Joi.boolean(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      uid: Joi.number(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      manager: CatalogModel.StoreManagerSerializer(),

      company: CatalogModel.CompanyStore(),

      address: CatalogModel.StoreAddressSerializer(),

      _custom_json: Joi.any(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),
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

  static ProductDetails() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      name: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      hsn_code: Joi.number(),

      grouped_attributes: Joi.any(),

      has_variant: Joi.boolean(),

      country_of_origin: Joi.string().allow(""),

      is_set: Joi.boolean(),

      rating_count: Joi.number(),

      slug: Joi.string().allow(""),

      out_of_stock: Joi.boolean(),

      attributes: Joi.any(),

      item_code: Joi.string().allow(""),

      media: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),

      brand_uid: Joi.number(),

      short_description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      identifier: Joi.any(),

      description: Joi.string().allow(""),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_marked: Joi.number(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      product_details: CatalogModel.ProductDetails(),

      price: CatalogModel.ProductGroupPrice(),

      product_uid: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserDetail(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _id: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      modified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),
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

  static SellerV3() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
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
      size_distribution: CatalogModel.ProductSetDistributionV3(),

      quantity: Joi.number(),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),
    });
  }

  static ArticleAssignmentV3() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      pincode: Joi.number(),

      distance: Joi.number(),

      tat: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static StoreV3() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
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

  static ProductSizePriceResponseV3() {
    return Joi.object({
      price: CatalogModel.ProductStockPriceV3(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      item_type: Joi.string().allow(""),

      seller: CatalogModel.SellerV3(),

      long_lat: Joi.array().items(Joi.number()),

      special_badge: Joi.string().allow(""),

      set: CatalogModel.ProductSetV3(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      is_cod: Joi.boolean(),

      seller_count: Joi.number(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      is_gift: Joi.boolean(),

      store: CatalogModel.StoreV3(),

      article_id: Joi.string().allow(""),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      pincode: Joi.number(),

      discount: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static ProductSizeSellerFilterSchemaV3() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
