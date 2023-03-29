const Joi = require("joi");

class CatalogModel {
  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      alt: Joi.string().allow(""),

      meta: CatalogModel.Meta(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),
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

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.any(),

      description: Joi.any(),
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
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      image_nature: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      teaser_tag: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      attributes: Joi.any(),

      rating_count: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      discount: Joi.string().allow(""),

      description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      similars: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      moq: CatalogModel.ApplicationItemMOQ(),

      seo: CatalogModel.ApplicationItemSEO(),

      uid: Joi.number(),

      type: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      rating: Joi.number(),

      has_variant: Joi.boolean(),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      action: CatalogModel.ProductListingAction(),

      color: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
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

      col_6: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_1: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_3: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      title: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      description: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      image: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
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
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      width: Joi.number().required(),

      height: Joi.number().required(),

      length: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      weight: CatalogModel.Weight(),

      dimension: CatalogModel.Dimension(),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      value: Joi.string().allow(""),
    });
  }

  static ProductSizes() {
    return Joi.object({
      price: CatalogModel.ProductListingPrice(),

      discount: Joi.string().allow(""),

      sellable: Joi.boolean(),

      multi_size: Joi.boolean(),

      size_chart: CatalogModel.SizeChart(),

      stores: CatalogModel.ProductSizeStores(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),
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
      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

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
      slug: Joi.string().allow(""),

      color_name: Joi.string().allow(""),

      is_available: Joi.boolean(),

      value: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      medias: Joi.array().items(CatalogModel.Media()),

      color: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

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
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
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

  static ProductStockStatusItem() {
    return Joi.object({
      price: CatalogModel.ProductStockPrice(),

      identifier: Joi.any(),

      company: CatalogModel.CompanyDetail(),

      quantity: Joi.number(),

      seller: CatalogModel.Seller(),

      uid: Joi.string().allow(""),

      store: CatalogModel.StoreDetail(),

      size: Joi.string().allow(""),

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
      next_id: Joi.string().allow("").allow(null),

      has_next: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().allow("").required(),

      item_total: Joi.number(),

      size: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static ProductStockPolling() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductStockStatusItem()),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      min: Joi.number(),

      selected_max: Joi.number(),

      is_selected: Joi.boolean().required(),

      currency_symbol: Joi.string().allow(""),

      value: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),

      selected_min: Joi.number(),

      count: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

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
      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),

      key: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      total: Joi.number(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      image_nature: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      identifiers: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),

      teaser_tag: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      attributes: Joi.any(),

      rating_count: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      discount: Joi.string().allow(""),

      description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      similars: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      sellable: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      seo: CatalogModel.ApplicationItemSEO(),

      uid: Joi.number(),

      type: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      rating: Joi.number(),

      has_variant: Joi.boolean(),

      brand: CatalogModel.ProductBrand(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      sizes: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      action: CatalogModel.ProductListingAction(),

      color: Joi.string().allow(""),
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
      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
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
      slug: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),

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
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

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

  static CategoryBanner() {
    return Joi.object({
      landscape: CatalogModel.Media().required(),

      portrait: CatalogModel.Media().required(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      banners: CatalogModel.CategoryBanner().required(),

      uid: Joi.number().required(),

      name: Joi.string().allow("").required(),

      action: CatalogModel.ProductListingAction().required(),

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

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static Department() {
    return Joi.object({
      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

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
      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      type: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

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
      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      badge: Joi.any(),

      meta: Joi.any(),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tag: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),
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
      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      badge: Joi.any(),

      meta: Joi.any(),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tag: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      is_active: Joi.boolean(),
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
      pincode: Joi.number(),

      store_code: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

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
      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

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

  static CompanyStore() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      manager: CatalogModel.StoreManagerSerializer(),

      company: CatalogModel.CompanyStore(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

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
      minute: Joi.number(),

      hour: Joi.number(),
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
      _custom_json: Joi.any(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      manager: CatalogModel.StoreManagerSerializer(),

      company: CatalogModel.CompanyStore(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      address: CatalogModel.StoreAddressSerializer(),
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

  static ProductGroupPrice() {
    return Joi.object({
      min_marked: Joi.number(),

      currency: Joi.any(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      max_effective: Joi.number(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      slug: Joi.any(),

      image_nature: Joi.any(),

      images: Joi.array().items(Joi.any()),

      attributes: Joi.any(),

      hsn_code: Joi.number(),

      rating_count: Joi.number(),

      description: Joi.any(),

      grouped_attributes: Joi.any(),

      country_of_origin: Joi.any(),

      template_tag: Joi.any(),

      is_set: Joi.boolean(),

      item_code: Joi.any(),

      identifier: Joi.any(),

      brand_uid: Joi.number(),

      rating: Joi.number(),

      has_variant: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      highlights: Joi.array().items(Joi.any()),

      media: Joi.array().items(Joi.any()),

      short_description: Joi.any(),

      name: Joi.any(),
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
      auto_add_to_cart: Joi.boolean(),

      price: CatalogModel.ProductGroupPrice(),

      product_details: CatalogModel.ProductDetails(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      min_quantity: Joi.number(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      choice: Joi.any(),

      slug: Joi.any(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      modified_by: CatalogModel.UserDetail(),

      verified_by: CatalogModel.UserDetail(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      name: Joi.any().required(),

      _id: Joi.any(),

      page_visibility: Joi.array().items(Joi.any()),

      verified_on: Joi.string().allow(""),

      meta: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static ProductStockPriceV2() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static ProductStockUnitPriceV2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      price: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static DetailsSchemaV2() {
    return Joi.object({
      type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),
    });
  }

  static ProductSetDistributionSizeV2() {
    return Joi.object({
      size: Joi.string().allow(""),

      pieces: Joi.number(),
    });
  }

  static ProductSetDistributionV2() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.ProductSetDistributionSizeV2()),
    });
  }

  static ProductSetV2() {
    return Joi.object({
      size_distribution: CatalogModel.ProductSetDistributionV2(),

      quantity: Joi.number(),
    });
  }

  static SellerV2() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static ReturnConfigSchemaV2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static ArticleAssignmentV2() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static StoreV2() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static MarketPlaceSttributesSchemaV2() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),
    });
  }

  static StrategyWiseListingSchemaV2() {
    return Joi.object({
      pincode: Joi.number(),

      tat: Joi.number(),

      quantity: Joi.number(),

      distance: Joi.number(),
    });
  }

  static ProductSizePriceResponseV2() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      is_gift: Joi.boolean(),

      price_per_piece: CatalogModel.ProductStockPriceV2(),

      special_badge: Joi.string().allow(""),

      long_lat: Joi.array().items(Joi.number()),

      price: CatalogModel.ProductStockPriceV2(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV2(),

      discount: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      set: CatalogModel.ProductSetV2(),

      seller: CatalogModel.SellerV2(),

      is_cod: Joi.boolean(),

      return_config: CatalogModel.ReturnConfigSchemaV2(),

      article_assignment: CatalogModel.ArticleAssignmentV2(),

      store: CatalogModel.StoreV2(),

      seller_count: Joi.number(),

      pincode: Joi.number(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV2()
      ),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV2()
      ),

      quantity: Joi.number(),

      item_type: Joi.string().allow(""),
    });
  }

  static ProductSizeSellerFilterSchemaV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ProductSizeSellersResponseV2() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV2()),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV2()
      ),
    });
  }
}
module.exports = CatalogModel;
