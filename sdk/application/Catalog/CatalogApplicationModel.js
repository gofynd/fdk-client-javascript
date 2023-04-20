const Joi = require("joi");

class CatalogModel {
  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static ProductListingActionPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      params: Joi.any(),

      query: Joi.any(),
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

      url: Joi.string().allow(""),

      meta: CatalogModel.Meta(),

      alt: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      description: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

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

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
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
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
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
      item_code: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      category_map: CatalogModel.ProductCategoryMap(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      name: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      similars: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.ApplicationItemSEO(),

      has_variant: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      is_dependent: Joi.boolean(),

      type: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      attributes: Joi.any(),

      uid: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      slug: Joi.string().allow("").required(),

      discount: Joi.string().allow(""),

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
      length: Joi.number().required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      width: Joi.number().required(),

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
      quantity: Joi.number(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      dimension: CatalogModel.Dimension(),

      weight: CatalogModel.Weight(),

      is_available: Joi.boolean(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_5: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_6: Joi.string().allow(""),
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

      col_4: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      description: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      image: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      unit: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      multi_size: Joi.boolean(),

      price: CatalogModel.ProductListingPrice(),

      sellable: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      discount: Joi.string().allow(""),

      size_chart: CatalogModel.SizeChart(),

      stores: CatalogModel.ProductSizeStores(),
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
      subtitle: Joi.string().allow(""),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      title: Joi.string().allow(""),

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
      uid: Joi.number(),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      color_name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      color: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      is_available: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      medias: Joi.array().items(CatalogModel.Media()),
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

  static Seller() {
    return Joi.object({
      count: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      seller: CatalogModel.Seller(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      price: CatalogModel.ProductStockPrice(),

      company: CatalogModel.CompanyDetail(),

      item_id: Joi.number(),

      store: CatalogModel.StoreDetail(),

      identifier: Joi.any(),

      size: Joi.string().allow(""),
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

      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      category_map: CatalogModel.ProductCategoryMap(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      name: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      sellable: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      similars: Joi.array().items(Joi.string().allow("")),

      identifiers: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.ApplicationItemSEO(),

      has_variant: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      is_dependent: Joi.boolean(),

      type: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      attributes: Joi.any(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      uid: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      slug: Joi.string().allow("").required(),

      discount: Joi.string().allow(""),

      rating_count: Joi.number(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      selected_min: Joi.number(),

      min: Joi.number(),

      query_format: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      count: Joi.number(),

      selected_max: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      kind: Joi.string().allow(""),

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
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      description: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      discount: Joi.string().allow(""),

      logo: CatalogModel.Media(),

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
      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(Joi.any()),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

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

      slug: Joi.string().allow("").required(),

      action: CatalogModel.ProductListingAction().required(),

      childs: Joi.array().items(CatalogModel.Child()),

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
      slug: Joi.string().allow(""),

      uid: Joi.number(),
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
      _custom_json: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),
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
      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      type: Joi.string().allow(""),

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
      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      meta: Joi.any(),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.ProductListingAction(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      uid: Joi.string().allow(""),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      badge: Joi.any(),

      _schedule: Joi.any(),
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

  static GetCollectionListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      page: CatalogModel.Page().required(),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      meta: Joi.any(),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      badge: Joi.any(),

      _schedule: Joi.any(),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      country: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),
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

  static StoreAddressSerializer() {
    return Joi.object({
      latitude: Joi.number(),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      state: Joi.string().allow(""),
    });
  }

  static CompanyStore() {
    return Joi.object({
      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),
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

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      name: Joi.string().allow(""),

      address: CatalogModel.StoreAddressSerializer(),

      company: CatalogModel.CompanyStore(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

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
      opening: CatalogModel.Time(),

      weekday: Joi.string().allow(""),

      closing: CatalogModel.Time(),

      open: Joi.boolean(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      _custom_json: Joi.any(),

      uid: Joi.number(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      name: Joi.string().allow(""),

      address: CatalogModel.StoreAddressSerializer(),

      company: CatalogModel.CompanyStore(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      manager: CatalogModel.StoreManagerSerializer(),
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

  static ProductGroupPrice() {
    return Joi.object({
      currency: Joi.any(),

      min_marked: Joi.number(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      item_code: Joi.any(),

      media: Joi.array().items(Joi.any()),

      name: Joi.any(),

      rating: Joi.number(),

      images: Joi.array().items(Joi.any()),

      grouped_attributes: Joi.any(),

      image_nature: Joi.any(),

      identifier: Joi.any(),

      out_of_stock: Joi.boolean(),

      is_set: Joi.boolean(),

      hsn_code: Joi.number(),

      has_variant: Joi.boolean(),

      highlights: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      description: Joi.any(),

      short_description: Joi.any(),

      country_of_origin: Joi.any(),

      template_tag: Joi.any(),

      attributes: Joi.any(),

      slug: Joi.any(),

      rating_count: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.any(),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      display: Joi.any(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      min_quantity: Joi.number(),

      price: CatalogModel.ProductGroupPrice(),

      auto_add_to_cart: Joi.boolean(),

      product_details: CatalogModel.ProductDetails(),

      sizes: Joi.array().items(CatalogModel.Size()),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      modified_on: Joi.string().allow("").required(),

      meta: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      company_id: Joi.number(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      is_active: Joi.boolean(),

      same_store_assignment: Joi.boolean(),

      slug: Joi.any(),

      choice: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      page_visibility: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static ReturnConfigSchemaV2() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static DetailsSchemaV2() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),
    });
  }

  static StrategyWiseListingSchemaV2() {
    return Joi.object({
      tat: Joi.number(),

      quantity: Joi.number(),

      pincode: Joi.number(),

      distance: Joi.number(),
    });
  }

  static ProductStockUnitPriceV2() {
    return Joi.object({
      price: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      unit: Joi.string().allow(""),
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
      size_distribution: CatalogModel.ProductSetDistributionV2(),

      quantity: Joi.number(),
    });
  }

  static ArticleAssignmentV2() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static ProductStockPriceV2() {
    return Joi.object({
      marked: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static StoreV2() {
    return Joi.object({
      count: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static SellerV2() {
    return Joi.object({
      count: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static MarketPlaceSttributesSchemaV2() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),
    });
  }

  static ProductSizePriceResponseV2() {
    return Joi.object({
      long_lat: Joi.array().items(Joi.number()),

      item_type: Joi.string().allow(""),

      seller_count: Joi.number(),

      return_config: CatalogModel.ReturnConfigSchemaV2(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      article_id: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV2()
      ),

      price_per_unit: CatalogModel.ProductStockUnitPriceV2(),

      set: CatalogModel.ProductSetV2(),

      special_badge: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignmentV2(),

      price_per_piece: CatalogModel.ProductStockPriceV2(),

      is_gift: Joi.boolean(),

      store: CatalogModel.StoreV2(),

      pincode: Joi.number(),

      seller: CatalogModel.SellerV2(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV2()
      ),

      quantity: Joi.number(),

      price: CatalogModel.ProductStockPriceV2(),

      is_cod: Joi.boolean(),

      discount: Joi.string().allow(""),
    });
  }

  static ProductSizeSellerFilterSchemaV2() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductSizeSellersResponseV2() {
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
