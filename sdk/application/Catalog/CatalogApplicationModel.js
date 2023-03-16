const Joi = require("joi");

class CatalogModel {
  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
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
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),

      title: Joi.string().allow(""),
    });
  }

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
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      meta: CatalogModel.Meta(),

      alt: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      page: CatalogModel.ProductListingActionPage(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),

      uid: Joi.number(),
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
      title: Joi.any(),

      description: Joi.any(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l2: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),
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
      name: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      similars: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      brand: CatalogModel.ProductBrand(),

      moq: CatalogModel.ApplicationItemMOQ(),

      is_dependent: Joi.boolean(),

      medias: Joi.array().items(CatalogModel.Media()),

      teaser_tag: Joi.string().allow(""),

      type: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      attributes: Joi.any(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      rating_count: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.ApplicationItemSEO(),

      item_code: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      has_variant: Joi.boolean(),

      color: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      rating: Joi.number(),

      discount: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      price: CatalogModel.ProductListingPrice(),
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
      col_2: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_2: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_5: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      size_tip: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      unit: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      description: Joi.string().allow(""),

      image: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
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
      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      width: Joi.number().required(),

      height: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      is_available: Joi.boolean(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      weight: CatalogModel.Weight(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      dimension: CatalogModel.Dimension(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      multi_size: Joi.boolean(),

      size_chart: CatalogModel.SizeChart(),

      stores: CatalogModel.ProductSizeStores(),

      discount: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      price: CatalogModel.ProductListingPrice(),

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
      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      items: Joi.array().items(CatalogModel.ProductDetail()),
    });
  }

  static ProductCompareResponse() {
    return Joi.object({
      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      items: Joi.array().items(CatalogModel.ProductDetail()),

      title: Joi.string().allow(""),

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
      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      medias: Joi.array().items(CatalogModel.Media()),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_available: Joi.boolean(),

      value: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      color: Joi.string().allow(""),

      uid: Joi.number(),

      color_name: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),
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
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
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

  static CompanyDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      seller: CatalogModel.Seller(),

      size: Joi.string().allow(""),

      quantity: Joi.number(),

      item_id: Joi.number(),

      uid: Joi.string().allow(""),

      price: CatalogModel.ProductStockPrice(),

      identifier: Joi.any(),

      store: CatalogModel.StoreDetail(),

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

  static ProductSortOn() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      total: Joi.number(),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      header: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      similars: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      identifiers: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      brand: CatalogModel.ProductBrand(),

      moq: CatalogModel.ApplicationItemMOQ(),

      is_dependent: Joi.boolean(),

      medias: Joi.array().items(CatalogModel.Media()),

      sellable: Joi.boolean(),

      teaser_tag: Joi.string().allow(""),

      type: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      attributes: Joi.any(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      rating_count: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.ApplicationItemSEO(),

      item_code: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      has_variant: Joi.boolean(),

      color: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      rating: Joi.number(),

      discount: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),
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
      min: Joi.number(),

      is_selected: Joi.boolean().required(),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      value: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      selected_min: Joi.number(),

      count: Joi.number(),
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
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

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
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      discount: Joi.string().allow(""),

      description: Joi.string().allow(""),

      uid: Joi.number(),
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
      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
    });
  }

  static CategoryItems() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      action: CatalogModel.ProductListingAction().required(),

      banners: CatalogModel.CategoryBanner().required(),

      uid: Joi.number().required(),

      childs: Joi.array().items(CatalogModel.Child()),
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
      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      uid: Joi.number(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),
    });
  }

  static Department() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      logo: CatalogModel.Media(),

      uid: Joi.number(),
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

      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      _custom_json: Joi.any(),
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
      name: Joi.string().allow(""),

      priority: Joi.number(),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      cron: Joi.any(),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      action: CatalogModel.ProductListingAction(),

      allow_sort: Joi.boolean(),

      uid: Joi.string().allow(""),
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

  static GetCollectionListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      page: CatalogModel.Page().required(),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      priority: Joi.number(),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      cron: Joi.any(),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),
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
      type: Joi.string().allow(""),

      coordinates: Joi.array().items(Joi.number()),
    });
  }

  static Store() {
    return Joi.object({
      state: Joi.string().allow(""),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      pincode: Joi.number(),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      country: Joi.string().allow(""),

      store_email: Joi.string().allow(""),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Store()).required(),

      page: CatalogModel.Page().required(),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      state: Joi.string().allow(""),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      latitude: Joi.number(),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static StoreDepartments() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      logo: Joi.string().allow(""),

      uid: Joi.number(),
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

  static CompanyStore() {
    return Joi.object({
      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static AppStore() {
    return Joi.object({
      address: CatalogModel.StoreAddressSerializer(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      uid: Joi.number(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      manager: CatalogModel.StoreManagerSerializer(),

      company: CatalogModel.CompanyStore(),
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

      open: Joi.boolean(),

      closing: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      address: CatalogModel.StoreAddressSerializer(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      uid: Joi.number(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      _custom_json: Joi.any(),

      manager: CatalogModel.StoreManagerSerializer(),

      company: CatalogModel.CompanyStore(),
    });
  }

  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      name: Joi.any(),

      short_description: Joi.any(),

      out_of_stock: Joi.boolean(),

      image_nature: Joi.any(),

      grouped_attributes: Joi.any(),

      template_tag: Joi.any(),

      media: Joi.array().items(Joi.any()),

      is_set: Joi.boolean(),

      brand_uid: Joi.number(),

      country_of_origin: Joi.any(),

      slug: Joi.any(),

      attributes: Joi.any(),

      description: Joi.any(),

      rating_count: Joi.number(),

      highlights: Joi.array().items(Joi.any()),

      identifier: Joi.any(),

      hsn_code: Joi.number(),

      item_code: Joi.any(),

      images: Joi.array().items(Joi.any()),

      has_variant: Joi.boolean(),

      rating: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      value: Joi.any(),

      display: Joi.any(),

      is_available: Joi.boolean(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      currency: Joi.any(),

      min_effective: Joi.number(),

      min_marked: Joi.number(),

      max_marked: Joi.number(),

      max_effective: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      product_details: CatalogModel.ProductDetails(),

      auto_select: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.ProductGroupPrice(),

      product_uid: Joi.number().required(),

      min_quantity: Joi.number(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      _id: Joi.any(),

      company_id: Joi.number(),

      name: Joi.any().required(),

      modified_by: CatalogModel.UserDetail(),

      verified_by: CatalogModel.UserDetail(),

      choice: Joi.any(),

      slug: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      is_active: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      created_by: CatalogModel.UserDetail(),

      meta: Joi.any(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
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
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
    });
  }

  static SellerV3() {
    return Joi.object({
      count: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static StoreV3() {
    return Joi.object({
      count: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
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
      quantity: Joi.number(),

      size_distribution: CatalogModel.ProductSetDistributionV3(),
    });
  }

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      distance: Joi.number(),

      pincode: Joi.number(),

      tat: Joi.number(),

      quantity: Joi.number(),
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

      unit: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      item_type: Joi.string().allow(""),

      seller: CatalogModel.SellerV3(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      is_gift: Joi.boolean(),

      pincode: Joi.number(),

      seller_count: Joi.number(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      store: CatalogModel.StoreV3(),

      article_id: Joi.string().allow(""),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      quantity: Joi.number(),

      special_badge: Joi.string().allow(""),

      is_cod: Joi.boolean(),

      long_lat: Joi.array().items(Joi.number()),

      set: CatalogModel.ProductSetV3(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductStockPriceV3(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),
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
