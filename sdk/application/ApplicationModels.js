const Joi = require("joi");

class Validator {
  static ProductListingActionPage() {
    return Joi.object({
      params: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.any(),
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

      meta: this.Meta(),

      alt: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      description: Joi.string().allow(""),

      uid: Joi.number(),

      action: this.ProductListingAction(),

      name: Joi.string().allow(""),

      logo: this.Media(),
    });
  }

  static ProductCategoryMap() {
    return Joi.object({
      l1: this.ProductBrand(),

      l3: this.ProductBrand(),

      l2: this.ProductBrand(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
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
      effective: this.Price(),

      marked: this.Price(),
    });
  }

  static CustomMetaFields() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
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
      details: Joi.array().items(this.ProductDetailAttribute()),

      title: Joi.string().allow(""),
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
      teaser_tag: Joi.string().allow(""),

      action: this.ProductListingAction(),

      discount: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_dependent: Joi.boolean(),

      brand: this.ProductBrand(),

      item_code: Joi.string().allow(""),

      category_map: this.ProductCategoryMap(),

      type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      seo: this.ApplicationItemSEO(),

      price: this.ProductListingPrice(),

      color: Joi.string().allow(""),

      categories: Joi.array().items(this.ProductBrand()),

      image_nature: Joi.string().allow(""),

      description: Joi.string().allow(""),

      attributes: Joi.any(),

      product_online_date: Joi.string().allow(""),

      name: Joi.string().allow(""),

      rating: Joi.number(),

      _custom_meta: Joi.array().items(this.CustomMetaFields()),

      highlights: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      moq: this.ApplicationItemMOQ(),

      medias: Joi.array().items(this.Media()),

      item_type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      tags: Joi.array().items(Joi.string().allow("")),

      net_quantity: this.NetQuantity(),

      has_variant: Joi.boolean(),

      rating_count: Joi.number(),
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
      col_5: this.ColumnHeader(),

      col_3: this.ColumnHeader(),

      col_4: this.ColumnHeader(),

      col_1: this.ColumnHeader(),

      col_2: this.ColumnHeader(),

      col_6: this.ColumnHeader(),
    });
  }

  static SizeChartValues() {
    return Joi.object({
      col_5: Joi.string().allow(""),

      col_3: Joi.string().allow(""),

      col_4: Joi.string().allow(""),

      col_1: Joi.string().allow(""),

      col_2: Joi.string().allow(""),

      col_6: Joi.string().allow(""),
    });
  }

  static SizeChart() {
    return Joi.object({
      unit: Joi.string().allow(""),

      description: Joi.string().allow(""),

      size_tip: Joi.string().allow(""),

      headers: this.ColumnHeaders(),

      image: Joi.string().allow(""),

      sizes: Joi.array().items(this.SizeChartValues()),

      title: Joi.string().allow(""),
    });
  }

  static Dimension() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      height: Joi.number().required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),
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

      dimension: this.Dimension(),

      weight: this.Weight(),

      value: Joi.string().allow(""),

      seller_identifiers: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),
    });
  }

  static ProductSizes() {
    return Joi.object({
      stores: this.ProductSizeStores(),

      price: this.ProductListingPrice(),

      discount: Joi.string().allow(""),

      size_chart: this.SizeChart(),

      sellable: Joi.boolean(),

      multi_size: Joi.boolean(),

      sizes: Joi.array().items(this.ProductSize()),
    });
  }

  static AttributeDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static AttributeMetadata() {
    return Joi.object({
      details: Joi.array().items(this.AttributeDetail()),

      title: Joi.string().allow(""),
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
      subtitle: Joi.string().allow(""),

      attributes_metadata: Joi.array().items(this.AttributeMetadata()),

      items: Joi.array().items(this.ProductDetail()),

      title: Joi.string().allow(""),
    });
  }

  static ProductFrequentlyComparedSimilarResponse() {
    return Joi.object({
      similars: this.ProductCompareResponse(),
    });
  }

  static ProductVariantItemResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: this.ProductListingAction(),

      medias: Joi.array().items(this.Media()),

      name: Joi.string().allow(""),

      is_available: Joi.boolean(),

      color: Joi.string().allow(""),

      value: Joi.string().allow(""),

      color_name: Joi.string().allow(""),
    });
  }

  static ProductVariantResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      items: Joi.array().items(this.ProductVariantItemResponse()),

      header: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
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

  static CompanyDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ProductStockStatusItem() {
    return Joi.object({
      item_id: Joi.number(),

      identifier: Joi.any(),

      uid: Joi.string().allow(""),

      price: this.ProductStockPrice(),

      seller: this.Seller(),

      store: this.StoreDetail(),

      size: Joi.string().allow(""),

      quantity: Joi.number(),

      company: this.CompanyDetail(),
    });
  }

  static ProductStockStatusResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductStockStatusItem()),
    });
  }

  static ProductStockPolling() {
    return Joi.object({
      page: this.Page().required(),

      items: Joi.array().items(this.ProductStockStatusItem()),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      max: Joi.number(),

      selected_max: Joi.number(),

      display_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      query_format: Joi.string().allow(""),

      count: Joi.number(),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      value: Joi.string().allow(""),

      selected_min: Joi.number(),

      is_selected: Joi.boolean().required(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      values: Joi.array().items(this.ProductFiltersValue()).required(),

      key: this.ProductFiltersKey().required(),
    });
  }

  static ProductVariantListingResponse() {
    return Joi.object({
      header: Joi.string().allow(""),

      total: Joi.number(),

      items: Joi.array().items(this.ProductVariantItemResponse()),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      teaser_tag: Joi.string().allow(""),

      action: this.ProductListingAction(),

      discount: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_dependent: Joi.boolean(),

      brand: this.ProductBrand(),

      item_code: Joi.string().allow(""),

      category_map: this.ProductCategoryMap(),

      type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      seo: this.ApplicationItemSEO(),

      price: this.ProductListingPrice(),

      color: Joi.string().allow(""),

      categories: Joi.array().items(this.ProductBrand()),

      image_nature: Joi.string().allow(""),

      sellable: Joi.boolean(),

      variants: Joi.array().items(this.ProductVariantListingResponse()),

      description: Joi.string().allow(""),

      attributes: Joi.any(),

      product_online_date: Joi.string().allow(""),

      name: Joi.string().allow(""),

      rating: Joi.number(),

      identifiers: Joi.array().items(Joi.string().allow("")),

      _custom_meta: Joi.array().items(this.CustomMetaFields()),

      highlights: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      moq: this.ApplicationItemMOQ(),

      medias: Joi.array().items(this.Media()),

      item_type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        this.ProductDetailGroupedAttribute()
      ),

      tags: Joi.array().items(Joi.string().allow("")),

      net_quantity: this.NetQuantity(),

      has_variant: Joi.boolean(),

      rating_count: Joi.number(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      sort_on: Joi.array().items(this.ProductSortOn()),

      filters: Joi.array().items(this.ProductFilters()),

      items: Joi.array().items(this.ProductListingDetail()),

      page: this.Page().required(),
    });
  }

  static ImageUrls() {
    return Joi.object({
      portrait: this.Media(),

      landscape: this.Media(),
    });
  }

  static BrandItem() {
    return Joi.object({
      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      uid: Joi.number(),

      action: this.ProductListingAction(),

      discount: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: this.ImageUrls(),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: this.Media(),
    });
  }

  static BrandListingResponse() {
    return Joi.object({
      page: this.Page().required(),

      items: Joi.array().items(this.BrandItem()),
    });
  }

  static BrandDetailResponse() {
    return Joi.object({
      description: Joi.string().allow(""),

      uid: Joi.number(),

      banners: this.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      logo: this.Media(),
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
      portrait: this.Media().required(),

      landscape: this.Media().required(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: this.ProductListingAction(),

      banners: this.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: this.ProductListingAction(),

      banners: this.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      childs: Joi.array().items(this.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: this.ProductListingAction(),

      banners: this.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      childs: Joi.array().items(this.SecondLevelChild()),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      action: this.ProductListingAction().required(),

      banners: this.CategoryBanner().required(),

      name: Joi.string().allow("").required(),

      childs: Joi.array().items(this.Child()),
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
      uid: Joi.number(),

      banners: this.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      logo: this.Media(),
    });
  }

  static HomeListingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      page: this.Page().required(),

      items: Joi.array().items(this.ProductListingDetail()),
    });
  }

  static Department() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: this.Media(),

      priority_order: Joi.number(),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(this.Department()),
    });
  }

  static AutocompleteItem() {
    return Joi.object({
      display: Joi.string().allow(""),

      action: this.ProductListingAction(),

      _custom_json: Joi.any(),

      logo: this.Media(),

      type: Joi.string().allow(""),
    });
  }

  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(this.AutocompleteItem()),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      tags: Joi.array().items(this.CollectionListingFilterTag()),

      type: Joi.array().items(this.CollectionListingFilterType()),
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
      meta: Joi.any(),

      priority: Joi.number(),

      action: this.ProductListingAction(),

      _custom_json: Joi.any(),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      banners: this.ImageUrls(),

      app_id: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(this.CollectionQuery()),

      slug: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      logo: this.Media(),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      page: this.Page().required(),

      filters: this.CollectionListingFilter(),

      items: Joi.array().items(this.GetCollectionDetailNest()),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      meta: Joi.any(),

      priority: Joi.number(),

      _custom_json: Joi.any(),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      banners: this.ImageUrls(),

      app_id: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(this.CollectionQuery()),

      slug: Joi.string().allow(""),

      logo: this.Media(),
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
      lat_long: this.LatLong(),

      store_email: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),
    });
  }

  static StoreListingResponse() {
    return Joi.object({
      page: this.Page().required(),

      items: Joi.array().items(this.Store()).required(),
    });
  }

  static StoreDepartments() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      priority_order: Joi.number(),
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
      mobile_no: this.SellerPhoneNumber(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static StoreAddressSerializer() {
    return Joi.object({
      latitude: Joi.number(),

      longitude: Joi.number(),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),
    });
  }

  static CompanyStore() {
    return Joi.object({
      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static AppStore() {
    return Joi.object({
      uid: Joi.number(),

      manager: this.StoreManagerSerializer(),

      name: Joi.string().allow(""),

      address: this.StoreAddressSerializer(),

      departments: Joi.array().items(this.StoreDepartments()),

      company: this.CompanyStore(),

      contact_numbers: Joi.array().items(this.SellerPhoneNumber()),
    });
  }

  static ApplicationStoreListing() {
    return Joi.object({
      page: this.Page(),

      filters: Joi.array().items(this.StoreDepartments()),

      items: Joi.array().items(this.AppStore()),
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

      opening: this.Time(),

      closing: this.Time(),

      weekday: Joi.string().allow(""),
    });
  }

  static StoreDetails() {
    return Joi.object({
      uid: Joi.number(),

      manager: this.StoreManagerSerializer(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      timing: Joi.array().items(this.StoreTiming()),

      address: this.StoreAddressSerializer(),

      departments: Joi.array().items(this.StoreDepartments()),

      company: this.CompanyStore(),

      contact_numbers: Joi.array().items(this.SellerPhoneNumber()),
    });
  }

  static ProductGroupPrice() {
    return Joi.object({
      min_marked: Joi.number(),

      min_effective: Joi.number(),

      max_effective: Joi.number(),

      currency: Joi.any(),

      max_marked: Joi.number(),
    });
  }

  static ProductDetails() {
    return Joi.object({
      is_set: Joi.boolean(),

      template_tag: Joi.any(),

      images: Joi.array().items(Joi.any()),

      item_code: Joi.any(),

      short_description: Joi.any(),

      brand_uid: Joi.number(),

      out_of_stock: Joi.boolean(),

      image_nature: Joi.any(),

      description: Joi.any(),

      attributes: Joi.any(),

      name: Joi.any(),

      rating: Joi.number(),

      rating_count: Joi.number(),

      highlights: Joi.array().items(Joi.any()),

      media: Joi.array().items(Joi.any()),

      slug: Joi.any(),

      identifier: Joi.any(),

      grouped_attributes: Joi.any(),

      has_variant: Joi.boolean(),

      hsn_code: Joi.number(),

      country_of_origin: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      value: Joi.any(),

      display: Joi.any(),

      is_available: Joi.boolean(),
    });
  }

  static ProductInGroup() {
    return Joi.object({
      min_quantity: Joi.number(),

      price: this.ProductGroupPrice(),

      product_details: this.ProductDetails(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      sizes: Joi.array().items(this.Size()),

      product_uid: Joi.number().required(),
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

      slug: Joi.any(),

      meta: Joi.any(),

      company_id: Joi.number(),

      products: Joi.array().items(this.ProductInGroup()).required(),

      verified_by: this.UserDetail(),

      created_by: this.UserDetail(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      name: Joi.any().required(),

      choice: Joi.any(),

      modified_by: this.UserDetail(),

      modified_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.any()),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),
    });
  }

  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(this.ProductGroupingModel()),
    });
  }

  static SellerV2() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      count: Joi.number(),
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
      details: Joi.array().items(this.DetailsSchemaV2()),

      title: Joi.string().allow(""),
    });
  }

  static ProductStockUnitPriceV2() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      price: Joi.number(),
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
      sizes: Joi.array().items(this.ProductSetDistributionSizeV2()),
    });
  }

  static ProductSetV2() {
    return Joi.object({
      quantity: Joi.number(),

      size_distribution: this.ProductSetDistributionV2(),
    });
  }

  static ProductStockPriceV2() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),
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

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static SellerGroupAttributes() {
    return Joi.object({
      details: Joi.array().items(this.DetailsSchemaV2()),

      title: Joi.string().allow(""),
    });
  }

  static ArticleAssignmentV2() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static StrategyWiseListingSchemaV2() {
    return Joi.object({
      quantity: Joi.number(),

      tat: Joi.number(),

      pincode: Joi.number(),

      distance: Joi.number(),
    });
  }

  static ProductSizePriceResponseV2() {
    return Joi.object({
      seller: this.SellerV2(),

      discount: Joi.string().allow(""),

      marketplace_attributes: Joi.array().items(
        this.MarketPlaceSttributesSchemaV2()
      ),

      price_per_unit: this.ProductStockUnitPriceV2(),

      set: this.ProductSetV2(),

      price: this.ProductStockPriceV2(),

      article_id: Joi.string().allow(""),

      store: this.StoreV2(),

      pincode: Joi.number(),

      long_lat: Joi.array().items(Joi.number()),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

      special_badge: Joi.string().allow(""),

      return_config: this.ReturnConfigSchemaV2(),

      seller_count: Joi.number(),

      item_type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(this.SellerGroupAttributes()),

      article_assignment: this.ArticleAssignmentV2(),

      price_per_piece: this.ProductStockPriceV2(),

      strategy_wise_listing: Joi.array().items(
        this.StrategyWiseListingSchemaV2()
      ),

      quantity: Joi.number(),
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
      sort_on: Joi.array().items(this.ProductSizeSellerFilterSchemaV2()),

      page: this.Page().required(),

      items: Joi.array().items(this.ProductSizePriceResponseV2()),
    });
  }

  static RawBreakup() {
    return Joi.object({
      mrp_total: Joi.number(),

      gift_card: Joi.number(),

      delivery_charge: Joi.number(),

      you_saved: Joi.number(),

      cod_charge: Joi.number(),

      discount: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),

      fynd_cash: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      subtotal: Joi.number(),

      convenience_fee: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      is_applied: Joi.boolean(),

      code: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      coupon_value: Joi.number(),

      uid: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),
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

  static CartBreakup() {
    return Joi.object({
      raw: this.RawBreakup(),

      display: Joi.array().items(this.DisplayBreakup()),

      coupon: this.CouponBreakup(),

      loyalty_points: this.LoyaltyPoints(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static Tags() {
    return Joi.object({
      tags: Joi.any(),
    });
  }

  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductAction() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      query: this.ActionQuery(),
    });
  }

  static CartProduct() {
    return Joi.object({
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      item_code: Joi.string().allow("").allow(null),

      images: Joi.array().items(this.ProductImage()),

      tags: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(this.CategoryInfo()),

      brand: this.BaseInfo(),

      uid: Joi.number(),

      teaser_tag: this.Tags(),

      action: this.ProductAction(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      effective: Joi.number(),

      selling: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: this.ProductPrice(),

      converted: this.ProductPrice(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      base: this.BasePrice(),

      converted: this.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      cart_item_meta: Joi.any(),

      type: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      store: this.BaseInfo(),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      is_gift_visible: Joi.boolean(),

      identifier: Joi.any(),

      price: this.ArticlePriceInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      gift_card: Joi.any(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      seller: this.BaseInfo(),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      offer: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: this.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.array().items(this.BuyRules()),

      discount_rules: Joi.array().items(this.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      applied_free_articles: Joi.array().items(this.AppliedFreeArticles()),
    });
  }

  static CouponDetails() {
    return Joi.object({
      discount_total_quantity: Joi.number(),

      discount_single_quantity: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      key: Joi.string().allow(""),

      product: this.CartProduct(),

      price_per_unit: this.ProductPriceInfo(),

      availability: this.ProductAvailability(),

      parent_item_identifiers: Joi.any(),

      promo_meta: this.PromoMeta(),

      article: this.ProductArticle(),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      is_set: Joi.boolean(),

      promotions_applied: Joi.array().items(this.AppliedPromotion()),

      bulk_offer: Joi.any(),

      price: this.ProductPriceInfo(),

      coupon: this.CouponDetails(),

      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      identifiers: this.CartProductIdentifer().required(),
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

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      buy_now: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      pan_config: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      currency: this.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      items: Joi.array().items(this.CartProductInfo()),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_promise: this.ShipmentPromise(),

      payment_selection_lock: this.PaymentSelectionLock(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      pos: Joi.boolean(),

      article_id: Joi.string().allow(""),

      article_assignment: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      display: Joi.string().allow(""),

      seller_id: Joi.number(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(this.AddProductCart()),

      new_cart: Joi.boolean(),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),

      partial: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: this.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      item_index: Joi.number(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      article_id: Joi.string().allow(""),

      identifiers: this.CartProductIdentifer().required(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static UpdateCartRequest() {
    return Joi.object({
      items: Joi.array().items(this.UpdateProductCart()),

      operation: Joi.string().allow("").required(),
    });
  }

  static UpdateCartDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: this.CartDetailResponse(),
    });
  }

  static DeleteCartDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      title: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      is_applicable: Joi.boolean(),

      coupon_value: Joi.number(),

      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static GetCouponResponse() {
    return Joi.object({
      available_coupon_list: Joi.array().items(this.Coupon()),

      page: this.PageCoupon(),
    });
  }

  static ApplyCouponRequest() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),
    });
  }

  static OfferPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      auto_applied: Joi.boolean(),

      type: Joi.string().allow(""),

      margin: Joi.number(),

      best: Joi.boolean(),

      total: Joi.number(),

      price: this.OfferPrice(),

      quantity: Joi.number(),
    });
  }

  static OfferSeller() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static BulkPriceOffer() {
    return Joi.object({
      offers: Joi.array().items(this.OfferItem()),

      seller: this.OfferSeller(),
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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      google_map_point: Joi.any(),

      name: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      city: Joi.string().allow(""),

      is_active: Joi.boolean(),

      area_code_slug: Joi.string().allow(""),

      email: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      geo_location: this.GeoLocation(),

      state: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),
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

      success: Joi.boolean(),

      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),
    });
  }

  static DeleteAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      is_deleted: Joi.boolean(),
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
      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      valid: Joi.boolean(),

      discount: Joi.number(),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      success: Joi.boolean().required(),

      coupon_validity: this.CouponValidity(),

      message: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      order_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      shipments: Joi.number(),

      promise: this.ShipmentPromise(),

      fulfillment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      items: Joi.array().items(this.CartProductInfo()),

      fulfillment_id: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      error: Joi.boolean(),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      shipments: Joi.array().items(this.ShipmentResponse()),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      currency: this.CartCurrency(),

      breakup_values: this.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      delivery_promise: this.ShipmentPromise(),

      payment_selection_lock: this.PaymentSelectionLock(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      billing_address: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      payment_mode: Joi.string().allow("").required(),

      delivery_address: Joi.any(),

      ordering_store: Joi.number().allow(null),

      extra_meta: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      payment_identifier: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      staff: this.StaffCheckout(),

      callback_url: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      buy_now: Joi.boolean(),

      delivery_charges: Joi.number(),

      user_type: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      cart_id: Joi.number(),

      items: Joi.array().items(this.CartProductInfo()),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),

      delivery_promise: this.ShipmentPromise(),

      success: Joi.boolean(),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      cod_charges: Joi.number(),

      error_message: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      currency: this.CartCurrency(),

      cod_message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      payment_selection_lock: this.PaymentSelectionLock(),

      order_id: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      data: Joi.any(),

      app_intercept_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      cart: this.CheckCart(),
    });
  }

  static GiftDetail() {
    return Joi.object({
      is_gift_applied: Joi.boolean(),

      gift_message: Joi.string().allow(""),
    });
  }

  static ArticleGiftDetail() {
    return Joi.object({
      article_id: this.GiftDetail(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      gift_details: this.ArticleGiftDetail(),

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
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      user: Joi.any(),

      meta: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      buy_now: Joi.boolean(),

      cart_id: Joi.number(),

      items: Joi.array().items(this.CartProductInfo()),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      breakup_values: this.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      shared_cart_details: this.SharedCartDetails(),

      delivery_promise: this.ShipmentPromise(),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      currency: this.CartCurrency(),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      payment_selection_lock: this.PaymentSelectionLock(),
    });
  }

  static SharedCartResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      cart: this.SharedCart(),
    });
  }

  static FreeGiftItems() {
    return Joi.object({
      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      free_gift_items: Joi.array().items(this.FreeGiftItems()),

      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.any(),

      discount_rules: Joi.array().items(Joi.any()),

      valid_till: Joi.string().allow(""),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static LadderPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      offer_price: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      margin: Joi.number(),

      price: this.LadderPrice(),

      max_quantity: Joi.number(),

      min_quantity: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      free_gift_items: Joi.array().items(this.FreeGiftItems()),

      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.any(),

      discount_rules: Joi.array().items(Joi.any()),

      calculate_on: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      offer_prices: Joi.array().items(this.LadderOfferItem()),
    });
  }

  static CurrencyInfo() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static LadderPriceOffers() {
    return Joi.object({
      available_offers: Joi.array().items(this.LadderPriceOffer()),

      currency: this.CurrencyInfo(),
    });
  }

  static ApplicationResponse() {
    return Joi.object({
      application: this.Application(),
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

  static LocationCountry() {
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
    });
  }

  static Locations() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),
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

      ticket: this.Ticket().required(),
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

      category: Joi.string().allow("").required(),

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

      sub_navigation: Joi.array().items(this.SubNavigationReference()),
    });
  }

  static SubNavigationReference() {
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

      phone: this.InformationPhone(),

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
      name: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      logo: this.SecureUrl().required(),

      mobile_logo: this.SecureUrl().required(),

      favicon: this.SecureUrl().required(),

      banner: this.SecureUrl().required(),

      domain: this.Domain(),

      domains: Joi.array().items(this.Domain()),

      _id: Joi.string().allow(""),
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
      merchant_key: Joi.string().allow("").allow(null),

      pin: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").allow(null),

      merchant_id: Joi.string().allow("").allow(null),

      key: Joi.string().allow("").required(),

      api: Joi.string().allow("").allow(null),

      sdk: Joi.boolean().allow(null),

      config_type: Joi.string().allow("").required(),

      verify_api: Joi.string().allow("").allow(null),

      secret: Joi.string().allow("").required(),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      juspay: this.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),

      payumoney: this.AggregatorConfigDetail(),

      simpl: this.AggregatorConfigDetail(),

      stripe: this.AggregatorConfigDetail(),

      ccavenue: this.AggregatorConfigDetail(),

      rupifi: this.AggregatorConfigDetail(),

      razorpay: this.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      mswipe: this.AggregatorConfigDetail(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static HttpErrorCodeAndResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      error: this.ErrorCodeAndDescription().required(),
    });
  }

  static AttachCardRequest() {
    return Joi.object({
      refresh: Joi.boolean().allow(null),

      name_on_card: Joi.string().allow(""),

      card_id: Joi.string().allow("").allow(null).required(),

      nickname: Joi.string().allow(""),
    });
  }

  static AttachCardsResponse() {
    return Joi.object({
      data: Joi.any().required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static CardPaymentGateway() {
    return Joi.object({
      api: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static ActiveCardPaymentGatewayResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      cards: this.CardPaymentGateway().required(),
    });
  }

  static Card() {
    return Joi.object({
      exp_year: Joi.number().allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      card_name: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_issuer: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),
    });
  }

  static ListCardsResponse() {
    return Joi.object({
      data: Joi.array().items(this.Card()),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static DeletehCardRequest() {
    return Joi.object({
      card_id: Joi.string().allow("").allow(null).required(),
    });
  }

  static DeleteCardsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").allow(null),
    });
  }

  static ValidateCustomerRequest() {
    return Joi.object({
      merchant_params: Joi.any(),

      delivery_address: Joi.any(),

      payload: Joi.string().allow("").allow(null),

      billing_address: Joi.any(),

      phone_number: Joi.string().allow("").required(),

      order_items: Joi.array().items(Joi.any()),

      transaction_amount_in_paise: Joi.number().required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      data: Joi.any().required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      transaction_token: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null).required(),

      aggregator: Joi.string().allow("").required(),

      verified: Joi.boolean().allow(null),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      delivery_address_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      timeout: Joi.number().allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      timeout: Joi.number().allow(null),

      status: Joi.string().allow(""),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").allow(null),

      upi_poll_url: Joi.string().allow("").allow(null),

      aggregator_order_id: Joi.string().allow(""),

      vpa: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      success: Joi.boolean().required(),

      polling_url: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      virtual_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      email: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      redirect_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      retry: Joi.boolean().required(),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      small: Joi.string().allow("").required(),

      large: Joi.string().allow("").required(),
    });
  }

  static IntentApp() {
    return Joi.object({
      logos: this.PaymentModeLogo(),

      package_name: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      card_number: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      card_reference: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      logo_url: this.PaymentModeLogo(),

      intent_app: Joi.array().items(this.IntentApp()),

      card_isin: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      display_name: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(this.IntentAppErrorList()),

      display_priority: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_issuer: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      timeout: Joi.number().allow(null),

      cod_limit: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      remaining_limit: Joi.number().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      anonymous_enable: Joi.boolean().allow(null),

      list: Joi.array().items(this.PaymentModeList()),

      save_card: Joi.boolean().allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),

      display_priority: Joi.number().required(),

      aggregator_name: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").required(),
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
      jiopay: this.AggregatorRoute(),

      payubiz: this.AggregatorRoute(),

      juspay: this.AggregatorRoute(),

      simpl: this.AggregatorRoute(),

      stripe: this.AggregatorRoute(),

      ccavenue: this.AggregatorRoute(),

      rupifi: this.AggregatorRoute(),

      razorpay: this.AggregatorRoute(),

      fynd: this.AggregatorRoute(),

      upi_razorpay: this.AggregatorRoute(),

      bqr_razorpay: this.AggregatorRoute(),

      epaylater: this.AggregatorRoute(),

      mswipe: this.AggregatorRoute(),
    });
  }

  static PaymentOptionAndFlow() {
    return Joi.object({
      payment_option: Joi.array().items(this.RootPaymentMode()).required(),

      payment_flows: this.PaymentFlow().required(),
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

      status: Joi.string().allow(""),

      message: Joi.string().allow(""),
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
      request_type: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),
    });
  }

  static LinkStatus() {
    return Joi.object({
      status: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
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
      status: Joi.string().allow("").required(),

      is_valid: Joi.boolean().required(),

      upi_vpa: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),
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
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      logo_small: Joi.string().allow("").required(),

      logo_large: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),
    });
  }

  static TransferModeDetails() {
    return Joi.object({
      items: Joi.array().items(this.TransferItemsDetails()),

      display_name: Joi.string().allow("").required(),
    });
  }

  static TransferModeResponse() {
    return Joi.object({
      data: Joi.array().items(this.TransferModeDetails()).required(),
    });
  }

  static UpdateRefundTransferModeRequest() {
    return Joi.object({
      enable: Joi.boolean().required(),

      transfer_mode: Joi.string().allow("").required(),
    });
  }

  static UpdateRefundTransferModeResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      modified_on: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      id: Joi.number().required(),

      mobile: Joi.string().allow(""),

      delights_user_name: Joi.string().allow("").allow(null),

      comment: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      subtitle: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array().items(this.OrderBeneficiaryDetails()),

      show_beneficiary_details: Joi.boolean(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      bank_name: Joi.string().allow("").required(),

      success: Joi.boolean(),

      branch_name: Joi.string().allow("").required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationRequest() {
    return Joi.object({
      hash_key: Joi.string().allow("").required(),

      otp: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow("").required(),
    });
  }

  static WrongOtpError() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      success: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean().required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      address: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      vpa: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      wallet: Joi.string().allow("").allow(null),

      account_holder: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      details: this.BeneficiaryModeDetails().required(),

      transfer_mode: Joi.string().allow("").required(),

      otp: Joi.string().allow(""),

      delights: Joi.boolean().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      data: Joi.any(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),
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
      success: Joi.boolean(),

      request_id: Joi.string().allow("").required(),

      is_verified_flag: Joi.string().allow("").required(),
    });
  }

  static SetDefaultBeneficiaryRequest() {
    return Joi.object({
      beneficiary_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static SetDefaultBeneficiaryResponse() {
    return Joi.object({
      success: Joi.boolean(),

      is_beneficiary_set: Joi.boolean().required(),
    });
  }

  static GetPaymentLinkResponse() {
    return Joi.object({
      payment_link_current_status: Joi.string().allow("").allow(null),

      payment_link_url: Joi.string().allow("").allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      success: Joi.boolean().required(),

      polling_timeout: Joi.number().allow(null),

      status_code: Joi.number().required(),

      external_order_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),
    });
  }

  static ErrorDescription() {
    return Joi.object({
      msg: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      invalid_id: Joi.boolean().allow(null),

      cancelled: Joi.boolean().allow(null),

      amount: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      payment_transaction_id: Joi.string().allow("").allow(null),
    });
  }

  static CreatePaymentLinkMeta() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      assign_card_id: Joi.string().allow("").allow(null),

      cart_id: Joi.string().allow("").required(),

      amount: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkRequest() {
    return Joi.object({
      mobile_number: Joi.string().allow("").required(),

      description: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      meta: this.CreatePaymentLinkMeta().required(),

      external_order_id: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkResponse() {
    return Joi.object({
      payment_link_url: Joi.string().allow("").allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      polling_timeout: Joi.number().allow(null),

      status_code: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static CancelOrResendPaymentLinkRequest() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").required(),
    });
  }

  static ResendPaymentLinkResponse() {
    return Joi.object({
      status_code: Joi.number().required(),

      success: Joi.boolean().required(),

      polling_timeout: Joi.number().allow(null),

      message: Joi.string().allow("").required(),
    });
  }

  static CancelPaymentLinkResponse() {
    return Joi.object({
      status_code: Joi.number().required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static PollingPaymentLinkResponse() {
    return Joi.object({
      status: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      success: Joi.boolean().allow(null),

      http_status: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      status_code: Joi.number().allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }

  static PaymentMethodsMeta() {
    return Joi.object({
      payment_gateway: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserPaymentMethods() {
    return Joi.object({
      meta: this.PaymentMethodsMeta().required(),

      mode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserRequest() {
    return Joi.object({
      payment_methods: this.CreateOrderUserPaymentMethods().required(),

      failure_callback_url: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      payment_link_id: Joi.string().allow("").required(),

      success_callback_url: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),
    });
  }

  static CreateOrderUserData() {
    return Joi.object({
      customer_id: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      aggregator: Joi.string().allow("").allow(null),
    });
  }

  static CreateOrderUserResponse() {
    return Joi.object({
      callback_url: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      data: this.CreateOrderUserData(),

      success: Joi.boolean().required(),

      status_code: Joi.number().required(),

      payment_confirm_url: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),
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
      merchant_customer_ref_id: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      status_message: Joi.string().allow("").required(),

      balance: this.BalanceDetails(),
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
      status: Joi.boolean().required(),

      signup_url: Joi.string().allow("").required(),
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
      status: Joi.boolean().required(),

      is_registered: Joi.boolean().required(),

      signup_url: Joi.string().allow("").required(),
    });
  }

  static CheckCreditResponse() {
    return Joi.object({
      data: this.CreditDetail().required(),

      success: Joi.boolean().required(),
    });
  }

  static KYCAddress() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      land_mark: Joi.string().allow("").allow(null),

      ownership_type: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      addressline2: Joi.string().allow("").allow(null),

      addressline1: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      business_ownership_type: Joi.string().allow("").allow(null),

      address: this.KYCAddress(),

      name: Joi.string().allow("").allow(null),

      fssai: Joi.string().allow("").allow(null),

      shop_and_establishment: Joi.any(),

      entity_type: Joi.string().allow("").allow(null),

      vintage: Joi.string().allow("").allow(null),

      fda: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      gstin: Joi.string().allow("").allow(null),

      business_type: Joi.string().allow("").allow(null),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      os_version: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),

      identification_number: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      device_type: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      address_as_per_id: this.KYCAddress().required(),

      email_verified: Joi.boolean().required(),

      gender: Joi.string().allow("").allow(null),

      phone: Joi.string().allow("").required(),

      fathers_name: Joi.string().allow("").allow(null),

      passport: Joi.string().allow("").allow(null),

      voter_id: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      mobile_verified: Joi.boolean().required(),

      middle_name: Joi.string().allow("").allow(null),

      driving_license: Joi.string().allow("").allow(null),

      mothers_name: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      dob: Joi.string().allow("").allow(null).required(),
    });
  }

  static MarketplaceInfo() {
    return Joi.object({
      date_of_joining: Joi.string().allow("").allow(null),

      membership_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      business_info: this.BusinessDetails(),

      device: this.DeviceDetails(),

      personal_info: this.UserPersonalInfoInDetails().required(),

      mcc: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      marketplace_info: this.MarketplaceInfo(),

      source: Joi.string().allow("").required(),
    });
  }

  static OnboardSummary() {
    return Joi.object({
      session: Joi.any().required(),

      status: Joi.boolean().required(),

      redirect_url: Joi.string().allow("").required(),
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
      current: Joi.number(),

      type: Joi.string().allow(""),

      size: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),
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

  static BagsForReorderArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static BagsForReorder() {
    return Joi.object({
      item_id: Joi.number(),

      article_assignment: this.BagsForReorderArticleAssignment(),

      seller_id: Joi.number(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static UserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      price_effective: Joi.number(),

      refund_credit: Joi.number(),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      fynd_credits: Joi.number(),

      refund_amount: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      transfer_price: Joi.number(),

      brand_calculated_amount: Joi.number(),

      cod_charges: Joi.number(),

      discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      delivery_charge: Joi.number(),

      cashback: Joi.number(),

      amount_paid: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      coupon_effective_discount: Joi.number(),

      cashback_applied: Joi.number(),

      price_marked: Joi.number(),
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
      refund_credit: Joi.number(),

      size: Joi.string().allow(""),

      price_effective: Joi.number(),

      gst_tax_percentage: Joi.number(),

      hsn_code: Joi.string().allow(""),

      value_of_good: Joi.number(),

      fynd_credits: Joi.number(),

      refund_amount: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      transfer_price: Joi.number(),

      brand_calculated_amount: Joi.number(),

      cod_charges: Joi.number(),

      discount: Joi.number(),

      gst_tag: Joi.string().allow(""),

      promotion_effective_discount: Joi.number(),

      delivery_charge: Joi.number(),

      cashback: Joi.number(),

      gst_fee: Joi.number(),

      total_units: Joi.number(),

      identifiers: this.Identifiers(),

      amount_paid: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      coupon_effective_discount: Joi.number(),

      cashback_applied: Joi.number(),

      item_name: Joi.string().allow(""),

      price_marked: Joi.number(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(this.AppliedFreeArticles()),
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
      image: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      size: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      id: Joi.number(),

      brand: this.ItemBrand(),
    });
  }

  static Bags() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      returnable_date: Joi.string().allow(""),

      current_status: this.CurrentStatus(),

      parent_promo_bags: Joi.any(),

      prices: this.Prices(),

      delivery_date: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      financial_breakup: Joi.array().items(this.FinancialBreakup()),

      can_return: Joi.boolean(),

      id: Joi.number(),

      applied_promos: Joi.array().items(this.AppliedPromos()),

      item: this.Item(),

      quantity: Joi.number(),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      version: Joi.string().allow(""),

      city: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),

      updated_at: Joi.string().allow(""),
    });
  }

  static TimeStampData() {
    return Joi.object({
      max: Joi.string().allow(""),

      min: Joi.string().allow(""),
    });
  }

  static Promise() {
    return Joi.object({
      timestamp: this.TimeStampData(),

      show_promise: Joi.boolean(),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      company_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_id: Joi.number(),

      code: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      sizes: Joi.number(),

      total_price: Joi.number(),

      pieces: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      tracking_details: Joi.array().items(this.NestedTrackingDetails()),

      is_current: Joi.boolean(),

      status: Joi.string().allow(""),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      custom_meta: Joi.array().items(Joi.any()),

      can_break: Joi.any(),

      order_type: Joi.string().allow(""),

      bags: Joi.array().items(this.Bags()),

      delivery_address: this.DeliveryAddress(),

      dp_name: Joi.string().allow(""),

      promise: this.Promise(),

      user_info: this.ShipmentUserInfo(),

      can_return: Joi.boolean(),

      awb_no: Joi.string().allow(""),

      need_help_url: Joi.string().allow(""),

      show_download_invoice: Joi.boolean(),

      show_track_link: Joi.boolean(),

      fulfilling_store: this.FulfillingStore(),

      refund_details: Joi.any(),

      returnable_date: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      prices: this.Prices(),

      size_info: Joi.any(),

      total_bags: Joi.number(),

      breakup_values: Joi.array().items(this.BreakupValues()),

      payment: this.ShipmentPayment(),

      shipment_id: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      fulfilling_company: this.FulfillingCompany(),

      total_details: this.ShipmentTotalDetails(),

      beneficiary_details: Joi.boolean(),

      invoice: this.Invoice(),

      can_cancel: Joi.boolean(),

      tracking_details: Joi.array().items(this.TrackingDetails()),

      shipment_created_at: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      shipment_status: this.ShipmentStatus(),

      traking_no: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      bags_for_reorder: Joi.array().items(this.BagsForReorder()),

      total_shipments_in_order: Joi.number(),

      order_created_time: Joi.string().allow(""),

      user_info: this.UserInfo(),

      breakup_values: Joi.array().items(this.BreakupValues()),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
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
      presigned_url: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      presigned_type: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      last_location_recieved_at: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

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
      order_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      resend_timer: Joi.number(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      request_id: Joi.string().allow(""),
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
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static BagReasons() {
    return Joi.object({
      qc_type: Joi.array().items(Joi.string().allow("")),

      meta: this.BagReasonMeta(),

      display_name: Joi.string().allow(""),

      id: Joi.number(),

      reasons: Joi.array().items(this.BagReasons()),

      question_set: Joi.array().items(this.QuestionSet()),
    });
  }

  static ShipmentBagReasons() {
    return Joi.object({
      success: Joi.boolean(),

      reasons: Joi.array().items(this.BagReasons()),
    });
  }

  static ShipmentReason() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      priority: Joi.number(),

      reason_id: Joi.number(),

      flow: Joi.string().allow(""),

      feedback_type: Joi.string().allow(""),

      show_text_area: Joi.boolean(),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(this.ShipmentReason()),
    });
  }

  static ProductsReasonsData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
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
      products: Joi.array().items(this.ProductsDataUpdates1()),

      entities: Joi.array().items(this.EntitiesDataUpdates()),
    });
  }

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      reasons: this.ReasonsData(),

      data_updates: this.DataUpdates(),

      products: Joi.array().items(this.Products()),

      identifier: Joi.string().allow("").required(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      shipments: Joi.array().items(this.ShipmentsRequest1()),

      exclude_bags_next_state: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

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

  static ProductsReasonsData1() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static ProductsReasonsFilters1() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ProductsReasons1() {
    return Joi.object({
      data: this.ProductsReasonsData1(),

      filters: Joi.array().items(this.ProductsReasonsFilters1()),
    });
  }

  static EntityReasonData1() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static EntitiesReasons1() {
    return Joi.object({
      data: this.EntityReasonData1(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static ReasonsData1() {
    return Joi.object({
      products: Joi.array().items(this.ProductsReasons1()),

      entities: Joi.array().items(this.EntitiesReasons1()),
    });
  }

  static ProductsDataUpdatesFilters1() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ProductsDataUpdates1() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(this.ProductsDataUpdatesFilters1()),
    });
  }

  static Products1() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ShipmentsRequest1() {
    return Joi.object({
      reasons: this.ReasonsData1(),

      identifier: Joi.string().allow("").required(),

      data_updates: this.DataUpdates(),

      products: Joi.array().items(this.Products1()),
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
      billing_address_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      aggregator: Joi.string().allow(""),

      delivery_address: Joi.any(),

      billing_address: Joi.any(),

      extra_meta: Joi.any(),

      address_id: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      merchant_code: Joi.string().allow(""),

      order_type: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      pick_at_store_uid: Joi.number().allow(null),

      files: Joi.array().items(this.Files()),

      payment_params: Joi.any().allow(null),

      meta: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      ordering_store: Joi.number().allow(null),

      staff: this.StaffCheckout(),
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
      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      pincode: Joi.number(),

      uid: Joi.number(),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      email: Joi.string().allow(""),
    });
  }

  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(this.PickupStoreDetail()),
    });
  }

  static PincodeMetaResponse() {
    return Joi.object({
      zone: Joi.string().allow(""),

      internal_zone_id: Joi.number(),
    });
  }

  static PincodeErrorSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),
    });
  }

  static PincodeParentsResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static PincodeDataResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      meta: this.PincodeMetaResponse(),

      error: this.PincodeErrorSchemaResponse().required(),

      parents: Joi.array().items(this.PincodeParentsResponse()),

      display_name: Joi.string().allow(""),

      sub_type: Joi.string().allow(""),
    });
  }

  static PincodeApiResponse() {
    return Joi.object({
      data: Joi.array().items(this.PincodeDataResponse()),

      success: Joi.boolean().required(),

      error: this.PincodeErrorSchemaResponse().required(),
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
      available_quantity: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),

      category: this.TATCategoryRequest(),
    });
  }

  static TATLocationDetailsRequest() {
    return Joi.object({
      articles: Joi.array().items(this.TATArticlesRequest()),

      fulfillment_id: Joi.number(),

      from_pincode: Joi.string().allow(""),
    });
  }

  static TATViewRequest() {
    return Joi.object({
      action: Joi.string().allow(""),

      source: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      location_details: Joi.array().items(this.TATLocationDetailsRequest()),

      journey: Joi.string().allow(""),
    });
  }

  static TATErrorSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").allow(null),

      value: Joi.string().allow("").allow(null),
    });
  }

  static TATTimestampResponse() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static TATFormattedResponse() {
    return Joi.object({
      max: Joi.string().allow(""),

      min: Joi.string().allow(""),
    });
  }

  static TATPromiseResponse() {
    return Joi.object({
      timestamp: this.TATTimestampResponse(),

      formatted: this.TATFormattedResponse(),
    });
  }

  static TATArticlesResponse() {
    return Joi.object({
      _manufacturing_time_seconds: Joi.number(),

      promise: this.TATPromiseResponse(),

      manufacturing_time: Joi.number(),

      category: this.TATCategoryRequest(),

      error: this.TATErrorSchemaResponse(),

      manufacturing_time_unit: Joi.string().allow(""),

      is_cod_available: Joi.boolean(),
    });
  }

  static TATLocationDetailsResponse() {
    return Joi.object({
      articles: Joi.array().items(this.TATArticlesResponse()),

      fulfillment_id: Joi.number(),

      from_pincode: Joi.string().allow(""),
    });
  }

  static TATViewResponse() {
    return Joi.object({
      action: Joi.string().allow(""),

      source: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      to_pincode: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      stormbreaker_uuid: Joi.string().allow(""),

      success: Joi.boolean(),

      request_uuid: Joi.string().allow(""),

      error: this.TATErrorSchemaResponse(),

      location_details: Joi.array().items(this.TATLocationDetailsResponse()),

      journey: Joi.string().allow(""),

      to_city: Joi.string().allow(""),

      is_cod_available: Joi.boolean(),
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
      serviceability_type: Joi.string().allow("").required(),

      zones: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
}

class LocationValidator {
  static validateLocationObj() {
    return Joi.object({
      pincode: Joi.string().required(),
      country: Joi.string().required(),
      city: Joi.string(),
      location: Joi.object({
        longitude: Joi.string(),
        latitude: Joi.string(),
      }),
    });
  }
}

module.exports = { LocationValidator, Validator };
