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
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      result: CatalogModel.SearchKeywordResult().required(),

      _custom_json: Joi.any(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      result: Joi.any(),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),
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

  static Media() {
    return Joi.object({
      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),
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
      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      min_quantity: Joi.number().required(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      created_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      created_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

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
      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
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

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      max_marked: Joi.number(),

      currency: Joi.string().allow(""),

      min_marked: Joi.number(),

      min_effective: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      identifier: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      slug: Joi.string().allow(""),

      price: Joi.any(),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.Price(),

      product_details: CatalogModel.LimitedProductData(),

      product_uid: Joi.number(),

      min_quantity: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.GetProducts()),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      company_id: Joi.number(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      is_active: Joi.boolean(),

      same_store_assignment: Joi.boolean(),

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
      brand_id: Joi.number(),

      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      title: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      description: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      image: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      active: Joi.boolean(),
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
      brand_id: Joi.number(),

      created_by: Joi.any(),

      tag: Joi.string().allow(""),

      title: Joi.string().allow(""),

      modified_by: Joi.any(),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      guide: Joi.any(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      active: Joi.boolean(),
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
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      seo: CatalogModel.SEOData(),

      moq: CatalogModel.MOQData(),

      is_gift: Joi.boolean(),

      alt_text: Joi.any(),

      is_cod: Joi.boolean(),
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
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
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

      moq: CatalogModel.ApplicationItemMOQ(),

      alt_text: Joi.any(),

      is_gift: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      is_cod: Joi.boolean(),

      _custom_json: Joi.any(),
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

      values: Joi.array().items(Joi.any()),

      condition: Joi.array().items(Joi.any()),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      priority: Joi.number().required(),

      unit: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),
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

      has_next: Joi.boolean().required(),

      total_count: Joi.number().required(),

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
      priority: Joi.number().required(),

      default_key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

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

      logo: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize(),
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

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize().required(),

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

  static ConfigurationBucketPoints() {
    return Joi.object({
      start: Joi.number(),

      end: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      condition: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      map: Joi.any(),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      sort: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      display_name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),
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

  static AppConfiguration() {
    return Joi.object({
      type: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),

      app_id: Joi.string().allow("").required(),

      listing: CatalogModel.ConfigurationListing(),

      created_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      type: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),

      app_id: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      created_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      app_id: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),
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
      currency_code: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      count: Joi.number(),

      max: Joi.number(),

      selected_max: Joi.number(),

      query_format: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      display: Joi.string().allow("").required(),

      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

      selected_min: Joi.number(),

      value: Joi.any().required(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),

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

  static UserInfo() {
    return Joi.object({
      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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
      portrait: CatalogModel.CollectionImage().required(),

      landscape: CatalogModel.CollectionImage().required(),
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
      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      start: Joi.string().allow(""),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      _custom_json: Joi.any(),

      priority: Joi.number(),

      modified_by: CatalogModel.UserInfo(),

      logo: CatalogModel.CollectionImage().required(),

      meta: Joi.any(),

      sort_on: Joi.string().allow(""),

      published: Joi.boolean(),

      type: Joi.string().allow("").required(),

      allow_sort: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.CollectionBanner().required(),

      app_id: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      allow_facets: Joi.boolean(),

      is_visible: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      tags: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserInfo(),

      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      badge: CatalogModel.CollectionBadge(),

      description: Joi.string().allow(""),
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
      priority: Joi.number(),

      logo: CatalogModel.BannerImage(),

      meta: Joi.any(),

      sort_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      name: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      badge: Joi.any(),

      description: Joi.string().allow(""),
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
      priority: Joi.number(),

      logo: CatalogModel.Media1(),

      meta: Joi.any(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      uid: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      action: CatalogModel.Action(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      badge: Joi.any(),

      description: Joi.string().allow(""),
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

      logo: CatalogModel.Media1(),

      meta: Joi.any(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      uid: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      badge: Joi.any(),

      description: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      priority: Joi.number(),

      modified_by: CatalogModel.UserInfo(),

      logo: CatalogModel.CollectionImage(),

      meta: Joi.any(),

      sort_on: Joi.string().allow(""),

      published: Joi.boolean(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.CollectionBanner(),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      is_visible: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      _schedule: CatalogModel.CollectionSchedule(),

      tags: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      items_not_updated: Joi.array().items(Joi.number()),
    });
  }

  static Price1() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

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

  static ProductBrand() {
    return Joi.object({
      logo: CatalogModel.Media1(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),

      title: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      medias: Joi.array().items(CatalogModel.Media1()),

      image_nature: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      brand: CatalogModel.ProductBrand(),

      product_online_date: Joi.string().allow(""),

      type: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      slug: Joi.string().allow("").required(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      rating_count: Joi.number(),

      rating: Joi.number(),

      promo_meta: Joi.any(),

      color: Joi.string().allow(""),

      sellable: Joi.boolean(),

      attributes: Joi.any(),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      similars: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      item_code: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      out_of_stock_count: Joi.number(),

      count: Joi.number(),

      sellable_count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      article_freshness: Joi.number(),

      total_articles: Joi.number(),

      available_sizes: Joi.number(),

      total_sizes: Joi.number(),

      available_articles: Joi.number(),

      name: Joi.string().allow(""),
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
      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean(),

      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      company_id: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      created_on: Joi.number().required(),

      platform: Joi.string().allow("").required(),

      modified_on: Joi.number().required(),
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
      company_id: Joi.number(),

      brand_id: Joi.number(),

      brand_name: Joi.string().allow(""),

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
      timing: Joi.any(),

      address: Joi.any(),

      store_code: Joi.string().allow(""),

      company_id: Joi.number(),

      documents: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow(""),

      manager: Joi.any(),

      additional_contacts: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.StoreDetail()),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      indexing: Joi.boolean().required(),

      priority: Joi.number(),

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
      enriched: Joi.boolean(),

      mandatory_details: CatalogModel.AttributeMasterMandatoryDetails().required(),
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
      type: Joi.string().allow("").required(),

      format: Joi.string().allow(""),

      mandatory: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      multi: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      filters: CatalogModel.AttributeMasterFilter(),

      meta: CatalogModel.AttributeMasterMeta(),

      enabled_for_end_consumer: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      schema: CatalogModel.AttributeMaster(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      description: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      name: Joi.string().allow(""),
    });
  }

  static ProductTemplateCategory() {
    return Joi.object({
      template_slug: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateCategory()),
    });
  }

  static PTErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      errors: Joi.any(),

      code: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _cls: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

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

      _id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      page_size: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      modified_by: CatalogModel.UserSerializer(),

      logo: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      priority_order: Joi.number(),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      search: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      page_no: Joi.number(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

      meta: Joi.any(),

      status: Joi.number(),

      errors: Joi.any(),

      code: Joi.string().allow(""),
    });
  }

  static UserDetail() {
    return Joi.object({
      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      _custom_json: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      slug: Joi.any(),

      synonyms: Joi.array().items(Joi.any()),

      _id: Joi.any(),

      created_on: Joi.string().allow("").required(),

      _cls: Joi.any(),

      is_active: Joi.boolean(),

      verified_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      modified_on: Joi.string().allow("").required(),

      name: Joi.any().required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      is_physical: Joi.boolean().required(),

      modified_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      logo: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      categories: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      country_of_origin: Joi.any(),

      category_slug: Joi.any(),

      currency: Joi.any(),

      return_config: Joi.any(),

      teaser_tag: Joi.any(),

      multi_size: Joi.any(),

      no_of_boxes: Joi.any(),

      size_guide: Joi.any(),

      brand_uid: Joi.any(),

      product_publish: Joi.any(),

      slug: Joi.any(),

      short_description: Joi.any(),

      item_type: Joi.any(),

      tags: Joi.any(),

      product_group_tag: Joi.any(),

      hsn_code: Joi.any(),

      trader: Joi.any(),

      variants: Joi.any(),

      name: Joi.any(),

      sizes: Joi.any(),

      custom_order: Joi.any(),

      is_dependent: Joi.any(),

      highlights: Joi.any(),

      trader_type: Joi.any(),

      description: Joi.any(),

      is_active: Joi.any(),

      media: Joi.any(),

      item_code: Joi.any(),

      command: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      type: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      definitions: Joi.any(),

      title: Joi.string().allow(""),

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
      tag: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      logo: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      categories: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      brand: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")),
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
      data: CatalogModel.ProductDownloadItemsData(),

      created_by: CatalogModel.VerifiedBy(),

      task_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      id: Joi.string().allow(""),

      seller_id: Joi.number(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      template_tags: Joi.any(),

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
      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),

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
      department: Joi.number().required(),

      l2: Joi.number().required(),

      l1: Joi.number().required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      priority: Joi.number(),

      departments: Joi.array().items(Joi.number()).required(),

      marketplaces: CatalogModel.CategoryMapping(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      name: Joi.string().allow("").required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),
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
      priority: Joi.number(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      marketplaces: CatalogModel.CategoryMapping(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),
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

  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),
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
      time: Joi.number().required(),

      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
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
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.any().required(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      _custom_json: Joi.any(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      country_of_origin: Joi.string().allow("").required(),

      category_slug: Joi.string().allow("").required(),

      net_quantity: CatalogModel.NetQuantity(),

      template_tag: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      return_config: CatalogModel.ReturnConfig().required(),

      variant_group: Joi.any(),

      is_image_less_product: Joi.boolean(),

      change_request_id: Joi.any(),

      teaser_tag: CatalogModel.TeaserTag(),

      multi_size: Joi.boolean(),

      no_of_boxes: Joi.number(),

      size_guide: Joi.string().allow(""),

      brand_uid: Joi.number().required(),

      product_publish: CatalogModel.ProductPublish(),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      requester: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      variants: Joi.any(),

      uid: Joi.number().allow(null),

      name: Joi.string().allow("").required(),

      attributes: Joi.any(),

      sizes: Joi.array().items(Joi.any()).required(),

      custom_order: CatalogModel.CustomOrder(),

      is_dependent: Joi.boolean(),

      departments: Joi.array().items(Joi.number()).required(),

      company_id: Joi.number().required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      action: Joi.string().allow(""),

      bulk_job_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow("").required(),

      description: Joi.string().allow(""),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
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
      logo: CatalogModel.Logo(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),

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
      image_nature: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      modified_by: Joi.any(),

      moq: Joi.any(),

      category: Joi.any(),

      category_slug: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      template_tag: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      variant_media: Joi.any(),

      brand: CatalogModel.Brand(),

      return_config: CatalogModel.ReturnConfigResponse(),

      category_uid: Joi.number(),

      images: Joi.array().items(CatalogModel.Image()),

      variant_group: Joi.any(),

      is_image_less_product: Joi.boolean(),

      all_sizes: Joi.array().items(Joi.any()),

      teaser_tag: Joi.any(),

      multi_size: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      brand_uid: Joi.number(),

      product_publish: CatalogModel.ProductPublished(),

      slug: Joi.string().allow(""),

      id: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      hsn_code: Joi.string().allow(""),

      is_set: Joi.boolean(),

      created_by: Joi.any(),

      pending: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      color: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      uid: Joi.number(),

      variants: Joi.any(),

      trader: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      attributes: Joi.any(),

      custom_order: Joi.any(),

      modified_on: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      is_physical: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      is_expirable: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      all_company_ids: Joi.array().items(Joi.number()),

      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      _custom_json: Joi.any(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),
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
      category_uid: Joi.number(),

      brand_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

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
      unit: Joi.string().allow(""),

      modified_by: Joi.any(),

      logo: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      raw_key: Joi.string().allow(""),

      variant: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      suggestion: Joi.string().allow(""),

      synonyms: Joi.any(),

      is_nested: Joi.boolean(),

      details: CatalogModel.AttributeMasterDetails().required(),

      description: Joi.string().allow(""),
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
      item_height: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_weight: Joi.number().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_length: Joi.number().required(),

      size: Joi.any().required(),

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

  static UserInfo1() {
    return Joi.object({
      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      custom_template_tag: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      modified_by: CatalogModel.UserInfo1(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      company_id: Joi.number().required(),

      total: Joi.number(),

      created_on: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      succeed: Joi.number(),

      tracking_url: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),
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

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      template: CatalogModel.ProductTemplate(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserDetail1(),

      company_id: Joi.number(),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      succeed: Joi.number(),

      modified_on: Joi.string().allow(""),
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

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),
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
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static Items() {
    return Joi.object({
      created_by: CatalogModel.UserCommon(),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserCommon(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      total: Joi.number(),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      succeed: Joi.number(),

      tracking_url: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      retry: Joi.number(),
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

      size: Joi.string().allow(""),

      item_id: Joi.number(),
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

      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),
    });
  }

  static GTIN() {
    return Joi.object({
      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),

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

      size_distribution: CatalogModel.SizeDistribution().required(),

      name: Joi.string().allow(""),
    });
  }

  static InvSize() {
    return Joi.object({
      item_height: Joi.number().allow(null),

      is_set: Joi.boolean(),

      price_transfer: Joi.number().allow(null),

      quantity: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      store_code: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_weight: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      set: CatalogModel.InventorySet(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      price: Joi.number(),

      price_effective: Joi.number().required(),

      item_length: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      size: Joi.any().required(),

      item_width: Joi.number().allow(null),
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
      price_transfer: Joi.number(),

      quantity: Joi.number(),

      identifiers: Joi.any(),

      sellable_quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      store: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),

      price: Joi.number(),

      price_effective: Joi.number(),

      item_id: Joi.number(),

      currency: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),
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

  static PriceMeta() {
    return Joi.object({
      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      currency: Joi.string().allow("").required(),

      effective: Joi.number().required(),

      transfer: Joi.number().required(),
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

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
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

      order_committed: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      height: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      tax_identifier: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer(),

      meta: Joi.any().allow(null),

      company: CatalogModel.CompanyMeta().required(),

      price: CatalogModel.PriceMeta().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      size: Joi.string().allow("").required(),

      brand: CatalogModel.BrandMeta().required(),

      return_config: CatalogModel.ReturnConfig1(),

      identifier: Joi.any().required(),

      set: CatalogModel.InventorySet(),

      store: CatalogModel.StoreMeta().required(),

      fynd_article_code: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      quantities: CatalogModel.Quantities(),

      track_inventory: Joi.boolean(),

      fynd_meta: Joi.any(),

      total_quantity: Joi.number().required(),

      stage: Joi.string().allow(""),

      fynd_item_code: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      trace_id: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse().required(),

      weight: CatalogModel.WeightResponse().required(),

      fragile: Joi.boolean().required(),

      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      item_id: Joi.number().required(),

      is_active: Joi.boolean(),

      raw_meta: Joi.any(),

      _custom_json: Joi.any(),
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

  static PriceArticle() {
    return Joi.object({
      marked: Joi.number(),

      tp_notes: Joi.any(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),

      transfer: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
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
      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),
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

      order_committed: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),
    });
  }

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      height: Joi.number(),

      length: Joi.number(),

      width: Joi.number(),

      unit: Joi.string().allow(""),
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
      tax_identifier: Joi.any(),

      modified_by: CatalogModel.UserSerializer(),

      country_of_origin: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta1(),

      price: CatalogModel.PriceArticle(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      size: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      return_config: CatalogModel.ReturnConfig2(),

      platforms: Joi.any(),

      identifier: Joi.any(),

      id: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      store: CatalogModel.ArticleStoreResponse(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      quantities: CatalogModel.QuantitiesArticle(),

      track_inventory: Joi.boolean(),

      inventory_updated_on: Joi.string().allow(""),

      total_quantity: Joi.number(),

      stage: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      uid: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      weight: CatalogModel.WeightResponse1(),

      seller_identifier: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      item_id: Joi.number(),
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
      created_by: Joi.any(),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      succeed: Joi.number(),

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
      quantity: Joi.number(),

      store_code: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      total_quantity: Joi.number(),

      price: Joi.number(),

      price_effective: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow("").allow(null),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      user: Joi.any(),
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
      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      request_params: Joi.any(),

      trigger_on: Joi.string().allow(""),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      request_params: Joi.any(),

      trigger_on: Joi.string().allow(""),
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
      store_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      total_quantity: Joi.number().allow(null),

      price_effective: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow(""),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      payload: Joi.array().items(CatalogModel.InventoryPayload()),

      meta: Joi.any(),

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
      tax_on_mrp: Joi.boolean().required(),

      tax1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      threshold1: Joi.number().required(),

      tax2: Joi.number(),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      threshold2: Joi.number(),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax_on_mrp: Joi.boolean(),

      tax1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      hs2_code: Joi.string().allow(""),

      threshold1: Joi.number(),

      tax2: Joi.number(),

      modified_on: Joi.string().allow(""),

      threshold2: Joi.number(),

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
      has_next: Joi.boolean(),

      item_total: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.string().allow(""),

      size: Joi.number(),
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
      type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      reporting_hsn: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      country_code: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

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
      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      discount: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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

      priority_order: Joi.number(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

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
      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.Child()),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

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
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.any(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      medias: Joi.array().items(CatalogModel.Media1()),

      image_nature: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      product_online_date: Joi.string().allow(""),

      type: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      slug: Joi.string().allow("").required(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      rating_count: Joi.number(),

      rating: Joi.number(),

      promo_meta: Joi.any(),

      color: Joi.string().allow(""),

      attributes: Joi.any(),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      similars: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      item_code: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),

      item_total: Joi.number().required(),

      has_previous: Joi.boolean(),

      next_id: Joi.string().allow(""),
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
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static ArticleQuery() {
    return Joi.object({
      ignored_stores: Joi.array().items(Joi.number()),

      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      quantity: Joi.number(),

      meta: Joi.any(),

      article_assignment: CatalogModel.ArticleAssignment(),

      query: CatalogModel.ArticleQuery(),

      group_id: Joi.string().allow(""),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_identifier: Joi.string().allow(""),

      company_id: Joi.number(),

      app_id: Joi.string().allow("").required(),

      channel_type: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      pincode: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),
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
      quantity: Joi.number().required(),

      s_city: Joi.string().allow(""),

      store_id: Joi.number(),

      status: Joi.boolean().required(),

      meta: Joi.any(),

      company_id: Joi.number(),

      store_pincode: Joi.number(),

      price_marked: Joi.number(),

      _id: Joi.string().allow(""),

      price_effective: Joi.number(),

      item_id: Joi.number().required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      group_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      index: Joi.number(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),
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

      created_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
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
      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),

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

      closing: CatalogModel.LocationTimingSerializer(),

      opening: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),
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
      e_waybill: CatalogModel.InvoiceCredSerializer(),

      e_invoice: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      phone_number: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer1(),

      documents: Joi.array().items(CatalogModel.Document()),

      company: CatalogModel.GetCompanySerializer(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      address: CatalogModel.GetAddressSerializer().required(),

      manager: CatalogModel.LocationManagerSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      created_by: CatalogModel.UserSerializer1(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      display_name: Joi.string().allow("").required(),

      integration_type: CatalogModel.LocationIntegrationType(),

      warnings: Joi.any(),

      code: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
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

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      uid: Joi.number().required(),

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
