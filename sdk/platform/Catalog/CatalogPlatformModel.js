const Joi = require("joi");

class CatalogModel {
  static GetSearchWordsData() {
    return Joi.object({
      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      result: Joi.any(),
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
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),
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

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      result: CatalogModel.SearchKeywordResult().required(),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
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
      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetAutocompleteWordsData()),

      page: CatalogModel.Page(),
    });
  }

  static Media() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      params: Joi.any(),

      query: Joi.any(),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutocompleteAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      page: CatalogModel.AutocompletePageAction(),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),

      min_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      created_by: Joi.any(),

      meta: Joi.any(),

      id: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      company_id: Joi.number(),
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
      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      created_by: Joi.any(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      company_id: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      display: Joi.string().allow(""),

      quantity: Joi.number(),

      value: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      min_effective: Joi.number(),

      currency: Joi.string().allow(""),

      min_marked: Joi.number(),

      max_marked: Joi.number(),

      max_effective: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      attributes: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      short_description: Joi.string().allow(""),

      quantity: Joi.number(),

      identifier: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      price: Joi.any(),

      images: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetProducts() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.Size()),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number(),

      product_uid: Joi.number(),

      price: CatalogModel.Price(),

      product_details: CatalogModel.LimitedProductData(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      company_id: Joi.number(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      company_id: Joi.number(),
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
      values: Joi.array().items(Joi.any()),

      unit: Joi.string().allow(""),

      headers: Joi.any(),
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

      created_on: Joi.string().allow(""),

      image: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      brand_id: Joi.number(),

      active: Joi.boolean(),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      modified_by: Joi.any(),

      company_id: Joi.number(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      guide: Joi.any(),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      brand_id: Joi.number(),

      active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      modified_by: Joi.any(),

      company_id: Joi.number(),
    });
  }

  static MOQData() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static SEOData() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.MOQData(),

      seo: CatalogModel.SEOData(),

      alt_text: Joi.any(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      _custom_json: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),
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
      values: Joi.array().items(Joi.any()),

      condition: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),
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
      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

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
      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      default_key: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

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

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      compare: Joi.any(),

      similar: Joi.any(),

      detail: Joi.any(),

      variant: Joi.any(),
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
      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),

      filter_types: Joi.array().items(Joi.string().allow("")),
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

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.MetaDataListingResponse(),
    });
  }

  static ProductSize() {
    return Joi.object({
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      title: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      subtitle: Joi.string().allow(""),

      key: Joi.string().allow("").required(),
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

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      key: Joi.string().allow("").required(),

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

  static ConfigurationProduct() {
    return Joi.object({
      similar: CatalogModel.ConfigurationProductSimilar().required(),

      variant: CatalogModel.ConfigurationProductVariant().required(),
    });
  }

  static ConfigurationListingSortConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

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
      start: Joi.number(),

      display: Joi.string().allow(""),

      end: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      value: Joi.string().allow(""),

      map: Joi.any(),

      map_values: Joi.array().items(Joi.any()),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      sort: Joi.string().allow(""),

      condition: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      display_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      name: Joi.string().allow(""),
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

  static AppCatalogConfiguration() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      listing: CatalogModel.ConfigurationListing(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),
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
      created_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      listing: CatalogModel.ConfigurationListing(),

      created_by: Joi.any(),

      modified_by: Joi.any(),
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

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      id: Joi.string().allow(""),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      is_default: Joi.boolean(),

      data: CatalogModel.EntityConfiguration(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      selected_min: Joi.number(),

      count: Joi.number(),

      is_selected: Joi.boolean().required(),

      selected_max: Joi.number(),

      currency_code: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      value: Joi.any().required(),

      min: Joi.number(),

      display_format: Joi.string().allow(""),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
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
      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),

      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),
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
      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static Media1() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static BannerImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ImageUrls() {
    return Joi.object({
      landscape: CatalogModel.BannerImage(),

      portrait: CatalogModel.BannerImage(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      priority: Joi.number(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      action: CatalogModel.Action(),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      allow_facets: Joi.boolean(),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      page: CatalogModel.Page(),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static NextSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),
    });
  }

  static CollectionSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static CollectionImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),
    });
  }

  static SeoDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      landscape: CatalogModel.CollectionImage().required(),

      portrait: CatalogModel.CollectionImage().required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      priority: Joi.number(),

      sort_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      is_visible: Joi.boolean(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      badge: CatalogModel.CollectionBadge(),

      modified_by: CatalogModel.UserInfo(),

      tags: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      _schedule: CatalogModel.CollectionSchedule(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      logo: CatalogModel.CollectionImage().required(),

      is_active: Joi.boolean(),

      published: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      banners: CatalogModel.CollectionBanner().required(),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      created_by: CatalogModel.UserInfo(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      priority: Joi.number(),

      sort_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      logo: CatalogModel.BannerImage(),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      allow_facets: Joi.boolean(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      priority: Joi.number(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      allow_facets: Joi.boolean(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      priority: Joi.number(),

      sort_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      modified_by: CatalogModel.UserInfo(),

      tags: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      _schedule: CatalogModel.CollectionSchedule(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      logo: CatalogModel.CollectionImage(),

      is_active: Joi.boolean(),

      published: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      banners: CatalogModel.CollectionBanner(),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),
    });
  }

  static Price1() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),
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
      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),
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
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      medias: Joi.array().items(CatalogModel.Media1()),

      color: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      brand: CatalogModel.ProductBrand(),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      promo_meta: Joi.any(),

      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      discount: Joi.string().allow(""),

      rating_count: Joi.number(),

      product_online_date: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      sellable: Joi.boolean(),

      rating: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

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
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      item: Joi.array().items(CatalogModel.ItemQueryForUserCollection()),

      type: Joi.string().allow(""),
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
      available_sizes: Joi.number(),

      total_sizes: Joi.number(),

      article_freshness: Joi.number(),

      total_articles: Joi.number(),

      available_articles: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      sellable_count: Joi.number(),

      count: Joi.number(),

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
      products: Joi.number(),

      articles: Joi.number(),
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
      company_id: Joi.number(),

      platform: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      created_on: Joi.number().required(),

      platform: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_on: Joi.number().required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      company_id: Joi.number().required(),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean().required(),
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
      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      total_article: Joi.number(),

      brand_name: Joi.string().allow(""),

      company_id: Joi.number(),

      brand_id: Joi.number(),
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
      company: Joi.string().allow(""),

      store: Joi.number(),

      brand: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      manager: Joi.any(),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      display_name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.any(),

      store_code: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      timing: Joi.any(),

      company_id: Joi.number(),

      documents: Joi.array().items(Joi.any()),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.StoreDetail()),

      page: CatalogModel.Page(),
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
      mandatory: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      format: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      multi: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      indexing: Joi.boolean().required(),

      priority: Joi.number(),

      depends_on: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
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

  static GenderDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      filters: CatalogModel.AttributeMasterFilter(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_nested: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      meta: CatalogModel.AttributeMasterMeta(),

      id: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

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
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      errors: Joi.any(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      priority_order: Joi.number(),

      uid: Joi.number(),

      search: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      page_size: Joi.number(),

      item_type: Joi.string().allow(""),

      page_no: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      errors: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number().required(),

      platforms: Joi.any(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      _id: Joi.any(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      priority_order: Joi.number().required(),

      uid: Joi.number().required(),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail(),

      _cls: Joi.string().allow(""),

      verified_by: CatalogModel.UserDetail(),

      modified_by: CatalogModel.UserDetail(),

      synonyms: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      created_by: Joi.any(),

      is_archived: Joi.boolean(),

      tag: Joi.string().allow(""),

      modified_by: Joi.any(),
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
      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      command: Joi.any(),

      short_description: Joi.any(),

      no_of_boxes: Joi.any(),

      description: Joi.any(),

      name: Joi.any(),

      tags: Joi.any(),

      is_dependent: Joi.any(),

      custom_order: Joi.any(),

      product_publish: Joi.any(),

      currency: Joi.any(),

      country_of_origin: Joi.any(),

      slug: Joi.any(),

      item_type: Joi.any(),

      variants: Joi.any(),

      trader_type: Joi.any(),

      is_active: Joi.any(),

      sizes: Joi.any(),

      multi_size: Joi.any(),

      brand_uid: Joi.any(),

      item_code: Joi.any(),

      teaser_tag: Joi.any(),

      size_guide: Joi.any(),

      category_slug: Joi.any(),

      trader: Joi.any(),

      return_config: Joi.any(),

      media: Joi.any(),

      highlights: Joi.any(),

      hsn_code: Joi.any(),

      product_group_tag: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      title: Joi.string().allow(""),

      definitions: Joi.any(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

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

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductDownloadItemsData() {
    return Joi.object({
      templates: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      brand: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      task_id: Joi.string().allow(""),

      seller_id: Joi.number(),

      trigger_on: Joi.string().allow(""),

      template_tags: Joi.any(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      data: CatalogModel.ProductDownloadItemsData(),

      status: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      items: CatalogModel.ProductDownloadsItems(),

      page: CatalogModel.Page(),
    });
  }

  static ProductConfigurationDownloads() {
    return Joi.object({
      multivalue: Joi.boolean(),

      data: Joi.array().items(Joi.any()),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l2: Joi.number().required(),

      department: Joi.number().required(),

      l1: Joi.number().required(),
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

  static Media2() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
    });
  }

  static Category() {
    return Joi.object({
      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      priority: Joi.number(),

      uid: Joi.number(),

      departments: Joi.array().items(Joi.number()).required(),

      marketplaces: CatalogModel.CategoryMapping(),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      created_by: Joi.any(),

      level: Joi.number().required(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      is_active: Joi.boolean().required(),

      priority: Joi.number(),

      departments: Joi.array().items(Joi.number()).required(),

      marketplaces: CatalogModel.CategoryMapping(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      level: Joi.number().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      logo: CatalogModel.Logo(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Product() {
    return Joi.object({
      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      category_uid: Joi.number(),

      modified_by: Joi.any(),

      primary_color: Joi.string().allow(""),

      attributes: Joi.any(),

      variant_group: Joi.any(),

      product_publish: CatalogModel.ProductPublished(),

      is_dependent: Joi.boolean(),

      custom_order: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      uid: Joi.number(),

      is_expirable: Joi.boolean(),

      currency: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      image_nature: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      variants: Joi.any(),

      is_image_less_product: Joi.boolean(),

      verified_by: CatalogModel.VerifiedBy(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      pending: Joi.string().allow(""),

      is_active: Joi.boolean(),

      sizes: Joi.array().items(Joi.any()),

      all_sizes: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      brand_uid: Joi.number(),

      variant_media: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),

      id: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      teaser_tag: Joi.any(),

      size_guide: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      category_slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      moq: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()),

      return_config: CatalogModel.ReturnConfigResponse(),

      category: Joi.any(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(CatalogModel.Media1()),

      created_by: Joi.any(),

      hsn_code: Joi.string().allow(""),

      company_id: Joi.number(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Product()),

      page: CatalogModel.Page(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),

      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
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
      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      short_description: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      bulk_job_id: Joi.string().allow(""),

      attributes: Joi.any(),

      variant_group: Joi.any(),

      is_dependent: Joi.boolean(),

      custom_order: CatalogModel.CustomOrder(),

      product_publish: CatalogModel.ProductPublish(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      uid: Joi.number().allow(null),

      action: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      country_of_origin: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      is_image_less_product: Joi.boolean(),

      variants: Joi.any(),

      item_type: Joi.string().allow("").required(),

      net_quantity: CatalogModel.NetQuantity(),

      is_active: Joi.boolean(),

      sizes: Joi.array().items(Joi.any()).required(),

      multi_size: Joi.boolean(),

      brand_uid: Joi.number().required(),

      variant_media: Joi.any(),

      item_code: Joi.string().allow("").required(),

      teaser_tag: CatalogModel.TeaserTag(),

      requester: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      category_slug: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      return_config: CatalogModel.ReturnConfig().required(),

      change_request_id: Joi.any(),

      template_tag: Joi.string().allow("").required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      media: Joi.array().items(CatalogModel.Media1()),

      company_id: Joi.number().required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductVariants() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      brand_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      category_uid: Joi.number(),
    });
  }

  static ProductVariantsResponse() {
    return Joi.object({
      variants: Joi.array().items(CatalogModel.ProductVariants()),

      page: CatalogModel.Page(),
    });
  }

  static AttributeMasterSerializer() {
    return Joi.object({
      is_nested: Joi.boolean(),

      description: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: Joi.any(),

      synonyms: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      enabled_for_end_consumer: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      suggestion: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      created_by: Joi.any(),

      unit: Joi.string().allow(""),

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
      data: CatalogModel.Product(),
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
      item_weight_unit_of_measure: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_length: Joi.number().required(),

      item_height: Joi.number().required(),

      item_width: Joi.number().required(),

      size: Joi.string().allow("").required(),

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

  static UserDetail1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      full_name: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      succeed: Joi.number(),

      total: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      template: CatalogModel.ProductTemplate(),

      template_tag: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      company_id: Joi.number(),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      items: CatalogModel.ProductBulkRequest(),

      page: CatalogModel.Page(),
    });
  }

  static UserInfo1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      failed_records: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      failed: Joi.number(),

      succeed: Joi.number(),

      total: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      created_by: CatalogModel.UserInfo1(),

      template_tag: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      company_id: Joi.number().required(),
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

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow("").required(),

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
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static Items() {
    return Joi.object({
      is_active: Joi.boolean(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      retry: Joi.number(),

      tracking_url: Joi.string().allow(""),

      failed: Joi.number(),

      total: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      id: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      succeed: Joi.number(),
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

      url: Joi.string().allow("").required(),

      company_id: Joi.number(),
    });
  }

  static ProductSizeDeleteDataResponse() {
    return Joi.object({
      item_id: Joi.number(),

      size: Joi.string().allow(""),

      company_id: Joi.number(),
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
      identifiers: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      price_effective: Joi.number(),

      uid: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      item_id: Joi.number(),

      size: Joi.string().allow(""),

      quantity: Joi.number(),

      store: Joi.any(),

      price_transfer: Joi.number(),

      sellable_quantity: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      price: Joi.number(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),

      page: CatalogModel.Page(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_value: Joi.string().allow("").required(),

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
      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_length: Joi.number().allow(null),

      price_effective: Joi.number().required(),

      item_height: Joi.number().allow(null),

      is_set: Joi.boolean(),

      item_width: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      size: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      price_transfer: Joi.number().allow(null),

      price: Joi.number(),

      store_code: Joi.string().allow("").required(),

      item_weight: Joi.number().allow(null),
    });
  }

  static ItemQuery() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),

      uid: Joi.number(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      item: CatalogModel.ItemQuery().required(),

      company_id: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      transfer: Joi.number().required(),

      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      tp_notes: Joi.any(),

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

  static CompanyMeta() {
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

      not_available: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      length: Joi.number().required(),

      height: Joi.number().required(),

      width: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Trader1() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      manufacturer: CatalogModel.ManufacturerResponse().required(),

      seller_identifier: Joi.string().allow("").required(),

      fragile: Joi.boolean().required(),

      price: CatalogModel.PriceMeta().required(),

      added_on_store: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta().required(),

      raw_meta: Joi.any(),

      modified_by: CatalogModel.UserSerializer(),

      tags: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      uid: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      tax_identifier: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      meta: Joi.any().allow(null),

      is_active: Joi.boolean(),

      store: CatalogModel.StoreMeta().required(),

      fynd_meta: Joi.any(),

      track_inventory: Joi.boolean(),

      company: CatalogModel.CompanyMeta().required(),

      fynd_article_code: Joi.string().allow("").required(),

      quantities: CatalogModel.Quantities(),

      dimension: CatalogModel.DimensionResponse().required(),

      expiration_date: Joi.string().allow(""),

      item_id: Joi.number().required(),

      set: CatalogModel.InventorySet(),

      size: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      identifier: Joi.any().required(),

      return_config: CatalogModel.ReturnConfig1(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      created_by: CatalogModel.UserSerializer(),

      fynd_item_code: Joi.string().allow("").required(),

      weight: CatalogModel.WeightResponse().required(),

      total_quantity: Joi.number().required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      transfer: Joi.number(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),

      tp_notes: Joi.any(),

      effective: Joi.number(),
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
      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
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

  static DimensionResponse1() {
    return Joi.object({
      width: Joi.number(),

      unit: Joi.string().allow(""),

      length: Joi.number(),

      height: Joi.number(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      manufacturer: CatalogModel.ManufacturerResponse1(),

      seller_identifier: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      brand: CatalogModel.BrandMeta1(),

      date_meta: CatalogModel.DateMeta(),

      modified_by: CatalogModel.UserSerializer(),

      tags: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      is_set: Joi.boolean(),

      uid: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      track_inventory: Joi.boolean(),

      company: CatalogModel.CompanyMeta1(),

      inventory_updated_on: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      id: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      platforms: Joi.any(),

      expiration_date: Joi.string().allow(""),

      item_id: Joi.number(),

      size: Joi.string().allow(""),

      identifier: Joi.any(),

      return_config: CatalogModel.ReturnConfig2(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      created_by: CatalogModel.UserSerializer(),

      weight: CatalogModel.WeightResponse1(),

      total_quantity: Joi.number(),
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
      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      failed: Joi.number(),

      succeed: Joi.number(),

      total: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      modified_by: Joi.any(),

      company_id: Joi.number(),
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
      item_weight_unit_of_measure: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      expiration_date: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      quantity: Joi.number(),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      price: Joi.number(),

      store_code: Joi.string().allow("").required(),

      total_quantity: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.any(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      request_params: Joi.any(),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      store: Joi.array().items(Joi.number()),

      type: Joi.string().allow("").allow(null),

      brand: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      request_params: Joi.any(),
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

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow(""),

      store_id: Joi.number().required(),

      total_quantity: Joi.number().allow(null),
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
      reason: CatalogModel.InventoryFailedReason(),

      data: CatalogModel.InventoryPayload(),
    });
  }

  static InventoryUpdateResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponseItem()),

      message: Joi.string().allow("").required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      hs2_code: Joi.string().allow(""),

      threshold2: Joi.number(),

      threshold1: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      tax_on_esp: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tax2: Joi.number(),

      hsn_code: Joi.string().allow(""),

      company_id: Joi.number(),

      tax1: Joi.number(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      is_active: Joi.boolean(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      threshold2: Joi.number(),

      threshold1: Joi.number().required(),

      tax_on_mrp: Joi.boolean().required(),

      tax_on_esp: Joi.boolean(),

      uid: Joi.number(),

      tax2: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      tax1: Joi.number().required(),
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
      rate: Joi.number().required(),

      cess: Joi.number(),

      threshold: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      reporting_hsn: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      created_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      item_total: Joi.number(),

      has_previous: Joi.boolean(),

      size: Joi.number(),

      current: Joi.string().allow(""),

      has_next: Joi.boolean(),
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
      logo: CatalogModel.Media(),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      discount: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
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
      logo: CatalogModel.Media(),

      priority_order: Joi.number(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

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
      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.Child()),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
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

  static ApplicationProductListingResponse() {
    return Joi.object({
      operators: Joi.any(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      medias: Joi.array().items(CatalogModel.Media1()),

      color: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      promo_meta: Joi.any(),

      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating_count: Joi.number(),

      product_online_date: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      rating: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryPage() {
    return Joi.object({
      item_total: Joi.number().required(),

      has_previous: Joi.boolean(),

      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),

      has_next: Joi.boolean(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),

      page: CatalogModel.InventoryPage().required(),
    });
  }

  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static ArticleQuery() {
    return Joi.object({
      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

      ignored_stores: Joi.array().items(Joi.number()),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      article_assignment: CatalogModel.ArticleAssignment(),

      group_id: Joi.string().allow(""),

      quantity: Joi.number(),

      meta: Joi.any(),

      query: CatalogModel.ArticleQuery(),
    });
  }

  static AssignStore() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      channel_type: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      pincode: Joi.string().allow("").required(),

      channel_identifier: Joi.string().allow(""),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      company_id: Joi.number(),
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
      _id: Joi.string().allow(""),

      price_effective: Joi.number(),

      store_id: Joi.number(),

      uid: Joi.string().allow(""),

      item_id: Joi.number().required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      size: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      price_marked: Joi.number(),

      store_pincode: Joi.number(),

      group_id: Joi.string().allow(""),

      meta: Joi.any(),

      index: Joi.number(),

      status: Joi.boolean().required(),

      s_city: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      company_id: Joi.number(),
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

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      verified_by: CatalogModel.UserSerializer2(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      modified_by: CatalogModel.UserSerializer2(),
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
      opening: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),

      closing: CatalogModel.LocationTimingSerializer(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      store_type: Joi.string().allow(""),

      warnings: Joi.any(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      name: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer1(),

      integration_type: CatalogModel.LocationIntegrationType(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      display_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      address: CatalogModel.GetAddressSerializer().required(),

      verified_by: CatalogModel.UserSerializer1(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      manager: CatalogModel.LocationManagerSerializer(),

      company: CatalogModel.GetCompanySerializer(),

      phone_number: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      code: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),
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
      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
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
