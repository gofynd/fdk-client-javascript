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

      words: Joi.array().items(Joi.string().allow("")),

      result: CatalogModel.SearchKeywordResult().required(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      result: Joi.any(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      status: Joi.number(),

      meta: Joi.any(),

      error: Joi.string().allow(""),

      code: Joi.string().allow(""),

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
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      params: Joi.any(),

      url: Joi.string().allow(""),

      query: Joi.any(),
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

      _custom_json: Joi.any(),

      action: CatalogModel.AutocompleteAction(),

      display: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),
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

      product_uid: Joi.number().required(),

      max_quantity: Joi.number().required(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      is_active: Joi.boolean().required(),

      company_id: Joi.number(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      is_active: Joi.boolean().required(),

      company_id: Joi.number(),
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
      images: Joi.array().items(Joi.string().allow("")),

      price: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      attributes: Joi.any(),

      quantity: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      identifier: Joi.any(),
    });
  }

  static Price() {
    return Joi.object({
      max_marked: Joi.number(),

      currency: Joi.string().allow(""),

      min_effective: Joi.number(),

      max_effective: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      is_available: Joi.boolean(),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      min_quantity: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      price: CatalogModel.Price(),

      auto_add_to_cart: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_uid: Joi.number(),

      max_quantity: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      is_active: Joi.boolean(),

      company_id: Joi.number(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      is_active: Joi.boolean().required(),

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
      brand_id: Joi.number(),

      title: Joi.string().allow("").required(),

      active: Joi.boolean(),

      subtitle: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      image: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      guide: CatalogModel.Guide(),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

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
      items: Joi.array().items(Joi.any()),

      page: Joi.any(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      brand_id: Joi.number(),

      title: Joi.string().allow(""),

      active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      guide: Joi.any(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      company_id: Joi.number(),
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

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      alt_text: Joi.any(),

      moq: CatalogModel.MOQData(),
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
      minimum: Joi.number(),

      increment_unit: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static MetaFields() {
    return Joi.object({
      value: Joi.any().required(),

      key: Joi.any().required(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

      alt_text: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),
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
      values: Joi.array().items(Joi.any()),

      condition: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      unit: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      is_default: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),
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

      next: Joi.number().required(),

      current: Joi.number().required(),

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
      default_key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),
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
      units: Joi.array().items(Joi.any()),

      filter_types: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

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

      detail: Joi.any(),

      similar: Joi.any(),

      compare: Joi.any(),
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
      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      size: CatalogModel.ProductSize().required(),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

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
      title: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      priority: Joi.number().required(),

      size: CatalogModel.ProductSize(),

      is_active: Joi.boolean().required(),

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
      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

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
      end: Joi.number(),

      start: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      value: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      condition: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      sort: Joi.string().allow(""),

      map: Joi.any(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      is_active: Joi.boolean().required(),

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

  static ConfigurationListing() {
    return Joi.object({
      sort: CatalogModel.ConfigurationListingSort().required(),

      filter: CatalogModel.ConfigurationListingFilter().required(),
    });
  }

  static AppConfiguration() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      app_id: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      created_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),

      modified_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      app_id: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      modified_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

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
      app_id: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      selected_min: Joi.number(),

      query_format: Joi.string().allow(""),

      value: Joi.any().required(),

      display_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      selected_max: Joi.number(),

      min: Joi.number(),

      max: Joi.number(),

      count: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),

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
      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      duration: Joi.number().allow(null),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
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
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
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

  static CreateCollection() {
    return Joi.object({
      badge: CatalogModel.CollectionBadge(),

      is_visible: Joi.boolean(),

      allow_facets: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage().required(),

      banners: CatalogModel.CollectionBanner().required(),

      sort_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      app_id: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      allow_sort: Joi.boolean(),

      _locale_language: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.SeoDetail(),

      modified_by: CatalogModel.UserInfo(),

      created_by: CatalogModel.UserInfo(),

      priority: Joi.number(),

      slug: Joi.string().allow("").required(),

      published: Joi.boolean(),
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

  static CollectionCreateResponse() {
    return Joi.object({
      badge: Joi.any(),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.BannerImage(),

      banners: CatalogModel.ImageUrls(),

      sort_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),
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

      type: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      action: CatalogModel.Action(),

      badge: Joi.any(),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media1(),

      uid: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),
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
      badge: Joi.any(),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media1(),

      uid: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      badge: CatalogModel.CollectionBadge(),

      is_visible: Joi.boolean(),

      allow_facets: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage(),

      banners: CatalogModel.CollectionBanner(),

      sort_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      allow_sort: Joi.boolean(),

      type: Joi.string().allow(""),

      _locale_language: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.SeoDetail(),

      modified_by: CatalogModel.UserInfo(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      published: Joi.boolean(),
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

  static ProductDetailAttribute() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
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

      currency_symbol: Joi.string().allow(""),

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

  static ProductListingDetail() {
    return Joi.object({
      sellable: Joi.boolean(),

      discount: Joi.string().allow(""),

      promo_meta: Joi.any(),

      teaser_tag: Joi.any(),

      rating_count: Joi.number(),

      description: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      attributes: Joi.any(),

      color: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      similars: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      type: Joi.string().allow(""),

      rating: Joi.number(),

      has_variant: Joi.boolean(),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      price: CatalogModel.ProductListingPrice(),

      item_type: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      item_code: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),
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

  static CatalogInsightItem() {
    return Joi.object({
      sellable_count: Joi.number(),

      count: Joi.number(),

      out_of_stock_count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_sizes: Joi.number(),

      available_sizes: Joi.number(),

      total_articles: Joi.number(),

      available_articles: Joi.number(),

      name: Joi.string().allow(""),

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
      brand_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      enabled: Joi.boolean(),

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      modified_by: Joi.any(),

      enabled: Joi.boolean().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_on: Joi.number().required(),

      company_id: Joi.number().required(),
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

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      brand_id: Joi.number(),

      total_article: Joi.number(),

      company_id: Joi.number(),
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

      company: Joi.string().allow(""),

      brand: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      timing: Joi.any(),

      store_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      address: Joi.any(),

      name: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      manager: Joi.any(),

      company_id: Joi.number(),
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

      allowed_values: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      range: CatalogModel.AttributeSchemaRange(),

      multi: Joi.boolean(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      priority: Joi.number(),

      depends_on: Joi.array().items(Joi.string().allow("")),

      indexing: Joi.boolean().required(),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      meta: CatalogModel.AttributeMasterMeta(),

      enabled_for_end_consumer: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      schema: CatalogModel.AttributeMaster(),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      details: CatalogModel.AttributeMasterDetails(),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug_key: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

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
      status: Joi.number(),

      meta: Joi.any(),

      errors: Joi.any(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      priority_order: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      _cls: Joi.string().allow(""),

      platforms: Joi.any(),
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

      username: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      priority_order: Joi.number(),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      search: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      page_no: Joi.number(),

      uid: Joi.number(),

      item_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

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

      meta: Joi.any(),

      errors: Joi.any(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),
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
      synonyms: Joi.array().items(Joi.any()),

      logo: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      _id: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      priority_order: Joi.number().required(),

      created_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      modified_on: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserDetail(),

      slug: Joi.any(),

      name: Joi.any().required(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      _cls: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      categories: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_expirable: Joi.boolean().required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      is_archived: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tag: Joi.string().allow(""),
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
      categories: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_expirable: Joi.boolean().required(),

      id: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tag: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      teaser_tag: Joi.any(),

      variants: Joi.any(),

      return_config: Joi.any(),

      description: Joi.any(),

      is_active: Joi.any(),

      country_of_origin: Joi.any(),

      product_group_tag: Joi.any(),

      hsn_code: Joi.any(),

      trader_type: Joi.any(),

      category_slug: Joi.any(),

      brand_uid: Joi.any(),

      size_guide: Joi.any(),

      name: Joi.any(),

      currency: Joi.any(),

      short_description: Joi.any(),

      no_of_boxes: Joi.any(),

      multi_size: Joi.any(),

      command: Joi.any(),

      sizes: Joi.any(),

      is_dependent: Joi.any(),

      trader: Joi.any(),

      custom_order: Joi.any(),

      product_publish: Joi.any(),

      tags: Joi.any(),

      media: Joi.any(),

      highlights: Joi.any(),

      item_type: Joi.any(),

      slug: Joi.any(),

      item_code: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      description: Joi.string().allow(""),

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

      brand: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      status: Joi.string().allow(""),

      url: Joi.string().allow(""),

      seller_id: Joi.number(),

      trigger_on: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      id: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      task_id: Joi.string().allow(""),

      template_tags: Joi.any(),

      completed_on: Joi.string().allow(""),
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
      name: Joi.string().allow("").required(),

      catalog_id: Joi.number(),
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
      department: Joi.number().required(),

      l2: Joi.number().required(),

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
      departments: Joi.array().items(Joi.number()).required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      marketplaces: CatalogModel.CategoryMapping(),

      priority: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      level: Joi.number().required(),

      is_active: Joi.boolean().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      media: CatalogModel.Media2(),
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
      departments: Joi.array().items(Joi.number()).required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      marketplaces: CatalogModel.CategoryMapping(),

      priority: Joi.number(),

      uid: Joi.number(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      level: Joi.number().required(),

      is_active: Joi.boolean().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      media: CatalogModel.Media2(),
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

  static TeaserTag() {
    return Joi.object({
      url: Joi.string().allow("").allow(null),

      tag: Joi.string().allow("").allow(null),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.any().required(),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      action: Joi.string().allow(""),

      teaser_tag: CatalogModel.TeaserTag(),

      variants: Joi.any(),

      is_set: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantity(),

      return_config: CatalogModel.ReturnConfig().required(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      variant_media: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number().allow(null),

      category_slug: Joi.string().allow("").required(),

      attributes: Joi.any(),

      brand_uid: Joi.number().required(),

      size_guide: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      requester: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      multi_size: Joi.boolean(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      change_request_id: Joi.any(),

      sizes: Joi.array().items(Joi.any()).required(),

      is_dependent: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      custom_order: CatalogModel.CustomOrder(),

      product_publish: CatalogModel.ProductPublish(),

      tags: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(CatalogModel.Media1()),

      template_tag: Joi.string().allow("").required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      departments: Joi.array().items(Joi.number()).required(),

      is_image_less_product: Joi.boolean(),

      bulk_job_id: Joi.string().allow(""),

      item_type: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      variant_group: Joi.any(),

      item_code: Joi.string().allow("").required(),

      company_id: Joi.number().required(),
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
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Image() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static ProductPublish1() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static Logo() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

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

  static ProductSchemaV2() {
    return Joi.object({
      teaser_tag: Joi.any(),

      variants: Joi.any(),

      is_set: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      return_config: CatalogModel.ReturnConfigResponse(),

      description: Joi.string().allow(""),

      moq: Joi.any(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      variant_media: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      is_expirable: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      all_sizes: Joi.array().items(Joi.any()),

      hsn_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      uid: Joi.number(),

      category_slug: Joi.string().allow(""),

      attributes: Joi.any(),

      brand_uid: Joi.number(),

      size_guide: Joi.string().allow(""),

      color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      multi_size: Joi.boolean(),

      pending: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      stage: Joi.string().allow(""),

      category_uid: Joi.number(),

      sizes: Joi.array().items(Joi.any()),

      is_dependent: Joi.boolean(),

      custom_order: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()),

      modified_on: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish1(),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.Brand(),

      media: Joi.array().items(CatalogModel.Media1()),

      template_tag: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      is_physical: Joi.boolean(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      is_image_less_product: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      item_type: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      slug: Joi.string().allow(""),

      variant_group: Joi.any(),

      category: Joi.any(),

      item_code: Joi.string().allow(""),

      company_id: Joi.number(),
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

      uid: Joi.number(),

      brand_uid: Joi.number(),

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
      description: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      synonyms: Joi.any(),

      name: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      suggestion: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      modified_on: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      raw_key: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      is_nested: Joi.boolean(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      variant: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      details: CatalogModel.AttributeMasterDetails().required(),
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
      item_weight: Joi.number().required(),

      item_height: Joi.number().required(),

      item_width: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      size: Joi.any().required(),

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

  static ProductPublished() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.number(),
    });
  }

  static Product() {
    return Joi.object({
      teaser_tag: Joi.any(),

      variants: Joi.any(),

      is_set: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      return_config: CatalogModel.ReturnConfigResponse(),

      description: Joi.string().allow(""),

      moq: Joi.any(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      variant_media: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      is_expirable: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      all_sizes: Joi.array().items(Joi.any()),

      hsn_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      uid: Joi.number(),

      category_slug: Joi.string().allow(""),

      attributes: Joi.any(),

      brand_uid: Joi.number(),

      size_guide: Joi.string().allow(""),

      color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      multi_size: Joi.boolean(),

      pending: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      stage: Joi.string().allow(""),

      category_uid: Joi.number(),

      sizes: Joi.array().items(Joi.any()),

      is_dependent: Joi.boolean(),

      custom_order: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()),

      modified_on: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.Brand(),

      media: Joi.array().items(CatalogModel.Media1()),

      template_tag: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      is_physical: Joi.boolean(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      is_image_less_product: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      item_type: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      slug: Joi.string().allow(""),

      variant_group: Joi.any(),

      category: Joi.any(),

      item_code: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Product()),

      page: CatalogModel.Page(),
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
      total: Joi.number(),

      template_tag: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      cancelled_records: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      tracking_url: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      is_active: Joi.boolean(),

      company_id: Joi.number().required(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),
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
      total: Joi.number(),

      template_tag: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      template: CatalogModel.ProductTemplate(),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail1(),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      company_id: Joi.number(),
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
      template_tag: Joi.string().allow("").required(),

      data: Joi.array().items(Joi.any()).required(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),
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

      user: Joi.any().required(),

      company_id: Joi.number(),
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
      total: Joi.number(),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      retry: Joi.number(),

      tracking_url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      company_id: Joi.number(),
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
      item_id: Joi.number(),

      size: Joi.string().allow(""),

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
      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),
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
      name: Joi.string().allow(""),

      quantity: Joi.number(),

      size_distribution: CatalogModel.SizeDistribution().required(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_value: Joi.any().required(),
    });
  }

  static InvSize() {
    return Joi.object({
      price_effective: Joi.number().required(),

      item_weight: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      store_code: Joi.string().allow("").required(),

      price: Joi.number(),

      item_height: Joi.number().allow(null),

      item_width: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      is_set: Joi.boolean(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      price_transfer: Joi.number().allow(null),

      quantity: Joi.number().required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      size: Joi.any().required(),

      currency: Joi.string().allow("").required(),

      item_length: Joi.number().allow(null),
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
      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      price: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      item_id: Joi.number(),

      price_transfer: Joi.number(),

      store: Joi.any(),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      size: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),

      page: CatalogModel.Page(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      width: Joi.number().required(),

      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),
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

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      tp_notes: Joi.any(),

      effective: Joi.number().required(),

      transfer: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      marked: Joi.number().required(),

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
      not_available: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      set: CatalogModel.InventorySet(),

      added_on_store: Joi.string().allow(""),

      is_set: Joi.boolean(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      expiration_date: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig1(),

      total_quantity: Joi.number().required(),

      track_inventory: Joi.boolean(),

      _custom_json: Joi.any(),

      company: CatalogModel.CompanyMeta().required(),

      is_active: Joi.boolean(),

      fynd_meta: Joi.any(),

      raw_meta: Joi.any(),

      identifier: Joi.any().required(),

      seller_identifier: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      weight: CatalogModel.WeightResponse().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      uid: Joi.string().allow("").required(),

      fragile: Joi.boolean().required(),

      meta: Joi.any().allow(null),

      tax_identifier: Joi.any(),

      trace_id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      store: CatalogModel.StoreMeta().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      fynd_item_code: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.BrandMeta().required(),

      price: CatalogModel.PriceMeta().required(),

      item_id: Joi.number().required(),

      modified_by: CatalogModel.UserSerializer(),

      created_by: CatalogModel.UserSerializer(),

      fynd_article_code: Joi.string().allow("").required(),

      quantities: CatalogModel.Quantities(),

      size: Joi.string().allow("").required(),
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
      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static DateMeta() {
    return Joi.object({
      added_on_store: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      height: Joi.number(),

      width: Joi.number(),

      length: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

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

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      tp_notes: Joi.any(),

      effective: Joi.number(),

      transfer: Joi.number(),

      marked: Joi.number(),

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
      not_available: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
    });
  }

  static GetInventories() {
    return Joi.object({
      is_set: Joi.boolean(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      expiration_date: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig2(),

      date_meta: CatalogModel.DateMeta(),

      total_quantity: Joi.number(),

      track_inventory: Joi.boolean(),

      company: CatalogModel.CompanyMeta1(),

      identifier: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      dimension: CatalogModel.DimensionResponse1(),

      id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      platforms: Joi.any(),

      tax_identifier: Joi.any(),

      trace_id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.BrandMeta1(),

      price: CatalogModel.PriceArticle(),

      item_id: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      created_by: CatalogModel.UserSerializer(),

      quantities: CatalogModel.QuantitiesArticle(),

      size: Joi.string().allow(""),
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
      total: Joi.number(),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      failed: Joi.number(),

      is_active: Joi.boolean(),

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
      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      store_code: Joi.string().allow("").required(),

      price: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      quantity: Joi.number(),

      total_quantity: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow(""),
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
      type: Joi.string().allow("").allow(null),

      store: Joi.array().items(Joi.number()),

      brand: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      status: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      request_params: Joi.any(),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      status: Joi.string().allow(""),

      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      request_params: Joi.any(),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

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
      multivalues: Joi.boolean(),

      data: Joi.array().items(CatalogModel.FilerList()),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      store_id: Joi.number().required(),

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      total_quantity: Joi.number().allow(null),

      tags: Joi.array().items(Joi.string().allow("")),
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
      errors: Joi.string().allow(""),

      message: Joi.string().allow("").required(),
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
      tax1: Joi.number(),

      threshold1: Joi.number(),

      hsn_code: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      threshold2: Joi.number(),

      id: Joi.string().allow(""),

      tax2: Joi.number(),

      hs2_code: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      tax1: Joi.number().required(),

      threshold1: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      tax_on_mrp: Joi.boolean().required(),

      threshold2: Joi.number(),

      tax2: Joi.number(),

      uid: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      tax_on_esp: Joi.boolean(),

      is_active: Joi.boolean(),

      company_id: Joi.number().required(),
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

      rate: Joi.number().required(),

      threshold: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      reporting_hsn: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      hsn_code: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      description: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static PageResponse() {
    return Joi.object({
      item_total: Joi.number(),

      current: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      size: Joi.number(),

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
      discount: Joi.string().allow(""),

      action: CatalogModel.Action(),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      priority_order: Joi.number(),

      logo: CatalogModel.Media(),

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

  static ThirdLevelChild() {
    return Joi.object({
      action: CatalogModel.Action(),

      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static Child() {
    return Joi.object({
      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      operators: Joi.any(),

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      promo_meta: Joi.any(),

      teaser_tag: Joi.any(),

      rating_count: Joi.number(),

      description: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      attributes: Joi.any(),

      color: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      similars: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      type: Joi.string().allow(""),

      rating: Joi.number(),

      has_variant: Joi.boolean(),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      item_code: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

      has_previous: Joi.boolean(),

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
      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      ignored_stores: Joi.array().items(Joi.number()),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      meta: Joi.any(),

      article_assignment: CatalogModel.ArticleAssignment(),

      quantity: Joi.number(),

      query: CatalogModel.ArticleQuery(),

      group_id: Joi.string().allow(""),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_type: Joi.string().allow(""),

      channel_identifier: Joi.string().allow(""),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      store_ids: Joi.array().items(Joi.number()),

      app_id: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

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
      status: Joi.boolean().required(),

      meta: Joi.any(),

      index: Joi.number(),

      price_effective: Joi.number(),

      item_id: Joi.number().required(),

      store_pincode: Joi.number(),

      _id: Joi.string().allow(""),

      store_id: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      uid: Joi.string().allow(""),

      price_marked: Joi.number(),

      quantity: Joi.number().required(),

      size: Joi.string().allow("").required(),

      group_id: Joi.string().allow(""),

      s_city: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer1(),

      business_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      name: Joi.string().allow(""),
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
      open: Joi.boolean().required(),

      opening: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      closing: CatalogModel.LocationTimingSerializer(),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),
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
      e_invoice: CatalogModel.InvoiceCredSerializer(),

      e_waybill: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
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
      display_name: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      company: CatalogModel.GetCompanySerializer(),

      integration_type: CatalogModel.LocationIntegrationType(),

      warnings: Joi.any(),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      address: CatalogModel.GetAddressSerializer().required(),

      documents: Joi.array().items(CatalogModel.Document()),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      created_by: CatalogModel.UserSerializer2(),

      phone_number: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserSerializer2(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

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
      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),
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
