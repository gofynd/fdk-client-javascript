const Joi = require("joi");

class CatalogModel {
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

  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      type: Joi.string().allow(""),

      meta: CatalogModel.Meta(),

      alt: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),
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
      l1: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
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

  static CustomMetaFields() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      attributes: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      similars: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.ProductListingAction(),

      category_map: CatalogModel.ProductCategoryMap(),

      color: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      seo: CatalogModel.ApplicationItemSEO(),

      has_variant: Joi.boolean(),

      item_code: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      medias: Joi.array().items(CatalogModel.Media()),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      tags: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      description: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      moq: CatalogModel.ApplicationItemMOQ(),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),
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

      unit: Joi.string().allow("").required(),

      height: Joi.number().required(),

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

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_available: Joi.boolean(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      weight: CatalogModel.Weight(),
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
      col_3: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_3: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_4: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      image: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      description: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      title: Joi.string().allow(""),
    });
  }

  static ProductSizes() {
    return Joi.object({
      discount: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      sellable: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      price: CatalogModel.ProductListingPrice(),

      stores: CatalogModel.ProductSizeStores(),

      size_chart: CatalogModel.SizeChart(),
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
      subtitle: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductDetail()),

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
      color_name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      color: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_available: Joi.boolean(),

      slug: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      header: Joi.string().allow(""),

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
      marked: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      city: Joi.string().allow(""),
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
      quantity: Joi.number(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price: CatalogModel.ProductStockPrice(),

      identifier: Joi.any(),

      store: CatalogModel.StoreDetail(),

      seller: CatalogModel.Seller(),

      item_id: Joi.number(),

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
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
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

  static ProductFiltersValue() {
    return Joi.object({
      is_selected: Joi.boolean().required(),

      query_format: Joi.string().allow(""),

      count: Joi.number(),

      selected_min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selected_max: Joi.number(),

      display_format: Joi.string().allow(""),

      value: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      min: Joi.number(),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),
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
      total: Joi.number(),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      header: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      attributes: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      similars: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.ProductListingAction(),

      category_map: CatalogModel.ProductCategoryMap(),

      color: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      seo: CatalogModel.ApplicationItemSEO(),

      has_variant: Joi.boolean(),

      sellable: Joi.boolean(),

      item_code: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      medias: Joi.array().items(CatalogModel.Media()),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      identifiers: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      description: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      sizes: Joi.array().items(Joi.string().allow("")),

      moq: CatalogModel.ApplicationItemMOQ(),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

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
      description: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

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
      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),
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
      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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
      childs: Joi.array().items(CatalogModel.Child()),

      action: CatalogModel.ProductListingAction().required(),

      uid: Joi.number().required(),

      banners: CatalogModel.CategoryBanner().required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),
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
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),
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
      action: CatalogModel.ProductListingAction(),

      _custom_json: Joi.any(),

      type: Joi.string().allow(""),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),
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
      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      badge: Joi.any(),

      name: Joi.string().allow(""),
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
      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      _custom_json: Joi.any(),

      badge: Joi.any(),

      name: Joi.string().allow(""),
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
      store_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      uid: Joi.number(),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      lat_long: CatalogModel.LatLong(),
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

  static StoreAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),
    });
  }

  static CompanyStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),
    });
  }

  static StoreManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber(),
    });
  }

  static AppStore() {
    return Joi.object({
      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      address: CatalogModel.StoreAddressSerializer(),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),
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
      weekday: Joi.string().allow(""),

      open: Joi.boolean(),

      opening: CatalogModel.Time(),

      closing: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      name: Joi.string().allow(""),

      address: CatalogModel.StoreAddressSerializer(),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),
    });
  }

  static UserDetail() {
    return Joi.object({
      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      username: Joi.string().allow("").required(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      attributes: Joi.any(),

      is_set: Joi.boolean(),

      highlights: Joi.array().items(Joi.any()),

      identifier: Joi.any(),

      slug: Joi.any(),

      images: Joi.array().items(Joi.any()),

      hsn_code: Joi.number(),

      has_variant: Joi.boolean(),

      brand_uid: Joi.number(),

      grouped_attributes: Joi.any(),

      item_code: Joi.any(),

      template_tag: Joi.any(),

      rating: Joi.number(),

      country_of_origin: Joi.any(),

      rating_count: Joi.number(),

      media: Joi.array().items(Joi.any()),

      description: Joi.any(),

      out_of_stock: Joi.boolean(),

      short_description: Joi.any(),

      image_nature: Joi.any(),

      name: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.any(),

      display: Joi.any(),

      is_available: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      min_marked: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      currency: Joi.any(),

      max_effective: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      product_details: CatalogModel.ProductDetails(),

      sizes: Joi.array().items(CatalogModel.Size()),

      min_quantity: Joi.number(),

      price: CatalogModel.ProductGroupPrice(),

      allow_remove: Joi.boolean(),

      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      choice: Joi.any(),

      meta: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      created_on: Joi.string().allow("").required(),

      _id: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      created_by: CatalogModel.UserDetail(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      page_visibility: Joi.array().items(Joi.any()),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.any(),

      verified_on: Joi.string().allow(""),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      tat: Joi.number(),

      distance: Joi.number(),

      pincode: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ArticleAssignmentV3() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
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
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
    });
  }

  static StoreV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static ProductStockUnitPriceV3() {
    return Joi.object({
      unit: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      price: Joi.number(),
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

      currency: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static SellerV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      is_gift: Joi.boolean(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      store: CatalogModel.StoreV3(),

      article_id: Joi.string().allow(""),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      set: CatalogModel.ProductSetV3(),

      is_cod: Joi.boolean(),

      seller_count: Joi.number(),

      special_badge: Joi.string().allow(""),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      price: CatalogModel.ProductStockPriceV3(),

      item_type: Joi.string().allow(""),

      seller: CatalogModel.SellerV3(),

      long_lat: Joi.array().items(Joi.number()),

      pincode: Joi.number(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),
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

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),

      page: CatalogModel.Page().required(),
    });
  }
}
module.exports = CatalogModel;
