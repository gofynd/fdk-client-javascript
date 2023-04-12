const Joi = require("joi");

class CatalogModel {
  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
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

      type: Joi.string().allow(""),

      alt: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      page: CatalogModel.ProductListingActionPage(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
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
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),

      title: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),
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

      l2: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      seo: CatalogModel.ApplicationItemSEO(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      name: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      is_dependent: Joi.boolean(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      similars: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      price: CatalogModel.ProductListingPrice(),

      type: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      teaser_tag: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      attributes: Joi.any(),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      discount: Joi.string().allow(""),

      rating: Joi.number(),

      image_nature: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      item_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media()),

      item_code: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      rating_count: Joi.number(),

      moq: CatalogModel.ApplicationItemMOQ(),
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

  static SizeChartValues() {
    return Joi.object({
      col_5: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_1: Joi.string().allow(""),
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

      col_6: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      size_tip: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      description: Joi.string().allow(""),

      image: Joi.string().allow(""),

      title: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      headers: CatalogModel.ColumnHeaders(),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),
    });
  }

  static Dimension() {
    return Joi.object({
      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      width: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      weight: CatalogModel.Weight(),

      value: Joi.string().allow(""),

      quantity: Joi.number(),

      dimension: CatalogModel.Dimension(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      is_available: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static ProductSizes() {
    return Joi.object({
      stores: CatalogModel.ProductSizeStores(),

      price: CatalogModel.ProductListingPrice(),

      discount: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      size_chart: CatalogModel.SizeChart(),

      sellable: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      display: Joi.string().allow(""),

      logo: Joi.string().allow(""),

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
      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      subtitle: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductDetail()),

      title: Joi.string().allow(""),
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

      slug: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      value: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      color: Joi.string().allow(""),

      color_name: Joi.string().allow(""),

      is_available: Joi.boolean(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      header: Joi.string().allow(""),

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
      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

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
      count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      uid: Joi.string().allow(""),

      identifier: Joi.any(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      store: CatalogModel.StoreDetail(),

      price: CatalogModel.ProductStockPrice(),

      seller: CatalogModel.Seller(),

      company: CatalogModel.CompanyDetail(),

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

  static ProductFiltersValue() {
    return Joi.object({
      max: Joi.number(),

      display_format: Joi.string().allow(""),

      min: Joi.number(),

      value: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      count: Joi.number(),

      selected_min: Joi.number(),

      selected_max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow("").required(),
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

  static ProductVariantListingResponse() {
    return Joi.object({
      header: Joi.string().allow(""),

      total: Joi.number(),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      seo: CatalogModel.ApplicationItemSEO(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      name: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      is_dependent: Joi.boolean(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      similars: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      price: CatalogModel.ProductListingPrice(),

      type: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      teaser_tag: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      attributes: Joi.any(),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      discount: Joi.string().allow(""),

      identifiers: Joi.array().items(Joi.string().allow("")),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      rating: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      item_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media()),

      item_code: Joi.string().allow(""),

      _custom_json: Joi.any(),

      sellable: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      rating_count: Joi.number(),

      moq: CatalogModel.ApplicationItemMOQ(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
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
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      discount: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
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

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
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
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      banners: CatalogModel.CategoryBanner().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      name: Joi.string().allow("").required(),

      action: CatalogModel.ProductListingAction().required(),
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
      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
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

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

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
      type: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      display: Joi.string().allow(""),
    });
  }

  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.AutocompleteItem()),
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

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      allow_sort: Joi.boolean(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      priority: Joi.number(),

      logo: CatalogModel.Media(),

      app_id: Joi.string().allow(""),

      _schedule: Joi.any(),

      sort_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      allow_facets: Joi.boolean(),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      _custom_json: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      action: CatalogModel.ProductListingAction(),
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
      allow_sort: Joi.boolean(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      priority: Joi.number(),

      logo: CatalogModel.Media(),

      app_id: Joi.string().allow(""),

      _schedule: Joi.any(),

      sort_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      allow_facets: Joi.boolean(),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      _custom_json: Joi.any(),

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
      coordinates: Joi.array().items(Joi.number()),

      type: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      city: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      store_email: Joi.string().allow(""),

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
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),
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
      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),
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
      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      uid: Joi.number(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      manager: CatalogModel.StoreManagerSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      company: CatalogModel.CompanyStore(),

      name: Joi.string().allow(""),
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
      minute: Joi.number(),

      hour: Joi.number(),
    });
  }

  static StoreTiming() {
    return Joi.object({
      opening: CatalogModel.Time(),

      open: Joi.boolean(),

      closing: CatalogModel.Time(),

      weekday: Joi.string().allow(""),
    });
  }

  static StoreDetails() {
    return Joi.object({
      uid: Joi.number(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      manager: CatalogModel.StoreManagerSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      company: CatalogModel.CompanyStore(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      timing: Joi.array().items(CatalogModel.StoreTiming()),
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

  static ProductDetails() {
    return Joi.object({
      is_set: Joi.boolean(),

      grouped_attributes: Joi.any(),

      images: Joi.array().items(Joi.any()),

      name: Joi.any(),

      has_variant: Joi.boolean(),

      short_description: Joi.any(),

      slug: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      media: Joi.array().items(Joi.any()),

      attributes: Joi.any(),

      description: Joi.any(),

      out_of_stock: Joi.boolean(),

      identifier: Joi.any(),

      rating: Joi.number(),

      image_nature: Joi.any(),

      brand_uid: Joi.number(),

      item_code: Joi.any(),

      country_of_origin: Joi.any(),

      hsn_code: Joi.number(),

      template_tag: Joi.any(),

      rating_count: Joi.number(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      min_effective: Joi.number(),

      max_marked: Joi.number(),

      max_effective: Joi.number(),

      currency: Joi.any(),

      min_marked: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      is_available: Joi.boolean(),

      value: Joi.any(),

      display: Joi.any(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      product_details: CatalogModel.ProductDetails(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number(),

      price: CatalogModel.ProductGroupPrice(),

      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      slug: Joi.any(),

      page_visibility: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      is_active: Joi.boolean(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.any(),

      meta: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      _id: Joi.any(),

      logo: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      name: Joi.any().required(),

      modified_by: CatalogModel.UserDetail(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static StoreV3() {
    return Joi.object({
      count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static DetailsSchemaV3() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      key: Joi.string().allow(""),
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
      price: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
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

  static ReturnConfigSchemaV3() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static ArticleAssignmentV3() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
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
      count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      distance: Joi.number(),

      tat: Joi.number(),

      pincode: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      quantity: Joi.number(),

      store: CatalogModel.StoreV3(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      article_id: Joi.string().allow(""),

      seller_count: Joi.number(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      price: CatalogModel.ProductStockPriceV3(),

      is_cod: Joi.boolean(),

      set: CatalogModel.ProductSetV3(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      discount: Joi.string().allow(""),

      pincode: Joi.number(),

      special_badge: Joi.string().allow(""),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      item_type: Joi.string().allow(""),

      seller: CatalogModel.SellerV3(),

      long_lat: Joi.array().items(Joi.number()),

      is_gift: Joi.boolean(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),
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
