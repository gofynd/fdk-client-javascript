const Joi = require("joi");

class CatalogModel {
  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),
      maximum: Joi.number(),
      minimum: Joi.number(),
    });
  }
  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),
      title: Joi.any(),
    });
  }
  static ApplicationStoreListing() {
    return Joi.object({
      filters: Joi.array().items(Joi.any()),
      items: Joi.array().items(CatalogModel.AppStore()),
      page: CatalogModel.Page(),
    });
  }
  static AppStore() {
    return Joi.object({
      address: CatalogModel.StoreAddressSerializer(),
      company: CatalogModel.CompanyStore(),
      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
      departments: Joi.array().items(CatalogModel.StoreDepartments()),
      manager: CatalogModel.StoreManagerSerializer(),
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static ArticleAssignmentV3() {
    return Joi.object({
      level: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
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
      details: Joi.array().items(CatalogModel.AttributeDetail()),
      title: Joi.string().allow(""),
    });
  }
  static AutocompleteItem() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogModel.ProductListingAction(),
      display: Joi.string().allow(""),
      logo: CatalogModel.Media(),
      type: Joi.string().allow(""),
    });
  }
  static AutoCompleteResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.AutocompleteItem()),
    });
  }
  static BrandDetailResponse() {
    return Joi.object({
      _custom_json: Joi.any(),
      banners: CatalogModel.ImageUrls(),
      description: Joi.string().allow(""),
      logo: CatalogModel.Media(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static BrandItem() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),
      banners: CatalogModel.ImageUrls(),
      departments: Joi.array().items(Joi.string().allow("")),
      description: Joi.string().allow(""),
      discount: Joi.string().allow(""),
      logo: CatalogModel.Media(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static BrandListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.BrandItem()),
      page: CatalogModel.Page().required(),
    });
  }
  static CategoryBanner() {
    return Joi.object({
      landscape: CatalogModel.Media().required(),
      portrait: CatalogModel.Media().required(),
    });
  }
  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.ProductListingAction().required(),
      banners: CatalogModel.CategoryBanner().required(),
      childs: Joi.array().items(CatalogModel.Child()),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      uid: Joi.number().required(),
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
      logo: CatalogModel.Media(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogModel.ProductListingAction(),
      banners: CatalogModel.ImageUrls(),
      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static CollectionDetailResponse() {
    return Joi.object({
      _custom_json: Joi.any(),
      _schedule: Joi.any(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: Joi.any(),
      banners: CatalogModel.ImageUrls(),
      cron: Joi.any(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      logo: CatalogModel.Media(),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      query: Joi.array().items(CatalogModel.CollectionQuery()),
      slug: Joi.string().allow(""),
      sort_on: Joi.string().allow(""),
      tag: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }
  static CollectionListingFilter() {
    return Joi.object({
      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),
      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),
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
  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),
      op: Joi.string().allow("").required(),
      value: Joi.array().items(Joi.any()).required(),
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
      col_2: CatalogModel.ColumnHeader(),
      col_3: CatalogModel.ColumnHeader(),
      col_4: CatalogModel.ColumnHeader(),
      col_5: CatalogModel.ColumnHeader(),
      col_6: CatalogModel.ColumnHeader(),
    });
  }
  static CompanyDetail() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }
  static CompanyStore() {
    return Joi.object({
      business_type: Joi.string().allow(""),
      company_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static CustomMetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }
  static Department() {
    return Joi.object({
      logo: CatalogModel.Media(),
      name: Joi.string().allow(""),
      priority_order: Joi.number(),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
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
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Department()),
    });
  }
  static DetailsSchemaV3() {
    return Joi.object({
      key: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static Dimension() {
    return Joi.object({
      height: Joi.number().required(),
      is_default: Joi.boolean().required(),
      length: Joi.number().required(),
      unit: Joi.string().allow("").required(),
      width: Joi.number().required(),
    });
  }
  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
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
  static FollowPostResponse() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
    });
  }
  static GetCollectionDetailNest() {
    return Joi.object({
      _custom_json: Joi.any(),
      _schedule: Joi.any(),
      action: CatalogModel.ProductListingAction(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: Joi.any(),
      banners: CatalogModel.ImageUrls(),
      cron: Joi.any(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      logo: CatalogModel.Media(),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      query: Joi.array().items(CatalogModel.CollectionQuery()),
      slug: Joi.string().allow(""),
      sort_on: Joi.string().allow(""),
      tag: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }
  static GetCollectionListingResponse() {
    return Joi.object({
      filters: CatalogModel.CollectionListingFilter(),
      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),
      page: CatalogModel.Page().required(),
    });
  }
  static GetFollowListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()).required(),
      page: CatalogModel.Page().required(),
    });
  }
  static HomeListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),
      message: Joi.string().allow(""),
      page: CatalogModel.Page().required(),
    });
  }
  static ImageUrls() {
    return Joi.object({
      landscape: CatalogModel.Media(),
      portrait: CatalogModel.Media(),
    });
  }
  static LatLong() {
    return Joi.object({
      coordinates: Joi.array().items(Joi.number()),
      type: Joi.string().allow(""),
    });
  }
  static MarketPlaceSttributesSchemaV3() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),
      title: Joi.string().allow(""),
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
  static Meta() {
    return Joi.object({
      source: Joi.string().allow(""),
    });
  }
  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),
      value: Joi.number(),
    });
  }
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }
  static Price() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      max: Joi.number(),
      min: Joi.number(),
    });
  }
  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.ProductListingAction(),
      description: Joi.string().allow(""),
      logo: CatalogModel.Media(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static ProductBundle() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductGroupingModel()),
    });
  }
  static ProductCategoryMap() {
    return Joi.object({
      l1: CatalogModel.ProductBrand(),
      l2: CatalogModel.ProductBrand(),
      l3: CatalogModel.ProductBrand(),
    });
  }
  static ProductCompareResponse() {
    return Joi.object({
      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),
      items: Joi.array().items(CatalogModel.ProductDetail()),
      subtitle: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static ProductDetail() {
    return Joi.object({
      _custom_json: Joi.any(),
      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),
      action: CatalogModel.ProductListingAction(),
      attributes: Joi.any(),
      brand: CatalogModel.ProductBrand(),
      categories: Joi.array().items(CatalogModel.ProductBrand()),
      category_map: CatalogModel.ProductCategoryMap(),
      color: Joi.string().allow(""),
      custom_order: CatalogModel.ProductDetailCustomOrder(),
      description: Joi.string().allow(""),
      discount: Joi.string().allow(""),
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),
      has_variant: Joi.boolean(),
      highlights: Joi.array().items(Joi.string().allow("")),
      image_nature: Joi.string().allow(""),
      is_dependent: Joi.boolean(),
      item_code: Joi.string().allow(""),
      item_type: Joi.string().allow(""),
      medias: Joi.array().items(CatalogModel.Media()),
      moq: CatalogModel.ApplicationItemMOQ(),
      name: Joi.string().allow(""),
      net_quantity: CatalogModel.NetQuantity(),
      price: CatalogModel.ProductListingPrice(),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      product_online_date: Joi.string().allow(""),
      rating: Joi.number(),
      rating_count: Joi.number(),
      seo: CatalogModel.ApplicationItemSEO(),
      short_description: Joi.string().allow(""),
      similars: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.string().allow("")),
      teaser_tag: Joi.string().allow(""),
      tryouts: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static ProductDetailAttribute() {
    return Joi.object({
      key: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static ProductDetailCustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),
      manufacturing_time: Joi.number(),
      manufacturing_time_unit: Joi.string().allow(""),
    });
  }
  static ProductDetailGroupedAttribute() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
      title: Joi.string().allow(""),
    });
  }
  static ProductDetails() {
    return Joi.object({
      attributes: Joi.any(),
      brand_uid: Joi.number(),
      country_of_origin: Joi.any(),
      description: Joi.any(),
      grouped_attributes: Joi.any(),
      has_variant: Joi.boolean(),
      highlights: Joi.array().items(Joi.any()),
      hsn_code: Joi.number(),
      identifier: Joi.any(),
      image_nature: Joi.any(),
      images: Joi.array().items(Joi.any()),
      is_set: Joi.boolean(),
      item_code: Joi.any(),
      media: Joi.array().items(Joi.any()),
      name: Joi.any(),
      out_of_stock: Joi.boolean(),
      rating: Joi.number(),
      rating_count: Joi.number(),
      short_description: Joi.any(),
      slug: Joi.any(),
      template_tag: Joi.any(),
    });
  }
  static ProductFilters() {
    return Joi.object({
      key: CatalogModel.ProductFiltersKey().required(),
      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),
    });
  }
  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      kind: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
    });
  }
  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      display: Joi.string().allow("").required(),
      display_format: Joi.string().allow(""),
      is_selected: Joi.boolean().required(),
      max: Joi.number(),
      min: Joi.number(),
      query_format: Joi.string().allow(""),
      selected_max: Joi.number(),
      selected_min: Joi.number(),
      value: Joi.string().allow(""),
    });
  }
  static ProductFrequentlyComparedSimilarResponse() {
    return Joi.object({
      similars: CatalogModel.ProductCompareResponse(),
    });
  }
  static ProductGroupingModel() {
    return Joi.object({
      _id: Joi.any(),
      choice: Joi.any(),
      company_id: Joi.number(),
      created_by: CatalogModel.UserDetail(),
      created_on: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      logo: Joi.any(),
      meta: Joi.any(),
      modified_by: CatalogModel.UserDetail(),
      modified_on: Joi.string().allow("").required(),
      name: Joi.any().required(),
      page_visibility: Joi.array().items(Joi.any()),
      products: Joi.array().items(CatalogModel.ProductInGroup()).required(),
      same_store_assignment: Joi.boolean(),
      slug: Joi.any(),
      verified_by: CatalogModel.UserDetail(),
      verified_on: Joi.string().allow(""),
    });
  }
  static ProductGroupPrice() {
    return Joi.object({
      currency: Joi.any(),
      max_effective: Joi.number(),
      max_marked: Joi.number(),
      min_effective: Joi.number(),
      min_marked: Joi.number(),
    });
  }
  static ProductInGroup() {
    return Joi.object({
      allow_remove: Joi.boolean(),
      auto_add_to_cart: Joi.boolean(),
      auto_select: Joi.boolean(),
      max_quantity: Joi.number().required(),
      min_quantity: Joi.number(),
      price: CatalogModel.ProductGroupPrice(),
      product_details: CatalogModel.ProductDetails(),
      product_uid: Joi.number().required(),
      sizes: Joi.array().items(CatalogModel.Size()),
    });
  }
  static ProductListingAction() {
    return Joi.object({
      page: CatalogModel.ProductListingActionPage(),
      type: Joi.string().allow(""),
    });
  }
  static ProductListingActionPage() {
    return Joi.object({
      params: Joi.any(),
      query: Joi.any(),
      type: Joi.string().allow(""),
    });
  }
  static ProductListingDetail() {
    return Joi.object({
      _custom_json: Joi.any(),
      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),
      action: CatalogModel.ProductListingAction(),
      attributes: Joi.any(),
      brand: CatalogModel.ProductBrand(),
      categories: Joi.array().items(CatalogModel.ProductBrand()),
      category_map: CatalogModel.ProductCategoryMap(),
      color: Joi.string().allow(""),
      custom_order: CatalogModel.ProductDetailCustomOrder(),
      description: Joi.string().allow(""),
      discount: Joi.string().allow(""),
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),
      has_variant: Joi.boolean(),
      highlights: Joi.array().items(Joi.string().allow("")),
      identifiers: Joi.array().items(Joi.string().allow("")),
      image_nature: Joi.string().allow(""),
      is_dependent: Joi.boolean(),
      item_code: Joi.string().allow(""),
      item_type: Joi.string().allow(""),
      medias: Joi.array().items(CatalogModel.Media()),
      moq: CatalogModel.ApplicationItemMOQ(),
      name: Joi.string().allow(""),
      net_quantity: CatalogModel.NetQuantity(),
      price: CatalogModel.ProductListingPrice(),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      product_online_date: Joi.string().allow(""),
      rating: Joi.number(),
      rating_count: Joi.number(),
      sellable: Joi.boolean(),
      seo: CatalogModel.ApplicationItemSEO(),
      short_description: Joi.string().allow(""),
      similars: Joi.array().items(Joi.string().allow("")),
      sizes: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.string().allow("")),
      teaser_tag: Joi.string().allow(""),
      tryouts: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.number(),
      variants: Joi.array().items(CatalogModel.ProductVariantListingResponse()),
    });
  }
  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogModel.Price(),
      marked: CatalogModel.Price(),
    });
  }
  static ProductListingResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),
      items: Joi.array().items(CatalogModel.ProductListingDetail()),
      page: CatalogModel.Page().required(),
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }
  static ProductsComparisonResponse() {
    return Joi.object({
      attributes_metadata: Joi.array().items(CatalogModel.AttributeMetadata()),
      items: Joi.array().items(CatalogModel.ProductDetail()),
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
  static ProductSize() {
    return Joi.object({
      dimension: CatalogModel.Dimension(),
      display: Joi.string().allow(""),
      is_available: Joi.boolean(),
      quantity: Joi.number(),
      seller_identifiers: Joi.array().items(Joi.string().allow("")),
      value: Joi.string().allow(""),
      weight: CatalogModel.Weight(),
    });
  }
  static ProductSizePriceResponseV3() {
    return Joi.object({
      article_assignment: CatalogModel.ArticleAssignmentV3(),
      article_id: Joi.string().allow(""),
      discount: Joi.string().allow(""),
      grouped_attributes: Joi.array().items(
        CatalogModel.SellerGroupAttributes()
      ),
      is_cod: Joi.boolean(),
      is_gift: Joi.boolean(),
      item_type: Joi.string().allow(""),
      long_lat: Joi.array().items(Joi.number()),
      marketplace_attributes: Joi.array().items(
        CatalogModel.MarketPlaceSttributesSchemaV3()
      ),
      pincode: Joi.number(),
      price: CatalogModel.ProductStockPriceV3(),
      price_per_piece: CatalogModel.ProductStockPriceV3(),
      price_per_unit: CatalogModel.ProductStockUnitPriceV3(),
      quantity: Joi.number(),
      return_config: CatalogModel.ReturnConfigSchemaV3(),
      seller: CatalogModel.SellerV3(),
      seller_count: Joi.number(),
      set: CatalogModel.ProductSetV3(),
      special_badge: Joi.string().allow(""),
      store: CatalogModel.StoreV3(),
      strategy_wise_listing: Joi.array().items(
        CatalogModel.StrategyWiseListingSchemaV3()
      ),
    });
  }
  static ProductSizes() {
    return Joi.object({
      discount: Joi.string().allow(""),
      multi_size: Joi.boolean(),
      price: CatalogModel.ProductListingPrice(),
      sellable: Joi.boolean(),
      size_chart: CatalogModel.SizeChart(),
      sizes: Joi.array().items(CatalogModel.ProductSize()),
      stores: CatalogModel.ProductSizeStores(),
    });
  }
  static ProductSizeSellerFilterSchemaV3() {
    return Joi.object({
      is_selected: Joi.boolean(),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
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
  static ProductSizeStores() {
    return Joi.object({
      count: Joi.number(),
    });
  }
  static ProductSortOn() {
    return Joi.object({
      is_selected: Joi.boolean(),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static ProductStockPolling() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductStockStatusItem()),
      page: CatalogModel.Page().required(),
    });
  }
  static ProductStockPrice() {
    return Joi.object({
      currency: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
    });
  }
  static ProductStockPriceV3() {
    return Joi.object({
      currency: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
    });
  }
  static ProductStockStatusItem() {
    return Joi.object({
      company: CatalogModel.CompanyDetail(),
      identifier: Joi.any(),
      item_id: Joi.number(),
      price: CatalogModel.ProductStockPrice(),
      quantity: Joi.number(),
      seller: CatalogModel.Seller(),
      size: Joi.string().allow(""),
      store: CatalogModel.StoreDetail(),
      uid: Joi.string().allow(""),
    });
  }
  static ProductStockStatusResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductStockStatusItem()),
    });
  }
  static ProductStockUnitPriceV3() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      price: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }
  static ProductVariantItemResponse() {
    return Joi.object({
      _custom_meta: Joi.array().items(CatalogModel.CustomMetaFields()),
      action: CatalogModel.ProductListingAction(),
      color: Joi.string().allow(""),
      color_name: Joi.string().allow(""),
      is_available: Joi.boolean(),
      medias: Joi.array().items(CatalogModel.Media()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
      value: Joi.string().allow(""),
    });
  }
  static ProductVariantListingResponse() {
    return Joi.object({
      display_type: Joi.string().allow(""),
      header: Joi.string().allow(""),
      items: Joi.array().items(CatalogModel.ProductVariantItemResponse()),
      key: Joi.string().allow(""),
      total: Joi.number(),
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
  static ReturnConfigSchemaV3() {
    return Joi.object({
      returnable: Joi.boolean(),
      time: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }
  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogModel.ProductListingAction(),
      banners: CatalogModel.ImageUrls(),
      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static Seller() {
    return Joi.object({
      count: Joi.number(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static SellerGroupAttributes() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.DetailsSchemaV3()),
      title: Joi.string().allow(""),
    });
  }
  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),
      number: Joi.string().allow("").required(),
    });
  }
  static SellerV3() {
    return Joi.object({
      count: Joi.number(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static Size() {
    return Joi.object({
      display: Joi.any(),
      is_available: Joi.boolean(),
      quantity: Joi.number(),
      value: Joi.any(),
    });
  }
  static SizeChart() {
    return Joi.object({
      description: Joi.string().allow(""),
      headers: CatalogModel.ColumnHeaders(),
      image: Joi.string().allow(""),
      size_tip: Joi.string().allow(""),
      sizes: Joi.array().items(CatalogModel.SizeChartValues()),
      title: Joi.string().allow(""),
      unit: Joi.string().allow(""),
    });
  }
  static SizeChartValues() {
    return Joi.object({
      col_1: Joi.string().allow(""),
      col_2: Joi.string().allow(""),
      col_3: Joi.string().allow(""),
      col_4: Joi.string().allow(""),
      col_5: Joi.string().allow(""),
      col_6: Joi.string().allow(""),
    });
  }
  static Store() {
    return Joi.object({
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      lat_long: CatalogModel.LatLong(),
      name: Joi.string().allow(""),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      store_email: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static StoreAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }
  static StoreDepartments() {
    return Joi.object({
      logo: Joi.any(),
      name: Joi.string().allow(""),
      priority_order: Joi.number(),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static StoreDetail() {
    return Joi.object({
      city: Joi.string().allow(""),
      code: Joi.string().allow(""),
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }
  static StoreDetails() {
    return Joi.object({
      _custom_json: Joi.any(),
      address: CatalogModel.StoreAddressSerializer(),
      company: CatalogModel.CompanyStore(),
      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
      departments: Joi.array().items(CatalogModel.StoreDepartments()),
      manager: CatalogModel.StoreManagerSerializer(),
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      timing: Joi.array().items(CatalogModel.StoreTiming()),
      uid: Joi.number(),
    });
  }
  static StoreListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Store()).required(),
      page: CatalogModel.Page().required(),
    });
  }
  static StoreManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),
      mobile_no: CatalogModel.SellerPhoneNumber(),
      name: Joi.string().allow(""),
    });
  }
  static StoreTiming() {
    return Joi.object({
      closing: CatalogModel.Time(),
      open: Joi.boolean(),
      opening: CatalogModel.Time(),
      weekday: Joi.string().allow(""),
    });
  }
  static StoreV3() {
    return Joi.object({
      count: Joi.number(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static StrategyWiseListingSchemaV3() {
    return Joi.object({
      distance: Joi.number(),
      pincode: Joi.number(),
      quantity: Joi.number(),
      tat: Joi.number(),
    });
  }
  static ThirdLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogModel.ProductListingAction(),
      banners: CatalogModel.ImageUrls(),
      childs: Joi.array().items(Joi.any()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static Time() {
    return Joi.object({
      hour: Joi.number(),
      minute: Joi.number(),
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
  static Weight() {
    return Joi.object({
      is_default: Joi.boolean().required(),
      shipping: Joi.number().required(),
      unit: Joi.string().allow("").required(),
    });
  }
}
module.exports = CatalogModel;
