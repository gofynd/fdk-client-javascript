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

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
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

  static Price() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
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

      uid: Joi.number(),

      logo: CatalogModel.Media(),

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

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
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
      action: CatalogModel.ProductListingAction(),

      discount: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      rating: Joi.number(),

      rating_count: Joi.number(),

      moq: CatalogModel.ApplicationItemMOQ(),

      image_nature: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      price: CatalogModel.ProductListingPrice(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      teaser_tag: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      similars: Joi.array().items(Joi.string().allow("")),

      category_map: CatalogModel.ProductCategoryMap(),

      short_description: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      product_online_date: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      brand: CatalogModel.ProductBrand(),

      color: Joi.string().allow(""),

      attributes: Joi.any(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      has_variant: Joi.boolean(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      item_type: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static Dimension() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      height: Joi.number().required(),
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

      dimension: CatalogModel.Dimension(),

      quantity: Joi.number(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      is_available: Joi.boolean(),

      weight: CatalogModel.Weight(),

      display: Joi.string().allow(""),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_2: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

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
      col_2: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      image: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      title: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      description: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.ProductSize()),

      multi_size: Joi.boolean(),

      sellable: Joi.boolean(),

      price: CatalogModel.ProductListingPrice(),

      stores: CatalogModel.ProductSizeStores(),

      discount: Joi.string().allow(""),

      size_chart: CatalogModel.SizeChart(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      key: Joi.string().allow(""),

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
      items: Joi.array().items(CatalogModel.ProductDetail()),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),
    });
  }

  static ProductCompareResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductDetail()),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      subtitle: Joi.string().allow(""),

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
      value: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      color_name: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      is_available: Joi.boolean(),

      slug: Joi.string().allow(""),

      color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),
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

  static Seller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      size: Joi.string().allow(""),

      company: CatalogModel.CompanyDetail(),

      quantity: Joi.number(),

      seller: CatalogModel.Seller(),

      price: CatalogModel.ProductStockPrice(),

      uid: Joi.string().allow(""),

      identifier: Joi.any(),

      store: CatalogModel.StoreDetail(),

      item_id: Joi.number(),
    });
  }

  static ProductStockStatusResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductStockStatusItem()),
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
      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      total: Joi.number(),

      display_type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      header: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),

      discount: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      rating: Joi.number(),

      rating_count: Joi.number(),

      moq: CatalogModel.ApplicationItemMOQ(),

      image_nature: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      identifiers: Joi.array().items(Joi.string().allow("")),

      price: CatalogModel.ProductListingPrice(),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      teaser_tag: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      similars: Joi.array().items(Joi.string().allow("")),

      category_map: CatalogModel.ProductCategoryMap(),

      short_description: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      sellable: Joi.boolean(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      product_online_date: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      brand: CatalogModel.ProductBrand(),

      color: Joi.string().allow(""),

      attributes: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      has_variant: Joi.boolean(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      item_type: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      value: Joi.string().allow(""),

      min: Joi.number(),

      is_selected: Joi.boolean().required(),

      selected_max: Joi.number(),

      display_format: Joi.string().allow(""),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      currency_code: Joi.string().allow(""),

      count: Joi.number(),

      display: Joi.string().allow("").required(),
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

  static ProductSortOn() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

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
      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      departments: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

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
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.CategoryBanner().required(),

      action: CatalogModel.ProductListingAction().required(),

      uid: Joi.number().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      slug: Joi.string().allow("").required(),

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
      uid: Joi.number(),

      slug: Joi.string().allow(""),
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
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      message: Joi.string().allow(""),
    });
  }

  static Department() {
    return Joi.object({
      priority_order: Joi.number(),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

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
      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),

      type: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.AutocompleteItem()),
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
      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.ProductListingAction(),

      cron: Joi.any(),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      meta: Joi.any(),

      allow_sort: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      _schedule: Joi.any(),

      _custom_json: Joi.any(),

      sort_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),
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

  static GetCollectionListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      filters: CatalogModel.CollectionListingFilter(),

      page: CatalogModel.Page().required(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      meta: Joi.any(),

      allow_sort: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      _schedule: Joi.any(),

      _custom_json: Joi.any(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),
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
      collections: Joi.array().items(Joi.number()),

      products: Joi.array().items(Joi.number()),

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
      pincode: Joi.number(),

      state: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      name: Joi.string().allow(""),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Store()).required(),

      page: CatalogModel.Page().required(),
    });
  }

  static CompanyStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
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

  static StoreDepartments() {
    return Joi.object({
      priority_order: Joi.number(),

      uid: Joi.number(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      address1: Joi.string().allow(""),

      longitude: Joi.number(),
    });
  }

  static AppStore() {
    return Joi.object({
      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      uid: Joi.number(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      name: Joi.string().allow(""),
    });
  }

  static ApplicationStoreListing() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.AppStore()),

      filters: Joi.array().items(CatalogModel.StoreDepartments()),

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
      _custom_json: Joi.any(),

      company: CatalogModel.CompanyStore(),

      manager: CatalogModel.StoreManagerSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      uid: Joi.number(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      name: Joi.string().allow(""),
    });
  }

  static UserDetail() {
    return Joi.object({
      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),

      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),
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

  static ProductDetails() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      country_of_origin: Joi.any(),

      rating: Joi.number(),

      rating_count: Joi.number(),

      image_nature: Joi.any(),

      grouped_attributes: Joi.any(),

      brand_uid: Joi.number(),

      images: Joi.array().items(Joi.any()),

      media: Joi.array().items(Joi.any()),

      item_code: Joi.any(),

      slug: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      short_description: Joi.any(),

      template_tag: Joi.any(),

      hsn_code: Joi.number(),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      identifier: Joi.any(),

      is_set: Joi.boolean(),

      description: Joi.any(),

      name: Joi.any(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_marked: Joi.number(),

      currency: Joi.any(),

      min_effective: Joi.number(),

      min_marked: Joi.number(),

      max_effective: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.ProductDetails(),

      allow_remove: Joi.boolean(),

      price: CatalogModel.ProductGroupPrice(),

      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail(),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").required(),

      meta: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      choice: Joi.any(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.any()),

      same_store_assignment: Joi.boolean(),

      slug: Joi.any(),

      _id: Joi.any(),

      name: Joi.any().required(),

      verified_by: CatalogModel.UserDetail(),
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

  static StoreV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static ReturnConfigSchemaV2() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static DetailsSchemaV2() {
    return Joi.object({
      value: Joi.string().allow(""),

      key: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),

      title: Joi.string().allow(""),
    });
  }

  static StrategyWiseListingSchemaV2() {
    return Joi.object({
      pincode: Joi.number(),

      quantity: Joi.number(),

      distance: Joi.number(),

      tat: Joi.number(),
    });
  }

  static ArticleAssignmentV2() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static SellerV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static MarketPlaceSttributesSchemaV2() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),

      title: Joi.string().allow(""),
    });
  }

  static ProductStockUnitPriceV2() {
    return Joi.object({
      price: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV2() {
    return Joi.object({
      price_per_piece: CatalogModel.ProductStockPriceV2(),

      pincode: Joi.number(),

      article_id: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      set: CatalogModel.ProductSetV2(),

      store: CatalogModel.StoreV2(),

      return_config: CatalogModel.ReturnConfigSchemaV2(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV2()
      ),

      long_lat: Joi.array().items(Joi.number()),

      price: CatalogModel.ProductStockPriceV2(),

      article_assignment: CatalogModel.ArticleAssignmentV2(),

      is_gift: Joi.boolean(),

      quantity: Joi.number(),

      seller: CatalogModel.SellerV2(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV2()
      ),

      is_cod: Joi.boolean(),

      special_badge: Joi.string().allow(""),

      seller_count: Joi.number(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV2(),

      item_type: Joi.string().allow(""),
    });
  }

  static ProductSizeSellerFilterSchemaV2() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductSizeSellersResponseV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV2()),

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV2()
      ),
    });
  }
}
module.exports = CatalogModel;
