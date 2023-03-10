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

      url: Joi.string().allow(""),

      alt: Joi.string().allow(""),

      meta: CatalogModel.Meta(),
    });
  }

  static ProductListingActionPage() {
    return Joi.object({
      query: Joi.any(),

      type: Joi.string().allow(""),

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
      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),
    });
  }

  static Price() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      min: Joi.number(),

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

  static ProductDetailAttribute() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      key: Joi.string().allow(""),
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
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      increment_unit: Joi.number(),

      minimum: Joi.number(),
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

  static ProductDetail() {
    return Joi.object({
      brand: CatalogModel.ProductBrand(),

      discount: Joi.string().allow(""),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      image_nature: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      price: CatalogModel.ProductListingPrice(),

      has_variant: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),

      name: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      attributes: Joi.any(),

      teaser_tag: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      tags: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media()),

      moq: CatalogModel.ApplicationItemMOQ(),

      item_type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      net_quantity: CatalogModel.NetQuantity(),

      rating: Joi.number(),

      uid: Joi.number(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
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
      length: Joi.number().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      height: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      weight: CatalogModel.Weight(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      is_available: Joi.boolean(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      dimension: CatalogModel.Dimension(),

      quantity: Joi.number(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_4: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_2: Joi.string().allow(""),
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

      col_3: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      image: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),
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

      discount: Joi.string().allow(""),

      size_chart: CatalogModel.SizeChart(),

      sellable: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      multi_size: Joi.boolean(),

      price: CatalogModel.ProductListingPrice(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      display: Joi.string().allow(""),

      description: Joi.string().allow(""),

      key: Joi.string().allow(""),

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
      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      items: Joi.array().items(CatalogModel.ProductDetail()),
    });
  }

  static ProductCompareResponse() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

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
      name: Joi.string().allow(""),

      is_available: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      color: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      value: Joi.string().allow(""),

      uid: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media()),

      color_name: Joi.string().allow(""),
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

  static Seller() {
    return Joi.object({
      name: Joi.string().allow(""),

      count: Joi.number(),

      uid: Joi.number(),
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
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),

      code: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      size: Joi.string().allow(""),

      seller: CatalogModel.Seller(),

      identifier: Joi.any(),

      item_id: Joi.number(),

      company: CatalogModel.CompanyDetail(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      price: CatalogModel.ProductStockPrice(),

      store: CatalogModel.StoreDetail(),
    });
  }

  static ProductStockStatusResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductStockStatusItem()),
    });
  }

  static Page() {
    return Joi.object({
      size: Joi.number(),

      has_previous: Joi.boolean(),

      item_total: Joi.number(),

      next_id: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").required(),

      current: Joi.number(),

      has_next: Joi.boolean(),
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

      header: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      key: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      brand: CatalogModel.ProductBrand(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      sellable: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      price: CatalogModel.ProductListingPrice(),

      has_variant: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      is_dependent: Joi.boolean(),

      name: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      attributes: Joi.any(),

      teaser_tag: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      tags: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media()),

      moq: CatalogModel.ApplicationItemMOQ(),

      item_type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      net_quantity: CatalogModel.NetQuantity(),

      rating: Joi.number(),

      uid: Joi.number(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

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
      query_format: Joi.string().allow(""),

      min: Joi.number(),

      is_selected: Joi.boolean().required(),

      count: Joi.number(),

      max: Joi.number(),

      selected_max: Joi.number(),

      display: Joi.string().allow("").required(),

      display_format: Joi.string().allow(""),

      value: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      selected_min: Joi.number(),
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

      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
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
      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
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

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),
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
      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.CategoryBanner().required(),

      name: Joi.string().allow("").required(),

      action: CatalogModel.ProductListingAction().required(),

      slug: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      childs: Joi.array().items(CatalogModel.Child()),
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
      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),
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
      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

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
      logo: CatalogModel.Media(),

      type: Joi.string().allow(""),

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
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      slug: Joi.string().allow(""),

      cron: Joi.any(),

      is_active: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),
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

      type: Joi.string().allow(""),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      slug: Joi.string().allow(""),

      cron: Joi.any(),

      is_active: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),
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
      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pincode: Joi.number(),

      store_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      uid: Joi.number(),

      state: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),
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
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

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
      longitude: Joi.number(),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static CompanyStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static StoreManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber(),
    });
  }

  static AppStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      uid: Joi.number(),
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
      weekday: Joi.string().allow(""),

      closing: CatalogModel.Time(),

      open: Joi.boolean(),

      opening: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      timing: Joi.array().items(CatalogModel.StoreTiming()),

      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      _custom_json: Joi.any(),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      uid: Joi.number(),
    });
  }

  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.any(),

      value: Joi.any(),

      is_available: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      country_of_origin: Joi.any(),

      rating_count: Joi.number(),

      out_of_stock: Joi.boolean(),

      image_nature: Joi.any(),

      has_variant: Joi.boolean(),

      highlights: Joi.array().items(Joi.any()),

      name: Joi.any(),

      identifier: Joi.any(),

      hsn_code: Joi.number(),

      slug: Joi.any(),

      grouped_attributes: Joi.any(),

      attributes: Joi.any(),

      template_tag: Joi.any(),

      item_code: Joi.any(),

      brand_uid: Joi.number(),

      short_description: Joi.any(),

      description: Joi.any(),

      is_set: Joi.boolean(),

      media: Joi.array().items(Joi.any()),

      images: Joi.array().items(Joi.any()),

      rating: Joi.number(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_effective: Joi.number(),

      currency: Joi.any(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.ProductDetails(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),

      min_quantity: Joi.number(),

      allow_remove: Joi.boolean(),

      price: CatalogModel.ProductGroupPrice(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      verified_by: CatalogModel.UserDetail(),

      created_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      name: Joi.any().required(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.any()),

      slug: Joi.any(),

      created_on: Joi.string().allow("").required(),

      choice: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      _id: Joi.any(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
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
      quantity: Joi.number(),

      size_distribution: CatalogModel.ProductSetDistributionV2(),
    });
  }

  static ProductStockUnitPriceV2() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      price: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static ProductStockPriceV2() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static DetailsSchemaV2() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV2() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),
    });
  }

  static SellerV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),
    });
  }

  static StrategyWiseListingSchemaV2() {
    return Joi.object({
      distance: Joi.number(),

      tat: Joi.number(),

      quantity: Joi.number(),

      pincode: Joi.number(),
    });
  }

  static StoreV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      count: Joi.number(),

      uid: Joi.number(),
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

  static ProductSizePriceResponseV2() {
    return Joi.object({
      discount: Joi.string().allow(""),

      set: CatalogModel.ProductSetV2(),

      long_lat: Joi.array().items(Joi.number()),

      pincode: Joi.number(),

      seller_count: Joi.number(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV2(),

      price: CatalogModel.ProductStockPriceV2(),

      price_per_piece: CatalogModel.ProductStockPriceV2(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV2()
      ),

      article_id: Joi.string().allow(""),

      seller: CatalogModel.SellerV2(),

      is_gift: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV2()
      ),

      store: CatalogModel.StoreV2(),

      return_config: CatalogModel.ReturnConfigSchemaV2(),

      special_badge: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      is_cod: Joi.boolean(),

      quantity: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignmentV2(),
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
      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV2()
      ),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV2()),
    });
  }
}
module.exports = CatalogModel;
