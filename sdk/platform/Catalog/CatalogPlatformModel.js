const Joi = require("joi");

class CatalogModel {
  static GetSearchWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      result: Joi.any(),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
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

  static GetSearchWordsDetailResponse() {
    return Joi.object({
      items: CatalogModel.GetSearchWordsData(),

      page: CatalogModel.Page(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),

      error: Joi.string().allow(""),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
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
      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      result: CatalogModel.SearchKeywordResult().required(),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetSearchWordsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetSearchWordsData()),

      page: CatalogModel.Page(),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetAutocompleteWordsData()),

      page: CatalogModel.Page(),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      query: Joi.any(),

      params: Joi.any(),

      url: Joi.string().allow(""),
    });
  }

  static AutocompleteAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      page: CatalogModel.AutocompletePageAction(),
    });
  }

  static Media() {
    return Joi.object({
      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      _custom_json: Joi.any(),

      action: CatalogModel.AutocompleteAction(),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),

      min_quantity: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      modified_by: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetProductBundleCreateResponse()),

      page: CatalogModel.Page(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      modified_by: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      currency: Joi.string().allow(""),

      min_marked: Joi.number(),

      max_marked: Joi.number(),

      min_effective: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      slug: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      identifier: Joi.any(),

      uid: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      price: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number(),

      price: CatalogModel.Price(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_select: Joi.boolean(),

      product_uid: Joi.number(),

      min_quantity: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      logo: Joi.string().allow(""),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      modified_by: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),
    });
  }

  static ListSizeGuide() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),

      page: Joi.any(),
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
      brand_id: Joi.number(),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      title: Joi.string().allow("").required(),

      image: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      guide: CatalogModel.Guide(),

      tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

      active: Joi.boolean(),

      subtitle: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),
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

      created_by: Joi.any(),

      title: Joi.string().allow(""),

      name: Joi.string().allow(""),

      guide: Joi.any(),

      modified_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      company_id: Joi.number(),

      active: Joi.boolean(),

      subtitle: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),
    });
  }

  static SEOData() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      seo: CatalogModel.SEOData(),

      moq: CatalogModel.MOQData(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      alt_text: Joi.any(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static MetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_json: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      moq: CatalogModel.ApplicationItemMOQ(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      uid: Joi.number(),

      success: Joi.boolean(),
    });
  }

  static GetConfigMetadataResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      values: Joi.array().items(Joi.any()),

      condition: Joi.array().items(Joi.any()),
    });
  }

  static PageResponseType() {
    return Joi.object({
      next: Joi.number().required(),

      has_next: Joi.boolean().required(),

      total_count: Joi.number().required(),

      current: Joi.number().required(),
    });
  }

  static GetConfigResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      page: CatalogModel.PageResponseType().required(),
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

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      unit: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),
    });
  }

  static ConfigSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationsSort() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      default_key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
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

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      variant: Joi.any(),

      detail: Joi.any(),

      compare: Joi.any(),

      similar: Joi.any(),
    });
  }

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),

      filter_types: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),
    });
  }

  static MetaDataListingFilterResponse() {
    return Joi.object({
      data: Joi.array().items(CatalogModel.MetaDataListingFilterMetaResponse()),
    });
  }

  static MetaDataListingSortMetaResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      display: Joi.string().allow(""),
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

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.MetaDataListingResponse(),
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
      map: Joi.any(),

      sort: Joi.string().allow(""),

      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map_values: Joi.array().items(Joi.any()),

      condition: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      type: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),
    });
  }

  static ConfigurationListingSort() {
    return Joi.object({
      default_key: Joi.string().allow("").required(),

      config: Joi.array().items(CatalogModel.ConfigurationListingSortConfig()),
    });
  }

  static ConfigurationListing() {
    return Joi.object({
      filter: CatalogModel.ConfigurationListingFilter().required(),

      sort: CatalogModel.ConfigurationListingSort().required(),
    });
  }

  static ProductSize() {
    return Joi.object({
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      size: CatalogModel.ProductSize().required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),
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

      title: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),
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
      id: Joi.string().allow(""),

      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      app_id: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),
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
      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      app_id: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

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

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_type: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      data: CatalogModel.EntityConfiguration(),

      is_default: Joi.boolean(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display_format: Joi.string().allow(""),

      value: Joi.any().required(),

      count: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      display: Joi.string().allow("").required(),

      selected_max: Joi.number(),

      query_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      min: Joi.number(),

      is_selected: Joi.boolean().required(),
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
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
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

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static ImageUrls() {
    return Joi.object({
      landscape: CatalogModel.BannerImage(),

      portrait: CatalogModel.BannerImage(),
    });
  }

  static Media1() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      meta: Joi.any(),

      allow_sort: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),

      _schedule: Joi.any(),

      priority: Joi.number(),

      badge: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      logo: CatalogModel.Media1(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      filters: CatalogModel.CollectionListingFilter(),

      page: CatalogModel.Page(),
    });
  }

  static UserInfo() {
    return Joi.object({
      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
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

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static CollectionImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),
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

  static CreateCollection() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      meta: Joi.any(),

      allow_sort: Joi.boolean(),

      _locale_language: Joi.any(),

      type: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo(),

      created_by: CatalogModel.UserInfo(),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      sort_on: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      priority: Joi.number(),

      badge: CatalogModel.CollectionBadge(),

      is_visible: Joi.boolean(),

      banners: CatalogModel.CollectionBanner().required(),

      _custom_json: Joi.any(),

      published: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      logo: CatalogModel.CollectionImage().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      meta: Joi.any(),

      allow_sort: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      sort_on: Joi.string().allow(""),

      _schedule: Joi.any(),

      priority: Joi.number(),

      badge: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      logo: CatalogModel.BannerImage(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      meta: Joi.any(),

      allow_sort: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      priority: Joi.number(),

      badge: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      logo: CatalogModel.Media1(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      meta: Joi.any(),

      allow_sort: Joi.boolean(),

      _locale_language: Joi.any(),

      type: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      sort_on: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      priority: Joi.number(),

      badge: CatalogModel.CollectionBadge(),

      is_visible: Joi.boolean(),

      banners: CatalogModel.CollectionBanner(),

      _custom_json: Joi.any(),

      published: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      description: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      tags: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),

      title: Joi.string().allow(""),
    });
  }

  static Price1() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: CatalogModel.Price1(),

      effective: CatalogModel.Price1(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      logo: CatalogModel.Media1(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      color: Joi.string().allow(""),

      rating_count: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      product_online_date: Joi.string().allow(""),

      attributes: Joi.any(),

      price: CatalogModel.ProductListingPrice(),

      short_description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      description: Joi.string().allow(""),

      sellable: Joi.boolean(),

      has_variant: Joi.boolean(),

      similars: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      medias: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      promo_meta: Joi.any(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page(),
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
      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      item: Joi.array().items(CatalogModel.ItemQueryForUserCollection()),
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
      article_freshness: Joi.number(),

      name: Joi.string().allow(""),

      available_articles: Joi.number(),

      available_sizes: Joi.number(),

      total_articles: Joi.number(),

      total_sizes: Joi.number(),
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
      data: CatalogModel.CrossSellingData(),

      brand_distribution: CatalogModel.CatalogInsightBrand(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      enabled: Joi.boolean(),

      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow(""),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      enabled: Joi.boolean().required(),

      opt_level: Joi.string().allow("").required(),

      created_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      modified_on: Joi.number().required(),

      company_id: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      created_on: Joi.number().required(),

      modified_by: Joi.any(),
    });
  }

  static GetOptInPlatform() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.CompanyOptIn()).required(),

      page: CatalogModel.Page().required(),
    });
  }

  static OptinCompanyDetail() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      company_id: Joi.number(),

      brand_id: Joi.number(),

      total_article: Joi.number(),
    });
  }

  static OptinCompanyBrandDetailsView() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.CompanyBrandDetail()),

      page: CatalogModel.Page(),
    });
  }

  static OptinCompanyMetrics() {
    return Joi.object({
      brand: Joi.number(),

      store: Joi.number(),

      company: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      company_id: Joi.number(),

      timing: Joi.any(),

      address: Joi.any(),

      documents: Joi.array().items(Joi.any()),

      manager: Joi.any(),

      created_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.StoreDetail()),

      page: CatalogModel.Page(),
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

  static AttributeSchemaRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      format: Joi.string().allow(""),

      mandatory: Joi.boolean(),

      multi: Joi.boolean(),

      type: Joi.string().allow("").required(),

      range: CatalogModel.AttributeSchemaRange(),

      allowed_values: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      depends_on: Joi.array().items(Joi.string().allow("")),

      indexing: Joi.boolean().required(),

      priority: Joi.number(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      enabled_for_end_consumer: Joi.boolean(),

      is_nested: Joi.boolean(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      details: CatalogModel.AttributeMasterDetails(),

      filters: CatalogModel.AttributeMasterFilter(),

      logo: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      template_slug: Joi.string().allow(""),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.CategoriesResponse()),

      page: CatalogModel.Page(),
    });
  }

  static PTErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),

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
      modified_by: CatalogModel.UserSerializer(),

      item_type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      page_no: Joi.number(),

      priority_order: Joi.number(),

      search: Joi.string().allow(""),

      page_size: Joi.number(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static DepartmentsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetDepartment()),

      page: CatalogModel.Page(),
    });
  }

  static DepartmentErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      _cls: Joi.string().allow(""),

      platforms: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number().required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static DepartmentCreateResponse() {
    return Joi.object({
      uid: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static DepartmentCreateErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static UserDetail() {
    return Joi.object({
      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      created_by: CatalogModel.UserDetail(),

      slug: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      _id: Joi.any(),

      uid: Joi.number().required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number().required(),

      verified_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      is_expirable: Joi.boolean().required(),

      created_by: Joi.any(),

      categories: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static TemplatesResponse() {
    return Joi.object({
      items: CatalogModel.ProductTemplate(),

      page: CatalogModel.Page(),
    });
  }

  static TemplateDetails() {
    return Joi.object({
      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_expirable: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      no_of_boxes: Joi.any(),

      item_code: Joi.any(),

      currency: Joi.any(),

      trader_type: Joi.any(),

      category_slug: Joi.any(),

      command: Joi.any(),

      hsn_code: Joi.any(),

      item_type: Joi.any(),

      media: Joi.any(),

      is_active: Joi.any(),

      highlights: Joi.any(),

      sizes: Joi.any(),

      custom_order: Joi.any(),

      product_group_tag: Joi.any(),

      return_config: Joi.any(),

      size_guide: Joi.any(),

      variants: Joi.any(),

      short_description: Joi.any(),

      description: Joi.any(),

      multi_size: Joi.any(),

      tags: Joi.any(),

      slug: Joi.any(),

      name: Joi.any(),

      product_publish: Joi.any(),

      brand_uid: Joi.any(),

      is_dependent: Joi.any(),

      teaser_tag: Joi.any(),

      country_of_origin: Joi.any(),

      trader: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      title: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      properties: CatalogModel.Properties(),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static TemplateValidationData() {
    return Joi.object({
      template_validation: Joi.any(),

      global_validation: CatalogModel.GlobalValidation(),
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
      country_of_origin: Joi.array().items(Joi.string().allow("")),

      hsn_code: Joi.array().items(Joi.string().allow("")),
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
      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      url: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      task_id: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      filters: Joi.any(),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateExportResponse()),
    });
  }

  static ProductTemplateExportFilterRequest() {
    return Joi.object({
      from_date: Joi.string().allow(""),

      brands: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")).required(),

      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),

      to_date: Joi.string().allow(""),
    });
  }

  static ProductTemplateDownloadsExport() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.ProductTemplateExportFilterRequest(),
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
      l2: Joi.number().required(),

      l1: Joi.number().required(),

      department: Joi.number().required(),
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
      google: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),
    });
  }

  static Category() {
    return Joi.object({
      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      created_by: Joi.any(),

      media: CatalogModel.Media2(),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      level: Joi.number().required(),

      priority: Joi.number(),

      marketplaces: CatalogModel.CategoryMapping(),

      modified_by: Joi.any(),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Category()),

      page: CatalogModel.Page(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      slug: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      name: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      level: Joi.number().required(),

      priority: Joi.number(),

      marketplaces: CatalogModel.CategoryMapping(),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      uid: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static SingleCategoryResponse() {
    return Joi.object({
      data: CatalogModel.Category(),
    });
  }

  static CategoryUpdateResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Logo() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Logo(),
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

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      tax_identifier: Joi.any(),

      no_of_boxes: Joi.number(),

      all_company_ids: Joi.array().items(Joi.number()),

      item_code: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()),

      category_slug: Joi.string().allow(""),

      moq: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      modified_by: Joi.any(),

      hsn_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      created_by: Joi.any(),

      image_nature: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      pending: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      is_active: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      custom_order: Joi.any(),

      stage: Joi.string().allow(""),

      company_id: Joi.number(),

      color: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      is_set: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      size_guide: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      is_expirable: Joi.boolean(),

      attributes: Joi.any(),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      variants: Joi.any(),

      short_description: Joi.string().allow(""),

      description: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      multi_size: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      created_on: Joi.string().allow(""),

      variant_group: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      images: Joi.array().items(CatalogModel.Image()),

      category_uid: Joi.number(),

      variant_media: Joi.any(),

      category: Joi.any(),

      product_publish: CatalogModel.ProductPublish(),

      brand_uid: Joi.number(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      is_dependent: Joi.boolean(),

      teaser_tag: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSchemaV2()),

      page: CatalogModel.Page(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),

      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),
    });
  }

  static ProductPublish1() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      tax_identifier: CatalogModel.TaxIdentifier().required(),

      no_of_boxes: Joi.number(),

      item_code: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      category_slug: Joi.string().allow("").required(),

      item_type: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number().allow(null),

      is_active: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      action: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()).required(),

      custom_order: CatalogModel.CustomOrder(),

      company_id: Joi.number().required(),

      is_set: Joi.boolean(),

      requester: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      size_guide: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig().required(),

      attributes: Joi.any(),

      _custom_json: Joi.any(),

      variants: Joi.any(),

      short_description: Joi.string().allow(""),

      description: Joi.string().allow(""),

      bulk_job_id: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      change_request_id: Joi.any(),

      multi_size: Joi.boolean(),

      variant_group: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      product_publish: CatalogModel.ProductPublish1(),

      brand_uid: Joi.number().required(),

      net_quantity: CatalogModel.NetQuantity(),

      is_dependent: Joi.boolean(),

      teaser_tag: CatalogModel.TeaserTag(),

      country_of_origin: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      media: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      category_uid: Joi.number(),

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
      departments: Joi.array().items(Joi.string().allow("")).required(),

      synonyms: Joi.any(),

      raw_key: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      schema: CatalogModel.AttributeMaster().required(),

      details: CatalogModel.AttributeMasterDetails().required(),

      enabled_for_end_consumer: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      is_nested: Joi.boolean(),

      variant: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      unit: Joi.string().allow(""),
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
      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_value: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      item_height: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.string().allow("").required(),

      item_weight: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_width: Joi.number().required(),

      item_length: Joi.number().required(),
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
      tax_identifier: Joi.any(),

      no_of_boxes: Joi.number(),

      all_company_ids: Joi.array().items(Joi.number()),

      item_code: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()),

      category_slug: Joi.string().allow(""),

      moq: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      modified_by: Joi.any(),

      hsn_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      created_by: Joi.any(),

      image_nature: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      pending: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      is_active: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      custom_order: Joi.any(),

      stage: Joi.string().allow(""),

      company_id: Joi.number(),

      color: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      is_set: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      size_guide: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      is_expirable: Joi.boolean(),

      attributes: Joi.any(),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      variants: Joi.any(),

      short_description: Joi.string().allow(""),

      description: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      multi_size: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      created_on: Joi.string().allow(""),

      variant_group: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      images: Joi.array().items(CatalogModel.Image()),

      category_uid: Joi.number(),

      variant_media: Joi.any(),

      category: Joi.any(),

      product_publish: CatalogModel.ProductPublished(),

      brand_uid: Joi.number(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      is_dependent: Joi.boolean(),

      teaser_tag: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Product()),

      page: CatalogModel.Page(),
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
      file_path: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      total: Joi.number(),

      template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      template: CatalogModel.ProductTemplate(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      company_id: Joi.number(),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      items: CatalogModel.ProductBulkRequest(),

      page: CatalogModel.Page(),
    });
  }

  static BulkJob() {
    return Joi.object({
      file_path: Joi.string().allow(""),

      failed: Joi.number(),

      tracking_url: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      total: Joi.number(),

      template_tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      company_id: Joi.number().required(),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      custom_template_tag: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      batch_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      template_tag: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

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
      company_id: Joi.number(),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      file_path: Joi.string().allow(""),

      failed: Joi.number(),

      retry: Joi.number(),

      tracking_url: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      id: Joi.string().allow(""),

      total: Joi.number(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      company_id: Joi.number(),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserCommon(),
    });
  }

  static BulkAssetResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Items()),

      page: CatalogModel.Page(),
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

      item_id: Joi.number(),

      company_id: Joi.number(),
    });
  }

  static ProductSizeDeleteResponse() {
    return Joi.object({
      data: CatalogModel.ProductSizeDeleteDataResponse(),

      success: Joi.boolean(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      inventory_updated_on: Joi.string().allow(""),

      size: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price: Joi.number(),

      currency: Joi.string().allow(""),

      identifiers: Joi.any(),

      sellable_quantity: Joi.number(),

      price_effective: Joi.number(),

      store: Joi.any(),

      item_id: Joi.number(),

      price_transfer: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),

      page: CatalogModel.Page(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      uid: Joi.number(),

      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_value: Joi.string().allow("").required(),
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
      name: Joi.string().allow(""),

      size_distribution: CatalogModel.SizeDistribution().required(),

      quantity: Joi.number(),
    });
  }

  static InvSize() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      item_height: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      item_weight: Joi.number().allow(null),

      price: Joi.number(),

      currency: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      store_code: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      item_width: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      is_set: Joi.boolean(),

      item_length: Joi.number().allow(null),

      price_transfer: Joi.number().allow(null),

      quantity: Joi.number().required(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      item: CatalogModel.ItemQuery().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),
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
      damaged: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      height: Joi.number().required(),

      width: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      transfer: Joi.number().required(),

      tp_notes: Joi.any(),

      marked: Joi.number().required(),

      effective: Joi.number().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      tax_identifier: Joi.any(),

      meta: Joi.any().allow(null),

      quantities: CatalogModel.Quantities(),

      dimension: CatalogModel.DimensionResponse().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      total_quantity: Joi.number().required(),

      fynd_meta: Joi.any(),

      item_id: Joi.number().required(),

      added_on_store: Joi.string().allow(""),

      fragile: Joi.boolean().required(),

      modified_by: CatalogModel.UserSerializer(),

      created_by: CatalogModel.UserSerializer(),

      uid: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      raw_meta: Joi.any(),

      trace_id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      is_set: Joi.boolean(),

      company: CatalogModel.CompanyMeta().required(),

      return_config: CatalogModel.ReturnConfig1(),

      weight: CatalogModel.WeightResponse().required(),

      _custom_json: Joi.any(),

      price: CatalogModel.PriceMeta().required(),

      brand: CatalogModel.BrandMeta().required(),

      set: CatalogModel.InventorySet(),

      size: Joi.string().allow("").required(),

      fynd_item_code: Joi.string().allow("").required(),

      track_inventory: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      identifier: Joi.any().required(),

      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      fynd_article_code: Joi.string().allow("").required(),

      store: CatalogModel.StoreMeta().required(),

      country_of_origin: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader1()),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
    });
  }

  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static QuantitiesArticle() {
    return Joi.object({
      damaged: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      length: Joi.number(),

      unit: Joi.string().allow(""),

      width: Joi.number(),

      height: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static DateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),

      transfer: Joi.number(),

      tp_notes: Joi.any(),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),
    });
  }

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetInventories() {
    return Joi.object({
      tax_identifier: Joi.any(),

      quantities: CatalogModel.QuantitiesArticle(),

      dimension: CatalogModel.DimensionResponse1(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      date_meta: CatalogModel.DateMeta(),

      total_quantity: Joi.number(),

      item_id: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      created_by: CatalogModel.UserSerializer(),

      platforms: Joi.any(),

      uid: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      is_set: Joi.boolean(),

      company: CatalogModel.CompanyMeta1(),

      inventory_updated_on: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig2(),

      weight: CatalogModel.WeightResponse1(),

      price: CatalogModel.PriceArticle(),

      brand: CatalogModel.BrandMeta1(),

      size: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      identifier: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      country_of_origin: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),
    });
  }

  static GetInventoriesResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetInventories()),

      page: CatalogModel.Page(),
    });
  }

  static BulkInventoryGetItems() {
    return Joi.object({
      file_path: Joi.string().allow(""),

      failed: Joi.number(),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      total: Joi.number(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_by: Joi.any(),
    });
  }

  static BulkInventoryGet() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.BulkInventoryGetItems()),

      page: CatalogModel.Page(),
    });
  }

  static InventoryJobPayload() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      price: Joi.number(),

      currency: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      price_marked: Joi.number(),

      store_code: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      total_quantity: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.any(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),
    });
  }

  static InventoryExportQuantityFilter() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),

      operators: Joi.string().allow("").required(),
    });
  }

  static InventoryExportAdvanceOption() {
    return Joi.object({
      from_date: Joi.string().allow("").allow(null),

      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      to_date: Joi.string().allow("").allow(null),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      url: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      task_id: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      filters: CatalogModel.InventoryExportAdvanceOption(),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      brand: Joi.array().items(Joi.number()),

      store: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      created_by: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      task_id: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      filters: Joi.any(),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      stores: Joi.array().items(Joi.string().allow("")),

      from_date: Joi.string().allow(""),

      brands: Joi.array().items(Joi.string().allow("")),

      to_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      seller_id: Joi.number().required(),

      created_on: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      cancelled_by: CatalogModel.UserDetail(),

      status: Joi.string().allow(""),

      url: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      task_id: Joi.string().allow("").required(),

      type: Joi.string().allow("").allow(null),

      cancelled_on: Joi.string().allow(""),

      filters: CatalogModel.InventoryJobFilters().required(),
    });
  }

  static InventoryExportJobListResponse() {
    return Joi.object({
      items: CatalogModel.InventoryJobDetailResponse().required(),
    });
  }

  static InventoryExportFilter() {
    return Joi.object({
      from_date: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()).required(),

      brand_ids: Joi.array().items(Joi.number()),

      to_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      data: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.InventoryExportFilter().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FilerList() {
    return Joi.object({
      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static InventoryConfig() {
    return Joi.object({
      data: Joi.array().items(CatalogModel.FilerList()),

      multivalues: Joi.boolean(),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.number().required(),

      expiration_date: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      total_quantity: Joi.number().allow(null),
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
      message: Joi.string().allow("").required(),

      errors: Joi.string().allow(""),
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
      hsn_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tax1: Joi.number(),

      hs2_code: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      threshold2: Joi.number(),

      threshold1: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      tax_on_esp: Joi.boolean(),

      tax2: Joi.number(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      tax1: Joi.number().required(),

      uid: Joi.number(),

      is_active: Joi.boolean(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      company_id: Joi.number().required(),

      threshold2: Joi.number(),

      threshold1: Joi.number().required(),

      tax_on_mrp: Joi.boolean().required(),

      tax_on_esp: Joi.boolean(),

      tax2: Joi.number(),
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

  static TaxSlab() {
    return Joi.object({
      cess: Joi.number(),

      effective_date: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      threshold: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),
    });
  }

  static PageResponse() {
    return Joi.object({
      size: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      current: Joi.string().allow(""),

      has_previous: Joi.boolean(),
    });
  }

  static HsnCodesListingResponseSchemaV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.HSNDataInsertV2()),

      page: CatalogModel.PageResponse(),
    });
  }

  static BrandItem() {
    return Joi.object({
      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),
    });
  }

  static BrandListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.BrandItem()),

      page: CatalogModel.Page().required(),
    });
  }

  static Department() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

      logo: CatalogModel.Media(),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Department()),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.Child()),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.CategoryItems()),

      department: Joi.string().allow(""),
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

  static ApplicationProductListingResponse() {
    return Joi.object({
      operators: Joi.any(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      color: Joi.string().allow(""),

      rating_count: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      product_online_date: Joi.string().allow(""),

      attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      description: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      similars: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      medias: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      promo_meta: Joi.any(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      next_id: Joi.string().allow(""),

      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

      has_previous: Joi.boolean(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),

      page: CatalogModel.InventoryPage().required(),
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
      query: CatalogModel.ArticleQuery(),

      meta: Joi.any(),

      group_id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment(),

      quantity: Joi.number(),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_identifier: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      company_id: Joi.number(),

      app_id: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

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
      size: Joi.string().allow("").required(),

      index: Joi.number(),

      store_id: Joi.number(),

      meta: Joi.any(),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      status: Joi.boolean().required(),

      store_pincode: Joi.number(),

      group_id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      company_id: Joi.number(),

      price_effective: Joi.number(),

      price_marked: Joi.number(),

      item_id: Joi.number().required(),

      quantity: Joi.number().required(),

      s_city: Joi.string().allow(""),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      longitude: Joi.number(),

      latitude: Joi.number(),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      company_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      enabled: Joi.boolean(),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_invoice: CatalogModel.InvoiceCredSerializer(),

      e_waybill: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      closing: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      opening: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_by: CatalogModel.UserSerializer1(),

      phone_number: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer1(),

      created_by: CatalogModel.UserSerializer1(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      company: CatalogModel.GetCompanySerializer(),

      store_type: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      integration_type: CatalogModel.LocationIntegrationType(),

      warnings: Joi.any(),

      address: CatalogModel.GetAddressSerializer().required(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      manager: CatalogModel.LocationManagerSerializer(),
    });
  }

  static LocationListSerializer() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetLocationSerializer()),

      page: CatalogModel.Page(),
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
      uid: Joi.number().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
    });
  }

  static ApplicationDepartmentListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ApplicationDepartment()),

      page: CatalogModel.Page().required(),
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
