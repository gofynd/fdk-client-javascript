const Joi = require("joi");

class CatalogModel {
  static ProductListingActionPage() {
    return Joi.object({
      query: Joi.any(),

      params: Joi.any(),

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
      meta: CatalogModel.Meta(),

      alt: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      description: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),
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
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
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

  static ProductCategoryMap() {
    return Joi.object({
      l3: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
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
      categories: Joi.array().items(CatalogModel.ProductBrand()),

      attributes: Joi.any(),

      rating: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      teaser_tag: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      is_dependent: Joi.boolean(),

      description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      product_online_date: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      action: CatalogModel.ProductListingAction(),

      medias: Joi.array().items(CatalogModel.Media()),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      seo: CatalogModel.ApplicationItemSEO(),

      category_map: CatalogModel.ProductCategoryMap(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      has_variant: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_json: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      item_type: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_5: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_4: Joi.string().allow(""),
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

      col_2: CatalogModel.ColumnHeader(),

      col_3: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      description: Joi.string().allow(""),

      image: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      title: Joi.string().allow(""),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      headers: CatalogModel.ColumnHeaders(),
    });
  }

  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
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
      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      width: Joi.number().required(),

      height: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      display: Joi.string().allow(""),

      quantity: Joi.number(),

      value: Joi.string().allow(""),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      weight: CatalogModel.Weight(),

      is_available: Joi.boolean(),

      dimension: CatalogModel.Dimension(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      size_chart: CatalogModel.SizeChart(),

      multi_size: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      price: CatalogModel.ProductListingPrice(),

      discount: Joi.string().allow(""),

      sellable: Joi.boolean(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      key: Joi.string().allow(""),

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
      items: Joi.array().items(CatalogModel.ProductDetail()),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),
    });
  }

  static ProductCompareResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductDetail()),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      title: Joi.string().allow(""),

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
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      value: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media()),

      name: Joi.string().allow(""),

      color: Joi.string().allow(""),

      is_available: Joi.boolean(),

      color_name: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      header: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
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
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static Seller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      company: CatalogModel.CompanyDetail(),

      identifier: Joi.any(),

      item_id: Joi.number(),

      store: CatalogModel.StoreDetail(),

      size: Joi.string().allow(""),

      price: CatalogModel.ProductStockPrice(),

      seller: CatalogModel.Seller(),
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
      key: Joi.string().allow(""),

      total: Joi.number(),

      header: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      categories: Joi.array().items(CatalogModel.ProductBrand()),

      attributes: Joi.any(),

      rating: Joi.number(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      similars: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      teaser_tag: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      is_dependent: Joi.boolean(),

      description: Joi.string().allow(""),

      identifiers: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      product_online_date: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      action: CatalogModel.ProductListingAction(),

      medias: Joi.array().items(CatalogModel.Media()),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      seo: CatalogModel.ApplicationItemSEO(),

      category_map: CatalogModel.ProductCategoryMap(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      has_variant: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_json: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      item_type: Joi.string().allow(""),

      sellable: Joi.boolean(),

      type: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      display_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      is_selected: Joi.boolean().required(),

      selected_min: Joi.number(),

      value: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      count: Joi.number(),

      min: Joi.number(),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
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

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),
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

      uid: Joi.number(),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.ProductListingAction(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
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
      slug: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      action: CatalogModel.ProductListingAction().required(),

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.CategoryBanner().required(),

      name: Joi.string().allow("").required(),
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

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
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
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

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
      display: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      type: Joi.string().allow(""),
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
      allow_facets: Joi.boolean(),

      logo: CatalogModel.Media(),

      badge: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      uid: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),
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
      allow_facets: Joi.boolean(),

      logo: CatalogModel.Media(),

      badge: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),
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
      coordinates: Joi.array().items(Joi.number()),

      type: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      country: Joi.string().allow(""),

      uid: Joi.number(),

      state: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      pincode: Joi.number(),

      store_email: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      name: Joi.string().allow(""),

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
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),
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
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      latitude: Joi.number(),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static StoreManagerSerializer() {
    return Joi.object({
      mobile_no: CatalogModel.SellerPhoneNumber(),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      uid: Joi.number(),

      company: CatalogModel.CompanyStore(),

      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      manager: CatalogModel.StoreManagerSerializer(),
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

      closing: CatalogModel.Time(),

      open: Joi.boolean(),

      opening: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      company: CatalogModel.CompanyStore(),

      name: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.StoreAddressSerializer(),

      manager: CatalogModel.StoreManagerSerializer(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      attributes: Joi.any(),

      rating: Joi.number(),

      media: Joi.array().items(Joi.any()),

      identifier: Joi.any(),

      rating_count: Joi.number(),

      image_nature: Joi.any(),

      description: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      images: Joi.array().items(Joi.any()),

      name: Joi.any(),

      brand_uid: Joi.number(),

      hsn_code: Joi.number(),

      slug: Joi.any(),

      is_set: Joi.boolean(),

      grouped_attributes: Joi.any(),

      template_tag: Joi.any(),

      has_variant: Joi.boolean(),

      short_description: Joi.any(),

      item_code: Joi.any(),

      out_of_stock: Joi.boolean(),

      country_of_origin: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.any(),

      display: Joi.any(),

      is_available: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_marked: Joi.number(),

      currency: Joi.any(),

      max_effective: Joi.number(),

      min_marked: Joi.number(),

      min_effective: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),

      min_quantity: Joi.number(),

      product_details: CatalogModel.ProductDetails(),

      product_uid: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.ProductGroupPrice(),
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

  static ProductGroupingModel() {
    return Joi.object({
      slug: Joi.any(),

      meta: Joi.any(),

      choice: Joi.any(),

      is_active: Joi.boolean(),

      logo: Joi.any(),

      _id: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      verified_on: Joi.string().allow(""),

      name: Joi.any().required(),

      modified_by: CatalogModel.UserDetail(),

      page_visibility: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      created_by: CatalogModel.UserDetail(),

      verified_by: CatalogModel.UserDetail(),

      company_id: Joi.number(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
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

  static ProductStockPriceV3() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ReturnConfigSchemaV3() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static StoreV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
    });
  }

  static SellerV3() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
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

  static MarketPlaceSttributesSchemaV3() {
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

  static ArticleAssignmentV3() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static ProductStockUnitPriceV3() {
    return Joi.object({
      unit: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      price: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      is_cod: Joi.boolean(),

      set: CatalogModel.ProductSetV3(),

      special_badge: Joi.string().allow(""),

      price: CatalogModel.ProductStockPriceV3(),

      discount: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigSchemaV3(),

      seller_count: Joi.number(),

      long_lat: Joi.array().items(Joi.number()),

      store: CatalogModel.StoreV3(),

      seller: CatalogModel.SellerV3(),

      is_gift: Joi.boolean(),

      pincode: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      price_per_piece: CatalogModel.ProductStockPriceV3(),

      article_assignment: CatalogModel.ArticleAssignmentV3(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),

      item_type: Joi.string().allow(""),
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

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(
        CatalogModel.ProductSizeSellerFilterSchemaV3()
      ),
    });
  }
}
module.exports = CatalogModel;
