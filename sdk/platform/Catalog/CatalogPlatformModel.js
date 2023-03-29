const Joi = require("joi");

class CatalogModel {
  static SearchKeywordResult() {
    return Joi.object({
      sort_on: Joi.string().allow("").required(),

      query: Joi.any().required(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      result: CatalogModel.SearchKeywordResult().required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      result: Joi.any(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      status: Joi.number(),

      error: Joi.string().allow(""),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static Page() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      size: Joi.number(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      item_total: Joi.number(),
    });
  }

  static GetSearchWordsDetailResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.GetSearchWordsData(),
    });
  }

  static GetSearchWordsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetSearchWordsData()),
    });
  }

  static Media() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      params: Joi.any(),

      query: Joi.any(),

      url: Joi.string().allow(""),
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
      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      action: CatalogModel.AutocompleteAction(),

      display: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
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
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetAutocompleteWordsData()),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      min_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      product_uid: Joi.number().required(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      company_id: Joi.number(),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      company_id: Joi.number(),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      id: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetProductBundleCreateResponse()),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      company_id: Joi.number(),

      is_active: Joi.boolean().required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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
      max_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),

      min_effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      uid: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      price: Joi.any(),

      attributes: Joi.any(),

      identifier: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      min_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      max_quantity: Joi.number(),

      price: CatalogModel.Price(),

      allow_remove: Joi.boolean(),

      product_uid: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      company_id: Joi.number(),

      is_active: Joi.boolean(),

      products: Joi.array().items(CatalogModel.GetProducts()),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Meta() {
    return Joi.object({
      headers: Joi.any(),

      values: Joi.array().items(Joi.any()),

      unit: Joi.string().allow(""),
    });
  }

  static Guide() {
    return Joi.object({
      meta: CatalogModel.Meta(),
    });
  }

  static ValidateSizeGuide() {
    return Joi.object({
      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      company_id: Joi.number(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      active: Joi.boolean(),

      id: Joi.string().allow(""),

      brand_id: Joi.number(),

      image: Joi.string().allow(""),

      modified_by: Joi.any(),

      guide: CatalogModel.Guide(),

      name: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      tag: Joi.string().allow(""),
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
      title: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      guide: Joi.any(),

      active: Joi.boolean(),

      id: Joi.string().allow(""),

      brand_id: Joi.number(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      tag: Joi.string().allow(""),
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

  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      increment_unit: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      uid: Joi.number(),

      success: Joi.boolean(),
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

      alt_text: Joi.any(),

      moq: CatalogModel.MOQData(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),
    });
  }

  static GetConfigMetadataResponse() {
    return Joi.object({
      condition: Joi.array().items(Joi.any()),

      values: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      logo: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      template_slugs: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      slug: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),
    });
  }

  static ConfigErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static PageResponseType() {
    return Joi.object({
      has_next: Joi.boolean().required(),

      current: Joi.number().required(),

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

  static ConfigSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationsSort() {
    return Joi.object({
      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

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
      detail: Joi.any(),

      similar: Joi.any(),

      variant: Joi.any(),

      compare: Joi.any(),
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
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      title: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      size: CatalogModel.ProductSize(),

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

      display_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

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
      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),
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

      display: Joi.string().allow(""),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      condition: Joi.string().allow(""),

      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      sort: Joi.string().allow(""),

      map: Joi.any(),

      map_values: Joi.array().items(Joi.any()),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

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

  static AppConfiguration() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      config_id: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      listing: CatalogModel.ConfigurationListing(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      config_id: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      listing: CatalogModel.ConfigurationListing(),
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
      sort: Joi.any(),

      filter: Joi.any(),
    });
  }

  static EntityConfiguration() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),
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
      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      is_selected: Joi.boolean().required(),

      selected_min: Joi.number(),

      currency_code: Joi.string().allow(""),

      value: Joi.any().required(),

      max: Joi.number(),

      min: Joi.number(),

      display_format: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      selected_max: Joi.number(),

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

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
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
      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),
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
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
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
      badge: CatalogModel.CollectionBadge(),

      sort_on: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      allow_sort: Joi.boolean(),

      logo: CatalogModel.CollectionImage().required(),

      seo: CatalogModel.SeoDetail(),

      created_by: CatalogModel.UserInfo(),

      is_active: Joi.boolean(),

      type: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo(),

      slug: Joi.string().allow("").required(),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      priority: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _locale_language: Joi.any(),

      published: Joi.boolean(),

      _custom_json: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      banners: CatalogModel.CollectionBanner().required(),
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
      portrait: CatalogModel.BannerImage(),

      landscape: CatalogModel.BannerImage(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      badge: Joi.any(),

      sort_on: Joi.string().allow(""),

      _schedule: Joi.any(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      logo: CatalogModel.BannerImage(),

      is_active: Joi.boolean(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      priority: Joi.number(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),

      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),
    });
  }

  static Media1() {
    return Joi.object({
      type: Joi.string().allow(""),

      meta: Joi.any(),

      url: Joi.string().allow("").required(),
    });
  }

  static ActionPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      query: Joi.any(),
    });
  }

  static Action() {
    return Joi.object({
      type: Joi.string().allow(""),

      page: CatalogModel.ActionPage(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      badge: Joi.any(),

      _schedule: Joi.any(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      uid: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      is_active: Joi.boolean(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      priority: Joi.number(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      action: CatalogModel.Action(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
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
      description: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      is_active: Joi.boolean(),

      priority: Joi.number(),

      badge: Joi.any(),

      type: Joi.string().allow(""),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      badge: CatalogModel.CollectionBadge(),

      sort_on: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      allow_sort: Joi.boolean(),

      logo: CatalogModel.CollectionImage(),

      seo: CatalogModel.SeoDetail(),

      is_active: Joi.boolean(),

      type: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      priority: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _locale_language: Joi.any(),

      published: Joi.boolean(),

      _custom_json: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),
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
      items_not_updated: Joi.array().items(Joi.number()),

      message: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),
    });
  }

  static Price1() {
    return Joi.object({
      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
      tryouts: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      promo_meta: Joi.any(),

      rating_count: Joi.number(),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      product_online_date: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      type: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      rating: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      item_type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      sellable: Joi.boolean(),

      attributes: Joi.any(),

      color: Joi.string().allow(""),

      has_variant: Joi.boolean(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_articles: Joi.number(),

      available_sizes: Joi.number(),

      article_freshness: Joi.number(),

      available_articles: Joi.number(),

      total_sizes: Joi.number(),

      name: Joi.string().allow(""),
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
      brand_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      company_id: Joi.number(),

      enabled: Joi.boolean(),

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_on: Joi.number().required(),

      platform: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      created_on: Joi.number().required(),

      created_by: Joi.any(),

      enabled: Joi.boolean().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      modified_by: Joi.any(),
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

      uid: Joi.number(),

      name: Joi.string().allow(""),

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
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.CompanyBrandDetail()),
    });
  }

  static OptinCompanyMetrics() {
    return Joi.object({
      store: Joi.number(),

      company: Joi.string().allow(""),

      brand: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      uid: Joi.number(),

      manager: Joi.any(),

      display_name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      address: Joi.any(),

      timing: Joi.any(),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.StoreDetail()),
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

      type: Joi.string().allow("").required(),

      multi: Joi.boolean(),

      format: Joi.string().allow(""),

      mandatory: Joi.boolean(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      priority: Joi.number(),

      depends_on: Joi.array().items(Joi.string().allow("")),

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

  static GenderDetail() {
    return Joi.object({
      details: CatalogModel.AttributeMasterDetails(),

      schema: CatalogModel.AttributeMaster(),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter(),

      id: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),
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
      errors: Joi.any(),

      status: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      uid: Joi.number(),

      platforms: Joi.any(),

      logo: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      _cls: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

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

  static UserSerializer() {
    return Joi.object({
      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      uid: Joi.number(),

      page_size: Joi.number(),

      logo: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      item_type: Joi.string().allow(""),

      search: Joi.string().allow(""),

      page_no: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),
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
      errors: Joi.any(),

      status: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static UserDetail() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      modified_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.any()),

      slug: Joi.any(),

      _custom_json: Joi.any(),

      verified_on: Joi.string().allow(""),

      priority_order: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      _cls: Joi.any(),

      name: Joi.any().required(),

      _id: Joi.any(),

      verified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      is_archived: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      categories: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      modified_by: Joi.any(),

      is_expirable: Joi.boolean().required(),

      tag: Joi.string().allow(""),
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
      is_archived: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      id: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      categories: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      tag: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      no_of_boxes: Joi.any(),

      is_dependent: Joi.any(),

      media: Joi.any(),

      custom_order: Joi.any(),

      hsn_code: Joi.any(),

      is_active: Joi.any(),

      trader_type: Joi.any(),

      slug: Joi.any(),

      category_slug: Joi.any(),

      name: Joi.any(),

      item_code: Joi.any(),

      product_group_tag: Joi.any(),

      description: Joi.any(),

      variants: Joi.any(),

      tags: Joi.any(),

      teaser_tag: Joi.any(),

      item_type: Joi.any(),

      product_publish: Joi.any(),

      size_guide: Joi.any(),

      command: Joi.any(),

      currency: Joi.any(),

      short_description: Joi.any(),

      country_of_origin: Joi.any(),

      brand_uid: Joi.any(),

      sizes: Joi.any(),

      return_config: Joi.any(),

      highlights: Joi.any(),

      trader: Joi.any(),

      multi_size: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      definitions: Joi.any(),
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
      data: Joi.any(),

      message: Joi.string().allow(""),
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
      data: CatalogModel.HSNData(),

      message: Joi.string().allow(""),
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

      templates: Joi.array().items(Joi.string().allow("")),

      brand: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      seller_id: Joi.number(),

      template_tags: Joi.any(),

      task_id: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      status: Joi.string().allow(""),

      id: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),
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

  static CategoryMappingValues() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      catalog_id: Joi.number(),
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
      portrait: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l2: Joi.number().required(),

      l1: Joi.number().required(),

      department: Joi.number().required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      departments: Joi.array().items(Joi.number()).required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      level: Joi.number().required(),

      priority: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      media: CatalogModel.Media2(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      name: Joi.string().allow("").required(),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      uid: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static Category() {
    return Joi.object({
      uid: Joi.number(),

      departments: Joi.array().items(Joi.number()).required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      level: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      priority: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      media: CatalogModel.Media2(),

      modified_by: Joi.any(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      name: Joi.string().allow("").required(),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Category()),
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

  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),
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
      url: Joi.string().allow("").allow(null),

      tag: Joi.string().allow("").allow(null),
    });
  }

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean().required(),

      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.any().required(),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductCreateUpdate() {
    return Joi.object({
      bulk_job_id: Joi.string().allow(""),

      variant_group: Joi.any(),

      no_of_boxes: Joi.number(),

      is_dependent: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      custom_order: CatalogModel.CustomOrder(),

      template_tag: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),

      departments: Joi.array().items(Joi.number()).required(),

      is_image_less_product: Joi.boolean(),

      is_active: Joi.boolean(),

      requester: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      category_slug: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      net_quantity: CatalogModel.NetQuantity(),

      name: Joi.any().required(),

      item_code: Joi.any().required(),

      is_set: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      change_request_id: Joi.any(),

      company_id: Joi.number().required(),

      variants: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      teaser_tag: CatalogModel.TeaserTag(),

      item_type: Joi.string().allow("").required(),

      product_publish: CatalogModel.ProductPublish(),

      action: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      brand_uid: Joi.number().required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      return_config: CatalogModel.ReturnConfig().required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      multi_size: Joi.boolean(),
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
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),
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
      brand: CatalogModel.Brand(),

      variant_group: Joi.any(),

      is_dependent: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      custom_order: Joi.any(),

      template_tag: Joi.string().allow(""),

      color: Joi.string().allow(""),

      uid: Joi.number(),

      departments: Joi.array().items(Joi.number()),

      hsn_code: Joi.string().allow(""),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      is_set: Joi.boolean(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      variants: Joi.any(),

      item_type: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      category_uid: Joi.number(),

      size_guide: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      short_description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      brand_uid: Joi.number(),

      sizes: Joi.array().items(Joi.any()),

      all_sizes: Joi.array().items(Joi.any()),

      tax_identifier: Joi.any(),

      primary_color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      multi_size: Joi.boolean(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Product()),
    });
  }

  static ProductVariants() {
    return Joi.object({
      uid: Joi.number(),

      brand_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      category_uid: Joi.number(),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),
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
      schema: CatalogModel.AttributeMaster().required(),

      unit: Joi.string().allow(""),

      synonyms: Joi.any(),

      enabled_for_end_consumer: Joi.boolean(),

      details: CatalogModel.AttributeMasterDetails().required(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      logo: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      variant: Joi.boolean(),

      created_on: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),
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

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      file_path: Joi.string().allow(""),

      failed: Joi.number(),

      cancelled: Joi.number(),

      total: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      cancelled_records: Joi.array().items(Joi.any()),

      tracking_url: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),
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

      failed: Joi.number(),

      cancelled: Joi.number(),

      total: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      modified_on: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),
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
      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow("").required(),

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

  static ProductBulkAssets() {
    return Joi.object({
      user: Joi.any().required(),

      company_id: Joi.number(),

      url: Joi.string().allow("").required(),
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

      cancelled: Joi.number(),

      total: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserCommon(),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      retry: Joi.number(),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      tracking_url: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserCommon(),

      modified_on: Joi.string().allow(""),
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

      company_id: Joi.number(),

      item_id: Joi.number(),
    });
  }

  static ProductSizeDeleteResponse() {
    return Joi.object({
      data: CatalogModel.ProductSizeDeleteDataResponse(),

      success: Joi.boolean(),
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

  static GTIN() {
    return Joi.object({
      gtin_value: Joi.any().required(),

      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),
    });
  }

  static InvSize() {
    return Joi.object({
      expiration_date: Joi.string().allow(""),

      is_set: Joi.boolean(),

      set: CatalogModel.InventorySet(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      price_transfer: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      item_length: Joi.number().allow(null),

      price_effective: Joi.number().required(),

      size: Joi.any().required(),

      quantity: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      price: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      item_width: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      item_height: Joi.number().allow(null),
    });
  }

  static ItemQuery() {
    return Joi.object({
      uid: Joi.number(),

      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      company_id: Joi.number().required(),

      item: CatalogModel.ItemQuery().required(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      identifiers: Joi.any(),

      uid: Joi.string().allow(""),

      price_transfer: Joi.number(),

      price_effective: Joi.number(),

      quantity: Joi.number(),

      sellable_quantity: Joi.number(),

      size: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      price: Joi.number(),

      item_id: Joi.number(),

      currency: Joi.string().allow(""),

      store: Joi.any(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
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

      order_committed: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      transfer: Joi.number().required(),

      tp_notes: Joi.any(),

      updated_at: Joi.string().allow(""),

      marked: Joi.number().required(),

      effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),
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

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      width: Joi.number().required(),

      height: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      fynd_article_code: Joi.string().allow("").required(),

      brand: CatalogModel.BrandMeta().required(),

      quantities: CatalogModel.Quantities(),

      stage: Joi.string().allow(""),

      price: CatalogModel.PriceMeta().required(),

      company: CatalogModel.CompanyMeta().required(),

      store: CatalogModel.StoreMeta().required(),

      expiration_date: Joi.string().allow(""),

      uid: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      fynd_meta: Joi.any(),

      fragile: Joi.boolean().required(),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      trace_id: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader1()),

      seller_identifier: Joi.string().allow("").required(),

      weight: CatalogModel.WeightResponse().required(),

      modified_by: CatalogModel.UserSerializer(),

      total_quantity: Joi.number().required(),

      track_inventory: Joi.boolean(),

      is_set: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any().allow(null),

      fynd_item_code: Joi.string().allow("").required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      country_of_origin: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      size: Joi.string().allow("").required(),

      tax_identifier: Joi.any(),

      identifier: Joi.any().required(),

      item_id: Joi.number().required(),

      return_config: CatalogModel.ReturnConfig1(),

      raw_meta: Joi.any(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
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

      order_committed: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      transfer: Joi.number(),

      tp_notes: Joi.any(),

      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
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

  static DateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      length: Joi.number(),

      height: Joi.number(),

      width: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
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
      brand: CatalogModel.BrandMeta1(),

      quantities: CatalogModel.QuantitiesArticle(),

      inventory_updated_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      company: CatalogModel.CompanyMeta1(),

      store: CatalogModel.ArticleStoreResponse(),

      expiration_date: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      created_by: CatalogModel.UserSerializer(),

      trace_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      modified_by: CatalogModel.UserSerializer(),

      total_quantity: Joi.number(),

      track_inventory: Joi.boolean(),

      is_set: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      dimension: CatalogModel.DimensionResponse1(),

      country_of_origin: Joi.string().allow(""),

      size: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      identifier: Joi.any(),

      item_id: Joi.number(),

      return_config: CatalogModel.ReturnConfig2(),

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
      file_path: Joi.string().allow(""),

      failed: Joi.number(),

      cancelled: Joi.number(),

      total: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      id: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),
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
      expiration_date: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      tags: Joi.array().items(Joi.string().allow("")),

      price_effective: Joi.number(),

      quantity: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      total_quantity: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.any(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),
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
      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),

      status: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),
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
      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      price_effective: Joi.number(),

      store_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number(),

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
      uid: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean(),

      tax2: Joi.number(),

      threshold1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      tax1: Joi.number().required(),

      threshold2: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      hs2_code: Joi.string().allow(""),

      company_id: Joi.number(),

      tax2: Joi.number(),

      id: Joi.string().allow(""),

      threshold1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      tax1: Joi.number(),

      modified_on: Joi.string().allow(""),

      threshold2: Joi.number(),

      tax_on_mrp: Joi.boolean(),
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

      has_next: Joi.boolean(),

      current: Joi.string().allow(""),

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
      rate: Joi.number().required(),

      threshold: Joi.number().required(),

      cess: Joi.number(),

      effective_date: Joi.string().allow("").required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      reporting_hsn: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),
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

      departments: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      discount: Joi.string().allow(""),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

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
      uid: Joi.number(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.Child()),

      slug: Joi.string().allow(""),

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
      page: CatalogModel.Page().required(),

      operators: Joi.any(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      tryouts: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      promo_meta: Joi.any(),

      rating_count: Joi.number(),

      product_online_date: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      type: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      rating: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      item_type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      color: Joi.string().allow(""),

      has_variant: Joi.boolean(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),

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

  static InvoiceCredSerializer() {
    return Joi.object({
      enabled: Joi.boolean(),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_waybill: CatalogModel.InvoiceCredSerializer(),

      e_invoice: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      pincode: Joi.number(),

      address_type: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      created_on: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer1(),

      verified_by: CatalogModel.UserSerializer1(),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
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

  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
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

  static GetLocationSerializer() {
    return Joi.object({
      phone_number: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      company: CatalogModel.GetCompanySerializer(),

      verified_by: CatalogModel.UserSerializer2(),

      uid: Joi.number(),

      created_by: CatalogModel.UserSerializer2(),

      integration_type: CatalogModel.LocationIntegrationType(),

      verified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      warnings: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow("").required(),

      address: CatalogModel.GetAddressSerializer().required(),

      manager: CatalogModel.LocationManagerSerializer(),

      store_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),
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
      uid: Joi.number().required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

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
}
module.exports = CatalogModel;
