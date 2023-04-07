const Joi = require("joi");

class CatalogModel {
  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
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

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
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

  static ProductBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),
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

  static ProductDetailAttribute() {
    return Joi.object({
      key: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),

      title: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l2: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      rating_count: Joi.number(),

      name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      slug: Joi.string().allow("").required(),

      attributes: Joi.any(),

      type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      seo: CatalogModel.ApplicationItemSEO(),

      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      moq: CatalogModel.ApplicationItemMOQ(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      price: CatalogModel.ProductListingPrice(),

      medias: Joi.array().items(CatalogModel.Media()),

      color: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating: Joi.number(),

      is_dependent: Joi.boolean(),

      item_code: Joi.string().allow(""),

      _custom_json: Joi.any(),

      product_online_date: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      net_quantity: CatalogModel.NetQuantity(),

      item_type: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      highlights: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),
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
      value: Joi.string().allow(""),

      convertable: Joi.boolean(),
    });
  }

  static ColumnHeaders() {
    return Joi.object({
      col_5: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_5: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_1: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      headers: CatalogModel.ColumnHeaders(),

      title: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      size_tip: Joi.string().allow(""),

      image: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static Dimension() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_available: Joi.boolean(),

      weight: CatalogModel.Weight(),

      quantity: Joi.number(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      value: Joi.string().allow(""),

      dimension: CatalogModel.Dimension(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      stores: CatalogModel.ProductSizeStores(),

      size_chart: CatalogModel.SizeChart(),

      price: CatalogModel.ProductListingPrice(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      multi_size: Joi.boolean(),

      sellable: Joi.boolean(),

      discount: Joi.string().allow(""),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

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
      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      items: Joi.array().items(CatalogModel.ProductDetail()),
    });
  }

  static ProductCompareResponse() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductDetail()),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

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
      medias: Joi.array().items(CatalogModel.Media()),

      color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      is_available: Joi.boolean(),

      color_name: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      value: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(CatalogModel.ProductVariantResponse()),
    });
  }

  static Seller() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
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
      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      code: Joi.string().allow(""),
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

      price: CatalogModel.ProductStockPrice(),

      store: CatalogModel.StoreDetail(),

      item_id: Joi.number(),

      quantity: Joi.number(),

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
      selected_min: Joi.number(),

      display: Joi.string().allow("").required(),

      currency_symbol: Joi.string().allow(""),

      value: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      selected_max: Joi.number(),

      max: Joi.number(),

      is_selected: Joi.boolean().required(),

      display_format: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      key: CatalogModel.ProductFiltersKey().required(),

      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),
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
      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      rating_count: Joi.number(),

      name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      teaser_tag: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      slug: Joi.string().allow("").required(),

      attributes: Joi.any(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      sizes: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      seo: CatalogModel.ApplicationItemSEO(),

      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      moq: CatalogModel.ApplicationItemMOQ(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      price: CatalogModel.ProductListingPrice(),

      medias: Joi.array().items(CatalogModel.Media()),

      color: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating: Joi.number(),

      sellable: Joi.boolean(),

      is_dependent: Joi.boolean(),

      item_code: Joi.string().allow(""),

      _custom_json: Joi.any(),

      product_online_date: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      net_quantity: CatalogModel.NetQuantity(),

      item_type: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      highlights: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
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

      logo: CatalogModel.Media(),

      departments: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      description: Joi.string().allow(""),
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

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),
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
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),
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
      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number().required(),

      banners: CatalogModel.CategoryBanner().required(),

      action: CatalogModel.ProductListingAction().required(),
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

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static Department() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      priority_order: Joi.number(),

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
      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      type: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),
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
      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      meta: Joi.any(),

      uid: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      badge: Joi.any(),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),
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
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      meta: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      badge: Joi.any(),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),
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
      uid: Joi.number(),

      address: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      pincode: Joi.number(),

      name: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      priority_order: Joi.number(),

      uid: Joi.number(),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      pincode: Joi.number(),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),
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

  static CompanyStore() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      address: CatalogModel.StoreAddressSerializer(),

      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      manager: CatalogModel.StoreManagerSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      uid: Joi.number(),

      company: CatalogModel.CompanyStore(),
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
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static StoreTiming() {
    return Joi.object({
      open: Joi.boolean(),

      closing: CatalogModel.Time(),

      weekday: Joi.string().allow(""),

      opening: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      address: CatalogModel.StoreAddressSerializer(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      manager: CatalogModel.StoreManagerSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      uid: Joi.number(),

      company: CatalogModel.CompanyStore(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      is_set: Joi.boolean(),

      rating_count: Joi.number(),

      name: Joi.string().allow(""),

      hsn_code: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      attributes: Joi.any(),

      slug: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      out_of_stock: Joi.boolean(),

      images: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.any(),

      rating: Joi.number(),

      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      media: Joi.array().items(Joi.any()),

      identifier: Joi.any(),

      description: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      min_marked: Joi.number(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),

      currency: Joi.string().allow(""),

      max_marked: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      product_details: CatalogModel.ProductDetails(),

      auto_add_to_cart: Joi.boolean(),

      price: CatalogModel.ProductGroupPrice(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number(),

      allow_remove: Joi.boolean(),
    });
  }

  static UserDetail() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),

      username: Joi.string().allow("").required(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      verified_by: CatalogModel.UserDetail(),

      created_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").allow(null),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      verified_on: Joi.string().allow(""),

      _id: Joi.any(),

      choice: Joi.string().allow(""),

      modified_on: Joi.string().allow("").required(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
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

  static DetailsSchemaV3() {
    return Joi.object({
      key: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
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
      unit: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      price: Joi.number(),

      currency_code: Joi.string().allow(""),
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

  static SellerV3() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
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

  static StoreV3() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      is_cod: Joi.boolean(),

      set: CatalogModel.ProductSetV3(),

      discount: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      long_lat: Joi.array().items(Joi.number()),

      seller_count: Joi.number(),

      is_gift: Joi.boolean(),

      price: CatalogModel.ProductStockPriceV3(),

      special_badge: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      seller: CatalogModel.SellerV3(),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      store: CatalogModel.StoreV3(),

      pincode: Joi.number(),

      quantity: Joi.number(),

      item_type: Joi.string().allow(""),

      price_per_piece: CatalogModel.ProductStockPriceV3(),
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
      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),
    });
  }
}
module.exports = CatalogModel;
