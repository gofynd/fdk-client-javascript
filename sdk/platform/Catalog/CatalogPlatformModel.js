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

      status: Joi.number(),

      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      result: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),
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

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),
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

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

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

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      query: Joi.any(),

      params: Joi.any(),

      type: Joi.string().allow(""),

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
      logo: CatalogModel.Media(),

      action: CatalogModel.AutocompleteAction(),

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      product_uid: Joi.number().required(),

      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      created_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      created_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetProductBundleCreateResponse()),

      page: CatalogModel.Page(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      price: Joi.any(),

      name: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      identifier: Joi.any(),

      attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Price() {
    return Joi.object({
      min_effective: Joi.number(),

      currency: Joi.string().allow(""),

      max_effective: Joi.number(),

      min_marked: Joi.number(),

      max_marked: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      quantity: Joi.number(),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      product_details: CatalogModel.LimitedProductData(),

      product_uid: Joi.number(),

      price: CatalogModel.Price(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number(),

      min_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_select: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      logo: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow(""),

      name: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      is_active: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      slug: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static Meta() {
    return Joi.object({
      unit: Joi.string().allow(""),

      headers: Joi.any(),

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
      description: Joi.string().allow(""),

      image: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      guide: CatalogModel.Guide(),

      modified_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      subtitle: Joi.string().allow(""),

      created_by: Joi.any(),

      active: Joi.boolean(),

      brand_id: Joi.number(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static ListSizeGuide() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),

      page: Joi.any(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      modified_by: Joi.any(),

      title: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      guide: Joi.any(),

      tag: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: Joi.any(),

      active: Joi.boolean(),

      brand_id: Joi.number(),
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
      minimum: Joi.number(),

      increment_unit: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      seo: CatalogModel.SEOData(),

      is_gift: Joi.boolean(),

      alt_text: Joi.any(),

      is_cod: Joi.boolean(),

      moq: CatalogModel.MOQData(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
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
      minimum: Joi.number(),

      increment_unit: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      seo: CatalogModel.ApplicationItemSEO(),

      is_gift: Joi.boolean(),

      _custom_json: Joi.any(),

      is_cod: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),

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
      values: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),

      condition: Joi.array().items(Joi.any()),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      unit: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      priority: Joi.number().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      template_slugs: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      priority: Joi.number().required(),
    });
  }

  static ConfigErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static PageResponseType() {
    return Joi.object({
      next: Joi.number().required(),

      total_count: Joi.number().required(),

      has_next: Joi.boolean().required(),

      current: Joi.number().required(),
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
      app_id: Joi.string().allow("").required(),

      default_key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),
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
      units: Joi.array().items(Joi.any()),

      key: Joi.string().allow(""),

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

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map_values: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      sort: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),
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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),
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

  static ProductSize() {
    return Joi.object({
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      priority: Joi.number().required(),
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
      title: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      priority: Joi.number().required(),
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

      type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      created_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      created_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),
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
      filter: Joi.any(),

      sort: Joi.any(),
    });
  }

  static EntityConfiguration() {
    return Joi.object({
      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      app_id: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_type: Joi.string().allow("").required(),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      data: CatalogModel.EntityConfiguration(),

      is_default: Joi.boolean(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      selected_min: Joi.number(),

      is_selected: Joi.boolean().required(),

      currency_symbol: Joi.string().allow(""),

      count: Joi.number(),

      currency_code: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      min: Joi.number(),

      selected_max: Joi.number(),

      display_format: Joi.string().allow(""),

      max: Joi.number(),

      value: Joi.any().required(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
    });
  }

  static ProductFilters() {
    return Joi.object({
      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),

      key: CatalogModel.ProductFiltersKey().required(),
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

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
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
      aspect_ratio: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
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

  static CollectionBanner() {
    return Joi.object({
      portrait: CatalogModel.CollectionImage().required(),

      landscape: CatalogModel.CollectionImage().required(),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),
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
      type: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      logo: CatalogModel.CollectionImage().required(),

      created_by: CatalogModel.UserInfo(),

      published: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      banners: CatalogModel.CollectionBanner().required(),

      description: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      _locale_language: Joi.any(),

      slug: Joi.string().allow("").required(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      priority: Joi.number(),

      is_visible: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      seo: CatalogModel.SeoDetail(),

      name: Joi.string().allow("").required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
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
      portrait: CatalogModel.BannerImage(),

      landscape: CatalogModel.BannerImage(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      badge: Joi.any(),

      logo: CatalogModel.BannerImage(),

      tag: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

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

      allow_facets: Joi.boolean(),

      badge: Joi.any(),

      logo: CatalogModel.Media1(),

      tag: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      priority: Joi.number(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      page: CatalogModel.Page(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      badge: Joi.any(),

      logo: CatalogModel.Media1(),

      tag: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      logo: CatalogModel.CollectionImage(),

      published: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      banners: CatalogModel.CollectionBanner(),

      description: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      _locale_language: Joi.any(),

      slug: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      priority: Joi.number(),

      is_visible: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      seo: CatalogModel.SeoDetail(),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
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
      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),

      title: Joi.string().allow(""),
    });
  }

  static Price1() {
    return Joi.object({
      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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
      product_online_date: Joi.string().allow(""),

      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      promo_meta: Joi.any(),

      rating_count: Joi.number(),

      attributes: Joi.any(),

      rating: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      medias: Joi.array().items(CatalogModel.Media1()),

      image_nature: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      description: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      uid: Joi.number(),

      slug: Joi.string().allow("").required(),

      teaser_tag: Joi.any(),

      color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      sellable: Joi.boolean(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page(),
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
      available_articles: Joi.number(),

      name: Joi.string().allow(""),

      available_sizes: Joi.number(),

      total_articles: Joi.number(),

      article_freshness: Joi.number(),

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
      data: CatalogModel.CrossSellingData(),

      brand_distribution: CatalogModel.CatalogInsightBrand(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      enabled: Joi.boolean(),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number(),

      brand_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()).required(),

      modified_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      modified_on: Joi.number().required(),

      enabled: Joi.boolean().required(),

      opt_level: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      company_id: Joi.number().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      created_by: Joi.any(),
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
      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      company_id: Joi.number(),

      total_article: Joi.number(),

      brand_name: Joi.string().allow(""),

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
      manager: Joi.any(),

      address: Joi.any(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      timing: Joi.any(),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      store_code: Joi.string().allow(""),

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
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      format: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      multi: Joi.boolean(),

      mandatory: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      depends_on: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      indexing: Joi.boolean().required(),
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
      description: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      filters: CatalogModel.AttributeMasterFilter(),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      details: CatalogModel.AttributeMasterDetails(),

      logo: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug_key: Joi.string().allow(""),

      uid: Joi.number(),

      template_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      errors: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      platforms: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      priority_order: Joi.number().required(),

      _custom_json: Joi.any(),

      _cls: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

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
      contact: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      page_no: Joi.number(),

      page_size: Joi.number(),

      search: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      priority_order: Joi.number(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      slug: Joi.string().allow(""),
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
      errors: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static UserDetail() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),

      username: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      modified_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      name: Joi.any().required(),

      synonyms: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      priority_order: Joi.number().required(),

      verified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      _cls: Joi.any(),

      logo: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      slug: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      description: Joi.string().allow(""),

      modified_by: Joi.any(),

      name: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      is_expirable: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      created_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),
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
      custom_order: Joi.any(),

      product_publish: Joi.any(),

      tags: Joi.any(),

      is_dependent: Joi.any(),

      no_of_boxes: Joi.any(),

      short_description: Joi.any(),

      description: Joi.any(),

      item_type: Joi.any(),

      category_slug: Joi.any(),

      multi_size: Joi.any(),

      currency: Joi.any(),

      is_active: Joi.any(),

      trader: Joi.any(),

      slug: Joi.any(),

      command: Joi.any(),

      sizes: Joi.any(),

      product_group_tag: Joi.any(),

      size_guide: Joi.any(),

      trader_type: Joi.any(),

      teaser_tag: Joi.any(),

      name: Joi.any(),

      country_of_origin: Joi.any(),

      highlights: Joi.any(),

      media: Joi.any(),

      hsn_code: Joi.any(),

      item_code: Joi.any(),

      variants: Joi.any(),

      return_config: Joi.any(),

      brand_uid: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      description: Joi.string().allow(""),

      definitions: Joi.any(),

      type: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

      properties: CatalogModel.Properties(),
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
      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      is_expirable: Joi.boolean().required(),

      attributes: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

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

  static UserInfo1() {
    return Joi.object({
      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      filters: Joi.any(),

      type: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      created_by: CatalogModel.UserInfo1(),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
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
      filters: CatalogModel.ProductTemplateExportFilterRequest(),

      type: Joi.string().allow("").allow(null),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductPartialExportRequest() {
    return Joi.object({
      status: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductConfigurationDownloads() {
    return Joi.object({
      multivalue: Joi.boolean(),

      data: Joi.array().items(Joi.any()),
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

      google: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),
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
      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      marketplaces: CatalogModel.CategoryMapping(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      slug: Joi.string().allow(""),

      priority: Joi.number(),

      level: Joi.number().required(),
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
      marketplaces: CatalogModel.CategoryMapping(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      uid: Joi.number(),

      media: CatalogModel.Media2(),

      created_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      slug: Joi.string().allow(""),

      priority: Joi.number(),

      level: Joi.number().required(),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Category()),

      page: CatalogModel.Page(),
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

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),

      manufacturing_time_unit: Joi.string().allow(""),
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

  static TaxIdentifier() {
    return Joi.object({
      reporting_hsn: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
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
      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),

      time: Joi.number().required(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      change_request_id: Joi.any(),

      custom_order: CatalogModel.CustomOrder(),

      is_set: Joi.boolean(),

      product_publish: CatalogModel.ProductPublish(),

      tags: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      is_dependent: Joi.boolean(),

      bulk_job_id: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      no_of_boxes: Joi.number(),

      requester: Joi.string().allow(""),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      departments: Joi.array().items(Joi.number()).required(),

      short_description: Joi.string().allow(""),

      description: Joi.string().allow(""),

      variant_group: Joi.any(),

      item_type: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

      category_slug: Joi.string().allow("").required(),

      multi_size: Joi.boolean(),

      currency: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      _custom_json: Joi.any(),

      uid: Joi.number().allow(null),

      company_id: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      sizes: Joi.array().items(Joi.any()).required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_image_less_product: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      teaser_tag: CatalogModel.TeaserTag(),

      action: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      country_of_origin: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      variant_media: Joi.any(),

      item_code: Joi.string().allow("").required(),

      variants: Joi.any(),

      return_config: CatalogModel.ReturnConfig().required(),

      brand_uid: Joi.number().required(),
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

  static ProductPublish1() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

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

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      custom_order: Joi.any(),

      brand: CatalogModel.Brand(),

      is_set: Joi.boolean(),

      id: Joi.string().allow(""),

      variants: Joi.any(),

      product_publish: CatalogModel.ProductPublish1(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean(),

      attributes: Joi.any(),

      created_by: Joi.any(),

      is_dependent: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      all_sizes: Joi.array().items(Joi.any()),

      no_of_boxes: Joi.number(),

      tax_identifier: Joi.any(),

      image_nature: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      category_uid: Joi.number(),

      description: Joi.string().allow(""),

      variant_group: Joi.any(),

      all_company_ids: Joi.array().items(Joi.number()),

      item_type: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      multi_size: Joi.boolean(),

      currency: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      trader: Joi.array().items(CatalogModel.Trader()),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      slug: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      primary_color: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_image_less_product: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      modified_by: Joi.any(),

      pending: Joi.string().allow(""),

      color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      moq: Joi.any(),

      verified_on: Joi.string().allow(""),

      category: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(CatalogModel.Media1()),

      variant_media: Joi.any(),

      hsn_code: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      item_code: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      return_config: CatalogModel.ReturnConfigResponse(),

      brand_uid: Joi.number(),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSchemaV2()),

      page: CatalogModel.Page(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      category_uid: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),
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

      tags: Joi.array().items(Joi.string().allow("")),

      raw_key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      created_by: Joi.any(),

      suggestion: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      enabled_for_end_consumer: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      modified_by: Joi.any(),

      name: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      variant: Joi.boolean(),

      synonyms: Joi.any(),

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
      item_length: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      size: Joi.any().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_width: Joi.number().required(),

      item_height: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

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

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      custom_order: Joi.any(),

      brand: CatalogModel.Brand(),

      is_set: Joi.boolean(),

      id: Joi.string().allow(""),

      variants: Joi.any(),

      product_publish: CatalogModel.ProductPublished(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean(),

      attributes: Joi.any(),

      created_by: Joi.any(),

      is_dependent: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      all_sizes: Joi.array().items(Joi.any()),

      no_of_boxes: Joi.number(),

      tax_identifier: Joi.any(),

      image_nature: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      category_uid: Joi.number(),

      description: Joi.string().allow(""),

      variant_group: Joi.any(),

      all_company_ids: Joi.array().items(Joi.number()),

      item_type: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      multi_size: Joi.boolean(),

      currency: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      trader: Joi.array().items(CatalogModel.Trader()),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      slug: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      primary_color: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_image_less_product: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      modified_by: Joi.any(),

      pending: Joi.string().allow(""),

      color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      moq: Joi.any(),

      verified_on: Joi.string().allow(""),

      category: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(CatalogModel.Media1()),

      variant_media: Joi.any(),

      hsn_code: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      item_code: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      return_config: CatalogModel.ReturnConfigResponse(),

      brand_uid: Joi.number(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Product()),

      page: CatalogModel.Page(),
    });
  }

  static BulkJob() {
    return Joi.object({
      tracking_url: Joi.string().allow(""),

      failed: Joi.number(),

      succeed: Joi.number(),

      custom_template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      cancelled_records: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      total: Joi.number(),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      file_path: Joi.string().allow(""),

      company_id: Joi.number().required(),

      created_by: CatalogModel.UserInfo1(),

      failed_records: Joi.array().items(Joi.any()),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),
    });
  }

  static UserDetail1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      failed: Joi.number(),

      succeed: Joi.number(),

      template_tag: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserDetail1(),

      cancelled: Joi.number(),

      template: CatalogModel.ProductTemplate(),

      modified_on: Joi.string().allow(""),

      total: Joi.number(),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      failed_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      items: CatalogModel.ProductBulkRequest(),

      page: CatalogModel.Page(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      data: Joi.array().items(Joi.any()).required(),

      batch_id: Joi.string().allow("").required(),

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
      company_id: Joi.number(),

      user: Joi.any().required(),

      url: Joi.string().allow("").required(),
    });
  }

  static UserCommon() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      company_id: Joi.number(),

      username: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      tracking_url: Joi.string().allow(""),

      failed: Joi.number(),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserCommon(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      total: Joi.number(),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      retry: Joi.number(),

      file_path: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      failed_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkAssetResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Items()),

      page: CatalogModel.Page(),
    });
  }

  static ProductSizeDeleteDataResponse() {
    return Joi.object({
      company_id: Joi.number(),

      size: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static ProductSizeDeleteResponse() {
    return Joi.object({
      success: Joi.boolean(),

      data: CatalogModel.ProductSizeDeleteDataResponse(),
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
      size_distribution: CatalogModel.SizeDistribution().required(),

      name: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static InvSize() {
    return Joi.object({
      item_length: Joi.number().allow(null),

      is_set: Joi.boolean(),

      price: Joi.number(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      size: Joi.any().required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      price_transfer: Joi.number().allow(null),

      item_width: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      price_effective: Joi.number().required(),

      item_height: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      store_code: Joi.string().allow("").required(),

      item_weight: Joi.number().allow(null),

      quantity: Joi.number().required(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      uid: Joi.number(),

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

  static InventoryResponse() {
    return Joi.object({
      price: Joi.number(),

      store: Joi.any(),

      identifiers: Joi.any(),

      size: Joi.string().allow(""),

      item_id: Joi.number(),

      sellable_quantity: Joi.number(),

      currency: Joi.string().allow(""),

      price_transfer: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      price_effective: Joi.number(),

      uid: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),

      page: CatalogModel.Page(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
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

  static DimensionResponse() {
    return Joi.object({
      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      length: Joi.number().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      transfer: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      tp_notes: Joi.any(),

      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      effective: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
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
      order_committed: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),
    });
  }

  static Trader1() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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
      brand: CatalogModel.BrandMeta().required(),

      is_set: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserSerializer(),

      fynd_meta: Joi.any(),

      fragile: Joi.boolean().required(),

      trace_id: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      weight: CatalogModel.WeightResponse().required(),

      item_id: Joi.number().required(),

      set: CatalogModel.InventorySet(),

      company: CatalogModel.CompanyMeta().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      identifier: Joi.any().required(),

      stage: Joi.string().allow(""),

      store: CatalogModel.StoreMeta().required(),

      fynd_article_code: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      price: CatalogModel.PriceMeta().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      quantities: CatalogModel.Quantities(),

      seller_identifier: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      added_on_store: Joi.string().allow(""),

      is_active: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      _custom_json: Joi.any(),

      expiration_date: Joi.string().allow(""),

      meta: Joi.any().allow(null),

      fynd_item_code: Joi.string().allow("").required(),

      total_quantity: Joi.number().required(),

      modified_by: CatalogModel.UserSerializer(),

      size: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      track_inventory: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig1(),
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

  static DateMeta() {
    return Joi.object({
      inventory_updated_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
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

  static ArticleStoreResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      transfer: Joi.number(),

      currency: Joi.string().allow(""),

      tp_notes: Joi.any(),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static QuantitiesArticle() {
    return Joi.object({
      order_committed: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),
    });
  }

  static Trader2() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      brand: CatalogModel.BrandMeta1(),

      is_set: Joi.boolean(),

      id: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      tags: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserSerializer(),

      trace_id: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      weight: CatalogModel.WeightResponse1(),

      item_id: Joi.number(),

      company: CatalogModel.CompanyMeta1(),

      dimension: CatalogModel.DimensionResponse1(),

      identifier: Joi.any(),

      stage: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      price: CatalogModel.PriceArticle(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      quantities: CatalogModel.QuantitiesArticle(),

      seller_identifier: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      uid: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      total_quantity: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      platforms: Joi.any(),

      size: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig2(),
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
      failed: Joi.number(),

      succeed: Joi.number(),

      modified_by: Joi.any(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      total: Joi.number(),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: Joi.any(),

      failed_records: Joi.array().items(Joi.string().allow("")),
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
      price_marked: Joi.number(),

      total_quantity: Joi.number(),

      price: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      quantity: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      user: Joi.any(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      store: Joi.array().items(Joi.number()),

      brand: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      filters: Joi.any(),

      type: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      created_by: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
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
      from_date: Joi.string().allow("").allow(null),

      store_ids: Joi.array().items(Joi.number()),

      to_date: Joi.string().allow("").allow(null),

      brand_ids: Joi.array().items(Joi.number()),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      filters: CatalogModel.InventoryExportAdvanceOption(),

      type: Joi.string().allow("").required(),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryExportFilter() {
    return Joi.object({
      from_date: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()).required(),

      to_date: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      filters: CatalogModel.InventoryExportFilter().required(),

      type: Joi.string().allow("").allow(null),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")),

      from_date: Joi.string().allow(""),

      stores: Joi.array().items(Joi.string().allow("")),

      to_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      filters: CatalogModel.InventoryJobFilters().required(),

      type: Joi.string().allow("").allow(null),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      status: Joi.any(),

      modified_on: Joi.string().allow(""),

      cancelled_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      created_by: CatalogModel.UserDetail(),

      cancelled_on: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryExportJobListResponse() {
    return Joi.object({
      items: CatalogModel.InventoryJobDetailResponse().required(),
    });
  }

  static InventoryPartialExportRequest() {
    return Joi.object({
      status: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryExportCreateFilters() {
    return Joi.object({
      from_date: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      to_date: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryExportCreateResponse() {
    return Joi.object({
      filters: CatalogModel.InventoryExportCreateFilters().required(),

      type: Joi.string().allow("").allow(null),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      status: Joi.any(),

      modified_on: Joi.string().allow(""),

      cancelled_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      created_by: CatalogModel.UserDetail(),

      cancelled_on: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

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
      price_marked: Joi.number(),

      total_quantity: Joi.number().allow(null),

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      expiration_date: Joi.string().allow(""),

      store_id: Joi.number().required(),

      trace_id: Joi.string().allow(""),
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
      items: Joi.array().items(CatalogModel.InventoryResponseItem()),

      message: Joi.string().allow("").required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      threshold2: Joi.number(),

      id: Joi.string().allow(""),

      tax2: Joi.number(),

      hs2_code: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      threshold1: Joi.number(),

      tax1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      company_id: Joi.number(),

      tax_on_mrp: Joi.boolean(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      threshold2: Joi.number(),

      tax2: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      threshold1: Joi.number().required(),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      tax1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      tax_on_mrp: Joi.boolean().required(),
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
      description: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      hsn_code_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow("").required(),

      created_by: Joi.any(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      has_next: Joi.boolean(),

      size: Joi.number(),

      current: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      item_total: Joi.number(),
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
      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      departments: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      discount: Joi.string().allow(""),
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

      uid: Joi.number(),

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

  static DepartmentIdentifier() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
    });
  }

  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.Child()),
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
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.any(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      promo_meta: Joi.any(),

      rating_count: Joi.number(),

      attributes: Joi.any(),

      rating: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      medias: Joi.array().items(CatalogModel.Media1()),

      image_nature: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      description: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow("").required(),

      teaser_tag: Joi.any(),

      color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      next_id: Joi.string().allow(""),

      item_total: Joi.number().required(),
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
      ignored_stores: Joi.array().items(Joi.number()),

      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),
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
      group_id: Joi.string().allow(""),

      query: CatalogModel.ArticleQuery(),

      article_assignment: CatalogModel.ArticleAssignment(),

      quantity: Joi.number(),

      meta: Joi.any(),
    });
  }

  static AssignStore() {
    return Joi.object({
      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      store_ids: Joi.array().items(Joi.number()),

      app_id: Joi.string().allow("").required(),

      channel_type: Joi.string().allow(""),

      channel_identifier: Joi.string().allow(""),

      company_id: Joi.number(),

      pincode: Joi.string().allow("").required(),
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

      price_marked: Joi.number(),

      store_pincode: Joi.number(),

      status: Joi.boolean().required(),

      _id: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      uid: Joi.string().allow(""),

      price_effective: Joi.number(),

      store_id: Joi.number(),

      index: Joi.number(),

      company_id: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      s_city: Joi.string().allow(""),

      quantity: Joi.number().required(),

      meta: Joi.any(),

      strategy_wise_listing: Joi.array().items(Joi.any()),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
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
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      business_type: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      reject_reason: Joi.string().allow(""),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),

      legal_name: Joi.string().allow(""),

      value: Joi.string().allow("").required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),
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

      open: Joi.boolean().required(),

      opening: CatalogModel.LocationTimingSerializer(),

      closing: CatalogModel.LocationTimingSerializer(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

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
      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      address: CatalogModel.GetAddressSerializer().required(),

      display_name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      created_by: CatalogModel.UserSerializer1(),

      modified_on: Joi.string().allow(""),

      phone_number: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),

      integration_type: CatalogModel.LocationIntegrationType(),

      stage: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      manager: CatalogModel.LocationManagerSerializer(),

      modified_by: CatalogModel.UserSerializer1(),

      name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      warnings: Joi.any(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),
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

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.number().required(),

      _custom_json: Joi.any(),

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
