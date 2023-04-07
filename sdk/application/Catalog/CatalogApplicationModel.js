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
      meta: CatalogModel.Meta(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      alt: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      logo: CatalogModel.Media(),
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
      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
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

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      increment_unit: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      discount: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      category_map: CatalogModel.ProductCategoryMap(),

      short_description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      price: CatalogModel.ProductListingPrice(),

      is_dependent: Joi.boolean(),

      type: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      slug: Joi.string().allow("").required(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      color: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      medias: Joi.array().items(CatalogModel.Media()),

      name: Joi.string().allow(""),

      rating: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating_count: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      product_online_date: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

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

  static ColumnHeader() {
    return Joi.object({
      convertable: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ColumnHeaders() {
    return Joi.object({
      col_5: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_5: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_2: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      size_tip: Joi.string().allow(""),

      image: Joi.string().allow(""),

      description: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      unit: Joi.string().allow(""),

      title: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),
    });
  }

  static Weight() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),
    });
  }

  static Dimension() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      height: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      is_available: Joi.boolean(),

      value: Joi.string().allow(""),

      weight: CatalogModel.Weight(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

      dimension: CatalogModel.Dimension(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      sellable: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      size_chart: CatalogModel.SizeChart(),

      multi_size: Joi.boolean(),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      description: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      is_available: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      value: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      uid: Joi.number(),

      color: Joi.string().allow(""),

      color_name: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      header: Joi.string().allow(""),

      key: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

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
      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      city: Joi.string().allow(""),
    });
  }

  static CompanyDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static Seller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      store: CatalogModel.StoreDetail(),

      company: CatalogModel.CompanyDetail(),

      seller: CatalogModel.Seller(),

      price: CatalogModel.ProductStockPrice(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      identifier: Joi.any(),

      item_id: Joi.number(),
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
      header: Joi.string().allow(""),

      key: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      total: Joi.number(),

      display_type: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      discount: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      category_map: CatalogModel.ProductCategoryMap(),

      short_description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      sellable: Joi.boolean(),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      price: CatalogModel.ProductListingPrice(),

      sizes: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      slug: Joi.string().allow("").required(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      color: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      medias: Joi.array().items(CatalogModel.Media()),

      name: Joi.string().allow(""),

      rating: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating_count: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      product_online_date: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

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

  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      count: Joi.number(),

      selected_max: Joi.number(),

      value: Joi.string().allow(""),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      selected_min: Joi.number(),

      query_format: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      display_format: Joi.string().allow(""),
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
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

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
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      departments: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),
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

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
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
      name: Joi.string().allow("").required(),

      action: CatalogModel.ProductListingAction().required(),

      slug: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      childs: Joi.array().items(CatalogModel.Child()),

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
      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),
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
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      priority_order: Joi.number(),

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
      type: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      _custom_json: Joi.any(),

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

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      meta: Joi.any(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.ProductListingAction(),

      _custom_json: Joi.any(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      priority: Joi.number(),

      uid: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),

      logo: CatalogModel.Media(),
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
      meta: Joi.any(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      priority: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),

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
      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      store_email: Joi.string().allow(""),

      uid: Joi.number(),

      pincode: Joi.number(),

      address: Joi.string().allow(""),

      city: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      priority_order: Joi.number(),

      logo: Joi.string().allow(""),
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
      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      latitude: Joi.number(),

      city: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      manager: CatalogModel.StoreManagerSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      company: CatalogModel.CompanyStore(),

      uid: Joi.number(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),
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
      name: Joi.string().allow(""),

      manager: CatalogModel.StoreManagerSerializer(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      company: CatalogModel.CompanyStore(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),
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
      out_of_stock: Joi.boolean(),

      description: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      is_set: Joi.boolean(),

      country_of_origin: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      media: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      identifier: Joi.any(),

      hsn_code: Joi.number(),

      name: Joi.string().allow(""),

      rating: Joi.number(),

      grouped_attributes: Joi.any(),

      rating_count: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      min_marked: Joi.number(),

      currency: Joi.string().allow(""),

      max_effective: Joi.number(),

      max_marked: Joi.number(),

      min_effective: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      product_uid: Joi.number().required(),

      product_details: CatalogModel.ProductDetails(),

      allow_remove: Joi.boolean(),

      price: CatalogModel.ProductGroupPrice(),

      max_quantity: Joi.number().required(),

      min_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      created_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      verified_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      modified_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      choice: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),
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

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static StoreV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),
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

  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      distance: Joi.number(),

      tat: Joi.number(),

      pincode: Joi.number(),

      quantity: Joi.number(),
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

  static ProductStockUnitPriceV3() {
    return Joi.object({
      price: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      long_lat: Joi.array().items(Joi.number()),

      seller: CatalogModel.SellerV3(),

      discount: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      quantity: Joi.number(),

      seller_count: Joi.number(),

      store: CatalogModel.StoreV3(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      price: CatalogModel.ProductStockPriceV3(),

      article_id: Joi.string().allow(""),

      is_gift: Joi.boolean(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      special_badge: Joi.string().allow(""),

      is_cod: Joi.boolean(),

      set: CatalogModel.ProductSetV3(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      pincode: Joi.number(),
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
      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),

      page: CatalogModel.Page().required(),
    });
  }
}
module.exports = CatalogModel;
