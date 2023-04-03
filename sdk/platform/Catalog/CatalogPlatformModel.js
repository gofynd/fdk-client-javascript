const Joi = require("joi");

class CatalogModel {
  static SearchKeywordResult() {
    return Joi.object({
      query: Joi.any().required(),

      sort_on: Joi.string().allow("").required(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      result: CatalogModel.SearchKeywordResult().required(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      result: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      meta: Joi.any(),

      error: Joi.string().allow(""),

      code: Joi.string().allow(""),

      status: Joi.number(),
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

  static AutocompletePageAction() {
    return Joi.object({
      query: Joi.any(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      params: Joi.any(),
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
      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),

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

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetAutocompleteWordsData()),

      page: CatalogModel.Page(),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      min_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      meta: Joi.any(),

      created_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      created_on: Joi.string().allow(""),
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
      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      meta: Joi.any(),

      created_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      created_on: Joi.string().allow(""),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      name: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      attributes: Joi.any(),

      identifier: Joi.any(),

      quantity: Joi.number(),

      item_code: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      price: Joi.any(),

      slug: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      short_description: Joi.string().allow(""),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

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

  static GetProducts() {
    return Joi.object({
      min_quantity: Joi.number(),

      allow_remove: Joi.boolean(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      max_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.Price(),

      product_uid: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow(""),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),
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
      unit: Joi.string().allow(""),

      values: Joi.array().items(Joi.any()),

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
      name: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      modified_on: Joi.string().allow(""),

      active: Joi.boolean(),

      title: Joi.string().allow("").required(),

      image: Joi.string().allow(""),

      modified_by: Joi.any(),

      tag: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      company_id: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      guide: Joi.any(),

      modified_on: Joi.string().allow(""),

      active: Joi.boolean(),

      title: Joi.string().allow(""),

      modified_by: Joi.any(),

      tag: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
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
      key: Joi.any().required(),

      value: Joi.any().required(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_json: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      alt_text: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      success: Joi.boolean(),

      uid: Joi.number(),
    });
  }

  static MOQData() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static SEOData() {
    return Joi.object({
      title: Joi.any(),

      description: Joi.any(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      moq: CatalogModel.MOQData(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      alt_text: Joi.any(),

      seo: CatalogModel.SEOData(),
    });
  }

  static GetConfigMetadataResponse() {
    return Joi.object({
      values: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),

      condition: Joi.array().items(Joi.any()),
    });
  }

  static PageResponseType() {
    return Joi.object({
      has_next: Joi.boolean().required(),

      current: Joi.number().required(),

      total_count: Joi.number().required(),

      next: Joi.number().required(),
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
      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

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
      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      default_key: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

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

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      units: Joi.array().items(Joi.any()),

      filter_types: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),
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
      detail: Joi.any(),

      compare: Joi.any(),

      variant: Joi.any(),

      similar: Joi.any(),
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
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      size: CatalogModel.ProductSize().required(),

      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
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
      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      title: Joi.string().allow(""),

      priority: Joi.number().required(),

      subtitle: Joi.string().allow(""),

      key: Joi.string().allow("").required(),
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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),
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
      end: Joi.number(),

      display: Joi.string().allow(""),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      value: Joi.string().allow(""),

      sort: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map: Joi.any(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      type: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

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

  static ConfigurationListing() {
    return Joi.object({
      sort: CatalogModel.ConfigurationListingSort().required(),

      filter: CatalogModel.ConfigurationListingFilter().required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      id: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      modified_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      app_id: Joi.string().allow("").required(),
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
      product: CatalogModel.ConfigurationProduct(),

      modified_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      app_id: Joi.string().allow("").required(),
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
      id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_type: Joi.string().allow("").required(),

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

      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      selected_max: Joi.number(),

      count: Joi.number(),

      display: Joi.string().allow("").required(),

      selected_min: Joi.number(),

      value: Joi.any().required(),

      max: Joi.number(),

      query_format: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      currency_symbol: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),
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

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static BannerImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),

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
      meta: Joi.any(),

      url: Joi.string().allow("").required(),

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

  static GetCollectionDetailNest() {
    return Joi.object({
      type: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      _schedule: Joi.any(),

      uid: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.ImageUrls(),

      is_active: Joi.boolean(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      cron: Joi.any(),

      logo: CatalogModel.Media1(),

      allow_facets: Joi.boolean(),

      meta: Joi.any(),

      action: CatalogModel.Action(),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      page: CatalogModel.Page(),
    });
  }

  static UserInfo() {
    return Joi.object({
      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),
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
      portrait: CatalogModel.CollectionImage().required(),

      landscape: CatalogModel.CollectionImage().required(),
    });
  }

  static SeoDetail() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserInfo(),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      published: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: CatalogModel.CollectionBadge(),

      _schedule: CatalogModel.CollectionSchedule(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.CollectionBanner().required(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      _locale_language: Joi.any(),

      priority: Joi.number(),

      slug: Joi.string().allow("").required(),

      logo: CatalogModel.CollectionImage().required(),

      is_visible: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      meta: Joi.any(),

      seo: CatalogModel.SeoDetail(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.ImageUrls(),

      is_active: Joi.boolean(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      cron: Joi.any(),

      logo: CatalogModel.BannerImage(),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      meta: Joi.any(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      _schedule: Joi.any(),

      uid: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.ImageUrls(),

      is_active: Joi.boolean(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      cron: Joi.any(),

      logo: CatalogModel.Media1(),

      allow_facets: Joi.boolean(),

      meta: Joi.any(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      published: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: CatalogModel.CollectionBadge(),

      _schedule: CatalogModel.CollectionSchedule(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.CollectionBanner(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      _locale_language: Joi.any(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      is_visible: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      meta: Joi.any(),

      seo: CatalogModel.SeoDetail(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      logo: CatalogModel.Media1(),
    });
  }

  static Price1() {
    return Joi.object({
      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),
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
      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      image_nature: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      attributes: Joi.any(),

      price: CatalogModel.ProductListingPrice(),

      uid: Joi.number(),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      has_variant: Joi.boolean(),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      discount: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      rating_count: Joi.number(),

      sellable: Joi.boolean(),

      item_code: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

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

      type: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      total_articles: Joi.number(),

      available_articles: Joi.number(),

      article_freshness: Joi.number(),

      total_sizes: Joi.number(),

      available_sizes: Joi.number(),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      count: Joi.number(),

      out_of_stock_count: Joi.number(),

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
      opt_level: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      opt_level: Joi.string().allow("").required(),

      modified_on: Joi.number().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      enabled: Joi.boolean().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      created_by: Joi.any(),

      company_id: Joi.number().required(),

      created_on: Joi.number().required(),
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
      name: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
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
      store: Joi.number(),

      brand: Joi.number(),

      company: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      address: Joi.any(),

      modified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      manager: Joi.any(),

      store_code: Joi.string().allow(""),

      timing: Joi.any(),

      uid: Joi.number(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.StoreDetail()),

      page: CatalogModel.Page(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      depends_on: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      indexing: Joi.boolean().required(),
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
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      mandatory: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),

      type: Joi.string().allow("").required(),

      multi: Joi.boolean(),

      format: Joi.string().allow(""),

      allowed_values: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GenderDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.AttributeMasterFilter(),

      logo: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      meta: CatalogModel.AttributeMasterMeta(),

      enabled_for_end_consumer: Joi.boolean(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      schema: CatalogModel.AttributeMaster(),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),

      page: CatalogModel.Page(),
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
      _id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      search: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      page_no: Joi.number(),

      page_size: Joi.number(),

      priority_order: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      item_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      errors: Joi.any(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      platforms: Joi.any(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number().required(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
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
      name: Joi.any().required(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.any(),

      _id: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      synonyms: Joi.array().items(Joi.any()),

      verified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail(),

      priority_order: Joi.number().required(),

      slug: Joi.any(),

      uid: Joi.number(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      name: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      is_archived: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      is_expirable: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),
    });
  }

  static TemplatesResponse() {
    return Joi.object({
      items: CatalogModel.ProductTemplate(),

      page: CatalogModel.Page(),
    });
  }

  static Properties() {
    return Joi.object({
      country_of_origin: Joi.any(),

      variants: Joi.any(),

      product_publish: Joi.any(),

      tags: Joi.any(),

      command: Joi.any(),

      highlights: Joi.any(),

      media: Joi.any(),

      item_type: Joi.any(),

      description: Joi.any(),

      name: Joi.any(),

      custom_order: Joi.any(),

      brand_uid: Joi.any(),

      trader: Joi.any(),

      currency: Joi.any(),

      return_config: Joi.any(),

      is_active: Joi.any(),

      teaser_tag: Joi.any(),

      hsn_code: Joi.any(),

      multi_size: Joi.any(),

      size_guide: Joi.any(),

      sizes: Joi.any(),

      is_dependent: Joi.any(),

      slug: Joi.any(),

      product_group_tag: Joi.any(),

      category_slug: Joi.any(),

      no_of_boxes: Joi.any(),

      item_code: Joi.any(),

      trader_type: Joi.any(),

      short_description: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      required: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),
    });
  }

  static TemplateValidationData() {
    return Joi.object({
      template_validation: Joi.any(),

      global_validation: CatalogModel.GlobalValidation(),
    });
  }

  static TemplateDetails() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      is_expirable: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),
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
      type: Joi.string().allow(""),

      brand: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      id: Joi.string().allow(""),

      template_tags: Joi.any(),

      url: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      seller_id: Joi.number(),

      task_id: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      status: Joi.string().allow(""),
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
      data: Joi.array().items(Joi.any()),

      multivalue: Joi.boolean(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      department: Joi.number().required(),

      l2: Joi.number().required(),

      l1: Joi.number().required(),
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

      google: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),
    });
  }

  static Media2() {
    return Joi.object({
      landscape: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static Category() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      is_active: Joi.boolean().required(),

      level: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      priority: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      marketplaces: CatalogModel.CategoryMapping(),

      created_by: Joi.any(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      media: CatalogModel.Media2(),

      created_on: Joi.string().allow(""),
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
      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      is_active: Joi.boolean().required(),

      level: Joi.number().required(),

      priority: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      marketplaces: CatalogModel.CategoryMapping(),

      slug: Joi.string().allow(""),

      media: CatalogModel.Media2(),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CategoryUpdateResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static SingleCategoryResponse() {
    return Joi.object({
      data: CatalogModel.Category(),
    });
  }

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static Brand() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Logo(),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static Product() {
    return Joi.object({
      country_of_origin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      moq: Joi.any(),

      modified_on: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      category: Joi.any(),

      variants: Joi.any(),

      product_publish: CatalogModel.ProductPublished(),

      brand: CatalogModel.Brand(),

      image_nature: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantityResponse(),

      primary_color: Joi.string().allow(""),

      created_by: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      highlights: Joi.array().items(Joi.string().allow("")),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(CatalogModel.Media1()),

      item_type: Joi.string().allow(""),

      is_set: Joi.boolean(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      attributes: Joi.any(),

      custom_order: Joi.any(),

      brand_uid: Joi.number(),

      variant_media: Joi.any(),

      variant_group: Joi.any(),

      uid: Joi.number(),

      trader: Joi.array().items(Joi.any()),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      is_image_less_product: Joi.boolean(),

      _custom_json: Joi.any(),

      currency: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      is_active: Joi.boolean(),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      hsn_code: Joi.string().allow(""),

      category_uid: Joi.number(),

      multi_size: Joi.boolean(),

      sizes: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      category_slug: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      template_tag: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      modified_by: Joi.any(),

      item_code: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      verified_on: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      stage: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      company_id: Joi.number(),

      all_sizes: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Product()),

      page: CatalogModel.Page(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),
    });
  }

  static Trader() {
    return Joi.object({
      name: Joi.any().required(),

      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),

      returnable: Joi.boolean().required(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      url: Joi.string().allow("").allow(null),

      tag: Joi.string().allow("").allow(null),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      country_of_origin: Joi.string().allow("").required(),

      requester: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      variants: Joi.any(),

      product_publish: CatalogModel.ProductPublish(),

      tags: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantity(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      change_request_id: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      item_type: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      attributes: Joi.any(),

      custom_order: CatalogModel.CustomOrder(),

      brand_uid: Joi.number().required(),

      variant_media: Joi.any(),

      variant_group: Joi.any(),

      uid: Joi.number().allow(null),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      bulk_job_id: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      _custom_json: Joi.any(),

      currency: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig().required(),

      is_active: Joi.boolean(),

      teaser_tag: CatalogModel.TeaserTag(),

      multi_size: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()).required(),

      slug: Joi.string().allow("").required(),

      is_dependent: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      category_slug: Joi.string().allow("").required(),

      no_of_boxes: Joi.number(),

      template_tag: Joi.string().allow("").required(),

      item_code: Joi.string().allow("").required(),

      action: Joi.string().allow(""),

      company_id: Joi.number().required(),

      short_description: Joi.string().allow(""),
    });
  }

  static ProductVariants() {
    return Joi.object({
      name: Joi.string().allow(""),

      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      category_uid: Joi.number(),

      uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),
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
      departments: Joi.array().items(Joi.string().allow("")).required(),

      modified_on: Joi.string().allow(""),

      synonyms: Joi.any(),

      suggestion: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      schema: CatalogModel.AttributeMaster().required(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      raw_key: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      modified_by: Joi.any(),

      variant: Joi.boolean(),

      details: CatalogModel.AttributeMasterDetails().required(),

      created_on: Joi.string().allow(""),
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
      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),

      gtin_value: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_weight: Joi.number().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      size: Joi.any().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_length: Joi.number().required(),

      item_height: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_width: Joi.number().required(),
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
      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      template: CatalogModel.ProductTemplate(),

      template_tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserDetail1(),

      failed: Joi.number(),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      created_by: CatalogModel.UserDetail1(),

      total: Joi.number(),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),
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
      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      tracking_url: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      modified_by: CatalogModel.UserInfo1(),

      failed_records: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      created_by: CatalogModel.UserInfo1(),

      total: Joi.number(),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      company_id: Joi.number().required(),

      created_on: Joi.string().allow("").required(),

      custom_template_tag: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      created_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),
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

  static NestedTags() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductTagsViewResponse() {
    return Joi.object({
      items: CatalogModel.NestedTags(),
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
      tracking_url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserCommon(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      retry: Joi.number(),

      failed: Joi.number(),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      total: Joi.number(),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),
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
      company_id: Joi.number(),

      url: Joi.string().allow("").required(),

      user: Joi.any().required(),
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
      success: Joi.boolean(),

      data: CatalogModel.ProductSizeDeleteDataResponse(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      inventory_updated_on: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      quantity: Joi.number(),

      item_id: Joi.number(),

      price_effective: Joi.number(),

      price_transfer: Joi.number(),

      sellable_quantity: Joi.number(),

      size: Joi.string().allow(""),

      store: Joi.any(),

      price: Joi.number(),

      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      seller_identifier: Joi.string().allow(""),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),

      page: CatalogModel.Page(),
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

      quantity: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static GTIN() {
    return Joi.object({
      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),

      gtin_value: Joi.any().required(),
    });
  }

  static InvSize() {
    return Joi.object({
      item_weight: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      size: Joi.any().required(),

      price_effective: Joi.number().required(),

      expiration_date: Joi.string().allow(""),

      price_transfer: Joi.number().allow(null),

      quantity: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_length: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      price: Joi.number(),

      set: CatalogModel.InventorySet(),

      item_height: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      is_set: Joi.boolean(),

      item_width: Joi.number().allow(null),
    });
  }

  static ItemQuery() {
    return Joi.object({
      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      item: CatalogModel.ItemQuery().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      width: Joi.number().required(),

      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      height: Joi.number().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      effective: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      transfer: Joi.number().required(),

      marked: Joi.number().required(),

      tp_notes: Joi.any(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      address: Joi.string().allow("").required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
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

      not_available: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
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

  static InventorySellerResponse() {
    return Joi.object({
      country_of_origin: Joi.string().allow("").required(),

      tax_identifier: Joi.any(),

      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      raw_meta: Joi.any(),

      brand: CatalogModel.BrandMeta().required(),

      fynd_meta: Joi.any(),

      total_quantity: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      set: CatalogModel.InventorySet(),

      added_on_store: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      is_set: Joi.boolean(),

      seller_identifier: Joi.string().allow("").required(),

      fynd_item_code: Joi.string().allow("").required(),

      dimension: CatalogModel.DimensionResponse().required(),

      price: CatalogModel.PriceMeta().required(),

      weight: CatalogModel.WeightResponse().required(),

      uid: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      _custom_json: Joi.any(),

      return_config: CatalogModel.ReturnConfig1(),

      is_active: Joi.boolean(),

      identifier: Joi.any().required(),

      quantities: CatalogModel.Quantities(),

      fragile: Joi.boolean().required(),

      store: CatalogModel.StoreMeta().required(),

      modified_by: CatalogModel.UserSerializer(),

      company: CatalogModel.CompanyMeta().required(),

      fynd_article_code: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      stage: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
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

      effective: Joi.number(),

      transfer: Joi.number(),

      marked: Joi.number(),

      tp_notes: Joi.any(),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_default: Joi.boolean(),

      address: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
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

      not_available: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
    });
  }

  static DateMeta() {
    return Joi.object({
      added_on_store: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      id: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      platforms: Joi.any(),

      tax_identifier: Joi.any(),

      size: Joi.string().allow(""),

      item_id: Joi.number(),

      trace_id: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      total_quantity: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserSerializer(),

      track_inventory: Joi.boolean(),

      is_set: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      price: CatalogModel.PriceArticle(),

      weight: CatalogModel.WeightResponse1(),

      uid: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      return_config: CatalogModel.ReturnConfig2(),

      identifier: Joi.any(),

      quantities: CatalogModel.QuantitiesArticle(),

      date_meta: CatalogModel.DateMeta(),

      inventory_updated_on: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      modified_by: CatalogModel.UserSerializer(),

      company: CatalogModel.CompanyMeta1(),

      stage: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),
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
      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      failed: Joi.number(),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      created_by: Joi.any(),

      total: Joi.number(),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),
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
      currency: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),

      quantity: Joi.number(),

      price_effective: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      total_quantity: Joi.number(),

      price_marked: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      store_code: Joi.string().allow("").required(),

      price: Joi.number(),

      expiration_date: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),
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

  static InventoryExportJob() {
    return Joi.object({
      request_params: Joi.any(),

      url: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),
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
      request_params: Joi.any(),

      trigger_on: Joi.string().allow(""),

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
      data: Joi.array().items(CatalogModel.FilerList()),

      multivalues: Joi.boolean(),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      price_effective: Joi.number(),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number().allow(null),

      price_marked: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.number().required(),

      expiration_date: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      meta: Joi.any(),

      company_id: Joi.number().required(),

      payload: Joi.array().items(CatalogModel.InventoryPayload()),
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
      id: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      hs2_code: Joi.string().allow(""),

      threshold1: Joi.number(),

      hsn_code: Joi.string().allow(""),

      tax2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      threshold2: Joi.number(),

      company_id: Joi.number(),

      tax1: Joi.number(),
    });
  }

  static PageResponse() {
    return Joi.object({
      has_next: Joi.boolean(),

      current: Joi.string().allow(""),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      item_total: Joi.number(),
    });
  }

  static HsnCodesListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.HsnCodesObject()),

      page: CatalogModel.PageResponse(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      tax_on_mrp: Joi.boolean().required(),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      threshold1: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      tax2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      threshold2: Joi.number(),

      company_id: Joi.number().required(),

      tax1: Joi.number().required(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
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

      threshold: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),

      rate: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      modified_on: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      hsn_code: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      country_code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
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
      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      discount: Joi.string().allow(""),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

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
      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      priority_order: Joi.number(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
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
      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      childs: Joi.array().items(Joi.any()),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

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
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      operators: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      image_nature: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      attributes: Joi.any(),

      uid: Joi.number(),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      has_variant: Joi.boolean(),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      rating_count: Joi.number(),

      item_code: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      item_total: Joi.number().required(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),

      page: CatalogModel.InventoryPage().required(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
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

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),
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
      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      latitude: Joi.number(),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
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

      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),

      opening: CatalogModel.LocationTimingSerializer(),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      modified_by: CatalogModel.UserSerializer2(),

      verified_by: CatalogModel.UserSerializer2(),

      company_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      manager: CatalogModel.LocationManagerSerializer(),

      created_by: CatalogModel.UserSerializer1(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      integration_type: CatalogModel.LocationIntegrationType(),

      address: CatalogModel.GetAddressSerializer().required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      documents: Joi.array().items(CatalogModel.Document()),

      warnings: Joi.any(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      phone_number: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer1(),

      company: CatalogModel.GetCompanySerializer(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      uid: Joi.number().required(),

      app_id: Joi.string().allow("").required(),
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
