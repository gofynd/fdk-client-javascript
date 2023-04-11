const Joi = require("joi");

class CatalogModel {
  static ProductListingActionPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      params: Joi.any(),

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

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      alt: Joi.string().allow(""),
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

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.any(),

      description: Joi.any(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
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

  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static Price() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      max: Joi.number(),

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

  static ProductCategoryMap() {
    return Joi.object({
      l3: CatalogModel.ProductBrand(),

      l2: CatalogModel.ProductBrand(),

      l1: CatalogModel.ProductBrand(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      medias: Joi.array().items(CatalogModel.Media()),

      similars: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      rating_count: Joi.number(),

      net_quantity: CatalogModel.NetQuantity(),

      product_online_date: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      color: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      discount: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      highlights: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      teaser_tag: Joi.string().allow(""),

      rating: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      image_nature: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      slug: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      type: Joi.string().allow(""),
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

  static SizeChartValues() {
    return Joi.object({
      col_1: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_2: Joi.string().allow(""),
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

      col_6: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChart() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      description: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      image: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      title: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static Dimension() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      width: Joi.number().required(),

      height: Joi.number().required(),
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
      display: Joi.string().allow(""),

      is_available: Joi.boolean(),

      dimension: CatalogModel.Dimension(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      weight: CatalogModel.Weight(),

      quantity: Joi.number(),

      value: Joi.string().allow(""),
    });
  }

  static ProductSizes() {
    return Joi.object({
      price: CatalogModel.ProductListingPrice(),

      sellable: Joi.boolean(),

      stores: CatalogModel.ProductSizeStores(),

      size_chart: CatalogModel.SizeChart(),

      discount: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      display: Joi.string().allow(""),

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

      title: Joi.string().allow(""),

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
      uid: Joi.number(),

      color_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      is_available: Joi.boolean(),

      medias: Joi.array().items(CatalogModel.Media()),

      color: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      value: Joi.string().allow(""),
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

  static CompanyDetail() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static Seller() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      id: Joi.number(),

      city: Joi.string().allow(""),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      uid: Joi.string().allow(""),

      company: CatalogModel.CompanyDetail(),

      size: Joi.string().allow(""),

      item_id: Joi.number(),

      price: CatalogModel.ProductStockPrice(),

      seller: CatalogModel.Seller(),

      identifier: Joi.any(),

      store: CatalogModel.StoreDetail(),

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
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductStockStatusItem()),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),

      key: Joi.string().allow(""),

      total: Joi.number(),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      sellable: Joi.boolean(),

      medias: Joi.array().items(CatalogModel.Media()),

      similars: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      seo: CatalogModel.ApplicationItemSEO(),

      rating_count: Joi.number(),

      net_quantity: CatalogModel.NetQuantity(),

      product_online_date: Joi.string().allow(""),

      moq: CatalogModel.ApplicationItemMOQ(),

      color: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      discount: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      highlights: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      teaser_tag: Joi.string().allow(""),

      rating: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      image_nature: Joi.string().allow(""),

      category_map: CatalogModel.ProductCategoryMap(),

      slug: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      identifiers: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      type: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      max: Joi.number(),

      is_selected: Joi.boolean().required(),

      query_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      display_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      value: Joi.string().allow(""),

      selected_min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      count: Joi.number(),

      min: Joi.number(),
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

  static ProductFilters() {
    return Joi.object({
      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),

      key: CatalogModel.ProductFiltersKey().required(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

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
      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      departments: Joi.array().items(Joi.string().allow("")),

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
      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),
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

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number().required(),

      banners: CatalogModel.CategoryBanner().required(),

      name: Joi.string().allow("").required(),

      action: CatalogModel.ProductListingAction().required(),

      slug: Joi.string().allow("").required(),

      childs: Joi.array().items(CatalogModel.Child()),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      department: Joi.string().allow("").required(),

      items: Joi.array().items(CatalogModel.CategoryItems()),
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
      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),
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

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

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

      logo: CatalogModel.Media(),

      type: Joi.string().allow(""),

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
      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      badge: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      _schedule: Joi.any(),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      priority: Joi.number(),

      uid: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      sort_on: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
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
      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      badge: Joi.any(),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      _schedule: Joi.any(),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      priority: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      sort_on: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
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
      city: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      store_email: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static CompanyStore() {
    return Joi.object({
      uid: Joi.number(),

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),
    });
  }

  static StoreManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber(),

      name: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      uid: Joi.number(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      company: CatalogModel.CompanyStore(),

      name: Joi.string().allow(""),

      manager: CatalogModel.StoreManagerSerializer(),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),
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
      weekday: Joi.string().allow(""),

      closing: CatalogModel.Time(),

      open: Joi.boolean(),

      opening: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      uid: Joi.number(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      company: CatalogModel.CompanyStore(),

      name: Joi.string().allow(""),

      manager: CatalogModel.StoreManagerSerializer(),

      address: CatalogModel.StoreAddressSerializer(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      _custom_json: Joi.any(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      description: Joi.any(),

      name: Joi.any(),

      country_of_origin: Joi.any(),

      brand_uid: Joi.number(),

      item_code: Joi.any(),

      template_tag: Joi.any(),

      rating_count: Joi.number(),

      grouped_attributes: Joi.any(),

      identifier: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      has_variant: Joi.boolean(),

      hsn_code: Joi.number(),

      media: Joi.array().items(Joi.any()),

      rating: Joi.number(),

      image_nature: Joi.any(),

      is_set: Joi.boolean(),

      slug: Joi.any(),

      images: Joi.array().items(Joi.any()),

      out_of_stock: Joi.boolean(),

      attributes: Joi.any(),

      short_description: Joi.any(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      currency: Joi.any(),

      min_effective: Joi.number(),

      max_effective: Joi.number(),

      min_marked: Joi.number(),

      max_marked: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      display: Joi.any(),

      quantity: Joi.number(),

      value: Joi.any(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      product_details: CatalogModel.ProductDetails(),

      price: CatalogModel.ProductGroupPrice(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_uid: Joi.number().required(),
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

  static ProductGroupingModel() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.any()),

      choice: Joi.any(),

      verified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      company_id: Joi.number(),

      name: Joi.any().required(),

      _id: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").required(),

      slug: Joi.any(),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      same_store_assignment: Joi.boolean(),

      created_by: CatalogModel.UserDetail(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
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
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
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

  static ProductStockPriceV2() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
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

  static StrategyWiseListingSchemaV2() {
    return Joi.object({
      tat: Joi.number(),

      pincode: Joi.number(),

      quantity: Joi.number(),

      distance: Joi.number(),
    });
  }

  static ProductStockUnitPriceV2() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      price: Joi.number(),

      unit: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static MarketPlaceSttributesSchemaV2() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),
    });
  }

  static StoreV2() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ReturnConfigSchemaV2() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static ProductSizePriceResponseV2() {
    return Joi.object({
      article_assignment: CatalogModel.ArticleAssignmentV2(),

      seller: CatalogModel.SellerV2(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

      quantity: Joi.number(),

      set: CatalogModel.ProductSetV2(),

      price_per_piece: CatalogModel.ProductStockPriceV2(),

      discount: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV2()
      ),

      item_type: Joi.string().allow(""),

      seller_count: Joi.number(),

      price: CatalogModel.ProductStockPriceV2(),

      article_id: Joi.string().allow(""),

      price_per_unit: CatalogModel.ProductStockUnitPriceV2(),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV2()
      ),

      special_badge: Joi.string().allow(""),

      store: CatalogModel.StoreV2(),

      pincode: Joi.number(),

      long_lat: Joi.array().items(Joi.number()),

      return_config: CatalogModel.ReturnConfigSchemaV2(),
    });
  }

  static ProductSizeSellerFilterSchemaV2() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

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
