const Joi = require("joi");

class CatalogModel {
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

  static GetSearchWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      result: Joi.any(),

      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetSearchWordsDetailResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.GetSearchWordsData(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static SearchKeywordResult() {
    return Joi.object({
      sort_on: Joi.string().allow("").required(),

      query: Joi.any().required(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      result: CatalogModel.SearchKeywordResult().required(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static GetSearchWordsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetSearchWordsData()),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetAutocompleteWordsData()),
    });
  }

  static Media() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      params: Joi.any(),

      url: Joi.string().allow(""),

      query: Joi.any(),
    });
  }

  static AutocompleteAction() {
    return Joi.object({
      page: CatalogModel.AutocompletePageAction(),

      type: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      action: CatalogModel.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      product_uid: Joi.number().required(),

      max_quantity: Joi.number().required(),

      min_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetProductBundleCreateResponse()),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      identifier: Joi.any(),

      slug: Joi.string().allow(""),

      attributes: Joi.any(),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      quantity: Joi.number(),

      price: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      name: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      images: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      max_marked: Joi.number(),

      min_effective: Joi.number(),

      currency: Joi.string().allow(""),

      max_effective: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_available: Joi.boolean(),

      value: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      product_uid: Joi.number(),

      max_quantity: Joi.number(),

      min_quantity: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      auto_select: Joi.boolean(),

      price: CatalogModel.Price(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.GetProducts()),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      choice: Joi.string().allow(""),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ListSizeGuide() {
    return Joi.object({
      page: Joi.any(),

      items: Joi.array().items(Joi.any()),
    });
  }

  static Meta() {
    return Joi.object({
      headers: Joi.any(),

      unit: Joi.string().allow(""),

      values: Joi.array().items(Joi.any()),
    });
  }

  static Guide() {
    return Joi.object({
      meta: CatalogModel.Meta(),
    });
  }

  static ValidateSizeGuide() {
    return Joi.object({
      image: Joi.string().allow(""),

      brand_id: Joi.number(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      company_id: Joi.number(),

      guide: CatalogModel.Guide(),

      active: Joi.boolean(),

      subtitle: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      brand_id: Joi.number(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      guide: Joi.any(),

      tag: Joi.string().allow(""),

      company_id: Joi.number(),

      active: Joi.boolean(),

      subtitle: Joi.string().allow(""),

      name: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static SEOData() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static MOQData() {
    return Joi.object({
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      alt_text: Joi.any(),

      seo: CatalogModel.SEOData(),

      moq: CatalogModel.MOQData(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static MetaFields() {
    return Joi.object({
      value: Joi.any().required(),

      key: Joi.any().required(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      alt_text: Joi.any(),

      _custom_json: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      moq: CatalogModel.ApplicationItemMOQ(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      success: Joi.boolean(),

      uid: Joi.number(),
    });
  }

  static GetConfigMetadataResponse() {
    return Joi.object({
      condition: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),

      values: Joi.array().items(Joi.any()),
    });
  }

  static PageResponseType() {
    return Joi.object({
      current: Joi.number().required(),

      has_next: Joi.boolean().required(),

      next: Joi.number().required(),

      total_count: Joi.number().required(),
    });
  }

  static GetConfigResponse() {
    return Joi.object({
      page: CatalogModel.PageResponseType().required(),

      data: Joi.array().items(Joi.any()).required(),
    });
  }

  static ConfigErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      slug: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow(""),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),
    });
  }

  static ConfigSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationsSort() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      default_key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),
    });
  }

  static AllowSingleRequest() {
    return Joi.object({
      allow_single: Joi.boolean().required(),
    });
  }

  static DefaultKeyRequest() {
    return Joi.object({
      default_key: Joi.string().allow("").required(),
    });
  }

  static MetaDataListingSortMetaResponse() {
    return Joi.object({
      display: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static MetaDataListingSortResponse() {
    return Joi.object({
      data: Joi.array().items(CatalogModel.MetaDataListingSortMetaResponse()),
    });
  }

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      filter_types: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),

      key: Joi.string().allow(""),
    });
  }

  static MetaDataListingFilterResponse() {
    return Joi.object({
      data: Joi.array().items(CatalogModel.MetaDataListingFilterMetaResponse()),
    });
  }

  static MetaDataListingResponse() {
    return Joi.object({
      sort: CatalogModel.MetaDataListingSortResponse().required(),

      filter: CatalogModel.MetaDataListingFilterResponse().required(),
    });
  }

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      variant: Joi.any(),

      compare: Joi.any(),

      detail: Joi.any(),

      similar: Joi.any(),
    });
  }

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      listing: CatalogModel.MetaDataListingResponse(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),
    });
  }

  static ConfigurationListingSortConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ConfigurationListingSort() {
    return Joi.object({
      default_key: Joi.string().allow("").required(),

      config: Joi.array().items(CatalogModel.ConfigurationListingSortConfig()),
    });
  }

  static ConfigurationBucketPoints() {
    return Joi.object({
      display: Joi.string().allow(""),

      end: Joi.number(),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      sort: Joi.string().allow(""),

      map: Joi.any(),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map_values: Joi.array().items(Joi.any()),

      condition: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),
    });
  }

  static ConfigurationListingFilter() {
    return Joi.object({
      attribute_config: Joi.array().items(
        CatalogModel.ConfigurationListingFilterConfig()
      ),

      allow_single: Joi.boolean().required(),
    });
  }

  static ConfigurationListing() {
    return Joi.object({
      sort: CatalogModel.ConfigurationListingSort().required(),

      filter: CatalogModel.ConfigurationListingFilter().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      size: CatalogModel.ProductSize().required(),

      is_active: Joi.boolean().required(),

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static ConfigurationProductVariant() {
    return Joi.object({
      config: Joi.array().items(
        CatalogModel.ConfigurationProductVariantConfig()
      ),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      size: CatalogModel.ProductSize(),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ConfigurationProductSimilar() {
    return Joi.object({
      config: Joi.array().items(CatalogModel.ConfigurationProductConfig()),
    });
  }

  static ConfigurationProduct() {
    return Joi.object({
      variant: CatalogModel.ConfigurationProductVariant().required(),

      similar: CatalogModel.ConfigurationProductSimilar().required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      type: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),
    });
  }

  static GetAppCatalogConfiguration() {
    return Joi.object({
      data: CatalogModel.AppCatalogConfiguration(),

      is_default: Joi.boolean(),
    });
  }

  static AppConfiguration() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      type: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),
    });
  }

  static GetCatalogConfigurationDetailsSchemaListing() {
    return Joi.object({
      sort: Joi.any(),

      filter: Joi.any(),
    });
  }

  static EntityConfiguration() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_type: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      data: CatalogModel.EntityConfiguration(),

      is_default: Joi.boolean(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      operators: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      query_format: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      display_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      display: Joi.string().allow("").required(),

      max: Joi.number(),

      selected_max: Joi.number(),

      count: Joi.number(),

      value: Joi.any().required(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      key: CatalogModel.ProductFiltersKey().required(),

      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
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
      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),

      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),
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

      type: CatalogModel.PageType().required(),
    });
  }

  static Action() {
    return Joi.object({
      page: CatalogModel.ActionPage(),

      popup: CatalogModel.ActionPage(),

      type: Joi.string().allow(""),
    });
  }

  static BannerImage() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static ImageUrls() {
    return Joi.object({
      landscape: CatalogModel.BannerImage(),

      portrait: CatalogModel.BannerImage(),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
    });
  }

  static Media1() {
    return Joi.object({
      type: Joi.string().allow(""),

      meta: Joi.any(),

      url: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      badge: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      logo: CatalogModel.Media1(),

      meta: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      filters: CatalogModel.CollectionListingFilter(),

      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),
    });
  }

  static UserInfo() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static CollectionImage() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      aspect_ratio: Joi.string().allow("").required(),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      landscape: CatalogModel.CollectionImage().required(),

      portrait: CatalogModel.CollectionImage().required(),
    });
  }

  static SeoDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static NextSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),
    });
  }

  static CollectionSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),
    });
  }

  static CreateCollection() {
    return Joi.object({
      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      allow_facets: Joi.boolean(),

      published: Joi.boolean(),

      created_by: CatalogModel.UserInfo(),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      priority: Joi.number(),

      banners: CatalogModel.CollectionBanner().required(),

      app_id: Joi.string().allow("").required(),

      seo: CatalogModel.SeoDetail(),

      badge: CatalogModel.CollectionBadge(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: CatalogModel.CollectionSchedule(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tags: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserInfo(),

      type: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      logo: CatalogModel.CollectionImage().required(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      is_visible: Joi.boolean(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      logo: CatalogModel.BannerImage(),

      meta: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      badge: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      logo: CatalogModel.Media1(),

      meta: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      published: Joi.boolean(),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      priority: Joi.number(),

      banners: CatalogModel.CollectionBanner(),

      seo: CatalogModel.SeoDetail(),

      badge: CatalogModel.CollectionBadge(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: CatalogModel.CollectionSchedule(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tags: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserInfo(),

      type: Joi.string().allow(""),

      _locale_language: Joi.any(),

      logo: CatalogModel.CollectionImage(),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      is_visible: Joi.boolean(),
    });
  }

  static Price1() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogModel.Price1(),

      marked: CatalogModel.Price1(),
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

  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.Action(),

      logo: CatalogModel.Media1(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      highlights: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      item_code: Joi.string().allow(""),

      description: Joi.string().allow(""),

      sellable: Joi.boolean(),

      has_variant: Joi.boolean(),

      short_description: Joi.string().allow(""),

      rating_count: Joi.number(),

      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      price: CatalogModel.ProductListingPrice(),

      image_nature: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating: Joi.number(),

      product_online_date: Joi.string().allow(""),

      promo_meta: Joi.any(),

      type: Joi.string().allow(""),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static ItemQueryForUserCollection() {
    return Joi.object({
      action: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static CollectionItemRequest() {
    return Joi.object({
      type: Joi.string().allow(""),

      item: Joi.array().items(CatalogModel.ItemQueryForUserCollection()),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
    });
  }

  static UpdatedResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      items_not_updated: Joi.array().items(Joi.number()),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_sizes: Joi.number(),

      available_sizes: Joi.number(),

      total_articles: Joi.number(),

      available_articles: Joi.number(),

      name: Joi.string().allow(""),

      article_freshness: Joi.number(),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      out_of_stock_count: Joi.number(),

      count: Joi.number(),

      sellable_count: Joi.number(),
    });
  }

  static CatalogInsightResponse() {
    return Joi.object({
      brand_distribution: CatalogModel.CatalogInsightBrand(),

      item: CatalogModel.CatalogInsightItem(),
    });
  }

  static CrossSellingData() {
    return Joi.object({
      articles: Joi.number(),

      products: Joi.number(),
    });
  }

  static CrossSellingResponse() {
    return Joi.object({
      brand_distribution: CatalogModel.CatalogInsightBrand(),

      data: CatalogModel.CrossSellingData(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      opt_level: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      modified_by: Joi.any(),

      opt_level: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_on: Joi.number().required(),

      platform: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      created_on: Joi.number().required(),

      created_by: Joi.any(),

      company_id: Joi.number().required(),

      enabled: Joi.boolean().required(),
    });
  }

  static GetOptInPlatform() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.CompanyOptIn()).required(),
    });
  }

  static OptinCompanyDetail() {
    return Joi.object({
      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      brand_id: Joi.number(),

      company_id: Joi.number(),

      total_article: Joi.number(),
    });
  }

  static OptinCompanyBrandDetailsView() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.CompanyBrandDetail()),
    });
  }

  static OptinCompanyMetrics() {
    return Joi.object({
      brand: Joi.number(),

      company: Joi.string().allow(""),

      store: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      store_type: Joi.string().allow(""),

      timing: Joi.any(),

      additional_contacts: Joi.array().items(Joi.any()),

      documents: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      display_name: Joi.string().allow(""),

      company_id: Joi.number(),

      address: Joi.any(),

      manager: Joi.any(),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.StoreDetail()),
    });
  }

  static AttributeSchemaRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      format: Joi.string().allow(""),

      multi: Joi.boolean(),

      type: Joi.string().allow("").required(),

      mandatory: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      range: CatalogModel.AttributeSchemaRange(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      indexing: Joi.boolean().required(),

      depends_on: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),
    });
  }

  static AttributeMasterMandatoryDetails() {
    return Joi.object({
      l3_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AttributeMasterMeta() {
    return Joi.object({
      enriched: Joi.boolean(),

      mandatory_details: CatalogModel.AttributeMasterMandatoryDetails().required(),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      schema: CatalogModel.AttributeMaster(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      description: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      meta: CatalogModel.AttributeMasterMeta(),

      details: CatalogModel.AttributeMasterDetails(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug_key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      template_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.CategoriesResponse()),
    });
  }

  static PTErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      errors: Joi.any(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      page_no: Joi.number(),

      item_type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      search: Joi.string().allow(""),

      page_size: Joi.number(),

      uid: Joi.number(),

      priority_order: Joi.number(),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static DepartmentsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetDepartment()),
    });
  }

  static DepartmentErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      errors: Joi.any(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      platforms: Joi.any(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      priority_order: Joi.number().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _cls: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static DepartmentCreateResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      uid: Joi.number().required(),
    });
  }

  static DepartmentCreateErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),

      super_user: Joi.boolean(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      slug: Joi.any().required(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserDetail(),

      _custom_json: Joi.any(),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      verified_by: CatalogModel.UserDetail(),

      uid: Joi.number().required(),

      priority_order: Joi.number().required(),

      synonyms: Joi.array().items(Joi.any()),

      logo: Joi.string().allow("").required(),

      _cls: Joi.any(),

      name: Joi.any().required(),

      _id: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      categories: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      is_expirable: Joi.boolean().required(),

      attributes: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static TemplatesResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.ProductTemplate(),
    });
  }

  static Properties() {
    return Joi.object({
      product_group_tag: Joi.any(),

      highlights: Joi.any(),

      slug: Joi.any(),

      item_code: Joi.any(),

      description: Joi.any(),

      media: Joi.any(),

      product_publish: Joi.any(),

      multi_size: Joi.any(),

      sizes: Joi.any(),

      command: Joi.any(),

      short_description: Joi.any(),

      variants: Joi.any(),

      brand_uid: Joi.any(),

      custom_order: Joi.any(),

      size_guide: Joi.any(),

      no_of_boxes: Joi.any(),

      item_type: Joi.any(),

      is_active: Joi.any(),

      hsn_code: Joi.any(),

      teaser_tag: Joi.any(),

      return_config: Joi.any(),

      category_slug: Joi.any(),

      tags: Joi.any(),

      currency: Joi.any(),

      is_dependent: Joi.any(),

      country_of_origin: Joi.any(),

      name: Joi.any(),

      trader_type: Joi.any(),

      trader: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      definitions: Joi.any(),

      required: Joi.array().items(Joi.string().allow("")),

      properties: CatalogModel.Properties(),
    });
  }

  static TemplateValidationData() {
    return Joi.object({
      global_validation: CatalogModel.GlobalValidation(),

      template_validation: Joi.any(),
    });
  }

  static TemplateDetails() {
    return Joi.object({
      categories: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      is_expirable: Joi.boolean().required(),

      attributes: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static TemplatesValidationResponse() {
    return Joi.object({
      data: CatalogModel.TemplateValidationData(),

      template_details: CatalogModel.TemplateDetails(),
    });
  }

  static InventoryValidationResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      data: Joi.any(),
    });
  }

  static HSNData() {
    return Joi.object({
      hsn_code: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.array().items(Joi.string().allow("")),
    });
  }

  static HSNCodesResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      data: CatalogModel.HSNData(),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductDownloadItemsData() {
    return Joi.object({
      brand: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      trigger_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      seller_id: Joi.number(),

      created_by: CatalogModel.VerifiedBy(),

      completed_on: Joi.string().allow(""),

      template_tags: Joi.any(),

      url: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      status: Joi.string().allow(""),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.ProductDownloadsItems(),
    });
  }

  static ProductConfigurationDownloads() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      multivalue: Joi.boolean(),
    });
  }

  static Media2() {
    return Joi.object({
      landscape: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l1: Joi.number().required(),

      l2: Joi.number().required(),

      department: Joi.number().required(),
    });
  }

  static CategoryMappingValues() {
    return Joi.object({
      catalog_id: Joi.number(),

      name: Joi.string().allow("").required(),
    });
  }

  static CategoryMapping() {
    return Joi.object({
      ajio: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),

      google: CatalogModel.CategoryMappingValues(),
    });
  }

  static Category() {
    return Joi.object({
      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      marketplaces: CatalogModel.CategoryMapping(),

      priority: Joi.number(),

      name: Joi.string().allow("").required(),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Category()),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      marketplaces: CatalogModel.CategoryMapping(),

      priority: Joi.number(),

      name: Joi.string().allow("").required(),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static SingleCategoryResponse() {
    return Joi.object({
      data: CatalogModel.Category(),
    });
  }

  static CategoryUpdateResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Image() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static Logo() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      logo: CatalogModel.Logo(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.any().required(),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      product_group_tag: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()),

      category_uid: Joi.number(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      is_expirable: Joi.boolean(),

      item_code: Joi.string().allow(""),

      created_by: Joi.any(),

      stage: Joi.string().allow(""),

      description: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      variant_media: Joi.any(),

      product_publish: CatalogModel.ProductPublish(),

      multi_size: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      sizes: Joi.array().items(Joi.any()),

      short_description: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      is_set: Joi.boolean(),

      all_sizes: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),

      uid: Joi.number(),

      moq: Joi.any(),

      brand_uid: Joi.number(),

      variants: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      custom_order: Joi.any(),

      size_guide: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      hsn_code: Joi.string().allow(""),

      color: Joi.string().allow(""),

      category: Joi.any(),

      no_of_boxes: Joi.number(),

      teaser_tag: Joi.any(),

      modified_on: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      image_nature: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      company_id: Joi.number(),

      images: Joi.array().items(CatalogModel.Image()),

      category_slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      currency: Joi.string().allow(""),

      variant_group: Joi.any(),

      is_dependent: Joi.boolean(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      name: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      verified_by: CatalogModel.VerifiedBy(),

      trader: Joi.array().items(CatalogModel.Trader()),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductSchemaV2()),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static ProductPublish1() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),

      time: Joi.number().required(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      product_group_tag: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      departments: Joi.array().items(Joi.number()).required(),

      slug: Joi.string().allow("").required(),

      net_quantity: CatalogModel.NetQuantity(),

      item_code: Joi.string().allow("").required(),

      bulk_job_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      variant_media: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      action: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish1(),

      multi_size: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      sizes: Joi.array().items(Joi.any()).required(),

      short_description: Joi.string().allow(""),

      is_set: Joi.boolean(),

      template_tag: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),

      brand_uid: Joi.number().required(),

      variants: Joi.any(),

      custom_order: CatalogModel.CustomOrder(),

      size_guide: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      item_type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      teaser_tag: CatalogModel.TeaserTag(),

      return_config: CatalogModel.ReturnConfig().required(),

      company_id: Joi.number().required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      category_slug: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow("").required(),

      variant_group: Joi.any(),

      requester: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      change_request_id: Joi.any(),

      name: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      category_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      brand_uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      variants: Joi.array().items(CatalogModel.ProductVariants()),
    });
  }

  static AttributeMasterSerializer() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")).required(),

      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      description: Joi.string().allow(""),

      synonyms: Joi.any(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      unit: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      schema: CatalogModel.AttributeMaster().required(),

      modified_on: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      variant: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      raw_key: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      name: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),
    });
  }

  static ProductAttributesResponse() {
    return Joi.object({
      items: Joi.array()
        .items(CatalogModel.AttributeMasterSerializer())
        .required(),
    });
  }

  static SingleProductResponse() {
    return Joi.object({
      data: CatalogModel.ProductSchemaV2(),
    });
  }

  static ValidateIdentifier() {
    return Joi.object({
      gtin_value: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      size: Joi.any().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_weight_unit_of_measure: Joi.any().required(),

      item_height: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_width: Joi.number().required(),

      item_length: Joi.number().required(),

      item_weight: Joi.number().required(),
    });
  }

  static GetAllSizes() {
    return Joi.object({
      all_sizes: Joi.array().items(CatalogModel.AllSizes()),
    });
  }

  static ValidateProduct() {
    return Joi.object({
      valid: Joi.boolean(),
    });
  }

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      product_group_tag: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()),

      category_uid: Joi.number(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      is_expirable: Joi.boolean(),

      item_code: Joi.string().allow(""),

      created_by: Joi.any(),

      stage: Joi.string().allow(""),

      description: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      variant_media: Joi.any(),

      product_publish: CatalogModel.ProductPublished(),

      multi_size: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      sizes: Joi.array().items(Joi.any()),

      short_description: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      is_set: Joi.boolean(),

      all_sizes: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),

      uid: Joi.number(),

      moq: Joi.any(),

      brand_uid: Joi.number(),

      variants: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      custom_order: Joi.any(),

      size_guide: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      hsn_code: Joi.string().allow(""),

      color: Joi.string().allow(""),

      category: Joi.any(),

      no_of_boxes: Joi.number(),

      teaser_tag: Joi.any(),

      modified_on: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      image_nature: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      company_id: Joi.number(),

      images: Joi.array().items(CatalogModel.Image()),

      category_slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      currency: Joi.string().allow(""),

      variant_group: Joi.any(),

      is_dependent: Joi.boolean(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      name: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      verified_by: CatalogModel.VerifiedBy(),

      trader: Joi.array().items(CatalogModel.Trader()),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Product()),
    });
  }

  static UserDetail1() {
    return Joi.object({
      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      template: CatalogModel.ProductTemplate(),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      cancelled: Joi.number(),

      template_tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail1(),

      total: Joi.number(),

      company_id: Joi.number(),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.ProductBulkRequest(),
    });
  }

  static UserInfo1() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      failed: Joi.number(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      template_tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      failed_records: Joi.array().items(Joi.any()),

      total: Joi.number(),

      succeed: Joi.number(),

      company_id: Joi.number().required(),

      stage: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),
    });
  }

  static BulkResponse() {
    return Joi.object({
      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static ProductTagsViewResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UserCommon() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      company_id: Joi.number(),

      username: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      id: Joi.string().allow(""),

      failed: Joi.number(),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      retry: Joi.number(),

      total: Joi.number(),

      company_id: Joi.number(),

      tracking_url: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkAssetResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Items()),
    });
  }

  static ProductBulkAssets() {
    return Joi.object({
      user: Joi.any().required(),

      company_id: Joi.number(),

      url: Joi.string().allow("").required(),
    });
  }

  static ProductSizeDeleteDataResponse() {
    return Joi.object({
      size: Joi.string().allow(""),

      company_id: Joi.number(),

      item_id: Joi.number(),
    });
  }

  static ProductSizeDeleteResponse() {
    return Joi.object({
      success: Joi.boolean(),

      data: CatalogModel.ProductSizeDeleteDataResponse(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      size: Joi.string().allow(""),

      item_id: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      identifiers: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      price_effective: Joi.number(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      sellable_quantity: Joi.number(),

      price: Joi.number(),

      price_transfer: Joi.number(),

      store: Joi.any(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_value: Joi.any().required(),

      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),
    });
  }

  static SetSize() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      pieces: Joi.number().required(),
    });
  }

  static SizeDistribution() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.SetSize()).required(),
    });
  }

  static InventorySet() {
    return Joi.object({
      size_distribution: CatalogModel.SizeDistribution().required(),

      name: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static InvSize() {
    return Joi.object({
      size: Joi.any().required(),

      is_set: Joi.boolean(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_height: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      set: CatalogModel.InventorySet(),

      price: Joi.number(),

      item_width: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      price_transfer: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),
    });
  }

  static ItemQuery() {
    return Joi.object({
      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      company_id: Joi.number().required(),

      item: CatalogModel.ItemQuery().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      height: Joi.number().required(),

      width: Joi.number().required(),

      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      tp_notes: Joi.any(),

      currency: Joi.string().allow("").required(),

      effective: Joi.number().required(),

      transfer: Joi.number().required(),

      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static QuantityBase() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static Quantities() {
    return Joi.object({
      sellable: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      identifier: Joi.any().required(),

      item_id: Joi.number().required(),

      created_by: CatalogModel.UserSerializer(),

      stage: Joi.string().allow(""),

      fragile: Joi.boolean().required(),

      raw_meta: Joi.any(),

      fynd_article_code: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      dimension: CatalogModel.DimensionResponse().required(),

      uid: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      is_active: Joi.boolean(),

      store: CatalogModel.StoreMeta().required(),

      _custom_json: Joi.any(),

      fynd_meta: Joi.any(),

      price: CatalogModel.PriceMeta().required(),

      return_config: CatalogModel.ReturnConfig1(),

      tax_identifier: Joi.any(),

      total_quantity: Joi.number().required(),

      trace_id: Joi.string().allow(""),

      quantities: CatalogModel.Quantities(),

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer(),

      weight: CatalogModel.WeightResponse().required(),

      track_inventory: Joi.boolean(),

      set: CatalogModel.InventorySet(),

      country_of_origin: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      brand: CatalogModel.BrandMeta().required(),

      fynd_item_code: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader1()),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      length: Joi.number(),

      width: Joi.number(),

      height: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      is_default: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      tp_notes: Joi.any(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),

      transfer: Joi.number(),

      marked: Joi.number(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static QuantitiesArticle() {
    return Joi.object({
      sellable: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static DateMeta() {
    return Joi.object({
      added_on_store: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
    });
  }

  static GetInventories() {
    return Joi.object({
      identifier: Joi.any(),

      item_id: Joi.number(),

      id: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      stage: Joi.string().allow(""),

      size: Joi.string().allow(""),

      is_set: Joi.boolean(),

      dimension: CatalogModel.DimensionResponse1(),

      uid: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta1(),

      platforms: Joi.any(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      inventory_updated_on: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      price: CatalogModel.PriceArticle(),

      return_config: CatalogModel.ReturnConfig2(),

      tax_identifier: Joi.any(),

      total_quantity: Joi.number(),

      trace_id: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      weight: CatalogModel.WeightResponse1(),

      country_of_origin: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      brand: CatalogModel.BrandMeta1(),

      track_inventory: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader2()),
    });
  }

  static GetInventoriesResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetInventories()),
    });
  }

  static BulkInventoryGetItems() {
    return Joi.object({
      id: Joi.string().allow(""),

      failed: Joi.number(),

      file_path: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      cancelled: Joi.number(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      company_id: Joi.number(),

      total: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkInventoryGet() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.BulkInventoryGetItems()),
    });
  }

  static InventoryJobPayload() {
    return Joi.object({
      item_weight_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      currency: Joi.string().allow(""),

      quantity: Joi.number(),

      price: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      total_quantity: Joi.number(),

      store_code: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      company_id: Joi.number().required(),

      user: Joi.any(),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      trigger_on: Joi.string().allow(""),

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      brand: Joi.array().items(Joi.number()),

      type: Joi.string().allow("").allow(null),

      store: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      trigger_on: Joi.string().allow(""),

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),
    });
  }

  static FilerList() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static InventoryConfig() {
    return Joi.object({
      multivalues: Joi.boolean(),

      data: Joi.array().items(CatalogModel.FilerList()),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      store_id: Joi.number().required(),

      price_marked: Joi.number(),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      payload: Joi.array().items(CatalogModel.InventoryPayload()),

      company_id: Joi.number().required(),

      meta: Joi.any(),
    });
  }

  static InventoryFailedReason() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      errors: Joi.string().allow(""),
    });
  }

  static InventoryResponseItem() {
    return Joi.object({
      data: CatalogModel.InventoryPayload(),

      reason: CatalogModel.InventoryFailedReason(),
    });
  }

  static InventoryUpdateResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      items: Joi.array().items(CatalogModel.InventoryResponseItem()),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax_on_mrp: Joi.boolean(),

      id: Joi.string().allow(""),

      tax1: Joi.number(),

      hsn_code: Joi.string().allow(""),

      threshold1: Joi.number(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      tax2: Joi.number(),

      threshold2: Joi.number(),

      hs2_code: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      tax_on_mrp: Joi.boolean().required(),

      is_active: Joi.boolean(),

      tax1: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      threshold1: Joi.number().required(),

      uid: Joi.number(),

      company_id: Joi.number().required(),

      tax2: Joi.number(),

      threshold2: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      tax_on_esp: Joi.boolean(),
    });
  }

  static BulkHsnUpsert() {
    return Joi.object({
      data: Joi.array().items(CatalogModel.HsnUpsert()).required(),
    });
  }

  static BulkHsnResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static PageResponse() {
    return Joi.object({
      size: Joi.number(),

      item_total: Joi.number(),

      current: Joi.string().allow(""),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),
    });
  }

  static TaxSlab() {
    return Joi.object({
      cess: Joi.number(),

      effective_date: Joi.string().allow("").required(),

      threshold: Joi.number().required(),

      rate: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      hsn_code: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static HsnCodesListingResponseSchemaV2() {
    return Joi.object({
      page: CatalogModel.PageResponse(),

      items: Joi.array().items(CatalogModel.HSNDataInsertV2()),
    });
  }

  static BrandItem() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static BrandListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.BrandItem()),
    });
  }

  static Department() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      priority_order: Joi.number(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Department()),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.Child()),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      department: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.CategoryItems()),
    });
  }

  static CategoryListingResponse() {
    return Joi.object({
      departments: Joi.array().items(CatalogModel.DepartmentIdentifier()),

      data: Joi.array().items(CatalogModel.DepartmentCategoryTree()),
    });
  }

  static ApplicationProductListingResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.any(),

      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      highlights: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      item_code: Joi.string().allow(""),

      description: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      short_description: Joi.string().allow(""),

      rating_count: Joi.number(),

      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      image_nature: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating: Joi.number(),

      product_online_date: Joi.string().allow(""),

      promo_meta: Joi.any(),

      type: Joi.string().allow(""),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      next_id: Joi.string().allow(""),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      page: CatalogModel.InventoryPage().required(),

      items: Joi.array().items(Joi.any()),
    });
  }

  static ArticleQuery() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      ignored_stores: Joi.array().items(Joi.number()),
    });
  }

  static ArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      quantity: Joi.number(),

      query: CatalogModel.ArticleQuery(),

      group_id: Joi.string().allow(""),

      meta: Joi.any(),

      article_assignment: CatalogModel.ArticleAssignment(),
    });
  }

  static AssignStore() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      channel_identifier: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      channel_type: Joi.string().allow(""),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),
    });
  }

  static ArticleAssignment1() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static StoreAssignResponse() {
    return Joi.object({
      store_id: Joi.number(),

      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      price_effective: Joi.number(),

      uid: Joi.string().allow(""),

      quantity: Joi.number().required(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      s_city: Joi.string().allow(""),

      company_id: Joi.number(),

      group_id: Joi.string().allow(""),

      meta: Joi.any(),

      index: Joi.number(),

      store_pincode: Joi.number(),

      _id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      status: Joi.boolean().required(),

      price_marked: Joi.number(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_waybill: CatalogModel.InvoiceCredSerializer(),

      e_invoice: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      latitude: Joi.number(),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      business_type: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      modified_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CatalogModel.UserSerializer2(),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      reject_reason: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),
    });
  }

  static LocationTimingSerializer() {
    return Joi.object({
      minute: Joi.number(),

      hour: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),

      opening: CatalogModel.LocationTimingSerializer(),

      closing: CatalogModel.LocationTimingSerializer(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      phone_number: Joi.string().allow("").required(),

      created_by: CatalogModel.UserSerializer1(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      stage: Joi.string().allow(""),

      integration_type: CatalogModel.LocationIntegrationType(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      uid: Joi.number(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),

      store_type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      documents: Joi.array().items(CatalogModel.Document()),

      modified_on: Joi.string().allow(""),

      address: CatalogModel.GetAddressSerializer().required(),

      warnings: Joi.any(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      modified_by: CatalogModel.UserSerializer1(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      manager: CatalogModel.LocationManagerSerializer(),

      name: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserSerializer1(),
    });
  }

  static LocationListSerializer() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetLocationSerializer()),
    });
  }

  static ApplicationBrandJson() {
    return Joi.object({
      _custom_json: Joi.any().required(),
    });
  }

  static ApplicationCategoryJson() {
    return Joi.object({
      _custom_json: Joi.any().required(),
    });
  }

  static ApplicationDepartment() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      uid: Joi.number().required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ApplicationDepartmentListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ApplicationDepartment()),
    });
  }

  static ApplicationDepartmentJson() {
    return Joi.object({
      _custom_json: Joi.any().required(),
    });
  }

  static ApplicationStoreJson() {
    return Joi.object({
      _custom_json: Joi.any().required(),
    });
  }

  /*
        Enum: PageType
        Used By: Catalog
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
}
module.exports = CatalogModel;
