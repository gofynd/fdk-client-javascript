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

  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      alt: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      meta: CatalogModel.Meta(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      description: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      uid: Joi.number(),
    });
  }

  static Price() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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
      title: Joi.any(),

      description: Joi.any(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
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

  static ProductDetail() {
    return Joi.object({
      highlights: Joi.array().items(Joi.string().allow("")),

      similars: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      tags: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      price: CatalogModel.ProductListingPrice(),

      item_type: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      discount: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.ApplicationItemSEO(),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      medias: Joi.array().items(CatalogModel.Media()),

      rating: Joi.number(),

      moq: CatalogModel.ApplicationItemMOQ(),

      type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      color: Joi.string().allow(""),

      rating_count: Joi.number(),

      short_description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      teaser_tag: Joi.string().allow(""),
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

  static ProductSize() {
    return Joi.object({
      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      value: Joi.string().allow(""),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

      is_available: Joi.boolean(),
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
      col_3: CatalogModel.ColumnHeader(),

      col_2: CatalogModel.ColumnHeader(),

      col_6: CatalogModel.ColumnHeader(),

      col_5: CatalogModel.ColumnHeader(),

      col_4: CatalogModel.ColumnHeader(),

      col_1: CatalogModel.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_3: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_5: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_1: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      image: Joi.string().allow(""),

      headers: CatalogModel.ColumnHeaders(),

      sizes: Joi.array().items(CatalogModel.SizeChartValues()),

      size_tip: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static ProductSizes() {
    return Joi.object({
      price: CatalogModel.ProductListingPrice(),

      multi_size: Joi.boolean(),

      discount: Joi.string().allow(""),

      stores: CatalogModel.ProductSizeStores(),

      sizes: Joi.array().items(CatalogModel.ProductSize()),

      size_chart: CatalogModel.SizeChart(),

      sellable: Joi.boolean(),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),
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
      title: Joi.string().allow(""),

      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),

      subtitle: Joi.string().allow(""),

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
      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      color: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      value: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      medias: Joi.array().items(CatalogModel.Media()),

      name: Joi.string().allow(""),

      is_available: Joi.boolean(),

      color_name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      display_type: Joi.string().allow(""),

      key: Joi.string().allow(""),

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

  static ProductStockPrice() {
    return Joi.object({
      effective: Joi.number(),

      currency: Joi.string().allow(""),

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
      code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      company: CatalogModel.CompanyDetail(),

      price: CatalogModel.ProductStockPrice(),

      seller: CatalogModel.Seller(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.any(),

      store: CatalogModel.StoreDetail(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),
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
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      min: Joi.number(),

      value: Joi.string().allow(""),

      max: Joi.number(),

      display: Joi.string().allow("").required(),

      count: Joi.number(),

      is_selected: Joi.boolean().required(),

      selected_max: Joi.number(),

      query_format: Joi.string().allow(""),

      selected_min: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

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

  static ProductVariantListingResponse() {
    return Joi.object({
      header: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),

      total: Joi.number(),

      display_type: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      highlights: Joi.array().items(Joi.string().allow("")),

      identifiers: Joi.array().items(Joi.string().allow("")),

      similars: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),

      tags: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CatalogModel.ProductBrand()),

      price: CatalogModel.ProductListingPrice(),

      item_type: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      discount: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.ApplicationItemSEO(),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      medias: Joi.array().items(CatalogModel.Media()),

      rating: Joi.number(),

      moq: CatalogModel.ApplicationItemMOQ(),

      type: Joi.string().allow(""),

      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),

      sellable: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      color: Joi.string().allow(""),

      rating_count: Joi.number(),

      short_description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      teaser_tag: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),
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
      portrait: CatalogModel.Media(),

      landscape: CatalogModel.Media(),
    });
  }

  static BrandItem() {
    return Joi.object({
      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

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
      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      uid: Joi.number(),
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
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.Child()),

      slug: Joi.string().allow(""),

      action: CatalogModel.ProductListingAction(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.CategoryItems()),

      department: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

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
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

      logo: CatalogModel.Media(),

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

      action: CatalogModel.ProductListingAction(),

      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),

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
      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.ProductListingAction(),

      priority: Joi.number(),

      allow_sort: Joi.boolean(),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      logo: CatalogModel.Media(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
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
      banners: CatalogModel.ImageUrls(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      priority: Joi.number(),

      allow_sort: Joi.boolean(),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      logo: CatalogModel.Media(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),
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
      store_email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pincode: Joi.number(),

      address: Joi.string().allow(""),

      city: Joi.string().allow(""),

      lat_long: CatalogModel.LatLong(),

      country: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.Store()).required(),
    });
  }

  static CompanyStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static StoreDepartments() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

      logo: Joi.string().allow(""),

      uid: Joi.number(),
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
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber(),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static AppStore() {
    return Joi.object({
      company: CatalogModel.CompanyStore(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      manager: CatalogModel.StoreManagerSerializer(),

      name: Joi.string().allow(""),

      address: CatalogModel.StoreAddressSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      uid: Joi.number(),
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
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static StoreTiming() {
    return Joi.object({
      open: Joi.boolean(),

      weekday: Joi.string().allow(""),

      closing: CatalogModel.Time(),

      opening: CatalogModel.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      company: CatalogModel.CompanyStore(),

      _custom_json: Joi.any(),

      departments: Joi.array().items(CatalogModel.StoreDepartments()),

      timing: Joi.array().items(CatalogModel.StoreTiming()),

      manager: CatalogModel.StoreManagerSerializer(),

      name: Joi.string().allow(""),

      address: CatalogModel.StoreAddressSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      uid: Joi.number(),
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
      highlights: Joi.array().items(Joi.any()),

      out_of_stock: Joi.boolean(),

      identifier: Joi.any(),

      template_tag: Joi.any(),

      image_nature: Joi.any(),

      images: Joi.array().items(Joi.any()),

      media: Joi.array().items(Joi.any()),

      slug: Joi.any(),

      item_code: Joi.any(),

      name: Joi.any(),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      description: Joi.any(),

      rating: Joi.number(),

      grouped_attributes: Joi.any(),

      is_set: Joi.boolean(),

      hsn_code: Joi.number(),

      brand_uid: Joi.number(),

      country_of_origin: Joi.any(),

      rating_count: Joi.number(),

      short_description: Joi.any(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_marked: Joi.number(),

      min_effective: Joi.number(),

      max_effective: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      value: Joi.any(),

      display: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      product_details: CatalogModel.ProductDetails(),

      price: CatalogModel.ProductGroupPrice(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number().required(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      company_id: Joi.number(),

      created_on: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      _id: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),

      slug: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      choice: Joi.any(),

      name: Joi.any().required(),

      meta: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.any()),

      modified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }

  static ReturnConfigSchemaV2() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static ProductStockPriceV2() {
    return Joi.object({
      effective: Joi.number(),

      currency: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static SellerV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static StrategyWiseListingSchemaV2() {
    return Joi.object({
      distance: Joi.number(),

      tat: Joi.number(),

      pincode: Joi.number(),

      quantity: Joi.number(),
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

  static ProductSetDistributionSizeV2() {
    return Joi.object({
      pieces: Joi.number(),

      size: Joi.string().allow(""),
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

  static SellerGroupAttributes() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.DetailsSchemaV2()),
    });
  }

  static ArticleAssignmentV2() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static StoreV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static ProductStockUnitPriceV2() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      price: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV2() {
    return Joi.object({
      return_config: CatalogModel.ReturnConfigSchemaV2(),

      quantity: Joi.number(),

      seller_count: Joi.number(),

      pincode: Joi.number(),

      special_badge: Joi.string().allow(""),

      price: CatalogModel.ProductStockPriceV2(),

      seller: CatalogModel.SellerV2(),

      item_type: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV2()
      ),

      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV2()
      ),

      price_per_piece: CatalogModel.ProductStockPriceV2(),

      set: CatalogModel.ProductSetV2(),

      article_id: Joi.string().allow(""),

      long_lat: Joi.array().items(Joi.number()),

      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),

      article_assignment: CatalogModel.ArticleAssignmentV2(),

      store: CatalogModel.StoreV2(),

      price_per_unit: CatalogModel.ProductStockUnitPriceV2(),
    });
  }

  static ProductSizeSellerFilterSchemaV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),
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
