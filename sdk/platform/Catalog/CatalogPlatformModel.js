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
      app_id: Joi.string().allow(""),

      result: CatalogModel.SearchKeywordResult().required(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      result: Joi.any(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      status: Joi.number(),

      error: Joi.string().allow(""),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),
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

  static Media() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      query: Joi.any(),

      url: Joi.string().allow(""),

      params: Joi.any(),

      type: Joi.string().allow(""),
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
      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      action: CatalogModel.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),
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
      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      min_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      meta: Joi.any(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),

      modified_by: Joi.any(),
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
      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),

      modified_by: Joi.any(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),

      modified_by: Joi.any(),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.string().allow(""),

      min_effective: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      price: Joi.any(),

      uid: Joi.number(),

      attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      identifier: Joi.any(),

      quantity: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      name: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      item_code: Joi.string().allow(""),
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

  static GetProducts() {
    return Joi.object({
      min_quantity: Joi.number(),

      price: CatalogModel.Price(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_uid: Joi.number(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.GetProducts()),

      slug: Joi.string().allow(""),

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
      created_by: Joi.any(),

      brand_id: Joi.number(),

      active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      modified_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      image: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      guide: CatalogModel.Guide(),

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
      created_by: Joi.any(),

      brand_id: Joi.number(),

      active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      guide: Joi.any(),

      company_id: Joi.number(),

      modified_by: Joi.any(),
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
      minimum: Joi.number(),

      increment_unit: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      seo: CatalogModel.SEOData(),

      alt_text: Joi.any(),

      moq: CatalogModel.MOQData(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),
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
      minimum: Joi.number(),

      increment_unit: Joi.number(),

      maximum: Joi.number(),
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
      seo: CatalogModel.ApplicationItemSEO(),

      alt_text: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

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
      data: Joi.array().items(Joi.any()).required(),

      condition: Joi.array().items(Joi.any()),

      values: Joi.array().items(Joi.any()),
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
      priority: Joi.number().required(),

      key: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      unit: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),
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

      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      default_key: Joi.string().allow("").required(),
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

      variant: Joi.any(),

      detail: Joi.any(),

      similar: Joi.any(),
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
      key: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),

      display: Joi.string().allow(""),

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
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      size: CatalogModel.ProductSize().required(),

      key: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),
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
      priority: Joi.number().required(),

      size: CatalogModel.ProductSize(),

      key: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),
    });
  }

  static ConfigurationListingSort() {
    return Joi.object({
      config: Joi.array().items(CatalogModel.ConfigurationListingSortConfig()),

      default_key: Joi.string().allow("").required(),
    });
  }

  static ConfigurationBucketPoints() {
    return Joi.object({
      end: Joi.number(),

      start: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      sort: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      map: Joi.any(),

      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map_values: Joi.array().items(Joi.any()),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      display_name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      type: Joi.string().allow("").required(),
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
      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      created_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      listing: CatalogModel.ConfigurationListing(),

      modified_by: Joi.any(),

      type: Joi.string().allow(""),
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

      config_id: Joi.string().allow(""),

      created_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      listing: CatalogModel.ConfigurationListing(),

      modified_by: Joi.any(),

      type: Joi.string().allow(""),
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

      id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),
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
      kind: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      min: Joi.number(),

      count: Joi.number(),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),

      display: Joi.string().allow("").required(),

      is_selected: Joi.boolean().required(),

      value: Joi.any().required(),

      selected_max: Joi.number(),
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
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

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
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
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
      meta: Joi.any(),

      url: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static BannerImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ImageUrls() {
    return Joi.object({
      portrait: CatalogModel.BannerImage(),

      landscape: CatalogModel.BannerImage(),
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
      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      priority: Joi.number(),

      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      page: CatalogModel.Page(),
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

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      start: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
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
      is_visible: Joi.boolean(),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      type: Joi.string().allow("").required(),

      sort_on: Joi.string().allow(""),

      published: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),

      modified_by: CatalogModel.UserInfo(),

      badge: CatalogModel.CollectionBadge(),

      app_id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo(),

      _locale_language: Joi.any(),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      logo: CatalogModel.CollectionImage().required(),

      banners: CatalogModel.CollectionBanner().required(),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      tags: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      priority: Joi.number(),

      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      banners: CatalogModel.ImageUrls(),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      priority: Joi.number(),

      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      is_visible: Joi.boolean(),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      type: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      published: Joi.boolean(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      badge: CatalogModel.CollectionBadge(),

      _locale_language: Joi.any(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      banners: CatalogModel.CollectionBanner(),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      tags: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),
    });
  }

  static Price1() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: CatalogModel.Price1(),

      effective: CatalogModel.Price1(),
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
      color: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      sellable: Joi.boolean(),

      brand: CatalogModel.ProductBrand(),

      rating_count: Joi.number(),

      type: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      rating: Joi.number(),

      attributes: Joi.any(),

      promo_meta: Joi.any(),

      name: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      description: Joi.string().allow(""),

      uid: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      has_variant: Joi.boolean(),

      item_code: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
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
      total_sizes: Joi.number(),

      total_articles: Joi.number(),

      available_articles: Joi.number(),

      name: Joi.string().allow(""),

      available_sizes: Joi.number(),

      article_freshness: Joi.number(),
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
      data: CatalogModel.CrossSellingData(),

      brand_distribution: CatalogModel.CatalogInsightBrand(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),

      store_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      enabled: Joi.boolean().required(),

      created_by: Joi.any(),

      store_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      modified_on: Joi.number().required(),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

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
      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_id: Joi.number(),

      total_article: Joi.number(),

      company_id: Joi.number(),

      brand_name: Joi.string().allow(""),
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
      manager: Joi.any(),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      timing: Joi.any(),

      store_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      address: Joi.any(),

      company_id: Joi.number(),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.StoreDetail()),

      page: CatalogModel.Page(),
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

  static AttributeSchemaRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      allowed_values: Joi.array().items(Joi.string().allow("")),

      mandatory: Joi.boolean(),

      multi: Joi.boolean(),

      format: Joi.string().allow(""),

      range: CatalogModel.AttributeSchemaRange(),

      type: Joi.string().allow("").required(),
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
      enabled_for_end_consumer: Joi.boolean(),

      details: CatalogModel.AttributeMasterDetails(),

      filters: CatalogModel.AttributeMasterFilter(),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      logo: Joi.string().allow(""),

      id: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      meta: CatalogModel.AttributeMasterMeta(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      template_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      uid: Joi.number(),
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
      status: Joi.number(),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      created_by: CatalogModel.UserSerializer(),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      page_no: Joi.number(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      search: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      page_size: Joi.number(),
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
      status: Joi.number(),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      uid: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      platforms: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number().required(),
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
      username: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      _id: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      verified_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      created_on: Joi.string().allow("").required(),

      _cls: Joi.any(),

      _custom_json: Joi.any(),

      name: Joi.any().required(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      slug: Joi.any(),

      synonyms: Joi.array().items(Joi.any()),

      priority_order: Joi.number().required(),

      modified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      created_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),
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
      command: Joi.any(),

      product_publish: Joi.any(),

      country_of_origin: Joi.any(),

      is_active: Joi.any(),

      hsn_code: Joi.any(),

      sizes: Joi.any(),

      currency: Joi.any(),

      media: Joi.any(),

      product_group_tag: Joi.any(),

      category_slug: Joi.any(),

      short_description: Joi.any(),

      size_guide: Joi.any(),

      is_dependent: Joi.any(),

      slug: Joi.any(),

      trader_type: Joi.any(),

      name: Joi.any(),

      variants: Joi.any(),

      item_type: Joi.any(),

      description: Joi.any(),

      no_of_boxes: Joi.any(),

      return_config: Joi.any(),

      highlights: Joi.any(),

      brand_uid: Joi.any(),

      custom_order: Joi.any(),

      teaser_tag: Joi.any(),

      tags: Joi.any(),

      multi_size: Joi.any(),

      trader: Joi.any(),

      item_code: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      required: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

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

  static TemplateDetails() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),
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
      data: Joi.any(),

      message: Joi.string().allow(""),
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
      data: CatalogModel.HSNData(),

      message: Joi.string().allow(""),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductDownloadItemsData() {
    return Joi.object({
      brand: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      trigger_on: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      seller_id: Joi.number(),

      task_id: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      id: Joi.string().allow(""),

      template_tags: Joi.any(),

      url: Joi.string().allow(""),
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

  static CategoryMappingValues() {
    return Joi.object({
      catalog_id: Joi.number(),

      name: Joi.string().allow("").required(),
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
      l1: Joi.number().required(),

      department: Joi.number().required(),

      l2: Joi.number().required(),
    });
  }

  static Media2() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static Category() {
    return Joi.object({
      created_by: Joi.any(),

      priority: Joi.number(),

      uid: Joi.number(),

      marketplaces: CatalogModel.CategoryMapping(),

      departments: Joi.array().items(Joi.number()).required(),

      created_on: Joi.string().allow(""),

      level: Joi.number().required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      id: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      slug: Joi.string().allow(""),

      media: CatalogModel.Media2(),
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
      priority: Joi.number(),

      marketplaces: CatalogModel.CategoryMapping(),

      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      slug: Joi.string().allow(""),

      media: CatalogModel.Media2(),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      uid: Joi.number(),

      message: Joi.string().allow(""),
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

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static Logo() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

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

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.any().required(),

      type: Joi.string().allow(""),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static Image() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      all_identifiers: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      category_uid: Joi.number(),

      product_publish: CatalogModel.ProductPublish(),

      moq: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      is_active: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      currency: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      category_slug: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      short_description: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      variant_group: Joi.any(),

      pending: Joi.string().allow(""),

      id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      tax_identifier: Joi.any(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      all_sizes: Joi.array().items(Joi.any()),

      is_physical: Joi.boolean(),

      variant_media: Joi.any(),

      attributes: Joi.any(),

      is_set: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      variants: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      item_type: Joi.string().allow(""),

      company_id: Joi.number(),

      image_nature: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      return_config: CatalogModel.ReturnConfigResponse(),

      brand_uid: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      custom_order: Joi.any(),

      no_of_boxes: Joi.number(),

      teaser_tag: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      all_company_ids: Joi.array().items(Joi.number()),

      images: Joi.array().items(CatalogModel.Image()),

      multi_size: Joi.boolean(),

      category: Joi.any(),

      item_code: Joi.string().allow(""),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSchemaV2()),

      page: CatalogModel.Page(),
    });
  }

  static ProductPublish1() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      reporting_hsn: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),

      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
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
      product_publish: CatalogModel.ProductPublish1(),

      country_of_origin: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      sizes: Joi.array().items(Joi.any()).required(),

      currency: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      category_slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      template_tag: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      variant_group: Joi.any(),

      is_dependent: Joi.boolean(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      slug: Joi.string().allow("").required(),

      requester: Joi.string().allow(""),

      bulk_job_id: Joi.string().allow(""),

      attributes: Joi.any(),

      variant_media: Joi.any(),

      is_set: Joi.boolean(),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      variants: Joi.any(),

      change_request_id: Joi.any(),

      item_type: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      description: Joi.string().allow(""),

      action: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      no_of_boxes: Joi.number(),

      return_config: CatalogModel.ReturnConfig().required(),

      brand_uid: Joi.number().required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      uid: Joi.number().allow(null),

      custom_order: CatalogModel.CustomOrder(),

      net_quantity: CatalogModel.NetQuantity(),

      teaser_tag: CatalogModel.TeaserTag(),

      tags: Joi.array().items(Joi.string().allow("")),

      multi_size: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      item_code: Joi.string().allow("").required(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      uid: Joi.number(),

      brand_uid: Joi.number(),

      category_uid: Joi.number(),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

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
      enabled_for_end_consumer: Joi.boolean(),

      unit: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      variant: Joi.boolean(),

      is_nested: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      suggestion: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      raw_key: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      synonyms: Joi.any(),
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
      item_weight_unit_of_measure: Joi.any().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_height: Joi.number().required(),

      size: Joi.any().required(),

      item_width: Joi.number().required(),

      item_length: Joi.number().required(),

      item_weight: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),
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
      all_identifiers: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      category_uid: Joi.number(),

      product_publish: CatalogModel.ProductPublished(),

      moq: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      is_active: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      currency: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      category_slug: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      short_description: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      variant_group: Joi.any(),

      pending: Joi.string().allow(""),

      id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      tax_identifier: Joi.any(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      all_sizes: Joi.array().items(Joi.any()),

      is_physical: Joi.boolean(),

      variant_media: Joi.any(),

      attributes: Joi.any(),

      is_set: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      variants: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      item_type: Joi.string().allow(""),

      company_id: Joi.number(),

      image_nature: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      return_config: CatalogModel.ReturnConfigResponse(),

      brand_uid: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      custom_order: Joi.any(),

      no_of_boxes: Joi.number(),

      teaser_tag: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      all_company_ids: Joi.array().items(Joi.number()),

      images: Joi.array().items(CatalogModel.Image()),

      multi_size: Joi.boolean(),

      category: Joi.any(),

      item_code: Joi.string().allow(""),
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
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      full_name: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      succeed: Joi.number(),

      created_by: CatalogModel.UserDetail1(),

      total: Joi.number(),

      template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      file_path: Joi.string().allow(""),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      modified_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      template: CatalogModel.ProductTemplate(),
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
      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      succeed: Joi.number(),

      created_by: CatalogModel.UserInfo1(),

      custom_template_tag: Joi.string().allow(""),

      total: Joi.number(),

      cancelled: Joi.number(),

      created_on: Joi.string().allow("").required(),

      template_tag: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      modified_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      company_id: Joi.number().required(),

      modified_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      data: Joi.array().items(Joi.any()).required(),

      template_tag: Joi.string().allow("").required(),

      company_id: Joi.number().required(),
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

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      succeed: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      total: Joi.number(),

      cancelled: Joi.number(),

      created_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      modified_on: Joi.string().allow(""),

      retry: Joi.number(),

      id: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

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

      url: Joi.string().allow("").required(),

      company_id: Joi.number(),
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
      price: Joi.number(),

      price_transfer: Joi.number(),

      sellable_quantity: Joi.number(),

      uid: Joi.string().allow(""),

      store: Joi.any(),

      identifiers: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      item_id: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      price_effective: Joi.number(),

      currency: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_value: Joi.any().required(),

      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),
    });
  }

  static InvSize() {
    return Joi.object({
      set: CatalogModel.InventorySet(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      price: Joi.number(),

      price_transfer: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_height: Joi.number().allow(null),

      quantity: Joi.number().required(),

      is_set: Joi.boolean(),

      size: Joi.any().required(),

      item_width: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_weight: Joi.number().allow(null),

      price_effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),
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

      item: CatalogModel.ItemQuery().required(),

      company_id: Joi.number().required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      marked: Joi.number().required(),

      transfer: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),
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

      sellable: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static Trader1() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      length: Joi.number().required(),

      width: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      height: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      expiration_date: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse().required(),

      company: CatalogModel.CompanyMeta().required(),

      store: CatalogModel.StoreMeta().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      identifier: Joi.any().required(),

      item_id: Joi.number().required(),

      country_of_origin: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      brand: CatalogModel.BrandMeta().required(),

      is_active: Joi.boolean(),

      set: CatalogModel.InventorySet(),

      price: CatalogModel.PriceMeta().required(),

      raw_meta: Joi.any(),

      stage: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      meta: Joi.any().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer(),

      trace_id: Joi.string().allow(""),

      fragile: Joi.boolean().required(),

      created_by: CatalogModel.UserSerializer(),

      added_on_store: Joi.string().allow(""),

      is_set: Joi.boolean(),

      _custom_json: Joi.any(),

      quantities: CatalogModel.Quantities(),

      fynd_meta: Joi.any(),

      return_config: CatalogModel.ReturnConfig1(),

      uid: Joi.string().allow("").required(),

      fynd_article_code: Joi.string().allow("").required(),

      fynd_item_code: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      track_inventory: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      total_quantity: Joi.number().required(),

      dimension: CatalogModel.DimensionResponse().required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),
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

      created_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      marked: Joi.number(),

      transfer: Joi.number(),

      tp_notes: Joi.any(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
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

      sellable: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static Trader2() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      width: Joi.number(),

      unit: Joi.string().allow(""),

      height: Joi.number(),

      length: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      expiration_date: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      company: CatalogModel.CompanyMeta1(),

      store: CatalogModel.ArticleStoreResponse(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      identifier: Joi.any(),

      date_meta: CatalogModel.DateMeta(),

      item_id: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      size: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      platforms: Joi.any(),

      price: CatalogModel.PriceArticle(),

      id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      trace_id: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      is_set: Joi.boolean(),

      inventory_updated_on: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      return_config: CatalogModel.ReturnConfig2(),

      uid: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      track_inventory: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      total_quantity: Joi.number(),

      dimension: CatalogModel.DimensionResponse1(),
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
      succeed: Joi.number(),

      created_by: Joi.any(),

      cancelled: Joi.number(),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      id: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

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
      trace_id: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      price: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      currency: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      total_quantity: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      user: Joi.any(),

      company_id: Joi.number().required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      request_params: Joi.any(),

      url: Joi.string().allow(""),
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
      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      request_params: Joi.any(),
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
      trace_id: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      store_id: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      total_quantity: Joi.number().allow(null),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      meta: Joi.any(),

      payload: Joi.array().items(CatalogModel.InventoryPayload()),

      company_id: Joi.number().required(),
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
      data: CatalogModel.InventoryPayload(),

      reason: CatalogModel.InventoryFailedReason(),
    });
  }

  static InventoryUpdateResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponseItem()),

      message: Joi.string().allow("").required(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      tax1: Joi.number().required(),

      uid: Joi.number(),

      threshold1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      threshold2: Joi.number(),

      is_active: Joi.boolean(),

      tax2: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      tax_on_mrp: Joi.boolean().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      company_id: Joi.number().required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax1: Joi.number(),

      threshold1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      threshold2: Joi.number(),

      tax2: Joi.number(),

      hsn_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      hs2_code: Joi.string().allow(""),

      company_id: Joi.number(),
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
      effective_date: Joi.string().allow("").required(),

      cess: Joi.number(),

      threshold: Joi.number().required(),

      rate: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      created_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      hsn_code_id: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      size: Joi.number(),

      item_total: Joi.number(),

      current: Joi.string().allow(""),
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
      uid: Joi.number(),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      discount: Joi.string().allow(""),

      action: CatalogModel.Action(),
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

  static DepartmentIdentifier() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.Child()),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),
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

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      color: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      rating_count: Joi.number(),

      type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      rating: Joi.number(),

      attributes: Joi.any(),

      promo_meta: Joi.any(),

      name: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      description: Joi.string().allow(""),

      uid: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      has_variant: Joi.boolean(),

      item_code: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),
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
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static ArticleQuery() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      ignored_stores: Joi.array().items(Joi.number()),

      item_id: Joi.number().required(),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      quantity: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment(),

      group_id: Joi.string().allow(""),

      meta: Joi.any(),

      query: CatalogModel.ArticleQuery(),
    });
  }

  static AssignStore() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      channel_identifier: Joi.string().allow(""),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      store_ids: Joi.array().items(Joi.number()),

      channel_type: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      company_id: Joi.number(),
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
      _id: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      store_pincode: Joi.number(),

      uid: Joi.string().allow(""),

      index: Joi.number(),

      store_id: Joi.number(),

      status: Joi.boolean().required(),

      item_id: Joi.number().required(),

      quantity: Joi.number().required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      size: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      group_id: Joi.string().allow(""),

      price_effective: Joi.number(),

      meta: Joi.any(),

      company_id: Joi.number(),

      s_city: Joi.string().allow(""),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      longitude: Joi.number(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      created_by: CatalogModel.UserSerializer1(),

      verified_by: CatalogModel.UserSerializer1(),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      modified_by: CatalogModel.UserSerializer1(),

      verified_on: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      enabled: Joi.boolean(),

      password: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_invoice: CatalogModel.InvoiceCredSerializer(),

      e_waybill: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean(),

      legal_name: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
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

  static LocationTimingSerializer() {
    return Joi.object({
      minute: Joi.number(),

      hour: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      opening: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      closing: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      company: CatalogModel.GetCompanySerializer(),

      code: Joi.string().allow("").required(),

      address: CatalogModel.GetAddressSerializer().required(),

      phone_number: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      created_on: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      store_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      created_by: CatalogModel.UserSerializer2(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow("").required(),

      integration_type: CatalogModel.LocationIntegrationType(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      verified_by: CatalogModel.UserSerializer2(),

      manager: CatalogModel.LocationManagerSerializer(),

      uid: Joi.number(),

      warnings: Joi.any(),
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
      app_id: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

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
