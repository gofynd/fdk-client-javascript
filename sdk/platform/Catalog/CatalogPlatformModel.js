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
      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      result: Joi.any(),

      app_id: Joi.string().allow(""),
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
      error: Joi.string().allow(""),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static SearchKeywordResult() {
    return Joi.object({
      query: Joi.any().required(),

      sort_on: Joi.string().allow("").required(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      result: CatalogModel.SearchKeywordResult().required(),

      app_id: Joi.string().allow(""),
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
      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      url: Joi.string().allow(""),

      query: Joi.any(),

      type: Joi.string().allow(""),

      params: Joi.any(),
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
      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),

      action: CatalogModel.AutocompleteAction(),

      _custom_json: Joi.any(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      app_id: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_by: Joi.any(),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),
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
      is_active: Joi.boolean().required(),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_by: Joi.any(),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      quantity: Joi.number(),

      item_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      images: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      identifier: Joi.any(),

      price: Joi.any(),

      country_of_origin: Joi.string().allow(""),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static Price() {
    return Joi.object({
      currency: Joi.string().allow(""),

      max_effective: Joi.number(),

      min_effective: Joi.number(),

      min_marked: Joi.number(),

      max_marked: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      max_quantity: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      min_quantity: Joi.number(),

      price: CatalogModel.Price(),

      product_uid: Joi.number(),

      auto_select: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      is_active: Joi.boolean(),

      products: Joi.array().items(CatalogModel.GetProducts()),

      company_id: Joi.number(),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),
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
      guide: CatalogModel.Guide(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      image: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      brand_id: Joi.number(),

      active: Joi.boolean(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      guide: Joi.any(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      brand_id: Joi.number(),

      active: Joi.boolean(),
    });
  }

  static SEOData() {
    return Joi.object({
      title: Joi.any(),

      description: Joi.any(),
    });
  }

  static MOQData() {
    return Joi.object({
      maximum: Joi.number(),

      increment_unit: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      seo: CatalogModel.SEOData(),

      is_cod: Joi.boolean(),

      alt_text: Joi.any(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.MOQData(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.any(),

      description: Joi.any(),
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
      maximum: Joi.number(),

      increment_unit: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_json: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      is_cod: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),
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

      total_count: Joi.number().required(),

      next: Joi.number().required(),

      has_next: Joi.boolean().required(),
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
      is_active: Joi.boolean().required(),

      unit: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static ConfigSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationsSort() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      priority: Joi.number().required(),

      default_key: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),
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

  static MetaDataListingResponse() {
    return Joi.object({
      filter: CatalogModel.MetaDataListingFilterResponse().required(),

      sort: CatalogModel.MetaDataListingSortResponse().required(),
    });
  }

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      similar: Joi.any(),

      compare: Joi.any(),

      variant: Joi.any(),

      detail: Joi.any(),
    });
  }

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      listing: CatalogModel.MetaDataListingResponse(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),
    });
  }

  static ProductSize() {
    return Joi.object({
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      title: Joi.string().allow(""),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      subtitle: Joi.string().allow(""),
    });
  }

  static ConfigurationProductSimilar() {
    return Joi.object({
      config: Joi.array().items(CatalogModel.ConfigurationProductConfig()),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),
    });
  }

  static ConfigurationProductVariant() {
    return Joi.object({
      config: Joi.array().items(
        CatalogModel.ConfigurationProductVariantConfig()
      ),
    });
  }

  static ConfigurationProduct() {
    return Joi.object({
      similar: CatalogModel.ConfigurationProductSimilar().required(),

      variant: CatalogModel.ConfigurationProductVariant().required(),
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

      map_values: Joi.array().items(Joi.any()),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      condition: Joi.string().allow(""),

      value: Joi.string().allow(""),

      map: Joi.any(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      display_name: Joi.string().allow(""),
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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
    });
  }

  static ConfigurationListingSort() {
    return Joi.object({
      config: Joi.array().items(CatalogModel.ConfigurationListingSortConfig()),

      default_key: Joi.string().allow("").required(),
    });
  }

  static ConfigurationListing() {
    return Joi.object({
      filter: CatalogModel.ConfigurationListingFilter().required(),

      sort: CatalogModel.ConfigurationListingSort().required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      modified_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),
    });
  }

  static GetAppCatalogConfiguration() {
    return Joi.object({
      is_default: Joi.boolean(),

      data: CatalogModel.AppCatalogConfiguration(),
    });
  }

  static AppConfiguration() {
    return Joi.object({
      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      modified_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),
    });
  }

  static GetCatalogConfigurationDetailsSchemaListing() {
    return Joi.object({
      filter: Joi.any(),

      sort: Joi.any(),
    });
  }

  static EntityConfiguration() {
    return Joi.object({
      id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      is_default: Joi.boolean(),

      data: CatalogModel.EntityConfiguration(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      selected_max: Joi.number(),

      query_format: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      min: Joi.number(),

      is_selected: Joi.boolean().required(),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      count: Joi.number(),

      value: Joi.any().required(),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      key: CatalogModel.ProductFiltersKey().required(),

      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
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

  static Media1() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      meta: Joi.any(),
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

  static CollectionQuery() {
    return Joi.object({
      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),
    });
  }

  static BannerImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static ImageUrls() {
    return Joi.object({
      portrait: CatalogModel.BannerImage(),

      landscape: CatalogModel.BannerImage(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      uid: Joi.string().allow(""),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      cron: Joi.any(),

      priority: Joi.number(),

      _schedule: Joi.any(),

      meta: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),
    });
  }

  static SeoDetail() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CollectionImage() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      aspect_ratio: Joi.string().allow("").required(),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
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
      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),
    });
  }

  static UserInfo() {
    return Joi.object({
      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      portrait: CatalogModel.CollectionImage().required(),

      landscape: CatalogModel.CollectionImage().required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      is_visible: Joi.boolean(),

      logo: CatalogModel.CollectionImage().required(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      badge: CatalogModel.CollectionBadge(),

      tags: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      sort_on: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo(),

      is_active: Joi.boolean(),

      published: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.CollectionBanner().required(),

      allow_sort: Joi.boolean(),

      _locale_language: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserInfo(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      cron: Joi.any(),

      priority: Joi.number(),

      sort_on: Joi.string().allow(""),

      _schedule: Joi.any(),

      meta: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      uid: Joi.string().allow(""),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      cron: Joi.any(),

      priority: Joi.number(),

      _schedule: Joi.any(),

      meta: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      name: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      type: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      description: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      tags: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      sort_on: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      is_active: Joi.boolean(),

      published: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.CollectionBanner(),

      allow_sort: Joi.boolean(),

      _locale_language: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),

      uid: Joi.number(),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
    });
  }

  static Price1() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: CatalogModel.Price1(),

      effective: CatalogModel.Price1(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      sellable: Joi.boolean(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      rating: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      rating_count: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      promo_meta: Joi.any(),

      item_code: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      attributes: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static ItemQueryForUserCollection() {
    return Joi.object({
      item_id: Joi.number(),

      action: Joi.string().allow(""),
    });
  }

  static CollectionItemRequest() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),

      item: Joi.array().items(CatalogModel.ItemQueryForUserCollection()),
    });
  }

  static UpdatedResponse() {
    return Joi.object({
      items_not_updated: Joi.array().items(Joi.number()),

      message: Joi.string().allow(""),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      available_articles: Joi.number(),

      total_articles: Joi.number(),

      name: Joi.string().allow(""),

      available_sizes: Joi.number(),

      total_sizes: Joi.number(),

      article_freshness: Joi.number(),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      count: Joi.number(),

      sellable_count: Joi.number(),

      out_of_stock_count: Joi.number(),
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
      platform: Joi.string().allow(""),

      company_id: Joi.number(),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      platform: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      created_on: Joi.number().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      modified_by: Joi.any(),

      modified_on: Joi.number().required(),

      created_by: Joi.any(),

      opt_level: Joi.string().allow("").required(),

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
      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      total_article: Joi.number(),

      company_id: Joi.number(),

      brand_name: Joi.string().allow(""),

      brand_id: Joi.number(),
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
      store: Joi.number(),

      brand: Joi.number(),

      company: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      timing: Joi.any(),

      address: Joi.any(),

      manager: Joi.any(),

      display_name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      additional_contacts: Joi.array().items(Joi.any()),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.StoreDetail()),
    });
  }

  static AttributeMasterMandatoryDetails() {
    return Joi.object({
      l3_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AttributeMasterMeta() {
    return Joi.object({
      mandatory_details: CatalogModel.AttributeMasterMandatoryDetails().required(),

      enriched: Joi.boolean(),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
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
      multi: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      mandatory: Joi.boolean(),

      type: Joi.string().allow("").required(),

      range: CatalogModel.AttributeSchemaRange(),

      format: Joi.string().allow(""),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      indexing: Joi.boolean().required(),

      priority: Joi.number(),

      depends_on: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GenderDetail() {
    return Joi.object({
      enabled_for_end_consumer: Joi.boolean(),

      meta: CatalogModel.AttributeMasterMeta(),

      details: CatalogModel.AttributeMasterDetails(),

      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      filters: CatalogModel.AttributeMasterFilter(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      template_slug: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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
      code: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

      errors: Joi.any(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      search: Joi.string().allow(""),

      priority_order: Joi.number(),

      item_type: Joi.string().allow(""),

      page_no: Joi.number(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      page_size: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      modified_by: CatalogModel.UserSerializer(),
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
      code: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

      errors: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      platforms: Joi.any(),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),
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
      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      is_active: Joi.boolean(),

      _id: Joi.any(),

      created_on: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      name: Joi.any().required(),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserDetail(),

      slug: Joi.any().required(),

      synonyms: Joi.array().items(Joi.any()),

      verified_on: Joi.string().allow(""),

      _cls: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      modified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      is_active: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")),
    });
  }

  static TemplatesResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.ProductTemplate(),
    });
  }

  static TemplateDetails() {
    return Joi.object({
      is_active: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      is_expirable: Joi.boolean().required(),

      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Properties() {
    return Joi.object({
      currency: Joi.any(),

      name: Joi.any(),

      command: Joi.any(),

      highlights: Joi.any(),

      description: Joi.any(),

      multi_size: Joi.any(),

      tags: Joi.any(),

      size_guide: Joi.any(),

      item_type: Joi.any(),

      is_dependent: Joi.any(),

      no_of_boxes: Joi.any(),

      category_slug: Joi.any(),

      country_of_origin: Joi.any(),

      hsn_code: Joi.any(),

      short_description: Joi.any(),

      media: Joi.any(),

      sizes: Joi.any(),

      slug: Joi.any(),

      trader: Joi.any(),

      variants: Joi.any(),

      is_active: Joi.any(),

      item_code: Joi.any(),

      trader_type: Joi.any(),

      product_publish: Joi.any(),

      brand_uid: Joi.any(),

      teaser_tag: Joi.any(),

      return_config: Joi.any(),

      product_group_tag: Joi.any(),

      custom_order: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      title: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      definitions: Joi.any(),

      type: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      description: Joi.string().allow(""),
    });
  }

  static TemplateValidationData() {
    return Joi.object({
      global_validation: CatalogModel.GlobalValidation(),

      template_validation: Joi.any(),
    });
  }

  static TemplatesValidationResponse() {
    return Joi.object({
      template_details: CatalogModel.TemplateDetails(),

      data: CatalogModel.TemplateValidationData(),
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

  static UserInfo1() {
    return Joi.object({
      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      type: Joi.string().allow(""),

      filters: Joi.any(),

      url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateExportResponse()),
    });
  }

  static ProductTemplateExportFilterRequest() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")),

      from_date: Joi.string().allow(""),

      to_date: Joi.string().allow(""),

      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),

      templates: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ProductTemplateDownloadsExport() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").allow(null),

      filters: CatalogModel.ProductTemplateExportFilterRequest(),
    });
  }

  static ProductConfigurationDownloads() {
    return Joi.object({
      multivalue: Joi.boolean(),

      data: Joi.array().items(Joi.any()),
    });
  }

  static Media2() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
    });
  }

  static CategoryMappingValues() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      catalog_id: Joi.number(),
    });
  }

  static CategoryMapping() {
    return Joi.object({
      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),

      google: CatalogModel.CategoryMappingValues(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l2: Joi.number().required(),

      department: Joi.number().required(),

      l1: Joi.number().required(),
    });
  }

  static Category() {
    return Joi.object({
      level: Joi.number().required(),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      priority: Joi.number(),

      marketplaces: CatalogModel.CategoryMapping(),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),
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
      level: Joi.number().required(),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      name: Joi.string().allow("").required(),

      priority: Joi.number(),

      marketplaces: CatalogModel.CategoryMapping(),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),
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

  static Logo() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: CatalogModel.Logo(),

      uid: Joi.number(),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static Image() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      name: Joi.any().required(),

      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      currency: Joi.string().allow(""),

      category: Joi.any(),

      variant_media: Joi.any(),

      company_id: Joi.number(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      is_image_less_product: Joi.boolean(),

      template_tag: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      verified_by: CatalogModel.VerifiedBy(),

      highlights: Joi.array().items(Joi.string().allow("")),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      all_company_ids: Joi.array().items(Joi.number()),

      tags: Joi.array().items(Joi.string().allow("")),

      size_guide: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      no_of_boxes: Joi.number(),

      category_slug: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      country_of_origin: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      moq: Joi.any(),

      is_physical: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      color: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      stage: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      pending: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      modified_on: Joi.string().allow(""),

      is_set: Joi.boolean(),

      modified_by: Joi.any(),

      departments: Joi.array().items(Joi.number()),

      variants: Joi.any(),

      category_uid: Joi.number(),

      is_active: Joi.boolean(),

      item_code: Joi.string().allow(""),

      created_by: Joi.any(),

      variant_group: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      attributes: Joi.any(),

      brand_uid: Joi.number(),

      product_publish: CatalogModel.ProductPublish(),

      teaser_tag: Joi.any(),

      verified_on: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      custom_order: Joi.any(),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductSchemaV2()),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),

      time: Joi.number().required(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static ProductPublish1() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      variant_media: Joi.any(),

      _custom_json: Joi.any(),

      bulk_job_id: Joi.string().allow(""),

      uid: Joi.number().allow(null),

      name: Joi.string().allow("").required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      is_image_less_product: Joi.boolean(),

      template_tag: Joi.string().allow("").required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      action: Joi.string().allow(""),

      description: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      size_guide: Joi.string().allow(""),

      item_type: Joi.string().allow("").required(),

      is_dependent: Joi.boolean(),

      no_of_boxes: Joi.number(),

      category_slug: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      sizes: Joi.array().items(Joi.any()).required(),

      slug: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      is_set: Joi.boolean(),

      variants: Joi.any(),

      requester: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      is_active: Joi.boolean(),

      item_code: Joi.string().allow("").required(),

      variant_group: Joi.any(),

      return_config: CatalogModel.ReturnConfig().required(),

      net_quantity: CatalogModel.NetQuantity(),

      attributes: Joi.any(),

      brand_uid: Joi.number().required(),

      product_publish: CatalogModel.ProductPublish1(),

      teaser_tag: CatalogModel.TeaserTag(),

      change_request_id: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      custom_order: CatalogModel.CustomOrder(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      category_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      brand_uid: Joi.number(),
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
      unit: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      logo: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      synonyms: Joi.any(),

      description: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      enabled_for_end_consumer: Joi.boolean(),

      details: CatalogModel.AttributeMasterDetails().required(),

      schema: CatalogModel.AttributeMaster().required(),

      created_by: Joi.any(),

      variant: Joi.boolean(),
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

      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_height: Joi.number().required(),

      item_width: Joi.number().required(),

      size: Joi.any().required(),

      item_weight: Joi.number().required(),

      item_length: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),
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
      is_set: Joi.boolean(),

      product_online_date: Joi.number(),
    });
  }

  static Product() {
    return Joi.object({
      currency: Joi.string().allow(""),

      category: Joi.any(),

      variant_media: Joi.any(),

      company_id: Joi.number(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      is_image_less_product: Joi.boolean(),

      template_tag: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      verified_by: CatalogModel.VerifiedBy(),

      highlights: Joi.array().items(Joi.string().allow("")),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      all_company_ids: Joi.array().items(Joi.number()),

      tags: Joi.array().items(Joi.string().allow("")),

      size_guide: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      no_of_boxes: Joi.number(),

      category_slug: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      country_of_origin: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      moq: Joi.any(),

      is_physical: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      color: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      stage: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      pending: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      modified_on: Joi.string().allow(""),

      is_set: Joi.boolean(),

      modified_by: Joi.any(),

      departments: Joi.array().items(Joi.number()),

      variants: Joi.any(),

      category_uid: Joi.number(),

      is_active: Joi.boolean(),

      item_code: Joi.string().allow(""),

      created_by: Joi.any(),

      variant_group: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      attributes: Joi.any(),

      brand_uid: Joi.number(),

      product_publish: CatalogModel.ProductPublished(),

      teaser_tag: Joi.any(),

      verified_on: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      custom_order: Joi.any(),
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
      username: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      is_active: Joi.boolean(),

      company_id: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      total: Joi.number(),

      failed: Joi.number(),

      template_tag: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      modified_by: CatalogModel.UserDetail1(),

      cancelled: Joi.number(),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.ProductBulkRequest(),
    });
  }

  static BulkJob() {
    return Joi.object({
      is_active: Joi.boolean(),

      company_id: Joi.number().required(),

      cancelled_records: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      failed_records: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      total: Joi.number(),

      failed: Joi.number(),

      template_tag: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      modified_by: CatalogModel.UserInfo1(),

      cancelled: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      modified_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      data: Joi.array().items(Joi.any()).required(),
    });
  }

  static ProductTagsViewResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UserCommon() {
    return Joi.object({
      username: Joi.string().allow(""),

      company_id: Joi.number(),

      user_id: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      is_active: Joi.boolean(),

      company_id: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      total: Joi.number(),

      failed: Joi.number(),

      retry: Joi.number(),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      modified_by: CatalogModel.UserCommon(),

      cancelled: Joi.number(),
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
      url: Joi.string().allow("").required(),

      company_id: Joi.number(),

      user: Joi.any().required(),
    });
  }

  static ProductSizeDeleteDataResponse() {
    return Joi.object({
      company_id: Joi.number(),

      item_id: Joi.number(),

      size: Joi.string().allow(""),
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
      currency: Joi.string().allow(""),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),

      item_id: Joi.number(),

      sellable_quantity: Joi.number(),

      price_effective: Joi.number(),

      price_transfer: Joi.number(),

      size: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      price: Joi.number(),

      store: Joi.any(),

      identifiers: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
    });
  }

  static SetSize() {
    return Joi.object({
      pieces: Joi.number().required(),

      size: Joi.string().allow("").required(),
    });
  }

  static SizeDistribution() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.SetSize()).required(),
    });
  }

  static InventorySet() {
    return Joi.object({
      name: Joi.string().allow(""),

      quantity: Joi.number(),

      size_distribution: CatalogModel.SizeDistribution().required(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_value: Joi.any().required(),

      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),
    });
  }

  static InvSize() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      store_code: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      expiration_date: Joi.string().allow(""),

      set: CatalogModel.InventorySet(),

      item_height: Joi.number().allow(null),

      price_transfer: Joi.number().allow(null),

      size: Joi.any().required(),

      item_width: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      price: Joi.number(),

      is_set: Joi.boolean(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),
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
      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      item: CatalogModel.ItemQuery().required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      marked: Joi.number().required(),

      transfer: Joi.number().required(),

      tp_notes: Joi.any(),

      effective: Joi.number().required(),

      updated_at: Joi.string().allow(""),
    });
  }

  static Trader1() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static QuantityBase() {
    return Joi.object({
      count: Joi.number(),

      updated_at: Joi.string().allow(""),
    });
  }

  static Quantities() {
    return Joi.object({
      sellable: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      _custom_json: Joi.any(),

      uid: Joi.string().allow("").required(),

      tax_identifier: Joi.any(),

      company: CatalogModel.CompanyMeta().required(),

      brand: CatalogModel.BrandMeta().required(),

      raw_meta: Joi.any(),

      added_on_store: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow(""),

      item_id: Joi.number().required(),

      weight: CatalogModel.WeightResponse().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      set: CatalogModel.InventorySet(),

      size: Joi.string().allow("").required(),

      price: CatalogModel.PriceMeta().required(),

      country_of_origin: Joi.string().allow("").required(),

      fragile: Joi.boolean().required(),

      fynd_item_code: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      fynd_meta: Joi.any(),

      stage: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      expiration_date: Joi.string().allow(""),

      total_quantity: Joi.number().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      store: CatalogModel.StoreMeta().required(),

      is_set: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      is_active: Joi.boolean(),

      quantities: CatalogModel.Quantities(),

      fynd_article_code: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      identifier: Joi.any().required(),

      return_config: CatalogModel.ReturnConfig1(),

      created_by: CatalogModel.UserSerializer(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static DateMeta() {
    return Joi.object({
      added_on_store: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      width: Joi.number(),

      length: Joi.number(),

      height: Joi.number(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      transfer: Joi.number(),

      tp_notes: Joi.any(),

      effective: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),
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

      order_committed: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static GetInventories() {
    return Joi.object({
      uid: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      company: CatalogModel.CompanyMeta1(),

      brand: CatalogModel.BrandMeta1(),

      date_meta: CatalogModel.DateMeta(),

      platforms: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow(""),

      item_id: Joi.number(),

      weight: CatalogModel.WeightResponse1(),

      dimension: CatalogModel.DimensionResponse1(),

      size: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      country_of_origin: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      total_quantity: Joi.number(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      store: CatalogModel.ArticleStoreResponse(),

      is_set: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      quantities: CatalogModel.QuantitiesArticle(),

      return_config: CatalogModel.ReturnConfig2(),

      seller_identifier: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      identifier: Joi.any(),

      expiration_date: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),
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
      is_active: Joi.boolean(),

      company_id: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      id: Joi.string().allow(""),

      total: Joi.number(),

      failed: Joi.number(),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      cancelled: Joi.number(),
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
      price_marked: Joi.number(),

      currency: Joi.string().allow(""),

      quantity: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      store_code: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      price_effective: Joi.number(),

      total_quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      user: Joi.any(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),
    });
  }

  static InventoryExportQuantityFilter() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),

      operators: Joi.string().allow("").required(),
    });
  }

  static InventoryExportAdvanceOption() {
    return Joi.object({
      quantity: CatalogModel.InventoryExportQuantityFilter(),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow("").allow(null),

      to_date: Joi.string().allow("").allow(null),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      type: Joi.string().allow("").required(),

      filters: CatalogModel.InventoryExportAdvanceOption(),

      url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      store: Joi.array().items(Joi.number()),

      brand: Joi.array().items(Joi.number()),

      type: Joi.string().allow("").allow(null),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      filters: Joi.any(),

      status: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      created_by: Joi.string().allow(""),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      quantity: CatalogModel.InventoryExportQuantityFilter(),

      brands: Joi.array().items(Joi.string().allow("")),

      from_date: Joi.string().allow(""),

      to_date: Joi.string().allow(""),

      stores: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      cancelled_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      cancelled_on: Joi.string().allow(""),

      type: Joi.string().allow("").allow(null),

      filters: CatalogModel.InventoryJobFilters().required(),

      url: Joi.string().allow("").required(),

      status: Joi.any(),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail(),
    });
  }

  static InventoryExportJobListResponse() {
    return Joi.object({
      items: CatalogModel.InventoryJobDetailResponse().required(),
    });
  }

  static InventoryExportFilter() {
    return Joi.object({
      quantity: CatalogModel.InventoryExportQuantityFilter(),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()).required(),

      from_date: Joi.string().allow(""),

      to_date: Joi.string().allow(""),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      filters: CatalogModel.InventoryExportFilter().required(),

      data: Joi.array().items(Joi.string().allow("")),

      notification_emails: Joi.array().items(Joi.string().allow("")),
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
      price_marked: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.number().required(),

      trace_id: Joi.string().allow(""),

      price_effective: Joi.number(),

      total_quantity: Joi.number().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      company_id: Joi.number().required(),

      payload: Joi.array().items(CatalogModel.InventoryPayload()),

      meta: Joi.any(),
    });
  }

  static InventoryFailedReason() {
    return Joi.object({
      errors: Joi.string().allow(""),

      message: Joi.string().allow("").required(),
    });
  }

  static InventoryResponseItem() {
    return Joi.object({
      reason: CatalogModel.InventoryFailedReason(),

      data: CatalogModel.InventoryPayload(),
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
      hs2_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      company_id: Joi.number(),

      tax1: Joi.number(),

      id: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),

      tax_on_mrp: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      tax2: Joi.number(),

      threshold1: Joi.number(),

      threshold2: Joi.number(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      hs2_code: Joi.string().allow("").allow(null).required(),

      hsn_code: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean(),

      tax1: Joi.number().required(),

      uid: Joi.number(),

      tax_on_esp: Joi.boolean(),

      tax_on_mrp: Joi.boolean().required(),

      tax2: Joi.number(),

      threshold1: Joi.number().required(),

      threshold2: Joi.number(),
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
      has_previous: Joi.boolean(),

      size: Joi.number(),

      current: Joi.string().allow(""),

      has_next: Joi.boolean(),

      item_total: Joi.number(),
    });
  }

  static TaxSlab() {
    return Joi.object({
      threshold: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      cess: Joi.number(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Department()),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.Child()),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      department: Joi.string().allow(""),

      items: Joi.array().items(CatalogModel.CategoryItems()),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CategoryListingResponse() {
    return Joi.object({
      data: Joi.array().items(CatalogModel.DepartmentCategoryTree()),

      departments: Joi.array().items(CatalogModel.DepartmentIdentifier()),
    });
  }

  static ApplicationProductListingResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.any(),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      rating: Joi.number(),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      rating_count: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      promo_meta: Joi.any(),

      item_code: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      attributes: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      next_id: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),

      item_total: Joi.number().required(),
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
      ignored_stores: Joi.array().items(Joi.number()),

      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),
    });
  }

  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      quantity: Joi.number(),

      meta: Joi.any(),

      group_id: Joi.string().allow(""),

      query: CatalogModel.ArticleQuery(),

      article_assignment: CatalogModel.ArticleAssignment(),
    });
  }

  static AssignStore() {
    return Joi.object({
      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      company_id: Joi.number(),

      channel_type: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      pincode: Joi.string().allow("").required(),

      channel_identifier: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),
    });
  }

  static ArticleAssignment1() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static StoreAssignResponse() {
    return Joi.object({
      price_marked: Joi.number(),

      quantity: Joi.number().required(),

      company_id: Joi.number(),

      _id: Joi.string().allow(""),

      meta: Joi.any(),

      uid: Joi.string().allow(""),

      store_id: Joi.number(),

      store_pincode: Joi.number(),

      group_id: Joi.string().allow(""),

      s_city: Joi.string().allow(""),

      item_id: Joi.number().required(),

      price_effective: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      status: Joi.boolean().required(),

      index: Joi.number(),

      size: Joi.string().allow("").required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      business_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      company_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      modified_by: CatalogModel.UserSerializer1(),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
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
      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),

      opening: CatalogModel.LocationTimingSerializer(),

      closing: CatalogModel.LocationTimingSerializer(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_waybill: CatalogModel.InvoiceCredSerializer(),

      e_invoice: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      integration_type: CatalogModel.LocationIntegrationType(),

      address: CatalogModel.GetAddressSerializer().required(),

      company: CatalogModel.GetCompanySerializer(),

      verified_by: CatalogModel.UserSerializer2(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      phone_number: Joi.string().allow("").required(),

      manager: CatalogModel.LocationManagerSerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      store_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      display_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      code: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      warnings: Joi.any(),

      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),
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
      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      uid: Joi.number().required(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),
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
