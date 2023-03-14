const Joi = require("joi");

class CatalogModel {
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
      url: Joi.string().allow(""),

      alt: Joi.string().allow(""),

      meta: CatalogModel.Meta(),

      type: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l1: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),
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

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.any(),

      description: Joi.any(),
    });
  }

  static Price() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: CatalogModel.Price(),

      effective: CatalogModel.Price(),
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

  static ProductDetail() {
    return Joi.object({
      color: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      teaser_tag: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      medias: Joi.array().items(CatalogModel.Media()),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      brand: CatalogModel.ProductBrand(),

      type: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      name: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      is_dependent: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      has_variant: Joi.boolean(),

      rating_count: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      price: CatalogModel.ProductListingPrice(),

      similars: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      item_type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),
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

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      height: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      value: Joi.string().allow(""),

      weight: CatalogModel.Weight(),

      display: Joi.string().allow(""),

      quantity: Joi.number(),

      is_available: Joi.boolean(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      dimension: CatalogModel.Dimension(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_4: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_1: Joi.string().allow(""),
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

      col_5: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      title: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      image: Joi.string().allow(""),

      description: Joi.string().allow(""),
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

      multi_size: Joi.boolean(),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      sellable: Joi.boolean(),

      size_chart: CatalogModel.SizeChart(),

      stores: CatalogModel.ProductSizeStores(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      display: Joi.string().allow(""),
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

      title: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductDetail()),

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
      color: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      color_name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      medias: Joi.array().items(CatalogModel.Media()),

      is_available: Joi.boolean(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      key: Joi.string().allow(""),

      header: Joi.string().allow(""),

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
      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),
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
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
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
      size: Joi.string().allow(""),

      identifier: Joi.any(),

      store: CatalogModel.StoreDetail(),

      company: CatalogModel.CompanyDetail(),

      quantity: Joi.number(),

      price: CatalogModel.ProductStockPrice(),

      seller: CatalogModel.Seller(),

      item_id: Joi.number(),

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

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),

      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      query_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.string().allow(""),

      max: Joi.number(),

      display: Joi.string().allow("").required(),

      min: Joi.number(),

      display_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      count: Joi.number(),

      selected_max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),
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

      total: Joi.number(),

      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      color: Joi.string().allow(""),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      category_map: CatalogModel.ProductCategoryMap(),

      teaser_tag: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      medias: Joi.array().items(CatalogModel.Media()),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      brand: CatalogModel.ProductBrand(),

      type: Joi.string().allow(""),

      identifiers: Joi.array().items(Joi.string().allow("")),

      moq: CatalogModel.ApplicationItemMOQ(),

      slug: Joi.string().allow("").required(),

      sellable: Joi.boolean(),

      description: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      name: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      is_dependent: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      has_variant: Joi.boolean(),

      rating_count: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      price: CatalogModel.ProductListingPrice(),

      similars: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      item_type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),
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
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

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
      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      discount: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),
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
      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      portrait: CatalogModel.Media().required(),

      landscape: CatalogModel.Media().required(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      name: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.ProductListingAction().required(),

      banners: CatalogModel.CategoryBanner().required(),

      slug: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      name: Joi.string().allow("").required(),
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
      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

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

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
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
      is_active: Joi.boolean(),

      priority: Joi.number(),

      _schedule: Joi.any(),

      uid: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      cron: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      tag: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      allow_sort: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
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
      is_active: Joi.boolean(),

      priority: Joi.number(),

      _schedule: Joi.any(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      cron: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      allow_sort: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
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
      pincode: Joi.number(),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      store_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      uid: Joi.number(),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_email: Joi.string().allow(""),
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
      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      uid: Joi.number(),

      priority_order: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
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

  static StoreAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static StoreManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber(),

      name: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      company: CatalogModel.CompanyStore(),

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

      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.AppStore()),
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

      opening: CatalogModel.Time(),

      open: Joi.boolean(),

      closing: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      company: CatalogModel.CompanyStore(),

      _custom_json: Joi.any(),

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
      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      is_set: Joi.boolean(),

      image_nature: Joi.any(),

      hsn_code: Joi.number(),

      identifier: Joi.any(),

      brand_uid: Joi.number(),

      slug: Joi.any(),

      description: Joi.any(),

      name: Joi.any(),

      images: Joi.array().items(Joi.any()),

      has_variant: Joi.boolean(),

      rating_count: Joi.number(),

      highlights: Joi.array().items(Joi.any()),

      rating: Joi.number(),

      template_tag: Joi.any(),

      country_of_origin: Joi.any(),

      out_of_stock: Joi.boolean(),

      media: Joi.array().items(Joi.any()),

      item_code: Joi.any(),

      short_description: Joi.any(),

      attributes: Joi.any(),

      grouped_attributes: Joi.any(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      min_effective: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.any(),

      max_effective: Joi.number(),

      max_marked: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.any(),

      is_available: Joi.boolean(),

      display: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      product_details: CatalogModel.ProductDetails(),

      product_uid: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      auto_select: Joi.boolean(),

      price: CatalogModel.ProductGroupPrice(),

      max_quantity: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.Size()),

      min_quantity: Joi.number(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserDetail(),

      created_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      created_on: Joi.string().allow("").required(),

      choice: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      slug: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      page_visibility: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      verified_on: Joi.string().allow(""),

      name: Joi.any().required(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      quantity: Joi.number(),

      pincode: Joi.number(),

      tat: Joi.number(),

      distance: Joi.number(),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static StoreV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
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
      size_distribution: CatalogModel.ProductSetDistributionV3(),

      quantity: Joi.number(),
    });
  }

  static ProductStockUnitPriceV3() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      price: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static DetailsSchemaV3() {
    return Joi.object({
      value: Joi.string().allow(""),

      key: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      long_lat: Joi.array().items(Joi.number()),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      pincode: Joi.number(),

      store: CatalogModel.StoreV3(),

      quantity: Joi.number(),

      seller: CatalogModel.SellerV3(),

      special_badge: Joi.string().allow(""),

      is_gift: Joi.boolean(),

      discount: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      set: CatalogModel.ProductSetV3(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      is_cod: Joi.boolean(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      price: CatalogModel.ProductStockPriceV3(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      seller_count: Joi.number(),

      item_type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
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
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),
    });
  }
}
module.exports = CatalogModel;
