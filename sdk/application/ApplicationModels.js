const Joi = require("joi");

class Validator {
  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static Price() {
    return Joi.object({
      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      effective: this.Price(),

      marked: this.Price(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static ProductListingActionPage() {
    return Joi.object({
      query: Joi.any(),

      params: Joi.any(),

      type: Joi.string().allow(""),
    });
  }

  static ProductListingAction() {
    return Joi.object({
      page: this.ProductListingActionPage(),

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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      alt: Joi.string().allow(""),

      meta: this.Meta(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      description: Joi.string().allow(""),

      action: this.ProductListingAction(),

      logo: this.Media(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l2: this.ProductBrand(),

      l3: this.ProductBrand(),

      l1: this.ProductBrand(),
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
      title: Joi.string().allow(""),

      details: Joi.array().items(this.ProductDetailAttribute()),
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
      is_dependent: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      seo: this.ApplicationItemSEO(),

      teaser_tag: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      price: this.ProductListingPrice(),

      net_quantity: this.NetQuantity(),

      moq: this.ApplicationItemMOQ(),

      attributes: Joi.any(),

      color: Joi.string().allow(""),

      type: Joi.string().allow(""),

      category_map: this.ProductCategoryMap(),

      short_description: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      action: this.ProductListingAction(),

      product_online_date: Joi.string().allow(""),

      rating_count: Joi.number(),

      medias: Joi.array().items(this.Media()),

      brand: this.ProductBrand(),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      rating: Joi.number(),

      description: Joi.string().allow(""),

      categories: Joi.array().items(this.ProductBrand()),

      _custom_meta: Joi.array().items(this.CustomMetaFields()),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      discount: Joi.string().allow(""),
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

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static Weight() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      value: Joi.string().allow(""),

      dimension: this.Dimension(),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      weight: this.Weight(),
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
      col_5: this.ColumnHeader(),

      col_1: this.ColumnHeader(),

      col_6: this.ColumnHeader(),

      col_3: this.ColumnHeader(),

      col_4: this.ColumnHeader(),

      col_2: this.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_5: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_6: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_2: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      description: Joi.string().allow(""),

      headers: this.ColumnHeaders(),

      image: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      title: Joi.string().allow(""),

      sizes: Joi.array().items(this.SizeChartValues()),
    });
  }

  static ProductSizes() {
    return Joi.object({
      discount: Joi.string().allow(""),

      price: this.ProductListingPrice(),

      sellable: Joi.boolean(),

      sizes: Joi.array().items(this.ProductSize()),

      multi_size: Joi.boolean(),

      stores: this.ProductSizeStores(),

      size_chart: this.SizeChart(),
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
      title: Joi.string().allow(""),

      details: Joi.array().items(this.AttributeDetail()),
    });
  }

  static ProductsComparisonResponse() {
    return Joi.object({
      attributes_metadata: Joi.array().items(this.AttributeMetadata()),

      items: Joi.array().items(this.ProductDetail()),
    });
  }

  static ProductCompareResponse() {
    return Joi.object({
      attributes_metadata: Joi.array().items(this.AttributeMetadata()),

      items: Joi.array().items(this.ProductDetail()),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),
    });
  }

  static ProductFrequentlyComparedSimilarResponse() {
    return Joi.object({
      similars: this.ProductCompareResponse(),
    });
  }

  static ProductVariantItemResponse() {
    return Joi.object({
      medias: Joi.array().items(this.Media()),

      is_available: Joi.boolean(),

      value: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: this.ProductListingAction(),

      _custom_meta: Joi.array().items(this.CustomMetaFields()),

      color_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      color: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      header: Joi.string().allow(""),

      items: Joi.array().items(this.ProductVariantItemResponse()),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(this.ProductVariantResponse()),
    });
  }

  static ProductStockPrice() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

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
      code: Joi.string().allow(""),

      id: Joi.number(),

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
      quantity: Joi.number(),

      item_id: Joi.number(),

      price: this.ProductStockPrice(),

      seller: this.Seller(),

      store: this.StoreDetail(),

      identifier: Joi.any(),

      uid: Joi.string().allow(""),

      company: this.CompanyDetail(),

      size: Joi.string().allow(""),
    });
  }

  static ProductStockStatusResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductStockStatusItem()),
    });
  }

  static ProductStockPolling() {
    return Joi.object({
      items: Joi.array().items(this.ProductStockStatusItem()),

      page: this.Page().required(),
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
      total: Joi.number(),

      key: Joi.string().allow(""),

      header: Joi.string().allow(""),

      display_type: Joi.string().allow(""),

      items: Joi.array().items(this.ProductVariantItemResponse()),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      is_dependent: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      variants: Joi.array().items(this.ProductVariantListingResponse()),

      _custom_json: Joi.any(),

      seo: this.ApplicationItemSEO(),

      teaser_tag: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      price: this.ProductListingPrice(),

      net_quantity: this.NetQuantity(),

      moq: this.ApplicationItemMOQ(),

      sellable: Joi.boolean(),

      attributes: Joi.any(),

      color: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      category_map: this.ProductCategoryMap(),

      short_description: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      action: this.ProductListingAction(),

      product_online_date: Joi.string().allow(""),

      rating_count: Joi.number(),

      medias: Joi.array().items(this.Media()),

      brand: this.ProductBrand(),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      rating: Joi.number(),

      description: Joi.string().allow(""),

      categories: Joi.array().items(this.ProductBrand()),

      _custom_meta: Joi.array().items(this.CustomMetaFields()),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      discount: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      count: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      selected_min: Joi.number(),

      min: Joi.number(),

      selected_max: Joi.number(),

      display_format: Joi.string().allow(""),

      max: Joi.number(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      key: this.ProductFiltersKey().required(),

      values: Joi.array().items(this.ProductFiltersValue()).required(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      sort_on: Joi.array().items(this.ProductSortOn()),

      page: this.Page().required(),

      items: Joi.array().items(this.ProductListingDetail()),

      filters: Joi.array().items(this.ProductFilters()),
    });
  }

  static ImageUrls() {
    return Joi.object({
      landscape: this.Media(),

      portrait: this.Media(),
    });
  }

  static BrandItem() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      banners: this.ImageUrls(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      action: this.ProductListingAction(),

      logo: this.Media(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      discount: Joi.string().allow(""),
    });
  }

  static BrandListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.BrandItem()),

      page: this.Page().required(),
    });
  }

  static BrandDetailResponse() {
    return Joi.object({
      banners: this.ImageUrls(),

      description: Joi.string().allow(""),

      logo: this.Media(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),
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
      landscape: this.Media().required(),

      portrait: this.Media().required(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      banners: this.ImageUrls(),

      slug: Joi.string().allow(""),

      action: this.ProductListingAction(),

      childs: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      banners: this.ImageUrls(),

      slug: Joi.string().allow(""),

      action: this.ProductListingAction(),

      childs: Joi.array().items(this.ThirdLevelChild()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),
    });
  }

  static Child() {
    return Joi.object({
      banners: this.ImageUrls(),

      slug: Joi.string().allow(""),

      action: this.ProductListingAction(),

      childs: Joi.array().items(this.SecondLevelChild()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: this.CategoryBanner().required(),

      slug: Joi.string().allow("").required(),

      action: this.ProductListingAction().required(),

      childs: Joi.array().items(this.Child()),

      name: Joi.string().allow("").required(),

      uid: Joi.number().required(),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      items: Joi.array().items(this.CategoryItems()),

      department: Joi.string().allow("").required(),
    });
  }

  static CategoryListingResponse() {
    return Joi.object({
      departments: Joi.array().items(this.DepartmentIdentifier()),

      data: Joi.array().items(this.DepartmentCategoryTree()),
    });
  }

  static CategoryMetaResponse() {
    return Joi.object({
      banners: this.ImageUrls(),

      logo: this.Media(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      items: Joi.array().items(this.ProductListingDetail()),

      page: this.Page().required(),
    });
  }

  static Department() {
    return Joi.object({
      priority_order: Joi.number(),

      slug: Joi.string().allow(""),

      logo: this.Media(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(this.Department()),
    });
  }

  static AutocompleteItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      display: Joi.string().allow(""),

      action: this.ProductListingAction(),

      logo: this.Media(),

      _custom_json: Joi.any(),
    });
  }

  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(this.AutocompleteItem()),
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
      query: Joi.array().items(this.CollectionQuery()),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      _schedule: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      priority: Joi.number(),

      banners: this.ImageUrls(),

      allow_sort: Joi.boolean(),

      badge: Joi.any(),

      type: Joi.string().allow(""),

      action: this.ProductListingAction(),

      logo: this.Media(),

      allow_facets: Joi.boolean(),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),
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
      type: Joi.array().items(this.CollectionListingFilterType()),

      tags: Joi.array().items(this.CollectionListingFilterTag()),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.GetCollectionDetailNest()),

      page: this.Page().required(),

      filters: this.CollectionListingFilter(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      query: Joi.array().items(this.CollectionQuery()),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      _schedule: Joi.any(),

      is_active: Joi.boolean(),

      priority: Joi.number(),

      banners: this.ImageUrls(),

      allow_sort: Joi.boolean(),

      badge: Joi.any(),

      type: Joi.string().allow(""),

      logo: this.Media(),

      allow_facets: Joi.boolean(),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetFollowListingResponse() {
    return Joi.object({
      page: this.Page().required(),

      items: Joi.array().items(this.ProductListingDetail()).required(),
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
      data: this.FollowIdsData(),
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

      uid: Joi.number(),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      lat_long: this.LatLong(),

      city: Joi.string().allow(""),

      store_email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.Store()).required(),

      page: this.Page().required(),
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
      email: Joi.string().allow(""),

      mobile_no: this.SellerPhoneNumber(),

      name: Joi.string().allow(""),
    });
  }

  static StoreDepartments() {
    return Joi.object({
      priority_order: Joi.number(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      pincode: Joi.number(),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),
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

  static AppStore() {
    return Joi.object({
      manager: this.StoreManagerSerializer(),

      contact_numbers: Joi.array().items(this.SellerPhoneNumber()),

      departments: Joi.array().items(this.StoreDepartments()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      address: this.StoreAddressSerializer(),

      company: this.CompanyStore(),
    });
  }

  static ApplicationStoreListing() {
    return Joi.object({
      items: Joi.array().items(this.AppStore()),

      page: this.Page(),

      filters: Joi.array().items(this.StoreDepartments()),
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

      closing: this.Time(),

      open: Joi.boolean(),

      opening: this.Time(),
    });
  }

  static StoreDetails() {
    return Joi.object({
      manager: this.StoreManagerSerializer(),

      contact_numbers: Joi.array().items(this.SellerPhoneNumber()),

      departments: Joi.array().items(this.StoreDepartments()),

      timing: Joi.array().items(this.StoreTiming()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      address: this.StoreAddressSerializer(),

      _custom_json: Joi.any(),

      company: this.CompanyStore(),
    });
  }

  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      max_effective: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      currency: Joi.any(),

      min_marked: Joi.number(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      is_set: Joi.boolean(),

      image_nature: Joi.any(),

      highlights: Joi.array().items(Joi.any()),

      slug: Joi.any(),

      template_tag: Joi.any(),

      country_of_origin: Joi.any(),

      brand_uid: Joi.number(),

      has_variant: Joi.boolean(),

      media: Joi.array().items(Joi.any()),

      hsn_code: Joi.number(),

      attributes: Joi.any(),

      short_description: Joi.any(),

      out_of_stock: Joi.boolean(),

      rating_count: Joi.number(),

      identifier: Joi.any(),

      images: Joi.array().items(Joi.any()),

      grouped_attributes: Joi.any(),

      description: Joi.any(),

      rating: Joi.number(),

      item_code: Joi.any(),

      name: Joi.any(),
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

  static ProductInGroup() {
    return Joi.object({
      min_quantity: Joi.number(),

      price: this.ProductGroupPrice(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      product_details: this.ProductDetails(),

      auto_select: Joi.boolean(),

      max_quantity: Joi.number().required(),

      sizes: Joi.array().items(this.Size()),

      product_uid: Joi.number().required(),
    });
  }

  static ProductGroupingModel() {
    return Joi.object({
      verified_by: this.UserDetail(),

      company_id: Joi.number(),

      meta: Joi.any(),

      verified_on: Joi.string().allow(""),

      products: Joi.array().items(this.ProductInGroup()).required(),

      modified_on: Joi.string().allow("").required(),

      slug: Joi.any(),

      page_visibility: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      modified_by: this.UserDetail(),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.any(),

      name: Joi.any().required(),

      _id: Joi.any(),

      created_by: this.UserDetail(),

      is_active: Joi.boolean(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(this.ProductGroupingModel()),
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
      sizes: Joi.array().items(this.ProductSetDistributionSizeV2()),
    });
  }

  static ProductSetV2() {
    return Joi.object({
      size_distribution: this.ProductSetDistributionV2(),

      quantity: Joi.number(),
    });
  }

  static ProductStockPriceV2() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static ReturnConfigSchemaV2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static ProductStockUnitPriceV2() {
    return Joi.object({
      price: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

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

  static MarketPlaceSttributesSchemaV2() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(this.DetailsSchemaV2()),
    });
  }

  static StrategyWiseListingSchemaV2() {
    return Joi.object({
      tat: Joi.number(),

      distance: Joi.number(),

      pincode: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static SellerV2() {
    return Joi.object({
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(this.DetailsSchemaV2()),
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
      uid: Joi.number(),

      count: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV3() {
    return Joi.object({
      long_lat: Joi.array().items(Joi.number()),

      special_badge: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      set: this.ProductSetV2(),

      price_per_piece: this.ProductStockPriceV2(),

      return_config: this.ReturnConfigSchemaV2(),

      quantity: Joi.number(),

      price: this.ProductStockPriceV2(),

      price_per_unit: this.ProductStockUnitPriceV2(),

      is_gift: Joi.boolean(),

      marketplace_attributes: Joi.array().items(
        this.MarketPlaceSttributesSchemaV2()
      ),

      strategy_wise_listing: Joi.array().items(
        this.StrategyWiseListingSchemaV2()
      ),

      seller_count: Joi.number(),

      seller: this.SellerV2(),

      pincode: Joi.number(),

      grouped_attributes: Joi.array().items(this.SellerGroupAttributes()),

      article_assignment: this.ArticleAssignmentV2(),

      store: this.StoreV2(),

      article_id: Joi.string().allow(""),

      is_cod: Joi.boolean(),

      is_serviceable: Joi.boolean(),

      discount: Joi.string().allow(""),
    });
  }

  static ProductSizeSellerFilterSchemaV2() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static ProductSizePriceResponseV2() {
    return Joi.object({
      long_lat: Joi.array().items(Joi.number()),

      special_badge: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      set: this.ProductSetV2(),

      price_per_piece: this.ProductStockPriceV2(),

      return_config: this.ReturnConfigSchemaV2(),

      quantity: Joi.number(),

      price: this.ProductStockPriceV2(),

      price_per_unit: this.ProductStockUnitPriceV2(),

      is_gift: Joi.boolean(),

      marketplace_attributes: Joi.array().items(
        this.MarketPlaceSttributesSchemaV2()
      ),

      strategy_wise_listing: Joi.array().items(
        this.StrategyWiseListingSchemaV2()
      ),

      seller_count: Joi.number(),

      seller: this.SellerV2(),

      pincode: Joi.number(),

      grouped_attributes: Joi.array().items(this.SellerGroupAttributes()),

      article_assignment: this.ArticleAssignmentV2(),

      store: this.StoreV2(),

      article_id: Joi.string().allow(""),

      is_cod: Joi.boolean(),

      discount: Joi.string().allow(""),
    });
  }

  static ProductSizeSellersResponseV3() {
    return Joi.object({
      sort_on: Joi.array().items(this.ProductSizeSellerFilterSchemaV2()),

      page: this.Page().required(),

      items: Joi.array().items(this.ProductSizePriceResponseV2()),
    });
  }

  static RawBreakup() {
    return Joi.object({
      vog: Joi.number(),

      gst_charges: Joi.number(),

      total: Joi.number(),

      mrp_total: Joi.number(),

      subtotal: Joi.number(),

      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      delivery_charge: Joi.number(),

      discount: Joi.number(),

      you_saved: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      applicable: Joi.number(),

      description: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      type: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      uid: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      message: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: this.RawBreakup(),

      loyalty_points: this.LoyaltyPoints(),

      display: Joi.array().items(this.DisplayBreakup()),

      coupon: this.CouponBreakup(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static PromiseTimestamp() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static PromiseFormatted() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static ShipmentPromise() {
    return Joi.object({
      timestamp: this.PromiseTimestamp(),

      formatted: this.PromiseFormatted(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      selling: Joi.number(),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: this.ProductPrice(),

      base: this.ProductPrice(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: this.FreeGiftItem(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),

      raw_offer: Joi.any(),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      applied_free_articles: Joi.array().items(this.AppliedFreeArticles()),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      discount_rules: Joi.array().items(this.DiscountRulesApp()),

      buy_rules: Joi.array().items(this.BuyRules()),

      promotion_name: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      article_quantity: Joi.number(),

      ownership: this.Ownership(),

      offer_text: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      converted: this.BasePrice(),

      base: this.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      store: this.BaseInfo(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      seller: this.BaseInfo(),

      parent_item_identifiers: Joi.any(),

      price: this.ArticlePriceInfo(),
    });
  }

  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      query: this.ActionQuery(),
    });
  }

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      type: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      action: this.ProductAction(),

      images: Joi.array().items(this.ProductImage()),

      name: Joi.string().allow(""),

      categories: Joi.array().items(this.CategoryInfo()),

      brand: this.BaseInfo(),

      net_quantity: this.NetQuantity(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      availability: this.ProductAvailability(),

      price_per_unit: this.ProductPriceInfo(),

      is_set: Joi.boolean(),

      message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(this.AppliedPromotion()),

      bulk_offer: Joi.any(),

      identifiers: this.CartProductIdentifer().required(),

      quantity: Joi.number(),

      promo_meta: this.PromoMeta(),

      article: this.ProductArticle(),

      key: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      price: this.ProductPriceInfo(),

      discount: Joi.string().allow(""),

      product: this.CartProduct(),

      coupon_message: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      breakup_values: this.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: this.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      delivery_promise: this.ShipmentPromise(),

      currency: this.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(this.CartProductInfo()),

      checkout_mode: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      display: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      store_id: Joi.number(),

      _custom_json: Joi.any(),

      seller_id: Joi.number(),

      article_assignment: Joi.any(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      pos: Joi.boolean(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      new_cart: Joi.boolean(),

      items: Joi.array().items(this.AddProductCart()),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      cart: this.CartDetailResponse(),

      partial: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      extra_meta: Joi.any(),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      identifiers: this.CartProductIdentifer().required(),

      quantity: Joi.number(),

      item_index: Joi.number(),

      parent_item_identifiers: Joi.any(),
    });
  }

  static UpdateCartRequest() {
    return Joi.object({
      operation: Joi.string().allow("").required(),

      items: Joi.array().items(this.UpdateProductCart()),
    });
  }

  static UpdateCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      cart: this.CartDetailResponse(),

      success: Joi.boolean(),
    });
  }

  static DeleteCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total: Joi.number(),

      current: Joi.number(),

      has_previous: Joi.boolean(),

      total_item_count: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      is_applied: Joi.boolean(),

      description: Joi.string().allow("").allow(null),

      is_applicable: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      message: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      title: Joi.string().allow(""),

      coupon_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),
    });
  }

  static GetCouponResponse() {
    return Joi.object({
      page: this.PageCoupon(),

      available_coupon_list: Joi.array().items(this.Coupon()),
    });
  }

  static ApplyCouponRequest() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),
    });
  }

  static OfferSeller() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static OfferPrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      bulk_effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      best: Joi.boolean(),

      total: Joi.number(),

      quantity: Joi.number(),

      margin: Joi.number(),

      auto_applied: Joi.boolean(),

      price: this.OfferPrice(),
    });
  }

  static BulkPriceOffer() {
    return Joi.object({
      seller: this.OfferSeller(),

      offers: Joi.array().items(this.OfferItem()),
    });
  }

  static BulkPriceResponse() {
    return Joi.object({
      data: Joi.array().items(this.BulkPriceOffer()),
    });
  }

  static RewardPointRequest() {
    return Joi.object({
      points: Joi.boolean().required(),
    });
  }

  static GeoLocation() {
    return Joi.object({
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      country_phone_code: Joi.string().allow(""),

      meta: Joi.any(),

      landmark: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      is_active: Joi.boolean(),

      user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      area: Joi.string().allow(""),

      geo_location: this.GeoLocation(),

      google_map_point: Joi.any(),

      area_code_slug: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      email: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
    });
  }

  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(this.Address()),
    });
  }

  static SaveAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      success: Joi.boolean(),

      is_default_address: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      is_updated: Joi.boolean(),

      success: Joi.boolean(),

      is_default_address: Joi.boolean(),
    });
  }

  static DeleteAddressResponse() {
    return Joi.object({
      is_deleted: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static SelectCartAddressRequest() {
    return Joi.object({
      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      valid: Joi.boolean(),

      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      message: Joi.string().allow(""),

      coupon_validity: this.CouponValidity(),

      success: Joi.boolean().required(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      order_type: Joi.string().allow(""),

      shipments: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      promise: this.ShipmentPromise(),

      items: Joi.array().items(this.CartProductInfo()),

      shipment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      fulfillment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      breakup_values: this.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      shipments: Joi.array().items(this.ShipmentResponse()),

      payment_selection_lock: this.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      error: Joi.boolean(),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      delivery_promise: this.ShipmentPromise(),

      currency: this.CartCurrency(),

      cart_id: Joi.number(),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutCustomMeta() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      callback_url: Joi.string().allow("").allow(null),

      extra_meta: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      billing_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      staff: this.StaffCheckout(),

      ordering_store: Joi.number().allow(null),

      meta: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      payment_mode: Joi.string().allow("").required(),

      custom_meta: Joi.array().items(this.CartCheckoutCustomMeta()),

      payment_params: Joi.any().allow(null),

      delivery_address: Joi.any(),

      address_id: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      is_valid: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(this.CartProductInfo()),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      delivery_promise: this.ShipmentPromise(),

      currency: this.CartCurrency(),

      cart_id: Joi.number(),

      store_code: Joi.string().allow(""),

      cod_charges: Joi.number(),

      error_message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      payment_selection_lock: this.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      success: Joi.boolean(),

      uid: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_charges: Joi.number(),

      cod_message: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      cod_available: Joi.boolean(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      cart: this.CheckCart(),

      callback_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      data: Joi.any(),

      app_intercept_url: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),
    });
  }

  static CartMetaResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartMetaMissingResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetShareCartLinkRequest() {
    return Joi.object({
      id: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static GetShareCartLinkResponse() {
    return Joi.object({
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      meta: Joi.any(),

      token: Joi.string().allow(""),

      user: Joi.any(),

      created_on: Joi.string().allow(""),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      is_valid: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      shared_cart_details: this.SharedCartDetails(),

      items: Joi.array().items(this.CartProductInfo()),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      delivery_promise: this.ShipmentPromise(),

      currency: this.CartCurrency(),

      cart_id: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      payment_selection_lock: this.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),
    });
  }

  static SharedCartResponse() {
    return Joi.object({
      cart: this.SharedCart(),

      error: Joi.string().allow(""),
    });
  }

  static FreeGiftItems() {
    return Joi.object({
      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      discount_rules: Joi.array().items(Joi.any()),

      buy_rules: Joi.any(),

      valid_till: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      free_gift_items: Joi.array().items(this.FreeGiftItems()),

      offer_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static PromotionOffersResponse() {
    return Joi.object({
      available_promotions: Joi.array().items(this.PromotionOffer()),
    });
  }

  static OperationErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static CurrencyInfo() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static LadderPrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      offer_price: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      max_quantity: Joi.number(),

      margin: Joi.number(),

      min_quantity: Joi.number(),

      price: this.LadderPrice(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      discount_rules: Joi.array().items(Joi.any()),

      calculate_on: Joi.string().allow(""),

      buy_rules: Joi.any(),

      valid_till: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      free_gift_items: Joi.array().items(this.FreeGiftItems()),

      offer_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      offer_prices: Joi.array().items(this.LadderOfferItem()),
    });
  }

  static LadderPriceOffers() {
    return Joi.object({
      currency: this.CurrencyInfo(),

      available_offers: Joi.array().items(this.LadderPriceOffer()),
    });
  }

  static ApplicationResponse() {
    return Joi.object({
      application: this.ApplicationData(),
    });
  }

  static Currency() {
    return Joi.object({
      _id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      decimal_digits: Joi.number(),

      symbol: Joi.string().allow(""),
    });
  }

  static Domain() {
    return Joi.object({
      verified: Joi.boolean(),

      is_primary: Joi.boolean(),

      is_shortlink: Joi.boolean(),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_predefined: Joi.boolean(),
    });
  }

  static ApplicationWebsite() {
    return Joi.object({
      enabled: Joi.boolean(),

      basepath: Joi.string().allow(""),
    });
  }

  static ApplicationCors() {
    return Joi.object({
      domains: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ApplicationAuth() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static ApplicationRedirections() {
    return Joi.object({
      redirect_from: Joi.string().allow(""),

      redirect_to: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ApplicationMeta() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static SecureUrl() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
    });
  }

  static ApplicationData() {
    return Joi.object({
      website: this.ApplicationWebsite(),

      cors: this.ApplicationCors(),

      auth: this.ApplicationAuth(),

      description: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      cache_ttl: Joi.number(),

      is_internal: Joi.boolean(),

      is_active: Joi.boolean(),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      owner: Joi.string().allow(""),

      company_id: Joi.number(),

      token: Joi.string().allow(""),

      redirections: Joi.array().items(this.ApplicationRedirections()),

      meta: Joi.array().items(this.ApplicationMeta()),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),

      banner: this.SecureUrl(),

      logo: this.SecureUrl(),

      favicon: this.SecureUrl(),

      domains: Joi.array().items(this.Domain()),

      app_type: Joi.string().allow(""),

      mobile_logo: this.SecureUrl(),

      domain: this.Domain(),

      slug: Joi.string().allow(""),
    });
  }

  static NotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static LocationDefaultLanguage() {
    return Joi.object({
      name: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static LocationDefaultCurrency() {
    return Joi.object({
      name: Joi.string().allow(""),

      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static LocationDetails() {
    return Joi.object({
      capital: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      iso2: Joi.string().allow(""),

      iso3: Joi.string().allow(""),

      name: Joi.string().allow(""),

      parent: Joi.string().allow(""),

      phone_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      __v: Joi.number(),

      _id: Joi.string().allow(""),

      default_currency: this.LocationDefaultCurrency(),

      default_language: this.LocationDefaultLanguage(),

      state_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      latitude: Joi.string().allow(""),

      longitude: Joi.string().allow(""),
    });
  }

  static Locations() {
    return Joi.object({
      items: Joi.array().items(this.LocationDetails()),
    });
  }

  static TicketList() {
    return Joi.object({
      items: Joi.array().items(this.Ticket()),

      filters: this.Filter(),

      page: this.Page(),
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

  static TicketHistoryList() {
    return Joi.object({
      items: Joi.array().items(this.TicketHistory()),

      page: this.Page(),
    });
  }

  static CustomFormList() {
    return Joi.object({
      items: Joi.array().items(this.CustomForm()),

      page: this.Page(),
    });
  }

  static CreateCustomFormPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      inputs: Joi.array().items(Joi.any()).required(),

      description: Joi.string().allow(""),

      header_image: Joi.string().allow(""),

      priority: this.PriorityEnum().required(),

      should_notify: Joi.boolean(),

      success_message: Joi.string().allow(""),

      poll_for_assignment: this.PollForAssignment(),
    });
  }

  static EditCustomFormPayload() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      inputs: Joi.array().items(Joi.any()).required(),

      description: Joi.string().allow(""),

      priority: this.PriorityEnum().required(),

      header_image: Joi.string().allow(""),

      should_notify: Joi.boolean(),

      login_required: Joi.boolean(),

      success_message: Joi.string().allow(""),

      poll_for_assignment: this.PollForAssignment(),
    });
  }

  static EditTicketPayload() {
    return Joi.object({
      content: this.TicketContent(),

      category: Joi.string().allow(""),

      sub_category: Joi.string().allow(""),

      source: Joi.string().allow(""),

      status: Joi.string().allow(""),

      priority: this.PriorityEnum(),

      assigned_to: this.AgentChangePayload(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AgentChangePayload() {
    return Joi.object({
      agent_id: Joi.string().allow("").required(),
    });
  }

  static CreateVideoRoomResponse() {
    return Joi.object({
      unique_name: Joi.string().allow("").required(),
    });
  }

  static CloseVideoRoomResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static CreateVideoRoomPayload() {
    return Joi.object({
      unique_name: Joi.string().allow("").required(),

      notify: Joi.array().items(this.NotifyUser()),
    });
  }

  static NotifyUser() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      phone_number: Joi.string().allow("").required(),
    });
  }

  static Filter() {
    return Joi.object({
      priorities: Joi.array().items(this.Priority()).required(),

      categories: Joi.array().items(this.TicketCategory()),

      statuses: Joi.array().items(this.Status()).required(),

      assignees: Joi.array().items(Joi.any()).required(),
    });
  }

  static TicketHistoryPayload() {
    return Joi.object({
      value: Joi.any().required(),

      type: this.HistoryTypeEnum().required(),
    });
  }

  static CustomFormSubmissionPayload() {
    return Joi.object({
      response: Joi.array().items(Joi.any()).required(),

      attachments: Joi.array().items(this.TicketAsset()),
    });
  }

  static GetTokenForVideoRoomResponse() {
    return Joi.object({
      access_token: Joi.string().allow("").required(),
    });
  }

  static GetParticipantsInsideVideoRoomResponse() {
    return Joi.object({
      participants: Joi.array().items(this.Participant()).required(),
    });
  }

  static Participant() {
    return Joi.object({
      user: this.UserSchema(),

      identity: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static Email() {
    return Joi.object({
      primary: Joi.boolean(),

      verified: Joi.boolean(),

      email: Joi.string().allow(""),

      active: Joi.boolean(),
    });
  }

  static Debug() {
    return Joi.object({
      source: Joi.string().allow(""),

      platform: Joi.string().allow(""),
    });
  }

  static SubmitCustomFormResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      ticket: this.Ticket(),
    });
  }

  static TicketContext() {
    return Joi.object({
      application_id: Joi.string().allow(""),

      company_id: Joi.string().allow("").required(),
    });
  }

  static CreatedOn() {
    return Joi.object({
      user_agent: Joi.string().allow("").required(),
    });
  }

  static TicketAsset() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      type: this.TicketAssetTypeEnum().required(),
    });
  }

  static TicketContent() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      attachments: Joi.array().items(this.TicketAsset()),
    });
  }

  static AddTicketPayload() {
    return Joi.object({
      created_by: Joi.any(),

      status: Joi.string().allow(""),

      priority: this.PriorityEnum(),

      category: Joi.string().allow("").required(),

      content: this.TicketContent().required(),

      _custom_json: Joi.any(),
    });
  }

  static Priority() {
    return Joi.object({
      key: this.PriorityEnum().required(),

      display: Joi.string().allow("").required(),

      color: Joi.string().allow("").required(),
    });
  }

  static Status() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      color: Joi.string().allow("").required(),
    });
  }

  static TicketFeedbackForm() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      display: Joi.array().items(Joi.any()),
    });
  }

  static TicketFeedbackList() {
    return Joi.object({
      items: Joi.array().items(this.TicketFeedback()),
    });
  }

  static TicketFeedbackPayload() {
    return Joi.object({
      form_response: Joi.any(),
    });
  }

  static SubmitButton() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      title_color: Joi.string().allow("").required(),

      background_color: Joi.string().allow("").required(),
    });
  }

  static PollForAssignment() {
    return Joi.object({
      duration: Joi.number().required(),

      message: Joi.string().allow("").required(),

      success_message: Joi.string().allow("").required(),

      failure_message: Joi.string().allow("").required(),
    });
  }

  static CustomForm() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      header_image: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      priority: this.Priority().required(),

      login_required: Joi.boolean().required(),

      should_notify: Joi.boolean().required(),

      success_message: Joi.string().allow(""),

      submit_button: this.SubmitButton(),

      inputs: Joi.array().items(Joi.any()).required(),

      created_on: this.CreatedOn(),

      poll_for_assignment: this.PollForAssignment(),

      _id: Joi.string().allow("").required(),
    });
  }

  static CommunicationDetails() {
    return Joi.object({
      type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      value: Joi.string().allow(""),

      description: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static SupportGeneralConfig() {
    return Joi.object({
      _id: Joi.string().allow(""),

      support_email: this.CommunicationDetails(),

      support_phone: this.CommunicationDetails(),

      support_faq: this.CommunicationDetails(),

      show_communication_info: Joi.boolean(),

      support_communication: this.CommunicationDetails(),

      show_support_dris: Joi.boolean(),

      integration: Joi.any(),
    });
  }

  static FeedbackForm() {
    return Joi.object({
      inputs: Joi.any(),

      title: Joi.string().allow(""),

      timestamps: Joi.any(),
    });
  }

  static TicketSubCategory() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      sub_categories: this.TicketSubCategory(),
    });
  }

  static TicketCategory() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      sub_categories: this.TicketCategory(),

      group_id: Joi.number(),

      feedback_form: this.FeedbackForm(),
    });
  }

  static CategoryData() {
    return Joi.object({
      list: this.TicketCategory(),
    });
  }

  static IntegrationConfig() {
    return Joi.object({
      _id: Joi.string().allow(""),

      integration_type: Joi.string().allow("").required(),

      base_url: Joi.string().allow(""),

      create_ticket_apikey: Joi.string().allow(""),

      update_ticket_apikey: Joi.string().allow(""),

      category_sync_apikey: Joi.string().allow(""),

      category_data: this.CategoryData(),

      webhook_apikey: Joi.string().allow(""),

      config_completed: Joi.boolean(),

      allow_ticket_creation: Joi.boolean().required(),

      show_listing: Joi.boolean().required(),
    });
  }

  static FeedbackResponseItem() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static TicketFeedback() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow("").required(),

      company_id: Joi.string().allow("").required(),

      response: Joi.array().items(this.FeedbackResponseItem()).required(),

      category: Joi.string().allow(""),

      user: Joi.any(),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static TicketHistory() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.any().required(),

      ticket_id: Joi.string().allow("").required(),

      created_on: this.CreatedOn(),

      created_by: Joi.any(),

      _id: Joi.string().allow("").required(),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static Ticket() {
    return Joi.object({
      context: this.TicketContext(),

      created_on: this.CreatedOn(),

      response_id: Joi.string().allow(""),

      content: this.TicketContent(),

      category: this.TicketCategory().required(),

      sub_category: Joi.string().allow(""),

      source: this.TicketSourceEnum().required(),

      status: this.Status().required(),

      priority: this.Priority().required(),

      created_by: Joi.any(),

      assigned_to: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      is_feedback_pending: Joi.boolean(),

      integration: Joi.any(),

      _id: Joi.string().allow("").required(),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  /*
        Enum: PriorityEnum
        Used By: Lead
    */
  static PriorityEnum() {
    return Joi.string().valid(
      "low",

      "medium",

      "high",

      "urgent"
    );
  }

  /*
        Enum: HistoryTypeEnum
        Used By: Lead
    */
  static HistoryTypeEnum() {
    return Joi.string().valid(
      "rating",

      "log",

      "comment"
    );
  }

  /*
        Enum: TicketAssetTypeEnum
        Used By: Lead
    */
  static TicketAssetTypeEnum() {
    return Joi.string().valid(
      "image",

      "video",

      "file",

      "youtube",

      "product",

      "collection",

      "brand",

      "shipment",

      "order"
    );
  }

  /*
        Enum: TicketSourceEnum
        Used By: Lead
    */
  static TicketSourceEnum() {
    return Joi.string().valid(
      "platform_panel",

      "sales_channel"
    );
  }

  /*
        Enum: TicketIntegrationDetails
        Used By: Lead
    */
  static TicketIntegrationDetails() {
    return Joi.string().valid(
      "default",

      "freshdesk",

      "kapture"
    );
  }

  static AvailablePageSchema() {
    return Joi.object({
      value: Joi.string().allow(""),

      text: Joi.string().allow(""),

      path: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sections: Joi.array().items(this.AvailablePageSchemaSections()),

      sections_meta: Joi.array().items(
        this.AvailablePageSectionMetaAttributes()
      ),

      theme: Joi.string().allow(""),

      seo: this.AvailablePageSeo(),

      props: Joi.array().items(Joi.any()),

      _id: Joi.string().allow(""),
    });
  }

  static AvailablePageSectionMetaAttributes() {
    return Joi.object({
      attributes: Joi.any(),
    });
  }

  static AvailablePageSeo() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static AvailablePageSchemaSections() {
    return Joi.object({
      name: Joi.string().allow(""),

      label: Joi.string().allow(""),

      props: Joi.any(),

      blocks: Joi.array().items(Joi.any()),

      preset: Joi.any(),

      predicate: this.AvailablePagePredicate(),
    });
  }

  static AvailablePageScreenPredicate() {
    return Joi.object({
      mobile: Joi.boolean(),

      desktop: Joi.boolean(),

      tablet: Joi.boolean(),
    });
  }

  static AvailablePageUserPredicate() {
    return Joi.object({
      authenticated: Joi.boolean(),

      anonymous: Joi.boolean(),
    });
  }

  static AvailablePageRoutePredicate() {
    return Joi.object({
      selected: Joi.string().allow(""),

      exact_url: Joi.string().allow(""),

      query: Joi.any(),
    });
  }

  static AvailablePagePredicate() {
    return Joi.object({
      screen: this.AvailablePageScreenPredicate(),

      user: this.AvailablePageUserPredicate(),

      route: this.AvailablePageRoutePredicate(),
    });
  }

  static AllAvailablePageSchema() {
    return Joi.object({
      pages: Joi.array().items(this.AvailablePageSchema()),
    });
  }

  static PaginationSchema() {
    return Joi.object({
      size: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      current: Joi.number(),
    });
  }

  static ThemesListingResponseSchema() {
    return Joi.object({
      items: Joi.array().items(this.ThemesSchema()),

      page: this.PaginationSchema(),
    });
  }

  static AddThemeRequestSchema() {
    return Joi.object({
      theme_id: Joi.string().allow(""),
    });
  }

  static UpgradableThemeSchema() {
    return Joi.object({
      parent_theme: Joi.string().allow(""),

      applied_theme: Joi.string().allow(""),

      upgrade: Joi.boolean(),
    });
  }

  static FontsSchema() {
    return Joi.object({
      items: this.FontsSchemaItems(),

      kind: Joi.string().allow(""),
    });
  }

  static BlitzkriegApiErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BlitzkriegNotFoundSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BlitzkriegInternalServerErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static FontsSchemaItems() {
    return Joi.object({
      family: Joi.string().allow(""),

      variants: Joi.array().items(Joi.string().allow("")),

      subsets: Joi.array().items(Joi.string().allow("")),

      version: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      files: this.FontsSchemaItemsFiles(),

      category: Joi.string().allow(""),

      kind: Joi.string().allow(""),
    });
  }

  static FontsSchemaItemsFiles() {
    return Joi.object({
      regular: Joi.string().allow(""),

      italic: Joi.string().allow(""),

      bold: Joi.string().allow(""),
    });
  }

  static ThemesSchema() {
    return Joi.object({
      application: Joi.string().allow(""),

      applied: Joi.boolean(),

      customized: Joi.boolean(),

      published: Joi.boolean(),

      archived: Joi.boolean(),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      version: Joi.string().allow(""),

      parent_theme_version: Joi.string().allow(""),

      parent_theme: Joi.string().allow(""),

      information: this.Information(),

      tags: Joi.array().items(Joi.string().allow("")),

      src: this.Src(),

      assets: this.AssetsSchema(),

      available_sections: Joi.array().items(this.availableSectionSchema()),

      styles: Joi.any(),

      config: this.Config(),

      font: this.Font(),

      _id: Joi.string().allow(""),

      __v: Joi.number(),

      colors: this.Colors(),
    });
  }

  static availableSectionSchema() {
    return Joi.object({
      blocks: Joi.array().items(this.Blocks()),

      name: Joi.string().allow(""),

      label: Joi.string().allow(""),

      props: Joi.array().items(this.BlocksProps()),
    });
  }

  static Information() {
    return Joi.object({
      images: this.Images(),

      features: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static Images() {
    return Joi.object({
      desktop: Joi.array().items(Joi.string().allow("")),

      android: Joi.array().items(Joi.string().allow("")),

      ios: Joi.array().items(Joi.string().allow("")),

      thumbnail: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Src() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }

  static AssetsSchema() {
    return Joi.object({
      umd_js: this.UmdJs(),

      common_js: this.CommonJs(),

      css: this.Css(),
    });
  }

  static UmdJs() {
    return Joi.object({
      link: Joi.string().allow(""),

      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CommonJs() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }

  static Css() {
    return Joi.object({
      link: Joi.string().allow(""),

      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Sections() {
    return Joi.object({
      attributes: Joi.string().allow(""),
    });
  }

  static Config() {
    return Joi.object({
      preset: this.Preset(),

      global_schema: this.GlobalSchema(),

      current: Joi.string().allow(""),

      list: Joi.array().items(this.ListSchemaItem()),
    });
  }

  static Preset() {
    return Joi.object({
      pages: Joi.array().items(this.AvailablePageSchema()),
    });
  }

  static GlobalSchema() {
    return Joi.object({
      props: Joi.array().items(this.GlobalSchemaProps()),
    });
  }

  static ListSchemaItem() {
    return Joi.object({
      global_config: Joi.any(),

      page: Joi.array().items(this.ConfigPage()),

      name: Joi.string().allow(""),
    });
  }

  static Colors() {
    return Joi.object({
      bg_color: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      secondary_color: Joi.string().allow(""),

      accent_color: Joi.string().allow(""),

      link_color: Joi.string().allow(""),

      button_secondary_color: Joi.string().allow(""),
    });
  }

  static Custom() {
    return Joi.object({
      props: Joi.any(),
    });
  }

  static ConfigPage() {
    return Joi.object({
      settings: Joi.any(),

      page: Joi.string().allow(""),
    });
  }

  static Font() {
    return Joi.object({
      family: Joi.string().allow(""),

      variants: this.Variants(),
    });
  }

  static Variants() {
    return Joi.object({
      medium: this.Medium(),

      semi_bold: this.SemiBold(),

      bold: this.Bold(),

      light: this.Light(),

      regular: this.Regular(),
    });
  }

  static Medium() {
    return Joi.object({
      name: Joi.string().allow(""),

      file: Joi.string().allow(""),
    });
  }

  static SemiBold() {
    return Joi.object({
      name: Joi.string().allow(""),

      file: Joi.string().allow(""),
    });
  }

  static Bold() {
    return Joi.object({
      name: Joi.string().allow(""),

      file: Joi.string().allow(""),
    });
  }

  static Light() {
    return Joi.object({
      name: Joi.string().allow(""),

      file: Joi.string().allow(""),
    });
  }

  static Regular() {
    return Joi.object({
      name: Joi.string().allow(""),

      file: Joi.string().allow(""),
    });
  }

  static Blocks() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      props: Joi.array().items(this.BlocksProps()),
    });
  }

  static GlobalSchemaProps() {
    return Joi.object({
      id: Joi.string().allow(""),

      label: Joi.string().allow(""),

      type: Joi.string().allow(""),

      category: Joi.string().allow(""),
    });
  }

  static BlocksProps() {
    return Joi.object({
      id: Joi.string().allow(""),

      label: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static BlockUserRequestSchema() {
    return Joi.object({
      status: Joi.boolean(),

      user_id: Joi.array().items(Joi.string().allow("")),

      reason: Joi.string().allow(""),
    });
  }

  static ArchiveUserRequestSchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),
    });
  }

  static DeleteApplicationUserRequestSchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      reason_id: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

      otp: Joi.string().allow(""),
    });
  }

  static UnDeleteUserRequestSchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      reason_id: Joi.string().allow(""),
    });
  }

  static EditEmailRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),
    });
  }

  static SendVerificationLinkMobileRequestSchema() {
    return Joi.object({
      verified: Joi.boolean(),

      active: Joi.boolean(),

      country_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      primary: Joi.boolean(),
    });
  }

  static EditMobileRequestSchema() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static EditProfileRequestSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: this.EditProfileMobileSchema(),

      country_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      dob: Joi.string().allow(""),

      profile_pic_url: Joi.string().allow(""),

      android_hash: Joi.string().allow(""),

      sender: Joi.string().allow(""),

      register_token: Joi.string().allow(""),
    });
  }

  static EditProfileMobileSchema() {
    return Joi.object({
      phone: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static SendEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),

      action: Joi.string().allow(""),

      token: Joi.string().allow(""),

      register_token: Joi.string().allow(""),
    });
  }

  static VerifyEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),

      action: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      otp: Joi.string().allow(""),
    });
  }

  static VerifyOtpRequestSchema() {
    return Joi.object({
      request_id: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      otp: Joi.string().allow(""),
    });
  }

  static SendMobileOtpRequestSchema() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      action: Joi.string().allow(""),

      token: Joi.string().allow(""),

      android_hash: Joi.string().allow(""),

      force: Joi.string().allow(""),

      captcha_code: Joi.string().allow(""),
    });
  }

  static UpdatePasswordRequestSchema() {
    return Joi.object({
      old_password: Joi.string().allow(""),

      new_password: Joi.string().allow(""),
    });
  }

  static FormRegisterRequestSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      password: Joi.string().allow(""),

      phone: this.FormRegisterRequestSchemaPhone(),

      register_token: Joi.string().allow(""),
    });
  }

  static TokenRequestBodySchema() {
    return Joi.object({
      token: Joi.string().allow(""),
    });
  }

  static ForgotPasswordRequestSchema() {
    return Joi.object({
      code: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static CodeRequestBodySchema() {
    return Joi.object({
      code: Joi.string().allow(""),
    });
  }

  static SendResetPasswordEmailRequestSchema() {
    return Joi.object({
      email: Joi.string().allow(""),

      captcha_code: Joi.string().allow(""),
    });
  }

  static SendResetPasswordMobileRequestSchema() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      captcha_code: Joi.string().allow(""),
    });
  }

  static PasswordLoginRequestSchema() {
    return Joi.object({
      captcha_code: Joi.string().allow(""),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static SendOtpRequestSchema() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      captcha_code: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      android_hash: Joi.string().allow(""),
    });
  }

  static OAuthRequestSchema() {
    return Joi.object({
      is_signed_in: Joi.boolean(),

      oauth2: this.OAuthRequestSchemaOauth2(),

      profile: this.OAuthRequestSchemaProfile(),
    });
  }

  static OAuthRequestAppleSchema() {
    return Joi.object({
      user_identifier: Joi.string().allow(""),

      oauth: this.OAuthRequestAppleSchemaOauth(),

      profile: this.OAuthRequestAppleSchemaProfile(),
    });
  }

  static UserObjectSchema() {
    return Joi.object({
      user: this.UserSchema(),
    });
  }

  static AuthSuccess() {
    return Joi.object({
      register_token: Joi.string().allow(""),

      user_exists: Joi.boolean(),

      user: this.UserSchema(),
    });
  }

  static SendOtpResponse() {
    return Joi.object({
      resend_timer: Joi.number(),

      resend_token: Joi.string().allow(""),

      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      resend_email_token: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      verify_email_otp: Joi.boolean(),

      verify_mobile_otp: Joi.boolean(),

      user_exists: Joi.boolean(),
    });
  }

  static ProfileEditSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      register_token: Joi.string().allow(""),

      resend_email_token: Joi.string().allow(""),

      user_exists: Joi.boolean(),

      verify_email_link: Joi.boolean(),

      verify_email_otp: Joi.boolean(),

      verify_mobile_otp: Joi.boolean(),

      email: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      resend_timer: Joi.number(),

      resend_token: Joi.string().allow(""),
    });
  }

  static LoginSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      request_id: Joi.string().allow(""),

      register_token: Joi.string().allow(""),
    });
  }

  static VerifyOtpSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      user_exists: Joi.boolean(),

      register_token: Joi.string().allow(""),
    });
  }

  static ResetPasswordSuccess() {
    return Joi.object({
      status: Joi.string().allow(""),
    });
  }

  static RegisterFormSuccess() {
    return Joi.object({
      email: Joi.string().allow(""),

      resend_timer: Joi.number(),

      resend_token: Joi.string().allow(""),

      resend_email_token: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      verify_email_otp: Joi.boolean(),

      verify_mobile_otp: Joi.boolean(),

      user_exists: Joi.boolean(),
    });
  }

  static VerifyEmailSuccess() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static HasPasswordSuccess() {
    return Joi.object({
      result: Joi.boolean(),
    });
  }

  static LogoutSuccess() {
    return Joi.object({
      logout: Joi.boolean(),
    });
  }

  static BlockUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static ArchiveUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static DeleteUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static UnDeleteUserSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static OtpSuccess() {
    return Joi.object({
      resend_timer: Joi.number(),

      resend_token: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static EmailOtpSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SessionListSuccess() {
    return Joi.object({
      sessions: Joi.array().items(Joi.string().allow("")),
    });
  }

  static VerifyMobileOTPSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      verify_mobile_link: Joi.boolean(),
    });
  }

  static VerifyEmailOTPSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      verify_email_link: Joi.boolean(),
    });
  }

  static SendMobileVerifyLinkSuccess() {
    return Joi.object({
      verify_mobile_link: Joi.boolean(),
    });
  }

  static SendEmailVerifyLinkSuccess() {
    return Joi.object({
      verify_email_link: Joi.boolean(),
    });
  }

  static UserSearchResponseSchema() {
    return Joi.object({
      users: Joi.array().items(this.UserSchema()),
    });
  }

  static CustomerListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(this.UserSchema()),

      page: this.PaginationSchema(),
    });
  }

  static SessionListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
    });
  }

  static SessionDeleteResponseSchema() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UnauthorizedSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static UnauthenticatedSchema() {
    return Joi.object({
      authenticated: Joi.boolean(),
    });
  }

  static NotFoundSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static AuthenticationInternalServerErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static AuthenticationApiErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProfileEditSuccessSchema() {
    return Joi.object({
      email: Joi.string().allow(""),

      verify_email_otp: Joi.boolean(),

      verify_email_link: Joi.boolean(),

      verify_mobile_otp: Joi.boolean(),

      user: Joi.string().allow(""),

      register_token: Joi.string().allow(""),

      user_exists: Joi.boolean(),
    });
  }

  static FormRegisterRequestSchemaPhone() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static OAuthRequestSchemaOauth2() {
    return Joi.object({
      access_token: Joi.string().allow(""),

      expiry: Joi.number(),

      refresh_token: Joi.string().allow(""),
    });
  }

  static OAuthRequestSchemaProfile() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      image: Joi.string().allow(""),

      id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static OAuthRequestAppleSchemaOauth() {
    return Joi.object({
      identity_token: Joi.string().allow(""),
    });
  }

  static OAuthRequestAppleSchemaProfile() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static AuthSuccessUser() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      debug: this.AuthSuccessUserDebug(),

      active: Joi.boolean(),

      emails: this.AuthSuccessUserEmails(),
    });
  }

  static AuthSuccessUserDebug() {
    return Joi.object({
      platform: Joi.string().allow(""),
    });
  }

  static AuthSuccessUserEmails() {
    return Joi.object({
      email: Joi.string().allow(""),

      verified: Joi.boolean(),

      primary: Joi.boolean(),

      active: Joi.boolean(),
    });
  }

  static CreateUserRequestSchema() {
    return Joi.object({
      phone_number: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      username: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static CreateUserResponseSchema() {
    return Joi.object({
      user: this.UserSchema(),
    });
  }

  static CreateUserSessionRequestSchema() {
    return Joi.object({
      domain: Joi.string().allow(""),

      max_age: Joi.number(),

      user_id: Joi.string().allow(""),
    });
  }

  static CreateUserSessionResponseSchema() {
    return Joi.object({
      domain: Joi.string().allow(""),

      max_age: Joi.number(),

      secure: Joi.boolean(),

      http_only: Joi.boolean(),

      cookie: Joi.any(),
    });
  }

  static PlatformSchema() {
    return Joi.object({
      display: Joi.string().allow(""),

      look_and_feel: this.LookAndFeel(),

      updated_at: Joi.string().allow(""),

      active: Joi.boolean(),

      forgot_password: Joi.boolean(),

      login: this.Login(),

      skip_captcha: Joi.boolean(),

      name: Joi.string().allow(""),

      meta: this.MetaSchema(),

      _id: Joi.string().allow(""),

      social: this.Social(),

      required_fields: this.RequiredFields(),

      register_required_fields: this.RegisterRequiredFields(),

      skip_login: Joi.boolean(),

      flash_card: this.FlashCard(),

      subtext: Joi.string().allow(""),

      social_tokens: this.SocialTokens(),

      created_at: Joi.string().allow(""),

      register: Joi.boolean(),

      mobile_image: Joi.string().allow(""),

      desktop_image: Joi.string().allow(""),

      delete_account_day: Joi.number(),

      delete_account_reasons: Joi.array().items(this.DeleteAccountReasons()),

      delete_account_consent: Joi.any(),

      session_config: Joi.any(),
    });
  }

  static LookAndFeel() {
    return Joi.object({
      card_position: Joi.string().allow(""),

      background_color: Joi.string().allow(""),
    });
  }

  static Login() {
    return Joi.object({
      password: Joi.boolean(),

      otp: Joi.boolean(),
    });
  }

  static MetaSchema() {
    return Joi.object({
      fynd_default: Joi.boolean(),
    });
  }

  static Social() {
    return Joi.object({
      account_kit: Joi.boolean(),

      facebook: Joi.boolean(),

      google: Joi.boolean(),

      apple: Joi.boolean(),
    });
  }

  static RequiredFields() {
    return Joi.object({
      email: this.PlatformEmail(),

      mobile: this.PlatformMobile(),
    });
  }

  static PlatformEmail() {
    return Joi.object({
      is_required: Joi.boolean(),

      level: Joi.string().allow(""),
    });
  }

  static PlatformMobile() {
    return Joi.object({
      is_required: Joi.boolean(),

      level: Joi.string().allow(""),
    });
  }

  static RegisterRequiredFields() {
    return Joi.object({
      email: this.RegisterRequiredFieldsEmail(),

      mobile: this.RegisterRequiredFieldsMobile(),
    });
  }

  static RegisterRequiredFieldsEmail() {
    return Joi.object({
      is_required: Joi.boolean(),

      level: Joi.string().allow(""),
    });
  }

  static RegisterRequiredFieldsMobile() {
    return Joi.object({
      is_required: Joi.boolean(),

      level: Joi.string().allow(""),
    });
  }

  static FlashCard() {
    return Joi.object({
      text: Joi.string().allow(""),

      text_color: Joi.string().allow(""),

      background_color: Joi.string().allow(""),
    });
  }

  static SocialTokens() {
    return Joi.object({
      facebook: this.Facebook(),

      account_kit: this.Accountkit(),

      google: this.Google(),
    });
  }

  static DeleteAccountReasons() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.string().allow(""),

      show_text_area: Joi.boolean(),
    });
  }

  static DeleteAccountConsent() {
    return Joi.object({
      consent_text: Joi.string().allow(""),
    });
  }

  static Facebook() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  static Accountkit() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  static Google() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  static SessionExpiry() {
    return Joi.object({
      duration: Joi.number(),

      type: Joi.string().allow(""),

      is_rolling: Joi.boolean(),
    });
  }

  static UpdateUserRequestSchema() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static UserSchema() {
    return Joi.object({
      application_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      meta: Joi.any(),

      last_name: Joi.string().allow(""),

      phone_numbers: Joi.array().items(this.PhoneNumber()),

      emails: Joi.array().items(this.Email()),

      gender: Joi.string().allow(""),

      dob: Joi.string().allow(""),

      active: Joi.boolean(),

      profile_pic_url: Joi.string().allow(""),

      username: Joi.string().allow(""),

      account_type: Joi.string().allow(""),

      debug: this.Debug(),

      has_old_password_hash: Joi.boolean(),

      _id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      phone: Joi.string().allow(""),

      country_code: Joi.number(),
    });
  }

  static ApplicationLegal() {
    return Joi.object({
      application: Joi.string().allow(""),

      tnc: Joi.string().allow(""),

      policy: Joi.string().allow(""),

      shipping: Joi.string().allow(""),

      returns: Joi.string().allow(""),

      faq: Joi.array().items(this.ApplicationLegalFAQ()),

      _id: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static ApplicationLegalFAQ() {
    return Joi.object({
      question: Joi.string().allow(""),

      answer: Joi.string().allow(""),
    });
  }

  static PathMappingSchema() {
    return Joi.object({
      application: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      redirect_from: Joi.string().allow(""),

      redirect_to: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      __source: this.TagSourceSchema(),
    });
  }

  static SeoComponent() {
    return Joi.object({
      seo: this.SeoSchema(),
    });
  }

  static SeoSchema() {
    return Joi.object({
      app: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      robots_txt: Joi.string().allow(""),

      sitemap_enabled: Joi.boolean(),

      custom_meta_tags: Joi.array().items(Joi.any()),

      details: this.Detail(),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static CustomMetaTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      content: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static Detail() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static AnnouncementPageSchema() {
    return Joi.object({
      page_slug: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static EditorMeta() {
    return Joi.object({
      foreground_color: Joi.string().allow(""),

      background_color: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      content: Joi.string().allow(""),
    });
  }

  static AnnouncementAuthorSchema() {
    return Joi.object({
      created_by: Joi.string().allow(""),

      modified_by: Joi.string().allow(""),
    });
  }

  static AdminAnnouncementSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      platforms: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

      announcement: Joi.string().allow(""),

      pages: Joi.array().items(this.AnnouncementPageSchema()),

      editor_meta: this.EditorMeta(),

      author: this.AnnouncementAuthorSchema(),

      created_at: Joi.string().allow(""),

      app: Joi.string().allow(""),

      modified_at: Joi.string().allow(""),

      _schedule: this.ScheduleSchema(),
    });
  }

  static ScheduleSchema() {
    return Joi.object({
      cron: Joi.string().allow(""),

      start: Joi.string().allow(""),

      end: Joi.string().allow(""),

      duration: Joi.number(),

      next_schedule: Joi.array().items(Joi.any()),
    });
  }

  static NextSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow(""),
    });
  }

  static AnnouncementSchema() {
    return Joi.object({
      announcement: Joi.string().allow(""),

      schedule: this.ScheduleStartSchema(),
    });
  }

  static ScheduleStartSchema() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow(""),
    });
  }

  static BlogGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.BlogSchema()),

      page: this.Page(),
    });
  }

  static ResourceContent() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static Asset() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      id: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static Author() {
    return Joi.object({
      designation: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static BlogSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      application: Joi.string().allow(""),

      archived: Joi.boolean(),

      author: this.Author(),

      content: Joi.array().items(this.ResourceContent()),

      feature_image: this.Asset(),

      published: Joi.boolean(),

      reading_time: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      seo: this.SEO(),

      _schedule: this.CronSchedule(),

      title: Joi.string().allow(""),

      date_meta: this.DateMeta(),
    });
  }

  static SEO() {
    return Joi.object({
      description: Joi.string().allow(""),

      image: this.SEOImage(),

      title: Joi.string().allow(""),
    });
  }

  static SEOImage() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static BlogRequest() {
    return Joi.object({
      application: Joi.string().allow(""),

      _custom_json: Joi.any(),

      author: this.Author(),

      content: Joi.array().items(this.ResourceContent()),

      feature_image: this.Asset(),

      published: Joi.boolean(),

      reading_time: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

      seo: this.SEO(),

      _schedule: this.CronSchedule(),
    });
  }

  static GetAnnouncementListSchema() {
    return Joi.object({
      items: Joi.array().items(this.AdminAnnouncementSchema()),

      page: this.Page(),
    });
  }

  static CreateAnnouncementSchema() {
    return Joi.object({
      message: Joi.string().allow(""),

      data: this.AdminAnnouncementSchema(),
    });
  }

  static DataLoaderResponseSchema() {
    return Joi.object({
      application: Joi.string().allow(""),

      company: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      service: Joi.string().allow(""),

      operation_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      content: Joi.string().allow(""),

      __source: this.DataLoaderSourceSchema(),
    });
  }

  static DataLoaderResetResponseSchema() {
    return Joi.object({
      reset: Joi.string().allow(""),
    });
  }

  static Navigation() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      orientation: Joi.string().allow(""),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      _id: Joi.string().allow(""),

      position: Joi.string().allow(""),

      application: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      navigation: this.NavigationReference(),
    });
  }

  static LocaleLanguage() {
    return Joi.object({
      hi: this.Language(),

      ar: this.Language(),

      en_us: this.Language(),
    });
  }

  static Language() {
    return Joi.object({
      display: Joi.string().allow(""),
    });
  }

  static Action() {
    return Joi.object({
      page: this.ActionPage(),

      popup: this.ActionPage(),

      type: Joi.string().allow(""),
    });
  }

  static ActionPage() {
    return Joi.object({
      params: Joi.object().pattern(
        /\S/,
        Joi.array().items(Joi.string().allow(""))
      ),

      query: Joi.object().pattern(
        /\S/,
        Joi.array().items(Joi.string().allow(""))
      ),

      url: Joi.string().allow(""),

      type: this.PageType().required(),
    });
  }

  static NavigationReference() {
    return Joi.object({
      acl: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      _locale_language: this.LocaleLanguage(),

      image: Joi.string().allow(""),

      type: Joi.string().allow(""),

      action: this.Action(),

      active: Joi.boolean(),

      display: Joi.string().allow(""),

      sort_order: Joi.number(),

      sub_navigation: Joi.array().items(this.NavigationReference()),
    });
  }

  static LandingPage() {
    return Joi.object({
      data: this.LandingPageSchema(),

      success: Joi.boolean(),
    });
  }

  static ConfigurationSchema() {
    return Joi.object({
      sleep_time: Joi.number(),

      start_on_launch: Joi.boolean(),

      duration: Joi.number(),

      slide_direction: Joi.string().allow(""),
    });
  }

  static SlideshowMedia() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      bg_color: Joi.string().allow(""),

      duration: Joi.number(),

      auto_decide_duration: Joi.boolean(),

      action: this.Action(),
    });
  }

  static Slideshow() {
    return Joi.object({
      data: this.SlideshowSchema(),

      success: Joi.boolean(),
    });
  }

  static AnnouncementsResponseSchema() {
    return Joi.object({
      announcements: Joi.object().pattern(
        /\S/,
        Joi.array().items(this.AnnouncementSchema())
      ),

      refresh_rate: Joi.number(),

      refresh_pages: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FaqResponseSchema() {
    return Joi.object({
      faqs: Joi.array().items(this.FaqSchema()),
    });
  }

  static UpdateHandpickedSchema() {
    return Joi.object({
      tag: this.HandpickedTagSchema(),
    });
  }

  static HandpickedTagSchema() {
    return Joi.object({
      position: Joi.string().allow(""),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      content: Joi.string().allow(""),
    });
  }

  static RemoveHandpickedSchema() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CreateTagSchema() {
    return Joi.object({
      name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      position: Joi.string().allow(""),

      attributes: Joi.any(),

      pages: Joi.array().items(Joi.any()),

      content: Joi.string().allow(""),
    });
  }

  static CreateTagRequestSchema() {
    return Joi.object({
      tags: Joi.array().items(this.CreateTagSchema()),
    });
  }

  static DataLoaderSchema() {
    return Joi.object({
      name: Joi.string().allow(""),

      service: Joi.string().allow(""),

      operation_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      content: Joi.string().allow(""),

      __source: this.DataLoaderSourceSchema(),

      _id: Joi.string().allow(""),
    });
  }

  static DataLoaderSourceSchema() {
    return Joi.object({
      type: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static DataLoadersSchema() {
    return Joi.object({
      items: Joi.array().items(this.DataLoaderSchema()),
    });
  }

  static TagDeleteSuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static ContentAPIError() {
    return Joi.object({
      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      info: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static CommonError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CategorySchema() {
    return Joi.object({
      index: Joi.number(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      children: Joi.array().items(Joi.string().allow("")),

      _id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      application: Joi.string().allow(""),

      icon_url: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static ChildrenSchema() {
    return Joi.object({
      question: Joi.string().allow(""),

      answer: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      application: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static CategoryRequestSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static FAQCategorySchema() {
    return Joi.object({
      index: Joi.number(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      children: Joi.array().items(this.ChildrenSchema()),

      _id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      application: Joi.string().allow(""),

      icon_url: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static FaqSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),

      application: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      question: Joi.string().allow(""),

      answer: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FAQ() {
    return Joi.object({
      slug: Joi.string().allow(""),

      question: Joi.string().allow(""),

      answer: Joi.string().allow(""),
    });
  }

  static CreateFaqResponseSchema() {
    return Joi.object({
      faq: this.FaqSchema(),
    });
  }

  static CreateFaqSchema() {
    return Joi.object({
      faq: this.FAQ(),
    });
  }

  static GetFaqSchema() {
    return Joi.object({
      faqs: Joi.array().items(this.FaqSchema()),
    });
  }

  static UpdateFaqCategoryRequestSchema() {
    return Joi.object({
      category: this.CategorySchema(),
    });
  }

  static CreateFaqCategoryRequestSchema() {
    return Joi.object({
      category: this.CategoryRequestSchema(),
    });
  }

  static CreateFaqCategorySchema() {
    return Joi.object({
      category: this.CategorySchema(),
    });
  }

  static GetFaqCategoriesSchema() {
    return Joi.object({
      categories: Joi.array().items(this.CategorySchema()),
    });
  }

  static GetFaqCategoryBySlugSchema() {
    return Joi.object({
      category: this.FAQCategorySchema(),
    });
  }

  static LandingPageGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.LandingPageSchema()),

      page: this.Page(),
    });
  }

  static LandingPageSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),

      action: this.Action(),

      platform: Joi.array().items(Joi.string().allow("")),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      _id: Joi.string().allow(""),

      application: Joi.string().allow(""),

      archived: Joi.boolean(),

      _custom_json: Joi.any(),
    });
  }

  static DefaultNavigationResponse() {
    return Joi.object({
      items: Joi.array().items(this.NavigationSchema()),
    });
  }

  static NavigationGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.NavigationSchema()),

      page: this.Page(),
    });
  }

  static Orientation() {
    return Joi.object({
      portrait: Joi.array().items(Joi.string().allow("")),

      landscape: Joi.array().items(Joi.string().allow("")),
    });
  }

  static NavigationSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      application: Joi.string().allow(""),

      archived: Joi.boolean(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      platform: Joi.array().items(Joi.string().allow("")),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      orientation: this.Orientation(),

      version: Joi.number(),

      navigation: Joi.array().items(this.NavigationReference()),
    });
  }

  static NavigationRequest() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      platform: Joi.array().items(Joi.string().allow("")),

      orientation: this.Orientation(),

      navigation: Joi.array().items(this.NavigationReference()),
    });
  }

  static CustomPageSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      title: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      orientation: Joi.string().allow(""),

      application: Joi.string().allow(""),

      description: Joi.string().allow(""),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      content: Joi.array().items(Joi.any()),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      _schedule: this.ScheduleSchema(),
    });
  }

  static ContentSchema() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static CustomPage() {
    return Joi.object({
      data: this.CustomPageSchema(),
    });
  }

  static FeatureImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
    });
  }

  static PageGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.PageSchema()),

      page: this.Page(),
    });
  }

  static PageSpec() {
    return Joi.object({
      specifications: Joi.array().items(Joi.any()),
    });
  }

  static PageSpecParam() {
    return Joi.object({
      key: Joi.string().allow(""),

      required: Joi.boolean(),
    });
  }

  static PageSpecItem() {
    return Joi.object({
      page_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      params: Joi.array().items(this.PageSpecParam()),

      query: Joi.array().items(this.PageSpecParam()),
    });
  }

  static PageSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      application: Joi.string().allow(""),

      component_ids: Joi.array().items(Joi.string().allow("")),

      content: Joi.array().items(Joi.any()),

      content_path: Joi.string().allow(""),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      description: Joi.string().allow(""),

      feature_image: this.Asset(),

      page_meta: Joi.array().items(Joi.any()),

      _schedule: this.ScheduleSchema(),

      _custom_json: Joi.any(),

      orientation: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      published: Joi.boolean(),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      seo: this.SEO(),

      visibility: Joi.any(),

      archived: Joi.boolean(),
    });
  }

  static CreatedBySchema() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }

  static PageContent() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static PageMeta() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.any(),
    });
  }

  static PageRequest() {
    return Joi.object({
      _schedule: this.CronSchedule(),

      application: Joi.string().allow(""),

      author: this.Author(),

      _custom_json: Joi.any(),

      orientation: Joi.string().allow(""),

      content: Joi.array().items(Joi.any()),

      feature_image: this.Asset(),

      published: Joi.boolean(),

      reading_time: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      seo: this.SEO(),

      title: Joi.string().allow(""),
    });
  }

  static CronSchedule() {
    return Joi.object({
      cron: Joi.string().allow(""),

      start: Joi.string().allow(""),

      end: Joi.string().allow(""),

      duration: Joi.number(),
    });
  }

  static PagePublishRequest() {
    return Joi.object({
      publish: Joi.boolean(),
    });
  }

  static PageMetaSchema() {
    return Joi.object({
      system_pages: Joi.array().items(this.NavigationSchema()),

      custom_pages: Joi.array().items(this.PageSchema()),

      application_id: Joi.string().allow(""),
    });
  }

  static SlideshowGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.SlideshowSchema()),

      page: this.Page(),
    });
  }

  static SlideshowSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      date_meta: this.DateMeta(),

      application: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      configuration: this.ConfigurationSchema(),

      media: Joi.array().items(this.SlideshowMedia()),

      active: Joi.boolean(),

      archived: Joi.boolean(),

      _custom_json: Joi.any(),
    });
  }

  static SlideshowRequest() {
    return Joi.object({
      slug: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      configuration: this.ConfigurationSchema(),

      media: this.SlideshowMedia(),

      active: Joi.boolean(),
    });
  }

  static Support() {
    return Joi.object({
      created: Joi.boolean(),

      _id: Joi.string().allow(""),

      config_type: Joi.string().allow(""),

      application: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      contact: this.ContactSchema(),
    });
  }

  static PhoneProperties() {
    return Joi.object({
      key: Joi.string().allow(""),

      code: Joi.string().allow(""),

      number: Joi.string().allow(""),
    });
  }

  static PhoneSchema() {
    return Joi.object({
      active: Joi.boolean(),

      phone: Joi.array().items(this.PhoneProperties()),
    });
  }

  static EmailProperties() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static EmailSchema() {
    return Joi.object({
      active: Joi.boolean(),

      email: Joi.array().items(this.EmailProperties()),
    });
  }

  static ContactSchema() {
    return Joi.object({
      phone: this.PhoneSchema(),

      email: this.EmailSchema(),
    });
  }

  static TagsSchema() {
    return Joi.object({
      application: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      tags: Joi.array().items(this.TagSchema()),
    });
  }

  static TagSchema() {
    return Joi.object({
      name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      position: Joi.string().allow(""),

      attributes: Joi.any(),

      content: Joi.string().allow(""),

      pages: Joi.array().items(Joi.any()),

      __source: this.TagSourceSchema(),
    });
  }

  static TagSourceSchema() {
    return Joi.object({
      type: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  /*
        Enum: PageType
        Used By: Content
    */
  static PageType() {
    return Joi.string().valid(
      "about-us",

      "addresses",

      "blog",

      "brands",

      "cards",

      "cart",

      "categories",

      "brand",

      "category",

      "collection",

      "collections",

      "contact-us",

      "external",

      "faq",

      "freshchat",

      "home",

      "notification-settings",

      "orders",

      "page",

      "policy",

      "product",

      "product-reviews",

      "add-product-review",

      "product-request",

      "products",

      "profile",

      "profile-order-shipment",

      "profile-basic",

      "profile-company",

      "profile-emails",

      "profile-phones",

      "rate-us",

      "refer-earn",

      "settings",

      "shared-cart",

      "tnc",

      "track-order",

      "wishlist",

      "sections",

      "form",

      "cart-delivery",

      "cart-payment",

      "cart-review",

      "login",

      "register",

      "shipping-policy",

      "return-policy"
    );
  }

  static CommunicationConsentReq() {
    return Joi.object({
      response: Joi.string().allow(""),

      action: Joi.string().allow(""),

      channel: Joi.string().allow(""),
    });
  }

  static CommunicationConsentRes() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      channels: this.CommunicationConsentChannels(),
    });
  }

  static CommunicationConsentChannelsEmail() {
    return Joi.object({
      response: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static CommunicationConsentChannelsSms() {
    return Joi.object({
      response: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static CommunicationConsentChannelsWhatsapp() {
    return Joi.object({
      response: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      phone_number: Joi.string().allow(""),
    });
  }

  static CommunicationConsentChannels() {
    return Joi.object({
      email: this.CommunicationConsentChannelsEmail(),

      sms: this.CommunicationConsentChannelsSms(),

      whatsapp: this.CommunicationConsentChannelsWhatsapp(),
    });
  }

  static CommunicationConsent() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      channels: this.CommunicationConsentChannels(),
    });
  }

  static BadRequestSchema() {
    return Joi.object({
      status: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static PushtokenReq() {
    return Joi.object({
      action: Joi.string().allow(""),

      bundle_identifier: Joi.string().allow(""),

      push_token: Joi.string().allow(""),

      unique_device_id: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static PushtokenRes() {
    return Joi.object({
      _id: Joi.string().allow(""),

      bundle_identifier: Joi.string().allow(""),

      push_token: Joi.string().allow(""),

      unique_device_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      platform: Joi.string().allow(""),

      application_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      expired_at: Joi.string().allow(""),
    });
  }

  static QRCodeResp() {
    return Joi.object({
      link: Joi.string().allow(""),

      svg: Joi.string().allow(""),
    });
  }

  static RedirectDevice() {
    return Joi.object({
      link: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static WebRedirect() {
    return Joi.object({
      link: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static Redirects() {
    return Joi.object({
      ios: this.RedirectDevice(),

      android: this.RedirectDevice(),

      web: this.WebRedirect(),

      force_web: Joi.boolean(),
    });
  }

  static CampaignShortLink() {
    return Joi.object({
      source: Joi.string().allow(""),

      medium: Joi.string().allow(""),
    });
  }

  static Attribution() {
    return Joi.object({
      campaign_cookie_expiry: Joi.string().allow(""),
    });
  }

  static SocialMediaTags() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      image: Joi.string().allow(""),
    });
  }

  static ShortLinkReq() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),

      hash: Joi.string().allow(""),

      active: Joi.boolean(),

      expire_at: Joi.string().allow(""),

      enable_tracking: Joi.boolean(),

      personalized: Joi.boolean(),

      campaign: this.CampaignShortLink(),

      redirects: this.Redirects(),

      attribution: this.Attribution(),

      social_media_tags: this.SocialMediaTags(),

      count: Joi.number(),
    });
  }

  static UrlInfo() {
    return Joi.object({
      original: Joi.string().allow(""),

      short: Joi.string().allow(""),

      hash: Joi.string().allow(""),
    });
  }

  static ShortLinkRes() {
    return Joi.object({
      title: Joi.string().allow(""),

      url: this.UrlInfo(),

      created_by: Joi.string().allow(""),

      app_redirect: Joi.boolean(),

      fallback: Joi.string().allow(""),

      active: Joi.boolean(),

      _id: Joi.string().allow(""),

      enable_tracking: Joi.boolean(),

      expire_at: Joi.string().allow(""),

      application: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      meta: Joi.any(),

      updated_at: Joi.string().allow(""),

      personalized: Joi.boolean(),

      campaign: this.CampaignShortLink(),

      redirects: this.Redirects(),

      attribution: this.Attribution(),

      social_media_tags: this.SocialMediaTags(),

      count: Joi.number(),
    });
  }

  static ShortLinkList() {
    return Joi.object({
      items: Joi.array().items(this.ShortLinkRes()),

      page: this.Page(),
    });
  }

  static ErrorRes() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static FailedResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static CDN() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      absolute_url: Joi.string().allow(""),

      relative_url: Joi.string().allow(""),
    });
  }

  static Upload() {
    return Joi.object({
      expiry: Joi.number().required(),

      url: Joi.string().allow("").required(),
    });
  }

  static StartResponse() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),

      file_path: Joi.string().allow("").required(),

      content_type: Joi.string().allow("").required(),

      method: Joi.string().allow(""),

      namespace: Joi.string().allow("").required(),

      operation: Joi.string().allow("").required(),

      size: Joi.number().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static StartRequest() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),

      content_type: Joi.string().allow("").required(),

      size: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      params: Joi.any(),
    });
  }

  static CompleteResponse() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      file_name: Joi.string().allow("").required(),

      file_path: Joi.string().allow("").required(),

      content_type: Joi.string().allow("").required(),

      namespace: Joi.string().allow("").required(),

      operation: Joi.string().allow("").required(),

      size: Joi.number().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      success: Joi.boolean().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),
    });
  }

  static Opts() {
    return Joi.object({
      attempts: Joi.number(),

      timestamp: Joi.number(),

      delay: Joi.number(),
    });
  }

  static CopyFileTask() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      data: this.BulkRequest().required(),

      opts: this.Opts().required(),

      progress: Joi.number().required(),

      delay: Joi.number().required(),

      timestamp: Joi.number().required(),

      attempts_made: Joi.number().required(),

      stacktrace: Joi.array().items(Joi.string().allow("")),

      finished_on: Joi.number().required(),

      processed_on: Joi.number().required(),
    });
  }

  static BulkUploadResponse() {
    return Joi.object({
      tracking_url: Joi.string().allow("").required(),

      task: this.CopyFileTask().required(),
    });
  }

  static ReqConfiguration() {
    return Joi.object({
      concurrency: Joi.number(),
    });
  }

  static Destination() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      rewrite: Joi.string().allow("").required(),

      basepath: Joi.string().allow(""),
    });
  }

  static BulkRequest() {
    return Joi.object({
      urls: Joi.array().items(Joi.string().allow("")).required(),

      destination: this.Destination().required(),

      configuration: this.ReqConfiguration(),
    });
  }

  static Urls() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      signed_url: Joi.string().allow("").required(),

      expiry: Joi.number().required(),
    });
  }

  static SignUrlResponse() {
    return Joi.object({
      urls: Joi.array().items(this.Urls()).required(),
    });
  }

  static SignUrlRequest() {
    return Joi.object({
      expiry: Joi.number().required(),

      urls: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static DbRecord() {
    return Joi.object({
      success: Joi.boolean().required(),

      tags: Joi.array().items(Joi.string().allow("")).required(),

      _id: Joi.string().allow("").required(),

      file_name: Joi.string().allow("").required(),

      operation: Joi.string().allow(""),

      namespace: Joi.string().allow("").required(),

      content_type: Joi.string().allow("").required(),

      file_path: Joi.string().allow("").required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),
    });
  }

  static BrowseResponse() {
    return Joi.object({
      items: Joi.array().items(this.DbRecord()).required(),

      page: this.Page().required(),
    });
  }

  static ApplicationAboutResponse() {
    return Joi.object({
      application_info: this.ApplicationInfo(),

      company_info: this.CompanyInfo(),

      owner_info: this.OwnerInfo(),
    });
  }

  static ApplicationInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),

      domain: this.Domain(),

      website: this.ApplicationWebsite(),

      cors: this.ApplicationCors(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: this.ApplicationMeta(),

      token: Joi.string().allow(""),

      secret: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      banner: this.SecureUrl(),

      logo: this.SecureUrl(),

      is_active: Joi.boolean(),
    });
  }

  static CompanyInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(this.CompanyAboutAddress()),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static OwnerInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),

      emails: Joi.array().items(this.UserEmail()),

      phone_numbers: Joi.array().items(this.UserPhoneNumber()),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      profile_pic: Joi.string().allow(""),
    });
  }

  static AppVersionRequest() {
    return Joi.object({
      application: this.ApplicationVersionRequest().required(),

      device: this.Device().required(),

      locale: Joi.string().allow(""),

      timezone: Joi.string().allow(""),
    });
  }

  static ApplicationVersionRequest() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      namespace: Joi.string().allow(""),

      token: Joi.string().allow(""),

      version: Joi.string().allow("").required(),
    });
  }

  static Device() {
    return Joi.object({
      build: Joi.number(),

      model: Joi.string().allow(""),

      os: this.OS().required(),
    });
  }

  static OS() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      version: Joi.string().allow(""),
    });
  }

  static SupportedLanguage() {
    return Joi.object({
      name: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static LanguageResponse() {
    return Joi.object({
      items: Joi.array().items(this.SupportedLanguage()),
    });
  }

  static AppStaffResponse() {
    return Joi.object({
      staff_users: Joi.array().items(this.AppStaff()),
    });
  }

  static AppStaffListResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.AppStaff()),
    });
  }

  static UpdateDialog() {
    return Joi.object({
      type: Joi.string().allow(""),

      interval: Joi.number(),
    });
  }

  static OrderingStoreSelectRequest() {
    return Joi.object({
      ordering_store: this.OrderingStoreSelect().required(),
    });
  }

  static OrderingStoreSelect() {
    return Joi.object({
      uid: Joi.number().required(),
    });
  }

  static AppStaff() {
    return Joi.object({
      _id: Joi.string().allow(""),

      order_incent: Joi.boolean(),

      stores: Joi.array().items(Joi.number()),

      application: Joi.string().allow(""),

      title: Joi.string().allow(""),

      user: Joi.string().allow(""),

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      profile_pic_url: Joi.string().allow(""),
    });
  }

  static AppTokenResponse() {
    return Joi.object({
      tokens: this.Tokens(),

      _id: Joi.string().allow(""),

      application: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static Tokens() {
    return Joi.object({
      firebase: this.Firebase(),

      moengage: this.Moengage(),

      segment: this.Segment(),

      gtm: this.Gtm(),

      freshchat: this.Freshchat(),

      safetynet: this.Safetynet(),

      fynd_rewards: this.FyndRewards(),

      google_map: this.GoogleMap(),
    });
  }

  static Firebase() {
    return Joi.object({
      credentials: this.Credentials(),

      enabled: Joi.boolean(),
    });
  }

  static Credentials() {
    return Joi.object({
      ios: this.Ios(),

      android: this.Android(),

      project_id: Joi.string().allow(""),

      gcm_sender_id: Joi.string().allow(""),

      application_id: Joi.string().allow(""),

      api_key: Joi.string().allow(""),
    });
  }

  static Ios() {
    return Joi.object({
      application_id: Joi.string().allow(""),

      api_key: Joi.string().allow(""),
    });
  }

  static Android() {
    return Joi.object({
      application_id: Joi.string().allow(""),

      api_key: Joi.string().allow(""),
    });
  }

  static Moengage() {
    return Joi.object({
      credentials: this.MoengageCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static MoengageCredentials() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  static Segment() {
    return Joi.object({
      credentials: this.SegmentCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static SegmentCredentials() {
    return Joi.object({
      write_key: Joi.string().allow(""),
    });
  }

  static Gtm() {
    return Joi.object({
      credentials: this.GtmCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static GtmCredentials() {
    return Joi.object({
      api_key: Joi.string().allow(""),
    });
  }

  static Freshchat() {
    return Joi.object({
      credentials: this.FreshchatCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static FreshchatCredentials() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      app_key: Joi.string().allow(""),

      web_token: Joi.string().allow(""),
    });
  }

  static Safetynet() {
    return Joi.object({
      credentials: this.SafetynetCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static SafetynetCredentials() {
    return Joi.object({
      api_key: Joi.string().allow(""),
    });
  }

  static FyndRewards() {
    return Joi.object({
      credentials: this.FyndRewardsCredentials(),
    });
  }

  static FyndRewardsCredentials() {
    return Joi.object({
      public_key: Joi.string().allow(""),
    });
  }

  static GoogleMap() {
    return Joi.object({
      credentials: this.GoogleMapCredentials(),
    });
  }

  static GoogleMapCredentials() {
    return Joi.object({
      api_key: Joi.string().allow(""),
    });
  }

  static RewardPointsConfig() {
    return Joi.object({
      credit: this.Credit(),

      debit: this.Debit(),
    });
  }

  static Credit() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static Debit() {
    return Joi.object({
      enabled: Joi.boolean(),

      auto_apply: Joi.boolean(),

      strategy_channel: Joi.string().allow(""),
    });
  }

  static ProductDetailFeature() {
    return Joi.object({
      similar: Joi.array().items(Joi.string().allow("")),

      seller_selection: Joi.boolean(),

      update_product_meta: Joi.boolean(),

      request_product: Joi.boolean(),
    });
  }

  static LaunchPage() {
    return Joi.object({
      page_type: Joi.string().allow(""),

      params: Joi.any(),

      query: Joi.any(),
    });
  }

  static LandingPageFeature() {
    return Joi.object({
      launch_page: this.LaunchPage(),

      continue_as_guest: Joi.boolean(),

      login_btn_text: Joi.string().allow(""),

      show_domain_textbox: Joi.boolean(),

      show_register_btn: Joi.boolean(),
    });
  }

  static RegistrationPageFeature() {
    return Joi.object({
      ask_store_address: Joi.boolean(),
    });
  }

  static AppFeature() {
    return Joi.object({
      product_detail: this.ProductDetailFeature(),

      landing_page: this.LandingPageFeature(),

      registration_page: this.RegistrationPageFeature(),

      home_page: this.HomePageFeature(),

      common: this.CommonFeature(),

      cart: this.CartFeature(),

      qr: this.QrFeature(),

      pcr: this.PcrFeature(),

      order: this.OrderFeature(),

      _id: Joi.string().allow(""),

      app: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static HomePageFeature() {
    return Joi.object({
      order_processing: Joi.boolean(),
    });
  }

  static CommonFeature() {
    return Joi.object({
      communication_optin_dialog: this.CommunicationOptinDialogFeature(),

      deployment_store_selection: this.DeploymentStoreSelectionFeature(),

      listing_price: this.ListingPriceFeature(),

      currency: this.CurrencyFeature(),

      revenue_engine: this.RevenueEngineFeature(),

      feedback: this.FeedbackFeature(),

      compare_products: this.CompareProductsFeature(),

      reward_points: this.RewardPointsConfig(),
    });
  }

  static CommunicationOptinDialogFeature() {
    return Joi.object({
      visibility: Joi.boolean(),
    });
  }

  static DeploymentStoreSelectionFeature() {
    return Joi.object({
      enabled: Joi.boolean(),

      type: Joi.string().allow(""),
    });
  }

  static ListingPriceFeature() {
    return Joi.object({
      value: Joi.string().allow(""),
    });
  }

  static CurrencyFeature() {
    return Joi.object({
      value: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      default_currency: Joi.string().allow(""),
    });
  }

  static RevenueEngineFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static FeedbackFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static CompareProductsFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static CartFeature() {
    return Joi.object({
      gst_input: Joi.boolean(),

      staff_selection: Joi.boolean(),

      placing_for_customer: Joi.boolean(),

      google_map: Joi.boolean(),

      revenue_engine_coupon: Joi.boolean(),
    });
  }

  static QrFeature() {
    return Joi.object({
      application: Joi.boolean(),

      products: Joi.boolean(),

      collections: Joi.boolean(),
    });
  }

  static PcrFeature() {
    return Joi.object({
      staff_selection: Joi.boolean(),
    });
  }

  static OrderFeature() {
    return Joi.object({
      buy_again: Joi.boolean(),
    });
  }

  static AppFeatureRequest() {
    return Joi.object({
      feature: this.AppFeature(),
    });
  }

  static AppFeatureResponse() {
    return Joi.object({
      feature: this.AppFeature(),
    });
  }

  static Application() {
    return Joi.object({
      website: this.ApplicationWebsite(),

      cors: this.ApplicationCors(),

      auth: this.ApplicationAuth(),

      description: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      cache_ttl: Joi.number(),

      is_internal: Joi.boolean(),

      is_active: Joi.boolean(),

      _id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      owner: Joi.string().allow(""),

      company_id: Joi.number(),

      token: Joi.string().allow(""),

      redirections: Joi.array().items(this.ApplicationRedirections()),

      meta: Joi.array().items(this.ApplicationMeta()),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),

      banner: this.SecureUrl(),

      logo: this.SecureUrl(),

      favicon: this.SecureUrl(),

      domains: Joi.array().items(this.Domain()),

      app_type: Joi.string().allow(""),

      mobile_logo: this.SecureUrl(),

      domain: this.Domain(),

      slug: Joi.string().allow(""),
    });
  }

  static UnhandledError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static InvalidPayloadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static SuccessMessageResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static InventoryBrandRule() {
    return Joi.object({
      criteria: Joi.string().allow(""),

      brands: Joi.array().items(Joi.number()),
    });
  }

  static StoreCriteriaRule() {
    return Joi.object({
      companies: Joi.array().items(Joi.number()),

      brands: Joi.array().items(Joi.number()),
    });
  }

  static InventoryStoreRule() {
    return Joi.object({
      criteria: Joi.string().allow(""),

      rules: Joi.array().items(this.StoreCriteriaRule()),

      stores: Joi.array().items(Joi.number()),
    });
  }

  static InventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static StorePriorityRule() {
    return Joi.object({
      enabled: Joi.boolean(),

      storetype_order: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ArticleAssignmentRule() {
    return Joi.object({
      store_priority: this.StorePriorityRule(),
    });
  }

  static InventoryArticleAssignment() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),

      rules: this.ArticleAssignmentRule(),
    });
  }

  static CompanyAboutAddress() {
    return Joi.object({
      pincode: Joi.number(),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
    });
  }

  static UserEmail() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      email: Joi.string().allow(""),
    });
  }

  static UserPhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      country_code: Joi.number(),

      phone: Joi.string().allow(""),
    });
  }

  static ApplicationInformation() {
    return Joi.object({
      address: this.InformationAddress(),

      support: this.InformationSupport(),

      social_links: this.SocialLinks(),

      links: this.Links(),

      copyright_text: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      business_highlights: this.BusinessHighlights(),

      application: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static InformationAddress() {
    return Joi.object({
      loc: Joi.string().allow(""),

      address_line: Joi.array().items(Joi.string().allow("")),

      phone: Joi.array().items(this.InformationPhone()),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static InformationPhone() {
    return Joi.object({
      code: Joi.string().allow(""),

      number: Joi.string().allow(""),
    });
  }

  static InformationSupport() {
    return Joi.object({
      phone: Joi.array().items(Joi.string().allow("")),

      email: Joi.array().items(Joi.string().allow("")),

      timing: Joi.string().allow(""),
    });
  }

  static SocialLinks() {
    return Joi.object({
      facebook: this.FacebookLink(),

      instagram: this.InstagramLink(),

      twitter: this.TwitterLink(),

      pinterest: this.PinterestLink(),

      google_plus: this.GooglePlusLink(),

      youtube: this.YoutubeLink(),

      linked_in: this.LinkedInLink(),

      vimeo: this.VimeoLink(),

      blog_link: this.BlogLink(),
    });
  }

  static FacebookLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static InstagramLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static TwitterLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static PinterestLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static GooglePlusLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static YoutubeLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static LinkedInLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static VimeoLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static BlogLink() {
    return Joi.object({
      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static Links() {
    return Joi.object({
      title: Joi.string().allow(""),

      link: Joi.string().allow(""),
    });
  }

  static BusinessHighlights() {
    return Joi.object({
      _id: Joi.string().allow(""),

      title: Joi.string().allow(""),

      icon: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),
    });
  }

  static ApplicationDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: this.SecureUrl(),

      mobile_logo: this.SecureUrl(),

      favicon: this.SecureUrl(),

      banner: this.SecureUrl(),

      domain: this.Domain(),

      domains: Joi.array().items(this.Domain()),

      _id: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static CurrenciesResponse() {
    return Joi.object({
      items: Joi.array().items(this.Currency()),
    });
  }

  static DefaultCurrency() {
    return Joi.object({
      ref: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static AppCurrencyResponse() {
    return Joi.object({
      application: Joi.string().allow(""),

      default_currency: this.DefaultCurrency(),

      supported_currency: Joi.array().items(this.Currency()),
    });
  }

  static StoreLatLong() {
    return Joi.object({
      type: Joi.string().allow(""),

      coordinates: Joi.array().items(Joi.number()),
    });
  }

  static OptedStoreAddress() {
    return Joi.object({
      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      lat_long: this.StoreLatLong(),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static OrderingStore() {
    return Joi.object({
      address: this.OptedStoreAddress(),

      _id: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      pincode: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static OrderingStores() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.OrderingStore()),

      deployed_stores: Joi.array().items(Joi.number()),

      all_stores: Joi.boolean(),

      enabled: Joi.boolean(),

      type: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      app: Joi.string().allow(""),

      __v: Joi.number(),
    });
  }

  static OrderingStoresResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.OrderingStore()),
    });
  }

  static AggregatorConfigDetail() {
    return Joi.object({
      user_id: Joi.string().allow("").allow(null),

      secret: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      merchant_key: Joi.string().allow("").allow(null),

      merchant_id: Joi.string().allow("").allow(null),

      pin: Joi.string().allow("").allow(null),

      sdk: Joi.boolean().allow(null),

      verify_api: Joi.string().allow("").allow(null),

      api: Joi.string().allow("").allow(null),

      config_type: Joi.string().allow("").required(),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      env: Joi.string().allow("").required(),

      stripe: this.AggregatorConfigDetail(),

      simpl: this.AggregatorConfigDetail(),

      rupifi: this.AggregatorConfigDetail(),

      ccavenue: this.AggregatorConfigDetail(),

      juspay: this.AggregatorConfigDetail(),

      payumoney: this.AggregatorConfigDetail(),

      mswipe: this.AggregatorConfigDetail(),

      razorpay: this.AggregatorConfigDetail(),

      success: Joi.boolean().required(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static HttpErrorCodeAndResponse() {
    return Joi.object({
      error: this.ErrorCodeAndDescription().required(),

      success: Joi.boolean().required(),
    });
  }

  static AttachCardRequest() {
    return Joi.object({
      name_on_card: Joi.string().allow(""),

      refresh: Joi.boolean().allow(null),

      nickname: Joi.string().allow(""),

      card_id: Joi.string().allow("").allow(null).required(),
    });
  }

  static AttachCardsResponse() {
    return Joi.object({
      data: Joi.any().required(),

      message: Joi.string().allow(""),

      success: Joi.boolean().required(),
    });
  }

  static CardPaymentGateway() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      api: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),
    });
  }

  static ActiveCardPaymentGatewayResponse() {
    return Joi.object({
      cards: this.CardPaymentGateway().required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static Card() {
    return Joi.object({
      card_token: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_issuer: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),
    });
  }

  static ListCardsResponse() {
    return Joi.object({
      data: Joi.array().items(this.Card()),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static DeletehCardRequest() {
    return Joi.object({
      card_id: Joi.string().allow("").allow(null).required(),
    });
  }

  static DeleteCardsResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),
    });
  }

  static ValidateCustomerRequest() {
    return Joi.object({
      merchant_params: Joi.any(),

      phone_number: Joi.string().allow("").required(),

      order_items: Joi.array().items(Joi.any()),

      billing_address: Joi.any(),

      delivery_address: Joi.any(),

      transaction_amount_in_paise: Joi.number().required(),

      payload: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      error: Joi.any().allow(null),

      data: Joi.any().allow(null),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      transaction_token: Joi.string().allow("").allow(null),

      verified: Joi.boolean().allow(null),

      order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      delivery_address_id: Joi.string().allow("").allow(null),

      cart_id: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      method: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null).required(),

      merchant_order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      currency: Joi.string().allow("").allow(null),

      upi_poll_url: Joi.string().allow("").allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      polling_url: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      amount: Joi.number().allow(null),

      aggregator_order_id: Joi.string().allow(""),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      vpa: Joi.string().allow(""),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      redirect_url: Joi.string().allow("").allow(null),

      retry: Joi.boolean().required(),

      success: Joi.boolean().allow(null),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      api_link: Joi.string().allow("").allow(null),

      payment_flow: Joi.string().allow("").allow(null),

      data: Joi.any().allow(null),

      payment_flow_data: Joi.string().allow("").allow(null),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      razorpay: this.AggregatorRoute(),

      stripe: this.AggregatorRoute(),

      bqr_razorpay: this.AggregatorRoute(),

      simpl: this.AggregatorRoute(),

      upi_razorpay: this.AggregatorRoute(),

      rupifi: this.AggregatorRoute(),

      ccavenue: this.AggregatorRoute(),

      payubiz: this.AggregatorRoute(),

      jiopay: this.AggregatorRoute(),

      mswipe: this.AggregatorRoute(),

      juspay: this.AggregatorRoute(),

      fynd: this.AggregatorRoute(),

      epaylater: this.AggregatorRoute(),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string().allow("").required(),

      small: Joi.string().allow("").required(),
    });
  }

  static IntentApp() {
    return Joi.object({
      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      logos: this.PaymentModeLogo(),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      exp_month: Joi.number().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      cod_limit: Joi.number().allow(null),

      card_type: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(this.IntentAppErrorList()),

      card_reference: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      intent_flow: Joi.boolean().allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      display_priority: Joi.number().allow(null),

      name: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      fynd_vpa: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(this.IntentApp()),

      retry_count: Joi.number().allow(null),

      remaining_limit: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      logo_url: this.PaymentModeLogo(),

      card_name: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      is_pay_by_card_pl: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      anonymous_enable: Joi.boolean().allow(null),

      save_card: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      display_priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      list: Joi.array().items(this.PaymentModeList()),
    });
  }

  static PaymentOptionAndFlow() {
    return Joi.object({
      payment_flows: this.PaymentFlow().required(),

      payment_option: Joi.array().items(this.RootPaymentMode()).required(),
    });
  }

  static PaymentModeRouteResponse() {
    return Joi.object({
      payment_options: this.PaymentOptionAndFlow().required(),

      success: Joi.boolean().required(),
    });
  }

  static RupifiBannerData() {
    return Joi.object({
      kyc_url: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static RupifiBannerResponse() {
    return Joi.object({
      data: this.RupifiBannerData().required(),

      success: Joi.boolean().required(),
    });
  }

  static EpaylaterBannerData() {
    return Joi.object({
      display: Joi.boolean().required(),

      message: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static EpaylaterBannerResponse() {
    return Joi.object({
      data: this.EpaylaterBannerData().required(),

      success: Joi.boolean().required(),
    });
  }

  static ResendOrCancelPaymentRequest() {
    return Joi.object({
      device_id: Joi.string().allow("").allow(null),

      request_type: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static LinkStatus() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
    });
  }

  static ResendOrCancelPaymentResponse() {
    return Joi.object({
      data: this.LinkStatus().required(),

      success: Joi.boolean().required(),
    });
  }

  static renderHTMLRequest() {
    return Joi.object({
      base64_html: Joi.string().allow("").required(),

      returntype: Joi.string().allow("").allow(null),
    });
  }

  static renderHTMLResponse() {
    return Joi.object({
      html: Joi.string().allow("").required(),
    });
  }

  static ValidateVPARequest() {
    return Joi.object({
      upi_vpa: Joi.string().allow("").required(),
    });
  }

  static ValidateUPI() {
    return Joi.object({
      upi_vpa: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      is_valid: Joi.boolean().required(),

      status: Joi.string().allow("").required(),
    });
  }

  static ValidateVPAResponse() {
    return Joi.object({
      data: this.ValidateUPI().required(),

      success: Joi.boolean().required(),
    });
  }

  static TransferItemsDetails() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      logo_large: Joi.string().allow("").required(),

      id: Joi.number().required(),

      display_name: Joi.string().allow(""),

      logo_small: Joi.string().allow("").required(),
    });
  }

  static TransferModeDetails() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      items: Joi.array().items(this.TransferItemsDetails()),
    });
  }

  static TransferModeResponse() {
    return Joi.object({
      data: Joi.array().items(this.TransferModeDetails()).required(),
    });
  }

  static UpdateRefundTransferModeRequest() {
    return Joi.object({
      transfer_mode: Joi.string().allow("").required(),

      enable: Joi.boolean().required(),
    });
  }

  static UpdateRefundTransferModeResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      transfer_mode: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      branch_name: Joi.string().allow(""),

      id: Joi.number().required(),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      show_beneficiary_details: Joi.boolean(),

      beneficiaries: Joi.array().items(this.OrderBeneficiaryDetails()),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      success: Joi.boolean(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationRequest() {
    return Joi.object({
      otp: Joi.string().allow("").required(),

      hash_key: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean(),
    });
  }

  static WrongOtpError() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean().required(),

      success: Joi.string().allow("").required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      wallet: Joi.string().allow("").allow(null),

      account_no: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      address: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      mobile: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      transfer_mode: Joi.string().allow("").required(),

      otp: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      details: this.BeneficiaryModeDetails().required(),

      request_id: Joi.string().allow(""),

      delights: Joi.boolean().required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      data: Joi.any(),

      message: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean(),

      success: Joi.boolean().required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      details: this.BankDetailsForOTP().required(),
    });
  }

  static WalletOtpRequest() {
    return Joi.object({
      mobile: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static WalletOtpResponse() {
    return Joi.object({
      is_verified_flag: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").required(),

      success: Joi.boolean(),
    });
  }

  static SetDefaultBeneficiaryRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),
    });
  }

  static SetDefaultBeneficiaryResponse() {
    return Joi.object({
      is_beneficiary_set: Joi.boolean().required(),

      success: Joi.boolean(),
    });
  }

  static GetPaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),

      payment_link_current_status: Joi.string().allow("").allow(null),

      payment_link_url: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      external_order_id: Joi.string().allow("").allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      polling_timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),
    });
  }

  static ErrorDescription() {
    return Joi.object({
      cancelled: Joi.boolean().allow(null),

      invalid_id: Joi.boolean().allow(null),

      expired: Joi.boolean().allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      payment_transaction_id: Joi.string().allow("").allow(null),

      msg: Joi.string().allow("").allow(null),
    });
  }

  static CreatePaymentLinkMeta() {
    return Joi.object({
      checkout_mode: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      assign_card_id: Joi.string().allow("").allow(null),

      amount: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkRequest() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      description: Joi.string().allow("").allow(null),

      mobile_number: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      meta: this.CreatePaymentLinkMeta().required(),

      external_order_id: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkResponse() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),

      payment_link_url: Joi.string().allow("").allow(null),

      polling_timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),
    });
  }

  static CancelOrResendPaymentLinkRequest() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").required(),
    });
  }

  static ResendPaymentLinkResponse() {
    return Joi.object({
      polling_timeout: Joi.number().allow(null),

      status_code: Joi.number().required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static CancelPaymentLinkResponse() {
    return Joi.object({
      status_code: Joi.number().required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PollingPaymentLinkResponse() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      http_status: Joi.number().allow(null),

      status: Joi.string().allow("").allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      status_code: Joi.number().allow(null),

      order_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      success: Joi.boolean().allow(null),
    });
  }

  static PaymentMethodsMeta() {
    return Joi.object({
      payment_identifier: Joi.string().allow("").required(),

      payment_gateway: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserPaymentMethods() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      meta: this.PaymentMethodsMeta().required(),
    });
  }

  static CreateOrderUserRequest() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      payment_link_id: Joi.string().allow("").required(),

      failure_callback_url: Joi.string().allow("").required(),

      payment_methods: this.CreateOrderUserPaymentMethods().required(),

      success_callback_url: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),
    });
  }

  static CreateOrderUserData() {
    return Joi.object({
      currency: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      aggregator: Joi.string().allow("").allow(null),
    });
  }

  static CreateOrderUserResponse() {
    return Joi.object({
      callback_url: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      data: this.CreateOrderUserData(),

      status_code: Joi.number().required(),

      order_id: Joi.string().allow("").allow(null),

      payment_confirm_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),
    });
  }

  static BalanceDetails() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      value: Joi.number().required(),

      formatted_value: Joi.string().allow("").required(),
    });
  }

  static CreditSummary() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      status_message: Joi.string().allow("").required(),

      balance: this.BalanceDetails(),

      merchant_customer_ref_id: Joi.string().allow("").required(),
    });
  }

  static CustomerCreditSummaryResponse() {
    return Joi.object({
      data: this.CreditSummary(),

      success: Joi.boolean().required(),
    });
  }

  static RedirectURL() {
    return Joi.object({
      signup_url: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
    });
  }

  static RedirectToAggregatorResponse() {
    return Joi.object({
      data: this.RedirectURL().required(),

      success: Joi.boolean().required(),
    });
  }

  static CreditDetail() {
    return Joi.object({
      is_registered: Joi.boolean().required(),

      signup_url: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
    });
  }

  static CheckCreditResponse() {
    return Joi.object({
      data: this.CreditDetail().required(),

      success: Joi.boolean().required(),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      os_version: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),

      device_type: Joi.string().allow("").allow(null),

      identification_number: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),
    });
  }

  static KYCAddress() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      addressline2: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      addressline1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      land_mark: Joi.string().allow("").allow(null),

      ownership_type: Joi.string().allow("").allow(null),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      fda: Joi.string().allow("").allow(null),

      vintage: Joi.string().allow("").allow(null),

      entity_type: Joi.string().allow("").allow(null),

      address: this.KYCAddress(),

      business_ownership_type: Joi.string().allow("").allow(null),

      business_type: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      gstin: Joi.string().allow("").allow(null),

      fssai: Joi.string().allow("").allow(null),

      shop_and_establishment: Joi.any(),
    });
  }

  static MarketplaceInfo() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      date_of_joining: Joi.string().allow("").allow(null),

      membership_id: Joi.string().allow("").required(),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      voter_id: Joi.string().allow("").allow(null),

      middle_name: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      dob: Joi.string().allow("").allow(null).required(),

      address_as_per_id: this.KYCAddress().required(),

      email_verified: Joi.boolean().required(),

      driving_license: Joi.string().allow("").allow(null),

      mothers_name: Joi.string().allow("").allow(null),

      phone: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").allow(null),

      fathers_name: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      passport: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      mobile_verified: Joi.boolean().required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      device: this.DeviceDetails(),

      business_info: this.BusinessDetails(),

      marketplace_info: this.MarketplaceInfo(),

      mcc: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      personal_info: this.UserPersonalInfoInDetails().required(),
    });
  }

  static OnboardSummary() {
    return Joi.object({
      status: Joi.boolean().required(),

      redirect_url: Joi.string().allow("").required(),

      session: Joi.any().required(),
    });
  }

  static CustomerOnboardingResponse() {
    return Joi.object({
      data: this.OnboardSummary().required(),

      success: Joi.boolean().required(),
    });
  }

  static OrderPage() {
    return Joi.object({
      size: Joi.number(),

      item_total: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),
    });
  }

  static OrderStatuses() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static OrderFilters() {
    return Joi.object({
      statuses: Joi.array().items(this.OrderStatuses()),
    });
  }

  static BreakupValues() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static BagsForReorderArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static BagsForReorder() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      store_id: Joi.number(),

      item_id: Joi.number(),

      article_assignment: this.BagsForReorderArticleAssignment(),

      seller_id: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      total_price: Joi.number(),

      pieces: Joi.number(),

      sizes: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      longitude: Joi.number(),

      address1: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      version: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      latitude: Joi.number(),

      pincode: Joi.string().allow(""),

      address: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      company_id: Joi.number(),

      company_name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(this.AppliedFreeArticles()),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),
    });
  }

  static ItemBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      size: Joi.string().allow(""),

      name: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      brand: this.ItemBrand(),

      id: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      journey_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static Identifiers() {
    return Joi.object({
      sku_code: Joi.string().allow(""),

      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      size: Joi.string().allow(""),

      coupon_value: Joi.number(),

      coupon_effective_discount: Joi.number(),

      delivery_charge: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cashback_applied: Joi.number(),

      cashback: Joi.number(),

      price_marked: Joi.number(),

      amount_paid: Joi.number(),

      cod_charges: Joi.number(),

      item_name: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      identifiers: this.Identifiers(),

      fynd_credits: Joi.number(),

      price_effective: Joi.number(),

      gst_fee: Joi.number(),

      transfer_price: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      discount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      promotion_effective_discount: Joi.number(),

      total_units: Joi.number(),

      brand_calculated_amount: Joi.number(),

      value_of_good: Joi.number(),

      refund_amount: Joi.number(),
    });
  }

  static Prices() {
    return Joi.object({
      coupon_effective_discount: Joi.number(),

      coupon_value: Joi.number(),

      delivery_charge: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cashback_applied: Joi.number(),

      cashback: Joi.number(),

      price_marked: Joi.number(),

      amount_paid: Joi.number(),

      cod_charges: Joi.number(),

      fynd_credits: Joi.number(),

      price_effective: Joi.number(),

      transfer_price: Joi.number(),

      gst_tax_percentage: Joi.number(),

      discount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      promotion_effective_discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      value_of_good: Joi.number(),

      refund_amount: Joi.number(),
    });
  }

  static Bags() {
    return Joi.object({
      can_return: Joi.boolean(),

      applied_promos: Joi.array().items(this.AppliedPromos()),

      seller_identifier: Joi.string().allow(""),

      item: this.Item(),

      quantity: Joi.number(),

      parent_promo_bags: Joi.any(),

      can_cancel: Joi.boolean(),

      line_number: Joi.number(),

      delivery_date: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      current_status: this.CurrentStatus(),

      financial_breakup: Joi.array().items(this.FinancialBreakup()),

      prices: this.Prices(),

      id: Joi.number(),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      time: Joi.string().allow(""),

      tracking_details: Joi.array().items(this.NestedTrackingDetails()),

      status: Joi.string().allow(""),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      status: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static TimeStampData() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static Promise() {
    return Joi.object({
      show_promise: Joi.boolean(),

      timestamp: this.TimeStampData(),
    });
  }

  static Shipments() {
    return Joi.object({
      total_details: this.ShipmentTotalDetails(),

      breakup_values: Joi.array().items(this.BreakupValues()),

      invoice: this.Invoice(),

      delivery_address: this.DeliveryAddress(),

      comment: Joi.string().allow(""),

      user_info: this.ShipmentUserInfo(),

      order_type: Joi.string().allow(""),

      size_info: Joi.any(),

      delivery_date: Joi.string().allow(""),

      total_bags: Joi.number(),

      custom_meta: Joi.array().items(Joi.any()),

      can_return: Joi.boolean(),

      fulfilling_store: this.FulfillingStore(),

      track_url: Joi.string().allow(""),

      fulfilling_company: this.FulfillingCompany(),

      bags: Joi.array().items(this.Bags()),

      traking_no: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      can_break: Joi.any(),

      tracking_details: Joi.array().items(this.TrackingDetails()),

      awb_no: Joi.string().allow(""),

      prices: this.Prices(),

      shipment_status: this.ShipmentStatus(),

      show_track_link: Joi.boolean(),

      beneficiary_details: Joi.boolean(),

      payment: this.ShipmentPayment(),

      refund_details: Joi.any(),

      promise: this.Promise(),

      shipment_created_at: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      order_id: Joi.string().allow(""),

      show_download_invoice: Joi.boolean(),

      returnable_date: Joi.string().allow(""),

      need_help_url: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      breakup_values: Joi.array().items(this.BreakupValues()),

      bags_for_reorder: Joi.array().items(this.BagsForReorder()),

      user_info: this.UserInfo(),

      order_created_time: Joi.string().allow(""),

      total_shipments_in_order: Joi.number(),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(this.Shipments()),
    });
  }

  static OrderList() {
    return Joi.object({
      page: this.OrderPage(),

      filters: this.OrderFilters(),

      items: Joi.array().items(this.OrderSchema()),
    });
  }

  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OrderById() {
    return Joi.object({
      order: this.OrderSchema(),
    });
  }

  static ShipmentById() {
    return Joi.object({
      shipment: this.Shipments(),
    });
  }

  static ResponseGetInvoiceShipment() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      presigned_type: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      account_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),
    });
  }

  static ShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(this.Track()),
    });
  }

  static CustomerDetailsResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

      success: Joi.boolean(),

      resend_timer: Joi.number(),
    });
  }

  static VerifyOtp() {
    return Joi.object({
      otp_code: Joi.string().allow(""),

      request_id: Joi.string().allow(""),
    });
  }

  static VerifyOtpResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static BagReasonMeta() {
    return Joi.object({
      show_text_area: Joi.boolean(),
    });
  }

  static QuestionSet() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static BagReasons() {
    return Joi.object({
      reasons: Joi.array().items(this.BagReasons()),

      meta: this.BagReasonMeta(),

      qc_type: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow(""),

      question_set: Joi.array().items(this.QuestionSet()),

      id: Joi.number(),
    });
  }

  static ShipmentBagReasons() {
    return Joi.object({
      reasons: Joi.array().items(this.BagReasons()),

      success: Joi.boolean(),
    });
  }

  static ShipmentReason() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      flow: Joi.string().allow(""),

      priority: Joi.number(),

      reason_id: Joi.number(),

      show_text_area: Joi.boolean(),

      feedback_type: Joi.string().allow(""),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(this.ShipmentReason()),
    });
  }

  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ProductsReasonsData() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ProductsReasons() {
    return Joi.object({
      data: this.ProductsReasonsData(),

      filters: Joi.array().items(this.ProductsReasonsFilters()),
    });
  }

  static EntityReasonData() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static EntitiesReasons() {
    return Joi.object({
      data: this.EntityReasonData(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static ReasonsData() {
    return Joi.object({
      products: Joi.array().items(this.ProductsReasons()),

      entities: Joi.array().items(this.EntitiesReasons()),
    });
  }

  static ProductsDataUpdatesFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
    });
  }

  static ProductsDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(this.ProductsDataUpdatesFilters()),
    });
  }

  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static DataUpdates() {
    return Joi.object({
      products: Joi.array().items(this.ProductsDataUpdates()),

      entities: Joi.array().items(this.EntitiesDataUpdates()),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(this.Products()),

      reasons: this.ReasonsData(),

      data_updates: this.DataUpdates(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      shipments: Joi.array().items(this.ShipmentsRequest()),

      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(this.StatuesRequest()),

      task: Joi.boolean(),
    });
  }

  static StatusesBodyResponse() {
    return Joi.object({
      shipments: Joi.array().items(Joi.any()),
    });
  }

  static ShipmentApplicationStatusResponse() {
    return Joi.object({
      statuses: Joi.array().items(this.StatusesBodyResponse()),
    });
  }

  static RewardsArticle() {
    return Joi.object({
      id: Joi.string().allow(""),

      points: Joi.number(),

      price: Joi.number(),
    });
  }

  static CatalogueOrderResponse() {
    return Joi.object({
      articles: Joi.array().items(this.RewardsArticle()),
    });
  }

  static CatalogueOrderRequest() {
    return Joi.object({
      articles: Joi.array().items(this.RewardsArticle()),
    });
  }

  static PointsResponse() {
    return Joi.object({
      points: Joi.number(),
    });
  }

  static ReferralDetailsUser() {
    return Joi.object({
      blocked: Joi.boolean(),

      points: Joi.number(),

      redeemed: Joi.boolean(),

      referral_code: Joi.string().allow(""),
    });
  }

  static Offer() {
    return Joi.object({
      _schedule: this.Schedule(),

      active: Joi.boolean(),

      application_id: Joi.string().allow(""),

      banner_image: this.Asset(),

      created_at: Joi.string().allow(""),

      name: Joi.string().allow(""),

      rule: Joi.any(),

      share: this.ShareMessages(),

      sub_text: Joi.string().allow(""),

      text: Joi.string().allow(""),

      type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      updated_by: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static Schedule() {
    return Joi.object({
      duration: Joi.number(),

      end: Joi.string().allow(""),

      start: Joi.string().allow(""),

      cron: Joi.string().allow(""),
    });
  }

  static Error() {
    return Joi.object({
      code: Joi.number(),

      exception: Joi.string().allow(""),

      info: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static ShareMessages() {
    return Joi.object({
      email: Joi.number(),

      facebook: Joi.string().allow(""),

      fallback: Joi.string().allow(""),

      message: Joi.string().allow(""),

      messenger: Joi.string().allow(""),

      sms: Joi.string().allow(""),

      text: Joi.string().allow(""),

      twitter: Joi.string().allow(""),

      whatsapp: Joi.string().allow(""),
    });
  }

  static ReferralDetailsResponse() {
    return Joi.object({
      referral: this.Offer(),

      share: this.ShareMessages(),

      user: this.ReferralDetailsUser(),

      referrer_info: Joi.string().allow(""),

      terms_conditions_link: Joi.string().allow(""),
    });
  }

  static OrderDiscountRequest() {
    return Joi.object({
      order_amount: Joi.number().required(),

      currency: Joi.string().allow(""),
    });
  }

  static OrderDiscountRuleBucket() {
    return Joi.object({
      high: Joi.number(),

      low: Joi.number(),

      max: Joi.number(),

      value: Joi.number(),

      value_type: Joi.string().allow(""),
    });
  }

  static DiscountProperties() {
    return Joi.object({
      absolute: Joi.number(),

      currency: Joi.string().allow(""),

      display_absolute: Joi.string().allow(""),

      display_percent: Joi.string().allow(""),

      percent: Joi.number(),
    });
  }

  static OrderDiscountResponse() {
    return Joi.object({
      order_amount: Joi.number(),

      points: Joi.number(),

      discount: this.DiscountProperties(),

      base_discount: this.DiscountProperties(),

      applied_rule_bucket: this.OrderDiscountRuleBucket(),
    });
  }

  static RedeemReferralCodeRequest() {
    return Joi.object({
      device_id: Joi.string().allow(""),

      referral_code: Joi.string().allow(""),
    });
  }

  static RedeemReferralCodeResponse() {
    return Joi.object({
      redeemed: Joi.boolean(),

      message: Joi.string().allow(""),

      referrer_info: Joi.string().allow(""),

      referrer_id: Joi.string().allow(""),

      points: Joi.number(),
    });
  }

  static PointsHistoryResponse() {
    return Joi.object({
      items: Joi.array().items(this.PointsHistory()),

      page: this.Page(),
    });
  }

  static PointsHistory() {
    return Joi.object({
      _id: Joi.string().allow(""),

      application_id: Joi.string().allow(""),

      claimed: Joi.boolean(),

      created_at: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      meta: Joi.any(),

      points: Joi.number(),

      remaining_points: Joi.number(),

      text_1: Joi.string().allow(""),

      text_2: Joi.string().allow(""),

      text_3: Joi.string().allow(""),

      txn_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      article_uid: Joi.string().allow("").required(),

      quantity: Joi.number(),

      shipment_type: Joi.string().allow("").required(),
    });
  }

  static UpdateCartShipmentRequest() {
    return Joi.object({
      shipments: Joi.array().items(this.UpdateCartShipmentItem()).required(),
    });
  }

  static Files() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      pos: Joi.boolean(),

      meta: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      files: Joi.array().items(this.Files()),

      staff: this.StaffCheckout(),

      ordering_store: Joi.number().allow(null),

      custom_meta: Joi.array().items(this.CartCheckoutCustomMeta()),

      delivery_address: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow(""),

      extra_meta: Joi.any(),

      order_type: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),

      aggregator: Joi.string().allow(""),

      pick_at_store_uid: Joi.number().allow(null),

      billing_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static CartDeliveryModesResponse() {
    return Joi.object({
      pickup_stores: Joi.array().items(Joi.number()),

      available_modes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code: Joi.string().allow(""),

      id: Joi.number(),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      phone: Joi.string().allow(""),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(this.PickupStoreDetail()),
    });
  }

  static PincodeErrorSchemaResponse() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }

  static PincodeLatLongData() {
    return Joi.object({
      type: Joi.string().allow(""),

      coordinates: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PincodeMetaResponse() {
    return Joi.object({
      internal_zone_id: Joi.number(),

      zone: Joi.string().allow(""),
    });
  }

  static PincodeParentsResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CountryMetaResponse() {
    return Joi.object({
      isd_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      lat_long: this.PincodeLatLongData(),

      meta: this.PincodeMetaResponse(),

      error: this.PincodeErrorSchemaResponse().required(),

      sub_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      parents: Joi.array().items(this.PincodeParentsResponse()),

      uid: Joi.string().allow(""),

      meta_code: this.CountryMetaResponse(),
    });
  }

  static PincodeApiResponse() {
    return Joi.object({
      error: this.PincodeErrorSchemaResponse().required(),

      data: Joi.array().items(this.PincodeDataResponse()),

      success: Joi.boolean().required(),
    });
  }

  static TATCategoryRequest() {
    return Joi.object({
      level: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static TATArticlesRequest() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      category: this.TATCategoryRequest(),

      manufacturing_time: Joi.number(),
    });
  }

  static TATLocationDetailsRequest() {
    return Joi.object({
      from_pincode: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      articles: Joi.array().items(this.TATArticlesRequest()),
    });
  }

  static TATViewRequest() {
    return Joi.object({
      action: Joi.string().allow(""),

      location_details: Joi.array().items(this.TATLocationDetailsRequest()),

      source: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      journey: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      identifier: Joi.string().allow(""),
    });
  }

  static TATErrorSchemaResponse() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }

  static TATFormattedResponse() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static TATTimestampResponse() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static TATPromiseResponse() {
    return Joi.object({
      formatted: this.TATFormattedResponse(),

      timestamp: this.TATTimestampResponse(),
    });
  }

  static TATArticlesResponse() {
    return Joi.object({
      _manufacturing_time_seconds: Joi.number(),

      is_cod_available: Joi.boolean(),

      manufacturing_time_unit: Joi.string().allow(""),

      category: this.TATCategoryRequest(),

      error: this.TATErrorSchemaResponse(),

      promise: this.TATPromiseResponse(),

      manufacturing_time: Joi.number(),
    });
  }

  static TATLocationDetailsResponse() {
    return Joi.object({
      from_pincode: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      articles: Joi.array().items(this.TATArticlesResponse()),
    });
  }

  static TATViewResponse() {
    return Joi.object({
      action: Joi.string().allow(""),

      is_cod_available: Joi.boolean(),

      location_details: Joi.array().items(this.TATLocationDetailsResponse()),

      success: Joi.boolean(),

      source: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      error: this.TATErrorSchemaResponse(),

      journey: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      request_uuid: Joi.string().allow(""),

      to_city: Joi.string().allow(""),

      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static DP() {
    return Joi.object({
      fm_priority: Joi.number().required(),

      lm_priority: Joi.number().required(),

      rvp_priority: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      operations: Joi.array().items(Joi.string().allow("")).required(),

      area_code: Joi.string().allow("").allow(null),

      assign_dp_from_sb: Joi.boolean(),

      internal_account_id: Joi.string().allow(""),

      external_account_id: Joi.string().allow("").allow(null),

      transport_mode: Joi.string().allow(""),
    });
  }

  static LogisticsResponse() {
    return Joi.object({
      dp: Joi.object().pattern(/\S/, this.DP()),
    });
  }

  static CountryEntityResponse() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      meta: this.CountryMetaResponse(),

      logistics: this.LogisticsResponse(),

      type: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      parent_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static CountryListResponse() {
    return Joi.object({
      results: Joi.array().items(this.CountryEntityResponse()),
    });
  }

  static GetZoneFromPincodeViewRequest() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static GetZoneFromPincodeViewResponse() {
    return Joi.object({
      zones: Joi.array().items(Joi.string().allow("")).required(),

      serviceability_type: Joi.string().allow("").required(),
    });
  }
}

class LocationValidator {
  static validateLocationObj() {
    return Joi.object({
      pincode: Joi.string(),
      country: Joi.string(),
      country_iso_code: Joi.string(),
      city: Joi.string(),
      location: Joi.object({
        longitude: Joi.string(),
        latitude: Joi.string(),
      }),
    });
  }
}

module.exports = { LocationValidator, Validator };
