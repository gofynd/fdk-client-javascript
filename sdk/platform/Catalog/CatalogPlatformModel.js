const Joi = require("joi");

class CatalogModel {
  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      error: Joi.string().allow(""),
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
      app_id: Joi.string().allow(""),

      result: CatalogModel.SearchKeywordResult().required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      result: Joi.any(),

      uid: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

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
      query: Joi.any(),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      action: CatalogModel.AutocompleteAction(),

      logo: CatalogModel.Media(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

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

      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      created_by: Joi.any(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      created_by: Joi.any(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),

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
      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.string().allow(""),

      quantity: Joi.number(),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),
    });
  }

  static Price() {
    return Joi.object({
      max_marked: Joi.number(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),

      currency: Joi.string().allow(""),

      min_marked: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      attributes: Joi.any(),

      quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      price: Joi.any(),

      short_description: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      identifier: Joi.any(),
    });
  }

  static GetProducts() {
    return Joi.object({
      min_quantity: Joi.number(),

      max_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_uid: Joi.number(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      price: CatalogModel.Price(),

      auto_add_to_cart: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.GetProducts()),

      company_id: Joi.number(),

      slug: Joi.string().allow(""),
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
      company_id: Joi.number(),

      title: Joi.string().allow("").required(),

      image: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      brand_id: Joi.number(),

      name: Joi.string().allow("").required(),

      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      active: Joi.boolean(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      description: Joi.string().allow(""),
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
      created_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      brand_id: Joi.number(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      name: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      guide: Joi.any(),

      company_id: Joi.number(),
    });
  }

  static MetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
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

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      is_gift: Joi.boolean(),

      alt_text: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      success: Joi.boolean(),

      uid: Joi.number(),
    });
  }

  static SEOData() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      values: Joi.array().items(Joi.any()),

      condition: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      key: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      priority: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

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
      current: Joi.number().required(),

      has_next: Joi.boolean().required(),

      next: Joi.number().required(),

      total_count: Joi.number().required(),
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
      priority: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

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

      filter_types: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),
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
      compare: Joi.any(),

      detail: Joi.any(),

      similar: Joi.any(),

      variant: Joi.any(),
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
      priority: Joi.number().required(),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

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
      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),
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
      display: Joi.string().allow(""),

      end: Joi.number(),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      sort: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      map: Joi.any(),

      condition: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      value: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
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
      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

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
      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),
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
      currency_symbol: Joi.string().allow(""),

      selected_max: Joi.number(),

      selected_min: Joi.number(),

      count: Joi.number(),

      is_selected: Joi.boolean().required(),

      display: Joi.string().allow("").required(),

      query_format: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      value: Joi.any().required(),

      min: Joi.number(),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

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
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),
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

  static CollectionBanner() {
    return Joi.object({
      portrait: CatalogModel.CollectionImage().required(),

      landscape: CatalogModel.CollectionImage().required(),
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

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      start: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      priority: Joi.number(),

      app_id: Joi.string().allow("").required(),

      badge: CatalogModel.CollectionBadge(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo(),

      is_visible: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      _custom_json: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      type: Joi.string().allow("").required(),

      logo: CatalogModel.CollectionImage().required(),

      banners: CatalogModel.CollectionBanner().required(),

      _schedule: CatalogModel.CollectionSchedule(),

      published: Joi.boolean(),
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

  static CollectionCreateResponse() {
    return Joi.object({
      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),
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
      url: Joi.string().allow("").required(),

      meta: Joi.any(),

      type: Joi.string().allow(""),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_facets: Joi.boolean(),

      uid: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),
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
      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_facets: Joi.boolean(),

      uid: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      priority: Joi.number(),

      badge: CatalogModel.CollectionBadge(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      description: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      _custom_json: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      type: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      banners: CatalogModel.CollectionBanner(),

      _schedule: CatalogModel.CollectionSchedule(),

      published: Joi.boolean(),
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
      item: Joi.array().items(CatalogModel.ItemQueryForUserCollection()),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),
    });
  }

  static UpdatedResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      items_not_updated: Joi.array().items(Joi.number()),
    });
  }

  static ProductBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      logo: CatalogModel.Media1(),

      uid: Joi.number(),
    });
  }

  static Price1() {
    return Joi.object({
      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),
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
      color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      sellable: Joi.boolean(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      rating: Joi.number(),

      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      image_nature: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      price: CatalogModel.ProductListingPrice(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      short_description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      rating_count: Joi.number(),

      attributes: Joi.any(),

      discount: Joi.string().allow(""),

      has_variant: Joi.boolean(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      out_of_stock_count: Joi.number(),

      sellable_count: Joi.number(),

      count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      available_sizes: Joi.number(),

      article_freshness: Joi.number(),

      total_articles: Joi.number(),

      available_articles: Joi.number(),

      name: Joi.string().allow(""),

      total_sizes: Joi.number(),
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
      store_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      enabled: Joi.boolean().required(),

      opt_level: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      modified_on: Joi.number().required(),

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

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_id: Joi.number(),

      company_id: Joi.number(),

      total_article: Joi.number(),

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

      brand: Joi.number(),

      store: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      additional_contacts: Joi.array().items(Joi.any()),

      timing: Joi.any(),

      manager: Joi.any(),

      created_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      address: Joi.any(),

      documents: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

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
      range: CatalogModel.AttributeSchemaRange(),

      multi: Joi.boolean(),

      mandatory: Joi.boolean(),

      format: Joi.string().allow(""),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      priority: Joi.number(),

      depends_on: Joi.array().items(Joi.string().allow("")),

      indexing: Joi.boolean().required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      is_nested: Joi.boolean(),

      meta: CatalogModel.AttributeMasterMeta(),

      details: CatalogModel.AttributeMasterDetails(),

      enabled_for_end_consumer: Joi.boolean(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      id: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      uid: Joi.number(),

      slug_key: Joi.string().allow(""),

      name: Joi.string().allow(""),

      template_slug: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      errors: Joi.any(),

      code: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      _cls: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      platforms: Joi.any(),

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
      contact: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      priority_order: Joi.number(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      page_size: Joi.number(),

      name: Joi.string().allow(""),

      search: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      page_no: Joi.number(),

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
      message: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      errors: Joi.any(),

      code: Joi.string().allow(""),
    });
  }

  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      verified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      verified_on: Joi.string().allow(""),

      _id: Joi.any(),

      uid: Joi.number().required(),

      _cls: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail(),

      created_by: CatalogModel.UserDetail(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

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
      highlights: Joi.any(),

      sizes: Joi.any(),

      tags: Joi.any(),

      size_guide: Joi.any(),

      brand_uid: Joi.any(),

      command: Joi.any(),

      multi_size: Joi.any(),

      country_of_origin: Joi.any(),

      description: Joi.any(),

      slug: Joi.any(),

      hsn_code: Joi.any(),

      no_of_boxes: Joi.any(),

      product_publish: Joi.any(),

      trader_type: Joi.any(),

      is_active: Joi.any(),

      is_dependent: Joi.any(),

      custom_order: Joi.any(),

      teaser_tag: Joi.any(),

      currency: Joi.any(),

      name: Joi.any(),

      product_group_tag: Joi.any(),

      category_slug: Joi.any(),

      short_description: Joi.any(),

      media: Joi.any(),

      item_code: Joi.any(),

      item_type: Joi.any(),

      trader: Joi.any(),

      variants: Joi.any(),

      return_config: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      type: Joi.string().allow(""),

      definitions: Joi.any(),

      required: Joi.array().items(Joi.string().allow("")),
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
      attributes: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

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
      template_tags: Joi.any(),

      status: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      task_id: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      seller_id: Joi.number(),

      trigger_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      id: Joi.string().allow(""),
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
      catalog_id: Joi.number(),

      name: Joi.string().allow("").required(),
    });
  }

  static CategoryMapping() {
    return Joi.object({
      google: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l1: Joi.number().required(),

      l2: Joi.number().required(),

      department: Joi.number().required(),
    });
  }

  static Media2() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      marketplaces: CatalogModel.CategoryMapping(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      departments: Joi.array().items(Joi.number()).required(),

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
      marketplaces: CatalogModel.CategoryMapping(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      name: Joi.string().allow("").required(),

      created_by: Joi.any(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      media: CatalogModel.Media2(),

      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static SingleCategoryResponse() {
    return Joi.object({
      data: CatalogModel.Category(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
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

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      url: Joi.string().allow("").allow(null),

      tag: Joi.string().allow("").allow(null),
    });
  }

  static Trader() {
    return Joi.object({
      name: Joi.string().allow("").required(),

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

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      net_quantity: CatalogModel.NetQuantity(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      sizes: Joi.array().items(Joi.any()).required(),

      tags: Joi.array().items(Joi.string().allow("")),

      size_guide: Joi.string().allow(""),

      brand_uid: Joi.number().required(),

      variant_media: Joi.any(),

      multi_size: Joi.boolean(),

      description: Joi.string().allow(""),

      country_of_origin: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      no_of_boxes: Joi.number(),

      bulk_job_id: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),

      uid: Joi.number().allow(null),

      is_active: Joi.boolean(),

      company_id: Joi.number().required(),

      is_image_less_product: Joi.boolean(),

      variant_group: Joi.any(),

      is_dependent: Joi.boolean(),

      custom_order: CatalogModel.CustomOrder(),

      teaser_tag: CatalogModel.TeaserTag(),

      change_request_id: Joi.any(),

      currency: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow("").required(),

      category_slug: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      action: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      media: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow("").required(),

      item_type: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      is_set: Joi.boolean(),

      attributes: Joi.any(),

      variants: Joi.any(),

      return_config: CatalogModel.ReturnConfig().required(),

      requester: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),
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

  static ReturnConfigResponse() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      color: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      highlights: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.any()),

      size_guide: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      brand_uid: Joi.number(),

      variant_media: Joi.any(),

      multi_size: Joi.boolean(),

      description: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      all_company_ids: Joi.array().items(Joi.number()),

      tax_identifier: Joi.any(),

      no_of_boxes: Joi.number(),

      product_publish: CatalogModel.ProductPublished(),

      uid: Joi.number(),

      is_physical: Joi.boolean(),

      category_uid: Joi.number(),

      is_active: Joi.boolean(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      company_id: Joi.number(),

      is_image_less_product: Joi.boolean(),

      category: Joi.any(),

      is_dependent: Joi.boolean(),

      is_expirable: Joi.boolean(),

      variant_group: Joi.any(),

      moq: Joi.any(),

      stage: Joi.string().allow(""),

      custom_order: Joi.any(),

      teaser_tag: Joi.any(),

      created_on: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      name: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.Brand(),

      created_by: Joi.any(),

      template_tag: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      category_slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      modified_by: Joi.any(),

      short_description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      media: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      is_set: Joi.boolean(),

      attributes: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      all_sizes: Joi.array().items(Joi.any()),

      variants: Joi.any(),

      return_config: CatalogModel.ReturnConfigResponse(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      pending: Joi.string().allow(""),
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
      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      brand_uid: Joi.number(),

      name: Joi.string().allow(""),

      category_uid: Joi.number(),

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
      suggestion: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      enabled_for_end_consumer: Joi.boolean(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      variant: Joi.boolean(),

      details: CatalogModel.AttributeMasterDetails().required(),

      modified_on: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      raw_key: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      unit: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      synonyms: Joi.any(),

      is_nested: Joi.boolean(),

      logo: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),
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

      item_height: Joi.number().required(),

      item_length: Joi.number().required(),

      size: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_width: Joi.number().required(),

      item_weight_unit_of_measure: Joi.string().allow("").required(),

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

  static UserInfo1() {
    return Joi.object({
      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      failed_records: Joi.array().items(Joi.any()),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

      created_on: Joi.string().allow("").required(),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      custom_template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      template_tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      company_id: Joi.number().required(),

      total: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      batch_id: Joi.string().allow("").required(),

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
      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

      created_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      failed: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      created_by: CatalogModel.UserDetail1(),

      is_active: Joi.boolean(),

      template_tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      template: CatalogModel.ProductTemplate(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),
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

      data: Joi.array().items(Joi.any()).required(),

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
      url: Joi.string().allow("").required(),

      company_id: Joi.number(),

      user: Joi.any().required(),
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
      retry: Joi.number(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      total: Joi.number(),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      id: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),
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
      success: Joi.boolean(),

      data: CatalogModel.ProductSizeDeleteDataResponse(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),

      uid: Joi.number(),
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
      size_distribution: CatalogModel.SizeDistribution().required(),

      name: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static GTIN() {
    return Joi.object({
      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),

      gtin_value: Joi.string().allow("").required(),
    });
  }

  static InvSize() {
    return Joi.object({
      price_transfer: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      is_set: Joi.boolean(),

      item_height: Joi.number().allow(null),

      quantity: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      store_code: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      currency: Joi.string().allow("").required(),

      price: Joi.number(),

      size: Joi.string().allow("").required(),

      item_length: Joi.number().allow(null),

      price_effective: Joi.number().required(),

      expiration_date: Joi.string().allow(""),

      item_width: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

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
      price_transfer: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      item_id: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      price: Joi.number(),

      size: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      price_effective: Joi.number(),

      store: Joi.any(),

      identifiers: Joi.any(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
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

      sellable: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      length: Joi.number().required(),

      height: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),

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
      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      currency: Joi.string().allow("").required(),

      effective: Joi.number().required(),

      transfer: Joi.number().required(),

      marked: Joi.number().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
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

  static InventorySellerResponse() {
    return Joi.object({
      added_on_store: Joi.string().allow(""),

      fynd_article_code: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta().required(),

      fynd_meta: Joi.any(),

      fynd_item_code: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      quantities: CatalogModel.Quantities(),

      total_quantity: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow("").required(),

      dimension: CatalogModel.DimensionResponse().required(),

      country_of_origin: Joi.string().allow("").required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      tax_identifier: Joi.any(),

      uid: Joi.string().allow("").required(),

      fragile: Joi.boolean().required(),

      is_active: Joi.boolean(),

      weight: CatalogModel.WeightResponse().required(),

      raw_meta: Joi.any(),

      stage: Joi.string().allow(""),

      set: CatalogModel.InventorySet(),

      created_by: CatalogModel.UserSerializer(),

      brand: CatalogModel.BrandMeta().required(),

      price: CatalogModel.PriceMeta().required(),

      size: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer(),

      _custom_json: Joi.any(),

      store: CatalogModel.StoreMeta().required(),

      identifier: Joi.any().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      is_set: Joi.boolean(),

      track_inventory: Joi.boolean(),

      item_id: Joi.number().required(),

      return_config: CatalogModel.ReturnConfig1(),

      expiration_date: Joi.string().allow(""),
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

  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static QuantitiesArticle() {
    return Joi.object({
      damaged: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
    });
  }

  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      width: Joi.number(),

      height: Joi.number(),

      length: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
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
      tp_notes: Joi.any(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),

      transfer: Joi.number(),

      marked: Joi.number(),
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

  static Trader2() {
    return Joi.object({
      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static GetInventories() {
    return Joi.object({
      trace_id: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta1(),

      quantities: CatalogModel.QuantitiesArticle(),

      inventory_updated_on: Joi.string().allow(""),

      total_quantity: Joi.number(),

      date_meta: CatalogModel.DateMeta(),

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      country_of_origin: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      tax_identifier: Joi.any(),

      uid: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      brand: CatalogModel.BrandMeta1(),

      price: CatalogModel.PriceArticle(),

      size: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      store: CatalogModel.ArticleStoreResponse(),

      identifier: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      is_set: Joi.boolean(),

      track_inventory: Joi.boolean(),

      item_id: Joi.number(),

      return_config: CatalogModel.ReturnConfig2(),

      expiration_date: Joi.string().allow(""),

      platforms: Joi.any(),
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
      failed_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      total: Joi.number(),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

      created_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      failed: Joi.number(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

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
      quantity: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      price_marked: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      total_quantity: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      store_code: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      price: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      expiration_date: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      user: Joi.any(),
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

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      request_params: Joi.any(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      status: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

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
      trace_id: Joi.string().allow(""),

      price_marked: Joi.number(),

      store_id: Joi.number().required(),

      total_quantity: Joi.number().allow(null),

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      expiration_date: Joi.string().allow(""),
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

  static HsnUpsert() {
    return Joi.object({
      tax1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      threshold1: Joi.number().required(),

      uid: Joi.number(),

      threshold2: Joi.number(),

      is_active: Joi.boolean(),

      tax2: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      company_id: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      threshold1: Joi.number(),

      threshold2: Joi.number(),

      modified_on: Joi.string().allow(""),

      tax2: Joi.number(),

      id: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      company_id: Joi.number(),

      hs2_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
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

      current: Joi.string().allow(""),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),
    });
  }

  static TaxSlab() {
    return Joi.object({
      threshold: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),

      cess: Joi.number(),

      rate: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      hsn_code_id: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),
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
      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      departments: Joi.array().items(Joi.string().allow("")),
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
      priority_order: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.Child()),

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
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      rating: Joi.number(),

      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      image_nature: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      short_description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      rating_count: Joi.number(),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

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
      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

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

      group_id: Joi.string().allow(""),

      quantity: Joi.number(),

      meta: Joi.any(),

      article_assignment: CatalogModel.ArticleAssignment(),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_identifier: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      channel_type: Joi.string().allow(""),

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
      group_id: Joi.string().allow(""),

      status: Joi.boolean().required(),

      quantity: Joi.number().required(),

      price_marked: Joi.number(),

      meta: Joi.any(),

      store_id: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      item_id: Joi.number().required(),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      s_city: Joi.string().allow(""),

      store_pincode: Joi.number(),

      size: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      company_id: Joi.number(),

      index: Joi.number(),
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

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number(),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      business_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CatalogModel.UserSerializer1(),

      created_by: CatalogModel.UserSerializer1(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),
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
      minute: Joi.number(),

      hour: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      weekday: Joi.string().allow("").required(),

      closing: CatalogModel.LocationTimingSerializer(),

      opening: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      password: Joi.string().allow(""),

      enabled: Joi.boolean(),

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

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      manager: CatalogModel.LocationManagerSerializer(),

      company: CatalogModel.GetCompanySerializer(),

      integration_type: CatalogModel.LocationIntegrationType(),

      address: CatalogModel.GetAddressSerializer().required(),

      phone_number: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      name: Joi.string().allow("").required(),

      created_by: CatalogModel.UserSerializer2(),

      display_name: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer2(),

      _custom_json: Joi.any(),

      code: Joi.string().allow("").required(),

      warnings: Joi.any(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      verified_by: CatalogModel.UserSerializer2(),

      store_type: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),
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

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      _custom_json: Joi.any(),
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
