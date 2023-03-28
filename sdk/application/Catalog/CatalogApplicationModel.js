const Joi = require("joi");

class CatalogModel {
  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      type: Joi.string().allow(""),

      meta: CatalogModel.Meta(),

      url: Joi.string().allow(""),

      alt: Joi.string().allow(""),
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
      page: CatalogModel.ProductListingActionPage(),

      type: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static CustomMetaFields() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
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
      currency_code: Joi.string().allow(""),

      max: Joi.number(),

      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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

      l2: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      image_nature: Joi.string().allow(""),

      description: Joi.string().allow(""),

      rating_count: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      seo: CatalogModel.ApplicationItemSEO(),

      rating: Joi.number(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      moq: CatalogModel.ApplicationItemMOQ(),

      net_quantity: CatalogModel.NetQuantity(),

      similars: Joi.array().items(Joi.string().allow("")),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      item_type: Joi.string().allow(""),

      attributes: Joi.any(),

      color: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      discount: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      short_description: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      type: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      action: CatalogModel.ProductListingAction(),

      category_map: CatalogModel.ProductCategoryMap(),

      is_dependent: Joi.boolean(),
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
      col_1: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_1: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_6: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      description: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      title: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      image: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),
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
      height: Joi.number().required(),

      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      width: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      quantity: Joi.number(),

      weight: CatalogModel.Weight(),

      is_available: Joi.boolean(),

      dimension: CatalogModel.Dimension(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      stores: CatalogModel.ProductSizeStores(),

      sellable: Joi.boolean(),

      size_chart: CatalogModel.SizeChart(),

      multi_size: Joi.boolean(),

      discount: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      price: CatalogModel.ProductListingPrice(),
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
      items: Joi.array().items(CatalogModel.ProductDetail()),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),
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
      is_available: Joi.boolean(),

      name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      action: CatalogModel.ProductListingAction(),

      medias: Joi.array().items(CatalogModel.Media()),

      value: Joi.string().allow(""),

      color: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      color_name: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(CatalogModel.ProductVariantResponse()),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      currency: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static Seller() {
    return Joi.object({
      name: Joi.string().allow(""),

      count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      id: Joi.number(),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),
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
      price: CatalogModel.ProductStockPrice(),

      item_id: Joi.number(),

      seller: CatalogModel.Seller(),

      quantity: Joi.number(),

      store: CatalogModel.StoreDetail(),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),

      identifier: Joi.any(),

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
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductStockStatusItem()),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      total: Joi.number(),

      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      key: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      image_nature: Joi.string().allow(""),

      description: Joi.string().allow(""),

      rating_count: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      seo: CatalogModel.ApplicationItemSEO(),

      sizes: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      moq: CatalogModel.ApplicationItemMOQ(),

      net_quantity: CatalogModel.NetQuantity(),

      similars: Joi.array().items(Joi.string().allow("")),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      item_type: Joi.string().allow(""),

      attributes: Joi.any(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      color: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      discount: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      short_description: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      sellable: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      category_map: CatalogModel.ProductCategoryMap(),

      is_dependent: Joi.boolean(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      selected_max: Joi.number(),

      display_format: Joi.string().allow(""),

      min: Joi.number(),

      selected_min: Joi.number(),

      max: Joi.number(),

      display: Joi.string().allow("").required(),

      value: Joi.string().allow(""),

      count: Joi.number(),

      is_selected: Joi.boolean().required(),

      query_format: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),
    });
  }

  static ProductFilters() {
    return Joi.object({
      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),

      key: CatalogModel.ProductFiltersKey().required(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

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
      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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
      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
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

      uid: Joi.number().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.CategoryBanner().required(),

      action: CatalogModel.ProductListingAction().required(),

      slug: Joi.string().allow("").required(),
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

      _custom_json: Joi.any(),

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
      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      priority_order: Joi.number(),

      uid: Joi.number(),

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
      logo: CatalogModel.Media(),

      type: Joi.string().allow(""),

      display: Joi.string().allow(""),

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
      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      meta: Joi.any(),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      logo: CatalogModel.Media(),

      badge: Joi.any(),

      type: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
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
      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      meta: Joi.any(),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      logo: CatalogModel.Media(),

      badge: Joi.any(),

      type: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      coordinates: Joi.array().items(Joi.number()),
    });
  }

  static Store() {
    return Joi.object({
      address: Joi.string().allow(""),

      pincode: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      store_email: Joi.string().allow(""),

      city: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      state: Joi.string().allow(""),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.Store()).required(),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      latitude: Joi.number(),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static StoreDepartments() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      priority_order: Joi.number(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
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

  static CompanyStore() {
    return Joi.object({
      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static AppStore() {
    return Joi.object({
      address: CatalogModel.StoreAddressSerializer(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      uid: Joi.number(),

      manager: CatalogModel.StoreManagerSerializer(),

      company: CatalogModel.CompanyStore(),
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
      open: Joi.boolean(),

      closing: CatalogModel.Time(),

      opening: CatalogModel.Time(),

      weekday: Joi.string().allow(""),
    });
  }

  static StoreDetails() {
    return Joi.object({
      address: CatalogModel.StoreAddressSerializer(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      manager: CatalogModel.StoreManagerSerializer(),

      company: CatalogModel.CompanyStore(),
    });
  }

  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      hsn_code: Joi.number(),

      rating_count: Joi.number(),

      rating: Joi.number(),

      is_set: Joi.boolean(),

      name: Joi.string().allow(""),

      brand_uid: Joi.number(),

      identifier: Joi.any(),

      out_of_stock: Joi.boolean(),

      images: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow(""),

      attributes: Joi.any(),

      grouped_attributes: Joi.any(),

      media: Joi.array().items(Joi.any()),

      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      country_of_origin: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      quantity: Joi.number(),

      is_available: Joi.boolean(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_effective: Joi.number(),

      min_marked: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),

      product_details: CatalogModel.ProductDetails(),

      min_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.ProductGroupPrice(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      company_id: Joi.number(),

      created_by: CatalogModel.UserDetail(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      _id: Joi.any(),

      verified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail(),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      choice: Joi.string().allow(""),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      verified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static ProductStockUnitPriceV3() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      price: Joi.number(),
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

  static ProductStockPriceV3() {
    return Joi.object({
      currency: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
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
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static ArticleAssignmentV3() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static DetailsSchemaV3() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
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

      quantity: Joi.number(),

      pincode: Joi.number(),

      tat: Joi.number(),
    });
  }

  static BuyBox() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static StoreV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      special_badge: Joi.string().allow(""),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      set: CatalogModel.ProductSetV3(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      seller: CatalogModel.SellerV3(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      quantity: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      is_cod: Joi.boolean(),

      item_type: Joi.string().allow(""),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      is_gift: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductStockPriceV3(),

      pincode: Joi.number(),

      article_id: Joi.string().allow(""),

      seller_count: Joi.number(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      long_lat: Joi.array().items(Joi.number()),

      buy_box: CatalogModel.BuyBox(),

      store: CatalogModel.StoreV3(),
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
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),
    });
  }
}
module.exports = CatalogModel;
