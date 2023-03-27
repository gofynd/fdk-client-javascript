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
      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      result: Joi.any(),

      uid: Joi.string().allow(""),
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
      status: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      error: Joi.string().allow(""),

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
      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

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
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetSearchWordsData()),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
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
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      query: Joi.any(),

      params: Joi.any(),

      url: Joi.string().allow(""),

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
      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      action: CatalogModel.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),
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
      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number().required(),

      min_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      company_id: Joi.number(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetProductBundleCreateResponse()),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      currency: Joi.string().allow(""),

      max_marked: Joi.number(),

      min_effective: Joi.number(),

      min_marked: Joi.number(),
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

  static LimitedProductData() {
    return Joi.object({
      country_of_origin: Joi.string().allow(""),

      identifier: Joi.any(),

      price: Joi.any(),

      images: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      quantity: Joi.number(),

      uid: Joi.number(),

      attributes: Joi.any(),

      item_code: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetProducts() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      price: CatalogModel.Price(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number(),

      min_quantity: Joi.number(),

      product_uid: Joi.number(),

      auto_select: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.LimitedProductData(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      logo: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.GetProducts()),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow(""),

      is_active: Joi.boolean(),

      company_id: Joi.number(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      company_id: Joi.number(),
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
      tag: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      brand_id: Joi.number(),

      guide: CatalogModel.Guide(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      active: Joi.boolean(),

      title: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      image: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static ListSizeGuide() {
    return Joi.object({
      page: Joi.any(),

      items: Joi.array().items(Joi.any()),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      tag: Joi.string().allow(""),

      brand_id: Joi.number(),

      name: Joi.string().allow(""),

      guide: Joi.any(),

      modified_by: Joi.any(),

      active: Joi.boolean(),

      title: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      subtitle: Joi.string().allow(""),
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

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      success: Joi.boolean(),

      uid: Joi.number(),
    });
  }

  static SEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static MOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static ApplicationItemResponse() {
    return Joi.object({
      seo: CatalogModel.SEO(),

      alt_text: Joi.any(),

      moq: CatalogModel.MOQ(),
    });
  }

  static GetConfigMetadataResponse() {
    return Joi.object({
      values: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),

      condition: Joi.array().items(Joi.any()),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      logo: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      is_default: Joi.boolean().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ConfigErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static PageResponseType() {
    return Joi.object({
      total_count: Joi.number().required(),

      current: Joi.number().required(),

      has_next: Joi.boolean().required(),

      next: Joi.number().required(),
    });
  }

  static GetConfigResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      page: CatalogModel.PageResponseType().required(),
    });
  }

  static ConfigSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationsSort() {
    return Joi.object({
      logo: Joi.string().allow(""),

      default_key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

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

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      filter_types: Joi.array().items(Joi.string().allow("")),

      units: Joi.array().items(Joi.any()),

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

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      detail: Joi.any(),

      similar: Joi.any(),

      variant: Joi.any(),

      compare: Joi.any(),
    });
  }

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      listing: CatalogModel.MetaDataListingResponse(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),
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
      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      condition: Joi.string().allow(""),

      sort: Joi.string().allow(""),

      value: Joi.string().allow(""),

      map: Joi.any(),

      map_values: Joi.array().items(Joi.any()),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      display_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
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
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),
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

  static ConfigurationProductConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize(),

      title: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

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
      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize().required(),

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

  static ConfigurationProduct() {
    return Joi.object({
      similar: CatalogModel.ConfigurationProductSimilar().required(),

      variant: CatalogModel.ConfigurationProductVariant().required(),
    });
  }

  static AppConfiguration() {
    return Joi.object({
      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),

      config_id: Joi.string().allow(""),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      config_id: Joi.string().allow(""),
    });
  }

  static GetAppCatalogConfiguration() {
    return Joi.object({
      is_default: Joi.boolean(),

      data: CatalogModel.AppCatalogConfiguration(),
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
      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      id: Joi.string().allow(""),

      config_id: Joi.string().allow(""),
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
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selected_max: Joi.number(),

      currency_code: Joi.string().allow(""),

      value: Joi.any().required(),

      min: Joi.number(),

      is_selected: Joi.boolean().required(),

      selected_min: Joi.number(),

      display_format: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      max: Joi.number(),

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
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
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

      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),
    });
  }

  static UserInfo() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static SeoDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      logo: CatalogModel.CollectionImage().required(),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      banners: CatalogModel.CollectionBanner().required(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      sort_on: Joi.string().allow(""),

      published: Joi.boolean(),

      allow_sort: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      name: Joi.string().allow("").required(),

      allow_facets: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      app_id: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo(),

      tags: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      _custom_json: Joi.any(),

      is_visible: Joi.boolean(),

      description: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      created_by: CatalogModel.UserInfo(),
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

  static CollectionCreateResponse() {
    return Joi.object({
      logo: CatalogModel.BannerImage(),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
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
      url: Joi.string().allow("").required(),

      meta: Joi.any(),

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
      logo: CatalogModel.Media1(),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      filters: CatalogModel.CollectionListingFilter(),

      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      logo: CatalogModel.Media1(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      meta: Joi.any(),

      badge: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      logo: CatalogModel.CollectionImage(),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      banners: CatalogModel.CollectionBanner(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      published: Joi.boolean(),

      allow_sort: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      name: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      tags: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      _custom_json: Joi.any(),

      is_visible: Joi.boolean(),

      description: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
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
      item: Joi.array().items(CatalogModel.ItemQueryForUserCollection()),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),
    });
  }

  static UpdatedResponse() {
    return Joi.object({
      items_not_updated: Joi.array().items(Joi.number()),

      message: Joi.string().allow(""),
    });
  }

  static Price1() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      key: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),

      title: Joi.string().allow(""),
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

  static ProductListingDetail() {
    return Joi.object({
      price: CatalogModel.ProductListingPrice(),

      teaser_tag: Joi.any(),

      has_variant: Joi.boolean(),

      discount: Joi.string().allow(""),

      color: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      sellable: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      similars: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      attributes: Joi.any(),

      rating_count: Joi.number(),

      image_nature: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      promo_meta: Joi.any(),

      description: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      uid: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      item_code: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      count: Joi.number(),

      sellable_count: Joi.number(),

      out_of_stock_count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      available_articles: Joi.number(),

      name: Joi.string().allow(""),

      available_sizes: Joi.number(),

      total_articles: Joi.number(),

      total_sizes: Joi.number(),

      article_freshness: Joi.number(),
    });
  }

  static CatalogInsightResponse() {
    return Joi.object({
      item: CatalogModel.CatalogInsightItem(),

      brand_distribution: CatalogModel.CatalogInsightBrand(),
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

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      enabled: Joi.boolean().required(),

      modified_on: Joi.number().required(),

      modified_by: Joi.any(),

      opt_level: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

      created_by: Joi.any(),

      company_id: Joi.number().required(),
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

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),
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
      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      timing: Joi.any(),

      display_name: Joi.string().allow(""),

      address: Joi.any(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      manager: Joi.any(),

      additional_contacts: Joi.array().items(Joi.any()),

      company_id: Joi.number(),
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
      enriched: Joi.boolean(),

      mandatory_details: CatalogModel.AttributeMasterMandatoryDetails().required(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      priority: Joi.number(),

      indexing: Joi.boolean().required(),

      depends_on: Joi.array().items(Joi.string().allow("")),
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
      allowed_values: Joi.array().items(Joi.string().allow("")),

      range: CatalogModel.AttributeSchemaRange(),

      format: Joi.string().allow(""),

      multi: Joi.boolean(),

      mandatory: Joi.boolean(),

      type: Joi.string().allow("").required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      filters: CatalogModel.AttributeMasterFilter(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      description: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      enabled_for_end_consumer: Joi.boolean(),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      schema: CatalogModel.AttributeMaster(),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(Joi.any()),
    });
  }

  static PTErrorResponse() {
    return Joi.object({
      status: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      errors: Joi.any(),

      message: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      _cls: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number().required(),

      uid: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),
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

  static UserSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      is_active: Joi.boolean(),

      item_type: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number(),

      uid: Joi.number(),

      search: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      page_no: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      page_size: Joi.number(),
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
      status: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      errors: Joi.any(),

      message: Joi.string().allow(""),
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
      logo: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      _cls: Joi.any(),

      slug: Joi.any(),

      name: Joi.any().required(),

      modified_by: CatalogModel.UserDetail(),

      verified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      uid: Joi.number(),

      modified_on: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      created_by: CatalogModel.UserDetail(),

      _id: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      categories: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      attributes: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),
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
      teaser_tag: Joi.any(),

      currency: Joi.any(),

      is_active: Joi.any(),

      trader_type: Joi.any(),

      multi_size: Joi.any(),

      command: Joi.any(),

      sizes: Joi.any(),

      slug: Joi.any(),

      no_of_boxes: Joi.any(),

      product_publish: Joi.any(),

      custom_order: Joi.any(),

      is_dependent: Joi.any(),

      category_slug: Joi.any(),

      name: Joi.any(),

      short_description: Joi.any(),

      item_type: Joi.any(),

      variants: Joi.any(),

      tags: Joi.any(),

      country_of_origin: Joi.any(),

      brand_uid: Joi.any(),

      highlights: Joi.any(),

      size_guide: Joi.any(),

      media: Joi.any(),

      trader: Joi.any(),

      product_group_tag: Joi.any(),

      description: Joi.any(),

      hsn_code: Joi.any(),

      return_config: Joi.any(),

      item_code: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      properties: CatalogModel.Properties(),

      description: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      definitions: Joi.any(),

      title: Joi.string().allow(""),

      type: Joi.string().allow(""),
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

      tag: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),
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

  static ProductDownloadItemsData() {
    return Joi.object({
      brand: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      status: Joi.string().allow(""),

      template_tags: Joi.any(),

      data: CatalogModel.ProductDownloadItemsData(),

      completed_on: Joi.string().allow(""),

      seller_id: Joi.number(),

      id: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      trigger_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      task_id: Joi.string().allow(""),
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
      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
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

  static CategoryRequestBody() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      media: CatalogModel.Media2(),

      priority: Joi.number(),

      is_active: Joi.boolean().required(),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      synonyms: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      marketplaces: CatalogModel.CategoryMapping(),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static Category() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      media: CatalogModel.Media2(),

      priority: Joi.number(),

      is_active: Joi.boolean().required(),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      marketplaces: CatalogModel.CategoryMapping(),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Category()),
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

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),
    });
  }

  static ProductCreateUpdate() {
    return Joi.object({
      teaser_tag: CatalogModel.TeaserTag(),

      currency: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      multi_size: Joi.boolean(),

      action: Joi.string().allow(""),

      change_request_id: Joi.any(),

      slug: Joi.string().allow("").required(),

      no_of_boxes: Joi.number(),

      product_publish: CatalogModel.ProductPublish(),

      variant_media: Joi.any(),

      custom_order: CatalogModel.CustomOrder(),

      is_dependent: Joi.boolean(),

      bulk_job_id: Joi.string().allow(""),

      category_slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      item_type: Joi.string().allow("").required(),

      net_quantity: CatalogModel.NetQuantity(),

      variants: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number().required(),

      requester: Joi.string().allow(""),

      _custom_json: Joi.any(),

      brand_uid: Joi.number().required(),

      country_of_origin: Joi.string().allow("").required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      template_tag: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      media: Joi.array().items(CatalogModel.Media1()),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      size_guide: Joi.string().allow(""),

      description: Joi.string().allow(""),

      uid: Joi.number().allow(null),

      return_config: CatalogModel.ReturnConfig().required(),

      departments: Joi.array().items(Joi.number()).required(),

      item_code: Joi.any().required(),
    });
  }

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Image() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static Logo() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      logo: CatalogModel.Logo(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static Product() {
    return Joi.object({
      currency: Joi.string().allow(""),

      is_active: Joi.boolean(),

      multi_size: Joi.boolean(),

      category_uid: Joi.number(),

      sizes: Joi.array().items(Joi.any()),

      color: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      id: Joi.string().allow(""),

      custom_order: Joi.any(),

      is_dependent: Joi.boolean(),

      category_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      item_type: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      variants: Joi.any(),

      _custom_json: Joi.any(),

      image_nature: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      brand_uid: Joi.number(),

      is_physical: Joi.boolean(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      images: Joi.array().items(CatalogModel.Image()),

      highlights: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow(""),

      is_set: Joi.boolean(),

      tax_identifier: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      size_guide: Joi.string().allow(""),

      description: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      uid: Joi.number(),

      brand: CatalogModel.Brand(),

      departments: Joi.array().items(Joi.number()),

      is_expirable: Joi.boolean(),

      item_code: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Product()),
    });
  }

  static AttributeMasterSerializer() {
    return Joi.object({
      logo: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      details: CatalogModel.AttributeMasterDetails().required(),

      enabled_for_end_consumer: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      name: Joi.string().allow(""),

      synonyms: Joi.any(),

      raw_key: Joi.string().allow(""),

      modified_by: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      schema: CatalogModel.AttributeMaster().required(),

      description: Joi.string().allow(""),

      variant: Joi.boolean(),

      suggestion: Joi.string().allow(""),

      created_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ProductAttributesResponse() {
    return Joi.object({
      items: Joi.array()
        .items(CatalogModel.AttributeMasterSerializer())
        .required(),
    });
  }

  static ValidateProduct() {
    return Joi.object({
      valid: Joi.boolean(),
    });
  }

  static UserInfo1() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      total: Joi.number().required(),

      tracking_url: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      created_on: Joi.string().allow("").required(),

      cancelled_records: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      company_id: Joi.number().required(),

      cancelled: Joi.number(),

      custom_template_tag: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),
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
      total: Joi.number(),

      file_path: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      is_active: Joi.boolean(),

      template: CatalogModel.ProductTemplate(),

      failed: Joi.number(),

      created_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      company_id: Joi.number(),

      cancelled: Joi.number(),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.ProductBulkRequest(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      template_tag: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),
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

  static ProductBulkAssets() {
    return Joi.object({
      user: Joi.any().required(),

      url: Joi.string().allow("").required(),

      company_id: Joi.number(),
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
      total: Joi.number(),

      tracking_url: Joi.string().allow(""),

      succeed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      retry: Joi.number(),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      created_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      cancelled: Joi.number(),
    });
  }

  static BulkAssetResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Items()),
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

  static ItemQuery() {
    return Joi.object({
      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),
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
      quantity: Joi.number(),

      name: Joi.string().allow(""),

      size_distribution: CatalogModel.SizeDistribution().required(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),

      gtin_value: Joi.string().allow("").required(),

      primary: Joi.boolean(),
    });
  }

  static InvSize() {
    return Joi.object({
      item_weight: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      price: Joi.number(),

      set: CatalogModel.InventorySet(),

      item_width: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      item_height: Joi.number().allow(null),

      is_set: Joi.boolean(),

      currency: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      store_code: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      price_transfer: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      item: CatalogModel.ItemQuery().required(),

      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      sellable_quantity: Joi.number(),

      store: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      price: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      size: Joi.string().allow(""),

      quantity: Joi.number(),

      price_effective: Joi.number(),

      uid: Joi.string().allow(""),

      item_id: Joi.number(),

      price_transfer: Joi.number(),

      identifiers: Joi.any(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
    });
  }

  static PriceMeta() {
    return Joi.object({
      transfer: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      marked: Joi.number().required(),

      effective: Joi.number().required(),

      tp_notes: Joi.any(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),
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
      order_committed: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),
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

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static Trader1() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      height: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      width: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      set: CatalogModel.InventorySet(),

      price: CatalogModel.PriceMeta().required(),

      weight: CatalogModel.WeightResponse().required(),

      is_active: Joi.boolean(),

      fynd_meta: Joi.any(),

      item_id: Joi.number().required(),

      track_inventory: Joi.boolean(),

      fynd_item_code: Joi.string().allow("").required(),

      quantities: CatalogModel.Quantities(),

      fragile: Joi.boolean().required(),

      total_quantity: Joi.number().required(),

      store: CatalogModel.StoreMeta().required(),

      company: CatalogModel.CompanyMeta().required(),

      raw_meta: Joi.any(),

      expiration_date: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      tags: Joi.array().items(Joi.string().allow("")),

      fynd_article_code: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      added_on_store: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      is_set: Joi.boolean(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      size: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig1(),

      brand: CatalogModel.BrandMeta().required(),

      created_by: CatalogModel.UserSerializer(),

      trace_id: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse().required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
    });
  }

  static BulkInventoryGetItems() {
    return Joi.object({
      total: Joi.number(),

      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      created_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      company_id: Joi.number(),
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
      seller_identifier: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      price: Joi.number(),

      currency: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      quantity: Joi.number(),

      price_effective: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow("").allow(null),

      price_marked: Joi.number(),

      total_quantity: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.any(),

      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      batch_id: Joi.string().allow("").required(),
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
      status: Joi.string().allow(""),

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      status: Joi.string().allow(""),

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),
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
      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      price_effective: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow(""),

      price_marked: Joi.number(),

      store_id: Joi.number().required(),

      total_quantity: Joi.number().allow(null),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      company_id: Joi.number().required(),

      meta: Joi.any(),

      payload: Joi.array().items(CatalogModel.InventoryPayload()),
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
      message: Joi.string().allow("").required(),

      items: Joi.array().items(CatalogModel.InventoryResponseItem()),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      tax1: Joi.number().required(),

      tax2: Joi.number(),

      threshold1: Joi.number().required(),

      is_active: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      uid: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      threshold2: Joi.number(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax1: Joi.number(),

      tax2: Joi.number(),

      threshold1: Joi.number(),

      modified_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number(),

      hs2_code: Joi.string().allow(""),

      threshold2: Joi.number(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
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

  static HsnCodesListingResponse() {
    return Joi.object({
      page: CatalogModel.PageResponse(),

      items: Joi.array().items(CatalogModel.HsnCodesObject()),
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

      threshold: Joi.number().required(),

      cess: Joi.number(),

      rate: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),
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
      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

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
      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

      uid: Joi.number(),
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

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      action: CatalogModel.Action(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),

      action: CatalogModel.Action(),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),

      action: CatalogModel.Action(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number(),

      action: CatalogModel.Action(),
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
      operators: Joi.any(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      teaser_tag: Joi.any(),

      has_variant: Joi.boolean(),

      color: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      slug: Joi.string().allow("").required(),

      similars: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      attributes: Joi.any(),

      rating_count: Joi.number(),

      image_nature: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      promo_meta: Joi.any(),

      description: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      uid: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      item_code: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      next_id: Joi.string().allow(""),

      has_next: Joi.boolean(),

      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      page: CatalogModel.InventoryPage().required(),

      items: Joi.array().items(Joi.any()),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
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

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),
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
      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      business_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      verified_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),
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

      closing: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      opening: CatalogModel.LocationTimingSerializer(),
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
      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      verified_by: CatalogModel.UserSerializer1(),

      verified_on: Joi.string().allow(""),

      phone_number: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      address: CatalogModel.GetAddressSerializer().required(),

      modified_on: Joi.string().allow(""),

      company: CatalogModel.GetCompanySerializer(),

      name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      modified_by: CatalogModel.UserSerializer1(),

      _custom_json: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      stage: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      manager: CatalogModel.LocationManagerSerializer(),

      uid: Joi.number(),

      integration_type: CatalogModel.LocationIntegrationType(),

      warnings: Joi.any(),

      created_by: CatalogModel.UserSerializer1(),
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
