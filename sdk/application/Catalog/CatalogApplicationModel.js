const Joi = require("joi");

class CatalogModel {
  static CustomMetaFields() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
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

  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      type: Joi.string().allow(""),

      alt: Joi.string().allow(""),

      meta: CatalogModel.Meta(),

      url: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static Price() {
    return Joi.object({
      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: CatalogModel.Price(),

      effective: CatalogModel.Price(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l2: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),

      l3: CatalogModel.ProductBrand(),
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
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      price: CatalogModel.ProductListingPrice(),

      discount: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      medias: Joi.array().items(CatalogModel.Media()),

      seo: CatalogModel.ApplicationItemSEO(),

      moq: CatalogModel.ApplicationItemMOQ(),

      description: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      is_dependent: Joi.boolean(),

      rating: Joi.number(),

      slug: Joi.string().allow("").required(),

      uid: Joi.number(),

      teaser_tag: Joi.string().allow(""),

      attributes: Joi.any(),

      product_online_date: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      _custom_json: Joi.any(),

      net_quantity: CatalogModel.NetQuantity(),

      name: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static Dimension() {
    return Joi.object({
      length: Joi.number().required(),

      height: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      quantity: Joi.number(),

      weight: CatalogModel.Weight(),

      is_available: Joi.boolean(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      value: Joi.string().allow(""),

      dimension: CatalogModel.Dimension(),

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
      col_1: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

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
      col_1: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      size_tip: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      description: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      title: Joi.string().allow(""),

      image: Joi.string().allow(""),
    });
  }

  static ProductSizes() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.ProductSize()),

      sellable: Joi.boolean(),

      price: CatalogModel.ProductListingPrice(),

      multi_size: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      discount: Joi.string().allow(""),

      size_chart: CatalogModel.SizeChart(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      display: Joi.string().allow(""),

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
      medias: Joi.array().items(CatalogModel.Media()),

      color: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      uid: Joi.number(),

      color_name: Joi.string().allow(""),

      is_available: Joi.boolean(),

      value: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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

  static CompanyDetail() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static Seller() {
    return Joi.object({
      count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      id: Joi.number(),

      code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      company: CatalogModel.CompanyDetail(),

      item_id: Joi.number(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      seller: CatalogModel.Seller(),

      price: CatalogModel.ProductStockPrice(),

      size: Joi.string().allow(""),

      store: CatalogModel.StoreDetail(),

      identifier: Joi.any(),
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

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      max: Joi.number(),

      selected_min: Joi.number(),

      min: Joi.number(),

      display_format: Joi.string().allow(""),

      value: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      selected_max: Joi.number(),

      is_selected: Joi.boolean().required(),

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

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      total: Joi.number(),

      header: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      price: CatalogModel.ProductListingPrice(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      discount: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      medias: Joi.array().items(CatalogModel.Media()),

      sizes: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.ApplicationItemSEO(),

      moq: CatalogModel.ApplicationItemMOQ(),

      description: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      is_dependent: Joi.boolean(),

      rating: Joi.number(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      uid: Joi.number(),

      teaser_tag: Joi.string().allow(""),

      attributes: Joi.any(),

      product_online_date: Joi.string().allow(""),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      _custom_json: Joi.any(),

      sellable: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantity(),

      name: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

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
      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      discount: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

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
      uid: Joi.number(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

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
      uid: Joi.number(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(Joi.any()),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number().required(),

      banners: CatalogModel.CategoryBanner().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      action: CatalogModel.ProductListingAction().required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),
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
      uid: Joi.number(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

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

      priority_order: Joi.number(),

      name: Joi.string().allow(""),

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
      type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),

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
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      action: CatalogModel.ProductListingAction(),

      allow_facets: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      badge: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      sort_on: Joi.string().allow(""),

      _schedule: Joi.any(),

      meta: Joi.any(),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      priority: Joi.number(),
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
      app_id: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      allow_facets: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      badge: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      sort_on: Joi.string().allow(""),

      _schedule: Joi.any(),

      meta: Joi.any(),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      priority: Joi.number(),
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
      type: Joi.string().allow(""),

      coordinates: Joi.array().items(Joi.number()),
    });
  }

  static Store() {
    return Joi.object({
      uid: Joi.number(),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      store_email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      address: Joi.string().allow(""),

      country: Joi.string().allow(""),
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
      uid: Joi.number(),

      priority_order: Joi.number(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static CompanyStore() {
    return Joi.object({
      company_type: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      company: CatalogModel.CompanyStore(),

      uid: Joi.number(),

      manager: CatalogModel.StoreManagerSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      name: Joi.string().allow(""),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      address: CatalogModel.StoreAddressSerializer(),
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
      opening: CatalogModel.Time(),

      weekday: Joi.string().allow(""),

      closing: CatalogModel.Time(),

      open: Joi.boolean(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      company: CatalogModel.CompanyStore(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      manager: CatalogModel.StoreManagerSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      name: Joi.string().allow(""),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      address: CatalogModel.StoreAddressSerializer(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      template_tag: Joi.any(),

      country_of_origin: Joi.any(),

      rating_count: Joi.number(),

      media: Joi.array().items(Joi.any()),

      hsn_code: Joi.number(),

      item_code: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      grouped_attributes: Joi.any(),

      image_nature: Joi.any(),

      out_of_stock: Joi.boolean(),

      images: Joi.array().items(Joi.any()),

      description: Joi.any(),

      has_variant: Joi.boolean(),

      brand_uid: Joi.number(),

      rating: Joi.number(),

      slug: Joi.any(),

      attributes: Joi.any(),

      name: Joi.any(),

      identifier: Joi.any(),

      is_set: Joi.boolean(),

      short_description: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      value: Joi.any(),

      quantity: Joi.number(),

      display: Joi.any(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      min_effective: Joi.number(),

      max_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.any(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      product_details: CatalogModel.ProductDetails(),

      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.Size()),

      min_quantity: Joi.number(),

      price: CatalogModel.ProductGroupPrice(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),
    });
  }

  static UserDetail() {
    return Joi.object({
      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      modified_on: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      _id: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.any(),

      company_id: Joi.number(),

      modified_by: CatalogModel.UserDetail(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserDetail(),

      name: Joi.any().required(),

      verified_on: Joi.string().allow(""),

      meta: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      slug: Joi.any(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
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

  static ProductStockPriceV3() {
    return Joi.object({
      marked: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static StoreV3() {
    return Joi.object({
      count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      quantity: Joi.number(),

      tat: Joi.number(),

      distance: Joi.number(),

      pincode: Joi.number(),
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
      size_distribution: CatalogModel.ProductSetDistributionV3(),

      quantity: Joi.number(),
    });
  }

  static ArticleAssignmentV3() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static SellerV3() {
    return Joi.object({
      count: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      seller_count: Joi.number(),

      special_badge: Joi.string().allow(""),

      store: CatalogModel.StoreV3(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      set: CatalogModel.ProductSetV3(),

      quantity: Joi.number(),

      pincode: Joi.number(),

      price: CatalogModel.ProductStockPriceV3(),

      discount: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      long_lat: Joi.array().items(Joi.number()),

      seller: CatalogModel.SellerV3(),

      item_type: Joi.string().allow(""),

      article_id: Joi.string().allow(""),
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

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),

      items: Joi.array().items(CatalogModel.ProductSizePriceResponseV3()),
    });
  }
}
module.exports = CatalogModel;
