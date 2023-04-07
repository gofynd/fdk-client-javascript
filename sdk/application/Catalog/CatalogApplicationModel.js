const Joi = require("joi");

class CatalogModel {
  static ProductListingActionPage() {
    return Joi.object({
      params: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.any(),
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

      type: Joi.string().allow(""),

      meta: CatalogModel.Meta(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static Price() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
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

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      increment_unit: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static CustomMetaFields() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l1: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      rating: Joi.number(),

      seo: CatalogModel.ApplicationItemSEO(),

      image_nature: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      price: CatalogModel.ProductListingPrice(),

      is_dependent: Joi.boolean(),

      rating_count: Joi.number(),

      discount: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      moq: CatalogModel.ApplicationItemMOQ(),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      similars: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      highlights: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      category_map: CatalogModel.ProductCategoryMap(),

      attributes: Joi.any(),

      item_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      slug: Joi.string().allow("").required(),

      action: CatalogModel.ProductListingAction(),

      medias: Joi.array().items(CatalogModel.Media()),

      has_variant: Joi.boolean(),
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
      convertable: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ColumnHeaders() {
    return Joi.object({
      col_5: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_5: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_2: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      description: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      image: Joi.string().allow(""),

      title: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static Dimension() {
    return Joi.object({
      height: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      width: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      weight: CatalogModel.Weight(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      display: Joi.string().allow(""),

      dimension: CatalogModel.Dimension(),

      quantity: Joi.number(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      discount: Joi.string().allow(""),

      sellable: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      size_chart: CatalogModel.SizeChart(),

      multi_size: Joi.boolean(),

      price: CatalogModel.ProductListingPrice(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),
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
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

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
      color: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      medias: Joi.array().items(CatalogModel.Media()),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      color_name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(CatalogModel.ProductVariantResponse()),
    });
  }

  static Seller() {
    return Joi.object({
      name: Joi.string().allow(""),

      count: Joi.number(),

      uid: Joi.number(),
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

  static ProductStockPrice() {
    return Joi.object({
      currency: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      seller: CatalogModel.Seller(),

      company: CatalogModel.CompanyDetail(),

      store: CatalogModel.StoreDetail(),

      item_id: Joi.number(),

      size: Joi.string().allow(""),

      identifier: Joi.any(),

      price: CatalogModel.ProductStockPrice(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),
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
      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      selected_max: Joi.number(),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      value: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      query_format: Joi.string().allow(""),

      max: Joi.number(),

      display_format: Joi.string().allow(""),

      count: Joi.number(),

      is_selected: Joi.boolean().required(),

      currency_symbol: Joi.string().allow(""),

      selected_min: Joi.number(),
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
      key: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),

      total: Joi.number(),

      header: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      rating: Joi.number(),

      seo: CatalogModel.ApplicationItemSEO(),

      image_nature: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      price: CatalogModel.ProductListingPrice(),

      is_dependent: Joi.boolean(),

      rating_count: Joi.number(),

      discount: Joi.string().allow(""),

      sellable: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      moq: CatalogModel.ApplicationItemMOQ(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      similars: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      highlights: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      category_map: CatalogModel.ProductCategoryMap(),

      attributes: Joi.any(),

      item_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      slug: Joi.string().allow("").required(),

      action: CatalogModel.ProductListingAction(),

      medias: Joi.array().items(CatalogModel.Media()),

      has_variant: Joi.boolean(),
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

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

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

      slug: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

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
      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

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
      slug: Joi.string().allow("").required(),

      action: CatalogModel.ProductListingAction().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number().required(),

      name: Joi.string().allow("").required(),

      banners: CatalogModel.CategoryBanner().required(),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.CategoryItems()),

      department: Joi.string().allow("").required(),
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

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

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
      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      priority_order: Joi.number(),

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
      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

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

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),
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
      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      logo: CatalogModel.Media(),

      badge: Joi.any(),

      uid: Joi.string().allow(""),

      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      sort_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      app_id: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
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
      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      logo: CatalogModel.Media(),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      sort_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
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
      pincode: Joi.number(),

      store_email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      country: Joi.string().allow(""),

      address: Joi.string().allow(""),

      city: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      uid: Joi.number(),

      priority_order: Joi.number(),

      name: Joi.string().allow(""),
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

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      longitude: Joi.number(),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static StoreManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber(),

      email: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      company: CatalogModel.CompanyStore(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      manager: CatalogModel.StoreManagerSerializer(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),
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
      closing: CatalogModel.Time(),

      weekday: Joi.string().allow(""),

      open: Joi.boolean(),

      opening: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      _custom_json: Joi.any(),

      company: CatalogModel.CompanyStore(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      manager: CatalogModel.StoreManagerSerializer(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      timing: Joi.array().items(CatalogModel.StoreTiming()),
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

  static ProductDetails() {
    return Joi.object({
      description: Joi.any(),

      media: Joi.array().items(Joi.any()),

      rating: Joi.number(),

      image_nature: Joi.any(),

      country_of_origin: Joi.any(),

      identifier: Joi.any(),

      rating_count: Joi.number(),

      grouped_attributes: Joi.any(),

      out_of_stock: Joi.boolean(),

      short_description: Joi.any(),

      name: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      images: Joi.array().items(Joi.any()),

      attributes: Joi.any(),

      item_code: Joi.any(),

      slug: Joi.any(),

      template_tag: Joi.any(),

      brand_uid: Joi.number(),

      hsn_code: Joi.number(),

      is_set: Joi.boolean(),

      has_variant: Joi.boolean(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_marked: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.any(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      value: Joi.any(),

      quantity: Joi.number(),

      display: Joi.any(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      product_details: CatalogModel.ProductDetails(),

      max_quantity: Joi.number().required(),

      min_quantity: Joi.number(),

      price: CatalogModel.ProductGroupPrice(),

      product_uid: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.Size()),

      allow_remove: Joi.boolean(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      slug: Joi.any(),

      choice: Joi.any(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      _id: Joi.any(),

      verified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserDetail(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      page_visibility: Joi.array().items(Joi.any()),

      logo: Joi.any(),

      meta: Joi.any(),

      company_id: Joi.number(),

      name: Joi.any().required(),

      modified_by: CatalogModel.UserDetail(),

      created_by: CatalogModel.UserDetail(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static SellerV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      currency: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
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

  static ProductStockUnitPriceV3() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      price: Joi.number(),

      unit: Joi.string().allow(""),
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

  static StoreV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
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
      seller: CatalogModel.SellerV3(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      price: CatalogModel.ProductStockPriceV3(),

      special_badge: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      is_cod: Joi.boolean(),

      pincode: Joi.number(),

      item_type: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      set: CatalogModel.ProductSetV3(),

      is_gift: Joi.boolean(),

      long_lat: Joi.array().items(Joi.number()),

      quantity: Joi.number(),

      store: CatalogModel.StoreV3(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      seller_count: Joi.number(),
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
