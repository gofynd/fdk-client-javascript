const Joi = require("joi");

class CatalogModel {
  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
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

  static ProductBrand() {
    return Joi.object({
      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l3: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),
    });
  }

  static Price() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),
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

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      moq: CatalogModel.ApplicationItemMOQ(),

      rating_count: Joi.number(),

      color: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      category_map: CatalogModel.ProductCategoryMap(),

      type: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      uid: Joi.number(),

      short_description: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      teaser_tag: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      is_dependent: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      similars: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantity(),

      has_variant: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      action: CatalogModel.ProductListingAction(),

      attributes: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static Dimension() {
    return Joi.object({
      height: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      width: Joi.number().required(),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      is_available: Joi.boolean(),

      quantity: Joi.number(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      dimension: CatalogModel.Dimension(),

      weight: CatalogModel.Weight(),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_4: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_3: Joi.string().allow(""),
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

      col_2: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      size_tip: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      description: Joi.string().allow(""),

      image: Joi.string().allow(""),

      unit: Joi.string().allow(""),

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
      sizes: Joi.array().items(CatalogModel.ProductSize()),

      price: CatalogModel.ProductListingPrice(),

      size_chart: CatalogModel.SizeChart(),

      multi_size: Joi.boolean(),

      sellable: Joi.boolean(),

      discount: Joi.string().allow(""),

      stores: CatalogModel.ProductSizeStores(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      key: Joi.string().allow(""),

      description: Joi.string().allow(""),

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
      items: Joi.array().items(CatalogModel.ProductDetail()),

      subtitle: Joi.string().allow(""),

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
      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      color: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      medias: Joi.array().items(CatalogModel.Media()),

      uid: Joi.number(),

      color_name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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

  static ProductStockPrice() {
    return Joi.object({
      currency: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static Seller() {
    return Joi.object({
      count: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyDetail() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      code: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      price: CatalogModel.ProductStockPrice(),

      seller: CatalogModel.Seller(),

      identifier: Joi.any(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      company: CatalogModel.CompanyDetail(),

      store: CatalogModel.StoreDetail(),

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
      display_type: Joi.string().allow(""),

      total: Joi.number(),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      key: Joi.string().allow(""),

      header: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      moq: CatalogModel.ApplicationItemMOQ(),

      sizes: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      color: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      category_map: CatalogModel.ProductCategoryMap(),

      type: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      sellable: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      uid: Joi.number(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      teaser_tag: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      is_dependent: Joi.boolean(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      similars: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantity(),

      has_variant: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      action: CatalogModel.ProductListingAction(),

      attributes: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),
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
      selected_min: Joi.number(),

      value: Joi.string().allow(""),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      count: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selected_max: Joi.number(),

      max: Joi.number(),

      query_format: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      display: Joi.string().allow("").required(),
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

      filters: Joi.array().items(CatalogModel.ProductFilters()),

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
      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
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

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),
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
      landscape: CatalogModel.Media().required(),

      portrait: CatalogModel.Media().required(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
    });
  }

  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.ProductListingAction().required(),

      name: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      banners: CatalogModel.CategoryBanner().required(),

      childs: Joi.array().items(CatalogModel.Child()),
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
      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static Department() {
    return Joi.object({
      name: Joi.string().allow(""),

      priority_order: Joi.number(),

      uid: Joi.number(),

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

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      type: Joi.string().allow(""),

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
      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      _schedule: Joi.any(),

      cron: Joi.any(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      sort_on: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      logo: CatalogModel.Media(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      _schedule: Joi.any(),

      cron: Joi.any(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      logo: CatalogModel.Media(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
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
      products: Joi.array().items(Joi.number()),

      collections: Joi.array().items(Joi.number()),

      brands: Joi.array().items(Joi.number()),
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

      store_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      lat_long: CatalogModel.LatLong(),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      address: Joi.string().allow(""),
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

      priority_order: Joi.number(),

      uid: Joi.number(),

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

  static CompanyStore() {
    return Joi.object({
      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),
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
      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      longitude: Joi.number(),
    });
  }

  static AppStore() {
    return Joi.object({
      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      address: CatalogModel.StoreAddressSerializer(),
    });
  }

  static ApplicationStoreListing() {
    return Joi.object({
      page: CatalogModel.Page(),

      filters: Joi.array().items(CatalogModel.StoreDepartments()),

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
      opening: CatalogModel.Time(),

      closing: CatalogModel.Time(),

      weekday: Joi.string().allow(""),

      open: Joi.boolean(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      name: Joi.string().allow(""),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      uid: Joi.number(),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      _custom_json: Joi.any(),

      address: CatalogModel.StoreAddressSerializer(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      brand_uid: Joi.number(),

      rating_count: Joi.number(),

      image_nature: Joi.any(),

      rating: Joi.number(),

      item_code: Joi.any(),

      description: Joi.any(),

      name: Joi.any(),

      identifier: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      short_description: Joi.any(),

      is_set: Joi.boolean(),

      images: Joi.array().items(Joi.any()),

      hsn_code: Joi.number(),

      has_variant: Joi.boolean(),

      media: Joi.array().items(Joi.any()),

      slug: Joi.any(),

      country_of_origin: Joi.any(),

      grouped_attributes: Joi.any(),

      attributes: Joi.any(),

      out_of_stock: Joi.boolean(),

      template_tag: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.any(),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      display: Joi.any(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_marked: Joi.number(),

      max_effective: Joi.number(),

      min_marked: Joi.number(),

      min_effective: Joi.number(),

      currency: Joi.any(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      product_details: CatalogModel.ProductDetails(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_select: Joi.boolean(),

      price: CatalogModel.ProductGroupPrice(),

      min_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

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
      _id: Joi.any(),

      choice: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      modified_by: CatalogModel.UserDetail(),

      slug: Joi.any(),

      name: Joi.any().required(),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserDetail(),

      logo: Joi.any(),

      same_store_assignment: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      verified_by: CatalogModel.UserDetail(),

      company_id: Joi.number(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static SellerV3() {
    return Joi.object({
      count: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static StoreV3() {
    return Joi.object({
      count: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductStockPriceV3() {
    return Joi.object({
      currency: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
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

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
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

  static SellerGroupAttributes() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),

      title: Joi.string().allow(""),
    });
  }

  static ProductStockUnitPriceV3() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      price: Joi.number(),
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

  static ProductSizePriceResponseV3() {
    return Joi.object({
      long_lat: Joi.array().items(Joi.number()),

      seller: CatalogModel.SellerV3(),

      store: CatalogModel.StoreV3(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      set: CatalogModel.ProductSetV3(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      seller_count: Joi.number(),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      special_badge: Joi.string().allow(""),

      price: CatalogModel.ProductStockPriceV3(),

      article_id: Joi.string().allow(""),

      is_cod: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      item_type: Joi.string().allow(""),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      pincode: Joi.number(),

      is_gift: Joi.boolean(),
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
      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),

      page: CatalogModel.Page().required(),
    });
  }
}
module.exports = CatalogModel;
