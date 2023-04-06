const Joi = require("joi");

class CatalogModel {
  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

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

  static GetSearchWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      result: Joi.any(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetSearchWordsDetailResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.GetSearchWordsData(),
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
      words: Joi.array().items(Joi.string().allow("")),

      result: CatalogModel.SearchKeywordResult().required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

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
      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

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

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      params: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.any(),

      url: Joi.string().allow(""),
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
      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      min_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      meta: Joi.any(),

      modified_by: Joi.any(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      meta: Joi.any(),

      modified_by: Joi.any(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetProductBundleCreateResponse()),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      name: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      price: Joi.any(),

      images: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      quantity: Joi.number(),

      identifier: Joi.any(),

      slug: Joi.string().allow(""),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_available: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      min_marked: Joi.number(),

      min_effective: Joi.number(),

      currency: Joi.string().allow(""),

      max_marked: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      min_quantity: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_select: Joi.boolean(),

      price: CatalogModel.Price(),

      max_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.GetProducts()),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow(""),

      choice: Joi.string().allow(""),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      meta: Joi.any(),

      modified_by: Joi.any(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),
    });
  }

  static Meta() {
    return Joi.object({
      values: Joi.array().items(Joi.any()),

      headers: Joi.any(),

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
      id: Joi.string().allow(""),

      active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      tag: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      created_by: Joi.any(),

      image: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      description: Joi.string().allow(""),

      brand_id: Joi.number(),

      guide: CatalogModel.Guide(),
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
      id: Joi.string().allow(""),

      active: Joi.boolean(),

      name: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      company_id: Joi.number(),

      brand_id: Joi.number(),

      guide: Joi.any(),
    });
  }

  static MetaFields() {
    return Joi.object({
      value: Joi.any().required(),

      key: Joi.any().required(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),
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
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static MOQData() {
    return Joi.object({
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      alt_text: Joi.any(),

      seo: CatalogModel.SEOData(),

      moq: CatalogModel.MOQData(),
    });
  }

  static GetConfigMetadataResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      condition: Joi.array().items(Joi.any()),

      values: Joi.array().items(Joi.any()),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),
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

      total_count: Joi.number().required(),

      current: Joi.number().required(),

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

      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      default_key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

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
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),
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
      start: Joi.number(),

      display: Joi.string().allow(""),

      end: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      value: Joi.string().allow(""),

      map: Joi.any(),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      condition: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      sort: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      display_name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

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

  static ProductSize() {
    return Joi.object({
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),
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
      logo: Joi.string().allow(""),

      title: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),
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

  static AppConfiguration() {
    return Joi.object({
      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),

      config_id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      type: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      config_id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      type: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static GetAppCatalogConfiguration() {
    return Joi.object({
      data: CatalogModel.AppCatalogConfiguration(),

      is_default: Joi.boolean(),
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
      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      id: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),
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
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      is_selected: Joi.boolean().required(),

      value: Joi.any().required(),

      display: Joi.string().allow("").required(),

      max: Joi.number(),

      min: Joi.number(),

      query_format: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      selected_max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      count: Joi.number(),

      selected_min: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductFilters() {
    return Joi.object({
      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),

      key: CatalogModel.ProductFiltersKey().required(),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),
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
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
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
      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),
    });
  }

  static CreateCollection() {
    return Joi.object({
      badge: CatalogModel.CollectionBadge(),

      allow_facets: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tags: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage().required(),

      banners: CatalogModel.CollectionBanner().required(),

      published: Joi.boolean(),

      _locale_language: Joi.any(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      _custom_json: Joi.any(),

      is_visible: Joi.boolean(),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo(),

      sort_on: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      priority: Joi.number(),

      modified_by: CatalogModel.UserInfo(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),
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
      tag: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      allow_facets: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      sort_on: Joi.string().allow(""),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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
      meta: Joi.any(),

      type: Joi.string().allow(""),

      url: Joi.string().allow("").required(),
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
      tag: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      allow_facets: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _schedule: Joi.any(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      tag: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      allow_facets: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _schedule: Joi.any(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      badge: CatalogModel.CollectionBadge(),

      allow_facets: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tags: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      banners: CatalogModel.CollectionBanner(),

      published: Joi.boolean(),

      _locale_language: Joi.any(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      _custom_json: Joi.any(),

      is_visible: Joi.boolean(),

      name: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      sort_on: Joi.string().allow(""),

      priority: Joi.number(),

      modified_by: CatalogModel.UserInfo(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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

  static ProductDetailAttribute() {
    return Joi.object({
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      key: Joi.string().allow(""),
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
      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogModel.Price1(),

      marked: CatalogModel.Price1(),
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
      highlights: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      sellable: Joi.boolean(),

      price: CatalogModel.ProductListingPrice(),

      brand: CatalogModel.ProductBrand(),

      promo_meta: Joi.any(),

      rating_count: Joi.number(),

      item_type: Joi.string().allow(""),

      rating: Joi.number(),

      color: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      description: Joi.string().allow(""),

      attributes: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      has_variant: Joi.boolean(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      teaser_tag: Joi.any(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      available_sizes: Joi.number(),

      name: Joi.string().allow(""),

      total_articles: Joi.number(),

      available_articles: Joi.number(),

      total_sizes: Joi.number(),

      article_freshness: Joi.number(),
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

      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      enabled: Joi.boolean().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      created_by: Joi.any(),

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      created_on: Joi.number().required(),

      platform: Joi.string().allow("").required(),

      modified_on: Joi.number().required(),

      modified_by: Joi.any(),

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
      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      company_id: Joi.number(),

      total_article: Joi.number(),

      brand_id: Joi.number(),

      brand_name: Joi.string().allow(""),
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
      company: Joi.string().allow(""),

      store: Joi.number(),

      brand: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      company_id: Joi.number(),

      address: Joi.any(),

      timing: Joi.any(),

      uid: Joi.number(),

      manager: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      additional_contacts: Joi.array().items(Joi.any()),

      store_type: Joi.string().allow(""),

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
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      allowed_values: Joi.array().items(Joi.string().allow("")),

      multi: Joi.boolean(),

      type: Joi.string().allow("").required(),

      range: CatalogModel.AttributeSchemaRange(),

      mandatory: Joi.boolean(),

      format: Joi.string().allow(""),
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

  static AttributeMasterFilter() {
    return Joi.object({
      depends_on: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      indexing: Joi.boolean().required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      enabled_for_end_consumer: Joi.boolean(),

      schema: CatalogModel.AttributeMaster(),

      meta: CatalogModel.AttributeMasterMeta(),

      details: CatalogModel.AttributeMasterDetails(),

      is_nested: Joi.boolean(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),
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

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number().required(),

      uid: Joi.number(),

      platforms: Joi.any(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

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

  static UserSerializer() {
    return Joi.object({
      _id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      page_no: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      page_size: Joi.number(),

      priority_order: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      uid: Joi.number(),

      search: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      slug: Joi.string().allow(""),
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

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),
    });
  }

  static UserDetail() {
    return Joi.object({
      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      super_user: Joi.boolean(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      name: Joi.any().required(),

      _id: Joi.any(),

      verified_on: Joi.string().allow(""),

      _cls: Joi.any(),

      synonyms: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserDetail(),

      priority_order: Joi.number().required(),

      uid: Joi.number(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      slug: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      created_by: Joi.any(),

      categories: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),
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

      short_description: Joi.any(),

      currency: Joi.any(),

      category_slug: Joi.any(),

      sizes: Joi.any(),

      custom_order: Joi.any(),

      slug: Joi.any(),

      command: Joi.any(),

      tags: Joi.any(),

      item_type: Joi.any(),

      multi_size: Joi.any(),

      description: Joi.any(),

      return_config: Joi.any(),

      size_guide: Joi.any(),

      trader_type: Joi.any(),

      is_dependent: Joi.any(),

      product_publish: Joi.any(),

      is_active: Joi.any(),

      item_code: Joi.any(),

      country_of_origin: Joi.any(),

      hsn_code: Joi.any(),

      name: Joi.any(),

      brand_uid: Joi.any(),

      trader: Joi.any(),

      no_of_boxes: Joi.any(),

      variants: Joi.any(),

      media: Joi.any(),

      teaser_tag: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      title: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      required: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

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
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      departments: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      categories: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),
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
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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
      id: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      data: CatalogModel.ProductDownloadItemsData(),

      completed_on: Joi.string().allow(""),

      seller_id: Joi.number(),

      trigger_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      template_tags: Joi.any(),
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
      google: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l2: Joi.number().required(),

      department: Joi.number().required(),

      l1: Joi.number().required(),
    });
  }

  static Media2() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      priority: Joi.number(),

      level: Joi.number().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

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

  static Category() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      uid: Joi.number(),

      marketplaces: CatalogModel.CategoryMapping(),

      created_on: Joi.string().allow(""),

      priority: Joi.number(),

      level: Joi.number().required(),

      modified_by: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      slug: Joi.string().allow(""),

      media: CatalogModel.Media2(),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),
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
      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),

      returnable: Joi.boolean().required(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static Trader() {
    return Joi.object({
      name: Joi.any().required(),

      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
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
      product_group_tag: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      short_description: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      net_quantity: CatalogModel.NetQuantity(),

      category_slug: Joi.string().allow("").required(),

      sizes: Joi.array().items(Joi.any()).required(),

      no_of_boxes: Joi.number(),

      slug: Joi.string().allow("").required(),

      custom_order: CatalogModel.CustomOrder(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow("").required(),

      multi_size: Joi.boolean(),

      company_id: Joi.number().required(),

      description: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig().required(),

      bulk_job_id: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      attributes: Joi.any(),

      is_dependent: Joi.boolean(),

      variant_media: Joi.any(),

      product_publish: CatalogModel.ProductPublish(),

      is_active: Joi.boolean(),

      item_code: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      requester: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      is_set: Joi.boolean(),

      action: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      change_request_id: Joi.any(),

      variant_group: Joi.any(),

      uid: Joi.number().allow(null),

      brand_uid: Joi.number().required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      template_tag: Joi.string().allow("").required(),

      variants: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      teaser_tag: CatalogModel.TeaserTag(),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

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

  static Image() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
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
      is_physical: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      category_uid: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      is_expirable: Joi.boolean(),

      category_slug: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      sizes: Joi.array().items(Joi.any()),

      custom_order: Joi.any(),

      slug: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      verified_by: CatalogModel.VerifiedBy(),

      tax_identifier: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      multi_size: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      image_nature: Joi.string().allow(""),

      moq: Joi.any(),

      description: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      primary_color: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      attributes: Joi.any(),

      all_company_ids: Joi.array().items(Joi.number()),

      is_dependent: Joi.boolean(),

      created_on: Joi.string().allow(""),

      variant_media: Joi.any(),

      product_publish: CatalogModel.ProductPublished(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      _custom_json: Joi.any(),

      category: Joi.any(),

      is_image_less_product: Joi.boolean(),

      is_set: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      created_by: Joi.any(),

      uid: Joi.number(),

      variant_group: Joi.any(),

      brand_uid: Joi.number(),

      trader: Joi.array().items(Joi.any()),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      template_tag: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      variants: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      teaser_tag: Joi.any(),
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
      name: Joi.string().allow(""),

      category_uid: Joi.number(),

      uid: Joi.number(),

      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),
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
      is_nested: Joi.boolean(),

      suggestion: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      synonyms: Joi.any(),

      created_on: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      raw_key: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      modified_on: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      variant: Joi.boolean(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      created_by: Joi.any(),

      unit: Joi.string().allow(""),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),
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
      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_value: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_width: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      size: Joi.any().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_weight: Joi.number().required(),

      item_height: Joi.number().required(),

      item_weight_unit_of_measure: Joi.any().required(),

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

  static UserInfo1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      tracking_url: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      failed_records: Joi.array().items(Joi.any()),

      custom_template_tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      succeed: Joi.number(),

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      failed: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

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
      created_by: CatalogModel.UserDetail1(),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      template: CatalogModel.ProductTemplate(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      company_id: Joi.number(),

      template_tag: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),
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
      company_id: Joi.number().required(),

      template_tag: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

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
      company_id: Joi.number(),

      user: Joi.any().required(),

      url: Joi.string().allow("").required(),
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
      tracking_url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      retry: Joi.number(),

      modified_by: CatalogModel.UserCommon(),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),
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

      gtin_value: Joi.any().required(),
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
      quantity: Joi.number(),

      name: Joi.string().allow(""),

      size_distribution: CatalogModel.SizeDistribution().required(),
    });
  }

  static InvSize() {
    return Joi.object({
      item_width: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      item_length: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      size: Joi.any().required(),

      price: Joi.number(),

      price_transfer: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_weight: Joi.number().allow(null),

      quantity: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      item_height: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      set: CatalogModel.InventorySet(),

      is_set: Joi.boolean(),

      price_effective: Joi.number().required(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      item: CatalogModel.ItemQuery().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      item_id: Joi.number(),

      price: Joi.number(),

      currency: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      identifiers: Joi.any(),

      price_transfer: Joi.number(),

      sellable_quantity: Joi.number(),

      size: Joi.string().allow(""),

      store: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      price_effective: Joi.number(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
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
      transfer: Joi.number().required(),

      tp_notes: Joi.any(),

      effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      updated_at: Joi.string().allow(""),

      marked: Joi.number().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
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
      damaged: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      height: Joi.number().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      fragile: Joi.boolean().required(),

      weight: CatalogModel.WeightResponse().required(),

      item_id: Joi.number().required(),

      price: CatalogModel.PriceMeta().required(),

      fynd_item_code: Joi.string().allow("").required(),

      brand: CatalogModel.BrandMeta().required(),

      seller_identifier: Joi.string().allow("").required(),

      tax_identifier: Joi.any(),

      company: CatalogModel.CompanyMeta().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      quantities: CatalogModel.Quantities(),

      dimension: CatalogModel.DimensionResponse().required(),

      track_inventory: Joi.boolean(),

      store: CatalogModel.StoreMeta().required(),

      raw_meta: Joi.any(),

      added_on_store: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      fynd_meta: Joi.any(),

      return_config: CatalogModel.ReturnConfig1(),

      size: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      fynd_article_code: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      identifier: Joi.any().required(),

      set: CatalogModel.InventorySet(),

      is_set: Joi.boolean(),

      total_quantity: Joi.number().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      created_by: CatalogModel.UserSerializer(),

      trace_id: Joi.string().allow(""),

      uid: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      modified_by: CatalogModel.UserSerializer(),

      stage: Joi.string().allow(""),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
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
      transfer: Joi.number(),

      tp_notes: Joi.any(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
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
      damaged: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),
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

  static ArticleStoreResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static Trader2() {
    return Joi.object({
      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetInventories() {
    return Joi.object({
      weight: CatalogModel.WeightResponse1(),

      item_id: Joi.number(),

      price: CatalogModel.PriceArticle(),

      inventory_updated_on: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      seller_identifier: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      tax_identifier: Joi.any(),

      company: CatalogModel.CompanyMeta1(),

      tags: Joi.array().items(Joi.string().allow("")),

      quantities: CatalogModel.QuantitiesArticle(),

      dimension: CatalogModel.DimensionResponse1(),

      track_inventory: Joi.boolean(),

      platforms: Joi.any(),

      store: CatalogModel.ArticleStoreResponse(),

      expiration_date: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig2(),

      size: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      identifier: Joi.any(),

      is_set: Joi.boolean(),

      id: Joi.string().allow(""),

      total_quantity: Joi.number(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      created_by: CatalogModel.UserSerializer(),

      trace_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      modified_by: CatalogModel.UserSerializer(),

      stage: Joi.string().allow(""),
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

      created_by: Joi.any(),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      company_id: Joi.number(),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),
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
      total_quantity: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow("").allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price: Joi.number(),

      price_marked: Joi.number(),

      currency: Joi.string().allow(""),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),

      price_effective: Joi.number(),

      store_code: Joi.string().allow("").required(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      user: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),
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

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),
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
      total_quantity: Joi.number().allow(null),

      tags: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.number().required(),

      trace_id: Joi.string().allow(""),

      price_marked: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      price_effective: Joi.number(),
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

  static HsnUpsert() {
    return Joi.object({
      threshold2: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      tax_on_mrp: Joi.boolean().required(),

      tax_on_esp: Joi.boolean(),

      uid: Joi.number(),

      tax2: Joi.number(),

      tax1: Joi.number().required(),

      is_active: Joi.boolean(),

      company_id: Joi.number().required(),

      threshold1: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      id: Joi.string().allow(""),

      threshold2: Joi.number(),

      hs2_code: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      tax_on_esp: Joi.boolean(),

      tax2: Joi.number(),

      tax1: Joi.number(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      threshold1: Joi.number(),

      hsn_code: Joi.string().allow(""),
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

      item_total: Joi.number(),

      current: Joi.string().allow(""),
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

      cess: Joi.number(),

      effective_date: Joi.string().allow("").required(),

      threshold: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      description: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
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

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      departments: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),
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

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

      uid: Joi.number(),

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
      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.Child()),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),
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
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      highlights: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      brand: CatalogModel.ProductBrand(),

      promo_meta: Joi.any(),

      rating_count: Joi.number(),

      item_type: Joi.string().allow(""),

      rating: Joi.number(),

      color: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      description: Joi.string().allow(""),

      attributes: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      has_variant: Joi.boolean(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      teaser_tag: Joi.any(),
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

  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      weekday: Joi.string().allow("").required(),

      opening: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      closing: CatalogModel.LocationTimingSerializer(),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      enabled: Joi.boolean(),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),
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
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      display_name: Joi.string().allow("").required(),

      documents: Joi.array().items(CatalogModel.Document()),

      verified_by: CatalogModel.UserSerializer1(),

      phone_number: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      code: Joi.string().allow("").required(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      integration_type: CatalogModel.LocationIntegrationType(),

      name: Joi.string().allow("").required(),

      warnings: Joi.any(),

      address: CatalogModel.GetAddressSerializer().required(),

      created_by: CatalogModel.UserSerializer1(),

      uid: Joi.number(),

      manager: CatalogModel.LocationManagerSerializer(),

      modified_by: CatalogModel.UserSerializer1(),

      store_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),
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
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number().required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

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
