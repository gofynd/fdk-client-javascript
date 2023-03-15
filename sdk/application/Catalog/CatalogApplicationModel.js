const Joi = require("joi");

class CatalogModel {
  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      increment_unit: Joi.number(),

      minimum: Joi.number(),
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
      alt: Joi.string().allow(""),

      url: Joi.string().allow(""),

      meta: CatalogModel.Meta(),

      type: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),
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

  static Price() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),

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

  static ProductCategoryMap() {
    return Joi.object({
      l1: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      rating_count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      moq: CatalogModel.ApplicationItemMOQ(),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      rating: Joi.number(),

      item_code: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      brand: CatalogModel.ProductBrand(),

      action: CatalogModel.ProductListingAction(),

      color: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      type: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      highlights: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      short_description: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      category_map: CatalogModel.ProductCategoryMap(),

      seo: CatalogModel.ApplicationItemSEO(),

      discount: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      item_type: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      product_online_date: Joi.string().allow(""),
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
      col_2: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_2: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_5: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      headers: CatalogModel.ColumnHeaders(),

      size_tip: Joi.string().allow(""),

      title: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      unit: Joi.string().allow(""),

      image: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static Dimension() {
    return Joi.object({
      height: Joi.number().required(),

      width: Joi.number().required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      dimension: CatalogModel.Dimension(),

      weight: CatalogModel.Weight(),

      display: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      stores: CatalogModel.ProductSizeStores(),

      size_chart: CatalogModel.SizeChart(),

      price: CatalogModel.ProductListingPrice(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      sellable: Joi.boolean(),

      discount: Joi.string().allow(""),

      multi_size: Joi.boolean(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      key: Joi.string().allow(""),

      description: Joi.string().allow(""),

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
      action: CatalogModel.ProductListingAction(),

      value: Joi.string().allow(""),

      color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      is_available: Joi.boolean(),

      color_name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),
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
      count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      uid: Joi.string().allow(""),

      company: CatalogModel.CompanyDetail(),

      store: CatalogModel.StoreDetail(),

      identifier: Joi.any(),

      price: CatalogModel.ProductStockPrice(),

      item_id: Joi.number(),

      seller: CatalogModel.Seller(),

      quantity: Joi.number(),

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
      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      rating_count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      moq: CatalogModel.ApplicationItemMOQ(),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      item_code: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      brand: CatalogModel.ProductBrand(),

      action: CatalogModel.ProductListingAction(),

      color: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      type: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      sellable: Joi.boolean(),

      description: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      highlights: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      short_description: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      category_map: CatalogModel.ProductCategoryMap(),

      seo: CatalogModel.ApplicationItemSEO(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      item_type: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      max: Joi.number(),

      min: Joi.number(),

      query_format: Joi.string().allow(""),

      value: Joi.string().allow(""),

      selected_max: Joi.number(),

      is_selected: Joi.boolean().required(),

      display: Joi.string().allow("").required(),

      currency_symbol: Joi.string().allow(""),

      selected_min: Joi.number(),

      display_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
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
      portrait: CatalogModel.Media(),

      landscape: CatalogModel.Media(),
    });
  }

  static BrandItem() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),
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

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),
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

      name: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static Child() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.ProductListingAction().required(),

      banners: CatalogModel.CategoryBanner().required(),

      name: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      childs: Joi.array().items(CatalogModel.Child()),

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

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),
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

      type: Joi.string().allow(""),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

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
      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      priority: Joi.number(),

      _schedule: Joi.any(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

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
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      priority: Joi.number(),

      _schedule: Joi.any(),
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
      store_email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      lat_long: CatalogModel.LatLong(),

      store_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),
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
      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static StoreManagerSerializer() {
    return Joi.object({
      mobile_no: CatalogModel.SellerPhoneNumber(),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static AppStore() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      company: CatalogModel.CompanyStore(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      manager: CatalogModel.StoreManagerSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),
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
      weekday: Joi.string().allow(""),

      open: Joi.boolean(),

      closing: CatalogModel.Time(),

      opening: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      company: CatalogModel.CompanyStore(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      manager: CatalogModel.StoreManagerSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      _custom_json: Joi.any(),
    });
  }

  static UserDetail() {
    return Joi.object({
      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      super_user: Joi.boolean(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      name: Joi.string().allow(""),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      item_code: Joi.string().allow(""),

      rating: Joi.number(),

      is_set: Joi.boolean(),

      slug: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      media: Joi.array().items(Joi.any()),

      description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      hsn_code: Joi.number(),

      brand_uid: Joi.number(),

      grouped_attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      identifier: Joi.any(),

      out_of_stock: Joi.boolean(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_effective: Joi.number(),

      currency: Joi.string().allow(""),

      min_marked: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      quantity: Joi.number(),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      product_details: CatalogModel.ProductDetails(),

      product_uid: Joi.number().required(),

      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),

      price: CatalogModel.ProductGroupPrice(),

      auto_select: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      allow_remove: Joi.boolean(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      modified_on: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      verified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserDetail(),

      company_id: Joi.number(),

      slug: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail(),

      _id: Joi.any(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static ProductStockUnitPriceV3() {
    return Joi.object({
      unit: Joi.string().allow(""),

      price: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      distance: Joi.number(),

      tat: Joi.number(),

      quantity: Joi.number(),

      pincode: Joi.number(),
    });
  }

  static StoreV3() {
    return Joi.object({
      count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static SellerV3() {
    return Joi.object({
      count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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

  static ArticleAssignmentV3() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      is_gift: Joi.boolean(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      quantity: Joi.number(),

      pincode: Joi.number(),

      is_cod: Joi.boolean(),

      seller_count: Joi.number(),

      article_id: Joi.string().allow(""),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      store: CatalogModel.StoreV3(),

      price: CatalogModel.ProductStockPriceV3(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      seller: CatalogModel.SellerV3(),

      discount: Joi.string().allow(""),

      long_lat: Joi.array().items(Joi.number()),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      special_badge: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      set: CatalogModel.ProductSetV3(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),
    });
  }

  static ProductSizeSellerFilterSchemaV3() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
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
