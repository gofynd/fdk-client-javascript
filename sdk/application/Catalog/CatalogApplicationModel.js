const Joi = require("joi");

class CatalogModel {
  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
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

      alt: Joi.string().allow(""),

      url: Joi.string().allow(""),

      meta: CatalogModel.Meta(),
    });
  }

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

  static ProductBrand() {
    return Joi.object({
      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l3: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
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

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogModel.Price(),

      marked: CatalogModel.Price(),
    });
  }

  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      moq: CatalogModel.ApplicationItemMOQ(),

      category_map: CatalogModel.ProductCategoryMap(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      net_quantity: CatalogModel.NetQuantity(),

      item_code: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      action: CatalogModel.ProductListingAction(),

      seo: CatalogModel.ApplicationItemSEO(),

      tags: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      rating: Joi.number(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      medias: Joi.array().items(CatalogModel.Media()),

      is_dependent: Joi.boolean(),

      color: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static Dimension() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      height: Joi.number().required(),

      is_default: Joi.boolean().required(),

      length: Joi.number().required(),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      dimension: CatalogModel.Dimension(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      weight: CatalogModel.Weight(),

      is_available: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_6: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_3: Joi.string().allow(""),
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
      col_6: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      unit: Joi.string().allow(""),

      description: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      image: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      headers: CatalogModel.ColumnHeaders(),

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
      price: CatalogModel.ProductListingPrice(),

      multi_size: Joi.boolean(),

      sellable: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      size_chart: CatalogModel.SizeChart(),

      discount: Joi.string().allow(""),

      stores: CatalogModel.ProductSizeStores(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      display: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      key: Joi.string().allow(""),
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

      items: Joi.array().items(CatalogModel.ProductDetail()),

      subtitle: Joi.string().allow(""),

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
      slug: Joi.string().allow(""),

      value: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      color: Joi.string().allow(""),

      is_available: Joi.boolean(),

      color_name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      name: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      key: Joi.string().allow(""),

      header: Joi.string().allow(""),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(CatalogModel.ProductVariantResponse()),
    });
  }

  static StoreDetail() {
    return Joi.object({
      code: Joi.string().allow(""),

      id: Joi.number(),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      effective: Joi.number(),

      currency: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static Seller() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
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

      identifier: Joi.any(),

      store: CatalogModel.StoreDetail(),

      price: CatalogModel.ProductStockPrice(),

      seller: CatalogModel.Seller(),

      size: Joi.string().allow(""),

      company: CatalogModel.CompanyDetail(),

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
      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      is_selected: Joi.boolean().required(),

      selected_max: Joi.number(),

      currency_code: Joi.string().allow(""),

      count: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      value: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      max: Joi.number(),

      display_format: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      min: Joi.number(),
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
      display_type: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      total: Joi.number(),

      key: Joi.string().allow(""),

      header: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      moq: CatalogModel.ApplicationItemMOQ(),

      category_map: CatalogModel.ProductCategoryMap(),

      sellable: Joi.boolean(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      net_quantity: CatalogModel.NetQuantity(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      item_code: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      action: CatalogModel.ProductListingAction(),

      seo: CatalogModel.ApplicationItemSEO(),

      tags: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      identifiers: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      rating: Joi.number(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      medias: Joi.array().items(CatalogModel.Media()),

      is_dependent: Joi.boolean(),

      color: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),
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
      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      discount: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
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

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

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
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      banners: CatalogModel.CategoryBanner().required(),

      action: CatalogModel.ProductListingAction().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number().required(),

      name: Joi.string().allow("").required(),
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
      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
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
      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      priority_order: Joi.number(),

      uid: Joi.number(),

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
      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      type: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      _custom_json: Joi.any(),
    });
  }

  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.AutocompleteItem()),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
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

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      name: Joi.string().allow(""),

      cron: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      _schedule: Joi.any(),

      sort_on: Joi.string().allow(""),

      badge: Joi.any(),
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
      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      cron: Joi.any(),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      _schedule: Joi.any(),

      sort_on: Joi.string().allow(""),

      badge: Joi.any(),
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
      brands: Joi.array().items(Joi.number()),

      collections: Joi.array().items(Joi.number()),

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
      address: Joi.string().allow(""),

      country: Joi.string().allow(""),

      uid: Joi.number(),

      lat_long: CatalogModel.LatLong(),

      state: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      city: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pincode: Joi.number(),
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

      priority_order: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number(),

      pincode: Joi.number(),
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

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static StoreManagerSerializer() {
    return Joi.object({
      mobile_no: CatalogModel.SellerPhoneNumber(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      address: CatalogModel.StoreAddressSerializer(),

      company: CatalogModel.CompanyStore(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      uid: Joi.number(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      name: Joi.string().allow(""),

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
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static StoreTiming() {
    return Joi.object({
      weekday: Joi.string().allow(""),

      closing: CatalogModel.Time(),

      opening: CatalogModel.Time(),

      open: Joi.boolean(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      address: CatalogModel.StoreAddressSerializer(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      company: CatalogModel.CompanyStore(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      name: Joi.string().allow(""),

      manager: CatalogModel.StoreManagerSerializer(),
    });
  }

  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      super_user: Joi.boolean(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_effective: Joi.number(),

      min_marked: Joi.number(),

      max_marked: Joi.number(),

      min_effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      value: Joi.string().allow(""),
    });
  }

  static ProductDetails() {
    return Joi.object({
      country_of_origin: Joi.string().allow(""),

      rating_count: Joi.number(),

      attributes: Joi.any(),

      item_code: Joi.string().allow(""),

      grouped_attributes: Joi.any(),

      media: Joi.array().items(Joi.any()),

      out_of_stock: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      identifier: Joi.any(),

      brand_uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      rating: Joi.number(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      hsn_code: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      name: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      price: CatalogModel.ProductGroupPrice(),

      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      min_quantity: Joi.number(),

      product_details: CatalogModel.ProductDetails(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      verified_by: CatalogModel.UserDetail(),

      slug: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail(),

      meta: Joi.any(),

      company_id: Joi.number(),

      choice: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static StoreV3() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
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

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      pincode: Joi.number(),

      quantity: Joi.number(),

      distance: Joi.number(),

      tat: Joi.number(),
    });
  }

  static SellerV3() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),
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

  static ArticleAssignmentV3() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      effective: Joi.number(),

      currency: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      is_cod: Joi.boolean(),

      special_badge: Joi.string().allow(""),

      store: CatalogModel.StoreV3(),

      set: CatalogModel.ProductSetV3(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      is_gift: Joi.boolean(),

      long_lat: Joi.array().items(Joi.number()),

      seller: CatalogModel.SellerV3(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      article_id: Joi.string().allow(""),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      seller_count: Joi.number(),

      item_type: Joi.string().allow(""),

      pincode: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      price: CatalogModel.ProductStockPriceV3(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      discount: Joi.string().allow(""),

      quantity: Joi.number(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),
    });
  }

  static ProductSizeSellerFilterSchemaV3() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductSizeSellersResponseV3() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),

      page: CatalogModel.Page().required(),
    });
  }
}
module.exports = CatalogModel;
