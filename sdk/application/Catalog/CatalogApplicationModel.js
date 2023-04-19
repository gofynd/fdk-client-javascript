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

      alt: Joi.string().allow(""),

      meta: CatalogModel.Meta(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
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

      l1: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),
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
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
    });
  }

  static Price() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: CatalogModel.Price(),

      effective: CatalogModel.Price(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      increment_unit: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      item_type: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      action: CatalogModel.ProductListingAction(),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),

      rating: Joi.number(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      _custom_json: Joi.any(),

      product_online_date: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      brand: CatalogModel.ProductBrand(),

      medias: Joi.array().items(CatalogModel.Media()),

      category_map: CatalogModel.ProductCategoryMap(),

      discount: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      similars: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      rating_count: Joi.number(),

      seo: CatalogModel.ApplicationItemSEO(),

      moq: CatalogModel.ApplicationItemMOQ(),

      highlights: Joi.array().items(Joi.string().allow("")),
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

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      width: Joi.number().required(),

      is_default: Joi.boolean().required(),
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
      quantity: Joi.number(),

      dimension: CatalogModel.Dimension(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      is_available: Joi.boolean(),

      weight: CatalogModel.Weight(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
      col_5: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_5: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_6: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      headers: CatalogModel.ColumnHeaders(),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      image: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      description: Joi.string().allow(""),

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
      sizes: Joi.array().items(CatalogModel.ProductSize()),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      multi_size: Joi.boolean(),

      size_chart: CatalogModel.SizeChart(),

      sellable: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

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
      items: Joi.array().items(CatalogModel.ProductDetail()),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

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
      medias: Joi.array().items(CatalogModel.Media()),

      color_name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      is_available: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      color: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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

  static ProductStockPrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      city: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static Seller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
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
      item_id: Joi.number(),

      price: CatalogModel.ProductStockPrice(),

      size: Joi.string().allow(""),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),

      identifier: Joi.any(),

      store: CatalogModel.StoreDetail(),

      seller: CatalogModel.Seller(),

      company: CatalogModel.CompanyDetail(),
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

  static ProductFiltersValue() {
    return Joi.object({
      display_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      value: Joi.string().allow(""),

      selected_max: Joi.number(),

      is_selected: Joi.boolean().required(),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      query_format: Joi.string().allow(""),

      count: Joi.number(),

      min: Joi.number(),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),
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

  static ProductVariantListingResponse() {
    return Joi.object({
      total: Joi.number(),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      identifiers: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      action: CatalogModel.ProductListingAction(),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),

      rating: Joi.number(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      _custom_json: Joi.any(),

      product_online_date: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      brand: CatalogModel.ProductBrand(),

      medias: Joi.array().items(CatalogModel.Media()),

      category_map: CatalogModel.ProductCategoryMap(),

      discount: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      similars: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      rating_count: Joi.number(),

      seo: CatalogModel.ApplicationItemSEO(),

      moq: CatalogModel.ApplicationItemMOQ(),

      highlights: Joi.array().items(Joi.string().allow("")),

      sellable: Joi.boolean(),
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
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

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
      departments: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number().required(),

      name: Joi.string().allow("").required(),

      banners: CatalogModel.CategoryBanner().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      action: CatalogModel.ProductListingAction().required(),

      slug: Joi.string().allow("").required(),
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

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),
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
      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),
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
      type: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      logo: CatalogModel.Media(),
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

      page: CatalogModel.Page().required(),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      logo: CatalogModel.Media(),
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
      country: Joi.string().allow(""),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

      uid: Joi.number(),

      state: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      store_code: Joi.string().allow(""),

      address: Joi.string().allow(""),
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

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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
      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      state: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      address: CatalogModel.StoreAddressSerializer(),
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
      open: Joi.boolean(),

      closing: CatalogModel.Time(),

      weekday: Joi.string().allow(""),

      opening: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      address: CatalogModel.StoreAddressSerializer(),

      _custom_json: Joi.any(),
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

  static ProductDetails() {
    return Joi.object({
      brand_uid: Joi.number(),

      item_code: Joi.any(),

      template_tag: Joi.any(),

      media: Joi.array().items(Joi.any()),

      attributes: Joi.any(),

      rating: Joi.number(),

      country_of_origin: Joi.any(),

      name: Joi.any(),

      hsn_code: Joi.number(),

      slug: Joi.any(),

      images: Joi.array().items(Joi.any()),

      has_variant: Joi.boolean(),

      short_description: Joi.any(),

      grouped_attributes: Joi.any(),

      description: Joi.any(),

      image_nature: Joi.any(),

      rating_count: Joi.number(),

      identifier: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      is_set: Joi.boolean(),

      out_of_stock: Joi.boolean(),
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
      max_marked: Joi.number(),

      min_effective: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.any(),

      max_effective: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      product_details: CatalogModel.ProductDetails(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_uid: Joi.number().required(),

      price: CatalogModel.ProductGroupPrice(),

      auto_select: Joi.boolean(),

      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      created_by: CatalogModel.UserDetail(),

      company_id: Joi.number(),

      verified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      choice: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      _id: Joi.any(),

      logo: Joi.any(),

      same_store_assignment: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.any()),

      modified_by: CatalogModel.UserDetail(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      slug: Joi.any(),

      meta: Joi.any(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static ProductStockUnitPriceV3() {
    return Joi.object({
      unit: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      price: Joi.number(),
    });
  }

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      distance: Joi.number(),

      quantity: Joi.number(),

      pincode: Joi.number(),

      tat: Joi.number(),
    });
  }

  static ArticleAssignmentV3() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
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

  static SellerV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static DetailsSchemaV3() {
    return Joi.object({
      type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
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

  static StoreV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      item_type: Joi.string().allow(""),

      pincode: Joi.number(),

      seller_count: Joi.number(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      long_lat: Joi.array().items(Joi.number()),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      article_id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      special_badge: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      set: CatalogModel.ProductSetV3(),

      seller: CatalogModel.SellerV3(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      price: CatalogModel.ProductStockPriceV3(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      quantity: Joi.number(),

      is_cod: Joi.boolean(),

      store: CatalogModel.StoreV3(),

      is_gift: Joi.boolean(),
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

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),
    });
  }
}
module.exports = CatalogModel;
