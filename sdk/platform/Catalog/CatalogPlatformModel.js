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
      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      result: CatalogModel.SearchKeywordResult().required(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      result: Joi.any(),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

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

  static Media() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      action: CatalogModel.AutocompleteAction(),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

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
      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      created_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      created_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),
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
      modified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      choice: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),
    });
  }

  static Price() {
    return Joi.object({
      currency: Joi.string().allow(""),

      max_marked: Joi.number(),

      min_marked: Joi.number(),

      min_effective: Joi.number(),

      max_effective: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.string().allow(""),

      quantity: Joi.number(),

      is_available: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      short_description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      quantity: Joi.number(),

      price: Joi.any(),

      identifier: Joi.any(),

      uid: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      max_quantity: Joi.number(),

      price: CatalogModel.Price(),

      allow_remove: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_select: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      min_quantity: Joi.number(),

      product_uid: Joi.number(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      logo: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      company_id: Joi.number(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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
      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      image: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      active: Joi.boolean(),

      subtitle: Joi.string().allow(""),

      brand_id: Joi.number(),

      guide: CatalogModel.Guide(),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),
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
      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      active: Joi.boolean(),

      subtitle: Joi.string().allow(""),

      brand_id: Joi.number(),

      guide: Joi.any(),

      company_id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      increment_unit: Joi.number(),

      minimum: Joi.number(),
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
      title: Joi.any(),

      description: Joi.any(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      alt_text: Joi.any(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      seo: CatalogModel.ApplicationItemSEO(),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      uid: Joi.number(),

      success: Joi.boolean(),
    });
  }

  static MOQData() {
    return Joi.object({
      maximum: Joi.number(),

      increment_unit: Joi.number(),

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
      alt_text: Joi.any(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.MOQData(),

      seo: CatalogModel.SEOData(),
    });
  }

  static GetConfigMetadataResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      values: Joi.array().items(Joi.any()),

      condition: Joi.array().items(Joi.any()),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      key: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      unit: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      template_slugs: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      name: Joi.string().allow(""),

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
      total_count: Joi.number().required(),

      has_next: Joi.boolean().required(),

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
      default_key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),
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
      units: Joi.array().items(Joi.any()),

      display: Joi.string().allow(""),

      filter_types: Joi.array().items(Joi.string().allow("")),

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
      size: CatalogModel.ProductSize().required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      priority: Joi.number().required(),

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

      key: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      subtitle: Joi.string().allow(""),
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
      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

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
      end: Joi.number(),

      start: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      map: Joi.any(),

      map_values: Joi.array().items(Joi.any()),

      condition: Joi.string().allow(""),

      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      sort: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilter() {
    return Joi.object({
      allow_single: Joi.boolean().required(),

      attribute_config: Joi.array().items(
        CatalogModel.ConfigurationListingFilterConfig()
      ),
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
      modified_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      app_id: Joi.string().allow("").required(),

      listing: CatalogModel.ConfigurationListing(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      app_id: Joi.string().allow("").required(),

      listing: CatalogModel.ConfigurationListing(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      app_id: Joi.string().allow("").required(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),
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
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      selected_min: Joi.number(),

      value: Joi.any().required(),

      min: Joi.number(),

      selected_max: Joi.number(),

      max: Joi.number(),

      query_format: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      display: Joi.string().allow("").required(),

      count: Joi.number(),

      display_format: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
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
      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),
    });
  }

  static UserInfo() {
    return Joi.object({
      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.CollectionBanner().required(),

      allow_facets: Joi.boolean(),

      is_visible: Joi.boolean(),

      published: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      is_active: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      meta: Joi.any(),

      created_by: CatalogModel.UserInfo(),

      _custom_json: Joi.any(),

      sort_on: Joi.string().allow(""),

      priority: Joi.number(),

      allow_sort: Joi.boolean(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo(),

      logo: CatalogModel.CollectionImage().required(),

      type: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      seo: CatalogModel.SeoDetail(),
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

  static CollectionCreateResponse() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      allow_facets: Joi.boolean(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      meta: Joi.any(),

      sort_on: Joi.string().allow(""),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      cron: Joi.any(),

      type: Joi.string().allow(""),
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

  static Media1() {
    return Joi.object({
      meta: Joi.any(),

      type: Joi.string().allow(""),

      url: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      uid: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      allow_facets: Joi.boolean(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      meta: Joi.any(),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),

      allow_sort: Joi.boolean(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      cron: Joi.any(),

      type: Joi.string().allow(""),
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
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      uid: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      allow_facets: Joi.boolean(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      meta: Joi.any(),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      cron: Joi.any(),

      type: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.CollectionBanner(),

      allow_facets: Joi.boolean(),

      is_visible: Joi.boolean(),

      published: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      is_active: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      meta: Joi.any(),

      _custom_json: Joi.any(),

      sort_on: Joi.string().allow(""),

      priority: Joi.number(),

      allow_sort: Joi.boolean(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      logo: CatalogModel.CollectionImage(),

      type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      seo: CatalogModel.SeoDetail(),
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

      type: Joi.string().allow(""),

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

      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
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
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogModel.Price1(),

      marked: CatalogModel.Price1(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      has_variant: Joi.boolean(),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      sellable: Joi.boolean(),

      attributes: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      teaser_tag: Joi.any(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating_count: Joi.number(),

      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      color: Joi.string().allow(""),

      rating: Joi.number(),

      short_description: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      discount: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      description: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      similars: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      article_freshness: Joi.number(),

      total_articles: Joi.number(),

      name: Joi.string().allow(""),

      available_sizes: Joi.number(),

      total_sizes: Joi.number(),

      available_articles: Joi.number(),
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
      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),

      platform: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      modified_on: Joi.number().required(),

      modified_by: Joi.any(),

      created_on: Joi.number().required(),

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      created_by: Joi.any(),

      enabled: Joi.boolean().required(),

      platform: Joi.string().allow("").required(),

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

      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      company: Joi.string().allow(""),

      brand: Joi.number(),

      store: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      address: Joi.any(),

      documents: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      manager: Joi.any(),

      store_type: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      timing: Joi.any(),

      name: Joi.string().allow(""),
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

  static AttributeMasterFilter() {
    return Joi.object({
      priority: Joi.number(),

      indexing: Joi.boolean().required(),

      depends_on: Joi.array().items(Joi.string().allow("")),
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
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      format: Joi.string().allow(""),

      range: CatalogModel.AttributeSchemaRange(),

      multi: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      mandatory: Joi.boolean(),

      type: Joi.string().allow("").required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      details: CatalogModel.AttributeMasterDetails(),

      filters: CatalogModel.AttributeMasterFilter(),

      description: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      logo: Joi.string().allow(""),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      enabled_for_end_consumer: Joi.boolean(),

      schema: CatalogModel.AttributeMaster(),

      is_nested: Joi.boolean(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug_key: Joi.string().allow(""),

      uid: Joi.number(),

      template_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      meta: Joi.any(),

      errors: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      _cls: Joi.string().allow(""),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      platforms: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number().required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),
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
      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      page_size: Joi.number(),

      uid: Joi.number(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      page_no: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      priority_order: Joi.number(),

      search: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      meta: Joi.any(),

      errors: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),
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
      modified_on: Joi.string().allow("").required(),

      _cls: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      _id: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      synonyms: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      verified_on: Joi.string().allow(""),

      priority_order: Joi.number().required(),

      verified_by: CatalogModel.UserDetail(),

      name: Joi.any().required(),

      slug: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      is_archived: Joi.boolean(),

      tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      name: Joi.string().allow(""),

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
      product_publish: Joi.any(),

      is_dependent: Joi.any(),

      custom_order: Joi.any(),

      sizes: Joi.any(),

      teaser_tag: Joi.any(),

      product_group_tag: Joi.any(),

      item_code: Joi.any(),

      highlights: Joi.any(),

      is_active: Joi.any(),

      hsn_code: Joi.any(),

      country_of_origin: Joi.any(),

      return_config: Joi.any(),

      multi_size: Joi.any(),

      short_description: Joi.any(),

      currency: Joi.any(),

      trader_type: Joi.any(),

      category_slug: Joi.any(),

      item_type: Joi.any(),

      command: Joi.any(),

      name: Joi.any(),

      slug: Joi.any(),

      brand_uid: Joi.any(),

      size_guide: Joi.any(),

      description: Joi.any(),

      variants: Joi.any(),

      media: Joi.any(),

      no_of_boxes: Joi.any(),

      tags: Joi.any(),

      trader: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      type: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      definitions: Joi.any(),
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
      description: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      id: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      name: Joi.string().allow(""),

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

  static ProductDownloadItemsData() {
    return Joi.object({
      templates: Joi.array().items(Joi.string().allow("")),

      brand: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      data: CatalogModel.ProductDownloadItemsData(),

      completed_on: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      trigger_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      url: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      seller_id: Joi.number(),

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

  static Media2() {
    return Joi.object({
      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
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

  static Hierarchy() {
    return Joi.object({
      l1: Joi.number().required(),

      l2: Joi.number().required(),

      department: Joi.number().required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      media: CatalogModel.Media2(),

      marketplaces: CatalogModel.CategoryMapping(),

      is_active: Joi.boolean().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      level: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),
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
      modified_on: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      uid: Joi.number(),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      level: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),
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

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),

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
      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),
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
      type: Joi.string().allow(""),

      name: Joi.any().required(),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      variant_group: Joi.any(),

      uid: Joi.number().allow(null),

      product_publish: CatalogModel.ProductPublish(),

      is_dependent: Joi.boolean(),

      custom_order: CatalogModel.CustomOrder(),

      attributes: Joi.any(),

      sizes: Joi.array().items(Joi.any()).required(),

      variant_media: Joi.any(),

      teaser_tag: CatalogModel.TeaserTag(),

      template_tag: Joi.string().allow("").required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow("").required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      is_active: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      requester: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig().required(),

      multi_size: Joi.boolean(),

      short_description: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      action: Joi.string().allow(""),

      item_type: Joi.string().allow("").required(),

      net_quantity: CatalogModel.NetQuantity(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      brand_uid: Joi.number().required(),

      size_guide: Joi.string().allow(""),

      description: Joi.string().allow(""),

      variants: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      is_image_less_product: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      no_of_boxes: Joi.number(),

      bulk_job_id: Joi.string().allow(""),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      departments: Joi.array().items(Joi.number()).required(),

      change_request_id: Joi.any(),

      category_slug: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      company_id: Joi.number().required(),
    });
  }

  static ProductPublished() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.number(),
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

  static Logo() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      uid: Joi.number(),

      logo: CatalogModel.Logo(),

      name: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static Product() {
    return Joi.object({
      all_company_ids: Joi.array().items(Joi.number()),

      variant_group: Joi.any(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      is_dependent: Joi.boolean(),

      custom_order: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      images: Joi.array().items(CatalogModel.Image()),

      brand: CatalogModel.Brand(),

      variant_media: Joi.any(),

      teaser_tag: Joi.any(),

      attributes: Joi.any(),

      verified_on: Joi.string().allow(""),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      all_sizes: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      created_by: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      category_uid: Joi.number(),

      _custom_json: Joi.any(),

      moq: Joi.any(),

      color: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      multi_size: Joi.boolean(),

      short_description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      pending: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      brand_uid: Joi.number(),

      size_guide: Joi.string().allow(""),

      category: Joi.any(),

      description: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      variants: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      no_of_boxes: Joi.number(),

      is_image_less_product: Joi.boolean(),

      primary_color: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      image_nature: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      category_slug: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      is_expirable: Joi.boolean(),

      company_id: Joi.number(),
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
      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number(),

      category_uid: Joi.number(),

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
      details: CatalogModel.AttributeMasterDetails().required(),

      created_on: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      created_by: Joi.any(),

      schema: CatalogModel.AttributeMaster().required(),

      is_nested: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      raw_key: Joi.string().allow(""),

      variant: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      unit: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      modified_by: Joi.any(),

      logo: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      synonyms: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),
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
      item_weight_unit_of_measure: Joi.any().required(),

      size: Joi.any().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_length: Joi.number().required(),

      item_width: Joi.number().required(),

      item_weight: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_height: Joi.number().required(),
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
      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      succeed: Joi.number(),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      cancelled_records: Joi.array().items(Joi.any()),

      custom_template_tag: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      batch_id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),
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
      modified_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail1(),

      template: CatalogModel.ProductTemplate(),

      company_id: Joi.number(),

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
      data: Joi.array().items(Joi.any()).required(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow("").required(),
    });
  }

  static ProductTagsViewResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
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
      modified_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      retry: Joi.number(),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      created_on: Joi.string().allow(""),

      succeed: Joi.number(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      total: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      id: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      company_id: Joi.number(),
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
      item_id: Joi.number(),

      company_id: Joi.number(),

      size: Joi.string().allow(""),
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

      uid: Joi.number(),

      item_code: Joi.string().allow(""),
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

      quantity: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static InvSize() {
    return Joi.object({
      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      price_effective: Joi.number().required(),

      size: Joi.any().required(),

      price: Joi.number(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_length: Joi.number().allow(null),

      quantity: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      price_transfer: Joi.number().allow(null),

      item_width: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      is_set: Joi.boolean(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      set: CatalogModel.InventorySet(),

      item_height: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      item: CatalogModel.ItemQuery().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      company_id: Joi.number().required(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      currency: Joi.string().allow(""),

      identifiers: Joi.any(),

      price: Joi.number(),

      price_effective: Joi.number(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price_transfer: Joi.number(),

      store: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
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

      damaged: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
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
      width: Joi.number().required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static StoreMeta() {
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

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      effective: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      transfer: Joi.number().required(),

      marked: Joi.number().required(),
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

  static InventorySellerResponse() {
    return Joi.object({
      fynd_article_code: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      fynd_item_code: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      quantities: CatalogModel.Quantities(),

      brand: CatalogModel.BrandMeta().required(),

      total_quantity: Joi.number().required(),

      raw_meta: Joi.any(),

      dimension: CatalogModel.DimensionResponse().required(),

      trace_id: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      is_active: Joi.boolean(),

      meta: Joi.any().allow(null),

      created_by: CatalogModel.UserSerializer(),

      store: CatalogModel.StoreMeta().required(),

      country_of_origin: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      added_on_store: Joi.string().allow(""),

      _custom_json: Joi.any(),

      expiration_date: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig1(),

      fragile: Joi.boolean().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      track_inventory: Joi.boolean(),

      is_set: Joi.boolean(),

      company: CatalogModel.CompanyMeta().required(),

      modified_by: CatalogModel.UserSerializer(),

      identifier: Joi.any().required(),

      price: CatalogModel.PriceMeta().required(),

      tax_identifier: Joi.any(),

      fynd_meta: Joi.any(),

      set: CatalogModel.InventorySet(),

      tags: Joi.array().items(Joi.string().allow("")),

      trader: Joi.array().items(CatalogModel.Trader1()),

      weight: CatalogModel.WeightResponse().required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
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

      damaged: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
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
      width: Joi.number(),

      length: Joi.number(),

      height: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

  static ReturnConfig2() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),

      effective: Joi.number(),

      tp_notes: Joi.any(),

      transfer: Joi.number(),

      marked: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static GetInventories() {
    return Joi.object({
      uid: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      stage: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      total_quantity: Joi.number(),

      dimension: CatalogModel.DimensionResponse1(),

      trace_id: Joi.string().allow(""),

      size: Joi.string().allow(""),

      item_id: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      store: CatalogModel.ArticleStoreResponse(),

      country_of_origin: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      inventory_updated_on: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig2(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      track_inventory: Joi.boolean(),

      id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      company: CatalogModel.CompanyMeta1(),

      modified_by: CatalogModel.UserSerializer(),

      price: CatalogModel.PriceArticle(),

      identifier: Joi.any(),

      tax_identifier: Joi.any(),

      platforms: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      trader: Joi.array().items(CatalogModel.Trader2()),

      weight: CatalogModel.WeightResponse1(),
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
      modified_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      created_by: Joi.any(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

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
      trace_id: Joi.string().allow("").allow(null),

      item_weight_unit_of_measure: Joi.string().allow(""),

      price_effective: Joi.number(),

      currency: Joi.string().allow(""),

      price: Joi.number(),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      total_quantity: Joi.number(),

      price_marked: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),
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

  static InventoryExportRequest() {
    return Joi.object({
      brand: Joi.array().items(Joi.number()),

      type: Joi.string().allow("").allow(null),

      store: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      request_params: Joi.any(),

      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      request_params: Joi.any(),

      completed_on: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      url: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),
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

      store_id: Joi.number().required(),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      total_quantity: Joi.number().allow(null),

      price_marked: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),
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
      hs2_code: Joi.string().allow("").allow(null).required(),

      tax2: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      threshold2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      uid: Joi.number(),

      is_active: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      threshold1: Joi.number().required(),

      company_id: Joi.number().required(),

      tax1: Joi.number().required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      hs2_code: Joi.string().allow(""),

      tax2: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      threshold2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      threshold1: Joi.number(),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      tax1: Joi.number(),
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

  static PageResponse() {
    return Joi.object({
      has_previous: Joi.boolean(),

      size: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      current: Joi.string().allow(""),
    });
  }

  static TaxSlab() {
    return Joi.object({
      effective_date: Joi.string().allow("").required(),

      cess: Joi.number(),

      rate: Joi.number().required(),

      threshold: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      created_by: Joi.any(),

      hsn_code: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),
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

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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

      priority_order: Joi.number(),

      name: Joi.string().allow(""),

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
      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      has_variant: Joi.boolean(),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      teaser_tag: Joi.any(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating_count: Joi.number(),

      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      color: Joi.string().allow(""),

      rating: Joi.number(),

      short_description: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      product_online_date: Joi.string().allow(""),

      description: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      item_total: Joi.number().required(),

      next_id: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      page: CatalogModel.InventoryPage().required(),

      items: Joi.array().items(Joi.any()),
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
      quantity: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment(),

      query: CatalogModel.ArticleQuery(),

      meta: Joi.any(),

      group_id: Joi.string().allow(""),
    });
  }

  static AssignStore() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      store_ids: Joi.array().items(Joi.number()),

      channel_identifier: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      company_id: Joi.number(),

      pincode: Joi.string().allow("").required(),
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
      store_pincode: Joi.number(),

      store_id: Joi.number(),

      size: Joi.string().allow("").required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      price_effective: Joi.number(),

      quantity: Joi.number().required(),

      item_id: Joi.number().required(),

      meta: Joi.any(),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      s_city: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      group_id: Joi.string().allow(""),

      status: Joi.boolean().required(),

      price_marked: Joi.number(),

      index: Joi.number(),

      company_id: Joi.number(),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number(),

      country_code: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
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

      closing: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      opening: CatalogModel.LocationTimingSerializer(),
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

  static UserSerializer2() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      created_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      name: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean(),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),
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
      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      warnings: Joi.any(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      address: CatalogModel.GetAddressSerializer().required(),

      _custom_json: Joi.any(),

      phone_number: Joi.string().allow("").required(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      modified_on: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      code: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),

      verified_by: CatalogModel.UserSerializer1(),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer1(),

      documents: Joi.array().items(CatalogModel.Document()),

      integration_type: CatalogModel.LocationIntegrationType(),

      manager: CatalogModel.LocationManagerSerializer(),
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

      uid: Joi.number().required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

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
