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
      type: Joi.string().allow(""),

      page: CatalogModel.ProductListingActionPage(),
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

  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      alt: Joi.string().allow(""),

      meta: CatalogModel.Meta(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
    });
  }

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

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l3: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),
    });
  }

  static CustomMetaFields() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      item_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      brand: CatalogModel.ProductBrand(),

      teaser_tag: Joi.string().allow(""),

      _custom_json: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      rating: Joi.number(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      price: CatalogModel.ProductListingPrice(),

      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),

      category_map: CatalogModel.ProductCategoryMap(),

      color: Joi.string().allow(""),

      uid: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      rating_count: Joi.number(),

      seo: CatalogModel.ApplicationItemSEO(),

      medias: Joi.array().items(CatalogModel.Media()),

      discount: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),
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
      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      height: Joi.number().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

      weight: CatalogModel.Weight(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      dimension: CatalogModel.Dimension(),
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

      col_1: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_4: Joi.string().allow(""),
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

      col_1: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      title: Joi.string().allow(""),

      image: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      size_tip: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      description: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      sellable: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      stores: CatalogModel.ProductSizeStores(),

      multi_size: Joi.boolean(),

      price: CatalogModel.ProductListingPrice(),

      discount: Joi.string().allow(""),

      size_chart: CatalogModel.SizeChart(),
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
      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      items: Joi.array().items(CatalogModel.ProductDetail()),
    });
  }

  static ProductCompareResponse() {
    return Joi.object({
      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      subtitle: Joi.string().allow(""),

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
      value: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      is_available: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      color_name: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      color: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      header: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(CatalogModel.ProductVariantResponse()),
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

  static ProductStockPrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static Seller() {
    return Joi.object({
      name: Joi.string().allow(""),

      count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      company: CatalogModel.CompanyDetail(),

      store: CatalogModel.StoreDetail(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      size: Joi.string().allow(""),

      identifier: Joi.any(),

      price: CatalogModel.ProductStockPrice(),

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

  static ProductSortOn() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      header: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      total: Joi.number(),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      item_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      brand: CatalogModel.ProductBrand(),

      teaser_tag: Joi.string().allow(""),

      _custom_json: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      sizes: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      price: CatalogModel.ProductListingPrice(),

      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      sellable: Joi.boolean(),

      has_variant: Joi.boolean(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),

      category_map: CatalogModel.ProductCategoryMap(),

      color: Joi.string().allow(""),

      uid: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      identifiers: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      rating_count: Joi.number(),

      seo: CatalogModel.ApplicationItemSEO(),

      medias: Joi.array().items(CatalogModel.Media()),

      discount: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),
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
      value: Joi.string().allow(""),

      min: Joi.number(),

      count: Joi.number(),

      display: Joi.string().allow("").required(),

      selected_min: Joi.number(),

      is_selected: Joi.boolean().required(),

      max: Joi.number(),

      selected_max: Joi.number(),

      currency_code: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
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

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

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
      action: CatalogModel.ProductListingAction(),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      discount: Joi.string().allow(""),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

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
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static Child() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
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
      action: CatalogModel.ProductListingAction().required(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.CategoryBanner().required(),

      uid: Joi.number().required(),
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

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
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
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      action: CatalogModel.ProductListingAction(),

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

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
      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      priority: Joi.number(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
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
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      cron: Joi.any(),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      priority: Joi.number(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
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
      city: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      address: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.Store()).required(),
    });
  }

  static CompanyStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static StoreDepartments() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

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

      mobile_no: CatalogModel.SellerPhoneNumber(),

      email: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      latitude: Joi.number(),

      country: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      company: CatalogModel.CompanyStore(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      manager: CatalogModel.StoreManagerSerializer(),

      address: CatalogModel.StoreAddressSerializer(),

      uid: Joi.number(),
    });
  }

  static ApplicationStoreListing() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.AppStore()),

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
      timing: Joi.array().items(CatalogModel.StoreTiming()),

      company: CatalogModel.CompanyStore(),

      _custom_json: Joi.any(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      manager: CatalogModel.StoreManagerSerializer(),

      address: CatalogModel.StoreAddressSerializer(),

      uid: Joi.number(),
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

  static Size() {
    return Joi.object({
      display: Joi.any(),

      quantity: Joi.number(),

      is_available: Joi.boolean(),

      value: Joi.any(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_marked: Joi.number(),

      min_marked: Joi.number(),

      min_effective: Joi.number(),

      max_effective: Joi.number(),

      currency: Joi.any(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      media: Joi.array().items(Joi.any()),

      grouped_attributes: Joi.any(),

      template_tag: Joi.any(),

      rating: Joi.number(),

      images: Joi.array().items(Joi.any()),

      identifier: Joi.any(),

      description: Joi.any(),

      item_code: Joi.any(),

      out_of_stock: Joi.boolean(),

      short_description: Joi.any(),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      hsn_code: Joi.number(),

      brand_uid: Joi.number(),

      highlights: Joi.array().items(Joi.any()),

      image_nature: Joi.any(),

      country_of_origin: Joi.any(),

      slug: Joi.any(),

      name: Joi.any(),

      is_set: Joi.boolean(),

      rating_count: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number(),

      price: CatalogModel.ProductGroupPrice(),

      product_uid: Joi.number().required(),

      product_details: CatalogModel.ProductDetails(),

      max_quantity: Joi.number().required(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      modified_by: CatalogModel.UserDetail(),

      slug: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      name: Joi.any().required(),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      meta: Joi.any(),

      choice: Joi.any(),

      is_active: Joi.boolean(),

      _id: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").required(),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),
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

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static DetailsSchemaV3() {
    return Joi.object({
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),
    });
  }

  static ProductStockUnitPriceV3() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      price: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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
      quantity: Joi.number(),

      size_distribution: CatalogModel.ProductSetDistributionV3(),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
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

      count: Joi.number(),

      uid: Joi.number(),
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

      count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      quantity: Joi.number(),

      tat: Joi.number(),

      distance: Joi.number(),

      pincode: Joi.number(),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      return_config: CatalogModel.ReturnConfigSchemaV3(),

      item_type: Joi.string().allow(""),

      seller_count: Joi.number(),

      quantity: Joi.number(),

      long_lat: Joi.array().items(Joi.number()),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      article_id: Joi.string().allow(""),

      special_badge: Joi.string().allow(""),

      set: CatalogModel.ProductSetV3(),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductStockPriceV3(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      store: CatalogModel.StoreV3(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      seller: CatalogModel.SellerV3(),

      is_cod: Joi.boolean(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      is_gift: Joi.boolean(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      pincode: Joi.number(),
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
      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),
    });
  }
}
module.exports = CatalogModel;
